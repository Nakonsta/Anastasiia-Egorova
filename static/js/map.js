document.addEventListener('DOMContentLoaded', function(){
  ymaps.ready(function(){
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
        balloonContentBody: `<img src='./images/china.jpg'>`,
      }, marker))
      .add(new ymaps.Placemark([32.802947, 51.644766], {
        balloonContentHeader: `<div>Исфахан, Иран</div>`,
        balloonContentBody: `<img src='./images/isfahan.jpg'>`,
      }, marker))
      .add(new ymaps.Placemark([4.658276, -74.092760], {
        balloonContentHeader: `<div>Богота, Колумбия</div>`,
        balloonContentBody: `<img src='./images/bogota.jpg'>`,
      }, marker))
      .add(new ymaps.Placemark([-4.212306, -69.940215], {
        balloonContentHeader: `<div>Летисия, Колумбия</div>`,
        balloonContentBody: `<img src='./images/leticia.jpg'>`,
      }, marker))
      .add(new ymaps.Placemark([48.856607, 2.351570], {
        balloonContentHeader: `<div>Париж, Франция</div>`,
        balloonContentBody: `<img src='./images/paris.jpg'>`,
      }, marker))
      .add(new ymaps.Placemark([55.755124, 37.617813], {
        balloonContentHeader: `<div>Москва, Россия</div>`,
        balloonContentBody: `<img src='./images/moscow.jpg'>`,
      }, marker))
      .add(new ymaps.Placemark([56.859551, 35.911728], {
        balloonContentHeader: `<div>Тверь, Россия</div>`,
        balloonContentBody: `<img src='./images/tver.jpg'>`,
      }, marker))
  });
})
