import React, { useEffect, useRef } from 'react'
import { useCallback } from 'react';
import { useState } from 'react';

function Index() {
    const svg = useRef(null);
    const [cordinate, setCordinate] = useState({x:0,y:0});

    useEffect(()=>{
        setCordinate(()=>{
            return {
                y: svg.current.clientHeight/2,
                x: svg.current.clientWidth/2
            }
        })
    },[])

    
    const handleMouseEnter = useCallback((e) => {
        const {clientX,clientY} = e;

        setCordinate(()=>{
            return {
                y: clientY,
                x: clientX
            }
        })
    },[setCordinate])

  return (
    <svg ref={svg} onMouseMove={handleMouseEnter} className='w-[100vw] h-[100vh] bg-gray-300'>
        <circle
        cx={cordinate.x}
        cy={cordinate.y}
        r={50}
        />
    </svg>
  )
}

export default Index;