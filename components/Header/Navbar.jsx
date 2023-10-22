"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isVisible, setIsVisible] = useState(true);  // Navbar is initially visible
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

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

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos]);

   const menu = [
    // { name: "Home", url: "/" },
    {
      name: "Portfolio",
      url: "/",
      dropdown: [
        { name: "Restaurant", url: "" },
        { name: "EJS, MongoDB & Node", url: "" },
        { name: "Passport & Node", url: "" },
        { name: "C++ OOP Structure and Design", url: "" },
        { name: "SQL ERD Schema & Diagram", url: "" },
      ],
    },
    { name: "About", url: "/" },
    { name: "Contact", url: "../contact" },
  ];

  return (
    <nav className="w-full fixed bg-gray-700 shadow-2xl z-10 transition-transform duration-300 ease-in-out"
    style={{
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)'
      }}
    >
      <div className="justify-between md:h-16 px-4 mx-auto lg:max-w-9xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-4 md:py-9 md:block">
            <a href="/" className="">
              <div className="">
                <div className="w-17 rounded">
                  {/* <img src="" /> */}
                  <h1 className="text-lg text-white font-bold">Home</h1>
                </div>
              </div>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <RxCross1 className="text-white" />
                ) : (
                  <AiOutlineMenu className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 gap-[4vw]">
              {menu.map(({ name, url, dropdown }, index) => (
                <li key={index} className="text-white">
                  {dropdown ? (
                    <Dropdown name={name} dropdownItems={dropdown} />
                  ) : (
                    <Link href={url} className="text-sm">{name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
