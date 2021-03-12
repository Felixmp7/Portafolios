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
                Mientras aprendo a implementar un formulario de contacto con
                <span className="font-bold text-green-600"> Next JS </span>
                puedes enviar un email haciendo click aquí:
                <a
                    className="inline-flex items-center ml-1 text-red-500 hover:underline"
                    href="mailto:devfex.19@gmail.com?Subject=Me%interesa%tu%trabajo"
                >
                    Enviar Email
                    <i aria-hidden className="pl-2 fas fa-paper-plane" />
                </a>
            </p>
        </div>
    </section>
);

export default Contact;
