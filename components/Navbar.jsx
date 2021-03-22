import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';
import Logo from './utils/Logo';

const Navbar = ({ navbarItems, isLight }) => {
    const lightClasses = isLight ? 'bg-indigo-1000 border-indigo-700' : 'border-transparent';

    return (
        <header
            data-cy="navbar"
            className={`w-full z-50 transition-all border-b-2 duration-500 ease fixed top-0 px-8 py-2 desktop:px-0 ${lightClasses}`}
        >
            <nav className="flex items-center justify-between h-full mx-auto containerXl">
                <Logo isLight={isLight} />
                <div className="flex w-2/3 tabletXl:w-auto justify-evenly">
                    {navbarItems.map((item) => (
                        <NavbarItem key={item.id} {...item} />
                    ))}
                </div>
            </nav>
        </header>
    );
};

Navbar.propTypes = {
    navbarItems: PropTypes.instanceOf(Array).isRequired,
    isLight: PropTypes.bool.isRequired,
};

export default Navbar;
