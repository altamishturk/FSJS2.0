import { format } from 'd3';
import React from 'react';


function Xaxis({innerHeight,Xscale,innerWidth}) {
  return (
    <>
     {
          <g>
            <line stroke="#ccc" x2={innerWidth} y1={innerHeight} y2={innerHeight}/>
            {
              Xscale.ticks().map(val => {
                return  <>
                  <line stroke="#ccc" x1={Xscale(val)} x2={Xscale(val)}  y2={innerHeight}/>
                  <text key={val} x={Xscale(val)-10} y={innerHeight+20}>{format("~s")(val)}</text>
                </>
              })
            }
          </g>
        }
    </>
  )
}

export default Xaxis;