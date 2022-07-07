<template>
<div class="q-pa-md">
    <q-card class = "mmt" v-for=" card in cards" :key="card.id">
      <q-card-section horizontal>
<q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" width="50%"/>
<div class="q-pa-md" >
          <div >
            <p>{{card.name}}<br/></p>
          </div>

        <div class="text-subtitl1">
          {{card.subtitle}}
        </div>
        <div class="text-caption text-grey">
          Адрес: {{card.caption}}
        </div>
      </div>
      </q-card-section>

      <q-separator ></q-separator>

      <q-card-actions>
        <q-btn flat color="primary">
         <a :href="card.feedback">Написать отзыв</a>
        </q-btn>
      </q-card-actions>
      </q-card>
    </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      stars: ref(4),
      cards: [
        {
          id: 1,
          name: 'Солнце',
          subtitle: 'Европейская, Фьюжн, Кавказская',
          caption: 'Пр. Победы 19',
          feedback: 'https://yandex.ru/maps/org/solntse/167550634327/reviews/?add-review=true&ll=42.717270%2C43.909955&z=15'
        },
        {
          id: 2,
          name: 'Солнце',
          subtitle: 'Европейская, Фьюжн, Кавказская',
          caption: 'Пр. Победы 19',
          feedback: ''
        }
      ]
    }
  }
}
</script>
<style>
.mmt{
  margin-top: 20px;
}

</style>
