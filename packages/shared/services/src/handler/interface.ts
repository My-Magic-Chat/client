export type TOrigin = 'api' | 'application';

export type TPathApi = 'SSO';
export type TPathApplication = 'INPUTS';

export interface IData {
    id: string | number;
    path: TPathApplication | TPathApi;
}