import React, { useMemo } from 'react'
import { Mesh } from 'three'
import * as  THREE from "three"
function Buffergeome() {

    let verticestraiangle=10*3
   

let flatar=useMemo(()=>{
    let flata=new Float32Array(verticestraiangle*3)
    for (let i = 0; i < verticestraiangle*3; i++) {
      flata[i]=(Math.random()-0.5)*3
        
    }
return   flata  
},[])
  return (
<mesh position={[-2,0,0]}>


    <bufferGeometry >
        <bufferAttribute
        attach={"attributes-position"}
        count={verticestraiangle}
        itemSize={3}
        array={flatar&&flatar}
        
        
        />
    </bufferGeometry>
    <meshStandardMaterial color={"white"} side={THREE.DoubleSide} />
</mesh>
  )
}

export default Buffergeome
