<template>
  <div class="q-pa-md">
    <div class="mtt">
      <q-card>
        <q-img src="../assets/banerBest/restBan.jpeg">
          <q-card-section>
            <a @click="this.$router.push('/restraunt'); "
              ><h2 class="aLine">РЕСТОРАНЫ</h2>
            </a>
          </q-card-section>
        </q-img>
      </q-card>
    </div>
    <div class="mtt">
      <q-card>
        <q-img src="../assets/banerBest/cafeBan.jpeg">
          <q-card-section>
            <a @click="this.$router.push('/cafe'); "
              ><h2 class="aLine">КАФЕ</h2>
            </a>
          </q-card-section>
        </q-img>
      </q-card>
    </div>
    <div class="mtt">
      <q-card>
        <q-img src="../assets/banerBest/stolBan.jpg">
          <q-card-section>
            <a @click="this.$router.push('/canteen'); "
              ><h2 class="aLine">СТОЛОВЫЕ</h2>
            </a>
          </q-card-section>
        </q-img>
      </q-card>
    </div>
    <div class="mtt">
      <q-card>
        <q-img src="../assets/banerBest/fastban.webp">
          <q-card-section>
            <a @click="this.$router.push('/fastfood'); "
              ><h2 class="aLine">ФАСТ-ФУД</h2>
            </a>
          </q-card-section>
        </q-img>
      </q-card>
    </div>
 </div>
</template>
<style scoped>
.cardColor {
  background-color: #110e35;
}
h2,
h1 {
  color: aliceblue;
  font-size: 27px;
  text-align: center;
}
</style>
