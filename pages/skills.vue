<template>
  <main class="flex-1 flex justify-center items-center max-w-7xl w-full mx-auto">
    <ul class="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-2">
      <li
        v-for="skill in skills"
        :key="`skills-${skill.title}`"
        class="text-white bg-gray-800 shadow px-4 py-2 rounded-lg"
      >
        <span class="text-base md:text-xl tracking-tight text-montserrat text-white">{{ skill.title }}</span>
        <ul
          v-if="skill.skills.length >= 1"
          class="list-disc mt-1"
        >
          <li
            v-for="skill in skill.skills"
            :key="`skill-${skill}`"
            class="text-sm md:text-base ml-5 text-montserrat text-gray-300"
          >
            {{ skill }}
          </li>
        </ul>
      </li>
    </ul>
  </main>
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
        title: 'Java & Typescript',
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
