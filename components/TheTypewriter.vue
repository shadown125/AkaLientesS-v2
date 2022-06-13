<template>
    <span v-if="tag === 'span'" v-observe-visibility="isVisible">
        {{ displayText.join("") }}
    </span>
    <p v-else v-observe-visibility="isVisible">
        {{ displayText.join("") }}
    </p>
</template>

<script lang="ts">
export default {
    name: 'TheTypewriter',
    props: {
        speed: {
            type: Number,
            default: 60
        },
        words: {
            type: Array,
            required: true
        },
        delay: {
            type: Number,
            default: 1000
        },
        tag: {
            type: String,
            default: 'paragraph'
        }
    },
    data () {
        return {
            displayText: [],
            currentWord: '',
            wordIdx: 0,
            active: false
        }
    },
    computed: {
        TYPE_SPEED () { return this.speed },
        timeoutSpeed () { return this.TYPE_SPEED * 0.8 }
    },
    methods: {
        isVisible (visible) {
            if (visible && !this.active) {
                this.active = true

                setTimeout(() => {
                    this.start()
                }, this.delay)
            }
        },
        start () {
            if (this.words.length > 0) {
                this.currentWord = this.words[this.wordIdx].split('')
                this.wordIdx++
                setTimeout(this.type, this.timeoutSpeed)
            }
        },
        type () {
            if (this.currentWord.length > 0) {
                this.displayText.push(this.currentWord.shift())
            }
            setTimeout(this.type, this.timeoutSpeed)
        }
    }
}
</script>
