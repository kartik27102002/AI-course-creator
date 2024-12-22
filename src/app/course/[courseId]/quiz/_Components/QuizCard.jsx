"use client"
import { Button } from '@/components/ui/button'
import React, { useState , useEffect} from 'react'
import { GiCancel } from "react-icons/gi";
import { TiTick } from "react-icons/ti";

export default function QuizCard({items,userSelectedOption}) {
  const[selectedOption, setSelectedOption]=useState();
  const[display, setdisplay]=useState(false);
  
  return (
    <div className="mt-10 p-5">
        <div className="font-medium text-3xl flex flex-row gap-5 text-center">
        <h1>{items?.questionId}</h1>
        <h1>{items?.questionText}</h1>
       </div>

      <div className="grid grid-cols-2 gap-5 mt-5">
           {
                items?.options && items?.options.map((lol,index)=>(
                     <h2 key={index} variant="outline" onClick={()=>{setSelectedOption(lol); userSelectedOption(lol) }}
                    className= {`w-full border  flex rounded-full p-4 text-center items-center justify-between
                     text-xl shadow-xl font-semibold hover:bg-gray-300 cursor-pointer ${lol==selectedOption&& "bg-blue-500 text-white"}
                     `}>{lol}</h2>
                  
                    
                  
              ))

              
           }
      </div>
      
      

    </div>
  )
}
