<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card"> </q-card>

    <q-card
      class="my-card text-white"
      style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
    >
      <q-card-section>
        <div class="text-h6">
          СЕРДЦЕ ГОРОДА сегодня - это наше будущее завтра.
        </div>
        <div class="text-subtitle2">
          Это будущий информационный портал города будущего
        </div>
      </q-card-section>
    </q-card>

    <q-card class="my-card text-white"
          style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
          >
      <q-card-section>
        <div class="text-h6">Миссия СЕРДЦЕ ГОРОДА</div>
      </q-card-section>
      <q-card-section class="text-subtitle2">
        Это достоверный и проверенный информационный портал, где вы с лёгкостью
        сможете посмотреть и найти нужные Вам данные о инфраструктуре города.
        Места отдыха, экскурсии, рестораны, центры развлечения и торговые
        центры. Узнать больше информации о городе Курорте Кисловодске.
      </q-card-section>
    </q-card>

    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">КОМАНДА</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Наши наработки собраны из открытых источников и являются основой для
        написания полезных программ. Мы являемся группой энтузиастов -
        программистов. В наших активах: опыт разработки приложений, обучение
        нейроных сетей, работа с большими данными и участия в эксперементах на
        научном реакторе частиц ( нейтронный пучок поподая на кристалл
        рассеивается под разными углами и регестрируясь даёт множество
        спектаров, что позволяет с невероятной точностью определить структуру
        образца). В спектр наших интересов входит озвучить архитектурные
        шедевры. Гармоничные формы должны перекладываться на музыку. Также в
        приложенных изображениях можно увидеть наши наработки по фаст фурье
        преобразованиям, что дает спектр, а через вейвлеты добеши. Ещё изучаем
        гармонию формы через золотое сечение и спираль фибаначи.
      </q-card-section>

      <q-separator inset />
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
</style>
