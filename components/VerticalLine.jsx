import React from 'react'

const VerticalLine = () => {
    return (
        <div className="flex-container">
            <div className="line"></div>
            <div className="group is-activ">
                <div className="rounded-ball">
                    <div className="pl-14 pt-1 font-semibold text-slate-500 text-xl md:text-xl">
                        Web Development
                    </div>
                </div>
            </div>
        </div>

    //   <div className="flex justify-center items-center">
    //     <div className="space-y-20 before:absolute before:ml-5 before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent py-20">
    //     </div>
      
    //     <div className="group is-active relative"> {/* Added "relative" class */}
    //       <div className="w-10 h-10 rounded-full group-[.is-active]:bg-cyan-500 shadow-sm absolute bottom-0"> {/* Added "absolute" and "bottom-0" classes */}
    //       </div>
    //     </div> 
    //   </div>
    );
  };
  

export default VerticalLine;
