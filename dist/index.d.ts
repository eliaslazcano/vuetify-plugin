declare module '@eliaslazcano/vuetify-plugin' {
  import Vue, { VueConstructor, PluginFunction } from 'vue';
  import { Store, StateTree } from 'pinia';

  // Component Props Interfaces
  export interface VFabToTopProps {
    scrollOffset?: number;
  }

  export interface VBtnTooltipProps {
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

  export interface VCardToolbarProps {
    color?: string;
    title?: string;
    titleSize?: string;
    icon?: string;
    iconSize?: string;
    btnClose?: boolean;
  }

  export interface VContainerAsyncProps {
    loading?: boolean;
    color?: string;
    transition?: string;
    spinnerTransition?: string;
    texto?: string;
    fluid?: boolean;
    appear?: boolean;
    fixed?: boolean;
  }

  export interface VDateFieldProps {
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

  export interface VGlobalComponentsProps {}

  export interface VLoaderDialogProps {
    value?: boolean;
    hideOverlay?: boolean;
    persistent?: boolean;
    text?: string;
    color?: string;
    width?: string;
    progressColor?: string;
  }

  export interface VLoaderOverlayProps {
    value?: boolean;
    zIndex?: number | string;
    opacity?: number;
    texto?: string;
  }

  // Components
  export const VFabToTop: VueConstructor<Vue & { $props: VFabToTopProps }>;
  export const VBtnTooltip: VueConstructor<Vue & { $props: VBtnTooltipProps }>;
  export const VCardToolbar: VueConstructor<Vue & { $props: VCardToolbarProps }>;
  export const VContainerAsync: VueConstructor<Vue & { $props: VContainerAsyncProps }>;
  export const VDateField: VueConstructor<Vue & { $props: VDateFieldProps }>;
  export const VGlobalComponents: VueConstructor<Vue & { $props: VGlobalComponentsProps }>;
  export const VLoaderDialog: VueConstructor<Vue & { $props: VLoaderDialogProps }>;
  export const VLoaderOverlay: VueConstructor<Vue & { $props: VLoaderOverlayProps }>;

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
