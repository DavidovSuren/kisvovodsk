<template>
        <div class="row no-wrap items-center">
          <q-rating size="18px" v-model="stars" :max="5" color="primary"/>
          <span class="text-caption text-grey q-ml-sm">4.2 (551)</span>
        </div>
</template>

<style lang="sass" scoped>
.shadow-box
  width: 90px
  height: 90px
  margin: 25px
  border-radius: 50%
  font-size: 12px
.doc-inset-shadow
  width: 120px
  height: 120px
  border: 1px solid #eee
  padding: 4px
</style>
