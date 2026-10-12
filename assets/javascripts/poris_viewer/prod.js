var bf = Object.defineProperty;
var wf = (e, t, n) => t in e ? bf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var fe = (e, t, n) => wf(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Zs(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const Je = {}, Mr = [], Yt = () => {
}, _f = () => !1, mo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), el = (e) => e.startsWith("onUpdate:"), yt = Object.assign, tl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, xf = Object.prototype.hasOwnProperty, Ye = (e, t) => xf.call(e, t), ke = Array.isArray, Tr = (e) => _a(e) === "[object Map]", ho = (e) => _a(e) === "[object Set]", Zl = (e) => _a(e) === "[object Date]", Se = (e) => typeof e == "function", at = (e) => typeof e == "string", Ln = (e) => typeof e == "symbol", Xe = (e) => e !== null && typeof e == "object", Nu = (e) => (Xe(e) || Se(e)) && Se(e.then) && Se(e.catch), Vu = Object.prototype.toString, _a = (e) => Vu.call(e), kf = (e) => _a(e).slice(8, -1), Fu = (e) => _a(e) === "[object Object]", nl = (e) => at(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zr = /* @__PURE__ */ Zs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), vo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Mf = /-(\w)/g, Qt = vo((e) => e.replace(Mf, (t, n) => n ? n.toUpperCase() : "")), Tf = /\B([A-Z])/g, jn = vo(
  (e) => e.replace(Tf, "-$1").toLowerCase()
), yo = vo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ko = vo((e) => e ? `on${yo(e)}` : ""), pn = (e, t) => !Object.is(e, t), Ba = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, qa = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, ua = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Pf = (e) => {
  const t = at(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ei;
const Iu = () => ei || (ei = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ct(e) {
  if (ke(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = at(r) ? Df(r) : Ct(r);
      if (a)
        for (const o in a)
          t[o] = a[o];
    }
    return t;
  } else if (at(e) || Xe(e))
    return e;
}
const Af = /;(?![^(]*\))/g, Sf = /:([^]+)/, Cf = /\/\*[^]*?\*\//g;
function Df(e) {
  const t = {};
  return e.replace(Cf, "").split(Af).forEach((n) => {
    if (n) {
      const r = n.split(Sf);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ne(e) {
  let t = "";
  if (at(e))
    t = e;
  else if (ke(e))
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
  return t && !at(t) && (e.class = Ne(t)), n && (e.style = Ct(n)), e;
}
const Of = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ef = /* @__PURE__ */ Zs(Of);
function Lu(e) {
  return !!e || e === "";
}
function Rf(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = go(e[r], t[r]);
  return n;
}
function go(e, t) {
  if (e === t)
    return !0;
  let n = Zl(e), r = Zl(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Ln(e), r = Ln(t), n || r)
    return e === t;
  if (n = ke(e), r = ke(t), n || r)
    return n && r ? Rf(e, t) : !1;
  if (n = Xe(e), r = Xe(t), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(e).length, o = Object.keys(t).length;
    if (a !== o)
      return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s), i = t.hasOwnProperty(s);
      if (l && !i || !l && i || !go(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function $f(e, t) {
  return e.findIndex((n) => go(n, t));
}
const We = (e) => at(e) ? e : e == null ? "" : ke(e) || Xe(e) && (e.toString === Vu || !Se(e.toString)) ? JSON.stringify(e, Bu, 2) : String(e), Bu = (e, t) => t && t.__v_isRef ? Bu(e, t.value) : Tr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, a], o) => (n[Qo(r, o) + " =>"] = a, n),
    {}
  )
} : ho(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Qo(n))
} : Ln(t) ? Qo(t) : Xe(t) && !ke(t) && !Fu(t) ? String(t) : t, Qo = (e, t = "") => {
  var n;
  return Ln(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Nt;
class Yu {
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
function Hu(e) {
  return new Yu(e);
}
function Nf(e, t = Nt) {
  t && t.active && t.effects.push(e);
}
function rl() {
  return Nt;
}
function ju(e) {
  Nt && Nt.cleanups.push(e);
}
let lr;
class al {
  constructor(t, n, r, a) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Nf(this, a);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Un();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Vf(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), vr();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = cn, n = lr;
    try {
      return cn = !0, lr = this, this._runnings++, ti(this), this.fn();
    } finally {
      ni(this), this._runnings--, lr = n, cn = t;
    }
  }
  stop() {
    var t;
    this.active && (ti(this), ni(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Vf(e) {
  return e.value;
}
function ti(e) {
  e._trackId++, e._depsLength = 0;
}
function ni(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Uu(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Uu(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let cn = !0, Ms = 0;
const ol = [];
function Un() {
  ol.push(cn), cn = !1;
}
function Ff() {
  ol.push(cn), cn = !0;
}
function vr() {
  const e = ol.pop();
  cn = e === void 0 ? !0 : e;
}
function sl() {
  Ms++;
}
function ll() {
  for (Ms--; !Ms && Ts.length; )
    Ts.shift()();
}
function Wu(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && Uu(r, e), e.deps[e._depsLength++] = t) : e._depsLength++;
  }
}
const Ts = [];
function qu(e, t, n) {
  sl();
  for (const r of e.keys()) {
    let a;
    r._dirtyLevel < t && (a ?? (a = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (a ?? (a = e.get(r) === r._trackId)) && (r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && Ts.push(r.scheduler)));
  }
  ll();
}
const zu = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, za = /* @__PURE__ */ new WeakMap(), ir = Symbol(""), Ps = Symbol("");
function $t(e, t, n) {
  if (cn && lr) {
    let r = za.get(e);
    r || za.set(e, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || r.set(n, a = zu(() => r.delete(n))), Wu(
      lr,
      a
    );
  }
}
function yn(e, t, n, r, a, o) {
  const s = za.get(e);
  if (!s)
    return;
  let l = [];
  if (t === "clear")
    l = [...s.values()];
  else if (n === "length" && ke(e)) {
    const i = Number(r);
    s.forEach((c, u) => {
      (u === "length" || !Ln(u) && u >= i) && l.push(c);
    });
  } else
    switch (n !== void 0 && l.push(s.get(n)), t) {
      case "add":
        ke(e) ? nl(n) && l.push(s.get("length")) : (l.push(s.get(ir)), Tr(e) && l.push(s.get(Ps)));
        break;
      case "delete":
        ke(e) || (l.push(s.get(ir)), Tr(e) && l.push(s.get(Ps)));
        break;
      case "set":
        Tr(e) && l.push(s.get(ir));
        break;
    }
  sl();
  for (const i of l)
    i && qu(
      i,
      4
    );
  ll();
}
function If(e, t) {
  var n;
  return (n = za.get(e)) == null ? void 0 : n.get(t);
}
const Lf = /* @__PURE__ */ Zs("__proto__,__v_isRef,__isVue"), Gu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ln)
), ri = /* @__PURE__ */ Bf();
function Bf() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = Be(this);
      for (let o = 0, s = this.length; o < s; o++)
        $t(r, "get", o + "");
      const a = r[t](...n);
      return a === -1 || a === !1 ? r[t](...n.map(Be)) : a;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Un(), sl();
      const r = Be(this)[t].apply(this, n);
      return ll(), vr(), r;
    };
  }), e;
}
function Yf(e) {
  const t = Be(this);
  return $t(t, "has", e), t.hasOwnProperty(e);
}
class Ku {
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
      return r === (a ? o ? ep : Zu : o ? Ju : Xu).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = ke(t);
    if (!a) {
      if (s && Ye(ri, n))
        return Reflect.get(ri, n, r);
      if (n === "hasOwnProperty")
        return Yf;
    }
    const l = Reflect.get(t, n, r);
    return (Ln(n) ? Gu.has(n) : Lf(n)) || (a || $t(t, "get", n), o) ? l : ut(l) ? s && nl(n) ? l : l.value : Xe(l) ? a ? ec(l) : gn(l) : l;
  }
}
class Qu extends Ku {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, a) {
    let o = t[n];
    if (!this._isShallow) {
      const i = Dr(o);
      if (!Ga(r) && !Dr(r) && (o = Be(o), r = Be(r)), !ke(t) && ut(o) && !ut(r))
        return i ? !1 : (o.value = r, !0);
    }
    const s = ke(t) && nl(n) ? Number(n) < t.length : Ye(t, n), l = Reflect.set(t, n, r, a);
    return t === Be(a) && (s ? pn(r, o) && yn(t, "set", n, r) : yn(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = Ye(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && r && yn(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Ln(n) || !Gu.has(n)) && $t(t, "has", n), r;
  }
  ownKeys(t) {
    return $t(
      t,
      "iterate",
      ke(t) ? "length" : ir
    ), Reflect.ownKeys(t);
  }
}
class Hf extends Ku {
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
const jf = /* @__PURE__ */ new Qu(), Uf = /* @__PURE__ */ new Hf(), Wf = /* @__PURE__ */ new Qu(
  !0
), il = (e) => e, bo = (e) => Reflect.getPrototypeOf(e);
function Sa(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const a = Be(e), o = Be(t);
  n || (pn(t, o) && $t(a, "get", t), $t(a, "get", o));
  const { has: s } = bo(a), l = r ? il : n ? dl : ca;
  if (s.call(a, t))
    return l(e.get(t));
  if (s.call(a, o))
    return l(e.get(o));
  e !== a && e.get(t);
}
function Ca(e, t = !1) {
  const n = this.__v_raw, r = Be(n), a = Be(e);
  return t || (pn(e, a) && $t(r, "has", e), $t(r, "has", a)), e === a ? n.has(e) : n.has(e) || n.has(a);
}
function Da(e, t = !1) {
  return e = e.__v_raw, !t && $t(Be(e), "iterate", ir), Reflect.get(e, "size", e);
}
function ai(e) {
  e = Be(e);
  const t = Be(this);
  return bo(t).has.call(t, e) || (t.add(e), yn(t, "add", e, e)), this;
}
function oi(e, t) {
  t = Be(t);
  const n = Be(this), { has: r, get: a } = bo(n);
  let o = r.call(n, e);
  o || (e = Be(e), o = r.call(n, e));
  const s = a.call(n, e);
  return n.set(e, t), o ? pn(t, s) && yn(n, "set", e, t) : yn(n, "add", e, t), this;
}
function si(e) {
  const t = Be(this), { has: n, get: r } = bo(t);
  let a = n.call(t, e);
  a || (e = Be(e), a = n.call(t, e)), r && r.call(t, e);
  const o = t.delete(e);
  return a && yn(t, "delete", e, void 0), o;
}
function li() {
  const e = Be(this), t = e.size !== 0, n = e.clear();
  return t && yn(e, "clear", void 0, void 0), n;
}
function Oa(e, t) {
  return function(r, a) {
    const o = this, s = o.__v_raw, l = Be(s), i = t ? il : e ? dl : ca;
    return !e && $t(l, "iterate", ir), s.forEach((c, u) => r.call(a, i(c), i(u), o));
  };
}
function Ea(e, t, n) {
  return function(...r) {
    const a = this.__v_raw, o = Be(a), s = Tr(o), l = e === "entries" || e === Symbol.iterator && s, i = e === "keys" && s, c = a[e](...r), u = n ? il : t ? dl : ca;
    return !t && $t(
      o,
      "iterate",
      i ? Ps : ir
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
function _n(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function qf() {
  const e = {
    get(o) {
      return Sa(this, o);
    },
    get size() {
      return Da(this);
    },
    has: Ca,
    add: ai,
    set: oi,
    delete: si,
    clear: li,
    forEach: Oa(!1, !1)
  }, t = {
    get(o) {
      return Sa(this, o, !1, !0);
    },
    get size() {
      return Da(this);
    },
    has: Ca,
    add: ai,
    set: oi,
    delete: si,
    clear: li,
    forEach: Oa(!1, !0)
  }, n = {
    get(o) {
      return Sa(this, o, !0);
    },
    get size() {
      return Da(this, !0);
    },
    has(o) {
      return Ca.call(this, o, !0);
    },
    add: _n("add"),
    set: _n("set"),
    delete: _n("delete"),
    clear: _n("clear"),
    forEach: Oa(!0, !1)
  }, r = {
    get(o) {
      return Sa(this, o, !0, !0);
    },
    get size() {
      return Da(this, !0);
    },
    has(o) {
      return Ca.call(this, o, !0);
    },
    add: _n("add"),
    set: _n("set"),
    delete: _n("delete"),
    clear: _n("clear"),
    forEach: Oa(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = Ea(
      o,
      !1,
      !1
    ), n[o] = Ea(
      o,
      !0,
      !1
    ), t[o] = Ea(
      o,
      !1,
      !0
    ), r[o] = Ea(
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
  zf,
  Gf,
  Kf,
  Qf
] = /* @__PURE__ */ qf();
function ul(e, t) {
  const n = t ? e ? Qf : Kf : e ? Gf : zf;
  return (r, a, o) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? r : Reflect.get(
    Ye(n, a) && a in r ? n : r,
    a,
    o
  );
}
const Xf = {
  get: /* @__PURE__ */ ul(!1, !1)
}, Jf = {
  get: /* @__PURE__ */ ul(!1, !0)
}, Zf = {
  get: /* @__PURE__ */ ul(!0, !1)
}, Xu = /* @__PURE__ */ new WeakMap(), Ju = /* @__PURE__ */ new WeakMap(), Zu = /* @__PURE__ */ new WeakMap(), ep = /* @__PURE__ */ new WeakMap();
function tp(e) {
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
function np(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : tp(kf(e));
}
function gn(e) {
  return Dr(e) ? e : cl(
    e,
    !1,
    jf,
    Xf,
    Xu
  );
}
function rp(e) {
  return cl(
    e,
    !1,
    Wf,
    Jf,
    Ju
  );
}
function ec(e) {
  return cl(
    e,
    !0,
    Uf,
    Zf,
    Zu
  );
}
function cl(e, t, n, r, a) {
  if (!Xe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = a.get(e);
  if (o)
    return o;
  const s = np(e);
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
function Ga(e) {
  return !!(e && e.__v_isShallow);
}
function tc(e) {
  return $n(e) || Dr(e);
}
function Be(e) {
  const t = e && e.__v_raw;
  return t ? Be(t) : e;
}
function wo(e) {
  return Object.isExtensible(e) && qa(e, "__v_skip", !0), e;
}
const ca = (e) => Xe(e) ? gn(e) : e, dl = (e) => Xe(e) ? ec(e) : e;
class nc {
  constructor(t, n, r, a) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new al(
      () => t(this._value),
      () => Pr(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !a, this.__v_isReadonly = r;
  }
  get value() {
    const t = Be(this);
    return (!t._cacheable || t.effect.dirty) && pn(t._value, t._value = t.effect.run()) && Pr(t, 4), fl(t), t.effect._dirtyLevel >= 2 && Pr(t, 2), t._value;
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
function ap(e, t, n = !1) {
  let r, a;
  const o = Se(e);
  return o ? (r = e, a = Yt) : (r = e.get, a = e.set), new nc(r, a, o || !a, n);
}
function fl(e) {
  var t;
  cn && lr && (e = Be(e), Wu(
    lr,
    (t = e.dep) != null ? t : e.dep = zu(
      () => e.dep = void 0,
      e instanceof nc ? e : void 0
    )
  ));
}
function Pr(e, t = 4, n) {
  e = Be(e);
  const r = e.dep;
  r && qu(
    r,
    t
  );
}
function ut(e) {
  return !!(e && e.__v_isRef === !0);
}
function J(e) {
  return op(e, !1);
}
function op(e, t) {
  return ut(e) ? e : new sp(e, t);
}
class sp {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Be(t), this._value = n ? t : ca(t);
  }
  get value() {
    return fl(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ga(t) || Dr(t);
    t = n ? t : Be(t), pn(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : ca(t), Pr(this, 4));
  }
}
function ii(e) {
  Pr(e, 4);
}
function M(e) {
  return ut(e) ? e.value : e;
}
const lp = {
  get: (e, t, n) => M(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const a = e[t];
    return ut(a) && !ut(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function rc(e) {
  return $n(e) ? e : new Proxy(e, lp);
}
class ip {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: r } = t(
      () => fl(this),
      () => Pr(this)
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
function up(e) {
  return new ip(e);
}
function cp(e) {
  const t = ke(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = ac(e, n);
  return t;
}
class dp {
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
    return If(Be(this._object), this._key);
  }
}
class fp {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Ka(e, t, n) {
  return ut(e) ? e : Se(e) ? new fp(e) : Xe(e) && arguments.length > 1 ? ac(e, t, n) : J(e);
}
function ac(e, t, n) {
  const r = e[t];
  return ut(r) ? r : new dp(e, t, n);
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
    _o(a, t, n);
  }
}
function Ht(e, t, n, r) {
  if (Se(e)) {
    const o = Nn(e, t, n, r);
    return o && Nu(o) && o.catch((s) => {
      _o(s, t, n);
    }), o;
  }
  const a = [];
  for (let o = 0; o < e.length; o++)
    a.push(Ht(e[o], t, n, r));
  return a;
}
function _o(e, t, n, r = !0) {
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
  pp(e, n, a, r);
}
function pp(e, t, n, r = !0) {
  console.error(e);
}
let da = !1, As = !1;
const Tt = [];
let on = 0;
const Ar = [];
let Sn = null, tr = 0;
const oc = /* @__PURE__ */ Promise.resolve();
let pl = null;
function Xt(e) {
  const t = pl || oc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function mp(e) {
  let t = on + 1, n = Tt.length;
  for (; t < n; ) {
    const r = t + n >>> 1, a = Tt[r], o = fa(a);
    o < e || o === e && a.pre ? t = r + 1 : n = r;
  }
  return t;
}
function ml(e) {
  (!Tt.length || !Tt.includes(
    e,
    da && e.allowRecurse ? on + 1 : on
  )) && (e.id == null ? Tt.push(e) : Tt.splice(mp(e.id), 0, e), sc());
}
function sc() {
  !da && !As && (As = !0, pl = oc.then(ic));
}
function hp(e) {
  const t = Tt.indexOf(e);
  t > on && Tt.splice(t, 1);
}
function vp(e) {
  ke(e) ? Ar.push(...e) : (!Sn || !Sn.includes(
    e,
    e.allowRecurse ? tr + 1 : tr
  )) && Ar.push(e), sc();
}
function ui(e, t, n = da ? on + 1 : 0) {
  for (; n < Tt.length; n++) {
    const r = Tt[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid)
        continue;
      Tt.splice(n, 1), n--, r();
    }
  }
}
function lc(e) {
  if (Ar.length) {
    const t = [...new Set(Ar)].sort(
      (n, r) => fa(n) - fa(r)
    );
    if (Ar.length = 0, Sn) {
      Sn.push(...t);
      return;
    }
    for (Sn = t, tr = 0; tr < Sn.length; tr++)
      Sn[tr]();
    Sn = null, tr = 0;
  }
}
const fa = (e) => e.id == null ? 1 / 0 : e.id, yp = (e, t) => {
  const n = fa(e) - fa(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ic(e) {
  As = !1, da = !0, Tt.sort(yp);
  try {
    for (on = 0; on < Tt.length; on++) {
      const t = Tt[on];
      t && t.active !== !1 && Nn(t, null, 14);
    }
  } finally {
    on = 0, Tt.length = 0, lc(), da = !1, pl = null, (Tt.length || Ar.length) && ic();
  }
}
function gp(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || Je;
  let a = n;
  const o = t.startsWith("update:"), s = o && t.slice(7);
  if (s && s in r) {
    const u = `${s === "modelValue" ? "model" : s}Modifiers`, { number: d, trim: p } = r[u] || Je;
    p && (a = n.map((g) => at(g) ? g.trim() : g)), d && (a = n.map(ua));
  }
  let l, i = r[l = Ko(t)] || // also try camelCase event handler (#2249)
  r[l = Ko(Qt(t))];
  !i && o && (i = r[l = Ko(jn(t))]), i && Ht(
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
function uc(e, t, n = !1) {
  const r = t.emitsCache, a = r.get(e);
  if (a !== void 0)
    return a;
  const o = e.emits;
  let s = {}, l = !1;
  if (!Se(e)) {
    const i = (c) => {
      const u = uc(c, t, !0);
      u && (l = !0, yt(s, u));
    };
    !n && t.mixins.length && t.mixins.forEach(i), e.extends && i(e.extends), e.mixins && e.mixins.forEach(i);
  }
  return !o && !l ? (Xe(e) && r.set(e, null), null) : (ke(o) ? o.forEach((i) => s[i] = null) : yt(s, o), Xe(e) && r.set(e, s), s);
}
function xo(e, t) {
  return !e || !mo(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Ye(e, t[0].toLowerCase() + t.slice(1)) || Ye(e, jn(t)) || Ye(e, t));
}
let vt = null, ko = null;
function Qa(e) {
  const t = vt;
  return vt = e, ko = e && e.type.__scopeId || null, t;
}
function bp(e) {
  ko = e;
}
function wp() {
  ko = null;
}
function Ve(e, t = vt, n) {
  if (!t || e._n)
    return e;
  const r = (...a) => {
    r._d && xi(-1);
    const o = Qa(t);
    let s;
    try {
      s = e(...a);
    } finally {
      Qa(o), r._d && xi(1);
    }
    return s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Xo(e) {
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
    setupState: g,
    ctx: v,
    inheritAttrs: y
  } = e;
  let S, $;
  const O = Qa(e);
  try {
    if (n.shapeFlag & 4) {
      const T = a || r, E = T;
      S = an(
        u.call(
          E,
          T,
          d,
          o,
          g,
          p,
          v
        )
      ), $ = i;
    } else {
      const T = t;
      S = an(
        T.length > 1 ? T(
          o,
          { attrs: i, slots: l, emit: c }
        ) : T(
          o,
          null
          /* we know it doesn't need it */
        )
      ), $ = t.props ? i : _p(i);
    }
  } catch (T) {
    aa.length = 0, _o(T, e, 1), S = Qe(jt);
  }
  let b = S;
  if ($ && y !== !1) {
    const T = Object.keys($), { shapeFlag: E } = b;
    T.length && E & 7 && (s && T.some(el) && ($ = xp(
      $,
      s
    )), b = Bn(b, $));
  }
  return n.dirs && (b = Bn(b), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && (b.transition = n.transition), S = b, Qa(O), S;
}
const _p = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || mo(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, xp = (e, t) => {
  const n = {};
  for (const r in e)
    (!el(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function kp(e, t, n) {
  const { props: r, children: a, component: o } = e, { props: s, children: l, patchFlag: i } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && i >= 0) {
    if (i & 1024)
      return !0;
    if (i & 16)
      return r ? ci(r, s, c) : !!s;
    if (i & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (s[p] !== r[p] && !xo(c, p))
          return !0;
      }
    }
  } else
    return (a || l) && (!l || !l.$stable) ? !0 : r === s ? !1 : r ? s ? ci(r, s, c) : !0 : !!s;
  return !1;
}
function ci(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const o = r[a];
    if (t[o] !== e[o] && !xo(n, o))
      return !0;
  }
  return !1;
}
function Mp({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const cc = "components";
function Tp(e, t) {
  return fc(cc, e, !0, t) || e;
}
const dc = Symbol.for("v-ndc");
function Mo(e) {
  return at(e) ? fc(cc, e, !1) || e : e || dc;
}
function fc(e, t, n = !0, r = !1) {
  const a = vt || wt;
  if (a) {
    const o = a.type;
    {
      const l = xm(
        o,
        !1
      );
      if (l && (l === t || l === Qt(t) || l === yo(Qt(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      di(a[e] || o[e], t) || // global registration
      di(a.appContext[e], t)
    );
    return !s && r ? o : s;
  }
}
function di(e, t) {
  return e && (e[t] || e[Qt(t)] || e[yo(Qt(t))]);
}
const Pp = (e) => e.__isSuspense;
function Ap(e, t) {
  t && t.pendingBranch ? ke(e) ? t.effects.push(...e) : t.effects.push(e) : vp(e);
}
const Sp = Symbol.for("v-scx"), Cp = () => na(Sp);
function Dp(e, t) {
  return hl(
    e,
    null,
    { flush: "sync" }
  );
}
const Ra = {};
function ft(e, t, n) {
  return hl(e, t, n);
}
function hl(e, t, {
  immediate: n,
  deep: r,
  flush: a,
  once: o,
  onTrack: s,
  onTrigger: l
} = Je) {
  if (t && o) {
    const k = t;
    t = (...V) => {
      k(...V), E();
    };
  }
  const i = wt, c = (k) => r === !0 ? k : (
    // for deep: false, only traverse root-level properties
    ar(k, r === !1 ? 1 : void 0)
  );
  let u, d = !1, p = !1;
  if (ut(e) ? (u = () => e.value, d = Ga(e)) : $n(e) ? (u = () => c(e), d = !0) : ke(e) ? (p = !0, d = e.some((k) => $n(k) || Ga(k)), u = () => e.map((k) => {
    if (ut(k))
      return k.value;
    if ($n(k))
      return c(k);
    if (Se(k))
      return Nn(k, i, 2);
  })) : Se(e) ? t ? u = () => Nn(e, i, 2) : u = () => (g && g(), Ht(
    e,
    i,
    3,
    [v]
  )) : u = Yt, t && r) {
    const k = u;
    u = () => ar(k());
  }
  let g, v = (k) => {
    g = b.onStop = () => {
      Nn(k, i, 4), g = b.onStop = void 0;
    };
  }, y;
  if (Co)
    if (v = Yt, t ? n && Ht(t, i, 3, [
      u(),
      p ? [] : void 0,
      v
    ]) : u(), a === "sync") {
      const k = Cp();
      y = k.__watcherHandles || (k.__watcherHandles = []);
    } else
      return Yt;
  let S = p ? new Array(e.length).fill(Ra) : Ra;
  const $ = () => {
    if (!(!b.active || !b.dirty))
      if (t) {
        const k = b.run();
        (r || d || (p ? k.some((V, x) => pn(V, S[x])) : pn(k, S))) && (g && g(), Ht(t, i, 3, [
          k,
          // pass undefined as the old value when it's changed for the first time
          S === Ra ? void 0 : p && S[0] === Ra ? [] : S,
          v
        ]), S = k);
      } else
        b.run();
  };
  $.allowRecurse = !!t;
  let O;
  a === "sync" ? O = $ : a === "post" ? O = () => Ot($, i && i.suspense) : ($.pre = !0, i && ($.id = i.uid), O = () => ml($));
  const b = new al(u, Yt, O), T = rl(), E = () => {
    b.stop(), T && tl(T.effects, b);
  };
  return t ? n ? $() : S = b.run() : a === "post" ? Ot(
    b.run.bind(b),
    i && i.suspense
  ) : b.run(), y && y.push(E), E;
}
function Op(e, t, n) {
  const r = this.proxy, a = at(e) ? e.includes(".") ? pc(r, e) : () => r[e] : e.bind(r, r);
  let o;
  Se(t) ? o = t : (o = t.handler, n = t);
  const s = xa(this), l = hl(a, o.bind(r), n);
  return s(), l;
}
function pc(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
function ar(e, t, n = 0, r) {
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
    ar(e.value, t, n, r);
  else if (ke(e))
    for (let a = 0; a < e.length; a++)
      ar(e[a], t, n, r);
  else if (ho(e) || Tr(e))
    e.forEach((a) => {
      ar(a, t, n, r);
    });
  else if (Fu(e))
    for (const a in e)
      ar(e[a], t, n, r);
  return e;
}
function Vn(e, t) {
  if (vt === null)
    return e;
  const n = Do(vt) || vt.proxy, r = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [o, s, l, i = Je] = t[a];
    o && (Se(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ar(s), r.push({
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
function Kn(e, t, n, r) {
  const a = e.dirs, o = t && t.dirs;
  for (let s = 0; s < a.length; s++) {
    const l = a[s];
    o && (l.oldValue = o[s].value);
    let i = l.dir[r];
    i && (Un(), Ht(i, n, 8, [
      e.el,
      l,
      e,
      t
    ]), vr());
  }
}
const Cn = Symbol("_leaveCb"), $a = Symbol("_enterCb");
function Ep() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return xt(() => {
    e.isMounted = !0;
  }), vl(() => {
    e.isUnmounting = !0;
  }), e;
}
const Bt = [Function, Array], mc = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Bt,
  onEnter: Bt,
  onAfterEnter: Bt,
  onEnterCancelled: Bt,
  // leave
  onBeforeLeave: Bt,
  onLeave: Bt,
  onAfterLeave: Bt,
  onLeaveCancelled: Bt,
  // appear
  onBeforeAppear: Bt,
  onAppear: Bt,
  onAfterAppear: Bt,
  onAppearCancelled: Bt
}, Rp = {
  name: "BaseTransition",
  props: mc,
  setup(e, { slots: t }) {
    const n = _l(), r = Ep();
    return () => {
      const a = t.default && vc(t.default(), !0);
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
      const s = Be(e), { mode: l } = s;
      if (r.isLeaving)
        return Jo(o);
      const i = fi(o);
      if (!i)
        return Jo(o);
      const c = Ss(
        i,
        s,
        r,
        n
      );
      Cs(i, c);
      const u = n.subTree, d = u && fi(u);
      if (d && d.type !== jt && !nr(i, d)) {
        const p = Ss(
          d,
          s,
          r,
          n
        );
        if (Cs(d, p), l === "out-in")
          return r.isLeaving = !0, p.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, Jo(o);
        l === "in-out" && i.type !== jt && (p.delayLeave = (g, v, y) => {
          const S = hc(
            r,
            d
          );
          S[String(d.key)] = d, g[Cn] = () => {
            v(), g[Cn] = void 0, delete c.delayedLeave;
          }, c.delayedLeave = y;
        });
      }
      return o;
    };
  }
}, $p = Rp;
function hc(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Ss(e, t, n, r) {
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
    onAfterLeave: g,
    onLeaveCancelled: v,
    onBeforeAppear: y,
    onAppear: S,
    onAfterAppear: $,
    onAppearCancelled: O
  } = t, b = String(e.key), T = hc(n, e), E = (x, C) => {
    x && Ht(
      x,
      r,
      9,
      C
    );
  }, k = (x, C) => {
    const W = C[1];
    E(x, C), ke(x) ? x.every((Y) => Y.length <= 1) && W() : x.length <= 1 && W();
  }, V = {
    mode: o,
    persisted: s,
    beforeEnter(x) {
      let C = l;
      if (!n.isMounted)
        if (a)
          C = y || l;
        else
          return;
      x[Cn] && x[Cn](
        !0
        /* cancelled */
      );
      const W = T[b];
      W && nr(e, W) && W.el[Cn] && W.el[Cn](), E(C, [x]);
    },
    enter(x) {
      let C = i, W = c, Y = u;
      if (!n.isMounted)
        if (a)
          C = S || i, W = $ || c, Y = O || u;
        else
          return;
      let N = !1;
      const j = x[$a] = (U) => {
        N || (N = !0, U ? E(Y, [x]) : E(W, [x]), V.delayedLeave && V.delayedLeave(), x[$a] = void 0);
      };
      C ? k(C, [x, j]) : j();
    },
    leave(x, C) {
      const W = String(e.key);
      if (x[$a] && x[$a](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return C();
      E(d, [x]);
      let Y = !1;
      const N = x[Cn] = (j) => {
        Y || (Y = !0, C(), j ? E(v, [x]) : E(g, [x]), x[Cn] = void 0, T[W] === e && delete T[W]);
      };
      T[W] = e, p ? k(p, [x, N]) : N();
    },
    clone(x) {
      return Ss(x, t, n, r);
    }
  };
  return V;
}
function Jo(e) {
  if (To(e))
    return e = Bn(e), e.children = null, e;
}
function fi(e) {
  return To(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    e.children ? e.children[0] : void 0
  ) : e;
}
function Cs(e, t) {
  e.shapeFlag & 6 && e.component ? Cs(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function vc(e, t = !1, n) {
  let r = [], a = 0;
  for (let o = 0; o < e.length; o++) {
    let s = e[o];
    const l = n == null ? s.key : String(n) + String(s.key != null ? s.key : o);
    s.type === xe ? (s.patchFlag & 128 && a++, r = r.concat(
      vc(s.children, t, l)
    )) : (t || s.type !== jt) && r.push(l != null ? Bn(s, { key: l }) : s);
  }
  if (a > 1)
    for (let o = 0; o < r.length; o++)
      r[o].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Mt(e, t) {
  return Se(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    yt({ name: e.name }, t, { setup: e })
  ) : e;
}
const ea = (e) => !!e.type.__asyncLoader, To = (e) => e.type.__isKeepAlive;
function Np(e, t) {
  yc(e, "a", t);
}
function Vp(e, t) {
  yc(e, "da", t);
}
function yc(e, t, n = wt) {
  const r = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Po(t, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      To(a.parent.vnode) && Fp(r, t, n, a), a = a.parent;
  }
}
function Fp(e, t, n, r) {
  const a = Po(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Lr(() => {
    tl(r[t], a);
  }, n);
}
function Po(e, t, n = wt, r = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      Un();
      const l = xa(n), i = Ht(t, n, e, s);
      return l(), vr(), i;
    });
    return r ? a.unshift(o) : a.push(o), o;
  }
}
const bn = (e) => (t, n = wt) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Co || e === "sp") && Po(e, (...r) => t(...r), n)
), Ip = bn("bm"), xt = bn("m"), gc = bn("bu"), Lp = bn("u"), vl = bn("bum"), Lr = bn("um"), Bp = bn("sp"), Yp = bn(
  "rtg"
), Hp = bn(
  "rtc"
);
function jp(e, t = wt) {
  Po("ec", e, t);
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
  if (vt.isCE || vt.parent && ea(vt.parent) && vt.parent.isCE)
    return t !== "default" && (n.name = t), Qe("slot", n, r);
  let o = e[t];
  o && o._c && (o._d = !1), F();
  const s = o && bc(o(n)), l = De(
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
function bc(e) {
  return e.some((t) => Za(t) ? !(t.type === jt || t.type === xe && !bc(t.children)) : !0) ? e : null;
}
const Ds = (e) => e ? Ec(e) ? Do(e) || e.proxy : Ds(e.parent) : null, ta = (
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
    $parent: (e) => Ds(e.parent),
    $root: (e) => Ds(e.root),
    $emit: (e) => e.emit,
    $options: (e) => yl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, ml(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Xt.bind(e.proxy)),
    $watch: (e) => Op.bind(e)
  })
), Zo = (e, t) => e !== Je && !e.__isScriptSetup && Ye(e, t), Up = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: a, props: o, accessCache: s, type: l, appContext: i } = e;
    let c;
    if (t[0] !== "$") {
      const g = s[t];
      if (g !== void 0)
        switch (g) {
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
        if (Zo(r, t))
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
        Os && (s[t] = 0);
      }
    }
    const u = ta[t];
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
    return Zo(a, t) ? (a[t] = n, !0) : r !== Je && Ye(r, t) ? (r[t] = n, !0) : Ye(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, propsOptions: o }
  }, s) {
    let l;
    return !!n[s] || e !== Je && Ye(e, s) || Zo(t, s) || (l = o[0]) && Ye(l, s) || Ye(r, s) || Ye(ta, s) || Ye(a.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Ye(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function yr() {
  return Wp().slots;
}
function Wp() {
  const e = _l();
  return e.setupContext || (e.setupContext = $c(e));
}
function Xa(e) {
  return ke(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function wc(e, t) {
  return !e || !t ? e || t : ke(e) && ke(t) ? e.concat(t) : yt({}, Xa(e), Xa(t));
}
let Os = !0;
function qp(e) {
  const t = yl(e), n = e.proxy, r = e.ctx;
  Os = !1, t.beforeCreate && pi(t.beforeCreate, e, "bc");
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
    beforeUpdate: g,
    updated: v,
    activated: y,
    deactivated: S,
    beforeDestroy: $,
    beforeUnmount: O,
    destroyed: b,
    unmounted: T,
    render: E,
    renderTracked: k,
    renderTriggered: V,
    errorCaptured: x,
    serverPrefetch: C,
    // public API
    expose: W,
    inheritAttrs: Y,
    // assets
    components: N,
    directives: j,
    filters: U
  } = t;
  if (c && zp(c, r, null), s)
    for (const G in s) {
      const se = s[G];
      Se(se) && (r[G] = se.bind(n));
    }
  if (a) {
    const G = a.call(n, n);
    Xe(G) && (e.data = gn(G));
  }
  if (Os = !0, o)
    for (const G in o) {
      const se = o[G], pe = Se(se) ? se.bind(n, n) : Se(se.get) ? se.get.bind(n, n) : Yt, ee = !Se(se) && Se(se.set) ? se.set.bind(n) : Yt, m = re({
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
      _c(l[G], r, n, G);
  if (i) {
    const G = Se(i) ? i.call(n) : i;
    Reflect.ownKeys(G).forEach((se) => {
      Zp(se, G[se]);
    });
  }
  u && pi(u, e, "c");
  function P(G, se) {
    ke(se) ? se.forEach((pe) => G(pe.bind(n))) : se && G(se.bind(n));
  }
  if (P(Ip, d), P(xt, p), P(gc, g), P(Lp, v), P(Np, y), P(Vp, S), P(jp, x), P(Hp, k), P(Yp, V), P(vl, O), P(Lr, T), P(Bp, C), ke(W))
    if (W.length) {
      const G = e.exposed || (e.exposed = {});
      W.forEach((se) => {
        Object.defineProperty(G, se, {
          get: () => n[se],
          set: (pe) => n[se] = pe
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === Yt && (e.render = E), Y != null && (e.inheritAttrs = Y), N && (e.components = N), j && (e.directives = j);
}
function zp(e, t, n = Yt) {
  ke(e) && (e = Es(e));
  for (const r in e) {
    const a = e[r];
    let o;
    Xe(a) ? "default" in a ? o = na(
      a.from || r,
      a.default,
      !0
    ) : o = na(a.from || r) : o = na(a), ut(o) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[r] = o;
  }
}
function pi(e, t, n) {
  Ht(
    ke(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function _c(e, t, n, r) {
  const a = r.includes(".") ? pc(n, r) : () => n[r];
  if (at(e)) {
    const o = t[e];
    Se(o) && ft(a, o);
  } else if (Se(e))
    ft(a, e.bind(n));
  else if (Xe(e))
    if (ke(e))
      e.forEach((o) => _c(o, t, n, r));
    else {
      const o = Se(e.handler) ? e.handler.bind(n) : t[e.handler];
      Se(o) && ft(a, o, e);
    }
}
function yl(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: a,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = o.get(t);
  let i;
  return l ? i = l : !a.length && !n && !r ? i = t : (i = {}, a.length && a.forEach(
    (c) => Ja(i, c, s, !0)
  ), Ja(i, t, s)), Xe(t) && o.set(t, i), i;
}
function Ja(e, t, n, r = !1) {
  const { mixins: a, extends: o } = t;
  o && Ja(e, o, n, !0), a && a.forEach(
    (s) => Ja(e, s, n, !0)
  );
  for (const s in t)
    if (!(r && s === "expose")) {
      const l = Gp[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Gp = {
  data: mi,
  props: hi,
  emits: hi,
  // objects
  methods: Jr,
  computed: Jr,
  // lifecycle
  beforeCreate: St,
  created: St,
  beforeMount: St,
  mounted: St,
  beforeUpdate: St,
  updated: St,
  beforeDestroy: St,
  beforeUnmount: St,
  destroyed: St,
  unmounted: St,
  activated: St,
  deactivated: St,
  errorCaptured: St,
  serverPrefetch: St,
  // assets
  components: Jr,
  directives: Jr,
  // watch
  watch: Qp,
  // provide / inject
  provide: mi,
  inject: Kp
};
function mi(e, t) {
  return t ? e ? function() {
    return yt(
      Se(e) ? e.call(this, this) : e,
      Se(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Kp(e, t) {
  return Jr(Es(e), Es(t));
}
function Es(e) {
  if (ke(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function St(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Jr(e, t) {
  return e ? yt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function hi(e, t) {
  return e ? ke(e) && ke(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : yt(
    /* @__PURE__ */ Object.create(null),
    Xa(e),
    Xa(t ?? {})
  ) : t;
}
function Qp(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = yt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = St(e[r], t[r]);
  return n;
}
function xc() {
  return {
    app: null,
    config: {
      isNativeTag: _f,
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
let Xp = 0;
function Jp(e, t) {
  return function(r, a = null) {
    Se(r) || (r = yt({}, r)), a != null && !Xe(a) && (a = null);
    const o = xc(), s = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const i = o.app = {
      _uid: Xp++,
      _component: r,
      _props: a,
      _container: null,
      _context: o,
      _instance: null,
      version: Mm,
      get config() {
        return o.config;
      },
      set config(c) {
      },
      use(c, ...u) {
        return s.has(c) || (c && Se(c.install) ? (s.add(c), c.install(i, ...u)) : Se(c) && (s.add(c), c(i, ...u))), i;
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
          return p.appContext = o, d === !0 ? d = "svg" : d === !1 && (d = void 0), u && t ? t(p, c) : e(p, c, d), l = !0, i._container = c, c.__vue_app__ = i, Do(p.component) || p.component.proxy;
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
function Zp(e, t) {
  if (wt) {
    let n = wt.provides;
    const r = wt.parent && wt.parent.provides;
    r === n && (n = wt.provides = Object.create(r)), n[e] = t;
  }
}
function na(e, t, n = !1) {
  const r = wt || vt;
  if (r || Sr) {
    const a = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Sr._context.provides;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Se(t) ? t.call(r && r.proxy) : t;
  }
}
function em() {
  return !!(wt || vt || Sr);
}
function tm(e, t, n, r = !1) {
  const a = {}, o = {};
  qa(o, So, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), kc(e, t, a, o);
  for (const s in e.propsOptions[0])
    s in a || (a[s] = void 0);
  n ? e.props = r ? a : rp(a) : e.type.props ? e.props = a : e.props = o, e.attrs = o;
}
function nm(e, t, n, r) {
  const {
    props: a,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, l = Be(a), [i] = e.propsOptions;
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
        if (xo(e.emitsOptions, p))
          continue;
        const g = t[p];
        if (i)
          if (Ye(o, p))
            g !== o[p] && (o[p] = g, c = !0);
          else {
            const v = Qt(p);
            a[v] = Rs(
              i,
              l,
              v,
              g,
              e,
              !1
            );
          }
        else
          g !== o[p] && (o[p] = g, c = !0);
      }
    }
  } else {
    kc(e, t, a, o) && (c = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !Ye(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = jn(d)) === d || !Ye(t, u))) && (i ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[d] = Rs(
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
  c && yn(e, "set", "$attrs");
}
function kc(e, t, n, r) {
  const [a, o] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let i in t) {
      if (Zr(i))
        continue;
      const c = t[i];
      let u;
      a && Ye(a, u = Qt(i)) ? !o || !o.includes(u) ? n[u] = c : (l || (l = {}))[u] = c : xo(e.emitsOptions, i) || (!(i in r) || c !== r[i]) && (r[i] = c, s = !0);
    }
  if (o) {
    const i = Be(n), c = l || Je;
    for (let u = 0; u < o.length; u++) {
      const d = o[u];
      n[d] = Rs(
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
function Rs(e, t, n, r, a, o) {
  const s = e[n];
  if (s != null) {
    const l = Ye(s, "default");
    if (l && r === void 0) {
      const i = s.default;
      if (s.type !== Function && !s.skipFactory && Se(i)) {
        const { propsDefaults: c } = a;
        if (n in c)
          r = c[n];
        else {
          const u = xa(a);
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
    ] && (r === "" || r === jn(n)) && (r = !0));
  }
  return r;
}
function Mc(e, t, n = !1) {
  const r = t.propsCache, a = r.get(e);
  if (a)
    return a;
  const o = e.props, s = {}, l = [];
  let i = !1;
  if (!Se(e)) {
    const u = (d) => {
      i = !0;
      const [p, g] = Mc(d, t, !0);
      yt(s, p), g && l.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!o && !i)
    return Xe(e) && r.set(e, Mr), Mr;
  if (ke(o))
    for (let u = 0; u < o.length; u++) {
      const d = Qt(o[u]);
      vi(d) && (s[d] = Je);
    }
  else if (o)
    for (const u in o) {
      const d = Qt(u);
      if (vi(d)) {
        const p = o[u], g = s[d] = ke(p) || Se(p) ? { type: p } : yt({}, p);
        if (g) {
          const v = bi(Boolean, g.type), y = bi(String, g.type);
          g[
            0
            /* shouldCast */
          ] = v > -1, g[
            1
            /* shouldCastTrue */
          ] = y < 0 || v < y, (v > -1 || Ye(g, "default")) && l.push(d);
        }
      }
    }
  const c = [s, l];
  return Xe(e) && r.set(e, c), c;
}
function vi(e) {
  return e[0] !== "$" && !Zr(e);
}
function yi(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function gi(e, t) {
  return yi(e) === yi(t);
}
function bi(e, t) {
  return ke(t) ? t.findIndex((n) => gi(n, e)) : Se(t) && gi(t, e) ? 0 : -1;
}
const Tc = (e) => e[0] === "_" || e === "$stable", gl = (e) => ke(e) ? e.map(an) : [an(e)], rm = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ve((...a) => gl(t(...a)), n);
  return r._c = !1, r;
}, Pc = (e, t, n) => {
  const r = e._ctx;
  for (const a in e) {
    if (Tc(a))
      continue;
    const o = e[a];
    if (Se(o))
      t[a] = rm(a, o, r);
    else if (o != null) {
      const s = gl(o);
      t[a] = () => s;
    }
  }
}, Ac = (e, t) => {
  const n = gl(t);
  e.slots.default = () => n;
}, am = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = Be(t), qa(t, "_", n)) : Pc(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Ac(e, t);
  qa(e.slots, So, 1);
}, om = (e, t, n) => {
  const { vnode: r, slots: a } = e;
  let o = !0, s = Je;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : (yt(a, t), !n && l === 1 && delete a._) : (o = !t.$stable, Pc(t, a)), s = t;
  } else t && (Ac(e, t), s = { default: 1 });
  if (o)
    for (const l in a)
      !Tc(l) && s[l] == null && delete a[l];
};
function $s(e, t, n, r, a = !1) {
  if (ke(e)) {
    e.forEach(
      (p, g) => $s(
        p,
        t && (ke(t) ? t[g] : t),
        n,
        r,
        a
      )
    );
    return;
  }
  if (ea(r) && !a)
    return;
  const o = r.shapeFlag & 4 ? Do(r.component) || r.component.proxy : r.el, s = a ? null : o, { i: l, r: i } = e, c = t && t.r, u = l.refs === Je ? l.refs = {} : l.refs, d = l.setupState;
  if (c != null && c !== i && (at(c) ? (u[c] = null, Ye(d, c) && (d[c] = null)) : ut(c) && (c.value = null)), Se(i))
    Nn(i, l, 12, [s, u]);
  else {
    const p = at(i), g = ut(i);
    if (p || g) {
      const v = () => {
        if (e.f) {
          const y = p ? Ye(d, i) ? d[i] : u[i] : i.value;
          a ? ke(y) && tl(y, o) : ke(y) ? y.includes(o) || y.push(o) : p ? (u[i] = [o], Ye(d, i) && (d[i] = u[i])) : (i.value = [o], e.k && (u[e.k] = i.value));
        } else p ? (u[i] = s, Ye(d, i) && (d[i] = s)) : g && (i.value = s, e.k && (u[e.k] = s));
      };
      s ? (v.id = -1, Ot(v, n)) : v();
    }
  }
}
const Ot = Ap;
function sm(e) {
  return lm(e);
}
function lm(e, t) {
  const n = Iu();
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
    setScopeId: g = Yt,
    insertStaticContent: v
  } = e, y = (h, w, I, K = null, D = null, ae = null, ie = void 0, le = null, ue = !!w.dynamicChildren) => {
    if (h === w)
      return;
    h && !nr(h, w) && (K = Oe(h), f(h, D, ae, !0), h = null), w.patchFlag === -2 && (ue = !1, w.dynamicChildren = null);
    const { type: ne, ref: de, shapeFlag: me } = w;
    switch (ne) {
      case Ao:
        S(h, w, I, K);
        break;
      case jt:
        $(h, w, I, K);
        break;
      case ts:
        h == null && O(w, I, K, ie);
        break;
      case xe:
        N(
          h,
          w,
          I,
          K,
          D,
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
          D,
          ae,
          ie,
          le,
          ue
        ) : me & 6 ? j(
          h,
          w,
          I,
          K,
          D,
          ae,
          ie,
          le,
          ue
        ) : (me & 64 || me & 128) && ne.process(
          h,
          w,
          I,
          K,
          D,
          ae,
          ie,
          le,
          ue,
          ve
        );
    }
    de != null && D && $s(de, h && h.ref, ae, w || h, !w);
  }, S = (h, w, I, K) => {
    if (h == null)
      r(
        w.el = l(w.children),
        I,
        K
      );
    else {
      const D = w.el = h.el;
      w.children !== h.children && c(D, w.children);
    }
  }, $ = (h, w, I, K) => {
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
  }, b = ({ el: h, anchor: w }, I, K) => {
    let D;
    for (; h && h !== w; )
      D = p(h), r(h, I, K), h = D;
    r(w, I, K);
  }, T = ({ el: h, anchor: w }) => {
    let I;
    for (; h && h !== w; )
      I = p(h), a(h), h = I;
    a(w);
  }, E = (h, w, I, K, D, ae, ie, le, ue) => {
    w.type === "svg" ? ie = "svg" : w.type === "math" && (ie = "mathml"), h == null ? k(
      w,
      I,
      K,
      D,
      ae,
      ie,
      le,
      ue
    ) : C(
      h,
      w,
      D,
      ae,
      ie,
      le,
      ue
    );
  }, k = (h, w, I, K, D, ae, ie, le) => {
    let ue, ne;
    const { props: de, shapeFlag: me, transition: be, dirs: Te } = h;
    if (ue = h.el = s(
      h.type,
      ae,
      de && de.is,
      de
    ), me & 8 ? u(ue, h.children) : me & 16 && x(
      h.children,
      ue,
      null,
      K,
      D,
      es(h, ae),
      ie,
      le
    ), Te && Kn(h, null, K, "created"), V(ue, h, h.scopeId, ie, K), de) {
      for (const He in de)
        He !== "value" && !Zr(He) && o(
          ue,
          He,
          null,
          de[He],
          ae,
          h.children,
          K,
          D,
          L
        );
      "value" in de && o(ue, "value", null, de.value, ae), (ne = de.onVnodeBeforeMount) && nn(ne, K, h);
    }
    Te && Kn(h, null, K, "beforeMount");
    const Re = im(D, be);
    Re && be.beforeEnter(ue), r(ue, w, I), ((ne = de && de.onVnodeMounted) || Re || Te) && Ot(() => {
      ne && nn(ne, K, h), Re && be.enter(ue), Te && Kn(h, null, K, "mounted");
    }, D);
  }, V = (h, w, I, K, D) => {
    if (I && g(h, I), K)
      for (let ae = 0; ae < K.length; ae++)
        g(h, K[ae]);
    if (D) {
      let ae = D.subTree;
      if (w === ae) {
        const ie = D.vnode;
        V(
          h,
          ie,
          ie.scopeId,
          ie.slotScopeIds,
          D.parent
        );
      }
    }
  }, x = (h, w, I, K, D, ae, ie, le, ue = 0) => {
    for (let ne = ue; ne < h.length; ne++) {
      const de = h[ne] = le ? Dn(h[ne]) : an(h[ne]);
      y(
        null,
        de,
        w,
        I,
        K,
        D,
        ae,
        ie,
        le
      );
    }
  }, C = (h, w, I, K, D, ae, ie) => {
    const le = w.el = h.el;
    let { patchFlag: ue, dynamicChildren: ne, dirs: de } = w;
    ue |= h.patchFlag & 16;
    const me = h.props || Je, be = w.props || Je;
    let Te;
    if (I && Qn(I, !1), (Te = be.onVnodeBeforeUpdate) && nn(Te, I, w, h), de && Kn(w, h, I, "beforeUpdate"), I && Qn(I, !0), ne ? W(
      h.dynamicChildren,
      ne,
      le,
      I,
      K,
      es(w, D),
      ae
    ) : ie || se(
      h,
      w,
      le,
      null,
      I,
      K,
      es(w, D),
      ae,
      !1
    ), ue > 0) {
      if (ue & 16)
        Y(
          le,
          w,
          me,
          be,
          I,
          K,
          D
        );
      else if (ue & 2 && me.class !== be.class && o(le, "class", null, be.class, D), ue & 4 && o(le, "style", me.style, be.style, D), ue & 8) {
        const Re = w.dynamicProps;
        for (let He = 0; He < Re.length; He++) {
          const Ge = Re[He], lt = me[Ge], B = be[Ge];
          (B !== lt || Ge === "value") && o(
            le,
            Ge,
            lt,
            B,
            D,
            h.children,
            I,
            K,
            L
          );
        }
      }
      ue & 1 && h.children !== w.children && u(le, w.children);
    } else !ie && ne == null && Y(
      le,
      w,
      me,
      be,
      I,
      K,
      D
    );
    ((Te = be.onVnodeUpdated) || de) && Ot(() => {
      Te && nn(Te, I, w, h), de && Kn(w, h, I, "updated");
    }, K);
  }, W = (h, w, I, K, D, ae, ie) => {
    for (let le = 0; le < w.length; le++) {
      const ue = h[le], ne = w[le], de = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ue.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ue.type === xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !nr(ue, ne) || // - In the case of a component, it could contain anything.
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
        D,
        ae,
        ie,
        !0
      );
    }
  }, Y = (h, w, I, K, D, ae, ie) => {
    if (I !== K) {
      if (I !== Je)
        for (const le in I)
          !Zr(le) && !(le in K) && o(
            h,
            le,
            I[le],
            null,
            ie,
            w.children,
            D,
            ae,
            L
          );
      for (const le in K) {
        if (Zr(le))
          continue;
        const ue = K[le], ne = I[le];
        ue !== ne && le !== "value" && o(
          h,
          le,
          ne,
          ue,
          ie,
          w.children,
          D,
          ae,
          L
        );
      }
      "value" in K && o(h, "value", I.value, K.value, ie);
    }
  }, N = (h, w, I, K, D, ae, ie, le, ue) => {
    const ne = w.el = h ? h.el : l(""), de = w.anchor = h ? h.anchor : l("");
    let { patchFlag: me, dynamicChildren: be, slotScopeIds: Te } = w;
    Te && (le = le ? le.concat(Te) : Te), h == null ? (r(ne, I, K), r(de, I, K), x(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      I,
      de,
      D,
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
      D,
      ae,
      ie,
      le
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || D && w === D.subTree) && bl(
      h,
      w,
      !0
      /* shallow */
    )) : se(
      h,
      w,
      I,
      de,
      D,
      ae,
      ie,
      le,
      ue
    );
  }, j = (h, w, I, K, D, ae, ie, le, ue) => {
    w.slotScopeIds = le, h == null ? w.shapeFlag & 512 ? D.ctx.activate(
      w,
      I,
      K,
      ie,
      ue
    ) : U(
      w,
      I,
      K,
      D,
      ae,
      ie,
      ue
    ) : _(h, w, ue);
  }, U = (h, w, I, K, D, ae, ie) => {
    const le = h.component = gm(
      h,
      K,
      D
    );
    if (To(h) && (le.ctx.renderer = ve), bm(le), le.asyncDep) {
      if (D && D.registerDep(le, P), !h.el) {
        const ue = le.subTree = Qe(jt);
        $(null, ue, w, I);
      }
    } else
      P(
        le,
        h,
        w,
        I,
        D,
        ae,
        ie
      );
  }, _ = (h, w, I) => {
    const K = w.component = h.component;
    if (kp(h, w, I))
      if (K.asyncDep && !K.asyncResolved) {
        G(K, w, I);
        return;
      } else
        K.next = w, hp(K.update), K.effect.dirty = !0, K.update();
    else
      w.el = h.el, K.vnode = w;
  }, P = (h, w, I, K, D, ae, ie) => {
    const le = () => {
      if (h.isMounted) {
        let { next: de, bu: me, u: be, parent: Te, vnode: Re } = h;
        {
          const oe = Sc(h);
          if (oe) {
            de && (de.el = Re.el, G(h, de, ie)), oe.asyncDep.then(() => {
              h.isUnmounted || le();
            });
            return;
          }
        }
        let He = de, Ge;
        Qn(h, !1), de ? (de.el = Re.el, G(h, de, ie)) : de = Re, me && Ba(me), (Ge = de.props && de.props.onVnodeBeforeUpdate) && nn(Ge, Te, de, Re), Qn(h, !0);
        const lt = Xo(h), B = h.subTree;
        h.subTree = lt, y(
          B,
          lt,
          // parent may have changed if it's in a teleport
          d(B.el),
          // anchor may have changed if it's in a fragment
          Oe(B),
          h,
          D,
          ae
        ), de.el = lt.el, He === null && Mp(h, lt.el), be && Ot(be, D), (Ge = de.props && de.props.onVnodeUpdated) && Ot(
          () => nn(Ge, Te, de, Re),
          D
        );
      } else {
        let de;
        const { el: me, props: be } = w, { bm: Te, m: Re, parent: He } = h, Ge = ea(w);
        if (Qn(h, !1), Te && Ba(Te), !Ge && (de = be && be.onVnodeBeforeMount) && nn(de, He, w), Qn(h, !0), me && A) {
          const lt = () => {
            h.subTree = Xo(h), A(
              me,
              h.subTree,
              h,
              D,
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
          const lt = h.subTree = Xo(h);
          y(
            null,
            lt,
            I,
            K,
            h,
            D,
            ae
          ), w.el = lt.el;
        }
        if (Re && Ot(Re, D), !Ge && (de = be && be.onVnodeMounted)) {
          const lt = w;
          Ot(
            () => nn(de, He, lt),
            D
          );
        }
        (w.shapeFlag & 256 || He && ea(He.vnode) && He.vnode.shapeFlag & 256) && h.a && Ot(h.a, D), h.isMounted = !0, w = I = K = null;
      }
    }, ue = h.effect = new al(
      le,
      Yt,
      () => ml(ne),
      h.scope
      // track it in component's effect scope
    ), ne = h.update = () => {
      ue.dirty && ue.run();
    };
    ne.id = h.uid, Qn(h, !0), ne();
  }, G = (h, w, I) => {
    w.component = h;
    const K = h.vnode.props;
    h.vnode = w, h.next = null, nm(h, w.props, K, I), om(h, w.children, I), Un(), ui(h), vr();
  }, se = (h, w, I, K, D, ae, ie, le, ue = !1) => {
    const ne = h && h.children, de = h ? h.shapeFlag : 0, me = w.children, { patchFlag: be, shapeFlag: Te } = w;
    if (be > 0) {
      if (be & 128) {
        ee(
          ne,
          me,
          I,
          K,
          D,
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
          D,
          ae,
          ie,
          le,
          ue
        );
        return;
      }
    }
    Te & 8 ? (de & 16 && L(ne, D, ae), me !== ne && u(I, me)) : de & 16 ? Te & 16 ? ee(
      ne,
      me,
      I,
      K,
      D,
      ae,
      ie,
      le,
      ue
    ) : L(ne, D, ae, !0) : (de & 8 && u(I, ""), Te & 16 && x(
      me,
      I,
      K,
      D,
      ae,
      ie,
      le,
      ue
    ));
  }, pe = (h, w, I, K, D, ae, ie, le, ue) => {
    h = h || Mr, w = w || Mr;
    const ne = h.length, de = w.length, me = Math.min(ne, de);
    let be;
    for (be = 0; be < me; be++) {
      const Te = w[be] = ue ? Dn(w[be]) : an(w[be]);
      y(
        h[be],
        Te,
        I,
        null,
        D,
        ae,
        ie,
        le,
        ue
      );
    }
    ne > de ? L(
      h,
      D,
      ae,
      !0,
      !1,
      me
    ) : x(
      w,
      I,
      K,
      D,
      ae,
      ie,
      le,
      ue,
      me
    );
  }, ee = (h, w, I, K, D, ae, ie, le, ue) => {
    let ne = 0;
    const de = w.length;
    let me = h.length - 1, be = de - 1;
    for (; ne <= me && ne <= be; ) {
      const Te = h[ne], Re = w[ne] = ue ? Dn(w[ne]) : an(w[ne]);
      if (nr(Te, Re))
        y(
          Te,
          Re,
          I,
          null,
          D,
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
      const Te = h[me], Re = w[be] = ue ? Dn(w[be]) : an(w[be]);
      if (nr(Te, Re))
        y(
          Te,
          Re,
          I,
          null,
          D,
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
            w[ne] = ue ? Dn(w[ne]) : an(w[ne]),
            I,
            Re,
            D,
            ae,
            ie,
            le,
            ue
          ), ne++;
      }
    } else if (ne > be)
      for (; ne <= me; )
        f(h[ne], D, ae, !0), ne++;
    else {
      const Te = ne, Re = ne, He = /* @__PURE__ */ new Map();
      for (ne = Re; ne <= be; ne++) {
        const he = w[ne] = ue ? Dn(w[ne]) : an(w[ne]);
        he.key != null && He.set(he.key, ne);
      }
      let Ge, lt = 0;
      const B = be - Re + 1;
      let oe = !1, _e = 0;
      const Pe = new Array(B);
      for (ne = 0; ne < B; ne++)
        Pe[ne] = 0;
      for (ne = Te; ne <= me; ne++) {
        const he = h[ne];
        if (lt >= B) {
          f(he, D, ae, !0);
          continue;
        }
        let ye;
        if (he.key != null)
          ye = He.get(he.key);
        else
          for (Ge = Re; Ge <= be; Ge++)
            if (Pe[Ge - Re] === 0 && nr(he, w[Ge])) {
              ye = Ge;
              break;
            }
        ye === void 0 ? f(he, D, ae, !0) : (Pe[ye - Re] = ne + 1, ye >= _e ? _e = ye : oe = !0, y(
          he,
          w[ye],
          I,
          null,
          D,
          ae,
          ie,
          le,
          ue
        ), lt++);
      }
      const te = oe ? um(Pe) : Mr;
      for (Ge = te.length - 1, ne = B - 1; ne >= 0; ne--) {
        const he = Re + ne, ye = w[he], Lt = he + 1 < de ? w[he + 1].el : K;
        Pe[ne] === 0 ? y(
          null,
          ye,
          I,
          Lt,
          D,
          ae,
          ie,
          le,
          ue
        ) : oe && (Ge < 0 || ne !== te[Ge] ? m(ye, I, Lt, 2) : Ge--);
      }
    }
  }, m = (h, w, I, K, D = null) => {
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
    if (ie === ts) {
      b(h, w, I);
      return;
    }
    if (K !== 2 && ne & 1 && le)
      if (K === 0)
        le.beforeEnter(ae), r(ae, w, I), Ot(() => le.enter(ae), D);
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
  }, f = (h, w, I, K = !1, D = !1) => {
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
    if (le != null && $s(le, null, I, h, !0), de & 256) {
      w.ctx.deactivate(h);
      return;
    }
    const Te = de & 1 && be, Re = !ea(h);
    let He;
    if (Re && (He = ie && ie.onVnodeBeforeUnmount) && nn(He, w, h), de & 6)
      ce(h.component, I, K);
    else {
      if (de & 128) {
        h.suspense.unmount(I, K);
        return;
      }
      Te && Kn(h, null, w, "beforeUnmount"), de & 64 ? h.type.remove(
        h,
        w,
        I,
        D,
        ve,
        K
      ) : ne && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ae !== xe || me > 0 && me & 64) ? L(
        ne,
        w,
        I,
        !1,
        !0
      ) : (ae === xe && me & 384 || !D && de & 16) && L(ue, w, I), K && R(h);
    }
    (Re && (He = ie && ie.onVnodeUnmounted) || Te) && Ot(() => {
      He && nn(He, w, h), Te && Kn(h, null, w, "unmounted");
    }, I);
  }, R = (h) => {
    const { type: w, el: I, anchor: K, transition: D } = h;
    if (w === xe) {
      Q(I, K);
      return;
    }
    if (w === ts) {
      T(h);
      return;
    }
    const ae = () => {
      a(I), D && !D.persisted && D.afterLeave && D.afterLeave();
    };
    if (h.shapeFlag & 1 && D && !D.persisted) {
      const { leave: ie, delayLeave: le } = D, ue = () => ie(I, ae);
      le ? le(h.el, ae, ue) : ue();
    } else
      ae();
  }, Q = (h, w) => {
    let I;
    for (; h !== w; )
      I = p(h), a(h), h = I;
    a(w);
  }, ce = (h, w, I) => {
    const { bum: K, scope: D, update: ae, subTree: ie, um: le } = h;
    K && Ba(K), D.stop(), ae && (ae.active = !1, f(ie, h, w, I)), le && Ot(le, w), Ot(() => {
      h.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve());
  }, L = (h, w, I, K = !1, D = !1, ae = 0) => {
    for (let ie = ae; ie < h.length; ie++)
      f(h[ie], w, I, K, D);
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
    ), Fe || (Fe = !0, ui(), lc(), Fe = !1), w._vnode = h;
  }, ve = {
    p: y,
    um: f,
    m,
    r: R,
    mt: U,
    mc: x,
    pc: se,
    pbc: W,
    n: Oe,
    o: e
  };
  let Ee, A;
  return {
    render: H,
    hydrate: Ee,
    createApp: Jp(H, Ee)
  };
}
function es({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Qn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function im(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function bl(e, t, n = !1) {
  const r = e.children, a = t.children;
  if (ke(r) && ke(a))
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      let l = a[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = a[o] = Dn(a[o]), l.el = s.el), n || bl(s, l)), l.type === Ao && (l.el = s.el);
    }
}
function um(e) {
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
function Sc(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Sc(t);
}
const cm = (e) => e.__isTeleport, ra = (e) => e && (e.disabled || e.disabled === ""), wi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, _i = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ns = (e, t) => {
  const n = e && e.to;
  return at(n) ? t ? t(n) : null : n;
}, dm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, a, o, s, l, i, c) {
    const {
      mc: u,
      pc: d,
      pbc: p,
      o: { insert: g, querySelector: v, createText: y, createComment: S }
    } = c, $ = ra(t.props);
    let { shapeFlag: O, children: b, dynamicChildren: T } = t;
    if (e == null) {
      const E = t.el = y(""), k = t.anchor = y("");
      g(E, n, r), g(k, n, r);
      const V = t.target = Ns(t.props, v), x = t.targetAnchor = y("");
      V && (g(x, V), s === "svg" || wi(V) ? s = "svg" : (s === "mathml" || _i(V)) && (s = "mathml"));
      const C = (W, Y) => {
        O & 16 && u(
          b,
          W,
          Y,
          a,
          o,
          s,
          l,
          i
        );
      };
      $ ? C(n, k) : V && C(V, x);
    } else {
      t.el = e.el;
      const E = t.anchor = e.anchor, k = t.target = e.target, V = t.targetAnchor = e.targetAnchor, x = ra(e.props), C = x ? n : k, W = x ? E : V;
      if (s === "svg" || wi(k) ? s = "svg" : (s === "mathml" || _i(k)) && (s = "mathml"), T ? (p(
        e.dynamicChildren,
        T,
        C,
        a,
        o,
        s,
        l
      ), bl(e, t, !0)) : i || d(
        e,
        t,
        C,
        W,
        a,
        o,
        s,
        l,
        !1
      ), $)
        x ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Na(
          t,
          n,
          E,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Y = t.target = Ns(
          t.props,
          v
        );
        Y && Na(
          t,
          Y,
          null,
          c,
          0
        );
      } else x && Na(
        t,
        k,
        V,
        c,
        1
      );
    }
    Cc(t);
  },
  remove(e, t, n, r, { um: a, o: { remove: o } }, s) {
    const { shapeFlag: l, children: i, anchor: c, targetAnchor: u, target: d, props: p } = e;
    if (d && o(u), s && o(c), l & 16) {
      const g = s || !ra(p);
      for (let v = 0; v < i.length; v++) {
        const y = i[v];
        a(
          y,
          t,
          n,
          g,
          !!y.dynamicChildren
        );
      }
    }
  },
  move: Na,
  hydrate: fm
};
function Na(e, t, n, { o: { insert: r }, m: a }, o = 2) {
  o === 0 && r(e.targetAnchor, t, n);
  const { el: s, anchor: l, shapeFlag: i, children: c, props: u } = e, d = o === 2;
  if (d && r(s, t, n), (!d || ra(u)) && i & 16)
    for (let p = 0; p < c.length; p++)
      a(
        c[p],
        t,
        n,
        2
      );
  d && r(l, t, n);
}
function fm(e, t, n, r, a, o, {
  o: { nextSibling: s, parentNode: l, querySelector: i }
}, c) {
  const u = t.target = Ns(
    t.props,
    i
  );
  if (u) {
    const d = u._lpa || u.firstChild;
    if (t.shapeFlag & 16)
      if (ra(t.props))
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
    Cc(t);
  }
  return t.anchor && s(t.anchor);
}
const pm = dm;
function Cc(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const xe = Symbol.for("v-fgt"), Ao = Symbol.for("v-txt"), jt = Symbol.for("v-cmt"), ts = Symbol.for("v-stc"), aa = [];
let zt = null;
function F(e = !1) {
  aa.push(zt = e ? null : []);
}
function mm() {
  aa.pop(), zt = aa[aa.length - 1] || null;
}
let pa = 1;
function xi(e) {
  pa += e;
}
function Dc(e) {
  return e.dynamicChildren = pa > 0 ? zt || Mr : null, mm(), pa > 0 && zt && zt.push(e), e;
}
function z(e, t, n, r, a, o) {
  return Dc(
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
function De(e, t, n, r, a) {
  return Dc(
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
function Za(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function nr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const So = "__vInternal", Oc = ({ key: e }) => e ?? null, Ya = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? at(e) || ut(e) || Se(e) ? { i: vt, r: e, k: t, f: !!n } : e : null);
function we(e, t = null, n = null, r = 0, a = null, o = e === xe ? 0 : 1, s = !1, l = !1) {
  const i = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Oc(t),
    ref: t && Ya(t),
    scopeId: ko,
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
  return l ? (wl(i, n), o & 128 && e.normalize(i)) : n && (i.shapeFlag |= at(n) ? 8 : 16), pa > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  zt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (i.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  i.patchFlag !== 32 && zt.push(i), i;
}
const Qe = hm;
function hm(e, t = null, n = null, r = 0, a = null, o = !1) {
  if ((!e || e === dc) && (e = jt), Za(e)) {
    const l = Bn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && wl(l, n), pa > 0 && !o && zt && (l.shapeFlag & 6 ? zt[zt.indexOf(e)] = l : zt.push(l)), l.patchFlag |= -2, l;
  }
  if (km(e) && (e = e.__vccOpts), t) {
    t = Pt(t);
    let { class: l, style: i } = t;
    l && !at(l) && (t.class = Ne(l)), Xe(i) && (tc(i) && !ke(i) && (i = yt({}, i)), t.style = Ct(i));
  }
  const s = at(e) ? 1 : Pp(e) ? 128 : cm(e) ? 64 : Xe(e) ? 4 : Se(e) ? 2 : 0;
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
  return e ? tc(e) || So in e ? yt({}, e) : e : null;
}
function Bn(e, t, n = !1) {
  const { props: r, ref: a, patchFlag: o, children: s } = e, l = t ? _t(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Oc(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? ke(a) ? a.concat(Ya(t)) : [a, Ya(t)] : Ya(t)
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
    ssContent: e.ssContent && Bn(e.ssContent),
    ssFallback: e.ssFallback && Bn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Jt(e = " ", t = 0) {
  return Qe(Ao, null, e, t);
}
function X(e = "", t = !1) {
  return t ? (F(), De(jt, null, e)) : Qe(jt, null, e);
}
function an(e) {
  return e == null || typeof e == "boolean" ? Qe(jt) : ke(e) ? Qe(
    xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Dn(e) : Qe(Ao, null, String(e));
}
function Dn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Bn(e);
}
function wl(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (ke(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), wl(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !(So in t) ? t._ctx = vt : a === 3 && vt && (vt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Se(t) ? (t = { default: t, _ctx: vt }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Jt(t)]) : n = 8);
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
      else if (mo(a)) {
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
const vm = xc();
let ym = 0;
function gm(e, t, n) {
  const r = e.type, a = (t ? t.appContext : e.appContext) || vm, o = {
    uid: ym++,
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
    scope: new Yu(
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
    propsOptions: Mc(r, a),
    emitsOptions: uc(r, a),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = gp.bind(null, o), e.ce && e.ce(o), o;
}
let wt = null;
const _l = () => wt || vt;
let eo, Vs;
{
  const e = Iu(), t = (n, r) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(r), (o) => {
      a.length > 1 ? a.forEach((s) => s(o)) : a[0](o);
    };
  };
  eo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => wt = n
  ), Vs = t(
    "__VUE_SSR_SETTERS__",
    (n) => Co = n
  );
}
const xa = (e) => {
  const t = wt;
  return eo(e), e.scope.on(), () => {
    e.scope.off(), eo(t);
  };
}, ki = () => {
  wt && wt.scope.off(), eo(null);
};
function Ec(e) {
  return e.vnode.shapeFlag & 4;
}
let Co = !1;
function bm(e, t = !1) {
  t && Vs(t);
  const { props: n, children: r } = e.vnode, a = Ec(e);
  tm(e, n, a, t), am(e, r);
  const o = a ? wm(e, t) : void 0;
  return t && Vs(!1), o;
}
function wm(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = wo(new Proxy(e.ctx, Up));
  const { setup: r } = n;
  if (r) {
    const a = e.setupContext = r.length > 1 ? $c(e) : null, o = xa(e);
    Un();
    const s = Nn(
      r,
      e,
      0,
      [
        e.props,
        a
      ]
    );
    if (vr(), o(), Nu(s)) {
      if (s.then(ki, ki), t)
        return s.then((l) => {
          Mi(e, l, t);
        }).catch((l) => {
          _o(l, e, 0);
        });
      e.asyncDep = s;
    } else
      Mi(e, s, t);
  } else
    Rc(e, t);
}
function Mi(e, t, n) {
  Se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Xe(t) && (e.setupState = rc(t)), Rc(e, n);
}
let Ti;
function Rc(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && Ti && !r.render) {
      const a = r.template || yl(e).template;
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
        r.render = Ti(a, c);
      }
    }
    e.render = r.render || Yt;
  }
  {
    const a = xa(e);
    Un();
    try {
      qp(e);
    } finally {
      vr(), a();
    }
  }
}
function _m(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    {
      get(t, n) {
        return $t(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function $c(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    get attrs() {
      return _m(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Do(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(rc(wo(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ta)
          return ta[n](e);
      },
      has(t, n) {
        return n in t || n in ta;
      }
    }));
}
function xm(e, t = !0) {
  return Se(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function km(e) {
  return Se(e) && "__vccOpts" in e;
}
const re = (e, t) => ap(e, t, Co);
function Fs(e, t, n = Je) {
  const r = _l(), a = Qt(t), o = jn(t), s = up((i, c) => {
    let u;
    return Dp(() => {
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
function Nc(e, t, n) {
  const r = arguments.length;
  return r === 2 ? Xe(t) && !ke(t) ? Za(t) ? Qe(e, null, [t]) : Qe(e, t) : Qe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Za(n) && (n = [n]), Qe(e, t, n));
}
const Mm = "3.4.21";
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Tm = "http://www.w3.org/2000/svg", Pm = "http://www.w3.org/1998/Math/MathML", On = typeof document < "u" ? document : null, Pi = On && /* @__PURE__ */ On.createElement("template"), Am = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const a = t === "svg" ? On.createElementNS(Tm, e) : t === "mathml" ? On.createElementNS(Pm, e) : On.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (e) => On.createTextNode(e),
  createComment: (e) => On.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => On.querySelector(e),
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
      Pi.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const l = Pi.content;
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
}, xn = "transition", Wr = "animation", ma = Symbol("_vtc"), Wn = (e, { slots: t }) => Nc($p, Sm(e), t);
Wn.displayName = "Transition";
const Vc = {
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
Wn.props = /* @__PURE__ */ yt(
  {},
  mc,
  Vc
);
const Xn = (e, t = []) => {
  ke(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ai = (e) => e ? ke(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Sm(e) {
  const t = {};
  for (const N in e)
    N in Vc || (t[N] = e[N]);
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
    leaveToClass: g = `${n}-leave-to`
  } = e, v = Cm(a), y = v && v[0], S = v && v[1], {
    onBeforeEnter: $,
    onEnter: O,
    onEnterCancelled: b,
    onLeave: T,
    onLeaveCancelled: E,
    onBeforeAppear: k = $,
    onAppear: V = O,
    onAppearCancelled: x = b
  } = t, C = (N, j, U) => {
    Jn(N, j ? u : l), Jn(N, j ? c : s), U && U();
  }, W = (N, j) => {
    N._isLeaving = !1, Jn(N, d), Jn(N, g), Jn(N, p), j && j();
  }, Y = (N) => (j, U) => {
    const _ = N ? V : O, P = () => C(j, N, U);
    Xn(_, [j, P]), Si(() => {
      Jn(j, N ? i : o), kn(j, N ? u : l), Ai(_) || Ci(j, r, y, P);
    });
  };
  return yt(t, {
    onBeforeEnter(N) {
      Xn($, [N]), kn(N, o), kn(N, s);
    },
    onBeforeAppear(N) {
      Xn(k, [N]), kn(N, i), kn(N, c);
    },
    onEnter: Y(!1),
    onAppear: Y(!0),
    onLeave(N, j) {
      N._isLeaving = !0;
      const U = () => W(N, j);
      kn(N, d), Em(), kn(N, p), Si(() => {
        N._isLeaving && (Jn(N, d), kn(N, g), Ai(T) || Ci(N, r, S, U));
      }), Xn(T, [N, U]);
    },
    onEnterCancelled(N) {
      C(N, !1), Xn(b, [N]);
    },
    onAppearCancelled(N) {
      C(N, !0), Xn(x, [N]);
    },
    onLeaveCancelled(N) {
      W(N), Xn(E, [N]);
    }
  });
}
function Cm(e) {
  if (e == null)
    return null;
  if (Xe(e))
    return [ns(e.enter), ns(e.leave)];
  {
    const t = ns(e);
    return [t, t];
  }
}
function ns(e) {
  return Pf(e);
}
function kn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[ma] || (e[ma] = /* @__PURE__ */ new Set())).add(t);
}
function Jn(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[ma];
  n && (n.delete(t), n.size || (e[ma] = void 0));
}
function Si(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Dm = 0;
function Ci(e, t, n, r) {
  const a = e._endId = ++Dm, o = () => {
    a === e._endId && r();
  };
  if (n)
    return setTimeout(o, n);
  const { type: s, timeout: l, propCount: i } = Om(e, t);
  if (!s)
    return r();
  const c = s + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(c, p), o();
  }, p = (g) => {
    g.target === e && ++u >= i && d();
  };
  setTimeout(() => {
    u < i && d();
  }, l + 1), e.addEventListener(c, p);
}
function Om(e, t) {
  const n = window.getComputedStyle(e), r = (v) => (n[v] || "").split(", "), a = r(`${xn}Delay`), o = r(`${xn}Duration`), s = Di(a, o), l = r(`${Wr}Delay`), i = r(`${Wr}Duration`), c = Di(l, i);
  let u = null, d = 0, p = 0;
  t === xn ? s > 0 && (u = xn, d = s, p = o.length) : t === Wr ? c > 0 && (u = Wr, d = c, p = i.length) : (d = Math.max(s, c), u = d > 0 ? s > c ? xn : Wr : null, p = u ? u === xn ? o.length : i.length : 0);
  const g = u === xn && /\b(transform|all)(,|$)/.test(
    r(`${xn}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: p,
    hasTransform: g
  };
}
function Di(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Oi(n) + Oi(e[r])));
}
function Oi(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Em() {
  return document.body.offsetHeight;
}
function Rm(e, t, n) {
  const r = e[ma];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const to = Symbol("_vod"), Fc = Symbol("_vsh"), Ha = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[to] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : qr(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), qr(e, !0), r.enter(e)) : r.leave(e, () => {
      qr(e, !1);
    }) : qr(e, t));
  },
  beforeUnmount(e, { value: t }) {
    qr(e, t);
  }
};
function qr(e, t) {
  e.style.display = t ? e[to] : "none", e[Fc] = !t;
}
const $m = Symbol(""), Nm = /(^|;)\s*display\s*:/;
function Vm(e, t, n) {
  const r = e.style, a = at(n);
  let o = !1;
  if (n && !a) {
    if (t)
      if (at(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && ja(r, l, "");
        }
      else
        for (const s in t)
          n[s] == null && ja(r, s, "");
    for (const s in n)
      s === "display" && (o = !0), ja(r, s, n[s]);
  } else if (a) {
    if (t !== n) {
      const s = r[$m];
      s && (n += ";" + s), r.cssText = n, o = Nm.test(n);
    }
  } else t && e.removeAttribute("style");
  to in e && (e[to] = o ? r.display : "", e[Fc] && (r.display = "none"));
}
const Ei = /\s*!important$/;
function ja(e, t, n) {
  if (ke(n))
    n.forEach((r) => ja(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Fm(e, t);
    Ei.test(n) ? e.setProperty(
      jn(r),
      n.replace(Ei, ""),
      "important"
    ) : e[r] = n;
  }
}
const Ri = ["Webkit", "Moz", "ms"], rs = {};
function Fm(e, t) {
  const n = rs[t];
  if (n)
    return n;
  let r = Qt(t);
  if (r !== "filter" && r in e)
    return rs[t] = r;
  r = yo(r);
  for (let a = 0; a < Ri.length; a++) {
    const o = Ri[a] + r;
    if (o in e)
      return rs[t] = o;
  }
  return t;
}
const $i = "http://www.w3.org/1999/xlink";
function Im(e, t, n, r, a) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS($i, t.slice(6, t.length)) : e.setAttributeNS($i, t, n);
  else {
    const o = Ef(t);
    n == null || o && !Lu(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function Lm(e, t, n, r, a, o, s) {
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
    c === "boolean" ? n = Lu(n) : n == null && c === "string" ? (n = "", i = !0) : c === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(t);
}
function rr(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Bm(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ni = Symbol("_vei");
function Ym(e, t, n, r, a = null) {
  const o = e[Ni] || (e[Ni] = {}), s = o[t];
  if (r && s)
    s.value = r;
  else {
    const [l, i] = Hm(t);
    if (r) {
      const c = o[t] = Wm(r, a);
      rr(e, l, c, i);
    } else s && (Bm(e, l, s, i), o[t] = void 0);
  }
}
const Vi = /(?:Once|Passive|Capture)$/;
function Hm(e) {
  let t;
  if (Vi.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Vi); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : jn(e.slice(2)), t];
}
let as = 0;
const jm = /* @__PURE__ */ Promise.resolve(), Um = () => as || (jm.then(() => as = 0), as = Date.now());
function Wm(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ht(
      qm(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Um(), n;
}
function qm(e, t) {
  if (ke(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((r) => (a) => !a._stopped && r && r(a));
  } else
    return t;
}
const Fi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, zm = (e, t, n, r, a, o, s, l, i) => {
  const c = a === "svg";
  t === "class" ? Rm(e, r, c) : t === "style" ? Vm(e, n, r) : mo(t) ? el(t) || Ym(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Gm(e, t, r, c)) ? Lm(
    e,
    t,
    r,
    o,
    s,
    l,
    i
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Im(e, t, r, c));
};
function Gm(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Fi(t) && Se(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Fi(t) && at(n) ? !1 : t in e;
}
const no = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ke(t) ? (n) => Ba(t, n) : t;
};
function Km(e) {
  e.target.composing = !0;
}
function Ii(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Cr = Symbol("_assign"), Li = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, a) {
    e[Cr] = no(a);
    const o = r || a.props && a.props.type === "number";
    rr(e, t ? "change" : "input", (s) => {
      if (s.target.composing)
        return;
      let l = e.value;
      n && (l = l.trim()), o && (l = ua(l)), e[Cr](l);
    }), n && rr(e, "change", () => {
      e.value = e.value.trim();
    }), t || (rr(e, "compositionstart", Km), rr(e, "compositionend", Ii), rr(e, "change", Ii));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: a } }, o) {
    if (e[Cr] = no(o), e.composing)
      return;
    const s = a || e.type === "number" ? ua(e.value) : e.value, l = t ?? "";
    s !== l && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === l) || (e.value = l));
  }
}, Ic = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const a = ho(t);
    rr(e, "change", () => {
      const o = Array.prototype.filter.call(e.options, (s) => s.selected).map(
        (s) => n ? ua(ro(s)) : ro(s)
      );
      e[Cr](
        e.multiple ? a ? new Set(o) : o : o[0]
      ), e._assigning = !0, Xt(() => {
        e._assigning = !1;
      });
    }), e[Cr] = no(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, modifiers: { number: n } }) {
    Bi(e, t, n);
  },
  beforeUpdate(e, t, n) {
    e[Cr] = no(n);
  },
  updated(e, { value: t, modifiers: { number: n } }) {
    e._assigning || Bi(e, t, n);
  }
};
function Bi(e, t, n) {
  const r = e.multiple, a = ke(t);
  if (!(r && !a && !ho(t))) {
    for (let o = 0, s = e.options.length; o < s; o++) {
      const l = e.options[o], i = ro(l);
      if (r)
        if (a) {
          const c = typeof i;
          c === "string" || c === "number" ? l.selected = t.includes(
            n ? ua(i) : i
          ) : l.selected = $f(t, i) > -1;
        } else
          l.selected = t.has(i);
      else if (go(ro(l), t)) {
        e.selectedIndex !== o && (e.selectedIndex = o);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function ro(e) {
  return "_value" in e ? e._value : e.value;
}
const Qm = ["ctrl", "shift", "alt", "meta"], Xm = {
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
  exact: (e, t) => Qm.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ke = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (a, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const l = Xm[t[s]];
      if (l && l(a, t))
        return;
    }
    return e(a, ...o);
  });
}, Jm = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ae = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (a) => {
    if (!("key" in a))
      return;
    const o = jn(a.key);
    if (t.some((s) => s === o || Jm[s] === o))
      return e(a);
  });
}, Zm = /* @__PURE__ */ yt({ patchProp: zm }, Am);
let Yi;
function Lc() {
  return Yi || (Yi = sm(Zm));
}
const Hi = (...e) => {
  Lc().render(...e);
}, eh = (...e) => {
  const t = Lc().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const a = nh(r);
    if (!a)
      return;
    const o = t._component;
    !Se(o) && !o.render && !o.template && (o.template = a.innerHTML), a.innerHTML = "";
    const s = n(a, !1, th(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), s;
  }, t;
};
function th(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function nh(e) {
  return at(e) ? document.querySelector(e) : e;
}
var rh = !1;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Bc;
const Oo = (e) => Bc = e, Yc = (
  /* istanbul ignore next */
  Symbol()
);
function Is(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var oa;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(oa || (oa = {}));
function ah() {
  const e = Hu(!0), t = e.run(() => J({}));
  let n = [], r = [];
  const a = wo({
    install(o) {
      Oo(a), a._a = o, o.provide(Yc, a), o.config.globalProperties.$pinia = a, r.forEach((s) => n.push(s)), r = [];
    },
    use(o) {
      return !this._a && !rh ? r.push(o) : n.push(o), this;
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
const Hc = () => {
};
function ji(e, t, n, r = Hc) {
  e.push(t);
  const a = () => {
    const o = e.indexOf(t);
    o > -1 && (e.splice(o, 1), r());
  };
  return !n && rl() && ju(a), a;
}
function br(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const oh = (e) => e();
function Ls(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], a = e[n];
    Is(a) && Is(r) && e.hasOwnProperty(n) && !ut(r) && !$n(r) ? e[n] = Ls(a, r) : e[n] = r;
  }
  return e;
}
const sh = (
  /* istanbul ignore next */
  Symbol()
);
function lh(e) {
  return !Is(e) || !e.hasOwnProperty(sh);
}
const { assign: An } = Object;
function ih(e) {
  return !!(ut(e) && e.effect);
}
function uh(e, t, n, r) {
  const { state: a, actions: o, getters: s } = t, l = n.state.value[e];
  let i;
  function c() {
    l || (n.state.value[e] = a ? a() : {});
    const u = cp(n.state.value[e]);
    return An(u, o, Object.keys(s || {}).reduce((d, p) => (d[p] = wo(re(() => {
      Oo(n);
      const g = n._s.get(e);
      return s[p].call(g, g);
    })), d), {}));
  }
  return i = jc(e, c, t, n, r, !0), i;
}
function jc(e, t, n = {}, r, a, o) {
  let s;
  const l = An({ actions: {} }, n), i = {
    deep: !0
    // flush: 'post',
  };
  let c, u, d = [], p = [], g;
  const v = r.state.value[e];
  !o && !v && (r.state.value[e] = {}), J({});
  let y;
  function S(x) {
    let C;
    c = u = !1, typeof x == "function" ? (x(r.state.value[e]), C = {
      type: oa.patchFunction,
      storeId: e,
      events: g
    }) : (Ls(r.state.value[e], x), C = {
      type: oa.patchObject,
      payload: x,
      storeId: e,
      events: g
    });
    const W = y = Symbol();
    Xt().then(() => {
      y === W && (c = !0);
    }), u = !0, br(d, C, r.state.value[e]);
  }
  const $ = o ? function() {
    const { state: C } = n, W = C ? C() : {};
    this.$patch((Y) => {
      An(Y, W);
    });
  } : (
    /* istanbul ignore next */
    Hc
  );
  function O() {
    s.stop(), d = [], p = [], r._s.delete(e);
  }
  function b(x, C) {
    return function() {
      Oo(r);
      const W = Array.from(arguments), Y = [], N = [];
      function j(P) {
        Y.push(P);
      }
      function U(P) {
        N.push(P);
      }
      br(p, {
        args: W,
        name: x,
        store: E,
        after: j,
        onError: U
      });
      let _;
      try {
        _ = C.apply(this && this.$id === e ? this : E, W);
      } catch (P) {
        throw br(N, P), P;
      }
      return _ instanceof Promise ? _.then((P) => (br(Y, P), P)).catch((P) => (br(N, P), Promise.reject(P))) : (br(Y, _), _);
    };
  }
  const T = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: ji.bind(null, p),
    $patch: S,
    $reset: $,
    $subscribe(x, C = {}) {
      const W = ji(d, x, C.detached, () => Y()), Y = s.run(() => ft(() => r.state.value[e], (N) => {
        (C.flush === "sync" ? u : c) && x({
          storeId: e,
          type: oa.direct,
          events: g
        }, N);
      }, An({}, i, C)));
      return W;
    },
    $dispose: O
  }, E = gn(T);
  r._s.set(e, E);
  const V = (r._a && r._a.runWithContext || oh)(() => r._e.run(() => (s = Hu()).run(t)));
  for (const x in V) {
    const C = V[x];
    if (ut(C) && !ih(C) || $n(C))
      o || (v && lh(C) && (ut(C) ? C.value = v[x] : Ls(C, v[x])), r.state.value[e][x] = C);
    else if (typeof C == "function") {
      const W = b(x, C);
      V[x] = W, l.actions[x] = C;
    }
  }
  return An(E, V), An(Be(E), V), Object.defineProperty(E, "$state", {
    get: () => r.state.value[e],
    set: (x) => {
      S((C) => {
        An(C, x);
      });
    }
  }), r._p.forEach((x) => {
    An(E, s.run(() => x({
      store: E,
      app: r._a,
      pinia: r,
      options: l
    })));
  }), v && o && n.hydrate && n.hydrate(E.$state, v), c = !0, u = !0, E;
}
function ch(e, t, n) {
  let r, a;
  const o = typeof t == "function";
  r = e, a = o ? n : t;
  function s(l, i) {
    const c = em();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (c ? na(Yc, null) : null), l && Oo(l), l = Bc, l._s.has(r) || (o ? jc(r, t, a, l) : uh(r, a, l)), l._s.get(r);
  }
  return s.$id = r, s;
}
var Uc = typeof global == "object" && global && global.Object === Object && global, dh = typeof self == "object" && self && self.Object === Object && self, Eo = Uc || dh || Function("return this")(), ao = Eo.Symbol, Wc = Object.prototype, fh = Wc.hasOwnProperty, ph = Wc.toString, zr = ao ? ao.toStringTag : void 0;
function mh(e) {
  var t = fh.call(e, zr), n = e[zr];
  try {
    e[zr] = void 0;
    var r = !0;
  } catch {
  }
  var a = ph.call(e);
  return r && (t ? e[zr] = n : delete e[zr]), a;
}
var hh = Object.prototype, vh = hh.toString;
function yh(e) {
  return vh.call(e);
}
var gh = "[object Null]", bh = "[object Undefined]", Ui = ao ? ao.toStringTag : void 0;
function xl(e) {
  return e == null ? e === void 0 ? bh : gh : Ui && Ui in Object(e) ? mh(e) : yh(e);
}
function Ro(e) {
  return e != null && typeof e == "object";
}
function qc(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var zc = Array.isArray;
function kl(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Gc(e) {
  return e;
}
var wh = "[object AsyncFunction]", _h = "[object Function]", xh = "[object GeneratorFunction]", kh = "[object Proxy]";
function Kc(e) {
  if (!kl(e))
    return !1;
  var t = xl(e);
  return t == _h || t == xh || t == wh || t == kh;
}
var os = Eo["__core-js_shared__"], Wi = function() {
  var e = /[^.]+$/.exec(os && os.keys && os.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Mh(e) {
  return !!Wi && Wi in e;
}
var Th = Function.prototype, Ph = Th.toString;
function Ah(e) {
  if (e != null) {
    try {
      return Ph.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Sh = /[\\^$.*+?()[\]{}|]/g, Ch = /^\[object .+?Constructor\]$/, Dh = Function.prototype, Oh = Object.prototype, Eh = Dh.toString, Rh = Oh.hasOwnProperty, $h = RegExp(
  "^" + Eh.call(Rh).replace(Sh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Nh(e) {
  if (!kl(e) || Mh(e))
    return !1;
  var t = Kc(e) ? $h : Ch;
  return t.test(Ah(e));
}
function Vh(e, t) {
  return e == null ? void 0 : e[t];
}
function Ml(e, t) {
  var n = Vh(e, t);
  return Nh(n) ? n : void 0;
}
function Fh(e, t, n) {
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
var Ih = 800, Lh = 16, Bh = Date.now;
function Yh(e) {
  var t = 0, n = 0;
  return function() {
    var r = Bh(), a = Lh - (r - n);
    if (n = r, a > 0) {
      if (++t >= Ih)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Hh(e) {
  return function() {
    return e;
  };
}
var oo = function() {
  try {
    var e = Ml(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), jh = oo ? function(e, t) {
  return oo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Hh(t),
    writable: !0
  });
} : Gc, Uh = Yh(jh);
function Wh(e, t, n, r) {
  for (var a = e.length, o = n + -1; ++o < a; )
    if (t(e[o], o, e))
      return o;
  return -1;
}
function qh(e) {
  return e !== e;
}
function zh(e, t, n) {
  for (var r = n - 1, a = e.length; ++r < a; )
    if (e[r] === t)
      return r;
  return -1;
}
function Gh(e, t, n) {
  return t === t ? zh(e, t, n) : Wh(e, qh, n);
}
function Kh(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && Gh(e, t, 0) > -1;
}
var Qh = 9007199254740991, Xh = /^(?:0|[1-9]\d*)$/;
function Qc(e, t) {
  var n = typeof e;
  return t = t ?? Qh, !!t && (n == "number" || n != "symbol" && Xh.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Xc(e, t, n) {
  t == "__proto__" && oo ? oo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Tl(e, t) {
  return e === t || e !== e && t !== t;
}
var Jh = Object.prototype, Zh = Jh.hasOwnProperty;
function Jc(e, t, n) {
  var r = e[t];
  (!(Zh.call(e, t) && Tl(r, n)) || n === void 0 && !(t in e)) && Xc(e, t, n);
}
function ev(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, s = t.length; ++o < s; ) {
    var l = t[o], i = void 0;
    i === void 0 && (i = e[l]), a ? Xc(n, l, i) : Jc(n, l, i);
  }
  return n;
}
var qi = Math.max;
function tv(e, t, n) {
  return t = qi(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, o = qi(r.length - t, 0), s = Array(o); ++a < o; )
      s[a] = r[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = r[a];
    return l[t] = n(s), Fh(e, this, l);
  };
}
function Zc(e, t) {
  return Uh(tv(e, t, Gc), e + "");
}
var nv = 9007199254740991;
function ed(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= nv;
}
function $o(e) {
  return e != null && ed(e.length) && !Kc(e);
}
function rv(e, t, n) {
  if (!kl(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? $o(n) && Qc(t, n.length) : r == "string" && t in n) ? Tl(n[t], e) : !1;
}
function av(e) {
  return Zc(function(t, n) {
    var r = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, s = a > 2 ? n[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, s && rv(n[0], n[1], s) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++r < a; ) {
      var l = n[r];
      l && e(t, l, r, o);
    }
    return t;
  });
}
var ov = Object.prototype;
function td(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || ov;
  return e === n;
}
function sv(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var lv = "[object Arguments]";
function zi(e) {
  return Ro(e) && xl(e) == lv;
}
var nd = Object.prototype, iv = nd.hasOwnProperty, uv = nd.propertyIsEnumerable, cv = zi(/* @__PURE__ */ function() {
  return arguments;
}()) ? zi : function(e) {
  return Ro(e) && iv.call(e, "callee") && !uv.call(e, "callee");
};
function dv() {
  return !1;
}
var rd = typeof exports == "object" && exports && !exports.nodeType && exports, Gi = rd && typeof module == "object" && module && !module.nodeType && module, fv = Gi && Gi.exports === rd, Ki = fv ? Eo.Buffer : void 0, pv = Ki ? Ki.isBuffer : void 0, mv = pv || dv, hv = "[object Arguments]", vv = "[object Array]", yv = "[object Boolean]", gv = "[object Date]", bv = "[object Error]", wv = "[object Function]", _v = "[object Map]", xv = "[object Number]", kv = "[object Object]", Mv = "[object RegExp]", Tv = "[object Set]", Pv = "[object String]", Av = "[object WeakMap]", Sv = "[object ArrayBuffer]", Cv = "[object DataView]", Dv = "[object Float32Array]", Ov = "[object Float64Array]", Ev = "[object Int8Array]", Rv = "[object Int16Array]", $v = "[object Int32Array]", Nv = "[object Uint8Array]", Vv = "[object Uint8ClampedArray]", Fv = "[object Uint16Array]", Iv = "[object Uint32Array]", tt = {};
tt[Dv] = tt[Ov] = tt[Ev] = tt[Rv] = tt[$v] = tt[Nv] = tt[Vv] = tt[Fv] = tt[Iv] = !0;
tt[hv] = tt[vv] = tt[Sv] = tt[yv] = tt[Cv] = tt[gv] = tt[bv] = tt[wv] = tt[_v] = tt[xv] = tt[kv] = tt[Mv] = tt[Tv] = tt[Pv] = tt[Av] = !1;
function Lv(e) {
  return Ro(e) && ed(e.length) && !!tt[xl(e)];
}
function ad(e) {
  return function(t) {
    return e(t);
  };
}
var od = typeof exports == "object" && exports && !exports.nodeType && exports, sa = od && typeof module == "object" && module && !module.nodeType && module, Bv = sa && sa.exports === od, ss = Bv && Uc.process, Qi = function() {
  try {
    var e = sa && sa.require && sa.require("util").types;
    return e || ss && ss.binding && ss.binding("util");
  } catch {
  }
}(), Xi = Qi && Qi.isTypedArray, Yv = Xi ? ad(Xi) : Lv, Hv = Object.prototype, jv = Hv.hasOwnProperty;
function Uv(e, t) {
  var n = zc(e), r = !n && cv(e), a = !n && !r && mv(e), o = !n && !r && !a && Yv(e), s = n || r || a || o, l = s ? sv(e.length, String) : [], i = l.length;
  for (var c in e)
    jv.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Qc(c, i))) && l.push(c);
  return l;
}
function Wv(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var qv = Wv(Object.keys, Object), zv = Object.prototype, Gv = zv.hasOwnProperty;
function Kv(e) {
  if (!td(e))
    return qv(e);
  var t = [];
  for (var n in Object(e))
    Gv.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Qv(e) {
  return $o(e) ? Uv(e) : Kv(e);
}
var Xv = Object.prototype, Jv = Xv.hasOwnProperty, Zv = av(function(e, t) {
  if (td(t) || $o(t)) {
    ev(t, Qv(t), e);
    return;
  }
  for (var n in t)
    Jv.call(t, n) && Jc(e, n, t[n]);
}), ha = Ml(Object, "create");
function ey() {
  this.__data__ = ha ? ha(null) : {}, this.size = 0;
}
function ty(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ny = "__lodash_hash_undefined__", ry = Object.prototype, ay = ry.hasOwnProperty;
function oy(e) {
  var t = this.__data__;
  if (ha) {
    var n = t[e];
    return n === ny ? void 0 : n;
  }
  return ay.call(t, e) ? t[e] : void 0;
}
var sy = Object.prototype, ly = sy.hasOwnProperty;
function iy(e) {
  var t = this.__data__;
  return ha ? t[e] !== void 0 : ly.call(t, e);
}
var uy = "__lodash_hash_undefined__";
function cy(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ha && t === void 0 ? uy : t, this;
}
function pr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
pr.prototype.clear = ey;
pr.prototype.delete = ty;
pr.prototype.get = oy;
pr.prototype.has = iy;
pr.prototype.set = cy;
function dy() {
  this.__data__ = [], this.size = 0;
}
function No(e, t) {
  for (var n = e.length; n--; )
    if (Tl(e[n][0], t))
      return n;
  return -1;
}
var fy = Array.prototype, py = fy.splice;
function my(e) {
  var t = this.__data__, n = No(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : py.call(t, n, 1), --this.size, !0;
}
function hy(e) {
  var t = this.__data__, n = No(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function vy(e) {
  return No(this.__data__, e) > -1;
}
function yy(e, t) {
  var n = this.__data__, r = No(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Br(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Br.prototype.clear = dy;
Br.prototype.delete = my;
Br.prototype.get = hy;
Br.prototype.has = vy;
Br.prototype.set = yy;
var gy = Ml(Eo, "Map");
function by() {
  this.size = 0, this.__data__ = {
    hash: new pr(),
    map: new (gy || Br)(),
    string: new pr()
  };
}
function wy(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Vo(e, t) {
  var n = e.__data__;
  return wy(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function _y(e) {
  var t = Vo(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function xy(e) {
  return Vo(this, e).get(e);
}
function ky(e) {
  return Vo(this, e).has(e);
}
function My(e, t) {
  var n = Vo(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function Yr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Yr.prototype.clear = by;
Yr.prototype.delete = _y;
Yr.prototype.get = xy;
Yr.prototype.has = ky;
Yr.prototype.set = My;
var Ty = "__lodash_hash_undefined__";
function Py(e) {
  return this.__data__.set(e, Ty), this;
}
function Ay(e) {
  return this.__data__.has(e);
}
function so(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Yr(); ++t < n; )
    this.add(e[t]);
}
so.prototype.add = so.prototype.push = Py;
so.prototype.has = Ay;
function Ji(e, t) {
  return e.has(t);
}
function Sy(e) {
  return Ro(e) && $o(e);
}
var Cy = Math.min;
function Dy(e, t, n) {
  for (var r = Kh, a = e[0].length, o = e.length, s = o, l = Array(o), i = 1 / 0, c = []; s--; ) {
    var u = e[s];
    s && t && (u = qc(u, ad(t))), i = Cy(u.length, i), l[s] = a >= 120 && u.length >= 120 ? new so(s && u) : void 0;
  }
  u = e[0];
  var d = -1, p = l[0];
  e:
    for (; ++d < a && c.length < i; ) {
      var g = u[d], v = g;
      if (g = g !== 0 ? g : 0, !(p ? Ji(p, v) : r(c, v))) {
        for (s = o; --s; ) {
          var y = l[s];
          if (!(y ? Ji(y, v) : r(e[s], v)))
            continue e;
        }
        p && p.push(v), c.push(g);
      }
    }
  return c;
}
function Oy(e) {
  return Sy(e) ? e : [];
}
var Zi = Zc(function(e) {
  var t = qc(e, Oy);
  return t.length && t[0] === e[0] ? Dy(t) : [];
});
const lo = "Value", Or = "ValueString", ur = "ValueFloat", Er = "ValueDate", Rr = "ValueFilePath", mr = "Mode", Yn = "SubSystem", va = "Command", Bs = [
  lo,
  Or,
  ur,
  Er,
  Rr
];
class Va {
  constructor(t) {
    Zv(this, t);
  }
  getDestinations(t) {
    const n = zc(t) ? t : [t];
    return this.destinations.reduce((a, o) => (n.includes(o.type) && a.push(o), a), []);
  }
  getValues() {
    return this.hasValues ? this.getDestinations(Bs) : [];
  }
  getModes() {
    return this.hasModes ? this.getDestinations(mr) : [];
  }
  getSubsystems() {
    return this.getDestinations(Yn);
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
function sd(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ey } = Object.prototype, { getPrototypeOf: Pl } = Object, Fo = /* @__PURE__ */ ((e) => (t) => {
  const n = Ey.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Zt = (e) => (e = e.toLowerCase(), (t) => Fo(t) === e), Io = (e) => (t) => typeof t === e, { isArray: Hr } = Array, ya = Io("undefined");
function Ry(e) {
  return e !== null && !ya(e) && e.constructor !== null && !ya(e.constructor) && Ft(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ld = Zt("ArrayBuffer");
function $y(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ld(e.buffer), t;
}
const Ny = Io("string"), Ft = Io("function"), id = Io("number"), Lo = (e) => e !== null && typeof e == "object", Vy = (e) => e === !0 || e === !1, Ua = (e) => {
  if (Fo(e) !== "object")
    return !1;
  const t = Pl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Fy = Zt("Date"), Iy = Zt("File"), Ly = Zt("Blob"), By = Zt("FileList"), Yy = (e) => Lo(e) && Ft(e.pipe), Hy = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ft(e.append) && ((t = Fo(e)) === "formdata" || // detect form-data instance
  t === "object" && Ft(e.toString) && e.toString() === "[object FormData]"));
}, jy = Zt("URLSearchParams"), [Uy, Wy, qy, zy] = ["ReadableStream", "Request", "Response", "Headers"].map(Zt), Gy = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ka(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), Hr(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = o.length;
    let l;
    for (r = 0; r < s; r++)
      l = o[r], t.call(null, e[l], l, e);
  }
}
function ud(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const or = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, cd = (e) => !ya(e) && e !== or;
function Ys() {
  const { caseless: e } = cd(this) && this || {}, t = {}, n = (r, a) => {
    const o = e && ud(t, a) || a;
    Ua(t[o]) && Ua(r) ? t[o] = Ys(t[o], r) : Ua(r) ? t[o] = Ys({}, r) : Hr(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && ka(arguments[r], n);
  return t;
}
const Ky = (e, t, n, { allOwnKeys: r } = {}) => (ka(t, (a, o) => {
  n && Ft(a) ? e[o] = sd(a, n) : e[o] = a;
}, { allOwnKeys: r }), e), Qy = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Xy = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Jy = (e, t, n, r) => {
  let a, o, s;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
      s = a[o], (!r || r(s, e, t)) && !l[s] && (t[s] = e[s], l[s] = !0);
    e = n !== !1 && Pl(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Zy = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, eg = (e) => {
  if (!e) return null;
  if (Hr(e)) return e;
  let t = e.length;
  if (!id(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, tg = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Pl(Uint8Array)), ng = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const o = a.value;
    t.call(e, o[0], o[1]);
  }
}, rg = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, ag = Zt("HTMLFormElement"), og = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), eu = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), sg = Zt("RegExp"), dd = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  ka(n, (a, o) => {
    let s;
    (s = t(a, o, e)) !== !1 && (r[o] = s || a);
  }), Object.defineProperties(e, r);
}, lg = (e) => {
  dd(e, (t, n) => {
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
}, ig = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((o) => {
      n[o] = !0;
    });
  };
  return Hr(e) ? r(e) : r(String(e).split(t)), n;
}, ug = () => {
}, cg = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, ls = "abcdefghijklmnopqrstuvwxyz", tu = "0123456789", fd = {
  DIGIT: tu,
  ALPHA: ls,
  ALPHA_DIGIT: ls + ls.toUpperCase() + tu
}, dg = (e = 16, t = fd.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function fg(e) {
  return !!(e && Ft(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const pg = (e) => {
  const t = new Array(10), n = (r, a) => {
    if (Lo(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[a] = r;
        const o = Hr(r) ? [] : {};
        return ka(r, (s, l) => {
          const i = n(s, a + 1);
          !ya(i) && (o[l] = i);
        }), t[a] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, mg = Zt("AsyncFunction"), hg = (e) => e && (Lo(e) || Ft(e)) && Ft(e.then) && Ft(e.catch), pd = ((e, t) => e ? setImmediate : t ? ((n, r) => (or.addEventListener("message", ({ source: a, data: o }) => {
  a === or && o === n && r.length && r.shift()();
}, !1), (a) => {
  r.push(a), or.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ft(or.postMessage)
), vg = typeof queueMicrotask < "u" ? queueMicrotask.bind(or) : typeof process < "u" && process.nextTick || pd, q = {
  isArray: Hr,
  isArrayBuffer: ld,
  isBuffer: Ry,
  isFormData: Hy,
  isArrayBufferView: $y,
  isString: Ny,
  isNumber: id,
  isBoolean: Vy,
  isObject: Lo,
  isPlainObject: Ua,
  isReadableStream: Uy,
  isRequest: Wy,
  isResponse: qy,
  isHeaders: zy,
  isUndefined: ya,
  isDate: Fy,
  isFile: Iy,
  isBlob: Ly,
  isRegExp: sg,
  isFunction: Ft,
  isStream: Yy,
  isURLSearchParams: jy,
  isTypedArray: tg,
  isFileList: By,
  forEach: ka,
  merge: Ys,
  extend: Ky,
  trim: Gy,
  stripBOM: Qy,
  inherits: Xy,
  toFlatObject: Jy,
  kindOf: Fo,
  kindOfTest: Zt,
  endsWith: Zy,
  toArray: eg,
  forEachEntry: ng,
  matchAll: rg,
  isHTMLForm: ag,
  hasOwnProperty: eu,
  hasOwnProp: eu,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: dd,
  freezeMethods: lg,
  toObjectSet: ig,
  toCamelCase: og,
  noop: ug,
  toFiniteNumber: cg,
  findKey: ud,
  global: or,
  isContextDefined: cd,
  ALPHABET: fd,
  generateString: dg,
  isSpecCompliantForm: fg,
  toJSONObject: pg,
  isAsyncFn: mg,
  isThenable: hg,
  setImmediate: pd,
  asap: vg
};
function Ce(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a, this.status = a.status ? a.status : null);
}
q.inherits(Ce, Error, {
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
const md = Ce.prototype, hd = {};
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
  hd[e] = { value: e };
});
Object.defineProperties(Ce, hd);
Object.defineProperty(md, "isAxiosError", { value: !0 });
Ce.from = (e, t, n, r, a, o) => {
  const s = Object.create(md);
  return q.toFlatObject(e, s, function(i) {
    return i !== Error.prototype;
  }, (l) => l !== "isAxiosError"), Ce.call(s, e.message, t, n, r, a), s.cause = e, s.name = e.name, o && Object.assign(s, o), s;
};
const yg = null;
function Hs(e) {
  return q.isPlainObject(e) || q.isArray(e);
}
function vd(e) {
  return q.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function nu(e, t, n) {
  return e ? e.concat(t).map(function(a, o) {
    return a = vd(a), !n && o ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function gg(e) {
  return q.isArray(e) && !e.some(Hs);
}
const bg = q.toFlatObject(q, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Bo(e, t, n) {
  if (!q.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = q.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, S) {
    return !q.isUndefined(S[y]);
  });
  const r = n.metaTokens, a = n.visitor || u, o = n.dots, s = n.indexes, i = (n.Blob || typeof Blob < "u" && Blob) && q.isSpecCompliantForm(t);
  if (!q.isFunction(a))
    throw new TypeError("visitor must be a function");
  function c(v) {
    if (v === null) return "";
    if (q.isDate(v))
      return v.toISOString();
    if (!i && q.isBlob(v))
      throw new Ce("Blob is not supported. Use a Buffer instead.");
    return q.isArrayBuffer(v) || q.isTypedArray(v) ? i && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function u(v, y, S) {
    let $ = v;
    if (v && !S && typeof v == "object") {
      if (q.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), v = JSON.stringify(v);
      else if (q.isArray(v) && gg(v) || (q.isFileList(v) || q.endsWith(y, "[]")) && ($ = q.toArray(v)))
        return y = vd(y), $.forEach(function(b, T) {
          !(q.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? nu([y], T, o) : s === null ? y : y + "[]",
            c(b)
          );
        }), !1;
    }
    return Hs(v) ? !0 : (t.append(nu(S, y, o), c(v)), !1);
  }
  const d = [], p = Object.assign(bg, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: Hs
  });
  function g(v, y) {
    if (!q.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(v), q.forEach(v, function($, O) {
        (!(q.isUndefined($) || $ === null) && a.call(
          t,
          $,
          q.isString(O) ? O.trim() : O,
          y,
          p
        )) === !0 && g($, y ? y.concat(O) : [O]);
      }), d.pop();
    }
  }
  if (!q.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function ru(e) {
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
function Al(e, t) {
  this._pairs = [], e && Bo(e, this, t);
}
const yd = Al.prototype;
yd.append = function(t, n) {
  this._pairs.push([t, n]);
};
yd.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ru);
  } : ru;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function wg(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function gd(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || wg, a = n && n.serialize;
  let o;
  if (a ? o = a(t, n) : o = q.isURLSearchParams(t) ? t.toString() : new Al(t, n).toString(r), o) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class au {
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
const bd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, _g = typeof URLSearchParams < "u" ? URLSearchParams : Al, xg = typeof FormData < "u" ? FormData : null, kg = typeof Blob < "u" ? Blob : null, Mg = {
  isBrowser: !0,
  classes: {
    URLSearchParams: _g,
    FormData: xg,
    Blob: kg
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Sl = typeof window < "u" && typeof document < "u", js = typeof navigator == "object" && navigator || void 0, Tg = Sl && (!js || ["ReactNative", "NativeScript", "NS"].indexOf(js.product) < 0), Pg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ag = Sl && window.location.href || "http://localhost", Sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Sl,
  hasStandardBrowserEnv: Tg,
  hasStandardBrowserWebWorkerEnv: Pg,
  navigator: js,
  origin: Ag
}, Symbol.toStringTag, { value: "Module" })), Et = {
  ...Sg,
  ...Mg
};
function Cg(e, t) {
  return Bo(e, new Et.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, o) {
      return Et.isNode && q.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Dg(e) {
  return q.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Og(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let o;
  for (r = 0; r < a; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function wd(e) {
  function t(n, r, a, o) {
    let s = n[o++];
    if (s === "__proto__") return !0;
    const l = Number.isFinite(+s), i = o >= n.length;
    return s = !s && q.isArray(a) ? a.length : s, i ? (q.hasOwnProp(a, s) ? a[s] = [a[s], r] : a[s] = r, !l) : ((!a[s] || !q.isObject(a[s])) && (a[s] = []), t(n, r, a[s], o) && q.isArray(a[s]) && (a[s] = Og(a[s])), !l);
  }
  if (q.isFormData(e) && q.isFunction(e.entries)) {
    const n = {};
    return q.forEachEntry(e, (r, a) => {
      t(Dg(r), a, n, 0);
    }), n;
  }
  return null;
}
function Eg(e, t, n) {
  if (q.isString(e))
    try {
      return (t || JSON.parse)(e), q.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ma = {
  transitional: bd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, o = q.isObject(t);
    if (o && q.isHTMLForm(t) && (t = new FormData(t)), q.isFormData(t))
      return a ? JSON.stringify(wd(t)) : t;
    if (q.isArrayBuffer(t) || q.isBuffer(t) || q.isStream(t) || q.isFile(t) || q.isBlob(t) || q.isReadableStream(t))
      return t;
    if (q.isArrayBufferView(t))
      return t.buffer;
    if (q.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let l;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Cg(t, this.formSerializer).toString();
      if ((l = q.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const i = this.env && this.env.FormData;
        return Bo(
          l ? { "files[]": t } : t,
          i && new i(),
          this.formSerializer
        );
      }
    }
    return o || a ? (n.setContentType("application/json", !1), Eg(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ma.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (q.isResponse(t) || q.isReadableStream(t))
      return t;
    if (t && q.isString(t) && (r && !this.responseType || a)) {
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
q.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ma.headers[e] = {};
});
const Rg = q.toObjectSet([
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
]), $g = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(s) {
    a = s.indexOf(":"), n = s.substring(0, a).trim().toLowerCase(), r = s.substring(a + 1).trim(), !(!n || t[n] && Rg[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ou = Symbol("internals");
function Gr(e) {
  return e && String(e).trim().toLowerCase();
}
function Wa(e) {
  return e === !1 || e == null ? e : q.isArray(e) ? e.map(Wa) : String(e);
}
function Ng(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Vg = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function is(e, t, n, r, a) {
  if (q.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!q.isString(t)) {
    if (q.isString(r))
      return t.indexOf(r) !== -1;
    if (q.isRegExp(r))
      return r.test(t);
  }
}
function Fg(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ig(e, t) {
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
      const u = Gr(i);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = q.findKey(a, u);
      (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[d || i] = Wa(l));
    }
    const s = (l, i) => q.forEach(l, (c, u) => o(c, u, i));
    if (q.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (q.isString(t) && (t = t.trim()) && !Vg(t))
      s($g(t), n);
    else if (q.isHeaders(t))
      for (const [l, i] of t.entries())
        o(i, l, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Gr(t), t) {
      const r = q.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return Ng(a);
        if (q.isFunction(n))
          return n.call(this, a, r);
        if (q.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Gr(t), t) {
      const r = q.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || is(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function o(s) {
      if (s = Gr(s), s) {
        const l = q.findKey(r, s);
        l && (!n || is(r, r[l], l, n)) && (delete r[l], a = !0);
      }
    }
    return q.isArray(t) ? t.forEach(o) : o(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || is(this, this[o], o, t, !0)) && (delete this[o], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return q.forEach(this, (a, o) => {
      const s = q.findKey(r, o);
      if (s) {
        n[s] = Wa(a), delete n[o];
        return;
      }
      const l = t ? Fg(o) : String(o).trim();
      l !== o && delete n[o], n[l] = Wa(a), r[l] = !0;
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
    const r = (this[ou] = this[ou] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function o(s) {
      const l = Gr(s);
      r[l] || (Ig(a, s), r[l] = !0);
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
function us(e, t) {
  const n = this || Ma, r = t || n, a = Rt.from(r.headers);
  let o = r.data;
  return q.forEach(e, function(l) {
    o = l.call(n, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function _d(e) {
  return !!(e && e.__CANCEL__);
}
function jr(e, t, n) {
  Ce.call(this, e ?? "canceled", Ce.ERR_CANCELED, t, n), this.name = "CanceledError";
}
q.inherits(jr, Ce, {
  __CANCEL__: !0
});
function xd(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Ce(
    "Request failed with status code " + n.status,
    [Ce.ERR_BAD_REQUEST, Ce.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Lg(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Bg(e, t) {
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
    const g = u && c - u;
    return g ? Math.round(p * 1e3 / g) : void 0;
  };
}
function Yg(e, t) {
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
const io = (e, t, n = 3) => {
  let r = 0;
  const a = Bg(50, 250);
  return Yg((o) => {
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
}, su = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, lu = (e) => (...t) => q.asap(() => e(...t)), Hg = Et.hasStandardBrowserEnv ? (
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
), jg = Et.hasStandardBrowserEnv ? (
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
function Ug(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Wg(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function kd(e, t) {
  return e && !Ug(t) ? Wg(e, t) : t;
}
const iu = (e) => e instanceof Rt ? { ...e } : e;
function hr(e, t) {
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
    headers: (c, u) => a(iu(c), iu(u), !0)
  };
  return q.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = i[u] || a, p = d(e[u], t[u], u);
    q.isUndefined(p) && d !== l || (n[u] = p);
  }), n;
}
const Md = (e) => {
  const t = hr({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: a, xsrfCookieName: o, headers: s, auth: l } = t;
  t.headers = s = Rt.from(s), t.url = gd(kd(t.baseURL, t.url), e.params, e.paramsSerializer), l && s.set(
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
  if (Et.hasStandardBrowserEnv && (r && q.isFunction(r) && (r = r(t)), r || r !== !1 && Hg(t.url))) {
    const c = a && o && jg.read(o);
    c && s.set(a, c);
  }
  return t;
}, qg = typeof XMLHttpRequest < "u", zg = qg && function(e) {
  return new Promise(function(n, r) {
    const a = Md(e);
    let o = a.data;
    const s = Rt.from(a.headers).normalize();
    let { responseType: l, onUploadProgress: i, onDownloadProgress: c } = a, u, d, p, g, v;
    function y() {
      g && g(), v && v(), a.cancelToken && a.cancelToken.unsubscribe(u), a.signal && a.signal.removeEventListener("abort", u);
    }
    let S = new XMLHttpRequest();
    S.open(a.method.toUpperCase(), a.url, !0), S.timeout = a.timeout;
    function $() {
      if (!S)
        return;
      const b = Rt.from(
        "getAllResponseHeaders" in S && S.getAllResponseHeaders()
      ), E = {
        data: !l || l === "text" || l === "json" ? S.responseText : S.response,
        status: S.status,
        statusText: S.statusText,
        headers: b,
        config: e,
        request: S
      };
      xd(function(V) {
        n(V), y();
      }, function(V) {
        r(V), y();
      }, E), S = null;
    }
    "onloadend" in S ? S.onloadend = $ : S.onreadystatechange = function() {
      !S || S.readyState !== 4 || S.status === 0 && !(S.responseURL && S.responseURL.indexOf("file:") === 0) || setTimeout($);
    }, S.onabort = function() {
      S && (r(new Ce("Request aborted", Ce.ECONNABORTED, e, S)), S = null);
    }, S.onerror = function() {
      r(new Ce("Network Error", Ce.ERR_NETWORK, e, S)), S = null;
    }, S.ontimeout = function() {
      let T = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const E = a.transitional || bd;
      a.timeoutErrorMessage && (T = a.timeoutErrorMessage), r(new Ce(
        T,
        E.clarifyTimeoutError ? Ce.ETIMEDOUT : Ce.ECONNABORTED,
        e,
        S
      )), S = null;
    }, o === void 0 && s.setContentType(null), "setRequestHeader" in S && q.forEach(s.toJSON(), function(T, E) {
      S.setRequestHeader(E, T);
    }), q.isUndefined(a.withCredentials) || (S.withCredentials = !!a.withCredentials), l && l !== "json" && (S.responseType = a.responseType), c && ([p, v] = io(c, !0), S.addEventListener("progress", p)), i && S.upload && ([d, g] = io(i), S.upload.addEventListener("progress", d), S.upload.addEventListener("loadend", g)), (a.cancelToken || a.signal) && (u = (b) => {
      S && (r(!b || b.type ? new jr(null, e, S) : b), S.abort(), S = null);
    }, a.cancelToken && a.cancelToken.subscribe(u), a.signal && (a.signal.aborted ? u() : a.signal.addEventListener("abort", u)));
    const O = Lg(a.url);
    if (O && Et.protocols.indexOf(O) === -1) {
      r(new Ce("Unsupported protocol " + O + ":", Ce.ERR_BAD_REQUEST, e));
      return;
    }
    S.send(o || null);
  });
}, Gg = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), a;
    const o = function(c) {
      if (!a) {
        a = !0, l();
        const u = c instanceof Error ? c : this.reason;
        r.abort(u instanceof Ce ? u : new jr(u instanceof Error ? u.message : u));
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
    return i.unsubscribe = () => q.asap(l), i;
  }
}, Kg = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, a;
  for (; r < n; )
    a = r + t, yield e.slice(r, a), r = a;
}, Qg = async function* (e, t) {
  for await (const n of Xg(e))
    yield* Kg(n, t);
}, Xg = async function* (e) {
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
}, uu = (e, t, n, r) => {
  const a = Qg(e, t);
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
}, Yo = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Td = Yo && typeof ReadableStream == "function", Jg = Yo && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Pd = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Zg = Td && Pd(() => {
  let e = !1;
  const t = new Request(Et.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), cu = 64 * 1024, Us = Td && Pd(() => q.isReadableStream(new Response("").body)), uo = {
  stream: Us && ((e) => e.body)
};
Yo && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !uo[t] && (uo[t] = q.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new Ce(`Response type '${t}' is not supported`, Ce.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const e0 = async (e) => {
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
    return (await Jg(e)).byteLength;
}, t0 = async (e, t) => {
  const n = q.toFiniteNumber(e.getContentLength());
  return n ?? e0(t);
}, n0 = Yo && (async (e) => {
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
  } = Md(e);
  c = c ? (c + "").toLowerCase() : "text";
  let g = Gg([a, o && o.toAbortSignal()], s), v;
  const y = g && g.unsubscribe && (() => {
    g.unsubscribe();
  });
  let S;
  try {
    if (i && Zg && n !== "get" && n !== "head" && (S = await t0(u, r)) !== 0) {
      let E = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), k;
      if (q.isFormData(r) && (k = E.headers.get("content-type")) && u.setContentType(k), E.body) {
        const [V, x] = su(
          S,
          io(lu(i))
        );
        r = uu(E.body, cu, V, x);
      }
    }
    q.isString(d) || (d = d ? "include" : "omit");
    const $ = "credentials" in Request.prototype;
    v = new Request(t, {
      ...p,
      signal: g,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: $ ? d : void 0
    });
    let O = await fetch(v);
    const b = Us && (c === "stream" || c === "response");
    if (Us && (l || b && y)) {
      const E = {};
      ["status", "statusText", "headers"].forEach((C) => {
        E[C] = O[C];
      });
      const k = q.toFiniteNumber(O.headers.get("content-length")), [V, x] = l && su(
        k,
        io(lu(l), !0)
      ) || [];
      O = new Response(
        uu(O.body, cu, V, () => {
          x && x(), y && y();
        }),
        E
      );
    }
    c = c || "text";
    let T = await uo[q.findKey(uo, c) || "text"](O, e);
    return !b && y && y(), await new Promise((E, k) => {
      xd(E, k, {
        data: T,
        headers: Rt.from(O.headers),
        status: O.status,
        statusText: O.statusText,
        config: e,
        request: v
      });
    });
  } catch ($) {
    throw y && y(), $ && $.name === "TypeError" && /fetch/i.test($.message) ? Object.assign(
      new Ce("Network Error", Ce.ERR_NETWORK, e, v),
      {
        cause: $.cause || $
      }
    ) : Ce.from($, $ && $.code, e, v);
  }
}), Ws = {
  http: yg,
  xhr: zg,
  fetch: n0
};
q.forEach(Ws, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const du = (e) => `- ${e}`, r0 = (e) => q.isFunction(e) || e === null || e === !1, Ad = {
  getAdapter: (e) => {
    e = q.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let s;
      if (r = n, !r0(n) && (r = Ws[(s = String(n)).toLowerCase()], r === void 0))
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
` + o.map(du).join(`
`) : " " + du(o[0]) : "as no adapter specified";
      throw new Ce(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ws
};
function cs(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new jr(null, e);
}
function fu(e) {
  return cs(e), e.headers = Rt.from(e.headers), e.data = us.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ad.getAdapter(e.adapter || Ma.adapter)(e).then(function(r) {
    return cs(e), r.data = us.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Rt.from(r.headers), r;
  }, function(r) {
    return _d(r) || (cs(e), r && r.response && (r.response.data = us.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Rt.from(r.response.headers))), Promise.reject(r);
  });
}
const Sd = "1.7.7", Cl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Cl[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const pu = {};
Cl.transitional = function(t, n, r) {
  function a(o, s) {
    return "[Axios v" + Sd + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "");
  }
  return (o, s, l) => {
    if (t === !1)
      throw new Ce(
        a(s, " has been removed" + (n ? " in " + n : "")),
        Ce.ERR_DEPRECATED
      );
    return n && !pu[s] && (pu[s] = !0, console.warn(
      a(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, s, l) : !0;
  };
};
function a0(e, t, n) {
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
const qs = {
  assertOptions: a0,
  validators: Cl
}, Mn = qs.validators;
class cr {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new au(),
      response: new au()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = hr(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: o } = n;
    r !== void 0 && qs.assertOptions(r, {
      silentJSONParsing: Mn.transitional(Mn.boolean),
      forcedJSONParsing: Mn.transitional(Mn.boolean),
      clarifyTimeoutError: Mn.transitional(Mn.boolean)
    }, !1), a != null && (q.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : qs.assertOptions(a, {
      encode: Mn.function,
      serialize: Mn.function
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
      const v = [fu.bind(this), void 0];
      for (v.unshift.apply(v, l), v.push.apply(v, c), p = v.length, u = Promise.resolve(n); d < p; )
        u = u.then(v[d++], v[d++]);
      return u;
    }
    p = l.length;
    let g = n;
    for (d = 0; d < p; ) {
      const v = l[d++], y = l[d++];
      try {
        g = v(g);
      } catch (S) {
        y.call(this, S);
        break;
      }
    }
    try {
      u = fu.call(this, g);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, p = c.length; d < p; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = hr(this.defaults, t);
    const n = kd(t.baseURL, t.url);
    return gd(n, t.params, t.paramsSerializer);
  }
}
q.forEach(["delete", "get", "head", "options"], function(t) {
  cr.prototype[t] = function(n, r) {
    return this.request(hr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
q.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, s, l) {
      return this.request(hr(l || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: s
      }));
    };
  }
  cr.prototype[t] = n(), cr.prototype[t + "Form"] = n(!0);
});
class Dl {
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
      r.reason || (r.reason = new jr(o, s, l), n(r.reason));
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
      token: new Dl(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
function o0(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function s0(e) {
  return q.isObject(e) && e.isAxiosError === !0;
}
const zs = {
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
Object.entries(zs).forEach(([e, t]) => {
  zs[t] = e;
});
function Cd(e) {
  const t = new cr(e), n = sd(cr.prototype.request, t);
  return q.extend(n, cr.prototype, t, { allOwnKeys: !0 }), q.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return Cd(hr(e, a));
  }, n;
}
const ot = Cd(Ma);
ot.Axios = cr;
ot.CanceledError = jr;
ot.CancelToken = Dl;
ot.isCancel = _d;
ot.VERSION = Sd;
ot.toFormData = Bo;
ot.AxiosError = Ce;
ot.Cancel = ot.CanceledError;
ot.all = function(t) {
  return Promise.all(t);
};
ot.spread = o0;
ot.isAxiosError = s0;
ot.mergeConfig = hr;
ot.AxiosHeaders = Rt;
ot.formToJSON = (e) => wd(q.isHTMLForm(e) ? new FormData(e) : e);
ot.getAdapter = Ad.getAdapter;
ot.HttpStatusCode = zs;
ot.default = ot;
function mu(e) {
  return ot.get(e).then((t) => t.data);
}
const Dd = {
  Value: lo,
  ValueString: Or,
  ValueDoubleRange: ur,
  ValueDateRange: Er,
  ValueFilePath: Rr,
  Mode: mr,
  SubSystem: Yn,
  Command: va,
  PORISValue: lo,
  PORISValueString: Or,
  PORISValueFloat: ur,
  PORISValueDoubleRange: ur,
  PORISValueDate: Er,
  PORISValueFilePath: Rr,
  PORISMode: mr,
  PORISNode: Yn,
  PORISCmd: va
}, l0 = [
  "value",
  "value-string",
  "value-double-range",
  "value-date",
  "value-file-path"
], i0 = "mode", u0 = "sub-system", c0 = "command";
function nt(e, t) {
  const n = e.getElementsByTagName(t);
  if (n.length > 0 && n[0].childNodes.length > 0) {
    const r = n[0].getAttribute("type");
    return r === "integer" ? parseInt(n[0].childNodes[0].nodeValue, 10) : r === "float" ? parseFloat(n[0].childNodes[0].nodeValue) : r === "timestamp" ? Date.parse(n[0].childNodes[0].nodeValue) : n[0].childNodes[0].nodeValue;
  } else
    return null;
}
function d0(e, t) {
  const n = e.getElementsByTagName("destinations"), r = [];
  if (n.length > 0) {
    const a = e.getElementsByTagName("destination");
    if (a.length > 0)
      for (const o of a) {
        const s = Dd[o.getAttribute("type")], l = nt(o, "id");
        s && s != va && (s == Yn && (t.find((i) => {
        }) || t.push(l)), r.push({ type: s, id: l }));
      }
  }
  return r.length > 0 ? r : null;
}
function f0(e) {
  const t = e.getElementsByTagName("commands");
  return t.length === 0 ? [] : Array.from(t[0].getElementsByTagName("command-ref")).map((n) => ({
    type: va,
    id: nt(n, "id")
  }));
}
function p0(e) {
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
function m0(e) {
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
function Fa(e, t) {
  let n = nt(e, "id"), r = nt(e, "ident"), a = nt(e, "name"), o = nt(e, "node-type-id"), s = Dd[nt(e, "type")], l = d0(e, t), i = f0(e), c = p0(e), u = m0(e), d = !!(l != null && l.find((y) => Bs.includes(y.type) && y.id > 0)), p = !!(l != null && l.find((y) => Bs.includes(y.type))), g = !!(l != null && l.find((y) => y.type == mr)), v = !!(l != null && l.find((y) => y.type == Yn));
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
    hasModes: g,
    hasSubsystems: v
  };
}
function ds(e, t) {
  t.forEach((n) => {
    if (n.destinations) {
      let r = n.destinations.map((a) => e.findNode(a.type, a.id));
      n.valuesNodes = r.filter((a) => a.type != mr && a.type != Yn), n.modesNodes = r.filter((a) => a.type === mr), n.subsystemsNodes = r.filter((a) => a.type === Yn), n.modesNodes.forEach((a) => {
        a.parent = n;
      }), n.subsystemsNodes.forEach((a) => {
        a.parent = n;
      });
    }
  });
}
function hu(e) {
  e.forEach((t) => {
    let n = null;
    t.modesNodes && t.modesNodes.length > 0 && (t.defaultModeId ? n = t.modesNodes.find((r) => r.id === t.defaultModeId) : n = t.modesNodes[0]), t.defaultMode = n;
  });
}
function h0(e, t) {
  t.forEach((n) => {
    n.commandsNodes = (n.commandReferences || []).map((r) => e.findNode(r.type, r.id)).filter(Boolean);
  });
}
function v0(e) {
  e.forEach((t) => {
    var n, r;
    t.defaultValue = ((n = t.valuesNodes) == null ? void 0 : n.find((a) => a.id === t.defaultValueId)) || ((r = t.valuesNodes) == null ? void 0 : r[0]) || null;
  });
}
function vu(e, t) {
  const n = {
    values: [],
    modes: [],
    params: [],
    subsystems: [],
    commands: [],
    findNode: function(c, u) {
      let d = null;
      return c == mr ? d = this.modes : c == Yn ? d = this.subsystems : c == va ? d = this.commands : d = this.values, d.find((p) => p.id === u);
    }
  };
  var r = [];
  const o = new DOMParser().parseFromString(t, "text/xml");
  for (const c of l0) {
    let u = o.getElementsByTagName(c);
    for (const d of u) {
      const p = Fa(d, r);
      p.parent = null;
      let g = nt(d, "value-formatter-id");
      p[g] = g;
      const v = p.type;
      if (v == ur) {
        let y = nt(d, "default-float"), S = nt(d, "rangemax"), $ = nt(d, "rangemin");
        p.defaultFloat = y, p.rangemax = S, p.rangemin = $;
      } else if (v == Or) {
        let y = nt(d, "default-string");
        p.defaultString = y;
      } else if (v == Er) {
        let y = nt(d, "default-date"), S = nt(d, "date-max"), $ = nt(d, "date-min");
        p.defaultDate = y, p.datemax = S, p.datemin = $;
      } else if (v == Rr) {
        let y = nt(d, "default-string"), S = nt(d, "file-description"), $ = nt(d, "file-extension");
        p.defaultString = y, p.fileDescription = S, p.fileExtension = $;
      }
      n.values.push(new Va(p));
    }
  }
  const s = o.getElementsByTagName(i0);
  for (const c of s) {
    const u = Fa(c, r);
    let d = nt(c, "default-mode-id"), p = nt(c, "default-value-id");
    u.defaultModeId = d, u.defaultValueId = p, n.modes.push(new Va(u));
  }
  const l = o.getElementsByTagName(c0);
  for (const c of l) {
    const u = Fa(c, r);
    n.commands.push(new Va(u));
  }
  const i = o.getElementsByTagName(u0);
  for (const c of i) {
    const u = Fa(c, r);
    let d = nt(c, "default-mode-id");
    u.defaultModeId = d, n.subsystems.push(new Va(u));
  }
  return n.rootSubsystem = n.subsystems.find((c) => !r.includes(c.id)), ds(n, n.modes), ds(n, n.params), ds(n, n.subsystems), hu(n.modes), hu(n.subsystems), v0(n.modes), h0(n, n.subsystems), n;
}
let Od = !1;
function y0(e) {
  Od = e;
}
function En(...e) {
  Od && console.log(...e);
}
const Ol = ch("model", () => {
  const e = J(null), t = J([]), n = J([]), r = J([]), a = J(), o = J(!1), s = J([]), l = J({});
  function i(k) {
    o.value = !0, mu(`/models/${k}.xml`).then((x) => {
      e.value = x;
      let C = vu(this, x);
      t.value = C.values, n.value = C.modes, r.value = C.subsystems, a.value = C.rootSubsystem, s.value = [], l.value = {}, y(C.rootSubsystem);
    }).finally(() => {
      o.value = !1;
    });
  }
  function c(k) {
    o.value = !0, mu(`${k}`).then((x) => {
      e.value = x;
      let C = vu(this, x);
      t.value = C.values, n.value = C.modes, r.value = C.subsystems, a.value = C.rootSubsystem, s.value = [], l.value = {}, y(C.rootSubsystem);
    }).finally(() => {
      o.value = !1;
    });
  }
  function u(k) {
    return t.value.find((V) => V.id == k);
  }
  function d(k) {
    return n.value.find((V) => V.id == k);
  }
  function p(k) {
    return r.value.find((V) => V.id == k);
  }
  function g(k, V, x) {
    if (k.validModes = x, x.length > 0) {
      let C = k.currentMode, W = null;
      return x.length > 0 ? V != null && x.includes(V) ? W = V : x.includes(k.defaultMode) ? W = k.defaultMode : W = x[0] : W = k.defaultMode, C != W && (k.currentMode = W, k.candidateMode = W, s.value[`${k.id}`] = W), k.hasValues && E(k, W), k.hasSubsystems && k.subsystemsNodes.forEach((Y) => {
        S(Y, Y.currentMode, W);
      }), W;
    } else
      return k.currentMode = null, k.candidateMode = null, null;
  }
  function v(k, V) {
    En(`setValidMode_ ${k.name} ${V == null ? void 0 : V.name}, NOT using supermode`);
    let x = O(k);
    return En(`   setValidMode validModes len ${x.length}`, x), g(k, V, x);
  }
  function y(k, V) {
    Un();
    let x;
    try {
      x = v(k, V);
    } finally {
      Ff();
    }
    return ii(s), ii(l), x;
  }
  function S(k, V, x) {
    let C = Zi(k.modesNodes, x.modesNodes);
    return En(`   setValidMode validModes  len ${C.length}`, C), g(k, V, C);
  }
  function $(k) {
    const V = s.value.reduce((x, C) => k.includes(C.id) ? C : x, null);
    return V || k[0];
  }
  function O(k) {
    return k.parent != null ? (En(`parent: ${k.parent.name}`), En(`parent mode: ${k.parent.currentMode.name}`), En("parent.mode.submodes:", k.parent.currentMode.modesNodes), Zi(k.modesNodes, k.parent.currentMode.modesNodes)) : k.modesNodes;
  }
  function b(k) {
    return O(k).length > 0;
  }
  function T(k, V, x) {
    l.value[`${k.id}`] = { value: V, data: x };
  }
  function E(k, V, x = null) {
    const C = l.value[`${k.id}`] || {};
    if (!(V != null && V.hasValues))
      return T(k, null, null), { value: null, data: null };
    const W = V.valuesNodes || [];
    if (W.length === 0)
      return T(k, null, null), { value: null, data: null };
    const Y = W.find((U) => {
      var _;
      return U.id === ((_ = V.defaultValue) == null ? void 0 : _.id);
    }) || W[0];
    let N = W.find((U) => {
      var _;
      return U.id === ((_ = x || C.value) == null ? void 0 : _.id);
    }) || Y, j = C.data;
    return N.type === ur ? (typeof j != "number" || !Number.isFinite(j) || j < Number(N.rangemin) || j > Number(N.rangemax)) && (j = Number(N.defaultFloat)) : N.type === Or || N.type === Rr ? typeof j != "string" && (j = N.defaultString || "") : N.type === Er && j == null && (j = N.defaultDate), T(k, N, j), { value: N, data: j };
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
    getCurrentMode: $,
    setValidMode: y,
    getValidObjModes: O,
    hasValidObjModes: b,
    getSystemValue: E,
    setSystemValue: T
  };
}), g0 = ["disabled"], b0 = ["value"], Ed = {
  __name: "ModeSelector",
  props: /* @__PURE__ */ wc({
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
    const t = Fs(e, "modelValue"), n = e, r = J(n.modes);
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
      }, We(s.label || s.name), 9, b0))), 128))
    ], 8, g0)), [
      [Ic, t.value]
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
function Rd(e, t) {
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
const $d = 6048e5, w0 = 864e5, _0 = 6e4, x0 = 36e5, k0 = 1e3;
let M0 = {};
function gr() {
  return M0;
}
function mn(e, t) {
  var l, i, c, u;
  const n = gr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((i = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : i.weekStartsOn) ?? n.weekStartsOn ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = Me(e), o = a.getDay(), s = (o < r ? 7 : 0) + o - r;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function $r(e) {
  return mn(e, { weekStartsOn: 1 });
}
function Nd(e) {
  const t = Me(e), n = t.getFullYear(), r = Ue(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const a = $r(r), o = Ue(e, 0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  const s = $r(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function yu(e) {
  const t = Me(e);
  return t.setHours(0, 0, 0, 0), t;
}
function co(e) {
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
function Vd(e, t) {
  const n = yu(e), r = yu(t), a = +n - co(n), o = +r - co(r);
  return Math.round((a - o) / w0);
}
function T0(e) {
  const t = Nd(e), n = Ue(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), $r(n);
}
function P0(e, t) {
  const n = t * 3;
  return Gt(e, n);
}
function El(e, t) {
  return Gt(e, t * 12);
}
function Fd(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function la(e) {
  if (!Fd(e) && typeof e != "number")
    return !1;
  const t = Me(e);
  return !isNaN(Number(t));
}
function gu(e) {
  const t = Me(e);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function Id(e, t) {
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
function sr(e) {
  const t = Me(e), n = t.getMonth(), r = n - n % 3;
  return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
}
function A0(e, t) {
  const n = Me(e.start), r = Me(e.end);
  let a = +n > +r;
  const o = a ? +sr(n) : +sr(r);
  let s = sr(a ? r : n), l = 1;
  const i = [];
  for (; +s <= o; )
    i.push(Me(s)), s = P0(s, l);
  return a ? i.reverse() : i;
}
function S0(e) {
  const t = Me(e), n = t.getFullYear();
  return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function Ld(e) {
  const t = Me(e), n = Ue(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function C0(e, t) {
  var l, i, c, u;
  const n = gr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((i = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : i.weekStartsOn) ?? n.weekStartsOn ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = Me(e), o = a.getDay(), s = (o < r ? -7 : 0) + 6 - (o - r);
  return a.setDate(a.getDate() + s), a.setHours(23, 59, 59, 999), a;
}
function bu(e) {
  const t = Me(e), n = t.getMonth(), r = n - n % 3 + 3;
  return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t;
}
const D0 = {
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
}, O0 = (e, t, n) => {
  let r;
  const a = D0[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function fs(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const E0 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, R0 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, $0 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, N0 = {
  date: fs({
    formats: E0,
    defaultWidth: "full"
  }),
  time: fs({
    formats: R0,
    defaultWidth: "full"
  }),
  dateTime: fs({
    formats: $0,
    defaultWidth: "full"
  })
}, V0 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, F0 = (e, t, n, r) => V0[e];
function Kr(e) {
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
const I0 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, L0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, B0 = {
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
}, Y0 = {
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
}, H0 = {
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
}, j0 = {
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
}, U0 = (e, t) => {
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
}, W0 = {
  ordinalNumber: U0,
  era: Kr({
    values: I0,
    defaultWidth: "wide"
  }),
  quarter: Kr({
    values: L0,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Kr({
    values: B0,
    defaultWidth: "wide"
  }),
  day: Kr({
    values: Y0,
    defaultWidth: "wide"
  }),
  dayPeriod: Kr({
    values: H0,
    defaultWidth: "wide",
    formattingValues: j0,
    defaultFormattingWidth: "wide"
  })
};
function Qr(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const s = o[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], i = Array.isArray(l) ? z0(l, (d) => d.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      q0(l, (d) => d.test(s))
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
function q0(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function z0(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function G0(e) {
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
const K0 = /^(\d+)(th|st|nd|rd)?/i, Q0 = /\d+/i, X0 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, J0 = {
  any: [/^b/i, /^(a|c)/i]
}, Z0 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, eb = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, tb = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, nb = {
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
}, rb = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ab = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ob = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, sb = {
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
}, lb = {
  ordinalNumber: G0({
    matchPattern: K0,
    parsePattern: Q0,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Qr({
    matchPatterns: X0,
    defaultMatchWidth: "wide",
    parsePatterns: J0,
    defaultParseWidth: "any"
  }),
  quarter: Qr({
    matchPatterns: Z0,
    defaultMatchWidth: "wide",
    parsePatterns: eb,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Qr({
    matchPatterns: tb,
    defaultMatchWidth: "wide",
    parsePatterns: nb,
    defaultParseWidth: "any"
  }),
  day: Qr({
    matchPatterns: rb,
    defaultMatchWidth: "wide",
    parsePatterns: ab,
    defaultParseWidth: "any"
  }),
  dayPeriod: Qr({
    matchPatterns: ob,
    defaultMatchWidth: "any",
    parsePatterns: sb,
    defaultParseWidth: "any"
  })
}, Bd = {
  code: "en-US",
  formatDistance: O0,
  formatLong: N0,
  formatRelative: F0,
  localize: W0,
  match: lb,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function ib(e) {
  const t = Me(e);
  return Vd(t, Ld(t)) + 1;
}
function Rl(e) {
  const t = Me(e), n = +$r(t) - +T0(t);
  return Math.round(n / $d) + 1;
}
function $l(e, t) {
  var u, d, p, g;
  const n = Me(e), r = n.getFullYear(), a = gr(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((g = (p = a.locale) == null ? void 0 : p.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, s = Ue(e, 0);
  s.setFullYear(r + 1, 0, o), s.setHours(0, 0, 0, 0);
  const l = mn(s, t), i = Ue(e, 0);
  i.setFullYear(r, 0, o), i.setHours(0, 0, 0, 0);
  const c = mn(i, t);
  return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function ub(e, t) {
  var l, i, c, u;
  const n = gr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((i = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : i.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = $l(e, t), o = Ue(e, 0);
  return o.setFullYear(a, 0, r), o.setHours(0, 0, 0, 0), mn(o, t);
}
function Nl(e, t) {
  const n = Me(e), r = +mn(n, t) - +ub(n, t);
  return Math.round(r / $d) + 1;
}
function ze(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Tn = {
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
}, wr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, wu = {
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
    return Tn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = $l(e, r), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const s = o % 100;
      return ze(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(o, { unit: "year" }) : ze(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = Nd(e);
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
        return Tn.M(e, t);
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
    const a = Nl(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : ze(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Rl(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ze(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Tn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = ib(e);
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
    switch (r === 12 ? a = wr.noon : r === 0 ? a = wr.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? a = wr.evening : r >= 12 ? a = wr.afternoon : r >= 4 ? a = wr.morning : a = wr.night, t) {
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
    return Tn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Tn.H(e, t);
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
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Tn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Tn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Tn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return xu(r);
      case "XXXX":
      case "XX":
        return Zn(r);
      case "XXXXX":
      case "XXX":
      default:
        return Zn(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return xu(r);
      case "xxxx":
      case "xx":
        return Zn(r);
      case "xxxxx":
      case "xxx":
      default:
        return Zn(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + _u(r, ":");
      case "OOOO":
      default:
        return "GMT" + Zn(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + _u(r, ":");
      case "zzzz":
      default:
        return "GMT" + Zn(r, ":");
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
function _u(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), o = r % 60;
  return o === 0 ? n + String(a) : n + String(a) + t + ze(o, 2);
}
function xu(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ze(Math.abs(e) / 60, 2) : Zn(e, t);
}
function Zn(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = ze(Math.trunc(r / 60), 2), o = ze(r % 60, 2);
  return n + a + t + o;
}
const ku = (e, t) => {
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
}, Yd = (e, t) => {
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
}, cb = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return ku(e, t);
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
  return o.replace("{{date}}", ku(r, t)).replace("{{time}}", Yd(a, t));
}, Gs = {
  p: Yd,
  P: cb
}, db = /^D+$/, fb = /^Y+$/, pb = ["D", "DD", "YY", "YYYY"];
function Hd(e) {
  return db.test(e);
}
function jd(e) {
  return fb.test(e);
}
function Ks(e, t, n) {
  const r = mb(e, t, n);
  if (console.warn(r), pb.includes(e)) throw new RangeError(r);
}
function mb(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const hb = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, vb = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, yb = /^'([^]*?)'?$/, gb = /''/g, bb = /[a-zA-Z]/;
function dn(e, t, n) {
  var u, d, p, g, v, y, S, $;
  const r = gr(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? Bd, o = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((g = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : g.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((y = (v = n == null ? void 0 : n.locale) == null ? void 0 : v.options) == null ? void 0 : y.weekStartsOn) ?? r.weekStartsOn ?? (($ = (S = r.locale) == null ? void 0 : S.options) == null ? void 0 : $.weekStartsOn) ?? 0, l = Me(e);
  if (!la(l))
    throw new RangeError("Invalid time value");
  let i = t.match(vb).map((O) => {
    const b = O[0];
    if (b === "p" || b === "P") {
      const T = Gs[b];
      return T(O, a.formatLong);
    }
    return O;
  }).join("").match(hb).map((O) => {
    if (O === "''")
      return { isToken: !1, value: "'" };
    const b = O[0];
    if (b === "'")
      return { isToken: !1, value: wb(O) };
    if (wu[b])
      return { isToken: !0, value: O };
    if (b.match(bb))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + b + "`"
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
    const b = O.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && jd(b) || !(n != null && n.useAdditionalDayOfYearTokens) && Hd(b)) && Ks(b, t, String(e));
    const T = wu[b[0]];
    return T(l, b, a.localize, c);
  }).join("");
}
function wb(e) {
  const t = e.match(yb);
  return t ? t[1].replace(gb, "'") : e;
}
function _b(e) {
  return Me(e).getDay();
}
function xb(e) {
  const t = Me(e), n = t.getFullYear(), r = t.getMonth(), a = Ue(e, 0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function kb() {
  return Object.assign({}, gr());
}
function Kt(e) {
  return Me(e).getHours();
}
function Mb(e) {
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
function $e(e) {
  return Me(e).getFullYear();
}
function ga(e, t) {
  const n = Me(e), r = Me(t);
  return n.getTime() > r.getTime();
}
function ba(e, t) {
  const n = Me(e), r = Me(t);
  return +n < +r;
}
function kr(e, t) {
  const n = Me(e), r = Me(t);
  return +n == +r;
}
function Tb(e, t) {
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
const Pb = 10;
class Ud {
  constructor() {
    fe(this, "subPriority", 0);
  }
  validate(t, n) {
    return !0;
  }
}
class Ab extends Ud {
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
class Sb extends Ud {
  constructor() {
    super(...arguments);
    fe(this, "priority", Pb);
    fe(this, "subPriority", -1);
  }
  set(n, r) {
    return r.timestampIsSet ? n : Ue(n, Tb(n, Date));
  }
}
class je {
  run(t, n, r, a) {
    const o = this.parse(t, n, r, a);
    return o ? {
      setter: new Ab(
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
class Cb extends je {
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
    value: r * (a * x0 + o * _0 + s * k0),
    rest: t.slice(n[0].length)
  };
}
function Wd(e) {
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
function fo(e, t) {
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
function Vl(e) {
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
function qd(e, t) {
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
function zd(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class Db extends je {
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
      const l = qd(
        a.year,
        o
      );
      return n.setFullYear(l, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
    const s = !("era" in r) || r.era === 1 ? a.year : 1 - a.year;
    return n.setFullYear(s, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class Ob extends je {
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
    const s = $l(n, o);
    if (a.isTwoDigitYear) {
      const i = qd(
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
class Eb extends je {
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
    return fo(r === "R" ? 4 : r.length, n);
  }
  set(n, r, a) {
    const o = Ue(n, 0);
    return o.setFullYear(a, 0, 4), o.setHours(0, 0, 0, 0), $r(o);
  }
}
class Rb extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 130);
    fe(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, r) {
    return fo(r === "u" ? 4 : r.length, n);
  }
  set(n, r, a) {
    return n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class $b extends je {
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
class Nb extends je {
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
class Vb extends je {
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
class Fb extends je {
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
function Ib(e, t, n) {
  const r = Me(e), a = Nl(r, n) - t;
  return r.setDate(r.getDate() - a * 7), r;
}
class Lb extends je {
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
    return mn(Ib(n, a, o), o);
  }
}
function Bb(e, t) {
  const n = Me(e), r = Rl(n) - t;
  return n.setDate(n.getDate() - r * 7), n;
}
class Yb extends je {
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
    return $r(Bb(n, a));
  }
}
const Hb = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], jb = [
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
class Ub extends je {
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
    const a = n.getFullYear(), o = zd(a), s = n.getMonth();
    return o ? r >= 1 && r <= jb[s] : r >= 1 && r <= Hb[s];
  }
  set(n, r, a) {
    return n.setDate(a), n.setHours(0, 0, 0, 0), n;
  }
}
class Wb extends je {
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
    return zd(a) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
  }
  set(n, r, a) {
    return n.setMonth(0, a), n.setHours(0, 0, 0, 0), n;
  }
}
function Fl(e, t, n) {
  var d, p, g, v;
  const r = gr(), a = (n == null ? void 0 : n.weekStartsOn) ?? ((p = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : p.weekStartsOn) ?? r.weekStartsOn ?? ((v = (g = r.locale) == null ? void 0 : g.options) == null ? void 0 : v.weekStartsOn) ?? 0, o = Me(e), s = o.getDay(), i = (t % 7 + 7) % 7, c = 7 - a, u = t < 0 || t > 6 ? t - (s + c) % 7 : (i + c) % 7 - (s + c) % 7;
  return Wt(o, u);
}
class qb extends je {
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
    return n = Fl(n, a, o), n.setHours(0, 0, 0, 0), n;
  }
}
class zb extends je {
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
    return n = Fl(n, a, o), n.setHours(0, 0, 0, 0), n;
  }
}
class Gb extends je {
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
    return n = Fl(n, a, o), n.setHours(0, 0, 0, 0), n;
  }
}
function Kb(e, t) {
  const n = Me(e), r = Mb(n), a = t - r;
  return Wt(n, a);
}
class Qb extends je {
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
    return n = Kb(n, a), n.setHours(0, 0, 0, 0), n;
  }
}
class Xb extends je {
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
    return n.setHours(Vl(a), 0, 0, 0), n;
  }
}
class Jb extends je {
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
    return n.setHours(Vl(a), 0, 0, 0), n;
  }
}
class Zb extends je {
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
    return n.setHours(Vl(a), 0, 0, 0), n;
  }
}
class ew extends je {
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
class tw extends je {
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
class nw extends je {
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
class rw extends je {
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
class aw extends je {
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
class ow extends je {
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
class sw extends je {
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
class lw extends je {
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
      n.getTime() - co(n) - a
    );
  }
}
class iw extends je {
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
      n.getTime() - co(n) - a
    );
  }
}
class uw extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 40);
    fe(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return Wd(n);
  }
  set(n, r, a) {
    return [Ue(n, a * 1e3), { timestampIsSet: !0 }];
  }
}
class cw extends je {
  constructor() {
    super(...arguments);
    fe(this, "priority", 20);
    fe(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return Wd(n);
  }
  set(n, r, a) {
    return [Ue(n, a), { timestampIsSet: !0 }];
  }
}
const dw = {
  G: new Cb(),
  y: new Db(),
  Y: new Ob(),
  R: new Eb(),
  u: new Rb(),
  Q: new $b(),
  q: new Nb(),
  M: new Vb(),
  L: new Fb(),
  w: new Lb(),
  I: new Yb(),
  d: new Ub(),
  D: new Wb(),
  E: new qb(),
  e: new zb(),
  c: new Gb(),
  i: new Qb(),
  a: new Xb(),
  b: new Jb(),
  B: new Zb(),
  h: new ew(),
  H: new tw(),
  K: new nw(),
  k: new rw(),
  m: new aw(),
  s: new ow(),
  S: new sw(),
  X: new lw(),
  x: new iw(),
  t: new uw(),
  T: new cw()
}, fw = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, pw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, mw = /^'([^]*?)'?$/, hw = /''/g, vw = /\S/, yw = /[a-zA-Z]/;
function Qs(e, t, n, r) {
  var y, S, $, O;
  const a = kb(), o = a.locale ?? Bd, s = a.firstWeekContainsDate ?? ((S = (y = a.locale) == null ? void 0 : y.options) == null ? void 0 : S.firstWeekContainsDate) ?? 1, l = a.weekStartsOn ?? ((O = ($ = a.locale) == null ? void 0 : $.options) == null ? void 0 : O.weekStartsOn) ?? 0;
  if (t === "")
    return e === "" ? Me(n) : Ue(n, NaN);
  const i = {
    firstWeekContainsDate: s,
    weekStartsOn: l,
    locale: o
  }, c = [new Sb()], u = t.match(pw).map((b) => {
    const T = b[0];
    if (T in Gs) {
      const E = Gs[T];
      return E(b, o.formatLong);
    }
    return b;
  }).join("").match(fw), d = [];
  for (let b of u) {
    jd(b) && Ks(b, t, e), Hd(b) && Ks(b, t, e);
    const T = b[0], E = dw[T];
    if (E) {
      const { incompatibleTokens: k } = E;
      if (Array.isArray(k)) {
        const x = d.find(
          (C) => k.includes(C.token) || C.token === T
        );
        if (x)
          throw new RangeError(
            `The format string mustn't contain \`${x.fullToken}\` and \`${b}\` at the same time`
          );
      } else if (E.incompatibleTokens === "*" && d.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${b}\` and any other token at the same time`
        );
      d.push({ token: T, fullToken: b });
      const V = E.run(
        e,
        b,
        o.match,
        i
      );
      if (!V)
        return Ue(n, NaN);
      c.push(V.setter), e = V.rest;
    } else {
      if (T.match(yw))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + T + "`"
        );
      if (b === "''" ? b = "'" : T === "'" && (b = gw(b)), e.indexOf(b) === 0)
        e = e.slice(b.length);
      else
        return Ue(n, NaN);
    }
  }
  if (e.length > 0 && vw.test(e))
    return Ue(n, NaN);
  const p = c.map((b) => b.priority).sort((b, T) => T - b).filter((b, T, E) => E.indexOf(b) === T).map(
    (b) => c.filter((T) => T.priority === b).sort((T, E) => E.subPriority - T.subPriority)
  ).map((b) => b[0]);
  let g = Me(n);
  if (isNaN(g.getTime()))
    return Ue(n, NaN);
  const v = {};
  for (const b of p) {
    if (!b.validate(g, i))
      return Ue(n, NaN);
    const T = b.set(g, v, i);
    Array.isArray(T) ? (g = T[0], Object.assign(v, T[1])) : g = T;
  }
  return Ue(n, g);
}
function gw(e) {
  return e.match(mw)[1].replace(hw, "'");
}
function Mu(e, t) {
  const n = sr(e), r = sr(t);
  return +n == +r;
}
function bw(e, t) {
  return Wt(e, -t);
}
function Gd(e, t) {
  const n = Me(e), r = n.getFullYear(), a = n.getDate(), o = Ue(e, 0);
  o.setFullYear(r, t, 15), o.setHours(0, 0, 0, 0);
  const s = xb(o);
  return n.setMonth(t, Math.min(a, s)), n;
}
function Ze(e, t) {
  let n = Me(e);
  return isNaN(+n) ? Ue(e, NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = Gd(n, t.month)), t.date != null && n.setDate(t.date), t.hours != null && n.setHours(t.hours), t.minutes != null && n.setMinutes(t.minutes), t.seconds != null && n.setSeconds(t.seconds), t.milliseconds != null && n.setMilliseconds(t.milliseconds), n);
}
function Kd(e, t) {
  const n = Me(e);
  return n.setHours(t), n;
}
function Il(e, t) {
  const n = Me(e);
  return n.setMilliseconds(t), n;
}
function Qd(e, t) {
  const n = Me(e);
  return n.setMinutes(t), n;
}
function Ll(e, t) {
  const n = Me(e);
  return n.setSeconds(t), n;
}
function un(e, t) {
  const n = Me(e);
  return isNaN(+n) ? Ue(e, NaN) : (n.setFullYear(t), n);
}
function Vr(e, t) {
  return Gt(e, -t);
}
function ww(e, t) {
  const {
    years: n = 0,
    months: r = 0,
    weeks: a = 0,
    days: o = 0,
    hours: s = 0,
    minutes: l = 0,
    seconds: i = 0
  } = t, c = Vr(e, r + n * 12), u = bw(c, o + a * 7), d = l + s * 60, g = (i + d * 60) * 1e3;
  return Ue(e, u.getTime() - g);
}
function Xd(e, t) {
  return El(e, -t);
}
function Ur() {
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
Ur.compatConfig = {
  MODE: 3
};
function Jd() {
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
Jd.compatConfig = {
  MODE: 3
};
function Bl() {
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
Bl.compatConfig = {
  MODE: 3
};
function Yl() {
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
Yl.compatConfig = {
  MODE: 3
};
function Hl() {
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
Hl.compatConfig = {
  MODE: 3
};
function jl() {
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
jl.compatConfig = {
  MODE: 3
};
function Ul() {
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
Ul.compatConfig = {
  MODE: 3
};
function Tu(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function _w(e) {
  return (t) => dn(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const xw = (e, t, n) => {
  const r = [1, 2, 3, 4, 5, 6, 7];
  let a;
  if (e !== null)
    try {
      a = r.map(_w(e));
    } catch {
      a = r.map(Tu(t));
    }
  else
    a = r.map(Tu(t));
  const o = a.slice(0, n), s = a.slice(n + 1, a.length);
  return [a[n]].concat(...s).concat(...o);
}, Wl = (e, t) => {
  const n = [];
  for (let r = +e[0]; r <= +e[1]; r++)
    n.push({ value: +r, text: `${r}` });
  return t ? n.reverse() : n;
}, Zd = (e, t, n) => {
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
}, kw = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], gt = (e) => {
  const t = M(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, Mw = (e) => ({ type: "dot", ...e ?? {} }), ef = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, ql = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, bt = (e) => e, Pu = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Au = (e) => e === null, tf = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, Tw = (e) => {
  const t = [], n = (r) => r.filter((a) => a);
  for (let r = 0; r < e.length; r += 3) {
    const a = [e[r], e[r + 1], e[r + 2]];
    t.push(n(a));
  }
  return t;
}, wa = (e, t, n) => {
  const r = n != null, a = t != null;
  if (!r && !a)
    return !1;
  const o = +n, s = +t;
  return r && a ? +e > o || +e < s : r ? +e > o : a ? +e < s : !1;
}, Fr = (e, t) => Tw(e).map((n) => n.map((r) => {
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
}, Pw = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function Aw(e, t) {
  let n = [...document.querySelectorAll(Pw())];
  n = n.filter((a) => !e.contains(a) || a.hasAttribute("data-datepicker-instance"));
  const r = n.indexOf(e);
  if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length))
    return n[r + (t ? -1 : 1)];
}
const Sw = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), zl = (e) => dn(e, "dd-MM-yyyy"), ps = (e) => Array.isArray(e), po = (e, t) => t.get(zl(e)), Cw = (e, t) => e ? t ? t instanceof Map ? !!po(e, t) : t(Z(e)) : !1 : !0, Su = (e, t, n, r, a) => {
  const o = Qs(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return la(o) && Fd(o) ? r || a ? o : Ze(o, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, Dw = (e, t, n, r, a) => {
  const o = Array.isArray(n) ? n[0] : n;
  if (typeof t == "string")
    return Su(e, t, o, r, a);
  if (Array.isArray(t)) {
    let s = null;
    for (const l of t)
      if (s = Su(e, l, o, r, a), s)
        break;
    return s;
  }
  return typeof t == "function" ? t(e) : null;
}, Z = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Ow = (e, t, n) => {
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
  return t = Kd(t, 0), t = Qd(t, 0), t = Ll(t, 0), t = Il(t, 0), t;
}, In = (e, t, n, r) => {
  let a = e ? Z(e) : Z();
  return (t || t === 0) && (a = Kd(a, +t)), (n || n === 0) && (a = Qd(a, +n)), (r || r === 0) && (a = Ll(a, +r)), Il(a, 0);
}, it = (e, t) => !e || !t ? !1 : ba(It(e), It(t)), Le = (e, t) => !e || !t ? !1 : kr(It(e), It(t)), dt = (e, t) => !e || !t ? !1 : ga(It(e), It(t)), Ho = (e, t, n) => e != null && e[0] && e != null && e[1] ? dt(n, e[0]) && it(n, e[1]) : e != null && e[0] && t ? dt(n, e[0]) && it(n, t) || it(n, e[0]) && dt(n, t) : !1, qt = (e) => {
  const t = Ze(new Date(e), { date: 1 });
  return It(t);
}, ms = (e, t, n) => t && (n || n === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((r) => r === t ? [r, n] : [r, isNaN(+e[r]) ? void 0 : +e[r]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, dr = (e) => ({
  hours: Kt(e),
  minutes: fn(e),
  seconds: Nr(e)
}), nf = (e, t) => {
  if (t) {
    const n = $e(Z(t));
    if (n > e)
      return 12;
    if (n === e)
      return Ie(Z(t));
  }
}, rf = (e, t) => {
  if (t) {
    const n = $e(Z(t));
    return n < e ? -1 : n === e ? Ie(Z(t)) : void 0;
  }
}, Ir = (e) => {
  if (e)
    return $e(Z(e));
}, af = (e, t) => {
  const n = dt(e, t) ? t : e, r = dt(t, e) ? t : e;
  return Id({ start: n, end: r });
}, Ew = (e) => {
  const t = Gt(e, 1);
  return { month: Ie(t), year: $e(t) };
}, hn = (e, t) => {
  const n = mn(e, { weekStartsOn: +t }), r = C0(e, { weekStartsOn: +t });
  return [n, r];
}, of = (e, t) => {
  const n = {
    hours: Kt(Z()),
    minutes: fn(Z()),
    seconds: t ? Nr(Z()) : 0
  };
  return Object.assign(n, e);
}, Rn = (e, t, n) => [Ze(Z(e), { date: 1 }), Ze(Z(), { month: t, year: n, date: 1 })], vn = (e, t, n) => {
  let r = e ? Z(e) : Z();
  return (t || t === 0) && (r = Gd(r, t)), n && (r = un(r, n)), r;
}, sf = (e, t, n, r, a) => {
  if (!r || a && !t || !a && !n)
    return !1;
  const o = a ? Gt(e, 1) : Vr(e, 1), s = [Ie(o), $e(o)];
  return a ? !$w(...s, t) : !Rw(...s, n);
}, Rw = (e, t, n) => it(...Rn(n, e, t)) || Le(...Rn(n, e, t)), $w = (e, t, n) => dt(...Rn(n, e, t)) || Le(...Rn(n, e, t)), lf = (e, t, n, r, a, o, s) => {
  if (typeof t == "function" && !s)
    return t(e);
  const l = n ? { locale: n } : void 0;
  return Array.isArray(e) ? `${dn(e[0], o, l)}${a && !e[1] ? "" : r}${e[1] ? dn(e[1], o, l) : ""}` : dn(e, o, l);
}, _r = (e) => {
  if (e)
    return null;
  throw new Error(ql.prop("partial-range"));
}, Ia = (e, t) => {
  if (t)
    return e();
  throw new Error(ql.prop("range"));
}, Xs = (e) => Array.isArray(e) ? la(e[0]) && (e[1] ? la(e[1]) : !0) : e ? la(e) : !1, Nw = (e, t) => Ze(t ?? Z(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), hs = (e, t, n, r) => {
  if (!e)
    return !0;
  if (r) {
    const a = n === "max" ? ba(e, t) : ga(e, t), o = { seconds: 0, milliseconds: 0 };
    return a || kr(Ze(e, o), Ze(t, o));
  }
  return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, vs = (e, t, n) => e ? Nw(e, t) : Z(n ?? t), Cu = (e, t, n, r, a) => {
  if (Array.isArray(r)) {
    const s = vs(e, r[0], t), l = vs(e, r[1], t);
    return hs(r[0], s, n, !!t) && hs(r[1], l, n, !!t) && a;
  }
  const o = vs(e, r, t);
  return hs(r, o, n, !!t) && a;
}, ys = (e) => Ze(Z(), dr(e)), Vw = (e, t) => e instanceof Map ? Array.from(e.values()).filter((n) => $e(Z(n)) === t).map((n) => Ie(n)) : [], uf = (e, t, n) => typeof e == "function" ? e({ month: t, year: n }) : !!e.months.find((r) => r.month === t && r.year === n), Gl = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), Xr = gn({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), cf = () => {
  const e = (n) => {
    Xr.menuFocused = n;
  }, t = (n) => {
    Xr.shiftKeyInMenu !== n && (Xr.shiftKeyInMenu = n);
  };
  return {
    control: re(() => ({ shiftKeyInMenu: Xr.shiftKeyInMenu, menuFocused: Xr.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, et = gn({
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
}), gs = J(null), La = J(!1), bs = J(!1), ws = J(!1), _s = J(!1), At = J(0), kt = J(0), qn = () => {
  const e = re(() => La.value ? [...et.selectionGrid, et.actionRow].filter((d) => d.length) : bs.value ? [
    ...et.timePicker[0],
    ...et.timePicker[1],
    _s.value ? [] : [gs.value],
    et.actionRow
  ].filter((d) => d.length) : ws.value ? [...et.monthPicker, et.actionRow] : [et.monthYear, ...et.calendar, et.time, et.actionRow].filter((d) => d.length)), t = (d) => {
    At.value = d ? At.value + 1 : At.value - 1;
    let p = null;
    e.value[kt.value] && (p = e.value[kt.value][At.value]), p || (At.value = d ? At.value - 1 : At.value + 1);
  }, n = (d) => {
    kt.value === 0 && !d || kt.value === e.value.length && d || (kt.value = d ? kt.value + 1 : kt.value - 1, e.value[kt.value] ? e.value[kt.value] && !e.value[kt.value][At.value] && At.value !== 0 && (At.value = e.value[kt.value].length - 1) : kt.value = d ? kt.value - 1 : kt.value + 1);
  }, r = (d) => {
    let p = null;
    e.value[kt.value] && (p = e.value[kt.value][At.value]), p ? p.focus({ preventScroll: !La.value }) : At.value = d ? At.value - 1 : At.value + 1;
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
    At.value = 0, kt.value = 0;
  };
  return {
    buildMatrix: i,
    buildMultiLevelMatrix: c,
    setTimePickerBackRef: (d) => {
      gs.value = d;
    },
    setSelectionGrid: (d) => {
      La.value = d, u(), d || (et.selectionGrid = []);
    },
    setTimePicker: (d, p = !1) => {
      bs.value = d, _s.value = p, u(), d || (et.timePicker[0] = [], et.timePicker[1] = []);
    },
    setTimePickerElements: (d, p = 0) => {
      et.timePicker[p] = d;
    },
    arrowRight: a,
    arrowLeft: o,
    arrowUp: s,
    arrowDown: l,
    clearArrowNav: () => {
      et.monthYear = [], et.calendar = [], et.time = [], et.actionRow = [], et.selectionGrid = [], et.timePicker[0] = [], et.timePicker[1] = [], La.value = !1, bs.value = !1, _s.value = !1, ws.value = !1, u(), gs.value = null;
    },
    setMonthPicker: (d) => {
      ws.value = d, u();
    },
    refSets: et
    // exposed for testing
  };
}, Hn = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), df = (e, t) => Js(e, t) || Z(), Fw = (e, t) => t.dateInTz ? Hn(new Date(e), t.dateInTz) : Z(e), Js = (e, t) => {
  if (!e)
    return null;
  if (!t)
    return Z(e);
  const n = Z(e);
  return t.exactMatch ? Fw(e, t) : Hn(n, t.timezone);
}, Du = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), Iw = (e) => ({
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
}), Ou = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, Lw = (e) => {
  const t = typeof e == "object" && e, n = {
    static: !0,
    solo: !1
  };
  if (!e)
    return { ...n, count: Ou(!1) };
  const r = t ? e : {}, a = t ? r.count ?? !0 : e, o = Ou(a);
  return Object.assign(n, r, { count: o });
}, Bw = (e, t, n) => e || (typeof n == "string" ? n : t), Yw = (e) => typeof e == "boolean" ? e ? Du({}) : !1 : Du(e), Hw = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, jw = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), Uw = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), Ww = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, qw = (e) => ({ allowStopPropagation: !0, closeOnScroll: !1, modeHeight: 255, allowPreventDefault: !1, closeOnClearValue: !0, closeOnAutoApply: !0, noSwipe: !1, keepActionRow: !1, onClickOutside: void 0, tabOutClosesMenu: !0, ...e ?? {} }), zw = (e) => {
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
}, Gw = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, Kw = (e, t) => typeof e == "object" ? { enabled: !0, ...{
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
}, Qw = (e, t) => e ? typeof e == "string" ? { timezone: e, exactMatch: !1, dateInTz: void 0, emitTimezone: t } : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: t ?? e.emitTimezone
} : { timezone: void 0, exactMatch: !1, emitTimezone: t }, xs = (e, t) => new Map(
  e.map((n) => {
    const r = df(n, t);
    return [zl(r), r];
  })
), Xw = (e, t) => e.length ? new Map(
  e.map((n) => {
    const r = df(n.date, t);
    return [zl(r), n];
  })
) : null, Jw = (e, t, n, r, a, o, s) => ({
  minDate: Js(e, s),
  maxDate: Js(t, s),
  disabledDates: ps(n) ? xs(n, s) : n,
  allowedDates: ps(r) ? xs(r, s) : null,
  highlight: typeof a == "object" && ps(a == null ? void 0 : a.dates) ? xs(a.dates, s) : a,
  markers: Xw(o, s)
}), st = (e) => {
  const t = () => {
    const T = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${T}` : `hh:mm${T} aa`;
  }, n = () => {
    var T;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((T = S.value) == null ? void 0 : T.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, r = (T) => of(T, e.enableSeconds), a = () => b.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [r(e.startTime[0]), r(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? r(e.startTime) : null, o = re(() => Lw(e.multiCalendars)), s = re(() => a()), l = re(() => Iw(e.ariaLabels)), i = re(() => jw(e.filters)), c = re(() => Yw(e.transitions)), u = re(() => Uw(e.actionRow)), d = re(
    () => Bw(e.previewFormat, e.format, n())
  ), p = re(() => Hw(e.textInput)), g = re(() => Ww(e.inline)), v = re(() => qw(e.config)), y = re(() => zw(e.highlight)), S = re(() => Gw(e.weekNumbers)), $ = re(() => Qw(e.timezone, e.emitTimezone)), O = re(
    () => Jw(
      e.minDate,
      e.maxDate,
      e.disabledDates,
      e.allowedDates,
      y.value,
      e.markers,
      $.value
    )
  ), b = re(
    () => Kw(e.range, {
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
    defaultedInline: g,
    defaultedConfig: v,
    defaultedHighlight: y,
    defaultedWeekNumbers: S,
    defaultedRange: b,
    propDates: O,
    defaultedTz: $,
    getDefaultPattern: n,
    getDefaultStartTime: a
  };
}, Zw = (e, t, n) => {
  const r = J(), { defaultedTextInput: a, defaultedRange: o, defaultedTz: s, getDefaultPattern: l } = st(t), i = J(""), c = Ka(t, "format");
  ft(
    r,
    () => {
      e("internal-model-change", r.value);
    },
    { deep: !0 }
  ), ft(c, () => {
    U();
  });
  const u = (m, f, R = !1) => lf(
    m,
    t.format,
    t.formatLocale,
    a.value.rangeSeparator,
    t.modelAuto,
    f ?? l(),
    R
  ), d = (m) => m ? t.modelType ? P(m) : {
    hours: Kt(m),
    minutes: fn(m),
    seconds: t.enableSeconds ? Nr(m) : 0
  } : null, p = (m) => t.modelType ? P(m) : { month: Ie(m), year: $e(m) }, g = (m) => Array.isArray(m) ? t.multiDates ? m.map((f) => v(f, un(Z(), f))) : Ia(
    () => [
      un(Z(), m[0]),
      m[1] ? un(Z(), m[1]) : _r(o.value.partialRange)
    ],
    o.value.enabled
  ) : un(Z(), +m), v = (m, f) => (typeof m == "string" || typeof m == "number") && t.modelType ? _(m) : f, y = (m) => Array.isArray(m) ? [
    v(
      m[0],
      In(null, +m[0].hours, +m[0].minutes, m[0].seconds)
    ),
    v(
      m[1],
      In(null, +m[1].hours, +m[1].minutes, m[1].seconds)
    )
  ] : v(m, In(null, m.hours, m.minutes, m.seconds)), S = (m) => {
    const f = Ze(Z(), { date: 1 });
    return Array.isArray(m) ? t.multiDates ? m.map((R) => v(R, vn(f, +R.month, +R.year))) : Ia(
      () => [
        v(m[0], vn(f, +m[0].month, +m[0].year)),
        v(
          m[1],
          m[1] ? vn(f, +m[1].month, +m[1].year) : _r(o.value.partialRange)
        )
      ],
      o.value.enabled
    ) : v(m, vn(f, +m.month, +m.year));
  }, $ = (m) => {
    if (Array.isArray(m))
      return m.map((f) => _(f));
    throw new Error(ql.dateArr("multi-dates"));
  }, O = (m) => {
    if (Array.isArray(m) && o.value.enabled) {
      const f = m[0], R = m[1];
      return [
        Z(Array.isArray(f) ? f[0] : null),
        Z(Array.isArray(R) ? R[0] : null)
      ];
    }
    return Z(m[0]);
  }, b = (m) => t.modelAuto ? Array.isArray(m) ? [_(m[0]), _(m[1])] : t.autoApply ? [_(m)] : [_(m), null] : Array.isArray(m) ? Ia(
    () => m[1] ? [
      _(m[0]),
      m[1] ? _(m[1]) : _r(o.value.partialRange)
    ] : [_(m[0])],
    o.value.enabled
  ) : _(m), T = () => {
    Array.isArray(r.value) && o.value.enabled && r.value.length === 1 && r.value.push(_r(o.value.partialRange));
  }, E = () => {
    const m = r.value;
    return [
      P(m[0]),
      m[1] ? P(m[1]) : _r(o.value.partialRange)
    ];
  }, k = () => r.value[1] ? E() : P(bt(r.value[0])), V = () => (r.value || []).map((m) => P(m)), x = () => (T(), t.modelAuto ? k() : t.multiDates ? V() : Array.isArray(r.value) ? Ia(() => E(), o.value.enabled) : P(bt(r.value))), C = (m) => !m || Array.isArray(m) && !m.length ? null : t.timePicker ? y(bt(m)) : t.monthPicker ? S(bt(m)) : t.yearPicker ? g(bt(m)) : t.multiDates ? $(bt(m)) : t.weekPicker ? O(bt(m)) : b(bt(m)), W = (m) => {
    const f = C(m);
    Xs(bt(f)) ? (r.value = bt(f), U()) : (r.value = null, i.value = "");
  }, Y = () => {
    const m = (f) => dn(f, a.value.format);
    return `${m(r.value[0])} ${a.value.rangeSeparator} ${r.value[1] ? m(r.value[1]) : ""}`;
  }, N = () => n.value && r.value ? Array.isArray(r.value) ? Y() : dn(r.value, a.value.format) : u(r.value), j = () => r.value ? t.multiDates ? r.value.map((m) => u(m)).join("; ") : a.value.enabled && typeof a.value.format == "string" ? N() : u(r.value) : "", U = () => {
    !t.format || typeof t.format == "string" || a.value.enabled && typeof a.value.format == "string" ? i.value = j() : i.value = t.format(r.value);
  }, _ = (m) => {
    if (t.utc) {
      const f = new Date(m);
      return t.utc === "preserve" ? new Date(f.getTime() + f.getTimezoneOffset() * 6e4) : f;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? new Date(m) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Qs(m, l(), /* @__PURE__ */ new Date()) : Qs(m, t.modelType, /* @__PURE__ */ new Date()) : new Date(m);
  }, P = (m) => m ? t.utc ? Ow(m, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +m : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? u(m) : u(m, t.modelType, !0) : m : "", G = (m, f = !1) => {
    if (e("update:model-value", m), s.value.emitTimezone && f) {
      const R = Array.isArray(m) ? m.map((Q) => Hn(bt(Q), s.value.emitTimezone)) : Hn(bt(m), s.value.emitTimezone);
      e("update:model-timezone-value", R);
    }
  }, se = (m) => Array.isArray(r.value) ? t.multiDates ? r.value.map((f) => m(f)) : [
    m(r.value[0]),
    r.value[1] ? m(r.value[1]) : _r(o.value.partialRange)
  ] : m(bt(r.value)), pe = () => {
    if (Array.isArray(r.value)) {
      const m = hn(r.value[0], t.weekStart), f = r.value[1] ? hn(r.value[1], t.weekStart) : [];
      return [m.map((R) => Z(R)), f.map((R) => Z(R))];
    }
    return hn(r.value, t.weekStart).map((m) => Z(m));
  }, ee = (m) => G(bt(se(m)));
  return {
    inputValue: i,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? o.value.enabled ? o.value.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: W,
    formatInputValue: U,
    emitModelValue: () => (U(), t.monthPicker ? ee(p) : t.timePicker ? ee(d) : t.yearPicker ? ee($e) : t.weekPicker ? e("update:model-value", pe()) : G(x(), !0))
  };
}, e_ = (e, t) => {
  const { defaultedFilters: n, propDates: r } = st(e), { validateMonthYearInRange: a } = zn(e), o = (u, d) => {
    let p = u;
    return n.value.months.includes(Ie(p)) ? (p = d ? Gt(u, 1) : Vr(u, 1), o(p, d)) : p;
  }, s = (u, d) => {
    let p = u;
    return n.value.years.includes($e(p)) ? (p = d ? El(u, 1) : Xd(u, 1), s(p, d)) : p;
  }, l = (u, d = !1) => {
    const p = Ze(Z(), { month: e.month, year: e.year });
    let g = u ? Gt(p, 1) : Vr(p, 1);
    e.disableYearSelect && (g = un(g, e.year));
    let v = Ie(g), y = $e(g);
    n.value.months.includes(v) && (g = o(g, u), v = Ie(g), y = $e(g)), n.value.years.includes(y) && (g = s(g, u), y = $e(g)), a(v, y, u, e.preventMinMaxNavigation) && i(v, y, d);
  }, i = (u, d, p) => {
    t("update-month-year", { month: u, year: d, fromNav: p });
  }, c = re(() => (u) => sf(
    Ze(Z(), { month: e.month, year: e.year }),
    r.value.maxDate,
    r.value.minDate,
    e.preventMinMaxNavigation,
    u
  ));
  return { handleMonthYearChange: l, isDisabled: c, updateMonthYear: i };
};
var xr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(xr || {}), Ut = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Ut || {}), er = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(er || {}), fr = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(fr || {}), rn = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(rn || {});
const t_ = ({
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
  }), d = J(!1), p = Ka(s, "teleportCenter");
  ft(p, () => {
    u.value = JSON.parse(JSON.stringify({})), T();
  });
  const g = (_) => {
    if (s.teleport) {
      const P = _.getBoundingClientRect();
      return {
        left: P.left + window.scrollX,
        top: P.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, v = (_, P) => {
    u.value.left = `${_ + P - i.value.width}px`;
  }, y = (_) => {
    u.value.left = `${_}px`;
  }, S = (_, P) => {
    s.position === xr.left && y(_), s.position === xr.right && v(_, P), s.position === xr.center && (u.value.left = `${_ + P / 2 - i.value.width / 2}px`);
  }, $ = (_) => {
    const { width: P, height: G } = _.getBoundingClientRect(), { top: se, left: pe } = s.altPosition ? s.altPosition(_) : g(_);
    return { top: +se, left: +pe, width: P, height: G };
  }, O = () => {
    u.value.left = "50%", u.value.top = "50%", u.value.transform = "translate(-50%, -50%)", u.value.position = "fixed", delete u.value.opacity;
  }, b = () => {
    const _ = gt(n), { top: P, left: G, transform: se } = s.altPosition(_);
    u.value = { top: `${P}px`, left: `${G}px`, transform: se ?? "" };
  }, T = (_ = !0) => {
    var P;
    if (!a.value.enabled) {
      if (p.value)
        return O();
      if (s.altPosition !== null)
        return b();
      if (_) {
        const G = s.teleport ? (P = t.value) == null ? void 0 : P.$el : e.value;
        G && (i.value = G.getBoundingClientRect()), o("recalculate-position");
      }
      return Y();
    }
  }, E = ({ inputEl: _, left: P, width: G }) => {
    window.screen.width > 768 && !c.value && S(P, G), x(_);
  }, k = (_) => {
    const { top: P, left: G, height: se, width: pe } = $(_);
    u.value.top = `${se + P + +s.offset}px`, d.value = !1, c.value || (u.value.left = `${G + pe / 2 - i.value.width / 2}px`), E({ inputEl: _, left: G, width: pe });
  }, V = (_) => {
    const { top: P, left: G, width: se } = $(_);
    u.value.top = `${P - +s.offset - i.value.height}px`, d.value = !0, E({ inputEl: _, left: G, width: se });
  }, x = (_) => {
    if (s.autoPosition) {
      const { left: P, width: G } = $(_), { left: se, right: pe } = i.value;
      if (!c.value) {
        if (Math.abs(se) !== Math.abs(pe)) {
          if (se <= 0)
            return c.value = !0, y(P);
          if (pe >= document.documentElement.clientWidth)
            return c.value = !0, v(P, G);
        }
        return S(P, G);
      }
    }
  }, C = () => {
    const _ = gt(n);
    if (_) {
      const { height: P } = i.value, { top: G, height: se } = _.getBoundingClientRect(), pe = window.innerHeight - G - se, ee = G;
      return P <= pe ? er.bottom : P > pe && P <= ee ? er.top : pe >= ee ? er.bottom : er.top;
    }
    return er.bottom;
  }, W = (_) => C() === er.bottom ? k(_) : V(_), Y = () => {
    const _ = gt(n);
    if (_)
      return s.autoPosition ? W(_) : k(_);
  }, N = function(_) {
    if (_) {
      const P = _.scrollHeight > _.clientHeight, G = window.getComputedStyle(_).overflowY.indexOf("hidden") !== -1;
      return P && !G;
    }
    return !0;
  }, j = function(_) {
    return !_ || _ === document.body || _.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : N(_) ? _ : j(_.parentNode);
  }, U = (_) => {
    if (_)
      switch (s.position) {
        case xr.left:
          return { left: 0, transform: "translateX(0)" };
        case xr.right:
          return { left: `${_.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${_.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: d,
    menuStyle: u,
    xCorrect: c,
    setMenuPosition: T,
    getScrollableParent: j,
    shadowRender: (_, P) => {
      var G, se, pe;
      const ee = document.createElement("div"), m = (G = gt(n)) == null ? void 0 : G.getBoundingClientRect();
      ee.setAttribute("id", "dp--temp-container");
      const f = (se = r.value) != null && se.clientWidth ? r.value : document.body;
      f.append(ee);
      const R = U(m), Q = Nc(
        _,
        {
          ...P,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...R }
        },
        Object.fromEntries(
          Object.keys(l).filter((ce) => ["right-sidebar", "left-sidebar"].includes(ce)).map((ce) => [ce, l[ce]])
        )
      );
      Hi(Q, ee), i.value = (pe = Q.el) == null ? void 0 : pe.getBoundingClientRect(), Hi(null, ee), f.removeChild(ee);
    }
  };
}, Pn = [
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
], n_ = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], r_ = {
  all: () => Pn,
  monthYear: () => Pn.filter((e) => e.use.includes("month-year")),
  input: () => n_,
  timePicker: () => Pn.filter((e) => e.use.includes("time")),
  action: () => Pn.filter((e) => e.use.includes("action")),
  calendar: () => Pn.filter((e) => e.use.includes("calendar")),
  menu: () => Pn.filter((e) => e.use.includes("menu")),
  shared: () => Pn.filter((e) => e.use.includes("shared")),
  yearMode: () => Pn.filter((e) => e.use.includes("year-mode"))
}, Vt = (e, t, n) => {
  const r = [];
  return r_[t]().forEach((a) => {
    e[a.name] && r.push(a.name);
  }), n != null && n.length && n.forEach((a) => {
    a.slot && r.push(a.slot);
  }), r;
}, Ta = (e) => {
  const t = re(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), n = re(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: n };
}, Pa = (e, t) => {
  const { defaultedRange: n, defaultedTz: r } = st(e), a = Z(Hn(Z(), r.value.timezone)), o = J([{ month: Ie(a), year: $e(a) }]), s = gn({
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
}, a_ = (e, t) => {
  const { defaultedMultiCalendars: n, defaultedHighlight: r, defaultedTz: a, propDates: o, defaultedRange: s } = st(t), { isDisabled: l } = zn(t), i = J(null), c = J(Hn(/* @__PURE__ */ new Date(), a.value.timezone)), u = (f) => {
    !f.current && t.hideOffsetDates || (i.value = f.value);
  }, d = () => {
    i.value = null;
  }, p = (f) => Array.isArray(e.value) && s.value.enabled && e.value[0] && i.value ? f ? dt(i.value, e.value[0]) : it(i.value, e.value[0]) : !0, g = (f, R) => {
    const Q = () => e.value ? R ? e.value[0] || null : e.value[1] : null, ce = e.value && Array.isArray(e.value) ? Q() : null;
    return Le(Z(f.value), ce);
  }, v = (f) => {
    const R = Array.isArray(e.value) ? e.value[0] : null;
    return f ? !it(i.value ?? null, R) : !0;
  }, y = (f, R = !0) => (s.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !f.current ? !1 : Le(Z(f.value), e.value[R ? 0 : 1]) : s.value.enabled ? g(f, R) && v(R) || Le(f.value, Array.isArray(e.value) ? e.value[0] : null) && p(R) : !1, S = (f, R, Q) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? f ? !1 : Q ? dt(e.value[0], R.value) : it(e.value[0], R.value) : !1, $ = (f) => !e.value || t.hideOffsetDates && !f.current ? !1 : s.value.enabled ? t.modelAuto && Array.isArray(e.value) ? Le(f.value, e.value[0] ? e.value[0] : c.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((R) => Le(R, f.value)) : Le(f.value, e.value ? e.value : c.value), O = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const R = Wt(i.value, +s.value.autoRange), Q = hn(Z(i.value), t.weekStart);
        return t.weekPicker ? Le(Q[1], Z(f.value)) : Le(R, Z(f.value));
      }
      return !1;
    }
    return !1;
  }, b = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (i.value) {
        const R = Wt(i.value, +s.value.autoRange);
        if (t.hideOffsetDates && !f.current)
          return !1;
        const Q = hn(Z(i.value), t.weekStart);
        return t.weekPicker ? dt(f.value, Q[0]) && it(f.value, Q[1]) : dt(f.value, i.value) && it(f.value, R);
      }
      return !1;
    }
    return !1;
  }, T = (f) => {
    if (s.value.autoRange || t.weekPicker) {
      if (i.value) {
        if (t.hideOffsetDates && !f.current)
          return !1;
        const R = hn(Z(i.value), t.weekStart);
        return t.weekPicker ? Le(R[0], f.value) : Le(i.value, f.value);
      }
      return !1;
    }
    return !1;
  }, E = (f) => Ho(e.value, i.value, f.value), k = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, V = () => t.modelAuto ? ef(t.internalModelValue) : !0, x = (f) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const R = s.value.enabled ? !y(f) && !y(f, !1) : !0;
    return !l(f.value) && !$(f) && !(!f.current && t.hideOffsetDates) && R;
  }, C = (f) => s.value.enabled ? t.modelAuto ? k() && $(f) : !1 : $(f), W = (f) => r.value ? Cw(f.value, o.value.highlight) : !1, Y = (f) => {
    const R = l(f.value);
    return R && (typeof r.value == "function" ? !r.value(f.value, R) : !r.value.options.highlightDisabled);
  }, N = (f) => {
    var R;
    return typeof r.value == "function" ? r.value(f.value) : (R = r.value.weekdays) == null ? void 0 : R.includes(f.value.getDay());
  }, j = (f) => (s.value.enabled || t.weekPicker) && (!(n.value.count > 0) || f.current) && V() && !(!f.current && t.hideOffsetDates) && !$(f) ? E(f) : !1, U = (f) => {
    const { isRangeStart: R, isRangeEnd: Q } = se(f), ce = s.value.enabled ? R || Q : !1;
    return {
      dp__cell_offset: !f.current,
      dp__pointer: !t.disabled && !(!f.current && t.hideOffsetDates) && !l(f.value),
      dp__cell_disabled: l(f.value),
      dp__cell_highlight: !Y(f) && (W(f) || N(f)) && !C(f) && !ce && !T(f) && !(j(f) && t.weekPicker) && !Q,
      dp__cell_highlight_active: !Y(f) && (W(f) || N(f)) && C(f),
      dp__today: !t.noToday && Le(f.value, c.value) && f.current,
      "dp--past": it(f.value, c.value),
      "dp--future": dt(f.value, c.value)
    };
  }, _ = (f) => ({
    dp__active_date: C(f),
    dp__date_hover: x(f)
  }), P = (f) => {
    if (e.value && !Array.isArray(e.value)) {
      const R = hn(e.value, t.weekStart);
      return {
        ...ee(f),
        dp__range_start: Le(R[0], f.value),
        dp__range_end: Le(R[1], f.value),
        dp__range_between_week: dt(f.value, R[0]) && it(f.value, R[1])
      };
    }
    return {
      ...ee(f)
    };
  }, G = (f) => {
    if (e.value && Array.isArray(e.value)) {
      const R = hn(e.value[0], t.weekStart), Q = e.value[1] ? hn(e.value[1], t.weekStart) : [];
      return {
        ...ee(f),
        dp__range_start: Le(R[0], f.value) || Le(Q[0], f.value),
        dp__range_end: Le(R[1], f.value) || Le(Q[1], f.value),
        dp__range_between_week: dt(f.value, R[0]) && it(f.value, R[1]) || dt(f.value, Q[0]) && it(f.value, Q[1]),
        dp__range_between: dt(f.value, R[1]) && it(f.value, Q[0])
      };
    }
    return {
      ...ee(f)
    };
  }, se = (f) => {
    const R = n.value.count > 0 ? f.current && y(f) && V() : y(f) && V(), Q = n.value.count > 0 ? f.current && y(f, !1) && V() : y(f, !1) && V();
    return { isRangeStart: R, isRangeEnd: Q };
  }, pe = (f) => {
    const { isRangeStart: R, isRangeEnd: Q } = se(f);
    return {
      dp__range_start: R,
      dp__range_end: Q,
      dp__range_between: j(f),
      dp__date_hover_start: S(x(f), f, !0),
      dp__date_hover_end: S(x(f), f, !1)
    };
  }, ee = (f) => ({
    ...pe(f),
    dp__cell_auto_range: b(f),
    dp__cell_auto_range_start: T(f),
    dp__cell_auto_range_end: O(f)
  }), m = (f) => s.value.enabled ? s.value.autoRange ? ee(f) : t.modelAuto ? { ..._(f), ...pe(f) } : t.weekPicker ? G(f) : pe(f) : t.weekPicker ? P(f) : _(f);
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
}, zn = (e) => {
  const { defaultedFilters: t, defaultedRange: n, propDates: r } = st(e), a = (Y) => r.value.disabledDates ? typeof r.value.disabledDates == "function" ? r.value.disabledDates(Z(Y)) : !!po(Y, r.value.disabledDates) : !1, o = (Y) => {
    const N = r.value.maxDate ? dt(Y, r.value.maxDate) : !1, j = r.value.minDate ? it(Y, r.value.minDate) : !1, U = a(Y), _ = t.value.months.map((ee) => +ee).includes(Ie(Y)), P = e.disabledWeekDays.length ? e.disabledWeekDays.some((ee) => +ee === _b(Y)) : !1, G = u(Y), se = $e(Y), pe = se < +e.yearRange[0] || se > +e.yearRange[1];
    return !(N || j || U || _ || pe || P || G);
  }, s = (Y, N) => it(...Rn(r.value.minDate, Y, N)) || Le(...Rn(r.value.minDate, Y, N)), l = (Y, N) => dt(...Rn(r.value.maxDate, Y, N)) || Le(...Rn(r.value.maxDate, Y, N)), i = (Y, N, j) => {
    let U = !1;
    return r.value.maxDate && j && l(Y, N) && (U = !0), r.value.minDate && !j && s(Y, N) && (U = !0), U;
  }, c = (Y, N, j, U) => {
    let _ = !1;
    return U ? r.value.minDate && r.value.maxDate ? _ = i(Y, N, j) : (r.value.minDate && s(Y, N) || r.value.maxDate && l(Y, N)) && (_ = !0) : _ = !0, _;
  }, u = (Y) => Array.isArray(r.value.allowedDates) && !r.value.allowedDates.length ? !0 : r.value.allowedDates ? !po(Y, r.value.allowedDates) : !1, d = (Y) => !o(Y), p = (Y) => n.value.noDisabledRange ? !Id({ start: Y[0], end: Y[1] }).some((N) => d(N)) : !0, g = (Y) => {
    if (Y) {
      const N = $e(Y);
      return N >= +e.yearRange[0] && N <= e.yearRange[1];
    }
    return !0;
  }, v = (Y, N) => !!(Array.isArray(Y) && Y[N] && (n.value.maxRange || n.value.minRange) && g(Y[N])), y = (Y, N, j = 0) => {
    if (v(N, j) && g(Y)) {
      const U = Vd(Y, N[j]), _ = af(N[j], Y), P = _.length === 1 ? 0 : _.filter((se) => d(se)).length, G = Math.abs(U) - (n.value.minMaxRawRange ? 0 : P);
      if (n.value.minRange && n.value.maxRange)
        return G >= +n.value.minRange && G <= +n.value.maxRange;
      if (n.value.minRange)
        return G >= +n.value.minRange;
      if (n.value.maxRange)
        return G <= +n.value.maxRange;
    }
    return !0;
  }, S = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, $ = (Y) => Array.isArray(Y) ? [Y[0] ? ys(Y[0]) : null, Y[1] ? ys(Y[1]) : null] : ys(Y), O = (Y, N, j) => Y.find(
    (U) => +U.hours === Kt(N) && U.minutes === "*" ? !0 : +U.minutes === fn(N) && +U.hours === Kt(N)
  ) && j, b = (Y, N, j) => {
    const [U, _] = Y, [P, G] = N;
    return !O(U, P, j) && !O(_, G, j) && j;
  }, T = (Y, N) => {
    const j = Array.isArray(N) ? N : [N];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? b(e.disabledTimes, j, Y) : !j.some((U) => O(e.disabledTimes, U, Y)) : Y;
  }, E = (Y, N) => {
    const j = Array.isArray(N) ? [dr(N[0]), N[1] ? dr(N[1]) : void 0] : dr(N), U = !e.disabledTimes(j);
    return Y && U;
  }, k = (Y, N) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? T(N, Y) : E(N, Y) : N, V = (Y) => {
    let N = !0;
    if (!Y || S())
      return !0;
    const j = !r.value.minDate && !r.value.maxDate ? $(Y) : Y;
    return (e.maxTime || r.value.maxDate) && (N = Cu(
      e.maxTime,
      r.value.maxDate,
      "max",
      bt(j),
      N
    )), (e.minTime || r.value.minDate) && (N = Cu(
      e.minTime,
      r.value.minDate,
      "min",
      bt(j),
      N
    )), k(Y, N);
  }, x = (Y) => {
    if (!e.monthPicker)
      return !0;
    let N = !0;
    const j = Z(qt(Y));
    if (r.value.minDate && r.value.maxDate) {
      const U = Z(qt(r.value.minDate)), _ = Z(qt(r.value.maxDate));
      return dt(j, U) && it(j, _) || Le(j, U) || Le(j, _);
    }
    if (r.value.minDate) {
      const U = Z(qt(r.value.minDate));
      N = dt(j, U) || Le(j, U);
    }
    if (r.value.maxDate) {
      const U = Z(qt(r.value.maxDate));
      N = it(j, U) || Le(j, U);
    }
    return N;
  }, C = re(() => (Y) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : V(Y)), W = re(() => (Y) => e.monthPicker ? Array.isArray(Y) && (n.value.enabled || e.multiDates) ? !Y.filter((N) => !x(N)).length : x(Y) : !0);
  return {
    isDisabled: d,
    validateDate: o,
    validateMonthYearInRange: c,
    isDateRangeAllowed: p,
    checkMinMaxRange: y,
    isValidTime: V,
    isTimeValid: C,
    isMonthValid: W
  };
}, jo = () => {
  const e = re(() => (r, a) => r == null ? void 0 : r.includes(a)), t = re(() => (r, a) => r.count ? r.solo ? !0 : a === 0 : !0), n = re(() => (r, a) => r.count ? r.solo ? !0 : a === r.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: n };
}, o_ = (e, t, n) => {
  const r = J(0), a = gn({
    [fr.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [fr.calendar]: !1,
    [fr.header]: !1
  }), o = re(() => e.monthPicker), s = (d) => {
    var p;
    if ((p = e.flow) != null && p.length) {
      if (!d && o.value)
        return u();
      a[d] = !0, Object.keys(a).filter((g) => !a[g]).length || u();
    }
  }, l = () => {
    var d;
    (d = e.flow) != null && d.length && r.value !== -1 && (r.value += 1, t("flow-step", r.value), u());
  }, i = () => {
    r.value = -1;
  }, c = (d, p, ...g) => {
    var v, y;
    e.flow[r.value] === d && n.value && ((y = (v = n.value)[p]) == null || y.call(v, ...g));
  }, u = () => {
    c(rn.month, "toggleMonthPicker", !0), c(rn.year, "toggleYearPicker", !0), c(rn.calendar, "toggleTimePicker", !1, !0), c(rn.time, "toggleTimePicker", !0, !0);
    const d = e.flow[r.value];
    (d === rn.hours || d === rn.minutes || d === rn.seconds) && c(d, "toggleTimePicker", !0, !0, d);
  };
  return { childMount: s, updateFlowStep: l, resetFlow: i, flowStep: r };
}, Uo = {
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
  ...Uo,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null }
}, s_ = {
  key: 1,
  class: "dp__input_wrap"
}, l_ = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], i_ = {
  key: 2,
  class: "dp__clear_icon"
}, u_ = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Uo
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
    } = st(a), { checkMinMaxRange: p } = zn(a), g = J(), v = J(null), y = J(!1), S = J(!1), $ = re(
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
      r("set-input-date", null), a.autoApply && (r("set-empty-date"), g.value = null);
    }, b = (_) => {
      const P = d();
      return Dw(
        _,
        o.value.format ?? u(),
        P ?? of({}, a.enableSeconds),
        a.inputValue,
        S.value
      );
    }, T = (_) => {
      const { rangeSeparator: P } = o.value, [G, se] = _.split(`${P}`);
      if (G) {
        const pe = b(G.trim()), ee = se ? b(se.trim()) : null, m = pe && ee ? [pe, ee] : [pe];
        p(ee, m, 0) && (g.value = pe ? m : null);
      }
    }, E = () => {
      S.value = !0;
    }, k = (_) => {
      if (c.value.enabled)
        T(_);
      else if (a.multiDates) {
        const P = _.split(";");
        g.value = P.map((G) => b(G.trim())).filter((G) => G);
      } else
        g.value = b(_);
    }, V = (_) => {
      var P;
      const G = typeof _ == "string" ? _ : (P = _.target) == null ? void 0 : P.value;
      G !== "" ? (o.value.openMenu && !a.isMenuOpen && r("open"), k(G), r("set-input-date", g.value)) : O(), S.value = !1, r("update:input-value", G);
    }, x = (_) => {
      o.value.enabled ? (k(_.target.value), o.value.enterSubmit && Xs(g.value) && a.inputValue !== "" ? (r("set-input-date", g.value, !0), g.value = null) : o.value.enterSubmit && a.inputValue === "" && (g.value = null, r("clear"))) : Y(_);
    }, C = (_) => {
      o.value.enabled && o.value.tabSubmit && k(_.target.value), o.value.tabSubmit && Xs(g.value) && a.inputValue !== "" ? (r("set-input-date", g.value, !0, !0), g.value = null) : o.value.tabSubmit && a.inputValue === "" && (g.value = null, r("clear", !0));
    }, W = () => {
      var _;
      y.value = !0, r("focus"), o.value.enabled && o.value.selectOnFocus && ((_ = v.value) == null || _.select());
    }, Y = (_) => {
      _.preventDefault(), Fn(_, i.value, !0), o.value.enabled && o.value.openMenu && !l.value.input && !a.isMenuOpen ? r("open") : o.value.enabled || r("toggle");
    }, N = () => {
      r("real-blur"), y.value = !1, (!a.isMenuOpen || l.value.enabled && l.value.input) && r("blur"), a.autoApply && o.value.enabled && g.value && !a.isMenuOpen && (r("set-input-date", g.value), r("select-date"), g.value = null);
    }, j = (_) => {
      Fn(_, i.value, !0), r("clear");
    }, U = (_) => {
      if (!o.value.enabled) {
        if (_.code === "Tab")
          return;
        _.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        var _;
        (_ = v.value) == null || _.focus({ preventScroll: !0 });
      },
      setParsedDate: (_) => {
        g.value = _;
      }
    }), (_, P) => {
      var G;
      return F(), z("div", { onClick: Y }, [
        _.$slots.trigger && !_.$slots["dp-input"] && !M(l).enabled ? ge(_.$slots, "trigger", { key: 0 }) : X("", !0),
        !_.$slots.trigger && (!M(l).enabled || M(l).input) ? (F(), z("div", s_, [
          _.$slots["dp-input"] && !_.$slots.trigger && (!M(l).enabled || M(l).enabled && M(l).input) ? ge(_.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: V,
            onEnter: x,
            onTab: C,
            onClear: j,
            onBlur: N,
            onKeypress: U,
            onPaste: E,
            openMenu: () => _.$emit("open"),
            closeMenu: () => _.$emit("close"),
            toggleMenu: () => _.$emit("toggle")
          }) : X("", !0),
          _.$slots["dp-input"] ? X("", !0) : (F(), z("input", {
            key: 1,
            id: _.uid ? `dp-input-${_.uid}` : void 0,
            ref_key: "inputRef",
            ref: v,
            name: _.name,
            class: Ne($.value),
            inputmode: M(o).enabled ? "text" : "none",
            placeholder: _.placeholder,
            disabled: _.disabled,
            readonly: _.readonly,
            required: _.required,
            value: e.inputValue,
            autocomplete: _.autocomplete,
            "aria-label": (G = M(s)) == null ? void 0 : G.input,
            "aria-disabled": _.disabled || void 0,
            "aria-invalid": _.state === !1 ? !0 : void 0,
            onInput: V,
            onKeydown: [
              Ae(x, ["enter"]),
              Ae(C, ["tab"]),
              U
            ],
            onBlur: N,
            onFocus: W,
            onKeypress: U,
            onPaste: E
          }, null, 42, l_)),
          we("div", {
            onClick: P[2] || (P[2] = (se) => r("toggle"))
          }, [
            _.$slots["input-icon"] && !_.hideInputIcon ? (F(), z("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: P[0] || (P[0] = (se) => r("toggle"))
            }, [
              ge(_.$slots, "input-icon")
            ])) : X("", !0),
            !_.$slots["input-icon"] && !_.hideInputIcon && !_.$slots["dp-input"] ? (F(), De(M(Ur), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: P[1] || (P[1] = (se) => r("toggle"))
            })) : X("", !0)
          ]),
          _.$slots["clear-icon"] && e.inputValue && _.clearable && !_.disabled && !_.readonly ? (F(), z("span", i_, [
            ge(_.$slots, "clear-icon", { clear: j })
          ])) : X("", !0),
          _.clearable && !_.$slots["clear-icon"] && e.inputValue && !_.disabled && !_.readonly ? (F(), De(M(Jd), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: P[3] || (P[3] = Ke((se) => j(se), ["prevent"]))
          })) : X("", !0)
        ])) : X("", !0)
      ]);
    };
  }
}), c_ = ["title"], d_ = ["disabled"], f_ = /* @__PURE__ */ Mt({
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
    } = st(r), { isTimeValid: d, isMonthValid: p } = zn(r), { buildMatrix: g } = qn(), v = J(null), y = J(null), S = J(!1), $ = J({}), O = J(null), b = J(null);
    xt(() => {
      r.arrowNavigation && g([gt(v), gt(y)], "actionRow"), T(), window.addEventListener("resize", T);
    }), Lr(() => {
      window.removeEventListener("resize", T);
    });
    const T = () => {
      S.value = !1, setTimeout(() => {
        var U, _;
        const P = (U = O.value) == null ? void 0 : U.getBoundingClientRect(), G = (_ = b.value) == null ? void 0 : _.getBoundingClientRect();
        P && G && ($.value.maxWidth = `${G.width - P.width - 20}px`), S.value = !0;
      }, 0);
    }, E = re(() => c.value.enabled && !c.value.partialRange && r.internalModelValue ? r.internalModelValue.length === 2 : !0), k = re(
      () => !d.value(r.internalModelValue) || !p.value(r.internalModelValue) || !E.value
    ), V = () => {
      const U = o.value;
      return r.timePicker || r.monthPicker, U(bt(r.internalModelValue));
    }, x = () => {
      const U = r.internalModelValue;
      return s.value.count > 0 ? `${C(U[0])} - ${C(U[1])}` : [C(U[0]), C(U[1])];
    }, C = (U) => lf(
      U,
      o.value,
      r.formatLocale,
      l.value.rangeSeparator,
      r.modelAuto,
      u()
    ), W = re(() => !r.internalModelValue || !r.menuMount ? "" : typeof o.value == "string" ? Array.isArray(r.internalModelValue) ? r.internalModelValue.length === 2 && r.internalModelValue[1] ? x() : r.multiDates ? r.internalModelValue.map((U) => `${C(U)}`) : r.modelAuto ? `${C(r.internalModelValue[0])}` : `${C(r.internalModelValue[0])} -` : C(r.internalModelValue) : V()), Y = () => r.multiDates ? "; " : " - ", N = re(
      () => Array.isArray(W.value) ? W.value.join(Y()) : W.value
    ), j = () => {
      d.value(r.internalModelValue) && p.value(r.internalModelValue) && E.value ? n("select-date") : n("invalid-select");
    };
    return (U, _) => (F(), z("div", {
      ref_key: "actionRowRef",
      ref: b,
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
          title: N.value,
          style: Ct($.value)
        }, [
          U.$slots["action-preview"] && S.value ? ge(U.$slots, "action-preview", {
            key: 0,
            value: U.internalModelValue
          }) : X("", !0),
          !U.$slots["action-preview"] && S.value ? (F(), z(xe, { key: 1 }, [
            Jt(We(N.value), 1)
          ], 64)) : X("", !0)
        ], 12, c_)) : X("", !0),
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
              onClick: _[0] || (_[0] = (P) => U.$emit("close-picker")),
              onKeydown: [
                _[1] || (_[1] = Ae((P) => U.$emit("close-picker"), ["enter"])),
                _[2] || (_[2] = Ae((P) => U.$emit("close-picker"), ["space"]))
              ]
            }, We(U.cancelText), 545)) : X("", !0),
            M(a).showNow ? (F(), z("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: _[3] || (_[3] = (P) => U.$emit("select-now")),
              onKeydown: [
                _[4] || (_[4] = Ae((P) => U.$emit("select-now"), ["enter"])),
                _[5] || (_[5] = Ae((P) => U.$emit("select-now"), ["space"]))
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
                Ae(j, ["enter"]),
                Ae(j, ["space"])
              ],
              onClick: j
            }, We(U.selectText), 41, d_)) : X("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), p_ = ["onKeydown"], m_ = { class: "dp__selection_grid_header" }, h_ = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], v_ = ["aria-label"], Aa = /* @__PURE__ */ Mt({
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
    const { setSelectionGrid: r, buildMultiLevelMatrix: a, setMonthPicker: o } = qn(), s = n, l = e, { defaultedAriaLabels: i, defaultedTextInput: c, defaultedConfig: u } = st(
      l
    ), { hideNavigationButtons: d } = jo(), p = J(!1), g = J(null), v = J(null), y = J([]), S = J(), $ = J(null), O = J(0), b = J(null);
    gc(() => {
      g.value = null;
    }), xt(() => {
      Xt().then(() => Y()), l.noOverlayFocus || E(), T(!0);
    }), Lr(() => T(!1));
    const T = (ee) => {
      var m;
      l.arrowNavigation && ((m = l.headerRefs) != null && m.length ? o(ee) : r(ee));
    }, E = () => {
      var ee;
      const m = gt(v);
      m && (c.value.enabled || (g.value ? (ee = g.value) == null || ee.focus({ preventScroll: !0 }) : m.focus({ preventScroll: !0 })), p.value = m.clientHeight < m.scrollHeight);
    }, k = re(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !l.useRelative,
        "dp--overlay-relative": l.useRelative
      })
    ), V = re(
      () => l.useRelative ? { height: `${l.height}px`, width: "260px" } : void 0
    ), x = re(() => ({
      dp__overlay_col: !0
    })), C = re(
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
      () => Y(!1),
      { deep: !0 }
    );
    const Y = (ee = !0) => {
      Xt().then(() => {
        const m = gt(g), f = gt(v), R = gt($), Q = gt(b), ce = R ? R.getBoundingClientRect().height : 0;
        f && (f.getBoundingClientRect().height ? O.value = f.getBoundingClientRect().height - ce : O.value = u.value.modeHeight - ce), m && Q && ee && (Q.scrollTop = m.offsetTop - Q.offsetTop - (O.value / 2 - m.getBoundingClientRect().height) - ce);
      });
    }, N = (ee) => {
      ee.disabled || s("selected", ee.value);
    }, j = () => {
      s("toggle"), s("reset-flow");
    }, U = () => {
      l.escClose && j();
    }, _ = (ee, m, f, R) => {
      ee && ((m.active || m.value === l.focusValue) && (g.value = ee), l.arrowNavigation && (Array.isArray(y.value[f]) ? y.value[f][R] = ee : y.value[f] = [ee], P()));
    }, P = () => {
      var ee, m;
      const f = (ee = l.headerRefs) != null && ee.length ? [l.headerRefs].concat(y.value) : y.value.concat([l.skipButtonRef ? [] : [$.value]]);
      a(bt(f), (m = l.headerRefs) != null && m.length ? "monthPicker" : "selectionGrid");
    }, G = (ee) => {
      l.arrowNavigation || Fn(ee, u.value, !0);
    }, se = (ee) => {
      S.value = ee, s("hover-value", ee);
    }, pe = () => {
      if (j(), !l.isLast) {
        const ee = Sw(l.menuWrapRef ?? null, "action-row");
        if (ee) {
          const m = tf(ee);
          m == null || m.focus();
        }
      }
    };
    return t({ focusGrid: E }), (ee, m) => {
      var f;
      return F(), z("div", {
        ref_key: "gridWrapRef",
        ref: v,
        class: Ne(k.value),
        style: Ct(V.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          Ae(Ke(U, ["prevent"]), ["esc"]),
          m[0] || (m[0] = Ae(Ke((R) => G(R), ["prevent"]), ["left"])),
          m[1] || (m[1] = Ae(Ke((R) => G(R), ["prevent"]), ["up"])),
          m[2] || (m[2] = Ae(Ke((R) => G(R), ["prevent"]), ["down"])),
          m[3] || (m[3] = Ae(Ke((R) => G(R), ["prevent"]), ["right"]))
        ]
      }, [
        we("div", {
          ref_key: "containerRef",
          ref: b,
          class: Ne(W.value),
          role: "grid",
          style: Ct({ height: `${O.value}px` })
        }, [
          we("div", m_, [
            ge(ee.$slots, "header")
          ]),
          ee.$slots.overlay ? ge(ee.$slots, "overlay", { key: 0 }) : (F(!0), z(xe, { key: 1 }, qe(ee.items, (R, Q) => (F(), z("div", {
            key: Q,
            class: Ne(["dp__overlay_row", { dp__flex_row: ee.items.length >= 3 }]),
            role: "row"
          }, [
            (F(!0), z(xe, null, qe(R, (ce, L) => (F(), z("div", {
              key: ce.value,
              ref_for: !0,
              ref: (Oe) => _(Oe, ce, Q, L),
              role: "gridcell",
              class: Ne(x.value),
              "aria-selected": ce.active || void 0,
              "aria-disabled": ce.disabled || void 0,
              tabindex: "0",
              onClick: (Oe) => N(ce),
              onKeydown: [
                Ae(Ke((Oe) => N(ce), ["prevent"]), ["enter"]),
                Ae(Ke((Oe) => N(ce), ["prevent"]), ["space"])
              ],
              onMouseover: (Oe) => se(ce.value)
            }, [
              we("div", {
                class: Ne(ce.className)
              }, [
                ee.$slots.item ? ge(ee.$slots, "item", {
                  key: 0,
                  item: ce
                }) : X("", !0),
                ee.$slots.item ? X("", !0) : (F(), z(xe, { key: 1 }, [
                  Jt(We(ce.text), 1)
                ], 64))
              ], 2)
            ], 42, h_))), 128))
          ], 2))), 128))
        ], 6),
        ee.$slots["button-icon"] ? Vn((F(), z("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: $,
          type: "button",
          "aria-label": (f = M(i)) == null ? void 0 : f.toggleOverlay,
          class: Ne(C.value),
          tabindex: "0",
          onClick: j,
          onKeydown: [
            Ae(j, ["enter"]),
            Ae(pe, ["tab"])
          ]
        }, [
          ge(ee.$slots, "button-icon")
        ], 42, v_)), [
          [Ha, !M(d)(ee.hideNavigation, ee.type)]
        ]) : X("", !0)
      ], 46, p_);
    };
  }
}), Wo = /* @__PURE__ */ Mt({
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
      class: Ne({
        dp__menu_inner: !a.stretch,
        "dp--menu--inner-stretched": a.stretch,
        dp__flex_display: a.multiCalendars > 0,
        "dp--flex-display-collapsed": a.collapse
      })
    }, [
      (F(!0), z(xe, null, qe(n.value, (s, l) => (F(), z("div", {
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
}), y_ = ["aria-label", "aria-disabled"], ia = /* @__PURE__ */ Mt({
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
        o[1] || (o[1] = Ae(Ke((s) => a.$emit("activate"), ["prevent"]), ["enter"])),
        o[2] || (o[2] = Ae(Ke((s) => a.$emit("activate"), ["prevent"]), ["space"]))
      ]
    }, [
      we("span", {
        class: Ne(["dp__inner_nav", { dp__inner_nav_disabled: a.disabled }])
      }, [
        ge(a.$slots, "default")
      ], 2)
    ], 40, y_));
  }
}), g_ = { class: "dp--year-mode-picker" }, b_ = ["aria-label"], ff = /* @__PURE__ */ Mt({
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
    const n = t, r = e, { showRightIcon: a, showLeftIcon: o } = jo(), { defaultedConfig: s, defaultedMultiCalendars: l, defaultedAriaLabels: i, defaultedTransitions: c } = st(r), { showTransition: u, transitionName: d } = Ta(c), p = (y = !1, S) => {
      n("toggle-year-picker", { flow: y, show: S });
    }, g = (y) => {
      n("year-select", y);
    }, v = (y = !1) => {
      n("handle-year", y);
    };
    return (y, S) => {
      var $, O, b;
      return F(), z("div", g_, [
        M(o)(M(l), e.instance) ? (F(), De(ia, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": ($ = M(i)) == null ? void 0 : $.prevYear,
          disabled: e.isDisabled(!1),
          onActivate: S[0] || (S[0] = (T) => v(!1))
        }, {
          default: Ve(() => [
            y.$slots["arrow-left"] ? ge(y.$slots, "arrow-left", { key: 0 }) : X("", !0),
            y.$slots["arrow-left"] ? X("", !0) : (F(), De(M(Bl), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : X("", !0),
        we("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (O = M(i)) == null ? void 0 : O.openYearsOverlay,
          onClick: S[1] || (S[1] = () => p(!1)),
          onKeydown: S[2] || (S[2] = Ae(() => p(!1), ["enter"]))
        }, [
          y.$slots.year ? ge(y.$slots, "year", {
            key: 0,
            year: e.year
          }) : X("", !0),
          y.$slots.year ? X("", !0) : (F(), z(xe, { key: 1 }, [
            Jt(We(e.year), 1)
          ], 64))
        ], 40, b_),
        M(a)(M(l), e.instance) ? (F(), De(ia, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (b = M(i)) == null ? void 0 : b.nextYear,
          disabled: e.isDisabled(!0),
          onActivate: S[3] || (S[3] = (T) => v(!0))
        }, {
          default: Ve(() => [
            y.$slots["arrow-right"] ? ge(y.$slots, "arrow-right", { key: 0 }) : X("", !0),
            y.$slots["arrow-right"] ? X("", !0) : (F(), De(M(Yl), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : X("", !0),
        Qe(Wn, {
          name: M(d)(e.showYearPicker),
          css: M(u)
        }, {
          default: Ve(() => [
            e.showYearPicker ? (F(), De(Aa, {
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
              onSelected: S[4] || (S[4] = (T) => g(T))
            }, Dt({
              "button-icon": Ve(() => [
                y.$slots["calendar-icon"] ? ge(y.$slots, "calendar-icon", { key: 0 }) : X("", !0),
                y.$slots["calendar-icon"] ? X("", !0) : (F(), De(M(Ur), { key: 1 }))
              ]),
              _: 2
            }, [
              y.$slots["year-overlay-value"] ? {
                name: "item",
                fn: Ve(({ item: T }) => [
                  ge(y.$slots, "year-overlay-value", {
                    text: T.text,
                    value: T.value
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
}), Kl = (e, t, n) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((r) => Le(e, r))) {
      const r = t.value.filter((a) => !Le(a, e));
      t.value = r.length ? r : null;
    } else
      (n && +n > t.value.length || !n) && t.value.push(e);
  else
    t.value = [e];
}, Ql = (e, t, n) => {
  let r = e.value ? e.value.slice() : [];
  return r.length === 2 && r[1] !== null && (r = []), r.length ? it(t, r[0]) ? (r.unshift(t), n("range-start", r[0]), n("range-start", r[1])) : (r[1] = t, n("range-end", t)) : (r = [t], n("range-start", t)), r;
}, qo = (e, t, n, r) => {
  e && (e[0] && e[1] && n && t("auto-apply"), e[0] && !e[1] && r && n && t("auto-apply"));
}, pf = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => Hn(Z(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = Hn(Z(e.value), e.timezone));
}, mf = (e, t, n, r) => Array.isArray(t.value) && t.value.length === 2 ? r.value.fixedStart && (dt(e, t.value[0]) || Le(e, t.value[0])) ? [t.value[0], e] : r.value.fixedEnd && (it(e, t.value[1]) || Le(e, t.value[1])) ? [e, t.value[1]] : (n("invalid-fixed-range", e), t.value) : [], hf = ({
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
  const c = re(() => Wl(o.yearRange, o.reverseYears)), u = J([!1]), d = re(() => (E, k) => {
    const V = Ze(qt(/* @__PURE__ */ new Date()), {
      month: l.value(E),
      year: s.value(E)
    });
    return sf(
      V,
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
        r.value[E] = { month: Ie(k), year: $e(El(k, 1)) };
      }
  }, g = (E) => {
    if (!E)
      return p();
    const k = Ze(Z(), r.value[E]);
    return r.value[0].year = $e(Xd(k, e.value.count - 1)), p();
  }, v = (E) => o.focusStartDate ? E[0] : E[1] ? E[1] : E[0], y = () => {
    if (a.value) {
      const E = Array.isArray(a.value) ? v(a.value) : a.value;
      r.value[0] = { month: Ie(E), year: $e(E) };
    }
  };
  xt(() => {
    y(), e.value.count && p();
  });
  const S = (E, k) => {
    r.value[k].year = E, e.value.count && !e.value.solo && g(k);
  }, $ = re(() => (E) => Fr(c.value, (k) => {
    const V = s.value(E) === k.value, x = wa(
      k.value,
      Ir(n.value.minDate),
      Ir(n.value.maxDate)
    ), C = Gl(t.value, k.value);
    return { active: V, disabled: x, highlighted: C };
  })), O = (E, k) => {
    S(E, k), T(k);
  }, b = (E, k = !1) => {
    if (!d.value(E, k)) {
      const V = k ? s.value(E) + 1 : s.value(E) - 1;
      S(V, E);
    }
  }, T = (E, k = !1, V) => {
    k || i("reset-flow"), V !== void 0 ? u.value[E] = V : u.value[E] = !u.value[E], u.value || i("overlay-closed");
  };
  return {
    isDisabled: d,
    groupedYears: $,
    showYearPicker: u,
    selectYear: S,
    toggleYearPicker: T,
    handleYearSelect: O,
    handleYear: b
  };
}, w_ = (e, t) => {
  const {
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: a,
    defaultedConfig: o,
    defaultedRange: s,
    defaultedHighlight: l,
    propDates: i,
    defaultedTz: c
  } = st(e), { modelValue: u, year: d, month: p, calendars: g } = Pa(e, t), v = re(() => Zd(e.formatLocale, e.locale, e.monthNameFormat)), y = J(null), { checkMinMaxRange: S } = zn(e), {
    selectYear: $,
    groupedYears: O,
    showYearPicker: b,
    toggleYearPicker: T,
    handleYearSelect: E,
    handleYear: k,
    isDisabled: V
  } = hf({
    modelValue: u,
    multiCalendars: n,
    highlight: l,
    calendars: g,
    year: d,
    propDates: i,
    month: p,
    props: e,
    emit: t
  });
  xt(() => {
    e.startDate && (u.value && e.focusStartDate || !u.value) && $($e(Z(e.startDate)), 0);
  });
  const x = (m) => m ? { month: Ie(m), year: $e(m) } : { month: null, year: null }, C = () => u.value ? Array.isArray(u.value) ? u.value.map((m) => x(m)) : x(u.value) : x(), W = (m, f) => {
    const R = g.value[m], Q = C();
    return Array.isArray(Q) ? Q.some((ce) => ce.year === (R == null ? void 0 : R.year) && ce.month === f) : (R == null ? void 0 : R.year) === Q.year && f === Q.month;
  }, Y = (m, f, R) => {
    var Q, ce;
    const L = C();
    return Array.isArray(L) ? d.value(f) === ((Q = L[R]) == null ? void 0 : Q.year) && m === ((ce = L[R]) == null ? void 0 : ce.month) : !1;
  }, N = (m, f) => {
    if (s.value.enabled) {
      const R = C();
      if (Array.isArray(u.value) && Array.isArray(R)) {
        const Q = Y(m, f, 0) || Y(m, f, 1), ce = vn(qt(Z()), m, d.value(f));
        return Ho(u.value, y.value, ce) && !Q;
      }
      return !1;
    }
    return !1;
  }, j = re(() => (m) => Fr(v.value, (f) => {
    const R = W(m, f.value), Q = wa(
      f.value,
      nf(d.value(m), i.value.minDate),
      rf(d.value(m), i.value.maxDate)
    ) || Vw(i.value.disabledDates, d.value(m)).includes(f.value), ce = N(f.value, m), L = uf(l.value, f.value, d.value(m));
    return { active: R, disabled: Q, isBetween: ce, highlighted: L };
  })), U = (m, f) => vn(qt(Z()), m, d.value(f)), _ = (m, f) => {
    const R = u.value ? u.value : qt(/* @__PURE__ */ new Date());
    u.value = vn(R, m, d.value(f)), t("auto-apply"), t("update-flow-step");
  }, P = (m, f) => {
    const R = U(m, f);
    s.value.fixedEnd || s.value.fixedStart ? u.value = mf(R, u, t, s) : u.value ? S(R, u.value) && (u.value = Ql(u, U(m, f), t)) : u.value = [U(m, f)], qo(u.value, t, e.autoApply, e.modelAuto);
  }, G = (m, f) => {
    Kl(U(m, f), u, e.multiDatesLimit), t("auto-apply", !0);
  }, se = (m, f) => (g.value[f].month = m, ee(f, g.value[f].year, m), e.multiDates ? G(m, f) : s.value.enabled ? P(m, f) : _(m, f)), pe = (m, f) => {
    $(m, f), ee(f, m, null);
  }, ee = (m, f, R) => {
    let Q = R;
    if (!Q && Q !== 0) {
      const ce = C();
      Q = Array.isArray(ce) ? ce[m].month : ce.month;
    }
    t("update-month-year", { instance: m, year: f, month: Q });
  };
  return {
    groupedMonths: j,
    groupedYears: O,
    year: d,
    isDisabled: V,
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: a,
    defaultedConfig: o,
    showYearPicker: b,
    modelValue: u,
    presetDate: (m, f) => {
      pf({
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
    toggleYearPicker: T,
    handleYearSelect: E,
    handleYear: k,
    getModelMonthYear: C
  };
}, __ = /* @__PURE__ */ Mt({
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
    const r = n, a = yr(), o = Vt(a, "yearMode"), s = e;
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
      showYearPicker: g,
      modelValue: v,
      presetDate: y,
      setHoverDate: S,
      selectMonth: $,
      selectYear: O,
      toggleYearPicker: b,
      handleYearSelect: T,
      handleYear: E,
      getModelMonthYear: k
    } = w_(s, r);
    return t({ getSidebarProps: () => ({
      modelValue: v,
      year: c,
      getModelMonthYear: k,
      selectMonth: $,
      selectYear: O,
      handleYear: E
    }), presetDate: y, toggleYearPicker: (V) => b(0, V) }), (V, x) => (F(), De(Wo, {
      "multi-calendars": M(d).count,
      collapse: V.collapse,
      stretch: ""
    }, {
      default: Ve(({ instance: C }) => [
        V.$slots["month-year"] ? ge(V.$slots, "month-year", ht(_t({ key: 0 }, {
          year: M(c),
          months: M(l)(C),
          years: M(i)(C),
          selectMonth: M($),
          selectYear: M(O),
          instance: C
        }))) : (F(), De(Aa, {
          key: 1,
          items: M(l)(C),
          "arrow-navigation": V.arrowNavigation,
          "is-last": V.autoApply && !M(p).keepActionRow,
          "esc-close": V.escClose,
          height: M(p).modeHeight,
          config: V.config,
          "no-overlay-focus": !!(V.noOverlayFocus || V.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (W) => M($)(W, C),
          onHoverValue: (W) => M(S)(W, C)
        }, {
          header: Ve(() => [
            Qe(ff, _t(V.$props, {
              items: M(i)(C),
              instance: C,
              "show-year-picker": M(g)[C],
              year: M(c)(C),
              "is-disabled": (W) => M(u)(C, W),
              onHandleYear: (W) => M(E)(C, W),
              onYearSelect: (W) => M(T)(W, C),
              onToggleYearPicker: (W) => M(b)(C, W == null ? void 0 : W.flow, W == null ? void 0 : W.show)
            }), Dt({ _: 2 }, [
              qe(M(o), (W, Y) => ({
                name: W,
                fn: Ve((N) => [
                  ge(V.$slots, W, ht(Pt(N)))
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
}), x_ = (e, t) => {
  const { modelValue: n } = Pa(e, t), r = J(null), { defaultedHighlight: a, defaultedFilters: o, defaultedRange: s, propDates: l } = st(e), i = J();
  xt(() => {
    e.startDate && (n.value && e.focusStartDate || !n.value) && (i.value = $e(Z(e.startDate)));
  });
  const c = (g) => Array.isArray(n.value) ? n.value.some((v) => $e(v) === g) : n.value ? $e(n.value) === g : !1, u = (g) => s.value.enabled && Array.isArray(n.value) ? Ho(n.value, r.value, p(g)) : !1, d = re(() => Fr(Wl(e.yearRange, e.reverseYears), (g) => {
    const v = c(g.value), y = wa(
      g.value,
      Ir(l.value.minDate),
      Ir(l.value.maxDate)
    ) || o.value.years.includes(g.value), S = u(g.value) && !v, $ = Gl(a.value, g.value);
    return { active: v, disabled: y, isBetween: S, highlighted: $ };
  })), p = (g) => un(qt(/* @__PURE__ */ new Date()), g);
  return {
    groupedYears: d,
    modelValue: n,
    focusYear: i,
    setHoverValue: (g) => {
      r.value = un(qt(/* @__PURE__ */ new Date()), g);
    },
    selectYear: (g) => {
      var v;
      if (t("update-month-year", { instance: 0, year: g }), e.multiDates)
        return n.value ? Array.isArray(n.value) && (((v = n.value) == null ? void 0 : v.map((y) => $e(y))).includes(g) ? n.value = n.value.filter((y) => $e(y) !== g) : n.value.push(un(It(Z()), g))) : n.value = [un(It(Z()), g)], t("auto-apply", !0);
      if (s.value.enabled)
        return n.value = Ql(n, p(g), t), qo(n.value, t, e.autoApply, e.modelAuto);
      n.value = p(g), t("auto-apply");
    }
  };
}, k_ = /* @__PURE__ */ Mt({
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
    const r = n, a = e, { groupedYears: o, modelValue: s, focusYear: l, selectYear: i, setHoverValue: c } = x_(a, r), { defaultedConfig: u } = st(a);
    return t({ getSidebarProps: () => ({
      modelValue: s,
      selectYear: i
    }) }), (d, p) => (F(), z("div", null, [
      d.$slots["month-year"] ? ge(d.$slots, "month-year", ht(_t({ key: 0 }, {
        years: M(o),
        selectYear: M(i)
      }))) : (F(), De(Aa, {
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
      }, Dt({ _: 2 }, [
        d.$slots["year-overlay-value"] ? {
          name: "item",
          fn: Ve(({ item: g }) => [
            ge(d.$slots, "year-overlay-value", {
              text: g.text,
              value: g.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), M_ = {
  key: 0,
  class: "dp__time_input"
}, T_ = ["aria-label", "onKeydown", "onClick"], P_ = /* @__PURE__ */ we("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), A_ = /* @__PURE__ */ we("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), S_ = ["aria-label", "disabled", "onKeydown", "onClick"], C_ = ["aria-label", "onKeydown", "onClick"], D_ = /* @__PURE__ */ we("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), O_ = /* @__PURE__ */ we("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), E_ = { key: 0 }, R_ = ["aria-label", "onKeydown"], $_ = /* @__PURE__ */ Mt({
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
    const r = n, a = e, { setTimePickerElements: o, setTimePickerBackRef: s } = qn(), { defaultedAriaLabels: l, defaultedTransitions: i, defaultedFilters: c, defaultedConfig: u, defaultedRange: d } = st(a), { transitionName: p, showTransition: g } = Ta(i), v = gn({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), y = J("AM"), S = J(null), $ = J([]);
    xt(() => {
      r("mounted");
    });
    const O = (H) => Ze(/* @__PURE__ */ new Date(), {
      hours: H.hours,
      minutes: H.minutes,
      seconds: a.enableSeconds ? H.seconds : 0,
      milliseconds: 0
    }), b = re(
      () => (H) => _(H, a[H]) || E(H, a[H])
    ), T = re(() => ({ hours: a.hours, minutes: a.minutes, seconds: a.seconds })), E = (H, ve) => d.value.enabled && !d.value.disableTimeRangeValidation ? !a.validateTime(H, ve) : !1, k = (H, ve) => {
      if (d.value.enabled && !d.value.disableTimeRangeValidation) {
        const Ee = ve ? +a[`${H}Increment`] : -+a[`${H}Increment`], A = a[H] + Ee;
        return !a.validateTime(H, A);
      }
      return !1;
    }, V = re(() => (H) => !pe(+a[H] + +a[`${H}Increment`], H) || k(H, !0)), x = re(() => (H) => !pe(+a[H] - +a[`${H}Increment`], H) || k(H, !1)), C = (H, ve) => Rd(Ze(Z(), H), ve), W = (H, ve) => ww(Ze(Z(), H), ve), Y = re(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !a.timePickerInline,
        dp__time_col_reg_block: !a.enableSeconds && a.is24 && !a.timePickerInline,
        dp__time_col_reg_inline: !a.enableSeconds && a.is24 && a.timePickerInline,
        dp__time_col_reg_with_button: !a.enableSeconds && !a.is24,
        dp__time_col_sec: a.enableSeconds && a.is24,
        dp__time_col_sec_with_button: a.enableSeconds && !a.is24
      })
    ), N = re(() => {
      const H = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return a.enableSeconds ? H.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : H;
    }), j = re(() => N.value.filter((H) => !H.separator)), U = re(() => (H) => {
      if (H === "hours") {
        const ve = Q(+a.hours);
        return { text: ve < 10 ? `0${ve}` : `${ve}`, value: ve };
      }
      return { text: a[H] < 10 ? `0${a[H]}` : `${a[H]}`, value: a[H] };
    }), _ = (H, ve) => {
      var Ee;
      if (!a.disabledTimesConfig)
        return !1;
      const A = a.disabledTimesConfig(a.order, H === "hours" ? ve : void 0);
      return A[H] ? !!((Ee = A[H]) != null && Ee.includes(ve)) : !0;
    }, P = (H) => {
      const ve = a.is24 ? 24 : 12, Ee = H === "hours" ? ve : 60, A = +a[`${H}GridIncrement`], h = H === "hours" && !a.is24 ? A : 0, w = [];
      for (let I = h; I < Ee; I += A)
        w.push({ value: I, text: I < 10 ? `0${I}` : `${I}` });
      return H === "hours" && !a.is24 && w.push({ value: 0, text: "12" }), Fr(w, (I) => ({ active: !1, disabled: c.value.times[H].includes(I.value) || !pe(I.value, H) || _(H, I.value) || E(H, I.value) }));
    }, G = (H) => H >= 0 ? H : 59, se = (H) => H >= 0 ? H : 23, pe = (H, ve) => {
      const Ee = a.minTime ? O(ms(a.minTime)) : null, A = a.maxTime ? O(ms(a.maxTime)) : null, h = O(
        ms(
          T.value,
          ve,
          ve === "minutes" || ve === "seconds" ? G(H) : se(H)
        )
      );
      return Ee && A ? (ba(h, A) || kr(h, A)) && (ga(h, Ee) || kr(h, Ee)) : Ee ? ga(h, Ee) || kr(h, Ee) : A ? ba(h, A) || kr(h, A) : !0;
    }, ee = (H) => a[`no${H[0].toUpperCase() + H.slice(1)}Overlay`], m = (H) => {
      ee(H) || (v[H] = !v[H], v[H] || r("overlay-closed"));
    }, f = (H) => H === "hours" ? Kt : H === "minutes" ? fn : Nr, R = (H, ve = !0) => {
      const Ee = ve ? C : W, A = ve ? +a[`${H}Increment`] : -+a[`${H}Increment`];
      pe(+a[H] + A, H) && r(
        `update:${H}`,
        f(H)(Ee({ [H]: +a[H] }, { [H]: +a[`${H}Increment`] }))
      );
    }, Q = (H) => a.is24 ? H : (H >= 12 ? y.value = "PM" : y.value = "AM", kw(H)), ce = () => {
      y.value === "PM" ? (y.value = "AM", r("update:hours", a.hours - 12)) : (y.value = "PM", r("update:hours", a.hours + 12)), r("am-pm-change", y.value);
    }, L = (H) => {
      v[H] = !0;
    }, Oe = (H, ve, Ee) => {
      if (H && a.arrowNavigation) {
        Array.isArray($.value[ve]) ? $.value[ve][Ee] = H : $.value[ve] = [H];
        const A = $.value.reduce(
          (h, w) => w.map((I, K) => [...h[K] || [], w[K]]),
          []
        );
        s(a.closeTimePickerBtn), S.value && (A[1] = A[1].concat(S.value)), o(A, a.order);
      }
    }, Fe = (H, ve) => (m(H), H === "hours" && !a.is24 ? r(`update:${H}`, y.value === "PM" ? ve + 12 : ve) : r(`update:${H}`, ve));
    return t({ openChildCmp: L }), (H, ve) => {
      var Ee;
      return H.disabled ? X("", !0) : (F(), z("div", M_, [
        (F(!0), z(xe, null, qe(N.value, (A, h) => {
          var w, I, K;
          return F(), z("div", {
            key: h,
            class: Ne(Y.value)
          }, [
            A.separator ? (F(), z(xe, { key: 0 }, [
              Jt(" : ")
            ], 64)) : (F(), z(xe, { key: 1 }, [
              we("button", {
                ref_for: !0,
                ref: (D) => Oe(D, h, 0),
                type: "button",
                class: Ne({
                  dp__btn: !0,
                  dp__inc_dec_button: !H.timePickerInline,
                  dp__inc_dec_button_inline: H.timePickerInline,
                  dp__tp_inline_btn_top: H.timePickerInline,
                  dp__inc_dec_button_disabled: V.value(A.type)
                }),
                "aria-label": (w = M(l)) == null ? void 0 : w.incrementValue(A.type),
                tabindex: "0",
                onKeydown: [
                  Ae(Ke((D) => R(A.type), ["prevent"]), ["enter"]),
                  Ae(Ke((D) => R(A.type), ["prevent"]), ["space"])
                ],
                onClick: (D) => R(A.type)
              }, [
                a.timePickerInline ? (F(), z(xe, { key: 1 }, [
                  P_,
                  A_
                ], 64)) : (F(), z(xe, { key: 0 }, [
                  H.$slots["arrow-up"] ? ge(H.$slots, "arrow-up", { key: 0 }) : X("", !0),
                  H.$slots["arrow-up"] ? X("", !0) : (F(), De(M(jl), { key: 1 }))
                ], 64))
              ], 42, T_),
              we("button", {
                ref_for: !0,
                ref: (D) => Oe(D, h, 1),
                type: "button",
                "aria-label": (I = M(l)) == null ? void 0 : I.openTpOverlay(A.type),
                class: Ne({
                  dp__time_display: !0,
                  dp__time_display_block: !H.timePickerInline,
                  dp__time_display_inline: H.timePickerInline,
                  "dp--time-invalid": b.value(A.type),
                  "dp--time-overlay-btn": !b.value(A.type)
                }),
                disabled: ee(A.type),
                tabindex: "0",
                onKeydown: [
                  Ae(Ke((D) => m(A.type), ["prevent"]), ["enter"]),
                  Ae(Ke((D) => m(A.type), ["prevent"]), ["space"])
                ],
                onClick: (D) => m(A.type)
              }, [
                H.$slots[A.type] ? ge(H.$slots, A.type, {
                  key: 0,
                  text: U.value(A.type).text,
                  value: U.value(A.type).value
                }) : X("", !0),
                H.$slots[A.type] ? X("", !0) : (F(), z(xe, { key: 1 }, [
                  Jt(We(U.value(A.type).text), 1)
                ], 64))
              ], 42, S_),
              we("button", {
                ref_for: !0,
                ref: (D) => Oe(D, h, 2),
                type: "button",
                class: Ne({
                  dp__btn: !0,
                  dp__inc_dec_button: !H.timePickerInline,
                  dp__inc_dec_button_inline: H.timePickerInline,
                  dp__tp_inline_btn_bottom: H.timePickerInline,
                  dp__inc_dec_button_disabled: x.value(A.type)
                }),
                "aria-label": (K = M(l)) == null ? void 0 : K.decrementValue(A.type),
                tabindex: "0",
                onKeydown: [
                  Ae(Ke((D) => R(A.type, !1), ["prevent"]), ["enter"]),
                  Ae(Ke((D) => R(A.type, !1), ["prevent"]), ["space"])
                ],
                onClick: (D) => R(A.type, !1)
              }, [
                a.timePickerInline ? (F(), z(xe, { key: 1 }, [
                  D_,
                  O_
                ], 64)) : (F(), z(xe, { key: 0 }, [
                  H.$slots["arrow-down"] ? ge(H.$slots, "arrow-down", { key: 0 }) : X("", !0),
                  H.$slots["arrow-down"] ? X("", !0) : (F(), De(M(Ul), { key: 1 }))
                ], 64))
              ], 42, C_)
            ], 64))
          ], 2);
        }), 128)),
        H.is24 ? X("", !0) : (F(), z("div", E_, [
          H.$slots["am-pm-button"] ? ge(H.$slots, "am-pm-button", {
            key: 0,
            toggle: ce,
            value: y.value
          }) : X("", !0),
          H.$slots["am-pm-button"] ? X("", !0) : (F(), z("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: S,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (Ee = M(l)) == null ? void 0 : Ee.amPmButton,
            tabindex: "0",
            onClick: ce,
            onKeydown: [
              Ae(Ke(ce, ["prevent"]), ["enter"]),
              Ae(Ke(ce, ["prevent"]), ["space"])
            ]
          }, We(y.value), 41, R_))
        ])),
        (F(!0), z(xe, null, qe(j.value, (A, h) => (F(), De(Wn, {
          key: h,
          name: M(p)(v[A.type]),
          css: M(g)
        }, {
          default: Ve(() => [
            v[A.type] ? (F(), De(Aa, {
              key: 0,
              items: P(A.type),
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
            }, Dt({
              "button-icon": Ve(() => [
                H.$slots["clock-icon"] ? ge(H.$slots, "clock-icon", { key: 0 }) : X("", !0),
                H.$slots["clock-icon"] ? X("", !0) : (F(), De(Mo(H.timePickerInline ? M(Ur) : M(Hl)), { key: 1 }))
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
}), N_ = { class: "dp--tp-wrap" }, V_ = ["aria-label", "tabindex"], F_ = ["tabindex"], I_ = ["aria-label"], vf = /* @__PURE__ */ Mt({
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
    const r = n, a = e, { buildMatrix: o, setTimePicker: s } = qn(), l = yr(), { defaultedTransitions: i, defaultedAriaLabels: c, defaultedTextInput: u, defaultedConfig: d, defaultedRange: p } = st(a), { transitionName: g, showTransition: v } = Ta(i), { hideNavigationButtons: y } = jo(), S = J(null), $ = J(null), O = J([]), b = J(null);
    xt(() => {
      r("mount"), !a.timePicker && a.arrowNavigation ? o([gt(S.value)], "time") : s(!0, a.timePicker);
    });
    const T = re(() => p.value.enabled && a.modelAuto ? ef(a.internalModelValue) : !0), E = J(!1), k = (P) => ({
      hours: Array.isArray(a.hours) ? a.hours[P] : a.hours,
      minutes: Array.isArray(a.minutes) ? a.minutes[P] : a.minutes,
      seconds: Array.isArray(a.seconds) ? a.seconds[P] : a.seconds
    }), V = re(() => {
      const P = [];
      if (p.value.enabled)
        for (let G = 0; G < 2; G++)
          P.push(k(G));
      else
        P.push(k(0));
      return P;
    }), x = (P, G = !1, se = "") => {
      G || r("reset-flow"), E.value = P, r(P ? "overlay-opened" : "overlay-closed"), a.arrowNavigation && s(P), Xt(() => {
        se !== "" && O.value[0] && O.value[0].openChildCmp(se);
      });
    }, C = re(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: a.autoApply && !d.value.keepActionRow
    })), W = Vt(l, "timePicker"), Y = (P, G, se) => p.value.enabled ? G === 0 ? [P, V.value[1][se]] : [V.value[0][se], P] : P, N = (P) => {
      r("update:hours", P);
    }, j = (P) => {
      r("update:minutes", P);
    }, U = (P) => {
      r("update:seconds", P);
    }, _ = () => {
      if (b.value && !u.value.enabled && !a.noOverlayFocus) {
        const P = tf(b.value);
        P && P.focus({ preventScroll: !0 });
      }
    };
    return t({ toggleTimePicker: x }), (P, G) => {
      var se;
      return F(), z("div", N_, [
        !P.timePicker && !P.timePickerInline ? Vn((F(), z("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: S,
          type: "button",
          class: Ne(C.value),
          "aria-label": (se = M(c)) == null ? void 0 : se.openTimePicker,
          tabindex: P.noOverlayFocus ? void 0 : 0,
          onKeydown: [
            G[0] || (G[0] = Ae((pe) => x(!0), ["enter"])),
            G[1] || (G[1] = Ae((pe) => x(!0), ["space"]))
          ],
          onClick: G[2] || (G[2] = (pe) => x(!0))
        }, [
          P.$slots["clock-icon"] ? ge(P.$slots, "clock-icon", { key: 0 }) : X("", !0),
          P.$slots["clock-icon"] ? X("", !0) : (F(), De(M(Hl), { key: 1 }))
        ], 42, V_)), [
          [Ha, !M(y)(P.hideNavigation, "time")]
        ]) : X("", !0),
        Qe(Wn, {
          name: M(g)(E.value),
          css: M(v) && !P.timePickerInline
        }, {
          default: Ve(() => {
            var pe;
            return [
              E.value || P.timePicker || P.timePickerInline ? (F(), z("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: b,
                class: Ne({
                  dp__overlay: !P.timePickerInline,
                  "dp--overlay-absolute": !a.timePicker && !P.timePickerInline,
                  "dp--overlay-relative": a.timePicker
                }),
                style: Ct(P.timePicker ? { height: `${M(d).modeHeight}px` } : void 0),
                tabindex: P.timePickerInline ? void 0 : 0
              }, [
                we("div", {
                  class: Ne(
                    P.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  P.$slots["time-picker-overlay"] ? ge(P.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: N,
                    setMinutes: j,
                    setSeconds: U
                  }) : X("", !0),
                  P.$slots["time-picker-overlay"] ? X("", !0) : (F(), z("div", {
                    key: 1,
                    class: Ne(P.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (F(!0), z(xe, null, qe(V.value, (ee, m) => Vn((F(), De($_, _t({ key: m }, {
                      ...P.$props,
                      order: m,
                      hours: ee.hours,
                      minutes: ee.minutes,
                      seconds: ee.seconds,
                      closeTimePickerBtn: $.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: m === 0 ? P.fixedStart : P.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: O,
                      "validate-time": (f, R) => e.validateTime(f, Y(R, m, f)),
                      "onUpdate:hours": (f) => N(Y(f, m, "hours")),
                      "onUpdate:minutes": (f) => j(Y(f, m, "minutes")),
                      "onUpdate:seconds": (f) => U(Y(f, m, "seconds")),
                      onMounted: _,
                      onOverlayClosed: _,
                      onAmPmChange: G[3] || (G[3] = (f) => P.$emit("am-pm-change", f))
                    }), Dt({ _: 2 }, [
                      qe(M(W), (f, R) => ({
                        name: f,
                        fn: Ve((Q) => [
                          ge(P.$slots, f, ht(Pt(Q)))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Ha, m === 0 ? !0 : T.value]
                    ])), 128))
                  ], 2)),
                  !P.timePicker && !P.timePickerInline ? Vn((F(), z("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: $,
                    type: "button",
                    class: Ne(C.value),
                    "aria-label": (pe = M(c)) == null ? void 0 : pe.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      G[4] || (G[4] = Ae((ee) => x(!1), ["enter"])),
                      G[5] || (G[5] = Ae((ee) => x(!1), ["space"]))
                    ],
                    onClick: G[6] || (G[6] = (ee) => x(!1))
                  }, [
                    P.$slots["calendar-icon"] ? ge(P.$slots, "calendar-icon", { key: 0 }) : X("", !0),
                    P.$slots["calendar-icon"] ? X("", !0) : (F(), De(M(Ur), { key: 1 }))
                  ], 42, I_)), [
                    [Ha, !M(y)(P.hideNavigation, "time")]
                  ]) : X("", !0)
                ], 2)
              ], 14, F_)) : X("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), yf = (e, t, n, r) => {
  const { defaultedRange: a } = st(e), o = (b, T) => Array.isArray(t[b]) ? t[b][T] : t[b], s = (b) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[b] : t.seconds : 0, l = (b, T) => b ? T !== void 0 ? In(b, o("hours", T), o("minutes", T), s(T)) : In(b, t.hours, t.minutes, s()) : Ll(Z(), s(T)), i = (b, T) => {
    t[b] = T;
  }, c = re(() => e.modelAuto && a.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : a.value.enabled), u = (b, T) => {
    const E = Object.fromEntries(
      Object.keys(t).map((k) => k === b ? [k, T] : [k, t[k]].slice())
    );
    if (c.value && !a.value.disableTimeRangeValidation) {
      const k = (x) => n.value ? In(
        n.value[x],
        E.hours[x],
        E.minutes[x],
        E.seconds[x]
      ) : null, V = (x) => Il(n.value[x], 0);
      return !(Le(k(0), k(1)) && (ga(k(0), V(1)) || ba(k(1), V(0))));
    }
    return !0;
  }, d = (b, T) => {
    u(b, T) && (i(b, T), r && r());
  }, p = (b) => {
    d("hours", b);
  }, g = (b) => {
    d("minutes", b);
  }, v = (b) => {
    d("seconds", b);
  }, y = (b, T, E, k) => {
    T && p(b), !T && !E && g(b), E && v(b), n.value && k(n.value);
  }, S = (b) => {
    if (b) {
      const T = Array.isArray(b), E = T ? [+b[0].hours, +b[1].hours] : +b.hours, k = T ? [+b[0].minutes, +b[1].minutes] : +b.minutes, V = T ? [+b[0].seconds, +b[1].seconds] : +b.seconds;
      i("hours", E), i("minutes", k), e.enableSeconds && i("seconds", V);
    }
  }, $ = (b, T) => {
    const E = {
      hours: Array.isArray(t.hours) ? t.hours[b] : t.hours,
      disabledArr: []
    };
    return (T || T === 0) && (E.hours = T), Array.isArray(e.disabledTimes) && (E.disabledArr = a.value.enabled && Array.isArray(e.disabledTimes[b]) ? e.disabledTimes[b] : e.disabledTimes), E;
  }, O = re(() => (b, T) => {
    var E;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: k, hours: V } = $(b, T), x = k.filter((C) => +C.hours === V);
      return ((E = x[0]) == null ? void 0 : E.minutes) === "*" ? { hours: [V], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (x == null ? void 0 : x.map((C) => +C.minutes)) ?? [],
        seconds: (x == null ? void 0 : x.map((C) => C.seconds ? +C.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: i,
    updateHours: p,
    updateMinutes: g,
    updateSeconds: v,
    getSetDateTime: l,
    updateTimeValues: y,
    getSecondsValue: s,
    assignStartTime: S,
    validateTime: u,
    disabledTimesConfig: O
  };
}, L_ = (e, t) => {
  const { modelValue: n, time: r } = Pa(e, t), { defaultedStartTime: a, defaultedRange: o } = st(e), { updateTimeValues: s, getSetDateTime: l, setTime: i, assignStartTime: c, disabledTimesConfig: u, validateTime: d } = yf(e, r, n), p = (b) => {
    const { hours: T, minutes: E, seconds: k } = b;
    return { hours: +T, minutes: +E, seconds: k ? +k : 0 };
  }, g = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const T = p(e.startTime[0]), E = p(e.startTime[1]);
        return [Ze(Z(), T), Ze(Z(), E)];
      }
      const b = p(e.startTime);
      return Ze(Z(), b);
    }
    return o.value.enabled ? [null, null] : null;
  }, v = () => {
    if (o.value.enabled) {
      const [b, T] = g();
      n.value = [l(b, 0), l(T, 1)];
    } else
      n.value = l(g());
  }, y = (b) => Array.isArray(b) ? [dr(Z(b[0])), dr(Z(b[1]))] : [dr(b ?? Z())], S = (b, T, E) => {
    i("hours", b), i("minutes", T), i("seconds", e.enableSeconds ? E : 0);
  }, $ = () => {
    const [b, T] = y(n.value);
    return o.value.enabled ? S(
      [b.hours, T.hours],
      [b.minutes, T.minutes],
      [b.seconds, T.seconds]
    ) : S(b.hours, b.minutes, b.seconds);
  };
  xt(() => {
    if (!e.shadow)
      return c(a.value), n.value ? $() : v();
  });
  const O = () => {
    Array.isArray(n.value) ? n.value = n.value.map((b, T) => b && l(b, T)) : n.value = l(n.value), t("time-update");
  };
  return {
    modelValue: n,
    time: r,
    disabledTimesConfig: u,
    updateTime: (b, T = !0, E = !1) => {
      s(b, T, E, O);
    },
    validateTime: d
  };
}, B_ = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...en
  },
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, o = yr(), s = Vt(o, "timePicker"), { time: l, modelValue: i, disabledTimesConfig: c, updateTime: u, validateTime: d } = L_(a, r);
    return t({ getSidebarProps: () => ({
      modelValue: i,
      time: l,
      updateTime: u
    }) }), (p, g) => (F(), De(Wo, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: Ve(() => [
        Qe(vf, _t(p.$props, {
          hours: M(l).hours,
          minutes: M(l).minutes,
          seconds: M(l).seconds,
          "internal-model-value": p.internalModelValue,
          "disabled-times-config": M(c),
          "validate-time": M(d),
          "onUpdate:hours": g[0] || (g[0] = (v) => M(u)(v)),
          "onUpdate:minutes": g[1] || (g[1] = (v) => M(u)(v, !1)),
          "onUpdate:seconds": g[2] || (g[2] = (v) => M(u)(v, !1, !0)),
          onAmPmChange: g[3] || (g[3] = (v) => p.$emit("am-pm-change", v))
        }), Dt({ _: 2 }, [
          qe(M(s), (v, y) => ({
            name: v,
            fn: Ve((S) => [
              ge(p.$slots, v, ht(Pt(S)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), Y_ = { class: "dp__month_year_row" }, H_ = ["aria-label", "onClick", "onKeydown"], j_ = /* @__PURE__ */ Mt({
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
    } = st(a), { transitionName: p, showTransition: g } = Ta(o), { buildMatrix: v } = qn(), { handleMonthYearChange: y, isDisabled: S, updateMonthYear: $ } = e_(a, r), { showLeftIcon: O, showRightIcon: b } = jo(), T = J(!1), E = J(!1), k = J([null, null, null, null]);
    xt(() => {
      r("mount");
    });
    const V = (m) => ({
      get: () => a[m],
      set: (f) => {
        const R = m === Ut.month ? Ut.year : Ut.month;
        r("update-month-year", { [m]: f, [R]: a[R] }), m === Ut.month ? _(!0) : P(!0);
      }
    }), x = re(V(Ut.month)), C = re(V(Ut.year)), W = re(() => (m) => ({
      month: a.month,
      year: a.year,
      items: m === Ut.month ? a.months : a.years,
      instance: a.instance,
      updateMonthYear: $,
      toggle: m === Ut.month ? _ : P
    })), Y = re(() => a.months.find((f) => f.value === a.month) || { text: "", value: 0 }), N = re(() => Fr(a.months, (m) => {
      const f = a.month === m.value, R = wa(
        m.value,
        nf(a.year, d.value.minDate),
        rf(a.year, d.value.maxDate)
      ) || i.value.months.includes(m.value), Q = uf(u.value, m.value, a.year);
      return { active: f, disabled: R, highlighted: Q };
    })), j = re(() => Fr(a.years, (m) => {
      const f = a.year === m.value, R = wa(
        m.value,
        Ir(d.value.minDate),
        Ir(d.value.maxDate)
      ) || i.value.years.includes(m.value), Q = Gl(u.value, m.value);
      return { active: f, disabled: R, highlighted: Q };
    })), U = (m, f) => {
      f !== void 0 ? m.value = f : m.value = !m.value, m.value || r("overlay-closed");
    }, _ = (m = !1, f) => {
      G(m), U(T, f);
    }, P = (m = !1, f) => {
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
          toggle: _,
          modelValue: x.value,
          updateModelValue: (R) => x.value = R,
          text: Y.value.text,
          showSelectionGrid: T.value,
          items: N.value,
          ariaLabel: (m = s.value) == null ? void 0 : m.openMonthsOverlay
        },
        {
          type: Ut.year,
          index: 2,
          toggle: P,
          modelValue: C.value,
          updateModelValue: (R) => C.value = R,
          text: a.year,
          showSelectionGrid: E.value,
          items: j.value,
          ariaLabel: (f = s.value) == null ? void 0 : f.openYearsOverlay
        }
      ];
    }), ee = re(() => a.disableYearSelect ? [pe.value[0]] : a.yearFirst ? [...pe.value].reverse() : pe.value);
    return t({
      toggleMonthPicker: _,
      toggleYearPicker: P,
      handleMonthYearChange: y
    }), (m, f) => {
      var R, Q, ce;
      return F(), z("div", Y_, [
        m.$slots["month-year"] ? ge(m.$slots, "month-year", ht(_t({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: M($), handleMonthYearChange: M(y), instance: e.instance }))) : (F(), z(xe, { key: 1 }, [
          M(O)(M(l), e.instance) && !m.vertical ? (F(), De(ia, {
            key: 0,
            "aria-label": (R = M(s)) == null ? void 0 : R.prevMonth,
            disabled: M(S)(!1),
            onActivate: f[0] || (f[0] = (L) => M(y)(!1, !0)),
            onSetRef: f[1] || (f[1] = (L) => se(L, 0))
          }, {
            default: Ve(() => [
              m.$slots["arrow-left"] ? ge(m.$slots, "arrow-left", { key: 0 }) : X("", !0),
              m.$slots["arrow-left"] ? X("", !0) : (F(), De(M(Bl), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : X("", !0),
          we("div", {
            class: Ne(["dp__month_year_wrap", {
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
                  Ae(Ke(L.toggle, ["prevent"]), ["enter"]),
                  Ae(Ke(L.toggle, ["prevent"]), ["space"])
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
              ], 40, H_),
              Qe(Wn, {
                name: M(p)(L.showSelectionGrid),
                css: M(g)
              }, {
                default: Ve(() => [
                  L.showSelectionGrid ? (F(), De(Aa, {
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
                  }, Dt({
                    "button-icon": Ve(() => [
                      m.$slots["calendar-icon"] ? ge(m.$slots, "calendar-icon", { key: 0 }) : X("", !0),
                      m.$slots["calendar-icon"] ? X("", !0) : (F(), De(M(Ur), { key: 1 }))
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
          M(O)(M(l), e.instance) && m.vertical ? (F(), De(ia, {
            key: 1,
            "aria-label": (Q = M(s)) == null ? void 0 : Q.prevMonth,
            disabled: M(S)(!1),
            onActivate: f[2] || (f[2] = (L) => M(y)(!1, !0))
          }, {
            default: Ve(() => [
              m.$slots["arrow-up"] ? ge(m.$slots, "arrow-up", { key: 0 }) : X("", !0),
              m.$slots["arrow-up"] ? X("", !0) : (F(), De(M(jl), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : X("", !0),
          M(b)(M(l), e.instance) ? (F(), De(ia, {
            key: 2,
            ref: "rightIcon",
            disabled: M(S)(!0),
            "aria-label": (ce = M(s)) == null ? void 0 : ce.nextMonth,
            onActivate: f[3] || (f[3] = (L) => M(y)(!0, !0)),
            onSetRef: f[4] || (f[4] = (L) => se(L, m.disableYearSelect ? 2 : 3))
          }, {
            default: Ve(() => [
              m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? ge(m.$slots, m.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : X("", !0),
              m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? X("", !0) : (F(), De(Mo(m.vertical ? M(Ul) : M(Yl)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : X("", !0)
        ], 64))
      ]);
    };
  }
}), U_ = ["aria-label"], W_ = {
  class: "dp__calendar_header",
  role: "row"
}, q_ = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, z_ = ["aria-label"], G_ = /* @__PURE__ */ we("div", { class: "dp__calendar_header_separator" }, null, -1), K_ = ["aria-label"], Q_ = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, X_ = { class: "dp__cell_inner" }, J_ = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], Z_ = /* @__PURE__ */ Mt({
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
    const r = n, a = e, { buildMultiLevelMatrix: o } = qn(), {
      defaultedTransitions: s,
      defaultedConfig: l,
      defaultedAriaLabels: i,
      defaultedMultiCalendars: c,
      defaultedWeekNumbers: u
    } = st(a), d = J(null), p = J({
      bottom: "",
      left: "",
      transform: ""
    }), g = J([]), v = J(null), y = J(!0), S = J(""), $ = J({ startX: 0, endX: 0, startY: 0, endY: 0 }), O = J([]), b = J({ left: "50%" }), T = re(() => a.calendar ? a.calendar(a.mappedDates) : a.mappedDates), E = re(() => a.dayNames ? Array.isArray(a.dayNames) ? a.dayNames : a.dayNames(a.locale, +a.weekStart) : xw(a.formatLocale, a.locale, +a.weekStart));
    xt(() => {
      r("mount", { cmp: "calendar", refs: g }), l.value.noSwipe || v.value && (v.value.addEventListener("touchstart", P, { passive: !1 }), v.value.addEventListener("touchend", G, { passive: !1 }), v.value.addEventListener("touchmove", se, { passive: !1 })), a.monthChangeOnScroll && v.value && v.value.addEventListener("wheel", m, { passive: !1 });
    });
    const k = (L) => L ? a.vertical ? "vNext" : "next" : a.vertical ? "vPrevious" : "previous", V = (L, Oe) => {
      if (a.transitions) {
        const Fe = It(vn(Z(), a.month, a.year));
        S.value = dt(It(vn(Z(), L, Oe)), Fe) ? s.value[k(!0)] : s.value[k(!1)], y.value = !1, Xt(() => {
          y.value = !0;
        });
      }
    }, x = re(
      () => ({
        [a.calendarClassName]: !!a.calendarClassName
      })
    ), C = re(() => (L) => {
      const Oe = Mw(L);
      return {
        dp__marker_dot: Oe.type === "dot",
        dp__marker_line: Oe.type === "line"
      };
    }), W = re(() => (L) => Le(L, d.value)), Y = re(() => ({
      dp__calendar: !0,
      dp__calendar_next: c.value.count > 0 && a.instance !== 0
    })), N = re(() => (L) => a.hideOffsetDates ? L.current : !0), j = (L) => dn(L, "yyyy-MM-dd"), U = async (L, Oe, Fe) => {
      var H, ve;
      if (r("set-hover-date", L), (ve = (H = L.marker) == null ? void 0 : H.tooltip) != null && ve.length) {
        const Ee = gt(g.value[Oe][Fe]);
        if (Ee) {
          const { width: A, height: h } = Ee.getBoundingClientRect();
          d.value = L.value;
          let w = { left: `${A / 2}px` }, I = -50;
          if (await Xt(), O.value[0]) {
            const { left: K, width: D } = O.value[0].getBoundingClientRect();
            K < 0 && (w = { left: "0" }, I = 0, b.value.left = `${A / 2}px`), window.innerWidth < K + D && (w = { right: "0" }, I = 0, b.value.left = `${D - A / 2}px`);
          }
          p.value = {
            bottom: `${h}px`,
            ...w,
            transform: `translateX(${I}%)`
          }, r("tooltip-open", L.marker);
        }
      }
    }, _ = (L) => {
      d.value && (d.value = null, p.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), r("tooltip-close", L.marker));
    }, P = (L) => {
      $.value.startX = L.changedTouches[0].screenX, $.value.startY = L.changedTouches[0].screenY;
    }, G = (L) => {
      $.value.endX = L.changedTouches[0].screenX, $.value.endY = L.changedTouches[0].screenY, pe();
    }, se = (L) => {
      a.vertical && !a.inline && L.preventDefault();
    }, pe = () => {
      const L = a.vertical ? "Y" : "X";
      Math.abs($.value[`start${L}`] - $.value[`end${L}`]) > 10 && r("handle-swipe", $.value[`start${L}`] > $.value[`end${L}`] ? "right" : "left");
    }, ee = (L, Oe, Fe) => {
      L && (Array.isArray(g.value[Oe]) ? g.value[Oe][Fe] = L : g.value[Oe] = [L]), a.arrowNavigation && o(g.value, "calendar");
    }, m = (L) => {
      a.monthChangeOnScroll && (L.preventDefault(), r("handle-scroll", L));
    }, f = (L) => u.value.type === "local" ? Nl(L.value, { weekStartsOn: +a.weekStart }) : u.value.type === "iso" ? Rl(L.value) : typeof u.value.type == "function" ? u.value.type(L.value) : "", R = (L) => {
      const Oe = L[0];
      return u.value.hideOnOffsetDates ? L.some((Fe) => Fe.current) ? f(Oe) : "" : f(Oe);
    }, Q = (L, Oe) => {
      Fn(L, l.value), r("select-date", Oe);
    }, ce = (L) => {
      Fn(L, l.value);
    };
    return t({ triggerTransition: V }), (L, Oe) => {
      var Fe;
      return F(), z("div", {
        class: Ne(Y.value)
      }, [
        we("div", {
          ref_key: "calendarWrapRef",
          ref: v,
          role: "grid",
          class: Ne(x.value),
          "aria-label": (Fe = M(i)) == null ? void 0 : Fe.calendarWrap
        }, [
          we("div", W_, [
            L.weekNumbers ? (F(), z("div", q_, We(L.weekNumName), 1)) : X("", !0),
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
              ], 8, z_);
            }), 128))
          ]),
          G_,
          Qe(Wn, {
            name: S.value,
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
                  (F(!0), z(xe, null, qe(T.value, (ve, Ee) => (F(), z("div", {
                    key: Ee,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    L.weekNumbers ? (F(), z("div", Q_, [
                      we("div", X_, We(R(ve.days)), 1)
                    ])) : X("", !0),
                    (F(!0), z(xe, null, qe(ve.days, (A, h) => {
                      var w, I, K;
                      return F(), z("div", {
                        id: j(A.value),
                        ref_for: !0,
                        ref: (D) => ee(D, Ee, h),
                        key: h + Ee,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (A.classData.dp__active_date || A.classData.dp__range_start || A.classData.dp__range_start) ?? void 0,
                        "aria-disabled": A.classData.dp__cell_disabled || void 0,
                        "aria-label": (I = (w = M(i)) == null ? void 0 : w.day) == null ? void 0 : I.call(w, A),
                        tabindex: "0",
                        onClick: Ke((D) => Q(D, A), ["prevent"]),
                        onKeydown: [
                          Ae((D) => L.$emit("select-date", A), ["enter"]),
                          Ae((D) => L.$emit("handle-space", A), ["space"])
                        ],
                        onMouseenter: (D) => U(A, Ee, h),
                        onMouseleave: (D) => _(A)
                      }, [
                        we("div", {
                          class: Ne(["dp__cell_inner", A.classData])
                        }, [
                          L.$slots.day && N.value(A) ? ge(L.$slots, "day", {
                            key: 0,
                            day: +A.text,
                            date: A.value
                          }) : X("", !0),
                          L.$slots.day ? X("", !0) : (F(), z(xe, { key: 1 }, [
                            Jt(We(A.text), 1)
                          ], 64)),
                          A.marker && N.value(A) ? (F(), z(xe, { key: 2 }, [
                            L.$slots.marker ? ge(L.$slots, "marker", {
                              key: 0,
                              marker: A.marker,
                              day: +A.text,
                              date: A.value
                            }) : (F(), z("div", {
                              key: 1,
                              class: Ne(C.value(A.marker)),
                              style: Ct(A.marker.color ? { backgroundColor: A.marker.color } : {})
                            }, null, 6))
                          ], 64)) : X("", !0),
                          W.value(A.value) ? (F(), z("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: O,
                            class: "dp__marker_tooltip",
                            style: Ct(p.value)
                          }, [
                            (K = A.marker) != null && K.tooltip ? (F(), z("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: ce
                            }, [
                              (F(!0), z(xe, null, qe(A.marker.tooltip, (D, ae) => (F(), z("div", {
                                key: ae,
                                class: "dp__tooltip_text"
                              }, [
                                L.$slots["marker-tooltip"] ? ge(L.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: D,
                                  day: A.value
                                }) : X("", !0),
                                L.$slots["marker-tooltip"] ? X("", !0) : (F(), z(xe, { key: 1 }, [
                                  we("div", {
                                    class: "dp__tooltip_mark",
                                    style: Ct(D.color ? { backgroundColor: D.color } : {})
                                  }, null, 4),
                                  we("div", null, We(D.text), 1)
                                ], 64))
                              ]))), 128)),
                              we("div", {
                                class: "dp__arrow_bottom_tp",
                                style: Ct(b.value)
                              }, null, 4)
                            ])) : X("", !0)
                          ], 4)) : X("", !0)
                        ], 2)
                      ], 40, J_);
                    }), 128))
                  ]))), 128))
                ], 8, K_)) : X("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, U_)
      ], 2);
    };
  }
}), Eu = (e) => Array.isArray(e), e1 = (e, t, n, r) => {
  const a = J([]), o = J(/* @__PURE__ */ new Date()), { modelValue: s, calendars: l, time: i } = Pa(e, t), { defaultedMultiCalendars: c, defaultedStartTime: u, defaultedRange: d, defaultedTz: p, propDates: g } = st(e), { validateMonthYearInRange: v, isDisabled: y, isDateRangeAllowed: S, checkMinMaxRange: $ } = zn(e), { updateTimeValues: O, getSetDateTime: b, setTime: T, assignStartTime: E, validateTime: k, disabledTimesConfig: V } = yf(e, i, s, r), x = re(
    () => (B) => l.value[B] ? l.value[B].month : 0
  ), C = re(
    () => (B) => l.value[B] ? l.value[B].year : 0
  ), W = (B, oe, _e) => {
    var Pe, te;
    l.value[B] || (l.value[B] = { month: 0, year: 0 }), l.value[B].month = Au(oe) ? (Pe = l.value[B]) == null ? void 0 : Pe.month : oe, l.value[B].year = Au(_e) ? (te = l.value[B]) == null ? void 0 : te.year : _e;
  }, Y = () => {
    e.autoApply && t("select-date");
  };
  ft(
    s,
    (B, oe) => {
      JSON.stringify(B) !== JSON.stringify(oe) && U();
    },
    { deep: !0 }
  ), xt(() => {
    e.shadow || (s.value || (ce(), u.value && E(u.value)), U(!0), e.focusStartDate && e.startDate && ce());
  });
  const N = re(() => {
    var B;
    return (B = e.flow) != null && B.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), j = () => {
    e.autoApply && N.value && t("auto-apply");
  }, U = (B = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? (a.value = s.value, m(B)) : G(s.value, B);
    if (c.value.count && B && !e.startDate)
      return P(Z(), B);
  }, _ = () => Array.isArray(s.value) && d.value.enabled ? Ie(s.value[0]) === Ie(s.value[1] ?? s.value[0]) : !1, P = (B, oe = !1) => {
    if ((!c.value.count || !c.value.static || oe) && W(0, Ie(B), $e(B)), c.value.count && (!c.value.solo || !s.value || _()))
      for (let _e = 1; _e < c.value.count; _e++) {
        const Pe = Ze(Z(), { month: x.value(_e - 1), year: C.value(_e - 1) }), te = Rd(Pe, { months: 1 });
        l.value[_e] = { month: Ie(te), year: $e(te) };
      }
  }, G = (B, oe) => {
    P(B), T("hours", Kt(B)), T("minutes", fn(B)), T("seconds", Nr(B)), c.value.count && oe && Q();
  }, se = (B) => {
    if (c.value.count) {
      if (c.value.solo)
        return 0;
      const oe = Ie(B[0]), _e = Ie(B[1]);
      return Math.abs(_e - oe) < c.value.count ? 0 : 1;
    }
    return 1;
  }, pe = (B, oe) => {
    B[1] && d.value.showLastInRange ? P(B[se(B)], oe) : P(B[0], oe);
    const _e = (Pe, te) => [
      Pe(B[0]),
      B[1] ? Pe(B[1]) : i[te][1]
    ];
    T("hours", _e(Kt, "hours")), T("minutes", _e(fn, "minutes")), T("seconds", _e(Nr, "seconds"));
  }, ee = (B, oe) => {
    if ((d.value.enabled || e.weekPicker) && !e.multiDates)
      return pe(B, oe);
    if (e.multiDates && oe) {
      const _e = B[B.length - 1];
      return G(_e, oe);
    }
  }, m = (B) => {
    const oe = s.value;
    ee(oe, B), c.value.count && c.value.solo && Q();
  }, f = (B, oe) => {
    const _e = Ze(Z(), { month: x.value(oe), year: C.value(oe) }), Pe = B < 0 ? Gt(_e, 1) : Vr(_e, 1);
    v(Ie(Pe), $e(Pe), B < 0, e.preventMinMaxNavigation) && (W(oe, Ie(Pe), $e(Pe)), t("update-month-year", { instance: oe, month: Ie(Pe), year: $e(Pe) }), c.value.count && !c.value.solo && R(oe), n());
  }, R = (B) => {
    for (let oe = B - 1; oe >= 0; oe--) {
      const _e = Vr(Ze(Z(), { month: x.value(oe + 1), year: C.value(oe + 1) }), 1);
      W(oe, Ie(_e), $e(_e));
    }
    for (let oe = B + 1; oe <= c.value.count - 1; oe++) {
      const _e = Gt(Ze(Z(), { month: x.value(oe - 1), year: C.value(oe - 1) }), 1);
      W(oe, Ie(_e), $e(_e));
    }
  }, Q = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const B = Z(
        Z(s.value[1] ? s.value[1] : Gt(s.value[0], 1))
      ), [oe, _e] = [Ie(s.value[0]), $e(s.value[0])], [Pe, te] = [Ie(s.value[1]), $e(s.value[1])];
      (oe !== Pe || oe === Pe && _e !== te) && c.value.solo && W(1, Ie(B), $e(B));
    } else
      s.value && !Array.isArray(s.value) && (W(0, Ie(s.value), $e(s.value)), P(Z()));
  }, ce = () => {
    e.startDate && (W(0, Ie(Z(e.startDate)), $e(Z(e.startDate))), c.value.count && R(0));
  }, L = (B, oe) => {
    if (e.monthChangeOnScroll) {
      const _e = (/* @__PURE__ */ new Date()).getTime() - o.value.getTime(), Pe = Math.abs(B.deltaY);
      let te = 500;
      Pe > 1 && (te = 100), Pe > 100 && (te = 0), _e > te && (o.value = /* @__PURE__ */ new Date(), f(e.monthChangeOnScroll !== "inverse" ? -B.deltaY : B.deltaY, oe));
    }
  }, Oe = (B, oe, _e = !1) => {
    e.monthChangeOnArrows && e.vertical === _e && Fe(B, oe);
  }, Fe = (B, oe) => {
    f(B === "right" ? -1 : 1, oe);
  }, H = (B) => {
    if (g.value.markers)
      return po(B.value, g.value.markers);
  }, ve = (B, oe) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [B == 0, !0];
      case "fair":
        return [B == 0 || oe > B, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, Ee = (B, oe, _e, Pe) => {
    if (e.sixWeeks && B.length < 6) {
      const te = 6 - B.length, he = (oe.getDay() + 7 - Pe) % 7, ye = 6 - (_e.getDay() + 7 - Pe) % 7, [Lt, tn] = ve(he, ye);
      for (let Gn = 1; Gn <= te; Gn++)
        if (tn ? !!(Gn % 2) == Lt : Lt) {
          const wn = B[0].days[0], Go = A(Wt(wn.value, -7), Ie(oe));
          B.unshift({ days: Go });
        } else {
          const wn = B[B.length - 1], Go = wn.days[wn.days.length - 1], gf = A(Wt(Go.value, 1), Ie(oe));
          B.push({ days: gf });
        }
    }
    return B;
  }, A = (B, oe) => {
    const _e = Z(B), Pe = [];
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
  }, h = (B, oe) => {
    const _e = [], Pe = new Date(oe, B), te = new Date(oe, B + 1, 0), he = e.weekStart, ye = mn(Pe, { weekStartsOn: he }), Lt = (tn) => {
      const Gn = A(tn, B);
      if (_e.push({ days: Gn }), !_e[_e.length - 1].days.some(
        (wn) => Le(It(wn.value), It(te))
      )) {
        const wn = Wt(tn, 7);
        Lt(wn);
      }
    };
    return Lt(ye), Ee(_e, Pe, te, he);
  }, w = (B) => {
    const oe = In(Z(B.value), i.hours, i.minutes, ue());
    t("date-update", oe), e.multiDates ? Kl(oe, s, e.multiDatesLimit) : s.value = oe, r(), Xt().then(() => {
      j();
    });
  }, I = (B) => d.value.noDisabledRange ? af(a.value[0], B).some((oe) => y(oe)) : !1, K = () => {
    a.value = s.value ? s.value.slice() : [], a.value.length === 2 && !(d.value.fixedStart || d.value.fixedEnd) && (a.value = []);
  }, D = (B, oe) => {
    const _e = [
      Z(B.value),
      Wt(Z(B.value), +d.value.autoRange)
    ];
    S(_e) ? (oe && ae(B.value), a.value = _e) : t("invalid-date", B.value);
  }, ae = (B) => {
    const oe = Ie(Z(B)), _e = $e(Z(B));
    if (W(0, oe, _e), c.value.count > 0)
      for (let Pe = 1; Pe < c.value.count; Pe++) {
        const te = Ew(
          Ze(Z(B), { year: x.value(Pe - 1), month: C.value(Pe - 1) })
        );
        W(Pe, te.month, te.year);
      }
  }, ie = (B) => {
    if (I(B.value) || !$(B.value, s.value, d.value.fixedStart ? 0 : 1))
      return t("invalid-date", B.value);
    a.value = mf(Z(B.value), s, t, d);
  }, le = (B, oe) => {
    if (K(), d.value.autoRange)
      return D(B, oe);
    if (d.value.fixedStart || d.value.fixedEnd)
      return ie(B);
    a.value[0] ? $(Z(B.value), s.value) && !I(B.value) ? it(Z(B.value), Z(a.value[0])) ? (a.value.unshift(Z(B.value)), t("range-end", a.value[0])) : (a.value[1] = Z(B.value), t("range-end", a.value[1])) : (e.autoApply && t("auto-apply-invalid", B.value), t("invalid-date", B.value)) : (a.value[0] = Z(B.value), t("range-start", a.value[0]));
  }, ue = (B = !0) => e.enableSeconds ? Array.isArray(i.seconds) ? B ? i.seconds[0] : i.seconds[1] : i.seconds : 0, ne = (B) => {
    a.value[B] = In(
      a.value[B],
      i.hours[B],
      i.minutes[B],
      ue(B !== 1)
    );
  }, de = () => {
    var B, oe;
    a.value[0] && a.value[1] && +((B = a.value) == null ? void 0 : B[0]) > +((oe = a.value) == null ? void 0 : oe[1]) && (a.value.reverse(), t("range-start", a.value[0]), t("range-end", a.value[1]));
  }, me = () => {
    a.value.length && (a.value[0] && !a.value[1] ? ne(0) : (ne(0), ne(1), r()), de(), s.value = a.value.slice(), qo(a.value, t, e.autoApply, e.modelAuto));
  }, be = (B, oe = !1) => {
    if (y(B.value) || !B.current && e.hideOffsetDates)
      return t("invalid-date", B.value);
    if (!d.value.enabled)
      return w(B);
    Eu(i.hours) && Eu(i.minutes) && !e.multiDates && (le(B, oe), me());
  }, Te = (B, oe) => {
    var _e;
    W(B, oe.month, oe.year), c.value.count && !c.value.solo && R(B), t("update-month-year", { instance: B, month: oe.month, year: oe.year }), n(c.value.solo ? B : void 0);
    const Pe = (_e = e.flow) != null && _e.length ? e.flow[e.flowStep] : void 0;
    !oe.fromNav && (Pe === rn.month || Pe === rn.year) && r();
  }, Re = (B, oe) => {
    pf({
      value: B,
      modelValue: s,
      range: d.value.enabled,
      timezone: oe ? void 0 : p.value.timezone
    }), Y(), e.multiCalendars && Xt().then(() => U(!0));
  }, He = () => {
    d.value.enabled ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = it(Z(), s.value[0]) ? [Z(), s.value[0]] : [s.value[0], Z()] : s.value = [Z()] : s.value = Z(), Y();
  }, Ge = () => {
    if (Array.isArray(s.value))
      if (e.multiDates) {
        const B = lt();
        s.value[s.value.length - 1] = b(B);
      } else
        s.value = s.value.map((B, oe) => B && b(B, oe));
    else
      s.value = b(s.value);
    t("time-update");
  }, lt = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null;
  return {
    calendars: l,
    modelValue: s,
    month: x,
    year: C,
    time: i,
    disabledTimesConfig: V,
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
    updateTime: (B, oe = !0, _e = !1) => {
      O(B, oe, _e, Ge);
    }
  };
}, t1 = { key: 0 }, n1 = /* @__PURE__ */ Mt({
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
      getMarker: g,
      handleArrow: v,
      handleScroll: y,
      handleSwipe: S,
      selectDate: $,
      updateMonthYear: O,
      presetDate: b,
      selectCurrentDate: T,
      updateTime: E
    } = e1(a, r, pe, ee), k = yr(), { setHoverDate: V, getDayClassData: x, clearHoverDate: C } = a_(i, a), { defaultedMultiCalendars: W } = st(a), Y = J([]), N = J([]), j = J(null), U = Vt(k, "calendar"), _ = Vt(k, "monthYear"), P = Vt(k, "timePicker"), G = (f) => {
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
      days: R.days.map((Q) => (Q.marker = g(Q), Q.classData = x(Q), Q))
    })));
    function pe(f) {
      var R;
      f || f === 0 ? (R = N.value[f]) == null || R.triggerTransition(s.value(f), l.value(f)) : N.value.forEach((Q, ce) => Q.triggerTransition(s.value(ce), l.value(ce)));
    }
    function ee() {
      r("update-flow-step");
    }
    const m = (f, R = !1) => {
      $(f, R), a.spaceConfirm && r("select-date");
    };
    return t({
      clearHoverDate: C,
      presetDate: b,
      selectCurrentDate: T,
      toggleMonthPicker: (f, R, Q = 0) => {
        var ce;
        (ce = Y.value[Q]) == null || ce.toggleMonthPicker(f, R);
      },
      toggleYearPicker: (f, R, Q = 0) => {
        var ce;
        (ce = Y.value[Q]) == null || ce.toggleYearPicker(f, R);
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
        selectDate: $,
        presetDate: b
      })
    }), (f, R) => (F(), z(xe, null, [
      Qe(Wo, {
        "multi-calendars": M(W).count,
        collapse: f.collapse
      }, {
        default: Ve(({ instance: Q, index: ce }) => [
          f.disableMonthYearSelect ? X("", !0) : (F(), De(j_, _t({
            key: 0,
            ref: (L) => {
              L && (Y.value[ce] = L);
            },
            months: M(Zd)(f.formatLocale, f.locale, f.monthNameFormat),
            years: M(Wl)(f.yearRange, f.reverseYears),
            month: M(s)(Q),
            year: M(l)(Q),
            instance: Q
          }, f.$props, {
            onMount: R[0] || (R[0] = (L) => G(M(fr).header)),
            onResetFlow: R[1] || (R[1] = (L) => f.$emit("reset-flow")),
            onUpdateMonthYear: (L) => M(O)(Q, L),
            onOverlayClosed: R[2] || (R[2] = (L) => f.$emit("focus-menu"))
          }), Dt({ _: 2 }, [
            qe(M(_), (L, Oe) => ({
              name: L,
              fn: Ve((Fe) => [
                ge(f.$slots, L, ht(Pt(Fe)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          Qe(Z_, _t({
            ref: (L) => {
              L && (N.value[ce] = L);
            },
            "mapped-dates": se.value(Q),
            month: M(s)(Q),
            year: M(l)(Q),
            instance: Q
          }, f.$props, {
            onSelectDate: (L) => M($)(L, Q !== 1),
            onHandleSpace: (L) => m(L, Q !== 1),
            onSetHoverDate: R[3] || (R[3] = (L) => M(V)(L)),
            onHandleScroll: (L) => M(y)(L, Q),
            onHandleSwipe: (L) => M(S)(L, Q),
            onMount: R[4] || (R[4] = (L) => G(M(fr).calendar)),
            onResetFlow: R[5] || (R[5] = (L) => f.$emit("reset-flow")),
            onTooltipOpen: R[6] || (R[6] = (L) => f.$emit("tooltip-open", L)),
            onTooltipClose: R[7] || (R[7] = (L) => f.$emit("tooltip-close", L))
          }), Dt({ _: 2 }, [
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
      f.enableTimePicker ? (F(), z("div", t1, [
        f.$slots["time-picker"] ? ge(f.$slots, "time-picker", ht(_t({ key: 0 }, { time: M(c), updateTime: M(E) }))) : (F(), De(vf, _t({
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
          onMount: R[8] || (R[8] = (Q) => G(M(fr).timePicker)),
          "onUpdate:hours": R[9] || (R[9] = (Q) => M(E)(Q)),
          "onUpdate:minutes": R[10] || (R[10] = (Q) => M(E)(Q, !1)),
          "onUpdate:seconds": R[11] || (R[11] = (Q) => M(E)(Q, !1, !0)),
          onResetFlow: R[12] || (R[12] = (Q) => f.$emit("reset-flow")),
          onOverlayClosed: R[13] || (R[13] = (Q) => f.$emit("time-picker-close")),
          onOverlayOpened: R[14] || (R[14] = (Q) => f.$emit("time-picker-open", Q)),
          onAmPmChange: R[15] || (R[15] = (Q) => f.$emit("am-pm-change", Q))
        }), Dt({ _: 2 }, [
          qe(M(P), (Q, ce) => ({
            name: Q,
            fn: Ve((L) => [
              ge(f.$slots, Q, ht(Pt(L)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : X("", !0)
    ], 64));
  }
}), r1 = (e, t) => {
  const n = J(), { defaultedMultiCalendars: r, defaultedConfig: a, defaultedHighlight: o, defaultedRange: s, propDates: l } = st(e), { modelValue: i, year: c, month: u, calendars: d } = Pa(e, t), { isDisabled: p } = zn(e), { selectYear: g, groupedYears: v, showYearPicker: y, isDisabled: S, toggleYearPicker: $, handleYearSelect: O, handleYear: b } = hf({
    modelValue: i,
    multiCalendars: r,
    highlight: o,
    calendars: d,
    propDates: l,
    month: u,
    year: c,
    props: e,
    emit: t
  }), T = (j, U) => [j, U].map((_) => dn(_, "MMMM", { locale: e.formatLocale })).join("-"), E = re(() => (j) => i.value ? Array.isArray(i.value) ? i.value.some((U) => Mu(j, U)) : Mu(i.value, j) : !1), k = (j) => {
    if (s.value.enabled) {
      if (Array.isArray(i.value)) {
        const U = Le(j, i.value[0]) || Le(j, i.value[1]);
        return Ho(i.value, n.value, j) && !U;
      }
      return !1;
    }
    return !1;
  }, V = (j, U) => j.quarter === gu(U) && j.year === $e(U), x = (j) => typeof o.value == "function" ? o.value({ quarter: gu(j), year: $e(j) }) : !!o.value.quarters.find((U) => V(U, j)), C = re(() => (j) => {
    const U = Ze(/* @__PURE__ */ new Date(), { year: c.value(j) });
    return A0({
      start: Ld(U),
      end: S0(U)
    }).map((_) => {
      const P = sr(_), G = bu(_), se = p(_), pe = k(P), ee = x(P);
      return {
        text: T(P, G),
        value: P,
        active: E.value(P),
        highlighted: ee,
        disabled: se,
        isBetween: pe
      };
    });
  }), W = (j) => {
    Kl(j, i, e.multiDatesLimit), t("auto-apply", !0);
  }, Y = (j) => {
    i.value = Ql(i, j, t), qo(i.value, t, e.autoApply, e.modelAuto);
  }, N = (j) => {
    i.value = j, t("auto-apply");
  };
  return {
    defaultedConfig: a,
    defaultedMultiCalendars: r,
    groupedYears: v,
    year: c,
    isDisabled: S,
    quarters: C,
    showYearPicker: y,
    modelValue: i,
    setHoverDate: (j) => {
      n.value = j;
    },
    selectYear: g,
    selectQuarter: (j, U, _) => {
      if (!_)
        return d.value[U].month = Ie(bu(j)), e.multiDates ? W(j) : s.value.enabled ? Y(j) : N(j);
    },
    toggleYearPicker: $,
    handleYearSelect: O,
    handleYear: b
  };
}, a1 = { class: "dp--quarter-items" }, o1 = ["disabled", "onClick", "onMouseover"], s1 = /* @__PURE__ */ Mt({
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
    const r = n, a = e, o = yr(), s = Vt(o, "yearMode"), {
      defaultedMultiCalendars: l,
      defaultedConfig: i,
      groupedYears: c,
      year: u,
      isDisabled: d,
      quarters: p,
      modelValue: g,
      showYearPicker: v,
      setHoverDate: y,
      selectQuarter: S,
      toggleYearPicker: $,
      handleYearSelect: O,
      handleYear: b
    } = r1(a, r);
    return t({ getSidebarProps: () => ({
      modelValue: g,
      year: u,
      selectQuarter: S,
      handleYearSelect: O,
      handleYear: b
    }) }), (T, E) => (F(), De(Wo, {
      "multi-calendars": M(l).count,
      collapse: T.collapse,
      stretch: ""
    }, {
      default: Ve(({ instance: k }) => [
        we("div", {
          class: "dp-quarter-picker-wrap",
          style: Ct({ minHeight: `${M(i).modeHeight}px` })
        }, [
          we("div", null, [
            Qe(ff, _t(T.$props, {
              items: M(c)(k),
              instance: k,
              "show-year-picker": M(v)[k],
              year: M(u)(k),
              "is-disabled": (V) => M(d)(k, V),
              onHandleYear: (V) => M(b)(k, V),
              onYearSelect: (V) => M(O)(V, k),
              onToggleYearPicker: (V) => M($)(k, V == null ? void 0 : V.flow, V == null ? void 0 : V.show)
            }), Dt({ _: 2 }, [
              qe(M(s), (V, x) => ({
                name: V,
                fn: Ve((C) => [
                  ge(T.$slots, V, ht(Pt(C)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          we("div", a1, [
            (F(!0), z(xe, null, qe(M(p)(k), (V, x) => (F(), z("div", { key: x }, [
              we("button", {
                type: "button",
                class: Ne(["dp--qr-btn", {
                  "dp--qr-btn-active": V.active,
                  "dp--qr-btn-between": V.isBetween,
                  "dp--qr-btn-disabled": V.disabled,
                  "dp--highlighted": V.highlighted
                }]),
                disabled: V.disabled,
                onClick: (C) => M(S)(V.value, k, V.disabled),
                onMouseover: (C) => M(y)(V.value)
              }, [
                T.$slots.quarter ? ge(T.$slots, "quarter", {
                  key: 0,
                  value: V.value,
                  text: V.text
                }) : (F(), z(xe, { key: 1 }, [
                  Jt(We(V.text), 1)
                ], 64))
              ], 42, o1)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), l1 = ["id", "aria-label"], i1 = {
  key: 0,
  class: "dp--menu-load-container"
}, u1 = /* @__PURE__ */ we("span", { class: "dp--menu-loader" }, null, -1), c1 = [
  u1
], d1 = {
  key: 0,
  class: "dp__sidebar_left"
}, f1 = ["onClick", "onKeydown"], p1 = {
  key: 2,
  class: "dp__sidebar_right"
}, m1 = {
  key: 3,
  class: "dp__action_extra"
}, Ru = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...Uo,
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
        flowStep: x.value,
        collapse: a.collapse,
        noOverlayFocus: a.noOverlayFocus,
        menuWrapRef: o.value
      };
    }), { setMenuFocused: l, setShiftKey: i, control: c } = cf(), u = yr(), { defaultedTextInput: d, defaultedInline: p, defaultedConfig: g } = st(a), v = J(null), y = J(0), S = J(null), $ = J(!1), O = J(null);
    xt(() => {
      if (!a.shadow) {
        $.value = !0, b(), window.addEventListener("resize", b);
        const A = gt(o);
        if (A && !d.value.enabled && !p.value.enabled && (l(!0), j()), A) {
          const h = (w) => {
            g.value.allowPreventDefault && w.preventDefault(), Fn(w, g.value, !0);
          };
          A.addEventListener("pointerdown", h), A.addEventListener("mousedown", h);
        }
      }
    }), Lr(() => {
      window.removeEventListener("resize", b);
    });
    const b = () => {
      const A = gt(S);
      A && (y.value = A.getBoundingClientRect().width);
    }, { arrowRight: T, arrowLeft: E, arrowDown: k, arrowUp: V } = qn(), { flowStep: x, updateFlowStep: C, childMount: W, resetFlow: Y } = o_(a, r, O), N = re(() => a.monthPicker ? __ : a.yearPicker ? k_ : a.timePicker ? B_ : a.quarterPicker ? s1 : n1), j = () => {
      const A = gt(o);
      A && A.focus({ preventScroll: !0 });
    }, U = re(() => {
      var A;
      return ((A = O.value) == null ? void 0 : A.getSidebarProps()) || {};
    }), _ = () => {
      a.openOnTop && r("recalculate-position");
    }, P = Vt(u, "action"), G = re(() => a.monthPicker || a.yearPicker ? Vt(u, "monthYear") : a.timePicker ? Vt(u, "timePicker") : Vt(u, "shared")), se = re(() => a.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), pe = re(() => ({
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
      Fn(A, g.value, !0);
    }, f = () => {
      a.escClose && r("close-picker");
    }, R = (A) => {
      if (a.arrowNavigation) {
        if (A === "up")
          return V();
        if (A === "down")
          return k();
        if (A === "left")
          return E();
        if (A === "right")
          return T();
      } else
        A === "left" || A === "up" ? Fe("handleArrow", "left", 0, A === "up") : Fe("handleArrow", "right", 0, A === "down");
    }, Q = (A) => {
      i(A.shiftKey), !a.disableMonthYearSelect && A.code === "Tab" && A.target.classList.contains("dp__menu") && c.value.shiftKeyInMenu && (A.preventDefault(), Fn(A, g.value, !0), r("close-picker"));
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
        class: Ne(ee.value),
        onMouseleave: Ee,
        onClick: m,
        onKeydown: [
          Ae(f, ["esc"]),
          h[18] || (h[18] = Ae(Ke((D) => R("left"), ["prevent"]), ["left"])),
          h[19] || (h[19] = Ae(Ke((D) => R("up"), ["prevent"]), ["up"])),
          h[20] || (h[20] = Ae(Ke((D) => R("down"), ["prevent"]), ["down"])),
          h[21] || (h[21] = Ae(Ke((D) => R("right"), ["prevent"]), ["right"])),
          Q
        ]
      }, [
        (A.disabled || A.readonly) && M(p).enabled || A.loading ? (F(), z("div", {
          key: 0,
          class: Ne(pe.value)
        }, [
          A.loading ? (F(), z("div", i1, c1)) : X("", !0)
        ], 2)) : X("", !0),
        !M(p).enabled && !A.teleportCenter ? (F(), z("div", {
          key: 1,
          class: Ne(se.value)
        }, null, 2)) : X("", !0),
        we("div", {
          ref_key: "innerMenuRef",
          ref: S,
          class: Ne({
            dp__menu_content_wrapper: ((I = A.presetDates) == null ? void 0 : I.length) || !!A.$slots["left-sidebar"] || !!A.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && ((K = A.presetDates) == null ? void 0 : K.length) || !!A.$slots["left-sidebar"] || !!A.$slots["right-sidebar"]
          }),
          style: Ct({ "--dp-menu-width": `${y.value}px` })
        }, [
          A.$slots["left-sidebar"] ? (F(), z("div", d1, [
            ge(A.$slots, "left-sidebar", ht(Pt(U.value)))
          ])) : X("", !0),
          A.presetDates.length ? (F(), z("div", {
            key: 1,
            class: Ne({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            (F(!0), z(xe, null, qe(A.presetDates, (D, ae) => (F(), z(xe, { key: ae }, [
              D.slot ? ge(A.$slots, D.slot, {
                key: 0,
                presetDate: ve,
                label: D.label,
                value: D.value
              }) : (F(), z("button", {
                key: 1,
                type: "button",
                style: Ct(D.style || {}),
                class: Ne(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                onClick: Ke((ie) => ve(D.value, D.noTz), ["prevent"]),
                onKeydown: [
                  Ae(Ke((ie) => ve(D.value, D.noTz), ["prevent"]), ["enter"]),
                  Ae(Ke((ie) => ve(D.value, D.noTz), ["prevent"]), ["space"])
                ]
              }, We(D.label), 47, f1))
            ], 64))), 128))
          ], 2)) : X("", !0),
          we("div", {
            ref_key: "calendarWrapperRef",
            ref: v,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (F(), De(Mo(N.value), _t({
              ref_key: "dynCmpRef",
              ref: O
            }, s.value, {
              "flow-step": M(x),
              onMount: M(W),
              onUpdateFlowStep: M(C),
              onResetFlow: M(Y),
              onFocusMenu: j,
              onSelectDate: h[0] || (h[0] = (D) => A.$emit("select-date")),
              onDateUpdate: h[1] || (h[1] = (D) => A.$emit("date-update", D)),
              onTooltipOpen: h[2] || (h[2] = (D) => A.$emit("tooltip-open", D)),
              onTooltipClose: h[3] || (h[3] = (D) => A.$emit("tooltip-close", D)),
              onAutoApply: h[4] || (h[4] = (D) => A.$emit("auto-apply", D)),
              onRangeStart: h[5] || (h[5] = (D) => A.$emit("range-start", D)),
              onRangeEnd: h[6] || (h[6] = (D) => A.$emit("range-end", D)),
              onInvalidFixedRange: h[7] || (h[7] = (D) => A.$emit("invalid-fixed-range", D)),
              onTimeUpdate: h[8] || (h[8] = (D) => A.$emit("time-update")),
              onAmPmChange: h[9] || (h[9] = (D) => A.$emit("am-pm-change", D)),
              onTimePickerOpen: h[10] || (h[10] = (D) => A.$emit("time-picker-open", D)),
              onTimePickerClose: ce,
              onRecalculatePosition: _,
              onUpdateMonthYear: h[11] || (h[11] = (D) => A.$emit("update-month-year", D)),
              onAutoApplyInvalid: h[12] || (h[12] = (D) => A.$emit("auto-apply-invalid", D)),
              onInvalidDate: h[13] || (h[13] = (D) => A.$emit("invalid-date", D)),
              "onUpdate:internalModelValue": h[14] || (h[14] = (D) => A.$emit("update:internal-model-value", D))
            }), Dt({ _: 2 }, [
              qe(G.value, (D, ae) => ({
                name: D,
                fn: Ve((ie) => [
                  ge(A.$slots, D, ht(Pt({ ...ie })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          A.$slots["right-sidebar"] ? (F(), z("div", p1, [
            ge(A.$slots, "right-sidebar", ht(Pt(U.value)))
          ])) : X("", !0),
          A.$slots["action-extra"] ? (F(), z("div", m1, [
            A.$slots["action-extra"] ? ge(A.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: H
            }) : X("", !0)
          ])) : X("", !0)
        ], 6),
        !A.autoApply || M(g).keepActionRow ? (F(), De(f_, _t({
          key: 2,
          "menu-mount": $.value
        }, s.value, {
          "calendar-width": y.value,
          onClosePicker: h[15] || (h[15] = (D) => A.$emit("close-picker")),
          onSelectDate: h[16] || (h[16] = (D) => A.$emit("select-date")),
          onInvalidSelect: h[17] || (h[17] = (D) => A.$emit("invalid-select")),
          onSelectNow: H
        }), Dt({ _: 2 }, [
          qe(M(P), (D, ae) => ({
            name: D,
            fn: Ve((ie) => [
              ge(A.$slots, D, ht(Pt({ ...ie })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : X("", !0)
      ], 42, l1);
    };
  }
}), h1 = typeof window < "u" ? window : void 0, ks = () => {
}, v1 = (e) => rl() ? (ju(e), !0) : !1, y1 = (e, t, n, r) => {
  if (!e)
    return ks;
  let a = ks;
  const o = ft(
    () => M(e),
    (l) => {
      a(), l && (l.addEventListener(t, n, r), a = () => {
        l.removeEventListener(t, n, r), a = ks;
      });
    },
    { immediate: !0, flush: "post" }
  ), s = () => {
    o(), a();
  };
  return v1(s), s;
}, g1 = (e, t, n, r = {}) => {
  const { window: a = h1, event: o = "pointerdown" } = r;
  return a ? y1(a, o, (s) => {
    const l = gt(e), i = gt(t);
    !l || !i || l === s.target || s.composedPath().includes(l) || s.composedPath().includes(i) || n(s);
  }, { passive: !0 }) : void 0;
}, b1 = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...Uo
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
    const r = n, a = e, o = yr(), s = J(!1), l = Ka(a, "modelValue"), i = Ka(a, "timezone"), c = J(null), u = J(null), d = J(null), p = J(!1), g = J(null), v = J(!1), y = J(!1), S = J(!1), { setMenuFocused: $, setShiftKey: O } = cf(), { clearArrowNav: b } = qn(), { validateDate: T, isValidTime: E } = zn(a), { defaultedTransitions: k, defaultedTextInput: V, defaultedInline: x, defaultedConfig: C, defaultedRange: W } = st(a), { menuTransition: Y, showTransition: N } = Ta(k);
    xt(() => {
      R(a.modelValue), Xt().then(() => {
        if (!x.value.enabled) {
          const te = pe(g.value);
          te == null || te.addEventListener("scroll", A), window == null || window.addEventListener("resize", h);
        }
      }), x.value.enabled && (s.value = !0), window == null || window.addEventListener("keyup", w), window == null || window.addEventListener("keydown", I);
    }), Lr(() => {
      if (!x.value.enabled) {
        const te = pe(g.value);
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
    const { openOnTop: _, menuStyle: P, xCorrect: G, setMenuPosition: se, getScrollableParent: pe, shadowRender: ee } = t_({
      menuRef: c,
      menuRefInner: u,
      inputRef: d,
      pickerWrapperRef: g,
      inline: x,
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
    } = Zw(r, a, p), Oe = re(
      () => ({
        dp__main: !0,
        dp__theme_dark: a.dark,
        dp__theme_light: !a.dark,
        dp__flex_display: x.value.enabled,
        "dp--flex-display-collapsed": S.value,
        dp__flex_display_with_input: x.value.input
      })
    ), Fe = re(() => a.dark ? "dp__theme_dark" : "dp__theme_light"), H = re(() => ({
      to: typeof a.teleport == "boolean" ? "body" : a.teleport,
      disabled: !a.teleport || x.value.enabled
    })), ve = re(() => ({ class: "dp__outer_menu_wrap" })), Ee = re(() => x.value.enabled && (a.timePicker || a.monthPicker || a.yearPicker || a.quarterPicker)), A = () => {
      s.value && (C.value.closeOnScroll ? me() : se());
    }, h = () => {
      var te;
      s.value && se();
      const he = (te = u.value) == null ? void 0 : te.$el.getBoundingClientRect().width;
      S.value = document.body.offsetWidth <= he;
    }, w = (te) => {
      te.key === "Tab" && !x.value.enabled && !a.teleport && C.value.tabOutClosesMenu && (g.value.contains(document.activeElement) || me()), y.value = te.shiftKey;
    }, I = (te) => {
      y.value = te.shiftKey;
    }, K = () => {
      !a.disabled && !a.readonly && (ee(Ru, a), se(!1), s.value = !0, s.value && r("open"), s.value || de(), R(a.modelValue));
    }, D = () => {
      var te;
      m.value = "", de(), (te = d.value) == null || te.setParsedDate(null), r("update:model-value", null), r("update:model-timezone-value", null), r("cleared"), C.value.closeOnClearValue && me();
    }, ae = () => {
      const te = f.value;
      return !te || !Array.isArray(te) && T(te) ? !0 : Array.isArray(te) ? a.multiDates || te.length === 2 && T(te[0]) && T(te[1]) ? !0 : W.value.partialRange && !a.timePicker ? T(te[0]) : !1 : !1;
    }, ie = () => {
      L() && ae() ? (Q(), me()) : r("invalid-select", f.value);
    }, le = (te) => {
      ue(), Q(), C.value.closeOnAutoApply && !te && me();
    }, ue = () => {
      d.value && V.value.enabled && d.value.setParsedDate(f.value);
    }, ne = (te = !1) => {
      a.autoApply && E(f.value) && ae() && (W.value.enabled && Array.isArray(f.value) ? (W.value.partialRange || f.value.length === 2) && le(te) : le(te));
    }, de = () => {
      V.value.enabled || (f.value = null);
    }, me = () => {
      x.value.enabled || (s.value && (s.value = !1, G.value = !1, $(!1), O(!1), b(), r("closed"), m.value && R(l.value)), de(), r("blur"));
    }, be = (te, he, ye = !1) => {
      if (!te) {
        f.value = null;
        return;
      }
      const Lt = Array.isArray(te) ? !te.some((Gn) => !T(Gn)) : T(te), tn = E(te);
      Lt && tn && (f.value = te, he && (v.value = ye, ie(), r("text-submit")));
    }, Te = () => {
      a.autoApply && E(f.value) && Q(), ue();
    }, Re = () => s.value ? me() : K(), He = (te) => {
      f.value = te;
    }, Ge = () => {
      V.value.enabled && (p.value = !0, ce()), r("focus");
    }, lt = () => {
      if (V.value.enabled && (p.value = !1, R(a.modelValue), v.value)) {
        const te = Aw(g.value, y.value);
        te == null || te.focus();
      }
      r("blur");
    }, B = (te) => {
      u.value && u.value.updateMonthYear(0, {
        month: Pu(te.month),
        year: Pu(te.year)
      });
    }, oe = (te) => {
      R(te ?? a.modelValue);
    }, _e = (te, he) => {
      var ye;
      (ye = u.value) == null || ye.switchView(te, he);
    }, Pe = (te) => C.value.onClickOutside ? C.value.onClickOutside(te) : me();
    return g1(c, d, () => Pe(ae)), t({
      closeMenu: me,
      selectDate: ie,
      clearValue: D,
      openMenu: K,
      onScroll: A,
      formatInputValue: ce,
      // exposed for testing purposes
      updateInternalModelValue: He,
      // modify internal modelValue
      setMonthYear: B,
      parseModel: oe,
      switchView: _e,
      toggleMenu: Re
    }), (te, he) => (F(), z("div", {
      ref_key: "pickerWrapperRef",
      ref: g,
      class: Ne(Oe.value),
      "data-datepicker-instance": ""
    }, [
      Qe(u_, _t({
        ref_key: "inputRef",
        ref: d,
        "input-value": M(m),
        "onUpdate:inputValue": he[0] || (he[0] = (ye) => ut(m) ? m.value = ye : null),
        "is-menu-open": s.value
      }, te.$props, {
        onClear: D,
        onOpen: K,
        onSetInputDate: be,
        onSetEmptyDate: M(Q),
        onSelectDate: ie,
        onToggle: Re,
        onClose: me,
        onFocus: Ge,
        onBlur: lt,
        onRealBlur: he[1] || (he[1] = (ye) => p.value = !1)
      }), Dt({ _: 2 }, [
        qe(M(U), (ye, Lt) => ({
          name: ye,
          fn: Ve((tn) => [
            ge(te.$slots, ye, ht(Pt(tn)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (F(), De(Mo(te.teleport ? pm : "div"), ht(Pt(H.value)), {
        default: Ve(() => [
          Qe(Wn, {
            name: M(Y)(M(_)),
            css: M(N) && !M(x).enabled
          }, {
            default: Ve(() => [
              s.value ? (F(), z("div", _t({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: c
              }, ve.value, {
                class: { "dp--menu-wrapper": !M(x).enabled },
                style: M(x).enabled ? void 0 : M(P)
              }), [
                Qe(Ru, _t({
                  ref_key: "dpMenuRef",
                  ref: u
                }, te.$props, {
                  "internal-model-value": M(f),
                  "onUpdate:internalModelValue": he[2] || (he[2] = (ye) => ut(f) ? f.value = ye : null),
                  class: { [Fe.value]: !0, "dp--menu-wrapper": te.teleport },
                  "open-on-top": M(_),
                  "no-overlay-focus": Ee.value,
                  collapse: S.value,
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
                }), Dt({ _: 2 }, [
                  qe(M(j), (ye, Lt) => ({
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
}), Xl = /* @__PURE__ */ (() => {
  const e = b1;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), w1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xl
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(w1).forEach(([e, t]) => {
  e !== "default" && (Xl[e] = t);
});
const Jl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, _1 = { class: "input" }, x1 = ["value"], k1 = ["min", "max"], M1 = ["accept"], T1 = { key: 5 }, P1 = { key: 6 }, A1 = {
  __name: "ValueSelector",
  props: /* @__PURE__ */ wc({
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
    const t = e, n = Fs(e, "selectedValue"), r = Fs(e, "dataValue"), a = J(null);
    function o($, O = d.value) {
      if ($ == null || $ === "") return !1;
      const b = Number($);
      return Number.isFinite(b) && b >= O.rangemin && b <= O.rangemax;
    }
    function s() {
      a.value = r.value;
    }
    function l($) {
      if ($.key !== "ArrowUp" && $.key !== "ArrowDown") return;
      const O = Number(r.value);
      if (!Number.isFinite(O)) return;
      const b = d.value, T = Number($.currentTarget.step) || 1, E = O + ($.key === "ArrowUp" ? T : -T);
      o(E, b) || $.preventDefault();
    }
    function i($) {
      var k, V;
      const O = d.value;
      if (o(r.value, O)) return;
      const b = a.value, T = o(b, O) ? b : Number(O.defaultFloat), E = (V = (k = $.relatedTarget) == null ? void 0 : k.closest) == null ? void 0 : V.call(k, "[data-poris-command]");
      E ? window.confirm(
        "This value is outside the active range. Restore the previous value and continue with the command? Choose Cancel to cancel the command."
      ) || (E.dataset.porisCommandCancelled = "true") : window.alert("This value is outside the active range. The previous value will be restored."), r.value = T;
    }
    const c = J(t.mode), u = re(() => c.value.hasValues ? c.value.valuesNodes : []), d = re(() => n.value || c.value.defaultValue || u.value[0]), p = () => {
      var $;
      return (($ = d.value) == null ? void 0 : $.type) === Or;
    }, g = () => {
      var $;
      return (($ = d.value) == null ? void 0 : $.type) === ur;
    }, v = () => {
      var $;
      return (($ = d.value) == null ? void 0 : $.type) === Rr;
    }, y = () => {
      var $;
      return (($ = d.value) == null ? void 0 : $.type) === Er;
    }, S = () => {
      var $;
      return (($ = d.value) == null ? void 0 : $.type) === lo;
    };
    return ft(
      () => t.mode,
      ($) => {
        console.log("watch.mode", $), c.value = $;
      }
    ), ft(u, ($, O) => {
      console.log(`values mode: ${c.value.id}, changed/oldVal:`, $, O);
    }), ($, O) => (F(), z("div", _1, [
      u.value.length > 1 ? Vn((F(), z("select", {
        key: 0,
        "onUpdate:modelValue": O[0] || (O[0] = (b) => n.value = b),
        class: "active-value-selector"
      }, [
        (F(!0), z(xe, null, qe(u.value, (b) => (F(), z("option", {
          key: b.id,
          value: b
        }, We(b.name), 9, x1))), 128))
      ], 512)), [
        [Ic, n.value]
      ]) : X("", !0),
      p() ? Vn((F(), z("input", {
        key: 1,
        "onUpdate:modelValue": O[1] || (O[1] = (b) => r.value = b),
        type: "text"
      }, null, 512)), [
        [Li, r.value]
      ]) : g() ? Vn((F(), z("input", {
        key: 2,
        class: "numberPicker",
        "onUpdate:modelValue": O[2] || (O[2] = (b) => r.value = b),
        type: "number",
        step: ".01",
        min: d.value.rangemin,
        max: d.value.rangemax,
        onFocus: s,
        onKeydown: l,
        onBlur: i
      }, null, 40, k1)), [
        [
          Li,
          r.value,
          void 0,
          { number: !0 }
        ]
      ]) : y() ? (F(), De(M(Xl), {
        key: 3,
        modelValue: r.value,
        "onUpdate:modelValue": O[3] || (O[3] = (b) => r.value = b),
        min: d.value.datemin,
        max: d.value.datemax,
        "enable-seconds": "",
        "is-24": ""
      }, null, 8, ["modelValue", "min", "max"])) : v() ? (F(), z("input", {
        key: 4,
        type: "file",
        accept: d.value.fileExtension
      }, null, 8, M1)) : S() && u.value.length === 1 ? (F(), z("span", T1, We(d.value.name), 1)) : d.value ? X("", !0) : (F(), z("span", P1, "No values!")),
      Jt(" " + We(" "))
    ]));
  }
}, S1 = /* @__PURE__ */ Jl(A1, [["__scopeId", "data-v-f7e30fcc"]]), C1 = { class: "input-mode-panel" }, D1 = { class: "title" }, O1 = {
  key: 0,
  class: "command-buttons"
}, E1 = ["onClick"], R1 = { class: "value-selector" }, $1 = {
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
    const s = Ol(), l = e, i = t;
    function c(v, y) {
      if (y.currentTarget.dataset.porisCommandCancelled === "true") {
        delete y.currentTarget.dataset.porisCommandCancelled;
        return;
      }
      i("command-launched", { systemName: l.subsystem.name, commandName: v.name });
    }
    const u = J(l.mode), d = J(null), p = J(null);
    function g(v = null) {
      const y = s.getSystemValue(l.subsystem, u.value, v);
      d.value = y.value, p.value = y.data;
    }
    return g(), ft(d, (v) => {
      if (v) {
        const y = s.getSystemValue(l.subsystem, u.value, v);
        p.value !== y.data && (p.value = y.data);
      }
    }, { flush: "sync" }), ft(p, (v) => {
      d.value && s.setSystemValue(l.subsystem, d.value, v);
    }, { flush: "sync" }), ft(
      () => s.systemValues[`${l.subsystem.id}`],
      (v) => {
        var y, S;
        v && (((y = d.value) == null ? void 0 : y.id) !== ((S = v.value) == null ? void 0 : S.id) && (d.value = v.value), p.value !== v.data && (p.value = v.data));
      },
      { flush: "sync" }
    ), ft(u, (v) => {
      console.log("watch_input: currentMode.set() mode:", v), g();
    }), ft(
      () => l.mode,
      (v) => {
        console.log("new props.mode:", v), u.value = v;
      }
    ), (v, y) => {
      var S, $;
      return F(), z("div", {
        class: Ne(["inputsystem-panel", { "has-commands": (S = e.subsystem.commandsNodes) == null ? void 0 : S.length }])
      }, [
        we("div", C1, [
          we("span", D1, We(e.subsystem.label || e.subsystem.name), 1),
          ($ = e.subsystem.commandsNodes) != null && $.length ? (F(), z("span", O1, [
            (F(!0), z(xe, null, qe(e.subsystem.commandsNodes, (O) => (F(), z("button", {
              key: O.id,
              type: "button",
              "data-poris-command": "",
              onClick: (b) => c(O, b)
            }, We(O.label || O.name), 9, E1))), 128))
          ])) : X("", !0),
          we("span", R1, [
            o(e.subsystem, e.modes) ? (F(), De(Ed, {
              key: 0,
              class: "mode-selector",
              modelValue: u.value,
              "onUpdate:modelValue": y[0] || (y[0] = (O) => u.value = O),
              modes: e.modes
            }, null, 8, ["modelValue", "modes"])) : X("", !0),
            a(e.subsystem) ? (F(), De(S1, {
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
}, $u = /* @__PURE__ */ Jl($1, [["__scopeId", "data-v-94f24dc3"]]), N1 = {
  key: 0,
  class: "subsystem-panel"
}, V1 = { class: "subsystem-heading" }, F1 = {
  key: 0,
  class: "title"
}, I1 = {
  key: 1,
  class: "command-buttons"
}, L1 = ["onClick"], B1 = {
  key: 0,
  class: "mode-selector"
}, Y1 = {
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
    const i = Ol(), c = e, u = t, p = J(c.system).value;
    p.candidateMode = p.currentMode;
    function g(v, y) {
      if (y.currentTarget.dataset.porisCommandCancelled === "true") {
        delete y.currentTarget.dataset.porisCommandCancelled;
        return;
      }
      u("command-launched", { systemName: p.name, commandName: v.name });
    }
    return ft(p.candidateMode, () => {
      var v, y;
      En(
        `watch.mode. mode ${(v = p.currentMode) == null ? void 0 : v.name}, newMode :${(y = p.candidateMode) == null ? void 0 : y.name}`
      ), p.candidateMode != null && p.candidateMode != p.currentMode && (i.setValidMode(p, p.candidateMode), En(`watch result >> ${p.currentMode.name}`));
    }), (v, y) => {
      var $;
      const S = Tp("SubSystemPanel", !0);
      return F(), z(xe, null, [
        l(M(p)) ? (F(), z("div", N1, [
          we("div", V1, [
            M(p).label != "-" ? (F(), z("h3", F1, We(M(p).label || M(p).name), 1)) : X("", !0),
            ($ = M(p).commandsNodes) != null && $.length ? (F(), z("div", I1, [
              (F(!0), z(xe, null, qe(M(p).commandsNodes, (O) => (F(), z("button", {
                key: O.id,
                type: "button",
                "data-poris-command": "",
                onClick: (b) => g(O, b)
              }, We(O.label || O.name), 9, L1))), 128))
            ])) : X("", !0)
          ]),
          s(M(p)) ? (F(), z("div", B1, [
            Qe(Ed, {
              modelValue: M(p).candidateMode,
              "onUpdate:modelValue": y[0] || (y[0] = (O) => M(p).candidateMode = O),
              modes: M(p).getValidModes()
            }, null, 8, ["modelValue", "modes"])
          ])) : X("", !0),
          (F(!0), z(xe, null, qe(M(p).getActiveSubnodes(), (O) => (F(), z(xe, {
            key: O.id
          }, [
            a(O) ? (F(), De(S, {
              key: 0,
              system: O,
              onCommandLaunched: y[1] || (y[1] = (b) => u("command-launched", b))
            }, null, 8, ["system"])) : X("", !0),
            o(O) ? (F(), De($u, {
              key: 1,
              subsystem: O,
              modes: O.getValidModes(),
              mode: O.currentMode,
              onCommandLaunched: y[2] || (y[2] = (b) => u("command-launched", b))
            }, null, 8, ["subsystem", "modes", "mode"])) : X("", !0)
          ], 64))), 128))
        ])) : X("", !0),
        o(M(p)) ? (F(), De($u, {
          key: 1,
          subsystem: M(p),
          modes: M(p).getValidModes(),
          mode: M(p).currentMode,
          onCommandLaunched: y[3] || (y[3] = (O) => u("command-launched", O))
        }, null, 8, ["subsystem", "modes", "mode"])) : X("", !0)
      ], 64);
    };
  }
}, zo = "";
function H1() {
  return !!zo;
}
function j1(e) {
  return ot.post(`${zo}/api/poris/commit`, e).then((t) => t.data);
}
function U1(e) {
  return ot.post(`${zo}/api/poris/command/${e}`, {}).then((t) => t.data);
}
function W1() {
  return ot.get(`${zo}/api/poris/state`).then((e) => e.data);
}
const q1 = (e) => (bp("data-v-cacd4121"), e = e(), wp(), e), z1 = {
  key: 0,
  class: "loading"
}, G1 = /* @__PURE__ */ q1(() => /* @__PURE__ */ we("span", { class: "spinner" }, null, -1)), K1 = [
  G1
], Q1 = {
  key: 1,
  class: "panel"
}, X1 = { class: "title" }, J1 = {
  key: 0,
  class: "monitor-capsules"
}, Z1 = { class: "monitor-name" }, ex = { class: "monitor-value" }, tx = {
  key: 1,
  class: "actions"
}, nx = ["disabled"], rx = ["disabled"], ax = ["disabled"], ox = {
  key: 2,
  class: "status command-message"
}, sx = {
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
    const t = Ol(), n = re(() => t.isLoading), r = re(() => t.rootSubsystem), a = J(!1), o = J(""), s = J(""), l = J(!1), i = H1(), c = "", u = J([]), d = re(() => u.value.filter((x) => x.visible));
    let p = null;
    const g = e;
    function v(x) {
      var Y, N, j;
      const C = t.systemValues[`${x.id}`], W = (C == null ? void 0 : C.value) || ((Y = x.currentMode) == null ? void 0 : Y.defaultValue) || ((j = (N = x.currentMode) == null ? void 0 : N.valuesNodes) == null ? void 0 : j[0]);
      return W ? typeof (C == null ? void 0 : C.data) == "number" ? {
        number: C.data,
        name: W.name,
        id: W.id,
        type: W.type
      } : W.type === "ValueString" || W.type === "ValueFilePath" ? { data: (C == null ? void 0 : C.data) ?? "", name: W.name, id: W.id, type: W.type } : { name: W.name, id: W.id, type: W.type } : null;
    }
    function y(x) {
      return {
        id: x.id,
        name: x.name,
        mode: x.currentMode ? { id: x.currentMode.id, name: x.currentMode.name } : null,
        value: v(x),
        subsystems: (x.subsystemsNodes || []).map(y)
      };
    }
    function S() {
      return {
        root: y(r.value)
      };
    }
    async function $() {
      if (i)
        try {
          const x = await W1();
          u.value = (x == null ? void 0 : x.monitors) || [];
        } catch {
          u.value = [];
        }
    }
    async function O(x, C) {
      var W, Y;
      a.value = !0, l.value = !1, o.value = "";
      try {
        await x(), o.value = C;
      } catch (N) {
        l.value = !0, o.value = ((Y = (W = N == null ? void 0 : N.response) == null ? void 0 : W.data) == null ? void 0 : Y.error) || N.message || String(N);
      } finally {
        a.value = !1;
      }
    }
    function b() {
      O(() => j1(S()), "Changes committed");
    }
    function T(x) {
      O(() => U1(x), `${x} executed`);
    }
    function E({ systemName: x, commandName: C }) {
      l.value = !1, s.value = `We launched ${x}.${C}`;
    }
    function k() {
      s.value = "";
    }
    function V() {
      o.value = "", l.value = !1, g.modelPath && t.loadModelURL(g.modelPath);
    }
    return g.modelPath && t.loadModelURL(g.modelPath), xt(() => {
      $(), i && (p = window.setInterval($, 1e3));
    }), vl(() => {
      p && window.clearInterval(p);
    }), (x, C) => (F(), z("div", {
      class: Ne(["poris-main", { compact: g.compact }]),
      onClickCapture: k,
      onKeydownCapture: k
    }, [
      n.value ? (F(), z("div", z1, K1)) : r.value ? (F(), z("div", Q1, [
        we("h2", X1, We(r.value.name) + " Panel", 1),
        d.value.length ? (F(), z("div", J1, [
          (F(!0), z(xe, null, qe(d.value, (W) => (F(), z("div", {
            key: W.id,
            class: "monitor-capsule"
          }, [
            we("span", Z1, We(W.label), 1),
            we("span", ex, We(W.value), 1)
          ]))), 128))
        ])) : X("", !0),
        Qe(Y1, {
          system: r.value,
          onCommandLaunched: E
        }, null, 8, ["system"]),
        M(i) ? (F(), z("div", tx, [
          we("button", {
            type: "button",
            disabled: a.value,
            onClick: b
          }, "Commit changes", 8, nx),
          we("button", {
            type: "button",
            disabled: a.value,
            onClick: V
          }, "Cancel", 8, rx),
          M(c) ? (F(), z("button", {
            key: 0,
            type: "button",
            disabled: a.value,
            onClick: C[0] || (C[0] = (W) => T(M(c)))
          }, We(M(c)), 9, ax)) : X("", !0)
        ])) : X("", !0),
        s.value ? (F(), z("div", ox, We(s.value), 1)) : X("", !0),
        o.value ? (F(), z("div", {
          key: 3,
          class: Ne(["status", { error: l.value }])
        }, We(o.value), 3)) : X("", !0)
      ])) : X("", !0)
    ], 34));
  }
}, lx = /* @__PURE__ */ Jl(sx, [["__scopeId", "data-v-cacd4121"]]);
function ux(e, t, n = {}) {
  const { debug: r = !1, compact: a = !1 } = n;
  y0(r);
  const s = eh(lx, { modelPath: e, compact: a });
  return s.use(ah()), s.mount(t), s;
}
export {
  ux as createPorisViewerPanel
};
