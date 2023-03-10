import { useTranslation } from 'react-i18next';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useTranslate() {
    const { t, i18n } = useTranslation();

    return { t, changeLanguage: i18n.changeLanguage };
}