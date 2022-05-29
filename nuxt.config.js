export default {
    head: {
        title: 'AkaLientesS',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
            { name: 'author', content: 'Dawid Oleksiuk' },
            { name: 'description', content: 'Discover my Portfolio to get information about me and also inspiration.' },
            { hid: 'description', name: 'description', content: 'Discover my Portfolio to get information about me and also inspiration.' },
            { property: 'og:title', content: 'AkaLientesS' },
            { property: 'og:type', content: 'website' },
            { property: 'og:description', content: 'Discover my Portfolio to get information about me and also inspiration.' },
            { property: 'og:local', content: 'pl_PL' },
            { property: 'og:image', content: '/seoAkalientess.png' },
            { property: 'og:url', content: 'https://www.akalientess.com/' },
            { property: 'og:locale:alternate', content: 'en_US' },
            { name: 'twitter:site', content: '@DawidOleksiuk' },
            { name: 'twitter:title', content: 'AkaLientesS' },
            { name: 'twitter:description', content: 'Discover my Portfolio to get information about me and also inspiration.' },
            { name: 'twitter:image', content: '/seoAkalientess.png' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicon.png' },
            { rel: 'apple-touch-icon', href: '/favicon.png' }
        ]
    },
    components: true,
    image: {},
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxt/image'
    ],
    build: {
        extractCSS: {
            ignoreOrder: false
        }
    }
}
