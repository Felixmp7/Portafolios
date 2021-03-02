import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';
import Logo from './utils/Logo';

const Navbar = ({ navbarItems }) => (
    <header className="py-2 text-white">
        <nav className="flex items-center justify-between h-full mx-auto containerXl">
            <Logo />
            <div className="flex w-2/3 tabletXl:w-auto justify-evenly">
                {navbarItems.map(({ id, title, link }) => (
                    <NavbarItem key={id} title={title} link={link} />
                ))}
            </div>
        </nav>
    </header>
);

Navbar.propTypes = {
    navbarItems: PropTypes.instanceOf(Array).isRequired,
};

export default Navbar;
