<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 450px">
      <template v-slot:before>
        <div class="q-pa-md">
          <q-date v-model="date" :events="events" event-color="blue" />
        </div>
      </template>
      <template v-slot:after>
        <q-tab-panels
          v-model="date"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel :name="date">
            <div class="text-h4 q-mb-md">{{date}}</div>
            <p>
              Как и обещали, концерты классической музыки под открытым небом на проспекте Ленина продолжаются.
              Сегодня с 18.00 до 20.30 выступают преподаватели Детской музыкальной школы имени Рахманинова.
              Пианино и саксофон
              Добро пожаловать в классику курортов - в Кисловодск!.
            </p>
              </q-tab-panel>
        </q-tab-panels>
      </template>
    </q-splitter>
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
