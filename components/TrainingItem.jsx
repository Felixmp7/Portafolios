/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const KnowledgeItem = ({
    title,
    duration,
    institution,
    institutionIcon,
    isFaceToFace,
    image,
    theme,
    imageSize,
    isSpecial,
}) => {
    const [isHover, setIsHover] = useState(false);
    const scrollCertificate = isHover ? 'scrolled certificate' : 'certificate';
    const icon = isFaceToFace ? 'fas fa-user-graduate' : 'fas fa-globe';
    const background = isSpecial ? theme.bgColor : 'bg-none';

    return (
        <div
            className={`trainingItem transition-all duration-500 ease ${theme.borderColor} ${background}`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {image && (
                <img
                    src={image}
                    alt={title}
                    width="100%"
                    height="100%"
                    className={scrollCertificate}
                />
            )}
            <div className="flex items-center justify-center h-20 mb-5">
                <img
                    src={institutionIcon}
                    alt={title}
                    width={imageSize || '50px'}
                    height={imageSize || '50px'}
                />
            </div>
            <span className="text-lg text-center tablet:text-2xl">
                <span className={`block text-2xl tablet:text-3xl ${theme.textColor}`}>{institution}</span>
                <span className="block">{title}</span>
                <span className="block font-bold text-react">{duration}</span>
            </span>
            <i aria-hidden className={`absolute top-0 mt-2 ml-2 text-xl text-custom-yellow ${icon}`} />
        </div>
    );
};

KnowledgeItem.propTypes = {
    title: PropTypes.string.isRequired,
    theme: PropTypes.instanceOf(Object).isRequired,
    duration: PropTypes.string.isRequired,
    institutionIcon: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    image: PropTypes.string,
    isFaceToFace: PropTypes.bool,
    imageSize: PropTypes.string,
    isSpecial: PropTypes.bool,
};

KnowledgeItem.defaultProps = {
    isFaceToFace: false,
    imageSize: null,
    isSpecial: false,
    image: null,
};

export default KnowledgeItem;
