import { useVuetifyComponentsStore, emitirAlert, emitirDialog, emitirPrompt, emitirSnack, setLoaderOverlay, setLoaderDialog, getLoaderOverlayStatus } from './store/vuetifyComponentsStore'
import DialogQRCode from './components/DialogQRCode.vue'
import VBtnTooltip from './components/VBtnTooltip.vue'
import VCardToolbar from './components/VCardToolbar.vue'
import VContainerAsync from './components/VContainerAsync.vue'
import VDateField from './components/VDateField.vue'
import VFabToTop from './components/VFabToTop.vue'
import VGlobalComponents from './components/VGlobalComponents.vue'
import VLoaderDialog from './components/VLoaderDialog.vue'
import VLoaderOverlay from './components/VLoaderOverlay.vue'

const install = (Vue, options = {}) => {
  const pinia = options.pinia || (Vue.prototype.$pinia) // Tenta pegar do Vue se não for passado
  if (!pinia) return console.error('[@eliaslazcano/vuetify-plugin] Pinia é necessário para esta biblioteca.')

  // inicializa store do pacote e disponibiliza global via prototype (Vue 2 way)
  Vue.prototype.$vuetifyComponentsStore = useVuetifyComponentsStore(pinia)

  // registra os componentes globais (opcional, mantido para compatibilidade se o usuário usar Vue.use())
  Vue.component('DialogQRCode', DialogQRCode)
  Vue.component('VBtnTooltip', VBtnTooltip)
  Vue.component('VCardToolbar', VCardToolbar)
  Vue.component('VContainerAsync', VContainerAsync)
  Vue.component('VDateField', VDateField)
  Vue.component('VFabToTop', VFabToTop)
  Vue.component('VGlobalComponents', VGlobalComponents)
  Vue.component('VLoaderDialog', VLoaderDialog)
  Vue.component('VLoaderOverlay', VLoaderOverlay)
}

export {
  install,
  useVuetifyComponentsStore,
  DialogQRCode,
  VBtnTooltip,
  VCardToolbar,
  VContainerAsync,
  VDateField,
  VFabToTop,
  VGlobalComponents,
  VLoaderDialog,
  VLoaderOverlay,
  emitirAlert,
  emitirDialog,
  emitirPrompt,
  emitirSnack,
  setLoaderOverlay,
  setLoaderDialog,
  getLoaderOverlayStatus
}

export default { install }
