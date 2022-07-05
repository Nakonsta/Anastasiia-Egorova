document.addEventListener('DOMContentLoaded', function(){
  ymaps.ready(function(){
    initMap()
  });
})

const initMap = () => {
  if (!document.querySelector('#map')) return
  let myMap = new ymaps.Map ("map", {
    center: [55.76, 37.64], 
    zoom: 2
  });

  const marker = {
    iconLayout: 'default#image',
    iconImageHref: './images/marker.svg',
    iconImageSize: [30, 30],
    iconImageOffset: [-15, -15]
  }

  myMap.geoObjects
    .add(new ymaps.Placemark([40.003313, 116.380455], {
      balloonContentHeader: `<div>Пекин, Китай</div>`,
      balloonContentBody: `<img src='./images/map/china.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([36.063627, 120.313935], {
      balloonContentHeader: `<div>Циндао, Китай</div>`,
      balloonContentBody: `<img src='./images/map/cindao.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([32.802947, 51.644766], {
      balloonContentHeader: `<div>Исфахан, Иран</div>`,
      balloonContentBody: `<img src='./images/map/isfahan.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([4.658276, -74.092760], {
      balloonContentHeader: `<div>Богота, Колумбия</div>`,
      balloonContentBody: `<img src='./images/map/bogota.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([-4.212306, -69.940215], {
      balloonContentHeader: `<div>Летисия, Колумбия</div>`,
      balloonContentBody: `<img src='./images/map/leticia.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([48.856607, 2.351570], {
      balloonContentHeader: `<div>Париж, Франция</div>`,
      balloonContentBody: `<img src='./images/map/paris.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([55.755124, 37.617813], {
      balloonContentHeader: `<div>Москва, Россия</div>`,
      balloonContentBody: `<img src='./images/map/moscow.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([56.859551, 35.911728], {
      balloonContentHeader: `<div>Тверь, Россия</div>`,
      balloonContentBody: `<img src='./images/map/tver.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([38.716101, -9.141501], {
      balloonContentHeader: `<div>Лиссабон, Португалия</div>`,
      balloonContentBody: `<img src='./images/map/lisbon.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([7.895269, 98.294994], {
      balloonContentHeader: `<div>Пхукет, Таиланд</div>`,
      balloonContentBody: `<img src='./images/map/phuket.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([12.545594, -81.719872], {
      balloonContentHeader: `<div>Сан Андрес, Колумбия</div>`,
      balloonContentBody: `<img src='./images/map/san-andres.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([27.234283, 33.834912], {
      balloonContentHeader: `<div>Хургада, Египет</div>`,
      balloonContentBody: `<img src='./images/map/hurgada.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([33.890641, 35.484496], {
      balloonContentHeader: `<div>Бейрут, Ливан</div>`,
      balloonContentBody: `<img src='./images/map/beirut.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([29.574711, 35.419188], {
      balloonContentHeader: `<div>Вади-Рам, Ливан</div>`,
      balloonContentBody: `<img src='./images/map/wadi-ram.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([59.325005, 18.070897], {
      balloonContentHeader: `<div>Стокгольм, Швеция</div>`,
      balloonContentBody: `<img src='./images/map/stockholm.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([55.305472, 21.006941], {
      balloonContentHeader: `<div>Неринга, Литва</div>`,
      balloonContentBody: `<img src='./images/map/neringa.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([50.080345, 14.428974], {
      balloonContentHeader: `<div>Прага, Чехия</div>`,
      balloonContentBody: `<img src='./images/map/praga.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([41.011218, 28.978178], {
      balloonContentHeader: `<div>Стамбул, Турция</div>`,
      balloonContentBody: `<img src='./images/map/istanbul.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([37.785356, 20.774646], {
      balloonContentHeader: `<div>Закинф, Греция</div>`,
      balloonContentBody: `<img src='./images/map/zakinf.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([53.405332, 107.673058], {
      balloonContentHeader: `<div>Байкал, Россия</div>`,
      balloonContentBody: `<img src='./images/map/baikal.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([43.345068, 42.465897], {
      balloonContentHeader: `<div>Эльбрус, Россия</div>`,
      balloonContentBody: `<img src='./images/map/elbrus.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([53.902284, 27.561831], {
      balloonContentHeader: `<div>Минск, Беларусь</div>`,
      balloonContentBody: `<img src='./images/map/minsk.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([53.677839, 23.829529], {
      balloonContentHeader: `<div>Гродно, Беларусь</div>`,
      balloonContentBody: `<img src='./images/map/grodno.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([52.093754, 23.685107], {
      balloonContentHeader: `<div>Брест, Беларусь</div>`,
      balloonContentBody: `<img src='./images/map/brest.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([55.796127, 49.106414], {
      balloonContentHeader: `<div>Казань, Россия</div>`,
      balloonContentBody: `<img src='./images/map/kazan.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([56.838011, 60.597474], {
      balloonContentHeader: `<div>Екатеринбург, Россия</div>`,
      balloonContentBody: `<img src='./images/map/ekaterinburg.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([44.868345, 13.847413], {
      balloonContentHeader: `<div>Пула, Хорватия</div>`,
      balloonContentBody: `<img src='./images/map/pula.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([40.416766, -3.703978], {
      balloonContentHeader: `<div>Мадрид, Испания</div>`,
      balloonContentBody: `<img src='./images/map/madrid.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([41.902695, 12.496176], {
      balloonContentHeader: `<div>Рим, Италия</div>`,
      balloonContentBody: `<img src='./images/map/rome.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([47.024512, 28.832157], {
      balloonContentHeader: `<div>Кишинёв, Молдавия</div>`,
      balloonContentBody: `<img src='./images/map/kishinev.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([34.917652, 33.631253], {
      balloonContentHeader: `<div>Ларнака, Кипр</div>`,
      balloonContentBody: `<img src='./images/map/larnaka.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([61.003184, 69.018911], {
      balloonContentHeader: `<div>Ханты-Мансийск, Россия</div>`,
      balloonContentBody: `<img src='./images/map/khanty-mansiisk.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([43.779793, 11.265817], {
      balloonContentHeader: `<div>Флоренция, Италия</div>`,
      balloonContentBody: `<img src='./images/map/florence.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([31.945310, 35.928371], {
      balloonContentHeader: `<div>Амман, Иордания</div>`,
      balloonContentBody: `<img src='./images/map/amman.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([61.241778, 73.393032], {
      balloonContentHeader: `<div>Сургут, Россия</div>`,
      balloonContentBody: `<img src='./images/map/surgut.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([13.771370, 100.513782], {
      balloonContentHeader: `<div>Бангкок, Таиланд</div>`,
      balloonContentBody: `<img src='./images/map/bangkok.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([37.029694, 27.408022], {
      balloonContentHeader: `<div>Гюмбет, Турция</div>`,
      balloonContentBody: `<img src='./images/map/gumbet.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([40.177628, 44.512555], {
      balloonContentHeader: `<div>Ереван, Армения</div>`,
      balloonContentBody: `<img src='./images/map/erevan.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([39.764008, 45.333238], {
      balloonContentHeader: `<div>Ехегнадзор, Армения</div>`,
      balloonContentBody: `<img src='./images/map/ehegnadzor.jpg'>`,
    }, marker))
    .add(new ymaps.Placemark([40.563000, 44.9957500], {
      balloonContentHeader: `<div>Севан, Армения</div>`,
      balloonContentBody: `<img src='./images/map/ehegnadzor.jpg'>`,
    }, marker))
}
