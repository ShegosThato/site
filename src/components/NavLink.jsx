import React from 'react';
import PropTypes from 'prop-types';

const OriginalNavLink = ({ section, activeSection, onClick, darkMode, children }) => (
    <button
        onClick={() => onClick(section)}
        className={`hover:text-blue-500 transition-colors ${activeSection === section ?
            (darkMode ? 'text-blue-400' : 'text-blue-600') : ''}`}
        aria-current={activeSection === section ? 'page' : undefined}
    >
        {children}
    </button>
);

OriginalNavLink.propTypes = {
    section: PropTypes.string.isRequired,
    activeSection: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export const NavLink = React.memo(OriginalNavLink);
