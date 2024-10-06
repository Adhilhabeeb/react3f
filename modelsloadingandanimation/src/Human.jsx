import React, { useRef, useEffect } from 'react'
import { Clone, useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { useFrame } from 'react-three-fiber'
import { AnimationMixer } from 'three'
export function Human(props) {
  const group = useRef()
  
  // Load the GLTF model
  const { nodes, materials ,scene,animations} = useGLTF('./zombie.glb')



//   // Load the FBX animation

//   const { animations: runningAnimations } = useFBX("./Typing.fbx")
  
//   // Name the animation
//   runningAnimations[0].name = "running"
  
//   // Use animations hook to get actions
const { ref, mixer, names, actions } = useAnimations(animations);
// actions["mixamo.com"].play()

useEffect(() => {
    
   
      
  
}, []);
useEffect(() => {
    const action = actions['mixamo.com']; // directly using the name
    if (action) {
      alert('Action found!');
      action.play();
    } else {
      alert('Action not found.');
    }
    
 
}, [actions]);
useFrame((state,delta)=>{
 
    console.log(Object.keys(actions),"000000kkkkkk"); // Log all keys to see what's available


console.log('Available actions:', Object.keys(actions));
 
 
})
   



  return (
 

    <Clone object={scene} ref={group} />
  )
}

useGLTF.preload('./jogging.glb')
