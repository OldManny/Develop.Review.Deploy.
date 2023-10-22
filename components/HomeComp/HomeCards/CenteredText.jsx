import React from 'react';

const CenteredText = ({ children, as: Tag, className }) => {
  return <Tag className={`max-w-3xl mx-auto text-center px-2 ${className}`}>{children}</Tag>;
};

export default CenteredText;
