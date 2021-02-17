import React from 'react';
import PropTypes from 'prop-types';

const NavbarItem = ({ title }) => (
    <button
        type="button"
        className="transition duration-500 navbarItem ease focus:outline-none hover:border-white hover:text-white"
    >
        {title}
    </button>
);

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
};

export default NavbarItem;
