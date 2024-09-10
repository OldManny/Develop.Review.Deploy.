import React from 'react';
import TitleColor from '/components/HomeComp/Title/TitleColor';

const Title = () => {
    return (
        <div className="flex flex-col items-center justify-center pb-36 md:dark:pb-60 dark:pb-10 md:pb-80 landscape:pt-44 px-2">
            <TitleColor />
            <div className="text-center text-sm md:text-base text-slate-500 dark:text-slate-400 dark:mt-28 md:dark:mt-52 mt-20 md:mt-9">
                <h3 className="font-semibold max-w-3xl">
                    <span className="block italic">As an emerging software engineer, I translate ideas into functional code. My work focuses on building clean and efficient solutions that contribute to impactful digital projects.</span>
                </h3>
            </div>
        </div>
    );
};

export default Title;