import { useEffect, useGlobals } from '@storybook/addons';

export const useTheme = (StoryFn) => {
    const [{ theme }] = useGlobals();

    useEffect(() => {
        //document.body refers to body tag inside iframe#storybook-preview-iframe
        document.body.setAttribute('data-theme', theme);

        console.log('theme', theme);
    }, [theme]);

    document.getElementsByTagName('BODY')[0].classList.add(theme);

    return StoryFn();
};