import TitleWithLine from './utils/TitleWithLine';
import skills from './static-data/skills.json';

const theme = {
    textColor: 'text-pink-700',
    borderColor: 'border-pink-700',
};

const Skills = () => (
    <section id="skills" className="p-4 mx-auto mobileContainer tablet:p-0 containerXl">
        <TitleWithLine text="Mis" colorText="Habilidades" theme={theme} />
        <div className="grid w-full grid-cols-2 gap-5 mt-10 overflow-auto text-2xl mobile:grid-cols-3 tabletLg:gap-10 tabletLg:grid-cols-4 laptopLg:grid-cols-5">
            {skills.map(({
                id, icon, name, textColor,
            }) => (
                <div key={id} className="flex flex-col items-center justify-center">
                    <img src={icon || '/assets/skills/hooks.png'} alt={id} width="160px" height="160px" className="w-1/2 tabletLg:w-2/3" />
                    <h3 className={`mt-4 text-sm mobile:text-lg tabletLg:text-xl font-bold ${textColor}`}>{name}</h3>
                </div>
            ))}
        </div>
    </section>
);

export default Skills;
