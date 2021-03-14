import PropTypes from 'prop-types';
import NavbarItem from './NavbarItem';

const NavbarMobile = ({ navbarItems }) => (
    <header className="fixed bottom-0 z-50 flex w-full px-4 py-2 border-t-2 border-indigo-700 justify-evenly mobileXs:px-2 mobileSm:px-0 bg-indigo-1000">
        {navbarItems.map((item) => (
            <NavbarItem key={item.id} {...item} />
        ))}
    </header>
);

NavbarMobile.propTypes = {
    navbarItems: PropTypes.instanceOf(Array).isRequired,
};

export default NavbarMobile;
