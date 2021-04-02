module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
        options: {
            whitelist: [
                'h-auto',
                'border-custom-purple',
                'hover:bg-custom-purple',
                'col-span-4',
                'tabletLg:col-span-2',
                'h-48',
                'border-green-700',
                'hover:bg-green-700',
                'tabletLg:col-span-4',
                'h-64',
                'border-pink-700',
                'hover:bg-pink-700',
                'border-custom-yellow',
                'hover:bg-custom-yellow',
                'border-react',
                'hover:bg-react',
                'tabletLg:col-span-3',
                'col-span-2',
                'border-orange',
                'hover:bg-orange',
                'h-72',
                'tabletLg:col-span-7',
                'tabletLg:col-span-5',
                'tabletLg:col-span-8',
                'bg-custom-purple',
                'text-custom-purple',
                'bg-green-500',
                'text-green-500',
                'border-green-500',
                'text-red-500',
                'border-red-500',
                'bg-custom-yellow',
                'bg-opacity-25',
                'text-custom-yellow',
                'bg-blue-500',
                'text-blue-500',
                'border-blue-500',
                'bg-red-500',
                'text-html',
                'text-css',
                'text-javascript',
                'text-responsive',
                'text-react',
                'text-redux',
                'text-white',
                'text-tailwind',
                'text-orange',
                'text-pink-700',
                'bg-red-700',
                'bg-red-600',
                'border-red-800',
                'red',
                'text-pink-500',
            ],
        },
    },
    theme: {
        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            tiny: '.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '2.5rem',
            '6xl': '2.75rem',
            '7xl': '3rem',
            '8xl': '3.5rem',
            '9xl': '4rem',
            '10xl': '5rem',
        },
        backgroundColor: (theme) => ({
            ...theme('colors'),
            'indigo-1000': '#18153a',
            'custom-purple': '#582DE8',
            'custom-purple-900': '#4022ad',
            'custom-yellow': '#f2b42a',
            orange: '#ff7a59',
            modal: '#00000044',
            react: '#29ABE2',
        }),
        textColor: (theme) => ({
            ...theme('colors'),
            'custom-purple': '#582DE8',
            'custom-yellow': '#f2b42a',
            tailwind: '#13CDB5',
            orange: '#ff7a59',
            html: '#FC4A0C',
            css: '#2096F3',
            javascript: '#EFDB4F',
            responsive: '#016DF0',
            react: '#29ABE2',
            redux: '#764ABC',
        }),
        borderColor: (theme) => ({
            ...theme('colors'),
            'custom-purple': '#582DE8',
            'custom-purple-900': '#4022ad',
            'custom-yellow': '#f2b42a',
            react: '#29ABE2',
            orange: '#ff7a59',
        }),
        screens: {
            mobileXs: '350px',
            mobileSm: '420px',
            mobile: '520px',
            mobileLg: '600px',
            tablet: '762px',
            tabletLg: '880px',
            tabletXl: '952px',
            laptop: '1024px',
            laptopLg: '1160px',
            laptopXl: '1360px',
            desktop: '1396px',
        },
        extend: {
            width: {
                97: '97%',
            },
            height: {
                72: '20rem',
            },
            minHeight: {
                'extra-screen': '120vh',
            },
            boxShadow: {
                simple: '0px 3px 10px rgba(75, 94, 107, 0.3)',
                marked: '0px 0px 20px rgba(0, 0, 0, 0.1)',
            },
            transitionDuration: {
                0: '0ms',
                2000: '2000ms',
                3000: '3000ms',
                4000: '4000ms',
                6000: '6000ms',
            },
        },
    },
    variants: {},
    plugins: [],
};
