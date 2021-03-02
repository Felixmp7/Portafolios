import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className="button primary ease"
    >
        {text}
    </button>
);

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    text: 'Botón',
    onClick: null,
};

export default Button;
