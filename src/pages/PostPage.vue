<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { api } from 'boot/axios'
const route = useRoute()
const post = route.params.id
const title = ref(null)
const addr = ref(null)
const content = ref(null)
function load () {
  api.get(`/posts/${post}`)
    .then((response) => {
      title.value = response.data.title.rendered
      content.value = response.data.content.rendered
      addr.value = response.data.acf.адрес
    })
    .catch(() => {
      console.log('server error!')
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
      </q-card-section>
      <q-separator inset />
      <q-card-section>
        <div v-html="content"></div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100%
</style>
