// In src/data/projects.js
import { YOUR_GITHUB_USERNAME } from '../config.js'; // This is still needed for the URLs

export const projectsData = [
    {
        id: 1,
        title: 'Task Flow Pro',
        description: 'A minimalist task management application with drag-and-drop functionality',
        tags: ['React', 'Redux', 'Firebase'],
        url: `https://github.com/${YOUR_GITHUB_USERNAME}/task-flow-pro-example`,
        themeColor: 'bg-blue-500'
    },
    {
        id: 2,
        title: 'DataViz Dashboard',
        description: 'Interactive data visualization dashboard for business analytics',
        tags: ['D3.js', 'TypeScript', 'REST API'],
        url: `https://github.com/${YOUR_GITHUB_USERNAME}/dataviz-dashboard-example`,
        themeColor: 'bg-purple-500'
    },
    {
        id: 3,
        title: 'DevCollab',
        description: 'Real-time collaboration platform for developers',
        tags: ['WebSockets', 'Node.js', 'MongoDB'],
        url: `https://github.com/${YOUR_GITHUB_USERNAME}/devcollab-example`,
        themeColor: 'bg-green-500'
    }
];
