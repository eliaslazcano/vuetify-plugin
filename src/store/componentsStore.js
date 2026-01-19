import {defineStore} from 'pinia'

export const useComponentsStore = defineStore('componentsStore', {
  state: () => ({
    loaderOverlayShow: false,
    loaderDialogShow: false,
    loaderText: '',
    dialogShow: false,
    dialogContent: '',
    snacks: [],
    alerts: [],
    prompts: [],
  }),
  actions: {
    addSnack(ctx = {text: '', color: 'primary', timeout: 3000}) {
      ctx.id = Date.now()
      if (!ctx.timeout) ctx.timeout = 3000
      this.snacks.push(ctx)
    },
    removeSnack(id) {
      const index = this.snacks.findIndex(i => i.id === id)
      if (index !== -1) this.snacks.splice(index, 1)
    },
    addAlert(ctx = {text: '', type: 'info', timeout: 3000}) {
      //if (this.alerts.find(i => i.text === ctx.text)) return
      ctx.id = Date.now()
      if (!ctx.timeout) ctx.timeout = 3000
      this.alerts.push(ctx)
      setTimeout(() => {
        const index = this.alerts.findIndex(i => i.id === ctx.id)
        if (index === -1) return
        this.alerts.splice(index, 1)
      }, ctx.timeout)
    },
    showDialog(text) {
      this.dialogContent = text
      this.dialogShow = true
    },
    adicionarPrompt(ctx) {
      const promptItem = {
        options: ctx,
        id: Date.now(),
        show: true,
        promptValue: ctx.prompt?.model ?? ''
      }
      this.prompts.push(promptItem)
    },
    removerPrompt(promptId, onCancel = false, onDismiss = false) {
      const promptIndex = this.prompts.findIndex(i => i.id === promptId)
      this.prompts[promptIndex].show = false
      if (onCancel && typeof this.prompts[promptIndex].options?.onCancel === 'function') this.prompts[promptIndex].options.onCancel()
      if (onDismiss && typeof this.prompts[promptIndex].options?.onDismiss === 'function') this.prompts[promptIndex].options.onDismiss()
      if (typeof this.prompts[promptIndex].options?.onFinally === 'function') this.prompts[promptIndex].options.onFinally()
      setTimeout(() => this.prompts.splice(promptIndex, 1), 800)
    },
    resetarPrompts() {
      this.prompts.forEach((value, index) => {
        this.prompts[index].show = false
      })
      setTimeout(() => this.prompts = [], 300)
    },
  },
})

export const setLoaderOverlay = (bool, text = '') => {
  const componentsStore = useComponentsStore()
  componentsStore.loaderText = text
  componentsStore.loaderOverlayShow = bool
}

export const getLoaderOverlayStatus = () => {
  const componentsStore = useComponentsStore()
  return componentsStore.loaderOverlayShow
}

export const setLoaderDialog = (bool, text = '') => {
  const componentsStore = useComponentsStore()
  componentsStore.loaderText = text
  componentsStore.loaderDialogShow = bool
}

export const emitirSnack = (ctx) => {
  const componentsStore = useComponentsStore()
  componentsStore.addSnack(ctx)
}

export const emitirAlert = (ctx) => {
  const componentsStore = useComponentsStore()
  componentsStore.addAlert(ctx)
}

export const emitirDialog = (text) => {
  const componentsStore = useComponentsStore()
  componentsStore.showDialog(text)
}

export const emitirPrompt = (ctx) => {
  const componentsStore = useComponentsStore()
  componentsStore.adicionarPrompt(ctx)
}
