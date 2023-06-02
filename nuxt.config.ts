// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    modules: ['@nuxtjs/i18n', '@nuxtjs/google-fonts', 'nuxt-icons'],
    i18n: {
        locales: [
            {
                code: 'en',
                name: 'English'
            },
            {
                code: 'tc',
                name: "繁體版"
            }
        ],
        strategy: 'prefix',
        defaultLocale: 'tc',
        skipSettingLocaleOnNavigate: true
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    googleFonts: {
        families: {
          Roboto: true,
          'Josefin+Sans': true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100]
          },
        }
    }
})
