<template>
    <header>
        <div class="wrapper">
            <nav v-observe-visibility="isVisible" :class="['main-navigation', active, loaded]">
                <a href="/" class="logo">
                    <nuxt-img src="/brandLogo.png" width="80" height="80" />
                </a>
                <ul>
                    <li v-for="link in links" :key="link.id">
                        <a :href="[link.route]">
                            <span>{{ link.name }}</span>
                        </a>
                    </li>
                </ul>
                <button class="button">
                    <span>Contact me</span>
                </button>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
export default {
    name: 'TheNavigation',
    data (): {active: string, loaded: string, links: {id: string, route: string, name: string}[]} {
        return {
            active: '',
            loaded: '',
            links: [
                {
                    id: '1',
                    route: '#about-me',
                    name: 'ABOUT ME'
                },
                {
                    id: '2',
                    route: '#facts',
                    name: 'FACTS'
                },
                {
                    id: '3',
                    route: '#my-work',
                    name: 'MY WORK'
                }
            ]
        }
    },
    methods: {
        isVisible (visible: boolean) {
            if (visible) {
                this.active = 'is-active'
                this.loaded = 'is-loaded'

                return
            }
            this.loaded = ''
        }
    }
}
</script>
