<template>
    <div :class="['content', active]" v-observe-visibility="isVisible">
        <div class="head">
            <div :class="['name', 'icon', 'icon--' + name]" />
            <div class="keys">
                <div v-for="key in keys" :key="key.name">
                    <span>{{ key.head }}</span>
                    <span>{{ key.name }}</span>
                </div>
            </div>
        </div>
        <ul>
            <li v-for="skillIndex in 12" :key="skillIndex" :class="['power-meter', skillIndex <= points ? 'is-active' : '']" :style="[powerMeterDelay(skillIndex / 6)]" />
        </ul>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TheSkillsItem',
    props: {
        name: {
            type: String,
            required: true
        },
        points: {
            type: Number,
            required: true
        },
        keys: {
            type: Array,
            required: true
        }
    },
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
        },
        powerMeterDelay (delay) {
            return {
                '--power-meter-delay': delay + 2 + 's'
            }
        }
    }
}
</script>
