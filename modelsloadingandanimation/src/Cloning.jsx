import React from 'react'
import Model from './Model'
import { useFrame } from 'react-three-fiber'
import { Human } from './human'

function Cloning(Componen) {
let clones=[]
return (props)=>{


//    alert("l") 

let positionx=Math.floor(Math.random() * (20 - -20 + 1) + -20);
let positiony=Math.floor(Math.random() * (20 - 10 + 1) + -10);
let positionz=Math.floor(Math.random() * (10 - -10 + 1) + -10);

// console.log(positionx,"posx")
// 
clones.push(<Componen  position-x={positionx}  rotation-x={positiony} position-y={positiony} position-z={positionz}/>)
 
    


return clones
}
}


export default Cloning
