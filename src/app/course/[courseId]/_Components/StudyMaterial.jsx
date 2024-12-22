"use client"
import React, { useEffect, useState } from 'react'
import MateralCards from './MateralCards'
import axios from 'axios'
import Link from 'next/link';

function StudyMaterial({courseId}) {

    const[studycontent, setstudycontent]=useState();

    const material=[
        {
            name:"Notes/Chapters",
            icon:'/notes.png',
            desc:"Read Notes to prepare it.",
            path:'/notes',
            type:'notes',
        },
        {
            name:"FlashCards",
            icon:'/flash.png',
            desc:"Flashcards helps you to remember the concepts.",
            path:'/flashcard',
            type:'flashcard',
        },
        {
            name:"Quiz",
            icon:'/quiz.png',
            desc:"Great way to test your knowledge.",
            path:'/quiz',
            type:'quiz',
        },
        {
            name:"Question/Answer",
            icon:'/qa.png',
            desc:"Help to practice your learning.",
            path:'/Test',
            type:'questionAnswer',
        }
    ]
     
    const GetStudyMaterial=async()=>{
   console.log("M CALLED AGAIN");
       const result=await axios.post('/api/study-type',{
           courseId:courseId,
           Type:'ALL',
       })
           
       console.log("result------"+result?.data);
       setstudycontent(result?.data);

    }


    useEffect(()=>{
           courseId && GetStudyMaterial();
    },[])
   

  return (
    <div className="mt-7">
      <h1 className="font-medium text-2xl ">Study Material</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {
            
            material.map((items,index)=>(
                //  
                <MateralCards items={items} key={index} studycontent={studycontent} courseId={courseId} refreshData={ GetStudyMaterial}/>
                // </Link>
            ))
           
        }
      </div>
    </div>
  )
}

export default StudyMaterial
