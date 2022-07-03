<template>
    <div :class="['section', 'absolute-grid', 'sidebar', active]" v-observe-visibility="isVisible">
        <div class="japanese-text japanese-text--left">
            <span v-for="(text, index) in textLeft" :key="index" :style="{ transform: `translateY(${windowTop * -1 - transformOffset}px)` }">{{ text.name }}</span>
        </div>
        <div class="japanese-text japanese-text--right">
            <span v-for="(text, index) in textRight" :key="index" :style="{ transform: `translateY(${windowTop * -1 + transformOffset + 500}px)` }">{{ text.name }}</span>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TheSidebarLetters',
    props: {
        initialLoad: {
            type: Boolean,
            required: true
        }
    },
    data () {
        return {
            windowTop: 0,
            transformOffset: 125,
            active: '',
            textRight: [
                {
                    name: '心を無にする'
                },
                {
                    name: '形にとらわれない'
                },
                {
                    name: 'シェイプレス'
                },
                {
                    name: '湯水のごとく'
                },
                {
                    name: '今度はコップに水を入れてみましょう'
                },
                {
                    name: 'それがカップになる'
                },
                {
                    name: '瓶に水を入れると瓶になる'
                },
                {
                    name: '急須に入れば急須になる'
                },
                {
                    name: '今や水は流れる'
                },
                {
                    name: 'またはクラッシュする可能性があります'
                },
                {
                    name: '水に浮く'
                }
            ],
            textLeft: [
                {
                    name: 'ネバーギブアップ'
                },
                {
                    name: 'コンヴィクションはエモーションを導入する'
                },
                {
                    name: 'オラトリオの敵はどっちだ'
                },
                {
                    name: '後手後手に回るとパーリーにならない'
                },
                {
                    name: '私は社会人の極端な例です。'
                },
                {
                    name: 'もしあなたが後悔し始めたら、将来の決断を鈍らせ、他人にあなたの選択を委ねてしまうでしょう。'
                },
                {
                    name: '破壊されたものは、常に修復され、再構築される。'
                }
            ]
        }
    },
    watch: {
        initialLoad () {
            this.isVisible(true)
        }
    },
    mounted () {
        window.addEventListener('scroll', this.debounce(this.onScroll, 2))
    },
    methods: {
        onScroll () {
            this.windowTop = window.top.scrollY * 0.7
        },
        debounce (func, timeout) {
            let timer

            return (...args) => {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    func.apply(this, args)
                }, timeout)
            }
        },
        isVisible (visible: boolean) {
            if (visible && this.initialLoad) {
                this.active = 'is-active'
            }
        }
    }
}
</script>
