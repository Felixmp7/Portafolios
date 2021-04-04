import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Link as ScrollLink } from 'react-scroll';
import useIsSmallScreen from '../hooks/useIsSmallScreen';

const NavbarItem = ({
    title, link, icon, titleTranslated,
}) => {
    const isSmallScreen = useIsSmallScreen();
    const router = useRouter();
    const isEnglishLanguage = router.locale === 'en';
    const offset = isSmallScreen ? 0 : -100;

    return (
        <ScrollLink data-cy={`navItem-${link}`} activeClass="active" to={link} spy smooth duration={800} offset={offset}>
            <div className="flex flex-col items-center h-full py-1 text-indigo-700 transition duration-500 cursor-pointer ease hover:text-gray-100">
                <span className="text-2xl tablet:hidden">
                    <i aria-hidden className={icon} />
                </span>
                <span className="navbarItem">
                    {isEnglishLanguage ? titleTranslated : title}
                </span>
            </div>
        </ScrollLink>
    );
};

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
    titleTranslated: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default NavbarItem;
