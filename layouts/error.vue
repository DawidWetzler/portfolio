<template>
  <main class="flex-1 flex justify-center items-center max-w-7xl w-full mx-auto">

    <NotFound v-if="error.statusCode === 404" />
    <FatalError v-else />

  </main>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import NotFound from '@/components/pages/NotFound.vue';
import FatalError from '@/components/pages/FatalError.vue';

@Component({
  components: { NotFound, FatalError }
})
export default class Error extends Vue {
  @Prop({ default: () => ({})}) readonly error!: { statusCode: number; message: string };

  get title(): string {
    return (this.error.statusCode === 404 ? 'Page not found' : 'Fatal error') + ' - Dawid wecler Wetzler';
  }

  head(): Record<string, string | Array<Record<string, string>>> {

    const pageDescription = 'Web developer, sometimes a designer based in Germany.';

    return {
      title: this.title,
      meta: [
        {
          hid: 'og:title',
          name:'og:title',
          content: this.title,
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
          content: this.title,
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
          content: this.title
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
}
</script>

