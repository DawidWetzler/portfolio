<template>
  <main class="row-start-2 flex justify-center items-center max-w-3xl w-full mx-auto">

    <div class="w-full bg-gray-900 shadow rounded-lg">
      <div class="min-h-full bg-gray-800 bg-opacity-60 rounded-lg p-4 space-y-1">
        <p class="text-gray-300 text-justify">
          Hello, Servus, Cześć i czołem.
        </p>
        <p class="text-gray-300 text-justify">
          I am Dawid, but you can call me wecler.
        </p>
        <p class="text-gray-300 text-justify">
          My life started in Poland, where I was born and where I lived for a while.
          After that I moved to Germany and therefore I speak three languages. So feel free to contact me in Polish, German or English.
        </p>
        <p class="text-gray-300 text-justify">
          I'm a web developer.
          That means I do the weird stuff on the web, like what you're looking at right now.
          If you are interested in projects I have done, you can check out my work by simply by clicking <nuxt-link to="gallery" class="underline">here</nuxt-link>.
        </p>
        <p class="text-gray-300 text-justify">
          I think that's enough reading. My attention is not to bore you.
        </p>
        <p class="text-gray-300 text-xs pt-2">
          Thanks for reading this.
        </p>
      </div>
    </div>

  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class About extends Vue {
  //
}
</script>
