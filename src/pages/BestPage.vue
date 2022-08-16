<template>
  <div>
          <div class="q-pa-md">
   <q-btn icon="event" push round color="negative">
      <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
        <q-date color="positive" v-model="date">
          <div class="row items-center justify-end q-gutter-sm">
            <q-btn label="Отменить" color="positive" flat v-close-popup />
            <q-btn label="ОК" color="positive" flat @click="save" v-close-popup />
          </div>
        </q-date>
      </q-popup-proxy>
    </q-btn>
          <div><h1>{{date}}</h1></div>

      <q-separator style="margin-top:20px" color="white" />
        <q-tab-panels style="margin-top: 12px; background: none;"
          v-model="date"
        >
          <q-tab-panel :name="date">
            <p>
              Как и обещали, концерты классической музыки под открытым небом на проспекте Ленина продолжаются.
              Сегодня с 18.00 до 20.30 выступают преподаватели Детской музыкальной школы имени Рахманинова.
              Пианино и саксофон
              Добро пожаловать в классику курортов - в Кисловодск!.
            </p>
              </q-tab-panel>
        </q-tab-panels>
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
      height="230px"
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
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      splitterModel: ref(50),
      date: ref('2022/08/17'),
      events: ['2022/08/17', '2022/08/18', '2022/08/19']
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100%
  </style>
  <style>
  p {
  color: white;
  font-family: Oswald, sans-serif;
  text-align: center;
  margin: 0%;

}
h1 {
  color: aliceblue;
  font-size: 27px;
  text-align: center;
  line-height: 3rem

}

</style>
