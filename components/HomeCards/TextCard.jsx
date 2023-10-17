import React from 'react';

const TextCard = ({ title, text, className }) => {
  return (
    <div className={`md:flex md:flex-col md:justify-center ${className}`}>
      <h2 className="text-slate-700 text-base md:text-lg  font-semibold mb-5">{title}</h2>
      <p className="text-slate-500 text-sm md:text-base">{text}</p>
    </div>
  );
};

export default TextCard;