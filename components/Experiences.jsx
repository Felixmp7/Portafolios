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
    return (
        <section ref={ref} id="experiences" className={`mx-auto mobileContainer containerXl ${opacityEffect}`}>
            <TitleWithLine text="Mi" colorText="experiencia" theme={theme} />
            {experienceList.map((experience) => (
                <Experience key={experience.id} {...experience} />
            ))}
        </section>
    );
};

export default Experiences;
