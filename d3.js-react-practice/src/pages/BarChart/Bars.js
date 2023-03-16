import React from 'react'

function Bars({data,Xscale,Yscale,innerHeight}) {
  return (
    <>
    {
        data.map(d => {
        console.log(d.country);
        console.log(Yscale(d.country));
        // console.log(Yscale(d["2020"]));
        return <rect 
        key={d.country} 
        fill="teal" 
        x={0} 
        y={Yscale(d.country)} 
        width={Xscale(d["2020"])}
        height={Yscale.bandwidth()}
        />
        
      })
    }
    </>
  )
}

export default Bars;