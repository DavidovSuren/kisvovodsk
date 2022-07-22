<template>
<video v-if="intro" src="../assets/intro.mp4" autoplay muted style="width: 100%; height: 100%; position:absolute; z-index: 10000; object-fit: cover;">
</video>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated
   style="
background: linear-gradient(234deg, rgba(158,105,215,0.7231267507002801) 11%, rgba(30,162,175,0.7262255243894433) 40%, rgba(63,76,167,0.4321078773306197) 57%, rgba(166,107,238,0.38448882971157217) 72%, rgba(238,111,107,0.47692580450148814) 89%);
backdrop-filter: blur(10px);"
>
<q-toolbar >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          color="dark blue"
        />
        <q-toolbar-title @click="this.$router.push('/');" style="color: black">
          <div style="font-family:cursive; margin-bottom: -3px;">Сердце Кисловодска&nbsp;

          <q-icon size="25px">
            <img src="../assets/bitmap.png" >
          </q-icon>
       </div>
        </q-toolbar-title>
  <q-btn @click="this.$router.push('/');"
          flat
          dense
          icon="home"
          aria-label="Home"
          color="dark blue"
        />
      </q-toolbar>

    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
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
    title: 'О нас',
    icon: 'help',
    link: '/info'
  },
  {
    title: 'Помощь',
    caption: 'Обратная свзяь',
    icon: 'accessibility',
    link: 'https://awesome.quasar.dev'
  },
  {
    title: 'Контакты',
    caption: 'Реклама',
    icon: 'phone',
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
    const intro = ref(true)
    setTimeout(() => { intro.value = false }, 3000)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      intro,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style>
      body{
background: rgb(131,222,244);
background: linear-gradient(356deg, rgba(131,222,244,0.1561519607843137) 0%, rgba(250,250,250,0.258140756302521) 100%);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;}
</style>
