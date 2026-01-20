declare module '@eliaslazcano/vuetify-plugin' {
  import { VueConstructor, PluginFunction } from 'vue';
  import { Store, StateTree } from 'pinia';

  // Components
  export const EGlobalUi: VueConstructor;
  export const EGlobalLoaderOverlay: VueConstructor;
  export const EGlobalLoaderDialog: VueConstructor;
  export const VBtnTooltip: VueConstructor;
  export const VCardToolbar: VueConstructor;
  export const VDateField: VueConstructor;

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
    onOk?: (value: any) => void;
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

  // Plugin
  export interface VuetifyComponentsPluginOptions {
    pinia?: any;
  }
  const plugin: {
    install: PluginFunction<VuetifyComponentsPluginOptions>
  };

  export default plugin;
}
