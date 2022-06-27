<template>
  <button class="button">
    {{ text }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AppButton',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
})

</script>

<style lang="sass"scoped>
.button 
  cursor: pointer
  width: 100%
  max-width: 200px
  height: 40px
  border: none
  position: relative
  color: #fff
  font-weight: 600
  border-radius: 4px
  background-size: 200% auto
  overflow: hidden
  background-image: linear-gradient(to right, #003548 0%, #007f96 51%, #025764 100%)
  transition: all 0.4s ease-in
  
  &:hover 
   background-position: right center
  
</style>
