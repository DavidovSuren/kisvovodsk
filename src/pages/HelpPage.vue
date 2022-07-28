<template>
  <div class="q-pa-md row items-start q-gutter-md">
   <q-card
      class="my-card text-white telegram-link"
    >
      <q-card-section style="text-align:center">
      <div class="text-h4">ТЕЛЕГРАМ</div><br>
         <q-btn
          dense
          icon="fa-brands fa-telegram"
          aria-label="Fa-brands fa-telegram"
          color="blue"
          size="3em"
          :href="'//vk.com/id711311713'"

        />
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default { name: 'InfoPage' }
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100%
  margin-top: 80%
.telegram-link
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)
  border-radius: 10px 150px / 120px
</style>
