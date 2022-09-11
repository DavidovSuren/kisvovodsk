<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated
class="bgHeader"
>
<q-toolbar >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          color= indigo-10
        />
        <q-toolbar-title @click="this.$router.push('/');" >
          <div style="margin-bottom: -3px;">Сердце Кисловодска&nbsp;
       </div>
        </q-toolbar-title>
  <q-btn @click="this.$router.push('/');"
          flat dense
        ><q-icon   size="30px">
            <img src="../assets/bitmap.png" >
          </q-icon></q-btn>
      </q-toolbar>

    </q-header>

    <q-drawer class="bbg" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list color="white">
        <q-item-label header > <h1> Меню</h1></q-item-label>
  <q-separator color="white" inset />
<div class="mt">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="menuText"
        />
</div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <yandexInfo/>
  </q-layout>
</template>

<script>
import yandexInfo from 'components/yandexInfo.vue'
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
    EssentialLink,
    yandexInfo
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
.bbg{
 background: linear-gradient(234deg, rgba(232, 232, 238, 0.723));
backdrop-filter: blur(10px);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}
.bgHeader{
  background: linear-gradient(234deg, rgba(254, 254, 255, 0.723) 11%, rgba(33, 69, 215, 0.726) 40%, rgba(236, 8, 0, 0.477) 89%);
backdrop-filter: blur(10px);
}
</style>
<style scoped>
h1{
  color: rgb(1, 2, 36);
  font-size: 27px;
  margin-bottom: -40px;
}
.menuText{
  color:rgb(1, 2, 36); font-size: large;
  font-family: monospace;
}
.mt{
    margin-top: 15px;
}
.q-item-label{   margin-top: -15px;}
</style>
