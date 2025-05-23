import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{ padding: '20px', textAlign: 'center', border: '1px solid #ff0000', margin: '20px' }}>
          <h1>Something went wrong.</h1>
          <p>Please try refreshing the page or contact support if the problem persists.</p>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
