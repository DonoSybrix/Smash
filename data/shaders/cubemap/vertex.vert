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
uniform mediump mat4 uMvp;
uniform mediump mat4 uModel;

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
varying lowp vec3 vPosition;

//////////////////////////////////
/// Main function.
//////////////////////////////////
void main() 
{
	vColor		  = aColor;
	vTexCoord	  = aTexCoord;
	vPosition	  = aPosition;

    gl_Position   = (uMvp * uModel) * vec4( aPosition, 1.0);
}
