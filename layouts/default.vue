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
  head(): Record<string, string | Array<Record<string, string>>> {

    const pageTitle = 'Dawid wecler Wetzler';
    const pageDescription = 'Web developer, sometimes a designer based in Germany.';

    return {
      title: 'Dawdi wecler Wetzler',
      meta: [
        {
          hid: 'og:title',
          name:'og:title',
          content: pageTitle,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'wecler.me',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: pageDescription,
        },
        {
          hid: 'og:image',
          name:'og:image',
          content: '' // todo
        },
        {
          hid: 'og:type',
          name:'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://www.wecler.me${this.$route.fullPath}`,
        },
        {
          hid: 'og:locale',
          name: 'og:locale',
          content: 'en',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: pageTitle,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: pageDescription
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '' // todo
        },
        {
          hid: 'twitter:site',
          name: 'twitter:site',
          content: `https://www.wecler.me${this.$route.fullPath}`,
        },
        {
          hid: 'title',
          name: 'title',
          content: pageTitle
        },
        {
          hid: 'description',
          name: 'description',
          content: pageDescription
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'web, developer, webdeveloper, software, engineer, design, programmer, seo, data, nodejs, php, vue, react, mysql, database, dawid, wecler, wetzler, firespot, teamspeak, ts3, nuxtjs, nextjs'
        },
      ],
    };
  }

  mounted(): void {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }
}
</script>
