"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import MobileToggle from "./MobileToggle";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [isVisible, setIsVisible] = useState(true);  // Navbar is initially visible
    const [lastScrollPos, setLastScrollPos] = useState(0);
  
    useEffect(() => {
        const handleScroll = () => {
        const currentScrollPos = window.scrollY;
  
        // Handle the scenario for the top of the page
        if (currentScrollPos <= 5) {
            setIsVisible(true);
            return;
        }
  
        if (currentScrollPos > lastScrollPos) {
            // Scrolling down
            setIsVisible(false);
        } else {
          // Scrolling up
            setIsVisible(true);
        }
  
        // Update the last scroll position
        setLastScrollPos(currentScrollPos);
        };
  
        // For closing navbar when clicked outside
        const handleClickOutside = (event) => {
            if (navbar && !event.target.closest("nav")) {
                setNavbar(false);
            }
        };
        
        // Attach the event listeners
        window.addEventListener("scroll", handleScroll);
        document.addEventListener("click", handleClickOutside);
        
        // Cleanup the event listeners on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", handleClickOutside);
        };
    }, [lastScrollPos, navbar]);  // Add navbar as a dependency
  
    const menu = [
      // { name: "Home", url: "/" },
    {
        name: "Portfolio",
        url: "/",
        dropdown: [
            { name: "Algo Project", url: "" },
            { name: "Passport & Node", url: "" },
            { name: "...", url: "/contact" },
        ],
      },
      { name: "About", url: "/" },
      { name: "Contact", url: "../contact" },
    ];

    return (
        <nav className="w-full fixed bg-gray-700 shadow-2xl z-10 transition-transform duration-300 ease-in-out" style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
            <div className="justify-between md:h-16 px-4 mx-auto lg:max-w-9xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-4 md:py-9 md:block">
                        <Logo />
                        <MobileToggle navbar={navbar} setNavbar={setNavbar} />
                    </div>
                </div>
                <NavMenu menu={menu} navbar={navbar} />
            </div>
        </nav>
    );
}

export default Navbar;
