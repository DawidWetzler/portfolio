export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dawid wecler Wetzler',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'wecler.me',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '' // todo
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:locale',
        name: 'og:locale',
        content: 'en',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Web developer, sometimes a designer based in Germany.'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Web developer, sometimes a designer based in Germany.',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Web developer, sometimes a designer based in Germany.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '' // todo
      },
      {
        hid: 'title',
        name: 'title',
        content: 'Dawid wecler Wetzler'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Web developer, sometimes a designer based in Germany.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'web, developer, webdeveloper, software, engineer, design, programmer, seo, data, nodejs, php, vue, react, mysql, database, dawid, wecler, wetzler, firespot, teamspeak, ts3, nuxtjs, nextjs'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swapp' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
