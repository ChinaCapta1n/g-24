module.exports = {
    content: [
       "./components/**/*.{js,vue,ts}",
       "./layouts/**/*.vue",
       "./pages/**/*.vue",
       "./plugins/**/*.{js,ts}",
       "./nuxt.config.{js,ts}",
       "./app.vue",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'home-banner': 'url(~/assets/images/home/banner_image.jpeg)'
            },
            keyframes: {
                flashing: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                }
            },
            animation: {
                flashing: 'flashing 1s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}