import { useState } from 'react';
import Tip from './utils/Tip';

const theme = {
    textColor: 'text-green-700',
    borderColor: 'border-green-700',
    bg: 'bg-green-700',
    buttonColor: 'green',
};

const CypressTip = () => {
    const [isShowTip, setIsShowTip] = useState(false);
    const opacityTransition = isShowTip ? 'opacity-1' : 'opacity-0';
    const tipPosition = isShowTip ? 'static' : 'absolute';

    return (
        <Tip
            title="El Portafolios"
            theme={theme}
            colorTitle="está"
            isShowTip={isShowTip}
            setIsShowTip={isShowTip ? null : () => setIsShowTip(true)}
        >
            <div className={`cypressTipContainer transition-all duration-700 ease ${tipPosition} ${opacityTransition}`}>
                <div className="flex flex-col items-center my-5 mobileLg:my-0 mobileLg:mr-10">
                    <img
                        src="/assets/icons/cypress.svg"
                        alt="Cypress"
                        width="80px"
                        height="80px"
                        className="mb-10"
                    />
                    <span className="pl-1 text-lg rounded-md">
                        tests
                        <span className="px-1 ml-1 bg-green-600 rounded">passing</span>
                    </span>
                </div>
                <p className="text-center mobileLg:text-left">
                    Testeado con
                    <span className="font-bold text-orange"> Cypress</span>
                    , un framework “todo en uno” que incluye librerías de aserciones, de mocks y pruebas e2e automáticas.
                </p>
            </div>
        </Tip>
    );
};

export default CypressTip;
