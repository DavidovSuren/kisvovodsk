<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'
const $q = useQuasar()
const route = useRoute()
const post = route.params.id
const title = ref(null)
const addr = ref(null)
const phone = ref(null)
const opentime = ref(null)
const content = ref(null)
const rating = ref(null)
const subtitle = ref(null)
const video = ref(null)
const number = ref(null)
const insta = ref(null)
const vk = ref(null)
const mail = ref(null)
const telegram = ref(null)
const whatsapp = ref(null)
const awards = ref(null)

const regex = /( |<([^>]+)>)/ig

const gal = ref([])
const slide = ref('style')
function load () {
  api.get(`/posts/${post}`)
    .then((response) => {
      title.value = response.data.title.rendered
      content.value = response.data.content.rendered
      addr.value = response.data.acf.адрес
      phone.value = response.data.acf.телефон
      opentime.value = response.data.acf.время_работы
      content.value = response.data.acf.card_content
      rating.value = response.data.acf.рейтинг
      subtitle.value = response.data.excerpt.rendered
      video.value = response.data.acf.видео
      number.value = response.data.acf.номер_позиции
      insta.value = response.data.acf.инстаграм
      vk.value = response.data.acf.вк
      mail.value = response.data.acf.Почта
      telegram.value = response.data.acf.телеграмм
      whatsapp.value = response.data.acf.whatsapp
      awards.value = response.data.acf.награды
    })
    .catch((e) => {
      console.log(e)
    })
  api.get(`/media?parent=${post}`)
    .then((response) => {
      /* response.data.forEach((el) => {
        gal.value.push(el.guid.rendered)
      }) */
      gal.value = response.data
    })
    .catch((e) => {
      console.log(e)
    })
  api.get(`/comments?post=${post}`)

    .then((response) => {
      function del (comment) {
        const clean = comment.replace(regex, ' ')
        return clean
      }
      response.data.forEach((comment) => {
        $q.notify(del(comment.content.rendered))
      })
    })
    .catch((e) => {
      console.log(e)
    })
}

onMounted(() => {
  load()
})

// console.log(data.value)
</script>

