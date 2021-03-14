import PropTypes from 'prop-types';
import DetailUp from './utils/DetailUp';

const GridProjects = ({ projects, theme, enterprise }) => (
    <>
        <h4 className={`text-center text-3xl font-semibold tablet:text-4xl ${theme.textColor}`}>{projects.length > 1 ? 'Proyectos:' : 'Proyecto:'}</h4>
        {projects.map(({ id, title, description, screenshots, urlWeb }) => (
            <div key={id} className={`tablet:grid grid-cols-8 gap-10 border-b-2 py-5 ${theme.borderColor}`}>
                <div className="flex flex-col justify-center col-span-2 text-lg text-center tablet:text-left">
                    <DetailUp detail="Nombre" value={title} theme={theme} />
                    <DetailUp detail="Web" value="Click Aquí" theme={theme} link={urlWeb} />
                    <DetailUp detail="Descripción" value={description} theme={theme} />
                </div>
                <div className="flex flex-wrap justify-between w-full col-span-6">
                    {screenshots?.map((screenshot) => (
                        <img
                                key={screenshot}
                                src={`/assets/experience/${enterprise.toLowerCase()}/${screenshot}`}
                                alt={screenshot}
                                width="170px"
                                height="170px"
                                className="w-full tablet:w-1/5"
                            />
                    ))}
                </div>
            </div>
        ))}
    </>
);

GridProjects.propTypes = {
    projects: PropTypes.instanceOf(Array).isRequired,
    theme: PropTypes.instanceOf(Object).isRequired,
    enterprise: PropTypes.string.isRequired,
};

export default GridProjects;
