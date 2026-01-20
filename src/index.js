import { useVuetifyComponentsStore, emitirAlert, emitirDialog, emitirPrompt, emitirSnack, setLoaderOverlay, setLoaderDialog, getLoaderOverlayStatus } from './store/vuetifyComponentsStore'
import VGlobalComponents from './components/VGlobalComponents.vue'
import VLoaderOverlay from './components/VLoaderOverlay.vue'
import VLoaderDialog from './components/VLoaderDialog.vue'
import VBtnTooltip from './components/VBtnTooltip.vue'
import VCardToolbar from './components/VCardToolbar.vue'
import VDateField from './components/VDateField.vue'

const install = (Vue, options = {}) => {
  const pinia = options.pinia || (Vue.prototype.$pinia) // Tenta pegar do Vue se não for passado
  if (!pinia) {
    console.error('[@eliaslazcano/vuetify] Pinia é necessário para esta biblioteca.')
    return
  }

  // inicializa store do pacote e disponibiliza global via prototype (Vue 2 way)
  Vue.prototype.$vuetifyComponentsStore = useVuetifyComponentsStore(pinia)

  // registra os componentes globais (opcional, mantido para compatibilidade se o usuário usar Vue.use())
  Vue.component('VGlobalComponents', VGlobalComponents)
  Vue.component('VLoaderOverlay', VLoaderOverlay)
  Vue.component('VLoaderDialog', VLoaderDialog)
  Vue.component('VBtnTooltip', VBtnTooltip)
  Vue.component('VCardToolbar', VCardToolbar)
  Vue.component('VDateField', VDateField)
}

export {
  install,
  useVuetifyComponentsStore,
  VGlobalComponents,
  VLoaderOverlay,
  VLoaderDialog,
  VBtnTooltip,
  VCardToolbar,
  VDateField,
  emitirAlert,
  emitirDialog,
  emitirPrompt,
  emitirSnack,
  setLoaderOverlay,
  setLoaderDialog,
  getLoaderOverlayStatus
}

export default { install }
