import React from 'react';
import { Icons } from './Icons.jsx';

export const ProjectCard = ({ project, darkMode }) => (
    <div className={`rounded-xl overflow-hidden transition-all hover:translate-y-[-4px] 
        ${darkMode ?
            'bg-gray-800 hover:shadow-lg hover:shadow-blue-900/20' :
            'bg-white hover:shadow-xl border border-gray-200'}`}>
        <div className={`h-3 ${project.themeColor}`}></div>
        <div className="p-6">
            <h3 className="text-lg font-bold mb-2">{project.title}</h3>
            <p className={`mb-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                    <span key={i} className={`text-xs px-2 py-1 rounded-full 
                        ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                        {tag}
                    </span>
                ))}
            </div>
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center text-sm font-medium 
                    ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
            >
                View project <Icons.ExternalLink size={14} className="ml-1" />
            </a>
        </div>
    </div>
);
