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
    lowp vec3 direction;
    lowp vec3 position;
    lowp vec3 color;
};

//////////////////////////////////
/// Uniforms.
//////////////////////////////////
uniform mediump mat4 	uMvp;
uniform mediump mat4 	uModel;
uniform mediump mat4    uProjectionMatrix;
uniform mediump mat4    uViewMatrix;
uniform mediump mat3    uNormal;
uniform mediump vec3    uCameraPosition;
uniform lowp int        uLightCount;
uniform Light           uLights[14];
uniform Material        uMaterial;

//////////////////////////////////
/// Attributes.
//////////////////////////////////
attribute lowp vec3  aPosition;
attribute lowp vec4  aColor;
attribute lowp vec2  aTexCoord;
attribute lowp vec3  aNormal;

//////////////////////////////////
/// Varying.
//////////////////////////////////
varying lowp vec4 vColor;
varying lowp vec2 vTexCoord;
varying lowp vec3 vNormal;
varying lowp vec4 vVertex;

//////////////////////////////////
/// Main function.
//////////////////////////////////
void main() 
{   
    vNormal       = uNormal * aNormal;
    vVertex       = uModel * uViewMatrix * vec4( aPosition, 1.0);
	vColor		  = aColor;
	vTexCoord	  = aTexCoord;

    gl_Position   = (uMvp * uModel) * vec4( aPosition, 1.0);
}
