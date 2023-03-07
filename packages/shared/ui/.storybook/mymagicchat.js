import { create } from '@storybook/theming';

export default create({
    base: 'dark',

    // UI
    appBg: '#2f2f2f',
    appContentBg: '#2f2f2f',
    appBorderColor: 'grey',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#fff',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: 'silver',
    barSelectedColor: '#ff6869',
    barBg: '#333',

    // Form colors
    inputBg: '#3f3f3f',
    inputBorder: '#535d65',
    inputTextColor: '#fff',
    inputBorderRadius: 4,

    brandTitle: 'My Magic Chat',
    brandUrl: 'stg-mymagicchat.web.app',
    brandImage: 'https://img.logoipsum.com/288.svg',
    brandTarget: '_self',
});