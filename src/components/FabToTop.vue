<script setup>
import { getCurrentInstance, ref } from 'vue'

const props = defineProps({
  scrollOffset: {type: Number, default: 300},
})

const { proxy } = getCurrentInstance()
const vuetify = proxy.$vuetify

const exibirBotao = ref(false)
const onScroll = () => exibirBotao.value = (window.pageYOffset || document.documentElement.offsetTop || 0) > props.scrollOffset

console.log('snackbar: ', vuetify?.application?.snackbar)
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
