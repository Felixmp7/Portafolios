import { useState } from 'react';
import Tip from './utils/Tip';

const theme = {
    textColor: 'text-primary',
    borderColor: 'border-primary',
    bg: 'bg-primary',
};

const NextTip = () => {
    const [isShowTip, setIsShowTip] = useState(false);
    const opacityTransition = isShowTip ? 'opacity-1' : 'opacity-0';
    const tipPosition = isShowTip ? 'static' : 'absolute';

    return (
        <Tip
            title="Tecnologías"
            theme={theme}
            colorTitle="usadas"
            isShowTip={isShowTip}
            setIsShowTip={isShowTip ? null : () => setIsShowTip(true)}
        >
            <div className={`text-xl text-center transition-all duration-700 ease tablet:static tablet:text-3xl ${tipPosition} ${opacityTransition}`}>
                <div className="flex items-center mb-4 bg-white rounded-md justify-evenly">
                    <img
                        src="/assets/icons/next-js.svg"
                        alt="Next Icon"
                        width="200px"
                        height="200px"
                        className="w-1/3"
                    />
                    <img
                        src="/assets/icons/tailwind-css.svg"
                        alt="Tailwind Icon"
                        width="300px"
                        height="300px"
                        className="w-1/3"
                    />
                </div>
                <p>
                    Son de los últimos
                    <span className="text-ssYellow"> frameworks </span>
                    con los que he trabajado y me han gustado mucho.
                </p>
            </div>
        </Tip>
    );
};

export default NextTip;
