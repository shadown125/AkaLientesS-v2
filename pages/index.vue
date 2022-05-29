<template>
    <div class="app">
        <TheNavigation />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '../static/main.css'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)

export default Vue.extend({
    name: 'IndexPage'
})
</script>
