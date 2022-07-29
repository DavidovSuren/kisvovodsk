<template>
  <div class="q-pa-md">
    <q-carousel
      autoplay
      swipeable
      animated
      v-model="info"
      arrows
      infinite
      height="250px"
      class="shadow-3"
    >
      <q-carousel-slide
        name="first"
        img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtiI1zTmPNOiGNOpj7XfsXWSFlKOhDleE1A&usqp=CAU"

      >
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        img-src="https://xn--35-jlc3but5b.xn--p1ai/media/k2/items/cache/9ecd376e5371efaef9aad9bc9143aed8_L.jpg"
      >
      </q-carousel-slide>
      <q-carousel-slide
        name="third"
        img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGUbdbALL8s1dPZtHnJQsSNPxRb0nTDhIjhA&usqp=CAU"
      >
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
            v-for="btn in eventsDark"
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
        <br>
        <div class="text-h4">Наши парнтёры
        <br>
        <q-btn
        :href="'https://artclip.ru/'">
         <q-img
         class="partner"
         src="../assets/partners/artclip.jpeg"
         >
        </q-img>
        </q-btn>
      </div>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    return {
      slide: ref(1),
      info: ref('first'),
      eventsDark: [
        {
          id: 1,
          icon: new URL('../assets/icons/eventss/Prosh.png', import.meta.url).href,
          link: 'past',
          name: 'Афиша'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/eventss/Nast.png', import.meta.url).href,
          link: 'thepresent',
          name: 'Сегодня'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/eventss/Bud.png', import.meta.url).href,
          link: 'future',
          name: 'Фотоотчеты'
        }
      ],
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
          icon: new URL('../assets/icons/services/child.png', import.meta.url).href,
          link: 'child',
          name: 'Детям'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/tourism/cexcursionfe.png', import.meta.url).href,
          link: 'cexcursionfe',
          name: 'Экскурсии'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/tourism/acropolis.png', import.meta.url).href,
          link: 'acropolis',
          name: 'Маршруты'
        },
        {
          id: 4,
          icon: new URL('../assets/icons/tourism/guides.png', import.meta.url).href,
          link: 'guides',
          name: 'Гиды'
        },
        {
          id: 5,
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
          link: 'pets',
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
.partner{
  border-radius: 50px 150px / 120px;
  width:100px
}

</style>
