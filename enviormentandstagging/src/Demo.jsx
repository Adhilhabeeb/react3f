
import { AccumulativeShadows, BakeShadows, ContactShadows, Float,Stars,useGLTF, Sky,MeshReflectorMaterial, OrbitControls, RandomizedLight, SoftShadows, useHelper, Environment,Stage} from '@react-three/drei'
import React, { createContext, useRef ,useContext, useState} from 'react'

import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import { Canvas } from 'react-three-fiber';

let mat=new THREE.MeshDepthMaterial()
function Demo() {
const [cam, setcam] = useState(10);
let gltf=useLoader(GLTFLoader,"./scene.glb")
    const { nodes, materials } = useGLTF('./model.gltf')

    console.log(gltf,"kk",)
  return (
<Canvas  shadows  camera={{ position: [4, -1, 8], fov: 75 }} >
<Perf/>
<color attach="background" args={['skyblue']} />
{/* <ambientLight/> */}
      <Stage
        intensity={1.5}
        preset="portrait"

      
       
        adjustCamera={cam}

        >

<mesh onClick={()=>{
    setcam((prev)=>{
        if (prev==10) {
return 1;            
        }
        return 10;
    })

}}
castShadow
        
        geometry={nodes.Suzanne.geometry}
        material={new THREE.MeshStandardMaterial({metalness:0.5,roughness:0.3,color:"#fcba03"})}
      />


<AccumulativeShadows scale={10} blend={200} frames={Infinity}  >
{/* <directionalLight castShadow intensity={2} shadow-mapsize={[1024,1024]}  position={[5,10,1]} /> */}
<RandomizedLight  position={[3,10,0]} ambient={0.3}  bias={0.5} amount={3}    />

</AccumulativeShadows>
{/* <primitive object={gltf.scene} scale={1} />  */}
      </Stage>
      <OrbitControls  />
</Canvas>

  )
  
}

export default Demo
