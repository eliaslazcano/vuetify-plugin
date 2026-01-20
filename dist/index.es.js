import { defineStore as Zs } from "pinia";
import { getCurrentInstance as ze, ref as dt, computed as qs, watch as ct, onMounted as Jt } from "vue";
const ee = Zs("vuetifyComponentsStore", {
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
      const t = this.snacks.findIndex((s) => s.id === e);
      t !== -1 && this.snacks.splice(t, 1);
    },
    addAlert(e = { text: "", type: "info", timeout: 3e3 }) {
      e.id = Date.now(), e.timeout || (e.timeout = 3e3), this.alerts.push(e), setTimeout(() => {
        const t = this.alerts.findIndex((s) => s.id === e.id);
        t !== -1 && this.alerts.splice(t, 1);
      }, e.timeout);
    },
    showDialog(e) {
      this.dialogContent = e, this.dialogShow = !0;
    },
    adicionarPrompt(e) {
      var s;
      const t = {
        options: e,
        id: Date.now(),
        show: !0,
        promptValue: ((s = e.prompt) == null ? void 0 : s.model) ?? ""
      };
      this.prompts.push(t);
    },
    removerPrompt(e, t = !1, s = !1) {
      var a, n, i;
      const r = this.prompts.findIndex((o) => o.id === e);
      this.prompts[r].show = !1, t && typeof ((a = this.prompts[r].options) == null ? void 0 : a.onCancel) == "function" && this.prompts[r].options.onCancel(), s && typeof ((n = this.prompts[r].options) == null ? void 0 : n.onDismiss) == "function" && this.prompts[r].options.onDismiss(), typeof ((i = this.prompts[r].options) == null ? void 0 : i.onFinally) == "function" && this.prompts[r].options.onFinally(), setTimeout(() => this.prompts.splice(r, 1), 800);
    },
    resetarPrompts() {
      this.prompts.forEach((e, t) => {
        this.prompts[t].show = !1;
      }), setTimeout(() => this.prompts = [], 300);
    }
  }
}), Bo = (e, t = "") => {
  const s = ee();
  s.loaderText = t, s.loaderOverlayShow = e;
}, Zo = () => ee().loaderOverlayShow, qo = (e, t = "") => {
  const s = ee();
  s.loaderText = t, s.loaderDialogShow = e;
}, Jo = (e) => {
  ee().addSnack(e);
}, Qo = (e) => {
  ee().addAlert(e);
}, Ko = (e) => {
  ee().showDialog(e);
}, Xo = (e) => {
  ee().adicionarPrompt(e);
};
function oe(e, t, s, r, a, n, i, o) {
  var c = typeof e == "function" ? e.options : e;
  return t && (c.render = t, c.staticRenderFns = s, c._compiled = !0), {
    exports: e,
    options: c
  };
}
const Js = {
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
    const { proxy: s } = ze(), r = s.$vuetify;
    return { __sfc: !0, proxy: s, vuetify: r, emit: t };
  }
};
var Qs = function() {
  var t = this, s = t._self._c, r = t._self._setupProxy;
  return s("v-tooltip", t._b({ attrs: { disabled: r.vuetify.breakpoint.xs, color: t.tooltipColor }, scopedSlots: t._u([{ key: "activator", fn: function({ on: a, attrs: n }) {
    return [s("v-btn", t._g(t._b({ class: t.btnClasses, attrs: { color: t.color, icon: t.icon, to: t.to, target: t.target, href: t.href, small: t.small, "x-small": t.xSmall, disabled: t.disabled, fab: t.fab, large: t.large, dark: t.dark, fixed: t.fixed, bottom: t.btnBottom, right: t.btnRight }, on: { click: function(i) {
      return r.emit("click");
    } } }, "v-btn", n, !1), a), [t._t("default")], 2)];
  } }], null, !0) }, "v-tooltip", t.$attrs, !1), [t.$slots.tooltip ? t._t("default") : s("span", [t._v(t._s(t.text))])], 2);
}, Ks = [], Xs = /* @__PURE__ */ oe(
  Js,
  Qs,
  Ks
);
const er = Xs.exports, tr = {
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
    const { proxy: t } = ze(), s = t.$vuetify;
    return { __sfc: !0, proxy: t, vuetify: s };
  }
};
var sr = function() {
  var t = this, s = t._self._c, r = t._self._setupProxy;
  return s("v-toolbar", t._b({ staticClass: "flex-grow-0", attrs: { color: r.vuetify.theme.dark && t.color === "primary" ? void 0 : t.color, dark: "", flat: "", dense: "" } }, "v-toolbar", t.$attrs, !1), [t.icon ? s("v-icon", { staticClass: "mr-2", attrs: { size: t.iconSize } }, [t._v(t._s(t.icon))]) : t._e(), s("v-toolbar-title", { staticStyle: { "line-height": "1.1" }, style: { fontSize: t.titleSize } }, [t._v(t._s(t.title))]), s("v-spacer"), t._t("default"), t.btnClose ? s("v-btn", { attrs: { icon: "" }, on: { click: function(a) {
    return t.$emit("close");
  } } }, [s("v-icon", [t._v("mdi-close")])], 1) : t._e()], 2);
}, rr = [], ar = /* @__PURE__ */ oe(
  tr,
  sr,
  rr
);
const Qt = ar.exports, nr = {
  __name: "VContainerAsync",
  props: {
    loading: { type: Boolean, default: !1 },
    color: { type: String, default: "blue" },
    transition: { type: String, default: "fade-transition" },
    spinnerTransition: { type: String, default: "fade-transition" },
    fluid: { type: Boolean, default: !1 },
    appear: { type: Boolean, default: !0 },
    texto: { type: String, default: "" }
  },
  setup(e) {
    return { __sfc: !0 };
  }
};
var ir = function() {
  var t = this, s = t._self._c;
  return t._self._setupProxy, s("transition", { attrs: { mode: "out-in", name: t.loading ? t.transition : t.spinnerTransition, appear: t.appear, "leave-class": t.loading ? t.transition + "-leave" : t.spinnerTransition + "-leave", "leave-to-class": t.loading ? t.transition + "-leave-to" : t.spinnerTransition + "-leave-to", "leave-active-class": t.loading ? t.transition + "-leave-active" : t.spinnerTransition + "-leave-active", "enter-class": t.loading ? t.spinnerTransition + "-enter" : t.transition + "-enter", "enter-to-class": t.loading ? t.spinnerTransition + "-enter-to" : t.transition + "-enter-to", "enter-active-class": t.loading ? t.spinnerTransition + "-enter-active" : t.transition + "-enter-active" }, on: { "after-leave": function(r) {
    return t.$emit("after-leave", t.loading);
  }, "after-enter": function(r) {
    return t.$emit("after-enter", t.loading);
  } } }, [t.loading ? s("div", { key: 1, staticClass: "text-center", staticStyle: { position: "absolute", left: "0", right: "0", top: "calc(50% - 16px)" } }, [s("v-progress-circular", { attrs: { indeterminate: "", color: t.color } }), t.texto ? s("div", { staticClass: "mt-2 grey--text text--darken-1" }, [t._v(t._s(t.texto))]) : t._e()], 1) : s("v-container", t._g(t._b({ key: 2, attrs: { fluid: t.fluid } }, "v-container", t.$attrs, !1), t.$listeners), [t._t("default")], 2)], 1);
}, or = [], lr = /* @__PURE__ */ oe(
  nr,
  ir,
  or
);
const ur = lr.exports;
var dr = Object.defineProperty, cr = (e, t, s) => t in e ? dr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, De = (e, t, s) => cr(e, typeof t != "symbol" ? t + "" : t, s);
const Ut = {
  "#": { pattern: /[0-9]/ },
  "@": { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[a-zA-Z0-9]/ }
}, Ht = (e, t, s) => e.replaceAll(t, "").replace(s, ".").replace("..", ".").replace(/[^.\d]/g, ""), $t = (e, t, s) => {
  var r;
  return new Intl.NumberFormat(((r = s.number) == null ? void 0 : r.locale) ?? "en", {
    minimumFractionDigits: e,
    maximumFractionDigits: t,
    roundingMode: "trunc"
  });
}, fr = (e, t = !0, s) => {
  var r, a, n, i;
  const o = ((r = s.number) == null ? void 0 : r.unsigned) !== !0 && e.startsWith("-") ? "-" : "", c = ((a = s.number) == null ? void 0 : a.fraction) ?? 0;
  let u = $t(0, c, s);
  const g = u.formatToParts(1000.12), b = ((n = g.find((k) => k.type === "group")) == null ? void 0 : n.value) ?? " ", x = ((i = g.find((k) => k.type === "decimal")) == null ? void 0 : i.value) ?? ".", L = Ht(e, b, x);
  if (Number.isNaN(parseFloat(L))) return o;
  const re = L.split(".");
  if (re[1] != null && re[1].length >= 1) {
    const k = re[1].length <= c ? re[1].length : c;
    u = $t(k, c, s);
  }
  let U = u.format(parseFloat(L));
  return t ? c > 0 && L.endsWith(".") && !L.slice(0, -1).includes(".") && (U += x) : U = Ht(U, b, x), o + U;
}, Kt = (e) => JSON.parse(e.replaceAll("'", '"')), hr = (e, t = {}) => {
  const s = { ...t };
  e.dataset.maska != null && e.dataset.maska !== "" && (s.mask = mr(e.dataset.maska)), e.dataset.maskaEager != null && (s.eager = Fe(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (s.reversed = Fe(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (s.tokensReplace = Fe(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (s.tokens = pr(e.dataset.maskaTokens));
  const r = {};
  return e.dataset.maskaNumberLocale != null && (r.locale = e.dataset.maskaNumberLocale), e.dataset.maskaNumberFraction != null && (r.fraction = parseInt(e.dataset.maskaNumberFraction)), e.dataset.maskaNumberUnsigned != null && (r.unsigned = Fe(e.dataset.maskaNumberUnsigned)), (e.dataset.maskaNumber != null || Object.values(r).length > 0) && (s.number = r), s;
}, Fe = (e) => e !== "" ? !!JSON.parse(e) : !0, mr = (e) => e.startsWith("[") && e.endsWith("]") ? Kt(e) : e, pr = (e) => {
  if (e.startsWith("{") && e.endsWith("}"))
    return Kt(e);
  const t = {};
  return e.split("|").forEach((s) => {
    const r = s.split(":");
    t[r[0]] = {
      pattern: Xt() ? new RegExp(r[1], "u") : new RegExp(r[1]),
      optional: r[2] === "optional",
      multiple: r[2] === "multiple",
      repeated: r[2] === "repeated"
    };
  }), t;
}, Xt = () => {
  try {
    return new RegExp("\\p{L}", "u"), !0;
  } catch {
    return !1;
  }
};
class _r {
  constructor(t = {}) {
    De(this, "opts", {}), De(this, "memo", /* @__PURE__ */ new Map());
    const s = { ...t };
    if (s.tokens != null) {
      s.tokens = s.tokensReplace ? { ...s.tokens } : { ...Ut, ...s.tokens };
      for (const r of Object.values(s.tokens))
        typeof r.pattern == "string" && (r.pattern = Xt() ? new RegExp(r.pattern, "u") : new RegExp(r.pattern));
    } else
      s.tokens = Ut;
    Array.isArray(s.mask) && (s.mask.length > 1 ? s.mask = [...s.mask].sort((r, a) => r.length - a.length) : s.mask = s.mask[0] ?? ""), s.mask === "" && (s.mask = null), this.opts = s;
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
    const s = this.findMask(String(t));
    if (this.opts.mask == null || s == null) return !1;
    const r = this.process(String(t), s).length;
    return typeof this.opts.mask == "string" ? r >= this.opts.mask.length : r >= s.length;
  }
  findMask(t) {
    const s = this.opts.mask;
    if (s == null)
      return null;
    if (typeof s == "string")
      return s;
    if (typeof s == "function")
      return s(t);
    const r = this.process(t, s.slice(-1).pop() ?? "", !1);
    return s.find((a) => this.process(t, a, !1).length >= r.length) ?? "";
  }
  escapeMask(t) {
    const s = [], r = [];
    return t.split("").forEach((a, n) => {
      a === "!" && t[n - 1] !== "!" ? r.push(n - r.length) : s.push(a);
    }), { mask: s.join(""), escaped: r };
  }
  process(t, s, r = !0) {
    if (this.opts.number != null) return fr(t, r, this.opts);
    if (s == null) return t;
    const a = `v=${t},mr=${s},m=${r ? 1 : 0}`;
    if (this.memo.has(a)) return this.memo.get(a);
    const { mask: n, escaped: i } = this.escapeMask(s), o = [], c = this.opts.tokens != null ? this.opts.tokens : {}, u = this.isReversed() ? -1 : 1, g = this.isReversed() ? "unshift" : "push", b = this.isReversed() ? 0 : n.length - 1, x = this.isReversed() ? () => k > -1 && R > -1 : () => k < n.length && R < t.length, L = (le) => !this.isReversed() && le <= b || this.isReversed() && le >= b;
    let re, U = -1, k = this.isReversed() ? n.length - 1 : 0, R = this.isReversed() ? t.length - 1 : 0, at = !1;
    for (; x(); ) {
      const le = n.charAt(k), z = c[le], We = (z == null ? void 0 : z.transform) != null ? z.transform(t.charAt(R)) : t.charAt(R);
      if (!i.includes(k) && z != null ? (We.match(z.pattern) != null ? (o[g](We), z.repeated ? (U === -1 ? U = k : k === b && k !== U && (k = U - u), b === U && (k -= u)) : z.multiple && (at = !0, k -= u), k += u) : z.multiple ? at && (k += u, R -= u, at = !1) : We === re ? re = void 0 : z.optional && (k += u, R -= u), R += u) : (r && !this.isEager() && o[g](le), We === le && !this.isEager() ? R += u : re = le, this.isEager() || (k += u)), this.isEager())
        for (; L(k) && (c[n.charAt(k)] == null || i.includes(k)); ) {
          if (r) {
            if (o[g](n.charAt(k)), t.charAt(R) === n.charAt(k)) {
              k += u, R += u;
              continue;
            }
          } else n.charAt(k) === t.charAt(R) && (R += u);
          k += u;
        }
    }
    return this.memo.set(a, o.join("")), this.memo.get(a);
  }
}
class yr {
  constructor(t, s = {}) {
    De(this, "items", /* @__PURE__ */ new Map()), De(this, "eventAbortController"), De(this, "onInput", (r) => {
      if (r instanceof CustomEvent && r.type === "input" && !r.isTrusted && !r.bubbles)
        return;
      const a = r.target, n = this.items.get(a);
      if (n === void 0) return;
      const i = "inputType" in r && r.inputType.startsWith("delete"), o = n.isEager(), c = i && o && n.unmasked(a.value) === "" ? "" : a.value;
      this.fixCursor(a, i, () => this.setValue(a, c));
    }), this.options = s, this.eventAbortController = new AbortController(), this.init(this.getInputs(t));
  }
  update(t = {}) {
    this.options = { ...t }, this.init(Array.from(this.items.keys()));
  }
  updateValue(t) {
    var s;
    t.value !== "" && t.value !== ((s = this.processInput(t)) == null ? void 0 : s.masked) && this.setValue(t, t.value);
  }
  destroy() {
    this.eventAbortController.abort(), this.items.clear();
  }
  init(t) {
    const s = this.getOptions(this.options);
    for (const r of t) {
      if (!this.items.has(r)) {
        const { signal: n } = this.eventAbortController;
        r.addEventListener("input", this.onInput, { capture: !0, signal: n });
      }
      const a = new _r(hr(r, s));
      this.items.set(r, a), queueMicrotask(() => this.updateValue(r)), r.selectionStart === null && a.isEager() && console.warn("Maska: input of `%s` type is not supported", r.type);
    }
  }
  getInputs(t) {
    return typeof t == "string" ? Array.from(document.querySelectorAll(t)) : "length" in t ? Array.from(t) : [t];
  }
  getOptions(t) {
    const { onMaska: s, preProcess: r, postProcess: a, ...n } = t;
    return n;
  }
  fixCursor(t, s, r) {
    var a, n;
    const i = t.selectionStart, o = t.value;
    if (r(), i === null || i === o.length && !s) return;
    const c = t.value, u = o.slice(0, i), g = c.slice(0, i), b = (a = this.processInput(t, u)) == null ? void 0 : a.unmasked, x = (n = this.processInput(t, g)) == null ? void 0 : n.unmasked;
    if (b === void 0 || x === void 0) return;
    let L = i;
    u !== g && (L += s ? c.length - o.length : b.length - x.length), t.setSelectionRange(L, L);
  }
  setValue(t, s) {
    const r = this.processInput(t, s);
    r !== void 0 && (t.value = r.masked, this.options.onMaska != null && (Array.isArray(this.options.onMaska) ? this.options.onMaska.forEach((a) => a(r)) : this.options.onMaska(r)), t.dispatchEvent(new CustomEvent("maska", { detail: r })), t.dispatchEvent(new CustomEvent("input", { detail: r.masked })));
  }
  processInput(t, s) {
    const r = this.items.get(t);
    if (r === void 0) return;
    let a = s ?? t.value;
    this.options.preProcess != null && (a = this.options.preProcess(a));
    let n = r.masked(a);
    return this.options.postProcess != null && (n = this.options.postProcess(n)), {
      masked: n,
      unmasked: r.unmasked(a),
      completed: r.completed(a)
    };
  }
}
const nt = /* @__PURE__ */ new WeakMap(), vr = (e, t) => {
  if (e.arg == null || e.instance == null) return;
  const s = "setup" in e.instance.$.type;
  e.arg in e.instance ? e.instance[e.arg] = t : s && console.warn("Maska: please expose `%s` using defineExpose", e.arg);
}, es = (e, t) => {
  var s;
  const r = e instanceof HTMLInputElement ? e : e.querySelector("input");
  if (r == null || (r == null ? void 0 : r.type) === "file") return;
  let a = {};
  if (t.value != null && (a = typeof t.value == "string" ? { mask: t.value } : { ...t.value }), t.arg != null) {
    const n = (i) => {
      const o = t.modifiers.unmasked ? i.unmasked : t.modifiers.completed ? i.completed : i.masked;
      vr(t, o);
    };
    a.onMaska = a.onMaska == null ? n : Array.isArray(a.onMaska) ? [...a.onMaska, n] : [a.onMaska, n];
  }
  nt.has(r) ? (s = nt.get(r)) == null || s.update(a) : nt.set(r, new yr(r, a));
};
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var ts;
function d() {
  return ts.apply(null, arguments);
}
function gr(e) {
  ts = e;
}
function I(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function ce(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function y(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function gt(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (y(e, t))
      return !1;
  return !0;
}
function C(e) {
  return e === void 0;
}
function X(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Ce(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function ss(e, t) {
  var s = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    s.push(t(e[r], r));
  return s;
}
function ae(e, t) {
  for (var s in t)
    y(t, s) && (e[s] = t[s]);
  return y(t, "toString") && (e.toString = t.toString), y(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function j(e, t, s, r) {
  return Ys(e, t, s, r, !0).utc();
}
function kr() {
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
function m(e) {
  return e._pf == null && (e._pf = kr()), e._pf;
}
var ft;
Array.prototype.some ? ft = Array.prototype.some : ft = function(e) {
  var t = Object(this), s = t.length >>> 0, r;
  for (r = 0; r < s; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function kt(e) {
  var t = null, s = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = m(e), s = ft.call(t.parsedDateParts, function(a) {
    return a != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Be(e) {
  var t = j(NaN);
  return e != null ? ae(m(t), e) : m(t).userInvalidated = !0, t;
}
var jt = d.momentProperties = [], it = !1;
function wt(e, t) {
  var s, r, a, n = jt.length;
  if (C(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), C(t._i) || (e._i = t._i), C(t._f) || (e._f = t._f), C(t._l) || (e._l = t._l), C(t._strict) || (e._strict = t._strict), C(t._tzm) || (e._tzm = t._tzm), C(t._isUTC) || (e._isUTC = t._isUTC), C(t._offset) || (e._offset = t._offset), C(t._pf) || (e._pf = m(t)), C(t._locale) || (e._locale = t._locale), n > 0)
    for (s = 0; s < n; s++)
      r = jt[s], a = t[r], C(a) || (e[r] = a);
  return e;
}
function Pe(e) {
  wt(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), it === !1 && (it = !0, d.updateOffset(this), it = !1);
}
function E(e) {
  return e instanceof Pe || e != null && e._isAMomentObject != null;
}
function rs(e) {
  d.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function W(e, t) {
  var s = !0;
  return ae(function() {
    if (d.deprecationHandler != null && d.deprecationHandler(null, e), s) {
      var r = [], a, n, i, o = arguments.length;
      for (n = 0; n < o; n++) {
        if (a = "", typeof arguments[n] == "object") {
          a += `
[` + n + "] ";
          for (i in arguments[0])
            y(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[n];
        r.push(a);
      }
      rs(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Gt = {};
function as(e, t) {
  d.deprecationHandler != null && d.deprecationHandler(e, t), Gt[e] || (rs(t), Gt[e] = !0);
}
d.suppressDeprecationWarnings = !1;
d.deprecationHandler = null;
function G(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function wr(e) {
  var t, s;
  for (s in e)
    y(e, s) && (t = e[s], G(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function ht(e, t) {
  var s = ae({}, e), r;
  for (r in t)
    y(t, r) && (ce(e[r]) && ce(t[r]) ? (s[r] = {}, ae(s[r], e[r]), ae(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
  for (r in e)
    y(e, r) && !y(t, r) && ce(e[r]) && (s[r] = ae({}, s[r]));
  return s;
}
function St(e) {
  e != null && this.set(e);
}
var mt;
Object.keys ? mt = Object.keys : mt = function(e) {
  var t, s = [];
  for (t in e)
    y(e, t) && s.push(t);
  return s;
};
var Sr = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Mr(e, t, s) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return G(r) ? r.call(t, s) : r;
}
function $(e, t, s) {
  var r = "" + Math.abs(e), a = t - r.length, n = e >= 0;
  return (n ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var Mt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Le = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ot = {}, _e = {};
function h(e, t, s, r) {
  var a = r;
  typeof r == "string" && (a = function() {
    return this[r]();
  }), e && (_e[e] = a), t && (_e[t[0]] = function() {
    return $(a.apply(this, arguments), t[1], t[2]);
  }), s && (_e[s] = function() {
    return this.localeData().ordinal(
      a.apply(this, arguments),
      e
    );
  });
}
function Dr(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Yr(e) {
  var t = e.match(Mt), s, r;
  for (s = 0, r = t.length; s < r; s++)
    _e[t[s]] ? t[s] = _e[t[s]] : t[s] = Dr(t[s]);
  return function(a) {
    var n = "", i;
    for (i = 0; i < r; i++)
      n += G(t[i]) ? t[i].call(a, e) : t[i];
    return n;
  };
}
function Ie(e, t) {
  return e.isValid() ? (t = ns(t, e.localeData()), ot[t] = ot[t] || Yr(t), ot[t](e)) : e.localeData().invalidDate();
}
function ns(e, t) {
  var s = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (Le.lastIndex = 0; s >= 0 && Le.test(e); )
    e = e.replace(
      Le,
      r
    ), Le.lastIndex = 0, s -= 1;
  return e;
}
var br = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Or(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(Mt).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var xr = "Invalid date";
function Tr() {
  return this._invalidDate;
}
var Cr = "%d", Pr = /\d{1,2}/;
function Rr(e) {
  return this._ordinal.replace("%d", e);
}
var Nr = {
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
function Wr(e, t, s, r) {
  var a = this._relativeTime[s];
  return G(a) ? a(e, t, s, r) : a.replace(/%d/i, e);
}
function Fr(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return G(s) ? s(t) : s.replace(/%s/i, t);
}
var zt = {
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
function F(e) {
  return typeof e == "string" ? zt[e] || zt[e.toLowerCase()] : void 0;
}
function Dt(e) {
  var t = {}, s, r;
  for (r in e)
    y(e, r) && (s = F(r), s && (t[s] = e[r]));
  return t;
}
var Lr = {
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
function Ar(e) {
  var t = [], s;
  for (s in e)
    y(e, s) && t.push({ unit: s, priority: Lr[s] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
var is = /\d/, P = /\d\d/, os = /\d{3}/, Yt = /\d{4}/, Ze = /[+-]?\d{6}/, M = /\d\d?/, ls = /\d\d\d\d?/, us = /\d\d\d\d\d\d?/, qe = /\d{1,3}/, bt = /\d{1,4}/, Je = /[+-]?\d{1,6}/, ge = /\d+/, Qe = /[+-]?\d+/, Ir = /Z|[+-]\d\d:?\d\d/gi, Ke = /Z|[+-]\d\d(?::?\d\d)?/gi, Er = /[+-]?\d+(\.\d{1,3})?/, Re = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ke = /^[1-9]\d?/, Ot = /^([1-9]\d|\d)/, Ue;
Ue = {};
function f(e, t, s) {
  Ue[e] = G(t) ? t : function(r, a) {
    return r && s ? s : t;
  };
}
function Vr(e, t) {
  return y(Ue, e) ? Ue[e](t._strict, t._locale) : new RegExp(Ur(e));
}
function Ur(e) {
  return Q(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, r, a, n) {
        return s || r || a || n;
      }
    )
  );
}
function Q(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function N(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function p(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = N(t)), s;
}
var pt = {};
function w(e, t) {
  var s, r = t, a;
  for (typeof e == "string" && (e = [e]), X(t) && (r = function(n, i) {
    i[t] = p(n);
  }), a = e.length, s = 0; s < a; s++)
    pt[e[s]] = r;
}
function Ne(e, t) {
  w(e, function(s, r, a, n) {
    a._w = a._w || {}, t(s, a._w, a, n);
  });
}
function Hr(e, t, s) {
  t != null && y(pt, e) && pt[e](t, s._a, s, e);
}
function Xe(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var T = 0, q = 1, H = 2, O = 3, A = 4, J = 5, de = 6, $r = 7, jr = 8;
h("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? $(e, 4) : "+" + e;
});
h(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
h(0, ["YYYY", 4], 0, "year");
h(0, ["YYYYY", 5], 0, "year");
h(0, ["YYYYYY", 6, !0], 0, "year");
f("Y", Qe);
f("YY", M, P);
f("YYYY", bt, Yt);
f("YYYYY", Je, Ze);
f("YYYYYY", Je, Ze);
w(["YYYYY", "YYYYYY"], T);
w("YYYY", function(e, t) {
  t[T] = e.length === 2 ? d.parseTwoDigitYear(e) : p(e);
});
w("YY", function(e, t) {
  t[T] = d.parseTwoDigitYear(e);
});
w("Y", function(e, t) {
  t[T] = parseInt(e, 10);
});
function Ye(e) {
  return Xe(e) ? 366 : 365;
}
d.parseTwoDigitYear = function(e) {
  return p(e) + (p(e) > 68 ? 1900 : 2e3);
};
var ds = we("FullYear", !0);
function Gr() {
  return Xe(this.year());
}
function we(e, t) {
  return function(s) {
    return s != null ? (cs(this, e, s), d.updateOffset(this, t), this) : be(this, e);
  };
}
function be(e, t) {
  if (!e.isValid())
    return NaN;
  var s = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? s.getUTCMilliseconds() : s.getMilliseconds();
    case "Seconds":
      return r ? s.getUTCSeconds() : s.getSeconds();
    case "Minutes":
      return r ? s.getUTCMinutes() : s.getMinutes();
    case "Hours":
      return r ? s.getUTCHours() : s.getHours();
    case "Date":
      return r ? s.getUTCDate() : s.getDate();
    case "Day":
      return r ? s.getUTCDay() : s.getDay();
    case "Month":
      return r ? s.getUTCMonth() : s.getMonth();
    case "FullYear":
      return r ? s.getUTCFullYear() : s.getFullYear();
    default:
      return NaN;
  }
}
function cs(e, t, s) {
  var r, a, n, i, o;
  if (!(!e.isValid() || isNaN(s))) {
    switch (r = e._d, a = e._isUTC, t) {
      case "Milliseconds":
        return void (a ? r.setUTCMilliseconds(s) : r.setMilliseconds(s));
      case "Seconds":
        return void (a ? r.setUTCSeconds(s) : r.setSeconds(s));
      case "Minutes":
        return void (a ? r.setUTCMinutes(s) : r.setMinutes(s));
      case "Hours":
        return void (a ? r.setUTCHours(s) : r.setHours(s));
      case "Date":
        return void (a ? r.setUTCDate(s) : r.setDate(s));
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
    n = s, i = e.month(), o = e.date(), o = o === 29 && i === 1 && !Xe(n) ? 28 : o, a ? r.setUTCFullYear(n, i, o) : r.setFullYear(n, i, o);
  }
}
function zr(e) {
  return e = F(e), G(this[e]) ? this[e]() : this;
}
function Br(e, t) {
  if (typeof e == "object") {
    e = Dt(e);
    var s = Ar(e), r, a = s.length;
    for (r = 0; r < a; r++)
      this[s[r].unit](e[s[r].unit]);
  } else if (e = F(e), G(this[e]))
    return this[e](t);
  return this;
}
function Zr(e, t) {
  return (e % t + t) % t;
}
var Y;
Array.prototype.indexOf ? Y = Array.prototype.indexOf : Y = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function xt(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = Zr(t, 12);
  return e += (t - s) / 12, s === 1 ? Xe(e) ? 29 : 28 : 31 - s % 7 % 2;
}
h("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
h("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
h("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
f("M", M, ke);
f("MM", M, P);
f("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
f("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
w(["M", "MM"], function(e, t) {
  t[q] = p(e) - 1;
});
w(["MMM", "MMMM"], function(e, t, s, r) {
  var a = s._locale.monthsParse(e, r, s._strict);
  a != null ? t[q] = a : m(s).invalidMonth = e;
});
var qr = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), fs = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), hs = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Jr = Re, Qr = Re;
function Kr(e, t) {
  return e ? I(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || hs).test(t) ? "format" : "standalone"][e.month()] : I(this._months) ? this._months : this._months.standalone;
}
function Xr(e, t) {
  return e ? I(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[hs.test(t) ? "format" : "standalone"][e.month()] : I(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function ea(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      n = j([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(n, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (a = Y.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = Y.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = Y.call(this._shortMonthsParse, i), a !== -1 ? a : (a = Y.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = Y.call(this._longMonthsParse, i), a !== -1 ? a : (a = Y.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function ta(e, t, s) {
  var r, a, n;
  if (this._monthsParseExact)
    return ea.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (a = j([2e3, r]), s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(a, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(a, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[r] && (n = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(n.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (s && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!s && this._monthsParse[r].test(e))
      return r;
  }
}
function ms(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = p(t);
    else if (t = e.localeData().monthsParse(t), !X(t))
      return e;
  }
  var s = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, xt(e.year(), s)), e._isUTC ? e._d.setUTCMonth(s, r) : e._d.setMonth(s, r), e;
}
function ps(e) {
  return e != null ? (ms(this, e), d.updateOffset(this, !0), this) : be(this, "Month");
}
function sa() {
  return xt(this.year(), this.month());
}
function ra(e) {
  return this._monthsParseExact ? (y(this, "_monthsRegex") || _s.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (y(this, "_monthsShortRegex") || (this._monthsShortRegex = Jr), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function aa(e) {
  return this._monthsParseExact ? (y(this, "_monthsRegex") || _s.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (y(this, "_monthsRegex") || (this._monthsRegex = Qr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function _s() {
  function e(c, u) {
    return u.length - c.length;
  }
  var t = [], s = [], r = [], a, n, i, o;
  for (a = 0; a < 12; a++)
    n = j([2e3, a]), i = Q(this.monthsShort(n, "")), o = Q(this.months(n, "")), t.push(i), s.push(o), r.push(o), r.push(i);
  t.sort(e), s.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function na(e, t, s, r, a, n, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, s, r, a, n, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, s, r, a, n, i), o;
}
function Oe(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function He(e, t, s) {
  var r = 7 + t - s, a = (7 + Oe(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function ys(e, t, s, r, a) {
  var n = (7 + s - r) % 7, i = He(e, r, a), o = 1 + 7 * (t - 1) + n + i, c, u;
  return o <= 0 ? (c = e - 1, u = Ye(c) + o) : o > Ye(e) ? (c = e + 1, u = o - Ye(e)) : (c = e, u = o), {
    year: c,
    dayOfYear: u
  };
}
function xe(e, t, s) {
  var r = He(e.year(), t, s), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, n, i;
  return a < 1 ? (i = e.year() - 1, n = a + K(i, t, s)) : a > K(e.year(), t, s) ? (n = a - K(e.year(), t, s), i = e.year() + 1) : (i = e.year(), n = a), {
    week: n,
    year: i
  };
}
function K(e, t, s) {
  var r = He(e, t, s), a = He(e + 1, t, s);
  return (Ye(e) - r + a) / 7;
}
h("w", ["ww", 2], "wo", "week");
h("W", ["WW", 2], "Wo", "isoWeek");
f("w", M, ke);
f("ww", M, P);
f("W", M, ke);
f("WW", M, P);
Ne(
  ["w", "ww", "W", "WW"],
  function(e, t, s, r) {
    t[r.substr(0, 1)] = p(e);
  }
);
function ia(e) {
  return xe(e, this._week.dow, this._week.doy).week;
}
var oa = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function la() {
  return this._week.dow;
}
function ua() {
  return this._week.doy;
}
function da(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function ca(e) {
  var t = xe(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
h("d", 0, "do", "day");
h("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
h("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
h("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
h("e", 0, 0, "weekday");
h("E", 0, 0, "isoWeekday");
f("d", M);
f("e", M);
f("E", M);
f("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
f("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
f("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Ne(["dd", "ddd", "dddd"], function(e, t, s, r) {
  var a = s._locale.weekdaysParse(e, r, s._strict);
  a != null ? t.d = a : m(s).invalidWeekday = e;
});
Ne(["d", "e", "E"], function(e, t, s, r) {
  t[r] = p(e);
});
function fa(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function ha(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Tt(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var ma = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), vs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), pa = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), _a = Re, ya = Re, va = Re;
function ga(e, t) {
  var s = I(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Tt(s, this._week.dow) : e ? s[e.day()] : s;
}
function ka(e) {
  return e === !0 ? Tt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function wa(e) {
  return e === !0 ? Tt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Sa(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      n = j([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        n,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        n,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(n, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (a = Y.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = Y.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = Y.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = Y.call(this._weekdaysParse, i), a !== -1 || (a = Y.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = Y.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = Y.call(this._shortWeekdaysParse, i), a !== -1 || (a = Y.call(this._weekdaysParse, i), a !== -1) ? a : (a = Y.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = Y.call(this._minWeekdaysParse, i), a !== -1 || (a = Y.call(this._weekdaysParse, i), a !== -1) ? a : (a = Y.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function Ma(e, t, s) {
  var r, a, n;
  if (this._weekdaysParseExact)
    return Sa.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (a = j([2e3, 1]).day(r), s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (n = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(n.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (s && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!s && this._weekdaysParse[r].test(e))
      return r;
  }
}
function Da(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = be(this, "Day");
  return e != null ? (e = fa(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Ya(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function ba(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = ha(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Oa(e) {
  return this._weekdaysParseExact ? (y(this, "_weekdaysRegex") || Ct.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (y(this, "_weekdaysRegex") || (this._weekdaysRegex = _a), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function xa(e) {
  return this._weekdaysParseExact ? (y(this, "_weekdaysRegex") || Ct.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (y(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ya), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Ta(e) {
  return this._weekdaysParseExact ? (y(this, "_weekdaysRegex") || Ct.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (y(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = va), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Ct() {
  function e(g, b) {
    return b.length - g.length;
  }
  var t = [], s = [], r = [], a = [], n, i, o, c, u;
  for (n = 0; n < 7; n++)
    i = j([2e3, 1]).day(n), o = Q(this.weekdaysMin(i, "")), c = Q(this.weekdaysShort(i, "")), u = Q(this.weekdays(i, "")), t.push(o), s.push(c), r.push(u), a.push(o), a.push(c), a.push(u);
  t.sort(e), s.sort(e), r.sort(e), a.sort(e), this._weekdaysRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Pt() {
  return this.hours() % 12 || 12;
}
function Ca() {
  return this.hours() || 24;
}
h("H", ["HH", 2], 0, "hour");
h("h", ["hh", 2], 0, Pt);
h("k", ["kk", 2], 0, Ca);
h("hmm", 0, 0, function() {
  return "" + Pt.apply(this) + $(this.minutes(), 2);
});
h("hmmss", 0, 0, function() {
  return "" + Pt.apply(this) + $(this.minutes(), 2) + $(this.seconds(), 2);
});
h("Hmm", 0, 0, function() {
  return "" + this.hours() + $(this.minutes(), 2);
});
h("Hmmss", 0, 0, function() {
  return "" + this.hours() + $(this.minutes(), 2) + $(this.seconds(), 2);
});
function gs(e, t) {
  h(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
gs("a", !0);
gs("A", !1);
function ks(e, t) {
  return t._meridiemParse;
}
f("a", ks);
f("A", ks);
f("H", M, Ot);
f("h", M, ke);
f("k", M, ke);
f("HH", M, P);
f("hh", M, P);
f("kk", M, P);
f("hmm", ls);
f("hmmss", us);
f("Hmm", ls);
f("Hmmss", us);
w(["H", "HH"], O);
w(["k", "kk"], function(e, t, s) {
  var r = p(e);
  t[O] = r === 24 ? 0 : r;
});
w(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
w(["h", "hh"], function(e, t, s) {
  t[O] = p(e), m(s).bigHour = !0;
});
w("hmm", function(e, t, s) {
  var r = e.length - 2;
  t[O] = p(e.substr(0, r)), t[A] = p(e.substr(r)), m(s).bigHour = !0;
});
w("hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[O] = p(e.substr(0, r)), t[A] = p(e.substr(r, 2)), t[J] = p(e.substr(a)), m(s).bigHour = !0;
});
w("Hmm", function(e, t, s) {
  var r = e.length - 2;
  t[O] = p(e.substr(0, r)), t[A] = p(e.substr(r));
});
w("Hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[O] = p(e.substr(0, r)), t[A] = p(e.substr(r, 2)), t[J] = p(e.substr(a));
});
function Pa(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Ra = /[ap]\.?m?\.?/i, Na = we("Hours", !0);
function Wa(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var ws = {
  calendar: Sr,
  longDateFormat: br,
  invalidDate: xr,
  ordinal: Cr,
  dayOfMonthOrdinalParse: Pr,
  relativeTime: Nr,
  months: qr,
  monthsShort: fs,
  week: oa,
  weekdays: ma,
  weekdaysMin: pa,
  weekdaysShort: vs,
  meridiemParse: Ra
}, D = {}, Se = {}, Te;
function Fa(e, t) {
  var s, r = Math.min(e.length, t.length);
  for (s = 0; s < r; s += 1)
    if (e[s] !== t[s])
      return s;
  return r;
}
function Bt(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function La(e) {
  for (var t = 0, s, r, a, n; t < e.length; ) {
    for (n = Bt(e[t]).split("-"), s = n.length, r = Bt(e[t + 1]), r = r ? r.split("-") : null; s > 0; ) {
      if (a = et(n.slice(0, s).join("-")), a)
        return a;
      if (r && r.length >= s && Fa(n, r) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return Te;
}
function Aa(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function et(e) {
  var t = null, s;
  if (D[e] === void 0 && typeof module < "u" && module && module.exports && Aa(e))
    try {
      t = Te._abbr, s = require, s("./locale/" + e), ie(t);
    } catch {
      D[e] = null;
    }
  return D[e];
}
function ie(e, t) {
  var s;
  return e && (C(t) ? s = te(e) : s = Rt(e, t), s ? Te = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Te._abbr;
}
function Rt(e, t) {
  if (t !== null) {
    var s, r = ws;
    if (t.abbr = e, D[e] != null)
      as(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = D[e]._config;
    else if (t.parentLocale != null)
      if (D[t.parentLocale] != null)
        r = D[t.parentLocale]._config;
      else if (s = et(t.parentLocale), s != null)
        r = s._config;
      else
        return Se[t.parentLocale] || (Se[t.parentLocale] = []), Se[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return D[e] = new St(ht(r, t)), Se[e] && Se[e].forEach(function(a) {
      Rt(a.name, a.config);
    }), ie(e), D[e];
  } else
    return delete D[e], null;
}
function Ia(e, t) {
  if (t != null) {
    var s, r, a = ws;
    D[e] != null && D[e].parentLocale != null ? D[e].set(ht(D[e]._config, t)) : (r = et(e), r != null && (a = r._config), t = ht(a, t), r == null && (t.abbr = e), s = new St(t), s.parentLocale = D[e], D[e] = s), ie(e);
  } else
    D[e] != null && (D[e].parentLocale != null ? (D[e] = D[e].parentLocale, e === ie() && ie(e)) : D[e] != null && delete D[e]);
  return D[e];
}
function te(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Te;
  if (!I(e)) {
    if (t = et(e), t)
      return t;
    e = [e];
  }
  return La(e);
}
function Ea() {
  return mt(D);
}
function Nt(e) {
  var t, s = e._a;
  return s && m(e).overflow === -2 && (t = s[q] < 0 || s[q] > 11 ? q : s[H] < 1 || s[H] > xt(s[T], s[q]) ? H : s[O] < 0 || s[O] > 24 || s[O] === 24 && (s[A] !== 0 || s[J] !== 0 || s[de] !== 0) ? O : s[A] < 0 || s[A] > 59 ? A : s[J] < 0 || s[J] > 59 ? J : s[de] < 0 || s[de] > 999 ? de : -1, m(e)._overflowDayOfYear && (t < T || t > H) && (t = H), m(e)._overflowWeeks && t === -1 && (t = $r), m(e)._overflowWeekday && t === -1 && (t = jr), m(e).overflow = t), e;
}
var Va = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ua = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ha = /Z|[+-]\d\d(?::?\d\d)?/, Ae = [
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
], lt = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], $a = /^\/?Date\((-?\d+)/i, ja = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Ga = {
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
function Ss(e) {
  var t, s, r = e._i, a = Va.exec(r) || Ua.exec(r), n, i, o, c, u = Ae.length, g = lt.length;
  if (a) {
    for (m(e).iso = !0, t = 0, s = u; t < s; t++)
      if (Ae[t][1].exec(a[1])) {
        i = Ae[t][0], n = Ae[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, s = g; t < s; t++)
        if (lt[t][1].exec(a[3])) {
          o = (a[2] || " ") + lt[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!n && o != null) {
      e._isValid = !1;
      return;
    }
    if (a[4])
      if (Ha.exec(a[4]))
        c = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (c || ""), Ft(e);
  } else
    e._isValid = !1;
}
function za(e, t, s, r, a, n) {
  var i = [
    Ba(e),
    fs.indexOf(t),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function Ba(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Za(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function qa(e, t, s) {
  if (e) {
    var r = vs.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return m(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function Ja(e, t, s) {
  if (e)
    return Ga[e];
  if (t)
    return 0;
  var r = parseInt(s, 10), a = r % 100, n = (r - a) / 100;
  return n * 60 + a;
}
function Ms(e) {
  var t = ja.exec(Za(e._i)), s;
  if (t) {
    if (s = za(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !qa(t[1], s, e))
      return;
    e._a = s, e._tzm = Ja(t[8], t[9], t[10]), e._d = Oe.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), m(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Qa(e) {
  var t = $a.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Ss(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Ms(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : d.createFromInputFallback(e);
}
d.createFromInputFallback = W(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function me(e, t, s) {
  return e ?? t ?? s;
}
function Ka(e) {
  var t = new Date(d.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Wt(e) {
  var t, s, r = [], a, n, i;
  if (!e._d) {
    for (a = Ka(e), e._w && e._a[H] == null && e._a[q] == null && Xa(e), e._dayOfYear != null && (i = me(e._a[T], a[T]), (e._dayOfYear > Ye(i) || e._dayOfYear === 0) && (m(e)._overflowDayOfYear = !0), s = Oe(i, 0, e._dayOfYear), e._a[q] = s.getUTCMonth(), e._a[H] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[O] === 24 && e._a[A] === 0 && e._a[J] === 0 && e._a[de] === 0 && (e._nextDay = !0, e._a[O] = 0), e._d = (e._useUTC ? Oe : na).apply(
      null,
      r
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[O] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (m(e).weekdayMismatch = !0);
  }
}
function Xa(e) {
  var t, s, r, a, n, i, o, c, u;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, s = me(
    t.GG,
    e._a[T],
    xe(S(), 1, 4).year
  ), r = me(t.W, 1), a = me(t.E, 1), (a < 1 || a > 7) && (c = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, u = xe(S(), n, i), s = me(t.gg, e._a[T], u.year), r = me(t.w, u.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (c = !0)) : t.e != null ? (a = t.e + n, (t.e < 0 || t.e > 6) && (c = !0)) : a = n), r < 1 || r > K(s, n, i) ? m(e)._overflowWeeks = !0 : c != null ? m(e)._overflowWeekday = !0 : (o = ys(s, r, a, n, i), e._a[T] = o.year, e._dayOfYear = o.dayOfYear);
}
d.ISO_8601 = function() {
};
d.RFC_2822 = function() {
};
function Ft(e) {
  if (e._f === d.ISO_8601) {
    Ss(e);
    return;
  }
  if (e._f === d.RFC_2822) {
    Ms(e);
    return;
  }
  e._a = [], m(e).empty = !0;
  var t = "" + e._i, s, r, a, n, i, o = t.length, c = 0, u, g;
  for (a = ns(e._f, e._locale).match(Mt) || [], g = a.length, s = 0; s < g; s++)
    n = a[s], r = (t.match(Vr(n, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && m(e).unusedInput.push(i), t = t.slice(
      t.indexOf(r) + r.length
    ), c += r.length), _e[n] ? (r ? m(e).empty = !1 : m(e).unusedTokens.push(n), Hr(n, r, e)) : e._strict && !r && m(e).unusedTokens.push(n);
  m(e).charsLeftOver = o - c, t.length > 0 && m(e).unusedInput.push(t), e._a[O] <= 12 && m(e).bigHour === !0 && e._a[O] > 0 && (m(e).bigHour = void 0), m(e).parsedDateParts = e._a.slice(0), m(e).meridiem = e._meridiem, e._a[O] = en(
    e._locale,
    e._a[O],
    e._meridiem
  ), u = m(e).era, u !== null && (e._a[T] = e._locale.erasConvertYear(u, e._a[T])), Wt(e), Nt(e);
}
function en(e, t, s) {
  var r;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function tn(e) {
  var t, s, r, a, n, i, o = !1, c = e._f.length;
  if (c === 0) {
    m(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < c; a++)
    n = 0, i = !1, t = wt({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Ft(t), kt(t) && (i = !0), n += m(t).charsLeftOver, n += m(t).unusedTokens.length * 10, m(t).score = n, o ? n < r && (r = n, s = t) : (r == null || n < r || i) && (r = n, s = t, i && (o = !0));
  ae(e, s || t);
}
function sn(e) {
  if (!e._d) {
    var t = Dt(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = ss(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Wt(e);
  }
}
function rn(e) {
  var t = new Pe(Nt(Ds(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function Ds(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || te(e._l), t === null || s === void 0 && t === "" ? Be({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), E(t) ? new Pe(Nt(t)) : (Ce(t) ? e._d = t : I(s) ? tn(e) : s ? Ft(e) : an(e), kt(e) || (e._d = null), e));
}
function an(e) {
  var t = e._i;
  C(t) ? e._d = new Date(d.now()) : Ce(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Qa(e) : I(t) ? (e._a = ss(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), Wt(e)) : ce(t) ? sn(e) : X(t) ? e._d = new Date(t) : d.createFromInputFallback(e);
}
function Ys(e, t, s, r, a) {
  var n = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (ce(e) && gt(e) || I(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = a, n._l = s, n._i = e, n._f = t, n._strict = r, rn(n);
}
function S(e, t, s, r) {
  return Ys(e, t, s, r, !1);
}
var nn = W(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = S.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Be();
  }
), on = W(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = S.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Be();
  }
);
function bs(e, t) {
  var s, r;
  if (t.length === 1 && I(t[0]) && (t = t[0]), !t.length)
    return S();
  for (s = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
  return s;
}
function ln() {
  var e = [].slice.call(arguments, 0);
  return bs("isBefore", e);
}
function un() {
  var e = [].slice.call(arguments, 0);
  return bs("isAfter", e);
}
var dn = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Me = [
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
function cn(e) {
  var t, s = !1, r, a = Me.length;
  for (t in e)
    if (y(e, t) && !(Y.call(Me, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[Me[r]]) {
      if (s)
        return !1;
      parseFloat(e[Me[r]]) !== p(e[Me[r]]) && (s = !0);
    }
  return !0;
}
function fn() {
  return this._isValid;
}
function hn() {
  return V(NaN);
}
function tt(e) {
  var t = Dt(e), s = t.year || 0, r = t.quarter || 0, a = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, c = t.minute || 0, u = t.second || 0, g = t.millisecond || 0;
  this._isValid = cn(t), this._milliseconds = +g + u * 1e3 + // 1000
  c * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +a + r * 3 + s * 12, this._data = {}, this._locale = te(), this._bubble();
}
function Ee(e) {
  return e instanceof tt;
}
function _t(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function mn(e, t, s) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < r; i++)
    p(e[i]) !== p(t[i]) && n++;
  return n + a;
}
function Os(e, t) {
  h(e, 0, 0, function() {
    var s = this.utcOffset(), r = "+";
    return s < 0 && (s = -s, r = "-"), r + $(~~(s / 60), 2) + t + $(~~s % 60, 2);
  });
}
Os("Z", ":");
Os("ZZ", "");
f("Z", Ke);
f("ZZ", Ke);
w(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Lt(Ke, e);
});
var pn = /([\+\-]|\d\d)/gi;
function Lt(e, t) {
  var s = (t || "").match(e), r, a, n;
  return s === null ? null : (r = s[s.length - 1] || [], a = (r + "").match(pn) || ["-", 0, 0], n = +(a[1] * 60) + p(a[2]), n === 0 ? 0 : a[0] === "+" ? n : -n);
}
function At(e, t) {
  var s, r;
  return t._isUTC ? (s = t.clone(), r = (E(e) || Ce(e) ? e.valueOf() : S(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), d.updateOffset(s, !1), s) : S(e).local();
}
function yt(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
d.updateOffset = function() {
};
function _n(e, t, s) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Lt(Ke, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (a = yt(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? Cs(
      this,
      V(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, d.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : yt(this);
}
function yn(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function vn(e) {
  return this.utcOffset(0, e);
}
function gn(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(yt(this), "m")), this;
}
function kn() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Lt(Ir, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function wn(e) {
  return this.isValid() ? (e = e ? S(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Sn() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Mn() {
  if (!C(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return wt(e, this), e = Ds(e), e._a ? (t = e._isUTC ? j(e._a) : S(e._a), this._isDSTShifted = this.isValid() && mn(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Dn() {
  return this.isValid() ? !this._isUTC : !1;
}
function Yn() {
  return this.isValid() ? this._isUTC : !1;
}
function xs() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var bn = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, On = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function V(e, t) {
  var s = e, r = null, a, n, i;
  return Ee(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : X(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = bn.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: p(r[H]) * a,
    h: p(r[O]) * a,
    m: p(r[A]) * a,
    s: p(r[J]) * a,
    ms: p(_t(r[de] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = On.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: ue(r[2], a),
    M: ue(r[3], a),
    w: ue(r[4], a),
    d: ue(r[5], a),
    h: ue(r[6], a),
    m: ue(r[7], a),
    s: ue(r[8], a)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = xn(
    S(s.from),
    S(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), n = new tt(s), Ee(e) && y(e, "_locale") && (n._locale = e._locale), Ee(e) && y(e, "_isValid") && (n._isValid = e._isValid), n;
}
V.fn = tt.prototype;
V.invalid = hn;
function ue(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function Zt(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function xn(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = At(t, e), e.isBefore(t) ? s = Zt(e, t) : (s = Zt(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function Ts(e, t) {
  return function(s, r) {
    var a, n;
    return r !== null && !isNaN(+r) && (as(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = s, s = r, r = n), a = V(s, r), Cs(this, a, e), this;
  };
}
function Cs(e, t, s, r) {
  var a = t._milliseconds, n = _t(t._days), i = _t(t._months);
  e.isValid() && (r = r ?? !0, i && ms(e, be(e, "Month") + i * s), n && cs(e, "Date", be(e, "Date") + n * s), a && e._d.setTime(e._d.valueOf() + a * s), r && d.updateOffset(e, n || i));
}
var Tn = Ts(1, "add"), Cn = Ts(-1, "subtract");
function Ps(e) {
  return typeof e == "string" || e instanceof String;
}
function Pn(e) {
  return E(e) || Ce(e) || Ps(e) || X(e) || Nn(e) || Rn(e) || e === null || e === void 0;
}
function Rn(e) {
  var t = ce(e) && !gt(e), s = !1, r = [
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
  ], a, n, i = r.length;
  for (a = 0; a < i; a += 1)
    n = r[a], s = s || y(e, n);
  return t && s;
}
function Nn(e) {
  var t = I(e), s = !1;
  return t && (s = e.filter(function(r) {
    return !X(r) && Ps(e);
  }).length === 0), t && s;
}
function Wn(e) {
  var t = ce(e) && !gt(e), s = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, n;
  for (a = 0; a < r.length; a += 1)
    n = r[a], s = s || y(e, n);
  return t && s;
}
function Fn(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function Ln(e, t) {
  arguments.length === 1 && (arguments[0] ? Pn(arguments[0]) ? (e = arguments[0], t = void 0) : Wn(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || S(), r = At(s, this).startOf("day"), a = d.calendarFormat(this, r) || "sameElse", n = t && (G(t[a]) ? t[a].call(this, s) : t[a]);
  return this.format(
    n || this.localeData().calendar(a, this, S(s))
  );
}
function An() {
  return new Pe(this);
}
function In(e, t) {
  var s = E(e) ? e : S(e);
  return this.isValid() && s.isValid() ? (t = F(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function En(e, t) {
  var s = E(e) ? e : S(e);
  return this.isValid() && s.isValid() ? (t = F(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function Vn(e, t, s, r) {
  var a = E(e) ? e : S(e), n = E(t) ? t : S(t);
  return this.isValid() && a.isValid() && n.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (r[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s))) : !1;
}
function Un(e, t) {
  var s = E(e) ? e : S(e), r;
  return this.isValid() && s.isValid() ? (t = F(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function Hn(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function $n(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function jn(e, t, s) {
  var r, a, n;
  if (!this.isValid())
    return NaN;
  if (r = At(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = F(t), t) {
    case "year":
      n = Ve(this, r) / 12;
      break;
    case "month":
      n = Ve(this, r);
      break;
    case "quarter":
      n = Ve(this, r) / 3;
      break;
    case "second":
      n = (this - r) / 1e3;
      break;
    // 1000
    case "minute":
      n = (this - r) / 6e4;
      break;
    // 1000 * 60
    case "hour":
      n = (this - r) / 36e5;
      break;
    // 1000 * 60 * 60
    case "day":
      n = (this - r - a) / 864e5;
      break;
    // 1000 * 60 * 60 * 24, negate dst
    case "week":
      n = (this - r - a) / 6048e5;
      break;
    // 1000 * 60 * 60 * 24 * 7, negate dst
    default:
      n = this - r;
  }
  return s ? n : N(n);
}
function Ve(e, t) {
  if (e.date() < t.date())
    return -Ve(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(s, "months"), a, n;
  return t - r < 0 ? (a = e.clone().add(s - 1, "months"), n = (t - r) / (r - a)) : (a = e.clone().add(s + 1, "months"), n = (t - r) / (a - r)), -(s + n) || 0;
}
d.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
d.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Gn() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function zn(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? Ie(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : G(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ie(s, "Z")) : Ie(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Bn() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, r, a, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(s + r + a + n);
}
function Zn(e) {
  e || (e = this.isUtc() ? d.defaultFormatUtc : d.defaultFormat);
  var t = Ie(this, e);
  return this.localeData().postformat(t);
}
function qn(e, t) {
  return this.isValid() && (E(e) && e.isValid() || S(e).isValid()) ? V({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Jn(e) {
  return this.from(S(), e);
}
function Qn(e, t) {
  return this.isValid() && (E(e) && e.isValid() || S(e).isValid()) ? V({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Kn(e) {
  return this.to(S(), e);
}
function Rs(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = te(e), t != null && (this._locale = t), this);
}
var Ns = W(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Ws() {
  return this._locale;
}
var $e = 1e3, ye = 60 * $e, je = 60 * ye, Fs = (365 * 400 + 97) * 24 * je;
function ve(e, t) {
  return (e % t + t) % t;
}
function Ls(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - Fs : new Date(e, t, s).valueOf();
}
function As(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - Fs : Date.UTC(e, t, s);
}
function Xn(e) {
  var t, s;
  if (e = F(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? As : Ls, e) {
    case "year":
      t = s(this.year(), 0, 1);
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = s(this.year(), this.month(), 1);
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= ve(
        t + (this._isUTC ? 0 : this.utcOffset() * ye),
        je
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= ve(t, ye);
      break;
    case "second":
      t = this._d.valueOf(), t -= ve(t, $e);
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function ei(e) {
  var t, s;
  if (e = F(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? As : Ls, e) {
    case "year":
      t = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += je - ve(
        t + (this._isUTC ? 0 : this.utcOffset() * ye),
        je
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += ye - ve(t, ye) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += $e - ve(t, $e) - 1;
      break;
  }
  return this._d.setTime(t), d.updateOffset(this, !0), this;
}
function ti() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function si() {
  return Math.floor(this.valueOf() / 1e3);
}
function ri() {
  return new Date(this.valueOf());
}
function ai() {
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
function ni() {
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
function ii() {
  return this.isValid() ? this.toISOString() : null;
}
function oi() {
  return kt(this);
}
function li() {
  return ae({}, m(this));
}
function ui() {
  return m(this).overflow;
}
function di() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
h("N", 0, 0, "eraAbbr");
h("NN", 0, 0, "eraAbbr");
h("NNN", 0, 0, "eraAbbr");
h("NNNN", 0, 0, "eraName");
h("NNNNN", 0, 0, "eraNarrow");
h("y", ["y", 1], "yo", "eraYear");
h("y", ["yy", 2], 0, "eraYear");
h("y", ["yyy", 3], 0, "eraYear");
h("y", ["yyyy", 4], 0, "eraYear");
f("N", It);
f("NN", It);
f("NNN", It);
f("NNNN", wi);
f("NNNNN", Si);
w(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, r) {
    var a = s._locale.erasParse(e, r, s._strict);
    a ? m(s).era = a : m(s).invalidEra = e;
  }
);
f("y", ge);
f("yy", ge);
f("yyy", ge);
f("yyyy", ge);
f("yo", Mi);
w(["y", "yy", "yyy", "yyyy"], T);
w(["yo"], function(e, t, s, r) {
  var a;
  s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[T] = s._locale.eraYearOrdinalParse(e, a) : t[T] = parseInt(e, 10);
});
function ci(e, t) {
  var s, r, a, n = this._eras || te("en")._eras;
  for (s = 0, r = n.length; s < r; ++s) {
    switch (typeof n[s].since) {
      case "string":
        a = d(n[s].since).startOf("day"), n[s].since = a.valueOf();
        break;
    }
    switch (typeof n[s].until) {
      case "undefined":
        n[s].until = 1 / 0;
        break;
      case "string":
        a = d(n[s].until).startOf("day").valueOf(), n[s].until = a.valueOf();
        break;
    }
  }
  return n;
}
function fi(e, t, s) {
  var r, a, n = this.eras(), i, o, c;
  for (e = e.toUpperCase(), r = 0, a = n.length; r < a; ++r)
    if (i = n[r].name.toUpperCase(), o = n[r].abbr.toUpperCase(), c = n[r].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return n[r];
          break;
        case "NNNN":
          if (i === e)
            return n[r];
          break;
        case "NNNNN":
          if (c === e)
            return n[r];
          break;
      }
    else if ([i, o, c].indexOf(e) >= 0)
      return n[r];
}
function hi(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? d(e.since).year() : d(e.since).year() + (t - e.offset) * s;
}
function mi() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].name;
  return "";
}
function pi() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].narrow;
  return "";
}
function _i() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].abbr;
  return "";
}
function yi() {
  var e, t, s, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - d(a[e].since).year()) * s + a[e].offset;
  return this.year();
}
function vi(e) {
  return y(this, "_erasNameRegex") || Et.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function gi(e) {
  return y(this, "_erasAbbrRegex") || Et.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function ki(e) {
  return y(this, "_erasNarrowRegex") || Et.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function It(e, t) {
  return t.erasAbbrRegex(e);
}
function wi(e, t) {
  return t.erasNameRegex(e);
}
function Si(e, t) {
  return t.erasNarrowRegex(e);
}
function Mi(e, t) {
  return t._eraYearOrdinalRegex || ge;
}
function Et() {
  var e = [], t = [], s = [], r = [], a, n, i, o, c, u = this.eras();
  for (a = 0, n = u.length; a < n; ++a)
    i = Q(u[a].name), o = Q(u[a].abbr), c = Q(u[a].narrow), t.push(i), e.push(o), s.push(c), r.push(i), r.push(o), r.push(c);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
h(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
h(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function st(e, t) {
  h(0, [e, e.length], 0, t);
}
st("gggg", "weekYear");
st("ggggg", "weekYear");
st("GGGG", "isoWeekYear");
st("GGGGG", "isoWeekYear");
f("G", Qe);
f("g", Qe);
f("GG", M, P);
f("gg", M, P);
f("GGGG", bt, Yt);
f("gggg", bt, Yt);
f("GGGGG", Je, Ze);
f("ggggg", Je, Ze);
Ne(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, r) {
    t[r.substr(0, 2)] = p(e);
  }
);
Ne(["gg", "GG"], function(e, t, s, r) {
  t[r] = d.parseTwoDigitYear(e);
});
function Di(e) {
  return Is.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Yi(e) {
  return Is.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function bi() {
  return K(this.year(), 1, 4);
}
function Oi() {
  return K(this.isoWeekYear(), 1, 4);
}
function xi() {
  var e = this.localeData()._week;
  return K(this.year(), e.dow, e.doy);
}
function Ti() {
  var e = this.localeData()._week;
  return K(this.weekYear(), e.dow, e.doy);
}
function Is(e, t, s, r, a) {
  var n;
  return e == null ? xe(this, r, a).year : (n = K(e, r, a), t > n && (t = n), Ci.call(this, e, t, s, r, a));
}
function Ci(e, t, s, r, a) {
  var n = ys(e, t, s, r, a), i = Oe(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
h("Q", 0, "Qo", "quarter");
f("Q", is);
w("Q", function(e, t) {
  t[q] = (p(e) - 1) * 3;
});
function Pi(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
h("D", ["DD", 2], "Do", "date");
f("D", M, ke);
f("DD", M, P);
f("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
w(["D", "DD"], H);
w("Do", function(e, t) {
  t[H] = p(e.match(M)[0]);
});
var Es = we("Date", !0);
h("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
f("DDD", qe);
f("DDDD", os);
w(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = p(e);
});
function Ri(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
h("m", ["mm", 2], 0, "minute");
f("m", M, Ot);
f("mm", M, P);
w(["m", "mm"], A);
var Ni = we("Minutes", !1);
h("s", ["ss", 2], 0, "second");
f("s", M, Ot);
f("ss", M, P);
w(["s", "ss"], J);
var Wi = we("Seconds", !1);
h("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
h(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
h(0, ["SSS", 3], 0, "millisecond");
h(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
h(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
h(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
h(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
h(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
h(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
f("S", qe, is);
f("SS", qe, P);
f("SSS", qe, os);
var ne, Vs;
for (ne = "SSSS"; ne.length <= 9; ne += "S")
  f(ne, ge);
function Fi(e, t) {
  t[de] = p(("0." + e) * 1e3);
}
for (ne = "S"; ne.length <= 9; ne += "S")
  w(ne, Fi);
Vs = we("Milliseconds", !1);
h("z", 0, 0, "zoneAbbr");
h("zz", 0, 0, "zoneName");
function Li() {
  return this._isUTC ? "UTC" : "";
}
function Ai() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = Pe.prototype;
l.add = Tn;
l.calendar = Ln;
l.clone = An;
l.diff = jn;
l.endOf = ei;
l.format = Zn;
l.from = qn;
l.fromNow = Jn;
l.to = Qn;
l.toNow = Kn;
l.get = zr;
l.invalidAt = ui;
l.isAfter = In;
l.isBefore = En;
l.isBetween = Vn;
l.isSame = Un;
l.isSameOrAfter = Hn;
l.isSameOrBefore = $n;
l.isValid = oi;
l.lang = Ns;
l.locale = Rs;
l.localeData = Ws;
l.max = on;
l.min = nn;
l.parsingFlags = li;
l.set = Br;
l.startOf = Xn;
l.subtract = Cn;
l.toArray = ai;
l.toObject = ni;
l.toDate = ri;
l.toISOString = zn;
l.inspect = Bn;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = ii;
l.toString = Gn;
l.unix = si;
l.valueOf = ti;
l.creationData = di;
l.eraName = mi;
l.eraNarrow = pi;
l.eraAbbr = _i;
l.eraYear = yi;
l.year = ds;
l.isLeapYear = Gr;
l.weekYear = Di;
l.isoWeekYear = Yi;
l.quarter = l.quarters = Pi;
l.month = ps;
l.daysInMonth = sa;
l.week = l.weeks = da;
l.isoWeek = l.isoWeeks = ca;
l.weeksInYear = xi;
l.weeksInWeekYear = Ti;
l.isoWeeksInYear = bi;
l.isoWeeksInISOWeekYear = Oi;
l.date = Es;
l.day = l.days = Da;
l.weekday = Ya;
l.isoWeekday = ba;
l.dayOfYear = Ri;
l.hour = l.hours = Na;
l.minute = l.minutes = Ni;
l.second = l.seconds = Wi;
l.millisecond = l.milliseconds = Vs;
l.utcOffset = _n;
l.utc = vn;
l.local = gn;
l.parseZone = kn;
l.hasAlignedHourOffset = wn;
l.isDST = Sn;
l.isLocal = Dn;
l.isUtcOffset = Yn;
l.isUtc = xs;
l.isUTC = xs;
l.zoneAbbr = Li;
l.zoneName = Ai;
l.dates = W(
  "dates accessor is deprecated. Use date instead.",
  Es
);
l.months = W(
  "months accessor is deprecated. Use month instead",
  ps
);
l.years = W(
  "years accessor is deprecated. Use year instead",
  ds
);
l.zone = W(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  yn
);
l.isDSTShifted = W(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Mn
);
function Ii(e) {
  return S(e * 1e3);
}
function Ei() {
  return S.apply(null, arguments).parseZone();
}
function Us(e) {
  return e;
}
var v = St.prototype;
v.calendar = Mr;
v.longDateFormat = Or;
v.invalidDate = Tr;
v.ordinal = Rr;
v.preparse = Us;
v.postformat = Us;
v.relativeTime = Wr;
v.pastFuture = Fr;
v.set = wr;
v.eras = ci;
v.erasParse = fi;
v.erasConvertYear = hi;
v.erasAbbrRegex = gi;
v.erasNameRegex = vi;
v.erasNarrowRegex = ki;
v.months = Kr;
v.monthsShort = Xr;
v.monthsParse = ta;
v.monthsRegex = aa;
v.monthsShortRegex = ra;
v.week = ia;
v.firstDayOfYear = ua;
v.firstDayOfWeek = la;
v.weekdays = ga;
v.weekdaysMin = wa;
v.weekdaysShort = ka;
v.weekdaysParse = Ma;
v.weekdaysRegex = Oa;
v.weekdaysShortRegex = xa;
v.weekdaysMinRegex = Ta;
v.isPM = Pa;
v.meridiem = Wa;
function Ge(e, t, s, r) {
  var a = te(), n = j().set(r, t);
  return a[s](n, e);
}
function Hs(e, t, s) {
  if (X(e) && (t = e, e = void 0), e = e || "", t != null)
    return Ge(e, t, s, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = Ge(e, r, s, "month");
  return a;
}
function Vt(e, t, s, r) {
  typeof e == "boolean" ? (X(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, X(t) && (s = t, t = void 0), t = t || "");
  var a = te(), n = e ? a._week.dow : 0, i, o = [];
  if (s != null)
    return Ge(t, (s + n) % 7, r, "day");
  for (i = 0; i < 7; i++)
    o[i] = Ge(t, (i + n) % 7, r, "day");
  return o;
}
function Vi(e, t) {
  return Hs(e, t, "months");
}
function Ui(e, t) {
  return Hs(e, t, "monthsShort");
}
function Hi(e, t, s) {
  return Vt(e, t, s, "weekdays");
}
function $i(e, t, s) {
  return Vt(e, t, s, "weekdaysShort");
}
function ji(e, t, s) {
  return Vt(e, t, s, "weekdaysMin");
}
ie("en", {
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
    var t = e % 10, s = p(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
d.lang = W(
  "moment.lang is deprecated. Use moment.locale instead.",
  ie
);
d.langData = W(
  "moment.langData is deprecated. Use moment.localeData instead.",
  te
);
var B = Math.abs;
function Gi() {
  var e = this._data;
  return this._milliseconds = B(this._milliseconds), this._days = B(this._days), this._months = B(this._months), e.milliseconds = B(e.milliseconds), e.seconds = B(e.seconds), e.minutes = B(e.minutes), e.hours = B(e.hours), e.months = B(e.months), e.years = B(e.years), this;
}
function $s(e, t, s, r) {
  var a = V(t, s);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function zi(e, t) {
  return $s(this, e, t, 1);
}
function Bi(e, t) {
  return $s(this, e, t, -1);
}
function qt(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Zi() {
  var e = this._milliseconds, t = this._days, s = this._months, r = this._data, a, n, i, o, c;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += qt(vt(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, a = N(e / 1e3), r.seconds = a % 60, n = N(a / 60), r.minutes = n % 60, i = N(n / 60), r.hours = i % 24, t += N(i / 24), c = N(js(t)), s += c, t -= qt(vt(c)), o = N(s / 12), s %= 12, r.days = t, r.months = s, r.years = o, this;
}
function js(e) {
  return e * 4800 / 146097;
}
function vt(e) {
  return e * 146097 / 4800;
}
function qi(e) {
  if (!this.isValid())
    return NaN;
  var t, s, r = this._milliseconds;
  if (e = F(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, s = this._months + js(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(vt(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      // Math.floor prevents floating point math errors here
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function se(e) {
  return function() {
    return this.as(e);
  };
}
var Gs = se("ms"), Ji = se("s"), Qi = se("m"), Ki = se("h"), Xi = se("d"), eo = se("w"), to = se("M"), so = se("Q"), ro = se("y"), ao = Gs;
function no() {
  return V(this);
}
function io(e) {
  return e = F(e), this.isValid() ? this[e + "s"]() : NaN;
}
function fe(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var oo = fe("milliseconds"), lo = fe("seconds"), uo = fe("minutes"), co = fe("hours"), fo = fe("days"), ho = fe("months"), mo = fe("years");
function po() {
  return N(this.days() / 7);
}
var Z = Math.round, pe = {
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
function _o(e, t, s, r, a) {
  return a.relativeTime(t || 1, !!s, e, r);
}
function yo(e, t, s, r) {
  var a = V(e).abs(), n = Z(a.as("s")), i = Z(a.as("m")), o = Z(a.as("h")), c = Z(a.as("d")), u = Z(a.as("M")), g = Z(a.as("w")), b = Z(a.as("y")), x = n <= s.ss && ["s", n] || n < s.s && ["ss", n] || i <= 1 && ["m"] || i < s.m && ["mm", i] || o <= 1 && ["h"] || o < s.h && ["hh", o] || c <= 1 && ["d"] || c < s.d && ["dd", c];
  return s.w != null && (x = x || g <= 1 && ["w"] || g < s.w && ["ww", g]), x = x || u <= 1 && ["M"] || u < s.M && ["MM", u] || b <= 1 && ["y"] || ["yy", b], x[2] = t, x[3] = +e > 0, x[4] = r, _o.apply(null, x);
}
function vo(e) {
  return e === void 0 ? Z : typeof e == "function" ? (Z = e, !0) : !1;
}
function go(e, t) {
  return pe[e] === void 0 ? !1 : t === void 0 ? pe[e] : (pe[e] = t, e === "s" && (pe.ss = t - 1), !0);
}
function ko(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, r = pe, a, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, pe, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), n = yo(this, !s, r, a), s && (n = a.pastFuture(+this, n)), a.postformat(n);
}
var ut = Math.abs;
function he(e) {
  return (e > 0) - (e < 0) || +e;
}
function rt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = ut(this._milliseconds) / 1e3, t = ut(this._days), s = ut(this._months), r, a, n, i, o = this.asSeconds(), c, u, g, b;
  return o ? (r = N(e / 60), a = N(r / 60), e %= 60, r %= 60, n = N(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", c = o < 0 ? "-" : "", u = he(this._months) !== he(o) ? "-" : "", g = he(this._days) !== he(o) ? "-" : "", b = he(this._milliseconds) !== he(o) ? "-" : "", c + "P" + (n ? u + n + "Y" : "") + (s ? u + s + "M" : "") + (t ? g + t + "D" : "") + (a || r || e ? "T" : "") + (a ? b + a + "H" : "") + (r ? b + r + "M" : "") + (e ? b + i + "S" : "")) : "P0D";
}
var _ = tt.prototype;
_.isValid = fn;
_.abs = Gi;
_.add = zi;
_.subtract = Bi;
_.as = qi;
_.asMilliseconds = Gs;
_.asSeconds = Ji;
_.asMinutes = Qi;
_.asHours = Ki;
_.asDays = Xi;
_.asWeeks = eo;
_.asMonths = to;
_.asQuarters = so;
_.asYears = ro;
_.valueOf = ao;
_._bubble = Zi;
_.clone = no;
_.get = io;
_.milliseconds = oo;
_.seconds = lo;
_.minutes = uo;
_.hours = co;
_.days = fo;
_.weeks = po;
_.months = ho;
_.years = mo;
_.humanize = ko;
_.toISOString = rt;
_.toString = rt;
_.toJSON = rt;
_.locale = Rs;
_.localeData = Ws;
_.toIsoString = W(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  rt
);
_.lang = Ns;
h("X", 0, 0, "unix");
h("x", 0, 0, "valueOf");
f("x", Qe);
f("X", Er);
w("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
w("x", function(e, t, s) {
  s._d = new Date(p(e));
});
//! moment.js
d.version = "2.30.1";
gr(S);
d.fn = l;
d.min = ln;
d.max = un;
d.now = dn;
d.utc = j;
d.unix = Ii;
d.months = Vi;
d.isDate = Ce;
d.locale = ie;
d.invalid = Be;
d.duration = V;
d.isMoment = E;
d.weekdays = Hi;
d.parseZone = Ei;
d.localeData = te;
d.isDuration = Ee;
d.monthsShort = Ui;
d.weekdaysMin = ji;
d.defineLocale = Rt;
d.updateLocale = Ia;
d.locales = Ea;
d.weekdaysShort = $i;
d.normalizeUnits = F;
d.relativeTimeRounding = vo;
d.relativeTimeThreshold = go;
d.calendarFormat = Fn;
d.prototype = l;
d.HTML5_FMT = {
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
d.defineLocale("pt-br", {
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
const wo = {
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
    const s = e;
    d.locale("pt-br");
    const r = d(), a = r.format("YYYY-MM-DD"), n = dt(""), i = qs(() => [
      (u) => !s.required || !!u || "Insira a data",
      (u) => !u || u.length === 10 || "Complete a data",
      (u) => !u || d(u, "DD/MM/YYYY", !0).isValid() || "Insira uma data válida",
      (u) => !u || !s.impedirFuturo || d(u, "DD/MM/YYYY", !0).isSameOrBefore(r, "day") || "Não utilize datas futuras"
    ]);
    if (ct(n, (u) => {
      if (u.length === 10) {
        const g = d(u, "DD/MM/YYYY", !0);
        if (g.isValid()) return t("input", g.format("YYYY-MM-DD"));
      }
      s.persistValue && u || t("input", s.emptyValue);
    }), s.value) {
      const u = d(s.value, "YYYY-MM-DD", !0);
      n.value = u.isValid() ? u.format("DD/MM/YYYY") : "";
    }
    const o = dt(!1), c = (u) => {
      n.value = d(u, "YYYY-MM-DD", !0).format("DD/MM/YYYY"), o.value = !1;
    };
    return ct(() => s.value, (u) => {
      if (u) {
        const g = d(u, "YYYY-MM-DD", !0);
        g.isValid() && (n.value = g.format("DD/MM/YYYY"));
      }
    }), { __sfc: !0, props: s, emit: t, dataAtualMoment: r, dataAtualFormatada: a, iptModel: n, iptRules: i, pickerShow: o, pickerOnSelect: c, vMaska: es };
  }
};
var So = function() {
  var t = this, s = t._self._c, r = t._self._setupProxy;
  return s("v-text-field", t._g(t._b({ directives: [{ name: "maska", rawName: "v-maska", value: "##/##/####", expression: "'##/##/####'" }], attrs: { type: "tel", rules: r.iptRules, placeholder: t.placeholder, "persistent-placeholder": "" }, scopedSlots: t._u([{ key: "append", fn: function() {
    return [t.btnLimpar && r.props.value ? s("v-btn", { attrs: { icon: "", small: "" }, on: { click: function(a) {
      r.iptModel = "";
    } } }, [s("v-icon", [t._v("mdi-eraser")])], 1) : t._e(), s("v-menu", { attrs: { "min-width": "auto", "offset-y": "", left: "" }, scopedSlots: t._u([{ key: "activator", fn: function({ attrs: a, on: n }) {
      return [s("v-btn", t._g(t._b({ attrs: { icon: "", small: "", color: "primary" } }, "v-btn", a, !1), n), [s("v-icon", [t._v("mdi-calendar-cursor")])], 1)];
    } }]), model: { value: r.pickerShow, callback: function(a) {
      r.pickerShow = a;
    }, expression: "pickerShow" } }, [s("v-date-picker", { attrs: { max: t.impedirFuturo ? r.dataAtualFormatada : t.max, locale: t.locale, value: r.props.value, scrollable: "", "no-title": "" }, on: { input: r.pickerOnSelect } })], 1)];
  }, proxy: !0 }]), model: { value: r.iptModel, callback: function(a) {
    r.iptModel = a;
  }, expression: "iptModel" } }, "v-text-field", t.$attrs, !1), t.$listeners));
}, Mo = [], Do = /* @__PURE__ */ oe(
  wo,
  So,
  Mo
);
const Yo = Do.exports, bo = {
  __name: "VFabToTop",
  props: {
    scrollOffset: { type: Number, default: 300 }
  },
  setup(e) {
    var i;
    const t = e, { proxy: s } = ze(), r = s.$vuetify, a = dt(!1), n = () => a.value = (window.pageYOffset || document.documentElement.offsetTop || 0) > t.scrollOffset;
    return console.log("vuetify: ", r), console.log("vuetify?.application: ", r == null ? void 0 : r.application), console.log("vuetify?.application?.snackbar: ", (i = r == null ? void 0 : r.application) == null ? void 0 : i.snackbar), Jt(() => {
      var o;
      console.log("2vuetify: ", r), console.log("2vuetify?.application: ", r == null ? void 0 : r.application), console.log("2vuetify?.application?.snackbar: ", (o = r == null ? void 0 : r.application) == null ? void 0 : o.snackbar);
    }), { __sfc: !0, props: t, proxy: s, vuetify: r, exibirBotao: a, onScroll: n };
  }
};
var Oo = function() {
  var t = this, s = t._self._c, r = t._self._setupProxy;
  return s("v-fab-transition", [s("v-btn", t._g(t._b({ directives: [{ name: "show", rawName: "v-show", value: r.exibirBotao, expression: "exibirBotao" }, { name: "scroll", rawName: "v-scroll", value: r.onScroll, expression: "onScroll" }], staticClass: "transition-swing", staticStyle: { "z-index": "6" }, style: { marginBottom: `${r.vuetify.application.snackbar}px` }, attrs: { color: "primary", fab: "", fixed: "", right: "", bottom: "" }, on: { click: function(a) {
    return r.vuetify.goTo(0);
  } } }, "v-btn", t.$attrs, !1), t.$listeners), [s("v-icon", [t._v("mdi-chevron-up")])], 1)], 1);
}, xo = [], To = /* @__PURE__ */ oe(
  bo,
  Oo,
  xo
);
const Co = To.exports, Po = {
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
var Ro = function() {
  var t = this, s = t._self._c;
  return t._self._setupProxy, s("v-overlay", t._b({ attrs: { value: t.value, "z-index": t.zIndex, opacity: t.opacity } }, "v-overlay", t.$attrs, !1), [s("div", { staticClass: "text-center" }, [s("v-progress-circular", { attrs: { indeterminate: "", size: "48" } }), s("div", { staticClass: "pt-3" }, [t.$slots.default ? t._t("default") : t.texto ? [t._v(t._s(t.texto))] : t._e()], 2)], 1)]);
}, No = [], Wo = /* @__PURE__ */ oe(
  Po,
  Ro,
  No
);
const zs = Wo.exports, Fo = {
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
var Lo = function() {
  var t = this, s = t._self._c;
  return t._self._setupProxy, s("v-dialog", t._b({ attrs: { value: t.value, "hide-overlay": t.hideOverlay, persistent: t.persistent, width: t.width } }, "v-dialog", t.$attrs, !1), [s("v-card", { attrs: { color: t.color, dark: "" } }, [s("v-card-text", { staticClass: "text-center pt-1" }, [t._t("default", function() {
    return [t._v(t._s(t.text ? t.text : "Por favor aguarde"))];
  }), s("v-progress-linear", { staticClass: "mb-0", attrs: { indeterminate: "", color: t.progressColor } })], 2)], 1)], 1);
}, Ao = [], Io = /* @__PURE__ */ oe(
  Fo,
  Lo,
  Ao
);
const Bs = Io.exports, Eo = {
  __name: "VGlobalComponents",
  setup(e) {
    const t = ee(), { proxy: s } = ze(), r = s.$vuetify;
    return Jt(() => {
      s.$route && ct(
        () => s.$route.fullPath,
        () => t.resetarPrompts()
      );
    }), { __sfc: !0, vuetifyComponentsStore: t, proxy: s, vuetify: r, promptOnOk: (n, i, o = () => {
    }, c = "") => {
      n.validate() && (o(c), t.removerPrompt(i));
    }, vMaska: es, VLoaderOverlay: zs, VLoaderDialog: Bs, VCardToolbar: Qt };
  }
};
var Vo = function() {
  var t = this, s = t._self._c, r = t._self._setupProxy;
  return s("div", [s("div", { staticClass: "d-flex flex-column", class: { "align-center": r.vuetify.breakpoint.smAndDown, "align-end": !r.vuetify.breakpoint.smAndDown }, staticStyle: { position: "fixed", right: "0", top: "0", "z-index": "205" } }, [s("transition-group", { attrs: { name: "slide-x-reverse-transition", appear: "" } }, t._l(r.vuetifyComponentsStore.alerts, function(a) {
    return s("v-alert", { key: a.id, staticClass: "mt-2 mb-0 alert", class: { "mr-3": !r.vuetify.breakpoint.smAndDown }, attrs: { type: a.type, elevation: "2", width: "20rem", "max-width": "100%" } }, [t._v(t._s(a.text))]);
  }), 1)], 1), s("v-dialog", { attrs: { app: "", persistent: "", width: "32rem", value: r.vuetifyComponentsStore.dialogShow } }, [s("v-card", [s("v-alert", { staticClass: "mb-0 text-justify", attrs: { type: "warning", border: "top", text: "", icon: !1 } }, [s("div", { staticClass: "d-flex align-center flex-column" }, [s("v-icon", { staticClass: "warning lighten-1 rounded-circle pa-2 mb-2", attrs: { size: "30", color: "white" } }, [t._v("mdi-alert")]), s("p", { staticClass: "body-1 flex-grow-1 mb-0", staticStyle: { "white-space": "pre-wrap", "text-align": "justify" }, domProps: { innerHTML: t._s(r.vuetifyComponentsStore.dialogContent) } })], 1)]), s("v-divider"), s("v-card-actions", { staticClass: "justify-center" }, [s("v-btn", { attrs: { small: "", depressed: "", color: "warning" }, on: { click: function(a) {
    r.vuetifyComponentsStore.dialogShow = !1;
  } } }, [t._v("OK")])], 1)], 1)], 1), s(r.VLoaderOverlay, { attrs: { value: r.vuetifyComponentsStore.loaderOverlayShow, texto: r.vuetifyComponentsStore.loaderText } }), s(r.VLoaderDialog, { attrs: { value: r.vuetifyComponentsStore.loaderDialogShow, texto: r.vuetifyComponentsStore.loaderText } }), t._l(r.vuetifyComponentsStore.snacks, function(a) {
    return s("v-snackbar", { key: a.id, attrs: { color: a.color, timeout: a.timeout, value: !0, "min-width": "8rem", "max-width": "100%", app: "" }, on: { input: function(n) {
      return r.vuetifyComponentsStore.removeSnack(a.id);
    } } }, [a.icon ? s("v-icon", { staticClass: "mr-1", attrs: { dense: "", color: "white" } }, [t._v(t._s(a.icon))]) : a.color === "success" ? s("v-icon", { staticClass: "mr-1", attrs: { dense: "", color: "white" } }, [t._v("mdi-check-circle")]) : t._e(), t._v(" " + t._s(a.text) + " ")], 1);
  }), t._l(r.vuetifyComponentsStore.prompts, function(a, n) {
    var i;
    return s("v-dialog", { key: a.id, attrs: { width: a.options.width || "24em", persistent: a.options.persistent, "hide-overlay": a.options.hideOverlay }, on: { "click:outside": function(o) {
      a.options.persistent || r.vuetifyComponentsStore.removerPrompt(a.id, !1, !0);
    } }, model: { value: a.show, callback: function(o) {
      t.$set(a, "show", o);
    }, expression: "i.show" } }, [s("v-card", [s("v-form", { ref: "prompters", refInFor: !0, on: { submit: function(o) {
      return o.preventDefault(), r.promptOnOk(t.$refs.prompters[n], a.id, a.options.onOk, a.promptValue);
    } } }, [a.options.title ? s(r.VCardToolbar, { attrs: { title: a.options.title, color: a.options.titleColor || "primary", "hide-close-button": "" } }) : t._e(), a.options.message || a.options.prompt ? s("v-card-text", { staticClass: "text-justify pb-1" }, [a.options.message ? s("div", { class: a.options.messageClass || "my-2", domProps: { innerHTML: t._s(a.options.message) } }) : t._e(), a.options.prompt ? [((i = a.options.prompt) == null ? void 0 : i.type) === "textarea" ? s("v-textarea", { style: { marginTop: a.options.message ? "1.25rem" : "0" }, attrs: { label: a.options.prompt.label, rules: a.options.prompt.rules, outlined: a.options.prompt.outlined, filled: a.options.prompt.filled, placeholder: a.options.prompt.placeholder, persistentPlaceholder: a.options.prompt.persistentPlaceholder, dense: a.options.prompt.dense, autofocus: a.options.prompt.autofocus, rows: a.options.prompt.rows || 5 }, model: { value: a.promptValue, callback: function(o) {
      t.$set(a, "promptValue", o);
    }, expression: "i.promptValue" } }) : s("v-text-field", { directives: [{ name: "maska", rawName: "v-maska", value: a.options.prompt.mask || null, expression: "i.options.prompt.mask || null" }], style: { marginTop: a.options.message ? "1.25rem" : "0" }, attrs: { label: a.options.prompt.label, type: a.options.prompt.type || "text", rules: a.options.prompt.rules, outlined: a.options.prompt.outlined, filled: a.options.prompt.filled, placeholder: a.options.prompt.placeholder, persistentPlaceholder: a.options.prompt.persistentPlaceholder, dense: a.options.prompt.dense, autofocus: a.options.prompt.autofocus }, model: { value: a.promptValue, callback: function(o) {
      t.$set(a, "promptValue", o);
    }, expression: "i.promptValue" } })] : t._e()], 2) : t._e(), s("v-card-actions", { staticClass: "justify-center" }, [a.options.cancel ? s("v-btn", { class: a.options.cancelClass, attrs: { color: a.options.cancelColor || "primary", small: a.options.smallButtons, depressed: a.options.cancelDepressed, outlined: a.options.cancelOutlined ?? !0 }, on: { click: function(o) {
      return r.vuetifyComponentsStore.removerPrompt(a.id, !0, !0);
    } } }, [t._v(t._s(a.options.cancelText || "CANCELAR"))]) : t._e(), s("v-btn", { class: a.options.confirmClass, attrs: { color: a.options.confirmColor || "primary", small: a.options.smallButtons, type: "submit", depressed: a.options.confirmDepressed ?? !0, outlined: a.options.confirmOutlined } }, [t._v(t._s(a.options.confirmText || "OK"))])], 1)], 1)], 1)], 1);
  })], 2);
}, Uo = [], Ho = /* @__PURE__ */ oe(
  Eo,
  Vo,
  Uo
);
const $o = Ho.exports, jo = (e, t = {}) => {
  const s = t.pinia || e.prototype.$pinia;
  if (!s) return console.error("[@eliaslazcano/vuetify-plugin] Pinia é necessário para esta biblioteca.");
  e.prototype.$vuetifyComponentsStore = ee(s), e.component("VBtnTooltip", er), e.component("VCardToolbar", Qt), e.component("VContainerAsync", ur), e.component("VDateField", Yo), e.component("VFabToTop", Co), e.component("VGlobalComponents", $o), e.component("VLoaderDialog", Bs), e.component("VLoaderOverlay", zs);
}, el = { install: jo };
export {
  er as VBtnTooltip,
  Qt as VCardToolbar,
  ur as VContainerAsync,
  Yo as VDateField,
  Co as VFabToTop,
  $o as VGlobalComponents,
  Bs as VLoaderDialog,
  zs as VLoaderOverlay,
  el as default,
  Qo as emitirAlert,
  Ko as emitirDialog,
  Xo as emitirPrompt,
  Jo as emitirSnack,
  Zo as getLoaderOverlayStatus,
  jo as install,
  qo as setLoaderDialog,
  Bo as setLoaderOverlay,
  ee as useVuetifyComponentsStore
};
