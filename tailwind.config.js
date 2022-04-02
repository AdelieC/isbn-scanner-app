module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx,svg}',
        './src/*.{js,jsx,ts,tsx,svg}',
        './src/**/**/*.{js,jsx,ts,tsx,svg}',
        './src/**/**/**/*.{js,jsx,ts,tsx,svg}',
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
                tertiaryDark: 'rgb(40 44 52)',
                tertiaryLight: '#EFCDAA',
                successDark: '#048BA8',
                successLight: '#FFFFFC',
                alertDark: '#B84A62',
                alertLight: '#FFFFFC',
            },
            opacity: {
                40: '.40',
            },
            backgroundImage: {
                hero: "url('./assets/img/open-book-background.webp')",
            },
            boxShadow: {
                innerXl: 'inset 0px -20px 25px -5px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
};
