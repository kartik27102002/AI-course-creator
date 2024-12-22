import { eq ,and, desc, asc} from "drizzle-orm";
import { db } from "../../../../configs/db";
import { chapterNotes, studyType } from "../../../../configs/schema";
import { NextResponse } from "next/server";
import { Item } from "@radix-ui/react-select";

export async function POST(req)
{
   const{courseId, Type}=await req.json();
   console.log('--------------------------------'+Type);
   if(Type=='ALL')
   {
     const notes=await db.select().from(chapterNotes)
     .where(eq(chapterNotes?.courseId,courseId));

     const flash=await db.select().from(studyType)
     .where(eq(studyType?.courseId,courseId));
     
      console.log(flash+"---------------------------");
     const result={
        notes:notes,
        flashcard:flash,
        qa:flash,
        quiz:null
     }
     //console.log("->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
   console.log('result :'+result.flashcard);
     return NextResponse.json(result);
   }
   else if(Type=='notes')
   {
    const notes=await db.select().from(chapterNotes)
    .where(eq(chapterNotes?.courseId,courseId))
    .orderBy(asc(chapterNotes.id));
      console.log("========================"+notes);
    return NextResponse.json(notes);
   }
   else if(Type=="flashcards")
   {
   
  const notes = await db
  .select()
  .from(studyType)
  .where(and(eq(studyType?.courseId, courseId), eq(studyType?.contentType, Type)));

 // Log the raw result
   console.log("Raw query result: ", JSON.stringify(notes, null, 2));

   return NextResponse.json(notes[0], { headers: { "Content-Type": "application/json" } });

   }
   else if(Type=='quiz')
   {
    const notes = await db
    .select()
    .from(studyType)
    .where(and(eq(studyType?.courseId, courseId), eq(studyType?.contentType, Type)));
  
     console.log("quiz result query result: ", JSON.stringify(notes, null, 2));
  
     return NextResponse.json(notes[0], { headers: { "Content-Type": "application/json" } });
   }






}