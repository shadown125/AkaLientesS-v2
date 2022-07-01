<template>
    <div :class="['grid', active]" v-observe-visibility="{callback: isVisible}">
        <div class="image">
            <nuxt-img :src="image" :alt="headline" />
            <h3 class="headline h3">
                <span>{{ headline }}</span>
            </h3>
        </div>
        <div class="content">
            <h4 class="headline h4">
                <span>Fact {{ index + 1 }}</span>
            </h4>
            <div class="description">
                <p>
                    {{ text }}
                </p>
            </div>
        </div>
        <div :class="['keys', activeKeys]" v-observe-visibility="{callback: isVisibleKeys}">
            <div v-for="key in keys" :key="key.name">
                <span>{{ key.head }}</span>
                <span>{{ key.name }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TheFactsItem',
    props: {
        image: {
            type: String,
            required: true
        },
        headline: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        keys: {
            type: Array,
            required: true
        }
    },
    data () {
        return {
            active: '',
            activeKeys: ''
        }
    },
    methods: {
        isVisible (visible: boolean) {
            if (visible) {
                setTimeout(() => {
                    this.active = 'is-active'
                }, 750)
            }
        },
        isVisibleKeys (visible: boolean) {
            if (visible) {
                this.activeKeys = 'is-active'
            }
        }
    }
}
</script>
