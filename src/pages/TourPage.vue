<template>
<div class="q-pa-md mt">
 <div>
      <q-card >
        <q-img style="height:135px" src="../assets/mainCardTour/children.webp" @click="this.$router.push('/child'); ">
        <q-card-section><h2 class="aLine">ДЕТЯМ</h2></q-card-section>
        </q-img>
      </q-card>
    </div>
    <div class="mtt">
      <q-card>
        <q-img style="height:135px" src="../assets/mainCardTour/marshrut.webp" @click="this.$router.push('/cexcursionfe'); ">
    <q-card-section><h2 class="aLine">ЭКСКУРСИИ</h2></q-card-section>
        </q-img>
      </q-card>
    </div>
    <div class="mtt">
      <q-card>
        <q-img style="height:135px" src="src/assets/mainCardTour/tour.webp" @click="this.$router.push('/acropolis'); ">
          <q-card-section><h2 class="aLine">МАРШРУТЫ </h2></q-card-section>
        </q-img>
      </q-card>
    </div>
    <div class="mtt">
      <q-card>
        <q-img style="height:135px" src="../assets/mainCardTour/cexcursionfe.webp" @click="this.$router.push('/extreme'); ">
               <q-card-section><h2 class="aLine"> ЭКСТРИМ</h2></q-card-section>
        </q-img>
      </q-card>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
body * {font-family: 'Oswald', sans-serif;}

.cardColor{
  background-color: #110e35;}
.q-carousel {
  background: none;
}

h2,h1{
  color: aliceblue;
  font-size: 27px;
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
