<template>
    <ul :class="['social-links', active]">
        <li v-for="link in links" :key="link.name">
            <a :href="link.link" rel="external noopener" target="_blank" :class="['icon', link.name]">
                <span>{{ link.name }}</span>
            </a>
        </li>
    </ul>
</template>

<script lang="ts">
export default {
    name: 'TheSocialLinks',
    props: {
        active: {
            type: String,
            default: 'is-active'
        }
    },
    data () {
        return {
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
    }
}
</script>
