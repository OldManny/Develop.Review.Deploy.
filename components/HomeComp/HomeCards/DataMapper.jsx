// DataMapper.js
import React from 'react';
import {Line, CenteredText } from '@components/HomeComp';
import CodeCard from '@components/HomeComp/HomeCards/CodeCard';
import TextCard from '@components/HomeComp/HomeCards/TextCard';

const DataMapper = ({ data }) => {
    return (
        <>
            {data.map((item) => (
                <div key={item.index} className="intro-container">
                    {/* Conditional Title Text */}
                    {item.title && (
                        <div className="pt-40">
                            <CenteredText as="h3" className="text-xl font-semibold text-purple-600">{item.title}</CenteredText>
                        </div>
                    )}

                    {/* Centered Intro Text */}
                    <div className={item.title ? "pt-6 md:pb-12" : "pt-32 md:pb-12"}>
                        {item.introText.map((line, lineIndex) => (
                            <CenteredText as="h2" className="md:text-base text-slate-500 dark:text-slate-400" key={lineIndex}>{line}</CenteredText>
                        ))}
                    </div>

                    {/* Vertical Line */}
                    <Line />

                    {/* Card Content */}
                    <div className="p-3 pt-26 md:pt-20 md:px-10">
                        <div className="space-y-10 md:grid md:grid-cols-2 md:flex gap-x-32">
                            {/* CardImage */}
                            <CodeCard 
                                codeString={item.codeCardData.codeString} 
                                language={item.codeCardData.language}
                                languageLabel={item.codeCardData.languageLabel}
                            />
                        
                            {/* CardText */}
                            <TextCard 
                                icon={item.textCardData.icon}
                                title={item.textCardData.title} 
                                text={item.textCardData.text} 
                            />
                        </div>
                    </div>     
                </div>   
            ))}
        </>
    );
};

export default DataMapper;
