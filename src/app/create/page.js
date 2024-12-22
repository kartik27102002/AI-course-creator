"use client"
import React, { useState } from 'react'
import SelectOption from './_component/SelectOption'
import { Button } from '@/components/ui/button';
import TopicInput from './_component/TopicInput';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';


export default function Create() {
    const [step,setstep]=useState(0);
    const [formdata, setformdata]=useState([]);
    const{user}=useUser();
    const [loading,setloading]=useState(false);
    const router=useRouter();

    const handleUserInput=(fieldName,fieldValue)=>
    {

           setformdata(prev=>({
            ...prev,
            [fieldName]:fieldValue
           }))
           console.log("formdata "+formdata.studyType);
           console.log("formdata "+formdata.topic);
    }

   // USE TO SAVE USER INPUT AND GENERATE AI LAYOUT
    const GenerateCourseOutline=async()=>{
          const courseId=uuidv4();
          setloading(true);
          const result= await axios.post('/api/generate-course-outline',{
              courseId:courseId,
           ...formdata,
           createdBy:user?.primaryEmailAddress?.emailAddress
          })

          console.log("result=======+"+result.data.result.resp);
          setloading(false);
          router.replace("/dashboard");


   }

  return (
    <div className=" flex flex-col items-center md:px-24 lg:px-36 mt-20">
      <h2 className="font-bold text-4xl text-red-700">Start Building Your Personal Study Material</h2>
      <h1 className="text-red-700 text-lg">Fill All details in order to generate study material for your Next project</h1>
      <div className="mt-10">
        { step==0 ?
        <SelectOption   selectStudyType={(value)=>handleUserInput('studyType',value)} />  :
         <TopicInput  setTopicValue={(value)=>handleUserInput('topic',value)} 
           setDifficultyLevel={(value)=>handleUserInput('Difficultlevel',value)}           />
         }
      </div>



      <div className="flex justify-between w-full mt-32">

        {
            step!=0 ? <Button className="bg-gray-500" onClick={()=>setstep(step-1)} >Prev</Button>:'-'
        }
        {
            step==0?  <Button onClick={()=>setstep(1)}>Next</Button>:  <Button onClick={ GenerateCourseOutline} disabled={loading}>
              {
                loading?<Loader className="animate-spin"/>:"Generate"
              }
              
              </Button>
        }
       
        
        
     </div>
    </div>
  )
}
