import React from "react"

import { Html, useProgress } from "@react-three/drei"

export default function Loader(){
    const {progress} = useProgress()

    return(
        <Html>
            <p style={{fontSize: '14px',
                color: '#f1f1f1',
                fontWeight:800,
                marginTop: 40
    
    }}>{progress.toFixed(2)}% </p>
        </Html>
    )
}