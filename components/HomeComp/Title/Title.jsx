import React from 'react';
import TitleColor from '@components/HomeComp/Title/TitleColor';

const Title = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-36 md:pt-56">
            <TitleColor />
            <div className="text-center text-base md:text-lg text-slate-500 font-light">
                <h3 className="pt-12 max-w-3xl">
                    <span className="block">With each function I define, I tell a story. My scripts are narratives, rich with characters, challenges, and triumphs. As a developer, I'm not just an architect; I'm a storyteller, chronicling the digital age one line at a time.</span>
                </h3>
            </div>
            <span className="text-md tracking-widest inset-0 flex items-center justify-center text-slate-500 py-36">HARNESSING</span>
        </div>
    );
};

export default Title;
