<template>
    <div class="q-pa-md">
      <q-card-section>
        <div>
          <h1
            style="line-height: 2rem; padding-top: 10px; text-align: center"
          > Афиша</h1>
        </div>
      </q-card-section>

     <q-separator style="margin: 10px" color="white" inset />
      <div>
        <q-btn icon="event" push dense color="positive" style="margin-left: 10px;">
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
  </div>
  <div >

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
  <q-separator  style="margin-top: 20px" color="white" />

    <div >
    <div style="margin-top:20px">
      <q-card class="mtt">
        <q-img style="height:135px" src="../assets/mainCardBest/fil.webp" >
        <q-card-section><a href="https://kursal.ru/"><h2 class="aLine">ФИЛАРМОНИЯ</h2></a></q-card-section>
        </q-img>
      </q-card>
    </div>
    <div class="mtt">
      <q-card>
        <q-img style="height:135px" src="../assets/mainCardBest/vustavk.webp">
    <q-card-section><a href="https://afisha7.ru/kislovodsk/vystavki"><h2 class="aLine">ВЫСТАВКИ</h2></a></q-card-section>
        </q-img>
      </q-card>
    </div>
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
      info: ref('first')
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
body * {font-family: 'Oswald', sans-serif;}

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
.cardColor {
  background-color: #110e35;
}
.q-carousel {
  background: none;
}

h2{
  color: aliceblue;
  font-size: 24px;
  text-align: center;
}
a{
  text-align: center;

}
.mtt{
   margin-top: 12px;
}

.q-img__content > div{
  position:relative;
  background: none;
}
.aLine {
  text-decoration: underline;
  text-decoration-color: aliceblue;
}

</style>
