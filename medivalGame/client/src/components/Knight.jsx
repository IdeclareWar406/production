import React, { Suspense } from "react"
import {Canvas} from "@react-three/fiber"
import {OrbitControls, Preload, useGLTF} from "@react-three/drei"
import Loader from "./Loader"

function Knights(){
    const knight = useGLTF("assets/3dAssets/uploads_files_1950170_Solus_the_knight.gltf")

    console.log(knight)
    return(<mesh>
        <hemisphereLight intensity={2}
        position={[-20,0,10]}
        angle={0.12}
        
        
        

        />
    <primitive object={knight.scene}
                scale={4}
                position={[0,-5,-1.65]}
                
                />
    </mesh>
    
    
    )

}

function KnightCanvas(){
    return(
    <Canvas frameloop="demand"
            shadows
            camera={{position:[20,3,5], fov:25}}
            gl={{preserveDrawingBuffer: true}}
    
    > <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI /2} />
        <Knights />

    </Suspense>
        <Preload all />

    </Canvas>)
}

export default KnightCanvas