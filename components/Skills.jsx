import TitleWithLine from './utils/TitleWithLine';
import skills from './static-data/skills.json';

const theme = {
    textColor: 'text-pink-700',
    borderColor: 'border-pink-700',
};

const Skills = () => (
    <section id="skills" className="p-4 mx-auto mobileContainer tablet:p-0 containerXl">
        <TitleWithLine text="Mis" colorText="Habilidades" theme={theme} />
        <div className="w-full mt-10 overflow-auto text-2xl border-4 border-pink-700 rounded">
            <table className="w-full table-auto">
                <thead>
                    <tr className="border-b-4 border-pink-700">
                        <th className="px-4 py-2" label="Technologies" />
                        <th className="px-4 py-2">Principiante</th>
                        <th className="px-4 py-2">Elemental</th>
                        <th className="px-4 py-2">Intermedio</th>
                        <th className="px-4 py-2">Avanzado</th>
                        <th className="px-4 py-2">Experto</th>
                    </tr>
                </thead>
                <tbody>
                    {skills.map(({ id, checks, name }) => (
                        <tr key={id} className="text-center transition-all duration-500 border-b-2 border-transparent ease hover:border-pink-700">
                            <td className="h-20 px-4 py-2">{name}</td>
                            <td className="h-20 px-4 py-2">
                                {checks >= 1 && <i aria-hidden className="text-4xl text-pink-700 fas fa-check-circle" />}
                            </td>
                            <td className="h-20 px-4 py-2">
                                {checks >= 2 && <i aria-hidden className="text-4xl text-pink-700 fas fa-check-circle" />}
                            </td>
                            <td className="h-20 px-4 py-2">
                                {checks >= 3 && <i aria-hidden className="text-4xl text-pink-700 fas fa-check-circle" />}
                            </td>
                            <td className="h-20 px-4 py-2">
                                {checks >= 4 && <i aria-hidden className="text-4xl text-pink-700 fas fa-check-circle" />}
                            </td>
                            <td className="h-20 px-4 py-2">
                                {checks >= 5 && <i aria-hidden className="text-4xl text-pink-700 fas fa-check-circle" />}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
);

export default Skills;
