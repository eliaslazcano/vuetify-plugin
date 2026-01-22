<script setup>
import {ref, computed, watch} from 'vue'
import {vMaska} from 'maska/vue'
import moment from 'moment'
import 'moment/dist/locale/pt-br'

moment.locale('pt-br')

const props = defineProps({
  value: {type: String, default: ''},
  required: {type: Boolean, default: false},
  placeholder: {type: String, default: '__/__/____'},
  max: {type: String, default: null},
  locale: {type: String, default: 'pt-BR'},
  persistValue: {type: Boolean, default: false}, //true = só altera v-model quando o campo ta vazio ou completo, false = sempre que digitar 1 caractere aplica o valor de emptyValue, quando completa o campo aplica o valor de v-model
  emptyValue: {type: String, default: ''},
  impedirFuturo: {type: Boolean, default: false},
  btnLimpar: {type: Boolean, default: false},
})

const emit = defineEmits(['input'])

const dataHojeMoment = moment()
const dataHojeIso = dataHojeMoment.format('YYYY-MM-DD')

const iptModel = ref('')
const iptRules = computed(() => [
  v => !props.required || !!v || 'Insira a data',
  v => !v || v.length === 10 || 'Complete a data',
  v => !v || moment(v, 'DD/MM/YYYY', true).isValid() || 'Insira uma data válida',
  v => !v || !props.impedirFuturo || moment(v, 'DD/MM/YYYY', true).isSameOrBefore(dataHojeMoment, 'day') || 'Não utilize datas futuras'
])

watch(iptModel, v => {
  if (v.length === 10) {
    const date = moment(v, 'DD/MM/YYYY', true)
    if (date.isValid()) return emit('input', date.format('YYYY-MM-DD'))
  }
  if (!props.persistValue) emit('input', props.emptyValue)
  else if (!v) emit('input', props.emptyValue)
})

if (props.value) {
  const inicialMoment = moment(props.value, 'YYYY-MM-DD', true)
  iptModel.value = inicialMoment.isValid() ? inicialMoment.format('DD/MM/YYYY') : ''
}

const pickerValorInicial = computed(() => moment(props.value, 'YYYY-MM-DD', true).isValid() ? props.value : dataHojeIso)
const pickerShow = ref(false)
const pickerOnSelect = v => {
  iptModel.value = moment(v, 'YYYY-MM-DD', true).format('DD/MM/YYYY')
  pickerShow.value = false
}

watch(() => props.value, v => {
  if (v) {
    const date = moment(v, 'YYYY-MM-DD', true)
    if (date.isValid()) iptModel.value = date.format('DD/MM/YYYY')
  }
})
</script>

<template>
  <v-text-field
    v-maska="'##/##/####'"
    v-model="iptModel"
    v-bind="$attrs"
    v-on="$listeners"
    type="tel"
    :rules="iptRules"
    :placeholder="placeholder"
    persistent-placeholder
  >
    <template #append>
      <v-btn icon small @click="iptModel = ''" v-if="btnLimpar && props.value">
        <v-icon>mdi-eraser</v-icon>
      </v-btn>
      <v-menu v-model="pickerShow" min-width="auto" offset-y left>
        <template #activator="{attrs,on}">
          <v-btn icon small color="primary" v-bind="attrs" v-on="on">
            <v-icon>mdi-calendar-cursor</v-icon>
          </v-btn>
        </template>
        <v-date-picker
          :max="impedirFuturo ? dataHojeIso : max"
          :locale="locale"
          :value="pickerValorInicial"
          @input="pickerOnSelect"
          scrollable no-title
        />
      </v-menu>
    </template>
  </v-text-field>
</template>
