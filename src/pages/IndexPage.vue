<template>
  <q-page id="index" class="flex flex-center">
    <q-img
      src="~assets/icons/free-icon-food.png"
      no-native-menu
      @click="$router.replace('/food')"
      alt="Quasar logo"
      style="border-color: #f9a825"
    >
      <div class="img-title absolute-bottom text-subtitle1 text-center" style="color: #f9a825">Еда</div>
    </q-img>
    <q-img
      src="~assets/icons/free-icon-hotel.png"
      no-native-menu
      @click="$router.push('/room')"
      alt="Quasar logo"
      style="border-color: #1976d2"
    >
      <div class="img-title absolute-bottom text-subtitle1 text-center" style="color: #1976d2">Жильё</div>
    </q-img>
    <q-img
      src="~assets/icons/free-icon-taxi.png"
      no-native-menu
      @click="$router.replace('/parking')"
      alt="Quasar logo"
      style="border-color: #03a9f4"
    >
      <div class="img-title absolute-bottom text-subtitle1 text-center" style="color: #03a9f4; font-size: 23px;">Транспорт</div>
    </q-img>
    <q-img
      src="~assets/icons/free-icon-photo.png"
      no-native-menu
      @click="$router.replace('/eks')"
      alt="Quasar logo"
      style="border-color: #43a047"
    >
      <div class="img-title absolute-bottom text-subtitle1 text-center" style="color: #43a047">Туризм</div>
    </q-img>
    <q-img
      src="~assets/icons/free-icon-store.png"
      no-native-menu
      @click="$router.replace('/clothing')"
      alt="Quasar logo"
      style="border-color: #5e35b1"
    >
      <div class="img-title absolute-bottom text-subtitle1 text-center" style="color: #5e35b1">Одежда</div>
    </q-img>
    <q-img
      src="~assets/icons/free-icon-payment.png"
      no-native-menu
      @click="$router.replace('/serves')"
      alt="Quasar logo"
      style="border-color: #ec407a"
    >
      <div class="img-title absolute-bottom text-subtitle1 text-center" style="color: #ec407a">Услуги</div>
    </q-img>
  </q-page>
</template>

<script>
// TODO: Указать авторство иконок где-то.. <a href="https://www.flaticon.com/ru/free-icons/" title="компас иконки">Компас иконки от Freepik - Flaticon</a>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Marck+Script&display=swap');
.q-img {width: 46%; border-radius: 50%; border-width: 6px; border-style: solid; margin: 5px}
.q-img__image {padding:15%}
.q-img__container {border: none !important; border-radius: 0px;}
.img-title {font-family: 'Marck Script', cursive; background-color: #FFFFFF !important; opacity: 0.875; color: #ffab00; font-size: 30px; padding-top: 10px !important}
</style>
