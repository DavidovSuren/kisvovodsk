<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { api } from 'boot/axios'
const route = useRoute()
const post = route.params.id
const title = ref(null)
const addr = ref(null)
function load () {
  api.get(`/posts/${post}`)
    .then((response) => {
      title.value = response.data.title.rendered
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
  {{title}}
  {{addr}}
</q-page>
</template>
