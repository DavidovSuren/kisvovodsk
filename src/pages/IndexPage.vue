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
          <q-btn v-for="btn in food" :key="btn.id" :to="btn.link" class="bg-white"
            ><q-img
              class="circle-borders col-3 full-height"
              :src="btn.icon"
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
          <q-btn class="bg-white" v-for="btn in home" :key="btn.id" :to="btn.link"
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
          <q-btn class="bg-white" v-for="btn in tour  " :key="btn.id" :to="btn.link"
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
          <q-btn class="bg-white" v-for="btn in clothes " :key="btn.id" :to="btn.link"
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
          <q-btn class="bg-white" v-for="btn in services " :key="btn.id" :to="btn.link"
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
          <q-btn class="bg-white" v-for="btn in transport " :key="btn.id" :to="btn.link"
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
          icon: new URL('../assets/icons/Food/restraunt.png', import.meta.url).href,
          link: 'restraunt',
          name: 'Рестораны'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/Food/cafe.png', import.meta.url).href,
          link: 'cafe',
          name: 'Кафе'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/Food/canteen.png', import.meta.url).href,
          link: 'canteen',
          name: 'Столовые'
        },
        {
          id: 4,
          icon: new URL('../assets/icons/Food/fastfood.png', import.meta.url).href,
          link: 'fastfood',
          name: 'Фаст-фуд'
        }
      ],
      home: [
        {
          id: 1,
          icon: new URL('../assets/icons/Food/hotel.png', import.meta.url).href,
          link: 'hotel',
          name: 'Отели'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/Food/sanatoriums.png', import.meta.url).href,
          link: 'sanatoriums',
          name: 'Санатории'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/Food/gostinitsa.png', import.meta.url).href,
          link: 'gostinitsa',
          name: 'Гостиницы'
        },
        {
          id: 4,
          icon: new URL('../assets/icons/Food/motel.png', import.meta.url).href,
          link: 'motel',
          name: 'Хостелы'
        },
        {
          id: 5,
          icon: new URL('../assets/icons/Food/flat.png', import.meta.url).href,
          link: 'flat',
          name: 'Квартиры'
        }
      ],
      tour: [
        {
          id: 1,
          icon: new URL('../assets/icons/Food/events.png', import.meta.url).href,
          link: 'events',
          name: 'Мероприятии'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/Food/excursion.png', import.meta.url).href,
          link: 'excursion',
          name: 'Экскурсии'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/Food/acropolis.png', import.meta.url).href,
          link: 'acropolis',
          name: 'Виды'
        },
        {
          id: 4,
          icon: new URL('../assets/icons/Food/guides.png', import.meta.url).href,
          link: 'guides',
          name: 'Гиды'
        }
      ],
      clothes: [
        {
          id: 1,
          icon: new URL('../assets/icons/Food/fashion.png', import.meta.url).href,
          link: 'fashion',
          name: 'Сетевые'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/Food/boutique.png', import.meta.url).href,
          link: 'boutique',
          name: 'Бутики'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/Food/sport.png', import.meta.url).href,
          link: 'sport',
          name: 'Спортивные'
        },
        {
          id: 4,
          icon: new URL('../assets/icons/Food/fur.png', import.meta.url).href,
          link: 'fur',
          name: 'Меховые'
        }
      ],
      services: [
        {
          id: 1,
          icon: new URL('../assets/icons/Food/gift.png', import.meta.url).href,
          link: 'gift',
          name: 'Сувениры'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/Food/hair-cut.png', import.meta.url).href,
          link: 'hair-cut',
          name: 'Парикмахеские'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/Food/spa.png', import.meta.url).href,
          link: 'spa',
          name: 'СПА'
        },
        {
          id: 4,
          icon: new URL('../assets/icons/Food/fitness.png', import.meta.url).href,
          link: 'fitness',
          name: 'Фитнес'
        },
        {
          id: 5,
          icon: new URL('../assets/icons/Food/laptop.png', import.meta.url).href,
          link: 'laptop',
          name: 'Электроника'
        }
      ],
      transport: [
        {
          id: 1,
          icon: new URL('../assets/icons/Food/car-wash.png', import.meta.url).href,
          link: 'car-wash',
          name: 'Автомойки'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/Food/parking.png', import.meta.url).href,
          link: 'parking',
          name: 'Парковки'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/Food/repair.png', import.meta.url).href,
          link: 'repair',
          name: 'Автосервис'
        },
        {
          id: 4,
          icon: new URL('../assets/icons/Food/van.png', import.meta.url).href,
          link: 'van',
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
