import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React from 'react'

export default function CourseIntro({coursedata}) {
  return (
    <div className="flex gap-5 items-center border shadow-md p-10 rounded-lg">
      <Image src={'/intro.png'} alt="icon" height={100} width={100}/>
      <div>
           <h2 className="font-bold text-2xl mb-2 ">{coursedata?.courseLayout?.courseTitle}</h2>
           <p className="mb-3">{coursedata?.courseLayout?.courseSummary}</p>
           <Progress value={33}/>
           <h2>Total Chapters :{coursedata?.courseLayout?.chapters.length}</h2>
      </div>








    </div>
  )
}
