import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";  // You can use a different icon if you prefer

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        isVisible && (
            <button 
                onClick={scrollToTop} 
                className="fixed bottom-16 right-5 w-14 h-14 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600 transition duration-300 ease-in-out z-50"
                aria-label="Back to Top"
            >
                <FaArrowUp className="m-auto" />
            </button>
        )
    );
};

export default BackToTopButton;
