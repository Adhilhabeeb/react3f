export default /* glsl */ `
varying vec2 vUv;

uniform vec3  ucolor;
void main() {



    gl_FragColor = vec4(ucolor, 1.0); // Red color


}
`;
