import React from 'react';
import Link from 'next/link';

const Button = ({ label, href, className, icon: Icon }) => {
  return (
    <div className="w-1/2 flex justify-center mt-32">
        <Link href={href} passHref>
            <button className={`flex items-center space-x-2 ${className}`}>
                {Icon && <Icon className="w-6 h-6" />}
                <span>{label}</span>
            </button>
        </Link>
    </div>
  );
};

export default Button;




