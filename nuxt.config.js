import conf from './conf';
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  //transition: "default",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Cafè KaFaen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Årlig pop-up restaurant, der overskudd doneres til en organisasjon eller stiftelse som trenger det.' },
      { name: 'og:site_name', content: 'Cafè KaFaen' },
      { name: 'og:locale', content: 'nb_NO' },
      { name: 'og:type', content: 'website' },
      { name: 'og:description', content: 'Årlig pop-up restaurant, der overskudd doneres til en organisasjon eller stiftelse som trenger det.' },
      { name: 'og:image:width', content: '1515' },
      { name: 'og:image:height', content: '795' },
      { name: 'og:url', content: 'https://www.cafekafaen.no/' },
      { name: 'og:image', content: '/facebookImg.jpg' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Nunito:wght@400;900&display=swap' },
    ]
  },

  script: [
  {
    src:
  'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js'
  }     
  ],

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~assets/theme.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/vue-video-background',
      ssr: false
    }
  ],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics',
    '@nuxt/image'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    '@nuxt/content'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/cafekafaen/image/upload/'
    }
  },  
  
  googleAnalytics: {
    id: 'UA-135655018-1'
  },

  router: {
      async extendRoutes(routes, resolve) {
          const {$content} = require('@nuxt/content');
          const {pages} = await $content(conf.CONTENT).fetch();
          pages.forEach(page => {
              routes.push({
                  path: page.path,
                  component: resolve(__dirname, 'components/MetaPage.vue'),
                  meta: page,
              });
          });
      },
  },
}
