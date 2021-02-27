/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const KnowledgeItem = ({
    title,
    duration,
    institution,
    institutionIcon,
    isFaceToFace,
    theme,
    imageSize,
    isSpecial,
}) => {
    const icon = isFaceToFace ? 'fas fa-user-graduate' : 'fas fa-globe';
    const background = isSpecial ? theme.bgColor : 'bg-none';

    return (
        <div className={`mb-5 relative pb-5 transition-all duration-500 border-2 rounded ease hover:bg-white hover:text-gray-900 tablet:mb-0 ${theme.borderColor} ${background}`}>
            <div className="flex items-center justify-center h-20 mb-5">
                <img src={institutionIcon} alt={title} width={imageSize || '50px'} height={imageSize || '50px'} />
            </div>
            <span className="text-2xl text-center">
                <span className={`block text-3xl ${theme.textColor}`}>{institution}</span>
                <span className="block">{title}</span>
                <span className="block font-bold text-react">{duration}</span>
            </span>
            <i className={`absolute top-0 mt-2 ml-2 text-xl text-ssYellow ${icon}`} />
        </div>
    );
};

KnowledgeItem.propTypes = {
    title: PropTypes.string.isRequired,
    theme: PropTypes.instanceOf(Object).isRequired,
    duration: PropTypes.string.isRequired,
    institutionIcon: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    isFaceToFace: PropTypes.bool,
    imageSize: PropTypes.string,
    isSpecial: PropTypes.bool,
};

KnowledgeItem.defaultProps = {
    isFaceToFace: false,
    imageSize: null,
    isSpecial: false,
};

export default KnowledgeItem;
