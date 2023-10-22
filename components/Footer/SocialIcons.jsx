import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const SocialIcons = () => (
    <div className="flex space-x-4">
        <a 
            href="https://www.linkedin.com/your-profile-link" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
        >
            <AiFillLinkedin className="text-white hover:text-gray-400 transition duration-300" size={27} />
        </a>
        <a 
            href="https://github.com/your-github-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
        >
            <AiFillGithub className="text-white hover:text-gray-300 transition duration-300" size={27} />
        </a>
    </div>
);

export default SocialIcons;

