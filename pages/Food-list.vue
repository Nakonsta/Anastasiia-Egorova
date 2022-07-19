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
  head: {
    title: 'Анастасия Егорова | Рейтинг ресторанов | Frontend & Travel',
    meta: [
      {
        hid: 'description_restaurants',
        name: 'description',
        content: 'Мой личный рейтинг ресторанов и кафе в Москве и во всем мире, отзывы о кухне, сервисе и атмосфере.'
      },
      {
        hid: 'og_image_restaurants',
        property: 'og:image',
        content: 'https://anastasiia-egorova.ru/images/restaurants/Bocconcino.jpg',
      }
    ],
  },
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
