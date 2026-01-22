import { defineStore as or } from "pinia";
import { getCurrentInstance as qe, ref as pt, computed as Bt, watch as _t, onMounted as lr } from "vue";
const ee = or("vuetifyComponentsStore", {
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
}), kl = (e, t = "") => {
  const s = ee();
  s.loaderText = t, s.loaderOverlayShow = e;
}, wl = () => ee().loaderOverlayShow, Sl = (e, t = "") => {
  const s = ee();
  s.loaderText = t, s.loaderDialogShow = e;
}, Ml = (e) => {
  ee().addSnack(e);
}, Dl = (e) => {
  ee().addAlert(e);
}, Yl = (e) => {
  ee().showDialog(e);
}, bl = (e) => {
  ee().adicionarPrompt(e);
};
function oe(e, t, s, r, a, n, i, o) {
  var d = typeof e == "function" ? e.options : e;
  return t && (d.render = t, d.staticRenderFns = s, d._compiled = !0), {
    exports: e,
    options: d
  };
}
const ur = {
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
    const { proxy: s } = qe(), r = s.$vuetify;
    return { __sfc: !0, proxy: s, vuetify: r, emit: t };
  }
};
var dr = function() {
  var t = this, s = t._self._c, r = t._self._setupProxy;
  return s("v-tooltip", t._b({ attrs: { disabled: r.vuetify.breakpoint.xs, color: t.tooltipColor }, scopedSlots: t._u([{ key: "activator", fn: function({ on: a, attrs: n }) {
    return [s("v-btn", t._g(t._b({ class: t.btnClasses, attrs: { color: t.color, icon: t.icon, to: t.to, target: t.target, href: t.href, small: t.small, "x-small": t.xSmall, disabled: t.disabled, fab: t.fab, large: t.large, dark: t.dark, fixed: t.fixed, bottom: t.btnBottom, right: t.btnRight }, on: { click: function(i) {
      return r.emit("click");
    } } }, "v-btn", n, !1), a), [t._t("default")], 2)];
  } }], null, !0) }, "v-tooltip", t.$attrs, !1), [t.$slots.tooltip ? t._t("default") : s("span", [t._v(t._s(t.text))])], 2);
}, cr = [], fr = /* @__PURE__ */ oe(
  ur,
  dr,
  cr
);
const hr = fr.exports, mr = {
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
    const { proxy: t } = qe(), s = t.$vuetify;
    return { __sfc: !0, proxy: t, vuetify: s };
  }
};
var pr = function() {
  var t = this, s = t._self._c, r = t._self._setupProxy;
  return s("v-toolbar", t._b({ staticClass: "flex-grow-0", attrs: { color: r.vuetify.theme.dark && t.color === "primary" ? void 0 : t.color, dark: "", flat: "", dense: "" } }, "v-toolbar", t.$attrs, !1), [t.icon ? s("v-icon", { staticClass: "mr-2", attrs: { size: t.iconSize } }, [t._v(t._s(t.icon))]) : t._e(), s("v-toolbar-title", { staticStyle: { "line-height": "1.1" }, style: { fontSize: t.titleSize } }, [t._v(t._s(t.title))]), s("v-spacer"), t._t("default"), t.btnClose ? s("v-btn", { attrs: { icon: "" }, on: { click: function(a) {
    return t.$emit("close");
  } } }, [s("v-icon", [t._v("mdi-close")])], 1) : t._e()], 2);
}, _r = [], yr = /* @__PURE__ */ oe(
  mr,
  pr,
  _r
);
const ls = yr.exports;
var Je = Symbol(), be = Symbol(), Zt = Symbol(), qt = Symbol(), Dt = function(t) {
  return "frag" in t;
}, vr = {
  get: function() {
    return this[be] || this.parentElement;
  },
  configurable: !0
}, xe = function(t, s) {
  be in t || (t[be] = s, Object.defineProperty(t, "parentNode", vr));
}, gr = {
  get: function() {
    var t = this.parentNode.childNodes, s = t.indexOf(this);
    return s > -1 && t[s + 1] || null;
  }
}, Ve = function(t) {
  Zt in t || (t[Zt] = !0, Object.defineProperty(t, "nextSibling", gr));
}, kr = function(t, s) {
  for (; t.parentNode !== s; ) {
    var r = t, a = r.parentNode;
    a && (t = a);
  }
  return t;
}, ut, us = function(t) {
  if (!ut) {
    var s = Object.getOwnPropertyDescriptor(Node.prototype, "childNodes");
    ut = s.get;
  }
  var r = ut.apply(t), a = Array.from(r).map((function(n) {
    return kr(n, t);
  }));
  return a.filter((function(n, i) {
    return n !== a[i - 1];
  }));
}, wr = {
  get: function() {
    return this.frag || us(this);
  }
}, Sr = {
  get: function() {
    return this.childNodes[0] || null;
  }
};
function Mr() {
  return this.childNodes.length > 0;
}
var Jt = function(t) {
  qt in t || (t[qt] = !0, Object.defineProperties(t, {
    childNodes: wr,
    firstChild: Sr
  }), t.hasChildNodes = Mr);
};
function Dr() {
  var e;
  (e = this.frag[0]).before.apply(e, arguments);
}
function Yr() {
  var e = this.frag, t = e.splice(0, e.length);
  t.forEach((function(s) {
    s.remove();
  }));
}
var br = function e(t) {
  var s;
  return (s = Array.prototype).concat.apply(s, t.map((function(r) {
    return Dt(r) ? e(r.frag) : r;
  })));
}, xr = function(t, s) {
  var r = t[Je];
  s.before(r), xe(r, t), t.frag.unshift(r);
};
function Qt(e) {
  if (Dt(this)) {
    var t = this.frag.indexOf(e);
    if (t > -1) {
      var s = this.frag.splice(t, 1), r = s[0];
      this.frag.length === 0 && xr(this, r), e.remove();
    }
  } else {
    var a = us(this), n = a.indexOf(e);
    n > -1 && e.remove();
  }
  return e;
}
function Kt(e, t) {
  var s = this, r = e.frag || [e];
  if (Dt(this)) {
    if (e[be] === this && e.parentElement)
      return e;
    var a = this.frag;
    if (t) {
      var n = a.indexOf(t);
      n > -1 && (a.splice.apply(a, [n, 0].concat(r)), t.before.apply(t, r));
    } else {
      var i = a[a.length - 1];
      a.push.apply(a, r), i.after.apply(i, r);
    }
    ds(this);
  } else t ? this.childNodes.includes(t) && t.before.apply(t, r) : this.append.apply(this, r);
  r.forEach((function(d) {
    xe(d, s);
  }));
  var o = r[r.length - 1];
  return Ve(o), e;
}
function Or(e) {
  if (e[be] === this && e.parentElement)
    return e;
  var t = this.frag, s = t[t.length - 1];
  return s.after(e), xe(e, this), ds(this), t.push(e), e;
}
var ds = function(t) {
  var s = t[Je];
  t.frag[0] === s && (t.frag.shift(), s.remove());
}, Tr = {
  set: function(t) {
    var s = this;
    if (this.frag[0] !== this[Je] && this.frag.slice().forEach((function(a) {
      return s.removeChild(a);
    })), t) {
      var r = document.createElement("div");
      r.innerHTML = t, Array.from(r.childNodes).forEach((function(a) {
        s.appendChild(a);
      }));
    }
  },
  get: function() {
    return "";
  }
}, Cr = {
  inserted: function(t) {
    var s = t.parentNode, r = t.nextSibling, a = t.previousSibling, n = Array.from(t.childNodes), i = document.createComment("");
    n.length === 0 && n.push(i), t.frag = n, t[Je] = i;
    var o = document.createDocumentFragment();
    o.append.apply(o, br(n)), t.replaceWith(o), n.forEach((function(d) {
      xe(d, t), Ve(d);
    })), Jt(t), Object.assign(t, {
      remove: Yr,
      appendChild: Or,
      insertBefore: Kt,
      removeChild: Qt,
      before: Dr
    }), Object.defineProperty(t, "innerHTML", Tr), s && (Object.assign(s, {
      removeChild: Qt,
      insertBefore: Kt
    }), xe(t, s), Jt(s)), r && Ve(t), a && Ve(a);
  },
  unbind: function(t) {
    t.remove();
  }
}, Pr = {
  name: "Fragment",
  directives: {
    frag: Cr
  },
  render: function(t) {
    return t("div", {
      directives: [{
        name: "frag"
      }]
    }, this.$slots.default);
  }
};
const Nr = {
  __name: "VContainerAsync",
  props: {
    loading: { type: Boolean, default: !1 },
    color: { type: String, default: "blue" },
    transition: { type: String, default: "fade-transition" },
    spinnerTransition: { type: String, default: "fade-transition" },
    texto: { type: String, default: "" },
    fluid: { type: Boolean, default: !1 },
    appear: { type: Boolean, default: !0 },
    fixed: { type: Boolean, default: !1 }
  },
  setup(e) {
    return { __sfc: !0, Fragment: Pr };
  }
};
var Rr = function() {
  var t = this, s = t._self._c, r = t._self._setupProxy;
  return s(r.Fragment, [s("transition", { attrs: { mode: "out-in", name: t.loading ? t.transition : t.spinnerTransition, appear: t.appear, "leave-class": t.loading ? t.transition + "-leave" : t.spinnerTransition + "-leave", "leave-to-class": t.loading ? t.transition + "-leave-to" : t.spinnerTransition + "-leave-to", "leave-active-class": t.loading ? t.transition + "-leave-active" : t.spinnerTransition + "-leave-active", "enter-class": t.loading ? t.spinnerTransition + "-enter" : t.transition + "-enter", "enter-to-class": t.loading ? t.spinnerTransition + "-enter-to" : t.transition + "-enter-to", "enter-active-class": t.loading ? t.spinnerTransition + "-enter-active" : t.transition + "-enter-active" }, on: { "after-leave": function(a) {
    return t.$emit("after-leave", t.loading);
  }, "after-enter": function(a) {
    return t.$emit("after-enter", t.loading);
  } } }, [t.loading && t.fixed ? s("div", { key: 1, staticClass: "text-center", staticStyle: { position: "fixed", left: "0", right: "0", top: "calc(50% - 16px)" } }, [s("v-progress-circular", { attrs: { indeterminate: "", color: t.color } }), t.texto ? s("div", { staticClass: "mt-2 grey--text text--darken-1" }, [t._v(t._s(t.texto))]) : t._e()], 1) : t.loading ? s("div", { key: 2, staticClass: "d-flex justify-center align-center grow flex-column", staticStyle: { height: "100%" } }, [s("v-progress-circular", { attrs: { indeterminate: "", color: t.color } }), t.texto ? s("div", { staticClass: "mt-2 grey--text text--darken-1" }, [t._v(t._s(t.texto))]) : t._e()], 1) : s("v-container", t._g(t._b({ key: 3, attrs: { fluid: t.fluid } }, "v-container", t.$attrs, !1), t.$listeners), [t._t("default")], 2)], 1)], 1);
}, Fr = [], Wr = /* @__PURE__ */ oe(
  Nr,
  Rr,
  Fr
);
const Lr = Wr.exports;
var Ar = Object.defineProperty, Ir = (e, t, s) => t in e ? Ar(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, De = (e, t, s) => Ir(e, typeof t != "symbol" ? t + "" : t, s);
const Xt = {
  "#": { pattern: /[0-9]/ },
  "@": { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[a-zA-Z0-9]/ }
}, es = (e, t, s) => e.replaceAll(t, "").replace(s, ".").replace("..", ".").replace(/[^.\d]/g, ""), ts = (e, t, s) => {
  var r;
  return new Intl.NumberFormat(((r = s.number) == null ? void 0 : r.locale) ?? "en", {
    minimumFractionDigits: e,
    maximumFractionDigits: t,
    roundingMode: "trunc"
  });
}, Er = (e, t = !0, s) => {
  var r, a, n, i;
  const o = ((r = s.number) == null ? void 0 : r.unsigned) !== !0 && e.startsWith("-") ? "-" : "", d = ((a = s.number) == null ? void 0 : a.fraction) ?? 0;
  let f = ts(0, d, s);
  const m = f.formatToParts(1000.12), S = ((n = m.find((k) => k.type === "group")) == null ? void 0 : n.value) ?? " ", O = ((i = m.find((k) => k.type === "decimal")) == null ? void 0 : i.value) ?? ".", L = es(e, S, O);
  if (Number.isNaN(parseFloat(L))) return o;
  const re = L.split(".");
  if (re[1] != null && re[1].length >= 1) {
    const k = re[1].length <= d ? re[1].length : d;
    f = ts(k, d, s);
  }
  let H = f.format(parseFloat(L));
  return t ? d > 0 && L.endsWith(".") && !L.slice(0, -1).includes(".") && (H += O) : H = es(H, S, O), o + H;
}, cs = (e) => JSON.parse(e.replaceAll("'", '"')), Vr = (e, t = {}) => {
  const s = { ...t };
  e.dataset.maska != null && e.dataset.maska !== "" && (s.mask = Hr(e.dataset.maska)), e.dataset.maskaEager != null && (s.eager = Ae(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (s.reversed = Ae(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (s.tokensReplace = Ae(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (s.tokens = Ur(e.dataset.maskaTokens));
  const r = {};
  return e.dataset.maskaNumberLocale != null && (r.locale = e.dataset.maskaNumberLocale), e.dataset.maskaNumberFraction != null && (r.fraction = parseInt(e.dataset.maskaNumberFraction)), e.dataset.maskaNumberUnsigned != null && (r.unsigned = Ae(e.dataset.maskaNumberUnsigned)), (e.dataset.maskaNumber != null || Object.values(r).length > 0) && (s.number = r), s;
}, Ae = (e) => e !== "" ? !!JSON.parse(e) : !0, Hr = (e) => e.startsWith("[") && e.endsWith("]") ? cs(e) : e, Ur = (e) => {
  if (e.startsWith("{") && e.endsWith("}"))
    return cs(e);
  const t = {};
  return e.split("|").forEach((s) => {
    const r = s.split(":");
    t[r[0]] = {
      pattern: fs() ? new RegExp(r[1], "u") : new RegExp(r[1]),
      optional: r[2] === "optional",
      multiple: r[2] === "multiple",
      repeated: r[2] === "repeated"
    };
  }), t;
}, fs = () => {
  try {
    return new RegExp("\\p{L}", "u"), !0;
  } catch {
    return !1;
  }
};
class $r {
  constructor(t = {}) {
    De(this, "opts", {}), De(this, "memo", /* @__PURE__ */ new Map());
    const s = { ...t };
    if (s.tokens != null) {
      s.tokens = s.tokensReplace ? { ...s.tokens } : { ...Xt, ...s.tokens };
      for (const r of Object.values(s.tokens))
        typeof r.pattern == "string" && (r.pattern = fs() ? new RegExp(r.pattern, "u") : new RegExp(r.pattern));
    } else
      s.tokens = Xt;
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
    if (this.opts.number != null) return Er(t, r, this.opts);
    if (s == null) return t;
    const a = `v=${t},mr=${s},m=${r ? 1 : 0}`;
    if (this.memo.has(a)) return this.memo.get(a);
    const { mask: n, escaped: i } = this.escapeMask(s), o = [], d = this.opts.tokens != null ? this.opts.tokens : {}, f = this.isReversed() ? -1 : 1, m = this.isReversed() ? "unshift" : "push", S = this.isReversed() ? 0 : n.length - 1, O = this.isReversed() ? () => k > -1 && N > -1 : () => k < n.length && N < t.length, L = (le) => !this.isReversed() && le <= S || this.isReversed() && le >= S;
    let re, H = -1, k = this.isReversed() ? n.length - 1 : 0, N = this.isReversed() ? t.length - 1 : 0, lt = !1;
    for (; O(); ) {
      const le = n.charAt(k), z = d[le], Le = (z == null ? void 0 : z.transform) != null ? z.transform(t.charAt(N)) : t.charAt(N);
      if (!i.includes(k) && z != null ? (Le.match(z.pattern) != null ? (o[m](Le), z.repeated ? (H === -1 ? H = k : k === S && k !== H && (k = H - f), S === H && (k -= f)) : z.multiple && (lt = !0, k -= f), k += f) : z.multiple ? lt && (k += f, N -= f, lt = !1) : Le === re ? re = void 0 : z.optional && (k += f, N -= f), N += f) : (r && !this.isEager() && o[m](le), Le === le && !this.isEager() ? N += f : re = le, this.isEager() || (k += f)), this.isEager())
        for (; L(k) && (d[n.charAt(k)] == null || i.includes(k)); ) {
          if (r) {
            if (o[m](n.charAt(k)), t.charAt(N) === n.charAt(k)) {
              k += f, N += f;
              continue;
            }
          } else n.charAt(k) === t.charAt(N) && (N += f);
          k += f;
        }
    }
    return this.memo.set(a, o.join("")), this.memo.get(a);
  }
}
class jr {
  constructor(t, s = {}) {
    De(this, "items", /* @__PURE__ */ new Map()), De(this, "eventAbortController"), De(this, "onInput", (r) => {
      if (r instanceof CustomEvent && r.type === "input" && !r.isTrusted && !r.bubbles)
        return;
      const a = r.target, n = this.items.get(a);
      if (n === void 0) return;
      const i = "inputType" in r && r.inputType.startsWith("delete"), o = n.isEager(), d = i && o && n.unmasked(a.value) === "" ? "" : a.value;
      this.fixCursor(a, i, () => this.setValue(a, d));
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
      const a = new $r(Vr(r, s));
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
    const d = t.value, f = o.slice(0, i), m = d.slice(0, i), S = (a = this.processInput(t, f)) == null ? void 0 : a.unmasked, O = (n = this.processInput(t, m)) == null ? void 0 : n.unmasked;
    if (S === void 0 || O === void 0) return;
    let L = i;
    f !== m && (L += s ? d.length - o.length : S.length - O.length), t.setSelectionRange(L, L);
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
const dt = /* @__PURE__ */ new WeakMap(), Gr = (e, t) => {
  if (e.arg == null || e.instance == null) return;
  const s = "setup" in e.instance.$.type;
  e.arg in e.instance ? e.instance[e.arg] = t : s && console.warn("Maska: please expose `%s` using defineExpose", e.arg);
}, hs = (e, t) => {
  var s;
  const r = e instanceof HTMLInputElement ? e : e.querySelector("input");
  if (r == null || (r == null ? void 0 : r.type) === "file") return;
  let a = {};
  if (t.value != null && (a = typeof t.value == "string" ? { mask: t.value } : { ...t.value }), t.arg != null) {
    const n = (i) => {
      const o = t.modifiers.unmasked ? i.unmasked : t.modifiers.completed ? i.completed : i.masked;
      Gr(t, o);
    };
    a.onMaska = a.onMaska == null ? n : Array.isArray(a.onMaska) ? [...a.onMaska, n] : [a.onMaska, n];
  }
  dt.has(r) ? (s = dt.get(r)) == null || s.update(a) : dt.set(r, new jr(r, a));
};
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var ms;
function u() {
  return ms.apply(null, arguments);
}
function zr(e) {
  ms = e;
}
function I(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function ce(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function v(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Yt(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (v(e, t))
      return !1;
  return !0;
}
function C(e) {
  return e === void 0;
}
function X(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function Ne(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function ps(e, t) {
  var s = [], r, a = e.length;
  for (r = 0; r < a; ++r)
    s.push(t(e[r], r));
  return s;
}
function ae(e, t) {
  for (var s in t)
    v(t, s) && (e[s] = t[s]);
  return v(t, "toString") && (e.toString = t.toString), v(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function j(e, t, s, r) {
  return Is(e, t, s, r, !0).utc();
}
function Br() {
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
function p(e) {
  return e._pf == null && (e._pf = Br()), e._pf;
}
var yt;
Array.prototype.some ? yt = Array.prototype.some : yt = function(e) {
  var t = Object(this), s = t.length >>> 0, r;
  for (r = 0; r < s; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function bt(e) {
  var t = null, s = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = p(e), s = yt.call(t.parsedDateParts, function(a) {
    return a != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function Qe(e) {
  var t = j(NaN);
  return e != null ? ae(p(t), e) : p(t).userInvalidated = !0, t;
}
var ss = u.momentProperties = [], ct = !1;
function xt(e, t) {
  var s, r, a, n = ss.length;
  if (C(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), C(t._i) || (e._i = t._i), C(t._f) || (e._f = t._f), C(t._l) || (e._l = t._l), C(t._strict) || (e._strict = t._strict), C(t._tzm) || (e._tzm = t._tzm), C(t._isUTC) || (e._isUTC = t._isUTC), C(t._offset) || (e._offset = t._offset), C(t._pf) || (e._pf = p(t)), C(t._locale) || (e._locale = t._locale), n > 0)
    for (s = 0; s < n; s++)
      r = ss[s], a = t[r], C(a) || (e[r] = a);
  return e;
}
function Re(e) {
  xt(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), ct === !1 && (ct = !0, u.updateOffset(this), ct = !1);
}
function E(e) {
  return e instanceof Re || e != null && e._isAMomentObject != null;
}
function _s(e) {
  u.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function F(e, t) {
  var s = !0;
  return ae(function() {
    if (u.deprecationHandler != null && u.deprecationHandler(null, e), s) {
      var r = [], a, n, i, o = arguments.length;
      for (n = 0; n < o; n++) {
        if (a = "", typeof arguments[n] == "object") {
          a += `
[` + n + "] ";
          for (i in arguments[0])
            v(arguments[0], i) && (a += i + ": " + arguments[0][i] + ", ");
          a = a.slice(0, -2);
        } else
          a = arguments[n];
        r.push(a);
      }
      _s(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var rs = {};
function ys(e, t) {
  u.deprecationHandler != null && u.deprecationHandler(e, t), rs[e] || (_s(t), rs[e] = !0);
}
u.suppressDeprecationWarnings = !1;
u.deprecationHandler = null;
function G(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Zr(e) {
  var t, s;
  for (s in e)
    v(e, s) && (t = e[s], G(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function vt(e, t) {
  var s = ae({}, e), r;
  for (r in t)
    v(t, r) && (ce(e[r]) && ce(t[r]) ? (s[r] = {}, ae(s[r], e[r]), ae(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
  for (r in e)
    v(e, r) && !v(t, r) && ce(e[r]) && (s[r] = ae({}, s[r]));
  return s;
}
function Ot(e) {
  e != null && this.set(e);
}
var gt;
Object.keys ? gt = Object.keys : gt = function(e) {
  var t, s = [];
  for (t in e)
    v(e, t) && s.push(t);
  return s;
};
var qr = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Jr(e, t, s) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return G(r) ? r.call(t, s) : r;
}
function $(e, t, s) {
  var r = "" + Math.abs(e), a = t - r.length, n = e >= 0;
  return (n ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r;
}
var Tt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ie = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ft = {}, _e = {};
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
function Qr(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Kr(e) {
  var t = e.match(Tt), s, r;
  for (s = 0, r = t.length; s < r; s++)
    _e[t[s]] ? t[s] = _e[t[s]] : t[s] = Qr(t[s]);
  return function(a) {
    var n = "", i;
    for (i = 0; i < r; i++)
      n += G(t[i]) ? t[i].call(a, e) : t[i];
    return n;
  };
}
function He(e, t) {
  return e.isValid() ? (t = vs(t, e.localeData()), ft[t] = ft[t] || Kr(t), ft[t](e)) : e.localeData().invalidDate();
}
function vs(e, t) {
  var s = 5;
  function r(a) {
    return t.longDateFormat(a) || a;
  }
  for (Ie.lastIndex = 0; s >= 0 && Ie.test(e); )
    e = e.replace(
      Ie,
      r
    ), Ie.lastIndex = 0, s -= 1;
  return e;
}
var Xr = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function ea(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(Tt).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var ta = "Invalid date";
function sa() {
  return this._invalidDate;
}
var ra = "%d", aa = /\d{1,2}/;
function na(e) {
  return this._ordinal.replace("%d", e);
}
var ia = {
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
function oa(e, t, s, r) {
  var a = this._relativeTime[s];
  return G(a) ? a(e, t, s, r) : a.replace(/%d/i, e);
}
function la(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return G(s) ? s(t) : s.replace(/%s/i, t);
}
var as = {
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
function W(e) {
  return typeof e == "string" ? as[e] || as[e.toLowerCase()] : void 0;
}
function Ct(e) {
  var t = {}, s, r;
  for (r in e)
    v(e, r) && (s = W(r), s && (t[s] = e[r]));
  return t;
}
var ua = {
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
function da(e) {
  var t = [], s;
  for (s in e)
    v(e, s) && t.push({ unit: s, priority: ua[s] });
  return t.sort(function(r, a) {
    return r.priority - a.priority;
  }), t;
}
var gs = /\d/, P = /\d\d/, ks = /\d{3}/, Pt = /\d{4}/, Ke = /[+-]?\d{6}/, D = /\d\d?/, ws = /\d\d\d\d?/, Ss = /\d\d\d\d\d\d?/, Xe = /\d{1,3}/, Nt = /\d{1,4}/, et = /[+-]?\d{1,6}/, ge = /\d+/, tt = /[+-]?\d+/, ca = /Z|[+-]\d\d:?\d\d/gi, st = /Z|[+-]\d\d(?::?\d\d)?/gi, fa = /[+-]?\d+(\.\d{1,3})?/, Fe = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ke = /^[1-9]\d?/, Rt = /^([1-9]\d|\d)/, je;
je = {};
function c(e, t, s) {
  je[e] = G(t) ? t : function(r, a) {
    return r && s ? s : t;
  };
}
function ha(e, t) {
  return v(je, e) ? je[e](t._strict, t._locale) : new RegExp(ma(e));
}
function ma(e) {
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
function R(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function _(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = R(t)), s;
}
var kt = {};
function w(e, t) {
  var s, r = t, a;
  for (typeof e == "string" && (e = [e]), X(t) && (r = function(n, i) {
    i[t] = _(n);
  }), a = e.length, s = 0; s < a; s++)
    kt[e[s]] = r;
}
function We(e, t) {
  w(e, function(s, r, a, n) {
    a._w = a._w || {}, t(s, a._w, a, n);
  });
}
function pa(e, t, s) {
  t != null && v(kt, e) && kt[e](t, s._a, s, e);
}
function rt(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var T = 0, q = 1, U = 2, x = 3, A = 4, J = 5, de = 6, _a = 7, ya = 8;
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
c("Y", tt);
c("YY", D, P);
c("YYYY", Nt, Pt);
c("YYYYY", et, Ke);
c("YYYYYY", et, Ke);
w(["YYYYY", "YYYYYY"], T);
w("YYYY", function(e, t) {
  t[T] = e.length === 2 ? u.parseTwoDigitYear(e) : _(e);
});
w("YY", function(e, t) {
  t[T] = u.parseTwoDigitYear(e);
});
w("Y", function(e, t) {
  t[T] = parseInt(e, 10);
});
function Ye(e) {
  return rt(e) ? 366 : 365;
}
u.parseTwoDigitYear = function(e) {
  return _(e) + (_(e) > 68 ? 1900 : 2e3);
};
var Ms = we("FullYear", !0);
function va() {
  return rt(this.year());
}
function we(e, t) {
  return function(s) {
    return s != null ? (Ds(this, e, s), u.updateOffset(this, t), this) : Oe(this, e);
  };
}
function Oe(e, t) {
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
function Ds(e, t, s) {
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
    n = s, i = e.month(), o = e.date(), o = o === 29 && i === 1 && !rt(n) ? 28 : o, a ? r.setUTCFullYear(n, i, o) : r.setFullYear(n, i, o);
  }
}
function ga(e) {
  return e = W(e), G(this[e]) ? this[e]() : this;
}
function ka(e, t) {
  if (typeof e == "object") {
    e = Ct(e);
    var s = da(e), r, a = s.length;
    for (r = 0; r < a; r++)
      this[s[r].unit](e[s[r].unit]);
  } else if (e = W(e), G(this[e]))
    return this[e](t);
  return this;
}
function wa(e, t) {
  return (e % t + t) % t;
}
var b;
Array.prototype.indexOf ? b = Array.prototype.indexOf : b = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function Ft(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = wa(t, 12);
  return e += (t - s) / 12, s === 1 ? rt(e) ? 29 : 28 : 31 - s % 7 % 2;
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
c("M", D, ke);
c("MM", D, P);
c("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
c("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
w(["M", "MM"], function(e, t) {
  t[q] = _(e) - 1;
});
w(["MMM", "MMMM"], function(e, t, s, r) {
  var a = s._locale.monthsParse(e, r, s._strict);
  a != null ? t[q] = a : p(s).invalidMonth = e;
});
var Sa = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Ys = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), bs = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Ma = Fe, Da = Fe;
function Ya(e, t) {
  return e ? I(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || bs).test(t) ? "format" : "standalone"][e.month()] : I(this._months) ? this._months : this._months.standalone;
}
function ba(e, t) {
  return e ? I(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[bs.test(t) ? "format" : "standalone"][e.month()] : I(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function xa(e, t, s) {
  var r, a, n, i = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      n = j([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        n,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(n, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (a = b.call(this._shortMonthsParse, i), a !== -1 ? a : null) : (a = b.call(this._longMonthsParse, i), a !== -1 ? a : null) : t === "MMM" ? (a = b.call(this._shortMonthsParse, i), a !== -1 ? a : (a = b.call(this._longMonthsParse, i), a !== -1 ? a : null)) : (a = b.call(this._longMonthsParse, i), a !== -1 ? a : (a = b.call(this._shortMonthsParse, i), a !== -1 ? a : null));
}
function Oa(e, t, s) {
  var r, a, n;
  if (this._monthsParseExact)
    return xa.call(this, e, t, s);
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
function xs(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = _(t);
    else if (t = e.localeData().monthsParse(t), !X(t))
      return e;
  }
  var s = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, Ft(e.year(), s)), e._isUTC ? e._d.setUTCMonth(s, r) : e._d.setMonth(s, r), e;
}
function Os(e) {
  return e != null ? (xs(this, e), u.updateOffset(this, !0), this) : Oe(this, "Month");
}
function Ta() {
  return Ft(this.year(), this.month());
}
function Ca(e) {
  return this._monthsParseExact ? (v(this, "_monthsRegex") || Ts.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (v(this, "_monthsShortRegex") || (this._monthsShortRegex = Ma), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function Pa(e) {
  return this._monthsParseExact ? (v(this, "_monthsRegex") || Ts.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (v(this, "_monthsRegex") || (this._monthsRegex = Da), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Ts() {
  function e(d, f) {
    return f.length - d.length;
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
function Na(e, t, s, r, a, n, i) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, s, r, a, n, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, s, r, a, n, i), o;
}
function Te(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Ge(e, t, s) {
  var r = 7 + t - s, a = (7 + Te(e, 0, r).getUTCDay() - t) % 7;
  return -a + r - 1;
}
function Cs(e, t, s, r, a) {
  var n = (7 + s - r) % 7, i = Ge(e, r, a), o = 1 + 7 * (t - 1) + n + i, d, f;
  return o <= 0 ? (d = e - 1, f = Ye(d) + o) : o > Ye(e) ? (d = e + 1, f = o - Ye(e)) : (d = e, f = o), {
    year: d,
    dayOfYear: f
  };
}
function Ce(e, t, s) {
  var r = Ge(e.year(), t, s), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, n, i;
  return a < 1 ? (i = e.year() - 1, n = a + K(i, t, s)) : a > K(e.year(), t, s) ? (n = a - K(e.year(), t, s), i = e.year() + 1) : (i = e.year(), n = a), {
    week: n,
    year: i
  };
}
function K(e, t, s) {
  var r = Ge(e, t, s), a = Ge(e + 1, t, s);
  return (Ye(e) - r + a) / 7;
}
h("w", ["ww", 2], "wo", "week");
h("W", ["WW", 2], "Wo", "isoWeek");
c("w", D, ke);
c("ww", D, P);
c("W", D, ke);
c("WW", D, P);
We(
  ["w", "ww", "W", "WW"],
  function(e, t, s, r) {
    t[r.substr(0, 1)] = _(e);
  }
);
function Ra(e) {
  return Ce(e, this._week.dow, this._week.doy).week;
}
var Fa = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Wa() {
  return this._week.dow;
}
function La() {
  return this._week.doy;
}
function Aa(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Ia(e) {
  var t = Ce(this, 1, 4).week;
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
c("d", D);
c("e", D);
c("E", D);
c("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
c("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
c("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
We(["dd", "ddd", "dddd"], function(e, t, s, r) {
  var a = s._locale.weekdaysParse(e, r, s._strict);
  a != null ? t.d = a : p(s).invalidWeekday = e;
});
We(["d", "e", "E"], function(e, t, s, r) {
  t[r] = _(e);
});
function Ea(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Va(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Wt(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Ha = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Ps = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ua = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), $a = Fe, ja = Fe, Ga = Fe;
function za(e, t) {
  var s = I(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Wt(s, this._week.dow) : e ? s[e.day()] : s;
}
function Ba(e) {
  return e === !0 ? Wt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Za(e) {
  return e === !0 ? Wt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function qa(e, t, s) {
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
  return s ? t === "dddd" ? (a = b.call(this._weekdaysParse, i), a !== -1 ? a : null) : t === "ddd" ? (a = b.call(this._shortWeekdaysParse, i), a !== -1 ? a : null) : (a = b.call(this._minWeekdaysParse, i), a !== -1 ? a : null) : t === "dddd" ? (a = b.call(this._weekdaysParse, i), a !== -1 || (a = b.call(this._shortWeekdaysParse, i), a !== -1) ? a : (a = b.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : t === "ddd" ? (a = b.call(this._shortWeekdaysParse, i), a !== -1 || (a = b.call(this._weekdaysParse, i), a !== -1) ? a : (a = b.call(this._minWeekdaysParse, i), a !== -1 ? a : null)) : (a = b.call(this._minWeekdaysParse, i), a !== -1 || (a = b.call(this._weekdaysParse, i), a !== -1) ? a : (a = b.call(this._shortWeekdaysParse, i), a !== -1 ? a : null));
}
function Ja(e, t, s) {
  var r, a, n;
  if (this._weekdaysParseExact)
    return qa.call(this, e, t, s);
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
function Qa(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = Oe(this, "Day");
  return e != null ? (e = Ea(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Ka(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Xa(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Va(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function en(e) {
  return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || Lt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (v(this, "_weekdaysRegex") || (this._weekdaysRegex = $a), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function tn(e) {
  return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || Lt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (v(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ja), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function sn(e) {
  return this._weekdaysParseExact ? (v(this, "_weekdaysRegex") || Lt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (v(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ga), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Lt() {
  function e(m, S) {
    return S.length - m.length;
  }
  var t = [], s = [], r = [], a = [], n, i, o, d, f;
  for (n = 0; n < 7; n++)
    i = j([2e3, 1]).day(n), o = Q(this.weekdaysMin(i, "")), d = Q(this.weekdaysShort(i, "")), f = Q(this.weekdays(i, "")), t.push(o), s.push(d), r.push(f), a.push(o), a.push(d), a.push(f);
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
function At() {
  return this.hours() % 12 || 12;
}
function rn() {
  return this.hours() || 24;
}
h("H", ["HH", 2], 0, "hour");
h("h", ["hh", 2], 0, At);
h("k", ["kk", 2], 0, rn);
h("hmm", 0, 0, function() {
  return "" + At.apply(this) + $(this.minutes(), 2);
});
h("hmmss", 0, 0, function() {
  return "" + At.apply(this) + $(this.minutes(), 2) + $(this.seconds(), 2);
});
h("Hmm", 0, 0, function() {
  return "" + this.hours() + $(this.minutes(), 2);
});
h("Hmmss", 0, 0, function() {
  return "" + this.hours() + $(this.minutes(), 2) + $(this.seconds(), 2);
});
function Ns(e, t) {
  h(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Ns("a", !0);
Ns("A", !1);
function Rs(e, t) {
  return t._meridiemParse;
}
c("a", Rs);
c("A", Rs);
c("H", D, Rt);
c("h", D, ke);
c("k", D, ke);
c("HH", D, P);
c("hh", D, P);
c("kk", D, P);
c("hmm", ws);
c("hmmss", Ss);
c("Hmm", ws);
c("Hmmss", Ss);
w(["H", "HH"], x);
w(["k", "kk"], function(e, t, s) {
  var r = _(e);
  t[x] = r === 24 ? 0 : r;
});
w(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
w(["h", "hh"], function(e, t, s) {
  t[x] = _(e), p(s).bigHour = !0;
});
w("hmm", function(e, t, s) {
  var r = e.length - 2;
  t[x] = _(e.substr(0, r)), t[A] = _(e.substr(r)), p(s).bigHour = !0;
});
w("hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[x] = _(e.substr(0, r)), t[A] = _(e.substr(r, 2)), t[J] = _(e.substr(a)), p(s).bigHour = !0;
});
w("Hmm", function(e, t, s) {
  var r = e.length - 2;
  t[x] = _(e.substr(0, r)), t[A] = _(e.substr(r));
});
w("Hmmss", function(e, t, s) {
  var r = e.length - 4, a = e.length - 2;
  t[x] = _(e.substr(0, r)), t[A] = _(e.substr(r, 2)), t[J] = _(e.substr(a));
});
function an(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var nn = /[ap]\.?m?\.?/i, on = we("Hours", !0);
function ln(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var Fs = {
  calendar: qr,
  longDateFormat: Xr,
  invalidDate: ta,
  ordinal: ra,
  dayOfMonthOrdinalParse: aa,
  relativeTime: ia,
  months: Sa,
  monthsShort: Ys,
  week: Fa,
  weekdays: Ha,
  weekdaysMin: Ua,
  weekdaysShort: Ps,
  meridiemParse: nn
}, Y = {}, Se = {}, Pe;
function un(e, t) {
  var s, r = Math.min(e.length, t.length);
  for (s = 0; s < r; s += 1)
    if (e[s] !== t[s])
      return s;
  return r;
}
function ns(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function dn(e) {
  for (var t = 0, s, r, a, n; t < e.length; ) {
    for (n = ns(e[t]).split("-"), s = n.length, r = ns(e[t + 1]), r = r ? r.split("-") : null; s > 0; ) {
      if (a = at(n.slice(0, s).join("-")), a)
        return a;
      if (r && r.length >= s && un(n, r) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return Pe;
}
function cn(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function at(e) {
  var t = null, s;
  if (Y[e] === void 0 && typeof module < "u" && module && module.exports && cn(e))
    try {
      t = Pe._abbr, s = require, s("./locale/" + e), ie(t);
    } catch {
      Y[e] = null;
    }
  return Y[e];
}
function ie(e, t) {
  var s;
  return e && (C(t) ? s = te(e) : s = It(e, t), s ? Pe = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Pe._abbr;
}
function It(e, t) {
  if (t !== null) {
    var s, r = Fs;
    if (t.abbr = e, Y[e] != null)
      ys(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = Y[e]._config;
    else if (t.parentLocale != null)
      if (Y[t.parentLocale] != null)
        r = Y[t.parentLocale]._config;
      else if (s = at(t.parentLocale), s != null)
        r = s._config;
      else
        return Se[t.parentLocale] || (Se[t.parentLocale] = []), Se[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return Y[e] = new Ot(vt(r, t)), Se[e] && Se[e].forEach(function(a) {
      It(a.name, a.config);
    }), ie(e), Y[e];
  } else
    return delete Y[e], null;
}
function fn(e, t) {
  if (t != null) {
    var s, r, a = Fs;
    Y[e] != null && Y[e].parentLocale != null ? Y[e].set(vt(Y[e]._config, t)) : (r = at(e), r != null && (a = r._config), t = vt(a, t), r == null && (t.abbr = e), s = new Ot(t), s.parentLocale = Y[e], Y[e] = s), ie(e);
  } else
    Y[e] != null && (Y[e].parentLocale != null ? (Y[e] = Y[e].parentLocale, e === ie() && ie(e)) : Y[e] != null && delete Y[e]);
  return Y[e];
}
function te(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Pe;
  if (!I(e)) {
    if (t = at(e), t)
      return t;
    e = [e];
  }
  return dn(e);
}
function hn() {
  return gt(Y);
}
function Et(e) {
  var t, s = e._a;
  return s && p(e).overflow === -2 && (t = s[q] < 0 || s[q] > 11 ? q : s[U] < 1 || s[U] > Ft(s[T], s[q]) ? U : s[x] < 0 || s[x] > 24 || s[x] === 24 && (s[A] !== 0 || s[J] !== 0 || s[de] !== 0) ? x : s[A] < 0 || s[A] > 59 ? A : s[J] < 0 || s[J] > 59 ? J : s[de] < 0 || s[de] > 999 ? de : -1, p(e)._overflowDayOfYear && (t < T || t > U) && (t = U), p(e)._overflowWeeks && t === -1 && (t = _a), p(e)._overflowWeekday && t === -1 && (t = ya), p(e).overflow = t), e;
}
var mn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, pn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, _n = /Z|[+-]\d\d(?::?\d\d)?/, Ee = [
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
], ht = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], yn = /^\/?Date\((-?\d+)/i, vn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, gn = {
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
function Ws(e) {
  var t, s, r = e._i, a = mn.exec(r) || pn.exec(r), n, i, o, d, f = Ee.length, m = ht.length;
  if (a) {
    for (p(e).iso = !0, t = 0, s = f; t < s; t++)
      if (Ee[t][1].exec(a[1])) {
        i = Ee[t][0], n = Ee[t][2] !== !1;
        break;
      }
    if (i == null) {
      e._isValid = !1;
      return;
    }
    if (a[3]) {
      for (t = 0, s = m; t < s; t++)
        if (ht[t][1].exec(a[3])) {
          o = (a[2] || " ") + ht[t][0];
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
      if (_n.exec(a[4]))
        d = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = i + (o || "") + (d || ""), Ht(e);
  } else
    e._isValid = !1;
}
function kn(e, t, s, r, a, n) {
  var i = [
    wn(e),
    Ys.indexOf(t),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(a, 10)
  ];
  return n && i.push(parseInt(n, 10)), i;
}
function wn(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function Sn(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function Mn(e, t, s) {
  if (e) {
    var r = Ps.indexOf(e), a = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== a)
      return p(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function Dn(e, t, s) {
  if (e)
    return gn[e];
  if (t)
    return 0;
  var r = parseInt(s, 10), a = r % 100, n = (r - a) / 100;
  return n * 60 + a;
}
function Ls(e) {
  var t = vn.exec(Sn(e._i)), s;
  if (t) {
    if (s = kn(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !Mn(t[1], s, e))
      return;
    e._a = s, e._tzm = Dn(t[8], t[9], t[10]), e._d = Te.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), p(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function Yn(e) {
  var t = yn.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (Ws(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (Ls(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : u.createFromInputFallback(e);
}
u.createFromInputFallback = F(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function me(e, t, s) {
  return e ?? t ?? s;
}
function bn(e) {
  var t = new Date(u.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Vt(e) {
  var t, s, r = [], a, n, i;
  if (!e._d) {
    for (a = bn(e), e._w && e._a[U] == null && e._a[q] == null && xn(e), e._dayOfYear != null && (i = me(e._a[T], a[T]), (e._dayOfYear > Ye(i) || e._dayOfYear === 0) && (p(e)._overflowDayOfYear = !0), s = Te(i, 0, e._dayOfYear), e._a[q] = s.getUTCMonth(), e._a[U] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = a[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[x] === 24 && e._a[A] === 0 && e._a[J] === 0 && e._a[de] === 0 && (e._nextDay = !0, e._a[x] = 0), e._d = (e._useUTC ? Te : Na).apply(
      null,
      r
    ), n = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[x] = 24), e._w && typeof e._w.d < "u" && e._w.d !== n && (p(e).weekdayMismatch = !0);
  }
}
function xn(e) {
  var t, s, r, a, n, i, o, d, f;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (n = 1, i = 4, s = me(
    t.GG,
    e._a[T],
    Ce(M(), 1, 4).year
  ), r = me(t.W, 1), a = me(t.E, 1), (a < 1 || a > 7) && (d = !0)) : (n = e._locale._week.dow, i = e._locale._week.doy, f = Ce(M(), n, i), s = me(t.gg, e._a[T], f.year), r = me(t.w, f.week), t.d != null ? (a = t.d, (a < 0 || a > 6) && (d = !0)) : t.e != null ? (a = t.e + n, (t.e < 0 || t.e > 6) && (d = !0)) : a = n), r < 1 || r > K(s, n, i) ? p(e)._overflowWeeks = !0 : d != null ? p(e)._overflowWeekday = !0 : (o = Cs(s, r, a, n, i), e._a[T] = o.year, e._dayOfYear = o.dayOfYear);
}
u.ISO_8601 = function() {
};
u.RFC_2822 = function() {
};
function Ht(e) {
  if (e._f === u.ISO_8601) {
    Ws(e);
    return;
  }
  if (e._f === u.RFC_2822) {
    Ls(e);
    return;
  }
  e._a = [], p(e).empty = !0;
  var t = "" + e._i, s, r, a, n, i, o = t.length, d = 0, f, m;
  for (a = vs(e._f, e._locale).match(Tt) || [], m = a.length, s = 0; s < m; s++)
    n = a[s], r = (t.match(ha(n, e)) || [])[0], r && (i = t.substr(0, t.indexOf(r)), i.length > 0 && p(e).unusedInput.push(i), t = t.slice(
      t.indexOf(r) + r.length
    ), d += r.length), _e[n] ? (r ? p(e).empty = !1 : p(e).unusedTokens.push(n), pa(n, r, e)) : e._strict && !r && p(e).unusedTokens.push(n);
  p(e).charsLeftOver = o - d, t.length > 0 && p(e).unusedInput.push(t), e._a[x] <= 12 && p(e).bigHour === !0 && e._a[x] > 0 && (p(e).bigHour = void 0), p(e).parsedDateParts = e._a.slice(0), p(e).meridiem = e._meridiem, e._a[x] = On(
    e._locale,
    e._a[x],
    e._meridiem
  ), f = p(e).era, f !== null && (e._a[T] = e._locale.erasConvertYear(f, e._a[T])), Vt(e), Et(e);
}
function On(e, t, s) {
  var r;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function Tn(e) {
  var t, s, r, a, n, i, o = !1, d = e._f.length;
  if (d === 0) {
    p(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (a = 0; a < d; a++)
    n = 0, i = !1, t = xt({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[a], Ht(t), bt(t) && (i = !0), n += p(t).charsLeftOver, n += p(t).unusedTokens.length * 10, p(t).score = n, o ? n < r && (r = n, s = t) : (r == null || n < r || i) && (r = n, s = t, i && (o = !0));
  ae(e, s || t);
}
function Cn(e) {
  if (!e._d) {
    var t = Ct(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = ps(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), Vt(e);
  }
}
function Pn(e) {
  var t = new Re(Et(As(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function As(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || te(e._l), t === null || s === void 0 && t === "" ? Qe({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), E(t) ? new Re(Et(t)) : (Ne(t) ? e._d = t : I(s) ? Tn(e) : s ? Ht(e) : Nn(e), bt(e) || (e._d = null), e));
}
function Nn(e) {
  var t = e._i;
  C(t) ? e._d = new Date(u.now()) : Ne(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? Yn(e) : I(t) ? (e._a = ps(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), Vt(e)) : ce(t) ? Cn(e) : X(t) ? e._d = new Date(t) : u.createFromInputFallback(e);
}
function Is(e, t, s, r, a) {
  var n = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (ce(e) && Yt(e) || I(e) && e.length === 0) && (e = void 0), n._isAMomentObject = !0, n._useUTC = n._isUTC = a, n._l = s, n._i = e, n._f = t, n._strict = r, Pn(n);
}
function M(e, t, s, r) {
  return Is(e, t, s, r, !1);
}
var Rn = F(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = M.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : Qe();
  }
), Fn = F(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = M.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : Qe();
  }
);
function Es(e, t) {
  var s, r;
  if (t.length === 1 && I(t[0]) && (t = t[0]), !t.length)
    return M();
  for (s = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
  return s;
}
function Wn() {
  var e = [].slice.call(arguments, 0);
  return Es("isBefore", e);
}
function Ln() {
  var e = [].slice.call(arguments, 0);
  return Es("isAfter", e);
}
var An = function() {
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
function In(e) {
  var t, s = !1, r, a = Me.length;
  for (t in e)
    if (v(e, t) && !(b.call(Me, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < a; ++r)
    if (e[Me[r]]) {
      if (s)
        return !1;
      parseFloat(e[Me[r]]) !== _(e[Me[r]]) && (s = !0);
    }
  return !0;
}
function En() {
  return this._isValid;
}
function Vn() {
  return V(NaN);
}
function nt(e) {
  var t = Ct(e), s = t.year || 0, r = t.quarter || 0, a = t.month || 0, n = t.week || t.isoWeek || 0, i = t.day || 0, o = t.hour || 0, d = t.minute || 0, f = t.second || 0, m = t.millisecond || 0;
  this._isValid = In(t), this._milliseconds = +m + f * 1e3 + // 1000
  d * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +i + n * 7, this._months = +a + r * 3 + s * 12, this._data = {}, this._locale = te(), this._bubble();
}
function Ue(e) {
  return e instanceof nt;
}
function wt(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Hn(e, t, s) {
  var r = Math.min(e.length, t.length), a = Math.abs(e.length - t.length), n = 0, i;
  for (i = 0; i < r; i++)
    _(e[i]) !== _(t[i]) && n++;
  return n + a;
}
function Vs(e, t) {
  h(e, 0, 0, function() {
    var s = this.utcOffset(), r = "+";
    return s < 0 && (s = -s, r = "-"), r + $(~~(s / 60), 2) + t + $(~~s % 60, 2);
  });
}
Vs("Z", ":");
Vs("ZZ", "");
c("Z", st);
c("ZZ", st);
w(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = Ut(st, e);
});
var Un = /([\+\-]|\d\d)/gi;
function Ut(e, t) {
  var s = (t || "").match(e), r, a, n;
  return s === null ? null : (r = s[s.length - 1] || [], a = (r + "").match(Un) || ["-", 0, 0], n = +(a[1] * 60) + _(a[2]), n === 0 ? 0 : a[0] === "+" ? n : -n);
}
function $t(e, t) {
  var s, r;
  return t._isUTC ? (s = t.clone(), r = (E(e) || Ne(e) ? e.valueOf() : M(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), u.updateOffset(s, !1), s) : M(e).local();
}
function St(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
u.updateOffset = function() {
};
function $n(e, t, s) {
  var r = this._offset || 0, a;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Ut(st, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (a = St(this)), this._offset = e, this._isUTC = !0, a != null && this.add(a, "m"), r !== e && (!t || this._changeInProgress ? $s(
      this,
      V(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, u.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : St(this);
}
function jn(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Gn(e) {
  return this.utcOffset(0, e);
}
function zn(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(St(this), "m")), this;
}
function Bn() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Ut(ca, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Zn(e) {
  return this.isValid() ? (e = e ? M(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function qn() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Jn() {
  if (!C(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return xt(e, this), e = As(e), e._a ? (t = e._isUTC ? j(e._a) : M(e._a), this._isDSTShifted = this.isValid() && Hn(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Qn() {
  return this.isValid() ? !this._isUTC : !1;
}
function Kn() {
  return this.isValid() ? this._isUTC : !1;
}
function Hs() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Xn = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, ei = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function V(e, t) {
  var s = e, r = null, a, n, i;
  return Ue(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : X(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = Xn.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: _(r[U]) * a,
    h: _(r[x]) * a,
    m: _(r[A]) * a,
    s: _(r[J]) * a,
    ms: _(wt(r[de] * 1e3)) * a
    // the millisecond decimal point is included in the match
  }) : (r = ei.exec(e)) ? (a = r[1] === "-" ? -1 : 1, s = {
    y: ue(r[2], a),
    M: ue(r[3], a),
    w: ue(r[4], a),
    d: ue(r[5], a),
    h: ue(r[6], a),
    m: ue(r[7], a),
    s: ue(r[8], a)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (i = ti(
    M(s.from),
    M(s.to)
  ), s = {}, s.ms = i.milliseconds, s.M = i.months), n = new nt(s), Ue(e) && v(e, "_locale") && (n._locale = e._locale), Ue(e) && v(e, "_isValid") && (n._isValid = e._isValid), n;
}
V.fn = nt.prototype;
V.invalid = Vn;
function ue(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function is(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function ti(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = $t(t, e), e.isBefore(t) ? s = is(e, t) : (s = is(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function Us(e, t) {
  return function(s, r) {
    var a, n;
    return r !== null && !isNaN(+r) && (ys(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), n = s, s = r, r = n), a = V(s, r), $s(this, a, e), this;
  };
}
function $s(e, t, s, r) {
  var a = t._milliseconds, n = wt(t._days), i = wt(t._months);
  e.isValid() && (r = r ?? !0, i && xs(e, Oe(e, "Month") + i * s), n && Ds(e, "Date", Oe(e, "Date") + n * s), a && e._d.setTime(e._d.valueOf() + a * s), r && u.updateOffset(e, n || i));
}
var si = Us(1, "add"), ri = Us(-1, "subtract");
function js(e) {
  return typeof e == "string" || e instanceof String;
}
function ai(e) {
  return E(e) || Ne(e) || js(e) || X(e) || ii(e) || ni(e) || e === null || e === void 0;
}
function ni(e) {
  var t = ce(e) && !Yt(e), s = !1, r = [
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
    n = r[a], s = s || v(e, n);
  return t && s;
}
function ii(e) {
  var t = I(e), s = !1;
  return t && (s = e.filter(function(r) {
    return !X(r) && js(e);
  }).length === 0), t && s;
}
function oi(e) {
  var t = ce(e) && !Yt(e), s = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], a, n;
  for (a = 0; a < r.length; a += 1)
    n = r[a], s = s || v(e, n);
  return t && s;
}
function li(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function ui(e, t) {
  arguments.length === 1 && (arguments[0] ? ai(arguments[0]) ? (e = arguments[0], t = void 0) : oi(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || M(), r = $t(s, this).startOf("day"), a = u.calendarFormat(this, r) || "sameElse", n = t && (G(t[a]) ? t[a].call(this, s) : t[a]);
  return this.format(
    n || this.localeData().calendar(a, this, M(s))
  );
}
function di() {
  return new Re(this);
}
function ci(e, t) {
  var s = E(e) ? e : M(e);
  return this.isValid() && s.isValid() ? (t = W(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function fi(e, t) {
  var s = E(e) ? e : M(e);
  return this.isValid() && s.isValid() ? (t = W(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function hi(e, t, s, r) {
  var a = E(e) ? e : M(e), n = E(t) ? t : M(t);
  return this.isValid() && a.isValid() && n.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(a, s) : !this.isBefore(a, s)) && (r[1] === ")" ? this.isBefore(n, s) : !this.isAfter(n, s))) : !1;
}
function mi(e, t) {
  var s = E(e) ? e : M(e), r;
  return this.isValid() && s.isValid() ? (t = W(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function pi(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function _i(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function yi(e, t, s) {
  var r, a, n;
  if (!this.isValid())
    return NaN;
  if (r = $t(e, this), !r.isValid())
    return NaN;
  switch (a = (r.utcOffset() - this.utcOffset()) * 6e4, t = W(t), t) {
    case "year":
      n = $e(this, r) / 12;
      break;
    case "month":
      n = $e(this, r);
      break;
    case "quarter":
      n = $e(this, r) / 3;
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
  return s ? n : R(n);
}
function $e(e, t) {
  if (e.date() < t.date())
    return -$e(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(s, "months"), a, n;
  return t - r < 0 ? (a = e.clone().add(s - 1, "months"), n = (t - r) / (r - a)) : (a = e.clone().add(s + 1, "months"), n = (t - r) / (a - r)), -(s + n) || 0;
}
u.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
u.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function vi() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function gi(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? He(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : G(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", He(s, "Z")) : He(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function ki() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, r, a, n;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", a = "-MM-DD[T]HH:mm:ss.SSS", n = t + '[")]', this.format(s + r + a + n);
}
function wi(e) {
  e || (e = this.isUtc() ? u.defaultFormatUtc : u.defaultFormat);
  var t = He(this, e);
  return this.localeData().postformat(t);
}
function Si(e, t) {
  return this.isValid() && (E(e) && e.isValid() || M(e).isValid()) ? V({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Mi(e) {
  return this.from(M(), e);
}
function Di(e, t) {
  return this.isValid() && (E(e) && e.isValid() || M(e).isValid()) ? V({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function Yi(e) {
  return this.to(M(), e);
}
function Gs(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = te(e), t != null && (this._locale = t), this);
}
var zs = F(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function Bs() {
  return this._locale;
}
var ze = 1e3, ye = 60 * ze, Be = 60 * ye, Zs = (365 * 400 + 97) * 24 * Be;
function ve(e, t) {
  return (e % t + t) % t;
}
function qs(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - Zs : new Date(e, t, s).valueOf();
}
function Js(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - Zs : Date.UTC(e, t, s);
}
function bi(e) {
  var t, s;
  if (e = W(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Js : qs, e) {
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
        Be
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= ve(t, ye);
      break;
    case "second":
      t = this._d.valueOf(), t -= ve(t, ze);
      break;
  }
  return this._d.setTime(t), u.updateOffset(this, !0), this;
}
function xi(e) {
  var t, s;
  if (e = W(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? Js : qs, e) {
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
      t = this._d.valueOf(), t += Be - ve(
        t + (this._isUTC ? 0 : this.utcOffset() * ye),
        Be
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += ye - ve(t, ye) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += ze - ve(t, ze) - 1;
      break;
  }
  return this._d.setTime(t), u.updateOffset(this, !0), this;
}
function Oi() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function Ti() {
  return Math.floor(this.valueOf() / 1e3);
}
function Ci() {
  return new Date(this.valueOf());
}
function Pi() {
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
function Ni() {
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
function Ri() {
  return this.isValid() ? this.toISOString() : null;
}
function Fi() {
  return bt(this);
}
function Wi() {
  return ae({}, p(this));
}
function Li() {
  return p(this).overflow;
}
function Ai() {
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
c("N", jt);
c("NN", jt);
c("NNN", jt);
c("NNNN", Zi);
c("NNNNN", qi);
w(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, r) {
    var a = s._locale.erasParse(e, r, s._strict);
    a ? p(s).era = a : p(s).invalidEra = e;
  }
);
c("y", ge);
c("yy", ge);
c("yyy", ge);
c("yyyy", ge);
c("yo", Ji);
w(["y", "yy", "yyy", "yyyy"], T);
w(["yo"], function(e, t, s, r) {
  var a;
  s._locale._eraYearOrdinalRegex && (a = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[T] = s._locale.eraYearOrdinalParse(e, a) : t[T] = parseInt(e, 10);
});
function Ii(e, t) {
  var s, r, a, n = this._eras || te("en")._eras;
  for (s = 0, r = n.length; s < r; ++s) {
    switch (typeof n[s].since) {
      case "string":
        a = u(n[s].since).startOf("day"), n[s].since = a.valueOf();
        break;
    }
    switch (typeof n[s].until) {
      case "undefined":
        n[s].until = 1 / 0;
        break;
      case "string":
        a = u(n[s].until).startOf("day").valueOf(), n[s].until = a.valueOf();
        break;
    }
  }
  return n;
}
function Ei(e, t, s) {
  var r, a, n = this.eras(), i, o, d;
  for (e = e.toUpperCase(), r = 0, a = n.length; r < a; ++r)
    if (i = n[r].name.toUpperCase(), o = n[r].abbr.toUpperCase(), d = n[r].narrow.toUpperCase(), s)
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
          if (d === e)
            return n[r];
          break;
      }
    else if ([i, o, d].indexOf(e) >= 0)
      return n[r];
}
function Vi(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? u(e.since).year() : u(e.since).year() + (t - e.offset) * s;
}
function Hi() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].name;
  return "";
}
function Ui() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].narrow;
  return "";
}
function $i() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].abbr;
  return "";
}
function ji() {
  var e, t, s, r, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (s = a[e].since <= a[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), a[e].since <= r && r <= a[e].until || a[e].until <= r && r <= a[e].since)
      return (this.year() - u(a[e].since).year()) * s + a[e].offset;
  return this.year();
}
function Gi(e) {
  return v(this, "_erasNameRegex") || Gt.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function zi(e) {
  return v(this, "_erasAbbrRegex") || Gt.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Bi(e) {
  return v(this, "_erasNarrowRegex") || Gt.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function jt(e, t) {
  return t.erasAbbrRegex(e);
}
function Zi(e, t) {
  return t.erasNameRegex(e);
}
function qi(e, t) {
  return t.erasNarrowRegex(e);
}
function Ji(e, t) {
  return t._eraYearOrdinalRegex || ge;
}
function Gt() {
  var e = [], t = [], s = [], r = [], a, n, i, o, d, f = this.eras();
  for (a = 0, n = f.length; a < n; ++a)
    i = Q(f[a].name), o = Q(f[a].abbr), d = Q(f[a].narrow), t.push(i), e.push(o), s.push(d), r.push(i), r.push(o), r.push(d);
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
function it(e, t) {
  h(0, [e, e.length], 0, t);
}
it("gggg", "weekYear");
it("ggggg", "weekYear");
it("GGGG", "isoWeekYear");
it("GGGGG", "isoWeekYear");
c("G", tt);
c("g", tt);
c("GG", D, P);
c("gg", D, P);
c("GGGG", Nt, Pt);
c("gggg", Nt, Pt);
c("GGGGG", et, Ke);
c("ggggg", et, Ke);
We(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, r) {
    t[r.substr(0, 2)] = _(e);
  }
);
We(["gg", "GG"], function(e, t, s, r) {
  t[r] = u.parseTwoDigitYear(e);
});
function Qi(e) {
  return Qs.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Ki(e) {
  return Qs.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Xi() {
  return K(this.year(), 1, 4);
}
function eo() {
  return K(this.isoWeekYear(), 1, 4);
}
function to() {
  var e = this.localeData()._week;
  return K(this.year(), e.dow, e.doy);
}
function so() {
  var e = this.localeData()._week;
  return K(this.weekYear(), e.dow, e.doy);
}
function Qs(e, t, s, r, a) {
  var n;
  return e == null ? Ce(this, r, a).year : (n = K(e, r, a), t > n && (t = n), ro.call(this, e, t, s, r, a));
}
function ro(e, t, s, r, a) {
  var n = Cs(e, t, s, r, a), i = Te(n.year, 0, n.dayOfYear);
  return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this;
}
h("Q", 0, "Qo", "quarter");
c("Q", gs);
w("Q", function(e, t) {
  t[q] = (_(e) - 1) * 3;
});
function ao(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
h("D", ["DD", 2], "Do", "date");
c("D", D, ke);
c("DD", D, P);
c("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
w(["D", "DD"], U);
w("Do", function(e, t) {
  t[U] = _(e.match(D)[0]);
});
var Ks = we("Date", !0);
h("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
c("DDD", Xe);
c("DDDD", ks);
w(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = _(e);
});
function no(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
h("m", ["mm", 2], 0, "minute");
c("m", D, Rt);
c("mm", D, P);
w(["m", "mm"], A);
var io = we("Minutes", !1);
h("s", ["ss", 2], 0, "second");
c("s", D, Rt);
c("ss", D, P);
w(["s", "ss"], J);
var oo = we("Seconds", !1);
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
c("S", Xe, gs);
c("SS", Xe, P);
c("SSS", Xe, ks);
var ne, Xs;
for (ne = "SSSS"; ne.length <= 9; ne += "S")
  c(ne, ge);
function lo(e, t) {
  t[de] = _(("0." + e) * 1e3);
}
for (ne = "S"; ne.length <= 9; ne += "S")
  w(ne, lo);
Xs = we("Milliseconds", !1);
h("z", 0, 0, "zoneAbbr");
h("zz", 0, 0, "zoneName");
function uo() {
  return this._isUTC ? "UTC" : "";
}
function co() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = Re.prototype;
l.add = si;
l.calendar = ui;
l.clone = di;
l.diff = yi;
l.endOf = xi;
l.format = wi;
l.from = Si;
l.fromNow = Mi;
l.to = Di;
l.toNow = Yi;
l.get = ga;
l.invalidAt = Li;
l.isAfter = ci;
l.isBefore = fi;
l.isBetween = hi;
l.isSame = mi;
l.isSameOrAfter = pi;
l.isSameOrBefore = _i;
l.isValid = Fi;
l.lang = zs;
l.locale = Gs;
l.localeData = Bs;
l.max = Fn;
l.min = Rn;
l.parsingFlags = Wi;
l.set = ka;
l.startOf = bi;
l.subtract = ri;
l.toArray = Pi;
l.toObject = Ni;
l.toDate = Ci;
l.toISOString = gi;
l.inspect = ki;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = Ri;
l.toString = vi;
l.unix = Ti;
l.valueOf = Oi;
l.creationData = Ai;
l.eraName = Hi;
l.eraNarrow = Ui;
l.eraAbbr = $i;
l.eraYear = ji;
l.year = Ms;
l.isLeapYear = va;
l.weekYear = Qi;
l.isoWeekYear = Ki;
l.quarter = l.quarters = ao;
l.month = Os;
l.daysInMonth = Ta;
l.week = l.weeks = Aa;
l.isoWeek = l.isoWeeks = Ia;
l.weeksInYear = to;
l.weeksInWeekYear = so;
l.isoWeeksInYear = Xi;
l.isoWeeksInISOWeekYear = eo;
l.date = Ks;
l.day = l.days = Qa;
l.weekday = Ka;
l.isoWeekday = Xa;
l.dayOfYear = no;
l.hour = l.hours = on;
l.minute = l.minutes = io;
l.second = l.seconds = oo;
l.millisecond = l.milliseconds = Xs;
l.utcOffset = $n;
l.utc = Gn;
l.local = zn;
l.parseZone = Bn;
l.hasAlignedHourOffset = Zn;
l.isDST = qn;
l.isLocal = Qn;
l.isUtcOffset = Kn;
l.isUtc = Hs;
l.isUTC = Hs;
l.zoneAbbr = uo;
l.zoneName = co;
l.dates = F(
  "dates accessor is deprecated. Use date instead.",
  Ks
);
l.months = F(
  "months accessor is deprecated. Use month instead",
  Os
);
l.years = F(
  "years accessor is deprecated. Use year instead",
  Ms
);
l.zone = F(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  jn
);
l.isDSTShifted = F(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Jn
);
function fo(e) {
  return M(e * 1e3);
}
function ho() {
  return M.apply(null, arguments).parseZone();
}
function er(e) {
  return e;
}
var g = Ot.prototype;
g.calendar = Jr;
g.longDateFormat = ea;
g.invalidDate = sa;
g.ordinal = na;
g.preparse = er;
g.postformat = er;
g.relativeTime = oa;
g.pastFuture = la;
g.set = Zr;
g.eras = Ii;
g.erasParse = Ei;
g.erasConvertYear = Vi;
g.erasAbbrRegex = zi;
g.erasNameRegex = Gi;
g.erasNarrowRegex = Bi;
g.months = Ya;
g.monthsShort = ba;
g.monthsParse = Oa;
g.monthsRegex = Pa;
g.monthsShortRegex = Ca;
g.week = Ra;
g.firstDayOfYear = La;
g.firstDayOfWeek = Wa;
g.weekdays = za;
g.weekdaysMin = Za;
g.weekdaysShort = Ba;
g.weekdaysParse = Ja;
g.weekdaysRegex = en;
g.weekdaysShortRegex = tn;
g.weekdaysMinRegex = sn;
g.isPM = an;
g.meridiem = ln;
function Ze(e, t, s, r) {
  var a = te(), n = j().set(r, t);
  return a[s](n, e);
}
function tr(e, t, s) {
  if (X(e) && (t = e, e = void 0), e = e || "", t != null)
    return Ze(e, t, s, "month");
  var r, a = [];
  for (r = 0; r < 12; r++)
    a[r] = Ze(e, r, s, "month");
  return a;
}
function zt(e, t, s, r) {
  typeof e == "boolean" ? (X(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, X(t) && (s = t, t = void 0), t = t || "");
  var a = te(), n = e ? a._week.dow : 0, i, o = [];
  if (s != null)
    return Ze(t, (s + n) % 7, r, "day");
  for (i = 0; i < 7; i++)
    o[i] = Ze(t, (i + n) % 7, r, "day");
  return o;
}
function mo(e, t) {
  return tr(e, t, "months");
}
function po(e, t) {
  return tr(e, t, "monthsShort");
}
function _o(e, t, s) {
  return zt(e, t, s, "weekdays");
}
function yo(e, t, s) {
  return zt(e, t, s, "weekdaysShort");
}
function vo(e, t, s) {
  return zt(e, t, s, "weekdaysMin");
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
    var t = e % 10, s = _(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
u.lang = F(
  "moment.lang is deprecated. Use moment.locale instead.",
  ie
);
u.langData = F(
  "moment.langData is deprecated. Use moment.localeData instead.",
  te
);
var B = Math.abs;
function go() {
  var e = this._data;
  return this._milliseconds = B(this._milliseconds), this._days = B(this._days), this._months = B(this._months), e.milliseconds = B(e.milliseconds), e.seconds = B(e.seconds), e.minutes = B(e.minutes), e.hours = B(e.hours), e.months = B(e.months), e.years = B(e.years), this;
}
function sr(e, t, s, r) {
  var a = V(t, s);
  return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble();
}
function ko(e, t) {
  return sr(this, e, t, 1);
}
function wo(e, t) {
  return sr(this, e, t, -1);
}
function os(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function So() {
  var e = this._milliseconds, t = this._days, s = this._months, r = this._data, a, n, i, o, d;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += os(Mt(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, a = R(e / 1e3), r.seconds = a % 60, n = R(a / 60), r.minutes = n % 60, i = R(n / 60), r.hours = i % 24, t += R(i / 24), d = R(rr(t)), s += d, t -= os(Mt(d)), o = R(s / 12), s %= 12, r.days = t, r.months = s, r.years = o, this;
}
function rr(e) {
  return e * 4800 / 146097;
}
function Mt(e) {
  return e * 146097 / 4800;
}
function Mo(e) {
  if (!this.isValid())
    return NaN;
  var t, s, r = this._milliseconds;
  if (e = W(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, s = this._months + rr(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(Mt(this._months)), e) {
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
var ar = se("ms"), Do = se("s"), Yo = se("m"), bo = se("h"), xo = se("d"), Oo = se("w"), To = se("M"), Co = se("Q"), Po = se("y"), No = ar;
function Ro() {
  return V(this);
}
function Fo(e) {
  return e = W(e), this.isValid() ? this[e + "s"]() : NaN;
}
function fe(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var Wo = fe("milliseconds"), Lo = fe("seconds"), Ao = fe("minutes"), Io = fe("hours"), Eo = fe("days"), Vo = fe("months"), Ho = fe("years");
function Uo() {
  return R(this.days() / 7);
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
function $o(e, t, s, r, a) {
  return a.relativeTime(t || 1, !!s, e, r);
}
function jo(e, t, s, r) {
  var a = V(e).abs(), n = Z(a.as("s")), i = Z(a.as("m")), o = Z(a.as("h")), d = Z(a.as("d")), f = Z(a.as("M")), m = Z(a.as("w")), S = Z(a.as("y")), O = n <= s.ss && ["s", n] || n < s.s && ["ss", n] || i <= 1 && ["m"] || i < s.m && ["mm", i] || o <= 1 && ["h"] || o < s.h && ["hh", o] || d <= 1 && ["d"] || d < s.d && ["dd", d];
  return s.w != null && (O = O || m <= 1 && ["w"] || m < s.w && ["ww", m]), O = O || f <= 1 && ["M"] || f < s.M && ["MM", f] || S <= 1 && ["y"] || ["yy", S], O[2] = t, O[3] = +e > 0, O[4] = r, $o.apply(null, O);
}
function Go(e) {
  return e === void 0 ? Z : typeof e == "function" ? (Z = e, !0) : !1;
}
function zo(e, t) {
  return pe[e] === void 0 ? !1 : t === void 0 ? pe[e] : (pe[e] = t, e === "s" && (pe.ss = t - 1), !0);
}
function Bo(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, r = pe, a, n;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, pe, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), a = this.localeData(), n = jo(this, !s, r, a), s && (n = a.pastFuture(+this, n)), a.postformat(n);
}
var mt = Math.abs;
function he(e) {
  return (e > 0) - (e < 0) || +e;
}
function ot() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = mt(this._milliseconds) / 1e3, t = mt(this._days), s = mt(this._months), r, a, n, i, o = this.asSeconds(), d, f, m, S;
  return o ? (r = R(e / 60), a = R(r / 60), e %= 60, r %= 60, n = R(s / 12), s %= 12, i = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", d = o < 0 ? "-" : "", f = he(this._months) !== he(o) ? "-" : "", m = he(this._days) !== he(o) ? "-" : "", S = he(this._milliseconds) !== he(o) ? "-" : "", d + "P" + (n ? f + n + "Y" : "") + (s ? f + s + "M" : "") + (t ? m + t + "D" : "") + (a || r || e ? "T" : "") + (a ? S + a + "H" : "") + (r ? S + r + "M" : "") + (e ? S + i + "S" : "")) : "P0D";
}
var y = nt.prototype;
y.isValid = En;
y.abs = go;
y.add = ko;
y.subtract = wo;
y.as = Mo;
y.asMilliseconds = ar;
y.asSeconds = Do;
y.asMinutes = Yo;
y.asHours = bo;
y.asDays = xo;
y.asWeeks = Oo;
y.asMonths = To;
y.asQuarters = Co;
y.asYears = Po;
y.valueOf = No;
y._bubble = So;
y.clone = Ro;
y.get = Fo;
y.milliseconds = Wo;
y.seconds = Lo;
y.minutes = Ao;
y.hours = Io;
y.days = Eo;
y.weeks = Uo;
y.months = Vo;
y.years = Ho;
y.humanize = Bo;
y.toISOString = ot;
y.toString = ot;
y.toJSON = ot;
y.locale = Gs;
y.localeData = Bs;
y.toIsoString = F(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  ot
);
y.lang = zs;
h("X", 0, 0, "unix");
h("x", 0, 0, "valueOf");
c("x", tt);
c("X", fa);
w("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
w("x", function(e, t, s) {
  s._d = new Date(_(e));
});
//! moment.js
u.version = "2.30.1";
zr(M);
u.fn = l;
u.min = Wn;
u.max = Ln;
u.now = An;
u.utc = j;
u.unix = fo;
u.months = mo;
u.isDate = Ne;
u.locale = ie;
u.invalid = Qe;
u.duration = V;
u.isMoment = E;
u.weekdays = _o;
u.parseZone = ho;
u.localeData = te;
u.isDuration = Ue;
u.monthsShort = po;
u.weekdaysMin = vo;
u.defineLocale = It;
u.updateLocale = fn;
u.locales = hn;
u.weekdaysShort = yo;
u.normalizeUnits = W;
u.relativeTimeRounding = Go;
u.relativeTimeThreshold = zo;
u.calendarFormat = li;
u.prototype = l;
u.HTML5_FMT = {
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
u.defineLocale("pt-br", {
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
const Zo = {
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
    u.locale("pt-br");
    const r = u(), a = r.format("YYYY-MM-DD"), n = pt(""), i = Bt(() => [
      (m) => !s.required || !!m || "Insira a data",
      (m) => !m || m.length === 10 || "Complete a data",
      (m) => !m || u(m, "DD/MM/YYYY", !0).isValid() || "Insira uma data válida",
      (m) => !m || !s.impedirFuturo || u(m, "DD/MM/YYYY", !0).isSameOrBefore(r, "day") || "Não utilize datas futuras"
    ]);
    if (_t(n, (m) => {
      if (m.length === 10) {
        const S = u(m, "DD/MM/YYYY", !0);
        if (S.isValid()) return t("input", S.format("YYYY-MM-DD"));
      }
      s.persistValue && m || t("input", s.emptyValue);
    }), s.value) {
      const m = u(s.value, "YYYY-MM-DD", !0);
      n.value = m.isValid() ? m.format("DD/MM/YYYY") : "";
    }
    const o = Bt(() => u(s.value, "YYYY-MM-DD", !0).isValid() ? s.value : a), d = pt(!1), f = (m) => {
      n.value = u(m, "YYYY-MM-DD", !0).format("DD/MM/YYYY"), d.value = !1;
    };
    return _t(() => s.value, (m) => {
      if (m) {
        const S = u(m, "YYYY-MM-DD", !0);
        S.isValid() && (n.value = S.format("DD/MM/YYYY"));
      }
    }), { __sfc: !0, props: s, emit: t, dataHojeMoment: r, dataHojeIso: a, iptModel: n, iptRules: i, pickerValorInicial: o, pickerShow: d, pickerOnSelect: f, vMaska: hs };
  }
};
var qo = function() {
  var t = this, s = t._self._c, r = t._self._setupProxy;
  return s("v-text-field", t._b({ directives: [{ name: "maska", rawName: "v-maska", value: "##/##/####", expression: "'##/##/####'" }], attrs: { type: "tel", rules: r.iptRules, placeholder: t.placeholder, "persistent-placeholder": "" }, scopedSlots: t._u([{ key: "append", fn: function() {
    return [t.btnLimpar && r.props.value ? s("v-btn", { attrs: { icon: "", small: "" }, on: { click: function(a) {
      r.iptModel = "";
    } } }, [s("v-icon", [t._v("mdi-eraser")])], 1) : t._e(), s("v-menu", { attrs: { "min-width": "auto", "offset-y": "", left: "" }, scopedSlots: t._u([{ key: "activator", fn: function({ attrs: a, on: n }) {
      return [s("v-btn", t._g(t._b({ attrs: { icon: "", small: "", color: "primary" } }, "v-btn", a, !1), n), [s("v-icon", [t._v("mdi-calendar-cursor")])], 1)];
    } }]), model: { value: r.pickerShow, callback: function(a) {
      r.pickerShow = a;
    }, expression: "pickerShow" } }, [s("v-date-picker", { attrs: { max: t.impedirFuturo ? r.dataHojeIso : t.max, locale: t.locale, value: r.pickerValorInicial, scrollable: "", "no-title": "" }, on: { input: r.pickerOnSelect } })], 1)];
  }, proxy: !0 }]), model: { value: r.iptModel, callback: function(a) {
    r.iptModel = a;
  }, expression: "iptModel" } }, "v-text-field", t.$attrs, !1));
}, Jo = [], Qo = /* @__PURE__ */ oe(
  Zo,
  qo,
  Jo
);
const Ko = Qo.exports, Xo = {
  __name: "VFabToTop",
  props: {
    scrollOffset: { type: Number, default: 300 }
  },
  setup(e) {
    const t = e, { proxy: s } = qe(), r = s.$vuetify, a = pt(!1);
    return { __sfc: !0, props: t, proxy: s, vuetify: r, exibirBotao: a, onScroll: () => a.value = (window.pageYOffset || document.documentElement.offsetTop || 0) > t.scrollOffset };
  }
};
var el = function() {
  var t = this, s = t._self._c, r = t._self._setupProxy;
  return s("v-fab-transition", [s("v-btn", t._g(t._b({ directives: [{ name: "show", rawName: "v-show", value: r.exibirBotao, expression: "exibirBotao" }, { name: "scroll", rawName: "v-scroll", value: r.onScroll, expression: "onScroll" }], staticClass: "transition-swing", staticStyle: { "z-index": "6" }, attrs: { color: "primary", fab: "", fixed: "", right: "", bottom: "" }, on: { click: function(a) {
    return r.vuetify.goTo(0);
  } } }, "v-btn", t.$attrs, !1), t.$listeners), [s("v-icon", [t._v("mdi-chevron-up")])], 1)], 1);
}, tl = [], sl = /* @__PURE__ */ oe(
  Xo,
  el,
  tl
);
const rl = sl.exports, al = {
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
var nl = function() {
  var t = this, s = t._self._c;
  return t._self._setupProxy, s("v-overlay", t._b({ attrs: { value: t.value, "z-index": t.zIndex, opacity: t.opacity } }, "v-overlay", t.$attrs, !1), [s("div", { staticClass: "text-center" }, [s("v-progress-circular", { attrs: { indeterminate: "", size: "48" } }), s("div", { staticClass: "pt-3" }, [t.$slots.default ? t._t("default") : t.texto ? [t._v(t._s(t.texto))] : t._e()], 2)], 1)]);
}, il = [], ol = /* @__PURE__ */ oe(
  al,
  nl,
  il
);
const nr = ol.exports, ll = {
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
var ul = function() {
  var t = this, s = t._self._c;
  return t._self._setupProxy, s("v-dialog", t._b({ attrs: { value: t.value, "hide-overlay": t.hideOverlay, persistent: t.persistent, width: t.width } }, "v-dialog", t.$attrs, !1), [s("v-card", { attrs: { color: t.color, dark: "" } }, [s("v-card-text", { staticClass: "text-center pt-1" }, [t._t("default", function() {
    return [t._v(t._s(t.text ? t.text : "Por favor aguarde"))];
  }), s("v-progress-linear", { staticClass: "mb-0", attrs: { indeterminate: "", color: t.progressColor } })], 2)], 1)], 1);
}, dl = [], cl = /* @__PURE__ */ oe(
  ll,
  ul,
  dl
);
const ir = cl.exports, fl = {
  __name: "VGlobalComponents",
  setup(e) {
    const t = ee(), { proxy: s } = qe(), r = s.$vuetify;
    return lr(() => {
      s.$route && _t(
        () => s.$route.fullPath,
        () => t.resetarPrompts()
      );
    }), { __sfc: !0, vuetifyComponentsStore: t, proxy: s, vuetify: r, promptOnOk: (n, i, o = () => {
    }, d = "") => {
      n.validate() && (o(d), t.removerPrompt(i));
    }, vMaska: hs, VLoaderOverlay: nr, VLoaderDialog: ir, VCardToolbar: ls };
  }
};
var hl = function() {
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
}, ml = [], pl = /* @__PURE__ */ oe(
  fl,
  hl,
  ml
);
const _l = pl.exports, yl = (e, t = {}) => {
  const s = t.pinia || e.prototype.$pinia;
  if (!s) return console.error("[@eliaslazcano/vuetify-plugin] Pinia é necessário para esta biblioteca.");
  e.prototype.$vuetifyComponentsStore = ee(s), e.component("VBtnTooltip", hr), e.component("VCardToolbar", ls), e.component("VContainerAsync", Lr), e.component("VDateField", Ko), e.component("VFabToTop", rl), e.component("VGlobalComponents", _l), e.component("VLoaderDialog", ir), e.component("VLoaderOverlay", nr);
}, xl = { install: yl };
export {
  hr as VBtnTooltip,
  ls as VCardToolbar,
  Lr as VContainerAsync,
  Ko as VDateField,
  rl as VFabToTop,
  _l as VGlobalComponents,
  ir as VLoaderDialog,
  nr as VLoaderOverlay,
  xl as default,
  Dl as emitirAlert,
  Yl as emitirDialog,
  bl as emitirPrompt,
  Ml as emitirSnack,
  wl as getLoaderOverlayStatus,
  yl as install,
  Sl as setLoaderDialog,
  kl as setLoaderOverlay,
  ee as useVuetifyComponentsStore
};
