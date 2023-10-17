import React from 'react';
import { FaPython, FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiCplusplus, SiCsharp, SiCss3, SiNextdotjs, SiMysql, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { IconContext } from 'react-icons';

const TechIcons = () => {
  return (
    <div className="text-center pb-28">
        <div className="flex flex-wrap justify-center items-center space-x-12 space-y-10 md:space-y-0 pb-8">
            {/* Python */}
            <div className=""> {/*'group relative' - Cut the e as this class causes the navbar artifacts */}
                <FaPython size={50} />
                <p className="text-slate-500">
                    {/* Python */}
                </p>
            </div>
            {/* C++ */}
            <div className="">
                <SiCplusplus size={50} />
                <p className="text-slate-500">
                    {/* C++ */}
                </p>
            </div>
            {/* C# */}
            <div className="">
                <SiCsharp size={50} />
                <p className="text-slate-500">
                    {/* C# */}
                </p>
            </div>
            {/* JavaScript */}
            <div className="">
                <DiJavascript1 size={50} />
                <p className="text-slate-500">
                    {/* JS */}
                </p>
            </div>
            {/* CSS */}
                <div className="">
                <FaCss3Alt size={50} />
                <p className="text-slate-500">
                    {/* CSS */}
                </p>
            </div>
            {/* HTML */}
            <div className="">
                <FaHtml5 size={50} />
                <p className="text-slate-500">
                    {/* HTML */}
                </p>
            </div>
        </div>
      {/* Second line */}
      <div className="flex flex-wrap justify-center items-center space-x-12 space-y-10 md:space-y-0 pt-8">
            {/* Node.js */}
            <div className="">
                <FaNodeJs size={50} />
                <p className="text-slate-500">
                    {/* Node.js */}
                </p>
            </div>
            {/* React */}
            <div className="">
                <FaReact size={50} />
                <p className="text-slate-500">
                    {/* React.js */}
                </p>
            </div>
            {/* Next.js */}
            <div className="">
                <SiNextdotjs size={50} />
                <p className="text-slate-500">
                    {/* Next.js */}
                </p>
            </div>
            {/* SQL */}
            <div className="">
                <SiMysql size={50} />
                <p className="text-slate-500">
                    {/* MySQL */}
                </p>
            </div>
            {/* MongoDB */}
                <div className="">
                <SiMongodb size={50} />
                <p className="text-slate-500">
                    {/* MongoDB */}
                </p>
            </div>
            {/* Bootstrap */}
            <div className="">
                <FaBootstrap size={50} />
                <p className="text-slate-500">
                    {/* Bootstrap */}
                </p>
            </div>
            {/* Tailwind CSS */}
            <div className="">
                <SiTailwindcss size={50} />
                <p className="text-slate-500">
                    {/* Tailwind */}
                </p>
            </div>
        </div>
    </div>
  );
};

export default TechIcons;




