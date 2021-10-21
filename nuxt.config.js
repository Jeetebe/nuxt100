const wpNuxtFeed = require("wp-nuxt/lib/rss")

export default {
  target: 'static',
  srcDir: "src",

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
