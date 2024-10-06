import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Demo from './Demo.jsx'
import Model from './Model.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Demo/>
  </StrictMode>,
)
