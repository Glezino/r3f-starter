import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Scene_Example from './pages/Scene_Example'
import Scene_RotatingBox from './pages/Scene_RotatingBox'
import Scene_ClickableBox from './pages/Scene_ClickableBox'
import Scene_LoadModel from './pages/Scene_LoadModel'
import Scene_LightingAndShadows from './pages/Scene_LightningAndShadows'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/example" element={<Scene_Example />} />
      <Route path="/rotating-box" element={<Scene_RotatingBox />} />
      <Route path="/clickable-box" element={<Scene_ClickableBox />} />
      <Route path="/load-model" element={<Scene_LoadModel />} />
      <Route path="/lightning-and-shadows" element={<Scene_LightingAndShadows />} />
    </Routes>
  )
}

export default App
