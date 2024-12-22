import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function DashHeader() {
  return (
    <div className="p-5 flex justify-between border rounded-b-lg shadow-lg">
     <Image src='/logo.png' alt="icon" height={100} width={100}/> 
    <UserButton/>
    </div>
  )
}

export default DashHeader
