
"use client";
import Link from "next/link";
import coursedata from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient";

interface Course{
  id: number,
  title: String,
  slug: String,
  description: String,
  price: number,
  instructor: String,
  isFeatured: boolean,
  image: String,

}


const FeaturedCourses = () => {
  
  const fetchCourseData = coursedata.courses.filter((course:Course) => course.isFeatured);
  
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center ">
          <h2 className="text-base text-teal-500 font-semibold tracking-wide">Featured Courses</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-white tracking-tight sm:text-4xl ">Learn with the best</p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
         {fetchCourseData.map((course) => (
           <div key={course.id}>
            <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
            <img src={course.image}  height="400"
          width="400"
          className="object-cover"/>
          <div className="px-4 py-2">
          
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {course.title}
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
         {course.description}
        </p>
          </div>
       <Link href={`/course/${course.slug}`} className=" text-sm py-3 text-center text-teal-400 cursor-pointer">Learn More</Link>
            </BackgroundGradient>
           </div>
           ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href={'/courses'} className="px-6 py-3 text-white  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full">View all courses</Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
