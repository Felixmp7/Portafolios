/* eslint-disable react/no-array-index-key */
import React from 'react';
import useIsSmallScreen from '../hooks/useIsSmallScreen';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

const navbarItems = [
    'Inicio', 'Aprendizaje', 'Experiencia', 'Mi trabajo', 'Acerca de',
];

const NavbarContainer = () => {
    const screenWidth = 1290;
    const isSmallScreen = useIsSmallScreen(screenWidth);

    if (isSmallScreen) {
        return <NavbarMobile navbarItems={navbarItems} />;
    }

    return (
        <Navbar navbarItems={navbarItems} />
    );
};

export default NavbarContainer;
