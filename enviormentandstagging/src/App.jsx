import { AccumulativeShadows, ContactShadows, Float,Stars, Sky,MeshReflectorMaterial, OrbitControls, RandomizedLight, SoftShadows, useHelper, Environment, Lightformer, Stage, BakeShadows } from '@react-three/drei'
import React, { createContext, useRef ,useContext} from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import * as THREE from "three"

import { Perf } from 'r3f-perf'
import { useControls } from 'leva'

const ThemeContext = createContext(null);
// SoftShadows({
//   samples:170,near:100,size:10,
//   rings:110
// })

function App() {
  
  let  direct= useRef()
  // direct.current.shadow.mapSize.width = 1012; // default
  // direct.current.shadow.mapSize.height = 1012; // default
let sphere =useRef()
let spher =useRef()

let controls=useControls({

  num:-2,color:"#ff0000 ",opacity:{value:1,step:0.1},scale:{value:10,step:1},far:{value:3,step:0.1},resolution:{value:512,step:10},x:0,y:0,z:0
})

let stars=useControls("sun",{
  position:{value:[1,2,3]}
})
let enviormen=useControls("enviormen",{
intensity:{value:3,max:32,min:1}
})


  return (

    <>
  
<ambientLight color={"red"} intensity={60}/>

    <ThemeContext.Provider   value={{direct,sphere}}>
    <Canvas  shadows={false}
     onCreated={name}
camera={{
  fov:75,
  near:0.2,
  far:200,
 
}}


    >
<Environment  preset='sunset'  background ground={{height:10,radius:28,scale:100}} > 
    {/* <mesh scale={10} position-z={-7}>
            <planeGeometry/>
            <meshBasicMaterial color={"green"}/>
         </mesh> */}

         {/* <Lightformer rotation={[Math.PI*0.5,0,0]} position={[2,4,3]} color={"red"}  form={"ring"} scale={1}  intensity={2}/>
         <Lightformer rotation={[Math.PI*0.5,0,0]} position={[-2,4,0]} color={"red"}  form={"ring"} scale={1}  intensity={2}/>
         <Lightformer rotation={[Math.PI*0.5,0,0]} position={[0,4,-3]} color={"red"}  form={"ring"} scale={1}  intensity={2}/> */}


    </Environment>

      {/* <BakeShadows/> */}
      <axesHelper />
      <Perf position="top-left"/>
<OrbitControls/>
<mesh castShadow ref={sphere} position={[0,3,0]}>

  <sphereGeometry   args={[1]}/> 
  <meshStandardMaterial metalness={0.4} roughness={0.4} envMapIntensity={enviormen.intensity}    color={"white"}/>

</mesh>


<mesh receiveShadow rotation={[-Math.PI*0.5,0,0]} position-y={-1} scale={1000}  >

  <planeGeometry />

  <MeshReflectorMaterial roughness={0.4}  metalness={0.4} resolution={2024} blur={[34,34]}  mixBlur={1} mixStrength={8}  envMapIntensity={enviormen.intensity}  side={THREE.BackSide}  />
</mesh>



<color  args={["#ffedfe"]} attach={"background"}/>

<ambientLight intensity={0.2}/>

<directionalLight    intensity={60} color={"red"} position={stars.position}   shadow-mapsize={[1024 *10,1024*10]}  
shadow-camera-near={1}
shadow-camera-far={100}


shadow-camera-top={-2}
shadow-camera-bottom={2}
shadow-camera-left={-2}
shadow-camera-right={2}
 
ref={direct}/>
{/* <Sky sunPosition={stars.position}/> */}
<Stars radius={1.5} depth={40} count={10} factor={7} saturation={10} fade speed={3}  />
<Stars radius={1.5} depth={40} count={10} factor={7} saturation={10} fade speed={4}  />
<Stars radius={1.5} depth={40} count={500} factor={3} saturation={10} fade speed={0.3}  />

<Stars radius={1.5} depth={40} count={10} factor={7} saturation={10} fade speed={6}  />


<Stars radius={1.5} depth={50} count={500} factor={4} saturation={10} fade speed={1}  />

{/* <AccumulativeShadows  scale={10} color='red'   blend={100}  opacity={10} frames={Infinity} >


// <directionalLight  castShadow intensity={0.2} color={"white"} position={[5,10,1]}   shadow-mapsize={[1024 *10,1024*10]} /> 
 <RandomizedLight  position={[3,10,2]}  amount={8}  castShadow   />

</AccumulativeShadows>
 */}
<ContactShadows color={controls.color} scale={controls.scale} far={controls.far}  resolution={controls.resolution} position={[controls.x,controls.y,controls.z]} />
<Helpers/>
    </Canvas>
    </ThemeContext.Provider>
    </>

  )
}

export default App
 function name(state) {
console.log(state.camera,"o")
// state.gl.setClearColor("red",1)
// state.scene.background=new  THREE.Color("green")
 }


 function Helpers() {

  const theme = useContext(ThemeContext);


  useFrame((state,delta)=>{

    theme.sphere.current.position.x=Math.sin(state.clock.elapsedTime) *10.5
    theme.sphere.current.position.z=Math.cos(state.clock.elapsedTime)*10.5


  })
  console.log(theme.direct)
  // useHelper(theme.direct,THREE.DirectionalLightHelper,0.2)
return(
  <>
  <Stage>


    <mesh>
      <boxGeometry/>
      <meshBasicMaterial/>
    </mesh>
  </Stage>
  
  
  
  </>
)
 }