import React from 'react';
import PropTypes from 'prop-types';

const NavbarItem = ({ title }) => (
    <button
        type="button"
        className="flex items-center justify-center w-full px-5 text-lg font-medium transition duration-500 border-b-4 border-gray-900  ease hover:border-white focus:outline-none"
    >
        {title}
    </button>
);

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
};

export default NavbarItem;
