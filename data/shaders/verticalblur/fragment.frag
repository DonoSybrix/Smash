uniform lowp sampler2D uTexture;
uniform lowp vec3 uAmbientLight;

varying lowp vec4 vColor;
varying lowp vec2 vTexCoord;
 
void main()
{
   lowp float blurSize = 3.0/256.0;
   lowp vec2 vTexCoorda = vTexCoord.st;
   lowp vec4 sum = vec4(0.0);
   sum += texture2D(uTexture, vec2(vTexCoorda.x, vTexCoorda.y - 4.0*blurSize)) * 0.05;
   sum += texture2D(uTexture, vec2(vTexCoorda.x, vTexCoorda.y - 3.0*blurSize)) * 0.09;
   sum += texture2D(uTexture, vec2(vTexCoorda.x, vTexCoorda.y - 2.0*blurSize)) * 0.12;
   sum += texture2D(uTexture, vec2(vTexCoorda.x, vTexCoorda.y - blurSize)) * 0.15;
   sum += texture2D(uTexture, vec2(vTexCoorda.x, vTexCoorda.y)) * 0.16;
   sum += texture2D(uTexture, vec2(vTexCoorda.x, vTexCoorda.y + blurSize)) * 0.15;
   sum += texture2D(uTexture, vec2(vTexCoorda.x, vTexCoorda.y + 2.0*blurSize)) * 0.12;
   sum += texture2D(uTexture, vec2(vTexCoorda.x, vTexCoorda.y + 3.0*blurSize)) * 0.09;
   sum += texture2D(uTexture, vec2(vTexCoorda.x, vTexCoorda.y + 4.0*blurSize)) * 0.05;
   gl_FragColor = sum;
}