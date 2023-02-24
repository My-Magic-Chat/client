export interface IConfig {
    length: number;
    regex: RegExp;
    mask: string;
    example: string;
}

export interface IReturn { value: string; length: number }