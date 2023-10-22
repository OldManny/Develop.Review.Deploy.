import React from 'react';

const TextCard = ({ title, text, icon: IconComponent, className }) => {
  return (
    <div className={`max-w-lg mx-auto md:flex md:flex-col md:justify-center ${className}`}>
        <div className="pb-2">
            {IconComponent && <IconComponent size={36} color="#a855f7" />}        
        </div>
        <h2 className="text-slate-600 text-base md:text-lg  font-semibold mb-5">{title}</h2>
        <p className="text-slate-500 text-sm md:text-base">{text}</p>
    </div>
  );
};

export default TextCard;