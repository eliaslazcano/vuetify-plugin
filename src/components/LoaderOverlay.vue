<script setup>
defineProps({
  value: {type: Boolean, default: false},
  zIndex: {type: [Number,String], default: 210},
  opacity: {type: Number, default: 0.7},
  texto: {type: String, default: ''},
})
</script>

<template>
  <v-overlay :value="value" :z-index="zIndex" :opacity="opacity" v-bind="$attrs">
    <div class="text-center">
      <v-progress-circular indeterminate size="48"></v-progress-circular>
      <div class="pt-3">
        <slot v-if="$slots.default" />
        <template v-else-if="texto">{{ texto }}</template>
      </div>
    </div>
  </v-overlay>
</template>
