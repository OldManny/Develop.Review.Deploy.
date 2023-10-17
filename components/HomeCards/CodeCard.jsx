import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeCard = ({ codeString }) => {
  return (
    <div className="relative md:flex md:flex-col md:items-center">
    <div className="bg-slate-300 border-slate-300 rounded-xl overflow-hidden shadow-2xl text-sm">
      <div className="flex justify-between px-4 text-slate-500 text-xs items-center">
        <p className="text-sm">jsx</p>
      </div>
      <SyntaxHighlighter language="jsx" style={atomOneLight} customStyle={{ padding: "25px" }} wrapLongLines={true}>
        {codeString}
      </SyntaxHighlighter>
    </div>
    </div>
  );
};

export default CodeCard;