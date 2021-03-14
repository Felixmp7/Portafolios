import React from 'react';
import PropTypes from 'prop-types';
import CarouselProjects from './CarouselProjects';
import GridProjects from './GridProjects';
import EzgmzProject from './EzgmzProject';

const Projects = ({
    projects, theme, enterprise, showProjectsInGrid,
}) => {
    const handleRenderProjects = () => {
        if (enterprise === 'Ezgmz') {
            return (
                <EzgmzProject
                    project={projects[0]}
                    theme={theme}
                />
            );
        } if (showProjectsInGrid) {
            return (
                <GridProjects
                    projects={projects}
                    enterprise={enterprise}
                    theme={theme}
                />
            );
        }
        return (
            <CarouselProjects
                projects={projects}
                enterprise={enterprise}
                theme={theme}
            />
        );
    };

    return (
        <div className="mx-auto mt-5 tablet:mt-10 tablet:w-4/5">
            {handleRenderProjects()}
        </div>
    );
};

Projects.propTypes = {
    theme: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Array).isRequired,
    enterprise: PropTypes.string.isRequired,
    showProjectsInGrid: PropTypes.bool.isRequired,
};

export default Projects;
