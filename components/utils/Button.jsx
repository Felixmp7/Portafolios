/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => (
    <button
        type="button"
        className="w-full p-4 text-lg font-medium text-center transition-all duration-500 bg-pink-600 border-2 border-pink-900 rounded-full hover:bg-pink-700 ease focus:outline-none"
    >
        {text}
    </button>
);

Button.propTypes = {
    text: PropTypes.string,
};

Button.defaultProps = {
    text: 'Botón',
};

export default Button;
