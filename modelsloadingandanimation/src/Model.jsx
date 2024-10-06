

import { AccumulativeShadows, BakeShadows, ContactShadows, Float,Stars,useGLTF, Sky,MeshReflectorMaterial, OrbitControls, RandomizedLight, SoftShadows, useHelper, Environment,Stage, MeshPortalMaterial, Clone, useFBX, useAnimations} from '@react-three/drei'
import React, { createContext, useRef ,useContext, useState, Suspense,useEffect} from 'react'
import { Canvas, useFrame ,useLoader } from 'react-three-fiber'
import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Human } from './human';



function Model(props) {
// console.log( "ppppp" , props);


  let  modlo=useGLTF("./running.glb")
  


const [state, setstate] = useState(true);
let  model=useLoader(GLTFLoader,"./scene.glb")
// console.log(modlo)
return    <> 

  <mesh scale={3}>

    <planeGeometry/>
    <meshNormalMaterial/>
  </mesh>

</>
}

export default Model
