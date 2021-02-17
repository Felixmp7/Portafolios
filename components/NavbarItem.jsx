import React from 'react';
import PropTypes from 'prop-types';

const NavbarItem = ({ title }) => (
    <button
        type="button"
        className="flex items-center w-full p-5 text-lg font-medium text-indigo-900 transition duration-500 border-b-2 tablet:border-b-4 tablet:py-0 tablet:justify-center tablet:border-indigo-1000 ease tablet:hover:border-white focus:outline-none"
    >
        {title}
    </button>
);

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
};

export default NavbarItem;
