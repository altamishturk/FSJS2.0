import { curveNatural, line } from 'd3'
import React from 'react';

function Line({xScale,yScale,data}) {
  return (
    <>
     <path
          fill='none'
          stroke='teal'
          strokeWidth={5} 
          d={line()
          .x(d => xScale(d.timeStamp))
          .y(d => yScale(d.temperature))
          .curve(curveNatural)(data)}/>
    </>
  )
}

export default Line