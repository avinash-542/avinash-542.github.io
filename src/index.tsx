import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* global keyframe animations injected once */
const style = document.createElement('style');
style.textContent = `
  @keyframes cursorBlink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
    50%       { opacity: .7; box-shadow: 0 0 0 5px rgba(34,197,94,0); }
  }
`;
document.head.appendChild(style);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);