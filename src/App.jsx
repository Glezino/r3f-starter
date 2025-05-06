import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Scene1 from './pages/Scene1'
import Scene2 from './pages/Scene2'
import Landing from './pages/Landing'

function App() {

  return (
    <Routes>
      <Route path="/scene1" element={<Scene1 />} />
      <Route path="/scene2" element={<Scene2 />} /> 
      <Route path="/" element={<Landing />} />
    </Routes>
  )
}

export default App
