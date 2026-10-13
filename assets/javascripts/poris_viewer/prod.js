var of = Object.defineProperty;
var sf = (e, t, n) => t in e ? of(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var fe = (e, t, n) => sf(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function js(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const Je = {}, kr = [], Yt = () => {
}, lf = () => !1, io = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Us = (e) => e.startsWith("onUpdate:"), yt = Object.assign, Ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, uf = Object.prototype.hasOwnProperty, Ye = (e, t) => uf.call(e, t), ke = Array.isArray, Mr = (e) => ga(e) === "[object Map]", uo = (e) => ga(e) === "[object Set]", Ul = (e) => ga(e) === "[object Date]", Ae = (e) => typeof e == "function", at = (e) => typeof e == "string", Bn = (e) => typeof e == "symbol", Xe = (e) => e !== null && typeof e == "object", Mu = (e) => (Xe(e) || Ae(e)) && Ae(e.then) && Ae(e.catch), Tu = Object.prototype.toString, ga = (e) => Tu.call(e), cf = (e) => ga(e).slice(8, -1), Pu = (e) => ga(e) === "[object Object]", qs = (e) => at(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xr = /* @__PURE__ */ js(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), co = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, df = /-(\w)/g, Qt = co((e) => e.replace(df, (t, n) => n ? n.toUpperCase() : "")), ff = /\B([A-Z])/g, Un = co(
  (e) => e.replace(ff, "-$1").toLowerCase()
), fo = co((e) => e.charAt(0).toUpperCase() + e.slice(1)), Bo = co((e) => e ? `on${fo(e)}` : ""), pn = (e, t) => !Object.is(e, t), Va = (e, t) => {
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
}, pf = (e) => {
  const t = at(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Wl;
const Su = () => Wl || (Wl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Dt(e) {
  if (ke(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = at(r) ? yf(r) : Dt(r);
      if (a)
        for (const o in a)
          t[o] = a[o];
    }
    return t;
  } else if (at(e) || Xe(e))
    return e;
}
const mf = /;(?![^(]*\))/g, hf = /:([^]+)/, vf = /\/\*[^]*?\*\//g;
function yf(e) {
  const t = {};
  return e.replace(vf, "").split(mf).forEach((n) => {
    if (n) {
      const r = n.split(hf);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function $e(e) {
  let t = "";
  if (at(e))
    t = e;
  else if (ke(e))
    for (let n = 0; n < e.length; n++) {
      const r = $e(e[n]);
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
  return t && !at(t) && (e.class = $e(t)), n && (e.style = Dt(n)), e;
}
const gf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", bf = /* @__PURE__ */ js(gf);
function Au(e) {
  return !!e || e === "";
}
function wf(e, t) {
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
  if (n = ke(e), r = ke(t), n || r)
    return n && r ? wf(e, t) : !1;
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
function _f(e, t) {
  return e.findIndex((n) => po(n, t));
}
const We = (e) => at(e) ? e : e == null ? "" : ke(e) || Xe(e) && (e.toString === Tu || !Ae(e.toString)) ? JSON.stringify(e, Du, 2) : String(e), Du = (e, t) => t && t.__v_isRef ? Du(e, t.value) : Mr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, a], o) => (n[Lo(r, o) + " =>"] = a, n),
    {}
  )
} : uo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Lo(n))
} : Bn(t) ? Lo(t) : Xe(t) && !ke(t) && !Pu(t) ? String(t) : t, Lo = (e, t = "") => {
  var n;
  return Bn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let $t;
class Cu {
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
function Ou(e) {
  return new Cu(e);
}
function xf(e, t = $t) {
  t && t.active && t.effects.push(e);
}
function zs() {
  return $t;
}
function Eu(e) {
  $t && $t.cleanups.push(e);
}
let ir;
class Gs {
  constructor(t, n, r, a) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, xf(this, a);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Wn();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (kf(n.computed), this._dirtyLevel >= 4))
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
function kf(e) {
  return e.value;
}
function ql(e) {
  e._trackId++, e._depsLength = 0;
}
function zl(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Ru(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Ru(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let cn = !0, ms = 0;
const Ks = [];
function Wn() {
  Ks.push(cn), cn = !1;
}
function Mf() {
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
    r !== t ? (r && Ru(r, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const hs = [];
function $u(e, t, n) {
  Qs();
  for (const r of e.keys()) {
    let a;
    r._dirtyLevel < t && (a ?? (a = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (a ?? (a = e.get(r) === r._trackId)) && (r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && hs.push(r.scheduler)));
  }
  Xs();
}
const Vu = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, ja = /* @__PURE__ */ new WeakMap(), ur = Symbol(""), vs = Symbol("");
function Nt(e, t, n) {
  if (cn && ir) {
    let r = ja.get(e);
    r || ja.set(e, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || r.set(n, a = Vu(() => r.delete(n))), Nu(
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
    s.forEach((c, u) => {
      (u === "length" || !Bn(u) && u >= i) && l.push(c);
    });
  } else
    switch (n !== void 0 && l.push(s.get(n)), t) {
      case "add":
        ke(e) ? qs(n) && l.push(s.get("length")) : (l.push(s.get(ur)), Mr(e) && l.push(s.get(vs)));
        break;
      case "delete":
        ke(e) || (l.push(s.get(ur)), Mr(e) && l.push(s.get(vs)));
        break;
      case "set":
        Mr(e) && l.push(s.get(ur));
        break;
    }
  Qs();
  for (const i of l)
    i && $u(
      i,
      4
    );
  Xs();
}
function Tf(e, t) {
  var n;
  return (n = ja.get(e)) == null ? void 0 : n.get(t);
}
const Pf = /* @__PURE__ */ js("__proto__,__v_isRef,__isVue"), Fu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bn)
), Gl = /* @__PURE__ */ Sf();
function Sf() {
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
      Wn(), Qs();
      const r = Le(this)[t].apply(this, n);
      return Xs(), hr(), r;
    };
  }), e;
}
function Af(e) {
  const t = Le(this);
  return Nt(t, "has", e), t.hasOwnProperty(e);
}
class Iu {
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
      return r === (a ? o ? Yf : Hu : o ? Yu : Lu).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = ke(t);
    if (!a) {
      if (s && Ye(Gl, n))
        return Reflect.get(Gl, n, r);
      if (n === "hasOwnProperty")
        return Af;
    }
    const l = Reflect.get(t, n, r);
    return (Bn(n) ? Fu.has(n) : Pf(n)) || (a || Nt(t, "get", n), o) ? l : ut(l) ? s && qs(n) ? l : l.value : Xe(l) ? a ? ju(l) : bn(l) : l;
  }
}
class Bu extends Iu {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, a) {
    let o = t[n];
    if (!this._isShallow) {
      const i = Dr(o);
      if (!Ua(r) && !Dr(r) && (o = Le(o), r = Le(r)), !ke(t) && ut(o) && !ut(r))
        return i ? !1 : (o.value = r, !0);
    }
    const s = ke(t) && qs(n) ? Number(n) < t.length : Ye(t, n), l = Reflect.set(t, n, r, a);
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
    return (!Bn(n) || !Fu.has(n)) && Nt(t, "has", n), r;
  }
  ownKeys(t) {
    return Nt(
      t,
      "iterate",
      ke(t) ? "length" : ur
    ), Reflect.ownKeys(t);
  }
}
class Df extends Iu {
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
const Cf = /* @__PURE__ */ new Bu(), Of = /* @__PURE__ */ new Df(), Ef = /* @__PURE__ */ new Bu(
  !0
), Js = (e) => e, mo = (e) => Reflect.getPrototypeOf(e);
function Ta(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const a = Le(e), o = Le(t);
  n || (pn(t, o) && Nt(a, "get", t), Nt(a, "get", o));
  const { has: s } = mo(a), l = r ? Js : n ? tl : ia;
  if (s.call(a, t))
    return l(e.get(t));
  if (s.call(a, o))
    return l(e.get(o));
  e !== a && e.get(t);
}
function Pa(e, t = !1) {
  const n = this.__v_raw, r = Le(n), a = Le(e);
  return t || (pn(e, a) && Nt(r, "has", e), Nt(r, "has", a)), e === a ? n.has(e) : n.has(e) || n.has(a);
}
function Sa(e, t = !1) {
  return e = e.__v_raw, !t && Nt(Le(e), "iterate", ur), Reflect.get(e, "size", e);
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
    return !e && Nt(l, "iterate", ur), s.forEach((c, u) => r.call(a, i(c), i(u), o));
  };
}
function Da(e, t, n) {
  return function(...r) {
    const a = this.__v_raw, o = Le(a), s = Mr(o), l = e === "entries" || e === Symbol.iterator && s, i = e === "keys" && s, c = a[e](...r), u = n ? Js : t ? tl : ia;
    return !t && Nt(
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
function Rf() {
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
  $f,
  Vf,
  Ff
] = /* @__PURE__ */ Rf();
function Zs(e, t) {
  const n = t ? e ? Ff : Vf : e ? $f : Nf;
  return (r, a, o) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(
    Ye(n, a) && a in r ? n : r,
    a,
    o
  );
}
const If = {
  get: /* @__PURE__ */ Zs(!1, !1)
}, Bf = {
  get: /* @__PURE__ */ Zs(!1, !0)
}, Lf = {
  get: /* @__PURE__ */ Zs(!0, !1)
}, Lu = /* @__PURE__ */ new WeakMap(), Yu = /* @__PURE__ */ new WeakMap(), Hu = /* @__PURE__ */ new WeakMap(), Yf = /* @__PURE__ */ new WeakMap();
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
function jf(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Hf(cf(e));
}
function bn(e) {
  return Dr(e) ? e : el(
    e,
    !1,
    Cf,
    If,
    Lu
  );
}
function Uf(e) {
  return el(
    e,
    !1,
    Ef,
    Bf,
    Yu
  );
}
function ju(e) {
  return el(
    e,
    !0,
    Of,
    Lf,
    Hu
  );
}
function el(e, t, n, r, a) {
  if (!Xe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = a.get(e);
  if (o)
    return o;
  const s = jf(e);
  if (s === 0)
    return e;
  const l = new Proxy(
    e,
    s === 2 ? r : n
  );
  return a.set(e, l), l;
}
function Nn(e) {
  return Dr(e) ? Nn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Dr(e) {
  return !!(e && e.__v_isReadonly);
}
function Ua(e) {
  return !!(e && e.__v_isShallow);
}
function Uu(e) {
  return Nn(e) || Dr(e);
}
function Le(e) {
  const t = e && e.__v_raw;
  return t ? Le(t) : e;
}
function ho(e) {
  return Object.isExtensible(e) && Ha(e, "__v_skip", !0), e;
}
const ia = (e) => Xe(e) ? bn(e) : e, tl = (e) => Xe(e) ? ju(e) : e;
class Wu {
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
function Wf(e, t, n = !1) {
  let r, a;
  const o = Ae(e);
  return o ? (r = e, a = Yt) : (r = e.get, a = e.set), new Wu(r, a, o || !a, n);
}
function nl(e) {
  var t;
  cn && ir && (e = Le(e), Nu(
    ir,
    (t = e.dep) != null ? t : e.dep = Vu(
      () => e.dep = void 0,
      e instanceof Wu ? e : void 0
    )
  ));
}
function Tr(e, t = 4, n) {
  e = Le(e);
  const r = e.dep;
  r && $u(
    r,
    t
  );
}
function ut(e) {
  return !!(e && e.__v_isRef === !0);
}
function J(e) {
  return qf(e, !1);
}
function qf(e, t) {
  return ut(e) ? e : new zf(e, t);
}
class zf {
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
function M(e) {
  return ut(e) ? e.value : e;
}
const Gf = {
  get: (e, t, n) => M(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const a = e[t];
    return ut(a) && !ut(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function qu(e) {
  return Nn(e) ? e : new Proxy(e, Gf);
}
class Kf {
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
function Qf(e) {
  return new Kf(e);
}
function Xf(e) {
  const t = ke(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = zu(e, n);
  return t;
}
class Jf {
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
    return Tf(Le(this._object), this._key);
  }
}
class Zf {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Wa(e, t, n) {
  return ut(e) ? e : Ae(e) ? new Zf(e) : Xe(e) && arguments.length > 1 ? zu(e, t, n) : J(e);
}
function zu(e, t, n) {
  const r = e[t];
  return ut(r) ? r : new Jf(e, t, n);
}
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function $n(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (a) {
    vo(a, t, n);
  }
}
function Ht(e, t, n, r) {
  if (Ae(e)) {
    const o = $n(e, t, n, r);
    return o && Mu(o) && o.catch((s) => {
      vo(s, t, n);
    }), o;
  }
  const a = [];
  for (let o = 0; o < e.length; o++)
    a.push(Ht(e[o], t, n, r));
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
      $n(
        i,
        null,
        10,
        [e, s, l]
      );
      return;
    }
  }
  ep(e, n, a, r);
}
function ep(e, t, n, r = !0) {
  console.error(e);
}
let ua = !1, ys = !1;
const Tt = [];
let on = 0;
const Pr = [];
let Dn = null, nr = 0;
const Gu = /* @__PURE__ */ Promise.resolve();
let rl = null;
function Xt(e) {
  const t = rl || Gu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function tp(e) {
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
  )) && (e.id == null ? Tt.push(e) : Tt.splice(tp(e.id), 0, e), Ku());
}
function Ku() {
  !ua && !ys && (ys = !0, rl = Gu.then(Xu));
}
function np(e) {
  const t = Tt.indexOf(e);
  t > on && Tt.splice(t, 1);
}
function rp(e) {
  ke(e) ? Pr.push(...e) : (!Dn || !Dn.includes(
    e,
    e.allowRecurse ? nr + 1 : nr
  )) && Pr.push(e), Ku();
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
function Qu(e) {
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
const ca = (e) => e.id == null ? 1 / 0 : e.id, ap = (e, t) => {
  const n = ca(e) - ca(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Xu(e) {
  ys = !1, ua = !0, Tt.sort(ap);
  try {
    for (on = 0; on < Tt.length; on++) {
      const t = Tt[on];
      t && t.active !== !1 && $n(t, null, 14);
    }
  } finally {
    on = 0, Tt.length = 0, Qu(), ua = !1, rl = null, (Tt.length || Pr.length) && Xu();
  }
}
function op(e, t, ...n) {
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
  !i && o && (i = r[l = Bo(Un(t))]), i && Ht(
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
    e.emitted[l] = !0, Ht(
      c,
      e,
      6,
      a
    );
  }
}
function Ju(e, t, n = !1) {
  const r = t.emitsCache, a = r.get(e);
  if (a !== void 0)
    return a;
  const o = e.emits;
  let s = {}, l = !1;
  if (!Ae(e)) {
    const i = (c) => {
      const u = Ju(c, t, !0);
      u && (l = !0, yt(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(i), e.extends && i(e.extends), e.mixins && e.mixins.forEach(i);
  }
  return !o && !l ? (Xe(e) && r.set(e, null), null) : (ke(o) ? o.forEach((i) => s[i] = null) : yt(s, o), Xe(e) && r.set(e, s), s);
}
function yo(e, t) {
  return !e || !io(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ye(e, t[0].toLowerCase() + t.slice(1)) || Ye(e, Un(t)) || Ye(e, t));
}
let vt = null, go = null;
function qa(e) {
  const t = vt;
  return vt = e, go = e && e.type.__scopeId || null, t;
}
function sp(e) {
  go = e;
}
function lp() {
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
  let D, N;
  const O = qa(e);
  try {
    if (n.shapeFlag & 4) {
      const P = a || r, E = P;
      D = an(
        u.call(
          E,
          P,
          d,
          o,
          b,
          p,
          v
        )
      ), N = i;
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
      ), N = t.props ? i : ip(i);
    }
  } catch (P) {
    na.length = 0, vo(P, e, 1), D = Qe(jt);
  }
  let g = D;
  if (N && y !== !1) {
    const P = Object.keys(N), { shapeFlag: E } = g;
    P.length && E & 7 && (s && P.some(Us) && (N = up(
      N,
      s
    )), g = Ln(g, N));
  }
  return n.dirs && (g = Ln(g), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && (g.transition = n.transition), D = g, qa(O), D;
}
const ip = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || io(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, up = (e, t) => {
  const n = {};
  for (const r in e)
    (!Us(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function cp(e, t, n) {
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
function dp({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Zu = "components";
function fp(e, t) {
  return tc(Zu, e, !0, t) || e;
}
const ec = Symbol.for("v-ndc");
function bo(e) {
  return at(e) ? tc(Zu, e, !1) || e : e || ec;
}
function tc(e, t, n = !0, r = !1) {
  const a = vt || wt;
  if (a) {
    const o = a.type;
    {
      const l = um(
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
const pp = (e) => e.__isSuspense;
function mp(e, t) {
  t && t.pendingBranch ? ke(e) ? t.effects.push(...e) : t.effects.push(e) : rp(e);
}
const hp = Symbol.for("v-scx"), vp = () => ea(hp);
function yp(e, t) {
  return ol(
    e,
    null,
    { flush: "sync" }
  );
}
const Ca = {};
function ft(e, t, n) {
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
    const k = t;
    t = (...$) => {
      k(...$), E();
    };
  }
  const i = wt, c = (k) => r === !0 ? k : (
    // for deep: false, only traverse root-level properties
    or(k, r === !1 ? 1 : void 0)
  );
  let u, d = !1, p = !1;
  if (ut(e) ? (u = () => e.value, d = Ua(e)) : Nn(e) ? (u = () => c(e), d = !0) : ke(e) ? (p = !0, d = e.some((k) => Nn(k) || Ua(k)), u = () => e.map((k) => {
    if (ut(k))
      return k.value;
    if (Nn(k))
      return c(k);
    if (Ae(k))
      return $n(k, i, 2);
  })) : Ae(e) ? t ? u = () => $n(e, i, 2) : u = () => (b && b(), Ht(
    e,
    i,
    3,
    [v]
  )) : u = Yt, t && r) {
    const k = u;
    u = () => or(k());
  }
  let b, v = (k) => {
    b = g.onStop = () => {
      $n(k, i, 4), b = g.onStop = void 0;
    };
  }, y;
  if (Mo)
    if (v = Yt, t ? n && Ht(t, i, 3, [
      u(),
      p ? [] : void 0,
      v
    ]) : u(), a === "sync") {
      const k = vp();
      y = k.__watcherHandles || (k.__watcherHandles = []);
    } else
      return Yt;
  let D = p ? new Array(e.length).fill(Ca) : Ca;
  const N = () => {
    if (!(!g.active || !g.dirty))
      if (t) {
        const k = g.run();
        (r || d || (p ? k.some(($, _) => pn($, D[_])) : pn(k, D))) && (b && b(), Ht(t, i, 3, [
          k,
          // pass undefined as the old value when it's changed for the first time
          D === Ca ? void 0 : p && D[0] === Ca ? [] : D,
          v
        ]), D = k);
      } else
        g.run();
  };
  N.allowRecurse = !!t;
  let O;
  a === "sync" ? O = N : a === "post" ? O = () => Ot(N, i && i.suspense) : (N.pre = !0, i && (N.id = i.uid), O = () => al(N));
  const g = new Gs(u, Yt, O), P = zs(), E = () => {
    g.stop(), P && Ws(P.effects, g);
  };
  return t ? n ? N() : D = g.run() : a === "post" ? Ot(
    g.run.bind(g),
    i && i.suspense
  ) : g.run(), y && y.push(E), E;
}
function gp(e, t, n) {
  const r = this.proxy, a = at(e) ? e.includes(".") ? nc(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Ae(t) ? o = t : (o = t.handler, n = t);
  const s = ba(this), l = ol(a, o.bind(r), n);
  return s(), l;
}
function nc(e, t) {
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
  if (r.add(e), ut(e))
    or(e.value, t, n, r);
  else if (ke(e))
    for (let a = 0; a < e.length; a++)
      or(e[a], t, n, r);
  else if (uo(e) || Mr(e))
    e.forEach((a) => {
      or(a, t, n, r);
    });
  else if (Pu(e))
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
    i && (Wn(), Ht(i, n, 8, [
      e.el,
      l,
      e,
      t
    ]), hr());
  }
}
const Cn = Symbol("_leaveCb"), Oa = Symbol("_enterCb");
function bp() {
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
const Lt = [Function, Array], rc = {
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
}, wp = {
  name: "BaseTransition",
  props: rc,
  setup(e, { slots: t }) {
    const n = dl(), r = bp();
    return () => {
      const a = t.default && oc(t.default(), !0);
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
        return Ho(o);
      const i = ri(o);
      if (!i)
        return Ho(o);
      const c = gs(
        i,
        s,
        r,
        n
      );
      bs(i, c);
      const u = n.subTree, d = u && ri(u);
      if (d && d.type !== jt && !rr(i, d)) {
        const p = gs(
          d,
          s,
          r,
          n
        );
        if (bs(d, p), l === "out-in")
          return r.isLeaving = !0, p.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, Ho(o);
        l === "in-out" && i.type !== jt && (p.delayLeave = (b, v, y) => {
          const D = ac(
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
}, _p = wp;
function ac(e, t) {
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
    onAfterAppear: N,
    onAppearCancelled: O
  } = t, g = String(e.key), P = ac(n, e), E = (_, T) => {
    _ && Ht(
      _,
      r,
      9,
      T
    );
  }, k = (_, T) => {
    const W = T[1];
    E(_, T), ke(_) ? _.every((B) => B.length <= 1) && W() : _.length <= 1 && W();
  }, $ = {
    mode: o,
    persisted: s,
    beforeEnter(_) {
      let T = l;
      if (!n.isMounted)
        if (a)
          T = y || l;
        else
          return;
      _[Cn] && _[Cn](
        !0
        /* cancelled */
      );
      const W = P[g];
      W && rr(e, W) && W.el[Cn] && W.el[Cn](), E(T, [_]);
    },
    enter(_) {
      let T = i, W = c, B = u;
      if (!n.isMounted)
        if (a)
          T = D || i, W = N || c, B = O || u;
        else
          return;
      let V = !1;
      const j = _[Oa] = (U) => {
        V || (V = !0, U ? E(B, [_]) : E(W, [_]), $.delayedLeave && $.delayedLeave(), _[Oa] = void 0);
      };
      T ? k(T, [_, j]) : j();
    },
    leave(_, T) {
      const W = String(e.key);
      if (_[Oa] && _[Oa](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return T();
      E(d, [_]);
      let B = !1;
      const V = _[Cn] = (j) => {
        B || (B = !0, T(), j ? E(v, [_]) : E(b, [_]), _[Cn] = void 0, P[W] === e && delete P[W]);
      };
      P[W] = e, p ? k(p, [_, V]) : V();
    },
    clone(_) {
      return gs(_, t, n, r);
    }
  };
  return $;
}
function Ho(e) {
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
function oc(e, t = !1, n) {
  let r = [], a = 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    const l = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
    s.type === xe ? (s.patchFlag & 128 && a++, r = r.concat(
      oc(s.children, t, l)
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
  return Ae(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    yt({ name: e.name }, t, { setup: e })
  ) : e;
}
const Jr = (e) => !!e.type.__asyncLoader, wo = (e) => e.type.__isKeepAlive;
function xp(e, t) {
  sc(e, "a", t);
}
function kp(e, t) {
  sc(e, "da", t);
}
function sc(e, t, n = wt) {
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
      wo(a.parent.vnode) && Mp(r, t, n, a), a = a.parent;
  }
}
function Mp(e, t, n, r) {
  const a = _o(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ir(() => {
    Ws(r[t], a);
  }, n);
}
function _o(e, t, n = wt, r = !1) {
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
const wn = (e) => (t, n = wt) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Mo || e === "sp") && _o(e, (...r) => t(...r), n)
), Tp = wn("bm"), xt = wn("m"), lc = wn("bu"), Pp = wn("u"), sl = wn("bum"), Ir = wn("um"), Sp = wn("sp"), Ap = wn(
  "rtg"
), Dp = wn(
  "rtc"
);
function Cp(e, t = wt) {
  _o("ec", e, t);
}
function qe(e, t, n, r) {
  let a;
  const o = n;
  if (ke(e) || at(e)) {
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
    return t !== "default" && (n.name = t), Qe("slot", n, r);
  let o = e[t];
  o && o._c && (o._d = !1), F();
  const s = o && ic(o(n)), l = Ce(
    xe,
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
function ic(e) {
  return e.some((t) => Ka(t) ? !(t.type === jt || t.type === xe && !ic(t.children)) : !0) ? e : null;
}
const ws = (e) => e ? _c(e) ? To(e) || e.proxy : ws(e.parent) : null, Zr = (
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
    $watch: (e) => gp.bind(e)
  })
), jo = (e, t) => e !== Je && !e.__isScriptSetup && Ye(e, t), Op = {
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
        if (jo(r, t))
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
      return t === "$attrs" && Nt(e, "get", t), u(e);
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
    return jo(a, t) ? (a[t] = n, !0) : r !== Je && Ye(r, t) ? (r[t] = n, !0) : Ye(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, propsOptions: o }
  }, s) {
    let l;
    return !!n[s] || e !== Je && Ye(e, s) || jo(t, s) || (l = o[0]) && Ye(l, s) || Ye(r, s) || Ye(Zr, s) || Ye(a.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ye(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function vr() {
  return Ep().slots;
}
function Ep() {
  const e = dl();
  return e.setupContext || (e.setupContext = kc(e));
}
function za(e) {
  return ke(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function uc(e, t) {
  return !e || !t ? e || t : ke(e) && ke(t) ? e.concat(t) : yt({}, za(e), za(t));
}
let _s = !0;
function Rp(e) {
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
    beforeDestroy: N,
    beforeUnmount: O,
    destroyed: g,
    unmounted: P,
    render: E,
    renderTracked: k,
    renderTriggered: $,
    errorCaptured: _,
    serverPrefetch: T,
    // public API
    expose: W,
    inheritAttrs: B,
    // assets
    components: V,
    directives: j,
    filters: U
  } = t;
  if (c && Np(c, r, null), s)
    for (const G in s) {
      const se = s[G];
      Ae(se) && (r[G] = se.bind(n));
    }
  if (a) {
    const G = a.call(n, n);
    Xe(G) && (e.data = bn(G));
  }
  if (_s = !0, o)
    for (const G in o) {
      const se = o[G], pe = Ae(se) ? se.bind(n, n) : Ae(se.get) ? se.get.bind(n, n) : Yt, ee = !Ae(se) && Ae(se.set) ? se.set.bind(n) : Yt, m = re({
        get: pe,
        set: ee
      });
      Object.defineProperty(r, G, {
        enumerable: !0,
        configurable: !0,
        get: () => m.value,
        set: (f) => m.value = f
      });
    }
  if (l)
    for (const G in l)
      cc(l[G], r, n, G);
  if (i) {
    const G = Ae(i) ? i.call(n) : i;
    Reflect.ownKeys(G).forEach((se) => {
      Lp(se, G[se]);
    });
  }
  u && ai(u, e, "c");
  function S(G, se) {
    ke(se) ? se.forEach((pe) => G(pe.bind(n))) : se && G(se.bind(n));
  }
  if (S(Tp, d), S(xt, p), S(lc, b), S(Pp, v), S(xp, y), S(kp, D), S(Cp, _), S(Dp, k), S(Ap, $), S(sl, O), S(Ir, P), S(Sp, T), ke(W))
    if (W.length) {
      const G = e.exposed || (e.exposed = {});
      W.forEach((se) => {
        Object.defineProperty(G, se, {
          get: () => n[se],
          set: (pe) => n[se] = pe
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === Yt && (e.render = E), B != null && (e.inheritAttrs = B), V && (e.components = V), j && (e.directives = j);
}
function Np(e, t, n = Yt) {
  ke(e) && (e = xs(e));
  for (const r in e) {
    const a = e[r];
    let o;
    Xe(a) ? "default" in a ? o = ea(
      a.from || r,
      a.default,
      !0
    ) : o = ea(a.from || r) : o = ea(a), ut(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[r] = o;
  }
}
function ai(e, t, n) {
  Ht(
    ke(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function cc(e, t, n, r) {
  const a = r.includes(".") ? nc(n, r) : () => n[r];
  if (at(e)) {
    const o = t[e];
    Ae(o) && ft(a, o);
  } else if (Ae(e))
    ft(a, e.bind(n));
  else if (Xe(e))
    if (ke(e))
      e.forEach((o) => cc(o, t, n, r));
    else {
      const o = Ae(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ae(o) && ft(a, o, e);
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
      const l = $p[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const $p = {
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
  inject: Vp
};
function oi(e, t) {
  return t ? e ? function() {
    return yt(
      Ae(e) ? e.call(this, this) : e,
      Ae(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Vp(e, t) {
  return Kr(xs(e), xs(t));
}
function xs(e) {
  if (ke(e)) {
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
  return e ? ke(e) && ke(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yt(
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
function dc() {
  return {
    app: null,
    config: {
      isNativeTag: lf,
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
let Ip = 0;
function Bp(e, t) {
  return function(r, a = null) {
    Ae(r) || (r = yt({}, r)), a != null && !Xe(a) && (a = null);
    const o = dc(), s = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const i = o.app = {
      _uid: Ip++,
      _component: r,
      _props: a,
      _container: null,
      _context: o,
      _instance: null,
      version: dm,
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
function Lp(e, t) {
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
function Yp() {
  return !!(wt || vt || Sr);
}
function Hp(e, t, n, r = !1) {
  const a = {}, o = {};
  Ha(o, ko, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), fc(e, t, a, o);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = r ? a : Uf(a) : e.type.props ? e.props = a : e.props = o, e.attrs = o;
}
function jp(e, t, n, r) {
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
    fc(e, t, a, o) && (c = !0);
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
function fc(e, t, n, r) {
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
function pc(e, t, n = !1) {
  const r = t.propsCache, a = r.get(e);
  if (a)
    return a;
  const o = e.props, s = {}, l = [];
  let i = !1;
  if (!Ae(e)) {
    const u = (d) => {
      i = !0;
      const [p, b] = pc(d, t, !0);
      yt(s, p), b && l.push(...b);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !i)
    return Xe(e) && r.set(e, kr), kr;
  if (ke(o))
    for (let u = 0; u < o.length; u++) {
      const d = Qt(o[u]);
      li(d) && (s[d] = Je);
    }
  else if (o)
    for (const u in o) {
      const d = Qt(u);
      if (li(d)) {
        const p = o[u], b = s[d] = ke(p) || Ae(p) ? { type: p } : yt({}, p);
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
  return ke(t) ? t.findIndex((n) => ui(n, e)) : Ae(t) && ui(t, e) ? 0 : -1;
}
const mc = (e) => e[0] === "_" || e === "$stable", il = (e) => ke(e) ? e.map(an) : [an(e)], Up = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ve((...a) => il(t(...a)), n);
  return r._c = !1, r;
}, hc = (e, t, n) => {
  const r = e._ctx;
  for (const a in e) {
    if (mc(a))
      continue;
    const o = e[a];
    if (Ae(o))
      t[a] = Up(a, o, r);
    else if (o != null) {
      const s = il(o);
      t[a] = () => s;
    }
  }
}, vc = (e, t) => {
  const n = il(t);
  e.slots.default = () => n;
}, Wp = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = Le(t), Ha(t, "_", n)) : hc(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && vc(e, t);
  Ha(e.slots, ko, 1);
}, qp = (e, t, n) => {
  const { vnode: r, slots: a } = e;
  let o = !0, s = Je;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : (yt(a, t), !n && l === 1 && delete a._) : (o = !t.$stable, hc(t, a)), s = t;
  } else t && (vc(e, t), s = { default: 1 });
  if (o)
    for (const l in a)
      !mc(l) && s[l] == null && delete a[l];
};
function Ms(e, t, n, r, a = !1) {
  if (ke(e)) {
    e.forEach(
      (p, b) => Ms(
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
  const o = r.shapeFlag & 4 ? To(r.component) || r.component.proxy : r.el, s = a ? null : o, { i: l, r: i } = e, c = t && t.r, u = l.refs === Je ? l.refs = {} : l.refs, d = l.setupState;
  if (c != null && c !== i && (at(c) ? (u[c] = null, Ye(d, c) && (d[c] = null)) : ut(c) && (c.value = null)), Ae(i))
    $n(i, l, 12, [s, u]);
  else {
    const p = at(i), b = ut(i);
    if (p || b) {
      const v = () => {
        if (e.f) {
          const y = p ? Ye(d, i) ? d[i] : u[i] : i.value;
          a ? ke(y) && Ws(y, o) : ke(y) ? y.includes(o) || y.push(o) : p ? (u[i] = [o], Ye(d, i) && (d[i] = u[i])) : (i.value = [o], e.k && (u[e.k] = i.value));
        } else p ? (u[i] = s, Ye(d, i) && (d[i] = s)) : b && (i.value = s, e.k && (u[e.k] = s));
      };
      s ? (v.id = -1, Ot(v, n)) : v();
    }
  }
}
const Ot = mp;
function zp(e) {
  return Gp(e);
}
function Gp(e, t) {
  const n = Su();
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
  } = e, y = (h, w, I, K = null, C = null, ae = null, ie = void 0, le = null, ue = !!w.dynamicChildren) => {
    if (h === w)
      return;
    h && !rr(h, w) && (K = Oe(h), f(h, C, ae, !0), h = null), w.patchFlag === -2 && (ue = !1, w.dynamicChildren = null);
    const { type: ne, ref: de, shapeFlag: me } = w;
    switch (ne) {
      case xo:
        D(h, w, I, K);
        break;
      case jt:
        N(h, w, I, K);
        break;
      case Wo:
        h == null && O(w, I, K, ie);
        break;
      case xe:
        V(
          h,
          w,
          I,
          K,
          C,
          ae,
          ie,
          le,
          ue
        );
        break;
      default:
        me & 1 ? E(
          h,
          w,
          I,
          K,
          C,
          ae,
          ie,
          le,
          ue
        ) : me & 6 ? j(
          h,
          w,
          I,
          K,
          C,
          ae,
          ie,
          le,
          ue
        ) : (me & 64 || me & 128) && ne.process(
          h,
          w,
          I,
          K,
          C,
          ae,
          ie,
          le,
          ue,
          ve
        );
    }
    de != null && C && Ms(de, h && h.ref, ae, w || h, !w);
  }, D = (h, w, I, K) => {
    if (h == null)
      r(
        w.el = l(w.children),
        I,
        K
      );
    else {
      const C = w.el = h.el;
      w.children !== h.children && c(C, w.children);
    }
  }, N = (h, w, I, K) => {
    h == null ? r(
      w.el = i(w.children || ""),
      I,
      K
    ) : w.el = h.el;
  }, O = (h, w, I, K) => {
    [h.el, h.anchor] = v(
      h.children,
      w,
      I,
      K,
      h.el,
      h.anchor
    );
  }, g = ({ el: h, anchor: w }, I, K) => {
    let C;
    for (; h && h !== w; )
      C = p(h), r(h, I, K), h = C;
    r(w, I, K);
  }, P = ({ el: h, anchor: w }) => {
    let I;
    for (; h && h !== w; )
      I = p(h), a(h), h = I;
    a(w);
  }, E = (h, w, I, K, C, ae, ie, le, ue) => {
    w.type === "svg" ? ie = "svg" : w.type === "math" && (ie = "mathml"), h == null ? k(
      w,
      I,
      K,
      C,
      ae,
      ie,
      le,
      ue
    ) : T(
      h,
      w,
      C,
      ae,
      ie,
      le,
      ue
    );
  }, k = (h, w, I, K, C, ae, ie, le) => {
    let ue, ne;
    const { props: de, shapeFlag: me, transition: be, dirs: Te } = h;
    if (ue = h.el = s(
      h.type,
      ae,
      de && de.is,
      de
    ), me & 8 ? u(ue, h.children) : me & 16 && _(
      h.children,
      ue,
      null,
      K,
      C,
      Uo(h, ae),
      ie,
      le
    ), Te && Qn(h, null, K, "created"), $(ue, h, h.scopeId, ie, K), de) {
      for (const He in de)
        He !== "value" && !Xr(He) && o(
          ue,
          He,
          null,
          de[He],
          ae,
          h.children,
          K,
          C,
          L
        );
      "value" in de && o(ue, "value", null, de.value, ae), (ne = de.onVnodeBeforeMount) && nn(ne, K, h);
    }
    Te && Qn(h, null, K, "beforeMount");
    const Re = Kp(C, be);
    Re && be.beforeEnter(ue), r(ue, w, I), ((ne = de && de.onVnodeMounted) || Re || Te) && Ot(() => {
      ne && nn(ne, K, h), Re && be.enter(ue), Te && Qn(h, null, K, "mounted");
    }, C);
  }, $ = (h, w, I, K, C) => {
    if (I && b(h, I), K)
      for (let ae = 0; ae < K.length; ae++)
        b(h, K[ae]);
    if (C) {
      let ae = C.subTree;
      if (w === ae) {
        const ie = C.vnode;
        $(
          h,
          ie,
          ie.scopeId,
          ie.slotScopeIds,
          C.parent
        );
      }
    }
  }, _ = (h, w, I, K, C, ae, ie, le, ue = 0) => {
    for (let ne = ue; ne < h.length; ne++) {
      const de = h[ne] = le ? On(h[ne]) : an(h[ne]);
      y(
        null,
        de,
        w,
        I,
        K,
        C,
        ae,
        ie,
        le
      );
    }
  }, T = (h, w, I, K, C, ae, ie) => {
    const le = w.el = h.el;
    let { patchFlag: ue, dynamicChildren: ne, dirs: de } = w;
    ue |= h.patchFlag & 16;
    const me = h.props || Je, be = w.props || Je;
    let Te;
    if (I && Xn(I, !1), (Te = be.onVnodeBeforeUpdate) && nn(Te, I, w, h), de && Qn(w, h, I, "beforeUpdate"), I && Xn(I, !0), ne ? W(
      h.dynamicChildren,
      ne,
      le,
      I,
      K,
      Uo(w, C),
      ae
    ) : ie || se(
      h,
      w,
      le,
      null,
      I,
      K,
      Uo(w, C),
      ae,
      !1
    ), ue > 0) {
      if (ue & 16)
        B(
          le,
          w,
          me,
          be,
          I,
          K,
          C
        );
      else if (ue & 2 && me.class !== be.class && o(le, "class", null, be.class, C), ue & 4 && o(le, "style", me.style, be.style, C), ue & 8) {
        const Re = w.dynamicProps;
        for (let He = 0; He < Re.length; He++) {
          const Ge = Re[He], lt = me[Ge], Y = be[Ge];
          (Y !== lt || Ge === "value") && o(
            le,
            Ge,
            lt,
            Y,
            C,
            h.children,
            I,
            K,
            L
          );
        }
      }
      ue & 1 && h.children !== w.children && u(le, w.children);
    } else !ie && ne == null && B(
      le,
      w,
      me,
      be,
      I,
      K,
      C
    );
    ((Te = be.onVnodeUpdated) || de) && Ot(() => {
      Te && nn(Te, I, w, h), de && Qn(w, h, I, "updated");
    }, K);
  }, W = (h, w, I, K, C, ae, ie) => {
    for (let le = 0; le < w.length; le++) {
      const ue = h[le], ne = w[le], de = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ue.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ue.type === xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !rr(ue, ne) || // - In the case of a component, it could contain anything.
        ue.shapeFlag & 70) ? d(ue.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          I
        )
      );
      y(
        ue,
        ne,
        de,
        null,
        K,
        C,
        ae,
        ie,
        !0
      );
    }
  }, B = (h, w, I, K, C, ae, ie) => {
    if (I !== K) {
      if (I !== Je)
        for (const le in I)
          !Xr(le) && !(le in K) && o(
            h,
            le,
            I[le],
            null,
            ie,
            w.children,
            C,
            ae,
            L
          );
      for (const le in K) {
        if (Xr(le))
          continue;
        const ue = K[le], ne = I[le];
        ue !== ne && le !== "value" && o(
          h,
          le,
          ne,
          ue,
          ie,
          w.children,
          C,
          ae,
          L
        );
      }
      "value" in K && o(h, "value", I.value, K.value, ie);
    }
  }, V = (h, w, I, K, C, ae, ie, le, ue) => {
    const ne = w.el = h ? h.el : l(""), de = w.anchor = h ? h.anchor : l("");
    let { patchFlag: me, dynamicChildren: be, slotScopeIds: Te } = w;
    Te && (le = le ? le.concat(Te) : Te), h == null ? (r(ne, I, K), r(de, I, K), _(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      I,
      de,
      C,
      ae,
      ie,
      le,
      ue
    )) : me > 0 && me & 64 && be && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren ? (W(
      h.dynamicChildren,
      be,
      I,
      C,
      ae,
      ie,
      le
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || C && w === C.subTree) && ul(
      h,
      w,
      !0
      /* shallow */
    )) : se(
      h,
      w,
      I,
      de,
      C,
      ae,
      ie,
      le,
      ue
    );
  }, j = (h, w, I, K, C, ae, ie, le, ue) => {
    w.slotScopeIds = le, h == null ? w.shapeFlag & 512 ? C.ctx.activate(
      w,
      I,
      K,
      ie,
      ue
    ) : U(
      w,
      I,
      K,
      C,
      ae,
      ie,
      ue
    ) : x(h, w, ue);
  }, U = (h, w, I, K, C, ae, ie) => {
    const le = h.component = om(
      h,
      K,
      C
    );
    if (wo(h) && (le.ctx.renderer = ve), sm(le), le.asyncDep) {
      if (C && C.registerDep(le, S), !h.el) {
        const ue = le.subTree = Qe(jt);
        N(null, ue, w, I);
      }
    } else
      S(
        le,
        h,
        w,
        I,
        C,
        ae,
        ie
      );
  }, x = (h, w, I) => {
    const K = w.component = h.component;
    if (cp(h, w, I))
      if (K.asyncDep && !K.asyncResolved) {
        G(K, w, I);
        return;
      } else
        K.next = w, np(K.update), K.effect.dirty = !0, K.update();
    else
      w.el = h.el, K.vnode = w;
  }, S = (h, w, I, K, C, ae, ie) => {
    const le = () => {
      if (h.isMounted) {
        let { next: de, bu: me, u: be, parent: Te, vnode: Re } = h;
        {
          const oe = yc(h);
          if (oe) {
            de && (de.el = Re.el, G(h, de, ie)), oe.asyncDep.then(() => {
              h.isUnmounted || le();
            });
            return;
          }
        }
        let He = de, Ge;
        Xn(h, !1), de ? (de.el = Re.el, G(h, de, ie)) : de = Re, me && Va(me), (Ge = de.props && de.props.onVnodeBeforeUpdate) && nn(Ge, Te, de, Re), Xn(h, !0);
        const lt = Yo(h), Y = h.subTree;
        h.subTree = lt, y(
          Y,
          lt,
          // parent may have changed if it's in a teleport
          d(Y.el),
          // anchor may have changed if it's in a fragment
          Oe(Y),
          h,
          C,
          ae
        ), de.el = lt.el, He === null && dp(h, lt.el), be && Ot(be, C), (Ge = de.props && de.props.onVnodeUpdated) && Ot(
          () => nn(Ge, Te, de, Re),
          C
        );
      } else {
        let de;
        const { el: me, props: be } = w, { bm: Te, m: Re, parent: He } = h, Ge = Jr(w);
        if (Xn(h, !1), Te && Va(Te), !Ge && (de = be && be.onVnodeBeforeMount) && nn(de, He, w), Xn(h, !0), me && A) {
          const lt = () => {
            h.subTree = Yo(h), A(
              me,
              h.subTree,
              h,
              C,
              null
            );
          };
          Ge ? w.type.__asyncLoader().then(
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
            I,
            K,
            h,
            C,
            ae
          ), w.el = lt.el;
        }
        if (Re && Ot(Re, C), !Ge && (de = be && be.onVnodeMounted)) {
          const lt = w;
          Ot(
            () => nn(de, He, lt),
            C
          );
        }
        (w.shapeFlag & 256 || He && Jr(He.vnode) && He.vnode.shapeFlag & 256) && h.a && Ot(h.a, C), h.isMounted = !0, w = I = K = null;
      }
    }, ue = h.effect = new Gs(
      le,
      Yt,
      () => al(ne),
      h.scope
      // track it in component's effect scope
    ), ne = h.update = () => {
      ue.dirty && ue.run();
    };
    ne.id = h.uid, Xn(h, !0), ne();
  }, G = (h, w, I) => {
    w.component = h;
    const K = h.vnode.props;
    h.vnode = w, h.next = null, jp(h, w.props, K, I), qp(h, w.children, I), Wn(), ei(h), hr();
  }, se = (h, w, I, K, C, ae, ie, le, ue = !1) => {
    const ne = h && h.children, de = h ? h.shapeFlag : 0, me = w.children, { patchFlag: be, shapeFlag: Te } = w;
    if (be > 0) {
      if (be & 128) {
        ee(
          ne,
          me,
          I,
          K,
          C,
          ae,
          ie,
          le,
          ue
        );
        return;
      } else if (be & 256) {
        pe(
          ne,
          me,
          I,
          K,
          C,
          ae,
          ie,
          le,
          ue
        );
        return;
      }
    }
    Te & 8 ? (de & 16 && L(ne, C, ae), me !== ne && u(I, me)) : de & 16 ? Te & 16 ? ee(
      ne,
      me,
      I,
      K,
      C,
      ae,
      ie,
      le,
      ue
    ) : L(ne, C, ae, !0) : (de & 8 && u(I, ""), Te & 16 && _(
      me,
      I,
      K,
      C,
      ae,
      ie,
      le,
      ue
    ));
  }, pe = (h, w, I, K, C, ae, ie, le, ue) => {
    h = h || kr, w = w || kr;
    const ne = h.length, de = w.length, me = Math.min(ne, de);
    let be;
    for (be = 0; be < me; be++) {
      const Te = w[be] = ue ? On(w[be]) : an(w[be]);
      y(
        h[be],
        Te,
        I,
        null,
        C,
        ae,
        ie,
        le,
        ue
      );
    }
    ne > de ? L(
      h,
      C,
      ae,
      !0,
      !1,
      me
    ) : _(
      w,
      I,
      K,
      C,
      ae,
      ie,
      le,
      ue,
      me
    );
  }, ee = (h, w, I, K, C, ae, ie, le, ue) => {
    let ne = 0;
    const de = w.length;
    let me = h.length - 1, be = de - 1;
    for (; ne <= me && ne <= be; ) {
      const Te = h[ne], Re = w[ne] = ue ? On(w[ne]) : an(w[ne]);
      if (rr(Te, Re))
        y(
          Te,
          Re,
          I,
          null,
          C,
          ae,
          ie,
          le,
          ue
        );
      else
        break;
      ne++;
    }
    for (; ne <= me && ne <= be; ) {
      const Te = h[me], Re = w[be] = ue ? On(w[be]) : an(w[be]);
      if (rr(Te, Re))
        y(
          Te,
          Re,
          I,
          null,
          C,
          ae,
          ie,
          le,
          ue
        );
      else
        break;
      me--, be--;
    }
    if (ne > me) {
      if (ne <= be) {
        const Te = be + 1, Re = Te < de ? w[Te].el : K;
        for (; ne <= be; )
          y(
            null,
            w[ne] = ue ? On(w[ne]) : an(w[ne]),
            I,
            Re,
            C,
            ae,
            ie,
            le,
            ue
          ), ne++;
      }
    } else if (ne > be)
      for (; ne <= me; )
        f(h[ne], C, ae, !0), ne++;
    else {
      const Te = ne, Re = ne, He = /* @__PURE__ */ new Map();
      for (ne = Re; ne <= be; ne++) {
        const he = w[ne] = ue ? On(w[ne]) : an(w[ne]);
        he.key != null && He.set(he.key, ne);
      }
      let Ge, lt = 0;
      const Y = be - Re + 1;
      let oe = !1, _e = 0;
      const Pe = new Array(Y);
      for (ne = 0; ne < Y; ne++)
        Pe[ne] = 0;
      for (ne = Te; ne <= me; ne++) {
        const he = h[ne];
        if (lt >= Y) {
          f(he, C, ae, !0);
          continue;
        }
        let ye;
        if (he.key != null)
          ye = He.get(he.key);
        else
          for (Ge = Re; Ge <= be; Ge++)
            if (Pe[Ge - Re] === 0 && rr(he, w[Ge])) {
              ye = Ge;
              break;
            }
        ye === void 0 ? f(he, C, ae, !0) : (Pe[ye - Re] = ne + 1, ye >= _e ? _e = ye : oe = !0, y(
          he,
          w[ye],
          I,
          null,
          C,
          ae,
          ie,
          le,
          ue
        ), lt++);
      }
      const te = oe ? Qp(Pe) : kr;
      for (Ge = te.length - 1, ne = Y - 1; ne >= 0; ne--) {
        const he = Re + ne, ye = w[he], Bt = he + 1 < de ? w[he + 1].el : K;
        Pe[ne] === 0 ? y(
          null,
          ye,
          I,
          Bt,
          C,
          ae,
          ie,
          le,
          ue
        ) : oe && (Ge < 0 || ne !== te[Ge] ? m(ye, I, Bt, 2) : Ge--);
      }
    }
  }, m = (h, w, I, K, C = null) => {
    const { el: ae, type: ie, transition: le, children: ue, shapeFlag: ne } = h;
    if (ne & 6) {
      m(h.component.subTree, w, I, K);
      return;
    }
    if (ne & 128) {
      h.suspense.move(w, I, K);
      return;
    }
    if (ne & 64) {
      ie.move(h, w, I, ve);
      return;
    }
    if (ie === xe) {
      r(ae, w, I);
      for (let me = 0; me < ue.length; me++)
        m(ue[me], w, I, K);
      r(h.anchor, w, I);
      return;
    }
    if (ie === Wo) {
      g(h, w, I);
      return;
    }
    if (K !== 2 && ne & 1 && le)
      if (K === 0)
        le.beforeEnter(ae), r(ae, w, I), Ot(() => le.enter(ae), C);
      else {
        const { leave: me, delayLeave: be, afterLeave: Te } = le, Re = () => r(ae, w, I), He = () => {
          me(ae, () => {
            Re(), Te && Te();
          });
        };
        be ? be(ae, Re, He) : He();
      }
    else
      r(ae, w, I);
  }, f = (h, w, I, K = !1, C = !1) => {
    const {
      type: ae,
      props: ie,
      ref: le,
      children: ue,
      dynamicChildren: ne,
      shapeFlag: de,
      patchFlag: me,
      dirs: be
    } = h;
    if (le != null && Ms(le, null, I, h, !0), de & 256) {
      w.ctx.deactivate(h);
      return;
    }
    const Te = de & 1 && be, Re = !Jr(h);
    let He;
    if (Re && (He = ie && ie.onVnodeBeforeUnmount) && nn(He, w, h), de & 6)
      ce(h.component, I, K);
    else {
      if (de & 128) {
        h.suspense.unmount(I, K);
        return;
      }
      Te && Qn(h, null, w, "beforeUnmount"), de & 64 ? h.type.remove(
        h,
        w,
        I,
        C,
        ve,
        K
      ) : ne && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ae !== xe || me > 0 && me & 64) ? L(
        ne,
        w,
        I,
        !1,
        !0
      ) : (ae === xe && me & 384 || !C && de & 16) && L(ue, w, I), K && R(h);
    }
    (Re && (He = ie && ie.onVnodeUnmounted) || Te) && Ot(() => {
      He && nn(He, w, h), Te && Qn(h, null, w, "unmounted");
    }, I);
  }, R = (h) => {
    const { type: w, el: I, anchor: K, transition: C } = h;
    if (w === xe) {
      Q(I, K);
      return;
    }
    if (w === Wo) {
      P(h);
      return;
    }
    const ae = () => {
      a(I), C && !C.persisted && C.afterLeave && C.afterLeave();
    };
    if (h.shapeFlag & 1 && C && !C.persisted) {
      const { leave: ie, delayLeave: le } = C, ue = () => ie(I, ae);
      le ? le(h.el, ae, ue) : ue();
    } else
      ae();
  }, Q = (h, w) => {
    let I;
    for (; h !== w; )
      I = p(h), a(h), h = I;
    a(w);
  }, ce = (h, w, I) => {
    const { bum: K, scope: C, update: ae, subTree: ie, um: le } = h;
    K && Va(K), C.stop(), ae && (ae.active = !1, f(ie, h, w, I)), le && Ot(le, w), Ot(() => {
      h.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve());
  }, L = (h, w, I, K = !1, C = !1, ae = 0) => {
    for (let ie = ae; ie < h.length; ie++)
      f(h[ie], w, I, K, C);
  }, Oe = (h) => h.shapeFlag & 6 ? Oe(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : p(h.anchor || h.el);
  let Fe = !1;
  const H = (h, w, I) => {
    h == null ? w._vnode && f(w._vnode, null, null, !0) : y(
      w._vnode || null,
      h,
      w,
      null,
      null,
      null,
      I
    ), Fe || (Fe = !0, ei(), Qu(), Fe = !1), w._vnode = h;
  }, ve = {
    p: y,
    um: f,
    m,
    r: R,
    mt: U,
    mc: _,
    pc: se,
    pbc: W,
    n: Oe,
    o: e
  };
  let Ee, A;
  return {
    render: H,
    hydrate: Ee,
    createApp: Bp(H, Ee)
  };
}
function Uo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Xn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Kp(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ul(e, t, n = !1) {
  const r = e.children, a = t.children;
  if (ke(r) && ke(a))
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      let l = a[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = a[o] = On(a[o]), l.el = s.el), n || ul(s, l)), l.type === xo && (l.el = s.el);
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
function yc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : yc(t);
}
const Xp = (e) => e.__isTeleport, ta = (e) => e && (e.disabled || e.disabled === ""), di = (e) => typeof SVGElement < "u" && e instanceof SVGElement, fi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ts = (e, t) => {
  const n = e && e.to;
  return at(n) ? t ? t(n) : null : n;
}, Jp = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, a, o, s, l, i, c) {
    const {
      mc: u,
      pc: d,
      pbc: p,
      o: { insert: b, querySelector: v, createText: y, createComment: D }
    } = c, N = ta(t.props);
    let { shapeFlag: O, children: g, dynamicChildren: P } = t;
    if (e == null) {
      const E = t.el = y(""), k = t.anchor = y("");
      b(E, n, r), b(k, n, r);
      const $ = t.target = Ts(t.props, v), _ = t.targetAnchor = y("");
      $ && (b(_, $), s === "svg" || di($) ? s = "svg" : (s === "mathml" || fi($)) && (s = "mathml"));
      const T = (W, B) => {
        O & 16 && u(
          g,
          W,
          B,
          a,
          o,
          s,
          l,
          i
        );
      };
      N ? T(n, k) : $ && T($, _);
    } else {
      t.el = e.el;
      const E = t.anchor = e.anchor, k = t.target = e.target, $ = t.targetAnchor = e.targetAnchor, _ = ta(e.props), T = _ ? n : k, W = _ ? E : $;
      if (s === "svg" || di(k) ? s = "svg" : (s === "mathml" || fi(k)) && (s = "mathml"), P ? (p(
        e.dynamicChildren,
        P,
        T,
        a,
        o,
        s,
        l
      ), ul(e, t, !0)) : i || d(
        e,
        t,
        T,
        W,
        a,
        o,
        s,
        l,
        !1
      ), N)
        _ ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ea(
          t,
          n,
          E,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const B = t.target = Ts(
          t.props,
          v
        );
        B && Ea(
          t,
          B,
          null,
          c,
          0
        );
      } else _ && Ea(
        t,
        k,
        $,
        c,
        1
      );
    }
    gc(t);
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
  hydrate: Zp
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
function Zp(e, t, n, r, a, o, {
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
    gc(t);
  }
  return t.anchor && s(t.anchor);
}
const em = Jp;
function gc(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const xe = Symbol.for("v-fgt"), xo = Symbol.for("v-txt"), jt = Symbol.for("v-cmt"), Wo = Symbol.for("v-stc"), na = [];
let zt = null;
function F(e = !1) {
  na.push(zt = e ? null : []);
}
function tm() {
  na.pop(), zt = na[na.length - 1] || null;
}
let da = 1;
function pi(e) {
  da += e;
}
function bc(e) {
  return e.dynamicChildren = da > 0 ? zt || kr : null, tm(), da > 0 && zt && zt.push(e), e;
}
function z(e, t, n, r, a, o) {
  return bc(
    we(
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
  return bc(
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
const ko = "__vInternal", wc = ({ key: e }) => e ?? null, Fa = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? at(e) || ut(e) || Ae(e) ? { i: vt, r: e, k: t, f: !!n } : e : null);
function we(e, t = null, n = null, r = 0, a = null, o = e === xe ? 0 : 1, s = !1, l = !1) {
  const i = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wc(t),
    ref: t && Fa(t),
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
const Qe = nm;
function nm(e, t = null, n = null, r = 0, a = null, o = !1) {
  if ((!e || e === ec) && (e = jt), Ka(e)) {
    const l = Ln(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && cl(l, n), da > 0 && !o && zt && (l.shapeFlag & 6 ? zt[zt.indexOf(e)] = l : zt.push(l)), l.patchFlag |= -2, l;
  }
  if (cm(e) && (e = e.__vccOpts), t) {
    t = Pt(t);
    let { class: l, style: i } = t;
    l && !at(l) && (t.class = $e(l)), Xe(i) && (Uu(i) && !ke(i) && (i = yt({}, i)), t.style = Dt(i));
  }
  const s = at(e) ? 1 : pp(e) ? 128 : Xp(e) ? 64 : Xe(e) ? 4 : Ae(e) ? 2 : 0;
  return we(
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
  return e ? Uu(e) || ko in e ? yt({}, e) : e : null;
}
function Ln(e, t, n = !1) {
  const { props: r, ref: a, patchFlag: o, children: s } = e, l = t ? _t(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && wc(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? ke(a) ? a.concat(Fa(t)) : [a, Fa(t)] : Fa(t)
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
    patchFlag: t && e.type !== xe ? o === -1 ? 16 : o | 16 : o,
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
  return t ? (F(), Ce(jt, null, e)) : Qe(jt, null, e);
}
function an(e) {
  return e == null || typeof e == "boolean" ? Qe(jt) : ke(e) ? Qe(
    xe,
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
  else if (ke(t))
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
        t.class !== r.class && (t.class = $e([t.class, r.class]));
      else if (a === "style")
        t.style = Dt([t.style, r.style]);
      else if (io(a)) {
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
const rm = dc();
let am = 0;
function om(e, t, n) {
  const r = e.type, a = (t ? t.appContext : e.appContext) || rm, o = {
    uid: am++,
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
    scope: new Cu(
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
    propsOptions: pc(r, a),
    emitsOptions: Ju(r, a),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = op.bind(null, o), e.ce && e.ce(o), o;
}
let wt = null;
const dl = () => wt || vt;
let Qa, Ps;
{
  const e = Su(), t = (n, r) => {
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
function _c(e) {
  return e.vnode.shapeFlag & 4;
}
let Mo = !1;
function sm(e, t = !1) {
  t && Ps(t);
  const { props: n, children: r } = e.vnode, a = _c(e);
  Hp(e, n, a, t), Wp(e, r);
  const o = a ? lm(e, t) : void 0;
  return t && Ps(!1), o;
}
function lm(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = ho(new Proxy(e.ctx, Op));
  const { setup: r } = n;
  if (r) {
    const a = e.setupContext = r.length > 1 ? kc(e) : null, o = ba(e);
    Wn();
    const s = $n(
      r,
      e,
      0,
      [
        e.props,
        a
      ]
    );
    if (hr(), o(), Mu(s)) {
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
    xc(e, t);
}
function hi(e, t, n) {
  Ae(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Xe(t) && (e.setupState = qu(t)), xc(e, n);
}
let vi;
function xc(e, t, n) {
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
      Rp(e);
    } finally {
      hr(), a();
    }
  }
}
function im(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, n) {
        return Nt(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function kc(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return im(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function To(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(qu(ho(e.exposed)), {
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
function um(e, t = !0) {
  return Ae(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function cm(e) {
  return Ae(e) && "__vccOpts" in e;
}
const re = (e, t) => Wf(e, t, Mo);
function Ss(e, t, n = Je) {
  const r = dl(), a = Qt(t), o = Un(t), s = Qf((i, c) => {
    let u;
    return yp(() => {
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
function Mc(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Xe(t) && !ke(t) ? Ka(t) ? Qe(e, null, [t]) : Qe(e, t) : Qe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ka(n) && (n = [n]), Qe(e, t, n));
}
const dm = "3.4.21";
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const fm = "http://www.w3.org/2000/svg", pm = "http://www.w3.org/1998/Math/MathML", En = typeof document < "u" ? document : null, yi = En && /* @__PURE__ */ En.createElement("template"), mm = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const a = t === "svg" ? En.createElementNS(fm, e) : t === "mathml" ? En.createElementNS(pm, e) : En.createElement(e, n ? { is: n } : void 0);
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
}, kn = "transition", Hr = "animation", fa = Symbol("_vtc"), qn = (e, { slots: t }) => Mc(_p, hm(e), t);
qn.displayName = "Transition";
const Tc = {
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
  rc,
  Tc
);
const Jn = (e, t = []) => {
  ke(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, gi = (e) => e ? ke(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function hm(e) {
  const t = {};
  for (const V in e)
    V in Tc || (t[V] = e[V]);
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
  } = e, v = vm(a), y = v && v[0], D = v && v[1], {
    onBeforeEnter: N,
    onEnter: O,
    onEnterCancelled: g,
    onLeave: P,
    onLeaveCancelled: E,
    onBeforeAppear: k = N,
    onAppear: $ = O,
    onAppearCancelled: _ = g
  } = t, T = (V, j, U) => {
    Zn(V, j ? u : l), Zn(V, j ? c : s), U && U();
  }, W = (V, j) => {
    V._isLeaving = !1, Zn(V, d), Zn(V, b), Zn(V, p), j && j();
  }, B = (V) => (j, U) => {
    const x = V ? $ : O, S = () => T(j, V, U);
    Jn(x, [j, S]), bi(() => {
      Zn(j, V ? i : o), Mn(j, V ? u : l), gi(x) || wi(j, r, y, S);
    });
  };
  return yt(t, {
    onBeforeEnter(V) {
      Jn(N, [V]), Mn(V, o), Mn(V, s);
    },
    onBeforeAppear(V) {
      Jn(k, [V]), Mn(V, i), Mn(V, c);
    },
    onEnter: B(!1),
    onAppear: B(!0),
    onLeave(V, j) {
      V._isLeaving = !0;
      const U = () => W(V, j);
      Mn(V, d), bm(), Mn(V, p), bi(() => {
        V._isLeaving && (Zn(V, d), Mn(V, b), gi(P) || wi(V, r, D, U));
      }), Jn(P, [V, U]);
    },
    onEnterCancelled(V) {
      T(V, !1), Jn(g, [V]);
    },
    onAppearCancelled(V) {
      T(V, !0), Jn(_, [V]);
    },
    onLeaveCancelled(V) {
      W(V), Jn(E, [V]);
    }
  });
}
function vm(e) {
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
  return pf(e);
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
let ym = 0;
function wi(e, t, n, r) {
  const a = e._endId = ++ym, o = () => {
    a === e._endId && r();
  };
  if (n)
    return setTimeout(o, n);
  const { type: s, timeout: l, propCount: i } = gm(e, t);
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
function gm(e, t) {
  const n = window.getComputedStyle(e), r = (v) => (n[v] || "").split(", "), a = r(`${kn}Delay`), o = r(`${kn}Duration`), s = _i(a, o), l = r(`${Hr}Delay`), i = r(`${Hr}Duration`), c = _i(l, i);
  let u = null, d = 0, p = 0;
  t === kn ? s > 0 && (u = kn, d = s, p = o.length) : t === Hr ? c > 0 && (u = Hr, d = c, p = i.length) : (d = Math.max(s, c), u = d > 0 ? s > c ? kn : Hr : null, p = u ? u === kn ? o.length : i.length : 0);
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
function bm() {
  return document.body.offsetHeight;
}
function wm(e, t, n) {
  const r = e[fa];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Xa = Symbol("_vod"), Pc = Symbol("_vsh"), Ia = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Xa] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : jr(e, t);
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
  e.style.display = t ? e[Xa] : "none", e[Pc] = !t;
}
const _m = Symbol(""), xm = /(^|;)\s*display\s*:/;
function km(e, t, n) {
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
      const s = r[_m];
      s && (n += ";" + s), r.cssText = n, o = xm.test(n);
    }
  } else t && e.removeAttribute("style");
  Xa in e && (e[Xa] = o ? r.display : "", e[Pc] && (r.display = "none"));
}
const ki = /\s*!important$/;
function Ba(e, t, n) {
  if (ke(n))
    n.forEach((r) => Ba(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Mm(e, t);
    ki.test(n) ? e.setProperty(
      Un(r),
      n.replace(ki, ""),
      "important"
    ) : e[r] = n;
  }
}
const Mi = ["Webkit", "Moz", "ms"], zo = {};
function Mm(e, t) {
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
function Tm(e, t, n, r, a) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Ti, t.slice(6, t.length)) : e.setAttributeNS(Ti, t, n);
  else {
    const o = bf(t);
    n == null || o && !Au(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
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
    const c = l === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n ?? "";
    (c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = Au(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
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
function Sm(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Pi = Symbol("_vei");
function Am(e, t, n, r, a = null) {
  const o = e[Pi] || (e[Pi] = {}), s = o[t];
  if (r && s)
    s.value = r;
  else {
    const [l, i] = Dm(t);
    if (r) {
      const c = o[t] = Em(r, a);
      ar(e, l, c, i);
    } else s && (Sm(e, l, s, i), o[t] = void 0);
  }
}
const Si = /(?:Once|Passive|Capture)$/;
function Dm(e) {
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
const Cm = /* @__PURE__ */ Promise.resolve(), Om = () => Go || (Cm.then(() => Go = 0), Go = Date.now());
function Em(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ht(
      Rm(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Om(), n;
}
function Rm(e, t) {
  if (ke(t)) {
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
  t === "class" ? wm(e, r, c) : t === "style" ? km(e, n, r) : io(t) ? Us(t) || Am(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : $m(e, t, r, c)) ? Pm(
    e,
    t,
    r,
    o,
    s,
    l,
    i
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Tm(e, t, r, c));
};
function $m(e, t, n, r) {
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
  return ke(t) ? (n) => Va(t, n) : t;
};
function Vm(e) {
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
    }), t || (ar(e, "compositionstart", Vm), ar(e, "compositionend", Di), ar(e, "change", Di));
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
}, Sc = {
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
  const r = e.multiple, a = ke(t);
  if (!(r && !a && !uo(t))) {
    for (let o = 0, s = e.options.length; o < s; o++) {
      const l = e.options[o], i = Za(l);
      if (r)
        if (a) {
          const c = typeof i;
          c === "string" || c === "number" ? l.selected = t.includes(
            n ? la(i) : i
          ) : l.selected = _f(t, i) > -1;
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
const Fm = ["ctrl", "shift", "alt", "meta"], Im = {
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
      const l = Im[t[s]];
      if (l && l(a, t))
        return;
    }
    return e(a, ...o);
  });
}, Bm = {
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
    if (t.some((s) => s === o || Bm[s] === o))
      return e(a);
  });
}, Lm = /* @__PURE__ */ yt({ patchProp: Nm }, mm);
let Ei;
function Ac() {
  return Ei || (Ei = zp(Lm));
}
const Ri = (...e) => {
  Ac().render(...e);
}, Ym = (...e) => {
  const t = Ac().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const a = jm(r);
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
function jm(e) {
  return at(e) ? document.querySelector(e) : e;
}
var Um = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Dc;
const Po = (e) => Dc = e, Cc = (
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
function Wm() {
  const e = Ou(!0), t = e.run(() => J({}));
  let n = [], r = [];
  const a = ho({
    install(o) {
      Po(a), a._a = o, o.provide(Cc, a), o.config.globalProperties.$pinia = a, r.forEach((s) => n.push(s)), r = [];
    },
    use(o) {
      return !this._a && !Um ? r.push(o) : n.push(o), this;
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
const Oc = () => {
};
function Ni(e, t, n, r = Oc) {
  e.push(t);
  const a = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), r());
  };
  return !n && zs() && Eu(a), a;
}
function gr(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const qm = (e) => e();
function Ds(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], a = e[n];
    As(a) && As(r) && e.hasOwnProperty(n) && !ut(r) && !Nn(r) ? e[n] = Ds(a, r) : e[n] = r;
  }
  return e;
}
const zm = (
  /* istanbul ignore next */
  Symbol()
);
function Gm(e) {
  return !As(e) || !e.hasOwnProperty(zm);
}
const { assign: An } = Object;
function Km(e) {
  return !!(ut(e) && e.effect);
}
function Qm(e, t, n, r) {
  const { state: a, actions: o, getters: s } = t, l = n.state.value[e];
  let i;
  function c() {
    l || (n.state.value[e] = a ? a() : {});
    const u = Xf(n.state.value[e]);
    return An(u, o, Object.keys(s || {}).reduce((d, p) => (d[p] = ho(re(() => {
      Po(n);
      const b = n._s.get(e);
      return s[p].call(b, b);
    })), d), {}));
  }
  return i = Ec(e, c, t, n, r, !0), i;
}
function Ec(e, t, n = {}, r, a, o) {
  let s;
  const l = An({ actions: {} }, n), i = {
    deep: !0
    // flush: 'post',
  };
  let c, u, d = [], p = [], b;
  const v = r.state.value[e];
  !o && !v && (r.state.value[e] = {}), J({});
  let y;
  function D(_) {
    let T;
    c = u = !1, typeof _ == "function" ? (_(r.state.value[e]), T = {
      type: ra.patchFunction,
      storeId: e,
      events: b
    }) : (Ds(r.state.value[e], _), T = {
      type: ra.patchObject,
      payload: _,
      storeId: e,
      events: b
    });
    const W = y = Symbol();
    Xt().then(() => {
      y === W && (c = !0);
    }), u = !0, gr(d, T, r.state.value[e]);
  }
  const N = o ? function() {
    const { state: T } = n, W = T ? T() : {};
    this.$patch((B) => {
      An(B, W);
    });
  } : (
    /* istanbul ignore next */
    Oc
  );
  function O() {
    s.stop(), d = [], p = [], r._s.delete(e);
  }
  function g(_, T) {
    return function() {
      Po(r);
      const W = Array.from(arguments), B = [], V = [];
      function j(S) {
        B.push(S);
      }
      function U(S) {
        V.push(S);
      }
      gr(p, {
        args: W,
        name: _,
        store: E,
        after: j,
        onError: U
      });
      let x;
      try {
        x = T.apply(this && this.$id === e ? this : E, W);
      } catch (S) {
        throw gr(V, S), S;
      }
      return x instanceof Promise ? x.then((S) => (gr(B, S), S)).catch((S) => (gr(V, S), Promise.reject(S))) : (gr(B, x), x);
    };
  }
  const P = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Ni.bind(null, p),
    $patch: D,
    $reset: N,
    $subscribe(_, T = {}) {
      const W = Ni(d, _, T.detached, () => B()), B = s.run(() => ft(() => r.state.value[e], (V) => {
        (T.flush === "sync" ? u : c) && _({
          storeId: e,
          type: ra.direct,
          events: b
        }, V);
      }, An({}, i, T)));
      return W;
    },
    $dispose: O
  }, E = bn(P);
  r._s.set(e, E);
  const $ = (r._a && r._a.runWithContext || qm)(() => r._e.run(() => (s = Ou()).run(t)));
  for (const _ in $) {
    const T = $[_];
    if (ut(T) && !Km(T) || Nn(T))
      o || (v && Gm(T) && (ut(T) ? T.value = v[_] : Ds(T, v[_])), r.state.value[e][_] = T);
    else if (typeof T == "function") {
      const W = g(_, T);
      $[_] = W, l.actions[_] = T;
    }
  }
  return An(E, $), An(Le(E), $), Object.defineProperty(E, "$state", {
    get: () => r.state.value[e],
    set: (_) => {
      D((T) => {
        An(T, _);
      });
    }
  }), r._p.forEach((_) => {
    An(E, s.run(() => _({
      store: E,
      app: r._a,
      pinia: r,
      options: l
    })));
  }), v && o && n.hydrate && n.hydrate(E.$state, v), c = !0, u = !0, E;
}
function Xm(e, t, n) {
  let r, a;
  const o = typeof t == "function";
  r = e, a = o ? n : t;
  function s(l, i) {
    const c = Yp();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (c ? ea(Cc, null) : null), l && Po(l), l = Dc, l._s.has(r) || (o ? Ec(r, t, a, l) : Qm(r, a, l)), l._s.get(r);
  }
  return s.$id = r, s;
}
var Rc = typeof global == "object" && global && global.Object === Object && global, Jm = typeof self == "object" && self && self.Object === Object && self, fl = Rc || Jm || Function("return this")(), eo = fl.Symbol, Nc = Object.prototype, Zm = Nc.hasOwnProperty, eh = Nc.toString, Ur = eo ? eo.toStringTag : void 0;
function th(e) {
  var t = Zm.call(e, Ur), n = e[Ur];
  try {
    e[Ur] = void 0;
    var r = !0;
  } catch {
  }
  var a = eh.call(e);
  return r && (t ? e[Ur] = n : delete e[Ur]), a;
}
var nh = Object.prototype, rh = nh.toString;
function ah(e) {
  return rh.call(e);
}
var oh = "[object Null]", sh = "[object Undefined]", $i = eo ? eo.toStringTag : void 0;
function pl(e) {
  return e == null ? e === void 0 ? sh : oh : $i && $i in Object(e) ? th(e) : ah(e);
}
function ml(e) {
  return e != null && typeof e == "object";
}
var $c = Array.isArray;
function hl(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Vc(e) {
  return e;
}
var lh = "[object AsyncFunction]", ih = "[object Function]", uh = "[object GeneratorFunction]", ch = "[object Proxy]";
function Fc(e) {
  if (!hl(e))
    return !1;
  var t = pl(e);
  return t == ih || t == uh || t == lh || t == ch;
}
var Ko = fl["__core-js_shared__"], Vi = function() {
  var e = /[^.]+$/.exec(Ko && Ko.keys && Ko.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function dh(e) {
  return !!Vi && Vi in e;
}
var fh = Function.prototype, ph = fh.toString;
function mh(e) {
  if (e != null) {
    try {
      return ph.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var hh = /[\\^$.*+?()[\]{}|]/g, vh = /^\[object .+?Constructor\]$/, yh = Function.prototype, gh = Object.prototype, bh = yh.toString, wh = gh.hasOwnProperty, _h = RegExp(
  "^" + bh.call(wh).replace(hh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function xh(e) {
  if (!hl(e) || dh(e))
    return !1;
  var t = Fc(e) ? _h : vh;
  return t.test(mh(e));
}
function kh(e, t) {
  return e == null ? void 0 : e[t];
}
function Mh(e, t) {
  var n = kh(e, t);
  return xh(n) ? n : void 0;
}
function Th(e, t, n) {
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
var Ph = 800, Sh = 16, Ah = Date.now;
function Dh(e) {
  var t = 0, n = 0;
  return function() {
    var r = Ah(), a = Sh - (r - n);
    if (n = r, a > 0) {
      if (++t >= Ph)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ch(e) {
  return function() {
    return e;
  };
}
var to = function() {
  try {
    var e = Mh(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Oh = to ? function(e, t) {
  return to(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ch(t),
    writable: !0
  });
} : Vc, Eh = Dh(Oh), Rh = 9007199254740991, Nh = /^(?:0|[1-9]\d*)$/;
function Ic(e, t) {
  var n = typeof e;
  return t = t ?? Rh, !!t && (n == "number" || n != "symbol" && Nh.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Bc(e, t, n) {
  t == "__proto__" && to ? to(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Lc(e, t) {
  return e === t || e !== e && t !== t;
}
var $h = Object.prototype, Vh = $h.hasOwnProperty;
function Yc(e, t, n) {
  var r = e[t];
  (!(Vh.call(e, t) && Lc(r, n)) || n === void 0 && !(t in e)) && Bc(e, t, n);
}
function Fh(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, s = t.length; ++o < s; ) {
    var l = t[o], i = void 0;
    i === void 0 && (i = e[l]), a ? Bc(n, l, i) : Yc(n, l, i);
  }
  return n;
}
var Fi = Math.max;
function Ih(e, t, n) {
  return t = Fi(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, o = Fi(r.length - t, 0), s = Array(o); ++a < o; )
      s[a] = r[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = r[a];
    return l[t] = n(s), Th(e, this, l);
  };
}
function Bh(e, t) {
  return Eh(Ih(e, t, Vc), e + "");
}
var Lh = 9007199254740991;
function Hc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Lh;
}
function vl(e) {
  return e != null && Hc(e.length) && !Fc(e);
}
function Yh(e, t, n) {
  if (!hl(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? vl(n) && Ic(t, n.length) : r == "string" && t in n) ? Lc(n[t], e) : !1;
}
function Hh(e) {
  return Bh(function(t, n) {
    var r = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, s = a > 2 ? n[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, s && Yh(n[0], n[1], s) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++r < a; ) {
      var l = n[r];
      l && e(t, l, r, o);
    }
    return t;
  });
}
var jh = Object.prototype;
function jc(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || jh;
  return e === n;
}
function Uh(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Wh = "[object Arguments]";
function Ii(e) {
  return ml(e) && pl(e) == Wh;
}
var Uc = Object.prototype, qh = Uc.hasOwnProperty, zh = Uc.propertyIsEnumerable, Gh = Ii(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ii : function(e) {
  return ml(e) && qh.call(e, "callee") && !zh.call(e, "callee");
};
function Kh() {
  return !1;
}
var Wc = typeof exports == "object" && exports && !exports.nodeType && exports, Bi = Wc && typeof module == "object" && module && !module.nodeType && module, Qh = Bi && Bi.exports === Wc, Li = Qh ? fl.Buffer : void 0, Xh = Li ? Li.isBuffer : void 0, Jh = Xh || Kh, Zh = "[object Arguments]", ev = "[object Array]", tv = "[object Boolean]", nv = "[object Date]", rv = "[object Error]", av = "[object Function]", ov = "[object Map]", sv = "[object Number]", lv = "[object Object]", iv = "[object RegExp]", uv = "[object Set]", cv = "[object String]", dv = "[object WeakMap]", fv = "[object ArrayBuffer]", pv = "[object DataView]", mv = "[object Float32Array]", hv = "[object Float64Array]", vv = "[object Int8Array]", yv = "[object Int16Array]", gv = "[object Int32Array]", bv = "[object Uint8Array]", wv = "[object Uint8ClampedArray]", _v = "[object Uint16Array]", xv = "[object Uint32Array]", tt = {};
tt[mv] = tt[hv] = tt[vv] = tt[yv] = tt[gv] = tt[bv] = tt[wv] = tt[_v] = tt[xv] = !0;
tt[Zh] = tt[ev] = tt[fv] = tt[tv] = tt[pv] = tt[nv] = tt[rv] = tt[av] = tt[ov] = tt[sv] = tt[lv] = tt[iv] = tt[uv] = tt[cv] = tt[dv] = !1;
function kv(e) {
  return ml(e) && Hc(e.length) && !!tt[pl(e)];
}
function Mv(e) {
  return function(t) {
    return e(t);
  };
}
var qc = typeof exports == "object" && exports && !exports.nodeType && exports, aa = qc && typeof module == "object" && module && !module.nodeType && module, Tv = aa && aa.exports === qc, Qo = Tv && Rc.process, Yi = function() {
  try {
    var e = aa && aa.require && aa.require("util").types;
    return e || Qo && Qo.binding && Qo.binding("util");
  } catch {
  }
}(), Hi = Yi && Yi.isTypedArray, Pv = Hi ? Mv(Hi) : kv, Sv = Object.prototype, Av = Sv.hasOwnProperty;
function Dv(e, t) {
  var n = $c(e), r = !n && Gh(e), a = !n && !r && Jh(e), o = !n && !r && !a && Pv(e), s = n || r || a || o, l = s ? Uh(e.length, String) : [], i = l.length;
  for (var c in e)
    Av.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Ic(c, i))) && l.push(c);
  return l;
}
function Cv(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Ov = Cv(Object.keys, Object), Ev = Object.prototype, Rv = Ev.hasOwnProperty;
function Nv(e) {
  if (!jc(e))
    return Ov(e);
  var t = [];
  for (var n in Object(e))
    Rv.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function $v(e) {
  return vl(e) ? Dv(e) : Nv(e);
}
var Vv = Object.prototype, Fv = Vv.hasOwnProperty, Iv = Hh(function(e, t) {
  if (jc(t) || vl(t)) {
    Fh(t, $v(t), e);
    return;
  }
  for (var n in t)
    Fv.call(t, n) && Yc(e, n, t[n]);
});
const no = "Value", Cr = "ValueString", cr = "ValueFloat", Or = "ValueDate", Er = "ValueFilePath", Yn = "Mode", Hn = "SubSystem", pa = "Command", Cs = [
  no,
  Cr,
  cr,
  Or,
  Er
];
class Qr {
  constructor(t) {
    Iv(this, t);
  }
  getDestinations(t) {
    const n = $c(t) ? t : [t];
    return this.destinations.reduce((a, o) => (n.includes(o.type) && a.push(o), a), []);
  }
  getValues() {
    return this.hasValues ? this.getDestinations(Cs) : [];
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
function zc(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Bv } = Object.prototype, { getPrototypeOf: yl } = Object, So = /* @__PURE__ */ ((e) => (t) => {
  const n = Bv.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Zt = (e) => (e = e.toLowerCase(), (t) => So(t) === e), Ao = (e) => (t) => typeof t === e, { isArray: Br } = Array, ma = Ao("undefined");
function Lv(e) {
  return e !== null && !ma(e) && e.constructor !== null && !ma(e.constructor) && Ft(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Gc = Zt("ArrayBuffer");
function Yv(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Gc(e.buffer), t;
}
const Hv = Ao("string"), Ft = Ao("function"), Kc = Ao("number"), Do = (e) => e !== null && typeof e == "object", jv = (e) => e === !0 || e === !1, La = (e) => {
  if (So(e) !== "object")
    return !1;
  const t = yl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Uv = Zt("Date"), Wv = Zt("File"), qv = Zt("Blob"), zv = Zt("FileList"), Gv = (e) => Do(e) && Ft(e.pipe), Kv = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ft(e.append) && ((t = So(e)) === "formdata" || // detect form-data instance
  t === "object" && Ft(e.toString) && e.toString() === "[object FormData]"));
}, Qv = Zt("URLSearchParams"), [Xv, Jv, Zv, ey] = ["ReadableStream", "Request", "Response", "Headers"].map(Zt), ty = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
const sr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xc = (e) => !ma(e) && e !== sr;
function Os() {
  const { caseless: e } = Xc(this) && this || {}, t = {}, n = (r, a) => {
    const o = e && Qc(t, a) || a;
    La(t[o]) && La(r) ? t[o] = Os(t[o], r) : La(r) ? t[o] = Os({}, r) : Br(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && wa(arguments[r], n);
  return t;
}
const ny = (e, t, n, { allOwnKeys: r } = {}) => (wa(t, (a, o) => {
  n && Ft(a) ? e[o] = zc(a, n) : e[o] = a;
}, { allOwnKeys: r }), e), ry = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ay = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, oy = (e, t, n, r) => {
  let a, o, s;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
      s = a[o], (!r || r(s, e, t)) && !l[s] && (t[s] = e[s], l[s] = !0);
    e = n !== !1 && yl(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, sy = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, ly = (e) => {
  if (!e) return null;
  if (Br(e)) return e;
  let t = e.length;
  if (!Kc(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, iy = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && yl(Uint8Array)), uy = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const o = a.value;
    t.call(e, o[0], o[1]);
  }
}, cy = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, dy = Zt("HTMLFormElement"), fy = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), ji = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), py = Zt("RegExp"), Jc = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  wa(n, (a, o) => {
    let s;
    (s = t(a, o, e)) !== !1 && (r[o] = s || a);
  }), Object.defineProperties(e, r);
}, my = (e) => {
  Jc(e, (t, n) => {
    if (Ft(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Ft(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, hy = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((o) => {
      n[o] = !0;
    });
  };
  return Br(e) ? r(e) : r(String(e).split(t)), n;
}, vy = () => {
}, yy = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Xo = "abcdefghijklmnopqrstuvwxyz", Ui = "0123456789", Zc = {
  DIGIT: Ui,
  ALPHA: Xo,
  ALPHA_DIGIT: Xo + Xo.toUpperCase() + Ui
}, gy = (e = 16, t = Zc.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function by(e) {
  return !!(e && Ft(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const wy = (e) => {
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
}, _y = Zt("AsyncFunction"), xy = (e) => e && (Do(e) || Ft(e)) && Ft(e.then) && Ft(e.catch), ed = ((e, t) => e ? setImmediate : t ? ((n, r) => (sr.addEventListener("message", ({ source: a, data: o }) => {
  a === sr && o === n && r.length && r.shift()();
}, !1), (a) => {
  r.push(a), sr.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ft(sr.postMessage)
), ky = typeof queueMicrotask < "u" ? queueMicrotask.bind(sr) : typeof process < "u" && process.nextTick || ed, q = {
  isArray: Br,
  isArrayBuffer: Gc,
  isBuffer: Lv,
  isFormData: Kv,
  isArrayBufferView: Yv,
  isString: Hv,
  isNumber: Kc,
  isBoolean: jv,
  isObject: Do,
  isPlainObject: La,
  isReadableStream: Xv,
  isRequest: Jv,
  isResponse: Zv,
  isHeaders: ey,
  isUndefined: ma,
  isDate: Uv,
  isFile: Wv,
  isBlob: qv,
  isRegExp: py,
  isFunction: Ft,
  isStream: Gv,
  isURLSearchParams: Qv,
  isTypedArray: iy,
  isFileList: zv,
  forEach: wa,
  merge: Os,
  extend: ny,
  trim: ty,
  stripBOM: ry,
  inherits: ay,
  toFlatObject: oy,
  kindOf: So,
  kindOfTest: Zt,
  endsWith: sy,
  toArray: ly,
  forEachEntry: uy,
  matchAll: cy,
  isHTMLForm: dy,
  hasOwnProperty: ji,
  hasOwnProp: ji,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Jc,
  freezeMethods: my,
  toObjectSet: hy,
  toCamelCase: fy,
  noop: vy,
  toFiniteNumber: yy,
  findKey: Qc,
  global: sr,
  isContextDefined: Xc,
  ALPHABET: Zc,
  generateString: gy,
  isSpecCompliantForm: by,
  toJSONObject: wy,
  isAsyncFn: _y,
  isThenable: xy,
  setImmediate: ed,
  asap: ky
};
function De(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a, this.status = a.status ? a.status : null);
}
q.inherits(De, Error, {
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
      config: q.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const td = De.prototype, nd = {};
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
  nd[e] = { value: e };
});
Object.defineProperties(De, nd);
Object.defineProperty(td, "isAxiosError", { value: !0 });
De.from = (e, t, n, r, a, o) => {
  const s = Object.create(td);
  return q.toFlatObject(e, s, function(i) {
    return i !== Error.prototype;
  }, (l) => l !== "isAxiosError"), De.call(s, e.message, t, n, r, a), s.cause = e, s.name = e.name, o && Object.assign(s, o), s;
};
const My = null;
function Es(e) {
  return q.isPlainObject(e) || q.isArray(e);
}
function rd(e) {
  return q.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Wi(e, t, n) {
  return e ? e.concat(t).map(function(a, o) {
    return a = rd(a), !n && o ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function Ty(e) {
  return q.isArray(e) && !e.some(Es);
}
const Py = q.toFlatObject(q, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Co(e, t, n) {
  if (!q.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = q.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, D) {
    return !q.isUndefined(D[y]);
  });
  const r = n.metaTokens, a = n.visitor || u, o = n.dots, s = n.indexes, i = (n.Blob || typeof Blob < "u" && Blob) && q.isSpecCompliantForm(t);
  if (!q.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(v) {
    if (v === null) return "";
    if (q.isDate(v))
      return v.toISOString();
    if (!i && q.isBlob(v))
      throw new De("Blob is not supported. Use a Buffer instead.");
    return q.isArrayBuffer(v) || q.isTypedArray(v) ? i && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function u(v, y, D) {
    let N = v;
    if (v && !D && typeof v == "object") {
      if (q.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), v = JSON.stringify(v);
      else if (q.isArray(v) && Ty(v) || (q.isFileList(v) || q.endsWith(y, "[]")) && (N = q.toArray(v)))
        return y = rd(y), N.forEach(function(g, P) {
          !(q.isUndefined(g) || g === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Wi([y], P, o) : s === null ? y : y + "[]",
            c(g)
          );
        }), !1;
    }
    return Es(v) ? !0 : (t.append(Wi(D, y, o), c(v)), !1);
  }
  const d = [], p = Object.assign(Py, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Es
  });
  function b(v, y) {
    if (!q.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(v), q.forEach(v, function(N, O) {
        (!(q.isUndefined(N) || N === null) && a.call(
          t,
          N,
          q.isString(O) ? O.trim() : O,
          y,
          p
        )) === !0 && b(N, y ? y.concat(O) : [O]);
      }), d.pop();
    }
  }
  if (!q.isObject(e))
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
const ad = gl.prototype;
ad.append = function(t, n) {
  this._pairs.push([t, n]);
};
ad.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, qi);
  } : qi;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function Sy(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function od(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Sy, a = n && n.serialize;
  let o;
  if (a ? o = a(t, n) : o = q.isURLSearchParams(t) ? t.toString() : new gl(t, n).toString(r), o) {
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
    q.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const sd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ay = typeof URLSearchParams < "u" ? URLSearchParams : gl, Dy = typeof FormData < "u" ? FormData : null, Cy = typeof Blob < "u" ? Blob : null, Oy = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ay,
    FormData: Dy,
    Blob: Cy
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, bl = typeof window < "u" && typeof document < "u", Rs = typeof navigator == "object" && navigator || void 0, Ey = bl && (!Rs || ["ReactNative", "NativeScript", "NS"].indexOf(Rs.product) < 0), Ry = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ny = bl && window.location.href || "http://localhost", $y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: bl,
  hasStandardBrowserEnv: Ey,
  hasStandardBrowserWebWorkerEnv: Ry,
  navigator: Rs,
  origin: Ny
}, Symbol.toStringTag, { value: "Module" })), Et = {
  ...$y,
  ...Oy
};
function Vy(e, t) {
  return Co(e, new Et.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, o) {
      return Et.isNode && q.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Fy(e) {
  return q.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Iy(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let o;
  for (r = 0; r < a; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function ld(e) {
  function t(n, r, a, o) {
    let s = n[o++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s), i = o >= n.length;
    return s = !s && q.isArray(a) ? a.length : s, i ? (q.hasOwnProp(a, s) ? a[s] = [a[s], r] : a[s] = r, !l) : ((!a[s] || !q.isObject(a[s])) && (a[s] = []), t(n, r, a[s], o) && q.isArray(a[s]) && (a[s] = Iy(a[s])), !l);
  }
  if (q.isFormData(e) && q.isFunction(e.entries)) {
    const n = {};
    return q.forEachEntry(e, (r, a) => {
      t(Fy(r), a, n, 0);
    }), n;
  }
  return null;
}
function By(e, t, n) {
  if (q.isString(e))
    try {
      return (t || JSON.parse)(e), q.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const _a = {
  transitional: sd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, o = q.isObject(t);
    if (o && q.isHTMLForm(t) && (t = new FormData(t)), q.isFormData(t))
      return a ? JSON.stringify(ld(t)) : t;
    if (q.isArrayBuffer(t) || q.isBuffer(t) || q.isStream(t) || q.isFile(t) || q.isBlob(t) || q.isReadableStream(t))
      return t;
    if (q.isArrayBufferView(t))
      return t.buffer;
    if (q.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Vy(t, this.formSerializer).toString();
      if ((l = q.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const i = this.env && this.env.FormData;
        return Co(
          l ? { "files[]": t } : t,
          i && new i(),
          this.formSerializer
        );
      }
    }
    return o || a ? (n.setContentType("application/json", !1), By(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || _a.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (q.isResponse(t) || q.isReadableStream(t))
      return t;
    if (t && q.isString(t) && (r && !this.responseType || a)) {
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
q.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  _a.headers[e] = {};
});
const Ly = q.toObjectSet([
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
]), Yy = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(s) {
    a = s.indexOf(":"), n = s.substring(0, a).trim().toLowerCase(), r = s.substring(a + 1).trim(), !(!n || t[n] && Ly[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Gi = Symbol("internals");
function Wr(e) {
  return e && String(e).trim().toLowerCase();
}
function Ya(e) {
  return e === !1 || e == null ? e : q.isArray(e) ? e.map(Ya) : String(e);
}
function Hy(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const jy = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Jo(e, t, n, r, a) {
  if (q.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!q.isString(t)) {
    if (q.isString(r))
      return t.indexOf(r) !== -1;
    if (q.isRegExp(r))
      return r.test(t);
  }
}
function Uy(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Wy(e, t) {
  const n = q.toCamelCase(" " + t);
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
      const d = q.findKey(a, u);
      (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[d || i] = Ya(l));
    }
    const s = (l, i) => q.forEach(l, (c, u) => o(c, u, i));
    if (q.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (q.isString(t) && (t = t.trim()) && !jy(t))
      s(Yy(t), n);
    else if (q.isHeaders(t))
      for (const [l, i] of t.entries())
        o(i, l, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Wr(t), t) {
      const r = q.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return Hy(a);
        if (q.isFunction(n))
          return n.call(this, a, r);
        if (q.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Wr(t), t) {
      const r = q.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Jo(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function o(s) {
      if (s = Wr(s), s) {
        const l = q.findKey(r, s);
        l && (!n || Jo(r, r[l], l, n)) && (delete r[l], a = !0);
      }
    }
    return q.isArray(t) ? t.forEach(o) : o(t), a;
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
    return q.forEach(this, (a, o) => {
      const s = q.findKey(r, o);
      if (s) {
        n[s] = Ya(a), delete n[o];
        return;
      }
      const l = t ? Uy(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Ya(a), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return q.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && q.isArray(r) ? r.join(", ") : r);
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
      r[l] || (Wy(a, s), r[l] = !0);
    }
    return q.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Rt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
q.reduceDescriptors(Rt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
q.freezeMethods(Rt);
function Zo(e, t) {
  const n = this || _a, r = t || n, a = Rt.from(r.headers);
  let o = r.data;
  return q.forEach(e, function(l) {
    o = l.call(n, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function id(e) {
  return !!(e && e.__CANCEL__);
}
function Lr(e, t, n) {
  De.call(this, e ?? "canceled", De.ERR_CANCELED, t, n), this.name = "CanceledError";
}
q.inherits(Lr, De, {
  __CANCEL__: !0
});
function ud(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new De(
    "Request failed with status code " + n.status,
    [De.ERR_BAD_REQUEST, De.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function qy(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function zy(e, t) {
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
function Gy(e, t) {
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
  const a = zy(50, 250);
  return Gy((o) => {
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
}, Qi = (e) => (...t) => q.asap(() => e(...t)), Ky = Et.hasStandardBrowserEnv ? (
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
      const l = q.isString(s) ? a(s) : s;
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
      q.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), q.isString(r) && s.push("path=" + r), q.isString(a) && s.push("domain=" + a), o === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function Xy(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Jy(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function cd(e, t) {
  return e && !Xy(t) ? Jy(e, t) : t;
}
const Xi = (e) => e instanceof Rt ? { ...e } : e;
function mr(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d) {
    return q.isPlainObject(c) && q.isPlainObject(u) ? q.merge.call({ caseless: d }, c, u) : q.isPlainObject(u) ? q.merge({}, u) : q.isArray(u) ? u.slice() : u;
  }
  function a(c, u, d) {
    if (q.isUndefined(u)) {
      if (!q.isUndefined(c))
        return r(void 0, c, d);
    } else return r(c, u, d);
  }
  function o(c, u) {
    if (!q.isUndefined(u))
      return r(void 0, u);
  }
  function s(c, u) {
    if (q.isUndefined(u)) {
      if (!q.isUndefined(c))
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
  return q.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = i[u] || a, p = d(e[u], t[u], u);
    q.isUndefined(p) && d !== l || (n[u] = p);
  }), n;
}
const dd = (e) => {
  const t = mr({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: a, xsrfCookieName: o, headers: s, auth: l } = t;
  t.headers = s = Rt.from(s), t.url = od(cd(t.baseURL, t.url), e.params, e.paramsSerializer), l && s.set(
    "Authorization",
    "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))
  );
  let i;
  if (q.isFormData(n)) {
    if (Et.hasStandardBrowserEnv || Et.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((i = s.getContentType()) !== !1) {
      const [c, ...u] = i ? i.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Et.hasStandardBrowserEnv && (r && q.isFunction(r) && (r = r(t)), r || r !== !1 && Ky(t.url))) {
    const c = a && o && Qy.read(o);
    c && s.set(a, c);
  }
  return t;
}, Zy = typeof XMLHttpRequest < "u", eg = Zy && function(e) {
  return new Promise(function(n, r) {
    const a = dd(e);
    let o = a.data;
    const s = Rt.from(a.headers).normalize();
    let { responseType: l, onUploadProgress: i, onDownloadProgress: c } = a, u, d, p, b, v;
    function y() {
      b && b(), v && v(), a.cancelToken && a.cancelToken.unsubscribe(u), a.signal && a.signal.removeEventListener("abort", u);
    }
    let D = new XMLHttpRequest();
    D.open(a.method.toUpperCase(), a.url, !0), D.timeout = a.timeout;
    function N() {
      if (!D)
        return;
      const g = Rt.from(
        "getAllResponseHeaders" in D && D.getAllResponseHeaders()
      ), E = {
        data: !l || l === "text" || l === "json" ? D.responseText : D.response,
        status: D.status,
        statusText: D.statusText,
        headers: g,
        config: e,
        request: D
      };
      ud(function($) {
        n($), y();
      }, function($) {
        r($), y();
      }, E), D = null;
    }
    "onloadend" in D ? D.onloadend = N : D.onreadystatechange = function() {
      !D || D.readyState !== 4 || D.status === 0 && !(D.responseURL && D.responseURL.indexOf("file:") === 0) || setTimeout(N);
    }, D.onabort = function() {
      D && (r(new De("Request aborted", De.ECONNABORTED, e, D)), D = null);
    }, D.onerror = function() {
      r(new De("Network Error", De.ERR_NETWORK, e, D)), D = null;
    }, D.ontimeout = function() {
      let P = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const E = a.transitional || sd;
      a.timeoutErrorMessage && (P = a.timeoutErrorMessage), r(new De(
        P,
        E.clarifyTimeoutError ? De.ETIMEDOUT : De.ECONNABORTED,
        e,
        D
      )), D = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in D && q.forEach(s.toJSON(), function(P, E) {
      D.setRequestHeader(E, P);
    }), q.isUndefined(a.withCredentials) || (D.withCredentials = !!a.withCredentials), l && l !== "json" && (D.responseType = a.responseType), c && ([p, v] = ro(c, !0), D.addEventListener("progress", p)), i && D.upload && ([d, b] = ro(i), D.upload.addEventListener("progress", d), D.upload.addEventListener("loadend", b)), (a.cancelToken || a.signal) && (u = (g) => {
      D && (r(!g || g.type ? new Lr(null, e, D) : g), D.abort(), D = null);
    }, a.cancelToken && a.cancelToken.subscribe(u), a.signal && (a.signal.aborted ? u() : a.signal.addEventListener("abort", u)));
    const O = qy(a.url);
    if (O && Et.protocols.indexOf(O) === -1) {
      r(new De("Unsupported protocol " + O + ":", De.ERR_BAD_REQUEST, e));
      return;
    }
    D.send(o || null);
  });
}, tg = (e, t) => {
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
    return i.unsubscribe = () => q.asap(l), i;
  }
}, ng = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, a;
  for (; r < n; )
    a = r + t, yield e.slice(r, a), r = a;
}, rg = async function* (e, t) {
  for await (const n of ag(e))
    yield* ng(n, t);
}, ag = async function* (e) {
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
  const a = rg(e, t);
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
}, Oo = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", fd = Oo && typeof ReadableStream == "function", og = Oo && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), pd = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, sg = fd && pd(() => {
  let e = !1;
  const t = new Request(Et.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Zi = 64 * 1024, Ns = fd && pd(() => q.isReadableStream(new Response("").body)), ao = {
  stream: Ns && ((e) => e.body)
};
Oo && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ao[t] && (ao[t] = q.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new De(`Response type '${t}' is not supported`, De.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const lg = async (e) => {
  if (e == null)
    return 0;
  if (q.isBlob(e))
    return e.size;
  if (q.isSpecCompliantForm(e))
    return (await new Request(Et.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (q.isArrayBufferView(e) || q.isArrayBuffer(e))
    return e.byteLength;
  if (q.isURLSearchParams(e) && (e = e + ""), q.isString(e))
    return (await og(e)).byteLength;
}, ig = async (e, t) => {
  const n = q.toFiniteNumber(e.getContentLength());
  return n ?? lg(t);
}, ug = Oo && (async (e) => {
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
  } = dd(e);
  c = c ? (c + "").toLowerCase() : "text";
  let b = tg([a, o && o.toAbortSignal()], s), v;
  const y = b && b.unsubscribe && (() => {
    b.unsubscribe();
  });
  let D;
  try {
    if (i && sg && n !== "get" && n !== "head" && (D = await ig(u, r)) !== 0) {
      let E = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), k;
      if (q.isFormData(r) && (k = E.headers.get("content-type")) && u.setContentType(k), E.body) {
        const [$, _] = Ki(
          D,
          ro(Qi(i))
        );
        r = Ji(E.body, Zi, $, _);
      }
    }
    q.isString(d) || (d = d ? "include" : "omit");
    const N = "credentials" in Request.prototype;
    v = new Request(t, {
      ...p,
      signal: b,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: N ? d : void 0
    });
    let O = await fetch(v);
    const g = Ns && (c === "stream" || c === "response");
    if (Ns && (l || g && y)) {
      const E = {};
      ["status", "statusText", "headers"].forEach((T) => {
        E[T] = O[T];
      });
      const k = q.toFiniteNumber(O.headers.get("content-length")), [$, _] = l && Ki(
        k,
        ro(Qi(l), !0)
      ) || [];
      O = new Response(
        Ji(O.body, Zi, $, () => {
          _ && _(), y && y();
        }),
        E
      );
    }
    c = c || "text";
    let P = await ao[q.findKey(ao, c) || "text"](O, e);
    return !g && y && y(), await new Promise((E, k) => {
      ud(E, k, {
        data: P,
        headers: Rt.from(O.headers),
        status: O.status,
        statusText: O.statusText,
        config: e,
        request: v
      });
    });
  } catch (N) {
    throw y && y(), N && N.name === "TypeError" && /fetch/i.test(N.message) ? Object.assign(
      new De("Network Error", De.ERR_NETWORK, e, v),
      {
        cause: N.cause || N
      }
    ) : De.from(N, N && N.code, e, v);
  }
}), $s = {
  http: My,
  xhr: eg,
  fetch: ug
};
q.forEach($s, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const eu = (e) => `- ${e}`, cg = (e) => q.isFunction(e) || e === null || e === !1, md = {
  getAdapter: (e) => {
    e = q.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let s;
      if (r = n, !cg(n) && (r = $s[(s = String(n)).toLowerCase()], r === void 0))
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
  adapters: $s
};
function es(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Lr(null, e);
}
function tu(e) {
  return es(e), e.headers = Rt.from(e.headers), e.data = Zo.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), md.getAdapter(e.adapter || _a.adapter)(e).then(function(r) {
    return es(e), r.data = Zo.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Rt.from(r.headers), r;
  }, function(r) {
    return id(r) || (es(e), r && r.response && (r.response.data = Zo.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Rt.from(r.response.headers))), Promise.reject(r);
  });
}
const hd = "1.7.7", wl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  wl[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const nu = {};
wl.transitional = function(t, n, r) {
  function a(o, s) {
    return "[Axios v" + hd + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
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
function dg(e, t, n) {
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
  assertOptions: dg,
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
    }, !1), a != null && (q.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : Vs.assertOptions(a, {
      encode: Tn.function,
      serialize: Tn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = o && q.merge(
      o.common,
      o[n.method]
    );
    o && q.forEach(
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
    const n = cd(t.baseURL, t.url);
    return od(n, t.params, t.paramsSerializer);
  }
}
q.forEach(["delete", "get", "head", "options"], function(t) {
  dr.prototype[t] = function(n, r) {
    return this.request(mr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
q.forEach(["post", "put", "patch"], function(t) {
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
function fg(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function pg(e) {
  return q.isObject(e) && e.isAxiosError === !0;
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
function vd(e) {
  const t = new dr(e), n = zc(dr.prototype.request, t);
  return q.extend(n, dr.prototype, t, { allOwnKeys: !0 }), q.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return vd(mr(e, a));
  }, n;
}
const ot = vd(_a);
ot.Axios = dr;
ot.CanceledError = Lr;
ot.CancelToken = _l;
ot.isCancel = id;
ot.VERSION = hd;
ot.toFormData = Co;
ot.AxiosError = De;
ot.Cancel = ot.CanceledError;
ot.all = function(t) {
  return Promise.all(t);
};
ot.spread = fg;
ot.isAxiosError = pg;
ot.mergeConfig = mr;
ot.AxiosHeaders = Rt;
ot.formToJSON = (e) => ld(q.isHTMLForm(e) ? new FormData(e) : e);
ot.getAdapter = md.getAdapter;
ot.HttpStatusCode = Fs;
ot.default = ot;
function ru(e) {
  return ot.get(e).then((t) => t.data);
}
const yd = {
  Value: no,
  ValueString: Cr,
  ValueDoubleRange: cr,
  ValueDateRange: Or,
  ValueFilePath: Er,
  Mode: Yn,
  SubSystem: Hn,
  Command: pa,
  PORISValue: no,
  PORISValueString: Cr,
  PORISValueFloat: cr,
  PORISValueDoubleRange: cr,
  PORISValueDate: Or,
  PORISValueFilePath: Er,
  PORISMode: Yn,
  PORISNode: Hn,
  PORISCmd: pa
}, mg = [
  "value",
  "value-string",
  "value-double-range",
  "value-date",
  "value-file-path"
], hg = "mode", vg = "sub-system", yg = "command";
function nt(e, t) {
  const n = e.getElementsByTagName(t);
  if (n.length > 0 && n[0].childNodes.length > 0) {
    const r = n[0].getAttribute("type");
    return r === "integer" ? parseInt(n[0].childNodes[0].nodeValue, 10) : r === "float" ? parseFloat(n[0].childNodes[0].nodeValue) : r === "timestamp" ? Date.parse(n[0].childNodes[0].nodeValue) : n[0].childNodes[0].nodeValue;
  } else
    return null;
}
function gg(e, t) {
  const n = e.getElementsByTagName("destinations"), r = [];
  if (n.length > 0) {
    const a = e.getElementsByTagName("destination");
    if (a.length > 0)
      for (const o of a) {
        const s = yd[o.getAttribute("type")], l = nt(o, "id");
        s && s != pa && (s == Hn && (t.find((i) => {
        }) || t.push(l)), r.push({ type: s, id: l }));
      }
  }
  return r.length > 0 ? r : null;
}
function bg(e) {
  const t = e.getElementsByTagName("commands");
  return t.length === 0 ? [] : Array.from(t[0].getElementsByTagName("command-ref")).map((n) => ({
    type: pa,
    id: nt(n, "id")
  }));
}
function wg(e) {
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
function _g(e) {
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
  let n = nt(e, "id"), r = nt(e, "ident"), a = nt(e, "name"), o = nt(e, "node-type-id"), s = yd[nt(e, "type")], l = gg(e, t), i = bg(e), c = wg(e), u = _g(e), d = !!(l != null && l.find((y) => Cs.includes(y.type) && y.id > 0)), p = !!(l != null && l.find((y) => Cs.includes(y.type))), b = !!(l != null && l.find((y) => y.type == Yn)), v = !!(l != null && l.find((y) => y.type == Hn));
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
      n.valuesNodes = r.filter((a) => a.type != Yn && a.type != Hn), n.modesNodes = r.filter((a) => a.type === Yn), n.subsystemsNodes = r.filter((a) => a.type === Hn), n.modesNodes.forEach((a) => {
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
function xg(e, t) {
  t.forEach((n) => {
    n.commandsNodes = (n.commandReferences || []).map((r) => e.findNode(r.type, r.id)).filter(Boolean);
  });
}
function kg(e) {
  e.forEach((t) => {
    var n, r;
    t.defaultValue = ((n = t.valuesNodes) == null ? void 0 : n.find((a) => a.id === t.defaultValueId)) || ((r = t.valuesNodes) == null ? void 0 : r[0]) || null;
  });
}
function Mg(e) {
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
      return c == Yn ? d = this.modes : c == Hn ? d = this.subsystems : c == pa ? d = this.commands : d = this.values, d.find((p) => p.id === u);
    }
  };
  var r = [];
  const o = new DOMParser().parseFromString(t, "text/xml");
  for (const c of mg) {
    let u = o.getElementsByTagName(c);
    for (const d of u) {
      const p = Ra(d, r);
      p.parent = null;
      let b = nt(d, "value-formatter-id");
      p[b] = b;
      const v = p.type;
      if (v == cr) {
        let y = nt(d, "default-float"), D = nt(d, "rangemax"), N = nt(d, "rangemin");
        p.defaultFloat = y, p.rangemax = D, p.rangemin = N;
      } else if (v == Cr) {
        let y = nt(d, "default-string");
        p.defaultString = y;
      } else if (v == Or) {
        let y = nt(d, "default-date"), D = nt(d, "date-max"), N = nt(d, "date-min");
        p.defaultDate = y, p.datemax = D, p.datemin = N;
      } else if (v == Er) {
        let y = nt(d, "default-string"), D = nt(d, "file-description"), N = nt(d, "file-extension");
        p.defaultString = y, p.fileDescription = D, p.fileExtension = N;
      }
      n.values.push(new Qr(p));
    }
  }
  const s = o.getElementsByTagName(hg);
  for (const c of s) {
    const u = Ra(c, r);
    let d = nt(c, "default-mode-id"), p = nt(c, "default-value-id");
    u.defaultModeId = d, u.defaultValueId = p, n.modes.push(new Qr(u));
  }
  const l = o.getElementsByTagName(yg);
  for (const c of l) {
    const u = Ra(c, r);
    n.commands.push(new Qr(u));
  }
  const i = o.getElementsByTagName(vg);
  for (const c of i) {
    const u = Ra(c, r);
    let d = nt(c, "default-mode-id");
    u.defaultModeId = d, n.subsystems.push(new Qr(u));
  }
  return n.rootSubsystem = n.subsystems.find((c) => !r.includes(c.id)), ts(n, n.modes), ts(n, n.params), ts(n, n.subsystems), au(n.modes), au(n.subsystems), kg(n.modes), xg(n, n.subsystems), Mg(n), n;
}
let gd = !1;
function Tg(e) {
  gd = e;
}
function hn(...e) {
  gd && console.log(...e);
}
const xl = Xm("model", () => {
  const e = J(null), t = J([]), n = J([]), r = J([]), a = J(), o = J(!1), s = J([]), l = J({});
  function i(k) {
    o.value = !0, ru(`/models/${k}.xml`).then((_) => {
      e.value = _;
      let T = ou(this, _);
      t.value = T.values, n.value = T.modes, r.value = T.subsystems, a.value = T.rootSubsystem, s.value = [], l.value = {}, y(T.rootSubsystem);
    }).finally(() => {
      o.value = !1;
    });
  }
  function c(k) {
    o.value = !0, ru(`${k}`).then((_) => {
      e.value = _;
      let T = ou(this, _);
      t.value = T.values, n.value = T.modes, r.value = T.subsystems, a.value = T.rootSubsystem, s.value = [], l.value = {}, y(T.rootSubsystem);
    }).finally(() => {
      o.value = !1;
    });
  }
  function u(k) {
    return t.value.find(($) => $.id == k);
  }
  function d(k) {
    return n.value.find(($) => $.id == k);
  }
  function p(k) {
    return r.value.find(($) => $.id == k);
  }
  function b(k, $, _) {
    k.validModes = _;
    let T = null;
    _.length > 0 ? $ != null && _.includes($) ? T = $ : k.parent == null && _.includes(k.defaultMode) ? T = k.defaultMode : T = _[0] : T = k.unknownMode || null;
    const W = k.currentMode !== T;
    return k.currentMode = T, k.candidateMode = T, s.value[`${k.id}`] = T, k.hasValues && E(k, T), k.hasSubsystems && k.subsystemsNodes.forEach((B) => {
      D(B, B.currentMode, T);
    }), W && hn(`PORIS mode changed for ${k.name}: ${(T == null ? void 0 : T.name) || "none"}`), T;
  }
  function v(k, $) {
    hn(`setValidMode_ ${k.name} ${$ == null ? void 0 : $.name}, NOT using supermode`);
    let _ = O(k);
    return hn(`   setValidMode validModes len ${_.length}`, _), b(k, $, _);
  }
  function y(k, $) {
    Wn();
    let _;
    try {
      _ = v(k, $);
    } finally {
      Mf();
    }
    return Zl(s), Zl(l), _;
  }
  function D(k, $, _) {
    const T = new Set(k.modesNodes.map((B) => B.id));
    let W = _.modesNodes.filter((B) => T.has(B.id));
    return hn(`   setValidMode validModes  len ${W.length}`, W), b(k, $, W);
  }
  function N(k) {
    const $ = s.value.reduce((_, T) => k.includes(T.id) ? T : _, null);
    return $ || k[0];
  }
  function O(k) {
    if (k.parent != null && k.parent.currentMode != null) {
      hn(`parent: ${k.parent.name}`), hn(`parent mode: ${k.parent.currentMode.name}`), hn("parent.mode.submodes:", k.parent.currentMode.modesNodes);
      const $ = new Set(k.modesNodes.map((_) => _.id));
      return k.parent.currentMode.modesNodes.filter((_) => $.has(_.id));
    } else return k.parent != null ? [] : k.modesNodes;
  }
  function g(k) {
    return O(k).length > 0;
  }
  function P(k, $, _) {
    l.value[`${k.id}`] = { value: $, data: _ };
  }
  function E(k, $, _ = null) {
    const T = l.value[`${k.id}`] || {};
    if (!($ != null && $.hasValues))
      return P(k, null, null), { value: null, data: null };
    const W = $.valuesNodes || [];
    if (W.length === 0)
      return P(k, null, null), { value: null, data: null };
    const B = W.find((U) => {
      var x;
      return U.id === ((x = $.defaultValue) == null ? void 0 : x.id);
    }) || W[0];
    let V = W.find((U) => {
      var x;
      return U.id === ((x = _ || T.value) == null ? void 0 : x.id);
    }) || B, j = T.data;
    return V.type === cr ? (typeof j != "number" || !Number.isFinite(j) || j < Number(V.rangemin) || j > Number(V.rangemax)) && (j = Number(V.defaultFloat)) : V.type === Cr || V.type === Er ? typeof j != "string" && (j = V.defaultString || "") : V.type === Or && j == null && (j = V.defaultDate), P(k, V, j), { value: V, data: j };
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
    getCurrentMode: N,
    setValidMode: y,
    getValidObjModes: O,
    hasValidObjModes: g,
    getSystemValue: E,
    setSystemValue: P
  };
}), Pg = ["disabled"], Sg = ["value"], bd = {
  __name: "ModeSelector",
  props: /* @__PURE__ */ uc({
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
    return ft(
      () => n.modes,
      (a, o) => {
        r.value = a;
      }
    ), (a, o) => Vn((F(), z("select", {
      "onUpdate:modelValue": o[0] || (o[0] = (s) => t.value = s),
      disabled: r.value.length < 2
    }, [
      (F(!0), z(xe, null, qe(r.value, (s) => (F(), z("option", {
        key: s.id,
        value: s
      }, We(s.label || s.name), 9, Sg))), 128))
    ], 8, Pg)), [
      [Sc, t.value]
    ]);
  }
};
function Me(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Ue(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Wt(e, t) {
  const n = Me(e);
  return isNaN(t) ? Ue(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function Gt(e, t) {
  const n = Me(e);
  if (isNaN(t)) return Ue(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), a = Ue(e, n.getTime());
  a.setMonth(n.getMonth() + t + 1, 0);
  const o = a.getDate();
  return r >= o ? a : (n.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    r
  ), n);
}
function wd(e, t) {
  const {
    years: n = 0,
    months: r = 0,
    weeks: a = 0,
    days: o = 0,
    hours: s = 0,
    minutes: l = 0,
    seconds: i = 0
  } = t, c = Me(e), u = r || n ? Gt(c, r + n * 12) : c, d = o || a ? Wt(u, o + a * 7) : u, p = l + s * 60, v = (i + p * 60) * 1e3;
  return Ue(e, d.getTime() + v);
}
const _d = 6048e5, Ag = 864e5, Dg = 6e4, Cg = 36e5, Og = 1e3;
let Eg = {};
function yr() {
  return Eg;
}
function mn(e, t) {
  var l, i, c, u;
  const n = yr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((i = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : i.weekStartsOn) ?? n.weekStartsOn ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = Me(e), o = a.getDay(), s = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function Rr(e) {
  return mn(e, { weekStartsOn: 1 });
}
function xd(e) {
  const t = Me(e), n = t.getFullYear(), r = Ue(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const a = Rr(r), o = Ue(e, 0);
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
function kd(e, t) {
  const n = su(e), r = su(t), a = +n - oo(n), o = +r - oo(r);
  return Math.round((a - o) / Ag);
}
function Rg(e) {
  const t = xd(e), n = Ue(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), Rr(n);
}
function Ng(e, t) {
  const n = t * 3;
  return Gt(e, n);
}
function kl(e, t) {
  return Gt(e, t * 12);
}
function Md(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function oa(e) {
  if (!Md(e) && typeof e != "number")
    return !1;
  const t = Me(e);
  return !isNaN(Number(t));
}
function lu(e) {
  const t = Me(e);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function Td(e, t) {
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
function $g(e, t) {
  const n = Me(e.start), r = Me(e.end);
  let a = +n > +r;
  const o = a ? +lr(n) : +lr(r);
  let s = lr(a ? r : n), l = 1;
  const i = [];
  for (; +s <= o; )
    i.push(Me(s)), s = Ng(s, l);
  return a ? i.reverse() : i;
}
function Vg(e) {
  const t = Me(e), n = t.getFullYear();
  return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function Pd(e) {
  const t = Me(e), n = Ue(e, 0);
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
const Ig = {
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
}, Bg = (e, t, n) => {
  let r;
  const a = Ig[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function ns(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Lg = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Yg = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Hg = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, jg = {
  date: ns({
    formats: Lg,
    defaultWidth: "full"
  }),
  time: ns({
    formats: Yg,
    defaultWidth: "full"
  }),
  dateTime: ns({
    formats: Hg,
    defaultWidth: "full"
  })
}, Ug = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Wg = (e, t, n, r) => Ug[e];
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
const qg = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, zg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Gg = {
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
}, Kg = {
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
}, Xg = {
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
}, Jg = (e, t) => {
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
}, Zg = {
  ordinalNumber: Jg,
  era: qr({
    values: qg,
    defaultWidth: "wide"
  }),
  quarter: qr({
    values: zg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: qr({
    values: Gg,
    defaultWidth: "wide"
  }),
  day: qr({
    values: Kg,
    defaultWidth: "wide"
  }),
  dayPeriod: qr({
    values: Qg,
    defaultWidth: "wide",
    formattingValues: Xg,
    defaultFormattingWidth: "wide"
  })
};
function zr(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const s = o[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], i = Array.isArray(l) ? t0(l, (d) => d.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      e0(l, (d) => d.test(s))
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
function e0(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function t0(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function n0(e) {
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
const r0 = /^(\d+)(th|st|nd|rd)?/i, a0 = /\d+/i, o0 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, s0 = {
  any: [/^b/i, /^(a|c)/i]
}, l0 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, i0 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, u0 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, c0 = {
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
}, d0 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, f0 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, p0 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, m0 = {
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
}, h0 = {
  ordinalNumber: n0({
    matchPattern: r0,
    parsePattern: a0,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: zr({
    matchPatterns: o0,
    defaultMatchWidth: "wide",
    parsePatterns: s0,
    defaultParseWidth: "any"
  }),
  quarter: zr({
    matchPatterns: l0,
    defaultMatchWidth: "wide",
    parsePatterns: i0,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: zr({
    matchPatterns: u0,
    defaultMatchWidth: "wide",
    parsePatterns: c0,
    defaultParseWidth: "any"
  }),
  day: zr({
    matchPatterns: d0,
    defaultMatchWidth: "wide",
    parsePatterns: f0,
    defaultParseWidth: "any"
  }),
  dayPeriod: zr({
    matchPatterns: p0,
    defaultMatchWidth: "any",
    parsePatterns: m0,
    defaultParseWidth: "any"
  })
}, Sd = {
  code: "en-US",
  formatDistance: Bg,
  formatLong: jg,
  formatRelative: Wg,
  localize: Zg,
  match: h0,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function v0(e) {
  const t = Me(e);
  return kd(t, Pd(t)) + 1;
}
function Ml(e) {
  const t = Me(e), n = +Rr(t) - +Rg(t);
  return Math.round(n / _d) + 1;
}
function Tl(e, t) {
  var u, d, p, b;
  const n = Me(e), r = n.getFullYear(), a = yr(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((b = (p = a.locale) == null ? void 0 : p.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, s = Ue(e, 0);
  s.setFullYear(r + 1, 0, o), s.setHours(0, 0, 0, 0);
  const l = mn(s, t), i = Ue(e, 0);
  i.setFullYear(r, 0, o), i.setHours(0, 0, 0, 0);
  const c = mn(i, t);
  return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function y0(e, t) {
  var l, i, c, u;
  const n = yr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((i = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : i.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = Tl(e, t), o = Ue(e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), mn(o, t);
}
function Pl(e, t) {
  const n = Me(e), r = +mn(n, t) - +y0(n, t);
  return Math.round(r / _d) + 1;
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
    const n = xd(e);
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
    const r = v0(e);
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
}, Ad = (e, t) => {
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
}, g0 = (e, t) => {
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
  return o.replace("{{date}}", fu(r, t)).replace("{{time}}", Ad(a, t));
}, Is = {
  p: Ad,
  P: g0
}, b0 = /^D+$/, w0 = /^Y+$/, _0 = ["D", "DD", "YY", "YYYY"];
function Dd(e) {
  return b0.test(e);
}
function Cd(e) {
  return w0.test(e);
}
function Bs(e, t, n) {
  const r = x0(e, t, n);
  if (console.warn(r), _0.includes(e)) throw new RangeError(r);
}
function x0(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const k0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, M0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, T0 = /^'([^]*?)'?$/, P0 = /''/g, S0 = /[a-zA-Z]/;
function dn(e, t, n) {
  var u, d, p, b, v, y, D, N;
  const r = yr(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? Sd, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((b = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : b.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((y = (v = n == null ? void 0 : n.locale) == null ? void 0 : v.options) == null ? void 0 : y.weekStartsOn) ?? r.weekStartsOn ?? ((N = (D = r.locale) == null ? void 0 : D.options) == null ? void 0 : N.weekStartsOn) ?? 0, l = Me(e);
  if (!oa(l))
    throw new RangeError("Invalid time value");
  let i = t.match(M0).map((O) => {
    const g = O[0];
    if (g === "p" || g === "P") {
      const P = Is[g];
      return P(O, a.formatLong);
    }
    return O;
  }).join("").match(k0).map((O) => {
    if (O === "''")
      return { isToken: !1, value: "'" };
    const g = O[0];
    if (g === "'")
      return { isToken: !1, value: A0(O) };
    if (uu[g])
      return { isToken: !0, value: O };
    if (g.match(S0))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + g + "`"
      );
    return { isToken: !1, value: O };
  });
  a.localize.preprocessor && (i = a.localize.preprocessor(l, i));
  const c = {
    firstWeekContainsDate: o,
    weekStartsOn: s,
    locale: a
  };
  return i.map((O) => {
    if (!O.isToken) return O.value;
    const g = O.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Cd(g) || !(n != null && n.useAdditionalDayOfYearTokens) && Dd(g)) && Bs(g, t, String(e));
    const P = uu[g[0]];
    return P(l, g, a.localize, c);
  }).join("");
}
function A0(e) {
  const t = e.match(T0);
  return t ? t[1].replace(P0, "'") : e;
}
function D0(e) {
  return Me(e).getDay();
}
function C0(e) {
  const t = Me(e), n = t.getFullYear(), r = t.getMonth(), a = Ue(e, 0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function O0() {
  return Object.assign({}, yr());
}
function Kt(e) {
  return Me(e).getHours();
}
function E0(e) {
  let n = Me(e).getDay();
  return n === 0 && (n = 7), n;
}
function fn(e) {
  return Me(e).getMinutes();
}
function Ie(e) {
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
function R0(e, t) {
  const n = t instanceof Date ? Ue(t, 0) : new t(0);
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
class Od {
  constructor() {
    fe(this, "subPriority", 0);
  }
  validate(t, n) {
    return !0;
  }
}
class $0 extends Od {
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
class V0 extends Od {
  constructor() {
    super(...arguments);
    fe(this, "priority", N0);
    fe(this, "subPriority", -1);
  }
  set(n, r) {
    return r.timestampIsSet ? n : Ue(n, R0(n, Date));
  }
}
class je {
  run(t, n, r, a) {
    const o = this.parse(t, n, r, a);
    return o ? {
      setter: new $0(
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
class F0 extends je {
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
    value: r * (a * Cg + o * Dg + s * Og),
    rest: t.slice(n[0].length)
  };
}
function Ed(e) {
  return rt(pt.anyDigitsSigned, e);
}
function ct(e, t) {
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
function Rd(e, t) {
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
class I0 extends je {
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
        return mt(ct(4, n), o);
      case "yo":
        return mt(
          a.ordinalNumber(n, {
            unit: "year"
          }),
          o
        );
      default:
        return mt(ct(r.length, n), o);
    }
  }
  validate(n, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(n, r, a) {
    const o = n.getFullYear();
    if (a.isTwoDigitYear) {
      const l = Rd(
        a.year,
        o
      );
      return n.setFullYear(l, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
    const s = !("era" in r) || r.era === 1 ? a.year : 1 - a.year;
    return n.setFullYear(s, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class B0 extends je {
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
        return mt(ct(4, n), o);
      case "Yo":
        return mt(
          a.ordinalNumber(n, {
            unit: "year"
          }),
          o
        );
      default:
        return mt(ct(r.length, n), o);
    }
  }
  validate(n, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(n, r, a, o) {
    const s = Tl(n, o);
    if (a.isTwoDigitYear) {
      const i = Rd(
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
class L0 extends je {
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
    const o = Ue(n, 0);
    return o.setFullYear(a, 0, 4), o.setHours(0, 0, 0, 0), Rr(o);
  }
}
class Y0 extends je {
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
class H0 extends je {
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
        return ct(r.length, n);
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
class j0 extends je {
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
        return ct(r.length, n);
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
class U0 extends je {
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
        return mt(ct(2, n), o);
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
class W0 extends je {
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
        return mt(ct(2, n), o);
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
function q0(e, t, n) {
  const r = Me(e), a = Pl(r, n) - t;
  return r.setDate(r.getDate() - a * 7), r;
}
class z0 extends je {
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
        return ct(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 53;
  }
  set(n, r, a, o) {
    return mn(q0(n, a, o), o);
  }
}
function G0(e, t) {
  const n = Me(e), r = Ml(n) - t;
  return n.setDate(n.getDate() - r * 7), n;
}
class K0 extends je {
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
        return ct(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 53;
  }
  set(n, r, a) {
    return Rr(G0(n, a));
  }
}
const Q0 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], X0 = [
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
class J0 extends je {
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
        return ct(r.length, n);
    }
  }
  validate(n, r) {
    const a = n.getFullYear(), o = Nd(a), s = n.getMonth();
    return o ? r >= 1 && r <= X0[s] : r >= 1 && r <= Q0[s];
  }
  set(n, r, a) {
    return n.setDate(a), n.setHours(0, 0, 0, 0), n;
  }
}
class Z0 extends je {
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
        return ct(r.length, n);
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
class eb extends je {
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
class tb extends je {
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
        return mt(ct(r.length, n), s);
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
class nb extends je {
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
        return mt(ct(r.length, n), s);
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
function rb(e, t) {
  const n = Me(e), r = E0(n), a = t - r;
  return Wt(n, a);
}
class ab extends je {
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
        return ct(r.length, n);
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
    return n = rb(n, a), n.setHours(0, 0, 0, 0), n;
  }
}
class ob extends je {
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
class sb extends je {
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
class lb extends je {
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
class ib extends je {
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
        return ct(r.length, n);
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
class ub extends je {
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
        return ct(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 23;
  }
  set(n, r, a) {
    return n.setHours(a, 0, 0, 0), n;
  }
}
class cb extends je {
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
        return ct(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, a) {
    return n.getHours() >= 12 && a < 12 ? n.setHours(a + 12, 0, 0, 0) : n.setHours(a, 0, 0, 0), n;
  }
}
class db extends je {
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
        return ct(r.length, n);
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
class fb extends je {
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
        return ct(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 59;
  }
  set(n, r, a) {
    return n.setMinutes(a, 0, 0), n;
  }
}
class pb extends je {
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
        return ct(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 59;
  }
  set(n, r, a) {
    return n.setSeconds(a, 0), n;
  }
}
class mb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 30);
    fe(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r) {
    const a = (o) => Math.trunc(o * Math.pow(10, -r.length + 3));
    return mt(ct(r.length, n), a);
  }
  set(n, r, a) {
    return n.setMilliseconds(a), n;
  }
}
class hb extends je {
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
    return r.timestampIsSet ? n : Ue(
      n,
      n.getTime() - oo(n) - a
    );
  }
}
class vb extends je {
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
    return r.timestampIsSet ? n : Ue(
      n,
      n.getTime() - oo(n) - a
    );
  }
}
class yb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 40);
    fe(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return Ed(n);
  }
  set(n, r, a) {
    return [Ue(n, a * 1e3), { timestampIsSet: !0 }];
  }
}
class gb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 20);
    fe(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return Ed(n);
  }
  set(n, r, a) {
    return [Ue(n, a), { timestampIsSet: !0 }];
  }
}
const bb = {
  G: new F0(),
  y: new I0(),
  Y: new B0(),
  R: new L0(),
  u: new Y0(),
  Q: new H0(),
  q: new j0(),
  M: new U0(),
  L: new W0(),
  w: new z0(),
  I: new K0(),
  d: new J0(),
  D: new Z0(),
  E: new eb(),
  e: new tb(),
  c: new nb(),
  i: new ab(),
  a: new ob(),
  b: new sb(),
  B: new lb(),
  h: new ib(),
  H: new ub(),
  K: new cb(),
  k: new db(),
  m: new fb(),
  s: new pb(),
  S: new mb(),
  X: new hb(),
  x: new vb(),
  t: new yb(),
  T: new gb()
}, wb = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, _b = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, xb = /^'([^]*?)'?$/, kb = /''/g, Mb = /\S/, Tb = /[a-zA-Z]/;
function Ls(e, t, n, r) {
  var y, D, N, O;
  const a = O0(), o = a.locale ?? Sd, s = a.firstWeekContainsDate ?? ((D = (y = a.locale) == null ? void 0 : y.options) == null ? void 0 : D.firstWeekContainsDate) ?? 1, l = a.weekStartsOn ?? ((O = (N = a.locale) == null ? void 0 : N.options) == null ? void 0 : O.weekStartsOn) ?? 0;
  if (t === "")
    return e === "" ? Me(n) : Ue(n, NaN);
  const i = {
    firstWeekContainsDate: s,
    weekStartsOn: l,
    locale: o
  }, c = [new V0()], u = t.match(_b).map((g) => {
    const P = g[0];
    if (P in Is) {
      const E = Is[P];
      return E(g, o.formatLong);
    }
    return g;
  }).join("").match(wb), d = [];
  for (let g of u) {
    Cd(g) && Bs(g, t, e), Dd(g) && Bs(g, t, e);
    const P = g[0], E = bb[P];
    if (E) {
      const { incompatibleTokens: k } = E;
      if (Array.isArray(k)) {
        const _ = d.find(
          (T) => k.includes(T.token) || T.token === P
        );
        if (_)
          throw new RangeError(
            `The format string mustn't contain \`${_.fullToken}\` and \`${g}\` at the same time`
          );
      } else if (E.incompatibleTokens === "*" && d.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${g}\` and any other token at the same time`
        );
      d.push({ token: P, fullToken: g });
      const $ = E.run(
        e,
        g,
        o.match,
        i
      );
      if (!$)
        return Ue(n, NaN);
      c.push($.setter), e = $.rest;
    } else {
      if (P.match(Tb))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + P + "`"
        );
      if (g === "''" ? g = "'" : P === "'" && (g = Pb(g)), e.indexOf(g) === 0)
        e = e.slice(g.length);
      else
        return Ue(n, NaN);
    }
  }
  if (e.length > 0 && Mb.test(e))
    return Ue(n, NaN);
  const p = c.map((g) => g.priority).sort((g, P) => P - g).filter((g, P, E) => E.indexOf(g) === P).map(
    (g) => c.filter((P) => P.priority === g).sort((P, E) => E.subPriority - P.subPriority)
  ).map((g) => g[0]);
  let b = Me(n);
  if (isNaN(b.getTime()))
    return Ue(n, NaN);
  const v = {};
  for (const g of p) {
    if (!g.validate(b, i))
      return Ue(n, NaN);
    const P = g.set(b, v, i);
    Array.isArray(P) ? (b = P[0], Object.assign(v, P[1])) : b = P;
  }
  return Ue(n, b);
}
function Pb(e) {
  return e.match(xb)[1].replace(kb, "'");
}
function pu(e, t) {
  const n = lr(e), r = lr(t);
  return +n == +r;
}
function Sb(e, t) {
  return Wt(e, -t);
}
function $d(e, t) {
  const n = Me(e), r = n.getFullYear(), a = n.getDate(), o = Ue(e, 0);
  o.setFullYear(r, t, 15), o.setHours(0, 0, 0, 0);
  const s = C0(o);
  return n.setMonth(t, Math.min(a, s)), n;
}
function Ze(e, t) {
  let n = Me(e);
  return isNaN(+n) ? Ue(e, NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = $d(n, t.month)), t.date != null && n.setDate(t.date), t.hours != null && n.setHours(t.hours), t.minutes != null && n.setMinutes(t.minutes), t.seconds != null && n.setSeconds(t.seconds), t.milliseconds != null && n.setMilliseconds(t.milliseconds), n);
}
function Vd(e, t) {
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
  return isNaN(+n) ? Ue(e, NaN) : (n.setFullYear(t), n);
}
function $r(e, t) {
  return Gt(e, -t);
}
function Ab(e, t) {
  const {
    years: n = 0,
    months: r = 0,
    weeks: a = 0,
    days: o = 0,
    hours: s = 0,
    minutes: l = 0,
    seconds: i = 0
  } = t, c = $r(e, r + n * 12), u = Sb(c, o + a * 7), d = l + s * 60, b = (i + d * 60) * 1e3;
  return Ue(e, u.getTime() - b);
}
function Id(e, t) {
  return kl(e, -t);
}
function Yr() {
  return F(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      we("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      we("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      we("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      we("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Yr.compatConfig = {
  MODE: 3
};
function Bd() {
  return F(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      we("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      we("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Bd.compatConfig = {
  MODE: 3
};
function Ol() {
  return F(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      we("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Ol.compatConfig = {
  MODE: 3
};
function El() {
  return F(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      we("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
El.compatConfig = {
  MODE: 3
};
function Rl() {
  return F(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      we("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      we("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
Rl.compatConfig = {
  MODE: 3
};
function Nl() {
  return F(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      we("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Nl.compatConfig = {
  MODE: 3
};
function $l() {
  return F(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      we("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
$l.compatConfig = {
  MODE: 3
};
function mu(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function Db(e) {
  return (t) => dn(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const Cb = (e, t, n) => {
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
}, Vl = (e, t) => {
  const n = [];
  for (let r = +e[0]; r <= +e[1]; r++)
    n.push({ value: +r, text: `${r}` });
  return t ? n.reverse() : n;
}, Ld = (e, t, n) => {
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
}, Ob = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], gt = (e) => {
  const t = M(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Eb = (e) => ({ type: "dot", ...e ?? {} }), Yd = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Fl = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, bt = (e) => e, hu = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, vu = (e) => e === null, Hd = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, Rb = (e) => {
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
}, Vr = (e, t) => Rb(e).map((n) => n.map((r) => {
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
})), Fn = (e, t, n = !1) => {
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
function $b(e, t) {
  let n = [...document.querySelectorAll(Nb())];
  n = n.filter((a) => !e.contains(a) || a.hasAttribute("data-datepicker-instance"));
  const r = n.indexOf(e);
  if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length))
    return n[r + (t ? -1 : 1)];
}
const Vb = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), Il = (e) => dn(e, "dd-MM-yyyy"), rs = (e) => Array.isArray(e), lo = (e, t) => t.get(Il(e)), Fb = (e, t) => e ? t ? t instanceof Map ? !!lo(e, t) : t(Z(e)) : !1 : !0, yu = (e, t, n, r, a) => {
  const o = Ls(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return oa(o) && Md(o) ? r || a ? o : Ze(o, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, Ib = (e, t, n, r, a) => {
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
}, Z = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Bb = (e, t, n) => {
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
}, It = (e) => {
  let t = Z(JSON.parse(JSON.stringify(e)));
  return t = Vd(t, 0), t = Fd(t, 0), t = Cl(t, 0), t = Dl(t, 0), t;
}, In = (e, t, n, r) => {
  let a = e ? Z(e) : Z();
  return (t || t === 0) && (a = Vd(a, +t)), (n || n === 0) && (a = Fd(a, +n)), (r || r === 0) && (a = Cl(a, +r)), Dl(a, 0);
}, it = (e, t) => !e || !t ? !1 : va(It(e), It(t)), Be = (e, t) => !e || !t ? !1 : xr(It(e), It(t)), dt = (e, t) => !e || !t ? !1 : ha(It(e), It(t)), Eo = (e, t, n) => e != null && e[0] && e != null && e[1] ? dt(n, e[0]) && it(n, e[1]) : e != null && e[0] && t ? dt(n, e[0]) && it(n, t) || it(n, e[0]) && dt(n, t) : !1, qt = (e) => {
  const t = Ze(new Date(e), { date: 1 });
  return It(t);
}, as = (e, t, n) => t && (n || n === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((r) => r === t ? [r, n] : [r, isNaN(+e[r]) ? void 0 : +e[r]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, fr = (e) => ({
  hours: Kt(e),
  minutes: fn(e),
  seconds: Nr(e)
}), jd = (e, t) => {
  if (t) {
    const n = Ne(Z(t));
    if (n > e)
      return 12;
    if (n === e)
      return Ie(Z(t));
  }
}, Ud = (e, t) => {
  if (t) {
    const n = Ne(Z(t));
    return n < e ? -1 : n === e ? Ie(Z(t)) : void 0;
  }
}, Fr = (e) => {
  if (e)
    return Ne(Z(e));
}, Wd = (e, t) => {
  const n = dt(e, t) ? t : e, r = dt(t, e) ? t : e;
  return Td({ start: n, end: r });
}, Lb = (e) => {
  const t = Gt(e, 1);
  return { month: Ie(t), year: Ne(t) };
}, vn = (e, t) => {
  const n = mn(e, { weekStartsOn: +t }), r = Fg(e, { weekStartsOn: +t });
  return [n, r];
}, qd = (e, t) => {
  const n = {
    hours: Kt(Z()),
    minutes: fn(Z()),
    seconds: t ? Nr(Z()) : 0
  };
  return Object.assign(n, e);
}, Rn = (e, t, n) => [Ze(Z(e), { date: 1 }), Ze(Z(), { month: t, year: n, date: 1 })], yn = (e, t, n) => {
  let r = e ? Z(e) : Z();
  return (t || t === 0) && (r = $d(r, t)), n && (r = un(r, n)), r;
}, zd = (e, t, n, r, a) => {
  if (!r || a && !t || !a && !n)
    return !1;
  const o = a ? Gt(e, 1) : $r(e, 1), s = [Ie(o), Ne(o)];
  return a ? !Hb(...s, t) : !Yb(...s, n);
}, Yb = (e, t, n) => it(...Rn(n, e, t)) || Be(...Rn(n, e, t)), Hb = (e, t, n) => dt(...Rn(n, e, t)) || Be(...Rn(n, e, t)), Gd = (e, t, n, r, a, o, s) => {
  if (typeof t == "function" && !s)
    return t(e);
  const l = n ? { locale: n } : void 0;
  return Array.isArray(e) ? `${dn(e[0], o, l)}${a && !e[1] ? "" : r}${e[1] ? dn(e[1], o, l) : ""}` : dn(e, o, l);
}, wr = (e) => {
  if (e)
    return null;
  throw new Error(Fl.prop("partial-range"));
}, Na = (e, t) => {
  if (t)
    return e();
  throw new Error(Fl.prop("range"));
}, Ys = (e) => Array.isArray(e) ? oa(e[0]) && (e[1] ? oa(e[1]) : !0) : e ? oa(e) : !1, jb = (e, t) => Ze(t ?? Z(), {
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
}, ss = (e, t, n) => e ? jb(e, t) : Z(n ?? t), gu = (e, t, n, r, a) => {
  if (Array.isArray(r)) {
    const s = ss(e, r[0], t), l = ss(e, r[1], t);
    return os(r[0], s, n, !!t) && os(r[1], l, n, !!t) && a;
  }
  const o = ss(e, r, t);
  return os(r, o, n, !!t) && a;
}, ls = (e) => Ze(Z(), fr(e)), Ub = (e, t) => e instanceof Map ? Array.from(e.values()).filter((n) => Ne(Z(n)) === t).map((n) => Ie(n)) : [], Kd = (e, t, n) => typeof e == "function" ? e({ month: t, year: n }) : !!e.months.find((r) => r.month === t && r.year === n), Bl = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), Gr = bn({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Qd = () => {
  const e = (n) => {
    Gr.menuFocused = n;
  }, t = (n) => {
    Gr.shiftKeyInMenu !== n && (Gr.shiftKeyInMenu = n);
  };
  return {
    control: re(() => ({ shiftKeyInMenu: Gr.shiftKeyInMenu, menuFocused: Gr.menuFocused })),
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
}), is = J(null), $a = J(!1), us = J(!1), cs = J(!1), ds = J(!1), St = J(0), kt = J(0), zn = () => {
  const e = re(() => $a.value ? [...et.selectionGrid, et.actionRow].filter((d) => d.length) : us.value ? [
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
    e.value[kt.value] && (p = e.value[kt.value][St.value]), p ? p.focus({ preventScroll: !$a.value }) : St.value = d ? St.value - 1 : St.value + 1;
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
      $a.value = d, u(), d || (et.selectionGrid = []);
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
      et.monthYear = [], et.calendar = [], et.time = [], et.actionRow = [], et.selectionGrid = [], et.timePicker[0] = [], et.timePicker[1] = [], $a.value = !1, us.value = !1, ds.value = !1, cs.value = !1, u(), is.value = null;
    },
    setMonthPicker: (d) => {
      cs.value = d, u();
    },
    refSets: et
    // exposed for testing
  };
}, jn = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), Xd = (e, t) => Hs(e, t) || Z(), Wb = (e, t) => t.dateInTz ? jn(new Date(e), t.dateInTz) : Z(e), Hs = (e, t) => {
  if (!e)
    return null;
  if (!t)
    return Z(e);
  const n = Z(e);
  return t.exactMatch ? Wb(e, t) : jn(n, t.timezone);
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
}), qb = (e) => ({
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
}), wu = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, zb = (e) => {
  const t = typeof e == "object" && e, n = {
    static: !0,
    solo: !1
  };
  if (!e)
    return { ...n, count: wu(!1) };
  const r = t ? e : {}, a = t ? r.count ?? !0 : e, o = wu(a);
  return Object.assign(n, r, { count: o });
}, Gb = (e, t, n) => e || (typeof n == "string" ? n : t), Kb = (e) => typeof e == "boolean" ? e ? bu({}) : !1 : bu(e), Qb = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, Xb = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), Jb = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), Zb = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, ew = (e) => ({ allowStopPropagation: !0, closeOnScroll: !1, modeHeight: 255, allowPreventDefault: !1, closeOnClearValue: !0, closeOnAutoApply: !0, noSwipe: !1, keepActionRow: !1, onClickOutside: void 0, tabOutClosesMenu: !0, ...e ?? {} }), tw = (e) => {
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
}, nw = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, rw = (e, t) => typeof e == "object" ? { enabled: !0, ...{
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
}, aw = (e, t) => e ? typeof e == "string" ? { timezone: e, exactMatch: !1, dateInTz: void 0, emitTimezone: t } : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: t ?? e.emitTimezone
} : { timezone: void 0, exactMatch: !1, emitTimezone: t }, fs = (e, t) => new Map(
  e.map((n) => {
    const r = Xd(n, t);
    return [Il(r), r];
  })
), ow = (e, t) => e.length ? new Map(
  e.map((n) => {
    const r = Xd(n.date, t);
    return [Il(r), n];
  })
) : null, sw = (e, t, n, r, a, o, s) => ({
  minDate: Hs(e, s),
  maxDate: Hs(t, s),
  disabledDates: rs(n) ? fs(n, s) : n,
  allowedDates: rs(r) ? fs(r, s) : null,
  highlight: typeof a == "object" && rs(a == null ? void 0 : a.dates) ? fs(a.dates, s) : a,
  markers: ow(o, s)
}), st = (e) => {
  const t = () => {
    const P = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${P}` : `hh:mm${P} aa`;
  }, n = () => {
    var P;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((P = D.value) == null ? void 0 : P.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, r = (P) => qd(P, e.enableSeconds), a = () => g.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [r(e.startTime[0]), r(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? r(e.startTime) : null, o = re(() => zb(e.multiCalendars)), s = re(() => a()), l = re(() => qb(e.ariaLabels)), i = re(() => Xb(e.filters)), c = re(() => Kb(e.transitions)), u = re(() => Jb(e.actionRow)), d = re(
    () => Gb(e.previewFormat, e.format, n())
  ), p = re(() => Qb(e.textInput)), b = re(() => Zb(e.inline)), v = re(() => ew(e.config)), y = re(() => tw(e.highlight)), D = re(() => nw(e.weekNumbers)), N = re(() => aw(e.timezone, e.emitTimezone)), O = re(
    () => sw(
      e.minDate,
      e.maxDate,
      e.disabledDates,
      e.allowedDates,
      y.value,
      e.markers,
      N.value
    )
  ), g = re(
    () => rw(e.range, {
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
    propDates: O,
    defaultedTz: N,
    getDefaultPattern: n,
    getDefaultStartTime: a
  };
}, lw = (e, t, n) => {
  const r = J(), { defaultedTextInput: a, defaultedRange: o, defaultedTz: s, getDefaultPattern: l } = st(t), i = J(""), c = Wa(t, "format");
  ft(
    r,
    () => {
      e("internal-model-change", r.value);
    },
    { deep: !0 }
  ), ft(c, () => {
    U();
  });
  const u = (m, f, R = !1) => Gd(
    m,
    t.format,
    t.formatLocale,
    a.value.rangeSeparator,
    t.modelAuto,
    f ?? l(),
    R
  ), d = (m) => m ? t.modelType ? S(m) : {
    hours: Kt(m),
    minutes: fn(m),
    seconds: t.enableSeconds ? Nr(m) : 0
  } : null, p = (m) => t.modelType ? S(m) : { month: Ie(m), year: Ne(m) }, b = (m) => Array.isArray(m) ? t.multiDates ? m.map((f) => v(f, un(Z(), f))) : Na(
    () => [
      un(Z(), m[0]),
      m[1] ? un(Z(), m[1]) : wr(o.value.partialRange)
    ],
    o.value.enabled
  ) : un(Z(), +m), v = (m, f) => (typeof m == "string" || typeof m == "number") && t.modelType ? x(m) : f, y = (m) => Array.isArray(m) ? [
    v(
      m[0],
      In(null, +m[0].hours, +m[0].minutes, m[0].seconds)
    ),
    v(
      m[1],
      In(null, +m[1].hours, +m[1].minutes, m[1].seconds)
    )
  ] : v(m, In(null, m.hours, m.minutes, m.seconds)), D = (m) => {
    const f = Ze(Z(), { date: 1 });
    return Array.isArray(m) ? t.multiDates ? m.map((R) => v(R, yn(f, +R.month, +R.year))) : Na(
      () => [
        v(m[0], yn(f, +m[0].month, +m[0].year)),
        v(
          m[1],
          m[1] ? yn(f, +m[1].month, +m[1].year) : wr(o.value.partialRange)
        )
      ],
      o.value.enabled
    ) : v(m, yn(f, +m.month, +m.year));
  }, N = (m) => {
    if (Array.isArray(m))
      return m.map((f) => x(f));
    throw new Error(Fl.dateArr("multi-dates"));
  }, O = (m) => {
    if (Array.isArray(m) && o.value.enabled) {
      const f = m[0], R = m[1];
      return [
        Z(Array.isArray(f) ? f[0] : null),
        Z(Array.isArray(R) ? R[0] : null)
      ];
    }
    return Z(m[0]);
  }, g = (m) => t.modelAuto ? Array.isArray(m) ? [x(m[0]), x(m[1])] : t.autoApply ? [x(m)] : [x(m), null] : Array.isArray(m) ? Na(
    () => m[1] ? [
      x(m[0]),
      m[1] ? x(m[1]) : wr(o.value.partialRange)
    ] : [x(m[0])],
    o.value.enabled
  ) : x(m), P = () => {
    Array.isArray(r.value) && o.value.enabled && r.value.length === 1 && r.value.push(wr(o.value.partialRange));
  }, E = () => {
    const m = r.value;
    return [
      S(m[0]),
      m[1] ? S(m[1]) : wr(o.value.partialRange)
    ];
  }, k = () => r.value[1] ? E() : S(bt(r.value[0])), $ = () => (r.value || []).map((m) => S(m)), _ = () => (P(), t.modelAuto ? k() : t.multiDates ? $() : Array.isArray(r.value) ? Na(() => E(), o.value.enabled) : S(bt(r.value))), T = (m) => !m || Array.isArray(m) && !m.length ? null : t.timePicker ? y(bt(m)) : t.monthPicker ? D(bt(m)) : t.yearPicker ? b(bt(m)) : t.multiDates ? N(bt(m)) : t.weekPicker ? O(bt(m)) : g(bt(m)), W = (m) => {
    const f = T(m);
    Ys(bt(f)) ? (r.value = bt(f), U()) : (r.value = null, i.value = "");
  }, B = () => {
    const m = (f) => dn(f, a.value.format);
    return `${m(r.value[0])} ${a.value.rangeSeparator} ${r.value[1] ? m(r.value[1]) : ""}`;
  }, V = () => n.value && r.value ? Array.isArray(r.value) ? B() : dn(r.value, a.value.format) : u(r.value), j = () => r.value ? t.multiDates ? r.value.map((m) => u(m)).join("; ") : a.value.enabled && typeof a.value.format == "string" ? V() : u(r.value) : "", U = () => {
    !t.format || typeof t.format == "string" || a.value.enabled && typeof a.value.format == "string" ? i.value = j() : i.value = t.format(r.value);
  }, x = (m) => {
    if (t.utc) {
      const f = new Date(m);
      return t.utc === "preserve" ? new Date(f.getTime() + f.getTimezoneOffset() * 6e4) : f;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? new Date(m) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Ls(m, l(), /* @__PURE__ */ new Date()) : Ls(m, t.modelType, /* @__PURE__ */ new Date()) : new Date(m);
  }, S = (m) => m ? t.utc ? Bb(m, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +m : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? u(m) : u(m, t.modelType, !0) : m : "", G = (m, f = !1) => {
    if (e("update:model-value", m), s.value.emitTimezone && f) {
      const R = Array.isArray(m) ? m.map((Q) => jn(bt(Q), s.value.emitTimezone)) : jn(bt(m), s.value.emitTimezone);
      e("update:model-timezone-value", R);
    }
  }, se = (m) => Array.isArray(r.value) ? t.multiDates ? r.value.map((f) => m(f)) : [
    m(r.value[0]),
    r.value[1] ? m(r.value[1]) : wr(o.value.partialRange)
  ] : m(bt(r.value)), pe = () => {
    if (Array.isArray(r.value)) {
      const m = vn(r.value[0], t.weekStart), f = r.value[1] ? vn(r.value[1], t.weekStart) : [];
      return [m.map((R) => Z(R)), f.map((R) => Z(R))];
    }
    return vn(r.value, t.weekStart).map((m) => Z(m));
  }, ee = (m) => G(bt(se(m)));
  return {
    inputValue: i,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? o.value.enabled ? o.value.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: W,
    formatInputValue: U,
    emitModelValue: () => (U(), t.monthPicker ? ee(p) : t.timePicker ? ee(d) : t.yearPicker ? ee(Ne) : t.weekPicker ? e("update:model-value", pe()) : G(_(), !0))
  };
}, iw = (e, t) => {
  const { defaultedFilters: n, propDates: r } = st(e), { validateMonthYearInRange: a } = Gn(e), o = (u, d) => {
    let p = u;
    return n.value.months.includes(Ie(p)) ? (p = d ? Gt(u, 1) : $r(u, 1), o(p, d)) : p;
  }, s = (u, d) => {
    let p = u;
    return n.value.years.includes(Ne(p)) ? (p = d ? kl(u, 1) : Id(u, 1), s(p, d)) : p;
  }, l = (u, d = !1) => {
    const p = Ze(Z(), { month: e.month, year: e.year });
    let b = u ? Gt(p, 1) : $r(p, 1);
    e.disableYearSelect && (b = un(b, e.year));
    let v = Ie(b), y = Ne(b);
    n.value.months.includes(v) && (b = o(b, u), v = Ie(b), y = Ne(b)), n.value.years.includes(y) && (b = s(b, u), y = Ne(b)), a(v, y, u, e.preventMinMaxNavigation) && i(v, y, d);
  }, i = (u, d, p) => {
    t("update-month-year", { month: u, year: d, fromNav: p });
  }, c = re(() => (u) => zd(
    Ze(Z(), { month: e.month, year: e.year }),
    r.value.maxDate,
    r.value.minDate,
    e.preventMinMaxNavigation,
    u
  ));
  return { handleMonthYearChange: l, isDisabled: c, updateMonthYear: i };
};
var _r = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(_r || {}), Ut = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Ut || {}), tr = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(tr || {}), pr = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(pr || {}), rn = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(rn || {});
const uw = ({
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
  ft(p, () => {
    u.value = JSON.parse(JSON.stringify({})), P();
  });
  const b = (x) => {
    if (s.teleport) {
      const S = x.getBoundingClientRect();
      return {
        left: S.left + window.scrollX,
        top: S.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, v = (x, S) => {
    u.value.left = `${x + S - i.value.width}px`;
  }, y = (x) => {
    u.value.left = `${x}px`;
  }, D = (x, S) => {
    s.position === _r.left && y(x), s.position === _r.right && v(x, S), s.position === _r.center && (u.value.left = `${x + S / 2 - i.value.width / 2}px`);
  }, N = (x) => {
    const { width: S, height: G } = x.getBoundingClientRect(), { top: se, left: pe } = s.altPosition ? s.altPosition(x) : b(x);
    return { top: +se, left: +pe, width: S, height: G };
  }, O = () => {
    u.value.left = "50%", u.value.top = "50%", u.value.transform = "translate(-50%, -50%)", u.value.position = "fixed", delete u.value.opacity;
  }, g = () => {
    const x = gt(n), { top: S, left: G, transform: se } = s.altPosition(x);
    u.value = { top: `${S}px`, left: `${G}px`, transform: se ?? "" };
  }, P = (x = !0) => {
    var S;
    if (!a.value.enabled) {
      if (p.value)
        return O();
      if (s.altPosition !== null)
        return g();
      if (x) {
        const G = s.teleport ? (S = t.value) == null ? void 0 : S.$el : e.value;
        G && (i.value = G.getBoundingClientRect()), o("recalculate-position");
      }
      return B();
    }
  }, E = ({ inputEl: x, left: S, width: G }) => {
    window.screen.width > 768 && !c.value && D(S, G), _(x);
  }, k = (x) => {
    const { top: S, left: G, height: se, width: pe } = N(x);
    u.value.top = `${se + S + +s.offset}px`, d.value = !1, c.value || (u.value.left = `${G + pe / 2 - i.value.width / 2}px`), E({ inputEl: x, left: G, width: pe });
  }, $ = (x) => {
    const { top: S, left: G, width: se } = N(x);
    u.value.top = `${S - +s.offset - i.value.height}px`, d.value = !0, E({ inputEl: x, left: G, width: se });
  }, _ = (x) => {
    if (s.autoPosition) {
      const { left: S, width: G } = N(x), { left: se, right: pe } = i.value;
      if (!c.value) {
        if (Math.abs(se) !== Math.abs(pe)) {
          if (se <= 0)
            return c.value = !0, y(S);
          if (pe >= document.documentElement.clientWidth)
            return c.value = !0, v(S, G);
        }
        return D(S, G);
      }
    }
  }, T = () => {
    const x = gt(n);
    if (x) {
      const { height: S } = i.value, { top: G, height: se } = x.getBoundingClientRect(), pe = window.innerHeight - G - se, ee = G;
      return S <= pe ? tr.bottom : S > pe && S <= ee ? tr.top : pe >= ee ? tr.bottom : tr.top;
    }
    return tr.bottom;
  }, W = (x) => T() === tr.bottom ? k(x) : $(x), B = () => {
    const x = gt(n);
    if (x)
      return s.autoPosition ? W(x) : k(x);
  }, V = function(x) {
    if (x) {
      const S = x.scrollHeight > x.clientHeight, G = window.getComputedStyle(x).overflowY.indexOf("hidden") !== -1;
      return S && !G;
    }
    return !0;
  }, j = function(x) {
    return !x || x === document.body || x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : V(x) ? x : j(x.parentNode);
  }, U = (x) => {
    if (x)
      switch (s.position) {
        case _r.left:
          return { left: 0, transform: "translateX(0)" };
        case _r.right:
          return { left: `${x.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${x.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: d,
    menuStyle: u,
    xCorrect: c,
    setMenuPosition: P,
    getScrollableParent: j,
    shadowRender: (x, S) => {
      var G, se, pe;
      const ee = document.createElement("div"), m = (G = gt(n)) == null ? void 0 : G.getBoundingClientRect();
      ee.setAttribute("id", "dp--temp-container");
      const f = (se = r.value) != null && se.clientWidth ? r.value : document.body;
      f.append(ee);
      const R = U(m), Q = Mc(
        x,
        {
          ...S,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...R }
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
], cw = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], dw = {
  all: () => Sn,
  monthYear: () => Sn.filter((e) => e.use.includes("month-year")),
  input: () => cw,
  timePicker: () => Sn.filter((e) => e.use.includes("time")),
  action: () => Sn.filter((e) => e.use.includes("action")),
  calendar: () => Sn.filter((e) => e.use.includes("calendar")),
  menu: () => Sn.filter((e) => e.use.includes("menu")),
  shared: () => Sn.filter((e) => e.use.includes("shared")),
  yearMode: () => Sn.filter((e) => e.use.includes("year-mode"))
}, Vt = (e, t, n) => {
  const r = [];
  return dw[t]().forEach((a) => {
    e[a.name] && r.push(a.name);
  }), n != null && n.length && n.forEach((a) => {
    a.slot && r.push(a.slot);
  }), r;
}, xa = (e) => {
  const t = re(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), n = re(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: n };
}, ka = (e, t) => {
  const { defaultedRange: n, defaultedTz: r } = st(e), a = Z(jn(Z(), r.value.timezone)), o = J([{ month: Ie(a), year: Ne(a) }]), s = bn({
    hours: n.value.enabled ? [Kt(a), Kt(a)] : Kt(a),
    minutes: n.value.enabled ? [fn(a), fn(a)] : fn(a),
    seconds: n.value.enabled ? [0, 0] : 0
  }), l = re({
    get: () => e.internalModelValue,
    set: (u) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", u);
    }
  }), i = re(
    () => (u) => o.value[u] ? o.value[u].month : 0
  ), c = re(
    () => (u) => o.value[u] ? o.value[u].year : 0
  );
  return {
    calendars: o,
    time: s,
    modelValue: l,
    month: i,
    year: c
  };
}, fw = (e, t) => {
  const { defaultedMultiCalendars: n, defaultedHighlight: r, defaultedTz: a, propDates: o, defaultedRange: s } = st(t), { isDisabled: l } = Gn(t), i = J(null), c = J(jn(/* @__PURE__ */ new Date(), a.value.timezone)), u = (f) => {
    !f.current && t.hideOffsetDates || (i.value = f.value);
  }, d = () => {
    i.value = null;
  }, p = (f) => Array.isArray(e.value) && s.value.enabled && e.value[0] && i.value ? f ? dt(i.value, e.value[0]) : it(i.value, e.value[0]) : !0, b = (f, R) => {
    const Q = () => e.value ? R ? e.value[0] || null : e.value[1] : null, ce = e.value && Array.isArray(e.value) ? Q() : null;
    return Be(Z(f.value), ce);
  }, v = (f) => {
    const R = Array.isArray(e.value) ? e.value[0] : null;
    return f ? !it(i.value ?? null, R) : !0;
  }, y = (f, R = !0) => (s.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !f.current ? !1 : Be(Z(f.value), e.value[R ? 0 : 1]) : s.value.enabled ? b(f, R) && v(R) || Be(f.value, Array.isArray(e.value) ? e.value[0] : null) && p(R) : !1, D = (f, R, Q) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? f ? !1 : Q ? dt(e.value[0], R.value) : it(e.value[0], R.value) : !1, N = (f) => !e.value || t.hideOffsetDates && !f.current ? !1 : s.value.enabled ? t.modelAuto && Array.isArray(e.value) ? Be(f.value, e.value[0] ? e.value[0] : c.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((R) => Be(R, f.value)) : Be(f.value, e.value ? e.value : c.value), O = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const R = Wt(i.value, +s.value.autoRange), Q = vn(Z(i.value), t.weekStart);
        return t.weekPicker ? Be(Q[1], Z(f.value)) : Be(R, Z(f.value));
      }
      return !1;
    }
    return !1;
  }, g = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (i.value) {
        const R = Wt(i.value, +s.value.autoRange);
        if (t.hideOffsetDates && !f.current)
          return !1;
        const Q = vn(Z(i.value), t.weekStart);
        return t.weekPicker ? dt(f.value, Q[0]) && it(f.value, Q[1]) : dt(f.value, i.value) && it(f.value, R);
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
  }, E = (f) => Eo(e.value, i.value, f.value), k = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, $ = () => t.modelAuto ? Yd(t.internalModelValue) : !0, _ = (f) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const R = s.value.enabled ? !y(f) && !y(f, !1) : !0;
    return !l(f.value) && !N(f) && !(!f.current && t.hideOffsetDates) && R;
  }, T = (f) => s.value.enabled ? t.modelAuto ? k() && N(f) : !1 : N(f), W = (f) => r.value ? Fb(f.value, o.value.highlight) : !1, B = (f) => {
    const R = l(f.value);
    return R && (typeof r.value == "function" ? !r.value(f.value, R) : !r.value.options.highlightDisabled);
  }, V = (f) => {
    var R;
    return typeof r.value == "function" ? r.value(f.value) : (R = r.value.weekdays) == null ? void 0 : R.includes(f.value.getDay());
  }, j = (f) => (s.value.enabled || t.weekPicker) && (!(n.value.count > 0) || f.current) && $() && !(!f.current && t.hideOffsetDates) && !N(f) ? E(f) : !1, U = (f) => {
    const { isRangeStart: R, isRangeEnd: Q } = se(f), ce = s.value.enabled ? R || Q : !1;
    return {
      dp__cell_offset: !f.current,
      dp__pointer: !t.disabled && !(!f.current && t.hideOffsetDates) && !l(f.value),
      dp__cell_disabled: l(f.value),
      dp__cell_highlight: !B(f) && (W(f) || V(f)) && !T(f) && !ce && !P(f) && !(j(f) && t.weekPicker) && !Q,
      dp__cell_highlight_active: !B(f) && (W(f) || V(f)) && T(f),
      dp__today: !t.noToday && Be(f.value, c.value) && f.current,
      "dp--past": it(f.value, c.value),
      "dp--future": dt(f.value, c.value)
    };
  }, x = (f) => ({
    dp__active_date: T(f),
    dp__date_hover: _(f)
  }), S = (f) => {
    if (e.value && !Array.isArray(e.value)) {
      const R = vn(e.value, t.weekStart);
      return {
        ...ee(f),
        dp__range_start: Be(R[0], f.value),
        dp__range_end: Be(R[1], f.value),
        dp__range_between_week: dt(f.value, R[0]) && it(f.value, R[1])
      };
    }
    return {
      ...ee(f)
    };
  }, G = (f) => {
    if (e.value && Array.isArray(e.value)) {
      const R = vn(e.value[0], t.weekStart), Q = e.value[1] ? vn(e.value[1], t.weekStart) : [];
      return {
        ...ee(f),
        dp__range_start: Be(R[0], f.value) || Be(Q[0], f.value),
        dp__range_end: Be(R[1], f.value) || Be(Q[1], f.value),
        dp__range_between_week: dt(f.value, R[0]) && it(f.value, R[1]) || dt(f.value, Q[0]) && it(f.value, Q[1]),
        dp__range_between: dt(f.value, R[1]) && it(f.value, Q[0])
      };
    }
    return {
      ...ee(f)
    };
  }, se = (f) => {
    const R = n.value.count > 0 ? f.current && y(f) && $() : y(f) && $(), Q = n.value.count > 0 ? f.current && y(f, !1) && $() : y(f, !1) && $();
    return { isRangeStart: R, isRangeEnd: Q };
  }, pe = (f) => {
    const { isRangeStart: R, isRangeEnd: Q } = se(f);
    return {
      dp__range_start: R,
      dp__range_end: Q,
      dp__range_between: j(f),
      dp__date_hover_start: D(_(f), f, !0),
      dp__date_hover_end: D(_(f), f, !1)
    };
  }, ee = (f) => ({
    ...pe(f),
    dp__cell_auto_range: g(f),
    dp__cell_auto_range_start: P(f),
    dp__cell_auto_range_end: O(f)
  }), m = (f) => s.value.enabled ? s.value.autoRange ? ee(f) : t.modelAuto ? { ...x(f), ...pe(f) } : t.weekPicker ? G(f) : pe(f) : t.weekPicker ? S(f) : x(f);
  return {
    setHoverDate: u,
    clearHoverDate: d,
    getDayClassData: (f) => t.hideOffsetDates && !f.current ? {} : {
      ...U(f),
      ...m(f),
      [t.dayClass ? t.dayClass(f.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    }
  };
}, Gn = (e) => {
  const { defaultedFilters: t, defaultedRange: n, propDates: r } = st(e), a = (B) => r.value.disabledDates ? typeof r.value.disabledDates == "function" ? r.value.disabledDates(Z(B)) : !!lo(B, r.value.disabledDates) : !1, o = (B) => {
    const V = r.value.maxDate ? dt(B, r.value.maxDate) : !1, j = r.value.minDate ? it(B, r.value.minDate) : !1, U = a(B), x = t.value.months.map((ee) => +ee).includes(Ie(B)), S = e.disabledWeekDays.length ? e.disabledWeekDays.some((ee) => +ee === D0(B)) : !1, G = u(B), se = Ne(B), pe = se < +e.yearRange[0] || se > +e.yearRange[1];
    return !(V || j || U || x || pe || S || G);
  }, s = (B, V) => it(...Rn(r.value.minDate, B, V)) || Be(...Rn(r.value.minDate, B, V)), l = (B, V) => dt(...Rn(r.value.maxDate, B, V)) || Be(...Rn(r.value.maxDate, B, V)), i = (B, V, j) => {
    let U = !1;
    return r.value.maxDate && j && l(B, V) && (U = !0), r.value.minDate && !j && s(B, V) && (U = !0), U;
  }, c = (B, V, j, U) => {
    let x = !1;
    return U ? r.value.minDate && r.value.maxDate ? x = i(B, V, j) : (r.value.minDate && s(B, V) || r.value.maxDate && l(B, V)) && (x = !0) : x = !0, x;
  }, u = (B) => Array.isArray(r.value.allowedDates) && !r.value.allowedDates.length ? !0 : r.value.allowedDates ? !lo(B, r.value.allowedDates) : !1, d = (B) => !o(B), p = (B) => n.value.noDisabledRange ? !Td({ start: B[0], end: B[1] }).some((V) => d(V)) : !0, b = (B) => {
    if (B) {
      const V = Ne(B);
      return V >= +e.yearRange[0] && V <= e.yearRange[1];
    }
    return !0;
  }, v = (B, V) => !!(Array.isArray(B) && B[V] && (n.value.maxRange || n.value.minRange) && b(B[V])), y = (B, V, j = 0) => {
    if (v(V, j) && b(B)) {
      const U = kd(B, V[j]), x = Wd(V[j], B), S = x.length === 1 ? 0 : x.filter((se) => d(se)).length, G = Math.abs(U) - (n.value.minMaxRawRange ? 0 : S);
      if (n.value.minRange && n.value.maxRange)
        return G >= +n.value.minRange && G <= +n.value.maxRange;
      if (n.value.minRange)
        return G >= +n.value.minRange;
      if (n.value.maxRange)
        return G <= +n.value.maxRange;
    }
    return !0;
  }, D = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, N = (B) => Array.isArray(B) ? [B[0] ? ls(B[0]) : null, B[1] ? ls(B[1]) : null] : ls(B), O = (B, V, j) => B.find(
    (U) => +U.hours === Kt(V) && U.minutes === "*" ? !0 : +U.minutes === fn(V) && +U.hours === Kt(V)
  ) && j, g = (B, V, j) => {
    const [U, x] = B, [S, G] = V;
    return !O(U, S, j) && !O(x, G, j) && j;
  }, P = (B, V) => {
    const j = Array.isArray(V) ? V : [V];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? g(e.disabledTimes, j, B) : !j.some((U) => O(e.disabledTimes, U, B)) : B;
  }, E = (B, V) => {
    const j = Array.isArray(V) ? [fr(V[0]), V[1] ? fr(V[1]) : void 0] : fr(V), U = !e.disabledTimes(j);
    return B && U;
  }, k = (B, V) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? P(V, B) : E(V, B) : V, $ = (B) => {
    let V = !0;
    if (!B || D())
      return !0;
    const j = !r.value.minDate && !r.value.maxDate ? N(B) : B;
    return (e.maxTime || r.value.maxDate) && (V = gu(
      e.maxTime,
      r.value.maxDate,
      "max",
      bt(j),
      V
    )), (e.minTime || r.value.minDate) && (V = gu(
      e.minTime,
      r.value.minDate,
      "min",
      bt(j),
      V
    )), k(B, V);
  }, _ = (B) => {
    if (!e.monthPicker)
      return !0;
    let V = !0;
    const j = Z(qt(B));
    if (r.value.minDate && r.value.maxDate) {
      const U = Z(qt(r.value.minDate)), x = Z(qt(r.value.maxDate));
      return dt(j, U) && it(j, x) || Be(j, U) || Be(j, x);
    }
    if (r.value.minDate) {
      const U = Z(qt(r.value.minDate));
      V = dt(j, U) || Be(j, U);
    }
    if (r.value.maxDate) {
      const U = Z(qt(r.value.maxDate));
      V = it(j, U) || Be(j, U);
    }
    return V;
  }, T = re(() => (B) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : $(B)), W = re(() => (B) => e.monthPicker ? Array.isArray(B) && (n.value.enabled || e.multiDates) ? !B.filter((V) => !_(V)).length : _(B) : !0);
  return {
    isDisabled: d,
    validateDate: o,
    validateMonthYearInRange: c,
    isDateRangeAllowed: p,
    checkMinMaxRange: y,
    isValidTime: $,
    isTimeValid: T,
    isMonthValid: W
  };
}, Ro = () => {
  const e = re(() => (r, a) => r == null ? void 0 : r.includes(a)), t = re(() => (r, a) => r.count ? r.solo ? !0 : a === 0 : !0), n = re(() => (r, a) => r.count ? r.solo ? !0 : a === r.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: n };
}, pw = (e, t, n) => {
  const r = J(0), a = bn({
    [pr.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [pr.calendar]: !1,
    [pr.header]: !1
  }), o = re(() => e.monthPicker), s = (d) => {
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
}, No = {
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
  ...No,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null }
}, mw = {
  key: 1,
  class: "dp__input_wrap"
}, hw = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], vw = {
  key: 2,
  class: "dp__clear_icon"
}, yw = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...No
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
    } = st(a), { checkMinMaxRange: p } = Gn(a), b = J(), v = J(null), y = J(!1), D = J(!1), N = re(
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
    ), O = () => {
      r("set-input-date", null), a.autoApply && (r("set-empty-date"), b.value = null);
    }, g = (x) => {
      const S = d();
      return Ib(
        x,
        o.value.format ?? u(),
        S ?? qd({}, a.enableSeconds),
        a.inputValue,
        D.value
      );
    }, P = (x) => {
      const { rangeSeparator: S } = o.value, [G, se] = x.split(`${S}`);
      if (G) {
        const pe = g(G.trim()), ee = se ? g(se.trim()) : null, m = pe && ee ? [pe, ee] : [pe];
        p(ee, m, 0) && (b.value = pe ? m : null);
      }
    }, E = () => {
      D.value = !0;
    }, k = (x) => {
      if (c.value.enabled)
        P(x);
      else if (a.multiDates) {
        const S = x.split(";");
        b.value = S.map((G) => g(G.trim())).filter((G) => G);
      } else
        b.value = g(x);
    }, $ = (x) => {
      var S;
      const G = typeof x == "string" ? x : (S = x.target) == null ? void 0 : S.value;
      G !== "" ? (o.value.openMenu && !a.isMenuOpen && r("open"), k(G), r("set-input-date", b.value)) : O(), D.value = !1, r("update:input-value", G);
    }, _ = (x) => {
      o.value.enabled ? (k(x.target.value), o.value.enterSubmit && Ys(b.value) && a.inputValue !== "" ? (r("set-input-date", b.value, !0), b.value = null) : o.value.enterSubmit && a.inputValue === "" && (b.value = null, r("clear"))) : B(x);
    }, T = (x) => {
      o.value.enabled && o.value.tabSubmit && k(x.target.value), o.value.tabSubmit && Ys(b.value) && a.inputValue !== "" ? (r("set-input-date", b.value, !0, !0), b.value = null) : o.value.tabSubmit && a.inputValue === "" && (b.value = null, r("clear", !0));
    }, W = () => {
      var x;
      y.value = !0, r("focus"), o.value.enabled && o.value.selectOnFocus && ((x = v.value) == null || x.select());
    }, B = (x) => {
      x.preventDefault(), Fn(x, i.value, !0), o.value.enabled && o.value.openMenu && !l.value.input && !a.isMenuOpen ? r("open") : o.value.enabled || r("toggle");
    }, V = () => {
      r("real-blur"), y.value = !1, (!a.isMenuOpen || l.value.enabled && l.value.input) && r("blur"), a.autoApply && o.value.enabled && b.value && !a.isMenuOpen && (r("set-input-date", b.value), r("select-date"), b.value = null);
    }, j = (x) => {
      Fn(x, i.value, !0), r("clear");
    }, U = (x) => {
      if (!o.value.enabled) {
        if (x.code === "Tab")
          return;
        x.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        var x;
        (x = v.value) == null || x.focus({ preventScroll: !0 });
      },
      setParsedDate: (x) => {
        b.value = x;
      }
    }), (x, S) => {
      var G;
      return F(), z("div", { onClick: B }, [
        x.$slots.trigger && !x.$slots["dp-input"] && !M(l).enabled ? ge(x.$slots, "trigger", { key: 0 }) : X("", !0),
        !x.$slots.trigger && (!M(l).enabled || M(l).input) ? (F(), z("div", mw, [
          x.$slots["dp-input"] && !x.$slots.trigger && (!M(l).enabled || M(l).enabled && M(l).input) ? ge(x.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: $,
            onEnter: _,
            onTab: T,
            onClear: j,
            onBlur: V,
            onKeypress: U,
            onPaste: E,
            openMenu: () => x.$emit("open"),
            closeMenu: () => x.$emit("close"),
            toggleMenu: () => x.$emit("toggle")
          }) : X("", !0),
          x.$slots["dp-input"] ? X("", !0) : (F(), z("input", {
            key: 1,
            id: x.uid ? `dp-input-${x.uid}` : void 0,
            ref_key: "inputRef",
            ref: v,
            name: x.name,
            class: $e(N.value),
            inputmode: M(o).enabled ? "text" : "none",
            placeholder: x.placeholder,
            disabled: x.disabled,
            readonly: x.readonly,
            required: x.required,
            value: e.inputValue,
            autocomplete: x.autocomplete,
            "aria-label": (G = M(s)) == null ? void 0 : G.input,
            "aria-disabled": x.disabled || void 0,
            "aria-invalid": x.state === !1 ? !0 : void 0,
            onInput: $,
            onKeydown: [
              Se(_, ["enter"]),
              Se(T, ["tab"]),
              U
            ],
            onBlur: V,
            onFocus: W,
            onKeypress: U,
            onPaste: E
          }, null, 42, hw)),
          we("div", {
            onClick: S[2] || (S[2] = (se) => r("toggle"))
          }, [
            x.$slots["input-icon"] && !x.hideInputIcon ? (F(), z("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: S[0] || (S[0] = (se) => r("toggle"))
            }, [
              ge(x.$slots, "input-icon")
            ])) : X("", !0),
            !x.$slots["input-icon"] && !x.hideInputIcon && !x.$slots["dp-input"] ? (F(), Ce(M(Yr), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: S[1] || (S[1] = (se) => r("toggle"))
            })) : X("", !0)
          ]),
          x.$slots["clear-icon"] && e.inputValue && x.clearable && !x.disabled && !x.readonly ? (F(), z("span", vw, [
            ge(x.$slots, "clear-icon", { clear: j })
          ])) : X("", !0),
          x.clearable && !x.$slots["clear-icon"] && e.inputValue && !x.disabled && !x.readonly ? (F(), Ce(M(Bd), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: S[3] || (S[3] = Ke((se) => j(se), ["prevent"]))
          })) : X("", !0)
        ])) : X("", !0)
      ]);
    };
  }
}), gw = ["title"], bw = ["disabled"], ww = /* @__PURE__ */ Mt({
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
    } = st(r), { isTimeValid: d, isMonthValid: p } = Gn(r), { buildMatrix: b } = zn(), v = J(null), y = J(null), D = J(!1), N = J({}), O = J(null), g = J(null);
    xt(() => {
      r.arrowNavigation && b([gt(v), gt(y)], "actionRow"), P(), window.addEventListener("resize", P);
    }), Ir(() => {
      window.removeEventListener("resize", P);
    });
    const P = () => {
      D.value = !1, setTimeout(() => {
        var U, x;
        const S = (U = O.value) == null ? void 0 : U.getBoundingClientRect(), G = (x = g.value) == null ? void 0 : x.getBoundingClientRect();
        S && G && (N.value.maxWidth = `${G.width - S.width - 20}px`), D.value = !0;
      }, 0);
    }, E = re(() => c.value.enabled && !c.value.partialRange && r.internalModelValue ? r.internalModelValue.length === 2 : !0), k = re(
      () => !d.value(r.internalModelValue) || !p.value(r.internalModelValue) || !E.value
    ), $ = () => {
      const U = o.value;
      return r.timePicker || r.monthPicker, U(bt(r.internalModelValue));
    }, _ = () => {
      const U = r.internalModelValue;
      return s.value.count > 0 ? `${T(U[0])} - ${T(U[1])}` : [T(U[0]), T(U[1])];
    }, T = (U) => Gd(
      U,
      o.value,
      r.formatLocale,
      l.value.rangeSeparator,
      r.modelAuto,
      u()
    ), W = re(() => !r.internalModelValue || !r.menuMount ? "" : typeof o.value == "string" ? Array.isArray(r.internalModelValue) ? r.internalModelValue.length === 2 && r.internalModelValue[1] ? _() : r.multiDates ? r.internalModelValue.map((U) => `${T(U)}`) : r.modelAuto ? `${T(r.internalModelValue[0])}` : `${T(r.internalModelValue[0])} -` : T(r.internalModelValue) : $()), B = () => r.multiDates ? "; " : " - ", V = re(
      () => Array.isArray(W.value) ? W.value.join(B()) : W.value
    ), j = () => {
      d.value(r.internalModelValue) && p.value(r.internalModelValue) && E.value ? n("select-date") : n("invalid-select");
    };
    return (U, x) => (F(), z("div", {
      ref_key: "actionRowRef",
      ref: g,
      class: "dp__action_row"
    }, [
      U.$slots["action-row"] ? ge(U.$slots, "action-row", ht(_t({ key: 0 }, {
        internalModelValue: U.internalModelValue,
        disabled: k.value,
        selectDate: () => U.$emit("select-date"),
        closePicker: () => U.$emit("close-picker")
      }))) : (F(), z(xe, { key: 1 }, [
        M(a).showPreview ? (F(), z("div", {
          key: 0,
          class: "dp__selection_preview",
          title: V.value,
          style: Dt(N.value)
        }, [
          U.$slots["action-preview"] && D.value ? ge(U.$slots, "action-preview", {
            key: 0,
            value: U.internalModelValue
          }) : X("", !0),
          !U.$slots["action-preview"] && D.value ? (F(), z(xe, { key: 1 }, [
            Jt(We(V.value), 1)
          ], 64)) : X("", !0)
        ], 12, gw)) : X("", !0),
        we("div", {
          ref_key: "actionBtnContainer",
          ref: O,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          U.$slots["action-buttons"] ? ge(U.$slots, "action-buttons", {
            key: 0,
            value: U.internalModelValue
          }) : X("", !0),
          U.$slots["action-buttons"] ? X("", !0) : (F(), z(xe, { key: 1 }, [
            !M(i).enabled && M(a).showCancel ? (F(), z("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: v,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: x[0] || (x[0] = (S) => U.$emit("close-picker")),
              onKeydown: [
                x[1] || (x[1] = Se((S) => U.$emit("close-picker"), ["enter"])),
                x[2] || (x[2] = Se((S) => U.$emit("close-picker"), ["space"]))
              ]
            }, We(U.cancelText), 545)) : X("", !0),
            M(a).showNow ? (F(), z("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: x[3] || (x[3] = (S) => U.$emit("select-now")),
              onKeydown: [
                x[4] || (x[4] = Se((S) => U.$emit("select-now"), ["enter"])),
                x[5] || (x[5] = Se((S) => U.$emit("select-now"), ["space"]))
              ]
            }, We(U.nowButtonLabel), 33)) : X("", !0),
            M(a).showSelect ? (F(), z("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: y,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: k.value,
              onKeydown: [
                Se(j, ["enter"]),
                Se(j, ["space"])
              ],
              onClick: j
            }, We(U.selectText), 41, bw)) : X("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), _w = ["onKeydown"], xw = { class: "dp__selection_grid_header" }, kw = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], Mw = ["aria-label"], Ma = /* @__PURE__ */ Mt({
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
    ), { hideNavigationButtons: d } = Ro(), p = J(!1), b = J(null), v = J(null), y = J([]), D = J(), N = J(null), O = J(0), g = J(null);
    lc(() => {
      b.value = null;
    }), xt(() => {
      Xt().then(() => B()), l.noOverlayFocus || E(), P(!0);
    }), Ir(() => P(!1));
    const P = (ee) => {
      var m;
      l.arrowNavigation && ((m = l.headerRefs) != null && m.length ? o(ee) : r(ee));
    }, E = () => {
      var ee;
      const m = gt(v);
      m && (c.value.enabled || (b.value ? (ee = b.value) == null || ee.focus({ preventScroll: !0 }) : m.focus({ preventScroll: !0 })), p.value = m.clientHeight < m.scrollHeight);
    }, k = re(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !l.useRelative,
        "dp--overlay-relative": l.useRelative
      })
    ), $ = re(
      () => l.useRelative ? { height: `${l.height}px`, width: "260px" } : void 0
    ), _ = re(() => ({
      dp__overlay_col: !0
    })), T = re(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: p.value,
        dp__button_bottom: l.isLast
      })
    ), W = re(() => {
      var ee, m;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((ee = l.items) == null ? void 0 : ee.length) <= 6,
        dp__container_block: ((m = l.items) == null ? void 0 : m.length) > 6
      };
    });
    ft(
      () => l.items,
      () => B(!1),
      { deep: !0 }
    );
    const B = (ee = !0) => {
      Xt().then(() => {
        const m = gt(b), f = gt(v), R = gt(N), Q = gt(g), ce = R ? R.getBoundingClientRect().height : 0;
        f && (f.getBoundingClientRect().height ? O.value = f.getBoundingClientRect().height - ce : O.value = u.value.modeHeight - ce), m && Q && ee && (Q.scrollTop = m.offsetTop - Q.offsetTop - (O.value / 2 - m.getBoundingClientRect().height) - ce);
      });
    }, V = (ee) => {
      ee.disabled || s("selected", ee.value);
    }, j = () => {
      s("toggle"), s("reset-flow");
    }, U = () => {
      l.escClose && j();
    }, x = (ee, m, f, R) => {
      ee && ((m.active || m.value === l.focusValue) && (b.value = ee), l.arrowNavigation && (Array.isArray(y.value[f]) ? y.value[f][R] = ee : y.value[f] = [ee], S()));
    }, S = () => {
      var ee, m;
      const f = (ee = l.headerRefs) != null && ee.length ? [l.headerRefs].concat(y.value) : y.value.concat([l.skipButtonRef ? [] : [N.value]]);
      a(bt(f), (m = l.headerRefs) != null && m.length ? "monthPicker" : "selectionGrid");
    }, G = (ee) => {
      l.arrowNavigation || Fn(ee, u.value, !0);
    }, se = (ee) => {
      D.value = ee, s("hover-value", ee);
    }, pe = () => {
      if (j(), !l.isLast) {
        const ee = Vb(l.menuWrapRef ?? null, "action-row");
        if (ee) {
          const m = Hd(ee);
          m == null || m.focus();
        }
      }
    };
    return t({ focusGrid: E }), (ee, m) => {
      var f;
      return F(), z("div", {
        ref_key: "gridWrapRef",
        ref: v,
        class: $e(k.value),
        style: Dt($.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          Se(Ke(U, ["prevent"]), ["esc"]),
          m[0] || (m[0] = Se(Ke((R) => G(R), ["prevent"]), ["left"])),
          m[1] || (m[1] = Se(Ke((R) => G(R), ["prevent"]), ["up"])),
          m[2] || (m[2] = Se(Ke((R) => G(R), ["prevent"]), ["down"])),
          m[3] || (m[3] = Se(Ke((R) => G(R), ["prevent"]), ["right"]))
        ]
      }, [
        we("div", {
          ref_key: "containerRef",
          ref: g,
          class: $e(W.value),
          role: "grid",
          style: Dt({ height: `${O.value}px` })
        }, [
          we("div", xw, [
            ge(ee.$slots, "header")
          ]),
          ee.$slots.overlay ? ge(ee.$slots, "overlay", { key: 0 }) : (F(!0), z(xe, { key: 1 }, qe(ee.items, (R, Q) => (F(), z("div", {
            key: Q,
            class: $e(["dp__overlay_row", { dp__flex_row: ee.items.length >= 3 }]),
            role: "row"
          }, [
            (F(!0), z(xe, null, qe(R, (ce, L) => (F(), z("div", {
              key: ce.value,
              ref_for: !0,
              ref: (Oe) => x(Oe, ce, Q, L),
              role: "gridcell",
              class: $e(_.value),
              "aria-selected": ce.active || void 0,
              "aria-disabled": ce.disabled || void 0,
              tabindex: "0",
              onClick: (Oe) => V(ce),
              onKeydown: [
                Se(Ke((Oe) => V(ce), ["prevent"]), ["enter"]),
                Se(Ke((Oe) => V(ce), ["prevent"]), ["space"])
              ],
              onMouseover: (Oe) => se(ce.value)
            }, [
              we("div", {
                class: $e(ce.className)
              }, [
                ee.$slots.item ? ge(ee.$slots, "item", {
                  key: 0,
                  item: ce
                }) : X("", !0),
                ee.$slots.item ? X("", !0) : (F(), z(xe, { key: 1 }, [
                  Jt(We(ce.text), 1)
                ], 64))
              ], 2)
            ], 42, kw))), 128))
          ], 2))), 128))
        ], 6),
        ee.$slots["button-icon"] ? Vn((F(), z("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: N,
          type: "button",
          "aria-label": (f = M(i)) == null ? void 0 : f.toggleOverlay,
          class: $e(T.value),
          tabindex: "0",
          onClick: j,
          onKeydown: [
            Se(j, ["enter"]),
            Se(pe, ["tab"])
          ]
        }, [
          ge(ee.$slots, "button-icon")
        ], 42, Mw)), [
          [Ia, !M(d)(ee.hideNavigation, ee.type)]
        ]) : X("", !0)
      ], 46, _w);
    };
  }
}), $o = /* @__PURE__ */ Mt({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const t = e, n = re(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), r = re(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (a, o) => (F(), z("div", {
      class: $e({
        dp__menu_inner: !a.stretch,
        "dp--menu--inner-stretched": a.stretch,
        dp__flex_display: a.multiCalendars > 0,
        "dp--flex-display-collapsed": a.collapse
      })
    }, [
      (F(!0), z(xe, null, qe(n.value, (s, l) => (F(), z("div", {
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
}), Tw = ["aria-label", "aria-disabled"], sa = /* @__PURE__ */ Mt({
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
    return xt(() => n("set-ref", r)), (a, o) => (F(), z("button", {
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
      we("span", {
        class: $e(["dp__inner_nav", { dp__inner_nav_disabled: a.disabled }])
      }, [
        ge(a.$slots, "default")
      ], 2)
    ], 40, Tw));
  }
}), Pw = { class: "dp--year-mode-picker" }, Sw = ["aria-label"], Jd = /* @__PURE__ */ Mt({
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
      var N, O, g;
      return F(), z("div", Pw, [
        M(o)(M(l), e.instance) ? (F(), Ce(sa, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (N = M(i)) == null ? void 0 : N.prevYear,
          disabled: e.isDisabled(!1),
          onActivate: D[0] || (D[0] = (P) => v(!1))
        }, {
          default: Ve(() => [
            y.$slots["arrow-left"] ? ge(y.$slots, "arrow-left", { key: 0 }) : X("", !0),
            y.$slots["arrow-left"] ? X("", !0) : (F(), Ce(M(Ol), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : X("", !0),
        we("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (O = M(i)) == null ? void 0 : O.openYearsOverlay,
          onClick: D[1] || (D[1] = () => p(!1)),
          onKeydown: D[2] || (D[2] = Se(() => p(!1), ["enter"]))
        }, [
          y.$slots.year ? ge(y.$slots, "year", {
            key: 0,
            year: e.year
          }) : X("", !0),
          y.$slots.year ? X("", !0) : (F(), z(xe, { key: 1 }, [
            Jt(We(e.year), 1)
          ], 64))
        ], 40, Sw),
        M(a)(M(l), e.instance) ? (F(), Ce(sa, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (g = M(i)) == null ? void 0 : g.nextYear,
          disabled: e.isDisabled(!0),
          onActivate: D[3] || (D[3] = (P) => v(!0))
        }, {
          default: Ve(() => [
            y.$slots["arrow-right"] ? ge(y.$slots, "arrow-right", { key: 0 }) : X("", !0),
            y.$slots["arrow-right"] ? X("", !0) : (F(), Ce(M(El), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : X("", !0),
        Qe(qn, {
          name: M(d)(e.showYearPicker),
          css: M(u)
        }, {
          default: Ve(() => [
            e.showYearPicker ? (F(), Ce(Ma, {
              key: 0,
              items: e.items,
              "text-input": y.textInput,
              "esc-close": y.escClose,
              config: y.config,
              "is-last": y.autoApply && !M(s).keepActionRow,
              "hide-navigation": y.hideNavigation,
              "aria-labels": y.ariaLabels,
              type: "year",
              onToggle: p,
              onSelected: D[4] || (D[4] = (P) => b(P))
            }, Ct({
              "button-icon": Ve(() => [
                y.$slots["calendar-icon"] ? ge(y.$slots, "calendar-icon", { key: 0 }) : X("", !0),
                y.$slots["calendar-icon"] ? X("", !0) : (F(), Ce(M(Yr), { key: 1 }))
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
}, Zd = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => jn(Z(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = jn(Z(e.value), e.timezone));
}, ef = (e, t, n, r) => Array.isArray(t.value) && t.value.length === 2 ? r.value.fixedStart && (dt(e, t.value[0]) || Be(e, t.value[0])) ? [t.value[0], e] : r.value.fixedEnd && (it(e, t.value[1]) || Be(e, t.value[1])) ? [e, t.value[1]] : (n("invalid-fixed-range", e), t.value) : [], tf = ({
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
  const c = re(() => Vl(o.yearRange, o.reverseYears)), u = J([!1]), d = re(() => (E, k) => {
    const $ = Ze(qt(/* @__PURE__ */ new Date()), {
      month: l.value(E),
      year: s.value(E)
    });
    return zd(
      $,
      n.value.maxDate,
      n.value.minDate,
      o.preventMinMaxNavigation,
      k
    );
  }), p = () => {
    for (let E = 0; E < e.value.count; E++)
      if (E === 0)
        r.value[E] = r.value[0];
      else {
        const k = Ze(Z(), r.value[E - 1]);
        r.value[E] = { month: Ie(k), year: Ne(kl(k, 1)) };
      }
  }, b = (E) => {
    if (!E)
      return p();
    const k = Ze(Z(), r.value[E]);
    return r.value[0].year = Ne(Id(k, e.value.count - 1)), p();
  }, v = (E) => o.focusStartDate ? E[0] : E[1] ? E[1] : E[0], y = () => {
    if (a.value) {
      const E = Array.isArray(a.value) ? v(a.value) : a.value;
      r.value[0] = { month: Ie(E), year: Ne(E) };
    }
  };
  xt(() => {
    y(), e.value.count && p();
  });
  const D = (E, k) => {
    r.value[k].year = E, e.value.count && !e.value.solo && b(k);
  }, N = re(() => (E) => Vr(c.value, (k) => {
    const $ = s.value(E) === k.value, _ = ya(
      k.value,
      Fr(n.value.minDate),
      Fr(n.value.maxDate)
    ), T = Bl(t.value, k.value);
    return { active: $, disabled: _, highlighted: T };
  })), O = (E, k) => {
    D(E, k), P(k);
  }, g = (E, k = !1) => {
    if (!d.value(E, k)) {
      const $ = k ? s.value(E) + 1 : s.value(E) - 1;
      D($, E);
    }
  }, P = (E, k = !1, $) => {
    k || i("reset-flow"), $ !== void 0 ? u.value[E] = $ : u.value[E] = !u.value[E], u.value || i("overlay-closed");
  };
  return {
    isDisabled: d,
    groupedYears: N,
    showYearPicker: u,
    selectYear: D,
    toggleYearPicker: P,
    handleYearSelect: O,
    handleYear: g
  };
}, Aw = (e, t) => {
  const {
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: a,
    defaultedConfig: o,
    defaultedRange: s,
    defaultedHighlight: l,
    propDates: i,
    defaultedTz: c
  } = st(e), { modelValue: u, year: d, month: p, calendars: b } = ka(e, t), v = re(() => Ld(e.formatLocale, e.locale, e.monthNameFormat)), y = J(null), { checkMinMaxRange: D } = Gn(e), {
    selectYear: N,
    groupedYears: O,
    showYearPicker: g,
    toggleYearPicker: P,
    handleYearSelect: E,
    handleYear: k,
    isDisabled: $
  } = tf({
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
    e.startDate && (u.value && e.focusStartDate || !u.value) && N(Ne(Z(e.startDate)), 0);
  });
  const _ = (m) => m ? { month: Ie(m), year: Ne(m) } : { month: null, year: null }, T = () => u.value ? Array.isArray(u.value) ? u.value.map((m) => _(m)) : _(u.value) : _(), W = (m, f) => {
    const R = b.value[m], Q = T();
    return Array.isArray(Q) ? Q.some((ce) => ce.year === (R == null ? void 0 : R.year) && ce.month === f) : (R == null ? void 0 : R.year) === Q.year && f === Q.month;
  }, B = (m, f, R) => {
    var Q, ce;
    const L = T();
    return Array.isArray(L) ? d.value(f) === ((Q = L[R]) == null ? void 0 : Q.year) && m === ((ce = L[R]) == null ? void 0 : ce.month) : !1;
  }, V = (m, f) => {
    if (s.value.enabled) {
      const R = T();
      if (Array.isArray(u.value) && Array.isArray(R)) {
        const Q = B(m, f, 0) || B(m, f, 1), ce = yn(qt(Z()), m, d.value(f));
        return Eo(u.value, y.value, ce) && !Q;
      }
      return !1;
    }
    return !1;
  }, j = re(() => (m) => Vr(v.value, (f) => {
    const R = W(m, f.value), Q = ya(
      f.value,
      jd(d.value(m), i.value.minDate),
      Ud(d.value(m), i.value.maxDate)
    ) || Ub(i.value.disabledDates, d.value(m)).includes(f.value), ce = V(f.value, m), L = Kd(l.value, f.value, d.value(m));
    return { active: R, disabled: Q, isBetween: ce, highlighted: L };
  })), U = (m, f) => yn(qt(Z()), m, d.value(f)), x = (m, f) => {
    const R = u.value ? u.value : qt(/* @__PURE__ */ new Date());
    u.value = yn(R, m, d.value(f)), t("auto-apply"), t("update-flow-step");
  }, S = (m, f) => {
    const R = U(m, f);
    s.value.fixedEnd || s.value.fixedStart ? u.value = ef(R, u, t, s) : u.value ? D(R, u.value) && (u.value = Yl(u, U(m, f), t)) : u.value = [U(m, f)], Vo(u.value, t, e.autoApply, e.modelAuto);
  }, G = (m, f) => {
    Ll(U(m, f), u, e.multiDatesLimit), t("auto-apply", !0);
  }, se = (m, f) => (b.value[f].month = m, ee(f, b.value[f].year, m), e.multiDates ? G(m, f) : s.value.enabled ? S(m, f) : x(m, f)), pe = (m, f) => {
    N(m, f), ee(f, m, null);
  }, ee = (m, f, R) => {
    let Q = R;
    if (!Q && Q !== 0) {
      const ce = T();
      Q = Array.isArray(ce) ? ce[m].month : ce.month;
    }
    t("update-month-year", { instance: m, year: f, month: Q });
  };
  return {
    groupedMonths: j,
    groupedYears: O,
    year: d,
    isDisabled: $,
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: a,
    defaultedConfig: o,
    showYearPicker: g,
    modelValue: u,
    presetDate: (m, f) => {
      Zd({
        value: m,
        modelValue: u,
        range: s.value.enabled,
        timezone: f ? void 0 : c.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (m, f) => {
      y.value = U(m, f);
    },
    selectMonth: se,
    selectYear: pe,
    toggleYearPicker: P,
    handleYearSelect: E,
    handleYear: k,
    getModelMonthYear: T
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
      modelValue: v,
      presetDate: y,
      setHoverDate: D,
      selectMonth: N,
      selectYear: O,
      toggleYearPicker: g,
      handleYearSelect: P,
      handleYear: E,
      getModelMonthYear: k
    } = Aw(s, r);
    return t({ getSidebarProps: () => ({
      modelValue: v,
      year: c,
      getModelMonthYear: k,
      selectMonth: N,
      selectYear: O,
      handleYear: E
    }), presetDate: y, toggleYearPicker: ($) => g(0, $) }), ($, _) => (F(), Ce($o, {
      "multi-calendars": M(d).count,
      collapse: $.collapse,
      stretch: ""
    }, {
      default: Ve(({ instance: T }) => [
        $.$slots["month-year"] ? ge($.$slots, "month-year", ht(_t({ key: 0 }, {
          year: M(c),
          months: M(l)(T),
          years: M(i)(T),
          selectMonth: M(N),
          selectYear: M(O),
          instance: T
        }))) : (F(), Ce(Ma, {
          key: 1,
          items: M(l)(T),
          "arrow-navigation": $.arrowNavigation,
          "is-last": $.autoApply && !M(p).keepActionRow,
          "esc-close": $.escClose,
          height: M(p).modeHeight,
          config: $.config,
          "no-overlay-focus": !!($.noOverlayFocus || $.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (W) => M(N)(W, T),
          onHoverValue: (W) => M(D)(W, T)
        }, {
          header: Ve(() => [
            Qe(Jd, _t($.$props, {
              items: M(i)(T),
              instance: T,
              "show-year-picker": M(b)[T],
              year: M(c)(T),
              "is-disabled": (W) => M(u)(T, W),
              onHandleYear: (W) => M(E)(T, W),
              onYearSelect: (W) => M(P)(W, T),
              onToggleYearPicker: (W) => M(g)(T, W == null ? void 0 : W.flow, W == null ? void 0 : W.show)
            }), Ct({ _: 2 }, [
              qe(M(o), (W, B) => ({
                name: W,
                fn: Ve((V) => [
                  ge($.$slots, W, ht(Pt(V)))
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
}), Cw = (e, t) => {
  const { modelValue: n } = ka(e, t), r = J(null), { defaultedHighlight: a, defaultedFilters: o, defaultedRange: s, propDates: l } = st(e), i = J();
  xt(() => {
    e.startDate && (n.value && e.focusStartDate || !n.value) && (i.value = Ne(Z(e.startDate)));
  });
  const c = (b) => Array.isArray(n.value) ? n.value.some((v) => Ne(v) === b) : n.value ? Ne(n.value) === b : !1, u = (b) => s.value.enabled && Array.isArray(n.value) ? Eo(n.value, r.value, p(b)) : !1, d = re(() => Vr(Vl(e.yearRange, e.reverseYears), (b) => {
    const v = c(b.value), y = ya(
      b.value,
      Fr(l.value.minDate),
      Fr(l.value.maxDate)
    ) || o.value.years.includes(b.value), D = u(b.value) && !v, N = Bl(a.value, b.value);
    return { active: v, disabled: y, isBetween: D, highlighted: N };
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
        return n.value ? Array.isArray(n.value) && (((v = n.value) == null ? void 0 : v.map((y) => Ne(y))).includes(b) ? n.value = n.value.filter((y) => Ne(y) !== b) : n.value.push(un(It(Z()), b))) : n.value = [un(It(Z()), b)], t("auto-apply", !0);
      if (s.value.enabled)
        return n.value = Yl(n, p(b), t), Vo(n.value, t, e.autoApply, e.modelAuto);
      n.value = p(b), t("auto-apply");
    }
  };
}, Ow = /* @__PURE__ */ Mt({
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
    const r = n, a = e, { groupedYears: o, modelValue: s, focusYear: l, selectYear: i, setHoverValue: c } = Cw(a, r), { defaultedConfig: u } = st(a);
    return t({ getSidebarProps: () => ({
      modelValue: s,
      selectYear: i
    }) }), (d, p) => (F(), z("div", null, [
      d.$slots["month-year"] ? ge(d.$slots, "month-year", ht(_t({ key: 0 }, {
        years: M(o),
        selectYear: M(i)
      }))) : (F(), Ce(Ma, {
        key: 1,
        items: M(o),
        "is-last": d.autoApply && !M(u).keepActionRow,
        height: M(u).modeHeight,
        config: d.config,
        "no-overlay-focus": !!(d.noOverlayFocus || d.textInput),
        "focus-value": M(l),
        type: "year",
        "use-relative": "",
        onSelected: M(i),
        onHoverValue: M(c)
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
}), Ew = {
  key: 0,
  class: "dp__time_input"
}, Rw = ["aria-label", "onKeydown", "onClick"], Nw = /* @__PURE__ */ we("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), $w = /* @__PURE__ */ we("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), Vw = ["aria-label", "disabled", "onKeydown", "onClick"], Fw = ["aria-label", "onKeydown", "onClick"], Iw = /* @__PURE__ */ we("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), Bw = /* @__PURE__ */ we("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), Lw = { key: 0 }, Yw = ["aria-label", "onKeydown"], Hw = /* @__PURE__ */ Mt({
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
    }), y = J("AM"), D = J(null), N = J([]);
    xt(() => {
      r("mounted");
    });
    const O = (H) => Ze(/* @__PURE__ */ new Date(), {
      hours: H.hours,
      minutes: H.minutes,
      seconds: a.enableSeconds ? H.seconds : 0,
      milliseconds: 0
    }), g = re(
      () => (H) => x(H, a[H]) || E(H, a[H])
    ), P = re(() => ({ hours: a.hours, minutes: a.minutes, seconds: a.seconds })), E = (H, ve) => d.value.enabled && !d.value.disableTimeRangeValidation ? !a.validateTime(H, ve) : !1, k = (H, ve) => {
      if (d.value.enabled && !d.value.disableTimeRangeValidation) {
        const Ee = ve ? +a[`${H}Increment`] : -+a[`${H}Increment`], A = a[H] + Ee;
        return !a.validateTime(H, A);
      }
      return !1;
    }, $ = re(() => (H) => !pe(+a[H] + +a[`${H}Increment`], H) || k(H, !0)), _ = re(() => (H) => !pe(+a[H] - +a[`${H}Increment`], H) || k(H, !1)), T = (H, ve) => wd(Ze(Z(), H), ve), W = (H, ve) => Ab(Ze(Z(), H), ve), B = re(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !a.timePickerInline,
        dp__time_col_reg_block: !a.enableSeconds && a.is24 && !a.timePickerInline,
        dp__time_col_reg_inline: !a.enableSeconds && a.is24 && a.timePickerInline,
        dp__time_col_reg_with_button: !a.enableSeconds && !a.is24,
        dp__time_col_sec: a.enableSeconds && a.is24,
        dp__time_col_sec_with_button: a.enableSeconds && !a.is24
      })
    ), V = re(() => {
      const H = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return a.enableSeconds ? H.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : H;
    }), j = re(() => V.value.filter((H) => !H.separator)), U = re(() => (H) => {
      if (H === "hours") {
        const ve = Q(+a.hours);
        return { text: ve < 10 ? `0${ve}` : `${ve}`, value: ve };
      }
      return { text: a[H] < 10 ? `0${a[H]}` : `${a[H]}`, value: a[H] };
    }), x = (H, ve) => {
      var Ee;
      if (!a.disabledTimesConfig)
        return !1;
      const A = a.disabledTimesConfig(a.order, H === "hours" ? ve : void 0);
      return A[H] ? !!((Ee = A[H]) != null && Ee.includes(ve)) : !0;
    }, S = (H) => {
      const ve = a.is24 ? 24 : 12, Ee = H === "hours" ? ve : 60, A = +a[`${H}GridIncrement`], h = H === "hours" && !a.is24 ? A : 0, w = [];
      for (let I = h; I < Ee; I += A)
        w.push({ value: I, text: I < 10 ? `0${I}` : `${I}` });
      return H === "hours" && !a.is24 && w.push({ value: 0, text: "12" }), Vr(w, (I) => ({ active: !1, disabled: c.value.times[H].includes(I.value) || !pe(I.value, H) || x(H, I.value) || E(H, I.value) }));
    }, G = (H) => H >= 0 ? H : 59, se = (H) => H >= 0 ? H : 23, pe = (H, ve) => {
      const Ee = a.minTime ? O(as(a.minTime)) : null, A = a.maxTime ? O(as(a.maxTime)) : null, h = O(
        as(
          P.value,
          ve,
          ve === "minutes" || ve === "seconds" ? G(H) : se(H)
        )
      );
      return Ee && A ? (va(h, A) || xr(h, A)) && (ha(h, Ee) || xr(h, Ee)) : Ee ? ha(h, Ee) || xr(h, Ee) : A ? va(h, A) || xr(h, A) : !0;
    }, ee = (H) => a[`no${H[0].toUpperCase() + H.slice(1)}Overlay`], m = (H) => {
      ee(H) || (v[H] = !v[H], v[H] || r("overlay-closed"));
    }, f = (H) => H === "hours" ? Kt : H === "minutes" ? fn : Nr, R = (H, ve = !0) => {
      const Ee = ve ? T : W, A = ve ? +a[`${H}Increment`] : -+a[`${H}Increment`];
      pe(+a[H] + A, H) && r(
        `update:${H}`,
        f(H)(Ee({ [H]: +a[H] }, { [H]: +a[`${H}Increment`] }))
      );
    }, Q = (H) => a.is24 ? H : (H >= 12 ? y.value = "PM" : y.value = "AM", Ob(H)), ce = () => {
      y.value === "PM" ? (y.value = "AM", r("update:hours", a.hours - 12)) : (y.value = "PM", r("update:hours", a.hours + 12)), r("am-pm-change", y.value);
    }, L = (H) => {
      v[H] = !0;
    }, Oe = (H, ve, Ee) => {
      if (H && a.arrowNavigation) {
        Array.isArray(N.value[ve]) ? N.value[ve][Ee] = H : N.value[ve] = [H];
        const A = N.value.reduce(
          (h, w) => w.map((I, K) => [...h[K] || [], w[K]]),
          []
        );
        s(a.closeTimePickerBtn), D.value && (A[1] = A[1].concat(D.value)), o(A, a.order);
      }
    }, Fe = (H, ve) => (m(H), H === "hours" && !a.is24 ? r(`update:${H}`, y.value === "PM" ? ve + 12 : ve) : r(`update:${H}`, ve));
    return t({ openChildCmp: L }), (H, ve) => {
      var Ee;
      return H.disabled ? X("", !0) : (F(), z("div", Ew, [
        (F(!0), z(xe, null, qe(V.value, (A, h) => {
          var w, I, K;
          return F(), z("div", {
            key: h,
            class: $e(B.value)
          }, [
            A.separator ? (F(), z(xe, { key: 0 }, [
              Jt(" : ")
            ], 64)) : (F(), z(xe, { key: 1 }, [
              we("button", {
                ref_for: !0,
                ref: (C) => Oe(C, h, 0),
                type: "button",
                class: $e({
                  dp__btn: !0,
                  dp__inc_dec_button: !H.timePickerInline,
                  dp__inc_dec_button_inline: H.timePickerInline,
                  dp__tp_inline_btn_top: H.timePickerInline,
                  dp__inc_dec_button_disabled: $.value(A.type)
                }),
                "aria-label": (w = M(l)) == null ? void 0 : w.incrementValue(A.type),
                tabindex: "0",
                onKeydown: [
                  Se(Ke((C) => R(A.type), ["prevent"]), ["enter"]),
                  Se(Ke((C) => R(A.type), ["prevent"]), ["space"])
                ],
                onClick: (C) => R(A.type)
              }, [
                a.timePickerInline ? (F(), z(xe, { key: 1 }, [
                  Nw,
                  $w
                ], 64)) : (F(), z(xe, { key: 0 }, [
                  H.$slots["arrow-up"] ? ge(H.$slots, "arrow-up", { key: 0 }) : X("", !0),
                  H.$slots["arrow-up"] ? X("", !0) : (F(), Ce(M(Nl), { key: 1 }))
                ], 64))
              ], 42, Rw),
              we("button", {
                ref_for: !0,
                ref: (C) => Oe(C, h, 1),
                type: "button",
                "aria-label": (I = M(l)) == null ? void 0 : I.openTpOverlay(A.type),
                class: $e({
                  dp__time_display: !0,
                  dp__time_display_block: !H.timePickerInline,
                  dp__time_display_inline: H.timePickerInline,
                  "dp--time-invalid": g.value(A.type),
                  "dp--time-overlay-btn": !g.value(A.type)
                }),
                disabled: ee(A.type),
                tabindex: "0",
                onKeydown: [
                  Se(Ke((C) => m(A.type), ["prevent"]), ["enter"]),
                  Se(Ke((C) => m(A.type), ["prevent"]), ["space"])
                ],
                onClick: (C) => m(A.type)
              }, [
                H.$slots[A.type] ? ge(H.$slots, A.type, {
                  key: 0,
                  text: U.value(A.type).text,
                  value: U.value(A.type).value
                }) : X("", !0),
                H.$slots[A.type] ? X("", !0) : (F(), z(xe, { key: 1 }, [
                  Jt(We(U.value(A.type).text), 1)
                ], 64))
              ], 42, Vw),
              we("button", {
                ref_for: !0,
                ref: (C) => Oe(C, h, 2),
                type: "button",
                class: $e({
                  dp__btn: !0,
                  dp__inc_dec_button: !H.timePickerInline,
                  dp__inc_dec_button_inline: H.timePickerInline,
                  dp__tp_inline_btn_bottom: H.timePickerInline,
                  dp__inc_dec_button_disabled: _.value(A.type)
                }),
                "aria-label": (K = M(l)) == null ? void 0 : K.decrementValue(A.type),
                tabindex: "0",
                onKeydown: [
                  Se(Ke((C) => R(A.type, !1), ["prevent"]), ["enter"]),
                  Se(Ke((C) => R(A.type, !1), ["prevent"]), ["space"])
                ],
                onClick: (C) => R(A.type, !1)
              }, [
                a.timePickerInline ? (F(), z(xe, { key: 1 }, [
                  Iw,
                  Bw
                ], 64)) : (F(), z(xe, { key: 0 }, [
                  H.$slots["arrow-down"] ? ge(H.$slots, "arrow-down", { key: 0 }) : X("", !0),
                  H.$slots["arrow-down"] ? X("", !0) : (F(), Ce(M($l), { key: 1 }))
                ], 64))
              ], 42, Fw)
            ], 64))
          ], 2);
        }), 128)),
        H.is24 ? X("", !0) : (F(), z("div", Lw, [
          H.$slots["am-pm-button"] ? ge(H.$slots, "am-pm-button", {
            key: 0,
            toggle: ce,
            value: y.value
          }) : X("", !0),
          H.$slots["am-pm-button"] ? X("", !0) : (F(), z("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: D,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (Ee = M(l)) == null ? void 0 : Ee.amPmButton,
            tabindex: "0",
            onClick: ce,
            onKeydown: [
              Se(Ke(ce, ["prevent"]), ["enter"]),
              Se(Ke(ce, ["prevent"]), ["space"])
            ]
          }, We(y.value), 41, Yw))
        ])),
        (F(!0), z(xe, null, qe(j.value, (A, h) => (F(), Ce(qn, {
          key: h,
          name: M(p)(v[A.type]),
          css: M(b)
        }, {
          default: Ve(() => [
            v[A.type] ? (F(), Ce(Ma, {
              key: 0,
              items: S(A.type),
              "is-last": H.autoApply && !M(u).keepActionRow,
              "esc-close": H.escClose,
              type: A.type,
              "text-input": H.textInput,
              config: H.config,
              "arrow-navigation": H.arrowNavigation,
              "aria-labels": H.ariaLabels,
              onSelected: (w) => Fe(A.type, w),
              onToggle: (w) => m(A.type),
              onResetFlow: ve[0] || (ve[0] = (w) => H.$emit("reset-flow"))
            }, Ct({
              "button-icon": Ve(() => [
                H.$slots["clock-icon"] ? ge(H.$slots, "clock-icon", { key: 0 }) : X("", !0),
                H.$slots["clock-icon"] ? X("", !0) : (F(), Ce(bo(H.timePickerInline ? M(Yr) : M(Rl)), { key: 1 }))
              ]),
              _: 2
            }, [
              H.$slots[`${A.type}-overlay-value`] ? {
                name: "item",
                fn: Ve(({ item: w }) => [
                  ge(H.$slots, `${A.type}-overlay-value`, {
                    text: w.text,
                    value: w.value
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
}), jw = { class: "dp--tp-wrap" }, Uw = ["aria-label", "tabindex"], Ww = ["tabindex"], qw = ["aria-label"], nf = /* @__PURE__ */ Mt({
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
    const r = n, a = e, { buildMatrix: o, setTimePicker: s } = zn(), l = vr(), { defaultedTransitions: i, defaultedAriaLabels: c, defaultedTextInput: u, defaultedConfig: d, defaultedRange: p } = st(a), { transitionName: b, showTransition: v } = xa(i), { hideNavigationButtons: y } = Ro(), D = J(null), N = J(null), O = J([]), g = J(null);
    xt(() => {
      r("mount"), !a.timePicker && a.arrowNavigation ? o([gt(D.value)], "time") : s(!0, a.timePicker);
    });
    const P = re(() => p.value.enabled && a.modelAuto ? Yd(a.internalModelValue) : !0), E = J(!1), k = (S) => ({
      hours: Array.isArray(a.hours) ? a.hours[S] : a.hours,
      minutes: Array.isArray(a.minutes) ? a.minutes[S] : a.minutes,
      seconds: Array.isArray(a.seconds) ? a.seconds[S] : a.seconds
    }), $ = re(() => {
      const S = [];
      if (p.value.enabled)
        for (let G = 0; G < 2; G++)
          S.push(k(G));
      else
        S.push(k(0));
      return S;
    }), _ = (S, G = !1, se = "") => {
      G || r("reset-flow"), E.value = S, r(S ? "overlay-opened" : "overlay-closed"), a.arrowNavigation && s(S), Xt(() => {
        se !== "" && O.value[0] && O.value[0].openChildCmp(se);
      });
    }, T = re(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: a.autoApply && !d.value.keepActionRow
    })), W = Vt(l, "timePicker"), B = (S, G, se) => p.value.enabled ? G === 0 ? [S, $.value[1][se]] : [$.value[0][se], S] : S, V = (S) => {
      r("update:hours", S);
    }, j = (S) => {
      r("update:minutes", S);
    }, U = (S) => {
      r("update:seconds", S);
    }, x = () => {
      if (g.value && !u.value.enabled && !a.noOverlayFocus) {
        const S = Hd(g.value);
        S && S.focus({ preventScroll: !0 });
      }
    };
    return t({ toggleTimePicker: _ }), (S, G) => {
      var se;
      return F(), z("div", jw, [
        !S.timePicker && !S.timePickerInline ? Vn((F(), z("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: D,
          type: "button",
          class: $e(T.value),
          "aria-label": (se = M(c)) == null ? void 0 : se.openTimePicker,
          tabindex: S.noOverlayFocus ? void 0 : 0,
          onKeydown: [
            G[0] || (G[0] = Se((pe) => _(!0), ["enter"])),
            G[1] || (G[1] = Se((pe) => _(!0), ["space"]))
          ],
          onClick: G[2] || (G[2] = (pe) => _(!0))
        }, [
          S.$slots["clock-icon"] ? ge(S.$slots, "clock-icon", { key: 0 }) : X("", !0),
          S.$slots["clock-icon"] ? X("", !0) : (F(), Ce(M(Rl), { key: 1 }))
        ], 42, Uw)), [
          [Ia, !M(y)(S.hideNavigation, "time")]
        ]) : X("", !0),
        Qe(qn, {
          name: M(b)(E.value),
          css: M(v) && !S.timePickerInline
        }, {
          default: Ve(() => {
            var pe;
            return [
              E.value || S.timePicker || S.timePickerInline ? (F(), z("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: g,
                class: $e({
                  dp__overlay: !S.timePickerInline,
                  "dp--overlay-absolute": !a.timePicker && !S.timePickerInline,
                  "dp--overlay-relative": a.timePicker
                }),
                style: Dt(S.timePicker ? { height: `${M(d).modeHeight}px` } : void 0),
                tabindex: S.timePickerInline ? void 0 : 0
              }, [
                we("div", {
                  class: $e(
                    S.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  S.$slots["time-picker-overlay"] ? ge(S.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: V,
                    setMinutes: j,
                    setSeconds: U
                  }) : X("", !0),
                  S.$slots["time-picker-overlay"] ? X("", !0) : (F(), z("div", {
                    key: 1,
                    class: $e(S.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (F(!0), z(xe, null, qe($.value, (ee, m) => Vn((F(), Ce(Hw, _t({ key: m }, {
                      ...S.$props,
                      order: m,
                      hours: ee.hours,
                      minutes: ee.minutes,
                      seconds: ee.seconds,
                      closeTimePickerBtn: N.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: m === 0 ? S.fixedStart : S.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: O,
                      "validate-time": (f, R) => e.validateTime(f, B(R, m, f)),
                      "onUpdate:hours": (f) => V(B(f, m, "hours")),
                      "onUpdate:minutes": (f) => j(B(f, m, "minutes")),
                      "onUpdate:seconds": (f) => U(B(f, m, "seconds")),
                      onMounted: x,
                      onOverlayClosed: x,
                      onAmPmChange: G[3] || (G[3] = (f) => S.$emit("am-pm-change", f))
                    }), Ct({ _: 2 }, [
                      qe(M(W), (f, R) => ({
                        name: f,
                        fn: Ve((Q) => [
                          ge(S.$slots, f, ht(Pt(Q)))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Ia, m === 0 ? !0 : P.value]
                    ])), 128))
                  ], 2)),
                  !S.timePicker && !S.timePickerInline ? Vn((F(), z("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: N,
                    type: "button",
                    class: $e(T.value),
                    "aria-label": (pe = M(c)) == null ? void 0 : pe.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      G[4] || (G[4] = Se((ee) => _(!1), ["enter"])),
                      G[5] || (G[5] = Se((ee) => _(!1), ["space"]))
                    ],
                    onClick: G[6] || (G[6] = (ee) => _(!1))
                  }, [
                    S.$slots["calendar-icon"] ? ge(S.$slots, "calendar-icon", { key: 0 }) : X("", !0),
                    S.$slots["calendar-icon"] ? X("", !0) : (F(), Ce(M(Yr), { key: 1 }))
                  ], 42, qw)), [
                    [Ia, !M(y)(S.hideNavigation, "time")]
                  ]) : X("", !0)
                ], 2)
              ], 14, Ww)) : X("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), rf = (e, t, n, r) => {
  const { defaultedRange: a } = st(e), o = (g, P) => Array.isArray(t[g]) ? t[g][P] : t[g], s = (g) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[g] : t.seconds : 0, l = (g, P) => g ? P !== void 0 ? In(g, o("hours", P), o("minutes", P), s(P)) : In(g, t.hours, t.minutes, s()) : Cl(Z(), s(P)), i = (g, P) => {
    t[g] = P;
  }, c = re(() => e.modelAuto && a.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : a.value.enabled), u = (g, P) => {
    const E = Object.fromEntries(
      Object.keys(t).map((k) => k === g ? [k, P] : [k, t[k]].slice())
    );
    if (c.value && !a.value.disableTimeRangeValidation) {
      const k = (_) => n.value ? In(
        n.value[_],
        E.hours[_],
        E.minutes[_],
        E.seconds[_]
      ) : null, $ = (_) => Dl(n.value[_], 0);
      return !(Be(k(0), k(1)) && (ha(k(0), $(1)) || va(k(1), $(0))));
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
  }, y = (g, P, E, k) => {
    P && p(g), !P && !E && b(g), E && v(g), n.value && k(n.value);
  }, D = (g) => {
    if (g) {
      const P = Array.isArray(g), E = P ? [+g[0].hours, +g[1].hours] : +g.hours, k = P ? [+g[0].minutes, +g[1].minutes] : +g.minutes, $ = P ? [+g[0].seconds, +g[1].seconds] : +g.seconds;
      i("hours", E), i("minutes", k), e.enableSeconds && i("seconds", $);
    }
  }, N = (g, P) => {
    const E = {
      hours: Array.isArray(t.hours) ? t.hours[g] : t.hours,
      disabledArr: []
    };
    return (P || P === 0) && (E.hours = P), Array.isArray(e.disabledTimes) && (E.disabledArr = a.value.enabled && Array.isArray(e.disabledTimes[g]) ? e.disabledTimes[g] : e.disabledTimes), E;
  }, O = re(() => (g, P) => {
    var E;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: k, hours: $ } = N(g, P), _ = k.filter((T) => +T.hours === $);
      return ((E = _[0]) == null ? void 0 : E.minutes) === "*" ? { hours: [$], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (_ == null ? void 0 : _.map((T) => +T.minutes)) ?? [],
        seconds: (_ == null ? void 0 : _.map((T) => T.seconds ? +T.seconds : void 0)) ?? []
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
    disabledTimesConfig: O
  };
}, zw = (e, t) => {
  const { modelValue: n, time: r } = ka(e, t), { defaultedStartTime: a, defaultedRange: o } = st(e), { updateTimeValues: s, getSetDateTime: l, setTime: i, assignStartTime: c, disabledTimesConfig: u, validateTime: d } = rf(e, r, n), p = (g) => {
    const { hours: P, minutes: E, seconds: k } = g;
    return { hours: +P, minutes: +E, seconds: k ? +k : 0 };
  }, b = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const P = p(e.startTime[0]), E = p(e.startTime[1]);
        return [Ze(Z(), P), Ze(Z(), E)];
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
  }, y = (g) => Array.isArray(g) ? [fr(Z(g[0])), fr(Z(g[1]))] : [fr(g ?? Z())], D = (g, P, E) => {
    i("hours", g), i("minutes", P), i("seconds", e.enableSeconds ? E : 0);
  }, N = () => {
    const [g, P] = y(n.value);
    return o.value.enabled ? D(
      [g.hours, P.hours],
      [g.minutes, P.minutes],
      [g.seconds, P.seconds]
    ) : D(g.hours, g.minutes, g.seconds);
  };
  xt(() => {
    if (!e.shadow)
      return c(a.value), n.value ? N() : v();
  });
  const O = () => {
    Array.isArray(n.value) ? n.value = n.value.map((g, P) => g && l(g, P)) : n.value = l(n.value), t("time-update");
  };
  return {
    modelValue: n,
    time: r,
    disabledTimesConfig: u,
    updateTime: (g, P = !0, E = !1) => {
      s(g, P, E, O);
    },
    validateTime: d
  };
}, Gw = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...en
  },
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, o = vr(), s = Vt(o, "timePicker"), { time: l, modelValue: i, disabledTimesConfig: c, updateTime: u, validateTime: d } = zw(a, r);
    return t({ getSidebarProps: () => ({
      modelValue: i,
      time: l,
      updateTime: u
    }) }), (p, b) => (F(), Ce($o, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: Ve(() => [
        Qe(nf, _t(p.$props, {
          hours: M(l).hours,
          minutes: M(l).minutes,
          seconds: M(l).seconds,
          "internal-model-value": p.internalModelValue,
          "disabled-times-config": M(c),
          "validate-time": M(d),
          "onUpdate:hours": b[0] || (b[0] = (v) => M(u)(v)),
          "onUpdate:minutes": b[1] || (b[1] = (v) => M(u)(v, !1)),
          "onUpdate:seconds": b[2] || (b[2] = (v) => M(u)(v, !1, !0)),
          onAmPmChange: b[3] || (b[3] = (v) => p.$emit("am-pm-change", v))
        }), Ct({ _: 2 }, [
          qe(M(s), (v, y) => ({
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
}), Kw = { class: "dp__month_year_row" }, Qw = ["aria-label", "onClick", "onKeydown"], Xw = /* @__PURE__ */ Mt({
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
    } = st(a), { transitionName: p, showTransition: b } = xa(o), { buildMatrix: v } = zn(), { handleMonthYearChange: y, isDisabled: D, updateMonthYear: N } = iw(a, r), { showLeftIcon: O, showRightIcon: g } = Ro(), P = J(!1), E = J(!1), k = J([null, null, null, null]);
    xt(() => {
      r("mount");
    });
    const $ = (m) => ({
      get: () => a[m],
      set: (f) => {
        const R = m === Ut.month ? Ut.year : Ut.month;
        r("update-month-year", { [m]: f, [R]: a[R] }), m === Ut.month ? x(!0) : S(!0);
      }
    }), _ = re($(Ut.month)), T = re($(Ut.year)), W = re(() => (m) => ({
      month: a.month,
      year: a.year,
      items: m === Ut.month ? a.months : a.years,
      instance: a.instance,
      updateMonthYear: N,
      toggle: m === Ut.month ? x : S
    })), B = re(() => a.months.find((f) => f.value === a.month) || { text: "", value: 0 }), V = re(() => Vr(a.months, (m) => {
      const f = a.month === m.value, R = ya(
        m.value,
        jd(a.year, d.value.minDate),
        Ud(a.year, d.value.maxDate)
      ) || i.value.months.includes(m.value), Q = Kd(u.value, m.value, a.year);
      return { active: f, disabled: R, highlighted: Q };
    })), j = re(() => Vr(a.years, (m) => {
      const f = a.year === m.value, R = ya(
        m.value,
        Fr(d.value.minDate),
        Fr(d.value.maxDate)
      ) || i.value.years.includes(m.value), Q = Bl(u.value, m.value);
      return { active: f, disabled: R, highlighted: Q };
    })), U = (m, f) => {
      f !== void 0 ? m.value = f : m.value = !m.value, m.value || r("overlay-closed");
    }, x = (m = !1, f) => {
      G(m), U(P, f);
    }, S = (m = !1, f) => {
      G(m), U(E, f);
    }, G = (m) => {
      m || r("reset-flow");
    }, se = (m, f) => {
      a.arrowNavigation && (k.value[f] = gt(m), v(k.value, "monthYear"));
    }, pe = re(() => {
      var m, f;
      return [
        {
          type: Ut.month,
          index: 1,
          toggle: x,
          modelValue: _.value,
          updateModelValue: (R) => _.value = R,
          text: B.value.text,
          showSelectionGrid: P.value,
          items: V.value,
          ariaLabel: (m = s.value) == null ? void 0 : m.openMonthsOverlay
        },
        {
          type: Ut.year,
          index: 2,
          toggle: S,
          modelValue: T.value,
          updateModelValue: (R) => T.value = R,
          text: a.year,
          showSelectionGrid: E.value,
          items: j.value,
          ariaLabel: (f = s.value) == null ? void 0 : f.openYearsOverlay
        }
      ];
    }), ee = re(() => a.disableYearSelect ? [pe.value[0]] : a.yearFirst ? [...pe.value].reverse() : pe.value);
    return t({
      toggleMonthPicker: x,
      toggleYearPicker: S,
      handleMonthYearChange: y
    }), (m, f) => {
      var R, Q, ce;
      return F(), z("div", Kw, [
        m.$slots["month-year"] ? ge(m.$slots, "month-year", ht(_t({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: M(N), handleMonthYearChange: M(y), instance: e.instance }))) : (F(), z(xe, { key: 1 }, [
          M(O)(M(l), e.instance) && !m.vertical ? (F(), Ce(sa, {
            key: 0,
            "aria-label": (R = M(s)) == null ? void 0 : R.prevMonth,
            disabled: M(D)(!1),
            onActivate: f[0] || (f[0] = (L) => M(y)(!1, !0)),
            onSetRef: f[1] || (f[1] = (L) => se(L, 0))
          }, {
            default: Ve(() => [
              m.$slots["arrow-left"] ? ge(m.$slots, "arrow-left", { key: 0 }) : X("", !0),
              m.$slots["arrow-left"] ? X("", !0) : (F(), Ce(M(Ol), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : X("", !0),
          we("div", {
            class: $e(["dp__month_year_wrap", {
              dp__year_disable_select: m.disableYearSelect
            }])
          }, [
            (F(!0), z(xe, null, qe(ee.value, (L, Oe) => (F(), z(xe, {
              key: L.type
            }, [
              we("button", {
                ref_for: !0,
                ref: (Fe) => se(Fe, Oe + 1),
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": L.ariaLabel,
                onClick: L.toggle,
                onKeydown: [
                  Se(Ke(L.toggle, ["prevent"]), ["enter"]),
                  Se(Ke(L.toggle, ["prevent"]), ["space"])
                ]
              }, [
                m.$slots[L.type] ? ge(m.$slots, L.type, {
                  key: 0,
                  text: L.text,
                  value: a[L.type]
                }) : X("", !0),
                m.$slots[L.type] ? X("", !0) : (F(), z(xe, { key: 1 }, [
                  Jt(We(L.text), 1)
                ], 64))
              ], 40, Qw),
              Qe(qn, {
                name: M(p)(L.showSelectionGrid),
                css: M(b)
              }, {
                default: Ve(() => [
                  L.showSelectionGrid ? (F(), Ce(Ma, {
                    key: 0,
                    items: L.items,
                    "arrow-navigation": m.arrowNavigation,
                    "hide-navigation": m.hideNavigation,
                    "is-last": m.autoApply && !M(c).keepActionRow,
                    "skip-button-ref": !1,
                    config: m.config,
                    type: L.type,
                    "header-refs": [],
                    "esc-close": m.escClose,
                    "menu-wrap-ref": m.menuWrapRef,
                    "text-input": m.textInput,
                    "aria-labels": m.ariaLabels,
                    onSelected: L.updateModelValue,
                    onToggle: L.toggle
                  }, Ct({
                    "button-icon": Ve(() => [
                      m.$slots["calendar-icon"] ? ge(m.$slots, "calendar-icon", { key: 0 }) : X("", !0),
                      m.$slots["calendar-icon"] ? X("", !0) : (F(), Ce(M(Yr), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    m.$slots[`${L.type}-overlay-value`] ? {
                      name: "item",
                      fn: Ve(({ item: Fe }) => [
                        ge(m.$slots, `${L.type}-overlay-value`, {
                          text: Fe.text,
                          value: Fe.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    m.$slots[`${L.type}-overlay`] ? {
                      name: "overlay",
                      fn: Ve(() => [
                        ge(m.$slots, `${L.type}-overlay`, ht(Pt(W.value(L.type))))
                      ]),
                      key: "1"
                    } : void 0,
                    m.$slots[`${L.type}-overlay-header`] ? {
                      name: "header",
                      fn: Ve(() => [
                        ge(m.$slots, `${L.type}-overlay-header`, {
                          toggle: L.toggle
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
          M(O)(M(l), e.instance) && m.vertical ? (F(), Ce(sa, {
            key: 1,
            "aria-label": (Q = M(s)) == null ? void 0 : Q.prevMonth,
            disabled: M(D)(!1),
            onActivate: f[2] || (f[2] = (L) => M(y)(!1, !0))
          }, {
            default: Ve(() => [
              m.$slots["arrow-up"] ? ge(m.$slots, "arrow-up", { key: 0 }) : X("", !0),
              m.$slots["arrow-up"] ? X("", !0) : (F(), Ce(M(Nl), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : X("", !0),
          M(g)(M(l), e.instance) ? (F(), Ce(sa, {
            key: 2,
            ref: "rightIcon",
            disabled: M(D)(!0),
            "aria-label": (ce = M(s)) == null ? void 0 : ce.nextMonth,
            onActivate: f[3] || (f[3] = (L) => M(y)(!0, !0)),
            onSetRef: f[4] || (f[4] = (L) => se(L, m.disableYearSelect ? 2 : 3))
          }, {
            default: Ve(() => [
              m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? ge(m.$slots, m.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : X("", !0),
              m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? X("", !0) : (F(), Ce(bo(m.vertical ? M($l) : M(El)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : X("", !0)
        ], 64))
      ]);
    };
  }
}), Jw = ["aria-label"], Zw = {
  class: "dp__calendar_header",
  role: "row"
}, e_ = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, t_ = ["aria-label"], n_ = /* @__PURE__ */ we("div", { class: "dp__calendar_header_separator" }, null, -1), r_ = ["aria-label"], a_ = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, o_ = { class: "dp__cell_inner" }, s_ = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], l_ = /* @__PURE__ */ Mt({
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
    }), b = J([]), v = J(null), y = J(!0), D = J(""), N = J({ startX: 0, endX: 0, startY: 0, endY: 0 }), O = J([]), g = J({ left: "50%" }), P = re(() => a.calendar ? a.calendar(a.mappedDates) : a.mappedDates), E = re(() => a.dayNames ? Array.isArray(a.dayNames) ? a.dayNames : a.dayNames(a.locale, +a.weekStart) : Cb(a.formatLocale, a.locale, +a.weekStart));
    xt(() => {
      r("mount", { cmp: "calendar", refs: b }), l.value.noSwipe || v.value && (v.value.addEventListener("touchstart", S, { passive: !1 }), v.value.addEventListener("touchend", G, { passive: !1 }), v.value.addEventListener("touchmove", se, { passive: !1 })), a.monthChangeOnScroll && v.value && v.value.addEventListener("wheel", m, { passive: !1 });
    });
    const k = (L) => L ? a.vertical ? "vNext" : "next" : a.vertical ? "vPrevious" : "previous", $ = (L, Oe) => {
      if (a.transitions) {
        const Fe = It(yn(Z(), a.month, a.year));
        D.value = dt(It(yn(Z(), L, Oe)), Fe) ? s.value[k(!0)] : s.value[k(!1)], y.value = !1, Xt(() => {
          y.value = !0;
        });
      }
    }, _ = re(
      () => ({
        [a.calendarClassName]: !!a.calendarClassName
      })
    ), T = re(() => (L) => {
      const Oe = Eb(L);
      return {
        dp__marker_dot: Oe.type === "dot",
        dp__marker_line: Oe.type === "line"
      };
    }), W = re(() => (L) => Be(L, d.value)), B = re(() => ({
      dp__calendar: !0,
      dp__calendar_next: c.value.count > 0 && a.instance !== 0
    })), V = re(() => (L) => a.hideOffsetDates ? L.current : !0), j = (L) => dn(L, "yyyy-MM-dd"), U = async (L, Oe, Fe) => {
      var H, ve;
      if (r("set-hover-date", L), (ve = (H = L.marker) == null ? void 0 : H.tooltip) != null && ve.length) {
        const Ee = gt(b.value[Oe][Fe]);
        if (Ee) {
          const { width: A, height: h } = Ee.getBoundingClientRect();
          d.value = L.value;
          let w = { left: `${A / 2}px` }, I = -50;
          if (await Xt(), O.value[0]) {
            const { left: K, width: C } = O.value[0].getBoundingClientRect();
            K < 0 && (w = { left: "0" }, I = 0, g.value.left = `${A / 2}px`), window.innerWidth < K + C && (w = { right: "0" }, I = 0, g.value.left = `${C - A / 2}px`);
          }
          p.value = {
            bottom: `${h}px`,
            ...w,
            transform: `translateX(${I}%)`
          }, r("tooltip-open", L.marker);
        }
      }
    }, x = (L) => {
      d.value && (d.value = null, p.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), r("tooltip-close", L.marker));
    }, S = (L) => {
      N.value.startX = L.changedTouches[0].screenX, N.value.startY = L.changedTouches[0].screenY;
    }, G = (L) => {
      N.value.endX = L.changedTouches[0].screenX, N.value.endY = L.changedTouches[0].screenY, pe();
    }, se = (L) => {
      a.vertical && !a.inline && L.preventDefault();
    }, pe = () => {
      const L = a.vertical ? "Y" : "X";
      Math.abs(N.value[`start${L}`] - N.value[`end${L}`]) > 10 && r("handle-swipe", N.value[`start${L}`] > N.value[`end${L}`] ? "right" : "left");
    }, ee = (L, Oe, Fe) => {
      L && (Array.isArray(b.value[Oe]) ? b.value[Oe][Fe] = L : b.value[Oe] = [L]), a.arrowNavigation && o(b.value, "calendar");
    }, m = (L) => {
      a.monthChangeOnScroll && (L.preventDefault(), r("handle-scroll", L));
    }, f = (L) => u.value.type === "local" ? Pl(L.value, { weekStartsOn: +a.weekStart }) : u.value.type === "iso" ? Ml(L.value) : typeof u.value.type == "function" ? u.value.type(L.value) : "", R = (L) => {
      const Oe = L[0];
      return u.value.hideOnOffsetDates ? L.some((Fe) => Fe.current) ? f(Oe) : "" : f(Oe);
    }, Q = (L, Oe) => {
      Fn(L, l.value), r("select-date", Oe);
    }, ce = (L) => {
      Fn(L, l.value);
    };
    return t({ triggerTransition: $ }), (L, Oe) => {
      var Fe;
      return F(), z("div", {
        class: $e(B.value)
      }, [
        we("div", {
          ref_key: "calendarWrapRef",
          ref: v,
          role: "grid",
          class: $e(_.value),
          "aria-label": (Fe = M(i)) == null ? void 0 : Fe.calendarWrap
        }, [
          we("div", Zw, [
            L.weekNumbers ? (F(), z("div", e_, We(L.weekNumName), 1)) : X("", !0),
            (F(!0), z(xe, null, qe(E.value, (H, ve) => {
              var Ee, A;
              return F(), z("div", {
                key: ve,
                class: "dp__calendar_header_item",
                role: "gridcell",
                "aria-label": (A = (Ee = M(i)) == null ? void 0 : Ee.weekDay) == null ? void 0 : A.call(Ee, ve)
              }, [
                L.$slots["calendar-header"] ? ge(L.$slots, "calendar-header", {
                  key: 0,
                  day: H,
                  index: ve
                }) : X("", !0),
                L.$slots["calendar-header"] ? X("", !0) : (F(), z(xe, { key: 1 }, [
                  Jt(We(H), 1)
                ], 64))
              ], 8, t_);
            }), 128))
          ]),
          n_,
          Qe(qn, {
            name: D.value,
            css: !!L.transitions
          }, {
            default: Ve(() => {
              var H;
              return [
                y.value ? (F(), z("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((H = M(i)) == null ? void 0 : H.calendarDays) || void 0
                }, [
                  (F(!0), z(xe, null, qe(P.value, (ve, Ee) => (F(), z("div", {
                    key: Ee,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    L.weekNumbers ? (F(), z("div", a_, [
                      we("div", o_, We(R(ve.days)), 1)
                    ])) : X("", !0),
                    (F(!0), z(xe, null, qe(ve.days, (A, h) => {
                      var w, I, K;
                      return F(), z("div", {
                        id: j(A.value),
                        ref_for: !0,
                        ref: (C) => ee(C, Ee, h),
                        key: h + Ee,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (A.classData.dp__active_date || A.classData.dp__range_start || A.classData.dp__range_start) ?? void 0,
                        "aria-disabled": A.classData.dp__cell_disabled || void 0,
                        "aria-label": (I = (w = M(i)) == null ? void 0 : w.day) == null ? void 0 : I.call(w, A),
                        tabindex: "0",
                        onClick: Ke((C) => Q(C, A), ["prevent"]),
                        onKeydown: [
                          Se((C) => L.$emit("select-date", A), ["enter"]),
                          Se((C) => L.$emit("handle-space", A), ["space"])
                        ],
                        onMouseenter: (C) => U(A, Ee, h),
                        onMouseleave: (C) => x(A)
                      }, [
                        we("div", {
                          class: $e(["dp__cell_inner", A.classData])
                        }, [
                          L.$slots.day && V.value(A) ? ge(L.$slots, "day", {
                            key: 0,
                            day: +A.text,
                            date: A.value
                          }) : X("", !0),
                          L.$slots.day ? X("", !0) : (F(), z(xe, { key: 1 }, [
                            Jt(We(A.text), 1)
                          ], 64)),
                          A.marker && V.value(A) ? (F(), z(xe, { key: 2 }, [
                            L.$slots.marker ? ge(L.$slots, "marker", {
                              key: 0,
                              marker: A.marker,
                              day: +A.text,
                              date: A.value
                            }) : (F(), z("div", {
                              key: 1,
                              class: $e(T.value(A.marker)),
                              style: Dt(A.marker.color ? { backgroundColor: A.marker.color } : {})
                            }, null, 6))
                          ], 64)) : X("", !0),
                          W.value(A.value) ? (F(), z("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: O,
                            class: "dp__marker_tooltip",
                            style: Dt(p.value)
                          }, [
                            (K = A.marker) != null && K.tooltip ? (F(), z("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: ce
                            }, [
                              (F(!0), z(xe, null, qe(A.marker.tooltip, (C, ae) => (F(), z("div", {
                                key: ae,
                                class: "dp__tooltip_text"
                              }, [
                                L.$slots["marker-tooltip"] ? ge(L.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: C,
                                  day: A.value
                                }) : X("", !0),
                                L.$slots["marker-tooltip"] ? X("", !0) : (F(), z(xe, { key: 1 }, [
                                  we("div", {
                                    class: "dp__tooltip_mark",
                                    style: Dt(C.color ? { backgroundColor: C.color } : {})
                                  }, null, 4),
                                  we("div", null, We(C.text), 1)
                                ], 64))
                              ]))), 128)),
                              we("div", {
                                class: "dp__arrow_bottom_tp",
                                style: Dt(g.value)
                              }, null, 4)
                            ])) : X("", !0)
                          ], 4)) : X("", !0)
                        ], 2)
                      ], 40, s_);
                    }), 128))
                  ]))), 128))
                ], 8, r_)) : X("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, Jw)
      ], 2);
    };
  }
}), _u = (e) => Array.isArray(e), i_ = (e, t, n, r) => {
  const a = J([]), o = J(/* @__PURE__ */ new Date()), { modelValue: s, calendars: l, time: i } = ka(e, t), { defaultedMultiCalendars: c, defaultedStartTime: u, defaultedRange: d, defaultedTz: p, propDates: b } = st(e), { validateMonthYearInRange: v, isDisabled: y, isDateRangeAllowed: D, checkMinMaxRange: N } = Gn(e), { updateTimeValues: O, getSetDateTime: g, setTime: P, assignStartTime: E, validateTime: k, disabledTimesConfig: $ } = rf(e, i, s, r), _ = re(
    () => (Y) => l.value[Y] ? l.value[Y].month : 0
  ), T = re(
    () => (Y) => l.value[Y] ? l.value[Y].year : 0
  ), W = (Y, oe, _e) => {
    var Pe, te;
    l.value[Y] || (l.value[Y] = { month: 0, year: 0 }), l.value[Y].month = vu(oe) ? (Pe = l.value[Y]) == null ? void 0 : Pe.month : oe, l.value[Y].year = vu(_e) ? (te = l.value[Y]) == null ? void 0 : te.year : _e;
  }, B = () => {
    e.autoApply && t("select-date");
  };
  ft(
    s,
    (Y, oe) => {
      JSON.stringify(Y) !== JSON.stringify(oe) && U();
    },
    { deep: !0 }
  ), xt(() => {
    e.shadow || (s.value || (ce(), u.value && E(u.value)), U(!0), e.focusStartDate && e.startDate && ce());
  });
  const V = re(() => {
    var Y;
    return (Y = e.flow) != null && Y.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), j = () => {
    e.autoApply && V.value && t("auto-apply");
  }, U = (Y = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? (a.value = s.value, m(Y)) : G(s.value, Y);
    if (c.value.count && Y && !e.startDate)
      return S(Z(), Y);
  }, x = () => Array.isArray(s.value) && d.value.enabled ? Ie(s.value[0]) === Ie(s.value[1] ?? s.value[0]) : !1, S = (Y, oe = !1) => {
    if ((!c.value.count || !c.value.static || oe) && W(0, Ie(Y), Ne(Y)), c.value.count && (!c.value.solo || !s.value || x()))
      for (let _e = 1; _e < c.value.count; _e++) {
        const Pe = Ze(Z(), { month: _.value(_e - 1), year: T.value(_e - 1) }), te = wd(Pe, { months: 1 });
        l.value[_e] = { month: Ie(te), year: Ne(te) };
      }
  }, G = (Y, oe) => {
    S(Y), P("hours", Kt(Y)), P("minutes", fn(Y)), P("seconds", Nr(Y)), c.value.count && oe && Q();
  }, se = (Y) => {
    if (c.value.count) {
      if (c.value.solo)
        return 0;
      const oe = Ie(Y[0]), _e = Ie(Y[1]);
      return Math.abs(_e - oe) < c.value.count ? 0 : 1;
    }
    return 1;
  }, pe = (Y, oe) => {
    Y[1] && d.value.showLastInRange ? S(Y[se(Y)], oe) : S(Y[0], oe);
    const _e = (Pe, te) => [
      Pe(Y[0]),
      Y[1] ? Pe(Y[1]) : i[te][1]
    ];
    P("hours", _e(Kt, "hours")), P("minutes", _e(fn, "minutes")), P("seconds", _e(Nr, "seconds"));
  }, ee = (Y, oe) => {
    if ((d.value.enabled || e.weekPicker) && !e.multiDates)
      return pe(Y, oe);
    if (e.multiDates && oe) {
      const _e = Y[Y.length - 1];
      return G(_e, oe);
    }
  }, m = (Y) => {
    const oe = s.value;
    ee(oe, Y), c.value.count && c.value.solo && Q();
  }, f = (Y, oe) => {
    const _e = Ze(Z(), { month: _.value(oe), year: T.value(oe) }), Pe = Y < 0 ? Gt(_e, 1) : $r(_e, 1);
    v(Ie(Pe), Ne(Pe), Y < 0, e.preventMinMaxNavigation) && (W(oe, Ie(Pe), Ne(Pe)), t("update-month-year", { instance: oe, month: Ie(Pe), year: Ne(Pe) }), c.value.count && !c.value.solo && R(oe), n());
  }, R = (Y) => {
    for (let oe = Y - 1; oe >= 0; oe--) {
      const _e = $r(Ze(Z(), { month: _.value(oe + 1), year: T.value(oe + 1) }), 1);
      W(oe, Ie(_e), Ne(_e));
    }
    for (let oe = Y + 1; oe <= c.value.count - 1; oe++) {
      const _e = Gt(Ze(Z(), { month: _.value(oe - 1), year: T.value(oe - 1) }), 1);
      W(oe, Ie(_e), Ne(_e));
    }
  }, Q = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const Y = Z(
        Z(s.value[1] ? s.value[1] : Gt(s.value[0], 1))
      ), [oe, _e] = [Ie(s.value[0]), Ne(s.value[0])], [Pe, te] = [Ie(s.value[1]), Ne(s.value[1])];
      (oe !== Pe || oe === Pe && _e !== te) && c.value.solo && W(1, Ie(Y), Ne(Y));
    } else
      s.value && !Array.isArray(s.value) && (W(0, Ie(s.value), Ne(s.value)), S(Z()));
  }, ce = () => {
    e.startDate && (W(0, Ie(Z(e.startDate)), Ne(Z(e.startDate))), c.value.count && R(0));
  }, L = (Y, oe) => {
    if (e.monthChangeOnScroll) {
      const _e = (/* @__PURE__ */ new Date()).getTime() - o.value.getTime(), Pe = Math.abs(Y.deltaY);
      let te = 500;
      Pe > 1 && (te = 100), Pe > 100 && (te = 0), _e > te && (o.value = /* @__PURE__ */ new Date(), f(e.monthChangeOnScroll !== "inverse" ? -Y.deltaY : Y.deltaY, oe));
    }
  }, Oe = (Y, oe, _e = !1) => {
    e.monthChangeOnArrows && e.vertical === _e && Fe(Y, oe);
  }, Fe = (Y, oe) => {
    f(Y === "right" ? -1 : 1, oe);
  }, H = (Y) => {
    if (b.value.markers)
      return lo(Y.value, b.value.markers);
  }, ve = (Y, oe) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [Y == 0, !0];
      case "fair":
        return [Y == 0 || oe > Y, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, Ee = (Y, oe, _e, Pe) => {
    if (e.sixWeeks && Y.length < 6) {
      const te = 6 - Y.length, he = (oe.getDay() + 7 - Pe) % 7, ye = 6 - (_e.getDay() + 7 - Pe) % 7, [Bt, tn] = ve(he, ye);
      for (let Kn = 1; Kn <= te; Kn++)
        if (tn ? !!(Kn % 2) == Bt : Bt) {
          const _n = Y[0].days[0], Io = A(Wt(_n.value, -7), Ie(oe));
          Y.unshift({ days: Io });
        } else {
          const _n = Y[Y.length - 1], Io = _n.days[_n.days.length - 1], af = A(Wt(Io.value, 1), Ie(oe));
          Y.push({ days: af });
        }
    }
    return Y;
  }, A = (Y, oe) => {
    const _e = Z(Y), Pe = [];
    for (let te = 0; te < 7; te++) {
      const he = Wt(_e, te), ye = Ie(he) !== oe;
      Pe.push({
        text: e.hideOffsetDates && ye ? "" : he.getDate(),
        value: he,
        current: !ye,
        classData: {}
      });
    }
    return Pe;
  }, h = (Y, oe) => {
    const _e = [], Pe = new Date(oe, Y), te = new Date(oe, Y + 1, 0), he = e.weekStart, ye = mn(Pe, { weekStartsOn: he }), Bt = (tn) => {
      const Kn = A(tn, Y);
      if (_e.push({ days: Kn }), !_e[_e.length - 1].days.some(
        (_n) => Be(It(_n.value), It(te))
      )) {
        const _n = Wt(tn, 7);
        Bt(_n);
      }
    };
    return Bt(ye), Ee(_e, Pe, te, he);
  }, w = (Y) => {
    const oe = In(Z(Y.value), i.hours, i.minutes, ue());
    t("date-update", oe), e.multiDates ? Ll(oe, s, e.multiDatesLimit) : s.value = oe, r(), Xt().then(() => {
      j();
    });
  }, I = (Y) => d.value.noDisabledRange ? Wd(a.value[0], Y).some((oe) => y(oe)) : !1, K = () => {
    a.value = s.value ? s.value.slice() : [], a.value.length === 2 && !(d.value.fixedStart || d.value.fixedEnd) && (a.value = []);
  }, C = (Y, oe) => {
    const _e = [
      Z(Y.value),
      Wt(Z(Y.value), +d.value.autoRange)
    ];
    D(_e) ? (oe && ae(Y.value), a.value = _e) : t("invalid-date", Y.value);
  }, ae = (Y) => {
    const oe = Ie(Z(Y)), _e = Ne(Z(Y));
    if (W(0, oe, _e), c.value.count > 0)
      for (let Pe = 1; Pe < c.value.count; Pe++) {
        const te = Lb(
          Ze(Z(Y), { year: _.value(Pe - 1), month: T.value(Pe - 1) })
        );
        W(Pe, te.month, te.year);
      }
  }, ie = (Y) => {
    if (I(Y.value) || !N(Y.value, s.value, d.value.fixedStart ? 0 : 1))
      return t("invalid-date", Y.value);
    a.value = ef(Z(Y.value), s, t, d);
  }, le = (Y, oe) => {
    if (K(), d.value.autoRange)
      return C(Y, oe);
    if (d.value.fixedStart || d.value.fixedEnd)
      return ie(Y);
    a.value[0] ? N(Z(Y.value), s.value) && !I(Y.value) ? it(Z(Y.value), Z(a.value[0])) ? (a.value.unshift(Z(Y.value)), t("range-end", a.value[0])) : (a.value[1] = Z(Y.value), t("range-end", a.value[1])) : (e.autoApply && t("auto-apply-invalid", Y.value), t("invalid-date", Y.value)) : (a.value[0] = Z(Y.value), t("range-start", a.value[0]));
  }, ue = (Y = !0) => e.enableSeconds ? Array.isArray(i.seconds) ? Y ? i.seconds[0] : i.seconds[1] : i.seconds : 0, ne = (Y) => {
    a.value[Y] = In(
      a.value[Y],
      i.hours[Y],
      i.minutes[Y],
      ue(Y !== 1)
    );
  }, de = () => {
    var Y, oe;
    a.value[0] && a.value[1] && +((Y = a.value) == null ? void 0 : Y[0]) > +((oe = a.value) == null ? void 0 : oe[1]) && (a.value.reverse(), t("range-start", a.value[0]), t("range-end", a.value[1]));
  }, me = () => {
    a.value.length && (a.value[0] && !a.value[1] ? ne(0) : (ne(0), ne(1), r()), de(), s.value = a.value.slice(), Vo(a.value, t, e.autoApply, e.modelAuto));
  }, be = (Y, oe = !1) => {
    if (y(Y.value) || !Y.current && e.hideOffsetDates)
      return t("invalid-date", Y.value);
    if (!d.value.enabled)
      return w(Y);
    _u(i.hours) && _u(i.minutes) && !e.multiDates && (le(Y, oe), me());
  }, Te = (Y, oe) => {
    var _e;
    W(Y, oe.month, oe.year), c.value.count && !c.value.solo && R(Y), t("update-month-year", { instance: Y, month: oe.month, year: oe.year }), n(c.value.solo ? Y : void 0);
    const Pe = (_e = e.flow) != null && _e.length ? e.flow[e.flowStep] : void 0;
    !oe.fromNav && (Pe === rn.month || Pe === rn.year) && r();
  }, Re = (Y, oe) => {
    Zd({
      value: Y,
      modelValue: s,
      range: d.value.enabled,
      timezone: oe ? void 0 : p.value.timezone
    }), B(), e.multiCalendars && Xt().then(() => U(!0));
  }, He = () => {
    d.value.enabled ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = it(Z(), s.value[0]) ? [Z(), s.value[0]] : [s.value[0], Z()] : s.value = [Z()] : s.value = Z(), B();
  }, Ge = () => {
    if (Array.isArray(s.value))
      if (e.multiDates) {
        const Y = lt();
        s.value[s.value.length - 1] = g(Y);
      } else
        s.value = s.value.map((Y, oe) => Y && g(Y, oe));
    else
      s.value = g(s.value);
    t("time-update");
  }, lt = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null;
  return {
    calendars: l,
    modelValue: s,
    month: _,
    year: T,
    time: i,
    disabledTimesConfig: $,
    validateTime: k,
    getCalendarDays: h,
    getMarker: H,
    handleScroll: L,
    handleSwipe: Fe,
    handleArrow: Oe,
    selectDate: be,
    updateMonthYear: Te,
    presetDate: Re,
    selectCurrentDate: He,
    updateTime: (Y, oe = !0, _e = !1) => {
      O(Y, oe, _e, Ge);
    }
  };
}, u_ = { key: 0 }, c_ = /* @__PURE__ */ Mt({
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
      selectDate: N,
      updateMonthYear: O,
      presetDate: g,
      selectCurrentDate: P,
      updateTime: E
    } = i_(a, r, pe, ee), k = vr(), { setHoverDate: $, getDayClassData: _, clearHoverDate: T } = fw(i, a), { defaultedMultiCalendars: W } = st(a), B = J([]), V = J([]), j = J(null), U = Vt(k, "calendar"), x = Vt(k, "monthYear"), S = Vt(k, "timePicker"), G = (f) => {
      a.shadow || r("mount", f);
    };
    ft(
      o,
      () => {
        a.shadow || setTimeout(() => {
          r("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const se = re(() => (f) => p(s.value(f), l.value(f)).map((R) => ({
      ...R,
      days: R.days.map((Q) => (Q.marker = b(Q), Q.classData = _(Q), Q))
    })));
    function pe(f) {
      var R;
      f || f === 0 ? (R = V.value[f]) == null || R.triggerTransition(s.value(f), l.value(f)) : V.value.forEach((Q, ce) => Q.triggerTransition(s.value(ce), l.value(ce)));
    }
    function ee() {
      r("update-flow-step");
    }
    const m = (f, R = !1) => {
      N(f, R), a.spaceConfirm && r("select-date");
    };
    return t({
      clearHoverDate: T,
      presetDate: g,
      selectCurrentDate: P,
      toggleMonthPicker: (f, R, Q = 0) => {
        var ce;
        (ce = B.value[Q]) == null || ce.toggleMonthPicker(f, R);
      },
      toggleYearPicker: (f, R, Q = 0) => {
        var ce;
        (ce = B.value[Q]) == null || ce.toggleYearPicker(f, R);
      },
      toggleTimePicker: (f, R, Q) => {
        var ce;
        (ce = j.value) == null || ce.toggleTimePicker(f, R, Q);
      },
      handleArrow: v,
      updateMonthYear: O,
      getSidebarProps: () => ({
        modelValue: i,
        month: s,
        year: l,
        time: c,
        updateTime: E,
        updateMonthYear: O,
        selectDate: N,
        presetDate: g
      })
    }), (f, R) => (F(), z(xe, null, [
      Qe($o, {
        "multi-calendars": M(W).count,
        collapse: f.collapse
      }, {
        default: Ve(({ instance: Q, index: ce }) => [
          f.disableMonthYearSelect ? X("", !0) : (F(), Ce(Xw, _t({
            key: 0,
            ref: (L) => {
              L && (B.value[ce] = L);
            },
            months: M(Ld)(f.formatLocale, f.locale, f.monthNameFormat),
            years: M(Vl)(f.yearRange, f.reverseYears),
            month: M(s)(Q),
            year: M(l)(Q),
            instance: Q
          }, f.$props, {
            onMount: R[0] || (R[0] = (L) => G(M(pr).header)),
            onResetFlow: R[1] || (R[1] = (L) => f.$emit("reset-flow")),
            onUpdateMonthYear: (L) => M(O)(Q, L),
            onOverlayClosed: R[2] || (R[2] = (L) => f.$emit("focus-menu"))
          }), Ct({ _: 2 }, [
            qe(M(x), (L, Oe) => ({
              name: L,
              fn: Ve((Fe) => [
                ge(f.$slots, L, ht(Pt(Fe)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          Qe(l_, _t({
            ref: (L) => {
              L && (V.value[ce] = L);
            },
            "mapped-dates": se.value(Q),
            month: M(s)(Q),
            year: M(l)(Q),
            instance: Q
          }, f.$props, {
            onSelectDate: (L) => M(N)(L, Q !== 1),
            onHandleSpace: (L) => m(L, Q !== 1),
            onSetHoverDate: R[3] || (R[3] = (L) => M($)(L)),
            onHandleScroll: (L) => M(y)(L, Q),
            onHandleSwipe: (L) => M(D)(L, Q),
            onMount: R[4] || (R[4] = (L) => G(M(pr).calendar)),
            onResetFlow: R[5] || (R[5] = (L) => f.$emit("reset-flow")),
            onTooltipOpen: R[6] || (R[6] = (L) => f.$emit("tooltip-open", L)),
            onTooltipClose: R[7] || (R[7] = (L) => f.$emit("tooltip-close", L))
          }), Ct({ _: 2 }, [
            qe(M(U), (L, Oe) => ({
              name: L,
              fn: Ve((Fe) => [
                ge(f.$slots, L, ht(Pt({ ...Fe })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      f.enableTimePicker ? (F(), z("div", u_, [
        f.$slots["time-picker"] ? ge(f.$slots, "time-picker", ht(_t({ key: 0 }, { time: M(c), updateTime: M(E) }))) : (F(), Ce(nf, _t({
          key: 1,
          ref_key: "timePickerRef",
          ref: j
        }, f.$props, {
          hours: M(c).hours,
          minutes: M(c).minutes,
          seconds: M(c).seconds,
          "internal-model-value": f.internalModelValue,
          "disabled-times-config": M(u),
          "validate-time": M(d),
          onMount: R[8] || (R[8] = (Q) => G(M(pr).timePicker)),
          "onUpdate:hours": R[9] || (R[9] = (Q) => M(E)(Q)),
          "onUpdate:minutes": R[10] || (R[10] = (Q) => M(E)(Q, !1)),
          "onUpdate:seconds": R[11] || (R[11] = (Q) => M(E)(Q, !1, !0)),
          onResetFlow: R[12] || (R[12] = (Q) => f.$emit("reset-flow")),
          onOverlayClosed: R[13] || (R[13] = (Q) => f.$emit("time-picker-close")),
          onOverlayOpened: R[14] || (R[14] = (Q) => f.$emit("time-picker-open", Q)),
          onAmPmChange: R[15] || (R[15] = (Q) => f.$emit("am-pm-change", Q))
        }), Ct({ _: 2 }, [
          qe(M(S), (Q, ce) => ({
            name: Q,
            fn: Ve((L) => [
              ge(f.$slots, Q, ht(Pt(L)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : X("", !0)
    ], 64));
  }
}), d_ = (e, t) => {
  const n = J(), { defaultedMultiCalendars: r, defaultedConfig: a, defaultedHighlight: o, defaultedRange: s, propDates: l } = st(e), { modelValue: i, year: c, month: u, calendars: d } = ka(e, t), { isDisabled: p } = Gn(e), { selectYear: b, groupedYears: v, showYearPicker: y, isDisabled: D, toggleYearPicker: N, handleYearSelect: O, handleYear: g } = tf({
    modelValue: i,
    multiCalendars: r,
    highlight: o,
    calendars: d,
    propDates: l,
    month: u,
    year: c,
    props: e,
    emit: t
  }), P = (j, U) => [j, U].map((x) => dn(x, "MMMM", { locale: e.formatLocale })).join("-"), E = re(() => (j) => i.value ? Array.isArray(i.value) ? i.value.some((U) => pu(j, U)) : pu(i.value, j) : !1), k = (j) => {
    if (s.value.enabled) {
      if (Array.isArray(i.value)) {
        const U = Be(j, i.value[0]) || Be(j, i.value[1]);
        return Eo(i.value, n.value, j) && !U;
      }
      return !1;
    }
    return !1;
  }, $ = (j, U) => j.quarter === lu(U) && j.year === Ne(U), _ = (j) => typeof o.value == "function" ? o.value({ quarter: lu(j), year: Ne(j) }) : !!o.value.quarters.find((U) => $(U, j)), T = re(() => (j) => {
    const U = Ze(/* @__PURE__ */ new Date(), { year: c.value(j) });
    return $g({
      start: Pd(U),
      end: Vg(U)
    }).map((x) => {
      const S = lr(x), G = iu(x), se = p(x), pe = k(S), ee = _(S);
      return {
        text: P(S, G),
        value: S,
        active: E.value(S),
        highlighted: ee,
        disabled: se,
        isBetween: pe
      };
    });
  }), W = (j) => {
    Ll(j, i, e.multiDatesLimit), t("auto-apply", !0);
  }, B = (j) => {
    i.value = Yl(i, j, t), Vo(i.value, t, e.autoApply, e.modelAuto);
  }, V = (j) => {
    i.value = j, t("auto-apply");
  };
  return {
    defaultedConfig: a,
    defaultedMultiCalendars: r,
    groupedYears: v,
    year: c,
    isDisabled: D,
    quarters: T,
    showYearPicker: y,
    modelValue: i,
    setHoverDate: (j) => {
      n.value = j;
    },
    selectYear: b,
    selectQuarter: (j, U, x) => {
      if (!x)
        return d.value[U].month = Ie(iu(j)), e.multiDates ? W(j) : s.value.enabled ? B(j) : V(j);
    },
    toggleYearPicker: N,
    handleYearSelect: O,
    handleYear: g
  };
}, f_ = { class: "dp--quarter-items" }, p_ = ["disabled", "onClick", "onMouseover"], m_ = /* @__PURE__ */ Mt({
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
      toggleYearPicker: N,
      handleYearSelect: O,
      handleYear: g
    } = d_(a, r);
    return t({ getSidebarProps: () => ({
      modelValue: b,
      year: u,
      selectQuarter: D,
      handleYearSelect: O,
      handleYear: g
    }) }), (P, E) => (F(), Ce($o, {
      "multi-calendars": M(l).count,
      collapse: P.collapse,
      stretch: ""
    }, {
      default: Ve(({ instance: k }) => [
        we("div", {
          class: "dp-quarter-picker-wrap",
          style: Dt({ minHeight: `${M(i).modeHeight}px` })
        }, [
          we("div", null, [
            Qe(Jd, _t(P.$props, {
              items: M(c)(k),
              instance: k,
              "show-year-picker": M(v)[k],
              year: M(u)(k),
              "is-disabled": ($) => M(d)(k, $),
              onHandleYear: ($) => M(g)(k, $),
              onYearSelect: ($) => M(O)($, k),
              onToggleYearPicker: ($) => M(N)(k, $ == null ? void 0 : $.flow, $ == null ? void 0 : $.show)
            }), Ct({ _: 2 }, [
              qe(M(s), ($, _) => ({
                name: $,
                fn: Ve((T) => [
                  ge(P.$slots, $, ht(Pt(T)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          we("div", f_, [
            (F(!0), z(xe, null, qe(M(p)(k), ($, _) => (F(), z("div", { key: _ }, [
              we("button", {
                type: "button",
                class: $e(["dp--qr-btn", {
                  "dp--qr-btn-active": $.active,
                  "dp--qr-btn-between": $.isBetween,
                  "dp--qr-btn-disabled": $.disabled,
                  "dp--highlighted": $.highlighted
                }]),
                disabled: $.disabled,
                onClick: (T) => M(D)($.value, k, $.disabled),
                onMouseover: (T) => M(y)($.value)
              }, [
                P.$slots.quarter ? ge(P.$slots, "quarter", {
                  key: 0,
                  value: $.value,
                  text: $.text
                }) : (F(), z(xe, { key: 1 }, [
                  Jt(We($.text), 1)
                ], 64))
              ], 42, p_)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), h_ = ["id", "aria-label"], v_ = {
  key: 0,
  class: "dp--menu-load-container"
}, y_ = /* @__PURE__ */ we("span", { class: "dp--menu-loader" }, null, -1), g_ = [
  y_
], b_ = {
  key: 0,
  class: "dp__sidebar_left"
}, w_ = ["onClick", "onKeydown"], __ = {
  key: 2,
  class: "dp__sidebar_right"
}, x_ = {
  key: 3,
  class: "dp__action_extra"
}, xu = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...No,
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
    const r = n, a = e, o = J(null), s = re(() => {
      const { openOnTop: A, ...h } = a;
      return {
        ...h,
        flowStep: _.value,
        collapse: a.collapse,
        noOverlayFocus: a.noOverlayFocus,
        menuWrapRef: o.value
      };
    }), { setMenuFocused: l, setShiftKey: i, control: c } = Qd(), u = vr(), { defaultedTextInput: d, defaultedInline: p, defaultedConfig: b } = st(a), v = J(null), y = J(0), D = J(null), N = J(!1), O = J(null);
    xt(() => {
      if (!a.shadow) {
        N.value = !0, g(), window.addEventListener("resize", g);
        const A = gt(o);
        if (A && !d.value.enabled && !p.value.enabled && (l(!0), j()), A) {
          const h = (w) => {
            b.value.allowPreventDefault && w.preventDefault(), Fn(w, b.value, !0);
          };
          A.addEventListener("pointerdown", h), A.addEventListener("mousedown", h);
        }
      }
    }), Ir(() => {
      window.removeEventListener("resize", g);
    });
    const g = () => {
      const A = gt(D);
      A && (y.value = A.getBoundingClientRect().width);
    }, { arrowRight: P, arrowLeft: E, arrowDown: k, arrowUp: $ } = zn(), { flowStep: _, updateFlowStep: T, childMount: W, resetFlow: B } = pw(a, r, O), V = re(() => a.monthPicker ? Dw : a.yearPicker ? Ow : a.timePicker ? Gw : a.quarterPicker ? m_ : c_), j = () => {
      const A = gt(o);
      A && A.focus({ preventScroll: !0 });
    }, U = re(() => {
      var A;
      return ((A = O.value) == null ? void 0 : A.getSidebarProps()) || {};
    }), x = () => {
      a.openOnTop && r("recalculate-position");
    }, S = Vt(u, "action"), G = re(() => a.monthPicker || a.yearPicker ? Vt(u, "monthYear") : a.timePicker ? Vt(u, "timePicker") : Vt(u, "shared")), se = re(() => a.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), pe = re(() => ({
      dp__menu_disabled: a.disabled,
      dp__menu_readonly: a.readonly,
      "dp-menu-loading": a.loading
    })), ee = re(
      () => ({
        dp__menu: !0,
        dp__menu_index: !p.value.enabled,
        dp__relative: p.value.enabled,
        [a.menuClassName]: !!a.menuClassName
      })
    ), m = (A) => {
      Fn(A, b.value, !0);
    }, f = () => {
      a.escClose && r("close-picker");
    }, R = (A) => {
      if (a.arrowNavigation) {
        if (A === "up")
          return $();
        if (A === "down")
          return k();
        if (A === "left")
          return E();
        if (A === "right")
          return P();
      } else
        A === "left" || A === "up" ? Fe("handleArrow", "left", 0, A === "up") : Fe("handleArrow", "right", 0, A === "down");
    }, Q = (A) => {
      i(A.shiftKey), !a.disableMonthYearSelect && A.code === "Tab" && A.target.classList.contains("dp__menu") && c.value.shiftKeyInMenu && (A.preventDefault(), Fn(A, b.value, !0), r("close-picker"));
    }, ce = () => {
      j(), r("time-picker-close");
    }, L = (A) => {
      var h, w, I;
      (h = O.value) == null || h.toggleTimePicker(!1, !1), (w = O.value) == null || w.toggleMonthPicker(!1, !1, A), (I = O.value) == null || I.toggleYearPicker(!1, !1, A);
    }, Oe = (A, h = 0) => {
      var w, I, K;
      return A === "month" ? (w = O.value) == null ? void 0 : w.toggleMonthPicker(!1, !0, h) : A === "year" ? (I = O.value) == null ? void 0 : I.toggleYearPicker(!1, !0, h) : A === "time" ? (K = O.value) == null ? void 0 : K.toggleTimePicker(!0, !1) : L(h);
    }, Fe = (A, ...h) => {
      var w, I;
      (w = O.value) != null && w[A] && ((I = O.value) == null || I[A](...h));
    }, H = () => {
      Fe("selectCurrentDate");
    }, ve = (A, h) => {
      Fe("presetDate", A, h);
    }, Ee = () => {
      Fe("clearHoverDate");
    };
    return t({
      updateMonthYear: (A, h) => {
        Fe("updateMonthYear", A, h);
      },
      switchView: Oe
    }), (A, h) => {
      var w, I, K;
      return F(), z("div", {
        id: A.uid ? `dp-menu-${A.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: o,
        tabindex: "0",
        role: "dialog",
        "aria-label": (w = A.ariaLabels) == null ? void 0 : w.menu,
        class: $e(ee.value),
        onMouseleave: Ee,
        onClick: m,
        onKeydown: [
          Se(f, ["esc"]),
          h[18] || (h[18] = Se(Ke((C) => R("left"), ["prevent"]), ["left"])),
          h[19] || (h[19] = Se(Ke((C) => R("up"), ["prevent"]), ["up"])),
          h[20] || (h[20] = Se(Ke((C) => R("down"), ["prevent"]), ["down"])),
          h[21] || (h[21] = Se(Ke((C) => R("right"), ["prevent"]), ["right"])),
          Q
        ]
      }, [
        (A.disabled || A.readonly) && M(p).enabled || A.loading ? (F(), z("div", {
          key: 0,
          class: $e(pe.value)
        }, [
          A.loading ? (F(), z("div", v_, g_)) : X("", !0)
        ], 2)) : X("", !0),
        !M(p).enabled && !A.teleportCenter ? (F(), z("div", {
          key: 1,
          class: $e(se.value)
        }, null, 2)) : X("", !0),
        we("div", {
          ref_key: "innerMenuRef",
          ref: D,
          class: $e({
            dp__menu_content_wrapper: ((I = A.presetDates) == null ? void 0 : I.length) || !!A.$slots["left-sidebar"] || !!A.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && ((K = A.presetDates) == null ? void 0 : K.length) || !!A.$slots["left-sidebar"] || !!A.$slots["right-sidebar"]
          }),
          style: Dt({ "--dp-menu-width": `${y.value}px` })
        }, [
          A.$slots["left-sidebar"] ? (F(), z("div", b_, [
            ge(A.$slots, "left-sidebar", ht(Pt(U.value)))
          ])) : X("", !0),
          A.presetDates.length ? (F(), z("div", {
            key: 1,
            class: $e({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            (F(!0), z(xe, null, qe(A.presetDates, (C, ae) => (F(), z(xe, { key: ae }, [
              C.slot ? ge(A.$slots, C.slot, {
                key: 0,
                presetDate: ve,
                label: C.label,
                value: C.value
              }) : (F(), z("button", {
                key: 1,
                type: "button",
                style: Dt(C.style || {}),
                class: $e(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                onClick: Ke((ie) => ve(C.value, C.noTz), ["prevent"]),
                onKeydown: [
                  Se(Ke((ie) => ve(C.value, C.noTz), ["prevent"]), ["enter"]),
                  Se(Ke((ie) => ve(C.value, C.noTz), ["prevent"]), ["space"])
                ]
              }, We(C.label), 47, w_))
            ], 64))), 128))
          ], 2)) : X("", !0),
          we("div", {
            ref_key: "calendarWrapperRef",
            ref: v,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (F(), Ce(bo(V.value), _t({
              ref_key: "dynCmpRef",
              ref: O
            }, s.value, {
              "flow-step": M(_),
              onMount: M(W),
              onUpdateFlowStep: M(T),
              onResetFlow: M(B),
              onFocusMenu: j,
              onSelectDate: h[0] || (h[0] = (C) => A.$emit("select-date")),
              onDateUpdate: h[1] || (h[1] = (C) => A.$emit("date-update", C)),
              onTooltipOpen: h[2] || (h[2] = (C) => A.$emit("tooltip-open", C)),
              onTooltipClose: h[3] || (h[3] = (C) => A.$emit("tooltip-close", C)),
              onAutoApply: h[4] || (h[4] = (C) => A.$emit("auto-apply", C)),
              onRangeStart: h[5] || (h[5] = (C) => A.$emit("range-start", C)),
              onRangeEnd: h[6] || (h[6] = (C) => A.$emit("range-end", C)),
              onInvalidFixedRange: h[7] || (h[7] = (C) => A.$emit("invalid-fixed-range", C)),
              onTimeUpdate: h[8] || (h[8] = (C) => A.$emit("time-update")),
              onAmPmChange: h[9] || (h[9] = (C) => A.$emit("am-pm-change", C)),
              onTimePickerOpen: h[10] || (h[10] = (C) => A.$emit("time-picker-open", C)),
              onTimePickerClose: ce,
              onRecalculatePosition: x,
              onUpdateMonthYear: h[11] || (h[11] = (C) => A.$emit("update-month-year", C)),
              onAutoApplyInvalid: h[12] || (h[12] = (C) => A.$emit("auto-apply-invalid", C)),
              onInvalidDate: h[13] || (h[13] = (C) => A.$emit("invalid-date", C)),
              "onUpdate:internalModelValue": h[14] || (h[14] = (C) => A.$emit("update:internal-model-value", C))
            }), Ct({ _: 2 }, [
              qe(G.value, (C, ae) => ({
                name: C,
                fn: Ve((ie) => [
                  ge(A.$slots, C, ht(Pt({ ...ie })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          A.$slots["right-sidebar"] ? (F(), z("div", __, [
            ge(A.$slots, "right-sidebar", ht(Pt(U.value)))
          ])) : X("", !0),
          A.$slots["action-extra"] ? (F(), z("div", x_, [
            A.$slots["action-extra"] ? ge(A.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: H
            }) : X("", !0)
          ])) : X("", !0)
        ], 6),
        !A.autoApply || M(b).keepActionRow ? (F(), Ce(ww, _t({
          key: 2,
          "menu-mount": N.value
        }, s.value, {
          "calendar-width": y.value,
          onClosePicker: h[15] || (h[15] = (C) => A.$emit("close-picker")),
          onSelectDate: h[16] || (h[16] = (C) => A.$emit("select-date")),
          onInvalidSelect: h[17] || (h[17] = (C) => A.$emit("invalid-select")),
          onSelectNow: H
        }), Ct({ _: 2 }, [
          qe(M(S), (C, ae) => ({
            name: C,
            fn: Ve((ie) => [
              ge(A.$slots, C, ht(Pt({ ...ie })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : X("", !0)
      ], 42, h_);
    };
  }
}), k_ = typeof window < "u" ? window : void 0, ps = () => {
}, M_ = (e) => zs() ? (Eu(e), !0) : !1, T_ = (e, t, n, r) => {
  if (!e)
    return ps;
  let a = ps;
  const o = ft(
    () => M(e),
    (l) => {
      a(), l && (l.addEventListener(t, n, r), a = () => {
        l.removeEventListener(t, n, r), a = ps;
      });
    },
    { immediate: !0, flush: "post" }
  ), s = () => {
    o(), a();
  };
  return M_(s), s;
}, P_ = (e, t, n, r = {}) => {
  const { window: a = k_, event: o = "pointerdown" } = r;
  return a ? T_(a, o, (s) => {
    const l = gt(e), i = gt(t);
    !l || !i || l === s.target || s.composedPath().includes(l) || s.composedPath().includes(i) || n(s);
  }, { passive: !0 }) : void 0;
}, S_ = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...No
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
    const r = n, a = e, o = vr(), s = J(!1), l = Wa(a, "modelValue"), i = Wa(a, "timezone"), c = J(null), u = J(null), d = J(null), p = J(!1), b = J(null), v = J(!1), y = J(!1), D = J(!1), { setMenuFocused: N, setShiftKey: O } = Qd(), { clearArrowNav: g } = zn(), { validateDate: P, isValidTime: E } = Gn(a), { defaultedTransitions: k, defaultedTextInput: $, defaultedInline: _, defaultedConfig: T, defaultedRange: W } = st(a), { menuTransition: B, showTransition: V } = xa(k);
    xt(() => {
      R(a.modelValue), Xt().then(() => {
        if (!_.value.enabled) {
          const te = pe(b.value);
          te == null || te.addEventListener("scroll", A), window == null || window.addEventListener("resize", h);
        }
      }), _.value.enabled && (s.value = !0), window == null || window.addEventListener("keyup", w), window == null || window.addEventListener("keydown", I);
    }), Ir(() => {
      if (!_.value.enabled) {
        const te = pe(b.value);
        te == null || te.removeEventListener("scroll", A), window == null || window.removeEventListener("resize", h);
      }
      window == null || window.removeEventListener("keyup", w), window == null || window.removeEventListener("keydown", I);
    });
    const j = Vt(o, "all", a.presetDates), U = Vt(o, "input");
    ft(
      [l, i],
      () => {
        R(l.value);
      },
      { deep: !0 }
    );
    const { openOnTop: x, menuStyle: S, xCorrect: G, setMenuPosition: se, getScrollableParent: pe, shadowRender: ee } = uw({
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
      emitModelValue: Q,
      formatInputValue: ce,
      checkBeforeEmit: L
    } = lw(r, a, p), Oe = re(
      () => ({
        dp__main: !0,
        dp__theme_dark: a.dark,
        dp__theme_light: !a.dark,
        dp__flex_display: _.value.enabled,
        "dp--flex-display-collapsed": D.value,
        dp__flex_display_with_input: _.value.input
      })
    ), Fe = re(() => a.dark ? "dp__theme_dark" : "dp__theme_light"), H = re(() => ({
      to: typeof a.teleport == "boolean" ? "body" : a.teleport,
      disabled: !a.teleport || _.value.enabled
    })), ve = re(() => ({ class: "dp__outer_menu_wrap" })), Ee = re(() => _.value.enabled && (a.timePicker || a.monthPicker || a.yearPicker || a.quarterPicker)), A = () => {
      s.value && (T.value.closeOnScroll ? me() : se());
    }, h = () => {
      var te;
      s.value && se();
      const he = (te = u.value) == null ? void 0 : te.$el.getBoundingClientRect().width;
      D.value = document.body.offsetWidth <= he;
    }, w = (te) => {
      te.key === "Tab" && !_.value.enabled && !a.teleport && T.value.tabOutClosesMenu && (b.value.contains(document.activeElement) || me()), y.value = te.shiftKey;
    }, I = (te) => {
      y.value = te.shiftKey;
    }, K = () => {
      !a.disabled && !a.readonly && (ee(xu, a), se(!1), s.value = !0, s.value && r("open"), s.value || de(), R(a.modelValue));
    }, C = () => {
      var te;
      m.value = "", de(), (te = d.value) == null || te.setParsedDate(null), r("update:model-value", null), r("update:model-timezone-value", null), r("cleared"), T.value.closeOnClearValue && me();
    }, ae = () => {
      const te = f.value;
      return !te || !Array.isArray(te) && P(te) ? !0 : Array.isArray(te) ? a.multiDates || te.length === 2 && P(te[0]) && P(te[1]) ? !0 : W.value.partialRange && !a.timePicker ? P(te[0]) : !1 : !1;
    }, ie = () => {
      L() && ae() ? (Q(), me()) : r("invalid-select", f.value);
    }, le = (te) => {
      ue(), Q(), T.value.closeOnAutoApply && !te && me();
    }, ue = () => {
      d.value && $.value.enabled && d.value.setParsedDate(f.value);
    }, ne = (te = !1) => {
      a.autoApply && E(f.value) && ae() && (W.value.enabled && Array.isArray(f.value) ? (W.value.partialRange || f.value.length === 2) && le(te) : le(te));
    }, de = () => {
      $.value.enabled || (f.value = null);
    }, me = () => {
      _.value.enabled || (s.value && (s.value = !1, G.value = !1, N(!1), O(!1), g(), r("closed"), m.value && R(l.value)), de(), r("blur"));
    }, be = (te, he, ye = !1) => {
      if (!te) {
        f.value = null;
        return;
      }
      const Bt = Array.isArray(te) ? !te.some((Kn) => !P(Kn)) : P(te), tn = E(te);
      Bt && tn && (f.value = te, he && (v.value = ye, ie(), r("text-submit")));
    }, Te = () => {
      a.autoApply && E(f.value) && Q(), ue();
    }, Re = () => s.value ? me() : K(), He = (te) => {
      f.value = te;
    }, Ge = () => {
      $.value.enabled && (p.value = !0, ce()), r("focus");
    }, lt = () => {
      if ($.value.enabled && (p.value = !1, R(a.modelValue), v.value)) {
        const te = $b(b.value, y.value);
        te == null || te.focus();
      }
      r("blur");
    }, Y = (te) => {
      u.value && u.value.updateMonthYear(0, {
        month: hu(te.month),
        year: hu(te.year)
      });
    }, oe = (te) => {
      R(te ?? a.modelValue);
    }, _e = (te, he) => {
      var ye;
      (ye = u.value) == null || ye.switchView(te, he);
    }, Pe = (te) => T.value.onClickOutside ? T.value.onClickOutside(te) : me();
    return P_(c, d, () => Pe(ae)), t({
      closeMenu: me,
      selectDate: ie,
      clearValue: C,
      openMenu: K,
      onScroll: A,
      formatInputValue: ce,
      // exposed for testing purposes
      updateInternalModelValue: He,
      // modify internal modelValue
      setMonthYear: Y,
      parseModel: oe,
      switchView: _e,
      toggleMenu: Re
    }), (te, he) => (F(), z("div", {
      ref_key: "pickerWrapperRef",
      ref: b,
      class: $e(Oe.value),
      "data-datepicker-instance": ""
    }, [
      Qe(yw, _t({
        ref_key: "inputRef",
        ref: d,
        "input-value": M(m),
        "onUpdate:inputValue": he[0] || (he[0] = (ye) => ut(m) ? m.value = ye : null),
        "is-menu-open": s.value
      }, te.$props, {
        onClear: C,
        onOpen: K,
        onSetInputDate: be,
        onSetEmptyDate: M(Q),
        onSelectDate: ie,
        onToggle: Re,
        onClose: me,
        onFocus: Ge,
        onBlur: lt,
        onRealBlur: he[1] || (he[1] = (ye) => p.value = !1)
      }), Ct({ _: 2 }, [
        qe(M(U), (ye, Bt) => ({
          name: ye,
          fn: Ve((tn) => [
            ge(te.$slots, ye, ht(Pt(tn)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (F(), Ce(bo(te.teleport ? em : "div"), ht(Pt(H.value)), {
        default: Ve(() => [
          Qe(qn, {
            name: M(B)(M(x)),
            css: M(V) && !M(_).enabled
          }, {
            default: Ve(() => [
              s.value ? (F(), z("div", _t({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: c
              }, ve.value, {
                class: { "dp--menu-wrapper": !M(_).enabled },
                style: M(_).enabled ? void 0 : M(S)
              }), [
                Qe(xu, _t({
                  ref_key: "dpMenuRef",
                  ref: u
                }, te.$props, {
                  "internal-model-value": M(f),
                  "onUpdate:internalModelValue": he[2] || (he[2] = (ye) => ut(f) ? f.value = ye : null),
                  class: { [Fe.value]: !0, "dp--menu-wrapper": te.teleport },
                  "open-on-top": M(x),
                  "no-overlay-focus": Ee.value,
                  collapse: D.value,
                  onClosePicker: me,
                  onSelectDate: ie,
                  onAutoApply: ne,
                  onTimeUpdate: Te,
                  onFlowStep: he[3] || (he[3] = (ye) => te.$emit("flow-step", ye)),
                  onUpdateMonthYear: he[4] || (he[4] = (ye) => te.$emit("update-month-year", ye)),
                  onInvalidSelect: he[5] || (he[5] = (ye) => te.$emit("invalid-select", M(f))),
                  onAutoApplyInvalid: he[6] || (he[6] = (ye) => te.$emit("invalid-select", ye)),
                  onInvalidFixedRange: he[7] || (he[7] = (ye) => te.$emit("invalid-fixed-range", ye)),
                  onRecalculatePosition: M(se),
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
                  qe(M(j), (ye, Bt) => ({
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
}), Hl = /* @__PURE__ */ (() => {
  const e = S_;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), A_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hl
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(A_).forEach(([e, t]) => {
  e !== "default" && (Hl[e] = t);
});
const jl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, D_ = { class: "input" }, C_ = ["value"], O_ = ["min", "max"], E_ = ["accept"], R_ = { key: 5 }, N_ = { key: 6 }, $_ = {
  __name: "ValueSelector",
  props: /* @__PURE__ */ uc({
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
    function o(N, O = d.value) {
      if (N == null || N === "") return !1;
      const g = Number(N);
      return Number.isFinite(g) && g >= O.rangemin && g <= O.rangemax;
    }
    function s() {
      a.value = r.value;
    }
    function l(N) {
      if (N.key !== "ArrowUp" && N.key !== "ArrowDown") return;
      const O = Number(r.value);
      if (!Number.isFinite(O)) return;
      const g = d.value, P = Number(N.currentTarget.step) || 1, E = O + (N.key === "ArrowUp" ? P : -P);
      o(E, g) || N.preventDefault();
    }
    function i(N) {
      var k, $;
      const O = d.value;
      if (o(r.value, O)) return;
      const g = a.value, P = o(g, O) ? g : Number(O.defaultFloat), E = ($ = (k = N.relatedTarget) == null ? void 0 : k.closest) == null ? void 0 : $.call(k, "[data-poris-command]");
      E ? window.confirm(
        "This value is outside the active range. Restore the previous value and continue with the command? Choose Cancel to cancel the command."
      ) || (E.dataset.porisCommandCancelled = "true") : window.alert("This value is outside the active range. The previous value will be restored."), r.value = P;
    }
    const c = J(t.mode), u = re(() => c.value.hasValues ? c.value.valuesNodes : []), d = re(() => n.value || c.value.defaultValue || u.value[0]), p = () => {
      var N;
      return ((N = d.value) == null ? void 0 : N.type) === Cr;
    }, b = () => {
      var N;
      return ((N = d.value) == null ? void 0 : N.type) === cr;
    }, v = () => {
      var N;
      return ((N = d.value) == null ? void 0 : N.type) === Er;
    }, y = () => {
      var N;
      return ((N = d.value) == null ? void 0 : N.type) === Or;
    }, D = () => {
      var N;
      return ((N = d.value) == null ? void 0 : N.type) === no;
    };
    return ft(
      () => t.mode,
      (N) => {
        console.log("watch.mode", N), c.value = N;
      }
    ), ft(u, (N, O) => {
      console.log(`values mode: ${c.value.id}, changed/oldVal:`, N, O);
    }), (N, O) => (F(), z("div", D_, [
      u.value.length > 1 ? Vn((F(), z("select", {
        key: 0,
        "onUpdate:modelValue": O[0] || (O[0] = (g) => n.value = g),
        class: "active-value-selector"
      }, [
        (F(!0), z(xe, null, qe(u.value, (g) => (F(), z("option", {
          key: g.id,
          value: g
        }, We(g.name), 9, C_))), 128))
      ], 512)), [
        [Sc, n.value]
      ]) : X("", !0),
      p() ? Vn((F(), z("input", {
        key: 1,
        "onUpdate:modelValue": O[1] || (O[1] = (g) => r.value = g),
        type: "text"
      }, null, 512)), [
        [Ci, r.value]
      ]) : b() ? Vn((F(), z("input", {
        key: 2,
        class: "numberPicker",
        "onUpdate:modelValue": O[2] || (O[2] = (g) => r.value = g),
        type: "number",
        step: ".01",
        min: d.value.rangemin,
        max: d.value.rangemax,
        onFocus: s,
        onKeydown: l,
        onBlur: i
      }, null, 40, O_)), [
        [
          Ci,
          r.value,
          void 0,
          { number: !0 }
        ]
      ]) : y() ? (F(), Ce(M(Hl), {
        key: 3,
        modelValue: r.value,
        "onUpdate:modelValue": O[3] || (O[3] = (g) => r.value = g),
        min: d.value.datemin,
        max: d.value.datemax,
        "enable-seconds": "",
        "is-24": ""
      }, null, 8, ["modelValue", "min", "max"])) : v() ? (F(), z("input", {
        key: 4,
        type: "file",
        accept: d.value.fileExtension
      }, null, 8, E_)) : D() && u.value.length === 1 ? (F(), z("span", R_, We(d.value.name), 1)) : d.value ? X("", !0) : (F(), z("span", N_, "No values!")),
      Jt(" " + We(" "))
    ]));
  }
}, V_ = /* @__PURE__ */ jl($_, [["__scopeId", "data-v-f7e30fcc"]]), F_ = { class: "input-mode-panel" }, I_ = { class: "title" }, B_ = {
  key: 0,
  class: "command-buttons"
}, L_ = ["onClick"], Y_ = { class: "value-selector" }, H_ = {
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
      i("command-launched", { systemName: l.subsystem.name, commandName: v.name });
    }
    const u = J(l.mode), d = J(null), p = J(null);
    function b(v = null) {
      const y = s.getSystemValue(l.subsystem, u.value, v);
      d.value = y.value, p.value = y.data;
    }
    return b(), ft(d, (v) => {
      if (v) {
        const y = s.getSystemValue(l.subsystem, u.value, v);
        p.value !== y.data && (p.value = y.data);
      }
    }, { flush: "sync" }), ft(p, (v) => {
      d.value && s.setSystemValue(l.subsystem, d.value, v);
    }, { flush: "sync" }), ft(
      () => s.systemValues[`${l.subsystem.id}`],
      (v) => {
        var y, D;
        v && (((y = d.value) == null ? void 0 : y.id) !== ((D = v.value) == null ? void 0 : D.id) && (d.value = v.value), p.value !== v.data && (p.value = v.data));
      },
      { flush: "sync" }
    ), ft(u, (v) => {
      console.log("watch_input: currentMode.set() mode:", v), b();
    }), ft(
      () => l.mode,
      (v) => {
        console.log("new props.mode:", v), u.value = v;
      }
    ), (v, y) => {
      var D, N;
      return F(), z("div", {
        class: $e(["inputsystem-panel", { "has-commands": (D = e.subsystem.commandsNodes) == null ? void 0 : D.length }])
      }, [
        we("div", F_, [
          we("span", I_, We(e.subsystem.label || e.subsystem.name), 1),
          (N = e.subsystem.commandsNodes) != null && N.length ? (F(), z("span", B_, [
            (F(!0), z(xe, null, qe(e.subsystem.commandsNodes, (O) => (F(), z("button", {
              key: O.id,
              type: "button",
              "data-poris-command": "",
              onClick: (g) => c(O, g)
            }, We(O.label || O.name), 9, L_))), 128))
          ])) : X("", !0),
          we("span", Y_, [
            o(e.subsystem, e.modes) ? (F(), Ce(bd, {
              key: 0,
              class: "mode-selector",
              modelValue: u.value,
              "onUpdate:modelValue": y[0] || (y[0] = (O) => u.value = O),
              modes: e.modes
            }, null, 8, ["modelValue", "modes"])) : X("", !0),
            a(e.subsystem) ? (F(), Ce(V_, {
              key: 1,
              mode: u.value,
              "selected-value": d.value,
              "onUpdate:selectedValue": y[1] || (y[1] = (O) => d.value = O),
              "data-value": p.value,
              "onUpdate:dataValue": y[2] || (y[2] = (O) => p.value = O)
            }, null, 8, ["mode", "selected-value", "data-value"])) : X("", !0)
          ])
        ])
      ], 2);
    };
  }
}, ku = /* @__PURE__ */ jl(H_, [["__scopeId", "data-v-94f24dc3"]]), j_ = {
  key: 0,
  class: "subsystem-panel"
}, U_ = { class: "subsystem-heading" }, W_ = {
  key: 0,
  class: "title"
}, q_ = {
  key: 1,
  class: "command-buttons"
}, z_ = ["onClick"], G_ = {
  key: 0,
  class: "mode-selector"
}, K_ = {
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
      u("command-launched", { systemName: p.name, commandName: v.name });
    }
    return ft(() => p.candidateMode, () => {
      var v, y;
      hn(
        `watch.mode. mode ${(v = p.currentMode) == null ? void 0 : v.name}, newMode :${(y = p.candidateMode) == null ? void 0 : y.name}`
      ), p.candidateMode != null && p.candidateMode != p.currentMode && (i.setValidMode(p, p.candidateMode), hn(`watch result >> ${p.currentMode.name}`));
    }), (v, y) => {
      var N;
      const D = fp("SubSystemPanel", !0);
      return F(), z(xe, null, [
        l(M(p)) ? (F(), z("div", j_, [
          we("div", U_, [
            M(p).label != "-" ? (F(), z("h3", W_, We(M(p).label || M(p).name), 1)) : X("", !0),
            (N = M(p).commandsNodes) != null && N.length ? (F(), z("div", q_, [
              (F(!0), z(xe, null, qe(M(p).commandsNodes, (O) => (F(), z("button", {
                key: O.id,
                type: "button",
                "data-poris-command": "",
                onClick: (g) => b(O, g)
              }, We(O.label || O.name), 9, z_))), 128))
            ])) : X("", !0)
          ]),
          s(M(p)) ? (F(), z("div", G_, [
            Qe(bd, {
              modelValue: M(p).candidateMode,
              "onUpdate:modelValue": y[0] || (y[0] = (O) => M(p).candidateMode = O),
              modes: M(p).getValidModes()
            }, null, 8, ["modelValue", "modes"])
          ])) : X("", !0),
          (F(!0), z(xe, null, qe(M(p).getActiveSubnodes(), (O) => (F(), z(xe, {
            key: O.id
          }, [
            a(O) ? (F(), Ce(D, {
              key: 0,
              system: O,
              onCommandLaunched: y[1] || (y[1] = (g) => u("command-launched", g))
            }, null, 8, ["system"])) : X("", !0),
            o(O) ? (F(), Ce(ku, {
              key: 1,
              subsystem: O,
              modes: O.getValidModes(),
              mode: O.currentMode,
              onCommandLaunched: y[2] || (y[2] = (g) => u("command-launched", g))
            }, null, 8, ["subsystem", "modes", "mode"])) : X("", !0)
          ], 64))), 128))
        ])) : X("", !0),
        o(M(p)) ? (F(), Ce(ku, {
          key: 1,
          subsystem: M(p),
          modes: M(p).getValidModes(),
          mode: M(p).currentMode,
          onCommandLaunched: y[3] || (y[3] = (O) => u("command-launched", O))
        }, null, 8, ["subsystem", "modes", "mode"])) : X("", !0)
      ], 64);
    };
  }
}, Fo = "";
function Q_() {
  return !!Fo;
}
function X_(e) {
  return ot.post(`${Fo}/api/poris/commit`, e).then((t) => t.data);
}
function J_(e) {
  return ot.post(`${Fo}/api/poris/command/${e}`, {}).then((t) => t.data);
}
function Z_() {
  return ot.get(`${Fo}/api/poris/state`).then((e) => e.data);
}
const e1 = (e) => (sp("data-v-cacd4121"), e = e(), lp(), e), t1 = {
  key: 0,
  class: "loading"
}, n1 = /* @__PURE__ */ e1(() => /* @__PURE__ */ we("span", { class: "spinner" }, null, -1)), r1 = [
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
    }
  },
  setup(e) {
    const t = xl(), n = re(() => t.isLoading), r = re(() => t.rootSubsystem), a = J(!1), o = J(""), s = J(""), l = J(!1), i = Q_(), c = "", u = J([]), d = re(() => u.value.filter((_) => _.visible));
    let p = null;
    const b = e;
    function v(_) {
      var B, V, j;
      const T = t.systemValues[`${_.id}`], W = (T == null ? void 0 : T.value) || ((B = _.currentMode) == null ? void 0 : B.defaultValue) || ((j = (V = _.currentMode) == null ? void 0 : V.valuesNodes) == null ? void 0 : j[0]);
      return W ? typeof (T == null ? void 0 : T.data) == "number" ? {
        number: T.data,
        name: W.name,
        id: W.id,
        type: W.type
      } : W.type === "ValueString" || W.type === "ValueFilePath" ? { data: (T == null ? void 0 : T.data) ?? "", name: W.name, id: W.id, type: W.type } : { name: W.name, id: W.id, type: W.type } : null;
    }
    function y(_) {
      return {
        id: _.id,
        name: _.name,
        mode: _.currentMode ? { id: _.currentMode.id, name: _.currentMode.name } : null,
        value: v(_),
        subsystems: (_.subsystemsNodes || []).map(y)
      };
    }
    function D() {
      return {
        root: y(r.value)
      };
    }
    async function N() {
      if (i)
        try {
          const _ = await Z_();
          u.value = (_ == null ? void 0 : _.monitors) || [];
        } catch {
          u.value = [];
        }
    }
    async function O(_, T) {
      var W, B;
      a.value = !0, l.value = !1, o.value = "";
      try {
        await _(), o.value = T;
      } catch (V) {
        l.value = !0, o.value = ((B = (W = V == null ? void 0 : V.response) == null ? void 0 : W.data) == null ? void 0 : B.error) || V.message || String(V);
      } finally {
        a.value = !1;
      }
    }
    function g() {
      O(() => X_(D()), "Changes committed");
    }
    function P(_) {
      O(() => J_(_), `${_} executed`);
    }
    function E({ systemName: _, commandName: T }) {
      l.value = !1, s.value = `We launched ${_}.${T}`;
    }
    function k() {
      s.value = "";
    }
    function $() {
      o.value = "", l.value = !1, b.modelPath && t.loadModelURL(b.modelPath);
    }
    return b.modelPath && t.loadModelURL(b.modelPath), xt(() => {
      N(), i && (p = window.setInterval(N, 1e3));
    }), sl(() => {
      p && window.clearInterval(p);
    }), (_, T) => (F(), z("div", {
      class: $e(["poris-main", { compact: b.compact }]),
      onClickCapture: k,
      onKeydownCapture: k
    }, [
      n.value ? (F(), z("div", t1, r1)) : r.value ? (F(), z("div", a1, [
        we("h2", o1, We(r.value.name) + " Panel", 1),
        d.value.length ? (F(), z("div", s1, [
          (F(!0), z(xe, null, qe(d.value, (W) => (F(), z("div", {
            key: W.id,
            class: "monitor-capsule"
          }, [
            we("span", l1, We(W.label), 1),
            we("span", i1, We(W.value), 1)
          ]))), 128))
        ])) : X("", !0),
        Qe(K_, {
          system: r.value,
          onCommandLaunched: E
        }, null, 8, ["system"]),
        M(i) ? (F(), z("div", u1, [
          we("button", {
            type: "button",
            disabled: a.value,
            onClick: g
          }, "Commit changes", 8, c1),
          we("button", {
            type: "button",
            disabled: a.value,
            onClick: $
          }, "Cancel", 8, d1),
          M(c) ? (F(), z("button", {
            key: 0,
            type: "button",
            disabled: a.value,
            onClick: T[0] || (T[0] = (W) => P(M(c)))
          }, We(M(c)), 9, f1)) : X("", !0)
        ])) : X("", !0),
        s.value ? (F(), z("div", p1, We(s.value), 1)) : X("", !0),
        o.value ? (F(), z("div", {
          key: 3,
          class: $e(["status", { error: l.value }])
        }, We(o.value), 3)) : X("", !0)
      ])) : X("", !0)
    ], 34));
  }
}, h1 = /* @__PURE__ */ jl(m1, [["__scopeId", "data-v-cacd4121"]]);
function y1(e, t, n = {}) {
  const { debug: r = !1, compact: a = !1 } = n;
  Tg(r);
  const s = Ym(h1, { modelPath: e, compact: a });
  return s.use(Wm()), s.mount(t), s;
}
export {
  y1 as createPorisViewerPanel
};
