<template>
  <q-card class="my-card">
    <q-card-section horizontal>
      <q-img class="col" src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-card-actions vertical class="justify-around">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="accent" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card-section>
  </q-card>
  <div class="row no-wrap items-center">
    <q-rating size="18px" v-model="stars" :max="5" color="primary" />
    <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
  </div>
</template>
