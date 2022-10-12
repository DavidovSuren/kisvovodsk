<template>
  <body
    class="home page-template page-template-front-page page-template-front-page-php page page-id-73 wp-custom-logo header-full-width full-width-content genesis-breadcrumbs-hidden home-page"
    ontouchstart=" "
  >
    <button
      class="add-button"
      style="
        z-index: 99999;
        position: absolute;
        left: 0%;
        top: 1460px;
        width: 100%;
        height: 100px;
        /*border: 5px #000 solid;*/
        opacity: 0.5;
        border-radius: 25px;
      "
    >
      Установить
    </button>
    <!-- quasar:entry-point -->
  </body>
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
