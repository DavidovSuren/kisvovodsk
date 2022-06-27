<template>
  <q-page class="flex flex-center">
    <q-img
      src="~assets/food.png"
      no-native-menu
      @click="$router.replace('/food')"
      alt="Quasar logo"
      style="width: 46%; border-radius: 50%; border: 10px #2196f3 solid; margin: 5px"
    >
      <div class="absolute-bottom text-subtitle1 text-center" style="background: transparent; color: #2196f3; font-size: 25px;">Еда</div>
    </q-img>
    <q-img
      src="~assets/room.png"
      no-native-menu
      @click="$router.push('/room')"
      alt="Quasar logo"
      style="width: 46%; border-radius: 50%; border: 10px #b0003a solid; margin: 5px"
    >
      <div class="absolute-bottom text-subtitle1 text-center" style="background-color: #FFFFFF; opacity: 0.5; color: #b0003a; font-size: 25px;">Жильё</div>
    </q-img>
    <q-img
      src="~assets/parking.jpg"
      no-native-menu
      @click="$router.replace('/parking')"
      alt="Quasar logo"
      style="width: 46%; border-radius: 50%; border: 10px #9e00c5 solid; margin: 5px"
    >
      <div class="absolute-bottom text-subtitle1 text-center" style="background: transparent; color: #320b86; font-size: 25px;">Транспорт</div>
    </q-img>
    <q-img
      src="~assets/eks.jpg"
      no-native-menu
      @click="$router.replace('/eks')"
      alt="Quasar logo"
      style="width: 46%; border-radius: 50%; border: 10px #26c6da solid; margin: 5px"
    >
      <div class="absolute-bottom text-subtitle1 text-center" style="background-color: #FFFFFF; opacity: 0.5; color: #ffab00; font-size: 25px;">Гиды</div>
    </q-img>
    <q-img
      src="~assets/clothing.jpg"
      no-native-menu
      @click="$router.replace('/clothing')"
      alt="Quasar logo"
      style="width: 46%; border-radius: 50%; border: 10px #ffff00 solid; margin: 5px"
    >
      <div class="absolute-bottom text-subtitle1 text-center" style="color: #ffff00; font-size: 25px;">Одежда</div>
    </q-img>
    <q-img
      src="~assets/serves.jpg"
      no-native-menu
      @click="$router.replace('/serves')"
      alt="Quasar logo"
      style="width: 46%; border-radius: 50%; border: 10px #00e5ff solid; margin: 5px"
    >
      <div class="absolute-bottom text-subtitle1 text-center" style="background: transparent; color: #00e5ff; font-size: 25px;">Услуги</div>
    </q-img>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
