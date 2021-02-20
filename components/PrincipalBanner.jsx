import React from 'react';
import Button from './utils/Button';
// import PropTypes from 'prop-types';

const PrincipalBanner = () => (
    <section id="principal-banner" className="w-full mx-auto mt-10 containerXl">
        <div className="flex flex-col items-center justify-between w-5/6 mx-auto laptop:flex-row">
            <div className="w-64 h-64 overflow-hidden border-4 border-gray-300 rounded-full">
                <img
                    src="/assets/yo.jpg"
                    alt="Banner"
                    width="100%"
                    height="100%"
                    title="Photo by James Harrison on Unsplash"
                />
            </div>
            <h1 className="mt-4 leading-none text-center text-7xl laptop:text-right tablet:text-10xl">
                ¡Bienvenido a mi
                <br />
                <span className="text-primary">
                    Portafolio
                </span>
                !
            </h1>
        </div>
        <div className="w-5/6 mx-auto mt-10 text-2xl text-center tablet:text-3xl tablet:text-left">
            <p>
                Mi nombre es Felix Pacheco, soy
                {' '}
                <span className="font-semibold text-ssYellow">
                    Ingeniero
                </span>
                {' '}
                y
                {' '}
                <span className="font-semibold text-ssGreen">
                    Desarrollador Front-End
                </span>
                {' '}
                con
                <span className="font-semibold text-ssLightblue"> React JS.</span>
            </p>
            <div className="flex w-1/2 mx-auto my-5 text-7xl tablet:text-10xl justify-evenly">
                <i className="fas fa-user-graduate text-ssYellow" />
                <i className="fas fa-code text-ssGreen" />
                <i className="fab fa-react text-ssLightblue" />
            </div>
            <p>
                En mi portafolios podrás visualizar mi trayectoria profesional, educación, y algún dato interesante sobre mi, si deseas conocer más... empecemos!
            </p>
            <div className="w-32 mx-auto mt-10">
                <Button text="Comenzar" />
            </div>
        </div>
    </section>
);

export default PrincipalBanner;
