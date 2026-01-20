<script setup>
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()
const vuetify = proxy.$vuetify

defineProps({
  color: {type: String, default: 'primary'},
  title: {type: String, default: ''},
  titleSize: {type: String, default: '1.25rem'},
  icon: {type: String, default: ''},
  iconSize: {type: String, default: '1.5rem'},
  btnClose: {type: Boolean, default: false},
})

defineEmits(['close'])
</script>

<template>
  <v-toolbar
    v-bind="$attrs"
    class="flex-grow-0"
    :color="vuetify.theme.dark && color === 'primary' ? undefined : color"
    dark flat dense
  >
    <v-icon class="mr-2" v-if="icon" :size="iconSize">{{icon}}</v-icon>
    <v-toolbar-title :style="{fontSize: titleSize}" style="line-height: 1.1">{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <slot/>
    <v-btn icon @click="$emit('close')" v-if="btnClose">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-toolbar>
</template>
