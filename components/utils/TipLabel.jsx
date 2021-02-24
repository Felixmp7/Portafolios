import PropTypes from 'prop-types';

const TipLabel = ({ text }) => (
    <div className="py-5 mx-auto containerXl">
        <span className="px-4 py-2 border border-indigo-800 rounded-full bg-primary">{text}</span>
    </div>
);

TipLabel.propTypes = {
    text: PropTypes.string,
};

TipLabel.defaultProps = {
    text: 'Tip del Portafolio',
};

export default TipLabel;
