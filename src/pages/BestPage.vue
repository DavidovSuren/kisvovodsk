<template>
  <div>
        <div class="q-pa-md">
          <q-date v-model="date" />
        </div>
        <q-tab-panels
          v-model="date"
          animated
          transition-prev="jump-up"
          transition-next="jump-up"
          class="bg-positive"
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
      height="225px"
      class="shadow-3"
    >
      <q-carousel-slide
        name="first"
        img-src="../assets/banerBest/Sanvoen.jpeg"
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
        img-src="../assets/banerBest/eksban.jpg"
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
