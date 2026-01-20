<script setup>
import { getCurrentInstance } from 'vue'

defineProps({
  //Propriedades do tooltip
  text: {type: String}, //texto do tooltip, a menos que você use o slot 'tooltip'
  tooltipColor: {type: String},

  //Propriedades do botão
  color: {type: String, default: 'primary'},
  icon: {type: Boolean},
  to: {type: [String, Object]},
  target: {type: String},
  href: {type: String},
  small: {type: Boolean},
  xSmall: {type: Boolean},
  fab: {type: Boolean},
  large: {type: Boolean},
  dark: {type: Boolean},
  fixed: {type: Boolean},
  btnBottom: {type: Boolean},
  btnRight: {type: Boolean},
  btnClasses: {type: String},
  disabled: {type: Boolean, default: false},
})

const { proxy } = getCurrentInstance()
const vuetify = proxy.$vuetify

const emit = defineEmits(['click'])
</script>

<template>
  <v-tooltip v-bind="$attrs" :disabled="vuetify.breakpoint.xs" :color="tooltipColor">
    <template #activator="{on, attrs}">
      <v-btn
        v-bind="attrs"
        v-on="on"
        :color="color"
        :class="btnClasses"
        :icon="icon"
        :to="to"
        :target="target"
        :href="href"
        :small="small"
        :x-small="xSmall"
        :disabled="disabled"
        :fab="fab"
        :large="large"
        :dark="dark"
        :fixed="fixed"
        :bottom="btnBottom"
        :right="btnRight"
        @click="emit('click')"
      >
        <slot/>
      </v-btn>
    </template>

    <slot v-if="$slots.tooltip"/>
    <span v-else>{{text}}</span>
  </v-tooltip>
</template>
