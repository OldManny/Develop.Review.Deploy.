import React, { useEffect, useState } from 'react';

const customColors = ['text-sky-700', 'text-teal-700', 'text-purple-700'];
const defaultColor = 'text-slate-700';
const words = ['Develop.', ' Review.', ' Deploy.'];

const TitleColor = () => {
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentColorIndex((prevIndex) => (prevIndex === customColors.length - 1 ? 0 : prevIndex + 1));
        setCurrentWordIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
        }, 2000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const wordElements = words.map((word, index) => (
        <span key={index} className={`${index === currentWordIndex ? customColors[currentColorIndex] : defaultColor} text-6xl md:text-7xl font-extrabold transition-colors duration 700 ease-in-out`}>
            {word}
        </span>
    ));

    return <h1>{wordElements}</h1>;
};

export default TitleColor;

