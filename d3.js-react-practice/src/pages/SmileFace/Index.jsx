import React from 'react';
import Face from "./Face";


const width = 200;
const height = 200;


function index() {
  return (
    <div className="flex flex-wrap justify-center items-center min-h-[100vh]">

        {
            new Array(25).fill(1).map(item => (
                <Face 
                    width={width} 
                    height={height}
                    strokeWidth={width/40}
                    eyeOffsetX={width/5}
                    eyeOffsetY={width/5}
                    eyeRadius={width/13}
                    mouthRadius={width/20}
                    mouthWidth={width/3.3}
                />
            ))
        }
    </div>
  )
}

export default index;