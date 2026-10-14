var sf = Object.defineProperty;
var lf = (e, t, n) => t in e ? sf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var pe = (e, t, n) => lf(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Us(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const Je = {}, kr = [], Yt = () => {
}, uf = () => !1, io = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ws = (e) => e.startsWith("onUpdate:"), yt = Object.assign, qs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, cf = Object.prototype.hasOwnProperty, Ye = (e, t) => cf.call(e, t), xe = Array.isArray, Mr = (e) => ga(e) === "[object Map]", uo = (e) => ga(e) === "[object Set]", Wl = (e) => ga(e) === "[object Date]", Ae = (e) => typeof e == "function", at = (e) => typeof e == "string", Bn = (e) => typeof e == "symbol", Qe = (e) => e !== null && typeof e == "object", Tu = (e) => (Qe(e) || Ae(e)) && Ae(e.then) && Ae(e.catch), Pu = Object.prototype.toString, ga = (e) => Pu.call(e), df = (e) => ga(e).slice(8, -1), Su = (e) => ga(e) === "[object Object]", zs = (e) => at(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Qr = /* @__PURE__ */ Us(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), co = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ff = /-(\w)/g, Xt = co((e) => e.replace(ff, (t, n) => n ? n.toUpperCase() : "")), pf = /\B([A-Z])/g, Un = co(
  (e) => e.replace(pf, "-$1").toLowerCase()
), fo = co((e) => e.charAt(0).toUpperCase() + e.slice(1)), Bo = co((e) => e ? `on${fo(e)}` : ""), pn = (e, t) => !Object.is(e, t), Va = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, ja = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, la = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, mf = (e) => {
  const t = at(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ql;
const Au = () => ql || (ql = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ct(e) {
  if (xe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = at(r) ? gf(r) : Ct(r);
      if (a)
        for (const o in a)
          t[o] = a[o];
    }
    return t;
  } else if (at(e) || Qe(e))
    return e;
}
const hf = /;(?![^(]*\))/g, vf = /:([^]+)/, yf = /\/\*[^]*?\*\//g;
function gf(e) {
  const t = {};
  return e.replace(yf, "").split(hf).forEach((n) => {
    if (n) {
      const r = n.split(vf);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ne(e) {
  let t = "";
  if (at(e))
    t = e;
  else if (xe(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ne(e[n]);
      r && (t += r + " ");
    }
  else if (Qe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function ht(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !at(t) && (e.class = Ne(t)), n && (e.style = Ct(n)), e;
}
const bf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", wf = /* @__PURE__ */ Us(bf);
function Cu(e) {
  return !!e || e === "";
}
function _f(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = po(e[r], t[r]);
  return n;
}
function po(e, t) {
  if (e === t)
    return !0;
  let n = Wl(e), r = Wl(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Bn(e), r = Bn(t), n || r)
    return e === t;
  if (n = xe(e), r = xe(t), n || r)
    return n && r ? _f(e, t) : !1;
  if (n = Qe(e), r = Qe(t), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(e).length, o = Object.keys(t).length;
    if (a !== o)
      return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s), i = t.hasOwnProperty(s);
      if (l && !i || !l && i || !po(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function xf(e, t) {
  return e.findIndex((n) => po(n, t));
}
const He = (e) => at(e) ? e : e == null ? "" : xe(e) || Qe(e) && (e.toString === Pu || !Ae(e.toString)) ? JSON.stringify(e, Du, 2) : String(e), Du = (e, t) => t && t.__v_isRef ? Du(e, t.value) : Mr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, a], o) => (n[Lo(r, o) + " =>"] = a, n),
    {}
  )
} : uo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Lo(n))
} : Bn(t) ? Lo(t) : Qe(t) && !xe(t) && !Su(t) ? String(t) : t, Lo = (e, t = "") => {
  var n;
  return Bn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Nt;
class Ou {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Nt, !t && Nt && (this.index = (Nt.scopes || (Nt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Nt;
      try {
        return Nt = this, t();
      } finally {
        Nt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Nt = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Nt = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Eu(e) {
  return new Ou(e);
}
function kf(e, t = Nt) {
  t && t.active && t.effects.push(e);
}
function Gs() {
  return Nt;
}
function Ru(e) {
  Nt && Nt.cleanups.push(e);
}
let ir;
class Ks {
  constructor(t, n, r, a) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, kf(this, a);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Wn();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Mf(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), hr();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = cn, n = ir;
    try {
      return cn = !0, ir = this, this._runnings++, zl(this), this.fn();
    } finally {
      Gl(this), this._runnings--, ir = n, cn = t;
    }
  }
  stop() {
    var t;
    this.active && (zl(this), Gl(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Mf(e) {
  return e.value;
}
function zl(e) {
  e._trackId++, e._depsLength = 0;
}
function Gl(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      $u(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function $u(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let cn = !0, hs = 0;
const Xs = [];
function Wn() {
  Xs.push(cn), cn = !1;
}
function Tf() {
  Xs.push(cn), cn = !0;
}
function hr() {
  const e = Xs.pop();
  cn = e === void 0 ? !0 : e;
}
function Qs() {
  hs++;
}
function Js() {
  for (hs--; !hs && vs.length; )
    vs.shift()();
}
function Nu(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && $u(r, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const vs = [];
function Vu(e, t, n) {
  Qs();
  for (const r of e.keys()) {
    let a;
    r._dirtyLevel < t && (a ?? (a = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (a ?? (a = e.get(r) === r._trackId)) && (r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && vs.push(r.scheduler)));
  }
  Js();
}
const Iu = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Ha = /* @__PURE__ */ new WeakMap(), ur = Symbol(""), ys = Symbol("");
function $t(e, t, n) {
  if (cn && ir) {
    let r = Ha.get(e);
    r || Ha.set(e, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || r.set(n, a = Iu(() => r.delete(n))), Nu(
      ir,
      a
    );
  }
}
function gn(e, t, n, r, a, o) {
  const s = Ha.get(e);
  if (!s)
    return;
  let l = [];
  if (t === "clear")
    l = [...s.values()];
  else if (n === "length" && xe(e)) {
    const i = Number(r);
    s.forEach((c, u) => {
      (u === "length" || !Bn(u) && u >= i) && l.push(c);
    });
  } else
    switch (n !== void 0 && l.push(s.get(n)), t) {
      case "add":
        xe(e) ? zs(n) && l.push(s.get("length")) : (l.push(s.get(ur)), Mr(e) && l.push(s.get(ys)));
        break;
      case "delete":
        xe(e) || (l.push(s.get(ur)), Mr(e) && l.push(s.get(ys)));
        break;
      case "set":
        Mr(e) && l.push(s.get(ur));
        break;
    }
  Qs();
  for (const i of l)
    i && Vu(
      i,
      4
    );
  Js();
}
function Pf(e, t) {
  var n;
  return (n = Ha.get(e)) == null ? void 0 : n.get(t);
}
const Sf = /* @__PURE__ */ Us("__proto__,__v_isRef,__isVue"), Fu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bn)
), Kl = /* @__PURE__ */ Af();
function Af() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = Le(this);
      for (let o = 0, s = this.length; o < s; o++)
        $t(r, "get", o + "");
      const a = r[t](...n);
      return a === -1 || a === !1 ? r[t](...n.map(Le)) : a;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Wn(), Qs();
      const r = Le(this)[t].apply(this, n);
      return Js(), hr(), r;
    };
  }), e;
}
function Cf(e) {
  const t = Le(this);
  return $t(t, "has", e), t.hasOwnProperty(e);
}
class Bu {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const a = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (a ? o ? jf : Hu : o ? ju : Yu).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = xe(t);
    if (!a) {
      if (s && Ye(Kl, n))
        return Reflect.get(Kl, n, r);
      if (n === "hasOwnProperty")
        return Cf;
    }
    const l = Reflect.get(t, n, r);
    return (Bn(n) ? Fu.has(n) : Sf(n)) || (a || $t(t, "get", n), o) ? l : ct(l) ? s && zs(n) ? l : l.value : Qe(l) ? a ? Uu(l) : bn(l) : l;
  }
}
class Lu extends Bu {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, a) {
    let o = t[n];
    if (!this._isShallow) {
      const i = Cr(o);
      if (!Ua(r) && !Cr(r) && (o = Le(o), r = Le(r)), !xe(t) && ct(o) && !ct(r))
        return i ? !1 : (o.value = r, !0);
    }
    const s = xe(t) && zs(n) ? Number(n) < t.length : Ye(t, n), l = Reflect.set(t, n, r, a);
    return t === Le(a) && (s ? pn(r, o) && gn(t, "set", n, r) : gn(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = Ye(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && r && gn(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Bn(n) || !Fu.has(n)) && $t(t, "has", n), r;
  }
  ownKeys(t) {
    return $t(
      t,
      "iterate",
      xe(t) ? "length" : ur
    ), Reflect.ownKeys(t);
  }
}
class Df extends Bu {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Of = /* @__PURE__ */ new Lu(), Ef = /* @__PURE__ */ new Df(), Rf = /* @__PURE__ */ new Lu(
  !0
), Zs = (e) => e, mo = (e) => Reflect.getPrototypeOf(e);
function Ta(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const a = Le(e), o = Le(t);
  n || (pn(t, o) && $t(a, "get", t), $t(a, "get", o));
  const { has: s } = mo(a), l = r ? Zs : n ? nl : ia;
  if (s.call(a, t))
    return l(e.get(t));
  if (s.call(a, o))
    return l(e.get(o));
  e !== a && e.get(t);
}
function Pa(e, t = !1) {
  const n = this.__v_raw, r = Le(n), a = Le(e);
  return t || (pn(e, a) && $t(r, "has", e), $t(r, "has", a)), e === a ? n.has(e) : n.has(e) || n.has(a);
}
function Sa(e, t = !1) {
  return e = e.__v_raw, !t && $t(Le(e), "iterate", ur), Reflect.get(e, "size", e);
}
function Xl(e) {
  e = Le(e);
  const t = Le(this);
  return mo(t).has.call(t, e) || (t.add(e), gn(t, "add", e, e)), this;
}
function Ql(e, t) {
  t = Le(t);
  const n = Le(this), { has: r, get: a } = mo(n);
  let o = r.call(n, e);
  o || (e = Le(e), o = r.call(n, e));
  const s = a.call(n, e);
  return n.set(e, t), o ? pn(t, s) && gn(n, "set", e, t) : gn(n, "add", e, t), this;
}
function Jl(e) {
  const t = Le(this), { has: n, get: r } = mo(t);
  let a = n.call(t, e);
  a || (e = Le(e), a = n.call(t, e)), r && r.call(t, e);
  const o = t.delete(e);
  return a && gn(t, "delete", e, void 0), o;
}
function Zl() {
  const e = Le(this), t = e.size !== 0, n = e.clear();
  return t && gn(e, "clear", void 0, void 0), n;
}
function Aa(e, t) {
  return function(r, a) {
    const o = this, s = o.__v_raw, l = Le(s), i = t ? Zs : e ? nl : ia;
    return !e && $t(l, "iterate", ur), s.forEach((c, u) => r.call(a, i(c), i(u), o));
  };
}
function Ca(e, t, n) {
  return function(...r) {
    const a = this.__v_raw, o = Le(a), s = Mr(o), l = e === "entries" || e === Symbol.iterator && s, i = e === "keys" && s, c = a[e](...r), u = n ? Zs : t ? nl : ia;
    return !t && $t(
      o,
      "iterate",
      i ? ys : ur
    ), {
      // iterator protocol
      next() {
        const { value: d, done: p } = c.next();
        return p ? { value: d, done: p } : {
          value: l ? [u(d[0]), u(d[1])] : u(d),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function xn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $f() {
  const e = {
    get(o) {
      return Ta(this, o);
    },
    get size() {
      return Sa(this);
    },
    has: Pa,
    add: Xl,
    set: Ql,
    delete: Jl,
    clear: Zl,
    forEach: Aa(!1, !1)
  }, t = {
    get(o) {
      return Ta(this, o, !1, !0);
    },
    get size() {
      return Sa(this);
    },
    has: Pa,
    add: Xl,
    set: Ql,
    delete: Jl,
    clear: Zl,
    forEach: Aa(!1, !0)
  }, n = {
    get(o) {
      return Ta(this, o, !0);
    },
    get size() {
      return Sa(this, !0);
    },
    has(o) {
      return Pa.call(this, o, !0);
    },
    add: xn("add"),
    set: xn("set"),
    delete: xn("delete"),
    clear: xn("clear"),
    forEach: Aa(!0, !1)
  }, r = {
    get(o) {
      return Ta(this, o, !0, !0);
    },
    get size() {
      return Sa(this, !0);
    },
    has(o) {
      return Pa.call(this, o, !0);
    },
    add: xn("add"),
    set: xn("set"),
    delete: xn("delete"),
    clear: xn("clear"),
    forEach: Aa(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = Ca(
      o,
      !1,
      !1
    ), n[o] = Ca(
      o,
      !0,
      !1
    ), t[o] = Ca(
      o,
      !1,
      !0
    ), r[o] = Ca(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  Nf,
  Vf,
  If,
  Ff
] = /* @__PURE__ */ $f();
function el(e, t) {
  const n = t ? e ? Ff : If : e ? Vf : Nf;
  return (r, a, o) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(
    Ye(n, a) && a in r ? n : r,
    a,
    o
  );
}
const Bf = {
  get: /* @__PURE__ */ el(!1, !1)
}, Lf = {
  get: /* @__PURE__ */ el(!1, !0)
}, Yf = {
  get: /* @__PURE__ */ el(!0, !1)
}, Yu = /* @__PURE__ */ new WeakMap(), ju = /* @__PURE__ */ new WeakMap(), Hu = /* @__PURE__ */ new WeakMap(), jf = /* @__PURE__ */ new WeakMap();
function Hf(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Uf(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Hf(df(e));
}
function bn(e) {
  return Cr(e) ? e : tl(
    e,
    !1,
    Of,
    Bf,
    Yu
  );
}
function Wf(e) {
  return tl(
    e,
    !1,
    Rf,
    Lf,
    ju
  );
}
function Uu(e) {
  return tl(
    e,
    !0,
    Ef,
    Yf,
    Hu
  );
}
function tl(e, t, n, r, a) {
  if (!Qe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = a.get(e);
  if (o)
    return o;
  const s = Uf(e);
  if (s === 0)
    return e;
  const l = new Proxy(
    e,
    s === 2 ? r : n
  );
  return a.set(e, l), l;
}
function $n(e) {
  return Cr(e) ? $n(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Cr(e) {
  return !!(e && e.__v_isReadonly);
}
function Ua(e) {
  return !!(e && e.__v_isShallow);
}
function Wu(e) {
  return $n(e) || Cr(e);
}
function Le(e) {
  const t = e && e.__v_raw;
  return t ? Le(t) : e;
}
function ho(e) {
  return Object.isExtensible(e) && ja(e, "__v_skip", !0), e;
}
const ia = (e) => Qe(e) ? bn(e) : e, nl = (e) => Qe(e) ? Uu(e) : e;
class qu {
  constructor(t, n, r, a) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Ks(
      () => t(this._value),
      () => Tr(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !a, this.__v_isReadonly = r;
  }
  get value() {
    const t = Le(this);
    return (!t._cacheable || t.effect.dirty) && pn(t._value, t._value = t.effect.run()) && Tr(t, 4), rl(t), t.effect._dirtyLevel >= 2 && Tr(t, 2), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function qf(e, t, n = !1) {
  let r, a;
  const o = Ae(e);
  return o ? (r = e, a = Yt) : (r = e.get, a = e.set), new qu(r, a, o || !a, n);
}
function rl(e) {
  var t;
  cn && ir && (e = Le(e), Nu(
    ir,
    (t = e.dep) != null ? t : e.dep = Iu(
      () => e.dep = void 0,
      e instanceof qu ? e : void 0
    )
  ));
}
function Tr(e, t = 4, n) {
  e = Le(e);
  const r = e.dep;
  r && Vu(
    r,
    t
  );
}
function ct(e) {
  return !!(e && e.__v_isRef === !0);
}
function J(e) {
  return zf(e, !1);
}
function zf(e, t) {
  return ct(e) ? e : new Gf(e, t);
}
class Gf {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Le(t), this._value = n ? t : ia(t);
  }
  get value() {
    return rl(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ua(t) || Cr(t);
    t = n ? t : Le(t), pn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : ia(t), Tr(this, 4));
  }
}
function ei(e) {
  Tr(e, 4);
}
function S(e) {
  return ct(e) ? e.value : e;
}
const Kf = {
  get: (e, t, n) => S(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const a = e[t];
    return ct(a) && !ct(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function zu(e) {
  return $n(e) ? e : new Proxy(e, Kf);
}
class Xf {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: r } = t(
      () => rl(this),
      () => Tr(this)
    );
    this._get = n, this._set = r;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Qf(e) {
  return new Xf(e);
}
function Jf(e) {
  const t = xe(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Gu(e, n);
  return t;
}
class Zf {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Pf(Le(this._object), this._key);
  }
}
class ep {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Wa(e, t, n) {
  return ct(e) ? e : Ae(e) ? new ep(e) : Qe(e) && arguments.length > 1 ? Gu(e, t, n) : J(e);
}
function Gu(e, t, n) {
  const r = e[t];
  return ct(r) ? r : new Zf(e, t, n);
}
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Nn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (a) {
    vo(a, t, n);
  }
}
function jt(e, t, n, r) {
  if (Ae(e)) {
    const o = Nn(e, t, n, r);
    return o && Tu(o) && o.catch((s) => {
      vo(s, t, n);
    }), o;
  }
  const a = [];
  for (let o = 0; o < e.length; o++)
    a.push(jt(e[o], t, n, r));
  return a;
}
function vo(e, t, n, r = !0) {
  const a = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const s = t.proxy, l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const c = o.ec;
      if (c) {
        for (let u = 0; u < c.length; u++)
          if (c[u](e, s, l) === !1)
            return;
      }
      o = o.parent;
    }
    const i = t.appContext.config.errorHandler;
    if (i) {
      Nn(
        i,
        null,
        10,
        [e, s, l]
      );
      return;
    }
  }
  tp(e, n, a, r);
}
function tp(e, t, n, r = !0) {
  console.error(e);
}
let ua = !1, gs = !1;
const Tt = [];
let on = 0;
const Pr = [];
let Cn = null, nr = 0;
const Ku = /* @__PURE__ */ Promise.resolve();
let al = null;
function Qt(e) {
  const t = al || Ku;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function np(e) {
  let t = on + 1, n = Tt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, a = Tt[r], o = ca(a);
    o < e || o === e && a.pre ? t = r + 1 : n = r;
  }
  return t;
}
function ol(e) {
  (!Tt.length || !Tt.includes(
    e,
    ua && e.allowRecurse ? on + 1 : on
  )) && (e.id == null ? Tt.push(e) : Tt.splice(np(e.id), 0, e), Xu());
}
function Xu() {
  !ua && !gs && (gs = !0, al = Ku.then(Ju));
}
function rp(e) {
  const t = Tt.indexOf(e);
  t > on && Tt.splice(t, 1);
}
function ap(e) {
  xe(e) ? Pr.push(...e) : (!Cn || !Cn.includes(
    e,
    e.allowRecurse ? nr + 1 : nr
  )) && Pr.push(e), Xu();
}
function ti(e, t, n = ua ? on + 1 : 0) {
  for (; n < Tt.length; n++) {
    const r = Tt[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid)
        continue;
      Tt.splice(n, 1), n--, r();
    }
  }
}
function Qu(e) {
  if (Pr.length) {
    const t = [...new Set(Pr)].sort(
      (n, r) => ca(n) - ca(r)
    );
    if (Pr.length = 0, Cn) {
      Cn.push(...t);
      return;
    }
    for (Cn = t, nr = 0; nr < Cn.length; nr++)
      Cn[nr]();
    Cn = null, nr = 0;
  }
}
const ca = (e) => e.id == null ? 1 / 0 : e.id, op = (e, t) => {
  const n = ca(e) - ca(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Ju(e) {
  gs = !1, ua = !0, Tt.sort(op);
  try {
    for (on = 0; on < Tt.length; on++) {
      const t = Tt[on];
      t && t.active !== !1 && Nn(t, null, 14);
    }
  } finally {
    on = 0, Tt.length = 0, Qu(), ua = !1, al = null, (Tt.length || Pr.length) && Ju();
  }
}
function sp(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || Je;
  let a = n;
  const o = t.startsWith("update:"), s = o && t.slice(7);
  if (s && s in r) {
    const u = `${s === "modelValue" ? "model" : s}Modifiers`, { number: d, trim: p } = r[u] || Je;
    p && (a = n.map((b) => at(b) ? b.trim() : b)), d && (a = n.map(la));
  }
  let l, i = r[l = Bo(t)] || // also try camelCase event handler (#2249)
  r[l = Bo(Xt(t))];
  !i && o && (i = r[l = Bo(Un(t))]), i && jt(
    i,
    e,
    6,
    a
  );
  const c = r[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, jt(
      c,
      e,
      6,
      a
    );
  }
}
function Zu(e, t, n = !1) {
  const r = t.emitsCache, a = r.get(e);
  if (a !== void 0)
    return a;
  const o = e.emits;
  let s = {}, l = !1;
  if (!Ae(e)) {
    const i = (c) => {
      const u = Zu(c, t, !0);
      u && (l = !0, yt(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(i), e.extends && i(e.extends), e.mixins && e.mixins.forEach(i);
  }
  return !o && !l ? (Qe(e) && r.set(e, null), null) : (xe(o) ? o.forEach((i) => s[i] = null) : yt(s, o), Qe(e) && r.set(e, s), s);
}
function yo(e, t) {
  return !e || !io(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ye(e, t[0].toLowerCase() + t.slice(1)) || Ye(e, Un(t)) || Ye(e, t));
}
let vt = null, go = null;
function qa(e) {
  const t = vt;
  return vt = e, go = e && e.type.__scopeId || null, t;
}
function lp(e) {
  go = e;
}
function ip() {
  go = null;
}
function Ve(e, t = vt, n) {
  if (!t || e._n)
    return e;
  const r = (...a) => {
    r._d && mi(-1);
    const o = qa(t);
    let s;
    try {
      s = e(...a);
    } finally {
      qa(o), r._d && mi(1);
    }
    return s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Yo(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: a,
    props: o,
    propsOptions: [s],
    slots: l,
    attrs: i,
    emit: c,
    render: u,
    renderCache: d,
    data: p,
    setupState: b,
    ctx: g,
    inheritAttrs: v
  } = e;
  let T, $;
  const I = qa(e);
  try {
    if (n.shapeFlag & 4) {
      const P = a || r, D = P;
      T = an(
        u.call(
          D,
          P,
          d,
          o,
          b,
          p,
          g
        )
      ), $ = i;
    } else {
      const P = t;
      T = an(
        P.length > 1 ? P(
          o,
          { attrs: i, slots: l, emit: c }
        ) : P(
          o,
          null
          /* we know it doesn't need it */
        )
      ), $ = t.props ? i : up(i);
    }
  } catch (P) {
    na.length = 0, vo(P, e, 1), T = Xe(Ht);
  }
  let y = T;
  if ($ && v !== !1) {
    const P = Object.keys($), { shapeFlag: D } = y;
    P.length && D & 7 && (s && P.some(Ws) && ($ = cp(
      $,
      s
    )), y = Ln(y, $));
  }
  return n.dirs && (y = Ln(y), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && (y.transition = n.transition), T = y, qa(I), T;
}
const up = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || io(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, cp = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ws(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function dp(e, t, n) {
  const { props: r, children: a, component: o } = e, { props: s, children: l, patchFlag: i } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && i >= 0) {
    if (i & 1024)
      return !0;
    if (i & 16)
      return r ? ni(r, s, c) : !!s;
    if (i & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (s[p] !== r[p] && !yo(c, p))
          return !0;
      }
    }
  } else
    return (a || l) && (!l || !l.$stable) ? !0 : r === s ? !1 : r ? s ? ni(r, s, c) : !0 : !!s;
  return !1;
}
function ni(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    if (t[o] !== e[o] && !yo(n, o))
      return !0;
  }
  return !1;
}
function fp({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ec = "components";
function pp(e, t) {
  return nc(ec, e, !0, t) || e;
}
const tc = Symbol.for("v-ndc");
function bo(e) {
  return at(e) ? nc(ec, e, !1) || e : e || tc;
}
function nc(e, t, n = !0, r = !1) {
  const a = vt || wt;
  if (a) {
    const o = a.type;
    {
      const l = cm(
        o,
        !1
      );
      if (l && (l === t || l === Xt(t) || l === fo(Xt(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      ri(a[e] || o[e], t) || // global registration
      ri(a.appContext[e], t)
    );
    return !s && r ? o : s;
  }
}
function ri(e, t) {
  return e && (e[t] || e[Xt(t)] || e[fo(Xt(t))]);
}
const mp = (e) => e.__isSuspense;
function hp(e, t) {
  t && t.pendingBranch ? xe(e) ? t.effects.push(...e) : t.effects.push(e) : ap(e);
}
const vp = Symbol.for("v-scx"), yp = () => ea(vp);
function gp(e, t) {
  return sl(
    e,
    null,
    { flush: "sync" }
  );
}
const Da = {};
function ut(e, t, n) {
  return sl(e, t, n);
}
function sl(e, t, {
  immediate: n,
  deep: r,
  flush: a,
  once: o,
  onTrack: s,
  onTrigger: l
} = Je) {
  if (t && o) {
    const B = t;
    t = (...H) => {
      B(...H), D();
    };
  }
  const i = wt, c = (B) => r === !0 ? B : (
    // for deep: false, only traverse root-level properties
    or(B, r === !1 ? 1 : void 0)
  );
  let u, d = !1, p = !1;
  if (ct(e) ? (u = () => e.value, d = Ua(e)) : $n(e) ? (u = () => c(e), d = !0) : xe(e) ? (p = !0, d = e.some((B) => $n(B) || Ua(B)), u = () => e.map((B) => {
    if (ct(B))
      return B.value;
    if ($n(B))
      return c(B);
    if (Ae(B))
      return Nn(B, i, 2);
  })) : Ae(e) ? t ? u = () => Nn(e, i, 2) : u = () => (b && b(), jt(
    e,
    i,
    3,
    [g]
  )) : u = Yt, t && r) {
    const B = u;
    u = () => or(B());
  }
  let b, g = (B) => {
    b = y.onStop = () => {
      Nn(B, i, 4), b = y.onStop = void 0;
    };
  }, v;
  if (Mo)
    if (g = Yt, t ? n && jt(t, i, 3, [
      u(),
      p ? [] : void 0,
      g
    ]) : u(), a === "sync") {
      const B = yp();
      v = B.__watcherHandles || (B.__watcherHandles = []);
    } else
      return Yt;
  let T = p ? new Array(e.length).fill(Da) : Da;
  const $ = () => {
    if (!(!y.active || !y.dirty))
      if (t) {
        const B = y.run();
        (r || d || (p ? B.some((H, _) => pn(H, T[_])) : pn(B, T))) && (b && b(), jt(t, i, 3, [
          B,
          // pass undefined as the old value when it's changed for the first time
          T === Da ? void 0 : p && T[0] === Da ? [] : T,
          g
        ]), T = B);
      } else
        y.run();
  };
  $.allowRecurse = !!t;
  let I;
  a === "sync" ? I = $ : a === "post" ? I = () => Ot($, i && i.suspense) : ($.pre = !0, i && ($.id = i.uid), I = () => ol($));
  const y = new Ks(u, Yt, I), P = Gs(), D = () => {
    y.stop(), P && qs(P.effects, y);
  };
  return t ? n ? $() : T = y.run() : a === "post" ? Ot(
    y.run.bind(y),
    i && i.suspense
  ) : y.run(), v && v.push(D), D;
}
function bp(e, t, n) {
  const r = this.proxy, a = at(e) ? e.includes(".") ? rc(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Ae(t) ? o = t : (o = t.handler, n = t);
  const s = ba(this), l = sl(a, o.bind(r), n);
  return s(), l;
}
function rc(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
function or(e, t, n = 0, r) {
  if (!Qe(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(e))
    return e;
  if (r.add(e), ct(e))
    or(e.value, t, n, r);
  else if (xe(e))
    for (let a = 0; a < e.length; a++)
      or(e[a], t, n, r);
  else if (uo(e) || Mr(e))
    e.forEach((a) => {
      or(a, t, n, r);
    });
  else if (Su(e))
    for (const a in e)
      or(e[a], t, n, r);
  return e;
}
function Vn(e, t) {
  if (vt === null)
    return e;
  const n = To(vt) || vt.proxy, r = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [o, s, l, i = Je] = t[a];
    o && (Ae(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && or(s), r.push({
      dir: o,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: i
    }));
  }
  return e;
}
function Xn(e, t, n, r) {
  const a = e.dirs, o = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const l = a[s];
    o && (l.oldValue = o[s].value);
    let i = l.dir[r];
    i && (Wn(), jt(i, n, 8, [
      e.el,
      l,
      e,
      t
    ]), hr());
  }
}
const Dn = Symbol("_leaveCb"), Oa = Symbol("_enterCb");
function wp() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return xt(() => {
    e.isMounted = !0;
  }), ll(() => {
    e.isUnmounting = !0;
  }), e;
}
const Lt = [Function, Array], ac = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Lt,
  onEnter: Lt,
  onAfterEnter: Lt,
  onEnterCancelled: Lt,
  // leave
  onBeforeLeave: Lt,
  onLeave: Lt,
  onAfterLeave: Lt,
  onLeaveCancelled: Lt,
  // appear
  onBeforeAppear: Lt,
  onAppear: Lt,
  onAfterAppear: Lt,
  onAppearCancelled: Lt
}, _p = {
  name: "BaseTransition",
  props: ac,
  setup(e, { slots: t }) {
    const n = fl(), r = wp();
    return () => {
      const a = t.default && sc(t.default(), !0);
      if (!a || !a.length)
        return;
      let o = a[0];
      if (a.length > 1) {
        for (const p of a)
          if (p.type !== Ht) {
            o = p;
            break;
          }
      }
      const s = Le(e), { mode: l } = s;
      if (r.isLeaving)
        return jo(o);
      const i = ai(o);
      if (!i)
        return jo(o);
      const c = bs(
        i,
        s,
        r,
        n
      );
      ws(i, c);
      const u = n.subTree, d = u && ai(u);
      if (d && d.type !== Ht && !rr(i, d)) {
        const p = bs(
          d,
          s,
          r,
          n
        );
        if (ws(d, p), l === "out-in")
          return r.isLeaving = !0, p.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, jo(o);
        l === "in-out" && i.type !== Ht && (p.delayLeave = (b, g, v) => {
          const T = oc(
            r,
            d
          );
          T[String(d.key)] = d, b[Dn] = () => {
            g(), b[Dn] = void 0, delete c.delayedLeave;
          }, c.delayedLeave = v;
        });
      }
      return o;
    };
  }
}, xp = _p;
function oc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function bs(e, t, n, r) {
  const {
    appear: a,
    mode: o,
    persisted: s = !1,
    onBeforeEnter: l,
    onEnter: i,
    onAfterEnter: c,
    onEnterCancelled: u,
    onBeforeLeave: d,
    onLeave: p,
    onAfterLeave: b,
    onLeaveCancelled: g,
    onBeforeAppear: v,
    onAppear: T,
    onAfterAppear: $,
    onAppearCancelled: I
  } = t, y = String(e.key), P = oc(n, e), D = (_, O) => {
    _ && jt(
      _,
      r,
      9,
      O
    );
  }, B = (_, O) => {
    const W = O[1];
    D(_, O), xe(_) ? _.every((A) => A.length <= 1) && W() : _.length <= 1 && W();
  }, H = {
    mode: o,
    persisted: s,
    beforeEnter(_) {
      let O = l;
      if (!n.isMounted)
        if (a)
          O = v || l;
        else
          return;
      _[Dn] && _[Dn](
        !0
        /* cancelled */
      );
      const W = P[y];
      W && rr(e, W) && W.el[Dn] && W.el[Dn](), D(O, [_]);
    },
    enter(_) {
      let O = i, W = c, A = u;
      if (!n.isMounted)
        if (a)
          O = T || i, W = $ || c, A = I || u;
        else
          return;
      let M = !1;
      const F = _[Oa] = (N) => {
        M || (M = !0, N ? D(A, [_]) : D(W, [_]), H.delayedLeave && H.delayedLeave(), _[Oa] = void 0);
      };
      O ? B(O, [_, F]) : F();
    },
    leave(_, O) {
      const W = String(e.key);
      if (_[Oa] && _[Oa](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return O();
      D(d, [_]);
      let A = !1;
      const M = _[Dn] = (F) => {
        A || (A = !0, O(), F ? D(g, [_]) : D(b, [_]), _[Dn] = void 0, P[W] === e && delete P[W]);
      };
      P[W] = e, p ? B(p, [_, M]) : M();
    },
    clone(_) {
      return bs(_, t, n, r);
    }
  };
  return H;
}
function jo(e) {
  if (wo(e))
    return e = Ln(e), e.children = null, e;
}
function ai(e) {
  return wo(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    e.children ? e.children[0] : void 0
  ) : e;
}
function ws(e, t) {
  e.shapeFlag & 6 && e.component ? ws(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function sc(e, t = !1, n) {
  let r = [], a = 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    const l = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
    s.type === _e ? (s.patchFlag & 128 && a++, r = r.concat(
      sc(s.children, t, l)
    )) : (t || s.type !== Ht) && r.push(l != null ? Ln(s, { key: l }) : s);
  }
  if (a > 1)
    for (let o = 0; o < r.length; o++)
      r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Mt(e, t) {
  return Ae(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    yt({ name: e.name }, t, { setup: e })
  ) : e;
}
const Jr = (e) => !!e.type.__asyncLoader, wo = (e) => e.type.__isKeepAlive;
function kp(e, t) {
  lc(e, "a", t);
}
function Mp(e, t) {
  lc(e, "da", t);
}
function lc(e, t, n = wt) {
  const r = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (_o(t, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      wo(a.parent.vnode) && Tp(r, t, n, a), a = a.parent;
  }
}
function Tp(e, t, n, r) {
  const a = _o(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Fr(() => {
    qs(r[t], a);
  }, n);
}
function _o(e, t, n = wt, r = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      Wn();
      const l = ba(n), i = jt(t, n, e, s);
      return l(), hr(), i;
    });
    return r ? a.unshift(o) : a.push(o), o;
  }
}
const wn = (e) => (t, n = wt) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Mo || e === "sp") && _o(e, (...r) => t(...r), n)
), Pp = wn("bm"), xt = wn("m"), ic = wn("bu"), Sp = wn("u"), ll = wn("bum"), Fr = wn("um"), Ap = wn("sp"), Cp = wn(
  "rtg"
), Dp = wn(
  "rtc"
);
function Op(e, t = wt) {
  _o("ec", e, t);
}
function qe(e, t, n, r) {
  let a;
  const o = n;
  if (xe(e) || at(e)) {
    a = new Array(e.length);
    for (let s = 0, l = e.length; s < l; s++)
      a[s] = t(e[s], s, void 0, o);
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let s = 0; s < e; s++)
      a[s] = t(s + 1, s, void 0, o);
  } else if (Qe(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (s, l) => t(s, l, void 0, o)
      );
    else {
      const s = Object.keys(e);
      a = new Array(s.length);
      for (let l = 0, i = s.length; l < i; l++) {
        const c = s[l];
        a[l] = t(e[c], c, l, o);
      }
    }
  else
    a = [];
  return a;
}
function Dt(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (xe(r))
      for (let a = 0; a < r.length; a++)
        e[r[a].name] = r[a].fn;
    else r && (e[r.name] = r.key ? (...a) => {
      const o = r.fn(...a);
      return o && (o.key = r.key), o;
    } : r.fn);
  }
  return e;
}
function ge(e, t, n = {}, r, a) {
  if (vt.isCE || vt.parent && Jr(vt.parent) && vt.parent.isCE)
    return t !== "default" && (n.name = t), Xe("slot", n, r);
  let o = e[t];
  o && o._c && (o._d = !1), V();
  const s = o && uc(o(n)), l = De(
    _e,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      s && s.key || `_${t}`
    },
    s || [],
    s && e._ === 1 ? 64 : -2
  );
  return l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), o && o._c && (o._d = !0), l;
}
function uc(e) {
  return e.some((t) => Ka(t) ? !(t.type === Ht || t.type === _e && !uc(t.children)) : !0) ? e : null;
}
const _s = (e) => e ? xc(e) ? To(e) || e.proxy : _s(e.parent) : null, Zr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ yt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => _s(e.parent),
    $root: (e) => _s(e.root),
    $emit: (e) => e.emit,
    $options: (e) => il(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, ol(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Qt.bind(e.proxy)),
    $watch: (e) => bp.bind(e)
  })
), Ho = (e, t) => e !== Je && !e.__isScriptSetup && Ye(e, t), Ep = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: a, props: o, accessCache: s, type: l, appContext: i } = e;
    let c;
    if (t[0] !== "$") {
      const b = s[t];
      if (b !== void 0)
        switch (b) {
          case 1:
            return r[t];
          case 2:
            return a[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Ho(r, t))
          return s[t] = 1, r[t];
        if (a !== Je && Ye(a, t))
          return s[t] = 2, a[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && Ye(c, t)
        )
          return s[t] = 3, o[t];
        if (n !== Je && Ye(n, t))
          return s[t] = 4, n[t];
        xs && (s[t] = 0);
      }
    }
    const u = Zr[t];
    let d, p;
    if (u)
      return t === "$attrs" && $t(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== Je && Ye(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      p = i.config.globalProperties, Ye(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: a, ctx: o } = e;
    return Ho(a, t) ? (a[t] = n, !0) : r !== Je && Ye(r, t) ? (r[t] = n, !0) : Ye(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, propsOptions: o }
  }, s) {
    let l;
    return !!n[s] || e !== Je && Ye(e, s) || Ho(t, s) || (l = o[0]) && Ye(l, s) || Ye(r, s) || Ye(Zr, s) || Ye(a.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ye(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function vr() {
  return Rp().slots;
}
function Rp() {
  const e = fl();
  return e.setupContext || (e.setupContext = Mc(e));
}
function za(e) {
  return xe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function cc(e, t) {
  return !e || !t ? e || t : xe(e) && xe(t) ? e.concat(t) : yt({}, za(e), za(t));
}
let xs = !0;
function $p(e) {
  const t = il(e), n = e.proxy, r = e.ctx;
  xs = !1, t.beforeCreate && oi(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: o,
    methods: s,
    watch: l,
    provide: i,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: p,
    beforeUpdate: b,
    updated: g,
    activated: v,
    deactivated: T,
    beforeDestroy: $,
    beforeUnmount: I,
    destroyed: y,
    unmounted: P,
    render: D,
    renderTracked: B,
    renderTriggered: H,
    errorCaptured: _,
    serverPrefetch: O,
    // public API
    expose: W,
    inheritAttrs: A,
    // assets
    components: M,
    directives: F,
    filters: N
  } = t;
  if (c && Np(c, r, null), s)
    for (const q in s) {
      const re = s[q];
      Ae(re) && (r[q] = re.bind(n));
    }
  if (a) {
    const q = a.call(n, n);
    Qe(q) && (e.data = bn(q));
  }
  if (xs = !0, o)
    for (const q in o) {
      const re = o[q], fe = Ae(re) ? re.bind(n, n) : Ae(re.get) ? re.get.bind(n, n) : Yt, te = !Ae(re) && Ae(re.set) ? re.set.bind(n) : Yt, m = ee({
        get: fe,
        set: te
      });
      Object.defineProperty(r, q, {
        enumerable: !0,
        configurable: !0,
        get: () => m.value,
        set: (f) => m.value = f
      });
    }
  if (l)
    for (const q in l)
      dc(l[q], r, n, q);
  if (i) {
    const q = Ae(i) ? i.call(n) : i;
    Reflect.ownKeys(q).forEach((re) => {
      Yp(re, q[re]);
    });
  }
  u && oi(u, e, "c");
  function k(q, re) {
    xe(re) ? re.forEach((fe) => q(fe.bind(n))) : re && q(re.bind(n));
  }
  if (k(Pp, d), k(xt, p), k(ic, b), k(Sp, g), k(kp, v), k(Mp, T), k(Op, _), k(Dp, B), k(Cp, H), k(ll, I), k(Fr, P), k(Ap, O), xe(W))
    if (W.length) {
      const q = e.exposed || (e.exposed = {});
      W.forEach((re) => {
        Object.defineProperty(q, re, {
          get: () => n[re],
          set: (fe) => n[re] = fe
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === Yt && (e.render = D), A != null && (e.inheritAttrs = A), M && (e.components = M), F && (e.directives = F);
}
function Np(e, t, n = Yt) {
  xe(e) && (e = ks(e));
  for (const r in e) {
    const a = e[r];
    let o;
    Qe(a) ? "default" in a ? o = ea(
      a.from || r,
      a.default,
      !0
    ) : o = ea(a.from || r) : o = ea(a), ct(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[r] = o;
  }
}
function oi(e, t, n) {
  jt(
    xe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function dc(e, t, n, r) {
  const a = r.includes(".") ? rc(n, r) : () => n[r];
  if (at(e)) {
    const o = t[e];
    Ae(o) && ut(a, o);
  } else if (Ae(e))
    ut(a, e.bind(n));
  else if (Qe(e))
    if (xe(e))
      e.forEach((o) => dc(o, t, n, r));
    else {
      const o = Ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ae(o) && ut(a, o, e);
    }
}
function il(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: a,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = o.get(t);
  let i;
  return l ? i = l : !a.length && !n && !r ? i = t : (i = {}, a.length && a.forEach(
    (c) => Ga(i, c, s, !0)
  ), Ga(i, t, s)), Qe(t) && o.set(t, i), i;
}
function Ga(e, t, n, r = !1) {
  const { mixins: a, extends: o } = t;
  o && Ga(e, o, n, !0), a && a.forEach(
    (s) => Ga(e, s, n, !0)
  );
  for (const s in t)
    if (!(r && s === "expose")) {
      const l = Vp[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Vp = {
  data: si,
  props: li,
  emits: li,
  // objects
  methods: Kr,
  computed: Kr,
  // lifecycle
  beforeCreate: At,
  created: At,
  beforeMount: At,
  mounted: At,
  beforeUpdate: At,
  updated: At,
  beforeDestroy: At,
  beforeUnmount: At,
  destroyed: At,
  unmounted: At,
  activated: At,
  deactivated: At,
  errorCaptured: At,
  serverPrefetch: At,
  // assets
  components: Kr,
  directives: Kr,
  // watch
  watch: Fp,
  // provide / inject
  provide: si,
  inject: Ip
};
function si(e, t) {
  return t ? e ? function() {
    return yt(
      Ae(e) ? e.call(this, this) : e,
      Ae(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ip(e, t) {
  return Kr(ks(e), ks(t));
}
function ks(e) {
  if (xe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function At(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Kr(e, t) {
  return e ? yt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function li(e, t) {
  return e ? xe(e) && xe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yt(
    /* @__PURE__ */ Object.create(null),
    za(e),
    za(t ?? {})
  ) : t;
}
function Fp(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = yt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = At(e[r], t[r]);
  return n;
}
function fc() {
  return {
    app: null,
    config: {
      isNativeTag: uf,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Bp = 0;
function Lp(e, t) {
  return function(r, a = null) {
    Ae(r) || (r = yt({}, r)), a != null && !Qe(a) && (a = null);
    const o = fc(), s = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const i = o.app = {
      _uid: Bp++,
      _component: r,
      _props: a,
      _container: null,
      _context: o,
      _instance: null,
      version: fm,
      get config() {
        return o.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return s.has(c) || (c && Ae(c.install) ? (s.add(c), c.install(i, ...u)) : Ae(c) && (s.add(c), c(i, ...u))), i;
      },
      mixin(c) {
        return o.mixins.includes(c) || o.mixins.push(c), i;
      },
      component(c, u) {
        return u ? (o.components[c] = u, i) : o.components[c];
      },
      directive(c, u) {
        return u ? (o.directives[c] = u, i) : o.directives[c];
      },
      mount(c, u, d) {
        if (!l) {
          const p = Xe(r, a);
          return p.appContext = o, d === !0 ? d = "svg" : d === !1 && (d = void 0), u && t ? t(p, c) : e(p, c, d), l = !0, i._container = c, c.__vue_app__ = i, To(p.component) || p.component.proxy;
        }
      },
      unmount() {
        l && (e(null, i._container), delete i._container.__vue_app__);
      },
      provide(c, u) {
        return o.provides[c] = u, i;
      },
      runWithContext(c) {
        const u = Sr;
        Sr = i;
        try {
          return c();
        } finally {
          Sr = u;
        }
      }
    };
    return i;
  };
}
let Sr = null;
function Yp(e, t) {
  if (wt) {
    let n = wt.provides;
    const r = wt.parent && wt.parent.provides;
    r === n && (n = wt.provides = Object.create(r)), n[e] = t;
  }
}
function ea(e, t, n = !1) {
  const r = wt || vt;
  if (r || Sr) {
    const a = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Sr._context.provides;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Ae(t) ? t.call(r && r.proxy) : t;
  }
}
function jp() {
  return !!(wt || vt || Sr);
}
function Hp(e, t, n, r = !1) {
  const a = {}, o = {};
  ja(o, ko, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), pc(e, t, a, o);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = r ? a : Wf(a) : e.type.props ? e.props = a : e.props = o, e.attrs = o;
}
function Up(e, t, n, r) {
  const {
    props: a,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, l = Le(a), [i] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let p = u[d];
        if (yo(e.emitsOptions, p))
          continue;
        const b = t[p];
        if (i)
          if (Ye(o, p))
            b !== o[p] && (o[p] = b, c = !0);
          else {
            const g = Xt(p);
            a[g] = Ms(
              i,
              l,
              g,
              b,
              e,
              !1
            );
          }
        else
          b !== o[p] && (o[p] = b, c = !0);
      }
    }
  } else {
    pc(e, t, a, o) && (c = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !Ye(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Un(d)) === d || !Ye(t, u))) && (i ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[d] = Ms(
        i,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete a[d]);
    if (o !== l)
      for (const d in o)
        (!t || !Ye(t, d)) && (delete o[d], c = !0);
  }
  c && gn(e, "set", "$attrs");
}
function pc(e, t, n, r) {
  const [a, o] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let i in t) {
      if (Qr(i))
        continue;
      const c = t[i];
      let u;
      a && Ye(a, u = Xt(i)) ? !o || !o.includes(u) ? n[u] = c : (l || (l = {}))[u] = c : yo(e.emitsOptions, i) || (!(i in r) || c !== r[i]) && (r[i] = c, s = !0);
    }
  if (o) {
    const i = Le(n), c = l || Je;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      n[d] = Ms(
        a,
        i,
        d,
        c[d],
        e,
        !Ye(c, d)
      );
    }
  }
  return s;
}
function Ms(e, t, n, r, a, o) {
  const s = e[n];
  if (s != null) {
    const l = Ye(s, "default");
    if (l && r === void 0) {
      const i = s.default;
      if (s.type !== Function && !s.skipFactory && Ae(i)) {
        const { propsDefaults: c } = a;
        if (n in c)
          r = c[n];
        else {
          const u = ba(a);
          r = c[n] = i.call(
            null,
            t
          ), u();
        }
      } else
        r = i;
    }
    s[
      0
      /* shouldCast */
    ] && (o && !l ? r = !1 : s[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Un(n)) && (r = !0));
  }
  return r;
}
function mc(e, t, n = !1) {
  const r = t.propsCache, a = r.get(e);
  if (a)
    return a;
  const o = e.props, s = {}, l = [];
  let i = !1;
  if (!Ae(e)) {
    const u = (d) => {
      i = !0;
      const [p, b] = mc(d, t, !0);
      yt(s, p), b && l.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !i)
    return Qe(e) && r.set(e, kr), kr;
  if (xe(o))
    for (let u = 0; u < o.length; u++) {
      const d = Xt(o[u]);
      ii(d) && (s[d] = Je);
    }
  else if (o)
    for (const u in o) {
      const d = Xt(u);
      if (ii(d)) {
        const p = o[u], b = s[d] = xe(p) || Ae(p) ? { type: p } : yt({}, p);
        if (b) {
          const g = di(Boolean, b.type), v = di(String, b.type);
          b[
            0
            /* shouldCast */
          ] = g > -1, b[
            1
            /* shouldCastTrue */
          ] = v < 0 || g < v, (g > -1 || Ye(b, "default")) && l.push(d);
        }
      }
    }
  const c = [s, l];
  return Qe(e) && r.set(e, c), c;
}
function ii(e) {
  return e[0] !== "$" && !Qr(e);
}
function ui(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function ci(e, t) {
  return ui(e) === ui(t);
}
function di(e, t) {
  return xe(t) ? t.findIndex((n) => ci(n, e)) : Ae(t) && ci(t, e) ? 0 : -1;
}
const hc = (e) => e[0] === "_" || e === "$stable", ul = (e) => xe(e) ? e.map(an) : [an(e)], Wp = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ve((...a) => ul(t(...a)), n);
  return r._c = !1, r;
}, vc = (e, t, n) => {
  const r = e._ctx;
  for (const a in e) {
    if (hc(a))
      continue;
    const o = e[a];
    if (Ae(o))
      t[a] = Wp(a, o, r);
    else if (o != null) {
      const s = ul(o);
      t[a] = () => s;
    }
  }
}, yc = (e, t) => {
  const n = ul(t);
  e.slots.default = () => n;
}, qp = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = Le(t), ja(t, "_", n)) : vc(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && yc(e, t);
  ja(e.slots, ko, 1);
}, zp = (e, t, n) => {
  const { vnode: r, slots: a } = e;
  let o = !0, s = Je;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : (yt(a, t), !n && l === 1 && delete a._) : (o = !t.$stable, vc(t, a)), s = t;
  } else t && (yc(e, t), s = { default: 1 });
  if (o)
    for (const l in a)
      !hc(l) && s[l] == null && delete a[l];
};
function Ts(e, t, n, r, a = !1) {
  if (xe(e)) {
    e.forEach(
      (p, b) => Ts(
        p,
        t && (xe(t) ? t[b] : t),
        n,
        r,
        a
      )
    );
    return;
  }
  if (Jr(r) && !a)
    return;
  const o = r.shapeFlag & 4 ? To(r.component) || r.component.proxy : r.el, s = a ? null : o, { i: l, r: i } = e, c = t && t.r, u = l.refs === Je ? l.refs = {} : l.refs, d = l.setupState;
  if (c != null && c !== i && (at(c) ? (u[c] = null, Ye(d, c) && (d[c] = null)) : ct(c) && (c.value = null)), Ae(i))
    Nn(i, l, 12, [s, u]);
  else {
    const p = at(i), b = ct(i);
    if (p || b) {
      const g = () => {
        if (e.f) {
          const v = p ? Ye(d, i) ? d[i] : u[i] : i.value;
          a ? xe(v) && qs(v, o) : xe(v) ? v.includes(o) || v.push(o) : p ? (u[i] = [o], Ye(d, i) && (d[i] = u[i])) : (i.value = [o], e.k && (u[e.k] = i.value));
        } else p ? (u[i] = s, Ye(d, i) && (d[i] = s)) : b && (i.value = s, e.k && (u[e.k] = s));
      };
      s ? (g.id = -1, Ot(g, n)) : g();
    }
  }
}
const Ot = hp;
function Gp(e) {
  return Kp(e);
}
function Kp(e, t) {
  const n = Au();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: o,
    createElement: s,
    createText: l,
    createComment: i,
    setText: c,
    setElementText: u,
    parentNode: d,
    nextSibling: p,
    setScopeId: b = Yt,
    insertStaticContent: g
  } = e, v = (h, x, L, K = null, E = null, oe = null, ie = void 0, le = null, ue = !!x.dynamicChildren) => {
    if (h === x)
      return;
    h && !rr(h, x) && (K = Oe(h), f(h, E, oe, !0), h = null), x.patchFlag === -2 && (ue = !1, x.dynamicChildren = null);
    const { type: ae, ref: de, shapeFlag: me } = x;
    switch (ae) {
      case xo:
        T(h, x, L, K);
        break;
      case Ht:
        $(h, x, L, K);
        break;
      case Wo:
        h == null && I(x, L, K, ie);
        break;
      case _e:
        M(
          h,
          x,
          L,
          K,
          E,
          oe,
          ie,
          le,
          ue
        );
        break;
      default:
        me & 1 ? D(
          h,
          x,
          L,
          K,
          E,
          oe,
          ie,
          le,
          ue
        ) : me & 6 ? F(
          h,
          x,
          L,
          K,
          E,
          oe,
          ie,
          le,
          ue
        ) : (me & 64 || me & 128) && ae.process(
          h,
          x,
          L,
          K,
          E,
          oe,
          ie,
          le,
          ue,
          ve
        );
    }
    de != null && E && Ts(de, h && h.ref, oe, x || h, !x);
  }, T = (h, x, L, K) => {
    if (h == null)
      r(
        x.el = l(x.children),
        L,
        K
      );
    else {
      const E = x.el = h.el;
      x.children !== h.children && c(E, x.children);
    }
  }, $ = (h, x, L, K) => {
    h == null ? r(
      x.el = i(x.children || ""),
      L,
      K
    ) : x.el = h.el;
  }, I = (h, x, L, K) => {
    [h.el, h.anchor] = g(
      h.children,
      x,
      L,
      K,
      h.el,
      h.anchor
    );
  }, y = ({ el: h, anchor: x }, L, K) => {
    let E;
    for (; h && h !== x; )
      E = p(h), r(h, L, K), h = E;
    r(x, L, K);
  }, P = ({ el: h, anchor: x }) => {
    let L;
    for (; h && h !== x; )
      L = p(h), a(h), h = L;
    a(x);
  }, D = (h, x, L, K, E, oe, ie, le, ue) => {
    x.type === "svg" ? ie = "svg" : x.type === "math" && (ie = "mathml"), h == null ? B(
      x,
      L,
      K,
      E,
      oe,
      ie,
      le,
      ue
    ) : O(
      h,
      x,
      E,
      oe,
      ie,
      le,
      ue
    );
  }, B = (h, x, L, K, E, oe, ie, le) => {
    let ue, ae;
    const { props: de, shapeFlag: me, transition: be, dirs: Te } = h;
    if (ue = h.el = s(
      h.type,
      oe,
      de && de.is,
      de
    ), me & 8 ? u(ue, h.children) : me & 16 && _(
      h.children,
      ue,
      null,
      K,
      E,
      Uo(h, oe),
      ie,
      le
    ), Te && Xn(h, null, K, "created"), H(ue, h, h.scopeId, ie, K), de) {
      for (const je in de)
        je !== "value" && !Qr(je) && o(
          ue,
          je,
          null,
          de[je],
          oe,
          h.children,
          K,
          E,
          Y
        );
      "value" in de && o(ue, "value", null, de.value, oe), (ae = de.onVnodeBeforeMount) && nn(ae, K, h);
    }
    Te && Xn(h, null, K, "beforeMount");
    const Re = Xp(E, be);
    Re && be.beforeEnter(ue), r(ue, x, L), ((ae = de && de.onVnodeMounted) || Re || Te) && Ot(() => {
      ae && nn(ae, K, h), Re && be.enter(ue), Te && Xn(h, null, K, "mounted");
    }, E);
  }, H = (h, x, L, K, E) => {
    if (L && b(h, L), K)
      for (let oe = 0; oe < K.length; oe++)
        b(h, K[oe]);
    if (E) {
      let oe = E.subTree;
      if (x === oe) {
        const ie = E.vnode;
        H(
          h,
          ie,
          ie.scopeId,
          ie.slotScopeIds,
          E.parent
        );
      }
    }
  }, _ = (h, x, L, K, E, oe, ie, le, ue = 0) => {
    for (let ae = ue; ae < h.length; ae++) {
      const de = h[ae] = le ? On(h[ae]) : an(h[ae]);
      v(
        null,
        de,
        x,
        L,
        K,
        E,
        oe,
        ie,
        le
      );
    }
  }, O = (h, x, L, K, E, oe, ie) => {
    const le = x.el = h.el;
    let { patchFlag: ue, dynamicChildren: ae, dirs: de } = x;
    ue |= h.patchFlag & 16;
    const me = h.props || Je, be = x.props || Je;
    let Te;
    if (L && Qn(L, !1), (Te = be.onVnodeBeforeUpdate) && nn(Te, L, x, h), de && Xn(x, h, L, "beforeUpdate"), L && Qn(L, !0), ae ? W(
      h.dynamicChildren,
      ae,
      le,
      L,
      K,
      Uo(x, E),
      oe
    ) : ie || re(
      h,
      x,
      le,
      null,
      L,
      K,
      Uo(x, E),
      oe,
      !1
    ), ue > 0) {
      if (ue & 16)
        A(
          le,
          x,
          me,
          be,
          L,
          K,
          E
        );
      else if (ue & 2 && me.class !== be.class && o(le, "class", null, be.class, E), ue & 4 && o(le, "style", me.style, be.style, E), ue & 8) {
        const Re = x.dynamicProps;
        for (let je = 0; je < Re.length; je++) {
          const Ge = Re[je], lt = me[Ge], j = be[Ge];
          (j !== lt || Ge === "value") && o(
            le,
            Ge,
            lt,
            j,
            E,
            h.children,
            L,
            K,
            Y
          );
        }
      }
      ue & 1 && h.children !== x.children && u(le, x.children);
    } else !ie && ae == null && A(
      le,
      x,
      me,
      be,
      L,
      K,
      E
    );
    ((Te = be.onVnodeUpdated) || de) && Ot(() => {
      Te && nn(Te, L, x, h), de && Xn(x, h, L, "updated");
    }, K);
  }, W = (h, x, L, K, E, oe, ie) => {
    for (let le = 0; le < x.length; le++) {
      const ue = h[le], ae = x[le], de = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ue.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ue.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !rr(ue, ae) || // - In the case of a component, it could contain anything.
        ue.shapeFlag & 70) ? d(ue.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          L
        )
      );
      v(
        ue,
        ae,
        de,
        null,
        K,
        E,
        oe,
        ie,
        !0
      );
    }
  }, A = (h, x, L, K, E, oe, ie) => {
    if (L !== K) {
      if (L !== Je)
        for (const le in L)
          !Qr(le) && !(le in K) && o(
            h,
            le,
            L[le],
            null,
            ie,
            x.children,
            E,
            oe,
            Y
          );
      for (const le in K) {
        if (Qr(le))
          continue;
        const ue = K[le], ae = L[le];
        ue !== ae && le !== "value" && o(
          h,
          le,
          ae,
          ue,
          ie,
          x.children,
          E,
          oe,
          Y
        );
      }
      "value" in K && o(h, "value", L.value, K.value, ie);
    }
  }, M = (h, x, L, K, E, oe, ie, le, ue) => {
    const ae = x.el = h ? h.el : l(""), de = x.anchor = h ? h.anchor : l("");
    let { patchFlag: me, dynamicChildren: be, slotScopeIds: Te } = x;
    Te && (le = le ? le.concat(Te) : Te), h == null ? (r(ae, L, K), r(de, L, K), _(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      x.children || [],
      L,
      de,
      E,
      oe,
      ie,
      le,
      ue
    )) : me > 0 && me & 64 && be && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren ? (W(
      h.dynamicChildren,
      be,
      L,
      E,
      oe,
      ie,
      le
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (x.key != null || E && x === E.subTree) && cl(
      h,
      x,
      !0
      /* shallow */
    )) : re(
      h,
      x,
      L,
      de,
      E,
      oe,
      ie,
      le,
      ue
    );
  }, F = (h, x, L, K, E, oe, ie, le, ue) => {
    x.slotScopeIds = le, h == null ? x.shapeFlag & 512 ? E.ctx.activate(
      x,
      L,
      K,
      ie,
      ue
    ) : N(
      x,
      L,
      K,
      E,
      oe,
      ie,
      ue
    ) : w(h, x, ue);
  }, N = (h, x, L, K, E, oe, ie) => {
    const le = h.component = sm(
      h,
      K,
      E
    );
    if (wo(h) && (le.ctx.renderer = ve), lm(le), le.asyncDep) {
      if (E && E.registerDep(le, k), !h.el) {
        const ue = le.subTree = Xe(Ht);
        $(null, ue, x, L);
      }
    } else
      k(
        le,
        h,
        x,
        L,
        E,
        oe,
        ie
      );
  }, w = (h, x, L) => {
    const K = x.component = h.component;
    if (dp(h, x, L))
      if (K.asyncDep && !K.asyncResolved) {
        q(K, x, L);
        return;
      } else
        K.next = x, rp(K.update), K.effect.dirty = !0, K.update();
    else
      x.el = h.el, K.vnode = x;
  }, k = (h, x, L, K, E, oe, ie) => {
    const le = () => {
      if (h.isMounted) {
        let { next: de, bu: me, u: be, parent: Te, vnode: Re } = h;
        {
          const se = gc(h);
          if (se) {
            de && (de.el = Re.el, q(h, de, ie)), se.asyncDep.then(() => {
              h.isUnmounted || le();
            });
            return;
          }
        }
        let je = de, Ge;
        Qn(h, !1), de ? (de.el = Re.el, q(h, de, ie)) : de = Re, me && Va(me), (Ge = de.props && de.props.onVnodeBeforeUpdate) && nn(Ge, Te, de, Re), Qn(h, !0);
        const lt = Yo(h), j = h.subTree;
        h.subTree = lt, v(
          j,
          lt,
          // parent may have changed if it's in a teleport
          d(j.el),
          // anchor may have changed if it's in a fragment
          Oe(j),
          h,
          E,
          oe
        ), de.el = lt.el, je === null && fp(h, lt.el), be && Ot(be, E), (Ge = de.props && de.props.onVnodeUpdated) && Ot(
          () => nn(Ge, Te, de, Re),
          E
        );
      } else {
        let de;
        const { el: me, props: be } = x, { bm: Te, m: Re, parent: je } = h, Ge = Jr(x);
        if (Qn(h, !1), Te && Va(Te), !Ge && (de = be && be.onVnodeBeforeMount) && nn(de, je, x), Qn(h, !0), me && C) {
          const lt = () => {
            h.subTree = Yo(h), C(
              me,
              h.subTree,
              h,
              E,
              null
            );
          };
          Ge ? x.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !h.isUnmounted && lt()
          ) : lt();
        } else {
          const lt = h.subTree = Yo(h);
          v(
            null,
            lt,
            L,
            K,
            h,
            E,
            oe
          ), x.el = lt.el;
        }
        if (Re && Ot(Re, E), !Ge && (de = be && be.onVnodeMounted)) {
          const lt = x;
          Ot(
            () => nn(de, je, lt),
            E
          );
        }
        (x.shapeFlag & 256 || je && Jr(je.vnode) && je.vnode.shapeFlag & 256) && h.a && Ot(h.a, E), h.isMounted = !0, x = L = K = null;
      }
    }, ue = h.effect = new Ks(
      le,
      Yt,
      () => ol(ae),
      h.scope
      // track it in component's effect scope
    ), ae = h.update = () => {
      ue.dirty && ue.run();
    };
    ae.id = h.uid, Qn(h, !0), ae();
  }, q = (h, x, L) => {
    x.component = h;
    const K = h.vnode.props;
    h.vnode = x, h.next = null, Up(h, x.props, K, L), zp(h, x.children, L), Wn(), ti(h), hr();
  }, re = (h, x, L, K, E, oe, ie, le, ue = !1) => {
    const ae = h && h.children, de = h ? h.shapeFlag : 0, me = x.children, { patchFlag: be, shapeFlag: Te } = x;
    if (be > 0) {
      if (be & 128) {
        te(
          ae,
          me,
          L,
          K,
          E,
          oe,
          ie,
          le,
          ue
        );
        return;
      } else if (be & 256) {
        fe(
          ae,
          me,
          L,
          K,
          E,
          oe,
          ie,
          le,
          ue
        );
        return;
      }
    }
    Te & 8 ? (de & 16 && Y(ae, E, oe), me !== ae && u(L, me)) : de & 16 ? Te & 16 ? te(
      ae,
      me,
      L,
      K,
      E,
      oe,
      ie,
      le,
      ue
    ) : Y(ae, E, oe, !0) : (de & 8 && u(L, ""), Te & 16 && _(
      me,
      L,
      K,
      E,
      oe,
      ie,
      le,
      ue
    ));
  }, fe = (h, x, L, K, E, oe, ie, le, ue) => {
    h = h || kr, x = x || kr;
    const ae = h.length, de = x.length, me = Math.min(ae, de);
    let be;
    for (be = 0; be < me; be++) {
      const Te = x[be] = ue ? On(x[be]) : an(x[be]);
      v(
        h[be],
        Te,
        L,
        null,
        E,
        oe,
        ie,
        le,
        ue
      );
    }
    ae > de ? Y(
      h,
      E,
      oe,
      !0,
      !1,
      me
    ) : _(
      x,
      L,
      K,
      E,
      oe,
      ie,
      le,
      ue,
      me
    );
  }, te = (h, x, L, K, E, oe, ie, le, ue) => {
    let ae = 0;
    const de = x.length;
    let me = h.length - 1, be = de - 1;
    for (; ae <= me && ae <= be; ) {
      const Te = h[ae], Re = x[ae] = ue ? On(x[ae]) : an(x[ae]);
      if (rr(Te, Re))
        v(
          Te,
          Re,
          L,
          null,
          E,
          oe,
          ie,
          le,
          ue
        );
      else
        break;
      ae++;
    }
    for (; ae <= me && ae <= be; ) {
      const Te = h[me], Re = x[be] = ue ? On(x[be]) : an(x[be]);
      if (rr(Te, Re))
        v(
          Te,
          Re,
          L,
          null,
          E,
          oe,
          ie,
          le,
          ue
        );
      else
        break;
      me--, be--;
    }
    if (ae > me) {
      if (ae <= be) {
        const Te = be + 1, Re = Te < de ? x[Te].el : K;
        for (; ae <= be; )
          v(
            null,
            x[ae] = ue ? On(x[ae]) : an(x[ae]),
            L,
            Re,
            E,
            oe,
            ie,
            le,
            ue
          ), ae++;
      }
    } else if (ae > be)
      for (; ae <= me; )
        f(h[ae], E, oe, !0), ae++;
    else {
      const Te = ae, Re = ae, je = /* @__PURE__ */ new Map();
      for (ae = Re; ae <= be; ae++) {
        const he = x[ae] = ue ? On(x[ae]) : an(x[ae]);
        he.key != null && je.set(he.key, ae);
      }
      let Ge, lt = 0;
      const j = be - Re + 1;
      let se = !1, we = 0;
      const Pe = new Array(j);
      for (ae = 0; ae < j; ae++)
        Pe[ae] = 0;
      for (ae = Te; ae <= me; ae++) {
        const he = h[ae];
        if (lt >= j) {
          f(he, E, oe, !0);
          continue;
        }
        let ye;
        if (he.key != null)
          ye = je.get(he.key);
        else
          for (Ge = Re; Ge <= be; Ge++)
            if (Pe[Ge - Re] === 0 && rr(he, x[Ge])) {
              ye = Ge;
              break;
            }
        ye === void 0 ? f(he, E, oe, !0) : (Pe[ye - Re] = ae + 1, ye >= we ? we = ye : se = !0, v(
          he,
          x[ye],
          L,
          null,
          E,
          oe,
          ie,
          le,
          ue
        ), lt++);
      }
      const ne = se ? Qp(Pe) : kr;
      for (Ge = ne.length - 1, ae = j - 1; ae >= 0; ae--) {
        const he = Re + ae, ye = x[he], Bt = he + 1 < de ? x[he + 1].el : K;
        Pe[ae] === 0 ? v(
          null,
          ye,
          L,
          Bt,
          E,
          oe,
          ie,
          le,
          ue
        ) : se && (Ge < 0 || ae !== ne[Ge] ? m(ye, L, Bt, 2) : Ge--);
      }
    }
  }, m = (h, x, L, K, E = null) => {
    const { el: oe, type: ie, transition: le, children: ue, shapeFlag: ae } = h;
    if (ae & 6) {
      m(h.component.subTree, x, L, K);
      return;
    }
    if (ae & 128) {
      h.suspense.move(x, L, K);
      return;
    }
    if (ae & 64) {
      ie.move(h, x, L, ve);
      return;
    }
    if (ie === _e) {
      r(oe, x, L);
      for (let me = 0; me < ue.length; me++)
        m(ue[me], x, L, K);
      r(h.anchor, x, L);
      return;
    }
    if (ie === Wo) {
      y(h, x, L);
      return;
    }
    if (K !== 2 && ae & 1 && le)
      if (K === 0)
        le.beforeEnter(oe), r(oe, x, L), Ot(() => le.enter(oe), E);
      else {
        const { leave: me, delayLeave: be, afterLeave: Te } = le, Re = () => r(oe, x, L), je = () => {
          me(oe, () => {
            Re(), Te && Te();
          });
        };
        be ? be(oe, Re, je) : je();
      }
    else
      r(oe, x, L);
  }, f = (h, x, L, K = !1, E = !1) => {
    const {
      type: oe,
      props: ie,
      ref: le,
      children: ue,
      dynamicChildren: ae,
      shapeFlag: de,
      patchFlag: me,
      dirs: be
    } = h;
    if (le != null && Ts(le, null, L, h, !0), de & 256) {
      x.ctx.deactivate(h);
      return;
    }
    const Te = de & 1 && be, Re = !Jr(h);
    let je;
    if (Re && (je = ie && ie.onVnodeBeforeUnmount) && nn(je, x, h), de & 6)
      ce(h.component, L, K);
    else {
      if (de & 128) {
        h.suspense.unmount(L, K);
        return;
      }
      Te && Xn(h, null, x, "beforeUnmount"), de & 64 ? h.type.remove(
        h,
        x,
        L,
        E,
        ve,
        K
      ) : ae && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (oe !== _e || me > 0 && me & 64) ? Y(
        ae,
        x,
        L,
        !1,
        !0
      ) : (oe === _e && me & 384 || !E && de & 16) && Y(ue, x, L), K && R(h);
    }
    (Re && (je = ie && ie.onVnodeUnmounted) || Te) && Ot(() => {
      je && nn(je, x, h), Te && Xn(h, null, x, "unmounted");
    }, L);
  }, R = (h) => {
    const { type: x, el: L, anchor: K, transition: E } = h;
    if (x === _e) {
      X(L, K);
      return;
    }
    if (x === Wo) {
      P(h);
      return;
    }
    const oe = () => {
      a(L), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (h.shapeFlag & 1 && E && !E.persisted) {
      const { leave: ie, delayLeave: le } = E, ue = () => ie(L, oe);
      le ? le(h.el, oe, ue) : ue();
    } else
      oe();
  }, X = (h, x) => {
    let L;
    for (; h !== x; )
      L = p(h), a(h), h = L;
    a(x);
  }, ce = (h, x, L) => {
    const { bum: K, scope: E, update: oe, subTree: ie, um: le } = h;
    K && Va(K), E.stop(), oe && (oe.active = !1, f(ie, h, x, L)), le && Ot(le, x), Ot(() => {
      h.isUnmounted = !0;
    }, x), x && x.pendingBranch && !x.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === x.pendingId && (x.deps--, x.deps === 0 && x.resolve());
  }, Y = (h, x, L, K = !1, E = !1, oe = 0) => {
    for (let ie = oe; ie < h.length; ie++)
      f(h[ie], x, L, K, E);
  }, Oe = (h) => h.shapeFlag & 6 ? Oe(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : p(h.anchor || h.el);
  let Ie = !1;
  const U = (h, x, L) => {
    h == null ? x._vnode && f(x._vnode, null, null, !0) : v(
      x._vnode || null,
      h,
      x,
      null,
      null,
      null,
      L
    ), Ie || (Ie = !0, ti(), Qu(), Ie = !1), x._vnode = h;
  }, ve = {
    p: v,
    um: f,
    m,
    r: R,
    mt: N,
    mc: _,
    pc: re,
    pbc: W,
    n: Oe,
    o: e
  };
  let Ee, C;
  return {
    render: U,
    hydrate: Ee,
    createApp: Lp(U, Ee)
  };
}
function Uo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Qn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Xp(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function cl(e, t, n = !1) {
  const r = e.children, a = t.children;
  if (xe(r) && xe(a))
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      let l = a[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = a[o] = On(a[o]), l.el = s.el), n || cl(s, l)), l.type === xo && (l.el = s.el);
    }
}
function Qp(e) {
  const t = e.slice(), n = [0];
  let r, a, o, s, l;
  const i = e.length;
  for (r = 0; r < i; r++) {
    const c = e[r];
    if (c !== 0) {
      if (a = n[n.length - 1], e[a] < c) {
        t[r] = a, n.push(r);
        continue;
      }
      for (o = 0, s = n.length - 1; o < s; )
        l = o + s >> 1, e[n[l]] < c ? o = l + 1 : s = l;
      c < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
    }
  }
  for (o = n.length, s = n[o - 1]; o-- > 0; )
    n[o] = s, s = t[s];
  return n;
}
function gc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : gc(t);
}
const Jp = (e) => e.__isTeleport, ta = (e) => e && (e.disabled || e.disabled === ""), fi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, pi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ps = (e, t) => {
  const n = e && e.to;
  return at(n) ? t ? t(n) : null : n;
}, Zp = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, a, o, s, l, i, c) {
    const {
      mc: u,
      pc: d,
      pbc: p,
      o: { insert: b, querySelector: g, createText: v, createComment: T }
    } = c, $ = ta(t.props);
    let { shapeFlag: I, children: y, dynamicChildren: P } = t;
    if (e == null) {
      const D = t.el = v(""), B = t.anchor = v("");
      b(D, n, r), b(B, n, r);
      const H = t.target = Ps(t.props, g), _ = t.targetAnchor = v("");
      H && (b(_, H), s === "svg" || fi(H) ? s = "svg" : (s === "mathml" || pi(H)) && (s = "mathml"));
      const O = (W, A) => {
        I & 16 && u(
          y,
          W,
          A,
          a,
          o,
          s,
          l,
          i
        );
      };
      $ ? O(n, B) : H && O(H, _);
    } else {
      t.el = e.el;
      const D = t.anchor = e.anchor, B = t.target = e.target, H = t.targetAnchor = e.targetAnchor, _ = ta(e.props), O = _ ? n : B, W = _ ? D : H;
      if (s === "svg" || fi(B) ? s = "svg" : (s === "mathml" || pi(B)) && (s = "mathml"), P ? (p(
        e.dynamicChildren,
        P,
        O,
        a,
        o,
        s,
        l
      ), cl(e, t, !0)) : i || d(
        e,
        t,
        O,
        W,
        a,
        o,
        s,
        l,
        !1
      ), $)
        _ ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ea(
          t,
          n,
          D,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const A = t.target = Ps(
          t.props,
          g
        );
        A && Ea(
          t,
          A,
          null,
          c,
          0
        );
      } else _ && Ea(
        t,
        B,
        H,
        c,
        1
      );
    }
    bc(t);
  },
  remove(e, t, n, r, { um: a, o: { remove: o } }, s) {
    const { shapeFlag: l, children: i, anchor: c, targetAnchor: u, target: d, props: p } = e;
    if (d && o(u), s && o(c), l & 16) {
      const b = s || !ta(p);
      for (let g = 0; g < i.length; g++) {
        const v = i[g];
        a(
          v,
          t,
          n,
          b,
          !!v.dynamicChildren
        );
      }
    }
  },
  move: Ea,
  hydrate: em
};
function Ea(e, t, n, { o: { insert: r }, m: a }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: s, anchor: l, shapeFlag: i, children: c, props: u } = e, d = o === 2;
  if (d && r(s, t, n), (!d || ta(u)) && i & 16)
    for (let p = 0; p < c.length; p++)
      a(
        c[p],
        t,
        n,
        2
      );
  d && r(l, t, n);
}
function em(e, t, n, r, a, o, {
  o: { nextSibling: s, parentNode: l, querySelector: i }
}, c) {
  const u = t.target = Ps(
    t.props,
    i
  );
  if (u) {
    const d = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (ta(t.props))
        t.anchor = c(
          s(e),
          t,
          l(e),
          n,
          r,
          a,
          o
        ), t.targetAnchor = d;
      else {
        t.anchor = s(e);
        let p = d;
        for (; p; )
          if (p = s(p), p && p.nodeType === 8 && p.data === "teleport anchor") {
            t.targetAnchor = p, u._lpa = t.targetAnchor && s(t.targetAnchor);
            break;
          }
        c(
          d,
          t,
          u,
          n,
          r,
          a,
          o
        );
      }
    bc(t);
  }
  return t.anchor && s(t.anchor);
}
const tm = Zp;
function bc(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const _e = Symbol.for("v-fgt"), xo = Symbol.for("v-txt"), Ht = Symbol.for("v-cmt"), Wo = Symbol.for("v-stc"), na = [];
let zt = null;
function V(e = !1) {
  na.push(zt = e ? null : []);
}
function nm() {
  na.pop(), zt = na[na.length - 1] || null;
}
let da = 1;
function mi(e) {
  da += e;
}
function wc(e) {
  return e.dynamicChildren = da > 0 ? zt || kr : null, nm(), da > 0 && zt && zt.push(e), e;
}
function G(e, t, n, r, a, o) {
  return wc(
    ke(
      e,
      t,
      n,
      r,
      a,
      o,
      !0
    )
  );
}
function De(e, t, n, r, a) {
  return wc(
    Xe(
      e,
      t,
      n,
      r,
      a,
      !0
    )
  );
}
function Ka(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function rr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ko = "__vInternal", _c = ({ key: e }) => e ?? null, Ia = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? at(e) || ct(e) || Ae(e) ? { i: vt, r: e, k: t, f: !!n } : e : null);
function ke(e, t = null, n = null, r = 0, a = null, o = e === _e ? 0 : 1, s = !1, l = !1) {
  const i = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _c(t),
    ref: t && Ia(t),
    scopeId: go,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: vt
  };
  return l ? (dl(i, n), o & 128 && e.normalize(i)) : n && (i.shapeFlag |= at(n) ? 8 : 16), da > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  zt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (i.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  i.patchFlag !== 32 && zt.push(i), i;
}
const Xe = rm;
function rm(e, t = null, n = null, r = 0, a = null, o = !1) {
  if ((!e || e === tc) && (e = Ht), Ka(e)) {
    const l = Ln(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && dl(l, n), da > 0 && !o && zt && (l.shapeFlag & 6 ? zt[zt.indexOf(e)] = l : zt.push(l)), l.patchFlag |= -2, l;
  }
  if (dm(e) && (e = e.__vccOpts), t) {
    t = Pt(t);
    let { class: l, style: i } = t;
    l && !at(l) && (t.class = Ne(l)), Qe(i) && (Wu(i) && !xe(i) && (i = yt({}, i)), t.style = Ct(i));
  }
  const s = at(e) ? 1 : mp(e) ? 128 : Jp(e) ? 64 : Qe(e) ? 4 : Ae(e) ? 2 : 0;
  return ke(
    e,
    t,
    n,
    r,
    a,
    s,
    o,
    !0
  );
}
function Pt(e) {
  return e ? Wu(e) || ko in e ? yt({}, e) : e : null;
}
function Ln(e, t, n = !1) {
  const { props: r, ref: a, patchFlag: o, children: s } = e, l = t ? _t(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && _c(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? xe(a) ? a.concat(Ia(t)) : [a, Ia(t)] : Ia(t)
    ) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== _e ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ln(e.ssContent),
    ssFallback: e.ssFallback && Ln(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Jt(e = " ", t = 0) {
  return Xe(xo, null, e, t);
}
function Q(e = "", t = !1) {
  return t ? (V(), De(Ht, null, e)) : Xe(Ht, null, e);
}
function an(e) {
  return e == null || typeof e == "boolean" ? Xe(Ht) : xe(e) ? Xe(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? On(e) : Xe(xo, null, String(e));
}
function On(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ln(e);
}
function dl(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (xe(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), dl(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !(ko in t) ? t._ctx = vt : a === 3 && vt && (vt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ae(t) ? (t = { default: t, _ctx: vt }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Jt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function _t(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const a in r)
      if (a === "class")
        t.class !== r.class && (t.class = Ne([t.class, r.class]));
      else if (a === "style")
        t.style = Ct([t.style, r.style]);
      else if (io(a)) {
        const o = t[a], s = r[a];
        s && o !== s && !(xe(o) && o.includes(s)) && (t[a] = o ? [].concat(o, s) : s);
      } else a !== "" && (t[a] = r[a]);
  }
  return t;
}
function nn(e, t, n, r = null) {
  jt(e, t, 7, [
    n,
    r
  ]);
}
const am = fc();
let om = 0;
function sm(e, t, n) {
  const r = e.type, a = (t ? t.appContext : e.appContext) || am, o = {
    uid: om++,
    vnode: e,
    type: r,
    parent: t,
    appContext: a,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Ou(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(a.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: mc(r, a),
    emitsOptions: Zu(r, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Je,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Je,
    data: Je,
    props: Je,
    attrs: Je,
    slots: Je,
    refs: Je,
    setupState: Je,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = sp.bind(null, o), e.ce && e.ce(o), o;
}
let wt = null;
const fl = () => wt || vt;
let Xa, Ss;
{
  const e = Au(), t = (n, r) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(r), (o) => {
      a.length > 1 ? a.forEach((s) => s(o)) : a[0](o);
    };
  };
  Xa = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => wt = n
  ), Ss = t(
    "__VUE_SSR_SETTERS__",
    (n) => Mo = n
  );
}
const ba = (e) => {
  const t = wt;
  return Xa(e), e.scope.on(), () => {
    e.scope.off(), Xa(t);
  };
}, hi = () => {
  wt && wt.scope.off(), Xa(null);
};
function xc(e) {
  return e.vnode.shapeFlag & 4;
}
let Mo = !1;
function lm(e, t = !1) {
  t && Ss(t);
  const { props: n, children: r } = e.vnode, a = xc(e);
  Hp(e, n, a, t), qp(e, r);
  const o = a ? im(e, t) : void 0;
  return t && Ss(!1), o;
}
function im(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = ho(new Proxy(e.ctx, Ep));
  const { setup: r } = n;
  if (r) {
    const a = e.setupContext = r.length > 1 ? Mc(e) : null, o = ba(e);
    Wn();
    const s = Nn(
      r,
      e,
      0,
      [
        e.props,
        a
      ]
    );
    if (hr(), o(), Tu(s)) {
      if (s.then(hi, hi), t)
        return s.then((l) => {
          vi(e, l, t);
        }).catch((l) => {
          vo(l, e, 0);
        });
      e.asyncDep = s;
    } else
      vi(e, s, t);
  } else
    kc(e, t);
}
function vi(e, t, n) {
  Ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Qe(t) && (e.setupState = zu(t)), kc(e, n);
}
let yi;
function kc(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && yi && !r.render) {
      const a = r.template || il(e).template;
      if (a) {
        const { isCustomElement: o, compilerOptions: s } = e.appContext.config, { delimiters: l, compilerOptions: i } = r, c = yt(
          yt(
            {
              isCustomElement: o,
              delimiters: l
            },
            s
          ),
          i
        );
        r.render = yi(a, c);
      }
    }
    e.render = r.render || Yt;
  }
  {
    const a = ba(e);
    Wn();
    try {
      $p(e);
    } finally {
      hr(), a();
    }
  }
}
function um(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, n) {
        return $t(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Mc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return um(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function To(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(zu(ho(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Zr)
          return Zr[n](e);
      },
      has(t, n) {
        return n in t || n in Zr;
      }
    }));
}
function cm(e, t = !0) {
  return Ae(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function dm(e) {
  return Ae(e) && "__vccOpts" in e;
}
const ee = (e, t) => qf(e, t, Mo);
function As(e, t, n = Je) {
  const r = fl(), a = Xt(t), o = Un(t), s = Qf((i, c) => {
    let u;
    return gp(() => {
      const d = e[t];
      pn(u, d) && (u = d, c());
    }), {
      get() {
        return i(), n.get ? n.get(u) : u;
      },
      set(d) {
        const p = r.vnode.props;
        !(p && // check if parent has passed v-model
        (t in p || a in p || o in p) && (`onUpdate:${t}` in p || `onUpdate:${a}` in p || `onUpdate:${o}` in p)) && pn(d, u) && (u = d, c()), r.emit(`update:${t}`, n.set ? n.set(d) : d);
      }
    };
  }), l = t === "modelValue" ? "modelModifiers" : `${t}Modifiers`;
  return s[Symbol.iterator] = () => {
    let i = 0;
    return {
      next() {
        return i < 2 ? { value: i++ ? e[l] || {} : s, done: !1 } : { done: !0 };
      }
    };
  }, s;
}
function Tc(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Qe(t) && !xe(t) ? Ka(t) ? Xe(e, null, [t]) : Xe(e, t) : Xe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ka(n) && (n = [n]), Xe(e, t, n));
}
const fm = "3.4.21";
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const pm = "http://www.w3.org/2000/svg", mm = "http://www.w3.org/1998/Math/MathML", En = typeof document < "u" ? document : null, gi = En && /* @__PURE__ */ En.createElement("template"), hm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const a = t === "svg" ? En.createElementNS(pm, e) : t === "mathml" ? En.createElementNS(mm, e) : En.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (e) => En.createTextNode(e),
  createComment: (e) => En.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => En.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, a, o) {
    const s = n ? n.previousSibling : t.lastChild;
    if (a && (a === o || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === o || !(a = a.nextSibling)); )
        ;
    else {
      gi.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const l = gi.content;
      if (r === "svg" || r === "mathml") {
        const i = l.firstChild;
        for (; i.firstChild; )
          l.appendChild(i.firstChild);
        l.removeChild(i);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, kn = "transition", jr = "animation", fa = Symbol("_vtc"), qn = (e, { slots: t }) => Tc(xp, vm(e), t);
qn.displayName = "Transition";
const Pc = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
qn.props = /* @__PURE__ */ yt(
  {},
  ac,
  Pc
);
const Jn = (e, t = []) => {
  xe(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, bi = (e) => e ? xe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function vm(e) {
  const t = {};
  for (const M in e)
    M in Pc || (t[M] = e[M]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: a,
    enterFromClass: o = `${n}-enter-from`,
    enterActiveClass: s = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: i = o,
    appearActiveClass: c = s,
    appearToClass: u = l,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: b = `${n}-leave-to`
  } = e, g = ym(a), v = g && g[0], T = g && g[1], {
    onBeforeEnter: $,
    onEnter: I,
    onEnterCancelled: y,
    onLeave: P,
    onLeaveCancelled: D,
    onBeforeAppear: B = $,
    onAppear: H = I,
    onAppearCancelled: _ = y
  } = t, O = (M, F, N) => {
    Zn(M, F ? u : l), Zn(M, F ? c : s), N && N();
  }, W = (M, F) => {
    M._isLeaving = !1, Zn(M, d), Zn(M, b), Zn(M, p), F && F();
  }, A = (M) => (F, N) => {
    const w = M ? H : I, k = () => O(F, M, N);
    Jn(w, [F, k]), wi(() => {
      Zn(F, M ? i : o), Mn(F, M ? u : l), bi(w) || _i(F, r, v, k);
    });
  };
  return yt(t, {
    onBeforeEnter(M) {
      Jn($, [M]), Mn(M, o), Mn(M, s);
    },
    onBeforeAppear(M) {
      Jn(B, [M]), Mn(M, i), Mn(M, c);
    },
    onEnter: A(!1),
    onAppear: A(!0),
    onLeave(M, F) {
      M._isLeaving = !0;
      const N = () => W(M, F);
      Mn(M, d), wm(), Mn(M, p), wi(() => {
        M._isLeaving && (Zn(M, d), Mn(M, b), bi(P) || _i(M, r, T, N));
      }), Jn(P, [M, N]);
    },
    onEnterCancelled(M) {
      O(M, !1), Jn(y, [M]);
    },
    onAppearCancelled(M) {
      O(M, !0), Jn(_, [M]);
    },
    onLeaveCancelled(M) {
      W(M), Jn(D, [M]);
    }
  });
}
function ym(e) {
  if (e == null)
    return null;
  if (Qe(e))
    return [qo(e.enter), qo(e.leave)];
  {
    const t = qo(e);
    return [t, t];
  }
}
function qo(e) {
  return mf(e);
}
function Mn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[fa] || (e[fa] = /* @__PURE__ */ new Set())).add(t);
}
function Zn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[fa];
  n && (n.delete(t), n.size || (e[fa] = void 0));
}
function wi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let gm = 0;
function _i(e, t, n, r) {
  const a = e._endId = ++gm, o = () => {
    a === e._endId && r();
  };
  if (n)
    return setTimeout(o, n);
  const { type: s, timeout: l, propCount: i } = bm(e, t);
  if (!s)
    return r();
  const c = s + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(c, p), o();
  }, p = (b) => {
    b.target === e && ++u >= i && d();
  };
  setTimeout(() => {
    u < i && d();
  }, l + 1), e.addEventListener(c, p);
}
function bm(e, t) {
  const n = window.getComputedStyle(e), r = (g) => (n[g] || "").split(", "), a = r(`${kn}Delay`), o = r(`${kn}Duration`), s = xi(a, o), l = r(`${jr}Delay`), i = r(`${jr}Duration`), c = xi(l, i);
  let u = null, d = 0, p = 0;
  t === kn ? s > 0 && (u = kn, d = s, p = o.length) : t === jr ? c > 0 && (u = jr, d = c, p = i.length) : (d = Math.max(s, c), u = d > 0 ? s > c ? kn : jr : null, p = u ? u === kn ? o.length : i.length : 0);
  const b = u === kn && /\b(transform|all)(,|$)/.test(
    r(`${kn}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: p,
    hasTransform: b
  };
}
function xi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => ki(n) + ki(e[r])));
}
function ki(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function wm() {
  return document.body.offsetHeight;
}
function _m(e, t, n) {
  const r = e[fa];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Qa = Symbol("_vod"), Sc = Symbol("_vsh"), Fa = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Qa] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Hr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Hr(e, !0), r.enter(e)) : r.leave(e, () => {
      Hr(e, !1);
    }) : Hr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Hr(e, t);
  }
};
function Hr(e, t) {
  e.style.display = t ? e[Qa] : "none", e[Sc] = !t;
}
const xm = Symbol(""), km = /(^|;)\s*display\s*:/;
function Mm(e, t, n) {
  const r = e.style, a = at(n);
  let o = !1;
  if (n && !a) {
    if (t)
      if (at(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && Ba(r, l, "");
        }
      else
        for (const s in t)
          n[s] == null && Ba(r, s, "");
    for (const s in n)
      s === "display" && (o = !0), Ba(r, s, n[s]);
  } else if (a) {
    if (t !== n) {
      const s = r[xm];
      s && (n += ";" + s), r.cssText = n, o = km.test(n);
    }
  } else t && e.removeAttribute("style");
  Qa in e && (e[Qa] = o ? r.display : "", e[Sc] && (r.display = "none"));
}
const Mi = /\s*!important$/;
function Ba(e, t, n) {
  if (xe(n))
    n.forEach((r) => Ba(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Tm(e, t);
    Mi.test(n) ? e.setProperty(
      Un(r),
      n.replace(Mi, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ti = ["Webkit", "Moz", "ms"], zo = {};
function Tm(e, t) {
  const n = zo[t];
  if (n)
    return n;
  let r = Xt(t);
  if (r !== "filter" && r in e)
    return zo[t] = r;
  r = fo(r);
  for (let a = 0; a < Ti.length; a++) {
    const o = Ti[a] + r;
    if (o in e)
      return zo[t] = o;
  }
  return t;
}
const Pi = "http://www.w3.org/1999/xlink";
function Pm(e, t, n, r, a) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Pi, t.slice(6, t.length)) : e.setAttributeNS(Pi, t, n);
  else {
    const o = wf(t);
    n == null || o && !Cu(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function Sm(e, t, n, r, a, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    r && s(r, a, o), e[t] = n ?? "";
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const c = l === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n ?? "";
    (c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = Cu(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(t);
}
function ar(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Am(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Si = Symbol("_vei");
function Cm(e, t, n, r, a = null) {
  const o = e[Si] || (e[Si] = {}), s = o[t];
  if (r && s)
    s.value = r;
  else {
    const [l, i] = Dm(t);
    if (r) {
      const c = o[t] = Rm(r, a);
      ar(e, l, c, i);
    } else s && (Am(e, l, s, i), o[t] = void 0);
  }
}
const Ai = /(?:Once|Passive|Capture)$/;
function Dm(e) {
  let t;
  if (Ai.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Ai); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Un(e.slice(2)), t];
}
let Go = 0;
const Om = /* @__PURE__ */ Promise.resolve(), Em = () => Go || (Om.then(() => Go = 0), Go = Date.now());
function Rm(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    jt(
      $m(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Em(), n;
}
function $m(e, t) {
  if (xe(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((r) => (a) => !a._stopped && r && r(a));
  } else
    return t;
}
const Ci = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Nm = (e, t, n, r, a, o, s, l, i) => {
  const c = a === "svg";
  t === "class" ? _m(e, r, c) : t === "style" ? Mm(e, n, r) : io(t) ? Ws(t) || Cm(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Vm(e, t, r, c)) ? Sm(
    e,
    t,
    r,
    o,
    s,
    l,
    i
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Pm(e, t, r, c));
};
function Vm(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ci(t) && Ae(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Ci(t) && at(n) ? !1 : t in e;
}
const Ja = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return xe(t) ? (n) => Va(t, n) : t;
};
function Im(e) {
  e.target.composing = !0;
}
function Di(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ar = Symbol("_assign"), Oi = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, a) {
    e[Ar] = Ja(a);
    const o = r || a.props && a.props.type === "number";
    ar(e, t ? "change" : "input", (s) => {
      if (s.target.composing)
        return;
      let l = e.value;
      n && (l = l.trim()), o && (l = la(l)), e[Ar](l);
    }), n && ar(e, "change", () => {
      e.value = e.value.trim();
    }), t || (ar(e, "compositionstart", Im), ar(e, "compositionend", Di), ar(e, "change", Di));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: a } }, o) {
    if (e[Ar] = Ja(o), e.composing)
      return;
    const s = a || e.type === "number" ? la(e.value) : e.value, l = t ?? "";
    s !== l && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === l) || (e.value = l));
  }
}, Ac = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const a = uo(t);
    ar(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (s) => s.selected).map(
        (s) => n ? la(Za(s)) : Za(s)
      );
      e[Ar](
        e.multiple ? a ? new Set(o) : o : o[0]
      ), e._assigning = !0, Qt(() => {
        e._assigning = !1;
      });
    }), e[Ar] = Ja(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, modifiers: { number: n } }) {
    Ei(e, t, n);
  },
  beforeUpdate(e, t, n) {
    e[Ar] = Ja(n);
  },
  updated(e, { value: t, modifiers: { number: n } }) {
    e._assigning || Ei(e, t, n);
  }
};
function Ei(e, t, n) {
  const r = e.multiple, a = xe(t);
  if (!(r && !a && !uo(t))) {
    for (let o = 0, s = e.options.length; o < s; o++) {
      const l = e.options[o], i = Za(l);
      if (r)
        if (a) {
          const c = typeof i;
          c === "string" || c === "number" ? l.selected = t.includes(
            n ? la(i) : i
          ) : l.selected = xf(t, i) > -1;
        } else
          l.selected = t.has(i);
      else if (po(Za(l), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Za(e) {
  return "_value" in e ? e._value : e.value;
}
const Fm = ["ctrl", "shift", "alt", "meta"], Bm = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Fm.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ke = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (a, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const l = Bm[t[s]];
      if (l && l(a, t))
        return;
    }
    return e(a, ...o);
  });
}, Lm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Se = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (a) => {
    if (!("key" in a))
      return;
    const o = Un(a.key);
    if (t.some((s) => s === o || Lm[s] === o))
      return e(a);
  });
}, Ym = /* @__PURE__ */ yt({ patchProp: Nm }, hm);
let Ri;
function Cc() {
  return Ri || (Ri = Gp(Ym));
}
const $i = (...e) => {
  Cc().render(...e);
}, jm = (...e) => {
  const t = Cc().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const a = Um(r);
    if (!a)
      return;
    const o = t._component;
    !Ae(o) && !o.render && !o.template && (o.template = a.innerHTML), a.innerHTML = "";
    const s = n(a, !1, Hm(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
};
function Hm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Um(e) {
  return at(e) ? document.querySelector(e) : e;
}
var Wm = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Dc;
const Po = (e) => Dc = e, Oc = (
  /* istanbul ignore next */
  Symbol()
);
function Cs(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ra;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ra || (ra = {}));
function qm() {
  const e = Eu(!0), t = e.run(() => J({}));
  let n = [], r = [];
  const a = ho({
    install(o) {
      Po(a), a._a = o, o.provide(Oc, a), o.config.globalProperties.$pinia = a, r.forEach((s) => n.push(s)), r = [];
    },
    use(o) {
      return !this._a && !Wm ? r.push(o) : n.push(o), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return a;
}
const Ec = () => {
};
function Ni(e, t, n, r = Ec) {
  e.push(t);
  const a = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), r());
  };
  return !n && Gs() && Ru(a), a;
}
function gr(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const zm = (e) => e();
function Ds(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], a = e[n];
    Cs(a) && Cs(r) && e.hasOwnProperty(n) && !ct(r) && !$n(r) ? e[n] = Ds(a, r) : e[n] = r;
  }
  return e;
}
const Gm = (
  /* istanbul ignore next */
  Symbol()
);
function Km(e) {
  return !Cs(e) || !e.hasOwnProperty(Gm);
}
const { assign: An } = Object;
function Xm(e) {
  return !!(ct(e) && e.effect);
}
function Qm(e, t, n, r) {
  const { state: a, actions: o, getters: s } = t, l = n.state.value[e];
  let i;
  function c() {
    l || (n.state.value[e] = a ? a() : {});
    const u = Jf(n.state.value[e]);
    return An(u, o, Object.keys(s || {}).reduce((d, p) => (d[p] = ho(ee(() => {
      Po(n);
      const b = n._s.get(e);
      return s[p].call(b, b);
    })), d), {}));
  }
  return i = Rc(e, c, t, n, r, !0), i;
}
function Rc(e, t, n = {}, r, a, o) {
  let s;
  const l = An({ actions: {} }, n), i = {
    deep: !0
    // flush: 'post',
  };
  let c, u, d = [], p = [], b;
  const g = r.state.value[e];
  !o && !g && (r.state.value[e] = {}), J({});
  let v;
  function T(_) {
    let O;
    c = u = !1, typeof _ == "function" ? (_(r.state.value[e]), O = {
      type: ra.patchFunction,
      storeId: e,
      events: b
    }) : (Ds(r.state.value[e], _), O = {
      type: ra.patchObject,
      payload: _,
      storeId: e,
      events: b
    });
    const W = v = Symbol();
    Qt().then(() => {
      v === W && (c = !0);
    }), u = !0, gr(d, O, r.state.value[e]);
  }
  const $ = o ? function() {
    const { state: O } = n, W = O ? O() : {};
    this.$patch((A) => {
      An(A, W);
    });
  } : (
    /* istanbul ignore next */
    Ec
  );
  function I() {
    s.stop(), d = [], p = [], r._s.delete(e);
  }
  function y(_, O) {
    return function() {
      Po(r);
      const W = Array.from(arguments), A = [], M = [];
      function F(k) {
        A.push(k);
      }
      function N(k) {
        M.push(k);
      }
      gr(p, {
        args: W,
        name: _,
        store: D,
        after: F,
        onError: N
      });
      let w;
      try {
        w = O.apply(this && this.$id === e ? this : D, W);
      } catch (k) {
        throw gr(M, k), k;
      }
      return w instanceof Promise ? w.then((k) => (gr(A, k), k)).catch((k) => (gr(M, k), Promise.reject(k))) : (gr(A, w), w);
    };
  }
  const P = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Ni.bind(null, p),
    $patch: T,
    $reset: $,
    $subscribe(_, O = {}) {
      const W = Ni(d, _, O.detached, () => A()), A = s.run(() => ut(() => r.state.value[e], (M) => {
        (O.flush === "sync" ? u : c) && _({
          storeId: e,
          type: ra.direct,
          events: b
        }, M);
      }, An({}, i, O)));
      return W;
    },
    $dispose: I
  }, D = bn(P);
  r._s.set(e, D);
  const H = (r._a && r._a.runWithContext || zm)(() => r._e.run(() => (s = Eu()).run(t)));
  for (const _ in H) {
    const O = H[_];
    if (ct(O) && !Xm(O) || $n(O))
      o || (g && Km(O) && (ct(O) ? O.value = g[_] : Ds(O, g[_])), r.state.value[e][_] = O);
    else if (typeof O == "function") {
      const W = y(_, O);
      H[_] = W, l.actions[_] = O;
    }
  }
  return An(D, H), An(Le(D), H), Object.defineProperty(D, "$state", {
    get: () => r.state.value[e],
    set: (_) => {
      T((O) => {
        An(O, _);
      });
    }
  }), r._p.forEach((_) => {
    An(D, s.run(() => _({
      store: D,
      app: r._a,
      pinia: r,
      options: l
    })));
  }), g && o && n.hydrate && n.hydrate(D.$state, g), c = !0, u = !0, D;
}
function Jm(e, t, n) {
  let r, a;
  const o = typeof t == "function";
  r = e, a = o ? n : t;
  function s(l, i) {
    const c = jp();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (c ? ea(Oc, null) : null), l && Po(l), l = Dc, l._s.has(r) || (o ? Rc(r, t, a, l) : Qm(r, a, l)), l._s.get(r);
  }
  return s.$id = r, s;
}
var $c = typeof global == "object" && global && global.Object === Object && global, Zm = typeof self == "object" && self && self.Object === Object && self, pl = $c || Zm || Function("return this")(), eo = pl.Symbol, Nc = Object.prototype, eh = Nc.hasOwnProperty, th = Nc.toString, Ur = eo ? eo.toStringTag : void 0;
function nh(e) {
  var t = eh.call(e, Ur), n = e[Ur];
  try {
    e[Ur] = void 0;
    var r = !0;
  } catch {
  }
  var a = th.call(e);
  return r && (t ? e[Ur] = n : delete e[Ur]), a;
}
var rh = Object.prototype, ah = rh.toString;
function oh(e) {
  return ah.call(e);
}
var sh = "[object Null]", lh = "[object Undefined]", Vi = eo ? eo.toStringTag : void 0;
function ml(e) {
  return e == null ? e === void 0 ? lh : sh : Vi && Vi in Object(e) ? nh(e) : oh(e);
}
function hl(e) {
  return e != null && typeof e == "object";
}
var Vc = Array.isArray;
function vl(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Ic(e) {
  return e;
}
var ih = "[object AsyncFunction]", uh = "[object Function]", ch = "[object GeneratorFunction]", dh = "[object Proxy]";
function Fc(e) {
  if (!vl(e))
    return !1;
  var t = ml(e);
  return t == uh || t == ch || t == ih || t == dh;
}
var Ko = pl["__core-js_shared__"], Ii = function() {
  var e = /[^.]+$/.exec(Ko && Ko.keys && Ko.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function fh(e) {
  return !!Ii && Ii in e;
}
var ph = Function.prototype, mh = ph.toString;
function hh(e) {
  if (e != null) {
    try {
      return mh.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var vh = /[\\^$.*+?()[\]{}|]/g, yh = /^\[object .+?Constructor\]$/, gh = Function.prototype, bh = Object.prototype, wh = gh.toString, _h = bh.hasOwnProperty, xh = RegExp(
  "^" + wh.call(_h).replace(vh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function kh(e) {
  if (!vl(e) || fh(e))
    return !1;
  var t = Fc(e) ? xh : yh;
  return t.test(hh(e));
}
function Mh(e, t) {
  return e == null ? void 0 : e[t];
}
function Th(e, t) {
  var n = Mh(e, t);
  return kh(n) ? n : void 0;
}
function Ph(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var Sh = 800, Ah = 16, Ch = Date.now;
function Dh(e) {
  var t = 0, n = 0;
  return function() {
    var r = Ch(), a = Ah - (r - n);
    if (n = r, a > 0) {
      if (++t >= Sh)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Oh(e) {
  return function() {
    return e;
  };
}
var to = function() {
  try {
    var e = Th(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Eh = to ? function(e, t) {
  return to(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Oh(t),
    writable: !0
  });
} : Ic, Rh = Dh(Eh), $h = 9007199254740991, Nh = /^(?:0|[1-9]\d*)$/;
function Bc(e, t) {
  var n = typeof e;
  return t = t ?? $h, !!t && (n == "number" || n != "symbol" && Nh.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Lc(e, t, n) {
  t == "__proto__" && to ? to(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Yc(e, t) {
  return e === t || e !== e && t !== t;
}
var Vh = Object.prototype, Ih = Vh.hasOwnProperty;
function jc(e, t, n) {
  var r = e[t];
  (!(Ih.call(e, t) && Yc(r, n)) || n === void 0 && !(t in e)) && Lc(e, t, n);
}
function Fh(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, s = t.length; ++o < s; ) {
    var l = t[o], i = void 0;
    i === void 0 && (i = e[l]), a ? Lc(n, l, i) : jc(n, l, i);
  }
  return n;
}
var Fi = Math.max;
function Bh(e, t, n) {
  return t = Fi(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, o = Fi(r.length - t, 0), s = Array(o); ++a < o; )
      s[a] = r[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = r[a];
    return l[t] = n(s), Ph(e, this, l);
  };
}
function Lh(e, t) {
  return Rh(Bh(e, t, Ic), e + "");
}
var Yh = 9007199254740991;
function Hc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Yh;
}
function yl(e) {
  return e != null && Hc(e.length) && !Fc(e);
}
function jh(e, t, n) {
  if (!vl(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? yl(n) && Bc(t, n.length) : r == "string" && t in n) ? Yc(n[t], e) : !1;
}
function Hh(e) {
  return Lh(function(t, n) {
    var r = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, s = a > 2 ? n[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, s && jh(n[0], n[1], s) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++r < a; ) {
      var l = n[r];
      l && e(t, l, r, o);
    }
    return t;
  });
}
var Uh = Object.prototype;
function Uc(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Uh;
  return e === n;
}
function Wh(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var qh = "[object Arguments]";
function Bi(e) {
  return hl(e) && ml(e) == qh;
}
var Wc = Object.prototype, zh = Wc.hasOwnProperty, Gh = Wc.propertyIsEnumerable, Kh = Bi(/* @__PURE__ */ function() {
  return arguments;
}()) ? Bi : function(e) {
  return hl(e) && zh.call(e, "callee") && !Gh.call(e, "callee");
};
function Xh() {
  return !1;
}
var qc = typeof exports == "object" && exports && !exports.nodeType && exports, Li = qc && typeof module == "object" && module && !module.nodeType && module, Qh = Li && Li.exports === qc, Yi = Qh ? pl.Buffer : void 0, Jh = Yi ? Yi.isBuffer : void 0, Zh = Jh || Xh, ev = "[object Arguments]", tv = "[object Array]", nv = "[object Boolean]", rv = "[object Date]", av = "[object Error]", ov = "[object Function]", sv = "[object Map]", lv = "[object Number]", iv = "[object Object]", uv = "[object RegExp]", cv = "[object Set]", dv = "[object String]", fv = "[object WeakMap]", pv = "[object ArrayBuffer]", mv = "[object DataView]", hv = "[object Float32Array]", vv = "[object Float64Array]", yv = "[object Int8Array]", gv = "[object Int16Array]", bv = "[object Int32Array]", wv = "[object Uint8Array]", _v = "[object Uint8ClampedArray]", xv = "[object Uint16Array]", kv = "[object Uint32Array]", tt = {};
tt[hv] = tt[vv] = tt[yv] = tt[gv] = tt[bv] = tt[wv] = tt[_v] = tt[xv] = tt[kv] = !0;
tt[ev] = tt[tv] = tt[pv] = tt[nv] = tt[mv] = tt[rv] = tt[av] = tt[ov] = tt[sv] = tt[lv] = tt[iv] = tt[uv] = tt[cv] = tt[dv] = tt[fv] = !1;
function Mv(e) {
  return hl(e) && Hc(e.length) && !!tt[ml(e)];
}
function Tv(e) {
  return function(t) {
    return e(t);
  };
}
var zc = typeof exports == "object" && exports && !exports.nodeType && exports, aa = zc && typeof module == "object" && module && !module.nodeType && module, Pv = aa && aa.exports === zc, Xo = Pv && $c.process, ji = function() {
  try {
    var e = aa && aa.require && aa.require("util").types;
    return e || Xo && Xo.binding && Xo.binding("util");
  } catch {
  }
}(), Hi = ji && ji.isTypedArray, Sv = Hi ? Tv(Hi) : Mv, Av = Object.prototype, Cv = Av.hasOwnProperty;
function Dv(e, t) {
  var n = Vc(e), r = !n && Kh(e), a = !n && !r && Zh(e), o = !n && !r && !a && Sv(e), s = n || r || a || o, l = s ? Wh(e.length, String) : [], i = l.length;
  for (var c in e)
    Cv.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Bc(c, i))) && l.push(c);
  return l;
}
function Ov(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Ev = Ov(Object.keys, Object), Rv = Object.prototype, $v = Rv.hasOwnProperty;
function Nv(e) {
  if (!Uc(e))
    return Ev(e);
  var t = [];
  for (var n in Object(e))
    $v.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Vv(e) {
  return yl(e) ? Dv(e) : Nv(e);
}
var Iv = Object.prototype, Fv = Iv.hasOwnProperty, Bv = Hh(function(e, t) {
  if (Uc(t) || yl(t)) {
    Fh(t, Vv(t), e);
    return;
  }
  for (var n in t)
    Fv.call(t, n) && jc(e, n, t[n]);
});
const no = "Value", Dr = "ValueString", cr = "ValueFloat", Or = "ValueDate", Er = "ValueFilePath", Yn = "Mode", jn = "SubSystem", pa = "Command", Os = [
  no,
  Dr,
  cr,
  Or,
  Er
];
class Xr {
  constructor(t) {
    Bv(this, t);
  }
  getDestinations(t) {
    const n = Vc(t) ? t : [t];
    return this.destinations.reduce((a, o) => (n.includes(o.type) && a.push(o), a), []);
  }
  getValues() {
    return this.hasValues ? this.getDestinations(Os) : [];
  }
  getModes() {
    return this.hasModes ? this.getDestinations(Yn) : [];
  }
  getSubsystems() {
    return this.getDestinations(jn);
  }
  getValidModes() {
    return this.validModes == null && (this.validModes = []), this.validModes;
  }
  getActiveSubnodes() {
    let t = [];
    return this.subsystemsNodes.forEach((r) => {
      r.getValidModes().length > 0 && t.push(r);
    }), t;
  }
}
function Gc(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Lv } = Object.prototype, { getPrototypeOf: gl } = Object, So = /* @__PURE__ */ ((e) => (t) => {
  const n = Lv.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Zt = (e) => (e = e.toLowerCase(), (t) => So(t) === e), Ao = (e) => (t) => typeof t === e, { isArray: Br } = Array, ma = Ao("undefined");
function Yv(e) {
  return e !== null && !ma(e) && e.constructor !== null && !ma(e.constructor) && It(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Kc = Zt("ArrayBuffer");
function jv(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Kc(e.buffer), t;
}
const Hv = Ao("string"), It = Ao("function"), Xc = Ao("number"), Co = (e) => e !== null && typeof e == "object", Uv = (e) => e === !0 || e === !1, La = (e) => {
  if (So(e) !== "object")
    return !1;
  const t = gl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Wv = Zt("Date"), qv = Zt("File"), zv = Zt("Blob"), Gv = Zt("FileList"), Kv = (e) => Co(e) && It(e.pipe), Xv = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || It(e.append) && ((t = So(e)) === "formdata" || // detect form-data instance
  t === "object" && It(e.toString) && e.toString() === "[object FormData]"));
}, Qv = Zt("URLSearchParams"), [Jv, Zv, ey, ty] = ["ReadableStream", "Request", "Response", "Headers"].map(Zt), ny = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function wa(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), Br(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = o.length;
    let l;
    for (r = 0; r < s; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function Qc(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const sr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Jc = (e) => !ma(e) && e !== sr;
function Es() {
  const { caseless: e } = Jc(this) && this || {}, t = {}, n = (r, a) => {
    const o = e && Qc(t, a) || a;
    La(t[o]) && La(r) ? t[o] = Es(t[o], r) : La(r) ? t[o] = Es({}, r) : Br(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && wa(arguments[r], n);
  return t;
}
const ry = (e, t, n, { allOwnKeys: r } = {}) => (wa(t, (a, o) => {
  n && It(a) ? e[o] = Gc(a, n) : e[o] = a;
}, { allOwnKeys: r }), e), ay = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), oy = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, sy = (e, t, n, r) => {
  let a, o, s;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
      s = a[o], (!r || r(s, e, t)) && !l[s] && (t[s] = e[s], l[s] = !0);
    e = n !== !1 && gl(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ly = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, iy = (e) => {
  if (!e) return null;
  if (Br(e)) return e;
  let t = e.length;
  if (!Xc(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, uy = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && gl(Uint8Array)), cy = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const o = a.value;
    t.call(e, o[0], o[1]);
  }
}, dy = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, fy = Zt("HTMLFormElement"), py = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), Ui = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), my = Zt("RegExp"), Zc = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  wa(n, (a, o) => {
    let s;
    (s = t(a, o, e)) !== !1 && (r[o] = s || a);
  }), Object.defineProperties(e, r);
}, hy = (e) => {
  Zc(e, (t, n) => {
    if (It(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (It(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, vy = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((o) => {
      n[o] = !0;
    });
  };
  return Br(e) ? r(e) : r(String(e).split(t)), n;
}, yy = () => {
}, gy = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Qo = "abcdefghijklmnopqrstuvwxyz", Wi = "0123456789", ed = {
  DIGIT: Wi,
  ALPHA: Qo,
  ALPHA_DIGIT: Qo + Qo.toUpperCase() + Wi
}, by = (e = 16, t = ed.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function wy(e) {
  return !!(e && It(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const _y = (e) => {
  const t = new Array(10), n = (r, a) => {
    if (Co(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[a] = r;
        const o = Br(r) ? [] : {};
        return wa(r, (s, l) => {
          const i = n(s, a + 1);
          !ma(i) && (o[l] = i);
        }), t[a] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, xy = Zt("AsyncFunction"), ky = (e) => e && (Co(e) || It(e)) && It(e.then) && It(e.catch), td = ((e, t) => e ? setImmediate : t ? ((n, r) => (sr.addEventListener("message", ({ source: a, data: o }) => {
  a === sr && o === n && r.length && r.shift()();
}, !1), (a) => {
  r.push(a), sr.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  It(sr.postMessage)
), My = typeof queueMicrotask < "u" ? queueMicrotask.bind(sr) : typeof process < "u" && process.nextTick || td, z = {
  isArray: Br,
  isArrayBuffer: Kc,
  isBuffer: Yv,
  isFormData: Xv,
  isArrayBufferView: jv,
  isString: Hv,
  isNumber: Xc,
  isBoolean: Uv,
  isObject: Co,
  isPlainObject: La,
  isReadableStream: Jv,
  isRequest: Zv,
  isResponse: ey,
  isHeaders: ty,
  isUndefined: ma,
  isDate: Wv,
  isFile: qv,
  isBlob: zv,
  isRegExp: my,
  isFunction: It,
  isStream: Kv,
  isURLSearchParams: Qv,
  isTypedArray: uy,
  isFileList: Gv,
  forEach: wa,
  merge: Es,
  extend: ry,
  trim: ny,
  stripBOM: ay,
  inherits: oy,
  toFlatObject: sy,
  kindOf: So,
  kindOfTest: Zt,
  endsWith: ly,
  toArray: iy,
  forEachEntry: cy,
  matchAll: dy,
  isHTMLForm: fy,
  hasOwnProperty: Ui,
  hasOwnProp: Ui,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Zc,
  freezeMethods: hy,
  toObjectSet: vy,
  toCamelCase: py,
  noop: yy,
  toFiniteNumber: gy,
  findKey: Qc,
  global: sr,
  isContextDefined: Jc,
  ALPHABET: ed,
  generateString: by,
  isSpecCompliantForm: wy,
  toJSONObject: _y,
  isAsyncFn: xy,
  isThenable: ky,
  setImmediate: td,
  asap: My
};
function Ce(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a, this.status = a.status ? a.status : null);
}
z.inherits(Ce, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: z.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const nd = Ce.prototype, rd = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  rd[e] = { value: e };
});
Object.defineProperties(Ce, rd);
Object.defineProperty(nd, "isAxiosError", { value: !0 });
Ce.from = (e, t, n, r, a, o) => {
  const s = Object.create(nd);
  return z.toFlatObject(e, s, function(i) {
    return i !== Error.prototype;
  }, (l) => l !== "isAxiosError"), Ce.call(s, e.message, t, n, r, a), s.cause = e, s.name = e.name, o && Object.assign(s, o), s;
};
const Ty = null;
function Rs(e) {
  return z.isPlainObject(e) || z.isArray(e);
}
function ad(e) {
  return z.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function qi(e, t, n) {
  return e ? e.concat(t).map(function(a, o) {
    return a = ad(a), !n && o ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function Py(e) {
  return z.isArray(e) && !e.some(Rs);
}
const Sy = z.toFlatObject(z, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Do(e, t, n) {
  if (!z.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = z.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, T) {
    return !z.isUndefined(T[v]);
  });
  const r = n.metaTokens, a = n.visitor || u, o = n.dots, s = n.indexes, i = (n.Blob || typeof Blob < "u" && Blob) && z.isSpecCompliantForm(t);
  if (!z.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(g) {
    if (g === null) return "";
    if (z.isDate(g))
      return g.toISOString();
    if (!i && z.isBlob(g))
      throw new Ce("Blob is not supported. Use a Buffer instead.");
    return z.isArrayBuffer(g) || z.isTypedArray(g) ? i && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, v, T) {
    let $ = g;
    if (g && !T && typeof g == "object") {
      if (z.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), g = JSON.stringify(g);
      else if (z.isArray(g) && Py(g) || (z.isFileList(g) || z.endsWith(v, "[]")) && ($ = z.toArray(g)))
        return v = ad(v), $.forEach(function(y, P) {
          !(z.isUndefined(y) || y === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? qi([v], P, o) : s === null ? v : v + "[]",
            c(y)
          );
        }), !1;
    }
    return Rs(g) ? !0 : (t.append(qi(T, v, o), c(g)), !1);
  }
  const d = [], p = Object.assign(Sy, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Rs
  });
  function b(g, v) {
    if (!z.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(g), z.forEach(g, function($, I) {
        (!(z.isUndefined($) || $ === null) && a.call(
          t,
          $,
          z.isString(I) ? I.trim() : I,
          v,
          p
        )) === !0 && b($, v ? v.concat(I) : [I]);
      }), d.pop();
    }
  }
  if (!z.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function zi(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function bl(e, t) {
  this._pairs = [], e && Do(e, this, t);
}
const od = bl.prototype;
od.append = function(t, n) {
  this._pairs.push([t, n]);
};
od.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, zi);
  } : zi;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function Ay(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function sd(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Ay, a = n && n.serialize;
  let o;
  if (a ? o = a(t, n) : o = z.isURLSearchParams(t) ? t.toString() : new bl(t, n).toString(r), o) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Gi {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    z.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const ld = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Cy = typeof URLSearchParams < "u" ? URLSearchParams : bl, Dy = typeof FormData < "u" ? FormData : null, Oy = typeof Blob < "u" ? Blob : null, Ey = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Cy,
    FormData: Dy,
    Blob: Oy
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, wl = typeof window < "u" && typeof document < "u", $s = typeof navigator == "object" && navigator || void 0, Ry = wl && (!$s || ["ReactNative", "NativeScript", "NS"].indexOf($s.product) < 0), $y = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ny = wl && window.location.href || "http://localhost", Vy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: wl,
  hasStandardBrowserEnv: Ry,
  hasStandardBrowserWebWorkerEnv: $y,
  navigator: $s,
  origin: Ny
}, Symbol.toStringTag, { value: "Module" })), Et = {
  ...Vy,
  ...Ey
};
function Iy(e, t) {
  return Do(e, new Et.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, o) {
      return Et.isNode && z.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Fy(e) {
  return z.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function By(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let o;
  for (r = 0; r < a; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function id(e) {
  function t(n, r, a, o) {
    let s = n[o++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s), i = o >= n.length;
    return s = !s && z.isArray(a) ? a.length : s, i ? (z.hasOwnProp(a, s) ? a[s] = [a[s], r] : a[s] = r, !l) : ((!a[s] || !z.isObject(a[s])) && (a[s] = []), t(n, r, a[s], o) && z.isArray(a[s]) && (a[s] = By(a[s])), !l);
  }
  if (z.isFormData(e) && z.isFunction(e.entries)) {
    const n = {};
    return z.forEachEntry(e, (r, a) => {
      t(Fy(r), a, n, 0);
    }), n;
  }
  return null;
}
function Ly(e, t, n) {
  if (z.isString(e))
    try {
      return (t || JSON.parse)(e), z.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const _a = {
  transitional: ld,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, o = z.isObject(t);
    if (o && z.isHTMLForm(t) && (t = new FormData(t)), z.isFormData(t))
      return a ? JSON.stringify(id(t)) : t;
    if (z.isArrayBuffer(t) || z.isBuffer(t) || z.isStream(t) || z.isFile(t) || z.isBlob(t) || z.isReadableStream(t))
      return t;
    if (z.isArrayBufferView(t))
      return t.buffer;
    if (z.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Iy(t, this.formSerializer).toString();
      if ((l = z.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const i = this.env && this.env.FormData;
        return Do(
          l ? { "files[]": t } : t,
          i && new i(),
          this.formSerializer
        );
      }
    }
    return o || a ? (n.setContentType("application/json", !1), Ly(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || _a.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (z.isResponse(t) || z.isReadableStream(t))
      return t;
    if (t && z.isString(t) && (r && !this.responseType || a)) {
      const s = !(n && n.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (l) {
        if (s)
          throw l.name === "SyntaxError" ? Ce.from(l, Ce.ERR_BAD_RESPONSE, this, null, this.response) : l;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Et.classes.FormData,
    Blob: Et.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
z.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  _a.headers[e] = {};
});
const Yy = z.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), jy = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(s) {
    a = s.indexOf(":"), n = s.substring(0, a).trim().toLowerCase(), r = s.substring(a + 1).trim(), !(!n || t[n] && Yy[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Ki = Symbol("internals");
function Wr(e) {
  return e && String(e).trim().toLowerCase();
}
function Ya(e) {
  return e === !1 || e == null ? e : z.isArray(e) ? e.map(Ya) : String(e);
}
function Hy(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Uy = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Jo(e, t, n, r, a) {
  if (z.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!z.isString(t)) {
    if (z.isString(r))
      return t.indexOf(r) !== -1;
    if (z.isRegExp(r))
      return r.test(t);
  }
}
function Wy(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function qy(e, t) {
  const n = z.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(a, o, s) {
        return this[r].call(this, t, a, o, s);
      },
      configurable: !0
    });
  });
}
class Rt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function o(l, i, c) {
      const u = Wr(i);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = z.findKey(a, u);
      (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[d || i] = Ya(l));
    }
    const s = (l, i) => z.forEach(l, (c, u) => o(c, u, i));
    if (z.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (z.isString(t) && (t = t.trim()) && !Uy(t))
      s(jy(t), n);
    else if (z.isHeaders(t))
      for (const [l, i] of t.entries())
        o(i, l, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Wr(t), t) {
      const r = z.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return Hy(a);
        if (z.isFunction(n))
          return n.call(this, a, r);
        if (z.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Wr(t), t) {
      const r = z.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Jo(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function o(s) {
      if (s = Wr(s), s) {
        const l = z.findKey(r, s);
        l && (!n || Jo(r, r[l], l, n)) && (delete r[l], a = !0);
      }
    }
    return z.isArray(t) ? t.forEach(o) : o(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Jo(this, this[o], o, t, !0)) && (delete this[o], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return z.forEach(this, (a, o) => {
      const s = z.findKey(r, o);
      if (s) {
        n[s] = Ya(a), delete n[o];
        return;
      }
      const l = t ? Wy(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Ya(a), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return z.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && z.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((a) => r.set(a)), r;
  }
  static accessor(t) {
    const r = (this[Ki] = this[Ki] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function o(s) {
      const l = Wr(s);
      r[l] || (qy(a, s), r[l] = !0);
    }
    return z.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Rt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
z.reduceDescriptors(Rt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
z.freezeMethods(Rt);
function Zo(e, t) {
  const n = this || _a, r = t || n, a = Rt.from(r.headers);
  let o = r.data;
  return z.forEach(e, function(l) {
    o = l.call(n, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function ud(e) {
  return !!(e && e.__CANCEL__);
}
function Lr(e, t, n) {
  Ce.call(this, e ?? "canceled", Ce.ERR_CANCELED, t, n), this.name = "CanceledError";
}
z.inherits(Lr, Ce, {
  __CANCEL__: !0
});
function cd(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Ce(
    "Request failed with status code " + n.status,
    [Ce.ERR_BAD_REQUEST, Ce.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function zy(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Gy(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, o = 0, s;
  return t = t !== void 0 ? t : 1e3, function(i) {
    const c = Date.now(), u = r[o];
    s || (s = c), n[a] = i, r[a] = c;
    let d = o, p = 0;
    for (; d !== a; )
      p += n[d++], d = d % e;
    if (a = (a + 1) % e, a === o && (o = (o + 1) % e), c - s < t)
      return;
    const b = u && c - u;
    return b ? Math.round(p * 1e3 / b) : void 0;
  };
}
function Ky(e, t) {
  let n = 0, r = 1e3 / t, a, o;
  const s = (c, u = Date.now()) => {
    n = u, a = null, o && (clearTimeout(o), o = null), e.apply(null, c);
  };
  return [(...c) => {
    const u = Date.now(), d = u - n;
    d >= r ? s(c, u) : (a = c, o || (o = setTimeout(() => {
      o = null, s(a);
    }, r - d)));
  }, () => a && s(a)];
}
const ro = (e, t, n = 3) => {
  let r = 0;
  const a = Gy(50, 250);
  return Ky((o) => {
    const s = o.loaded, l = o.lengthComputable ? o.total : void 0, i = s - r, c = a(i), u = s <= l;
    r = s;
    const d = {
      loaded: s,
      total: l,
      progress: l ? s / l : void 0,
      bytes: i,
      rate: c || void 0,
      estimated: c && l && u ? (l - s) / c : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, Xi = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Qi = (e) => (...t) => z.asap(() => e(...t)), Xy = Et.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = Et.navigator && /(msie|trident)/i.test(Et.navigator.userAgent), n = document.createElement("a");
    let r;
    function a(o) {
      let s = o;
      return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = a(window.location.href), function(s) {
      const l = z.isString(s) ? a(s) : s;
      return l.protocol === r.protocol && l.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Qy = Et.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, a, o) {
      const s = [e + "=" + encodeURIComponent(t)];
      z.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), z.isString(r) && s.push("path=" + r), z.isString(a) && s.push("domain=" + a), o === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Jy(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Zy(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function dd(e, t) {
  return e && !Jy(t) ? Zy(e, t) : t;
}
const Ji = (e) => e instanceof Rt ? { ...e } : e;
function mr(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d) {
    return z.isPlainObject(c) && z.isPlainObject(u) ? z.merge.call({ caseless: d }, c, u) : z.isPlainObject(u) ? z.merge({}, u) : z.isArray(u) ? u.slice() : u;
  }
  function a(c, u, d) {
    if (z.isUndefined(u)) {
      if (!z.isUndefined(c))
        return r(void 0, c, d);
    } else return r(c, u, d);
  }
  function o(c, u) {
    if (!z.isUndefined(u))
      return r(void 0, u);
  }
  function s(c, u) {
    if (z.isUndefined(u)) {
      if (!z.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, u);
  }
  function l(c, u, d) {
    if (d in t)
      return r(c, u);
    if (d in e)
      return r(void 0, c);
  }
  const i = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (c, u) => a(Ji(c), Ji(u), !0)
  };
  return z.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = i[u] || a, p = d(e[u], t[u], u);
    z.isUndefined(p) && d !== l || (n[u] = p);
  }), n;
}
const fd = (e) => {
  const t = mr({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: a, xsrfCookieName: o, headers: s, auth: l } = t;
  t.headers = s = Rt.from(s), t.url = sd(dd(t.baseURL, t.url), e.params, e.paramsSerializer), l && s.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let i;
  if (z.isFormData(n)) {
    if (Et.hasStandardBrowserEnv || Et.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((i = s.getContentType()) !== !1) {
      const [c, ...u] = i ? i.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Et.hasStandardBrowserEnv && (r && z.isFunction(r) && (r = r(t)), r || r !== !1 && Xy(t.url))) {
    const c = a && o && Qy.read(o);
    c && s.set(a, c);
  }
  return t;
}, eg = typeof XMLHttpRequest < "u", tg = eg && function(e) {
  return new Promise(function(n, r) {
    const a = fd(e);
    let o = a.data;
    const s = Rt.from(a.headers).normalize();
    let { responseType: l, onUploadProgress: i, onDownloadProgress: c } = a, u, d, p, b, g;
    function v() {
      b && b(), g && g(), a.cancelToken && a.cancelToken.unsubscribe(u), a.signal && a.signal.removeEventListener("abort", u);
    }
    let T = new XMLHttpRequest();
    T.open(a.method.toUpperCase(), a.url, !0), T.timeout = a.timeout;
    function $() {
      if (!T)
        return;
      const y = Rt.from(
        "getAllResponseHeaders" in T && T.getAllResponseHeaders()
      ), D = {
        data: !l || l === "text" || l === "json" ? T.responseText : T.response,
        status: T.status,
        statusText: T.statusText,
        headers: y,
        config: e,
        request: T
      };
      cd(function(H) {
        n(H), v();
      }, function(H) {
        r(H), v();
      }, D), T = null;
    }
    "onloadend" in T ? T.onloadend = $ : T.onreadystatechange = function() {
      !T || T.readyState !== 4 || T.status === 0 && !(T.responseURL && T.responseURL.indexOf("file:") === 0) || setTimeout($);
    }, T.onabort = function() {
      T && (r(new Ce("Request aborted", Ce.ECONNABORTED, e, T)), T = null);
    }, T.onerror = function() {
      r(new Ce("Network Error", Ce.ERR_NETWORK, e, T)), T = null;
    }, T.ontimeout = function() {
      let P = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const D = a.transitional || ld;
      a.timeoutErrorMessage && (P = a.timeoutErrorMessage), r(new Ce(
        P,
        D.clarifyTimeoutError ? Ce.ETIMEDOUT : Ce.ECONNABORTED,
        e,
        T
      )), T = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in T && z.forEach(s.toJSON(), function(P, D) {
      T.setRequestHeader(D, P);
    }), z.isUndefined(a.withCredentials) || (T.withCredentials = !!a.withCredentials), l && l !== "json" && (T.responseType = a.responseType), c && ([p, g] = ro(c, !0), T.addEventListener("progress", p)), i && T.upload && ([d, b] = ro(i), T.upload.addEventListener("progress", d), T.upload.addEventListener("loadend", b)), (a.cancelToken || a.signal) && (u = (y) => {
      T && (r(!y || y.type ? new Lr(null, e, T) : y), T.abort(), T = null);
    }, a.cancelToken && a.cancelToken.subscribe(u), a.signal && (a.signal.aborted ? u() : a.signal.addEventListener("abort", u)));
    const I = zy(a.url);
    if (I && Et.protocols.indexOf(I) === -1) {
      r(new Ce("Unsupported protocol " + I + ":", Ce.ERR_BAD_REQUEST, e));
      return;
    }
    T.send(o || null);
  });
}, ng = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), a;
    const o = function(c) {
      if (!a) {
        a = !0, l();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof Ce ? u : new Lr(u instanceof Error ? u.message : u));
      }
    };
    let s = t && setTimeout(() => {
      s = null, o(new Ce(`timeout ${t} of ms exceeded`, Ce.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(o) : c.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", o));
    const { signal: i } = r;
    return i.unsubscribe = () => z.asap(l), i;
  }
}, rg = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, a;
  for (; r < n; )
    a = r + t, yield e.slice(r, a), r = a;
}, ag = async function* (e, t) {
  for await (const n of og(e))
    yield* rg(n, t);
}, og = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const t = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n)
        break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, Zi = (e, t, n, r) => {
  const a = ag(e, t);
  let o = 0, s, l = (i) => {
    s || (s = !0, r && r(i));
  };
  return new ReadableStream({
    async pull(i) {
      try {
        const { done: c, value: u } = await a.next();
        if (c) {
          l(), i.close();
          return;
        }
        let d = u.byteLength;
        if (n) {
          let p = o += d;
          n(p);
        }
        i.enqueue(new Uint8Array(u));
      } catch (c) {
        throw l(c), c;
      }
    },
    cancel(i) {
      return l(i), a.return();
    }
  }, {
    highWaterMark: 2
  });
}, Oo = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", pd = Oo && typeof ReadableStream == "function", sg = Oo && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), md = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, lg = pd && md(() => {
  let e = !1;
  const t = new Request(Et.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), eu = 64 * 1024, Ns = pd && md(() => z.isReadableStream(new Response("").body)), ao = {
  stream: Ns && ((e) => e.body)
};
Oo && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ao[t] && (ao[t] = z.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new Ce(`Response type '${t}' is not supported`, Ce.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const ig = async (e) => {
  if (e == null)
    return 0;
  if (z.isBlob(e))
    return e.size;
  if (z.isSpecCompliantForm(e))
    return (await new Request(Et.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (z.isArrayBufferView(e) || z.isArrayBuffer(e))
    return e.byteLength;
  if (z.isURLSearchParams(e) && (e = e + ""), z.isString(e))
    return (await sg(e)).byteLength;
}, ug = async (e, t) => {
  const n = z.toFiniteNumber(e.getContentLength());
  return n ?? ig(t);
}, cg = Oo && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: a,
    cancelToken: o,
    timeout: s,
    onDownloadProgress: l,
    onUploadProgress: i,
    responseType: c,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: p
  } = fd(e);
  c = c ? (c + "").toLowerCase() : "text";
  let b = ng([a, o && o.toAbortSignal()], s), g;
  const v = b && b.unsubscribe && (() => {
    b.unsubscribe();
  });
  let T;
  try {
    if (i && lg && n !== "get" && n !== "head" && (T = await ug(u, r)) !== 0) {
      let D = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), B;
      if (z.isFormData(r) && (B = D.headers.get("content-type")) && u.setContentType(B), D.body) {
        const [H, _] = Xi(
          T,
          ro(Qi(i))
        );
        r = Zi(D.body, eu, H, _);
      }
    }
    z.isString(d) || (d = d ? "include" : "omit");
    const $ = "credentials" in Request.prototype;
    g = new Request(t, {
      ...p,
      signal: b,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: $ ? d : void 0
    });
    let I = await fetch(g);
    const y = Ns && (c === "stream" || c === "response");
    if (Ns && (l || y && v)) {
      const D = {};
      ["status", "statusText", "headers"].forEach((O) => {
        D[O] = I[O];
      });
      const B = z.toFiniteNumber(I.headers.get("content-length")), [H, _] = l && Xi(
        B,
        ro(Qi(l), !0)
      ) || [];
      I = new Response(
        Zi(I.body, eu, H, () => {
          _ && _(), v && v();
        }),
        D
      );
    }
    c = c || "text";
    let P = await ao[z.findKey(ao, c) || "text"](I, e);
    return !y && v && v(), await new Promise((D, B) => {
      cd(D, B, {
        data: P,
        headers: Rt.from(I.headers),
        status: I.status,
        statusText: I.statusText,
        config: e,
        request: g
      });
    });
  } catch ($) {
    throw v && v(), $ && $.name === "TypeError" && /fetch/i.test($.message) ? Object.assign(
      new Ce("Network Error", Ce.ERR_NETWORK, e, g),
      {
        cause: $.cause || $
      }
    ) : Ce.from($, $ && $.code, e, g);
  }
}), Vs = {
  http: Ty,
  xhr: tg,
  fetch: cg
};
z.forEach(Vs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const tu = (e) => `- ${e}`, dg = (e) => z.isFunction(e) || e === null || e === !1, hd = {
  getAdapter: (e) => {
    e = z.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let s;
      if (r = n, !dg(n) && (r = Vs[(s = String(n)).toLowerCase()], r === void 0))
        throw new Ce(`Unknown adapter '${s}'`);
      if (r)
        break;
      a[s || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(a).map(
        ([l, i]) => `adapter ${l} ` + (i === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? o.length > 1 ? `since :
` + o.map(tu).join(`
`) : " " + tu(o[0]) : "as no adapter specified";
      throw new Ce(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Vs
};
function es(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Lr(null, e);
}
function nu(e) {
  return es(e), e.headers = Rt.from(e.headers), e.data = Zo.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), hd.getAdapter(e.adapter || _a.adapter)(e).then(function(r) {
    return es(e), r.data = Zo.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Rt.from(r.headers), r;
  }, function(r) {
    return ud(r) || (es(e), r && r.response && (r.response.data = Zo.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Rt.from(r.response.headers))), Promise.reject(r);
  });
}
const vd = "1.7.7", _l = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  _l[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ru = {};
_l.transitional = function(t, n, r) {
  function a(o, s) {
    return "[Axios v" + vd + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return (o, s, l) => {
    if (t === !1)
      throw new Ce(
        a(s, " has been removed" + (n ? " in " + n : "")),
        Ce.ERR_DEPRECATED
      );
    return n && !ru[s] && (ru[s] = !0, console.warn(
      a(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, s, l) : !0;
  };
};
function fg(e, t, n) {
  if (typeof e != "object")
    throw new Ce("options must be an object", Ce.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const o = r[a], s = t[o];
    if (s) {
      const l = e[o], i = l === void 0 || s(l, o, e);
      if (i !== !0)
        throw new Ce("option " + o + " must be " + i, Ce.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Ce("Unknown option " + o, Ce.ERR_BAD_OPTION);
  }
}
const Is = {
  assertOptions: fg,
  validators: _l
}, Tn = Is.validators;
class dr {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Gi(),
      response: new Gi()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let a;
        Error.captureStackTrace ? Error.captureStackTrace(a = {}) : a = new Error();
        const o = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = mr(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: o } = n;
    r !== void 0 && Is.assertOptions(r, {
      silentJSONParsing: Tn.transitional(Tn.boolean),
      forcedJSONParsing: Tn.transitional(Tn.boolean),
      clarifyTimeoutError: Tn.transitional(Tn.boolean)
    }, !1), a != null && (z.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : Is.assertOptions(a, {
      encode: Tn.function,
      serialize: Tn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = o && z.merge(
      o.common,
      o[n.method]
    );
    o && z.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete o[g];
      }
    ), n.headers = Rt.concat(s, o);
    const l = [];
    let i = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(n) === !1 || (i = i && v.synchronous, l.unshift(v.fulfilled, v.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(v) {
      c.push(v.fulfilled, v.rejected);
    });
    let u, d = 0, p;
    if (!i) {
      const g = [nu.bind(this), void 0];
      for (g.unshift.apply(g, l), g.push.apply(g, c), p = g.length, u = Promise.resolve(n); d < p; )
        u = u.then(g[d++], g[d++]);
      return u;
    }
    p = l.length;
    let b = n;
    for (d = 0; d < p; ) {
      const g = l[d++], v = l[d++];
      try {
        b = g(b);
      } catch (T) {
        v.call(this, T);
        break;
      }
    }
    try {
      u = nu.call(this, b);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, p = c.length; d < p; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = mr(this.defaults, t);
    const n = dd(t.baseURL, t.url);
    return sd(n, t.params, t.paramsSerializer);
  }
}
z.forEach(["delete", "get", "head", "options"], function(t) {
  dr.prototype[t] = function(n, r) {
    return this.request(mr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
z.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, s, l) {
      return this.request(mr(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  dr.prototype[t] = n(), dr.prototype[t + "Form"] = n(!0);
});
class xl {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let o;
      const s = new Promise((l) => {
        r.subscribe(l), o = l;
      }).then(a);
      return s.cancel = function() {
        r.unsubscribe(o);
      }, s;
    }, t(function(o, s, l) {
      r.reason || (r.reason = new Lr(o, s, l), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new xl(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
function pg(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function mg(e) {
  return z.isObject(e) && e.isAxiosError === !0;
}
const Fs = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Fs).forEach(([e, t]) => {
  Fs[t] = e;
});
function yd(e) {
  const t = new dr(e), n = Gc(dr.prototype.request, t);
  return z.extend(n, dr.prototype, t, { allOwnKeys: !0 }), z.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return yd(mr(e, a));
  }, n;
}
const ot = yd(_a);
ot.Axios = dr;
ot.CanceledError = Lr;
ot.CancelToken = xl;
ot.isCancel = ud;
ot.VERSION = vd;
ot.toFormData = Do;
ot.AxiosError = Ce;
ot.Cancel = ot.CanceledError;
ot.all = function(t) {
  return Promise.all(t);
};
ot.spread = pg;
ot.isAxiosError = mg;
ot.mergeConfig = mr;
ot.AxiosHeaders = Rt;
ot.formToJSON = (e) => id(z.isHTMLForm(e) ? new FormData(e) : e);
ot.getAdapter = hd.getAdapter;
ot.HttpStatusCode = Fs;
ot.default = ot;
function au(e) {
  return ot.get(e, { withCredentials: !0 }).then((t) => t.data);
}
const gd = {
  Value: no,
  ValueString: Dr,
  ValueDoubleRange: cr,
  ValueDateRange: Or,
  ValueFilePath: Er,
  Mode: Yn,
  SubSystem: jn,
  Command: pa,
  PORISValue: no,
  PORISValueString: Dr,
  PORISValueFloat: cr,
  PORISValueDoubleRange: cr,
  PORISValueDate: Or,
  PORISValueFilePath: Er,
  PORISMode: Yn,
  PORISNode: jn,
  PORISCmd: pa
}, hg = [
  "value",
  "value-string",
  "value-double-range",
  "value-date",
  "value-file-path"
], vg = "mode", yg = "sub-system", gg = "command";
function nt(e, t) {
  const n = e.getElementsByTagName(t);
  if (n.length > 0 && n[0].childNodes.length > 0) {
    const r = n[0].getAttribute("type");
    return r === "integer" ? parseInt(n[0].childNodes[0].nodeValue, 10) : r === "float" ? parseFloat(n[0].childNodes[0].nodeValue) : r === "timestamp" ? Date.parse(n[0].childNodes[0].nodeValue) : n[0].childNodes[0].nodeValue;
  } else
    return null;
}
function bg(e, t) {
  const n = e.getElementsByTagName("destinations"), r = [];
  if (n.length > 0) {
    const a = e.getElementsByTagName("destination");
    if (a.length > 0)
      for (const o of a) {
        const s = gd[o.getAttribute("type")], l = nt(o, "id");
        s && s != pa && (s == jn && (t.find((i) => {
        }) || t.push(l)), r.push({ type: s, id: l }));
      }
  }
  return r.length > 0 ? r : null;
}
function wg(e) {
  const t = e.getElementsByTagName("commands");
  return t.length === 0 ? [] : Array.from(t[0].getElementsByTagName("command-ref")).map((n) => ({
    type: pa,
    id: nt(n, "id")
  }));
}
function _g(e) {
  const t = e.getElementsByTagName("node-attributes"), n = [];
  if (t.length > 0) {
    const r = e.getElementsByTagName("node-attribute");
    if (r.length > 0)
      for (const a of r) {
        const o = nt(a, "content"), s = nt(a, "name");
        nt(a, "visibility") && n.push({ name: s, content: o });
      }
  }
  return n.length > 0 ? n : null;
}
function xg(e) {
  const t = e.getElementsByTagName("labels"), n = [];
  if (t.length > 0) {
    const r = e.getElementsByTagName("label");
    if (r.length > 0)
      for (const a of r) {
        const o = nt(a, "name");
        n.push(o);
      }
  }
  return n.length > 0 ? n[0] : null;
}
function Ra(e, t) {
  let n = nt(e, "id"), r = nt(e, "ident"), a = nt(e, "name"), o = nt(e, "node-type-id"), s = gd[nt(e, "type")], l = bg(e, t), i = wg(e), c = _g(e), u = xg(e), d = !!(l != null && l.find((v) => Os.includes(v.type) && v.id > 0)), p = !!(l != null && l.find((v) => Os.includes(v.type))), b = !!(l != null && l.find((v) => v.type == Yn)), g = !!(l != null && l.find((v) => v.type == jn));
  return {
    id: n,
    ident: r,
    name: a,
    nodeTypeId: o,
    type: s,
    destinations: l,
    commandReferences: i,
    nodeAttributes: c,
    label: u,
    hasValues: p,
    hasRealValues: d,
    hasModes: b,
    hasSubsystems: g
  };
}
function ts(e, t) {
  t.forEach((n) => {
    if (n.destinations) {
      let r = n.destinations.map((a) => e.findNode(a.type, a.id));
      n.valuesNodes = r.filter((a) => a.type != Yn && a.type != jn), n.modesNodes = r.filter((a) => a.type === Yn), n.subsystemsNodes = r.filter((a) => a.type === jn), n.modesNodes.forEach((a) => {
        a.parent = n;
      }), n.subsystemsNodes.forEach((a) => {
        a.parent = n;
      });
    }
  });
}
function ou(e) {
  e.forEach((t) => {
    let n = null;
    t.modesNodes && t.modesNodes.length > 0 && (t.defaultModeId ? n = t.modesNodes.find((r) => r.id === t.defaultModeId) : n = t.modesNodes[0]), t.defaultMode = n;
  });
}
function kg(e, t) {
  t.forEach((n) => {
    n.commandsNodes = (n.commandReferences || []).map((r) => e.findNode(r.type, r.id)).filter(Boolean);
  });
}
function Mg(e) {
  e.forEach((t) => {
    var n, r;
    t.defaultValue = ((n = t.valuesNodes) == null ? void 0 : n.find((a) => a.id === t.defaultValueId)) || ((r = t.valuesNodes) == null ? void 0 : r[0]) || null;
  });
}
function Tg(e) {
  const t = /* @__PURE__ */ new Set();
  e.subsystems.forEach((n) => {
    n.modesNodes || (n.modesNodes = []);
    const r = n.modesNodes.find((o) => {
      var s;
      return ((s = o.name) == null ? void 0 : s.trim().toLowerCase()) === "unknown";
    }), a = r || new Xr({
      id: `unknown:${n.id}`,
      ident: `unknown:${n.ident}`,
      name: "Unknown",
      label: "Unknown",
      nodeTypeId: 6,
      type: Yn,
      destinations: [],
      hasValues: !1,
      hasRealValues: !1,
      hasModes: !1,
      hasSubsystems: !1
    });
    a.name = "Unknown", a.label = "Unknown", a.parent = n, a.destinations = [], a.valuesNodes = [], a.modesNodes = [], a.subsystemsNodes = [], a.commandsNodes = [], a.hasValues = !1, a.hasRealValues = !1, a.hasModes = !1, a.hasSubsystems = !1, a.defaultValue = null, a.isImplicitUnknown = !0, n.unknownMode = a, t.add(a.id), n.modesNodes = n.modesNodes.filter((o) => o !== r), e.modes.includes(a) || e.modes.push(a), n === e.rootSubsystem && (n.modesNodes.unshift(a), n.defaultMode = a, n.defaultModeId = a.id, n.hasModes = !0);
  }), e.modes.forEach((n) => {
    n.modesNodes && (n.modesNodes = n.modesNodes.filter((r) => !t.has(r.id)), n.hasModes = n.modesNodes.length > 0);
  });
}
function ns(e, t) {
  const n = {
    values: [],
    modes: [],
    params: [],
    subsystems: [],
    commands: [],
    findNode: function(c, u) {
      let d = null;
      return c == Yn ? d = this.modes : c == jn ? d = this.subsystems : c == pa ? d = this.commands : d = this.values, d.find((p) => p.id === u);
    }
  };
  var r = [];
  const o = new DOMParser().parseFromString(t, "text/xml");
  for (const c of hg) {
    let u = o.getElementsByTagName(c);
    for (const d of u) {
      const p = Ra(d, r);
      p.parent = null;
      let b = nt(d, "value-formatter-id");
      p[b] = b;
      const g = p.type;
      if (g == cr) {
        let v = nt(d, "default-float"), T = nt(d, "rangemax"), $ = nt(d, "rangemin");
        p.defaultFloat = v, p.rangemax = T, p.rangemin = $;
      } else if (g == Dr) {
        let v = nt(d, "default-string");
        p.defaultString = v;
      } else if (g == Or) {
        let v = nt(d, "default-date"), T = nt(d, "date-max"), $ = nt(d, "date-min");
        p.defaultDate = v, p.datemax = T, p.datemin = $;
      } else if (g == Er) {
        let v = nt(d, "default-string"), T = nt(d, "file-description"), $ = nt(d, "file-extension");
        p.defaultString = v, p.fileDescription = T, p.fileExtension = $;
      }
      n.values.push(new Xr(p));
    }
  }
  const s = o.getElementsByTagName(vg);
  for (const c of s) {
    const u = Ra(c, r);
    let d = nt(c, "default-mode-id"), p = nt(c, "default-value-id");
    u.defaultModeId = d, u.defaultValueId = p, n.modes.push(new Xr(u));
  }
  const l = o.getElementsByTagName(gg);
  for (const c of l) {
    const u = Ra(c, r);
    n.commands.push(new Xr(u));
  }
  const i = o.getElementsByTagName(yg);
  for (const c of i) {
    const u = Ra(c, r);
    let d = nt(c, "default-mode-id");
    u.defaultModeId = d, n.subsystems.push(new Xr(u));
  }
  return n.rootSubsystem = n.subsystems.find((c) => !r.includes(c.id)), ts(n, n.modes), ts(n, n.params), ts(n, n.subsystems), ou(n.modes), ou(n.subsystems), Mg(n.modes), kg(n, n.subsystems), Tg(n), n;
}
let bd = !1;
function Pg(e) {
  bd = e;
}
function hn(...e) {
  bd && console.log(...e);
}
const kl = Jm("model", () => {
  const e = J(null), t = J([]), n = J([]), r = J([]), a = J(), o = J(!1), s = J([]), l = J({});
  function i(_) {
    o.value = !0, au(`/models/${_}.xml`).then((W) => {
      e.value = W;
      let A = ns(this, W);
      t.value = A.values, n.value = A.modes, r.value = A.subsystems, a.value = A.rootSubsystem, s.value = [], l.value = {}, T(A.rootSubsystem);
    }).finally(() => {
      o.value = !1;
    });
  }
  function c(_) {
    o.value = !0, au(`${_}`).then((W) => {
      e.value = W;
      let A = ns(this, W);
      t.value = A.values, n.value = A.modes, r.value = A.subsystems, a.value = A.rootSubsystem, s.value = [], l.value = {}, T(A.rootSubsystem);
    }).finally(() => {
      o.value = !1;
    });
  }
  function u(_) {
    o.value = !0, Promise.resolve(_).then((O) => {
      e.value = O;
      let W = ns(this, O);
      t.value = W.values, n.value = W.modes, r.value = W.subsystems, a.value = W.rootSubsystem, s.value = [], l.value = {}, T(W.rootSubsystem);
    }).finally(() => {
      o.value = !1;
    });
  }
  function d(_) {
    return t.value.find((O) => O.id == _);
  }
  function p(_) {
    return n.value.find((O) => O.id == _);
  }
  function b(_) {
    return r.value.find((O) => O.id == _);
  }
  function g(_, O, W) {
    _.validModes = W;
    let A = null;
    W.length > 0 ? O != null && W.includes(O) ? A = O : _.parent == null && W.includes(_.defaultMode) ? A = _.defaultMode : A = W[0] : A = _.unknownMode || null;
    const M = _.currentMode !== A;
    return _.currentMode = A, _.candidateMode = A, s.value[`${_.id}`] = A, H(_, A), _.hasSubsystems && _.subsystemsNodes.forEach((F) => {
      $(F, F.currentMode, A);
    }), M && hn(`PORIS mode changed for ${_.name}: ${(A == null ? void 0 : A.name) || "none"}`), A;
  }
  function v(_, O) {
    hn(`setValidMode_ ${_.name} ${O == null ? void 0 : O.name}, NOT using supermode`);
    let W = y(_);
    return hn(`   setValidMode validModes len ${W.length}`, W), g(_, O, W);
  }
  function T(_, O) {
    Wn();
    let W;
    try {
      W = v(_, O);
    } finally {
      Tf();
    }
    return ei(s), ei(l), W;
  }
  function $(_, O, W) {
    const A = new Set(_.modesNodes.map((F) => F.id));
    let M = W.modesNodes.filter((F) => A.has(F.id));
    return hn(`   setValidMode validModes  len ${M.length}`, M), g(_, O, M);
  }
  function I(_) {
    const O = s.value.reduce((W, A) => _.includes(A.id) ? A : W, null);
    return O || _[0];
  }
  function y(_) {
    if (_.parent != null && _.parent.currentMode != null) {
      hn(`parent: ${_.parent.name}`), hn(`parent mode: ${_.parent.currentMode.name}`), hn("parent.mode.submodes:", _.parent.currentMode.modesNodes);
      const O = new Set(_.modesNodes.map((W) => W.id));
      return _.parent.currentMode.modesNodes.filter((W) => O.has(W.id));
    } else return _.parent != null ? [] : _.modesNodes;
  }
  function P(_) {
    return y(_).length > 0;
  }
  function D(_, O, W) {
    l.value[`${_.id}`] = { value: O, data: W };
  }
  function B(_) {
    var O;
    for (const W of _ || []) {
      const A = b(W.node_id);
      if (!A) continue;
      const M = String(W.mode_id || "").startsWith("unknown:") ? A.unknownMode : p(W.mode_id), F = A.getValidModes();
      if (M && (F.includes(M) || M === A.unknownMode && F.length === 0) && T(A, M), W.value_id != null) {
        const N = d(W.value_id), w = ((O = A.currentMode) == null ? void 0 : O.valuesNodes) || [];
        N && w.some((k) => k.id == N.id) && D(A, N, W.data);
      }
    }
  }
  function H(_, O, W = null) {
    const A = l.value[`${_.id}`] || {};
    if (!(O != null && O.hasValues))
      return D(_, null, null), { value: null, data: null };
    const M = O.valuesNodes || [];
    if (M.length === 0)
      return D(_, null, null), { value: null, data: null };
    const F = M.find((k) => {
      var q;
      return k.id === ((q = O.defaultValue) == null ? void 0 : q.id);
    }) || M[0];
    let N = M.find((k) => {
      var q;
      return k.id === ((q = W || A.value) == null ? void 0 : q.id);
    }) || F, w = A.data;
    return N.type === cr ? (typeof w != "number" || !Number.isFinite(w) || w < Number(N.rangemin) || w > Number(N.rangemax)) && (w = Number(N.defaultFloat)) : N.type === Dr || N.type === Er ? typeof w != "string" && (w = N.defaultString || "") : N.type === Or && w == null && (w = N.defaultDate), D(_, N, w), { value: N, data: w };
  }
  return {
    xmlModel: e,
    rootSubsystem: a,
    isLoading: o,
    currentModes: s,
    systemValues: l,
    loadModel: i,
    loadModelURL: c,
    loadModelXML: u,
    getValue: d,
    getMode: p,
    getSubsystem: b,
    getCurrentMode: I,
    setValidMode: T,
    getValidObjModes: y,
    hasValidObjModes: P,
    getSystemValue: H,
    setSystemValue: D,
    applyRuntimeState: B
  };
}), Sg = ["disabled"], Ag = ["value"], wd = {
  __name: "ModeSelector",
  props: /* @__PURE__ */ cc({
    modes: {
      type: Array,
      required: !0
    }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = As(e, "modelValue"), n = e, r = J(n.modes);
    return ut(
      () => n.modes,
      (a, o) => {
        r.value = a;
      }
    ), (a, o) => Vn((V(), G("select", {
      "onUpdate:modelValue": o[0] || (o[0] = (s) => t.value = s),
      disabled: r.value.length < 2
    }, [
      (V(!0), G(_e, null, qe(r.value, (s) => (V(), G("option", {
        key: s.id,
        value: s
      }, He(s.label || s.name), 9, Ag))), 128))
    ], 8, Sg)), [
      [Ac, t.value]
    ]);
  }
};
function Me(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function We(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Wt(e, t) {
  const n = Me(e);
  return isNaN(t) ? We(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Gt(e, t) {
  const n = Me(e);
  if (isNaN(t)) return We(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), a = We(e, n.getTime());
  a.setMonth(n.getMonth() + t + 1, 0);
  const o = a.getDate();
  return r >= o ? a : (n.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    r
  ), n);
}
function _d(e, t) {
  const {
    years: n = 0,
    months: r = 0,
    weeks: a = 0,
    days: o = 0,
    hours: s = 0,
    minutes: l = 0,
    seconds: i = 0
  } = t, c = Me(e), u = r || n ? Gt(c, r + n * 12) : c, d = o || a ? Wt(u, o + a * 7) : u, p = l + s * 60, g = (i + p * 60) * 1e3;
  return We(e, d.getTime() + g);
}
const xd = 6048e5, Cg = 864e5, Dg = 6e4, Og = 36e5, Eg = 1e3;
let Rg = {};
function yr() {
  return Rg;
}
function mn(e, t) {
  var l, i, c, u;
  const n = yr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((i = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : i.weekStartsOn) ?? n.weekStartsOn ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = Me(e), o = a.getDay(), s = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function Rr(e) {
  return mn(e, { weekStartsOn: 1 });
}
function kd(e) {
  const t = Me(e), n = t.getFullYear(), r = We(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const a = Rr(r), o = We(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const s = Rr(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function su(e) {
  const t = Me(e);
  return t.setHours(0, 0, 0, 0), t;
}
function oo(e) {
  const t = Me(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function Md(e, t) {
  const n = su(e), r = su(t), a = +n - oo(n), o = +r - oo(r);
  return Math.round((a - o) / Cg);
}
function $g(e) {
  const t = kd(e), n = We(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Rr(n);
}
function Ng(e, t) {
  const n = t * 3;
  return Gt(e, n);
}
function Ml(e, t) {
  return Gt(e, t * 12);
}
function Td(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function oa(e) {
  if (!Td(e) && typeof e != "number")
    return !1;
  const t = Me(e);
  return !isNaN(Number(t));
}
function lu(e) {
  const t = Me(e);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function Pd(e, t) {
  const n = Me(e.start), r = Me(e.end);
  let a = +n > +r;
  const o = a ? +n : +r, s = a ? r : n;
  s.setHours(0, 0, 0, 0);
  let l = 1;
  const i = [];
  for (; +s <= o; )
    i.push(Me(s)), s.setDate(s.getDate() + l), s.setHours(0, 0, 0, 0);
  return a ? i.reverse() : i;
}
function lr(e) {
  const t = Me(e), n = t.getMonth(), r = n - n % 3;
  return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
}
function Vg(e, t) {
  const n = Me(e.start), r = Me(e.end);
  let a = +n > +r;
  const o = a ? +lr(n) : +lr(r);
  let s = lr(a ? r : n), l = 1;
  const i = [];
  for (; +s <= o; )
    i.push(Me(s)), s = Ng(s, l);
  return a ? i.reverse() : i;
}
function Ig(e) {
  const t = Me(e), n = t.getFullYear();
  return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function Sd(e) {
  const t = Me(e), n = We(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Fg(e, t) {
  var l, i, c, u;
  const n = yr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((i = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : i.weekStartsOn) ?? n.weekStartsOn ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = Me(e), o = a.getDay(), s = (o < r ? -7 : 0) + 6 - (o - r);
  return a.setDate(a.getDate() + s), a.setHours(23, 59, 59, 999), a;
}
function iu(e) {
  const t = Me(e), n = t.getMonth(), r = n - n % 3 + 3;
  return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t;
}
const Bg = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Lg = (e, t, n) => {
  let r;
  const a = Bg[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function rs(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Yg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, jg = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Hg = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ug = {
  date: rs({
    formats: Yg,
    defaultWidth: "full"
  }),
  time: rs({
    formats: jg,
    defaultWidth: "full"
  }),
  dateTime: rs({
    formats: Hg,
    defaultWidth: "full"
  })
}, Wg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, qg = (e, t, n, r) => Wg[e];
function qr(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, l = n != null && n.width ? String(n.width) : s;
      a = e.formattingValues[l] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, l = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[l] || e.values[s];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[o];
  };
}
const zg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Gg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Kg = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Xg = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Qg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Jg = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Zg = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, e0 = {
  ordinalNumber: Zg,
  era: qr({
    values: zg,
    defaultWidth: "wide"
  }),
  quarter: qr({
    values: Gg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: qr({
    values: Kg,
    defaultWidth: "wide"
  }),
  day: qr({
    values: Xg,
    defaultWidth: "wide"
  }),
  dayPeriod: qr({
    values: Qg,
    defaultWidth: "wide",
    formattingValues: Jg,
    defaultFormattingWidth: "wide"
  })
};
function zr(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const s = o[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], i = Array.isArray(l) ? n0(l, (d) => d.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t0(l, (d) => d.test(s))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(i) : i, c = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(c)
    ) : c;
    const u = t.slice(s.length);
    return { value: c, rest: u };
  };
}
function t0(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function n0(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function r0(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const a = r[0], o = t.match(e.parsePattern);
    if (!o) return null;
    let s = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const l = t.slice(a.length);
    return { value: s, rest: l };
  };
}
const a0 = /^(\d+)(th|st|nd|rd)?/i, o0 = /\d+/i, s0 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, l0 = {
  any: [/^b/i, /^(a|c)/i]
}, i0 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, u0 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, c0 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, d0 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, f0 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, p0 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, m0 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, h0 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, v0 = {
  ordinalNumber: r0({
    matchPattern: a0,
    parsePattern: o0,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: zr({
    matchPatterns: s0,
    defaultMatchWidth: "wide",
    parsePatterns: l0,
    defaultParseWidth: "any"
  }),
  quarter: zr({
    matchPatterns: i0,
    defaultMatchWidth: "wide",
    parsePatterns: u0,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: zr({
    matchPatterns: c0,
    defaultMatchWidth: "wide",
    parsePatterns: d0,
    defaultParseWidth: "any"
  }),
  day: zr({
    matchPatterns: f0,
    defaultMatchWidth: "wide",
    parsePatterns: p0,
    defaultParseWidth: "any"
  }),
  dayPeriod: zr({
    matchPatterns: m0,
    defaultMatchWidth: "any",
    parsePatterns: h0,
    defaultParseWidth: "any"
  })
}, Ad = {
  code: "en-US",
  formatDistance: Lg,
  formatLong: Ug,
  formatRelative: qg,
  localize: e0,
  match: v0,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function y0(e) {
  const t = Me(e);
  return Md(t, Sd(t)) + 1;
}
function Tl(e) {
  const t = Me(e), n = +Rr(t) - +$g(t);
  return Math.round(n / xd) + 1;
}
function Pl(e, t) {
  var u, d, p, b;
  const n = Me(e), r = n.getFullYear(), a = yr(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((b = (p = a.locale) == null ? void 0 : p.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, s = We(e, 0);
  s.setFullYear(r + 1, 0, o), s.setHours(0, 0, 0, 0);
  const l = mn(s, t), i = We(e, 0);
  i.setFullYear(r, 0, o), i.setHours(0, 0, 0, 0);
  const c = mn(i, t);
  return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function g0(e, t) {
  var l, i, c, u;
  const n = yr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((i = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : i.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = Pl(e, t), o = We(e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), mn(o, t);
}
function Sl(e, t) {
  const n = Me(e), r = +mn(n, t) - +g0(n, t);
  return Math.round(r / xd) + 1;
}
function ze(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Pn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return ze(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ze(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ze(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ze(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ze(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ze(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ze(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return ze(a, t.length);
  }
}, br = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, uu = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), a = r > 0 ? r : 1 - r;
      return n.ordinalNumber(a, { unit: "year" });
    }
    return Pn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = Pl(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const s = o % 100;
      return ze(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : ze(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = kd(e);
    return ze(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return ze(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return ze(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return ze(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Pn.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return ze(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const a = Sl(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : ze(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Tl(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ze(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Pn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = y0(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ze(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(o);
      case "ee":
        return ze(o, 2);
      case "eo":
        return n.ordinalNumber(o, { unit: "day" });
      case "eee":
        return n.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const a = e.getDay(), o = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(o);
      case "cc":
        return ze(o, t.length);
      case "co":
        return n.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return n.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), a = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return ze(a, t.length);
      case "io":
        return n.ordinalNumber(a, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r === 12 ? a = br.noon : r === 0 ? a = br.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let a;
    switch (r >= 17 ? a = br.evening : r >= 12 ? a = br.afternoon : r >= 4 ? a = br.morning : a = br.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Pn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Pn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ze(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ze(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Pn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Pn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Pn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return du(r);
      case "XXXX":
      case "XX":
        return er(r);
      case "XXXXX":
      case "XXX":
      default:
        return er(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return du(r);
      case "xxxx":
      case "xx":
        return er(r);
      case "xxxxx":
      case "xxx":
      default:
        return er(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + cu(r, ":");
      case "OOOO":
      default:
        return "GMT" + er(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + cu(r, ":");
      case "zzzz":
      default:
        return "GMT" + er(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return ze(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return ze(r, t.length);
  }
};
function cu(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + t + ze(o, 2);
}
function du(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ze(Math.abs(e) / 60, 2) : er(e, t);
}
function er(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = ze(Math.trunc(r / 60), 2), o = ze(r % 60, 2);
  return n + a + t + o;
}
const fu = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Cd = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, b0 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return fu(e, t);
  let o;
  switch (r) {
    case "P":
      o = t.dateTime({ width: "short" });
      break;
    case "PP":
      o = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = t.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", fu(r, t)).replace("{{time}}", Cd(a, t));
}, Bs = {
  p: Cd,
  P: b0
}, w0 = /^D+$/, _0 = /^Y+$/, x0 = ["D", "DD", "YY", "YYYY"];
function Dd(e) {
  return w0.test(e);
}
function Od(e) {
  return _0.test(e);
}
function Ls(e, t, n) {
  const r = k0(e, t, n);
  if (console.warn(r), x0.includes(e)) throw new RangeError(r);
}
function k0(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const M0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, T0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, P0 = /^'([^]*?)'?$/, S0 = /''/g, A0 = /[a-zA-Z]/;
function dn(e, t, n) {
  var u, d, p, b, g, v, T, $;
  const r = yr(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? Ad, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((b = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? (($ = (T = r.locale) == null ? void 0 : T.options) == null ? void 0 : $.weekStartsOn) ?? 0, l = Me(e);
  if (!oa(l))
    throw new RangeError("Invalid time value");
  let i = t.match(T0).map((I) => {
    const y = I[0];
    if (y === "p" || y === "P") {
      const P = Bs[y];
      return P(I, a.formatLong);
    }
    return I;
  }).join("").match(M0).map((I) => {
    if (I === "''")
      return { isToken: !1, value: "'" };
    const y = I[0];
    if (y === "'")
      return { isToken: !1, value: C0(I) };
    if (uu[y])
      return { isToken: !0, value: I };
    if (y.match(A0))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + y + "`"
      );
    return { isToken: !1, value: I };
  });
  a.localize.preprocessor && (i = a.localize.preprocessor(l, i));
  const c = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: a
  };
  return i.map((I) => {
    if (!I.isToken) return I.value;
    const y = I.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Od(y) || !(n != null && n.useAdditionalDayOfYearTokens) && Dd(y)) && Ls(y, t, String(e));
    const P = uu[y[0]];
    return P(l, y, a.localize, c);
  }).join("");
}
function C0(e) {
  const t = e.match(P0);
  return t ? t[1].replace(S0, "'") : e;
}
function D0(e) {
  return Me(e).getDay();
}
function O0(e) {
  const t = Me(e), n = t.getFullYear(), r = t.getMonth(), a = We(e, 0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function E0() {
  return Object.assign({}, yr());
}
function Kt(e) {
  return Me(e).getHours();
}
function R0(e) {
  let n = Me(e).getDay();
  return n === 0 && (n = 7), n;
}
function fn(e) {
  return Me(e).getMinutes();
}
function Fe(e) {
  return Me(e).getMonth();
}
function $r(e) {
  return Me(e).getSeconds();
}
function $e(e) {
  return Me(e).getFullYear();
}
function ha(e, t) {
  const n = Me(e), r = Me(t);
  return n.getTime() > r.getTime();
}
function va(e, t) {
  const n = Me(e), r = Me(t);
  return +n < +r;
}
function xr(e, t) {
  const n = Me(e), r = Me(t);
  return +n == +r;
}
function $0(e, t) {
  const n = t instanceof Date ? We(t, 0) : new t(0);
  return n.setFullYear(
    e.getFullYear(),
    e.getMonth(),
    e.getDate()
  ), n.setHours(
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  ), n;
}
const N0 = 10;
class Ed {
  constructor() {
    pe(this, "subPriority", 0);
  }
  validate(t, n) {
    return !0;
  }
}
class V0 extends Ed {
  constructor(t, n, r, a, o) {
    super(), this.value = t, this.validateValue = n, this.setValue = r, this.priority = a, o && (this.subPriority = o);
  }
  validate(t, n) {
    return this.validateValue(t, this.value, n);
  }
  set(t, n, r) {
    return this.setValue(t, n, this.value, r);
  }
}
class I0 extends Ed {
  constructor() {
    super(...arguments);
    pe(this, "priority", N0);
    pe(this, "subPriority", -1);
  }
  set(n, r) {
    return r.timestampIsSet ? n : We(n, $0(n, Date));
  }
}
class Ue {
  run(t, n, r, a) {
    const o = this.parse(t, n, r, a);
    return o ? {
      setter: new V0(
        o.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: o.rest
    } : null;
  }
  validate(t, n, r) {
    return !0;
  }
}
class F0 extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 140);
    pe(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return a.era(n, { width: "abbreviated" }) || a.era(n, { width: "narrow" });
      case "GGGGG":
        return a.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return a.era(n, { width: "wide" }) || a.era(n, { width: "abbreviated" }) || a.era(n, { width: "narrow" });
    }
  }
  set(n, r, a) {
    return r.era = a, n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
const pt = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, sn = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function mt(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function rt(e, t) {
  const n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function ln(e, t) {
  const n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  const r = n[1] === "+" ? 1 : -1, a = n[2] ? parseInt(n[2], 10) : 0, o = n[3] ? parseInt(n[3], 10) : 0, s = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (a * Og + o * Dg + s * Eg),
    rest: t.slice(n[0].length)
  };
}
function Rd(e) {
  return rt(pt.anyDigitsSigned, e);
}
function dt(e, t) {
  switch (e) {
    case 1:
      return rt(pt.singleDigit, t);
    case 2:
      return rt(pt.twoDigits, t);
    case 3:
      return rt(pt.threeDigits, t);
    case 4:
      return rt(pt.fourDigits, t);
    default:
      return rt(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function so(e, t) {
  switch (e) {
    case 1:
      return rt(pt.singleDigitSigned, t);
    case 2:
      return rt(pt.twoDigitsSigned, t);
    case 3:
      return rt(pt.threeDigitsSigned, t);
    case 4:
      return rt(pt.fourDigitsSigned, t);
    default:
      return rt(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function Al(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function $d(e, t) {
  const n = t > 0, r = n ? t : 1 - t;
  let a;
  if (r <= 50)
    a = e || 100;
  else {
    const o = r + 50, s = Math.trunc(o / 100) * 100, l = e >= o % 100;
    a = e + s - (l ? 100 : 0);
  }
  return n ? a : 1 - a;
}
function Nd(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class B0 extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 130);
    pe(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, r, a) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: r === "yy"
    });
    switch (r) {
      case "y":
        return mt(dt(4, n), o);
      case "yo":
        return mt(
          a.ordinalNumber(n, {
            unit: "year"
          }),
          o
        );
      default:
        return mt(dt(r.length, n), o);
    }
  }
  validate(n, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(n, r, a) {
    const o = n.getFullYear();
    if (a.isTwoDigitYear) {
      const l = $d(
        a.year,
        o
      );
      return n.setFullYear(l, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
    const s = !("era" in r) || r.era === 1 ? a.year : 1 - a.year;
    return n.setFullYear(s, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class L0 extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 130);
    pe(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    const o = (s) => ({
      year: s,
      isTwoDigitYear: r === "YY"
    });
    switch (r) {
      case "Y":
        return mt(dt(4, n), o);
      case "Yo":
        return mt(
          a.ordinalNumber(n, {
            unit: "year"
          }),
          o
        );
      default:
        return mt(dt(r.length, n), o);
    }
  }
  validate(n, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(n, r, a, o) {
    const s = Pl(n, o);
    if (a.isTwoDigitYear) {
      const i = $d(
        a.year,
        s
      );
      return n.setFullYear(
        i,
        0,
        o.firstWeekContainsDate
      ), n.setHours(0, 0, 0, 0), mn(n, o);
    }
    const l = !("era" in r) || r.era === 1 ? a.year : 1 - a.year;
    return n.setFullYear(l, 0, o.firstWeekContainsDate), n.setHours(0, 0, 0, 0), mn(n, o);
  }
}
class Y0 extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 130);
    pe(this, "incompatibleTokens", [
      "G",
      "y",
      "Y",
      "u",
      "Q",
      "q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r) {
    return so(r === "R" ? 4 : r.length, n);
  }
  set(n, r, a) {
    const o = We(n, 0);
    return o.setFullYear(a, 0, 4), o.setHours(0, 0, 0, 0), Rr(o);
  }
}
class j0 extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 130);
    pe(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, r) {
    return so(r === "u" ? 4 : r.length, n);
  }
  set(n, r, a) {
    return n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class H0 extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 120);
    pe(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "Q":
      case "QQ":
        return dt(r.length, n);
      case "Qo":
        return a.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return a.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return a.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return a.quarter(n, {
          width: "wide",
          context: "formatting"
        }) || a.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 4;
  }
  set(n, r, a) {
    return n.setMonth((a - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class U0 extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 120);
    pe(this, "incompatibleTokens", [
      "Y",
      "R",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "q":
      case "qq":
        return dt(r.length, n);
      case "qo":
        return a.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return a.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return a.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return a.quarter(n, {
          width: "wide",
          context: "standalone"
        }) || a.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 4;
  }
  set(n, r, a) {
    return n.setMonth((a - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class W0 extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "L",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
    pe(this, "priority", 110);
  }
  parse(n, r, a) {
    const o = (s) => s - 1;
    switch (r) {
      case "M":
        return mt(
          rt(pt.month, n),
          o
        );
      case "MM":
        return mt(dt(2, n), o);
      case "Mo":
        return mt(
          a.ordinalNumber(n, {
            unit: "month"
          }),
          o
        );
      case "MMM":
        return a.month(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(n, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return a.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return a.month(n, { width: "wide", context: "formatting" }) || a.month(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.month(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, a) {
    return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class q0 extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 110);
    pe(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    const o = (s) => s - 1;
    switch (r) {
      case "L":
        return mt(
          rt(pt.month, n),
          o
        );
      case "LL":
        return mt(dt(2, n), o);
      case "Lo":
        return mt(
          a.ordinalNumber(n, {
            unit: "month"
          }),
          o
        );
      case "LLL":
        return a.month(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(n, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return a.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return a.month(n, { width: "wide", context: "standalone" }) || a.month(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.month(n, { width: "narrow", context: "standalone" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, a) {
    return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n;
  }
}
function z0(e, t, n) {
  const r = Me(e), a = Sl(r, n) - t;
  return r.setDate(r.getDate() - a * 7), r;
}
class G0 extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 100);
    pe(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "i",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "w":
        return rt(pt.week, n);
      case "wo":
        return a.ordinalNumber(n, { unit: "week" });
      default:
        return dt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 53;
  }
  set(n, r, a, o) {
    return mn(z0(n, a, o), o);
  }
}
function K0(e, t) {
  const n = Me(e), r = Tl(n) - t;
  return n.setDate(n.getDate() - r * 7), n;
}
class X0 extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 100);
    pe(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "I":
        return rt(pt.week, n);
      case "Io":
        return a.ordinalNumber(n, { unit: "week" });
      default:
        return dt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 53;
  }
  set(n, r, a) {
    return Rr(K0(n, a));
  }
}
const Q0 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], J0 = [
  31,
  29,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31
];
class Z0 extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 90);
    pe(this, "subPriority", 1);
    pe(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "w",
      "I",
      "D",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "d":
        return rt(pt.date, n);
      case "do":
        return a.ordinalNumber(n, { unit: "date" });
      default:
        return dt(r.length, n);
    }
  }
  validate(n, r) {
    const a = n.getFullYear(), o = Nd(a), s = n.getMonth();
    return o ? r >= 1 && r <= J0[s] : r >= 1 && r <= Q0[s];
  }
  set(n, r, a) {
    return n.setDate(a), n.setHours(0, 0, 0, 0), n;
  }
}
class eb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 90);
    pe(this, "subpriority", 1);
    pe(this, "incompatibleTokens", [
      "Y",
      "R",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "I",
      "d",
      "E",
      "i",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    switch (r) {
      case "D":
      case "DD":
        return rt(pt.dayOfYear, n);
      case "Do":
        return a.ordinalNumber(n, { unit: "date" });
      default:
        return dt(r.length, n);
    }
  }
  validate(n, r) {
    const a = n.getFullYear();
    return Nd(a) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
  }
  set(n, r, a) {
    return n.setMonth(0, a), n.setHours(0, 0, 0, 0), n;
  }
}
function Cl(e, t, n) {
  var d, p, b, g;
  const r = yr(), a = (n == null ? void 0 : n.weekStartsOn) ?? ((p = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : p.weekStartsOn) ?? r.weekStartsOn ?? ((g = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : g.weekStartsOn) ?? 0, o = Me(e), s = o.getDay(), i = (t % 7 + 7) % 7, c = 7 - a, u = t < 0 || t > 6 ? t - (s + c) % 7 : (i + c) % 7 - (s + c) % 7;
  return Wt(o, u);
}
class tb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 90);
    pe(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return a.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return a.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return a.day(n, { width: "wide", context: "formatting" }) || a.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, a, o) {
    return n = Cl(n, a, o), n.setHours(0, 0, 0, 0), n;
  }
}
class nb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 90);
    pe(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a, o) {
    const s = (l) => {
      const i = Math.floor((l - 1) / 7) * 7;
      return (l + o.weekStartsOn + 6) % 7 + i;
    };
    switch (r) {
      case "e":
      case "ee":
        return mt(dt(r.length, n), s);
      case "eo":
        return mt(
          a.ordinalNumber(n, {
            unit: "day"
          }),
          s
        );
      case "eee":
        return a.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
      case "eeeee":
        return a.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return a.day(n, { width: "wide", context: "formatting" }) || a.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.day(n, { width: "short", context: "formatting" }) || a.day(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, a, o) {
    return n = Cl(n, a, o), n.setHours(0, 0, 0, 0), n;
  }
}
class rb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 90);
    pe(this, "incompatibleTokens", [
      "y",
      "R",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "I",
      "d",
      "D",
      "E",
      "i",
      "e",
      "t",
      "T"
    ]);
  }
  parse(n, r, a, o) {
    const s = (l) => {
      const i = Math.floor((l - 1) / 7) * 7;
      return (l + o.weekStartsOn + 6) % 7 + i;
    };
    switch (r) {
      case "c":
      case "cc":
        return mt(dt(r.length, n), s);
      case "co":
        return mt(
          a.ordinalNumber(n, {
            unit: "day"
          }),
          s
        );
      case "ccc":
        return a.day(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(n, { width: "short", context: "standalone" }) || a.day(n, { width: "narrow", context: "standalone" });
      case "ccccc":
        return a.day(n, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return a.day(n, { width: "short", context: "standalone" }) || a.day(n, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return a.day(n, { width: "wide", context: "standalone" }) || a.day(n, {
          width: "abbreviated",
          context: "standalone"
        }) || a.day(n, { width: "short", context: "standalone" }) || a.day(n, { width: "narrow", context: "standalone" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, a, o) {
    return n = Cl(n, a, o), n.setHours(0, 0, 0, 0), n;
  }
}
function ab(e, t) {
  const n = Me(e), r = R0(n), a = t - r;
  return Wt(n, a);
}
class ob extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 90);
    pe(this, "incompatibleTokens", [
      "y",
      "Y",
      "u",
      "q",
      "Q",
      "M",
      "L",
      "w",
      "d",
      "D",
      "E",
      "e",
      "c",
      "t",
      "T"
    ]);
  }
  parse(n, r, a) {
    const o = (s) => s === 0 ? 7 : s;
    switch (r) {
      case "i":
      case "ii":
        return dt(r.length, n);
      case "io":
        return a.ordinalNumber(n, { unit: "day" });
      case "iii":
        return mt(
          a.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(n, {
            width: "short",
            context: "formatting"
          }) || a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiiii":
        return mt(
          a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiiiii":
        return mt(
          a.day(n, {
            width: "short",
            context: "formatting"
          }) || a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
      case "iiii":
      default:
        return mt(
          a.day(n, {
            width: "wide",
            context: "formatting"
          }) || a.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || a.day(n, {
            width: "short",
            context: "formatting"
          }) || a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          o
        );
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 7;
  }
  set(n, r, a) {
    return n = ab(n, a), n.setHours(0, 0, 0, 0), n;
  }
}
class sb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 80);
    pe(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "a":
      case "aa":
      case "aaa":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, r, a) {
    return n.setHours(Al(a), 0, 0, 0), n;
  }
}
class lb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 80);
    pe(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "b":
      case "bb":
      case "bbb":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, r, a) {
    return n.setHours(Al(a), 0, 0, 0), n;
  }
}
class ib extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 80);
    pe(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "B":
      case "BB":
      case "BBB":
        return a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return a.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || a.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, r, a) {
    return n.setHours(Al(a), 0, 0, 0), n;
  }
}
class ub extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 70);
    pe(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "h":
        return rt(pt.hour12h, n);
      case "ho":
        return a.ordinalNumber(n, { unit: "hour" });
      default:
        return dt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 12;
  }
  set(n, r, a) {
    const o = n.getHours() >= 12;
    return o && a < 12 ? n.setHours(a + 12, 0, 0, 0) : !o && a === 12 ? n.setHours(0, 0, 0, 0) : n.setHours(a, 0, 0, 0), n;
  }
}
class cb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 70);
    pe(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "H":
        return rt(pt.hour23h, n);
      case "Ho":
        return a.ordinalNumber(n, { unit: "hour" });
      default:
        return dt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 23;
  }
  set(n, r, a) {
    return n.setHours(a, 0, 0, 0), n;
  }
}
class db extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 70);
    pe(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "K":
        return rt(pt.hour11h, n);
      case "Ko":
        return a.ordinalNumber(n, { unit: "hour" });
      default:
        return dt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, a) {
    return n.getHours() >= 12 && a < 12 ? n.setHours(a + 12, 0, 0, 0) : n.setHours(a, 0, 0, 0), n;
  }
}
class fb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 70);
    pe(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "k":
        return rt(pt.hour24h, n);
      case "ko":
        return a.ordinalNumber(n, { unit: "hour" });
      default:
        return dt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 24;
  }
  set(n, r, a) {
    const o = a <= 24 ? a % 24 : a;
    return n.setHours(o, 0, 0, 0), n;
  }
}
class pb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 60);
    pe(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "m":
        return rt(pt.minute, n);
      case "mo":
        return a.ordinalNumber(n, { unit: "minute" });
      default:
        return dt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 59;
  }
  set(n, r, a) {
    return n.setMinutes(a, 0, 0), n;
  }
}
class mb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 50);
    pe(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "s":
        return rt(pt.second, n);
      case "so":
        return a.ordinalNumber(n, { unit: "second" });
      default:
        return dt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 59;
  }
  set(n, r, a) {
    return n.setSeconds(a, 0), n;
  }
}
class hb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 30);
    pe(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r) {
    const a = (o) => Math.trunc(o * Math.pow(10, -r.length + 3));
    return mt(dt(r.length, n), a);
  }
  set(n, r, a) {
    return n.setMilliseconds(a), n;
  }
}
class vb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 10);
    pe(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(n, r) {
    switch (r) {
      case "X":
        return ln(
          sn.basicOptionalMinutes,
          n
        );
      case "XX":
        return ln(sn.basic, n);
      case "XXXX":
        return ln(
          sn.basicOptionalSeconds,
          n
        );
      case "XXXXX":
        return ln(
          sn.extendedOptionalSeconds,
          n
        );
      case "XXX":
      default:
        return ln(sn.extended, n);
    }
  }
  set(n, r, a) {
    return r.timestampIsSet ? n : We(
      n,
      n.getTime() - oo(n) - a
    );
  }
}
class yb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 10);
    pe(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(n, r) {
    switch (r) {
      case "x":
        return ln(
          sn.basicOptionalMinutes,
          n
        );
      case "xx":
        return ln(sn.basic, n);
      case "xxxx":
        return ln(
          sn.basicOptionalSeconds,
          n
        );
      case "xxxxx":
        return ln(
          sn.extendedOptionalSeconds,
          n
        );
      case "xxx":
      default:
        return ln(sn.extended, n);
    }
  }
  set(n, r, a) {
    return r.timestampIsSet ? n : We(
      n,
      n.getTime() - oo(n) - a
    );
  }
}
class gb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 40);
    pe(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return Rd(n);
  }
  set(n, r, a) {
    return [We(n, a * 1e3), { timestampIsSet: !0 }];
  }
}
class bb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 20);
    pe(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return Rd(n);
  }
  set(n, r, a) {
    return [We(n, a), { timestampIsSet: !0 }];
  }
}
const wb = {
  G: new F0(),
  y: new B0(),
  Y: new L0(),
  R: new Y0(),
  u: new j0(),
  Q: new H0(),
  q: new U0(),
  M: new W0(),
  L: new q0(),
  w: new G0(),
  I: new X0(),
  d: new Z0(),
  D: new eb(),
  E: new tb(),
  e: new nb(),
  c: new rb(),
  i: new ob(),
  a: new sb(),
  b: new lb(),
  B: new ib(),
  h: new ub(),
  H: new cb(),
  K: new db(),
  k: new fb(),
  m: new pb(),
  s: new mb(),
  S: new hb(),
  X: new vb(),
  x: new yb(),
  t: new gb(),
  T: new bb()
}, _b = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, xb = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, kb = /^'([^]*?)'?$/, Mb = /''/g, Tb = /\S/, Pb = /[a-zA-Z]/;
function Ys(e, t, n, r) {
  var v, T, $, I;
  const a = E0(), o = a.locale ?? Ad, s = a.firstWeekContainsDate ?? ((T = (v = a.locale) == null ? void 0 : v.options) == null ? void 0 : T.firstWeekContainsDate) ?? 1, l = a.weekStartsOn ?? ((I = ($ = a.locale) == null ? void 0 : $.options) == null ? void 0 : I.weekStartsOn) ?? 0;
  if (t === "")
    return e === "" ? Me(n) : We(n, NaN);
  const i = {
    firstWeekContainsDate: s,
    weekStartsOn: l,
    locale: o
  }, c = [new I0()], u = t.match(xb).map((y) => {
    const P = y[0];
    if (P in Bs) {
      const D = Bs[P];
      return D(y, o.formatLong);
    }
    return y;
  }).join("").match(_b), d = [];
  for (let y of u) {
    Od(y) && Ls(y, t, e), Dd(y) && Ls(y, t, e);
    const P = y[0], D = wb[P];
    if (D) {
      const { incompatibleTokens: B } = D;
      if (Array.isArray(B)) {
        const _ = d.find(
          (O) => B.includes(O.token) || O.token === P
        );
        if (_)
          throw new RangeError(
            `The format string mustn't contain \`${_.fullToken}\` and \`${y}\` at the same time`
          );
      } else if (D.incompatibleTokens === "*" && d.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${y}\` and any other token at the same time`
        );
      d.push({ token: P, fullToken: y });
      const H = D.run(
        e,
        y,
        o.match,
        i
      );
      if (!H)
        return We(n, NaN);
      c.push(H.setter), e = H.rest;
    } else {
      if (P.match(Pb))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + P + "`"
        );
      if (y === "''" ? y = "'" : P === "'" && (y = Sb(y)), e.indexOf(y) === 0)
        e = e.slice(y.length);
      else
        return We(n, NaN);
    }
  }
  if (e.length > 0 && Tb.test(e))
    return We(n, NaN);
  const p = c.map((y) => y.priority).sort((y, P) => P - y).filter((y, P, D) => D.indexOf(y) === P).map(
    (y) => c.filter((P) => P.priority === y).sort((P, D) => D.subPriority - P.subPriority)
  ).map((y) => y[0]);
  let b = Me(n);
  if (isNaN(b.getTime()))
    return We(n, NaN);
  const g = {};
  for (const y of p) {
    if (!y.validate(b, i))
      return We(n, NaN);
    const P = y.set(b, g, i);
    Array.isArray(P) ? (b = P[0], Object.assign(g, P[1])) : b = P;
  }
  return We(n, b);
}
function Sb(e) {
  return e.match(kb)[1].replace(Mb, "'");
}
function pu(e, t) {
  const n = lr(e), r = lr(t);
  return +n == +r;
}
function Ab(e, t) {
  return Wt(e, -t);
}
function Vd(e, t) {
  const n = Me(e), r = n.getFullYear(), a = n.getDate(), o = We(e, 0);
  o.setFullYear(r, t, 15), o.setHours(0, 0, 0, 0);
  const s = O0(o);
  return n.setMonth(t, Math.min(a, s)), n;
}
function Ze(e, t) {
  let n = Me(e);
  return isNaN(+n) ? We(e, NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = Vd(n, t.month)), t.date != null && n.setDate(t.date), t.hours != null && n.setHours(t.hours), t.minutes != null && n.setMinutes(t.minutes), t.seconds != null && n.setSeconds(t.seconds), t.milliseconds != null && n.setMilliseconds(t.milliseconds), n);
}
function Id(e, t) {
  const n = Me(e);
  return n.setHours(t), n;
}
function Dl(e, t) {
  const n = Me(e);
  return n.setMilliseconds(t), n;
}
function Fd(e, t) {
  const n = Me(e);
  return n.setMinutes(t), n;
}
function Ol(e, t) {
  const n = Me(e);
  return n.setSeconds(t), n;
}
function un(e, t) {
  const n = Me(e);
  return isNaN(+n) ? We(e, NaN) : (n.setFullYear(t), n);
}
function Nr(e, t) {
  return Gt(e, -t);
}
function Cb(e, t) {
  const {
    years: n = 0,
    months: r = 0,
    weeks: a = 0,
    days: o = 0,
    hours: s = 0,
    minutes: l = 0,
    seconds: i = 0
  } = t, c = Nr(e, r + n * 12), u = Ab(c, o + a * 7), d = l + s * 60, b = (i + d * 60) * 1e3;
  return We(e, u.getTime() - b);
}
function Bd(e, t) {
  return Ml(e, -t);
}
function Yr() {
  return V(), G(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ke("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      ke("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ke("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ke("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Yr.compatConfig = {
  MODE: 3
};
function Ld() {
  return V(), G(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ke("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      ke("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Ld.compatConfig = {
  MODE: 3
};
function El() {
  return V(), G(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ke("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
El.compatConfig = {
  MODE: 3
};
function Rl() {
  return V(), G(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ke("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Rl.compatConfig = {
  MODE: 3
};
function $l() {
  return V(), G(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ke("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      ke("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
$l.compatConfig = {
  MODE: 3
};
function Nl() {
  return V(), G(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ke("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Nl.compatConfig = {
  MODE: 3
};
function Vl() {
  return V(), G(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      ke("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Vl.compatConfig = {
  MODE: 3
};
function mu(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function Db(e) {
  return (t) => dn(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const Ob = (e, t, n) => {
  const r = [1, 2, 3, 4, 5, 6, 7];
  let a;
  if (e !== null)
    try {
      a = r.map(Db(e));
    } catch {
      a = r.map(mu(t));
    }
  else
    a = r.map(mu(t));
  const o = a.slice(0, n), s = a.slice(n + 1, a.length);
  return [a[n]].concat(...s).concat(...o);
}, Il = (e, t) => {
  const n = [];
  for (let r = +e[0]; r <= +e[1]; r++)
    n.push({ value: +r, text: `${r}` });
  return t ? n.reverse() : n;
}, Yd = (e, t, n) => {
  const r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((o) => {
    const s = o < 10 ? `0${o}` : o;
    return /* @__PURE__ */ new Date(`2017-${s}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const o = n === "long" ? "MMMM" : "MMM";
      return r.map((s, l) => {
        const i = dn(s, o, { locale: e });
        return {
          text: i.charAt(0).toUpperCase() + i.substring(1),
          value: l
        };
      });
    } catch {
    }
  const a = new Intl.DateTimeFormat(t, { month: n, timeZone: "UTC" });
  return r.map((o, s) => {
    const l = a.format(o);
    return {
      text: l.charAt(0).toUpperCase() + l.substring(1),
      value: s
    };
  });
}, Eb = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], gt = (e) => {
  const t = S(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Rb = (e) => ({ type: "dot", ...e ?? {} }), jd = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Fl = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, bt = (e) => e, hu = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, vu = (e) => e === null, Hd = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, $b = (e) => {
  const t = [], n = (r) => r.filter((a) => a);
  for (let r = 0; r < e.length; r += 3) {
    const a = [e[r], e[r + 1], e[r + 2]];
    t.push(n(a));
  }
  return t;
}, ya = (e, t, n) => {
  const r = n != null, a = t != null;
  if (!r && !a)
    return !1;
  const o = +n, s = +t;
  return r && a ? +e > o || +e < s : r ? +e > o : a ? +e < s : !1;
}, Vr = (e, t) => $b(e).map((n) => n.map((r) => {
  const { active: a, disabled: o, isBetween: s, highlighted: l } = t(r);
  return {
    ...r,
    active: a,
    disabled: o,
    className: {
      dp__overlay_cell_active: a,
      dp__overlay_cell: !a,
      dp__overlay_cell_disabled: o,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: o && a,
      dp__cell_in_between: s,
      "dp--highlighted": l
    }
  };
})), In = (e, t, n = !1) => {
  e && t.allowStopPropagation && (n && e.stopImmediatePropagation(), e.stopPropagation());
}, Nb = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function Vb(e, t) {
  let n = [...document.querySelectorAll(Nb())];
  n = n.filter((a) => !e.contains(a) || a.hasAttribute("data-datepicker-instance"));
  const r = n.indexOf(e);
  if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length))
    return n[r + (t ? -1 : 1)];
}
const Ib = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), Bl = (e) => dn(e, "dd-MM-yyyy"), as = (e) => Array.isArray(e), lo = (e, t) => t.get(Bl(e)), Fb = (e, t) => e ? t ? t instanceof Map ? !!lo(e, t) : t(Z(e)) : !1 : !0, yu = (e, t, n, r, a) => {
  const o = Ys(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return oa(o) && Td(o) ? r || a ? o : Ze(o, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, Bb = (e, t, n, r, a) => {
  const o = Array.isArray(n) ? n[0] : n;
  if (typeof t == "string")
    return yu(e, t, o, r, a);
  if (Array.isArray(t)) {
    let s = null;
    for (const l of t)
      if (s = yu(e, l, o, r, a), s)
        break;
    return s;
  }
  return typeof t == "function" ? t(e) : null;
}, Z = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Lb = (e, t, n) => {
  if (t) {
    const a = (e.getMonth() + 1).toString().padStart(2, "0"), o = e.getDate().toString().padStart(2, "0"), s = e.getHours().toString().padStart(2, "0"), l = e.getMinutes().toString().padStart(2, "0"), i = n ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${a}-${o}T${s}:${l}:${i}.000Z`;
  }
  const r = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(r).toISOString();
}, Ft = (e) => {
  let t = Z(JSON.parse(JSON.stringify(e)));
  return t = Id(t, 0), t = Fd(t, 0), t = Ol(t, 0), t = Dl(t, 0), t;
}, Fn = (e, t, n, r) => {
  let a = e ? Z(e) : Z();
  return (t || t === 0) && (a = Id(a, +t)), (n || n === 0) && (a = Fd(a, +n)), (r || r === 0) && (a = Ol(a, +r)), Dl(a, 0);
}, it = (e, t) => !e || !t ? !1 : va(Ft(e), Ft(t)), Be = (e, t) => !e || !t ? !1 : xr(Ft(e), Ft(t)), ft = (e, t) => !e || !t ? !1 : ha(Ft(e), Ft(t)), Eo = (e, t, n) => e != null && e[0] && e != null && e[1] ? ft(n, e[0]) && it(n, e[1]) : e != null && e[0] && t ? ft(n, e[0]) && it(n, t) || it(n, e[0]) && ft(n, t) : !1, qt = (e) => {
  const t = Ze(new Date(e), { date: 1 });
  return Ft(t);
}, os = (e, t, n) => t && (n || n === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((r) => r === t ? [r, n] : [r, isNaN(+e[r]) ? void 0 : +e[r]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, fr = (e) => ({
  hours: Kt(e),
  minutes: fn(e),
  seconds: $r(e)
}), Ud = (e, t) => {
  if (t) {
    const n = $e(Z(t));
    if (n > e)
      return 12;
    if (n === e)
      return Fe(Z(t));
  }
}, Wd = (e, t) => {
  if (t) {
    const n = $e(Z(t));
    return n < e ? -1 : n === e ? Fe(Z(t)) : void 0;
  }
}, Ir = (e) => {
  if (e)
    return $e(Z(e));
}, qd = (e, t) => {
  const n = ft(e, t) ? t : e, r = ft(t, e) ? t : e;
  return Pd({ start: n, end: r });
}, Yb = (e) => {
  const t = Gt(e, 1);
  return { month: Fe(t), year: $e(t) };
}, vn = (e, t) => {
  const n = mn(e, { weekStartsOn: +t }), r = Fg(e, { weekStartsOn: +t });
  return [n, r];
}, zd = (e, t) => {
  const n = {
    hours: Kt(Z()),
    minutes: fn(Z()),
    seconds: t ? $r(Z()) : 0
  };
  return Object.assign(n, e);
}, Rn = (e, t, n) => [Ze(Z(e), { date: 1 }), Ze(Z(), { month: t, year: n, date: 1 })], yn = (e, t, n) => {
  let r = e ? Z(e) : Z();
  return (t || t === 0) && (r = Vd(r, t)), n && (r = un(r, n)), r;
}, Gd = (e, t, n, r, a) => {
  if (!r || a && !t || !a && !n)
    return !1;
  const o = a ? Gt(e, 1) : Nr(e, 1), s = [Fe(o), $e(o)];
  return a ? !Hb(...s, t) : !jb(...s, n);
}, jb = (e, t, n) => it(...Rn(n, e, t)) || Be(...Rn(n, e, t)), Hb = (e, t, n) => ft(...Rn(n, e, t)) || Be(...Rn(n, e, t)), Kd = (e, t, n, r, a, o, s) => {
  if (typeof t == "function" && !s)
    return t(e);
  const l = n ? { locale: n } : void 0;
  return Array.isArray(e) ? `${dn(e[0], o, l)}${a && !e[1] ? "" : r}${e[1] ? dn(e[1], o, l) : ""}` : dn(e, o, l);
}, wr = (e) => {
  if (e)
    return null;
  throw new Error(Fl.prop("partial-range"));
}, $a = (e, t) => {
  if (t)
    return e();
  throw new Error(Fl.prop("range"));
}, js = (e) => Array.isArray(e) ? oa(e[0]) && (e[1] ? oa(e[1]) : !0) : e ? oa(e) : !1, Ub = (e, t) => Ze(t ?? Z(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), ss = (e, t, n, r) => {
  if (!e)
    return !0;
  if (r) {
    const a = n === "max" ? va(e, t) : ha(e, t), o = { seconds: 0, milliseconds: 0 };
    return a || xr(Ze(e, o), Ze(t, o));
  }
  return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, ls = (e, t, n) => e ? Ub(e, t) : Z(n ?? t), gu = (e, t, n, r, a) => {
  if (Array.isArray(r)) {
    const s = ls(e, r[0], t), l = ls(e, r[1], t);
    return ss(r[0], s, n, !!t) && ss(r[1], l, n, !!t) && a;
  }
  const o = ls(e, r, t);
  return ss(r, o, n, !!t) && a;
}, is = (e) => Ze(Z(), fr(e)), Wb = (e, t) => e instanceof Map ? Array.from(e.values()).filter((n) => $e(Z(n)) === t).map((n) => Fe(n)) : [], Xd = (e, t, n) => typeof e == "function" ? e({ month: t, year: n }) : !!e.months.find((r) => r.month === t && r.year === n), Ll = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), Gr = bn({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Qd = () => {
  const e = (n) => {
    Gr.menuFocused = n;
  }, t = (n) => {
    Gr.shiftKeyInMenu !== n && (Gr.shiftKeyInMenu = n);
  };
  return {
    control: ee(() => ({ shiftKeyInMenu: Gr.shiftKeyInMenu, menuFocused: Gr.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, et = bn({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), us = J(null), Na = J(!1), cs = J(!1), ds = J(!1), fs = J(!1), St = J(0), kt = J(0), zn = () => {
  const e = ee(() => Na.value ? [...et.selectionGrid, et.actionRow].filter((d) => d.length) : cs.value ? [
    ...et.timePicker[0],
    ...et.timePicker[1],
    fs.value ? [] : [us.value],
    et.actionRow
  ].filter((d) => d.length) : ds.value ? [...et.monthPicker, et.actionRow] : [et.monthYear, ...et.calendar, et.time, et.actionRow].filter((d) => d.length)), t = (d) => {
    St.value = d ? St.value + 1 : St.value - 1;
    let p = null;
    e.value[kt.value] && (p = e.value[kt.value][St.value]), p || (St.value = d ? St.value - 1 : St.value + 1);
  }, n = (d) => {
    kt.value === 0 && !d || kt.value === e.value.length && d || (kt.value = d ? kt.value + 1 : kt.value - 1, e.value[kt.value] ? e.value[kt.value] && !e.value[kt.value][St.value] && St.value !== 0 && (St.value = e.value[kt.value].length - 1) : kt.value = d ? kt.value - 1 : kt.value + 1);
  }, r = (d) => {
    let p = null;
    e.value[kt.value] && (p = e.value[kt.value][St.value]), p ? p.focus({ preventScroll: !Na.value }) : St.value = d ? St.value - 1 : St.value + 1;
  }, a = () => {
    t(!0), r(!0);
  }, o = () => {
    t(!1), r(!1);
  }, s = () => {
    n(!1), r(!0);
  }, l = () => {
    n(!0), r(!0);
  }, i = (d, p) => {
    et[p] = d;
  }, c = (d, p) => {
    et[p] = d;
  }, u = () => {
    St.value = 0, kt.value = 0;
  };
  return {
    buildMatrix: i,
    buildMultiLevelMatrix: c,
    setTimePickerBackRef: (d) => {
      us.value = d;
    },
    setSelectionGrid: (d) => {
      Na.value = d, u(), d || (et.selectionGrid = []);
    },
    setTimePicker: (d, p = !1) => {
      cs.value = d, fs.value = p, u(), d || (et.timePicker[0] = [], et.timePicker[1] = []);
    },
    setTimePickerElements: (d, p = 0) => {
      et.timePicker[p] = d;
    },
    arrowRight: a,
    arrowLeft: o,
    arrowUp: s,
    arrowDown: l,
    clearArrowNav: () => {
      et.monthYear = [], et.calendar = [], et.time = [], et.actionRow = [], et.selectionGrid = [], et.timePicker[0] = [], et.timePicker[1] = [], Na.value = !1, cs.value = !1, fs.value = !1, ds.value = !1, u(), us.value = null;
    },
    setMonthPicker: (d) => {
      ds.value = d, u();
    },
    refSets: et
    // exposed for testing
  };
}, Hn = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), Jd = (e, t) => Hs(e, t) || Z(), qb = (e, t) => t.dateInTz ? Hn(new Date(e), t.dateInTz) : Z(e), Hs = (e, t) => {
  if (!e)
    return null;
  if (!t)
    return Z(e);
  const n = Z(e);
  return t.exactMatch ? qb(e, t) : Hn(n, t.timezone);
}, bu = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), zb = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  calendarWrap: "Calendar wrapper",
  calendarDays: "Calendar days",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t) => `Increment ${t}`,
  decrementValue: (t) => `Decrement ${t}`,
  openTpOverlay: (t) => `Open ${t} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  ...e ?? {}
}), wu = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, Gb = (e) => {
  const t = typeof e == "object" && e, n = {
    static: !0,
    solo: !1
  };
  if (!e)
    return { ...n, count: wu(!1) };
  const r = t ? e : {}, a = t ? r.count ?? !0 : e, o = wu(a);
  return Object.assign(n, r, { count: o });
}, Kb = (e, t, n) => e || (typeof n == "string" ? n : t), Xb = (e) => typeof e == "boolean" ? e ? bu({}) : !1 : bu(e), Qb = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, Jb = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), Zb = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), ew = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, tw = (e) => ({ allowStopPropagation: !0, closeOnScroll: !1, modeHeight: 255, allowPreventDefault: !1, closeOnClearValue: !0, closeOnAutoApply: !0, noSwipe: !1, keepActionRow: !1, onClickOutside: void 0, tabOutClosesMenu: !0, ...e ?? {} }), nw = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((n) => Z(n)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, rw = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, aw = (e, t) => typeof e == "object" ? { enabled: !0, ...{
  noDisabledRange: !1,
  showLastInRange: !0,
  minMaxRawRange: !1,
  partialRange: !0,
  disableTimeRangeValidation: !1,
  maxRange: void 0,
  minRange: void 0,
  autoRange: void 0,
  fixedStart: !1,
  fixedEnd: !1
}, ...e } : {
  enabled: e,
  noDisabledRange: t.noDisabledRange,
  showLastInRange: t.showLastInRange,
  minMaxRawRange: t.minMaxRawRange,
  partialRange: t.partialRange,
  disableTimeRangeValidation: t.disableTimeRangeValidation,
  maxRange: t.maxRange,
  minRange: t.minRange,
  autoRange: t.autoRange,
  fixedStart: t.fixedStart,
  fixedEnd: t.fixedEnd
}, ow = (e, t) => e ? typeof e == "string" ? { timezone: e, exactMatch: !1, dateInTz: void 0, emitTimezone: t } : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: t ?? e.emitTimezone
} : { timezone: void 0, exactMatch: !1, emitTimezone: t }, ps = (e, t) => new Map(
  e.map((n) => {
    const r = Jd(n, t);
    return [Bl(r), r];
  })
), sw = (e, t) => e.length ? new Map(
  e.map((n) => {
    const r = Jd(n.date, t);
    return [Bl(r), n];
  })
) : null, lw = (e, t, n, r, a, o, s) => ({
  minDate: Hs(e, s),
  maxDate: Hs(t, s),
  disabledDates: as(n) ? ps(n, s) : n,
  allowedDates: as(r) ? ps(r, s) : null,
  highlight: typeof a == "object" && as(a == null ? void 0 : a.dates) ? ps(a.dates, s) : a,
  markers: sw(o, s)
}), st = (e) => {
  const t = () => {
    const P = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${P}` : `hh:mm${P} aa`;
  }, n = () => {
    var P;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((P = T.value) == null ? void 0 : P.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, r = (P) => zd(P, e.enableSeconds), a = () => y.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [r(e.startTime[0]), r(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? r(e.startTime) : null, o = ee(() => Gb(e.multiCalendars)), s = ee(() => a()), l = ee(() => zb(e.ariaLabels)), i = ee(() => Jb(e.filters)), c = ee(() => Xb(e.transitions)), u = ee(() => Zb(e.actionRow)), d = ee(
    () => Kb(e.previewFormat, e.format, n())
  ), p = ee(() => Qb(e.textInput)), b = ee(() => ew(e.inline)), g = ee(() => tw(e.config)), v = ee(() => nw(e.highlight)), T = ee(() => rw(e.weekNumbers)), $ = ee(() => ow(e.timezone, e.emitTimezone)), I = ee(
    () => lw(
      e.minDate,
      e.maxDate,
      e.disabledDates,
      e.allowedDates,
      v.value,
      e.markers,
      $.value
    )
  ), y = ee(
    () => aw(e.range, {
      minMaxRawRange: !1,
      maxRange: e.maxRange,
      minRange: e.minRange,
      noDisabledRange: e.noDisabledRange,
      showLastInRange: e.showLastInRange,
      partialRange: e.partialRange,
      disableTimeRangeValidation: e.disableTimeRangeValidation,
      autoRange: e.autoRange,
      fixedStart: e.fixedStart,
      fixedEnd: e.fixedEnd
    })
  );
  return {
    defaultedTransitions: c,
    defaultedMultiCalendars: o,
    defaultedStartTime: s,
    defaultedAriaLabels: l,
    defaultedFilters: i,
    defaultedActionRow: u,
    defaultedPreviewFormat: d,
    defaultedTextInput: p,
    defaultedInline: b,
    defaultedConfig: g,
    defaultedHighlight: v,
    defaultedWeekNumbers: T,
    defaultedRange: y,
    propDates: I,
    defaultedTz: $,
    getDefaultPattern: n,
    getDefaultStartTime: a
  };
}, iw = (e, t, n) => {
  const r = J(), { defaultedTextInput: a, defaultedRange: o, defaultedTz: s, getDefaultPattern: l } = st(t), i = J(""), c = Wa(t, "format");
  ut(
    r,
    () => {
      e("internal-model-change", r.value);
    },
    { deep: !0 }
  ), ut(c, () => {
    N();
  });
  const u = (m, f, R = !1) => Kd(
    m,
    t.format,
    t.formatLocale,
    a.value.rangeSeparator,
    t.modelAuto,
    f ?? l(),
    R
  ), d = (m) => m ? t.modelType ? k(m) : {
    hours: Kt(m),
    minutes: fn(m),
    seconds: t.enableSeconds ? $r(m) : 0
  } : null, p = (m) => t.modelType ? k(m) : { month: Fe(m), year: $e(m) }, b = (m) => Array.isArray(m) ? t.multiDates ? m.map((f) => g(f, un(Z(), f))) : $a(
    () => [
      un(Z(), m[0]),
      m[1] ? un(Z(), m[1]) : wr(o.value.partialRange)
    ],
    o.value.enabled
  ) : un(Z(), +m), g = (m, f) => (typeof m == "string" || typeof m == "number") && t.modelType ? w(m) : f, v = (m) => Array.isArray(m) ? [
    g(
      m[0],
      Fn(null, +m[0].hours, +m[0].minutes, m[0].seconds)
    ),
    g(
      m[1],
      Fn(null, +m[1].hours, +m[1].minutes, m[1].seconds)
    )
  ] : g(m, Fn(null, m.hours, m.minutes, m.seconds)), T = (m) => {
    const f = Ze(Z(), { date: 1 });
    return Array.isArray(m) ? t.multiDates ? m.map((R) => g(R, yn(f, +R.month, +R.year))) : $a(
      () => [
        g(m[0], yn(f, +m[0].month, +m[0].year)),
        g(
          m[1],
          m[1] ? yn(f, +m[1].month, +m[1].year) : wr(o.value.partialRange)
        )
      ],
      o.value.enabled
    ) : g(m, yn(f, +m.month, +m.year));
  }, $ = (m) => {
    if (Array.isArray(m))
      return m.map((f) => w(f));
    throw new Error(Fl.dateArr("multi-dates"));
  }, I = (m) => {
    if (Array.isArray(m) && o.value.enabled) {
      const f = m[0], R = m[1];
      return [
        Z(Array.isArray(f) ? f[0] : null),
        Z(Array.isArray(R) ? R[0] : null)
      ];
    }
    return Z(m[0]);
  }, y = (m) => t.modelAuto ? Array.isArray(m) ? [w(m[0]), w(m[1])] : t.autoApply ? [w(m)] : [w(m), null] : Array.isArray(m) ? $a(
    () => m[1] ? [
      w(m[0]),
      m[1] ? w(m[1]) : wr(o.value.partialRange)
    ] : [w(m[0])],
    o.value.enabled
  ) : w(m), P = () => {
    Array.isArray(r.value) && o.value.enabled && r.value.length === 1 && r.value.push(wr(o.value.partialRange));
  }, D = () => {
    const m = r.value;
    return [
      k(m[0]),
      m[1] ? k(m[1]) : wr(o.value.partialRange)
    ];
  }, B = () => r.value[1] ? D() : k(bt(r.value[0])), H = () => (r.value || []).map((m) => k(m)), _ = () => (P(), t.modelAuto ? B() : t.multiDates ? H() : Array.isArray(r.value) ? $a(() => D(), o.value.enabled) : k(bt(r.value))), O = (m) => !m || Array.isArray(m) && !m.length ? null : t.timePicker ? v(bt(m)) : t.monthPicker ? T(bt(m)) : t.yearPicker ? b(bt(m)) : t.multiDates ? $(bt(m)) : t.weekPicker ? I(bt(m)) : y(bt(m)), W = (m) => {
    const f = O(m);
    js(bt(f)) ? (r.value = bt(f), N()) : (r.value = null, i.value = "");
  }, A = () => {
    const m = (f) => dn(f, a.value.format);
    return `${m(r.value[0])} ${a.value.rangeSeparator} ${r.value[1] ? m(r.value[1]) : ""}`;
  }, M = () => n.value && r.value ? Array.isArray(r.value) ? A() : dn(r.value, a.value.format) : u(r.value), F = () => r.value ? t.multiDates ? r.value.map((m) => u(m)).join("; ") : a.value.enabled && typeof a.value.format == "string" ? M() : u(r.value) : "", N = () => {
    !t.format || typeof t.format == "string" || a.value.enabled && typeof a.value.format == "string" ? i.value = F() : i.value = t.format(r.value);
  }, w = (m) => {
    if (t.utc) {
      const f = new Date(m);
      return t.utc === "preserve" ? new Date(f.getTime() + f.getTimezoneOffset() * 6e4) : f;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? new Date(m) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Ys(m, l(), /* @__PURE__ */ new Date()) : Ys(m, t.modelType, /* @__PURE__ */ new Date()) : new Date(m);
  }, k = (m) => m ? t.utc ? Lb(m, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +m : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? u(m) : u(m, t.modelType, !0) : m : "", q = (m, f = !1) => {
    if (e("update:model-value", m), s.value.emitTimezone && f) {
      const R = Array.isArray(m) ? m.map((X) => Hn(bt(X), s.value.emitTimezone)) : Hn(bt(m), s.value.emitTimezone);
      e("update:model-timezone-value", R);
    }
  }, re = (m) => Array.isArray(r.value) ? t.multiDates ? r.value.map((f) => m(f)) : [
    m(r.value[0]),
    r.value[1] ? m(r.value[1]) : wr(o.value.partialRange)
  ] : m(bt(r.value)), fe = () => {
    if (Array.isArray(r.value)) {
      const m = vn(r.value[0], t.weekStart), f = r.value[1] ? vn(r.value[1], t.weekStart) : [];
      return [m.map((R) => Z(R)), f.map((R) => Z(R))];
    }
    return vn(r.value, t.weekStart).map((m) => Z(m));
  }, te = (m) => q(bt(re(m)));
  return {
    inputValue: i,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? o.value.enabled ? o.value.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: W,
    formatInputValue: N,
    emitModelValue: () => (N(), t.monthPicker ? te(p) : t.timePicker ? te(d) : t.yearPicker ? te($e) : t.weekPicker ? e("update:model-value", fe()) : q(_(), !0))
  };
}, uw = (e, t) => {
  const { defaultedFilters: n, propDates: r } = st(e), { validateMonthYearInRange: a } = Gn(e), o = (u, d) => {
    let p = u;
    return n.value.months.includes(Fe(p)) ? (p = d ? Gt(u, 1) : Nr(u, 1), o(p, d)) : p;
  }, s = (u, d) => {
    let p = u;
    return n.value.years.includes($e(p)) ? (p = d ? Ml(u, 1) : Bd(u, 1), s(p, d)) : p;
  }, l = (u, d = !1) => {
    const p = Ze(Z(), { month: e.month, year: e.year });
    let b = u ? Gt(p, 1) : Nr(p, 1);
    e.disableYearSelect && (b = un(b, e.year));
    let g = Fe(b), v = $e(b);
    n.value.months.includes(g) && (b = o(b, u), g = Fe(b), v = $e(b)), n.value.years.includes(v) && (b = s(b, u), v = $e(b)), a(g, v, u, e.preventMinMaxNavigation) && i(g, v, d);
  }, i = (u, d, p) => {
    t("update-month-year", { month: u, year: d, fromNav: p });
  }, c = ee(() => (u) => Gd(
    Ze(Z(), { month: e.month, year: e.year }),
    r.value.maxDate,
    r.value.minDate,
    e.preventMinMaxNavigation,
    u
  ));
  return { handleMonthYearChange: l, isDisabled: c, updateMonthYear: i };
};
var _r = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(_r || {}), Ut = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Ut || {}), tr = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(tr || {}), pr = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(pr || {}), rn = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(rn || {});
const cw = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: n,
  pickerWrapperRef: r,
  inline: a,
  emit: o,
  props: s,
  slots: l
}) => {
  const i = J({}), c = J(!1), u = J({
    top: "0",
    left: "0"
  }), d = J(!1), p = Wa(s, "teleportCenter");
  ut(p, () => {
    u.value = JSON.parse(JSON.stringify({})), P();
  });
  const b = (w) => {
    if (s.teleport) {
      const k = w.getBoundingClientRect();
      return {
        left: k.left + window.scrollX,
        top: k.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, g = (w, k) => {
    u.value.left = `${w + k - i.value.width}px`;
  }, v = (w) => {
    u.value.left = `${w}px`;
  }, T = (w, k) => {
    s.position === _r.left && v(w), s.position === _r.right && g(w, k), s.position === _r.center && (u.value.left = `${w + k / 2 - i.value.width / 2}px`);
  }, $ = (w) => {
    const { width: k, height: q } = w.getBoundingClientRect(), { top: re, left: fe } = s.altPosition ? s.altPosition(w) : b(w);
    return { top: +re, left: +fe, width: k, height: q };
  }, I = () => {
    u.value.left = "50%", u.value.top = "50%", u.value.transform = "translate(-50%, -50%)", u.value.position = "fixed", delete u.value.opacity;
  }, y = () => {
    const w = gt(n), { top: k, left: q, transform: re } = s.altPosition(w);
    u.value = { top: `${k}px`, left: `${q}px`, transform: re ?? "" };
  }, P = (w = !0) => {
    var k;
    if (!a.value.enabled) {
      if (p.value)
        return I();
      if (s.altPosition !== null)
        return y();
      if (w) {
        const q = s.teleport ? (k = t.value) == null ? void 0 : k.$el : e.value;
        q && (i.value = q.getBoundingClientRect()), o("recalculate-position");
      }
      return A();
    }
  }, D = ({ inputEl: w, left: k, width: q }) => {
    window.screen.width > 768 && !c.value && T(k, q), _(w);
  }, B = (w) => {
    const { top: k, left: q, height: re, width: fe } = $(w);
    u.value.top = `${re + k + +s.offset}px`, d.value = !1, c.value || (u.value.left = `${q + fe / 2 - i.value.width / 2}px`), D({ inputEl: w, left: q, width: fe });
  }, H = (w) => {
    const { top: k, left: q, width: re } = $(w);
    u.value.top = `${k - +s.offset - i.value.height}px`, d.value = !0, D({ inputEl: w, left: q, width: re });
  }, _ = (w) => {
    if (s.autoPosition) {
      const { left: k, width: q } = $(w), { left: re, right: fe } = i.value;
      if (!c.value) {
        if (Math.abs(re) !== Math.abs(fe)) {
          if (re <= 0)
            return c.value = !0, v(k);
          if (fe >= document.documentElement.clientWidth)
            return c.value = !0, g(k, q);
        }
        return T(k, q);
      }
    }
  }, O = () => {
    const w = gt(n);
    if (w) {
      const { height: k } = i.value, { top: q, height: re } = w.getBoundingClientRect(), fe = window.innerHeight - q - re, te = q;
      return k <= fe ? tr.bottom : k > fe && k <= te ? tr.top : fe >= te ? tr.bottom : tr.top;
    }
    return tr.bottom;
  }, W = (w) => O() === tr.bottom ? B(w) : H(w), A = () => {
    const w = gt(n);
    if (w)
      return s.autoPosition ? W(w) : B(w);
  }, M = function(w) {
    if (w) {
      const k = w.scrollHeight > w.clientHeight, q = window.getComputedStyle(w).overflowY.indexOf("hidden") !== -1;
      return k && !q;
    }
    return !0;
  }, F = function(w) {
    return !w || w === document.body || w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : M(w) ? w : F(w.parentNode);
  }, N = (w) => {
    if (w)
      switch (s.position) {
        case _r.left:
          return { left: 0, transform: "translateX(0)" };
        case _r.right:
          return { left: `${w.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${w.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: d,
    menuStyle: u,
    xCorrect: c,
    setMenuPosition: P,
    getScrollableParent: F,
    shadowRender: (w, k) => {
      var q, re, fe;
      const te = document.createElement("div"), m = (q = gt(n)) == null ? void 0 : q.getBoundingClientRect();
      te.setAttribute("id", "dp--temp-container");
      const f = (re = r.value) != null && re.clientWidth ? r.value : document.body;
      f.append(te);
      const R = N(m), X = Tc(
        w,
        {
          ...k,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...R }
        },
        Object.fromEntries(
          Object.keys(l).filter((ce) => ["right-sidebar", "left-sidebar"].includes(ce)).map((ce) => [ce, l[ce]])
        )
      );
      $i(X, te), i.value = (fe = X.el) == null ? void 0 : fe.getBoundingClientRect(), $i(null, te), f.removeChild(te);
    }
  };
}, Sn = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] }
], dw = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], fw = {
  all: () => Sn,
  monthYear: () => Sn.filter((e) => e.use.includes("month-year")),
  input: () => dw,
  timePicker: () => Sn.filter((e) => e.use.includes("time")),
  action: () => Sn.filter((e) => e.use.includes("action")),
  calendar: () => Sn.filter((e) => e.use.includes("calendar")),
  menu: () => Sn.filter((e) => e.use.includes("menu")),
  shared: () => Sn.filter((e) => e.use.includes("shared")),
  yearMode: () => Sn.filter((e) => e.use.includes("year-mode"))
}, Vt = (e, t, n) => {
  const r = [];
  return fw[t]().forEach((a) => {
    e[a.name] && r.push(a.name);
  }), n != null && n.length && n.forEach((a) => {
    a.slot && r.push(a.slot);
  }), r;
}, xa = (e) => {
  const t = ee(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), n = ee(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: n };
}, ka = (e, t) => {
  const { defaultedRange: n, defaultedTz: r } = st(e), a = Z(Hn(Z(), r.value.timezone)), o = J([{ month: Fe(a), year: $e(a) }]), s = bn({
    hours: n.value.enabled ? [Kt(a), Kt(a)] : Kt(a),
    minutes: n.value.enabled ? [fn(a), fn(a)] : fn(a),
    seconds: n.value.enabled ? [0, 0] : 0
  }), l = ee({
    get: () => e.internalModelValue,
    set: (u) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", u);
    }
  }), i = ee(
    () => (u) => o.value[u] ? o.value[u].month : 0
  ), c = ee(
    () => (u) => o.value[u] ? o.value[u].year : 0
  );
  return {
    calendars: o,
    time: s,
    modelValue: l,
    month: i,
    year: c
  };
}, pw = (e, t) => {
  const { defaultedMultiCalendars: n, defaultedHighlight: r, defaultedTz: a, propDates: o, defaultedRange: s } = st(t), { isDisabled: l } = Gn(t), i = J(null), c = J(Hn(/* @__PURE__ */ new Date(), a.value.timezone)), u = (f) => {
    !f.current && t.hideOffsetDates || (i.value = f.value);
  }, d = () => {
    i.value = null;
  }, p = (f) => Array.isArray(e.value) && s.value.enabled && e.value[0] && i.value ? f ? ft(i.value, e.value[0]) : it(i.value, e.value[0]) : !0, b = (f, R) => {
    const X = () => e.value ? R ? e.value[0] || null : e.value[1] : null, ce = e.value && Array.isArray(e.value) ? X() : null;
    return Be(Z(f.value), ce);
  }, g = (f) => {
    const R = Array.isArray(e.value) ? e.value[0] : null;
    return f ? !it(i.value ?? null, R) : !0;
  }, v = (f, R = !0) => (s.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !f.current ? !1 : Be(Z(f.value), e.value[R ? 0 : 1]) : s.value.enabled ? b(f, R) && g(R) || Be(f.value, Array.isArray(e.value) ? e.value[0] : null) && p(R) : !1, T = (f, R, X) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? f ? !1 : X ? ft(e.value[0], R.value) : it(e.value[0], R.value) : !1, $ = (f) => !e.value || t.hideOffsetDates && !f.current ? !1 : s.value.enabled ? t.modelAuto && Array.isArray(e.value) ? Be(f.value, e.value[0] ? e.value[0] : c.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((R) => Be(R, f.value)) : Be(f.value, e.value ? e.value : c.value), I = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const R = Wt(i.value, +s.value.autoRange), X = vn(Z(i.value), t.weekStart);
        return t.weekPicker ? Be(X[1], Z(f.value)) : Be(R, Z(f.value));
      }
      return !1;
    }
    return !1;
  }, y = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (i.value) {
        const R = Wt(i.value, +s.value.autoRange);
        if (t.hideOffsetDates && !f.current)
          return !1;
        const X = vn(Z(i.value), t.weekStart);
        return t.weekPicker ? ft(f.value, X[0]) && it(f.value, X[1]) : ft(f.value, i.value) && it(f.value, R);
      }
      return !1;
    }
    return !1;
  }, P = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const R = vn(Z(i.value), t.weekStart);
        return t.weekPicker ? Be(R[0], f.value) : Be(i.value, f.value);
      }
      return !1;
    }
    return !1;
  }, D = (f) => Eo(e.value, i.value, f.value), B = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, H = () => t.modelAuto ? jd(t.internalModelValue) : !0, _ = (f) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const R = s.value.enabled ? !v(f) && !v(f, !1) : !0;
    return !l(f.value) && !$(f) && !(!f.current && t.hideOffsetDates) && R;
  }, O = (f) => s.value.enabled ? t.modelAuto ? B() && $(f) : !1 : $(f), W = (f) => r.value ? Fb(f.value, o.value.highlight) : !1, A = (f) => {
    const R = l(f.value);
    return R && (typeof r.value == "function" ? !r.value(f.value, R) : !r.value.options.highlightDisabled);
  }, M = (f) => {
    var R;
    return typeof r.value == "function" ? r.value(f.value) : (R = r.value.weekdays) == null ? void 0 : R.includes(f.value.getDay());
  }, F = (f) => (s.value.enabled || t.weekPicker) && (!(n.value.count > 0) || f.current) && H() && !(!f.current && t.hideOffsetDates) && !$(f) ? D(f) : !1, N = (f) => {
    const { isRangeStart: R, isRangeEnd: X } = re(f), ce = s.value.enabled ? R || X : !1;
    return {
      dp__cell_offset: !f.current,
      dp__pointer: !t.disabled && !(!f.current && t.hideOffsetDates) && !l(f.value),
      dp__cell_disabled: l(f.value),
      dp__cell_highlight: !A(f) && (W(f) || M(f)) && !O(f) && !ce && !P(f) && !(F(f) && t.weekPicker) && !X,
      dp__cell_highlight_active: !A(f) && (W(f) || M(f)) && O(f),
      dp__today: !t.noToday && Be(f.value, c.value) && f.current,
      "dp--past": it(f.value, c.value),
      "dp--future": ft(f.value, c.value)
    };
  }, w = (f) => ({
    dp__active_date: O(f),
    dp__date_hover: _(f)
  }), k = (f) => {
    if (e.value && !Array.isArray(e.value)) {
      const R = vn(e.value, t.weekStart);
      return {
        ...te(f),
        dp__range_start: Be(R[0], f.value),
        dp__range_end: Be(R[1], f.value),
        dp__range_between_week: ft(f.value, R[0]) && it(f.value, R[1])
      };
    }
    return {
      ...te(f)
    };
  }, q = (f) => {
    if (e.value && Array.isArray(e.value)) {
      const R = vn(e.value[0], t.weekStart), X = e.value[1] ? vn(e.value[1], t.weekStart) : [];
      return {
        ...te(f),
        dp__range_start: Be(R[0], f.value) || Be(X[0], f.value),
        dp__range_end: Be(R[1], f.value) || Be(X[1], f.value),
        dp__range_between_week: ft(f.value, R[0]) && it(f.value, R[1]) || ft(f.value, X[0]) && it(f.value, X[1]),
        dp__range_between: ft(f.value, R[1]) && it(f.value, X[0])
      };
    }
    return {
      ...te(f)
    };
  }, re = (f) => {
    const R = n.value.count > 0 ? f.current && v(f) && H() : v(f) && H(), X = n.value.count > 0 ? f.current && v(f, !1) && H() : v(f, !1) && H();
    return { isRangeStart: R, isRangeEnd: X };
  }, fe = (f) => {
    const { isRangeStart: R, isRangeEnd: X } = re(f);
    return {
      dp__range_start: R,
      dp__range_end: X,
      dp__range_between: F(f),
      dp__date_hover_start: T(_(f), f, !0),
      dp__date_hover_end: T(_(f), f, !1)
    };
  }, te = (f) => ({
    ...fe(f),
    dp__cell_auto_range: y(f),
    dp__cell_auto_range_start: P(f),
    dp__cell_auto_range_end: I(f)
  }), m = (f) => s.value.enabled ? s.value.autoRange ? te(f) : t.modelAuto ? { ...w(f), ...fe(f) } : t.weekPicker ? q(f) : fe(f) : t.weekPicker ? k(f) : w(f);
  return {
    setHoverDate: u,
    clearHoverDate: d,
    getDayClassData: (f) => t.hideOffsetDates && !f.current ? {} : {
      ...N(f),
      ...m(f),
      [t.dayClass ? t.dayClass(f.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    }
  };
}, Gn = (e) => {
  const { defaultedFilters: t, defaultedRange: n, propDates: r } = st(e), a = (A) => r.value.disabledDates ? typeof r.value.disabledDates == "function" ? r.value.disabledDates(Z(A)) : !!lo(A, r.value.disabledDates) : !1, o = (A) => {
    const M = r.value.maxDate ? ft(A, r.value.maxDate) : !1, F = r.value.minDate ? it(A, r.value.minDate) : !1, N = a(A), w = t.value.months.map((te) => +te).includes(Fe(A)), k = e.disabledWeekDays.length ? e.disabledWeekDays.some((te) => +te === D0(A)) : !1, q = u(A), re = $e(A), fe = re < +e.yearRange[0] || re > +e.yearRange[1];
    return !(M || F || N || w || fe || k || q);
  }, s = (A, M) => it(...Rn(r.value.minDate, A, M)) || Be(...Rn(r.value.minDate, A, M)), l = (A, M) => ft(...Rn(r.value.maxDate, A, M)) || Be(...Rn(r.value.maxDate, A, M)), i = (A, M, F) => {
    let N = !1;
    return r.value.maxDate && F && l(A, M) && (N = !0), r.value.minDate && !F && s(A, M) && (N = !0), N;
  }, c = (A, M, F, N) => {
    let w = !1;
    return N ? r.value.minDate && r.value.maxDate ? w = i(A, M, F) : (r.value.minDate && s(A, M) || r.value.maxDate && l(A, M)) && (w = !0) : w = !0, w;
  }, u = (A) => Array.isArray(r.value.allowedDates) && !r.value.allowedDates.length ? !0 : r.value.allowedDates ? !lo(A, r.value.allowedDates) : !1, d = (A) => !o(A), p = (A) => n.value.noDisabledRange ? !Pd({ start: A[0], end: A[1] }).some((M) => d(M)) : !0, b = (A) => {
    if (A) {
      const M = $e(A);
      return M >= +e.yearRange[0] && M <= e.yearRange[1];
    }
    return !0;
  }, g = (A, M) => !!(Array.isArray(A) && A[M] && (n.value.maxRange || n.value.minRange) && b(A[M])), v = (A, M, F = 0) => {
    if (g(M, F) && b(A)) {
      const N = Md(A, M[F]), w = qd(M[F], A), k = w.length === 1 ? 0 : w.filter((re) => d(re)).length, q = Math.abs(N) - (n.value.minMaxRawRange ? 0 : k);
      if (n.value.minRange && n.value.maxRange)
        return q >= +n.value.minRange && q <= +n.value.maxRange;
      if (n.value.minRange)
        return q >= +n.value.minRange;
      if (n.value.maxRange)
        return q <= +n.value.maxRange;
    }
    return !0;
  }, T = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, $ = (A) => Array.isArray(A) ? [A[0] ? is(A[0]) : null, A[1] ? is(A[1]) : null] : is(A), I = (A, M, F) => A.find(
    (N) => +N.hours === Kt(M) && N.minutes === "*" ? !0 : +N.minutes === fn(M) && +N.hours === Kt(M)
  ) && F, y = (A, M, F) => {
    const [N, w] = A, [k, q] = M;
    return !I(N, k, F) && !I(w, q, F) && F;
  }, P = (A, M) => {
    const F = Array.isArray(M) ? M : [M];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? y(e.disabledTimes, F, A) : !F.some((N) => I(e.disabledTimes, N, A)) : A;
  }, D = (A, M) => {
    const F = Array.isArray(M) ? [fr(M[0]), M[1] ? fr(M[1]) : void 0] : fr(M), N = !e.disabledTimes(F);
    return A && N;
  }, B = (A, M) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? P(M, A) : D(M, A) : M, H = (A) => {
    let M = !0;
    if (!A || T())
      return !0;
    const F = !r.value.minDate && !r.value.maxDate ? $(A) : A;
    return (e.maxTime || r.value.maxDate) && (M = gu(
      e.maxTime,
      r.value.maxDate,
      "max",
      bt(F),
      M
    )), (e.minTime || r.value.minDate) && (M = gu(
      e.minTime,
      r.value.minDate,
      "min",
      bt(F),
      M
    )), B(A, M);
  }, _ = (A) => {
    if (!e.monthPicker)
      return !0;
    let M = !0;
    const F = Z(qt(A));
    if (r.value.minDate && r.value.maxDate) {
      const N = Z(qt(r.value.minDate)), w = Z(qt(r.value.maxDate));
      return ft(F, N) && it(F, w) || Be(F, N) || Be(F, w);
    }
    if (r.value.minDate) {
      const N = Z(qt(r.value.minDate));
      M = ft(F, N) || Be(F, N);
    }
    if (r.value.maxDate) {
      const N = Z(qt(r.value.maxDate));
      M = it(F, N) || Be(F, N);
    }
    return M;
  }, O = ee(() => (A) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : H(A)), W = ee(() => (A) => e.monthPicker ? Array.isArray(A) && (n.value.enabled || e.multiDates) ? !A.filter((M) => !_(M)).length : _(A) : !0);
  return {
    isDisabled: d,
    validateDate: o,
    validateMonthYearInRange: c,
    isDateRangeAllowed: p,
    checkMinMaxRange: v,
    isValidTime: H,
    isTimeValid: O,
    isMonthValid: W
  };
}, Ro = () => {
  const e = ee(() => (r, a) => r == null ? void 0 : r.includes(a)), t = ee(() => (r, a) => r.count ? r.solo ? !0 : a === 0 : !0), n = ee(() => (r, a) => r.count ? r.solo ? !0 : a === r.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: n };
}, mw = (e, t, n) => {
  const r = J(0), a = bn({
    [pr.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [pr.calendar]: !1,
    [pr.header]: !1
  }), o = ee(() => e.monthPicker), s = (d) => {
    var p;
    if ((p = e.flow) != null && p.length) {
      if (!d && o.value)
        return u();
      a[d] = !0, Object.keys(a).filter((b) => !a[b]).length || u();
    }
  }, l = () => {
    var d;
    (d = e.flow) != null && d.length && r.value !== -1 && (r.value += 1, t("flow-step", r.value), u());
  }, i = () => {
    r.value = -1;
  }, c = (d, p, ...b) => {
    var g, v;
    e.flow[r.value] === d && n.value && ((v = (g = n.value)[p]) == null || v.call(g, ...b));
  }, u = () => {
    c(rn.month, "toggleMonthPicker", !0), c(rn.year, "toggleYearPicker", !0), c(rn.calendar, "toggleTimePicker", !1, !0), c(rn.time, "toggleTimePicker", !0, !0);
    const d = e.flow[r.value];
    (d === rn.hours || d === rn.minutes || d === rn.seconds) && c(d, "toggleTimePicker", !0, !0, d);
  };
  return { childMount: s, updateFlowStep: l, resetFlow: i, flowStep: r };
}, $o = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: [String, Object], default: null },
  emitTimezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [String, Boolean, Object], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  calendarClassName: { type: String, default: null },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  showLastInRange: { type: Boolean, default: !0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 },
  loading: { type: Boolean, default: !1 }
}, en = {
  ...$o,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null }
}, hw = {
  key: 1,
  class: "dp__input_wrap"
}, vw = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], yw = {
  key: 2,
  class: "dp__clear_icon"
}, gw = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...$o
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, {
      defaultedTextInput: o,
      defaultedAriaLabels: s,
      defaultedInline: l,
      defaultedConfig: i,
      defaultedRange: c,
      getDefaultPattern: u,
      getDefaultStartTime: d
    } = st(a), { checkMinMaxRange: p } = Gn(a), b = J(), g = J(null), v = J(!1), T = J(!1), $ = ee(
      () => ({
        dp__pointer: !a.disabled && !a.readonly && !o.value.enabled,
        dp__disabled: a.disabled,
        dp__input_readonly: !o.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !a.hideInputIcon,
        dp__input_valid: !!a.state,
        dp__input_invalid: a.state === !1,
        dp__input_focus: v.value || a.isMenuOpen,
        dp__input_reg: !o.value.enabled,
        [a.inputClassName]: !!a.inputClassName
      })
    ), I = () => {
      r("set-input-date", null), a.autoApply && (r("set-empty-date"), b.value = null);
    }, y = (w) => {
      const k = d();
      return Bb(
        w,
        o.value.format ?? u(),
        k ?? zd({}, a.enableSeconds),
        a.inputValue,
        T.value
      );
    }, P = (w) => {
      const { rangeSeparator: k } = o.value, [q, re] = w.split(`${k}`);
      if (q) {
        const fe = y(q.trim()), te = re ? y(re.trim()) : null, m = fe && te ? [fe, te] : [fe];
        p(te, m, 0) && (b.value = fe ? m : null);
      }
    }, D = () => {
      T.value = !0;
    }, B = (w) => {
      if (c.value.enabled)
        P(w);
      else if (a.multiDates) {
        const k = w.split(";");
        b.value = k.map((q) => y(q.trim())).filter((q) => q);
      } else
        b.value = y(w);
    }, H = (w) => {
      var k;
      const q = typeof w == "string" ? w : (k = w.target) == null ? void 0 : k.value;
      q !== "" ? (o.value.openMenu && !a.isMenuOpen && r("open"), B(q), r("set-input-date", b.value)) : I(), T.value = !1, r("update:input-value", q);
    }, _ = (w) => {
      o.value.enabled ? (B(w.target.value), o.value.enterSubmit && js(b.value) && a.inputValue !== "" ? (r("set-input-date", b.value, !0), b.value = null) : o.value.enterSubmit && a.inputValue === "" && (b.value = null, r("clear"))) : A(w);
    }, O = (w) => {
      o.value.enabled && o.value.tabSubmit && B(w.target.value), o.value.tabSubmit && js(b.value) && a.inputValue !== "" ? (r("set-input-date", b.value, !0, !0), b.value = null) : o.value.tabSubmit && a.inputValue === "" && (b.value = null, r("clear", !0));
    }, W = () => {
      var w;
      v.value = !0, r("focus"), o.value.enabled && o.value.selectOnFocus && ((w = g.value) == null || w.select());
    }, A = (w) => {
      w.preventDefault(), In(w, i.value, !0), o.value.enabled && o.value.openMenu && !l.value.input && !a.isMenuOpen ? r("open") : o.value.enabled || r("toggle");
    }, M = () => {
      r("real-blur"), v.value = !1, (!a.isMenuOpen || l.value.enabled && l.value.input) && r("blur"), a.autoApply && o.value.enabled && b.value && !a.isMenuOpen && (r("set-input-date", b.value), r("select-date"), b.value = null);
    }, F = (w) => {
      In(w, i.value, !0), r("clear");
    }, N = (w) => {
      if (!o.value.enabled) {
        if (w.code === "Tab")
          return;
        w.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        var w;
        (w = g.value) == null || w.focus({ preventScroll: !0 });
      },
      setParsedDate: (w) => {
        b.value = w;
      }
    }), (w, k) => {
      var q;
      return V(), G("div", { onClick: A }, [
        w.$slots.trigger && !w.$slots["dp-input"] && !S(l).enabled ? ge(w.$slots, "trigger", { key: 0 }) : Q("", !0),
        !w.$slots.trigger && (!S(l).enabled || S(l).input) ? (V(), G("div", hw, [
          w.$slots["dp-input"] && !w.$slots.trigger && (!S(l).enabled || S(l).enabled && S(l).input) ? ge(w.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: H,
            onEnter: _,
            onTab: O,
            onClear: F,
            onBlur: M,
            onKeypress: N,
            onPaste: D,
            openMenu: () => w.$emit("open"),
            closeMenu: () => w.$emit("close"),
            toggleMenu: () => w.$emit("toggle")
          }) : Q("", !0),
          w.$slots["dp-input"] ? Q("", !0) : (V(), G("input", {
            key: 1,
            id: w.uid ? `dp-input-${w.uid}` : void 0,
            ref_key: "inputRef",
            ref: g,
            name: w.name,
            class: Ne($.value),
            inputmode: S(o).enabled ? "text" : "none",
            placeholder: w.placeholder,
            disabled: w.disabled,
            readonly: w.readonly,
            required: w.required,
            value: e.inputValue,
            autocomplete: w.autocomplete,
            "aria-label": (q = S(s)) == null ? void 0 : q.input,
            "aria-disabled": w.disabled || void 0,
            "aria-invalid": w.state === !1 ? !0 : void 0,
            onInput: H,
            onKeydown: [
              Se(_, ["enter"]),
              Se(O, ["tab"]),
              N
            ],
            onBlur: M,
            onFocus: W,
            onKeypress: N,
            onPaste: D
          }, null, 42, vw)),
          ke("div", {
            onClick: k[2] || (k[2] = (re) => r("toggle"))
          }, [
            w.$slots["input-icon"] && !w.hideInputIcon ? (V(), G("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: k[0] || (k[0] = (re) => r("toggle"))
            }, [
              ge(w.$slots, "input-icon")
            ])) : Q("", !0),
            !w.$slots["input-icon"] && !w.hideInputIcon && !w.$slots["dp-input"] ? (V(), De(S(Yr), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: k[1] || (k[1] = (re) => r("toggle"))
            })) : Q("", !0)
          ]),
          w.$slots["clear-icon"] && e.inputValue && w.clearable && !w.disabled && !w.readonly ? (V(), G("span", yw, [
            ge(w.$slots, "clear-icon", { clear: F })
          ])) : Q("", !0),
          w.clearable && !w.$slots["clear-icon"] && e.inputValue && !w.disabled && !w.readonly ? (V(), De(S(Ld), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: k[3] || (k[3] = Ke((re) => F(re), ["prevent"]))
          })) : Q("", !0)
        ])) : Q("", !0)
      ]);
    };
  }
}), bw = ["title"], ww = ["disabled"], _w = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...en
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const n = t, r = e, {
      defaultedActionRow: a,
      defaultedPreviewFormat: o,
      defaultedMultiCalendars: s,
      defaultedTextInput: l,
      defaultedInline: i,
      defaultedRange: c,
      getDefaultPattern: u
    } = st(r), { isTimeValid: d, isMonthValid: p } = Gn(r), { buildMatrix: b } = zn(), g = J(null), v = J(null), T = J(!1), $ = J({}), I = J(null), y = J(null);
    xt(() => {
      r.arrowNavigation && b([gt(g), gt(v)], "actionRow"), P(), window.addEventListener("resize", P);
    }), Fr(() => {
      window.removeEventListener("resize", P);
    });
    const P = () => {
      T.value = !1, setTimeout(() => {
        var N, w;
        const k = (N = I.value) == null ? void 0 : N.getBoundingClientRect(), q = (w = y.value) == null ? void 0 : w.getBoundingClientRect();
        k && q && ($.value.maxWidth = `${q.width - k.width - 20}px`), T.value = !0;
      }, 0);
    }, D = ee(() => c.value.enabled && !c.value.partialRange && r.internalModelValue ? r.internalModelValue.length === 2 : !0), B = ee(
      () => !d.value(r.internalModelValue) || !p.value(r.internalModelValue) || !D.value
    ), H = () => {
      const N = o.value;
      return r.timePicker || r.monthPicker, N(bt(r.internalModelValue));
    }, _ = () => {
      const N = r.internalModelValue;
      return s.value.count > 0 ? `${O(N[0])} - ${O(N[1])}` : [O(N[0]), O(N[1])];
    }, O = (N) => Kd(
      N,
      o.value,
      r.formatLocale,
      l.value.rangeSeparator,
      r.modelAuto,
      u()
    ), W = ee(() => !r.internalModelValue || !r.menuMount ? "" : typeof o.value == "string" ? Array.isArray(r.internalModelValue) ? r.internalModelValue.length === 2 && r.internalModelValue[1] ? _() : r.multiDates ? r.internalModelValue.map((N) => `${O(N)}`) : r.modelAuto ? `${O(r.internalModelValue[0])}` : `${O(r.internalModelValue[0])} -` : O(r.internalModelValue) : H()), A = () => r.multiDates ? "; " : " - ", M = ee(
      () => Array.isArray(W.value) ? W.value.join(A()) : W.value
    ), F = () => {
      d.value(r.internalModelValue) && p.value(r.internalModelValue) && D.value ? n("select-date") : n("invalid-select");
    };
    return (N, w) => (V(), G("div", {
      ref_key: "actionRowRef",
      ref: y,
      class: "dp__action_row"
    }, [
      N.$slots["action-row"] ? ge(N.$slots, "action-row", ht(_t({ key: 0 }, {
        internalModelValue: N.internalModelValue,
        disabled: B.value,
        selectDate: () => N.$emit("select-date"),
        closePicker: () => N.$emit("close-picker")
      }))) : (V(), G(_e, { key: 1 }, [
        S(a).showPreview ? (V(), G("div", {
          key: 0,
          class: "dp__selection_preview",
          title: M.value,
          style: Ct($.value)
        }, [
          N.$slots["action-preview"] && T.value ? ge(N.$slots, "action-preview", {
            key: 0,
            value: N.internalModelValue
          }) : Q("", !0),
          !N.$slots["action-preview"] && T.value ? (V(), G(_e, { key: 1 }, [
            Jt(He(M.value), 1)
          ], 64)) : Q("", !0)
        ], 12, bw)) : Q("", !0),
        ke("div", {
          ref_key: "actionBtnContainer",
          ref: I,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          N.$slots["action-buttons"] ? ge(N.$slots, "action-buttons", {
            key: 0,
            value: N.internalModelValue
          }) : Q("", !0),
          N.$slots["action-buttons"] ? Q("", !0) : (V(), G(_e, { key: 1 }, [
            !S(i).enabled && S(a).showCancel ? (V(), G("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: g,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: w[0] || (w[0] = (k) => N.$emit("close-picker")),
              onKeydown: [
                w[1] || (w[1] = Se((k) => N.$emit("close-picker"), ["enter"])),
                w[2] || (w[2] = Se((k) => N.$emit("close-picker"), ["space"]))
              ]
            }, He(N.cancelText), 545)) : Q("", !0),
            S(a).showNow ? (V(), G("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: w[3] || (w[3] = (k) => N.$emit("select-now")),
              onKeydown: [
                w[4] || (w[4] = Se((k) => N.$emit("select-now"), ["enter"])),
                w[5] || (w[5] = Se((k) => N.$emit("select-now"), ["space"]))
              ]
            }, He(N.nowButtonLabel), 33)) : Q("", !0),
            S(a).showSelect ? (V(), G("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: v,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: B.value,
              onKeydown: [
                Se(F, ["enter"]),
                Se(F, ["space"])
              ],
              onClick: F
            }, He(N.selectText), 41, ww)) : Q("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), xw = ["onKeydown"], kw = { class: "dp__selection_grid_header" }, Mw = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], Tw = ["aria-label"], Ma = /* @__PURE__ */ Mt({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {},
    ariaLabels: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: t, emit: n }) {
    const { setSelectionGrid: r, buildMultiLevelMatrix: a, setMonthPicker: o } = zn(), s = n, l = e, { defaultedAriaLabels: i, defaultedTextInput: c, defaultedConfig: u } = st(
      l
    ), { hideNavigationButtons: d } = Ro(), p = J(!1), b = J(null), g = J(null), v = J([]), T = J(), $ = J(null), I = J(0), y = J(null);
    ic(() => {
      b.value = null;
    }), xt(() => {
      Qt().then(() => A()), l.noOverlayFocus || D(), P(!0);
    }), Fr(() => P(!1));
    const P = (te) => {
      var m;
      l.arrowNavigation && ((m = l.headerRefs) != null && m.length ? o(te) : r(te));
    }, D = () => {
      var te;
      const m = gt(g);
      m && (c.value.enabled || (b.value ? (te = b.value) == null || te.focus({ preventScroll: !0 }) : m.focus({ preventScroll: !0 })), p.value = m.clientHeight < m.scrollHeight);
    }, B = ee(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !l.useRelative,
        "dp--overlay-relative": l.useRelative
      })
    ), H = ee(
      () => l.useRelative ? { height: `${l.height}px`, width: "260px" } : void 0
    ), _ = ee(() => ({
      dp__overlay_col: !0
    })), O = ee(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: p.value,
        dp__button_bottom: l.isLast
      })
    ), W = ee(() => {
      var te, m;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((te = l.items) == null ? void 0 : te.length) <= 6,
        dp__container_block: ((m = l.items) == null ? void 0 : m.length) > 6
      };
    });
    ut(
      () => l.items,
      () => A(!1),
      { deep: !0 }
    );
    const A = (te = !0) => {
      Qt().then(() => {
        const m = gt(b), f = gt(g), R = gt($), X = gt(y), ce = R ? R.getBoundingClientRect().height : 0;
        f && (f.getBoundingClientRect().height ? I.value = f.getBoundingClientRect().height - ce : I.value = u.value.modeHeight - ce), m && X && te && (X.scrollTop = m.offsetTop - X.offsetTop - (I.value / 2 - m.getBoundingClientRect().height) - ce);
      });
    }, M = (te) => {
      te.disabled || s("selected", te.value);
    }, F = () => {
      s("toggle"), s("reset-flow");
    }, N = () => {
      l.escClose && F();
    }, w = (te, m, f, R) => {
      te && ((m.active || m.value === l.focusValue) && (b.value = te), l.arrowNavigation && (Array.isArray(v.value[f]) ? v.value[f][R] = te : v.value[f] = [te], k()));
    }, k = () => {
      var te, m;
      const f = (te = l.headerRefs) != null && te.length ? [l.headerRefs].concat(v.value) : v.value.concat([l.skipButtonRef ? [] : [$.value]]);
      a(bt(f), (m = l.headerRefs) != null && m.length ? "monthPicker" : "selectionGrid");
    }, q = (te) => {
      l.arrowNavigation || In(te, u.value, !0);
    }, re = (te) => {
      T.value = te, s("hover-value", te);
    }, fe = () => {
      if (F(), !l.isLast) {
        const te = Ib(l.menuWrapRef ?? null, "action-row");
        if (te) {
          const m = Hd(te);
          m == null || m.focus();
        }
      }
    };
    return t({ focusGrid: D }), (te, m) => {
      var f;
      return V(), G("div", {
        ref_key: "gridWrapRef",
        ref: g,
        class: Ne(B.value),
        style: Ct(H.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          Se(Ke(N, ["prevent"]), ["esc"]),
          m[0] || (m[0] = Se(Ke((R) => q(R), ["prevent"]), ["left"])),
          m[1] || (m[1] = Se(Ke((R) => q(R), ["prevent"]), ["up"])),
          m[2] || (m[2] = Se(Ke((R) => q(R), ["prevent"]), ["down"])),
          m[3] || (m[3] = Se(Ke((R) => q(R), ["prevent"]), ["right"]))
        ]
      }, [
        ke("div", {
          ref_key: "containerRef",
          ref: y,
          class: Ne(W.value),
          role: "grid",
          style: Ct({ height: `${I.value}px` })
        }, [
          ke("div", kw, [
            ge(te.$slots, "header")
          ]),
          te.$slots.overlay ? ge(te.$slots, "overlay", { key: 0 }) : (V(!0), G(_e, { key: 1 }, qe(te.items, (R, X) => (V(), G("div", {
            key: X,
            class: Ne(["dp__overlay_row", { dp__flex_row: te.items.length >= 3 }]),
            role: "row"
          }, [
            (V(!0), G(_e, null, qe(R, (ce, Y) => (V(), G("div", {
              key: ce.value,
              ref_for: !0,
              ref: (Oe) => w(Oe, ce, X, Y),
              role: "gridcell",
              class: Ne(_.value),
              "aria-selected": ce.active || void 0,
              "aria-disabled": ce.disabled || void 0,
              tabindex: "0",
              onClick: (Oe) => M(ce),
              onKeydown: [
                Se(Ke((Oe) => M(ce), ["prevent"]), ["enter"]),
                Se(Ke((Oe) => M(ce), ["prevent"]), ["space"])
              ],
              onMouseover: (Oe) => re(ce.value)
            }, [
              ke("div", {
                class: Ne(ce.className)
              }, [
                te.$slots.item ? ge(te.$slots, "item", {
                  key: 0,
                  item: ce
                }) : Q("", !0),
                te.$slots.item ? Q("", !0) : (V(), G(_e, { key: 1 }, [
                  Jt(He(ce.text), 1)
                ], 64))
              ], 2)
            ], 42, Mw))), 128))
          ], 2))), 128))
        ], 6),
        te.$slots["button-icon"] ? Vn((V(), G("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: $,
          type: "button",
          "aria-label": (f = S(i)) == null ? void 0 : f.toggleOverlay,
          class: Ne(O.value),
          tabindex: "0",
          onClick: F,
          onKeydown: [
            Se(F, ["enter"]),
            Se(fe, ["tab"])
          ]
        }, [
          ge(te.$slots, "button-icon")
        ], 42, Tw)), [
          [Fa, !S(d)(te.hideNavigation, te.type)]
        ]) : Q("", !0)
      ], 46, xw);
    };
  }
}), No = /* @__PURE__ */ Mt({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const t = e, n = ee(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), r = ee(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (a, o) => (V(), G("div", {
      class: Ne({
        dp__menu_inner: !a.stretch,
        "dp--menu--inner-stretched": a.stretch,
        dp__flex_display: a.multiCalendars > 0,
        "dp--flex-display-collapsed": a.collapse
      })
    }, [
      (V(!0), G(_e, null, qe(n.value, (s, l) => (V(), G("div", {
        key: s,
        class: Ne(r.value)
      }, [
        ge(a.$slots, "default", {
          instance: s,
          index: l
        })
      ], 2))), 128))
    ], 2));
  }
}), Pw = ["aria-label", "aria-disabled"], sa = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const n = t, r = J(null);
    return xt(() => n("set-ref", r)), (a, o) => (V(), G("button", {
      ref_key: "elRef",
      ref: r,
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": a.ariaLabel,
      "aria-disabled": a.disabled || void 0,
      onClick: o[0] || (o[0] = (s) => a.$emit("activate")),
      onKeydown: [
        o[1] || (o[1] = Se(Ke((s) => a.$emit("activate"), ["prevent"]), ["enter"])),
        o[2] || (o[2] = Se(Ke((s) => a.$emit("activate"), ["prevent"]), ["space"]))
      ]
    }, [
      ke("span", {
        class: Ne(["dp__inner_nav", { dp__inner_nav_disabled: a.disabled }])
      }, [
        ge(a.$slots, "default")
      ], 2)
    ], 40, Pw));
  }
}), Sw = { class: "dp--year-mode-picker" }, Aw = ["aria-label"], Zd = /* @__PURE__ */ Mt({
  __name: "YearModePicker",
  props: {
    ...en,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const n = t, r = e, { showRightIcon: a, showLeftIcon: o } = Ro(), { defaultedConfig: s, defaultedMultiCalendars: l, defaultedAriaLabels: i, defaultedTransitions: c } = st(r), { showTransition: u, transitionName: d } = xa(c), p = (v = !1, T) => {
      n("toggle-year-picker", { flow: v, show: T });
    }, b = (v) => {
      n("year-select", v);
    }, g = (v = !1) => {
      n("handle-year", v);
    };
    return (v, T) => {
      var $, I, y;
      return V(), G("div", Sw, [
        S(o)(S(l), e.instance) ? (V(), De(sa, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": ($ = S(i)) == null ? void 0 : $.prevYear,
          disabled: e.isDisabled(!1),
          onActivate: T[0] || (T[0] = (P) => g(!1))
        }, {
          default: Ve(() => [
            v.$slots["arrow-left"] ? ge(v.$slots, "arrow-left", { key: 0 }) : Q("", !0),
            v.$slots["arrow-left"] ? Q("", !0) : (V(), De(S(El), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : Q("", !0),
        ke("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (I = S(i)) == null ? void 0 : I.openYearsOverlay,
          onClick: T[1] || (T[1] = () => p(!1)),
          onKeydown: T[2] || (T[2] = Se(() => p(!1), ["enter"]))
        }, [
          v.$slots.year ? ge(v.$slots, "year", {
            key: 0,
            year: e.year
          }) : Q("", !0),
          v.$slots.year ? Q("", !0) : (V(), G(_e, { key: 1 }, [
            Jt(He(e.year), 1)
          ], 64))
        ], 40, Aw),
        S(a)(S(l), e.instance) ? (V(), De(sa, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (y = S(i)) == null ? void 0 : y.nextYear,
          disabled: e.isDisabled(!0),
          onActivate: T[3] || (T[3] = (P) => g(!0))
        }, {
          default: Ve(() => [
            v.$slots["arrow-right"] ? ge(v.$slots, "arrow-right", { key: 0 }) : Q("", !0),
            v.$slots["arrow-right"] ? Q("", !0) : (V(), De(S(Rl), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : Q("", !0),
        Xe(qn, {
          name: S(d)(e.showYearPicker),
          css: S(u)
        }, {
          default: Ve(() => [
            e.showYearPicker ? (V(), De(Ma, {
              key: 0,
              items: e.items,
              "text-input": v.textInput,
              "esc-close": v.escClose,
              config: v.config,
              "is-last": v.autoApply && !S(s).keepActionRow,
              "hide-navigation": v.hideNavigation,
              "aria-labels": v.ariaLabels,
              type: "year",
              onToggle: p,
              onSelected: T[4] || (T[4] = (P) => b(P))
            }, Dt({
              "button-icon": Ve(() => [
                v.$slots["calendar-icon"] ? ge(v.$slots, "calendar-icon", { key: 0 }) : Q("", !0),
                v.$slots["calendar-icon"] ? Q("", !0) : (V(), De(S(Yr), { key: 1 }))
              ]),
              _: 2
            }, [
              v.$slots["year-overlay-value"] ? {
                name: "item",
                fn: Ve(({ item: P }) => [
                  ge(v.$slots, "year-overlay-value", {
                    text: P.text,
                    value: P.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels"])) : Q("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Yl = (e, t, n) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((r) => Be(e, r))) {
      const r = t.value.filter((a) => !Be(a, e));
      t.value = r.length ? r : null;
    } else
      (n && +n > t.value.length || !n) && t.value.push(e);
  else
    t.value = [e];
}, jl = (e, t, n) => {
  let r = e.value ? e.value.slice() : [];
  return r.length === 2 && r[1] !== null && (r = []), r.length ? it(t, r[0]) ? (r.unshift(t), n("range-start", r[0]), n("range-start", r[1])) : (r[1] = t, n("range-end", t)) : (r = [t], n("range-start", t)), r;
}, Vo = (e, t, n, r) => {
  e && (e[0] && e[1] && n && t("auto-apply"), e[0] && !e[1] && r && n && t("auto-apply"));
}, ef = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => Hn(Z(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = Hn(Z(e.value), e.timezone));
}, tf = (e, t, n, r) => Array.isArray(t.value) && t.value.length === 2 ? r.value.fixedStart && (ft(e, t.value[0]) || Be(e, t.value[0])) ? [t.value[0], e] : r.value.fixedEnd && (it(e, t.value[1]) || Be(e, t.value[1])) ? [e, t.value[1]] : (n("invalid-fixed-range", e), t.value) : [], nf = ({
  multiCalendars: e,
  highlight: t,
  propDates: n,
  calendars: r,
  modelValue: a,
  props: o,
  year: s,
  month: l,
  emit: i
}) => {
  const c = ee(() => Il(o.yearRange, o.reverseYears)), u = J([!1]), d = ee(() => (D, B) => {
    const H = Ze(qt(/* @__PURE__ */ new Date()), {
      month: l.value(D),
      year: s.value(D)
    });
    return Gd(
      H,
      n.value.maxDate,
      n.value.minDate,
      o.preventMinMaxNavigation,
      B
    );
  }), p = () => {
    for (let D = 0; D < e.value.count; D++)
      if (D === 0)
        r.value[D] = r.value[0];
      else {
        const B = Ze(Z(), r.value[D - 1]);
        r.value[D] = { month: Fe(B), year: $e(Ml(B, 1)) };
      }
  }, b = (D) => {
    if (!D)
      return p();
    const B = Ze(Z(), r.value[D]);
    return r.value[0].year = $e(Bd(B, e.value.count - 1)), p();
  }, g = (D) => o.focusStartDate ? D[0] : D[1] ? D[1] : D[0], v = () => {
    if (a.value) {
      const D = Array.isArray(a.value) ? g(a.value) : a.value;
      r.value[0] = { month: Fe(D), year: $e(D) };
    }
  };
  xt(() => {
    v(), e.value.count && p();
  });
  const T = (D, B) => {
    r.value[B].year = D, e.value.count && !e.value.solo && b(B);
  }, $ = ee(() => (D) => Vr(c.value, (B) => {
    const H = s.value(D) === B.value, _ = ya(
      B.value,
      Ir(n.value.minDate),
      Ir(n.value.maxDate)
    ), O = Ll(t.value, B.value);
    return { active: H, disabled: _, highlighted: O };
  })), I = (D, B) => {
    T(D, B), P(B);
  }, y = (D, B = !1) => {
    if (!d.value(D, B)) {
      const H = B ? s.value(D) + 1 : s.value(D) - 1;
      T(H, D);
    }
  }, P = (D, B = !1, H) => {
    B || i("reset-flow"), H !== void 0 ? u.value[D] = H : u.value[D] = !u.value[D], u.value || i("overlay-closed");
  };
  return {
    isDisabled: d,
    groupedYears: $,
    showYearPicker: u,
    selectYear: T,
    toggleYearPicker: P,
    handleYearSelect: I,
    handleYear: y
  };
}, Cw = (e, t) => {
  const {
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: a,
    defaultedConfig: o,
    defaultedRange: s,
    defaultedHighlight: l,
    propDates: i,
    defaultedTz: c
  } = st(e), { modelValue: u, year: d, month: p, calendars: b } = ka(e, t), g = ee(() => Yd(e.formatLocale, e.locale, e.monthNameFormat)), v = J(null), { checkMinMaxRange: T } = Gn(e), {
    selectYear: $,
    groupedYears: I,
    showYearPicker: y,
    toggleYearPicker: P,
    handleYearSelect: D,
    handleYear: B,
    isDisabled: H
  } = nf({
    modelValue: u,
    multiCalendars: n,
    highlight: l,
    calendars: b,
    year: d,
    propDates: i,
    month: p,
    props: e,
    emit: t
  });
  xt(() => {
    e.startDate && (u.value && e.focusStartDate || !u.value) && $($e(Z(e.startDate)), 0);
  });
  const _ = (m) => m ? { month: Fe(m), year: $e(m) } : { month: null, year: null }, O = () => u.value ? Array.isArray(u.value) ? u.value.map((m) => _(m)) : _(u.value) : _(), W = (m, f) => {
    const R = b.value[m], X = O();
    return Array.isArray(X) ? X.some((ce) => ce.year === (R == null ? void 0 : R.year) && ce.month === f) : (R == null ? void 0 : R.year) === X.year && f === X.month;
  }, A = (m, f, R) => {
    var X, ce;
    const Y = O();
    return Array.isArray(Y) ? d.value(f) === ((X = Y[R]) == null ? void 0 : X.year) && m === ((ce = Y[R]) == null ? void 0 : ce.month) : !1;
  }, M = (m, f) => {
    if (s.value.enabled) {
      const R = O();
      if (Array.isArray(u.value) && Array.isArray(R)) {
        const X = A(m, f, 0) || A(m, f, 1), ce = yn(qt(Z()), m, d.value(f));
        return Eo(u.value, v.value, ce) && !X;
      }
      return !1;
    }
    return !1;
  }, F = ee(() => (m) => Vr(g.value, (f) => {
    const R = W(m, f.value), X = ya(
      f.value,
      Ud(d.value(m), i.value.minDate),
      Wd(d.value(m), i.value.maxDate)
    ) || Wb(i.value.disabledDates, d.value(m)).includes(f.value), ce = M(f.value, m), Y = Xd(l.value, f.value, d.value(m));
    return { active: R, disabled: X, isBetween: ce, highlighted: Y };
  })), N = (m, f) => yn(qt(Z()), m, d.value(f)), w = (m, f) => {
    const R = u.value ? u.value : qt(/* @__PURE__ */ new Date());
    u.value = yn(R, m, d.value(f)), t("auto-apply"), t("update-flow-step");
  }, k = (m, f) => {
    const R = N(m, f);
    s.value.fixedEnd || s.value.fixedStart ? u.value = tf(R, u, t, s) : u.value ? T(R, u.value) && (u.value = jl(u, N(m, f), t)) : u.value = [N(m, f)], Vo(u.value, t, e.autoApply, e.modelAuto);
  }, q = (m, f) => {
    Yl(N(m, f), u, e.multiDatesLimit), t("auto-apply", !0);
  }, re = (m, f) => (b.value[f].month = m, te(f, b.value[f].year, m), e.multiDates ? q(m, f) : s.value.enabled ? k(m, f) : w(m, f)), fe = (m, f) => {
    $(m, f), te(f, m, null);
  }, te = (m, f, R) => {
    let X = R;
    if (!X && X !== 0) {
      const ce = O();
      X = Array.isArray(ce) ? ce[m].month : ce.month;
    }
    t("update-month-year", { instance: m, year: f, month: X });
  };
  return {
    groupedMonths: F,
    groupedYears: I,
    year: d,
    isDisabled: H,
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: a,
    defaultedConfig: o,
    showYearPicker: y,
    modelValue: u,
    presetDate: (m, f) => {
      ef({
        value: m,
        modelValue: u,
        range: s.value.enabled,
        timezone: f ? void 0 : c.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (m, f) => {
      v.value = N(m, f);
    },
    selectMonth: re,
    selectYear: fe,
    toggleYearPicker: P,
    handleYearSelect: D,
    handleYear: B,
    getModelMonthYear: O
  };
}, Dw = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...en
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year",
    "update-flow-step",
    "mount",
    "invalid-fixed-range"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = vr(), o = Vt(a, "yearMode"), s = e;
    xt(() => {
      s.shadow || r("mount", null);
    });
    const {
      groupedMonths: l,
      groupedYears: i,
      year: c,
      isDisabled: u,
      defaultedMultiCalendars: d,
      defaultedConfig: p,
      showYearPicker: b,
      modelValue: g,
      presetDate: v,
      setHoverDate: T,
      selectMonth: $,
      selectYear: I,
      toggleYearPicker: y,
      handleYearSelect: P,
      handleYear: D,
      getModelMonthYear: B
    } = Cw(s, r);
    return t({ getSidebarProps: () => ({
      modelValue: g,
      year: c,
      getModelMonthYear: B,
      selectMonth: $,
      selectYear: I,
      handleYear: D
    }), presetDate: v, toggleYearPicker: (H) => y(0, H) }), (H, _) => (V(), De(No, {
      "multi-calendars": S(d).count,
      collapse: H.collapse,
      stretch: ""
    }, {
      default: Ve(({ instance: O }) => [
        H.$slots["month-year"] ? ge(H.$slots, "month-year", ht(_t({ key: 0 }, {
          year: S(c),
          months: S(l)(O),
          years: S(i)(O),
          selectMonth: S($),
          selectYear: S(I),
          instance: O
        }))) : (V(), De(Ma, {
          key: 1,
          items: S(l)(O),
          "arrow-navigation": H.arrowNavigation,
          "is-last": H.autoApply && !S(p).keepActionRow,
          "esc-close": H.escClose,
          height: S(p).modeHeight,
          config: H.config,
          "no-overlay-focus": !!(H.noOverlayFocus || H.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (W) => S($)(W, O),
          onHoverValue: (W) => S(T)(W, O)
        }, {
          header: Ve(() => [
            Xe(Zd, _t(H.$props, {
              items: S(i)(O),
              instance: O,
              "show-year-picker": S(b)[O],
              year: S(c)(O),
              "is-disabled": (W) => S(u)(O, W),
              onHandleYear: (W) => S(D)(O, W),
              onYearSelect: (W) => S(P)(W, O),
              onToggleYearPicker: (W) => S(y)(O, W == null ? void 0 : W.flow, W == null ? void 0 : W.show)
            }), Dt({ _: 2 }, [
              qe(S(o), (W, A) => ({
                name: W,
                fn: Ve((M) => [
                  ge(H.$slots, W, ht(Pt(M)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), Ow = (e, t) => {
  const { modelValue: n } = ka(e, t), r = J(null), { defaultedHighlight: a, defaultedFilters: o, defaultedRange: s, propDates: l } = st(e), i = J();
  xt(() => {
    e.startDate && (n.value && e.focusStartDate || !n.value) && (i.value = $e(Z(e.startDate)));
  });
  const c = (b) => Array.isArray(n.value) ? n.value.some((g) => $e(g) === b) : n.value ? $e(n.value) === b : !1, u = (b) => s.value.enabled && Array.isArray(n.value) ? Eo(n.value, r.value, p(b)) : !1, d = ee(() => Vr(Il(e.yearRange, e.reverseYears), (b) => {
    const g = c(b.value), v = ya(
      b.value,
      Ir(l.value.minDate),
      Ir(l.value.maxDate)
    ) || o.value.years.includes(b.value), T = u(b.value) && !g, $ = Ll(a.value, b.value);
    return { active: g, disabled: v, isBetween: T, highlighted: $ };
  })), p = (b) => un(qt(/* @__PURE__ */ new Date()), b);
  return {
    groupedYears: d,
    modelValue: n,
    focusYear: i,
    setHoverValue: (b) => {
      r.value = un(qt(/* @__PURE__ */ new Date()), b);
    },
    selectYear: (b) => {
      var g;
      if (t("update-month-year", { instance: 0, year: b }), e.multiDates)
        return n.value ? Array.isArray(n.value) && (((g = n.value) == null ? void 0 : g.map((v) => $e(v))).includes(b) ? n.value = n.value.filter((v) => $e(v) !== b) : n.value.push(un(Ft(Z()), b))) : n.value = [un(Ft(Z()), b)], t("auto-apply", !0);
      if (s.value.enabled)
        return n.value = jl(n, p(b), t), Vo(n.value, t, e.autoApply, e.modelAuto);
      n.value = p(b), t("auto-apply");
    }
  };
}, Ew = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...en
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, { groupedYears: o, modelValue: s, focusYear: l, selectYear: i, setHoverValue: c } = Ow(a, r), { defaultedConfig: u } = st(a);
    return t({ getSidebarProps: () => ({
      modelValue: s,
      selectYear: i
    }) }), (d, p) => (V(), G("div", null, [
      d.$slots["month-year"] ? ge(d.$slots, "month-year", ht(_t({ key: 0 }, {
        years: S(o),
        selectYear: S(i)
      }))) : (V(), De(Ma, {
        key: 1,
        items: S(o),
        "is-last": d.autoApply && !S(u).keepActionRow,
        height: S(u).modeHeight,
        config: d.config,
        "no-overlay-focus": !!(d.noOverlayFocus || d.textInput),
        "focus-value": S(l),
        type: "year",
        "use-relative": "",
        onSelected: S(i),
        onHoverValue: S(c)
      }, Dt({ _: 2 }, [
        d.$slots["year-overlay-value"] ? {
          name: "item",
          fn: Ve(({ item: b }) => [
            ge(d.$slots, "year-overlay-value", {
              text: b.text,
              value: b.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), Rw = {
  key: 0,
  class: "dp__time_input"
}, $w = ["aria-label", "onKeydown", "onClick"], Nw = /* @__PURE__ */ ke("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), Vw = /* @__PURE__ */ ke("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), Iw = ["aria-label", "disabled", "onKeydown", "onClick"], Fw = ["aria-label", "onKeydown", "onClick"], Bw = /* @__PURE__ */ ke("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), Lw = /* @__PURE__ */ ke("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), Yw = { key: 0 }, jw = ["aria-label", "onKeydown"], Hw = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => !1 },
    ...en
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, { setTimePickerElements: o, setTimePickerBackRef: s } = zn(), { defaultedAriaLabels: l, defaultedTransitions: i, defaultedFilters: c, defaultedConfig: u, defaultedRange: d } = st(a), { transitionName: p, showTransition: b } = xa(i), g = bn({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), v = J("AM"), T = J(null), $ = J([]);
    xt(() => {
      r("mounted");
    });
    const I = (U) => Ze(/* @__PURE__ */ new Date(), {
      hours: U.hours,
      minutes: U.minutes,
      seconds: a.enableSeconds ? U.seconds : 0,
      milliseconds: 0
    }), y = ee(
      () => (U) => w(U, a[U]) || D(U, a[U])
    ), P = ee(() => ({ hours: a.hours, minutes: a.minutes, seconds: a.seconds })), D = (U, ve) => d.value.enabled && !d.value.disableTimeRangeValidation ? !a.validateTime(U, ve) : !1, B = (U, ve) => {
      if (d.value.enabled && !d.value.disableTimeRangeValidation) {
        const Ee = ve ? +a[`${U}Increment`] : -+a[`${U}Increment`], C = a[U] + Ee;
        return !a.validateTime(U, C);
      }
      return !1;
    }, H = ee(() => (U) => !fe(+a[U] + +a[`${U}Increment`], U) || B(U, !0)), _ = ee(() => (U) => !fe(+a[U] - +a[`${U}Increment`], U) || B(U, !1)), O = (U, ve) => _d(Ze(Z(), U), ve), W = (U, ve) => Cb(Ze(Z(), U), ve), A = ee(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !a.timePickerInline,
        dp__time_col_reg_block: !a.enableSeconds && a.is24 && !a.timePickerInline,
        dp__time_col_reg_inline: !a.enableSeconds && a.is24 && a.timePickerInline,
        dp__time_col_reg_with_button: !a.enableSeconds && !a.is24,
        dp__time_col_sec: a.enableSeconds && a.is24,
        dp__time_col_sec_with_button: a.enableSeconds && !a.is24
      })
    ), M = ee(() => {
      const U = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return a.enableSeconds ? U.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : U;
    }), F = ee(() => M.value.filter((U) => !U.separator)), N = ee(() => (U) => {
      if (U === "hours") {
        const ve = X(+a.hours);
        return { text: ve < 10 ? `0${ve}` : `${ve}`, value: ve };
      }
      return { text: a[U] < 10 ? `0${a[U]}` : `${a[U]}`, value: a[U] };
    }), w = (U, ve) => {
      var Ee;
      if (!a.disabledTimesConfig)
        return !1;
      const C = a.disabledTimesConfig(a.order, U === "hours" ? ve : void 0);
      return C[U] ? !!((Ee = C[U]) != null && Ee.includes(ve)) : !0;
    }, k = (U) => {
      const ve = a.is24 ? 24 : 12, Ee = U === "hours" ? ve : 60, C = +a[`${U}GridIncrement`], h = U === "hours" && !a.is24 ? C : 0, x = [];
      for (let L = h; L < Ee; L += C)
        x.push({ value: L, text: L < 10 ? `0${L}` : `${L}` });
      return U === "hours" && !a.is24 && x.push({ value: 0, text: "12" }), Vr(x, (L) => ({ active: !1, disabled: c.value.times[U].includes(L.value) || !fe(L.value, U) || w(U, L.value) || D(U, L.value) }));
    }, q = (U) => U >= 0 ? U : 59, re = (U) => U >= 0 ? U : 23, fe = (U, ve) => {
      const Ee = a.minTime ? I(os(a.minTime)) : null, C = a.maxTime ? I(os(a.maxTime)) : null, h = I(
        os(
          P.value,
          ve,
          ve === "minutes" || ve === "seconds" ? q(U) : re(U)
        )
      );
      return Ee && C ? (va(h, C) || xr(h, C)) && (ha(h, Ee) || xr(h, Ee)) : Ee ? ha(h, Ee) || xr(h, Ee) : C ? va(h, C) || xr(h, C) : !0;
    }, te = (U) => a[`no${U[0].toUpperCase() + U.slice(1)}Overlay`], m = (U) => {
      te(U) || (g[U] = !g[U], g[U] || r("overlay-closed"));
    }, f = (U) => U === "hours" ? Kt : U === "minutes" ? fn : $r, R = (U, ve = !0) => {
      const Ee = ve ? O : W, C = ve ? +a[`${U}Increment`] : -+a[`${U}Increment`];
      fe(+a[U] + C, U) && r(
        `update:${U}`,
        f(U)(Ee({ [U]: +a[U] }, { [U]: +a[`${U}Increment`] }))
      );
    }, X = (U) => a.is24 ? U : (U >= 12 ? v.value = "PM" : v.value = "AM", Eb(U)), ce = () => {
      v.value === "PM" ? (v.value = "AM", r("update:hours", a.hours - 12)) : (v.value = "PM", r("update:hours", a.hours + 12)), r("am-pm-change", v.value);
    }, Y = (U) => {
      g[U] = !0;
    }, Oe = (U, ve, Ee) => {
      if (U && a.arrowNavigation) {
        Array.isArray($.value[ve]) ? $.value[ve][Ee] = U : $.value[ve] = [U];
        const C = $.value.reduce(
          (h, x) => x.map((L, K) => [...h[K] || [], x[K]]),
          []
        );
        s(a.closeTimePickerBtn), T.value && (C[1] = C[1].concat(T.value)), o(C, a.order);
      }
    }, Ie = (U, ve) => (m(U), U === "hours" && !a.is24 ? r(`update:${U}`, v.value === "PM" ? ve + 12 : ve) : r(`update:${U}`, ve));
    return t({ openChildCmp: Y }), (U, ve) => {
      var Ee;
      return U.disabled ? Q("", !0) : (V(), G("div", Rw, [
        (V(!0), G(_e, null, qe(M.value, (C, h) => {
          var x, L, K;
          return V(), G("div", {
            key: h,
            class: Ne(A.value)
          }, [
            C.separator ? (V(), G(_e, { key: 0 }, [
              Jt(" : ")
            ], 64)) : (V(), G(_e, { key: 1 }, [
              ke("button", {
                ref_for: !0,
                ref: (E) => Oe(E, h, 0),
                type: "button",
                class: Ne({
                  dp__btn: !0,
                  dp__inc_dec_button: !U.timePickerInline,
                  dp__inc_dec_button_inline: U.timePickerInline,
                  dp__tp_inline_btn_top: U.timePickerInline,
                  dp__inc_dec_button_disabled: H.value(C.type)
                }),
                "aria-label": (x = S(l)) == null ? void 0 : x.incrementValue(C.type),
                tabindex: "0",
                onKeydown: [
                  Se(Ke((E) => R(C.type), ["prevent"]), ["enter"]),
                  Se(Ke((E) => R(C.type), ["prevent"]), ["space"])
                ],
                onClick: (E) => R(C.type)
              }, [
                a.timePickerInline ? (V(), G(_e, { key: 1 }, [
                  Nw,
                  Vw
                ], 64)) : (V(), G(_e, { key: 0 }, [
                  U.$slots["arrow-up"] ? ge(U.$slots, "arrow-up", { key: 0 }) : Q("", !0),
                  U.$slots["arrow-up"] ? Q("", !0) : (V(), De(S(Nl), { key: 1 }))
                ], 64))
              ], 42, $w),
              ke("button", {
                ref_for: !0,
                ref: (E) => Oe(E, h, 1),
                type: "button",
                "aria-label": (L = S(l)) == null ? void 0 : L.openTpOverlay(C.type),
                class: Ne({
                  dp__time_display: !0,
                  dp__time_display_block: !U.timePickerInline,
                  dp__time_display_inline: U.timePickerInline,
                  "dp--time-invalid": y.value(C.type),
                  "dp--time-overlay-btn": !y.value(C.type)
                }),
                disabled: te(C.type),
                tabindex: "0",
                onKeydown: [
                  Se(Ke((E) => m(C.type), ["prevent"]), ["enter"]),
                  Se(Ke((E) => m(C.type), ["prevent"]), ["space"])
                ],
                onClick: (E) => m(C.type)
              }, [
                U.$slots[C.type] ? ge(U.$slots, C.type, {
                  key: 0,
                  text: N.value(C.type).text,
                  value: N.value(C.type).value
                }) : Q("", !0),
                U.$slots[C.type] ? Q("", !0) : (V(), G(_e, { key: 1 }, [
                  Jt(He(N.value(C.type).text), 1)
                ], 64))
              ], 42, Iw),
              ke("button", {
                ref_for: !0,
                ref: (E) => Oe(E, h, 2),
                type: "button",
                class: Ne({
                  dp__btn: !0,
                  dp__inc_dec_button: !U.timePickerInline,
                  dp__inc_dec_button_inline: U.timePickerInline,
                  dp__tp_inline_btn_bottom: U.timePickerInline,
                  dp__inc_dec_button_disabled: _.value(C.type)
                }),
                "aria-label": (K = S(l)) == null ? void 0 : K.decrementValue(C.type),
                tabindex: "0",
                onKeydown: [
                  Se(Ke((E) => R(C.type, !1), ["prevent"]), ["enter"]),
                  Se(Ke((E) => R(C.type, !1), ["prevent"]), ["space"])
                ],
                onClick: (E) => R(C.type, !1)
              }, [
                a.timePickerInline ? (V(), G(_e, { key: 1 }, [
                  Bw,
                  Lw
                ], 64)) : (V(), G(_e, { key: 0 }, [
                  U.$slots["arrow-down"] ? ge(U.$slots, "arrow-down", { key: 0 }) : Q("", !0),
                  U.$slots["arrow-down"] ? Q("", !0) : (V(), De(S(Vl), { key: 1 }))
                ], 64))
              ], 42, Fw)
            ], 64))
          ], 2);
        }), 128)),
        U.is24 ? Q("", !0) : (V(), G("div", Yw, [
          U.$slots["am-pm-button"] ? ge(U.$slots, "am-pm-button", {
            key: 0,
            toggle: ce,
            value: v.value
          }) : Q("", !0),
          U.$slots["am-pm-button"] ? Q("", !0) : (V(), G("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: T,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (Ee = S(l)) == null ? void 0 : Ee.amPmButton,
            tabindex: "0",
            onClick: ce,
            onKeydown: [
              Se(Ke(ce, ["prevent"]), ["enter"]),
              Se(Ke(ce, ["prevent"]), ["space"])
            ]
          }, He(v.value), 41, jw))
        ])),
        (V(!0), G(_e, null, qe(F.value, (C, h) => (V(), De(qn, {
          key: h,
          name: S(p)(g[C.type]),
          css: S(b)
        }, {
          default: Ve(() => [
            g[C.type] ? (V(), De(Ma, {
              key: 0,
              items: k(C.type),
              "is-last": U.autoApply && !S(u).keepActionRow,
              "esc-close": U.escClose,
              type: C.type,
              "text-input": U.textInput,
              config: U.config,
              "arrow-navigation": U.arrowNavigation,
              "aria-labels": U.ariaLabels,
              onSelected: (x) => Ie(C.type, x),
              onToggle: (x) => m(C.type),
              onResetFlow: ve[0] || (ve[0] = (x) => U.$emit("reset-flow"))
            }, Dt({
              "button-icon": Ve(() => [
                U.$slots["clock-icon"] ? ge(U.$slots, "clock-icon", { key: 0 }) : Q("", !0),
                U.$slots["clock-icon"] ? Q("", !0) : (V(), De(bo(U.timePickerInline ? S(Yr) : S($l)), { key: 1 }))
              ]),
              _: 2
            }, [
              U.$slots[`${C.type}-overlay-value`] ? {
                name: "item",
                fn: Ve(({ item: x }) => [
                  ge(U.$slots, `${C.type}-overlay-value`, {
                    text: x.text,
                    value: x.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "onSelected", "onToggle"])) : Q("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Uw = { class: "dp--tp-wrap" }, Ww = ["aria-label", "tabindex"], qw = ["tabindex"], zw = ["aria-label"], rf = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => !1
    },
    ...en
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, { buildMatrix: o, setTimePicker: s } = zn(), l = vr(), { defaultedTransitions: i, defaultedAriaLabels: c, defaultedTextInput: u, defaultedConfig: d, defaultedRange: p } = st(a), { transitionName: b, showTransition: g } = xa(i), { hideNavigationButtons: v } = Ro(), T = J(null), $ = J(null), I = J([]), y = J(null);
    xt(() => {
      r("mount"), !a.timePicker && a.arrowNavigation ? o([gt(T.value)], "time") : s(!0, a.timePicker);
    });
    const P = ee(() => p.value.enabled && a.modelAuto ? jd(a.internalModelValue) : !0), D = J(!1), B = (k) => ({
      hours: Array.isArray(a.hours) ? a.hours[k] : a.hours,
      minutes: Array.isArray(a.minutes) ? a.minutes[k] : a.minutes,
      seconds: Array.isArray(a.seconds) ? a.seconds[k] : a.seconds
    }), H = ee(() => {
      const k = [];
      if (p.value.enabled)
        for (let q = 0; q < 2; q++)
          k.push(B(q));
      else
        k.push(B(0));
      return k;
    }), _ = (k, q = !1, re = "") => {
      q || r("reset-flow"), D.value = k, r(k ? "overlay-opened" : "overlay-closed"), a.arrowNavigation && s(k), Qt(() => {
        re !== "" && I.value[0] && I.value[0].openChildCmp(re);
      });
    }, O = ee(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: a.autoApply && !d.value.keepActionRow
    })), W = Vt(l, "timePicker"), A = (k, q, re) => p.value.enabled ? q === 0 ? [k, H.value[1][re]] : [H.value[0][re], k] : k, M = (k) => {
      r("update:hours", k);
    }, F = (k) => {
      r("update:minutes", k);
    }, N = (k) => {
      r("update:seconds", k);
    }, w = () => {
      if (y.value && !u.value.enabled && !a.noOverlayFocus) {
        const k = Hd(y.value);
        k && k.focus({ preventScroll: !0 });
      }
    };
    return t({ toggleTimePicker: _ }), (k, q) => {
      var re;
      return V(), G("div", Uw, [
        !k.timePicker && !k.timePickerInline ? Vn((V(), G("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: T,
          type: "button",
          class: Ne(O.value),
          "aria-label": (re = S(c)) == null ? void 0 : re.openTimePicker,
          tabindex: k.noOverlayFocus ? void 0 : 0,
          onKeydown: [
            q[0] || (q[0] = Se((fe) => _(!0), ["enter"])),
            q[1] || (q[1] = Se((fe) => _(!0), ["space"]))
          ],
          onClick: q[2] || (q[2] = (fe) => _(!0))
        }, [
          k.$slots["clock-icon"] ? ge(k.$slots, "clock-icon", { key: 0 }) : Q("", !0),
          k.$slots["clock-icon"] ? Q("", !0) : (V(), De(S($l), { key: 1 }))
        ], 42, Ww)), [
          [Fa, !S(v)(k.hideNavigation, "time")]
        ]) : Q("", !0),
        Xe(qn, {
          name: S(b)(D.value),
          css: S(g) && !k.timePickerInline
        }, {
          default: Ve(() => {
            var fe;
            return [
              D.value || k.timePicker || k.timePickerInline ? (V(), G("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: y,
                class: Ne({
                  dp__overlay: !k.timePickerInline,
                  "dp--overlay-absolute": !a.timePicker && !k.timePickerInline,
                  "dp--overlay-relative": a.timePicker
                }),
                style: Ct(k.timePicker ? { height: `${S(d).modeHeight}px` } : void 0),
                tabindex: k.timePickerInline ? void 0 : 0
              }, [
                ke("div", {
                  class: Ne(
                    k.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  k.$slots["time-picker-overlay"] ? ge(k.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: M,
                    setMinutes: F,
                    setSeconds: N
                  }) : Q("", !0),
                  k.$slots["time-picker-overlay"] ? Q("", !0) : (V(), G("div", {
                    key: 1,
                    class: Ne(k.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (V(!0), G(_e, null, qe(H.value, (te, m) => Vn((V(), De(Hw, _t({ key: m }, {
                      ...k.$props,
                      order: m,
                      hours: te.hours,
                      minutes: te.minutes,
                      seconds: te.seconds,
                      closeTimePickerBtn: $.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: m === 0 ? k.fixedStart : k.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: I,
                      "validate-time": (f, R) => e.validateTime(f, A(R, m, f)),
                      "onUpdate:hours": (f) => M(A(f, m, "hours")),
                      "onUpdate:minutes": (f) => F(A(f, m, "minutes")),
                      "onUpdate:seconds": (f) => N(A(f, m, "seconds")),
                      onMounted: w,
                      onOverlayClosed: w,
                      onAmPmChange: q[3] || (q[3] = (f) => k.$emit("am-pm-change", f))
                    }), Dt({ _: 2 }, [
                      qe(S(W), (f, R) => ({
                        name: f,
                        fn: Ve((X) => [
                          ge(k.$slots, f, ht(Pt(X)))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Fa, m === 0 ? !0 : P.value]
                    ])), 128))
                  ], 2)),
                  !k.timePicker && !k.timePickerInline ? Vn((V(), G("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: $,
                    type: "button",
                    class: Ne(O.value),
                    "aria-label": (fe = S(c)) == null ? void 0 : fe.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      q[4] || (q[4] = Se((te) => _(!1), ["enter"])),
                      q[5] || (q[5] = Se((te) => _(!1), ["space"]))
                    ],
                    onClick: q[6] || (q[6] = (te) => _(!1))
                  }, [
                    k.$slots["calendar-icon"] ? ge(k.$slots, "calendar-icon", { key: 0 }) : Q("", !0),
                    k.$slots["calendar-icon"] ? Q("", !0) : (V(), De(S(Yr), { key: 1 }))
                  ], 42, zw)), [
                    [Fa, !S(v)(k.hideNavigation, "time")]
                  ]) : Q("", !0)
                ], 2)
              ], 14, qw)) : Q("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), af = (e, t, n, r) => {
  const { defaultedRange: a } = st(e), o = (y, P) => Array.isArray(t[y]) ? t[y][P] : t[y], s = (y) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[y] : t.seconds : 0, l = (y, P) => y ? P !== void 0 ? Fn(y, o("hours", P), o("minutes", P), s(P)) : Fn(y, t.hours, t.minutes, s()) : Ol(Z(), s(P)), i = (y, P) => {
    t[y] = P;
  }, c = ee(() => e.modelAuto && a.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : a.value.enabled), u = (y, P) => {
    const D = Object.fromEntries(
      Object.keys(t).map((B) => B === y ? [B, P] : [B, t[B]].slice())
    );
    if (c.value && !a.value.disableTimeRangeValidation) {
      const B = (_) => n.value ? Fn(
        n.value[_],
        D.hours[_],
        D.minutes[_],
        D.seconds[_]
      ) : null, H = (_) => Dl(n.value[_], 0);
      return !(Be(B(0), B(1)) && (ha(B(0), H(1)) || va(B(1), H(0))));
    }
    return !0;
  }, d = (y, P) => {
    u(y, P) && (i(y, P), r && r());
  }, p = (y) => {
    d("hours", y);
  }, b = (y) => {
    d("minutes", y);
  }, g = (y) => {
    d("seconds", y);
  }, v = (y, P, D, B) => {
    P && p(y), !P && !D && b(y), D && g(y), n.value && B(n.value);
  }, T = (y) => {
    if (y) {
      const P = Array.isArray(y), D = P ? [+y[0].hours, +y[1].hours] : +y.hours, B = P ? [+y[0].minutes, +y[1].minutes] : +y.minutes, H = P ? [+y[0].seconds, +y[1].seconds] : +y.seconds;
      i("hours", D), i("minutes", B), e.enableSeconds && i("seconds", H);
    }
  }, $ = (y, P) => {
    const D = {
      hours: Array.isArray(t.hours) ? t.hours[y] : t.hours,
      disabledArr: []
    };
    return (P || P === 0) && (D.hours = P), Array.isArray(e.disabledTimes) && (D.disabledArr = a.value.enabled && Array.isArray(e.disabledTimes[y]) ? e.disabledTimes[y] : e.disabledTimes), D;
  }, I = ee(() => (y, P) => {
    var D;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: B, hours: H } = $(y, P), _ = B.filter((O) => +O.hours === H);
      return ((D = _[0]) == null ? void 0 : D.minutes) === "*" ? { hours: [H], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (_ == null ? void 0 : _.map((O) => +O.minutes)) ?? [],
        seconds: (_ == null ? void 0 : _.map((O) => O.seconds ? +O.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: i,
    updateHours: p,
    updateMinutes: b,
    updateSeconds: g,
    getSetDateTime: l,
    updateTimeValues: v,
    getSecondsValue: s,
    assignStartTime: T,
    validateTime: u,
    disabledTimesConfig: I
  };
}, Gw = (e, t) => {
  const { modelValue: n, time: r } = ka(e, t), { defaultedStartTime: a, defaultedRange: o } = st(e), { updateTimeValues: s, getSetDateTime: l, setTime: i, assignStartTime: c, disabledTimesConfig: u, validateTime: d } = af(e, r, n), p = (y) => {
    const { hours: P, minutes: D, seconds: B } = y;
    return { hours: +P, minutes: +D, seconds: B ? +B : 0 };
  }, b = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const P = p(e.startTime[0]), D = p(e.startTime[1]);
        return [Ze(Z(), P), Ze(Z(), D)];
      }
      const y = p(e.startTime);
      return Ze(Z(), y);
    }
    return o.value.enabled ? [null, null] : null;
  }, g = () => {
    if (o.value.enabled) {
      const [y, P] = b();
      n.value = [l(y, 0), l(P, 1)];
    } else
      n.value = l(b());
  }, v = (y) => Array.isArray(y) ? [fr(Z(y[0])), fr(Z(y[1]))] : [fr(y ?? Z())], T = (y, P, D) => {
    i("hours", y), i("minutes", P), i("seconds", e.enableSeconds ? D : 0);
  }, $ = () => {
    const [y, P] = v(n.value);
    return o.value.enabled ? T(
      [y.hours, P.hours],
      [y.minutes, P.minutes],
      [y.seconds, P.seconds]
    ) : T(y.hours, y.minutes, y.seconds);
  };
  xt(() => {
    if (!e.shadow)
      return c(a.value), n.value ? $() : g();
  });
  const I = () => {
    Array.isArray(n.value) ? n.value = n.value.map((y, P) => y && l(y, P)) : n.value = l(n.value), t("time-update");
  };
  return {
    modelValue: n,
    time: r,
    disabledTimesConfig: u,
    updateTime: (y, P = !0, D = !1) => {
      s(y, P, D, I);
    },
    validateTime: d
  };
}, Kw = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...en
  },
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, o = vr(), s = Vt(o, "timePicker"), { time: l, modelValue: i, disabledTimesConfig: c, updateTime: u, validateTime: d } = Gw(a, r);
    return t({ getSidebarProps: () => ({
      modelValue: i,
      time: l,
      updateTime: u
    }) }), (p, b) => (V(), De(No, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: Ve(() => [
        Xe(rf, _t(p.$props, {
          hours: S(l).hours,
          minutes: S(l).minutes,
          seconds: S(l).seconds,
          "internal-model-value": p.internalModelValue,
          "disabled-times-config": S(c),
          "validate-time": S(d),
          "onUpdate:hours": b[0] || (b[0] = (g) => S(u)(g)),
          "onUpdate:minutes": b[1] || (b[1] = (g) => S(u)(g, !1)),
          "onUpdate:seconds": b[2] || (b[2] = (g) => S(u)(g, !1, !0)),
          onAmPmChange: b[3] || (b[3] = (g) => p.$emit("am-pm-change", g))
        }), Dt({ _: 2 }, [
          qe(S(s), (g, v) => ({
            name: g,
            fn: Ve((T) => [
              ge(p.$slots, g, ht(Pt(T)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), Xw = { class: "dp__month_year_row" }, Qw = ["aria-label", "onClick", "onKeydown"], Jw = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...en
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, {
      defaultedTransitions: o,
      defaultedAriaLabels: s,
      defaultedMultiCalendars: l,
      defaultedFilters: i,
      defaultedConfig: c,
      defaultedHighlight: u,
      propDates: d
    } = st(a), { transitionName: p, showTransition: b } = xa(o), { buildMatrix: g } = zn(), { handleMonthYearChange: v, isDisabled: T, updateMonthYear: $ } = uw(a, r), { showLeftIcon: I, showRightIcon: y } = Ro(), P = J(!1), D = J(!1), B = J([null, null, null, null]);
    xt(() => {
      r("mount");
    });
    const H = (m) => ({
      get: () => a[m],
      set: (f) => {
        const R = m === Ut.month ? Ut.year : Ut.month;
        r("update-month-year", { [m]: f, [R]: a[R] }), m === Ut.month ? w(!0) : k(!0);
      }
    }), _ = ee(H(Ut.month)), O = ee(H(Ut.year)), W = ee(() => (m) => ({
      month: a.month,
      year: a.year,
      items: m === Ut.month ? a.months : a.years,
      instance: a.instance,
      updateMonthYear: $,
      toggle: m === Ut.month ? w : k
    })), A = ee(() => a.months.find((f) => f.value === a.month) || { text: "", value: 0 }), M = ee(() => Vr(a.months, (m) => {
      const f = a.month === m.value, R = ya(
        m.value,
        Ud(a.year, d.value.minDate),
        Wd(a.year, d.value.maxDate)
      ) || i.value.months.includes(m.value), X = Xd(u.value, m.value, a.year);
      return { active: f, disabled: R, highlighted: X };
    })), F = ee(() => Vr(a.years, (m) => {
      const f = a.year === m.value, R = ya(
        m.value,
        Ir(d.value.minDate),
        Ir(d.value.maxDate)
      ) || i.value.years.includes(m.value), X = Ll(u.value, m.value);
      return { active: f, disabled: R, highlighted: X };
    })), N = (m, f) => {
      f !== void 0 ? m.value = f : m.value = !m.value, m.value || r("overlay-closed");
    }, w = (m = !1, f) => {
      q(m), N(P, f);
    }, k = (m = !1, f) => {
      q(m), N(D, f);
    }, q = (m) => {
      m || r("reset-flow");
    }, re = (m, f) => {
      a.arrowNavigation && (B.value[f] = gt(m), g(B.value, "monthYear"));
    }, fe = ee(() => {
      var m, f;
      return [
        {
          type: Ut.month,
          index: 1,
          toggle: w,
          modelValue: _.value,
          updateModelValue: (R) => _.value = R,
          text: A.value.text,
          showSelectionGrid: P.value,
          items: M.value,
          ariaLabel: (m = s.value) == null ? void 0 : m.openMonthsOverlay
        },
        {
          type: Ut.year,
          index: 2,
          toggle: k,
          modelValue: O.value,
          updateModelValue: (R) => O.value = R,
          text: a.year,
          showSelectionGrid: D.value,
          items: F.value,
          ariaLabel: (f = s.value) == null ? void 0 : f.openYearsOverlay
        }
      ];
    }), te = ee(() => a.disableYearSelect ? [fe.value[0]] : a.yearFirst ? [...fe.value].reverse() : fe.value);
    return t({
      toggleMonthPicker: w,
      toggleYearPicker: k,
      handleMonthYearChange: v
    }), (m, f) => {
      var R, X, ce;
      return V(), G("div", Xw, [
        m.$slots["month-year"] ? ge(m.$slots, "month-year", ht(_t({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: S($), handleMonthYearChange: S(v), instance: e.instance }))) : (V(), G(_e, { key: 1 }, [
          S(I)(S(l), e.instance) && !m.vertical ? (V(), De(sa, {
            key: 0,
            "aria-label": (R = S(s)) == null ? void 0 : R.prevMonth,
            disabled: S(T)(!1),
            onActivate: f[0] || (f[0] = (Y) => S(v)(!1, !0)),
            onSetRef: f[1] || (f[1] = (Y) => re(Y, 0))
          }, {
            default: Ve(() => [
              m.$slots["arrow-left"] ? ge(m.$slots, "arrow-left", { key: 0 }) : Q("", !0),
              m.$slots["arrow-left"] ? Q("", !0) : (V(), De(S(El), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : Q("", !0),
          ke("div", {
            class: Ne(["dp__month_year_wrap", {
              dp__year_disable_select: m.disableYearSelect
            }])
          }, [
            (V(!0), G(_e, null, qe(te.value, (Y, Oe) => (V(), G(_e, {
              key: Y.type
            }, [
              ke("button", {
                ref_for: !0,
                ref: (Ie) => re(Ie, Oe + 1),
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": Y.ariaLabel,
                onClick: Y.toggle,
                onKeydown: [
                  Se(Ke(Y.toggle, ["prevent"]), ["enter"]),
                  Se(Ke(Y.toggle, ["prevent"]), ["space"])
                ]
              }, [
                m.$slots[Y.type] ? ge(m.$slots, Y.type, {
                  key: 0,
                  text: Y.text,
                  value: a[Y.type]
                }) : Q("", !0),
                m.$slots[Y.type] ? Q("", !0) : (V(), G(_e, { key: 1 }, [
                  Jt(He(Y.text), 1)
                ], 64))
              ], 40, Qw),
              Xe(qn, {
                name: S(p)(Y.showSelectionGrid),
                css: S(b)
              }, {
                default: Ve(() => [
                  Y.showSelectionGrid ? (V(), De(Ma, {
                    key: 0,
                    items: Y.items,
                    "arrow-navigation": m.arrowNavigation,
                    "hide-navigation": m.hideNavigation,
                    "is-last": m.autoApply && !S(c).keepActionRow,
                    "skip-button-ref": !1,
                    config: m.config,
                    type: Y.type,
                    "header-refs": [],
                    "esc-close": m.escClose,
                    "menu-wrap-ref": m.menuWrapRef,
                    "text-input": m.textInput,
                    "aria-labels": m.ariaLabels,
                    onSelected: Y.updateModelValue,
                    onToggle: Y.toggle
                  }, Dt({
                    "button-icon": Ve(() => [
                      m.$slots["calendar-icon"] ? ge(m.$slots, "calendar-icon", { key: 0 }) : Q("", !0),
                      m.$slots["calendar-icon"] ? Q("", !0) : (V(), De(S(Yr), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    m.$slots[`${Y.type}-overlay-value`] ? {
                      name: "item",
                      fn: Ve(({ item: Ie }) => [
                        ge(m.$slots, `${Y.type}-overlay-value`, {
                          text: Ie.text,
                          value: Ie.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    m.$slots[`${Y.type}-overlay`] ? {
                      name: "overlay",
                      fn: Ve(() => [
                        ge(m.$slots, `${Y.type}-overlay`, ht(Pt(W.value(Y.type))))
                      ]),
                      key: "1"
                    } : void 0,
                    m.$slots[`${Y.type}-overlay-header`] ? {
                      name: "header",
                      fn: Ve(() => [
                        ge(m.$slots, `${Y.type}-overlay-header`, {
                          toggle: Y.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "onSelected", "onToggle"])) : Q("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          S(I)(S(l), e.instance) && m.vertical ? (V(), De(sa, {
            key: 1,
            "aria-label": (X = S(s)) == null ? void 0 : X.prevMonth,
            disabled: S(T)(!1),
            onActivate: f[2] || (f[2] = (Y) => S(v)(!1, !0))
          }, {
            default: Ve(() => [
              m.$slots["arrow-up"] ? ge(m.$slots, "arrow-up", { key: 0 }) : Q("", !0),
              m.$slots["arrow-up"] ? Q("", !0) : (V(), De(S(Nl), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : Q("", !0),
          S(y)(S(l), e.instance) ? (V(), De(sa, {
            key: 2,
            ref: "rightIcon",
            disabled: S(T)(!0),
            "aria-label": (ce = S(s)) == null ? void 0 : ce.nextMonth,
            onActivate: f[3] || (f[3] = (Y) => S(v)(!0, !0)),
            onSetRef: f[4] || (f[4] = (Y) => re(Y, m.disableYearSelect ? 2 : 3))
          }, {
            default: Ve(() => [
              m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? ge(m.$slots, m.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : Q("", !0),
              m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? Q("", !0) : (V(), De(bo(m.vertical ? S(Vl) : S(Rl)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : Q("", !0)
        ], 64))
      ]);
    };
  }
}), Zw = ["aria-label"], e_ = {
  class: "dp__calendar_header",
  role: "row"
}, t_ = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, n_ = ["aria-label"], r_ = /* @__PURE__ */ ke("div", { class: "dp__calendar_header_separator" }, null, -1), a_ = ["aria-label"], o_ = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, s_ = { class: "dp__cell_inner" }, l_ = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], i_ = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...en
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, { buildMultiLevelMatrix: o } = zn(), {
      defaultedTransitions: s,
      defaultedConfig: l,
      defaultedAriaLabels: i,
      defaultedMultiCalendars: c,
      defaultedWeekNumbers: u
    } = st(a), d = J(null), p = J({
      bottom: "",
      left: "",
      transform: ""
    }), b = J([]), g = J(null), v = J(!0), T = J(""), $ = J({ startX: 0, endX: 0, startY: 0, endY: 0 }), I = J([]), y = J({ left: "50%" }), P = ee(() => a.calendar ? a.calendar(a.mappedDates) : a.mappedDates), D = ee(() => a.dayNames ? Array.isArray(a.dayNames) ? a.dayNames : a.dayNames(a.locale, +a.weekStart) : Ob(a.formatLocale, a.locale, +a.weekStart));
    xt(() => {
      r("mount", { cmp: "calendar", refs: b }), l.value.noSwipe || g.value && (g.value.addEventListener("touchstart", k, { passive: !1 }), g.value.addEventListener("touchend", q, { passive: !1 }), g.value.addEventListener("touchmove", re, { passive: !1 })), a.monthChangeOnScroll && g.value && g.value.addEventListener("wheel", m, { passive: !1 });
    });
    const B = (Y) => Y ? a.vertical ? "vNext" : "next" : a.vertical ? "vPrevious" : "previous", H = (Y, Oe) => {
      if (a.transitions) {
        const Ie = Ft(yn(Z(), a.month, a.year));
        T.value = ft(Ft(yn(Z(), Y, Oe)), Ie) ? s.value[B(!0)] : s.value[B(!1)], v.value = !1, Qt(() => {
          v.value = !0;
        });
      }
    }, _ = ee(
      () => ({
        [a.calendarClassName]: !!a.calendarClassName
      })
    ), O = ee(() => (Y) => {
      const Oe = Rb(Y);
      return {
        dp__marker_dot: Oe.type === "dot",
        dp__marker_line: Oe.type === "line"
      };
    }), W = ee(() => (Y) => Be(Y, d.value)), A = ee(() => ({
      dp__calendar: !0,
      dp__calendar_next: c.value.count > 0 && a.instance !== 0
    })), M = ee(() => (Y) => a.hideOffsetDates ? Y.current : !0), F = (Y) => dn(Y, "yyyy-MM-dd"), N = async (Y, Oe, Ie) => {
      var U, ve;
      if (r("set-hover-date", Y), (ve = (U = Y.marker) == null ? void 0 : U.tooltip) != null && ve.length) {
        const Ee = gt(b.value[Oe][Ie]);
        if (Ee) {
          const { width: C, height: h } = Ee.getBoundingClientRect();
          d.value = Y.value;
          let x = { left: `${C / 2}px` }, L = -50;
          if (await Qt(), I.value[0]) {
            const { left: K, width: E } = I.value[0].getBoundingClientRect();
            K < 0 && (x = { left: "0" }, L = 0, y.value.left = `${C / 2}px`), window.innerWidth < K + E && (x = { right: "0" }, L = 0, y.value.left = `${E - C / 2}px`);
          }
          p.value = {
            bottom: `${h}px`,
            ...x,
            transform: `translateX(${L}%)`
          }, r("tooltip-open", Y.marker);
        }
      }
    }, w = (Y) => {
      d.value && (d.value = null, p.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), r("tooltip-close", Y.marker));
    }, k = (Y) => {
      $.value.startX = Y.changedTouches[0].screenX, $.value.startY = Y.changedTouches[0].screenY;
    }, q = (Y) => {
      $.value.endX = Y.changedTouches[0].screenX, $.value.endY = Y.changedTouches[0].screenY, fe();
    }, re = (Y) => {
      a.vertical && !a.inline && Y.preventDefault();
    }, fe = () => {
      const Y = a.vertical ? "Y" : "X";
      Math.abs($.value[`start${Y}`] - $.value[`end${Y}`]) > 10 && r("handle-swipe", $.value[`start${Y}`] > $.value[`end${Y}`] ? "right" : "left");
    }, te = (Y, Oe, Ie) => {
      Y && (Array.isArray(b.value[Oe]) ? b.value[Oe][Ie] = Y : b.value[Oe] = [Y]), a.arrowNavigation && o(b.value, "calendar");
    }, m = (Y) => {
      a.monthChangeOnScroll && (Y.preventDefault(), r("handle-scroll", Y));
    }, f = (Y) => u.value.type === "local" ? Sl(Y.value, { weekStartsOn: +a.weekStart }) : u.value.type === "iso" ? Tl(Y.value) : typeof u.value.type == "function" ? u.value.type(Y.value) : "", R = (Y) => {
      const Oe = Y[0];
      return u.value.hideOnOffsetDates ? Y.some((Ie) => Ie.current) ? f(Oe) : "" : f(Oe);
    }, X = (Y, Oe) => {
      In(Y, l.value), r("select-date", Oe);
    }, ce = (Y) => {
      In(Y, l.value);
    };
    return t({ triggerTransition: H }), (Y, Oe) => {
      var Ie;
      return V(), G("div", {
        class: Ne(A.value)
      }, [
        ke("div", {
          ref_key: "calendarWrapRef",
          ref: g,
          role: "grid",
          class: Ne(_.value),
          "aria-label": (Ie = S(i)) == null ? void 0 : Ie.calendarWrap
        }, [
          ke("div", e_, [
            Y.weekNumbers ? (V(), G("div", t_, He(Y.weekNumName), 1)) : Q("", !0),
            (V(!0), G(_e, null, qe(D.value, (U, ve) => {
              var Ee, C;
              return V(), G("div", {
                key: ve,
                class: "dp__calendar_header_item",
                role: "gridcell",
                "aria-label": (C = (Ee = S(i)) == null ? void 0 : Ee.weekDay) == null ? void 0 : C.call(Ee, ve)
              }, [
                Y.$slots["calendar-header"] ? ge(Y.$slots, "calendar-header", {
                  key: 0,
                  day: U,
                  index: ve
                }) : Q("", !0),
                Y.$slots["calendar-header"] ? Q("", !0) : (V(), G(_e, { key: 1 }, [
                  Jt(He(U), 1)
                ], 64))
              ], 8, n_);
            }), 128))
          ]),
          r_,
          Xe(qn, {
            name: T.value,
            css: !!Y.transitions
          }, {
            default: Ve(() => {
              var U;
              return [
                v.value ? (V(), G("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((U = S(i)) == null ? void 0 : U.calendarDays) || void 0
                }, [
                  (V(!0), G(_e, null, qe(P.value, (ve, Ee) => (V(), G("div", {
                    key: Ee,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    Y.weekNumbers ? (V(), G("div", o_, [
                      ke("div", s_, He(R(ve.days)), 1)
                    ])) : Q("", !0),
                    (V(!0), G(_e, null, qe(ve.days, (C, h) => {
                      var x, L, K;
                      return V(), G("div", {
                        id: F(C.value),
                        ref_for: !0,
                        ref: (E) => te(E, Ee, h),
                        key: h + Ee,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (C.classData.dp__active_date || C.classData.dp__range_start || C.classData.dp__range_start) ?? void 0,
                        "aria-disabled": C.classData.dp__cell_disabled || void 0,
                        "aria-label": (L = (x = S(i)) == null ? void 0 : x.day) == null ? void 0 : L.call(x, C),
                        tabindex: "0",
                        onClick: Ke((E) => X(E, C), ["prevent"]),
                        onKeydown: [
                          Se((E) => Y.$emit("select-date", C), ["enter"]),
                          Se((E) => Y.$emit("handle-space", C), ["space"])
                        ],
                        onMouseenter: (E) => N(C, Ee, h),
                        onMouseleave: (E) => w(C)
                      }, [
                        ke("div", {
                          class: Ne(["dp__cell_inner", C.classData])
                        }, [
                          Y.$slots.day && M.value(C) ? ge(Y.$slots, "day", {
                            key: 0,
                            day: +C.text,
                            date: C.value
                          }) : Q("", !0),
                          Y.$slots.day ? Q("", !0) : (V(), G(_e, { key: 1 }, [
                            Jt(He(C.text), 1)
                          ], 64)),
                          C.marker && M.value(C) ? (V(), G(_e, { key: 2 }, [
                            Y.$slots.marker ? ge(Y.$slots, "marker", {
                              key: 0,
                              marker: C.marker,
                              day: +C.text,
                              date: C.value
                            }) : (V(), G("div", {
                              key: 1,
                              class: Ne(O.value(C.marker)),
                              style: Ct(C.marker.color ? { backgroundColor: C.marker.color } : {})
                            }, null, 6))
                          ], 64)) : Q("", !0),
                          W.value(C.value) ? (V(), G("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: I,
                            class: "dp__marker_tooltip",
                            style: Ct(p.value)
                          }, [
                            (K = C.marker) != null && K.tooltip ? (V(), G("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: ce
                            }, [
                              (V(!0), G(_e, null, qe(C.marker.tooltip, (E, oe) => (V(), G("div", {
                                key: oe,
                                class: "dp__tooltip_text"
                              }, [
                                Y.$slots["marker-tooltip"] ? ge(Y.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: E,
                                  day: C.value
                                }) : Q("", !0),
                                Y.$slots["marker-tooltip"] ? Q("", !0) : (V(), G(_e, { key: 1 }, [
                                  ke("div", {
                                    class: "dp__tooltip_mark",
                                    style: Ct(E.color ? { backgroundColor: E.color } : {})
                                  }, null, 4),
                                  ke("div", null, He(E.text), 1)
                                ], 64))
                              ]))), 128)),
                              ke("div", {
                                class: "dp__arrow_bottom_tp",
                                style: Ct(y.value)
                              }, null, 4)
                            ])) : Q("", !0)
                          ], 4)) : Q("", !0)
                        ], 2)
                      ], 40, l_);
                    }), 128))
                  ]))), 128))
                ], 8, a_)) : Q("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, Zw)
      ], 2);
    };
  }
}), _u = (e) => Array.isArray(e), u_ = (e, t, n, r) => {
  const a = J([]), o = J(/* @__PURE__ */ new Date()), { modelValue: s, calendars: l, time: i } = ka(e, t), { defaultedMultiCalendars: c, defaultedStartTime: u, defaultedRange: d, defaultedTz: p, propDates: b } = st(e), { validateMonthYearInRange: g, isDisabled: v, isDateRangeAllowed: T, checkMinMaxRange: $ } = Gn(e), { updateTimeValues: I, getSetDateTime: y, setTime: P, assignStartTime: D, validateTime: B, disabledTimesConfig: H } = af(e, i, s, r), _ = ee(
    () => (j) => l.value[j] ? l.value[j].month : 0
  ), O = ee(
    () => (j) => l.value[j] ? l.value[j].year : 0
  ), W = (j, se, we) => {
    var Pe, ne;
    l.value[j] || (l.value[j] = { month: 0, year: 0 }), l.value[j].month = vu(se) ? (Pe = l.value[j]) == null ? void 0 : Pe.month : se, l.value[j].year = vu(we) ? (ne = l.value[j]) == null ? void 0 : ne.year : we;
  }, A = () => {
    e.autoApply && t("select-date");
  };
  ut(
    s,
    (j, se) => {
      JSON.stringify(j) !== JSON.stringify(se) && N();
    },
    { deep: !0 }
  ), xt(() => {
    e.shadow || (s.value || (ce(), u.value && D(u.value)), N(!0), e.focusStartDate && e.startDate && ce());
  });
  const M = ee(() => {
    var j;
    return (j = e.flow) != null && j.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), F = () => {
    e.autoApply && M.value && t("auto-apply");
  }, N = (j = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? (a.value = s.value, m(j)) : q(s.value, j);
    if (c.value.count && j && !e.startDate)
      return k(Z(), j);
  }, w = () => Array.isArray(s.value) && d.value.enabled ? Fe(s.value[0]) === Fe(s.value[1] ?? s.value[0]) : !1, k = (j, se = !1) => {
    if ((!c.value.count || !c.value.static || se) && W(0, Fe(j), $e(j)), c.value.count && (!c.value.solo || !s.value || w()))
      for (let we = 1; we < c.value.count; we++) {
        const Pe = Ze(Z(), { month: _.value(we - 1), year: O.value(we - 1) }), ne = _d(Pe, { months: 1 });
        l.value[we] = { month: Fe(ne), year: $e(ne) };
      }
  }, q = (j, se) => {
    k(j), P("hours", Kt(j)), P("minutes", fn(j)), P("seconds", $r(j)), c.value.count && se && X();
  }, re = (j) => {
    if (c.value.count) {
      if (c.value.solo)
        return 0;
      const se = Fe(j[0]), we = Fe(j[1]);
      return Math.abs(we - se) < c.value.count ? 0 : 1;
    }
    return 1;
  }, fe = (j, se) => {
    j[1] && d.value.showLastInRange ? k(j[re(j)], se) : k(j[0], se);
    const we = (Pe, ne) => [
      Pe(j[0]),
      j[1] ? Pe(j[1]) : i[ne][1]
    ];
    P("hours", we(Kt, "hours")), P("minutes", we(fn, "minutes")), P("seconds", we($r, "seconds"));
  }, te = (j, se) => {
    if ((d.value.enabled || e.weekPicker) && !e.multiDates)
      return fe(j, se);
    if (e.multiDates && se) {
      const we = j[j.length - 1];
      return q(we, se);
    }
  }, m = (j) => {
    const se = s.value;
    te(se, j), c.value.count && c.value.solo && X();
  }, f = (j, se) => {
    const we = Ze(Z(), { month: _.value(se), year: O.value(se) }), Pe = j < 0 ? Gt(we, 1) : Nr(we, 1);
    g(Fe(Pe), $e(Pe), j < 0, e.preventMinMaxNavigation) && (W(se, Fe(Pe), $e(Pe)), t("update-month-year", { instance: se, month: Fe(Pe), year: $e(Pe) }), c.value.count && !c.value.solo && R(se), n());
  }, R = (j) => {
    for (let se = j - 1; se >= 0; se--) {
      const we = Nr(Ze(Z(), { month: _.value(se + 1), year: O.value(se + 1) }), 1);
      W(se, Fe(we), $e(we));
    }
    for (let se = j + 1; se <= c.value.count - 1; se++) {
      const we = Gt(Ze(Z(), { month: _.value(se - 1), year: O.value(se - 1) }), 1);
      W(se, Fe(we), $e(we));
    }
  }, X = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const j = Z(
        Z(s.value[1] ? s.value[1] : Gt(s.value[0], 1))
      ), [se, we] = [Fe(s.value[0]), $e(s.value[0])], [Pe, ne] = [Fe(s.value[1]), $e(s.value[1])];
      (se !== Pe || se === Pe && we !== ne) && c.value.solo && W(1, Fe(j), $e(j));
    } else
      s.value && !Array.isArray(s.value) && (W(0, Fe(s.value), $e(s.value)), k(Z()));
  }, ce = () => {
    e.startDate && (W(0, Fe(Z(e.startDate)), $e(Z(e.startDate))), c.value.count && R(0));
  }, Y = (j, se) => {
    if (e.monthChangeOnScroll) {
      const we = (/* @__PURE__ */ new Date()).getTime() - o.value.getTime(), Pe = Math.abs(j.deltaY);
      let ne = 500;
      Pe > 1 && (ne = 100), Pe > 100 && (ne = 0), we > ne && (o.value = /* @__PURE__ */ new Date(), f(e.monthChangeOnScroll !== "inverse" ? -j.deltaY : j.deltaY, se));
    }
  }, Oe = (j, se, we = !1) => {
    e.monthChangeOnArrows && e.vertical === we && Ie(j, se);
  }, Ie = (j, se) => {
    f(j === "right" ? -1 : 1, se);
  }, U = (j) => {
    if (b.value.markers)
      return lo(j.value, b.value.markers);
  }, ve = (j, se) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [j == 0, !0];
      case "fair":
        return [j == 0 || se > j, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, Ee = (j, se, we, Pe) => {
    if (e.sixWeeks && j.length < 6) {
      const ne = 6 - j.length, he = (se.getDay() + 7 - Pe) % 7, ye = 6 - (we.getDay() + 7 - Pe) % 7, [Bt, tn] = ve(he, ye);
      for (let Kn = 1; Kn <= ne; Kn++)
        if (tn ? !!(Kn % 2) == Bt : Bt) {
          const _n = j[0].days[0], Fo = C(Wt(_n.value, -7), Fe(se));
          j.unshift({ days: Fo });
        } else {
          const _n = j[j.length - 1], Fo = _n.days[_n.days.length - 1], of = C(Wt(Fo.value, 1), Fe(se));
          j.push({ days: of });
        }
    }
    return j;
  }, C = (j, se) => {
    const we = Z(j), Pe = [];
    for (let ne = 0; ne < 7; ne++) {
      const he = Wt(we, ne), ye = Fe(he) !== se;
      Pe.push({
        text: e.hideOffsetDates && ye ? "" : he.getDate(),
        value: he,
        current: !ye,
        classData: {}
      });
    }
    return Pe;
  }, h = (j, se) => {
    const we = [], Pe = new Date(se, j), ne = new Date(se, j + 1, 0), he = e.weekStart, ye = mn(Pe, { weekStartsOn: he }), Bt = (tn) => {
      const Kn = C(tn, j);
      if (we.push({ days: Kn }), !we[we.length - 1].days.some(
        (_n) => Be(Ft(_n.value), Ft(ne))
      )) {
        const _n = Wt(tn, 7);
        Bt(_n);
      }
    };
    return Bt(ye), Ee(we, Pe, ne, he);
  }, x = (j) => {
    const se = Fn(Z(j.value), i.hours, i.minutes, ue());
    t("date-update", se), e.multiDates ? Yl(se, s, e.multiDatesLimit) : s.value = se, r(), Qt().then(() => {
      F();
    });
  }, L = (j) => d.value.noDisabledRange ? qd(a.value[0], j).some((se) => v(se)) : !1, K = () => {
    a.value = s.value ? s.value.slice() : [], a.value.length === 2 && !(d.value.fixedStart || d.value.fixedEnd) && (a.value = []);
  }, E = (j, se) => {
    const we = [
      Z(j.value),
      Wt(Z(j.value), +d.value.autoRange)
    ];
    T(we) ? (se && oe(j.value), a.value = we) : t("invalid-date", j.value);
  }, oe = (j) => {
    const se = Fe(Z(j)), we = $e(Z(j));
    if (W(0, se, we), c.value.count > 0)
      for (let Pe = 1; Pe < c.value.count; Pe++) {
        const ne = Yb(
          Ze(Z(j), { year: _.value(Pe - 1), month: O.value(Pe - 1) })
        );
        W(Pe, ne.month, ne.year);
      }
  }, ie = (j) => {
    if (L(j.value) || !$(j.value, s.value, d.value.fixedStart ? 0 : 1))
      return t("invalid-date", j.value);
    a.value = tf(Z(j.value), s, t, d);
  }, le = (j, se) => {
    if (K(), d.value.autoRange)
      return E(j, se);
    if (d.value.fixedStart || d.value.fixedEnd)
      return ie(j);
    a.value[0] ? $(Z(j.value), s.value) && !L(j.value) ? it(Z(j.value), Z(a.value[0])) ? (a.value.unshift(Z(j.value)), t("range-end", a.value[0])) : (a.value[1] = Z(j.value), t("range-end", a.value[1])) : (e.autoApply && t("auto-apply-invalid", j.value), t("invalid-date", j.value)) : (a.value[0] = Z(j.value), t("range-start", a.value[0]));
  }, ue = (j = !0) => e.enableSeconds ? Array.isArray(i.seconds) ? j ? i.seconds[0] : i.seconds[1] : i.seconds : 0, ae = (j) => {
    a.value[j] = Fn(
      a.value[j],
      i.hours[j],
      i.minutes[j],
      ue(j !== 1)
    );
  }, de = () => {
    var j, se;
    a.value[0] && a.value[1] && +((j = a.value) == null ? void 0 : j[0]) > +((se = a.value) == null ? void 0 : se[1]) && (a.value.reverse(), t("range-start", a.value[0]), t("range-end", a.value[1]));
  }, me = () => {
    a.value.length && (a.value[0] && !a.value[1] ? ae(0) : (ae(0), ae(1), r()), de(), s.value = a.value.slice(), Vo(a.value, t, e.autoApply, e.modelAuto));
  }, be = (j, se = !1) => {
    if (v(j.value) || !j.current && e.hideOffsetDates)
      return t("invalid-date", j.value);
    if (!d.value.enabled)
      return x(j);
    _u(i.hours) && _u(i.minutes) && !e.multiDates && (le(j, se), me());
  }, Te = (j, se) => {
    var we;
    W(j, se.month, se.year), c.value.count && !c.value.solo && R(j), t("update-month-year", { instance: j, month: se.month, year: se.year }), n(c.value.solo ? j : void 0);
    const Pe = (we = e.flow) != null && we.length ? e.flow[e.flowStep] : void 0;
    !se.fromNav && (Pe === rn.month || Pe === rn.year) && r();
  }, Re = (j, se) => {
    ef({
      value: j,
      modelValue: s,
      range: d.value.enabled,
      timezone: se ? void 0 : p.value.timezone
    }), A(), e.multiCalendars && Qt().then(() => N(!0));
  }, je = () => {
    d.value.enabled ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = it(Z(), s.value[0]) ? [Z(), s.value[0]] : [s.value[0], Z()] : s.value = [Z()] : s.value = Z(), A();
  }, Ge = () => {
    if (Array.isArray(s.value))
      if (e.multiDates) {
        const j = lt();
        s.value[s.value.length - 1] = y(j);
      } else
        s.value = s.value.map((j, se) => j && y(j, se));
    else
      s.value = y(s.value);
    t("time-update");
  }, lt = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null;
  return {
    calendars: l,
    modelValue: s,
    month: _,
    year: O,
    time: i,
    disabledTimesConfig: H,
    validateTime: B,
    getCalendarDays: h,
    getMarker: U,
    handleScroll: Y,
    handleSwipe: Ie,
    handleArrow: Oe,
    selectDate: be,
    updateMonthYear: Te,
    presetDate: Re,
    selectCurrentDate: je,
    updateTime: (j, se = !0, we = !1) => {
      I(j, se, we, Ge);
    }
  };
}, c_ = { key: 0 }, d_ = /* @__PURE__ */ Mt({
  __name: "DatePicker",
  props: {
    ...en
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-end",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, {
      calendars: o,
      month: s,
      year: l,
      modelValue: i,
      time: c,
      disabledTimesConfig: u,
      validateTime: d,
      getCalendarDays: p,
      getMarker: b,
      handleArrow: g,
      handleScroll: v,
      handleSwipe: T,
      selectDate: $,
      updateMonthYear: I,
      presetDate: y,
      selectCurrentDate: P,
      updateTime: D
    } = u_(a, r, fe, te), B = vr(), { setHoverDate: H, getDayClassData: _, clearHoverDate: O } = pw(i, a), { defaultedMultiCalendars: W } = st(a), A = J([]), M = J([]), F = J(null), N = Vt(B, "calendar"), w = Vt(B, "monthYear"), k = Vt(B, "timePicker"), q = (f) => {
      a.shadow || r("mount", f);
    };
    ut(
      o,
      () => {
        a.shadow || setTimeout(() => {
          r("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const re = ee(() => (f) => p(s.value(f), l.value(f)).map((R) => ({
      ...R,
      days: R.days.map((X) => (X.marker = b(X), X.classData = _(X), X))
    })));
    function fe(f) {
      var R;
      f || f === 0 ? (R = M.value[f]) == null || R.triggerTransition(s.value(f), l.value(f)) : M.value.forEach((X, ce) => X.triggerTransition(s.value(ce), l.value(ce)));
    }
    function te() {
      r("update-flow-step");
    }
    const m = (f, R = !1) => {
      $(f, R), a.spaceConfirm && r("select-date");
    };
    return t({
      clearHoverDate: O,
      presetDate: y,
      selectCurrentDate: P,
      toggleMonthPicker: (f, R, X = 0) => {
        var ce;
        (ce = A.value[X]) == null || ce.toggleMonthPicker(f, R);
      },
      toggleYearPicker: (f, R, X = 0) => {
        var ce;
        (ce = A.value[X]) == null || ce.toggleYearPicker(f, R);
      },
      toggleTimePicker: (f, R, X) => {
        var ce;
        (ce = F.value) == null || ce.toggleTimePicker(f, R, X);
      },
      handleArrow: g,
      updateMonthYear: I,
      getSidebarProps: () => ({
        modelValue: i,
        month: s,
        year: l,
        time: c,
        updateTime: D,
        updateMonthYear: I,
        selectDate: $,
        presetDate: y
      })
    }), (f, R) => (V(), G(_e, null, [
      Xe(No, {
        "multi-calendars": S(W).count,
        collapse: f.collapse
      }, {
        default: Ve(({ instance: X, index: ce }) => [
          f.disableMonthYearSelect ? Q("", !0) : (V(), De(Jw, _t({
            key: 0,
            ref: (Y) => {
              Y && (A.value[ce] = Y);
            },
            months: S(Yd)(f.formatLocale, f.locale, f.monthNameFormat),
            years: S(Il)(f.yearRange, f.reverseYears),
            month: S(s)(X),
            year: S(l)(X),
            instance: X
          }, f.$props, {
            onMount: R[0] || (R[0] = (Y) => q(S(pr).header)),
            onResetFlow: R[1] || (R[1] = (Y) => f.$emit("reset-flow")),
            onUpdateMonthYear: (Y) => S(I)(X, Y),
            onOverlayClosed: R[2] || (R[2] = (Y) => f.$emit("focus-menu"))
          }), Dt({ _: 2 }, [
            qe(S(w), (Y, Oe) => ({
              name: Y,
              fn: Ve((Ie) => [
                ge(f.$slots, Y, ht(Pt(Ie)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          Xe(i_, _t({
            ref: (Y) => {
              Y && (M.value[ce] = Y);
            },
            "mapped-dates": re.value(X),
            month: S(s)(X),
            year: S(l)(X),
            instance: X
          }, f.$props, {
            onSelectDate: (Y) => S($)(Y, X !== 1),
            onHandleSpace: (Y) => m(Y, X !== 1),
            onSetHoverDate: R[3] || (R[3] = (Y) => S(H)(Y)),
            onHandleScroll: (Y) => S(v)(Y, X),
            onHandleSwipe: (Y) => S(T)(Y, X),
            onMount: R[4] || (R[4] = (Y) => q(S(pr).calendar)),
            onResetFlow: R[5] || (R[5] = (Y) => f.$emit("reset-flow")),
            onTooltipOpen: R[6] || (R[6] = (Y) => f.$emit("tooltip-open", Y)),
            onTooltipClose: R[7] || (R[7] = (Y) => f.$emit("tooltip-close", Y))
          }), Dt({ _: 2 }, [
            qe(S(N), (Y, Oe) => ({
              name: Y,
              fn: Ve((Ie) => [
                ge(f.$slots, Y, ht(Pt({ ...Ie })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      f.enableTimePicker ? (V(), G("div", c_, [
        f.$slots["time-picker"] ? ge(f.$slots, "time-picker", ht(_t({ key: 0 }, { time: S(c), updateTime: S(D) }))) : (V(), De(rf, _t({
          key: 1,
          ref_key: "timePickerRef",
          ref: F
        }, f.$props, {
          hours: S(c).hours,
          minutes: S(c).minutes,
          seconds: S(c).seconds,
          "internal-model-value": f.internalModelValue,
          "disabled-times-config": S(u),
          "validate-time": S(d),
          onMount: R[8] || (R[8] = (X) => q(S(pr).timePicker)),
          "onUpdate:hours": R[9] || (R[9] = (X) => S(D)(X)),
          "onUpdate:minutes": R[10] || (R[10] = (X) => S(D)(X, !1)),
          "onUpdate:seconds": R[11] || (R[11] = (X) => S(D)(X, !1, !0)),
          onResetFlow: R[12] || (R[12] = (X) => f.$emit("reset-flow")),
          onOverlayClosed: R[13] || (R[13] = (X) => f.$emit("time-picker-close")),
          onOverlayOpened: R[14] || (R[14] = (X) => f.$emit("time-picker-open", X)),
          onAmPmChange: R[15] || (R[15] = (X) => f.$emit("am-pm-change", X))
        }), Dt({ _: 2 }, [
          qe(S(k), (X, ce) => ({
            name: X,
            fn: Ve((Y) => [
              ge(f.$slots, X, ht(Pt(Y)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : Q("", !0)
    ], 64));
  }
}), f_ = (e, t) => {
  const n = J(), { defaultedMultiCalendars: r, defaultedConfig: a, defaultedHighlight: o, defaultedRange: s, propDates: l } = st(e), { modelValue: i, year: c, month: u, calendars: d } = ka(e, t), { isDisabled: p } = Gn(e), { selectYear: b, groupedYears: g, showYearPicker: v, isDisabled: T, toggleYearPicker: $, handleYearSelect: I, handleYear: y } = nf({
    modelValue: i,
    multiCalendars: r,
    highlight: o,
    calendars: d,
    propDates: l,
    month: u,
    year: c,
    props: e,
    emit: t
  }), P = (F, N) => [F, N].map((w) => dn(w, "MMMM", { locale: e.formatLocale })).join("-"), D = ee(() => (F) => i.value ? Array.isArray(i.value) ? i.value.some((N) => pu(F, N)) : pu(i.value, F) : !1), B = (F) => {
    if (s.value.enabled) {
      if (Array.isArray(i.value)) {
        const N = Be(F, i.value[0]) || Be(F, i.value[1]);
        return Eo(i.value, n.value, F) && !N;
      }
      return !1;
    }
    return !1;
  }, H = (F, N) => F.quarter === lu(N) && F.year === $e(N), _ = (F) => typeof o.value == "function" ? o.value({ quarter: lu(F), year: $e(F) }) : !!o.value.quarters.find((N) => H(N, F)), O = ee(() => (F) => {
    const N = Ze(/* @__PURE__ */ new Date(), { year: c.value(F) });
    return Vg({
      start: Sd(N),
      end: Ig(N)
    }).map((w) => {
      const k = lr(w), q = iu(w), re = p(w), fe = B(k), te = _(k);
      return {
        text: P(k, q),
        value: k,
        active: D.value(k),
        highlighted: te,
        disabled: re,
        isBetween: fe
      };
    });
  }), W = (F) => {
    Yl(F, i, e.multiDatesLimit), t("auto-apply", !0);
  }, A = (F) => {
    i.value = jl(i, F, t), Vo(i.value, t, e.autoApply, e.modelAuto);
  }, M = (F) => {
    i.value = F, t("auto-apply");
  };
  return {
    defaultedConfig: a,
    defaultedMultiCalendars: r,
    groupedYears: g,
    year: c,
    isDisabled: T,
    quarters: O,
    showYearPicker: v,
    modelValue: i,
    setHoverDate: (F) => {
      n.value = F;
    },
    selectYear: b,
    selectQuarter: (F, N, w) => {
      if (!w)
        return d.value[N].month = Fe(iu(F)), e.multiDates ? W(F) : s.value.enabled ? A(F) : M(F);
    },
    toggleYearPicker: $,
    handleYearSelect: I,
    handleYear: y
  };
}, p_ = { class: "dp--quarter-items" }, m_ = ["disabled", "onClick", "onMouseover"], h_ = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...en
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, o = vr(), s = Vt(o, "yearMode"), {
      defaultedMultiCalendars: l,
      defaultedConfig: i,
      groupedYears: c,
      year: u,
      isDisabled: d,
      quarters: p,
      modelValue: b,
      showYearPicker: g,
      setHoverDate: v,
      selectQuarter: T,
      toggleYearPicker: $,
      handleYearSelect: I,
      handleYear: y
    } = f_(a, r);
    return t({ getSidebarProps: () => ({
      modelValue: b,
      year: u,
      selectQuarter: T,
      handleYearSelect: I,
      handleYear: y
    }) }), (P, D) => (V(), De(No, {
      "multi-calendars": S(l).count,
      collapse: P.collapse,
      stretch: ""
    }, {
      default: Ve(({ instance: B }) => [
        ke("div", {
          class: "dp-quarter-picker-wrap",
          style: Ct({ minHeight: `${S(i).modeHeight}px` })
        }, [
          ke("div", null, [
            Xe(Zd, _t(P.$props, {
              items: S(c)(B),
              instance: B,
              "show-year-picker": S(g)[B],
              year: S(u)(B),
              "is-disabled": (H) => S(d)(B, H),
              onHandleYear: (H) => S(y)(B, H),
              onYearSelect: (H) => S(I)(H, B),
              onToggleYearPicker: (H) => S($)(B, H == null ? void 0 : H.flow, H == null ? void 0 : H.show)
            }), Dt({ _: 2 }, [
              qe(S(s), (H, _) => ({
                name: H,
                fn: Ve((O) => [
                  ge(P.$slots, H, ht(Pt(O)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          ke("div", p_, [
            (V(!0), G(_e, null, qe(S(p)(B), (H, _) => (V(), G("div", { key: _ }, [
              ke("button", {
                type: "button",
                class: Ne(["dp--qr-btn", {
                  "dp--qr-btn-active": H.active,
                  "dp--qr-btn-between": H.isBetween,
                  "dp--qr-btn-disabled": H.disabled,
                  "dp--highlighted": H.highlighted
                }]),
                disabled: H.disabled,
                onClick: (O) => S(T)(H.value, B, H.disabled),
                onMouseover: (O) => S(v)(H.value)
              }, [
                P.$slots.quarter ? ge(P.$slots, "quarter", {
                  key: 0,
                  value: H.value,
                  text: H.text
                }) : (V(), G(_e, { key: 1 }, [
                  Jt(He(H.text), 1)
                ], 64))
              ], 42, m_)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), v_ = ["id", "aria-label"], y_ = {
  key: 0,
  class: "dp--menu-load-container"
}, g_ = /* @__PURE__ */ ke("span", { class: "dp--menu-loader" }, null, -1), b_ = [
  g_
], w_ = {
  key: 0,
  class: "dp__sidebar_left"
}, __ = ["onClick", "onKeydown"], x_ = {
  key: 2,
  class: "dp__sidebar_right"
}, k_ = {
  key: 3,
  class: "dp__action_extra"
}, xu = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...$o,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, o = J(null), s = ee(() => {
      const { openOnTop: C, ...h } = a;
      return {
        ...h,
        flowStep: _.value,
        collapse: a.collapse,
        noOverlayFocus: a.noOverlayFocus,
        menuWrapRef: o.value
      };
    }), { setMenuFocused: l, setShiftKey: i, control: c } = Qd(), u = vr(), { defaultedTextInput: d, defaultedInline: p, defaultedConfig: b } = st(a), g = J(null), v = J(0), T = J(null), $ = J(!1), I = J(null);
    xt(() => {
      if (!a.shadow) {
        $.value = !0, y(), window.addEventListener("resize", y);
        const C = gt(o);
        if (C && !d.value.enabled && !p.value.enabled && (l(!0), F()), C) {
          const h = (x) => {
            b.value.allowPreventDefault && x.preventDefault(), In(x, b.value, !0);
          };
          C.addEventListener("pointerdown", h), C.addEventListener("mousedown", h);
        }
      }
    }), Fr(() => {
      window.removeEventListener("resize", y);
    });
    const y = () => {
      const C = gt(T);
      C && (v.value = C.getBoundingClientRect().width);
    }, { arrowRight: P, arrowLeft: D, arrowDown: B, arrowUp: H } = zn(), { flowStep: _, updateFlowStep: O, childMount: W, resetFlow: A } = mw(a, r, I), M = ee(() => a.monthPicker ? Dw : a.yearPicker ? Ew : a.timePicker ? Kw : a.quarterPicker ? h_ : d_), F = () => {
      const C = gt(o);
      C && C.focus({ preventScroll: !0 });
    }, N = ee(() => {
      var C;
      return ((C = I.value) == null ? void 0 : C.getSidebarProps()) || {};
    }), w = () => {
      a.openOnTop && r("recalculate-position");
    }, k = Vt(u, "action"), q = ee(() => a.monthPicker || a.yearPicker ? Vt(u, "monthYear") : a.timePicker ? Vt(u, "timePicker") : Vt(u, "shared")), re = ee(() => a.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), fe = ee(() => ({
      dp__menu_disabled: a.disabled,
      dp__menu_readonly: a.readonly,
      "dp-menu-loading": a.loading
    })), te = ee(
      () => ({
        dp__menu: !0,
        dp__menu_index: !p.value.enabled,
        dp__relative: p.value.enabled,
        [a.menuClassName]: !!a.menuClassName
      })
    ), m = (C) => {
      In(C, b.value, !0);
    }, f = () => {
      a.escClose && r("close-picker");
    }, R = (C) => {
      if (a.arrowNavigation) {
        if (C === "up")
          return H();
        if (C === "down")
          return B();
        if (C === "left")
          return D();
        if (C === "right")
          return P();
      } else
        C === "left" || C === "up" ? Ie("handleArrow", "left", 0, C === "up") : Ie("handleArrow", "right", 0, C === "down");
    }, X = (C) => {
      i(C.shiftKey), !a.disableMonthYearSelect && C.code === "Tab" && C.target.classList.contains("dp__menu") && c.value.shiftKeyInMenu && (C.preventDefault(), In(C, b.value, !0), r("close-picker"));
    }, ce = () => {
      F(), r("time-picker-close");
    }, Y = (C) => {
      var h, x, L;
      (h = I.value) == null || h.toggleTimePicker(!1, !1), (x = I.value) == null || x.toggleMonthPicker(!1, !1, C), (L = I.value) == null || L.toggleYearPicker(!1, !1, C);
    }, Oe = (C, h = 0) => {
      var x, L, K;
      return C === "month" ? (x = I.value) == null ? void 0 : x.toggleMonthPicker(!1, !0, h) : C === "year" ? (L = I.value) == null ? void 0 : L.toggleYearPicker(!1, !0, h) : C === "time" ? (K = I.value) == null ? void 0 : K.toggleTimePicker(!0, !1) : Y(h);
    }, Ie = (C, ...h) => {
      var x, L;
      (x = I.value) != null && x[C] && ((L = I.value) == null || L[C](...h));
    }, U = () => {
      Ie("selectCurrentDate");
    }, ve = (C, h) => {
      Ie("presetDate", C, h);
    }, Ee = () => {
      Ie("clearHoverDate");
    };
    return t({
      updateMonthYear: (C, h) => {
        Ie("updateMonthYear", C, h);
      },
      switchView: Oe
    }), (C, h) => {
      var x, L, K;
      return V(), G("div", {
        id: C.uid ? `dp-menu-${C.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: o,
        tabindex: "0",
        role: "dialog",
        "aria-label": (x = C.ariaLabels) == null ? void 0 : x.menu,
        class: Ne(te.value),
        onMouseleave: Ee,
        onClick: m,
        onKeydown: [
          Se(f, ["esc"]),
          h[18] || (h[18] = Se(Ke((E) => R("left"), ["prevent"]), ["left"])),
          h[19] || (h[19] = Se(Ke((E) => R("up"), ["prevent"]), ["up"])),
          h[20] || (h[20] = Se(Ke((E) => R("down"), ["prevent"]), ["down"])),
          h[21] || (h[21] = Se(Ke((E) => R("right"), ["prevent"]), ["right"])),
          X
        ]
      }, [
        (C.disabled || C.readonly) && S(p).enabled || C.loading ? (V(), G("div", {
          key: 0,
          class: Ne(fe.value)
        }, [
          C.loading ? (V(), G("div", y_, b_)) : Q("", !0)
        ], 2)) : Q("", !0),
        !S(p).enabled && !C.teleportCenter ? (V(), G("div", {
          key: 1,
          class: Ne(re.value)
        }, null, 2)) : Q("", !0),
        ke("div", {
          ref_key: "innerMenuRef",
          ref: T,
          class: Ne({
            dp__menu_content_wrapper: ((L = C.presetDates) == null ? void 0 : L.length) || !!C.$slots["left-sidebar"] || !!C.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && ((K = C.presetDates) == null ? void 0 : K.length) || !!C.$slots["left-sidebar"] || !!C.$slots["right-sidebar"]
          }),
          style: Ct({ "--dp-menu-width": `${v.value}px` })
        }, [
          C.$slots["left-sidebar"] ? (V(), G("div", w_, [
            ge(C.$slots, "left-sidebar", ht(Pt(N.value)))
          ])) : Q("", !0),
          C.presetDates.length ? (V(), G("div", {
            key: 1,
            class: Ne({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            (V(!0), G(_e, null, qe(C.presetDates, (E, oe) => (V(), G(_e, { key: oe }, [
              E.slot ? ge(C.$slots, E.slot, {
                key: 0,
                presetDate: ve,
                label: E.label,
                value: E.value
              }) : (V(), G("button", {
                key: 1,
                type: "button",
                style: Ct(E.style || {}),
                class: Ne(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                onClick: Ke((ie) => ve(E.value, E.noTz), ["prevent"]),
                onKeydown: [
                  Se(Ke((ie) => ve(E.value, E.noTz), ["prevent"]), ["enter"]),
                  Se(Ke((ie) => ve(E.value, E.noTz), ["prevent"]), ["space"])
                ]
              }, He(E.label), 47, __))
            ], 64))), 128))
          ], 2)) : Q("", !0),
          ke("div", {
            ref_key: "calendarWrapperRef",
            ref: g,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (V(), De(bo(M.value), _t({
              ref_key: "dynCmpRef",
              ref: I
            }, s.value, {
              "flow-step": S(_),
              onMount: S(W),
              onUpdateFlowStep: S(O),
              onResetFlow: S(A),
              onFocusMenu: F,
              onSelectDate: h[0] || (h[0] = (E) => C.$emit("select-date")),
              onDateUpdate: h[1] || (h[1] = (E) => C.$emit("date-update", E)),
              onTooltipOpen: h[2] || (h[2] = (E) => C.$emit("tooltip-open", E)),
              onTooltipClose: h[3] || (h[3] = (E) => C.$emit("tooltip-close", E)),
              onAutoApply: h[4] || (h[4] = (E) => C.$emit("auto-apply", E)),
              onRangeStart: h[5] || (h[5] = (E) => C.$emit("range-start", E)),
              onRangeEnd: h[6] || (h[6] = (E) => C.$emit("range-end", E)),
              onInvalidFixedRange: h[7] || (h[7] = (E) => C.$emit("invalid-fixed-range", E)),
              onTimeUpdate: h[8] || (h[8] = (E) => C.$emit("time-update")),
              onAmPmChange: h[9] || (h[9] = (E) => C.$emit("am-pm-change", E)),
              onTimePickerOpen: h[10] || (h[10] = (E) => C.$emit("time-picker-open", E)),
              onTimePickerClose: ce,
              onRecalculatePosition: w,
              onUpdateMonthYear: h[11] || (h[11] = (E) => C.$emit("update-month-year", E)),
              onAutoApplyInvalid: h[12] || (h[12] = (E) => C.$emit("auto-apply-invalid", E)),
              onInvalidDate: h[13] || (h[13] = (E) => C.$emit("invalid-date", E)),
              "onUpdate:internalModelValue": h[14] || (h[14] = (E) => C.$emit("update:internal-model-value", E))
            }), Dt({ _: 2 }, [
              qe(q.value, (E, oe) => ({
                name: E,
                fn: Ve((ie) => [
                  ge(C.$slots, E, ht(Pt({ ...ie })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          C.$slots["right-sidebar"] ? (V(), G("div", x_, [
            ge(C.$slots, "right-sidebar", ht(Pt(N.value)))
          ])) : Q("", !0),
          C.$slots["action-extra"] ? (V(), G("div", k_, [
            C.$slots["action-extra"] ? ge(C.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: U
            }) : Q("", !0)
          ])) : Q("", !0)
        ], 6),
        !C.autoApply || S(b).keepActionRow ? (V(), De(_w, _t({
          key: 2,
          "menu-mount": $.value
        }, s.value, {
          "calendar-width": v.value,
          onClosePicker: h[15] || (h[15] = (E) => C.$emit("close-picker")),
          onSelectDate: h[16] || (h[16] = (E) => C.$emit("select-date")),
          onInvalidSelect: h[17] || (h[17] = (E) => C.$emit("invalid-select")),
          onSelectNow: U
        }), Dt({ _: 2 }, [
          qe(S(k), (E, oe) => ({
            name: E,
            fn: Ve((ie) => [
              ge(C.$slots, E, ht(Pt({ ...ie })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : Q("", !0)
      ], 42, v_);
    };
  }
}), M_ = typeof window < "u" ? window : void 0, ms = () => {
}, T_ = (e) => Gs() ? (Ru(e), !0) : !1, P_ = (e, t, n, r) => {
  if (!e)
    return ms;
  let a = ms;
  const o = ut(
    () => S(e),
    (l) => {
      a(), l && (l.addEventListener(t, n, r), a = () => {
        l.removeEventListener(t, n, r), a = ms;
      });
    },
    { immediate: !0, flush: "post" }
  ), s = () => {
    o(), a();
  };
  return T_(s), s;
}, S_ = (e, t, n, r = {}) => {
  const { window: a = M_, event: o = "pointerdown" } = r;
  return a ? P_(a, o, (s) => {
    const l = gt(e), i = gt(t);
    !l || !i || l === s.target || s.composedPath().includes(l) || s.composedPath().includes(i) || n(s);
  }, { passive: !0 }) : void 0;
}, A_ = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...$o
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-end",
    "date-update",
    "invalid-date"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, o = vr(), s = J(!1), l = Wa(a, "modelValue"), i = Wa(a, "timezone"), c = J(null), u = J(null), d = J(null), p = J(!1), b = J(null), g = J(!1), v = J(!1), T = J(!1), { setMenuFocused: $, setShiftKey: I } = Qd(), { clearArrowNav: y } = zn(), { validateDate: P, isValidTime: D } = Gn(a), { defaultedTransitions: B, defaultedTextInput: H, defaultedInline: _, defaultedConfig: O, defaultedRange: W } = st(a), { menuTransition: A, showTransition: M } = xa(B);
    xt(() => {
      R(a.modelValue), Qt().then(() => {
        if (!_.value.enabled) {
          const ne = fe(b.value);
          ne == null || ne.addEventListener("scroll", C), window == null || window.addEventListener("resize", h);
        }
      }), _.value.enabled && (s.value = !0), window == null || window.addEventListener("keyup", x), window == null || window.addEventListener("keydown", L);
    }), Fr(() => {
      if (!_.value.enabled) {
        const ne = fe(b.value);
        ne == null || ne.removeEventListener("scroll", C), window == null || window.removeEventListener("resize", h);
      }
      window == null || window.removeEventListener("keyup", x), window == null || window.removeEventListener("keydown", L);
    });
    const F = Vt(o, "all", a.presetDates), N = Vt(o, "input");
    ut(
      [l, i],
      () => {
        R(l.value);
      },
      { deep: !0 }
    );
    const { openOnTop: w, menuStyle: k, xCorrect: q, setMenuPosition: re, getScrollableParent: fe, shadowRender: te } = cw({
      menuRef: c,
      menuRefInner: u,
      inputRef: d,
      pickerWrapperRef: b,
      inline: _,
      emit: r,
      props: a,
      slots: o
    }), {
      inputValue: m,
      internalModelValue: f,
      parseExternalModelValue: R,
      emitModelValue: X,
      formatInputValue: ce,
      checkBeforeEmit: Y
    } = iw(r, a, p), Oe = ee(
      () => ({
        dp__main: !0,
        dp__theme_dark: a.dark,
        dp__theme_light: !a.dark,
        dp__flex_display: _.value.enabled,
        "dp--flex-display-collapsed": T.value,
        dp__flex_display_with_input: _.value.input
      })
    ), Ie = ee(() => a.dark ? "dp__theme_dark" : "dp__theme_light"), U = ee(() => ({
      to: typeof a.teleport == "boolean" ? "body" : a.teleport,
      disabled: !a.teleport || _.value.enabled
    })), ve = ee(() => ({ class: "dp__outer_menu_wrap" })), Ee = ee(() => _.value.enabled && (a.timePicker || a.monthPicker || a.yearPicker || a.quarterPicker)), C = () => {
      s.value && (O.value.closeOnScroll ? me() : re());
    }, h = () => {
      var ne;
      s.value && re();
      const he = (ne = u.value) == null ? void 0 : ne.$el.getBoundingClientRect().width;
      T.value = document.body.offsetWidth <= he;
    }, x = (ne) => {
      ne.key === "Tab" && !_.value.enabled && !a.teleport && O.value.tabOutClosesMenu && (b.value.contains(document.activeElement) || me()), v.value = ne.shiftKey;
    }, L = (ne) => {
      v.value = ne.shiftKey;
    }, K = () => {
      !a.disabled && !a.readonly && (te(xu, a), re(!1), s.value = !0, s.value && r("open"), s.value || de(), R(a.modelValue));
    }, E = () => {
      var ne;
      m.value = "", de(), (ne = d.value) == null || ne.setParsedDate(null), r("update:model-value", null), r("update:model-timezone-value", null), r("cleared"), O.value.closeOnClearValue && me();
    }, oe = () => {
      const ne = f.value;
      return !ne || !Array.isArray(ne) && P(ne) ? !0 : Array.isArray(ne) ? a.multiDates || ne.length === 2 && P(ne[0]) && P(ne[1]) ? !0 : W.value.partialRange && !a.timePicker ? P(ne[0]) : !1 : !1;
    }, ie = () => {
      Y() && oe() ? (X(), me()) : r("invalid-select", f.value);
    }, le = (ne) => {
      ue(), X(), O.value.closeOnAutoApply && !ne && me();
    }, ue = () => {
      d.value && H.value.enabled && d.value.setParsedDate(f.value);
    }, ae = (ne = !1) => {
      a.autoApply && D(f.value) && oe() && (W.value.enabled && Array.isArray(f.value) ? (W.value.partialRange || f.value.length === 2) && le(ne) : le(ne));
    }, de = () => {
      H.value.enabled || (f.value = null);
    }, me = () => {
      _.value.enabled || (s.value && (s.value = !1, q.value = !1, $(!1), I(!1), y(), r("closed"), m.value && R(l.value)), de(), r("blur"));
    }, be = (ne, he, ye = !1) => {
      if (!ne) {
        f.value = null;
        return;
      }
      const Bt = Array.isArray(ne) ? !ne.some((Kn) => !P(Kn)) : P(ne), tn = D(ne);
      Bt && tn && (f.value = ne, he && (g.value = ye, ie(), r("text-submit")));
    }, Te = () => {
      a.autoApply && D(f.value) && X(), ue();
    }, Re = () => s.value ? me() : K(), je = (ne) => {
      f.value = ne;
    }, Ge = () => {
      H.value.enabled && (p.value = !0, ce()), r("focus");
    }, lt = () => {
      if (H.value.enabled && (p.value = !1, R(a.modelValue), g.value)) {
        const ne = Vb(b.value, v.value);
        ne == null || ne.focus();
      }
      r("blur");
    }, j = (ne) => {
      u.value && u.value.updateMonthYear(0, {
        month: hu(ne.month),
        year: hu(ne.year)
      });
    }, se = (ne) => {
      R(ne ?? a.modelValue);
    }, we = (ne, he) => {
      var ye;
      (ye = u.value) == null || ye.switchView(ne, he);
    }, Pe = (ne) => O.value.onClickOutside ? O.value.onClickOutside(ne) : me();
    return S_(c, d, () => Pe(oe)), t({
      closeMenu: me,
      selectDate: ie,
      clearValue: E,
      openMenu: K,
      onScroll: C,
      formatInputValue: ce,
      // exposed for testing purposes
      updateInternalModelValue: je,
      // modify internal modelValue
      setMonthYear: j,
      parseModel: se,
      switchView: we,
      toggleMenu: Re
    }), (ne, he) => (V(), G("div", {
      ref_key: "pickerWrapperRef",
      ref: b,
      class: Ne(Oe.value),
      "data-datepicker-instance": ""
    }, [
      Xe(gw, _t({
        ref_key: "inputRef",
        ref: d,
        "input-value": S(m),
        "onUpdate:inputValue": he[0] || (he[0] = (ye) => ct(m) ? m.value = ye : null),
        "is-menu-open": s.value
      }, ne.$props, {
        onClear: E,
        onOpen: K,
        onSetInputDate: be,
        onSetEmptyDate: S(X),
        onSelectDate: ie,
        onToggle: Re,
        onClose: me,
        onFocus: Ge,
        onBlur: lt,
        onRealBlur: he[1] || (he[1] = (ye) => p.value = !1)
      }), Dt({ _: 2 }, [
        qe(S(N), (ye, Bt) => ({
          name: ye,
          fn: Ve((tn) => [
            ge(ne.$slots, ye, ht(Pt(tn)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (V(), De(bo(ne.teleport ? tm : "div"), ht(Pt(U.value)), {
        default: Ve(() => [
          Xe(qn, {
            name: S(A)(S(w)),
            css: S(M) && !S(_).enabled
          }, {
            default: Ve(() => [
              s.value ? (V(), G("div", _t({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: c
              }, ve.value, {
                class: { "dp--menu-wrapper": !S(_).enabled },
                style: S(_).enabled ? void 0 : S(k)
              }), [
                Xe(xu, _t({
                  ref_key: "dpMenuRef",
                  ref: u
                }, ne.$props, {
                  "internal-model-value": S(f),
                  "onUpdate:internalModelValue": he[2] || (he[2] = (ye) => ct(f) ? f.value = ye : null),
                  class: { [Ie.value]: !0, "dp--menu-wrapper": ne.teleport },
                  "open-on-top": S(w),
                  "no-overlay-focus": Ee.value,
                  collapse: T.value,
                  onClosePicker: me,
                  onSelectDate: ie,
                  onAutoApply: ae,
                  onTimeUpdate: Te,
                  onFlowStep: he[3] || (he[3] = (ye) => ne.$emit("flow-step", ye)),
                  onUpdateMonthYear: he[4] || (he[4] = (ye) => ne.$emit("update-month-year", ye)),
                  onInvalidSelect: he[5] || (he[5] = (ye) => ne.$emit("invalid-select", S(f))),
                  onAutoApplyInvalid: he[6] || (he[6] = (ye) => ne.$emit("invalid-select", ye)),
                  onInvalidFixedRange: he[7] || (he[7] = (ye) => ne.$emit("invalid-fixed-range", ye)),
                  onRecalculatePosition: S(re),
                  onTooltipOpen: he[8] || (he[8] = (ye) => ne.$emit("tooltip-open", ye)),
                  onTooltipClose: he[9] || (he[9] = (ye) => ne.$emit("tooltip-close", ye)),
                  onTimePickerOpen: he[10] || (he[10] = (ye) => ne.$emit("time-picker-open", ye)),
                  onTimePickerClose: he[11] || (he[11] = (ye) => ne.$emit("time-picker-close", ye)),
                  onAmPmChange: he[12] || (he[12] = (ye) => ne.$emit("am-pm-change", ye)),
                  onRangeStart: he[13] || (he[13] = (ye) => ne.$emit("range-start", ye)),
                  onRangeEnd: he[14] || (he[14] = (ye) => ne.$emit("range-end", ye)),
                  onDateUpdate: he[15] || (he[15] = (ye) => ne.$emit("date-update", ye)),
                  onInvalidDate: he[16] || (he[16] = (ye) => ne.$emit("invalid-date", ye))
                }), Dt({ _: 2 }, [
                  qe(S(F), (ye, Bt) => ({
                    name: ye,
                    fn: Ve((tn) => [
                      ge(ne.$slots, ye, ht(Pt({ ...tn })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "onRecalculatePosition"])
              ], 16)) : Q("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 2));
  }
}), Hl = /* @__PURE__ */ (() => {
  const e = A_;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), C_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hl
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(C_).forEach(([e, t]) => {
  e !== "default" && (Hl[e] = t);
});
const Ul = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, D_ = { class: "input" }, O_ = ["value"], E_ = ["min", "max"], R_ = ["accept"], $_ = { key: 5 }, N_ = { key: 6 }, V_ = {
  __name: "ValueSelector",
  props: /* @__PURE__ */ cc({
    mode: {
      type: Object,
      required: !0
    }
  }, {
    selectedValue: {},
    selectedValueModifiers: {},
    dataValue: {},
    dataValueModifiers: {}
  }),
  emits: ["update:selectedValue", "update:dataValue"],
  setup(e) {
    const t = e, n = As(e, "selectedValue"), r = As(e, "dataValue"), a = J(null);
    function o($, I = d.value) {
      if ($ == null || $ === "") return !1;
      const y = Number($);
      return Number.isFinite(y) && y >= I.rangemin && y <= I.rangemax;
    }
    function s() {
      a.value = r.value;
    }
    function l($) {
      if ($.key !== "ArrowUp" && $.key !== "ArrowDown") return;
      const I = Number(r.value);
      if (!Number.isFinite(I)) return;
      const y = d.value, P = Number($.currentTarget.step) || 1, D = I + ($.key === "ArrowUp" ? P : -P);
      o(D, y) || $.preventDefault();
    }
    function i($) {
      var B, H;
      const I = d.value;
      if (o(r.value, I)) return;
      const y = a.value, P = o(y, I) ? y : Number(I.defaultFloat), D = (H = (B = $.relatedTarget) == null ? void 0 : B.closest) == null ? void 0 : H.call(B, "[data-poris-command]");
      D ? window.confirm(
        "This value is outside the active range. Restore the previous value and continue with the command? Choose Cancel to cancel the command."
      ) || (D.dataset.porisCommandCancelled = "true") : window.alert("This value is outside the active range. The previous value will be restored."), r.value = P;
    }
    const c = J(t.mode), u = ee(() => c.value.hasValues ? c.value.valuesNodes : []), d = ee(() => n.value || c.value.defaultValue || u.value[0]), p = () => {
      var $;
      return (($ = d.value) == null ? void 0 : $.type) === Dr;
    }, b = () => {
      var $;
      return (($ = d.value) == null ? void 0 : $.type) === cr;
    }, g = () => {
      var $;
      return (($ = d.value) == null ? void 0 : $.type) === Er;
    }, v = () => {
      var $;
      return (($ = d.value) == null ? void 0 : $.type) === Or;
    }, T = () => {
      var $;
      return (($ = d.value) == null ? void 0 : $.type) === no;
    };
    return ut(
      () => t.mode,
      ($) => {
        console.log("watch.mode", $), c.value = $;
      }
    ), ut(u, ($, I) => {
      console.log(`values mode: ${c.value.id}, changed/oldVal:`, $, I);
    }), ($, I) => (V(), G("div", D_, [
      u.value.length > 1 ? Vn((V(), G("select", {
        key: 0,
        "onUpdate:modelValue": I[0] || (I[0] = (y) => n.value = y),
        class: "active-value-selector"
      }, [
        (V(!0), G(_e, null, qe(u.value, (y) => (V(), G("option", {
          key: y.id,
          value: y
        }, He(y.name), 9, O_))), 128))
      ], 512)), [
        [Ac, n.value]
      ]) : Q("", !0),
      p() ? Vn((V(), G("input", {
        key: 1,
        "onUpdate:modelValue": I[1] || (I[1] = (y) => r.value = y),
        type: "text"
      }, null, 512)), [
        [Oi, r.value]
      ]) : b() ? Vn((V(), G("input", {
        key: 2,
        class: "numberPicker",
        "onUpdate:modelValue": I[2] || (I[2] = (y) => r.value = y),
        type: "number",
        step: ".01",
        min: d.value.rangemin,
        max: d.value.rangemax,
        onFocus: s,
        onKeydown: l,
        onBlur: i
      }, null, 40, E_)), [
        [
          Oi,
          r.value,
          void 0,
          { number: !0 }
        ]
      ]) : v() ? (V(), De(S(Hl), {
        key: 3,
        modelValue: r.value,
        "onUpdate:modelValue": I[3] || (I[3] = (y) => r.value = y),
        min: d.value.datemin,
        max: d.value.datemax,
        "enable-seconds": "",
        "is-24": ""
      }, null, 8, ["modelValue", "min", "max"])) : g() ? (V(), G("input", {
        key: 4,
        type: "file",
        accept: d.value.fileExtension
      }, null, 8, R_)) : T() && u.value.length === 1 ? (V(), G("span", $_, He(d.value.name), 1)) : d.value ? Q("", !0) : (V(), G("span", N_, "No values!")),
      Jt(" " + He(" "))
    ]));
  }
}, I_ = /* @__PURE__ */ Ul(V_, [["__scopeId", "data-v-f7e30fcc"]]), F_ = { class: "input-mode-panel" }, B_ = { class: "title" }, L_ = {
  key: 0,
  class: "command-buttons"
}, Y_ = ["onClick"], j_ = { class: "value-selector" }, H_ = {
  __name: "InputSystemPanel",
  props: {
    subsystem: {
      type: Object,
      required: !0
    },
    modes: {
      type: Array,
      required: !0
    },
    mode: {
      type: Object,
      required: !0
    }
  },
  emits: ["command-launched"],
  setup(e, { emit: t }) {
    function n(g) {
      return !g.hasSubsystems && !g.hasRealValues && g.hasValues && g.currentMode.hasValues;
    }
    function r(g) {
      return !g.hasRealValues && !g.currentMode.hasValues && !g.currentMode.hasModes;
    }
    function a(g) {
      return !n(g) && !r(g);
    }
    function o(g, v) {
      return v.length > 1 || n(g) || r(g);
    }
    const s = kl(), l = e, i = t;
    function c(g, v) {
      if (v.currentTarget.dataset.porisCommandCancelled === "true") {
        delete v.currentTarget.dataset.porisCommandCancelled;
        return;
      }
      i("command-launched", {
        systemId: l.subsystem.id,
        systemName: l.subsystem.name,
        commandId: g.id,
        commandName: g.name
      });
    }
    const u = J(l.mode), d = J(null), p = J(null);
    function b(g = null) {
      const v = s.getSystemValue(l.subsystem, u.value, g);
      d.value = v.value, p.value = v.data;
    }
    return b(), ut(d, (g) => {
      if (g) {
        const v = s.getSystemValue(l.subsystem, u.value, g);
        p.value !== v.data && (p.value = v.data);
      }
    }, { flush: "sync" }), ut(p, (g) => {
      d.value && s.setSystemValue(l.subsystem, d.value, g);
    }, { flush: "sync" }), ut(
      () => s.systemValues[`${l.subsystem.id}`],
      (g) => {
        var v, T;
        g && (((v = d.value) == null ? void 0 : v.id) !== ((T = g.value) == null ? void 0 : T.id) && (d.value = g.value), p.value !== g.data && (p.value = g.data));
      },
      { flush: "sync" }
    ), ut(u, (g) => {
      console.log("watch_input: currentMode.set() mode:", g), b();
    }), ut(
      () => l.mode,
      (g) => {
        console.log("new props.mode:", g), u.value = g;
      }
    ), (g, v) => {
      var T, $;
      return V(), G("div", {
        class: Ne(["inputsystem-panel", { "has-commands": (T = e.subsystem.commandsNodes) == null ? void 0 : T.length }])
      }, [
        ke("div", F_, [
          ke("span", B_, He(e.subsystem.label || e.subsystem.name), 1),
          ($ = e.subsystem.commandsNodes) != null && $.length ? (V(), G("span", L_, [
            (V(!0), G(_e, null, qe(e.subsystem.commandsNodes, (I) => (V(), G("button", {
              key: I.id,
              type: "button",
              "data-poris-command": "",
              onClick: (y) => c(I, y)
            }, He(I.label || I.name), 9, Y_))), 128))
          ])) : Q("", !0),
          ke("span", j_, [
            o(e.subsystem, e.modes) ? (V(), De(wd, {
              key: 0,
              class: "mode-selector",
              modelValue: u.value,
              "onUpdate:modelValue": v[0] || (v[0] = (I) => u.value = I),
              modes: e.modes
            }, null, 8, ["modelValue", "modes"])) : Q("", !0),
            a(e.subsystem) ? (V(), De(I_, {
              key: 1,
              mode: u.value,
              "selected-value": d.value,
              "onUpdate:selectedValue": v[1] || (v[1] = (I) => d.value = I),
              "data-value": p.value,
              "onUpdate:dataValue": v[2] || (v[2] = (I) => p.value = I)
            }, null, 8, ["mode", "selected-value", "data-value"])) : Q("", !0)
          ])
        ])
      ], 2);
    };
  }
}, ku = /* @__PURE__ */ Ul(H_, [["__scopeId", "data-v-9a0c15f0"]]), U_ = {
  key: 0,
  class: "subsystem-panel"
}, W_ = { class: "subsystem-heading" }, q_ = {
  key: 0,
  class: "title"
}, z_ = {
  key: 1,
  class: "command-buttons"
}, G_ = ["onClick"], K_ = {
  key: 0,
  class: "mode-selector"
}, X_ = {
  __name: "SubSystemPanel",
  props: {
    system: {
      type: Object,
      required: !1
    }
  },
  emits: ["command-launched"],
  setup(e, { emit: t }) {
    function n(v) {
      return !v.hasRealValues && v.hasValues && v.currentMode.hasValues;
    }
    function r(v) {
      return !v.hasRealValues && !v.currentMode.hasValues && !v.currentMode.hasModes && !v.hasSubsystems;
    }
    function a(v) {
      return !o(v);
      //!s0.hasRealValues && !(s1.hasRealValues || fakeParam(s1)) && !fakeParamWithNoValue(s0)
    }
    function o(v) {
      return v.hasRealValues || n(v) || r(v);
    }
    function s(v) {
      return !v.currentMode.hasValues && !v.currentMode.hasModes || v.getValidModes().length > 1;
    }
    function l(v) {
      return v.getValidModes().length > 0 && !v.hasRealValues;
    }
    const i = kl(), c = e, u = t, p = J(c.system).value;
    p.candidateMode = p.currentMode;
    const b = ee(() => (i.currentModes, p.getActiveSubnodes()));
    function g(v, T) {
      if (T.currentTarget.dataset.porisCommandCancelled === "true") {
        delete T.currentTarget.dataset.porisCommandCancelled;
        return;
      }
      u("command-launched", {
        systemId: p.id,
        systemName: p.name,
        commandId: v.id,
        commandName: v.name
      });
    }
    return ut(() => p.candidateMode, () => {
      var v, T;
      hn(
        `watch.mode. mode ${(v = p.currentMode) == null ? void 0 : v.name}, newMode :${(T = p.candidateMode) == null ? void 0 : T.name}`
      ), p.candidateMode != null && p.candidateMode != p.currentMode && (i.setValidMode(p, p.candidateMode), hn(`watch result >> ${p.currentMode.name}`));
    }), (v, T) => {
      var I;
      const $ = pp("SubSystemPanel", !0);
      return V(), G(_e, null, [
        l(S(p)) ? (V(), G("div", U_, [
          ke("div", W_, [
            S(p).label != "-" ? (V(), G("h3", q_, He(S(p).label || S(p).name), 1)) : Q("", !0),
            (I = S(p).commandsNodes) != null && I.length ? (V(), G("div", z_, [
              (V(!0), G(_e, null, qe(S(p).commandsNodes, (y) => (V(), G("button", {
                key: y.id,
                type: "button",
                "data-poris-command": "",
                onClick: (P) => g(y, P)
              }, He(y.label || y.name), 9, G_))), 128))
            ])) : Q("", !0)
          ]),
          s(S(p)) ? (V(), G("div", K_, [
            Xe(wd, {
              modelValue: S(p).candidateMode,
              "onUpdate:modelValue": T[0] || (T[0] = (y) => S(p).candidateMode = y),
              modes: S(p).getValidModes()
            }, null, 8, ["modelValue", "modes"])
          ])) : Q("", !0),
          (V(!0), G(_e, null, qe(b.value, (y) => (V(), G(_e, {
            key: y.id
          }, [
            a(y) ? (V(), De($, {
              key: 0,
              system: y,
              onCommandLaunched: T[1] || (T[1] = (P) => u("command-launched", P))
            }, null, 8, ["system"])) : Q("", !0),
            o(y) ? (V(), De(ku, {
              key: 1,
              subsystem: y,
              modes: y.getValidModes(),
              mode: y.currentMode,
              onCommandLaunched: T[2] || (T[2] = (P) => u("command-launched", P))
            }, null, 8, ["subsystem", "modes", "mode"])) : Q("", !0)
          ], 64))), 128))
        ])) : Q("", !0),
        o(S(p)) ? (V(), De(ku, {
          key: 1,
          subsystem: S(p),
          modes: S(p).getValidModes(),
          mode: S(p).currentMode,
          onCommandLaunched: T[3] || (T[3] = (y) => u("command-launched", y))
        }, null, 8, ["subsystem", "modes", "mode"])) : Q("", !0)
      ], 64);
    };
  }
}, Io = "";
function Q_() {
  return !!Io;
}
function Mu(e, { url: t, csrfToken: n } = {}) {
  const r = t || `${Io}/api/poris/commit`, a = n ? { "X-CSRF-Token": n } : {};
  return ot.post(r, e, { headers: a }).then((o) => o.data);
}
function J_(e) {
  return ot.post(`${Io}/api/poris/command/${e}`, {}).then((t) => t.data);
}
function Z_() {
  return ot.get(`${Io}/api/poris/state`).then((e) => e.data);
}
const e1 = (e) => (lp("data-v-c5b3237f"), e = e(), ip(), e), t1 = {
  key: 0,
  class: "loading"
}, n1 = /* @__PURE__ */ e1(() => /* @__PURE__ */ ke("span", { class: "spinner" }, null, -1)), r1 = [
  n1
], a1 = {
  key: 1,
  class: "panel"
}, o1 = { class: "title" }, s1 = {
  key: 0,
  class: "monitor-capsules"
}, l1 = { class: "monitor-name" }, i1 = { class: "monitor-value" }, u1 = {
  key: 1,
  class: "actions"
}, c1 = ["disabled"], d1 = ["disabled"], f1 = ["disabled"], p1 = {
  key: 2,
  class: "status command-message"
}, m1 = {
  __name: "ConfigPanelView",
  props: {
    modelPath: {
      type: String
    },
    modelXml: {
      type: String,
      default: ""
    },
    compact: {
      type: Boolean,
      default: !1
    },
    commitUrl: {
      type: String,
      default: ""
    },
    csrfToken: {
      type: String,
      default: ""
    },
    initialState: {
      type: Array,
      default: () => []
    }
  },
  emits: ["committed"],
  setup(e, { emit: t }) {
    const n = kl(), r = ee(() => n.isLoading), a = ee(() => n.rootSubsystem), o = J(!1), s = J(""), l = J(""), i = J(!1), c = Q_(), u = ee(() => !!v.commitUrl || c), d = "", p = J([]), b = ee(() => p.value.filter((M) => M.visible));
    let g = null;
    const v = e, T = t;
    function $(M) {
      var w, k, q;
      const F = n.systemValues[`${M.id}`], N = (F == null ? void 0 : F.value) || ((w = M.currentMode) == null ? void 0 : w.defaultValue) || ((q = (k = M.currentMode) == null ? void 0 : k.valuesNodes) == null ? void 0 : q[0]);
      return N ? typeof (F == null ? void 0 : F.data) == "number" ? {
        number: F.data,
        name: N.name,
        id: N.id,
        type: N.type
      } : N.type === "ValueString" || N.type === "ValueFilePath" ? { data: (F == null ? void 0 : F.data) ?? "", name: N.name, id: N.id, type: N.type } : { name: N.name, id: N.id, type: N.type } : null;
    }
    function I(M) {
      return {
        id: M.id,
        name: M.name,
        mode: M.currentMode ? { id: M.currentMode.id, name: M.currentMode.name } : null,
        value: $(M),
        subsystems: (M.subsystemsNodes || []).map(I)
      };
    }
    function y() {
      return {
        root: I(a.value)
      };
    }
    async function P() {
      if (c)
        try {
          const M = await Z_();
          p.value = (M == null ? void 0 : M.monitors) || [];
        } catch {
          p.value = [];
        }
    }
    async function D(M, F) {
      var N, w;
      o.value = !0, i.value = !1, s.value = "";
      try {
        const k = await M();
        return s.value = F, k;
      } catch (k) {
        i.value = !0, s.value = ((w = (N = k == null ? void 0 : k.response) == null ? void 0 : N.data) == null ? void 0 : w.error) || k.message || String(k);
      } finally {
        o.value = !1;
      }
    }
    async function B() {
      const M = await D(
        () => Mu(y(), { url: v.commitUrl, csrfToken: v.csrfToken }),
        "Commit applied to the PORIS runtime"
      );
      M != null && M.state && (n.applyRuntimeState(M.state), T("committed", M));
    }
    function H(M) {
      D(() => J_(M), `${M} executed`);
    }
    async function _({ systemId: M, systemName: F, commandId: N, commandName: w }) {
      var k;
      if (i.value = !1, v.commitUrl) {
        const q = await D(
          () => Mu(
            {
              ...y(),
              operations: [{ type: "invoke_command", node_id: M, command_id: N }]
            },
            { url: v.commitUrl, csrfToken: v.csrfToken }
          ),
          `Command ${F}.${w} sent to the PORIS runtime`
        );
        q != null && q.state && (n.applyRuntimeState(q.state), T("committed", q));
        const re = (k = q == null ? void 0 : q.operations) == null ? void 0 : k.find((fe) => fe.type === "invoke_command");
        re != null && re.accepted ? l.value = `We launched ${F}.${w}` : re && (i.value = !0, s.value = re.reason || "The PORIS command was rejected");
        return;
      }
      l.value = `We launched ${F}.${w}`;
    }
    function O() {
      l.value = "";
    }
    function W() {
      s.value = "", i.value = !1, A();
    }
    function A() {
      v.modelXml ? n.loadModelXML(v.modelXml) : v.modelPath && n.loadModelURL(v.modelPath);
    }
    return (v.modelXml || v.modelPath) && A(), ut(
      () => n.rootSubsystem,
      (M) => {
        M && v.initialState.length && n.applyRuntimeState(v.initialState);
      },
      { immediate: !0 }
    ), xt(() => {
      P(), c && (g = window.setInterval(P, 1e3));
    }), ll(() => {
      g && window.clearInterval(g);
    }), (M, F) => (V(), G("div", {
      class: Ne(["poris-main", { compact: v.compact }]),
      onClickCapture: O,
      onKeydownCapture: O
    }, [
      r.value ? (V(), G("div", t1, r1)) : a.value ? (V(), G("div", a1, [
        ke("h2", o1, He(a.value.name) + " Panel", 1),
        b.value.length ? (V(), G("div", s1, [
          (V(!0), G(_e, null, qe(b.value, (N) => (V(), G("div", {
            key: N.id,
            class: "monitor-capsule"
          }, [
            ke("span", l1, He(N.label), 1),
            ke("span", i1, He(N.value), 1)
          ]))), 128))
        ])) : Q("", !0),
        Xe(X_, {
          system: a.value,
          onCommandLaunched: _
        }, null, 8, ["system"]),
        u.value || S(c) ? (V(), G("div", u1, [
          u.value ? (V(), G("button", {
            key: 0,
            type: "button",
            disabled: o.value,
            onClick: B
          }, He(v.commitUrl ? "Commit" : "Commit changes"), 9, c1)) : Q("", !0),
          S(c) ? (V(), G("button", {
            key: 1,
            type: "button",
            disabled: o.value,
            onClick: W
          }, "Cancel", 8, d1)) : Q("", !0),
          S(d) ? (V(), G("button", {
            key: 2,
            type: "button",
            disabled: o.value,
            onClick: F[0] || (F[0] = (N) => H(S(d)))
          }, He(S(d)), 9, f1)) : Q("", !0)
        ])) : Q("", !0),
        l.value ? (V(), G("div", p1, He(l.value), 1)) : Q("", !0),
        s.value ? (V(), G("div", {
          key: 3,
          class: Ne(["status", { error: i.value }])
        }, He(s.value), 3)) : Q("", !0)
      ])) : Q("", !0)
    ], 34));
  }
}, h1 = /* @__PURE__ */ Ul(m1, [["__scopeId", "data-v-c5b3237f"]]);
function y1(e, t, n = {}) {
  const { debug: r = !1, compact: a = !1, commitUrl: o = "", csrfToken: s = "", initialState: l = [], modelXml: i = "", onCommit: c } = n;
  Pg(r);
  const d = jm(h1, { modelPath: e, modelXml: i, compact: a, commitUrl: o, csrfToken: s, initialState: l, onCommitted: c });
  return d.use(qm()), d.mount(t), d;
}
export {
  y1 as createPorisViewerPanel
};
