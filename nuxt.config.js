const pkg = require('./package');

module.exports = {
  // universal => server and client mode || spa => just client mode
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Corner Post Blog | Nuxt.js',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: pkg.description }],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet',href: 'https://bootstrap.com' } example
    ],
    /*  script:[
      {src:'https/cdn.....'} example
    ] */
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#666', height: '3px' },
  // loading: false, <= if you don't want to use a loading bar, set the loading value to false

  /*
   ** Global CSS
   */
  css: ['~/assets/style/bootstrap.min.css'],

  // dev: false  =>

  //  env:{....exp apiKey:.....  || baseURL:....} =>allows us to use our app globally

  env: {
    baseURL: 'https://corner-posts-nuxtjs-default-rtdb.firebaseio.com/',
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
