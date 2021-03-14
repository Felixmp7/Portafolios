import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
import useIsSmallScreen from '../hooks/useIsSmallScreen';

const NavbarItem = ({
    title, link, icon,
}) => {
    const screenWidth = 761;
    const isSmallScreen = useIsSmallScreen(screenWidth);
    const offset = isSmallScreen ? 0 : -100;

    return (
        <ScrollLink data-cy={`navItem-${link}`} activeClass="active" to={link} spy smooth duration={800} offset={offset}>
            <div className="flex flex-col items-center h-full transition duration-500 cursor-pointer ease text-indigo-700 hover:text-gray-100">
                <span className="text-2xl tablet:hidden">
                    <i aria-hidden className={icon} />
                </span>
                <span className="navbarItem">
                    {title}
                </span>
            </div>
        </ScrollLink>
    );
};

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default NavbarItem;
