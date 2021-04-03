import { useState } from 'react';
import { useRouter } from 'next/router';
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
    descriptionTranslated,
}) => {
    const [isShowProjects, setIsShowProjects] = useState(false);
    const router = useRouter();
    const isEnglishLanguage = router.locale === 'en';
    const { ref, opacityEffect } = useIsInView();

    const seeProjects = () => {
        if (isEnglishLanguage) return `See ${projects.length > 1 ? 'Projects' : 'Project'}`;
        return `Ver ${projects.length > 1 ? 'Proyectos' : 'Proyecto'}`;
    };

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
                <div className="workDetails">
                    <div className="flex">
                        {`${isEnglishLanguage ? 'Location' : 'Ubicación'} |`}
                        <img src={regionIcon} alt={enterprise} width="35px" height="35px" className="w-6 ml-1 tablet:w-10" />
                    </div>
                    <div>
                        {`${isEnglishLanguage ? 'Duration' : 'Duración'} |`}
                        <span className="font-semibold text-green-500">{` ${duration}`}</span>
                    </div>
                    <div>
                        {`${isEnglishLanguage ? 'Charge' : 'Cargo'} |`}
                        <span className="font-semibold text-react">{` ${jobTitle}`}</span>
                    </div>
                </div>
            </div>
            <p className="mx-auto mt-4 tablet:w-4/5 tablet:text-xl text-custom-yellow">
                {`${isEnglishLanguage ? 'Enterprise Description:' : 'Descripción de la empresa:'} |`}
                <span
                    className="text-white"
                >
                    {` ${isEnglishLanguage ? descriptionTranslated || description : description}`}
                </span>
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
                        {seeProjects()}
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
    descriptionTranslated: PropTypes.string.isRequired,
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
