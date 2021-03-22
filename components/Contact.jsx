import TitleWithLine from './utils/TitleWithLine';
import useIsInView from '../hooks/useIsInView';

const theme = {
    textColor: 'text-red-600',
    borderColor: 'border-red-600',
};

const Contact = () => {
    const { ref, opacityEffect } = useIsInView();
    return (
        <section ref={ref} id="contact" className={`w-full mx-auto mt-10 mb-12 tablet:text-2xl mobileContainer containerXl ${opacityEffect}`}>
            <TitleWithLine text="Envíame" colorText="un email" theme={theme} />
            <div className="mt-4">
                <p>
                    Por el momento puedes enviarme un email haciendo click aquí:
                    {' '}
                    <a
                        className="inline-flex items-center text-red-500 hover:underline"
                        href="mailto:devfex.19@gmail.com?subject=He revisado tu portafolio!&body=Hola, Felix!"
                    >
                        Enviar Email
                        <i aria-hidden className="pl-2 fas fa-paper-plane" />
                    </a>
                </p>
            </div>
        </section>
    );
};

export default Contact;
