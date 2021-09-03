<template>
  <footer class="flex justify-center md:justify-start md:items-end max-w-7xl w-full mx-auto">
    <div class="mt-8 md:mt-0 mb-20">
      <a
        v-for="(contactLink, index) in contactLinks"
        :key="`contact-${contactLink.name}`"
        target="_blank"
        :href="contactLink.href"
      ><span class="text-sm md:text-base text-gray-300 md:hover:text-white transition ease-in-out duration-150 cursor-pointer">{{
          contactLink.name
        }}</span><span class="text-gray-600 mx-2 md:mx-4">{{
          index >= contactLinks.length - 1 ? '' : '/'
        }}</span>
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';

@Component
export default class Footer extends Vue {

  get mailIcon(): string {
    return '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n' +
      '  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />\n' +
      '</svg>';
  }

  get githubIcon(): string {
    return '<svg role="img" class="h-6 w-6" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>';
  }

  get facebookIcon(): string {
    return '<svg role="img" class="h-6 w-6" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>';
  }

  get telegramIcon(): string {
    return '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 240 240"><defs><linearGradient id="a" x1=".667" x2=".417" y1=".167" y2=".75"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="b" x1=".66" x2=".851" y1=".437" y2=".802"><stop offset="0" stop-color="#37aee2"/><stop offset="1" stop-color="#37aee2"/></linearGradient></defs><circle cx="120" cy="120" r="120" fill="url(#a)"/><path fill="#37aee2" d="M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80"/><path fill="#a9c9dd" d="M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035"/><path fill="url(#b)" d="M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258"/></svg>';
  }

  get contactLinks() {
    return [
      {
        name: 'Github',
        href: 'https://www.github.com/DawidWetzler'
      },
      {
        name: 'Telegram',
        href: 'https://t.me/wecler'
      },
      {
        name: 'E-Mail',
        href: 'mailto:hello@wecler.me'
      },
      {
        name: 'Facebook',
        href: 'https://m.me/wecler'
      },
    ];
  }

}
</script>
