"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"

import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import { FaStar } from "react-icons/fa";
export default function Home() {
  const{user}=useUser();
  return (
    <div>

          <div className="p-5 flex justify-between border rounded-b-lg shadow-lg">
           <Image src='/logo.png' alt="icon" height={100} width={100}/> 
           <Link href={"/dashboard"}>
          <Button className="bg-red-600 text-white font-bold text-lg shadow-md">Dashboard <FaSignInAlt />
          </Button>
          </Link>
          </div>


          <div className="mt-5 p-20 flex flex-col items-center justify-center">
            
                <div className="flex flex-col items-center gap-0">
                <div className="text-[80px] font-bold"><h1 className="">AI Powered <span className="text-red-600">Exam Prep</span></h1></div>
                <div className="text-[80px] font-bold mt-[-20px]"> <h1>Material Generator</h1></div>
                </div>
                <div className="font-semibold text-gray-500 text-xl mt-5">Your AI Exam Prep Companion : Effortless Study Material at Your Fingertips.</div>
                <div className="mt-10 flex flex-row items-center justify-between">
                  <div>
                  <SignedOut>
                   
                   <Button className="p-5 text-bold text-white"> <SignInButton /> <FaArrowRight /></Button>
                   
                  </SignedOut>
                  <SignedIn>
                    <Link href="/dashboard">
                  <Button className="p-5 text-bold text-white bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 shadow-xl p-7 rounded-full">{user?.fullName} Signed Up <FaArrowRight /></Button>
                  </Link>
                 </SignedIn>
                  </div>
                  <div className="border p-5 flex gap-4 items-center p-2   ml-20 rounded-full shadow-xl"><FaVideo /> Watch Video</div>
                </div>





        

          </div>

          <section className="mt-10 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 py-10 flex  justify-between">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ml-10">
          <h1 className="text-[50px] text-white font-bold">eSkilled AI Course</h1>
          <h1 className="text-[50px] text-white font-bold">Creator - Your Powerful</h1>
          <h1 className="text-[50px] text-white font-bold">Online Course Maker</h1>
          <h1 className="text-[30px] text-white font-medium">Build High Quality Courses 100x Faster!</h1>
          <Button className="bg-blue-400 text-white p-8 font-bold text-3xl mt-5">Try it for FREE</Button>
          <div className="mt-5 text-white font-semibold text-xl">
            <ul>
            <li> ☹️ Do your courses take weeks or months to build?</li>
            <li>  ☹️ Want to cut course development costs?</li>
          ☹️ Don’t have the resources for custom course development?
          </ul>
          </div>
          </div>
           
          <div className="mr-20">
            <Image src={'/kuty.png'} height={300} width={400} alt="icon"/>        
          </div>

        </section>

        <div className=" p-20 flex items-center justify-center bg-blue-100  mt-10 justify-between rounded-xl mx-[450px]">
              <div>
                  <h1 className="font-bold text-3xl">Our Customer Say</h1>
              </div>
              <div className="bg-white p-5  ">
                <div className="bg-white p-5 flex  flex-row justify-center items-center gap-3 text-3xl ">
                   <div> 5.0 </div>
                   <div className="flex text-yellow-400"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                </div>
                <p className="text-gray-500 flex items-center gap-1">Based on 13 reviews POWERED BY
                  <Image src={'/search.png'} height={20} width={20} alt="icon"/>
                </p>
              
                   
              </div>
        </div>

        <div className="flex flex-col  justify-center text-center items-center p-40">
         <div><p className="font-bold text-[50px]">AI Course Creation Platform Advantages</p></div> 
         <div className="items-center text-gray-500"><p>Our AI for course creation is loaded with potent features that make it a breeze to create immersive and interactive courses. Explore the benefits of using eSkilled AI Course Creator for your course development needs.</p></div> 
        </div>

        <div className="flex justify-center items-center mx-10 ">
          
          <div className="grid grid-cols-3 gap-10  ">
           
            <div className="p-5 bg-gradient-to-bl from-blue-100 via-blue-200 to-blue-400 bordered rounded-xl shadow-xl items-center hover:scale-105 ease-in-out transition-smooth">
               <Image src={"/fast-launch.png"} alt="icon" height={100} width={100} className="p-5 bg-gradient-to-r from-orange-200 via-red-400 to-pink-600 rounded-full shadow-2xl"/>
               <h1 className="font-bold text-2xl mt-2">Quick and Easy Course Creation​</h1>
               <p className="text-lg mt-2">Our AI Course Creator platform automates the creation of course 
                outlines, lesson plans, and learning materials based on your input, eliminating time-consuming
                 manual tasks and making course design more efficient.</p>
            </div>
            <div className="p-5  bg-gradient-to-bl from-blue-100 via-blue-200 to-blue-400  bordered rounded-xl shadow-xl hover:scale-105 ease-in-out transition-smooth">
           
               <Image src={"/items.png"} height={100} alt="icon" width={100} className="p-5 bg-gradient-to-r from-orange-200 via-red-400 to-pink-600 rounded-full"/>
               
               <h1 className="font-bold text-2xl mt-2">Interactive Content</h1>
               <p className="text-lg mt-2">Enrich your courses with our AI Course Creator's interactive features, 
                such as quizzes, simulations, and multimedia. Captivate 
                your learners and reinforce their understanding with lively 
                learning aids like image hotspots and flip cards.</p>
            </div>
            <div className="p-5  bg-gradient-to-bl from-blue-100 via-blue-200 to-blue-400  bordered rounded-xl shadow-xl hover:scale-105 ease-in-out transition-smooth">
               <Image src={"/smartphone (1).png"} alt="icon" height={100} width={100} className="p-5 bg-gradient-to-r from-orange-200 via-red-400 to-pink-600 rounded-full"/>
               <h1 className="font-bold text-2xl mt-2">Mobile Friendly Design</h1>
               <p className="text-lg mt-2">For flexible, on-the-go learning. AI Course Creator 
                adapts perfectly to desktop, tablet, and mobile phone.</p>
            </div>
            <div className="p-5  bg-gradient-to-bl from-blue-100 via-blue-200 to-blue-400  bordered rounded-xl shadow-xl hover:scale-105 ease-in-out transition-smooth">
               <Image src={"/cost.png"} height={100} alt="icon" width={100} className="p-5 bg-gradient-to-r from-orange-200 via-red-400 to-pink-600 rounded-full"/>
               <h1 className="font-bold text-2xl mt-2">Cost and Time Efficiency</h1>
               <p className="text-lg mt-2">Automation reduces the need for extensive manual input in course creation, saving both time and costs. Existing materials are reused and optimized, while the need
                 for additional resources is minimized, making it an economical solution for institutions and businesses.</p>
            </div>

            <div className="p-5  bg-gradient-to-bl from-blue-100 via-blue-200 to-blue-400 bordered rounded-xl shadow-xl hover:scale-105 ease-in-out transition-smooth">
               <Image src={"/law.png"} height={100} alt="icon" width={100} className="p-5 bg-gradient-to-r from-orange-200 via-red-400 to-pink-600 rounded-full"/>
               <h1 className="font-bold text-2xl mt-2">Global Scalability and Accessibility</h1>
               <p className="text-lg mt-2">AI course platforms ensure inclusivity by providing tools like language translation, localization, and accessibility features. They allow institutions to reach a global audience and cater 
                to diverse learners, including those with disabilities, ensuring equal access to high-quality education.</p>
            </div>

            <div className="p-5  bg-gradient-to-bl from-blue-100 via-blue-200 to-blue-400 bordered rounded-xl shadow-xl hover:scale-105 ease-in-out transition-smooth">
               <Image src={"/engagement.png"} alt="icon" height={100} width={100} className="p-5 bg-gradient-to-r from-orange-200 via-red-400 to-pink-600 rounded-full"/>
               <h1 className="font-bold text-2xl mt-2">Enhanced Engagement</h1>
               <p className="text-lg mt-2  font-medium">With features like gamification, interactive media, and AI-powered chatbots, these platforms make learning more engaging. They incorporate videos, quizzes
                , and simulations to capture attention and motivate learners, ensuring an immersive
                 educational experience.</p>
            </div>
            

          </div>
        </div>
          
          {/* //footer */}
           <div className="mt-[150px] p-10 grid grid-cols-2 bg-gray-200 justify-center items-center ">
                   <div>
                   <Image src='/logo.png' alt="icon" height={100} width={100}/> 
                   </div>
                   <div className="flex flex-col justify-center  ml-[-40px]" >
                        <div>
                            <h1 className="font-bold text-xl">Copyright © 2022. All rights reserved.</h1>
                        </div>
                        <div className="flex  gap-5 mt-5 ">
                          <div>  <Image src='/instagram.png' alt="icon" height={50} width={50} className=" hover:scale-110 ease-in-out transition-smooth"/> </div>
                          <div>  <Image src='/linkedin.png' alt="icon" height={50} width={50} className=" hover:scale-110 ease-in-out transition-smooth"/> </div>
                          <div>  <Image src='/social.png' alt="icon" height={50} width={50} className=" hover:scale-110 ease-in-out transition-smooth"/> </div>
                          <div>  <Image src='/facebook.png' alt="icon" height={50} width={50} className=" hover:scale-110 ease-in-out transition-smooth"/> </div>
                         
                         </div>
                   </div>

           </div>




















{/* 
      RADDHE RADHE
      <Button>Click me</Button>
    
          <UserButton/> */}
        
    </div>
  );
}
