//////////////////////////////////
/// Main function.
//////////////////////////////////
void main() 
{
	vColor		  = aColor;

    gl_Position   = (uMvp * uModel) * vec4( aPosition, 1.0);
}