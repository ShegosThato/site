import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import { ReimaginedProfile } from './components/ReimaginedProfile.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
// If we decide to move global styles to a CSS file and import it here:
import './index.css'; 

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <ReimaginedProfile />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}
