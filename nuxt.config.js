export default {
  head: {
    title: 'MILL',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'MILLは2021年7月に発足したデザインスタジオです。Web構築をはじめとするUI設計、施作提案やCI・VI、ビジュアルデザイン、プロモーションムービーを含む撮影・編集業務をメインにお客様のブランディングを包括的にディレクションいたします。お客様のかけがえのないブランドの魅力を多角的に観察し、新しい見え方やより研鑽された姿をご提案いたします。' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'MILL,ミル,UI,CI/VI,グラフィックデザイン,プロモーションムービー,撮影/編集' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'MILL' },
      { hid: 'og:type', property: 'og:type', content: 'company' },
      { hid: 'og:url', property: 'og:url', content: 'https://mill.kai-you.co.jp' },
      { hid: 'og:title', property: 'og:title', content: 'MILL' },
      { hid: 'og:description', property: 'og:description', content: 'MILLは2021年7月に発足したデザインスタジオです。Web構築をはじめとするUI設計、施作提案やCI・VI、ビジュアルデザイン、プロモーションムービーを含む撮影・編集業務をメインにお客様のブランディングを包括的にディレクションいたします。お客様のかけがえのないブランドの魅力を多角的に観察し、新しい見え方やより研鑽された姿をご提案いたします。' },
      { hid: 'og:image', property: 'og:image', content: 'https://mill.kai-you.co.jp/img/mill-kv.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://mill.kai-you.co.jp' },
      { name: 'twitter:title', content: 'MILL' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/32x32.ico', sizes: '32x32' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/16x16.ico', sizes: '16x16' }
    ]
  },

  css: [
    { src: '~/src/sass/style.scss', lang: 'scss' },
  ],

  plugins: [
    { src: '~/plugins/v-smooth-scroll', mode: 'client' }
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
  ],

  modules: [
  ],

  build: {
  },

  target: 'static',

  router: {
    base: '/my-test/'
  },
}
