import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './router';
import './i18n';
import './src/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);