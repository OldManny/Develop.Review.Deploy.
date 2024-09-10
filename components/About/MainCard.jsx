import React from 'react';
import { aboutMe, tech, education, transferableSkills, hobbies } from './aboutData';
import { mapAboutMeData, mapTechData, mapEducationData, mapTransferableSkills, mapHobbiesData } from './aboutDataMapper';
import SectionHeader from './SectionHeader';
import { BsPerson } from "react-icons/bs";  
import { LiaGraduationCapSolid } from "react-icons/lia";
import { BiTransfer } from "react-icons/bi";
import { GiCircleForest } from "react-icons/gi";

const MainCard = ({ className }) => {
    return (
        <div className={`w-full flex-grow bg-white dark:bg-gray-900 p-4 lg:p-8 mt-5 lg:mt-0 mb-40 rounded-3xl transition-all duration-300 shadow-xl  ${className}`}>
            
            {/* About Me */}
            <SectionHeader title="About Me" icon={<BsPerson size={39} color="" />} />
            
            {/* Name Section + Job Title */}
            <div className="my-7">

                {/* Introduction */}
                <div className="">
                    {mapAboutMeData(aboutMe)}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap text-center mt-10 gap-2">
                    {mapTechData(tech)}
                </div>


                {/* Education */}
                <SectionHeader className="mt-16" title="Education" icon={<LiaGraduationCapSolid size={39} />} />

                {/* Education */}
                <div>
                    {mapEducationData(education)}
                </div>

                {/* Experience */}
                <SectionHeader className="mt-16" title="Transferable Skills" icon={<BiTransfer size={39} />} />

                {/* Skills */}
                <div className=" mt-15 gap-2">
                    {mapTransferableSkills(transferableSkills)}
                </div>

                {/* Experience */}
                <SectionHeader className="mt-16" title="Hobbies" icon={<GiCircleForest size={39} />} />

                {/* Tech */}
                <div className="flex flex-wrap text-center mt-10 gap-2">
                    {mapHobbiesData(hobbies)}
                </div>

            </div>
        </div>
    );
};

export default MainCard;