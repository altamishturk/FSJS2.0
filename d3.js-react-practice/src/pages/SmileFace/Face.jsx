import React from 'react';

import Eyes from "./Eyes";
import Mouth from './Mouth';





function Face({width,height,strokeWidth,eyeOffsetX,eyeOffsetY,eyeRadius,mouthRadius,mouthWidth}) {


    const centerX = width/2;
    const centerY = height/2;
    
    

  return (
    <svg width={width} height={height}>
            <g transform={`translate(${centerX},${centerY})`}>
            <circle
                r={centerY-strokeWidth/2}
                strokeWidth={strokeWidth}
                fill="yellow"
            />
            <Eyes 
            eyeOffsetY={eyeOffsetY} 
            eyeOffsetX={eyeOffsetX} 
            eyeRadius={ eyeRadius}
            />
            <Mouth mouthWidth={mouthWidth}mouthRadius={mouthRadius}/>
            </g>
        </svg>
  )
}

export default Face;