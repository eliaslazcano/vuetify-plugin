<script setup>
defineProps({
  loading: {type: Boolean, default: false},
  color: {type: String, default: 'blue'},
  containerTransition: {type: String, default: 'fade-transition'},
  spinnerTransition: {type: String, default: 'fade-transition'},
  texto: {type: String, default: ''},
  fluid: {type: Boolean, default: false},
  appear: {type: Boolean, default: true},
  fixed: {type: Boolean, default: false},
  zIndex: {type: [String, Number], default: '1'}
})
</script>

<template>
  <div class="d-flex flex-column" style="min-height: 100%; position: relative">
    <transition
      mode="out-in"
      :name="spinnerTransition"
      :appear="appear"
      :leave-class="spinnerTransition + '-leave'"
      :leave-to-class="spinnerTransition + '-leave-to'"
      :leave-active-class="spinnerTransition + '-leave-active'"
      :enter-class="spinnerTransition + '-enter'"
      :enter-to-class="spinnerTransition + '-enter-to'"
      :enter-active-class="spinnerTransition + '-enter-active'"
      @after-leave="$emit('after-leave', loading)"
    >
      <div
        v-if="loading"
        :key="1"
        class="d-flex justify-center align-center flex-column"
        style="inset: 0"
        :style="{'position': fixed ? 'fixed' : 'absolute', 'zIndex': zIndex}"
      >
        <v-progress-circular indeterminate :color="color"/>
        <div class="mt-2 grey--text text--darken-1" v-if="texto">{{ texto }}</div>
      </div>
    </transition>
    <transition
      mode="out-in"
      :name="containerTransition"
      :appear="appear"
      :leave-class="containerTransition + '-leave'"
      :leave-to-class="containerTransition + '-leave-to'"
      :leave-active-class="containerTransition + '-leave-active'"
      :enter-class="containerTransition + '-enter'"
      :enter-to-class="containerTransition + '-enter-to'"
      :enter-active-class="containerTransition + '-enter-active'"
      @after-enter="$emit('after-enter', loading)"
    >
      <v-container :key="2" :fluid="fluid" v-show="!loading" v-bind="$attrs" v-on="$listeners">
        <slot/>
      </v-container>
    </transition>
  </div>
</template>
