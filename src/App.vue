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
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Oswald&display=swap");

body * {font-family: 'Oswald', sans-serif;}
body { background: rgba(46, 35, 74, 0.991);   font-family: "Oswald", sans-serif;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;}
h1 {font-family: monospace; font-size: 23px; margin-top: -30px; margin-bottom: -20px;}
h2 {font-family:monospace; font-size: 23px; align-self: start;  }
p  {font-family: cursive; font-size: 18px}
a  {font-family: cursive; font-weight:  150px;text-decoration: none}
</style>
