//////////////////////////////////
/// Material structure.
//////////////////////////////////
struct Material
{
    lowp vec3  ambient;
    lowp vec3  diffuse;
    lowp vec3  specular;
    lowp float shininess;
};

//////////////////////////////////
/// Light structure.
//////////////////////////////////
struct Light
{
    lowp vec3 attenuation;
    lowp vec3 position;
    lowp vec3 direction;
    lowp vec3 color;
};

//////////////////////////////////
/// Light result.
//////////////////////////////////
struct LightResult
{
    lowp vec3 ambient;
    lowp vec3 diffuse;
    lowp vec3 specular;
};

//////////////////////////////////
/// Uniforms.
//////////////////////////////////
uniform lowp sampler2D 	uTexture;
uniform mediump mat4 	uMvp;
uniform mediump mat4    uViewMatrix;
uniform mediump mat3    uNormal;
uniform mediump mat4 	uModel;
uniform lowp vec3 		uAmbientLight;
uniform lowp int        uLightCount;
uniform Light           uLights[14];
uniform Material 		uMaterial;

//////////////////////////////////
/// Varying.
//////////////////////////////////
varying lowp vec4 	vColor;
varying lowp vec2 	vTexCoord;
varying lowp vec3   vNormal;
varying lowp vec4 	vVertex;

//////////////////////////////////
/// Generate point light.
//////////////////////////////////
void point(in Material material, in Light light, inout LightResult lightResult ) 
{
	// Calculate light's direction.
	lowp vec3 light_direction = light.position.xyz - vVertex.xyz;

	// Attenuation.
	lowp float light_distance = length( light_direction );
	lowp float attenuation 	  = smoothstep( light.attenuation.y, light.attenuation.x, light_distance );
	
	// Normalize direciton.
	light_direction = normalize( light_direction );

	// Ambient.
	lightResult.ambient += material.ambient * uAmbientLight * attenuation;

	// Diffuse:
	lowp float n_dot_l 	 = max( 0.0, dot( vNormal, light_direction ) );
	lightResult.diffuse += ( material.diffuse * light.color * attenuation) * n_dot_l;

	// Specular.
	if (n_dot_l > 0.0) 
	{
		lowp vec3 view_direction 	 = normalize( vVertex.xyz );
		lowp vec3 reflection 		 = reflect( light_direction, vNormal );
		lowp float specular 		 = max( 0.0, dot( reflection, view_direction ) );
		lightResult.specular 		+= material.specular * vec3( 1.0, 1.0, 1.0 ) * pow( specular, material.shininess ) * attenuation;
	}
}

//////////////////////////////////
/// Main function.
//////////////////////////////////
void main() 
{
    LightResult lightResult;
    lightResult.ambient 	= vec3( 0.5, 0.5, 0.5 );
    lightResult.diffuse 	= vec3( 0.0, 0.0, 0.0 );
    lightResult.specular 	= vec3( 0.0, 0.0, 0.0 );

    lowp int lightsCount = uLightCount;
    for( int i = 0; i < 14; i++ )
    {
    	if( i < lightsCount )
    	{
 			point( uMaterial, uLights[i], lightResult );
    	}
    }

	gl_FragColor = texture2D(uTexture, vTexCoord) * vec4( lightResult.diffuse + lightResult.ambient + lightResult.specular, 1.0 );
}


