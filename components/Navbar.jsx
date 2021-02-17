/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';

const Navbar = ({ navbarItems }) => (
    <header className="h-24 text-white">
        <nav className="flex items-center justify-between h-full mx-auto containerXl">
            <h1 className="text-5xl font-semibold">
                Felix Pacheco |
                {' '}
                <span className="inline-block text-primary">{'<React Developer />'}</span>
            </h1>
            <div className="flex w-1/2 h-full justify-evenly">
                {navbarItems.map((item, index) => (
                    <NavbarItem key={index} title={item} />
                ))}
            </div>
        </nav>
    </header>
);

Navbar.propTypes = {
    navbarItems: PropTypes.instanceOf(Array).isRequired,
};

export default Navbar;
