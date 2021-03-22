import { useState } from 'react';
import Tip from './utils/Tip';

const theme = {
    textColor: 'text-green-600',
    borderColor: 'border-green-600',
    bg: 'bg-green-600',
    buttonColor: 'green',
};

const CypressTip = () => {
    const [isShowTip, setIsShowTip] = useState(false);
    const opacityTransition = isShowTip ? 'opacity-1' : 'opacity-0';
    const tipPosition = isShowTip ? 'static' : 'absolute';

    return (
        <Tip
            title="Para UT"
            theme={theme}
            colorTitle="utilicé"
            isShowTip={isShowTip}
            slug="cypress-tip"
            setIsShowTip={setIsShowTip}
        >
            <div className={`cypressTipContainer transition-all duration-700 ease ${tipPosition} ${opacityTransition}`}>
                <div className="flex flex-col items-center my-5 mobileLg:my-0 mobileLg:mr-10">
                    <img
                        src="/assets/icons/cypress.svg"
                        alt="Cypress"
                        width="80px"
                        height="80px"
                        className="mb-4"
                    />
                    <span className="pl-1 text-lg rounded-md">
                        tests
                        <span className="px-1 ml-1 bg-green-600 rounded">passing</span>
                    </span>
                </div>
                <p className="text-center mobileLg:text-left">
                    <a href="https://www.cypress.io/" className="font-bold text-orange hover:underline">Cypress</a>
                    , un framework “todo en uno” que incluye librerías de aserciones, de mocks y pruebas e2e automáticas.
                </p>
            </div>
        </Tip>
    );
};

export default CypressTip;
