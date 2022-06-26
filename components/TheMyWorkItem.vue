<template>
    <div :class="['container', active]" v-observe-visibility="isVisible">
        <a :href="link" target="_blank" rel="external noopener" :style="{backgroundImage: `url(${image})`}">
            <span class="counter" :data-text="getCurrentCounter(index)">{{ getCurrentCounter(index) }}</span>
            <div class="key-headline">
                <h3 class="headline h3">{{ name }}</h3>
                <span>{{ description }}</span>
            </div>
        </a>
        <div class="content">
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TheMyWorkItem',
    props: {
        link: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        name: {
            type: String,
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
        getCurrentCounter: (index) => {
            return index < 10 ? '0' + (index + 1) : index + 1
        }
    }
}
</script>
