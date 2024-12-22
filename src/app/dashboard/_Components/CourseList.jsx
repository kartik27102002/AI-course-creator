"use client"
import { useUser } from '@clerk/nextjs'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import CardItem from './CardItem';
import { CourseContext } from '@/app/_context/CourseContext';

function CourseList() {
    const {user}=useUser();
    const [courseList, setCourseList]=useState([]);
    const {totalcourse,settotalcourse}=useContext(CourseContext);
    useEffect(()=>{
        user && GetCourseList();
    },[user])
    const GetCourseList=async()=>{
        const result=await axios.post('/api/courses',{createdBy:user?.primaryEmailAddress?.emailAddress});
        console.log(result+"===got all list of course for a signed user");
        setCourseList(result.data.result);
        settotalcourse(result.data.result.length);
        
    }
  return (
    <div>
      <h2 className="font-bold text-4xl mt-10">Your Study Material</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5">
        {courseList.length>0 ?courseList.map((items,index)=>(
            
              <CardItem items={items} key={index}/>
           
        )) 
        :
        [1,2,3,4,5,6].map((items,index)=>(
         <div key={index}  className="h-[220px] bg-slate-200 w-full rounded-xl animate-pulse" >
        </div>
        ))
       
        }
        
      </div>
    </div>
  )
}

export default CourseList
