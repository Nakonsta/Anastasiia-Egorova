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
            <NuxtLink 
              to="/cv"
              class="link"
            >
              <Button text="CV" />
            </NuxtLink>
            <NuxtLink 
              to="/contacts"
              class="link"
            >
              <Button text="Contacts" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Button from '@/components/Button.vue'

export default Vue.extend({
  name: 'AboutMe',
  components: {
    Button,
  },
})
</script>

<style lang="sass" scoped>
.h2
  font-size: 22px
  text-align: center
  text-transform: uppercase

.about
  padding: 160px 0

.inner
  display: flex

.block
  width: calc((100% - 24px)/2)

.photo
  padding-right: 12px
  background: url('/images/about-me.jpg') no-repeat 50%  20%
  background-size: cover 

.info
  padding-left: 12px
  font-size: 19px

.buttons
  display: flex
  padding-top: 24px

.link
  margin-right: 8px

</style>
