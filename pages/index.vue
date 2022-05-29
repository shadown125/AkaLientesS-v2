<template>
    <div class="app">
        <Particles
            id="tsparticles"
            :options="options"
            :particlesInit="particlesInit"
        />
        <TheNavigation />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '../static/main.css'
import VueObserveVisibility from 'vue-observe-visibility'
import Particles from 'particles.vue'
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'

Vue.use(VueObserveVisibility)
Vue.use(Particles)

export default Vue.extend({
    name: 'IndexPage',
    data () {
        return {
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
    methods: {
        particlesInit (engine: Engine): Promise<void> {
            loadFull(engine)
        }
    }
})
</script>
