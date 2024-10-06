import * as three from "three";
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from 'react-three-fiber'
import React, { useEffect, useRef, useState } from 'react'
import { Html, OrbitControls, useHelper, Text, Float,MeshReflectorMaterial } from "@react-three/drei";
import Useframe from './useframe/useframe'
import Buffergeome from './useframe/buffergeome'


function App() {
  let buffer= useRef()


  return (
    <div id="canvas-container">
    <Canvas  flat

// orthographic
    
    camera={{

fov:35,
near:0.1,
far:200,

position:[0,2,2],
// zoom:100







    }

    }  >



  <ambientLight intensity={0.5} />
<pointLight position={[10, 10, 10]} color={"green"}  intensity={300}/>
<directionalLight position={[3,3,-3]} intensity={1.5} />


    <Useframe buffer={buffer}/>
    <Buffergeome buffer={buffer}/>
    
    </Canvas >
  </div>
  )
}

export default App
