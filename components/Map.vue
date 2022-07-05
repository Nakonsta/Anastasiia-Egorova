<template>
  <div class="root">
    <div class="container">
      <div id="map" style="height: 650px"></div>
    </div>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Map',
  mounted() {
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
}
})
</script>

<style lang="sass" scoped>
.root 
  padding-bottom: 48px
</style>
