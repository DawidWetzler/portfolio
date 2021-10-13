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
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:title',
          name:'og:title',
          content: this.title,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
      ],
    };
  }
}
</script>

