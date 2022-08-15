<template>
<div class="q-pa-md mt">
  <h1>МЕРОПРИЯТИЯ</h1>
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
            :to="btn.link"
            ><q-img
              class="rounded-borders col-6 full-height"
              :src="btn.icon"
              width="80px"
              height="50px"
            /> <p class="textCard">{{btn.name}}</p> </q-btn
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
      ]
    }
  }
}
</script>
<style scoped>
.cardColor{
  background-color: #110e35;}
.q-carousel {
  background: none;
}

h2,h1{
  color: aliceblue;
  font-size: 27px;
  text-align: center;
}
</style>
