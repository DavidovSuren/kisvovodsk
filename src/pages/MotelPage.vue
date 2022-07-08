<template>
<q-page>
      <q-card
        v-for="cardInfo in data"
        :key="cardInfo.id"
        class="my-card">
        <q-img :src="cardInfo.fimg_url" />
        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              {{cardInfo.title.rendered}}
            </div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            >
              <q-icon name="place" />
            </div>
          </div>
          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section v-html="cardInfo.content.rendered">
        </q-card-section>
        <q-separator />
      </q-card>
</q-page>
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
      api.get('/posts?categories=13')
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
