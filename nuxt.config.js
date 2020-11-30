import conf from './conf';
export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  //transition: "default",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'CafèKafaen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Årlig pop-up restaurant, der overskudd doneres til en organisasjon eller stiftelse som trenger det.' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Cafè KaFaen' },
      { hid: 'og:locale', name: 'og:locale', content: 'nb_NO' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:description', name: 'og:description', content: 'Årlig pop-up restaurant, der overskudd doneres til en organisasjon eller stiftelse som trenger det.' },
      { hid: 'og:image', name: 'og:image', content: '~assets/imgfacebook/cafeface.jpg' },
      { hid: 'og:width', name: 'og:width', content: '1515' },
      { hid: 'og:height', name: 'og:height', content: '795' },
      { hid: 'og:url', name: 'og:url', content: 'https://www.cafekafaen.no/' },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQEAYAAABPYyMiAAAABmJLR0T///////8JWPfcAAAACXBIWXMAAABIAAAASABGyWs+AAAAF0lEQVRIx2NgGAWjYBSMglEwCkbBSAcACBAAAeaR9cIAAAAASUVORK5CYII=' },
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
    //'~plugins/script.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
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
