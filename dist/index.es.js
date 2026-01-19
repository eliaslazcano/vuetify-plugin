import { defineStore as v } from "pinia";
import { getCurrentInstance as m, onMounted as _, watch as y } from "vue";
const i = v("vuetifyComponentsStore", {
  state: () => ({
    loaderOverlayShow: !1,
    loaderDialogShow: !1,
    loaderText: "",
    dialogShow: !1,
    dialogContent: "",
    snacks: [],
    alerts: [],
    prompts: []
  }),
  actions: {
    addSnack(s = { text: "", color: "primary", timeout: 3e3 }) {
      s.id = Date.now(), s.timeout || (s.timeout = 3e3), this.snacks.push(s);
    },
    removeSnack(s) {
      const t = this.snacks.findIndex((o) => o.id === s);
      t !== -1 && this.snacks.splice(t, 1);
    },
    addAlert(s = { text: "", type: "info", timeout: 3e3 }) {
      s.id = Date.now(), s.timeout || (s.timeout = 3e3), this.alerts.push(s), setTimeout(() => {
        const t = this.alerts.findIndex((o) => o.id === s.id);
        t !== -1 && this.alerts.splice(t, 1);
      }, s.timeout);
    },
    showDialog(s) {
      this.dialogContent = s, this.dialogShow = !0;
    },
    adicionarPrompt(s) {
      var o;
      const t = {
        options: s,
        id: Date.now(),
        show: !0,
        promptValue: ((o = s.prompt) == null ? void 0 : o.model) ?? ""
      };
      this.prompts.push(t);
    },
    removerPrompt(s, t = !1, o = !1) {
      var e, a, l;
      const r = this.prompts.findIndex((n) => n.id === s);
      this.prompts[r].show = !1, t && typeof ((e = this.prompts[r].options) == null ? void 0 : e.onCancel) == "function" && this.prompts[r].options.onCancel(), o && typeof ((a = this.prompts[r].options) == null ? void 0 : a.onDismiss) == "function" && this.prompts[r].options.onDismiss(), typeof ((l = this.prompts[r].options) == null ? void 0 : l.onFinally) == "function" && this.prompts[r].options.onFinally(), setTimeout(() => this.prompts.splice(r, 1), 800);
    },
    resetarPrompts() {
      this.prompts.forEach((s, t) => {
        this.prompts[t].show = !1;
      }), setTimeout(() => this.prompts = [], 300);
    }
  }
}), V = (s, t = "") => {
  const o = i();
  o.loaderText = t, o.loaderOverlayShow = s;
}, B = () => i().loaderOverlayShow, j = (s, t = "") => {
  const o = i();
  o.loaderText = t, o.loaderDialogShow = s;
}, R = (s) => {
  i().addSnack(s);
}, M = (s) => {
  i().addAlert(s);
}, N = (s) => {
  i().showDialog(s);
}, U = (s) => {
  i().adicionarPrompt(s);
};
function c(s, t, o, r, e, a, l, n) {
  var p = typeof s == "function" ? s.options : s;
  return t && (p.render = t, p.staticRenderFns = o, p._compiled = !0), {
    exports: s,
    options: p
  };
}
const h = {
  __name: "EGlobalLoaderOverlay",
  props: {
    value: { type: Boolean, default: !1 },
    zIndex: { type: [Number, String], default: 210 },
    opacity: { type: Number, default: 0.7 },
    texto: { type: String, default: "" }
  },
  setup(s) {
    return { __sfc: !0 };
  }
};
var C = function() {
  var t = this, o = t._self._c;
  return t._self._setupProxy, o("v-overlay", t._b({ attrs: { value: t.value, "z-index": t.zIndex, opacity: t.opacity } }, "v-overlay", t.$attrs, !1), [o("div", { staticClass: "text-center" }, [o("v-progress-circular", { attrs: { indeterminate: "", size: "48" } }), o("div", { staticClass: "pt-3" }, [t.$slots.default ? t._t("default") : t.texto ? [t._v(t._s(t.texto))] : t._e()], 2)], 1)]);
}, S = [], g = /* @__PURE__ */ c(
  h,
  C,
  S
);
const d = g.exports, x = {
  __name: "EGlobalLoaderDialog",
  props: {
    value: { type: Boolean, default: !1 },
    hideOverlay: { type: Boolean, default: !1 },
    persistent: { type: Boolean, default: !0 },
    text: { type: String, default: "Por favor aguarde" },
    color: { type: String, default: "primary" },
    width: { type: String, default: "300" },
    progressColor: { type: String, default: "white" }
  },
  setup(s) {
    return { __sfc: !0 };
  }
};
var b = function() {
  var t = this, o = t._self._c;
  return t._self._setupProxy, o("v-dialog", t._b({ attrs: { value: t.value, "hide-overlay": t.hideOverlay, persistent: t.persistent, width: t.width } }, "v-dialog", t.$attrs, !1), [o("v-card", { attrs: { color: t.color, dark: "" } }, [o("v-card-text", { staticClass: "text-center pt-1" }, [t._t("default", function() {
    return [t._v(t._s(t.text ? t.text : "Por favor aguarde"))];
  }), o("v-progress-linear", { staticClass: "mb-0", attrs: { indeterminate: "", color: t.progressColor } })], 2)], 1)], 1);
}, w = [], k = /* @__PURE__ */ c(
  x,
  b,
  w
);
const u = k.exports, $ = {
  __name: "VCardToolbar",
  props: {
    color: { type: String, default: "primary" },
    title: { type: String, default: "" },
    titleSize: { type: String, default: "1.25rem" },
    icon: { type: String, default: "" },
    iconSize: { type: String, default: "1.5rem" },
    btnClose: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(s) {
    const { proxy: t } = m(), o = t.$vuetify;
    return { __sfc: !0, proxy: t, vuetify: o };
  }
};
var O = function() {
  var t = this, o = t._self._c, r = t._self._setupProxy;
  return o("v-toolbar", t._b({ staticClass: "flex-grow-0", attrs: { color: r.vuetify.framework.theme.dark && t.color === "primary" ? void 0 : t.color, dark: "", flat: "", dense: "" } }, "v-toolbar", t.$attrs, !1), [t.icon ? o("v-icon", { staticClass: "mr-2", attrs: { size: t.iconSize } }, [t._v(t._s(t.icon))]) : t._e(), o("v-toolbar-title", { staticStyle: { "line-height": "1.1" }, style: { fontSize: t.titleSize } }, [t._v(t._s(t.title))]), o("v-spacer"), t._t("default"), t.btnClose ? o("v-btn", { attrs: { icon: "" }, on: { click: function(e) {
    return t.$emit("close");
  } } }, [o("v-icon", [t._v("mdi-close")])], 1) : t._e()], 2);
}, P = [], D = /* @__PURE__ */ c(
  $,
  O,
  P
);
const f = D.exports, T = {
  __name: "EGlobalUI",
  setup(s) {
    const t = i(), { proxy: o } = m(), r = o.$vuetify;
    return _(() => {
      o.$route && y(
        () => o.$route.fullPath,
        () => t.resetarPrompts()
      );
    }), { __sfc: !0, vuetifyComponentsStore: t, proxy: o, vuetify: r, promptOnOk: (a, l, n = () => {
    }, p = "") => {
      a.validate() && (n(p), t.removerPrompt(l));
    }, EGlobalLoaderOverlay: d, EGlobalLoaderDialog: u, VCardToolbar: f };
  }
};
var z = function() {
  var t = this, o = t._self._c, r = t._self._setupProxy;
  return o("div", [o("div", { staticClass: "d-flex flex-column", class: { "align-center": r.vuetify.breakpoint.smAndDown, "align-end": !r.vuetify.breakpoint.smAndDown }, staticStyle: { position: "fixed", right: "0", top: "0", "z-index": "205" } }, [o("transition-group", { attrs: { name: "slide-x-reverse-transition", appear: "" } }, t._l(r.vuetifyComponentsStore.alerts, function(e) {
    return o("v-alert", { key: e.id, staticClass: "mt-2 mb-0 alert", class: { "mr-3": !r.vuetify.breakpoint.smAndDown }, attrs: { type: e.type, elevation: "2", width: "20rem", "max-width": "100%" } }, [t._v(t._s(e.text))]);
  }), 1)], 1), o("v-dialog", { attrs: { app: "", persistent: "", width: "32rem", value: r.vuetifyComponentsStore.dialogShow } }, [o("v-card", [o("v-alert", { staticClass: "mb-0 text-justify", attrs: { type: "warning", border: "top", text: "", icon: !1 } }, [o("div", { staticClass: "d-flex align-center flex-column" }, [o("v-icon", { staticClass: "warning lighten-1 rounded-circle pa-2 mb-2", attrs: { size: "30", color: "white" } }, [t._v("mdi-alert")]), o("p", { staticClass: "body-1 flex-grow-1 mb-0", staticStyle: { "white-space": "pre-wrap", "text-align": "justify" }, domProps: { innerHTML: t._s(r.vuetifyComponentsStore.dialogContent) } })], 1)]), o("v-divider"), o("v-card-actions", { staticClass: "justify-center" }, [o("v-btn", { attrs: { small: "", depressed: "", color: "warning" }, on: { click: function(e) {
    r.vuetifyComponentsStore.dialogShow = !1;
  } } }, [t._v("OK")])], 1)], 1)], 1), o(r.EGlobalLoaderOverlay, { attrs: { value: r.vuetifyComponentsStore.loaderOverlayShow, texto: r.vuetifyComponentsStore.loaderText } }), o(r.EGlobalLoaderDialog, { attrs: { value: r.vuetifyComponentsStore.loaderDialogShow, texto: r.vuetifyComponentsStore.loaderText } }), t._l(r.vuetifyComponentsStore.snacks, function(e) {
    return o("v-snackbar", { key: e.id, attrs: { color: e.color, timeout: e.timeout, value: !0, "min-width": "8rem", "max-width": "100%", app: "" }, on: { input: function(a) {
      return r.vuetifyComponentsStore.removeSnack(e.id);
    } } }, [e.icon ? o("v-icon", { staticClass: "mr-1", attrs: { dense: "", color: "white" } }, [t._v(t._s(e.icon))]) : e.color === "success" ? o("v-icon", { staticClass: "mr-1", attrs: { dense: "", color: "white" } }, [t._v("mdi-check-circle")]) : t._e(), t._v(" " + t._s(e.text) + " ")], 1);
  }), t._l(r.vuetifyComponentsStore.prompts, function(e, a) {
    var l;
    return o("v-dialog", { key: e.id, attrs: { width: e.options.width || "24em", persistent: e.options.persistent, "hide-overlay": e.options.hideOverlay }, on: { "click:outside": function(n) {
      e.options.persistent || r.vuetifyComponentsStore.removerPrompt(e.id, !1, !0);
    } }, model: { value: e.show, callback: function(n) {
      t.$set(e, "show", n);
    }, expression: "i.show" } }, [o("v-card", [o("v-form", { ref: "prompters", refInFor: !0, on: { submit: function(n) {
      return n.preventDefault(), r.promptOnOk(t.$refs.prompters[a], e.id, e.options.onOk, e.promptValue);
    } } }, [e.options.title ? o(r.VCardToolbar, { attrs: { title: e.options.title, color: e.options.titleColor || "primary", "hide-close-button": "" } }) : t._e(), e.options.message || e.options.prompt ? o("v-card-text", { staticClass: "text-justify pb-1" }, [e.options.message ? o("div", { class: e.options.messageClass || "my-2", domProps: { innerHTML: t._s(e.options.message) } }) : t._e(), e.options.prompt ? [((l = e.options.prompt) == null ? void 0 : l.type) === "textarea" ? o("v-textarea", { style: { marginTop: e.options.message ? "1.25rem" : "0" }, attrs: { label: e.options.prompt.label, rules: e.options.prompt.rules, outlined: e.options.prompt.outlined, filled: e.options.prompt.filled, placeholder: e.options.prompt.placeholder, persistentPlaceholder: e.options.prompt.persistentPlaceholder, dense: e.options.prompt.dense, autofocus: e.options.prompt.autofocus, rows: e.options.prompt.rows || 5 }, model: { value: e.promptValue, callback: function(n) {
      t.$set(e, "promptValue", n);
    }, expression: "i.promptValue" } }) : o("v-text-field", { directives: [{ name: "maska", rawName: "v-maska", value: e.options.prompt.mask || null, expression: "i.options.prompt.mask || null" }], style: { marginTop: e.options.message ? "1.25rem" : "0" }, attrs: { label: e.options.prompt.label, type: e.options.prompt.type || "text", rules: e.options.prompt.rules, outlined: e.options.prompt.outlined, filled: e.options.prompt.filled, placeholder: e.options.prompt.placeholder, persistentPlaceholder: e.options.prompt.persistentPlaceholder, dense: e.options.prompt.dense, autofocus: e.options.prompt.autofocus }, model: { value: e.promptValue, callback: function(n) {
      t.$set(e, "promptValue", n);
    }, expression: "i.promptValue" } })] : t._e()], 2) : t._e(), o("v-card-actions", { staticClass: "justify-center" }, [e.options.cancel ? o("v-btn", { class: e.options.cancelClass, attrs: { color: e.options.cancelColor || "primary", small: e.options.smallButtons, depressed: e.options.cancelDepressed, outlined: e.options.cancelOutlined ?? !0 }, on: { click: function(n) {
      return r.vuetifyComponentsStore.removerPrompt(e.id, !0, !0);
    } } }, [t._v(t._s(e.options.cancelText || "CANCELAR"))]) : t._e(), o("v-btn", { class: e.options.confirmClass, attrs: { color: e.options.confirmColor || "primary", small: e.options.smallButtons, type: "submit", depressed: e.options.confirmDepressed ?? !0, outlined: e.options.confirmOutlined } }, [t._v(t._s(e.options.confirmText || "OK"))])], 1)], 1)], 1)], 1);
  })], 2);
}, L = [], I = /* @__PURE__ */ c(
  T,
  z,
  L
);
const G = I.exports, E = (s, t = {}) => {
  const o = t.pinia || s.prototype.$pinia;
  if (!o) {
    console.error("[@eliaslazcano/vuetify] Pinia é necessário para esta biblioteca.");
    return;
  }
  s.prototype.$vuetifyComponentsStore = i(o), s.component("EGlobalUi", G), s.component("EGlobalLoaderOverlay", d), s.component("EGlobalLoaderDialog", u), s.component("VCardToolbar", f);
}, H = { install: E };
export {
  u as EGlobalLoaderDialog,
  d as EGlobalLoaderOverlay,
  G as EGlobalUi,
  f as VCardToolbar,
  H as default,
  M as emitirAlert,
  N as emitirDialog,
  U as emitirPrompt,
  R as emitirSnack,
  B as getLoaderOverlayStatus,
  E as install,
  j as setLoaderDialog,
  V as setLoaderOverlay,
  i as useVuetifyComponentsStore
};
