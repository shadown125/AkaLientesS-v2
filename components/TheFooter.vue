<template>
    <footer :class="['section', 'footer', active]" v-observe-visibility="isVisible">
        <div class="wrapper">
            <div class="container">
                <p class="credits">
                    &copy; {{ new Date().getFullYear() }} All rights reserved by Dawid Oleksiuk
                </p>
                <TheSocialLinks />
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
export default {
    name: 'TheFooter',
    data () {
        return {
            active: ''
        }
    },
    methods: {
        isVisible (visible: boolean) {
            if (visible) {
                this.active = 'is-active'
            }
        }
    }
}
</script>
