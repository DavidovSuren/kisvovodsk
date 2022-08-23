<template>

    <div class="q-pa-md">
      <div>
        <q-btn icon="event" push round color="negative">
        <q-popup-proxy
          @before-show="updateProxy"
          cover
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date color="positive" v-model="date">
            <div class="row items-center justify-end q-gutter-sm">
              <q-btn label="Отменить" color="positive" flat v-close-popup />
              <q-btn
                label="ОК"
                color="positive"
                flat
                @click="save"
                v-close-popup
              />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-btn>
      <div>
        <h1>{{date}}</h1>
      </div>
 <q-separator color="white" style="margin-top: 22px" inset />
    <q-carousel
      autoplay
      swipeable
      animated
      v-model="info"
      arrows
      infinite
      height="230px"
      class="shadow-3 mtt"
    >
      <q-carousel-slide name="first" img-src="../assets/banerBest/eksban.jpg">
      </q-carousel-slide>
      <q-carousel-slide
        name="second"
        img-src="../assets/baner/circ.jpeg"
        @click="goto('https://circus-kislovodsk.ru/')"
      >
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="../assets/banerBest/Sanvoen.jpeg">
      </q-carousel-slide>
    </q-carousel>
  </div>
  <div >

     <q-separator style="margin-top: 20px" color="white" />
      <q-tab-panels style=" background: none" v-model="date">
        <q-tab-panel :name="date">
          <p>
            Как и обещали, концерты классической музыки под открытым небом на
            проспекте Ленина продолжаются. Сегодня с 18.00 до 20.30 выступают
            преподаватели Детской музыкальной школы имени Рахманинова. Пианино и
            саксофон Добро пожаловать в классику курортов - в Кисловодск!.
          </p>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  <q-separator color="white" inset />
    <div >
    <h1 style="margin-top:30px">МЕРОПРИЯТИЯ</h1>
    <q-carousel
      style="margin-top: 40px"
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
            class="cardColor"
            v-for="btn in eventsDark"
            :key="btn.id"
            :href="btn.link"
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="btn.icon"
              width="80px"
              height="50px"
            />
            <p class="textCard">{{btn.name}}</p>
          </q-btn>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'
const options = { year: 'numeric', month: 'long', day: 'numeric' }
const today = new Date()

export default {
  setup () {
    function goto (url) {
      window.location.href = url
    }
    return {
      goto,
      splitterModel: ref(50),
      date: ref(today.toLocaleDateString(options)),
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
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100%
</style>
<style scoped>
p {
  color: white;
  font-family: Oswald, sans-serif;
  text-align: center;
  margin: 5%;
}
h1 {
  color: aliceblue;
  font-size: 27px;
  text-align: center;
  line-height: 3rem;
}
.mtt{
   margin-top: 12px;
}
</style>
<style scoped>
.cardColor {
  background-color: #110e35;
}
.q-carousel {
  background: none;
}

h2,
h1 {
  color: aliceblue;
  font-size: 24px;
  text-align: center;
}
</style>
