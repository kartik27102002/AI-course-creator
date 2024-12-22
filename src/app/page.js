"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaSignInAlt, FaVideo, FaArrowRight, FaStar } from "react-icons/fa";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();

  return (
    <div>
      {/* Header */}
      <div className="p-5 flex flex-col md:flex-row justify-between items-center border rounded-b-lg shadow-lg">
        <Image src="/logo.png" alt="icon" height={100} width={100} />
        <Link href={"/dashboard"}>
          <Button className="bg-red-600 text-white font-bold text-lg shadow-md flex items-center gap-2">
            Dashboard <FaSignInAlt />
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="mt-5 p-5 md:p-20 flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl md:text-6xl font-bold">
            AI Powered <span className="text-red-600">Exam Prep</span>
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold mt-[-10px]">Material Generator</h1>
        </div>
        <p className="font-semibold text-gray-500 text-base md:text-xl mt-5">
          Your AI Exam Prep Companion: Effortless Study Material at Your Fingertips.
        </p>
        <div className="mt-10 flex flex-col md:flex-row items-center gap-5">
          <div>
            <SignedOut>
              <Button className="p-3 md:p-5 font-bold text-white flex items-center gap-2">
                <SignInButton /> <FaArrowRight />
              </Button>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button className="p-3 md:p-5 font-bold text-white bg-gradient-to-r from-rose-500 via-pink-500 to-red-500 shadow-xl rounded-full flex items-center gap-2">
                  {user?.fullName} Signed Up <FaArrowRight />
                </Button>
              </Link>
            </SignedIn>
          </div>
          <div className="border p-3 md:p-5 flex gap-4 items-center rounded-full shadow-xl">
            <FaVideo /> Watch Video
          </div>
        </div>
      </div>

      {/* eSkilled Section */}
      <section className="mt-10 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 py-10 flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left mx-auto max-w-screen-xl px-4 py-8">
          <h1 className="text-3xl md:text-5xl text-white font-bold">eSkilled AI Course</h1>
          <h1 className="text-3xl md:text-5xl text-white font-bold">Creator - Your Powerful</h1>
          <h1 className="text-3xl md:text-5xl text-white font-bold">Online Course Maker</h1>
          <p className="text-lg md:text-2xl text-white font-medium mt-4">
            Build High-Quality Courses 100x Faster!
          </p>
          <Button className="bg-blue-400 text-white p-5 md:p-8 font-bold text-xl md:text-3xl mt-5">Try it for FREE</Button>
          <div className="mt-5 text-white font-semibold text-sm md:text-xl">
            <ul className="list-disc ml-5">
              <li>☹️ Do your courses take weeks or months to build?</li>
              <li>☹️ Want to cut course development costs?</li>
              <li>☹️ Don’t have the resources for custom course development?</li>
            </ul>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:mr-20">
          <Image src="/kuty.png" height={300} width={400} alt="icon" />
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="p-10 md:p-20 flex flex-col md:flex-row items-center justify-between bg-blue-100 rounded-xl mx-5 md:mx-[450px]">
        <h1 className="font-bold text-xl md:text-3xl">Our Customers Say</h1>
        <div className="bg-white p-5 text-center">
          <div className="flex justify-center items-center gap-3 text-xl md:text-3xl text-yellow-400">
            <span>5.0</span>
            <div className="flex">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
          </div>
          <p className="text-gray-500 text-sm md:text-base flex items-center gap-1 mt-2">
            Based on 13 reviews POWERED BY
            <Image src="/search.png" height={20} width={20} alt="icon" />
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col items-center p-10 md:p-40">
        <h1 className="font-bold text-2xl md:text-5xl text-center">
          AI Course Creation Platform Advantages
        </h1>
        <p className="text-gray-500 text-sm md:text-lg text-center mt-4">
          Our AI for course creation is loaded with potent features that make it a breeze to create immersive and interactive courses. Explore the benefits of using eSkilled AI Course Creator for your course development needs.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="flex justify-center items-center mx-5 md:mx-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="p-5 bg-gradient-to-bl from-blue-100 via-blue-200 to-blue-400 rounded-xl shadow-xl hover:scale-105 ease-in-out transition-transform">
            <Image
              src="/fast-launch.png"
              alt="Fast Launch"
              height={100}
              width={100}
              className="p-5 bg-gradient-to-r from-orange-200 via-red-400 to-pink-600 rounded-full shadow-2xl"
            />
            <h1 className="font-bold text-xl md:text-2xl mt-2">Fast Course Launch</h1>
            <p className="text-sm md:text-lg mt-2">
              Quickly create and launch professional-quality courses without delays.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 bg-gradient-to-bl from-blue-100 via-blue-200 to-blue-400 rounded-xl shadow-xl hover:scale-105 ease-in-out transition-transform">
            <Image
              src="/items.png"
              alt="Comprehensive Resources"
              height={100}
              width={100}
              className="p-5 bg-gradient-to-r from-orange-200 via-red-400 to-pink-600 rounded-full shadow-2xl"
            />
            <h1 className="font-bold text-xl md:text-2xl mt-2">Comprehensive Resources</h1>
            <p className="text-sm md:text-lg mt-2">
              Access a rich library of materials to enhance your course content.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 bg-gradient-to-bl from-blue-100 via-blue-200 to-blue-400 rounded-xl shadow-xl hover:scale-105 ease-in-out transition-transform">
            <Image
              src="/smartphone (1).png"
              alt="Mobile Optimization"
              height={100}
              width={100}
              className="p-5 bg-gradient-to-r from-orange-200 via-red-400 to-pink-600 rounded-full shadow-2xl"
            />
            <h1 className="font-bold text-xl md:text-2xl mt-2">Mobile-Friendly</h1>
            <p className="text-sm md:text-lg mt-2">
              Ensure seamless access for learners on any device.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-5 bg-gradient-to-bl from-blue-100 via-blue-200 to-blue-400 rounded-xl shadow-xl hover:scale-105 ease-in-out transition-transform">
            <Image
              src="/cost.png"
              alt="Cost Efficiency"
              height={100}
              width={100}
              className="p-5 bg-gradient-to-r from-orange-200 via-red-400 to-pink-600 rounded-full shadow-2xl"
            />
            <h1 className="font-bold text-xl md:text-2xl mt-2">Cost Efficiency</h1>
            <p className="text-sm md:text-lg mt-2">
              Reduce expenses with AI-driven course development solutions.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-5 bg-gradient-to-bl from-blue-100 via-blue-200 to-blue-400 rounded-xl shadow-xl hover:scale-105 ease-in-out transition-transform">
            <Image
              src="/law.png"
              alt="Compliance Support"
              height={100}
              width={100}
              className="p-5 bg-gradient-to-r from-orange-200 via-red-400 to-pink-600 rounded-full shadow-2xl"
            />
            <h1 className="font-bold text-xl md:text-2xl mt-2">Compliance Support</h1>
            <p className="text-sm md:text-lg mt-2">
              Stay aligned with industry standards and regulations effortlessly.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-5 bg-gradient-to-bl from-blue-100 via-blue-200 to-blue-400 rounded-xl shadow-xl hover:scale-105 ease-in-out transition-transform">
            <Image
              src="/engagement.png"
              alt="Enhanced Engagement"
              height={100}
              width={100}
              className="p-5 bg-gradient-to-r from-orange-200 via-red-400 to-pink-600 rounded-full shadow-2xl"
            />
            <h1 className="font-bold text-xl md:text-2xl mt-2">Enhanced Engagement</h1>
            <p className="text-sm md:text-lg mt-2">
              Boost learner participation with interactive course features.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 p-10 grid grid-cols-1 md:grid-cols-2 bg-gray-200 items-center">
        <div className="flex justify-center md:justify-start">
          <Image src="/logo.png" alt="icon" height={100} width={100} />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start mt-5 md:mt-0">
          <h1 className="font-bold text-base md:text-xl">
            Copyright © 2022. All rights reserved.
          </h1>
          <div className="flex gap-5 mt-5">
            {["instagram.png", "linkedin.png", "social.png", "facebook.png"].map((icon, idx) => (
              <Image
                key={idx}
                src={`/${icon}`}
                alt="icon"
                height={50}
                width={50}
                className="hover:scale-110 ease-in-out transition-transform"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
