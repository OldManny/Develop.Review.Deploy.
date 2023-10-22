"use client"
import React, { useState, useEffect } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };    

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer 
      className="w-full fixed bottom-0 bg-gray-700 z-10 py-4 transition-transform duration-300 ease-in-out"
      style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)'
      }}
    >
      <div className="flex justify-between px-4 mx-auto lg:max-w-9xl">
        
        {/* Left Side: Text "Follow me:" */}
        <div className="text-white text-base">
        </div>
  
        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-4">
        <div className="mr-5 text-white text-base">
          Follow Me On
        </div>
          <a href="https://www.linkedin.com/your-profile-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <AiFillLinkedin className="text-white hover:text-gray-400 transition duration-300" size={27} />
          </a>
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <AiFillGithub className="text-white hover:text-gray-300 transition duration-300" size={27} />
          </a>
        </div>
      </div>
    </footer>
  );
  
};

export default Footer;
