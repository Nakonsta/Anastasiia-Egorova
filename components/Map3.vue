<template>
  <section class="map">
    <div class="container">
      <div class="h2">
        Где я была2
      </div>
      <div class="inner">
        <yandexMap
          v-if="showMap"
          ref="map"
          id="map"
          :coords="[50,50]"
          :zoom="2"
          ymap-class="mapClass"
          @map-was-initialized="onInitMap"
        >
          <ymapMarker
            v-for="(place, key) in places"
            :key="key"
            :markerId="place.id"
            :coords="place.coords"
            :icon="markerIcon"
            :balloonTemplate="`<div>${place.title}</div><img src='/images/${place.image}'>`"
          />
        </yandexMap>
      </div>
    </div>
  </section>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  name: 'Map',
  components: { yandexMap, ymapMarker },
  data: () => ({
    showMap: false,
    map: null,
    coords: [],
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: '/images/marker.svg',
      imageSize: [30, 30],
      imageOffset: [-15, -15],
      content: '',
      contentOffset: [0, 0],
    },
    places: [{
      id: 1,
      title: 'Пекин, Китай',
      image: 'china.jpg',
      coords: [40.003313, 116.380455],
    },
    {
      id: 2,
      title: 'Исфахан, Иран',
      image: 'isfahan.jpg',
      coords: [32.802947, 51.644766],
    }]
  }),
  computed: {
    balloonTemplate() {
      return `
        <div>Пекин, Китай</div>
        <img src="/images/china.jpg">
      `
    }
  },
  created() { 
    this.showMap = true
  },
  methods: {
    onInitMap(map) {
      this.map = map;

      // ymaps
    },
  },
}
</script>

<style lang="sass" scoped>

.map
  padding-bottom: 60px

.h2
  font-size: 22px
  text-align: center
  text-transform: uppercase

.inner
  height: 600px

.ymap-container
  height: 600px

.mapClass
  width: 100%
  height: 600px

</style>
