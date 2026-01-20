<script setup>
import { getCurrentInstance, ref, onMounted } from 'vue'

const props = defineProps({
  scrollOffset: {type: Number, default: 300},
})

const { proxy } = getCurrentInstance()
const vuetify = proxy.$vuetify

const exibirBotao = ref(false)
const onScroll = () => exibirBotao.value = (window.pageYOffset || document.documentElement.offsetTop || 0) > props.scrollOffset

console.log('vuetify: ', vuetify)
console.log('vuetify?.application: ', vuetify?.application)
console.log('vuetify?.application?.snackbar: ', vuetify?.application?.snackbar)

onMounted(() => {
  console.log('2vuetify: ', vuetify)
  console.log('2vuetify?.application: ', vuetify?.application)
  console.log('2vuetify?.application?.snackbar: ', vuetify?.application?.snackbar)
})
</script>

<template>
  <v-fab-transition>
    <v-btn
      v-show="exibirBotao"
      v-scroll="onScroll"
      v-bind="$attrs"
      v-on="$listeners"
      :style="{marginBottom: `${vuetify.application.snackbar}px`}"
      class="transition-swing"
      color="primary"
      style="z-index: 6"
      @click="vuetify.goTo(0)"
      fab fixed right bottom
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>
