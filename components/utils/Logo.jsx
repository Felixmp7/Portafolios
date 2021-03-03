import PropTypes from 'prop-types';

const Logo = ({ isLight }) => {
    const textColor = isLight ? 'text-gray-800' : 'text-white';
    return (
        <div className="flex items-center">
            <img src="/assets/logo/white.png" alt="logo" width="60px" height="60px" />
            <h1 className={`ml-2 text-xl font-light ${textColor}`}>
                React Developer
            </h1>
        </div>
    );
};

Logo.propTypes = {
    isLight: PropTypes.bool,
};

Logo.defaultProps = {
    isLight: false,
};

export default Logo;
