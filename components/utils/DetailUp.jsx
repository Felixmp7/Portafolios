import React from 'react';
import PropTypes from 'prop-types';

const DetailUp = ({
    detail, value, theme, link,
}) => (
    <div className="flex flex-col py-3">
        <span className={`tablet:text-2xl font-semibold ${theme.textColor}`}>{detail}</span>
        {link ? (
            <a href={link} target="__blank" className="text-base font-medium underline tablet:text-xl">{value}</a>
        )
            : (
                <span className="text-base font-medium tablet:text-xl">{value}</span>
            )}
    </div>
);

DetailUp.propTypes = {
    detail: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    theme: PropTypes.instanceOf(Object).isRequired,
    link: PropTypes.string,
};

DetailUp.defaultProps = {
    link: null,
};

export default DetailUp;
