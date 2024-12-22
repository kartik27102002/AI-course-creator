"use client"
import { Button } from '@/components/ui/button'
import { LayoutDashboard, Shield, UserCircle } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useUser } from '@clerk/nextjs'
import { Progress } from "@/components/ui/progress"
import Link from 'next/link'
import { CourseContext } from '@/app/_context/CourseContext'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
function SideBar() {

   const path=usePathname();
   const {user}=useUser();
  console.log(path);
    const menuList=[
        {
            name:"Dashboard",
            icon: LayoutDashboard,
            path:"/dashboard"
        },
        {
            name:"Upgrade",
            icon: Shield,
            path:"/dashboard/upgrade"
        },
        {
            name:"Profile",
            icon: UserCircle,
            path:"/dashboard/profile"
        }
    ]
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
    <div className="h-screen shadow-2xl p-3  ">

        <Image src="/logo.png" alt="icon" width={100} height={100} className=""/>

{totalcourse<5 ?
       <div className="mt-10">
        <Link href={'/create'} className="w-full">
        <Button className="w-full" > + Create New</Button>
        </Link>
       </div> :<div className="mt-10">
        <Link href={'/create'} className="w-full">
        <Button className="w-full" disabled={true}> + Create New</Button>
        </Link>
       </div>

       
    }

       <div className="mt-5">
        {
            menuList.map((items,index)=>(
               <Link href={items.path} key={index} >
              <div className={`flex gap-5 items-center p-3 hover:bg-slate-200
              hover:border rounded-lg mb-3 cursor-pointer
              
               ${path==items.path && 'bg-slate-200'}`}>
               
               <items.icon/>
               <h2>{items.name}</h2>
               
              </div>
              </Link>
            ))
        }
       </div>

        <div className="border p-2 bg-slate-100 rounded-lg absolute bottom-10 w-[93%] ">    
            <h2 className="text-lg mb-2">Avilable Credits: {5-totalcourse}</h2>
            <Progress value={(totalcourse/5)*100} />
            <h1 className="text-sm">{totalcourse} Out of 5 Credits Used</h1>

            <Link href={'/dashboard/upgrade'} className="text-red-600 text-sm mt-3">Upgrade to create more</Link>
        </div>

    </div>
  )
}

export default SideBar
