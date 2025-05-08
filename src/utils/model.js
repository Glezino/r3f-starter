export function logHierarchy(object, depth = 0) {
    const indent = '─'.repeat(depth)
    console.log(`${indent}> ${object.name || '[no name]'} (${object.type})`)
    object.children.forEach((child) => logHierarchy(child, depth + 1))
}

export function logAnimations(animations) {
    if (!animations || animations.length === 0) {
        console.log('Este modelo no tiene animaciones.')
        return
    }

    console.log(`Animaciones (${animations.length}):`)
    animations.forEach((clip, index) => {
        console.log(`- [${index}] "${clip.name}" (${clip.duration.toFixed(2)}s, tracks: ${clip.tracks.length})`)
    })
}

export function enableShadows(object) {
    object.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
            // child.frustumCulled = false
        }
    })
}