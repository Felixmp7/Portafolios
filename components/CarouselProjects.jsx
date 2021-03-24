import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import DetailUp from './utils/DetailUp';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselProjects = ({ projects, theme, enterprise }) => (
    <>
        <h3 className={`text-center text-xl mobileLg:text-3xl font-semibold tablet:text-4xl ${theme.textColor}`}>{projects.length > 1 ? 'Proyectos:' : 'Proyecto:'}</h3>
        {projects.map(({ id, title, description, screenshots, urlWeb }) => (
            <div key={id} className={`tablet:grid grid-cols-8 gap-10 border-b-2 py-5 ${theme.borderColor}`}>
                <div className="flex flex-col justify-center col-span-2 text-lg text-center">
                    <DetailUp detail="Nombre" value={title} theme={theme} />
                    <DetailUp detail="Web" value="Click Aquí" theme={theme} link={urlWeb} />
                    <DetailUp detail="Descripción" value={description} theme={theme} />
                </div>
                <div className="w-full col-span-6">
                    <Carousel showThumbs={false} showStatus={false} infiniteLoop transitionTime={1000}>
                        {screenshots?.map((screenshot) => (
                            <img
                                key={screenshot}
                                src={`/assets/experience/${enterprise.toLowerCase()}/${screenshot}`}
                                alt={screenshot}
                                width="200px"
                                height="200px"
                                className="w-full"
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
        ))}
    </>
);

CarouselProjects.propTypes = {
    projects: PropTypes.instanceOf(Array).isRequired,
    theme: PropTypes.instanceOf(Object).isRequired,
    enterprise: PropTypes.string.isRequired,
}

export default CarouselProjects;
