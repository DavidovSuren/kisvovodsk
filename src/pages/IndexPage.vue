<template>
  <q-page class="flex flex-center">
    <q-img
      src="~assets/food.jpg"
      no-native-menu
      @click="$router.replace('/food')"
      alt="Quasar logo"
      style="width: 200px; height: 200px; border-radius: 50%; border: 10px #000 solid; margin: 5px"
    >
      <div class="absolute-bottom text-subtitle1 text-center">Еда</div>
    </q-img>
    <q-img
      src="~assets/room.jpg"
      no-native-menu
      @click="$router.push('/room')"
      alt="Quasar logo"
      style="width: 200px; height: 200px; border-radius: 50%"
    >
      <div class="absolute-bottom text-subtitle1 text-center">Жильё</div>
    </q-img>
    <q-img
      src="~assets/parking.jpg"
      no-native-menu
      @click="$router.replace('/parking')"
      alt="Quasar logo"
      style="width: 200px; height: 200px; border-radius: 50%"
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
