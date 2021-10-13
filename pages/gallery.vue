<template>
  <div class="w-full bg-gray-800 bg-opacity-80 shadow rounded-lg p-2 md:p-6 space-y-8">
    <h1 class="text-center text-white tracking-tight text-montserrat text-3xl lg:text-5xl mt-4">
      My <span class="text-lime">work</span>
    </h1>
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
          <div class="rounded-lg shadow bg-gray-900 md:hover:bg-gray-800 transition ease-in-out duration-200">
            <img
              v-show="project.src && !isLoading[project.title]"
              :src="project.src"
              :alt="project.title"
              @load="onImageLoaded(project.title)"
              class="h-48 md:h-80 w-full rounded-t-lg"
            />

            <div
              v-show="isLoading[project.title] || !isLoading[project.title] && !project.src"
              class="h-48 md:h-80 max-w-xl w-full relative flex items-center justify-center"
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
              <div class="flex items-center space-x-2">
                <p class="text-xl font-medium text-montserrat text-white">{{ project.title }}</p>
                <span class="text-sm text-lime">{{ project.year }}</span>
              </div>
              <p class="text-sm text-montserrat text-gray-300">{{ project.description }}</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Gallery extends Vue {
  private isLoading: Record<string, boolean> = {};

  get projects(): Project[] {
    return [
      {
        title: 'Stay tuned',
        description: 'This project is still in active development phase and will be available soon...',
        href: '#',
      },
      {
        title: 'firespot',
        description: 'My first hobby project for my own Teamspeak community.',
        year: this.getTillCurrentYear(2019),
        href: 'https://firespot.eu',
        src: require('~/assets/images/firespot.jpg'),
      },
    ];
  }

  head(): Record<string, string | Array<Record<string, string>>> {
    const pageTitle = 'Gallery - Dawid wecler Wetzler';

    return {
      title: pageTitle,
      meta: [
        {
          hid: 'og:title',
          name:'og:title',
          content: pageTitle,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: pageTitle,
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Projects that I have made and that are publicly available.'
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: `https://www.wecler.me${this.$route.fullPath}`,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://www.wecler.me${this.$route.fullPath}`,
        },
      ]
    };
  }

  getTillCurrentYear(fromYear: number): string {
    const currentYear = new Date().getFullYear();

    return fromYear === currentYear ? `${fromYear}` : `${fromYear} - ${currentYear}`;
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
