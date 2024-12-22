"use client"
import { useUser } from '@clerk/nextjs';
import React, { useEffect } from 'react'
import { usersTable } from '../../configs/schema';
import { db } from '../../configs/db';
import { eq } from 'drizzle-orm';
import axios from 'axios';


function provider({children}) {
    const {user}=useUser();

    useEffect(()=>{
       
       user && getUser();
       console.log(user?.fullName+"------------------------fullname");
       //console.log(user?.primaryEmailAddress?.emailAddress+"------------------------email");
    },[user]);

    const getUser=async()=>{
        // const result= await db.select().from(usersTable)
        // .where(eq(usersTable.email,user?.primaryEmailAddress?.emailAddress));
        //  console.log("result"+result);

        //  if(result?.length==0)
        //  {
        //     const respUser=await db.insert(usersTable).values({
        //         email:user?.primaryEmailAddress?.emailAddress,
        //         name:"kartik Garg",
        //     }).returning({id:usersTable.id});

        //     console.log("respUser "+respUser);
        //  }


    }


    
  return (
    <div>
        
     {children}
    
    </div>
  )
}

export default provider
