import React from 'react'

function Yaxis({yScale,innerWidth,offSetLeft}) {
  return (
       <>
       {
        yScale.ticks().map(val => (
          <g key={val} transform={`translate(0,${yScale(val)})`}>
            <text x={-offSetLeft}>{val}</text>
            <line 
            stroke='#ccc' 
            x2={innerWidth}
            style={{ textAnchor: 'end' }}
            x={-3}
            dy=".32em"
            />
          </g>
        ))
      }
       </>
  )
}

export default Yaxis;