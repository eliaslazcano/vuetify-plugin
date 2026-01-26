declare module '@eliaslazcano/vuetify-plugin' {
  import Vue, { PluginFunction } from 'vue';
  import {Store, StateTree, Pinia} from 'pinia';

  export class VDialogQRCode extends Vue {
    titulo?: string;
    btnCopiar?: boolean;
    btnCopiarLabel?: string;
    btnAbrir?: boolean;
    btnAbrirLabel?: string;
    width?: string;
    exibir(textoQr: string): void;
  }

  export class VFabToTop extends Vue {
    scrollOffset?: number;
  }

  export class VBtnTooltip extends Vue {
    text?: string;
    tooltipColor?: string;
    color?: string;
    icon?: boolean;
    to?: string | object;
    target?: string;
    href?: string;
    small?: boolean;
    xSmall?: boolean;
    fab?: boolean;
    large?: boolean;
    dark?: boolean;
    fixed?: boolean;
    btnBottom?: boolean;
    btnRight?: boolean;
    btnClasses?: string;
    disabled?: boolean;
  }

  export class VCardToolbar extends Vue {
    color?: string;
    title?: string;
    titleSize?: string;
    icon?: string;
    iconSize?: string;
    btnClose?: boolean;
  }

  export class VContainerAsync extends Vue {
    loading?: boolean;
    color?: string;
    containerTransition?: string;
    spinnerTransition?: string;
    texto?: string;
    fluid?: boolean;
    appear?: boolean;
    fixed?: boolean;
    zIndex?: string | number;
  }

  export class VDateField extends Vue {
    value?: string;
    required?: boolean;
    placeholder?: string;
    max?: string;
    locale?: string;
    persistValue?: boolean;
    emptyValue?: string;
    impedirFuturo?: boolean;
    btnLimpar?: boolean;
  }

  export class VGlobalComponents extends Vue {}

  export class VLoaderDialog extends Vue {
    value?: boolean;
    hideOverlay?: boolean;
    persistent?: boolean;
    text?: string;
    color?: string;
    width?: string;
    progressColor?: string;
  }

  export class VLoaderOverlay extends Vue {
    value?: boolean;
    zIndex?: number | string;
    opacity?: number;
    texto?: string;
  }

  // Store
  export interface VuetifyComponentsState extends StateTree {
    loaderOverlayShow: boolean;
    loaderDialogShow: boolean;
    loaderText: string;
    dialogShow: boolean;
    dialogContent: string;
    snacks: any[];
    alerts: any[];
    prompts: any[];
  }
  export const useVuetifyComponentsStore: (pinia?: any) => Store<'vuetifyComponentsStore', VuetifyComponentsState>;

  // Utility functions
  export interface SnackOptions {
    text: string;
    color?: string;
    timeout?: number;
    icon?: string;
  }
  export interface AlertOptions {
    text: string;
    type?: 'info' | 'success' | 'warning' | 'error';
    timeout?: number;
  }
  export interface PromptOptions {
    title?: string;
    titleColor?: string;
    message?: string;
    messageClass?: string;
    width?: string;
    persistent?: boolean;
    hideOverlay?: boolean;
    cancel?: boolean;
    cancelText?: string;
    cancelColor?: string;
    cancelClass?: string;
    cancelOutlined?: boolean;
    cancelDepressed?: boolean;
    confirmText?: string;
    confirmColor?: string;
    confirmClass?: string;
    confirmOutlined?: boolean;
    confirmDepressed?: boolean;
    smallButtons?: boolean;
    onOk?: (value: string) => void;
    onCancel?: () => void;
    onDismiss?: () => void;
    onFinally?: () => void;
    prompt?: {
      label?: string;
      type?: 'text' | 'password' | 'number' | 'textarea' | string;
      rules?: any[];
      outlined?: boolean;
      filled?: boolean;
      placeholder?: string;
      persistentPlaceholder?: boolean;
      dense?: boolean;
      autofocus?: boolean;
      rows?: number;
      mask?: string;
      model?: string;
    };
  }

  export function emitirAlert(ctx: AlertOptions | string): void;
  export function emitirDialog(text: string): void;
  export function emitirPrompt(ctx: PromptOptions): void;
  export function emitirSnack(ctx: SnackOptions | string): void;
  export function setLoaderOverlay(bool: boolean, text?: string): void;
  export function setLoaderDialog(bool: boolean, text?: string): void;
  export function getLoaderOverlayStatus(): boolean;

  export interface VuetifyComponentsPluginOptions {
    pinia?: Pinia;
  }

  const plugin: {
    install: PluginFunction<VuetifyComponentsPluginOptions>
  };

  export default plugin;
}
