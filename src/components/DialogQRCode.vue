<script setup>
/**
 * Este dialog serve para mostrar QR Code na tela, pode ser reutilizado para qualquer tipo de QR.
 * Só é necessário invocar a função 'exibir()'.
 * Requer o pacote 'qrcode' (npm i qrcode@1)
 */

import {ref} from 'vue'
import {emitirAlert} from '../store/vuetifyComponentsStore'
import VCardToolbar from './VCardToolbar.vue'
import QRCode from 'qrcode'

defineProps({
  titulo: {type: String, default: 'QR Code'},
  btnCopiar: {type: Boolean, default: false},
  btnCopiarLabel: {type: String, default: 'Copiar'},
  btnAbrir: {type: Boolean, default: false},
  btnAbrirLabel: {type: String, default: 'Abrir'},
  width: {type: String, default: '24rem'},
})

const mostrandoDialog = ref(false) //Exibe o dialog
const texto = ref('') //Texto do QRCode
const imagemSrc = ref('') //DataURI Base64
const imagemConstruir = async conteudo => {
  imagemSrc.value = conteudo ? (await QRCode.toDataURL(conteudo, {scale: 12, margin: 2})) : ''
}

//Para quem quer exibir o QRCode na tela de forma programática ao invés de usar o v-model deste componente
const exibir = async textoQr => {
  if (textoQr) {
    await imagemConstruir(textoQr)
    texto.value = textoQr
    mostrandoDialog.value = true
  }
}

const copiarTextoParaAreaTransferencia = async texto => {
  if (!navigator.clipboard) {
    let textArea = document.createElement('textarea');
    textArea.value = texto;

    // Evita rolar para a parte inferior
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    document.execCommand('copy');
    document.body.removeChild(textArea);
    return;
  }
  await navigator.clipboard.writeText(texto);
}

const copiar = async () => {
  try {
    await copiarTextoParaAreaTransferencia(texto.value)
    emitirAlert({type: 'success', text: 'Copiado!'})
  } catch {
    emitirAlert({type: 'error', text: 'Não foi possível copiar'})
  }
}

defineExpose({exibir})
</script>

<template>
  <v-dialog v-bind="$attrs" v-model="mostrandoDialog" :width="width">
    <v-card>
      <v-card-toolbar v-if="titulo" :title="titulo" @close="mostrandoDialog = false"/>
      <v-card-text class="pa-0">
        <img :src="imagemSrc" alt="" style="width: 100%; object-fit: cover">
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="primary" small outlined @click="mostrandoDialog = false">
          <v-icon x-small class="mr-1">mdi-close</v-icon> Fechar
        </v-btn>
        <v-btn color="primary" small depressed @click="copiar" v-if="btnCopiar">
          <v-icon x-small class="mr-1">mdi-content-copy</v-icon> {{btnCopiarLabel}}
        </v-btn>
        <v-btn color="primary" small depressed :href="texto" target="_blank" v-if="btnAbrir">
          <v-icon x-small class="mr-1">mdi-open-in-new</v-icon> {{btnAbrirLabel}}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
