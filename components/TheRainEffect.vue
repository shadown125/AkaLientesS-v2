<template>
    <div class="rain">
        <div v-for="index in 25" :key="index" class="drop" :style="{left: index * 4 + '%', bottom: (getSecondRandomNumberForRain() + (Math.floor(Math.random() * (5 - 2 + 1) + 2)) - 1 + 100) + '%', animationDelay: '0.' + getRandomNumberForRain() + 's', animationDuration: rainDuration + '.' + getRandomNumberForRain() + 's'}">
            <div class="stem" :style="{animationDelay: '0.' + getRandomNumberForRain() + 's', animationDuration: '0.5' + getRandomNumberForRain() + 's'}" />
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TheRainEffect',
    data () : {rainDuration: String} {
        return {
            rainDuration: '1'
        }
    },
    methods: {
        getRandomNumberForRain () {
            return (Math.floor(Math.random() * (98 - 1 + 1) + 1))
        },
        getSecondRandomNumberForRain () {
            return (Math.floor(Math.random() * (5 - 2 + 1) + 2))
        }
    }
}
</script>
