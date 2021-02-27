import React from 'react';
import PropTypes from 'prop-types';

const DetailUp = ({
    detail, value, theme, link,
}) => (
    <div className="flex flex-col py-3">
        <span className={`text-2xl font-semibold ${theme.textColor}`}>{detail}</span>
        {link ? (
            <a href={link} target="__blank" className="text-xl font-medium underline">{value}</a>
        )
            : (
                <span className="text-xl font-medium">{value}</span>
            )}
    </div>
);

DetailUp.propTypes = {
    detail: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    link: PropTypes.string,
};

DetailUp.defaultProps = {
    link: null,
};

export default DetailUp;
