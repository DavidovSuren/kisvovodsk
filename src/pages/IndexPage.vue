<template>
<div class="q-pa-md">
    <q-carousel
    swipeable
      arrows
      animated
      v-model="info"
      height="250px"
    >
      <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2" style="color:bisque">13-14 августа</div>
          <div class="text-subtitle1" style="color:bisque">акция в глория джинс</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Second stop</div>
          <div class="text-subtitle1">Famous City</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">Famous Bridge</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="q-pa-md">
    <h2>ЕДА</h2>
    <q-carousel style="margin-top:-40px"
      v-model="slide"
      animated
      control-color="primary"
      arrows
      height="200px"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/Food/restraunt.png" width="100px" height="50px"/>Рестораны</q-btn>
          <q-btn href=" "><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/Food/cafe.png" width="100px" height="10px"/>Кафе</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/Food/canteen.png" width="100px" height="50px"/>Столовая</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/Food/fastfood.png" width="100px" height="50px"/>Фаст-фуд</q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
    <div class="q-pa-md">
    <h2>Жилье</h2>
    <q-carousel style="margin-top:-40px"
      v-model="slide"
      animated
      control-color="primary"
      arrows
      height="200px"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/housing/hotel.png" width="100px" height="50px"/>Отели</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/housing/sanatoriums.png" width="100px" height="50px"/>Санатории</q-btn>
          <q-btn href=" "><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/housing/Gostinitsa.png" width="100px" height="10px"/>Гостиницы</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/housing/motel.png" width="100px" height="50px"/>Хостелы</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/housing/flat.png" width="100px" height="50px"/>Квартиры</q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
    <div class="q-pa-md">
    <h2>Туризм</h2>
    <q-carousel style="margin-top:-40px"
      v-model="slide"
      animated
      control-color="primary"
      arrows
      height="200px"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/tourism/excursion.png" width="100px" height="10px"/>Экскурсии</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/tourism/guides.png" width="100px" height="50px"/>Гиды</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/tourism/acropolis.png" width="100px" height="50px"/>Достопримечательности</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/tourism/events.png" width="100px" height="50px"/>Мероприятия</q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
   <div class="q-pa-md">
    <h2>Одежда</h2>
    <q-carousel style="margin-top:-40px"
      v-model="slide"
      animated
      control-color="primary"
      arrows
      height="200px"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/clothing/sport.png" width="100px" height="10px"/>Спорт</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/clothing/fashion.png" width="100px" height="50px"/>Масс-маркет</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/clothing/boutique.png" width="100px" height="50px"/>Бутик</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/clothing/fur.png" width="100px" height="50px"/>Мех</q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="q-pa-md">
    <h2>Услуги</h2>
    <q-carousel style="margin-top:-40px"
      v-model="slide"
      animated
      control-color="primary"
      arrows
      height="200px"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/services/laptop.png" width="100px" height="50px"/>Сувениры</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/services/SPA.png" width="100px" height="10px"/>СПА</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/services/fitness.png" width="100px" height="50px"/>Фитнес</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/services/hair-cut.png" width="100px" height="50px"/>Парикмахерская</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/services/laptop.png" width="100px" height="50px"/>Электроника</q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
    <div class="q-pa-md">
    <h2>Транспорт</h2>
    <q-carousel style="margin-top:-40px"
      v-model="slide"
      animated
      control-color="primary"
      arrows
      height="200px"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/transport/parking.png" width="100px" height="10px"/>Парковка</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/transport/repair.png" width="100px" height="50px"/>Автосервис</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/transport/car-wash.png" width="100px" height="50px"/>Автомойк</q-btn>
          <q-btn href=""><q-img  class="rounded-borders col-6 full-height" src="src/assets/icons/transport/car-wash.png" width="100px" height="50px"/>Маршрутки</q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      info: ref('first')
    }
  }
}
</script>
<style>
h2{font-size: 40px;
text-align: center;
;
}
</style>
