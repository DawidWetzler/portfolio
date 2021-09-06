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
}
</script>

