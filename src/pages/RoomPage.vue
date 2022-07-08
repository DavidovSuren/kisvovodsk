<template>
<div class="q-pa-md  ">
  <q-page class="">
    <q-card class = "mmt "  v-for="cardInfo in data"
        :key="cardInfo.id" >
      <q-card-section horizontal>
<q-img :src="cardInfo.fimg_url" width="150px"/>
<div class="q-pa-md" >
          <div >
            <p>{{cardInfo.title.rendered}}<br/></p>
          </div>
          <div class="text-caption text-grey">
          {{cardInfo.excerpt.rendered}}
        </div>
        <div class="text-caption text-grey">
          Адрес:{{cardInfo.acf.адрес}}
        </div>
<q-rating v-model="cardInfo.acf.рейтинг" :max="5" size="32px" />{{cardInfo.acf.рейтинг }}
      </div>
      </q-card-section>
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
  async mounted () {
    console.log(await this.$fetch.get_posts())
  },
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
.mmt{
  margin-top: 20px;
}
.wd
{
  max-height: 50px
}
</style>
