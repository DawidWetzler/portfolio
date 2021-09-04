<template>
  <div class="max-w-4xl w-full bg-gray-800 bg-opacity-80 shadow rounded-lg p-6 space-y-8">
    <h1 class="text-center text-white tracking-tight text-montserrat text-3xl lg:text-5xl mt-4">
      My <span class="text-lime">skills</span>
    </h1>

    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4">
      <li
        v-for="skill in skills"
        :key="`skills-${skill.title}`"
        class="text-white bg-gray-800 bg-opacity-80 shadow p-6 rounded-lg"
      >
        <span class="text-base md:text-xl tracking-tight text-montserrat text-white">{{ skill.title }}</span>
        <ul
          v-if="skill.skills.length >= 1"
          class="list-outside list-disc mt-1"
        >
          <li
            v-for="skill in skill.skills"
            :key="`skill-${skill}`"
            class="text-sm md:text-base ml-5 text-montserrat text-lime"
          >
            <span class="text-gray-300">{{ skill }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Skills extends Vue {
  get skills(): Skill[] {
    return [
      {
        title: 'HTML & CSS',
        skills: ['TailwindCSS', 'Native', 'Bootstrap', 'SCSS / LESS'],
      },
      {
        title: 'Javascript & Typescript',
        skills: ['JQuery', 'VueJS / NuxtJS', 'React / NextJS', 'Native']
      },
      {
        title: 'PHP',
        skills: ['Laravel', 'Eloquent (ORM)', 'Native (OOP)']
      },
      {
        title: 'Database',
        skills: ['MySQL / MariaDB', 'SQLite']
      },
      {
        title: 'Languages',
        skills: ['Polish (native)', 'German (native)', 'English (communicative)']
      },
      {
        title: 'Other',
        skills: ['Git', 'Docker'],
      },
    ];
  }
}
</script>
