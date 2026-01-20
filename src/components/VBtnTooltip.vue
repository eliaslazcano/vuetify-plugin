<script setup>
import { getCurrentInstance } from 'vue'

defineProps({
  tooltip: {type: String},
  color: {type: String, default: 'primary'},
  icon: {type: Boolean},
  to: {type: [String, Object]},
  small: {type: Boolean},
  xSmall: {type: Boolean},
  disabled: {type: Boolean, default: false},
})

const { proxy } = getCurrentInstance()
const vuetify = proxy.$vuetify

const emit = defineEmits(['click'])
</script>

<template>
  <v-tooltip v-bind="$attrs" :disabled="vuetify.breakpoint.xs">
    <template #activator="{on, attrs}">
      <v-btn
        v-bind="attrs"
        v-on="on"
        :color="color"
        :icon="icon"
        :to="to"
        :small="small"
        :x-small="xSmall"
        :disabled="disabled"
        @click="emit('click')"
      >
        <slot></slot>
      </v-btn>
    </template>
    <span>{{tooltip}}</span>
  </v-tooltip>
</template>
