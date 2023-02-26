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
    }
}