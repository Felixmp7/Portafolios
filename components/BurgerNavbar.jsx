/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
// import NavbarItem from './NavbarItem';

const BurgerNavbar = ({ setIsOpen }) => (
    <header className="p-5 text-white">
        <nav className="flex items-center justify-between h-full mx-auto containerXl">
            <h1 className="text-2xl font-semibold">
                Felix Pacheco
                <br />
                <span className="inline-block text-primary">{'<React Developer />'}</span>
            </h1>
            <button
                type="button"
                className="p-5 text-3xl border border-white focus:outline-none"
                onClick={() => setIsOpen(true)}
            >
                <i aria-hidden className="fas fa-bars" />
            </button>
        </nav>
    </header>
);

BurgerNavbar.propTypes = {
    setIsOpen: PropTypes.func.isRequired,
};

export default BurgerNavbar;
