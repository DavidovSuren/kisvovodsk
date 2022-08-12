<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
<style>
body { background: linear-gradient(356deg, rgb(33, 3, 45) 0%, rgb(65, 70, 116) 100%);}
h1 {font-family: monospace; font-size: 23px; margin-top: -30px; margin-bottom: -20px;}
h2 {font-family:monospace; font-size: 23px; align-self: start;  }
p  {font-family: cursive; font-size: 18px}
a  {font-family: cursive; font-weight:  150px;text-decoration: none}
</style>
