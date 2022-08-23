<template>
  <div class="q-pa-md">
    <div>
      <q-card >
        <q-img style="height:135px" src="../assets/banerBest/restBan.jpeg" @click="this.$router.push('/restraunt'); ">
        <q-card-section><h2 class="aLine">РЕСТОРАНЫ</h2></q-card-section>
        </q-img>
      </q-card>
    </div>
    <div class="mtt">
      <q-card>
        <q-img style="height:135px" src="../assets/banerBest/cafeBan.jpeg" @click="this.$router.push('/cafe'); ">
    <q-card-section><h2 class="aLine">КАФЕ</h2></q-card-section>
        </q-img>
      </q-card>
    </div>
    <div class="mtt">
      <q-card>
        <q-img style="height:135px" src="../assets/banerBest/stolBan.jpg" @click="this.$router.push('/canteen'); ">
          <q-card-section><h2 class="aLine">СТОЛОВЫЕ</h2></q-card-section>
        </q-img>
      </q-card>
    </div>
    <div class="mtt">
      <q-card>
        <q-img style="height:135px" src="../assets/banerBest/fastban.webp" @click="this.$router.push('/fastfood'); ">
               <q-card-section><h2 class="aLine">ФАСТ-ФУД</h2></q-card-section>
        </q-img>
      </q-card>
    </div>
 </div>
</template>
<style scoped>
body * {font-family: 'Oswald', sans-serif;}
.cardColor {
  background-color: #110e35;
}
h2{
  color: aliceblue;
  font-size: 27px;
  text-align: center;
  padding: 0;
}
a{
  text-align: center;

}
.mtt{
   margin-top: 12px;
}

.q-img__content > div{
  position:relative;
  background: none;
}
.aLine {
  text-decoration: underline;
  text-decoration-color: aliceblue;
}
</style>
