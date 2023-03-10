import { useEffect, useGlobals } from '@storybook/addons';

export const useTheme = (StoryFn) => {
    const [{ theme }] = useGlobals();

    useEffect(() => {
        const tag = document.getElementsByTagName('HTML')[0];

        if (theme === 'dark') {
            tag.classList.remove('light');
            tag.classList.add('dark');
        }

        if (theme === 'light') {
            tag.classList.remove('dark');
            tag.classList.add('light');
        }

        console.log('theme', theme);
    }, [theme]);

    return StoryFn();
};