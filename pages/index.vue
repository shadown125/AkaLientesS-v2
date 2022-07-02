<template>
    <div class="app">
        <div v-if="loaded">
            <Particles
                id="tsparticles"
                :class="['particle', active]"
                :options="options"
                :particlesInit="particlesInit"
            />
            <TheNavigation />
            <TheStaging />
            <TheFacts />
            <TheSkills />
            <TheMyWork />
            <TheFooter />
            <TheSidebarLetters />
            <TheFloatingLines />
        </div>
        <TheInitialPageLoader @is-loaded="isLoaded" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
import Particles from 'particles.vue'
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
// @ts-ignore
import VueMq from 'vue-mq'

Vue.use(VueObserveVisibility)
Vue.use(Particles)
Vue.use(VueMq, {
    breakpoints: {
        mobile: 800,
        large: Infinity
    }
})

export default Vue.extend({
    name: 'IndexPage',
    data () {
        return {
            active: '',
            loaded: '',
            options: {
                interactivity: {
                    events: {
                        onHover: {
                            mode: 'repulse',
                            enable: true
                        }
                    }
                },
                modes: {
                    push: {
                        quantity: 15
                    },
                    repulse: {
                        distance: 30
                    }
                },
                particles: {
                    links: {
                        distance: 40,
                        enable: true
                    },
                    move: {
                        enable: true
                    },
                    opacity: {
                        value: {
                            min: 0.1,
                            max: 0.4
                        }
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 3
                        }
                    }
                }
            }
        }
    },
    mounted () {
        if (document.readyState) {
            setTimeout(() => {
                this.active = 'is-active'
            }, 2000)
        }
    },
    methods: {
        particlesInit (engine: Engine): Promise<void> {
            loadFull(engine)
        },
        isLoaded (state) {
            this.loaded = state
        }
    }
})
</script>

<style src="static/main.css"></style>
