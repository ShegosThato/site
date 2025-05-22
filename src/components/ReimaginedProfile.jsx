import React, { useState, useEffect } from 'react';
import { Icons } from './Icons.jsx'; // For Sun, Moon, etc.
import { NavLink } from './NavLink.jsx';
import { MobileNavItem } from './MobileNavItem.jsx';
import { ProjectCard } from './ProjectCard.jsx';
import { SkillCategoryDisplay } from './SkillCategoryDisplay.jsx';
import { ContactLink } from './ContactLink.jsx';
import { projectsData } from '../data/projects.js';
import { skillsData } from '../data/skills.js';
import { SECTIONS, YOUR_GITHUB_USERNAME, YOUR_LINKEDIN_PROFILE_NAME, YOUR_EMAIL } from '../config.js';

// Constants and Configuration are now imported

// Data is now imported

export const ReimaginedProfile = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) :
            window.matchMedia('(prefers-color-scheme: dark)').matches;
    });
    const [activeSection, setActiveSection] = useState(SECTIONS.HOME);

    useEffect(() => {
        const rootEl = document.documentElement;
        if (darkMode) {
            rootEl.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            rootEl.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
        // Ensure the class is removed from the #root child as well if it was added.
        // This might have been added for the initial loading state.
        const rootDivChild = document.getElementById('root')?.firstChild;
        if (rootDivChild && typeof rootDivChild.classList !== 'undefined' && rootDivChild.classList.contains('dark-mode-preload')) {
             rootDivChild.classList.remove('dark-mode-preload');
        }

    }, [darkMode]);

    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'darkMode') {
                const newMode = localStorage.getItem('darkMode') === 'true';
                if (newMode !== darkMode) setDarkMode(newMode);
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [darkMode]); // Added darkMode to dependency array, was missing.

    const toggleTheme = () => setDarkMode(!darkMode);
    const handleNavClick = (section) => setActiveSection(section);

    const GITHUB_PROFILE_URL = `https://github.com/${YOUR_GITHUB_USERNAME}`;
    const LINKEDIN_PROFILE_URL = `https://www.linkedin.com/in/${YOUR_LINKEDIN_PROFILE_NAME}`;

    return (
        <div className={`min-h-screen font-sans ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
            {/* Navigation */}
            <nav className={`fixed top-0 left-0 w-full z-10 
                ${darkMode ? 'bg-gray-800/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md shadow-sm'}`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <span className={`text-xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                {YOUR_GITHUB_USERNAME}
                            </span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <NavLink section={SECTIONS.HOME} activeSection={activeSection} onClick={handleNavClick} darkMode={darkMode}>
                                Home
                            </NavLink>
                            <NavLink section={SECTIONS.PROJECTS} activeSection={activeSection} onClick={handleNavClick} darkMode={darkMode}>
                                Projects
                            </NavLink>
                            <NavLink section={SECTIONS.SKILLS} activeSection={activeSection} onClick={handleNavClick} darkMode={darkMode}>
                                Skills
                            </NavLink>
                            <NavLink section={SECTIONS.CONTACT} activeSection={activeSection} onClick={handleNavClick} darkMode={darkMode}>
                                Contact
                            </NavLink>
                        </div>
                        <div className="flex items-center">
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full focus:outline-none focus:ring-2 
                                    ${darkMode ? 'bg-gray-700 text-yellow-300 hover:bg-gray-600 focus:ring-yellow-500' :
                                    'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-blue-500'}`}
                                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                            >
                                {darkMode ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-10">
                <div className={`flex justify-around py-3 ${darkMode ? 'bg-gray-800 border-t border-gray-700' : 'bg-white border-t border-gray-200 shadow-lg'}`}>
                    <MobileNavItem
                        section={SECTIONS.HOME}
                        activeSection={activeSection}
                        onClick={handleNavClick}
                        darkMode={darkMode}
                        IconComponent={Icons.Home}
                        label="Home"
                    />
                    <MobileNavItem
                        section={SECTIONS.PROJECTS}
                        activeSection={activeSection}
                        onClick={handleNavClick}
                        darkMode={darkMode}
                        IconComponent={Icons.Code}
                        label="Projects"
                    />
                    <MobileNavItem
                        section={SECTIONS.SKILLS}
                        activeSection={activeSection}
                        onClick={handleNavClick}
                        darkMode={darkMode}
                        IconComponent={Icons.Award}
                        label="Skills"
                    />
                    <MobileNavItem
                        section={SECTIONS.CONTACT}
                        activeSection={activeSection}
                        onClick={handleNavClick}
                        darkMode={darkMode}
                        IconComponent={Icons.Mail}
                        label="Contact"
                    />
                </div>
            </div>

            <main className="pt-20 pb-24 md:pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                {/* Home Section */}
                {activeSection === SECTIONS.HOME && (
                    <div className="mt-8 md:mt-16 grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 
                                ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                                Software Developer
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Hello, I'm <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>
                                    {YOUR_GITHUB_USERNAME}
                                </span>
                            </h1>
                            <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                A passionate developer focused on creating clean, efficient solutions to complex problems.
                                I love open source and building tools that make a difference.
                            </p>
                            <div className="flex space-x-4 mb-8">
                                <a
                                    href={GITHUB_PROFILE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors
                                        ${darkMode ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                                >
                                    <Icons.Github size={18} className="mr-2" /> Github
                                </a>
                                <a
                                    href="#contact"
                                    onClick={() => handleNavClick(SECTIONS.CONTACT)}
                                    className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors
                                        ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                                >
                                    <Icons.Mail size={18} className="mr-2" /> Contact Me
                                </a>
                            </div>
                        </div>
                        <div className={`hidden md:block rounded-lg p-8 
                            ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
                            {/* Placeholder for a more elaborate graphic or profile picture */}
                            <div className={`w-full h-64 rounded-md flex items-center justify-center
                                ${darkMode ? 'bg-gray-700' : 'bg-blue-100'}`}>
                                <Icons.Code size={64} className={darkMode ? 'text-blue-500' : 'text-blue-500'} />
                            </div>
                            <p className={`mt-4 text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Building innovative solutions, one line of code at a time.
                            </p>
                        </div>
                    </div>
                )}

                {/* Projects Section */}
                {activeSection === SECTIONS.PROJECTS && (
                    <div className="mt-12 md:mt-16">
                        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projectsData.map(project => (
                                <ProjectCard key={project.id} project={project} darkMode={darkMode} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Skills Section */}
                {activeSection === SECTIONS.SKILLS && (
                    <div className="mt-12 md:mt-16">
                        <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
                        <div className="space-y-8">
                            {skillsData.map(category => (
                                <SkillCategoryDisplay key={category.category} category={category} darkMode={darkMode} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Contact Section */}
                {activeSection === SECTIONS.CONTACT && (
                    <div className="mt-12 md:mt-16 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
                        <p className={`text-center mb-10 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Have a project in mind, or just want to connect? Feel free to reach out.
                        </p>
                        <div className={`rounded-xl p-8 space-y-6 
                            ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200 shadow-lg'}`}>
                            <ContactLink
                                href={GITHUB_PROFILE_URL}
                                IconComponent={Icons.Github}
                                title="Github"
                                text={YOUR_GITHUB_USERNAME}
                                darkMode={darkMode}
                            />
                            <ContactLink
                                href={LINKEDIN_PROFILE_URL}
                                IconComponent={Icons.Linkedin}
                                title="LinkedIn"
                                text={YOUR_LINKEDIN_PROFILE_NAME}
                                darkMode={darkMode}
                            />
                            <ContactLink
                                href={YOUR_EMAIL}
                                IconComponent={Icons.Mail}
                                title="Email"
                                text="Send me an email"
                                darkMode={darkMode}
                                isEmail={true}
                            />
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};
