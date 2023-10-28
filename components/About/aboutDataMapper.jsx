import React from 'react';

export const mapAboutMeData = (data) => {
    return data.map((intro, index) => (
        <div key={index} className="mt-5 dark:text-slate-400 text-slate-500">
            <p className="">{intro.about}</p>
            <h3 className="mt-7 font-semibold">{intro.include}</h3>
        </div>
    ));
};


export const mapTechData = (data) => {
    return data.map(item => (
        <span key={item} className="bg-gray-200 dark:bg-gray-500 text-sm text-slate-500 dark:text-slate-300 p-2 rounded-full">{item}</span>
    ));
};

export const mapHobbiesData = (data) => {
    return data.map(item => (
        <span key={item} className="bg-gray-200 dark:bg-gray-500 dark:text-slate-300 text-sm text-slate-500 p-2 rounded-full">{item}</span>
    ));
};

export const mapWorkExperienceData = (data) => {
    return data.map((job, index) => (
        <div key={index} className="dark:text-slate-400 text-slate-500 text-base">
            <h2 className="mt-10 text-purple-600 font-semibold">{job.title}</h2>
            <h3 className="mt-2 font-semibold">{job.subtitle}</h3>
            <p className="mt-1 mb-3 font-light">{job.years}</p>
            {job.description.map((desc, descIndex) => (
                <p key={descIndex} className="mt-2">{desc}</p>
            ))}
        </div>
    ));
};


export const mapEducationData = (data) => {
    return data.map((degree, index) => (
        <div key={index} className=" dark:text-slate-400 text-slate-500">
            <h2 className="mt-10 font-semibold">{degree.title}</h2>
            <h3 className="mt-2 font-semibold text-purple-600">{degree.subtitle}</h3>
            <p className="mt-1 font-light">{degree.years}</p>
            <p className="mt-2">{degree.description}</p>
            <h3 className="font-semibold">{degree.relevant}</h3>
            <p className="mt-1">{degree.courses}</p>
        </div>
    ));
};

export const mapTransferableSkills = (data) => {
    return data.map((item, index) => (
        <div key={index} className="dark:text-slate-400 text-slate-500 mb-4">
            <h2 className="mt-10 font-semibold">{item.transferable}</h2>
            <ul>
                {item.skills.map((skill, skillIndex) => {
                    const [boldPart, ...rest] = skill.split(":");
                    return (
                        <li key={skillIndex} className="mt-2">
                            <strong>{boldPart}:</strong>{rest.join(":")}
                        </li>
                    );
                })}
            </ul>
        </div>
    ));
};
