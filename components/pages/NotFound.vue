<template>
  <div class="flex items-center">
    <div>
      <p class="text-white text-3xl lg:text-5xl font-medium mt-8 mb-10">Page not found</p>
      <p class="text-gray-300">The page you we're looking for is not available.</p>
      <nuxt-link
        class="flex px-6 py-4 border-2 border-gray-100 w-52 mt-10 md:hover:bg-gray-900 md:hover:border-gray-300 hover:text-white transition duration-200 ease-in-out"
        to="/"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        <span class="text-white ml-3">Take me home</span>
      </nuxt-link>
    </div>
    <div>
      <img class="h-32 md:h-64 2xl:h-96 mt-12 md:mt-0 md:ml-12" src="~/assets/images/404.svg" alt="404 error" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class NotFound extends Vue {
  //
}
</script>
