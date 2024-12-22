import { GenerateQuiz } from "../../../../configs/AiModal";
import { studyType } from "../../../../configs/schema";
import { db } from "../../../../configs/db";
import { NextResponse } from "next/server";
export async function POST(req)
{
    console.log("=====quiz=====");
    const{courseId, chapters, type}=await req.json();
    const PROMPT="Generate Quiz on topic:"+chapters+"with question and options along with correct answer in JSON format";
    const aiResp=await GenerateQuiz.sendMessage(PROMPT);
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