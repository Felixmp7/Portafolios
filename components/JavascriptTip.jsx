import { useState } from 'react';
import Tip from './utils/Tip';

const theme = {
    textColor: 'text-ssYellow',
    borderColor: 'border-ssYellow',
    bg: 'bg-ssYellow',
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
                <div className="flex items-center">
                    <p>
                        Actualmente escrito en
                        <span className="font-bold text-ssYellow"> Javascript</span>
                    </p>
                    <img
                        src="/assets/icons/javascript.png"
                        alt="Javascript"
                        width="50px"
                        height="50px"
                        className="ml-2"
                    />
                </div>
                <div className="flex items-center">
                    <p>
                        Será migrado a
                        <span className="font-bold text-blue-500"> Typescript</span>
                    </p>
                    <img
                        src="/assets/icons/typescript.svg"
                        alt="Typescript"
                        width="50px"
                        height="50px"
                        className="ml-2"
                    />
                </div>
            </div>
        </Tip>
    );
};

export default JavascriptTip;
