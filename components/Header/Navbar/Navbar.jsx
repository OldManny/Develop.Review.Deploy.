"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import MobileToggle from "./MobileToggle";
import ThemeSwitcher from "/components/ThemeSwitcher";


const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [isVisible, setIsVisible] = useState(true);  // Navbar is initially visible
    const [lastScrollPos, setLastScrollPos] = useState(0);
  
    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if (currentScrollPos <= 5) {
            setIsVisible(true);
            return;
        }
        else if (currentScrollPos > lastScrollPos) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        setLastScrollPos(currentScrollPos);
    };
    
    const handleClickOutside = (event) => {
        if (navbar && !event.target.closest("nav")) {
            setNavbar(false);
        }
    };

    useEffect(() => {
        // Attach the event listeners
        window.addEventListener("scroll", handleScroll);
        document.addEventListener("click", handleClickOutside);
        
        // Cleanup the event listeners on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("click", handleClickOutside);
        };
    }, [lastScrollPos, navbar]);
    
    
  
    const menu = [
      // { name: "Home", url: "/" },
    {
        name: "Portfolio",
        url: "/",
        dropdown: [
            { name: "Snaze", url: "https://snaze.vercel.app/" },
        ],
      },
      { name: "About", url: "./about" },
      { name: "Contact", url: "./contact" },
    ];
    

    return (
        <nav className="w-full fixed bg-gray-700 shadow-2xl z-10 transition-transform duration-300 ease-in-out" style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}>
            <div className="px-4 mx-auto lg:max-w-9xl md:items-center md:flex md:px-8">
                <div className="flex items-center justify-between w-full py-4 md:py-5">
                    {/* Logo */}
                    <div>
                        <Logo />
                    </div>
    
                    {/* ThemeSwitcher and MobileToggle */}
                    <div className="flex items-center">
                        <div className="mr-8 md:mr-14 mt-2">
                            <ThemeSwitcher />
                        </div>
                        <MobileToggle navbar={navbar} setNavbar={setNavbar} />
                    </div>
                </div>
    
                {/* NavMenu */}
                <NavMenu menu={menu} navbar={navbar} />
            </div>
        </nav>
    );
    
}

export default Navbar;
