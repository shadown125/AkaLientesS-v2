<template>
    <section :class="['staging', active]" v-observe-visibility="isVisible">
        <div class="wrapper">
            <div class="grid">
                <TheSocialLinks :active="active" />
                <div class="content">
                    <h1 v-if="initialLoad" class="headline h1">
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
        </div>
    </section>
</template>

<script lang="ts">
// @ts-ignore
import baffle from 'baffle'

export default {
    name: 'TheStaging',
    props: {
        initialLoad: {
            type: Boolean,
            required: true
        }
    },
    data (): {active: string, animationDelay: Number} {
        return {
            active: '',
            animationDelay: 2000
        }
    },
    watch: {
        initialLoad () {
            this.isVisible(true)
        }
    },
    methods: {
        isVisible (visible: boolean) {
            if (visible && this.initialLoad) {
                setTimeout(() => {
                    this.active = 'is-active'
                }, this.animationDelay)
            }

            if (this.initialLoad) {
                setTimeout(() => {
                    baffle('.author', {
                        characters: '░░▓ ▒▒/▒░ ░██░▒ █░> ██░▓░ █░░▒ ▓>/ ██▓▓ ▓>░/',
                        speed: 50
                    }).reveal(3000)
                }, this.animationDelay + 1000)
            }
        }
    }
}
</script>
