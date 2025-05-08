import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Scene_Example from './scenes/Example'
import Scene_RotatingBox from './scenes/RotatingBox'
import Scene_LoadModel from './scenes/LoadModel'
import Scene_LightingAndShadows from './scenes/LightningAndShadows'
import Scene_Environment from './scenes/Environment'
import Scene_EditableTorus from './scenes/EditableTorus'
import Scene_ClickableSphere from './scenes/ClickableSphere'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/example" element={<Scene_Example />} />
      <Route path="/editable-torus" element={<Scene_EditableTorus />} />
      <Route path="/rotating-box" element={<Scene_RotatingBox />} />
      <Route path="/clickable-sphere" element={<Scene_ClickableSphere />} />
      <Route path="/load-model" element={<Scene_LoadModel />} />
      <Route path="/lightning-and-shadows" element={<Scene_LightingAndShadows />} />
      <Route path="/environment" element={<Scene_Environment />} />
    </Routes>
  )
}

export default App