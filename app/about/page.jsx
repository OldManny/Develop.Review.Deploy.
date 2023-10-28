"use client";
import React from 'react';
import IntroCard from '@/components/About/IntroCard';
import MainCard from '@/components/About/MainCard';
import BackToTop from '@components/BackToTop';

const About = () => {
  return (
    <div className="flex items-start justify-center min-h-screen pt-48 md:pt-64 px-6 lg:px-28">
        <div className="flex flex-col items-center w-full">
            
            {/* Intro Card */}
            <IntroCard className="" />
            
            {/* Space between cards */}
            <div className="md:h-5"></div>

            {/* Main Card */}
            <MainCard className="" />

            {/* Back To Top */}
            <BackToTop />

            
        </div>
    </div>
  );
};

export default About;