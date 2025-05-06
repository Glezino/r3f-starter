import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

export default function RobotModel(props) {
    const { scene, animations } = useGLTF('src/assets/RobotExpressive.glb')
  
    useEffect(() => {
      printHierarchy(scene)
      console.log(animations)
    }, [scene, animations])
  
    function printHierarchy(obj, depth = 0) {
      const indent = '  '.repeat(depth)
      console.log(`${indent}- ${obj.type} (${obj.name || 'no-name'})`)
      if (obj.children) {
        obj.children.forEach(child => printHierarchy(child, depth + 1))
      }
    }
  
    return <primitive object={scene} {...props} />
  }