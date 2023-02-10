import React from 'react'

const homeVertexShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main(){
     vUv = uv;
     vec3 newPosition = position + normal * vec3(u_intensity * sin(posistion.y * 10));
     vDisplacement = length(newPosition - position);
     gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0)
}
`

export default homeVertexShader