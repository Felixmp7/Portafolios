import PropTypes from 'prop-types';
import { useState } from 'react';
import useIsEnglishLanguage from '../hooks/useIsEnglishLanguage';

const AboutCard = ({
    columnStyles,
    title,
    titleTranslated,
    svgIcon,
    description,
    descriptionTranslated,
}) => {
    const isEnglishLanguage = useIsEnglishLanguage();
    const [isHover, setIsHover] = useState(false);
    const imagePosition = isHover ? 'absolute top-0 left-0 ml-2' : 'static mx-auto';

    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={`mobileLg:h-56 aboutCard border-2 transition duration-300 ease ${columnStyles}`}
        >
            <img
                src={svgIcon}
                alt={title}
                width="80px"
                height="80px"
                className={`w-12 h-12 mobileLg:w-20 mobileLg:h-20 ${imagePosition}`}
                style={{ filter: 'invert(100%)' }}
            />
            <div className="p-2 mt-12 text-right">
                <h3
                    className="pt-2 font-bold leading-5 mobileLg:text-lg"
                >
                    {isEnglishLanguage ? titleTranslated || title : title}
                </h3>
                {isHover
                    && (
                        <p
                            className="mt-2 text-sm mobileLg:text-lg"
                        >
                            {isEnglishLanguage ? descriptionTranslated || description : description}
                        </p>
                    )}
            </div>
        </div>
    );
};

AboutCard.propTypes = {
    columnStyles: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    titleTranslated: PropTypes.string,
    svgIcon: PropTypes.string.isRequired,
    description: PropTypes.string,
    descriptionTranslated: PropTypes.string,
};

AboutCard.defaultProps = {
    description: undefined,
    descriptionTranslated: undefined,
    titleTranslated: undefined,
};

export default AboutCard;
