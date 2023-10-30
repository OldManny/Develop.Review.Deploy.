import React from 'react';
import Image from 'next/image';
import Profile from "/public/Profile.jpg";
import { FaGithub, FaLinkedin, FaRegEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const IntroCard = ({ className }) => {
    return (
        <div className={`w-full flex-grow bg-transparent p-4 lg:p-8 rounded-3xl shadow-md mt-8 lg:mt-0 transition-all duration-300 shadow-xl ${className}`}>

            {/*Image Section*/}
            <div className="flex items-center justify-center relative w-44 h-44 mx-auto overflow-hidden rounded-full transition-transform duration-500 transform -mt-28 md:-mt-36">
                <Image 
                    src={Profile}
                    alt="Profile"
                    fill
                    style={{objectFit:"cover"}}                />
            </div>

            {/* Name Section + Job Title */}
            <div className="mb-6 mt-10">

                {/* Name Section */}
                <div className="flex justify-center space-x-2">
                    <h1 className="text-2xl font-semibold text-slate-500 mb-2 text-center">Emanuel</h1>
                    <h1 className="text-2xl font-bold text-slate-500 text-center">Florea</h1>
                </div>
            
                {/* Job Title */}
                <div className="text-center my-4">
                    <h2 className="inline-block bg-slate-100 dark:bg-gray-500 dark:text-slate-300 text-sm py-2 px-4 rounded-3xl text-slate-500 shadow-md ">Software Engineer</h2>
                </div>
            </div>

            {/* Address with icon */}
            <div className="text-center my-10 flex justify-center items-center space-x-2">
                <FaMapMarkerAlt className="text-xl text-slate-500" />
                <p className="text-md text-slate-500 dark:text-slate-400">Berkshire, UK</p>
            </div>

            {/* GitHub, LinkedIn, and Contact icons */}
            <div className="text-center my-4">
                <a href="https://github.com/your-github-username" className="mx-4" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-xl text-slate-500 inline-block" />
                </a>
                <a href="https://linkedin.com/in/your-linkedin-username" className="mx-4" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-xl text-slate-500 inline-block" />
                </a>
                <a href="/contact" className="mx-4">
                    <FaRegEnvelope className="text-xl text-slate-500 inline-block" />
                </a>
            </div>
        </div>
    );
};

export default IntroCard;