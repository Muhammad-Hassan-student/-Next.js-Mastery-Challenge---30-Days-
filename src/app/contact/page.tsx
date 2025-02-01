
import React from "react";
import { Meteors } from "@/app/components/ui/meteors";


const page = () => {
  return (
    <div className="">
    <div className=" relative ">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
      <div className="  min-h-screen  relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
      
       
      <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
        <h1>aa</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

        {/* Meaty part - Meteor effect */}
        <Meteors number={65} />
      </div>
    </div>
  </div>
  )
}

export default page

