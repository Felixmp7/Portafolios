import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
import useIsSmallScreen from '../hooks/useIsSmallScreen';

const NavbarItem = ({
    title, link, icon, isLight,
}) => {
    const screenWidth = 761;
    const isSmallScreen = useIsSmallScreen(screenWidth);
    const offset = isSmallScreen ? 0 : -100;

    const textColor = isLight
        ? 'text-gray-600 hover:text-indigo-700'
        : 'text-indigo-700 hover:text-gray-100';
    return (
        <ScrollLink activeClass="active" to={link} spy smooth duration={800} offset={offset}>
            <div className={`flex flex-col items-center h-full transition duration-500 cursor-pointer ease ${textColor}`}>
                <span className="text-2xl tablet:hidden">
                    <i className={icon} />
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
    isLight: PropTypes.bool,
};
NavbarItem.defaultProps = {
    isLight: false,
};

export default NavbarItem;
