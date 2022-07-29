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
const content = ref(null)

const gal = ref([])
const slide = ref('style')
function load () {
  api.get(`/posts/${post}`)
    .then((response) => {
      title.value = response.data.title.rendered
      content.value = response.data.content.rendered
      addr.value = response.data.acf.адрес
      phone.value = response.data.acf.телефон
      content.value = response.data.acf.card_content
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
      response.data.forEach((comment) => {
        $q.notify(comment.content.rendered)
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
  <q-page>
    <!--<p>{{data.title.rendered}}</p>
  <p>{{data.excerpt.rendered}}</p>
  <p>{{data.acf.адрес}}</p>
  <p>{{data.acf.рейтинг}}</p>-->
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">
          <h1>{{title}}</h1>
        </div>

      </q-card-section>
      <q-card-section class="q-pt-none">
        {{addr}}
        <div>
          <a :href="`https://www.google.com/maps/dir//${addr}`">Построить маршрут</a>
        </div>
      </q-card-section>
        <q-card-section>
        <div class="text-h6">
          <a :href="`tel:${phone}`">{{phone}}</a>
        </div>

      </q-card-section>
      <q-separator inset />
      <q-carousel
        autoplay
        swipeable
        animated
        v-model="slide"
        arrows
        infinite
        height="500px"
        class="shadow-3"
      >
      <q-carousel-slide v-for="pic in gal" :key="pic.id" :name="pic.id" :img-src="pic.guid.rendered"></q-carousel-slide>
      </q-carousel>
      <q-card-section>
        <div v-html=content></div>
      </q-card-section>
    </q-card>

  </q-page>
</template>
<style>
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
</style>
