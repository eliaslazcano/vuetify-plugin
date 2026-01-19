import { useComponentsStore } from './store/componentsStore'
import EGlobalUi from './components/EGlobalUI.vue'
import LoaderOverlay from './components/LoaderOverlay.vue'
import LoaderDialog from './components/LoaderDialog.vue'
import VCardToolbar from './components/VCardToolbar.vue'

export default {
  install(Vue, options = {}) {

    const pinia = options.pinia || (Vue.prototype.$pinia) // Tenta pegar do Vue se não for passado
    if (!pinia) {
      console.error('[@eliaslazcano/vuetify] Pinia é necessário para esta biblioteca.')
      return
    }

    // inicializa store do pacote e disponibiliza global via prototype (Vue 2 way)
    Vue.prototype.$componentsStore = useComponentsStore(pinia)

    // registra os componentes globais
    Vue.component('EGlobalUi', EGlobalUi)
    Vue.component('LoaderOverlay', LoaderOverlay)
    Vue.component('LoaderDialog', LoaderDialog)
    Vue.component('VCardToolbar', VCardToolbar)
  }
}
