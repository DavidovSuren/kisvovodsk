<template>
  <video
    v-if="intro"
    src="../assets/intro.mp4"
    autoplay
    muted
    style="
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 10000;
      object-fit: cover;
    "
  ></video>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="backdrop-filter: blur(10px)">
      <q-toolbar>
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
          <div
            style="
              text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4),
                0px 8px 13px rgba(0, 0, 0, 0.1),
                0px 18px 23px rgba(0, 0, 0, 0.1);
            "
          >
            Сердце Кисловодска&nbsp;

            <q-icon size="25px">
              <img src="../assets/bitmap.png" />
            </q-icon>
          </div>
        </q-toolbar-title>
        <q-btn
          @click="this.$router.push('/');"
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
    link: '/help'
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
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Oswald&display=swap");
body {
  font-family: "Oswald", sans-serif;
  background: rgb(131, 222, 244);
  background: linear-gradient(
    356deg,
    rgba(14, 1, 73, 0.95) 0%,
    rgba(244, 2, 188, 0.875) 100%
  );
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}
body * {
  font-family: "Oswald", sans-serif;
}
</style>
