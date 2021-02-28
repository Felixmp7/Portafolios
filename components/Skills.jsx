import TitleWithLine from './utils/TitleWithLine';
import skills from '../utils/static-data/skills.json';

const theme = {
    textColor: 'text-pink-700',
    borderColor: 'border-pink-700',
};

const Skills = () => (
    <section id="skills" className="p-4 mx-auto mt-10 tablet:mt-32 tablet:p-0 containerXl">
        <TitleWithLine text="Mis" colorText="Habilidades" theme={theme} />
        <table className="w-full mt-10 text-2xl border-4 border-pink-700 rounded-lg table-auto">
            <thead>
                <tr className="border-4 border-pink-700">
                    <th className="px-4 py-2" label />
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
                            {checks >= 1 && <i className="text-4xl text-pink-700 fas fa-check-circle" />}
                        </td>
                        <td className="h-20 px-4 py-2">
                            {checks >= 2 && <i className="text-4xl text-pink-700 fas fa-check-circle" />}
                        </td>
                        <td className="h-20 px-4 py-2">
                            {checks >= 3 && <i className="text-4xl text-pink-700 fas fa-check-circle" />}
                        </td>
                        <td className="h-20 px-4 py-2">
                            {checks >= 4 && <i className="text-4xl text-pink-700 fas fa-check-circle" />}
                        </td>
                        <td className="h-20 px-4 py-2">
                            {checks >= 5 && <i className="text-4xl text-pink-700 fas fa-check-circle" />}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
);

export default Skills;