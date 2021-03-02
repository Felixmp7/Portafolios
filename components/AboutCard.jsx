import PropTypes from 'prop-types';
import { useState } from 'react';

const AboutCard = ({
    columnStyles,
    title,
    svgIcon,
}) => {
    const [isHover, setIsHover] = useState(false);
    const height = columnStyles[8] === '2' ? 'h-64' : '';

    return (
        <div
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            className={`aboutCard border-2 transition duration-300 ease ${height} ${columnStyles}`}
        >
            <img src={svgIcon} alt={title} width="80px" height="80px" className="mx-auto" style={{ filter: isHover ? 'invert(20%)' : 'invert(100%)' }} />
            <div className="p-2 mt-12 text-right">
                <h4 className="pt-2 text-lg font-bold leading-5">{title}</h4>
            </div>
        </div>
    );
};

AboutCard.propTypes = {
    columnStyles: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    svgIcon: PropTypes.string.isRequired,
};

export default AboutCard;
