export default {
  ssr: 'false',
  target: 'static',
  router: {
    base: '/ra/'
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Rightapplications',
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#000000' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }, типовой description
      { hid: 'description', name: 'description', content: 'Rightapplications offers a wide spectrum of IT services ranging from consulting, web application design, development, server migration and graphic designing to offshore IT Staffing.' },
      { hid: 'keywords', name: 'keywords', content: 'graphic design, UX/IX design, Front-end development, Ecommerce, Back-End development, Mobile development, Content management Integration, Server migration, Consulting, Project management' },
      { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // '~assets/css/bootstrap-grid.css' // подключение css папку assets
    // '~/static/css/bootstrap-grid.css' // подключение css через папку static
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  generate: {
    routes (callback) {
      const posts = require('./posts.json')
      const routes = posts.map(post => `/post/${post.id}`)
      callback(null, routes)
    }
  }
}
