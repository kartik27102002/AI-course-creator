"use client";
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import FlashCradItem from './_components/FlashCradItem';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

export default function Page() {
  const [cards, setFlashcards] = useState([]);
  const { courseId } = useParams();
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (courseId) GetFlashCards();
  }, [courseId]);

  const GetFlashCards = async () => {
    const result = await axios.post('/api/study-type', {
      courseId: courseId,
      Type: "flashcards",
    });

    console.log("Flashcard data: ", result?.data);
    setFlashcards(result?.data?.type?.flashcards || []);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-3xl">Flashcards</h2>
      <p className="text-blue-800">Flashcards: The Ultimate Tool to Lock in Concepts!</p>
      <div className=" mt-10 flex gap-5 items-center">
        {currentIndex > 0 && (
          <Button onClick={handlePrevious}>
            <FaCaretLeft /> Previous
          </Button>
        )}
        {cards.map((_, index) => (
          <div
            key={index}
            className={`w-full h-3 rounded-full ${
              index <= currentIndex ? "bg-gradient-to-r from-orange-200 via-red-400 to-pink-600" : "bg-gray-300"
            }`}
          />
        ))}
        {currentIndex < cards.length - 1 && (
          <Button onClick={handleNext}>
            Next <FaCaretRight />
          </Button>
        )}
      </div>




      

      <div className="mt-10">
        <Carousel>
          <CarouselContent
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Slide based on currentIndex
              transition: "transform 0.5s ease", // Smooth transition
            }}
          >
            {cards.length!=0 ?cards.map((item, index) => (
              <CarouselItem key={index}>
                <FlashCradItem
                  handleClick={handleClick}
                  isFlipped={isFlipped}
                  items={item}
                />
              </CarouselItem>
            ))
            :
            <div className=" flex gap-5">
          
            </div>
        
        
        }
          </CarouselContent>
          {currentIndex > 0 && (
            <CarouselPrevious onClick={handlePrevious}>
              <FaCaretLeft />
            </CarouselPrevious>
          )}
          {currentIndex < cards.length - 1 && (
            <CarouselNext onClick={handleNext}>
              <FaCaretRight />
            </CarouselNext>
          )}
        </Carousel>


      </div>
    </div>
  );
}
