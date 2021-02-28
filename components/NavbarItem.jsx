import React from 'react';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';

const NavbarItem = ({ title, link }) => (
    <ScrollLink activeClass="active" to={link} spy smooth duration={800}>
        <span className="h-full transition duration-500 cursor-pointer navbarItem ease focus:outline-none hover:text-white">{title}</span>
    </ScrollLink>
);

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default NavbarItem;
