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
        <q-btn icon="event" push dense color="blue" style="margin-left: 10px;">
        <q-popup-proxy
          @before-show="updateProxy"
          cover
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date color="blue" v-model="formattedDate" mask="DD.MM.YYYY" first-day-of-week="1">
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
        <h1>{{formattedDate}}</h1>
      </div>
  </div>
  <div>
    <q-card class="mmt cardColor"
      v-for="cardInfo in data"
      :name="cardInfo.id"
      :img-src="cardInfo.url"
      @click.self="goto(cardInfo.link)"
      :key="cardInfo.id" >
      <router-link :to="`/post/${cardInfo.id}`">
        <div>
          <q-img :src="cardInfo.fimg_url" />
          <div class="card-content">
            <div class="custom-caption topLeft">
              <div class="text-h5">{{cardInfo.eventDate}}</div>
              <div class="text-subtitle1">
                {{cardInfo.eventMounth}}
                <br>
                {{cardInfo.eventStartHours}}:{{cardInfo.eventStartMinute}}
              </div>
            </div>
            <div class="custom-caption topRight">
              <div class="text-h5"></div>
              <div class="text-h5">{{cardInfo.eventPrice}}₽</div>
            </div>
            <div class="custom-caption bottLeft">
              <div class="text-h5">{{cardInfo.eventName}}</div>
            </div>
            <div class="bottRight" @click="goto('/best')">
            </div>
            <div v-html="cardInfo.title.rendered"></div>
            <div class="text-caption text-grey" v-html="cardInfo.excerpt.rendered"></div>
            <div class="text-caption text-grey">
              <p>Адрес: {{cardInfo.acf.адрес}}</p>
              <p>👁 {{ (Math.round (cardInfo.acf.views)) + parseInt(String( Date.now()).slice(8,9))}}</p>
            </div>
            <q-rating v-model="cardInfo.acf.рейтинг" :max="5" size="15px" /> &nbsp;{{cardInfo.acf.рейтинг }}
          </div>
        </div>
      </router-link>
    </q-card>
    {{ dateISO}}

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
      <q-carousel-slide name="first" img-src="../assets/afisha/Afisha1.jpeg">
      </q-carousel-slide>
    </q-carousel>
  <q-separator  style="margin-top: 20px" color="white" />

    <div >
    <div style="margin-top:20px">
      <q-card class="mtt">
        <q-img style="height:135px" src="../assets/mainCardBest/fil.webp" >
        <q-card-section><a href="https://kursal.ru/"><h2>ФИЛАРМОНИЯ</h2></a></q-card-section>
        </q-img>
      </q-card>
    </div>
    <div class="mtt">
      <q-card>
        <q-img style="height:135px" src="../assets/mainCardBest/vustavk.webp">
    <q-card-section><a href="https://afisha7.ru/kislovodsk/vystavki"><h2>ВЫСТАВКИ</h2></a></q-card-section>
        </q-img>
      </q-card>
    </div>
  </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { api } from 'boot/axios'
import { date } from 'quasar'

export default {
  setup () {
    // const date = ref(formattedDate) // ref(today.toLocaleDateString(options))
    const timeStamp = Date.now()
    const formattedDate = ref(date.formatDate(timeStamp, 'DD.MM.YYYY'))
    const dateISO = computed(() => {
      const convert = formattedDate.value.split('.')
      return `${convert[2]}-${convert[1]}-${convert[0]}`
    })
    function save () {
      loadData()
    }
    function goto (url) {
      window.location.href = url
    }
    const data = ref(null)
    function loadData () {
      api.get(`/posts?orderby=date&order=desc&after=${dateISO.value}T17:00:00&categories=${29}`)
        .then((response) => {
          data.value = response.data
          console.log(data.value)
        })
        .catch(() => {
          console.log('server error!')
        })
    }
    onMounted(() => {
      loadData()
    })
    return {
      goto,
      splitterModel: ref(50),
      slide: ref(1),
      info: ref('first'),
      data,
      loadData,
      save,
      date,
      dateISO,
      formattedDate
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
  color: rgb(0, 0, 0);
  font-family: Oswald, sans-serif;
  text-align: center;
  margin: 5%;
}
h1 {
  color: rgb(0, 0, 0);
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
  text-align: justify;

}
.mtt{
   margin-top: 12px;
   text-shadow: 3px 5px 6px rgb(2, 8, 47);
}

.q-img__content > div{
  position:relative;
  background: none;
}
.mmt{margin-top: 20px;}
.mmt a{color: rgb(0, 0, 0)}
.q-img{position: inherit !important; overflow: hidden;}
.q-img, .q-img__image, .q-img__container, .q-img__content {width:100px !important; height: 100px !important;}
.card-content{padding: 5px 0 0 10px;}
.cardColor{
  background-color: #ccc;
}
.custom-caption {
  text-align: center;
  position: absolute;
  color: white;
}
.topRight {
  right: 3px;
  top: 3px;
  padding: 3px;
  margin: 3px;
}
.bottRight {
    right: 0;
    bottom: 0;
    width: 160px;
    height: 84px;
    position: absolute;
}

.bottLeft {
  left: 3px;
  bottom: 3px;
  padding: 3px;
  margin: 3px;
}
.topLeft {
  left: 3px;
  top: 3px;
  padding: 3px;
  margin: 3px;
}
</style>
