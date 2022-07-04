<template>
  <q-card class="my-card">
    <q-card-section horizontal>
      <q-img class="col-5 flex flex-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnvg4B19hHctbPYKXLhetI-nMN2-2thc9XwVn7UQ6bQBiCXCxkY2QOoldc9Y5t0LQ77Q&usqp=CAU"/>
      <q-card-actions vertical class="justify-around">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="accent" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card-section>
  </q-card>
  <div class="row no-wrap items-center">
    <q-rating size="30px" v-model="stars" :max="5" color="blue" />
    <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
  </div>
</template>
