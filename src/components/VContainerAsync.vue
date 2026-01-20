<script setup>
import {Fragment} from 'vue-frag'

defineProps({
  loading: {type: Boolean, default: false},
  color: {type: String, default: 'blue'},
  transition: {type: String, default: 'fade-transition'},
  spinnerTransition: {type: String, default: 'fade-transition'},
  texto: {type: String, default: ''},
  fluid: {type: Boolean, default: false},
  appear: {type: Boolean, default: true},
  fixed: {type: Boolean, default: false},
})
</script>

<template>
  <Fragment>
    <transition
      mode="out-in"
      :name="loading ? transition : spinnerTransition"
      :appear="appear"
      :leave-class="loading ? transition + '-leave' : spinnerTransition + '-leave'"
      :leave-to-class="loading ? transition + '-leave-to' : spinnerTransition + '-leave-to'"
      :leave-active-class="loading ? transition + '-leave-active' : spinnerTransition + '-leave-active'"
      :enter-class="loading ? spinnerTransition + '-enter' : transition + '-enter'"
      :enter-to-class="loading ? spinnerTransition + '-enter-to' : transition + '-enter-to'"
      :enter-active-class="loading ? spinnerTransition + '-enter-active' : transition + '-enter-active'"
      @after-leave="$emit('after-leave', loading)"
      @after-enter="$emit('after-enter', loading)"
    >
      <div
        v-if="loading && fixed"
        :key="1"
        class="text-center"
        style="position: fixed; left: 0; right: 0; top: calc(50% - 16px)"
      >
        <v-progress-circular indeterminate :color="color"/>
        <div class="mt-2 grey--text text--darken-1" v-if="texto">{{ texto }}</div>
      </div>
      <div v-else-if="loading" :key="2" class="d-flex justify-center align-center grow flex-column" style="height: 100%">
        <v-progress-circular indeterminate :color="color"/>
        <div class="mt-2 grey--text text--darken-1" v-if="texto">{{ texto }}</div>
      </div>
      <v-container v-else :key="3" :fluid="fluid" v-bind="$attrs" v-on="$listeners">
        <slot/>
      </v-container>
    </transition>
  </Fragment>
</template>
