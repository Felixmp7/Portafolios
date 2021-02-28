/* eslint-disable react/no-array-index-key */
import React from 'react';
import useIsSmallScreen from '../hooks/useIsSmallScreen';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

const navbarItems = [
    {
        id: 1,
        title: 'Formación',
        link: 'knowledge',
    },
    {
        id: 2,
        title: 'Experiencia',
        link: 'experiences',
    },
    {
        id: 3,
        title: 'Habilidades',
        link: 'skills',
    },
    {
        id: 4,
        title: 'Acerca de',
        link: 'about',
    },
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
