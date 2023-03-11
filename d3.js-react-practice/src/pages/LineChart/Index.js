import React, { useEffect, useRef, useState } from 'react';
import {csv,scaleBand,scaleLinear,max, axisLeft, axisBottom} from "d3";

const url = "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv"
const width = 600;
const height = 500;
const margin = {top: 20,left:20,right:20,bottom:20};
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;



function Index() {
  const svg = useRef(null);
  const [data,setData] = useState(null);


  useEffect(() => {
    csv(url).then(data =>{
      const temp = data.slice(0,10).map(d => {return {country: d.Country,"2020": Number(d["2020"])}})
      setData(temp);
    })
  }, []);


  if(!data){
    return <div>Loading...</div>
  }


  const Xscale = scaleBand().domain(data.map(d => d.country)).range([0,innerWidth]);
  const Yscale = scaleLinear().domain([0,max(data,d => d["2020"])]).range([0,innerHeight]);
  const XaxisTicks = Xscale.domain();
  const YaxisTicks = Yscale.ticks();
  // console.log(XaxisTicks);
  // console.log(YaxisTicks);

  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh]">
      <svg ref={svg} width={width} height={height}>
        <g transform={`translate(${margin.left+margin.right},0)`}>
          {
            data.map(d => <rect key={d.country} x={Xscale(d.country)} y={innerHeight-Yscale(d["2020"])} width={Xscale.bandwidth()} height={Yscale(d["2020"])}/>)
          }
          {
            XaxisTicks.map(val => {
              return <g key={val} transform={`translate(${Xscale(val)},0)`}>
                <line stroke="black" stroke-width = "3" y2={innerHeight} width={1} height={innerHeight}/>
                <text y={innerHeight+20} transform="rotate(45)">{val}</text>
              </g>
            })
          }
        </g>
      </svg>
    </div>
  )
}

export default Index;