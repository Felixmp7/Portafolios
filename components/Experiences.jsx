import { useRouter } from 'next/router';
import TitleWithLine from './utils/TitleWithLine';
import Experience from './Experience';
import experienceList from './static-data/experience.json';
import useIsInView from '../hooks/useIsInView';

const theme = {
    textColor: 'text-custom-yellow',
    borderColor: 'border-custom-yellow',
};

const Experiences = () => {
    const { ref, opacityEffect } = useIsInView();
    const router = useRouter();
    const isEnglishLanguage = router.locale === 'en';
    return (
        <section ref={ref} id="experiences" className={`mx-auto mobileContainer containerXl ${opacityEffect}`}>
            <TitleWithLine text={isEnglishLanguage ? 'My' : 'Mi'} colorText={isEnglishLanguage ? 'Experience' : 'Experiencia'} theme={theme} />
            {experienceList.map((experience) => (
                <Experience key={experience.id} {...experience} />
            ))}
        </section>
    );
};

export default Experiences;