<template>
  <div class="q-pa-md">
    <q-card style="background: none">
      <q-card-section>
        <div>
          <h1
            style="line-height: 2rem; padding-top: 25px; text-align: center"
            v-html="title"
          ></h1>
        </div>
      </q-card-section>
      <q-separator class="separ" color="white" />
      <q-card-section>
        <q-card-section>
          <p class="sTitle" v-html="subtitle"></p>
        </q-card-section>
      </q-card-section>
      <q-carousel
        autoplay
        swipeable
        animated
        v-model="slide"
        arrows
        infinite
        height="250px"
        class="shadow-3"
      >
        <q-carousel-slide
          v-for="pic in gal"
          :key="pic.id"
          :name="pic.id"
          :img-src="pic.guid.rendered"
        ></q-carousel-slide>
      </q-carousel>

      <q-card-section
        style="display: flex; justify-content: space-between"
        horizontal
      >
        <div>
          <q-card-section horizontal class="cardSectionRating"
            ><p class="pRating">{{rating}}</p>
            <q-rating readonly v-model="ratin" :max="5" size="25px" />
          </q-card-section>
        </div>
        <div>
          <q-card-section>
            <q-btn class="btnMenu" push>
              <p style="text-align: center; margin: 0">Меню</p>
              <q-popup-proxy>
                <q-card class="cardMenu">
                  <h1 class="txtMenu">Меню</h1>
                  <p class="txtMenu">{{menu}}</p>
                  <q-btn
                    icon="left"
                    label="Назад"
                    color="positive"
                    flat
                    v-close-popup
                  />
                </q-card>
              </q-popup-proxy>
            </q-btn>
          </q-card-section>
        </div>
      </q-card-section>

      <q-card-section>
        <p class="pTime">Время работы: {{opentime}}</p>
      </q-card-section>
      <q-card-section horizontal>
        <div>
          <q-card-section class="q-pt-none">
            <p class="pAdr">Адрес: {{addr}}</p>
            <div>
              <p class="pWay">
                <a :href="`https://www.google.com/maps/dir//${addr}`"
                  >Построить маршрут</a
                >
              </p>
            </div>
          </q-card-section>
          <q-card-section>
            <div>
              <p class="pTel">
                Телефон: <a :href="`tel:${phone}`">{{phone}}</a>
              </p>
            </div>
          </q-card-section>
        </div>
      </q-card-section>
      <q-separator color="white" />

      <q-card-section>
        <div>
          <h1 class="contentTitle">Описание</h1>
          <p class="descrip" v-html="content"></p>
        </div>
        <q-separator class="mmtt" inset color="white" />
        <h1
          style="
            line-height: 2rem;
            padding-top: 25px;
            text-align: center;
            padding-top: 40px;
          "
        >
          Видео
        </h1>
        <q-video class="mmtt" :src="video"> </q-video>
      </q-card-section>
      <q-separator class="mmtt" color="white" />

      <q-card-section>
        <div
          class="row fit justify-center items-center q-gutter-sm q-col-gutter no-wrap horisintal mmtt"
        >
          <q-btn
            push
            dense
            icon="fa-brands fa-vk"
            aria-label="Fa-brands fa-vk"
            color="positive"
            size="18px"
            :href="vk"
          />
          <q-btn
            push
            dense
            icon="fa-brands fa-instagram"
            aria-label="Fa-brands fa-instagram"
            color="positive"
            size="18px"
            :href="insta"
          />
          <q-btn
            push
            dense
            icon="email"
            aria-label="Email"
            color="positive"
            size="18px"
            :href="email"
          />
          <q-btn
            push
            dense
            icon="telegram"
            aria-label="Phone"
            color="positive"
            size="18px"
            :href="telegram"
          />
          <q-btn
            push
            dense
            icon="phone"
            aria-label="Phone"
            color="positive"
            size="18px"
            :href="`tel:${phone}`"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<style scoped>
.wp-block-image {
  width: 100% !important;
}
.wp-block-image * {
  margin: 0 !important;
  padding: 0 !important;
}
figure {
  width: 100% !important;
  margin-block-start: 0 !important;
  margin-block-end: 0 !important;
  margin-inline-start: 0 !important;
  margin-inline-end: 0 !important;
}
.wp-block-image img {
  width: 100% !important;
  height: auto !important;
  max-width: 100% !important;
  min-width: 100% !important;
}
.q-card__section--vert {
  padding: 0%;
}
.cardSectionRating {
  margin: 10px;
}
.pRating {
  margin-bottom: 0;
  margin-right: 10px;
}
body {
  background: rgb(2, 0, 28);
}
h2,
h1 {
  color: aliceblue;
  font-size: 27px;
}
p {
  color: white;
  font-family: Oswald, sans-serif;
}
.pAdr {
  margin: 0;
  font-size: 15px;
}
.pWay {
  font-size: 14px;
  color: orange;
}
.pTime {
  font-family: Oswald, sans-serif;
  font-size: 17px;
  padding-top: 15px;
}
.pTel {
  font-size: 17px;
}
a {
  font-family: Oswald, sans-serif;
  color: #ffa500ab;
}
.sTitle {
  font-family: Oswald, sans-serif !important;
  font-size: 17px !important;
  padding-top: 24px;
}
.q-rating {
  color: orange !important;
}
.descrip {
  font-size: 16px;
  text-align: justify;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: -30px;
}
.h3,
h4,
h5,
h6 {
  font-size: 15px !important;
}
.contentTitle {
  text-align: center;
  padding-top: 10px;
}
.separ {
  margin-top: 35px;
}
.mmtt {
  margin-top: 12px;
}
.q-card {
  box-shadow: none;
}
.btnMenu {
  background-color: #110e35;
  margin-top: 10px;
}
.txtMenu {
  text-align: center;
  color: #110e35;
}
.cardMenu {
  height: max-content;
  width: max-content;
  min-width: 300px;
  min-height: 300px;
  align-content: center;
}
</style>
