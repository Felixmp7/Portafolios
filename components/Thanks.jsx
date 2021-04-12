// import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import useIsInView from '../hooks/useIsInView';

const theme = {
    textColor: 'text-white',
    borderColor: 'border-pink-700',
    bg: 'bg-none',
    buttonColor: 'pink',
};

const Thanks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { ref, opacityEffect } = useIsInView();
    const opacityTransition = isOpen ? 'opacity-1' : 'opacity-0';
    // const router = useRouter();
    // const isEnglishLanguage = router.locale === 'en';
    const { t } = useTranslation('common');

    return (
        <section
            ref={ref}
            data-cy="thanks"
            className={`my-16 w-full border-t-4 border-b-4 ${theme.borderColor} ${theme.bg} ${opacityEffect}`}
        >
            <div className="items-center p-5 mx-auto rounded-lg tabletXl:grid tabletXl:grid-cols-2 tabletXl:gap-10 containerXl">
                <div className="relative flex flex-col items-center justify-center mb-2 mobileLg:mb-0">
                    <span className={`text-2xl mobile:text-4xl leading-none tabletXl:text-8xl ${theme.textColor}`}>
                        Agradecimiento
                        <span className="block text-center text-custom-purple"> especial a</span>
                    </span>
                    <div className={`${isOpen ? 'hidden' : 'block'} flex items-center justify-center w-32 mt-5 mx-auto`}>
                        <button
                            type="button"
                            className={`button ease ${theme.buttonColor}`}
                            onClick={isOpen ? null : () => setIsOpen(true)}
                        >
                            {t('discoverButton')}
                        </button>
                    </div>
                </div>
                <div className={`mt-3 text-center transition duration-500 ease text-xl tabletXl:text-3xl tabletXl:mt-0 tabletXl:text-left ${opacityTransition}`}>
                    <p>
                        <span className="underline text-custom-purple"> Eliana Guerrero </span>
                        y
                        <a href="https://sofiamonroy.com" target="__blank" className="text-yellow-500 underline"> Sofía Monroy </a>
                        por sus aportes, sugerencias y orientaciones en cuanto al diseño del portafolio y creación del logo utilizando:
                    </p>
                    <div className="flex justify-center mx-auto mt-5 mobileLg:w-1/3">
                        <a href="https://www.adobe.com/la/products/photoshop/free-trial-download.html" target="__blank">
                            <img
                                src="/assets/icons/photoshop.svg"
                                alt="Photoshop"
                                width={75}
                                height={75}
                                className="w-10 h-10 mr-5 tabletXl:w-16 tabletXl:h-16"
                            />
                        </a>
                        <a href="https://www.adobe.com/la/products/illustrator.html" target="__blank">
                            <img
                                src="/assets/icons/illustrator.svg"
                                alt="Ilustrator"
                                width={75}
                                height={75}
                                className="w-10 h-10 tabletXl:w-16 tabletXl:h-16"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Thanks;
