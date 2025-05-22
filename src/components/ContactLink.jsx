import React from 'react';
import PropTypes from 'prop-types';

const OriginalContactLink = ({ href, IconComponent, title, text, darkMode, isEmail }) => (
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

OriginalContactLink.propTypes = {
    href: PropTypes.string.isRequired,
    IconComponent: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    darkMode: PropTypes.bool.isRequired,
    isEmail: PropTypes.bool,
};

OriginalContactLink.defaultProps = {
    isEmail: false,
};

export const ContactLink = React.memo(OriginalContactLink);
