import { NextResponse } from "next/server";
import { GenerateFlashCards } from "../../../../configs/AiModal";
import { studyType } from "../../../../configs/schema";
import { db } from "../../../../configs/db";

export  async function POST(req)
{
   console.log('----------FLASHCARDS=================');
   const{courseId, chapters, type}=await req.json();
   const PROMPT="Generate a flashcard on topic :"+chapters+"in JSON format with front back content , Maximum 10, data should be in JSON format";
   const aiResp=await GenerateFlashCards.sendMessage(PROMPT);
   const responseText = await aiResp.response.text();
    const cleanResponseText = responseText.replace(/```(?:json)?|```/g, '').trim();
    const aiResult = JSON.parse(cleanResponseText);
   console.log(aiResult);

   const dbresult =await db.insert(studyType).values({
      courseId: courseId,
      contentType: type,
      type:aiResult,
      status:'Ready',

   }).returning({resp:studyType});

   console.log(dbresult+"m chal pdaa [=============================")

   return NextResponse.json({result:"hello world"});

}