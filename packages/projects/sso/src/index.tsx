import ReactDOM from 'react-dom/client';
import React from 'react';

import { ToastProvider, TranslateProvider } from '@client/ui';

import reportWebVitals from './reportWebVitals';
import App from './App';

import '@client/ui/dist/esm/default/index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <TranslateProvider>
            <ToastProvider>
                <App />
            </ToastProvider>
        </TranslateProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
