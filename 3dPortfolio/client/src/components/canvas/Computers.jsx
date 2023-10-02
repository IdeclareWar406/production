import React from 'react'
import { Canvas } from '@react-three/fiber'
import{OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'
import { Suspense } from 'react'


const Computers = () => {
  const computer =useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={2}
      
      groundColor={'black'} />
      <pointLight intensity={2} />
      <spotLight 
      position={[-20,50,10]} 
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      
      />
      <primitive object={computer.scene}
                scale={0.75}
                position={[0, -3.25, -1.65]}
                rotation={[-0.01, -0.2,-0.1]}
      
      />
    </mesh>
  )
}
// orbit controls makes it only able to move along a specific axis
function ComputerCanvas (){

  return(
    <Canvas frameloop='demand'
    shadows 
    camera={{position:[20,3,5] ,fov:25 }}
    gl={{preserveDrawingBuffer: true}}
   
    >
      <Suspense >
        
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI /2} />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
// So mesh is not an allowed tag to the browser. To fix this you must remove the fallback and export default CompterCanvas. Suspense cannot have a fallback
export default ComputerCanvas