"use client"
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

export default function Hero() {
    const {user}=useUser();
  return (
    <div className="bg-blue-500 w-full rounded-xl p-5 flex gap-6 items-center">
    
      <Image src="/robot.png" alt="icon" width={200} height={200} className=""/>
      <div>
           <h1 className="font-bold   text-[50px] text-white">Hello, {user?.fullName}</h1>
           <h2 className="text-xl mt-2 text-white">It's time to get back and start learning new courses</h2>
      </div>
    </div>
  )
}
