<template>
  <nav class="fixed bottom-8 inset-x-0 md:static md:h-20 md:max-w-7xl md:w-full mx-auto md:px-4 md:py-6">

    <div class="bg-gray-800 bg-opacity-40 py-2 w-52 mx-auto rounded-full md:hidden">
      <ul class="flex justify-center space-x-6">
        <li
          v-for="navLink in navLinks"
          :key="`header-mobile-${navLink.name}`"
          class="text-white"
        >
          <nuxt-link
            :to="navLink.href"
            exact-active-class="text-lime"
            class="text-gray-300"
          >
            <HeaderIcon :icon-name="navLink.icon" />
          </nuxt-link>
        </li>
      </ul>
    </div>


    <ul class="hidden md:flex justify-center flex-row space-x-8">
      <li
        v-for="navLink in navLinks"
        :key="`header-${navLink.name}`"
      >
        <nuxt-link
          :to="navLink.href"
          exact-active-class="text-white border-b border-lime"
          class="text-gray-300 text-montserrat tracking-wide font-thin px-1 py-2 uppercase hover:text-white border-b border-transparent hover:border-lime transition ease-in-out duration-150"
        >
          {{ navLink.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import HeaderIcon from '~/components/HeaderIcon.vue';

@Component({
  components: { HeaderIcon }
})
export default class Header extends Vue {
  private isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  get navLinks(): NavLink[] {
    return [
      {
        href: '/',
        name: 'Home',
        icon: 'home',
      },
      {
        href: '/about',
        name: 'About',
        icon: 'user-circle',
      },
      {
        href: '/skills',
        name: 'Skills',
        icon: 'sparkles',
      },
      {
        href: '/gallery',
        name: 'Gallery',
        icon: 'photograph'
      }
    ];
  }
}
</script>
