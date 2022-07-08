<template>
<div class="q-pa-md ">
  <q-page class="">
    <q-card class = "mmt " v-for="cardInfo in data"
        :key="cardInfo.id" >
      <router-link :to="`/post/${cardInfo.id}`">
      <q-card-section horizontal>
<q-img :src="cardInfo.fimg_url" width="150px" />
<div class="q-pa-md" >
          <div >
            <h1>{{cardInfo.title.rendered}}</h1>
          </div>
          <div class="text-caption text-grey" >
            <p v-html="cardInfo.excerpt.rendered"></p>
        </div>
        <div class="text-caption text-grey">
          <p>Адрес: {{cardInfo.acf.адрес}}</p>
        </div>
<q-rating v-model="cardInfo.acf.рейтинг" :max="5" size="32px" />{{cardInfo.acf.рейтинг }}
      </div>
      </q-card-section>
      </router-link>
      </q-card>
</q-page>
</div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'

export default {
  name: 'CafeName',
  setup () {
    const $q = useQuasar()
    const data = ref(null)
    function loadData () {
      api.get('/posts?categories=31')
        .then((response) => {
          data.value = response.data
        })
        .catch(() => {
          console.log('server error!')
        })
    }
    function getComments (id) {
      api.get(`/comments?post=${id}`)
        .then((response) => {
          response.data.forEach(function (entry) {
            $q.notify(entry.content.rendered)
          })

          console.log(response.data)
        })
        .catch(() => {
          console.log('server error!')
        })
    }
    onMounted(() => {
      loadData()
    })
    return {
      data,
      loadData,
      getComments
    }
  }
}
</script>

<style>
.mmt{  margin-top: 20px;}
</style>
