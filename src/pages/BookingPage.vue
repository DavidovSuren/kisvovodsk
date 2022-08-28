<template>

 <div class="q-pa-md" >
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class=" bg-none"
    ><div class="q-pa-md">
      <q-input
      color="accent"
        filled
        v-model="name"
        label="ФИО*"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Введите ФИО']"
      />

      <q-input
        color="accent"
      class="mmtt"
        filled
        type="number"
        v-model="age"
        label="Полных лет*"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Введите возраст',
          val => val > 0 && val < 100 || 'Введите настоящий возраст'
        ]"
      />
       <q-input
         color="accent"
       class="mmtt"
        filled
        type="tel"
        v-model="phone"
        label="Номер телефона*"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Введите номер телефона',
        ]"
      />
  <div class="q-pa-md" style="margin-left:-20px"><q-toggle color="accent" v-model="accept" label="Я принимаю пользовательское соглашение и политику конфиденциальности" /></div>

      <div>
        <q-btn label="Продолжить" type="submit" color="positive"/>
        <q-btn label="Заново" type="reset" color="white" flat class="q-ml-sm" />
      </div></div>
    </q-form>

  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const phone = ref(null)
    const accept = ref(false)

    return {
      name,
      age,
      phone,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Сначала вам необходимо согласиться на польз. соглаш. и полит. конфид.'
          })
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'done',
            message: 'Принято, ждём обновления'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        phone.value = null
        accept.value = false
      }
    }
  }
}
</script>

<style>
.mmtt {
  margin-top: 12px;
}
.q-field__label{
   color: #ffffff !important;
}
.q-field__native {
  color: whitesmoke;
}
.text-negative {
    color: #e9e9fe !important;
}
.q-placeholder{
  color:rgb(255, 255, 255)
}
.q-field--error .q-field__bottom {
    color: #cfced8;
}
.q-toggle__label, q-anchor--skip {
  color: white;
}
.q-field{
  font-size: 19px;
}
.self-stretch{
background: #242d53;
}
.q-toggle__track{
  background: #242d53;
}
</style>
