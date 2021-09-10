<template>
  <div class="max-w-4xl w-full bg-gray-800 bg-opacity-80 shadow rounded-lg p-6 space-y-8">
    <h1 class="text-center text-white tracking-tight text-montserrat text-3xl lg:text-5xl mt-4">
      About <span class="text-lime">me</span>
    </h1>
    <div class="max-w-2xl mx-auto text-center my-8 text-gray-300 space-y-1">
      <p class="text-xl">
        Hello, Cześć and Hallo!
      </p>
      <p>
        My name is Dawid, but people usually call me wecler.
      </p>
      <p>
        My life journey began in Poland, where I was born and where I took my first steps. After some time, I moved
        with my family to Germany and I have stayed there until today, this is why I speak three languages.
        So feel free to contact me in Polish, German or English.
      </p>
      <p>
        I am a web developer. That means I do the weird stuff on the internet, like the one you are currently
        looking at. If you are interested in projects that are publicly available, you can check out my work simply by
        clicking
        <nuxt-link to="gallery" class="underline">here</nuxt-link>.
      </p>
      <p>
        I think that's enough reading. My attention is not to bore you.
      </p>
      <p class="text-xs pt-2">
        Thanks for reading this.
      </p>
    </div>
    <ul class="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 space-y-4 md:space-y-0">
      <li class="flex justify-center items-center space-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-lime h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span class="text-gray-300 text-sm text-montserrat">Bavaria / Germany</span>
      </li>
      <li>
        <a
          href="mailto:hello@wecler.me"
          class="flex justify-center items-center space-x-1 text-gray-300 md:hover:text-white transition ease-in-out duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="text-lime h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span class="text-sm text-montserrat">hello@wecler.me</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class About extends Vue {

  head(): Record<string, string | Array<Record<string, string>>> {

    return {
      title: 'About - Dawid wecler Wetzler',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A few words to introduce myself.'
        },
      ]
    };
  }

}
</script>
