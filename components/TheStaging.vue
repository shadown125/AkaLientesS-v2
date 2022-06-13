<template>
    <section :class="['staging', active]" v-observe-visibility="isVisible">
        <div class="wrapper">
            <div class="grid">
                <ul :class="['social-links', active]">
                    <li v-for="link in links" :key="link.name">
                        <a :href="link.link" rel="external noopener" target="_blank" :class="['icon', link.name]">
                            <span>{{ link.name }}</span>
                        </a>
                    </li>
                </ul>
                <div class="content">
                    <h1 class="headline h1">
                        <TheTypewriter :words="['Aka']" tag="span" :speed="250" :delay="2500" />
                        <TheTypewriter :words="['LientesS']" tag="span" :speed="200" :delay="2500" />
                    </h1>
                    <p class="author">
                        Created and Designed by Dawid Oleksiuk
                    </p>
                </div>
                <div :class="['letters', active]">
                    <span>Y</span>
                    <span>O</span>
                    <span>L</span>
                    <span>O</span>
                    <span>N</span>
                </div>
            </div>
            <TheSidebarLetters :active="active" />
        </div>
    </section>
</template>

<script lang="ts">
// @ts-ignore
import baffle from 'baffle'

export default {
    name: 'TheStaging',
    data (): {active: string, animationDelay: Number, links: {link: string, name: string}[]} {
        return {
            active: '',
            animationDelay: 2000,
            links: [{
                link: 'https://github.com/shadown125',
                name: 'github'
            },
            {
                link: 'https://twitter.com/DawidOleksiuk',
                name: 'twitter'
            },
            {
                link: 'https://www.linkedin.com/in/dawid-ol-2478311a4/',
                name: 'linkedin'
            }]
        }
    },
    mounted () {
        setTimeout(() => {
            baffle('.author', {
                characters: '░░▓ ▒▒/▒░ ░██░▒ █░> ██░▓░ █░░▒ ▓>/ ██▓▓ ▓>░/',
                speed: 50
            }).reveal(3000)
        }, this.animationDelay + 1000)
    },
    methods: {
        isVisible (visible: boolean) {
            if (visible) {
                setTimeout(() => {
                    this.active = 'is-active'
                }, this.animationDelay)
            }
        }
    }
}
</script>
