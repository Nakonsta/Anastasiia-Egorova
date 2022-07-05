<template>
  <div>
    <div class="container">
      Restaurants
      <div
        v-for="(restaurant, key) in restaurants"
        :key="key"
      >
        <NuxtLink :to="getLink(restaurant.id)">
          {{ restaurant.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
const name = 'Restaurants'

export default {
  name,
  data: () => ({
    
  }),
  computed: {
    ...mapState({
      restaurants: 'restaurants',
    }),
  },
  methods: {
    getLink(id: Number) {
      return `./restaurants/${id}`
    }
  }
}
</script>
