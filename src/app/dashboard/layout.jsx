"use client"
import React, { useState } from 'react'
import SideBar from './_Components/SideBar'
import DashHeader from './_Components/DashHeader'
import { CourseContext } from '../_context/CourseContext'

function layout({children}) {
  const[totalcourse,settotalcourse]=useState(0);
  return (
    <CourseContext.Provider value={{totalcourse,settotalcourse}}>
    <div>
        <div className="md:w-64 hidden md:block fixed">
          <SideBar/>
        </div>
        <div className="md:ml-64">
            <DashHeader/>
            <div className="p-5">
                {children}
             </div>
             
        </div>
    </div>
    </CourseContext.Provider>
  )
}

export default layout
