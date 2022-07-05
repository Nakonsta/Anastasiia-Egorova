export const state = () => ({
  restaurants: [
    {
      id: 1,
      title: 'Farro Pasta Bar',
      city: 'Москва',
      address: 'ул. Покровка, д. 1/13/6, строение 2, Москва, 101000',
      isRecommended: '5',
      isVisited: true,
      price: 3,
      cuisine: ['Итальянская'],
      mood: ['Уютно', 'Нешумно'],
      images: 'Farro',
    },
    {
      id: 2,
      title: 'Гастробар "Соль"',
      city: 'Калининград',
      address: 'ул. Леонова 55, Калининград, 236023',
      isRecommended: '5',
      isVisited: true,
      price: 4,
      cuisine: ['Авторская', 'Raw', 'Европейская', 'Азиатская', 'Фьюжн'],
      mood: ['Стильно', 'Пафосно', 'Атмосферно'],
      images: 'Sol',
    },
    {
      id: 3,
      title: 'AQ Kitchen',
      city: 'Москва',
      address: 'ул. Большая Грузинская, 69, Москва, 123056',
      isRecommended: '5',
      isVisited: true,
      price: 4,
      cuisine: ['Авторская', 'Молекулярная'],
      mood: ['Шумно'],
    },
    {
      id: 4,
      title: 'Таверна "Дядя Геральт"',
      city: 'Москва',
      address: 'Земляной Вал, 58, Москва, 105064',
      isRecommended: '5',
      isVisited: true,
      price: 3,
      cuisine: ['Бар', 'Русская'],
      mood: ['Шумная туса', 'Поорать', 'Атмосферно'],
    },
    {
      id: 5,
      title: 'Сойка напела',
      city: 'Москва',
      address: 'Красная Пресня, 36, стр. 1, Москва, 123022',
      isRecommended: '5',
      isVisited: true,
      price: 3,
      cuisine: ['Европейская'],
      mood: ['Завтрак'],
    },
  ]
})

export const getters = {
  
}

export const mutations = {
  
}

export const actions = {
}
