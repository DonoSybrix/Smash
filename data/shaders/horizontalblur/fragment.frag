uniform lowp sampler2D uTexture;
uniform lowp vec3 uAmbientLight;

varying lowp vec4 vColor;
varying lowp vec2 vTexCoord;
 
void main()
{
   lowp vec2 vTexCoorda = vTexCoord.st;
   lowp vec4 sum = vec4(0.0);
   sum += texture2D(uTexture, vec2(vTexCoorda.x - 4.0*(1.0/256.0), vTexCoorda.y)) * 0.05;
   sum += texture2D(uTexture, vec2(vTexCoorda.x - 3.0*(1.0/256.0), vTexCoorda.y)) * 0.09;
   sum += texture2D(uTexture, vec2(vTexCoorda.x - 2.0*(1.0/256.0), vTexCoorda.y)) * 0.12;
   sum += texture2D(uTexture, vec2(vTexCoorda.x - (1.0/256.0), vTexCoorda.y)) * 0.15;
   sum += texture2D(uTexture, vec2(vTexCoorda.x, vTexCoorda.y)) * 0.16;
   sum += texture2D(uTexture, vec2(vTexCoorda.x + (1.0/256.0), vTexCoorda.y)) * 0.15;
   sum += texture2D(uTexture, vec2(vTexCoorda.x + 2.0*(1.0/256.0), vTexCoorda.y)) * 0.12;
   sum += texture2D(uTexture, vec2(vTexCoorda.x + 3.0*(1.0/256.0), vTexCoorda.y)) * 0.09;
   sum += texture2D(uTexture, vec2(vTexCoorda.x + 4.0*(1.0/256.0), vTexCoorda.y)) * 0.05;
   gl_FragColor = sum;
}