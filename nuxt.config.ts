export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'manifest',
          href: '/manifest.json',
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/nes.css@2.3.0/css/nes.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Press+Start+2P',
        },
        {
          rel: 'icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
          sizes: '180x180',
        },
        {
          rel: 'mask-icon',
          href: '/mask-icon.svg',
          color: '#212529',
        },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { name: 'description', content: 'Rogério Munhoz' },
        { name: 'theme-color', content: '#212529' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      pushBaseUrl: process.env.PUSH_BASE_URL,
      bsky: {
        query: process.env.BSKY_POSTS_QUERY,
        author: process.env.BSKY_POSTS_AUTHOR
      }
    },
  },
  appConfig: {
    title: 'Updates',
    subtitle: 'Updates sobre alguma coisa'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    'nuxt-og-image',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/device',
  ],
  pwa: {
    srcDir: '.',
    filename: 'service-worker.ts',
    strategies: 'injectManifest',
    injectRegister: 'auto',
    injectManifest: {
      injectionPoint: undefined,
    },
    registerType: 'prompt',
    devOptions: {
      enabled: true,
      type: 'module',
    },
    manifest: false,
  },
  ogImage: {
    fonts: ['Press+Start+2P'],
  },
  experimental: {
    emitRouteChunkError: false,
  },
})
