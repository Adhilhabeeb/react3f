import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { extend, useFrame, useThree } from "react-three-fiber";
import { DirectionalLightHelper,AxesHelper } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
extend({ OrbitControls });

function Useframe() {

  let { camera, gl } = useThree();

let directionalLight=useRef()

  const sphereref = useRef();
  useFrame((state, delta) => {
console.log(delta,"and",state.clock.elapsedTime)
let angle= state.clock.elapsedTime

state.camera.position.x= Math.sin(angle)
state.camera.position.z= Math.cos(angle)

state.camera.lookAt(0,0,0)


    sphereref.current.rotation.y += 0.1;
  });

  
  


  return (
    <>
    <directionalLight position={[3,3,0]}ref={directionalLight} args={["green",30,1000]}/>
  
    {/* <orbitControls args={[camera,gl.domElement]}/> */}
      <mesh ref={sphereref}>
        <sphereGeometry />
        <meshStandardMaterial color={"green"} />
      </mesh>
      <mesh ref={sphereref} position-x={3} rotation-y={3} scale={5}>
        <torusKnotGeometry args={[0.1, 0.1, 4, 20, 2, 5]} />
        <meshNormalMaterial args={[{ wireframe: false }]} />
      </mesh>
    </>
  );
}

export default Useframe;
