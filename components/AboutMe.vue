<template>
  <section class="about">
    <div class="container">
      <div class="h2">
        Обо мне
      </div>
      <div class="inner">
        <div class="block photo"></div>
        <div class="block info">
          <div class="text">
            Если попытаться описать меня несколькими словами, то это будут любовь, родные, путешествия, море, дороги, фронтенд и верстка, уют, вкусности и кофе, орхидеи. Я родилась в Твери, по образованию финансист, занималась маркетингом, но в 27 лет кардинально сменила сферу деятельности и стала верстальщиком, а потом и фронтенд-разработчиком.
            <br /><br />
            До 2020 года я активно путешествовала, суммарно посетила более 30 стран, и моя особая любовь - это направления, куда ездить непринято. Моей голубой мечтой была Латинская Америка и в 2017 году я ее осуществила, слетав в Панами и Колумбию, посмотрев не только крупные города, но и проведя 5 дней в джунглях - ночуя в гамаке, купаясь в Амазонке с пираньями и фото-охотясь на кайманов.
          </div>
          <div class="buttons">
            <NuxtLink to="./restaurants">
              <AppButton text="Рейтинг ресторанов"/>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import AppButton from '@/components/AppButton.vue'

export default Vue.extend({
  name: 'AboutMe',
  components: {
    AppButton,
  },
})
</script>

<style lang="sass" scoped>
.about
  padding: 160px 0
  @media (max-width: 1023px)
    padding: 160px 0 60px

.inner
  display: flex
  @media (max-width: 1023px)
    flex-direction: column

.block
  width: calc((100% - 48px)/2)
  @media (max-width: 1023px)
    width: 100%

.photo
  margin-right: 24px
  background: url('/images/about-me.jpg') no-repeat 50%  28%
  background-size: cover 
  @media (max-width: 1023px)
    margin-right: 0
    height: 400px

.info
  padding-left: 24px
  font-size: 19px
  @media (max-width: 1023px)
    padding-top: 32px
    padding-left: 0

.buttons
  padding-top: 24px

</style>
