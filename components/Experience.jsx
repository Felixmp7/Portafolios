import { useState } from 'react';
import PropTypes from 'prop-types';
import useIsInView from '../hooks/useIsInView';
import Projects from './Projects';

const Experience = ({
    enterprise,
    enterpriseIcon,
    regionIcon,
    duration,
    jobTitle,
    description,
    theme,
    projects,
    showProjectsInGrid,
    showWithoutScreenshots,
}) => {
    const [isShowProjects, setIsShowProjects] = useState(false);
    const { ref, opacityEffect } = useIsInView();

    return (
        <div ref={ref} className={`px-5 py-10 my-5 border-4 rounded ${theme.borderColor} ${opacityEffect}`}>
            <div className="flex flex-col items-center laptopXl:flex-row">
                <div className="flex items-center">
                    <img
                        src={enterpriseIcon}
                        alt={enterprise}
                        width="120px"
                        height="120px"
                        className="w-1/4 mobileSm:w-24"
                    />
                    <h3 className={`ml-4 font-bold text-3xl mobile:text-4xl tablet:text-7xl ${theme.textColor}`}>{enterprise}</h3>
                </div>
                <div className="flex flex-col w-full mx-auto mt-5 text-xl laptopLg:text-2xl laptopLg:w-2/3 laptopLg:items-center tablet:flex-row justify-evenly text-custom-yellow">
                    <div className="flex">
                        Ubicación |
                        <img src={regionIcon} alt={enterprise} width="35px" height="35px" className="w-6 ml-1 tablet:w-10" />
                    </div>
                    <div>
                        Duración |
                        <span className="font-semibold text-green-500">{` ${duration}`}</span>
                    </div>
                    <div>
                        Cargo |
                        <span className="font-semibold text-react">{` ${jobTitle}`}</span>
                    </div>
                </div>
            </div>
            <p className="mx-auto mt-4 text-xl tablet:w-4/5 tablet:text-2xl text-custom-yellow">
                Descripción de la empresa:
                <span className="text-white">{` ${description}`}</span>
            </p>
            {isShowProjects ? (
                <Projects
                    projects={projects}
                    theme={theme}
                    enterprise={enterprise}
                    showProjectsInGrid={showProjectsInGrid}
                    showWithoutScreenshots={showWithoutScreenshots}
                />
            ) : (
                <div className="w-40 mx-auto mt-5">
                    <button
                        type="button"
                        className={`button ${theme.buttonColor}`}
                        onClick={() => setIsShowProjects(true)}
                    >
                        {`Ver ${projects.length > 1 ? 'Proyectos' : 'Proyecto'}`}
                    </button>
                </div>
            )}
        </div>
    );
};

Experience.propTypes = {
    enterprise: PropTypes.string.isRequired,
    enterpriseIcon: PropTypes.string.isRequired,
    regionIcon: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    theme: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Array).isRequired,
    showProjectsInGrid: PropTypes.bool,
    showWithoutScreenshots: PropTypes.bool,
};

Experience.defaultProps = {
    showProjectsInGrid: false,
    showWithoutScreenshots: false,
};

export default Experience;
