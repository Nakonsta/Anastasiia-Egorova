<template>
  <header class="header">
    <div class="container-fluid">
      <div class="header__inner d-flex justify-content-center align-center">
          <nav class="header__nav d-flex">
              <div class="header__nav-item">
                  <NuxtLink to="/" class="header__nav-link">
                    Главная
                  </NuxtLink>
              </div>
              <div class="header__nav-item">
                  <NuxtLink to="./" class="header__nav-link">
                    Путешествия
                  </NuxtLink>
              </div>
          </nav>
          <!-- div class="header__logo-item">
              <NuxtLink to="/" class="header__logo-link">АЕ</a>
          </div -->
          <nav class="header__nav d-flex">
              <div class="header__nav-item">
                  <NuxtLink to="/restaurants" class="header__nav-link">
                    Рестораны
                  </NuxtLink>
              </div>
              <div class="header__nav-item">
                  <NuxtLink to="./" class="header__nav-link">
                    Контакты
                  </NuxtLink>
              </div>
          </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TopMenu'
})
</script>

<style lang="sass" scoped>
.header 
  position: absolute
  top: 0
  left: 0
  right: 0
  z-index: 10 
  &::before
    content: ''
    z-index: 2
    position: absolute
    top: 0
    left: 0
    right: 0
    height: 80px
    background: linear-gradient(180deg, #003548, transparent)
    opacity: 0.5

.header__inner 
  z-index: 8
  position: relative
  padding-top: 1.5rem 
  @media (max-width: 1023px) 
    .header__nav 
      display: none  

.header__nav-item 
  padding: 0 2rem 

.header__nav-link 
  color: #ffffff
  font-family: 'Roboto Condensed', Arial, sans-serif
  text-transform: uppercase
  white-space: nowrap
  padding: 0.5rem 1rem
  letter-spacing: 0.15em
  background-color: #ffffff
  background-position: 100%
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
  transition: background-position 0.5s ease-in-out
  background-size: 200% 100%
  background-image: linear-gradient(90deg, #ffa77d, #ffa77d 50%, currentColor 0) 

.header__nav-link:hover 
  transition: background-position 1.2s ease-in-out
  background-size: 200% 100%
  background-position: 0
  color: #ffffff 

.header__logo-item 
  padding: 0.5rem 15rem 

.header__logo-link 
  font-size: 3rem
  color: #ffffff
  font-family: 'Pattaya', sans-serif
  font-weight: 700

</style>
