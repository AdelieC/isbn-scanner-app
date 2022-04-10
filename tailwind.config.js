module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx,svg}',
        './src/*.{js,jsx,ts,tsx,svg}',
        './src/**/**/*.{js,jsx,ts,tsx,svg}',
        './src/**/**/**/*.{js,jsx,ts,tsx,svg}',
        './public/**.{js,jsx,ts,tsx,svg,html}',
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            serif: ['CrimsonText', 'serif'],
            heading: ['UnicaOne', 'cursive'],
        },
        extend: {
            width: {},
            height: {
                '50vh': '50vh',
            },
            spacing: {
                '100vh': '100vh',
                '100vw': '100vw',
                half: '50%',
                72: '18rem',
                80: '20rem',
                88: '22rem',
            },
            colors: {
                primaryLight: '#F8EADD',
                primaryDark: '#AC7B84',
                secondaryDark: '#DF9A57',
                secondaryLight: '#FFFFFC',
                tertiaryDark: '#23272F',
                tertiaryLight: '#EFCDAA',
                successDark: '#048BA8',
                successLight: '#FFFFFC',
                alertDark: '#B84A62',
                alertLight: '#FFFFFC',
            },
            opacity: {
                40: '.40',
            },
            backgroundImage: {},
            boxShadow: {
                innerXl: 'inset 0px -20px 25px -5px rgba(0, 0, 0, 0.1)',
            },
            maxWidth: {
                '80vw': '80vw',
            },
            animation: {
                'fade-in': 'fade-in 0.3s ease-in-out forwards',
                wiggle: 'wiggle 0.3s ease-in-out infinite',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
        },
    },
    plugins: [],
};
