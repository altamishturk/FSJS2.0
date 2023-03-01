import React, {  useEffect, useState } from 'react';
import rock from "../assits/rock.svg";
import paper from "../assits/paper.svg";
import scissor from "../assits/scissor.svg";
import RPSBox from './RPSBox';
import audio1 from "../assits/sounds/win.mp3";
import audio2 from "../assits/sounds/lose.mp3";
const winAudio = new Audio(audio1);
const loseAudio = new Audio(audio2);
const images = [{img:rock,name: "rock"},{img:paper,name: "paper"},{img:scissor,name: "scissor"}];

function Home() {
  const [win, setWin] = useState("");
  const [yourScore, setYourScore] = useState(0);
  const [totalTurns, setTotalTurns] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [clicked, setClicked] = useState(false);



  const pickRamdom = (name)=>{
    const randNumber = Math.floor(Math.random()*images.length)
    const item = images[randNumber];
    return item.name;
  }

  const setWindAndMakeItDisappear =(text,you,comp,tie)=>{
      if(you){
        setYourScore(prev => prev+1);
      }
      if(comp){
        setComputerScore(prev => prev+1);
      }
      setTimeout(() => {
        setClicked(()=>false);
      }, 200);
  }

  useEffect(() => {
    if(totalTurns === 10){
      if(totalTurns/2 < yourScore){
        setWin("You Win!");
        winAudio.play();
      }
      else if(yourScore === computerScore){
        setWin("Tie!");
      }
      else {
        loseAudio.play();
        setWin("Computer Win!");
      }
      setTimeout(() => {
        setWin("");
        setYourScore(0);
        setComputerScore(0);
        setTotalTurns(0);
      }, 2000);
    }
  }, [yourScore,computerScore,totalTurns]);

  const onSelect = (name)=> {
    if(clicked){
      return;
    }
    setClicked(()=>true);
    const computer = pickRamdom(name);
    const human = name;

    
    if(computer === human){
      setWindAndMakeItDisappear("Tie",false,false,true);
    }
    if((human === "rock" && computer === "scissor") || (human === "paper" && computer === "rock") || (human === "scissor" && computer === "paper")){
      setWindAndMakeItDisappear("You Win!",true,false,false);
    }
    else {
      setWindAndMakeItDisappear("Computer Win!",false,true,false); 
    }
    setTotalTurns(prev => prev+1);
  }

  

  return (
    <div className='bg-gray-800 text-white'>
      <div className='container mx-auto min-h-[100vh]'>
        <h1 className='text-center text-[50px] mb-2 pt-10'>Rock Paper Scissor Game</h1>
        <p className='text-center mb-10'>Please click one of them to play</p>
        <div className='flex gap-10 justify-center items-center px-2'>
          {
           images.map((image,index) => (
            <RPSBox key={index} image={image} onSelect={onSelect}/>
           )) 
          }
        </div>
        <div className='text-[25px] flex flex-col md:flex-row px-2 gap-10 justify-center mt-10'><div className='text-cneter'>Your Score: {yourScore}</div><div className='text-cneter'>Computer's Score: {computerScore}</div><div className='text-cneter'>Remaning Score: {10-totalTurns}</div></div>
        <div className='text-[60px] text-green-500 text-center mt-10'>{win}</div>
      </div>
    </div>
  )
}

export default Home;

