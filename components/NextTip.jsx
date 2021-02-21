import { useState } from 'react';
import Button from './utils/Button';
import TipLabel from './utils/TipLabel';

const NextTip = () => {
    const [isShowTip, setIsShowTip] = useState(false);
    const opacityTransition = isShowTip ? 'opacity-1' : 'opacity-0';
    const tipPosition = isShowTip ? 'static' : 'absolute';

    return (
        <>
            <TipLabel />
            <div id="next-tip" className="w-full border-t-4 border-b-4 border-primary">
                <div className="items-center p-5 mx-auto rounded-lg tablet:grid tablet:grid-cols-2 tablet:gap-10 containerXl">
                    <div className="relative flex flex-col items-center justify-center tablet:flex-row">
                        <span className="text-4xl text-primary tablet:leading-tight tablet:text-8xl">
                            Tecnologías
                            <span className="text-white"> usadas</span>
                        </span>
                        <div className={`${isShowTip ? 'hidden' : 'block'} top-0 flex items-center justify-center w-32 mt-5 mx-auto tablet:mt-20 tablet:absolute`}>
                            <Button
                                text="Descubrir"
                                onClick={isShowTip ? null : () => setIsShowTip(true)}
                            />
                        </div>
                    </div>
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
                </div>
            </div>
        </>
    );
};

export default NextTip;
