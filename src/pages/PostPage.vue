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
  <h1>{{title}}</h1>
  {{addr}}
  <div v-html="content">
  </div>
</q-page>
</template>
