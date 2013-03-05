uniform lowp sampler2D uTexture;
uniform lowp vec3 uAmbientLight;

varying lowp vec4 vColor;
varying lowp vec2 vTexCoord;


void main() 
{
	gl_FragColor = texture2D(uTexture, vTexCoord) * vColor * vec4( uAmbientLight, 1.0);
}