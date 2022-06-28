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
  components: {
    TopMenu,
    MainBanner,
    AboutMe,
    Map,
  },
})
</script>
