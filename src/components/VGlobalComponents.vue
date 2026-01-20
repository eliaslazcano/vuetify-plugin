<script setup>
import { watch, getCurrentInstance, onMounted } from 'vue'
import { useVuetifyComponentsStore } from '../store/vuetifyComponentsStore'
import VLoaderOverlay from './VLoaderOverlay.vue'
import VLoaderDialog from './VLoaderDialog.vue'
import VCardToolbar from './VCardToolbar.vue'

const vuetifyComponentsStore = useVuetifyComponentsStore()

// acesso ao vuetify (Vue 2 way)
const { proxy } = getCurrentInstance()
const vuetify = proxy.$vuetify

// resetar prompts ao trocar rota (se existir router)
onMounted(() => {
  const route = proxy.$route
  if (route) {
    watch(
      () => proxy.$route.fullPath,
      () => vuetifyComponentsStore.resetarPrompts()
    )
  }
})

// Algoritmo dos prompts
const promptOnOk = (formComponent, promptId, onOk = () => {}, promptValue = '') => {
  if (!formComponent.validate()) return
  onOk(promptValue)
  vuetifyComponentsStore.removerPrompt(promptId)
}
</script>

<template>
  <div>
    <!-- Alert -->
    <div
      style="position: fixed; right: 0; top: 0; z-index: 205;"
      class="d-flex flex-column"
      :class="{'align-center': vuetify.breakpoint.smAndDown, 'align-end': !vuetify.breakpoint.smAndDown}"
    >
      <transition-group name="slide-x-reverse-transition" appear>
        <v-alert
          v-for="i in vuetifyComponentsStore.alerts"
          :key="i.id"
          :type="i.type"
          :class="{'mr-3': !vuetify.breakpoint.smAndDown}"
          class="mt-2 mb-0 alert"
          elevation="2"
          width="20rem"
          max-width="100%"
        >{{ i.text }}</v-alert>
      </transition-group>
    </div>

    <!-- Dialog -->
    <v-dialog app persistent width="32rem" :value="vuetifyComponentsStore.dialogShow">
      <v-card>
        <v-alert type="warning" border="top" class="mb-0 text-justify" text :icon="false">
          <div class="d-flex align-center flex-column">
            <v-icon size="30" color="white" class="warning lighten-1 rounded-circle pa-2 mb-2">mdi-alert</v-icon>
            <p
              class="body-1 flex-grow-1 mb-0"
              style="white-space: pre-wrap; text-align: justify"
              v-html="vuetifyComponentsStore.dialogContent"
            ></p>
          </div>
        </v-alert>
        <v-divider></v-divider>
        <v-card-actions class="justify-center">
          <v-btn small depressed color="warning" @click="vuetifyComponentsStore.dialogShow = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Loader Overlay -->
    <VLoaderOverlay :value="vuetifyComponentsStore.loaderOverlayShow" :texto="vuetifyComponentsStore.loaderText"/>

    <!-- Loader Dialog -->
    <VLoaderDialog :value="vuetifyComponentsStore.loaderDialogShow" :texto="vuetifyComponentsStore.loaderText"/>

    <!-- Snackbar -->
    <v-snackbar
      v-for="i in vuetifyComponentsStore.snacks"
      :key="i.id"
      :color="i.color"
      :timeout="i.timeout"
      :value="true"
      @input="vuetifyComponentsStore.removeSnack(i.id)"
      min-width="8rem"
      max-width="100%"
      app
    >
      <v-icon dense class="mr-1" color="white" v-if="i.icon">{{i.icon}}</v-icon>
      <v-icon dense class="mr-1" color="white" v-else-if="i.color === 'success'">mdi-check-circle</v-icon>
      {{ i.text }}
    </v-snackbar>

    <!-- Prompt -->
    <v-dialog
      v-for="(i, index) in vuetifyComponentsStore.prompts"
      v-model="i.show"
      :key="i.id"
      :width="i.options.width || '24em'"
      :persistent="i.options.persistent"
      :hide-overlay="i.options.hideOverlay"
      @click:outside="i.options.persistent ? null : vuetifyComponentsStore.removerPrompt(i.id, false, true)"
    >
      <v-card>
        <v-form @submit.prevent="promptOnOk($refs.prompters[index], i.id, i.options.onOk, i.promptValue)" ref="prompters">
          <VCardToolbar
            v-if="i.options.title"
            :title="i.options.title"
            :color="i.options.titleColor || 'primary'"
            hide-close-button
          />
          <v-card-text v-if="i.options.message || i.options.prompt" class="text-justify pb-1">
            <div v-if="i.options.message" :class="i.options.messageClass || 'my-2'" v-html="i.options.message"></div>
            <template v-if="i.options.prompt">
              <v-textarea
                v-if="i.options.prompt?.type === 'textarea'"
                v-model="i.promptValue"
                :label="i.options.prompt.label"
                :rules="i.options.prompt.rules"
                :outlined="i.options.prompt.outlined"
                :filled="i.options.prompt.filled"
                :placeholder="i.options.prompt.placeholder"
                :persistentPlaceholder="i.options.prompt.persistentPlaceholder"
                :style="{'marginTop': i.options.message ? '1.25rem' : '0'}"
                :dense="i.options.prompt.dense"
                :autofocus="i.options.prompt.autofocus"
                :rows="i.options.prompt.rows || 5"
              />
              <v-text-field
                v-else
                v-model="i.promptValue"
                v-maska="i.options.prompt.mask || null"
                :label="i.options.prompt.label"
                :type="i.options.prompt.type || 'text'"
                :rules="i.options.prompt.rules"
                :outlined="i.options.prompt.outlined"
                :filled="i.options.prompt.filled"
                :placeholder="i.options.prompt.placeholder"
                :persistentPlaceholder="i.options.prompt.persistentPlaceholder"
                :style="{'marginTop': i.options.message ? '1.25rem' : '0'}"
                :dense="i.options.prompt.dense"
                :autofocus="i.options.prompt.autofocus"
              />
            </template>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn
              v-if="i.options.cancel"
              :color="i.options.cancelColor || 'primary'"
              :class="i.options.cancelClass"
              :small="i.options.smallButtons"
              @click="vuetifyComponentsStore.removerPrompt(i.id, true, true)"
              :depressed="i.options.cancelDepressed"
              :outlined="i.options.cancelOutlined ?? true"
            >{{ i.options.cancelText || 'CANCELAR' }}</v-btn>
            <v-btn
              :color="i.options.confirmColor || 'primary'"
              :class="i.options.confirmClass"
              :small="i.options.smallButtons"
              type="submit"
              :depressed="i.options.confirmDepressed ?? true"
              :outlined="i.options.confirmOutlined"
            >{{ i.options.confirmText || 'OK' }}</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>
