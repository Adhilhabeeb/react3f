
import { Clone, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import React, { useState } from 'react'
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import  * as THREE from "three"

function Model() {

    const { nodes, materials ,scene } = useGLTF('./bo/stone.glb')
useFrame(()=>{

})
let normamap=useTexture("./bo/textures/normal.jpg")
let diffmamap=useTexture("./bo/textures/diff.jpg")
let metalmamap=useTexture("./bo/textures/arm.jpg")


  return (
    <group  scale={10} >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.boulder_01.geometry}
    
      rotation={[0, 0, -2.484]}
      scale={-0.08}
    >
    <meshStandardMaterial map={diffmamap}  normalMap={normamap} metalnessMap={metalmamap} metalness={0.5}roughness={0.44}/>
    </mesh>
  </group>
  )
}

export default Model
