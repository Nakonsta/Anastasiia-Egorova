<template>
  <div>
    <div class="container">
        {{ restaurants }}
        <ul>
          <li 
            v-for="(restaurant, key) in restaurants"
            :key="key"
          >
            {{ restaurant.name }}
          </li>
        </ul>
    </div>
  </div>
</template>

<script lang="ts">
const name = 'Contacts'

export default {
  name,
  data: () => ({
    restaurants: [
      {
        id: 1,
        name: 'Farro Pasta Bar',
        city: 'Moscow',
      },
      {
        id: 2,
        name: 'Тифлисский дворик',
        city: 'Moscow',
        recomended: true,
      },
    ]
  })
}
</script>
