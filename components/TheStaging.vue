<template>
    <section :class="['staging', active]" v-observe-visibility="isVisible">
        <div class="wrapper">
            <div class="grid">
                <ul :class="['social-links', active]">
                    <li v-for="link in links" :key="link.name">
                        <a :href="link.link" rel="external noopener" target="_blank" :class="['icon', link.name]">
                            <span>{{ link.name }}</span>
                        </a>
                    </li>
                </ul>
                <div class="content">
                    <h1 class="headline h1">
                        <span>Aka</span>
                        <span>LientesS</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit magnam obcaecati quam, quod suscipit temporibus velit vero.
                    </p>
                </div>
                <div :class="['letters', active]">
                    <span>Y</span>
                    <span>O</span>
                    <span>L</span>
                    <span>O</span>
                    <span>N</span>
                </div>
            </div>
            <TheSidebarLetters />
        </div>
    </section>
</template>

<script lang="ts">
export default {
    name: 'TheStaging',
    data (): {active: string, links: {link: string, name: string}[]} {
        return {
            active: '',
            links: [{
                link: 'https://github.com/shadown125',
                name: 'github'
            },
            {
                link: 'https://twitter.com/DawidOleksiuk',
                name: 'twitter'
            },
            {
                link: 'https://www.linkedin.com/in/dawid-ol-2478311a4/',
                name: 'linkedin'
            }]
        }
    },
    methods: {
        isVisible (visible: boolean) {
            if (visible) {
                setTimeout(() => {
                    this.active = 'is-active'
                }, 2000)
            }
        }
    }
}
</script>
