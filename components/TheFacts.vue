<template>
    <section id="facts" :class="['facts', loaded, active]" v-observe-visibility="isVisible">
        <div class="wrapper">
            <h2 class="h2 headline title">
                <span>Facts</span>
            </h2>
            <ul class="facts-list">
                <li v-for="(fact, index) in facts" :key="index">
                    <TheFactsItem :text="fact.text" :index="index" :headline="fact.headline" :image="fact.image" />
                </li>
            </ul>
            <TheSidebarLetters :active="active" />
        </div>
    </section>
</template>

<script lang="ts">
export default {
    name: 'TheFacts',
    data () {
        return {
            active: '',
            loaded: '',
            facts: [
                {
                    image: '/akaliBloodmoon3.png',
                    headline: 'Competitive Player',
                    text: 'I started to play video games as a kid. I played many titles over ' +
                        'the years but the one that completely dragged me in was League of Legends. ' +
                        'This game was something that got me into competitive gaming and made me want to' +
                        ' become the best. And I did. In my prime, I was the best Akali player in the world ' +
                        'and in the top 100 Challenger (the highest rank in-game with 200 best players in).'
                },
                {
                    image: '/akaliBloodmoon2.jpg',
                    headline: 'Sport',
                    text: 'Sport played a huge role in my life. ' +
                        'I spent half of my life trying different disciplines.' +
                        ' As a kid, I dreamed about being a great football player and for quite a time I was serious about it.' +
                        ' I could spend my whole day training to become better. But after some years of training, ' +
                        'I decided that it’s not the path I want to follow and started to spend more time on my computer playing video games and learning the basics of programming.'
                }
            ]
        }
    },
    methods: {
        isVisible (visible: boolean) {
            if (visible) {
                this.loaded = 'loaded'

                setTimeout(() => {
                    this.active = 'is-active'
                }, 750)
            }
        }
    }
}
</script>
