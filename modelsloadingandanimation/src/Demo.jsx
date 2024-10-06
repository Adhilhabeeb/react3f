
import { AccumulativeShadows, BakeShadows, ContactShadows, Float,Stars,useGLTF, Sky,MeshReflectorMaterial, OrbitControls, RandomizedLight, SoftShadows, useHelper, Environment,Stage, useFBX, useAnimations,} from '@react-three/drei'
import React, { createContext, useRef ,useContext, useState, Suspense, useEffect} from 'react'
import { Canvas, useFrame ,useLoader  } from 'react-three-fiber'
import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
export const ThemeContext = createContext(null);


import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import Model from './Model';
import Cloning from './Cloning';
import { Human } from './human';
import Mod from './mod';

let mat=new THREE.MeshDepthMaterial()
function Demo() {
  let animecontrols=useControls("animecontrols",{animationname: {options:["drop","fight"]}  })
  let gltf=useLoader(GLTFLoader,"./scene.glb")
  const { nodes, materials } = useGLTF('./model.gltf')
  let  randi=useControls("randlight",{
    positionOffset:5,intensity:1,colorOffset:{ value:0.2,step:0.1},castShadow:true,amount:{value:8,step:1},intensityOffset:{value:1,min:0.5,max:1.5} ,position:{value:{x:5,y:10,z:5}}
  })
 let  controls= useControls("accumulativeshdow",{
  blend:{value:50,min:0,max:500},limit:200,scale:10,temporal:false,colorBlend:{value:1,step:0.5},resolution:{value:1000 ,min:512,max:10000}

 })
const [cam, setcam] = useState(10);
let Clone=Cloning(Model)

// console.log(Clone,"000000")
    // console.log(gltf,"kk",)
  return (
<Canvas   shadows  camera={{ position: [4, -1, 8], fov: 75 }} >
<axesHelper args={[2]}/>
<ThemeContext.Provider value={animecontrols}>
// <Mod/> 
// </ThemeContext.Provider>
  <Name/>
<color attach="background" args={['red']} />
{/* <ambientLight/> */}
    {  <Stage
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
<Perf position={ 'top-left'}/>

<AccumulativeShadows frames={1000}
  // blend={controls.blend}
  // limit={controls.limit}
  opacity={0.8}
  scale={controls.scale}
  // temporal={controls.temporal}
  
  // alphaTest={0.5}
  color="#ff0000"
  // colorBlend={controls.colorBlend}
  resolution={controls.resolution}  >
<directionalLight castShadow intensity={2} shadow-mapsize={[2024*1,2024*1]}  position={[5,10,1]}     />
<RandomizedLight
// bias={-0.0001} // Adjust shadow bias to reduce flickering
  position={[randi.position.x, randi.position.y, randi.position.z]}
  // positionOffset={randi.positionOffset}
  intensity={randi.intensity}
  // intensityOffset={randi.intensityOffset}
  color="orange"
  // colorOffset={randi.colorOffset}
  castShadow={randi.castShadow}
/>


</AccumulativeShadows>
{/* <primitive object={gltf.scene} scale={1} />  */}
<Human />


<Clone color={"green"}/>
   </Stage>}

<Suspense fallback={<mesh scale={10}>

  <boxGeometry/>
  <meshBasicMaterial color={"yellow"}/>
</mesh>}>
<Human/>
</Suspense>


      <OrbitControls  />
 
</Canvas>

  )
  
}

export default Demo

function Name(params) {
 useFrame((state,delta)=>{

  })
}


//  export default function Demo(params) {
//   let controls=useControls({animationname: {options:["drop","fight"]}  })

//   return(
//     <>
    
    
//     <Canvas   shadows  camera={{ position: [4, -1, 8], fov: 75 }} >
// <axesHelper args={[2]}/>
// <color attach={"background"} args={["red"]}/>

// <OrbitControls/>
// <ThemeContext.Provider value={controls}>
// <Mod/> 
// </ThemeContext.Provider>


//    </Canvas>
    
//     </>
//   )
// }