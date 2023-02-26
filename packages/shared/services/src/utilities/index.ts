export * as enum from './enum';
export * as number from './number';
export * as object from './object';

export const isBrowser = () => typeof (window) !== 'undefined';