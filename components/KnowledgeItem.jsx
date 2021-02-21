/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const KnowledgeItem = ({
    title,
    duration,
    institutionIcon,
    isFaceToFace,
    borderColor,
}) => {
    const icon = isFaceToFace ? 'fas fa-user-graduate' : 'fas fa-globe';
    return (
        <div className={`mb-5 relative pb-5 transition-all duration-500 border-2 rounded ease hover:bg-white hover:text-gray-900 tablet:mb-0 ${borderColor}`}>
            <div className="flex items-center justify-center h-20 mb-5">
                <img src={institutionIcon} alt={title} width="50px" height="50px" />
            </div>
            <span className="text-2xl text-center">
                <span className="block">{title}</span>
                <span className="block font-bold text-react">{duration}</span>
            </span>
            <i className={`absolute top-0 mt-2 ml-2 text-xl text-ssYellow ${icon}`} />
        </div>
    );
};

KnowledgeItem.propTypes = {
    title: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    institutionIcon: PropTypes.string.isRequired,
    isFaceToFace: PropTypes.bool,
};

KnowledgeItem.defaultProps = {
    isFaceToFace: false,
};

export default KnowledgeItem;
