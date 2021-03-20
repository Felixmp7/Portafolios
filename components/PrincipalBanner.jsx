import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import useIsSmallScreen from '../hooks/useIsSmallScreen';
import Logo from './utils/Logo';

const PrincipalBanner = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const isSmallScreen = useIsSmallScreen();
    const offset = isSmallScreen ? 0 : -100;
    const lefToCenterTransition = isLoaded ? 'left toCenter' : 'left';
    const opacityTransition = isLoaded ? 'opacity-1' : 'opacity-0';
    const rightToCenterTransition = isLoaded ? 'right toCenter' : 'right';
    const bottomToCenter = isLoaded ? 'bottom toCenter' : 'bottom';

    useEffect(() => setIsLoaded(true), []);

    return (
        <section id="principal-banner" className="w-full pt-20 mx-auto transition-all duration-1000 delay-1000 ease tablet:mt-10 containerXl">
            <div className="absolute top-0 left-0 mt-2 ml-2 tablet:hidden">
                <Logo />
            </div>
            <div
                className={`flex flex-col items-center justify-between w-5/6 mx-auto laptop:flex-row relative ${lefToCenterTransition}`}
            >
                <div className="w-64 h-64 overflow-hidden border-4 border-gray-300 rounded-full">
                    <img
                        src="/assets/yo.jpg"
                        alt="Felix Pacheco"
                        width="100%"
                        height="100%"
                    />
                </div>
                <h1 className="mt-4 leading-none text-center text-7xl laptop:text-right tablet:text-10xl">
                    ¡Bienvenido a mi
                    {' '}
                    <br className="hidden tablet:block" />
                    <span className="text-custom-purple">
                        Portafolio
                    </span>
                    !
                </h1>
            </div>
            <div className="w-5/6 mx-auto mt-10 text-2xl text-center tablet:text-3xl">
                <p className={`relative ${rightToCenterTransition}`}>
                    Mi nombre es Felix Pacheco, soy
                    {' '}
                    <span className="font-semibold text-custom-yellow">
                        Ingeniero
                    </span>
                    {' '}
                    y
                    {' '}
                    <span className="font-semibold text-green-500">
                        Desarrollador Front-End
                    </span>
                    {' '}
                    con
                    <span className="font-semibold text-react"> React JS.</span>
                </p>
                <div
                    className={`transition-all duration-6000 ease-out relative flex mx-auto my-5 tablet:w-1/2 text-7xl tablet:text-10xl justify-evenly ${opacityTransition}`}
                >
                    <i aria-hidden className="fas fa-user-graduate text-custom-yellow" />
                    <i aria-hidden className="text-green-600 fas fa-code" />
                    <i aria-hidden className="fab fa-react text-react" />
                </div>
                <p className={`relative ${bottomToCenter}`}>
                    En mi portafolios podrás visualizar mi trayectoria profesional, educación, y algún dato interesante sobre mi, si deseas conocer más... empecemos!
                </p>
                <div className={`flex flex-col items-center w-32 mx-auto mt-10 transition duration-3000 ease-in-out ${opacityTransition}`}>
                    <ScrollLink activeClass="active" to="training" spy smooth duration={800} offset={offset}>
                        <span className="button pink">
                            Comenzar
                        </span>
                    </ScrollLink>
                    <i aria-hidden className="mt-4 text-pink-700 animate-pulse fas fa-angle-double-down" />
                </div>
            </div>
        </section>
    );
};

export default PrincipalBanner;
