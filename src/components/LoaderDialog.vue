<script setup>
defineProps({
  value: {type: Boolean, default: false},
  hideOverlay: {type: Boolean, default: false},
  persistent: {type: Boolean, default: true},
  text: {type: String, default: 'Por favor aguarde'},
  color: {type: String, default: 'primary'},
  width: {type: String, default: '300'},
  progressColor: {type: String, default: 'white'},
})
</script>

<template>
  <v-dialog :value="value" :hide-overlay="hideOverlay" :persistent="persistent" :width="width" v-bind="$attrs">
    <v-card :color="color" dark>
      <v-card-text class="text-center pt-1">
        <slot>{{text ? text : 'Por favor aguarde'}}</slot>
        <v-progress-linear indeterminate :color="progressColor" class="mb-0"></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
