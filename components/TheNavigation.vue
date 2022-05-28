<template>
    <header>
        <div class="wrapper">
            <intersect @enter="active = 'is-active'" @leave="active = ''">
                <nav :class="['main-navigation', active]">
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
            </intersect>
        </div>
    </header>
</template>

<script lang="ts">
// @ts-ignore
import Intersect from 'vue-intersect'

export default {
    name: 'TheNavigation',
    components: { Intersect },
    data (): {active: string, links: {id: string, route: string, name: string}[]} {
        return {
            active: '',
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
    }
}
</script>
