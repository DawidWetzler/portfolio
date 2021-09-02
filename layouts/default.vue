<template>
  <div class="background grid grid-rows-3 bg-gray-900 px-4 md:px-8">
    <Header />
    <Nuxt />
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
  created(): void {
    if(!process.client) {
      return;
    }

    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }
}
</script>
