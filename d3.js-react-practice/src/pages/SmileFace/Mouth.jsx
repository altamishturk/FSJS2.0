import React from 'react';
import {arc} from "d3";

function Mouth({mouthWidth,mouthRadius}) {

    const myArc = arc()
                .innerRadius(mouthWidth)
                .outerRadius(mouthWidth+mouthRadius)
                .startAngle(Math.PI/2)
                .endAngle(Math.PI*3/2)

  return (
    <path d={myArc()}/>
  )
}

export default Mouth;