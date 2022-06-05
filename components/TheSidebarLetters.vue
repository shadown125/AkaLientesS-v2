<template>
    <div :class="['section', 'absolute-grid', 'sidebar', active]">
        <div class="japanese-text japanese-text--left">
            <span>ネバーギブアップ</span>
            <TheRainEffect />
        </div>
        <div class="japanese-text japanese-text--right">
            <span>ネバーギブアップ</span>
            <TheRainEffect />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TheSidebarLetters',
    props: {
        active: {
            type: String,
            required: true
        }
    }
}
</script>
