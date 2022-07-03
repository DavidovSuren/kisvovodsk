<template>
  <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="info"
      arrows
      infinite
      height="200px"
      class="shadow-3"
    >
      <q-carousel-slide name="first" img-src="https://www.hotevents.ru/img/m/gloriajeans/gj_2013-03-18.jpg">
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="https://www.belcitymall.ru/images/wss/sale/zolla/18.03.2021.jpg">
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="https://stv24.tv/wp-content/uploads/2020/08/02/star-kis5.jpg">
          <div class="text-h4" style="color:bisque">Кисловодск</div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="q-pa-md" style="margin-top: -40px">
    <q-separator dark />
    <h2>Питание</h2>
    <q-carousel
      class="div_bg"
      style="margin-top: -40px"
      v-model="slide"
      animated
      arrows
      height="150px"
    >
      <q-separator dark />
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-md q-col-gutter no-wrap"
        >
          <q-btn v-for="btn in food" :key="btn.id" href="" class="bg-white"
            ><q-img
              class="circle-borders col-3 full-height"
              :src="`src/assets/icons/Food/${btn.icon}.png`"
              width="80px"
              height="50px"
            />{{btn.name}}</q-btn
          >
        </div>
      </q-carousel-slide>
      <q-separator dark />
    </q-carousel>
  </div>
  <div class="q-pa-md mt">
    <h2>Жилье</h2>
    <q-carousel
      style="margin-top: -40px"
      v-model="slide"
      animated
      control-color="primary"
      arrows
      height="150px"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-md q-col-gutter no-wrap horisintal"
        >
          <q-btn class="bg-white" v-for="btn in home" :key="btn.id" href=""
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="`src/assets/icons/housing/${btn.icon}.png`"
              width="80px"
              height="50px"
            />{{btn.name}}</q-btn
          >
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
    <div class="q-pa-md mt">
    <h2>ТУРИЗМ</h2>
    <q-carousel
      style="margin-top: -40px"
      v-model="slide"
      animated
      control-color="primary"
      arrows
      height="150px"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-md q-col-gutter no-wrap horisintal"
        >
          <q-btn class="bg-white" v-for="btn in tour  " :key="btn.id" href=""
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="`src/assets/icons/tourism/${btn.icon}.png`"
              width="80px"
              height="50px"
            />{{btn.name}}</q-btn
          >
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
    <h2>Туризм</h2>
    <q-carousel
      style="margin-top: -40px"
      v-model="slide"
      animated
      control-color="primary"
      arrows
      height="200px"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-btn href=""
            ><q-img
              class="rounded-borders col-6 full-height"
              src="src/assets/icons/tourism/excursion.png"
              width="100px"
              height="10px"
            />Экскурсии</q-btn
          >
          <q-btn href=""
            ><q-img
              class="rounded-borders col-6 full-height"
              src="src/assets/icons/tourism/guides.png"
              width="100px"
              height="50px"
            />Гиды</q-btn
          >
          <q-btn href=""
            ><q-img
              class="rounded-borders col-6 full-height"
              src="src/assets/icons/tourism/acropolis.png"
              width="100px"
              height="50px"
            />Достопримечательности</q-btn
          >
          <q-btn href=""
            ><q-img
              class="rounded-borders col-6 full-height"
              src="src/assets/icons/tourism/events.png"
              width="100px"
              height="50px"
            />Мероприятия</q-btn
          >
        </div>
      </q-carousel-slide>
    </q-carousel>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    return {
      slide: ref(1),
      info: ref('first'),
      food: [
        {
          id: 1,
          icon: 'restraunt',
          name: 'Рестораны'
        },
        {
          id: 2,
          icon: 'cafe',
          name: 'Кафе'
        },
        {
          id: 3,
          icon: 'canteen',
          name: 'Столовые'
        },
        {
          id: 4,
          icon: 'fastfood',
          name: 'Фаст-фуд'
        }
      ],
      home: [
        {
          id: 1,
          icon: 'hotel',
          name: 'Отель'
        },
        {
          id: 2,
          icon: 'sanatoriums',
          name: 'Санаторий'
        },
        {
          id: 3,
          icon: 'Gostinitsa',
          name: 'Гостиница'
        },
        {
          id: 4,
          icon: 'motel',
          name: 'Хостелы'
        },
        {
          id: 5,
          icon: 'flat',
          name: 'Квартиры'
        }
      ],
      tour: [
        {
          id: 1,
          icon: 'acropolis',
          name: 'Достопримечательности'
        },
        {
          id: 2,
          icon: 'excursion',
          name: 'Экскурсии'
        },
        {
          id: 3,
          icon: 'events',
          name: 'Мероприятия'
        },
        {
          id: 4,
          icon: 'guides',
          name: 'Гиды'
        }
      ]
    }
  }
}
</script>
<style>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(158, 105, 215, 0.2);
  backdrop-filter: blur(10px);
}
.div_bg {
  background-color: "black";
}
.mt {
  margin-top: -50px;
}
.q-carousel{
  background: none;}
</style>
