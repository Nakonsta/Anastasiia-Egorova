<template>
  <div v-if="restaurant">
    <TopMenu />
    <div
      :style="`background-image: url(/images/restaurants/${restaurant.images}.jpg`"
      class="banner"
    >
      <div class="inner">
        <div class="container">
          <div class="title">
            <div class="h1">
              {{ restaurant.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="container--left">
        <div class="info__texts">
          <div class="about">
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
            <div class="description">
              {{ restaurant.description }}
            </div>
          </div>
        </div>
      </div>
      <div 
        :style="`background-image: url(/images/restaurants/${restaurant.images}-interior.jpg`"
        class="pic pic--interior"
      ></div>
    </div>
    <div class="info">
      <div 
        :style="`background-image: url(/images/restaurants/${restaurant.images}-food.jpg`"
        class="pic pic--details"
      ></div>
      <div class="container--right">
        <div class="details__texts">
          <div class="about">
            <div class="cuisine">
              Кухня:
              <ul class="cuisine__list">
                <li 
                  v-for="(item, key) in restaurant.cuisine"
                  :key="key"
                  class="cuisine__item"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="rating">
              Мой личный рейтинг: {{ restaurant.isRecommended }} из 5
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
                {{ restaurant.address }}
              </span>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TopMenu from '@/components/TopMenu.vue'

const name = 'Restaurant'

export default {
  name,
  components: {
    TopMenu,
  },
  data: () => ({
    restaurant: null,
  }),
  computed: {
    ...mapState({
      restaurants: 'restaurants',
    }),
  },
  created() {
    this.restaurant = this.getRestaurant()
  },
  methods: {
    getRestaurant() {
      const routeArray = this.$route.path.split('/')
      const id = Number(routeArray[routeArray.length - 1])
      const restaurant = this.restaurants.filter((item) => item.id === id)[0]
      return restaurant
    }
  }
}
</script>

<style lang="sass" scoped>
.banner
  position: relative
  height: 100vh
  color: #fff
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

.container--left,
.container--right
  height: 100%

.info
  position: relative
  height: 500px
  background-color: #ffbb9b

.info__texts
  display: flex
  align-items: center
  max-width: 35%
  height: 100%
  font-family: 'Roboto Condensed', Arial, sans-serif

.details__texts
  display: flex
  align-items: center
  margin-left: 65%
  height: 100%
  font-family: 'Roboto Condensed', Arial, sans-serif

.location
  display: flex
  padding-bottom: 32px
  font-size: 14px

.marker
  width: 22px
  height: 22px
  margin-right: 12px

.pic
  position: absolute
  top: 0
  bottom: 0
  width: 50%
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: cover
  &--interior
    right: 0
  &--details
    left: 0

.subtitle
  font-size: 28px
  font-weight: 700
  padding-bottom: 2px

.cuisine
  &__list
    padding-bottom: 24px
  &__item
    position: relative
    padding-left: 20px
    &::before
      content: '–'
      position: absolute
      top: -2px
      left: 0

.rating
  padding-bottom: 24px

</style>
