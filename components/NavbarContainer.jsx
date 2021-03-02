import useIsSmallScreen from '../hooks/useIsSmallScreen';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

const navbarItems = [
    {
        id: 1,
        title: 'Formación',
        link: 'knowledge',
        icon: 'fas fa-user-graduate',
    },
    {
        id: 2,
        title: 'Experiencia',
        link: 'experiences',
        icon: 'fas fa-file-signature',
    },
    {
        id: 3,
        title: 'Habilidades',
        link: 'skills',
        icon: 'fas fa-code',
    },
    {
        id: 4,
        title: 'Acerca de',
        link: 'about',
        icon: 'fas fa-user',
    },
];

const NavbarContainer = () => {
    const screenWidth = 761;
    const isSmallScreen = useIsSmallScreen(screenWidth);

    if (isSmallScreen) {
        return <NavbarMobile navbarItems={navbarItems} />;
    }

    return (
        <Navbar navbarItems={navbarItems} />
    );
};

export default NavbarContainer;
