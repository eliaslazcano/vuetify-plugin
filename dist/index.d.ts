import { PluginFunction } from 'vue';
import { Store, StateTree, _GettersTree, _ActionsTree } from 'pinia';

export interface VuetifyComponentsPluginOptions {
  pinia?: any;
}

export const install: PluginFunction<VuetifyComponentsPluginOptions>;

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

export const useVuetifyComponentsStore: (pinia?: any) => Store<'vuetifyComponentsStore', VuetifyComponentsState, {}, {
  addSnack(ctx?: SnackOptions): void;
  removeSnack(id: number): void;
  addAlert(ctx?: AlertOptions): void;
  showDialog(text: string): void;
  adicionarPrompt(ctx: PromptOptions): void;
  removerPrompt(promptId: number, onCancel?: boolean, onDismiss?: boolean): void;
  resetarPrompts(): void;
}>;

// Utility functions
export interface SnackOptions {
  text: string;
  color?: string;
  timeout?: number;
  icon?: string;
  [key: string]: any;
}

export interface AlertOptions {
  text: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  timeout?: number;
  [key: string]: any;
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

// Components
import { VueConstructor } from 'vue';

export const EGlobalUi: VueConstructor;
export const EGlobalLoaderOverlay: VueConstructor;
export const EGlobalLoaderDialog: VueConstructor;
export const VCardToolbar: VueConstructor;

declare module 'vue/types/vue' {
  interface Vue {
    $vuetifyComponentsStore: any;
  }
}

// @ts-ignore
export default { install };
