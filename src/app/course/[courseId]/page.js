"use client"
import DashHeader from '@/app/dashboard/_Components/DashHeader';
import axios from 'axios';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseIntro from './_Components/CourseIntro';
import StudyMaterial from './_Components/StudyMaterial';
import ChapterList from './_Components/ChapterList';

function page() {
    const{courseId}=useParams();
    const[coursedata, setcoursedata]=useState();
     useEffect(()=>{
        GetChapters();
     },[courseId])
   const GetChapters=async()=>{
       const result= await axios.get('/api/courses?courseId='+courseId);
       console.log("data got from api"+result);
       setcoursedata(result.data.result);
   }


  return (
    <div>
      
        <div >
                {/* COURSE INTRODUCTION */}
                <CourseIntro coursedata={coursedata}/>

                {/* STUDY MATERIAL OPTION */}
                <StudyMaterial courseId={courseId}/>

                {/* CHAPTER LIST */}
                <ChapterList coursedata={coursedata}/>
        </div>
    </div>
  )
}

export default page
