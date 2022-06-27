<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title
          @click="this.$router.push('/');"
        >
          KissLove
        </q-toolbar-title>

        <q-btn
        icon="help"
        @click="this.$router.push('/info');"
        ></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Еда',
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
    icon: 'local_parking',
    link: '#parking'
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

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
