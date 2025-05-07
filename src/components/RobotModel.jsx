import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { AnimationMixer } from 'three';

export default function RobotModel(props) {
  const robotRef = useRef();
  const mixerRef = useRef();
  const { scene, animations } = useGLTF('src/assets/RobotExpressive.glb')

  useEffect(() => {
    if (animations.length > 0 && scene) {
      mixerRef.current = new AnimationMixer(scene);
      const runningAnimation = animations.find(anim => anim.name === 'Running');
      if (runningAnimation) {
        mixerRef.current.clipAction(runningAnimation).play();
      }
    }
  }, [animations, scene]);

   useEffect(() => {
     const animate = () => {
       if (mixerRef.current) {
         mixerRef.current.update(0.01);
       }
       requestAnimationFrame(animate);
     };
     animate();
   }, []);

  useEffect(() => {
    if (robotRef.current) {
      robotRef.current.traverse((child) => {
        if (child.isMesh) {
           child.castShadow = true;
           child.receiveShadow = true;
        }
      });
    }
  }, []);

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

  return <primitive ref={robotRef} object={scene} {...props} />
}