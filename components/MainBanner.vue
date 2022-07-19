<template>
  <section class="first-screen">
    <div class="first-screen__pic"></div>
    <div class="first-screen__inner">
      <div class="first-screen__text text-center">
        <div class="first-screen__title">
          Frontend & Travel
        </div>
        <div class="first-screen__subtitle">
          Меня зовут Анастасия Егорова, я фронтенд-разработчик. Живу в Москве, отдыхаю в Колумбии, Ливане, Иране и не только
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MainBanner'
})
</script>

<style lang="sass" scoped>
.first-screen 
  height: 100vh
  position: relative 

.first-screen__pic 
  position: absolute
  top: 0
  left: 0
  right: 0
  height: 120vh
  background: url('/images/sea.jpg') 50% 100% no-repeat
  background-size: cover
    
.first-screen__inner 
  position: relative
  height: 100%
  width: 100%

.first-screen__text 
  position: absolute
  bottom: 9%
  left: 50%
  transform: translateX(-50%)
  padding: 2.5rem 6.5rem
  border-radius: 4px
  min-width: 800px
  @media (max-width: 1365px) 
    bottom: 3%
  @media (max-width: 1023px) 
    min-width: 0 
  @media (max-width: 767px)
    bottom: 10%
    left: 0
    right: 0
    transform: none
    padding: 2rem 5%

.first-screen__title 
  font-size: 5rem
  padding-bottom: 1rem
  font-family: 'Dancing Script', cursive
  font-weight: 700
  background: linear-gradient(45deg, #021d2f, #02738b, #328092)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
  white-space: nowrap
  @media (max-width: 1023px)
    font-size: 3.5rem
  @media (max-width: 767px) 
    padding-bottom: 12rem
    white-space: normal 
    background: #fff
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent

.first-screen__subtitle 
  font-size: 1.5rem
  line-height: 1.3
  font-weight: 300
  font-family: 'Roboto Condensed', Arial, sans-serif
  max-width: 670px 
  @media (max-width: 1365px) 
    font-size: 1.4rem  

</style>
