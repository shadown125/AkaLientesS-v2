<template>
    <header class="section">
        <div class="wrapper">
            <nav v-observe-visibility="{callback: isVisible, intersection: {threshold: 1}}" :class="['main-navigation', active, windowTop ? '' : loaded]">
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
            <nav :class="['section', 'absolute-grid', 'burger-navigation', !windowTop ? '' : 'is-visible', menuState]">
                <button :class="['menu', menuState]" @click="openAndCloseMenu">
                    <span />
                    <span />
                    <span />
                    <svg :class="['spinner', menuState]" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                        <circle
                            class="path"
                            fill="none"
                            stroke-width="4"
                            stroke-linecap="round"
                            cx="33"
                            cy="33"
                            r="31.3"
                        />
                    </svg>
                </button>
                <div :class="['container', menuState]">
                    <div class="content">
                        <ul>
                            <li v-for="link in links" :key="link.id" @click="closeMenu">
                                <NuxtLink :to="{ path: '/', hash: link.route }">
                                    <span :data-text="link.name">{{ link.name }}</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
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
            windowTop: 0,
            menuState: '',
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
    mounted () {
        window.addEventListener('scroll', this.debounce(this.onScroll, 10))
    },
    methods: {
        isVisible (visible: boolean) {
            if (visible) {
                setTimeout(() => {
                    this.active = 'is-active'
                    this.loaded = 'is-loaded'
                }, 1000)
            }
        },
        onScroll () {
            this.windowTop = window.top.scrollY
        },
        openAndCloseMenu () {
            if (this.menuState) {
                this.menuState = ''

                return
            }
            this.menuState = 'is-active'
        },
        closeMenu () {
            this.menuState = ''
        },
        debounce (func, timeout) {
            let timer

            return (...args) => {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    func.apply(this, args)
                }, timeout)
            }
        }
    }
}
</script>
