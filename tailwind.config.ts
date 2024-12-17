import defaultConfig from 'tailwindcss/stubs/config.full'
import animation from './tailwind/animation'

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    corePlugins: {
        preflight: false,
    },
    theme: {
        fontFamily: {
            roboto: ['Roboto Slab', defaultConfig.theme.fontFamily.sans],
            inter: ['Inter', defaultConfig.theme.fontFamily.sans],
        },
        extend: {
            colors: {},
            animation: animation.animation,
            keyframes: animation.keyframes,
            screens: {},
        },
    },
    plugins: [
        require('@mertasan/tailwindcss-variables'),
        require('tailwindcss-animate'),
        require('tailwind-scrollbar'),
    ],
}
