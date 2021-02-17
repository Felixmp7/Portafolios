/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BurgerOptions from './BurgerOptions';

const NavbarMobile = ({ navbarItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="p-5 text-white">
            <nav className="flex items-center justify-between h-full mx-auto ssContainerXl">
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
            <BurgerOptions navbarItems={navbarItems} setIsOpen={setIsOpen} isOpen={isOpen} />
        </header>
    );
};

NavbarMobile.propTypes = {
    navbarItems: PropTypes.instanceOf(Array).isRequired,
};

export default NavbarMobile;
