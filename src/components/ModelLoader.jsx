import { useEffect, Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import Loader from './Loader'
import { logHierarchy, logAnimations, enableShadows } from '../utils/model'
import useAnimationMixer from '../hooks/useAnimationMixer'

export default function ModelLoader({
  url,
  animationName,
  debugHierarchy = false,
  debugAnimations = false,
  castReceiveShadows = true,
  useAnimation = true,
  ...props
}) {
  const { scene, animations } = useGLTF(url)

  useEffect(() => {
    if (debugHierarchy) logHierarchy(scene)
    if (debugAnimations) logAnimations(animations)
    if (castReceiveShadows) enableShadows(scene)
  }, [scene, animations])

  if(useAnimation){
    useAnimationMixer(scene, animations, animationName);
  }

  return (
      <primitive object={scene} {...props} />
  )
}
