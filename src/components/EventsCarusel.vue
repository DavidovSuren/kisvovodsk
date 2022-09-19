<template>
  <div class="loadingEvents">
  <q-carousel
  autoplay
  swipeable
  v-model="slide"
  arrows
  infinite
  animated
  height="220px"
  @mouseenter="autoplay = false"
  @mouseleave="autoplay = true"

  >
    <q-carousel-slide
    v-for="image in sliderImg"
    :key="image.id"
    :name="image.id"
    :img-src="image.url"
    @click.self="goto(image.link)"
    >
      <div class="custom-caption topLeft">
        <div class="text-h5">{{image.eventDate}}</div>
        <div class="text-subtitle1">{{image.eventMounth}}</div>
      </div>
      <div class="custom-caption topRight">
        <div class="text-h5">{{image.eventStartHours}}:00</div>
      </div>
      <div class="custom-caption bottLeft">
        <div class="text-h5">{{image.eventName}}</div>
      </div>
      <div class="bottRight" @click="goto('/best')">
      </div>
    </q-carousel-slide>
  </q-carousel>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()
    function goto (url) {
      window.location.href = url
    }
    function goToIf (link) {
      if (link.slice(0, 4) === 'http') {
        window.location.href = link
      } else {
        router.push(link)
      }
    }
    return {
      goto,
      goToIf,
      slide: ref('first'),
      sliderImg: [
        {
          id: 1,
          name: 'first',
          url: new URL('../assets/banerGl/bannerchoco.jpeg', import.meta.url).href,
          link: 'post/1729',
          eventDate: 1,
          eventMounth: 'сентября',
          eventStartHours: 18,
          eventDurationHours: 3,
          eventName: 'День Молодого Вина'
        },
        {
          id: 2,
          name: 'second',
          url: new URL('../assets/banerGl/bannerr.jpeg', import.meta.url).href,
          link: 'post/303',
          eventDate: 2,
          eventMounth: 'сентября',
          eventStartHours: 10,
          eventDurationHours: 3,
          eventName: 'Утро бодрого нарзана'
        }
      ]
    }
  }
}
</script>
<style scoped>
.q-carousel {
  background: none;
}
.q-carousel__slide {
  padding-left: 3px !important;
}
.loadingEvents{
  animation: imgFade 15s;
    }
@-webkit-keyframes imgFade
{
  from {background: url('../assets/load.svg');  background-repeat: no-repeat;  background-position: center;}
  to {background: #FFF; background-repeat: no-repeat;  background-position: center;}
}

@keyframes imgFade
{
  from {background: url('../assets/load.svg');  background-repeat: no-repeat;  background-position: center;}
  to {background: #FFF; background-repeat: no-repeat;  background-position: center;}
}

.custom-caption {
  text-align: center;
  position: absolute;
  color: white;
}
.topRight {
  right: 3px;
  top: 3px;
  padding: 3px;
  margin: 3px;
}
.bottRight {
    right: 0;
    bottom: 0;
    width: 160px;
    height: 84px;
    background-image: url('../assets/corner.png');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
}

.bottLeft {
  left: 3px;
  bottom: 3px;
  padding: 3px;
  margin: 3px;
}
.topLeft {
  left: 3px;
  top: 3px;
  padding: 3px;
  margin: 3px;
}
</style>
