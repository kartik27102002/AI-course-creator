"use client"
import { Button } from '@/components/ui/button'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

function MateralCards({items,studycontent,courseId,refreshData}) {
      const[notes,setnotes]=useState();

   const GenerateData=async(val)=>{
    console.log("DATA FROM FLASH CARDS ARE CALLING");
    const result= await axios.post('/api/study-type',{
      courseId:courseId,
      Type:'ALL',
    })

    console.log("m getitng data"+result);
    refreshData(true);
   }
       
  

  return (
    <Link href={'/course/'+courseId+items.path} >
    <div className={`border shadow-lg rounded-lg p-5 flex flex-col items-center hover:bg-yellow-200
       hover:scale-105 ease-in-out `}>
      
        <h2 className="bg-green-500 text-white font-bold p-2 rounded-full text-[10px] mb-2">Ready</h2>
     
    
    
      <Image src={items.icon} alt="icon" height={70} width={70}/>
      <h2 className='font-bold mb-1 mt-3'>{items.name}</h2>
      <p className="text-gray-500 text-center mb-3 ">{items.desc}</p>

     
        <Button variant="outline">View</Button>
     

     
    </div>
    </Link>
  )
}

export default MateralCards

