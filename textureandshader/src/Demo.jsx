import { AccumulativeShadows, Clone, OrbitControls, Sparkles, Stage, useGLTF, useTexture ,shaderMaterial} from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import  * as THREE from "three"
import Model from '../public/bo/Model'
import vertex from "./vertex.js"
import fragment from './fragment.js'
import { useControls } from 'leva'
function Demo() {
const [colo, setcolo] = useState("blue");

let shader=useRef()
  let controod=useControls({
  color:{
    value:"red"
  }
  })
  useEffect(() => {
 if (shader.current) {

console.log(  "shder",    shader.current.uniforms.ucolor.value);

  shader.current.uniforms.ucolor.value=new THREE.Color(controod.color)
 }
  }, [controod.color]);
console.log(   new THREE.Vector3( ...new THREE.Color("yellow")),"cooolo");
    
  return (
<Canvas  shadows  camera={{ position: [4, -1, 8], fov: 75 }} >
    <OrbitControls makeDefault/>
<color attach="background" args={['skyblue']} />

<ambientLight  intensity={2}/>
<Stage intensity={3}  shadows={{type:"accumulative",intensity:4,opacity:0.8}}>

<Model />
<mesh scale={3} onPointerOver={(e)=>{  e.stopPropagation()  
  console.log("pointerennen")}}>
  <sphereGeometry/>
  <shaderMaterial vertexShader={vertex } ref={shader} fragmentShader={fragment} 
  uniforms={{
    utime:{value:0},
    ucolor:{value:new THREE.Color(`${controod.color}`)}
  }}/>

</mesh>
</Stage>

<Sparkles 
  /** Number of particles (default: 100) */
  count={40}
  /** Speed of particles (default: 1) */
  speed={0.9}
  /** Opacity of particles (default: 1) */

  /** Color of particles (default: 100) */

  /** Size of particles (default: randomized between 0 and 1) */
 size={6}
  /** The space the particles occupy (default: 1) */
scale={[4,2,5]}
  /** Movement factor (default: 1) */
  noise={4}
/>
   </Canvas>
  )
}
useGLTF.preload('/stone.glb')
export default Demo
