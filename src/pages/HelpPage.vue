<template>
         <h1 class="contentTitle">Связь для помощи</h1>
         <q-separator class="separ" inset color="white" />
  <div class="q-pa-md ">
   <q-card class="q-pa-md">
         <q-btn
         class="full-width"
            push
            dense
            icon="fa-brands fa-vk"
            aria-label="Fa-brands fa-vk"
            color="positive"
            size="40px"
            href="https://vk.com/heart_city_kissloveodsk"
          />
    </q-card>
       <q-card class="q-pa-md">
         <q-btn
         class="full-width"
            push
            dense
            icon="telegram"
            aria-label="Fa-brands fa-vk"
            color="positive"
            size="40px"
            href="https://t.me/heart_city_kissloveodsk "
          />
    </q-card>
           <q-card class="q-pa-md">
         <q-btn
         class="full-width"
            push
            dense
            icon="email"
            aria-label="Email"
            color="positive"
            size="40px"
            href="Davidov05101996@gmail.com "
          />
    </q-card>
           <q-card class="q-pa-md">
         <q-btn
         class="full-width"
            push
            dense
            icon="phone"
            aria-label="Fa-brands fa-vk"
            color="positive"
            size="40px"
            href="`tel:${+79844444068}`"
          />
    </q-card>
  </div>
</template>
<script>
export default { name: 'InfoPage' }
</script>
<style  scoped>
.q-card{
  background: none;
  box-shadow: none;
}
.contentTitle {
  text-align: center;
  padding-top: 15px;
  margin-bottom: -40px;
  font-size: 27px;
  color: white;
}
  .separ {
  margin-top: 30px;
}
</style>
