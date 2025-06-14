module.exports = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                arial: ['Arial', 'sans-serif'],
                sans: ['Inter', 'sans-serif'],
            },
            keyframes: {
                'fade-in-out': {
                    '0%, 100%': { opacity: '0', transform: 'translateY(-10px)' },
                    '10%, 90%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            animation: {
                'fade-in-out': 'fade-in-out 3s ease-in-out forwards'
            }
        },
    },
    plugins: [],
}