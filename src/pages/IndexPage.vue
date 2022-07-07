<template>
  <div class="q-pa-md">
    <q-carousel
      cycle
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
    <h2>ПИТАНИЕ</h2>
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
          class="row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap"
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
    <h2>ЖИЛЬЁ</h2>
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
          class="row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"
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
          class="row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"
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
  <div class="q-pa-md mt">
    <h2>ОДЕЖДА</h2>
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
          class="row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"
        >
          <q-btn class="bg-white" v-for="btn in clothes " :key="btn.id" href=""
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="`src/assets/icons/clothing/${btn.icon}.png`"
              width="80px"
              height="50px"
            />{{btn.name}}</q-btn
          >
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="q-pa-md mt">
    <h2>УСЛУГИ</h2>
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
          class="row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"
        >
          <q-btn class="bg-white" v-for="btn in services " :key="btn.id" href=""
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="`src/assets/icons/services/${btn.icon}.png`"
              width="80px"
              height="50px"
            />{{btn.name}}</q-btn
          >
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="q-pa-md mt">
    <h2>ТРАНСПОРТ</h2>
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
          class="row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"
        >
          <q-btn class="bg-white" v-for="btn in transport " :key="btn.id" href=""
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="`src/assets/icons/transport/${btn.icon}.png`"
              width="80px"
              height="50px"
            />{{btn.name}}</q-btn
          >
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
          name: 'Отели'
        },
        {
          id: 2,
          icon: 'sanatoriums',
          name: 'Санатории'
        },
        {
          id: 3,
          icon: 'Gostinitsa',
          name: 'Гостиницы'
        },
        {
          id: 4,
          icon: 'motel',
          name: 'Хостелы'
        },
        {
          id: 5,
          icon: 'flat',
          name: 'Квартира'
        }
      ],
      tour: [
        {
          id: 1,
          icon: 'events',
          name: 'Мероприятии'
        },
        {
          id: 2,
          icon: 'excursion',
          name: 'Экскурсии'
        },
        {
          id: 3,
          icon: 'acropolis',
          name: 'Виды'
        },
        {
          id: 4,
          icon: 'guides',
          name: 'Гиды'
        }
      ],
      clothes: [
        {
          id: 1,
          icon: 'fashion',
          name: 'Сетевые'
        },
        {
          id: 2,
          icon: 'boutique',
          name: 'Бутики'
        },
        {
          id: 3,
          icon: 'sport',
          name: 'Спортивные'
        },
        {
          id: 4,
          icon: 'fur',
          name: 'Меховые'
        }
      ],
      services: [
        {
          id: 1,
          icon: 'gift',
          name: 'Сувениры'
        },
        {
          id: 2,
          icon: 'hair-cut',
          name: 'Парикмахерские'
        },
        {
          id: 3,
          icon: 'SPA',
          name: 'СПА'
        },
        {
          id: 4,
          icon: 'fitness',
          name: 'Фитнес'
        },
        {
          id: 5,
          icon: 'laptop',
          name: 'Электроника'
        }
      ],
      transport: [
        {
          id: 1,
          icon: 'car-wash',
          name: 'Автомойки'
        },
        {
          id: 2,
          icon: 'parking',
          name: 'Парковки'
        },
        {
          id: 3,
          icon: 'repair',
          name: 'Автосервис'
        },
        {
          id: 4,
          icon: 'van',
          name: 'Маршрутки '
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
