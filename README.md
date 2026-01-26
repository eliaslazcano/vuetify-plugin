# Plugin para Vuetify 2

Um pacote de componentes adicionais para usar em projetos junto ao Vuetify 2.
Permite disparar programáticamente Dialogs, Snackbars, Alerts e até Prompts.

### Instruções para desenvolvimento
- Compilar: `npm run build`.
- Progredir versionamento: `npm version patch`
- Publicar no NPM: `npm publish`. (precisa estar logado, pode faze-lo com `npm login`).

### Instruções de uso:

Como requisito coloque o componente `VGlobalComponents` no `App.vue`

```vue
<script setup>
import { VGlobalComponents } from '@eliaslazcano/vuetify-plugin'
</script>

<template>
  <v-app>
    <VGlobalComponents/>
    ...
  </v-app>
</template>
```

#### Alert

Para emitir um Alerta (que é exibido na tela com um VAlert):

```javascript
import { emitirAlert } from '@eliaslazcano/vuetify-plugin';
emitirAlert({ type: 'success', text: `Seja bem vindo!` });
```

#### Snackbar

Para emitir um Snackbar (que é exibido na tela com um VSnackbar):

```javascript
import { emitirSnack } from '@eliaslazcano/vuetify-plugin';
emitirSnack({ color: 'success', text: `Seja bem vindo!` });
```

#### Dialog com mensagem

Para exibir uma mensagem em um Dialog (utiliza VDialog):

```javascript
import { emitirDialog } from '@eliaslazcano/vuetify-plugin';
emitirDialog(`Lorem ipsum dolor sit amet`);
```

## Prompt (um dialog para o usuário clicar em 'confirmar' ou 'cancelar', opcionalmente um campo pra coletar texto)

```javascript
import { emitirPrompt } from '@eliaslazcano/vuetify-plugin';
emitirPrompt({
  title: 'Enviar por email',
  confirmText: 'Enviar', //Altera o texto do botão 'Confirmar'
  cancel: true, //Exibe o botão de 'Cancelar'
  smallButtons: true, //Os botões ficam menores (ativa a prop 'small' deles)
  width: '32rem', //Largura sugerida do dialog
  message: 'Precisamos que informe seu endereço de email abaixo.', //Texto do dialog, aceita HTML também
  prompt: {
    label: 'Endereço de email:',
    model: '', //Valor inicial sugerido
    placeholder: 'Digite aqui...',
    persistentPlaceholder: true,
    filled: true,
    autofocus: true,
    rules: [v => !!v.trim() || 'Digite o email'],
  },
  onOk: (email) => {
    console.log('Email digitado: ', email);
  },
  onCancel: () => {}, //Ao clicar em 'Cancelar'
  onDismiss: () => {}, //Ao fechar o dialogo (clicando fora ou em 'cancelar')
  onFinally: () => {}, //Executado depois de todos os eventos acima
});
```

