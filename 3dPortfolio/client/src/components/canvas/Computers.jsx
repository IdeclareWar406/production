import React from 'react'
import { Canvas } from '@react-three/fiber'
import{OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'
import { Suspense } from 'react'


function Computers (props) {
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
                scale={props.isMobile ? 0.5 : 0.75}
                position={props.isMobile? [0,-3, -2.2] : [0, -3.25, -1.65]}
                rotation={[-0.01, -0.2,-0.1]}
      
      />
    </mesh>
  )
}
// orbit controls makes it only able to move along a specific axis
function ComputerCanvas (){
  const[isMobile, setIsMobile] = React.useState(false)

  React.useEffect(()=>{
    // grab the window size via window matchMedia
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    // set the initial value of the isMobile variable
    setIsMobile(mediaQuery.matches)
// define a callback function to handle changes to media query
    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches)
     
    }
    // Add a listener for changes to screen size
    mediaQuery.addEventListener('change', handleMediaQueryChange)
     //important to remove this event listener after its use. This is a must cleanup item
    return()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  },[])
  return(
    <Canvas frameloop='demand'
    shadows 
    camera={{position:[20,3,5] ,fov:25 }}
    gl={{preserveDrawingBuffer: true}}
   
    >
      <Suspense fallback={<CanvasLoader />} >
        
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI /2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
// So mesh is not an allowed tag to the browser. To fix this you must remove the fallback and export default CompterCanvas. Suspense cannot have a fallback
export default ComputerCanvas