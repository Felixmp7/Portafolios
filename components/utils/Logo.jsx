import { version } from '../../package.json';

const Logo = () => (
    <div className="relative flex items-center">
        <img src="/assets/logo/indigo.png" alt="logo" width="60px" height="60px" />
        <h1 className={'ml-2 text-xl font-light text-white\''}>
            React Developer
        </h1>
        <span
            className="absolute right-0 text-sm text-indigo-500 text-opacity-75"
            style={{ bottom: -5 }}
        >
            {`v-${version}`}
        </span>
    </div>
);

export default Logo;
