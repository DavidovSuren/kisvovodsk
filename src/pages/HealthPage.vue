<template>
<div class="q-pa-md mt">
      <div class="mtt" > <q-card >
      <q-img  src="../assets/banerBest/restBan.jpeg" :height="100">
      <q-card-section>
        <a @click="this.$router.push('/restraunt'); "><h2 class="aLine">РЕСТОРАНЫ</h2> </a>
        </q-card-section>
      </q-img>
    </q-card>
</div>
      <div class="mtt" > <q-card >
      <q-img  src="../assets/banerBest/cafeBan.jpeg" :height="100">
      <q-card-section>
        <a @click="this.$router.push('/cafe'); "><h2 class="aLine">КАФЕ</h2> </a>
        </q-card-section>
      </q-img>
    </q-card>
</div>
      <div class="mtt" > <q-card >
      <q-img  src="../assets/banerBest/stolBan.jpg" :height="100">
      <q-card-section>
        <a @click="this.$router.push('/canteen'); "><h2 class="aLine">СТОЛОВЫЕ</h2> </a>
        </q-card-section>
      </q-img>
    </q-card>
</div>
      <div class="mtt" > <q-card >
      <q-img  src="../assets/banerBest/fastban.webp" :height="100">
      <q-card-section>
        <a @click="this.$router.push('/fastfood'); "><h2 class="aLine">ФАСТ-ФУД</h2> </a>
        </q-card-section>
      </q-img>
    </q-card>
</div>
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
            v-for="btn in health"
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
      health: [
        {
          id: 1,
          icon: new URL('../assets/icons/services/SPA.png', import.meta.url).href,
          link: 'spa',
          name: 'СПА'
        },
        {
          id: 2,
          icon: new URL('../assets/icons/services/fitness.png', import.meta.url).href,
          link: 'fitness',
          name: 'Фитнес'
        },
        {
          id: 3,
          icon: new URL('../assets/icons/housing/hotel.png', import.meta.url).href,
          link: 'hotel',
          name: 'Отели'
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
