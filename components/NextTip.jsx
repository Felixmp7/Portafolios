import TipLabel from './utils/TipLabel';

const NextTip = () => (
    <>
        <TipLabel />
        <div className="w-full border-t-4 border-b-4 border-primary">
            <div className="grid items-center grid-cols-2 gap-10 p-5 mx-auto rounded-lg containerXl">
                <span className="leading-tight text-8xl">
                    Desarrollé este sitio con:
                </span>
                <div className="text-3xl text-center">
                    <div className="flex items-center mb-4 bg-white rounded-md justify-evenly">
                        <img src="/assets/icons/next-js.svg" alt="Next Icon" width="200px" height="200px" />
                        <img src="/assets/icons/tailwind-css.svg" alt="Tailwind Icon" width="300px" height="300px" />
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

export default NextTip;
