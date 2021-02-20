/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BurgerNavbar from './BurgerNavbar';
import BurgerOptions from './BurgerOptions';

const NavbarMobile = ({ navbarItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="p-5 text-white">
            <BurgerNavbar setIsOpen={setIsOpen} />
            <BurgerOptions navbarItems={navbarItems} setIsOpen={setIsOpen} isOpen={isOpen} />
        </header>
    );
};

NavbarMobile.propTypes = {
    navbarItems: PropTypes.instanceOf(Array).isRequired,
};

export default NavbarMobile;
