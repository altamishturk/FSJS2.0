import { timeFormat } from 'd3';
import React from 'react';


const format = timeFormat("%a");

function Xaxis({xScale,innerHeight,offSetBottom}) {
  return (<>
  {
     xScale.ticks().map(val => (
        <g key={val}  transform={`translate(${xScale(val)},0)`}>
          <text style={{ textAnchor: 'middle' }} y={innerHeight+offSetBottom}>{format(val)}</text>
          <line stroke='#ccc' y2={innerHeight}/>
        </g>
      ))
  }
  </>)
}

export default Xaxis;