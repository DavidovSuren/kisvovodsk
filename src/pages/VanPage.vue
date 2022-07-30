<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section style="text-align:center">
        <div class="text-h4">Общественный транспорт:</div><br>
         <q-btn
          dense
          icon="train"
          aria-label="train"
          color="blue"
          size="5em"
          :href="'//yandex.ru/maps/11062/kislovodsk/transport/minibuses/?l=masstransit&ll=42.716822%2C43.904244&z=13.34'"
        />
      </q-card-section>
    </q-card>
    </div>
</template>
<script>
export default { name: 'VanPage' }
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100%
</style>
