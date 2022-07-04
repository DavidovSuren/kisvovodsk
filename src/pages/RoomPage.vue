<template>
  <q-card class="my-card">
    <q-card-section horizontal>
      <q-img
        class="col-3 flex flex-center"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnvg4B19hHctbPYKXLhetI-nMN2-2thc9XwVn7UQ6bQBiCXCxkY2QOoldc9Y5t0LQ77Q&usqp=CAU"
      />
      <q-card-actions vertical class="justify-around">
          <div class="row no-wrap items-center">
    <q-rating size="30px" v-model="stars" :max="5" color="blue" />
    <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
  </div>
        <h2>ВЫСОТА 5642</h2>
        <q-text>Кавказская кухня</q-text>
        <q-text>ВРЕМЯ РАБОТЫ: Пн—Вс с 12:00 до 00:00</q-text>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>
