export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','@nuxtjs/color-mode', '@nuxt/content','@pinia/nuxt','@vee-validate/nuxt'],
  alias:{
    assets: "/<rootDir>/assets"
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  colorMode:{
    classSuffix: ''
  },
  content: {
    highlight: {
      theme: 'github-dark',
      preload: [
        'vue',
      ]
    },
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  styleResources: {
    scss: [
      '~/assets/css/scss/global.scss',
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/scss/_vars.scss" as *;',
        },
      },
    },
  },
  
})
