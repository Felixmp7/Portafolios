import TitleWithLine from './utils/TitleWithLine';

const theme = {
    textColor: 'text-red-600',
    borderColor: 'border-red-600',
};

const Contact = () => (
    <section id="contact" className="w-full mx-auto mt-10 mb-20 text-2xl containerXl">
        <TitleWithLine text="Envíame" colorText="un email" theme={theme} />
        <div className="pt-10">
            <p>
                Mientras aprendo a desarrollar un backend con
                <span className="font-bold text-green-600"> Node JS </span>
                para poder implementar un formulario de contacto digno, puedes dejarme un email haciendo click en el siguiente enlace:
                <a
                    className="inline-flex items-center ml-1 text-red-500 hover:underline"
                    href="mailto:devfex.19@gmail.com?Subject=Contacto%20desde%20el%20Portafolios"
                >
                    Enviar Email
                    <i aria-hidden className="pl-2 fas fa-paper-plane" />
                </a>
            </p>
        </div>
    </section>
);

export default Contact;
