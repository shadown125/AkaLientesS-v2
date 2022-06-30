<template>
    <section id="skills" :class="['skills', active]">
        <div class="wrapper">
            <h2 class="title title--skills h2">
                <span>Skills</span>
            </h2>
            <ul class="skills-list">
                <li v-for="(skill, index) in skills" :key="index" :class="['skill', active]" v-observe-visibility="isVisible">
                    <TheSkillsItem :name="skill.name" :points="skill.points" :keys="skill.keys" />
                </li>
            </ul>
            <div :class="['frameworks', activeFrameworks]" v-observe-visibility="isVisibleFrameworks">
                <h3 class="title title--frameworks h2">
                    <span>Frameworks and Libraries</span>
                </h3>
                <ul>
                    <li v-for="(item, index) in frameworks" :key="item.name">
                        <TheSkillsFrameworksItem :name="item.name" :points="item.points" :index="index" />
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import TheSkillsFrameworksItem from './Skills/TheSkillsFrameworksItem.vue'
import TheSkillsItem from './Skills/TheSkillsItem.vue'

export default {
    name: 'TheSkills',
    components: { TheSkillsItem, TheSkillsFrameworksItem },
    data () {
        return {
            active: '',
            activeFrameworks: '',
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
            ],
            frameworks: [
                {
                    name: 'React',
                    points: 3
                },
                {
                    name: 'Next',
                    points: 3
                },
                {
                    name: 'Vue',
                    points: 2
                },
                {
                    name: 'Flutter',
                    points: 2
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
        },
        isVisibleFrameworks (visible: boolean) {
            if (visible) {
                this.activeFrameworks = 'is-active'
            }
        }
    }
}
</script>
