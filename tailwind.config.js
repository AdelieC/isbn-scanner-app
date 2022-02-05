module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'media',
    theme: {
        fontFamily: {
            serif: ['CrimsonText', 'serif'],
            heading: ['UnicaOne', 'cursive'],
        },
        colors: {
            primaryLight: 'WhiteSmoke',
            primaryDark: 'DarkSlateGrey',
            secondaryDark: 'DarkSlateBlue',
            secondaryLight: 'White',
            successDark: 'Turquoise',
            successLight: 'White',
            alertDark: 'IndianRed',
            alertLight: 'White',
        },
        extend: {
            width: {},
            height: {},
            spacing: {
                '100vh': '100vh',
                '100vw': '100vw',
            },
        },
    },
    plugins: [],
};
