import React from 'react';

const SectionHeader = ({ title, icon = null, iconMargin = 'mr-3', className }) => {
    return (
        <div className="relative">
            <h1 className={`text-2xl text-slate-500 font-bold flex items-center, ${ className}`}>
                {icon && (
                    <span className={`${iconMargin} text-slate-500`}>
                        {React.cloneElement(icon, { className: 'fill-current' })}
                    </span>
                )}
                {title}
            </h1>
            <div className="mt-5 ml-1 left-0 bottom-0 w-12 h-1 rounded-xl bg-purple-500"></div>
        </div>
    );
};

export default SectionHeader;


