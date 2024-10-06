import { Html, OrbitControls, useHelper, Text, Float,MeshReflectorMaterial } from "@react-three/drei";
import React, { useRef } from "react";
import * as three from "three";
import { extend, useFrame, useThree } from "react-three-fiber";
import { DirectionalLightHelper, AxesHelper, MeshNormalMaterial } from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// extend({ OrbitControls });
import textfo from "../assets/Matemasie_Regular.json";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import fontdown from "../assets/Matemasie_Regular.json";
// extend({FontLoader})
function Useframe(props) {
  let dirli= useRef()
  let pou= useRef()
  let gro= useRef()
  let plane= useRef()




  useHelper(dirli,three.DirectionalLightHelper, 5, "green")
  useHelper(pou,three.PointLightHelper, 5, "red")

  console.log(textfo);
  console.log(fontdown,"hhhhhhhhhlllllllllll")
  let { buffer } = props;
  const font = new FontLoader().parse(textfo);
  //  alert(font)
  console.log(font, "999999999999");
  let adhil = useRef();
  let { camera, gl } = useThree();

  let directionalLight = useRef();
  let torus = useRef();

  const sphereref = useRef();

  useFrame((state, delta) => {
    // console.log(delta, "and", state.clock.elapsedTime);
    // let angle = state.clock.elapsedTime;
    // console.log(adhil.current);
    // state.camera.position.x= Math.sin(angle)
    // state.camera.position.z= Math.cos(angle)

    // state.camera.lookAt(0,0,0)

    // sphereref.current.rotation.y +=0.1;
    torus.current.rotation.y +=0.1;
    // gro.current.rotation.y +=0.1;


  });

  return ( 
  <>
    <group ref={gro}>

{/* <pointLight color={"red"} intensity={10} position={[2,1,0]}/> */}
      <OrbitControls />
      {/* <pointLight ref={pou} position={[3,6,3]} intensity={7} color={"red"}/> */}
      {/* <directionalLight ref={dirli} intensity={0}  position={[3,5,3]} color={"green"}/> */}
      {/* <orbitControls args={[camera,gl.domElement]}/>     //   we  removed the  orbi tcontrols from threejs for importing  drie orbit  controls  */}
      <mesh position={[2,0,0]} ref={sphereref}>
        <sphereGeometry />
      

        <meshStandardMaterial metalness={0.7} roughness={0.2} color={"green"} />
      </mesh>
      <mesh ref={torus} position-x={-1} rotation-y={3} scale={5}>
        <torusKnotGeometry args={[0.1, 0.1, 4, 20, 2, 5]}  />
        <meshNormalMaterial args={[{ wireframe: true }]} />
      </mesh>
      <Html 
       
      position={[0,3,0]}
    occlude={[torus,sphereref,plane]}
     
   
     >
hhhhhh
     </Html>
      <Float 
    

    speed={3} // Animation speed, defaults to 1
    rotationIntensity={1} // XYZ rotation intensity, defaults to 1
    floatIntensity={3} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
    floatingRange={[0]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
>
      
        <Text 
          position={[0, 1, 0]}
          color="red"
          fontSize={1}
          textAlign="center"
          maxWidth={1}
          font="./Matemasie-Regular.ttf"
        >
          adhilhabeebbbb
          <meshStandardMaterial side={three.DoubleSide} />
        </Text>
      </Float>

     

<mesh position={[3, 1, 3]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="red" metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  

    <mesh rotation={[-Math.PI / 2, 0, 0]} ref={plane} position={[0, -1, 0]}>
  <planeGeometry args={[10, 10]} />
 
  <MeshReflectorMaterial side={three.DoubleSide}
  resolution={1024}
  blur={[300, 100]}          // Amount of blur
  mixBlur={1}                // Mix amount of blur into the reflection
  mixStrength={995}           // Strength of the reflection
  roughness={0}            // Surface roughness (0 for a mirror-like surface) / Low roughness for clearer reflections
  depthScale={1.2}           // Influence of depth on the reflection
  minDepthThreshold={0.8 }    // Minimum depth to start rendering reflections  // Lower to ensure reflections include nearby objects
  maxDepthThreshold={0.7}    // Maximum depth to stop rendering reflections  // Adjust to capture reflections properly
  color={"white"}
  metalness={0.4}
  mirror={0.4}

/>

</mesh>

  </>
  );
}

export default Useframe;
