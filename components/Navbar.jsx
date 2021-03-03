import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';
import Logo from './utils/Logo';

const Navbar = ({ navbarItems, isLight }) => {
    const bg = isLight ? 'bg-white' : '';
    const shadow = isLight ? 'shadow-simple' : '';

    return (
        <header className={`w-full z-50 transition-all duration-500 ease fixed px-8 py-2 text-white desktop:px-0 ${bg} ${shadow}`}>
            <nav className="flex items-center justify-between h-full mx-auto containerXl">
                <Logo isLight={isLight} />
                <div className="flex w-2/3 tabletXl:w-auto justify-evenly">
                    {navbarItems.map((item) => (
                        <NavbarItem key={item.id} {...item} isLight={isLight} />
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
