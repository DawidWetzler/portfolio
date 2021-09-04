<template>
  <main class="flex-1 h-auto flex justify-center items-center max-w-7xl w-full mx-auto">
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <li
        v-for="project in projects"
        :key="`project-${project.title}`"
      >
        <a
          :href="project.href"
          target="_blank"
          class="cursor-pointer"
        >
          <div class="rounded-lg shadow bg-gray-900 md:hover:bg-gray-800 transition ease-in-out duration-200 border border-gray-800">
            <img
              v-show="project.src && !isLoading[project.title]"
              :src="project.src"
              :alt="project.title"
              @load="onImageLoaded(project.title)"
              class="h-64 max-w-xl w-full rounded-t-lg"
            />

            <div
              v-show="isLoading[project.title] || !isLoading[project.title] && !project.src"
              class="h-64 max-w-xl w-full relative flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 absolute text-gray-300"
                :class="{'animate-pulse': isLoading[project.title]}"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>

              <svg
                v-show="!project.src"
                xmlns="http://www.w3.org/2000/svg"
                class="h-24 w-24 absolute text-red-900 text-opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>

            </div>
            <div class="flex flex-col p-4 space-y-1">
              <p class="text-xl font-medium text-montserrat text-white">{{ project.title }}</p>
              <p class="text-sm text-montserrat text-gray-300">{{ project.description }}</p>
            </div>
          </div>
        </a>
      </li>
    </ul>

  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Gallery extends Vue {

  private isLoading: Record<string, boolean> = {};

  get projects(): Project[] {
    return [
      {
        title: 'printcolours',
        description: 'Website for a company dealing with press machines and more..',
        href: 'https://printcolours.pl',
      },
      {
        title: 'firespot',
        description: 'My first hobby project for my own Teamspeak community.',
        href: 'https://firespot.eu',
        src: require('~/assets/images/firespot.jpg'),
      },
    ];
  }

  onImageLoaded(projectName: string): void {
    this.isLoading[projectName] = false;
  }

  created(): void {
    this.projects.forEach((project) => {
      if (!project.src || !this.isLoading[project.title]) {
        return;
      }

      this.isLoading[project.title] = true;
    });
  }
}
</script>
