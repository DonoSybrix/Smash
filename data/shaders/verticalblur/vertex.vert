uniform mediump mat4 uMvp;
uniform mediump mat4 uModel;

attribute lowp vec3  aPosition;
attribute lowp vec4  aColor;
attribute lowp vec2  aTexCoord;
attribute lowp vec3  aNormal;

varying lowp vec4 vColor;
varying lowp vec2 vTexCoord;

void main() 
{
    gl_Position   = (uMvp * uModel) * vec4( aPosition, 1.0);
	vColor		  = aColor;
	vTexCoord	  = aTexCoord;
    gl_PointSize  = 1.0;
}
