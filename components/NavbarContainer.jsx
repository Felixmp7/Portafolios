/* eslint-disable react/no-array-index-key */
import React from 'react';
import useIsScreenSmaller from '../hooks/useIsScreenSmaller';
import Navbar from './Navbar';
import BurgerNavbar from './BurgerNavbar';

const navbarItems = [
    'Inicio', 'Acerca de', 'Aprendizaje', 'Experiencia', 'Mi trabajo',
];

const NavbarContainer = () => {
    const screenPx = 1290;
    const isScreenSmaller = useIsScreenSmaller(screenPx);

    if (isScreenSmaller) {
        return <BurgerNavbar navbarItems={navbarItems} />;
    }

    return (
        <Navbar navbarItems={navbarItems} />
    );
};

export default NavbarContainer;
