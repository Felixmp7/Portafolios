import PropTypes from 'prop-types';
import DetailUp from './utils/DetailUp';

const NoScreenshotsProject = ({ project, theme }) => (
    <div className="items-center grid-cols-4 tablet:grid">
        <h4 className={`col-span-1 text-center text-xl mobileLg:text-3xl tablet:text-left tablet:text-4xl font-semibold ${theme.textColor}`}>Proyecto:</h4>
        <div className="flex flex-col justify-between col-span-3 text-lg text-center tablet:flex-row">
            <DetailUp detail="Nombre" value={project.title} theme={theme} />
            <DetailUp detail="Web" value="Click Aquí" theme={theme} link={project.urlWeb} />
            <DetailUp detail="Descripción" value={project.description} theme={theme} />
        </div>
    </div>
);

NoScreenshotsProject.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
    theme: PropTypes.instanceOf(Object).isRequired,
};

export default NoScreenshotsProject;
