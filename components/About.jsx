import AboutCard from './AboutCard';
import TitleWithLine from './utils/TitleWithLine';
import histories from './static-data/about.json';

const theme = {
    textColor: 'text-primary',
    borderColor: 'border-primary',
};

const About = () => (
    <section id="about" className="w-full mx-auto containerXl">
        <TitleWithLine text="Acerca" colorText="de mi" theme={theme} />
        <div className="grid grid-cols-4 gap-4 mx-auto mt-10 tabletLg:grid-cols-12">
            {histories.map(((history) => (
                <AboutCard key={history.id} {...history} />
            )))}
        </div>

    </section>
);

export default About;
