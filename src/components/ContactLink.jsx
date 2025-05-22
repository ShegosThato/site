import React from 'react';

export const ContactLink = ({ href, IconComponent, title, text, darkMode, isEmail = false }) => (
    <a
        href={isEmail ? `mailto:${href}` : href}
        target={isEmail ? '_self' : '_blank'}
        rel={isEmail ? undefined : 'noopener noreferrer'}
        className="flex items-center group"
    >
        <div className={`mr-4 p-3 rounded-full 
            ${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
            <IconComponent size={20} />
        </div>
        <div>
            <div className="font-medium">{title}</div>
            <div className={`transition-colors ${darkMode ? 'text-gray-400 group-hover:text-blue-400' : 'text-gray-600 group-hover:text-blue-600'}`}>
                {text}
            </div>
        </div>
    </a>
);
