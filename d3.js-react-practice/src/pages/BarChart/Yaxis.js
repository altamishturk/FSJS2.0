import React from 'react'

function Yaxis({Yscale,margin}) {
  return (
    <>
            {
              Yscale.domain().map(val => {
                return <text key={val} x={-margin.left} y={Yscale(val)+margin.top}>{val}</text>
              })
            }
    </>
  )
}

export default Yaxis;