<template>
    <header class="section">
        <div class="wrapper">
            <nav v-observe-visibility="{callback: isVisible, intersection: {threshold: 1}}" :class="['main-navigation', active, loaded]">
                <a href="/" class="logo">
                    <nuxt-img src="/brandLogo.png" width="80" height="80" alt-text="brand-logo" />
                </a>
                <ul>
                    <li v-for="link in links" :key="link.id">
                        <NuxtLink :to="{ path: '/', hash: link.route }">
                            <span>{{ link.name }}</span>
                        </NuxtLink>
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
import { TheNavigationData } from '../types/theNavigation/theNavigationData'

export default {
    name: 'TheNavigation',
    data (): TheNavigationData {
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
                setTimeout(() => {
                    this.active = 'is-active'
                    this.loaded = 'is-loaded'
                }, 1000)

                return
            }
            this.loaded = ''
        }
    }
}
</script>
