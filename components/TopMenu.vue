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
        <div class="header__mobile">
          <div class="header__logo">
            <NuxtLink to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24">
                <path fill="#ffffff" d="M11.8988601,24 C11.5774615,24 11.2582643,23.9156879 10.9764902,23.7534477 L8.04053599,22.0152536 C7.60202502,21.7700221 7.81599724,21.6832885 7.96062661,21.6333176 C8.54530789,21.4285911 8.66396121,21.3823625 9.28804684,21.0279435 C9.35364738,20.9905204 9.43950043,21.0037286 9.50664192,21.043353 L11.7621556,22.3817801 C11.843606,22.4258073 11.9591774,22.4258073 12.034684,22.3817801 L20.8291183,17.3054433 C20.9105686,17.2592148 20.9634012,17.1645563 20.9634012,17.0676964 L20.9634012,6.91942563 C20.9634012,6.81816306 20.9105686,6.72790729 20.8273572,6.677276 L12.0364451,1.60534197 C11.9549948,1.55691204 11.8471281,1.55691204 11.7656778,1.60534197 L2.97652685,6.677276 C2.89133421,6.72570593 2.83718075,6.82036442 2.83718075,6.91722427 L2.83718075,17.0654951 C2.83718075,17.1623549 2.89001339,17.254812 2.97366508,17.3010406 L5.3819532,18.6923003 C6.6895612,19.3461043 7.48865497,18.5756282 7.48865497,17.8007494 L7.48865497,7.78456021 C7.48865497,7.64147179 7.60092434,7.53140378 7.74401276,7.53140378 L8.85790105,7.53140378 C8.99658675,7.53140378 9.11105748,7.64147179 9.11105748,7.78456021 L9.11105748,17.8051521 C9.11105748,19.5486294 8.16006985,20.5502483 6.50684829,20.5502483 C5.99833407,20.5502483 5.59768651,20.5502483 4.4793955,19.9999083 L2.17236995,18.6702867 C1.60221764,18.3400826 1.25,17.7237018 1.25,17.0654951 L1.25,6.91722427 C1.25,6.25681619 1.60221764,5.64043532 2.17236995,5.314634 L10.9756096,0.236095888 C11.5325538,-0.0786986292 12.2722108,-0.0786986292 12.8247522,0.236095888 L21.6169851,5.31683536 C22.184936,5.64483804 22.539355,6.25901755 22.539355,6.91942563 L22.539355,17.0676964 C22.539355,17.7259031 22.184936,18.3400826 21.6169851,18.6702867 L12.8247522,23.7488248 C12.5429781,23.9117255 12.2237809,23.9953771 11.8979796,23.9953771 L11.8988601,24 Z M14.6153387,17.007159 C10.7673609,17.007159 9.9605624,15.2407875 9.9605624,13.7592721 C9.9605624,13.618385 10.0741526,13.5061157 10.2152598,13.5061157 L11.3511617,13.5061157 C11.4766392,13.5061157 11.5823045,13.5974721 11.6021167,13.7214087 C11.7738228,14.8788839 12.2845384,15.4626847 14.6113762,15.4626847 C16.4649216,15.4626847 17.2530085,15.0439859 17.2530085,14.0610786 C17.2530085,13.495329 17.0284698,13.0748692 14.1490906,12.7930951 C11.7408024,12.5553482 10.2526829,12.0248203 10.2526829,10.0986301 C10.2526829,8.32433374 11.7496079,7.26768082 14.2569572,7.26768082 C17.072497,7.26768082 18.4681594,8.24508478 18.6442682,10.3451825 C18.6508723,10.4178273 18.624456,10.4882709 18.576026,10.5411035 C18.5275961,10.5917348 18.4593539,10.6225539 18.3889104,10.6225539 L17.2464044,10.6225539 C17.127531,10.6225539 17.0240671,10.5389022 16.9998521,10.4244314 C16.7246821,9.20707921 16.0598713,8.81743844 14.2525545,8.81743844 C12.2295044,8.81743844 11.9939589,9.52187372 11.9939589,10.0502002 C11.9939589,10.690796 12.2713303,10.8779116 15.001017,11.2389347 C17.7042874,11.5977564 18.9876804,12.1040693 18.9876804,14.0038432 C18.9876804,15.9190266 17.3894929,17.0175054 14.6025708,17.0175054 L14.6153387,17.007159 Z"/>
              </svg>
            </NuxtLink>
          </div>
          <div 
            class="header__burger"
            @click="toggleMobileMenu"
          >
            <svg width="30" height="30" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97;" xml:space="preserve">
              <g>
                <g id="Menu">
                  <path d="M12.03,84.212h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03    C5.39,60.152,0,65.541,0,72.182C0,78.823,5.39,84.212,12.03,84.212z"/>
                  <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03    S379.58,180.455,372.939,180.455z"/>
                  <path d="M372.939,300.758H12.03c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h360.909    c6.641,0,12.03-5.39,12.03-12.03C384.97,306.147,379.58,300.758,372.939,300.758z"/>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="header__mobile-menu">
      <div class="header__mobile-menu-inner">
        <div class="container-fluid">
          <nav class="header__mobile-menu-nav">
            <div class="header__nav-item header__nav-item--mobile">
              <NuxtLink to="/" class="header__nav-link header__nav-link--mobile">
                Главная
              </NuxtLink>
            </div>
            <div class="header__nav-item header__nav-item--mobile">
              <NuxtLink to="./" class="header__nav-link header__nav-link--mobile">
                Путешествия
              </NuxtLink>
            </div>
            <div class="header__nav-item header__nav-item--mobile">
              <NuxtLink to="/restaurants" class="header__nav-link header__nav-link--mobile">
                Рестораны
              </NuxtLink>
            </div>
            <div class="header__nav-item header__nav-item--mobile">
              <NuxtLink to="./" class="header__nav-link header__nav-link--mobile">
                Контакты
              </NuxtLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TopMenu',
  methods: {
    toggleMobileMenu() {
      const mobileMenuBg = document.querySelector('.header__mobile-menu')
      mobileMenuBg?.classList.toggle('active')
    }
  }
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
    
.header__nav
  @media (max-width: 1023px) 
    display: none  

.header__nav-item 
  padding: 0 2rem
  &--mobile
    padding: 0.5rem 0

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
  &--mobile
    padding: 1.5rem 0
    font-size: 20px

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

.header__mobile
  display: none
  justify-content: space-between
  align-items: center
  width: 100%
  @media (max-width: 1023px)
    display: flex
  &-menu
    position: absolute
    height: 100vh
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: url('/images/sea.png') 50% 100% no-repeat
    background-size: cover
    transform: translateY(-89vh)
    transition: all 1s ease-out
    &.active
      transform: translateY(0)

.header__mobile-menu-nav
  padding: 120px 0

</style>
