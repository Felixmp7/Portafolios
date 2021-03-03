import PropTypes from 'prop-types';

const Tip = ({
    theme, children, isShowTip, setIsShowTip, title, colorTitle,
}) => {
    const tipLabelColor = `${theme.bg} ${theme.borderColor}`;
    return (
        <>
            <div className="py-5 mx-auto containerXl">
                <span className={`px-4 py-2 border rounded-full ${tipLabelColor}`}>Tip del Portafolios</span>
            </div>
            <div className={`w-full border-t-4 border-b-4 ${theme.borderColor}`}>
                <div className="items-center p-5 mx-auto rounded-lg tablet:grid tablet:grid-cols-2 tablet:gap-10 containerXl">
                    <div className="relative flex flex-col items-center justify-center">
                        <span className={`text-4xl tablet:leading-tight tablet:text-8xl ${theme.textColor}`}>
                            {title}
                            <span className="text-white">{` ${colorTitle}`}</span>
                        </span>
                        <div className={`${isShowTip ? 'hidden' : 'block'} flex items-center justify-center w-32 mt-5 mx-auto`}>
                            <button
                                type="button"
                                className="button primary ease"
                                onClick={isShowTip ? null : () => setIsShowTip(true)}
                            >
                                Descubrir
                            </button>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};

Tip.propTypes = {
    theme: PropTypes.instanceOf(Object).isRequired,
    title: PropTypes.string.isRequired,
    colorTitle: PropTypes.string.isRequired,
    isShowTip: PropTypes.bool.isRequired,
    setIsShowTip: PropTypes.func.isRequired,
};

export default Tip;
