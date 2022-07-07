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
body { background: "src/background/fon2.png"}
h1 {font-family: cursive;  }
h2 {font-family:monospace; font-size: 23px; align-self: start;  }
p  {font-family: monospace; font-size: 20px}
a  {font-family: cursive; font-weight:  150px;text-decoration: none}
</style>
