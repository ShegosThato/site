import React from 'react';

export const SkillCategoryDisplay = ({ category, darkMode }) => (
    <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
        <h3 className={`text-xl font-bold mb-4 ${category.color}`}>{category.category}</h3>
        <div className="flex flex-wrap gap-2">
            {category.items.map((skill, i) => (
                <span key={i} className={`px-3 py-1.5 rounded-md text-sm 
                    ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
                    {skill}
                </span>
            ))}
        </div>
    </div>
);
