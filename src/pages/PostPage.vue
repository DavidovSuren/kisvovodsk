<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { api } from 'boot/axios'
import { openURL } from 'quasar'

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
const category = ref(null)
const openHour = ref(null)
const workPeriod = ref(null)
const menu = ref(null)
const clouseHour = computed(() => {
  const clouseHour = (openHour.value + workPeriod.value) % 24
  return clouseHour // date.getHours() < openHour.value + workPeriod.value ? 'green' : 'red'
})
const isOpen = computed(() => {
  const date = new Date()
  return openHour.value <= date.getHours() && date.getHours() < openHour.value + workPeriod.value ? 1 : 0
})
const gal = ref([])
const slide = ref('style')
const feedback = ref([])

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
      category.value = response.data.categories
      openHour.value = response.data.acf.openHour
      workPeriod.value = response.data.acf.workPeriod
      menu.value = response.data.acf.меню
    })
    .catch((e) => {
      console.log(e)
    })
  api.get(`/media?parent=${post}`)
    .then((response) => {
      gal.value = response.data
    })
    .catch((e) => {
      console.log(e)
    })
  api.get(`/comments?post=${post}`)

    .then((response) => {
      response.data.forEach((comment) => {
        feedback.value.push(comment)
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
    <q-card style="background: #fff;">
      <q-card-section>
        <div>
          <h1
            class="itemHeader"
            style="line-height: 2rem; text-align: center"
            v-html="title"
          ></h1>
        </div>
      </q-card-section>
      <q-separator class="separ" color="white" />
    <div class="row">
      <div class="col">
        <p class="pTime sTitle" v-if="openHour && workPeriod" >
          <!--
          <q-icon name="done" color="green" v-if="isOpen"></q-icon>
          <q-icon name="watch" color="red" v-if="!isOpen"></q-icon> -->
          <q-icon name="done" color="green" v-if="isOpen"></q-icon>
          <span  style="color:red" v-if="!isOpen">
            Закрыто
          </span>
          {{openHour}}:00 -{{clouseHour}}:00

        </p>
        <p class="pTime sTitle " v-if="!openHour">{{opentime}}</p>
      </div>
      <div class="col">
        <p class="sTitle pTime classfy" v-html="subtitle"></p>
      </div>
    </div>

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
            <q-rating readonly v-model="rating" :max="5" size="25px" />
          </q-card-section>
        </div>
        <q-card-section>
          <div>
             <q-btn  class="btnMenu" push style="  margin-right: 5px;" color="blue"   size="15px">
              <q-icon name="smart_display" color="white"></q-icon>
              <q-popup-proxy>
                <q-video class="mmtt" :src="video"> </q-video>
              </q-popup-proxy>
            </q-btn>
          </div>
        </q-card-section>
      </q-card-section>
      <q-card-section horizontal style="display: flex; justify-content: space-between">
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
              <p  class="pTel">
                Телефон: <a :href="`tel:${phone}`">{{phone}}</a>
              </p>
            </div>
          </q-card-section>

          <q-card-section v-if="category == 11 " style="padding-bottom: 12px;">

          <q-btn @click="this.$router.push('/booking'); "  push color="blue"   size="14px">
              <p class="pBooking ">Забронировать</p>
            </q-btn>
          </q-card-section>
        </div>
      <div  v-if="category == 30 || category == 31 || category == 32 ||category == 33 " >

            <q-btn
            @click="openURL(menu, '_blank').focus()"
            class="btnMenu"
            push
            round
            color="blue"
            size="25px">
                <q-icon name="local_dining" color="white" text="меню"></q-icon>
                </q-btn>
              </div>
      </q-card-section>
      <q-separator color="black" style="margin-top:10px" />

      <q-card-section style="margin-top:15px">
        <div>
          <h1 class="contentTitle">Описание</h1>
          <p class="descrip" v-html="content"></p>
        </div>
      </q-card-section>
      <q-separator class="mmtt" color="white" />
      <h2 class="contentTitle" >Отзывы</h2>
      <q-card-section v-for="feed in feedback" :key=feed.id>
        <q-card-section>
        {{feed.author_name}}
        </q-card-section>
        <q-card-section v-html=feed.content.rendered></q-card-section>
      </q-card-section>
      <div
          class="row fit justify-center items-center q-col-gutter no-wrap horisintal mmtt"
        >
        <q-btn
            push
            dense
            icon="edit"
            aria-label="Fa-brands fa-vk"
            icon-right="send"
            color="blue"
            size="24px"
            :href="`https://content.kissloveodsk.ru/?page_id=${post}#commentform`"
            class="pull-right on-left"
            label="Ваше мнение"
          />
      </div>
      <q-card-section>
        <div
          class="row fit justify-center items-center q-gutter-sm q-col-gutter no-wrap horisintal mmtt"
        >

          <q-btn
            push
            dense
            icon="fa-brands fa-vk"
            aria-label="Fa-brands fa-vk"
            color="blue"
            size="14px"
            :href="vk"
          />
          <q-btn
            push
            dense
            icon="fa-brands fa-instagram"
            aria-label="Fa-brands fa-instagram"
            color="blue"
            size="16px"
            :href="insta"
          />
          <q-btn
            push
            dense
            icon="telegram"
            aria-label="Phone"
            color="blue"
            size="18px"
            :href="telegram"
          />
          <q-btn
            push
            dense
            icon="email"
            aria-label="Email"
            color="blue"
            size="16px"
            :href="email"
          />
          <q-btn
            push
            dense
            icon="phone"
            aria-label="Phone"
            color="blue"
            size="14px"
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
  margin-bottom: -2px;
  margin-right: 5px;
  font-size: 19px;
}
body {
  background: rgb(2, 0, 28);
}
h2,
h1 {
  font-size: 27px;
}
p {
  font-family: Oswald, sans-serif;
}
.pAdr {
  margin: 0;
  font-size: 15px;
}
.pWay {
  font-size: 14px;
  color: rgb(0, 0, 255);
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
  color: #0000ff;
}
.sTitle {
  font-family: Oswald, sans-serif !important;
  font-size: 17px !important;
  padding-top: 24px;
}
.q-rating {
  color: rgb(255, 166, 0) ;
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
  color:rgb(3, 0, 0);
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
  margin-top: 10px;
}
.txtMenu {
  text-align: center;
  color: #110e35;
}
.q-card {
  color: rgb(255, 255, 255)!important;
}
.cardMenu {
  height: max-content;
  width: max-content;
  min-width: 300px;
  min-height: 300px;
  align-content: center;
}
.active {
  color:green
}
.pBooking{
 margin: 0;
}
.q-card{
  background-color: #fff!important;
  color:black!important;
  padding: 0 4px;
  margin: 4px 0px;
}
.q-pa-md {
    padding: 16px 4px;
    margin: 16px 0px;
    /* border-width: 42px; */
}
.classfy{
  display: flex;
  justify-content: flex-end;
}
.itemHeader{
  padding-top: 20px;
  margin-bottom: -30px;
}
</style>
