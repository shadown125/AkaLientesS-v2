<template>
    <div :class="['card', name.toLowerCase()]" :style="[showCardDelay(index / 2)]">
        <div class="content">
            <h3 class="headline h3">
                <span>{{ name }}</span>
            </h3>
            <ul>
                <li v-for="skillIndex in 4" :key="skillIndex" :class="['power-meter', skillIndex <= points ? 'is-active' : '']" :style="[powerMeterDelay(skillIndex / 6)]" />
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TheSkillsFrameworksItem',
    props: {
        name: {
            type: String,
            required: true
        },
        points: {
            type: Number,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        powerMeterDelay (delay: number) {
            return {
                '--power-meter-delay': delay + 0.5 + 's'
            }
        },
        showCardDelay (delay: number) {
            return {
                '--card-delay': delay + 0.6 + 's'
            }
        }
    }
}
</script>
