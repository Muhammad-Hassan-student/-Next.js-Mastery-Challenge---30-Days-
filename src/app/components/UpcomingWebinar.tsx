"use client"
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect"

const UpcomingWebinar = () => {
    const featuredWebinars = [
        {
          title: 'Understanding Music Theory',
          description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
          slug: 'understanding-music-theory',
          isFeatured: true,
        },
        {
          title: 'The Art of Songwriting',
          description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
          slug: 'the-art-of-songwriting',
          isFeatured: true,
        },
        {
          title: 'Mastering Your Instrument',
          description:
            'Advanced techniques to master your musical instrument of choice.',
          slug: 'mastering-your-instrument',
          isFeatured: true,
        },
        {
          title: 'Music Production Essentials',
          description:
            'Get started with music production with this comprehensive overview.',
          slug: 'music-production-essentials',
          isFeatured: true,
        },
        // Added two more webinars
        {
          title: 'Live Performance Techniques',
          description:
            'Enhance your live performance skills with expert tips and strategies.',
          slug: 'live-performance-techniques',
          isFeatured: true,
        },
        {
          title: 'Digital Music Marketing',
          description:
            'Learn how to promote your music effectively in the digital age.',
          slug: 'digital-music-marketing',
          isFeatured: true,
        },
      ];
  return (
    <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center ">
          <h2 className="text-base text-teal-500 font-semibold tracking-wide">Featured Courses</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold text-white tracking-tight sm:text-4xl ">Learn with the best</p>
        </div>
            </div>
            <div className="mt-10">
                <HoverEffect items={featuredWebinars.map((webinar) => ({
                     
                        title: webinar.title,
                        description: webinar.description,
                        link: `/upcoming-webinar/${webinar.slug}`,
                    
                }) )}/>
            </div>
            <div className="mt-20 text-center">
        <Link href={'/upcoming-webinar'} className="px-6 py-3 text-white  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full">View all courses</Link>
      </div>
    </div>
  )
}

export default UpcomingWebinar