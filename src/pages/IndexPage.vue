<template>
  <q-page class="flex flex-center">
    <q-img
      src="~assets/food.png"
      no-native-menu
      @click="$router.replace('/food')"
      alt="Quasar logo"
      style="width: 200px; height: 200px; border-radius: 50%; border: 10px #2196f3 solid; margin: 5px"
    >
      <div class="absolute-bottom text-subtitle1 text-center" style="background: transparent; color: #2196f3; font-size: 25px;">Еда</div>
    </q-img>
    <q-img
      src="~assets/room.jpg"
      no-native-menu
      @click="$router.push('/room')"
      alt="Quasar logo"
      style="width: 200px; height: 200px; border-radius: 50%; border: 10px #b0003a solid; margin: 5px"
    >
      <div class="absolute-bottom text-subtitle1 text-center" style="background: transparent; color: #b0003a; font-size: 25px;">Жильё</div>
    </q-img>
    <q-img
      src="~assets/parking.jpg"
      no-native-menu
      @click="$router.replace('/parking')"
      alt="Quasar logo"
      style="width: 200px; height: 200px; border-radius: 50%; border: 10px #9e00c5 solid; margin: 5px"
    >
      <div class="absolute-bottom text-subtitle1 text-center">Транспорт</div>
    </q-img>
    <q-img
      src="~assets/eks.jpg"
      no-native-menu
      @click="$router.replace('/eks')"
      alt="Quasar logo"
      style="width: 200px; height: 200px; border-radius: 50%"
    >
      <div class="absolute-bottom text-subtitle1 text-center">Экскурсии</div>
    </q-img>
    <q-img
      src="~assets/eks.jpg"
      no-native-menu
      @click="$router.replace('/eks')"
      alt="Quasar logo"
      style="width: 200px; height: 200px; border-radius: 50%"
    >
      <div class="absolute-bottom text-subtitle1 text-center">Гиды</div>
    </q-img>
    <q-img
      src="~assets/clothing.jpg"
      no-native-menu
      @click="$router.replace('/clothing')"
      alt="Quasar logo"
      style="width: 200px; height: 200px; border-radius: 50%"
    >
      <div class="absolute-bottom text-subtitle1 text-center">Одежда</div>
    </q-img>
    <q-img
      src="~assets/serves.jpg"
      no-native-menu
      @click="$router.replace('/serves')"
      alt="Quasar logo"
      style="width: 200px; height: 200px; border-radius: 50%"
    >
      <div class="absolute-bottom text-subtitle1 text-center">Услуги</div>
    </q-img>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
