import PropTypes from 'prop-types';
import { useState } from 'react';

const AboutCard = ({
    columnStyles,
    title,
    svgIcon,
    description,
}) => {
    const [isHover, setIsHover] = useState(false);
    const height = columnStyles[8] === '2' ? 'h-64' : '';
    const imagePosition = isHover ? 'absolute top-0 left-0 ml-2' : 'static mx-auto';

    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={`aboutCard border-2 transition duration-300 ease ${height} ${columnStyles}`}
        >
            <img
                src={svgIcon}
                alt={title}
                width="80px"
                height="80px"
                className={`${imagePosition}`}
                style={{ filter: 'invert(100%)' }}
            />
            <div className="p-2 mt-12 text-right">
                <h4 className="pt-2 text-lg font-bold leading-5">{title}</h4>
                {isHover && <p>{description}</p>}
            </div>
        </div>
    );
};

AboutCard.propTypes = {
    columnStyles: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    svgIcon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default AboutCard;
