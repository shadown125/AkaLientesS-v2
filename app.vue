<template>
    <div class="app">
        <TheInitialPageLoader @is-loaded="isLoaded" />
        <Particles
            id="tsparticles"
            :class="['particle', loaded ? active : '']"
            :options="options"
            :particlesInit="particlesInit"
        />
        <TheNavigation :initial-load="loaded" />
        <TheStaging :initial-load="loaded" />
        <TheFacts />
        <TheSkills />
        <TheMyWork />
        <TheFooter />
        <TheSidebarLetters :initial-load="loaded" />
        <TheFloatingLines :initial-load="loaded" />
    </div>
</template>

<script lang="ts">
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'

export default {
    name: 'App',
    data () {
        return {
            active: '',
            loaded: false,
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
                    color: {
                        value: ['FF0000DD', '00FFFFDD']
                    },
                    links: {
                        color: 'FF0000DD',
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
        particlesInit (engine: Engine) {
            loadFull(engine)
        },
        isLoaded (state) {
            this.loaded = state
        }
    }
}
</script>

<style src="public/main.css"></style>
