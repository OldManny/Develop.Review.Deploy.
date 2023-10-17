"use client";
import React from 'react';
import CodeCard from '@components/HomeCards/CodeCard';
import TextCard from '@components/HomeCards/TextCard';
import data from '@components/HomeCards/dataCard';
import TitleColor from '@components/TitleColor';
import TechIcons from '@/components/TechIcons'; // Import the TechIcons component
import VerticalLine from '@components/VerticalLine';

const Home = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center pt-36 md:pt-56">
            <TitleColor />
            <div className="text-center text-lg text-slate-500 font-light">
                <h3 className="pt-12">
                    <span className="block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</span>
                    <span className="block">tempor incididunt ut labore et dolore magna aliqua.</span>
                </h3>
            </div>
        </div>
        <span className="text-md tracking-widest inset-0 flex items-center justify-center text-slate-500 py-36">USING</span>        
        <TechIcons /> {/* Add the TechIcons component */}
        <VerticalLine />
        {data.map((item, index) => (
            <div key={index} className="p-3 pt-36 md:pt-56 md:px-10">
                <div className="space-y-10 md:grid md:grid-cols-2 md:flex gap-x-32">
                    {/* CardImage */}
                    <CodeCard codeString={item.codeCardData.codeString} />
                    
                    {/* CardText */}
                    <TextCard title={item.textCardData.title} text={item.textCardData.text} />
                </div>
            </div>
        ))}
    </div>
  );
};

export default Home;




























// import React from 'react';
// import CodeCard from '@components/HomeCards/CodeCard';
// import TextCard from '@components/HomeCards/TextCard';
// import data from '@components/HomeCards/dataCard';

// const Home = () => {
//   return (

//       <div>
//         {data.map((section, index) => (
//         <div key={index} className="//min-h-screen main p-3 pt-36 md:pt-32 md:p-10">
//           <div className="space-y-10 md:grid md:grid-cols-2">
//             {index % 2 === 0 ? (
//               // Even sections (0, 2, 4, etc.): Code first, then text
//               <>
//                 <TextCard 
//                 title={section.textCardData.title} 
//                 text={section.textCardData.text} 
//                 className="md:pr-20"
//                 />
//                 <CodeCard codeString={section.codeCardData.codeString} />
                
//               </>
//             ) : (
//               // Odd sections (1, 3, 5, etc.): Text first, then code
//               <>
//                 <CodeCard codeString={section.codeCardData.codeString} />
//                 <TextCard 
//                 title={section.textCardData.title} 
//                 text={section.textCardData.text} 
//                 className="md:pl-32"
//                 />
                
//               </>
//             )}
//           </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default Home;



