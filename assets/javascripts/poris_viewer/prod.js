var sf = Object.defineProperty;
var lf = (e, t, n) => t in e ? sf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var fe = (e, t, n) => lf(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Hs(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const Je = {}, kr = [], Yt = () => {
}, uf = () => !1, io = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Us = (e) => e.startsWith("onUpdate:"), yt = Object.assign, Ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, cf = Object.prototype.hasOwnProperty, Ye = (e, t) => cf.call(e, t), xe = Array.isArray, Mr = (e) => ga(e) === "[object Map]", uo = (e) => ga(e) === "[object Set]", Ul = (e) => ga(e) === "[object Date]", Ae = (e) => typeof e == "function", at = (e) => typeof e == "string", Bn = (e) => typeof e == "symbol", Xe = (e) => e !== null && typeof e == "object", Tu = (e) => (Xe(e) || Ae(e)) && Ae(e.then) && Ae(e.catch), Pu = Object.prototype.toString, ga = (e) => Pu.call(e), df = (e) => ga(e).slice(8, -1), Su = (e) => ga(e) === "[object Object]", qs = (e) => at(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xr = /* @__PURE__ */ Hs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), co = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ff = /-(\w)/g, Qt = co((e) => e.replace(ff, (t, n) => n ? n.toUpperCase() : "")), pf = /\B([A-Z])/g, Un = co(
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
let Wl;
const Au = () => Wl || (Wl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Dt(e) {
  if (xe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = at(r) ? gf(r) : Dt(r);
      if (a)
        for (const o in a)
          t[o] = a[o];
    }
    return t;
  } else if (at(e) || Xe(e))
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
  else if (Xe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function ht(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !at(t) && (e.class = Ne(t)), n && (e.style = Dt(n)), e;
}
const bf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", wf = /* @__PURE__ */ Hs(bf);
function Du(e) {
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
  let n = Ul(e), r = Ul(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Bn(e), r = Bn(t), n || r)
    return e === t;
  if (n = xe(e), r = xe(t), n || r)
    return n && r ? _f(e, t) : !1;
  if (n = Xe(e), r = Xe(t), n || r) {
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
const He = (e) => at(e) ? e : e == null ? "" : xe(e) || Xe(e) && (e.toString === Pu || !Ae(e.toString)) ? JSON.stringify(e, Cu, 2) : String(e), Cu = (e, t) => t && t.__v_isRef ? Cu(e, t.value) : Mr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, a], o) => (n[Lo(r, o) + " =>"] = a, n),
    {}
  )
} : uo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Lo(n))
} : Bn(t) ? Lo(t) : Xe(t) && !xe(t) && !Su(t) ? String(t) : t, Lo = (e, t = "") => {
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
function zs() {
  return Nt;
}
function Ru(e) {
  Nt && Nt.cleanups.push(e);
}
let ir;
class Gs {
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
      return cn = !0, ir = this, this._runnings++, ql(this), this.fn();
    } finally {
      zl(this), this._runnings--, ir = n, cn = t;
    }
  }
  stop() {
    var t;
    this.active && (ql(this), zl(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Mf(e) {
  return e.value;
}
function ql(e) {
  e._trackId++, e._depsLength = 0;
}
function zl(e) {
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
let cn = !0, ms = 0;
const Ks = [];
function Wn() {
  Ks.push(cn), cn = !1;
}
function Tf() {
  Ks.push(cn), cn = !0;
}
function hr() {
  const e = Ks.pop();
  cn = e === void 0 ? !0 : e;
}
function Qs() {
  ms++;
}
function Xs() {
  for (ms--; !ms && hs.length; )
    hs.shift()();
}
function Nu(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && $u(r, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const hs = [];
function Vu(e, t, n) {
  Qs();
  for (const r of e.keys()) {
    let a;
    r._dirtyLevel < t && (a ?? (a = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (a ?? (a = e.get(r) === r._trackId)) && (r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && hs.push(r.scheduler)));
  }
  Xs();
}
const Iu = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Ha = /* @__PURE__ */ new WeakMap(), ur = Symbol(""), vs = Symbol("");
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
        xe(e) ? qs(n) && l.push(s.get("length")) : (l.push(s.get(ur)), Mr(e) && l.push(s.get(vs)));
        break;
      case "delete":
        xe(e) || (l.push(s.get(ur)), Mr(e) && l.push(s.get(vs)));
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
  Xs();
}
function Pf(e, t) {
  var n;
  return (n = Ha.get(e)) == null ? void 0 : n.get(t);
}
const Sf = /* @__PURE__ */ Hs("__proto__,__v_isRef,__isVue"), Fu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bn)
), Gl = /* @__PURE__ */ Af();
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
      return Xs(), hr(), r;
    };
  }), e;
}
function Df(e) {
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
      if (s && Ye(Gl, n))
        return Reflect.get(Gl, n, r);
      if (n === "hasOwnProperty")
        return Df;
    }
    const l = Reflect.get(t, n, r);
    return (Bn(n) ? Fu.has(n) : Sf(n)) || (a || $t(t, "get", n), o) ? l : ct(l) ? s && qs(n) ? l : l.value : Xe(l) ? a ? Uu(l) : bn(l) : l;
  }
}
class Lu extends Bu {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, a) {
    let o = t[n];
    if (!this._isShallow) {
      const i = Dr(o);
      if (!Ua(r) && !Dr(r) && (o = Le(o), r = Le(r)), !xe(t) && ct(o) && !ct(r))
        return i ? !1 : (o.value = r, !0);
    }
    const s = xe(t) && qs(n) ? Number(n) < t.length : Ye(t, n), l = Reflect.set(t, n, r, a);
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
class Cf extends Bu {
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
const Of = /* @__PURE__ */ new Lu(), Ef = /* @__PURE__ */ new Cf(), Rf = /* @__PURE__ */ new Lu(
  !0
), Js = (e) => e, mo = (e) => Reflect.getPrototypeOf(e);
function Ta(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const a = Le(e), o = Le(t);
  n || (pn(t, o) && $t(a, "get", t), $t(a, "get", o));
  const { has: s } = mo(a), l = r ? Js : n ? tl : ia;
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
function Kl(e) {
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
function Xl(e) {
  const t = Le(this), { has: n, get: r } = mo(t);
  let a = n.call(t, e);
  a || (e = Le(e), a = n.call(t, e)), r && r.call(t, e);
  const o = t.delete(e);
  return a && gn(t, "delete", e, void 0), o;
}
function Jl() {
  const e = Le(this), t = e.size !== 0, n = e.clear();
  return t && gn(e, "clear", void 0, void 0), n;
}
function Aa(e, t) {
  return function(r, a) {
    const o = this, s = o.__v_raw, l = Le(s), i = t ? Js : e ? tl : ia;
    return !e && $t(l, "iterate", ur), s.forEach((c, u) => r.call(a, i(c), i(u), o));
  };
}
function Da(e, t, n) {
  return function(...r) {
    const a = this.__v_raw, o = Le(a), s = Mr(o), l = e === "entries" || e === Symbol.iterator && s, i = e === "keys" && s, c = a[e](...r), u = n ? Js : t ? tl : ia;
    return !t && $t(
      o,
      "iterate",
      i ? vs : ur
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
    add: Kl,
    set: Ql,
    delete: Xl,
    clear: Jl,
    forEach: Aa(!1, !1)
  }, t = {
    get(o) {
      return Ta(this, o, !1, !0);
    },
    get size() {
      return Sa(this);
    },
    has: Pa,
    add: Kl,
    set: Ql,
    delete: Xl,
    clear: Jl,
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
    e[o] = Da(
      o,
      !1,
      !1
    ), n[o] = Da(
      o,
      !0,
      !1
    ), t[o] = Da(
      o,
      !1,
      !0
    ), r[o] = Da(
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
function Zs(e, t) {
  const n = t ? e ? Ff : If : e ? Vf : Nf;
  return (r, a, o) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(
    Ye(n, a) && a in r ? n : r,
    a,
    o
  );
}
const Bf = {
  get: /* @__PURE__ */ Zs(!1, !1)
}, Lf = {
  get: /* @__PURE__ */ Zs(!1, !0)
}, Yf = {
  get: /* @__PURE__ */ Zs(!0, !1)
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
  return Dr(e) ? e : el(
    e,
    !1,
    Of,
    Bf,
    Yu
  );
}
function Wf(e) {
  return el(
    e,
    !1,
    Rf,
    Lf,
    ju
  );
}
function Uu(e) {
  return el(
    e,
    !0,
    Ef,
    Yf,
    Hu
  );
}
function el(e, t, n, r, a) {
  if (!Xe(e) || e.__v_raw && !(t && e.__v_isReactive))
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
  return Dr(e) ? $n(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Dr(e) {
  return !!(e && e.__v_isReadonly);
}
function Ua(e) {
  return !!(e && e.__v_isShallow);
}
function Wu(e) {
  return $n(e) || Dr(e);
}
function Le(e) {
  const t = e && e.__v_raw;
  return t ? Le(t) : e;
}
function ho(e) {
  return Object.isExtensible(e) && ja(e, "__v_skip", !0), e;
}
const ia = (e) => Xe(e) ? bn(e) : e, tl = (e) => Xe(e) ? Uu(e) : e;
class qu {
  constructor(t, n, r, a) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Gs(
      () => t(this._value),
      () => Tr(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !a, this.__v_isReadonly = r;
  }
  get value() {
    const t = Le(this);
    return (!t._cacheable || t.effect.dirty) && pn(t._value, t._value = t.effect.run()) && Tr(t, 4), nl(t), t.effect._dirtyLevel >= 2 && Tr(t, 2), t._value;
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
function nl(e) {
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
    return nl(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ua(t) || Dr(t);
    t = n ? t : Le(t), pn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : ia(t), Tr(this, 4));
  }
}
function Zl(e) {
  Tr(e, 4);
}
function T(e) {
  return ct(e) ? e.value : e;
}
const Kf = {
  get: (e, t, n) => T(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const a = e[t];
    return ct(a) && !ct(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function zu(e) {
  return $n(e) ? e : new Proxy(e, Kf);
}
class Qf {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: r } = t(
      () => nl(this),
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
function Xf(e) {
  return new Qf(e);
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
  return ct(e) ? e : Ae(e) ? new ep(e) : Xe(e) && arguments.length > 1 ? Gu(e, t, n) : J(e);
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
let ua = !1, ys = !1;
const Tt = [];
let on = 0;
const Pr = [];
let Dn = null, nr = 0;
const Ku = /* @__PURE__ */ Promise.resolve();
let rl = null;
function Xt(e) {
  const t = rl || Ku;
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
function al(e) {
  (!Tt.length || !Tt.includes(
    e,
    ua && e.allowRecurse ? on + 1 : on
  )) && (e.id == null ? Tt.push(e) : Tt.splice(np(e.id), 0, e), Qu());
}
function Qu() {
  !ua && !ys && (ys = !0, rl = Ku.then(Ju));
}
function rp(e) {
  const t = Tt.indexOf(e);
  t > on && Tt.splice(t, 1);
}
function ap(e) {
  xe(e) ? Pr.push(...e) : (!Dn || !Dn.includes(
    e,
    e.allowRecurse ? nr + 1 : nr
  )) && Pr.push(e), Qu();
}
function ei(e, t, n = ua ? on + 1 : 0) {
  for (; n < Tt.length; n++) {
    const r = Tt[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid)
        continue;
      Tt.splice(n, 1), n--, r();
    }
  }
}
function Xu(e) {
  if (Pr.length) {
    const t = [...new Set(Pr)].sort(
      (n, r) => ca(n) - ca(r)
    );
    if (Pr.length = 0, Dn) {
      Dn.push(...t);
      return;
    }
    for (Dn = t, nr = 0; nr < Dn.length; nr++)
      Dn[nr]();
    Dn = null, nr = 0;
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
  ys = !1, ua = !0, Tt.sort(op);
  try {
    for (on = 0; on < Tt.length; on++) {
      const t = Tt[on];
      t && t.active !== !1 && Nn(t, null, 14);
    }
  } finally {
    on = 0, Tt.length = 0, Xu(), ua = !1, rl = null, (Tt.length || Pr.length) && Ju();
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
  r[l = Bo(Qt(t))];
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
  return !o && !l ? (Xe(e) && r.set(e, null), null) : (xe(o) ? o.forEach((i) => s[i] = null) : yt(s, o), Xe(e) && r.set(e, s), s);
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
    r._d && pi(-1);
    const o = qa(t);
    let s;
    try {
      s = e(...a);
    } finally {
      qa(o), r._d && pi(1);
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
    ctx: v,
    inheritAttrs: y
  } = e;
  let D, V;
  const R = qa(e);
  try {
    if (n.shapeFlag & 4) {
      const P = a || r, $ = P;
      D = an(
        u.call(
          $,
          P,
          d,
          o,
          b,
          p,
          v
        )
      ), V = i;
    } else {
      const P = t;
      D = an(
        P.length > 1 ? P(
          o,
          { attrs: i, slots: l, emit: c }
        ) : P(
          o,
          null
          /* we know it doesn't need it */
        )
      ), V = t.props ? i : up(i);
    }
  } catch (P) {
    na.length = 0, vo(P, e, 1), D = Qe(Ht);
  }
  let g = D;
  if (V && y !== !1) {
    const P = Object.keys(V), { shapeFlag: $ } = g;
    P.length && $ & 7 && (s && P.some(Us) && (V = cp(
      V,
      s
    )), g = Ln(g, V));
  }
  return n.dirs && (g = Ln(g), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && (g.transition = n.transition), D = g, qa(R), D;
}
const up = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || io(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, cp = (e, t) => {
  const n = {};
  for (const r in e)
    (!Us(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
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
      return r ? ti(r, s, c) : !!s;
    if (i & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (s[p] !== r[p] && !yo(c, p))
          return !0;
      }
    }
  } else
    return (a || l) && (!l || !l.$stable) ? !0 : r === s ? !1 : r ? s ? ti(r, s, c) : !0 : !!s;
  return !1;
}
function ti(e, t, n) {
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
      if (l && (l === t || l === Qt(t) || l === fo(Qt(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      ni(a[e] || o[e], t) || // global registration
      ni(a.appContext[e], t)
    );
    return !s && r ? o : s;
  }
}
function ni(e, t) {
  return e && (e[t] || e[Qt(t)] || e[fo(Qt(t))]);
}
const mp = (e) => e.__isSuspense;
function hp(e, t) {
  t && t.pendingBranch ? xe(e) ? t.effects.push(...e) : t.effects.push(e) : ap(e);
}
const vp = Symbol.for("v-scx"), yp = () => ea(vp);
function gp(e, t) {
  return ol(
    e,
    null,
    { flush: "sync" }
  );
}
const Ca = {};
function ut(e, t, n) {
  return ol(e, t, n);
}
function ol(e, t, {
  immediate: n,
  deep: r,
  flush: a,
  once: o,
  onTrack: s,
  onTrigger: l
} = Je) {
  if (t && o) {
    const L = t;
    t = (...k) => {
      L(...k), $();
    };
  }
  const i = wt, c = (L) => r === !0 ? L : (
    // for deep: false, only traverse root-level properties
    or(L, r === !1 ? 1 : void 0)
  );
  let u, d = !1, p = !1;
  if (ct(e) ? (u = () => e.value, d = Ua(e)) : $n(e) ? (u = () => c(e), d = !0) : xe(e) ? (p = !0, d = e.some((L) => $n(L) || Ua(L)), u = () => e.map((L) => {
    if (ct(L))
      return L.value;
    if ($n(L))
      return c(L);
    if (Ae(L))
      return Nn(L, i, 2);
  })) : Ae(e) ? t ? u = () => Nn(e, i, 2) : u = () => (b && b(), jt(
    e,
    i,
    3,
    [v]
  )) : u = Yt, t && r) {
    const L = u;
    u = () => or(L());
  }
  let b, v = (L) => {
    b = g.onStop = () => {
      Nn(L, i, 4), b = g.onStop = void 0;
    };
  }, y;
  if (Mo)
    if (v = Yt, t ? n && jt(t, i, 3, [
      u(),
      p ? [] : void 0,
      v
    ]) : u(), a === "sync") {
      const L = yp();
      y = L.__watcherHandles || (L.__watcherHandles = []);
    } else
      return Yt;
  let D = p ? new Array(e.length).fill(Ca) : Ca;
  const V = () => {
    if (!(!g.active || !g.dirty))
      if (t) {
        const L = g.run();
        (r || d || (p ? L.some((k, M) => pn(k, D[M])) : pn(L, D))) && (b && b(), jt(t, i, 3, [
          L,
          // pass undefined as the old value when it's changed for the first time
          D === Ca ? void 0 : p && D[0] === Ca ? [] : D,
          v
        ]), D = L);
      } else
        g.run();
  };
  V.allowRecurse = !!t;
  let R;
  a === "sync" ? R = V : a === "post" ? R = () => Ot(V, i && i.suspense) : (V.pre = !0, i && (V.id = i.uid), R = () => al(V));
  const g = new Gs(u, Yt, R), P = zs(), $ = () => {
    g.stop(), P && Ws(P.effects, g);
  };
  return t ? n ? V() : D = g.run() : a === "post" ? Ot(
    g.run.bind(g),
    i && i.suspense
  ) : g.run(), y && y.push($), $;
}
function bp(e, t, n) {
  const r = this.proxy, a = at(e) ? e.includes(".") ? rc(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Ae(t) ? o = t : (o = t.handler, n = t);
  const s = ba(this), l = ol(a, o.bind(r), n);
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
  if (!Xe(e) || e.__v_skip)
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
function Qn(e, t, n, r) {
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
const Cn = Symbol("_leaveCb"), Oa = Symbol("_enterCb");
function wp() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return xt(() => {
    e.isMounted = !0;
  }), sl(() => {
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
    const n = dl(), r = wp();
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
      const i = ri(o);
      if (!i)
        return jo(o);
      const c = gs(
        i,
        s,
        r,
        n
      );
      bs(i, c);
      const u = n.subTree, d = u && ri(u);
      if (d && d.type !== Ht && !rr(i, d)) {
        const p = gs(
          d,
          s,
          r,
          n
        );
        if (bs(d, p), l === "out-in")
          return r.isLeaving = !0, p.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, jo(o);
        l === "in-out" && i.type !== Ht && (p.delayLeave = (b, v, y) => {
          const D = oc(
            r,
            d
          );
          D[String(d.key)] = d, b[Cn] = () => {
            v(), b[Cn] = void 0, delete c.delayedLeave;
          }, c.delayedLeave = y;
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
function gs(e, t, n, r) {
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
    onLeaveCancelled: v,
    onBeforeAppear: y,
    onAppear: D,
    onAfterAppear: V,
    onAppearCancelled: R
  } = t, g = String(e.key), P = oc(n, e), $ = (M, O) => {
    M && jt(
      M,
      r,
      9,
      O
    );
  }, L = (M, O) => {
    const W = O[1];
    $(M, O), xe(M) ? M.every((S) => S.length <= 1) && W() : M.length <= 1 && W();
  }, k = {
    mode: o,
    persisted: s,
    beforeEnter(M) {
      let O = l;
      if (!n.isMounted)
        if (a)
          O = y || l;
        else
          return;
      M[Cn] && M[Cn](
        !0
        /* cancelled */
      );
      const W = P[g];
      W && rr(e, W) && W.el[Cn] && W.el[Cn](), $(O, [M]);
    },
    enter(M) {
      let O = i, W = c, S = u;
      if (!n.isMounted)
        if (a)
          O = D || i, W = V || c, S = R || u;
        else
          return;
      let A = !1;
      const F = M[Oa] = (B) => {
        A || (A = !0, B ? $(S, [M]) : $(W, [M]), k.delayedLeave && k.delayedLeave(), M[Oa] = void 0);
      };
      O ? L(O, [M, F]) : F();
    },
    leave(M, O) {
      const W = String(e.key);
      if (M[Oa] && M[Oa](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return O();
      $(d, [M]);
      let S = !1;
      const A = M[Cn] = (F) => {
        S || (S = !0, O(), F ? $(v, [M]) : $(b, [M]), M[Cn] = void 0, P[W] === e && delete P[W]);
      };
      P[W] = e, p ? L(p, [M, A]) : A();
    },
    clone(M) {
      return gs(M, t, n, r);
    }
  };
  return k;
}
function jo(e) {
  if (wo(e))
    return e = Ln(e), e.children = null, e;
}
function ri(e) {
  return wo(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    e.children ? e.children[0] : void 0
  ) : e;
}
function bs(e, t) {
  e.shapeFlag & 6 && e.component ? bs(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
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
    Ws(r[t], a);
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
), Pp = wn("bm"), xt = wn("m"), ic = wn("bu"), Sp = wn("u"), sl = wn("bum"), Fr = wn("um"), Ap = wn("sp"), Dp = wn(
  "rtg"
), Cp = wn(
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
  } else if (Xe(e))
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
function Ct(e, t) {
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
    return t !== "default" && (n.name = t), Qe("slot", n, r);
  let o = e[t];
  o && o._c && (o._d = !1), I();
  const s = o && uc(o(n)), l = Ce(
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
const ws = (e) => e ? xc(e) ? To(e) || e.proxy : ws(e.parent) : null, Zr = (
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
    $parent: (e) => ws(e.parent),
    $root: (e) => ws(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ll(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, al(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Xt.bind(e.proxy)),
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
        _s && (s[t] = 0);
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
  const e = dl();
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
let _s = !0;
function $p(e) {
  const t = ll(e), n = e.proxy, r = e.ctx;
  _s = !1, t.beforeCreate && ai(t.beforeCreate, e, "bc");
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
    updated: v,
    activated: y,
    deactivated: D,
    beforeDestroy: V,
    beforeUnmount: R,
    destroyed: g,
    unmounted: P,
    render: $,
    renderTracked: L,
    renderTriggered: k,
    errorCaptured: M,
    serverPrefetch: O,
    // public API
    expose: W,
    inheritAttrs: S,
    // assets
    components: A,
    directives: F,
    filters: B
  } = t;
  if (c && Np(c, r, null), s)
    for (const q in s) {
      const ae = s[q];
      Ae(ae) && (r[q] = ae.bind(n));
    }
  if (a) {
    const q = a.call(n, n);
    Xe(q) && (e.data = bn(q));
  }
  if (_s = !0, o)
    for (const q in o) {
      const ae = o[q], pe = Ae(ae) ? ae.bind(n, n) : Ae(ae.get) ? ae.get.bind(n, n) : Yt, ee = !Ae(ae) && Ae(ae.set) ? ae.set.bind(n) : Yt, m = ne({
        get: pe,
        set: ee
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
    Reflect.ownKeys(q).forEach((ae) => {
      Yp(ae, q[ae]);
    });
  }
  u && ai(u, e, "c");
  function x(q, ae) {
    xe(ae) ? ae.forEach((pe) => q(pe.bind(n))) : ae && q(ae.bind(n));
  }
  if (x(Pp, d), x(xt, p), x(ic, b), x(Sp, v), x(kp, y), x(Mp, D), x(Op, M), x(Cp, L), x(Dp, k), x(sl, R), x(Fr, P), x(Ap, O), xe(W))
    if (W.length) {
      const q = e.exposed || (e.exposed = {});
      W.forEach((ae) => {
        Object.defineProperty(q, ae, {
          get: () => n[ae],
          set: (pe) => n[ae] = pe
        });
      });
    } else e.exposed || (e.exposed = {});
  $ && e.render === Yt && (e.render = $), S != null && (e.inheritAttrs = S), A && (e.components = A), F && (e.directives = F);
}
function Np(e, t, n = Yt) {
  xe(e) && (e = xs(e));
  for (const r in e) {
    const a = e[r];
    let o;
    Xe(a) ? "default" in a ? o = ea(
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
function ai(e, t, n) {
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
  else if (Xe(e))
    if (xe(e))
      e.forEach((o) => dc(o, t, n, r));
    else {
      const o = Ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ae(o) && ut(a, o, e);
    }
}
function ll(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: a,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = o.get(t);
  let i;
  return l ? i = l : !a.length && !n && !r ? i = t : (i = {}, a.length && a.forEach(
    (c) => Ga(i, c, s, !0)
  ), Ga(i, t, s)), Xe(t) && o.set(t, i), i;
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
  data: oi,
  props: si,
  emits: si,
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
  provide: oi,
  inject: Ip
};
function oi(e, t) {
  return t ? e ? function() {
    return yt(
      Ae(e) ? e.call(this, this) : e,
      Ae(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ip(e, t) {
  return Kr(xs(e), xs(t));
}
function xs(e) {
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
function si(e, t) {
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
    Ae(r) || (r = yt({}, r)), a != null && !Xe(a) && (a = null);
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
          const p = Qe(r, a);
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
            const v = Qt(p);
            a[v] = ks(
              i,
              l,
              v,
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
      n[u] !== void 0) && (a[d] = ks(
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
      if (Xr(i))
        continue;
      const c = t[i];
      let u;
      a && Ye(a, u = Qt(i)) ? !o || !o.includes(u) ? n[u] = c : (l || (l = {}))[u] = c : yo(e.emitsOptions, i) || (!(i in r) || c !== r[i]) && (r[i] = c, s = !0);
    }
  if (o) {
    const i = Le(n), c = l || Je;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      n[d] = ks(
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
function ks(e, t, n, r, a, o) {
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
    return Xe(e) && r.set(e, kr), kr;
  if (xe(o))
    for (let u = 0; u < o.length; u++) {
      const d = Qt(o[u]);
      li(d) && (s[d] = Je);
    }
  else if (o)
    for (const u in o) {
      const d = Qt(u);
      if (li(d)) {
        const p = o[u], b = s[d] = xe(p) || Ae(p) ? { type: p } : yt({}, p);
        if (b) {
          const v = ci(Boolean, b.type), y = ci(String, b.type);
          b[
            0
            /* shouldCast */
          ] = v > -1, b[
            1
            /* shouldCastTrue */
          ] = y < 0 || v < y, (v > -1 || Ye(b, "default")) && l.push(d);
        }
      }
    }
  const c = [s, l];
  return Xe(e) && r.set(e, c), c;
}
function li(e) {
  return e[0] !== "$" && !Xr(e);
}
function ii(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function ui(e, t) {
  return ii(e) === ii(t);
}
function ci(e, t) {
  return xe(t) ? t.findIndex((n) => ui(n, e)) : Ae(t) && ui(t, e) ? 0 : -1;
}
const hc = (e) => e[0] === "_" || e === "$stable", il = (e) => xe(e) ? e.map(an) : [an(e)], Wp = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ve((...a) => il(t(...a)), n);
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
      const s = il(o);
      t[a] = () => s;
    }
  }
}, yc = (e, t) => {
  const n = il(t);
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
function Ms(e, t, n, r, a = !1) {
  if (xe(e)) {
    e.forEach(
      (p, b) => Ms(
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
      const v = () => {
        if (e.f) {
          const y = p ? Ye(d, i) ? d[i] : u[i] : i.value;
          a ? xe(y) && Ws(y, o) : xe(y) ? y.includes(o) || y.push(o) : p ? (u[i] = [o], Ye(d, i) && (d[i] = u[i])) : (i.value = [o], e.k && (u[e.k] = i.value));
        } else p ? (u[i] = s, Ye(d, i) && (d[i] = s)) : b && (i.value = s, e.k && (u[e.k] = s));
      };
      s ? (v.id = -1, Ot(v, n)) : v();
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
    insertStaticContent: v
  } = e, y = (h, _, Y, K = null, E = null, oe = null, ie = void 0, le = null, ue = !!_.dynamicChildren) => {
    if (h === _)
      return;
    h && !rr(h, _) && (K = Oe(h), f(h, E, oe, !0), h = null), _.patchFlag === -2 && (ue = !1, _.dynamicChildren = null);
    const { type: re, ref: de, shapeFlag: me } = _;
    switch (re) {
      case xo:
        D(h, _, Y, K);
        break;
      case Ht:
        V(h, _, Y, K);
        break;
      case Wo:
        h == null && R(_, Y, K, ie);
        break;
      case _e:
        A(
          h,
          _,
          Y,
          K,
          E,
          oe,
          ie,
          le,
          ue
        );
        break;
      default:
        me & 1 ? $(
          h,
          _,
          Y,
          K,
          E,
          oe,
          ie,
          le,
          ue
        ) : me & 6 ? F(
          h,
          _,
          Y,
          K,
          E,
          oe,
          ie,
          le,
          ue
        ) : (me & 64 || me & 128) && re.process(
          h,
          _,
          Y,
          K,
          E,
          oe,
          ie,
          le,
          ue,
          ve
        );
    }
    de != null && E && Ms(de, h && h.ref, oe, _ || h, !_);
  }, D = (h, _, Y, K) => {
    if (h == null)
      r(
        _.el = l(_.children),
        Y,
        K
      );
    else {
      const E = _.el = h.el;
      _.children !== h.children && c(E, _.children);
    }
  }, V = (h, _, Y, K) => {
    h == null ? r(
      _.el = i(_.children || ""),
      Y,
      K
    ) : _.el = h.el;
  }, R = (h, _, Y, K) => {
    [h.el, h.anchor] = v(
      h.children,
      _,
      Y,
      K,
      h.el,
      h.anchor
    );
  }, g = ({ el: h, anchor: _ }, Y, K) => {
    let E;
    for (; h && h !== _; )
      E = p(h), r(h, Y, K), h = E;
    r(_, Y, K);
  }, P = ({ el: h, anchor: _ }) => {
    let Y;
    for (; h && h !== _; )
      Y = p(h), a(h), h = Y;
    a(_);
  }, $ = (h, _, Y, K, E, oe, ie, le, ue) => {
    _.type === "svg" ? ie = "svg" : _.type === "math" && (ie = "mathml"), h == null ? L(
      _,
      Y,
      K,
      E,
      oe,
      ie,
      le,
      ue
    ) : O(
      h,
      _,
      E,
      oe,
      ie,
      le,
      ue
    );
  }, L = (h, _, Y, K, E, oe, ie, le) => {
    let ue, re;
    const { props: de, shapeFlag: me, transition: be, dirs: Te } = h;
    if (ue = h.el = s(
      h.type,
      oe,
      de && de.is,
      de
    ), me & 8 ? u(ue, h.children) : me & 16 && M(
      h.children,
      ue,
      null,
      K,
      E,
      Uo(h, oe),
      ie,
      le
    ), Te && Qn(h, null, K, "created"), k(ue, h, h.scopeId, ie, K), de) {
      for (const je in de)
        je !== "value" && !Xr(je) && o(
          ue,
          je,
          null,
          de[je],
          oe,
          h.children,
          K,
          E,
          j
        );
      "value" in de && o(ue, "value", null, de.value, oe), (re = de.onVnodeBeforeMount) && nn(re, K, h);
    }
    Te && Qn(h, null, K, "beforeMount");
    const Re = Qp(E, be);
    Re && be.beforeEnter(ue), r(ue, _, Y), ((re = de && de.onVnodeMounted) || Re || Te) && Ot(() => {
      re && nn(re, K, h), Re && be.enter(ue), Te && Qn(h, null, K, "mounted");
    }, E);
  }, k = (h, _, Y, K, E) => {
    if (Y && b(h, Y), K)
      for (let oe = 0; oe < K.length; oe++)
        b(h, K[oe]);
    if (E) {
      let oe = E.subTree;
      if (_ === oe) {
        const ie = E.vnode;
        k(
          h,
          ie,
          ie.scopeId,
          ie.slotScopeIds,
          E.parent
        );
      }
    }
  }, M = (h, _, Y, K, E, oe, ie, le, ue = 0) => {
    for (let re = ue; re < h.length; re++) {
      const de = h[re] = le ? On(h[re]) : an(h[re]);
      y(
        null,
        de,
        _,
        Y,
        K,
        E,
        oe,
        ie,
        le
      );
    }
  }, O = (h, _, Y, K, E, oe, ie) => {
    const le = _.el = h.el;
    let { patchFlag: ue, dynamicChildren: re, dirs: de } = _;
    ue |= h.patchFlag & 16;
    const me = h.props || Je, be = _.props || Je;
    let Te;
    if (Y && Xn(Y, !1), (Te = be.onVnodeBeforeUpdate) && nn(Te, Y, _, h), de && Qn(_, h, Y, "beforeUpdate"), Y && Xn(Y, !0), re ? W(
      h.dynamicChildren,
      re,
      le,
      Y,
      K,
      Uo(_, E),
      oe
    ) : ie || ae(
      h,
      _,
      le,
      null,
      Y,
      K,
      Uo(_, E),
      oe,
      !1
    ), ue > 0) {
      if (ue & 16)
        S(
          le,
          _,
          me,
          be,
          Y,
          K,
          E
        );
      else if (ue & 2 && me.class !== be.class && o(le, "class", null, be.class, E), ue & 4 && o(le, "style", me.style, be.style, E), ue & 8) {
        const Re = _.dynamicProps;
        for (let je = 0; je < Re.length; je++) {
          const Ge = Re[je], lt = me[Ge], H = be[Ge];
          (H !== lt || Ge === "value") && o(
            le,
            Ge,
            lt,
            H,
            E,
            h.children,
            Y,
            K,
            j
          );
        }
      }
      ue & 1 && h.children !== _.children && u(le, _.children);
    } else !ie && re == null && S(
      le,
      _,
      me,
      be,
      Y,
      K,
      E
    );
    ((Te = be.onVnodeUpdated) || de) && Ot(() => {
      Te && nn(Te, Y, _, h), de && Qn(_, h, Y, "updated");
    }, K);
  }, W = (h, _, Y, K, E, oe, ie) => {
    for (let le = 0; le < _.length; le++) {
      const ue = h[le], re = _[le], de = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ue.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ue.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !rr(ue, re) || // - In the case of a component, it could contain anything.
        ue.shapeFlag & 70) ? d(ue.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Y
        )
      );
      y(
        ue,
        re,
        de,
        null,
        K,
        E,
        oe,
        ie,
        !0
      );
    }
  }, S = (h, _, Y, K, E, oe, ie) => {
    if (Y !== K) {
      if (Y !== Je)
        for (const le in Y)
          !Xr(le) && !(le in K) && o(
            h,
            le,
            Y[le],
            null,
            ie,
            _.children,
            E,
            oe,
            j
          );
      for (const le in K) {
        if (Xr(le))
          continue;
        const ue = K[le], re = Y[le];
        ue !== re && le !== "value" && o(
          h,
          le,
          re,
          ue,
          ie,
          _.children,
          E,
          oe,
          j
        );
      }
      "value" in K && o(h, "value", Y.value, K.value, ie);
    }
  }, A = (h, _, Y, K, E, oe, ie, le, ue) => {
    const re = _.el = h ? h.el : l(""), de = _.anchor = h ? h.anchor : l("");
    let { patchFlag: me, dynamicChildren: be, slotScopeIds: Te } = _;
    Te && (le = le ? le.concat(Te) : Te), h == null ? (r(re, Y, K), r(de, Y, K), M(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      _.children || [],
      Y,
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
      Y,
      E,
      oe,
      ie,
      le
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (_.key != null || E && _ === E.subTree) && ul(
      h,
      _,
      !0
      /* shallow */
    )) : ae(
      h,
      _,
      Y,
      de,
      E,
      oe,
      ie,
      le,
      ue
    );
  }, F = (h, _, Y, K, E, oe, ie, le, ue) => {
    _.slotScopeIds = le, h == null ? _.shapeFlag & 512 ? E.ctx.activate(
      _,
      Y,
      K,
      ie,
      ue
    ) : B(
      _,
      Y,
      K,
      E,
      oe,
      ie,
      ue
    ) : w(h, _, ue);
  }, B = (h, _, Y, K, E, oe, ie) => {
    const le = h.component = sm(
      h,
      K,
      E
    );
    if (wo(h) && (le.ctx.renderer = ve), lm(le), le.asyncDep) {
      if (E && E.registerDep(le, x), !h.el) {
        const ue = le.subTree = Qe(Ht);
        V(null, ue, _, Y);
      }
    } else
      x(
        le,
        h,
        _,
        Y,
        E,
        oe,
        ie
      );
  }, w = (h, _, Y) => {
    const K = _.component = h.component;
    if (dp(h, _, Y))
      if (K.asyncDep && !K.asyncResolved) {
        q(K, _, Y);
        return;
      } else
        K.next = _, rp(K.update), K.effect.dirty = !0, K.update();
    else
      _.el = h.el, K.vnode = _;
  }, x = (h, _, Y, K, E, oe, ie) => {
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
        Xn(h, !1), de ? (de.el = Re.el, q(h, de, ie)) : de = Re, me && Va(me), (Ge = de.props && de.props.onVnodeBeforeUpdate) && nn(Ge, Te, de, Re), Xn(h, !0);
        const lt = Yo(h), H = h.subTree;
        h.subTree = lt, y(
          H,
          lt,
          // parent may have changed if it's in a teleport
          d(H.el),
          // anchor may have changed if it's in a fragment
          Oe(H),
          h,
          E,
          oe
        ), de.el = lt.el, je === null && fp(h, lt.el), be && Ot(be, E), (Ge = de.props && de.props.onVnodeUpdated) && Ot(
          () => nn(Ge, Te, de, Re),
          E
        );
      } else {
        let de;
        const { el: me, props: be } = _, { bm: Te, m: Re, parent: je } = h, Ge = Jr(_);
        if (Xn(h, !1), Te && Va(Te), !Ge && (de = be && be.onVnodeBeforeMount) && nn(de, je, _), Xn(h, !0), me && C) {
          const lt = () => {
            h.subTree = Yo(h), C(
              me,
              h.subTree,
              h,
              E,
              null
            );
          };
          Ge ? _.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !h.isUnmounted && lt()
          ) : lt();
        } else {
          const lt = h.subTree = Yo(h);
          y(
            null,
            lt,
            Y,
            K,
            h,
            E,
            oe
          ), _.el = lt.el;
        }
        if (Re && Ot(Re, E), !Ge && (de = be && be.onVnodeMounted)) {
          const lt = _;
          Ot(
            () => nn(de, je, lt),
            E
          );
        }
        (_.shapeFlag & 256 || je && Jr(je.vnode) && je.vnode.shapeFlag & 256) && h.a && Ot(h.a, E), h.isMounted = !0, _ = Y = K = null;
      }
    }, ue = h.effect = new Gs(
      le,
      Yt,
      () => al(re),
      h.scope
      // track it in component's effect scope
    ), re = h.update = () => {
      ue.dirty && ue.run();
    };
    re.id = h.uid, Xn(h, !0), re();
  }, q = (h, _, Y) => {
    _.component = h;
    const K = h.vnode.props;
    h.vnode = _, h.next = null, Up(h, _.props, K, Y), zp(h, _.children, Y), Wn(), ei(h), hr();
  }, ae = (h, _, Y, K, E, oe, ie, le, ue = !1) => {
    const re = h && h.children, de = h ? h.shapeFlag : 0, me = _.children, { patchFlag: be, shapeFlag: Te } = _;
    if (be > 0) {
      if (be & 128) {
        ee(
          re,
          me,
          Y,
          K,
          E,
          oe,
          ie,
          le,
          ue
        );
        return;
      } else if (be & 256) {
        pe(
          re,
          me,
          Y,
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
    Te & 8 ? (de & 16 && j(re, E, oe), me !== re && u(Y, me)) : de & 16 ? Te & 16 ? ee(
      re,
      me,
      Y,
      K,
      E,
      oe,
      ie,
      le,
      ue
    ) : j(re, E, oe, !0) : (de & 8 && u(Y, ""), Te & 16 && M(
      me,
      Y,
      K,
      E,
      oe,
      ie,
      le,
      ue
    ));
  }, pe = (h, _, Y, K, E, oe, ie, le, ue) => {
    h = h || kr, _ = _ || kr;
    const re = h.length, de = _.length, me = Math.min(re, de);
    let be;
    for (be = 0; be < me; be++) {
      const Te = _[be] = ue ? On(_[be]) : an(_[be]);
      y(
        h[be],
        Te,
        Y,
        null,
        E,
        oe,
        ie,
        le,
        ue
      );
    }
    re > de ? j(
      h,
      E,
      oe,
      !0,
      !1,
      me
    ) : M(
      _,
      Y,
      K,
      E,
      oe,
      ie,
      le,
      ue,
      me
    );
  }, ee = (h, _, Y, K, E, oe, ie, le, ue) => {
    let re = 0;
    const de = _.length;
    let me = h.length - 1, be = de - 1;
    for (; re <= me && re <= be; ) {
      const Te = h[re], Re = _[re] = ue ? On(_[re]) : an(_[re]);
      if (rr(Te, Re))
        y(
          Te,
          Re,
          Y,
          null,
          E,
          oe,
          ie,
          le,
          ue
        );
      else
        break;
      re++;
    }
    for (; re <= me && re <= be; ) {
      const Te = h[me], Re = _[be] = ue ? On(_[be]) : an(_[be]);
      if (rr(Te, Re))
        y(
          Te,
          Re,
          Y,
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
    if (re > me) {
      if (re <= be) {
        const Te = be + 1, Re = Te < de ? _[Te].el : K;
        for (; re <= be; )
          y(
            null,
            _[re] = ue ? On(_[re]) : an(_[re]),
            Y,
            Re,
            E,
            oe,
            ie,
            le,
            ue
          ), re++;
      }
    } else if (re > be)
      for (; re <= me; )
        f(h[re], E, oe, !0), re++;
    else {
      const Te = re, Re = re, je = /* @__PURE__ */ new Map();
      for (re = Re; re <= be; re++) {
        const he = _[re] = ue ? On(_[re]) : an(_[re]);
        he.key != null && je.set(he.key, re);
      }
      let Ge, lt = 0;
      const H = be - Re + 1;
      let se = !1, we = 0;
      const Pe = new Array(H);
      for (re = 0; re < H; re++)
        Pe[re] = 0;
      for (re = Te; re <= me; re++) {
        const he = h[re];
        if (lt >= H) {
          f(he, E, oe, !0);
          continue;
        }
        let ye;
        if (he.key != null)
          ye = je.get(he.key);
        else
          for (Ge = Re; Ge <= be; Ge++)
            if (Pe[Ge - Re] === 0 && rr(he, _[Ge])) {
              ye = Ge;
              break;
            }
        ye === void 0 ? f(he, E, oe, !0) : (Pe[ye - Re] = re + 1, ye >= we ? we = ye : se = !0, y(
          he,
          _[ye],
          Y,
          null,
          E,
          oe,
          ie,
          le,
          ue
        ), lt++);
      }
      const te = se ? Xp(Pe) : kr;
      for (Ge = te.length - 1, re = H - 1; re >= 0; re--) {
        const he = Re + re, ye = _[he], Bt = he + 1 < de ? _[he + 1].el : K;
        Pe[re] === 0 ? y(
          null,
          ye,
          Y,
          Bt,
          E,
          oe,
          ie,
          le,
          ue
        ) : se && (Ge < 0 || re !== te[Ge] ? m(ye, Y, Bt, 2) : Ge--);
      }
    }
  }, m = (h, _, Y, K, E = null) => {
    const { el: oe, type: ie, transition: le, children: ue, shapeFlag: re } = h;
    if (re & 6) {
      m(h.component.subTree, _, Y, K);
      return;
    }
    if (re & 128) {
      h.suspense.move(_, Y, K);
      return;
    }
    if (re & 64) {
      ie.move(h, _, Y, ve);
      return;
    }
    if (ie === _e) {
      r(oe, _, Y);
      for (let me = 0; me < ue.length; me++)
        m(ue[me], _, Y, K);
      r(h.anchor, _, Y);
      return;
    }
    if (ie === Wo) {
      g(h, _, Y);
      return;
    }
    if (K !== 2 && re & 1 && le)
      if (K === 0)
        le.beforeEnter(oe), r(oe, _, Y), Ot(() => le.enter(oe), E);
      else {
        const { leave: me, delayLeave: be, afterLeave: Te } = le, Re = () => r(oe, _, Y), je = () => {
          me(oe, () => {
            Re(), Te && Te();
          });
        };
        be ? be(oe, Re, je) : je();
      }
    else
      r(oe, _, Y);
  }, f = (h, _, Y, K = !1, E = !1) => {
    const {
      type: oe,
      props: ie,
      ref: le,
      children: ue,
      dynamicChildren: re,
      shapeFlag: de,
      patchFlag: me,
      dirs: be
    } = h;
    if (le != null && Ms(le, null, Y, h, !0), de & 256) {
      _.ctx.deactivate(h);
      return;
    }
    const Te = de & 1 && be, Re = !Jr(h);
    let je;
    if (Re && (je = ie && ie.onVnodeBeforeUnmount) && nn(je, _, h), de & 6)
      ce(h.component, Y, K);
    else {
      if (de & 128) {
        h.suspense.unmount(Y, K);
        return;
      }
      Te && Qn(h, null, _, "beforeUnmount"), de & 64 ? h.type.remove(
        h,
        _,
        Y,
        E,
        ve,
        K
      ) : re && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (oe !== _e || me > 0 && me & 64) ? j(
        re,
        _,
        Y,
        !1,
        !0
      ) : (oe === _e && me & 384 || !E && de & 16) && j(ue, _, Y), K && N(h);
    }
    (Re && (je = ie && ie.onVnodeUnmounted) || Te) && Ot(() => {
      je && nn(je, _, h), Te && Qn(h, null, _, "unmounted");
    }, Y);
  }, N = (h) => {
    const { type: _, el: Y, anchor: K, transition: E } = h;
    if (_ === _e) {
      Q(Y, K);
      return;
    }
    if (_ === Wo) {
      P(h);
      return;
    }
    const oe = () => {
      a(Y), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (h.shapeFlag & 1 && E && !E.persisted) {
      const { leave: ie, delayLeave: le } = E, ue = () => ie(Y, oe);
      le ? le(h.el, oe, ue) : ue();
    } else
      oe();
  }, Q = (h, _) => {
    let Y;
    for (; h !== _; )
      Y = p(h), a(h), h = Y;
    a(_);
  }, ce = (h, _, Y) => {
    const { bum: K, scope: E, update: oe, subTree: ie, um: le } = h;
    K && Va(K), E.stop(), oe && (oe.active = !1, f(ie, h, _, Y)), le && Ot(le, _), Ot(() => {
      h.isUnmounted = !0;
    }, _), _ && _.pendingBranch && !_.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === _.pendingId && (_.deps--, _.deps === 0 && _.resolve());
  }, j = (h, _, Y, K = !1, E = !1, oe = 0) => {
    for (let ie = oe; ie < h.length; ie++)
      f(h[ie], _, Y, K, E);
  }, Oe = (h) => h.shapeFlag & 6 ? Oe(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : p(h.anchor || h.el);
  let Ie = !1;
  const U = (h, _, Y) => {
    h == null ? _._vnode && f(_._vnode, null, null, !0) : y(
      _._vnode || null,
      h,
      _,
      null,
      null,
      null,
      Y
    ), Ie || (Ie = !0, ei(), Xu(), Ie = !1), _._vnode = h;
  }, ve = {
    p: y,
    um: f,
    m,
    r: N,
    mt: B,
    mc: M,
    pc: ae,
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
function Xn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Qp(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ul(e, t, n = !1) {
  const r = e.children, a = t.children;
  if (xe(r) && xe(a))
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      let l = a[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = a[o] = On(a[o]), l.el = s.el), n || ul(s, l)), l.type === xo && (l.el = s.el);
    }
}
function Xp(e) {
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
const Jp = (e) => e.__isTeleport, ta = (e) => e && (e.disabled || e.disabled === ""), di = (e) => typeof SVGElement < "u" && e instanceof SVGElement, fi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ts = (e, t) => {
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
      o: { insert: b, querySelector: v, createText: y, createComment: D }
    } = c, V = ta(t.props);
    let { shapeFlag: R, children: g, dynamicChildren: P } = t;
    if (e == null) {
      const $ = t.el = y(""), L = t.anchor = y("");
      b($, n, r), b(L, n, r);
      const k = t.target = Ts(t.props, v), M = t.targetAnchor = y("");
      k && (b(M, k), s === "svg" || di(k) ? s = "svg" : (s === "mathml" || fi(k)) && (s = "mathml"));
      const O = (W, S) => {
        R & 16 && u(
          g,
          W,
          S,
          a,
          o,
          s,
          l,
          i
        );
      };
      V ? O(n, L) : k && O(k, M);
    } else {
      t.el = e.el;
      const $ = t.anchor = e.anchor, L = t.target = e.target, k = t.targetAnchor = e.targetAnchor, M = ta(e.props), O = M ? n : L, W = M ? $ : k;
      if (s === "svg" || di(L) ? s = "svg" : (s === "mathml" || fi(L)) && (s = "mathml"), P ? (p(
        e.dynamicChildren,
        P,
        O,
        a,
        o,
        s,
        l
      ), ul(e, t, !0)) : i || d(
        e,
        t,
        O,
        W,
        a,
        o,
        s,
        l,
        !1
      ), V)
        M ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ea(
          t,
          n,
          $,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const S = t.target = Ts(
          t.props,
          v
        );
        S && Ea(
          t,
          S,
          null,
          c,
          0
        );
      } else M && Ea(
        t,
        L,
        k,
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
      for (let v = 0; v < i.length; v++) {
        const y = i[v];
        a(
          y,
          t,
          n,
          b,
          !!y.dynamicChildren
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
  const u = t.target = Ts(
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
function I(e = !1) {
  na.push(zt = e ? null : []);
}
function nm() {
  na.pop(), zt = na[na.length - 1] || null;
}
let da = 1;
function pi(e) {
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
function Ce(e, t, n, r, a) {
  return wc(
    Qe(
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
  return l ? (cl(i, n), o & 128 && e.normalize(i)) : n && (i.shapeFlag |= at(n) ? 8 : 16), da > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  zt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (i.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  i.patchFlag !== 32 && zt.push(i), i;
}
const Qe = rm;
function rm(e, t = null, n = null, r = 0, a = null, o = !1) {
  if ((!e || e === tc) && (e = Ht), Ka(e)) {
    const l = Ln(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && cl(l, n), da > 0 && !o && zt && (l.shapeFlag & 6 ? zt[zt.indexOf(e)] = l : zt.push(l)), l.patchFlag |= -2, l;
  }
  if (dm(e) && (e = e.__vccOpts), t) {
    t = Pt(t);
    let { class: l, style: i } = t;
    l && !at(l) && (t.class = Ne(l)), Xe(i) && (Wu(i) && !xe(i) && (i = yt({}, i)), t.style = Dt(i));
  }
  const s = at(e) ? 1 : mp(e) ? 128 : Jp(e) ? 64 : Xe(e) ? 4 : Ae(e) ? 2 : 0;
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
  return Qe(xo, null, e, t);
}
function X(e = "", t = !1) {
  return t ? (I(), Ce(Ht, null, e)) : Qe(Ht, null, e);
}
function an(e) {
  return e == null || typeof e == "boolean" ? Qe(Ht) : xe(e) ? Qe(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? On(e) : Qe(xo, null, String(e));
}
function On(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ln(e);
}
function cl(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (xe(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), cl(e, a()), a._c && (a._d = !0));
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
        t.style = Dt([t.style, r.style]);
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
const dl = () => wt || vt;
let Qa, Ps;
{
  const e = Au(), t = (n, r) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(r), (o) => {
      a.length > 1 ? a.forEach((s) => s(o)) : a[0](o);
    };
  };
  Qa = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => wt = n
  ), Ps = t(
    "__VUE_SSR_SETTERS__",
    (n) => Mo = n
  );
}
const ba = (e) => {
  const t = wt;
  return Qa(e), e.scope.on(), () => {
    e.scope.off(), Qa(t);
  };
}, mi = () => {
  wt && wt.scope.off(), Qa(null);
};
function xc(e) {
  return e.vnode.shapeFlag & 4;
}
let Mo = !1;
function lm(e, t = !1) {
  t && Ps(t);
  const { props: n, children: r } = e.vnode, a = xc(e);
  Hp(e, n, a, t), qp(e, r);
  const o = a ? im(e, t) : void 0;
  return t && Ps(!1), o;
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
      if (s.then(mi, mi), t)
        return s.then((l) => {
          hi(e, l, t);
        }).catch((l) => {
          vo(l, e, 0);
        });
      e.asyncDep = s;
    } else
      hi(e, s, t);
  } else
    kc(e, t);
}
function hi(e, t, n) {
  Ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Xe(t) && (e.setupState = zu(t)), kc(e, n);
}
let vi;
function kc(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && vi && !r.render) {
      const a = r.template || ll(e).template;
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
        r.render = vi(a, c);
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
const ne = (e, t) => qf(e, t, Mo);
function Ss(e, t, n = Je) {
  const r = dl(), a = Qt(t), o = Un(t), s = Xf((i, c) => {
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
  return r === 2 ? Xe(t) && !xe(t) ? Ka(t) ? Qe(e, null, [t]) : Qe(e, t) : Qe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ka(n) && (n = [n]), Qe(e, t, n));
}
const fm = "3.4.21";
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const pm = "http://www.w3.org/2000/svg", mm = "http://www.w3.org/1998/Math/MathML", En = typeof document < "u" ? document : null, yi = En && /* @__PURE__ */ En.createElement("template"), hm = {
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
      yi.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const l = yi.content;
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
}, gi = (e) => e ? xe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function vm(e) {
  const t = {};
  for (const A in e)
    A in Pc || (t[A] = e[A]);
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
  } = e, v = ym(a), y = v && v[0], D = v && v[1], {
    onBeforeEnter: V,
    onEnter: R,
    onEnterCancelled: g,
    onLeave: P,
    onLeaveCancelled: $,
    onBeforeAppear: L = V,
    onAppear: k = R,
    onAppearCancelled: M = g
  } = t, O = (A, F, B) => {
    Zn(A, F ? u : l), Zn(A, F ? c : s), B && B();
  }, W = (A, F) => {
    A._isLeaving = !1, Zn(A, d), Zn(A, b), Zn(A, p), F && F();
  }, S = (A) => (F, B) => {
    const w = A ? k : R, x = () => O(F, A, B);
    Jn(w, [F, x]), bi(() => {
      Zn(F, A ? i : o), Mn(F, A ? u : l), gi(w) || wi(F, r, y, x);
    });
  };
  return yt(t, {
    onBeforeEnter(A) {
      Jn(V, [A]), Mn(A, o), Mn(A, s);
    },
    onBeforeAppear(A) {
      Jn(L, [A]), Mn(A, i), Mn(A, c);
    },
    onEnter: S(!1),
    onAppear: S(!0),
    onLeave(A, F) {
      A._isLeaving = !0;
      const B = () => W(A, F);
      Mn(A, d), wm(), Mn(A, p), bi(() => {
        A._isLeaving && (Zn(A, d), Mn(A, b), gi(P) || wi(A, r, D, B));
      }), Jn(P, [A, B]);
    },
    onEnterCancelled(A) {
      O(A, !1), Jn(g, [A]);
    },
    onAppearCancelled(A) {
      O(A, !0), Jn(M, [A]);
    },
    onLeaveCancelled(A) {
      W(A), Jn($, [A]);
    }
  });
}
function ym(e) {
  if (e == null)
    return null;
  if (Xe(e))
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
function bi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let gm = 0;
function wi(e, t, n, r) {
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
  const n = window.getComputedStyle(e), r = (v) => (n[v] || "").split(", "), a = r(`${kn}Delay`), o = r(`${kn}Duration`), s = _i(a, o), l = r(`${jr}Delay`), i = r(`${jr}Duration`), c = _i(l, i);
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
function _i(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => xi(n) + xi(e[r])));
}
function xi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function wm() {
  return document.body.offsetHeight;
}
function _m(e, t, n) {
  const r = e[fa];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Xa = Symbol("_vod"), Sc = Symbol("_vsh"), Fa = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Xa] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Hr(e, t);
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
  e.style.display = t ? e[Xa] : "none", e[Sc] = !t;
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
  Xa in e && (e[Xa] = o ? r.display : "", e[Sc] && (r.display = "none"));
}
const ki = /\s*!important$/;
function Ba(e, t, n) {
  if (xe(n))
    n.forEach((r) => Ba(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Tm(e, t);
    ki.test(n) ? e.setProperty(
      Un(r),
      n.replace(ki, ""),
      "important"
    ) : e[r] = n;
  }
}
const Mi = ["Webkit", "Moz", "ms"], zo = {};
function Tm(e, t) {
  const n = zo[t];
  if (n)
    return n;
  let r = Qt(t);
  if (r !== "filter" && r in e)
    return zo[t] = r;
  r = fo(r);
  for (let a = 0; a < Mi.length; a++) {
    const o = Mi[a] + r;
    if (o in e)
      return zo[t] = o;
  }
  return t;
}
const Ti = "http://www.w3.org/1999/xlink";
function Pm(e, t, n, r, a) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Ti, t.slice(6, t.length)) : e.setAttributeNS(Ti, t, n);
  else {
    const o = wf(t);
    n == null || o && !Du(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
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
    c === "boolean" ? n = Du(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
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
const Pi = Symbol("_vei");
function Dm(e, t, n, r, a = null) {
  const o = e[Pi] || (e[Pi] = {}), s = o[t];
  if (r && s)
    s.value = r;
  else {
    const [l, i] = Cm(t);
    if (r) {
      const c = o[t] = Rm(r, a);
      ar(e, l, c, i);
    } else s && (Am(e, l, s, i), o[t] = void 0);
  }
}
const Si = /(?:Once|Passive|Capture)$/;
function Cm(e) {
  let t;
  if (Si.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Si); )
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
const Ai = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Nm = (e, t, n, r, a, o, s, l, i) => {
  const c = a === "svg";
  t === "class" ? _m(e, r, c) : t === "style" ? Mm(e, n, r) : io(t) ? Us(t) || Dm(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Vm(e, t, r, c)) ? Sm(
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
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ai(t) && Ae(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Ai(t) && at(n) ? !1 : t in e;
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
const Ar = Symbol("_assign"), Ci = {
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
      ), e._assigning = !0, Xt(() => {
        e._assigning = !1;
      });
    }), e[Ar] = Ja(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, modifiers: { number: n } }) {
    Oi(e, t, n);
  },
  beforeUpdate(e, t, n) {
    e[Ar] = Ja(n);
  },
  updated(e, { value: t, modifiers: { number: n } }) {
    e._assigning || Oi(e, t, n);
  }
};
function Oi(e, t, n) {
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
let Ei;
function Dc() {
  return Ei || (Ei = Gp(Ym));
}
const Ri = (...e) => {
  Dc().render(...e);
}, jm = (...e) => {
  const t = Dc().createApp(...e), { mount: n } = t;
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
let Cc;
const Po = (e) => Cc = e, Oc = (
  /* istanbul ignore next */
  Symbol()
);
function As(e) {
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
function $i(e, t, n, r = Ec) {
  e.push(t);
  const a = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), r());
  };
  return !n && zs() && Ru(a), a;
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
    As(a) && As(r) && e.hasOwnProperty(n) && !ct(r) && !$n(r) ? e[n] = Ds(a, r) : e[n] = r;
  }
  return e;
}
const Gm = (
  /* istanbul ignore next */
  Symbol()
);
function Km(e) {
  return !As(e) || !e.hasOwnProperty(Gm);
}
const { assign: An } = Object;
function Qm(e) {
  return !!(ct(e) && e.effect);
}
function Xm(e, t, n, r) {
  const { state: a, actions: o, getters: s } = t, l = n.state.value[e];
  let i;
  function c() {
    l || (n.state.value[e] = a ? a() : {});
    const u = Jf(n.state.value[e]);
    return An(u, o, Object.keys(s || {}).reduce((d, p) => (d[p] = ho(ne(() => {
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
  const v = r.state.value[e];
  !o && !v && (r.state.value[e] = {}), J({});
  let y;
  function D(M) {
    let O;
    c = u = !1, typeof M == "function" ? (M(r.state.value[e]), O = {
      type: ra.patchFunction,
      storeId: e,
      events: b
    }) : (Ds(r.state.value[e], M), O = {
      type: ra.patchObject,
      payload: M,
      storeId: e,
      events: b
    });
    const W = y = Symbol();
    Xt().then(() => {
      y === W && (c = !0);
    }), u = !0, gr(d, O, r.state.value[e]);
  }
  const V = o ? function() {
    const { state: O } = n, W = O ? O() : {};
    this.$patch((S) => {
      An(S, W);
    });
  } : (
    /* istanbul ignore next */
    Ec
  );
  function R() {
    s.stop(), d = [], p = [], r._s.delete(e);
  }
  function g(M, O) {
    return function() {
      Po(r);
      const W = Array.from(arguments), S = [], A = [];
      function F(x) {
        S.push(x);
      }
      function B(x) {
        A.push(x);
      }
      gr(p, {
        args: W,
        name: M,
        store: $,
        after: F,
        onError: B
      });
      let w;
      try {
        w = O.apply(this && this.$id === e ? this : $, W);
      } catch (x) {
        throw gr(A, x), x;
      }
      return w instanceof Promise ? w.then((x) => (gr(S, x), x)).catch((x) => (gr(A, x), Promise.reject(x))) : (gr(S, w), w);
    };
  }
  const P = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: $i.bind(null, p),
    $patch: D,
    $reset: V,
    $subscribe(M, O = {}) {
      const W = $i(d, M, O.detached, () => S()), S = s.run(() => ut(() => r.state.value[e], (A) => {
        (O.flush === "sync" ? u : c) && M({
          storeId: e,
          type: ra.direct,
          events: b
        }, A);
      }, An({}, i, O)));
      return W;
    },
    $dispose: R
  }, $ = bn(P);
  r._s.set(e, $);
  const k = (r._a && r._a.runWithContext || zm)(() => r._e.run(() => (s = Eu()).run(t)));
  for (const M in k) {
    const O = k[M];
    if (ct(O) && !Qm(O) || $n(O))
      o || (v && Km(O) && (ct(O) ? O.value = v[M] : Ds(O, v[M])), r.state.value[e][M] = O);
    else if (typeof O == "function") {
      const W = g(M, O);
      k[M] = W, l.actions[M] = O;
    }
  }
  return An($, k), An(Le($), k), Object.defineProperty($, "$state", {
    get: () => r.state.value[e],
    set: (M) => {
      D((O) => {
        An(O, M);
      });
    }
  }), r._p.forEach((M) => {
    An($, s.run(() => M({
      store: $,
      app: r._a,
      pinia: r,
      options: l
    })));
  }), v && o && n.hydrate && n.hydrate($.$state, v), c = !0, u = !0, $;
}
function Jm(e, t, n) {
  let r, a;
  const o = typeof t == "function";
  r = e, a = o ? n : t;
  function s(l, i) {
    const c = jp();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (c ? ea(Oc, null) : null), l && Po(l), l = Cc, l._s.has(r) || (o ? Rc(r, t, a, l) : Xm(r, a, l)), l._s.get(r);
  }
  return s.$id = r, s;
}
var $c = typeof global == "object" && global && global.Object === Object && global, Zm = typeof self == "object" && self && self.Object === Object && self, fl = $c || Zm || Function("return this")(), eo = fl.Symbol, Nc = Object.prototype, eh = Nc.hasOwnProperty, th = Nc.toString, Ur = eo ? eo.toStringTag : void 0;
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
var sh = "[object Null]", lh = "[object Undefined]", Ni = eo ? eo.toStringTag : void 0;
function pl(e) {
  return e == null ? e === void 0 ? lh : sh : Ni && Ni in Object(e) ? nh(e) : oh(e);
}
function ml(e) {
  return e != null && typeof e == "object";
}
var Vc = Array.isArray;
function hl(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Ic(e) {
  return e;
}
var ih = "[object AsyncFunction]", uh = "[object Function]", ch = "[object GeneratorFunction]", dh = "[object Proxy]";
function Fc(e) {
  if (!hl(e))
    return !1;
  var t = pl(e);
  return t == uh || t == ch || t == ih || t == dh;
}
var Ko = fl["__core-js_shared__"], Vi = function() {
  var e = /[^.]+$/.exec(Ko && Ko.keys && Ko.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function fh(e) {
  return !!Vi && Vi in e;
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
  if (!hl(e) || fh(e))
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
var Sh = 800, Ah = 16, Dh = Date.now;
function Ch(e) {
  var t = 0, n = 0;
  return function() {
    var r = Dh(), a = Ah - (r - n);
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
} : Ic, Rh = Ch(Eh), $h = 9007199254740991, Nh = /^(?:0|[1-9]\d*)$/;
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
var Ii = Math.max;
function Bh(e, t, n) {
  return t = Ii(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, o = Ii(r.length - t, 0), s = Array(o); ++a < o; )
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
function vl(e) {
  return e != null && Hc(e.length) && !Fc(e);
}
function jh(e, t, n) {
  if (!hl(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? vl(n) && Bc(t, n.length) : r == "string" && t in n) ? Yc(n[t], e) : !1;
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
function Fi(e) {
  return ml(e) && pl(e) == qh;
}
var Wc = Object.prototype, zh = Wc.hasOwnProperty, Gh = Wc.propertyIsEnumerable, Kh = Fi(/* @__PURE__ */ function() {
  return arguments;
}()) ? Fi : function(e) {
  return ml(e) && zh.call(e, "callee") && !Gh.call(e, "callee");
};
function Qh() {
  return !1;
}
var qc = typeof exports == "object" && exports && !exports.nodeType && exports, Bi = qc && typeof module == "object" && module && !module.nodeType && module, Xh = Bi && Bi.exports === qc, Li = Xh ? fl.Buffer : void 0, Jh = Li ? Li.isBuffer : void 0, Zh = Jh || Qh, ev = "[object Arguments]", tv = "[object Array]", nv = "[object Boolean]", rv = "[object Date]", av = "[object Error]", ov = "[object Function]", sv = "[object Map]", lv = "[object Number]", iv = "[object Object]", uv = "[object RegExp]", cv = "[object Set]", dv = "[object String]", fv = "[object WeakMap]", pv = "[object ArrayBuffer]", mv = "[object DataView]", hv = "[object Float32Array]", vv = "[object Float64Array]", yv = "[object Int8Array]", gv = "[object Int16Array]", bv = "[object Int32Array]", wv = "[object Uint8Array]", _v = "[object Uint8ClampedArray]", xv = "[object Uint16Array]", kv = "[object Uint32Array]", tt = {};
tt[hv] = tt[vv] = tt[yv] = tt[gv] = tt[bv] = tt[wv] = tt[_v] = tt[xv] = tt[kv] = !0;
tt[ev] = tt[tv] = tt[pv] = tt[nv] = tt[mv] = tt[rv] = tt[av] = tt[ov] = tt[sv] = tt[lv] = tt[iv] = tt[uv] = tt[cv] = tt[dv] = tt[fv] = !1;
function Mv(e) {
  return ml(e) && Hc(e.length) && !!tt[pl(e)];
}
function Tv(e) {
  return function(t) {
    return e(t);
  };
}
var zc = typeof exports == "object" && exports && !exports.nodeType && exports, aa = zc && typeof module == "object" && module && !module.nodeType && module, Pv = aa && aa.exports === zc, Qo = Pv && $c.process, Yi = function() {
  try {
    var e = aa && aa.require && aa.require("util").types;
    return e || Qo && Qo.binding && Qo.binding("util");
  } catch {
  }
}(), ji = Yi && Yi.isTypedArray, Sv = ji ? Tv(ji) : Mv, Av = Object.prototype, Dv = Av.hasOwnProperty;
function Cv(e, t) {
  var n = Vc(e), r = !n && Kh(e), a = !n && !r && Zh(e), o = !n && !r && !a && Sv(e), s = n || r || a || o, l = s ? Wh(e.length, String) : [], i = l.length;
  for (var c in e)
    Dv.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
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
  return vl(e) ? Cv(e) : Nv(e);
}
var Iv = Object.prototype, Fv = Iv.hasOwnProperty, Bv = Hh(function(e, t) {
  if (Uc(t) || vl(t)) {
    Fh(t, Vv(t), e);
    return;
  }
  for (var n in t)
    Fv.call(t, n) && jc(e, n, t[n]);
});
const no = "Value", Cr = "ValueString", cr = "ValueFloat", Or = "ValueDate", Er = "ValueFilePath", Yn = "Mode", jn = "SubSystem", pa = "Command", Cs = [
  no,
  Cr,
  cr,
  Or,
  Er
];
class Qr {
  constructor(t) {
    Bv(this, t);
  }
  getDestinations(t) {
    const n = Vc(t) ? t : [t];
    return this.destinations.reduce((a, o) => (n.includes(o.type) && a.push(o), a), []);
  }
  getValues() {
    return this.hasValues ? this.getDestinations(Cs) : [];
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
const { toString: Lv } = Object.prototype, { getPrototypeOf: yl } = Object, So = /* @__PURE__ */ ((e) => (t) => {
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
const Hv = Ao("string"), It = Ao("function"), Qc = Ao("number"), Do = (e) => e !== null && typeof e == "object", Uv = (e) => e === !0 || e === !1, La = (e) => {
  if (So(e) !== "object")
    return !1;
  const t = yl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Wv = Zt("Date"), qv = Zt("File"), zv = Zt("Blob"), Gv = Zt("FileList"), Kv = (e) => Do(e) && It(e.pipe), Qv = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || It(e.append) && ((t = So(e)) === "formdata" || // detect form-data instance
  t === "object" && It(e.toString) && e.toString() === "[object FormData]"));
}, Xv = Zt("URLSearchParams"), [Jv, Zv, ey, ty] = ["ReadableStream", "Request", "Response", "Headers"].map(Zt), ny = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function Xc(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const sr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Jc = (e) => !ma(e) && e !== sr;
function Os() {
  const { caseless: e } = Jc(this) && this || {}, t = {}, n = (r, a) => {
    const o = e && Xc(t, a) || a;
    La(t[o]) && La(r) ? t[o] = Os(t[o], r) : La(r) ? t[o] = Os({}, r) : Br(r) ? t[o] = r.slice() : t[o] = r;
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
    e = n !== !1 && yl(e);
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
  if (!Qc(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, uy = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && yl(Uint8Array)), cy = (e, t) => {
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
), Hi = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), my = Zt("RegExp"), Zc = (e, t) => {
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
}, gy = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Xo = "abcdefghijklmnopqrstuvwxyz", Ui = "0123456789", ed = {
  DIGIT: Ui,
  ALPHA: Xo,
  ALPHA_DIGIT: Xo + Xo.toUpperCase() + Ui
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
    if (Do(r)) {
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
}, xy = Zt("AsyncFunction"), ky = (e) => e && (Do(e) || It(e)) && It(e.then) && It(e.catch), td = ((e, t) => e ? setImmediate : t ? ((n, r) => (sr.addEventListener("message", ({ source: a, data: o }) => {
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
  isFormData: Qv,
  isArrayBufferView: jv,
  isString: Hv,
  isNumber: Qc,
  isBoolean: Uv,
  isObject: Do,
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
  isURLSearchParams: Xv,
  isTypedArray: uy,
  isFileList: Gv,
  forEach: wa,
  merge: Os,
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
  hasOwnProperty: Hi,
  hasOwnProp: Hi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Zc,
  freezeMethods: hy,
  toObjectSet: vy,
  toCamelCase: py,
  noop: yy,
  toFiniteNumber: gy,
  findKey: Xc,
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
function De(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a, this.status = a.status ? a.status : null);
}
z.inherits(De, Error, {
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
const nd = De.prototype, rd = {};
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
Object.defineProperties(De, rd);
Object.defineProperty(nd, "isAxiosError", { value: !0 });
De.from = (e, t, n, r, a, o) => {
  const s = Object.create(nd);
  return z.toFlatObject(e, s, function(i) {
    return i !== Error.prototype;
  }, (l) => l !== "isAxiosError"), De.call(s, e.message, t, n, r, a), s.cause = e, s.name = e.name, o && Object.assign(s, o), s;
};
const Ty = null;
function Es(e) {
  return z.isPlainObject(e) || z.isArray(e);
}
function ad(e) {
  return z.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Wi(e, t, n) {
  return e ? e.concat(t).map(function(a, o) {
    return a = ad(a), !n && o ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function Py(e) {
  return z.isArray(e) && !e.some(Es);
}
const Sy = z.toFlatObject(z, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Co(e, t, n) {
  if (!z.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = z.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, D) {
    return !z.isUndefined(D[y]);
  });
  const r = n.metaTokens, a = n.visitor || u, o = n.dots, s = n.indexes, i = (n.Blob || typeof Blob < "u" && Blob) && z.isSpecCompliantForm(t);
  if (!z.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(v) {
    if (v === null) return "";
    if (z.isDate(v))
      return v.toISOString();
    if (!i && z.isBlob(v))
      throw new De("Blob is not supported. Use a Buffer instead.");
    return z.isArrayBuffer(v) || z.isTypedArray(v) ? i && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function u(v, y, D) {
    let V = v;
    if (v && !D && typeof v == "object") {
      if (z.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), v = JSON.stringify(v);
      else if (z.isArray(v) && Py(v) || (z.isFileList(v) || z.endsWith(y, "[]")) && (V = z.toArray(v)))
        return y = ad(y), V.forEach(function(g, P) {
          !(z.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Wi([y], P, o) : s === null ? y : y + "[]",
            c(g)
          );
        }), !1;
    }
    return Es(v) ? !0 : (t.append(Wi(D, y, o), c(v)), !1);
  }
  const d = [], p = Object.assign(Sy, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Es
  });
  function b(v, y) {
    if (!z.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(v), z.forEach(v, function(V, R) {
        (!(z.isUndefined(V) || V === null) && a.call(
          t,
          V,
          z.isString(R) ? R.trim() : R,
          y,
          p
        )) === !0 && b(V, y ? y.concat(R) : [R]);
      }), d.pop();
    }
  }
  if (!z.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function qi(e) {
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
function gl(e, t) {
  this._pairs = [], e && Co(e, this, t);
}
const od = gl.prototype;
od.append = function(t, n) {
  this._pairs.push([t, n]);
};
od.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, qi);
  } : qi;
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
  if (a ? o = a(t, n) : o = z.isURLSearchParams(t) ? t.toString() : new gl(t, n).toString(r), o) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class zi {
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
}, Dy = typeof URLSearchParams < "u" ? URLSearchParams : gl, Cy = typeof FormData < "u" ? FormData : null, Oy = typeof Blob < "u" ? Blob : null, Ey = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Dy,
    FormData: Cy,
    Blob: Oy
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, bl = typeof window < "u" && typeof document < "u", Rs = typeof navigator == "object" && navigator || void 0, Ry = bl && (!Rs || ["ReactNative", "NativeScript", "NS"].indexOf(Rs.product) < 0), $y = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ny = bl && window.location.href || "http://localhost", Vy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: bl,
  hasStandardBrowserEnv: Ry,
  hasStandardBrowserWebWorkerEnv: $y,
  navigator: Rs,
  origin: Ny
}, Symbol.toStringTag, { value: "Module" })), Et = {
  ...Vy,
  ...Ey
};
function Iy(e, t) {
  return Co(e, new Et.classes.URLSearchParams(), Object.assign({
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
        return Co(
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
          throw l.name === "SyntaxError" ? De.from(l, De.ERR_BAD_RESPONSE, this, null, this.response) : l;
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
}, Gi = Symbol("internals");
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
    const r = (this[Gi] = this[Gi] = {
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
  De.call(this, e ?? "canceled", De.ERR_CANCELED, t, n), this.name = "CanceledError";
}
z.inherits(Lr, De, {
  __CANCEL__: !0
});
function cd(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new De(
    "Request failed with status code " + n.status,
    [De.ERR_BAD_REQUEST, De.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
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
}, Ki = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Qi = (e) => (...t) => z.asap(() => e(...t)), Qy = Et.hasStandardBrowserEnv ? (
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
), Xy = Et.hasStandardBrowserEnv ? (
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
const Xi = (e) => e instanceof Rt ? { ...e } : e;
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
    headers: (c, u) => a(Xi(c), Xi(u), !0)
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
  if (Et.hasStandardBrowserEnv && (r && z.isFunction(r) && (r = r(t)), r || r !== !1 && Qy(t.url))) {
    const c = a && o && Xy.read(o);
    c && s.set(a, c);
  }
  return t;
}, eg = typeof XMLHttpRequest < "u", tg = eg && function(e) {
  return new Promise(function(n, r) {
    const a = fd(e);
    let o = a.data;
    const s = Rt.from(a.headers).normalize();
    let { responseType: l, onUploadProgress: i, onDownloadProgress: c } = a, u, d, p, b, v;
    function y() {
      b && b(), v && v(), a.cancelToken && a.cancelToken.unsubscribe(u), a.signal && a.signal.removeEventListener("abort", u);
    }
    let D = new XMLHttpRequest();
    D.open(a.method.toUpperCase(), a.url, !0), D.timeout = a.timeout;
    function V() {
      if (!D)
        return;
      const g = Rt.from(
        "getAllResponseHeaders" in D && D.getAllResponseHeaders()
      ), $ = {
        data: !l || l === "text" || l === "json" ? D.responseText : D.response,
        status: D.status,
        statusText: D.statusText,
        headers: g,
        config: e,
        request: D
      };
      cd(function(k) {
        n(k), y();
      }, function(k) {
        r(k), y();
      }, $), D = null;
    }
    "onloadend" in D ? D.onloadend = V : D.onreadystatechange = function() {
      !D || D.readyState !== 4 || D.status === 0 && !(D.responseURL && D.responseURL.indexOf("file:") === 0) || setTimeout(V);
    }, D.onabort = function() {
      D && (r(new De("Request aborted", De.ECONNABORTED, e, D)), D = null);
    }, D.onerror = function() {
      r(new De("Network Error", De.ERR_NETWORK, e, D)), D = null;
    }, D.ontimeout = function() {
      let P = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const $ = a.transitional || ld;
      a.timeoutErrorMessage && (P = a.timeoutErrorMessage), r(new De(
        P,
        $.clarifyTimeoutError ? De.ETIMEDOUT : De.ECONNABORTED,
        e,
        D
      )), D = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in D && z.forEach(s.toJSON(), function(P, $) {
      D.setRequestHeader($, P);
    }), z.isUndefined(a.withCredentials) || (D.withCredentials = !!a.withCredentials), l && l !== "json" && (D.responseType = a.responseType), c && ([p, v] = ro(c, !0), D.addEventListener("progress", p)), i && D.upload && ([d, b] = ro(i), D.upload.addEventListener("progress", d), D.upload.addEventListener("loadend", b)), (a.cancelToken || a.signal) && (u = (g) => {
      D && (r(!g || g.type ? new Lr(null, e, D) : g), D.abort(), D = null);
    }, a.cancelToken && a.cancelToken.subscribe(u), a.signal && (a.signal.aborted ? u() : a.signal.addEventListener("abort", u)));
    const R = zy(a.url);
    if (R && Et.protocols.indexOf(R) === -1) {
      r(new De("Unsupported protocol " + R + ":", De.ERR_BAD_REQUEST, e));
      return;
    }
    D.send(o || null);
  });
}, ng = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), a;
    const o = function(c) {
      if (!a) {
        a = !0, l();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof De ? u : new Lr(u instanceof Error ? u.message : u));
      }
    };
    let s = t && setTimeout(() => {
      s = null, o(new De(`timeout ${t} of ms exceeded`, De.ETIMEDOUT));
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
}, Ji = (e, t, n, r) => {
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
}), Zi = 64 * 1024, $s = pd && md(() => z.isReadableStream(new Response("").body)), ao = {
  stream: $s && ((e) => e.body)
};
Oo && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ao[t] && (ao[t] = z.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new De(`Response type '${t}' is not supported`, De.ERR_NOT_SUPPORT, r);
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
  let b = ng([a, o && o.toAbortSignal()], s), v;
  const y = b && b.unsubscribe && (() => {
    b.unsubscribe();
  });
  let D;
  try {
    if (i && lg && n !== "get" && n !== "head" && (D = await ug(u, r)) !== 0) {
      let $ = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), L;
      if (z.isFormData(r) && (L = $.headers.get("content-type")) && u.setContentType(L), $.body) {
        const [k, M] = Ki(
          D,
          ro(Qi(i))
        );
        r = Ji($.body, Zi, k, M);
      }
    }
    z.isString(d) || (d = d ? "include" : "omit");
    const V = "credentials" in Request.prototype;
    v = new Request(t, {
      ...p,
      signal: b,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: V ? d : void 0
    });
    let R = await fetch(v);
    const g = $s && (c === "stream" || c === "response");
    if ($s && (l || g && y)) {
      const $ = {};
      ["status", "statusText", "headers"].forEach((O) => {
        $[O] = R[O];
      });
      const L = z.toFiniteNumber(R.headers.get("content-length")), [k, M] = l && Ki(
        L,
        ro(Qi(l), !0)
      ) || [];
      R = new Response(
        Ji(R.body, Zi, k, () => {
          M && M(), y && y();
        }),
        $
      );
    }
    c = c || "text";
    let P = await ao[z.findKey(ao, c) || "text"](R, e);
    return !g && y && y(), await new Promise(($, L) => {
      cd($, L, {
        data: P,
        headers: Rt.from(R.headers),
        status: R.status,
        statusText: R.statusText,
        config: e,
        request: v
      });
    });
  } catch (V) {
    throw y && y(), V && V.name === "TypeError" && /fetch/i.test(V.message) ? Object.assign(
      new De("Network Error", De.ERR_NETWORK, e, v),
      {
        cause: V.cause || V
      }
    ) : De.from(V, V && V.code, e, v);
  }
}), Ns = {
  http: Ty,
  xhr: tg,
  fetch: cg
};
z.forEach(Ns, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const eu = (e) => `- ${e}`, dg = (e) => z.isFunction(e) || e === null || e === !1, hd = {
  getAdapter: (e) => {
    e = z.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let s;
      if (r = n, !dg(n) && (r = Ns[(s = String(n)).toLowerCase()], r === void 0))
        throw new De(`Unknown adapter '${s}'`);
      if (r)
        break;
      a[s || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(a).map(
        ([l, i]) => `adapter ${l} ` + (i === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? o.length > 1 ? `since :
` + o.map(eu).join(`
`) : " " + eu(o[0]) : "as no adapter specified";
      throw new De(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ns
};
function es(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Lr(null, e);
}
function tu(e) {
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
const vd = "1.7.7", wl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  wl[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const nu = {};
wl.transitional = function(t, n, r) {
  function a(o, s) {
    return "[Axios v" + vd + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return (o, s, l) => {
    if (t === !1)
      throw new De(
        a(s, " has been removed" + (n ? " in " + n : "")),
        De.ERR_DEPRECATED
      );
    return n && !nu[s] && (nu[s] = !0, console.warn(
      a(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, s, l) : !0;
  };
};
function fg(e, t, n) {
  if (typeof e != "object")
    throw new De("options must be an object", De.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const o = r[a], s = t[o];
    if (s) {
      const l = e[o], i = l === void 0 || s(l, o, e);
      if (i !== !0)
        throw new De("option " + o + " must be " + i, De.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new De("Unknown option " + o, De.ERR_BAD_OPTION);
  }
}
const Vs = {
  assertOptions: fg,
  validators: wl
}, Tn = Vs.validators;
class dr {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new zi(),
      response: new zi()
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
    r !== void 0 && Vs.assertOptions(r, {
      silentJSONParsing: Tn.transitional(Tn.boolean),
      forcedJSONParsing: Tn.transitional(Tn.boolean),
      clarifyTimeoutError: Tn.transitional(Tn.boolean)
    }, !1), a != null && (z.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : Vs.assertOptions(a, {
      encode: Tn.function,
      serialize: Tn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = o && z.merge(
      o.common,
      o[n.method]
    );
    o && z.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete o[v];
      }
    ), n.headers = Rt.concat(s, o);
    const l = [];
    let i = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (i = i && y.synchronous, l.unshift(y.fulfilled, y.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(y) {
      c.push(y.fulfilled, y.rejected);
    });
    let u, d = 0, p;
    if (!i) {
      const v = [tu.bind(this), void 0];
      for (v.unshift.apply(v, l), v.push.apply(v, c), p = v.length, u = Promise.resolve(n); d < p; )
        u = u.then(v[d++], v[d++]);
      return u;
    }
    p = l.length;
    let b = n;
    for (d = 0; d < p; ) {
      const v = l[d++], y = l[d++];
      try {
        b = v(b);
      } catch (D) {
        y.call(this, D);
        break;
      }
    }
    try {
      u = tu.call(this, b);
    } catch (v) {
      return Promise.reject(v);
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
class _l {
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
      token: new _l(function(a) {
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
const Is = {
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
Object.entries(Is).forEach(([e, t]) => {
  Is[t] = e;
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
ot.CancelToken = _l;
ot.isCancel = ud;
ot.VERSION = vd;
ot.toFormData = Co;
ot.AxiosError = De;
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
ot.HttpStatusCode = Is;
ot.default = ot;
function ru(e) {
  return ot.get(e).then((t) => t.data);
}
const gd = {
  Value: no,
  ValueString: Cr,
  ValueDoubleRange: cr,
  ValueDateRange: Or,
  ValueFilePath: Er,
  Mode: Yn,
  SubSystem: jn,
  Command: pa,
  PORISValue: no,
  PORISValueString: Cr,
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
  let n = nt(e, "id"), r = nt(e, "ident"), a = nt(e, "name"), o = nt(e, "node-type-id"), s = gd[nt(e, "type")], l = bg(e, t), i = wg(e), c = _g(e), u = xg(e), d = !!(l != null && l.find((y) => Cs.includes(y.type) && y.id > 0)), p = !!(l != null && l.find((y) => Cs.includes(y.type))), b = !!(l != null && l.find((y) => y.type == Yn)), v = !!(l != null && l.find((y) => y.type == jn));
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
    hasSubsystems: v
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
function au(e) {
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
    }), a = r || new Qr({
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
function ou(e, t) {
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
      const v = p.type;
      if (v == cr) {
        let y = nt(d, "default-float"), D = nt(d, "rangemax"), V = nt(d, "rangemin");
        p.defaultFloat = y, p.rangemax = D, p.rangemin = V;
      } else if (v == Cr) {
        let y = nt(d, "default-string");
        p.defaultString = y;
      } else if (v == Or) {
        let y = nt(d, "default-date"), D = nt(d, "date-max"), V = nt(d, "date-min");
        p.defaultDate = y, p.datemax = D, p.datemin = V;
      } else if (v == Er) {
        let y = nt(d, "default-string"), D = nt(d, "file-description"), V = nt(d, "file-extension");
        p.defaultString = y, p.fileDescription = D, p.fileExtension = V;
      }
      n.values.push(new Qr(p));
    }
  }
  const s = o.getElementsByTagName(vg);
  for (const c of s) {
    const u = Ra(c, r);
    let d = nt(c, "default-mode-id"), p = nt(c, "default-value-id");
    u.defaultModeId = d, u.defaultValueId = p, n.modes.push(new Qr(u));
  }
  const l = o.getElementsByTagName(gg);
  for (const c of l) {
    const u = Ra(c, r);
    n.commands.push(new Qr(u));
  }
  const i = o.getElementsByTagName(yg);
  for (const c of i) {
    const u = Ra(c, r);
    let d = nt(c, "default-mode-id");
    u.defaultModeId = d, n.subsystems.push(new Qr(u));
  }
  return n.rootSubsystem = n.subsystems.find((c) => !r.includes(c.id)), ts(n, n.modes), ts(n, n.params), ts(n, n.subsystems), au(n.modes), au(n.subsystems), Mg(n.modes), kg(n, n.subsystems), Tg(n), n;
}
let bd = !1;
function Pg(e) {
  bd = e;
}
function hn(...e) {
  bd && console.log(...e);
}
const xl = Jm("model", () => {
  const e = J(null), t = J([]), n = J([]), r = J([]), a = J(), o = J(!1), s = J([]), l = J({});
  function i(k) {
    o.value = !0, ru(`/models/${k}.xml`).then((O) => {
      e.value = O;
      let W = ou(this, O);
      t.value = W.values, n.value = W.modes, r.value = W.subsystems, a.value = W.rootSubsystem, s.value = [], l.value = {}, y(W.rootSubsystem);
    }).finally(() => {
      o.value = !1;
    });
  }
  function c(k) {
    o.value = !0, ru(`${k}`).then((O) => {
      e.value = O;
      let W = ou(this, O);
      t.value = W.values, n.value = W.modes, r.value = W.subsystems, a.value = W.rootSubsystem, s.value = [], l.value = {}, y(W.rootSubsystem);
    }).finally(() => {
      o.value = !1;
    });
  }
  function u(k) {
    return t.value.find((M) => M.id == k);
  }
  function d(k) {
    return n.value.find((M) => M.id == k);
  }
  function p(k) {
    return r.value.find((M) => M.id == k);
  }
  function b(k, M, O) {
    k.validModes = O;
    let W = null;
    O.length > 0 ? M != null && O.includes(M) ? W = M : k.parent == null && O.includes(k.defaultMode) ? W = k.defaultMode : W = O[0] : W = k.unknownMode || null;
    const S = k.currentMode !== W;
    return k.currentMode = W, k.candidateMode = W, s.value[`${k.id}`] = W, k.hasValues && L(k, W), k.hasSubsystems && k.subsystemsNodes.forEach((A) => {
      D(A, A.currentMode, W);
    }), S && hn(`PORIS mode changed for ${k.name}: ${(W == null ? void 0 : W.name) || "none"}`), W;
  }
  function v(k, M) {
    hn(`setValidMode_ ${k.name} ${M == null ? void 0 : M.name}, NOT using supermode`);
    let O = R(k);
    return hn(`   setValidMode validModes len ${O.length}`, O), b(k, M, O);
  }
  function y(k, M) {
    Wn();
    let O;
    try {
      O = v(k, M);
    } finally {
      Tf();
    }
    return Zl(s), Zl(l), O;
  }
  function D(k, M, O) {
    const W = new Set(k.modesNodes.map((A) => A.id));
    let S = O.modesNodes.filter((A) => W.has(A.id));
    return hn(`   setValidMode validModes  len ${S.length}`, S), b(k, M, S);
  }
  function V(k) {
    const M = s.value.reduce((O, W) => k.includes(W.id) ? W : O, null);
    return M || k[0];
  }
  function R(k) {
    if (k.parent != null && k.parent.currentMode != null) {
      hn(`parent: ${k.parent.name}`), hn(`parent mode: ${k.parent.currentMode.name}`), hn("parent.mode.submodes:", k.parent.currentMode.modesNodes);
      const M = new Set(k.modesNodes.map((O) => O.id));
      return k.parent.currentMode.modesNodes.filter((O) => M.has(O.id));
    } else return k.parent != null ? [] : k.modesNodes;
  }
  function g(k) {
    return R(k).length > 0;
  }
  function P(k, M, O) {
    l.value[`${k.id}`] = { value: M, data: O };
  }
  function $(k) {
    var M;
    for (const O of k || []) {
      const W = p(O.node_id);
      if (!W) continue;
      const S = String(O.mode_id || "").startsWith("unknown:") ? W.unknownMode : d(O.mode_id), A = W.getValidModes();
      if (S && (A.includes(S) || S === W.unknownMode && A.length === 0) && y(W, S), O.value_id != null) {
        const F = u(O.value_id), B = ((M = W.currentMode) == null ? void 0 : M.valuesNodes) || [];
        F && B.some((w) => w.id == F.id) && P(W, F, O.data);
      }
    }
  }
  function L(k, M, O = null) {
    const W = l.value[`${k.id}`] || {};
    if (!(M != null && M.hasValues))
      return P(k, null, null), { value: null, data: null };
    const S = M.valuesNodes || [];
    if (S.length === 0)
      return P(k, null, null), { value: null, data: null };
    const A = S.find((w) => {
      var x;
      return w.id === ((x = M.defaultValue) == null ? void 0 : x.id);
    }) || S[0];
    let F = S.find((w) => {
      var x;
      return w.id === ((x = O || W.value) == null ? void 0 : x.id);
    }) || A, B = W.data;
    return F.type === cr ? (typeof B != "number" || !Number.isFinite(B) || B < Number(F.rangemin) || B > Number(F.rangemax)) && (B = Number(F.defaultFloat)) : F.type === Cr || F.type === Er ? typeof B != "string" && (B = F.defaultString || "") : F.type === Or && B == null && (B = F.defaultDate), P(k, F, B), { value: F, data: B };
  }
  return {
    xmlModel: e,
    rootSubsystem: a,
    isLoading: o,
    currentModes: s,
    systemValues: l,
    loadModel: i,
    loadModelURL: c,
    getValue: u,
    getMode: d,
    getSubsystem: p,
    getCurrentMode: V,
    setValidMode: y,
    getValidObjModes: R,
    hasValidObjModes: g,
    getSystemValue: L,
    setSystemValue: P,
    applyRuntimeState: $
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
    const t = Ss(e, "modelValue"), n = e, r = J(n.modes);
    return ut(
      () => n.modes,
      (a, o) => {
        r.value = a;
      }
    ), (a, o) => Vn((I(), G("select", {
      "onUpdate:modelValue": o[0] || (o[0] = (s) => t.value = s),
      disabled: r.value.length < 2
    }, [
      (I(!0), G(_e, null, qe(r.value, (s) => (I(), G("option", {
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
  } = t, c = Me(e), u = r || n ? Gt(c, r + n * 12) : c, d = o || a ? Wt(u, o + a * 7) : u, p = l + s * 60, v = (i + p * 60) * 1e3;
  return We(e, d.getTime() + v);
}
const xd = 6048e5, Dg = 864e5, Cg = 6e4, Og = 36e5, Eg = 1e3;
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
  return Math.round((a - o) / Dg);
}
function $g(e) {
  const t = kd(e), n = We(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Rr(n);
}
function Ng(e, t) {
  const n = t * 3;
  return Gt(e, n);
}
function kl(e, t) {
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
function ns(e) {
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
  date: ns({
    formats: Yg,
    defaultWidth: "full"
  }),
  time: ns({
    formats: jg,
    defaultWidth: "full"
  }),
  dateTime: ns({
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
}, Qg = {
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
}, Xg = {
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
    values: Qg,
    defaultWidth: "wide"
  }),
  dayPeriod: qr({
    values: Xg,
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
function Ml(e) {
  const t = Me(e), n = +Rr(t) - +$g(t);
  return Math.round(n / xd) + 1;
}
function Tl(e, t) {
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
  const n = yr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((i = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : i.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = Tl(e, t), o = We(e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), mn(o, t);
}
function Pl(e, t) {
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
    const a = Tl(e, r), o = a > 0 ? a : 1 - a;
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
    const a = Pl(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : ze(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Ml(e);
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
}, Dd = (e, t) => {
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
  return o.replace("{{date}}", fu(r, t)).replace("{{time}}", Dd(a, t));
}, Fs = {
  p: Dd,
  P: b0
}, w0 = /^D+$/, _0 = /^Y+$/, x0 = ["D", "DD", "YY", "YYYY"];
function Cd(e) {
  return w0.test(e);
}
function Od(e) {
  return _0.test(e);
}
function Bs(e, t, n) {
  const r = k0(e, t, n);
  if (console.warn(r), x0.includes(e)) throw new RangeError(r);
}
function k0(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const M0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, T0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, P0 = /^'([^]*?)'?$/, S0 = /''/g, A0 = /[a-zA-Z]/;
function dn(e, t, n) {
  var u, d, p, b, v, y, D, V;
  const r = yr(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? Ad, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((b = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((y = (v = n == null ? void 0 : n.locale) == null ? void 0 : v.options) == null ? void 0 : y.weekStartsOn) ?? r.weekStartsOn ?? ((V = (D = r.locale) == null ? void 0 : D.options) == null ? void 0 : V.weekStartsOn) ?? 0, l = Me(e);
  if (!oa(l))
    throw new RangeError("Invalid time value");
  let i = t.match(T0).map((R) => {
    const g = R[0];
    if (g === "p" || g === "P") {
      const P = Fs[g];
      return P(R, a.formatLong);
    }
    return R;
  }).join("").match(M0).map((R) => {
    if (R === "''")
      return { isToken: !1, value: "'" };
    const g = R[0];
    if (g === "'")
      return { isToken: !1, value: D0(R) };
    if (uu[g])
      return { isToken: !0, value: R };
    if (g.match(A0))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + g + "`"
      );
    return { isToken: !1, value: R };
  });
  a.localize.preprocessor && (i = a.localize.preprocessor(l, i));
  const c = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: a
  };
  return i.map((R) => {
    if (!R.isToken) return R.value;
    const g = R.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Od(g) || !(n != null && n.useAdditionalDayOfYearTokens) && Cd(g)) && Bs(g, t, String(e));
    const P = uu[g[0]];
    return P(l, g, a.localize, c);
  }).join("");
}
function D0(e) {
  const t = e.match(P0);
  return t ? t[1].replace(S0, "'") : e;
}
function C0(e) {
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
    fe(this, "subPriority", 0);
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
    fe(this, "priority", N0);
    fe(this, "subPriority", -1);
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
    fe(this, "priority", 140);
    fe(this, "incompatibleTokens", ["R", "u", "t", "T"]);
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
    value: r * (a * Og + o * Cg + s * Eg),
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
function Sl(e) {
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
    fe(this, "priority", 130);
    fe(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
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
    fe(this, "priority", 130);
    fe(this, "incompatibleTokens", [
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
    const s = Tl(n, o);
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
    fe(this, "priority", 130);
    fe(this, "incompatibleTokens", [
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
    fe(this, "priority", 130);
    fe(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
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
    fe(this, "priority", 120);
    fe(this, "incompatibleTokens", [
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
    fe(this, "priority", 120);
    fe(this, "incompatibleTokens", [
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
    fe(this, "incompatibleTokens", [
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
    fe(this, "priority", 110);
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
    fe(this, "priority", 110);
    fe(this, "incompatibleTokens", [
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
  const r = Me(e), a = Pl(r, n) - t;
  return r.setDate(r.getDate() - a * 7), r;
}
class G0 extends Ue {
  constructor() {
    super(...arguments);
    fe(this, "priority", 100);
    fe(this, "incompatibleTokens", [
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
  const n = Me(e), r = Ml(n) - t;
  return n.setDate(n.getDate() - r * 7), n;
}
class Q0 extends Ue {
  constructor() {
    super(...arguments);
    fe(this, "priority", 100);
    fe(this, "incompatibleTokens", [
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
const X0 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], J0 = [
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
    fe(this, "priority", 90);
    fe(this, "subPriority", 1);
    fe(this, "incompatibleTokens", [
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
    return o ? r >= 1 && r <= J0[s] : r >= 1 && r <= X0[s];
  }
  set(n, r, a) {
    return n.setDate(a), n.setHours(0, 0, 0, 0), n;
  }
}
class eb extends Ue {
  constructor() {
    super(...arguments);
    fe(this, "priority", 90);
    fe(this, "subpriority", 1);
    fe(this, "incompatibleTokens", [
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
function Al(e, t, n) {
  var d, p, b, v;
  const r = yr(), a = (n == null ? void 0 : n.weekStartsOn) ?? ((p = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : p.weekStartsOn) ?? r.weekStartsOn ?? ((v = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : v.weekStartsOn) ?? 0, o = Me(e), s = o.getDay(), i = (t % 7 + 7) % 7, c = 7 - a, u = t < 0 || t > 6 ? t - (s + c) % 7 : (i + c) % 7 - (s + c) % 7;
  return Wt(o, u);
}
class tb extends Ue {
  constructor() {
    super(...arguments);
    fe(this, "priority", 90);
    fe(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
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
    return n = Al(n, a, o), n.setHours(0, 0, 0, 0), n;
  }
}
class nb extends Ue {
  constructor() {
    super(...arguments);
    fe(this, "priority", 90);
    fe(this, "incompatibleTokens", [
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
    return n = Al(n, a, o), n.setHours(0, 0, 0, 0), n;
  }
}
class rb extends Ue {
  constructor() {
    super(...arguments);
    fe(this, "priority", 90);
    fe(this, "incompatibleTokens", [
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
    return n = Al(n, a, o), n.setHours(0, 0, 0, 0), n;
  }
}
function ab(e, t) {
  const n = Me(e), r = R0(n), a = t - r;
  return Wt(n, a);
}
class ob extends Ue {
  constructor() {
    super(...arguments);
    fe(this, "priority", 90);
    fe(this, "incompatibleTokens", [
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
    fe(this, "priority", 80);
    fe(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
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
    return n.setHours(Sl(a), 0, 0, 0), n;
  }
}
class lb extends Ue {
  constructor() {
    super(...arguments);
    fe(this, "priority", 80);
    fe(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
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
    return n.setHours(Sl(a), 0, 0, 0), n;
  }
}
class ib extends Ue {
  constructor() {
    super(...arguments);
    fe(this, "priority", 80);
    fe(this, "incompatibleTokens", ["a", "b", "t", "T"]);
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
    return n.setHours(Sl(a), 0, 0, 0), n;
  }
}
class ub extends Ue {
  constructor() {
    super(...arguments);
    fe(this, "priority", 70);
    fe(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
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
    fe(this, "priority", 70);
    fe(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
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
    fe(this, "priority", 70);
    fe(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
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
    fe(this, "priority", 70);
    fe(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
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
    fe(this, "priority", 60);
    fe(this, "incompatibleTokens", ["t", "T"]);
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
    fe(this, "priority", 50);
    fe(this, "incompatibleTokens", ["t", "T"]);
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
    fe(this, "priority", 30);
    fe(this, "incompatibleTokens", ["t", "T"]);
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
    fe(this, "priority", 10);
    fe(this, "incompatibleTokens", ["t", "T", "x"]);
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
    fe(this, "priority", 10);
    fe(this, "incompatibleTokens", ["t", "T", "X"]);
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
    fe(this, "priority", 40);
    fe(this, "incompatibleTokens", "*");
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
    fe(this, "priority", 20);
    fe(this, "incompatibleTokens", "*");
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
  I: new Q0(),
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
function Ls(e, t, n, r) {
  var y, D, V, R;
  const a = E0(), o = a.locale ?? Ad, s = a.firstWeekContainsDate ?? ((D = (y = a.locale) == null ? void 0 : y.options) == null ? void 0 : D.firstWeekContainsDate) ?? 1, l = a.weekStartsOn ?? ((R = (V = a.locale) == null ? void 0 : V.options) == null ? void 0 : R.weekStartsOn) ?? 0;
  if (t === "")
    return e === "" ? Me(n) : We(n, NaN);
  const i = {
    firstWeekContainsDate: s,
    weekStartsOn: l,
    locale: o
  }, c = [new I0()], u = t.match(xb).map((g) => {
    const P = g[0];
    if (P in Fs) {
      const $ = Fs[P];
      return $(g, o.formatLong);
    }
    return g;
  }).join("").match(_b), d = [];
  for (let g of u) {
    Od(g) && Bs(g, t, e), Cd(g) && Bs(g, t, e);
    const P = g[0], $ = wb[P];
    if ($) {
      const { incompatibleTokens: L } = $;
      if (Array.isArray(L)) {
        const M = d.find(
          (O) => L.includes(O.token) || O.token === P
        );
        if (M)
          throw new RangeError(
            `The format string mustn't contain \`${M.fullToken}\` and \`${g}\` at the same time`
          );
      } else if ($.incompatibleTokens === "*" && d.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${g}\` and any other token at the same time`
        );
      d.push({ token: P, fullToken: g });
      const k = $.run(
        e,
        g,
        o.match,
        i
      );
      if (!k)
        return We(n, NaN);
      c.push(k.setter), e = k.rest;
    } else {
      if (P.match(Pb))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + P + "`"
        );
      if (g === "''" ? g = "'" : P === "'" && (g = Sb(g)), e.indexOf(g) === 0)
        e = e.slice(g.length);
      else
        return We(n, NaN);
    }
  }
  if (e.length > 0 && Tb.test(e))
    return We(n, NaN);
  const p = c.map((g) => g.priority).sort((g, P) => P - g).filter((g, P, $) => $.indexOf(g) === P).map(
    (g) => c.filter((P) => P.priority === g).sort((P, $) => $.subPriority - P.subPriority)
  ).map((g) => g[0]);
  let b = Me(n);
  if (isNaN(b.getTime()))
    return We(n, NaN);
  const v = {};
  for (const g of p) {
    if (!g.validate(b, i))
      return We(n, NaN);
    const P = g.set(b, v, i);
    Array.isArray(P) ? (b = P[0], Object.assign(v, P[1])) : b = P;
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
function Cl(e, t) {
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
function Db(e, t) {
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
  return kl(e, -t);
}
function Yr() {
  return I(), G(
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
  return I(), G(
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
function Ol() {
  return I(), G(
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
Ol.compatConfig = {
  MODE: 3
};
function El() {
  return I(), G(
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
El.compatConfig = {
  MODE: 3
};
function Rl() {
  return I(), G(
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
Rl.compatConfig = {
  MODE: 3
};
function $l() {
  return I(), G(
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
$l.compatConfig = {
  MODE: 3
};
function Nl() {
  return I(), G(
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
Nl.compatConfig = {
  MODE: 3
};
function mu(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function Cb(e) {
  return (t) => dn(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const Ob = (e, t, n) => {
  const r = [1, 2, 3, 4, 5, 6, 7];
  let a;
  if (e !== null)
    try {
      a = r.map(Cb(e));
    } catch {
      a = r.map(mu(t));
    }
  else
    a = r.map(mu(t));
  const o = a.slice(0, n), s = a.slice(n + 1, a.length);
  return [a[n]].concat(...s).concat(...o);
}, Vl = (e, t) => {
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
  const t = T(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Rb = (e) => ({ type: "dot", ...e ?? {} }), jd = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Il = {
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
const Ib = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), Fl = (e) => dn(e, "dd-MM-yyyy"), rs = (e) => Array.isArray(e), lo = (e, t) => t.get(Fl(e)), Fb = (e, t) => e ? t ? t instanceof Map ? !!lo(e, t) : t(Z(e)) : !1 : !0, yu = (e, t, n, r, a) => {
  const o = Ls(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
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
  return t = Id(t, 0), t = Fd(t, 0), t = Cl(t, 0), t = Dl(t, 0), t;
}, Fn = (e, t, n, r) => {
  let a = e ? Z(e) : Z();
  return (t || t === 0) && (a = Id(a, +t)), (n || n === 0) && (a = Fd(a, +n)), (r || r === 0) && (a = Cl(a, +r)), Dl(a, 0);
}, it = (e, t) => !e || !t ? !1 : va(Ft(e), Ft(t)), Be = (e, t) => !e || !t ? !1 : xr(Ft(e), Ft(t)), ft = (e, t) => !e || !t ? !1 : ha(Ft(e), Ft(t)), Eo = (e, t, n) => e != null && e[0] && e != null && e[1] ? ft(n, e[0]) && it(n, e[1]) : e != null && e[0] && t ? ft(n, e[0]) && it(n, t) || it(n, e[0]) && ft(n, t) : !1, qt = (e) => {
  const t = Ze(new Date(e), { date: 1 });
  return Ft(t);
}, as = (e, t, n) => t && (n || n === 0) ? Object.fromEntries(
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
  throw new Error(Il.prop("partial-range"));
}, $a = (e, t) => {
  if (t)
    return e();
  throw new Error(Il.prop("range"));
}, Ys = (e) => Array.isArray(e) ? oa(e[0]) && (e[1] ? oa(e[1]) : !0) : e ? oa(e) : !1, Ub = (e, t) => Ze(t ?? Z(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), os = (e, t, n, r) => {
  if (!e)
    return !0;
  if (r) {
    const a = n === "max" ? va(e, t) : ha(e, t), o = { seconds: 0, milliseconds: 0 };
    return a || xr(Ze(e, o), Ze(t, o));
  }
  return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, ss = (e, t, n) => e ? Ub(e, t) : Z(n ?? t), gu = (e, t, n, r, a) => {
  if (Array.isArray(r)) {
    const s = ss(e, r[0], t), l = ss(e, r[1], t);
    return os(r[0], s, n, !!t) && os(r[1], l, n, !!t) && a;
  }
  const o = ss(e, r, t);
  return os(r, o, n, !!t) && a;
}, ls = (e) => Ze(Z(), fr(e)), Wb = (e, t) => e instanceof Map ? Array.from(e.values()).filter((n) => $e(Z(n)) === t).map((n) => Fe(n)) : [], Qd = (e, t, n) => typeof e == "function" ? e({ month: t, year: n }) : !!e.months.find((r) => r.month === t && r.year === n), Bl = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), Gr = bn({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Xd = () => {
  const e = (n) => {
    Gr.menuFocused = n;
  }, t = (n) => {
    Gr.shiftKeyInMenu !== n && (Gr.shiftKeyInMenu = n);
  };
  return {
    control: ne(() => ({ shiftKeyInMenu: Gr.shiftKeyInMenu, menuFocused: Gr.menuFocused })),
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
}), is = J(null), Na = J(!1), us = J(!1), cs = J(!1), ds = J(!1), St = J(0), kt = J(0), zn = () => {
  const e = ne(() => Na.value ? [...et.selectionGrid, et.actionRow].filter((d) => d.length) : us.value ? [
    ...et.timePicker[0],
    ...et.timePicker[1],
    ds.value ? [] : [is.value],
    et.actionRow
  ].filter((d) => d.length) : cs.value ? [...et.monthPicker, et.actionRow] : [et.monthYear, ...et.calendar, et.time, et.actionRow].filter((d) => d.length)), t = (d) => {
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
      is.value = d;
    },
    setSelectionGrid: (d) => {
      Na.value = d, u(), d || (et.selectionGrid = []);
    },
    setTimePicker: (d, p = !1) => {
      us.value = d, ds.value = p, u(), d || (et.timePicker[0] = [], et.timePicker[1] = []);
    },
    setTimePickerElements: (d, p = 0) => {
      et.timePicker[p] = d;
    },
    arrowRight: a,
    arrowLeft: o,
    arrowUp: s,
    arrowDown: l,
    clearArrowNav: () => {
      et.monthYear = [], et.calendar = [], et.time = [], et.actionRow = [], et.selectionGrid = [], et.timePicker[0] = [], et.timePicker[1] = [], Na.value = !1, us.value = !1, ds.value = !1, cs.value = !1, u(), is.value = null;
    },
    setMonthPicker: (d) => {
      cs.value = d, u();
    },
    refSets: et
    // exposed for testing
  };
}, Hn = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), Jd = (e, t) => js(e, t) || Z(), qb = (e, t) => t.dateInTz ? Hn(new Date(e), t.dateInTz) : Z(e), js = (e, t) => {
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
}, Kb = (e, t, n) => e || (typeof n == "string" ? n : t), Qb = (e) => typeof e == "boolean" ? e ? bu({}) : !1 : bu(e), Xb = (e) => {
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
} : { timezone: void 0, exactMatch: !1, emitTimezone: t }, fs = (e, t) => new Map(
  e.map((n) => {
    const r = Jd(n, t);
    return [Fl(r), r];
  })
), sw = (e, t) => e.length ? new Map(
  e.map((n) => {
    const r = Jd(n.date, t);
    return [Fl(r), n];
  })
) : null, lw = (e, t, n, r, a, o, s) => ({
  minDate: js(e, s),
  maxDate: js(t, s),
  disabledDates: rs(n) ? fs(n, s) : n,
  allowedDates: rs(r) ? fs(r, s) : null,
  highlight: typeof a == "object" && rs(a == null ? void 0 : a.dates) ? fs(a.dates, s) : a,
  markers: sw(o, s)
}), st = (e) => {
  const t = () => {
    const P = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${P}` : `hh:mm${P} aa`;
  }, n = () => {
    var P;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((P = D.value) == null ? void 0 : P.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, r = (P) => zd(P, e.enableSeconds), a = () => g.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [r(e.startTime[0]), r(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? r(e.startTime) : null, o = ne(() => Gb(e.multiCalendars)), s = ne(() => a()), l = ne(() => zb(e.ariaLabels)), i = ne(() => Jb(e.filters)), c = ne(() => Qb(e.transitions)), u = ne(() => Zb(e.actionRow)), d = ne(
    () => Kb(e.previewFormat, e.format, n())
  ), p = ne(() => Xb(e.textInput)), b = ne(() => ew(e.inline)), v = ne(() => tw(e.config)), y = ne(() => nw(e.highlight)), D = ne(() => rw(e.weekNumbers)), V = ne(() => ow(e.timezone, e.emitTimezone)), R = ne(
    () => lw(
      e.minDate,
      e.maxDate,
      e.disabledDates,
      e.allowedDates,
      y.value,
      e.markers,
      V.value
    )
  ), g = ne(
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
    defaultedConfig: v,
    defaultedHighlight: y,
    defaultedWeekNumbers: D,
    defaultedRange: g,
    propDates: R,
    defaultedTz: V,
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
    B();
  });
  const u = (m, f, N = !1) => Kd(
    m,
    t.format,
    t.formatLocale,
    a.value.rangeSeparator,
    t.modelAuto,
    f ?? l(),
    N
  ), d = (m) => m ? t.modelType ? x(m) : {
    hours: Kt(m),
    minutes: fn(m),
    seconds: t.enableSeconds ? $r(m) : 0
  } : null, p = (m) => t.modelType ? x(m) : { month: Fe(m), year: $e(m) }, b = (m) => Array.isArray(m) ? t.multiDates ? m.map((f) => v(f, un(Z(), f))) : $a(
    () => [
      un(Z(), m[0]),
      m[1] ? un(Z(), m[1]) : wr(o.value.partialRange)
    ],
    o.value.enabled
  ) : un(Z(), +m), v = (m, f) => (typeof m == "string" || typeof m == "number") && t.modelType ? w(m) : f, y = (m) => Array.isArray(m) ? [
    v(
      m[0],
      Fn(null, +m[0].hours, +m[0].minutes, m[0].seconds)
    ),
    v(
      m[1],
      Fn(null, +m[1].hours, +m[1].minutes, m[1].seconds)
    )
  ] : v(m, Fn(null, m.hours, m.minutes, m.seconds)), D = (m) => {
    const f = Ze(Z(), { date: 1 });
    return Array.isArray(m) ? t.multiDates ? m.map((N) => v(N, yn(f, +N.month, +N.year))) : $a(
      () => [
        v(m[0], yn(f, +m[0].month, +m[0].year)),
        v(
          m[1],
          m[1] ? yn(f, +m[1].month, +m[1].year) : wr(o.value.partialRange)
        )
      ],
      o.value.enabled
    ) : v(m, yn(f, +m.month, +m.year));
  }, V = (m) => {
    if (Array.isArray(m))
      return m.map((f) => w(f));
    throw new Error(Il.dateArr("multi-dates"));
  }, R = (m) => {
    if (Array.isArray(m) && o.value.enabled) {
      const f = m[0], N = m[1];
      return [
        Z(Array.isArray(f) ? f[0] : null),
        Z(Array.isArray(N) ? N[0] : null)
      ];
    }
    return Z(m[0]);
  }, g = (m) => t.modelAuto ? Array.isArray(m) ? [w(m[0]), w(m[1])] : t.autoApply ? [w(m)] : [w(m), null] : Array.isArray(m) ? $a(
    () => m[1] ? [
      w(m[0]),
      m[1] ? w(m[1]) : wr(o.value.partialRange)
    ] : [w(m[0])],
    o.value.enabled
  ) : w(m), P = () => {
    Array.isArray(r.value) && o.value.enabled && r.value.length === 1 && r.value.push(wr(o.value.partialRange));
  }, $ = () => {
    const m = r.value;
    return [
      x(m[0]),
      m[1] ? x(m[1]) : wr(o.value.partialRange)
    ];
  }, L = () => r.value[1] ? $() : x(bt(r.value[0])), k = () => (r.value || []).map((m) => x(m)), M = () => (P(), t.modelAuto ? L() : t.multiDates ? k() : Array.isArray(r.value) ? $a(() => $(), o.value.enabled) : x(bt(r.value))), O = (m) => !m || Array.isArray(m) && !m.length ? null : t.timePicker ? y(bt(m)) : t.monthPicker ? D(bt(m)) : t.yearPicker ? b(bt(m)) : t.multiDates ? V(bt(m)) : t.weekPicker ? R(bt(m)) : g(bt(m)), W = (m) => {
    const f = O(m);
    Ys(bt(f)) ? (r.value = bt(f), B()) : (r.value = null, i.value = "");
  }, S = () => {
    const m = (f) => dn(f, a.value.format);
    return `${m(r.value[0])} ${a.value.rangeSeparator} ${r.value[1] ? m(r.value[1]) : ""}`;
  }, A = () => n.value && r.value ? Array.isArray(r.value) ? S() : dn(r.value, a.value.format) : u(r.value), F = () => r.value ? t.multiDates ? r.value.map((m) => u(m)).join("; ") : a.value.enabled && typeof a.value.format == "string" ? A() : u(r.value) : "", B = () => {
    !t.format || typeof t.format == "string" || a.value.enabled && typeof a.value.format == "string" ? i.value = F() : i.value = t.format(r.value);
  }, w = (m) => {
    if (t.utc) {
      const f = new Date(m);
      return t.utc === "preserve" ? new Date(f.getTime() + f.getTimezoneOffset() * 6e4) : f;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? new Date(m) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Ls(m, l(), /* @__PURE__ */ new Date()) : Ls(m, t.modelType, /* @__PURE__ */ new Date()) : new Date(m);
  }, x = (m) => m ? t.utc ? Lb(m, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +m : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? u(m) : u(m, t.modelType, !0) : m : "", q = (m, f = !1) => {
    if (e("update:model-value", m), s.value.emitTimezone && f) {
      const N = Array.isArray(m) ? m.map((Q) => Hn(bt(Q), s.value.emitTimezone)) : Hn(bt(m), s.value.emitTimezone);
      e("update:model-timezone-value", N);
    }
  }, ae = (m) => Array.isArray(r.value) ? t.multiDates ? r.value.map((f) => m(f)) : [
    m(r.value[0]),
    r.value[1] ? m(r.value[1]) : wr(o.value.partialRange)
  ] : m(bt(r.value)), pe = () => {
    if (Array.isArray(r.value)) {
      const m = vn(r.value[0], t.weekStart), f = r.value[1] ? vn(r.value[1], t.weekStart) : [];
      return [m.map((N) => Z(N)), f.map((N) => Z(N))];
    }
    return vn(r.value, t.weekStart).map((m) => Z(m));
  }, ee = (m) => q(bt(ae(m)));
  return {
    inputValue: i,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? o.value.enabled ? o.value.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: W,
    formatInputValue: B,
    emitModelValue: () => (B(), t.monthPicker ? ee(p) : t.timePicker ? ee(d) : t.yearPicker ? ee($e) : t.weekPicker ? e("update:model-value", pe()) : q(M(), !0))
  };
}, uw = (e, t) => {
  const { defaultedFilters: n, propDates: r } = st(e), { validateMonthYearInRange: a } = Gn(e), o = (u, d) => {
    let p = u;
    return n.value.months.includes(Fe(p)) ? (p = d ? Gt(u, 1) : Nr(u, 1), o(p, d)) : p;
  }, s = (u, d) => {
    let p = u;
    return n.value.years.includes($e(p)) ? (p = d ? kl(u, 1) : Bd(u, 1), s(p, d)) : p;
  }, l = (u, d = !1) => {
    const p = Ze(Z(), { month: e.month, year: e.year });
    let b = u ? Gt(p, 1) : Nr(p, 1);
    e.disableYearSelect && (b = un(b, e.year));
    let v = Fe(b), y = $e(b);
    n.value.months.includes(v) && (b = o(b, u), v = Fe(b), y = $e(b)), n.value.years.includes(y) && (b = s(b, u), y = $e(b)), a(v, y, u, e.preventMinMaxNavigation) && i(v, y, d);
  }, i = (u, d, p) => {
    t("update-month-year", { month: u, year: d, fromNav: p });
  }, c = ne(() => (u) => Gd(
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
      const x = w.getBoundingClientRect();
      return {
        left: x.left + window.scrollX,
        top: x.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, v = (w, x) => {
    u.value.left = `${w + x - i.value.width}px`;
  }, y = (w) => {
    u.value.left = `${w}px`;
  }, D = (w, x) => {
    s.position === _r.left && y(w), s.position === _r.right && v(w, x), s.position === _r.center && (u.value.left = `${w + x / 2 - i.value.width / 2}px`);
  }, V = (w) => {
    const { width: x, height: q } = w.getBoundingClientRect(), { top: ae, left: pe } = s.altPosition ? s.altPosition(w) : b(w);
    return { top: +ae, left: +pe, width: x, height: q };
  }, R = () => {
    u.value.left = "50%", u.value.top = "50%", u.value.transform = "translate(-50%, -50%)", u.value.position = "fixed", delete u.value.opacity;
  }, g = () => {
    const w = gt(n), { top: x, left: q, transform: ae } = s.altPosition(w);
    u.value = { top: `${x}px`, left: `${q}px`, transform: ae ?? "" };
  }, P = (w = !0) => {
    var x;
    if (!a.value.enabled) {
      if (p.value)
        return R();
      if (s.altPosition !== null)
        return g();
      if (w) {
        const q = s.teleport ? (x = t.value) == null ? void 0 : x.$el : e.value;
        q && (i.value = q.getBoundingClientRect()), o("recalculate-position");
      }
      return S();
    }
  }, $ = ({ inputEl: w, left: x, width: q }) => {
    window.screen.width > 768 && !c.value && D(x, q), M(w);
  }, L = (w) => {
    const { top: x, left: q, height: ae, width: pe } = V(w);
    u.value.top = `${ae + x + +s.offset}px`, d.value = !1, c.value || (u.value.left = `${q + pe / 2 - i.value.width / 2}px`), $({ inputEl: w, left: q, width: pe });
  }, k = (w) => {
    const { top: x, left: q, width: ae } = V(w);
    u.value.top = `${x - +s.offset - i.value.height}px`, d.value = !0, $({ inputEl: w, left: q, width: ae });
  }, M = (w) => {
    if (s.autoPosition) {
      const { left: x, width: q } = V(w), { left: ae, right: pe } = i.value;
      if (!c.value) {
        if (Math.abs(ae) !== Math.abs(pe)) {
          if (ae <= 0)
            return c.value = !0, y(x);
          if (pe >= document.documentElement.clientWidth)
            return c.value = !0, v(x, q);
        }
        return D(x, q);
      }
    }
  }, O = () => {
    const w = gt(n);
    if (w) {
      const { height: x } = i.value, { top: q, height: ae } = w.getBoundingClientRect(), pe = window.innerHeight - q - ae, ee = q;
      return x <= pe ? tr.bottom : x > pe && x <= ee ? tr.top : pe >= ee ? tr.bottom : tr.top;
    }
    return tr.bottom;
  }, W = (w) => O() === tr.bottom ? L(w) : k(w), S = () => {
    const w = gt(n);
    if (w)
      return s.autoPosition ? W(w) : L(w);
  }, A = function(w) {
    if (w) {
      const x = w.scrollHeight > w.clientHeight, q = window.getComputedStyle(w).overflowY.indexOf("hidden") !== -1;
      return x && !q;
    }
    return !0;
  }, F = function(w) {
    return !w || w === document.body || w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : A(w) ? w : F(w.parentNode);
  }, B = (w) => {
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
    shadowRender: (w, x) => {
      var q, ae, pe;
      const ee = document.createElement("div"), m = (q = gt(n)) == null ? void 0 : q.getBoundingClientRect();
      ee.setAttribute("id", "dp--temp-container");
      const f = (ae = r.value) != null && ae.clientWidth ? r.value : document.body;
      f.append(ee);
      const N = B(m), Q = Tc(
        w,
        {
          ...x,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...N }
        },
        Object.fromEntries(
          Object.keys(l).filter((ce) => ["right-sidebar", "left-sidebar"].includes(ce)).map((ce) => [ce, l[ce]])
        )
      );
      Ri(Q, ee), i.value = (pe = Q.el) == null ? void 0 : pe.getBoundingClientRect(), Ri(null, ee), f.removeChild(ee);
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
  const t = ne(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), n = ne(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: n };
}, ka = (e, t) => {
  const { defaultedRange: n, defaultedTz: r } = st(e), a = Z(Hn(Z(), r.value.timezone)), o = J([{ month: Fe(a), year: $e(a) }]), s = bn({
    hours: n.value.enabled ? [Kt(a), Kt(a)] : Kt(a),
    minutes: n.value.enabled ? [fn(a), fn(a)] : fn(a),
    seconds: n.value.enabled ? [0, 0] : 0
  }), l = ne({
    get: () => e.internalModelValue,
    set: (u) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", u);
    }
  }), i = ne(
    () => (u) => o.value[u] ? o.value[u].month : 0
  ), c = ne(
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
  }, p = (f) => Array.isArray(e.value) && s.value.enabled && e.value[0] && i.value ? f ? ft(i.value, e.value[0]) : it(i.value, e.value[0]) : !0, b = (f, N) => {
    const Q = () => e.value ? N ? e.value[0] || null : e.value[1] : null, ce = e.value && Array.isArray(e.value) ? Q() : null;
    return Be(Z(f.value), ce);
  }, v = (f) => {
    const N = Array.isArray(e.value) ? e.value[0] : null;
    return f ? !it(i.value ?? null, N) : !0;
  }, y = (f, N = !0) => (s.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !f.current ? !1 : Be(Z(f.value), e.value[N ? 0 : 1]) : s.value.enabled ? b(f, N) && v(N) || Be(f.value, Array.isArray(e.value) ? e.value[0] : null) && p(N) : !1, D = (f, N, Q) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? f ? !1 : Q ? ft(e.value[0], N.value) : it(e.value[0], N.value) : !1, V = (f) => !e.value || t.hideOffsetDates && !f.current ? !1 : s.value.enabled ? t.modelAuto && Array.isArray(e.value) ? Be(f.value, e.value[0] ? e.value[0] : c.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((N) => Be(N, f.value)) : Be(f.value, e.value ? e.value : c.value), R = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const N = Wt(i.value, +s.value.autoRange), Q = vn(Z(i.value), t.weekStart);
        return t.weekPicker ? Be(Q[1], Z(f.value)) : Be(N, Z(f.value));
      }
      return !1;
    }
    return !1;
  }, g = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (i.value) {
        const N = Wt(i.value, +s.value.autoRange);
        if (t.hideOffsetDates && !f.current)
          return !1;
        const Q = vn(Z(i.value), t.weekStart);
        return t.weekPicker ? ft(f.value, Q[0]) && it(f.value, Q[1]) : ft(f.value, i.value) && it(f.value, N);
      }
      return !1;
    }
    return !1;
  }, P = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const N = vn(Z(i.value), t.weekStart);
        return t.weekPicker ? Be(N[0], f.value) : Be(i.value, f.value);
      }
      return !1;
    }
    return !1;
  }, $ = (f) => Eo(e.value, i.value, f.value), L = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, k = () => t.modelAuto ? jd(t.internalModelValue) : !0, M = (f) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const N = s.value.enabled ? !y(f) && !y(f, !1) : !0;
    return !l(f.value) && !V(f) && !(!f.current && t.hideOffsetDates) && N;
  }, O = (f) => s.value.enabled ? t.modelAuto ? L() && V(f) : !1 : V(f), W = (f) => r.value ? Fb(f.value, o.value.highlight) : !1, S = (f) => {
    const N = l(f.value);
    return N && (typeof r.value == "function" ? !r.value(f.value, N) : !r.value.options.highlightDisabled);
  }, A = (f) => {
    var N;
    return typeof r.value == "function" ? r.value(f.value) : (N = r.value.weekdays) == null ? void 0 : N.includes(f.value.getDay());
  }, F = (f) => (s.value.enabled || t.weekPicker) && (!(n.value.count > 0) || f.current) && k() && !(!f.current && t.hideOffsetDates) && !V(f) ? $(f) : !1, B = (f) => {
    const { isRangeStart: N, isRangeEnd: Q } = ae(f), ce = s.value.enabled ? N || Q : !1;
    return {
      dp__cell_offset: !f.current,
      dp__pointer: !t.disabled && !(!f.current && t.hideOffsetDates) && !l(f.value),
      dp__cell_disabled: l(f.value),
      dp__cell_highlight: !S(f) && (W(f) || A(f)) && !O(f) && !ce && !P(f) && !(F(f) && t.weekPicker) && !Q,
      dp__cell_highlight_active: !S(f) && (W(f) || A(f)) && O(f),
      dp__today: !t.noToday && Be(f.value, c.value) && f.current,
      "dp--past": it(f.value, c.value),
      "dp--future": ft(f.value, c.value)
    };
  }, w = (f) => ({
    dp__active_date: O(f),
    dp__date_hover: M(f)
  }), x = (f) => {
    if (e.value && !Array.isArray(e.value)) {
      const N = vn(e.value, t.weekStart);
      return {
        ...ee(f),
        dp__range_start: Be(N[0], f.value),
        dp__range_end: Be(N[1], f.value),
        dp__range_between_week: ft(f.value, N[0]) && it(f.value, N[1])
      };
    }
    return {
      ...ee(f)
    };
  }, q = (f) => {
    if (e.value && Array.isArray(e.value)) {
      const N = vn(e.value[0], t.weekStart), Q = e.value[1] ? vn(e.value[1], t.weekStart) : [];
      return {
        ...ee(f),
        dp__range_start: Be(N[0], f.value) || Be(Q[0], f.value),
        dp__range_end: Be(N[1], f.value) || Be(Q[1], f.value),
        dp__range_between_week: ft(f.value, N[0]) && it(f.value, N[1]) || ft(f.value, Q[0]) && it(f.value, Q[1]),
        dp__range_between: ft(f.value, N[1]) && it(f.value, Q[0])
      };
    }
    return {
      ...ee(f)
    };
  }, ae = (f) => {
    const N = n.value.count > 0 ? f.current && y(f) && k() : y(f) && k(), Q = n.value.count > 0 ? f.current && y(f, !1) && k() : y(f, !1) && k();
    return { isRangeStart: N, isRangeEnd: Q };
  }, pe = (f) => {
    const { isRangeStart: N, isRangeEnd: Q } = ae(f);
    return {
      dp__range_start: N,
      dp__range_end: Q,
      dp__range_between: F(f),
      dp__date_hover_start: D(M(f), f, !0),
      dp__date_hover_end: D(M(f), f, !1)
    };
  }, ee = (f) => ({
    ...pe(f),
    dp__cell_auto_range: g(f),
    dp__cell_auto_range_start: P(f),
    dp__cell_auto_range_end: R(f)
  }), m = (f) => s.value.enabled ? s.value.autoRange ? ee(f) : t.modelAuto ? { ...w(f), ...pe(f) } : t.weekPicker ? q(f) : pe(f) : t.weekPicker ? x(f) : w(f);
  return {
    setHoverDate: u,
    clearHoverDate: d,
    getDayClassData: (f) => t.hideOffsetDates && !f.current ? {} : {
      ...B(f),
      ...m(f),
      [t.dayClass ? t.dayClass(f.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    }
  };
}, Gn = (e) => {
  const { defaultedFilters: t, defaultedRange: n, propDates: r } = st(e), a = (S) => r.value.disabledDates ? typeof r.value.disabledDates == "function" ? r.value.disabledDates(Z(S)) : !!lo(S, r.value.disabledDates) : !1, o = (S) => {
    const A = r.value.maxDate ? ft(S, r.value.maxDate) : !1, F = r.value.minDate ? it(S, r.value.minDate) : !1, B = a(S), w = t.value.months.map((ee) => +ee).includes(Fe(S)), x = e.disabledWeekDays.length ? e.disabledWeekDays.some((ee) => +ee === C0(S)) : !1, q = u(S), ae = $e(S), pe = ae < +e.yearRange[0] || ae > +e.yearRange[1];
    return !(A || F || B || w || pe || x || q);
  }, s = (S, A) => it(...Rn(r.value.minDate, S, A)) || Be(...Rn(r.value.minDate, S, A)), l = (S, A) => ft(...Rn(r.value.maxDate, S, A)) || Be(...Rn(r.value.maxDate, S, A)), i = (S, A, F) => {
    let B = !1;
    return r.value.maxDate && F && l(S, A) && (B = !0), r.value.minDate && !F && s(S, A) && (B = !0), B;
  }, c = (S, A, F, B) => {
    let w = !1;
    return B ? r.value.minDate && r.value.maxDate ? w = i(S, A, F) : (r.value.minDate && s(S, A) || r.value.maxDate && l(S, A)) && (w = !0) : w = !0, w;
  }, u = (S) => Array.isArray(r.value.allowedDates) && !r.value.allowedDates.length ? !0 : r.value.allowedDates ? !lo(S, r.value.allowedDates) : !1, d = (S) => !o(S), p = (S) => n.value.noDisabledRange ? !Pd({ start: S[0], end: S[1] }).some((A) => d(A)) : !0, b = (S) => {
    if (S) {
      const A = $e(S);
      return A >= +e.yearRange[0] && A <= e.yearRange[1];
    }
    return !0;
  }, v = (S, A) => !!(Array.isArray(S) && S[A] && (n.value.maxRange || n.value.minRange) && b(S[A])), y = (S, A, F = 0) => {
    if (v(A, F) && b(S)) {
      const B = Md(S, A[F]), w = qd(A[F], S), x = w.length === 1 ? 0 : w.filter((ae) => d(ae)).length, q = Math.abs(B) - (n.value.minMaxRawRange ? 0 : x);
      if (n.value.minRange && n.value.maxRange)
        return q >= +n.value.minRange && q <= +n.value.maxRange;
      if (n.value.minRange)
        return q >= +n.value.minRange;
      if (n.value.maxRange)
        return q <= +n.value.maxRange;
    }
    return !0;
  }, D = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, V = (S) => Array.isArray(S) ? [S[0] ? ls(S[0]) : null, S[1] ? ls(S[1]) : null] : ls(S), R = (S, A, F) => S.find(
    (B) => +B.hours === Kt(A) && B.minutes === "*" ? !0 : +B.minutes === fn(A) && +B.hours === Kt(A)
  ) && F, g = (S, A, F) => {
    const [B, w] = S, [x, q] = A;
    return !R(B, x, F) && !R(w, q, F) && F;
  }, P = (S, A) => {
    const F = Array.isArray(A) ? A : [A];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? g(e.disabledTimes, F, S) : !F.some((B) => R(e.disabledTimes, B, S)) : S;
  }, $ = (S, A) => {
    const F = Array.isArray(A) ? [fr(A[0]), A[1] ? fr(A[1]) : void 0] : fr(A), B = !e.disabledTimes(F);
    return S && B;
  }, L = (S, A) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? P(A, S) : $(A, S) : A, k = (S) => {
    let A = !0;
    if (!S || D())
      return !0;
    const F = !r.value.minDate && !r.value.maxDate ? V(S) : S;
    return (e.maxTime || r.value.maxDate) && (A = gu(
      e.maxTime,
      r.value.maxDate,
      "max",
      bt(F),
      A
    )), (e.minTime || r.value.minDate) && (A = gu(
      e.minTime,
      r.value.minDate,
      "min",
      bt(F),
      A
    )), L(S, A);
  }, M = (S) => {
    if (!e.monthPicker)
      return !0;
    let A = !0;
    const F = Z(qt(S));
    if (r.value.minDate && r.value.maxDate) {
      const B = Z(qt(r.value.minDate)), w = Z(qt(r.value.maxDate));
      return ft(F, B) && it(F, w) || Be(F, B) || Be(F, w);
    }
    if (r.value.minDate) {
      const B = Z(qt(r.value.minDate));
      A = ft(F, B) || Be(F, B);
    }
    if (r.value.maxDate) {
      const B = Z(qt(r.value.maxDate));
      A = it(F, B) || Be(F, B);
    }
    return A;
  }, O = ne(() => (S) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : k(S)), W = ne(() => (S) => e.monthPicker ? Array.isArray(S) && (n.value.enabled || e.multiDates) ? !S.filter((A) => !M(A)).length : M(S) : !0);
  return {
    isDisabled: d,
    validateDate: o,
    validateMonthYearInRange: c,
    isDateRangeAllowed: p,
    checkMinMaxRange: y,
    isValidTime: k,
    isTimeValid: O,
    isMonthValid: W
  };
}, Ro = () => {
  const e = ne(() => (r, a) => r == null ? void 0 : r.includes(a)), t = ne(() => (r, a) => r.count ? r.solo ? !0 : a === 0 : !0), n = ne(() => (r, a) => r.count ? r.solo ? !0 : a === r.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: n };
}, mw = (e, t, n) => {
  const r = J(0), a = bn({
    [pr.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [pr.calendar]: !1,
    [pr.header]: !1
  }), o = ne(() => e.monthPicker), s = (d) => {
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
    var v, y;
    e.flow[r.value] === d && n.value && ((y = (v = n.value)[p]) == null || y.call(v, ...b));
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
    } = st(a), { checkMinMaxRange: p } = Gn(a), b = J(), v = J(null), y = J(!1), D = J(!1), V = ne(
      () => ({
        dp__pointer: !a.disabled && !a.readonly && !o.value.enabled,
        dp__disabled: a.disabled,
        dp__input_readonly: !o.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !a.hideInputIcon,
        dp__input_valid: !!a.state,
        dp__input_invalid: a.state === !1,
        dp__input_focus: y.value || a.isMenuOpen,
        dp__input_reg: !o.value.enabled,
        [a.inputClassName]: !!a.inputClassName
      })
    ), R = () => {
      r("set-input-date", null), a.autoApply && (r("set-empty-date"), b.value = null);
    }, g = (w) => {
      const x = d();
      return Bb(
        w,
        o.value.format ?? u(),
        x ?? zd({}, a.enableSeconds),
        a.inputValue,
        D.value
      );
    }, P = (w) => {
      const { rangeSeparator: x } = o.value, [q, ae] = w.split(`${x}`);
      if (q) {
        const pe = g(q.trim()), ee = ae ? g(ae.trim()) : null, m = pe && ee ? [pe, ee] : [pe];
        p(ee, m, 0) && (b.value = pe ? m : null);
      }
    }, $ = () => {
      D.value = !0;
    }, L = (w) => {
      if (c.value.enabled)
        P(w);
      else if (a.multiDates) {
        const x = w.split(";");
        b.value = x.map((q) => g(q.trim())).filter((q) => q);
      } else
        b.value = g(w);
    }, k = (w) => {
      var x;
      const q = typeof w == "string" ? w : (x = w.target) == null ? void 0 : x.value;
      q !== "" ? (o.value.openMenu && !a.isMenuOpen && r("open"), L(q), r("set-input-date", b.value)) : R(), D.value = !1, r("update:input-value", q);
    }, M = (w) => {
      o.value.enabled ? (L(w.target.value), o.value.enterSubmit && Ys(b.value) && a.inputValue !== "" ? (r("set-input-date", b.value, !0), b.value = null) : o.value.enterSubmit && a.inputValue === "" && (b.value = null, r("clear"))) : S(w);
    }, O = (w) => {
      o.value.enabled && o.value.tabSubmit && L(w.target.value), o.value.tabSubmit && Ys(b.value) && a.inputValue !== "" ? (r("set-input-date", b.value, !0, !0), b.value = null) : o.value.tabSubmit && a.inputValue === "" && (b.value = null, r("clear", !0));
    }, W = () => {
      var w;
      y.value = !0, r("focus"), o.value.enabled && o.value.selectOnFocus && ((w = v.value) == null || w.select());
    }, S = (w) => {
      w.preventDefault(), In(w, i.value, !0), o.value.enabled && o.value.openMenu && !l.value.input && !a.isMenuOpen ? r("open") : o.value.enabled || r("toggle");
    }, A = () => {
      r("real-blur"), y.value = !1, (!a.isMenuOpen || l.value.enabled && l.value.input) && r("blur"), a.autoApply && o.value.enabled && b.value && !a.isMenuOpen && (r("set-input-date", b.value), r("select-date"), b.value = null);
    }, F = (w) => {
      In(w, i.value, !0), r("clear");
    }, B = (w) => {
      if (!o.value.enabled) {
        if (w.code === "Tab")
          return;
        w.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        var w;
        (w = v.value) == null || w.focus({ preventScroll: !0 });
      },
      setParsedDate: (w) => {
        b.value = w;
      }
    }), (w, x) => {
      var q;
      return I(), G("div", { onClick: S }, [
        w.$slots.trigger && !w.$slots["dp-input"] && !T(l).enabled ? ge(w.$slots, "trigger", { key: 0 }) : X("", !0),
        !w.$slots.trigger && (!T(l).enabled || T(l).input) ? (I(), G("div", hw, [
          w.$slots["dp-input"] && !w.$slots.trigger && (!T(l).enabled || T(l).enabled && T(l).input) ? ge(w.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: k,
            onEnter: M,
            onTab: O,
            onClear: F,
            onBlur: A,
            onKeypress: B,
            onPaste: $,
            openMenu: () => w.$emit("open"),
            closeMenu: () => w.$emit("close"),
            toggleMenu: () => w.$emit("toggle")
          }) : X("", !0),
          w.$slots["dp-input"] ? X("", !0) : (I(), G("input", {
            key: 1,
            id: w.uid ? `dp-input-${w.uid}` : void 0,
            ref_key: "inputRef",
            ref: v,
            name: w.name,
            class: Ne(V.value),
            inputmode: T(o).enabled ? "text" : "none",
            placeholder: w.placeholder,
            disabled: w.disabled,
            readonly: w.readonly,
            required: w.required,
            value: e.inputValue,
            autocomplete: w.autocomplete,
            "aria-label": (q = T(s)) == null ? void 0 : q.input,
            "aria-disabled": w.disabled || void 0,
            "aria-invalid": w.state === !1 ? !0 : void 0,
            onInput: k,
            onKeydown: [
              Se(M, ["enter"]),
              Se(O, ["tab"]),
              B
            ],
            onBlur: A,
            onFocus: W,
            onKeypress: B,
            onPaste: $
          }, null, 42, vw)),
          ke("div", {
            onClick: x[2] || (x[2] = (ae) => r("toggle"))
          }, [
            w.$slots["input-icon"] && !w.hideInputIcon ? (I(), G("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: x[0] || (x[0] = (ae) => r("toggle"))
            }, [
              ge(w.$slots, "input-icon")
            ])) : X("", !0),
            !w.$slots["input-icon"] && !w.hideInputIcon && !w.$slots["dp-input"] ? (I(), Ce(T(Yr), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: x[1] || (x[1] = (ae) => r("toggle"))
            })) : X("", !0)
          ]),
          w.$slots["clear-icon"] && e.inputValue && w.clearable && !w.disabled && !w.readonly ? (I(), G("span", yw, [
            ge(w.$slots, "clear-icon", { clear: F })
          ])) : X("", !0),
          w.clearable && !w.$slots["clear-icon"] && e.inputValue && !w.disabled && !w.readonly ? (I(), Ce(T(Ld), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: x[3] || (x[3] = Ke((ae) => F(ae), ["prevent"]))
          })) : X("", !0)
        ])) : X("", !0)
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
    } = st(r), { isTimeValid: d, isMonthValid: p } = Gn(r), { buildMatrix: b } = zn(), v = J(null), y = J(null), D = J(!1), V = J({}), R = J(null), g = J(null);
    xt(() => {
      r.arrowNavigation && b([gt(v), gt(y)], "actionRow"), P(), window.addEventListener("resize", P);
    }), Fr(() => {
      window.removeEventListener("resize", P);
    });
    const P = () => {
      D.value = !1, setTimeout(() => {
        var B, w;
        const x = (B = R.value) == null ? void 0 : B.getBoundingClientRect(), q = (w = g.value) == null ? void 0 : w.getBoundingClientRect();
        x && q && (V.value.maxWidth = `${q.width - x.width - 20}px`), D.value = !0;
      }, 0);
    }, $ = ne(() => c.value.enabled && !c.value.partialRange && r.internalModelValue ? r.internalModelValue.length === 2 : !0), L = ne(
      () => !d.value(r.internalModelValue) || !p.value(r.internalModelValue) || !$.value
    ), k = () => {
      const B = o.value;
      return r.timePicker || r.monthPicker, B(bt(r.internalModelValue));
    }, M = () => {
      const B = r.internalModelValue;
      return s.value.count > 0 ? `${O(B[0])} - ${O(B[1])}` : [O(B[0]), O(B[1])];
    }, O = (B) => Kd(
      B,
      o.value,
      r.formatLocale,
      l.value.rangeSeparator,
      r.modelAuto,
      u()
    ), W = ne(() => !r.internalModelValue || !r.menuMount ? "" : typeof o.value == "string" ? Array.isArray(r.internalModelValue) ? r.internalModelValue.length === 2 && r.internalModelValue[1] ? M() : r.multiDates ? r.internalModelValue.map((B) => `${O(B)}`) : r.modelAuto ? `${O(r.internalModelValue[0])}` : `${O(r.internalModelValue[0])} -` : O(r.internalModelValue) : k()), S = () => r.multiDates ? "; " : " - ", A = ne(
      () => Array.isArray(W.value) ? W.value.join(S()) : W.value
    ), F = () => {
      d.value(r.internalModelValue) && p.value(r.internalModelValue) && $.value ? n("select-date") : n("invalid-select");
    };
    return (B, w) => (I(), G("div", {
      ref_key: "actionRowRef",
      ref: g,
      class: "dp__action_row"
    }, [
      B.$slots["action-row"] ? ge(B.$slots, "action-row", ht(_t({ key: 0 }, {
        internalModelValue: B.internalModelValue,
        disabled: L.value,
        selectDate: () => B.$emit("select-date"),
        closePicker: () => B.$emit("close-picker")
      }))) : (I(), G(_e, { key: 1 }, [
        T(a).showPreview ? (I(), G("div", {
          key: 0,
          class: "dp__selection_preview",
          title: A.value,
          style: Dt(V.value)
        }, [
          B.$slots["action-preview"] && D.value ? ge(B.$slots, "action-preview", {
            key: 0,
            value: B.internalModelValue
          }) : X("", !0),
          !B.$slots["action-preview"] && D.value ? (I(), G(_e, { key: 1 }, [
            Jt(He(A.value), 1)
          ], 64)) : X("", !0)
        ], 12, bw)) : X("", !0),
        ke("div", {
          ref_key: "actionBtnContainer",
          ref: R,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          B.$slots["action-buttons"] ? ge(B.$slots, "action-buttons", {
            key: 0,
            value: B.internalModelValue
          }) : X("", !0),
          B.$slots["action-buttons"] ? X("", !0) : (I(), G(_e, { key: 1 }, [
            !T(i).enabled && T(a).showCancel ? (I(), G("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: v,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: w[0] || (w[0] = (x) => B.$emit("close-picker")),
              onKeydown: [
                w[1] || (w[1] = Se((x) => B.$emit("close-picker"), ["enter"])),
                w[2] || (w[2] = Se((x) => B.$emit("close-picker"), ["space"]))
              ]
            }, He(B.cancelText), 545)) : X("", !0),
            T(a).showNow ? (I(), G("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: w[3] || (w[3] = (x) => B.$emit("select-now")),
              onKeydown: [
                w[4] || (w[4] = Se((x) => B.$emit("select-now"), ["enter"])),
                w[5] || (w[5] = Se((x) => B.$emit("select-now"), ["space"]))
              ]
            }, He(B.nowButtonLabel), 33)) : X("", !0),
            T(a).showSelect ? (I(), G("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: y,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: L.value,
              onKeydown: [
                Se(F, ["enter"]),
                Se(F, ["space"])
              ],
              onClick: F
            }, He(B.selectText), 41, ww)) : X("", !0)
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
    ), { hideNavigationButtons: d } = Ro(), p = J(!1), b = J(null), v = J(null), y = J([]), D = J(), V = J(null), R = J(0), g = J(null);
    ic(() => {
      b.value = null;
    }), xt(() => {
      Xt().then(() => S()), l.noOverlayFocus || $(), P(!0);
    }), Fr(() => P(!1));
    const P = (ee) => {
      var m;
      l.arrowNavigation && ((m = l.headerRefs) != null && m.length ? o(ee) : r(ee));
    }, $ = () => {
      var ee;
      const m = gt(v);
      m && (c.value.enabled || (b.value ? (ee = b.value) == null || ee.focus({ preventScroll: !0 }) : m.focus({ preventScroll: !0 })), p.value = m.clientHeight < m.scrollHeight);
    }, L = ne(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !l.useRelative,
        "dp--overlay-relative": l.useRelative
      })
    ), k = ne(
      () => l.useRelative ? { height: `${l.height}px`, width: "260px" } : void 0
    ), M = ne(() => ({
      dp__overlay_col: !0
    })), O = ne(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: p.value,
        dp__button_bottom: l.isLast
      })
    ), W = ne(() => {
      var ee, m;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((ee = l.items) == null ? void 0 : ee.length) <= 6,
        dp__container_block: ((m = l.items) == null ? void 0 : m.length) > 6
      };
    });
    ut(
      () => l.items,
      () => S(!1),
      { deep: !0 }
    );
    const S = (ee = !0) => {
      Xt().then(() => {
        const m = gt(b), f = gt(v), N = gt(V), Q = gt(g), ce = N ? N.getBoundingClientRect().height : 0;
        f && (f.getBoundingClientRect().height ? R.value = f.getBoundingClientRect().height - ce : R.value = u.value.modeHeight - ce), m && Q && ee && (Q.scrollTop = m.offsetTop - Q.offsetTop - (R.value / 2 - m.getBoundingClientRect().height) - ce);
      });
    }, A = (ee) => {
      ee.disabled || s("selected", ee.value);
    }, F = () => {
      s("toggle"), s("reset-flow");
    }, B = () => {
      l.escClose && F();
    }, w = (ee, m, f, N) => {
      ee && ((m.active || m.value === l.focusValue) && (b.value = ee), l.arrowNavigation && (Array.isArray(y.value[f]) ? y.value[f][N] = ee : y.value[f] = [ee], x()));
    }, x = () => {
      var ee, m;
      const f = (ee = l.headerRefs) != null && ee.length ? [l.headerRefs].concat(y.value) : y.value.concat([l.skipButtonRef ? [] : [V.value]]);
      a(bt(f), (m = l.headerRefs) != null && m.length ? "monthPicker" : "selectionGrid");
    }, q = (ee) => {
      l.arrowNavigation || In(ee, u.value, !0);
    }, ae = (ee) => {
      D.value = ee, s("hover-value", ee);
    }, pe = () => {
      if (F(), !l.isLast) {
        const ee = Ib(l.menuWrapRef ?? null, "action-row");
        if (ee) {
          const m = Hd(ee);
          m == null || m.focus();
        }
      }
    };
    return t({ focusGrid: $ }), (ee, m) => {
      var f;
      return I(), G("div", {
        ref_key: "gridWrapRef",
        ref: v,
        class: Ne(L.value),
        style: Dt(k.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          Se(Ke(B, ["prevent"]), ["esc"]),
          m[0] || (m[0] = Se(Ke((N) => q(N), ["prevent"]), ["left"])),
          m[1] || (m[1] = Se(Ke((N) => q(N), ["prevent"]), ["up"])),
          m[2] || (m[2] = Se(Ke((N) => q(N), ["prevent"]), ["down"])),
          m[3] || (m[3] = Se(Ke((N) => q(N), ["prevent"]), ["right"]))
        ]
      }, [
        ke("div", {
          ref_key: "containerRef",
          ref: g,
          class: Ne(W.value),
          role: "grid",
          style: Dt({ height: `${R.value}px` })
        }, [
          ke("div", kw, [
            ge(ee.$slots, "header")
          ]),
          ee.$slots.overlay ? ge(ee.$slots, "overlay", { key: 0 }) : (I(!0), G(_e, { key: 1 }, qe(ee.items, (N, Q) => (I(), G("div", {
            key: Q,
            class: Ne(["dp__overlay_row", { dp__flex_row: ee.items.length >= 3 }]),
            role: "row"
          }, [
            (I(!0), G(_e, null, qe(N, (ce, j) => (I(), G("div", {
              key: ce.value,
              ref_for: !0,
              ref: (Oe) => w(Oe, ce, Q, j),
              role: "gridcell",
              class: Ne(M.value),
              "aria-selected": ce.active || void 0,
              "aria-disabled": ce.disabled || void 0,
              tabindex: "0",
              onClick: (Oe) => A(ce),
              onKeydown: [
                Se(Ke((Oe) => A(ce), ["prevent"]), ["enter"]),
                Se(Ke((Oe) => A(ce), ["prevent"]), ["space"])
              ],
              onMouseover: (Oe) => ae(ce.value)
            }, [
              ke("div", {
                class: Ne(ce.className)
              }, [
                ee.$slots.item ? ge(ee.$slots, "item", {
                  key: 0,
                  item: ce
                }) : X("", !0),
                ee.$slots.item ? X("", !0) : (I(), G(_e, { key: 1 }, [
                  Jt(He(ce.text), 1)
                ], 64))
              ], 2)
            ], 42, Mw))), 128))
          ], 2))), 128))
        ], 6),
        ee.$slots["button-icon"] ? Vn((I(), G("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: V,
          type: "button",
          "aria-label": (f = T(i)) == null ? void 0 : f.toggleOverlay,
          class: Ne(O.value),
          tabindex: "0",
          onClick: F,
          onKeydown: [
            Se(F, ["enter"]),
            Se(pe, ["tab"])
          ]
        }, [
          ge(ee.$slots, "button-icon")
        ], 42, Tw)), [
          [Fa, !T(d)(ee.hideNavigation, ee.type)]
        ]) : X("", !0)
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
    const t = e, n = ne(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), r = ne(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (a, o) => (I(), G("div", {
      class: Ne({
        dp__menu_inner: !a.stretch,
        "dp--menu--inner-stretched": a.stretch,
        dp__flex_display: a.multiCalendars > 0,
        "dp--flex-display-collapsed": a.collapse
      })
    }, [
      (I(!0), G(_e, null, qe(n.value, (s, l) => (I(), G("div", {
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
    return xt(() => n("set-ref", r)), (a, o) => (I(), G("button", {
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
    const n = t, r = e, { showRightIcon: a, showLeftIcon: o } = Ro(), { defaultedConfig: s, defaultedMultiCalendars: l, defaultedAriaLabels: i, defaultedTransitions: c } = st(r), { showTransition: u, transitionName: d } = xa(c), p = (y = !1, D) => {
      n("toggle-year-picker", { flow: y, show: D });
    }, b = (y) => {
      n("year-select", y);
    }, v = (y = !1) => {
      n("handle-year", y);
    };
    return (y, D) => {
      var V, R, g;
      return I(), G("div", Sw, [
        T(o)(T(l), e.instance) ? (I(), Ce(sa, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (V = T(i)) == null ? void 0 : V.prevYear,
          disabled: e.isDisabled(!1),
          onActivate: D[0] || (D[0] = (P) => v(!1))
        }, {
          default: Ve(() => [
            y.$slots["arrow-left"] ? ge(y.$slots, "arrow-left", { key: 0 }) : X("", !0),
            y.$slots["arrow-left"] ? X("", !0) : (I(), Ce(T(Ol), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : X("", !0),
        ke("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (R = T(i)) == null ? void 0 : R.openYearsOverlay,
          onClick: D[1] || (D[1] = () => p(!1)),
          onKeydown: D[2] || (D[2] = Se(() => p(!1), ["enter"]))
        }, [
          y.$slots.year ? ge(y.$slots, "year", {
            key: 0,
            year: e.year
          }) : X("", !0),
          y.$slots.year ? X("", !0) : (I(), G(_e, { key: 1 }, [
            Jt(He(e.year), 1)
          ], 64))
        ], 40, Aw),
        T(a)(T(l), e.instance) ? (I(), Ce(sa, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (g = T(i)) == null ? void 0 : g.nextYear,
          disabled: e.isDisabled(!0),
          onActivate: D[3] || (D[3] = (P) => v(!0))
        }, {
          default: Ve(() => [
            y.$slots["arrow-right"] ? ge(y.$slots, "arrow-right", { key: 0 }) : X("", !0),
            y.$slots["arrow-right"] ? X("", !0) : (I(), Ce(T(El), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : X("", !0),
        Qe(qn, {
          name: T(d)(e.showYearPicker),
          css: T(u)
        }, {
          default: Ve(() => [
            e.showYearPicker ? (I(), Ce(Ma, {
              key: 0,
              items: e.items,
              "text-input": y.textInput,
              "esc-close": y.escClose,
              config: y.config,
              "is-last": y.autoApply && !T(s).keepActionRow,
              "hide-navigation": y.hideNavigation,
              "aria-labels": y.ariaLabels,
              type: "year",
              onToggle: p,
              onSelected: D[4] || (D[4] = (P) => b(P))
            }, Ct({
              "button-icon": Ve(() => [
                y.$slots["calendar-icon"] ? ge(y.$slots, "calendar-icon", { key: 0 }) : X("", !0),
                y.$slots["calendar-icon"] ? X("", !0) : (I(), Ce(T(Yr), { key: 1 }))
              ]),
              _: 2
            }, [
              y.$slots["year-overlay-value"] ? {
                name: "item",
                fn: Ve(({ item: P }) => [
                  ge(y.$slots, "year-overlay-value", {
                    text: P.text,
                    value: P.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels"])) : X("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Ll = (e, t, n) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((r) => Be(e, r))) {
      const r = t.value.filter((a) => !Be(a, e));
      t.value = r.length ? r : null;
    } else
      (n && +n > t.value.length || !n) && t.value.push(e);
  else
    t.value = [e];
}, Yl = (e, t, n) => {
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
  const c = ne(() => Vl(o.yearRange, o.reverseYears)), u = J([!1]), d = ne(() => ($, L) => {
    const k = Ze(qt(/* @__PURE__ */ new Date()), {
      month: l.value($),
      year: s.value($)
    });
    return Gd(
      k,
      n.value.maxDate,
      n.value.minDate,
      o.preventMinMaxNavigation,
      L
    );
  }), p = () => {
    for (let $ = 0; $ < e.value.count; $++)
      if ($ === 0)
        r.value[$] = r.value[0];
      else {
        const L = Ze(Z(), r.value[$ - 1]);
        r.value[$] = { month: Fe(L), year: $e(kl(L, 1)) };
      }
  }, b = ($) => {
    if (!$)
      return p();
    const L = Ze(Z(), r.value[$]);
    return r.value[0].year = $e(Bd(L, e.value.count - 1)), p();
  }, v = ($) => o.focusStartDate ? $[0] : $[1] ? $[1] : $[0], y = () => {
    if (a.value) {
      const $ = Array.isArray(a.value) ? v(a.value) : a.value;
      r.value[0] = { month: Fe($), year: $e($) };
    }
  };
  xt(() => {
    y(), e.value.count && p();
  });
  const D = ($, L) => {
    r.value[L].year = $, e.value.count && !e.value.solo && b(L);
  }, V = ne(() => ($) => Vr(c.value, (L) => {
    const k = s.value($) === L.value, M = ya(
      L.value,
      Ir(n.value.minDate),
      Ir(n.value.maxDate)
    ), O = Bl(t.value, L.value);
    return { active: k, disabled: M, highlighted: O };
  })), R = ($, L) => {
    D($, L), P(L);
  }, g = ($, L = !1) => {
    if (!d.value($, L)) {
      const k = L ? s.value($) + 1 : s.value($) - 1;
      D(k, $);
    }
  }, P = ($, L = !1, k) => {
    L || i("reset-flow"), k !== void 0 ? u.value[$] = k : u.value[$] = !u.value[$], u.value || i("overlay-closed");
  };
  return {
    isDisabled: d,
    groupedYears: V,
    showYearPicker: u,
    selectYear: D,
    toggleYearPicker: P,
    handleYearSelect: R,
    handleYear: g
  };
}, Dw = (e, t) => {
  const {
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: a,
    defaultedConfig: o,
    defaultedRange: s,
    defaultedHighlight: l,
    propDates: i,
    defaultedTz: c
  } = st(e), { modelValue: u, year: d, month: p, calendars: b } = ka(e, t), v = ne(() => Yd(e.formatLocale, e.locale, e.monthNameFormat)), y = J(null), { checkMinMaxRange: D } = Gn(e), {
    selectYear: V,
    groupedYears: R,
    showYearPicker: g,
    toggleYearPicker: P,
    handleYearSelect: $,
    handleYear: L,
    isDisabled: k
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
    e.startDate && (u.value && e.focusStartDate || !u.value) && V($e(Z(e.startDate)), 0);
  });
  const M = (m) => m ? { month: Fe(m), year: $e(m) } : { month: null, year: null }, O = () => u.value ? Array.isArray(u.value) ? u.value.map((m) => M(m)) : M(u.value) : M(), W = (m, f) => {
    const N = b.value[m], Q = O();
    return Array.isArray(Q) ? Q.some((ce) => ce.year === (N == null ? void 0 : N.year) && ce.month === f) : (N == null ? void 0 : N.year) === Q.year && f === Q.month;
  }, S = (m, f, N) => {
    var Q, ce;
    const j = O();
    return Array.isArray(j) ? d.value(f) === ((Q = j[N]) == null ? void 0 : Q.year) && m === ((ce = j[N]) == null ? void 0 : ce.month) : !1;
  }, A = (m, f) => {
    if (s.value.enabled) {
      const N = O();
      if (Array.isArray(u.value) && Array.isArray(N)) {
        const Q = S(m, f, 0) || S(m, f, 1), ce = yn(qt(Z()), m, d.value(f));
        return Eo(u.value, y.value, ce) && !Q;
      }
      return !1;
    }
    return !1;
  }, F = ne(() => (m) => Vr(v.value, (f) => {
    const N = W(m, f.value), Q = ya(
      f.value,
      Ud(d.value(m), i.value.minDate),
      Wd(d.value(m), i.value.maxDate)
    ) || Wb(i.value.disabledDates, d.value(m)).includes(f.value), ce = A(f.value, m), j = Qd(l.value, f.value, d.value(m));
    return { active: N, disabled: Q, isBetween: ce, highlighted: j };
  })), B = (m, f) => yn(qt(Z()), m, d.value(f)), w = (m, f) => {
    const N = u.value ? u.value : qt(/* @__PURE__ */ new Date());
    u.value = yn(N, m, d.value(f)), t("auto-apply"), t("update-flow-step");
  }, x = (m, f) => {
    const N = B(m, f);
    s.value.fixedEnd || s.value.fixedStart ? u.value = tf(N, u, t, s) : u.value ? D(N, u.value) && (u.value = Yl(u, B(m, f), t)) : u.value = [B(m, f)], Vo(u.value, t, e.autoApply, e.modelAuto);
  }, q = (m, f) => {
    Ll(B(m, f), u, e.multiDatesLimit), t("auto-apply", !0);
  }, ae = (m, f) => (b.value[f].month = m, ee(f, b.value[f].year, m), e.multiDates ? q(m, f) : s.value.enabled ? x(m, f) : w(m, f)), pe = (m, f) => {
    V(m, f), ee(f, m, null);
  }, ee = (m, f, N) => {
    let Q = N;
    if (!Q && Q !== 0) {
      const ce = O();
      Q = Array.isArray(ce) ? ce[m].month : ce.month;
    }
    t("update-month-year", { instance: m, year: f, month: Q });
  };
  return {
    groupedMonths: F,
    groupedYears: R,
    year: d,
    isDisabled: k,
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: a,
    defaultedConfig: o,
    showYearPicker: g,
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
      y.value = B(m, f);
    },
    selectMonth: ae,
    selectYear: pe,
    toggleYearPicker: P,
    handleYearSelect: $,
    handleYear: L,
    getModelMonthYear: O
  };
}, Cw = /* @__PURE__ */ Mt({
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
      modelValue: v,
      presetDate: y,
      setHoverDate: D,
      selectMonth: V,
      selectYear: R,
      toggleYearPicker: g,
      handleYearSelect: P,
      handleYear: $,
      getModelMonthYear: L
    } = Dw(s, r);
    return t({ getSidebarProps: () => ({
      modelValue: v,
      year: c,
      getModelMonthYear: L,
      selectMonth: V,
      selectYear: R,
      handleYear: $
    }), presetDate: y, toggleYearPicker: (k) => g(0, k) }), (k, M) => (I(), Ce(No, {
      "multi-calendars": T(d).count,
      collapse: k.collapse,
      stretch: ""
    }, {
      default: Ve(({ instance: O }) => [
        k.$slots["month-year"] ? ge(k.$slots, "month-year", ht(_t({ key: 0 }, {
          year: T(c),
          months: T(l)(O),
          years: T(i)(O),
          selectMonth: T(V),
          selectYear: T(R),
          instance: O
        }))) : (I(), Ce(Ma, {
          key: 1,
          items: T(l)(O),
          "arrow-navigation": k.arrowNavigation,
          "is-last": k.autoApply && !T(p).keepActionRow,
          "esc-close": k.escClose,
          height: T(p).modeHeight,
          config: k.config,
          "no-overlay-focus": !!(k.noOverlayFocus || k.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (W) => T(V)(W, O),
          onHoverValue: (W) => T(D)(W, O)
        }, {
          header: Ve(() => [
            Qe(Zd, _t(k.$props, {
              items: T(i)(O),
              instance: O,
              "show-year-picker": T(b)[O],
              year: T(c)(O),
              "is-disabled": (W) => T(u)(O, W),
              onHandleYear: (W) => T($)(O, W),
              onYearSelect: (W) => T(P)(W, O),
              onToggleYearPicker: (W) => T(g)(O, W == null ? void 0 : W.flow, W == null ? void 0 : W.show)
            }), Ct({ _: 2 }, [
              qe(T(o), (W, S) => ({
                name: W,
                fn: Ve((A) => [
                  ge(k.$slots, W, ht(Pt(A)))
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
  const c = (b) => Array.isArray(n.value) ? n.value.some((v) => $e(v) === b) : n.value ? $e(n.value) === b : !1, u = (b) => s.value.enabled && Array.isArray(n.value) ? Eo(n.value, r.value, p(b)) : !1, d = ne(() => Vr(Vl(e.yearRange, e.reverseYears), (b) => {
    const v = c(b.value), y = ya(
      b.value,
      Ir(l.value.minDate),
      Ir(l.value.maxDate)
    ) || o.value.years.includes(b.value), D = u(b.value) && !v, V = Bl(a.value, b.value);
    return { active: v, disabled: y, isBetween: D, highlighted: V };
  })), p = (b) => un(qt(/* @__PURE__ */ new Date()), b);
  return {
    groupedYears: d,
    modelValue: n,
    focusYear: i,
    setHoverValue: (b) => {
      r.value = un(qt(/* @__PURE__ */ new Date()), b);
    },
    selectYear: (b) => {
      var v;
      if (t("update-month-year", { instance: 0, year: b }), e.multiDates)
        return n.value ? Array.isArray(n.value) && (((v = n.value) == null ? void 0 : v.map((y) => $e(y))).includes(b) ? n.value = n.value.filter((y) => $e(y) !== b) : n.value.push(un(Ft(Z()), b))) : n.value = [un(Ft(Z()), b)], t("auto-apply", !0);
      if (s.value.enabled)
        return n.value = Yl(n, p(b), t), Vo(n.value, t, e.autoApply, e.modelAuto);
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
    }) }), (d, p) => (I(), G("div", null, [
      d.$slots["month-year"] ? ge(d.$slots, "month-year", ht(_t({ key: 0 }, {
        years: T(o),
        selectYear: T(i)
      }))) : (I(), Ce(Ma, {
        key: 1,
        items: T(o),
        "is-last": d.autoApply && !T(u).keepActionRow,
        height: T(u).modeHeight,
        config: d.config,
        "no-overlay-focus": !!(d.noOverlayFocus || d.textInput),
        "focus-value": T(l),
        type: "year",
        "use-relative": "",
        onSelected: T(i),
        onHoverValue: T(c)
      }, Ct({ _: 2 }, [
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
    const r = n, a = e, { setTimePickerElements: o, setTimePickerBackRef: s } = zn(), { defaultedAriaLabels: l, defaultedTransitions: i, defaultedFilters: c, defaultedConfig: u, defaultedRange: d } = st(a), { transitionName: p, showTransition: b } = xa(i), v = bn({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), y = J("AM"), D = J(null), V = J([]);
    xt(() => {
      r("mounted");
    });
    const R = (U) => Ze(/* @__PURE__ */ new Date(), {
      hours: U.hours,
      minutes: U.minutes,
      seconds: a.enableSeconds ? U.seconds : 0,
      milliseconds: 0
    }), g = ne(
      () => (U) => w(U, a[U]) || $(U, a[U])
    ), P = ne(() => ({ hours: a.hours, minutes: a.minutes, seconds: a.seconds })), $ = (U, ve) => d.value.enabled && !d.value.disableTimeRangeValidation ? !a.validateTime(U, ve) : !1, L = (U, ve) => {
      if (d.value.enabled && !d.value.disableTimeRangeValidation) {
        const Ee = ve ? +a[`${U}Increment`] : -+a[`${U}Increment`], C = a[U] + Ee;
        return !a.validateTime(U, C);
      }
      return !1;
    }, k = ne(() => (U) => !pe(+a[U] + +a[`${U}Increment`], U) || L(U, !0)), M = ne(() => (U) => !pe(+a[U] - +a[`${U}Increment`], U) || L(U, !1)), O = (U, ve) => _d(Ze(Z(), U), ve), W = (U, ve) => Db(Ze(Z(), U), ve), S = ne(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !a.timePickerInline,
        dp__time_col_reg_block: !a.enableSeconds && a.is24 && !a.timePickerInline,
        dp__time_col_reg_inline: !a.enableSeconds && a.is24 && a.timePickerInline,
        dp__time_col_reg_with_button: !a.enableSeconds && !a.is24,
        dp__time_col_sec: a.enableSeconds && a.is24,
        dp__time_col_sec_with_button: a.enableSeconds && !a.is24
      })
    ), A = ne(() => {
      const U = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return a.enableSeconds ? U.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : U;
    }), F = ne(() => A.value.filter((U) => !U.separator)), B = ne(() => (U) => {
      if (U === "hours") {
        const ve = Q(+a.hours);
        return { text: ve < 10 ? `0${ve}` : `${ve}`, value: ve };
      }
      return { text: a[U] < 10 ? `0${a[U]}` : `${a[U]}`, value: a[U] };
    }), w = (U, ve) => {
      var Ee;
      if (!a.disabledTimesConfig)
        return !1;
      const C = a.disabledTimesConfig(a.order, U === "hours" ? ve : void 0);
      return C[U] ? !!((Ee = C[U]) != null && Ee.includes(ve)) : !0;
    }, x = (U) => {
      const ve = a.is24 ? 24 : 12, Ee = U === "hours" ? ve : 60, C = +a[`${U}GridIncrement`], h = U === "hours" && !a.is24 ? C : 0, _ = [];
      for (let Y = h; Y < Ee; Y += C)
        _.push({ value: Y, text: Y < 10 ? `0${Y}` : `${Y}` });
      return U === "hours" && !a.is24 && _.push({ value: 0, text: "12" }), Vr(_, (Y) => ({ active: !1, disabled: c.value.times[U].includes(Y.value) || !pe(Y.value, U) || w(U, Y.value) || $(U, Y.value) }));
    }, q = (U) => U >= 0 ? U : 59, ae = (U) => U >= 0 ? U : 23, pe = (U, ve) => {
      const Ee = a.minTime ? R(as(a.minTime)) : null, C = a.maxTime ? R(as(a.maxTime)) : null, h = R(
        as(
          P.value,
          ve,
          ve === "minutes" || ve === "seconds" ? q(U) : ae(U)
        )
      );
      return Ee && C ? (va(h, C) || xr(h, C)) && (ha(h, Ee) || xr(h, Ee)) : Ee ? ha(h, Ee) || xr(h, Ee) : C ? va(h, C) || xr(h, C) : !0;
    }, ee = (U) => a[`no${U[0].toUpperCase() + U.slice(1)}Overlay`], m = (U) => {
      ee(U) || (v[U] = !v[U], v[U] || r("overlay-closed"));
    }, f = (U) => U === "hours" ? Kt : U === "minutes" ? fn : $r, N = (U, ve = !0) => {
      const Ee = ve ? O : W, C = ve ? +a[`${U}Increment`] : -+a[`${U}Increment`];
      pe(+a[U] + C, U) && r(
        `update:${U}`,
        f(U)(Ee({ [U]: +a[U] }, { [U]: +a[`${U}Increment`] }))
      );
    }, Q = (U) => a.is24 ? U : (U >= 12 ? y.value = "PM" : y.value = "AM", Eb(U)), ce = () => {
      y.value === "PM" ? (y.value = "AM", r("update:hours", a.hours - 12)) : (y.value = "PM", r("update:hours", a.hours + 12)), r("am-pm-change", y.value);
    }, j = (U) => {
      v[U] = !0;
    }, Oe = (U, ve, Ee) => {
      if (U && a.arrowNavigation) {
        Array.isArray(V.value[ve]) ? V.value[ve][Ee] = U : V.value[ve] = [U];
        const C = V.value.reduce(
          (h, _) => _.map((Y, K) => [...h[K] || [], _[K]]),
          []
        );
        s(a.closeTimePickerBtn), D.value && (C[1] = C[1].concat(D.value)), o(C, a.order);
      }
    }, Ie = (U, ve) => (m(U), U === "hours" && !a.is24 ? r(`update:${U}`, y.value === "PM" ? ve + 12 : ve) : r(`update:${U}`, ve));
    return t({ openChildCmp: j }), (U, ve) => {
      var Ee;
      return U.disabled ? X("", !0) : (I(), G("div", Rw, [
        (I(!0), G(_e, null, qe(A.value, (C, h) => {
          var _, Y, K;
          return I(), G("div", {
            key: h,
            class: Ne(S.value)
          }, [
            C.separator ? (I(), G(_e, { key: 0 }, [
              Jt(" : ")
            ], 64)) : (I(), G(_e, { key: 1 }, [
              ke("button", {
                ref_for: !0,
                ref: (E) => Oe(E, h, 0),
                type: "button",
                class: Ne({
                  dp__btn: !0,
                  dp__inc_dec_button: !U.timePickerInline,
                  dp__inc_dec_button_inline: U.timePickerInline,
                  dp__tp_inline_btn_top: U.timePickerInline,
                  dp__inc_dec_button_disabled: k.value(C.type)
                }),
                "aria-label": (_ = T(l)) == null ? void 0 : _.incrementValue(C.type),
                tabindex: "0",
                onKeydown: [
                  Se(Ke((E) => N(C.type), ["prevent"]), ["enter"]),
                  Se(Ke((E) => N(C.type), ["prevent"]), ["space"])
                ],
                onClick: (E) => N(C.type)
              }, [
                a.timePickerInline ? (I(), G(_e, { key: 1 }, [
                  Nw,
                  Vw
                ], 64)) : (I(), G(_e, { key: 0 }, [
                  U.$slots["arrow-up"] ? ge(U.$slots, "arrow-up", { key: 0 }) : X("", !0),
                  U.$slots["arrow-up"] ? X("", !0) : (I(), Ce(T($l), { key: 1 }))
                ], 64))
              ], 42, $w),
              ke("button", {
                ref_for: !0,
                ref: (E) => Oe(E, h, 1),
                type: "button",
                "aria-label": (Y = T(l)) == null ? void 0 : Y.openTpOverlay(C.type),
                class: Ne({
                  dp__time_display: !0,
                  dp__time_display_block: !U.timePickerInline,
                  dp__time_display_inline: U.timePickerInline,
                  "dp--time-invalid": g.value(C.type),
                  "dp--time-overlay-btn": !g.value(C.type)
                }),
                disabled: ee(C.type),
                tabindex: "0",
                onKeydown: [
                  Se(Ke((E) => m(C.type), ["prevent"]), ["enter"]),
                  Se(Ke((E) => m(C.type), ["prevent"]), ["space"])
                ],
                onClick: (E) => m(C.type)
              }, [
                U.$slots[C.type] ? ge(U.$slots, C.type, {
                  key: 0,
                  text: B.value(C.type).text,
                  value: B.value(C.type).value
                }) : X("", !0),
                U.$slots[C.type] ? X("", !0) : (I(), G(_e, { key: 1 }, [
                  Jt(He(B.value(C.type).text), 1)
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
                  dp__inc_dec_button_disabled: M.value(C.type)
                }),
                "aria-label": (K = T(l)) == null ? void 0 : K.decrementValue(C.type),
                tabindex: "0",
                onKeydown: [
                  Se(Ke((E) => N(C.type, !1), ["prevent"]), ["enter"]),
                  Se(Ke((E) => N(C.type, !1), ["prevent"]), ["space"])
                ],
                onClick: (E) => N(C.type, !1)
              }, [
                a.timePickerInline ? (I(), G(_e, { key: 1 }, [
                  Bw,
                  Lw
                ], 64)) : (I(), G(_e, { key: 0 }, [
                  U.$slots["arrow-down"] ? ge(U.$slots, "arrow-down", { key: 0 }) : X("", !0),
                  U.$slots["arrow-down"] ? X("", !0) : (I(), Ce(T(Nl), { key: 1 }))
                ], 64))
              ], 42, Fw)
            ], 64))
          ], 2);
        }), 128)),
        U.is24 ? X("", !0) : (I(), G("div", Yw, [
          U.$slots["am-pm-button"] ? ge(U.$slots, "am-pm-button", {
            key: 0,
            toggle: ce,
            value: y.value
          }) : X("", !0),
          U.$slots["am-pm-button"] ? X("", !0) : (I(), G("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: D,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (Ee = T(l)) == null ? void 0 : Ee.amPmButton,
            tabindex: "0",
            onClick: ce,
            onKeydown: [
              Se(Ke(ce, ["prevent"]), ["enter"]),
              Se(Ke(ce, ["prevent"]), ["space"])
            ]
          }, He(y.value), 41, jw))
        ])),
        (I(!0), G(_e, null, qe(F.value, (C, h) => (I(), Ce(qn, {
          key: h,
          name: T(p)(v[C.type]),
          css: T(b)
        }, {
          default: Ve(() => [
            v[C.type] ? (I(), Ce(Ma, {
              key: 0,
              items: x(C.type),
              "is-last": U.autoApply && !T(u).keepActionRow,
              "esc-close": U.escClose,
              type: C.type,
              "text-input": U.textInput,
              config: U.config,
              "arrow-navigation": U.arrowNavigation,
              "aria-labels": U.ariaLabels,
              onSelected: (_) => Ie(C.type, _),
              onToggle: (_) => m(C.type),
              onResetFlow: ve[0] || (ve[0] = (_) => U.$emit("reset-flow"))
            }, Ct({
              "button-icon": Ve(() => [
                U.$slots["clock-icon"] ? ge(U.$slots, "clock-icon", { key: 0 }) : X("", !0),
                U.$slots["clock-icon"] ? X("", !0) : (I(), Ce(bo(U.timePickerInline ? T(Yr) : T(Rl)), { key: 1 }))
              ]),
              _: 2
            }, [
              U.$slots[`${C.type}-overlay-value`] ? {
                name: "item",
                fn: Ve(({ item: _ }) => [
                  ge(U.$slots, `${C.type}-overlay-value`, {
                    text: _.text,
                    value: _.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "onSelected", "onToggle"])) : X("", !0)
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
    const r = n, a = e, { buildMatrix: o, setTimePicker: s } = zn(), l = vr(), { defaultedTransitions: i, defaultedAriaLabels: c, defaultedTextInput: u, defaultedConfig: d, defaultedRange: p } = st(a), { transitionName: b, showTransition: v } = xa(i), { hideNavigationButtons: y } = Ro(), D = J(null), V = J(null), R = J([]), g = J(null);
    xt(() => {
      r("mount"), !a.timePicker && a.arrowNavigation ? o([gt(D.value)], "time") : s(!0, a.timePicker);
    });
    const P = ne(() => p.value.enabled && a.modelAuto ? jd(a.internalModelValue) : !0), $ = J(!1), L = (x) => ({
      hours: Array.isArray(a.hours) ? a.hours[x] : a.hours,
      minutes: Array.isArray(a.minutes) ? a.minutes[x] : a.minutes,
      seconds: Array.isArray(a.seconds) ? a.seconds[x] : a.seconds
    }), k = ne(() => {
      const x = [];
      if (p.value.enabled)
        for (let q = 0; q < 2; q++)
          x.push(L(q));
      else
        x.push(L(0));
      return x;
    }), M = (x, q = !1, ae = "") => {
      q || r("reset-flow"), $.value = x, r(x ? "overlay-opened" : "overlay-closed"), a.arrowNavigation && s(x), Xt(() => {
        ae !== "" && R.value[0] && R.value[0].openChildCmp(ae);
      });
    }, O = ne(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: a.autoApply && !d.value.keepActionRow
    })), W = Vt(l, "timePicker"), S = (x, q, ae) => p.value.enabled ? q === 0 ? [x, k.value[1][ae]] : [k.value[0][ae], x] : x, A = (x) => {
      r("update:hours", x);
    }, F = (x) => {
      r("update:minutes", x);
    }, B = (x) => {
      r("update:seconds", x);
    }, w = () => {
      if (g.value && !u.value.enabled && !a.noOverlayFocus) {
        const x = Hd(g.value);
        x && x.focus({ preventScroll: !0 });
      }
    };
    return t({ toggleTimePicker: M }), (x, q) => {
      var ae;
      return I(), G("div", Uw, [
        !x.timePicker && !x.timePickerInline ? Vn((I(), G("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: D,
          type: "button",
          class: Ne(O.value),
          "aria-label": (ae = T(c)) == null ? void 0 : ae.openTimePicker,
          tabindex: x.noOverlayFocus ? void 0 : 0,
          onKeydown: [
            q[0] || (q[0] = Se((pe) => M(!0), ["enter"])),
            q[1] || (q[1] = Se((pe) => M(!0), ["space"]))
          ],
          onClick: q[2] || (q[2] = (pe) => M(!0))
        }, [
          x.$slots["clock-icon"] ? ge(x.$slots, "clock-icon", { key: 0 }) : X("", !0),
          x.$slots["clock-icon"] ? X("", !0) : (I(), Ce(T(Rl), { key: 1 }))
        ], 42, Ww)), [
          [Fa, !T(y)(x.hideNavigation, "time")]
        ]) : X("", !0),
        Qe(qn, {
          name: T(b)($.value),
          css: T(v) && !x.timePickerInline
        }, {
          default: Ve(() => {
            var pe;
            return [
              $.value || x.timePicker || x.timePickerInline ? (I(), G("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: g,
                class: Ne({
                  dp__overlay: !x.timePickerInline,
                  "dp--overlay-absolute": !a.timePicker && !x.timePickerInline,
                  "dp--overlay-relative": a.timePicker
                }),
                style: Dt(x.timePicker ? { height: `${T(d).modeHeight}px` } : void 0),
                tabindex: x.timePickerInline ? void 0 : 0
              }, [
                ke("div", {
                  class: Ne(
                    x.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  x.$slots["time-picker-overlay"] ? ge(x.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: A,
                    setMinutes: F,
                    setSeconds: B
                  }) : X("", !0),
                  x.$slots["time-picker-overlay"] ? X("", !0) : (I(), G("div", {
                    key: 1,
                    class: Ne(x.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (I(!0), G(_e, null, qe(k.value, (ee, m) => Vn((I(), Ce(Hw, _t({ key: m }, {
                      ...x.$props,
                      order: m,
                      hours: ee.hours,
                      minutes: ee.minutes,
                      seconds: ee.seconds,
                      closeTimePickerBtn: V.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: m === 0 ? x.fixedStart : x.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: R,
                      "validate-time": (f, N) => e.validateTime(f, S(N, m, f)),
                      "onUpdate:hours": (f) => A(S(f, m, "hours")),
                      "onUpdate:minutes": (f) => F(S(f, m, "minutes")),
                      "onUpdate:seconds": (f) => B(S(f, m, "seconds")),
                      onMounted: w,
                      onOverlayClosed: w,
                      onAmPmChange: q[3] || (q[3] = (f) => x.$emit("am-pm-change", f))
                    }), Ct({ _: 2 }, [
                      qe(T(W), (f, N) => ({
                        name: f,
                        fn: Ve((Q) => [
                          ge(x.$slots, f, ht(Pt(Q)))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Fa, m === 0 ? !0 : P.value]
                    ])), 128))
                  ], 2)),
                  !x.timePicker && !x.timePickerInline ? Vn((I(), G("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: V,
                    type: "button",
                    class: Ne(O.value),
                    "aria-label": (pe = T(c)) == null ? void 0 : pe.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      q[4] || (q[4] = Se((ee) => M(!1), ["enter"])),
                      q[5] || (q[5] = Se((ee) => M(!1), ["space"]))
                    ],
                    onClick: q[6] || (q[6] = (ee) => M(!1))
                  }, [
                    x.$slots["calendar-icon"] ? ge(x.$slots, "calendar-icon", { key: 0 }) : X("", !0),
                    x.$slots["calendar-icon"] ? X("", !0) : (I(), Ce(T(Yr), { key: 1 }))
                  ], 42, zw)), [
                    [Fa, !T(y)(x.hideNavigation, "time")]
                  ]) : X("", !0)
                ], 2)
              ], 14, qw)) : X("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), af = (e, t, n, r) => {
  const { defaultedRange: a } = st(e), o = (g, P) => Array.isArray(t[g]) ? t[g][P] : t[g], s = (g) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[g] : t.seconds : 0, l = (g, P) => g ? P !== void 0 ? Fn(g, o("hours", P), o("minutes", P), s(P)) : Fn(g, t.hours, t.minutes, s()) : Cl(Z(), s(P)), i = (g, P) => {
    t[g] = P;
  }, c = ne(() => e.modelAuto && a.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : a.value.enabled), u = (g, P) => {
    const $ = Object.fromEntries(
      Object.keys(t).map((L) => L === g ? [L, P] : [L, t[L]].slice())
    );
    if (c.value && !a.value.disableTimeRangeValidation) {
      const L = (M) => n.value ? Fn(
        n.value[M],
        $.hours[M],
        $.minutes[M],
        $.seconds[M]
      ) : null, k = (M) => Dl(n.value[M], 0);
      return !(Be(L(0), L(1)) && (ha(L(0), k(1)) || va(L(1), k(0))));
    }
    return !0;
  }, d = (g, P) => {
    u(g, P) && (i(g, P), r && r());
  }, p = (g) => {
    d("hours", g);
  }, b = (g) => {
    d("minutes", g);
  }, v = (g) => {
    d("seconds", g);
  }, y = (g, P, $, L) => {
    P && p(g), !P && !$ && b(g), $ && v(g), n.value && L(n.value);
  }, D = (g) => {
    if (g) {
      const P = Array.isArray(g), $ = P ? [+g[0].hours, +g[1].hours] : +g.hours, L = P ? [+g[0].minutes, +g[1].minutes] : +g.minutes, k = P ? [+g[0].seconds, +g[1].seconds] : +g.seconds;
      i("hours", $), i("minutes", L), e.enableSeconds && i("seconds", k);
    }
  }, V = (g, P) => {
    const $ = {
      hours: Array.isArray(t.hours) ? t.hours[g] : t.hours,
      disabledArr: []
    };
    return (P || P === 0) && ($.hours = P), Array.isArray(e.disabledTimes) && ($.disabledArr = a.value.enabled && Array.isArray(e.disabledTimes[g]) ? e.disabledTimes[g] : e.disabledTimes), $;
  }, R = ne(() => (g, P) => {
    var $;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: L, hours: k } = V(g, P), M = L.filter((O) => +O.hours === k);
      return (($ = M[0]) == null ? void 0 : $.minutes) === "*" ? { hours: [k], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (M == null ? void 0 : M.map((O) => +O.minutes)) ?? [],
        seconds: (M == null ? void 0 : M.map((O) => O.seconds ? +O.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: i,
    updateHours: p,
    updateMinutes: b,
    updateSeconds: v,
    getSetDateTime: l,
    updateTimeValues: y,
    getSecondsValue: s,
    assignStartTime: D,
    validateTime: u,
    disabledTimesConfig: R
  };
}, Gw = (e, t) => {
  const { modelValue: n, time: r } = ka(e, t), { defaultedStartTime: a, defaultedRange: o } = st(e), { updateTimeValues: s, getSetDateTime: l, setTime: i, assignStartTime: c, disabledTimesConfig: u, validateTime: d } = af(e, r, n), p = (g) => {
    const { hours: P, minutes: $, seconds: L } = g;
    return { hours: +P, minutes: +$, seconds: L ? +L : 0 };
  }, b = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const P = p(e.startTime[0]), $ = p(e.startTime[1]);
        return [Ze(Z(), P), Ze(Z(), $)];
      }
      const g = p(e.startTime);
      return Ze(Z(), g);
    }
    return o.value.enabled ? [null, null] : null;
  }, v = () => {
    if (o.value.enabled) {
      const [g, P] = b();
      n.value = [l(g, 0), l(P, 1)];
    } else
      n.value = l(b());
  }, y = (g) => Array.isArray(g) ? [fr(Z(g[0])), fr(Z(g[1]))] : [fr(g ?? Z())], D = (g, P, $) => {
    i("hours", g), i("minutes", P), i("seconds", e.enableSeconds ? $ : 0);
  }, V = () => {
    const [g, P] = y(n.value);
    return o.value.enabled ? D(
      [g.hours, P.hours],
      [g.minutes, P.minutes],
      [g.seconds, P.seconds]
    ) : D(g.hours, g.minutes, g.seconds);
  };
  xt(() => {
    if (!e.shadow)
      return c(a.value), n.value ? V() : v();
  });
  const R = () => {
    Array.isArray(n.value) ? n.value = n.value.map((g, P) => g && l(g, P)) : n.value = l(n.value), t("time-update");
  };
  return {
    modelValue: n,
    time: r,
    disabledTimesConfig: u,
    updateTime: (g, P = !0, $ = !1) => {
      s(g, P, $, R);
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
    }) }), (p, b) => (I(), Ce(No, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: Ve(() => [
        Qe(rf, _t(p.$props, {
          hours: T(l).hours,
          minutes: T(l).minutes,
          seconds: T(l).seconds,
          "internal-model-value": p.internalModelValue,
          "disabled-times-config": T(c),
          "validate-time": T(d),
          "onUpdate:hours": b[0] || (b[0] = (v) => T(u)(v)),
          "onUpdate:minutes": b[1] || (b[1] = (v) => T(u)(v, !1)),
          "onUpdate:seconds": b[2] || (b[2] = (v) => T(u)(v, !1, !0)),
          onAmPmChange: b[3] || (b[3] = (v) => p.$emit("am-pm-change", v))
        }), Ct({ _: 2 }, [
          qe(T(s), (v, y) => ({
            name: v,
            fn: Ve((D) => [
              ge(p.$slots, v, ht(Pt(D)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), Qw = { class: "dp__month_year_row" }, Xw = ["aria-label", "onClick", "onKeydown"], Jw = /* @__PURE__ */ Mt({
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
    } = st(a), { transitionName: p, showTransition: b } = xa(o), { buildMatrix: v } = zn(), { handleMonthYearChange: y, isDisabled: D, updateMonthYear: V } = uw(a, r), { showLeftIcon: R, showRightIcon: g } = Ro(), P = J(!1), $ = J(!1), L = J([null, null, null, null]);
    xt(() => {
      r("mount");
    });
    const k = (m) => ({
      get: () => a[m],
      set: (f) => {
        const N = m === Ut.month ? Ut.year : Ut.month;
        r("update-month-year", { [m]: f, [N]: a[N] }), m === Ut.month ? w(!0) : x(!0);
      }
    }), M = ne(k(Ut.month)), O = ne(k(Ut.year)), W = ne(() => (m) => ({
      month: a.month,
      year: a.year,
      items: m === Ut.month ? a.months : a.years,
      instance: a.instance,
      updateMonthYear: V,
      toggle: m === Ut.month ? w : x
    })), S = ne(() => a.months.find((f) => f.value === a.month) || { text: "", value: 0 }), A = ne(() => Vr(a.months, (m) => {
      const f = a.month === m.value, N = ya(
        m.value,
        Ud(a.year, d.value.minDate),
        Wd(a.year, d.value.maxDate)
      ) || i.value.months.includes(m.value), Q = Qd(u.value, m.value, a.year);
      return { active: f, disabled: N, highlighted: Q };
    })), F = ne(() => Vr(a.years, (m) => {
      const f = a.year === m.value, N = ya(
        m.value,
        Ir(d.value.minDate),
        Ir(d.value.maxDate)
      ) || i.value.years.includes(m.value), Q = Bl(u.value, m.value);
      return { active: f, disabled: N, highlighted: Q };
    })), B = (m, f) => {
      f !== void 0 ? m.value = f : m.value = !m.value, m.value || r("overlay-closed");
    }, w = (m = !1, f) => {
      q(m), B(P, f);
    }, x = (m = !1, f) => {
      q(m), B($, f);
    }, q = (m) => {
      m || r("reset-flow");
    }, ae = (m, f) => {
      a.arrowNavigation && (L.value[f] = gt(m), v(L.value, "monthYear"));
    }, pe = ne(() => {
      var m, f;
      return [
        {
          type: Ut.month,
          index: 1,
          toggle: w,
          modelValue: M.value,
          updateModelValue: (N) => M.value = N,
          text: S.value.text,
          showSelectionGrid: P.value,
          items: A.value,
          ariaLabel: (m = s.value) == null ? void 0 : m.openMonthsOverlay
        },
        {
          type: Ut.year,
          index: 2,
          toggle: x,
          modelValue: O.value,
          updateModelValue: (N) => O.value = N,
          text: a.year,
          showSelectionGrid: $.value,
          items: F.value,
          ariaLabel: (f = s.value) == null ? void 0 : f.openYearsOverlay
        }
      ];
    }), ee = ne(() => a.disableYearSelect ? [pe.value[0]] : a.yearFirst ? [...pe.value].reverse() : pe.value);
    return t({
      toggleMonthPicker: w,
      toggleYearPicker: x,
      handleMonthYearChange: y
    }), (m, f) => {
      var N, Q, ce;
      return I(), G("div", Qw, [
        m.$slots["month-year"] ? ge(m.$slots, "month-year", ht(_t({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: T(V), handleMonthYearChange: T(y), instance: e.instance }))) : (I(), G(_e, { key: 1 }, [
          T(R)(T(l), e.instance) && !m.vertical ? (I(), Ce(sa, {
            key: 0,
            "aria-label": (N = T(s)) == null ? void 0 : N.prevMonth,
            disabled: T(D)(!1),
            onActivate: f[0] || (f[0] = (j) => T(y)(!1, !0)),
            onSetRef: f[1] || (f[1] = (j) => ae(j, 0))
          }, {
            default: Ve(() => [
              m.$slots["arrow-left"] ? ge(m.$slots, "arrow-left", { key: 0 }) : X("", !0),
              m.$slots["arrow-left"] ? X("", !0) : (I(), Ce(T(Ol), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : X("", !0),
          ke("div", {
            class: Ne(["dp__month_year_wrap", {
              dp__year_disable_select: m.disableYearSelect
            }])
          }, [
            (I(!0), G(_e, null, qe(ee.value, (j, Oe) => (I(), G(_e, {
              key: j.type
            }, [
              ke("button", {
                ref_for: !0,
                ref: (Ie) => ae(Ie, Oe + 1),
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": j.ariaLabel,
                onClick: j.toggle,
                onKeydown: [
                  Se(Ke(j.toggle, ["prevent"]), ["enter"]),
                  Se(Ke(j.toggle, ["prevent"]), ["space"])
                ]
              }, [
                m.$slots[j.type] ? ge(m.$slots, j.type, {
                  key: 0,
                  text: j.text,
                  value: a[j.type]
                }) : X("", !0),
                m.$slots[j.type] ? X("", !0) : (I(), G(_e, { key: 1 }, [
                  Jt(He(j.text), 1)
                ], 64))
              ], 40, Xw),
              Qe(qn, {
                name: T(p)(j.showSelectionGrid),
                css: T(b)
              }, {
                default: Ve(() => [
                  j.showSelectionGrid ? (I(), Ce(Ma, {
                    key: 0,
                    items: j.items,
                    "arrow-navigation": m.arrowNavigation,
                    "hide-navigation": m.hideNavigation,
                    "is-last": m.autoApply && !T(c).keepActionRow,
                    "skip-button-ref": !1,
                    config: m.config,
                    type: j.type,
                    "header-refs": [],
                    "esc-close": m.escClose,
                    "menu-wrap-ref": m.menuWrapRef,
                    "text-input": m.textInput,
                    "aria-labels": m.ariaLabels,
                    onSelected: j.updateModelValue,
                    onToggle: j.toggle
                  }, Ct({
                    "button-icon": Ve(() => [
                      m.$slots["calendar-icon"] ? ge(m.$slots, "calendar-icon", { key: 0 }) : X("", !0),
                      m.$slots["calendar-icon"] ? X("", !0) : (I(), Ce(T(Yr), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    m.$slots[`${j.type}-overlay-value`] ? {
                      name: "item",
                      fn: Ve(({ item: Ie }) => [
                        ge(m.$slots, `${j.type}-overlay-value`, {
                          text: Ie.text,
                          value: Ie.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    m.$slots[`${j.type}-overlay`] ? {
                      name: "overlay",
                      fn: Ve(() => [
                        ge(m.$slots, `${j.type}-overlay`, ht(Pt(W.value(j.type))))
                      ]),
                      key: "1"
                    } : void 0,
                    m.$slots[`${j.type}-overlay-header`] ? {
                      name: "header",
                      fn: Ve(() => [
                        ge(m.$slots, `${j.type}-overlay-header`, {
                          toggle: j.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "onSelected", "onToggle"])) : X("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          T(R)(T(l), e.instance) && m.vertical ? (I(), Ce(sa, {
            key: 1,
            "aria-label": (Q = T(s)) == null ? void 0 : Q.prevMonth,
            disabled: T(D)(!1),
            onActivate: f[2] || (f[2] = (j) => T(y)(!1, !0))
          }, {
            default: Ve(() => [
              m.$slots["arrow-up"] ? ge(m.$slots, "arrow-up", { key: 0 }) : X("", !0),
              m.$slots["arrow-up"] ? X("", !0) : (I(), Ce(T($l), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : X("", !0),
          T(g)(T(l), e.instance) ? (I(), Ce(sa, {
            key: 2,
            ref: "rightIcon",
            disabled: T(D)(!0),
            "aria-label": (ce = T(s)) == null ? void 0 : ce.nextMonth,
            onActivate: f[3] || (f[3] = (j) => T(y)(!0, !0)),
            onSetRef: f[4] || (f[4] = (j) => ae(j, m.disableYearSelect ? 2 : 3))
          }, {
            default: Ve(() => [
              m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? ge(m.$slots, m.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : X("", !0),
              m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? X("", !0) : (I(), Ce(bo(m.vertical ? T(Nl) : T(El)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : X("", !0)
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
    }), b = J([]), v = J(null), y = J(!0), D = J(""), V = J({ startX: 0, endX: 0, startY: 0, endY: 0 }), R = J([]), g = J({ left: "50%" }), P = ne(() => a.calendar ? a.calendar(a.mappedDates) : a.mappedDates), $ = ne(() => a.dayNames ? Array.isArray(a.dayNames) ? a.dayNames : a.dayNames(a.locale, +a.weekStart) : Ob(a.formatLocale, a.locale, +a.weekStart));
    xt(() => {
      r("mount", { cmp: "calendar", refs: b }), l.value.noSwipe || v.value && (v.value.addEventListener("touchstart", x, { passive: !1 }), v.value.addEventListener("touchend", q, { passive: !1 }), v.value.addEventListener("touchmove", ae, { passive: !1 })), a.monthChangeOnScroll && v.value && v.value.addEventListener("wheel", m, { passive: !1 });
    });
    const L = (j) => j ? a.vertical ? "vNext" : "next" : a.vertical ? "vPrevious" : "previous", k = (j, Oe) => {
      if (a.transitions) {
        const Ie = Ft(yn(Z(), a.month, a.year));
        D.value = ft(Ft(yn(Z(), j, Oe)), Ie) ? s.value[L(!0)] : s.value[L(!1)], y.value = !1, Xt(() => {
          y.value = !0;
        });
      }
    }, M = ne(
      () => ({
        [a.calendarClassName]: !!a.calendarClassName
      })
    ), O = ne(() => (j) => {
      const Oe = Rb(j);
      return {
        dp__marker_dot: Oe.type === "dot",
        dp__marker_line: Oe.type === "line"
      };
    }), W = ne(() => (j) => Be(j, d.value)), S = ne(() => ({
      dp__calendar: !0,
      dp__calendar_next: c.value.count > 0 && a.instance !== 0
    })), A = ne(() => (j) => a.hideOffsetDates ? j.current : !0), F = (j) => dn(j, "yyyy-MM-dd"), B = async (j, Oe, Ie) => {
      var U, ve;
      if (r("set-hover-date", j), (ve = (U = j.marker) == null ? void 0 : U.tooltip) != null && ve.length) {
        const Ee = gt(b.value[Oe][Ie]);
        if (Ee) {
          const { width: C, height: h } = Ee.getBoundingClientRect();
          d.value = j.value;
          let _ = { left: `${C / 2}px` }, Y = -50;
          if (await Xt(), R.value[0]) {
            const { left: K, width: E } = R.value[0].getBoundingClientRect();
            K < 0 && (_ = { left: "0" }, Y = 0, g.value.left = `${C / 2}px`), window.innerWidth < K + E && (_ = { right: "0" }, Y = 0, g.value.left = `${E - C / 2}px`);
          }
          p.value = {
            bottom: `${h}px`,
            ..._,
            transform: `translateX(${Y}%)`
          }, r("tooltip-open", j.marker);
        }
      }
    }, w = (j) => {
      d.value && (d.value = null, p.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), r("tooltip-close", j.marker));
    }, x = (j) => {
      V.value.startX = j.changedTouches[0].screenX, V.value.startY = j.changedTouches[0].screenY;
    }, q = (j) => {
      V.value.endX = j.changedTouches[0].screenX, V.value.endY = j.changedTouches[0].screenY, pe();
    }, ae = (j) => {
      a.vertical && !a.inline && j.preventDefault();
    }, pe = () => {
      const j = a.vertical ? "Y" : "X";
      Math.abs(V.value[`start${j}`] - V.value[`end${j}`]) > 10 && r("handle-swipe", V.value[`start${j}`] > V.value[`end${j}`] ? "right" : "left");
    }, ee = (j, Oe, Ie) => {
      j && (Array.isArray(b.value[Oe]) ? b.value[Oe][Ie] = j : b.value[Oe] = [j]), a.arrowNavigation && o(b.value, "calendar");
    }, m = (j) => {
      a.monthChangeOnScroll && (j.preventDefault(), r("handle-scroll", j));
    }, f = (j) => u.value.type === "local" ? Pl(j.value, { weekStartsOn: +a.weekStart }) : u.value.type === "iso" ? Ml(j.value) : typeof u.value.type == "function" ? u.value.type(j.value) : "", N = (j) => {
      const Oe = j[0];
      return u.value.hideOnOffsetDates ? j.some((Ie) => Ie.current) ? f(Oe) : "" : f(Oe);
    }, Q = (j, Oe) => {
      In(j, l.value), r("select-date", Oe);
    }, ce = (j) => {
      In(j, l.value);
    };
    return t({ triggerTransition: k }), (j, Oe) => {
      var Ie;
      return I(), G("div", {
        class: Ne(S.value)
      }, [
        ke("div", {
          ref_key: "calendarWrapRef",
          ref: v,
          role: "grid",
          class: Ne(M.value),
          "aria-label": (Ie = T(i)) == null ? void 0 : Ie.calendarWrap
        }, [
          ke("div", e_, [
            j.weekNumbers ? (I(), G("div", t_, He(j.weekNumName), 1)) : X("", !0),
            (I(!0), G(_e, null, qe($.value, (U, ve) => {
              var Ee, C;
              return I(), G("div", {
                key: ve,
                class: "dp__calendar_header_item",
                role: "gridcell",
                "aria-label": (C = (Ee = T(i)) == null ? void 0 : Ee.weekDay) == null ? void 0 : C.call(Ee, ve)
              }, [
                j.$slots["calendar-header"] ? ge(j.$slots, "calendar-header", {
                  key: 0,
                  day: U,
                  index: ve
                }) : X("", !0),
                j.$slots["calendar-header"] ? X("", !0) : (I(), G(_e, { key: 1 }, [
                  Jt(He(U), 1)
                ], 64))
              ], 8, n_);
            }), 128))
          ]),
          r_,
          Qe(qn, {
            name: D.value,
            css: !!j.transitions
          }, {
            default: Ve(() => {
              var U;
              return [
                y.value ? (I(), G("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((U = T(i)) == null ? void 0 : U.calendarDays) || void 0
                }, [
                  (I(!0), G(_e, null, qe(P.value, (ve, Ee) => (I(), G("div", {
                    key: Ee,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    j.weekNumbers ? (I(), G("div", o_, [
                      ke("div", s_, He(N(ve.days)), 1)
                    ])) : X("", !0),
                    (I(!0), G(_e, null, qe(ve.days, (C, h) => {
                      var _, Y, K;
                      return I(), G("div", {
                        id: F(C.value),
                        ref_for: !0,
                        ref: (E) => ee(E, Ee, h),
                        key: h + Ee,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (C.classData.dp__active_date || C.classData.dp__range_start || C.classData.dp__range_start) ?? void 0,
                        "aria-disabled": C.classData.dp__cell_disabled || void 0,
                        "aria-label": (Y = (_ = T(i)) == null ? void 0 : _.day) == null ? void 0 : Y.call(_, C),
                        tabindex: "0",
                        onClick: Ke((E) => Q(E, C), ["prevent"]),
                        onKeydown: [
                          Se((E) => j.$emit("select-date", C), ["enter"]),
                          Se((E) => j.$emit("handle-space", C), ["space"])
                        ],
                        onMouseenter: (E) => B(C, Ee, h),
                        onMouseleave: (E) => w(C)
                      }, [
                        ke("div", {
                          class: Ne(["dp__cell_inner", C.classData])
                        }, [
                          j.$slots.day && A.value(C) ? ge(j.$slots, "day", {
                            key: 0,
                            day: +C.text,
                            date: C.value
                          }) : X("", !0),
                          j.$slots.day ? X("", !0) : (I(), G(_e, { key: 1 }, [
                            Jt(He(C.text), 1)
                          ], 64)),
                          C.marker && A.value(C) ? (I(), G(_e, { key: 2 }, [
                            j.$slots.marker ? ge(j.$slots, "marker", {
                              key: 0,
                              marker: C.marker,
                              day: +C.text,
                              date: C.value
                            }) : (I(), G("div", {
                              key: 1,
                              class: Ne(O.value(C.marker)),
                              style: Dt(C.marker.color ? { backgroundColor: C.marker.color } : {})
                            }, null, 6))
                          ], 64)) : X("", !0),
                          W.value(C.value) ? (I(), G("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: R,
                            class: "dp__marker_tooltip",
                            style: Dt(p.value)
                          }, [
                            (K = C.marker) != null && K.tooltip ? (I(), G("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: ce
                            }, [
                              (I(!0), G(_e, null, qe(C.marker.tooltip, (E, oe) => (I(), G("div", {
                                key: oe,
                                class: "dp__tooltip_text"
                              }, [
                                j.$slots["marker-tooltip"] ? ge(j.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: E,
                                  day: C.value
                                }) : X("", !0),
                                j.$slots["marker-tooltip"] ? X("", !0) : (I(), G(_e, { key: 1 }, [
                                  ke("div", {
                                    class: "dp__tooltip_mark",
                                    style: Dt(E.color ? { backgroundColor: E.color } : {})
                                  }, null, 4),
                                  ke("div", null, He(E.text), 1)
                                ], 64))
                              ]))), 128)),
                              ke("div", {
                                class: "dp__arrow_bottom_tp",
                                style: Dt(g.value)
                              }, null, 4)
                            ])) : X("", !0)
                          ], 4)) : X("", !0)
                        ], 2)
                      ], 40, l_);
                    }), 128))
                  ]))), 128))
                ], 8, a_)) : X("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, Zw)
      ], 2);
    };
  }
}), _u = (e) => Array.isArray(e), u_ = (e, t, n, r) => {
  const a = J([]), o = J(/* @__PURE__ */ new Date()), { modelValue: s, calendars: l, time: i } = ka(e, t), { defaultedMultiCalendars: c, defaultedStartTime: u, defaultedRange: d, defaultedTz: p, propDates: b } = st(e), { validateMonthYearInRange: v, isDisabled: y, isDateRangeAllowed: D, checkMinMaxRange: V } = Gn(e), { updateTimeValues: R, getSetDateTime: g, setTime: P, assignStartTime: $, validateTime: L, disabledTimesConfig: k } = af(e, i, s, r), M = ne(
    () => (H) => l.value[H] ? l.value[H].month : 0
  ), O = ne(
    () => (H) => l.value[H] ? l.value[H].year : 0
  ), W = (H, se, we) => {
    var Pe, te;
    l.value[H] || (l.value[H] = { month: 0, year: 0 }), l.value[H].month = vu(se) ? (Pe = l.value[H]) == null ? void 0 : Pe.month : se, l.value[H].year = vu(we) ? (te = l.value[H]) == null ? void 0 : te.year : we;
  }, S = () => {
    e.autoApply && t("select-date");
  };
  ut(
    s,
    (H, se) => {
      JSON.stringify(H) !== JSON.stringify(se) && B();
    },
    { deep: !0 }
  ), xt(() => {
    e.shadow || (s.value || (ce(), u.value && $(u.value)), B(!0), e.focusStartDate && e.startDate && ce());
  });
  const A = ne(() => {
    var H;
    return (H = e.flow) != null && H.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), F = () => {
    e.autoApply && A.value && t("auto-apply");
  }, B = (H = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? (a.value = s.value, m(H)) : q(s.value, H);
    if (c.value.count && H && !e.startDate)
      return x(Z(), H);
  }, w = () => Array.isArray(s.value) && d.value.enabled ? Fe(s.value[0]) === Fe(s.value[1] ?? s.value[0]) : !1, x = (H, se = !1) => {
    if ((!c.value.count || !c.value.static || se) && W(0, Fe(H), $e(H)), c.value.count && (!c.value.solo || !s.value || w()))
      for (let we = 1; we < c.value.count; we++) {
        const Pe = Ze(Z(), { month: M.value(we - 1), year: O.value(we - 1) }), te = _d(Pe, { months: 1 });
        l.value[we] = { month: Fe(te), year: $e(te) };
      }
  }, q = (H, se) => {
    x(H), P("hours", Kt(H)), P("minutes", fn(H)), P("seconds", $r(H)), c.value.count && se && Q();
  }, ae = (H) => {
    if (c.value.count) {
      if (c.value.solo)
        return 0;
      const se = Fe(H[0]), we = Fe(H[1]);
      return Math.abs(we - se) < c.value.count ? 0 : 1;
    }
    return 1;
  }, pe = (H, se) => {
    H[1] && d.value.showLastInRange ? x(H[ae(H)], se) : x(H[0], se);
    const we = (Pe, te) => [
      Pe(H[0]),
      H[1] ? Pe(H[1]) : i[te][1]
    ];
    P("hours", we(Kt, "hours")), P("minutes", we(fn, "minutes")), P("seconds", we($r, "seconds"));
  }, ee = (H, se) => {
    if ((d.value.enabled || e.weekPicker) && !e.multiDates)
      return pe(H, se);
    if (e.multiDates && se) {
      const we = H[H.length - 1];
      return q(we, se);
    }
  }, m = (H) => {
    const se = s.value;
    ee(se, H), c.value.count && c.value.solo && Q();
  }, f = (H, se) => {
    const we = Ze(Z(), { month: M.value(se), year: O.value(se) }), Pe = H < 0 ? Gt(we, 1) : Nr(we, 1);
    v(Fe(Pe), $e(Pe), H < 0, e.preventMinMaxNavigation) && (W(se, Fe(Pe), $e(Pe)), t("update-month-year", { instance: se, month: Fe(Pe), year: $e(Pe) }), c.value.count && !c.value.solo && N(se), n());
  }, N = (H) => {
    for (let se = H - 1; se >= 0; se--) {
      const we = Nr(Ze(Z(), { month: M.value(se + 1), year: O.value(se + 1) }), 1);
      W(se, Fe(we), $e(we));
    }
    for (let se = H + 1; se <= c.value.count - 1; se++) {
      const we = Gt(Ze(Z(), { month: M.value(se - 1), year: O.value(se - 1) }), 1);
      W(se, Fe(we), $e(we));
    }
  }, Q = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const H = Z(
        Z(s.value[1] ? s.value[1] : Gt(s.value[0], 1))
      ), [se, we] = [Fe(s.value[0]), $e(s.value[0])], [Pe, te] = [Fe(s.value[1]), $e(s.value[1])];
      (se !== Pe || se === Pe && we !== te) && c.value.solo && W(1, Fe(H), $e(H));
    } else
      s.value && !Array.isArray(s.value) && (W(0, Fe(s.value), $e(s.value)), x(Z()));
  }, ce = () => {
    e.startDate && (W(0, Fe(Z(e.startDate)), $e(Z(e.startDate))), c.value.count && N(0));
  }, j = (H, se) => {
    if (e.monthChangeOnScroll) {
      const we = (/* @__PURE__ */ new Date()).getTime() - o.value.getTime(), Pe = Math.abs(H.deltaY);
      let te = 500;
      Pe > 1 && (te = 100), Pe > 100 && (te = 0), we > te && (o.value = /* @__PURE__ */ new Date(), f(e.monthChangeOnScroll !== "inverse" ? -H.deltaY : H.deltaY, se));
    }
  }, Oe = (H, se, we = !1) => {
    e.monthChangeOnArrows && e.vertical === we && Ie(H, se);
  }, Ie = (H, se) => {
    f(H === "right" ? -1 : 1, se);
  }, U = (H) => {
    if (b.value.markers)
      return lo(H.value, b.value.markers);
  }, ve = (H, se) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [H == 0, !0];
      case "fair":
        return [H == 0 || se > H, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, Ee = (H, se, we, Pe) => {
    if (e.sixWeeks && H.length < 6) {
      const te = 6 - H.length, he = (se.getDay() + 7 - Pe) % 7, ye = 6 - (we.getDay() + 7 - Pe) % 7, [Bt, tn] = ve(he, ye);
      for (let Kn = 1; Kn <= te; Kn++)
        if (tn ? !!(Kn % 2) == Bt : Bt) {
          const _n = H[0].days[0], Fo = C(Wt(_n.value, -7), Fe(se));
          H.unshift({ days: Fo });
        } else {
          const _n = H[H.length - 1], Fo = _n.days[_n.days.length - 1], of = C(Wt(Fo.value, 1), Fe(se));
          H.push({ days: of });
        }
    }
    return H;
  }, C = (H, se) => {
    const we = Z(H), Pe = [];
    for (let te = 0; te < 7; te++) {
      const he = Wt(we, te), ye = Fe(he) !== se;
      Pe.push({
        text: e.hideOffsetDates && ye ? "" : he.getDate(),
        value: he,
        current: !ye,
        classData: {}
      });
    }
    return Pe;
  }, h = (H, se) => {
    const we = [], Pe = new Date(se, H), te = new Date(se, H + 1, 0), he = e.weekStart, ye = mn(Pe, { weekStartsOn: he }), Bt = (tn) => {
      const Kn = C(tn, H);
      if (we.push({ days: Kn }), !we[we.length - 1].days.some(
        (_n) => Be(Ft(_n.value), Ft(te))
      )) {
        const _n = Wt(tn, 7);
        Bt(_n);
      }
    };
    return Bt(ye), Ee(we, Pe, te, he);
  }, _ = (H) => {
    const se = Fn(Z(H.value), i.hours, i.minutes, ue());
    t("date-update", se), e.multiDates ? Ll(se, s, e.multiDatesLimit) : s.value = se, r(), Xt().then(() => {
      F();
    });
  }, Y = (H) => d.value.noDisabledRange ? qd(a.value[0], H).some((se) => y(se)) : !1, K = () => {
    a.value = s.value ? s.value.slice() : [], a.value.length === 2 && !(d.value.fixedStart || d.value.fixedEnd) && (a.value = []);
  }, E = (H, se) => {
    const we = [
      Z(H.value),
      Wt(Z(H.value), +d.value.autoRange)
    ];
    D(we) ? (se && oe(H.value), a.value = we) : t("invalid-date", H.value);
  }, oe = (H) => {
    const se = Fe(Z(H)), we = $e(Z(H));
    if (W(0, se, we), c.value.count > 0)
      for (let Pe = 1; Pe < c.value.count; Pe++) {
        const te = Yb(
          Ze(Z(H), { year: M.value(Pe - 1), month: O.value(Pe - 1) })
        );
        W(Pe, te.month, te.year);
      }
  }, ie = (H) => {
    if (Y(H.value) || !V(H.value, s.value, d.value.fixedStart ? 0 : 1))
      return t("invalid-date", H.value);
    a.value = tf(Z(H.value), s, t, d);
  }, le = (H, se) => {
    if (K(), d.value.autoRange)
      return E(H, se);
    if (d.value.fixedStart || d.value.fixedEnd)
      return ie(H);
    a.value[0] ? V(Z(H.value), s.value) && !Y(H.value) ? it(Z(H.value), Z(a.value[0])) ? (a.value.unshift(Z(H.value)), t("range-end", a.value[0])) : (a.value[1] = Z(H.value), t("range-end", a.value[1])) : (e.autoApply && t("auto-apply-invalid", H.value), t("invalid-date", H.value)) : (a.value[0] = Z(H.value), t("range-start", a.value[0]));
  }, ue = (H = !0) => e.enableSeconds ? Array.isArray(i.seconds) ? H ? i.seconds[0] : i.seconds[1] : i.seconds : 0, re = (H) => {
    a.value[H] = Fn(
      a.value[H],
      i.hours[H],
      i.minutes[H],
      ue(H !== 1)
    );
  }, de = () => {
    var H, se;
    a.value[0] && a.value[1] && +((H = a.value) == null ? void 0 : H[0]) > +((se = a.value) == null ? void 0 : se[1]) && (a.value.reverse(), t("range-start", a.value[0]), t("range-end", a.value[1]));
  }, me = () => {
    a.value.length && (a.value[0] && !a.value[1] ? re(0) : (re(0), re(1), r()), de(), s.value = a.value.slice(), Vo(a.value, t, e.autoApply, e.modelAuto));
  }, be = (H, se = !1) => {
    if (y(H.value) || !H.current && e.hideOffsetDates)
      return t("invalid-date", H.value);
    if (!d.value.enabled)
      return _(H);
    _u(i.hours) && _u(i.minutes) && !e.multiDates && (le(H, se), me());
  }, Te = (H, se) => {
    var we;
    W(H, se.month, se.year), c.value.count && !c.value.solo && N(H), t("update-month-year", { instance: H, month: se.month, year: se.year }), n(c.value.solo ? H : void 0);
    const Pe = (we = e.flow) != null && we.length ? e.flow[e.flowStep] : void 0;
    !se.fromNav && (Pe === rn.month || Pe === rn.year) && r();
  }, Re = (H, se) => {
    ef({
      value: H,
      modelValue: s,
      range: d.value.enabled,
      timezone: se ? void 0 : p.value.timezone
    }), S(), e.multiCalendars && Xt().then(() => B(!0));
  }, je = () => {
    d.value.enabled ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = it(Z(), s.value[0]) ? [Z(), s.value[0]] : [s.value[0], Z()] : s.value = [Z()] : s.value = Z(), S();
  }, Ge = () => {
    if (Array.isArray(s.value))
      if (e.multiDates) {
        const H = lt();
        s.value[s.value.length - 1] = g(H);
      } else
        s.value = s.value.map((H, se) => H && g(H, se));
    else
      s.value = g(s.value);
    t("time-update");
  }, lt = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null;
  return {
    calendars: l,
    modelValue: s,
    month: M,
    year: O,
    time: i,
    disabledTimesConfig: k,
    validateTime: L,
    getCalendarDays: h,
    getMarker: U,
    handleScroll: j,
    handleSwipe: Ie,
    handleArrow: Oe,
    selectDate: be,
    updateMonthYear: Te,
    presetDate: Re,
    selectCurrentDate: je,
    updateTime: (H, se = !0, we = !1) => {
      R(H, se, we, Ge);
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
      handleArrow: v,
      handleScroll: y,
      handleSwipe: D,
      selectDate: V,
      updateMonthYear: R,
      presetDate: g,
      selectCurrentDate: P,
      updateTime: $
    } = u_(a, r, pe, ee), L = vr(), { setHoverDate: k, getDayClassData: M, clearHoverDate: O } = pw(i, a), { defaultedMultiCalendars: W } = st(a), S = J([]), A = J([]), F = J(null), B = Vt(L, "calendar"), w = Vt(L, "monthYear"), x = Vt(L, "timePicker"), q = (f) => {
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
    const ae = ne(() => (f) => p(s.value(f), l.value(f)).map((N) => ({
      ...N,
      days: N.days.map((Q) => (Q.marker = b(Q), Q.classData = M(Q), Q))
    })));
    function pe(f) {
      var N;
      f || f === 0 ? (N = A.value[f]) == null || N.triggerTransition(s.value(f), l.value(f)) : A.value.forEach((Q, ce) => Q.triggerTransition(s.value(ce), l.value(ce)));
    }
    function ee() {
      r("update-flow-step");
    }
    const m = (f, N = !1) => {
      V(f, N), a.spaceConfirm && r("select-date");
    };
    return t({
      clearHoverDate: O,
      presetDate: g,
      selectCurrentDate: P,
      toggleMonthPicker: (f, N, Q = 0) => {
        var ce;
        (ce = S.value[Q]) == null || ce.toggleMonthPicker(f, N);
      },
      toggleYearPicker: (f, N, Q = 0) => {
        var ce;
        (ce = S.value[Q]) == null || ce.toggleYearPicker(f, N);
      },
      toggleTimePicker: (f, N, Q) => {
        var ce;
        (ce = F.value) == null || ce.toggleTimePicker(f, N, Q);
      },
      handleArrow: v,
      updateMonthYear: R,
      getSidebarProps: () => ({
        modelValue: i,
        month: s,
        year: l,
        time: c,
        updateTime: $,
        updateMonthYear: R,
        selectDate: V,
        presetDate: g
      })
    }), (f, N) => (I(), G(_e, null, [
      Qe(No, {
        "multi-calendars": T(W).count,
        collapse: f.collapse
      }, {
        default: Ve(({ instance: Q, index: ce }) => [
          f.disableMonthYearSelect ? X("", !0) : (I(), Ce(Jw, _t({
            key: 0,
            ref: (j) => {
              j && (S.value[ce] = j);
            },
            months: T(Yd)(f.formatLocale, f.locale, f.monthNameFormat),
            years: T(Vl)(f.yearRange, f.reverseYears),
            month: T(s)(Q),
            year: T(l)(Q),
            instance: Q
          }, f.$props, {
            onMount: N[0] || (N[0] = (j) => q(T(pr).header)),
            onResetFlow: N[1] || (N[1] = (j) => f.$emit("reset-flow")),
            onUpdateMonthYear: (j) => T(R)(Q, j),
            onOverlayClosed: N[2] || (N[2] = (j) => f.$emit("focus-menu"))
          }), Ct({ _: 2 }, [
            qe(T(w), (j, Oe) => ({
              name: j,
              fn: Ve((Ie) => [
                ge(f.$slots, j, ht(Pt(Ie)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          Qe(i_, _t({
            ref: (j) => {
              j && (A.value[ce] = j);
            },
            "mapped-dates": ae.value(Q),
            month: T(s)(Q),
            year: T(l)(Q),
            instance: Q
          }, f.$props, {
            onSelectDate: (j) => T(V)(j, Q !== 1),
            onHandleSpace: (j) => m(j, Q !== 1),
            onSetHoverDate: N[3] || (N[3] = (j) => T(k)(j)),
            onHandleScroll: (j) => T(y)(j, Q),
            onHandleSwipe: (j) => T(D)(j, Q),
            onMount: N[4] || (N[4] = (j) => q(T(pr).calendar)),
            onResetFlow: N[5] || (N[5] = (j) => f.$emit("reset-flow")),
            onTooltipOpen: N[6] || (N[6] = (j) => f.$emit("tooltip-open", j)),
            onTooltipClose: N[7] || (N[7] = (j) => f.$emit("tooltip-close", j))
          }), Ct({ _: 2 }, [
            qe(T(B), (j, Oe) => ({
              name: j,
              fn: Ve((Ie) => [
                ge(f.$slots, j, ht(Pt({ ...Ie })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      f.enableTimePicker ? (I(), G("div", c_, [
        f.$slots["time-picker"] ? ge(f.$slots, "time-picker", ht(_t({ key: 0 }, { time: T(c), updateTime: T($) }))) : (I(), Ce(rf, _t({
          key: 1,
          ref_key: "timePickerRef",
          ref: F
        }, f.$props, {
          hours: T(c).hours,
          minutes: T(c).minutes,
          seconds: T(c).seconds,
          "internal-model-value": f.internalModelValue,
          "disabled-times-config": T(u),
          "validate-time": T(d),
          onMount: N[8] || (N[8] = (Q) => q(T(pr).timePicker)),
          "onUpdate:hours": N[9] || (N[9] = (Q) => T($)(Q)),
          "onUpdate:minutes": N[10] || (N[10] = (Q) => T($)(Q, !1)),
          "onUpdate:seconds": N[11] || (N[11] = (Q) => T($)(Q, !1, !0)),
          onResetFlow: N[12] || (N[12] = (Q) => f.$emit("reset-flow")),
          onOverlayClosed: N[13] || (N[13] = (Q) => f.$emit("time-picker-close")),
          onOverlayOpened: N[14] || (N[14] = (Q) => f.$emit("time-picker-open", Q)),
          onAmPmChange: N[15] || (N[15] = (Q) => f.$emit("am-pm-change", Q))
        }), Ct({ _: 2 }, [
          qe(T(x), (Q, ce) => ({
            name: Q,
            fn: Ve((j) => [
              ge(f.$slots, Q, ht(Pt(j)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : X("", !0)
    ], 64));
  }
}), f_ = (e, t) => {
  const n = J(), { defaultedMultiCalendars: r, defaultedConfig: a, defaultedHighlight: o, defaultedRange: s, propDates: l } = st(e), { modelValue: i, year: c, month: u, calendars: d } = ka(e, t), { isDisabled: p } = Gn(e), { selectYear: b, groupedYears: v, showYearPicker: y, isDisabled: D, toggleYearPicker: V, handleYearSelect: R, handleYear: g } = nf({
    modelValue: i,
    multiCalendars: r,
    highlight: o,
    calendars: d,
    propDates: l,
    month: u,
    year: c,
    props: e,
    emit: t
  }), P = (F, B) => [F, B].map((w) => dn(w, "MMMM", { locale: e.formatLocale })).join("-"), $ = ne(() => (F) => i.value ? Array.isArray(i.value) ? i.value.some((B) => pu(F, B)) : pu(i.value, F) : !1), L = (F) => {
    if (s.value.enabled) {
      if (Array.isArray(i.value)) {
        const B = Be(F, i.value[0]) || Be(F, i.value[1]);
        return Eo(i.value, n.value, F) && !B;
      }
      return !1;
    }
    return !1;
  }, k = (F, B) => F.quarter === lu(B) && F.year === $e(B), M = (F) => typeof o.value == "function" ? o.value({ quarter: lu(F), year: $e(F) }) : !!o.value.quarters.find((B) => k(B, F)), O = ne(() => (F) => {
    const B = Ze(/* @__PURE__ */ new Date(), { year: c.value(F) });
    return Vg({
      start: Sd(B),
      end: Ig(B)
    }).map((w) => {
      const x = lr(w), q = iu(w), ae = p(w), pe = L(x), ee = M(x);
      return {
        text: P(x, q),
        value: x,
        active: $.value(x),
        highlighted: ee,
        disabled: ae,
        isBetween: pe
      };
    });
  }), W = (F) => {
    Ll(F, i, e.multiDatesLimit), t("auto-apply", !0);
  }, S = (F) => {
    i.value = Yl(i, F, t), Vo(i.value, t, e.autoApply, e.modelAuto);
  }, A = (F) => {
    i.value = F, t("auto-apply");
  };
  return {
    defaultedConfig: a,
    defaultedMultiCalendars: r,
    groupedYears: v,
    year: c,
    isDisabled: D,
    quarters: O,
    showYearPicker: y,
    modelValue: i,
    setHoverDate: (F) => {
      n.value = F;
    },
    selectYear: b,
    selectQuarter: (F, B, w) => {
      if (!w)
        return d.value[B].month = Fe(iu(F)), e.multiDates ? W(F) : s.value.enabled ? S(F) : A(F);
    },
    toggleYearPicker: V,
    handleYearSelect: R,
    handleYear: g
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
      showYearPicker: v,
      setHoverDate: y,
      selectQuarter: D,
      toggleYearPicker: V,
      handleYearSelect: R,
      handleYear: g
    } = f_(a, r);
    return t({ getSidebarProps: () => ({
      modelValue: b,
      year: u,
      selectQuarter: D,
      handleYearSelect: R,
      handleYear: g
    }) }), (P, $) => (I(), Ce(No, {
      "multi-calendars": T(l).count,
      collapse: P.collapse,
      stretch: ""
    }, {
      default: Ve(({ instance: L }) => [
        ke("div", {
          class: "dp-quarter-picker-wrap",
          style: Dt({ minHeight: `${T(i).modeHeight}px` })
        }, [
          ke("div", null, [
            Qe(Zd, _t(P.$props, {
              items: T(c)(L),
              instance: L,
              "show-year-picker": T(v)[L],
              year: T(u)(L),
              "is-disabled": (k) => T(d)(L, k),
              onHandleYear: (k) => T(g)(L, k),
              onYearSelect: (k) => T(R)(k, L),
              onToggleYearPicker: (k) => T(V)(L, k == null ? void 0 : k.flow, k == null ? void 0 : k.show)
            }), Ct({ _: 2 }, [
              qe(T(s), (k, M) => ({
                name: k,
                fn: Ve((O) => [
                  ge(P.$slots, k, ht(Pt(O)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          ke("div", p_, [
            (I(!0), G(_e, null, qe(T(p)(L), (k, M) => (I(), G("div", { key: M }, [
              ke("button", {
                type: "button",
                class: Ne(["dp--qr-btn", {
                  "dp--qr-btn-active": k.active,
                  "dp--qr-btn-between": k.isBetween,
                  "dp--qr-btn-disabled": k.disabled,
                  "dp--highlighted": k.highlighted
                }]),
                disabled: k.disabled,
                onClick: (O) => T(D)(k.value, L, k.disabled),
                onMouseover: (O) => T(y)(k.value)
              }, [
                P.$slots.quarter ? ge(P.$slots, "quarter", {
                  key: 0,
                  value: k.value,
                  text: k.text
                }) : (I(), G(_e, { key: 1 }, [
                  Jt(He(k.text), 1)
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
    const r = n, a = e, o = J(null), s = ne(() => {
      const { openOnTop: C, ...h } = a;
      return {
        ...h,
        flowStep: M.value,
        collapse: a.collapse,
        noOverlayFocus: a.noOverlayFocus,
        menuWrapRef: o.value
      };
    }), { setMenuFocused: l, setShiftKey: i, control: c } = Xd(), u = vr(), { defaultedTextInput: d, defaultedInline: p, defaultedConfig: b } = st(a), v = J(null), y = J(0), D = J(null), V = J(!1), R = J(null);
    xt(() => {
      if (!a.shadow) {
        V.value = !0, g(), window.addEventListener("resize", g);
        const C = gt(o);
        if (C && !d.value.enabled && !p.value.enabled && (l(!0), F()), C) {
          const h = (_) => {
            b.value.allowPreventDefault && _.preventDefault(), In(_, b.value, !0);
          };
          C.addEventListener("pointerdown", h), C.addEventListener("mousedown", h);
        }
      }
    }), Fr(() => {
      window.removeEventListener("resize", g);
    });
    const g = () => {
      const C = gt(D);
      C && (y.value = C.getBoundingClientRect().width);
    }, { arrowRight: P, arrowLeft: $, arrowDown: L, arrowUp: k } = zn(), { flowStep: M, updateFlowStep: O, childMount: W, resetFlow: S } = mw(a, r, R), A = ne(() => a.monthPicker ? Cw : a.yearPicker ? Ew : a.timePicker ? Kw : a.quarterPicker ? h_ : d_), F = () => {
      const C = gt(o);
      C && C.focus({ preventScroll: !0 });
    }, B = ne(() => {
      var C;
      return ((C = R.value) == null ? void 0 : C.getSidebarProps()) || {};
    }), w = () => {
      a.openOnTop && r("recalculate-position");
    }, x = Vt(u, "action"), q = ne(() => a.monthPicker || a.yearPicker ? Vt(u, "monthYear") : a.timePicker ? Vt(u, "timePicker") : Vt(u, "shared")), ae = ne(() => a.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), pe = ne(() => ({
      dp__menu_disabled: a.disabled,
      dp__menu_readonly: a.readonly,
      "dp-menu-loading": a.loading
    })), ee = ne(
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
    }, N = (C) => {
      if (a.arrowNavigation) {
        if (C === "up")
          return k();
        if (C === "down")
          return L();
        if (C === "left")
          return $();
        if (C === "right")
          return P();
      } else
        C === "left" || C === "up" ? Ie("handleArrow", "left", 0, C === "up") : Ie("handleArrow", "right", 0, C === "down");
    }, Q = (C) => {
      i(C.shiftKey), !a.disableMonthYearSelect && C.code === "Tab" && C.target.classList.contains("dp__menu") && c.value.shiftKeyInMenu && (C.preventDefault(), In(C, b.value, !0), r("close-picker"));
    }, ce = () => {
      F(), r("time-picker-close");
    }, j = (C) => {
      var h, _, Y;
      (h = R.value) == null || h.toggleTimePicker(!1, !1), (_ = R.value) == null || _.toggleMonthPicker(!1, !1, C), (Y = R.value) == null || Y.toggleYearPicker(!1, !1, C);
    }, Oe = (C, h = 0) => {
      var _, Y, K;
      return C === "month" ? (_ = R.value) == null ? void 0 : _.toggleMonthPicker(!1, !0, h) : C === "year" ? (Y = R.value) == null ? void 0 : Y.toggleYearPicker(!1, !0, h) : C === "time" ? (K = R.value) == null ? void 0 : K.toggleTimePicker(!0, !1) : j(h);
    }, Ie = (C, ...h) => {
      var _, Y;
      (_ = R.value) != null && _[C] && ((Y = R.value) == null || Y[C](...h));
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
      var _, Y, K;
      return I(), G("div", {
        id: C.uid ? `dp-menu-${C.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: o,
        tabindex: "0",
        role: "dialog",
        "aria-label": (_ = C.ariaLabels) == null ? void 0 : _.menu,
        class: Ne(ee.value),
        onMouseleave: Ee,
        onClick: m,
        onKeydown: [
          Se(f, ["esc"]),
          h[18] || (h[18] = Se(Ke((E) => N("left"), ["prevent"]), ["left"])),
          h[19] || (h[19] = Se(Ke((E) => N("up"), ["prevent"]), ["up"])),
          h[20] || (h[20] = Se(Ke((E) => N("down"), ["prevent"]), ["down"])),
          h[21] || (h[21] = Se(Ke((E) => N("right"), ["prevent"]), ["right"])),
          Q
        ]
      }, [
        (C.disabled || C.readonly) && T(p).enabled || C.loading ? (I(), G("div", {
          key: 0,
          class: Ne(pe.value)
        }, [
          C.loading ? (I(), G("div", y_, b_)) : X("", !0)
        ], 2)) : X("", !0),
        !T(p).enabled && !C.teleportCenter ? (I(), G("div", {
          key: 1,
          class: Ne(ae.value)
        }, null, 2)) : X("", !0),
        ke("div", {
          ref_key: "innerMenuRef",
          ref: D,
          class: Ne({
            dp__menu_content_wrapper: ((Y = C.presetDates) == null ? void 0 : Y.length) || !!C.$slots["left-sidebar"] || !!C.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && ((K = C.presetDates) == null ? void 0 : K.length) || !!C.$slots["left-sidebar"] || !!C.$slots["right-sidebar"]
          }),
          style: Dt({ "--dp-menu-width": `${y.value}px` })
        }, [
          C.$slots["left-sidebar"] ? (I(), G("div", w_, [
            ge(C.$slots, "left-sidebar", ht(Pt(B.value)))
          ])) : X("", !0),
          C.presetDates.length ? (I(), G("div", {
            key: 1,
            class: Ne({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            (I(!0), G(_e, null, qe(C.presetDates, (E, oe) => (I(), G(_e, { key: oe }, [
              E.slot ? ge(C.$slots, E.slot, {
                key: 0,
                presetDate: ve,
                label: E.label,
                value: E.value
              }) : (I(), G("button", {
                key: 1,
                type: "button",
                style: Dt(E.style || {}),
                class: Ne(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                onClick: Ke((ie) => ve(E.value, E.noTz), ["prevent"]),
                onKeydown: [
                  Se(Ke((ie) => ve(E.value, E.noTz), ["prevent"]), ["enter"]),
                  Se(Ke((ie) => ve(E.value, E.noTz), ["prevent"]), ["space"])
                ]
              }, He(E.label), 47, __))
            ], 64))), 128))
          ], 2)) : X("", !0),
          ke("div", {
            ref_key: "calendarWrapperRef",
            ref: v,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (I(), Ce(bo(A.value), _t({
              ref_key: "dynCmpRef",
              ref: R
            }, s.value, {
              "flow-step": T(M),
              onMount: T(W),
              onUpdateFlowStep: T(O),
              onResetFlow: T(S),
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
            }), Ct({ _: 2 }, [
              qe(q.value, (E, oe) => ({
                name: E,
                fn: Ve((ie) => [
                  ge(C.$slots, E, ht(Pt({ ...ie })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          C.$slots["right-sidebar"] ? (I(), G("div", x_, [
            ge(C.$slots, "right-sidebar", ht(Pt(B.value)))
          ])) : X("", !0),
          C.$slots["action-extra"] ? (I(), G("div", k_, [
            C.$slots["action-extra"] ? ge(C.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: U
            }) : X("", !0)
          ])) : X("", !0)
        ], 6),
        !C.autoApply || T(b).keepActionRow ? (I(), Ce(_w, _t({
          key: 2,
          "menu-mount": V.value
        }, s.value, {
          "calendar-width": y.value,
          onClosePicker: h[15] || (h[15] = (E) => C.$emit("close-picker")),
          onSelectDate: h[16] || (h[16] = (E) => C.$emit("select-date")),
          onInvalidSelect: h[17] || (h[17] = (E) => C.$emit("invalid-select")),
          onSelectNow: U
        }), Ct({ _: 2 }, [
          qe(T(x), (E, oe) => ({
            name: E,
            fn: Ve((ie) => [
              ge(C.$slots, E, ht(Pt({ ...ie })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : X("", !0)
      ], 42, v_);
    };
  }
}), M_ = typeof window < "u" ? window : void 0, ps = () => {
}, T_ = (e) => zs() ? (Ru(e), !0) : !1, P_ = (e, t, n, r) => {
  if (!e)
    return ps;
  let a = ps;
  const o = ut(
    () => T(e),
    (l) => {
      a(), l && (l.addEventListener(t, n, r), a = () => {
        l.removeEventListener(t, n, r), a = ps;
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
    const r = n, a = e, o = vr(), s = J(!1), l = Wa(a, "modelValue"), i = Wa(a, "timezone"), c = J(null), u = J(null), d = J(null), p = J(!1), b = J(null), v = J(!1), y = J(!1), D = J(!1), { setMenuFocused: V, setShiftKey: R } = Xd(), { clearArrowNav: g } = zn(), { validateDate: P, isValidTime: $ } = Gn(a), { defaultedTransitions: L, defaultedTextInput: k, defaultedInline: M, defaultedConfig: O, defaultedRange: W } = st(a), { menuTransition: S, showTransition: A } = xa(L);
    xt(() => {
      N(a.modelValue), Xt().then(() => {
        if (!M.value.enabled) {
          const te = pe(b.value);
          te == null || te.addEventListener("scroll", C), window == null || window.addEventListener("resize", h);
        }
      }), M.value.enabled && (s.value = !0), window == null || window.addEventListener("keyup", _), window == null || window.addEventListener("keydown", Y);
    }), Fr(() => {
      if (!M.value.enabled) {
        const te = pe(b.value);
        te == null || te.removeEventListener("scroll", C), window == null || window.removeEventListener("resize", h);
      }
      window == null || window.removeEventListener("keyup", _), window == null || window.removeEventListener("keydown", Y);
    });
    const F = Vt(o, "all", a.presetDates), B = Vt(o, "input");
    ut(
      [l, i],
      () => {
        N(l.value);
      },
      { deep: !0 }
    );
    const { openOnTop: w, menuStyle: x, xCorrect: q, setMenuPosition: ae, getScrollableParent: pe, shadowRender: ee } = cw({
      menuRef: c,
      menuRefInner: u,
      inputRef: d,
      pickerWrapperRef: b,
      inline: M,
      emit: r,
      props: a,
      slots: o
    }), {
      inputValue: m,
      internalModelValue: f,
      parseExternalModelValue: N,
      emitModelValue: Q,
      formatInputValue: ce,
      checkBeforeEmit: j
    } = iw(r, a, p), Oe = ne(
      () => ({
        dp__main: !0,
        dp__theme_dark: a.dark,
        dp__theme_light: !a.dark,
        dp__flex_display: M.value.enabled,
        "dp--flex-display-collapsed": D.value,
        dp__flex_display_with_input: M.value.input
      })
    ), Ie = ne(() => a.dark ? "dp__theme_dark" : "dp__theme_light"), U = ne(() => ({
      to: typeof a.teleport == "boolean" ? "body" : a.teleport,
      disabled: !a.teleport || M.value.enabled
    })), ve = ne(() => ({ class: "dp__outer_menu_wrap" })), Ee = ne(() => M.value.enabled && (a.timePicker || a.monthPicker || a.yearPicker || a.quarterPicker)), C = () => {
      s.value && (O.value.closeOnScroll ? me() : ae());
    }, h = () => {
      var te;
      s.value && ae();
      const he = (te = u.value) == null ? void 0 : te.$el.getBoundingClientRect().width;
      D.value = document.body.offsetWidth <= he;
    }, _ = (te) => {
      te.key === "Tab" && !M.value.enabled && !a.teleport && O.value.tabOutClosesMenu && (b.value.contains(document.activeElement) || me()), y.value = te.shiftKey;
    }, Y = (te) => {
      y.value = te.shiftKey;
    }, K = () => {
      !a.disabled && !a.readonly && (ee(xu, a), ae(!1), s.value = !0, s.value && r("open"), s.value || de(), N(a.modelValue));
    }, E = () => {
      var te;
      m.value = "", de(), (te = d.value) == null || te.setParsedDate(null), r("update:model-value", null), r("update:model-timezone-value", null), r("cleared"), O.value.closeOnClearValue && me();
    }, oe = () => {
      const te = f.value;
      return !te || !Array.isArray(te) && P(te) ? !0 : Array.isArray(te) ? a.multiDates || te.length === 2 && P(te[0]) && P(te[1]) ? !0 : W.value.partialRange && !a.timePicker ? P(te[0]) : !1 : !1;
    }, ie = () => {
      j() && oe() ? (Q(), me()) : r("invalid-select", f.value);
    }, le = (te) => {
      ue(), Q(), O.value.closeOnAutoApply && !te && me();
    }, ue = () => {
      d.value && k.value.enabled && d.value.setParsedDate(f.value);
    }, re = (te = !1) => {
      a.autoApply && $(f.value) && oe() && (W.value.enabled && Array.isArray(f.value) ? (W.value.partialRange || f.value.length === 2) && le(te) : le(te));
    }, de = () => {
      k.value.enabled || (f.value = null);
    }, me = () => {
      M.value.enabled || (s.value && (s.value = !1, q.value = !1, V(!1), R(!1), g(), r("closed"), m.value && N(l.value)), de(), r("blur"));
    }, be = (te, he, ye = !1) => {
      if (!te) {
        f.value = null;
        return;
      }
      const Bt = Array.isArray(te) ? !te.some((Kn) => !P(Kn)) : P(te), tn = $(te);
      Bt && tn && (f.value = te, he && (v.value = ye, ie(), r("text-submit")));
    }, Te = () => {
      a.autoApply && $(f.value) && Q(), ue();
    }, Re = () => s.value ? me() : K(), je = (te) => {
      f.value = te;
    }, Ge = () => {
      k.value.enabled && (p.value = !0, ce()), r("focus");
    }, lt = () => {
      if (k.value.enabled && (p.value = !1, N(a.modelValue), v.value)) {
        const te = Vb(b.value, y.value);
        te == null || te.focus();
      }
      r("blur");
    }, H = (te) => {
      u.value && u.value.updateMonthYear(0, {
        month: hu(te.month),
        year: hu(te.year)
      });
    }, se = (te) => {
      N(te ?? a.modelValue);
    }, we = (te, he) => {
      var ye;
      (ye = u.value) == null || ye.switchView(te, he);
    }, Pe = (te) => O.value.onClickOutside ? O.value.onClickOutside(te) : me();
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
      setMonthYear: H,
      parseModel: se,
      switchView: we,
      toggleMenu: Re
    }), (te, he) => (I(), G("div", {
      ref_key: "pickerWrapperRef",
      ref: b,
      class: Ne(Oe.value),
      "data-datepicker-instance": ""
    }, [
      Qe(gw, _t({
        ref_key: "inputRef",
        ref: d,
        "input-value": T(m),
        "onUpdate:inputValue": he[0] || (he[0] = (ye) => ct(m) ? m.value = ye : null),
        "is-menu-open": s.value
      }, te.$props, {
        onClear: E,
        onOpen: K,
        onSetInputDate: be,
        onSetEmptyDate: T(Q),
        onSelectDate: ie,
        onToggle: Re,
        onClose: me,
        onFocus: Ge,
        onBlur: lt,
        onRealBlur: he[1] || (he[1] = (ye) => p.value = !1)
      }), Ct({ _: 2 }, [
        qe(T(B), (ye, Bt) => ({
          name: ye,
          fn: Ve((tn) => [
            ge(te.$slots, ye, ht(Pt(tn)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (I(), Ce(bo(te.teleport ? tm : "div"), ht(Pt(U.value)), {
        default: Ve(() => [
          Qe(qn, {
            name: T(S)(T(w)),
            css: T(A) && !T(M).enabled
          }, {
            default: Ve(() => [
              s.value ? (I(), G("div", _t({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: c
              }, ve.value, {
                class: { "dp--menu-wrapper": !T(M).enabled },
                style: T(M).enabled ? void 0 : T(x)
              }), [
                Qe(xu, _t({
                  ref_key: "dpMenuRef",
                  ref: u
                }, te.$props, {
                  "internal-model-value": T(f),
                  "onUpdate:internalModelValue": he[2] || (he[2] = (ye) => ct(f) ? f.value = ye : null),
                  class: { [Ie.value]: !0, "dp--menu-wrapper": te.teleport },
                  "open-on-top": T(w),
                  "no-overlay-focus": Ee.value,
                  collapse: D.value,
                  onClosePicker: me,
                  onSelectDate: ie,
                  onAutoApply: re,
                  onTimeUpdate: Te,
                  onFlowStep: he[3] || (he[3] = (ye) => te.$emit("flow-step", ye)),
                  onUpdateMonthYear: he[4] || (he[4] = (ye) => te.$emit("update-month-year", ye)),
                  onInvalidSelect: he[5] || (he[5] = (ye) => te.$emit("invalid-select", T(f))),
                  onAutoApplyInvalid: he[6] || (he[6] = (ye) => te.$emit("invalid-select", ye)),
                  onInvalidFixedRange: he[7] || (he[7] = (ye) => te.$emit("invalid-fixed-range", ye)),
                  onRecalculatePosition: T(ae),
                  onTooltipOpen: he[8] || (he[8] = (ye) => te.$emit("tooltip-open", ye)),
                  onTooltipClose: he[9] || (he[9] = (ye) => te.$emit("tooltip-close", ye)),
                  onTimePickerOpen: he[10] || (he[10] = (ye) => te.$emit("time-picker-open", ye)),
                  onTimePickerClose: he[11] || (he[11] = (ye) => te.$emit("time-picker-close", ye)),
                  onAmPmChange: he[12] || (he[12] = (ye) => te.$emit("am-pm-change", ye)),
                  onRangeStart: he[13] || (he[13] = (ye) => te.$emit("range-start", ye)),
                  onRangeEnd: he[14] || (he[14] = (ye) => te.$emit("range-end", ye)),
                  onDateUpdate: he[15] || (he[15] = (ye) => te.$emit("date-update", ye)),
                  onInvalidDate: he[16] || (he[16] = (ye) => te.$emit("invalid-date", ye))
                }), Ct({ _: 2 }, [
                  qe(T(F), (ye, Bt) => ({
                    name: ye,
                    fn: Ve((tn) => [
                      ge(te.$slots, ye, ht(Pt({ ...tn })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "onRecalculatePosition"])
              ], 16)) : X("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 2));
  }
}), jl = /* @__PURE__ */ (() => {
  const e = A_;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), D_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jl
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(D_).forEach(([e, t]) => {
  e !== "default" && (jl[e] = t);
});
const Hl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, C_ = { class: "input" }, O_ = ["value"], E_ = ["min", "max"], R_ = ["accept"], $_ = { key: 5 }, N_ = { key: 6 }, V_ = {
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
    const t = e, n = Ss(e, "selectedValue"), r = Ss(e, "dataValue"), a = J(null);
    function o(V, R = d.value) {
      if (V == null || V === "") return !1;
      const g = Number(V);
      return Number.isFinite(g) && g >= R.rangemin && g <= R.rangemax;
    }
    function s() {
      a.value = r.value;
    }
    function l(V) {
      if (V.key !== "ArrowUp" && V.key !== "ArrowDown") return;
      const R = Number(r.value);
      if (!Number.isFinite(R)) return;
      const g = d.value, P = Number(V.currentTarget.step) || 1, $ = R + (V.key === "ArrowUp" ? P : -P);
      o($, g) || V.preventDefault();
    }
    function i(V) {
      var L, k;
      const R = d.value;
      if (o(r.value, R)) return;
      const g = a.value, P = o(g, R) ? g : Number(R.defaultFloat), $ = (k = (L = V.relatedTarget) == null ? void 0 : L.closest) == null ? void 0 : k.call(L, "[data-poris-command]");
      $ ? window.confirm(
        "This value is outside the active range. Restore the previous value and continue with the command? Choose Cancel to cancel the command."
      ) || ($.dataset.porisCommandCancelled = "true") : window.alert("This value is outside the active range. The previous value will be restored."), r.value = P;
    }
    const c = J(t.mode), u = ne(() => c.value.hasValues ? c.value.valuesNodes : []), d = ne(() => n.value || c.value.defaultValue || u.value[0]), p = () => {
      var V;
      return ((V = d.value) == null ? void 0 : V.type) === Cr;
    }, b = () => {
      var V;
      return ((V = d.value) == null ? void 0 : V.type) === cr;
    }, v = () => {
      var V;
      return ((V = d.value) == null ? void 0 : V.type) === Er;
    }, y = () => {
      var V;
      return ((V = d.value) == null ? void 0 : V.type) === Or;
    }, D = () => {
      var V;
      return ((V = d.value) == null ? void 0 : V.type) === no;
    };
    return ut(
      () => t.mode,
      (V) => {
        console.log("watch.mode", V), c.value = V;
      }
    ), ut(u, (V, R) => {
      console.log(`values mode: ${c.value.id}, changed/oldVal:`, V, R);
    }), (V, R) => (I(), G("div", C_, [
      u.value.length > 1 ? Vn((I(), G("select", {
        key: 0,
        "onUpdate:modelValue": R[0] || (R[0] = (g) => n.value = g),
        class: "active-value-selector"
      }, [
        (I(!0), G(_e, null, qe(u.value, (g) => (I(), G("option", {
          key: g.id,
          value: g
        }, He(g.name), 9, O_))), 128))
      ], 512)), [
        [Ac, n.value]
      ]) : X("", !0),
      p() ? Vn((I(), G("input", {
        key: 1,
        "onUpdate:modelValue": R[1] || (R[1] = (g) => r.value = g),
        type: "text"
      }, null, 512)), [
        [Ci, r.value]
      ]) : b() ? Vn((I(), G("input", {
        key: 2,
        class: "numberPicker",
        "onUpdate:modelValue": R[2] || (R[2] = (g) => r.value = g),
        type: "number",
        step: ".01",
        min: d.value.rangemin,
        max: d.value.rangemax,
        onFocus: s,
        onKeydown: l,
        onBlur: i
      }, null, 40, E_)), [
        [
          Ci,
          r.value,
          void 0,
          { number: !0 }
        ]
      ]) : y() ? (I(), Ce(T(jl), {
        key: 3,
        modelValue: r.value,
        "onUpdate:modelValue": R[3] || (R[3] = (g) => r.value = g),
        min: d.value.datemin,
        max: d.value.datemax,
        "enable-seconds": "",
        "is-24": ""
      }, null, 8, ["modelValue", "min", "max"])) : v() ? (I(), G("input", {
        key: 4,
        type: "file",
        accept: d.value.fileExtension
      }, null, 8, R_)) : D() && u.value.length === 1 ? (I(), G("span", $_, He(d.value.name), 1)) : d.value ? X("", !0) : (I(), G("span", N_, "No values!")),
      Jt(" " + He(" "))
    ]));
  }
}, I_ = /* @__PURE__ */ Hl(V_, [["__scopeId", "data-v-f7e30fcc"]]), F_ = { class: "input-mode-panel" }, B_ = { class: "title" }, L_ = {
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
    function n(v) {
      return !v.hasSubsystems && !v.hasRealValues && v.hasValues && v.currentMode.hasValues;
    }
    function r(v) {
      return !v.hasRealValues && !v.currentMode.hasValues && !v.currentMode.hasModes;
    }
    function a(v) {
      return !n(v) && !r(v);
    }
    function o(v, y) {
      return y.length > 1 || n(v) || r(v);
    }
    const s = xl(), l = e, i = t;
    function c(v, y) {
      if (y.currentTarget.dataset.porisCommandCancelled === "true") {
        delete y.currentTarget.dataset.porisCommandCancelled;
        return;
      }
      i("command-launched", {
        systemId: l.subsystem.id,
        systemName: l.subsystem.name,
        commandId: v.id,
        commandName: v.name
      });
    }
    const u = J(l.mode), d = J(null), p = J(null);
    function b(v = null) {
      const y = s.getSystemValue(l.subsystem, u.value, v);
      d.value = y.value, p.value = y.data;
    }
    return b(), ut(d, (v) => {
      if (v) {
        const y = s.getSystemValue(l.subsystem, u.value, v);
        p.value !== y.data && (p.value = y.data);
      }
    }, { flush: "sync" }), ut(p, (v) => {
      d.value && s.setSystemValue(l.subsystem, d.value, v);
    }, { flush: "sync" }), ut(
      () => s.systemValues[`${l.subsystem.id}`],
      (v) => {
        var y, D;
        v && (((y = d.value) == null ? void 0 : y.id) !== ((D = v.value) == null ? void 0 : D.id) && (d.value = v.value), p.value !== v.data && (p.value = v.data));
      },
      { flush: "sync" }
    ), ut(u, (v) => {
      console.log("watch_input: currentMode.set() mode:", v), b();
    }), ut(
      () => l.mode,
      (v) => {
        console.log("new props.mode:", v), u.value = v;
      }
    ), (v, y) => {
      var D, V;
      return I(), G("div", {
        class: Ne(["inputsystem-panel", { "has-commands": (D = e.subsystem.commandsNodes) == null ? void 0 : D.length }])
      }, [
        ke("div", F_, [
          ke("span", B_, He(e.subsystem.label || e.subsystem.name), 1),
          (V = e.subsystem.commandsNodes) != null && V.length ? (I(), G("span", L_, [
            (I(!0), G(_e, null, qe(e.subsystem.commandsNodes, (R) => (I(), G("button", {
              key: R.id,
              type: "button",
              "data-poris-command": "",
              onClick: (g) => c(R, g)
            }, He(R.label || R.name), 9, Y_))), 128))
          ])) : X("", !0),
          ke("span", j_, [
            o(e.subsystem, e.modes) ? (I(), Ce(wd, {
              key: 0,
              class: "mode-selector",
              modelValue: u.value,
              "onUpdate:modelValue": y[0] || (y[0] = (R) => u.value = R),
              modes: e.modes
            }, null, 8, ["modelValue", "modes"])) : X("", !0),
            a(e.subsystem) ? (I(), Ce(I_, {
              key: 1,
              mode: u.value,
              "selected-value": d.value,
              "onUpdate:selectedValue": y[1] || (y[1] = (R) => d.value = R),
              "data-value": p.value,
              "onUpdate:dataValue": y[2] || (y[2] = (R) => p.value = R)
            }, null, 8, ["mode", "selected-value", "data-value"])) : X("", !0)
          ])
        ])
      ], 2);
    };
  }
}, ku = /* @__PURE__ */ Hl(H_, [["__scopeId", "data-v-9a0c15f0"]]), U_ = {
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
}, Q_ = {
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
    const i = xl(), c = e, u = t, p = J(c.system).value;
    p.candidateMode = p.currentMode;
    function b(v, y) {
      if (y.currentTarget.dataset.porisCommandCancelled === "true") {
        delete y.currentTarget.dataset.porisCommandCancelled;
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
      var v, y;
      hn(
        `watch.mode. mode ${(v = p.currentMode) == null ? void 0 : v.name}, newMode :${(y = p.candidateMode) == null ? void 0 : y.name}`
      ), p.candidateMode != null && p.candidateMode != p.currentMode && (i.setValidMode(p, p.candidateMode), hn(`watch result >> ${p.currentMode.name}`));
    }), (v, y) => {
      var V;
      const D = pp("SubSystemPanel", !0);
      return I(), G(_e, null, [
        l(T(p)) ? (I(), G("div", U_, [
          ke("div", W_, [
            T(p).label != "-" ? (I(), G("h3", q_, He(T(p).label || T(p).name), 1)) : X("", !0),
            (V = T(p).commandsNodes) != null && V.length ? (I(), G("div", z_, [
              (I(!0), G(_e, null, qe(T(p).commandsNodes, (R) => (I(), G("button", {
                key: R.id,
                type: "button",
                "data-poris-command": "",
                onClick: (g) => b(R, g)
              }, He(R.label || R.name), 9, G_))), 128))
            ])) : X("", !0)
          ]),
          s(T(p)) ? (I(), G("div", K_, [
            Qe(wd, {
              modelValue: T(p).candidateMode,
              "onUpdate:modelValue": y[0] || (y[0] = (R) => T(p).candidateMode = R),
              modes: T(p).getValidModes()
            }, null, 8, ["modelValue", "modes"])
          ])) : X("", !0),
          (I(!0), G(_e, null, qe(T(p).getActiveSubnodes(), (R) => (I(), G(_e, {
            key: R.id
          }, [
            a(R) ? (I(), Ce(D, {
              key: 0,
              system: R,
              onCommandLaunched: y[1] || (y[1] = (g) => u("command-launched", g))
            }, null, 8, ["system"])) : X("", !0),
            o(R) ? (I(), Ce(ku, {
              key: 1,
              subsystem: R,
              modes: R.getValidModes(),
              mode: R.currentMode,
              onCommandLaunched: y[2] || (y[2] = (g) => u("command-launched", g))
            }, null, 8, ["subsystem", "modes", "mode"])) : X("", !0)
          ], 64))), 128))
        ])) : X("", !0),
        o(T(p)) ? (I(), Ce(ku, {
          key: 1,
          subsystem: T(p),
          modes: T(p).getValidModes(),
          mode: T(p).currentMode,
          onCommandLaunched: y[3] || (y[3] = (R) => u("command-launched", R))
        }, null, 8, ["subsystem", "modes", "mode"])) : X("", !0)
      ], 64);
    };
  }
}, Io = "";
function X_() {
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
const e1 = (e) => (lp("data-v-b18fe8ef"), e = e(), ip(), e), t1 = {
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
    const n = xl(), r = ne(() => n.isLoading), a = ne(() => n.rootSubsystem), o = J(!1), s = J(""), l = J(""), i = J(!1), c = X_(), u = ne(() => !!y.commitUrl || c), d = "", p = J([]), b = ne(() => p.value.filter((S) => S.visible));
    let v = null;
    const y = e, D = t;
    function V(S) {
      var B, w, x;
      const A = n.systemValues[`${S.id}`], F = (A == null ? void 0 : A.value) || ((B = S.currentMode) == null ? void 0 : B.defaultValue) || ((x = (w = S.currentMode) == null ? void 0 : w.valuesNodes) == null ? void 0 : x[0]);
      return F ? typeof (A == null ? void 0 : A.data) == "number" ? {
        number: A.data,
        name: F.name,
        id: F.id,
        type: F.type
      } : F.type === "ValueString" || F.type === "ValueFilePath" ? { data: (A == null ? void 0 : A.data) ?? "", name: F.name, id: F.id, type: F.type } : { name: F.name, id: F.id, type: F.type } : null;
    }
    function R(S) {
      return {
        id: S.id,
        name: S.name,
        mode: S.currentMode ? { id: S.currentMode.id, name: S.currentMode.name } : null,
        value: V(S),
        subsystems: (S.subsystemsNodes || []).map(R)
      };
    }
    function g() {
      return {
        root: R(a.value)
      };
    }
    async function P() {
      if (c)
        try {
          const S = await Z_();
          p.value = (S == null ? void 0 : S.monitors) || [];
        } catch {
          p.value = [];
        }
    }
    async function $(S, A) {
      var F, B;
      o.value = !0, i.value = !1, s.value = "";
      try {
        const w = await S();
        return s.value = A, w;
      } catch (w) {
        i.value = !0, s.value = ((B = (F = w == null ? void 0 : w.response) == null ? void 0 : F.data) == null ? void 0 : B.error) || w.message || String(w);
      } finally {
        o.value = !1;
      }
    }
    async function L() {
      const S = await $(
        () => Mu(g(), { url: y.commitUrl, csrfToken: y.csrfToken }),
        "Commit applied to the PORIS runtime"
      );
      S != null && S.state && (n.applyRuntimeState(S.state), D("committed", S));
    }
    function k(S) {
      $(() => J_(S), `${S} executed`);
    }
    async function M({ systemId: S, systemName: A, commandId: F, commandName: B }) {
      var w;
      if (i.value = !1, y.commitUrl) {
        const x = await $(
          () => Mu(
            {
              ...g(),
              operations: [{ type: "invoke_command", node_id: S, command_id: F }]
            },
            { url: y.commitUrl, csrfToken: y.csrfToken }
          ),
          `Command ${A}.${B} sent to the PORIS runtime`
        );
        x != null && x.state && (n.applyRuntimeState(x.state), D("committed", x));
        const q = (w = x == null ? void 0 : x.operations) == null ? void 0 : w.find((ae) => ae.type === "invoke_command");
        q != null && q.accepted ? l.value = `We launched ${A}.${B}` : q && (i.value = !0, s.value = q.reason || "The PORIS command was rejected");
        return;
      }
      l.value = `We launched ${A}.${B}`;
    }
    function O() {
      l.value = "";
    }
    function W() {
      s.value = "", i.value = !1, y.modelPath && n.loadModelURL(y.modelPath);
    }
    return y.modelPath && n.loadModelURL(y.modelPath), ut(
      () => n.rootSubsystem,
      (S) => {
        S && y.initialState.length && n.applyRuntimeState(y.initialState);
      },
      { immediate: !0 }
    ), xt(() => {
      P(), c && (v = window.setInterval(P, 1e3));
    }), sl(() => {
      v && window.clearInterval(v);
    }), (S, A) => (I(), G("div", {
      class: Ne(["poris-main", { compact: y.compact }]),
      onClickCapture: O,
      onKeydownCapture: O
    }, [
      r.value ? (I(), G("div", t1, r1)) : a.value ? (I(), G("div", a1, [
        ke("h2", o1, He(a.value.name) + " Panel", 1),
        b.value.length ? (I(), G("div", s1, [
          (I(!0), G(_e, null, qe(b.value, (F) => (I(), G("div", {
            key: F.id,
            class: "monitor-capsule"
          }, [
            ke("span", l1, He(F.label), 1),
            ke("span", i1, He(F.value), 1)
          ]))), 128))
        ])) : X("", !0),
        Qe(Q_, {
          system: a.value,
          onCommandLaunched: M
        }, null, 8, ["system"]),
        u.value || T(c) ? (I(), G("div", u1, [
          u.value ? (I(), G("button", {
            key: 0,
            type: "button",
            disabled: o.value,
            onClick: L
          }, He(y.commitUrl ? "Commit" : "Commit changes"), 9, c1)) : X("", !0),
          T(c) ? (I(), G("button", {
            key: 1,
            type: "button",
            disabled: o.value,
            onClick: W
          }, "Cancel", 8, d1)) : X("", !0),
          T(d) ? (I(), G("button", {
            key: 2,
            type: "button",
            disabled: o.value,
            onClick: A[0] || (A[0] = (F) => k(T(d)))
          }, He(T(d)), 9, f1)) : X("", !0)
        ])) : X("", !0),
        l.value ? (I(), G("div", p1, He(l.value), 1)) : X("", !0),
        s.value ? (I(), G("div", {
          key: 3,
          class: Ne(["status", { error: i.value }])
        }, He(s.value), 3)) : X("", !0)
      ])) : X("", !0)
    ], 34));
  }
}, h1 = /* @__PURE__ */ Hl(m1, [["__scopeId", "data-v-b18fe8ef"]]);
function y1(e, t, n = {}) {
  const { debug: r = !1, compact: a = !1, commitUrl: o = "", csrfToken: s = "", initialState: l = [], onCommit: i } = n;
  Pg(r);
  const u = jm(h1, { modelPath: e, compact: a, commitUrl: o, csrfToken: s, initialState: l, onCommitted: i });
  return u.use(qm()), u.mount(t), u;
}
export {
  y1 as createPorisViewerPanel
};
