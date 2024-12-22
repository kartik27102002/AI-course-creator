"use client"
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React, { useState } from 'react'

function SelectOption({selectStudyType}) {
    const wishlist=[
        {
            name:'Exam',
            icon:'/exam-time.png',
        },
        {
            name:'Job Interview',
            icon:'/job-interview.png',
        },
        {
            name:'Practise',
            icon:'/study.png',
        },
        {
            name:'Coding Prep',
            icon:'/programming.png',
        },
        {
            name:'Others',
            icon:'/book.png',
        }
    ]

    const [choice, setchoice]=useState();
  return (
    <div className="mt-10">
     <h2 className="mb-2 text-lg font-semibold text-center">For which you want to create ypur Personal study materials</h2>
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5">
        {
              wishlist.map((items,index)=>(
                <div key={index} className={`p-4 flex flex-col items-center justify-center border 
                rounded-xl mt-2 hover:border-red-600 cursor-pointer hover:scale-110
                 ease-in-out shadow-2xl  ${items.name==choice && 'bg-red-300'}`}  onClick={()=>{setchoice(items.name); selectStudyType(items.name)} }   >
                    <Image src={items.icon} alt={items.name} height={50} width={50}/>
                    <h2 className="text-lg">{items.name}</h2>
                </div>
              ))
        }
     </div>

     
    </div>
  )
}

export default SelectOption
