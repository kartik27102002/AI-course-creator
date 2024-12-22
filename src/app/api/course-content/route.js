import { NextResponse } from "next/server";
import { generateNotesAIModal } from "../../../../configs/AiModal";
import { db } from "../../../../configs/db";
import { chapterNotes } from "../../../../configs/schema";

export async function POST(req)
{
   const{courseId, chapterId, chapter}= await req.json();
    console.log("id"+courseId);
    console.log('chapterID'+chapterId);
    console.log('chapter'+chapter);
    
    const PROMPT="Generate exam material detail content for each chapter, Make sure to includes all topic point in the content, make sure to give content in HTML format (Do not Add HTMLKL, Head, Body, title tag), The chapters"+JSON.stringify(chapter);
    const aiResp=await generateNotesAIModal.sendMessage(PROMPT);
    const responseText = await aiResp.response.text();
    const cleanResponseText = responseText.replace(/```(?:json)?|```/g, '').trim();
   console.log(cleanResponseText);
   
     const dbresult=await db.insert(chapterNotes).values({
        courseId:courseId,
        chapterId:chapterId,
        notes:cleanResponseText,
     }).returning({resp:chapterNotes});
     console.log("dbresult" +dbresult);
     console.log("==================================");
    return NextResponse.json({result:dbresult});





    

}