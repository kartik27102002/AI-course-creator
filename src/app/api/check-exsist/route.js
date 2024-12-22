import { NextResponse } from "next/server";
import { generateNotesAIModal } from "../../../../configs/AiModal";
import { db } from "../../../../configs/db";
import { chapterNotes } from "../../../../configs/schema";
import { eq } from "drizzle-orm";

export async function POST(req)
{
    console.log("=====================hello ji=======================");
   const{courseId}= await req.json();

          const dbresult=await db.select().from(chapterNotes)
             .where(eq(chapterNotes.courseId,courseId))
             console.log("quiz result query result: ", JSON.stringify(dbresult, null, 2));
         if(dbresult?.length==0)
           {console.log("no rep from server");
             return NextResponse.json({result:"noresp"})}
         else{
             return NextResponse.json(dbresult, { headers: { "Content-Type": "application/json" } });}





    

}