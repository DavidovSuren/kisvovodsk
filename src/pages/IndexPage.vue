<template>
<div class="q-pa-md">
    <div class="mtt" > <q-card >
      <q-parallax  src="../assets/icons/kislovodsk.jpg" :height="135"
      @click="this.$router.push('/best');">
      <q-card-section>
        <a><h2>АФИША</h2> </a>
        </q-card-section>
      </q-parallax>
    </q-card>
</div>
      <div class="mtt"> <q-card>
      <q-parallax src="../assets/icons/kislovodsk.jpg" :height="135"
      @click="this.$router.push('/sanatoriums');">
      <q-card-section>
        <a><h2>САНАТОРИИ</h2> </a>
        </q-card-section>
      </q-parallax>
    </q-card>
 </div>
      <div class="mtt"> <q-card>
      <q-parallax src="../assets/icons/kislovodsk.jpg" :height="135"
      @click="this.$router.push('/tour');">
      <q-card-section >
        <a ><h2>ТУРИЗМ</h2> </a>
        </q-card-section>
      </q-parallax>
    </q-card>
 </div>
      <div class="mtt"> <q-card >
      <q-parallax src="../assets/icons/kislovodsk.jpg" :height="135"
       @click="this.$router.push('/health');">
      <q-card-section>
       <a><h2>ЗАВЕДЕНИЯ</h2> </a>
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
      v-for="image in sliderImg"
      :key="image.id"
      :name="image.id"
      :img-src="image.url"
      @click="goto(image.link)"
      />
    </q-carousel>
  </div>
   <q-separator color="white" inset />
  <div class="q-pa-md mt">
    <q-carousel
      style="margin-top: 60px"
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
              width="130px"
              height="100px"
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
      height="180px"
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
              width="130px"
              height="100px"
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
      height="180px"
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
              width="130px"
              height="100px"
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
            v-for="btn in transport"
            :key="btn.id"
            @click="goToIf(btn.link)"
            class="cardColor"
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="btn.icon"
              width="130px"
              height="100px"
            /><p class="textCard">{{btn.name}}</p></q-btn
          >
        </div>
      </q-carousel-slide>
    </q-carousel>

        <div class="mmt" ><h1 style="color: black"> Наши партнёры</h1>
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
      style="background: rgb(236, 236, 208);"
    >

      <q-card-section style="text-align:center">
        <div ><h1 style="color: black"> КОНТАКТЫ</h1></div><br>
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
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    function goto (url) {
      window.location.href = url
    }
    function goToIf (link) {
      if (link.slice(0, 4) === 'http') {
        window.location.href = link
      } else {
        router.push(link)
      }
    }
    return {
      goto,
      goToIf,
      slide: ref(1),
      info: ref('first'),
      sliderImg: [
        {
          id: 1,
          name: 'first',
          url: new URL('../assets/banerGl/bannerchoco.jpeg', import.meta.url).href,
          link: 'cafe/'
        },
        {
          id: 2,
          name: 'second',
          url: new URL('../assets/banerGl/bannerr.jpeg', import.meta.url).href,
          link: 'cafe/'
        }
      ],
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
        }
      ],
      home: [
        {
          id: 1,
          icon: new URL('../assets/icons/housing/hotel.jpg', import.meta.url).href,
          link: 'hotel',
          name: 'Отели'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/housing/Gostinitsa.jpg', import.meta.url).href,
          link: 'gostinitsa',
          name: 'Гостиницы'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/housing/SPA.jpg', import.meta.url).href,
          link: 'spa',
          name: 'СПА'
        },
        {
          id: 4,
          icon: new URL('../assets/icons/housing/motel.jpg', import.meta.url).href,
          link: 'motel',
          name: 'Хостелы'
        },
        {
          id: 5,
          icon: new URL('../assets/icons/housing/flat.jpg', import.meta.url).href,
          link: 'flat',
          name: 'Квартиры'
        }
      ],
      tour: [
        {
          id: 1,
          icon: new URL('../assets/icons/services/child.jpg', import.meta.url).href,
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
          icon: new URL('../assets/icons/clothing/boutique.jpg', import.meta.url).href,
          link: 'boutique',
          name: 'Бутики'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/clothing/sport.jpg', import.meta.url).href,
          link: 'sport',
          name: 'Спортивные'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/clothing/fur.jpg', import.meta.url).href,
          link: 'fur',
          name: 'Меховые'
        },
        {
          id: 4,
          icon: new URL('../assets/icons/services/gift.jpg', import.meta.url).href,
          link: 'gift',
          name: 'Сувениры'
        }
      ],
      services: [
        {
          id: 1,
          icon: new URL('../assets/icons/services/fitness.jpg', import.meta.url).href,
          link: 'fitness',
          name: 'Фитнес'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/services/cat.jpg', import.meta.url).href,
          link: 'pets',
          name: 'Питомцы'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/services/laptop.jpg', import.meta.url).href,
          link: 'laptop',
          name: 'Электроника'
        },
        {
          id: 4,
          icon: new URL('../assets/icons/services/hair-cut.jpg', import.meta.url).href,
          link: 'hair-cut',
          name: 'Бьюти'
        }
      ],
      transport: [
        {
          id: 1,
          icon: new URL('../assets/icons/transport/car-wash.jpg', import.meta.url).href,
          link: 'car-wash',
          name: 'Автомойки'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/transport/parking.jpeg', import.meta.url).href,
          link: 'parking',
          name: 'Парковки'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/transport/repair.jpg', import.meta.url).href,
          link: 'repair',
          name: 'Автосервис'
        },
        {
          id: 4,
          icon: new URL('../assets/mainCardBest/BUS.webp', import.meta.url).href,
          link: 'https://yandex.ru/maps/11062/kislovodsk/transport/minibuses/?l=masstransit&ll=42.716822%2C43.904244&z=13.34/',
          name: 'Транспорт'
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
   text-shadow: 3px 5px 6px rgb(16, 18, 1);
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
  color: rgb(2, 2, 71);
  font-size: 18px;
}
.cardColor{
  background-color: #dfe9f2a5;
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

.q-card {
    background: #0b0a24;
}
.shadow-3{
  background-image: url('load.svg');
  background-repeat: no-repeat;
  background-position: center;
}
</style>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100%
</style>
