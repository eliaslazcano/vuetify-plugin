import { defineStore as Rs } from "pinia";
import { getCurrentInstance as _t, ref as Ie, computed as Ur, watch as ir, onMounted as xs } from "vue";
const _e = Rs("vuetifyComponentsStore", {
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
    addSnack(e = { text: "", color: "primary", timeout: 3e3 }) {
      e.id = Date.now(), e.timeout || (e.timeout = 3e3), this.snacks.push(e);
    },
    removeSnack(e) {
      const t = this.snacks.findIndex((r) => r.id === e);
      t !== -1 && this.snacks.splice(t, 1);
    },
    addAlert(e = { text: "", type: "info", timeout: 3e3 }) {
      e.id = Date.now(), e.timeout || (e.timeout = 3e3), this.alerts.push(e), setTimeout(() => {
        const t = this.alerts.findIndex((r) => r.id === e.id);
        t !== -1 && this.alerts.splice(t, 1);
      }, e.timeout);
    },
    showDialog(e) {
      this.dialogContent = e, this.dialogShow = !0;
    },
    adicionarPrompt(e) {
      var r;
      const t = {
        options: e,
        id: Date.now(),
        show: !0,
        promptValue: ((r = e.prompt) == null ? void 0 : r.model) ?? ""
      };
      this.prompts.push(t);
    },
    removerPrompt(e, t = !1, r = !1) {
      var s, a, i;
      const n = this.prompts.findIndex((o) => o.id === e);
      this.prompts[n].show = !1, t && typeof ((s = this.prompts[n].options) == null ? void 0 : s.onCancel) == "function" && this.prompts[n].options.onCancel(), r && typeof ((a = this.prompts[n].options) == null ? void 0 : a.onDismiss) == "function" && this.prompts[n].options.onDismiss(), typeof ((i = this.prompts[n].options) == null ? void 0 : i.onFinally) == "function" && this.prompts[n].options.onFinally(), setTimeout(() => this.prompts.splice(n, 1), 800);
    },
    resetarPrompts() {
      this.prompts.forEach((e, t) => {
        this.prompts[t].show = !1;
      }), setTimeout(() => this.prompts = [], 300);
    }
  }
}), nd = (e, t = "") => {
  const r = _e();
  r.loaderText = t, r.loaderOverlayShow = e;
}, sd = () => _e().loaderOverlayShow, ad = (e, t = "") => {
  const r = _e();
  r.loaderText = t, r.loaderDialogShow = e;
}, id = (e) => {
  _e().addSnack(e);
}, Vr = (e) => {
  _e().addAlert(e);
}, od = (e) => {
  _e().showDialog(e);
}, ld = (e) => {
  _e().adicionarPrompt(e);
};
function ge(e, t, r, n, s, a, i, o) {
  var l = typeof e == "function" ? e.options : e;
  return t && (l.render = t, l.staticRenderFns = r, l._compiled = !0), {
    exports: e,
    options: l
  };
}
const Ps = {
  __name: "VBtnTooltip",
  props: {
    //Propriedades do tooltip
    text: { type: String },
    //texto do tooltip, a menos que você use o slot 'tooltip'
    tooltipColor: { type: String },
    //Propriedades do botão
    color: { type: String, default: "primary" },
    icon: { type: Boolean },
    to: { type: [String, Object] },
    target: { type: String },
    href: { type: String },
    small: { type: Boolean },
    xSmall: { type: Boolean },
    fab: { type: Boolean },
    large: { type: Boolean },
    dark: { type: Boolean },
    fixed: { type: Boolean },
    btnBottom: { type: Boolean },
    btnRight: { type: Boolean },
    btnClasses: { type: String },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const { proxy: r } = _t(), n = r.$vuetify;
    return { __sfc: !0, proxy: r, vuetify: n, emit: t };
  }
};
var Ns = function() {
  var t = this, r = t._self._c, n = t._self._setupProxy;
  return r("v-tooltip", t._b({ attrs: { disabled: n.vuetify.breakpoint.xs, color: t.tooltipColor }, scopedSlots: t._u([{ key: "activator", fn: function({ on: s, attrs: a }) {
    return [r("v-btn", t._g(t._b({ class: t.btnClasses, attrs: { color: t.color, icon: t.icon, to: t.to, target: t.target, href: t.href, small: t.small, "x-small": t.xSmall, disabled: t.disabled, fab: t.fab, large: t.large, dark: t.dark, fixed: t.fixed, bottom: t.btnBottom, right: t.btnRight }, on: { click: function(i) {
      return n.emit("click");
    } } }, "v-btn", a, !1), s), [t._t("default")], 2)];
  } }], null, !0) }, "v-tooltip", t.$attrs, !1), [t.$slots.tooltip ? t._t("default") : r("span", [t._v(t._s(t.text))])], 2);
}, Es = [], As = /* @__PURE__ */ ge(
  Ps,
  Ns,
  Es
);
const Is = As.exports, Ls = {
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
  setup(e) {
    const { proxy: t } = _t(), r = t.$vuetify;
    return { __sfc: !0, proxy: t, vuetify: r };
  }
};
var Fs = function() {
  var t = this, r = t._self._c, n = t._self._setupProxy;
  return r("v-toolbar", t._b({ staticClass: "flex-grow-0", attrs: { color: n.vuetify.theme.dark && t.color === "primary" ? void 0 : t.color, dark: "", flat: "", dense: "" } }, "v-toolbar", t.$attrs, !1), [t.icon ? r("v-icon", { staticClass: "mr-2", attrs: { size: t.iconSize } }, [t._v(t._s(t.icon))]) : t._e(), r("v-toolbar-title", { staticStyle: { "line-height": "1.1" }, style: { fontSize: t.titleSize } }, [t._v(t._s(t.title))]), r("v-spacer"), t._t("default"), t.btnClose ? r("v-btn", { attrs: { icon: "" }, on: { click: function(s) {
    return t.$emit("close");
  } } }, [r("v-icon", [t._v("mdi-close")])], 1) : t._e()], 2);
}, Bs = [], Ws = /* @__PURE__ */ ge(
  Ls,
  Fs,
  Bs
);
const mr = Ws.exports, Us = {
  __name: "VContainerAsync",
  props: {
    loading: { type: Boolean, default: !1 },
    color: { type: String, default: "blue" },
    containerTransition: { type: String, default: "fade-transition" },
    spinnerTransition: { type: String, default: "fade-transition" },
    texto: { type: String, default: "" },
    fluid: { type: Boolean, default: !1 },
    appear: { type: Boolean, default: !0 },
    fixed: { type: Boolean, default: !1 },
    zIndex: { type: [String, Number], default: "1" }
  },
  setup(e) {
    return { __sfc: !0 };
  }
};
var Vs = function() {
  var t = this, r = t._self._c;
  return t._self._setupProxy, r("div", { staticClass: "d-flex flex-column", staticStyle: { "min-height": "100%", position: "relative" } }, [r("transition", { attrs: { mode: "out-in", name: t.spinnerTransition, appear: t.appear, "leave-class": t.spinnerTransition + "-leave", "leave-to-class": t.spinnerTransition + "-leave-to", "leave-active-class": t.spinnerTransition + "-leave-active", "enter-class": t.spinnerTransition + "-enter", "enter-to-class": t.spinnerTransition + "-enter-to", "enter-active-class": t.spinnerTransition + "-enter-active" }, on: { "after-leave": function(n) {
    return t.$emit("after-leave", t.loading);
  } } }, [t.loading ? r("div", { key: 1, staticClass: "d-flex justify-center align-center flex-column", staticStyle: { inset: "0" }, style: { position: t.fixed ? "fixed" : "absolute", zIndex: t.zIndex } }, [r("v-progress-circular", { attrs: { indeterminate: "", color: t.color } }), t.texto ? r("div", { staticClass: "mt-2 grey--text text--darken-1" }, [t._v(t._s(t.texto))]) : t._e()], 1) : t._e()]), r("transition", { attrs: { mode: "out-in", name: t.containerTransition, appear: t.appear, "leave-class": t.containerTransition + "-leave", "leave-to-class": t.containerTransition + "-leave-to", "leave-active-class": t.containerTransition + "-leave-active", "enter-class": t.containerTransition + "-enter", "enter-to-class": t.containerTransition + "-enter-to", "enter-active-class": t.containerTransition + "-enter-active" }, on: { "after-enter": function(n) {
    return t.$emit("after-enter", t.loading);
  } } }, [r("v-container", t._g(t._b({ directives: [{ name: "show", rawName: "v-show", value: !t.loading, expression: "!loading" }], key: 2, attrs: { fluid: t.fluid } }, "v-container", t.$attrs, !1), t.$listeners), [t._t("default")], 2)], 1)], 1);
}, Hs = [], js = /* @__PURE__ */ ge(
  Us,
  Vs,
  Hs
);
const zs = js.exports;
var qs = Object.defineProperty, Gs = (e, t, r) => t in e ? qs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ge = (e, t, r) => Gs(e, typeof t != "symbol" ? t + "" : t, r);
const Hr = {
  "#": { pattern: /[0-9]/ },
  "@": { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[a-zA-Z0-9]/ }
}, jr = (e, t, r) => e.replaceAll(t, "").replace(r, ".").replace("..", ".").replace(/[^.\d]/g, ""), zr = (e, t, r) => {
  var n;
  return new Intl.NumberFormat(((n = r.number) == null ? void 0 : n.locale) ?? "en", {
    minimumFractionDigits: e,
    maximumFractionDigits: t,
    roundingMode: "trunc"
  });
}, $s = (e, t = !0, r) => {
  var n, s, a, i;
  const o = ((n = r.number) == null ? void 0 : n.unsigned) !== !0 && e.startsWith("-") ? "-" : "", l = ((s = r.number) == null ? void 0 : s.fraction) ?? 0;
  let u = zr(0, l, r);
  const d = u.formatToParts(1000.12), h = ((a = d.find((T) => T.type === "group")) == null ? void 0 : a.value) ?? " ", p = ((i = d.find((T) => T.type === "decimal")) == null ? void 0 : i.value) ?? ".", m = jr(e, h, p);
  if (Number.isNaN(parseFloat(m))) return o;
  const b = m.split(".");
  if (b[1] != null && b[1].length >= 1) {
    const T = b[1].length <= l ? b[1].length : l;
    u = zr(T, l, r);
  }
  let C = u.format(parseFloat(m));
  return t ? l > 0 && m.endsWith(".") && !m.slice(0, -1).includes(".") && (C += p) : C = jr(C, h, p), o + C;
}, Tn = (e) => JSON.parse(e.replaceAll("'", '"')), Zs = (e, t = {}) => {
  const r = { ...t };
  e.dataset.maska != null && e.dataset.maska !== "" && (r.mask = Js(e.dataset.maska)), e.dataset.maskaEager != null && (r.eager = st(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (r.reversed = st(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (r.tokensReplace = st(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (r.tokens = Ks(e.dataset.maskaTokens));
  const n = {};
  return e.dataset.maskaNumberLocale != null && (n.locale = e.dataset.maskaNumberLocale), e.dataset.maskaNumberFraction != null && (n.fraction = parseInt(e.dataset.maskaNumberFraction)), e.dataset.maskaNumberUnsigned != null && (n.unsigned = st(e.dataset.maskaNumberUnsigned)), (e.dataset.maskaNumber != null || Object.values(n).length > 0) && (r.number = n), r;
}, st = (e) => e !== "" ? !!JSON.parse(e) : !0, Js = (e) => e.startsWith("[") && e.endsWith("]") ? Tn(e) : e, Ks = (e) => {
  if (e.startsWith("{") && e.endsWith("}"))
    return Tn(e);
  const t = {};
  return e.split("|").forEach((r) => {
    const n = r.split(":");
    t[n[0]] = {
      pattern: Yn() ? new RegExp(n[1], "u") : new RegExp(n[1]),
      optional: n[2] === "optional",
      multiple: n[2] === "multiple",
      repeated: n[2] === "repeated"
    };
  }), t;
}, Yn = () => {
  try {
    return new RegExp("\\p{L}", "u"), !0;
  } catch {
    return !1;
  }
};
class Qs {
  constructor(t = {}) {
    Ge(this, "opts", {}), Ge(this, "memo", /* @__PURE__ */ new Map());
    const r = { ...t };
    if (r.tokens != null) {
      r.tokens = r.tokensReplace ? { ...r.tokens } : { ...Hr, ...r.tokens };
      for (const n of Object.values(r.tokens))
        typeof n.pattern == "string" && (n.pattern = Yn() ? new RegExp(n.pattern, "u") : new RegExp(n.pattern));
    } else
      r.tokens = Hr;
    Array.isArray(r.mask) && (r.mask.length > 1 ? r.mask = [...r.mask].sort((n, s) => n.length - s.length) : r.mask = r.mask[0] ?? ""), r.mask === "" && (r.mask = null), this.opts = r;
  }
  masked(t) {
    return this.process(String(t), this.findMask(String(t)));
  }
  unmasked(t) {
    return this.process(String(t), this.findMask(String(t)), !1);
  }
  isEager() {
    return this.opts.eager === !0;
  }
  isReversed() {
    return this.opts.reversed === !0;
  }
  completed(t) {
    const r = this.findMask(String(t));
    if (this.opts.mask == null || r == null) return !1;
    const n = this.process(String(t), r).length;
    return typeof this.opts.mask == "string" ? n >= this.opts.mask.length : n >= r.length;
  }
  findMask(t) {
    const r = this.opts.mask;
    if (r == null)
      return null;
    if (typeof r == "string")
      return r;
    if (typeof r == "function")
      return r(t);
    const n = this.process(t, r.slice(-1).pop() ?? "", !1);
    return r.find((s) => this.process(t, s, !1).length >= n.length) ?? "";
  }
  escapeMask(t) {
    const r = [], n = [];
    return t.split("").forEach((s, a) => {
      s === "!" && t[a - 1] !== "!" ? n.push(a - n.length) : r.push(s);
    }), { mask: r.join(""), escaped: n };
  }
  process(t, r, n = !0) {
    if (this.opts.number != null) return $s(t, n, this.opts);
    if (r == null) return t;
    const s = `v=${t},mr=${r},m=${n ? 1 : 0}`;
    if (this.memo.has(s)) return this.memo.get(s);
    const { mask: a, escaped: i } = this.escapeMask(r), o = [], l = this.opts.tokens != null ? this.opts.tokens : {}, u = this.isReversed() ? -1 : 1, d = this.isReversed() ? "unshift" : "push", h = this.isReversed() ? 0 : a.length - 1, p = this.isReversed() ? () => T > -1 && y > -1 : () => T < a.length && y < t.length, m = (S) => !this.isReversed() && S <= h || this.isReversed() && S >= h;
    let b, C = -1, T = this.isReversed() ? a.length - 1 : 0, y = this.isReversed() ? t.length - 1 : 0, E = !1;
    for (; p(); ) {
      const S = a.charAt(T), w = l[S], H = (w == null ? void 0 : w.transform) != null ? w.transform(t.charAt(y)) : t.charAt(y);
      if (!i.includes(T) && w != null ? (H.match(w.pattern) != null ? (o[d](H), w.repeated ? (C === -1 ? C = T : T === h && T !== C && (T = C - u), h === C && (T -= u)) : w.multiple && (E = !0, T -= u), T += u) : w.multiple ? E && (T += u, y -= u, E = !1) : H === b ? b = void 0 : w.optional && (T += u, y -= u), y += u) : (n && !this.isEager() && o[d](S), H === S && !this.isEager() ? y += u : b = S, this.isEager() || (T += u)), this.isEager())
        for (; m(T) && (l[a.charAt(T)] == null || i.includes(T)); ) {
          if (n) {
            if (o[d](a.charAt(T)), t.charAt(y) === a.charAt(T)) {
              T += u, y += u;
              continue;
            }
          } else a.charAt(T) === t.charAt(y) && (y += u);
          T += u;
        }
    }
    return this.memo.set(s, o.join("")), this.memo.get(s);
  }
}
class Xs {
  constructor(t, r = {}) {
    Ge(this, "items", /* @__PURE__ */ new Map()), Ge(this, "eventAbortController"), Ge(this, "onInput", (n) => {
      if (n instanceof CustomEvent && n.type === "input" && !n.isTrusted && !n.bubbles)
        return;
      const s = n.target, a = this.items.get(s);
      if (a === void 0) return;
      const i = "inputType" in n && n.inputType.startsWith("delete"), o = a.isEager(), l = i && o && a.unmasked(s.value) === "" ? "" : s.value;
      this.fixCursor(s, i, () => this.setValue(s, l));
    }), this.options = r, this.eventAbortController = new AbortController(), this.init(this.getInputs(t));
  }
  update(t = {}) {
    this.options = { ...t }, this.init(Array.from(this.items.keys()));
  }
  updateValue(t) {
    var r;
    t.value !== "" && t.value !== ((r = this.processInput(t)) == null ? void 0 : r.masked) && this.setValue(t, t.value);
  }
  destroy() {
    this.eventAbortController.abort(), this.items.clear();
  }
  init(t) {
    const r = this.getOptions(this.options);
    for (const n of t) {
      if (!this.items.has(n)) {
        const { signal: a } = this.eventAbortController;
        n.addEventListener("input", this.onInput, { capture: !0, signal: a });
      }
      const s = new Qs(Zs(n, r));
      this.items.set(n, s), queueMicrotask(() => this.updateValue(n)), n.selectionStart === null && s.isEager() && console.warn("Maska: input of `%s` type is not supported", n.type);
    }
  }
  getInputs(t) {
    return typeof t == "string" ? Array.from(document.querySelectorAll(t)) : "length" in t ? Array.from(t) : [t];
  }
  getOptions(t) {
    const { onMaska: r, preProcess: n, postProcess: s, ...a } = t;
    return a;
  }
  fixCursor(t, r, n) {
    var s, a;
    const i = t.selectionStart, o = t.value;
    if (n(), i === null || i === o.length && !r) return;
    const l = t.value, u = o.slice(0, i), d = l.slice(0, i), h = (s = this.processInput(t, u)) == null ? void 0 : s.unmasked, p = (a = this.processInput(t, d)) == null ? void 0 : a.unmasked;
    if (h === void 0 || p === void 0) return;
    let m = i;
    u !== d && (m += r ? l.length - o.length : h.length - p.length), t.setSelectionRange(m, m);
  }
  setValue(t, r) {
    const n = this.processInput(t, r);
    n !== void 0 && (t.value = n.masked, this.options.onMaska != null && (Array.isArray(this.options.onMaska) ? this.options.onMaska.forEach((s) => s(n)) : this.options.onMaska(n)), t.dispatchEvent(new CustomEvent("maska", { detail: n })), t.dispatchEvent(new CustomEvent("input", { detail: n.masked })));
  }
  processInput(t, r) {
    const n = this.items.get(t);
    if (n === void 0) return;
    let s = r ?? t.value;
    this.options.preProcess != null && (s = this.options.preProcess(s));
    let a = n.masked(s);
    return this.options.postProcess != null && (a = this.options.postProcess(a)), {
      masked: a,
      unmasked: n.unmasked(s),
      completed: n.completed(s)
    };
  }
}
const Pt = /* @__PURE__ */ new WeakMap(), ea = (e, t) => {
  if (e.arg == null || e.instance == null) return;
  const r = "setup" in e.instance.$.type;
  e.arg in e.instance ? e.instance[e.arg] = t : r && console.warn("Maska: please expose `%s` using defineExpose", e.arg);
}, On = (e, t) => {
  var r;
  const n = e instanceof HTMLInputElement ? e : e.querySelector("input");
  if (n == null || (n == null ? void 0 : n.type) === "file") return;
  let s = {};
  if (t.value != null && (s = typeof t.value == "string" ? { mask: t.value } : { ...t.value }), t.arg != null) {
    const a = (i) => {
      const o = t.modifiers.unmasked ? i.unmasked : t.modifiers.completed ? i.completed : i.masked;
      ea(t, o);
    };
    s.onMaska = s.onMaska == null ? a : Array.isArray(s.onMaska) ? [...s.onMaska, a] : [s.onMaska, a];
  }
  Pt.has(n) ? (r = Pt.get(n)) == null || r.update(s) : Pt.set(n, new Xs(n, s));
};
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Rn;
function f() {
  return Rn.apply(null, arguments);
}
function ta(e) {
  Rn = e;
}
function X(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function Te(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function L(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function pr(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (L(e, t))
      return !1;
  return !0;
}
function G(e) {
  return e === void 0;
}
function pe(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Xe(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function xn(e, t) {
  var r = [], n, s = e.length;
  for (n = 0; n < s; ++n)
    r.push(t(e[n], n));
  return r;
}
function Se(e, t) {
  for (var r in t)
    L(t, r) && (e[r] = t[r]);
  return L(t, "toString") && (e.toString = t.toString), L(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function ae(e, t, r, n) {
  return es(e, t, r, n, !0).utc();
}
function ra() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function P(e) {
  return e._pf == null && (e._pf = ra()), e._pf;
}
var or;
Array.prototype.some ? or = Array.prototype.some : or = function(e) {
  var t = Object(this), r = t.length >>> 0, n;
  for (n = 0; n < r; n++)
    if (n in t && e.call(this, t[n], n, t))
      return !0;
  return !1;
};
function _r(e) {
  var t = null, r = !1, n = e._d && !isNaN(e._d.getTime());
  if (n && (t = P(e), r = or.call(t.parsedDateParts, function(s) {
    return s != null;
  }), n = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && r), e._strict && (n = n && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = n;
  else
    return n;
  return e._isValid;
}
function gt(e) {
  var t = ae(NaN);
  return e != null ? Se(P(t), e) : P(t).userInvalidated = !0, t;
}
var qr = f.momentProperties = [], Nt = !1;
function gr(e, t) {
  var r, n, s, a = qr.length;
  if (G(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), G(t._i) || (e._i = t._i), G(t._f) || (e._f = t._f), G(t._l) || (e._l = t._l), G(t._strict) || (e._strict = t._strict), G(t._tzm) || (e._tzm = t._tzm), G(t._isUTC) || (e._isUTC = t._isUTC), G(t._offset) || (e._offset = t._offset), G(t._pf) || (e._pf = P(t)), G(t._locale) || (e._locale = t._locale), a > 0)
    for (r = 0; r < a; r++)
      n = qr[r], s = t[n], G(s) || (e[n] = s);
  return e;
}
function et(e) {
  gr(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Nt === !1 && (Nt = !0, f.updateOffset(this), Nt = !1);
}
function ee(e) {
  return e instanceof et || e != null && e._isAMomentObject != null;
}
function Pn(e) {
  f.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function J(e, t) {
  var r = !0;
  return Se(function() {
    if (f.deprecationHandler != null && f.deprecationHandler(null, e), r) {
      var n = [], s, a, i, o = arguments.length;
      for (a = 0; a < o; a++) {
        if (s = "", typeof arguments[a] == "object") {
          s += `
[` + a + "] ";
          for (i in arguments[0])
            L(arguments[0], i) && (s += i + ": " + arguments[0][i] + ", ");
          s = s.slice(0, -2);
        } else
          s = arguments[a];
        n.push(s);
      }
      Pn(
        e + `
Arguments: ` + Array.prototype.slice.call(n).join("") + `
` + new Error().stack
      ), r = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Gr = {};
function Nn(e, t) {
  f.deprecationHandler != null && f.deprecationHandler(e, t), Gr[e] || (Pn(t), Gr[e] = !0);
}
f.suppressDeprecationWarnings = !1;
f.deprecationHandler = null;
function ie(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function na(e) {
  var t, r;
  for (r in e)
    L(e, r) && (t = e[r], ie(t) ? this[r] = t : this["_" + r] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function lr(e, t) {
  var r = Se({}, e), n;
  for (n in t)
    L(t, n) && (Te(e[n]) && Te(t[n]) ? (r[n] = {}, Se(r[n], e[n]), Se(r[n], t[n])) : t[n] != null ? r[n] = t[n] : delete r[n]);
  for (n in e)
    L(e, n) && !L(t, n) && Te(e[n]) && (r[n] = Se({}, r[n]));
  return r;
}
function yr(e) {
  e != null && this.set(e);
}
var ur;
Object.keys ? ur = Object.keys : ur = function(e) {
  var t, r = [];
  for (t in e)
    L(e, t) && r.push(t);
  return r;
};
var sa = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function aa(e, t, r) {
  var n = this._calendar[e] || this._calendar.sameElse;
  return ie(n) ? n.call(t, r) : n;
}
function se(e, t, r) {
  var n = "" + Math.abs(e), s = t - n.length, a = e >= 0;
  return (a ? r ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n;
}
var vr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, at = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Et = {}, Le = {};
function v(e, t, r, n) {
  var s = n;
  typeof n == "string" && (s = function() {
    return this[n]();
  }), e && (Le[e] = s), t && (Le[t[0]] = function() {
    return se(s.apply(this, arguments), t[1], t[2]);
  }), r && (Le[r] = function() {
    return this.localeData().ordinal(
      s.apply(this, arguments),
      e
    );
  });
}
function ia(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function oa(e) {
  var t = e.match(vr), r, n;
  for (r = 0, n = t.length; r < n; r++)
    Le[t[r]] ? t[r] = Le[t[r]] : t[r] = ia(t[r]);
  return function(s) {
    var a = "", i;
    for (i = 0; i < n; i++)
      a += ie(t[i]) ? t[i].call(s, e) : t[i];
    return a;
  };
}
function lt(e, t) {
  return e.isValid() ? (t = En(t, e.localeData()), Et[t] = Et[t] || oa(t), Et[t](e)) : e.localeData().invalidDate();
}
function En(e, t) {
  var r = 5;
  function n(s) {
    return t.longDateFormat(s) || s;
  }
  for (at.lastIndex = 0; r >= 0 && at.test(e); )
    e = e.replace(
      at,
      n
    ), at.lastIndex = 0, r -= 1;
  return e;
}
var la = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function ua(e) {
  var t = this._longDateFormat[e], r = this._longDateFormat[e.toUpperCase()];
  return t || !r ? t : (this._longDateFormat[e] = r.match(vr).map(function(n) {
    return n === "MMMM" || n === "MM" || n === "DD" || n === "dddd" ? n.slice(1) : n;
  }).join(""), this._longDateFormat[e]);
}
var da = "Invalid date";
function ca() {
  return this._invalidDate;
}
var fa = "%d", ha = /\d{1,2}/;
function ma(e) {
  return this._ordinal.replace("%d", e);
}
var pa = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function _a(e, t, r, n) {
  var s = this._relativeTime[r];
  return ie(s) ? s(e, t, r, n) : s.replace(/%d/i, e);
}
function ga(e, t) {
  var r = this._relativeTime[e > 0 ? "future" : "past"];
  return ie(r) ? r(t) : r.replace(/%s/i, t);
}
var $r = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function K(e) {
  return typeof e == "string" ? $r[e] || $r[e.toLowerCase()] : void 0;
}
function wr(e) {
  var t = {}, r, n;
  for (n in e)
    L(e, n) && (r = K(n), r && (t[r] = e[n]));
  return t;
}
var ya = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function va(e) {
  var t = [], r;
  for (r in e)
    L(e, r) && t.push({ unit: r, priority: ya[r] });
  return t.sort(function(n, s) {
    return n.priority - s.priority;
  }), t;
}
var An = /\d/, $ = /\d\d/, In = /\d{3}/, kr = /\d{4}/, yt = /[+-]?\d{6}/, U = /\d\d?/, Ln = /\d\d\d\d?/, Fn = /\d\d\d\d\d\d?/, vt = /\d{1,3}/, Sr = /\d{1,4}/, wt = /[+-]?\d{1,6}/, We = /\d+/, kt = /[+-]?\d+/, wa = /Z|[+-]\d\d:?\d\d/gi, St = /Z|[+-]\d\d(?::?\d\d)?/gi, ka = /[+-]?\d+(\.\d{1,3})?/, tt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Ue = /^[1-9]\d?/, Mr = /^([1-9]\d|\d)/, ct;
ct = {};
function _(e, t, r) {
  ct[e] = ie(t) ? t : function(n, s) {
    return n && r ? r : t;
  };
}
function Sa(e, t) {
  return L(ct, e) ? ct[e](t._strict, t._locale) : new RegExp(Ma(e));
}
function Ma(e) {
  return he(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, r, n, s, a) {
        return r || n || s || a;
      }
    )
  );
}
function he(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Z(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function A(e) {
  var t = +e, r = 0;
  return t !== 0 && isFinite(t) && (r = Z(t)), r;
}
var dr = {};
function B(e, t) {
  var r, n = t, s;
  for (typeof e == "string" && (e = [e]), pe(t) && (n = function(a, i) {
    i[t] = A(a);
  }), s = e.length, r = 0; r < s; r++)
    dr[e[r]] = n;
}
function rt(e, t) {
  B(e, function(r, n, s, a) {
    s._w = s._w || {}, t(r, s._w, s, a);
  });
}
function Da(e, t, r) {
  t != null && L(dr, e) && dr[e](t, r._a, r, e);
}
function Mt(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var q = 0, ce = 1, ne = 2, z = 3, Q = 4, fe = 5, Ce = 6, ba = 7, Ca = 8;
v("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? se(e, 4) : "+" + e;
});
v(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
v(0, ["YYYY", 4], 0, "year");
v(0, ["YYYYY", 5], 0, "year");
v(0, ["YYYYYY", 6, !0], 0, "year");
_("Y", kt);
_("YY", U, $);
_("YYYY", Sr, kr);
_("YYYYY", wt, yt);
_("YYYYYY", wt, yt);
B(["YYYYY", "YYYYYY"], q);
B("YYYY", function(e, t) {
  t[q] = e.length === 2 ? f.parseTwoDigitYear(e) : A(e);
});
B("YY", function(e, t) {
  t[q] = f.parseTwoDigitYear(e);
});
B("Y", function(e, t) {
  t[q] = parseInt(e, 10);
});
function $e(e) {
  return Mt(e) ? 366 : 365;
}
f.parseTwoDigitYear = function(e) {
  return A(e) + (A(e) > 68 ? 1900 : 2e3);
};
var Bn = Ve("FullYear", !0);
function Ta() {
  return Mt(this.year());
}
function Ve(e, t) {
  return function(r) {
    return r != null ? (Wn(this, e, r), f.updateOffset(this, t), this) : Ze(this, e);
  };
}
function Ze(e, t) {
  if (!e.isValid())
    return NaN;
  var r = e._d, n = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return n ? r.getUTCMilliseconds() : r.getMilliseconds();
    case "Seconds":
      return n ? r.getUTCSeconds() : r.getSeconds();
    case "Minutes":
      return n ? r.getUTCMinutes() : r.getMinutes();
    case "Hours":
      return n ? r.getUTCHours() : r.getHours();
    case "Date":
      return n ? r.getUTCDate() : r.getDate();
    case "Day":
      return n ? r.getUTCDay() : r.getDay();
    case "Month":
      return n ? r.getUTCMonth() : r.getMonth();
    case "FullYear":
      return n ? r.getUTCFullYear() : r.getFullYear();
    default:
      return NaN;
  }
}
function Wn(e, t, r) {
  var n, s, a, i, o;
  if (!(!e.isValid() || isNaN(r))) {
    switch (n = e._d, s = e._isUTC, t) {
      case "Milliseconds":
        return void (s ? n.setUTCMilliseconds(r) : n.setMilliseconds(r));
      case "Seconds":
        return void (s ? n.setUTCSeconds(r) : n.setSeconds(r));
      case "Minutes":
        return void (s ? n.setUTCMinutes(r) : n.setMinutes(r));
      case "Hours":
        return void (s ? n.setUTCHours(r) : n.setHours(r));
      case "Date":
        return void (s ? n.setUTCDate(r) : n.setDate(r));
      // case 'Day': // Not real
      //    return void (isUTC ? d.setUTCDay(value) : d.setDay(value));
      // case 'Month': // Not used because we need to pass two variables
      //     return void (isUTC ? d.setUTCMonth(value) : d.setMonth(value));
      case "FullYear":
        break;
      // See below ...
      default:
        return;
    }
    a = r, i = e.month(), o = e.date(), o = o === 29 && i === 1 && !Mt(a) ? 28 : o, s ? n.setUTCFullYear(a, i, o) : n.setFullYear(a, i, o);
  }
}
function Ya(e) {
  return e = K(e), ie(this[e]) ? this[e]() : this;
}
function Oa(e, t) {
  if (typeof e == "object") {
    e = wr(e);
    var r = va(e), n, s = r.length;
    for (n = 0; n < s; n++)
      this[r[n].unit](e[r[n].unit]);
  } else if (e = K(e), ie(this[e]))
    return this[e](t);
  return this;
}
function Ra(e, t) {
  return (e % t + t) % t;
}
var j;
Array.prototype.indexOf ? j = Array.prototype.indexOf : j = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Dr(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var r = Ra(t, 12);
  return e += (t - r) / 12, r === 1 ? Mt(e) ? 29 : 28 : 31 - r % 7 % 2;
}
v("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
v("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
v("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
_("M", U, Ue);
_("MM", U, $);
_("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
_("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
B(["M", "MM"], function(e, t) {
  t[ce] = A(e) - 1;
});
B(["MMM", "MMMM"], function(e, t, r, n) {
  var s = r._locale.monthsParse(e, n, r._strict);
  s != null ? t[ce] = s : P(r).invalidMonth = e;
});
var xa = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Un = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Vn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Pa = tt, Na = tt;
function Ea(e, t) {
  return e ? X(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Vn).test(t) ? "format" : "standalone"][e.month()] : X(this._months) ? this._months : this._months.standalone;
}
function Aa(e, t) {
  return e ? X(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Vn.test(t) ? "format" : "standalone"][e.month()] : X(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function Ia(e, t, r) {
  var n, s, a, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n)
      a = ae([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(
        a,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[n] = this.months(a, "").toLocaleLowerCase();
  return r ? t === "MMM" ? (s = j.call(this._shortMonthsParse, i), s !== -1 ? s : null) : (s = j.call(this._longMonthsParse, i), s !== -1 ? s : null) : t === "MMM" ? (s = j.call(this._shortMonthsParse, i), s !== -1 ? s : (s = j.call(this._longMonthsParse, i), s !== -1 ? s : null)) : (s = j.call(this._longMonthsParse, i), s !== -1 ? s : (s = j.call(this._shortMonthsParse, i), s !== -1 ? s : null));
}
function La(e, t, r) {
  var n, s, a;
  if (this._monthsParseExact)
    return Ia.call(this, e, t, r);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
    if (s = ae([2e3, n]), r && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp(
      "^" + this.months(s, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[n] = new RegExp(
      "^" + this.monthsShort(s, "").replace(".", "") + "$",
      "i"
    )), !r && !this._monthsParse[n] && (a = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(a.replace(".", ""), "i")), r && t === "MMMM" && this._longMonthsParse[n].test(e))
      return n;
    if (r && t === "MMM" && this._shortMonthsParse[n].test(e))
      return n;
    if (!r && this._monthsParse[n].test(e))
      return n;
  }
}
function Hn(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = A(t);
    else if (t = e.localeData().monthsParse(t), !pe(t))
      return e;
  }
  var r = t, n = e.date();
  return n = n < 29 ? n : Math.min(n, Dr(e.year(), r)), e._isUTC ? e._d.setUTCMonth(r, n) : e._d.setMonth(r, n), e;
}
function jn(e) {
  return e != null ? (Hn(this, e), f.updateOffset(this, !0), this) : Ze(this, "Month");
}
function Fa() {
  return Dr(this.year(), this.month());
}
function Ba(e) {
  return this._monthsParseExact ? (L(this, "_monthsRegex") || zn.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (L(this, "_monthsShortRegex") || (this._monthsShortRegex = Pa), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Wa(e) {
  return this._monthsParseExact ? (L(this, "_monthsRegex") || zn.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (L(this, "_monthsRegex") || (this._monthsRegex = Na), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function zn() {
  function e(l, u) {
    return u.length - l.length;
  }
  var t = [], r = [], n = [], s, a, i, o;
  for (s = 0; s < 12; s++)
    a = ae([2e3, s]), i = he(this.monthsShort(a, "")), o = he(this.months(a, "")), t.push(i), r.push(o), n.push(o), n.push(i);
  t.sort(e), r.sort(e), n.sort(e), this._monthsRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Ua(e, t, r, n, s, a, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, r, n, s, a, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, r, n, s, a, i), o;
}
function Je(e) {
  var t, r;
  return e < 100 && e >= 0 ? (r = Array.prototype.slice.call(arguments), r[0] = e + 400, t = new Date(Date.UTC.apply(null, r)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function ft(e, t, r) {
  var n = 7 + t - r, s = (7 + Je(e, 0, n).getUTCDay() - t) % 7;
  return -s + n - 1;
}
function qn(e, t, r, n, s) {
  var a = (7 + r - n) % 7, i = ft(e, n, s), o = 1 + 7 * (t - 1) + a + i, l, u;
  return o <= 0 ? (l = e - 1, u = $e(l) + o) : o > $e(e) ? (l = e + 1, u = o - $e(e)) : (l = e, u = o), {
    year: l,
    dayOfYear: u
  };
}
function Ke(e, t, r) {
  var n = ft(e.year(), t, r), s = Math.floor((e.dayOfYear() - n - 1) / 7) + 1, a, i;
  return s < 1 ? (i = e.year() - 1, a = s + me(i, t, r)) : s > me(e.year(), t, r) ? (a = s - me(e.year(), t, r), i = e.year() + 1) : (i = e.year(), a = s), {
    week: a,
    year: i
  };
}
function me(e, t, r) {
  var n = ft(e, t, r), s = ft(e + 1, t, r);
  return ($e(e) - n + s) / 7;
}
v("w", ["ww", 2], "wo", "week");
v("W", ["WW", 2], "Wo", "isoWeek");
_("w", U, Ue);
_("ww", U, $);
_("W", U, Ue);
_("WW", U, $);
rt(
  ["w", "ww", "W", "WW"],
  function(e, t, r, n) {
    t[n.substr(0, 1)] = A(e);
  }
);
function Va(e) {
  return Ke(e, this._week.dow, this._week.doy).week;
}
var Ha = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function ja() {
  return this._week.dow;
}
function za() {
  return this._week.doy;
}
function qa(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Ga(e) {
  var t = Ke(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
v("d", 0, "do", "day");
v("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
v("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
v("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
v("e", 0, 0, "weekday");
v("E", 0, 0, "isoWeekday");
_("d", U);
_("e", U);
_("E", U);
_("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
_("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
_("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
rt(["dd", "ddd", "dddd"], function(e, t, r, n) {
  var s = r._locale.weekdaysParse(e, n, r._strict);
  s != null ? t.d = s : P(r).invalidWeekday = e;
});
rt(["d", "e", "E"], function(e, t, r, n) {
  t[n] = A(e);
});
function $a(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Za(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function br(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Ja = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Gn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ka = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Qa = tt, Xa = tt, ei = tt;
function ti(e, t) {
  var r = X(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? br(r, this._week.dow) : e ? r[e.day()] : r;
}
function ri(e) {
  return e === !0 ? br(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function ni(e) {
  return e === !0 ? br(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function si(e, t, r) {
  var n, s, a, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n)
      a = ae([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(
        a,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(
        a,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(a, "").toLocaleLowerCase();
  return r ? t === "dddd" ? (s = j.call(this._weekdaysParse, i), s !== -1 ? s : null) : t === "ddd" ? (s = j.call(this._shortWeekdaysParse, i), s !== -1 ? s : null) : (s = j.call(this._minWeekdaysParse, i), s !== -1 ? s : null) : t === "dddd" ? (s = j.call(this._weekdaysParse, i), s !== -1 || (s = j.call(this._shortWeekdaysParse, i), s !== -1) ? s : (s = j.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : t === "ddd" ? (s = j.call(this._shortWeekdaysParse, i), s !== -1 || (s = j.call(this._weekdaysParse, i), s !== -1) ? s : (s = j.call(this._minWeekdaysParse, i), s !== -1 ? s : null)) : (s = j.call(this._minWeekdaysParse, i), s !== -1 || (s = j.call(this._weekdaysParse, i), s !== -1) ? s : (s = j.call(this._shortWeekdaysParse, i), s !== -1 ? s : null));
}
function ai(e, t, r) {
  var n, s, a;
  if (this._weekdaysParseExact)
    return si.call(this, e, t, r);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
    if (s = ae([2e3, 1]).day(n), r && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp(
      "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[n] = new RegExp(
      "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[n] || (a = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(a.replace(".", ""), "i")), r && t === "dddd" && this._fullWeekdaysParse[n].test(e))
      return n;
    if (r && t === "ddd" && this._shortWeekdaysParse[n].test(e))
      return n;
    if (r && t === "dd" && this._minWeekdaysParse[n].test(e))
      return n;
    if (!r && this._weekdaysParse[n].test(e))
      return n;
  }
}
function ii(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = Ze(this, "Day");
  return e != null ? (e = $a(e, this.localeData()), this.add(e - t, "d")) : t;
}
function oi(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function li(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Za(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function ui(e) {
  return this._weekdaysParseExact ? (L(this, "_weekdaysRegex") || Cr.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (L(this, "_weekdaysRegex") || (this._weekdaysRegex = Qa), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function di(e) {
  return this._weekdaysParseExact ? (L(this, "_weekdaysRegex") || Cr.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (L(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xa), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function ci(e) {
  return this._weekdaysParseExact ? (L(this, "_weekdaysRegex") || Cr.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (L(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ei), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Cr() {
  function e(d, h) {
    return h.length - d.length;
  }
  var t = [], r = [], n = [], s = [], a, i, o, l, u;
  for (a = 0; a < 7; a++)
    i = ae([2e3, 1]).day(a), o = he(this.weekdaysMin(i, "")), l = he(this.weekdaysShort(i, "")), u = he(this.weekdays(i, "")), t.push(o), r.push(l), n.push(u), s.push(o), s.push(l), s.push(u);
  t.sort(e), r.sort(e), n.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Tr() {
  return this.hours() % 12 || 12;
}
function fi() {
  return this.hours() || 24;
}
v("H", ["HH", 2], 0, "hour");
v("h", ["hh", 2], 0, Tr);
v("k", ["kk", 2], 0, fi);
v("hmm", 0, 0, function() {
  return "" + Tr.apply(this) + se(this.minutes(), 2);
});
v("hmmss", 0, 0, function() {
  return "" + Tr.apply(this) + se(this.minutes(), 2) + se(this.seconds(), 2);
});
v("Hmm", 0, 0, function() {
  return "" + this.hours() + se(this.minutes(), 2);
});
v("Hmmss", 0, 0, function() {
  return "" + this.hours() + se(this.minutes(), 2) + se(this.seconds(), 2);
});
function $n(e, t) {
  v(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
$n("a", !0);
$n("A", !1);
function Zn(e, t) {
  return t._meridiemParse;
}
_("a", Zn);
_("A", Zn);
_("H", U, Mr);
_("h", U, Ue);
_("k", U, Ue);
_("HH", U, $);
_("hh", U, $);
_("kk", U, $);
_("hmm", Ln);
_("hmmss", Fn);
_("Hmm", Ln);
_("Hmmss", Fn);
B(["H", "HH"], z);
B(["k", "kk"], function(e, t, r) {
  var n = A(e);
  t[z] = n === 24 ? 0 : n;
});
B(["a", "A"], function(e, t, r) {
  r._isPm = r._locale.isPM(e), r._meridiem = e;
});
B(["h", "hh"], function(e, t, r) {
  t[z] = A(e), P(r).bigHour = !0;
});
B("hmm", function(e, t, r) {
  var n = e.length - 2;
  t[z] = A(e.substr(0, n)), t[Q] = A(e.substr(n)), P(r).bigHour = !0;
});
B("hmmss", function(e, t, r) {
  var n = e.length - 4, s = e.length - 2;
  t[z] = A(e.substr(0, n)), t[Q] = A(e.substr(n, 2)), t[fe] = A(e.substr(s)), P(r).bigHour = !0;
});
B("Hmm", function(e, t, r) {
  var n = e.length - 2;
  t[z] = A(e.substr(0, n)), t[Q] = A(e.substr(n));
});
B("Hmmss", function(e, t, r) {
  var n = e.length - 4, s = e.length - 2;
  t[z] = A(e.substr(0, n)), t[Q] = A(e.substr(n, 2)), t[fe] = A(e.substr(s));
});
function hi(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var mi = /[ap]\.?m?\.?/i, pi = Ve("Hours", !0);
function _i(e, t, r) {
  return e > 11 ? r ? "pm" : "PM" : r ? "am" : "AM";
}
var Jn = {
  calendar: sa,
  longDateFormat: la,
  invalidDate: da,
  ordinal: fa,
  dayOfMonthOrdinalParse: ha,
  relativeTime: pa,
  months: xa,
  monthsShort: Un,
  week: Ha,
  weekdays: Ja,
  weekdaysMin: Ka,
  weekdaysShort: Gn,
  meridiemParse: mi
}, V = {}, je = {}, Qe;
function gi(e, t) {
  var r, n = Math.min(e.length, t.length);
  for (r = 0; r < n; r += 1)
    if (e[r] !== t[r])
      return r;
  return n;
}
function Zr(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function yi(e) {
  for (var t = 0, r, n, s, a; t < e.length; ) {
    for (a = Zr(e[t]).split("-"), r = a.length, n = Zr(e[t + 1]), n = n ? n.split("-") : null; r > 0; ) {
      if (s = Dt(a.slice(0, r).join("-")), s)
        return s;
      if (n && n.length >= r && gi(a, n) >= r - 1)
        break;
      r--;
    }
    t++;
  }
  return Qe;
}
function vi(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function Dt(e) {
  var t = null, r;
  if (V[e] === void 0 && typeof module < "u" && module && module.exports && vi(e))
    try {
      t = Qe._abbr, r = require, r("./locale/" + e), De(t);
    } catch {
      V[e] = null;
    }
  return V[e];
}
function De(e, t) {
  var r;
  return e && (G(t) ? r = ye(e) : r = Yr(e, t), r ? Qe = r : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Qe._abbr;
}
function Yr(e, t) {
  if (t !== null) {
    var r, n = Jn;
    if (t.abbr = e, V[e] != null)
      Nn(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), n = V[e]._config;
    else if (t.parentLocale != null)
      if (V[t.parentLocale] != null)
        n = V[t.parentLocale]._config;
      else if (r = Dt(t.parentLocale), r != null)
        n = r._config;
      else
        return je[t.parentLocale] || (je[t.parentLocale] = []), je[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return V[e] = new yr(lr(n, t)), je[e] && je[e].forEach(function(s) {
      Yr(s.name, s.config);
    }), De(e), V[e];
  } else
    return delete V[e], null;
}
function wi(e, t) {
  if (t != null) {
    var r, n, s = Jn;
    V[e] != null && V[e].parentLocale != null ? V[e].set(lr(V[e]._config, t)) : (n = Dt(e), n != null && (s = n._config), t = lr(s, t), n == null && (t.abbr = e), r = new yr(t), r.parentLocale = V[e], V[e] = r), De(e);
  } else
    V[e] != null && (V[e].parentLocale != null ? (V[e] = V[e].parentLocale, e === De() && De(e)) : V[e] != null && delete V[e]);
  return V[e];
}
function ye(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Qe;
  if (!X(e)) {
    if (t = Dt(e), t)
      return t;
    e = [e];
  }
  return yi(e);
}
function ki() {
  return ur(V);
}
function Or(e) {
  var t, r = e._a;
  return r && P(e).overflow === -2 && (t = r[ce] < 0 || r[ce] > 11 ? ce : r[ne] < 1 || r[ne] > Dr(r[q], r[ce]) ? ne : r[z] < 0 || r[z] > 24 || r[z] === 24 && (r[Q] !== 0 || r[fe] !== 0 || r[Ce] !== 0) ? z : r[Q] < 0 || r[Q] > 59 ? Q : r[fe] < 0 || r[fe] > 59 ? fe : r[Ce] < 0 || r[Ce] > 999 ? Ce : -1, P(e)._overflowDayOfYear && (t < q || t > ne) && (t = ne), P(e)._overflowWeeks && t === -1 && (t = ba), P(e)._overflowWeekday && t === -1 && (t = Ca), P(e).overflow = t), e;
}
var Si = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Mi = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Di = /Z|[+-]\d\d(?::?\d\d)?/, it = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], At = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], bi = /^\/?Date\((-?\d+)/i, Ci = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Ti = {
  UT: 0,
  GMT: 0,
  EDT: -240,
  EST: -300,
  CDT: -300,
  CST: -360,
  MDT: -360,
  MST: -420,
  PDT: -420,
  PST: -480
};
function Kn(e) {
  var t, r, n = e._i, s = Si.exec(n) || Mi.exec(n), a, i, o, l, u = it.length, d = At.length;
  if (s) {
    for (P(e).iso = !0, t = 0, r = u; t < r; t++)
      if (it[t][1].exec(s[1])) {
        i = it[t][0], a = it[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (s[3]) {
      for (t = 0, r = d; t < r; t++)
        if (At[t][1].exec(s[3])) {
          o = (s[2] || " ") + At[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!a && o != null) {
      e._isValid = !1;
      return;
    }
    if (s[4])
      if (Di.exec(s[4]))
        l = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (l || ""), xr(e);
  } else
    e._isValid = !1;
}
function Yi(e, t, r, n, s, a) {
  var i = [
    Oi(e),
    Un.indexOf(t),
    parseInt(r, 10),
    parseInt(n, 10),
    parseInt(s, 10)
  ];
  return a && i.push(parseInt(a, 10)), i;
}
function Oi(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Ri(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function xi(e, t, r) {
  if (e) {
    var n = Gn.indexOf(e), s = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (n !== s)
      return P(r).weekdayMismatch = !0, r._isValid = !1, !1;
  }
  return !0;
}
function Pi(e, t, r) {
  if (e)
    return Ti[e];
  if (t)
    return 0;
  var n = parseInt(r, 10), s = n % 100, a = (n - s) / 100;
  return a * 60 + s;
}
function Qn(e) {
  var t = Ci.exec(Ri(e._i)), r;
  if (t) {
    if (r = Yi(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !xi(t[1], r, e))
      return;
    e._a = r, e._tzm = Pi(t[8], t[9], t[10]), e._d = Je.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), P(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Ni(e) {
  var t = bi.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Kn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Qn(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : f.createFromInputFallback(e);
}
f.createFromInputFallback = J(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Ee(e, t, r) {
  return e ?? t ?? r;
}
function Ei(e) {
  var t = new Date(f.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Rr(e) {
  var t, r, n = [], s, a, i;
  if (!e._d) {
    for (s = Ei(e), e._w && e._a[ne] == null && e._a[ce] == null && Ai(e), e._dayOfYear != null && (i = Ee(e._a[q], s[q]), (e._dayOfYear > $e(i) || e._dayOfYear === 0) && (P(e)._overflowDayOfYear = !0), r = Je(i, 0, e._dayOfYear), e._a[ce] = r.getUTCMonth(), e._a[ne] = r.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = n[t] = s[t];
    for (; t < 7; t++)
      e._a[t] = n[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[z] === 24 && e._a[Q] === 0 && e._a[fe] === 0 && e._a[Ce] === 0 && (e._nextDay = !0, e._a[z] = 0), e._d = (e._useUTC ? Je : Ua).apply(
      null,
      n
    ), a = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[z] = 24), e._w && typeof e._w.d < "u" && e._w.d !== a && (P(e).weekdayMismatch = !0);
  }
}
function Ai(e) {
  var t, r, n, s, a, i, o, l, u;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (a = 1, i = 4, r = Ee(
    t.GG,
    e._a[q],
    Ke(W(), 1, 4).year
  ), n = Ee(t.W, 1), s = Ee(t.E, 1), (s < 1 || s > 7) && (l = !0)) : (a = e._locale._week.dow, i = e._locale._week.doy, u = Ke(W(), a, i), r = Ee(t.gg, e._a[q], u.year), n = Ee(t.w, u.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (l = !0)) : t.e != null ? (s = t.e + a, (t.e < 0 || t.e > 6) && (l = !0)) : s = a), n < 1 || n > me(r, a, i) ? P(e)._overflowWeeks = !0 : l != null ? P(e)._overflowWeekday = !0 : (o = qn(r, n, s, a, i), e._a[q] = o.year, e._dayOfYear = o.dayOfYear);
}
f.ISO_8601 = function() {
};
f.RFC_2822 = function() {
};
function xr(e) {
  if (e._f === f.ISO_8601) {
    Kn(e);
    return;
  }
  if (e._f === f.RFC_2822) {
    Qn(e);
    return;
  }
  e._a = [], P(e).empty = !0;
  var t = "" + e._i, r, n, s, a, i, o = t.length, l = 0, u, d;
  for (s = En(e._f, e._locale).match(vr) || [], d = s.length, r = 0; r < d; r++)
    a = s[r], n = (t.match(Sa(a, e)) || [])[0], n && (i = t.substr(0, t.indexOf(n)), i.length > 0 && P(e).unusedInput.push(i), t = t.slice(
      t.indexOf(n) + n.length
    ), l += n.length), Le[a] ? (n ? P(e).empty = !1 : P(e).unusedTokens.push(a), Da(a, n, e)) : e._strict && !n && P(e).unusedTokens.push(a);
  P(e).charsLeftOver = o - l, t.length > 0 && P(e).unusedInput.push(t), e._a[z] <= 12 && P(e).bigHour === !0 && e._a[z] > 0 && (P(e).bigHour = void 0), P(e).parsedDateParts = e._a.slice(0), P(e).meridiem = e._meridiem, e._a[z] = Ii(
    e._locale,
    e._a[z],
    e._meridiem
  ), u = P(e).era, u !== null && (e._a[q] = e._locale.erasConvertYear(u, e._a[q])), Rr(e), Or(e);
}
function Ii(e, t, r) {
  var n;
  return r == null ? t : e.meridiemHour != null ? e.meridiemHour(t, r) : (e.isPM != null && (n = e.isPM(r), n && t < 12 && (t += 12), !n && t === 12 && (t = 0)), t);
}
function Li(e) {
  var t, r, n, s, a, i, o = !1, l = e._f.length;
  if (l === 0) {
    P(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (s = 0; s < l; s++)
    a = 0, i = !1, t = gr({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], xr(t), _r(t) && (i = !0), a += P(t).charsLeftOver, a += P(t).unusedTokens.length * 10, P(t).score = a, o ? a < n && (n = a, r = t) : (n == null || a < n || i) && (n = a, r = t, i && (o = !0));
  Se(e, r || t);
}
function Fi(e) {
  if (!e._d) {
    var t = wr(e._i), r = t.day === void 0 ? t.date : t.day;
    e._a = xn(
      [t.year, t.month, r, t.hour, t.minute, t.second, t.millisecond],
      function(n) {
        return n && parseInt(n, 10);
      }
    ), Rr(e);
  }
}
function Bi(e) {
  var t = new et(Or(Xn(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Xn(e) {
  var t = e._i, r = e._f;
  return e._locale = e._locale || ye(e._l), t === null || r === void 0 && t === "" ? gt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ee(t) ? new et(Or(t)) : (Xe(t) ? e._d = t : X(r) ? Li(e) : r ? xr(e) : Wi(e), _r(e) || (e._d = null), e));
}
function Wi(e) {
  var t = e._i;
  G(t) ? e._d = new Date(f.now()) : Xe(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Ni(e) : X(t) ? (e._a = xn(t.slice(0), function(r) {
    return parseInt(r, 10);
  }), Rr(e)) : Te(t) ? Fi(e) : pe(t) ? e._d = new Date(t) : f.createFromInputFallback(e);
}
function es(e, t, r, n, s) {
  var a = {};
  return (t === !0 || t === !1) && (n = t, t = void 0), (r === !0 || r === !1) && (n = r, r = void 0), (Te(e) && pr(e) || X(e) && e.length === 0) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = s, a._l = r, a._i = e, a._f = t, a._strict = n, Bi(a);
}
function W(e, t, r, n) {
  return es(e, t, r, n, !1);
}
var Ui = J(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = W.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : gt();
  }
), Vi = J(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = W.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : gt();
  }
);
function ts(e, t) {
  var r, n;
  if (t.length === 1 && X(t[0]) && (t = t[0]), !t.length)
    return W();
  for (r = t[0], n = 1; n < t.length; ++n)
    (!t[n].isValid() || t[n][e](r)) && (r = t[n]);
  return r;
}
function Hi() {
  var e = [].slice.call(arguments, 0);
  return ts("isBefore", e);
}
function ji() {
  var e = [].slice.call(arguments, 0);
  return ts("isAfter", e);
}
var zi = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, ze = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function qi(e) {
  var t, r = !1, n, s = ze.length;
  for (t in e)
    if (L(e, t) && !(j.call(ze, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (n = 0; n < s; ++n)
    if (e[ze[n]]) {
      if (r)
        return !1;
      parseFloat(e[ze[n]]) !== A(e[ze[n]]) && (r = !0);
    }
  return !0;
}
function Gi() {
  return this._isValid;
}
function $i() {
  return te(NaN);
}
function bt(e) {
  var t = wr(e), r = t.year || 0, n = t.quarter || 0, s = t.month || 0, a = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, l = t.minute || 0, u = t.second || 0, d = t.millisecond || 0;
  this._isValid = qi(t), this._milliseconds = +d + u * 1e3 + // 1000
  l * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +i + a * 7, this._months = +s + n * 3 + r * 12, this._data = {}, this._locale = ye(), this._bubble();
}
function ut(e) {
  return e instanceof bt;
}
function cr(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Zi(e, t, r) {
  var n = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), a = 0, i;
  for (i = 0; i < n; i++)
    A(e[i]) !== A(t[i]) && a++;
  return a + s;
}
function rs(e, t) {
  v(e, 0, 0, function() {
    var r = this.utcOffset(), n = "+";
    return r < 0 && (r = -r, n = "-"), n + se(~~(r / 60), 2) + t + se(~~r % 60, 2);
  });
}
rs("Z", ":");
rs("ZZ", "");
_("Z", St);
_("ZZ", St);
B(["Z", "ZZ"], function(e, t, r) {
  r._useUTC = !0, r._tzm = Pr(St, e);
});
var Ji = /([\+\-]|\d\d)/gi;
function Pr(e, t) {
  var r = (t || "").match(e), n, s, a;
  return r === null ? null : (n = r[r.length - 1] || [], s = (n + "").match(Ji) || ["-", 0, 0], a = +(s[1] * 60) + A(s[2]), a === 0 ? 0 : s[0] === "+" ? a : -a);
}
function Nr(e, t) {
  var r, n;
  return t._isUTC ? (r = t.clone(), n = (ee(e) || Xe(e) ? e.valueOf() : W(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + n), f.updateOffset(r, !1), r) : W(e).local();
}
function fr(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
f.updateOffset = function() {
};
function Ki(e, t, r) {
  var n = this._offset || 0, s;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Pr(St, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !r && (e = e * 60);
    return !this._isUTC && t && (s = fr(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), n !== e && (!t || this._changeInProgress ? as(
      this,
      te(e - n, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, f.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? n : fr(this);
}
function Qi(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Xi(e) {
  return this.utcOffset(0, e);
}
function eo(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(fr(this), "m")), this;
}
function to() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Pr(wa, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function ro(e) {
  return this.isValid() ? (e = e ? W(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function no() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function so() {
  if (!G(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return gr(e, this), e = Xn(e), e._a ? (t = e._isUTC ? ae(e._a) : W(e._a), this._isDSTShifted = this.isValid() && Zi(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function ao() {
  return this.isValid() ? !this._isUTC : !1;
}
function io() {
  return this.isValid() ? this._isUTC : !1;
}
function ns() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var oo = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, lo = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function te(e, t) {
  var r = e, n = null, s, a, i;
  return ut(e) ? r = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : pe(e) || !isNaN(+e) ? (r = {}, t ? r[t] = +e : r.milliseconds = +e) : (n = oo.exec(e)) ? (s = n[1] === "-" ? -1 : 1, r = {
    y: 0,
    d: A(n[ne]) * s,
    h: A(n[z]) * s,
    m: A(n[Q]) * s,
    s: A(n[fe]) * s,
    ms: A(cr(n[Ce] * 1e3)) * s
    // the millisecond decimal point is included in the match
  }) : (n = lo.exec(e)) ? (s = n[1] === "-" ? -1 : 1, r = {
    y: be(n[2], s),
    M: be(n[3], s),
    w: be(n[4], s),
    d: be(n[5], s),
    h: be(n[6], s),
    m: be(n[7], s),
    s: be(n[8], s)
  }) : r == null ? r = {} : typeof r == "object" && ("from" in r || "to" in r) && (i = uo(
    W(r.from),
    W(r.to)
  ), r = {}, r.ms = i.milliseconds, r.M = i.months), a = new bt(r), ut(e) && L(e, "_locale") && (a._locale = e._locale), ut(e) && L(e, "_isValid") && (a._isValid = e._isValid), a;
}
te.fn = bt.prototype;
te.invalid = $i;
function be(e, t) {
  var r = e && parseFloat(e.replace(",", "."));
  return (isNaN(r) ? 0 : r) * t;
}
function Jr(e, t) {
  var r = {};
  return r.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(r.months, "M").isAfter(t) && --r.months, r.milliseconds = +t - +e.clone().add(r.months, "M"), r;
}
function uo(e, t) {
  var r;
  return e.isValid() && t.isValid() ? (t = Nr(t, e), e.isBefore(t) ? r = Jr(e, t) : (r = Jr(t, e), r.milliseconds = -r.milliseconds, r.months = -r.months), r) : { milliseconds: 0, months: 0 };
}
function ss(e, t) {
  return function(r, n) {
    var s, a;
    return n !== null && !isNaN(+n) && (Nn(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), a = r, r = n, n = a), s = te(r, n), as(this, s, e), this;
  };
}
function as(e, t, r, n) {
  var s = t._milliseconds, a = cr(t._days), i = cr(t._months);
  e.isValid() && (n = n ?? !0, i && Hn(e, Ze(e, "Month") + i * r), a && Wn(e, "Date", Ze(e, "Date") + a * r), s && e._d.setTime(e._d.valueOf() + s * r), n && f.updateOffset(e, a || i));
}
var co = ss(1, "add"), fo = ss(-1, "subtract");
function is(e) {
  return typeof e == "string" || e instanceof String;
}
function ho(e) {
  return ee(e) || Xe(e) || is(e) || pe(e) || po(e) || mo(e) || e === null || e === void 0;
}
function mo(e) {
  var t = Te(e) && !pr(e), r = !1, n = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], s, a, i = n.length;
  for (s = 0; s < i; s += 1)
    a = n[s], r = r || L(e, a);
  return t && r;
}
function po(e) {
  var t = X(e), r = !1;
  return t && (r = e.filter(function(n) {
    return !pe(n) && is(e);
  }).length === 0), t && r;
}
function _o(e) {
  var t = Te(e) && !pr(e), r = !1, n = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], s, a;
  for (s = 0; s < n.length; s += 1)
    a = n[s], r = r || L(e, a);
  return t && r;
}
function go(e, t) {
  var r = e.diff(t, "days", !0);
  return r < -6 ? "sameElse" : r < -1 ? "lastWeek" : r < 0 ? "lastDay" : r < 1 ? "sameDay" : r < 2 ? "nextDay" : r < 7 ? "nextWeek" : "sameElse";
}
function yo(e, t) {
  arguments.length === 1 && (arguments[0] ? ho(arguments[0]) ? (e = arguments[0], t = void 0) : _o(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var r = e || W(), n = Nr(r, this).startOf("day"), s = f.calendarFormat(this, n) || "sameElse", a = t && (ie(t[s]) ? t[s].call(this, r) : t[s]);
  return this.format(
    a || this.localeData().calendar(s, this, W(r))
  );
}
function vo() {
  return new et(this);
}
function wo(e, t) {
  var r = ee(e) ? e : W(e);
  return this.isValid() && r.isValid() ? (t = K(t) || "millisecond", t === "millisecond" ? this.valueOf() > r.valueOf() : r.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function ko(e, t) {
  var r = ee(e) ? e : W(e);
  return this.isValid() && r.isValid() ? (t = K(t) || "millisecond", t === "millisecond" ? this.valueOf() < r.valueOf() : this.clone().endOf(t).valueOf() < r.valueOf()) : !1;
}
function So(e, t, r, n) {
  var s = ee(e) ? e : W(e), a = ee(t) ? t : W(t);
  return this.isValid() && s.isValid() && a.isValid() ? (n = n || "()", (n[0] === "(" ? this.isAfter(s, r) : !this.isBefore(s, r)) && (n[1] === ")" ? this.isBefore(a, r) : !this.isAfter(a, r))) : !1;
}
function Mo(e, t) {
  var r = ee(e) ? e : W(e), n;
  return this.isValid() && r.isValid() ? (t = K(t) || "millisecond", t === "millisecond" ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1;
}
function Do(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function bo(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Co(e, t, r) {
  var n, s, a;
  if (!this.isValid())
    return NaN;
  if (n = Nr(e, this), !n.isValid())
    return NaN;
  switch (s = (n.utcOffset() - this.utcOffset()) * 6e4, t = K(t), t) {
    case "year":
      a = dt(this, n) / 12;
      break;
    case "month":
      a = dt(this, n);
      break;
    case "quarter":
      a = dt(this, n) / 3;
      break;
    case "second":
      a = (this - n) / 1e3;
      break;
    // 1000
    case "minute":
      a = (this - n) / 6e4;
      break;
    // 1000 * 60
    case "hour":
      a = (this - n) / 36e5;
      break;
    // 1000 * 60 * 60
    case "day":
      a = (this - n - s) / 864e5;
      break;
    // 1000 * 60 * 60 * 24, negate dst
    case "week":
      a = (this - n - s) / 6048e5;
      break;
    // 1000 * 60 * 60 * 24 * 7, negate dst
    default:
      a = this - n;
  }
  return r ? a : Z(a);
}
function dt(e, t) {
  if (e.date() < t.date())
    return -dt(t, e);
  var r = (t.year() - e.year()) * 12 + (t.month() - e.month()), n = e.clone().add(r, "months"), s, a;
  return t - n < 0 ? (s = e.clone().add(r - 1, "months"), a = (t - n) / (n - s)) : (s = e.clone().add(r + 1, "months"), a = (t - n) / (s - n)), -(r + a) || 0;
}
f.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
f.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function To() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Yo(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, r = t ? this.clone().utc() : this;
  return r.year() < 0 || r.year() > 9999 ? lt(
    r,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : ie(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", lt(r, "Z")) : lt(
    r,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Oo() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", r, n, s, a;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), r = "[" + e + '("]', n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", a = t + '[")]', this.format(r + n + s + a);
}
function Ro(e) {
  e || (e = this.isUtc() ? f.defaultFormatUtc : f.defaultFormat);
  var t = lt(this, e);
  return this.localeData().postformat(t);
}
function xo(e, t) {
  return this.isValid() && (ee(e) && e.isValid() || W(e).isValid()) ? te({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Po(e) {
  return this.from(W(), e);
}
function No(e, t) {
  return this.isValid() && (ee(e) && e.isValid() || W(e).isValid()) ? te({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Eo(e) {
  return this.to(W(), e);
}
function os(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = ye(e), t != null && (this._locale = t), this);
}
var ls = J(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function us() {
  return this._locale;
}
var ht = 1e3, Fe = 60 * ht, mt = 60 * Fe, ds = (365 * 400 + 97) * 24 * mt;
function Be(e, t) {
  return (e % t + t) % t;
}
function cs(e, t, r) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, r) - ds : new Date(e, t, r).valueOf();
}
function fs(e, t, r) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, r) - ds : Date.UTC(e, t, r);
}
function Ao(e) {
  var t, r;
  if (e = K(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? fs : cs, e) {
    case "year":
      t = r(this.year(), 0, 1);
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = r(this.year(), this.month(), 1);
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= Be(
        t + (this._isUTC ? 0 : this.utcOffset() * Fe),
        mt
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= Be(t, Fe);
      break;
    case "second":
      t = this._d.valueOf(), t -= Be(t, ht);
      break;
  }
  return this._d.setTime(t), f.updateOffset(this, !0), this;
}
function Io(e) {
  var t, r;
  if (e = K(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (r = this._isUTC ? fs : cs, e) {
    case "year":
      t = r(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = r(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = r(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = r(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = r(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = r(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += mt - Be(
        t + (this._isUTC ? 0 : this.utcOffset() * Fe),
        mt
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Fe - Be(t, Fe) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += ht - Be(t, ht) - 1;
      break;
  }
  return this._d.setTime(t), f.updateOffset(this, !0), this;
}
function Lo() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Fo() {
  return Math.floor(this.valueOf() / 1e3);
}
function Bo() {
  return new Date(this.valueOf());
}
function Wo() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function Uo() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function Vo() {
  return this.isValid() ? this.toISOString() : null;
}
function Ho() {
  return _r(this);
}
function jo() {
  return Se({}, P(this));
}
function zo() {
  return P(this).overflow;
}
function qo() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
v("N", 0, 0, "eraAbbr");
v("NN", 0, 0, "eraAbbr");
v("NNN", 0, 0, "eraAbbr");
v("NNNN", 0, 0, "eraName");
v("NNNNN", 0, 0, "eraNarrow");
v("y", ["y", 1], "yo", "eraYear");
v("y", ["yy", 2], 0, "eraYear");
v("y", ["yyy", 3], 0, "eraYear");
v("y", ["yyyy", 4], 0, "eraYear");
_("N", Er);
_("NN", Er);
_("NNN", Er);
_("NNNN", nl);
_("NNNNN", sl);
B(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, r, n) {
    var s = r._locale.erasParse(e, n, r._strict);
    s ? P(r).era = s : P(r).invalidEra = e;
  }
);
_("y", We);
_("yy", We);
_("yyy", We);
_("yyyy", We);
_("yo", al);
B(["y", "yy", "yyy", "yyyy"], q);
B(["yo"], function(e, t, r, n) {
  var s;
  r._locale._eraYearOrdinalRegex && (s = e.match(r._locale._eraYearOrdinalRegex)), r._locale.eraYearOrdinalParse ? t[q] = r._locale.eraYearOrdinalParse(e, s) : t[q] = parseInt(e, 10);
});
function Go(e, t) {
  var r, n, s, a = this._eras || ye("en")._eras;
  for (r = 0, n = a.length; r < n; ++r) {
    switch (typeof a[r].since) {
      case "string":
        s = f(a[r].since).startOf("day"), a[r].since = s.valueOf();
        break;
    }
    switch (typeof a[r].until) {
      case "undefined":
        a[r].until = 1 / 0;
        break;
      case "string":
        s = f(a[r].until).startOf("day").valueOf(), a[r].until = s.valueOf();
        break;
    }
  }
  return a;
}
function $o(e, t, r) {
  var n, s, a = this.eras(), i, o, l;
  for (e = e.toUpperCase(), n = 0, s = a.length; n < s; ++n)
    if (i = a[n].name.toUpperCase(), o = a[n].abbr.toUpperCase(), l = a[n].narrow.toUpperCase(), r)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return a[n];
          break;
        case "NNNN":
          if (i === e)
            return a[n];
          break;
        case "NNNNN":
          if (l === e)
            return a[n];
          break;
      }
    else if ([i, o, l].indexOf(e) >= 0)
      return a[n];
}
function Zo(e, t) {
  var r = e.since <= e.until ? 1 : -1;
  return t === void 0 ? f(e.since).year() : f(e.since).year() + (t - e.offset) * r;
}
function Jo() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].name;
  return "";
}
function Ko() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].narrow;
  return "";
}
function Qo() {
  var e, t, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return n[e].abbr;
  return "";
}
function Xo() {
  var e, t, r, n, s = this.localeData().eras();
  for (e = 0, t = s.length; e < t; ++e)
    if (r = s[e].since <= s[e].until ? 1 : -1, n = this.clone().startOf("day").valueOf(), s[e].since <= n && n <= s[e].until || s[e].until <= n && n <= s[e].since)
      return (this.year() - f(s[e].since).year()) * r + s[e].offset;
  return this.year();
}
function el(e) {
  return L(this, "_erasNameRegex") || Ar.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function tl(e) {
  return L(this, "_erasAbbrRegex") || Ar.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function rl(e) {
  return L(this, "_erasNarrowRegex") || Ar.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function Er(e, t) {
  return t.erasAbbrRegex(e);
}
function nl(e, t) {
  return t.erasNameRegex(e);
}
function sl(e, t) {
  return t.erasNarrowRegex(e);
}
function al(e, t) {
  return t._eraYearOrdinalRegex || We;
}
function Ar() {
  var e = [], t = [], r = [], n = [], s, a, i, o, l, u = this.eras();
  for (s = 0, a = u.length; s < a; ++s)
    i = he(u[s].name), o = he(u[s].abbr), l = he(u[s].narrow), t.push(i), e.push(o), r.push(l), n.push(i), n.push(o), n.push(l);
  this._erasRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  );
}
v(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
v(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Ct(e, t) {
  v(0, [e, e.length], 0, t);
}
Ct("gggg", "weekYear");
Ct("ggggg", "weekYear");
Ct("GGGG", "isoWeekYear");
Ct("GGGGG", "isoWeekYear");
_("G", kt);
_("g", kt);
_("GG", U, $);
_("gg", U, $);
_("GGGG", Sr, kr);
_("gggg", Sr, kr);
_("GGGGG", wt, yt);
_("ggggg", wt, yt);
rt(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, r, n) {
    t[n.substr(0, 2)] = A(e);
  }
);
rt(["gg", "GG"], function(e, t, r, n) {
  t[n] = f.parseTwoDigitYear(e);
});
function il(e) {
  return hs.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function ol(e) {
  return hs.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function ll() {
  return me(this.year(), 1, 4);
}
function ul() {
  return me(this.isoWeekYear(), 1, 4);
}
function dl() {
  var e = this.localeData()._week;
  return me(this.year(), e.dow, e.doy);
}
function cl() {
  var e = this.localeData()._week;
  return me(this.weekYear(), e.dow, e.doy);
}
function hs(e, t, r, n, s) {
  var a;
  return e == null ? Ke(this, n, s).year : (a = me(e, n, s), t > a && (t = a), fl.call(this, e, t, r, n, s));
}
function fl(e, t, r, n, s) {
  var a = qn(e, t, r, n, s), i = Je(a.year, 0, a.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
v("Q", 0, "Qo", "quarter");
_("Q", An);
B("Q", function(e, t) {
  t[ce] = (A(e) - 1) * 3;
});
function hl(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
v("D", ["DD", 2], "Do", "date");
_("D", U, Ue);
_("DD", U, $);
_("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
B(["D", "DD"], ne);
B("Do", function(e, t) {
  t[ne] = A(e.match(U)[0]);
});
var ms = Ve("Date", !0);
v("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
_("DDD", vt);
_("DDDD", In);
B(["DDD", "DDDD"], function(e, t, r) {
  r._dayOfYear = A(e);
});
function ml(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
v("m", ["mm", 2], 0, "minute");
_("m", U, Mr);
_("mm", U, $);
B(["m", "mm"], Q);
var pl = Ve("Minutes", !1);
v("s", ["ss", 2], 0, "second");
_("s", U, Mr);
_("ss", U, $);
B(["s", "ss"], fe);
var _l = Ve("Seconds", !1);
v("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
v(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
v(0, ["SSS", 3], 0, "millisecond");
v(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
v(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
v(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
v(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
v(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
v(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
_("S", vt, An);
_("SS", vt, $);
_("SSS", vt, In);
var Me, ps;
for (Me = "SSSS"; Me.length <= 9; Me += "S")
  _(Me, We);
function gl(e, t) {
  t[Ce] = A(("0." + e) * 1e3);
}
for (Me = "S"; Me.length <= 9; Me += "S")
  B(Me, gl);
ps = Ve("Milliseconds", !1);
v("z", 0, 0, "zoneAbbr");
v("zz", 0, 0, "zoneName");
function yl() {
  return this._isUTC ? "UTC" : "";
}
function vl() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var c = et.prototype;
c.add = co;
c.calendar = yo;
c.clone = vo;
c.diff = Co;
c.endOf = Io;
c.format = Ro;
c.from = xo;
c.fromNow = Po;
c.to = No;
c.toNow = Eo;
c.get = Ya;
c.invalidAt = zo;
c.isAfter = wo;
c.isBefore = ko;
c.isBetween = So;
c.isSame = Mo;
c.isSameOrAfter = Do;
c.isSameOrBefore = bo;
c.isValid = Ho;
c.lang = ls;
c.locale = os;
c.localeData = us;
c.max = Vi;
c.min = Ui;
c.parsingFlags = jo;
c.set = Oa;
c.startOf = Ao;
c.subtract = fo;
c.toArray = Wo;
c.toObject = Uo;
c.toDate = Bo;
c.toISOString = Yo;
c.inspect = Oo;
typeof Symbol < "u" && Symbol.for != null && (c[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
c.toJSON = Vo;
c.toString = To;
c.unix = Fo;
c.valueOf = Lo;
c.creationData = qo;
c.eraName = Jo;
c.eraNarrow = Ko;
c.eraAbbr = Qo;
c.eraYear = Xo;
c.year = Bn;
c.isLeapYear = Ta;
c.weekYear = il;
c.isoWeekYear = ol;
c.quarter = c.quarters = hl;
c.month = jn;
c.daysInMonth = Fa;
c.week = c.weeks = qa;
c.isoWeek = c.isoWeeks = Ga;
c.weeksInYear = dl;
c.weeksInWeekYear = cl;
c.isoWeeksInYear = ll;
c.isoWeeksInISOWeekYear = ul;
c.date = ms;
c.day = c.days = ii;
c.weekday = oi;
c.isoWeekday = li;
c.dayOfYear = ml;
c.hour = c.hours = pi;
c.minute = c.minutes = pl;
c.second = c.seconds = _l;
c.millisecond = c.milliseconds = ps;
c.utcOffset = Ki;
c.utc = Xi;
c.local = eo;
c.parseZone = to;
c.hasAlignedHourOffset = ro;
c.isDST = no;
c.isLocal = ao;
c.isUtcOffset = io;
c.isUtc = ns;
c.isUTC = ns;
c.zoneAbbr = yl;
c.zoneName = vl;
c.dates = J(
  "dates accessor is deprecated. Use date instead.",
  ms
);
c.months = J(
  "months accessor is deprecated. Use month instead",
  jn
);
c.years = J(
  "years accessor is deprecated. Use year instead",
  Bn
);
c.zone = J(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Qi
);
c.isDSTShifted = J(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  so
);
function wl(e) {
  return W(e * 1e3);
}
function kl() {
  return W.apply(null, arguments).parseZone();
}
function _s(e) {
  return e;
}
var F = yr.prototype;
F.calendar = aa;
F.longDateFormat = ua;
F.invalidDate = ca;
F.ordinal = ma;
F.preparse = _s;
F.postformat = _s;
F.relativeTime = _a;
F.pastFuture = ga;
F.set = na;
F.eras = Go;
F.erasParse = $o;
F.erasConvertYear = Zo;
F.erasAbbrRegex = tl;
F.erasNameRegex = el;
F.erasNarrowRegex = rl;
F.months = Ea;
F.monthsShort = Aa;
F.monthsParse = La;
F.monthsRegex = Wa;
F.monthsShortRegex = Ba;
F.week = Va;
F.firstDayOfYear = za;
F.firstDayOfWeek = ja;
F.weekdays = ti;
F.weekdaysMin = ni;
F.weekdaysShort = ri;
F.weekdaysParse = ai;
F.weekdaysRegex = ui;
F.weekdaysShortRegex = di;
F.weekdaysMinRegex = ci;
F.isPM = hi;
F.meridiem = _i;
function pt(e, t, r, n) {
  var s = ye(), a = ae().set(n, t);
  return s[r](a, e);
}
function gs(e, t, r) {
  if (pe(e) && (t = e, e = void 0), e = e || "", t != null)
    return pt(e, t, r, "month");
  var n, s = [];
  for (n = 0; n < 12; n++)
    s[n] = pt(e, n, r, "month");
  return s;
}
function Ir(e, t, r, n) {
  typeof e == "boolean" ? (pe(t) && (r = t, t = void 0), t = t || "") : (t = e, r = t, e = !1, pe(t) && (r = t, t = void 0), t = t || "");
  var s = ye(), a = e ? s._week.dow : 0, i, o = [];
  if (r != null)
    return pt(t, (r + a) % 7, n, "day");
  for (i = 0; i < 7; i++)
    o[i] = pt(t, (i + a) % 7, n, "day");
  return o;
}
function Sl(e, t) {
  return gs(e, t, "months");
}
function Ml(e, t) {
  return gs(e, t, "monthsShort");
}
function Dl(e, t, r) {
  return Ir(e, t, r, "weekdays");
}
function bl(e, t, r) {
  return Ir(e, t, r, "weekdaysShort");
}
function Cl(e, t, r) {
  return Ir(e, t, r, "weekdaysMin");
}
De("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, r = A(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + r;
  }
});
f.lang = J(
  "moment.lang is deprecated. Use moment.locale instead.",
  De
);
f.langData = J(
  "moment.langData is deprecated. Use moment.localeData instead.",
  ye
);
var ue = Math.abs;
function Tl() {
  var e = this._data;
  return this._milliseconds = ue(this._milliseconds), this._days = ue(this._days), this._months = ue(this._months), e.milliseconds = ue(e.milliseconds), e.seconds = ue(e.seconds), e.minutes = ue(e.minutes), e.hours = ue(e.hours), e.months = ue(e.months), e.years = ue(e.years), this;
}
function ys(e, t, r, n) {
  var s = te(t, r);
  return e._milliseconds += n * s._milliseconds, e._days += n * s._days, e._months += n * s._months, e._bubble();
}
function Yl(e, t) {
  return ys(this, e, t, 1);
}
function Ol(e, t) {
  return ys(this, e, t, -1);
}
function Kr(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Rl() {
  var e = this._milliseconds, t = this._days, r = this._months, n = this._data, s, a, i, o, l;
  return e >= 0 && t >= 0 && r >= 0 || e <= 0 && t <= 0 && r <= 0 || (e += Kr(hr(r) + t) * 864e5, t = 0, r = 0), n.milliseconds = e % 1e3, s = Z(e / 1e3), n.seconds = s % 60, a = Z(s / 60), n.minutes = a % 60, i = Z(a / 60), n.hours = i % 24, t += Z(i / 24), l = Z(vs(t)), r += l, t -= Kr(hr(l)), o = Z(r / 12), r %= 12, n.days = t, n.months = r, n.years = o, this;
}
function vs(e) {
  return e * 4800 / 146097;
}
function hr(e) {
  return e * 146097 / 4800;
}
function xl(e) {
  if (!this.isValid())
    return NaN;
  var t, r, n = this._milliseconds;
  if (e = K(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + n / 864e5, r = this._months + vs(t), e) {
      case "month":
        return r;
      case "quarter":
        return r / 3;
      case "year":
        return r / 12;
    }
  else
    switch (t = this._days + Math.round(hr(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return t * 24 + n / 36e5;
      case "minute":
        return t * 1440 + n / 6e4;
      case "second":
        return t * 86400 + n / 1e3;
      // Math.floor prevents floating point math errors here
      case "millisecond":
        return Math.floor(t * 864e5) + n;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function ve(e) {
  return function() {
    return this.as(e);
  };
}
var ws = ve("ms"), Pl = ve("s"), Nl = ve("m"), El = ve("h"), Al = ve("d"), Il = ve("w"), Ll = ve("M"), Fl = ve("Q"), Bl = ve("y"), Wl = ws;
function Ul() {
  return te(this);
}
function Vl(e) {
  return e = K(e), this.isValid() ? this[e + "s"]() : NaN;
}
function Ye(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Hl = Ye("milliseconds"), jl = Ye("seconds"), zl = Ye("minutes"), ql = Ye("hours"), Gl = Ye("days"), $l = Ye("months"), Zl = Ye("years");
function Jl() {
  return Z(this.days() / 7);
}
var de = Math.round, Ae = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Kl(e, t, r, n, s) {
  return s.relativeTime(t || 1, !!r, e, n);
}
function Ql(e, t, r, n) {
  var s = te(e).abs(), a = de(s.as("s")), i = de(s.as("m")), o = de(s.as("h")), l = de(s.as("d")), u = de(s.as("M")), d = de(s.as("w")), h = de(s.as("y")), p = a <= r.ss && ["s", a] || a < r.s && ["ss", a] || i <= 1 && ["m"] || i < r.m && ["mm", i] || o <= 1 && ["h"] || o < r.h && ["hh", o] || l <= 1 && ["d"] || l < r.d && ["dd", l];
  return r.w != null && (p = p || d <= 1 && ["w"] || d < r.w && ["ww", d]), p = p || u <= 1 && ["M"] || u < r.M && ["MM", u] || h <= 1 && ["y"] || ["yy", h], p[2] = t, p[3] = +e > 0, p[4] = n, Kl.apply(null, p);
}
function Xl(e) {
  return e === void 0 ? de : typeof e == "function" ? (de = e, !0) : !1;
}
function eu(e, t) {
  return Ae[e] === void 0 ? !1 : t === void 0 ? Ae[e] : (Ae[e] = t, e === "s" && (Ae.ss = t - 1), !0);
}
function tu(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var r = !1, n = Ae, s, a;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (r = e), typeof t == "object" && (n = Object.assign({}, Ae, t), t.s != null && t.ss == null && (n.ss = t.s - 1)), s = this.localeData(), a = Ql(this, !r, n, s), r && (a = s.pastFuture(+this, a)), s.postformat(a);
}
var It = Math.abs;
function Pe(e) {
  return (e > 0) - (e < 0) || +e;
}
function Tt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = It(this._milliseconds) / 1e3, t = It(this._days), r = It(this._months), n, s, a, i, o = this.asSeconds(), l, u, d, h;
  return o ? (n = Z(e / 60), s = Z(n / 60), e %= 60, n %= 60, a = Z(r / 12), r %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = o < 0 ? "-" : "", u = Pe(this._months) !== Pe(o) ? "-" : "", d = Pe(this._days) !== Pe(o) ? "-" : "", h = Pe(this._milliseconds) !== Pe(o) ? "-" : "", l + "P" + (a ? u + a + "Y" : "") + (r ? u + r + "M" : "") + (t ? d + t + "D" : "") + (s || n || e ? "T" : "") + (s ? h + s + "H" : "") + (n ? h + n + "M" : "") + (e ? h + i + "S" : "")) : "P0D";
}
var I = bt.prototype;
I.isValid = Gi;
I.abs = Tl;
I.add = Yl;
I.subtract = Ol;
I.as = xl;
I.asMilliseconds = ws;
I.asSeconds = Pl;
I.asMinutes = Nl;
I.asHours = El;
I.asDays = Al;
I.asWeeks = Il;
I.asMonths = Ll;
I.asQuarters = Fl;
I.asYears = Bl;
I.valueOf = Wl;
I._bubble = Rl;
I.clone = Ul;
I.get = Vl;
I.milliseconds = Hl;
I.seconds = jl;
I.minutes = zl;
I.hours = ql;
I.days = Gl;
I.weeks = Jl;
I.months = $l;
I.years = Zl;
I.humanize = tu;
I.toISOString = Tt;
I.toString = Tt;
I.toJSON = Tt;
I.locale = os;
I.localeData = us;
I.toIsoString = J(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Tt
);
I.lang = ls;
v("X", 0, 0, "unix");
v("x", 0, 0, "valueOf");
_("x", kt);
_("X", ka);
B("X", function(e, t, r) {
  r._d = new Date(parseFloat(e) * 1e3);
});
B("x", function(e, t, r) {
  r._d = new Date(A(e));
});
//! moment.js
f.version = "2.30.1";
ta(W);
f.fn = c;
f.min = Hi;
f.max = ji;
f.now = zi;
f.utc = ae;
f.unix = wl;
f.months = Sl;
f.isDate = Xe;
f.locale = De;
f.invalid = gt;
f.duration = te;
f.isMoment = ee;
f.weekdays = Dl;
f.parseZone = kl;
f.localeData = ye;
f.isDuration = ut;
f.monthsShort = Ml;
f.weekdaysMin = Cl;
f.defineLocale = Yr;
f.updateLocale = wi;
f.locales = ki;
f.weekdaysShort = bl;
f.normalizeUnits = K;
f.relativeTimeRounding = Xl;
f.relativeTimeThreshold = eu;
f.calendarFormat = go;
f.prototype = c;
f.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
f.defineLocale("pt-br", {
  months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
    "_"
  ),
  monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
  weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
    "_"
  ),
  weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
  weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
  weekdaysParseExact: !0,
  longDateFormat: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD/MM/YYYY",
    LL: "D [de] MMMM [de] YYYY",
    LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
    LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
  },
  calendar: {
    sameDay: "[Hoje às] LT",
    nextDay: "[Amanhã às] LT",
    nextWeek: "dddd [às] LT",
    lastDay: "[Ontem às] LT",
    lastWeek: function() {
      return this.day() === 0 || this.day() === 6 ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT";
    },
    sameElse: "L"
  },
  relativeTime: {
    future: "em %s",
    past: "há %s",
    s: "poucos segundos",
    ss: "%d segundos",
    m: "um minuto",
    mm: "%d minutos",
    h: "uma hora",
    hh: "%d horas",
    d: "um dia",
    dd: "%d dias",
    M: "um mês",
    MM: "%d meses",
    y: "um ano",
    yy: "%d anos"
  },
  dayOfMonthOrdinalParse: /\d{1,2}º/,
  ordinal: "%dº",
  invalidDate: "Data inválida"
});
const ru = {
  __name: "VDateField",
  props: {
    value: { type: String, default: "" },
    required: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "__/__/____" },
    max: { type: String, default: null },
    locale: { type: String, default: "pt-BR" },
    persistValue: { type: Boolean, default: !1 },
    //true = só altera v-model quando o campo ta vazio ou completo, false = sempre que digitar 1 caractere aplica o valor de emptyValue, quando completa o campo aplica o valor de v-model
    emptyValue: { type: String, default: "" },
    impedirFuturo: { type: Boolean, default: !1 },
    btnLimpar: { type: Boolean, default: !1 }
  },
  emits: ["input"],
  setup(e, { emit: t }) {
    const r = e;
    f.locale("pt-br");
    const n = f(), s = n.format("YYYY-MM-DD"), a = Ie(""), i = Ur(() => [
      (d) => !r.required || !!d || "Insira a data",
      (d) => !d || d.length === 10 || "Complete a data",
      (d) => !d || f(d, "DD/MM/YYYY", !0).isValid() || "Insira uma data válida",
      (d) => !d || !r.impedirFuturo || f(d, "DD/MM/YYYY", !0).isSameOrBefore(n, "day") || "Não utilize datas futuras"
    ]);
    if (ir(a, (d) => {
      if (d.length === 10) {
        const h = f(d, "DD/MM/YYYY", !0);
        if (h.isValid()) return t("input", h.format("YYYY-MM-DD"));
      }
      r.persistValue && d || t("input", r.emptyValue);
    }), r.value) {
      const d = f(r.value, "YYYY-MM-DD", !0);
      a.value = d.isValid() ? d.format("DD/MM/YYYY") : "";
    }
    const o = Ur(() => f(r.value, "YYYY-MM-DD", !0).isValid() ? r.value : s), l = Ie(!1), u = (d) => {
      a.value = f(d, "YYYY-MM-DD", !0).format("DD/MM/YYYY"), l.value = !1;
    };
    return ir(() => r.value, (d) => {
      if (d) {
        const h = f(d, "YYYY-MM-DD", !0);
        h.isValid() && (a.value = h.format("DD/MM/YYYY"));
      }
    }), { __sfc: !0, props: r, emit: t, dataHojeMoment: n, dataHojeIso: s, iptModel: a, iptRules: i, pickerValorInicial: o, pickerShow: l, pickerOnSelect: u, vMaska: On };
  }
};
var nu = function() {
  var t = this, r = t._self._c, n = t._self._setupProxy;
  return r("v-text-field", t._b({ directives: [{ name: "maska", rawName: "v-maska", value: "##/##/####", expression: "'##/##/####'" }], attrs: { type: "tel", rules: n.iptRules, placeholder: t.placeholder, "persistent-placeholder": "" }, scopedSlots: t._u([{ key: "append", fn: function() {
    return [t.btnLimpar && n.props.value ? r("v-btn", { attrs: { icon: "", small: "" }, on: { click: function(s) {
      n.iptModel = "";
    } } }, [r("v-icon", [t._v("mdi-eraser")])], 1) : t._e(), r("v-menu", { attrs: { "min-width": "auto", "offset-y": "", left: "" }, scopedSlots: t._u([{ key: "activator", fn: function({ attrs: s, on: a }) {
      return [r("v-btn", t._g(t._b({ attrs: { icon: "", small: "", color: "primary" } }, "v-btn", s, !1), a), [r("v-icon", [t._v("mdi-calendar-cursor")])], 1)];
    } }]), model: { value: n.pickerShow, callback: function(s) {
      n.pickerShow = s;
    }, expression: "pickerShow" } }, [r("v-date-picker", { attrs: { max: t.impedirFuturo ? n.dataHojeIso : t.max, locale: t.locale, value: n.pickerValorInicial, scrollable: "", "no-title": "" }, on: { input: n.pickerOnSelect } })], 1)];
  }, proxy: !0 }]), model: { value: n.iptModel, callback: function(s) {
    n.iptModel = s;
  }, expression: "iptModel" } }, "v-text-field", t.$attrs, !1));
}, su = [], au = /* @__PURE__ */ ge(
  ru,
  nu,
  su
);
const iu = au.exports;
function ou(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ne = {}, Lt, Qr;
function lu() {
  return Qr || (Qr = 1, Lt = function() {
    return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
  }), Lt;
}
var Ft = {}, ke = {}, Xr;
function Oe() {
  if (Xr) return ke;
  Xr = 1;
  let e;
  const t = [
    0,
    // Not used
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
  ];
  return ke.getSymbolSize = function(n) {
    if (!n) throw new Error('"version" cannot be null or undefined');
    if (n < 1 || n > 40) throw new Error('"version" should be in range from 1 to 40');
    return n * 4 + 17;
  }, ke.getSymbolTotalCodewords = function(n) {
    return t[n];
  }, ke.getBCHDigit = function(r) {
    let n = 0;
    for (; r !== 0; )
      n++, r >>>= 1;
    return n;
  }, ke.setToSJISFunction = function(n) {
    if (typeof n != "function")
      throw new Error('"toSJISFunc" is not a valid function.');
    e = n;
  }, ke.isKanjiModeEnabled = function() {
    return typeof e < "u";
  }, ke.toSJIS = function(n) {
    return e(n);
  }, ke;
}
var Bt = {}, en;
function Lr() {
  return en || (en = 1, (function(e) {
    e.L = { bit: 1 }, e.M = { bit: 0 }, e.Q = { bit: 3 }, e.H = { bit: 2 };
    function t(r) {
      if (typeof r != "string")
        throw new Error("Param is not a string");
      switch (r.toLowerCase()) {
        case "l":
        case "low":
          return e.L;
        case "m":
        case "medium":
          return e.M;
        case "q":
        case "quartile":
          return e.Q;
        case "h":
        case "high":
          return e.H;
        default:
          throw new Error("Unknown EC Level: " + r);
      }
    }
    e.isValid = function(n) {
      return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
    }, e.from = function(n, s) {
      if (e.isValid(n))
        return n;
      try {
        return t(n);
      } catch {
        return s;
      }
    };
  })(Bt)), Bt;
}
var Wt, tn;
function uu() {
  if (tn) return Wt;
  tn = 1;
  function e() {
    this.buffer = [], this.length = 0;
  }
  return e.prototype = {
    get: function(t) {
      const r = Math.floor(t / 8);
      return (this.buffer[r] >>> 7 - t % 8 & 1) === 1;
    },
    put: function(t, r) {
      for (let n = 0; n < r; n++)
        this.putBit((t >>> r - n - 1 & 1) === 1);
    },
    getLengthInBits: function() {
      return this.length;
    },
    putBit: function(t) {
      const r = Math.floor(this.length / 8);
      this.buffer.length <= r && this.buffer.push(0), t && (this.buffer[r] |= 128 >>> this.length % 8), this.length++;
    }
  }, Wt = e, Wt;
}
var Ut, rn;
function du() {
  if (rn) return Ut;
  rn = 1;
  function e(t) {
    if (!t || t < 1)
      throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t);
  }
  return e.prototype.set = function(t, r, n, s) {
    const a = t * this.size + r;
    this.data[a] = n, s && (this.reservedBit[a] = !0);
  }, e.prototype.get = function(t, r) {
    return this.data[t * this.size + r];
  }, e.prototype.xor = function(t, r, n) {
    this.data[t * this.size + r] ^= n;
  }, e.prototype.isReserved = function(t, r) {
    return this.reservedBit[t * this.size + r];
  }, Ut = e, Ut;
}
var Vt = {}, nn;
function cu() {
  return nn || (nn = 1, (function(e) {
    const t = Oe().getSymbolSize;
    e.getRowColCoords = function(n) {
      if (n === 1) return [];
      const s = Math.floor(n / 7) + 2, a = t(n), i = a === 145 ? 26 : Math.ceil((a - 13) / (2 * s - 2)) * 2, o = [a - 7];
      for (let l = 1; l < s - 1; l++)
        o[l] = o[l - 1] - i;
      return o.push(6), o.reverse();
    }, e.getPositions = function(n) {
      const s = [], a = e.getRowColCoords(n), i = a.length;
      for (let o = 0; o < i; o++)
        for (let l = 0; l < i; l++)
          o === 0 && l === 0 || // top-left
          o === 0 && l === i - 1 || // bottom-left
          o === i - 1 && l === 0 || s.push([a[o], a[l]]);
      return s;
    };
  })(Vt)), Vt;
}
var Ht = {}, sn;
function fu() {
  if (sn) return Ht;
  sn = 1;
  const e = Oe().getSymbolSize, t = 7;
  return Ht.getPositions = function(n) {
    const s = e(n);
    return [
      // top-left
      [0, 0],
      // top-right
      [s - t, 0],
      // bottom-left
      [0, s - t]
    ];
  }, Ht;
}
var jt = {}, an;
function hu() {
  return an || (an = 1, (function(e) {
    e.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    const t = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    e.isValid = function(s) {
      return s != null && s !== "" && !isNaN(s) && s >= 0 && s <= 7;
    }, e.from = function(s) {
      return e.isValid(s) ? parseInt(s, 10) : void 0;
    }, e.getPenaltyN1 = function(s) {
      const a = s.size;
      let i = 0, o = 0, l = 0, u = null, d = null;
      for (let h = 0; h < a; h++) {
        o = l = 0, u = d = null;
        for (let p = 0; p < a; p++) {
          let m = s.get(h, p);
          m === u ? o++ : (o >= 5 && (i += t.N1 + (o - 5)), u = m, o = 1), m = s.get(p, h), m === d ? l++ : (l >= 5 && (i += t.N1 + (l - 5)), d = m, l = 1);
        }
        o >= 5 && (i += t.N1 + (o - 5)), l >= 5 && (i += t.N1 + (l - 5));
      }
      return i;
    }, e.getPenaltyN2 = function(s) {
      const a = s.size;
      let i = 0;
      for (let o = 0; o < a - 1; o++)
        for (let l = 0; l < a - 1; l++) {
          const u = s.get(o, l) + s.get(o, l + 1) + s.get(o + 1, l) + s.get(o + 1, l + 1);
          (u === 4 || u === 0) && i++;
        }
      return i * t.N2;
    }, e.getPenaltyN3 = function(s) {
      const a = s.size;
      let i = 0, o = 0, l = 0;
      for (let u = 0; u < a; u++) {
        o = l = 0;
        for (let d = 0; d < a; d++)
          o = o << 1 & 2047 | s.get(u, d), d >= 10 && (o === 1488 || o === 93) && i++, l = l << 1 & 2047 | s.get(d, u), d >= 10 && (l === 1488 || l === 93) && i++;
      }
      return i * t.N3;
    }, e.getPenaltyN4 = function(s) {
      let a = 0;
      const i = s.data.length;
      for (let l = 0; l < i; l++) a += s.data[l];
      return Math.abs(Math.ceil(a * 100 / i / 5) - 10) * t.N4;
    };
    function r(n, s, a) {
      switch (n) {
        case e.Patterns.PATTERN000:
          return (s + a) % 2 === 0;
        case e.Patterns.PATTERN001:
          return s % 2 === 0;
        case e.Patterns.PATTERN010:
          return a % 3 === 0;
        case e.Patterns.PATTERN011:
          return (s + a) % 3 === 0;
        case e.Patterns.PATTERN100:
          return (Math.floor(s / 2) + Math.floor(a / 3)) % 2 === 0;
        case e.Patterns.PATTERN101:
          return s * a % 2 + s * a % 3 === 0;
        case e.Patterns.PATTERN110:
          return (s * a % 2 + s * a % 3) % 2 === 0;
        case e.Patterns.PATTERN111:
          return (s * a % 3 + (s + a) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + n);
      }
    }
    e.applyMask = function(s, a) {
      const i = a.size;
      for (let o = 0; o < i; o++)
        for (let l = 0; l < i; l++)
          a.isReserved(l, o) || a.xor(l, o, r(s, l, o));
    }, e.getBestMask = function(s, a) {
      const i = Object.keys(e.Patterns).length;
      let o = 0, l = 1 / 0;
      for (let u = 0; u < i; u++) {
        a(u), e.applyMask(u, s);
        const d = e.getPenaltyN1(s) + e.getPenaltyN2(s) + e.getPenaltyN3(s) + e.getPenaltyN4(s);
        e.applyMask(u, s), d < l && (l = d, o = u);
      }
      return o;
    };
  })(jt)), jt;
}
var ot = {}, on;
function ks() {
  if (on) return ot;
  on = 1;
  const e = Lr(), t = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
  ], r = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
  ];
  return ot.getBlocksCount = function(s, a) {
    switch (a) {
      case e.L:
        return t[(s - 1) * 4 + 0];
      case e.M:
        return t[(s - 1) * 4 + 1];
      case e.Q:
        return t[(s - 1) * 4 + 2];
      case e.H:
        return t[(s - 1) * 4 + 3];
      default:
        return;
    }
  }, ot.getTotalCodewordsCount = function(s, a) {
    switch (a) {
      case e.L:
        return r[(s - 1) * 4 + 0];
      case e.M:
        return r[(s - 1) * 4 + 1];
      case e.Q:
        return r[(s - 1) * 4 + 2];
      case e.H:
        return r[(s - 1) * 4 + 3];
      default:
        return;
    }
  }, ot;
}
var zt = {}, qe = {}, ln;
function mu() {
  if (ln) return qe;
  ln = 1;
  const e = new Uint8Array(512), t = new Uint8Array(256);
  return (function() {
    let n = 1;
    for (let s = 0; s < 255; s++)
      e[s] = n, t[n] = s, n <<= 1, n & 256 && (n ^= 285);
    for (let s = 255; s < 512; s++)
      e[s] = e[s - 255];
  })(), qe.log = function(n) {
    if (n < 1) throw new Error("log(" + n + ")");
    return t[n];
  }, qe.exp = function(n) {
    return e[n];
  }, qe.mul = function(n, s) {
    return n === 0 || s === 0 ? 0 : e[t[n] + t[s]];
  }, qe;
}
var un;
function pu() {
  return un || (un = 1, (function(e) {
    const t = mu();
    e.mul = function(n, s) {
      const a = new Uint8Array(n.length + s.length - 1);
      for (let i = 0; i < n.length; i++)
        for (let o = 0; o < s.length; o++)
          a[i + o] ^= t.mul(n[i], s[o]);
      return a;
    }, e.mod = function(n, s) {
      let a = new Uint8Array(n);
      for (; a.length - s.length >= 0; ) {
        const i = a[0];
        for (let l = 0; l < s.length; l++)
          a[l] ^= t.mul(s[l], i);
        let o = 0;
        for (; o < a.length && a[o] === 0; ) o++;
        a = a.slice(o);
      }
      return a;
    }, e.generateECPolynomial = function(n) {
      let s = new Uint8Array([1]);
      for (let a = 0; a < n; a++)
        s = e.mul(s, new Uint8Array([1, t.exp(a)]));
      return s;
    };
  })(zt)), zt;
}
var qt, dn;
function _u() {
  if (dn) return qt;
  dn = 1;
  const e = pu();
  function t(r) {
    this.genPoly = void 0, this.degree = r, this.degree && this.initialize(this.degree);
  }
  return t.prototype.initialize = function(n) {
    this.degree = n, this.genPoly = e.generateECPolynomial(this.degree);
  }, t.prototype.encode = function(n) {
    if (!this.genPoly)
      throw new Error("Encoder not initialized");
    const s = new Uint8Array(n.length + this.degree);
    s.set(n);
    const a = e.mod(s, this.genPoly), i = this.degree - a.length;
    if (i > 0) {
      const o = new Uint8Array(this.degree);
      return o.set(a, i), o;
    }
    return a;
  }, qt = t, qt;
}
var Gt = {}, $t = {}, Zt = {}, cn;
function Ss() {
  return cn || (cn = 1, Zt.isValid = function(t) {
    return !isNaN(t) && t >= 1 && t <= 40;
  }), Zt;
}
var re = {}, fn;
function Ms() {
  if (fn) return re;
  fn = 1;
  const e = "[0-9]+", t = "[A-Z $%*+\\-./:]+";
  let r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  r = r.replace(/u/g, "\\u");
  const n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + r + `)(?:.|[\r
]))+`;
  re.KANJI = new RegExp(r, "g"), re.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), re.BYTE = new RegExp(n, "g"), re.NUMERIC = new RegExp(e, "g"), re.ALPHANUMERIC = new RegExp(t, "g");
  const s = new RegExp("^" + r + "$"), a = new RegExp("^" + e + "$"), i = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  return re.testKanji = function(l) {
    return s.test(l);
  }, re.testNumeric = function(l) {
    return a.test(l);
  }, re.testAlphanumeric = function(l) {
    return i.test(l);
  }, re;
}
var hn;
function Re() {
  return hn || (hn = 1, (function(e) {
    const t = Ss(), r = Ms();
    e.NUMERIC = {
      id: "Numeric",
      bit: 1,
      ccBits: [10, 12, 14]
    }, e.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 2,
      ccBits: [9, 11, 13]
    }, e.BYTE = {
      id: "Byte",
      bit: 4,
      ccBits: [8, 16, 16]
    }, e.KANJI = {
      id: "Kanji",
      bit: 8,
      ccBits: [8, 10, 12]
    }, e.MIXED = {
      bit: -1
    }, e.getCharCountIndicator = function(a, i) {
      if (!a.ccBits) throw new Error("Invalid mode: " + a);
      if (!t.isValid(i))
        throw new Error("Invalid version: " + i);
      return i >= 1 && i < 10 ? a.ccBits[0] : i < 27 ? a.ccBits[1] : a.ccBits[2];
    }, e.getBestModeForData = function(a) {
      return r.testNumeric(a) ? e.NUMERIC : r.testAlphanumeric(a) ? e.ALPHANUMERIC : r.testKanji(a) ? e.KANJI : e.BYTE;
    }, e.toString = function(a) {
      if (a && a.id) return a.id;
      throw new Error("Invalid mode");
    }, e.isValid = function(a) {
      return a && a.bit && a.ccBits;
    };
    function n(s) {
      if (typeof s != "string")
        throw new Error("Param is not a string");
      switch (s.toLowerCase()) {
        case "numeric":
          return e.NUMERIC;
        case "alphanumeric":
          return e.ALPHANUMERIC;
        case "kanji":
          return e.KANJI;
        case "byte":
          return e.BYTE;
        default:
          throw new Error("Unknown mode: " + s);
      }
    }
    e.from = function(a, i) {
      if (e.isValid(a))
        return a;
      try {
        return n(a);
      } catch {
        return i;
      }
    };
  })($t)), $t;
}
var mn;
function gu() {
  return mn || (mn = 1, (function(e) {
    const t = Oe(), r = ks(), n = Lr(), s = Re(), a = Ss(), i = 7973, o = t.getBCHDigit(i);
    function l(p, m, b) {
      for (let C = 1; C <= 40; C++)
        if (m <= e.getCapacity(C, b, p))
          return C;
    }
    function u(p, m) {
      return s.getCharCountIndicator(p, m) + 4;
    }
    function d(p, m) {
      let b = 0;
      return p.forEach(function(C) {
        const T = u(C.mode, m);
        b += T + C.getBitsLength();
      }), b;
    }
    function h(p, m) {
      for (let b = 1; b <= 40; b++)
        if (d(p, b) <= e.getCapacity(b, m, s.MIXED))
          return b;
    }
    e.from = function(m, b) {
      return a.isValid(m) ? parseInt(m, 10) : b;
    }, e.getCapacity = function(m, b, C) {
      if (!a.isValid(m))
        throw new Error("Invalid QR Code version");
      typeof C > "u" && (C = s.BYTE);
      const T = t.getSymbolTotalCodewords(m), y = r.getTotalCodewordsCount(m, b), E = (T - y) * 8;
      if (C === s.MIXED) return E;
      const S = E - u(C, m);
      switch (C) {
        case s.NUMERIC:
          return Math.floor(S / 10 * 3);
        case s.ALPHANUMERIC:
          return Math.floor(S / 11 * 2);
        case s.KANJI:
          return Math.floor(S / 13);
        case s.BYTE:
        default:
          return Math.floor(S / 8);
      }
    }, e.getBestVersionForData = function(m, b) {
      let C;
      const T = n.from(b, n.M);
      if (Array.isArray(m)) {
        if (m.length > 1)
          return h(m, T);
        if (m.length === 0)
          return 1;
        C = m[0];
      } else
        C = m;
      return l(C.mode, C.getLength(), T);
    }, e.getEncodedBits = function(m) {
      if (!a.isValid(m) || m < 7)
        throw new Error("Invalid QR Code version");
      let b = m << 12;
      for (; t.getBCHDigit(b) - o >= 0; )
        b ^= i << t.getBCHDigit(b) - o;
      return m << 12 | b;
    };
  })(Gt)), Gt;
}
var Jt = {}, pn;
function yu() {
  if (pn) return Jt;
  pn = 1;
  const e = Oe(), t = 1335, r = 21522, n = e.getBCHDigit(t);
  return Jt.getEncodedBits = function(a, i) {
    const o = a.bit << 3 | i;
    let l = o << 10;
    for (; e.getBCHDigit(l) - n >= 0; )
      l ^= t << e.getBCHDigit(l) - n;
    return (o << 10 | l) ^ r;
  }, Jt;
}
var Kt = {}, Qt, _n;
function vu() {
  if (_n) return Qt;
  _n = 1;
  const e = Re();
  function t(r) {
    this.mode = e.NUMERIC, this.data = r.toString();
  }
  return t.getBitsLength = function(n) {
    return 10 * Math.floor(n / 3) + (n % 3 ? n % 3 * 3 + 1 : 0);
  }, t.prototype.getLength = function() {
    return this.data.length;
  }, t.prototype.getBitsLength = function() {
    return t.getBitsLength(this.data.length);
  }, t.prototype.write = function(n) {
    let s, a, i;
    for (s = 0; s + 3 <= this.data.length; s += 3)
      a = this.data.substr(s, 3), i = parseInt(a, 10), n.put(i, 10);
    const o = this.data.length - s;
    o > 0 && (a = this.data.substr(s), i = parseInt(a, 10), n.put(i, o * 3 + 1));
  }, Qt = t, Qt;
}
var Xt, gn;
function wu() {
  if (gn) return Xt;
  gn = 1;
  const e = Re(), t = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":"
  ];
  function r(n) {
    this.mode = e.ALPHANUMERIC, this.data = n;
  }
  return r.getBitsLength = function(s) {
    return 11 * Math.floor(s / 2) + 6 * (s % 2);
  }, r.prototype.getLength = function() {
    return this.data.length;
  }, r.prototype.getBitsLength = function() {
    return r.getBitsLength(this.data.length);
  }, r.prototype.write = function(s) {
    let a;
    for (a = 0; a + 2 <= this.data.length; a += 2) {
      let i = t.indexOf(this.data[a]) * 45;
      i += t.indexOf(this.data[a + 1]), s.put(i, 11);
    }
    this.data.length % 2 && s.put(t.indexOf(this.data[a]), 6);
  }, Xt = r, Xt;
}
var er, yn;
function ku() {
  if (yn) return er;
  yn = 1;
  const e = Re();
  function t(r) {
    this.mode = e.BYTE, typeof r == "string" ? this.data = new TextEncoder().encode(r) : this.data = new Uint8Array(r);
  }
  return t.getBitsLength = function(n) {
    return n * 8;
  }, t.prototype.getLength = function() {
    return this.data.length;
  }, t.prototype.getBitsLength = function() {
    return t.getBitsLength(this.data.length);
  }, t.prototype.write = function(r) {
    for (let n = 0, s = this.data.length; n < s; n++)
      r.put(this.data[n], 8);
  }, er = t, er;
}
var tr, vn;
function Su() {
  if (vn) return tr;
  vn = 1;
  const e = Re(), t = Oe();
  function r(n) {
    this.mode = e.KANJI, this.data = n;
  }
  return r.getBitsLength = function(s) {
    return s * 13;
  }, r.prototype.getLength = function() {
    return this.data.length;
  }, r.prototype.getBitsLength = function() {
    return r.getBitsLength(this.data.length);
  }, r.prototype.write = function(n) {
    let s;
    for (s = 0; s < this.data.length; s++) {
      let a = t.toSJIS(this.data[s]);
      if (a >= 33088 && a <= 40956)
        a -= 33088;
      else if (a >= 57408 && a <= 60351)
        a -= 49472;
      else
        throw new Error(
          "Invalid SJIS character: " + this.data[s] + `
Make sure your charset is UTF-8`
        );
      a = (a >>> 8 & 255) * 192 + (a & 255), n.put(a, 13);
    }
  }, tr = r, tr;
}
var rr = { exports: {} }, wn;
function Mu() {
  return wn || (wn = 1, (function(e) {
    var t = {
      single_source_shortest_paths: function(r, n, s) {
        var a = {}, i = {};
        i[n] = 0;
        var o = t.PriorityQueue.make();
        o.push(n, 0);
        for (var l, u, d, h, p, m, b, C, T; !o.empty(); ) {
          l = o.pop(), u = l.value, h = l.cost, p = r[u] || {};
          for (d in p)
            p.hasOwnProperty(d) && (m = p[d], b = h + m, C = i[d], T = typeof i[d] > "u", (T || C > b) && (i[d] = b, o.push(d, b), a[d] = u));
        }
        if (typeof s < "u" && typeof i[s] > "u") {
          var y = ["Could not find a path from ", n, " to ", s, "."].join("");
          throw new Error(y);
        }
        return a;
      },
      extract_shortest_path_from_predecessor_list: function(r, n) {
        for (var s = [], a = n; a; )
          s.push(a), r[a], a = r[a];
        return s.reverse(), s;
      },
      find_path: function(r, n, s) {
        var a = t.single_source_shortest_paths(r, n, s);
        return t.extract_shortest_path_from_predecessor_list(
          a,
          s
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(r) {
          var n = t.PriorityQueue, s = {}, a;
          r = r || {};
          for (a in n)
            n.hasOwnProperty(a) && (s[a] = n[a]);
          return s.queue = [], s.sorter = r.sorter || n.default_sorter, s;
        },
        default_sorter: function(r, n) {
          return r.cost - n.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(r, n) {
          var s = { value: r, cost: n };
          this.queue.push(s), this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    e.exports = t;
  })(rr)), rr.exports;
}
var kn;
function Du() {
  return kn || (kn = 1, (function(e) {
    const t = Re(), r = vu(), n = wu(), s = ku(), a = Su(), i = Ms(), o = Oe(), l = Mu();
    function u(y) {
      return unescape(encodeURIComponent(y)).length;
    }
    function d(y, E, S) {
      const w = [];
      let H;
      for (; (H = y.exec(S)) !== null; )
        w.push({
          data: H[0],
          index: H.index,
          mode: E,
          length: H[0].length
        });
      return w;
    }
    function h(y) {
      const E = d(i.NUMERIC, t.NUMERIC, y), S = d(i.ALPHANUMERIC, t.ALPHANUMERIC, y);
      let w, H;
      return o.isKanjiModeEnabled() ? (w = d(i.BYTE, t.BYTE, y), H = d(i.KANJI, t.KANJI, y)) : (w = d(i.BYTE_KANJI, t.BYTE, y), H = []), E.concat(S, w, H).sort(function(O, Y) {
        return O.index - Y.index;
      }).map(function(O) {
        return {
          data: O.data,
          mode: O.mode,
          length: O.length
        };
      });
    }
    function p(y, E) {
      switch (E) {
        case t.NUMERIC:
          return r.getBitsLength(y);
        case t.ALPHANUMERIC:
          return n.getBitsLength(y);
        case t.KANJI:
          return a.getBitsLength(y);
        case t.BYTE:
          return s.getBitsLength(y);
      }
    }
    function m(y) {
      return y.reduce(function(E, S) {
        const w = E.length - 1 >= 0 ? E[E.length - 1] : null;
        return w && w.mode === S.mode ? (E[E.length - 1].data += S.data, E) : (E.push(S), E);
      }, []);
    }
    function b(y) {
      const E = [];
      for (let S = 0; S < y.length; S++) {
        const w = y[S];
        switch (w.mode) {
          case t.NUMERIC:
            E.push([
              w,
              { data: w.data, mode: t.ALPHANUMERIC, length: w.length },
              { data: w.data, mode: t.BYTE, length: w.length }
            ]);
            break;
          case t.ALPHANUMERIC:
            E.push([
              w,
              { data: w.data, mode: t.BYTE, length: w.length }
            ]);
            break;
          case t.KANJI:
            E.push([
              w,
              { data: w.data, mode: t.BYTE, length: u(w.data) }
            ]);
            break;
          case t.BYTE:
            E.push([
              { data: w.data, mode: t.BYTE, length: u(w.data) }
            ]);
        }
      }
      return E;
    }
    function C(y, E) {
      const S = {}, w = { start: {} };
      let H = ["start"];
      for (let k = 0; k < y.length; k++) {
        const O = y[k], Y = [];
        for (let g = 0; g < O.length; g++) {
          const x = O[g], M = "" + k + g;
          Y.push(M), S[M] = { node: x, lastCount: 0 }, w[M] = {};
          for (let R = 0; R < H.length; R++) {
            const D = H[R];
            S[D] && S[D].node.mode === x.mode ? (w[D][M] = p(S[D].lastCount + x.length, x.mode) - p(S[D].lastCount, x.mode), S[D].lastCount += x.length) : (S[D] && (S[D].lastCount = x.length), w[D][M] = p(x.length, x.mode) + 4 + t.getCharCountIndicator(x.mode, E));
          }
        }
        H = Y;
      }
      for (let k = 0; k < H.length; k++)
        w[H[k]].end = 0;
      return { map: w, table: S };
    }
    function T(y, E) {
      let S;
      const w = t.getBestModeForData(y);
      if (S = t.from(E, w), S !== t.BYTE && S.bit < w.bit)
        throw new Error('"' + y + '" cannot be encoded with mode ' + t.toString(S) + `.
 Suggested mode is: ` + t.toString(w));
      switch (S === t.KANJI && !o.isKanjiModeEnabled() && (S = t.BYTE), S) {
        case t.NUMERIC:
          return new r(y);
        case t.ALPHANUMERIC:
          return new n(y);
        case t.KANJI:
          return new a(y);
        case t.BYTE:
          return new s(y);
      }
    }
    e.fromArray = function(E) {
      return E.reduce(function(S, w) {
        return typeof w == "string" ? S.push(T(w, null)) : w.data && S.push(T(w.data, w.mode)), S;
      }, []);
    }, e.fromString = function(E, S) {
      const w = h(E, o.isKanjiModeEnabled()), H = b(w), k = C(H, S), O = l.find_path(k.map, "start", "end"), Y = [];
      for (let g = 1; g < O.length - 1; g++)
        Y.push(k.table[O[g]].node);
      return e.fromArray(m(Y));
    }, e.rawSplit = function(E) {
      return e.fromArray(
        h(E, o.isKanjiModeEnabled())
      );
    };
  })(Kt)), Kt;
}
var Sn;
function bu() {
  if (Sn) return Ft;
  Sn = 1;
  const e = Oe(), t = Lr(), r = uu(), n = du(), s = cu(), a = fu(), i = hu(), o = ks(), l = _u(), u = gu(), d = yu(), h = Re(), p = Du();
  function m(k, O) {
    const Y = k.size, g = a.getPositions(O);
    for (let x = 0; x < g.length; x++) {
      const M = g[x][0], R = g[x][1];
      for (let D = -1; D <= 7; D++)
        if (!(M + D <= -1 || Y <= M + D))
          for (let N = -1; N <= 7; N++)
            R + N <= -1 || Y <= R + N || (D >= 0 && D <= 6 && (N === 0 || N === 6) || N >= 0 && N <= 6 && (D === 0 || D === 6) || D >= 2 && D <= 4 && N >= 2 && N <= 4 ? k.set(M + D, R + N, !0, !0) : k.set(M + D, R + N, !1, !0));
    }
  }
  function b(k) {
    const O = k.size;
    for (let Y = 8; Y < O - 8; Y++) {
      const g = Y % 2 === 0;
      k.set(Y, 6, g, !0), k.set(6, Y, g, !0);
    }
  }
  function C(k, O) {
    const Y = s.getPositions(O);
    for (let g = 0; g < Y.length; g++) {
      const x = Y[g][0], M = Y[g][1];
      for (let R = -2; R <= 2; R++)
        for (let D = -2; D <= 2; D++)
          R === -2 || R === 2 || D === -2 || D === 2 || R === 0 && D === 0 ? k.set(x + R, M + D, !0, !0) : k.set(x + R, M + D, !1, !0);
    }
  }
  function T(k, O) {
    const Y = k.size, g = u.getEncodedBits(O);
    let x, M, R;
    for (let D = 0; D < 18; D++)
      x = Math.floor(D / 3), M = D % 3 + Y - 8 - 3, R = (g >> D & 1) === 1, k.set(x, M, R, !0), k.set(M, x, R, !0);
  }
  function y(k, O, Y) {
    const g = k.size, x = d.getEncodedBits(O, Y);
    let M, R;
    for (M = 0; M < 15; M++)
      R = (x >> M & 1) === 1, M < 6 ? k.set(M, 8, R, !0) : M < 8 ? k.set(M + 1, 8, R, !0) : k.set(g - 15 + M, 8, R, !0), M < 8 ? k.set(8, g - M - 1, R, !0) : M < 9 ? k.set(8, 15 - M - 1 + 1, R, !0) : k.set(8, 15 - M - 1, R, !0);
    k.set(g - 8, 8, 1, !0);
  }
  function E(k, O) {
    const Y = k.size;
    let g = -1, x = Y - 1, M = 7, R = 0;
    for (let D = Y - 1; D > 0; D -= 2)
      for (D === 6 && D--; ; ) {
        for (let N = 0; N < 2; N++)
          if (!k.isReserved(x, D - N)) {
            let we = !1;
            R < O.length && (we = (O[R] >>> M & 1) === 1), k.set(x, D - N, we), M--, M === -1 && (R++, M = 7);
          }
        if (x += g, x < 0 || Y <= x) {
          x -= g, g = -g;
          break;
        }
      }
  }
  function S(k, O, Y) {
    const g = new r();
    Y.forEach(function(N) {
      g.put(N.mode.bit, 4), g.put(N.getLength(), h.getCharCountIndicator(N.mode, k)), N.write(g);
    });
    const x = e.getSymbolTotalCodewords(k), M = o.getTotalCodewordsCount(k, O), R = (x - M) * 8;
    for (g.getLengthInBits() + 4 <= R && g.put(0, 4); g.getLengthInBits() % 8 !== 0; )
      g.putBit(0);
    const D = (R - g.getLengthInBits()) / 8;
    for (let N = 0; N < D; N++)
      g.put(N % 2 ? 17 : 236, 8);
    return w(g, k, O);
  }
  function w(k, O, Y) {
    const g = e.getSymbolTotalCodewords(O), x = o.getTotalCodewordsCount(O, Y), M = g - x, R = o.getBlocksCount(O, Y), D = g % R, N = R - D, we = Math.floor(g / R), He = Math.floor(M / R), Ts = He + 1, Fr = we - He, Ys = new l(Fr);
    let Yt = 0;
    const nt = new Array(R), Br = new Array(R);
    let Ot = 0;
    const Os = new Uint8Array(k.buffer);
    for (let xe = 0; xe < R; xe++) {
      const xt = xe < N ? He : Ts;
      nt[xe] = Os.slice(Yt, Yt + xt), Br[xe] = Ys.encode(nt[xe]), Yt += xt, Ot = Math.max(Ot, xt);
    }
    const Rt = new Uint8Array(g);
    let Wr = 0, oe, le;
    for (oe = 0; oe < Ot; oe++)
      for (le = 0; le < R; le++)
        oe < nt[le].length && (Rt[Wr++] = nt[le][oe]);
    for (oe = 0; oe < Fr; oe++)
      for (le = 0; le < R; le++)
        Rt[Wr++] = Br[le][oe];
    return Rt;
  }
  function H(k, O, Y, g) {
    let x;
    if (Array.isArray(k))
      x = p.fromArray(k);
    else if (typeof k == "string") {
      let we = O;
      if (!we) {
        const He = p.rawSplit(k);
        we = u.getBestVersionForData(He, Y);
      }
      x = p.fromString(k, we || 40);
    } else
      throw new Error("Invalid data");
    const M = u.getBestVersionForData(x, Y);
    if (!M)
      throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!O)
      O = M;
    else if (O < M)
      throw new Error(
        `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + M + `.
`
      );
    const R = S(O, Y, x), D = e.getSymbolSize(O), N = new n(D);
    return m(N, O), b(N), C(N, O), y(N, Y, 0), O >= 7 && T(N, O), E(N, R), isNaN(g) && (g = i.getBestMask(
      N,
      y.bind(null, N, Y)
    )), i.applyMask(g, N), y(N, Y, g), {
      modules: N,
      version: O,
      errorCorrectionLevel: Y,
      maskPattern: g,
      segments: x
    };
  }
  return Ft.create = function(O, Y) {
    if (typeof O > "u" || O === "")
      throw new Error("No input text");
    let g = t.M, x, M;
    return typeof Y < "u" && (g = t.from(Y.errorCorrectionLevel, t.M), x = u.from(Y.version), M = i.from(Y.maskPattern), Y.toSJISFunc && e.setToSJISFunction(Y.toSJISFunc)), H(O, x, g, M);
  }, Ft;
}
var nr = {}, sr = {}, Mn;
function Ds() {
  return Mn || (Mn = 1, (function(e) {
    function t(r) {
      if (typeof r == "number" && (r = r.toString()), typeof r != "string")
        throw new Error("Color should be defined as hex string");
      let n = r.slice().replace("#", "").split("");
      if (n.length < 3 || n.length === 5 || n.length > 8)
        throw new Error("Invalid hex color: " + r);
      (n.length === 3 || n.length === 4) && (n = Array.prototype.concat.apply([], n.map(function(a) {
        return [a, a];
      }))), n.length === 6 && n.push("F", "F");
      const s = parseInt(n.join(""), 16);
      return {
        r: s >> 24 & 255,
        g: s >> 16 & 255,
        b: s >> 8 & 255,
        a: s & 255,
        hex: "#" + n.slice(0, 6).join("")
      };
    }
    e.getOptions = function(n) {
      n || (n = {}), n.color || (n.color = {});
      const s = typeof n.margin > "u" || n.margin === null || n.margin < 0 ? 4 : n.margin, a = n.width && n.width >= 21 ? n.width : void 0, i = n.scale || 4;
      return {
        width: a,
        scale: a ? 4 : i,
        margin: s,
        color: {
          dark: t(n.color.dark || "#000000ff"),
          light: t(n.color.light || "#ffffffff")
        },
        type: n.type,
        rendererOpts: n.rendererOpts || {}
      };
    }, e.getScale = function(n, s) {
      return s.width && s.width >= n + s.margin * 2 ? s.width / (n + s.margin * 2) : s.scale;
    }, e.getImageWidth = function(n, s) {
      const a = e.getScale(n, s);
      return Math.floor((n + s.margin * 2) * a);
    }, e.qrToImageData = function(n, s, a) {
      const i = s.modules.size, o = s.modules.data, l = e.getScale(i, a), u = Math.floor((i + a.margin * 2) * l), d = a.margin * l, h = [a.color.light, a.color.dark];
      for (let p = 0; p < u; p++)
        for (let m = 0; m < u; m++) {
          let b = (p * u + m) * 4, C = a.color.light;
          if (p >= d && m >= d && p < u - d && m < u - d) {
            const T = Math.floor((p - d) / l), y = Math.floor((m - d) / l);
            C = h[o[T * i + y] ? 1 : 0];
          }
          n[b++] = C.r, n[b++] = C.g, n[b++] = C.b, n[b] = C.a;
        }
    };
  })(sr)), sr;
}
var Dn;
function Cu() {
  return Dn || (Dn = 1, (function(e) {
    const t = Ds();
    function r(s, a, i) {
      s.clearRect(0, 0, a.width, a.height), a.style || (a.style = {}), a.height = i, a.width = i, a.style.height = i + "px", a.style.width = i + "px";
    }
    function n() {
      try {
        return document.createElement("canvas");
      } catch {
        throw new Error("You need to specify a canvas element");
      }
    }
    e.render = function(a, i, o) {
      let l = o, u = i;
      typeof l > "u" && (!i || !i.getContext) && (l = i, i = void 0), i || (u = n()), l = t.getOptions(l);
      const d = t.getImageWidth(a.modules.size, l), h = u.getContext("2d"), p = h.createImageData(d, d);
      return t.qrToImageData(p.data, a, l), r(h, u, d), h.putImageData(p, 0, 0), u;
    }, e.renderToDataURL = function(a, i, o) {
      let l = o;
      typeof l > "u" && (!i || !i.getContext) && (l = i, i = void 0), l || (l = {});
      const u = e.render(a, i, l), d = l.type || "image/png", h = l.rendererOpts || {};
      return u.toDataURL(d, h.quality);
    };
  })(nr)), nr;
}
var ar = {}, bn;
function Tu() {
  if (bn) return ar;
  bn = 1;
  const e = Ds();
  function t(s, a) {
    const i = s.a / 255, o = a + '="' + s.hex + '"';
    return i < 1 ? o + " " + a + '-opacity="' + i.toFixed(2).slice(1) + '"' : o;
  }
  function r(s, a, i) {
    let o = s + a;
    return typeof i < "u" && (o += " " + i), o;
  }
  function n(s, a, i) {
    let o = "", l = 0, u = !1, d = 0;
    for (let h = 0; h < s.length; h++) {
      const p = Math.floor(h % a), m = Math.floor(h / a);
      !p && !u && (u = !0), s[h] ? (d++, h > 0 && p > 0 && s[h - 1] || (o += u ? r("M", p + i, 0.5 + m + i) : r("m", l, 0), l = 0, u = !1), p + 1 < a && s[h + 1] || (o += r("h", d), d = 0)) : l++;
    }
    return o;
  }
  return ar.render = function(a, i, o) {
    const l = e.getOptions(i), u = a.modules.size, d = a.modules.data, h = u + l.margin * 2, p = l.color.light.a ? "<path " + t(l.color.light, "fill") + ' d="M0 0h' + h + "v" + h + 'H0z"/>' : "", m = "<path " + t(l.color.dark, "stroke") + ' d="' + n(d, u, l.margin) + '"/>', b = 'viewBox="0 0 ' + h + " " + h + '"', T = '<svg xmlns="http://www.w3.org/2000/svg" ' + (l.width ? 'width="' + l.width + '" height="' + l.width + '" ' : "") + b + ' shape-rendering="crispEdges">' + p + m + `</svg>
`;
    return typeof o == "function" && o(null, T), T;
  }, ar;
}
var Cn;
function Yu() {
  if (Cn) return Ne;
  Cn = 1;
  const e = lu(), t = bu(), r = Cu(), n = Tu();
  function s(a, i, o, l, u) {
    const d = [].slice.call(arguments, 1), h = d.length, p = typeof d[h - 1] == "function";
    if (!p && !e())
      throw new Error("Callback required as last argument");
    if (p) {
      if (h < 2)
        throw new Error("Too few arguments provided");
      h === 2 ? (u = o, o = i, i = l = void 0) : h === 3 && (i.getContext && typeof u > "u" ? (u = l, l = void 0) : (u = l, l = o, o = i, i = void 0));
    } else {
      if (h < 1)
        throw new Error("Too few arguments provided");
      return h === 1 ? (o = i, i = l = void 0) : h === 2 && !i.getContext && (l = o, o = i, i = void 0), new Promise(function(m, b) {
        try {
          const C = t.create(o, l);
          m(a(C, i, l));
        } catch (C) {
          b(C);
        }
      });
    }
    try {
      const m = t.create(o, l);
      u(null, a(m, i, l));
    } catch (m) {
      u(m);
    }
  }
  return Ne.create = t.create, Ne.toCanvas = s.bind(null, r.render), Ne.toDataURL = s.bind(null, r.renderToDataURL), Ne.toString = s.bind(null, function(a, i, o) {
    return n.render(a, o);
  }), Ne;
}
var Ou = Yu();
const Ru = /* @__PURE__ */ ou(Ou), xu = {
  __name: "VDialogQRCode",
  props: {
    titulo: { type: String, default: "QR Code" },
    btnCopiar: { type: Boolean, default: !1 },
    btnCopiarLabel: { type: String, default: "Copiar" },
    btnAbrir: { type: Boolean, default: !1 },
    btnAbrirLabel: { type: String, default: "Abrir" },
    width: { type: String, default: "24rem" }
  },
  setup(e, { expose: t }) {
    const r = Ie(!1), n = Ie(""), s = Ie(""), a = async (u) => {
      s.value = u ? await Ru.toDataURL(u, { scale: 12, margin: 2 }) : "";
    }, i = async (u) => {
      u && (await a(u), n.value = u, r.value = !0);
    }, o = async (u) => {
      if (!navigator.clipboard) {
        let d = document.createElement("textarea");
        d.value = u, d.style.top = "0", d.style.left = "0", d.style.position = "fixed", document.body.appendChild(d), d.focus(), d.select(), document.execCommand("copy"), document.body.removeChild(d);
        return;
      }
      await navigator.clipboard.writeText(u);
    }, l = async () => {
      try {
        await o(n.value), Vr({ type: "success", text: "Copiado!" });
      } catch {
        Vr({ type: "error", text: "Não foi possível copiar" });
      }
    };
    return t({ exibir: i }), { __sfc: !0, mostrandoDialog: r, texto: n, imagemSrc: s, imagemConstruir: a, exibir: i, copiarTextoParaAreaTransferencia: o, copiar: l, VCardToolbar: mr };
  }
};
var Pu = function() {
  var t = this, r = t._self._c, n = t._self._setupProxy;
  return r("v-dialog", t._b({ attrs: { width: t.width }, model: { value: n.mostrandoDialog, callback: function(s) {
    n.mostrandoDialog = s;
  }, expression: "mostrandoDialog" } }, "v-dialog", t.$attrs, !1), [r("v-card", [t.titulo ? r(n.VCardToolbar, { attrs: { title: t.titulo }, on: { close: function(s) {
    n.mostrandoDialog = !1;
  } } }) : t._e(), r("v-card-text", { staticClass: "pa-0" }, [r("img", { staticStyle: { width: "100%", "object-fit": "cover" }, attrs: { src: n.imagemSrc, alt: "" } })]), r("v-card-actions", { staticClass: "justify-center" }, [r("v-btn", { attrs: { color: "primary", small: "", outlined: "" }, on: { click: function(s) {
    n.mostrandoDialog = !1;
  } } }, [r("v-icon", { staticClass: "mr-1", attrs: { "x-small": "" } }, [t._v("mdi-close")]), t._v(" Fechar ")], 1), t.btnCopiar ? r("v-btn", { attrs: { color: "primary", small: "", depressed: "" }, on: { click: n.copiar } }, [r("v-icon", { staticClass: "mr-1", attrs: { "x-small": "" } }, [t._v("mdi-content-copy")]), t._v(" " + t._s(t.btnCopiarLabel) + " ")], 1) : t._e(), t.btnAbrir ? r("v-btn", { attrs: { color: "primary", small: "", depressed: "", href: n.texto, target: "_blank" } }, [r("v-icon", { staticClass: "mr-1", attrs: { "x-small": "" } }, [t._v("mdi-open-in-new")]), t._v(" " + t._s(t.btnAbrirLabel) + " ")], 1) : t._e()], 1)], 1)], 1);
}, Nu = [], Eu = /* @__PURE__ */ ge(
  xu,
  Pu,
  Nu
);
const Au = Eu.exports, Iu = {
  __name: "VFabToTop",
  props: {
    scrollOffset: { type: Number, default: 300 }
  },
  setup(e) {
    const t = e, { proxy: r } = _t(), n = r.$vuetify, s = Ie(!1);
    return { __sfc: !0, props: t, proxy: r, vuetify: n, exibirBotao: s, onScroll: () => s.value = (window.pageYOffset || document.documentElement.offsetTop || 0) > t.scrollOffset };
  }
};
var Lu = function() {
  var t = this, r = t._self._c, n = t._self._setupProxy;
  return r("v-fab-transition", [r("v-btn", t._g(t._b({ directives: [{ name: "show", rawName: "v-show", value: n.exibirBotao, expression: "exibirBotao" }, { name: "scroll", rawName: "v-scroll", value: n.onScroll, expression: "onScroll" }], staticClass: "transition-swing", staticStyle: { "z-index": "6" }, attrs: { color: "primary", fab: "", fixed: "", right: "", bottom: "" }, on: { click: function(s) {
    return n.vuetify.goTo(0);
  } } }, "v-btn", t.$attrs, !1), t.$listeners), [r("v-icon", [t._v("mdi-chevron-up")])], 1)], 1);
}, Fu = [], Bu = /* @__PURE__ */ ge(
  Iu,
  Lu,
  Fu
);
const Wu = Bu.exports, Uu = {
  __name: "VLoaderOverlay",
  props: {
    value: { type: Boolean, default: !1 },
    zIndex: { type: [Number, String], default: 210 },
    opacity: { type: Number, default: 0.7 },
    texto: { type: String, default: "" }
  },
  setup(e) {
    return { __sfc: !0 };
  }
};
var Vu = function() {
  var t = this, r = t._self._c;
  return t._self._setupProxy, r("v-overlay", t._b({ attrs: { value: t.value, "z-index": t.zIndex, opacity: t.opacity } }, "v-overlay", t.$attrs, !1), [r("div", { staticClass: "text-center" }, [r("v-progress-circular", { attrs: { indeterminate: "", size: "48" } }), r("div", { staticClass: "pt-3" }, [t.$slots.default ? t._t("default") : t.texto ? [t._v(t._s(t.texto))] : t._e()], 2)], 1)]);
}, Hu = [], ju = /* @__PURE__ */ ge(
  Uu,
  Vu,
  Hu
);
const bs = ju.exports, zu = {
  __name: "VLoaderDialog",
  props: {
    value: { type: Boolean, default: !1 },
    hideOverlay: { type: Boolean, default: !1 },
    persistent: { type: Boolean, default: !0 },
    text: { type: String, default: "Por favor aguarde" },
    color: { type: String, default: "primary" },
    width: { type: String, default: "300" },
    progressColor: { type: String, default: "white" }
  },
  setup(e) {
    return { __sfc: !0 };
  }
};
var qu = function() {
  var t = this, r = t._self._c;
  return t._self._setupProxy, r("v-dialog", t._b({ attrs: { value: t.value, "hide-overlay": t.hideOverlay, persistent: t.persistent, width: t.width } }, "v-dialog", t.$attrs, !1), [r("v-card", { attrs: { color: t.color, dark: "" } }, [r("v-card-text", { staticClass: "text-center pt-1" }, [t._t("default", function() {
    return [t._v(t._s(t.text ? t.text : "Por favor aguarde"))];
  }), r("v-progress-linear", { staticClass: "mb-0", attrs: { indeterminate: "", color: t.progressColor } })], 2)], 1)], 1);
}, Gu = [], $u = /* @__PURE__ */ ge(
  zu,
  qu,
  Gu
);
const Cs = $u.exports, Zu = {
  __name: "VGlobalComponents",
  setup(e) {
    const t = _e(), { proxy: r } = _t(), n = r.$vuetify;
    return xs(() => {
      r.$route && ir(
        () => r.$route.fullPath,
        () => t.resetarPrompts()
      );
    }), { __sfc: !0, vuetifyComponentsStore: t, proxy: r, vuetify: n, promptOnOk: (a, i, o = () => {
    }, l = "") => {
      a.validate() && (o(l), t.removerPrompt(i));
    }, vMaska: On, VLoaderOverlay: bs, VLoaderDialog: Cs, VCardToolbar: mr };
  }
};
var Ju = function() {
  var t = this, r = t._self._c, n = t._self._setupProxy;
  return r("div", [r("div", { staticClass: "d-flex flex-column", class: { "align-center": n.vuetify.breakpoint.smAndDown, "align-end": !n.vuetify.breakpoint.smAndDown }, staticStyle: { position: "fixed", right: "0", top: "0", "z-index": "205" } }, [r("transition-group", { attrs: { name: "slide-x-reverse-transition", appear: "" } }, t._l(n.vuetifyComponentsStore.alerts, function(s) {
    return r("v-alert", { key: s.id, staticClass: "mt-2 mb-0 alert", class: { "mr-3": !n.vuetify.breakpoint.smAndDown }, attrs: { type: s.type, elevation: "2", width: "20rem", "max-width": "100%" } }, [t._v(t._s(s.text))]);
  }), 1)], 1), r("v-dialog", { attrs: { app: "", persistent: "", width: "32rem", value: n.vuetifyComponentsStore.dialogShow } }, [r("v-card", [r("v-alert", { staticClass: "mb-0 text-justify", attrs: { type: "warning", border: "top", text: "", icon: !1 } }, [r("div", { staticClass: "d-flex align-center flex-column" }, [r("v-icon", { staticClass: "warning lighten-1 rounded-circle pa-2 mb-2", attrs: { size: "30", color: "white" } }, [t._v("mdi-alert")]), r("p", { staticClass: "body-1 flex-grow-1 mb-0", staticStyle: { "white-space": "pre-wrap", "text-align": "justify" }, domProps: { innerHTML: t._s(n.vuetifyComponentsStore.dialogContent) } })], 1)]), r("v-divider"), r("v-card-actions", { staticClass: "justify-center" }, [r("v-btn", { attrs: { small: "", depressed: "", color: "warning" }, on: { click: function(s) {
    n.vuetifyComponentsStore.dialogShow = !1;
  } } }, [t._v("OK")])], 1)], 1)], 1), r(n.VLoaderOverlay, { attrs: { value: n.vuetifyComponentsStore.loaderOverlayShow, texto: n.vuetifyComponentsStore.loaderText } }), r(n.VLoaderDialog, { attrs: { value: n.vuetifyComponentsStore.loaderDialogShow, texto: n.vuetifyComponentsStore.loaderText } }), t._l(n.vuetifyComponentsStore.snacks, function(s) {
    return r("v-snackbar", { key: s.id, attrs: { color: s.color, timeout: s.timeout, value: !0, "min-width": "8rem", "max-width": "100%", app: "" }, on: { input: function(a) {
      return n.vuetifyComponentsStore.removeSnack(s.id);
    } } }, [s.icon ? r("v-icon", { staticClass: "mr-1", attrs: { dense: "", color: "white" } }, [t._v(t._s(s.icon))]) : s.color === "success" ? r("v-icon", { staticClass: "mr-1", attrs: { dense: "", color: "white" } }, [t._v("mdi-check-circle")]) : t._e(), t._v(" " + t._s(s.text) + " ")], 1);
  }), t._l(n.vuetifyComponentsStore.prompts, function(s, a) {
    var i;
    return r("v-dialog", { key: s.id, attrs: { width: s.options.width || "24em", persistent: s.options.persistent, "hide-overlay": s.options.hideOverlay }, on: { "click:outside": function(o) {
      s.options.persistent || n.vuetifyComponentsStore.removerPrompt(s.id, !1, !0);
    } }, model: { value: s.show, callback: function(o) {
      t.$set(s, "show", o);
    }, expression: "i.show" } }, [r("v-card", [r("v-form", { ref: "prompters", refInFor: !0, on: { submit: function(o) {
      return o.preventDefault(), n.promptOnOk(t.$refs.prompters[a], s.id, s.options.onOk, s.promptValue);
    } } }, [s.options.title ? r(n.VCardToolbar, { attrs: { title: s.options.title, color: s.options.titleColor || "primary", "hide-close-button": "" } }) : t._e(), s.options.message || s.options.prompt ? r("v-card-text", { staticClass: "text-justify pb-1" }, [s.options.message ? r("div", { class: s.options.messageClass || "my-2", domProps: { innerHTML: t._s(s.options.message) } }) : t._e(), s.options.prompt ? [((i = s.options.prompt) == null ? void 0 : i.type) === "textarea" ? r("v-textarea", { style: { marginTop: s.options.message ? "1.25rem" : "0" }, attrs: { label: s.options.prompt.label, rules: s.options.prompt.rules, outlined: s.options.prompt.outlined, filled: s.options.prompt.filled, placeholder: s.options.prompt.placeholder, persistentPlaceholder: s.options.prompt.persistentPlaceholder, dense: s.options.prompt.dense, autofocus: s.options.prompt.autofocus, rows: s.options.prompt.rows || 5 }, model: { value: s.promptValue, callback: function(o) {
      t.$set(s, "promptValue", o);
    }, expression: "i.promptValue" } }) : r("v-text-field", { directives: [{ name: "maska", rawName: "v-maska", value: s.options.prompt.mask || null, expression: "i.options.prompt.mask || null" }], style: { marginTop: s.options.message ? "1.25rem" : "0" }, attrs: { label: s.options.prompt.label, type: s.options.prompt.type || "text", rules: s.options.prompt.rules, outlined: s.options.prompt.outlined, filled: s.options.prompt.filled, placeholder: s.options.prompt.placeholder, persistentPlaceholder: s.options.prompt.persistentPlaceholder, dense: s.options.prompt.dense, autofocus: s.options.prompt.autofocus }, model: { value: s.promptValue, callback: function(o) {
      t.$set(s, "promptValue", o);
    }, expression: "i.promptValue" } })] : t._e()], 2) : t._e(), r("v-card-actions", { staticClass: "justify-center" }, [s.options.cancel ? r("v-btn", { class: s.options.cancelClass, attrs: { color: s.options.cancelColor || "primary", small: s.options.smallButtons, depressed: s.options.cancelDepressed, outlined: s.options.cancelOutlined ?? !0 }, on: { click: function(o) {
      return n.vuetifyComponentsStore.removerPrompt(s.id, !0, !0);
    } } }, [t._v(t._s(s.options.cancelText || "CANCELAR"))]) : t._e(), r("v-btn", { class: s.options.confirmClass, attrs: { color: s.options.confirmColor || "primary", small: s.options.smallButtons, type: "submit", depressed: s.options.confirmDepressed ?? !0, outlined: s.options.confirmOutlined } }, [t._v(t._s(s.options.confirmText || "OK"))])], 1)], 1)], 1)], 1);
  })], 2);
}, Ku = [], Qu = /* @__PURE__ */ ge(
  Zu,
  Ju,
  Ku
);
const Xu = Qu.exports, ed = (e, t = {}) => {
  const r = t.pinia || e.prototype.$pinia;
  if (!r) return console.error("[@eliaslazcano/vuetify-plugin] Pinia é necessário para esta biblioteca.");
  e.prototype.$vuetifyComponentsStore = _e(r), e.component("VBtnTooltip", Is), e.component("VCardToolbar", mr), e.component("VContainerAsync", zs), e.component("VDateField", iu), e.component("VDialogQrCode", Au), e.component("VFabToTop", Wu), e.component("VGlobalComponents", Xu), e.component("VLoaderDialog", Cs), e.component("VLoaderOverlay", bs);
}, ud = { install: ed };
export {
  Is as VBtnTooltip,
  mr as VCardToolbar,
  zs as VContainerAsync,
  iu as VDateField,
  Au as VDialogQrCode,
  Wu as VFabToTop,
  Xu as VGlobalComponents,
  Cs as VLoaderDialog,
  bs as VLoaderOverlay,
  ud as default,
  Vr as emitirAlert,
  od as emitirDialog,
  ld as emitirPrompt,
  id as emitirSnack,
  sd as getLoaderOverlayStatus,
  ed as install,
  ad as setLoaderDialog,
  nd as setLoaderOverlay,
  _e as useVuetifyComponentsStore
};
