import React from 'react';
import { Icons } from './Icons.jsx'; // As per instruction, though IconComponent is a prop

export const MobileNavItem = ({ section, activeSection, onClick, darkMode, IconComponent, label }) => (
    <button
        onClick={() => onClick(section)}
        className={`flex flex-col items-center p-2 rounded-md transition-colors w-1/4 
            ${activeSection === section ?
            (darkMode ? 'text-blue-400 bg-gray-700/50' : 'text-blue-600 bg-blue-50') :
            (darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600')}`}
        aria-pressed={activeSection === section}
    >
        <IconComponent size={20} />
        <span className="text-xs mt-1">{label}</span>
    </button>
);
