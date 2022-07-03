<template>
    <div ref="lines" :class="['section', 'absolute-grid', 'floating-lines', active]" v-observe-visibility="{callback: isVisible}" :style="[setAnimationTime(time)]">
        <div />
        <div />
        <div />
        <div />
    </div>
</template>

<script lang="ts">
export default {
    name: 'TheFloatingLines',
    props: {
        initialLoad: {
            type: Boolean,
            required: true
        }
    },
    data (): {active: string, time: null | Number} {
        return {
            active: '',
            time: null
        }
    },
    watch: {
        initialLoad () {
            this.isVisible(true)
        }
    },
    mounted () {
        this.time = this.$refs.lines.getBoundingClientRect().height / 1000
    },
    methods: {
        isVisible (visible: boolean) {
            if (visible && this.initialLoad) {
                this.active = 'is-active'
            }
        },
        setAnimationTime: (time) => {
            return {
                '--floating-lines-animation-time': time + 's'
            }
        }
    }
}
</script>
