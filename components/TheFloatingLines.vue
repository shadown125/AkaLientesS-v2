<template>
    <div ref="lines" :class="['section', 'absolute-grid', 'floating-lines', active]" :style="[setAnimationTime(time)]">
        <div />
        <div />
        <div />
        <div />
    </div>
</template>

<script lang="ts">
export default {
    name: 'TheFloatingLines',
    data (): {active: string, time: null | Number} {
        return {
            active: '',
            time: null
        }
    },
    mounted () {
        this.active = 'is-active'
        this.time = this.$refs.lines.getBoundingClientRect().height / 1000
    },
    methods: {
        setAnimationTime: (time) => {
            return {
                '--floating-lines-animation-time': time + 's'
            }
        }
    }
}
</script>
