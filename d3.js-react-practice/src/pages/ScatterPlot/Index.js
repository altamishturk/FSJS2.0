import { extent, scaleLinear, scaleTime } from 'd3';
import React from 'react';
import Circles from './Circles';
import useData from './useData';
import Xaxis from './Xaxis';
import Yaxis from './Yaxis';

const margin = {top: 20,bottom:90,left:100,right:10};
const width = 800;
const height = 600;
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;
const offSetBottom = 20;
const offSetLeft = 25;

function Index() {
  const [data] = useData();

  if(!data){
    return <>Loading...</>
  }


  const xScale  = scaleTime()
  .domain(extent(data.map(d=>d.timeStamp)))
  .range([0,innerWidth]).nice();

  const yScale  = scaleLinear()
  .domain(extent(data.map(d=>d.temperature)))
  .range([innerHeight,0]).nice();

  

  return (
    <div className='flex justify-center items-center min-h-[100vh]'>
      <svg className=''  width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <Xaxis xScale={xScale} innerHeight={innerHeight} offSetBottom={offSetBottom}/>
          <Yaxis yScale={yScale} innerWidth={innerWidth} offSetLeft={offSetLeft}/> 
          <Circles xScale={xScale} yScale={yScale} data={data}/>
          {/* label x axis  */}
          <text x={(innerWidth/2)-30} y={innerHeight+80} className="text-[25px] font-bold">Time</text>
          {/* label y axis  */}
          <text transform={`translate(-${innerWidth/2.2} ,275)rotate(-90)`} y={innerHeight/2} className="text-[25px] font-bold">Temperature</text>
        </g>
      </svg>
    </div>
  )
}

export default Index;