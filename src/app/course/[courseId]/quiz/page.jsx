"use client";
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import QuizCard from './_Components/QuizCard';
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

export default function Page() {
    const { courseId } = useParams();
    const[quizdata,setquizdata]=useState();
    const[stepCount,setstepCount]=useState(1);
    const[correctAnswer, setcorrectAnswer]=useState(null);
    const[lolo,setlolo]=useState(null);
    useEffect(() => {
        if (courseId) 
            GetFlashCards();
      }, [courseId]);

    const GetFlashCards = async () => {
        const result = await axios.post('/api/study-type', {
          courseId: courseId,
          Type: "quiz",
        });
    
        console.log("quiz data: ", result?.data);
        setquizdata(result?.data);
        
      };

      const checkAnswer = (userAnswer, currQuestion) => {
        console.log("User Answer: ", userAnswer, "Correct Answer: ", currQuestion?.correctAnswer);
        setlolo(currQuestion?.correctAnswer);
        console.log(lolo);
        if (userAnswer === currQuestion?.correctAnswer) {
            setcorrectAnswer(true);
            console.log("Answer is correct");
            return ;
        } else {
            setcorrectAnswer(false);
            console.log("Answer is incorrect");
        }
    };
   
    useEffect(()=>{
       setcorrectAnswer(null);
    },[stepCount]);
     
  


  return (
    <div>
         <h2 className="font-bold text-3xl">Quiz</h2>
          
         <div className=" mt-10 flex gap-5 items-center">
        {
          stepCount!=0 &&  <Button  onClick={()=>setstepCount(stepCount-1)}> <FaCaretLeft />Previous</Button>
        }
        {
            
            quizdata?.type?.questions && quizdata?.type?.questions.map((items,index)=>(
                <div
            key={index}
            className={`w-full h-3 rounded-full ${
              index <= stepCount ? "bg-gradient-to-r from-orange-200 via-red-400 to-pink-600" : "bg-gray-300"
            }`} >
                
                </div>
               ))
        }
        {
          stepCount!=quizdata?.type?.questions?.length && <Button onClick={()=>setstepCount(stepCount+1)}
          
          >Next <FaCaretRight /></Button>
        }
      </div>

         
         
          <div className="mt-10">
           <QuizCard items={quizdata?.type?.questions[stepCount]} className="mt-4"
           userSelectedOption={(v)=>checkAnswer(v,quizdata?.type?.questions[stepCount])} />
          </div>



         { correctAnswer==false && <div><div className="border p-3 border-red-700 bg-red-200 rounded-lg mt-5">
              <h2 className="font-bold text-lg text-red-700 ">Incorrect</h2>
              <p className="text-red-700">Correct answer is :{lolo}</p>
              <p className="font-bold text-lg">Explanation{quizdata?.type?.questions[stepCount].explanation}</p>
            </div></div> }

         { correctAnswer==true && <div>
            <div className="border p-3 border-green-700 bg-green-200 rounded-lg mt-5">
              <h2 className="font-bold text-lg text-green-700 ">Correct</h2>
              <p className="text-green-700">Your answer is correct : {lolo}</p>
              <p lassName="font-bold text-lg">Explanation{quizdata?.type?.questions[stepCount].explanation}</p>
            </div>
         </div> }






    </div>
  );
}
