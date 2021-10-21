const wpNuxtFeed = require("wp-nuxt/lib/rss")

export default {
  target: 'static',
  srcDir: "src",
  head: {
    title: "Sim 4G Mobifone",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Ship Sim 4G miễn phí"
      },
      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      { hid: "twitter:site", name: "twitter:site", content: "@nuxt_js" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://nuxtjs.org"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "MobiFone Miền Tây - Chợ sim số"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Ship Sim 4G miễn phí"
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://i.imgur.com/NH3Vo1n.jpg"
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: "og:site_name", property: "og:site_name", content: "Nuxt" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://nuxtjs.org"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "MobiFone Miền Tây - Chợ sim số"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Ship Sim 4G miễn phí"
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://i.imgur.com/NH3Vo1n.jpg"
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "https://i.imgur.com/NH3Vo1n.jpg"
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "NuxtJS"
      }
    ],  
  },
  modules: [
    "wp-nuxt",
    "nuxt-stack",
    '@nuxt/image',
    "@nuxtjs/axios",
    "@nuxtjs/gtm",
    //'bootstrap-vue/nuxt'
    '@nuxtjs/tailwindcss'
  ],
  buildModules: [
   // '@nuxtjs/tailwindcss'
    // '@nuxt/image',
  ],
  axios: {   
    baseURL: "https://apptotapi2.tk:4099/"
  },
  gtm: {
    id: "GTM-5KWF9DK"
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {}
  },
  styles: ["styles/index.scss"],
  styleResources: {
    scss: ["styles/theme.scss"]
  },
  stack: {
    name: "Sim 4G 0 đồng",
    host: "https://nuxtstack.org/",
    description: "Sim 4G 0 đồng - MobiFone Miền Tây",
    keywords: ["nuxt", "stack"],
    backgroundColor: "#FFFFFF",
    themeColor: "#ffff",
    preconnect: [
      "https://fonts.gstatic.com",
      "https://fonts.googleapis.com"
    ]
  },
  feed: [
    wpNuxtFeed({
      endpoint: "https://wp.kmr.io/wp-json"
    })
  ],
  wp: {
    endpoint: "https://wp.kmr.io/wp-json"
  }
}
