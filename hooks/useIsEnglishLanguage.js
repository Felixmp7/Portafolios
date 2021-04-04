import { useRouter } from 'next/router';

const useIsEnglishLanguage = () => {
    const router = useRouter();
    return router.locale === 'en';
};

export default useIsEnglishLanguage;
