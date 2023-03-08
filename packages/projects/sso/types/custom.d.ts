declare module "*.svg" {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare namespace NodeJS {
    export interface ProcessEnv {
        REACT_APP_ENV: string;
        REACT_APP_DOMAIN: string;
        REACT_APP_BASE_URL: string;

        REACT_APP_SSO_URL: string;
        REACT_APP_MANAGER_URL: string;

        REACT_APP_ID: string;
        REACT_APP_API_KEY: string;
        REACT_APP_AUTH_DOMAIN: string;
        REACT_APP_PROJECT_ID: string;
        REACT_APP_STORAGE_BUCKET: string;
        REACT_APP_MEASUREMENT_ID: string;
        REACT_APP_MESSAGING_SENDER_ID: string;
    }
}