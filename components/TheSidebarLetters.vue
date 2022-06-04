<template>
    <div :class="['section', 'absolute-grid', 'sidebar', active]">
        <div class="japanese-text japanese-text--left">
            <span>ネバーギブアップ</span>
        </div>
        <div class="japanese-text japanese-text--right">
            <span>ネバーギブアップ</span>
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
