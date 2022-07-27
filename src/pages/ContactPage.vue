<template>
<h1>СВЯЖИТЕСЬ С НАМИ
<p>Мы объединяем людей</p>
</h1>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section style="text-align:center">
        <div class="text-h6">СВЯЖИТЕСЬ С НАМИ:</div>
         <q-btn
          dense
          icon="fa-brands fa-vk"
          aria-label="Fa-brands fa-vk"
          color="blue"
          size="2em"
        />
         <q-btn
          dense
          icon="fa-brands fa-instagram"
          aria-label="Fa-brands fa-instagram"
          color="red"
          size="2em"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>

    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section style="text-align:center">
        <div class="text-h6">ЭЛЕКТРОННОЕ ПИСЬМО:</div>
          <q-btn
          dense
          icon="email"
          aria-label="Email"
          color="dark blue"
          size="2em"
        />
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
      <div class="text-subtitle2">davidov05101996@gmail.com</div>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card">
      <q-card-section style="text-align:center">
        <div class="text-h6">ПОЗВОНИТЕ НАМ:</div>
          <q-btn
          dense
          icon="phone"
          aria-label="Phone"
          color="green"
          size="2em"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
      +7(962) 003 12 86
      </q-card-section>

      <q-separator inset />

      <q-card-section>
      +7(928) 346 8468
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ContactPage',
  setup () {
    return {
      lorem: 'Свяжитесь с нами для получения предложения. Станьте нашими парнтёрами и присоединитесь к команде.'
    }
  }
})
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100%
</style>
