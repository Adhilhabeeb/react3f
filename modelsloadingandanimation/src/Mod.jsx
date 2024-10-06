

import { AccumulativeShadows, BakeShadows, ContactShadows, Float,Stars,useGLTF, Sky,MeshReflectorMaterial, OrbitControls, RandomizedLight, SoftShadows, useHelper, Environment,Stage, useFBX, useAnimations, Clone,} from '@react-three/drei'
import React, { createContext, useRef ,useContext, useState, Suspense, useEffect} from 'react'
import { Canvas, useFrame ,useLoader  } from 'react-three-fiber'
import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import Model from './Model';
import Cloning from './Cloning';
import { Human } from './human';
import { ThemeContext } from './Demo';

    function Mod() {

    let adhil=useRef()

    const animecontrols = useContext(ThemeContext);
    useFrame((state,delta)=>{

console.log(state,"sttt")
state.camera.lookAt(0,0,0)
    })
    let mode=useGLTF("./lookadhil.glb")
    let {animations:drop}=useFBX("./Drop.fbx")
    let {animations:dying}=useFBX("./Dying.fbx")

    let {animations:fight}=useFBX("./fight.fbx")
const [animat, setanimat] = useState(null);
const { nodes, materials } = useGLTF('/lookadhil.glb')

    drop[0].name="drop";
    fight[0].name="fight";
    dying[0].name="dying";

    mode.animations[0]=drop;
    mode.animations[1]=fight;

    let animfbx=useRef()
   

    let dropmodel=useAnimations(drop,adhil);
    let fightmodel=useAnimations(fight,adhil);
    let dyingmodel=useAnimations(dying,adhil);


    // console.log(mode.animations,",mmooooddanimationbb")




   

    

    useEffect(()=>{
        ///  setting the animation    to   the dropmdel  we wnt to take it in one model 
        dropmodel.actions["fight"]=fightmodel.actions["fight"]
        dropmodel.actions["dying"]=dyingmodel.actions["dying"]
        console.log(dropmodel.actions)

        window.setTimeout(()=>{
            dropmodel.actions["drop"].play()
            // dropmodel.actions["fight"].crossFadeTo(dropmodel.actions["fight"],1)
        },2000)
      
    
    },[])
   

    useEffect((prev) => {
        dropmodel.actions["fight"]=fightmodel.actions["fight"]

if (animecontrols.animationname=="drop") {
    dropmodel.actions["drop"].fadeIn(0.6).play()
   
    
}else{
    dropmodel.actions["fight"].play()
}



    }, [animecontrols.animationname]);


 

  return (<>
  
  <ambientLight/>
  <Stage  shadows={{type:AccumulativeShadows}} >

  <group  dispose={null} ref={adhil}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
castShadow        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
castShadow        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
castShadow        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
castShadow        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
castShadow        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
castShadow        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
castShadow        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
castShadow        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
castShadow        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
    </group>

  </Stage>


  </>

    
  )
}

export default Mod
useGLTF.preload('/lookadhil.glb')