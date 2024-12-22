"use client"
import Image from 'next/image'
import React, { useState }from 'react'
import { Progress } from "@/components/ui/progress"
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { toast } from "sonner"
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
function CardItem({items,index}) {
  
  const[loading, setloading]=useState(0);
  const router=useRouter();

const GenerateCourse=async()=>
  {













    setloading(1);
    toast("Course is being created.");
    console.log("This world is full of life");
  
    try {
      const checkme = await axios.post('/api/check-exsist', {
        courseId: items?.courseId,
      });
  
      console.log("Full Response Object:", checkme);
      console.log("Response Data:", checkme.data.result);


      if(checkme.data.result=="noresp")
      {
        console.log("1 won in lif");
        const chapters=items?.courseLayout?.chapters;
        let i=0;
    
        for (const chp of chapters) {
          const response = await axios.post('/api/course-content', {
            courseId: items?.courseId,
            chapterId: chp["chapterNumber"],
            chapter: chp
          });
          console.log("Chapter created:", response.data);
        }
             
        const result=await axios.post('/api/flashcards',{
          courseId:items?.courseId,
          type: "flashcards",
          chapters:items?.topic,
                    
    
        })
    
    
    
        console.log("---------------------------------------------"+result);
        const quiz=await axios.post('/api/quiz',{
          courseId:items?.courseId,
          type: "quiz",
          chapters:items?.topic,
                    
    
        })
        console.log("---------------------------------------------"+quiz);
      }
  
      
  
      toast("Course created successfully.");

  setloading(0);
   router.replace('/course/'+items?.courseId);
    } catch (error) {
      console.error("Error during course creation:", error);
      toast("Failed to create the course.");
    } finally {
      setloading(0);
    }









  //   setloading(1);
  //   toast("Course are creating.")
  //  console.log("this world is full of life");
  //   const checkme=await axios.post('/api/check-exsist',{
  //     courseId: items?.courseId,
  //   })
  //   console.log("==========================checkme also"+checkme);

  //    if(checkme=="noresp")
  //    {

  //    console.log("1 won in lif");
    // const chapters=items?.courseLayout?.chapters;
    // let i=0;

    // for (const chp of chapters) {
    //   const response = await axios.post('/api/course-content', {
    //     courseId: items?.courseId,
    //     chapterId: chp["chapterNumber"],
    //     chapter: chp
    //   });
    //   console.log("Chapter created:", response.data);
    // }
         
    // const result=await axios.post('/api/flashcards',{
    //   courseId:items?.courseId,
    //   type: "flashcards",
    //   chapters:items?.topic,
                

    // })



    // console.log("---------------------------------------------"+result);
    // const quiz=await axios.post('/api/quiz',{
    //   courseId:items?.courseId,
    //   type: "quiz",
    //   chapters:items?.topic,
                

    // })
    // console.log("---------------------------------------------"+quiz);
     
    //  }
    //  toast("Course created successfully.")
   

  }



  return (
    <div className="border rounded-xl p-4 shadow-md hover:scale-110 ease-in-out hover:shadow-xl">
      
      <div>
        <div className="flex justify-between items-center">
            <Image src={'/items.png'} alt="icon" width={50} height={50} />
            <h2 className="text-[15px] p-1 px-2 rounded-full bg-red-500 text-white  ">13 Dec 2024</h2>
        </div>
           <h1 className="mt-3 font-bold text-xl">{items?.courseLayout?.courseTitle}</h1>
           <p className="text-xs line-clamp-2 text-gray-500 mt-2">{items?.courseLayout?.courseSummary}</p>
           <div className="mt-4 ">
           <Progress value={33}  className="bg-gray-400"/>
           </div>
           <div className="mt-3 flex justify-end">
            {
              loading==0 ?
              <Button className='bg-blue-500 hover:bg-blue-800' onClick={(event)=>GenerateCourse()}>View</Button>
              :
              <Button className='bg-gray-600' disabled={loading}  >
                <Loader  className="animate-spin" />
                Generating 
                </Button>

            }
          
           </div>
      </div>
    </div>
  )
}

export default CardItem
