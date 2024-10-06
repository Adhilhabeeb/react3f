import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from 'react-three-fiber'
import React, { useEffect, useRef, useState } from 'react'
import Useframe from './useframe/useframe'
import Buffergeome from './useframe/buffergeome'


function App() {

  return (
    <div id="canvas-container">
    <Canvas  flat
   orthographic
    
    camera={{

fov:45,
near:0.1,
far:200,
position:[0,2,6],
zoom:100






    }

    }  >
        {/* <axesHelper args={5}/> */}
<Useframe/>
<Buffergeome/>
    </Canvas>
  </div>
  )
}

export default App
