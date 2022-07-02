<template>
    <section v-if="!isReady" :class="['initial-page-loader', activeInitialLoaderSection]">
        <div class="wrapper">
            <div class="container">
                <div :class="['first-paint', activeFirstPaint]">
                    <div class="loader">
                        <div class="outer" />
                        <div class="middle" />
                        <div class="inner" />
                    </div>
                    <div id="progression" class="section progression">
                        <div v-if="documentIsReady" class="percentage">
                            {{ pageCurrentLoadTime.toFixed(0) }}%
                        </div>
                    </div>
                </div>
                <div :class="['last-paint', activeLastPaint]">
                    <h1 class="title h1">
                        <span>AKALIENTESS</span>
                    </h1>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
// @ts-ignore
import NProgress from 'nprogress'

export default {
    name: 'TheInitialPageLoader',
    data () {
        return {
            isReady: false,
            documentIsReady: false,
            pageCurrentLoadTime: 0,
            interval: null,
            activeFirstPaint: 'is-active',
            activeLastPaint: '',
            activeInitialLoaderSection: ''
        }
    },
    mounted () {
        this.documentIsReady = true

        NProgress.configure({
            parent: '#progression',
            showSpinner: false,
            minimum: 0.1,
            speed: 600,
            trickleSpeed: 30
        })
        NProgress.start()

        this.interval = setInterval(() => {
            this.pageCurrentLoadTime = NProgress.status * 100
        }, 10)
    },
    created () {
        const delay = 2000

        setTimeout(() => {
            clearInterval(this.interval)

            this.pageCurrentLoadTime = 100

            NProgress.configure({
                parent: 'body'
            })
            NProgress.done()
            this.activeFirstPaint = ''
            this.activeLastPaint = 'is-active'
        }, delay)

        setTimeout(() => {
            this.activeLastPaint = ''
            this.activeInitialLoaderSection = 'is-active'
        }, delay + 3000)

        setTimeout(() => {
            this.isReady = true
            this.$emit('is-loaded', this.isReady)
        }, delay + 4000)
    }
}
</script>
