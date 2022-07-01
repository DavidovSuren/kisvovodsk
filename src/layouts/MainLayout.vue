<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated
   style=" background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(9,9,121,1) 35%, rgb(225, 21, 21) 120%) "
>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title @click="this.$router.push('/');">
          KissLoveodsk
          <q-avatar>
            <img src="~assets/logo.png" />
          </q-avatar>
        </q-toolbar-title>

        <q-btn icon="help" @click="this.$router.push('/info');"></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> </q-item-label>

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
    title: 'Транспорт',
    caption: 'Цена Часы Охрана',
    icon: 'local_',
    link: '#transport'
  },
  {
    title: 'Туризм',
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
