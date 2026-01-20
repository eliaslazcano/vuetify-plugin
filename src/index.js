import { useVuetifyComponentsStore, emitirAlert, emitirDialog, emitirPrompt, emitirSnack, setLoaderOverlay, setLoaderDialog, getLoaderOverlayStatus } from './store/vuetifyComponentsStore'
import EGlobalUi from './components/EGlobalUI.vue'
import EGlobalLoaderOverlay from './components/EGlobalLoaderOverlay.vue'
import EGlobalLoaderDialog from './components/EGlobalLoaderDialog.vue'
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
  Vue.component('EGlobalUi', EGlobalUi)
  Vue.component('EGlobalLoaderOverlay', EGlobalLoaderOverlay)
  Vue.component('EGlobalLoaderDialog', EGlobalLoaderDialog)
  Vue.component('VBtnTooltip', VBtnTooltip)
  Vue.component('VCardToolbar', VCardToolbar)
  Vue.component('VDateField', VDateField)
}

export {
  install,
  useVuetifyComponentsStore,
  EGlobalUi,
  EGlobalLoaderOverlay,
  EGlobalLoaderDialog,
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
