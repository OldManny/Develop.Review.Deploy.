import React from 'react';
import { FaPython, FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiCplusplus, SiCsharp, SiNextdotjs, SiMysql, SiMongodb, SiTailwindcss } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

const TechIcons = () => {
    return (
        <div className="max-w-xl mx-auto pb-28">
            <div className="flex flex-wrap justify-center items-center space-x-5 md:space-x-7 space-y-2 pb-8">
                
                {/* Python */}
                <div className="pb-4"> {/*'group relative' - Cut the e as this class causes the navbar artifacts */}
                    <FaPython size={50} />
                    <p className="text-slate-500">
                        {/* Python */}
                    </p>
                </div>
                
                {/* C++ */}
                <div className="pb-4">
                    <SiCplusplus size={50} />
                    <p className="text-slate-500">
                        {/* C++ */}
                    </p>
                </div>
                
                {/* C# */}
                <div className="pb-4">
                    <SiCsharp size={50} />
                    <p className="text-slate-500">
                        {/* C# */}
                    </p>
                </div>
                {/* JavaScript */}
                <div className="pb-4">
                    <DiJavascript1 size={50} />
                    <p className="text-slate-500">
                        {/* JS */}
                    </p>
                </div>
                
                {/* CSS */}
                    <div className="pb-4">
                    <FaCss3Alt size={50} />
                    <p className="text-slate-500">
                        {/* CSS */}
                    </p>
                </div>
                
                {/* HTML */}
                <div className="pb-4">
                    <FaHtml5 size={50} />
                    <p className="text-slate-500">
                        {/* HTML */}
                    </p>
                </div>

                {/* Node.js */}
                <div className="pb-4">
                    <FaNodeJs size={50} />
                    <p className="text-slate-500">
                        {/* Node.js */}
                    </p>
                </div>
                
                {/* React */}
                <div className="pb-4">
                    <FaReact size={50} />
                    <p className="text-slate-500">
                        {/* React.js */}
                    </p>
                </div>
                
                {/* Next.js */}
                <div className="pb-4">
                    <SiNextdotjs size={50} />
                    <p className="text-slate-500">
                        {/* Next.js */}
                    </p>
                </div>
                
                {/* SQL */}
                <div className="pb-4">
                    <SiMysql size={50} />
                    <p className="text-slate-500">
                        {/* MySQL */}
                    </p>
                
                </div>
                {/* MongoDB */}
                    <div className="pb-4">
                    <SiMongodb size={50} />
                    <p className="text-slate-500">
                        {/* MongoDB */}
                    </p>
                </div>
                
                {/* Bootstrap */}
                <div className="pb-4">
                    <FaBootstrap size={50} />
                    <p className="text-slate-500">
                        {/* Bootstrap */}
                    </p>
                </div>
                
                {/* Tailwind CSS */}
                <div className="pb-4">
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




