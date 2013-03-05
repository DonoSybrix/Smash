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
    lowp vec3 position;
    lowp vec3 direction;
    lowp vec3 colour;
};

//////////////////////////////////
/// Uniforms.
//////////////////////////////////
uniform lowp samplerCube 	uTexture;
uniform lowp vec3 			uAmbientLight;
uniform Light       		uLights[14];

//////////////////////////////////
/// Varying.
//////////////////////////////////
varying lowp vec4 vColor;
varying lowp vec2 vTexCoord;
varying lowp vec3 vPosition;

void main() 
{
	gl_FragColor = textureCube( uTexture, vPosition );
}