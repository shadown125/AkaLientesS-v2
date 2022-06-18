<template>
    <section id="skills" class="skills">
        <div class="wrapper">
            <h2 class="title h2">
                <span>Skills</span>
            </h2>
            <ul class="skills-list">
                <li v-for="(skill, index) in skills" :key="index" :class="['skill', active]" v-observe-visibility="isVisible">
                    <TheSkillsItem :name="skill.name" :points="skill.points" :keys="skill.keys" />
                </li>
            </ul>
            <TheSidebarLetters :active="active" />
        </div>
    </section>
</template>

<script lang="ts">
export default {
    name: 'TheSkills',
    data () {
        return {
            active: '',
            skills: [
                {
                    name: 'html',
                    points: 11,
                    keys: [
                        {
                            head: '構造',
                            name: 'Structure'
                        },
                        {
                            head: '建築',
                            name: 'Architecture'
                        },
                        {
                            head: '盤',
                            name: 'Grid'
                        }
                    ]
                },
                {
                    name: 'css',
                    points: 12,
                    keys: [
                        {
                            head: '美しさ',
                            name: 'Beauty'
                        },
                        {
                            head: 'アニメ',
                            name: 'Animations'
                        },
                        {
                            head: 'カスケード',
                            name: 'Cascade'
                        }
                    ]
                },
                {
                    name: 'js',
                    points: 11,
                    keys: [
                        {
                            head: 'すべて',
                            name: 'Everything'
                        },
                        {
                            head: '効果',
                            name: 'Effects'
                        },
                        {
                            head: 'V8エンジン',
                            name: 'V8 Engine'
                        }
                    ]
                },
                {
                    name: 'dart',
                    points: 7,
                    keys: [
                        {
                            head: 'ダーティー',
                            name: 'Dirty'
                        },
                        {
                            head: 'すべて1つで',
                            name: 'All in one'
                        },
                        {
                            head: 'グーグル',
                            name: 'Google'
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        isVisible (visible: boolean) {
            if (visible) {
                setTimeout(() => {
                    this.active = 'is-active'
                }, this.animationDelay)
            }
        }
    }
}
</script>
