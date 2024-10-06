import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from 'react-three-fiber'
import { useControls } from 'leva'

function App() {
  const [count, setCount] = useState(0)
let controls=useControls({
  posi:{value:{x:1,y:1},step:0.01,
  joystick:"invertY"
  
}
})
  return (
    <>
     <Canvas>

<mesh position={[controls.posi.x,controls.posi.y,0]}>

  <sphereGeometry/>
  <meshBasicMaterial  color={"red"}/>
</mesh>


     </Canvas>
    </>
  )
}

export default App
