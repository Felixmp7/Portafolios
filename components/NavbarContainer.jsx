import useIsSmallScreen from '../hooks/useIsSmallScreen';
import useIsScrollPosition from '../hooks/useIsScrollPosition';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

const navbarItems = [
    {
        id: 1,
        title: 'Formación',
        link: 'training',
        icon: 'fas fa-user-graduate',
        textColor: 'text-react',
    },
    {
        id: 2,
        title: 'Experiencia',
        link: 'experiences',
        icon: 'fas fa-file-signature',
        textColor: 'text-custom-yellow',
    },
    {
        id: 3,
        title: 'Habilidades',
        link: 'skills',
        icon: 'fas fa-code',
        textColor: 'text-pink-700',
    },
    {
        id: 4,
        title: 'Acerca de',
        link: 'about',
        icon: 'fas fa-user',
        textColor: 'text-custom-purple',
    },
    {
        id: 5,
        title: 'Contacto',
        link: 'contact',
        icon: 'fas fa-envelope',
        textColor: 'text-custom-purple',
    },
];

const NavbarContainer = () => {
    const screenWidth = 762;
    const scrollY = 40;
    const isSmallScreen = useIsSmallScreen(screenWidth);
    const isLight = useIsScrollPosition(scrollY);

    if (isSmallScreen) {
        return <NavbarMobile navbarItems={navbarItems} />;
    }

    return (
        <Navbar navbarItems={navbarItems} isLight={isLight} />
    );
};

export default NavbarContainer;
