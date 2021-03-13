import { useState } from 'react';
import Tip from './utils/Tip';

const theme = {
    textColor: 'text-custom-yellow',
    borderColor: 'border-custom-yellow',
    bg: 'bg-custom-yellow',
    buttonColor: 'yellow',
};

const JavascriptTip = () => {
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
            <div className={`text-xl transition-all duration-700 ease tablet:static tablet:text-3xl ${tipPosition} ${opacityTransition}`}>
                <div className="flex items-center justify-center mt-2 mobileLg:justify-start mobileLg:mt-0">
                    <p>
                        Actualmente escrito en
                        <span className="font-bold text-custom-yellow"> Javascript</span>
                    </p>
                    <img
                        src="/assets/icons/javascript.png"
                        alt="Javascript"
                        width="50px"
                        height="50px"
                        className="w-8 ml-2 mobileLg:w-10"
                    />
                </div>
                <div className="flex items-center justify-center mt-2 mobileLg:justify-start mobileLg:mt-0">
                    <p>
                        Será migrado a
                        <span className="font-bold text-blue-500"> Typescript</span>
                    </p>
                    <img
                        src="/assets/icons/typescript.svg"
                        alt="Typescript"
                        width="50px"
                        height="50px"
                        className="w-8 ml-2 mobileLg:w-10"
                    />
                </div>
            </div>
        </Tip>
    );
};

export default JavascriptTip;
