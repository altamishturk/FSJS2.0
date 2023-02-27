import React, { useState } from 'react';
import audio from "../assits/sounds/click.mp3";
const clickAudio = new Audio(audio);

function RPSBox({image,onSelect}) {
  const [show,setShow] = useState(true);

  const handleSelect = ()=> {
    setShow(false);
    clickAudio.play();
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }


  return (
    <>
    {
      show && <div className={`w-[200px] h-[160px]`} onClick={handleSelect}>
                  <img src={image.img} alt="game-img" className='w-[100%] h-[100%]'  onClick={()=>onSelect(image.name)}/>
              </div>
    }
    </>
  )
}

export default RPSBox;