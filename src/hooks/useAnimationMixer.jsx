import { useEffect, useRef } from 'react'
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export default function useAnimationMixer(scene, animations, animationName) {
  const mixerRef = useRef(null);

  useEffect(() => {
    if (!animationName) return;

    mixerRef.current = new THREE.AnimationMixer(scene);
    const selectedClip = animations.find(clip => clip.name === animationName);
    if (selectedClip) {
      mixerRef.current.clipAction(selectedClip).play();
    }

    return () => {
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
    };
  }, [animations, scene, animationName]);

  useFrame((state, delta) => {
    if (animationName && mixerRef.current) {
      mixerRef.current.update(delta);
    }
  });

  return mixerRef;
}