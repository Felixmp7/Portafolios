import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';

const NavbarItem = ({ title, link, icon }) => (
    <ScrollLink activeClass="active" to={link} spy smooth duration={800}>
        <div className="flex flex-col items-center">
            <i aria-hidden className={`text-2xl ${icon}`} />
            <span className="h-full transition duration-500 cursor-pointer navbarItem ease focus:outline-none hover:text-white">{title}</span>
        </div>
    </ScrollLink>
);

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default NavbarItem;
