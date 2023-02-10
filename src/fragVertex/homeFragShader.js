const homeFragShader = `
      uniform float u_intensity;
      uniform float u_time;

      varying vec2 vUv;
      varying float vDisplacement;

      void main(){
            float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10 );
            vec3 color = vec3(0, 0, 0);
            gl_FragColor = vec4(color, 1.0);
      }
`;
export default homeFragShader
