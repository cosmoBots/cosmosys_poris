var lf = Object.defineProperty;
var uf = (e, t, n) => t in e ? lf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var pe = (e, t, n) => uf(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Gs(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const Je = {}, kr = [], Yt = () => {
}, cf = () => !1, co = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ks = (e) => e.startsWith("onUpdate:"), yt = Object.assign, Xs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, df = Object.prototype.hasOwnProperty, Ye = (e, t) => df.call(e, t), ke = Array.isArray, Mr = (e) => ga(e) === "[object Map]", fo = (e) => ga(e) === "[object Set]", zl = (e) => ga(e) === "[object Date]", Ce = (e) => typeof e == "function", ot = (e) => typeof e == "string", Bn = (e) => typeof e == "symbol", Qe = (e) => e !== null && typeof e == "object", Su = (e) => (Qe(e) || Ce(e)) && Ce(e.then) && Ce(e.catch), Pu = Object.prototype.toString, ga = (e) => Pu.call(e), ff = (e) => ga(e).slice(8, -1), Au = (e) => ga(e) === "[object Object]", Qs = (e) => ot(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Qr = /* @__PURE__ */ Gs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), po = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, pf = /-(\w)/g, Qt = po((e) => e.replace(pf, (t, n) => n ? n.toUpperCase() : "")), mf = /\B([A-Z])/g, Un = po(
  (e) => e.replace(mf, "-$1").toLowerCase()
), mo = po((e) => e.charAt(0).toUpperCase() + e.slice(1)), jo = po((e) => e ? `on${mo(e)}` : ""), pn = (e, t) => !Object.is(e, t), Va = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ha = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, la = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, hf = (e) => {
  const t = ot(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Gl;
const Cu = () => Gl || (Gl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function St(e) {
  if (ke(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = ot(r) ? bf(r) : St(r);
      if (a)
        for (const o in a)
          t[o] = a[o];
    }
    return t;
  } else if (ot(e) || Qe(e))
    return e;
}
const vf = /;(?![^(]*\))/g, yf = /:([^]+)/, gf = /\/\*[^]*?\*\//g;
function bf(e) {
  const t = {};
  return e.replace(gf, "").split(vf).forEach((n) => {
    if (n) {
      const r = n.split(yf);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function $e(e) {
  let t = "";
  if (ot(e))
    t = e;
  else if (ke(e))
    for (let n = 0; n < e.length; n++) {
      const r = $e(e[n]);
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
  return t && !ot(t) && (e.class = $e(t)), n && (e.style = St(n)), e;
}
const wf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _f = /* @__PURE__ */ Gs(wf);
function Du(e) {
  return !!e || e === "";
}
function xf(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = ho(e[r], t[r]);
  return n;
}
function ho(e, t) {
  if (e === t)
    return !0;
  let n = zl(e), r = zl(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Bn(e), r = Bn(t), n || r)
    return e === t;
  if (n = ke(e), r = ke(t), n || r)
    return n && r ? xf(e, t) : !1;
  if (n = Qe(e), r = Qe(t), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(e).length, o = Object.keys(t).length;
    if (a !== o)
      return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s), i = t.hasOwnProperty(s);
      if (l && !i || !l && i || !ho(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function kf(e, t) {
  return e.findIndex((n) => ho(n, t));
}
const He = (e) => ot(e) ? e : e == null ? "" : ke(e) || Qe(e) && (e.toString === Pu || !Ce(e.toString)) ? JSON.stringify(e, Ou, 2) : String(e), Ou = (e, t) => t && t.__v_isRef ? Ou(e, t.value) : Mr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, a], o) => (n[Uo(r, o) + " =>"] = a, n),
    {}
  )
} : fo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Uo(n))
} : Bn(t) ? Uo(t) : Qe(t) && !ke(t) && !Au(t) ? String(t) : t, Uo = (e, t = "") => {
  var n;
  return Bn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let $t;
class Eu {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = $t, !t && $t && (this.index = ($t.scopes || ($t.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = $t;
      try {
        return $t = this, t();
      } finally {
        $t = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    $t = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    $t = this.parent;
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
function Ru(e) {
  return new Eu(e);
}
function Mf(e, t = $t) {
  t && t.active && t.effects.push(e);
}
function Js() {
  return $t;
}
function Nu(e) {
  $t && $t.cleanups.push(e);
}
let ir;
class Zs {
  constructor(t, n, r, a) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Mf(this, a);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Wn();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Tf(n.computed), this._dirtyLevel >= 4))
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
      return cn = !0, ir = this, this._runnings++, Kl(this), this.fn();
    } finally {
      Xl(this), this._runnings--, ir = n, cn = t;
    }
  }
  stop() {
    var t;
    this.active && (Kl(this), Xl(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Tf(e) {
  return e.value;
}
function Kl(e) {
  e._trackId++, e._depsLength = 0;
}
function Xl(e) {
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
let cn = !0, bs = 0;
const el = [];
function Wn() {
  el.push(cn), cn = !1;
}
function Sf() {
  el.push(cn), cn = !0;
}
function hr() {
  const e = el.pop();
  cn = e === void 0 ? !0 : e;
}
function tl() {
  bs++;
}
function nl() {
  for (bs--; !bs && ws.length; )
    ws.shift()();
}
function Vu(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && $u(r, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const ws = [];
function Iu(e, t, n) {
  tl();
  for (const r of e.keys()) {
    let a;
    r._dirtyLevel < t && (a ?? (a = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (a ?? (a = e.get(r) === r._trackId)) && (r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && ws.push(r.scheduler)));
  }
  nl();
}
const Fu = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, ja = /* @__PURE__ */ new WeakMap(), ur = Symbol(""), _s = Symbol("");
function Nt(e, t, n) {
  if (cn && ir) {
    let r = ja.get(e);
    r || ja.set(e, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || r.set(n, a = Fu(() => r.delete(n))), Vu(
      ir,
      a
    );
  }
}
function gn(e, t, n, r, a, o) {
  const s = ja.get(e);
  if (!s)
    return;
  let l = [];
  if (t === "clear")
    l = [...s.values()];
  else if (n === "length" && ke(e)) {
    const i = Number(r);
    s.forEach((d, u) => {
      (u === "length" || !Bn(u) && u >= i) && l.push(d);
    });
  } else
    switch (n !== void 0 && l.push(s.get(n)), t) {
      case "add":
        ke(e) ? Qs(n) && l.push(s.get("length")) : (l.push(s.get(ur)), Mr(e) && l.push(s.get(_s)));
        break;
      case "delete":
        ke(e) || (l.push(s.get(ur)), Mr(e) && l.push(s.get(_s)));
        break;
      case "set":
        Mr(e) && l.push(s.get(ur));
        break;
    }
  tl();
  for (const i of l)
    i && Iu(
      i,
      4
    );
  nl();
}
function Pf(e, t) {
  var n;
  return (n = ja.get(e)) == null ? void 0 : n.get(t);
}
const Af = /* @__PURE__ */ Gs("__proto__,__v_isRef,__isVue"), Bu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bn)
), Ql = /* @__PURE__ */ Cf();
function Cf() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = Le(this);
      for (let o = 0, s = this.length; o < s; o++)
        Nt(r, "get", o + "");
      const a = r[t](...n);
      return a === -1 || a === !1 ? r[t](...n.map(Le)) : a;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Wn(), tl();
      const r = Le(this)[t].apply(this, n);
      return nl(), hr(), r;
    };
  }), e;
}
function Df(e) {
  const t = Le(this);
  return Nt(t, "has", e), t.hasOwnProperty(e);
}
class Lu {
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
      return r === (a ? o ? jf : Uu : o ? ju : Hu).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = ke(t);
    if (!a) {
      if (s && Ye(Ql, n))
        return Reflect.get(Ql, n, r);
      if (n === "hasOwnProperty")
        return Df;
    }
    const l = Reflect.get(t, n, r);
    return (Bn(n) ? Bu.has(n) : Af(n)) || (a || Nt(t, "get", n), o) ? l : ct(l) ? s && Qs(n) ? l : l.value : Qe(l) ? a ? Wu(l) : wn(l) : l;
  }
}
class Yu extends Lu {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, a) {
    let o = t[n];
    if (!this._isShallow) {
      const i = Cr(o);
      if (!Ua(r) && !Cr(r) && (o = Le(o), r = Le(r)), !ke(t) && ct(o) && !ct(r))
        return i ? !1 : (o.value = r, !0);
    }
    const s = ke(t) && Qs(n) ? Number(n) < t.length : Ye(t, n), l = Reflect.set(t, n, r, a);
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
    return (!Bn(n) || !Bu.has(n)) && Nt(t, "has", n), r;
  }
  ownKeys(t) {
    return Nt(
      t,
      "iterate",
      ke(t) ? "length" : ur
    ), Reflect.ownKeys(t);
  }
}
class Of extends Lu {
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
const Ef = /* @__PURE__ */ new Yu(), Rf = /* @__PURE__ */ new Of(), Nf = /* @__PURE__ */ new Yu(
  !0
), rl = (e) => e, vo = (e) => Reflect.getPrototypeOf(e);
function Ta(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const a = Le(e), o = Le(t);
  n || (pn(t, o) && Nt(a, "get", t), Nt(a, "get", o));
  const { has: s } = vo(a), l = r ? rl : n ? sl : ia;
  if (s.call(a, t))
    return l(e.get(t));
  if (s.call(a, o))
    return l(e.get(o));
  e !== a && e.get(t);
}
function Sa(e, t = !1) {
  const n = this.__v_raw, r = Le(n), a = Le(e);
  return t || (pn(e, a) && Nt(r, "has", e), Nt(r, "has", a)), e === a ? n.has(e) : n.has(e) || n.has(a);
}
function Pa(e, t = !1) {
  return e = e.__v_raw, !t && Nt(Le(e), "iterate", ur), Reflect.get(e, "size", e);
}
function Jl(e) {
  e = Le(e);
  const t = Le(this);
  return vo(t).has.call(t, e) || (t.add(e), gn(t, "add", e, e)), this;
}
function Zl(e, t) {
  t = Le(t);
  const n = Le(this), { has: r, get: a } = vo(n);
  let o = r.call(n, e);
  o || (e = Le(e), o = r.call(n, e));
  const s = a.call(n, e);
  return n.set(e, t), o ? pn(t, s) && gn(n, "set", e, t) : gn(n, "add", e, t), this;
}
function ei(e) {
  const t = Le(this), { has: n, get: r } = vo(t);
  let a = n.call(t, e);
  a || (e = Le(e), a = n.call(t, e)), r && r.call(t, e);
  const o = t.delete(e);
  return a && gn(t, "delete", e, void 0), o;
}
function ti() {
  const e = Le(this), t = e.size !== 0, n = e.clear();
  return t && gn(e, "clear", void 0, void 0), n;
}
function Aa(e, t) {
  return function(r, a) {
    const o = this, s = o.__v_raw, l = Le(s), i = t ? rl : e ? sl : ia;
    return !e && Nt(l, "iterate", ur), s.forEach((d, u) => r.call(a, i(d), i(u), o));
  };
}
function Ca(e, t, n) {
  return function(...r) {
    const a = this.__v_raw, o = Le(a), s = Mr(o), l = e === "entries" || e === Symbol.iterator && s, i = e === "keys" && s, d = a[e](...r), u = n ? rl : t ? sl : ia;
    return !t && Nt(
      o,
      "iterate",
      i ? _s : ur
    ), {
      // iterator protocol
      next() {
        const { value: c, done: p } = d.next();
        return p ? { value: c, done: p } : {
          value: l ? [u(c[0]), u(c[1])] : u(c),
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
function kn(e) {
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
      return Pa(this);
    },
    has: Sa,
    add: Jl,
    set: Zl,
    delete: ei,
    clear: ti,
    forEach: Aa(!1, !1)
  }, t = {
    get(o) {
      return Ta(this, o, !1, !0);
    },
    get size() {
      return Pa(this);
    },
    has: Sa,
    add: Jl,
    set: Zl,
    delete: ei,
    clear: ti,
    forEach: Aa(!1, !0)
  }, n = {
    get(o) {
      return Ta(this, o, !0);
    },
    get size() {
      return Pa(this, !0);
    },
    has(o) {
      return Sa.call(this, o, !0);
    },
    add: kn("add"),
    set: kn("set"),
    delete: kn("delete"),
    clear: kn("clear"),
    forEach: Aa(!0, !1)
  }, r = {
    get(o) {
      return Ta(this, o, !0, !0);
    },
    get size() {
      return Pa(this, !0);
    },
    has(o) {
      return Sa.call(this, o, !0);
    },
    add: kn("add"),
    set: kn("set"),
    delete: kn("delete"),
    clear: kn("clear"),
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
  Vf,
  If,
  Ff,
  Bf
] = /* @__PURE__ */ $f();
function al(e, t) {
  const n = t ? e ? Bf : Ff : e ? If : Vf;
  return (r, a, o) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(
    Ye(n, a) && a in r ? n : r,
    a,
    o
  );
}
const Lf = {
  get: /* @__PURE__ */ al(!1, !1)
}, Yf = {
  get: /* @__PURE__ */ al(!1, !0)
}, Hf = {
  get: /* @__PURE__ */ al(!0, !1)
}, Hu = /* @__PURE__ */ new WeakMap(), ju = /* @__PURE__ */ new WeakMap(), Uu = /* @__PURE__ */ new WeakMap(), jf = /* @__PURE__ */ new WeakMap();
function Uf(e) {
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
function Wf(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Uf(ff(e));
}
function wn(e) {
  return Cr(e) ? e : ol(
    e,
    !1,
    Ef,
    Lf,
    Hu
  );
}
function qf(e) {
  return ol(
    e,
    !1,
    Nf,
    Yf,
    ju
  );
}
function Wu(e) {
  return ol(
    e,
    !0,
    Rf,
    Hf,
    Uu
  );
}
function ol(e, t, n, r, a) {
  if (!Qe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = a.get(e);
  if (o)
    return o;
  const s = Wf(e);
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
function qu(e) {
  return $n(e) || Cr(e);
}
function Le(e) {
  const t = e && e.__v_raw;
  return t ? Le(t) : e;
}
function yo(e) {
  return Object.isExtensible(e) && Ha(e, "__v_skip", !0), e;
}
const ia = (e) => Qe(e) ? wn(e) : e, sl = (e) => Qe(e) ? Wu(e) : e;
class zu {
  constructor(t, n, r, a) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new Zs(
      () => t(this._value),
      () => Tr(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !a, this.__v_isReadonly = r;
  }
  get value() {
    const t = Le(this);
    return (!t._cacheable || t.effect.dirty) && pn(t._value, t._value = t.effect.run()) && Tr(t, 4), ll(t), t.effect._dirtyLevel >= 2 && Tr(t, 2), t._value;
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
function zf(e, t, n = !1) {
  let r, a;
  const o = Ce(e);
  return o ? (r = e, a = Yt) : (r = e.get, a = e.set), new zu(r, a, o || !a, n);
}
function ll(e) {
  var t;
  cn && ir && (e = Le(e), Vu(
    ir,
    (t = e.dep) != null ? t : e.dep = Fu(
      () => e.dep = void 0,
      e instanceof zu ? e : void 0
    )
  ));
}
function Tr(e, t = 4, n) {
  e = Le(e);
  const r = e.dep;
  r && Iu(
    r,
    t
  );
}
function ct(e) {
  return !!(e && e.__v_isRef === !0);
}
function J(e) {
  return Gf(e, !1);
}
function Gf(e, t) {
  return ct(e) ? e : new Kf(e, t);
}
class Kf {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Le(t), this._value = n ? t : ia(t);
  }
  get value() {
    return ll(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ua(t) || Cr(t);
    t = n ? t : Le(t), pn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : ia(t), Tr(this, 4));
  }
}
function ni(e) {
  Tr(e, 4);
}
function P(e) {
  return ct(e) ? e.value : e;
}
const Xf = {
  get: (e, t, n) => P(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const a = e[t];
    return ct(a) && !ct(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Gu(e) {
  return $n(e) ? e : new Proxy(e, Xf);
}
class Qf {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: r } = t(
      () => ll(this),
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
function Jf(e) {
  return new Qf(e);
}
function Zf(e) {
  const t = ke(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Ku(e, n);
  return t;
}
class ep {
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
class tp {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Wa(e, t, n) {
  return ct(e) ? e : Ce(e) ? new tp(e) : Qe(e) && arguments.length > 1 ? Ku(e, t, n) : J(e);
}
function Ku(e, t, n) {
  const r = e[t];
  return ct(r) ? r : new ep(e, t, n);
}
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Vn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (a) {
    go(a, t, n);
  }
}
function Ht(e, t, n, r) {
  if (Ce(e)) {
    const o = Vn(e, t, n, r);
    return o && Su(o) && o.catch((s) => {
      go(s, t, n);
    }), o;
  }
  const a = [];
  for (let o = 0; o < e.length; o++)
    a.push(Ht(e[o], t, n, r));
  return a;
}
function go(e, t, n, r = !0) {
  const a = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const s = t.proxy, l = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, s, l) === !1)
            return;
      }
      o = o.parent;
    }
    const i = t.appContext.config.errorHandler;
    if (i) {
      Vn(
        i,
        null,
        10,
        [e, s, l]
      );
      return;
    }
  }
  np(e, n, a, r);
}
function np(e, t, n, r = !0) {
  console.error(e);
}
let ua = !1, xs = !1;
const Tt = [];
let on = 0;
const Sr = [];
let Dn = null, nr = 0;
const Xu = /* @__PURE__ */ Promise.resolve();
let il = null;
function Ut(e) {
  const t = il || Xu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function rp(e) {
  let t = on + 1, n = Tt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, a = Tt[r], o = ca(a);
    o < e || o === e && a.pre ? t = r + 1 : n = r;
  }
  return t;
}
function ul(e) {
  (!Tt.length || !Tt.includes(
    e,
    ua && e.allowRecurse ? on + 1 : on
  )) && (e.id == null ? Tt.push(e) : Tt.splice(rp(e.id), 0, e), Qu());
}
function Qu() {
  !ua && !xs && (xs = !0, il = Xu.then(Zu));
}
function ap(e) {
  const t = Tt.indexOf(e);
  t > on && Tt.splice(t, 1);
}
function op(e) {
  ke(e) ? Sr.push(...e) : (!Dn || !Dn.includes(
    e,
    e.allowRecurse ? nr + 1 : nr
  )) && Sr.push(e), Qu();
}
function ri(e, t, n = ua ? on + 1 : 0) {
  for (; n < Tt.length; n++) {
    const r = Tt[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid)
        continue;
      Tt.splice(n, 1), n--, r();
    }
  }
}
function Ju(e) {
  if (Sr.length) {
    const t = [...new Set(Sr)].sort(
      (n, r) => ca(n) - ca(r)
    );
    if (Sr.length = 0, Dn) {
      Dn.push(...t);
      return;
    }
    for (Dn = t, nr = 0; nr < Dn.length; nr++)
      Dn[nr]();
    Dn = null, nr = 0;
  }
}
const ca = (e) => e.id == null ? 1 / 0 : e.id, sp = (e, t) => {
  const n = ca(e) - ca(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Zu(e) {
  xs = !1, ua = !0, Tt.sort(sp);
  try {
    for (on = 0; on < Tt.length; on++) {
      const t = Tt[on];
      t && t.active !== !1 && Vn(t, null, 14);
    }
  } finally {
    on = 0, Tt.length = 0, Ju(), ua = !1, il = null, (Tt.length || Sr.length) && Zu();
  }
}
function lp(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || Je;
  let a = n;
  const o = t.startsWith("update:"), s = o && t.slice(7);
  if (s && s in r) {
    const u = `${s === "modelValue" ? "model" : s}Modifiers`, { number: c, trim: p } = r[u] || Je;
    p && (a = n.map((b) => ot(b) ? b.trim() : b)), c && (a = n.map(la));
  }
  let l, i = r[l = jo(t)] || // also try camelCase event handler (#2249)
  r[l = jo(Qt(t))];
  !i && o && (i = r[l = jo(Un(t))]), i && Ht(
    i,
    e,
    6,
    a
  );
  const d = r[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ht(
      d,
      e,
      6,
      a
    );
  }
}
function ec(e, t, n = !1) {
  const r = t.emitsCache, a = r.get(e);
  if (a !== void 0)
    return a;
  const o = e.emits;
  let s = {}, l = !1;
  if (!Ce(e)) {
    const i = (d) => {
      const u = ec(d, t, !0);
      u && (l = !0, yt(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(i), e.extends && i(e.extends), e.mixins && e.mixins.forEach(i);
  }
  return !o && !l ? (Qe(e) && r.set(e, null), null) : (ke(o) ? o.forEach((i) => s[i] = null) : yt(s, o), Qe(e) && r.set(e, s), s);
}
function bo(e, t) {
  return !e || !co(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ye(e, t[0].toLowerCase() + t.slice(1)) || Ye(e, Un(t)) || Ye(e, t));
}
let vt = null, wo = null;
function qa(e) {
  const t = vt;
  return vt = e, wo = e && e.type.__scopeId || null, t;
}
function ip(e) {
  wo = e;
}
function up() {
  wo = null;
}
function Ve(e, t = vt, n) {
  if (!t || e._n)
    return e;
  const r = (...a) => {
    r._d && vi(-1);
    const o = qa(t);
    let s;
    try {
      s = e(...a);
    } finally {
      qa(o), r._d && vi(1);
    }
    return s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Wo(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: a,
    props: o,
    propsOptions: [s],
    slots: l,
    attrs: i,
    emit: d,
    render: u,
    renderCache: c,
    data: p,
    setupState: b,
    ctx: g,
    inheritAttrs: y
  } = e;
  let M, E;
  const V = qa(e);
  try {
    if (n.shapeFlag & 4) {
      const k = a || r, A = k;
      M = an(
        u.call(
          A,
          k,
          c,
          o,
          b,
          p,
          g
        )
      ), E = i;
    } else {
      const k = t;
      M = an(
        k.length > 1 ? k(
          o,
          { attrs: i, slots: l, emit: d }
        ) : k(
          o,
          null
          /* we know it doesn't need it */
        )
      ), E = t.props ? i : cp(i);
    }
  } catch (k) {
    na.length = 0, go(k, e, 1), M = Xe(jt);
  }
  let h = M;
  if (E && y !== !1) {
    const k = Object.keys(E), { shapeFlag: A } = h;
    k.length && A & 7 && (s && k.some(Ks) && (E = dp(
      E,
      s
    )), h = Ln(h, E));
  }
  return n.dirs && (h = Ln(h), h.dirs = h.dirs ? h.dirs.concat(n.dirs) : n.dirs), n.transition && (h.transition = n.transition), M = h, qa(V), M;
}
const cp = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || co(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, dp = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ks(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function fp(e, t, n) {
  const { props: r, children: a, component: o } = e, { props: s, children: l, patchFlag: i } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && i >= 0) {
    if (i & 1024)
      return !0;
    if (i & 16)
      return r ? ai(r, s, d) : !!s;
    if (i & 8) {
      const u = t.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        const p = u[c];
        if (s[p] !== r[p] && !bo(d, p))
          return !0;
      }
    }
  } else
    return (a || l) && (!l || !l.$stable) ? !0 : r === s ? !1 : r ? s ? ai(r, s, d) : !0 : !!s;
  return !1;
}
function ai(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    if (t[o] !== e[o] && !bo(n, o))
      return !0;
  }
  return !1;
}
function pp({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const tc = "components";
function mp(e, t) {
  return rc(tc, e, !0, t) || e;
}
const nc = Symbol.for("v-ndc");
function _o(e) {
  return ot(e) ? rc(tc, e, !1) || e : e || nc;
}
function rc(e, t, n = !0, r = !1) {
  const a = vt || wt;
  if (a) {
    const o = a.type;
    {
      const l = cm(
        o,
        !1
      );
      if (l && (l === t || l === Qt(t) || l === mo(Qt(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      oi(a[e] || o[e], t) || // global registration
      oi(a.appContext[e], t)
    );
    return !s && r ? o : s;
  }
}
function oi(e, t) {
  return e && (e[t] || e[Qt(t)] || e[mo(Qt(t))]);
}
const hp = (e) => e.__isSuspense;
function vp(e, t) {
  t && t.pendingBranch ? ke(e) ? t.effects.push(...e) : t.effects.push(e) : op(e);
}
const yp = Symbol.for("v-scx"), gp = () => ea(yp);
function bp(e, t) {
  return cl(
    e,
    null,
    { flush: "sync" }
  );
}
const Da = {};
function rt(e, t, n) {
  return cl(e, t, n);
}
function cl(e, t, {
  immediate: n,
  deep: r,
  flush: a,
  once: o,
  onTrack: s,
  onTrigger: l
} = Je) {
  if (t && o) {
    const F = t;
    t = (...j) => {
      F(...j), A();
    };
  }
  const i = wt, d = (F) => r === !0 ? F : (
    // for deep: false, only traverse root-level properties
    or(F, r === !1 ? 1 : void 0)
  );
  let u, c = !1, p = !1;
  if (ct(e) ? (u = () => e.value, c = Ua(e)) : $n(e) ? (u = () => d(e), c = !0) : ke(e) ? (p = !0, c = e.some((F) => $n(F) || Ua(F)), u = () => e.map((F) => {
    if (ct(F))
      return F.value;
    if ($n(F))
      return d(F);
    if (Ce(F))
      return Vn(F, i, 2);
  })) : Ce(e) ? t ? u = () => Vn(e, i, 2) : u = () => (b && b(), Ht(
    e,
    i,
    3,
    [g]
  )) : u = Yt, t && r) {
    const F = u;
    u = () => or(F());
  }
  let b, g = (F) => {
    b = h.onStop = () => {
      Vn(F, i, 4), b = h.onStop = void 0;
    };
  }, y;
  if (Po)
    if (g = Yt, t ? n && Ht(t, i, 3, [
      u(),
      p ? [] : void 0,
      g
    ]) : u(), a === "sync") {
      const F = gp();
      y = F.__watcherHandles || (F.__watcherHandles = []);
    } else
      return Yt;
  let M = p ? new Array(e.length).fill(Da) : Da;
  const E = () => {
    if (!(!h.active || !h.dirty))
      if (t) {
        const F = h.run();
        (r || c || (p ? F.some((j, _) => pn(j, M[_])) : pn(F, M))) && (b && b(), Ht(t, i, 3, [
          F,
          // pass undefined as the old value when it's changed for the first time
          M === Da ? void 0 : p && M[0] === Da ? [] : M,
          g
        ]), M = F);
      } else
        h.run();
  };
  E.allowRecurse = !!t;
  let V;
  a === "sync" ? V = E : a === "post" ? V = () => Ot(E, i && i.suspense) : (E.pre = !0, i && (E.id = i.uid), V = () => ul(E));
  const h = new Zs(u, Yt, V), k = Js(), A = () => {
    h.stop(), k && Xs(k.effects, h);
  };
  return t ? n ? E() : M = h.run() : a === "post" ? Ot(
    h.run.bind(h),
    i && i.suspense
  ) : h.run(), y && y.push(A), A;
}
function wp(e, t, n) {
  const r = this.proxy, a = ot(e) ? e.includes(".") ? ac(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Ce(t) ? o = t : (o = t.handler, n = t);
  const s = ba(this), l = cl(a, o.bind(r), n);
  return s(), l;
}
function ac(e, t) {
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
  else if (ke(e))
    for (let a = 0; a < e.length; a++)
      or(e[a], t, n, r);
  else if (fo(e) || Mr(e))
    e.forEach((a) => {
      or(a, t, n, r);
    });
  else if (Au(e))
    for (const a in e)
      or(e[a], t, n, r);
  return e;
}
function bn(e, t) {
  if (vt === null)
    return e;
  const n = Ao(vt) || vt.proxy, r = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [o, s, l, i = Je] = t[a];
    o && (Ce(o) && (o = {
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
    i && (Wn(), Ht(i, n, 8, [
      e.el,
      l,
      e,
      t
    ]), hr());
  }
}
const On = Symbol("_leaveCb"), Oa = Symbol("_enterCb");
function _p() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return xt(() => {
    e.isMounted = !0;
  }), Mo(() => {
    e.isUnmounting = !0;
  }), e;
}
const Lt = [Function, Array], oc = {
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
}, xp = {
  name: "BaseTransition",
  props: oc,
  setup(e, { slots: t }) {
    const n = hl(), r = _p();
    return () => {
      const a = t.default && lc(t.default(), !0);
      if (!a || !a.length)
        return;
      let o = a[0];
      if (a.length > 1) {
        for (const p of a)
          if (p.type !== jt) {
            o = p;
            break;
          }
      }
      const s = Le(e), { mode: l } = s;
      if (r.isLeaving)
        return qo(o);
      const i = si(o);
      if (!i)
        return qo(o);
      const d = ks(
        i,
        s,
        r,
        n
      );
      Ms(i, d);
      const u = n.subTree, c = u && si(u);
      if (c && c.type !== jt && !rr(i, c)) {
        const p = ks(
          c,
          s,
          r,
          n
        );
        if (Ms(c, p), l === "out-in")
          return r.isLeaving = !0, p.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, qo(o);
        l === "in-out" && i.type !== jt && (p.delayLeave = (b, g, y) => {
          const M = sc(
            r,
            c
          );
          M[String(c.key)] = c, b[On] = () => {
            g(), b[On] = void 0, delete d.delayedLeave;
          }, d.delayedLeave = y;
        });
      }
      return o;
    };
  }
}, kp = xp;
function sc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function ks(e, t, n, r) {
  const {
    appear: a,
    mode: o,
    persisted: s = !1,
    onBeforeEnter: l,
    onEnter: i,
    onAfterEnter: d,
    onEnterCancelled: u,
    onBeforeLeave: c,
    onLeave: p,
    onAfterLeave: b,
    onLeaveCancelled: g,
    onBeforeAppear: y,
    onAppear: M,
    onAfterAppear: E,
    onAppearCancelled: V
  } = t, h = String(e.key), k = sc(n, e), A = (_, O) => {
    _ && Ht(
      _,
      r,
      9,
      O
    );
  }, F = (_, O) => {
    const W = O[1];
    A(_, O), ke(_) ? _.every((C) => C.length <= 1) && W() : _.length <= 1 && W();
  }, j = {
    mode: o,
    persisted: s,
    beforeEnter(_) {
      let O = l;
      if (!n.isMounted)
        if (a)
          O = y || l;
        else
          return;
      _[On] && _[On](
        !0
        /* cancelled */
      );
      const W = k[h];
      W && rr(e, W) && W.el[On] && W.el[On](), A(O, [_]);
    },
    enter(_) {
      let O = i, W = d, C = u;
      if (!n.isMounted)
        if (a)
          O = M || i, W = E || d, C = V || u;
        else
          return;
      let S = !1;
      const B = _[Oa] = ($) => {
        S || (S = !0, $ ? A(C, [_]) : A(W, [_]), j.delayedLeave && j.delayedLeave(), _[Oa] = void 0);
      };
      O ? F(O, [_, B]) : B();
    },
    leave(_, O) {
      const W = String(e.key);
      if (_[Oa] && _[Oa](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return O();
      A(c, [_]);
      let C = !1;
      const S = _[On] = (B) => {
        C || (C = !0, O(), B ? A(g, [_]) : A(b, [_]), _[On] = void 0, k[W] === e && delete k[W]);
      };
      k[W] = e, p ? F(p, [_, S]) : S();
    },
    clone(_) {
      return ks(_, t, n, r);
    }
  };
  return j;
}
function qo(e) {
  if (xo(e))
    return e = Ln(e), e.children = null, e;
}
function si(e) {
  return xo(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    e.children ? e.children[0] : void 0
  ) : e;
}
function Ms(e, t) {
  e.shapeFlag & 6 && e.component ? Ms(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function lc(e, t = !1, n) {
  let r = [], a = 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    const l = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
    s.type === _e ? (s.patchFlag & 128 && a++, r = r.concat(
      lc(s.children, t, l)
    )) : (t || s.type !== jt) && r.push(l != null ? Ln(s, { key: l }) : s);
  }
  if (a > 1)
    for (let o = 0; o < r.length; o++)
      r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Mt(e, t) {
  return Ce(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    yt({ name: e.name }, t, { setup: e })
  ) : e;
}
const Jr = (e) => !!e.type.__asyncLoader, xo = (e) => e.type.__isKeepAlive;
function Mp(e, t) {
  ic(e, "a", t);
}
function Tp(e, t) {
  ic(e, "da", t);
}
function ic(e, t, n = wt) {
  const r = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (ko(t, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      xo(a.parent.vnode) && Sp(r, t, n, a), a = a.parent;
  }
}
function Sp(e, t, n, r) {
  const a = ko(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Fr(() => {
    Xs(r[t], a);
  }, n);
}
function ko(e, t, n = wt, r = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      Wn();
      const l = ba(n), i = Ht(t, n, e, s);
      return l(), hr(), i;
    });
    return r ? a.unshift(o) : a.push(o), o;
  }
}
const _n = (e) => (t, n = wt) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Po || e === "sp") && ko(e, (...r) => t(...r), n)
), Pp = _n("bm"), xt = _n("m"), uc = _n("bu"), Ap = _n("u"), Mo = _n("bum"), Fr = _n("um"), Cp = _n("sp"), Dp = _n(
  "rtg"
), Op = _n(
  "rtc"
);
function Ep(e, t = wt) {
  ko("ec", e, t);
}
function qe(e, t, n, r) {
  let a;
  const o = n;
  if (ke(e) || ot(e)) {
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
        const d = s[l];
        a[l] = t(e[d], d, l, o);
      }
    }
  else
    a = [];
  return a;
}
function Dt(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (ke(r))
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
  o && o._c && (o._d = !1), I();
  const s = o && cc(o(n)), l = Ae(
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
function cc(e) {
  return e.some((t) => Xa(t) ? !(t.type === jt || t.type === _e && !cc(t.children)) : !0) ? e : null;
}
const Ts = (e) => e ? kc(e) ? Ao(e) || e.proxy : Ts(e.parent) : null, Zr = (
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
    $parent: (e) => Ts(e.parent),
    $root: (e) => Ts(e.root),
    $emit: (e) => e.emit,
    $options: (e) => dl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, ul(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ut.bind(e.proxy)),
    $watch: (e) => wp.bind(e)
  })
), zo = (e, t) => e !== Je && !e.__isScriptSetup && Ye(e, t), Rp = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: a, props: o, accessCache: s, type: l, appContext: i } = e;
    let d;
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
        if (zo(r, t))
          return s[t] = 1, r[t];
        if (a !== Je && Ye(a, t))
          return s[t] = 2, a[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && Ye(d, t)
        )
          return s[t] = 3, o[t];
        if (n !== Je && Ye(n, t))
          return s[t] = 4, n[t];
        Ss && (s[t] = 0);
      }
    }
    const u = Zr[t];
    let c, p;
    if (u)
      return t === "$attrs" && Nt(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
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
    return zo(a, t) ? (a[t] = n, !0) : r !== Je && Ye(r, t) ? (r[t] = n, !0) : Ye(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, propsOptions: o }
  }, s) {
    let l;
    return !!n[s] || e !== Je && Ye(e, s) || zo(t, s) || (l = o[0]) && Ye(l, s) || Ye(r, s) || Ye(Zr, s) || Ye(a.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ye(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function vr() {
  return Np().slots;
}
function Np() {
  const e = hl();
  return e.setupContext || (e.setupContext = Tc(e));
}
function za(e) {
  return ke(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ga(e, t) {
  return !e || !t ? e || t : ke(e) && ke(t) ? e.concat(t) : yt({}, za(e), za(t));
}
let Ss = !0;
function $p(e) {
  const t = dl(e), n = e.proxy, r = e.ctx;
  Ss = !1, t.beforeCreate && li(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: o,
    methods: s,
    watch: l,
    provide: i,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: c,
    mounted: p,
    beforeUpdate: b,
    updated: g,
    activated: y,
    deactivated: M,
    beforeDestroy: E,
    beforeUnmount: V,
    destroyed: h,
    unmounted: k,
    render: A,
    renderTracked: F,
    renderTriggered: j,
    errorCaptured: _,
    serverPrefetch: O,
    // public API
    expose: W,
    inheritAttrs: C,
    // assets
    components: S,
    directives: B,
    filters: $
  } = t;
  if (d && Vp(d, r, null), s)
    for (const q in s) {
      const re = s[q];
      Ce(re) && (r[q] = re.bind(n));
    }
  if (a) {
    const q = a.call(n, n);
    Qe(q) && (e.data = wn(q));
  }
  if (Ss = !0, o)
    for (const q in o) {
      const re = o[q], fe = Ce(re) ? re.bind(n, n) : Ce(re.get) ? re.get.bind(n, n) : Yt, te = !Ce(re) && Ce(re.set) ? re.set.bind(n) : Yt, m = Z({
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
    const q = Ce(i) ? i.call(n) : i;
    Reflect.ownKeys(q).forEach((re) => {
      Hp(re, q[re]);
    });
  }
  u && li(u, e, "c");
  function T(q, re) {
    ke(re) ? re.forEach((fe) => q(fe.bind(n))) : re && q(re.bind(n));
  }
  if (T(Pp, c), T(xt, p), T(uc, b), T(Ap, g), T(Mp, y), T(Tp, M), T(Ep, _), T(Op, F), T(Dp, j), T(Mo, V), T(Fr, k), T(Cp, O), ke(W))
    if (W.length) {
      const q = e.exposed || (e.exposed = {});
      W.forEach((re) => {
        Object.defineProperty(q, re, {
          get: () => n[re],
          set: (fe) => n[re] = fe
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === Yt && (e.render = A), C != null && (e.inheritAttrs = C), S && (e.components = S), B && (e.directives = B);
}
function Vp(e, t, n = Yt) {
  ke(e) && (e = Ps(e));
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
function li(e, t, n) {
  Ht(
    ke(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function dc(e, t, n, r) {
  const a = r.includes(".") ? ac(n, r) : () => n[r];
  if (ot(e)) {
    const o = t[e];
    Ce(o) && rt(a, o);
  } else if (Ce(e))
    rt(a, e.bind(n));
  else if (Qe(e))
    if (ke(e))
      e.forEach((o) => dc(o, t, n, r));
    else {
      const o = Ce(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ce(o) && rt(a, o, e);
    }
}
function dl(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: a,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = o.get(t);
  let i;
  return l ? i = l : !a.length && !n && !r ? i = t : (i = {}, a.length && a.forEach(
    (d) => Ka(i, d, s, !0)
  ), Ka(i, t, s)), Qe(t) && o.set(t, i), i;
}
function Ka(e, t, n, r = !1) {
  const { mixins: a, extends: o } = t;
  o && Ka(e, o, n, !0), a && a.forEach(
    (s) => Ka(e, s, n, !0)
  );
  for (const s in t)
    if (!(r && s === "expose")) {
      const l = Ip[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Ip = {
  data: ii,
  props: ui,
  emits: ui,
  // objects
  methods: Kr,
  computed: Kr,
  // lifecycle
  beforeCreate: Ct,
  created: Ct,
  beforeMount: Ct,
  mounted: Ct,
  beforeUpdate: Ct,
  updated: Ct,
  beforeDestroy: Ct,
  beforeUnmount: Ct,
  destroyed: Ct,
  unmounted: Ct,
  activated: Ct,
  deactivated: Ct,
  errorCaptured: Ct,
  serverPrefetch: Ct,
  // assets
  components: Kr,
  directives: Kr,
  // watch
  watch: Bp,
  // provide / inject
  provide: ii,
  inject: Fp
};
function ii(e, t) {
  return t ? e ? function() {
    return yt(
      Ce(e) ? e.call(this, this) : e,
      Ce(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Fp(e, t) {
  return Kr(Ps(e), Ps(t));
}
function Ps(e) {
  if (ke(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ct(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Kr(e, t) {
  return e ? yt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ui(e, t) {
  return e ? ke(e) && ke(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yt(
    /* @__PURE__ */ Object.create(null),
    za(e),
    za(t ?? {})
  ) : t;
}
function Bp(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = yt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ct(e[r], t[r]);
  return n;
}
function fc() {
  return {
    app: null,
    config: {
      isNativeTag: cf,
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
let Lp = 0;
function Yp(e, t) {
  return function(r, a = null) {
    Ce(r) || (r = yt({}, r)), a != null && !Qe(a) && (a = null);
    const o = fc(), s = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const i = o.app = {
      _uid: Lp++,
      _component: r,
      _props: a,
      _container: null,
      _context: o,
      _instance: null,
      version: fm,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...u) {
        return s.has(d) || (d && Ce(d.install) ? (s.add(d), d.install(i, ...u)) : Ce(d) && (s.add(d), d(i, ...u))), i;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), i;
      },
      component(d, u) {
        return u ? (o.components[d] = u, i) : o.components[d];
      },
      directive(d, u) {
        return u ? (o.directives[d] = u, i) : o.directives[d];
      },
      mount(d, u, c) {
        if (!l) {
          const p = Xe(r, a);
          return p.appContext = o, c === !0 ? c = "svg" : c === !1 && (c = void 0), u && t ? t(p, d) : e(p, d, c), l = !0, i._container = d, d.__vue_app__ = i, Ao(p.component) || p.component.proxy;
        }
      },
      unmount() {
        l && (e(null, i._container), delete i._container.__vue_app__);
      },
      provide(d, u) {
        return o.provides[d] = u, i;
      },
      runWithContext(d) {
        const u = Pr;
        Pr = i;
        try {
          return d();
        } finally {
          Pr = u;
        }
      }
    };
    return i;
  };
}
let Pr = null;
function Hp(e, t) {
  if (wt) {
    let n = wt.provides;
    const r = wt.parent && wt.parent.provides;
    r === n && (n = wt.provides = Object.create(r)), n[e] = t;
  }
}
function ea(e, t, n = !1) {
  const r = wt || vt;
  if (r || Pr) {
    const a = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Pr._context.provides;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Ce(t) ? t.call(r && r.proxy) : t;
  }
}
function jp() {
  return !!(wt || vt || Pr);
}
function Up(e, t, n, r = !1) {
  const a = {}, o = {};
  Ha(o, So, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), pc(e, t, a, o);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = r ? a : qf(a) : e.type.props ? e.props = a : e.props = o, e.attrs = o;
}
function Wp(e, t, n, r) {
  const {
    props: a,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, l = Le(a), [i] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let c = 0; c < u.length; c++) {
        let p = u[c];
        if (bo(e.emitsOptions, p))
          continue;
        const b = t[p];
        if (i)
          if (Ye(o, p))
            b !== o[p] && (o[p] = b, d = !0);
          else {
            const g = Qt(p);
            a[g] = As(
              i,
              l,
              g,
              b,
              e,
              !1
            );
          }
        else
          b !== o[p] && (o[p] = b, d = !0);
      }
    }
  } else {
    pc(e, t, a, o) && (d = !0);
    let u;
    for (const c in l)
      (!t || // for camelCase
      !Ye(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Un(c)) === c || !Ye(t, u))) && (i ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[c] = As(
        i,
        l,
        c,
        void 0,
        e,
        !0
      )) : delete a[c]);
    if (o !== l)
      for (const c in o)
        (!t || !Ye(t, c)) && (delete o[c], d = !0);
  }
  d && gn(e, "set", "$attrs");
}
function pc(e, t, n, r) {
  const [a, o] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let i in t) {
      if (Qr(i))
        continue;
      const d = t[i];
      let u;
      a && Ye(a, u = Qt(i)) ? !o || !o.includes(u) ? n[u] = d : (l || (l = {}))[u] = d : bo(e.emitsOptions, i) || (!(i in r) || d !== r[i]) && (r[i] = d, s = !0);
    }
  if (o) {
    const i = Le(n), d = l || Je;
    for (let u = 0; u < o.length; u++) {
      const c = o[u];
      n[c] = As(
        a,
        i,
        c,
        d[c],
        e,
        !Ye(d, c)
      );
    }
  }
  return s;
}
function As(e, t, n, r, a, o) {
  const s = e[n];
  if (s != null) {
    const l = Ye(s, "default");
    if (l && r === void 0) {
      const i = s.default;
      if (s.type !== Function && !s.skipFactory && Ce(i)) {
        const { propsDefaults: d } = a;
        if (n in d)
          r = d[n];
        else {
          const u = ba(a);
          r = d[n] = i.call(
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
  if (!Ce(e)) {
    const u = (c) => {
      i = !0;
      const [p, b] = mc(c, t, !0);
      yt(s, p), b && l.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !i)
    return Qe(e) && r.set(e, kr), kr;
  if (ke(o))
    for (let u = 0; u < o.length; u++) {
      const c = Qt(o[u]);
      ci(c) && (s[c] = Je);
    }
  else if (o)
    for (const u in o) {
      const c = Qt(u);
      if (ci(c)) {
        const p = o[u], b = s[c] = ke(p) || Ce(p) ? { type: p } : yt({}, p);
        if (b) {
          const g = pi(Boolean, b.type), y = pi(String, b.type);
          b[
            0
            /* shouldCast */
          ] = g > -1, b[
            1
            /* shouldCastTrue */
          ] = y < 0 || g < y, (g > -1 || Ye(b, "default")) && l.push(c);
        }
      }
    }
  const d = [s, l];
  return Qe(e) && r.set(e, d), d;
}
function ci(e) {
  return e[0] !== "$" && !Qr(e);
}
function di(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function fi(e, t) {
  return di(e) === di(t);
}
function pi(e, t) {
  return ke(t) ? t.findIndex((n) => fi(n, e)) : Ce(t) && fi(t, e) ? 0 : -1;
}
const hc = (e) => e[0] === "_" || e === "$stable", fl = (e) => ke(e) ? e.map(an) : [an(e)], qp = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ve((...a) => fl(t(...a)), n);
  return r._c = !1, r;
}, vc = (e, t, n) => {
  const r = e._ctx;
  for (const a in e) {
    if (hc(a))
      continue;
    const o = e[a];
    if (Ce(o))
      t[a] = qp(a, o, r);
    else if (o != null) {
      const s = fl(o);
      t[a] = () => s;
    }
  }
}, yc = (e, t) => {
  const n = fl(t);
  e.slots.default = () => n;
}, zp = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = Le(t), Ha(t, "_", n)) : vc(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && yc(e, t);
  Ha(e.slots, So, 1);
}, Gp = (e, t, n) => {
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
function Cs(e, t, n, r, a = !1) {
  if (ke(e)) {
    e.forEach(
      (p, b) => Cs(
        p,
        t && (ke(t) ? t[b] : t),
        n,
        r,
        a
      )
    );
    return;
  }
  if (Jr(r) && !a)
    return;
  const o = r.shapeFlag & 4 ? Ao(r.component) || r.component.proxy : r.el, s = a ? null : o, { i: l, r: i } = e, d = t && t.r, u = l.refs === Je ? l.refs = {} : l.refs, c = l.setupState;
  if (d != null && d !== i && (ot(d) ? (u[d] = null, Ye(c, d) && (c[d] = null)) : ct(d) && (d.value = null)), Ce(i))
    Vn(i, l, 12, [s, u]);
  else {
    const p = ot(i), b = ct(i);
    if (p || b) {
      const g = () => {
        if (e.f) {
          const y = p ? Ye(c, i) ? c[i] : u[i] : i.value;
          a ? ke(y) && Xs(y, o) : ke(y) ? y.includes(o) || y.push(o) : p ? (u[i] = [o], Ye(c, i) && (c[i] = u[i])) : (i.value = [o], e.k && (u[e.k] = i.value));
        } else p ? (u[i] = s, Ye(c, i) && (c[i] = s)) : b && (i.value = s, e.k && (u[e.k] = s));
      };
      s ? (g.id = -1, Ot(g, n)) : g();
    }
  }
}
const Ot = vp;
function Kp(e) {
  return Xp(e);
}
function Xp(e, t) {
  const n = Cu();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: o,
    createElement: s,
    createText: l,
    createComment: i,
    setText: d,
    setElementText: u,
    parentNode: c,
    nextSibling: p,
    setScopeId: b = Yt,
    insertStaticContent: g
  } = e, y = (v, x, L, K = null, R = null, oe = null, ie = void 0, le = null, ue = !!x.dynamicChildren) => {
    if (v === x)
      return;
    v && !rr(v, x) && (K = Oe(v), f(v, R, oe, !0), v = null), x.patchFlag === -2 && (ue = !1, x.dynamicChildren = null);
    const { type: ae, ref: de, shapeFlag: me } = x;
    switch (ae) {
      case To:
        M(v, x, L, K);
        break;
      case jt:
        E(v, x, L, K);
        break;
      case Ko:
        v == null && V(x, L, K, ie);
        break;
      case _e:
        S(
          v,
          x,
          L,
          K,
          R,
          oe,
          ie,
          le,
          ue
        );
        break;
      default:
        me & 1 ? A(
          v,
          x,
          L,
          K,
          R,
          oe,
          ie,
          le,
          ue
        ) : me & 6 ? B(
          v,
          x,
          L,
          K,
          R,
          oe,
          ie,
          le,
          ue
        ) : (me & 64 || me & 128) && ae.process(
          v,
          x,
          L,
          K,
          R,
          oe,
          ie,
          le,
          ue,
          ve
        );
    }
    de != null && R && Cs(de, v && v.ref, oe, x || v, !x);
  }, M = (v, x, L, K) => {
    if (v == null)
      r(
        x.el = l(x.children),
        L,
        K
      );
    else {
      const R = x.el = v.el;
      x.children !== v.children && d(R, x.children);
    }
  }, E = (v, x, L, K) => {
    v == null ? r(
      x.el = i(x.children || ""),
      L,
      K
    ) : x.el = v.el;
  }, V = (v, x, L, K) => {
    [v.el, v.anchor] = g(
      v.children,
      x,
      L,
      K,
      v.el,
      v.anchor
    );
  }, h = ({ el: v, anchor: x }, L, K) => {
    let R;
    for (; v && v !== x; )
      R = p(v), r(v, L, K), v = R;
    r(x, L, K);
  }, k = ({ el: v, anchor: x }) => {
    let L;
    for (; v && v !== x; )
      L = p(v), a(v), v = L;
    a(x);
  }, A = (v, x, L, K, R, oe, ie, le, ue) => {
    x.type === "svg" ? ie = "svg" : x.type === "math" && (ie = "mathml"), v == null ? F(
      x,
      L,
      K,
      R,
      oe,
      ie,
      le,
      ue
    ) : O(
      v,
      x,
      R,
      oe,
      ie,
      le,
      ue
    );
  }, F = (v, x, L, K, R, oe, ie, le) => {
    let ue, ae;
    const { props: de, shapeFlag: me, transition: we, dirs: Te } = v;
    if (ue = v.el = s(
      v.type,
      oe,
      de && de.is,
      de
    ), me & 8 ? u(ue, v.children) : me & 16 && _(
      v.children,
      ue,
      null,
      K,
      R,
      Go(v, oe),
      ie,
      le
    ), Te && Xn(v, null, K, "created"), j(ue, v, v.scopeId, ie, K), de) {
      for (const je in de)
        je !== "value" && !Qr(je) && o(
          ue,
          je,
          null,
          de[je],
          oe,
          v.children,
          K,
          R,
          Y
        );
      "value" in de && o(ue, "value", null, de.value, oe), (ae = de.onVnodeBeforeMount) && nn(ae, K, v);
    }
    Te && Xn(v, null, K, "beforeMount");
    const Re = Qp(R, we);
    Re && we.beforeEnter(ue), r(ue, x, L), ((ae = de && de.onVnodeMounted) || Re || Te) && Ot(() => {
      ae && nn(ae, K, v), Re && we.enter(ue), Te && Xn(v, null, K, "mounted");
    }, R);
  }, j = (v, x, L, K, R) => {
    if (L && b(v, L), K)
      for (let oe = 0; oe < K.length; oe++)
        b(v, K[oe]);
    if (R) {
      let oe = R.subTree;
      if (x === oe) {
        const ie = R.vnode;
        j(
          v,
          ie,
          ie.scopeId,
          ie.slotScopeIds,
          R.parent
        );
      }
    }
  }, _ = (v, x, L, K, R, oe, ie, le, ue = 0) => {
    for (let ae = ue; ae < v.length; ae++) {
      const de = v[ae] = le ? En(v[ae]) : an(v[ae]);
      y(
        null,
        de,
        x,
        L,
        K,
        R,
        oe,
        ie,
        le
      );
    }
  }, O = (v, x, L, K, R, oe, ie) => {
    const le = x.el = v.el;
    let { patchFlag: ue, dynamicChildren: ae, dirs: de } = x;
    ue |= v.patchFlag & 16;
    const me = v.props || Je, we = x.props || Je;
    let Te;
    if (L && Qn(L, !1), (Te = we.onVnodeBeforeUpdate) && nn(Te, L, x, v), de && Xn(x, v, L, "beforeUpdate"), L && Qn(L, !0), ae ? W(
      v.dynamicChildren,
      ae,
      le,
      L,
      K,
      Go(x, R),
      oe
    ) : ie || re(
      v,
      x,
      le,
      null,
      L,
      K,
      Go(x, R),
      oe,
      !1
    ), ue > 0) {
      if (ue & 16)
        C(
          le,
          x,
          me,
          we,
          L,
          K,
          R
        );
      else if (ue & 2 && me.class !== we.class && o(le, "class", null, we.class, R), ue & 4 && o(le, "style", me.style, we.style, R), ue & 8) {
        const Re = x.dynamicProps;
        for (let je = 0; je < Re.length; je++) {
          const Ke = Re[je], it = me[Ke], H = we[Ke];
          (H !== it || Ke === "value") && o(
            le,
            Ke,
            it,
            H,
            R,
            v.children,
            L,
            K,
            Y
          );
        }
      }
      ue & 1 && v.children !== x.children && u(le, x.children);
    } else !ie && ae == null && C(
      le,
      x,
      me,
      we,
      L,
      K,
      R
    );
    ((Te = we.onVnodeUpdated) || de) && Ot(() => {
      Te && nn(Te, L, x, v), de && Xn(x, v, L, "updated");
    }, K);
  }, W = (v, x, L, K, R, oe, ie) => {
    for (let le = 0; le < x.length; le++) {
      const ue = v[le], ae = x[le], de = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ue.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ue.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !rr(ue, ae) || // - In the case of a component, it could contain anything.
        ue.shapeFlag & 70) ? c(ue.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          L
        )
      );
      y(
        ue,
        ae,
        de,
        null,
        K,
        R,
        oe,
        ie,
        !0
      );
    }
  }, C = (v, x, L, K, R, oe, ie) => {
    if (L !== K) {
      if (L !== Je)
        for (const le in L)
          !Qr(le) && !(le in K) && o(
            v,
            le,
            L[le],
            null,
            ie,
            x.children,
            R,
            oe,
            Y
          );
      for (const le in K) {
        if (Qr(le))
          continue;
        const ue = K[le], ae = L[le];
        ue !== ae && le !== "value" && o(
          v,
          le,
          ae,
          ue,
          ie,
          x.children,
          R,
          oe,
          Y
        );
      }
      "value" in K && o(v, "value", L.value, K.value, ie);
    }
  }, S = (v, x, L, K, R, oe, ie, le, ue) => {
    const ae = x.el = v ? v.el : l(""), de = x.anchor = v ? v.anchor : l("");
    let { patchFlag: me, dynamicChildren: we, slotScopeIds: Te } = x;
    Te && (le = le ? le.concat(Te) : Te), v == null ? (r(ae, L, K), r(de, L, K), _(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      x.children || [],
      L,
      de,
      R,
      oe,
      ie,
      le,
      ue
    )) : me > 0 && me & 64 && we && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren ? (W(
      v.dynamicChildren,
      we,
      L,
      R,
      oe,
      ie,
      le
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (x.key != null || R && x === R.subTree) && pl(
      v,
      x,
      !0
      /* shallow */
    )) : re(
      v,
      x,
      L,
      de,
      R,
      oe,
      ie,
      le,
      ue
    );
  }, B = (v, x, L, K, R, oe, ie, le, ue) => {
    x.slotScopeIds = le, v == null ? x.shapeFlag & 512 ? R.ctx.activate(
      x,
      L,
      K,
      ie,
      ue
    ) : $(
      x,
      L,
      K,
      R,
      oe,
      ie,
      ue
    ) : w(v, x, ue);
  }, $ = (v, x, L, K, R, oe, ie) => {
    const le = v.component = sm(
      v,
      K,
      R
    );
    if (xo(v) && (le.ctx.renderer = ve), lm(le), le.asyncDep) {
      if (R && R.registerDep(le, T), !v.el) {
        const ue = le.subTree = Xe(jt);
        E(null, ue, x, L);
      }
    } else
      T(
        le,
        v,
        x,
        L,
        R,
        oe,
        ie
      );
  }, w = (v, x, L) => {
    const K = x.component = v.component;
    if (fp(v, x, L))
      if (K.asyncDep && !K.asyncResolved) {
        q(K, x, L);
        return;
      } else
        K.next = x, ap(K.update), K.effect.dirty = !0, K.update();
    else
      x.el = v.el, K.vnode = x;
  }, T = (v, x, L, K, R, oe, ie) => {
    const le = () => {
      if (v.isMounted) {
        let { next: de, bu: me, u: we, parent: Te, vnode: Re } = v;
        {
          const se = gc(v);
          if (se) {
            de && (de.el = Re.el, q(v, de, ie)), se.asyncDep.then(() => {
              v.isUnmounted || le();
            });
            return;
          }
        }
        let je = de, Ke;
        Qn(v, !1), de ? (de.el = Re.el, q(v, de, ie)) : de = Re, me && Va(me), (Ke = de.props && de.props.onVnodeBeforeUpdate) && nn(Ke, Te, de, Re), Qn(v, !0);
        const it = Wo(v), H = v.subTree;
        v.subTree = it, y(
          H,
          it,
          // parent may have changed if it's in a teleport
          c(H.el),
          // anchor may have changed if it's in a fragment
          Oe(H),
          v,
          R,
          oe
        ), de.el = it.el, je === null && pp(v, it.el), we && Ot(we, R), (Ke = de.props && de.props.onVnodeUpdated) && Ot(
          () => nn(Ke, Te, de, Re),
          R
        );
      } else {
        let de;
        const { el: me, props: we } = x, { bm: Te, m: Re, parent: je } = v, Ke = Jr(x);
        if (Qn(v, !1), Te && Va(Te), !Ke && (de = we && we.onVnodeBeforeMount) && nn(de, je, x), Qn(v, !0), me && D) {
          const it = () => {
            v.subTree = Wo(v), D(
              me,
              v.subTree,
              v,
              R,
              null
            );
          };
          Ke ? x.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !v.isUnmounted && it()
          ) : it();
        } else {
          const it = v.subTree = Wo(v);
          y(
            null,
            it,
            L,
            K,
            v,
            R,
            oe
          ), x.el = it.el;
        }
        if (Re && Ot(Re, R), !Ke && (de = we && we.onVnodeMounted)) {
          const it = x;
          Ot(
            () => nn(de, je, it),
            R
          );
        }
        (x.shapeFlag & 256 || je && Jr(je.vnode) && je.vnode.shapeFlag & 256) && v.a && Ot(v.a, R), v.isMounted = !0, x = L = K = null;
      }
    }, ue = v.effect = new Zs(
      le,
      Yt,
      () => ul(ae),
      v.scope
      // track it in component's effect scope
    ), ae = v.update = () => {
      ue.dirty && ue.run();
    };
    ae.id = v.uid, Qn(v, !0), ae();
  }, q = (v, x, L) => {
    x.component = v;
    const K = v.vnode.props;
    v.vnode = x, v.next = null, Wp(v, x.props, K, L), Gp(v, x.children, L), Wn(), ri(v), hr();
  }, re = (v, x, L, K, R, oe, ie, le, ue = !1) => {
    const ae = v && v.children, de = v ? v.shapeFlag : 0, me = x.children, { patchFlag: we, shapeFlag: Te } = x;
    if (we > 0) {
      if (we & 128) {
        te(
          ae,
          me,
          L,
          K,
          R,
          oe,
          ie,
          le,
          ue
        );
        return;
      } else if (we & 256) {
        fe(
          ae,
          me,
          L,
          K,
          R,
          oe,
          ie,
          le,
          ue
        );
        return;
      }
    }
    Te & 8 ? (de & 16 && Y(ae, R, oe), me !== ae && u(L, me)) : de & 16 ? Te & 16 ? te(
      ae,
      me,
      L,
      K,
      R,
      oe,
      ie,
      le,
      ue
    ) : Y(ae, R, oe, !0) : (de & 8 && u(L, ""), Te & 16 && _(
      me,
      L,
      K,
      R,
      oe,
      ie,
      le,
      ue
    ));
  }, fe = (v, x, L, K, R, oe, ie, le, ue) => {
    v = v || kr, x = x || kr;
    const ae = v.length, de = x.length, me = Math.min(ae, de);
    let we;
    for (we = 0; we < me; we++) {
      const Te = x[we] = ue ? En(x[we]) : an(x[we]);
      y(
        v[we],
        Te,
        L,
        null,
        R,
        oe,
        ie,
        le,
        ue
      );
    }
    ae > de ? Y(
      v,
      R,
      oe,
      !0,
      !1,
      me
    ) : _(
      x,
      L,
      K,
      R,
      oe,
      ie,
      le,
      ue,
      me
    );
  }, te = (v, x, L, K, R, oe, ie, le, ue) => {
    let ae = 0;
    const de = x.length;
    let me = v.length - 1, we = de - 1;
    for (; ae <= me && ae <= we; ) {
      const Te = v[ae], Re = x[ae] = ue ? En(x[ae]) : an(x[ae]);
      if (rr(Te, Re))
        y(
          Te,
          Re,
          L,
          null,
          R,
          oe,
          ie,
          le,
          ue
        );
      else
        break;
      ae++;
    }
    for (; ae <= me && ae <= we; ) {
      const Te = v[me], Re = x[we] = ue ? En(x[we]) : an(x[we]);
      if (rr(Te, Re))
        y(
          Te,
          Re,
          L,
          null,
          R,
          oe,
          ie,
          le,
          ue
        );
      else
        break;
      me--, we--;
    }
    if (ae > me) {
      if (ae <= we) {
        const Te = we + 1, Re = Te < de ? x[Te].el : K;
        for (; ae <= we; )
          y(
            null,
            x[ae] = ue ? En(x[ae]) : an(x[ae]),
            L,
            Re,
            R,
            oe,
            ie,
            le,
            ue
          ), ae++;
      }
    } else if (ae > we)
      for (; ae <= me; )
        f(v[ae], R, oe, !0), ae++;
    else {
      const Te = ae, Re = ae, je = /* @__PURE__ */ new Map();
      for (ae = Re; ae <= we; ae++) {
        const he = x[ae] = ue ? En(x[ae]) : an(x[ae]);
        he.key != null && je.set(he.key, ae);
      }
      let Ke, it = 0;
      const H = we - Re + 1;
      let se = !1, xe = 0;
      const Se = new Array(H);
      for (ae = 0; ae < H; ae++)
        Se[ae] = 0;
      for (ae = Te; ae <= me; ae++) {
        const he = v[ae];
        if (it >= H) {
          f(he, R, oe, !0);
          continue;
        }
        let ye;
        if (he.key != null)
          ye = je.get(he.key);
        else
          for (Ke = Re; Ke <= we; Ke++)
            if (Se[Ke - Re] === 0 && rr(he, x[Ke])) {
              ye = Ke;
              break;
            }
        ye === void 0 ? f(he, R, oe, !0) : (Se[ye - Re] = ae + 1, ye >= xe ? xe = ye : se = !0, y(
          he,
          x[ye],
          L,
          null,
          R,
          oe,
          ie,
          le,
          ue
        ), it++);
      }
      const ne = se ? Jp(Se) : kr;
      for (Ke = ne.length - 1, ae = H - 1; ae >= 0; ae--) {
        const he = Re + ae, ye = x[he], Bt = he + 1 < de ? x[he + 1].el : K;
        Se[ae] === 0 ? y(
          null,
          ye,
          L,
          Bt,
          R,
          oe,
          ie,
          le,
          ue
        ) : se && (Ke < 0 || ae !== ne[Ke] ? m(ye, L, Bt, 2) : Ke--);
      }
    }
  }, m = (v, x, L, K, R = null) => {
    const { el: oe, type: ie, transition: le, children: ue, shapeFlag: ae } = v;
    if (ae & 6) {
      m(v.component.subTree, x, L, K);
      return;
    }
    if (ae & 128) {
      v.suspense.move(x, L, K);
      return;
    }
    if (ae & 64) {
      ie.move(v, x, L, ve);
      return;
    }
    if (ie === _e) {
      r(oe, x, L);
      for (let me = 0; me < ue.length; me++)
        m(ue[me], x, L, K);
      r(v.anchor, x, L);
      return;
    }
    if (ie === Ko) {
      h(v, x, L);
      return;
    }
    if (K !== 2 && ae & 1 && le)
      if (K === 0)
        le.beforeEnter(oe), r(oe, x, L), Ot(() => le.enter(oe), R);
      else {
        const { leave: me, delayLeave: we, afterLeave: Te } = le, Re = () => r(oe, x, L), je = () => {
          me(oe, () => {
            Re(), Te && Te();
          });
        };
        we ? we(oe, Re, je) : je();
      }
    else
      r(oe, x, L);
  }, f = (v, x, L, K = !1, R = !1) => {
    const {
      type: oe,
      props: ie,
      ref: le,
      children: ue,
      dynamicChildren: ae,
      shapeFlag: de,
      patchFlag: me,
      dirs: we
    } = v;
    if (le != null && Cs(le, null, L, v, !0), de & 256) {
      x.ctx.deactivate(v);
      return;
    }
    const Te = de & 1 && we, Re = !Jr(v);
    let je;
    if (Re && (je = ie && ie.onVnodeBeforeUnmount) && nn(je, x, v), de & 6)
      ce(v.component, L, K);
    else {
      if (de & 128) {
        v.suspense.unmount(L, K);
        return;
      }
      Te && Xn(v, null, x, "beforeUnmount"), de & 64 ? v.type.remove(
        v,
        x,
        L,
        R,
        ve,
        K
      ) : ae && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (oe !== _e || me > 0 && me & 64) ? Y(
        ae,
        x,
        L,
        !1,
        !0
      ) : (oe === _e && me & 384 || !R && de & 16) && Y(ue, x, L), K && N(v);
    }
    (Re && (je = ie && ie.onVnodeUnmounted) || Te) && Ot(() => {
      je && nn(je, x, v), Te && Xn(v, null, x, "unmounted");
    }, L);
  }, N = (v) => {
    const { type: x, el: L, anchor: K, transition: R } = v;
    if (x === _e) {
      X(L, K);
      return;
    }
    if (x === Ko) {
      k(v);
      return;
    }
    const oe = () => {
      a(L), R && !R.persisted && R.afterLeave && R.afterLeave();
    };
    if (v.shapeFlag & 1 && R && !R.persisted) {
      const { leave: ie, delayLeave: le } = R, ue = () => ie(L, oe);
      le ? le(v.el, oe, ue) : ue();
    } else
      oe();
  }, X = (v, x) => {
    let L;
    for (; v !== x; )
      L = p(v), a(v), v = L;
    a(x);
  }, ce = (v, x, L) => {
    const { bum: K, scope: R, update: oe, subTree: ie, um: le } = v;
    K && Va(K), R.stop(), oe && (oe.active = !1, f(ie, v, x, L)), le && Ot(le, x), Ot(() => {
      v.isUnmounted = !0;
    }, x), x && x.pendingBranch && !x.isUnmounted && v.asyncDep && !v.asyncResolved && v.suspenseId === x.pendingId && (x.deps--, x.deps === 0 && x.resolve());
  }, Y = (v, x, L, K = !1, R = !1, oe = 0) => {
    for (let ie = oe; ie < v.length; ie++)
      f(v[ie], x, L, K, R);
  }, Oe = (v) => v.shapeFlag & 6 ? Oe(v.component.subTree) : v.shapeFlag & 128 ? v.suspense.next() : p(v.anchor || v.el);
  let Ie = !1;
  const U = (v, x, L) => {
    v == null ? x._vnode && f(x._vnode, null, null, !0) : y(
      x._vnode || null,
      v,
      x,
      null,
      null,
      null,
      L
    ), Ie || (Ie = !0, ri(), Ju(), Ie = !1), x._vnode = v;
  }, ve = {
    p: y,
    um: f,
    m,
    r: N,
    mt: $,
    mc: _,
    pc: re,
    pbc: W,
    n: Oe,
    o: e
  };
  let Ee, D;
  return {
    render: U,
    hydrate: Ee,
    createApp: Yp(U, Ee)
  };
}
function Go({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Qn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Qp(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function pl(e, t, n = !1) {
  const r = e.children, a = t.children;
  if (ke(r) && ke(a))
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      let l = a[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = a[o] = En(a[o]), l.el = s.el), n || pl(s, l)), l.type === To && (l.el = s.el);
    }
}
function Jp(e) {
  const t = e.slice(), n = [0];
  let r, a, o, s, l;
  const i = e.length;
  for (r = 0; r < i; r++) {
    const d = e[r];
    if (d !== 0) {
      if (a = n[n.length - 1], e[a] < d) {
        t[r] = a, n.push(r);
        continue;
      }
      for (o = 0, s = n.length - 1; o < s; )
        l = o + s >> 1, e[n[l]] < d ? o = l + 1 : s = l;
      d < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
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
const Zp = (e) => e.__isTeleport, ta = (e) => e && (e.disabled || e.disabled === ""), mi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, hi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ds = (e, t) => {
  const n = e && e.to;
  return ot(n) ? t ? t(n) : null : n;
}, em = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, a, o, s, l, i, d) {
    const {
      mc: u,
      pc: c,
      pbc: p,
      o: { insert: b, querySelector: g, createText: y, createComment: M }
    } = d, E = ta(t.props);
    let { shapeFlag: V, children: h, dynamicChildren: k } = t;
    if (e == null) {
      const A = t.el = y(""), F = t.anchor = y("");
      b(A, n, r), b(F, n, r);
      const j = t.target = Ds(t.props, g), _ = t.targetAnchor = y("");
      j && (b(_, j), s === "svg" || mi(j) ? s = "svg" : (s === "mathml" || hi(j)) && (s = "mathml"));
      const O = (W, C) => {
        V & 16 && u(
          h,
          W,
          C,
          a,
          o,
          s,
          l,
          i
        );
      };
      E ? O(n, F) : j && O(j, _);
    } else {
      t.el = e.el;
      const A = t.anchor = e.anchor, F = t.target = e.target, j = t.targetAnchor = e.targetAnchor, _ = ta(e.props), O = _ ? n : F, W = _ ? A : j;
      if (s === "svg" || mi(F) ? s = "svg" : (s === "mathml" || hi(F)) && (s = "mathml"), k ? (p(
        e.dynamicChildren,
        k,
        O,
        a,
        o,
        s,
        l
      ), pl(e, t, !0)) : i || c(
        e,
        t,
        O,
        W,
        a,
        o,
        s,
        l,
        !1
      ), E)
        _ ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ea(
          t,
          n,
          A,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const C = t.target = Ds(
          t.props,
          g
        );
        C && Ea(
          t,
          C,
          null,
          d,
          0
        );
      } else _ && Ea(
        t,
        F,
        j,
        d,
        1
      );
    }
    wc(t);
  },
  remove(e, t, n, r, { um: a, o: { remove: o } }, s) {
    const { shapeFlag: l, children: i, anchor: d, targetAnchor: u, target: c, props: p } = e;
    if (c && o(u), s && o(d), l & 16) {
      const b = s || !ta(p);
      for (let g = 0; g < i.length; g++) {
        const y = i[g];
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
  hydrate: tm
};
function Ea(e, t, n, { o: { insert: r }, m: a }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: s, anchor: l, shapeFlag: i, children: d, props: u } = e, c = o === 2;
  if (c && r(s, t, n), (!c || ta(u)) && i & 16)
    for (let p = 0; p < d.length; p++)
      a(
        d[p],
        t,
        n,
        2
      );
  c && r(l, t, n);
}
function tm(e, t, n, r, a, o, {
  o: { nextSibling: s, parentNode: l, querySelector: i }
}, d) {
  const u = t.target = Ds(
    t.props,
    i
  );
  if (u) {
    const c = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (ta(t.props))
        t.anchor = d(
          s(e),
          t,
          l(e),
          n,
          r,
          a,
          o
        ), t.targetAnchor = c;
      else {
        t.anchor = s(e);
        let p = c;
        for (; p; )
          if (p = s(p), p && p.nodeType === 8 && p.data === "teleport anchor") {
            t.targetAnchor = p, u._lpa = t.targetAnchor && s(t.targetAnchor);
            break;
          }
        d(
          c,
          t,
          u,
          n,
          r,
          a,
          o
        );
      }
    wc(t);
  }
  return t.anchor && s(t.anchor);
}
const bc = em;
function wc(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const _e = Symbol.for("v-fgt"), To = Symbol.for("v-txt"), jt = Symbol.for("v-cmt"), Ko = Symbol.for("v-stc"), na = [];
let Gt = null;
function I(e = !1) {
  na.push(Gt = e ? null : []);
}
function nm() {
  na.pop(), Gt = na[na.length - 1] || null;
}
let da = 1;
function vi(e) {
  da += e;
}
function _c(e) {
  return e.dynamicChildren = da > 0 ? Gt || kr : null, nm(), da > 0 && Gt && Gt.push(e), e;
}
function G(e, t, n, r, a, o) {
  return _c(
    be(
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
function Ae(e, t, n, r, a) {
  return _c(
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
function Xa(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function rr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const So = "__vInternal", xc = ({ key: e }) => e ?? null, Ia = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ot(e) || ct(e) || Ce(e) ? { i: vt, r: e, k: t, f: !!n } : e : null);
function be(e, t = null, n = null, r = 0, a = null, o = e === _e ? 0 : 1, s = !1, l = !1) {
  const i = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xc(t),
    ref: t && Ia(t),
    scopeId: wo,
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
  return l ? (ml(i, n), o & 128 && e.normalize(i)) : n && (i.shapeFlag |= ot(n) ? 8 : 16), da > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Gt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (i.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  i.patchFlag !== 32 && Gt.push(i), i;
}
const Xe = rm;
function rm(e, t = null, n = null, r = 0, a = null, o = !1) {
  if ((!e || e === nc) && (e = jt), Xa(e)) {
    const l = Ln(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ml(l, n), da > 0 && !o && Gt && (l.shapeFlag & 6 ? Gt[Gt.indexOf(e)] = l : Gt.push(l)), l.patchFlag |= -2, l;
  }
  if (dm(e) && (e = e.__vccOpts), t) {
    t = Pt(t);
    let { class: l, style: i } = t;
    l && !ot(l) && (t.class = $e(l)), Qe(i) && (qu(i) && !ke(i) && (i = yt({}, i)), t.style = St(i));
  }
  const s = ot(e) ? 1 : hp(e) ? 128 : Zp(e) ? 64 : Qe(e) ? 4 : Ce(e) ? 2 : 0;
  return be(
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
  return e ? qu(e) || So in e ? yt({}, e) : e : null;
}
function Ln(e, t, n = !1) {
  const { props: r, ref: a, patchFlag: o, children: s } = e, l = t ? _t(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && xc(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? ke(a) ? a.concat(Ia(t)) : [a, Ia(t)] : Ia(t)
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
  return Xe(To, null, e, t);
}
function Q(e = "", t = !1) {
  return t ? (I(), Ae(jt, null, e)) : Xe(jt, null, e);
}
function an(e) {
  return e == null || typeof e == "boolean" ? Xe(jt) : ke(e) ? Xe(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? En(e) : Xe(To, null, String(e));
}
function En(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ln(e);
}
function ml(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (ke(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), ml(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !(So in t) ? t._ctx = vt : a === 3 && vt && (vt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ce(t) ? (t = { default: t, _ctx: vt }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Jt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function _t(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const a in r)
      if (a === "class")
        t.class !== r.class && (t.class = $e([t.class, r.class]));
      else if (a === "style")
        t.style = St([t.style, r.style]);
      else if (co(a)) {
        const o = t[a], s = r[a];
        s && o !== s && !(ke(o) && o.includes(s)) && (t[a] = o ? [].concat(o, s) : s);
      } else a !== "" && (t[a] = r[a]);
  }
  return t;
}
function nn(e, t, n, r = null) {
  Ht(e, t, 7, [
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
    scope: new Eu(
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
    emitsOptions: ec(r, a),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = lp.bind(null, o), e.ce && e.ce(o), o;
}
let wt = null;
const hl = () => wt || vt;
let Qa, Os;
{
  const e = Cu(), t = (n, r) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(r), (o) => {
      a.length > 1 ? a.forEach((s) => s(o)) : a[0](o);
    };
  };
  Qa = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => wt = n
  ), Os = t(
    "__VUE_SSR_SETTERS__",
    (n) => Po = n
  );
}
const ba = (e) => {
  const t = wt;
  return Qa(e), e.scope.on(), () => {
    e.scope.off(), Qa(t);
  };
}, yi = () => {
  wt && wt.scope.off(), Qa(null);
};
function kc(e) {
  return e.vnode.shapeFlag & 4;
}
let Po = !1;
function lm(e, t = !1) {
  t && Os(t);
  const { props: n, children: r } = e.vnode, a = kc(e);
  Up(e, n, a, t), zp(e, r);
  const o = a ? im(e, t) : void 0;
  return t && Os(!1), o;
}
function im(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = yo(new Proxy(e.ctx, Rp));
  const { setup: r } = n;
  if (r) {
    const a = e.setupContext = r.length > 1 ? Tc(e) : null, o = ba(e);
    Wn();
    const s = Vn(
      r,
      e,
      0,
      [
        e.props,
        a
      ]
    );
    if (hr(), o(), Su(s)) {
      if (s.then(yi, yi), t)
        return s.then((l) => {
          gi(e, l, t);
        }).catch((l) => {
          go(l, e, 0);
        });
      e.asyncDep = s;
    } else
      gi(e, s, t);
  } else
    Mc(e, t);
}
function gi(e, t, n) {
  Ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Qe(t) && (e.setupState = Gu(t)), Mc(e, n);
}
let bi;
function Mc(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && bi && !r.render) {
      const a = r.template || dl(e).template;
      if (a) {
        const { isCustomElement: o, compilerOptions: s } = e.appContext.config, { delimiters: l, compilerOptions: i } = r, d = yt(
          yt(
            {
              isCustomElement: o,
              delimiters: l
            },
            s
          ),
          i
        );
        r.render = bi(a, d);
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
        return Nt(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Tc(e) {
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
function Ao(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Gu(yo(e.exposed)), {
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
  return Ce(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function dm(e) {
  return Ce(e) && "__vccOpts" in e;
}
const Z = (e, t) => zf(e, t, Po);
function Ja(e, t, n = Je) {
  const r = hl(), a = Qt(t), o = Un(t), s = Jf((i, d) => {
    let u;
    return bp(() => {
      const c = e[t];
      pn(u, c) && (u = c, d());
    }), {
      get() {
        return i(), n.get ? n.get(u) : u;
      },
      set(c) {
        const p = r.vnode.props;
        !(p && // check if parent has passed v-model
        (t in p || a in p || o in p) && (`onUpdate:${t}` in p || `onUpdate:${a}` in p || `onUpdate:${o}` in p)) && pn(c, u) && (u = c, d()), r.emit(`update:${t}`, n.set ? n.set(c) : c);
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
function Sc(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Qe(t) && !ke(t) ? Xa(t) ? Xe(e, null, [t]) : Xe(e, t) : Xe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Xa(n) && (n = [n]), Xe(e, t, n));
}
const fm = "3.4.21";
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const pm = "http://www.w3.org/2000/svg", mm = "http://www.w3.org/1998/Math/MathML", Rn = typeof document < "u" ? document : null, wi = Rn && /* @__PURE__ */ Rn.createElement("template"), hm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const a = t === "svg" ? Rn.createElementNS(pm, e) : t === "mathml" ? Rn.createElementNS(mm, e) : Rn.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (e) => Rn.createTextNode(e),
  createComment: (e) => Rn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Rn.querySelector(e),
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
      wi.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const l = wi.content;
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
}, Mn = "transition", Hr = "animation", fa = Symbol("_vtc"), qn = (e, { slots: t }) => Sc(kp, vm(e), t);
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
  oc,
  Pc
);
const Jn = (e, t = []) => {
  ke(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, _i = (e) => e ? ke(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function vm(e) {
  const t = {};
  for (const S in e)
    S in Pc || (t[S] = e[S]);
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
    appearActiveClass: d = s,
    appearToClass: u = l,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: b = `${n}-leave-to`
  } = e, g = ym(a), y = g && g[0], M = g && g[1], {
    onBeforeEnter: E,
    onEnter: V,
    onEnterCancelled: h,
    onLeave: k,
    onLeaveCancelled: A,
    onBeforeAppear: F = E,
    onAppear: j = V,
    onAppearCancelled: _ = h
  } = t, O = (S, B, $) => {
    Zn(S, B ? u : l), Zn(S, B ? d : s), $ && $();
  }, W = (S, B) => {
    S._isLeaving = !1, Zn(S, c), Zn(S, b), Zn(S, p), B && B();
  }, C = (S) => (B, $) => {
    const w = S ? j : V, T = () => O(B, S, $);
    Jn(w, [B, T]), xi(() => {
      Zn(B, S ? i : o), Tn(B, S ? u : l), _i(w) || ki(B, r, y, T);
    });
  };
  return yt(t, {
    onBeforeEnter(S) {
      Jn(E, [S]), Tn(S, o), Tn(S, s);
    },
    onBeforeAppear(S) {
      Jn(F, [S]), Tn(S, i), Tn(S, d);
    },
    onEnter: C(!1),
    onAppear: C(!0),
    onLeave(S, B) {
      S._isLeaving = !0;
      const $ = () => W(S, B);
      Tn(S, c), wm(), Tn(S, p), xi(() => {
        S._isLeaving && (Zn(S, c), Tn(S, b), _i(k) || ki(S, r, M, $));
      }), Jn(k, [S, $]);
    },
    onEnterCancelled(S) {
      O(S, !1), Jn(h, [S]);
    },
    onAppearCancelled(S) {
      O(S, !0), Jn(_, [S]);
    },
    onLeaveCancelled(S) {
      W(S), Jn(A, [S]);
    }
  });
}
function ym(e) {
  if (e == null)
    return null;
  if (Qe(e))
    return [Xo(e.enter), Xo(e.leave)];
  {
    const t = Xo(e);
    return [t, t];
  }
}
function Xo(e) {
  return hf(e);
}
function Tn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[fa] || (e[fa] = /* @__PURE__ */ new Set())).add(t);
}
function Zn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[fa];
  n && (n.delete(t), n.size || (e[fa] = void 0));
}
function xi(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let gm = 0;
function ki(e, t, n, r) {
  const a = e._endId = ++gm, o = () => {
    a === e._endId && r();
  };
  if (n)
    return setTimeout(o, n);
  const { type: s, timeout: l, propCount: i } = bm(e, t);
  if (!s)
    return r();
  const d = s + "end";
  let u = 0;
  const c = () => {
    e.removeEventListener(d, p), o();
  }, p = (b) => {
    b.target === e && ++u >= i && c();
  };
  setTimeout(() => {
    u < i && c();
  }, l + 1), e.addEventListener(d, p);
}
function bm(e, t) {
  const n = window.getComputedStyle(e), r = (g) => (n[g] || "").split(", "), a = r(`${Mn}Delay`), o = r(`${Mn}Duration`), s = Mi(a, o), l = r(`${Hr}Delay`), i = r(`${Hr}Duration`), d = Mi(l, i);
  let u = null, c = 0, p = 0;
  t === Mn ? s > 0 && (u = Mn, c = s, p = o.length) : t === Hr ? d > 0 && (u = Hr, c = d, p = i.length) : (c = Math.max(s, d), u = c > 0 ? s > d ? Mn : Hr : null, p = u ? u === Mn ? o.length : i.length : 0);
  const b = u === Mn && /\b(transform|all)(,|$)/.test(
    r(`${Mn}Property`).toString()
  );
  return {
    type: u,
    timeout: c,
    propCount: p,
    hasTransform: b
  };
}
function Mi(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Ti(n) + Ti(e[r])));
}
function Ti(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function wm() {
  return document.body.offsetHeight;
}
function _m(e, t, n) {
  const r = e[fa];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Za = Symbol("_vod"), Ac = Symbol("_vsh"), Fa = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Za] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : jr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), jr(e, !0), r.enter(e)) : r.leave(e, () => {
      jr(e, !1);
    }) : jr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    jr(e, t);
  }
};
function jr(e, t) {
  e.style.display = t ? e[Za] : "none", e[Ac] = !t;
}
const xm = Symbol(""), km = /(^|;)\s*display\s*:/;
function Mm(e, t, n) {
  const r = e.style, a = ot(n);
  let o = !1;
  if (n && !a) {
    if (t)
      if (ot(t))
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
  Za in e && (e[Za] = o ? r.display : "", e[Ac] && (r.display = "none"));
}
const Si = /\s*!important$/;
function Ba(e, t, n) {
  if (ke(n))
    n.forEach((r) => Ba(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Tm(e, t);
    Si.test(n) ? e.setProperty(
      Un(r),
      n.replace(Si, ""),
      "important"
    ) : e[r] = n;
  }
}
const Pi = ["Webkit", "Moz", "ms"], Qo = {};
function Tm(e, t) {
  const n = Qo[t];
  if (n)
    return n;
  let r = Qt(t);
  if (r !== "filter" && r in e)
    return Qo[t] = r;
  r = mo(r);
  for (let a = 0; a < Pi.length; a++) {
    const o = Pi[a] + r;
    if (o in e)
      return Qo[t] = o;
  }
  return t;
}
const Ai = "http://www.w3.org/1999/xlink";
function Sm(e, t, n, r, a) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Ai, t.slice(6, t.length)) : e.setAttributeNS(Ai, t, n);
  else {
    const o = _f(t);
    n == null || o && !Du(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function Pm(e, t, n, r, a, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    r && s(r, a, o), e[t] = n ?? "";
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const d = l === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n ?? "";
    (d !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = Du(n) : n == null && d === "string" ? (n = "", i = !0) : d === "number" && (n = 0, i = !0);
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
const Ci = Symbol("_vei");
function Cm(e, t, n, r, a = null) {
  const o = e[Ci] || (e[Ci] = {}), s = o[t];
  if (r && s)
    s.value = r;
  else {
    const [l, i] = Dm(t);
    if (r) {
      const d = o[t] = Rm(r, a);
      ar(e, l, d, i);
    } else s && (Am(e, l, s, i), o[t] = void 0);
  }
}
const Di = /(?:Once|Passive|Capture)$/;
function Dm(e) {
  let t;
  if (Di.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Di); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Un(e.slice(2)), t];
}
let Jo = 0;
const Om = /* @__PURE__ */ Promise.resolve(), Em = () => Jo || (Om.then(() => Jo = 0), Jo = Date.now());
function Rm(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ht(
      Nm(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Em(), n;
}
function Nm(e, t) {
  if (ke(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((r) => (a) => !a._stopped && r && r(a));
  } else
    return t;
}
const Oi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, $m = (e, t, n, r, a, o, s, l, i) => {
  const d = a === "svg";
  t === "class" ? _m(e, r, d) : t === "style" ? Mm(e, n, r) : co(t) ? Ks(t) || Cm(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Vm(e, t, r, d)) ? Pm(
    e,
    t,
    r,
    o,
    s,
    l,
    i
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Sm(e, t, r, d));
};
function Vm(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Oi(t) && Ce(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Oi(t) && ot(n) ? !1 : t in e;
}
const eo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ke(t) ? (n) => Va(t, n) : t;
};
function Im(e) {
  e.target.composing = !0;
}
function Ei(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ar = Symbol("_assign"), Es = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, a) {
    e[Ar] = eo(a);
    const o = r || a.props && a.props.type === "number";
    ar(e, t ? "change" : "input", (s) => {
      if (s.target.composing)
        return;
      let l = e.value;
      n && (l = l.trim()), o && (l = la(l)), e[Ar](l);
    }), n && ar(e, "change", () => {
      e.value = e.value.trim();
    }), t || (ar(e, "compositionstart", Im), ar(e, "compositionend", Ei), ar(e, "change", Ei));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: a } }, o) {
    if (e[Ar] = eo(o), e.composing)
      return;
    const s = a || e.type === "number" ? la(e.value) : e.value, l = t ?? "";
    s !== l && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === l) || (e.value = l));
  }
}, Cc = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const a = fo(t);
    ar(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (s) => s.selected).map(
        (s) => n ? la(to(s)) : to(s)
      );
      e[Ar](
        e.multiple ? a ? new Set(o) : o : o[0]
      ), e._assigning = !0, Ut(() => {
        e._assigning = !1;
      });
    }), e[Ar] = eo(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, modifiers: { number: n } }) {
    Ri(e, t, n);
  },
  beforeUpdate(e, t, n) {
    e[Ar] = eo(n);
  },
  updated(e, { value: t, modifiers: { number: n } }) {
    e._assigning || Ri(e, t, n);
  }
};
function Ri(e, t, n) {
  const r = e.multiple, a = ke(t);
  if (!(r && !a && !fo(t))) {
    for (let o = 0, s = e.options.length; o < s; o++) {
      const l = e.options[o], i = to(l);
      if (r)
        if (a) {
          const d = typeof i;
          d === "string" || d === "number" ? l.selected = t.includes(
            n ? la(i) : i
          ) : l.selected = kf(t, i) > -1;
        } else
          l.selected = t.has(i);
      else if (ho(to(l), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function to(e) {
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
}, Ge = (e, t) => {
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
}, Pe = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (a) => {
    if (!("key" in a))
      return;
    const o = Un(a.key);
    if (t.some((s) => s === o || Lm[s] === o))
      return e(a);
  });
}, Ym = /* @__PURE__ */ yt({ patchProp: $m }, hm);
let Ni;
function Dc() {
  return Ni || (Ni = Kp(Ym));
}
const $i = (...e) => {
  Dc().render(...e);
}, Hm = (...e) => {
  const t = Dc().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const a = Um(r);
    if (!a)
      return;
    const o = t._component;
    !Ce(o) && !o.render && !o.template && (o.template = a.innerHTML), a.innerHTML = "";
    const s = n(a, !1, jm(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
};
function jm(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Um(e) {
  return ot(e) ? document.querySelector(e) : e;
}
var Wm = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Oc;
const Co = (e) => Oc = e, Ec = (
  /* istanbul ignore next */
  Symbol()
);
function Rs(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var ra;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(ra || (ra = {}));
function qm() {
  const e = Ru(!0), t = e.run(() => J({}));
  let n = [], r = [];
  const a = yo({
    install(o) {
      Co(a), a._a = o, o.provide(Ec, a), o.config.globalProperties.$pinia = a, r.forEach((s) => n.push(s)), r = [];
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
const Rc = () => {
};
function Vi(e, t, n, r = Rc) {
  e.push(t);
  const a = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), r());
  };
  return !n && Js() && Nu(a), a;
}
function gr(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const zm = (e) => e();
function Ns(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], a = e[n];
    Rs(a) && Rs(r) && e.hasOwnProperty(n) && !ct(r) && !$n(r) ? e[n] = Ns(a, r) : e[n] = r;
  }
  return e;
}
const Gm = (
  /* istanbul ignore next */
  Symbol()
);
function Km(e) {
  return !Rs(e) || !e.hasOwnProperty(Gm);
}
const { assign: Cn } = Object;
function Xm(e) {
  return !!(ct(e) && e.effect);
}
function Qm(e, t, n, r) {
  const { state: a, actions: o, getters: s } = t, l = n.state.value[e];
  let i;
  function d() {
    l || (n.state.value[e] = a ? a() : {});
    const u = Zf(n.state.value[e]);
    return Cn(u, o, Object.keys(s || {}).reduce((c, p) => (c[p] = yo(Z(() => {
      Co(n);
      const b = n._s.get(e);
      return s[p].call(b, b);
    })), c), {}));
  }
  return i = Nc(e, d, t, n, r, !0), i;
}
function Nc(e, t, n = {}, r, a, o) {
  let s;
  const l = Cn({ actions: {} }, n), i = {
    deep: !0
    // flush: 'post',
  };
  let d, u, c = [], p = [], b;
  const g = r.state.value[e];
  !o && !g && (r.state.value[e] = {}), J({});
  let y;
  function M(_) {
    let O;
    d = u = !1, typeof _ == "function" ? (_(r.state.value[e]), O = {
      type: ra.patchFunction,
      storeId: e,
      events: b
    }) : (Ns(r.state.value[e], _), O = {
      type: ra.patchObject,
      payload: _,
      storeId: e,
      events: b
    });
    const W = y = Symbol();
    Ut().then(() => {
      y === W && (d = !0);
    }), u = !0, gr(c, O, r.state.value[e]);
  }
  const E = o ? function() {
    const { state: O } = n, W = O ? O() : {};
    this.$patch((C) => {
      Cn(C, W);
    });
  } : (
    /* istanbul ignore next */
    Rc
  );
  function V() {
    s.stop(), c = [], p = [], r._s.delete(e);
  }
  function h(_, O) {
    return function() {
      Co(r);
      const W = Array.from(arguments), C = [], S = [];
      function B(T) {
        C.push(T);
      }
      function $(T) {
        S.push(T);
      }
      gr(p, {
        args: W,
        name: _,
        store: A,
        after: B,
        onError: $
      });
      let w;
      try {
        w = O.apply(this && this.$id === e ? this : A, W);
      } catch (T) {
        throw gr(S, T), T;
      }
      return w instanceof Promise ? w.then((T) => (gr(C, T), T)).catch((T) => (gr(S, T), Promise.reject(T))) : (gr(C, w), w);
    };
  }
  const k = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Vi.bind(null, p),
    $patch: M,
    $reset: E,
    $subscribe(_, O = {}) {
      const W = Vi(c, _, O.detached, () => C()), C = s.run(() => rt(() => r.state.value[e], (S) => {
        (O.flush === "sync" ? u : d) && _({
          storeId: e,
          type: ra.direct,
          events: b
        }, S);
      }, Cn({}, i, O)));
      return W;
    },
    $dispose: V
  }, A = wn(k);
  r._s.set(e, A);
  const j = (r._a && r._a.runWithContext || zm)(() => r._e.run(() => (s = Ru()).run(t)));
  for (const _ in j) {
    const O = j[_];
    if (ct(O) && !Xm(O) || $n(O))
      o || (g && Km(O) && (ct(O) ? O.value = g[_] : Ns(O, g[_])), r.state.value[e][_] = O);
    else if (typeof O == "function") {
      const W = h(_, O);
      j[_] = W, l.actions[_] = O;
    }
  }
  return Cn(A, j), Cn(Le(A), j), Object.defineProperty(A, "$state", {
    get: () => r.state.value[e],
    set: (_) => {
      M((O) => {
        Cn(O, _);
      });
    }
  }), r._p.forEach((_) => {
    Cn(A, s.run(() => _({
      store: A,
      app: r._a,
      pinia: r,
      options: l
    })));
  }), g && o && n.hydrate && n.hydrate(A.$state, g), d = !0, u = !0, A;
}
function Jm(e, t, n) {
  let r, a;
  const o = typeof t == "function";
  r = e, a = o ? n : t;
  function s(l, i) {
    const d = jp();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (d ? ea(Ec, null) : null), l && Co(l), l = Oc, l._s.has(r) || (o ? Nc(r, t, a, l) : Qm(r, a, l)), l._s.get(r);
  }
  return s.$id = r, s;
}
var $c = typeof global == "object" && global && global.Object === Object && global, Zm = typeof self == "object" && self && self.Object === Object && self, vl = $c || Zm || Function("return this")(), no = vl.Symbol, Vc = Object.prototype, eh = Vc.hasOwnProperty, th = Vc.toString, Ur = no ? no.toStringTag : void 0;
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
var sh = "[object Null]", lh = "[object Undefined]", Ii = no ? no.toStringTag : void 0;
function yl(e) {
  return e == null ? e === void 0 ? lh : sh : Ii && Ii in Object(e) ? nh(e) : oh(e);
}
function gl(e) {
  return e != null && typeof e == "object";
}
var Ic = Array.isArray;
function bl(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Fc(e) {
  return e;
}
var ih = "[object AsyncFunction]", uh = "[object Function]", ch = "[object GeneratorFunction]", dh = "[object Proxy]";
function Bc(e) {
  if (!bl(e))
    return !1;
  var t = yl(e);
  return t == uh || t == ch || t == ih || t == dh;
}
var Zo = vl["__core-js_shared__"], Fi = function() {
  var e = /[^.]+$/.exec(Zo && Zo.keys && Zo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function fh(e) {
  return !!Fi && Fi in e;
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
  if (!bl(e) || fh(e))
    return !1;
  var t = Bc(e) ? xh : yh;
  return t.test(hh(e));
}
function Mh(e, t) {
  return e == null ? void 0 : e[t];
}
function Th(e, t) {
  var n = Mh(e, t);
  return kh(n) ? n : void 0;
}
function Sh(e, t, n) {
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
var Ph = 800, Ah = 16, Ch = Date.now;
function Dh(e) {
  var t = 0, n = 0;
  return function() {
    var r = Ch(), a = Ah - (r - n);
    if (n = r, a > 0) {
      if (++t >= Ph)
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
var ro = function() {
  try {
    var e = Th(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Eh = ro ? function(e, t) {
  return ro(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Oh(t),
    writable: !0
  });
} : Fc, Rh = Dh(Eh), Nh = 9007199254740991, $h = /^(?:0|[1-9]\d*)$/;
function Lc(e, t) {
  var n = typeof e;
  return t = t ?? Nh, !!t && (n == "number" || n != "symbol" && $h.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Yc(e, t, n) {
  t == "__proto__" && ro ? ro(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Hc(e, t) {
  return e === t || e !== e && t !== t;
}
var Vh = Object.prototype, Ih = Vh.hasOwnProperty;
function jc(e, t, n) {
  var r = e[t];
  (!(Ih.call(e, t) && Hc(r, n)) || n === void 0 && !(t in e)) && Yc(e, t, n);
}
function Fh(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, s = t.length; ++o < s; ) {
    var l = t[o], i = void 0;
    i === void 0 && (i = e[l]), a ? Yc(n, l, i) : jc(n, l, i);
  }
  return n;
}
var Bi = Math.max;
function Bh(e, t, n) {
  return t = Bi(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, o = Bi(r.length - t, 0), s = Array(o); ++a < o; )
      s[a] = r[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = r[a];
    return l[t] = n(s), Sh(e, this, l);
  };
}
function Lh(e, t) {
  return Rh(Bh(e, t, Fc), e + "");
}
var Yh = 9007199254740991;
function Uc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Yh;
}
function wl(e) {
  return e != null && Uc(e.length) && !Bc(e);
}
function Hh(e, t, n) {
  if (!bl(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? wl(n) && Lc(t, n.length) : r == "string" && t in n) ? Hc(n[t], e) : !1;
}
function jh(e) {
  return Lh(function(t, n) {
    var r = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, s = a > 2 ? n[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, s && Hh(n[0], n[1], s) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++r < a; ) {
      var l = n[r];
      l && e(t, l, r, o);
    }
    return t;
  });
}
var Uh = Object.prototype;
function Wc(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Uh;
  return e === n;
}
function Wh(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var qh = "[object Arguments]";
function Li(e) {
  return gl(e) && yl(e) == qh;
}
var qc = Object.prototype, zh = qc.hasOwnProperty, Gh = qc.propertyIsEnumerable, Kh = Li(/* @__PURE__ */ function() {
  return arguments;
}()) ? Li : function(e) {
  return gl(e) && zh.call(e, "callee") && !Gh.call(e, "callee");
};
function Xh() {
  return !1;
}
var zc = typeof exports == "object" && exports && !exports.nodeType && exports, Yi = zc && typeof module == "object" && module && !module.nodeType && module, Qh = Yi && Yi.exports === zc, Hi = Qh ? vl.Buffer : void 0, Jh = Hi ? Hi.isBuffer : void 0, Zh = Jh || Xh, ev = "[object Arguments]", tv = "[object Array]", nv = "[object Boolean]", rv = "[object Date]", av = "[object Error]", ov = "[object Function]", sv = "[object Map]", lv = "[object Number]", iv = "[object Object]", uv = "[object RegExp]", cv = "[object Set]", dv = "[object String]", fv = "[object WeakMap]", pv = "[object ArrayBuffer]", mv = "[object DataView]", hv = "[object Float32Array]", vv = "[object Float64Array]", yv = "[object Int8Array]", gv = "[object Int16Array]", bv = "[object Int32Array]", wv = "[object Uint8Array]", _v = "[object Uint8ClampedArray]", xv = "[object Uint16Array]", kv = "[object Uint32Array]", tt = {};
tt[hv] = tt[vv] = tt[yv] = tt[gv] = tt[bv] = tt[wv] = tt[_v] = tt[xv] = tt[kv] = !0;
tt[ev] = tt[tv] = tt[pv] = tt[nv] = tt[mv] = tt[rv] = tt[av] = tt[ov] = tt[sv] = tt[lv] = tt[iv] = tt[uv] = tt[cv] = tt[dv] = tt[fv] = !1;
function Mv(e) {
  return gl(e) && Uc(e.length) && !!tt[yl(e)];
}
function Tv(e) {
  return function(t) {
    return e(t);
  };
}
var Gc = typeof exports == "object" && exports && !exports.nodeType && exports, aa = Gc && typeof module == "object" && module && !module.nodeType && module, Sv = aa && aa.exports === Gc, es = Sv && $c.process, ji = function() {
  try {
    var e = aa && aa.require && aa.require("util").types;
    return e || es && es.binding && es.binding("util");
  } catch {
  }
}(), Ui = ji && ji.isTypedArray, Pv = Ui ? Tv(Ui) : Mv, Av = Object.prototype, Cv = Av.hasOwnProperty;
function Dv(e, t) {
  var n = Ic(e), r = !n && Kh(e), a = !n && !r && Zh(e), o = !n && !r && !a && Pv(e), s = n || r || a || o, l = s ? Wh(e.length, String) : [], i = l.length;
  for (var d in e)
    Cv.call(e, d) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    Lc(d, i))) && l.push(d);
  return l;
}
function Ov(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Ev = Ov(Object.keys, Object), Rv = Object.prototype, Nv = Rv.hasOwnProperty;
function $v(e) {
  if (!Wc(e))
    return Ev(e);
  var t = [];
  for (var n in Object(e))
    Nv.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Vv(e) {
  return wl(e) ? Dv(e) : $v(e);
}
var Iv = Object.prototype, Fv = Iv.hasOwnProperty, Bv = jh(function(e, t) {
  if (Wc(t) || wl(t)) {
    Fh(t, Vv(t), e);
    return;
  }
  for (var n in t)
    Fv.call(t, n) && jc(e, n, t[n]);
});
const ao = "Value", Dr = "ValueString", cr = "ValueFloat", Or = "ValueDate", Er = "ValueFilePath", Yn = "Mode", Hn = "SubSystem", pa = "Command", $s = [
  ao,
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
    const n = Ic(t) ? t : [t];
    return this.destinations.reduce((a, o) => (n.includes(o.type) && a.push(o), a), []);
  }
  getValues() {
    return this.hasValues ? this.getDestinations($s) : [];
  }
  getModes() {
    return this.hasModes ? this.getDestinations(Yn) : [];
  }
  getSubsystems() {
    return this.getDestinations(Hn);
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
function Kc(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Lv } = Object.prototype, { getPrototypeOf: _l } = Object, Do = /* @__PURE__ */ ((e) => (t) => {
  const n = Lv.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Zt = (e) => (e = e.toLowerCase(), (t) => Do(t) === e), Oo = (e) => (t) => typeof t === e, { isArray: Br } = Array, ma = Oo("undefined");
function Yv(e) {
  return e !== null && !ma(e) && e.constructor !== null && !ma(e.constructor) && It(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Xc = Zt("ArrayBuffer");
function Hv(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Xc(e.buffer), t;
}
const jv = Oo("string"), It = Oo("function"), Qc = Oo("number"), Eo = (e) => e !== null && typeof e == "object", Uv = (e) => e === !0 || e === !1, La = (e) => {
  if (Do(e) !== "object")
    return !1;
  const t = _l(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Wv = Zt("Date"), qv = Zt("File"), zv = Zt("Blob"), Gv = Zt("FileList"), Kv = (e) => Eo(e) && It(e.pipe), Xv = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || It(e.append) && ((t = Do(e)) === "formdata" || // detect form-data instance
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
function Jc(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const sr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Zc = (e) => !ma(e) && e !== sr;
function Vs() {
  const { caseless: e } = Zc(this) && this || {}, t = {}, n = (r, a) => {
    const o = e && Jc(t, a) || a;
    La(t[o]) && La(r) ? t[o] = Vs(t[o], r) : La(r) ? t[o] = Vs({}, r) : Br(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && wa(arguments[r], n);
  return t;
}
const ry = (e, t, n, { allOwnKeys: r } = {}) => (wa(t, (a, o) => {
  n && It(a) ? e[o] = Kc(a, n) : e[o] = a;
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
    e = n !== !1 && _l(e);
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
}, uy = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && _l(Uint8Array)), cy = (e, t) => {
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
), Wi = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), my = Zt("RegExp"), ed = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  wa(n, (a, o) => {
    let s;
    (s = t(a, o, e)) !== !1 && (r[o] = s || a);
  }), Object.defineProperties(e, r);
}, hy = (e) => {
  ed(e, (t, n) => {
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
}, gy = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, ts = "abcdefghijklmnopqrstuvwxyz", qi = "0123456789", td = {
  DIGIT: qi,
  ALPHA: ts,
  ALPHA_DIGIT: ts + ts.toUpperCase() + qi
}, by = (e = 16, t = td.ALPHA_DIGIT) => {
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
    if (Eo(r)) {
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
}, xy = Zt("AsyncFunction"), ky = (e) => e && (Eo(e) || It(e)) && It(e.then) && It(e.catch), nd = ((e, t) => e ? setImmediate : t ? ((n, r) => (sr.addEventListener("message", ({ source: a, data: o }) => {
  a === sr && o === n && r.length && r.shift()();
}, !1), (a) => {
  r.push(a), sr.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  It(sr.postMessage)
), My = typeof queueMicrotask < "u" ? queueMicrotask.bind(sr) : typeof process < "u" && process.nextTick || nd, z = {
  isArray: Br,
  isArrayBuffer: Xc,
  isBuffer: Yv,
  isFormData: Xv,
  isArrayBufferView: Hv,
  isString: jv,
  isNumber: Qc,
  isBoolean: Uv,
  isObject: Eo,
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
  merge: Vs,
  extend: ry,
  trim: ny,
  stripBOM: ay,
  inherits: oy,
  toFlatObject: sy,
  kindOf: Do,
  kindOfTest: Zt,
  endsWith: ly,
  toArray: iy,
  forEachEntry: cy,
  matchAll: dy,
  isHTMLForm: fy,
  hasOwnProperty: Wi,
  hasOwnProp: Wi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ed,
  freezeMethods: hy,
  toObjectSet: vy,
  toCamelCase: py,
  noop: yy,
  toFiniteNumber: gy,
  findKey: Jc,
  global: sr,
  isContextDefined: Zc,
  ALPHABET: td,
  generateString: by,
  isSpecCompliantForm: wy,
  toJSONObject: _y,
  isAsyncFn: xy,
  isThenable: ky,
  setImmediate: nd,
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
const rd = De.prototype, ad = {};
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
  ad[e] = { value: e };
});
Object.defineProperties(De, ad);
Object.defineProperty(rd, "isAxiosError", { value: !0 });
De.from = (e, t, n, r, a, o) => {
  const s = Object.create(rd);
  return z.toFlatObject(e, s, function(i) {
    return i !== Error.prototype;
  }, (l) => l !== "isAxiosError"), De.call(s, e.message, t, n, r, a), s.cause = e, s.name = e.name, o && Object.assign(s, o), s;
};
const Ty = null;
function Is(e) {
  return z.isPlainObject(e) || z.isArray(e);
}
function od(e) {
  return z.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function zi(e, t, n) {
  return e ? e.concat(t).map(function(a, o) {
    return a = od(a), !n && o ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function Sy(e) {
  return z.isArray(e) && !e.some(Is);
}
const Py = z.toFlatObject(z, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ro(e, t, n) {
  if (!z.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = z.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, M) {
    return !z.isUndefined(M[y]);
  });
  const r = n.metaTokens, a = n.visitor || u, o = n.dots, s = n.indexes, i = (n.Blob || typeof Blob < "u" && Blob) && z.isSpecCompliantForm(t);
  if (!z.isFunction(a))
    throw new TypeError("visitor must be a function");
  function d(g) {
    if (g === null) return "";
    if (z.isDate(g))
      return g.toISOString();
    if (!i && z.isBlob(g))
      throw new De("Blob is not supported. Use a Buffer instead.");
    return z.isArrayBuffer(g) || z.isTypedArray(g) ? i && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, y, M) {
    let E = g;
    if (g && !M && typeof g == "object") {
      if (z.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), g = JSON.stringify(g);
      else if (z.isArray(g) && Sy(g) || (z.isFileList(g) || z.endsWith(y, "[]")) && (E = z.toArray(g)))
        return y = od(y), E.forEach(function(h, k) {
          !(z.isUndefined(h) || h === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? zi([y], k, o) : s === null ? y : y + "[]",
            d(h)
          );
        }), !1;
    }
    return Is(g) ? !0 : (t.append(zi(M, y, o), d(g)), !1);
  }
  const c = [], p = Object.assign(Py, {
    defaultVisitor: u,
    convertValue: d,
    isVisitable: Is
  });
  function b(g, y) {
    if (!z.isUndefined(g)) {
      if (c.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      c.push(g), z.forEach(g, function(E, V) {
        (!(z.isUndefined(E) || E === null) && a.call(
          t,
          E,
          z.isString(V) ? V.trim() : V,
          y,
          p
        )) === !0 && b(E, y ? y.concat(V) : [V]);
      }), c.pop();
    }
  }
  if (!z.isObject(e))
    throw new TypeError("data must be an object");
  return b(e), t;
}
function Gi(e) {
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
function xl(e, t) {
  this._pairs = [], e && Ro(e, this, t);
}
const sd = xl.prototype;
sd.append = function(t, n) {
  this._pairs.push([t, n]);
};
sd.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Gi);
  } : Gi;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function Ay(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ld(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Ay, a = n && n.serialize;
  let o;
  if (a ? o = a(t, n) : o = z.isURLSearchParams(t) ? t.toString() : new xl(t, n).toString(r), o) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Ki {
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
const id = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Cy = typeof URLSearchParams < "u" ? URLSearchParams : xl, Dy = typeof FormData < "u" ? FormData : null, Oy = typeof Blob < "u" ? Blob : null, Ey = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Cy,
    FormData: Dy,
    Blob: Oy
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, kl = typeof window < "u" && typeof document < "u", Fs = typeof navigator == "object" && navigator || void 0, Ry = kl && (!Fs || ["ReactNative", "NativeScript", "NS"].indexOf(Fs.product) < 0), Ny = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", $y = kl && window.location.href || "http://localhost", Vy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: kl,
  hasStandardBrowserEnv: Ry,
  hasStandardBrowserWebWorkerEnv: Ny,
  navigator: Fs,
  origin: $y
}, Symbol.toStringTag, { value: "Module" })), Et = {
  ...Vy,
  ...Ey
};
function Iy(e, t) {
  return Ro(e, new Et.classes.URLSearchParams(), Object.assign({
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
function ud(e) {
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
  transitional: id,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, o = z.isObject(t);
    if (o && z.isHTMLForm(t) && (t = new FormData(t)), z.isFormData(t))
      return a ? JSON.stringify(ud(t)) : t;
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
        return Ro(
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
]), Hy = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(s) {
    a = s.indexOf(":"), n = s.substring(0, a).trim().toLowerCase(), r = s.substring(a + 1).trim(), !(!n || t[n] && Yy[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Xi = Symbol("internals");
function Wr(e) {
  return e && String(e).trim().toLowerCase();
}
function Ya(e) {
  return e === !1 || e == null ? e : z.isArray(e) ? e.map(Ya) : String(e);
}
function jy(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Uy = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ns(e, t, n, r, a) {
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
    function o(l, i, d) {
      const u = Wr(i);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const c = z.findKey(a, u);
      (!c || a[c] === void 0 || d === !0 || d === void 0 && a[c] !== !1) && (a[c || i] = Ya(l));
    }
    const s = (l, i) => z.forEach(l, (d, u) => o(d, u, i));
    if (z.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (z.isString(t) && (t = t.trim()) && !Uy(t))
      s(Hy(t), n);
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
          return jy(a);
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
      return !!(r && this[r] !== void 0 && (!n || ns(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function o(s) {
      if (s = Wr(s), s) {
        const l = z.findKey(r, s);
        l && (!n || ns(r, r[l], l, n)) && (delete r[l], a = !0);
      }
    }
    return z.isArray(t) ? t.forEach(o) : o(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ns(this, this[o], o, t, !0)) && (delete this[o], a = !0);
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
    const r = (this[Xi] = this[Xi] = {
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
function rs(e, t) {
  const n = this || _a, r = t || n, a = Rt.from(r.headers);
  let o = r.data;
  return z.forEach(e, function(l) {
    o = l.call(n, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function cd(e) {
  return !!(e && e.__CANCEL__);
}
function Lr(e, t, n) {
  De.call(this, e ?? "canceled", De.ERR_CANCELED, t, n), this.name = "CanceledError";
}
z.inherits(Lr, De, {
  __CANCEL__: !0
});
function dd(e, t, n) {
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
    const d = Date.now(), u = r[o];
    s || (s = d), n[a] = i, r[a] = d;
    let c = o, p = 0;
    for (; c !== a; )
      p += n[c++], c = c % e;
    if (a = (a + 1) % e, a === o && (o = (o + 1) % e), d - s < t)
      return;
    const b = u && d - u;
    return b ? Math.round(p * 1e3 / b) : void 0;
  };
}
function Ky(e, t) {
  let n = 0, r = 1e3 / t, a, o;
  const s = (d, u = Date.now()) => {
    n = u, a = null, o && (clearTimeout(o), o = null), e.apply(null, d);
  };
  return [(...d) => {
    const u = Date.now(), c = u - n;
    c >= r ? s(d, u) : (a = d, o || (o = setTimeout(() => {
      o = null, s(a);
    }, r - c)));
  }, () => a && s(a)];
}
const oo = (e, t, n = 3) => {
  let r = 0;
  const a = Gy(50, 250);
  return Ky((o) => {
    const s = o.loaded, l = o.lengthComputable ? o.total : void 0, i = s - r, d = a(i), u = s <= l;
    r = s;
    const c = {
      loaded: s,
      total: l,
      progress: l ? s / l : void 0,
      bytes: i,
      rate: d || void 0,
      estimated: d && l && u ? (l - s) / d : void 0,
      event: o,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(c);
  }, n);
}, Qi = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Ji = (e) => (...t) => z.asap(() => e(...t)), Xy = Et.hasStandardBrowserEnv ? (
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
function fd(e, t) {
  return e && !Jy(t) ? Zy(e, t) : t;
}
const Zi = (e) => e instanceof Rt ? { ...e } : e;
function mr(e, t) {
  t = t || {};
  const n = {};
  function r(d, u, c) {
    return z.isPlainObject(d) && z.isPlainObject(u) ? z.merge.call({ caseless: c }, d, u) : z.isPlainObject(u) ? z.merge({}, u) : z.isArray(u) ? u.slice() : u;
  }
  function a(d, u, c) {
    if (z.isUndefined(u)) {
      if (!z.isUndefined(d))
        return r(void 0, d, c);
    } else return r(d, u, c);
  }
  function o(d, u) {
    if (!z.isUndefined(u))
      return r(void 0, u);
  }
  function s(d, u) {
    if (z.isUndefined(u)) {
      if (!z.isUndefined(d))
        return r(void 0, d);
    } else return r(void 0, u);
  }
  function l(d, u, c) {
    if (c in t)
      return r(d, u);
    if (c in e)
      return r(void 0, d);
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
    headers: (d, u) => a(Zi(d), Zi(u), !0)
  };
  return z.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const c = i[u] || a, p = c(e[u], t[u], u);
    z.isUndefined(p) && c !== l || (n[u] = p);
  }), n;
}
const pd = (e) => {
  const t = mr({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: a, xsrfCookieName: o, headers: s, auth: l } = t;
  t.headers = s = Rt.from(s), t.url = ld(fd(t.baseURL, t.url), e.params, e.paramsSerializer), l && s.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let i;
  if (z.isFormData(n)) {
    if (Et.hasStandardBrowserEnv || Et.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((i = s.getContentType()) !== !1) {
      const [d, ...u] = i ? i.split(";").map((c) => c.trim()).filter(Boolean) : [];
      s.setContentType([d || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Et.hasStandardBrowserEnv && (r && z.isFunction(r) && (r = r(t)), r || r !== !1 && Xy(t.url))) {
    const d = a && o && Qy.read(o);
    d && s.set(a, d);
  }
  return t;
}, eg = typeof XMLHttpRequest < "u", tg = eg && function(e) {
  return new Promise(function(n, r) {
    const a = pd(e);
    let o = a.data;
    const s = Rt.from(a.headers).normalize();
    let { responseType: l, onUploadProgress: i, onDownloadProgress: d } = a, u, c, p, b, g;
    function y() {
      b && b(), g && g(), a.cancelToken && a.cancelToken.unsubscribe(u), a.signal && a.signal.removeEventListener("abort", u);
    }
    let M = new XMLHttpRequest();
    M.open(a.method.toUpperCase(), a.url, !0), M.timeout = a.timeout;
    function E() {
      if (!M)
        return;
      const h = Rt.from(
        "getAllResponseHeaders" in M && M.getAllResponseHeaders()
      ), A = {
        data: !l || l === "text" || l === "json" ? M.responseText : M.response,
        status: M.status,
        statusText: M.statusText,
        headers: h,
        config: e,
        request: M
      };
      dd(function(j) {
        n(j), y();
      }, function(j) {
        r(j), y();
      }, A), M = null;
    }
    "onloadend" in M ? M.onloadend = E : M.onreadystatechange = function() {
      !M || M.readyState !== 4 || M.status === 0 && !(M.responseURL && M.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, M.onabort = function() {
      M && (r(new De("Request aborted", De.ECONNABORTED, e, M)), M = null);
    }, M.onerror = function() {
      r(new De("Network Error", De.ERR_NETWORK, e, M)), M = null;
    }, M.ontimeout = function() {
      let k = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const A = a.transitional || id;
      a.timeoutErrorMessage && (k = a.timeoutErrorMessage), r(new De(
        k,
        A.clarifyTimeoutError ? De.ETIMEDOUT : De.ECONNABORTED,
        e,
        M
      )), M = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in M && z.forEach(s.toJSON(), function(k, A) {
      M.setRequestHeader(A, k);
    }), z.isUndefined(a.withCredentials) || (M.withCredentials = !!a.withCredentials), l && l !== "json" && (M.responseType = a.responseType), d && ([p, g] = oo(d, !0), M.addEventListener("progress", p)), i && M.upload && ([c, b] = oo(i), M.upload.addEventListener("progress", c), M.upload.addEventListener("loadend", b)), (a.cancelToken || a.signal) && (u = (h) => {
      M && (r(!h || h.type ? new Lr(null, e, M) : h), M.abort(), M = null);
    }, a.cancelToken && a.cancelToken.subscribe(u), a.signal && (a.signal.aborted ? u() : a.signal.addEventListener("abort", u)));
    const V = zy(a.url);
    if (V && Et.protocols.indexOf(V) === -1) {
      r(new De("Unsupported protocol " + V + ":", De.ERR_BAD_REQUEST, e));
      return;
    }
    M.send(o || null);
  });
}, ng = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), a;
    const o = function(d) {
      if (!a) {
        a = !0, l();
        const u = d instanceof Error ? d : this.reason;
        r.abort(u instanceof De ? u : new Lr(u instanceof Error ? u.message : u));
      }
    };
    let s = t && setTimeout(() => {
      s = null, o(new De(`timeout ${t} of ms exceeded`, De.ETIMEDOUT));
    }, t);
    const l = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((d) => {
        d.unsubscribe ? d.unsubscribe(o) : d.removeEventListener("abort", o);
      }), e = null);
    };
    e.forEach((d) => d.addEventListener("abort", o));
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
}, eu = (e, t, n, r) => {
  const a = ag(e, t);
  let o = 0, s, l = (i) => {
    s || (s = !0, r && r(i));
  };
  return new ReadableStream({
    async pull(i) {
      try {
        const { done: d, value: u } = await a.next();
        if (d) {
          l(), i.close();
          return;
        }
        let c = u.byteLength;
        if (n) {
          let p = o += c;
          n(p);
        }
        i.enqueue(new Uint8Array(u));
      } catch (d) {
        throw l(d), d;
      }
    },
    cancel(i) {
      return l(i), a.return();
    }
  }, {
    highWaterMark: 2
  });
}, No = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", md = No && typeof ReadableStream == "function", sg = No && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), hd = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, lg = md && hd(() => {
  let e = !1;
  const t = new Request(Et.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), tu = 64 * 1024, Bs = md && hd(() => z.isReadableStream(new Response("").body)), so = {
  stream: Bs && ((e) => e.body)
};
No && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !so[t] && (so[t] = z.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
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
}, cg = No && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: a,
    cancelToken: o,
    timeout: s,
    onDownloadProgress: l,
    onUploadProgress: i,
    responseType: d,
    headers: u,
    withCredentials: c = "same-origin",
    fetchOptions: p
  } = pd(e);
  d = d ? (d + "").toLowerCase() : "text";
  let b = ng([a, o && o.toAbortSignal()], s), g;
  const y = b && b.unsubscribe && (() => {
    b.unsubscribe();
  });
  let M;
  try {
    if (i && lg && n !== "get" && n !== "head" && (M = await ug(u, r)) !== 0) {
      let A = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), F;
      if (z.isFormData(r) && (F = A.headers.get("content-type")) && u.setContentType(F), A.body) {
        const [j, _] = Qi(
          M,
          oo(Ji(i))
        );
        r = eu(A.body, tu, j, _);
      }
    }
    z.isString(c) || (c = c ? "include" : "omit");
    const E = "credentials" in Request.prototype;
    g = new Request(t, {
      ...p,
      signal: b,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: E ? c : void 0
    });
    let V = await fetch(g);
    const h = Bs && (d === "stream" || d === "response");
    if (Bs && (l || h && y)) {
      const A = {};
      ["status", "statusText", "headers"].forEach((O) => {
        A[O] = V[O];
      });
      const F = z.toFiniteNumber(V.headers.get("content-length")), [j, _] = l && Qi(
        F,
        oo(Ji(l), !0)
      ) || [];
      V = new Response(
        eu(V.body, tu, j, () => {
          _ && _(), y && y();
        }),
        A
      );
    }
    d = d || "text";
    let k = await so[z.findKey(so, d) || "text"](V, e);
    return !h && y && y(), await new Promise((A, F) => {
      dd(A, F, {
        data: k,
        headers: Rt.from(V.headers),
        status: V.status,
        statusText: V.statusText,
        config: e,
        request: g
      });
    });
  } catch (E) {
    throw y && y(), E && E.name === "TypeError" && /fetch/i.test(E.message) ? Object.assign(
      new De("Network Error", De.ERR_NETWORK, e, g),
      {
        cause: E.cause || E
      }
    ) : De.from(E, E && E.code, e, g);
  }
}), Ls = {
  http: Ty,
  xhr: tg,
  fetch: cg
};
z.forEach(Ls, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const nu = (e) => `- ${e}`, dg = (e) => z.isFunction(e) || e === null || e === !1, vd = {
  getAdapter: (e) => {
    e = z.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let s;
      if (r = n, !dg(n) && (r = Ls[(s = String(n)).toLowerCase()], r === void 0))
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
` + o.map(nu).join(`
`) : " " + nu(o[0]) : "as no adapter specified";
      throw new De(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ls
};
function as(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Lr(null, e);
}
function ru(e) {
  return as(e), e.headers = Rt.from(e.headers), e.data = rs.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), vd.getAdapter(e.adapter || _a.adapter)(e).then(function(r) {
    return as(e), r.data = rs.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Rt.from(r.headers), r;
  }, function(r) {
    return cd(r) || (as(e), r && r.response && (r.response.data = rs.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Rt.from(r.response.headers))), Promise.reject(r);
  });
}
const yd = "1.7.7", Ml = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ml[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const au = {};
Ml.transitional = function(t, n, r) {
  function a(o, s) {
    return "[Axios v" + yd + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return (o, s, l) => {
    if (t === !1)
      throw new De(
        a(s, " has been removed" + (n ? " in " + n : "")),
        De.ERR_DEPRECATED
      );
    return n && !au[s] && (au[s] = !0, console.warn(
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
const Ys = {
  assertOptions: fg,
  validators: Ml
}, Sn = Ys.validators;
class dr {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ki(),
      response: new Ki()
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
    r !== void 0 && Ys.assertOptions(r, {
      silentJSONParsing: Sn.transitional(Sn.boolean),
      forcedJSONParsing: Sn.transitional(Sn.boolean),
      clarifyTimeoutError: Sn.transitional(Sn.boolean)
    }, !1), a != null && (z.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : Ys.assertOptions(a, {
      encode: Sn.function,
      serialize: Sn.function
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
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (i = i && y.synchronous, l.unshift(y.fulfilled, y.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function(y) {
      d.push(y.fulfilled, y.rejected);
    });
    let u, c = 0, p;
    if (!i) {
      const g = [ru.bind(this), void 0];
      for (g.unshift.apply(g, l), g.push.apply(g, d), p = g.length, u = Promise.resolve(n); c < p; )
        u = u.then(g[c++], g[c++]);
      return u;
    }
    p = l.length;
    let b = n;
    for (c = 0; c < p; ) {
      const g = l[c++], y = l[c++];
      try {
        b = g(b);
      } catch (M) {
        y.call(this, M);
        break;
      }
    }
    try {
      u = ru.call(this, b);
    } catch (g) {
      return Promise.reject(g);
    }
    for (c = 0, p = d.length; c < p; )
      u = u.then(d[c++], d[c++]);
    return u;
  }
  getUri(t) {
    t = mr(this.defaults, t);
    const n = fd(t.baseURL, t.url);
    return ld(n, t.params, t.paramsSerializer);
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
class Tl {
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
      token: new Tl(function(a) {
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
const Hs = {
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
Object.entries(Hs).forEach(([e, t]) => {
  Hs[t] = e;
});
function gd(e) {
  const t = new dr(e), n = Kc(dr.prototype.request, t);
  return z.extend(n, dr.prototype, t, { allOwnKeys: !0 }), z.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return gd(mr(e, a));
  }, n;
}
const st = gd(_a);
st.Axios = dr;
st.CanceledError = Lr;
st.CancelToken = Tl;
st.isCancel = cd;
st.VERSION = yd;
st.toFormData = Ro;
st.AxiosError = De;
st.Cancel = st.CanceledError;
st.all = function(t) {
  return Promise.all(t);
};
st.spread = pg;
st.isAxiosError = mg;
st.mergeConfig = mr;
st.AxiosHeaders = Rt;
st.formToJSON = (e) => ud(z.isHTMLForm(e) ? new FormData(e) : e);
st.getAdapter = vd.getAdapter;
st.HttpStatusCode = Hs;
st.default = st;
function ou(e) {
  return st.get(e, { withCredentials: !0 }).then((t) => t.data);
}
const bd = {
  Value: ao,
  ValueString: Dr,
  ValueDoubleRange: cr,
  ValueDateRange: Or,
  ValueFilePath: Er,
  Mode: Yn,
  SubSystem: Hn,
  Command: pa,
  PORISValue: ao,
  PORISValueString: Dr,
  PORISValueFloat: cr,
  PORISValueDoubleRange: cr,
  PORISValueDate: Or,
  PORISValueFilePath: Er,
  PORISMode: Yn,
  PORISNode: Hn,
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
        const s = bd[o.getAttribute("type")], l = nt(o, "id");
        s && s != pa && (s == Hn && (t.find((i) => {
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
  let n = nt(e, "id"), r = nt(e, "ident"), a = nt(e, "name"), o = nt(e, "node-type-id"), s = bd[nt(e, "type")], l = bg(e, t), i = wg(e), d = _g(e), u = xg(e), c = !!(l != null && l.find((y) => $s.includes(y.type) && y.id > 0)), p = !!(l != null && l.find((y) => $s.includes(y.type))), b = !!(l != null && l.find((y) => y.type == Yn)), g = !!(l != null && l.find((y) => y.type == Hn));
  return {
    id: n,
    ident: r,
    name: a,
    nodeTypeId: o,
    type: s,
    destinations: l,
    commandReferences: i,
    nodeAttributes: d,
    label: u,
    hasValues: p,
    hasRealValues: c,
    hasModes: b,
    hasSubsystems: g
  };
}
function os(e, t) {
  t.forEach((n) => {
    if (n.destinations) {
      let r = n.destinations.map((a) => e.findNode(a.type, a.id));
      n.valuesNodes = r.filter((a) => a.type != Yn && a.type != Hn), n.modesNodes = r.filter((a) => a.type === Yn), n.subsystemsNodes = r.filter((a) => a.type === Hn), n.modesNodes.forEach((a) => {
        a.parent = n;
      }), n.subsystemsNodes.forEach((a) => {
        a.parent = n;
      });
    }
  });
}
function su(e) {
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
function ss(e, t) {
  const n = {
    values: [],
    modes: [],
    params: [],
    subsystems: [],
    commands: [],
    findNode: function(d, u) {
      let c = null;
      return d == Yn ? c = this.modes : d == Hn ? c = this.subsystems : d == pa ? c = this.commands : c = this.values, c.find((p) => p.id === u);
    }
  };
  var r = [];
  const o = new DOMParser().parseFromString(t, "text/xml");
  for (const d of hg) {
    let u = o.getElementsByTagName(d);
    for (const c of u) {
      const p = Ra(c, r);
      p.parent = null;
      let b = nt(c, "value-formatter-id");
      p[b] = b;
      const g = p.type;
      if (g == cr) {
        let y = nt(c, "default-float"), M = nt(c, "rangemax"), E = nt(c, "rangemin");
        p.defaultFloat = y, p.rangemax = M, p.rangemin = E;
      } else if (g == Dr) {
        let y = nt(c, "default-string");
        p.defaultString = y;
      } else if (g == Or) {
        let y = nt(c, "default-date"), M = nt(c, "date-max"), E = nt(c, "date-min");
        p.defaultDate = y, p.datemax = M, p.datemin = E;
      } else if (g == Er) {
        let y = nt(c, "default-string"), M = nt(c, "file-description"), E = nt(c, "file-extension");
        p.defaultString = y, p.fileDescription = M, p.fileExtension = E;
      }
      n.values.push(new Xr(p));
    }
  }
  const s = o.getElementsByTagName(vg);
  for (const d of s) {
    const u = Ra(d, r);
    let c = nt(d, "default-mode-id"), p = nt(d, "default-value-id");
    u.defaultModeId = c, u.defaultValueId = p, n.modes.push(new Xr(u));
  }
  const l = o.getElementsByTagName(gg);
  for (const d of l) {
    const u = Ra(d, r);
    n.commands.push(new Xr(u));
  }
  const i = o.getElementsByTagName(yg);
  for (const d of i) {
    const u = Ra(d, r);
    let c = nt(d, "default-mode-id");
    u.defaultModeId = c, n.subsystems.push(new Xr(u));
  }
  return n.rootSubsystem = n.subsystems.find((d) => !r.includes(d.id)), os(n, n.modes), os(n, n.params), os(n, n.subsystems), su(n.modes), su(n.subsystems), Mg(n.modes), kg(n, n.subsystems), Tg(n), n;
}
let wd = !1;
function Sg(e) {
  wd = e;
}
function hn(...e) {
  wd && console.log(...e);
}
const Sl = Jm("model", () => {
  const e = J(null), t = J([]), n = J([]), r = J([]), a = J(), o = J(!1), s = J([]), l = J({});
  function i(_) {
    o.value = !0, ou(`/models/${_}.xml`).then((W) => {
      e.value = W;
      let C = ss(this, W);
      t.value = C.values, n.value = C.modes, r.value = C.subsystems, a.value = C.rootSubsystem, s.value = [], l.value = {}, M(C.rootSubsystem);
    }).finally(() => {
      o.value = !1;
    });
  }
  function d(_) {
    o.value = !0, ou(`${_}`).then((W) => {
      e.value = W;
      let C = ss(this, W);
      t.value = C.values, n.value = C.modes, r.value = C.subsystems, a.value = C.rootSubsystem, s.value = [], l.value = {}, M(C.rootSubsystem);
    }).finally(() => {
      o.value = !1;
    });
  }
  function u(_) {
    o.value = !0, Promise.resolve(_).then((O) => {
      e.value = O;
      let W = ss(this, O);
      t.value = W.values, n.value = W.modes, r.value = W.subsystems, a.value = W.rootSubsystem, s.value = [], l.value = {}, M(W.rootSubsystem);
    }).finally(() => {
      o.value = !1;
    });
  }
  function c(_) {
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
    let C = null;
    W.length > 0 ? O != null && W.includes(O) ? C = O : _.parent == null && W.includes(_.defaultMode) ? C = _.defaultMode : C = W[0] : C = _.unknownMode || null;
    const S = _.currentMode !== C;
    return _.currentMode = C, _.candidateMode = C, s.value[`${_.id}`] = C, j(_, C), _.hasSubsystems && _.subsystemsNodes.forEach((B) => {
      E(B, B.currentMode, C);
    }), S && hn(`PORIS mode changed for ${_.name}: ${(C == null ? void 0 : C.name) || "none"}`), C;
  }
  function y(_, O) {
    hn(`setValidMode_ ${_.name} ${O == null ? void 0 : O.name}, NOT using supermode`);
    let W = h(_);
    return hn(`   setValidMode validModes len ${W.length}`, W), g(_, O, W);
  }
  function M(_, O) {
    Wn();
    let W;
    try {
      W = y(_, O);
    } finally {
      Sf();
    }
    return ni(s), ni(l), W;
  }
  function E(_, O, W) {
    const C = new Set(_.modesNodes.map((B) => B.id));
    let S = (W.modesNodes || []).filter((B) => C.has(B.id));
    return hn(`   setValidMode validModes  len ${S.length}`, S), g(_, O, S);
  }
  function V(_) {
    const O = s.value.reduce((W, C) => _.includes(C.id) ? C : W, null);
    return O || _[0];
  }
  function h(_) {
    if (_.parent != null && _.parent.currentMode != null) {
      hn(`parent: ${_.parent.name}`), hn(`parent mode: ${_.parent.currentMode.name}`), hn("parent.mode.submodes:", _.parent.currentMode.modesNodes);
      const O = new Set(_.modesNodes.map((W) => W.id));
      return (_.parent.currentMode.modesNodes || []).filter((W) => O.has(W.id));
    } else return _.parent != null ? [] : _.modesNodes;
  }
  function k(_) {
    return h(_).length > 0;
  }
  function A(_, O, W) {
    l.value[`${_.id}`] = { value: O, data: W };
  }
  function F(_) {
    var O;
    for (const W of _ || []) {
      const C = b(W.node_id);
      if (!C) continue;
      const S = String(W.mode_id || "").startsWith("unknown:") ? C.unknownMode : p(W.mode_id), B = C.getValidModes();
      if (S && (B.includes(S) || S === C.unknownMode && B.length === 0) && M(C, S), W.value_id != null) {
        const $ = c(W.value_id), w = ((O = C.currentMode) == null ? void 0 : O.valuesNodes) || [];
        $ && w.some((T) => T.id == $.id) && A(C, $, W.data);
      }
    }
  }
  function j(_, O, W = null) {
    const C = l.value[`${_.id}`] || {};
    if (!(O != null && O.hasValues))
      return A(_, null, null), { value: null, data: null };
    const S = O.valuesNodes || [];
    if (S.length === 0)
      return A(_, null, null), { value: null, data: null };
    const B = S.find((T) => {
      var q;
      return T.id === ((q = O.defaultValue) == null ? void 0 : q.id);
    }) || S[0];
    let $ = S.find((T) => {
      var q;
      return T.id === ((q = W || C.value) == null ? void 0 : q.id);
    }) || B, w = C.data;
    return $.type === cr ? (typeof w != "number" || !Number.isFinite(w) || w < Number($.rangemin) || w > Number($.rangemax)) && (w = Number($.defaultFloat)) : $.type === Dr || $.type === Er ? typeof w != "string" && (w = $.defaultString || "") : $.type === Or && w == null && (w = $.defaultDate), A(_, $, w), { value: $, data: w };
  }
  return {
    xmlModel: e,
    rootSubsystem: a,
    isLoading: o,
    currentModes: s,
    systemValues: l,
    loadModel: i,
    loadModelURL: d,
    loadModelXML: u,
    getValue: c,
    getMode: p,
    getSubsystem: b,
    getCurrentMode: V,
    setValidMode: M,
    getValidObjModes: h,
    hasValidObjModes: k,
    getSystemValue: j,
    setSystemValue: A,
    applyRuntimeState: F
  };
}), Pg = ["disabled"], Ag = ["value"], _d = {
  __name: "ModeSelector",
  props: /* @__PURE__ */ Ga({
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
    const t = Ja(e, "modelValue"), n = e, r = J(n.modes);
    return rt(
      () => n.modes,
      (a, o) => {
        r.value = a;
      }
    ), (a, o) => bn((I(), G("select", {
      "onUpdate:modelValue": o[0] || (o[0] = (s) => t.value = s),
      disabled: r.value.length < 2
    }, [
      (I(!0), G(_e, null, qe(r.value, (s) => (I(), G("option", {
        key: s.id,
        value: s
      }, He(s.label || s.name), 9, Ag))), 128))
    ], 8, Pg)), [
      [Cc, t.value]
    ]);
  }
}, $o = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, Cg = ["min", "max", "step", "aria-label", "aria-expanded"], Dg = ["onKeydown"], Og = ["min", "max", "step", "aria-label"], Eg = {
  class: "poris-numeric-slider-limits",
  "aria-hidden": "true"
}, Rg = {
  __name: "NumericRangeInput",
  props: /* @__PURE__ */ Ga({
    min: { type: [Number, String], required: !0 },
    max: { type: [Number, String], required: !0 },
    step: { type: [Number, String], default: 0.01 },
    label: { type: String, default: "Value" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ga(["focus", "blur", "keydown"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = e, r = t, a = Ja(e, "modelValue"), o = J(null), s = J(null), l = J(!1), i = J({}), d = Z(
      () => Number.isFinite(Number(n.min)) && Number.isFinite(Number(n.max)) && Number(n.min) < Number(n.max)
    ), u = Z({
      get() {
        const h = a.value === "" ? NaN : Number(a.value);
        return Number.isFinite(h) ? Math.min(Number(n.max), Math.max(Number(n.min), h)) : Number(n.min);
      },
      set(h) {
        a.value = Number(h);
      }
    });
    function c() {
      var j;
      if (!l.value || !o.value) return;
      const h = o.value.getBoundingClientRect(), k = Math.min(260, Math.max(0, window.innerWidth - 16)), A = ((j = s.value) == null ? void 0 : j.offsetHeight) || 64, F = h.bottom + A + 6 <= window.innerHeight ? h.bottom + 6 : Math.max(8, h.top - A - 6);
      i.value = {
        position: "fixed",
        width: `${k}px`,
        top: `${F}px`,
        left: `${Math.max(8, Math.min(h.left, window.innerWidth - k - 8))}px`
      };
    }
    function p(h) {
      l.value = d.value, c(), Ut(c), r("focus", h);
    }
    function b(h) {
      var k;
      return h && (o.value === h || ((k = s.value) == null ? void 0 : k.contains(h)));
    }
    function g(h) {
      b(h.relatedTarget) || (l.value = !1);
    }
    function y(h) {
      r("blur", h), g(h);
    }
    function M(h) {
      h.key === "Escape" && (l.value = !1, h.stopPropagation()), r("keydown", h);
    }
    function E() {
      var h;
      (h = o.value) == null || h.focus(), l.value = !1;
    }
    function V(h) {
      b(h.target) || (l.value = !1);
    }
    return rt(l, (h) => {
      const k = h ? "addEventListener" : "removeEventListener";
      window[k]("resize", c), window[k]("scroll", c, !0), document[k]("pointerdown", V, !0);
    }, { flush: "sync" }), rt(() => [n.min, n.max], () => {
      l.value = !1;
    }), Mo(() => {
      window.removeEventListener("resize", c), window.removeEventListener("scroll", c, !0), document.removeEventListener("pointerdown", V, !0);
    }), (h, k) => (I(), G(_e, null, [
      bn(be("input", {
        ref_key: "numberInput",
        ref: o,
        "onUpdate:modelValue": k[0] || (k[0] = (A) => a.value = A),
        class: "numberPicker",
        type: "number",
        min: e.min,
        max: e.max,
        step: e.step,
        "aria-label": e.label,
        "aria-expanded": l.value,
        onFocus: p,
        onBlur: y,
        onKeydown: M
      }, null, 40, Cg), [
        [
          Es,
          a.value,
          void 0,
          { number: !0 }
        ]
      ]),
      (I(), Ae(bc, { to: "body" }, [
        l.value && d.value ? (I(), G("div", {
          key: 0,
          ref_key: "popup",
          ref: s,
          class: "poris-numeric-slider",
          style: St(i.value),
          onFocusout: g,
          onKeydown: Pe(Ge(E, ["stop", "prevent"]), ["esc"])
        }, [
          bn(be("input", {
            "onUpdate:modelValue": k[1] || (k[1] = (A) => u.value = A),
            type: "range",
            min: e.min,
            max: e.max,
            step: e.step,
            "aria-label": e.label
          }, null, 8, Og), [
            [
              Es,
              u.value,
              void 0,
              { number: !0 }
            ]
          ]),
          be("div", Eg, [
            be("span", null, He(e.min), 1),
            be("span", null, He(e.max), 1)
          ])
        ], 44, Dg)) : Q("", !0)
      ]))
    ], 64));
  }
}, Ng = /* @__PURE__ */ $o(Rg, [["__scopeId", "data-v-9795c264"]]);
function Me(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function We(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function qt(e, t) {
  const n = Me(e);
  return isNaN(t) ? We(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Kt(e, t) {
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
function xd(e, t) {
  const {
    years: n = 0,
    months: r = 0,
    weeks: a = 0,
    days: o = 0,
    hours: s = 0,
    minutes: l = 0,
    seconds: i = 0
  } = t, d = Me(e), u = r || n ? Kt(d, r + n * 12) : d, c = o || a ? qt(u, o + a * 7) : u, p = l + s * 60, g = (i + p * 60) * 1e3;
  return We(e, c.getTime() + g);
}
const kd = 6048e5, $g = 864e5, Vg = 6e4, Ig = 36e5, Fg = 1e3;
let Bg = {};
function yr() {
  return Bg;
}
function mn(e, t) {
  var l, i, d, u;
  const n = yr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((i = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : i.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = Me(e), o = a.getDay(), s = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function Rr(e) {
  return mn(e, { weekStartsOn: 1 });
}
function Md(e) {
  const t = Me(e), n = t.getFullYear(), r = We(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const a = Rr(r), o = We(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const s = Rr(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function lu(e) {
  const t = Me(e);
  return t.setHours(0, 0, 0, 0), t;
}
function lo(e) {
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
function Td(e, t) {
  const n = lu(e), r = lu(t), a = +n - lo(n), o = +r - lo(r);
  return Math.round((a - o) / $g);
}
function Lg(e) {
  const t = Md(e), n = We(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Rr(n);
}
function Yg(e, t) {
  const n = t * 3;
  return Kt(e, n);
}
function Pl(e, t) {
  return Kt(e, t * 12);
}
function Sd(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function oa(e) {
  if (!Sd(e) && typeof e != "number")
    return !1;
  const t = Me(e);
  return !isNaN(Number(t));
}
function iu(e) {
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
function Hg(e, t) {
  const n = Me(e.start), r = Me(e.end);
  let a = +n > +r;
  const o = a ? +lr(n) : +lr(r);
  let s = lr(a ? r : n), l = 1;
  const i = [];
  for (; +s <= o; )
    i.push(Me(s)), s = Yg(s, l);
  return a ? i.reverse() : i;
}
function jg(e) {
  const t = Me(e), n = t.getFullYear();
  return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function Ad(e) {
  const t = Me(e), n = We(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Ug(e, t) {
  var l, i, d, u;
  const n = yr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((i = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : i.weekStartsOn) ?? n.weekStartsOn ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = Me(e), o = a.getDay(), s = (o < r ? -7 : 0) + 6 - (o - r);
  return a.setDate(a.getDate() + s), a.setHours(23, 59, 59, 999), a;
}
function uu(e) {
  const t = Me(e), n = t.getMonth(), r = n - n % 3 + 3;
  return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t;
}
const Wg = {
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
}, qg = (e, t, n) => {
  let r;
  const a = Wg[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function ls(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const zg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Gg = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Kg = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Xg = {
  date: ls({
    formats: zg,
    defaultWidth: "full"
  }),
  time: ls({
    formats: Gg,
    defaultWidth: "full"
  }),
  dateTime: ls({
    formats: Kg,
    defaultWidth: "full"
  })
}, Qg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Jg = (e, t, n, r) => Qg[e];
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
const Zg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, e0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, t0 = {
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
}, n0 = {
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
}, r0 = {
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
}, a0 = {
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
}, o0 = (e, t) => {
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
}, s0 = {
  ordinalNumber: o0,
  era: qr({
    values: Zg,
    defaultWidth: "wide"
  }),
  quarter: qr({
    values: e0,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: qr({
    values: t0,
    defaultWidth: "wide"
  }),
  day: qr({
    values: n0,
    defaultWidth: "wide"
  }),
  dayPeriod: qr({
    values: r0,
    defaultWidth: "wide",
    formattingValues: a0,
    defaultFormattingWidth: "wide"
  })
};
function zr(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const s = o[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], i = Array.isArray(l) ? i0(l, (c) => c.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      l0(l, (c) => c.test(s))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(i) : i, d = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(d)
    ) : d;
    const u = t.slice(s.length);
    return { value: d, rest: u };
  };
}
function l0(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function i0(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function u0(e) {
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
const c0 = /^(\d+)(th|st|nd|rd)?/i, d0 = /\d+/i, f0 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, p0 = {
  any: [/^b/i, /^(a|c)/i]
}, m0 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, h0 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, v0 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, y0 = {
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
}, g0 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, b0 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, w0 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, _0 = {
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
}, x0 = {
  ordinalNumber: u0({
    matchPattern: c0,
    parsePattern: d0,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: zr({
    matchPatterns: f0,
    defaultMatchWidth: "wide",
    parsePatterns: p0,
    defaultParseWidth: "any"
  }),
  quarter: zr({
    matchPatterns: m0,
    defaultMatchWidth: "wide",
    parsePatterns: h0,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: zr({
    matchPatterns: v0,
    defaultMatchWidth: "wide",
    parsePatterns: y0,
    defaultParseWidth: "any"
  }),
  day: zr({
    matchPatterns: g0,
    defaultMatchWidth: "wide",
    parsePatterns: b0,
    defaultParseWidth: "any"
  }),
  dayPeriod: zr({
    matchPatterns: w0,
    defaultMatchWidth: "any",
    parsePatterns: _0,
    defaultParseWidth: "any"
  })
}, Cd = {
  code: "en-US",
  formatDistance: qg,
  formatLong: Xg,
  formatRelative: Jg,
  localize: s0,
  match: x0,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function k0(e) {
  const t = Me(e);
  return Td(t, Ad(t)) + 1;
}
function Al(e) {
  const t = Me(e), n = +Rr(t) - +Lg(t);
  return Math.round(n / kd) + 1;
}
function Cl(e, t) {
  var u, c, p, b;
  const n = Me(e), r = n.getFullYear(), a = yr(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((b = (p = a.locale) == null ? void 0 : p.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, s = We(e, 0);
  s.setFullYear(r + 1, 0, o), s.setHours(0, 0, 0, 0);
  const l = mn(s, t), i = We(e, 0);
  i.setFullYear(r, 0, o), i.setHours(0, 0, 0, 0);
  const d = mn(i, t);
  return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= d.getTime() ? r : r - 1;
}
function M0(e, t) {
  var l, i, d, u;
  const n = yr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((i = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : i.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (d = n.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = Cl(e, t), o = We(e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), mn(o, t);
}
function Dl(e, t) {
  const n = Me(e), r = +mn(n, t) - +M0(n, t);
  return Math.round(r / kd) + 1;
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
}, cu = {
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
    const a = Cl(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const s = o % 100;
      return ze(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : ze(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Md(e);
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
    const a = Dl(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : ze(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Al(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ze(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Pn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = k0(e);
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
        return fu(r);
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
        return fu(r);
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
        return "GMT" + du(r, ":");
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
        return "GMT" + du(r, ":");
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
function du(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + t + ze(o, 2);
}
function fu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ze(Math.abs(e) / 60, 2) : er(e, t);
}
function er(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = ze(Math.trunc(r / 60), 2), o = ze(r % 60, 2);
  return n + a + t + o;
}
const pu = (e, t) => {
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
}, T0 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return pu(e, t);
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
  return o.replace("{{date}}", pu(r, t)).replace("{{time}}", Dd(a, t));
}, js = {
  p: Dd,
  P: T0
}, S0 = /^D+$/, P0 = /^Y+$/, A0 = ["D", "DD", "YY", "YYYY"];
function Od(e) {
  return S0.test(e);
}
function Ed(e) {
  return P0.test(e);
}
function Us(e, t, n) {
  const r = C0(e, t, n);
  if (console.warn(r), A0.includes(e)) throw new RangeError(r);
}
function C0(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const D0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, O0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, E0 = /^'([^]*?)'?$/, R0 = /''/g, N0 = /[a-zA-Z]/;
function dn(e, t, n) {
  var u, c, p, b, g, y, M, E;
  const r = yr(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? Cd, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((c = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : c.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((b = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((y = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) == null ? void 0 : y.weekStartsOn) ?? r.weekStartsOn ?? ((E = (M = r.locale) == null ? void 0 : M.options) == null ? void 0 : E.weekStartsOn) ?? 0, l = Me(e);
  if (!oa(l))
    throw new RangeError("Invalid time value");
  let i = t.match(O0).map((V) => {
    const h = V[0];
    if (h === "p" || h === "P") {
      const k = js[h];
      return k(V, a.formatLong);
    }
    return V;
  }).join("").match(D0).map((V) => {
    if (V === "''")
      return { isToken: !1, value: "'" };
    const h = V[0];
    if (h === "'")
      return { isToken: !1, value: $0(V) };
    if (cu[h])
      return { isToken: !0, value: V };
    if (h.match(N0))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + h + "`"
      );
    return { isToken: !1, value: V };
  });
  a.localize.preprocessor && (i = a.localize.preprocessor(l, i));
  const d = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: a
  };
  return i.map((V) => {
    if (!V.isToken) return V.value;
    const h = V.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Ed(h) || !(n != null && n.useAdditionalDayOfYearTokens) && Od(h)) && Us(h, t, String(e));
    const k = cu[h[0]];
    return k(l, h, a.localize, d);
  }).join("");
}
function $0(e) {
  const t = e.match(E0);
  return t ? t[1].replace(R0, "'") : e;
}
function V0(e) {
  return Me(e).getDay();
}
function I0(e) {
  const t = Me(e), n = t.getFullYear(), r = t.getMonth(), a = We(e, 0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function F0() {
  return Object.assign({}, yr());
}
function Xt(e) {
  return Me(e).getHours();
}
function B0(e) {
  let n = Me(e).getDay();
  return n === 0 && (n = 7), n;
}
function fn(e) {
  return Me(e).getMinutes();
}
function Fe(e) {
  return Me(e).getMonth();
}
function Nr(e) {
  return Me(e).getSeconds();
}
function Ne(e) {
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
function L0(e, t) {
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
const Y0 = 10;
class Rd {
  constructor() {
    pe(this, "subPriority", 0);
  }
  validate(t, n) {
    return !0;
  }
}
class H0 extends Rd {
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
class j0 extends Rd {
  constructor() {
    super(...arguments);
    pe(this, "priority", Y0);
    pe(this, "subPriority", -1);
  }
  set(n, r) {
    return r.timestampIsSet ? n : We(n, L0(n, Date));
  }
}
class Ue {
  run(t, n, r, a) {
    const o = this.parse(t, n, r, a);
    return o ? {
      setter: new H0(
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
class U0 extends Ue {
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
function at(e, t) {
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
    value: r * (a * Ig + o * Vg + s * Fg),
    rest: t.slice(n[0].length)
  };
}
function Nd(e) {
  return at(pt.anyDigitsSigned, e);
}
function dt(e, t) {
  switch (e) {
    case 1:
      return at(pt.singleDigit, t);
    case 2:
      return at(pt.twoDigits, t);
    case 3:
      return at(pt.threeDigits, t);
    case 4:
      return at(pt.fourDigits, t);
    default:
      return at(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function io(e, t) {
  switch (e) {
    case 1:
      return at(pt.singleDigitSigned, t);
    case 2:
      return at(pt.twoDigitsSigned, t);
    case 3:
      return at(pt.threeDigitsSigned, t);
    case 4:
      return at(pt.fourDigitsSigned, t);
    default:
      return at(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function Ol(e) {
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
function Vd(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class W0 extends Ue {
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
class q0 extends Ue {
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
    const s = Cl(n, o);
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
class z0 extends Ue {
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
    return io(r === "R" ? 4 : r.length, n);
  }
  set(n, r, a) {
    const o = We(n, 0);
    return o.setFullYear(a, 0, 4), o.setHours(0, 0, 0, 0), Rr(o);
  }
}
class G0 extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 130);
    pe(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, r) {
    return io(r === "u" ? 4 : r.length, n);
  }
  set(n, r, a) {
    return n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class K0 extends Ue {
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
class X0 extends Ue {
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
class Q0 extends Ue {
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
          at(pt.month, n),
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
class J0 extends Ue {
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
          at(pt.month, n),
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
function Z0(e, t, n) {
  const r = Me(e), a = Dl(r, n) - t;
  return r.setDate(r.getDate() - a * 7), r;
}
class eb extends Ue {
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
        return at(pt.week, n);
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
    return mn(Z0(n, a, o), o);
  }
}
function tb(e, t) {
  const n = Me(e), r = Al(n) - t;
  return n.setDate(n.getDate() - r * 7), n;
}
class nb extends Ue {
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
        return at(pt.week, n);
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
    return Rr(tb(n, a));
  }
}
const rb = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ab = [
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
class ob extends Ue {
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
        return at(pt.date, n);
      case "do":
        return a.ordinalNumber(n, { unit: "date" });
      default:
        return dt(r.length, n);
    }
  }
  validate(n, r) {
    const a = n.getFullYear(), o = Vd(a), s = n.getMonth();
    return o ? r >= 1 && r <= ab[s] : r >= 1 && r <= rb[s];
  }
  set(n, r, a) {
    return n.setDate(a), n.setHours(0, 0, 0, 0), n;
  }
}
class sb extends Ue {
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
        return at(pt.dayOfYear, n);
      case "Do":
        return a.ordinalNumber(n, { unit: "date" });
      default:
        return dt(r.length, n);
    }
  }
  validate(n, r) {
    const a = n.getFullYear();
    return Vd(a) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
  }
  set(n, r, a) {
    return n.setMonth(0, a), n.setHours(0, 0, 0, 0), n;
  }
}
function El(e, t, n) {
  var c, p, b, g;
  const r = yr(), a = (n == null ? void 0 : n.weekStartsOn) ?? ((p = (c = n == null ? void 0 : n.locale) == null ? void 0 : c.options) == null ? void 0 : p.weekStartsOn) ?? r.weekStartsOn ?? ((g = (b = r.locale) == null ? void 0 : b.options) == null ? void 0 : g.weekStartsOn) ?? 0, o = Me(e), s = o.getDay(), i = (t % 7 + 7) % 7, d = 7 - a, u = t < 0 || t > 6 ? t - (s + d) % 7 : (i + d) % 7 - (s + d) % 7;
  return qt(o, u);
}
class lb extends Ue {
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
    return n = El(n, a, o), n.setHours(0, 0, 0, 0), n;
  }
}
class ib extends Ue {
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
    return n = El(n, a, o), n.setHours(0, 0, 0, 0), n;
  }
}
class ub extends Ue {
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
    return n = El(n, a, o), n.setHours(0, 0, 0, 0), n;
  }
}
function cb(e, t) {
  const n = Me(e), r = B0(n), a = t - r;
  return qt(n, a);
}
class db extends Ue {
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
    return n = cb(n, a), n.setHours(0, 0, 0, 0), n;
  }
}
class fb extends Ue {
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
    return n.setHours(Ol(a), 0, 0, 0), n;
  }
}
class pb extends Ue {
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
    return n.setHours(Ol(a), 0, 0, 0), n;
  }
}
class mb extends Ue {
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
    return n.setHours(Ol(a), 0, 0, 0), n;
  }
}
class hb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 70);
    pe(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "h":
        return at(pt.hour12h, n);
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
class vb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 70);
    pe(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "H":
        return at(pt.hour23h, n);
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
class yb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 70);
    pe(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "K":
        return at(pt.hour11h, n);
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
class gb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 70);
    pe(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "k":
        return at(pt.hour24h, n);
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
class bb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 60);
    pe(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "m":
        return at(pt.minute, n);
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
class wb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 50);
    pe(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "s":
        return at(pt.second, n);
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
class _b extends Ue {
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
class xb extends Ue {
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
      n.getTime() - lo(n) - a
    );
  }
}
class kb extends Ue {
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
      n.getTime() - lo(n) - a
    );
  }
}
class Mb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 40);
    pe(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return Nd(n);
  }
  set(n, r, a) {
    return [We(n, a * 1e3), { timestampIsSet: !0 }];
  }
}
class Tb extends Ue {
  constructor() {
    super(...arguments);
    pe(this, "priority", 20);
    pe(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return Nd(n);
  }
  set(n, r, a) {
    return [We(n, a), { timestampIsSet: !0 }];
  }
}
const Sb = {
  G: new U0(),
  y: new W0(),
  Y: new q0(),
  R: new z0(),
  u: new G0(),
  Q: new K0(),
  q: new X0(),
  M: new Q0(),
  L: new J0(),
  w: new eb(),
  I: new nb(),
  d: new ob(),
  D: new sb(),
  E: new lb(),
  e: new ib(),
  c: new ub(),
  i: new db(),
  a: new fb(),
  b: new pb(),
  B: new mb(),
  h: new hb(),
  H: new vb(),
  K: new yb(),
  k: new gb(),
  m: new bb(),
  s: new wb(),
  S: new _b(),
  X: new xb(),
  x: new kb(),
  t: new Mb(),
  T: new Tb()
}, Pb = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ab = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Cb = /^'([^]*?)'?$/, Db = /''/g, Ob = /\S/, Eb = /[a-zA-Z]/;
function Ws(e, t, n, r) {
  var y, M, E, V;
  const a = F0(), o = a.locale ?? Cd, s = a.firstWeekContainsDate ?? ((M = (y = a.locale) == null ? void 0 : y.options) == null ? void 0 : M.firstWeekContainsDate) ?? 1, l = a.weekStartsOn ?? ((V = (E = a.locale) == null ? void 0 : E.options) == null ? void 0 : V.weekStartsOn) ?? 0;
  if (t === "")
    return e === "" ? Me(n) : We(n, NaN);
  const i = {
    firstWeekContainsDate: s,
    weekStartsOn: l,
    locale: o
  }, d = [new j0()], u = t.match(Ab).map((h) => {
    const k = h[0];
    if (k in js) {
      const A = js[k];
      return A(h, o.formatLong);
    }
    return h;
  }).join("").match(Pb), c = [];
  for (let h of u) {
    Ed(h) && Us(h, t, e), Od(h) && Us(h, t, e);
    const k = h[0], A = Sb[k];
    if (A) {
      const { incompatibleTokens: F } = A;
      if (Array.isArray(F)) {
        const _ = c.find(
          (O) => F.includes(O.token) || O.token === k
        );
        if (_)
          throw new RangeError(
            `The format string mustn't contain \`${_.fullToken}\` and \`${h}\` at the same time`
          );
      } else if (A.incompatibleTokens === "*" && c.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${h}\` and any other token at the same time`
        );
      c.push({ token: k, fullToken: h });
      const j = A.run(
        e,
        h,
        o.match,
        i
      );
      if (!j)
        return We(n, NaN);
      d.push(j.setter), e = j.rest;
    } else {
      if (k.match(Eb))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + k + "`"
        );
      if (h === "''" ? h = "'" : k === "'" && (h = Rb(h)), e.indexOf(h) === 0)
        e = e.slice(h.length);
      else
        return We(n, NaN);
    }
  }
  if (e.length > 0 && Ob.test(e))
    return We(n, NaN);
  const p = d.map((h) => h.priority).sort((h, k) => k - h).filter((h, k, A) => A.indexOf(h) === k).map(
    (h) => d.filter((k) => k.priority === h).sort((k, A) => A.subPriority - k.subPriority)
  ).map((h) => h[0]);
  let b = Me(n);
  if (isNaN(b.getTime()))
    return We(n, NaN);
  const g = {};
  for (const h of p) {
    if (!h.validate(b, i))
      return We(n, NaN);
    const k = h.set(b, g, i);
    Array.isArray(k) ? (b = k[0], Object.assign(g, k[1])) : b = k;
  }
  return We(n, b);
}
function Rb(e) {
  return e.match(Cb)[1].replace(Db, "'");
}
function mu(e, t) {
  const n = lr(e), r = lr(t);
  return +n == +r;
}
function Nb(e, t) {
  return qt(e, -t);
}
function Id(e, t) {
  const n = Me(e), r = n.getFullYear(), a = n.getDate(), o = We(e, 0);
  o.setFullYear(r, t, 15), o.setHours(0, 0, 0, 0);
  const s = I0(o);
  return n.setMonth(t, Math.min(a, s)), n;
}
function Ze(e, t) {
  let n = Me(e);
  return isNaN(+n) ? We(e, NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = Id(n, t.month)), t.date != null && n.setDate(t.date), t.hours != null && n.setHours(t.hours), t.minutes != null && n.setMinutes(t.minutes), t.seconds != null && n.setSeconds(t.seconds), t.milliseconds != null && n.setMilliseconds(t.milliseconds), n);
}
function Fd(e, t) {
  const n = Me(e);
  return n.setHours(t), n;
}
function Rl(e, t) {
  const n = Me(e);
  return n.setMilliseconds(t), n;
}
function Bd(e, t) {
  const n = Me(e);
  return n.setMinutes(t), n;
}
function Nl(e, t) {
  const n = Me(e);
  return n.setSeconds(t), n;
}
function un(e, t) {
  const n = Me(e);
  return isNaN(+n) ? We(e, NaN) : (n.setFullYear(t), n);
}
function $r(e, t) {
  return Kt(e, -t);
}
function $b(e, t) {
  const {
    years: n = 0,
    months: r = 0,
    weeks: a = 0,
    days: o = 0,
    hours: s = 0,
    minutes: l = 0,
    seconds: i = 0
  } = t, d = $r(e, r + n * 12), u = Nb(d, o + a * 7), c = l + s * 60, b = (i + c * 60) * 1e3;
  return We(e, u.getTime() - b);
}
function Ld(e, t) {
  return Pl(e, -t);
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
      be("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      be("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      be("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      be("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Yr.compatConfig = {
  MODE: 3
};
function Yd() {
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
      be("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      be("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Yd.compatConfig = {
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
      be("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
$l.compatConfig = {
  MODE: 3
};
function Vl() {
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
      be("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Vl.compatConfig = {
  MODE: 3
};
function Il() {
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
      be("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      be("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
Il.compatConfig = {
  MODE: 3
};
function Fl() {
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
      be("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Fl.compatConfig = {
  MODE: 3
};
function Bl() {
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
      be("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Bl.compatConfig = {
  MODE: 3
};
function hu(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function Vb(e) {
  return (t) => dn(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const Ib = (e, t, n) => {
  const r = [1, 2, 3, 4, 5, 6, 7];
  let a;
  if (e !== null)
    try {
      a = r.map(Vb(e));
    } catch {
      a = r.map(hu(t));
    }
  else
    a = r.map(hu(t));
  const o = a.slice(0, n), s = a.slice(n + 1, a.length);
  return [a[n]].concat(...s).concat(...o);
}, Ll = (e, t) => {
  const n = [];
  for (let r = +e[0]; r <= +e[1]; r++)
    n.push({ value: +r, text: `${r}` });
  return t ? n.reverse() : n;
}, Hd = (e, t, n) => {
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
}, Fb = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], gt = (e) => {
  const t = P(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Bb = (e) => ({ type: "dot", ...e ?? {} }), jd = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Yl = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, bt = (e) => e, vu = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, yu = (e) => e === null, Ud = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, Lb = (e) => {
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
}, Vr = (e, t) => Lb(e).map((n) => n.map((r) => {
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
}, Yb = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function Hb(e, t) {
  let n = [...document.querySelectorAll(Yb())];
  n = n.filter((a) => !e.contains(a) || a.hasAttribute("data-datepicker-instance"));
  const r = n.indexOf(e);
  if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length))
    return n[r + (t ? -1 : 1)];
}
const jb = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), Hl = (e) => dn(e, "dd-MM-yyyy"), is = (e) => Array.isArray(e), uo = (e, t) => t.get(Hl(e)), Ub = (e, t) => e ? t ? t instanceof Map ? !!uo(e, t) : t(ee(e)) : !1 : !0, gu = (e, t, n, r, a) => {
  const o = Ws(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return oa(o) && Sd(o) ? r || a ? o : Ze(o, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, Wb = (e, t, n, r, a) => {
  const o = Array.isArray(n) ? n[0] : n;
  if (typeof t == "string")
    return gu(e, t, o, r, a);
  if (Array.isArray(t)) {
    let s = null;
    for (const l of t)
      if (s = gu(e, l, o, r, a), s)
        break;
    return s;
  }
  return typeof t == "function" ? t(e) : null;
}, ee = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), qb = (e, t, n) => {
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
  let t = ee(JSON.parse(JSON.stringify(e)));
  return t = Fd(t, 0), t = Bd(t, 0), t = Nl(t, 0), t = Rl(t, 0), t;
}, Fn = (e, t, n, r) => {
  let a = e ? ee(e) : ee();
  return (t || t === 0) && (a = Fd(a, +t)), (n || n === 0) && (a = Bd(a, +n)), (r || r === 0) && (a = Nl(a, +r)), Rl(a, 0);
}, ut = (e, t) => !e || !t ? !1 : va(Ft(e), Ft(t)), Be = (e, t) => !e || !t ? !1 : xr(Ft(e), Ft(t)), ft = (e, t) => !e || !t ? !1 : ha(Ft(e), Ft(t)), Vo = (e, t, n) => e != null && e[0] && e != null && e[1] ? ft(n, e[0]) && ut(n, e[1]) : e != null && e[0] && t ? ft(n, e[0]) && ut(n, t) || ut(n, e[0]) && ft(n, t) : !1, zt = (e) => {
  const t = Ze(new Date(e), { date: 1 });
  return Ft(t);
}, us = (e, t, n) => t && (n || n === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((r) => r === t ? [r, n] : [r, isNaN(+e[r]) ? void 0 : +e[r]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, fr = (e) => ({
  hours: Xt(e),
  minutes: fn(e),
  seconds: Nr(e)
}), Wd = (e, t) => {
  if (t) {
    const n = Ne(ee(t));
    if (n > e)
      return 12;
    if (n === e)
      return Fe(ee(t));
  }
}, qd = (e, t) => {
  if (t) {
    const n = Ne(ee(t));
    return n < e ? -1 : n === e ? Fe(ee(t)) : void 0;
  }
}, Ir = (e) => {
  if (e)
    return Ne(ee(e));
}, zd = (e, t) => {
  const n = ft(e, t) ? t : e, r = ft(t, e) ? t : e;
  return Pd({ start: n, end: r });
}, zb = (e) => {
  const t = Kt(e, 1);
  return { month: Fe(t), year: Ne(t) };
}, vn = (e, t) => {
  const n = mn(e, { weekStartsOn: +t }), r = Ug(e, { weekStartsOn: +t });
  return [n, r];
}, Gd = (e, t) => {
  const n = {
    hours: Xt(ee()),
    minutes: fn(ee()),
    seconds: t ? Nr(ee()) : 0
  };
  return Object.assign(n, e);
}, Nn = (e, t, n) => [Ze(ee(e), { date: 1 }), Ze(ee(), { month: t, year: n, date: 1 })], yn = (e, t, n) => {
  let r = e ? ee(e) : ee();
  return (t || t === 0) && (r = Id(r, t)), n && (r = un(r, n)), r;
}, Kd = (e, t, n, r, a) => {
  if (!r || a && !t || !a && !n)
    return !1;
  const o = a ? Kt(e, 1) : $r(e, 1), s = [Fe(o), Ne(o)];
  return a ? !Kb(...s, t) : !Gb(...s, n);
}, Gb = (e, t, n) => ut(...Nn(n, e, t)) || Be(...Nn(n, e, t)), Kb = (e, t, n) => ft(...Nn(n, e, t)) || Be(...Nn(n, e, t)), Xd = (e, t, n, r, a, o, s) => {
  if (typeof t == "function" && !s)
    return t(e);
  const l = n ? { locale: n } : void 0;
  return Array.isArray(e) ? `${dn(e[0], o, l)}${a && !e[1] ? "" : r}${e[1] ? dn(e[1], o, l) : ""}` : dn(e, o, l);
}, wr = (e) => {
  if (e)
    return null;
  throw new Error(Yl.prop("partial-range"));
}, Na = (e, t) => {
  if (t)
    return e();
  throw new Error(Yl.prop("range"));
}, qs = (e) => Array.isArray(e) ? oa(e[0]) && (e[1] ? oa(e[1]) : !0) : e ? oa(e) : !1, Xb = (e, t) => Ze(t ?? ee(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), cs = (e, t, n, r) => {
  if (!e)
    return !0;
  if (r) {
    const a = n === "max" ? va(e, t) : ha(e, t), o = { seconds: 0, milliseconds: 0 };
    return a || xr(Ze(e, o), Ze(t, o));
  }
  return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, ds = (e, t, n) => e ? Xb(e, t) : ee(n ?? t), bu = (e, t, n, r, a) => {
  if (Array.isArray(r)) {
    const s = ds(e, r[0], t), l = ds(e, r[1], t);
    return cs(r[0], s, n, !!t) && cs(r[1], l, n, !!t) && a;
  }
  const o = ds(e, r, t);
  return cs(r, o, n, !!t) && a;
}, fs = (e) => Ze(ee(), fr(e)), Qb = (e, t) => e instanceof Map ? Array.from(e.values()).filter((n) => Ne(ee(n)) === t).map((n) => Fe(n)) : [], Qd = (e, t, n) => typeof e == "function" ? e({ month: t, year: n }) : !!e.months.find((r) => r.month === t && r.year === n), jl = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), Gr = wn({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Jd = () => {
  const e = (n) => {
    Gr.menuFocused = n;
  }, t = (n) => {
    Gr.shiftKeyInMenu !== n && (Gr.shiftKeyInMenu = n);
  };
  return {
    control: Z(() => ({ shiftKeyInMenu: Gr.shiftKeyInMenu, menuFocused: Gr.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, et = wn({
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
}), ps = J(null), $a = J(!1), ms = J(!1), hs = J(!1), vs = J(!1), At = J(0), kt = J(0), zn = () => {
  const e = Z(() => $a.value ? [...et.selectionGrid, et.actionRow].filter((c) => c.length) : ms.value ? [
    ...et.timePicker[0],
    ...et.timePicker[1],
    vs.value ? [] : [ps.value],
    et.actionRow
  ].filter((c) => c.length) : hs.value ? [...et.monthPicker, et.actionRow] : [et.monthYear, ...et.calendar, et.time, et.actionRow].filter((c) => c.length)), t = (c) => {
    At.value = c ? At.value + 1 : At.value - 1;
    let p = null;
    e.value[kt.value] && (p = e.value[kt.value][At.value]), p || (At.value = c ? At.value - 1 : At.value + 1);
  }, n = (c) => {
    kt.value === 0 && !c || kt.value === e.value.length && c || (kt.value = c ? kt.value + 1 : kt.value - 1, e.value[kt.value] ? e.value[kt.value] && !e.value[kt.value][At.value] && At.value !== 0 && (At.value = e.value[kt.value].length - 1) : kt.value = c ? kt.value - 1 : kt.value + 1);
  }, r = (c) => {
    let p = null;
    e.value[kt.value] && (p = e.value[kt.value][At.value]), p ? p.focus({ preventScroll: !$a.value }) : At.value = c ? At.value - 1 : At.value + 1;
  }, a = () => {
    t(!0), r(!0);
  }, o = () => {
    t(!1), r(!1);
  }, s = () => {
    n(!1), r(!0);
  }, l = () => {
    n(!0), r(!0);
  }, i = (c, p) => {
    et[p] = c;
  }, d = (c, p) => {
    et[p] = c;
  }, u = () => {
    At.value = 0, kt.value = 0;
  };
  return {
    buildMatrix: i,
    buildMultiLevelMatrix: d,
    setTimePickerBackRef: (c) => {
      ps.value = c;
    },
    setSelectionGrid: (c) => {
      $a.value = c, u(), c || (et.selectionGrid = []);
    },
    setTimePicker: (c, p = !1) => {
      ms.value = c, vs.value = p, u(), c || (et.timePicker[0] = [], et.timePicker[1] = []);
    },
    setTimePickerElements: (c, p = 0) => {
      et.timePicker[p] = c;
    },
    arrowRight: a,
    arrowLeft: o,
    arrowUp: s,
    arrowDown: l,
    clearArrowNav: () => {
      et.monthYear = [], et.calendar = [], et.time = [], et.actionRow = [], et.selectionGrid = [], et.timePicker[0] = [], et.timePicker[1] = [], $a.value = !1, ms.value = !1, vs.value = !1, hs.value = !1, u(), ps.value = null;
    },
    setMonthPicker: (c) => {
      hs.value = c, u();
    },
    refSets: et
    // exposed for testing
  };
}, jn = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), Zd = (e, t) => zs(e, t) || ee(), Jb = (e, t) => t.dateInTz ? jn(new Date(e), t.dateInTz) : ee(e), zs = (e, t) => {
  if (!e)
    return null;
  if (!t)
    return ee(e);
  const n = ee(e);
  return t.exactMatch ? Jb(e, t) : jn(n, t.timezone);
}, wu = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), Zb = (e) => ({
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
}), _u = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, ew = (e) => {
  const t = typeof e == "object" && e, n = {
    static: !0,
    solo: !1
  };
  if (!e)
    return { ...n, count: _u(!1) };
  const r = t ? e : {}, a = t ? r.count ?? !0 : e, o = _u(a);
  return Object.assign(n, r, { count: o });
}, tw = (e, t, n) => e || (typeof n == "string" ? n : t), nw = (e) => typeof e == "boolean" ? e ? wu({}) : !1 : wu(e), rw = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, aw = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), ow = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), sw = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, lw = (e) => ({ allowStopPropagation: !0, closeOnScroll: !1, modeHeight: 255, allowPreventDefault: !1, closeOnClearValue: !0, closeOnAutoApply: !0, noSwipe: !1, keepActionRow: !1, onClickOutside: void 0, tabOutClosesMenu: !0, ...e ?? {} }), iw = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((n) => ee(n)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, uw = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, cw = (e, t) => typeof e == "object" ? { enabled: !0, ...{
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
}, dw = (e, t) => e ? typeof e == "string" ? { timezone: e, exactMatch: !1, dateInTz: void 0, emitTimezone: t } : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: t ?? e.emitTimezone
} : { timezone: void 0, exactMatch: !1, emitTimezone: t }, ys = (e, t) => new Map(
  e.map((n) => {
    const r = Zd(n, t);
    return [Hl(r), r];
  })
), fw = (e, t) => e.length ? new Map(
  e.map((n) => {
    const r = Zd(n.date, t);
    return [Hl(r), n];
  })
) : null, pw = (e, t, n, r, a, o, s) => ({
  minDate: zs(e, s),
  maxDate: zs(t, s),
  disabledDates: is(n) ? ys(n, s) : n,
  allowedDates: is(r) ? ys(r, s) : null,
  highlight: typeof a == "object" && is(a == null ? void 0 : a.dates) ? ys(a.dates, s) : a,
  markers: fw(o, s)
}), lt = (e) => {
  const t = () => {
    const k = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${k}` : `hh:mm${k} aa`;
  }, n = () => {
    var k;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((k = M.value) == null ? void 0 : k.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, r = (k) => Gd(k, e.enableSeconds), a = () => h.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [r(e.startTime[0]), r(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? r(e.startTime) : null, o = Z(() => ew(e.multiCalendars)), s = Z(() => a()), l = Z(() => Zb(e.ariaLabels)), i = Z(() => aw(e.filters)), d = Z(() => nw(e.transitions)), u = Z(() => ow(e.actionRow)), c = Z(
    () => tw(e.previewFormat, e.format, n())
  ), p = Z(() => rw(e.textInput)), b = Z(() => sw(e.inline)), g = Z(() => lw(e.config)), y = Z(() => iw(e.highlight)), M = Z(() => uw(e.weekNumbers)), E = Z(() => dw(e.timezone, e.emitTimezone)), V = Z(
    () => pw(
      e.minDate,
      e.maxDate,
      e.disabledDates,
      e.allowedDates,
      y.value,
      e.markers,
      E.value
    )
  ), h = Z(
    () => cw(e.range, {
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
    defaultedTransitions: d,
    defaultedMultiCalendars: o,
    defaultedStartTime: s,
    defaultedAriaLabels: l,
    defaultedFilters: i,
    defaultedActionRow: u,
    defaultedPreviewFormat: c,
    defaultedTextInput: p,
    defaultedInline: b,
    defaultedConfig: g,
    defaultedHighlight: y,
    defaultedWeekNumbers: M,
    defaultedRange: h,
    propDates: V,
    defaultedTz: E,
    getDefaultPattern: n,
    getDefaultStartTime: a
  };
}, mw = (e, t, n) => {
  const r = J(), { defaultedTextInput: a, defaultedRange: o, defaultedTz: s, getDefaultPattern: l } = lt(t), i = J(""), d = Wa(t, "format");
  rt(
    r,
    () => {
      e("internal-model-change", r.value);
    },
    { deep: !0 }
  ), rt(d, () => {
    $();
  });
  const u = (m, f, N = !1) => Xd(
    m,
    t.format,
    t.formatLocale,
    a.value.rangeSeparator,
    t.modelAuto,
    f ?? l(),
    N
  ), c = (m) => m ? t.modelType ? T(m) : {
    hours: Xt(m),
    minutes: fn(m),
    seconds: t.enableSeconds ? Nr(m) : 0
  } : null, p = (m) => t.modelType ? T(m) : { month: Fe(m), year: Ne(m) }, b = (m) => Array.isArray(m) ? t.multiDates ? m.map((f) => g(f, un(ee(), f))) : Na(
    () => [
      un(ee(), m[0]),
      m[1] ? un(ee(), m[1]) : wr(o.value.partialRange)
    ],
    o.value.enabled
  ) : un(ee(), +m), g = (m, f) => (typeof m == "string" || typeof m == "number") && t.modelType ? w(m) : f, y = (m) => Array.isArray(m) ? [
    g(
      m[0],
      Fn(null, +m[0].hours, +m[0].minutes, m[0].seconds)
    ),
    g(
      m[1],
      Fn(null, +m[1].hours, +m[1].minutes, m[1].seconds)
    )
  ] : g(m, Fn(null, m.hours, m.minutes, m.seconds)), M = (m) => {
    const f = Ze(ee(), { date: 1 });
    return Array.isArray(m) ? t.multiDates ? m.map((N) => g(N, yn(f, +N.month, +N.year))) : Na(
      () => [
        g(m[0], yn(f, +m[0].month, +m[0].year)),
        g(
          m[1],
          m[1] ? yn(f, +m[1].month, +m[1].year) : wr(o.value.partialRange)
        )
      ],
      o.value.enabled
    ) : g(m, yn(f, +m.month, +m.year));
  }, E = (m) => {
    if (Array.isArray(m))
      return m.map((f) => w(f));
    throw new Error(Yl.dateArr("multi-dates"));
  }, V = (m) => {
    if (Array.isArray(m) && o.value.enabled) {
      const f = m[0], N = m[1];
      return [
        ee(Array.isArray(f) ? f[0] : null),
        ee(Array.isArray(N) ? N[0] : null)
      ];
    }
    return ee(m[0]);
  }, h = (m) => t.modelAuto ? Array.isArray(m) ? [w(m[0]), w(m[1])] : t.autoApply ? [w(m)] : [w(m), null] : Array.isArray(m) ? Na(
    () => m[1] ? [
      w(m[0]),
      m[1] ? w(m[1]) : wr(o.value.partialRange)
    ] : [w(m[0])],
    o.value.enabled
  ) : w(m), k = () => {
    Array.isArray(r.value) && o.value.enabled && r.value.length === 1 && r.value.push(wr(o.value.partialRange));
  }, A = () => {
    const m = r.value;
    return [
      T(m[0]),
      m[1] ? T(m[1]) : wr(o.value.partialRange)
    ];
  }, F = () => r.value[1] ? A() : T(bt(r.value[0])), j = () => (r.value || []).map((m) => T(m)), _ = () => (k(), t.modelAuto ? F() : t.multiDates ? j() : Array.isArray(r.value) ? Na(() => A(), o.value.enabled) : T(bt(r.value))), O = (m) => !m || Array.isArray(m) && !m.length ? null : t.timePicker ? y(bt(m)) : t.monthPicker ? M(bt(m)) : t.yearPicker ? b(bt(m)) : t.multiDates ? E(bt(m)) : t.weekPicker ? V(bt(m)) : h(bt(m)), W = (m) => {
    const f = O(m);
    qs(bt(f)) ? (r.value = bt(f), $()) : (r.value = null, i.value = "");
  }, C = () => {
    const m = (f) => dn(f, a.value.format);
    return `${m(r.value[0])} ${a.value.rangeSeparator} ${r.value[1] ? m(r.value[1]) : ""}`;
  }, S = () => n.value && r.value ? Array.isArray(r.value) ? C() : dn(r.value, a.value.format) : u(r.value), B = () => r.value ? t.multiDates ? r.value.map((m) => u(m)).join("; ") : a.value.enabled && typeof a.value.format == "string" ? S() : u(r.value) : "", $ = () => {
    !t.format || typeof t.format == "string" || a.value.enabled && typeof a.value.format == "string" ? i.value = B() : i.value = t.format(r.value);
  }, w = (m) => {
    if (t.utc) {
      const f = new Date(m);
      return t.utc === "preserve" ? new Date(f.getTime() + f.getTimezoneOffset() * 6e4) : f;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? new Date(m) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Ws(m, l(), /* @__PURE__ */ new Date()) : Ws(m, t.modelType, /* @__PURE__ */ new Date()) : new Date(m);
  }, T = (m) => m ? t.utc ? qb(m, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +m : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? u(m) : u(m, t.modelType, !0) : m : "", q = (m, f = !1) => {
    if (e("update:model-value", m), s.value.emitTimezone && f) {
      const N = Array.isArray(m) ? m.map((X) => jn(bt(X), s.value.emitTimezone)) : jn(bt(m), s.value.emitTimezone);
      e("update:model-timezone-value", N);
    }
  }, re = (m) => Array.isArray(r.value) ? t.multiDates ? r.value.map((f) => m(f)) : [
    m(r.value[0]),
    r.value[1] ? m(r.value[1]) : wr(o.value.partialRange)
  ] : m(bt(r.value)), fe = () => {
    if (Array.isArray(r.value)) {
      const m = vn(r.value[0], t.weekStart), f = r.value[1] ? vn(r.value[1], t.weekStart) : [];
      return [m.map((N) => ee(N)), f.map((N) => ee(N))];
    }
    return vn(r.value, t.weekStart).map((m) => ee(m));
  }, te = (m) => q(bt(re(m)));
  return {
    inputValue: i,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? o.value.enabled ? o.value.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: W,
    formatInputValue: $,
    emitModelValue: () => ($(), t.monthPicker ? te(p) : t.timePicker ? te(c) : t.yearPicker ? te(Ne) : t.weekPicker ? e("update:model-value", fe()) : q(_(), !0))
  };
}, hw = (e, t) => {
  const { defaultedFilters: n, propDates: r } = lt(e), { validateMonthYearInRange: a } = Gn(e), o = (u, c) => {
    let p = u;
    return n.value.months.includes(Fe(p)) ? (p = c ? Kt(u, 1) : $r(u, 1), o(p, c)) : p;
  }, s = (u, c) => {
    let p = u;
    return n.value.years.includes(Ne(p)) ? (p = c ? Pl(u, 1) : Ld(u, 1), s(p, c)) : p;
  }, l = (u, c = !1) => {
    const p = Ze(ee(), { month: e.month, year: e.year });
    let b = u ? Kt(p, 1) : $r(p, 1);
    e.disableYearSelect && (b = un(b, e.year));
    let g = Fe(b), y = Ne(b);
    n.value.months.includes(g) && (b = o(b, u), g = Fe(b), y = Ne(b)), n.value.years.includes(y) && (b = s(b, u), y = Ne(b)), a(g, y, u, e.preventMinMaxNavigation) && i(g, y, c);
  }, i = (u, c, p) => {
    t("update-month-year", { month: u, year: c, fromNav: p });
  }, d = Z(() => (u) => Kd(
    Ze(ee(), { month: e.month, year: e.year }),
    r.value.maxDate,
    r.value.minDate,
    e.preventMinMaxNavigation,
    u
  ));
  return { handleMonthYearChange: l, isDisabled: d, updateMonthYear: i };
};
var _r = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(_r || {}), Wt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Wt || {}), tr = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(tr || {}), pr = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(pr || {}), rn = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(rn || {});
const vw = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: n,
  pickerWrapperRef: r,
  inline: a,
  emit: o,
  props: s,
  slots: l
}) => {
  const i = J({}), d = J(!1), u = J({
    top: "0",
    left: "0"
  }), c = J(!1), p = Wa(s, "teleportCenter");
  rt(p, () => {
    u.value = JSON.parse(JSON.stringify({})), k();
  });
  const b = (w) => {
    if (s.teleport) {
      const T = w.getBoundingClientRect();
      return {
        left: T.left + window.scrollX,
        top: T.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, g = (w, T) => {
    u.value.left = `${w + T - i.value.width}px`;
  }, y = (w) => {
    u.value.left = `${w}px`;
  }, M = (w, T) => {
    s.position === _r.left && y(w), s.position === _r.right && g(w, T), s.position === _r.center && (u.value.left = `${w + T / 2 - i.value.width / 2}px`);
  }, E = (w) => {
    const { width: T, height: q } = w.getBoundingClientRect(), { top: re, left: fe } = s.altPosition ? s.altPosition(w) : b(w);
    return { top: +re, left: +fe, width: T, height: q };
  }, V = () => {
    u.value.left = "50%", u.value.top = "50%", u.value.transform = "translate(-50%, -50%)", u.value.position = "fixed", delete u.value.opacity;
  }, h = () => {
    const w = gt(n), { top: T, left: q, transform: re } = s.altPosition(w);
    u.value = { top: `${T}px`, left: `${q}px`, transform: re ?? "" };
  }, k = (w = !0) => {
    var T;
    if (!a.value.enabled) {
      if (p.value)
        return V();
      if (s.altPosition !== null)
        return h();
      if (w) {
        const q = s.teleport ? (T = t.value) == null ? void 0 : T.$el : e.value;
        q && (i.value = q.getBoundingClientRect()), o("recalculate-position");
      }
      return C();
    }
  }, A = ({ inputEl: w, left: T, width: q }) => {
    window.screen.width > 768 && !d.value && M(T, q), _(w);
  }, F = (w) => {
    const { top: T, left: q, height: re, width: fe } = E(w);
    u.value.top = `${re + T + +s.offset}px`, c.value = !1, d.value || (u.value.left = `${q + fe / 2 - i.value.width / 2}px`), A({ inputEl: w, left: q, width: fe });
  }, j = (w) => {
    const { top: T, left: q, width: re } = E(w);
    u.value.top = `${T - +s.offset - i.value.height}px`, c.value = !0, A({ inputEl: w, left: q, width: re });
  }, _ = (w) => {
    if (s.autoPosition) {
      const { left: T, width: q } = E(w), { left: re, right: fe } = i.value;
      if (!d.value) {
        if (Math.abs(re) !== Math.abs(fe)) {
          if (re <= 0)
            return d.value = !0, y(T);
          if (fe >= document.documentElement.clientWidth)
            return d.value = !0, g(T, q);
        }
        return M(T, q);
      }
    }
  }, O = () => {
    const w = gt(n);
    if (w) {
      const { height: T } = i.value, { top: q, height: re } = w.getBoundingClientRect(), fe = window.innerHeight - q - re, te = q;
      return T <= fe ? tr.bottom : T > fe && T <= te ? tr.top : fe >= te ? tr.bottom : tr.top;
    }
    return tr.bottom;
  }, W = (w) => O() === tr.bottom ? F(w) : j(w), C = () => {
    const w = gt(n);
    if (w)
      return s.autoPosition ? W(w) : F(w);
  }, S = function(w) {
    if (w) {
      const T = w.scrollHeight > w.clientHeight, q = window.getComputedStyle(w).overflowY.indexOf("hidden") !== -1;
      return T && !q;
    }
    return !0;
  }, B = function(w) {
    return !w || w === document.body || w.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : S(w) ? w : B(w.parentNode);
  }, $ = (w) => {
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
    openOnTop: c,
    menuStyle: u,
    xCorrect: d,
    setMenuPosition: k,
    getScrollableParent: B,
    shadowRender: (w, T) => {
      var q, re, fe;
      const te = document.createElement("div"), m = (q = gt(n)) == null ? void 0 : q.getBoundingClientRect();
      te.setAttribute("id", "dp--temp-container");
      const f = (re = r.value) != null && re.clientWidth ? r.value : document.body;
      f.append(te);
      const N = $(m), X = Sc(
        w,
        {
          ...T,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...N }
        },
        Object.fromEntries(
          Object.keys(l).filter((ce) => ["right-sidebar", "left-sidebar"].includes(ce)).map((ce) => [ce, l[ce]])
        )
      );
      $i(X, te), i.value = (fe = X.el) == null ? void 0 : fe.getBoundingClientRect(), $i(null, te), f.removeChild(te);
    }
  };
}, An = [
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
], yw = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], gw = {
  all: () => An,
  monthYear: () => An.filter((e) => e.use.includes("month-year")),
  input: () => yw,
  timePicker: () => An.filter((e) => e.use.includes("time")),
  action: () => An.filter((e) => e.use.includes("action")),
  calendar: () => An.filter((e) => e.use.includes("calendar")),
  menu: () => An.filter((e) => e.use.includes("menu")),
  shared: () => An.filter((e) => e.use.includes("shared")),
  yearMode: () => An.filter((e) => e.use.includes("year-mode"))
}, Vt = (e, t, n) => {
  const r = [];
  return gw[t]().forEach((a) => {
    e[a.name] && r.push(a.name);
  }), n != null && n.length && n.forEach((a) => {
    a.slot && r.push(a.slot);
  }), r;
}, xa = (e) => {
  const t = Z(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), n = Z(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: n };
}, ka = (e, t) => {
  const { defaultedRange: n, defaultedTz: r } = lt(e), a = ee(jn(ee(), r.value.timezone)), o = J([{ month: Fe(a), year: Ne(a) }]), s = wn({
    hours: n.value.enabled ? [Xt(a), Xt(a)] : Xt(a),
    minutes: n.value.enabled ? [fn(a), fn(a)] : fn(a),
    seconds: n.value.enabled ? [0, 0] : 0
  }), l = Z({
    get: () => e.internalModelValue,
    set: (u) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", u);
    }
  }), i = Z(
    () => (u) => o.value[u] ? o.value[u].month : 0
  ), d = Z(
    () => (u) => o.value[u] ? o.value[u].year : 0
  );
  return {
    calendars: o,
    time: s,
    modelValue: l,
    month: i,
    year: d
  };
}, bw = (e, t) => {
  const { defaultedMultiCalendars: n, defaultedHighlight: r, defaultedTz: a, propDates: o, defaultedRange: s } = lt(t), { isDisabled: l } = Gn(t), i = J(null), d = J(jn(/* @__PURE__ */ new Date(), a.value.timezone)), u = (f) => {
    !f.current && t.hideOffsetDates || (i.value = f.value);
  }, c = () => {
    i.value = null;
  }, p = (f) => Array.isArray(e.value) && s.value.enabled && e.value[0] && i.value ? f ? ft(i.value, e.value[0]) : ut(i.value, e.value[0]) : !0, b = (f, N) => {
    const X = () => e.value ? N ? e.value[0] || null : e.value[1] : null, ce = e.value && Array.isArray(e.value) ? X() : null;
    return Be(ee(f.value), ce);
  }, g = (f) => {
    const N = Array.isArray(e.value) ? e.value[0] : null;
    return f ? !ut(i.value ?? null, N) : !0;
  }, y = (f, N = !0) => (s.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !f.current ? !1 : Be(ee(f.value), e.value[N ? 0 : 1]) : s.value.enabled ? b(f, N) && g(N) || Be(f.value, Array.isArray(e.value) ? e.value[0] : null) && p(N) : !1, M = (f, N, X) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? f ? !1 : X ? ft(e.value[0], N.value) : ut(e.value[0], N.value) : !1, E = (f) => !e.value || t.hideOffsetDates && !f.current ? !1 : s.value.enabled ? t.modelAuto && Array.isArray(e.value) ? Be(f.value, e.value[0] ? e.value[0] : d.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((N) => Be(N, f.value)) : Be(f.value, e.value ? e.value : d.value), V = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const N = qt(i.value, +s.value.autoRange), X = vn(ee(i.value), t.weekStart);
        return t.weekPicker ? Be(X[1], ee(f.value)) : Be(N, ee(f.value));
      }
      return !1;
    }
    return !1;
  }, h = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (i.value) {
        const N = qt(i.value, +s.value.autoRange);
        if (t.hideOffsetDates && !f.current)
          return !1;
        const X = vn(ee(i.value), t.weekStart);
        return t.weekPicker ? ft(f.value, X[0]) && ut(f.value, X[1]) : ft(f.value, i.value) && ut(f.value, N);
      }
      return !1;
    }
    return !1;
  }, k = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const N = vn(ee(i.value), t.weekStart);
        return t.weekPicker ? Be(N[0], f.value) : Be(i.value, f.value);
      }
      return !1;
    }
    return !1;
  }, A = (f) => Vo(e.value, i.value, f.value), F = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, j = () => t.modelAuto ? jd(t.internalModelValue) : !0, _ = (f) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const N = s.value.enabled ? !y(f) && !y(f, !1) : !0;
    return !l(f.value) && !E(f) && !(!f.current && t.hideOffsetDates) && N;
  }, O = (f) => s.value.enabled ? t.modelAuto ? F() && E(f) : !1 : E(f), W = (f) => r.value ? Ub(f.value, o.value.highlight) : !1, C = (f) => {
    const N = l(f.value);
    return N && (typeof r.value == "function" ? !r.value(f.value, N) : !r.value.options.highlightDisabled);
  }, S = (f) => {
    var N;
    return typeof r.value == "function" ? r.value(f.value) : (N = r.value.weekdays) == null ? void 0 : N.includes(f.value.getDay());
  }, B = (f) => (s.value.enabled || t.weekPicker) && (!(n.value.count > 0) || f.current) && j() && !(!f.current && t.hideOffsetDates) && !E(f) ? A(f) : !1, $ = (f) => {
    const { isRangeStart: N, isRangeEnd: X } = re(f), ce = s.value.enabled ? N || X : !1;
    return {
      dp__cell_offset: !f.current,
      dp__pointer: !t.disabled && !(!f.current && t.hideOffsetDates) && !l(f.value),
      dp__cell_disabled: l(f.value),
      dp__cell_highlight: !C(f) && (W(f) || S(f)) && !O(f) && !ce && !k(f) && !(B(f) && t.weekPicker) && !X,
      dp__cell_highlight_active: !C(f) && (W(f) || S(f)) && O(f),
      dp__today: !t.noToday && Be(f.value, d.value) && f.current,
      "dp--past": ut(f.value, d.value),
      "dp--future": ft(f.value, d.value)
    };
  }, w = (f) => ({
    dp__active_date: O(f),
    dp__date_hover: _(f)
  }), T = (f) => {
    if (e.value && !Array.isArray(e.value)) {
      const N = vn(e.value, t.weekStart);
      return {
        ...te(f),
        dp__range_start: Be(N[0], f.value),
        dp__range_end: Be(N[1], f.value),
        dp__range_between_week: ft(f.value, N[0]) && ut(f.value, N[1])
      };
    }
    return {
      ...te(f)
    };
  }, q = (f) => {
    if (e.value && Array.isArray(e.value)) {
      const N = vn(e.value[0], t.weekStart), X = e.value[1] ? vn(e.value[1], t.weekStart) : [];
      return {
        ...te(f),
        dp__range_start: Be(N[0], f.value) || Be(X[0], f.value),
        dp__range_end: Be(N[1], f.value) || Be(X[1], f.value),
        dp__range_between_week: ft(f.value, N[0]) && ut(f.value, N[1]) || ft(f.value, X[0]) && ut(f.value, X[1]),
        dp__range_between: ft(f.value, N[1]) && ut(f.value, X[0])
      };
    }
    return {
      ...te(f)
    };
  }, re = (f) => {
    const N = n.value.count > 0 ? f.current && y(f) && j() : y(f) && j(), X = n.value.count > 0 ? f.current && y(f, !1) && j() : y(f, !1) && j();
    return { isRangeStart: N, isRangeEnd: X };
  }, fe = (f) => {
    const { isRangeStart: N, isRangeEnd: X } = re(f);
    return {
      dp__range_start: N,
      dp__range_end: X,
      dp__range_between: B(f),
      dp__date_hover_start: M(_(f), f, !0),
      dp__date_hover_end: M(_(f), f, !1)
    };
  }, te = (f) => ({
    ...fe(f),
    dp__cell_auto_range: h(f),
    dp__cell_auto_range_start: k(f),
    dp__cell_auto_range_end: V(f)
  }), m = (f) => s.value.enabled ? s.value.autoRange ? te(f) : t.modelAuto ? { ...w(f), ...fe(f) } : t.weekPicker ? q(f) : fe(f) : t.weekPicker ? T(f) : w(f);
  return {
    setHoverDate: u,
    clearHoverDate: c,
    getDayClassData: (f) => t.hideOffsetDates && !f.current ? {} : {
      ...$(f),
      ...m(f),
      [t.dayClass ? t.dayClass(f.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    }
  };
}, Gn = (e) => {
  const { defaultedFilters: t, defaultedRange: n, propDates: r } = lt(e), a = (C) => r.value.disabledDates ? typeof r.value.disabledDates == "function" ? r.value.disabledDates(ee(C)) : !!uo(C, r.value.disabledDates) : !1, o = (C) => {
    const S = r.value.maxDate ? ft(C, r.value.maxDate) : !1, B = r.value.minDate ? ut(C, r.value.minDate) : !1, $ = a(C), w = t.value.months.map((te) => +te).includes(Fe(C)), T = e.disabledWeekDays.length ? e.disabledWeekDays.some((te) => +te === V0(C)) : !1, q = u(C), re = Ne(C), fe = re < +e.yearRange[0] || re > +e.yearRange[1];
    return !(S || B || $ || w || fe || T || q);
  }, s = (C, S) => ut(...Nn(r.value.minDate, C, S)) || Be(...Nn(r.value.minDate, C, S)), l = (C, S) => ft(...Nn(r.value.maxDate, C, S)) || Be(...Nn(r.value.maxDate, C, S)), i = (C, S, B) => {
    let $ = !1;
    return r.value.maxDate && B && l(C, S) && ($ = !0), r.value.minDate && !B && s(C, S) && ($ = !0), $;
  }, d = (C, S, B, $) => {
    let w = !1;
    return $ ? r.value.minDate && r.value.maxDate ? w = i(C, S, B) : (r.value.minDate && s(C, S) || r.value.maxDate && l(C, S)) && (w = !0) : w = !0, w;
  }, u = (C) => Array.isArray(r.value.allowedDates) && !r.value.allowedDates.length ? !0 : r.value.allowedDates ? !uo(C, r.value.allowedDates) : !1, c = (C) => !o(C), p = (C) => n.value.noDisabledRange ? !Pd({ start: C[0], end: C[1] }).some((S) => c(S)) : !0, b = (C) => {
    if (C) {
      const S = Ne(C);
      return S >= +e.yearRange[0] && S <= e.yearRange[1];
    }
    return !0;
  }, g = (C, S) => !!(Array.isArray(C) && C[S] && (n.value.maxRange || n.value.minRange) && b(C[S])), y = (C, S, B = 0) => {
    if (g(S, B) && b(C)) {
      const $ = Td(C, S[B]), w = zd(S[B], C), T = w.length === 1 ? 0 : w.filter((re) => c(re)).length, q = Math.abs($) - (n.value.minMaxRawRange ? 0 : T);
      if (n.value.minRange && n.value.maxRange)
        return q >= +n.value.minRange && q <= +n.value.maxRange;
      if (n.value.minRange)
        return q >= +n.value.minRange;
      if (n.value.maxRange)
        return q <= +n.value.maxRange;
    }
    return !0;
  }, M = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, E = (C) => Array.isArray(C) ? [C[0] ? fs(C[0]) : null, C[1] ? fs(C[1]) : null] : fs(C), V = (C, S, B) => C.find(
    ($) => +$.hours === Xt(S) && $.minutes === "*" ? !0 : +$.minutes === fn(S) && +$.hours === Xt(S)
  ) && B, h = (C, S, B) => {
    const [$, w] = C, [T, q] = S;
    return !V($, T, B) && !V(w, q, B) && B;
  }, k = (C, S) => {
    const B = Array.isArray(S) ? S : [S];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? h(e.disabledTimes, B, C) : !B.some(($) => V(e.disabledTimes, $, C)) : C;
  }, A = (C, S) => {
    const B = Array.isArray(S) ? [fr(S[0]), S[1] ? fr(S[1]) : void 0] : fr(S), $ = !e.disabledTimes(B);
    return C && $;
  }, F = (C, S) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? k(S, C) : A(S, C) : S, j = (C) => {
    let S = !0;
    if (!C || M())
      return !0;
    const B = !r.value.minDate && !r.value.maxDate ? E(C) : C;
    return (e.maxTime || r.value.maxDate) && (S = bu(
      e.maxTime,
      r.value.maxDate,
      "max",
      bt(B),
      S
    )), (e.minTime || r.value.minDate) && (S = bu(
      e.minTime,
      r.value.minDate,
      "min",
      bt(B),
      S
    )), F(C, S);
  }, _ = (C) => {
    if (!e.monthPicker)
      return !0;
    let S = !0;
    const B = ee(zt(C));
    if (r.value.minDate && r.value.maxDate) {
      const $ = ee(zt(r.value.minDate)), w = ee(zt(r.value.maxDate));
      return ft(B, $) && ut(B, w) || Be(B, $) || Be(B, w);
    }
    if (r.value.minDate) {
      const $ = ee(zt(r.value.minDate));
      S = ft(B, $) || Be(B, $);
    }
    if (r.value.maxDate) {
      const $ = ee(zt(r.value.maxDate));
      S = ut(B, $) || Be(B, $);
    }
    return S;
  }, O = Z(() => (C) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : j(C)), W = Z(() => (C) => e.monthPicker ? Array.isArray(C) && (n.value.enabled || e.multiDates) ? !C.filter((S) => !_(S)).length : _(C) : !0);
  return {
    isDisabled: c,
    validateDate: o,
    validateMonthYearInRange: d,
    isDateRangeAllowed: p,
    checkMinMaxRange: y,
    isValidTime: j,
    isTimeValid: O,
    isMonthValid: W
  };
}, Io = () => {
  const e = Z(() => (r, a) => r == null ? void 0 : r.includes(a)), t = Z(() => (r, a) => r.count ? r.solo ? !0 : a === 0 : !0), n = Z(() => (r, a) => r.count ? r.solo ? !0 : a === r.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: n };
}, ww = (e, t, n) => {
  const r = J(0), a = wn({
    [pr.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [pr.calendar]: !1,
    [pr.header]: !1
  }), o = Z(() => e.monthPicker), s = (c) => {
    var p;
    if ((p = e.flow) != null && p.length) {
      if (!c && o.value)
        return u();
      a[c] = !0, Object.keys(a).filter((b) => !a[b]).length || u();
    }
  }, l = () => {
    var c;
    (c = e.flow) != null && c.length && r.value !== -1 && (r.value += 1, t("flow-step", r.value), u());
  }, i = () => {
    r.value = -1;
  }, d = (c, p, ...b) => {
    var g, y;
    e.flow[r.value] === c && n.value && ((y = (g = n.value)[p]) == null || y.call(g, ...b));
  }, u = () => {
    d(rn.month, "toggleMonthPicker", !0), d(rn.year, "toggleYearPicker", !0), d(rn.calendar, "toggleTimePicker", !1, !0), d(rn.time, "toggleTimePicker", !0, !0);
    const c = e.flow[r.value];
    (c === rn.hours || c === rn.minutes || c === rn.seconds) && d(c, "toggleTimePicker", !0, !0, c);
  };
  return { childMount: s, updateFlowStep: l, resetFlow: i, flowStep: r };
}, Fo = {
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
  ...Fo,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null }
}, _w = {
  key: 1,
  class: "dp__input_wrap"
}, xw = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], kw = {
  key: 2,
  class: "dp__clear_icon"
}, Mw = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Fo
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
      defaultedRange: d,
      getDefaultPattern: u,
      getDefaultStartTime: c
    } = lt(a), { checkMinMaxRange: p } = Gn(a), b = J(), g = J(null), y = J(!1), M = J(!1), E = Z(
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
    ), V = () => {
      r("set-input-date", null), a.autoApply && (r("set-empty-date"), b.value = null);
    }, h = (w) => {
      const T = c();
      return Wb(
        w,
        o.value.format ?? u(),
        T ?? Gd({}, a.enableSeconds),
        a.inputValue,
        M.value
      );
    }, k = (w) => {
      const { rangeSeparator: T } = o.value, [q, re] = w.split(`${T}`);
      if (q) {
        const fe = h(q.trim()), te = re ? h(re.trim()) : null, m = fe && te ? [fe, te] : [fe];
        p(te, m, 0) && (b.value = fe ? m : null);
      }
    }, A = () => {
      M.value = !0;
    }, F = (w) => {
      if (d.value.enabled)
        k(w);
      else if (a.multiDates) {
        const T = w.split(";");
        b.value = T.map((q) => h(q.trim())).filter((q) => q);
      } else
        b.value = h(w);
    }, j = (w) => {
      var T;
      const q = typeof w == "string" ? w : (T = w.target) == null ? void 0 : T.value;
      q !== "" ? (o.value.openMenu && !a.isMenuOpen && r("open"), F(q), r("set-input-date", b.value)) : V(), M.value = !1, r("update:input-value", q);
    }, _ = (w) => {
      o.value.enabled ? (F(w.target.value), o.value.enterSubmit && qs(b.value) && a.inputValue !== "" ? (r("set-input-date", b.value, !0), b.value = null) : o.value.enterSubmit && a.inputValue === "" && (b.value = null, r("clear"))) : C(w);
    }, O = (w) => {
      o.value.enabled && o.value.tabSubmit && F(w.target.value), o.value.tabSubmit && qs(b.value) && a.inputValue !== "" ? (r("set-input-date", b.value, !0, !0), b.value = null) : o.value.tabSubmit && a.inputValue === "" && (b.value = null, r("clear", !0));
    }, W = () => {
      var w;
      y.value = !0, r("focus"), o.value.enabled && o.value.selectOnFocus && ((w = g.value) == null || w.select());
    }, C = (w) => {
      w.preventDefault(), In(w, i.value, !0), o.value.enabled && o.value.openMenu && !l.value.input && !a.isMenuOpen ? r("open") : o.value.enabled || r("toggle");
    }, S = () => {
      r("real-blur"), y.value = !1, (!a.isMenuOpen || l.value.enabled && l.value.input) && r("blur"), a.autoApply && o.value.enabled && b.value && !a.isMenuOpen && (r("set-input-date", b.value), r("select-date"), b.value = null);
    }, B = (w) => {
      In(w, i.value, !0), r("clear");
    }, $ = (w) => {
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
    }), (w, T) => {
      var q;
      return I(), G("div", { onClick: C }, [
        w.$slots.trigger && !w.$slots["dp-input"] && !P(l).enabled ? ge(w.$slots, "trigger", { key: 0 }) : Q("", !0),
        !w.$slots.trigger && (!P(l).enabled || P(l).input) ? (I(), G("div", _w, [
          w.$slots["dp-input"] && !w.$slots.trigger && (!P(l).enabled || P(l).enabled && P(l).input) ? ge(w.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: j,
            onEnter: _,
            onTab: O,
            onClear: B,
            onBlur: S,
            onKeypress: $,
            onPaste: A,
            openMenu: () => w.$emit("open"),
            closeMenu: () => w.$emit("close"),
            toggleMenu: () => w.$emit("toggle")
          }) : Q("", !0),
          w.$slots["dp-input"] ? Q("", !0) : (I(), G("input", {
            key: 1,
            id: w.uid ? `dp-input-${w.uid}` : void 0,
            ref_key: "inputRef",
            ref: g,
            name: w.name,
            class: $e(E.value),
            inputmode: P(o).enabled ? "text" : "none",
            placeholder: w.placeholder,
            disabled: w.disabled,
            readonly: w.readonly,
            required: w.required,
            value: e.inputValue,
            autocomplete: w.autocomplete,
            "aria-label": (q = P(s)) == null ? void 0 : q.input,
            "aria-disabled": w.disabled || void 0,
            "aria-invalid": w.state === !1 ? !0 : void 0,
            onInput: j,
            onKeydown: [
              Pe(_, ["enter"]),
              Pe(O, ["tab"]),
              $
            ],
            onBlur: S,
            onFocus: W,
            onKeypress: $,
            onPaste: A
          }, null, 42, xw)),
          be("div", {
            onClick: T[2] || (T[2] = (re) => r("toggle"))
          }, [
            w.$slots["input-icon"] && !w.hideInputIcon ? (I(), G("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: T[0] || (T[0] = (re) => r("toggle"))
            }, [
              ge(w.$slots, "input-icon")
            ])) : Q("", !0),
            !w.$slots["input-icon"] && !w.hideInputIcon && !w.$slots["dp-input"] ? (I(), Ae(P(Yr), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: T[1] || (T[1] = (re) => r("toggle"))
            })) : Q("", !0)
          ]),
          w.$slots["clear-icon"] && e.inputValue && w.clearable && !w.disabled && !w.readonly ? (I(), G("span", kw, [
            ge(w.$slots, "clear-icon", { clear: B })
          ])) : Q("", !0),
          w.clearable && !w.$slots["clear-icon"] && e.inputValue && !w.disabled && !w.readonly ? (I(), Ae(P(Yd), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: T[3] || (T[3] = Ge((re) => B(re), ["prevent"]))
          })) : Q("", !0)
        ])) : Q("", !0)
      ]);
    };
  }
}), Tw = ["title"], Sw = ["disabled"], Pw = /* @__PURE__ */ Mt({
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
      defaultedRange: d,
      getDefaultPattern: u
    } = lt(r), { isTimeValid: c, isMonthValid: p } = Gn(r), { buildMatrix: b } = zn(), g = J(null), y = J(null), M = J(!1), E = J({}), V = J(null), h = J(null);
    xt(() => {
      r.arrowNavigation && b([gt(g), gt(y)], "actionRow"), k(), window.addEventListener("resize", k);
    }), Fr(() => {
      window.removeEventListener("resize", k);
    });
    const k = () => {
      M.value = !1, setTimeout(() => {
        var $, w;
        const T = ($ = V.value) == null ? void 0 : $.getBoundingClientRect(), q = (w = h.value) == null ? void 0 : w.getBoundingClientRect();
        T && q && (E.value.maxWidth = `${q.width - T.width - 20}px`), M.value = !0;
      }, 0);
    }, A = Z(() => d.value.enabled && !d.value.partialRange && r.internalModelValue ? r.internalModelValue.length === 2 : !0), F = Z(
      () => !c.value(r.internalModelValue) || !p.value(r.internalModelValue) || !A.value
    ), j = () => {
      const $ = o.value;
      return r.timePicker || r.monthPicker, $(bt(r.internalModelValue));
    }, _ = () => {
      const $ = r.internalModelValue;
      return s.value.count > 0 ? `${O($[0])} - ${O($[1])}` : [O($[0]), O($[1])];
    }, O = ($) => Xd(
      $,
      o.value,
      r.formatLocale,
      l.value.rangeSeparator,
      r.modelAuto,
      u()
    ), W = Z(() => !r.internalModelValue || !r.menuMount ? "" : typeof o.value == "string" ? Array.isArray(r.internalModelValue) ? r.internalModelValue.length === 2 && r.internalModelValue[1] ? _() : r.multiDates ? r.internalModelValue.map(($) => `${O($)}`) : r.modelAuto ? `${O(r.internalModelValue[0])}` : `${O(r.internalModelValue[0])} -` : O(r.internalModelValue) : j()), C = () => r.multiDates ? "; " : " - ", S = Z(
      () => Array.isArray(W.value) ? W.value.join(C()) : W.value
    ), B = () => {
      c.value(r.internalModelValue) && p.value(r.internalModelValue) && A.value ? n("select-date") : n("invalid-select");
    };
    return ($, w) => (I(), G("div", {
      ref_key: "actionRowRef",
      ref: h,
      class: "dp__action_row"
    }, [
      $.$slots["action-row"] ? ge($.$slots, "action-row", ht(_t({ key: 0 }, {
        internalModelValue: $.internalModelValue,
        disabled: F.value,
        selectDate: () => $.$emit("select-date"),
        closePicker: () => $.$emit("close-picker")
      }))) : (I(), G(_e, { key: 1 }, [
        P(a).showPreview ? (I(), G("div", {
          key: 0,
          class: "dp__selection_preview",
          title: S.value,
          style: St(E.value)
        }, [
          $.$slots["action-preview"] && M.value ? ge($.$slots, "action-preview", {
            key: 0,
            value: $.internalModelValue
          }) : Q("", !0),
          !$.$slots["action-preview"] && M.value ? (I(), G(_e, { key: 1 }, [
            Jt(He(S.value), 1)
          ], 64)) : Q("", !0)
        ], 12, Tw)) : Q("", !0),
        be("div", {
          ref_key: "actionBtnContainer",
          ref: V,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          $.$slots["action-buttons"] ? ge($.$slots, "action-buttons", {
            key: 0,
            value: $.internalModelValue
          }) : Q("", !0),
          $.$slots["action-buttons"] ? Q("", !0) : (I(), G(_e, { key: 1 }, [
            !P(i).enabled && P(a).showCancel ? (I(), G("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: g,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: w[0] || (w[0] = (T) => $.$emit("close-picker")),
              onKeydown: [
                w[1] || (w[1] = Pe((T) => $.$emit("close-picker"), ["enter"])),
                w[2] || (w[2] = Pe((T) => $.$emit("close-picker"), ["space"]))
              ]
            }, He($.cancelText), 545)) : Q("", !0),
            P(a).showNow ? (I(), G("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: w[3] || (w[3] = (T) => $.$emit("select-now")),
              onKeydown: [
                w[4] || (w[4] = Pe((T) => $.$emit("select-now"), ["enter"])),
                w[5] || (w[5] = Pe((T) => $.$emit("select-now"), ["space"]))
              ]
            }, He($.nowButtonLabel), 33)) : Q("", !0),
            P(a).showSelect ? (I(), G("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: y,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: F.value,
              onKeydown: [
                Pe(B, ["enter"]),
                Pe(B, ["space"])
              ],
              onClick: B
            }, He($.selectText), 41, Sw)) : Q("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), Aw = ["onKeydown"], Cw = { class: "dp__selection_grid_header" }, Dw = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], Ow = ["aria-label"], Ma = /* @__PURE__ */ Mt({
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
    const { setSelectionGrid: r, buildMultiLevelMatrix: a, setMonthPicker: o } = zn(), s = n, l = e, { defaultedAriaLabels: i, defaultedTextInput: d, defaultedConfig: u } = lt(
      l
    ), { hideNavigationButtons: c } = Io(), p = J(!1), b = J(null), g = J(null), y = J([]), M = J(), E = J(null), V = J(0), h = J(null);
    uc(() => {
      b.value = null;
    }), xt(() => {
      Ut().then(() => C()), l.noOverlayFocus || A(), k(!0);
    }), Fr(() => k(!1));
    const k = (te) => {
      var m;
      l.arrowNavigation && ((m = l.headerRefs) != null && m.length ? o(te) : r(te));
    }, A = () => {
      var te;
      const m = gt(g);
      m && (d.value.enabled || (b.value ? (te = b.value) == null || te.focus({ preventScroll: !0 }) : m.focus({ preventScroll: !0 })), p.value = m.clientHeight < m.scrollHeight);
    }, F = Z(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !l.useRelative,
        "dp--overlay-relative": l.useRelative
      })
    ), j = Z(
      () => l.useRelative ? { height: `${l.height}px`, width: "260px" } : void 0
    ), _ = Z(() => ({
      dp__overlay_col: !0
    })), O = Z(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: p.value,
        dp__button_bottom: l.isLast
      })
    ), W = Z(() => {
      var te, m;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((te = l.items) == null ? void 0 : te.length) <= 6,
        dp__container_block: ((m = l.items) == null ? void 0 : m.length) > 6
      };
    });
    rt(
      () => l.items,
      () => C(!1),
      { deep: !0 }
    );
    const C = (te = !0) => {
      Ut().then(() => {
        const m = gt(b), f = gt(g), N = gt(E), X = gt(h), ce = N ? N.getBoundingClientRect().height : 0;
        f && (f.getBoundingClientRect().height ? V.value = f.getBoundingClientRect().height - ce : V.value = u.value.modeHeight - ce), m && X && te && (X.scrollTop = m.offsetTop - X.offsetTop - (V.value / 2 - m.getBoundingClientRect().height) - ce);
      });
    }, S = (te) => {
      te.disabled || s("selected", te.value);
    }, B = () => {
      s("toggle"), s("reset-flow");
    }, $ = () => {
      l.escClose && B();
    }, w = (te, m, f, N) => {
      te && ((m.active || m.value === l.focusValue) && (b.value = te), l.arrowNavigation && (Array.isArray(y.value[f]) ? y.value[f][N] = te : y.value[f] = [te], T()));
    }, T = () => {
      var te, m;
      const f = (te = l.headerRefs) != null && te.length ? [l.headerRefs].concat(y.value) : y.value.concat([l.skipButtonRef ? [] : [E.value]]);
      a(bt(f), (m = l.headerRefs) != null && m.length ? "monthPicker" : "selectionGrid");
    }, q = (te) => {
      l.arrowNavigation || In(te, u.value, !0);
    }, re = (te) => {
      M.value = te, s("hover-value", te);
    }, fe = () => {
      if (B(), !l.isLast) {
        const te = jb(l.menuWrapRef ?? null, "action-row");
        if (te) {
          const m = Ud(te);
          m == null || m.focus();
        }
      }
    };
    return t({ focusGrid: A }), (te, m) => {
      var f;
      return I(), G("div", {
        ref_key: "gridWrapRef",
        ref: g,
        class: $e(F.value),
        style: St(j.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          Pe(Ge($, ["prevent"]), ["esc"]),
          m[0] || (m[0] = Pe(Ge((N) => q(N), ["prevent"]), ["left"])),
          m[1] || (m[1] = Pe(Ge((N) => q(N), ["prevent"]), ["up"])),
          m[2] || (m[2] = Pe(Ge((N) => q(N), ["prevent"]), ["down"])),
          m[3] || (m[3] = Pe(Ge((N) => q(N), ["prevent"]), ["right"]))
        ]
      }, [
        be("div", {
          ref_key: "containerRef",
          ref: h,
          class: $e(W.value),
          role: "grid",
          style: St({ height: `${V.value}px` })
        }, [
          be("div", Cw, [
            ge(te.$slots, "header")
          ]),
          te.$slots.overlay ? ge(te.$slots, "overlay", { key: 0 }) : (I(!0), G(_e, { key: 1 }, qe(te.items, (N, X) => (I(), G("div", {
            key: X,
            class: $e(["dp__overlay_row", { dp__flex_row: te.items.length >= 3 }]),
            role: "row"
          }, [
            (I(!0), G(_e, null, qe(N, (ce, Y) => (I(), G("div", {
              key: ce.value,
              ref_for: !0,
              ref: (Oe) => w(Oe, ce, X, Y),
              role: "gridcell",
              class: $e(_.value),
              "aria-selected": ce.active || void 0,
              "aria-disabled": ce.disabled || void 0,
              tabindex: "0",
              onClick: (Oe) => S(ce),
              onKeydown: [
                Pe(Ge((Oe) => S(ce), ["prevent"]), ["enter"]),
                Pe(Ge((Oe) => S(ce), ["prevent"]), ["space"])
              ],
              onMouseover: (Oe) => re(ce.value)
            }, [
              be("div", {
                class: $e(ce.className)
              }, [
                te.$slots.item ? ge(te.$slots, "item", {
                  key: 0,
                  item: ce
                }) : Q("", !0),
                te.$slots.item ? Q("", !0) : (I(), G(_e, { key: 1 }, [
                  Jt(He(ce.text), 1)
                ], 64))
              ], 2)
            ], 42, Dw))), 128))
          ], 2))), 128))
        ], 6),
        te.$slots["button-icon"] ? bn((I(), G("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: E,
          type: "button",
          "aria-label": (f = P(i)) == null ? void 0 : f.toggleOverlay,
          class: $e(O.value),
          tabindex: "0",
          onClick: B,
          onKeydown: [
            Pe(B, ["enter"]),
            Pe(fe, ["tab"])
          ]
        }, [
          ge(te.$slots, "button-icon")
        ], 42, Ow)), [
          [Fa, !P(c)(te.hideNavigation, te.type)]
        ]) : Q("", !0)
      ], 46, Aw);
    };
  }
}), Bo = /* @__PURE__ */ Mt({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Z(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), r = Z(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (a, o) => (I(), G("div", {
      class: $e({
        dp__menu_inner: !a.stretch,
        "dp--menu--inner-stretched": a.stretch,
        dp__flex_display: a.multiCalendars > 0,
        "dp--flex-display-collapsed": a.collapse
      })
    }, [
      (I(!0), G(_e, null, qe(n.value, (s, l) => (I(), G("div", {
        key: s,
        class: $e(r.value)
      }, [
        ge(a.$slots, "default", {
          instance: s,
          index: l
        })
      ], 2))), 128))
    ], 2));
  }
}), Ew = ["aria-label", "aria-disabled"], sa = /* @__PURE__ */ Mt({
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
        o[1] || (o[1] = Pe(Ge((s) => a.$emit("activate"), ["prevent"]), ["enter"])),
        o[2] || (o[2] = Pe(Ge((s) => a.$emit("activate"), ["prevent"]), ["space"]))
      ]
    }, [
      be("span", {
        class: $e(["dp__inner_nav", { dp__inner_nav_disabled: a.disabled }])
      }, [
        ge(a.$slots, "default")
      ], 2)
    ], 40, Ew));
  }
}), Rw = { class: "dp--year-mode-picker" }, Nw = ["aria-label"], ef = /* @__PURE__ */ Mt({
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
    const n = t, r = e, { showRightIcon: a, showLeftIcon: o } = Io(), { defaultedConfig: s, defaultedMultiCalendars: l, defaultedAriaLabels: i, defaultedTransitions: d } = lt(r), { showTransition: u, transitionName: c } = xa(d), p = (y = !1, M) => {
      n("toggle-year-picker", { flow: y, show: M });
    }, b = (y) => {
      n("year-select", y);
    }, g = (y = !1) => {
      n("handle-year", y);
    };
    return (y, M) => {
      var E, V, h;
      return I(), G("div", Rw, [
        P(o)(P(l), e.instance) ? (I(), Ae(sa, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (E = P(i)) == null ? void 0 : E.prevYear,
          disabled: e.isDisabled(!1),
          onActivate: M[0] || (M[0] = (k) => g(!1))
        }, {
          default: Ve(() => [
            y.$slots["arrow-left"] ? ge(y.$slots, "arrow-left", { key: 0 }) : Q("", !0),
            y.$slots["arrow-left"] ? Q("", !0) : (I(), Ae(P($l), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : Q("", !0),
        be("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (V = P(i)) == null ? void 0 : V.openYearsOverlay,
          onClick: M[1] || (M[1] = () => p(!1)),
          onKeydown: M[2] || (M[2] = Pe(() => p(!1), ["enter"]))
        }, [
          y.$slots.year ? ge(y.$slots, "year", {
            key: 0,
            year: e.year
          }) : Q("", !0),
          y.$slots.year ? Q("", !0) : (I(), G(_e, { key: 1 }, [
            Jt(He(e.year), 1)
          ], 64))
        ], 40, Nw),
        P(a)(P(l), e.instance) ? (I(), Ae(sa, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (h = P(i)) == null ? void 0 : h.nextYear,
          disabled: e.isDisabled(!0),
          onActivate: M[3] || (M[3] = (k) => g(!0))
        }, {
          default: Ve(() => [
            y.$slots["arrow-right"] ? ge(y.$slots, "arrow-right", { key: 0 }) : Q("", !0),
            y.$slots["arrow-right"] ? Q("", !0) : (I(), Ae(P(Vl), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : Q("", !0),
        Xe(qn, {
          name: P(c)(e.showYearPicker),
          css: P(u)
        }, {
          default: Ve(() => [
            e.showYearPicker ? (I(), Ae(Ma, {
              key: 0,
              items: e.items,
              "text-input": y.textInput,
              "esc-close": y.escClose,
              config: y.config,
              "is-last": y.autoApply && !P(s).keepActionRow,
              "hide-navigation": y.hideNavigation,
              "aria-labels": y.ariaLabels,
              type: "year",
              onToggle: p,
              onSelected: M[4] || (M[4] = (k) => b(k))
            }, Dt({
              "button-icon": Ve(() => [
                y.$slots["calendar-icon"] ? ge(y.$slots, "calendar-icon", { key: 0 }) : Q("", !0),
                y.$slots["calendar-icon"] ? Q("", !0) : (I(), Ae(P(Yr), { key: 1 }))
              ]),
              _: 2
            }, [
              y.$slots["year-overlay-value"] ? {
                name: "item",
                fn: Ve(({ item: k }) => [
                  ge(y.$slots, "year-overlay-value", {
                    text: k.text,
                    value: k.value
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
}), Ul = (e, t, n) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((r) => Be(e, r))) {
      const r = t.value.filter((a) => !Be(a, e));
      t.value = r.length ? r : null;
    } else
      (n && +n > t.value.length || !n) && t.value.push(e);
  else
    t.value = [e];
}, Wl = (e, t, n) => {
  let r = e.value ? e.value.slice() : [];
  return r.length === 2 && r[1] !== null && (r = []), r.length ? ut(t, r[0]) ? (r.unshift(t), n("range-start", r[0]), n("range-start", r[1])) : (r[1] = t, n("range-end", t)) : (r = [t], n("range-start", t)), r;
}, Lo = (e, t, n, r) => {
  e && (e[0] && e[1] && n && t("auto-apply"), e[0] && !e[1] && r && n && t("auto-apply"));
}, tf = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => jn(ee(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = jn(ee(e.value), e.timezone));
}, nf = (e, t, n, r) => Array.isArray(t.value) && t.value.length === 2 ? r.value.fixedStart && (ft(e, t.value[0]) || Be(e, t.value[0])) ? [t.value[0], e] : r.value.fixedEnd && (ut(e, t.value[1]) || Be(e, t.value[1])) ? [e, t.value[1]] : (n("invalid-fixed-range", e), t.value) : [], rf = ({
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
  const d = Z(() => Ll(o.yearRange, o.reverseYears)), u = J([!1]), c = Z(() => (A, F) => {
    const j = Ze(zt(/* @__PURE__ */ new Date()), {
      month: l.value(A),
      year: s.value(A)
    });
    return Kd(
      j,
      n.value.maxDate,
      n.value.minDate,
      o.preventMinMaxNavigation,
      F
    );
  }), p = () => {
    for (let A = 0; A < e.value.count; A++)
      if (A === 0)
        r.value[A] = r.value[0];
      else {
        const F = Ze(ee(), r.value[A - 1]);
        r.value[A] = { month: Fe(F), year: Ne(Pl(F, 1)) };
      }
  }, b = (A) => {
    if (!A)
      return p();
    const F = Ze(ee(), r.value[A]);
    return r.value[0].year = Ne(Ld(F, e.value.count - 1)), p();
  }, g = (A) => o.focusStartDate ? A[0] : A[1] ? A[1] : A[0], y = () => {
    if (a.value) {
      const A = Array.isArray(a.value) ? g(a.value) : a.value;
      r.value[0] = { month: Fe(A), year: Ne(A) };
    }
  };
  xt(() => {
    y(), e.value.count && p();
  });
  const M = (A, F) => {
    r.value[F].year = A, e.value.count && !e.value.solo && b(F);
  }, E = Z(() => (A) => Vr(d.value, (F) => {
    const j = s.value(A) === F.value, _ = ya(
      F.value,
      Ir(n.value.minDate),
      Ir(n.value.maxDate)
    ), O = jl(t.value, F.value);
    return { active: j, disabled: _, highlighted: O };
  })), V = (A, F) => {
    M(A, F), k(F);
  }, h = (A, F = !1) => {
    if (!c.value(A, F)) {
      const j = F ? s.value(A) + 1 : s.value(A) - 1;
      M(j, A);
    }
  }, k = (A, F = !1, j) => {
    F || i("reset-flow"), j !== void 0 ? u.value[A] = j : u.value[A] = !u.value[A], u.value || i("overlay-closed");
  };
  return {
    isDisabled: c,
    groupedYears: E,
    showYearPicker: u,
    selectYear: M,
    toggleYearPicker: k,
    handleYearSelect: V,
    handleYear: h
  };
}, $w = (e, t) => {
  const {
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: a,
    defaultedConfig: o,
    defaultedRange: s,
    defaultedHighlight: l,
    propDates: i,
    defaultedTz: d
  } = lt(e), { modelValue: u, year: c, month: p, calendars: b } = ka(e, t), g = Z(() => Hd(e.formatLocale, e.locale, e.monthNameFormat)), y = J(null), { checkMinMaxRange: M } = Gn(e), {
    selectYear: E,
    groupedYears: V,
    showYearPicker: h,
    toggleYearPicker: k,
    handleYearSelect: A,
    handleYear: F,
    isDisabled: j
  } = rf({
    modelValue: u,
    multiCalendars: n,
    highlight: l,
    calendars: b,
    year: c,
    propDates: i,
    month: p,
    props: e,
    emit: t
  });
  xt(() => {
    e.startDate && (u.value && e.focusStartDate || !u.value) && E(Ne(ee(e.startDate)), 0);
  });
  const _ = (m) => m ? { month: Fe(m), year: Ne(m) } : { month: null, year: null }, O = () => u.value ? Array.isArray(u.value) ? u.value.map((m) => _(m)) : _(u.value) : _(), W = (m, f) => {
    const N = b.value[m], X = O();
    return Array.isArray(X) ? X.some((ce) => ce.year === (N == null ? void 0 : N.year) && ce.month === f) : (N == null ? void 0 : N.year) === X.year && f === X.month;
  }, C = (m, f, N) => {
    var X, ce;
    const Y = O();
    return Array.isArray(Y) ? c.value(f) === ((X = Y[N]) == null ? void 0 : X.year) && m === ((ce = Y[N]) == null ? void 0 : ce.month) : !1;
  }, S = (m, f) => {
    if (s.value.enabled) {
      const N = O();
      if (Array.isArray(u.value) && Array.isArray(N)) {
        const X = C(m, f, 0) || C(m, f, 1), ce = yn(zt(ee()), m, c.value(f));
        return Vo(u.value, y.value, ce) && !X;
      }
      return !1;
    }
    return !1;
  }, B = Z(() => (m) => Vr(g.value, (f) => {
    const N = W(m, f.value), X = ya(
      f.value,
      Wd(c.value(m), i.value.minDate),
      qd(c.value(m), i.value.maxDate)
    ) || Qb(i.value.disabledDates, c.value(m)).includes(f.value), ce = S(f.value, m), Y = Qd(l.value, f.value, c.value(m));
    return { active: N, disabled: X, isBetween: ce, highlighted: Y };
  })), $ = (m, f) => yn(zt(ee()), m, c.value(f)), w = (m, f) => {
    const N = u.value ? u.value : zt(/* @__PURE__ */ new Date());
    u.value = yn(N, m, c.value(f)), t("auto-apply"), t("update-flow-step");
  }, T = (m, f) => {
    const N = $(m, f);
    s.value.fixedEnd || s.value.fixedStart ? u.value = nf(N, u, t, s) : u.value ? M(N, u.value) && (u.value = Wl(u, $(m, f), t)) : u.value = [$(m, f)], Lo(u.value, t, e.autoApply, e.modelAuto);
  }, q = (m, f) => {
    Ul($(m, f), u, e.multiDatesLimit), t("auto-apply", !0);
  }, re = (m, f) => (b.value[f].month = m, te(f, b.value[f].year, m), e.multiDates ? q(m, f) : s.value.enabled ? T(m, f) : w(m, f)), fe = (m, f) => {
    E(m, f), te(f, m, null);
  }, te = (m, f, N) => {
    let X = N;
    if (!X && X !== 0) {
      const ce = O();
      X = Array.isArray(ce) ? ce[m].month : ce.month;
    }
    t("update-month-year", { instance: m, year: f, month: X });
  };
  return {
    groupedMonths: B,
    groupedYears: V,
    year: c,
    isDisabled: j,
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: a,
    defaultedConfig: o,
    showYearPicker: h,
    modelValue: u,
    presetDate: (m, f) => {
      tf({
        value: m,
        modelValue: u,
        range: s.value.enabled,
        timezone: f ? void 0 : d.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (m, f) => {
      y.value = $(m, f);
    },
    selectMonth: re,
    selectYear: fe,
    toggleYearPicker: k,
    handleYearSelect: A,
    handleYear: F,
    getModelMonthYear: O
  };
}, Vw = /* @__PURE__ */ Mt({
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
      year: d,
      isDisabled: u,
      defaultedMultiCalendars: c,
      defaultedConfig: p,
      showYearPicker: b,
      modelValue: g,
      presetDate: y,
      setHoverDate: M,
      selectMonth: E,
      selectYear: V,
      toggleYearPicker: h,
      handleYearSelect: k,
      handleYear: A,
      getModelMonthYear: F
    } = $w(s, r);
    return t({ getSidebarProps: () => ({
      modelValue: g,
      year: d,
      getModelMonthYear: F,
      selectMonth: E,
      selectYear: V,
      handleYear: A
    }), presetDate: y, toggleYearPicker: (j) => h(0, j) }), (j, _) => (I(), Ae(Bo, {
      "multi-calendars": P(c).count,
      collapse: j.collapse,
      stretch: ""
    }, {
      default: Ve(({ instance: O }) => [
        j.$slots["month-year"] ? ge(j.$slots, "month-year", ht(_t({ key: 0 }, {
          year: P(d),
          months: P(l)(O),
          years: P(i)(O),
          selectMonth: P(E),
          selectYear: P(V),
          instance: O
        }))) : (I(), Ae(Ma, {
          key: 1,
          items: P(l)(O),
          "arrow-navigation": j.arrowNavigation,
          "is-last": j.autoApply && !P(p).keepActionRow,
          "esc-close": j.escClose,
          height: P(p).modeHeight,
          config: j.config,
          "no-overlay-focus": !!(j.noOverlayFocus || j.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (W) => P(E)(W, O),
          onHoverValue: (W) => P(M)(W, O)
        }, {
          header: Ve(() => [
            Xe(ef, _t(j.$props, {
              items: P(i)(O),
              instance: O,
              "show-year-picker": P(b)[O],
              year: P(d)(O),
              "is-disabled": (W) => P(u)(O, W),
              onHandleYear: (W) => P(A)(O, W),
              onYearSelect: (W) => P(k)(W, O),
              onToggleYearPicker: (W) => P(h)(O, W == null ? void 0 : W.flow, W == null ? void 0 : W.show)
            }), Dt({ _: 2 }, [
              qe(P(o), (W, C) => ({
                name: W,
                fn: Ve((S) => [
                  ge(j.$slots, W, ht(Pt(S)))
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
}), Iw = (e, t) => {
  const { modelValue: n } = ka(e, t), r = J(null), { defaultedHighlight: a, defaultedFilters: o, defaultedRange: s, propDates: l } = lt(e), i = J();
  xt(() => {
    e.startDate && (n.value && e.focusStartDate || !n.value) && (i.value = Ne(ee(e.startDate)));
  });
  const d = (b) => Array.isArray(n.value) ? n.value.some((g) => Ne(g) === b) : n.value ? Ne(n.value) === b : !1, u = (b) => s.value.enabled && Array.isArray(n.value) ? Vo(n.value, r.value, p(b)) : !1, c = Z(() => Vr(Ll(e.yearRange, e.reverseYears), (b) => {
    const g = d(b.value), y = ya(
      b.value,
      Ir(l.value.minDate),
      Ir(l.value.maxDate)
    ) || o.value.years.includes(b.value), M = u(b.value) && !g, E = jl(a.value, b.value);
    return { active: g, disabled: y, isBetween: M, highlighted: E };
  })), p = (b) => un(zt(/* @__PURE__ */ new Date()), b);
  return {
    groupedYears: c,
    modelValue: n,
    focusYear: i,
    setHoverValue: (b) => {
      r.value = un(zt(/* @__PURE__ */ new Date()), b);
    },
    selectYear: (b) => {
      var g;
      if (t("update-month-year", { instance: 0, year: b }), e.multiDates)
        return n.value ? Array.isArray(n.value) && (((g = n.value) == null ? void 0 : g.map((y) => Ne(y))).includes(b) ? n.value = n.value.filter((y) => Ne(y) !== b) : n.value.push(un(Ft(ee()), b))) : n.value = [un(Ft(ee()), b)], t("auto-apply", !0);
      if (s.value.enabled)
        return n.value = Wl(n, p(b), t), Lo(n.value, t, e.autoApply, e.modelAuto);
      n.value = p(b), t("auto-apply");
    }
  };
}, Fw = /* @__PURE__ */ Mt({
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
    const r = n, a = e, { groupedYears: o, modelValue: s, focusYear: l, selectYear: i, setHoverValue: d } = Iw(a, r), { defaultedConfig: u } = lt(a);
    return t({ getSidebarProps: () => ({
      modelValue: s,
      selectYear: i
    }) }), (c, p) => (I(), G("div", null, [
      c.$slots["month-year"] ? ge(c.$slots, "month-year", ht(_t({ key: 0 }, {
        years: P(o),
        selectYear: P(i)
      }))) : (I(), Ae(Ma, {
        key: 1,
        items: P(o),
        "is-last": c.autoApply && !P(u).keepActionRow,
        height: P(u).modeHeight,
        config: c.config,
        "no-overlay-focus": !!(c.noOverlayFocus || c.textInput),
        "focus-value": P(l),
        type: "year",
        "use-relative": "",
        onSelected: P(i),
        onHoverValue: P(d)
      }, Dt({ _: 2 }, [
        c.$slots["year-overlay-value"] ? {
          name: "item",
          fn: Ve(({ item: b }) => [
            ge(c.$slots, "year-overlay-value", {
              text: b.text,
              value: b.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), Bw = {
  key: 0,
  class: "dp__time_input"
}, Lw = ["aria-label", "onKeydown", "onClick"], Yw = /* @__PURE__ */ be("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), Hw = /* @__PURE__ */ be("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), jw = ["aria-label", "disabled", "onKeydown", "onClick"], Uw = ["aria-label", "onKeydown", "onClick"], Ww = /* @__PURE__ */ be("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), qw = /* @__PURE__ */ be("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), zw = { key: 0 }, Gw = ["aria-label", "onKeydown"], Kw = /* @__PURE__ */ Mt({
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
    const r = n, a = e, { setTimePickerElements: o, setTimePickerBackRef: s } = zn(), { defaultedAriaLabels: l, defaultedTransitions: i, defaultedFilters: d, defaultedConfig: u, defaultedRange: c } = lt(a), { transitionName: p, showTransition: b } = xa(i), g = wn({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), y = J("AM"), M = J(null), E = J([]);
    xt(() => {
      r("mounted");
    });
    const V = (U) => Ze(/* @__PURE__ */ new Date(), {
      hours: U.hours,
      minutes: U.minutes,
      seconds: a.enableSeconds ? U.seconds : 0,
      milliseconds: 0
    }), h = Z(
      () => (U) => w(U, a[U]) || A(U, a[U])
    ), k = Z(() => ({ hours: a.hours, minutes: a.minutes, seconds: a.seconds })), A = (U, ve) => c.value.enabled && !c.value.disableTimeRangeValidation ? !a.validateTime(U, ve) : !1, F = (U, ve) => {
      if (c.value.enabled && !c.value.disableTimeRangeValidation) {
        const Ee = ve ? +a[`${U}Increment`] : -+a[`${U}Increment`], D = a[U] + Ee;
        return !a.validateTime(U, D);
      }
      return !1;
    }, j = Z(() => (U) => !fe(+a[U] + +a[`${U}Increment`], U) || F(U, !0)), _ = Z(() => (U) => !fe(+a[U] - +a[`${U}Increment`], U) || F(U, !1)), O = (U, ve) => xd(Ze(ee(), U), ve), W = (U, ve) => $b(Ze(ee(), U), ve), C = Z(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !a.timePickerInline,
        dp__time_col_reg_block: !a.enableSeconds && a.is24 && !a.timePickerInline,
        dp__time_col_reg_inline: !a.enableSeconds && a.is24 && a.timePickerInline,
        dp__time_col_reg_with_button: !a.enableSeconds && !a.is24,
        dp__time_col_sec: a.enableSeconds && a.is24,
        dp__time_col_sec_with_button: a.enableSeconds && !a.is24
      })
    ), S = Z(() => {
      const U = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return a.enableSeconds ? U.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : U;
    }), B = Z(() => S.value.filter((U) => !U.separator)), $ = Z(() => (U) => {
      if (U === "hours") {
        const ve = X(+a.hours);
        return { text: ve < 10 ? `0${ve}` : `${ve}`, value: ve };
      }
      return { text: a[U] < 10 ? `0${a[U]}` : `${a[U]}`, value: a[U] };
    }), w = (U, ve) => {
      var Ee;
      if (!a.disabledTimesConfig)
        return !1;
      const D = a.disabledTimesConfig(a.order, U === "hours" ? ve : void 0);
      return D[U] ? !!((Ee = D[U]) != null && Ee.includes(ve)) : !0;
    }, T = (U) => {
      const ve = a.is24 ? 24 : 12, Ee = U === "hours" ? ve : 60, D = +a[`${U}GridIncrement`], v = U === "hours" && !a.is24 ? D : 0, x = [];
      for (let L = v; L < Ee; L += D)
        x.push({ value: L, text: L < 10 ? `0${L}` : `${L}` });
      return U === "hours" && !a.is24 && x.push({ value: 0, text: "12" }), Vr(x, (L) => ({ active: !1, disabled: d.value.times[U].includes(L.value) || !fe(L.value, U) || w(U, L.value) || A(U, L.value) }));
    }, q = (U) => U >= 0 ? U : 59, re = (U) => U >= 0 ? U : 23, fe = (U, ve) => {
      const Ee = a.minTime ? V(us(a.minTime)) : null, D = a.maxTime ? V(us(a.maxTime)) : null, v = V(
        us(
          k.value,
          ve,
          ve === "minutes" || ve === "seconds" ? q(U) : re(U)
        )
      );
      return Ee && D ? (va(v, D) || xr(v, D)) && (ha(v, Ee) || xr(v, Ee)) : Ee ? ha(v, Ee) || xr(v, Ee) : D ? va(v, D) || xr(v, D) : !0;
    }, te = (U) => a[`no${U[0].toUpperCase() + U.slice(1)}Overlay`], m = (U) => {
      te(U) || (g[U] = !g[U], g[U] || r("overlay-closed"));
    }, f = (U) => U === "hours" ? Xt : U === "minutes" ? fn : Nr, N = (U, ve = !0) => {
      const Ee = ve ? O : W, D = ve ? +a[`${U}Increment`] : -+a[`${U}Increment`];
      fe(+a[U] + D, U) && r(
        `update:${U}`,
        f(U)(Ee({ [U]: +a[U] }, { [U]: +a[`${U}Increment`] }))
      );
    }, X = (U) => a.is24 ? U : (U >= 12 ? y.value = "PM" : y.value = "AM", Fb(U)), ce = () => {
      y.value === "PM" ? (y.value = "AM", r("update:hours", a.hours - 12)) : (y.value = "PM", r("update:hours", a.hours + 12)), r("am-pm-change", y.value);
    }, Y = (U) => {
      g[U] = !0;
    }, Oe = (U, ve, Ee) => {
      if (U && a.arrowNavigation) {
        Array.isArray(E.value[ve]) ? E.value[ve][Ee] = U : E.value[ve] = [U];
        const D = E.value.reduce(
          (v, x) => x.map((L, K) => [...v[K] || [], x[K]]),
          []
        );
        s(a.closeTimePickerBtn), M.value && (D[1] = D[1].concat(M.value)), o(D, a.order);
      }
    }, Ie = (U, ve) => (m(U), U === "hours" && !a.is24 ? r(`update:${U}`, y.value === "PM" ? ve + 12 : ve) : r(`update:${U}`, ve));
    return t({ openChildCmp: Y }), (U, ve) => {
      var Ee;
      return U.disabled ? Q("", !0) : (I(), G("div", Bw, [
        (I(!0), G(_e, null, qe(S.value, (D, v) => {
          var x, L, K;
          return I(), G("div", {
            key: v,
            class: $e(C.value)
          }, [
            D.separator ? (I(), G(_e, { key: 0 }, [
              Jt(" : ")
            ], 64)) : (I(), G(_e, { key: 1 }, [
              be("button", {
                ref_for: !0,
                ref: (R) => Oe(R, v, 0),
                type: "button",
                class: $e({
                  dp__btn: !0,
                  dp__inc_dec_button: !U.timePickerInline,
                  dp__inc_dec_button_inline: U.timePickerInline,
                  dp__tp_inline_btn_top: U.timePickerInline,
                  dp__inc_dec_button_disabled: j.value(D.type)
                }),
                "aria-label": (x = P(l)) == null ? void 0 : x.incrementValue(D.type),
                tabindex: "0",
                onKeydown: [
                  Pe(Ge((R) => N(D.type), ["prevent"]), ["enter"]),
                  Pe(Ge((R) => N(D.type), ["prevent"]), ["space"])
                ],
                onClick: (R) => N(D.type)
              }, [
                a.timePickerInline ? (I(), G(_e, { key: 1 }, [
                  Yw,
                  Hw
                ], 64)) : (I(), G(_e, { key: 0 }, [
                  U.$slots["arrow-up"] ? ge(U.$slots, "arrow-up", { key: 0 }) : Q("", !0),
                  U.$slots["arrow-up"] ? Q("", !0) : (I(), Ae(P(Fl), { key: 1 }))
                ], 64))
              ], 42, Lw),
              be("button", {
                ref_for: !0,
                ref: (R) => Oe(R, v, 1),
                type: "button",
                "aria-label": (L = P(l)) == null ? void 0 : L.openTpOverlay(D.type),
                class: $e({
                  dp__time_display: !0,
                  dp__time_display_block: !U.timePickerInline,
                  dp__time_display_inline: U.timePickerInline,
                  "dp--time-invalid": h.value(D.type),
                  "dp--time-overlay-btn": !h.value(D.type)
                }),
                disabled: te(D.type),
                tabindex: "0",
                onKeydown: [
                  Pe(Ge((R) => m(D.type), ["prevent"]), ["enter"]),
                  Pe(Ge((R) => m(D.type), ["prevent"]), ["space"])
                ],
                onClick: (R) => m(D.type)
              }, [
                U.$slots[D.type] ? ge(U.$slots, D.type, {
                  key: 0,
                  text: $.value(D.type).text,
                  value: $.value(D.type).value
                }) : Q("", !0),
                U.$slots[D.type] ? Q("", !0) : (I(), G(_e, { key: 1 }, [
                  Jt(He($.value(D.type).text), 1)
                ], 64))
              ], 42, jw),
              be("button", {
                ref_for: !0,
                ref: (R) => Oe(R, v, 2),
                type: "button",
                class: $e({
                  dp__btn: !0,
                  dp__inc_dec_button: !U.timePickerInline,
                  dp__inc_dec_button_inline: U.timePickerInline,
                  dp__tp_inline_btn_bottom: U.timePickerInline,
                  dp__inc_dec_button_disabled: _.value(D.type)
                }),
                "aria-label": (K = P(l)) == null ? void 0 : K.decrementValue(D.type),
                tabindex: "0",
                onKeydown: [
                  Pe(Ge((R) => N(D.type, !1), ["prevent"]), ["enter"]),
                  Pe(Ge((R) => N(D.type, !1), ["prevent"]), ["space"])
                ],
                onClick: (R) => N(D.type, !1)
              }, [
                a.timePickerInline ? (I(), G(_e, { key: 1 }, [
                  Ww,
                  qw
                ], 64)) : (I(), G(_e, { key: 0 }, [
                  U.$slots["arrow-down"] ? ge(U.$slots, "arrow-down", { key: 0 }) : Q("", !0),
                  U.$slots["arrow-down"] ? Q("", !0) : (I(), Ae(P(Bl), { key: 1 }))
                ], 64))
              ], 42, Uw)
            ], 64))
          ], 2);
        }), 128)),
        U.is24 ? Q("", !0) : (I(), G("div", zw, [
          U.$slots["am-pm-button"] ? ge(U.$slots, "am-pm-button", {
            key: 0,
            toggle: ce,
            value: y.value
          }) : Q("", !0),
          U.$slots["am-pm-button"] ? Q("", !0) : (I(), G("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: M,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (Ee = P(l)) == null ? void 0 : Ee.amPmButton,
            tabindex: "0",
            onClick: ce,
            onKeydown: [
              Pe(Ge(ce, ["prevent"]), ["enter"]),
              Pe(Ge(ce, ["prevent"]), ["space"])
            ]
          }, He(y.value), 41, Gw))
        ])),
        (I(!0), G(_e, null, qe(B.value, (D, v) => (I(), Ae(qn, {
          key: v,
          name: P(p)(g[D.type]),
          css: P(b)
        }, {
          default: Ve(() => [
            g[D.type] ? (I(), Ae(Ma, {
              key: 0,
              items: T(D.type),
              "is-last": U.autoApply && !P(u).keepActionRow,
              "esc-close": U.escClose,
              type: D.type,
              "text-input": U.textInput,
              config: U.config,
              "arrow-navigation": U.arrowNavigation,
              "aria-labels": U.ariaLabels,
              onSelected: (x) => Ie(D.type, x),
              onToggle: (x) => m(D.type),
              onResetFlow: ve[0] || (ve[0] = (x) => U.$emit("reset-flow"))
            }, Dt({
              "button-icon": Ve(() => [
                U.$slots["clock-icon"] ? ge(U.$slots, "clock-icon", { key: 0 }) : Q("", !0),
                U.$slots["clock-icon"] ? Q("", !0) : (I(), Ae(_o(U.timePickerInline ? P(Yr) : P(Il)), { key: 1 }))
              ]),
              _: 2
            }, [
              U.$slots[`${D.type}-overlay-value`] ? {
                name: "item",
                fn: Ve(({ item: x }) => [
                  ge(U.$slots, `${D.type}-overlay-value`, {
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
}), Xw = { class: "dp--tp-wrap" }, Qw = ["aria-label", "tabindex"], Jw = ["tabindex"], Zw = ["aria-label"], af = /* @__PURE__ */ Mt({
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
    const r = n, a = e, { buildMatrix: o, setTimePicker: s } = zn(), l = vr(), { defaultedTransitions: i, defaultedAriaLabels: d, defaultedTextInput: u, defaultedConfig: c, defaultedRange: p } = lt(a), { transitionName: b, showTransition: g } = xa(i), { hideNavigationButtons: y } = Io(), M = J(null), E = J(null), V = J([]), h = J(null);
    xt(() => {
      r("mount"), !a.timePicker && a.arrowNavigation ? o([gt(M.value)], "time") : s(!0, a.timePicker);
    });
    const k = Z(() => p.value.enabled && a.modelAuto ? jd(a.internalModelValue) : !0), A = J(!1), F = (T) => ({
      hours: Array.isArray(a.hours) ? a.hours[T] : a.hours,
      minutes: Array.isArray(a.minutes) ? a.minutes[T] : a.minutes,
      seconds: Array.isArray(a.seconds) ? a.seconds[T] : a.seconds
    }), j = Z(() => {
      const T = [];
      if (p.value.enabled)
        for (let q = 0; q < 2; q++)
          T.push(F(q));
      else
        T.push(F(0));
      return T;
    }), _ = (T, q = !1, re = "") => {
      q || r("reset-flow"), A.value = T, r(T ? "overlay-opened" : "overlay-closed"), a.arrowNavigation && s(T), Ut(() => {
        re !== "" && V.value[0] && V.value[0].openChildCmp(re);
      });
    }, O = Z(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: a.autoApply && !c.value.keepActionRow
    })), W = Vt(l, "timePicker"), C = (T, q, re) => p.value.enabled ? q === 0 ? [T, j.value[1][re]] : [j.value[0][re], T] : T, S = (T) => {
      r("update:hours", T);
    }, B = (T) => {
      r("update:minutes", T);
    }, $ = (T) => {
      r("update:seconds", T);
    }, w = () => {
      if (h.value && !u.value.enabled && !a.noOverlayFocus) {
        const T = Ud(h.value);
        T && T.focus({ preventScroll: !0 });
      }
    };
    return t({ toggleTimePicker: _ }), (T, q) => {
      var re;
      return I(), G("div", Xw, [
        !T.timePicker && !T.timePickerInline ? bn((I(), G("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: M,
          type: "button",
          class: $e(O.value),
          "aria-label": (re = P(d)) == null ? void 0 : re.openTimePicker,
          tabindex: T.noOverlayFocus ? void 0 : 0,
          onKeydown: [
            q[0] || (q[0] = Pe((fe) => _(!0), ["enter"])),
            q[1] || (q[1] = Pe((fe) => _(!0), ["space"]))
          ],
          onClick: q[2] || (q[2] = (fe) => _(!0))
        }, [
          T.$slots["clock-icon"] ? ge(T.$slots, "clock-icon", { key: 0 }) : Q("", !0),
          T.$slots["clock-icon"] ? Q("", !0) : (I(), Ae(P(Il), { key: 1 }))
        ], 42, Qw)), [
          [Fa, !P(y)(T.hideNavigation, "time")]
        ]) : Q("", !0),
        Xe(qn, {
          name: P(b)(A.value),
          css: P(g) && !T.timePickerInline
        }, {
          default: Ve(() => {
            var fe;
            return [
              A.value || T.timePicker || T.timePickerInline ? (I(), G("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: h,
                class: $e({
                  dp__overlay: !T.timePickerInline,
                  "dp--overlay-absolute": !a.timePicker && !T.timePickerInline,
                  "dp--overlay-relative": a.timePicker
                }),
                style: St(T.timePicker ? { height: `${P(c).modeHeight}px` } : void 0),
                tabindex: T.timePickerInline ? void 0 : 0
              }, [
                be("div", {
                  class: $e(
                    T.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  T.$slots["time-picker-overlay"] ? ge(T.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: S,
                    setMinutes: B,
                    setSeconds: $
                  }) : Q("", !0),
                  T.$slots["time-picker-overlay"] ? Q("", !0) : (I(), G("div", {
                    key: 1,
                    class: $e(T.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (I(!0), G(_e, null, qe(j.value, (te, m) => bn((I(), Ae(Kw, _t({ key: m }, {
                      ...T.$props,
                      order: m,
                      hours: te.hours,
                      minutes: te.minutes,
                      seconds: te.seconds,
                      closeTimePickerBtn: E.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: m === 0 ? T.fixedStart : T.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: V,
                      "validate-time": (f, N) => e.validateTime(f, C(N, m, f)),
                      "onUpdate:hours": (f) => S(C(f, m, "hours")),
                      "onUpdate:minutes": (f) => B(C(f, m, "minutes")),
                      "onUpdate:seconds": (f) => $(C(f, m, "seconds")),
                      onMounted: w,
                      onOverlayClosed: w,
                      onAmPmChange: q[3] || (q[3] = (f) => T.$emit("am-pm-change", f))
                    }), Dt({ _: 2 }, [
                      qe(P(W), (f, N) => ({
                        name: f,
                        fn: Ve((X) => [
                          ge(T.$slots, f, ht(Pt(X)))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Fa, m === 0 ? !0 : k.value]
                    ])), 128))
                  ], 2)),
                  !T.timePicker && !T.timePickerInline ? bn((I(), G("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: E,
                    type: "button",
                    class: $e(O.value),
                    "aria-label": (fe = P(d)) == null ? void 0 : fe.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      q[4] || (q[4] = Pe((te) => _(!1), ["enter"])),
                      q[5] || (q[5] = Pe((te) => _(!1), ["space"]))
                    ],
                    onClick: q[6] || (q[6] = (te) => _(!1))
                  }, [
                    T.$slots["calendar-icon"] ? ge(T.$slots, "calendar-icon", { key: 0 }) : Q("", !0),
                    T.$slots["calendar-icon"] ? Q("", !0) : (I(), Ae(P(Yr), { key: 1 }))
                  ], 42, Zw)), [
                    [Fa, !P(y)(T.hideNavigation, "time")]
                  ]) : Q("", !0)
                ], 2)
              ], 14, Jw)) : Q("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), of = (e, t, n, r) => {
  const { defaultedRange: a } = lt(e), o = (h, k) => Array.isArray(t[h]) ? t[h][k] : t[h], s = (h) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[h] : t.seconds : 0, l = (h, k) => h ? k !== void 0 ? Fn(h, o("hours", k), o("minutes", k), s(k)) : Fn(h, t.hours, t.minutes, s()) : Nl(ee(), s(k)), i = (h, k) => {
    t[h] = k;
  }, d = Z(() => e.modelAuto && a.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : a.value.enabled), u = (h, k) => {
    const A = Object.fromEntries(
      Object.keys(t).map((F) => F === h ? [F, k] : [F, t[F]].slice())
    );
    if (d.value && !a.value.disableTimeRangeValidation) {
      const F = (_) => n.value ? Fn(
        n.value[_],
        A.hours[_],
        A.minutes[_],
        A.seconds[_]
      ) : null, j = (_) => Rl(n.value[_], 0);
      return !(Be(F(0), F(1)) && (ha(F(0), j(1)) || va(F(1), j(0))));
    }
    return !0;
  }, c = (h, k) => {
    u(h, k) && (i(h, k), r && r());
  }, p = (h) => {
    c("hours", h);
  }, b = (h) => {
    c("minutes", h);
  }, g = (h) => {
    c("seconds", h);
  }, y = (h, k, A, F) => {
    k && p(h), !k && !A && b(h), A && g(h), n.value && F(n.value);
  }, M = (h) => {
    if (h) {
      const k = Array.isArray(h), A = k ? [+h[0].hours, +h[1].hours] : +h.hours, F = k ? [+h[0].minutes, +h[1].minutes] : +h.minutes, j = k ? [+h[0].seconds, +h[1].seconds] : +h.seconds;
      i("hours", A), i("minutes", F), e.enableSeconds && i("seconds", j);
    }
  }, E = (h, k) => {
    const A = {
      hours: Array.isArray(t.hours) ? t.hours[h] : t.hours,
      disabledArr: []
    };
    return (k || k === 0) && (A.hours = k), Array.isArray(e.disabledTimes) && (A.disabledArr = a.value.enabled && Array.isArray(e.disabledTimes[h]) ? e.disabledTimes[h] : e.disabledTimes), A;
  }, V = Z(() => (h, k) => {
    var A;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: F, hours: j } = E(h, k), _ = F.filter((O) => +O.hours === j);
      return ((A = _[0]) == null ? void 0 : A.minutes) === "*" ? { hours: [j], minutes: void 0, seconds: void 0 } : {
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
    updateTimeValues: y,
    getSecondsValue: s,
    assignStartTime: M,
    validateTime: u,
    disabledTimesConfig: V
  };
}, e_ = (e, t) => {
  const { modelValue: n, time: r } = ka(e, t), { defaultedStartTime: a, defaultedRange: o } = lt(e), { updateTimeValues: s, getSetDateTime: l, setTime: i, assignStartTime: d, disabledTimesConfig: u, validateTime: c } = of(e, r, n), p = (h) => {
    const { hours: k, minutes: A, seconds: F } = h;
    return { hours: +k, minutes: +A, seconds: F ? +F : 0 };
  }, b = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const k = p(e.startTime[0]), A = p(e.startTime[1]);
        return [Ze(ee(), k), Ze(ee(), A)];
      }
      const h = p(e.startTime);
      return Ze(ee(), h);
    }
    return o.value.enabled ? [null, null] : null;
  }, g = () => {
    if (o.value.enabled) {
      const [h, k] = b();
      n.value = [l(h, 0), l(k, 1)];
    } else
      n.value = l(b());
  }, y = (h) => Array.isArray(h) ? [fr(ee(h[0])), fr(ee(h[1]))] : [fr(h ?? ee())], M = (h, k, A) => {
    i("hours", h), i("minutes", k), i("seconds", e.enableSeconds ? A : 0);
  }, E = () => {
    const [h, k] = y(n.value);
    return o.value.enabled ? M(
      [h.hours, k.hours],
      [h.minutes, k.minutes],
      [h.seconds, k.seconds]
    ) : M(h.hours, h.minutes, h.seconds);
  };
  xt(() => {
    if (!e.shadow)
      return d(a.value), n.value ? E() : g();
  });
  const V = () => {
    Array.isArray(n.value) ? n.value = n.value.map((h, k) => h && l(h, k)) : n.value = l(n.value), t("time-update");
  };
  return {
    modelValue: n,
    time: r,
    disabledTimesConfig: u,
    updateTime: (h, k = !0, A = !1) => {
      s(h, k, A, V);
    },
    validateTime: c
  };
}, t_ = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...en
  },
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, o = vr(), s = Vt(o, "timePicker"), { time: l, modelValue: i, disabledTimesConfig: d, updateTime: u, validateTime: c } = e_(a, r);
    return t({ getSidebarProps: () => ({
      modelValue: i,
      time: l,
      updateTime: u
    }) }), (p, b) => (I(), Ae(Bo, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: Ve(() => [
        Xe(af, _t(p.$props, {
          hours: P(l).hours,
          minutes: P(l).minutes,
          seconds: P(l).seconds,
          "internal-model-value": p.internalModelValue,
          "disabled-times-config": P(d),
          "validate-time": P(c),
          "onUpdate:hours": b[0] || (b[0] = (g) => P(u)(g)),
          "onUpdate:minutes": b[1] || (b[1] = (g) => P(u)(g, !1)),
          "onUpdate:seconds": b[2] || (b[2] = (g) => P(u)(g, !1, !0)),
          onAmPmChange: b[3] || (b[3] = (g) => p.$emit("am-pm-change", g))
        }), Dt({ _: 2 }, [
          qe(P(s), (g, y) => ({
            name: g,
            fn: Ve((M) => [
              ge(p.$slots, g, ht(Pt(M)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), n_ = { class: "dp__month_year_row" }, r_ = ["aria-label", "onClick", "onKeydown"], a_ = /* @__PURE__ */ Mt({
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
      defaultedConfig: d,
      defaultedHighlight: u,
      propDates: c
    } = lt(a), { transitionName: p, showTransition: b } = xa(o), { buildMatrix: g } = zn(), { handleMonthYearChange: y, isDisabled: M, updateMonthYear: E } = hw(a, r), { showLeftIcon: V, showRightIcon: h } = Io(), k = J(!1), A = J(!1), F = J([null, null, null, null]);
    xt(() => {
      r("mount");
    });
    const j = (m) => ({
      get: () => a[m],
      set: (f) => {
        const N = m === Wt.month ? Wt.year : Wt.month;
        r("update-month-year", { [m]: f, [N]: a[N] }), m === Wt.month ? w(!0) : T(!0);
      }
    }), _ = Z(j(Wt.month)), O = Z(j(Wt.year)), W = Z(() => (m) => ({
      month: a.month,
      year: a.year,
      items: m === Wt.month ? a.months : a.years,
      instance: a.instance,
      updateMonthYear: E,
      toggle: m === Wt.month ? w : T
    })), C = Z(() => a.months.find((f) => f.value === a.month) || { text: "", value: 0 }), S = Z(() => Vr(a.months, (m) => {
      const f = a.month === m.value, N = ya(
        m.value,
        Wd(a.year, c.value.minDate),
        qd(a.year, c.value.maxDate)
      ) || i.value.months.includes(m.value), X = Qd(u.value, m.value, a.year);
      return { active: f, disabled: N, highlighted: X };
    })), B = Z(() => Vr(a.years, (m) => {
      const f = a.year === m.value, N = ya(
        m.value,
        Ir(c.value.minDate),
        Ir(c.value.maxDate)
      ) || i.value.years.includes(m.value), X = jl(u.value, m.value);
      return { active: f, disabled: N, highlighted: X };
    })), $ = (m, f) => {
      f !== void 0 ? m.value = f : m.value = !m.value, m.value || r("overlay-closed");
    }, w = (m = !1, f) => {
      q(m), $(k, f);
    }, T = (m = !1, f) => {
      q(m), $(A, f);
    }, q = (m) => {
      m || r("reset-flow");
    }, re = (m, f) => {
      a.arrowNavigation && (F.value[f] = gt(m), g(F.value, "monthYear"));
    }, fe = Z(() => {
      var m, f;
      return [
        {
          type: Wt.month,
          index: 1,
          toggle: w,
          modelValue: _.value,
          updateModelValue: (N) => _.value = N,
          text: C.value.text,
          showSelectionGrid: k.value,
          items: S.value,
          ariaLabel: (m = s.value) == null ? void 0 : m.openMonthsOverlay
        },
        {
          type: Wt.year,
          index: 2,
          toggle: T,
          modelValue: O.value,
          updateModelValue: (N) => O.value = N,
          text: a.year,
          showSelectionGrid: A.value,
          items: B.value,
          ariaLabel: (f = s.value) == null ? void 0 : f.openYearsOverlay
        }
      ];
    }), te = Z(() => a.disableYearSelect ? [fe.value[0]] : a.yearFirst ? [...fe.value].reverse() : fe.value);
    return t({
      toggleMonthPicker: w,
      toggleYearPicker: T,
      handleMonthYearChange: y
    }), (m, f) => {
      var N, X, ce;
      return I(), G("div", n_, [
        m.$slots["month-year"] ? ge(m.$slots, "month-year", ht(_t({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: P(E), handleMonthYearChange: P(y), instance: e.instance }))) : (I(), G(_e, { key: 1 }, [
          P(V)(P(l), e.instance) && !m.vertical ? (I(), Ae(sa, {
            key: 0,
            "aria-label": (N = P(s)) == null ? void 0 : N.prevMonth,
            disabled: P(M)(!1),
            onActivate: f[0] || (f[0] = (Y) => P(y)(!1, !0)),
            onSetRef: f[1] || (f[1] = (Y) => re(Y, 0))
          }, {
            default: Ve(() => [
              m.$slots["arrow-left"] ? ge(m.$slots, "arrow-left", { key: 0 }) : Q("", !0),
              m.$slots["arrow-left"] ? Q("", !0) : (I(), Ae(P($l), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : Q("", !0),
          be("div", {
            class: $e(["dp__month_year_wrap", {
              dp__year_disable_select: m.disableYearSelect
            }])
          }, [
            (I(!0), G(_e, null, qe(te.value, (Y, Oe) => (I(), G(_e, {
              key: Y.type
            }, [
              be("button", {
                ref_for: !0,
                ref: (Ie) => re(Ie, Oe + 1),
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": Y.ariaLabel,
                onClick: Y.toggle,
                onKeydown: [
                  Pe(Ge(Y.toggle, ["prevent"]), ["enter"]),
                  Pe(Ge(Y.toggle, ["prevent"]), ["space"])
                ]
              }, [
                m.$slots[Y.type] ? ge(m.$slots, Y.type, {
                  key: 0,
                  text: Y.text,
                  value: a[Y.type]
                }) : Q("", !0),
                m.$slots[Y.type] ? Q("", !0) : (I(), G(_e, { key: 1 }, [
                  Jt(He(Y.text), 1)
                ], 64))
              ], 40, r_),
              Xe(qn, {
                name: P(p)(Y.showSelectionGrid),
                css: P(b)
              }, {
                default: Ve(() => [
                  Y.showSelectionGrid ? (I(), Ae(Ma, {
                    key: 0,
                    items: Y.items,
                    "arrow-navigation": m.arrowNavigation,
                    "hide-navigation": m.hideNavigation,
                    "is-last": m.autoApply && !P(d).keepActionRow,
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
                      m.$slots["calendar-icon"] ? Q("", !0) : (I(), Ae(P(Yr), { key: 1 }))
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
          P(V)(P(l), e.instance) && m.vertical ? (I(), Ae(sa, {
            key: 1,
            "aria-label": (X = P(s)) == null ? void 0 : X.prevMonth,
            disabled: P(M)(!1),
            onActivate: f[2] || (f[2] = (Y) => P(y)(!1, !0))
          }, {
            default: Ve(() => [
              m.$slots["arrow-up"] ? ge(m.$slots, "arrow-up", { key: 0 }) : Q("", !0),
              m.$slots["arrow-up"] ? Q("", !0) : (I(), Ae(P(Fl), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : Q("", !0),
          P(h)(P(l), e.instance) ? (I(), Ae(sa, {
            key: 2,
            ref: "rightIcon",
            disabled: P(M)(!0),
            "aria-label": (ce = P(s)) == null ? void 0 : ce.nextMonth,
            onActivate: f[3] || (f[3] = (Y) => P(y)(!0, !0)),
            onSetRef: f[4] || (f[4] = (Y) => re(Y, m.disableYearSelect ? 2 : 3))
          }, {
            default: Ve(() => [
              m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? ge(m.$slots, m.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : Q("", !0),
              m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? Q("", !0) : (I(), Ae(_o(m.vertical ? P(Bl) : P(Vl)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : Q("", !0)
        ], 64))
      ]);
    };
  }
}), o_ = ["aria-label"], s_ = {
  class: "dp__calendar_header",
  role: "row"
}, l_ = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, i_ = ["aria-label"], u_ = /* @__PURE__ */ be("div", { class: "dp__calendar_header_separator" }, null, -1), c_ = ["aria-label"], d_ = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, f_ = { class: "dp__cell_inner" }, p_ = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], m_ = /* @__PURE__ */ Mt({
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
      defaultedMultiCalendars: d,
      defaultedWeekNumbers: u
    } = lt(a), c = J(null), p = J({
      bottom: "",
      left: "",
      transform: ""
    }), b = J([]), g = J(null), y = J(!0), M = J(""), E = J({ startX: 0, endX: 0, startY: 0, endY: 0 }), V = J([]), h = J({ left: "50%" }), k = Z(() => a.calendar ? a.calendar(a.mappedDates) : a.mappedDates), A = Z(() => a.dayNames ? Array.isArray(a.dayNames) ? a.dayNames : a.dayNames(a.locale, +a.weekStart) : Ib(a.formatLocale, a.locale, +a.weekStart));
    xt(() => {
      r("mount", { cmp: "calendar", refs: b }), l.value.noSwipe || g.value && (g.value.addEventListener("touchstart", T, { passive: !1 }), g.value.addEventListener("touchend", q, { passive: !1 }), g.value.addEventListener("touchmove", re, { passive: !1 })), a.monthChangeOnScroll && g.value && g.value.addEventListener("wheel", m, { passive: !1 });
    });
    const F = (Y) => Y ? a.vertical ? "vNext" : "next" : a.vertical ? "vPrevious" : "previous", j = (Y, Oe) => {
      if (a.transitions) {
        const Ie = Ft(yn(ee(), a.month, a.year));
        M.value = ft(Ft(yn(ee(), Y, Oe)), Ie) ? s.value[F(!0)] : s.value[F(!1)], y.value = !1, Ut(() => {
          y.value = !0;
        });
      }
    }, _ = Z(
      () => ({
        [a.calendarClassName]: !!a.calendarClassName
      })
    ), O = Z(() => (Y) => {
      const Oe = Bb(Y);
      return {
        dp__marker_dot: Oe.type === "dot",
        dp__marker_line: Oe.type === "line"
      };
    }), W = Z(() => (Y) => Be(Y, c.value)), C = Z(() => ({
      dp__calendar: !0,
      dp__calendar_next: d.value.count > 0 && a.instance !== 0
    })), S = Z(() => (Y) => a.hideOffsetDates ? Y.current : !0), B = (Y) => dn(Y, "yyyy-MM-dd"), $ = async (Y, Oe, Ie) => {
      var U, ve;
      if (r("set-hover-date", Y), (ve = (U = Y.marker) == null ? void 0 : U.tooltip) != null && ve.length) {
        const Ee = gt(b.value[Oe][Ie]);
        if (Ee) {
          const { width: D, height: v } = Ee.getBoundingClientRect();
          c.value = Y.value;
          let x = { left: `${D / 2}px` }, L = -50;
          if (await Ut(), V.value[0]) {
            const { left: K, width: R } = V.value[0].getBoundingClientRect();
            K < 0 && (x = { left: "0" }, L = 0, h.value.left = `${D / 2}px`), window.innerWidth < K + R && (x = { right: "0" }, L = 0, h.value.left = `${R - D / 2}px`);
          }
          p.value = {
            bottom: `${v}px`,
            ...x,
            transform: `translateX(${L}%)`
          }, r("tooltip-open", Y.marker);
        }
      }
    }, w = (Y) => {
      c.value && (c.value = null, p.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), r("tooltip-close", Y.marker));
    }, T = (Y) => {
      E.value.startX = Y.changedTouches[0].screenX, E.value.startY = Y.changedTouches[0].screenY;
    }, q = (Y) => {
      E.value.endX = Y.changedTouches[0].screenX, E.value.endY = Y.changedTouches[0].screenY, fe();
    }, re = (Y) => {
      a.vertical && !a.inline && Y.preventDefault();
    }, fe = () => {
      const Y = a.vertical ? "Y" : "X";
      Math.abs(E.value[`start${Y}`] - E.value[`end${Y}`]) > 10 && r("handle-swipe", E.value[`start${Y}`] > E.value[`end${Y}`] ? "right" : "left");
    }, te = (Y, Oe, Ie) => {
      Y && (Array.isArray(b.value[Oe]) ? b.value[Oe][Ie] = Y : b.value[Oe] = [Y]), a.arrowNavigation && o(b.value, "calendar");
    }, m = (Y) => {
      a.monthChangeOnScroll && (Y.preventDefault(), r("handle-scroll", Y));
    }, f = (Y) => u.value.type === "local" ? Dl(Y.value, { weekStartsOn: +a.weekStart }) : u.value.type === "iso" ? Al(Y.value) : typeof u.value.type == "function" ? u.value.type(Y.value) : "", N = (Y) => {
      const Oe = Y[0];
      return u.value.hideOnOffsetDates ? Y.some((Ie) => Ie.current) ? f(Oe) : "" : f(Oe);
    }, X = (Y, Oe) => {
      In(Y, l.value), r("select-date", Oe);
    }, ce = (Y) => {
      In(Y, l.value);
    };
    return t({ triggerTransition: j }), (Y, Oe) => {
      var Ie;
      return I(), G("div", {
        class: $e(C.value)
      }, [
        be("div", {
          ref_key: "calendarWrapRef",
          ref: g,
          role: "grid",
          class: $e(_.value),
          "aria-label": (Ie = P(i)) == null ? void 0 : Ie.calendarWrap
        }, [
          be("div", s_, [
            Y.weekNumbers ? (I(), G("div", l_, He(Y.weekNumName), 1)) : Q("", !0),
            (I(!0), G(_e, null, qe(A.value, (U, ve) => {
              var Ee, D;
              return I(), G("div", {
                key: ve,
                class: "dp__calendar_header_item",
                role: "gridcell",
                "aria-label": (D = (Ee = P(i)) == null ? void 0 : Ee.weekDay) == null ? void 0 : D.call(Ee, ve)
              }, [
                Y.$slots["calendar-header"] ? ge(Y.$slots, "calendar-header", {
                  key: 0,
                  day: U,
                  index: ve
                }) : Q("", !0),
                Y.$slots["calendar-header"] ? Q("", !0) : (I(), G(_e, { key: 1 }, [
                  Jt(He(U), 1)
                ], 64))
              ], 8, i_);
            }), 128))
          ]),
          u_,
          Xe(qn, {
            name: M.value,
            css: !!Y.transitions
          }, {
            default: Ve(() => {
              var U;
              return [
                y.value ? (I(), G("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((U = P(i)) == null ? void 0 : U.calendarDays) || void 0
                }, [
                  (I(!0), G(_e, null, qe(k.value, (ve, Ee) => (I(), G("div", {
                    key: Ee,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    Y.weekNumbers ? (I(), G("div", d_, [
                      be("div", f_, He(N(ve.days)), 1)
                    ])) : Q("", !0),
                    (I(!0), G(_e, null, qe(ve.days, (D, v) => {
                      var x, L, K;
                      return I(), G("div", {
                        id: B(D.value),
                        ref_for: !0,
                        ref: (R) => te(R, Ee, v),
                        key: v + Ee,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (D.classData.dp__active_date || D.classData.dp__range_start || D.classData.dp__range_start) ?? void 0,
                        "aria-disabled": D.classData.dp__cell_disabled || void 0,
                        "aria-label": (L = (x = P(i)) == null ? void 0 : x.day) == null ? void 0 : L.call(x, D),
                        tabindex: "0",
                        onClick: Ge((R) => X(R, D), ["prevent"]),
                        onKeydown: [
                          Pe((R) => Y.$emit("select-date", D), ["enter"]),
                          Pe((R) => Y.$emit("handle-space", D), ["space"])
                        ],
                        onMouseenter: (R) => $(D, Ee, v),
                        onMouseleave: (R) => w(D)
                      }, [
                        be("div", {
                          class: $e(["dp__cell_inner", D.classData])
                        }, [
                          Y.$slots.day && S.value(D) ? ge(Y.$slots, "day", {
                            key: 0,
                            day: +D.text,
                            date: D.value
                          }) : Q("", !0),
                          Y.$slots.day ? Q("", !0) : (I(), G(_e, { key: 1 }, [
                            Jt(He(D.text), 1)
                          ], 64)),
                          D.marker && S.value(D) ? (I(), G(_e, { key: 2 }, [
                            Y.$slots.marker ? ge(Y.$slots, "marker", {
                              key: 0,
                              marker: D.marker,
                              day: +D.text,
                              date: D.value
                            }) : (I(), G("div", {
                              key: 1,
                              class: $e(O.value(D.marker)),
                              style: St(D.marker.color ? { backgroundColor: D.marker.color } : {})
                            }, null, 6))
                          ], 64)) : Q("", !0),
                          W.value(D.value) ? (I(), G("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: V,
                            class: "dp__marker_tooltip",
                            style: St(p.value)
                          }, [
                            (K = D.marker) != null && K.tooltip ? (I(), G("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: ce
                            }, [
                              (I(!0), G(_e, null, qe(D.marker.tooltip, (R, oe) => (I(), G("div", {
                                key: oe,
                                class: "dp__tooltip_text"
                              }, [
                                Y.$slots["marker-tooltip"] ? ge(Y.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: R,
                                  day: D.value
                                }) : Q("", !0),
                                Y.$slots["marker-tooltip"] ? Q("", !0) : (I(), G(_e, { key: 1 }, [
                                  be("div", {
                                    class: "dp__tooltip_mark",
                                    style: St(R.color ? { backgroundColor: R.color } : {})
                                  }, null, 4),
                                  be("div", null, He(R.text), 1)
                                ], 64))
                              ]))), 128)),
                              be("div", {
                                class: "dp__arrow_bottom_tp",
                                style: St(h.value)
                              }, null, 4)
                            ])) : Q("", !0)
                          ], 4)) : Q("", !0)
                        ], 2)
                      ], 40, p_);
                    }), 128))
                  ]))), 128))
                ], 8, c_)) : Q("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, o_)
      ], 2);
    };
  }
}), xu = (e) => Array.isArray(e), h_ = (e, t, n, r) => {
  const a = J([]), o = J(/* @__PURE__ */ new Date()), { modelValue: s, calendars: l, time: i } = ka(e, t), { defaultedMultiCalendars: d, defaultedStartTime: u, defaultedRange: c, defaultedTz: p, propDates: b } = lt(e), { validateMonthYearInRange: g, isDisabled: y, isDateRangeAllowed: M, checkMinMaxRange: E } = Gn(e), { updateTimeValues: V, getSetDateTime: h, setTime: k, assignStartTime: A, validateTime: F, disabledTimesConfig: j } = of(e, i, s, r), _ = Z(
    () => (H) => l.value[H] ? l.value[H].month : 0
  ), O = Z(
    () => (H) => l.value[H] ? l.value[H].year : 0
  ), W = (H, se, xe) => {
    var Se, ne;
    l.value[H] || (l.value[H] = { month: 0, year: 0 }), l.value[H].month = yu(se) ? (Se = l.value[H]) == null ? void 0 : Se.month : se, l.value[H].year = yu(xe) ? (ne = l.value[H]) == null ? void 0 : ne.year : xe;
  }, C = () => {
    e.autoApply && t("select-date");
  };
  rt(
    s,
    (H, se) => {
      JSON.stringify(H) !== JSON.stringify(se) && $();
    },
    { deep: !0 }
  ), xt(() => {
    e.shadow || (s.value || (ce(), u.value && A(u.value)), $(!0), e.focusStartDate && e.startDate && ce());
  });
  const S = Z(() => {
    var H;
    return (H = e.flow) != null && H.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), B = () => {
    e.autoApply && S.value && t("auto-apply");
  }, $ = (H = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? (a.value = s.value, m(H)) : q(s.value, H);
    if (d.value.count && H && !e.startDate)
      return T(ee(), H);
  }, w = () => Array.isArray(s.value) && c.value.enabled ? Fe(s.value[0]) === Fe(s.value[1] ?? s.value[0]) : !1, T = (H, se = !1) => {
    if ((!d.value.count || !d.value.static || se) && W(0, Fe(H), Ne(H)), d.value.count && (!d.value.solo || !s.value || w()))
      for (let xe = 1; xe < d.value.count; xe++) {
        const Se = Ze(ee(), { month: _.value(xe - 1), year: O.value(xe - 1) }), ne = xd(Se, { months: 1 });
        l.value[xe] = { month: Fe(ne), year: Ne(ne) };
      }
  }, q = (H, se) => {
    T(H), k("hours", Xt(H)), k("minutes", fn(H)), k("seconds", Nr(H)), d.value.count && se && X();
  }, re = (H) => {
    if (d.value.count) {
      if (d.value.solo)
        return 0;
      const se = Fe(H[0]), xe = Fe(H[1]);
      return Math.abs(xe - se) < d.value.count ? 0 : 1;
    }
    return 1;
  }, fe = (H, se) => {
    H[1] && c.value.showLastInRange ? T(H[re(H)], se) : T(H[0], se);
    const xe = (Se, ne) => [
      Se(H[0]),
      H[1] ? Se(H[1]) : i[ne][1]
    ];
    k("hours", xe(Xt, "hours")), k("minutes", xe(fn, "minutes")), k("seconds", xe(Nr, "seconds"));
  }, te = (H, se) => {
    if ((c.value.enabled || e.weekPicker) && !e.multiDates)
      return fe(H, se);
    if (e.multiDates && se) {
      const xe = H[H.length - 1];
      return q(xe, se);
    }
  }, m = (H) => {
    const se = s.value;
    te(se, H), d.value.count && d.value.solo && X();
  }, f = (H, se) => {
    const xe = Ze(ee(), { month: _.value(se), year: O.value(se) }), Se = H < 0 ? Kt(xe, 1) : $r(xe, 1);
    g(Fe(Se), Ne(Se), H < 0, e.preventMinMaxNavigation) && (W(se, Fe(Se), Ne(Se)), t("update-month-year", { instance: se, month: Fe(Se), year: Ne(Se) }), d.value.count && !d.value.solo && N(se), n());
  }, N = (H) => {
    for (let se = H - 1; se >= 0; se--) {
      const xe = $r(Ze(ee(), { month: _.value(se + 1), year: O.value(se + 1) }), 1);
      W(se, Fe(xe), Ne(xe));
    }
    for (let se = H + 1; se <= d.value.count - 1; se++) {
      const xe = Kt(Ze(ee(), { month: _.value(se - 1), year: O.value(se - 1) }), 1);
      W(se, Fe(xe), Ne(xe));
    }
  }, X = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const H = ee(
        ee(s.value[1] ? s.value[1] : Kt(s.value[0], 1))
      ), [se, xe] = [Fe(s.value[0]), Ne(s.value[0])], [Se, ne] = [Fe(s.value[1]), Ne(s.value[1])];
      (se !== Se || se === Se && xe !== ne) && d.value.solo && W(1, Fe(H), Ne(H));
    } else
      s.value && !Array.isArray(s.value) && (W(0, Fe(s.value), Ne(s.value)), T(ee()));
  }, ce = () => {
    e.startDate && (W(0, Fe(ee(e.startDate)), Ne(ee(e.startDate))), d.value.count && N(0));
  }, Y = (H, se) => {
    if (e.monthChangeOnScroll) {
      const xe = (/* @__PURE__ */ new Date()).getTime() - o.value.getTime(), Se = Math.abs(H.deltaY);
      let ne = 500;
      Se > 1 && (ne = 100), Se > 100 && (ne = 0), xe > ne && (o.value = /* @__PURE__ */ new Date(), f(e.monthChangeOnScroll !== "inverse" ? -H.deltaY : H.deltaY, se));
    }
  }, Oe = (H, se, xe = !1) => {
    e.monthChangeOnArrows && e.vertical === xe && Ie(H, se);
  }, Ie = (H, se) => {
    f(H === "right" ? -1 : 1, se);
  }, U = (H) => {
    if (b.value.markers)
      return uo(H.value, b.value.markers);
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
  }, Ee = (H, se, xe, Se) => {
    if (e.sixWeeks && H.length < 6) {
      const ne = 6 - H.length, he = (se.getDay() + 7 - Se) % 7, ye = 6 - (xe.getDay() + 7 - Se) % 7, [Bt, tn] = ve(he, ye);
      for (let Kn = 1; Kn <= ne; Kn++)
        if (tn ? !!(Kn % 2) == Bt : Bt) {
          const xn = H[0].days[0], Ho = D(qt(xn.value, -7), Fe(se));
          H.unshift({ days: Ho });
        } else {
          const xn = H[H.length - 1], Ho = xn.days[xn.days.length - 1], sf = D(qt(Ho.value, 1), Fe(se));
          H.push({ days: sf });
        }
    }
    return H;
  }, D = (H, se) => {
    const xe = ee(H), Se = [];
    for (let ne = 0; ne < 7; ne++) {
      const he = qt(xe, ne), ye = Fe(he) !== se;
      Se.push({
        text: e.hideOffsetDates && ye ? "" : he.getDate(),
        value: he,
        current: !ye,
        classData: {}
      });
    }
    return Se;
  }, v = (H, se) => {
    const xe = [], Se = new Date(se, H), ne = new Date(se, H + 1, 0), he = e.weekStart, ye = mn(Se, { weekStartsOn: he }), Bt = (tn) => {
      const Kn = D(tn, H);
      if (xe.push({ days: Kn }), !xe[xe.length - 1].days.some(
        (xn) => Be(Ft(xn.value), Ft(ne))
      )) {
        const xn = qt(tn, 7);
        Bt(xn);
      }
    };
    return Bt(ye), Ee(xe, Se, ne, he);
  }, x = (H) => {
    const se = Fn(ee(H.value), i.hours, i.minutes, ue());
    t("date-update", se), e.multiDates ? Ul(se, s, e.multiDatesLimit) : s.value = se, r(), Ut().then(() => {
      B();
    });
  }, L = (H) => c.value.noDisabledRange ? zd(a.value[0], H).some((se) => y(se)) : !1, K = () => {
    a.value = s.value ? s.value.slice() : [], a.value.length === 2 && !(c.value.fixedStart || c.value.fixedEnd) && (a.value = []);
  }, R = (H, se) => {
    const xe = [
      ee(H.value),
      qt(ee(H.value), +c.value.autoRange)
    ];
    M(xe) ? (se && oe(H.value), a.value = xe) : t("invalid-date", H.value);
  }, oe = (H) => {
    const se = Fe(ee(H)), xe = Ne(ee(H));
    if (W(0, se, xe), d.value.count > 0)
      for (let Se = 1; Se < d.value.count; Se++) {
        const ne = zb(
          Ze(ee(H), { year: _.value(Se - 1), month: O.value(Se - 1) })
        );
        W(Se, ne.month, ne.year);
      }
  }, ie = (H) => {
    if (L(H.value) || !E(H.value, s.value, c.value.fixedStart ? 0 : 1))
      return t("invalid-date", H.value);
    a.value = nf(ee(H.value), s, t, c);
  }, le = (H, se) => {
    if (K(), c.value.autoRange)
      return R(H, se);
    if (c.value.fixedStart || c.value.fixedEnd)
      return ie(H);
    a.value[0] ? E(ee(H.value), s.value) && !L(H.value) ? ut(ee(H.value), ee(a.value[0])) ? (a.value.unshift(ee(H.value)), t("range-end", a.value[0])) : (a.value[1] = ee(H.value), t("range-end", a.value[1])) : (e.autoApply && t("auto-apply-invalid", H.value), t("invalid-date", H.value)) : (a.value[0] = ee(H.value), t("range-start", a.value[0]));
  }, ue = (H = !0) => e.enableSeconds ? Array.isArray(i.seconds) ? H ? i.seconds[0] : i.seconds[1] : i.seconds : 0, ae = (H) => {
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
    a.value.length && (a.value[0] && !a.value[1] ? ae(0) : (ae(0), ae(1), r()), de(), s.value = a.value.slice(), Lo(a.value, t, e.autoApply, e.modelAuto));
  }, we = (H, se = !1) => {
    if (y(H.value) || !H.current && e.hideOffsetDates)
      return t("invalid-date", H.value);
    if (!c.value.enabled)
      return x(H);
    xu(i.hours) && xu(i.minutes) && !e.multiDates && (le(H, se), me());
  }, Te = (H, se) => {
    var xe;
    W(H, se.month, se.year), d.value.count && !d.value.solo && N(H), t("update-month-year", { instance: H, month: se.month, year: se.year }), n(d.value.solo ? H : void 0);
    const Se = (xe = e.flow) != null && xe.length ? e.flow[e.flowStep] : void 0;
    !se.fromNav && (Se === rn.month || Se === rn.year) && r();
  }, Re = (H, se) => {
    tf({
      value: H,
      modelValue: s,
      range: c.value.enabled,
      timezone: se ? void 0 : p.value.timezone
    }), C(), e.multiCalendars && Ut().then(() => $(!0));
  }, je = () => {
    c.value.enabled ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = ut(ee(), s.value[0]) ? [ee(), s.value[0]] : [s.value[0], ee()] : s.value = [ee()] : s.value = ee(), C();
  }, Ke = () => {
    if (Array.isArray(s.value))
      if (e.multiDates) {
        const H = it();
        s.value[s.value.length - 1] = h(H);
      } else
        s.value = s.value.map((H, se) => H && h(H, se));
    else
      s.value = h(s.value);
    t("time-update");
  }, it = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null;
  return {
    calendars: l,
    modelValue: s,
    month: _,
    year: O,
    time: i,
    disabledTimesConfig: j,
    validateTime: F,
    getCalendarDays: v,
    getMarker: U,
    handleScroll: Y,
    handleSwipe: Ie,
    handleArrow: Oe,
    selectDate: we,
    updateMonthYear: Te,
    presetDate: Re,
    selectCurrentDate: je,
    updateTime: (H, se = !0, xe = !1) => {
      V(H, se, xe, Ke);
    }
  };
}, v_ = { key: 0 }, y_ = /* @__PURE__ */ Mt({
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
      time: d,
      disabledTimesConfig: u,
      validateTime: c,
      getCalendarDays: p,
      getMarker: b,
      handleArrow: g,
      handleScroll: y,
      handleSwipe: M,
      selectDate: E,
      updateMonthYear: V,
      presetDate: h,
      selectCurrentDate: k,
      updateTime: A
    } = h_(a, r, fe, te), F = vr(), { setHoverDate: j, getDayClassData: _, clearHoverDate: O } = bw(i, a), { defaultedMultiCalendars: W } = lt(a), C = J([]), S = J([]), B = J(null), $ = Vt(F, "calendar"), w = Vt(F, "monthYear"), T = Vt(F, "timePicker"), q = (f) => {
      a.shadow || r("mount", f);
    };
    rt(
      o,
      () => {
        a.shadow || setTimeout(() => {
          r("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const re = Z(() => (f) => p(s.value(f), l.value(f)).map((N) => ({
      ...N,
      days: N.days.map((X) => (X.marker = b(X), X.classData = _(X), X))
    })));
    function fe(f) {
      var N;
      f || f === 0 ? (N = S.value[f]) == null || N.triggerTransition(s.value(f), l.value(f)) : S.value.forEach((X, ce) => X.triggerTransition(s.value(ce), l.value(ce)));
    }
    function te() {
      r("update-flow-step");
    }
    const m = (f, N = !1) => {
      E(f, N), a.spaceConfirm && r("select-date");
    };
    return t({
      clearHoverDate: O,
      presetDate: h,
      selectCurrentDate: k,
      toggleMonthPicker: (f, N, X = 0) => {
        var ce;
        (ce = C.value[X]) == null || ce.toggleMonthPicker(f, N);
      },
      toggleYearPicker: (f, N, X = 0) => {
        var ce;
        (ce = C.value[X]) == null || ce.toggleYearPicker(f, N);
      },
      toggleTimePicker: (f, N, X) => {
        var ce;
        (ce = B.value) == null || ce.toggleTimePicker(f, N, X);
      },
      handleArrow: g,
      updateMonthYear: V,
      getSidebarProps: () => ({
        modelValue: i,
        month: s,
        year: l,
        time: d,
        updateTime: A,
        updateMonthYear: V,
        selectDate: E,
        presetDate: h
      })
    }), (f, N) => (I(), G(_e, null, [
      Xe(Bo, {
        "multi-calendars": P(W).count,
        collapse: f.collapse
      }, {
        default: Ve(({ instance: X, index: ce }) => [
          f.disableMonthYearSelect ? Q("", !0) : (I(), Ae(a_, _t({
            key: 0,
            ref: (Y) => {
              Y && (C.value[ce] = Y);
            },
            months: P(Hd)(f.formatLocale, f.locale, f.monthNameFormat),
            years: P(Ll)(f.yearRange, f.reverseYears),
            month: P(s)(X),
            year: P(l)(X),
            instance: X
          }, f.$props, {
            onMount: N[0] || (N[0] = (Y) => q(P(pr).header)),
            onResetFlow: N[1] || (N[1] = (Y) => f.$emit("reset-flow")),
            onUpdateMonthYear: (Y) => P(V)(X, Y),
            onOverlayClosed: N[2] || (N[2] = (Y) => f.$emit("focus-menu"))
          }), Dt({ _: 2 }, [
            qe(P(w), (Y, Oe) => ({
              name: Y,
              fn: Ve((Ie) => [
                ge(f.$slots, Y, ht(Pt(Ie)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          Xe(m_, _t({
            ref: (Y) => {
              Y && (S.value[ce] = Y);
            },
            "mapped-dates": re.value(X),
            month: P(s)(X),
            year: P(l)(X),
            instance: X
          }, f.$props, {
            onSelectDate: (Y) => P(E)(Y, X !== 1),
            onHandleSpace: (Y) => m(Y, X !== 1),
            onSetHoverDate: N[3] || (N[3] = (Y) => P(j)(Y)),
            onHandleScroll: (Y) => P(y)(Y, X),
            onHandleSwipe: (Y) => P(M)(Y, X),
            onMount: N[4] || (N[4] = (Y) => q(P(pr).calendar)),
            onResetFlow: N[5] || (N[5] = (Y) => f.$emit("reset-flow")),
            onTooltipOpen: N[6] || (N[6] = (Y) => f.$emit("tooltip-open", Y)),
            onTooltipClose: N[7] || (N[7] = (Y) => f.$emit("tooltip-close", Y))
          }), Dt({ _: 2 }, [
            qe(P($), (Y, Oe) => ({
              name: Y,
              fn: Ve((Ie) => [
                ge(f.$slots, Y, ht(Pt({ ...Ie })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      f.enableTimePicker ? (I(), G("div", v_, [
        f.$slots["time-picker"] ? ge(f.$slots, "time-picker", ht(_t({ key: 0 }, { time: P(d), updateTime: P(A) }))) : (I(), Ae(af, _t({
          key: 1,
          ref_key: "timePickerRef",
          ref: B
        }, f.$props, {
          hours: P(d).hours,
          minutes: P(d).minutes,
          seconds: P(d).seconds,
          "internal-model-value": f.internalModelValue,
          "disabled-times-config": P(u),
          "validate-time": P(c),
          onMount: N[8] || (N[8] = (X) => q(P(pr).timePicker)),
          "onUpdate:hours": N[9] || (N[9] = (X) => P(A)(X)),
          "onUpdate:minutes": N[10] || (N[10] = (X) => P(A)(X, !1)),
          "onUpdate:seconds": N[11] || (N[11] = (X) => P(A)(X, !1, !0)),
          onResetFlow: N[12] || (N[12] = (X) => f.$emit("reset-flow")),
          onOverlayClosed: N[13] || (N[13] = (X) => f.$emit("time-picker-close")),
          onOverlayOpened: N[14] || (N[14] = (X) => f.$emit("time-picker-open", X)),
          onAmPmChange: N[15] || (N[15] = (X) => f.$emit("am-pm-change", X))
        }), Dt({ _: 2 }, [
          qe(P(T), (X, ce) => ({
            name: X,
            fn: Ve((Y) => [
              ge(f.$slots, X, ht(Pt(Y)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : Q("", !0)
    ], 64));
  }
}), g_ = (e, t) => {
  const n = J(), { defaultedMultiCalendars: r, defaultedConfig: a, defaultedHighlight: o, defaultedRange: s, propDates: l } = lt(e), { modelValue: i, year: d, month: u, calendars: c } = ka(e, t), { isDisabled: p } = Gn(e), { selectYear: b, groupedYears: g, showYearPicker: y, isDisabled: M, toggleYearPicker: E, handleYearSelect: V, handleYear: h } = rf({
    modelValue: i,
    multiCalendars: r,
    highlight: o,
    calendars: c,
    propDates: l,
    month: u,
    year: d,
    props: e,
    emit: t
  }), k = (B, $) => [B, $].map((w) => dn(w, "MMMM", { locale: e.formatLocale })).join("-"), A = Z(() => (B) => i.value ? Array.isArray(i.value) ? i.value.some(($) => mu(B, $)) : mu(i.value, B) : !1), F = (B) => {
    if (s.value.enabled) {
      if (Array.isArray(i.value)) {
        const $ = Be(B, i.value[0]) || Be(B, i.value[1]);
        return Vo(i.value, n.value, B) && !$;
      }
      return !1;
    }
    return !1;
  }, j = (B, $) => B.quarter === iu($) && B.year === Ne($), _ = (B) => typeof o.value == "function" ? o.value({ quarter: iu(B), year: Ne(B) }) : !!o.value.quarters.find(($) => j($, B)), O = Z(() => (B) => {
    const $ = Ze(/* @__PURE__ */ new Date(), { year: d.value(B) });
    return Hg({
      start: Ad($),
      end: jg($)
    }).map((w) => {
      const T = lr(w), q = uu(w), re = p(w), fe = F(T), te = _(T);
      return {
        text: k(T, q),
        value: T,
        active: A.value(T),
        highlighted: te,
        disabled: re,
        isBetween: fe
      };
    });
  }), W = (B) => {
    Ul(B, i, e.multiDatesLimit), t("auto-apply", !0);
  }, C = (B) => {
    i.value = Wl(i, B, t), Lo(i.value, t, e.autoApply, e.modelAuto);
  }, S = (B) => {
    i.value = B, t("auto-apply");
  };
  return {
    defaultedConfig: a,
    defaultedMultiCalendars: r,
    groupedYears: g,
    year: d,
    isDisabled: M,
    quarters: O,
    showYearPicker: y,
    modelValue: i,
    setHoverDate: (B) => {
      n.value = B;
    },
    selectYear: b,
    selectQuarter: (B, $, w) => {
      if (!w)
        return c.value[$].month = Fe(uu(B)), e.multiDates ? W(B) : s.value.enabled ? C(B) : S(B);
    },
    toggleYearPicker: E,
    handleYearSelect: V,
    handleYear: h
  };
}, b_ = { class: "dp--quarter-items" }, w_ = ["disabled", "onClick", "onMouseover"], __ = /* @__PURE__ */ Mt({
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
      groupedYears: d,
      year: u,
      isDisabled: c,
      quarters: p,
      modelValue: b,
      showYearPicker: g,
      setHoverDate: y,
      selectQuarter: M,
      toggleYearPicker: E,
      handleYearSelect: V,
      handleYear: h
    } = g_(a, r);
    return t({ getSidebarProps: () => ({
      modelValue: b,
      year: u,
      selectQuarter: M,
      handleYearSelect: V,
      handleYear: h
    }) }), (k, A) => (I(), Ae(Bo, {
      "multi-calendars": P(l).count,
      collapse: k.collapse,
      stretch: ""
    }, {
      default: Ve(({ instance: F }) => [
        be("div", {
          class: "dp-quarter-picker-wrap",
          style: St({ minHeight: `${P(i).modeHeight}px` })
        }, [
          be("div", null, [
            Xe(ef, _t(k.$props, {
              items: P(d)(F),
              instance: F,
              "show-year-picker": P(g)[F],
              year: P(u)(F),
              "is-disabled": (j) => P(c)(F, j),
              onHandleYear: (j) => P(h)(F, j),
              onYearSelect: (j) => P(V)(j, F),
              onToggleYearPicker: (j) => P(E)(F, j == null ? void 0 : j.flow, j == null ? void 0 : j.show)
            }), Dt({ _: 2 }, [
              qe(P(s), (j, _) => ({
                name: j,
                fn: Ve((O) => [
                  ge(k.$slots, j, ht(Pt(O)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          be("div", b_, [
            (I(!0), G(_e, null, qe(P(p)(F), (j, _) => (I(), G("div", { key: _ }, [
              be("button", {
                type: "button",
                class: $e(["dp--qr-btn", {
                  "dp--qr-btn-active": j.active,
                  "dp--qr-btn-between": j.isBetween,
                  "dp--qr-btn-disabled": j.disabled,
                  "dp--highlighted": j.highlighted
                }]),
                disabled: j.disabled,
                onClick: (O) => P(M)(j.value, F, j.disabled),
                onMouseover: (O) => P(y)(j.value)
              }, [
                k.$slots.quarter ? ge(k.$slots, "quarter", {
                  key: 0,
                  value: j.value,
                  text: j.text
                }) : (I(), G(_e, { key: 1 }, [
                  Jt(He(j.text), 1)
                ], 64))
              ], 42, w_)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), x_ = ["id", "aria-label"], k_ = {
  key: 0,
  class: "dp--menu-load-container"
}, M_ = /* @__PURE__ */ be("span", { class: "dp--menu-loader" }, null, -1), T_ = [
  M_
], S_ = {
  key: 0,
  class: "dp__sidebar_left"
}, P_ = ["onClick", "onKeydown"], A_ = {
  key: 2,
  class: "dp__sidebar_right"
}, C_ = {
  key: 3,
  class: "dp__action_extra"
}, ku = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...Fo,
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
    const r = n, a = e, o = J(null), s = Z(() => {
      const { openOnTop: D, ...v } = a;
      return {
        ...v,
        flowStep: _.value,
        collapse: a.collapse,
        noOverlayFocus: a.noOverlayFocus,
        menuWrapRef: o.value
      };
    }), { setMenuFocused: l, setShiftKey: i, control: d } = Jd(), u = vr(), { defaultedTextInput: c, defaultedInline: p, defaultedConfig: b } = lt(a), g = J(null), y = J(0), M = J(null), E = J(!1), V = J(null);
    xt(() => {
      if (!a.shadow) {
        E.value = !0, h(), window.addEventListener("resize", h);
        const D = gt(o);
        if (D && !c.value.enabled && !p.value.enabled && (l(!0), B()), D) {
          const v = (x) => {
            b.value.allowPreventDefault && x.preventDefault(), In(x, b.value, !0);
          };
          D.addEventListener("pointerdown", v), D.addEventListener("mousedown", v);
        }
      }
    }), Fr(() => {
      window.removeEventListener("resize", h);
    });
    const h = () => {
      const D = gt(M);
      D && (y.value = D.getBoundingClientRect().width);
    }, { arrowRight: k, arrowLeft: A, arrowDown: F, arrowUp: j } = zn(), { flowStep: _, updateFlowStep: O, childMount: W, resetFlow: C } = ww(a, r, V), S = Z(() => a.monthPicker ? Vw : a.yearPicker ? Fw : a.timePicker ? t_ : a.quarterPicker ? __ : y_), B = () => {
      const D = gt(o);
      D && D.focus({ preventScroll: !0 });
    }, $ = Z(() => {
      var D;
      return ((D = V.value) == null ? void 0 : D.getSidebarProps()) || {};
    }), w = () => {
      a.openOnTop && r("recalculate-position");
    }, T = Vt(u, "action"), q = Z(() => a.monthPicker || a.yearPicker ? Vt(u, "monthYear") : a.timePicker ? Vt(u, "timePicker") : Vt(u, "shared")), re = Z(() => a.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), fe = Z(() => ({
      dp__menu_disabled: a.disabled,
      dp__menu_readonly: a.readonly,
      "dp-menu-loading": a.loading
    })), te = Z(
      () => ({
        dp__menu: !0,
        dp__menu_index: !p.value.enabled,
        dp__relative: p.value.enabled,
        [a.menuClassName]: !!a.menuClassName
      })
    ), m = (D) => {
      In(D, b.value, !0);
    }, f = () => {
      a.escClose && r("close-picker");
    }, N = (D) => {
      if (a.arrowNavigation) {
        if (D === "up")
          return j();
        if (D === "down")
          return F();
        if (D === "left")
          return A();
        if (D === "right")
          return k();
      } else
        D === "left" || D === "up" ? Ie("handleArrow", "left", 0, D === "up") : Ie("handleArrow", "right", 0, D === "down");
    }, X = (D) => {
      i(D.shiftKey), !a.disableMonthYearSelect && D.code === "Tab" && D.target.classList.contains("dp__menu") && d.value.shiftKeyInMenu && (D.preventDefault(), In(D, b.value, !0), r("close-picker"));
    }, ce = () => {
      B(), r("time-picker-close");
    }, Y = (D) => {
      var v, x, L;
      (v = V.value) == null || v.toggleTimePicker(!1, !1), (x = V.value) == null || x.toggleMonthPicker(!1, !1, D), (L = V.value) == null || L.toggleYearPicker(!1, !1, D);
    }, Oe = (D, v = 0) => {
      var x, L, K;
      return D === "month" ? (x = V.value) == null ? void 0 : x.toggleMonthPicker(!1, !0, v) : D === "year" ? (L = V.value) == null ? void 0 : L.toggleYearPicker(!1, !0, v) : D === "time" ? (K = V.value) == null ? void 0 : K.toggleTimePicker(!0, !1) : Y(v);
    }, Ie = (D, ...v) => {
      var x, L;
      (x = V.value) != null && x[D] && ((L = V.value) == null || L[D](...v));
    }, U = () => {
      Ie("selectCurrentDate");
    }, ve = (D, v) => {
      Ie("presetDate", D, v);
    }, Ee = () => {
      Ie("clearHoverDate");
    };
    return t({
      updateMonthYear: (D, v) => {
        Ie("updateMonthYear", D, v);
      },
      switchView: Oe
    }), (D, v) => {
      var x, L, K;
      return I(), G("div", {
        id: D.uid ? `dp-menu-${D.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: o,
        tabindex: "0",
        role: "dialog",
        "aria-label": (x = D.ariaLabels) == null ? void 0 : x.menu,
        class: $e(te.value),
        onMouseleave: Ee,
        onClick: m,
        onKeydown: [
          Pe(f, ["esc"]),
          v[18] || (v[18] = Pe(Ge((R) => N("left"), ["prevent"]), ["left"])),
          v[19] || (v[19] = Pe(Ge((R) => N("up"), ["prevent"]), ["up"])),
          v[20] || (v[20] = Pe(Ge((R) => N("down"), ["prevent"]), ["down"])),
          v[21] || (v[21] = Pe(Ge((R) => N("right"), ["prevent"]), ["right"])),
          X
        ]
      }, [
        (D.disabled || D.readonly) && P(p).enabled || D.loading ? (I(), G("div", {
          key: 0,
          class: $e(fe.value)
        }, [
          D.loading ? (I(), G("div", k_, T_)) : Q("", !0)
        ], 2)) : Q("", !0),
        !P(p).enabled && !D.teleportCenter ? (I(), G("div", {
          key: 1,
          class: $e(re.value)
        }, null, 2)) : Q("", !0),
        be("div", {
          ref_key: "innerMenuRef",
          ref: M,
          class: $e({
            dp__menu_content_wrapper: ((L = D.presetDates) == null ? void 0 : L.length) || !!D.$slots["left-sidebar"] || !!D.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && ((K = D.presetDates) == null ? void 0 : K.length) || !!D.$slots["left-sidebar"] || !!D.$slots["right-sidebar"]
          }),
          style: St({ "--dp-menu-width": `${y.value}px` })
        }, [
          D.$slots["left-sidebar"] ? (I(), G("div", S_, [
            ge(D.$slots, "left-sidebar", ht(Pt($.value)))
          ])) : Q("", !0),
          D.presetDates.length ? (I(), G("div", {
            key: 1,
            class: $e({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            (I(!0), G(_e, null, qe(D.presetDates, (R, oe) => (I(), G(_e, { key: oe }, [
              R.slot ? ge(D.$slots, R.slot, {
                key: 0,
                presetDate: ve,
                label: R.label,
                value: R.value
              }) : (I(), G("button", {
                key: 1,
                type: "button",
                style: St(R.style || {}),
                class: $e(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                onClick: Ge((ie) => ve(R.value, R.noTz), ["prevent"]),
                onKeydown: [
                  Pe(Ge((ie) => ve(R.value, R.noTz), ["prevent"]), ["enter"]),
                  Pe(Ge((ie) => ve(R.value, R.noTz), ["prevent"]), ["space"])
                ]
              }, He(R.label), 47, P_))
            ], 64))), 128))
          ], 2)) : Q("", !0),
          be("div", {
            ref_key: "calendarWrapperRef",
            ref: g,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (I(), Ae(_o(S.value), _t({
              ref_key: "dynCmpRef",
              ref: V
            }, s.value, {
              "flow-step": P(_),
              onMount: P(W),
              onUpdateFlowStep: P(O),
              onResetFlow: P(C),
              onFocusMenu: B,
              onSelectDate: v[0] || (v[0] = (R) => D.$emit("select-date")),
              onDateUpdate: v[1] || (v[1] = (R) => D.$emit("date-update", R)),
              onTooltipOpen: v[2] || (v[2] = (R) => D.$emit("tooltip-open", R)),
              onTooltipClose: v[3] || (v[3] = (R) => D.$emit("tooltip-close", R)),
              onAutoApply: v[4] || (v[4] = (R) => D.$emit("auto-apply", R)),
              onRangeStart: v[5] || (v[5] = (R) => D.$emit("range-start", R)),
              onRangeEnd: v[6] || (v[6] = (R) => D.$emit("range-end", R)),
              onInvalidFixedRange: v[7] || (v[7] = (R) => D.$emit("invalid-fixed-range", R)),
              onTimeUpdate: v[8] || (v[8] = (R) => D.$emit("time-update")),
              onAmPmChange: v[9] || (v[9] = (R) => D.$emit("am-pm-change", R)),
              onTimePickerOpen: v[10] || (v[10] = (R) => D.$emit("time-picker-open", R)),
              onTimePickerClose: ce,
              onRecalculatePosition: w,
              onUpdateMonthYear: v[11] || (v[11] = (R) => D.$emit("update-month-year", R)),
              onAutoApplyInvalid: v[12] || (v[12] = (R) => D.$emit("auto-apply-invalid", R)),
              onInvalidDate: v[13] || (v[13] = (R) => D.$emit("invalid-date", R)),
              "onUpdate:internalModelValue": v[14] || (v[14] = (R) => D.$emit("update:internal-model-value", R))
            }), Dt({ _: 2 }, [
              qe(q.value, (R, oe) => ({
                name: R,
                fn: Ve((ie) => [
                  ge(D.$slots, R, ht(Pt({ ...ie })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          D.$slots["right-sidebar"] ? (I(), G("div", A_, [
            ge(D.$slots, "right-sidebar", ht(Pt($.value)))
          ])) : Q("", !0),
          D.$slots["action-extra"] ? (I(), G("div", C_, [
            D.$slots["action-extra"] ? ge(D.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: U
            }) : Q("", !0)
          ])) : Q("", !0)
        ], 6),
        !D.autoApply || P(b).keepActionRow ? (I(), Ae(Pw, _t({
          key: 2,
          "menu-mount": E.value
        }, s.value, {
          "calendar-width": y.value,
          onClosePicker: v[15] || (v[15] = (R) => D.$emit("close-picker")),
          onSelectDate: v[16] || (v[16] = (R) => D.$emit("select-date")),
          onInvalidSelect: v[17] || (v[17] = (R) => D.$emit("invalid-select")),
          onSelectNow: U
        }), Dt({ _: 2 }, [
          qe(P(T), (R, oe) => ({
            name: R,
            fn: Ve((ie) => [
              ge(D.$slots, R, ht(Pt({ ...ie })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : Q("", !0)
      ], 42, x_);
    };
  }
}), D_ = typeof window < "u" ? window : void 0, gs = () => {
}, O_ = (e) => Js() ? (Nu(e), !0) : !1, E_ = (e, t, n, r) => {
  if (!e)
    return gs;
  let a = gs;
  const o = rt(
    () => P(e),
    (l) => {
      a(), l && (l.addEventListener(t, n, r), a = () => {
        l.removeEventListener(t, n, r), a = gs;
      });
    },
    { immediate: !0, flush: "post" }
  ), s = () => {
    o(), a();
  };
  return O_(s), s;
}, R_ = (e, t, n, r = {}) => {
  const { window: a = D_, event: o = "pointerdown" } = r;
  return a ? E_(a, o, (s) => {
    const l = gt(e), i = gt(t);
    !l || !i || l === s.target || s.composedPath().includes(l) || s.composedPath().includes(i) || n(s);
  }, { passive: !0 }) : void 0;
}, N_ = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...Fo
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
    const r = n, a = e, o = vr(), s = J(!1), l = Wa(a, "modelValue"), i = Wa(a, "timezone"), d = J(null), u = J(null), c = J(null), p = J(!1), b = J(null), g = J(!1), y = J(!1), M = J(!1), { setMenuFocused: E, setShiftKey: V } = Jd(), { clearArrowNav: h } = zn(), { validateDate: k, isValidTime: A } = Gn(a), { defaultedTransitions: F, defaultedTextInput: j, defaultedInline: _, defaultedConfig: O, defaultedRange: W } = lt(a), { menuTransition: C, showTransition: S } = xa(F);
    xt(() => {
      N(a.modelValue), Ut().then(() => {
        if (!_.value.enabled) {
          const ne = fe(b.value);
          ne == null || ne.addEventListener("scroll", D), window == null || window.addEventListener("resize", v);
        }
      }), _.value.enabled && (s.value = !0), window == null || window.addEventListener("keyup", x), window == null || window.addEventListener("keydown", L);
    }), Fr(() => {
      if (!_.value.enabled) {
        const ne = fe(b.value);
        ne == null || ne.removeEventListener("scroll", D), window == null || window.removeEventListener("resize", v);
      }
      window == null || window.removeEventListener("keyup", x), window == null || window.removeEventListener("keydown", L);
    });
    const B = Vt(o, "all", a.presetDates), $ = Vt(o, "input");
    rt(
      [l, i],
      () => {
        N(l.value);
      },
      { deep: !0 }
    );
    const { openOnTop: w, menuStyle: T, xCorrect: q, setMenuPosition: re, getScrollableParent: fe, shadowRender: te } = vw({
      menuRef: d,
      menuRefInner: u,
      inputRef: c,
      pickerWrapperRef: b,
      inline: _,
      emit: r,
      props: a,
      slots: o
    }), {
      inputValue: m,
      internalModelValue: f,
      parseExternalModelValue: N,
      emitModelValue: X,
      formatInputValue: ce,
      checkBeforeEmit: Y
    } = mw(r, a, p), Oe = Z(
      () => ({
        dp__main: !0,
        dp__theme_dark: a.dark,
        dp__theme_light: !a.dark,
        dp__flex_display: _.value.enabled,
        "dp--flex-display-collapsed": M.value,
        dp__flex_display_with_input: _.value.input
      })
    ), Ie = Z(() => a.dark ? "dp__theme_dark" : "dp__theme_light"), U = Z(() => ({
      to: typeof a.teleport == "boolean" ? "body" : a.teleport,
      disabled: !a.teleport || _.value.enabled
    })), ve = Z(() => ({ class: "dp__outer_menu_wrap" })), Ee = Z(() => _.value.enabled && (a.timePicker || a.monthPicker || a.yearPicker || a.quarterPicker)), D = () => {
      s.value && (O.value.closeOnScroll ? me() : re());
    }, v = () => {
      var ne;
      s.value && re();
      const he = (ne = u.value) == null ? void 0 : ne.$el.getBoundingClientRect().width;
      M.value = document.body.offsetWidth <= he;
    }, x = (ne) => {
      ne.key === "Tab" && !_.value.enabled && !a.teleport && O.value.tabOutClosesMenu && (b.value.contains(document.activeElement) || me()), y.value = ne.shiftKey;
    }, L = (ne) => {
      y.value = ne.shiftKey;
    }, K = () => {
      !a.disabled && !a.readonly && (te(ku, a), re(!1), s.value = !0, s.value && r("open"), s.value || de(), N(a.modelValue));
    }, R = () => {
      var ne;
      m.value = "", de(), (ne = c.value) == null || ne.setParsedDate(null), r("update:model-value", null), r("update:model-timezone-value", null), r("cleared"), O.value.closeOnClearValue && me();
    }, oe = () => {
      const ne = f.value;
      return !ne || !Array.isArray(ne) && k(ne) ? !0 : Array.isArray(ne) ? a.multiDates || ne.length === 2 && k(ne[0]) && k(ne[1]) ? !0 : W.value.partialRange && !a.timePicker ? k(ne[0]) : !1 : !1;
    }, ie = () => {
      Y() && oe() ? (X(), me()) : r("invalid-select", f.value);
    }, le = (ne) => {
      ue(), X(), O.value.closeOnAutoApply && !ne && me();
    }, ue = () => {
      c.value && j.value.enabled && c.value.setParsedDate(f.value);
    }, ae = (ne = !1) => {
      a.autoApply && A(f.value) && oe() && (W.value.enabled && Array.isArray(f.value) ? (W.value.partialRange || f.value.length === 2) && le(ne) : le(ne));
    }, de = () => {
      j.value.enabled || (f.value = null);
    }, me = () => {
      _.value.enabled || (s.value && (s.value = !1, q.value = !1, E(!1), V(!1), h(), r("closed"), m.value && N(l.value)), de(), r("blur"));
    }, we = (ne, he, ye = !1) => {
      if (!ne) {
        f.value = null;
        return;
      }
      const Bt = Array.isArray(ne) ? !ne.some((Kn) => !k(Kn)) : k(ne), tn = A(ne);
      Bt && tn && (f.value = ne, he && (g.value = ye, ie(), r("text-submit")));
    }, Te = () => {
      a.autoApply && A(f.value) && X(), ue();
    }, Re = () => s.value ? me() : K(), je = (ne) => {
      f.value = ne;
    }, Ke = () => {
      j.value.enabled && (p.value = !0, ce()), r("focus");
    }, it = () => {
      if (j.value.enabled && (p.value = !1, N(a.modelValue), g.value)) {
        const ne = Hb(b.value, y.value);
        ne == null || ne.focus();
      }
      r("blur");
    }, H = (ne) => {
      u.value && u.value.updateMonthYear(0, {
        month: vu(ne.month),
        year: vu(ne.year)
      });
    }, se = (ne) => {
      N(ne ?? a.modelValue);
    }, xe = (ne, he) => {
      var ye;
      (ye = u.value) == null || ye.switchView(ne, he);
    }, Se = (ne) => O.value.onClickOutside ? O.value.onClickOutside(ne) : me();
    return R_(d, c, () => Se(oe)), t({
      closeMenu: me,
      selectDate: ie,
      clearValue: R,
      openMenu: K,
      onScroll: D,
      formatInputValue: ce,
      // exposed for testing purposes
      updateInternalModelValue: je,
      // modify internal modelValue
      setMonthYear: H,
      parseModel: se,
      switchView: xe,
      toggleMenu: Re
    }), (ne, he) => (I(), G("div", {
      ref_key: "pickerWrapperRef",
      ref: b,
      class: $e(Oe.value),
      "data-datepicker-instance": ""
    }, [
      Xe(Mw, _t({
        ref_key: "inputRef",
        ref: c,
        "input-value": P(m),
        "onUpdate:inputValue": he[0] || (he[0] = (ye) => ct(m) ? m.value = ye : null),
        "is-menu-open": s.value
      }, ne.$props, {
        onClear: R,
        onOpen: K,
        onSetInputDate: we,
        onSetEmptyDate: P(X),
        onSelectDate: ie,
        onToggle: Re,
        onClose: me,
        onFocus: Ke,
        onBlur: it,
        onRealBlur: he[1] || (he[1] = (ye) => p.value = !1)
      }), Dt({ _: 2 }, [
        qe(P($), (ye, Bt) => ({
          name: ye,
          fn: Ve((tn) => [
            ge(ne.$slots, ye, ht(Pt(tn)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (I(), Ae(_o(ne.teleport ? bc : "div"), ht(Pt(U.value)), {
        default: Ve(() => [
          Xe(qn, {
            name: P(C)(P(w)),
            css: P(S) && !P(_).enabled
          }, {
            default: Ve(() => [
              s.value ? (I(), G("div", _t({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: d
              }, ve.value, {
                class: { "dp--menu-wrapper": !P(_).enabled },
                style: P(_).enabled ? void 0 : P(T)
              }), [
                Xe(ku, _t({
                  ref_key: "dpMenuRef",
                  ref: u
                }, ne.$props, {
                  "internal-model-value": P(f),
                  "onUpdate:internalModelValue": he[2] || (he[2] = (ye) => ct(f) ? f.value = ye : null),
                  class: { [Ie.value]: !0, "dp--menu-wrapper": ne.teleport },
                  "open-on-top": P(w),
                  "no-overlay-focus": Ee.value,
                  collapse: M.value,
                  onClosePicker: me,
                  onSelectDate: ie,
                  onAutoApply: ae,
                  onTimeUpdate: Te,
                  onFlowStep: he[3] || (he[3] = (ye) => ne.$emit("flow-step", ye)),
                  onUpdateMonthYear: he[4] || (he[4] = (ye) => ne.$emit("update-month-year", ye)),
                  onInvalidSelect: he[5] || (he[5] = (ye) => ne.$emit("invalid-select", P(f))),
                  onAutoApplyInvalid: he[6] || (he[6] = (ye) => ne.$emit("invalid-select", ye)),
                  onInvalidFixedRange: he[7] || (he[7] = (ye) => ne.$emit("invalid-fixed-range", ye)),
                  onRecalculatePosition: P(re),
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
                  qe(P(B), (ye, Bt) => ({
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
}), ql = /* @__PURE__ */ (() => {
  const e = N_;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), $_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ql
}, Symbol.toStringTag, { value: "Module" }));
Object.entries($_).forEach(([e, t]) => {
  e !== "default" && (ql[e] = t);
});
const V_ = { class: "input" }, I_ = ["value"], F_ = ["accept"], B_ = { key: 5 }, L_ = { key: 6 }, Y_ = {
  __name: "ValueSelector",
  props: /* @__PURE__ */ Ga({
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
    const t = e, n = Ja(e, "selectedValue"), r = Ja(e, "dataValue"), a = J(null);
    function o(E, V = c.value) {
      if (E == null || E === "") return !1;
      const h = Number(E);
      return Number.isFinite(h) && h >= V.rangemin && h <= V.rangemax;
    }
    function s() {
      a.value = r.value;
    }
    function l(E) {
      if (E.key !== "ArrowUp" && E.key !== "ArrowDown") return;
      const V = Number(r.value);
      if (!Number.isFinite(V)) return;
      const h = c.value, k = Number(E.currentTarget.step) || 1, A = V + (E.key === "ArrowUp" ? k : -k);
      o(A, h) || E.preventDefault();
    }
    function i(E) {
      var F, j;
      const V = c.value;
      if (o(r.value, V)) return;
      const h = a.value, k = o(h, V) ? h : Number(V.defaultFloat), A = (j = (F = E.relatedTarget) == null ? void 0 : F.closest) == null ? void 0 : j.call(F, "[data-poris-command]");
      A ? window.confirm(
        "This value is outside the active range. Restore the previous value and continue with the command? Choose Cancel to cancel the command."
      ) || (A.dataset.porisCommandCancelled = "true") : window.alert("This value is outside the active range. The previous value will be restored."), r.value = k;
    }
    const d = J(t.mode), u = Z(() => d.value.hasValues ? d.value.valuesNodes : []), c = Z(() => n.value || d.value.defaultValue || u.value[0]), p = () => {
      var E;
      return ((E = c.value) == null ? void 0 : E.type) === Dr;
    }, b = () => {
      var E;
      return ((E = c.value) == null ? void 0 : E.type) === cr;
    }, g = () => {
      var E;
      return ((E = c.value) == null ? void 0 : E.type) === Er;
    }, y = () => {
      var E;
      return ((E = c.value) == null ? void 0 : E.type) === Or;
    }, M = () => {
      var E;
      return ((E = c.value) == null ? void 0 : E.type) === ao;
    };
    return rt(
      () => t.mode,
      (E) => {
        console.log("watch.mode", E), d.value = E;
      }
    ), rt(u, (E, V) => {
      console.log(`values mode: ${d.value.id}, changed/oldVal:`, E, V);
    }), (E, V) => (I(), G("div", V_, [
      u.value.length > 1 ? bn((I(), G("select", {
        key: 0,
        "onUpdate:modelValue": V[0] || (V[0] = (h) => n.value = h),
        class: "active-value-selector"
      }, [
        (I(!0), G(_e, null, qe(u.value, (h) => (I(), G("option", {
          key: h.id,
          value: h
        }, He(h.name), 9, I_))), 128))
      ], 512)), [
        [Cc, n.value]
      ]) : Q("", !0),
      p() ? bn((I(), G("input", {
        key: 1,
        "onUpdate:modelValue": V[1] || (V[1] = (h) => r.value = h),
        type: "text"
      }, null, 512)), [
        [Es, r.value]
      ]) : b() ? (I(), Ae(Ng, {
        modelValue: r.value,
        "onUpdate:modelValue": V[2] || (V[2] = (h) => r.value = h),
        step: ".01",
        min: c.value.rangemin,
        max: c.value.rangemax,
        label: c.value.name,
        key: c.value.id,
        onFocus: s,
        onKeydown: l,
        onBlur: i
      }, null, 8, ["modelValue", "min", "max", "label"])) : y() ? (I(), Ae(P(ql), {
        key: 3,
        modelValue: r.value,
        "onUpdate:modelValue": V[3] || (V[3] = (h) => r.value = h),
        min: c.value.datemin,
        max: c.value.datemax,
        "enable-seconds": "",
        "is-24": ""
      }, null, 8, ["modelValue", "min", "max"])) : g() ? (I(), G("input", {
        key: 4,
        type: "file",
        accept: c.value.fileExtension
      }, null, 8, F_)) : M() && u.value.length === 1 ? (I(), G("span", B_, He(c.value.name), 1)) : c.value ? Q("", !0) : (I(), G("span", L_, "No values!")),
      Jt(" " + He(" "))
    ]));
  }
}, H_ = /* @__PURE__ */ $o(Y_, [["__scopeId", "data-v-dab0e1db"]]), j_ = { class: "input-mode-panel" }, U_ = { class: "title" }, W_ = {
  key: 0,
  class: "command-buttons"
}, q_ = ["onClick"], z_ = { class: "value-selector" }, G_ = {
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
    function o(g, y) {
      return y.length > 1 || n(g) || r(g);
    }
    const s = Sl(), l = e, i = t;
    function d(g, y) {
      if (y.currentTarget.dataset.porisCommandCancelled === "true") {
        delete y.currentTarget.dataset.porisCommandCancelled;
        return;
      }
      i("command-launched", {
        systemId: l.subsystem.id,
        systemName: l.subsystem.name,
        commandId: g.id,
        commandName: g.name
      });
    }
    const u = J(l.mode), c = J(null), p = J(null);
    function b(g = null) {
      const y = s.getSystemValue(l.subsystem, u.value, g);
      c.value = y.value, p.value = y.data;
    }
    return b(), rt(c, (g) => {
      if (g) {
        const y = s.getSystemValue(l.subsystem, u.value, g);
        p.value !== y.data && (p.value = y.data);
      }
    }, { flush: "sync" }), rt(p, (g) => {
      c.value && s.setSystemValue(l.subsystem, c.value, g);
    }, { flush: "sync" }), rt(
      () => s.systemValues[`${l.subsystem.id}`],
      (g) => {
        var y, M;
        g && (((y = c.value) == null ? void 0 : y.id) !== ((M = g.value) == null ? void 0 : M.id) && (c.value = g.value), p.value !== g.data && (p.value = g.data));
      },
      { flush: "sync" }
    ), rt(u, (g) => {
      console.log("watch_input: currentMode.set() mode:", g), b();
    }), rt(
      () => l.mode,
      (g) => {
        console.log("new props.mode:", g), u.value = g;
      }
    ), (g, y) => {
      var M, E;
      return I(), G("div", {
        class: $e(["inputsystem-panel", { "has-commands": (M = e.subsystem.commandsNodes) == null ? void 0 : M.length }])
      }, [
        be("div", j_, [
          be("span", U_, He(e.subsystem.label || e.subsystem.name), 1),
          (E = e.subsystem.commandsNodes) != null && E.length ? (I(), G("span", W_, [
            (I(!0), G(_e, null, qe(e.subsystem.commandsNodes, (V) => (I(), G("button", {
              key: V.id,
              type: "button",
              "data-poris-command": "",
              onClick: (h) => d(V, h)
            }, He(V.label || V.name), 9, q_))), 128))
          ])) : Q("", !0),
          be("span", z_, [
            o(e.subsystem, e.modes) ? (I(), Ae(_d, {
              key: 0,
              class: "mode-selector",
              modelValue: u.value,
              "onUpdate:modelValue": y[0] || (y[0] = (V) => u.value = V),
              modes: e.modes
            }, null, 8, ["modelValue", "modes"])) : Q("", !0),
            a(e.subsystem) ? (I(), Ae(H_, {
              key: 1,
              mode: u.value,
              "selected-value": c.value,
              "onUpdate:selectedValue": y[1] || (y[1] = (V) => c.value = V),
              "data-value": p.value,
              "onUpdate:dataValue": y[2] || (y[2] = (V) => p.value = V)
            }, null, 8, ["mode", "selected-value", "data-value"])) : Q("", !0)
          ])
        ])
      ], 2);
    };
  }
}, Mu = /* @__PURE__ */ $o(G_, [["__scopeId", "data-v-055e32bf"]]), K_ = {
  key: 0,
  class: "subsystem-panel"
}, X_ = { class: "subsystem-heading" }, Q_ = {
  key: 0,
  class: "title"
}, J_ = {
  key: 1,
  class: "command-buttons"
}, Z_ = ["onClick"], e1 = {
  key: 0,
  class: "mode-selector"
}, t1 = {
  __name: "SubSystemPanel",
  props: {
    system: {
      type: Object,
      required: !1
    }
  },
  emits: ["command-launched"],
  setup(e, { emit: t }) {
    function n(y) {
      return !y.hasRealValues && y.hasValues && y.currentMode.hasValues;
    }
    function r(y) {
      return !y.hasRealValues && !y.currentMode.hasValues && !y.currentMode.hasModes && !y.hasSubsystems;
    }
    function a(y) {
      return !o(y);
      //!s0.hasRealValues && !(s1.hasRealValues || fakeParam(s1)) && !fakeParamWithNoValue(s0)
    }
    function o(y) {
      var M;
      return y.hasRealValues || n(y) || r(y) || !y.hasSubsystems && ((M = y.currentMode) == null ? void 0 : M.hasValues);
    }
    function s(y) {
      return !y.currentMode.hasValues && !y.currentMode.hasModes || y.getValidModes().length > 1;
    }
    function l(y) {
      return y.getValidModes().length > 0 && !y.hasRealValues;
    }
    const i = Sl(), d = e, u = t, p = J(d.system).value;
    p.candidateMode = p.currentMode;
    const b = Z(() => {
      const y = p.currentMode, M = new Set(((y == null ? void 0 : y.modesNodes) || []).map((E) => E.id));
      return (p.subsystemsNodes || []).filter(
        (E) => (E.modesNodes || []).some((V) => M.has(V.id))
      );
    });
    function g(y, M) {
      if (M.currentTarget.dataset.porisCommandCancelled === "true") {
        delete M.currentTarget.dataset.porisCommandCancelled;
        return;
      }
      u("command-launched", {
        systemId: p.id,
        systemName: p.name,
        commandId: y.id,
        commandName: y.name
      });
    }
    return rt(() => p.candidateMode, () => {
      var y, M;
      hn(
        `watch.mode. mode ${(y = p.currentMode) == null ? void 0 : y.name}, newMode :${(M = p.candidateMode) == null ? void 0 : M.name}`
      ), p.candidateMode != null && p.candidateMode != p.currentMode && (i.setValidMode(p, p.candidateMode), hn(`watch result >> ${p.currentMode.name}`));
    }), (y, M) => {
      var V;
      const E = mp("SubSystemPanel", !0);
      return I(), G(_e, null, [
        l(P(p)) ? (I(), G("div", K_, [
          be("div", X_, [
            P(p).label != "-" ? (I(), G("h3", Q_, He(P(p).label || P(p).name), 1)) : Q("", !0),
            (V = P(p).commandsNodes) != null && V.length ? (I(), G("div", J_, [
              (I(!0), G(_e, null, qe(P(p).commandsNodes, (h) => (I(), G("button", {
                key: h.id,
                type: "button",
                "data-poris-command": "",
                onClick: (k) => g(h, k)
              }, He(h.label || h.name), 9, Z_))), 128))
            ])) : Q("", !0)
          ]),
          s(P(p)) ? (I(), G("div", e1, [
            Xe(_d, {
              modelValue: P(p).candidateMode,
              "onUpdate:modelValue": M[0] || (M[0] = (h) => P(p).candidateMode = h),
              modes: P(p).getValidModes()
            }, null, 8, ["modelValue", "modes"])
          ])) : Q("", !0),
          (I(!0), G(_e, null, qe(b.value, (h) => (I(), G(_e, {
            key: h.id
          }, [
            a(h) ? (I(), Ae(E, {
              key: 0,
              system: h,
              onCommandLaunched: M[1] || (M[1] = (k) => u("command-launched", k))
            }, null, 8, ["system"])) : Q("", !0),
            o(h) ? (I(), Ae(Mu, {
              key: 1,
              subsystem: h,
              modes: h.getValidModes(),
              mode: h.currentMode,
              onCommandLaunched: M[2] || (M[2] = (k) => u("command-launched", k))
            }, null, 8, ["subsystem", "modes", "mode"])) : Q("", !0)
          ], 64))), 128))
        ])) : Q("", !0),
        o(P(p)) ? (I(), Ae(Mu, {
          key: 1,
          subsystem: P(p),
          modes: P(p).getValidModes(),
          mode: P(p).currentMode,
          onCommandLaunched: M[3] || (M[3] = (h) => u("command-launched", h))
        }, null, 8, ["subsystem", "modes", "mode"])) : Q("", !0)
      ], 64);
    };
  }
}, Yo = "";
function n1() {
  return !!Yo;
}
function Tu(e, { url: t, csrfToken: n } = {}) {
  const r = t || `${Yo}/api/poris/commit`, a = n ? { "X-CSRF-Token": n } : {};
  return st.post(r, e, { headers: a }).then((o) => o.data);
}
function r1(e) {
  return st.post(`${Yo}/api/poris/command/${e}`, {}).then((t) => t.data);
}
function a1() {
  return st.get(`${Yo}/api/poris/state`).then((e) => e.data);
}
const o1 = (e) => (ip("data-v-c5b3237f"), e = e(), up(), e), s1 = {
  key: 0,
  class: "loading"
}, l1 = /* @__PURE__ */ o1(() => /* @__PURE__ */ be("span", { class: "spinner" }, null, -1)), i1 = [
  l1
], u1 = {
  key: 1,
  class: "panel"
}, c1 = { class: "title" }, d1 = {
  key: 0,
  class: "monitor-capsules"
}, f1 = { class: "monitor-name" }, p1 = { class: "monitor-value" }, m1 = {
  key: 1,
  class: "actions"
}, h1 = ["disabled"], v1 = ["disabled"], y1 = ["disabled"], g1 = {
  key: 2,
  class: "status command-message"
}, b1 = {
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
    const n = Sl(), r = Z(() => n.isLoading), a = Z(() => n.rootSubsystem), o = J(!1), s = J(""), l = J(""), i = J(!1), d = n1(), u = Z(() => !!y.commitUrl || d), c = "", p = J([]), b = Z(() => p.value.filter((S) => S.visible));
    let g = null;
    const y = e, M = t;
    function E(S) {
      var w, T, q;
      const B = n.systemValues[`${S.id}`], $ = (B == null ? void 0 : B.value) || ((w = S.currentMode) == null ? void 0 : w.defaultValue) || ((q = (T = S.currentMode) == null ? void 0 : T.valuesNodes) == null ? void 0 : q[0]);
      return $ ? typeof (B == null ? void 0 : B.data) == "number" ? {
        number: B.data,
        name: $.name,
        id: $.id,
        type: $.type
      } : $.type === "ValueString" || $.type === "ValueFilePath" ? { data: (B == null ? void 0 : B.data) ?? "", name: $.name, id: $.id, type: $.type } : { name: $.name, id: $.id, type: $.type } : null;
    }
    function V(S) {
      return {
        id: S.id,
        name: S.name,
        mode: S.currentMode ? { id: S.currentMode.id, name: S.currentMode.name } : null,
        value: E(S),
        subsystems: (S.subsystemsNodes || []).map(V)
      };
    }
    function h() {
      return {
        root: V(a.value)
      };
    }
    async function k() {
      if (d)
        try {
          const S = await a1();
          p.value = (S == null ? void 0 : S.monitors) || [];
        } catch {
          p.value = [];
        }
    }
    async function A(S, B) {
      var $, w;
      o.value = !0, i.value = !1, s.value = "";
      try {
        const T = await S();
        return s.value = B, T;
      } catch (T) {
        i.value = !0, s.value = ((w = ($ = T == null ? void 0 : T.response) == null ? void 0 : $.data) == null ? void 0 : w.error) || T.message || String(T);
      } finally {
        o.value = !1;
      }
    }
    async function F() {
      const S = await A(
        () => Tu(h(), { url: y.commitUrl, csrfToken: y.csrfToken }),
        "Commit applied to the PORIS runtime"
      );
      S != null && S.state && (n.applyRuntimeState(S.state), M("committed", S));
    }
    function j(S) {
      A(() => r1(S), `${S} executed`);
    }
    async function _({ systemId: S, systemName: B, commandId: $, commandName: w }) {
      var T;
      if (i.value = !1, y.commitUrl) {
        const q = await A(
          () => Tu(
            {
              ...h(),
              operations: [{ type: "invoke_command", node_id: S, command_id: $ }]
            },
            { url: y.commitUrl, csrfToken: y.csrfToken }
          ),
          `Command ${B}.${w} sent to the PORIS runtime`
        );
        q != null && q.state && (n.applyRuntimeState(q.state), M("committed", q));
        const re = (T = q == null ? void 0 : q.operations) == null ? void 0 : T.find((fe) => fe.type === "invoke_command");
        re != null && re.accepted ? l.value = `We launched ${B}.${w}` : re && (i.value = !0, s.value = re.reason || "The PORIS command was rejected");
        return;
      }
      l.value = `We launched ${B}.${w}`;
    }
    function O() {
      l.value = "";
    }
    function W() {
      s.value = "", i.value = !1, C();
    }
    function C() {
      y.modelXml ? n.loadModelXML(y.modelXml) : y.modelPath && n.loadModelURL(y.modelPath);
    }
    return (y.modelXml || y.modelPath) && C(), rt(
      () => n.rootSubsystem,
      (S) => {
        S && y.initialState.length && n.applyRuntimeState(y.initialState);
      },
      { immediate: !0 }
    ), xt(() => {
      k(), d && (g = window.setInterval(k, 1e3));
    }), Mo(() => {
      g && window.clearInterval(g);
    }), (S, B) => (I(), G("div", {
      class: $e(["poris-main", { compact: y.compact }]),
      onClickCapture: O,
      onKeydownCapture: O
    }, [
      r.value ? (I(), G("div", s1, i1)) : a.value ? (I(), G("div", u1, [
        be("h2", c1, He(a.value.name) + " Panel", 1),
        b.value.length ? (I(), G("div", d1, [
          (I(!0), G(_e, null, qe(b.value, ($) => (I(), G("div", {
            key: $.id,
            class: "monitor-capsule"
          }, [
            be("span", f1, He($.label), 1),
            be("span", p1, He($.value), 1)
          ]))), 128))
        ])) : Q("", !0),
        Xe(t1, {
          system: a.value,
          onCommandLaunched: _
        }, null, 8, ["system"]),
        u.value || P(d) ? (I(), G("div", m1, [
          u.value ? (I(), G("button", {
            key: 0,
            type: "button",
            disabled: o.value,
            onClick: F
          }, He(y.commitUrl ? "Commit" : "Commit changes"), 9, h1)) : Q("", !0),
          P(d) ? (I(), G("button", {
            key: 1,
            type: "button",
            disabled: o.value,
            onClick: W
          }, "Cancel", 8, v1)) : Q("", !0),
          P(c) ? (I(), G("button", {
            key: 2,
            type: "button",
            disabled: o.value,
            onClick: B[0] || (B[0] = ($) => j(P(c)))
          }, He(P(c)), 9, y1)) : Q("", !0)
        ])) : Q("", !0),
        l.value ? (I(), G("div", g1, He(l.value), 1)) : Q("", !0),
        s.value ? (I(), G("div", {
          key: 3,
          class: $e(["status", { error: i.value }])
        }, He(s.value), 3)) : Q("", !0)
      ])) : Q("", !0)
    ], 34));
  }
}, w1 = /* @__PURE__ */ $o(b1, [["__scopeId", "data-v-c5b3237f"]]);
function x1(e, t, n = {}) {
  const { debug: r = !1, compact: a = !1, commitUrl: o = "", csrfToken: s = "", initialState: l = [], modelXml: i = "", onCommit: d } = n;
  Sg(r);
  const c = Hm(w1, { modelPath: e, modelXml: i, compact: a, commitUrl: o, csrfToken: s, initialState: l, onCommitted: d });
  return c.use(qm()), c.mount(t), c;
}
export {
  x1 as createPorisViewerPanel
};
