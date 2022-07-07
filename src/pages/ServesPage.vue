<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-page
      v-for="cardInfo in cards"
      :key="cardInfo.title"
      class="flex flex-center mycard"
    >
      <q-card class="my-card">

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
              {{cardInfo.title}}
            </div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            >
              <q-icon name="place" />
              250 m
            </div>
          </div>
          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">Европейская/Японская кухня</div>
          <div class="text-caption text-grey">
            ВРЕМЯ РАБОТЫ: Пн—Вс с 14:00 до 02:00.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat round icon="event" />
          <q-btn flat color="primary"> Отзывы </q-btn>
        </q-card-actions>
      </q-card>
    </q-page>
  </div>
</template>
<script>
export default {
  name: 'FoodName',
  setup () {
    return {
      cards: [
        {
          title: 'Loft Bar "DIZZY"',
          caption: 'Рестораны Бары Кафе ',
          icon: 'flatware',
          link: '#food'
        },
        {
          title: 'Жильё',
          caption: 'Санатории Отели Квартиры',
          icon: 'hotel',
          link: '#room'
        },
        {
          title: 'Парковки',
          caption: 'Цена Часы Охрана',
          icon: 'local_',
          link: '#transport'
        },
        {
          title: 'Эксскурсии',
          caption: 'Достопримечательности Гиды',
          icon: 'place',
          link: 'Eks'
        },
        {
          title: 'Одежда',
          caption: 'Спорт Мех Туризм',
          icon: 'sell',
          link: 'https://twitter.quasar.dev'
        },
        {
          title: 'Услуги',
          caption: 'SPA Доставка Трансфер',
          icon: 'public',
          link: 'https://facebook.quasar.dev'
        },
        {
          title: 'Помощь',
          caption: 'Обратная свзяь Реклама',
          icon: 'accessibility',
          link: 'https://awesome.quasar.dev'
        }
      ]
    }
  }
}
</script>
<style scoped>
.my-card {
  width: 100%;
  min-height: 470px;
}
</style>
