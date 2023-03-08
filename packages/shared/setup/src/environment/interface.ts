export interface IEnvironment {
    env: string;
    domain: string;
    baseUrl: string;
    url: IURL;
}

export interface IURL {
    sso: string;
    manager: string;
}