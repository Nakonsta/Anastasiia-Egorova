<template>
  <div class="root">
    <TopMenu />
    <div class="banner">
      <div class="inner">
        <div class="container">
          <div class="title">
            <div class="h1">
              Рестораны и кафе
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="announce">
      <div class="container">
        <div class="announce__text">
          Это мой личный список классных и потенциально классных кафе и ресторанов. Отзывам на агрегаторах доверия немного, так как часто высокий рейтинг не оправдывал ожидания. Здесь я собрала как свои любимые кафе и ресторанчики, так и те, куда еще только собираюсь сходить. Мои впечатления и рекомендации по выбору блюд – на странице самих точек.
        </div>
      </div>
    </div>
    <div class="restaurants">
      <div class="container">
        <div class="restaurants__inner">
          <div
            v-for="(restaurant, key) in restaurants"
            :key="key"
            class="restaurant"
          >
            <NuxtLink 
              :to="getLink(restaurant.id)"
              class="restaurant__link"
            ></NuxtLink>
            <div
              class="restaurant__pic"
            >
              <div
                :style="`background-image: url(/images/restaurants/${restaurant.images}.jpg`"
                class="restaurant__pic-inner"
              ></div>
            </div>
            <div class="texts">
              <div class="subtitle">
                {{ restaurant.title }}
              </div>
              <div class="location">
                <span class="marker">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 368.666 368.666" style="enable-background:new 0 0 368.666 368.666;" xml:space="preserve">
                    <g id="XMLID_2_">
                      <g>
                        <g>
                          <path d="M184.333,0C102.01,0,35.036,66.974,35.036,149.297c0,33.969,11.132,65.96,32.193,92.515     c27.27,34.383,106.572,116.021,109.934,119.479l7.169,7.375l7.17-7.374c3.364-3.46,82.69-85.116,109.964-119.51     c21.042-26.534,32.164-58.514,32.164-92.485C333.63,66.974,266.656,0,184.333,0z M285.795,229.355     c-21.956,27.687-80.92,89.278-101.462,110.581c-20.54-21.302-79.483-82.875-101.434-110.552     c-18.228-22.984-27.863-50.677-27.863-80.087C55.036,78.002,113.038,20,184.333,20c71.294,0,129.297,58.002,129.296,129.297     C313.629,178.709,304.004,206.393,285.795,229.355z"/>
                          <path d="M184.333,59.265c-48.73,0-88.374,39.644-88.374,88.374c0,48.73,39.645,88.374,88.374,88.374s88.374-39.645,88.374-88.374     S233.063,59.265,184.333,59.265z M184.333,216.013c-37.702,0-68.374-30.673-68.374-68.374c0-37.702,30.673-68.374,68.374-68.374     s68.373,30.673,68.374,68.374C252.707,185.341,222.035,216.013,184.333,216.013z"/>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <span class="city">
                  {{ restaurant.city }}
                </span>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import TopMenu from '@/components/TopMenu.vue'

const name = 'Restaurants'

export default {
  name,
  components: {
    TopMenu,
  },
  data: () => ({
    
  }),
  computed: {
    ...mapState({
      restaurants: 'restaurants',
    }),
  },
  methods: {
    getLink(id: Number) {
      return `/restaurants/${id}`
    }
  }
}
</script>

<style lang="sass" scoped>
.banner
  position: relative
  height: 100vh
  color: #fff
  background-image: url('/images/restaurants.jpg')
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: cover
  &::before
    content: ''
    position: absolute
    z-index: 2
    bottom: 0
    left: 0
    right: 0
    height: 240px
    background: linear-gradient(0deg, #003548, transparent)
    opacity: 0.5

.inner
  z-index: 3
  position: relative
  display: flex
  justify-content: flex-start
  align-items: flex-end
  height: 100%

.title
  padding-bottom: 48px

.h1
  font-size: 40px
  font-weight: 700

.announce
  padding: 60px 0
  &__text
    max-width: 800px
    margin: 0 auto
    font-size: 20px
    text-align: center

.restaurants__inner
  display: flex
  flex-wrap: wrap

.restaurant
  position: relative
  width: calc((100% - 48px)/3)
  height: 500px
  margin-right: 24px
  margin-bottom: 24px
  @media (max-width: 1023px) 
    width: calc((100% - 24px)/2)
    height: 300px
  @media (max-width: 575px)
    width: 100%
    margin-right: 0
  &:nth-child(3n + 3)
    margin-right: 0
    @media (max-width: 1023px)
      margin-right: 24px
    @media (max-width: 575px)
      margin-right: 0
  &:nth-child(2n + 2)
    @media (max-width: 1023px)
      margin-right: 0
  
  &__link
    z-index: 5
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
  &__pic
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    overflow: hidden
    &::before
      content: ''
      position: absolute
      z-index: 2
      bottom: 4px
      left: 0
      right: 0
      height: 240px
      background: linear-gradient(0deg, #222, transparent)
      opacity: 0.8
    &::after
      content: ''
      position: absolute
      z-index: 7
      bottom: 0
      left: 0
      right: 0
      height: 6px
      background-color: #ff8200
      transition: all .25s ease-in
    &-inner
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0
      background-repeat: no-repeat
      background-position: 50% 50%
      background-size: cover
      transition: all .25s ease-in
  &:hover
    .restaurant__pic-inner
      transform: scale(1.05)
    .restaurant__pic::after
      height: 10px

.texts
  z-index: 4
  position: absolute
  left: 0
  right: 0
  bottom: 0
  padding: 24px
  color: #fff

.subtitle
  font-size: 18px
  font-weight: 700
  line-height: 16px
  padding-bottom: 8px

.location
  display: flex
  font-size: 14px

.marker
  width: 20px
  height: 20px
  margin-right: 12px

path
  fill: #fff

</style>
