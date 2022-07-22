<template>
  <div class="q-pa-md">
    <q-carousel
      autoplay
      swipeable
      animated
      v-model="info"
      arrows
      infinite
      height="200px"
      class="shadow-3"
    >
      <q-carousel-slide
        name="first"
        img-src="https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/6/15/756093282677156.jpg"
      >
              <div class="text-h4" style="color: black">Реконструкция кинотеатра России</div>
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        img-src="https://www.geo360.ru/upload/resize_cache/sprint.editor/107/1000_625_10e423fdebffef9f74f54ec5b7ce1b66a/img_1629275470_4994_606_img_20210513_132129.jpg"
      >
      </q-carousel-slide>
      <q-carousel-slide
        name="third"
        img-src="https://stv24.tv/wp-content/uploads/2020/08/02/star-kis5.jpg"
      >
        <div class="text-h4" style="color: bisque">Реконструкция озера</div>
      </q-carousel-slide>
    </q-carousel>
  </div>
    <div class="q-pa-md mt">
    <q-carousel
      style="margin-top: 20px"
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
          <q-btn
            class="bg-white"
            v-for="btn in tour  "
            :key="btn.id"
            :to="btn.link"
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="btn.icon"
              width="80px"
              height="50px"
            />{{btn.name}}</q-btn
          >
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="q-pa-md">
    <q-separator dark />
    <q-carousel
      class="div_bg"
      style="margin-top: -30px"
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
          <q-btn
            v-for="btn in food"
            :key="btn.id"
            :to="btn.link"
            class="bg-white"
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
    <q-carousel
      style="margin-top: 20px"
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
          <q-btn
            class="bg-white"
            v-for="btn in home"
            :key="btn.id"
            :to="btn.link"
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="btn.icon"
              width="80px"
              height="50px"
            />{{btn.name}}</q-btn
          >
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="q-pa-md mt">
    <q-carousel
      style="margin-top: 20px"
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
          <q-btn
            class="bg-white"
            v-for="btn in services "
            :key="btn.id"
            :to="btn.link"
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="btn.icon"
              width="80px"
              height="50px"
            />{{btn.name}}</q-btn
          >
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
    <div class="q-pa-md mt">
    <q-carousel
      style="margin-top: 20px"
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
          <q-btn
            class="bg-white"
            v-for="btn in clothes "
            :key="btn.id"
            :to="btn.link"
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="btn.icon"
              width="80px"
              height="50px"
            />{{btn.name}}</q-btn
          >
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div class="q-pa-md mt">
    <q-carousel
      style="margin-top: 20px"
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
          <q-btn
            class="bg-white"
            v-for="btn in transport "
            :key="btn.id"
            :to="btn.link"
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="btn.icon"
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
          name: 'Столовые '
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
          icon: new URL('../assets/icons/housing/hotel.png', import.meta.url).href,
          link: 'hotel',
          name: 'Отели'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/housing/sanatoriums.png', import.meta.url).href,
          link: 'sanatoriums',
          name: 'Санатории'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/housing/Gostinitsa.png', import.meta.url).href,
          link: 'gostinitsa',
          name: 'Гостиницы'
        },
        {
          id: 4,
          icon: new URL('../assets/icons/housing/motel.png', import.meta.url).href,
          link: 'motel',
          name: 'Хостелы'
        },
        {
          id: 5,
          icon: new URL('../assets/icons/housing/flat.png', import.meta.url).href,
          link: 'flat',
          name: 'Квартиры'
        }
      ],
      tour: [
        {
          id: 1,
          icon: new URL('../assets/icons/tourism/events.png', import.meta.url).href,
          link: 'events',
          name: 'Афиша'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/services/child.png', import.meta.url).href,
          link: 'child',
          name: 'Детям'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/tourism/cexcursionfe.png', import.meta.url).href,
          link: 'cexcursionfe',
          name: 'Экскурсии'
        },
        {
          id: 4,
          icon: new URL('../assets/icons/tourism/acropolis.png', import.meta.url).href,
          link: 'acropolis',
          name: 'Маршруты'
        },
        {
          id: 5,
          icon: new URL('../assets/icons/tourism/guides.png', import.meta.url).href,
          link: 'guides',
          name: 'Гиды'
        },
        {
          id: 6,
          icon: new URL('../assets/icons/services/kick.png', import.meta.url).href,
          link: 'extreme',
          name: 'Экстрим'
        }
      ],
      clothes: [
        {
          id: 1,
          icon: new URL('../assets/icons/clothing/boutique.png', import.meta.url).href,
          link: 'boutique',
          name: 'Бутики'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/clothing/sport.png', import.meta.url).href,
          link: 'sport',
          name: 'Спортивные'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/clothing/fur.png', import.meta.url).href,
          link: 'fur',
          name: 'Меховые'
        },
        {
          id: 4,
          icon: new URL('../assets/icons/services/gift.png', import.meta.url).href,
          link: 'gift',
          name: 'Сувениры'
        }
      ],
      services: [
        {
          id: 1,
          icon: new URL('../assets/icons/services/cat.png', import.meta.url).href,
          link: 'fashion',
          name: 'Питомцы'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/services/hair-cut.png', import.meta.url).href,
          link: 'hair-cut',
          name: 'Бьюти'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/services/SPA.png', import.meta.url).href,
          link: 'spa',
          name: 'СПА'
        },
        {
          id: 4,
          icon: new URL('../assets/icons/services/fitness.png', import.meta.url).href,
          link: 'fitness',
          name: 'Фитнес'
        },
        {
          id: 5,
          icon: new URL('../assets/icons/services/laptop.png', import.meta.url).href,
          link: 'laptop',
          name: 'Электроника'
        }
      ],
      transport: [
        {
          id: 1,
          icon: new URL('../assets/icons/transport/car-wash.png', import.meta.url).href,
          link: 'car-wash',
          name: 'Автомойки'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/transport/parking.png', import.meta.url).href,
          link: 'parking',
          name: 'Парковки'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/transport/repair.png', import.meta.url).href,
          link: 'repair',
          name: 'Автосервис'
        },
        {
          id: 4,
          icon: new URL('../assets/icons/transport/van.png', import.meta.url).href,
          link: 'van',
          name: 'Транспорт '
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
.q-carousel {
  background: none;
}
.q-carousel__slide {
  padding-left: 3px !important;
}
</style>
