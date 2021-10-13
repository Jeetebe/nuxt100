const wpNuxtFeed = require("wp-nuxt/lib/rss")

export default {
  //ssr: false,
  target: 'static',
  srcDir: "src",
 // head: {
    // script: [
    //   {
    //     src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
    //   },    
    // ],
    // link: [
    //   {
    //     rel: 'stylesheet',
    //     href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
    //   }
    // ]
  //},
 
  modules: [
    "wp-nuxt",
    "nuxt-stack",
    '@nuxt/image',
    "@nuxtjs/axios",
    "@nuxtjs/gtm",
    //'bootstrap-vue/nuxt'
    //'@nuxtjs/tailwindcss'
  ],
  buildModules: [
   // '@nuxtjs/tailwindcss'
    // '@nuxt/image',
  ],
  axios: {   
    baseURL: "https://apptotapi2.tk:4099/"
  },
  gtm: {
    id: "GTM-TPQ9C5Q"
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
  // webfonts: {
  //   custom: {
  //     families: [
  //       "Quicksand:500",
  //       "Roboto Mono:400"
  //     ],
  //     urls: [
  //       'https://cdn.jsdelivr.net/npm/typeface-quicksand@0.0.71/index.min.css',
  //       'https://cdn.jsdelivr.net/npm/roboto-mono-webfont@2.0.986/roboto-mono.min.css'
  //     ]
  //   }
  // },
  feed: [
    wpNuxtFeed({
      endpoint: "https://wp.kmr.io/wp-json"
    })
  ],
  wp: {
    endpoint: "https://wp.kmr.io/wp-json"
  }
}
