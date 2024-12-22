import { NextResponse } from "next/server";
import { courseOutline } from "../../../../configs/AiModal";
import { db } from "../../../../configs/db";
import { StudyMaterialTable } from "../../../../configs/schema";

export async function POST(req)
{
    try {
        const { courseId, studyType, topic, Difficultlevel, createdBy } = await req.json();
      
        if (!courseId || !studyType || !topic || !Difficultlevel || !createdBy) {
          console.error("Validation error:", { courseId, studyType, topic, Difficultlevel, createdBy });

          return NextResponse.json(
            { error: "Missing required fields" },
            { status: 400 }
          );
        }
      
        const PROMPT = `
          Generate a study material for ${topic} for ${studyType}, 
          with a difficulty level of ${Difficultlevel}.
          Include a summary, chapters, and topics and also generate Emoji for each chapter and all data should be  in JSON format .
        `;
        console.log("==============================================");
        const aiResp = await courseOutline.sendMessage(PROMPT);
       console.log(aiResp);
        if (!aiResp.response || !aiResp.response.text) {
          console.error("Invalid AI response:", aiResp);
          throw new Error("Invalid AI response format.");
        }
       // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        const responseText = await aiResp.response.text();
        const cleanResponseText = responseText.replace(/```(?:json)?|```/g, '').trim();
        console.log(cleanResponseText);
        console.log('--------------------------------------------');
        const aiResult = JSON.parse(cleanResponseText);
        console.log('|||||||||||||||||||||||||||||||||||||||||||||');
       console.log(aiResult);
        



        //databse addeddddddd

        const dbresult=await db.insert(StudyMaterialTable).values({
            courseId:courseId,
            courseType:studyType,
            topic:topic,
            difficulyLevel: Difficultlevel,
            courseLayout:aiResult,
            createdBy:createdBy,

        }).returning({resp:StudyMaterialTable});
        console.log("*********************************************");
         console.log(dbresult);
        return NextResponse.json({ result: dbresult[0] });









      } catch (error) {
        console.error("Error in API:", error.message, error.stack);
        return NextResponse.json(
          { error: "An error occurred while processing your request." },
          { status: 500 }
        );
      }
}