"use client";
import React, { useState, useEffect } from "react";
import SocialIcons from "./SocialIcons";
import FollowText from "./FollowText";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const isPageScrollable = () => {
        return document.documentElement.scrollHeight > window.innerHeight;
    };

    const handleScroll = () => {
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        // Check if the page is scrollable when the component mounts or route changes
        if (!isPageScrollable()) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

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
            <div className="flex justify-end items-center px-4 mx-auto lg:max-w-9xl">
                
                {/* Text and Social Media Icons */}
                <FollowText />
                <SocialIcons />
            </div>
        </footer>
    );
};

export default Footer;






