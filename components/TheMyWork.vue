<template>
    <section id="my-work" :class="['my-work', active]" v-observe-visibility="isVisible">
        <div class="wrapper">
            <h2 class="title h2">
                <span>My Work</span>
            </h2>
            <ul>
                <li v-for="(item, index) in items" :key="index">
                    <TheMyWorkItem
                        :name="item.name"
                        :content="item.content"
                        :description="item.description"
                        :index="index"
                        :image="item.image"
                        :link="item.link"
                    />
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts">
export default {
    name: 'TheMyWork',
    data () {
        return {
            active: '',
            items: [
                {
                    name: 'KataLientesS',
                    description: 'Biggest React Project',
                    link: 'https://www.katalientess.com',
                    image: 'katalientess.png',
                    content: 'The largest React project I have created on my own.'
                },
                {
                    name: 'Susanoo CMS',
                    description: 'The most ambitious Project',
                    link: 'https://github.com/shadown125/susanoo',
                    image: 'susanoo.png',
                    content: 'I really wanted to create something big. Something, I can develop over years.'
                }
            ]
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
