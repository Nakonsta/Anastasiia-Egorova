<template>
  <div class="root">
    <TopMenu />
    <main>
      <MainBanner />
      <AboutMe />
      <Map />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TopMenu from '@/components/TopMenu.vue'
import MainBanner from '@/components/MainBanner.vue'
import AboutMe from '@/components/AboutMe.vue'
import Map from '@/components/Map.vue'

export default Vue.extend({
  name: 'IndexPage',
  head: {
    title: 'Анастасия Егорова | Frontend & Travel',
    meta: [
      {
        hid: 'description_index',
        name: 'description',
        content: 'Путешествия, приключения, рестораны и кафе, фронтенд-разработка и верстка'
      }
    ],
  },
  components: {
    TopMenu,
    MainBanner,
    AboutMe,
    Map,
  },
})
</script>
