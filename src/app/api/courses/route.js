import { NextResponse } from "next/server"
import { db } from "../../../../configs/db";
import { chapterNotes, StudyMaterialTable } from "../../../../configs/schema";
import { desc, eq } from "drizzle-orm";

//THIS IS FOR GETTING LIST OF ALL COURSES BY USER ID TO DISPLAY ON DASHBOARD
export async function POST(req)
{
   // console.log("==========DATA FOR USER==========="+result);
    const{createdBy}=await req.json();
    const result=await db.select().from(StudyMaterialTable)
    .where(eq(StudyMaterialTable.createdBy,createdBy))
    .orderBy(desc(StudyMaterialTable.id));

  
   console.log("==========DATA FOR USER==========="+result);
    return NextResponse.json({result:result});
}



export async function GET(req)
{
    const reqUrl=req.url;
    const {searchParams}= new URL(reqUrl);
    const courseId=searchParams?.get('courseId');

    const result=await db.select().from(StudyMaterialTable)
    .where(eq(StudyMaterialTable.courseId,courseId))
   

    console.log("=============GETTING COURSE DETIALS BY COURSEID========================");
    console.log(result);
    return NextResponse.json({result:result[0]})
}