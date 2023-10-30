import React from 'react';
import TitleColor from '/components/HomeComp/Title/TitleColor';

const Title = () => {
    return (
        <div className="flex flex-col items-center justify-center pb-36 md:dark:pb-60 dark:pb-10 md:pb-80 landscape:pt-44 px-2">
            <TitleColor />
            <div className="text-center text-sm md:text-base text-slate-500 dark:text-slate-400 dark:mt-28 md:dark:mt-52 mt-20 md:mt-9">
                <h3 className="font-semibold max-w-3xl">
                    <span className="block italic">With each function I define, I tell a story and as a developer, I'm not just an architect; I'm a storyteller, chronicling the digital age one line at a time.</span>
                </h3>
            </div>
        </div>
    );
};

export default Title;