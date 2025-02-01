import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8 ">
        <div className="">
          <h2 className="text-white text-lg mb-4 font-semibold">About Us</h2>
          <p className="text-base mb-4">   Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.</p>
        </div>
        <div className="">
          <h2 className="text-white text-lg mb-4 font-semibold">Quick Links</h2>
         <ul>
            <li><a href="" className="hover:text-white transition-colors duration-300"></a></li>
            <li> <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a></li>
            <li> <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a></li>
            <li> <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a></li>
              <li> <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a></li>
         </ul>
        </div>
        <div >
          <h2 className="text-white text-lg mb-4 font-semibold">Follow Us</h2>
          <div className="flex space-x-4">

          <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
           
        
        </div>
        <div className="">
        <h2 className="text-white text-lg mb-4 font-semibold">Contact Us</h2>
          <p>Karachi, Pakistan</p>
          <p>DHA 1001</p>
          <p>Email: music@gmail.com</p>
          <p></p>
          <p></p>
        </div>
      </div>
      <p className="text-center text-lg pt-8">Created by Muhammad Hassan Akram</p>
      <p className="text-center text-xs pt-3">© 2024 Music School. All rights reserved.</p>
    </div>
  );
};

export default Footer;
