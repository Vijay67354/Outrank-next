module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#ffff00",
                secondary: "#060202",
            },
            animation: {
                'bounce-slow': 'bounce 3s linear infinite',
            }

        },
    },
    plugins: [],
}