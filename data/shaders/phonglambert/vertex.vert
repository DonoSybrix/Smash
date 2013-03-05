uniform mediump mat4 uMvp;
uniform mediump mat4 uModel;
uniform lowp float uTime;

attribute lowp vec3  aPosition;
attribute lowp vec4  aColor;
attribute lowp vec2  aTexCoord;
attribute lowp vec3  aNormal;

varying lowp vec4 vColor;
varying lowp vec2 vTexCoord;

void main() 
{
	vColor		  = aColor;
	vTexCoord	  = aTexCoord;

	lowp vec4 position = vec4( aPosition, 1.0);
	position.x 	*= (sin( uTime ) + 2.0);

    gl_Position   = (uMvp * uModel) * position;
}
