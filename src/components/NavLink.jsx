import React from 'react';

export const NavLink = ({ section, activeSection, onClick, darkMode, children }) => (
    <button
        onClick={() => onClick(section)}
        className={`hover:text-blue-500 transition-colors ${activeSection === section ?
            (darkMode ? 'text-blue-400' : 'text-blue-600') : ''}`}
        aria-current={activeSection === section ? 'page' : undefined}
    >
        {children}
    </button>
);
