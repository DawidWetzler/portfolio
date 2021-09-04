<template>
  <div class="relative z-10 flex flex-col md:flex-row items-center w-full">

    <div
      v-show="waveTimer > 0"
      class="mx-auto animate-wink text-8xl"
    >
      👋
    </div>

    <transition
      mode="out-in"
      enter-active-class="transition ease-out duration-200"
      enter-class="transform opacity-0 -translate-x-6"
      enter-to-class="transform opacity-100"
    >
      <div
        v-show="waveTimer <= 0"
        class="flex flex-col"
      >
          <span class="text-white tracking-tight text-montserrat text-2xl md:text-3xl lg:text-5xl">
            I am <span class="font-bold">Dawid wecler Wetzler</span>
          </span>
        <span class="text-gray-300 text-base md:text-xl lg:text-2xl font-thin">
            Fullstack web developer, sometimes a designer based in Germany.
          </span>
      </div>
    </transition>

    <transition
      mode="out-in"
      enter-active-class="transition ease-out duration-200"
      enter-class="transform opacity-0 translate-x-6"
      enter-to-class="transform opacity-100"
    >
      <div
        v-show="waveTimer <= 0"
        class="absolute top-24 right-0 md:static mx-auto"
      >
        <ComputerIcon class="h-32 w-32 md:h-72 md:w-72" />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import ComputerIcon from '~/components/svg/ComputerIcon.vue';

@Component({
  components: { ComputerIcon }
})
export default class index extends Vue {

  private waveTimer = 1000; // in milliseconds

  runWaveTimer(): void {
    if (this.waveTimer <= 0) {
      return;
    }

    setTimeout(() => {
      this.waveTimer = this.waveTimer - 500;
      this.runWaveTimer();
    }, 500);
  }

  mounted(): void {
    this.runWaveTimer();
  }

}
</script>
