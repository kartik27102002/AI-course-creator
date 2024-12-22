"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

const OnlineTest = () => {
    const{courseId}=useParams();
  
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [timeLeft, setTimeLeft] = useState(600);
  const [testStarted, setTestStarted] = useState(false);
   const[quizdata,setquizdata]=useState();


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

  useEffect(() => {
    if (testStarted) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            calculateScore();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [testStarted]);

  const handleOptionClick = (questionId, option) => {
    console.log(option);
    if (answers[questionId] === undefined) {
      setAnswers({ ...answers, [questionId]: option });
    }
  };

  const calculateScore = () => {
    let calculatedScore = 0;
    quizdata?.type?.questions.forEach((q) => {
      if (answers[q.questionId] === q.correctAnswer) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
  };

  if (!testStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Test Instructions</h1>
          <ul className="list-disc list-inside mb-6">
            <li>The test contains 10 multiple-choice questions.</li>
            <li>You have 10 minutes to complete the test.</li>
            <li>Once you select an answer, you cannot change it.</li>
            <li>Your score will be displayed at the end of the test.</li>
          </ul>
          <button
            onClick={() => setTestStarted(true)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Start Test
          </button>
        </div>
      </div>
    );
  }

  if (timeLeft === 0 || score !== null) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Test Completed</h1>
          <p className="text-lg">Your Score: <span className="font-semibold">{score} / {quizdata?.type?.questions?.length}</span></p>
          
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Online Test</h1>
        <p className="text-center mb-4">Time Remaining: <span className="font-semibold">{Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}</span></p>
        <div className="space-y-4">
          {quizdata?.type?.questions.map((q) => (
            <div key={q.questionId} className="p-4 bg-gray-50 rounded shadow-sm mt-4">
              <p className="font-semibold mb-2 text-xl">{q.questionId}. {q.questionText}</p>
              <div className="grid grid-cols-2 gap-2 mt-5">
                {q?.options.map((option, index) => (
                  <button
                    key={index}
                    disabled={ answers[q.questionId] !== undefined}
                    onClick={() => handleOptionClick(q.questionId, option)}
                    className={`p-5 text-lg rounded border shadow-lg ${ answers[q.questionId] !== undefined ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : ' hover:bg-blue-300'}`}
                  >
                    
                    {option}
                  </button>

                 
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={calculateScore}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-6"
        >
          Submit Test
        </button>
      </div>
    </div>
  );
};

export default OnlineTest;
