import React from 'react'
import ReactCardFlip from 'react-card-flip';
function FlashCradItem({isFlipped,handleClick,items}) {
  return (
    <div className="flex items-center justify-center">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="p-4 bg-gradient-to-tr from-gray-400 via-pink-500 to-rose-400  text-white flex flex-col rounded-lg items-center
         justify-center cursor-pointer h-[250px] w-[200px] shadow-xl
         md:h-[350px] md:w-[300px]   "    onClick={handleClick}>
       
          <h2 className="font-bold text-xl">{items?.front}</h2>
        
        </div>

        <div className="p-4 bg-gradient-to-tr from-cyan-100 via-blue-300 to-indigo-100 shadow-2xl text-blue-700 flex rounded-lg items-center
         justify-center cursor-pointer h-[250px] w-[200px] 
         md:h-[350px] md:w-[300px]   " onClick={handleClick}>
          
        <h2 className="font-bold text-xl">{items?.back}</h2>
      
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default FlashCradItem
