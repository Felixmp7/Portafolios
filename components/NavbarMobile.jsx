import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';

const NavbarMobile = ({ navbarItems }) => (
    <header
        data-cy="mobileNavbar"
        className="fixed bottom-0 z-50 grid w-full grid-cols-5 gap-0 border-t-2 border-indigo-700 bg-indigo-1000"
    >
        {navbarItems.map((item) => (
            <NavbarItem key={item.id} {...item} />
        ))}
    </header>
);

NavbarMobile.propTypes = {
    navbarItems: PropTypes.instanceOf(Array).isRequired,
};

export default NavbarMobile;
