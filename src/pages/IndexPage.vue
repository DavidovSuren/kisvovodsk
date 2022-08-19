<template>
<div class="q-pa-md">
    <div class="mtt" > <q-card >
      <q-parallax  src="../assets/icons/kislovodsk.jpg" :height="135">
      <q-card-section>
        <a @click="this.$router.push('/best'); "><h2 class="aLine">ЛУЧШЕЕ В КИСЛОВОДСКЕ</h2> </a>
        </q-card-section>
      </q-parallax>
    </q-card>
</div>
     <div class="mtt">  <q-card>
      <q-parallax src="../assets/icons/kislovodsk.jpg" :height="135">
      <q-card-section>
       <a @click="this.$router.push('/event');"><h2 class="aLine">МЕРОПРИЯТИЯ</h2> </a>
        </q-card-section>
      </q-parallax>
    </q-card>
 </div>
      <div class="mtt"> <q-card >
      <q-parallax src="../assets/icons/kislovodsk.jpg" :height="135">
      <q-card-section>
       <a @click="this.$router.push('/health');"><h2 class="aLine">ЗДОРОВЬЕ</h2> </a>
        </q-card-section>
      </q-parallax>
    </q-card>
</div>
     <div class="mtt"> <q-card>
      <q-parallax src="../assets/icons/kislovodsk.jpg" :height="135">
      <q-card-section>
        <a @click="this.$router.push('/tour');"><h2 class="aLine">ТУРИЗМ</h2> </a>
        </q-card-section>
      </q-parallax>
    </q-card>
 </div>

  </div>
   <q-separator color="white" inset />
<div class="q-pa-md">
    <q-carousel
      autoplay
      swipeable
      animated
      v-model="info"
      arrows
      infinite
      height="220px"
      class="shadow-3"
    >
      <q-carousel-slide
        name="first"
        img-src="../assets/baner/lyg.jpeg"
      >
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        img-src="../assets/baner/circ.jpeg"
        @click="goto('https://circus-kislovodsk.ru/')"
      >
      </q-carousel-slide>
      <q-carousel-slide
        name="third"
        img-src="https://www.pnp.ru/upload/entities/2018/04/13/article/detailPicture/28/ce/08/65/7fd4366d350fc6f53f49ac3a3b7d1ffe.jpg"
      >
      </q-carousel-slide>
    </q-carousel>
  </div>
   <q-separator color="white" inset />
   <div class="q-pa-md">
    <q-carousel
      class="div_bg"
  style="margin-top: -5px"
      v-model="slide"
      animated
      arrows
      height="150px"
    >
      <q-separator dark />
      <q-carousel-slide :name="1" class="column no-wrap">
        <div
          class="row fit justify-start items-center q-gutter-sm q-col-gutter no-wrap horisintal"
        >
          <q-btn
          push
            v-for="btn in food"
            :key="btn.id"
            :to="btn.link"
            class="cardColor"
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="btn.icon"
              width="80px"
              height="50px"
            /><p class="textCard">{{btn.name}}</p></q-btn
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
          push
            v-for="btn in home"
            :key="btn.id"
            :to="btn.link"
            class="cardColor"
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="btn.icon"
              width="80px"
              height="50px"
            /><p class="textCard">{{btn.name}}</p></q-btn
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
          push
            v-for="btn in services "
            :key="btn.id"
            :to="btn.link"
            class="cardColor"
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="btn.icon"
              width="80px"
              height="50px"
            /><p class="textCard">{{btn.name}}</p></q-btn
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
          push
            v-for="btn in clothes "
            :key="btn.id"
            :to="btn.link"
            class="cardColor"
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="btn.icon"
              width="80px"
              height="50px"
            /><p class="textCard">{{btn.name}}</p></q-btn
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
          push
            v-for="btn in transport "
            :key="btn.id"
            :to="btn.link"
            class="cardColor"
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="btn.icon"
              width="80px"
              height="50px"
            /><p class="textCard">{{btn.name}}</p></q-btn
          >
        </div>
      </q-carousel-slide>
    </q-carousel>

        <div class="mmt" ><h1> Наши партнёры</h1>
        <q-btn
        push class="cardColor"
        :href="'https://artclip.ru/'">
         <q-img
         class="partner"
         src="../assets/partners/artclip.jpeg"
         >
        </q-img>
        </q-btn>
      </div>
  </div>
     <q-separator color="white" inset />

   <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #9c4dcc 0%, #38006b 90%)"
    >

      <q-card-section style="text-align:center">
        <div ><h1> КОНТАКТЫ</h1></div><br>
        <div class="row fit justify-center items-center q-gutter-sm  q-col-gutter no-wrap horisintal">

         <q-btn
         push
          dense
          icon="fa-brands fa-vk"
          aria-label="Fa-brands fa-vk"
          color="blue"
          size="1em"
          :href="'//vk.com/id711311713'"
        />
         <q-btn
         push
          dense
          icon="fa-brands fa-instagram"
          aria-label="Fa-brands fa-instagram"
          color="red"
          size="1em"
          :href="'https://instagram.com/heart_city_kissloveodsk?igshid=YmMyMTA2M2Y='"
        />
         <q-btn
         push
          dense
          icon="email"
          aria-label="Email"
          color="dark blue"
          size="1em"
          :href="'mailto:davidov05101996@gmail.com'"
        />
          <q-btn
          push
          dense
          icon="phone"
          aria-label="Phone"
          color="green"
          size="1em"
          :href="'tel:89620031286'"
        />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    function goto (url) {
      window.location.href = url
    }
    return {
      goto,
      slide: ref(1),
      info: ref('first'),
      eventsDark: [
        {
          id: 1,
          icon: new URL('../assets/icons/eventss/harp.png', import.meta.url).href,
          link: 'https://kursal.ru/',
          name: 'Филармония'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/eventss/painting.png', import.meta.url).href,
          link: 'https://afisha7.ru/kislovodsk/vystavki',
          name: 'Выставки'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/eventss/cinema.png', import.meta.url).href,
          link: 'https://kino-movietheater.business.site/',
          name: 'Кино'
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
          icon: new URL('../assets/icons/housing/Gostinitsa.png', import.meta.url).href,
          link: 'gostinitsa',
          name: 'Гостиницы'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/housing/motel.png', import.meta.url).href,
          link: 'motel',
          name: 'Хостелы'
        },
        {
          id: 4,
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
          icon: new URL('../assets/icons/services/video.png', import.meta.url).href,
          link: 'video',
          name: 'Видео'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/services/cat.png', import.meta.url).href,
          link: 'pets',
          name: 'Питомцы'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/services/laptop.png', import.meta.url).href,
          link: 'laptop',
          name: 'Электроника'
        },
        {
          id: 4,
          icon: new URL('../assets/icons/services/hair-cut.png', import.meta.url).href,
          link: 'hair-cut',
          name: 'Бьюти'
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

.mt {
  margin-top: -50px;
}
.mtt{
   margin-top: 12px;
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
.bg-blur{
backdrop-filter: blur(10px)
}
.textCard{
  color: aliceblue;
  font-size: 15px;
}
.cardColor{
  background-color: #110e35;
}
</style>
<style scoped>
h2,h1{
  color: aliceblue;
  font-size: 27px;
}
.mmt{
  margin-top: 40px
}
body * {font-family: 'Oswald', sans-serif;}

.aLine {
  text-decoration: underline;
  text-decoration-color: aliceblue;
}
.q-card {
    background: #0b0a24;
}
</style>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100%
  </style>
