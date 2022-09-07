<template>
  <div class="q-pa-md">
    <div>
      <q-card >
        <q-img style="height:145px" src="../assets/banerEat/restBan.jpg" @click="this.$router.push('/restraunt'); ">
        <q-card-section><h2 class="aLine">РЕСТОРАНЫ</h2></q-card-section>
        </q-img>
      </q-card>
    </div>
    <div class="mtt">
      <q-card>
        <q-img style="height:145px" src="../assets/banerEat/cafeBan.jpeg" @click="this.$router.push('/cafe'); ">
    <q-card-section><h2 class="aLine">КАФЕ</h2></q-card-section>
        </q-img>
      </q-card>
    </div>
    <div class="mtt">
      <q-card>
        <q-img style="height:145px" src="../assets/banerEat/stolBan.jpg" @click="this.$router.push('/canteen'); ">
          <q-card-section><h2 class="aLine">СТОЛОВЫЕ</h2></q-card-section>
        </q-img>
      </q-card>
    </div>
    <div class="mtt">
      <q-card>
        <q-img style="height:145px" src="../assets/banerEat/fastBan.jpg" @click="this.$router.push('/fastfood'); ">
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
  color: rgb(255, 255, 255);
  font-size: 30px;
  text-align: center;
  padding: 0;
}
a{
  text-align: center;

}
.mtt{
   margin-top: 12px;
   text-shadow: 3px 5px 16px rgb(1, 2, 36);
}

.q-img__content > div{
  position:relative;
  background: none;
}
.aLine {
  text-shadow: 3px 5px 6px rgb(1, 2, 36);
}
</style>
