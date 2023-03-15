import React from 'react';

function Circles({xScale,yScale,data}) {
  return (
    <>
    {
      data.map(d => (
        <circle
          key={d.timeStamp}
          fill='teal'
          stroke='teal' 
          cy={yScale(d.temperature)}
          cx={xScale(d.timeStamp)}
          r={5}
          />
      ))  
    }
     
    </>
  )
}

export default Circles