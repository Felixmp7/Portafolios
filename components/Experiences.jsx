import TitleWithLine from './utils/TitleWithLine';
import Experience from './Experience';
import experienceList from './static-data/experience.json';

const theme = {
    textColor: 'text-ssYellow',
    borderColor: 'border-ssYellow',
};

const Experiences = () => (
    <section id="experiences" className="p-4 mx-auto tablet:p-0 containerXl">
        <TitleWithLine text="Mi" colorText="experiencia" theme={theme} />
        {experienceList.map((experience) => (
            <Experience key={experience.id} {...experience} />
        ))}
    </section>
);

export default Experiences;
