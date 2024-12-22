"use client"
import { Button } from '@/components/ui/button';
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'

import React, { useEffect, useState } from 'react'
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
function page() {

    const{courseId}=useParams();
    const[notes,setnotes]=useState();
    const[stepCount,setstepCount]=useState(1);
    const router=useRouter();
    const GetNotes=async()=>{

          const result=await axios.post('/api/study-type',{
             courseId:courseId,
             Type:'notes',
          })
           

          console.log(result?.data);
        setnotes(result?.data);

    }

    useEffect(()=>{
        courseId && GetNotes();
    },[])


  return notes &&(
    <div>
      <div className="flex gap-5 items-center">
       {
        stepCount!=0 &&  <Button Button onClick={()=>setstepCount(stepCount-1)}> <FaCaretLeft />Previous</Button>
       }
        {notes && notes.map((items,index)=>(
                <div key={index} className={` w-full h-3 rounded-full ${index<stepCount? 'bg-gradient-to-r from-orange-200 via-red-400 to-pink-600' : 'bg-gray-300'}`}>

                </div>
            ))}
        {
         stepCount!=notes?.length && <Button onClick={()=>setstepCount(stepCount+1)}>Next <FaCaretRight /></Button>
        }
        
      </div>
     

      <div className="mt-10">
      <div dangerouslySetInnerHTML={{__html:notes[stepCount]?.notes.replace('html','')}}/>
      {
        notes?.length==stepCount && <div className="flex items-center gap-6 flex-col justify-center">
            <h2 className="font-bold text-[50px]">
                End of notes <Button className="bg-green-500" onClick={()=>router.back()}>
                    Go to course Page</Button></h2> 
                    </div>
      }
      </div>
    </div>
  )
}

export default page
