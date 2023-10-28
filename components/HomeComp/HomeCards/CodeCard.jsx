import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
// Import the styles for SyntaxHighlighter
import SyntaxHighlighter from 'react-syntax-highlighter';
import {  atomOneLight, atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const CustomSyntaxHighlighter = ({ codeString, languageLabel, language}) => {
  const { theme } = useTheme();
  const [currentStyle, setCurrentStyle] = useState(atomOneLight);

  useEffect(() => {
    // Switch styles based on the theme
    if (theme === 'dark') {
      setCurrentStyle(atomOneDark);
    } else {
      setCurrentStyle(atomOneLight);
    }
  }, [theme]);

  return (
    <div className="relative md:flex md:flex-col md:items-center">
        <div className="bg-slate-300 dark:bg-slate-500 border-slate-300  rounded-xl overflow-hidden shadow-2xl text-sm">
            <div className="flex justify-between px-4 text-slate-500 dark:text-slate-200 text-xs items-center">
                <p className="text-sm">{languageLabel}</p>
            </div>
            <div className="dark:bg-gray-900">
            <SyntaxHighlighter language={language} style={currentStyle} customStyle={{ padding: "25px" }} wrapLongLines={true}>
                {codeString}
            </SyntaxHighlighter>
            </div>
        </div>
    </div>
);
};

export default CustomSyntaxHighlighter;
