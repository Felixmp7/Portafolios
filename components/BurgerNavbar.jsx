/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
// import NavbarItem from './NavbarItem';

const BurgerNavbar = ({ navbarItems }) => (
    <header className="p-5 text-white">
        <nav className="flex items-center justify-between h-full mx-auto ssContainerXl">
            <h1 className="text-2xl font-semibold">
                Felix Pacheco
                <br />
                <span className="inline-block text-primary">{'<React Developer />'}</span>
            </h1>
            <button type="button" className="text-3xl focus:outline-none">
                <i aria-hidden className="fas fa-bars" />
            </button>
        </nav>
    </header>
);

BurgerNavbar.propTypes = {
    navbarItems: PropTypes.instanceOf(Array).isRequired,
};

export default BurgerNavbar;
