module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'media',
    theme: {
        fontFamily: {
            serif: ['CrimsonText', 'serif'],
            heading: ['UnicaOne', 'cursive'],
        },
        extend: {
            width: {},
            height: {},
            spacing: {
                '100vh': '100vh',
                '100vw': '100vw',
                half: '50%',
                72: '18rem',
                80: '20rem',
                88: '22rem',
            },
            colors: {
                primaryLight: '#E3CAA6',
                primaryDark: 'rgb(40 44 52)',
                secondaryDark: '#935FA7',
                secondaryLight: '#ffffff',
                tertiaryDark: '#AC7B84',
                tertiaryLight: '#ffffff',
                successDark: '#048BA8',
                successLight: '#ffffff',
                alertDark: '#B84A62',
                alertLight: '#ffffff',
            },
            backgroundImage: {
                hero: "url('/public/open-book-background.webp')",
            },
            boxShadow: {
                innerXl: 'inset 0px -20px 25px -5px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
};
