import React from 'react'

const LineBubble = ({ roundedBallClass, lineClass, title }) => { // Accepting new props: lineClass and title
    return (
        <div className="flex-container">
            <div className={lineClass}></div> {/* className controlled by lineClass prop */}
                <div className={roundedBallClass}> {/* className controlled by roundedBallClass prop */}
                    <div className="pl-14 pt-1 font-semibold text-slate-500 text-xl">
                        {title} {/* Displaying the text passed through the title prop */}
                    </div>
                </div>
        </div>
    );
};

export default LineBubble;


