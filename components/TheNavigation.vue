<template>
    <header class="section">
        <div class="wrapper">
            <nav v-observe-visibility="{callback: isVisible, intersection: {threshold: 1}}" :class="['main-navigation', active, windowTop ? '' : loaded]">
                <a href="/" class="logo">
                    <nuxt-img src="/brandLogo.png" width="80" height="80" alt="brand-logo" />
                </a>
                <ul>
                    <li v-for="link in links" :key="link.id">
                        <NuxtLink :to="{ path: '/', hash: link.route }">
                            <span>
                                <span>{{ link.name }}</span>
                            </span>
                        </NuxtLink>
                    </li>
                </ul>
                <a href="mailto:dawidoleksiuk7@gmail.com" class="button">
                    <span>Contact me</span>
                </a>
            </nav>
            <nav :class="['section', 'absolute-grid', 'burger-navigation', !windowTop ? '' : 'is-visible', menuState]">
                <button :class="['menu', menuState]" @click="openAndCloseMenu">
                    <span />
                    <span />
                    <span />
                    <span class="name">Menu</span>
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
    props: {
        initialLoad: {
            type: Boolean,
            required: true
        }
    },
    data (): TheNavigationData {
        return {
            active: '',
            loaded: '',
            windowTop: 0,
            menuState: '',
            links: [
                {
                    id: '2',
                    route: '#facts',
                    name: 'FACTS'
                },
                {
                    id: '3',
                    route: '#skills',
                    name: 'SKILLS'
                },
                {
                    id: '4',
                    route: '#my-work',
                    name: 'MY WORK'
                }
            ]
        }
    },
    watch: {
        initialLoad () {
            this.isVisible(true)
        }
    },
    mounted () {
        window.addEventListener('scroll', this.debounce(this.onScroll, 10))
    },
    methods: {
        isVisible (visible: boolean) {
            if (visible && this.initialLoad) {
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
