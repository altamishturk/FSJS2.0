import React, { useEffect, useRef, useState } from 'react';
import {csv,scaleBand,scaleLinear, max} from "d3";
import Xaxis from './Xaxis';
import Yaxis from './Yaxis';
import Bars from './Bars';

const url = "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv"
const width = 900;
const height = 500;
const margin = {top: 20,left:180,right:50,bottom:100};
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


  const Yscale = scaleBand().domain(data.map(d => d.country)).range([0,innerHeight]).paddingInner(.1);
  const Xscale = scaleLinear().domain([0,max(data.map(d => d["2020"]))]).range([0,innerWidth]);

  // console.log(Yscale.domain());

  return (
    <div className="flex items-center justify-center w-[100vw] h-[100vh]">
      <svg ref={svg} width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <Yaxis 
            Yscale={Yscale} 
            innerHeight={innerHeight} 
            margin={margin}
          />
          <Xaxis 
            Xscale={Xscale} 
            innerHeight={innerHeight} 
            innerWidth={innerWidth}
          />

          <Bars data={data} Xscale={Xscale} Yscale={Yscale} innerHeight={innerHeight}/>
          
           {/* label x axis  */}
           <text x={(innerWidth/2)-30} y={innerHeight+80} className="text-[25px] font-bold">Population</text>
            {/* label y axis  */}
           <text transform={`translate(-${innerWidth/3} ,275)rotate(-90)`} y={innerHeight/2} className="text-[25px] font-bold">Countries</text>
         
        </g>
      </svg>
    </div>
  )
}

export default Index;