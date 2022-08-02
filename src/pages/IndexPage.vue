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
        img-src="data:image/jpeg;base64,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"
      >
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        img-src="https://xn--35-jlc3but5b.xn--p1ai/media/k2/items/cache/9ecd376e5371efaef9aad9bc9143aed8_L.jpg"
      >
      </q-carousel-slide>
      <q-carousel-slide
        name="third"
        img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtiI1zTmPNOiGNOpj7XfsXWSFlKOhDleE1A&usqp=CAU"
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
          name: 'Гид'
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
