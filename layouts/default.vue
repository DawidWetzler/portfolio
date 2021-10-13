<template>
  <div class="background flex justify-end flex-col-reverse md:flex-col bg-gray-900 px-4 md:px-8">
    <Header />
    <main class="flex-1 flex justify-center items-center max-w-7xl w-full mx-auto">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';

@Component({
  components: { Header, Footer }
})
export default class Default extends Vue {
  mounted(): void {
    this.adjustSiteHeight();
    window.addEventListener('resize', this.adjustSiteHeight);
  }

  /**
   * This fixes an mobile sizing problem where the navigation bar height is being ignored
   */
  adjustSiteHeight(): void {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
</script>
