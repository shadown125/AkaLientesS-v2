<template>
    <div :class="['section', 'absolute-grid', 'floating-lines', active]">
        <div />
        <div />
        <div />
        <div />
    </div>
</template>

<script lang="ts">

export default {
    name: 'TheFloatingLines',
    data (): {active: string} {
        return {
            active: ''
        }
    },
    mounted () {
        if (document.readyState) {
            this.active = 'is-active'
        }
    }
}
</script>
