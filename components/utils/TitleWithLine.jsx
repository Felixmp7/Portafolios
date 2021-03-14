import PropTypes from 'prop-types';

const TitleWithLine = ({ text, colorText, theme }) => (
    <>
        <h2 className="text-5xl font-semibold tablet:text-8xl">
            {text}
            <span className={theme.textColor}>{` ${colorText}`}</span>
        </h2>
        <div className={`w-5/6 mb-5 border-4 tablet:mb-0 tablet:w-1/3 ${theme.borderColor}`} />
    </>
);

TitleWithLine.propTypes = {
    theme: PropTypes.instanceOf(Object).isRequired,
    text: PropTypes.string,
    colorText: PropTypes.string.isRequired,
};

TitleWithLine.defaultProps = {
    text: '',
};

export default TitleWithLine;
