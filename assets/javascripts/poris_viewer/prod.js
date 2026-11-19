var zp = Object.defineProperty;
var Kp = (e, t, n) => t in e ? zp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var be = (e, t, n) => Kp(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Xl(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ve = {}, kr = [], kn = () => {
}, $c = () => !1, so = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), oo = (e) => e.startsWith("onUpdate:"), ct = Object.assign, Gl = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Jp = Object.prototype.hasOwnProperty, Be = (e, t) => Jp.call(e, t), Oe = Array.isArray, nr = (e) => ns(e) === "[object Map]", Ir = (e) => ns(e) === "[object Set]", Yi = (e) => ns(e) === "[object Date]", De = (e) => typeof e == "function", Ge = (e) => typeof e == "string", tn = (e) => typeof e == "symbol", He = (e) => e !== null && typeof e == "object", Ic = (e) => (He(e) || De(e)) && De(e.then) && De(e.catch), Fc = Object.prototype.toString, ns = (e) => Fc.call(e), Xp = (e) => ns(e).slice(8, -1), Lc = (e) => ns(e) === "[object Object]", lo = (e) => Ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Da = /* @__PURE__ */ Xl(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), io = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Gp = /-\w/g, Ft = /* @__PURE__ */ io((e) => e.replace(Gp, (t) => t.slice(1).toUpperCase())), Qp = /\B([A-Z])/g, Yn = /* @__PURE__ */ io(
  (e) => e.replace(Qp, "-$1").toLowerCase()
), uo = /* @__PURE__ */ io((e) => e.charAt(0).toUpperCase() + e.slice(1)), Fo = /* @__PURE__ */ io((e) => e ? `on${uo(e)}` : ""), Ot = (e, t) => !Object.is(e, t), Ps = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Vc = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, rs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Zp = (e) => {
  const t = Ge(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let qi;
const co = () => qi || (qi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Pt(e) {
  if (Oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], a = Ge(r) ? rm(r) : Pt(r);
      if (a)
        for (const s in a)
          t[s] = a[s];
    }
    return t;
  } else if (Ge(e) || He(e))
    return e;
}
const em = /;(?![^(]*\))/g, tm = /:([^]+)/, nm = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function rm(e) {
  const t = {};
  return e.replace(nm, (n) => n.startsWith("/*") ? "" : n).split(em).forEach((n) => {
    if (n) {
      const r = n.split(tm);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Re(e) {
  let t = "";
  if (Ge(e))
    t = e;
  else if (Oe(e))
    for (let n = 0; n < e.length; n++) {
      const r = Re(e[n]);
      r && (t += r + " ");
    }
  else if (He(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function St(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Ge(t) && (e.class = Re(t)), n && (e.style = Pt(n)), e;
}
const am = "itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly", sm = /* @__PURE__ */ Xl(am);
function Bc(e) {
  return !!e || e === "";
}
function om(e, t, n) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let a = 0; r && a < e.length; a++)
    r = sr(e[a], t[a], n);
  return r;
}
function Wi(e, t, n) {
  if (e.size !== t.size) return !1;
  const r = Array.from(t), a = new Uint8Array(r.length);
  for (const s of e) {
    let o = -1;
    for (let l = 0; l < r.length; l++)
      if (!a[l] && sr(s, r[l], n)) {
        o = l;
        break;
      }
    if (o < 0) return !1;
    a[o] = 1;
  }
  return !0;
}
function lm(e, t, n) {
  let r = nr(e), a = nr(t);
  if (r || a || (r = Ir(e), a = Ir(t), r || a))
    return r && a ? Wi(e, t, n) : !1;
  const s = Object.keys(e).length, o = Object.keys(t).length;
  if (s !== o)
    return !1;
  for (const l in e) {
    const i = e.hasOwnProperty(l), c = t.hasOwnProperty(l);
    if (i && !c || !i && c || !sr(e[l], t[l], n))
      return !1;
  }
  return String(e) === String(t);
}
function zi(e, t, n, r) {
  n || (n = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [a, s] = n;
  if (a.has(e) || s.has(t))
    return a.get(e) === t && s.get(t) === e;
  a.set(e, t), s.set(t, e);
  const o = r(e, t, n);
  return a.delete(e), s.delete(t), o;
}
function sr(e, t, n) {
  if (e === t) return !0;
  let r = Yi(e), a = Yi(t);
  return r || a ? r && a ? e.getTime() === t.getTime() : !1 : (r = tn(e), a = tn(t), r || a ? e === t : (r = Oe(e), a = Oe(t), r || a ? r && a ? zi(e, t, n, om) : !1 : (r = He(e), a = He(t), r || a ? !r || !a ? !1 : zi(e, t, n, lm) : String(e) === String(t))));
}
function im(e, t) {
  return e.findIndex((n) => sr(n, t));
}
const jc = (e) => !!(e && e.__v_isRef === !0), Fe = (e) => Ge(e) ? e : e == null ? "" : Oe(e) || He(e) && (e.toString === Fc || !De(e.toString)) ? jc(e) ? Fe(e.value) : JSON.stringify(e, Hc, 2) : String(e), Hc = (e, t) => jc(t) ? Hc(e, t.value) : nr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, a], s) => (n[Lo(r, s) + " =>"] = a, n),
    {}
  )
} : Ir(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Lo(n))
} : tn(t) ? Lo(t) : He(t) && !Oe(t) && !Lc(t) ? String(t) : t, Lo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    tn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let vt;
class Uc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !t && vt && (vt.active ? (this.parent = vt, this.index = (vt.scopes || (vt.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes) {
        const r = this.scopes.slice();
        for (t = 0, n = r.length; t < n; t++)
          r[t].pause();
      }
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes) {
        const a = this.scopes.slice();
        for (t = 0, n = a.length; t < n; t++)
          a[t].resume();
      }
      const r = this.effects.slice();
      for (t = 0, n = r.length; t < n; t++)
        r[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = vt;
      try {
        return vt = this, t();
      } finally {
        vt = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = vt, vt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (vt === this)
        vt = this.prevScope;
      else {
        let t = vt;
        for (; t; ) {
          if (t.prevScope === this) {
            t.prevScope = this.prevScope;
            break;
          }
          t = t.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        const a = this.scopes.slice();
        for (n = 0, r = a.length; n < r; n++)
          a[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Yc(e) {
  return new Uc(e);
}
function Ql() {
  return vt;
}
function qc(e, t = !1) {
  vt && (vt.active ? vt.cleanups.push(e) : e());
}
let Xe;
const Vo = /* @__PURE__ */ new WeakSet();
class Wc {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, vt && (vt.active ? vt.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Vo.has(this) && (Vo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Kc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ki(this), Jc(this);
    const t = Xe, n = Zt;
    Xe = this, Zt = !0;
    try {
      return this.fn();
    } finally {
      Xc(this), Xe = t, Zt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ti(t);
      this.deps = this.depsTail = void 0, Ki(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Vo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Tl(this) && this.run();
  }
  get dirty() {
    return Tl(this);
  }
}
let zc = 0, Ra, Ca;
function Kc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ca, Ca = e;
    return;
  }
  e.next = Ra, Ra = e;
}
function Zl() {
  zc++;
}
function ei() {
  if (--zc > 0)
    return;
  if (Ca) {
    let t = Ca;
    for (Ca = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ra; ) {
    let t = Ra;
    for (Ra = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Jc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Xc(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === n && (n = a), ti(r), um(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
  }
  e.deps = t, e.depsTail = n;
}
function Tl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Gc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Gc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ha) || (e.globalVersion = Ha, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Tl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Xe, r = Zt;
  Xe = e, Zt = !0;
  try {
    Jc(e);
    const a = e.fn(e._value);
    (t.version === 0 || Ot(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    Xe = n, Zt = r, Xc(e), e.flags &= -3;
  }
}
function ti(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: a } = e;
  if (r && (r.nextSub = a, e.prevSub = void 0), a && (a.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      ti(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function um(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Zt = !0;
const ni = [];
function mn() {
  ni.push(Zt), Zt = !1;
}
function cm() {
  ni.push(Zt), Zt = !0;
}
function An() {
  const e = ni.pop();
  Zt = e === void 0 ? !0 : e;
}
function Ki(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Xe;
    Xe = void 0;
    try {
      t();
    } finally {
      Xe = n;
    }
  }
}
let Ha = 0;
class dm {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class fo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Xe || !Zt || Xe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Xe)
      n = this.activeLink = new dm(Xe, this), Xe.deps ? (n.prevDep = Xe.depsTail, Xe.depsTail.nextDep = n, Xe.depsTail = n) : Xe.deps = Xe.depsTail = n, Qc(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Xe.depsTail, n.nextDep = void 0, Xe.depsTail.nextDep = n, Xe.depsTail = n, Xe.deps === n && (Xe.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ha++, this.notify(t);
  }
  notify(t) {
    Zl();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ei();
    }
  }
}
function Qc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Qc(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const $s = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ Symbol(
  ""
), Sl = /* @__PURE__ */ Symbol(
  ""
), Ua = /* @__PURE__ */ Symbol(
  ""
);
function $t(e, t, n) {
  if (Zt && Xe) {
    let r = $s.get(e);
    r || $s.set(e, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || (r.set(n, a = new fo()), a.map = r, a.key = n), a.track();
  }
}
function In(e, t, n, r, a, s) {
  const o = $s.get(e);
  if (!o) {
    Ha++;
    return;
  }
  const l = (i) => {
    i && i.trigger();
  };
  if (Zl(), t === "clear")
    o.forEach(l);
  else {
    const i = Oe(e), c = i && lo(n);
    if (i && n === "length") {
      const u = Number(r);
      o.forEach((d, p) => {
        (p === "length" || p === Ua || !tn(p) && p >= u) && l(d);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), c && l(o.get(Ua)), t) {
        case "add":
          i ? c && l(o.get("length")) : (l(o.get(Mr)), nr(e) && l(o.get(Sl)));
          break;
        case "delete":
          i || (l(o.get(Mr)), nr(e) && l(o.get(Sl)));
          break;
        case "set":
          nr(e) && l(o.get(Mr));
          break;
      }
  }
  ei();
}
function fm(e, t) {
  const n = $s.get(e);
  return n && n.get(t);
}
function Yr(e) {
  const t = /* @__PURE__ */ Le(e);
  return t === e || ($t(t, "iterate", Ua), /* @__PURE__ */ en(e)) ? t : /* @__PURE__ */ Mn(e) ? /* @__PURE__ */ On(e) ? t.map((n) => or(sn(n))) : t.map(or) : t.map(sn);
}
function po(e) {
  return $t(e = /* @__PURE__ */ Le(e), "iterate", Ua), e;
}
function bn(e, t) {
  return /* @__PURE__ */ Mn(e) ? or(/* @__PURE__ */ On(e) ? sn(t) : t) : sn(t);
}
const pm = {
  __proto__: null,
  [Symbol.iterator]() {
    return Bo(this, Symbol.iterator, (e) => bn(this, e));
  },
  concat(...e) {
    return Yr(this).concat(
      ...e.map((t) => Oe(t) ? Yr(t) : t)
    );
  },
  entries() {
    return Bo(this, "entries", (e) => (e[1] = bn(this, e[1]), e));
  },
  every(e, t) {
    return En(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return En(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => bn(this, r)),
      arguments
    );
  },
  find(e, t) {
    return En(
      this,
      "find",
      e,
      t,
      (n) => bn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return En(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return En(
      this,
      "findLast",
      e,
      t,
      (n) => bn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return En(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return En(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return jo(this, "includes", e);
  },
  indexOf(...e) {
    return jo(this, "indexOf", e);
  },
  join(e) {
    return Yr(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return jo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return En(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ha(this, "pop");
  },
  push(...e) {
    return ha(this, "push", e);
  },
  reduce(e, ...t) {
    return Xi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Xi(this, "reduceRight", e, t);
  },
  shift() {
    return ha(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return En(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ha(this, "splice", e);
  },
  toReversed() {
    return Yr(this).toReversed();
  },
  toSorted(e) {
    return Yr(this).toSorted(e);
  },
  toSpliced(...e) {
    return Yr(this).toSpliced(...e);
  },
  unshift(...e) {
    return ha(this, "unshift", e);
  },
  values() {
    return Bo(this, "values", (e) => bn(this, e));
  }
};
function Bo(e, t, n) {
  const r = po(e), a = r[t], s = a.call(r);
  if (r !== e && !/* @__PURE__ */ en(e)) {
    if (s[Symbol.toStringTag] === "Array Iterator") {
      const o = Object.create(Object.getPrototypeOf(s));
      return o.next = () => Ji(s.next(), n), a !== Zc[t] && Object.defineProperties(o, {
        return: {
          get() {
            const l = s.return;
            return typeof l == "function" ? l.bind(s) : l;
          }
        },
        throw: {
          get() {
            const l = s.throw;
            return typeof l == "function" ? l.bind(s) : l;
          }
        }
      }), o;
    }
    s._next = s.next, s.next = () => Ji(s._next(), n);
  }
  return s;
}
function Ji(e, t) {
  return e.done || (e.value = t(e.value)), e;
}
const Zc = Array.prototype;
function En(e, t, n, r, a, s) {
  const o = po(e), l = o !== e && !/* @__PURE__ */ en(e), i = o[t];
  if (i !== Zc[t]) {
    const d = i.apply(e, s);
    return l ? sn(d) : d;
  }
  let c = n;
  o !== e && (l ? c = function(d, p) {
    return n.call(this, bn(e, d), p, e);
  } : n.length > 2 && (c = function(d, p) {
    return n.call(this, d, p, e);
  }));
  const u = i.call(o, c, r);
  return l && a ? a(u) : u;
}
function Xi(e, t, n, r) {
  const a = po(e), s = a !== e && !/* @__PURE__ */ en(e);
  let o = n, l = !1;
  a !== e && (s ? (l = r.length === 0, o = function(c, u, d) {
    return l && (l = !1, c = bn(e, c)), n.call(this, c, bn(e, u), d, e);
  }) : n.length > 3 && (o = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const i = a[t](o, ...r);
  return l ? bn(e, i) : i;
}
function jo(e, t, n) {
  const r = /* @__PURE__ */ Le(e);
  $t(r, "iterate", Ua);
  const a = r[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ mo(n[0]) ? (n[0] = /* @__PURE__ */ Le(n[0]), r[t](...n)) : a;
}
function ha(e, t, n = []) {
  mn(), Zl();
  const r = (/* @__PURE__ */ Le(e))[t].apply(e, n);
  return ei(), An(), r;
}
const mm = /* @__PURE__ */ Xl("__proto__,__v_isRef,__isVue"), ed = /* @__PURE__ */ new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(tn)
);
function hm(e) {
  tn(e) || (e = String(e));
  const t = /* @__PURE__ */ Le(this);
  return $t(t, "has", e), t.hasOwnProperty(e);
}
class td {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (a ? s ? km : sd : s ? ad : rd).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = Oe(t);
    if (!a) {
      let i;
      if (o && (i = pm[n]))
        return i;
      if (n === "hasOwnProperty")
        return hm;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ nt(t) ? t : r
    );
    if ((tn(n) ? ed.has(n) : mm(n)) || (a || $t(t, "get", n), s))
      return l;
    if (/* @__PURE__ */ nt(l)) {
      const i = o && lo(n) ? l : l.value;
      return a && He(i) ? /* @__PURE__ */ Ol(i) : i;
    }
    return He(l) ? a ? /* @__PURE__ */ Ol(l) : /* @__PURE__ */ qn(l) : l;
  }
}
class nd extends td {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, a) {
    let s = t[n];
    const o = Oe(t) && lo(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Mn(s);
      if (!/* @__PURE__ */ en(r) && !/* @__PURE__ */ Mn(r) && (s = /* @__PURE__ */ Le(s), r = /* @__PURE__ */ Le(r)), !o && /* @__PURE__ */ nt(s) && !/* @__PURE__ */ nt(r))
        return c || (s.value = r), !0;
    }
    const l = o ? Number(n) < t.length : Be(t, n), i = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ nt(t) ? t : a
    );
    return t === /* @__PURE__ */ Le(a) && i && (l ? Ot(r, s) && In(t, "set", n, r) : In(t, "add", n, r)), i;
  }
  deleteProperty(t, n) {
    const r = Be(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && r && In(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!tn(n) || !ed.has(n)) && $t(t, "has", n), r;
  }
  ownKeys(t) {
    return $t(
      t,
      "iterate",
      Oe(t) ? "length" : Mr
    ), Reflect.ownKeys(t);
  }
}
class vm extends td {
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
const ym = /* @__PURE__ */ new nd(), gm = /* @__PURE__ */ new vm(), bm = /* @__PURE__ */ new nd(!0);
const kl = (e) => e, vs = (e) => Reflect.getPrototypeOf(e);
function wm(e, t, n) {
  return function(...r) {
    const a = this.__v_raw, s = /* @__PURE__ */ Le(a), o = nr(s), l = e === "entries" || e === Symbol.iterator && o, i = e === "keys" && o, c = a[e](...r), u = n ? kl : t ? or : sn;
    return !t && $t(
      s,
      "iterate",
      i ? Sl : Mr
    ), ct(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: p } = c.next();
          return p ? { value: d, done: p } : {
            value: l ? [u(d[0]), u(d[1])] : u(d),
            done: p
          };
        }
      }
    );
  };
}
function ys(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function _m(e, t) {
  const n = {
    get(a) {
      const s = this.__v_raw, o = /* @__PURE__ */ Le(s), l = /* @__PURE__ */ Le(a);
      e || (Ot(a, l) && $t(o, "get", a), $t(o, "get", l));
      const { has: i } = vs(o), c = t ? kl : e ? or : sn;
      if (i.call(o, a))
        return c(s.get(a));
      if (i.call(o, l))
        return c(s.get(l));
      s !== o && s.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && $t(/* @__PURE__ */ Le(a), "iterate", Mr), a.size;
    },
    has(a) {
      const s = this.__v_raw, o = /* @__PURE__ */ Le(s), l = /* @__PURE__ */ Le(a);
      return e || (Ot(a, l) && $t(o, "has", a), $t(o, "has", l)), a === l ? s.has(a) : s.has(a) || s.has(l);
    },
    forEach(a, s) {
      const o = this, l = o.__v_raw, i = /* @__PURE__ */ Le(l), c = t ? kl : e ? or : sn;
      return !e && $t(i, "iterate", Mr), l.forEach((u, d) => a.call(s, c(u), c(d), o));
    }
  };
  return ct(
    n,
    e ? {
      add: ys("add"),
      set: ys("set"),
      delete: ys("delete"),
      clear: ys("clear")
    } : {
      add(a) {
        const s = /* @__PURE__ */ Le(this), o = vs(s), l = /* @__PURE__ */ Le(a), i = !t && !/* @__PURE__ */ en(a) && !/* @__PURE__ */ Mn(a) ? l : a;
        return o.has.call(s, i) || Ot(a, i) && o.has.call(s, a) || Ot(l, i) && o.has.call(s, l) || (s.add(i), In(s, "add", i, i)), this;
      },
      set(a, s) {
        !t && !/* @__PURE__ */ en(s) && !/* @__PURE__ */ Mn(s) && (s = /* @__PURE__ */ Le(s));
        const o = /* @__PURE__ */ Le(this), { has: l, get: i } = vs(o);
        let c = l.call(o, a);
        c || (a = /* @__PURE__ */ Le(a), c = l.call(o, a));
        const u = i.call(o, a);
        return o.set(a, s), c ? Ot(s, u) && In(o, "set", a, s) : In(o, "add", a, s), this;
      },
      delete(a) {
        const s = /* @__PURE__ */ Le(this), { has: o, get: l } = vs(s);
        let i = o.call(s, a);
        i || (a = /* @__PURE__ */ Le(a), i = o.call(s, a)), l && l.call(s, a);
        const c = s.delete(a);
        return i && In(s, "delete", a, void 0), c;
      },
      clear() {
        const a = /* @__PURE__ */ Le(this), s = a.size !== 0, o = a.clear();
        return s && In(
          a,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    n[a] = wm(a, e, t);
  }), n;
}
function ri(e, t) {
  const n = _m(e, t);
  return (r, a, s) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_isShallow" ? t : a === "__v_raw" ? r : Reflect.get(
    Be(n, a) && a in r ? n : r,
    a,
    s
  );
}
const xm = {
  get: /* @__PURE__ */ ri(!1, !1)
}, Tm = {
  get: /* @__PURE__ */ ri(!1, !0)
}, Sm = {
  get: /* @__PURE__ */ ri(!0, !1)
};
const rd = /* @__PURE__ */ new WeakMap(), ad = /* @__PURE__ */ new WeakMap(), sd = /* @__PURE__ */ new WeakMap(), km = /* @__PURE__ */ new WeakMap();
function Om(e) {
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
// @__NO_SIDE_EFFECTS__
function qn(e) {
  return /* @__PURE__ */ Mn(e) ? e : ai(
    e,
    !1,
    ym,
    xm,
    rd
  );
}
// @__NO_SIDE_EFFECTS__
function Pm(e) {
  return ai(
    e,
    !1,
    bm,
    Tm,
    ad
  );
}
// @__NO_SIDE_EFFECTS__
function Ol(e) {
  return ai(
    e,
    !0,
    gm,
    Sm,
    sd
  );
}
function ai(e, t, n, r, a) {
  if (!He(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const s = a.get(e);
  if (s)
    return s;
  const o = Om(Xp(e));
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return a.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function On(e) {
  return /* @__PURE__ */ Mn(e) ? /* @__PURE__ */ On(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Mn(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function mo(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Le(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ Le(t) : e;
}
function si(e) {
  return !Be(e, "__v_skip") && Object.isExtensible(e) && Vc(e, "__v_skip", !0), e;
}
const sn = (e) => He(e) ? /* @__PURE__ */ qn(e) : e, or = (e) => He(e) ? /* @__PURE__ */ Ol(e) : e;
// @__NO_SIDE_EFFECTS__
function nt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function se(e) {
  return Am(e, !1);
}
function Am(e, t) {
  return /* @__PURE__ */ nt(e) ? e : new Mm(e, t);
}
class Mm {
  constructor(t, n) {
    this.dep = new fo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ Le(t), this._value = n ? t : sn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ en(t) || /* @__PURE__ */ Mn(t);
    t = r ? t : /* @__PURE__ */ Le(t), Ot(t, n) && (this._rawValue = t, this._value = r ? t : sn(t), this.dep.trigger());
  }
}
function Gi(e) {
  e.dep && e.dep.trigger();
}
function D(e) {
  return /* @__PURE__ */ nt(e) ? e.value : e;
}
const Em = {
  get: (e, t, n) => t === "__v_raw" ? e : D(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const a = e[t];
    return /* @__PURE__ */ nt(a) && !/* @__PURE__ */ nt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function od(e) {
  return /* @__PURE__ */ On(e) ? e : new Proxy(e, Em);
}
class Dm {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new fo(), { get: r, set: a } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = r, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Rm(e) {
  return new Dm(e);
}
// @__NO_SIDE_EFFECTS__
function Cm(e) {
  const t = Oe(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = ld(e, n);
  return t;
}
class Nm {
  constructor(t, n, r) {
    this._object = t, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0, this._key = tn(n) ? n : String(n), this._raw = /* @__PURE__ */ Le(t);
    let a = !0, s = t;
    if (!Oe(t) || tn(this._key) || !lo(this._key))
      do
        a = !/* @__PURE__ */ mo(s) || /* @__PURE__ */ en(s);
      while (a && (s = s.__v_raw));
    this._shallow = a;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = D(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ nt(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ nt(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return fm(this._raw, this._key);
  }
}
class $m {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function Ya(e, t, n) {
  return /* @__PURE__ */ nt(e) ? e : De(e) ? new $m(e) : He(e) && arguments.length > 1 ? ld(e, t, n) : /* @__PURE__ */ se(e);
}
function ld(e, t, n) {
  return new Nm(e, t, n);
}
class Im {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new fo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ha - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Xe !== this)
      return Kc(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Gc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Fm(e, t, n = !1) {
  let r, a;
  return De(e) ? r = e : (r = e.get, a = e.set), new Im(r, a, n);
}
const gs = {}, Is = /* @__PURE__ */ new WeakMap();
let br;
function Lm(e, t = !1, n = br) {
  if (n) {
    let r = Is.get(n);
    r || Is.set(n, r = []), r.push(e);
  }
}
function Vm(e, t, n = Ve) {
  const { immediate: r, deep: a, once: s, scheduler: o, augmentJob: l, call: i } = n, c = (b) => a ? b : /* @__PURE__ */ en(b) || a === !1 || a === 0 ? Fn(b, 1) : Fn(b);
  let u, d, p, v, w = !1, m = !1;
  if (/* @__PURE__ */ nt(e) ? (d = () => e.value, w = /* @__PURE__ */ en(e)) : /* @__PURE__ */ On(e) ? (d = () => c(e), w = !0) : Oe(e) ? (m = !0, w = e.some((b) => /* @__PURE__ */ On(b) || /* @__PURE__ */ en(b)), d = () => e.map((b) => {
    if (/* @__PURE__ */ nt(b))
      return b.value;
    if (/* @__PURE__ */ On(b))
      return c(b);
    if (De(b))
      return i ? i(b, 2) : b();
  })) : De(e) ? t ? d = i ? () => i(e, 2) : e : d = () => {
    if (p) {
      mn();
      try {
        p();
      } finally {
        An();
      }
    }
    const b = br;
    br = u;
    try {
      return i ? i(e, 3, [v]) : e(v);
    } finally {
      br = b;
    }
  } : d = kn, t && a) {
    const b = d, q = a === !0 ? 1 / 0 : a;
    d = () => Fn(b(), q);
  }
  const S = Ql(), R = () => {
    u.stop(), S && S.active && Gl(S.effects, u);
  };
  if (s && t) {
    const b = t;
    t = (...q) => {
      try {
        return b(...q);
      } finally {
        R();
      }
    };
  }
  let k = m ? new Array(e.length).fill(gs) : gs;
  const h = (b) => {
    if (!(!(u.flags & 1) || !u.dirty && !b))
      if (t) {
        const q = u.run();
        if (b || a || w || (m ? q.some((Y, E) => Ot(Y, k[E])) : Ot(q, k))) {
          const Y = br;
          mn();
          try {
            p && p(), br = u;
            const E = [
              q,
              // pass undefined as the old value when it's changed for the first time
              k === gs ? void 0 : m && k[0] === gs ? [] : k,
              v
            ];
            k = q, i ? i(t, 3, E) : (
              // @ts-expect-error
              t(...E)
            );
          } finally {
            br = Y, An();
          }
        }
      } else
        u.run();
  };
  return l && l(h), u = new Wc(d), u.scheduler = o ? () => o(h, !1) : h, v = (b) => Lm(b, !1, u), p = u.onStop = () => {
    const b = Is.get(u);
    if (b) {
      if (i)
        i(b, 4);
      else
        for (const q of b) q();
      Is.delete(u);
    }
  }, t ? r ? h(!0) : k = u.run() : o ? o(h.bind(null, !0), !0) : u.run(), R.pause = u.pause.bind(u), R.resume = u.resume.bind(u), R.stop = R, R;
}
function Fn(e, t = 1 / 0, n) {
  if (t <= 0 || !He(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ nt(e))
    Fn(e.value, t, n);
  else if (Oe(e))
    for (let r = 0; r < e.length; r++)
      Fn(e[r], t, n);
  else if (Ir(e) || nr(e))
    e.forEach((r) => {
      Fn(r, t, n);
    });
  else if (Lc(e)) {
    for (const r in e)
      Fn(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Fn(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function as(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (a) {
    ho(a, t, n);
  }
}
function on(e, t, n, r) {
  if (De(e)) {
    const a = as(e, t, n, r);
    return a && Ic(a) && a.catch((s) => {
      ho(s, t, n, void 0, !0);
    }), a;
  }
  if (Oe(e)) {
    const a = [];
    for (let s = 0; s < e.length; s++)
      a.push(on(e[s], t, n, r));
    return a;
  }
}
function ho(e, t, n, r = !0, a = !1) {
  const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: l } = t && t.appContext.config || Ve;
  if (t) {
    let i = t.parent;
    const c = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; i; ) {
      const d = i.ec;
      if (d && !i.isUnmounted && // Async failures may outlive stopped scopes whose unmount effects
      // are deferred or discarded by Suspense.
      (!a || i.scope.active)) {
        for (let p = 0; p < d.length; p++)
          if (d[p](e, c, u) === !1)
            return;
      }
      i = i.parent;
    }
    if (o) {
      mn(), as(o, null, 10, [
        e,
        c,
        u
      ]), An();
      return;
    }
  }
  Bm(e, n, s, r, l);
}
function Bm(e, t, n, r = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const Ht = [];
let cn = -1;
const wn = [];
let er = null, Jr = 0;
const id = /* @__PURE__ */ Promise.resolve();
let Fs = null;
function Et(e) {
  const t = Fs || id;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function jm(e) {
  let t = cn + 1, n = Ht.length;
  for (; t < n; ) {
    const r = t + n >>> 1, a = Ht[r], s = qa(a);
    s < e || s === e && a.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function vo(e) {
  if (!(e.flags & 1)) {
    const t = qa(e), n = Ht[Ht.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= qa(n) ? Ht.push(e) : Ht.splice(jm(t), 0, e), e.flags |= 1, ud();
  }
}
function ud() {
  Fs || (Fs = id.then(fd));
}
function Hm(e) {
  if (!Oe(e))
    er && e.id === -1 ? er.splice(Jr + 1, 0, e) : e.flags & 1 || (wn.push(e), e.flags |= 1);
  else
    for (let t = 0; t < e.length; t++)
      wn.push(e[t]);
  ud();
}
function cd(e, t, n, r = cn + 1) {
  for (; r < Ht.length; r++) {
    const a = Ht[r];
    if (a && a.flags & 2) {
      if (e && a.id !== e.uid || t !== void 0 && !(a.id >= t))
        continue;
      Ht.splice(r, 1), r = e ? r - 1 : cn, a.flags & 4 && (a.flags &= -2), a(), a.flags & 4 || (a.flags &= -2);
    }
  }
}
function dd(e, t, n = 0) {
  if (wn.length) {
    let r = wn, a = 0;
    if (t) {
      r = [];
      for (let o = 0; o < wn.length; o++) {
        const l = wn[o];
        (l.i !== void 0 ? !l.i || l.i.uid < n : t.has(l)) ? wn[a++] = l : r.push(l);
      }
    }
    const s = [...new Set(r)].sort((o, l) => qa(o) - qa(l));
    if (wn.length = a, er) {
      for (let o = 0; o < s.length; o++)
        er.push(s[o]);
      return;
    }
    for (er = s, Jr = 0; Jr < er.length; Jr++) {
      const o = er[Jr];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    er = null, Jr = 0;
  }
}
let Ho = !1;
function Um(e, t) {
  if (Ho) {
    e();
    return;
  }
  const n = t === void 0 ? void 0 : new Set(wn);
  e(), Ho = !0;
  try {
    cd(void 0, t), dd(void 0, n, t);
  } finally {
    Ho = !1;
  }
}
const qa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function fd(e) {
  try {
    for (cn = 0; cn < Ht.length; cn++) {
      const t = Ht[cn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), as(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; cn < Ht.length; cn++) {
      const t = Ht[cn];
      t && (t.flags &= -2);
    }
    cn = -1, Ht.length = 0, dd(), Fs = null, (Ht.length || wn.length) && fd();
  }
}
let At = null, pd = null;
function Ls(e) {
  const t = At;
  return At = e, pd = e && e.type.__scopeId || null, t;
}
function Ne(e, t = At, n) {
  if (!t || e._n)
    return e;
  const r = (...a) => {
    r._d && qs(-1);
    const s = Ls(t), o = Bn.length;
    let l;
    try {
      l = e(...a);
    } finally {
      for (let i = Bn.length; i > o; i--) ci();
      Ls(s), r._d && qs(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Vn(e, t) {
  if (At === null)
    return e;
  const n = To(At), r = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [s, o, l, i = Ve] = t[a];
    s && (De(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Fn(o), r.push({
      dir: s,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: i
    }));
  }
  return e;
}
function hr(e, t, n, r) {
  let a = e;
  if (r === "beforeMount")
    e._mount = e;
  else if (r === "beforeUpdate") {
    const l = t && t._mount;
    l && (l._latest = e, e._mount = l);
  } else if (r === "mounted") {
    const l = e._latest;
    e._mount = e._latest = void 0, l && (a = l, l._mount = void 0);
  }
  const s = a.dirs, o = t && t.dirs;
  for (let l = 0; l < s.length; l++) {
    let i = s[l];
    o ? i.oldValue = o[l].value : r === "mounted" && i.oldValue !== void 0 && (i = ct({}, i, { oldValue: void 0 }));
    let c = i.dir[r];
    c && (mn(), on(c, n, 8, [
      e.el,
      i,
      a,
      t
    ]), An());
  }
}
function Ym(e, t) {
  if (It) {
    let n = It.provides;
    const r = It.parent && It.parent.provides;
    r === n && (n = It.provides = Object.create(r)), n[e] = t;
  }
}
function Na(e, t, n = !1) {
  const r = os();
  if (r || Dr) {
    let a = Dr ? Dr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && De(t) ? t.call(r && r.proxy) : t;
  }
}
function qm() {
  return !!(os() || Dr);
}
const Wm = /* @__PURE__ */ Symbol.for("v-scx"), zm = () => Na(Wm);
function Km(e, t) {
  return oi(
    e,
    null,
    { flush: "sync" }
  );
}
function ze(e, t, n) {
  return oi(e, t, n);
}
function oi(e, t, n = Ve) {
  const { immediate: r, deep: a, flush: s, once: o } = n, l = ct({}, n), i = t && r || !t && s !== "post";
  let c;
  if (Xa) {
    if (s === "sync") {
      const v = zm();
      c = v.__watcherHandles || (v.__watcherHandles = []);
    } else if (!i) {
      const v = () => {
      };
      return v.stop = kn, v.resume = kn, v.pause = kn, v;
    }
  }
  const u = It;
  l.call = (v, w, m) => on(v, u, w, m);
  let d = !1;
  s === "post" ? l.scheduler = (v) => {
    v.i = u, Ct(v, u && u.suspense);
  } : s !== "sync" && (d = !0, l.scheduler = (v, w) => {
    w ? v() : vo(v);
  }), l.augmentJob = (v) => {
    t && (v.flags |= 4), d && (v.flags |= 2, u && (v.id = u.uid, v.i = u));
  };
  const p = Vm(e, t, l);
  return Xa && (c ? c.push(p) : i && p()), p;
}
function Jm(e, t, n) {
  const r = this.proxy, a = Ge(e) ? e.includes(".") ? md(r, e) : () => r[e] : e.bind(r, r);
  let s;
  De(t) ? s = t : (s = t.handler, n = t);
  const o = ls(this), l = oi(a, s.bind(r), n);
  return o(), l;
}
function md(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
const Gn = /* @__PURE__ */ new WeakMap(), hd = /* @__PURE__ */ Symbol("_vte"), yo = (e) => e.__isTeleport, xr = (e) => e && (e.disabled || e.disabled === ""), Xm = (e) => e && (e.defer || e.defer === ""), Qi = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Zi = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Pl = (e, t) => {
  const n = e && e.to;
  return Ge(n) ? t ? t(n) : null : n;
}, Gm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, a, s, o, l, i, c) {
    const {
      mc: u,
      pc: d,
      pbc: p,
      o: { insert: v, querySelector: w, createText: m, createComment: S, parentNode: R }
    } = c, k = xr(t.props);
    let { dynamicChildren: h } = t;
    const b = (E, _, M) => {
      E.shapeFlag & 16 && u(
        E.children,
        _,
        M,
        a,
        s,
        o,
        l,
        i
      );
    }, q = (E = t) => {
      const _ = xr(E.props), M = E.target = Pl(E.props, w), C = Al(M, E, m, v);
      M && (o !== "svg" && Qi(M) ? o = "svg" : o !== "mathml" && Zi(M) && (o = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(M), _ || (b(E, M, C), Pa(E, !1)));
    }, Y = (E) => {
      const _ = () => {
        if (Gn.get(E) === _) {
          if (Gn.delete(E), xr(E.props)) {
            const M = R(E.el) || n;
            b(E, M, E.anchor), Pa(E, !0);
          }
          q(E);
        }
      };
      Gn.set(E, _), Ct(_, s);
    };
    if (e == null) {
      const E = t.el = m(""), _ = t.anchor = m("");
      if (v(E, n, r), v(_, n, r), Xm(t.props) || s && s.pendingBranch) {
        Y(t);
        return;
      }
      k && (b(t, n, _), Pa(t, !0)), q();
    } else {
      t.el = e.el;
      const E = t.anchor = e.anchor, _ = Gn.get(e);
      if (_) {
        _.flags |= 8, Gn.delete(e), Y(t);
        return;
      }
      t.targetStart = e.targetStart;
      const M = t.target = e.target, C = t.targetAnchor = e.targetAnchor, H = xr(e.props), F = H ? n : M, Z = H ? E : C;
      if (o === "svg" || Qi(M) ? o = "svg" : (o === "mathml" || Zi(M)) && (o = "mathml"), h ? (p(
        e.dynamicChildren,
        h,
        F,
        a,
        s,
        o,
        l
      ), ui(e, t, !0)) : i || d(
        e,
        t,
        F,
        Z,
        a,
        s,
        o,
        l,
        !1
      ), k)
        H ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : bs(
          t,
          n,
          E,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const j = Pl(t.props, w);
        j && (t.target = j, bs(
          t,
          j,
          null,
          c,
          0
        ));
      } else H && bs(
        t,
        M,
        C,
        c,
        1
      );
      Pa(t, k);
    }
  },
  remove(e, t, n, { um: r, o: { remove: a } }, s) {
    const {
      shapeFlag: o,
      children: l,
      anchor: i,
      targetStart: c,
      targetAnchor: u,
      target: d,
      props: p
    } = e, v = xr(p), w = s || !v, m = Gn.get(e);
    if (m && (m.flags |= 8, Gn.delete(e)), d && (a(c), a(u)), s && a(i), !m && (v || d) && o & 16)
      for (let S = 0; S < l.length; S++) {
        const R = l[S];
        r(
          R,
          t,
          n,
          w,
          !!R.dynamicChildren
        );
      }
  },
  move: bs,
  hydrate: Qm
};
function bs(e, t, n, { o: { insert: r }, m: a }, s = 2) {
  s === 0 && (e.targetStart && r(e.targetStart, t, n), r(e.targetAnchor, t, n), n = e.targetAnchor);
  const { el: o, anchor: l, shapeFlag: i, children: c, props: u } = e, d = s === 2;
  if (d && r(o, t, n), !Gn.has(e) && (!d || xr(u)) && i & 16)
    for (let p = 0; p < c.length; p++)
      a(
        c[p],
        t,
        n,
        2
      );
  d && r(l, t, n);
}
function Qm(e, t, n, r, a, s, {
  o: { nextSibling: o, parentNode: l, querySelector: i, insert: c, createText: u }
}, d) {
  function p(S, R) {
    let k = R;
    for (; k; ) {
      if (k && k.nodeType === 8) {
        if (k.data === "teleport start anchor")
          t.targetStart = k;
        else if (k.data === "teleport anchor") {
          t.targetAnchor = k, S._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      k = o(k);
    }
  }
  function v(S, R) {
    R.anchor = d(
      o(S),
      R,
      l(S),
      n,
      r,
      a,
      s
    );
  }
  const w = t.target = Pl(
    t.props,
    i
  ), m = xr(t.props);
  if (w) {
    const S = w._lpa || w.firstChild;
    t.shapeFlag & 16 && (m ? (v(e, t), p(w, S), t.targetAnchor || Al(
      w,
      t,
      u,
      c,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === w ? e : null
    )) : (t.anchor = o(e), p(w, S), t.targetAnchor || Al(w, t, u, c), d(
      S && o(S),
      t,
      w,
      n,
      r,
      a,
      s
    ))), Pa(t, m);
  } else m && t.shapeFlag & 16 && (v(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const vd = Gm;
function Pa(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let r, a;
    for (t ? (r = e.el, a = e.anchor) : (r = e.targetStart, a = e.targetAnchor); r && r !== a; )
      r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
    n.ut();
  }
}
function Al(e, t, n, r, a = null) {
  const s = t.targetStart = n(""), o = t.targetAnchor = n("");
  return s[hd] = o, e && (r(s, e, a), r(o, e, a)), o;
}
const an = /* @__PURE__ */ Symbol("_leaveCb"), va = /* @__PURE__ */ Symbol("_enterCb");
function Zm() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return _t(() => {
    e.isMounted = !0;
  }), bo(() => {
    e.isUnmounting = !0;
  }), e;
}
const rn = [Function, Array], yd = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: rn,
  onEnter: rn,
  onAfterEnter: rn,
  onEnterCancelled: rn,
  // leave
  onBeforeLeave: rn,
  onLeave: rn,
  onAfterLeave: rn,
  onLeaveCancelled: rn,
  // appear
  onBeforeAppear: rn,
  onAppear: rn,
  onAfterAppear: rn,
  onAppearCancelled: rn
}, eh = {
  name: "BaseTransition",
  props: yd,
  setup(e, { slots: t }) {
    const n = os(), r = Zm();
    return () => {
      const a = t.default && wd(t.default(), !0), s = a && a.length ? gd(a) : (
        // Keep explicit default-slot conditionals on the same transition path
        // as regular v-if branches, which render a comment placeholder.
        n.subTree ? ae() : void 0
      );
      if (!s)
        return;
      const o = /* @__PURE__ */ Le(e), { mode: l } = o;
      if (r.isLeaving)
        return Uo(s);
      const i = Vs(s);
      if (!i)
        return Uo(s);
      const c = Ml(
        i,
        o,
        r,
        n
      );
      i.type !== Mt && Er(i, c);
      let u = n.subTree && Vs(n.subTree);
      if (u && u.type !== Mt && !Tr(u, i) && Wa(n.subTree)) {
        let d = Ml(
          u,
          o,
          r,
          n
        );
        if (Er(u, d), l === "out-in" && i.type !== Mt)
          return r.isLeaving = !0, d.afterLeave = () => {
            if (r.isLeaving = !1, !(n.job.flags & 8))
              if (n.effect.flags & 2) {
                const p = () => {
                  n.job.flags & 8 || n.update();
                };
                p.i = n, vo(p);
              } else
                n.update();
            delete d.afterLeave, u = void 0;
          }, Uo(s);
        l === "in-out" && i.type !== Mt ? d.delayLeave = (p, v, w) => {
          const m = bd(
            r,
            u
          );
          m[String(u.key)] = u, p[an] = () => {
            v(), p[an] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            w(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return s;
    };
  }
};
function gd(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Mt) {
        t = n;
        break;
      }
  }
  return t;
}
const th = eh;
function bd(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Ml(e, t, n, r) {
  const {
    appear: a,
    mode: s,
    persisted: o = !1,
    onBeforeEnter: l,
    onEnter: i,
    onAfterEnter: c,
    onEnterCancelled: u,
    onBeforeLeave: d,
    onLeave: p,
    onAfterLeave: v,
    onLeaveCancelled: w,
    onBeforeAppear: m,
    onAppear: S,
    onAfterAppear: R,
    onAppearCancelled: k
  } = t, h = String(e.key), b = bd(n, e), q = (_, M) => {
    _ && on(
      _,
      r,
      9,
      M
    );
  }, Y = (_, M) => {
    const C = M[1];
    q(_, M), Oe(_) ? _.every((H) => H.length <= 1) && C() : _.length <= 1 && C();
  }, E = {
    mode: s,
    persisted: o,
    beforeEnter(_) {
      let M = l;
      if (!n.isMounted)
        if (a)
          M = m || l;
        else
          return;
      _[an] && _[an](
        !0
        /* cancelled */
      );
      const C = b[h];
      if (C && Tr(e, C)) {
        let H = C.el[an];
        if (!H) {
          const F = Wa(C);
          H = F && F.el[an];
        }
        H && H();
      }
      q(M, [_]);
    },
    enter(_) {
      if (b[h] === e) return;
      let M = i, C = c, H = u;
      if (!n.isMounted)
        if (a)
          M = S || i, C = R || c, H = k || u;
        else
          return;
      let F = !1;
      _[va] = (j) => {
        F || (F = !0, j ? q(H, [_]) : q(C, [_]), E.delayedLeave && E.delayedLeave(), _[va] = void 0);
      };
      const Z = _[va].bind(null, !1);
      M ? Y(M, [_, Z]) : Z();
    },
    leave(_, M) {
      const C = String(e.key);
      if (_[va] && _[va](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return M();
      q(d, [_]);
      let H = !1;
      _[an] = (Z) => {
        H || (H = !0, M(), Z ? q(w, [_]) : q(v, [_]), _[an] = void 0, b[C] === e && delete b[C]);
      };
      const F = _[an].bind(null, !1);
      b[C] = e, p ? Y(p, [_, F]) : F();
    },
    clone(_) {
      const M = Ml(_, t, n, r);
      return M.afterLeave = () => {
        E.afterLeave && E.afterLeave();
      }, M.delayLeave = (C, H, F) => {
        E.delayLeave ? E.delayLeave(C, H, F) : F();
      }, M.delayedLeave = () => {
        E.delayedLeave && E.delayedLeave();
      }, M;
    }
  };
  return E;
}
function Uo(e) {
  if (go(e))
    return e = lr(e), e.children = null, e;
}
function Vs(e) {
  if (!go(e))
    return yo(e.type) && e.children ? gd(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && De(n.default))
      return n.default();
  }
}
function Er(e, t) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = t;
    const n = e.component.subTree;
    Er(
      yo(n.type) && Vs(n) || n,
      t
    );
  } else if (e.shapeFlag & 128) {
    const n = e.suspense;
    if (n) {
      const r = n.isHydrating ? n.pendingBranch : n.activeBranch;
      r && Er(r, t.clone(r));
    } else
      e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback);
  } else if (e.transition = t, e.type === Te && Oe(e.children)) {
    const n = Cd(e.children, !1);
    n && Er(n, t);
  }
}
function wd(e, t = !1, n) {
  let r = [], a = 0;
  for (let s = 0; s < e.length; s++) {
    let o = e[s];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : s);
    o.type === Te ? (o.patchFlag & 128 && a++, r = r.concat(
      wd(o.children, t, l)
    )) : (t || o.type !== Mt) && r.push(l != null ? lr(o, { key: l }) : o);
  }
  if (a > 1)
    for (let s = 0; s < r.length; s++)
      r[s].patchFlag = -2;
  return r;
}
function Wa(e) {
  if (e.component)
    return Wa(e.component.subTree);
  if (e.type === Te) {
    const t = Oe(e.children) && Cd(e.children, !1);
    return t ? Wa(t) : void 0;
  }
  if (e.type !== Mt)
    return e;
}
// @__NO_SIDE_EFFECTS__
function Dt(e, t) {
  return De(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ct({ name: e.name }, t, { setup: e })
  ) : e;
}
function _d(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function eu(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Bs = /* @__PURE__ */ new WeakMap();
function $a(e, t, n, r, a = !1) {
  if (Oe(e)) {
    e.forEach(
      (m, S) => $a(
        m,
        t && (Oe(t) ? t[S] : t),
        n,
        r,
        a
      )
    );
    return;
  }
  if (Qr(r) && !a) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && $a(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? To(r.component) : r.el, o = a ? null : s, { i: l, r: i } = e, c = t && t.r, u = l.refs === Ve ? l.refs = {} : l.refs, d = l.setupState, p = /* @__PURE__ */ Le(d), v = d === Ve ? $c : (m) => eu(u, m) ? !1 : Be(p, m), w = (m, S) => !(S && eu(u, S));
  if (c != null && c !== i) {
    if (tu(t), Ge(c))
      u[c] = null, v(c) && (d[c] = null);
    else if (/* @__PURE__ */ nt(c)) {
      const m = t;
      w(c, m.k) && (c.value = null), m.k && (u[m.k] = null);
    }
  }
  if (De(i))
    as(i, l, 12, [o, u]);
  else {
    const m = Ge(i), S = /* @__PURE__ */ nt(i);
    if (m || S) {
      const R = () => {
        if (e.f) {
          const k = m ? v(i) ? d[i] : u[i] : w() || !e.k ? i.value : u[e.k];
          if (a)
            Oe(k) && Gl(k, s);
          else if (Oe(k))
            k.includes(s) || k.push(s);
          else if (m)
            u[i] = [s], v(i) && (d[i] = u[i]);
          else {
            const h = [s];
            w(i, e.k) && (i.value = h), e.k && (u[e.k] = h);
          }
        } else m ? (u[i] = o, v(i) && (d[i] = o)) : S && (w(i, e.k) && (i.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const k = () => {
          R(), Bs.delete(e);
        };
        k.id = -1, Bs.set(e, k), Ct(k, n);
      } else
        tu(e), R();
    }
  }
}
function tu(e) {
  const t = Bs.get(e);
  t && (t.flags |= 8, Bs.delete(e));
}
co().requestIdleCallback;
co().cancelIdleCallback;
const Qr = (e) => !!e.type.__asyncLoader, go = (e) => e.type.__isKeepAlive;
function nh(e, t) {
  xd(e, "a", t);
}
function rh(e, t) {
  xd(e, "da", t);
}
function xd(e, t, n = It) {
  const r = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (za(t, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      go(a.parent.vnode) && ah(r, t, n, a), a = a.parent;
  }
}
function ah(e, t, n, r) {
  const a = za(
    t,
    e,
    r,
    !0
    /* prepend */
  ), s = za(
    "um",
    () => Gl(r[t], a),
    n
  );
  s.flags = 16;
}
function za(e, t, n = It, r = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...o) => {
      mn();
      const l = ls(n), i = on(t, n, e, o);
      return l(), An(), i;
    });
    return r ? a.unshift(s) : a.push(s), s;
  }
}
const Wn = (e) => (t, n = It) => {
  (!Xa || e === "sp") && za(e, (...r) => t(...r), n);
}, sh = Wn("bm"), _t = Wn("m"), Td = Wn(
  "bu"
), oh = Wn("u"), bo = Wn(
  "bum"
), ss = Wn("um"), lh = Wn(
  "sp"
), ih = Wn("rtg"), uh = Wn("rtc");
function ch(e, t = It) {
  za("ec", e, t);
}
const Sd = "components";
function dh(e, t) {
  return Od(Sd, e, !0, t) || e;
}
const kd = /* @__PURE__ */ Symbol.for("v-ndc");
function wo(e) {
  return Ge(e) ? Od(Sd, e, !1) || e : e || kd;
}
function Od(e, t, n = !0, r = !1) {
  const a = At || It;
  if (a) {
    const s = a.type;
    {
      const l = Wh(
        s,
        !1
      );
      if (l && (l === t || l === Ft(t) || l === uo(Ft(t))))
        return s;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      nu(a[e] || s[e], t) || // global registration
      nu(a.appContext[e], t)
    );
    return !o && r ? s : o;
  }
}
function nu(e, t) {
  return e && (e[t] || e[Ft(t)] || e[uo(Ft(t))]);
}
function Ye(e, t, n, r) {
  let a;
  const s = n, o = Oe(e);
  if (o || Ge(e)) {
    const l = o && /* @__PURE__ */ On(e);
    let i = !1, c = !1;
    l && (i = !/* @__PURE__ */ en(e), c = /* @__PURE__ */ Mn(e), e = po(e)), a = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      a[u] = t(
        i ? c ? or(sn(e[u])) : sn(e[u]) : e[u],
        u,
        void 0,
        s
      );
  } else if (typeof e == "number")
    if (!Number.isInteger(e) || e < 0)
      a = [];
    else {
      a = new Array(e);
      for (let l = 0; l < e; l++)
        a[l] = t(l + 1, l, void 0, s);
    }
  else if (He(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (l, i) => t(l, i, void 0, s)
      );
    else {
      const l = Object.keys(e);
      a = new Array(l.length);
      for (let i = 0, c = l.length; i < c; i++) {
        const u = l[i];
        a[i] = t(e[u], u, i, s);
      }
    }
  else
    a = [];
  return a;
}
function Lt(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (Oe(r))
      for (let a = 0; a < r.length; a++)
        e[r[a].name] = r[a].fn;
    else r && (e[r.name] = r.key ? (...a) => {
      const s = r.fn(...a);
      return s && (s.key = r.key), s;
    } : r.fn);
  }
  return e;
}
function we(e, t, n, r, a, s) {
  if (n == null && (n = {}), At.ce || At.parent && Qr(At.parent) && At.parent.ce) {
    const c = n, u = Object.keys(c).length > 0;
    return t !== "default" && (c.name = t), U(), Ee(
      Te,
      null,
      [Ke("slot", c, r)],
      u ? -2 : 64
    );
  }
  let o = e[t];
  o && o._c && (o._d = !1);
  const l = Bn.length;
  U();
  let i;
  try {
    const c = o && Pd(o(n)), u = n.key || s || // slot content array of a dynamic conditional slot may have a branch
    // key attached in the `createSlots` helper, respect that
    c && c.key;
    i = Ee(
      Te,
      {
        key: (u && !tn(u) ? u : `_${t}`) + // #7256 force differentiate fallback content from actual content
        (!c && r ? "_fb" : "")
      },
      c || (r ? r() : []),
      c && e._ === 1 ? 64 : -2
    );
  } catch (c) {
    for (let u = Bn.length; u > l; u--) ci();
    throw c;
  } finally {
    o && o._c && (o._d = !0);
  }
  return i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]), i;
}
function Pd(e) {
  return e.some((t) => Zr(t) ? !(t.type === Mt || t.type === Te && !Pd(t.children)) : !0) ? e : null;
}
const El = (e) => e ? Kd(e) ? To(e) : El(e.parent) : null, Ia = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ct(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => El(e.parent),
    $root: (e) => El(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Md(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      vo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Et.bind(e.proxy)),
    $watch: (e) => Jm.bind(e)
  })
), Yo = (e, t) => e !== Ve && !e.__isScriptSetup && Be(e, t), fh = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: a, props: s, accessCache: o, type: l, appContext: i } = e;
    if (t[0] !== "$") {
      const p = o[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return r[t];
          case 2:
            return a[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Yo(r, t))
          return o[t] = 1, r[t];
        if (a !== Ve && Be(a, t))
          return o[t] = 2, a[t];
        if (Be(s, t))
          return o[t] = 3, s[t];
        if (n !== Ve && Be(n, t))
          return o[t] = 4, n[t];
        Dl && (o[t] = 0);
      }
    }
    const c = Ia[t];
    let u, d;
    if (c)
      return t === "$attrs" && $t(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Ve && Be(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      d = i.config.globalProperties, Be(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: a, ctx: s } = e;
    return Yo(a, t) ? (a[t] = n, !0) : r !== Ve && Be(r, t) ? (r[t] = n, !0) : Be(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: a, props: s, type: o }
  }, l) {
    let i;
    return !!(n[l] || e !== Ve && l[0] !== "$" && Be(e, l) || Yo(t, l) || Be(s, l) || Be(r, l) || Be(Ia, l) || Be(a.config.globalProperties, l) || (i = o.__cssModules) && i[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Be(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Br() {
  return ph().slots;
}
function ph(e) {
  const t = os();
  return t.setupContext || (t.setupContext = Gd(t));
}
function js(e) {
  return Oe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Hs(e, t) {
  return !e || !t ? e || t : Oe(e) && Oe(t) ? e.concat(t) : ct({}, js(e), js(t));
}
let Dl = !0;
function mh(e) {
  const t = Md(e), n = e.proxy, r = e.ctx;
  Dl = !1, t.beforeCreate && ru(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: s,
    methods: o,
    watch: l,
    provide: i,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: p,
    beforeUpdate: v,
    updated: w,
    activated: m,
    deactivated: S,
    beforeDestroy: R,
    beforeUnmount: k,
    destroyed: h,
    unmounted: b,
    render: q,
    renderTracked: Y,
    renderTriggered: E,
    errorCaptured: _,
    serverPrefetch: M,
    // public API
    expose: C,
    inheritAttrs: H,
    // assets
    components: F,
    directives: Z,
    filters: j
  } = t;
  if (c && hh(c, r, null), o)
    for (const y in o) {
      const X = o[y];
      De(X) && (r[y] = X.bind(n));
    }
  if (a) {
    const y = a.call(n, n);
    He(y) && (e.data = /* @__PURE__ */ qn(y));
  }
  if (Dl = !0, s)
    for (const y in s) {
      const X = s[y], ie = De(X) ? X.bind(n, n) : De(X.get) ? X.get.bind(n, n) : kn, ve = !De(X) && De(X.set) ? X.set.bind(n) : kn, _e = oe({
        get: ie,
        set: ve
      });
      Object.defineProperty(r, y, {
        enumerable: !0,
        configurable: !0,
        get: () => _e.value,
        set: (V) => _e.value = V
      });
    }
  if (l)
    for (const y in l)
      Ad(l[y], r, n, y);
  if (i) {
    const y = De(i) ? i.call(n) : i;
    Reflect.ownKeys(y).forEach((X) => {
      Ym(X, y[X]);
    });
  }
  u && ru(u, e, "c");
  function L(y, X) {
    Oe(X) ? X.forEach((ie) => y(ie.bind(n))) : X && y(X.bind(n));
  }
  if (L(sh, d), L(_t, p), L(Td, v), L(oh, w), L(nh, m), L(rh, S), L(ch, _), L(uh, Y), L(ih, E), L(bo, k), L(ss, b), L(lh, M), Oe(C))
    if (C.length) {
      const y = e.exposed || (e.exposed = {});
      C.forEach((X) => {
        Object.defineProperty(y, X, {
          get: () => n[X],
          set: (ie) => n[X] = ie,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  q && e.render === kn && (e.render = q), H != null && (e.inheritAttrs = H), F && (e.components = F), Z && (e.directives = Z), M && _d(e);
}
function hh(e, t, n = kn) {
  Oe(e) && (e = Rl(e));
  for (const r in e) {
    const a = e[r];
    let s;
    He(a) ? "default" in a ? s = Na(
      a.from || r,
      a.default,
      !0
    ) : s = Na(a.from || r) : s = Na(a), /* @__PURE__ */ nt(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (o) => s.value = o
    }) : t[r] = s;
  }
}
function ru(e, t, n) {
  on(
    Oe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ad(e, t, n, r) {
  let a = r.includes(".") ? md(n, r) : () => n[r];
  if (Ge(e)) {
    const s = t[e];
    De(s) && ze(a, s);
  } else if (De(e))
    ze(a, e.bind(n));
  else if (He(e))
    if (Oe(e))
      e.forEach((s) => Ad(s, t, n, r));
    else {
      const s = De(e.handler) ? e.handler.bind(n) : t[e.handler];
      De(s) && ze(a, s, e);
    }
}
function Md(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: a,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = s.get(t);
  let i;
  return l ? i = l : !a.length && !n && !r ? i = t : (i = {}, a.length && a.forEach(
    (c) => Us(i, c, o, !0)
  ), Us(i, t, o)), He(t) && s.set(t, i), i;
}
function Us(e, t, n, r = !1) {
  const { mixins: a, extends: s } = t;
  s && Us(e, s, n, !0), a && a.forEach(
    (o) => Us(e, o, n, !0)
  );
  for (const o in t)
    if (!(r && o === "expose")) {
      const l = vh[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const vh = {
  data: au,
  props: su,
  emits: su,
  // objects
  methods: Aa,
  computed: Aa,
  // lifecycle
  beforeCreate: Bt,
  created: Bt,
  beforeMount: Bt,
  mounted: Bt,
  beforeUpdate: Bt,
  updated: Bt,
  beforeDestroy: Bt,
  beforeUnmount: Bt,
  destroyed: Bt,
  unmounted: Bt,
  activated: Bt,
  deactivated: Bt,
  errorCaptured: Bt,
  serverPrefetch: Bt,
  // assets
  components: Aa,
  directives: Aa,
  // watch
  watch: gh,
  // provide / inject
  provide: au,
  inject: yh
};
function au(e, t) {
  return t ? e ? function() {
    return ct(
      De(e) ? e.call(this, this) : e,
      De(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function yh(e, t) {
  return Aa(Rl(e), Rl(t));
}
function Rl(e) {
  if (Oe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Bt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Aa(e, t) {
  return e ? ct(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function su(e, t) {
  return e ? Oe(e) && Oe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ct(
    /* @__PURE__ */ Object.create(null),
    js(e),
    js(t ?? {})
  ) : t;
}
function gh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ct(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Bt(e[r], t[r]);
  return n;
}
function Ed() {
  return {
    app: null,
    config: {
      isNativeTag: $c,
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
let bh = 0;
function wh(e, t) {
  return function(r, a = null) {
    De(r) || (r = ct({}, r)), a != null && !He(a) && (a = null);
    const s = Ed(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let i = !1;
    const c = s.app = {
      _uid: bh++,
      _component: r,
      _props: a,
      _container: null,
      _context: s,
      _instance: null,
      version: Kh,
      get config() {
        return s.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return o.has(u) || (u && De(u.install) ? (o.add(u), u.install(c, ...d)) : De(u) && (o.add(u), u(c, ...d))), c;
      },
      mixin(u) {
        return s.mixins.includes(u) || s.mixins.push(u), c;
      },
      component(u, d) {
        return d ? (s.components[u] = d, c) : s.components[u];
      },
      directive(u, d) {
        return d ? (s.directives[u] = d, c) : s.directives[u];
      },
      mount(u, d, p) {
        if (!i) {
          const v = c._ceVNode || Ke(r, a);
          return v.appContext = s, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(v, u, p), i = !0, c._container = u, u.__vue_app__ = c, To(v.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        i && (on(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return s.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = Dr;
        Dr = c;
        try {
          return u();
        } finally {
          Dr = d;
        }
      }
    };
    return c;
  };
}
let Dr = null;
function Ys(e, t, n = Ve) {
  const r = os(), a = Ft(t), s = Yn(t), o = Dd(e, a), l = Rm((i, c) => {
    let u, d = Ve, p;
    return Km(() => {
      const v = e[a];
      Ot(u, v) && (u = v, c());
    }), {
      get() {
        return i(), n.get ? n.get(u) : u;
      },
      set(v) {
        const w = n.set ? n.set(v) : v;
        if (!Ot(w, u) && !(d !== Ve && Ot(v, d)))
          return;
        const m = r.vnode.props, S = !!(m && // check if parent has passed v-model
        (t in m || a in m || s in m) && (`onUpdate:${t}` in m || `onUpdate:${a}` in m || `onUpdate:${s}` in m));
        S || (u = v, c()), r.emit(`update:${t}`, w), Ot(v, d) && (Ot(v, w) && !Ot(w, p) || // #13524: browsers differ in when they flush microtasks between
        // event listeners. If a v-model listener emits an intermediate value
        // and a following listener restores the model to its previous prop
        // value before parent updates are flushed, the parent render can be
        // deduped as having no prop change. Force a local update so DOM state
        // such as an input's value is synchronized back to the current model.
        S && d !== Ve && !Ot(w, u)) && c(), d = v, p = w;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let i = 0;
    return {
      next() {
        return i < 2 ? { value: i++ ? o || Ve : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const Dd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ft(t)}Modifiers`] || e[`${Yn(t)}Modifiers`];
function _h(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ve;
  let a = n;
  const s = t.startsWith("update:"), o = s && Dd(r, t.slice(7));
  o && (o.trim && (a = n.map((u) => Ge(u) ? u.trim() : u)), o.number && (a = a.map(rs)));
  let l, i = r[l = Fo(t)] || // also try camelCase event handler (#2249)
  r[l = Fo(Ft(t))];
  !i && s && (i = r[l = Fo(Yn(t))]), i && on(
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
    e.emitted[l] = !0, on(
      c,
      e,
      6,
      a
    );
  }
}
const xh = /* @__PURE__ */ new WeakMap();
function Rd(e, t, n = !1) {
  const r = n ? xh : t.emitsCache, a = r.get(e);
  if (a !== void 0)
    return a;
  const s = e.emits;
  let o = {}, l = !1;
  if (!De(e)) {
    const i = (c) => {
      const u = Rd(c, t, !0);
      u && (l = !0, ct(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(i), e.extends && i(e.extends), e.mixins && e.mixins.forEach(i);
  }
  return !s && !l ? (He(e) && r.set(e, null), null) : (Oe(s) ? s.forEach((i) => o[i] = null) : ct(o, s), He(e) && r.set(e, o), o);
}
function _o(e, t) {
  return !e || !so(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), Be(e, t[0].toLowerCase() + t.slice(1)) || Be(e, Yn(t)) || Be(e, t));
}
function ou(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: a,
    propsOptions: [s],
    slots: o,
    attrs: l,
    emit: i,
    render: c,
    renderCache: u,
    props: d,
    data: p,
    setupState: v,
    ctx: w,
    inheritAttrs: m
  } = e, S = Ls(e);
  let R, k;
  try {
    if (n.shapeFlag & 4) {
      const b = a || r, q = b;
      R = _n(
        c.call(
          q,
          b,
          u,
          d,
          v,
          p,
          w
        )
      ), k = l;
    } else {
      const b = t;
      R = _n(
        b.length > 1 ? b(
          d,
          { attrs: l, slots: o, emit: i }
        ) : b(
          d,
          null
        )
      ), k = t.props ? l : Th(l);
    }
  } catch (b) {
    Bn.length = 0, ho(b, e, 1), R = Ke(Mt);
  }
  let h = R;
  if (k && m !== !1) {
    const b = Object.keys(k), { shapeFlag: q } = h;
    b.length && q & 7 && (s && b.some(oo) && (k = Sh(
      k,
      s
    )), h = lr(h, k, !1, !0));
  }
  if (n.dirs && (h = lr(h, null, !1, !0), h.dirs = h.dirs ? h.dirs.concat(n.dirs) : n.dirs), n.transition) {
    const b = yo(h.type) && Vs(h) || h;
    Er(b, n.transition);
  }
  return R = h, Ls(S), R;
}
function Cd(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    if (Zr(a)) {
      if (a.type !== Mt || a.children === "v-if") {
        if (n)
          return;
        n = a;
      }
    } else
      return;
  }
  return n;
}
const Th = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || so(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Sh = (e, t) => {
  const n = {};
  for (const r in e)
    (!oo(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function kh(e, t, n) {
  const { props: r, children: a, component: s } = e, { props: o, children: l, patchFlag: i } = t, c = s.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && i >= 0) {
    if (i & 1024)
      return !0;
    if (i & 16)
      return r ? lu(r, o, c) : !!o;
    if (i & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const p = u[d];
        if (Nd(o, r, p) && !_o(c, p))
          return !0;
      }
    }
  } else
    return (a || l) && (!l || !l.$stable) ? !0 : r === o ? !1 : r ? o ? lu(r, o, c) : !0 : !!o;
  return !1;
}
function lu(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if (!Be(e, s) || Nd(t, e, s) && !_o(n, s))
      return !0;
  }
  return !1;
}
function Nd(e, t, n) {
  const r = e[n], a = t[n];
  return n === "style" && He(r) && He(a) ? !sr(r, a) : r !== a;
}
function Oh({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = r, e = a), a === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const $d = {}, Id = () => Object.create($d), Fd = (e) => Object.getPrototypeOf(e) === $d;
function Ph(e, t, n, r = !1) {
  const a = {}, s = Id();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ld(e, t, a, s);
  for (const o in e.propsOptions[0])
    o in a || (a[o] = void 0);
  n ? e.props = r ? a : /* @__PURE__ */ Pm(a) : e.type.props ? e.props = a : e.props = s, e.attrs = s;
}
function Ah(e, t, n, r) {
  const {
    props: a,
    attrs: s,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ Le(a), [i] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let p = u[d];
        if (_o(e.emitsOptions, p))
          continue;
        const v = t[p];
        if (i)
          if (Be(s, p))
            v !== s[p] && (s[p] = v, c = !0);
          else {
            const w = Ft(p);
            a[w] = Cl(
              i,
              l,
              w,
              v,
              e,
              !1
            );
          }
        else
          v !== s[p] && (s[p] = v, c = !0);
      }
    }
  } else {
    Ld(e, t, a, s) && (c = !0);
    let u;
    for (const d in l)
      (!t || // for camelCase
      !Be(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Yn(d)) === d || !Be(t, u))) && (i ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (a[d] = Cl(
        i,
        l,
        d,
        void 0,
        e,
        !0
      )) : delete a[d]);
    if (s !== l)
      for (const d in s)
        (!t || !Be(t, d)) && (delete s[d], c = !0);
  }
  c && In(e.attrs, "set", "");
}
function Ld(e, t, n, r) {
  const [a, s] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let i in t) {
      if (Da(i))
        continue;
      const c = t[i];
      let u;
      a && Be(a, u = Ft(i)) ? !s || !s.includes(u) ? n[u] = c : (l || (l = {}))[u] = c : _o(e.emitsOptions, i) || (!(i in r) || c !== r[i]) && (r[i] = c, o = !0);
    }
  if (s) {
    const i = /* @__PURE__ */ Le(n), c = l || Ve;
    for (let u = 0; u < s.length; u++) {
      const d = s[u];
      n[d] = Cl(
        a,
        i,
        d,
        c[d],
        e,
        !Be(c, d)
      );
    }
  }
  return o;
}
function Cl(e, t, n, r, a, s) {
  const o = e[n];
  if (o != null) {
    const l = Be(o, "default");
    if (l && r === void 0) {
      const i = o.default;
      if (o.type !== Function && !o.skipFactory && De(i)) {
        const { propsDefaults: c } = a;
        if (n in c)
          r = c[n];
        else {
          const u = ls(a);
          r = c[n] = i.call(
            null,
            t
          ), u();
        }
      } else
        r = i;
      a.ce && a.ce._setProp(n, r);
    }
    o[
      0
      /* shouldCast */
    ] && (s && !l ? r = !1 : o[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Yn(n)) && (r = !0));
  }
  return r;
}
const Mh = /* @__PURE__ */ new WeakMap();
function Vd(e, t, n = !1) {
  const r = n ? Mh : t.propsCache, a = r.get(e);
  if (a)
    return a;
  const s = e.props, o = {}, l = [];
  let i = !1;
  if (!De(e)) {
    const u = (d) => {
      i = !0;
      const [p, v] = Vd(d, t, !0);
      ct(o, p), v && l.push(...v);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!s && !i)
    return He(e) && r.set(e, kr), kr;
  if (Oe(s))
    for (let u = 0; u < s.length; u++) {
      const d = Ft(s[u]);
      iu(d) && (o[d] = Ve);
    }
  else if (s)
    for (const u in s) {
      const d = Ft(u);
      if (iu(d)) {
        const p = s[u], v = o[d] = Oe(p) || De(p) ? { type: p } : ct({}, p), w = v.type;
        let m = !1, S = !0;
        if (Oe(w))
          for (let R = 0; R < w.length; ++R) {
            const k = w[R], h = De(k) && k.name;
            if (h === "Boolean") {
              m = !0;
              break;
            } else h === "String" && (S = !1);
          }
        else
          m = De(w) && w.name === "Boolean";
        v[
          0
          /* shouldCast */
        ] = m, v[
          1
          /* shouldCastTrue */
        ] = S, (m || Be(v, "default")) && l.push(d);
      }
    }
  const c = [o, l];
  return He(e) && r.set(e, c), c;
}
function iu(e) {
  return e[0] !== "$" && !Da(e);
}
const li = (e) => e === "_" || e === "_ctx" || e === "$stable", ii = (e) => Oe(e) ? e.map(_n) : [_n(e)], Eh = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ne((...a) => ii(t(...a)), n);
  return r._c = !1, r;
}, Bd = (e, t, n) => {
  const r = e._ctx;
  for (const a in e) {
    if (li(a)) continue;
    const s = e[a];
    if (De(s))
      t[a] = Eh(a, s, r);
    else if (s != null) {
      const o = ii(s);
      t[a] = () => o;
    }
  }
}, jd = (e, t) => {
  const n = ii(t);
  e.slots.default = () => n;
}, Hd = (e, t, n) => {
  for (const r in t)
    (n || !li(r)) && (e[r] = t[r]);
}, Dh = (e, t, n) => {
  const r = e.slots = Id();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Hd(r, t, n), n && Vc(r, "_", a, !0)) : Bd(t, r);
  } else t && jd(e, t);
}, Rh = (e, t, n) => {
  const { vnode: r, slots: a } = e;
  let s = !0, o = Ve;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? s = !1 : Hd(a, t, n) : (s = !t.$stable, Bd(t, a)), o = t;
  } else t && (jd(e, t), o = { default: 1 });
  if (s)
    for (const l in a)
      !li(l) && o[l] == null && delete a[l];
}, Ct = Lh;
function Ch(e) {
  return Nh(e);
}
function Nh(e, t) {
  const n = co();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: s,
    createElement: o,
    createText: l,
    createComment: i,
    setText: c,
    setElementText: u,
    parentNode: d,
    nextSibling: p,
    setScopeId: v = kn,
    insertStaticContent: w
  } = e, m = (g, f, O, B = null, $ = null, N = null, re = void 0, A = null, W = !!f.dynamicChildren) => {
    if (g === f)
      return;
    g && !Tr(g, f) && (B = I(g), V(g, $, N, !0), g = null), f.patchFlag === -2 && (W = !1, f.dynamicChildren = null), f.dynamicChildren && g && g.dynamicChildren && g.dynamicChildren.hasOnce && (f.dynamicChildren === kr && (f.dynamicChildren = []), f.dynamicChildren.hasOnce = !0);
    const { type: z, ref: ue, shapeFlag: de } = f;
    switch (z) {
      case xo:
        S(g, f, O, B);
        break;
      case Mt:
        R(g, f, O, B);
        break;
      case Wo:
        g == null && k(f, O, B, re);
        break;
      case Te:
        F(
          g,
          f,
          O,
          B,
          $,
          N,
          re,
          A,
          W
        );
        break;
      default:
        de & 1 ? q(
          g,
          f,
          O,
          B,
          $,
          N,
          re,
          A,
          W
        ) : de & 6 ? Z(
          g,
          f,
          O,
          B,
          $,
          N,
          re,
          A,
          W
        ) : (de & 64 || de & 128) && z.process(
          g,
          f,
          O,
          B,
          $,
          N,
          re,
          A,
          W,
          Pe
        );
    }
    ue != null && $ ? $a(ue, g && g.ref, N, f || g, !f) : ue == null && g && g.ref != null && $a(g.ref, null, N, g, !0);
  }, S = (g, f, O, B) => {
    if (g == null)
      r(
        f.el = l(f.children),
        O,
        B
      );
    else {
      const $ = f.el = g.el;
      f.children !== g.children && c($, f.children);
    }
  }, R = (g, f, O, B) => {
    g == null ? r(
      f.el = i(f.children || ""),
      O,
      B
    ) : f.el = g.el;
  }, k = (g, f, O, B) => {
    [g.el, g.anchor] = w(
      g.children,
      f,
      O,
      B,
      g.el,
      g.anchor
    );
  }, h = ({ el: g, anchor: f }, O, B) => {
    let $;
    for (; g && g !== f; )
      $ = p(g), r(g, O, B), g = $;
    r(f, O, B);
  }, b = ({ el: g, anchor: f }) => {
    let O;
    for (; g && g !== f; )
      O = p(g), a(g), g = O;
    a(f);
  }, q = (g, f, O, B, $, N, re, A, W) => {
    if (f.type === "svg" ? re = "svg" : f.type === "math" && (re = "mathml"), g == null)
      Y(
        f,
        O,
        B,
        $,
        N,
        re,
        A,
        W
      );
    else {
      const z = g.el && g.el._isVueCE ? g.el : null;
      try {
        z && z._beginPatch(), M(
          g,
          f,
          $,
          N,
          re,
          A,
          W
        );
      } finally {
        z && z._endPatch();
      }
    }
  }, Y = (g, f, O, B, $, N, re, A) => {
    let W, z;
    const { props: ue, shapeFlag: de, transition: ne, dirs: ce } = g;
    if (W = g.el = o(
      g.type,
      N,
      ue && ue.is,
      ue
    ), de & 8 ? u(W, g.children) : de & 16 && _(
      g.children,
      W,
      null,
      B,
      $,
      qo(g, N),
      re,
      A
    ), ce && hr(g, null, B, "created"), E(W, g, g.scopeId, re, B), ue) {
      for (const Ce in ue)
        Ce !== "value" && !Da(Ce) && s(W, Ce, null, ue[Ce], N, B);
      "value" in ue && s(W, "value", null, ue.value, N), (z = ue.onVnodeBeforeMount) && gn(z, B, g);
    }
    ce && hr(g, null, B, "beforeMount");
    const xe = $h($, ne);
    xe ? ne.beforeEnter(W) : ne && !ne.persisted && (W[Fh] = !0), r(W, f, O), ((z = ue && ue.onVnodeMounted) || xe || ce) && Ct(() => {
      try {
        z && gn(z, B, g), xe && ne.enter(W), ce && hr(g, null, B, "mounted");
      } finally {
      }
    }, $);
  }, E = (g, f, O, B, $) => {
    if (O && v(g, O), B)
      for (let N = 0; N < B.length; N++)
        v(g, B[N]);
    if ($) {
      let N = $.subTree;
      if (f === N || Yd(N.type) && (N.ssContent === f || N.ssFallback === f)) {
        const re = $.vnode;
        E(
          g,
          re,
          re.scopeId,
          re.slotScopeIds,
          $.parent
        );
      }
    }
  }, _ = (g, f, O, B, $, N, re, A, W = 0) => {
    for (let z = W; z < g.length; z++) {
      const ue = g[z] = A ? Nn(g[z]) : _n(g[z]);
      m(
        null,
        ue,
        f,
        O,
        B,
        $,
        N,
        re,
        A
      );
    }
  }, M = (g, f, O, B, $, N, re) => {
    const A = f.el = g.el;
    let { patchFlag: W, dynamicChildren: z, dirs: ue } = f;
    W |= g.patchFlag & 16;
    const de = g.props || Ve, ne = f.props || Ve;
    let ce;
    if (O && vr(O, !1), (ce = ne.onVnodeBeforeUpdate) && gn(ce, O, f, g), ue && hr(f, g, O, "beforeUpdate"), O && vr(O, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    z && (!g.dynamicChildren || g.dynamicChildren.length !== z.length) && (W = 0, re = !1, z = null), (de.innerHTML && ne.innerHTML == null || de.textContent && ne.textContent == null) && u(A, ""), z ? C(
      g.dynamicChildren,
      z,
      A,
      O,
      B,
      qo(f, $),
      N
    ) : re || X(
      g,
      f,
      A,
      null,
      O,
      B,
      qo(f, $),
      N,
      !1
    ), W > 0) {
      if (W & 16)
        H(A, de, ne, O, $);
      else if (W & 2 && de.class !== ne.class && s(A, "class", null, ne.class, $), W & 4 && s(A, "style", de.style, ne.style, $), W & 8) {
        const xe = f.dynamicProps;
        for (let Ce = 0; Ce < xe.length; Ce++) {
          const Ae = xe[Ce], qe = de[Ae], at = ne[Ae];
          (at !== qe || Ae === "value") && s(A, Ae, qe, at, $, O);
        }
      }
      W & 1 && g.children !== f.children && u(A, f.children);
    } else !re && z == null && H(A, de, ne, O, $);
    ((ce = ne.onVnodeUpdated) || ue) && Ct(() => {
      ce && gn(ce, O, f, g), ue && hr(f, g, O, "updated");
    }, B);
  }, C = (g, f, O, B, $, N, re) => {
    for (let A = 0; A < f.length; A++) {
      const W = g[A], z = f[A], ue = W.el || Fa(W), de = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ue && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (W.type === Te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Tr(W, z) || // - In the case of a component, it could contain anything.
        W.shapeFlag & 198) ? d(ue) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          O
        )
      );
      m(
        W,
        z,
        de,
        null,
        B,
        $,
        N,
        re,
        !0
      );
    }
  }, H = (g, f, O, B, $) => {
    if (f !== O) {
      if (f !== Ve)
        for (const N in f)
          !Da(N) && !(N in O) && s(
            g,
            N,
            f[N],
            null,
            $,
            B
          );
      for (const N in O) {
        if (Da(N)) continue;
        const re = O[N], A = f[N];
        re !== A && N !== "value" && s(g, N, A, re, $, B);
      }
      "value" in O && s(g, "value", f.value, O.value, $);
    }
  }, F = (g, f, O, B, $, N, re, A, W) => {
    const z = f.el = g ? g.el : l(""), ue = f.anchor = g ? g.anchor : l("");
    let { patchFlag: de, dynamicChildren: ne, slotScopeIds: ce } = f;
    ce && (A = A ? A.concat(ce) : ce), g == null ? (r(z, O, B), r(ue, O, B), _(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      O,
      ue,
      $,
      N,
      re,
      A,
      W
    )) : de > 0 && de & 64 && ne && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren && g.dynamicChildren.length === ne.length ? (C(
      g.dynamicChildren,
      ne,
      O,
      $,
      N,
      re,
      A
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || $ && f === $.subTree) && ui(
      g,
      f,
      !0
      /* shallow */
    )) : X(
      g,
      f,
      O,
      ue,
      $,
      N,
      re,
      A,
      W
    );
  }, Z = (g, f, O, B, $, N, re, A, W) => {
    f.slotScopeIds = A, g == null ? f.shapeFlag & 512 ? $.ctx.activate(
      f,
      O,
      B,
      re,
      W
    ) : j(
      f,
      O,
      B,
      $,
      N,
      re,
      W
    ) : T(g, f, W);
  }, j = (g, f, O, B, $, N, re) => {
    const A = g.component = Hh(
      g,
      B,
      $
    );
    if (go(g) && (A.ctx.renderer = Pe), Uh(A, !1, re), A.asyncDep) {
      if ($ && $.registerDep(
        A,
        L,
        re,
        N
      ), !g.el) {
        const W = A.subTree = Ke(Mt);
        R(null, W, f, O), g.placeholder = W.el;
      }
    } else
      L(
        A,
        g,
        f,
        O,
        $,
        N,
        re
      );
  }, T = (g, f, O) => {
    const B = f.component = g.component;
    if (kh(g, f, O))
      if (B.asyncDep && !B.asyncResolved) {
        f.el = g.el, f.placeholder = g.placeholder, y(B, f, O);
        return;
      } else
        B.next = f, B.update();
    else
      f.el = g.el, f.placeholder = g.placeholder, B.vnode = f;
  }, L = (g, f, O, B, $, N, re) => {
    const A = () => {
      if (g.isMounted) {
        let { next: de, bu: ne, u: ce, parent: xe, vnode: Ce } = g;
        {
          const qt = Ud(g);
          if (qt) {
            de && (de.el = Ce.el, y(g, de, re)), qt.asyncDep.then(() => {
              const Xt = () => {
                g.job.flags & 8 || ($ && $.pendingBranch ? Ct(Xt, $) : z());
              };
              Xt.flags = 48, Ct(Xt, $);
            });
            return;
          }
        }
        let Ae = de, qe;
        vr(g, !1), de ? (de.el = Ce.el, y(g, de, re)) : de = Ce, ne && Ps(ne), (qe = de.props && de.props.onVnodeBeforeUpdate) && gn(qe, xe, de, Ce), vr(g, !0);
        const at = ou(g), it = g.subTree;
        g.subTree = at, m(
          it,
          at,
          // parent may have changed if it's in a teleport. a root that is a
          // pending async component only has its placeholder comment
          d(
            it.el || Fa(it)
          ),
          // anchor may have changed if it's in a fragment
          I(it),
          g,
          $,
          N
        ), de.el = at.el, Ae === null && Oh(g, at.el), ce && Ct(ce, $), (qe = de.props && de.props.onVnodeUpdated) && Ct(
          () => gn(qe, xe, de, Ce),
          $
        );
      } else {
        let de;
        const { el: ne, props: ce } = f, { bm: xe, m: Ce, parent: Ae, root: qe, type: at } = g, it = Qr(f);
        vr(g, !1), xe && Ps(xe), !it && (de = ce && ce.onVnodeBeforeMount) && gn(de, Ae, f), vr(g, !0);
        {
          qe.ce && qe.ce._hasShadowRoot() && qe.ce._injectChildStyle(
            at,
            g.parent ? g.parent.type : void 0
          );
          const qt = g.subTree = ou(g);
          m(
            null,
            qt,
            O,
            B,
            g,
            $,
            N
          ), f.el = qt.el;
        }
        if (Ce && Ct(Ce, $), !it && (de = ce && ce.onVnodeMounted)) {
          const qt = f;
          Ct(
            () => gn(de, Ae, qt),
            $
          );
        }
        (f.shapeFlag & 256 || Ae && Qr(Ae.vnode) && Ae.vnode.shapeFlag & 256) && g.a && Ct(g.a, $), g.isMounted = !0, f = O = B = null;
      }
    };
    g.scope.on();
    const W = g.effect = new Wc(A);
    g.scope.off();
    const z = g.update = W.run.bind(W), ue = g.job = W.runIfDirty.bind(W);
    ue.i = g, ue.id = g.uid, W.scheduler = () => vo(ue), vr(g, !0), z();
  }, y = (g, f, O) => {
    f.component = g;
    const B = g.vnode.props;
    g.vnode = f, g.next = null, Ah(g, f.props, B, O), Rh(g, f.children, O), mn(), cd(g), An();
  }, X = (g, f, O, B, $, N, re, A, W = !1) => {
    const z = g && g.children, ue = g ? g.shapeFlag : 0, de = f.children, { patchFlag: ne, shapeFlag: ce } = f;
    if (ne > 0) {
      if (ne & 128) {
        ve(
          z,
          de,
          O,
          B,
          $,
          N,
          re,
          A,
          W
        );
        return;
      } else if (ne & 256) {
        ie(
          z,
          de,
          O,
          B,
          $,
          N,
          re,
          A,
          W
        );
        return;
      }
    }
    ce & 8 ? (ue & 16 && fe(z, $, N), de !== z && u(O, de)) : ue & 16 ? ce & 16 ? ve(
      z,
      de,
      O,
      B,
      $,
      N,
      re,
      A,
      W
    ) : fe(z, $, N, !0) : (ue & 8 && u(O, ""), ce & 16 && _(
      de,
      O,
      B,
      $,
      N,
      re,
      A,
      W
    ));
  }, ie = (g, f, O, B, $, N, re, A, W) => {
    g = g || kr, f = f || kr;
    const z = g.length, ue = f.length, de = Math.min(z, ue);
    let ne;
    for (ne = 0; ne < de; ne++) {
      const ce = f[ne] = W ? Nn(f[ne]) : _n(f[ne]);
      m(
        g[ne],
        ce,
        O,
        null,
        $,
        N,
        re,
        A,
        W
      );
    }
    z > ue ? fe(
      g,
      $,
      N,
      !0,
      !1,
      de
    ) : _(
      f,
      O,
      B,
      $,
      N,
      re,
      A,
      W,
      de
    );
  }, ve = (g, f, O, B, $, N, re, A, W) => {
    let z = 0;
    const ue = f.length;
    let de = g.length - 1, ne = ue - 1;
    for (; z <= de && z <= ne; ) {
      const ce = g[z], xe = f[z] = W ? Nn(f[z]) : _n(f[z]);
      if (Tr(ce, xe))
        m(
          ce,
          xe,
          O,
          null,
          $,
          N,
          re,
          A,
          W
        );
      else
        break;
      z++;
    }
    for (; z <= de && z <= ne; ) {
      const ce = g[de], xe = f[ne] = W ? Nn(f[ne]) : _n(f[ne]);
      if (Tr(ce, xe))
        m(
          ce,
          xe,
          O,
          null,
          $,
          N,
          re,
          A,
          W
        );
      else
        break;
      de--, ne--;
    }
    if (z > de) {
      if (z <= ne) {
        const ce = ne + 1, xe = ce < ue ? f[ce].el : B;
        for (; z <= ne; )
          m(
            null,
            f[z] = W ? Nn(f[z]) : _n(f[z]),
            O,
            xe,
            $,
            N,
            re,
            A,
            W
          ), z++;
      }
    } else if (z > ne)
      for (; z <= de; )
        V(g[z], $, N, !0), z++;
    else {
      const ce = z, xe = z, Ce = /* @__PURE__ */ new Map();
      for (z = xe; z <= ne; z++) {
        const kt = f[z] = W ? Nn(f[z]) : _n(f[z]);
        kt.key != null && Ce.set(kt.key, z);
      }
      let Ae, qe = 0;
      const at = ne - xe + 1;
      let it = !1, qt = 0;
      const Xt = new Array(at);
      for (z = 0; z < at; z++) Xt[z] = 0;
      for (z = ce; z <= de; z++) {
        const kt = g[z];
        if (qe >= at) {
          V(kt, $, N, !0);
          continue;
        }
        let Wt;
        if (kt.key != null)
          Wt = Ce.get(kt.key);
        else
          for (Ae = xe; Ae <= ne; Ae++)
            if (Xt[Ae - xe] === 0 && Tr(kt, f[Ae])) {
              Wt = Ae;
              break;
            }
        Wt === void 0 ? V(kt, $, N, !0) : (Xt[Wt - xe] = z + 1, Wt >= qt ? qt = Wt : it = !0, m(
          kt,
          f[Wt],
          O,
          null,
          $,
          N,
          re,
          A,
          W
        ), qe++);
      }
      const Hr = it ? Ih(Xt) : kr;
      for (Ae = Hr.length - 1, z = at - 1; z >= 0; z--) {
        const kt = xe + z, Wt = f[kt], Ur = f[kt + 1], K = kt + 1 < ue ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ur.el || Fa(Ur)
        ) : B;
        Xt[z] === 0 ? m(
          null,
          Wt,
          O,
          K,
          $,
          N,
          re,
          A,
          W
        ) : it && (Ae < 0 || z !== Hr[Ae] ? _e(Wt, O, K, 2) : Ae--);
      }
    }
  }, _e = (g, f, O, B, $ = null) => {
    const { el: N, type: re, transition: A, children: W, shapeFlag: z } = g;
    if (z & 6) {
      _e(g.component.subTree, f, O, B);
      return;
    }
    if (z & 128) {
      g.suspense.move(f, O, B);
      return;
    }
    if (z & 64) {
      re.move(g, f, O, Pe);
      return;
    }
    if (re === Te) {
      r(N, f, O);
      for (let de = 0; de < W.length; de++)
        _e(W[de], f, O, B);
      r(g.anchor, f, O);
      return;
    }
    if (re === Wo) {
      h(g, f, O);
      return;
    }
    if (B !== 2 && z & 1 && A)
      if (B === 0)
        A.persisted && !N[an] ? r(N, f, O) : (A.beforeEnter(N), r(N, f, O), Ct(() => A.enter(N), $));
      else {
        const { leave: de, delayLeave: ne, afterLeave: ce } = A, xe = () => {
          g.ctx.isUnmounted ? a(N) : r(N, f, O);
        }, Ce = () => {
          const Ae = N._isLeaving || !!N[an];
          N._isLeaving && N[an](
            !0
            /* cancelled */
          ), A.persisted && !Ae ? xe() : de(N, () => {
            xe(), ce && ce();
          });
        };
        ne ? ne(N, xe, Ce) : Ce();
      }
    else
      r(N, f, O);
  }, V = (g, f, O, B = !1, $ = !1) => {
    const {
      type: N,
      props: re,
      ref: A,
      children: W,
      dynamicChildren: z,
      shapeFlag: ue,
      patchFlag: de,
      dirs: ne,
      cacheIndex: ce,
      memo: xe
    } = g;
    if ((de === -2 || z && z.hasOnce) && ($ = !1), A != null && (mn(), $a(A, null, O, g, !0), An()), ce != null && (!g.ctx || g.ctx === f) && (f.renderCache[ce] = void 0), ue & 256 && f.ctx.deactivate(g))
      return;
    const Ce = ue & 1 && ne, Ae = !Qr(g);
    let qe;
    if (Ae && (qe = re && re.onVnodeBeforeUnmount) && gn(qe, f, g), ue & 6)
      G(g.component, O, B);
    else {
      if (ue & 128) {
        g.suspense.unmount(O, B);
        return;
      }
      Ce && hr(g, null, f, "beforeUnmount"), ue & 64 ? g.type.remove(
        g,
        f,
        O,
        Pe,
        B
      ) : z && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !z.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (N !== Te || de > 0 && de & 64) ? fe(
        z,
        f,
        O,
        !1,
        !0
      ) : (N === Te && de & 384 || !$ && ue & 16) && fe(W, f, O), B && te(g);
    }
    const at = xe != null && ce == null;
    (Ae && (qe = re && re.onVnodeUnmounted) || Ce || at) && Ct(() => {
      qe && gn(qe, f, g), Ce && hr(g, null, f, "unmounted"), at && (g.el = null);
    }, O);
  }, te = (g) => {
    const { type: f, el: O, anchor: B, transition: $ } = g, N = f === Te;
    if (N && !$) {
      x(O, B);
      return;
    }
    if (f === Wo) {
      b(g), $ && !$.persisted && $.afterLeave && $.afterLeave();
      return;
    }
    const re = N ? Wa(g) : g, A = () => {
      N ? d(O) && x(O, B) : a(O), $ && !$.persisted && $.afterLeave && $.afterLeave();
    };
    if (re && re.shapeFlag & 1 && $ && !$.persisted) {
      const { leave: W, delayLeave: z } = $, ue = re.el, de = () => W(ue, A);
      z ? z(ue, A, de) : de();
    } else
      A();
  }, x = (g, f) => {
    let O;
    for (; g !== f; )
      O = p(g), a(g), g = O;
    a(f);
  }, G = (g, f, O) => {
    const { bum: B, scope: $, job: N, subTree: re, um: A, m: W, a: z } = g;
    uu(W), uu(z), B && Ps(B), $.stop(), N ? (N.flags |= 8, V(re, g, f, O)) : re && (re.transition = g.vnode.transition, V(re, g, f, O)), A && Ct(A, f);
    const ue = () => {
      g.isUnmounted = !0;
    };
    ue.flags = 16, Ct(ue, f);
  }, fe = (g, f, O, B = !1, $ = !1, N = 0) => {
    for (let re = N; re < g.length; re++)
      V(g[re], f, O, B, $);
  }, I = (g) => {
    if (g.shapeFlag & 6)
      return I(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const f = p(g.anchor || g.el), O = f && f[hd];
    return O ? p(O) : f;
  }, ye = (g, f, O) => {
    const B = g && f._vnode ? void 0 : g && g.component ? g.component.uid : jh();
    Um(() => {
      g == null ? f._vnode && V(f._vnode, null, null, !0) : m(
        f._vnode || null,
        g,
        f,
        null,
        null,
        null,
        O
      ), f._vnode = g;
    }, B);
  }, Pe = {
    p: m,
    um: V,
    m: _e,
    r: te,
    mt: j,
    mc: _,
    pc: X,
    pbc: C,
    n: I,
    o: e
  };
  return {
    render: ye,
    hydrate: void 0,
    createApp: wh(ye)
  };
}
function qo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function vr({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function $h(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ui(e, t, n = !1) {
  const r = e.children, a = t.children;
  if (Oe(r) && Oe(a))
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      let l = a[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = a[s] = Nn(a[s]), l.el = o.el), !n && l.patchFlag !== -2 && ui(o, l)), l.type === xo && (l.patchFlag === -1 && (l = a[s] = Nn(l)), l.el = o.el), l.type === Mt && !l.el && (l.el = o.el);
    }
}
function Ih(e) {
  const t = e.slice(), n = [0];
  let r, a, s, o, l;
  const i = e.length;
  for (r = 0; r < i; r++) {
    const c = e[r];
    if (c !== 0) {
      if (a = n[n.length - 1], e[a] < c) {
        t[r] = a, n.push(r);
        continue;
      }
      for (s = 0, o = n.length - 1; s < o; )
        l = s + o >> 1, e[n[l]] < c ? s = l + 1 : o = l;
      c < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, o = n[s - 1]; s-- > 0; )
    n[s] = o, o = t[o];
  return n;
}
function Ud(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ud(t);
}
function uu(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Fa(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  if (t)
    return Fa(t.subTree);
  const n = e.suspense;
  return n && n.activeBranch ? Fa(n.activeBranch) : null;
}
const Yd = (e) => e.__isSuspense, Fh = /* @__PURE__ */ Symbol("_deferredEnter");
function Lh(e, t) {
  t && t.pendingBranch ? Oe(e) ? t.effects.push(...e) : t.effects.push(e) : Hm(e);
}
const Te = /* @__PURE__ */ Symbol.for("v-fgt"), xo = /* @__PURE__ */ Symbol.for("v-txt"), Mt = /* @__PURE__ */ Symbol.for("v-cmt"), Wo = /* @__PURE__ */ Symbol.for("v-stc"), Bn = [];
let Gt = null;
function U(e = !1) {
  Bn.push(Gt = e ? null : []);
}
function ci() {
  Bn.pop(), Gt = Bn[Bn.length - 1] || null;
}
let Ka = 1;
function qs(e, t = !1) {
  Ka += e, e < 0 && Gt && t && (Gt.hasOnce = !0);
}
function qd(e) {
  return e.dynamicChildren = Ka > 0 ? Gt || kr : null, ci(), Ka > 0 && Gt && Gt.push(e), e;
}
function Q(e, t, n, r, a, s) {
  return qd(
    Se(
      e,
      t,
      n,
      r,
      a,
      s,
      !0
    )
  );
}
function Ee(e, t, n, r, a) {
  return qd(
    Ke(
      e,
      t,
      n,
      r,
      a,
      !0
    )
  );
}
function Zr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Tr(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Wd = ({ key: e }) => e ?? null, As = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ge(e) || /* @__PURE__ */ nt(e) || De(e) ? { i: At, r: e, k: t, f: !!n } : e : null);
function Se(e, t = null, n = null, r = 0, a = null, s = e === Te ? 0 : 1, o = !1, l = !1) {
  const i = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wd(t),
    ref: t && As(t),
    scopeId: pd,
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
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: At
  };
  return l ? (Ws(i, n), s & 128 && e.normalize(i)) : n && (i.shapeFlag |= Ge(n) ? 8 : 16), Ka > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Gt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (i.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  i.patchFlag !== 32 && Gt.push(i), i;
}
const Ke = Vh;
function Vh(e, t = null, n = null, r = 0, a = null, s = !1) {
  if ((!e || e === kd) && (e = Mt), Zr(e)) {
    const l = lr(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ws(l, n), Ka > 0 && !s && Gt && (l.shapeFlag & 6 ? Gt[Gt.indexOf(e)] = l : Gt.push(l)), l.patchFlag = -2, l;
  }
  if (zh(e) && (e = e.__vccOpts), t) {
    t = Ut(t);
    let { class: l, style: i } = t;
    l && !Ge(l) && (t.class = Re(l)), He(i) && (/* @__PURE__ */ mo(i) && !Oe(i) && (i = ct({}, i)), t.style = Pt(i));
  }
  const o = Ge(e) ? 1 : Yd(e) ? 128 : yo(e) ? 64 : He(e) ? 4 : De(e) ? 2 : 0;
  return Se(
    e,
    t,
    n,
    r,
    a,
    o,
    s,
    !0
  );
}
function Ut(e) {
  return e ? /* @__PURE__ */ mo(e) ? ct({}, e) : Fd(e) ? ct({}, e[Xd] || e) : e : null;
}
function lr(e, t, n = !1, r = !1) {
  const { props: a, ref: s, patchFlag: o, children: l, transition: i } = e, c = t ? bt(a || {}, t) : a, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Wd(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Oe(s) ? s.concat(As(t)) : [s, As(t)] : As(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Te ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: i,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && lr(e.ssContent),
    ssFallback: e.ssFallback && lr(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return i && r && Er(
    u,
    i.clone(u)
  ), u;
}
function hn(e = " ", t = 0) {
  return Ke(xo, null, e, t);
}
function ae(e = "", t = !1) {
  return t ? (U(), Ee(Mt, null, e)) : Ke(Mt, null, e);
}
function _n(e) {
  return e == null || typeof e == "boolean" ? Ke(Mt) : Oe(e) ? Ke(
    Te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Zr(e) ? Nn(e) : Ke(xo, null, String(e));
}
function Nn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : lr(e);
}
function Ws(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Oe(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Ws(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Fd(t) ? t._ctx = At : a === 3 && At && (At.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else if (De(t)) {
    if (r & 65) {
      Ws(e, { default: t });
      return;
    }
    t = { default: t, _ctx: At }, n = 32;
  } else
    t = String(t), r & 64 ? (n = 16, t = [hn(t)]) : n = 8;
  e.children = t, e.shapeFlag |= n;
}
function bt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const a in r)
      if (a === "class")
        t.class !== r.class && (t.class = Re([t.class, r.class]));
      else if (a === "style")
        t.style = Pt([t.style, r.style]);
      else if (so(a)) {
        const s = t[a], o = r[a];
        o && s !== o && !(Oe(s) && s.includes(o)) ? t[a] = s ? [].concat(s, o) : o : o == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !oo(a) && (t[a] = o);
      } else a !== "" && (t[a] = r[a]);
  }
  return t;
}
function gn(e, t, n, r = null) {
  on(e, t, 7, [
    n,
    r
  ]);
}
const Bh = /* @__PURE__ */ Ed();
let zd = 0;
function jh() {
  return zd;
}
function Hh(e, t, n) {
  const r = e.type, a = (t ? t.appContext : e.appContext) || Bh, s = {
    uid: zd++,
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
    job: null,
    scope: new Uc(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(a.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Vd(r, a),
    emitsOptions: Rd(r, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ve,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ve,
    data: Ve,
    props: Ve,
    attrs: Ve,
    slots: Ve,
    refs: Ve,
    setupState: Ve,
    setupContext: null,
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
  return s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = _h.bind(null, s), e.ce && e.ce(s), s;
}
let It = null;
const os = () => It || At;
let zs, Ja;
{
  const e = co(), t = (n, r) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(r), (s) => {
      a.length > 1 ? a.forEach((o) => o(s)) : a[0](s);
    };
  };
  zs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => It = n
  ), Ja = t(
    "__VUE_SSR_SETTERS__",
    (n) => Xa = n
  );
}
const ls = (e) => {
  const t = It;
  return zs(e), e.scope.on(), () => {
    e.scope.off(), zs(t);
  };
}, cu = () => {
  It && It.scope.off(), zs(null);
};
function Kd(e) {
  return e.vnode.shapeFlag & 4;
}
let Xa = !1;
function Uh(e, t = !1, n = !1) {
  t && Ja(t);
  const { props: r, children: a } = e.vnode, s = Kd(e);
  Ph(e, r, s, t), Dh(e, a, n || t);
  const o = s ? Yh(e, t) : void 0;
  return t && Ja(!1), o;
}
function Yh(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, fh);
  const { setup: r } = n;
  if (r) {
    mn();
    const a = e.setupContext = r.length > 1 ? Gd(e) : null, s = ls(e), o = as(
      r,
      e,
      0,
      [
        e.props,
        a
      ]
    ), l = Ic(o);
    if (An(), s(), (l || e.sp) && !Qr(e) && _d(e), l) {
      if (o.then(cu, cu), t)
        return o.then((i) => {
          Ja(!0);
          try {
            du(e, i, t);
          } finally {
            Ja(!1);
          }
        }).catch((i) => {
          ho(i, e, 0, void 0, !0), e.ssrRender = (c, u) => u("<!---->");
        });
      e.asyncDep = o;
    } else
      du(e, o);
  } else
    Jd(e);
}
function du(e, t, n) {
  De(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : He(t) && (e.setupState = od(t)), Jd(e);
}
function Jd(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || kn);
  {
    const a = ls(e);
    mn();
    try {
      mh(e);
    } finally {
      An(), a();
    }
  }
}
const Xd = /* @__PURE__ */ Symbol(), qh = {
  get(e, t) {
    return $t(e, "get", ""), t === Xd ? e : e[t];
  }
};
function Gd(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, qh),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function To(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(od(si(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ia)
        return Ia[n](e);
    },
    has(t, n) {
      return n in t || n in Ia;
    }
  })) : e.proxy;
}
function Wh(e, t = !0) {
  return De(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function zh(e) {
  return De(e) && "__vccOpts" in e;
}
const oe = (e, t) => /* @__PURE__ */ Fm(e, t, Xa);
function Qd(e, t, n) {
  try {
    qs(-1);
    const r = arguments.length;
    return r === 2 ? He(t) && !Oe(t) ? Zr(t) ? Ke(e, null, [t]) : Ke(e, t) : Ke(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Zr(n) && (n = [n]), Ke(e, t, n));
  } finally {
    qs(1);
  }
}
const Kh = "3.5.45";
/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Nl;
const fu = typeof window < "u" && window.trustedTypes;
if (fu)
  try {
    Nl = /* @__PURE__ */ fu.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Zd = Nl ? (e) => Nl.createHTML(e) : (e) => e, Jh = "http://www.w3.org/2000/svg", Xh = "http://www.w3.org/1998/Math/MathML", Rn = typeof document < "u" ? document : null, pu = Rn && /* @__PURE__ */ Rn.createElement("template"), Gh = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const a = t === "svg" ? Rn.createElementNS(Jh, e) : t === "mathml" ? Rn.createElementNS(Xh, e) : n ? Rn.createElement(e, { is: n }) : Rn.createElement(e);
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
  insertStaticContent(e, t, n, r, a, s) {
    const o = n ? n.previousSibling : t.lastChild;
    if (a && (a === s || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === s || !(a = a.nextSibling)); )
        ;
    else {
      pu.innerHTML = Zd(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = pu.content;
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
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Kn = "transition", ya = "animation", Ga = /* @__PURE__ */ Symbol("_vtc"), ef = {
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
}, Qh = /* @__PURE__ */ ct(
  {},
  yd,
  ef
), Zh = (e) => (e.displayName = "Transition", e.props = Qh, e), ca = /* @__PURE__ */ Zh(
  (e, { slots: t }) => Qd(th, ev(e), t)
), yr = (e, t = []) => {
  Oe(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, mu = (e) => e ? Oe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ev(e) {
  const t = {};
  for (const F in e)
    F in ef || (t[F] = e[F]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: a,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: i = s,
    appearActiveClass: c = o,
    appearToClass: u = l,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: v = `${n}-leave-to`
  } = e, w = tv(a), m = w && w[0], S = w && w[1], {
    onBeforeEnter: R,
    onEnter: k,
    onEnterCancelled: h,
    onLeave: b,
    onLeaveCancelled: q,
    onBeforeAppear: Y = R,
    onAppear: E = k,
    onAppearCancelled: _ = h
  } = t, M = (F, Z, j, T) => {
    F._enterCancelled = T, gr(F, Z ? u : l), gr(F, Z ? c : o), j && j();
  }, C = (F, Z) => {
    F._isLeaving = !1, gr(F, d), gr(F, v), gr(F, p), Z && Z();
  }, H = (F) => (Z, j) => {
    const T = F ? E : k, L = () => M(Z, F, j);
    yr(T, [Z, L]), hu(() => {
      gr(Z, F ? i : s), Dn(Z, F ? u : l), mu(T) || vu(Z, r, m, L);
    });
  };
  return ct(t, {
    onBeforeEnter(F) {
      yr(R, [F]), Dn(F, s), Dn(F, o);
    },
    onBeforeAppear(F) {
      yr(Y, [F]), Dn(F, i), Dn(F, c);
    },
    onEnter: H(!1),
    onAppear: H(!0),
    onLeave(F, Z) {
      F._isLeaving = !0;
      const j = () => C(F, Z);
      Dn(F, d), F._enterCancelled ? (Dn(F, p), bu(F)) : (bu(F), Dn(F, p)), hu(() => {
        F._isLeaving && (gr(F, d), Dn(F, v), mu(b) || vu(F, r, S, j));
      }), yr(b, [F, j]);
    },
    onEnterCancelled(F) {
      M(F, !1, void 0, !0), yr(h, [F]);
    },
    onAppearCancelled(F) {
      M(F, !0, void 0, !0), yr(_, [F]);
    },
    onLeaveCancelled(F) {
      C(F), yr(q, [F]);
    }
  });
}
function tv(e) {
  if (e == null)
    return null;
  if (He(e))
    return [zo(e.enter), zo(e.leave)];
  {
    const t = zo(e);
    return [t, t];
  }
}
function zo(e) {
  return Zp(e);
}
function Dn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Ga] || (e[Ga] = /* @__PURE__ */ new Set())).add(t);
}
function gr(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Ga];
  n && (n.delete(t), n.size || (e[Ga] = void 0));
}
function hu(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let nv = 0;
function vu(e, t, n, r) {
  const a = e._endId = ++nv, s = () => {
    a === e._endId && r();
  };
  if (n != null)
    return setTimeout(s, n);
  const { type: o, timeout: l, propCount: i } = rv(e, t);
  if (!o)
    return r();
  const c = o + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(c, p), s();
  }, p = (v) => {
    v.target === e && ++u >= i && d();
  };
  setTimeout(() => {
    u < i && d();
  }, l + 1), e.addEventListener(c, p);
}
function rv(e, t) {
  const n = window.getComputedStyle(e), r = (w) => (n[w] || "").split(", "), a = r(`${Kn}Delay`), s = r(`${Kn}Duration`), o = yu(a, s), l = r(`${ya}Delay`), i = r(`${ya}Duration`), c = yu(l, i);
  let u = null, d = 0, p = 0;
  t === Kn ? o > 0 && (u = Kn, d = o, p = s.length) : t === ya ? c > 0 && (u = ya, d = c, p = i.length) : (d = Math.max(o, c), u = d > 0 ? o > c ? Kn : ya : null, p = u ? u === Kn ? s.length : i.length : 0);
  const v = u === Kn && /\b(?:transform|all)(?:,|$)/.test(
    r(`${Kn}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: p,
    hasTransform: v
  };
}
function yu(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => gu(n) + gu(e[r])));
}
function gu(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function bu(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function av(e, t, n) {
  const r = e[Ga];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ks = /* @__PURE__ */ Symbol("_vod"), tf = /* @__PURE__ */ Symbol("_vsh"), Ms = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Ks] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ga(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), ga(e, !0), r.enter(e)) : r.leave(e, () => {
      ga(e, !1);
    }) : ga(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ga(e, t);
  }
};
function ga(e, t) {
  e.style.display = t ? e[Ks] : "none", e[tf] = !t;
}
const sv = /* @__PURE__ */ Symbol(""), ov = /(?:^|;)\s*display\s*:/;
function lv(e, t, n) {
  const r = e.style, a = Ge(n);
  let s = !1;
  if (n && !a) {
    if (t)
      if (Ge(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Ma(r, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Ma(r, o, "");
    for (const o in n) {
      o === "display" && (s = !0);
      const l = n[o];
      l != null ? uv(
        e,
        o,
        !Ge(t) && t ? t[o] : void 0,
        l
      ) || Ma(r, o, l) : Ma(r, o, "");
    }
  } else if (a) {
    if (t !== n) {
      const o = r[sv];
      o && (n += ";" + o), r.cssText = n, s = ov.test(n);
    }
  } else t && e.removeAttribute("style");
  Ks in e && ((!a || t !== n) && (e[Ks] = s ? r.display : ""), e[tf] && (r.display = "none"));
}
const ws = /\s*!important$/;
function Ma(e, t, n) {
  if (Oe(n))
    n.forEach((r) => Ma(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    ws.test(n) ? e.setProperty(t, n.replace(ws, ""), "important") : e.setProperty(t, n);
  else {
    const r = iv(e, t);
    ws.test(n) ? e.setProperty(
      Yn(r),
      n.replace(ws, ""),
      "important"
    ) : e[r] = n;
  }
}
const wu = ["Webkit", "Moz", "ms"], Ko = {};
function iv(e, t) {
  const n = Ko[t];
  if (n)
    return n;
  let r = Ft(t);
  if (r !== "filter" && r in e)
    return Ko[t] = r;
  r = uo(r);
  for (let a = 0; a < wu.length; a++) {
    const s = wu[a] + r;
    if (s in e)
      return Ko[t] = s;
  }
  return t;
}
function uv(e, t, n, r) {
  return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && Ge(r) && n === r;
}
const _u = "http://www.w3.org/1999/xlink";
function xu(e, t, n, r, a, s = sm(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(_u, t.slice(6, t.length)) : e.setAttributeNS(_u, t, n) : n == null || s && !Bc(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : tn(n) ? String(n) : n
  );
}
function Tu(e, t, n, r, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Zd(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== i || !("_value" in e)) && (e.value = i), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Bc(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(a || t);
}
function Sr(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function cv(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Su = /* @__PURE__ */ Symbol("_vei");
function dv(e, t, n, r, a = null) {
  const s = e[Su] || (e[Su] = {}), o = s[t];
  if (r && o)
    o.value = r;
  else {
    const [l, i] = mv(t);
    if (r) {
      const c = s[t] = yv(
        r,
        a
      );
      Sr(e, l, c, i);
    } else o && (cv(e, l, o, i), s[t] = void 0);
  }
}
const fv = /(Once|Passive|Capture)$/, pv = /^on:?(?:Once|Passive|Capture)$/;
function mv(e) {
  let t, n;
  for (; (n = e.match(fv)) && !pv.test(e); )
    t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : Yn(e.slice(2)), t];
}
let Jo = 0;
const hv = /* @__PURE__ */ Promise.resolve(), vv = () => Jo || (hv.then(() => Jo = 0), Jo = Date.now());
function yv(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    const a = n.value;
    if (Oe(a)) {
      const s = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        s.call(r), r._stopped = !0;
      };
      const o = a.slice(), l = [r];
      for (let i = 0; i < o.length && !r._stopped; i++) {
        const c = o[i];
        c && on(
          c,
          t,
          5,
          l
        );
      }
    } else
      on(
        a,
        t,
        5,
        [r]
      );
  };
  return n.value = e, n.attached = vv(), n;
}
const ku = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, gv = (e, t, n, r, a, s) => {
  const o = a === "svg";
  t === "class" ? av(e, r, o) : t === "style" ? lv(e, n, r) : so(t) ? oo(t) || dv(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : bv(e, t, r, o)) ? (Tu(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && xu(e, t, r, o, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (wv(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ge(r))) ? Tu(e, Ft(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), xu(e, t, r, o));
};
function bv(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ku(t) && De(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return ku(t) && Ge(n) ? !1 : t in e;
}
function wv(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Ft(t);
  return Array.isArray(n) ? n.some((a) => Ft(a) === r) : Object.keys(n).some((a) => Ft(a) === r);
}
const Js = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Oe(t) ? (n) => Ps(t, n) : t;
};
function _v(e) {
  e.target.composing = !0;
}
function Ou(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Or = /* @__PURE__ */ Symbol("_assign"), _s = /* @__PURE__ */ Symbol("_initialValue");
function Xo(e, t, n) {
  return t && (e = e.trim()), n && (e = rs(e)), e;
}
const $l = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, a) {
    e.parentNode && (e.type === "text" ? e[_s] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[_s] = e.defaultValue.replace(/\r\n?/g, `
`))), e[Or] = Js(a);
    const s = r || a.props && a.props.type === "number";
    Sr(e, t ? "change" : "input", (o) => {
      o.target.composing || e[Or](Xo(e.value, n, s));
    }), (n || s) && Sr(e, "change", () => {
      e.value = Xo(e.value, n, s);
    }), t || (Sr(e, "compositionstart", _v), Sr(e, "compositionend", Ou), Sr(e, "change", Ou));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
    const a = t ?? "", s = e[_s];
    delete e[_s], s !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== s ? e[Or](Xo(e.value, n, r)) : e.value = a;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: a, number: s } }, o) {
    if (e[Or] = Js(o), e.composing) return;
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? rs(e.value) : e.value, i = t ?? "";
    if (l === i)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (r && t === n || a && e.value.trim() === i) || (e.value = i);
  }
}, nf = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    e._modelValue = t, Sr(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? rs(Xs(i)) : Xs(i)
      ), s = e.multiple, o = s ? Ir(e._modelValue) ? new Set(a) : a : a[0], l = e._pendingValue = [
        s,
        s ? Oe(o) ? a.slice() : a : o
      ];
      try {
        e[Or](o);
      } finally {
        Et(() => {
          e._pendingValue === l && (e._pendingValue = void 0);
        });
      }
    }), e[Or] = Js(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, modifiers: { number: n } }) {
    Pu(e, t, n);
  },
  beforeUpdate(e, { value: t }, n) {
    e._modelValue = t, e[Or] = Js(n);
  },
  updated(e, { value: t, modifiers: { number: n } }) {
    const r = e._pendingValue;
    e._pendingValue = void 0, (!r || r[0] !== e.multiple || !xv(t, r[1], r[0])) && Pu(e, t, n);
  }
};
function xv(e, t, n) {
  if (!n || Oe(e)) return sr(e, t);
  if (Ir(e)) {
    if (e.size !== t.length) return !1;
    for (const r of t)
      if (!e.has(r)) return !1;
    return !0;
  }
  return !1;
}
function Pu(e, t, n = !1) {
  const r = e.multiple, a = Oe(t);
  if (!(r && !a && !Ir(t))) {
    for (let s = 0, o = e.options.length; s < o; s++) {
      const l = e.options[s], i = Xs(l);
      if (r)
        if (a) {
          const c = typeof i;
          c === "string" || c === "number" ? l.selected = t.some((u) => String(u) === String(i)) : l.selected = im(t, i) > -1;
        } else
          l.selected = t.has(i) || n && typeof i == "string" && t.has(rs(i));
      else if (sr(Xs(l), t)) {
        e.selectedIndex !== s && (e.selectedIndex = s);
        return;
      }
    }
    !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Xs(e) {
  return "_value" in e ? e._value : e.value;
}
const Tv = ["ctrl", "shift", "alt", "meta"], Sv = {
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
  exact: (e, t) => Tv.some((n) => e[`${n}Key`] && !t.includes(n))
}, ea = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (a, ...s) => {
    for (let o = 0; o < t.length; o++) {
      const l = Sv[t[o]];
      if (l && l(a, t)) return;
    }
    return e(a, ...s);
  });
}, kv = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, rf = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (a) => {
    if (!("key" in a))
      return;
    const s = Yn(a.key);
    if (t.some(
      (o) => o === s || kv[o] === s
    ))
      return e(a);
  });
}, Ov = /* @__PURE__ */ ct({ patchProp: gv }, Gh);
let Au;
function af() {
  return Au || (Au = Ch(Ov));
}
const Mu = (...e) => {
  af().render(...e);
}, Pv = (...e) => {
  const t = af().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const a = Mv(r);
    if (!a) return;
    const s = t._component;
    !De(s) && !s.render && !s.template && (s.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const o = n(a, !1, Av(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), o;
  }, t;
};
function Av(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Mv(e) {
  return Ge(e) ? document.querySelector(e) : e;
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let sf;
const So = (e) => sf = e, of = (
  /* istanbul ignore next */
  Symbol()
);
function Il(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var La;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(La || (La = {}));
function Ev() {
  const e = Yc(!0), t = e.run(() => /* @__PURE__ */ se({}));
  let n = [], r = [];
  const a = si({
    install(s) {
      So(a), a._a = s, s.provide(of, a), s.config.globalProperties.$pinia = a, r.forEach((o) => n.push(o)), r = [];
    },
    use(s) {
      return this._a ? n.push(s) : r.push(s), this;
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
const lf = () => {
};
function Eu(e, t, n, r = lf) {
  e.push(t);
  const a = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), r());
  };
  return !n && Ql() && qc(a), a;
}
function qr(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Dv = (e) => e(), Du = Symbol(), Go = Symbol();
function Fl(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], a = e[n];
    Il(a) && Il(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ nt(r) && !/* @__PURE__ */ On(r) ? e[n] = Fl(a, r) : e[n] = r;
  }
  return e;
}
const Rv = (
  /* istanbul ignore next */
  Symbol()
);
function Cv(e) {
  return !Il(e) || !e.hasOwnProperty(Rv);
}
const { assign: Qn } = Object;
function Nv(e) {
  return !!(/* @__PURE__ */ nt(e) && e.effect);
}
function $v(e, t, n, r) {
  const { state: a, actions: s, getters: o } = t, l = n.state.value[e];
  let i;
  function c() {
    l || (n.state.value[e] = a ? a() : {});
    const u = /* @__PURE__ */ Cm(n.state.value[e]);
    return Qn(u, s, Object.keys(o || {}).reduce((d, p) => (d[p] = si(oe(() => {
      So(n);
      const v = n._s.get(e);
      return o[p].call(v, v);
    })), d), {}));
  }
  return i = uf(e, c, t, n, r, !0), i;
}
function uf(e, t, n = {}, r, a, s) {
  let o;
  const l = Qn({ actions: {} }, n), i = { deep: !0 };
  let c, u, d = [], p = [], v;
  const w = r.state.value[e];
  !s && !w && (r.state.value[e] = {});
  let m;
  function S(_) {
    let M;
    c = u = !1, typeof _ == "function" ? (_(r.state.value[e]), M = {
      type: La.patchFunction,
      storeId: e,
      events: v
    }) : (Fl(r.state.value[e], _), M = {
      type: La.patchObject,
      payload: _,
      storeId: e,
      events: v
    });
    const C = m = Symbol();
    Et().then(() => {
      m === C && (c = !0);
    }), u = !0, qr(d, M, r.state.value[e]);
  }
  const R = s ? function() {
    const { state: M } = n, C = M ? M() : {};
    this.$patch((H) => {
      Qn(H, C);
    });
  } : (
    /* istanbul ignore next */
    lf
  );
  function k() {
    o.stop(), d = [], p = [], r._s.delete(e);
  }
  const h = (_, M = "") => {
    if (Du in _)
      return _[Go] = M, _;
    const C = function() {
      So(r);
      const H = Array.from(arguments), F = [], Z = [];
      function j(y) {
        F.push(y);
      }
      function T(y) {
        Z.push(y);
      }
      qr(p, {
        args: H,
        name: C[Go],
        store: q,
        after: j,
        onError: T
      });
      let L;
      try {
        L = _.apply(this && this.$id === e ? this : q, H);
      } catch (y) {
        throw qr(Z, y), y;
      }
      return L instanceof Promise ? L.then((y) => (qr(F, y), y)).catch((y) => (qr(Z, y), Promise.reject(y))) : (qr(F, L), L);
    };
    return C[Du] = !0, C[Go] = M, C;
  }, b = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Eu.bind(null, p),
    $patch: S,
    $reset: R,
    $subscribe(_, M = {}) {
      const C = Eu(d, _, M.detached, () => H()), H = o.run(() => ze(() => r.state.value[e], (F) => {
        (M.flush === "sync" ? u : c) && _({
          storeId: e,
          type: La.direct,
          events: v
        }, F);
      }, Qn({}, i, M)));
      return C;
    },
    $dispose: k
  }, q = /* @__PURE__ */ qn(b);
  r._s.set(e, q);
  const E = (r._a && r._a.runWithContext || Dv)(() => r._e.run(() => (o = Yc()).run(() => t({ action: h }))));
  for (const _ in E) {
    const M = E[_];
    if (/* @__PURE__ */ nt(M) && !Nv(M) || /* @__PURE__ */ On(M))
      s || (w && Cv(M) && (/* @__PURE__ */ nt(M) ? M.value = w[_] : Fl(M, w[_])), r.state.value[e][_] = M);
    else if (typeof M == "function") {
      const C = h(M, _);
      E[_] = C, l.actions[_] = M;
    }
  }
  return Qn(q, E), Qn(/* @__PURE__ */ Le(q), E), Object.defineProperty(q, "$state", {
    get: () => r.state.value[e],
    set: (_) => {
      S((M) => {
        Qn(M, _);
      });
    }
  }), r._p.forEach((_) => {
    Qn(q, o.run(() => _({
      store: q,
      app: r._a,
      pinia: r,
      options: l
    })));
  }), w && s && n.hydrate && n.hydrate(q.$state, w), c = !0, u = !0, q;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Iv(e, t, n) {
  let r, a;
  const s = typeof t == "function";
  r = e, a = s ? n : t;
  function o(l, i) {
    const c = qm();
    return l = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    l || (c ? Na(of, null) : null), l && So(l), l = sf, l._s.has(r) || (s ? uf(r, t, a, l) : $v(r, a, l)), l._s.get(r);
  }
  return o.$id = r, o;
}
var cf = typeof global == "object" && global && global.Object === Object && global, Fv = typeof self == "object" && self && self.Object === Object && self, di = cf || Fv || Function("return this")(), Gs = di.Symbol, df = Object.prototype, Lv = df.hasOwnProperty, Vv = df.toString, ba = Gs ? Gs.toStringTag : void 0;
function Bv(e) {
  var t = Lv.call(e, ba), n = e[ba];
  try {
    e[ba] = void 0;
    var r = !0;
  } catch {
  }
  var a = Vv.call(e);
  return r && (t ? e[ba] = n : delete e[ba]), a;
}
var jv = Object.prototype, Hv = jv.toString;
function Uv(e) {
  return Hv.call(e);
}
var Yv = "[object Null]", qv = "[object Undefined]", Ru = Gs ? Gs.toStringTag : void 0;
function fi(e) {
  return e == null ? e === void 0 ? qv : Yv : Ru && Ru in Object(e) ? Bv(e) : Uv(e);
}
function pi(e) {
  return e != null && typeof e == "object";
}
var ff = Array.isArray;
function mi(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function pf(e) {
  return e;
}
var Wv = "[object AsyncFunction]", zv = "[object Function]", Kv = "[object GeneratorFunction]", Jv = "[object Proxy]";
function mf(e) {
  if (!mi(e))
    return !1;
  var t = fi(e);
  return t == zv || t == Kv || t == Wv || t == Jv;
}
var Qo = di["__core-js_shared__"], Cu = function() {
  var e = /[^.]+$/.exec(Qo && Qo.keys && Qo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Xv(e) {
  return !!Cu && Cu in e;
}
var Gv = Function.prototype, Qv = Gv.toString;
function Zv(e) {
  if (e != null) {
    try {
      return Qv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ey = /[\\^$.*+?()[\]{}|]/g, ty = /^\[object .+?Constructor\]$/, ny = Function.prototype, ry = Object.prototype, ay = ny.toString, sy = ry.hasOwnProperty, oy = RegExp(
  "^" + ay.call(sy).replace(ey, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ly(e) {
  if (!mi(e) || Xv(e))
    return !1;
  var t = mf(e) ? oy : ty;
  return t.test(Zv(e));
}
function iy(e, t) {
  return e == null ? void 0 : e[t];
}
function uy(e, t) {
  var n = iy(e, t);
  return ly(n) ? n : void 0;
}
function cy(e, t, n) {
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
var dy = 800, fy = 16, py = Date.now;
function my(e) {
  var t = 0, n = 0;
  return function() {
    var r = py(), a = fy - (r - n);
    if (n = r, a > 0) {
      if (++t >= dy)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function hy(e) {
  return function() {
    return e;
  };
}
var Qs = function() {
  try {
    var e = uy(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), vy = Qs ? function(e, t) {
  return Qs(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: hy(t),
    writable: !0
  });
} : pf, yy = my(vy), gy = 9007199254740991, by = /^(?:0|[1-9]\d*)$/;
function hf(e, t) {
  var n = typeof e;
  return t = t ?? gy, !!t && (n == "number" || n != "symbol" && by.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function vf(e, t, n) {
  t == "__proto__" && Qs ? Qs(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function yf(e, t) {
  return e === t || e !== e && t !== t;
}
var wy = Object.prototype, _y = wy.hasOwnProperty;
function gf(e, t, n) {
  var r = e[t];
  (!(_y.call(e, t) && yf(r, n)) || n === void 0 && !(t in e)) && vf(e, t, n);
}
function xy(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var s = -1, o = t.length; ++s < o; ) {
    var l = t[s], i = void 0;
    i === void 0 && (i = e[l]), a ? vf(n, l, i) : gf(n, l, i);
  }
  return n;
}
var Nu = Math.max;
function Ty(e, t, n) {
  return t = Nu(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, s = Nu(r.length - t, 0), o = Array(s); ++a < s; )
      o[a] = r[t + a];
    a = -1;
    for (var l = Array(t + 1); ++a < t; )
      l[a] = r[a];
    return l[t] = n(o), cy(e, this, l);
  };
}
function Sy(e, t) {
  return yy(Ty(e, t, pf), e + "");
}
var ky = 9007199254740991;
function bf(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ky;
}
function hi(e) {
  return e != null && bf(e.length) && !mf(e);
}
function Oy(e, t, n) {
  if (!mi(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? hi(n) && hf(t, n.length) : r == "string" && t in n) ? yf(n[t], e) : !1;
}
function Py(e) {
  return Sy(function(t, n) {
    var r = -1, a = n.length, s = a > 1 ? n[a - 1] : void 0, o = a > 2 ? n[2] : void 0;
    for (s = e.length > 3 && typeof s == "function" ? (a--, s) : void 0, o && Oy(n[0], n[1], o) && (s = a < 3 ? void 0 : s, a = 1), t = Object(t); ++r < a; ) {
      var l = n[r];
      l && e(t, l, r, s);
    }
    return t;
  });
}
var Ay = Object.prototype;
function wf(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Ay;
  return e === n;
}
function My(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Ey = "[object Arguments]";
function $u(e) {
  return pi(e) && fi(e) == Ey;
}
var _f = Object.prototype, Dy = _f.hasOwnProperty, Ry = _f.propertyIsEnumerable, Cy = $u(/* @__PURE__ */ function() {
  return arguments;
}()) ? $u : function(e) {
  return pi(e) && Dy.call(e, "callee") && !Ry.call(e, "callee");
};
function Ny() {
  return !1;
}
var xf = typeof exports == "object" && exports && !exports.nodeType && exports, Iu = xf && typeof module == "object" && module && !module.nodeType && module, $y = Iu && Iu.exports === xf, Fu = $y ? di.Buffer : void 0, Iy = Fu ? Fu.isBuffer : void 0, Fy = Iy || Ny, Ly = "[object Arguments]", Vy = "[object Array]", By = "[object Boolean]", jy = "[object Date]", Hy = "[object Error]", Uy = "[object Function]", Yy = "[object Map]", qy = "[object Number]", Wy = "[object Object]", zy = "[object RegExp]", Ky = "[object Set]", Jy = "[object String]", Xy = "[object WeakMap]", Gy = "[object ArrayBuffer]", Qy = "[object DataView]", Zy = "[object Float32Array]", eg = "[object Float64Array]", tg = "[object Int8Array]", ng = "[object Int16Array]", rg = "[object Int32Array]", ag = "[object Uint8Array]", sg = "[object Uint8ClampedArray]", og = "[object Uint16Array]", lg = "[object Uint32Array]", et = {};
et[Zy] = et[eg] = et[tg] = et[ng] = et[rg] = et[ag] = et[sg] = et[og] = et[lg] = !0;
et[Ly] = et[Vy] = et[Gy] = et[By] = et[Qy] = et[jy] = et[Hy] = et[Uy] = et[Yy] = et[qy] = et[Wy] = et[zy] = et[Ky] = et[Jy] = et[Xy] = !1;
function ig(e) {
  return pi(e) && bf(e.length) && !!et[fi(e)];
}
function ug(e) {
  return function(t) {
    return e(t);
  };
}
var Tf = typeof exports == "object" && exports && !exports.nodeType && exports, Va = Tf && typeof module == "object" && module && !module.nodeType && module, cg = Va && Va.exports === Tf, Zo = cg && cf.process, Lu = function() {
  try {
    var e = Va && Va.require && Va.require("util").types;
    return e || Zo && Zo.binding && Zo.binding("util");
  } catch {
  }
}(), Vu = Lu && Lu.isTypedArray, dg = Vu ? ug(Vu) : ig, fg = Object.prototype, pg = fg.hasOwnProperty;
function mg(e, t) {
  var n = ff(e), r = !n && Cy(e), a = !n && !r && Fy(e), s = !n && !r && !a && dg(e), o = n || r || a || s, l = o ? My(e.length, String) : [], i = l.length;
  for (var c in e)
    pg.call(e, c) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    hf(c, i))) && l.push(c);
  return l;
}
function hg(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var vg = hg(Object.keys, Object), yg = Object.prototype, gg = yg.hasOwnProperty;
function bg(e) {
  if (!wf(e))
    return vg(e);
  var t = [];
  for (var n in Object(e))
    gg.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function wg(e) {
  return hi(e) ? mg(e) : bg(e);
}
var _g = Object.prototype, xg = _g.hasOwnProperty, Tg = Py(function(e, t) {
  if (wf(t) || hi(t)) {
    xy(t, wg(t), e);
    return;
  }
  for (var n in t)
    xg.call(t, n) && gf(e, n, t[n]);
});
const Zs = "Value", ta = "ValueString", Rr = "ValueFloat", na = "ValueDate", ra = "ValueFilePath", ir = "Mode", ur = "SubSystem", Qa = "Command", Ll = [
  Zs,
  ta,
  Rr,
  na,
  ra
];
class Ea {
  constructor(t) {
    Tg(this, t);
  }
  getDestinations(t) {
    const n = ff(t) ? t : [t];
    return this.destinations.reduce((a, s) => (n.includes(s.type) && a.push(s), a), []);
  }
  getValues() {
    return this.hasValues ? this.getDestinations(Ll) : [];
  }
  getModes() {
    return this.hasModes ? this.getDestinations(ir) : [];
  }
  getSubsystems() {
    return this.getDestinations(ur);
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
function Sf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Sg } = Object.prototype, { getPrototypeOf: jn } = Object, { iterator: is, toStringTag: kf } = Symbol, Hn = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Of = (e) => typeof e == "string" && (e === "__proto__" || e === "constructor" || e === "prototype"), ko = (e, t, n) => e === Object.prototype || !n && t === null, kg = (e) => {
  if (!Object.isExtensible(e))
    return !1;
  const t = Object.getOwnPropertyNames(e);
  return Object.getOwnPropertySymbols && t.push(...Object.getOwnPropertySymbols(e)), t.every((n) => {
    if (Of(n))
      return !1;
    const r = Object.getOwnPropertyDescriptor(e, n);
    return !!r && r.configurable && r.writable === !0;
  });
}, vi = (e, t) => {
  let n = e;
  const r = [];
  for (; n != null; ) {
    if (r.indexOf(n) !== -1)
      return !1;
    r.push(n);
    const a = jn(n);
    if (ko(n, a, n === e))
      return !1;
    if (Hn(n, t))
      return !0;
    n = a;
  }
  return !1;
}, Og = (e, t) => e != null && vi(e, t) ? e[t] : void 0, Pg = (e) => {
  if (e == null || typeof e != "object" && typeof e != "function")
    return e;
  const t = jn(e);
  if (t === null && kg(e))
    return e;
  const n = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null), a = [];
  let s = e;
  for (; s != null && a.indexOf(s) === -1; ) {
    a.push(s);
    const o = s === e ? t : jn(s);
    if (ko(s, o, s === e))
      break;
    const l = Object.getOwnPropertyNames(s);
    Object.getOwnPropertySymbols && l.push(...Object.getOwnPropertySymbols(s));
    for (const i of l)
      Of(i) || Hn(r, i) || (n[i] = e[i], r[i] = !0);
    s = o;
  }
  return n;
}, yi = /* @__PURE__ */ ((e) => (t) => {
  const n = Sg.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ln = (e) => (e = e.toLowerCase(), (t) => yi(t) === e), Oo = (e) => (t) => typeof t === e, { isArray: Fr } = Array, Lr = Oo("undefined");
function da(e) {
  return e !== null && !Lr(e) && e.constructor !== null && !Lr(e.constructor) && Kt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Pf = ln("ArrayBuffer");
function Ag(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Pf(e.buffer), t;
}
const Mg = Oo("string"), Kt = Oo("function"), Eg = Oo("number"), fa = (e) => e !== null && typeof e == "object", Dg = (e) => e === !0 || e === !1, Es = (e) => {
  if (!fa(e))
    return !1;
  const t = jn(e);
  return (t === null || t === Object.prototype || jn(t) === null) && // Treat own Symbol.toStringTag or Symbol.iterator members as evidence the
  // value is tagged/iterable, ignoring members reachable only through shared
  // or terminal prototype boundaries. This is exactly what
  // hasOwnInPrototypeChain(val, prop) computes here: every prototype admitted
  // above (null, Object.prototype, or a terminal null-prototype template) is
  // a boundary, so the walk never inspects anything but `val`'s own members,
  // and stops before even those when `val` is itself the boundary
  // Object.prototype. Checking that inline avoids allocating the walker's
  // `seen` list twice per call on the mergeConfig / merge hot path.
  (ko(e, t, !0) || !Hn(e, kf) && !Hn(e, is));
}, Rg = (e) => {
  if (!fa(e) || da(e))
    return !1;
  try {
    return Object.keys(e).length === 0 && Object.getPrototypeOf(e) === Object.prototype;
  } catch {
    return !1;
  }
}, Cg = ln("Date"), Ng = ln("File"), $g = (e) => !!(e && typeof e.uri < "u"), Ig = (e) => e && typeof e.getParts < "u", Fg = ln("Blob"), Lg = ln("FileList"), Vg = ln("Set"), Bg = (e) => fa(e) && Kt(e.pipe);
function jg() {
  return typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Bu = jg(), ju = typeof Bu.FormData < "u" ? Bu.FormData : void 0, Hg = (e) => {
  if (!e) return !1;
  if (ju && e instanceof ju) return !0;
  const t = jn(e);
  if (!t || t === Object.prototype || !Kt(e.append)) return !1;
  const n = yi(e);
  return n === "formdata" || // detect form-data instance
  n === "object" && Kt(e.toString) && e.toString() === "[object FormData]";
}, Ug = ln("URLSearchParams"), [Yg, qg, Wg, zg] = [
  "ReadableStream",
  "Request",
  "Response",
  "Headers"
].map(ln), Kg = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function us(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), Fr(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    if (da(e))
      return;
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = s.length;
    let l;
    for (r = 0; r < o; r++)
      l = s[r], t.call(null, e[l], l, e);
  }
}
function Jg(e, t) {
  if (da(e))
    return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const Pr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Af = (e) => !Lr(e) && e !== Pr;
function Vl(...e) {
  const { caseless: t, skipUndefined: n } = Af(this) && this || {}, r = {}, a = t ? /* @__PURE__ */ Object.create(null) : null, s = (o, l) => {
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return;
    let i = l;
    if (a && typeof l == "string") {
      const u = l.toLowerCase(), d = a[u];
      d !== void 0 && Hn(r, d) ? i = d : a[u] = l;
    }
    const c = Hn(r, i) ? r[i] : void 0;
    Es(c) && Es(o) ? r[i] = Vl(c, o) : Es(o) ? r[i] = Vl({}, o) : Fr(o) ? r[i] = o.slice() : (!n || !Lr(o)) && (r[i] = o);
  };
  for (let o = 0, l = e.length; o < l; o++) {
    const i = e[o];
    if (!i || da(i) || (us(i, s), typeof i != "object" || Fr(i) || !Object.getOwnPropertySymbols))
      continue;
    const c = Object.getOwnPropertySymbols(i);
    for (let u = 0; u < c.length; u++) {
      const d = c[u];
      lb.call(i, d) && s(i[d], d);
    }
  }
  return r;
}
const Xg = (e, t, n, { allOwnKeys: r } = {}) => (us(
  t,
  (a, s) => {
    n && Kt(a) ? Object.defineProperty(e, s, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot
      // hijack defineProperty's accessor-vs-data resolution.
      __proto__: null,
      value: Sf(a, n),
      writable: !0,
      enumerable: !0,
      configurable: !0
    }) : Object.defineProperty(e, s, {
      __proto__: null,
      value: a,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
  },
  { allOwnKeys: r }
), e), Gg = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Qg = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), Object.defineProperty(e.prototype, "constructor", {
    __proto__: null,
    value: e,
    writable: !0,
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(e, "super", {
    __proto__: null,
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Zg = (e, t, n, r) => {
  let a, s, o;
  const l = {};
  if (t = t || {}, e == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e), s = a.length; s-- > 0; )
      o = a[s], (!r || r(o, e, t)) && !l[o] && (t[o] = e[o], l[o] = !0);
    e = n !== !1 && jn(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, eb = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, tb = (e) => {
  if (!e) return null;
  if (Fr(e)) return e;
  let t = e.length;
  if (!Number.isSafeInteger(t) || t < 0 || t > 4294967295) return null;
  const n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  let a = e;
  for (; a != null && n.size < t; ) {
    if (r.has(a)) return null;
    r.add(a);
    const o = jn(a);
    if (ko(a, o, a === e)) break;
    Object.getOwnPropertyNames(a).forEach((l) => {
      const i = +l;
      Number.isInteger(i) && i >= 0 && i < t && String(i) === l && Hn(a, l) && n.add(i);
    }), a = o;
  }
  if (n.size !== t) return null;
  const s = new Array(t);
  for (; t-- > 0; )
    s[t] = e[t];
  return s;
}, nb = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && jn(Uint8Array)), rb = (e, t) => {
  const r = (e && e[is]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const s = a.value;
    t.call(e, s[0], s[1]);
  }
}, ab = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, sb = ln("HTMLFormElement"), ob = (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, a) {
  return r.toUpperCase() + a;
}), { propertyIsEnumerable: lb } = Object.prototype, ib = ln("RegExp"), Mf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  us(n, (a, s) => {
    let o;
    (o = t(a, s, e)) !== !1 && (r[s] = o || a);
  }), Object.defineProperties(e, r);
}, ub = (e) => {
  Mf(e, (t, n) => {
    if (Kt(e) && ["arguments", "caller", "callee"].includes(n))
      return !1;
    const r = e[n];
    if (Kt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, cb = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((s) => {
      n[s] = !0;
    });
  };
  return Fr(e) ? r(e) : r(String(e).split(t)), n;
}, db = () => {
}, fb = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function pb(e) {
  return !!(e && Kt(e.append) && e[kf] === "FormData" && e[is]);
}
const mb = (e) => {
  const t = /* @__PURE__ */ new WeakSet(), n = (r) => {
    if (fa(r)) {
      if (t.has(r))
        return;
      if (da(r))
        return r;
      if (!("toJSON" in r)) {
        t.add(r);
        let a;
        if (Vg(r)) {
          a = [];
          for (const s of r) {
            const o = n(s);
            !Lr(o) && a.push(o);
          }
        } else
          a = Fr(r) ? [] : {}, us(r, (s, o) => {
            const l = n(s);
            !Lr(l) && (a[o] = l);
          });
        return t.delete(r), a;
      }
    }
    return r;
  };
  return n(e);
}, hb = ln("AsyncFunction"), vb = (e) => e && (fa(e) || Kt(e)) && Kt(e.then) && Kt(e.catch), Ef = ((e, t) => e ? setImmediate : t ? ((n, r) => (Pr.addEventListener(
  "message",
  ({ source: a, data: s }) => {
    a === Pr && s === n && r.length && r.shift()();
  },
  !1
), (a) => {
  r.push(a), Pr.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", Kt(Pr.postMessage)), yb = typeof queueMicrotask < "u" ? queueMicrotask.bind(Pr) : typeof process < "u" && process.nextTick || Ef, Df = (e) => e != null && Kt(e[is]), gb = (e) => e != null && vi(e, is) && Df(e), P = {
  isArray: Fr,
  isArrayBuffer: Pf,
  isBuffer: da,
  isFormData: Hg,
  isArrayBufferView: Ag,
  isString: Mg,
  isNumber: Eg,
  isBoolean: Dg,
  isObject: fa,
  isPlainObject: Es,
  isEmptyObject: Rg,
  isReadableStream: Yg,
  isRequest: qg,
  isResponse: Wg,
  isHeaders: zg,
  isUndefined: Lr,
  isDate: Cg,
  isFile: Ng,
  isReactNativeBlob: $g,
  isReactNative: Ig,
  isBlob: Fg,
  isRegExp: ib,
  isFunction: Kt,
  isStream: Bg,
  isURLSearchParams: Ug,
  isTypedArray: nb,
  isFileList: Lg,
  forEach: us,
  merge: Vl,
  extend: Xg,
  trim: Kg,
  stripBOM: Gg,
  inherits: Qg,
  toFlatObject: Zg,
  kindOf: yi,
  kindOfTest: ln,
  endsWith: eb,
  toArray: tb,
  forEachEntry: rb,
  matchAll: ab,
  isHTMLForm: sb,
  hasOwnProperty: Hn,
  hasOwnProp: Hn,
  // an alias to avoid ESLint no-prototype-builtins detection
  hasOwnInPrototypeChain: vi,
  getSafeProp: Og,
  toSafeFlatObject: Pg,
  reduceDescriptors: Mf,
  freezeMethods: ub,
  toObjectSet: cb,
  toCamelCase: ob,
  noop: db,
  toFiniteNumber: fb,
  findKey: Jg,
  global: Pr,
  isContextDefined: Af,
  isSpecCompliantForm: pb,
  toJSONObject: mb,
  isAsyncFn: hb,
  isThenable: vb,
  setImmediate: Ef,
  asap: yb,
  isIterable: Df,
  isSafeIterable: gb
}, bb = P.toObjectSet([
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
]), wb = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  let n, r, a;
  return e && e.split(`
`).forEach(function(o) {
    a = o.indexOf(":"), n = o.substring(0, a).trim().toLowerCase(), r = o.substring(a + 1).trim();
    const l = P.hasOwnProp(t, n);
    !n || l && P.hasOwnProp(bb, n) || (n === "set-cookie" ? l ? t[n].push(r) : t[n] = [r] : t[n] = l ? t[n] + ", " + r : r);
  }), t;
};
function _b(e) {
  let t = 0, n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t);
    if (r !== 9 && r !== 32)
      break;
    t += 1;
  }
  for (; n > t; ) {
    const r = e.charCodeAt(n - 1);
    if (r !== 9 && r !== 32)
      break;
    n -= 1;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
const xb = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"), Tb = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function gi(e, t) {
  return P.isArray(e) ? e.map((n) => gi(n, t)) : _b(String(e).replace(t, ""));
}
const Sb = (e) => gi(e, xb), kb = (e) => gi(e, Tb);
function Rf(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return P.forEach(e.toJSON(), (n, r) => {
    t[r] = kb(n);
  }), t;
}
const Hu = Symbol("internals");
function wa(e) {
  return e && String(e).trim().toLowerCase();
}
function Ds(e) {
  return e === !1 || e == null ? e : P.isArray(e) ? e.map(Ds) : Sb(String(e));
}
function Ob(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Pb = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function el(e) {
  let t = 0, n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t);
    if (r !== 9 && r !== 32)
      break;
    t += 1;
  }
  for (; n > t; ) {
    const r = e.charCodeAt(n - 1);
    if (r !== 9 && r !== 32)
      break;
    n -= 1;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
function Ab(e) {
  const t = e.length - 1;
  if (t < 1 || e.charCodeAt(0) !== 34 || e.charCodeAt(t) !== 34)
    return e;
  let n = "";
  for (let r = 1; r < t; r++) {
    const a = e.charCodeAt(r);
    if (a === 34 || a === 92 && (r += 1, r >= t))
      return e;
    n += e[r];
  }
  return n;
}
function Mb(e) {
  const t = /* @__PURE__ */ Object.create(null), n = String(e);
  let r = 0, a = !1, s = !1;
  function o(l) {
    const i = el(n.slice(r, l)), c = i.indexOf("=");
    if (c < 1)
      return;
    const u = el(i.slice(0, c));
    if (!Pb.test(u))
      return;
    const d = u.toLowerCase();
    if (d === "__proto__" || d === "constructor" || d === "prototype")
      return;
    const p = el(i.slice(c + 1));
    t[d] = Ab(p);
  }
  for (let l = 0; l < n.length; l++) {
    const i = n.charCodeAt(l);
    a ? s ? s = !1 : i === 92 ? s = !0 : i === 34 && (a = !1) : i === 34 ? a = !0 : (i === 44 || i === 59) && (o(l), r = l + 1);
  }
  return o(n.length), t;
}
const Eb = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()), Db = "__Proto__", Uu = (e) => e === "__proto__" ? Db : e;
function tl(e, t, n, r, a) {
  if (P.isFunction(r))
    return r.call(e, t, n);
  if (a && (t = n), !!P.isString(t)) {
    if (P.isString(r))
      return t.indexOf(r) !== -1;
    if (P.isRegExp(r))
      return r.test(t);
  }
}
function Rb(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Cb(e, t) {
  const n = P.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: function(a, s, o) {
        return this[r].call(this, t, a, s, o);
      },
      configurable: !0
    });
  });
}
let wt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function s(l, i, c) {
      const u = wa(i);
      if (!u)
        return;
      const d = P.findKey(a, u);
      (!d || a[d] === void 0 || c === !0 || c === void 0 && a[d] !== !1) && (a[Uu(d || i)] = Ds(l));
    }
    const o = (l, i) => P.forEach(l, (c, u) => s(c, u, i));
    if (P.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (P.isString(t) && (t = t.trim()) && !Eb(t))
      o(wb(t), n);
    else if (P.isObject(t) && P.isSafeIterable(t)) {
      let l = /* @__PURE__ */ Object.create(null), i, c;
      for (const u of t) {
        if (!P.isArray(u))
          throw new TypeError("Object iterator must return a key-value pair");
        c = u[0], P.hasOwnProp(l, c) ? (i = l[c], l[c] = P.isArray(i) ? [...i, u[1]] : [i, u[1]]) : l[c] = u[1];
      }
      o(l, n);
    } else
      t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = wa(t), t) {
      const r = P.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return Ob(a);
        if (P.isFunction(n))
          return n.call(this, a, r);
        if (P.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = wa(t), t) {
      const r = P.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || tl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function s(o) {
      if (o = wa(o), o) {
        const l = P.findKey(r, o);
        l && (!n || tl(r, r[l], l, n)) && (delete r[l], a = !0);
      }
    }
    return P.isArray(t) ? t.forEach(s) : s(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || tl(this, this[s], s, t, !0)) && (delete this[s], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = /* @__PURE__ */ Object.create(null);
    return P.forEach(this, (a, s) => {
      const o = P.findKey(r, s);
      if (o) {
        n[o] = Ds(a), delete n[s];
        return;
      }
      const l = Uu(t ? Rb(s) : String(s).trim());
      l !== s && delete n[s], n[l] = Ds(a), r[l] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return P.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && P.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    const t = this.get("set-cookie");
    return P.isArray(t) ? t : t == null || t === !1 ? [] : [t];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static parseParameters(t) {
    return Mb(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((a) => r.set(a)), r;
  }
  static accessor(t) {
    const r = (this[Hu] = this[Hu] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function s(o) {
      const l = wa(o);
      r[l] || (Cb(a, o), r[l] = !0);
    }
    return P.isArray(t) ? t.forEach(s) : s(t), this;
  }
};
wt.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization"
]);
P.reduceDescriptors(wt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
P.freezeMethods(wt);
const eo = "[REDACTED ****]";
function Nb(e) {
  if (P.hasOwnProp(e, "toJSON"))
    return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (P.hasOwnProp(t, "toJSON"))
      return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function $b(e, t) {
  const n = new Set(t.map((s) => String(s).toLowerCase())), r = [], a = (s) => {
    if (s === null || typeof s != "object" || P.isBuffer(s)) return s;
    if (r.indexOf(s) !== -1) return;
    s instanceof wt && (s = s.toJSON()), r.push(s);
    let o;
    if (P.isArray(s))
      o = [], s.forEach((l, i) => {
        const c = a(l);
        P.isUndefined(c) || (o[i] = c);
      });
    else {
      if (!P.isPlainObject(s) && Nb(s))
        return r.pop(), s;
      o = /* @__PURE__ */ Object.create(null);
      for (const [l, i] of Object.entries(s)) {
        const c = n.has(l.toLowerCase()) ? eo : a(i);
        P.isUndefined(c) || (o[l] = c);
      }
    }
    return r.pop(), o;
  };
  return a(e);
}
function Yu(e) {
  try {
    return String(e);
  } catch {
    return "";
  }
}
function Ib(e) {
  return e.errors.map((n) => {
    try {
      return n && n.message ? Yu(n.message) : Yu(n);
    } catch {
      return "";
    }
  }).filter(Boolean).join("; ") || e.name || "AggregateError";
}
const Fb = `
Caused by: `, Bl = Symbol("causeStack");
function Lb(e, t) {
  const n = P.hasOwnProp(e, Bl) && e[Bl];
  return n && t.endsWith(n) ? t.length - n.length : -1;
}
function Vb(e, t) {
  try {
    const n = t && t.stack;
    if (typeof n != "string" || !n)
      return;
    const r = e.stack;
    if (typeof r != "string" || !r)
      return;
    const a = Fb + n;
    e.stack = r + a, Object.defineProperty(e, Bl, { __proto__: null, value: a });
  } catch {
  }
}
let pe = class Cf extends Error {
  static from(t, n, r, a, s, o) {
    let l = t.message;
    !l && P.isArray(t.errors) && t.errors.length && (l = Ib(t));
    const i = new Cf(l, n || t.code, r, a, s);
    return Object.defineProperty(i, "cause", {
      __proto__: null,
      value: t,
      writable: !0,
      enumerable: !1,
      configurable: !0
    }), i.name = t.name, Vb(i, t), t.status != null && i.status == null && (i.status = t.status), o && Object.assign(i, o), i;
  }
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [config] The config.
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   *
   * @returns {Error} The created error.
   */
  constructor(t, n, r, a, s) {
    super(t), Object.defineProperty(this, "message", {
      // Null-proto descriptor so a polluted Object.prototype.get cannot turn
      // this data descriptor into an accessor descriptor on the way in.
      __proto__: null,
      value: t,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }), this.name = "AxiosError", this.isAxiosError = !0, n && (this.code = n), r && (this.config = r), a && (this.request = a), s && (this.response = s, this.status = s.status);
  }
  toJSON() {
    const t = this.config, n = t && P.hasOwnProp(t, "redact") ? t.redact : void 0, r = P.isArray(n) && n.length > 0 ? $b(t, n) : P.toJSONObject(t);
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
      config: r,
      code: this.code,
      status: this.status
    };
  }
};
pe.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
pe.ERR_BAD_OPTION = "ERR_BAD_OPTION";
pe.ECONNABORTED = "ECONNABORTED";
pe.ETIMEDOUT = "ETIMEDOUT";
pe.ECONNREFUSED = "ECONNREFUSED";
pe.ERR_NETWORK = "ERR_NETWORK";
pe.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
pe.ERR_DEPRECATED = "ERR_DEPRECATED";
pe.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
pe.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
pe.ERR_CANCELED = "ERR_CANCELED";
pe.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
pe.ERR_INVALID_URL = "ERR_INVALID_URL";
pe.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const Bb = null, Nf = 100;
function jl(e) {
  return P.isPlainObject(e) || P.isArray(e);
}
function $f(e) {
  return P.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function nl(e, t, n) {
  return e ? e.concat(t).map(function(a, s) {
    return a = $f(a), !n && s ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function jb(e) {
  return P.isArray(e) && !e.some(jl);
}
const Hb = P.toFlatObject(P, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Po(e, t, n) {
  if (!P.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData();
  const r = (k, h) => {
    const b = P.getSafeProp(n, k);
    return P.isUndefined(b) ? h : b;
  }, a = r("metaTokens", !0), s = r("visitor") || m, o = r("dots", !1), l = r("indexes", !1), i = r("Blob") || typeof Blob < "u" && Blob, c = r("maxDepth", Nf), u = i && P.isSpecCompliantForm(t), d = [];
  if (!P.isFunction(s))
    throw new TypeError("visitor must be a function");
  function p(k) {
    if (k === null) return "";
    if (P.isDate(k))
      return k.toISOString();
    if (P.isBoolean(k))
      return k.toString();
    if (!u && P.isBlob(k))
      throw new pe("Blob is not supported. Use a Buffer instead.");
    if (P.isArrayBuffer(k) || P.isTypedArray(k)) {
      if (u && typeof i == "function")
        return new i([k]);
      throw new pe(
        "Blob is not supported. Use a Buffer instead.",
        pe.ERR_NOT_SUPPORT
      );
    }
    return k;
  }
  function v(k) {
    if (k > c)
      throw new pe(
        "Object is too deeply nested (" + k + " levels). Max depth: " + c,
        pe.ERR_FORM_DATA_DEPTH_EXCEEDED
      );
  }
  function w(k, h) {
    if (c === 1 / 0)
      return JSON.stringify(k);
    const b = [];
    return JSON.stringify(k, function(Y, E) {
      if (!P.isObject(E))
        return E;
      for (; b.length && b[b.length - 1] !== this; )
        b.pop();
      return b.push(E), v(h + b.length - 1), E;
    });
  }
  function m(k, h, b) {
    let q = k;
    if (P.isReactNative(t) && P.isReactNativeBlob(k))
      return t.append(nl(b, h, o), p(k)), !1;
    if (k && !b && typeof k == "object") {
      if (P.endsWith(h, "{}"))
        h = a ? h : h.slice(0, -2), k = w(k, 1);
      else if (P.isArray(k) && jb(k) || (P.isFileList(k) || P.endsWith(h, "[]")) && (q = P.toArray(k)))
        return h = $f(h), q.forEach(function(E, _) {
          !(P.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? nl([h], _, o) : l === null ? h : h + "[]",
            p(E)
          );
        }), !1;
    }
    return jl(k) ? !0 : (t.append(nl(b, h, o), p(k)), !1);
  }
  const S = Object.assign(Hb, {
    defaultVisitor: m,
    convertValue: p,
    isVisitable: jl
  });
  function R(k, h, b = 0) {
    if (!P.isUndefined(k)) {
      if (v(b), d.indexOf(k) !== -1)
        throw new Error("Circular reference detected in " + h.join("."));
      d.push(k), P.forEach(k, function(Y, E) {
        (!(P.isUndefined(Y) || Y === null) && s.call(t, Y, P.isString(E) ? E.trim() : E, h, S)) === !0 && R(Y, h ? h.concat(E) : [E], b + 1);
      }), d.pop();
    }
  }
  if (!P.isObject(e))
    throw new TypeError("data must be an object");
  return R(e), t;
}
function qu(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function(r) {
    return t[r];
  });
}
function bi(e, t) {
  this._pairs = [], e && Po(e, this, t);
}
const If = bi.prototype;
If.append = function(t, n) {
  this._pairs.push([t, n]);
};
If.toString = function(t) {
  const n = t ? (r) => t.call(this, r, qu) : qu;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function Ub(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Ff(e, t, n) {
  if (!t)
    return e;
  e = e || "";
  const r = P.isFunction(n) ? {
    serialize: n
  } : n, a = P.getSafeProp(r, "encode") || Ub, s = P.getSafeProp(r, "serialize");
  let o;
  if (s ? o = s(t, r) : o = P.isURLSearchParams(t) ? t.toString() : new bi(t, r).toString(a), o) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
const _a = Symbol("internals");
function Lf(e) {
  return e ? e.length : 0;
}
function Wu(e) {
  if (e)
    for (; e.length && e[e.length - 1] === null; )
      e.pop();
}
function Yb(e) {
  return typeof e == "string" && e !== "" && String(Number(e)) === e ? Number(e) : e;
}
function xa(e, t) {
  const n = e.handlers, r = Lf(n);
  n !== t.handlersRef ? (t.handlersRef = n, t.handlerEntries.clear()) : r !== t.handlersLength && (r ? t.handlerEntries.forEach(function(s, o) {
    n[s.index] !== s.handler && t.handlerEntries.delete(o);
  }) : t.handlerEntries.clear()), t.handlersLength = r;
}
class zu {
  constructor() {
    this.handlers = [], this[_a] = {
      handlersRef: this.handlers,
      handlersLength: this.handlers.length,
      handlerEntries: /* @__PURE__ */ new Map(),
      iterationDepth: 0,
      nextId: 0
    };
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   * @param {Object} options The options for the interceptor, synchronous and runWhen
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    const a = {
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }, s = this[_a];
    this.handlers == null && (this.handlers = []), xa(this, s);
    const o = s.nextId++;
    return this.handlers.push(a), s.handlerEntries.set(o, {
      handler: a,
      index: this.handlers.length - 1
    }), s.handlersLength = this.handlers.length, o;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(t) {
    const n = this[_a];
    xa(this, n);
    const r = Yb(t), a = n.handlerEntries.get(r);
    if (a) {
      if (n.handlerEntries.delete(r), this.handlers[a.index] !== a.handler)
        return;
      this.handlers[a.index] = null, n.iterationDepth || (Wu(this.handlers), n.handlersLength = this.handlers.length);
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = [], xa(this, this[_a]));
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
    const n = this[_a];
    xa(this, n), n.iterationDepth++;
    try {
      P.forEach(this.handlers, function(a) {
        a !== null && t(a);
      });
    } finally {
      --n.iterationDepth || (xa(this, n), Wu(this.handlers), n.handlersLength = Lf(this.handlers));
    }
  }
}
const wi = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1,
  legacyInterceptorReqResOrdering: !0,
  advertiseZstdAcceptEncoding: !1,
  validateStatusUndefinedResolves: !0,
  encodeBasicAuthUsername: !1
}, qb = typeof URLSearchParams < "u" ? URLSearchParams : bi, Wb = typeof FormData < "u" ? FormData : null, zb = typeof Blob < "u" ? Blob : null, Kb = {
  isBrowser: !0,
  classes: {
    URLSearchParams: qb,
    FormData: Wb,
    Blob: zb
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, _i = typeof window < "u" && typeof document < "u", Hl = typeof navigator == "object" && navigator || void 0, Jb = _i && (!Hl || ["ReactNative", "NativeScript", "NS"].indexOf(Hl.product) < 0), Xb = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Gb = _i && window.location.href || "http://localhost", Qb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: _i,
  hasStandardBrowserEnv: Jb,
  hasStandardBrowserWebWorkerEnv: Xb,
  navigator: Hl,
  origin: Gb
}, Symbol.toStringTag, { value: "Module" })), yt = {
  ...Qb,
  ...Kb
};
function Zb(e, t) {
  return Po(e, new yt.classes.URLSearchParams(), {
    visitor: function(n, r, a, s) {
      return yt.isNode && P.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...t
  });
}
const Ku = Nf;
function Vf(e) {
  if (e > Ku)
    throw new pe(
      "FormData field is too deeply nested (" + e + " levels). Max depth: " + Ku,
      pe.ERR_FORM_DATA_DEPTH_EXCEEDED
    );
}
function e0(e) {
  const t = [], n = /[^.[\]]+|\[([^.[\]]*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    Vf(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]);
  return t;
}
function Bf(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let s;
  for (r = 0; r < a; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function jf(e) {
  if (!P.isArray(e)) return e;
  const t = Object.keys(e);
  return t.length !== e.length || t.some((n, r) => n !== String(r)) ? Bf(e) : e;
}
function t0(e) {
  const t = [e];
  for (; t.length; ) {
    const n = t.pop();
    Object.keys(n).forEach((r) => {
      const a = n[r] = jf(n[r]);
      (P.isArray(a) || P.isPlainObject(a)) && t.push(a);
    });
  }
  return e;
}
function Hf(e) {
  function t(n, r, a, s) {
    Vf(s);
    let o = n[s++];
    if (o === "__proto__") return !0;
    const l = Number.isFinite(+o), i = s >= n.length;
    return o = !o && P.isArray(a) ? a.length : o, i ? (P.hasOwnProp(a, o) ? (a[o] = jf(a[o]), a[o] = P.isArray(a[o]) ? a[o].concat(r) : [a[o], r]) : a[o] = r, !l) : ((!P.hasOwnProp(a, o) || !P.isObject(a[o])) && (a[o] = []), t(n, r, a[o], s) && P.isArray(a[o]) && (a[o] = Bf(a[o])), !l);
  }
  if (P.isFormData(e) && P.isFunction(e.entries)) {
    const n = {};
    return P.forEachEntry(e, (r, a) => {
      t(e0(r), a, n, 0);
    }), t0(n);
  }
  return null;
}
const Uf = Object.freeze([
  "get",
  "delete",
  "head",
  "options",
  "post",
  "put",
  "patch",
  "purge",
  "link",
  "unlink",
  "query"
]), Wr = (e, t) => e != null && P.hasOwnProp(e, t) ? e[t] : void 0;
function n0(e, t, n) {
  if (P.isString(e))
    try {
      return (t || JSON.parse)(e), P.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const cs = {
  transitional: wi,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function(t, n) {
      const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, s = P.isObject(t);
      if (s && P.isHTMLForm(t) && (t = new FormData(t)), P.isFormData(t))
        return a ? JSON.stringify(Hf(t)) : t;
      if (P.isArrayBuffer(t) || P.isBuffer(t) || P.isStream(t) || P.isFile(t) || P.isBlob(t) || P.isReadableStream(t))
        return t;
      if (P.isArrayBufferView(t))
        return t.buffer;
      if (P.isURLSearchParams(t))
        return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
      let l;
      if (s) {
        const i = Wr(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return Zb(t, i).toString();
        if ((l = P.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const c = Wr(this, "env"), u = c && c.FormData;
          return Po(
            l ? { "files[]": t } : t,
            u && new u(),
            i
          );
        }
      }
      return s || a ? (n.setContentType("application/json", !1), n0(t)) : t;
    }
  ],
  transformResponse: [
    function(t) {
      const n = Wr(this, "transitional") || cs.transitional, r = n && n.forcedJSONParsing, a = Wr(this, "responseType"), s = a === "json";
      if (P.isResponse(t) || P.isReadableStream(t))
        return t;
      if (t && P.isString(t) && (r && !a || s)) {
        const l = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t, Wr(this, "parseReviver"));
        } catch (i) {
          if (l)
            throw i.name === "SyntaxError" ? pe.from(i, pe.ERR_BAD_RESPONSE, this, null, Wr(this, "response")) : i;
        }
      }
      return t;
    }
  ],
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
    FormData: yt.classes.FormData,
    Blob: yt.classes.Blob
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
P.forEach(Uf, (e) => {
  cs.headers[e] = {};
});
function rl(e, t) {
  const n = this || cs, r = t || n, a = wt.from(r.headers);
  let s = r.data;
  return P.forEach(e, function(l) {
    s = l.call(n, s, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), s;
}
function Yf(e) {
  return !!(e && e.__CANCEL__);
}
let ds = class extends pe {
  /**
   * A `CanceledError` is an object that is thrown when an operation is canceled.
   *
   * @param {string=} message The message.
   * @param {Object=} config The config.
   * @param {Object=} request The request.
   *
   * @returns {CanceledError} The created error.
   */
  constructor(t, n, r) {
    super(t ?? "canceled", pe.ERR_CANCELED, n, r), this.name = "CanceledError", this.__CANCEL__ = !0;
  }
};
function qf(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new pe(
    "Request failed with status code " + n.status,
    n.status >= 400 && n.status < 500 ? pe.ERR_BAD_REQUEST : pe.ERR_BAD_RESPONSE,
    n.config,
    n.request,
    n
  ));
}
const r0 = /[\t\n\r]/g;
function Wf(e) {
  if (typeof e != "string")
    return e;
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; )
    t++;
  return e.slice(t).replace(r0, "");
}
function al(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return t && t[1].toLowerCase() || "";
}
const Ju = (e) => {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, zf = yt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, a, s, o) {
      if (typeof document > "u") return;
      const l = [`${e}=${encodeURIComponent(t)}`];
      P.isNumber(n) && l.push(`expires=${new Date(n).toUTCString()}`), P.isString(r) && l.push(`path=${r}`), P.isString(a) && l.push(`domain=${a}`), s === !0 && l.push("secure"), P.isString(o) && l.push(`SameSite=${o}`), document.cookie = l.join("; ");
    },
    read(e) {
      if (typeof document > "u") return null;
      const t = document.cookie;
      if (!t) return null;
      const n = t.split(";");
      for (let r = 0; r < n.length; r++) {
        const a = n[r].replace(/^\s+/, ""), s = a.indexOf("=");
        if (s !== -1 && a.slice(0, s) === e)
          return Ju(a.slice(s + 1));
      }
      return null;
    },
    async readAsync(e) {
      try {
        const t = typeof window < "u" && window.cookieStore;
        if (t && P.isFunction(t.get)) {
          const n = await t.get(e);
          return n ? Ju(n.value) : null;
        }
      } catch {
      }
      return this.read(e);
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5, "/");
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
    async readAsync() {
      return null;
    },
    remove() {
    }
  }
);
function a0(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, s = 0, o;
  return t = t !== void 0 ? t : 1e3, function(i) {
    const c = Date.now(), u = r[s];
    o || (o = c), n[a] = i, r[a] = c;
    let d = s, p = 0;
    for (; d !== a; )
      p += n[d++], d = d % e;
    if (a = (a + 1) % e, a === s && (s = (s + 1) % e), c - o < t)
      return;
    const v = u && c - u;
    return v ? Math.round(p * 1e3 / v) : void 0;
  };
}
function s0(e, t) {
  let n = 0, r = 1e3 / t, a, s;
  const o = (u, d = Date.now()) => {
    n = d, a = null, s && (clearTimeout(s), s = null), e(...u);
  };
  return [(...u) => {
    const d = Date.now(), p = d - n;
    p >= r ? o(u, d) : (a = u, s || (s = setTimeout(() => {
      s = null, o(a);
    }, r - p)));
  }, () => a && o(a), (...u) => o(u)];
}
const to = (e, t, n = 3) => {
  let r = 0;
  const a = a0(50, 250);
  return s0((s) => {
    if (!s || !P.isNumber(s.loaded))
      return;
    const o = s.loaded, l = s.lengthComputable ? s.total : void 0, i = Math.max(0, l != null ? Math.min(o, l) : o), c = Math.max(0, i - r), u = a(c);
    r = Math.max(r, i);
    const d = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: c,
      rate: u || void 0,
      estimated: u && l ? (l - i) / u : void 0,
      event: s,
      lengthComputable: l != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, n);
}, Xu = (e, t) => {
  const n = e != null;
  return [
    (r) => t[0]({
      lengthComputable: n,
      total: e,
      loaded: r
    }),
    t[1]
  ];
}, Gu = (e, t = P.asap) => (...n) => t(() => e(...n)), o0 = yt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e) => (t) => (t = new URL(t, document.baseURI || yt.origin), e.protocol === t.protocol && e.host === t.host && e.port === t.port))(new URL(yt.origin)) : () => !0;
function l0(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function i0(e, t) {
  if (!t)
    return e;
  let n = e.length;
  for (; n > 0 && e.charCodeAt(n - 1) === 47; )
    n--;
  return e.slice(0, n) + "/" + t.replace(/^\/+/, "");
}
const u0 = /^https?:(?!\/\/)/i;
function c0(e) {
  return e && e.replace(/(^|&)([^=&]*=)?[^&]+/g, (t, n, r = "") => `${n}${r}${eo}`);
}
function d0(e) {
  const t = e.replace(/^(https?:\/{0,2})[^/?#]*@/i, `$1${eo}@`), n = t.indexOf("#"), a = (n === -1 ? t : t.slice(0, n)).replace(
    /([?&][^=&#]*=)[^&#]*/g,
    `$1${eo}`
  );
  return n === -1 ? a : `${a}#${c0(t.slice(n + 1))}`;
}
function Qu(e, t) {
  if (typeof e == "string") {
    const n = Wf(e);
    if (u0.test(n))
      throw new pe(
        `Invalid URL ${JSON.stringify(d0(n))}: missing "//" after protocol`,
        pe.ERR_INVALID_URL,
        t
      );
  }
}
function Kf(e, t, n, r) {
  Qu(t, r);
  let a = !l0(t);
  return e && (a || n === !1) ? (Qu(e, r), i0(e, t)) : t;
}
function f0(e) {
  const t = [{ value: e }], n = /* @__PURE__ */ new WeakSet(), r = /* @__PURE__ */ new WeakSet();
  for (; t.length; ) {
    const { value: a, done: s } = t.pop();
    if (!P.isPlainObject(a) && !P.isArray(a)) continue;
    if (s) {
      n.delete(a);
      continue;
    }
    if (n.has(a))
      throw new pe(
        "Circular reference detected in params",
        pe.ERR_BAD_OPTION_VALUE
      );
    if (r.has(a)) continue;
    r.add(a), n.add(a), t.push({ value: a, done: !0 });
    const o = Object.keys(a);
    Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor && Object.getOwnPropertySymbols(a).forEach((l) => {
      const i = Object.getOwnPropertyDescriptor(a, l);
      i && i.enumerable && o.push(l);
    }), o.forEach((l) => {
      if (l === "__proto__" || l === "constructor" || l === "prototype") {
        const i = Object.getOwnPropertyDescriptor(a, l);
        i && P.hasOwnProp(i, "value") && t.push({ value: i.value });
      } else
        t.push({ value: a[l] });
    });
  }
}
const Zu = (e) => e instanceof wt ? { ...e } : e, Ul = (e) => Object.getOwnPropertySymbols && Object.getOwnPropertyDescriptor ? Object.keys(e).concat(
  Object.getOwnPropertySymbols(e).filter((t) => {
    const n = Object.getOwnPropertyDescriptor(e, t);
    return n && n.enumerable;
  })
) : Object.keys(e);
function p0(e, t) {
  const n = [], r = /* @__PURE__ */ new WeakMap(), a = {};
  function s(l, i) {
    if (!P.isPlainObject(i))
      return P.isArray(i) ? i.slice() : i;
    const c = P.isPlainObject(l) ? l : a;
    let u = r.get(i);
    if (u || (u = /* @__PURE__ */ new WeakMap(), r.set(i, u)), u.has(c)) return u.get(c);
    const d = {};
    return u.set(c, d), n.push({ base: c, source: i, result: d }), d;
  }
  const o = P.isUndefined(t) ? s(void 0, e) : s(e, t);
  for (; n.length; ) {
    const { base: l, source: i, result: c } = n.pop(), u = new Set(Ul(l)), d = new Set(Ul(i));
    (/* @__PURE__ */ new Set([...u, ...d])).forEach((v) => {
      if (v === "__proto__" || v === "constructor" || v === "prototype") return;
      const w = d.has(v), m = w ? i[v] : void 0, S = (!w || P.isPlainObject(m)) && u.has(v) ? l[v] : void 0;
      c[v] = w ? s(S, m) : s(void 0, S);
    });
  }
  return f0(o), o;
}
function cr(e, t, n, r) {
  return P.isPlainObject(e) && P.isPlainObject(t) ? P.merge.call({ caseless: r }, e, t) : P.isPlainObject(t) ? P.merge({}, t) : P.isArray(t) ? t.slice() : t;
}
function Jf(e, t, n, r) {
  if (P.isUndefined(t)) {
    if (!P.isUndefined(e))
      return cr(void 0, e, n, r);
  } else return cr(e, t, n, r);
}
function sl(e, t) {
  if (!P.isUndefined(t))
    return cr(void 0, t);
}
function Qe(e, t) {
  if (P.isUndefined(t)) {
    if (!P.isUndefined(e))
      return cr(void 0, e);
  } else return cr(void 0, t);
}
function m0(e, t, n) {
  const r = P.hasOwnProp(t, "transitional") ? t.transitional : void 0;
  if (!P.isUndefined(r))
    if (P.isPlainObject(r)) {
      if (P.hasOwnProp(r, n))
        return r[n];
    } else
      return;
  const a = P.hasOwnProp(e, "transitional") ? e.transitional : void 0;
  if (P.isPlainObject(a) && P.hasOwnProp(a, n))
    return a[n];
}
function Yl(e, t, n, r, a) {
  if (P.hasOwnProp(a, n))
    return cr(e, t);
  if (P.hasOwnProp(r, n))
    return cr(void 0, e);
}
function h0(e, t, n) {
  return Jf(Zu(e), Zu(t), n, !0);
}
const v0 = Object.freeze({
  __proto__: null,
  value: Object.prototype.hasOwnProperty,
  enumerable: !1,
  writable: !0,
  configurable: !0
}), ec = {
  url: sl,
  method: sl,
  data: sl,
  baseURL: Qe,
  transformRequest: Qe,
  transformResponse: Qe,
  params: p0,
  paramsSerializer: Qe,
  timeout: Qe,
  timeoutErrorMessage: Qe,
  withCredentials: Qe,
  withXSRFToken: Qe,
  adapter: Qe,
  responseType: Qe,
  xsrfCookieName: Qe,
  xsrfHeaderName: Qe,
  onUploadProgress: Qe,
  onDownloadProgress: Qe,
  decompress: Qe,
  maxContentLength: Qe,
  maxBodyLength: Qe,
  beforeRedirect: Qe,
  transport: Qe,
  httpAgent: Qe,
  httpsAgent: Qe,
  cancelToken: Qe,
  socketPath: Qe,
  allowedSocketPaths: Qe,
  responseEncoding: Qe,
  validateStatus: Yl,
  headers: h0
};
function Vr(e, t) {
  e = e || {}, t = t || {};
  const n = /* @__PURE__ */ Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", v0);
  const r = Ul({ ...e, ...t });
  for (let a = 0, s = r.length; a < s; a++) {
    const o = r[a];
    if (o === "__proto__" || o === "constructor" || o === "prototype") continue;
    const l = P.hasOwnProp(ec, o) ? ec[o] : Jf, i = P.hasOwnProp(e, o) ? e[o] : void 0, c = P.hasOwnProp(t, o) ? t[o] : void 0, u = l === Yl ? l(i, c, o, e, t) : l(i, c, o);
    P.isUndefined(u) && l !== Yl || (n[o] = u);
  }
  return P.hasOwnProp(t, "validateStatus") && P.isUndefined(t.validateStatus) && m0(e, t, "validateStatusUndefinedResolves") === !1 && (P.hasOwnProp(e, "validateStatus") ? n.validateStatus = cr(void 0, e.validateStatus) : delete n.validateStatus), n;
}
const y0 = ["content-type", "content-length"];
function g0(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, a]) => {
    y0.includes(r.toLowerCase()) && e.set(r, a);
  });
}
const tc = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), b0 = (e) => zf.read(e);
function Xf(e, t = b0) {
  const n = Vr({}, e), r = (v) => P.hasOwnProp(n, v) ? n[v] : void 0, a = r("data");
  let s = r("withXSRFToken");
  const o = r("xsrfHeaderName"), l = r("xsrfCookieName");
  let i = r("headers");
  const c = r("auth"), u = r("baseURL"), d = r("allowAbsoluteUrls"), p = r("url");
  if (n.headers = i = wt.from(i), n.url = Ff(
    Kf(u, p, d, n),
    r("params"),
    r("paramsSerializer")
  ), c) {
    const v = P.getSafeProp(c, "username") || "", w = P.getSafeProp(c, "password") || "", m = r("transitional"), S = m && P.hasOwnProp(m, "encodeBasicAuthUsername") && m.encodeBasicAuthUsername === !0;
    try {
      i.set(
        "Authorization",
        // Preserve legacy username bytes unless the caller opts in to UTF-8.
        "Basic " + btoa(
          (S ? tc(v) : v) + ":" + (w ? tc(w) : "")
        )
      );
    } catch (R) {
      throw pe.from(R, pe.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (P.isFormData(a)) {
    const v = P.getSafeProp(a, "getHeaders");
    yt.hasStandardBrowserEnv || yt.hasStandardBrowserWebWorkerEnv || P.isReactNative(a) ? i.setContentType(void 0) : P.isFunction(v) && g0(i, v.call(a), r("formDataHeaderPolicy"));
  }
  if (yt.hasStandardBrowserEnv && (P.isFunction(s) && (s = s(n)), s === !0 || s == null && o0(n.url))) {
    const w = o && l && t(l);
    w && i.set(o, w);
  }
  return n;
}
const w0 = typeof XMLHttpRequest < "u", _0 = w0 && function(e) {
  return new Promise(function(n, r) {
    let a;
    try {
      const _ = yt.hasStandardBrowserEnv && typeof window < "u" && window.cookieStore;
      a = _ && P.isFunction(_.get);
    } catch {
    }
    let s;
    const o = Xf(
      e,
      a ? (_) => (s = _, null) : void 0
    );
    let l = o.data;
    const i = wt.from(o.headers).normalize();
    let { responseType: c, onUploadProgress: u, onDownloadProgress: d } = o, p, v, w, m, S, R, k;
    function h() {
      clearTimeout(v);
      try {
        S && S();
      } catch (_) {
        setTimeout(() => {
          throw _;
        });
      }
      try {
        R && R();
      } catch (_) {
        setTimeout(() => {
          throw _;
        });
      }
      b && (m && b.removeEventListener("progress", m), b.upload && (w && b.upload.removeEventListener("progress", w), S && b.upload.removeEventListener("loadend", S))), o.cancelToken && o.cancelToken.unsubscribe(p), o.signal && o.signal.removeEventListener("abort", p);
    }
    let b = new XMLHttpRequest();
    b.open(o.method.toUpperCase(), o.url, !0), b.timeout = o.timeout;
    function q(_) {
      if (!b)
        return;
      if (b.status === 0 && (al(Wf(o.url)) || al(yt.origin)) !== "file" && !(b.responseURL && b.responseURL.startsWith("file:"))) {
        r(new pe("Request aborted", pe.ECONNABORTED, e, b)), h(), b = null;
        return;
      }
      try {
        _ ? k && k(_) : R && R();
      } catch (F) {
        setTimeout(() => {
          throw F;
        });
      }
      if (!b)
        return;
      const M = wt.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), H = {
        data: !c || c === "text" || c === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: M,
        config: e,
        request: b
      };
      qf(
        function(Z) {
          n(Z), h();
        },
        function(Z) {
          r(Z), h();
        },
        H
      ), b = null;
    }
    if ("onloadend" in b ? b.onloadend = q : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.startsWith("file:")) || setTimeout(q);
    }, b.onabort = function() {
      b && (r(new pe("Request aborted", pe.ECONNABORTED, e, b)), h(), b = null);
    }, b.onerror = function(M) {
      const C = M && M.message ? M.message : "Network Error", H = new pe(C, pe.ERR_NETWORK, e, b);
      H.event = M || null, r(H), h(), b = null;
    }, b.ontimeout = function() {
      if (!b) return;
      let M = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const C = o.transitional || wi;
      o.timeoutErrorMessage && (M = o.timeoutErrorMessage), r(
        new pe(
          M,
          C.clarifyTimeoutError ? pe.ETIMEDOUT : pe.ECONNABORTED,
          e,
          b
        )
      ), h(), b = null;
    }, l === void 0 && i.setContentType(null), P.isUndefined(o.withCredentials) || (b.withCredentials = !!o.withCredentials), c && c !== "json" && (b.responseType = o.responseType), d && ([m, R, k] = to(
      d,
      !0
    ), b.addEventListener("progress", m)), u && b.upload && ([w, S] = to(u), b.upload.addEventListener("progress", w), b.upload.addEventListener("loadend", S)), o.cancelToken || o.signal) {
      if (p = (_) => {
        if (!b)
          return;
        r(!_ || _.type ? new ds(null, e, b) : _);
        const M = b;
        h(), b = null, M.abort();
      }, o.cancelToken && o.cancelToken.subscribe(p), !b) return;
      o.signal && (o.signal.aborted ? p() : o.signal.addEventListener("abort", p));
    }
    if (!b) return;
    const Y = al(o.url);
    if (Y && !yt.protocols.includes(Y)) {
      r(
        new pe(
          "Unsupported protocol " + Y + ":",
          pe.ERR_BAD_REQUEST,
          e
        )
      ), h();
      return;
    }
    const E = () => {
      b && ("setRequestHeader" in b && P.forEach(
        Rf(i),
        function(M, C) {
          b.setRequestHeader(C, M);
        }
      ), b.send(l || null));
    };
    if (s) {
      const _ = typeof performance < "u" && P.isFunction(performance.now) ? () => performance.now() : Date.now, M = b.timeout > 0 ? _() + Number(b.timeout) : void 0, C = () => {
        if (!b) return;
        const H = b;
        H.ontimeout(), H.abort();
      };
      if (M !== void 0) {
        const H = () => {
          const F = M - _();
          F > 0 ? v = setTimeout(H, Math.min(F, 2147483647)) : C();
        };
        H();
      }
      zf.readAsync(s).then((H) => {
        if (b) {
          if (M !== void 0 && _() >= M) {
            C();
            return;
          }
          if (H) {
            const F = P.hasOwnProp(o, "xsrfHeaderName") && o.xsrfHeaderName;
            i.set(F, H);
          }
          E();
        }
      }).catch((H) => {
        b && (r(pe.from(H, null, e, b)), h(), b = null);
      });
    } else
      E();
  });
}, x0 = (e, t) => {
  if (e = e ? e.filter(Boolean) : [], !t && !e.length)
    return;
  const n = new AbortController();
  let r = !1;
  const a = function(i) {
    if (!r) {
      r = !0, o();
      const c = i instanceof Error ? i : this.reason;
      n.abort(
        c instanceof pe ? c : new ds(c instanceof Error ? c.message : c)
      );
    }
  };
  let s = t && setTimeout(() => {
    s = null, a(new pe(`timeout of ${t}ms exceeded`, pe.ETIMEDOUT));
  }, t);
  const o = () => {
    e && (s && clearTimeout(s), s = null, e.forEach((i) => {
      const c = P.getSafeProp(i, "unsubscribe");
      P.isFunction(c) ? c.call(i, a) : i.removeEventListener("abort", a);
    }), e = null);
  };
  e.forEach((i) => {
    if (!r) {
      if (i.aborted) {
        a.call(i);
        return;
      }
      i.addEventListener("abort", a, { once: !0 });
    }
  });
  const { signal: l } = n;
  return l.unsubscribe = () => P.asap(o), l;
}, T0 = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, a;
  for (; r < n; )
    a = r + t, yield e.slice(r, a), r = a;
}, S0 = async function* (e, t) {
  for await (const n of k0(e))
    yield* T0(n, t);
}, k0 = async function* (e) {
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
}, nc = (e, t, n, r) => {
  const a = S0(e, t);
  let s = 0, o, l = (i) => {
    o || (o = !0, r && r(i));
  };
  return new ReadableStream(
    {
      async pull(i) {
        try {
          const { done: c, value: u } = await a.next();
          if (c) {
            l(), i.close();
            return;
          }
          let d = u.byteLength;
          if (n) {
            let p = s += d;
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
    },
    {
      highWaterMark: 2
    }
  );
}, Zn = `\r
`, rc = (e) => String(e).replace(/\r\n|\r|\n/g, Zn), ac = (e) => String(e).replace(
  /[\r\n"]/g,
  (t) => t === "\r" ? "%0D" : t === `
` ? "%0A" : "%22"
), Ta = (e, t) => {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    const a = e.charCodeAt(r);
    t && (a === 13 || a === 10) ? (a === 13 && e.charCodeAt(r + 1) === 10 && r++, n += 2) : a < 128 ? n++ : a < 2048 ? n += 2 : a >= 55296 && a <= 56319 && e.charCodeAt(r + 1) >= 56320 && e.charCodeAt(r + 1) <= 57343 ? (n += 4, r++) : n += 3;
  }
  return n;
};
class Rs extends TypeError {
  constructor(t, n) {
    super(t), this.name = "FormDataError", this.reason = n;
  }
}
function O0(e, t, n, r, a) {
  if (!P.isFunction(t))
    throw new Rs("Blob is not supported", "blob");
  if (!P.isString(a) || !/^[A-Za-z0-9'()+_,./:=? -]{1,70}$/.test(a) || / $/.test(a))
    throw new Rs("Invalid multipart boundary", "boundary");
  const s = "--" + a + "--" + Zn;
  let o = s.length;
  const l = [], i = (u) => {
    if (o + u > n) throw r();
  };
  i(0);
  for (const [u, d] of e) {
    const p = P.isString(d), v = p ? Ta(d, !0) : d.size;
    if (!Number.isFinite(v) || v < 0)
      throw new Rs("Unsupported FormData part size", "part");
    i(
      v + Ta(u, !0) + (!p && d.name ? Ta(d.name, !1) : 0) + (!p && d.type ? Ta(d.type, !1) : 0)
    );
    let w = "--" + a + Zn + 'Content-Disposition: form-data; name="' + ac(rc(u)) + '"';
    p || (w += '; filename="' + ac(P.isString(d.name) ? d.name : "blob") + '"' + Zn + "Content-Type: " + String(d.type || "application/octet-stream").replace(/[\r\n]/g, "")), w += Zn + Zn;
    const m = Ta(w, !1) + v + Zn.length;
    i(m), o += m, l.push({ header: w, value: d, isString: p });
  }
  const c = [];
  for (const u of l)
    c.push(u.header, u.isString ? rc(u.value) : u.value, Zn);
  return c.push(s), new t(c, { type: "multipart/form-data; boundary=" + a });
}
function P0(e, t, n, r, a) {
  if (!P.isFunction(t))
    throw new pe("Blob is not supported", pe.ERR_NOT_SUPPORT);
  if (a === void 0)
    if (P.isFunction(yt.generateString))
      a = "axios-" + yt.generateString(36, "0123456789abcdef");
    else {
      const s = P.global.crypto;
      if (!s || !P.isFunction(s.getRandomValues))
        throw new pe("Random byte generation is not supported", pe.ERR_NOT_SUPPORT);
      const o = new Uint8Array(18);
      s.getRandomValues(o), a = "axios-" + Array.from(o, (l) => ("0" + l.toString(16)).slice(-2)).join("");
    }
  try {
    return O0(e, t, n, r, a);
  } catch (s) {
    if (s instanceof Rs) {
      const o = s.reason === "boundary" ? pe.ERR_BAD_OPTION_VALUE : pe.ERR_BAD_REQUEST;
      throw new pe(s.message, o);
    }
    throw s;
  }
}
const sc = (e) => e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102, Gf = (e, t, n) => t + 2 < n && sc(e.charCodeAt(t + 1)) && sc(e.charCodeAt(t + 2)), oc = (e) => e <= 57 ? e - 48 : (e & 223) - 55, A0 = (e) => e >= 65 && e <= 90 || // A-Z
e >= 97 && e <= 122 || // a-z
e >= 48 && e <= 57 || // 0-9
e === 43 || // +
e === 47 || // /
e === 45 || // - (base64url)
e === 95, M0 = (e) => e === 9 || e === 10 || e === 12 || e === 13 || e === 32, E0 = (e) => {
  const t = Math.floor(e / 4), n = e % 4;
  return t * 3 + (n === 2 ? 1 : n === 3 ? 2 : 0);
}, D0 = (e) => {
  const t = e.length;
  let n = 0;
  return t > 0 && e.charCodeAt(t - 1) === 61 && (n++, t > 1 && e.charCodeAt(t - 2) === 61 && n++), Math.floor((t - n) * 3 / 4);
}, R0 = (e) => {
  const t = e.length;
  let n = 0, r = 0, a = !1;
  for (let s = 0; s < t; s++) {
    let o = e.charCodeAt(s);
    if (o === 37 && Gf(e, s, t) && (o = oc(e.charCodeAt(s + 1)) * 16 + oc(e.charCodeAt(s + 2)), s += 2), !M0(o)) {
      if (o === 61) {
        r++;
        continue;
      }
      if (!A0(o) || r > 0) {
        a = !0;
        continue;
      }
      n++;
    }
  }
  return a || r > 2 || r > 0 && (n + r) % 4 !== 0 || n % 4 === 1 ? D0(e) : E0(n);
}, C0 = (e, t, n) => {
  if (!e || typeof e != "string" || !/^data:/i.test(e)) return 0;
  const r = e.indexOf(",");
  if (r < 0) return 0;
  const a = e.slice(5, r), s = e.slice(r + 1);
  if (n.test(a))
    return t(s);
  let l = 0;
  for (let i = 0, c = s.length; i < c; i++) {
    const u = s.charCodeAt(i);
    if (u === 37 && Gf(s, i, c))
      l += 1, i += 2;
    else if (u < 128)
      l += 1;
    else if (u < 2048)
      l += 2;
    else if (u >= 55296 && u <= 56319 && i + 1 < c) {
      const d = s.charCodeAt(i + 1);
      d >= 56320 && d <= 57343 ? (l += 4, i++) : l += 3;
    } else
      l += 3;
  }
  return l;
};
function N0(e) {
  const t = typeof e == "string" ? e.indexOf("#") : -1;
  return C0(
    t === -1 ? e : e.slice(0, t),
    R0,
    /; *base64[\t\n\f\r ]*$/i
  );
}
const xi = "1.21.1", lc = 64 * 1024, ic = {
  cache: "default",
  redirect: "follow",
  referrer: "about:client",
  referrerPolicy: "",
  mode: "cors",
  integrity: "",
  keepalive: !1,
  priority: "auto",
  window: null
}, { isFunction: xs } = P, $0 = (e) => encodeURIComponent(e).replace(
  /%([0-9A-F]{2})/gi,
  (t, n) => String.fromCharCode(parseInt(n, 16))
), uc = (e) => {
  if (!P.isString(e))
    return e;
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}, Ts = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, I0 = (e) => {
  const t = e.indexOf("://");
  let n = e;
  return t !== -1 && (n = n.slice(t + 3)), n.includes("@") || n.includes(":");
}, F0 = (e) => {
  const t = P.global !== void 0 && P.global !== null ? P.global : globalThis, { ReadableStream: n, TextEncoder: r } = t;
  e = P.merge.call(
    {
      skipUndefined: !0
    },
    {
      Request: t.Request,
      Response: t.Response,
      Blob: t.Blob
    },
    e
  );
  const a = P.hasOwnProp(e, "fetch") ? e.fetch : void 0, { Request: s, Response: o, Blob: l } = e, i = a ? xs(a) : typeof fetch == "function", c = xs(s), u = xs(o);
  if (!i)
    return !1;
  const d = i && xs(n), p = i && (typeof r == "function" ? /* @__PURE__ */ ((h) => (b) => h.encode(b))(new r()) : async (h) => new Uint8Array(await new s(h).arrayBuffer())), v = c && d && Ts(() => {
    let h = !1;
    const b = new s(yt.origin, {
      body: new n(),
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }), q = b.headers.has("Content-Type");
    return b.body != null && b.body.cancel(), h && !q;
  }), w = u && d && Ts(() => P.isReadableStream(new o("").body)), m = Object.assign(/* @__PURE__ */ Object.create(null), ic);
  c && !Ts(() => new s(yt.origin, m)) && (delete m.cache, Ts(() => new s(yt.origin, m)) || (m.cache = ic.cache));
  const S = {
    stream: w && ((h) => h.body)
  };
  i && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !S[h] && (S[h] = (b, q) => {
      let Y = b && b[h];
      if (Y)
        return Y.call(b);
      throw new pe(
        `Response type '${h}' is not supported`,
        pe.ERR_NOT_SUPPORT,
        q
      );
    });
  });
  const R = async (h) => {
    if (h == null)
      return 0;
    if (P.isBlob(h))
      return h.size;
    if (P.isArrayBufferView(h) || P.isArrayBuffer(h))
      return h.byteLength;
    if (P.isURLSearchParams(h) && (h = h + ""), P.isString(h))
      return (await p(h)).byteLength;
  }, k = async (h, b) => {
    const q = P.toFiniteNumber(h.getContentLength());
    return q ?? R(b);
  };
  return async (h) => {
    let {
      url: b,
      method: q,
      data: Y,
      signal: E,
      cancelToken: _,
      timeout: M,
      onDownloadProgress: C,
      onUploadProgress: H,
      responseType: F,
      headers: Z,
      withCredentials: j = "same-origin",
      fetchOptions: T,
      maxContentLength: L,
      maxBodyLength: y,
      maxRedirects: X
    } = Xf(h);
    const ie = P.isNumber(L) && L > -1, ve = P.isNumber(y) && y > -1, _e = (J) => P.hasOwnProp(h, J) ? h[J] : void 0;
    let V = a || fetch;
    F = F ? (F + "").toLowerCase() : "text";
    let te = x0(
      [E, _ && _.toAbortSignal()],
      M
    ), x = null;
    const G = te && te.unsubscribe && (() => {
      te.unsubscribe();
    });
    let fe, I = null, ye = null;
    const Pe = () => new pe(
      "Request body larger than maxBodyLength limit",
      pe.ERR_BAD_REQUEST,
      h,
      x
    );
    try {
      let J;
      const g = _e("auth");
      if (g) {
        const ce = P.getSafeProp(g, "username") || "", xe = P.getSafeProp(g, "password") || "";
        J = {
          username: ce,
          password: xe
        };
      }
      let f;
      if (I0(b)) {
        if (f = new URL(b, yt.origin), !J && (f.username || f.password)) {
          const ce = uc(f.username), xe = uc(f.password);
          J = {
            username: ce,
            password: xe
          };
        }
        (f.username || f.password) && (f.username = "", f.password = "", b = f.href);
      }
      if (J && (Z.delete("authorization"), Z.set(
        "Authorization",
        "Basic " + btoa($0((J.username || "") + ":" + (J.password || "")))
      )), ie && f && f.protocol === "data:" && N0(f.href) > L)
        throw new pe(
          "maxContentLength size of " + L + " exceeded",
          pe.ERR_BAD_RESPONSE,
          h,
          x
        );
      const O = P.isSpecCompliantForm(Y) && wt.from(_e("headers")).getContentType();
      let B;
      if (P.isString(O) && /^multipart\/form-data(?:\s*;|$)/i.test(O.trim())) {
        const ce = wt.parseParameters(O);
        P.hasOwnProp(ce, "boundary") && (B = ce.boundary);
      }
      if (P.isSpecCompliantForm(Y) && q !== "get" && q !== "head" && (ve || H && v || B !== void 0) && (Y = P0(
        Y,
        l,
        ve ? y : 1 / 0,
        Pe,
        B
      ), Z.setContentType(B === void 0 ? Y.type : O), fe = Y.size), ve && q !== "get" && q !== "head") {
        const ce = await R(Y);
        if (typeof ce == "number" && isFinite(ce) && (fe = ce, ce > y))
          throw Pe();
      }
      const $ = ve && (P.isReadableStream(Y) || P.isStream(Y)), N = (ce, xe, Ce) => nc(
        ce,
        lc,
        (Ae) => {
          if (ve && Ae > y)
            throw I = Pe();
          xe && xe(Ae);
        },
        Ce
      );
      if (v && q !== "get" && q !== "head" && (H || $)) {
        if (fe = fe ?? await k(Z, Y), fe !== 0 || $) {
          let ce = new s(b, {
            method: "POST",
            body: Y,
            duplex: "half"
          }), xe;
          if (P.isFormData(Y) && (xe = ce.headers.get("content-type")) && Z.setContentType(xe), ce.body) {
            const [Ce, Ae] = H && Xu(
              fe,
              to(Gu(H))
            ) || [];
            Y = N(ce.body, Ce, Ae);
          }
        }
      } else if ($ && !c && d && q !== "get" && q !== "head")
        Y = N(Y);
      else if ($ && c && !v && q !== "get" && q !== "head")
        throw new pe(
          "Stream request bodies are not supported by the current fetch implementation",
          pe.ERR_NOT_SUPPORT,
          h,
          x
        );
      P.isString(j) || (j = j ? "include" : "omit");
      const re = c && "credentials" in s.prototype;
      if (P.isFormData(Y)) {
        const ce = Z.getContentType();
        ce && /^multipart\/form-data/i.test(ce) && !/boundary=/i.test(ce) && Z.delete("content-type");
      }
      Z.set("User-Agent", "axios/" + xi, !1);
      const A = T == null ? T : Object.assign(/* @__PURE__ */ Object.create(null), T);
      A && (delete A.body, delete A.headers, delete A.method, delete A.signal, delete A.duplex, delete A.credentials);
      const W = Object.assign(/* @__PURE__ */ Object.create(null), A, {
        signal: te,
        method: q.toUpperCase(),
        headers: Rf(Z.normalize()),
        body: Y,
        duplex: "half",
        credentials: re ? j : void 0
      });
      c && (P.forEach(m, (ce, xe) => {
        W[xe] === void 0 && (W[xe] = ce);
      }), W.signal === void 0 && (W.signal = null), W.body === void 0 && (W.body = null)), X === 0 && (W.redirect = "manual", A && (A.redirect = "manual")), x = c && new s(b, W);
      let z = await (c ? V(x, A) : V(b, W));
      const ue = wt.from(z.headers);
      if (ie) {
        const ce = P.toFiniteNumber(ue.getContentLength());
        if (ce != null && ce > L)
          throw new pe(
            "maxContentLength size of " + L + " exceeded",
            pe.ERR_BAD_RESPONSE,
            h,
            x
          );
      }
      const de = w && (F === "stream" || F === "response");
      if (w && z.body && (C || ie || de && G)) {
        const ce = {};
        ["status", "statusText", "headers"].forEach((it) => {
          ce[it] = z[it];
        });
        const xe = P.toFiniteNumber(ue.getContentLength()), [Ce, Ae] = C && Xu(
          xe,
          to(Gu(C), !0)
        ) || [];
        let qe = 0;
        const at = (it) => {
          if (ie && (qe = it, qe > L))
            throw ye = new pe(
              "maxContentLength size of " + L + " exceeded",
              pe.ERR_BAD_RESPONSE,
              h,
              x
            );
          Ce && Ce(it);
        };
        z = new o(
          nc(z.body, lc, at, () => {
            Ae && Ae(), G && G();
          }),
          ce
        );
      }
      F = F || "text";
      let ne = await S[P.findKey(S, F) || "text"](
        z,
        h
      );
      if (ie && !w && !de) {
        let ce;
        if (ne != null && (typeof ne.byteLength == "number" ? ce = ne.byteLength : typeof ne.size == "number" ? ce = ne.size : typeof ne == "string" && (ce = typeof r == "function" ? new r().encode(ne).byteLength : ne.length)), typeof ce == "number" && ce > L)
          throw new pe(
            "maxContentLength size of " + L + " exceeded",
            pe.ERR_BAD_RESPONSE,
            h,
            x
          );
      }
      return !de && G && G(), await new Promise((ce, xe) => {
        qf(ce, xe, {
          data: ne,
          headers: wt.from(z.headers),
          status: z.status,
          statusText: z.statusText,
          config: h,
          request: x
        });
      });
    } catch (J) {
      if (G && G(), te && te.aborted && te.reason instanceof pe) {
        const g = te.reason;
        throw g.config = h, x && (g.request = x), J !== g && Object.defineProperty(g, "cause", {
          __proto__: null,
          value: J,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), g;
      }
      if (I)
        throw x && !I.request && (I.request = x), I;
      if (ye)
        throw ye;
      if (J instanceof pe)
        throw x && !J.request && (J.request = x), J;
      if (J && J.name === "TypeError" && /Load failed|fetch/i.test(J.message)) {
        const g = new pe(
          "Network Error",
          pe.ERR_NETWORK,
          h,
          x,
          J && J.response
        );
        throw Object.defineProperty(g, "cause", {
          __proto__: null,
          value: J.cause || J,
          writable: !0,
          enumerable: !1,
          configurable: !0
        }), g;
      }
      throw pe.from(J, J && J.code, h, x, J && J.response);
    }
  };
}, L0 = /* @__PURE__ */ new Map(), Qf = (e) => {
  const t = /* @__PURE__ */ Object.create(null), n = e && P.hasOwnProp(e, "env") && e.env;
  ["fetch", "Request", "Response", "Blob"].forEach((v) => {
    n && P.hasOwnProp(n, v) && (t[v] = n[v]);
  });
  const { fetch: r, Request: a, Response: s, Blob: o } = t, l = [a, s, r, o];
  let i = l.length, c = i, u, d, p = L0;
  for (; c--; )
    u = l[c], d = p.get(u), d === void 0 && p.set(u, d = c ? /* @__PURE__ */ new Map() : F0(t)), p = d;
  return d;
};
Qf();
const Ti = {
  http: Bb,
  xhr: _0,
  fetch: {
    get: Qf
  }
};
P.forEach(Ti, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const cc = (e) => `- ${e}`, V0 = (e) => P.isFunction(e) || e === null || e === !1;
function B0(e, t) {
  e = P.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, a;
  const s = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let l;
    if (a = r, !V0(r) && (a = Ti[(l = String(r)).toLowerCase()], a === void 0))
      throw new pe(`Unknown adapter '${l}'`);
    if (a && (P.isFunction(a) || (a = a.get(t))))
      break;
    s[l || "#" + o] = a;
  }
  if (!a) {
    const o = Object.entries(s).map(
      ([i, c]) => `adapter ${i} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let l = n ? o.length > 1 ? `since :
` + o.map(cc).join(`
`) : " " + cc(o[0]) : "as no adapter specified";
    throw new pe(
      "There is no suitable adapter to dispatch the request " + l,
      pe.ERR_NOT_SUPPORT
    );
  }
  return a;
}
const Zf = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: B0,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ti
};
function ol(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ds(null, e);
}
function j0() {
  return typeof performance < "u" && P.isFunction(performance.now) ? () => performance.now() : Date.now;
}
function dc(e, t) {
  return Math.max(0, Math.round(e() - t));
}
function ll(e) {
  const t = P.toSafeFlatObject(e);
  ol(t), t.headers = wt.from(P.getSafeProp(t, "headers")), t.data = rl.call(t, t.transformRequest), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1);
  const n = Zf.getAdapter(t.adapter || cs.adapter, t), r = j0(), a = r();
  return n(t).then(
    function(o) {
      ol(t), o.duration = dc(r, a), t.response = o;
      try {
        o.data = rl.call(t, t.transformResponse, o);
      } finally {
        delete t.response;
      }
      return o.headers = wt.from(o.headers), o;
    },
    function(o) {
      if (!Yf(o) && (ol(t), o && o.response)) {
        o.response.duration = dc(r, a), t.response = o.response;
        try {
          o.response.data = rl.call(
            t,
            t.transformResponse,
            o.response
          );
        } finally {
          delete t.response;
        }
        o.response.headers = wt.from(o.response.headers);
      }
      return Promise.reject(o);
    }
  );
}
const Ao = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ao[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const fc = {};
Ao.transitional = function(t, n, r) {
  function a(s, o) {
    return "[Axios v" + xi + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "");
  }
  return (s, o, l) => {
    if (t === !1)
      throw new pe(
        a(o, " has been removed" + (n ? " in " + n : "")),
        pe.ERR_DEPRECATED
      );
    return n && !fc[o] && (fc[o] = !0, console.warn(
      a(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, o, l) : !0;
  };
};
Ao.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function H0(e, t, n) {
  if (typeof e != "object" || e === null)
    throw new pe("options must be an object", pe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const s = r[a], o = Object.prototype.hasOwnProperty.call(t, s) ? t[s] : void 0;
    if (o) {
      const l = e[s], i = l === void 0 || o(l, s, e);
      if (i !== !0)
        throw new pe(
          "option " + s + " must be " + i,
          pe.ERR_BAD_OPTION_VALUE
        );
      continue;
    }
    if (n !== !0)
      throw new pe("Unknown option " + s, pe.ERR_BAD_OPTION);
  }
}
const Cs = {
  assertOptions: H0,
  validators: Ao
}, xt = Cs.validators, il = (e) => {
  if (e == null || P.isPlainObject(e) || e instanceof wt)
    return !0;
  try {
    return P.isObject(e) && P.getSafeProp(e, Symbol.toStringTag) === "AxiosHeaders" && [
      "toJSON",
      "set",
      "get",
      "has",
      "delete",
      "clear",
      "normalize",
      "concat",
      "toString",
      Symbol.iterator
    ].every((t) => P.isFunction(P.getSafeProp(e, t)));
  } catch {
    return !1;
  }
};
let Cr = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new zu(),
      response: new zu()
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
      if (r instanceof Error)
        try {
          let a = {};
          Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error();
          const s = a.stack;
          let o = "";
          if (typeof s == "string") {
            const l = s.indexOf(`
`);
            o = l === -1 ? "" : s.slice(l + 1);
          }
          if (!r.stack)
            r.stack = o;
          else if (o) {
            const l = o.indexOf(`
`), i = l === -1 ? -1 : o.indexOf(`
`, l + 1), c = i === -1 ? o : o.slice(i + 1), u = String(r.stack), d = Lb(r, u), p = d === -1 ? u : u.slice(0, d), v = d === -1 ? "" : u.slice(d);
            p.endsWith(c) || (r.stack = p + `
` + o + v);
          }
        } catch {
        }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Vr(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: s } = n;
    r !== void 0 && Cs.assertOptions(
      r,
      {
        silentJSONParsing: xt.transitional(xt.boolean),
        forcedJSONParsing: xt.transitional(xt.boolean),
        clarifyTimeoutError: xt.transitional(xt.boolean),
        legacyInterceptorReqResOrdering: xt.transitional(xt.boolean),
        advertiseZstdAcceptEncoding: xt.transitional(xt.boolean),
        validateStatusUndefinedResolves: xt.transitional(xt.boolean),
        encodeBasicAuthUsername: xt.transitional(xt.boolean)
      },
      !1
    ), a != null && (P.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : Cs.assertOptions(
      a,
      {
        encode: xt.function,
        serialize: xt.function
      },
      !0
    )), n.allowAbsoluteUrls !== void 0 || (P.hasOwnProp(this.defaults, "allowAbsoluteUrls") && this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Cs.assertOptions(
      n,
      {
        baseUrl: xt.spelling("baseURL"),
        withXsrfToken: xt.spelling("withXSRFToken")
      },
      !0
    ), n.method = (P.getSafeProp(n, "method") || P.getSafeProp(this.defaults, "method") || "get").toLowerCase();
    const o = P.getSafeProp(s, "common"), l = P.getSafeProp(s, n.method), i = s && P.merge(
      il(o) ? o : void 0,
      il(l) ? l : void 0
    );
    s && P.forEach(Uf.concat("common"), (S) => {
      il(P.getSafeProp(s, S)) && delete s[S];
    }), n.headers = wt.concat(i, s);
    const c = [];
    let u = !0;
    this.interceptors.request.forEach(function(R) {
      if (typeof R.runWhen == "function" && R.runWhen(n) === !1)
        return;
      u = u && R.synchronous;
      const k = n.transitional || wi;
      k && k.legacyInterceptorReqResOrdering ? c.unshift(R.fulfilled, R.rejected) : c.push(R.fulfilled, R.rejected);
    });
    const d = [];
    this.interceptors.response.forEach(function(R) {
      d.push(R.fulfilled, R.rejected);
    });
    let p, v = 0, w;
    if (!u) {
      const S = [ll.bind(this), void 0];
      for (S.unshift(...c), S.push(...d), w = S.length, p = Promise.resolve(n); v < w; )
        p = p.then(S[v++], S[v++]);
      return p;
    }
    w = c.length;
    let m = n;
    for (; v < w; ) {
      const S = c[v++], R = c[v++];
      try {
        m = S ? S(m) : m;
      } catch (k) {
        if (!R) {
          p = Promise.reject(k);
          break;
        }
        try {
          const h = R.call(this, k);
          P.isThenable(h) && (p = Promise.resolve(h).then(
            () => ll.call(this, m)
          ));
        } catch (h) {
          p = Promise.reject(h);
        }
        break;
      }
    }
    if (!p)
      try {
        p = ll.call(this, m);
      } catch (S) {
        p = Promise.reject(S);
      }
    for (v = 0, w = d.length; v < w; )
      p = p.then(d[v++], d[v++]);
    return p;
  }
  getUri(t) {
    t = Vr(this.defaults, t);
    const n = Kf(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return Ff(n, t.params, t.paramsSerializer);
  }
};
P.forEach(["delete", "get", "head", "options"], function(t) {
  Cr.prototype[t] = async function(n, r) {
    return this.request(
      Vr(r || {}, {
        method: t,
        url: n,
        data: r && P.hasOwnProp(r, "data") ? r.data : void 0
      })
    );
  };
});
P.forEach(["post", "put", "patch", "query"], function(t) {
  function n(r) {
    return async function(s, o, l) {
      return this.request(
        Vr(l || {}, {
          method: t,
          headers: r ? {
            "Content-Type": "multipart/form-data"
          } : {},
          url: s,
          data: o
        })
      );
    };
  }
  Cr.prototype[t] = n(), t !== "query" && (Cr.prototype[t + "Form"] = n(!0));
});
let U0 = class ep {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let s;
      const o = new Promise((l) => {
        r.subscribe(l), s = l;
      }).then(a);
      return o.cancel = function() {
        r.unsubscribe(s);
      }, o;
    }, t(function(s, o, l) {
      r.reason || (r.reason = new ds(s, o, l), n(r.reason));
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
      token: new ep(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
};
function Y0(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function q0(e) {
  return P.isObject(e) && e.isAxiosError === !0;
}
const Ns = {
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
  /**
   * @deprecated Use `ContentTooLarge` instead.
   */
  PayloadTooLarge: 413,
  ContentTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  /**
   * @deprecated Use `UnprocessableContent` instead.
   */
  UnprocessableEntity: 422,
  UnprocessableContent: 422,
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
  NetworkAuthenticationRequired: 511,
  WebServerReturnsAnUnknownError: 520,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Ns).forEach(([e, t]) => {
  Ns[t] === void 0 && (Ns[t] = e);
});
function tp(e) {
  const t = new Cr(e), n = Sf(Cr.prototype.request, t);
  return P.extend(n, Cr.prototype, t, { allOwnKeys: !0 }), P.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return tp(Vr(e, a));
  }, n;
}
const rt = tp(cs);
rt.Axios = Cr;
rt.CanceledError = ds;
rt.CancelToken = U0;
rt.isCancel = Yf;
rt.VERSION = xi;
rt.toFormData = Po;
rt.AxiosError = pe;
rt.Cancel = rt.CanceledError;
rt.all = function(t) {
  return Promise.all(t);
};
rt.spread = Y0;
rt.isAxiosError = q0;
rt.mergeConfig = Vr;
rt.AxiosHeaders = wt;
rt.formToJSON = (e) => Hf(P.isHTMLForm(e) ? new FormData(e) : e);
rt.getAdapter = Zf.getAdapter;
rt.HttpStatusCode = Ns;
rt.default = rt;
const {
  Axios: uS,
  AxiosError: cS,
  CanceledError: dS,
  isCancel: fS,
  CancelToken: pS,
  VERSION: mS,
  all: hS,
  Cancel: vS,
  isAxiosError: yS,
  spread: gS,
  toFormData: bS,
  AxiosHeaders: wS,
  HttpStatusCode: _S,
  formToJSON: xS,
  getAdapter: TS,
  mergeConfig: SS,
  create: kS
} = rt;
function pc(e) {
  return rt.get(e, { withCredentials: !0 }).then((t) => t.data);
}
const np = {
  Value: Zs,
  ValueString: ta,
  ValueDoubleRange: Rr,
  ValueDateRange: na,
  ValueFilePath: ra,
  Mode: ir,
  SubSystem: ur,
  Command: Qa,
  PORISValue: Zs,
  PORISValueString: ta,
  PORISValueFloat: Rr,
  PORISValueDoubleRange: Rr,
  PORISValueDate: na,
  PORISValueFilePath: ra,
  PORISMode: ir,
  PORISNode: ur,
  PORISCmd: Qa
}, W0 = [
  "value",
  "value-string",
  "value-double-range",
  "value-date",
  "value-file-path"
], z0 = "mode", K0 = "sub-system", J0 = "command";
function tt(e, t) {
  const n = e.getElementsByTagName(t);
  if (n.length > 0 && n[0].childNodes.length > 0) {
    const r = n[0].getAttribute("type");
    return r === "integer" ? parseInt(n[0].childNodes[0].nodeValue, 10) : r === "float" ? parseFloat(n[0].childNodes[0].nodeValue) : r === "timestamp" ? Date.parse(n[0].childNodes[0].nodeValue) : n[0].childNodes[0].nodeValue;
  } else
    return null;
}
function X0(e, t) {
  const n = e.getElementsByTagName("destinations"), r = [];
  if (n.length > 0) {
    const a = e.getElementsByTagName("destination");
    if (a.length > 0)
      for (const s of a) {
        const o = np[s.getAttribute("type")], l = tt(s, "id");
        o && o != Qa && (o == ur && (t.find((i) => {
        }) || t.push(l)), r.push({ type: o, id: l }));
      }
  }
  return r.length > 0 ? r : null;
}
function G0(e) {
  const t = e.getElementsByTagName("commands");
  return t.length === 0 ? [] : Array.from(t[0].getElementsByTagName("command-ref")).map((n) => ({
    type: Qa,
    id: tt(n, "id")
  }));
}
function Q0(e) {
  const t = e.getElementsByTagName("node-attributes"), n = [];
  if (t.length > 0) {
    const r = e.getElementsByTagName("node-attribute");
    if (r.length > 0)
      for (const a of r) {
        const s = tt(a, "content"), o = tt(a, "name");
        tt(a, "visibility") && n.push({ name: o, content: s });
      }
  }
  return n.length > 0 ? n : null;
}
function Z0(e) {
  const t = e.getElementsByTagName("labels"), n = [];
  if (t.length > 0) {
    const r = e.getElementsByTagName("label");
    if (r.length > 0)
      for (const a of r) {
        const s = tt(a, "name");
        n.push(s);
      }
  }
  return n.length > 0 ? n[0] : null;
}
function Ss(e, t) {
  let n = tt(e, "id"), r = tt(e, "ident"), a = tt(e, "name"), s = tt(e, "node-type-id"), o = np[tt(e, "type")], l = X0(e, t), i = G0(e), c = Q0(e), u = Z0(e), d = !!(l != null && l.find((m) => Ll.includes(m.type) && m.id > 0)), p = !!(l != null && l.find((m) => Ll.includes(m.type))), v = !!(l != null && l.find((m) => m.type == ir)), w = !!(l != null && l.find((m) => m.type == ur));
  return {
    id: n,
    ident: r,
    name: a,
    nodeTypeId: s,
    type: o,
    destinations: l,
    commandReferences: i,
    nodeAttributes: c,
    label: u,
    hasValues: p,
    hasRealValues: d,
    hasModes: v,
    hasSubsystems: w
  };
}
function ul(e, t) {
  t.forEach((n) => {
    if (n.destinations) {
      let r = n.destinations.map((a) => e.findNode(a.type, a.id));
      n.valuesNodes = r.filter((a) => a.type != ir && a.type != ur), n.modesNodes = r.filter((a) => a.type === ir), n.subsystemsNodes = r.filter((a) => a.type === ur), n.modesNodes.forEach((a) => {
        a.parent = n;
      }), n.subsystemsNodes.forEach((a) => {
        a.parent = n;
      });
    }
  });
}
function mc(e) {
  e.forEach((t) => {
    let n = null;
    t.modesNodes && t.modesNodes.length > 0 && (t.defaultModeId ? n = t.modesNodes.find((r) => r.id === t.defaultModeId) : n = t.modesNodes[0]), t.defaultMode = n;
  });
}
function ew(e, t) {
  t.forEach((n) => {
    n.commandsNodes = (n.commandReferences || []).map((r) => e.findNode(r.type, r.id)).filter(Boolean);
  });
}
function tw(e) {
  e.forEach((t) => {
    var n, r;
    t.defaultValue = ((n = t.valuesNodes) == null ? void 0 : n.find((a) => a.id === t.defaultValueId)) || ((r = t.valuesNodes) == null ? void 0 : r[0]) || null;
  });
}
function nw(e) {
  const t = /* @__PURE__ */ new Set();
  e.subsystems.forEach((n) => {
    n.modesNodes || (n.modesNodes = []);
    const r = n.modesNodes.find(
      (s) => {
        var o;
        return ((o = s.name) == null ? void 0 : o.trim().toLowerCase()) === "unknown";
      }
    ), a = r || new Ea({
      id: `unknown:${n.id}`,
      ident: `unknown:${n.ident}`,
      name: "Unknown",
      label: "Unknown",
      nodeTypeId: 6,
      type: ir,
      destinations: [],
      hasValues: !1,
      hasRealValues: !1,
      hasModes: !1,
      hasSubsystems: !1
    });
    a.name = "Unknown", a.label = "Unknown", a.parent = n, a.destinations = [], a.valuesNodes = [], a.modesNodes = [], a.subsystemsNodes = [], a.commandsNodes = [], a.hasValues = !1, a.hasRealValues = !1, a.hasModes = !1, a.hasSubsystems = !1, a.defaultValue = null, a.isImplicitUnknown = !0, n.unknownMode = a, t.add(a.id), n.modesNodes = n.modesNodes.filter((s) => s !== r), e.modes.includes(a) || e.modes.push(a), n === e.rootSubsystem && (n.modesNodes.unshift(a), n.defaultMode = a, n.defaultModeId = a.id, n.hasModes = !0);
  }), e.modes.forEach((n) => {
    n.modesNodes && (n.modesNodes = n.modesNodes.filter((r) => !t.has(r.id)), n.hasModes = n.modesNodes.length > 0);
  });
}
function cl(e, t) {
  const n = {
    values: [],
    modes: [],
    params: [],
    subsystems: [],
    commands: [],
    findNode: function(c, u) {
      let d = null;
      return c == ir ? d = this.modes : c == ur ? d = this.subsystems : c == Qa ? d = this.commands : d = this.values, d.find((p) => p.id === u);
    }
  };
  var r = [];
  const s = new DOMParser().parseFromString(t, "text/xml");
  for (const c of W0) {
    let u = s.getElementsByTagName(c);
    for (const d of u) {
      const p = Ss(d, r);
      p.parent = null;
      let v = tt(d, "value-formatter-id");
      p[v] = v;
      const w = p.type;
      if (w == Rr) {
        let m = tt(d, "default-float"), S = tt(d, "rangemax"), R = tt(d, "rangemin");
        p.defaultFloat = m, p.rangemax = S, p.rangemin = R;
      } else if (w == ta) {
        let m = tt(d, "default-string");
        p.defaultString = m;
      } else if (w == na) {
        let m = tt(d, "default-date"), S = tt(d, "date-max"), R = tt(d, "date-min");
        p.defaultDate = m, p.datemax = S, p.datemin = R;
      } else if (w == ra) {
        let m = tt(d, "default-string"), S = tt(d, "file-description"), R = tt(d, "file-extension");
        p.defaultString = m, p.fileDescription = S, p.fileExtension = R;
      }
      n.values.push(new Ea(p));
    }
  }
  const o = s.getElementsByTagName(z0);
  for (const c of o) {
    const u = Ss(c, r);
    let d = tt(c, "default-mode-id"), p = tt(c, "default-value-id");
    u.defaultModeId = d, u.defaultValueId = p, n.modes.push(new Ea(u));
  }
  const l = s.getElementsByTagName(J0);
  for (const c of l) {
    const u = Ss(c, r);
    n.commands.push(new Ea(u));
  }
  const i = s.getElementsByTagName(K0);
  for (const c of i) {
    const u = Ss(c, r);
    let d = tt(c, "default-mode-id");
    u.defaultModeId = d, n.subsystems.push(new Ea(u));
  }
  return n.rootSubsystem = n.subsystems.find((c) => !r.includes(c.id)), ul(n, n.modes), ul(n, n.params), ul(n, n.subsystems), mc(n.modes), mc(n.subsystems), tw(n.modes), ew(n, n.subsystems), nw(n), n;
}
let rp = !1;
function rw(e) {
  rp = e;
}
function Cn(...e) {
  rp && console.log(...e);
}
const Si = /* @__PURE__ */ Iv("model", () => {
  const e = /* @__PURE__ */ se(null), t = /* @__PURE__ */ se([]), n = /* @__PURE__ */ se([]), r = /* @__PURE__ */ se([]), a = /* @__PURE__ */ se(), s = /* @__PURE__ */ se(!1), o = /* @__PURE__ */ se([]), l = /* @__PURE__ */ se({});
  function i(_) {
    s.value = !0, pc(`/models/${_}.xml`).then((C) => {
      e.value = C;
      let H = cl(this, C);
      t.value = H.values, n.value = H.modes, r.value = H.subsystems, a.value = H.rootSubsystem, o.value = [], l.value = {}, S(H.rootSubsystem);
    }).finally(() => {
      s.value = !1;
    });
  }
  function c(_) {
    s.value = !0, pc(`${_}`).then((C) => {
      e.value = C;
      let H = cl(this, C);
      t.value = H.values, n.value = H.modes, r.value = H.subsystems, a.value = H.rootSubsystem, o.value = [], l.value = {}, S(H.rootSubsystem);
    }).finally(() => {
      s.value = !1;
    });
  }
  function u(_) {
    s.value = !0, Promise.resolve(_).then((M) => {
      e.value = M;
      let C = cl(this, M);
      t.value = C.values, n.value = C.modes, r.value = C.subsystems, a.value = C.rootSubsystem, o.value = [], l.value = {}, S(C.rootSubsystem);
    }).finally(() => {
      s.value = !1;
    });
  }
  function d(_) {
    return t.value.find((M) => M.id == _);
  }
  function p(_) {
    return n.value.find((M) => M.id == _);
  }
  function v(_) {
    return r.value.find((M) => M.id == _);
  }
  function w(_, M, C) {
    _.validModes = C;
    let H = null;
    C.length > 0 ? M != null && C.includes(M) ? H = M : _.parent == null && C.includes(_.defaultMode) ? H = _.defaultMode : H = C[0] : H = _.unknownMode || null;
    const F = _.currentMode !== H;
    return _.currentMode = H, _.candidateMode = H, o.value[`${_.id}`] = H, E(_, H), _.hasSubsystems && _.subsystemsNodes.forEach((Z) => {
      R(Z, Z.currentMode, H);
    }), F && Cn(`PORIS mode changed for ${_.name}: ${(H == null ? void 0 : H.name) || "none"}`), H;
  }
  function m(_, M) {
    Cn(`setValidMode_ ${_.name} ${M == null ? void 0 : M.name}, NOT using supermode`);
    let C = h(_);
    return Cn(`   setValidMode validModes len ${C.length}`, C), w(_, M, C);
  }
  function S(_, M) {
    mn();
    let C;
    try {
      C = m(_, M);
    } finally {
      cm();
    }
    return Gi(o), Gi(l), C;
  }
  function R(_, M, C) {
    const H = new Set(_.modesNodes.map((Z) => Z.id));
    let F = (C.modesNodes || []).filter(
      (Z) => H.has(Z.id)
    );
    return Cn(`   setValidMode validModes  len ${F.length}`, F), w(_, M, F);
  }
  function k(_) {
    const M = o.value.reduce((C, H) => _.includes(H.id) ? H : C, null);
    return M || _[0];
  }
  function h(_) {
    if (_.parent != null && _.parent.currentMode != null) {
      Cn(`parent: ${_.parent.name}`), Cn(`parent mode: ${_.parent.currentMode.name}`), Cn("parent.mode.submodes:", _.parent.currentMode.modesNodes);
      const M = new Set(_.modesNodes.map((C) => C.id));
      return (_.parent.currentMode.modesNodes || []).filter(
        (C) => M.has(C.id)
      );
    } else return _.parent != null ? [] : _.modesNodes;
  }
  function b(_) {
    return h(_).length > 0;
  }
  function q(_, M, C) {
    l.value[`${_.id}`] = { value: M, data: C };
  }
  function Y(_) {
    var M;
    for (const C of _ || []) {
      const H = v(C.node_id);
      if (!H) continue;
      const F = String(C.mode_id || "").startsWith("unknown:") ? H.unknownMode : p(C.mode_id), Z = H.getValidModes();
      if (F && (Z.includes(F) || F === H.unknownMode && Z.length === 0) && S(H, F), C.value_id != null) {
        const j = d(C.value_id), T = ((M = H.currentMode) == null ? void 0 : M.valuesNodes) || [];
        j && T.some((L) => L.id == j.id) && q(H, j, C.data);
      }
    }
  }
  function E(_, M, C = null) {
    const H = l.value[`${_.id}`] || {};
    if (!(M != null && M.hasValues))
      return q(_, null, null), { value: null, data: null };
    const F = M.valuesNodes || [];
    if (F.length === 0)
      return q(_, null, null), { value: null, data: null };
    const Z = F.find((L) => {
      var y;
      return L.id === ((y = M.defaultValue) == null ? void 0 : y.id);
    }) || F[0];
    let j = F.find((L) => {
      var y;
      return L.id === ((y = C || H.value) == null ? void 0 : y.id);
    }) || Z, T = H.data;
    return j.type === Rr ? (typeof T != "number" || !Number.isFinite(T) || T < Number(j.rangemin) || T > Number(j.rangemax)) && (T = Number(j.defaultFloat)) : j.type === ta || j.type === ra ? typeof T != "string" && (T = j.defaultString || "") : j.type === na && T == null && (T = j.defaultDate), q(_, j, T), { value: j, data: T };
  }
  return {
    xmlModel: e,
    rootSubsystem: a,
    isLoading: s,
    currentModes: o,
    systemValues: l,
    loadModel: i,
    loadModelURL: c,
    loadModelXML: u,
    getValue: d,
    getMode: p,
    getSubsystem: v,
    getCurrentMode: k,
    setValidMode: S,
    getValidObjModes: h,
    hasValidObjModes: b,
    getSystemValue: E,
    setSystemValue: q,
    applyRuntimeState: Y
  };
}), aw = ["disabled"], sw = ["value"], ap = {
  __name: "ModeSelector",
  props: /* @__PURE__ */ Hs({
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
    const t = Ys(e, "modelValue"), n = e, r = /* @__PURE__ */ se(n.modes);
    return ze(
      () => n.modes,
      (a) => {
        r.value = a;
      }
    ), (a, s) => Vn((U(), Q("select", {
      "onUpdate:modelValue": s[0] || (s[0] = (o) => t.value = o),
      disabled: r.value.length < 2
    }, [
      (U(!0), Q(Te, null, Ye(r.value, (o) => (U(), Q("option", {
        key: o.id,
        value: o
      }, Fe(o.label || o.name), 9, sw))), 128))
    ], 8, aw)), [
      [nf, t.value]
    ]);
  }
}, Mo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, ow = ["min", "max", "step", "aria-label", "aria-expanded"], lw = ["onKeydown"], iw = ["min", "max", "step", "aria-label"], uw = {
  class: "poris-numeric-slider-limits",
  "aria-hidden": "true"
}, cw = {
  __name: "NumericRangeInput",
  props: /* @__PURE__ */ Hs({
    min: { type: [Number, String], required: !0 },
    max: { type: [Number, String], required: !0 },
    step: { type: [Number, String], default: 0.01 },
    label: { type: String, default: "Value" }
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Hs(["focus", "blur", "keydown"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = e, r = t, a = Ys(e, "modelValue"), s = /* @__PURE__ */ se(null), o = /* @__PURE__ */ se(null), l = /* @__PURE__ */ se(!1), i = /* @__PURE__ */ se({}), c = oe(
      () => Number.isFinite(Number(n.min)) && Number.isFinite(Number(n.max)) && Number(n.min) < Number(n.max)
    ), u = oe({
      get() {
        const h = a.value === "" ? NaN : Number(a.value);
        return Number.isFinite(h) ? Math.min(Number(n.max), Math.max(Number(n.min), h)) : Number(n.min);
      },
      set(h) {
        a.value = Number(h);
      }
    });
    function d() {
      var E;
      if (!l.value || !s.value) return;
      const h = s.value.getBoundingClientRect(), b = Math.min(260, Math.max(0, window.innerWidth - 16)), q = ((E = o.value) == null ? void 0 : E.offsetHeight) || 64, Y = h.bottom + q + 6 <= window.innerHeight ? h.bottom + 6 : Math.max(8, h.top - q - 6);
      i.value = {
        position: "fixed",
        width: `${b}px`,
        top: `${Y}px`,
        left: `${Math.max(8, Math.min(h.left, window.innerWidth - b - 8))}px`
      };
    }
    function p(h) {
      l.value = c.value, d(), Et(d), r("focus", h);
    }
    function v(h) {
      var b;
      return h && (s.value === h || ((b = o.value) == null ? void 0 : b.contains(h)));
    }
    function w(h) {
      v(h.relatedTarget) || (l.value = !1);
    }
    function m(h) {
      r("blur", h), w(h);
    }
    function S(h) {
      h.key === "Escape" && (l.value = !1, h.stopPropagation()), r("keydown", h);
    }
    function R() {
      var h;
      (h = s.value) == null || h.focus(), l.value = !1;
    }
    function k(h) {
      v(h.target) || (l.value = !1);
    }
    return ze(
      l,
      (h) => {
        const b = h ? "addEventListener" : "removeEventListener";
        window[b]("resize", d), window[b]("scroll", d, !0), document[b]("pointerdown", k, !0);
      },
      { flush: "sync" }
    ), ze(
      () => [n.min, n.max],
      () => {
        l.value = !1;
      }
    ), bo(() => {
      window.removeEventListener("resize", d), window.removeEventListener("scroll", d, !0), document.removeEventListener("pointerdown", k, !0);
    }), (h, b) => (U(), Q(Te, null, [
      Vn(Se("input", {
        ref_key: "numberInput",
        ref: s,
        "onUpdate:modelValue": b[0] || (b[0] = (q) => a.value = q),
        class: "numberPicker",
        type: "number",
        min: e.min,
        max: e.max,
        step: e.step,
        "aria-label": e.label,
        "aria-expanded": l.value,
        onFocus: p,
        onBlur: m,
        onKeydown: S
      }, null, 40, ow), [
        [
          $l,
          a.value,
          void 0,
          { number: !0 }
        ]
      ]),
      (U(), Ee(vd, { to: "body" }, [
        l.value && c.value ? (U(), Q("div", {
          key: 0,
          ref_key: "popup",
          ref: o,
          class: "poris-numeric-slider",
          style: Pt(i.value),
          onFocusout: w,
          onKeydown: rf(ea(R, ["stop", "prevent"]), ["esc"])
        }, [
          Vn(Se("input", {
            "onUpdate:modelValue": b[1] || (b[1] = (q) => u.value = q),
            type: "range",
            min: e.min,
            max: e.max,
            step: e.step,
            "aria-label": e.label
          }, null, 8, iw), [
            [
              $l,
              u.value,
              void 0,
              { number: !0 }
            ]
          ]),
          Se("div", uw, [
            Se("span", null, Fe(e.min), 1),
            Se("span", null, Fe(e.max), 1)
          ])
        ], 44, lw)) : ae("", !0)
      ]))
    ], 64));
  }
}, dw = /* @__PURE__ */ Mo(cw, [["__scopeId", "data-v-8cb8cdb4"]]);
function ke(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function je(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function dn(e, t) {
  const n = ke(e);
  return isNaN(t) ? je(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function pn(e, t) {
  const n = ke(e);
  if (isNaN(t)) return je(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), a = je(e, n.getTime());
  a.setMonth(n.getMonth() + t + 1, 0);
  const s = a.getDate();
  return r >= s ? a : (n.setFullYear(
    a.getFullYear(),
    a.getMonth(),
    r
  ), n);
}
function sp(e, t) {
  const {
    years: n = 0,
    months: r = 0,
    weeks: a = 0,
    days: s = 0,
    hours: o = 0,
    minutes: l = 0,
    seconds: i = 0
  } = t, c = ke(e), u = r || n ? pn(c, r + n * 12) : c, d = s || a ? dn(u, s + a * 7) : u, p = l + o * 60, w = (i + p * 60) * 1e3;
  return je(e, d.getTime() + w);
}
function fw(e, t) {
  const n = +ke(e);
  return je(e, n + t);
}
const op = 6048e5, pw = 864e5, mw = 6e4, lp = 36e5, hw = 1e3;
function vw(e, t) {
  return fw(e, t * lp);
}
let yw = {};
function jr() {
  return yw;
}
function vn(e, t) {
  var l, i, c, u;
  const n = jr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((i = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : i.weekStartsOn) ?? n.weekStartsOn ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = ke(e), s = a.getDay(), o = (s < r ? 7 : 0) + s - r;
  return a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a;
}
function aa(e) {
  return vn(e, { weekStartsOn: 1 });
}
function ip(e) {
  const t = ke(e), n = t.getFullYear(), r = je(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const a = aa(r), s = je(e, 0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  const o = aa(s);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= o.getTime() ? n : n - 1;
}
function hc(e) {
  const t = ke(e);
  return t.setHours(0, 0, 0, 0), t;
}
function no(e) {
  const t = ke(e), n = new Date(
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
function up(e, t) {
  const n = hc(e), r = hc(t), a = +n - no(n), s = +r - no(r);
  return Math.round((a - s) / pw);
}
function gw(e) {
  const t = ip(e), n = je(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), aa(n);
}
function bw(e, t) {
  const n = t * 3;
  return pn(e, n);
}
function ki(e, t) {
  return pn(e, t * 12);
}
function vc(e, t) {
  const n = ke(e), r = ke(t), a = n.getTime() - r.getTime();
  return a < 0 ? -1 : a > 0 ? 1 : a;
}
function cp(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Ba(e) {
  if (!cp(e) && typeof e != "number")
    return !1;
  const t = ke(e);
  return !isNaN(Number(t));
}
function yc(e) {
  const t = ke(e);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function ww(e, t) {
  const n = ke(e), r = ke(t);
  return n.getFullYear() - r.getFullYear();
}
function _w(e, t) {
  const n = ke(e), r = ke(t), a = vc(n, r), s = Math.abs(ww(n, r));
  n.setFullYear(1584), r.setFullYear(1584);
  const o = vc(n, r) === -a, l = a * (s - +o);
  return l === 0 ? 0 : l;
}
function dp(e, t) {
  const n = ke(e.start), r = ke(e.end);
  let a = +n > +r;
  const s = a ? +n : +r, o = a ? r : n;
  o.setHours(0, 0, 0, 0);
  let l = 1;
  const i = [];
  for (; +o <= s; )
    i.push(ke(o)), o.setDate(o.getDate() + l), o.setHours(0, 0, 0, 0);
  return a ? i.reverse() : i;
}
function Ar(e) {
  const t = ke(e), n = t.getMonth(), r = n - n % 3;
  return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
}
function xw(e, t) {
  const n = ke(e.start), r = ke(e.end);
  let a = +n > +r;
  const s = a ? +Ar(n) : +Ar(r);
  let o = Ar(a ? r : n), l = 1;
  const i = [];
  for (; +o <= s; )
    i.push(ke(o)), o = bw(o, l);
  return a ? i.reverse() : i;
}
function Tw(e) {
  const t = ke(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function fp(e) {
  const t = ke(e), n = t.getFullYear();
  return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function Za(e) {
  const t = ke(e), n = je(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function pp(e, t) {
  var l, i, c, u;
  const n = jr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((i = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : i.weekStartsOn) ?? n.weekStartsOn ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.weekStartsOn) ?? 0, a = ke(e), s = a.getDay(), o = (s < r ? -7 : 0) + 6 - (s - r);
  return a.setDate(a.getDate() + o), a.setHours(23, 59, 59, 999), a;
}
function gc(e) {
  const t = ke(e), n = t.getMonth(), r = n - n % 3 + 3;
  return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t;
}
const Sw = {
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
}, kw = (e, t, n) => {
  let r;
  const a = Sw[e];
  return typeof a == "string" ? r = a : t === 1 ? r = a.one : r = a.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function dl(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const Ow = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Pw = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Aw = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Mw = {
  date: dl({
    formats: Ow,
    defaultWidth: "full"
  }),
  time: dl({
    formats: Pw,
    defaultWidth: "full"
  }),
  dateTime: dl({
    formats: Aw,
    defaultWidth: "full"
  })
}, Ew = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Dw = (e, t, n, r) => Ew[e];
function Sa(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (r === "formatting" && e.formattingValues) {
      const o = e.defaultFormattingWidth || e.defaultWidth, l = n != null && n.width ? String(n.width) : o;
      a = e.formattingValues[l] || e.formattingValues[o];
    } else {
      const o = e.defaultWidth, l = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[l] || e.values[o];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[s];
  };
}
const Rw = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Cw = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Nw = {
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
}, $w = {
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
}, Iw = {
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
}, Fw = {
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
}, Lw = (e, t) => {
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
}, Vw = {
  ordinalNumber: Lw,
  era: Sa({
    values: Rw,
    defaultWidth: "wide"
  }),
  quarter: Sa({
    values: Cw,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Sa({
    values: Nw,
    defaultWidth: "wide"
  }),
  day: Sa({
    values: $w,
    defaultWidth: "wide"
  }),
  dayPeriod: Sa({
    values: Iw,
    defaultWidth: "wide",
    formattingValues: Fw,
    defaultFormattingWidth: "wide"
  })
};
function ka(e) {
  return (t, n = {}) => {
    const r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(a);
    if (!s)
      return null;
    const o = s[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], i = Array.isArray(l) ? jw(l, (d) => d.test(o)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Bw(l, (d) => d.test(o))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(i) : i, c = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(c)
    ) : c;
    const u = t.slice(o.length);
    return { value: c, rest: u };
  };
}
function Bw(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function jw(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Hw(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const a = r[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let o = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    o = n.valueCallback ? n.valueCallback(o) : o;
    const l = t.slice(a.length);
    return { value: o, rest: l };
  };
}
const Uw = /^(\d+)(th|st|nd|rd)?/i, Yw = /\d+/i, qw = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Ww = {
  any: [/^b/i, /^(a|c)/i]
}, zw = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Kw = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Jw = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Xw = {
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
}, Gw = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Qw = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Zw = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, e_ = {
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
}, t_ = {
  ordinalNumber: Hw({
    matchPattern: Uw,
    parsePattern: Yw,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ka({
    matchPatterns: qw,
    defaultMatchWidth: "wide",
    parsePatterns: Ww,
    defaultParseWidth: "any"
  }),
  quarter: ka({
    matchPatterns: zw,
    defaultMatchWidth: "wide",
    parsePatterns: Kw,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ka({
    matchPatterns: Jw,
    defaultMatchWidth: "wide",
    parsePatterns: Xw,
    defaultParseWidth: "any"
  }),
  day: ka({
    matchPatterns: Gw,
    defaultMatchWidth: "wide",
    parsePatterns: Qw,
    defaultParseWidth: "any"
  }),
  dayPeriod: ka({
    matchPatterns: Zw,
    defaultMatchWidth: "any",
    parsePatterns: e_,
    defaultParseWidth: "any"
  })
}, mp = {
  code: "en-US",
  formatDistance: kw,
  formatLong: Mw,
  formatRelative: Dw,
  localize: Vw,
  match: t_,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function n_(e) {
  const t = ke(e);
  return up(t, Za(t)) + 1;
}
function Oi(e) {
  const t = ke(e), n = +aa(t) - +gw(t);
  return Math.round(n / op) + 1;
}
function Pi(e, t) {
  var u, d, p, v;
  const n = ke(e), r = n.getFullYear(), a = jr(), s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((d = (u = t == null ? void 0 : t.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((v = (p = a.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, o = je(e, 0);
  o.setFullYear(r + 1, 0, s), o.setHours(0, 0, 0, 0);
  const l = vn(o, t), i = je(e, 0);
  i.setFullYear(r, 0, s), i.setHours(0, 0, 0, 0);
  const c = vn(i, t);
  return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function r_(e, t) {
  var l, i, c, u;
  const n = jr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((i = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : i.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((u = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : u.firstWeekContainsDate) ?? 1, a = Pi(e, t), s = je(e, 0);
  return s.setFullYear(a, 0, r), s.setHours(0, 0, 0, 0), vn(s, t);
}
function Ai(e, t) {
  const n = ke(e), r = +vn(n, t) - +r_(n, t);
  return Math.round(r / op) + 1;
}
function We(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Jn = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return We(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : We(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return We(e.getDate(), t.length);
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
    return We(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return We(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return We(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return We(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), a = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return We(a, t.length);
  }
}, zr = {
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, bc = {
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
    return Jn.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const a = Pi(e, r), s = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const o = s % 100;
      return We(o, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : We(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = ip(e);
    return We(n, t.length);
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
    return We(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return We(r, 2);
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
        return We(r, 2);
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
        return Jn.M(e, t);
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
        return We(r + 1, 2);
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
    const a = Ai(e, r);
    return t === "wo" ? n.ordinalNumber(a, { unit: "week" }) : We(a, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Oi(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : We(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Jn.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = n_(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : We(r, t.length);
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
    const a = e.getDay(), s = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(s);
      case "ee":
        return We(s, 2);
      case "eo":
        return n.ordinalNumber(s, { unit: "day" });
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
    const a = e.getDay(), s = (a - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(s);
      case "cc":
        return We(s, t.length);
      case "co":
        return n.ordinalNumber(s, { unit: "day" });
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
        return We(a, t.length);
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
    switch (r === 12 ? a = zr.noon : r === 0 ? a = zr.midnight : a = r / 12 >= 1 ? "pm" : "am", t) {
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
    switch (r >= 17 ? a = zr.evening : r >= 12 ? a = zr.afternoon : r >= 4 ? a = zr.morning : a = zr.night, t) {
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
    return Jn.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Jn.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : We(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : We(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Jn.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Jn.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Jn.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return _c(r);
      case "XXXX":
      case "XX":
        return wr(r);
      case "XXXXX":
      case "XXX":
      default:
        return wr(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return _c(r);
      case "xxxx":
      case "xx":
        return wr(r);
      case "xxxxx":
      case "xxx":
      default:
        return wr(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + wc(r, ":");
      case "OOOO":
      default:
        return "GMT" + wr(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + wc(r, ":");
      case "zzzz":
      default:
        return "GMT" + wr(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return We(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return We(r, t.length);
  }
};
function wc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(a) : n + String(a) + t + We(s, 2);
}
function _c(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + We(Math.abs(e) / 60, 2) : wr(e, t);
}
function wr(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), a = We(Math.trunc(r / 60), 2), s = We(r % 60, 2);
  return n + a + t + s;
}
const xc = (e, t) => {
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
}, hp = (e, t) => {
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
}, a_ = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], a = n[2];
  if (!a)
    return xc(e, t);
  let s;
  switch (r) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", xc(r, t)).replace("{{time}}", hp(a, t));
}, ql = {
  p: hp,
  P: a_
}, s_ = /^D+$/, o_ = /^Y+$/, l_ = ["D", "DD", "YY", "YYYY"];
function vp(e) {
  return s_.test(e);
}
function yp(e) {
  return o_.test(e);
}
function Wl(e, t, n) {
  const r = i_(e, t, n);
  if (console.warn(r), l_.includes(e)) throw new RangeError(r);
}
function i_(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const u_ = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, c_ = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, d_ = /^'([^]*?)'?$/, f_ = /''/g, p_ = /[a-zA-Z]/;
function Pn(e, t, n) {
  var u, d, p, v, w, m, S, R;
  const r = jr(), a = (n == null ? void 0 : n.locale) ?? r.locale ?? mp, s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((d = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((v = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : v.firstWeekContainsDate) ?? 1, o = (n == null ? void 0 : n.weekStartsOn) ?? ((m = (w = n == null ? void 0 : n.locale) == null ? void 0 : w.options) == null ? void 0 : m.weekStartsOn) ?? r.weekStartsOn ?? ((R = (S = r.locale) == null ? void 0 : S.options) == null ? void 0 : R.weekStartsOn) ?? 0, l = ke(e);
  if (!Ba(l))
    throw new RangeError("Invalid time value");
  let i = t.match(c_).map((k) => {
    const h = k[0];
    if (h === "p" || h === "P") {
      const b = ql[h];
      return b(k, a.formatLong);
    }
    return k;
  }).join("").match(u_).map((k) => {
    if (k === "''")
      return { isToken: !1, value: "'" };
    const h = k[0];
    if (h === "'")
      return { isToken: !1, value: m_(k) };
    if (bc[h])
      return { isToken: !0, value: k };
    if (h.match(p_))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + h + "`"
      );
    return { isToken: !1, value: k };
  });
  a.localize.preprocessor && (i = a.localize.preprocessor(l, i));
  const c = {
    firstWeekContainsDate: s,
    weekStartsOn: o,
    locale: a
  };
  return i.map((k) => {
    if (!k.isToken) return k.value;
    const h = k.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && yp(h) || !(n != null && n.useAdditionalDayOfYearTokens) && vp(h)) && Wl(h, t, String(e));
    const b = bc[h[0]];
    return b(l, h, a.localize, c);
  }).join("");
}
function m_(e) {
  const t = e.match(d_);
  return t ? t[1].replace(f_, "'") : e;
}
function h_(e) {
  return ke(e).getDay();
}
function v_(e) {
  const t = ke(e), n = t.getFullYear(), r = t.getMonth(), a = je(e, 0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function y_() {
  return Object.assign({}, jr());
}
function Un(e) {
  return ke(e).getHours();
}
function g_(e) {
  let n = ke(e).getDay();
  return n === 0 && (n = 7), n;
}
function dr(e) {
  return ke(e).getMinutes();
}
function $e(e) {
  return ke(e).getMonth();
}
function sa(e) {
  return ke(e).getSeconds();
}
function Me(e) {
  return ke(e).getFullYear();
}
function oa(e, t) {
  const n = ke(e), r = ke(t);
  return n.getTime() > r.getTime();
}
function es(e, t) {
  const n = ke(e), r = ke(t);
  return +n < +r;
}
function Gr(e, t) {
  const n = ke(e), r = ke(t);
  return +n == +r;
}
function b_(e, t) {
  const n = t instanceof Date ? je(t, 0) : new t(0);
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
const w_ = 10;
class gp {
  constructor() {
    be(this, "subPriority", 0);
  }
  validate(t, n) {
    return !0;
  }
}
class __ extends gp {
  constructor(t, n, r, a, s) {
    super(), this.value = t, this.validateValue = n, this.setValue = r, this.priority = a, s && (this.subPriority = s);
  }
  validate(t, n) {
    return this.validateValue(t, this.value, n);
  }
  set(t, n, r) {
    return this.setValue(t, n, this.value, r);
  }
}
class x_ extends gp {
  constructor() {
    super(...arguments);
    be(this, "priority", w_);
    be(this, "subPriority", -1);
  }
  set(n, r) {
    return r.timestampIsSet ? n : je(n, b_(n, Date));
  }
}
class Ue {
  run(t, n, r, a) {
    const s = this.parse(t, n, r, a);
    return s ? {
      setter: new __(
        s.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: s.rest
    } : null;
  }
  validate(t, n, r) {
    return !0;
  }
}
class T_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 140);
    be(this, "incompatibleTokens", ["R", "u", "t", "T"]);
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
const mt = {
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
}, xn = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function ht(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function ot(e, t) {
  const n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function Tn(e, t) {
  const n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  const r = n[1] === "+" ? 1 : -1, a = n[2] ? parseInt(n[2], 10) : 0, s = n[3] ? parseInt(n[3], 10) : 0, o = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (a * lp + s * mw + o * hw),
    rest: t.slice(n[0].length)
  };
}
function bp(e) {
  return ot(mt.anyDigitsSigned, e);
}
function dt(e, t) {
  switch (e) {
    case 1:
      return ot(mt.singleDigit, t);
    case 2:
      return ot(mt.twoDigits, t);
    case 3:
      return ot(mt.threeDigits, t);
    case 4:
      return ot(mt.fourDigits, t);
    default:
      return ot(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function ro(e, t) {
  switch (e) {
    case 1:
      return ot(mt.singleDigitSigned, t);
    case 2:
      return ot(mt.twoDigitsSigned, t);
    case 3:
      return ot(mt.threeDigitsSigned, t);
    case 4:
      return ot(mt.fourDigitsSigned, t);
    default:
      return ot(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function Mi(e) {
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
function wp(e, t) {
  const n = t > 0, r = n ? t : 1 - t;
  let a;
  if (r <= 50)
    a = e || 100;
  else {
    const s = r + 50, o = Math.trunc(s / 100) * 100, l = e >= s % 100;
    a = e + o - (l ? 100 : 0);
  }
  return n ? a : 1 - a;
}
function _p(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class S_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 130);
    be(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, r, a) {
    const s = (o) => ({
      year: o,
      isTwoDigitYear: r === "yy"
    });
    switch (r) {
      case "y":
        return ht(dt(4, n), s);
      case "yo":
        return ht(
          a.ordinalNumber(n, {
            unit: "year"
          }),
          s
        );
      default:
        return ht(dt(r.length, n), s);
    }
  }
  validate(n, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(n, r, a) {
    const s = n.getFullYear();
    if (a.isTwoDigitYear) {
      const l = wp(
        a.year,
        s
      );
      return n.setFullYear(l, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
    const o = !("era" in r) || r.era === 1 ? a.year : 1 - a.year;
    return n.setFullYear(o, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class k_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 130);
    be(this, "incompatibleTokens", [
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
    const s = (o) => ({
      year: o,
      isTwoDigitYear: r === "YY"
    });
    switch (r) {
      case "Y":
        return ht(dt(4, n), s);
      case "Yo":
        return ht(
          a.ordinalNumber(n, {
            unit: "year"
          }),
          s
        );
      default:
        return ht(dt(r.length, n), s);
    }
  }
  validate(n, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(n, r, a, s) {
    const o = Pi(n, s);
    if (a.isTwoDigitYear) {
      const i = wp(
        a.year,
        o
      );
      return n.setFullYear(
        i,
        0,
        s.firstWeekContainsDate
      ), n.setHours(0, 0, 0, 0), vn(n, s);
    }
    const l = !("era" in r) || r.era === 1 ? a.year : 1 - a.year;
    return n.setFullYear(l, 0, s.firstWeekContainsDate), n.setHours(0, 0, 0, 0), vn(n, s);
  }
}
class O_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 130);
    be(this, "incompatibleTokens", [
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
    return ro(r === "R" ? 4 : r.length, n);
  }
  set(n, r, a) {
    const s = je(n, 0);
    return s.setFullYear(a, 0, 4), s.setHours(0, 0, 0, 0), aa(s);
  }
}
class P_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 130);
    be(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, r) {
    return ro(r === "u" ? 4 : r.length, n);
  }
  set(n, r, a) {
    return n.setFullYear(a, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class A_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 120);
    be(this, "incompatibleTokens", [
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
class M_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 120);
    be(this, "incompatibleTokens", [
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
class E_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "incompatibleTokens", [
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
    be(this, "priority", 110);
  }
  parse(n, r, a) {
    const s = (o) => o - 1;
    switch (r) {
      case "M":
        return ht(
          ot(mt.month, n),
          s
        );
      case "MM":
        return ht(dt(2, n), s);
      case "Mo":
        return ht(
          a.ordinalNumber(n, {
            unit: "month"
          }),
          s
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
class D_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 110);
    be(this, "incompatibleTokens", [
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
    const s = (o) => o - 1;
    switch (r) {
      case "L":
        return ht(
          ot(mt.month, n),
          s
        );
      case "LL":
        return ht(dt(2, n), s);
      case "Lo":
        return ht(
          a.ordinalNumber(n, {
            unit: "month"
          }),
          s
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
function R_(e, t, n) {
  const r = ke(e), a = Ai(r, n) - t;
  return r.setDate(r.getDate() - a * 7), r;
}
class C_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 100);
    be(this, "incompatibleTokens", [
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
        return ot(mt.week, n);
      case "wo":
        return a.ordinalNumber(n, { unit: "week" });
      default:
        return dt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 53;
  }
  set(n, r, a, s) {
    return vn(R_(n, a, s), s);
  }
}
function N_(e, t) {
  const n = ke(e), r = Oi(n) - t;
  return n.setDate(n.getDate() - r * 7), n;
}
class $_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 100);
    be(this, "incompatibleTokens", [
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
        return ot(mt.week, n);
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
    return aa(N_(n, a));
  }
}
const I_ = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], F_ = [
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
class L_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 90);
    be(this, "subPriority", 1);
    be(this, "incompatibleTokens", [
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
        return ot(mt.date, n);
      case "do":
        return a.ordinalNumber(n, { unit: "date" });
      default:
        return dt(r.length, n);
    }
  }
  validate(n, r) {
    const a = n.getFullYear(), s = _p(a), o = n.getMonth();
    return s ? r >= 1 && r <= F_[o] : r >= 1 && r <= I_[o];
  }
  set(n, r, a) {
    return n.setDate(a), n.setHours(0, 0, 0, 0), n;
  }
}
class V_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 90);
    be(this, "subpriority", 1);
    be(this, "incompatibleTokens", [
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
        return ot(mt.dayOfYear, n);
      case "Do":
        return a.ordinalNumber(n, { unit: "date" });
      default:
        return dt(r.length, n);
    }
  }
  validate(n, r) {
    const a = n.getFullYear();
    return _p(a) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
  }
  set(n, r, a) {
    return n.setMonth(0, a), n.setHours(0, 0, 0, 0), n;
  }
}
function Ei(e, t, n) {
  var d, p, v, w;
  const r = jr(), a = (n == null ? void 0 : n.weekStartsOn) ?? ((p = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : p.weekStartsOn) ?? r.weekStartsOn ?? ((w = (v = r.locale) == null ? void 0 : v.options) == null ? void 0 : w.weekStartsOn) ?? 0, s = ke(e), o = s.getDay(), i = (t % 7 + 7) % 7, c = 7 - a, u = t < 0 || t > 6 ? t - (o + c) % 7 : (i + c) % 7 - (o + c) % 7;
  return dn(s, u);
}
class B_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 90);
    be(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
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
  set(n, r, a, s) {
    return n = Ei(n, a, s), n.setHours(0, 0, 0, 0), n;
  }
}
class j_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 90);
    be(this, "incompatibleTokens", [
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
  parse(n, r, a, s) {
    const o = (l) => {
      const i = Math.floor((l - 1) / 7) * 7;
      return (l + s.weekStartsOn + 6) % 7 + i;
    };
    switch (r) {
      case "e":
      case "ee":
        return ht(dt(r.length, n), o);
      case "eo":
        return ht(
          a.ordinalNumber(n, {
            unit: "day"
          }),
          o
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
  set(n, r, a, s) {
    return n = Ei(n, a, s), n.setHours(0, 0, 0, 0), n;
  }
}
class H_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 90);
    be(this, "incompatibleTokens", [
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
  parse(n, r, a, s) {
    const o = (l) => {
      const i = Math.floor((l - 1) / 7) * 7;
      return (l + s.weekStartsOn + 6) % 7 + i;
    };
    switch (r) {
      case "c":
      case "cc":
        return ht(dt(r.length, n), o);
      case "co":
        return ht(
          a.ordinalNumber(n, {
            unit: "day"
          }),
          o
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
  set(n, r, a, s) {
    return n = Ei(n, a, s), n.setHours(0, 0, 0, 0), n;
  }
}
function U_(e, t) {
  const n = ke(e), r = g_(n), a = t - r;
  return dn(n, a);
}
class Y_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 90);
    be(this, "incompatibleTokens", [
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
    const s = (o) => o === 0 ? 7 : o;
    switch (r) {
      case "i":
      case "ii":
        return dt(r.length, n);
      case "io":
        return a.ordinalNumber(n, { unit: "day" });
      case "iii":
        return ht(
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
          s
        );
      case "iiiii":
        return ht(
          a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiiiii":
        return ht(
          a.day(n, {
            width: "short",
            context: "formatting"
          }) || a.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          s
        );
      case "iiii":
      default:
        return ht(
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
          s
        );
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 7;
  }
  set(n, r, a) {
    return n = U_(n, a), n.setHours(0, 0, 0, 0), n;
  }
}
class q_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 80);
    be(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
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
    return n.setHours(Mi(a), 0, 0, 0), n;
  }
}
class W_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 80);
    be(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
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
    return n.setHours(Mi(a), 0, 0, 0), n;
  }
}
class z_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 80);
    be(this, "incompatibleTokens", ["a", "b", "t", "T"]);
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
    return n.setHours(Mi(a), 0, 0, 0), n;
  }
}
class K_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 70);
    be(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "h":
        return ot(mt.hour12h, n);
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
    const s = n.getHours() >= 12;
    return s && a < 12 ? n.setHours(a + 12, 0, 0, 0) : !s && a === 12 ? n.setHours(0, 0, 0, 0) : n.setHours(a, 0, 0, 0), n;
  }
}
class J_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 70);
    be(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "H":
        return ot(mt.hour23h, n);
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
class X_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 70);
    be(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "K":
        return ot(mt.hour11h, n);
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
class G_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 70);
    be(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "k":
        return ot(mt.hour24h, n);
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
    const s = a <= 24 ? a % 24 : a;
    return n.setHours(s, 0, 0, 0), n;
  }
}
class Q_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 60);
    be(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "m":
        return ot(mt.minute, n);
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
class Z_ extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 50);
    be(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r, a) {
    switch (r) {
      case "s":
        return ot(mt.second, n);
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
class e1 extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 30);
    be(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r) {
    const a = (s) => Math.trunc(s * Math.pow(10, -r.length + 3));
    return ht(dt(r.length, n), a);
  }
  set(n, r, a) {
    return n.setMilliseconds(a), n;
  }
}
class t1 extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 10);
    be(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(n, r) {
    switch (r) {
      case "X":
        return Tn(
          xn.basicOptionalMinutes,
          n
        );
      case "XX":
        return Tn(xn.basic, n);
      case "XXXX":
        return Tn(
          xn.basicOptionalSeconds,
          n
        );
      case "XXXXX":
        return Tn(
          xn.extendedOptionalSeconds,
          n
        );
      case "XXX":
      default:
        return Tn(xn.extended, n);
    }
  }
  set(n, r, a) {
    return r.timestampIsSet ? n : je(
      n,
      n.getTime() - no(n) - a
    );
  }
}
class n1 extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 10);
    be(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(n, r) {
    switch (r) {
      case "x":
        return Tn(
          xn.basicOptionalMinutes,
          n
        );
      case "xx":
        return Tn(xn.basic, n);
      case "xxxx":
        return Tn(
          xn.basicOptionalSeconds,
          n
        );
      case "xxxxx":
        return Tn(
          xn.extendedOptionalSeconds,
          n
        );
      case "xxx":
      default:
        return Tn(xn.extended, n);
    }
  }
  set(n, r, a) {
    return r.timestampIsSet ? n : je(
      n,
      n.getTime() - no(n) - a
    );
  }
}
class r1 extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 40);
    be(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return bp(n);
  }
  set(n, r, a) {
    return [je(n, a * 1e3), { timestampIsSet: !0 }];
  }
}
class a1 extends Ue {
  constructor() {
    super(...arguments);
    be(this, "priority", 20);
    be(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return bp(n);
  }
  set(n, r, a) {
    return [je(n, a), { timestampIsSet: !0 }];
  }
}
const s1 = {
  G: new T_(),
  y: new S_(),
  Y: new k_(),
  R: new O_(),
  u: new P_(),
  Q: new A_(),
  q: new M_(),
  M: new E_(),
  L: new D_(),
  w: new C_(),
  I: new $_(),
  d: new L_(),
  D: new V_(),
  E: new B_(),
  e: new j_(),
  c: new H_(),
  i: new Y_(),
  a: new q_(),
  b: new W_(),
  B: new z_(),
  h: new K_(),
  H: new J_(),
  K: new X_(),
  k: new G_(),
  m: new Q_(),
  s: new Z_(),
  S: new e1(),
  X: new t1(),
  x: new n1(),
  t: new r1(),
  T: new a1()
}, o1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, l1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, i1 = /^'([^]*?)'?$/, u1 = /''/g, c1 = /\S/, d1 = /[a-zA-Z]/;
function zl(e, t, n, r) {
  var m, S, R, k, h, b, q, Y;
  const a = y_(), s = (r == null ? void 0 : r.locale) ?? a.locale ?? mp, o = (r == null ? void 0 : r.firstWeekContainsDate) ?? ((S = (m = r == null ? void 0 : r.locale) == null ? void 0 : m.options) == null ? void 0 : S.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((k = (R = a.locale) == null ? void 0 : R.options) == null ? void 0 : k.firstWeekContainsDate) ?? 1, l = (r == null ? void 0 : r.weekStartsOn) ?? ((b = (h = r == null ? void 0 : r.locale) == null ? void 0 : h.options) == null ? void 0 : b.weekStartsOn) ?? a.weekStartsOn ?? ((Y = (q = a.locale) == null ? void 0 : q.options) == null ? void 0 : Y.weekStartsOn) ?? 0;
  if (t === "")
    return e === "" ? ke(n) : je(n, NaN);
  const i = {
    firstWeekContainsDate: o,
    weekStartsOn: l,
    locale: s
  }, c = [new x_()], u = t.match(l1).map((E) => {
    const _ = E[0];
    if (_ in ql) {
      const M = ql[_];
      return M(E, s.formatLong);
    }
    return E;
  }).join("").match(o1), d = [];
  for (let E of u) {
    !(r != null && r.useAdditionalWeekYearTokens) && yp(E) && Wl(E, t, e), !(r != null && r.useAdditionalDayOfYearTokens) && vp(E) && Wl(E, t, e);
    const _ = E[0], M = s1[_];
    if (M) {
      const { incompatibleTokens: C } = M;
      if (Array.isArray(C)) {
        const F = d.find(
          (Z) => C.includes(Z.token) || Z.token === _
        );
        if (F)
          throw new RangeError(
            `The format string mustn't contain \`${F.fullToken}\` and \`${E}\` at the same time`
          );
      } else if (M.incompatibleTokens === "*" && d.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${E}\` and any other token at the same time`
        );
      d.push({ token: _, fullToken: E });
      const H = M.run(
        e,
        E,
        s.match,
        i
      );
      if (!H)
        return je(n, NaN);
      c.push(H.setter), e = H.rest;
    } else {
      if (_.match(d1))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + _ + "`"
        );
      if (E === "''" ? E = "'" : _ === "'" && (E = f1(E)), e.indexOf(E) === 0)
        e = e.slice(E.length);
      else
        return je(n, NaN);
    }
  }
  if (e.length > 0 && c1.test(e))
    return je(n, NaN);
  const p = c.map((E) => E.priority).sort((E, _) => _ - E).filter((E, _, M) => M.indexOf(E) === _).map(
    (E) => c.filter((_) => _.priority === E).sort((_, M) => M.subPriority - _.subPriority)
  ).map((E) => E[0]);
  let v = ke(n);
  if (isNaN(v.getTime()))
    return je(n, NaN);
  const w = {};
  for (const E of p) {
    if (!E.validate(v, i))
      return je(n, NaN);
    const _ = E.set(v, w, i);
    Array.isArray(_) ? (v = _[0], Object.assign(w, _[1])) : v = _;
  }
  return je(n, v);
}
function f1(e) {
  return e.match(i1)[1].replace(u1, "'");
}
function Tc(e, t) {
  const n = Ar(e), r = Ar(t);
  return +n == +r;
}
function p1(e, t) {
  return dn(e, -t);
}
function xp(e, t) {
  const n = ke(e), r = n.getFullYear(), a = n.getDate(), s = je(e, 0);
  s.setFullYear(r, t, 15), s.setHours(0, 0, 0, 0);
  const o = v_(s);
  return n.setMonth(t, Math.min(a, o)), n;
}
function Je(e, t) {
  let n = ke(e);
  return isNaN(+n) ? je(e, NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = xp(n, t.month)), t.date != null && n.setDate(t.date), t.hours != null && n.setHours(t.hours), t.minutes != null && n.setMinutes(t.minutes), t.seconds != null && n.setSeconds(t.seconds), t.milliseconds != null && n.setMilliseconds(t.milliseconds), n);
}
function m1(e, t) {
  const n = ke(e);
  return n.setHours(t), n;
}
function Tp(e, t) {
  const n = ke(e);
  return n.setMilliseconds(t), n;
}
function h1(e, t) {
  const n = ke(e);
  return n.setMinutes(t), n;
}
function Sp(e, t) {
  const n = ke(e);
  return n.setSeconds(t), n;
}
function Sn(e, t) {
  const n = ke(e);
  return isNaN(+n) ? je(e, NaN) : (n.setFullYear(t), n);
}
function la(e, t) {
  return pn(e, -t);
}
function v1(e, t) {
  const {
    years: n = 0,
    months: r = 0,
    weeks: a = 0,
    days: s = 0,
    hours: o = 0,
    minutes: l = 0,
    seconds: i = 0
  } = t, c = la(e, r + n * 12), u = p1(c, s + a * 7), d = l + o * 60, v = (i + d * 60) * 1e3;
  return je(e, u.getTime() - v);
}
function kp(e, t) {
  return ki(e, -t);
}
function pa() {
  return U(), Q(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Se("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      Se("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Se("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Se("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
pa.compatConfig = {
  MODE: 3
};
function Op() {
  return U(), Q(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Se("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      Se("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Op.compatConfig = {
  MODE: 3
};
function Di() {
  return U(), Q(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Se("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Di.compatConfig = {
  MODE: 3
};
function Ri() {
  return U(), Q(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Se("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Ri.compatConfig = {
  MODE: 3
};
function Ci() {
  return U(), Q(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Se("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      Se("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
Ci.compatConfig = {
  MODE: 3
};
function Ni() {
  return U(), Q(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Se("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Ni.compatConfig = {
  MODE: 3
};
function $i() {
  return U(), Q(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Se("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
$i.compatConfig = {
  MODE: 3
};
const Jt = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), Ii = (e, t, n) => Kl(e, t, n) || le(), y1 = (e, t, n) => {
  const r = t.dateInTz ? Jt(new Date(e), t.dateInTz) : le(e);
  return n ? Yt(r, !0) : r;
}, Kl = (e, t, n) => {
  if (!e) return null;
  const r = n ? Yt(le(e), !0) : le(e);
  return t ? t.exactMatch ? y1(e, t, n) : Jt(r, t.timezone) : r;
}, g1 = (e) => {
  if (!e) return 0;
  const t = /* @__PURE__ */ new Date(), n = new Date(t.toLocaleString("en-US", { timeZone: "UTC" })), r = new Date(t.toLocaleString("en-US", { timeZone: e })), a = r.getTimezoneOffset() / 60;
  return (+n - +r) / (1e3 * 60 * 60) - a;
};
var un = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(un || {}), _r = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(_r || {}), Nr = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Nr || {}), Nt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(Nt || {});
const b1 = ["timestamp", "date", "iso"];
var jt = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(jt || {}), st = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(st || {});
function Sc(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function w1(e) {
  return (t) => Pn(Jt(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "UTC"), "EEEEEE", { locale: e });
}
const _1 = (e, t, n) => {
  const r = [1, 2, 3, 4, 5, 6, 7];
  let a;
  if (e !== null)
    try {
      a = r.map(w1(e));
    } catch {
      a = r.map(Sc(t));
    }
  else
    a = r.map(Sc(t));
  const s = a.slice(0, n), o = a.slice(n + 1, a.length);
  return [a[n]].concat(...o).concat(...s);
}, Fi = (e, t, n) => {
  const r = [];
  for (let a = +e[0]; a <= +e[1]; a++)
    r.push({ value: +a, text: Ep(a, t) });
  return n ? r.reverse() : r;
}, Pp = (e, t, n) => {
  const r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((s) => {
    const o = s < 10 ? `0${s}` : s;
    return /* @__PURE__ */ new Date(`2017-${o}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const s = n === "long" ? "LLLL" : "LLL";
      return r.map((o, l) => {
        const i = Pn(Jt(o, "UTC"), s, { locale: e });
        return {
          text: i.charAt(0).toUpperCase() + i.substring(1),
          value: l
        };
      });
    } catch {
    }
  const a = new Intl.DateTimeFormat(t, { month: n, timeZone: "UTC" });
  return r.map((s, o) => {
    const l = a.format(s);
    return {
      text: l.charAt(0).toUpperCase() + l.substring(1),
      value: o
    };
  });
}, x1 = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], gt = (e) => {
  const t = D(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, T1 = (e) => ({ type: "dot", ...e ?? {} }), Ap = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Li = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Tt = (e) => e, kc = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Oc = (e) => e === null, Mp = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, S1 = (e) => {
  const t = [], n = (r) => r.filter((a) => a);
  for (let r = 0; r < e.length; r += 3) {
    const a = [e[r], e[r + 1], e[r + 2]];
    t.push(n(a));
  }
  return t;
}, ts = (e, t, n) => {
  const r = n != null, a = t != null;
  if (!r && !a) return !1;
  const s = +n, o = +t;
  return r && a ? +e > s || +e < o : r ? +e > s : a ? +e < o : !1;
}, ia = (e, t) => S1(e).map((n) => n.map((r) => {
  const { active: a, disabled: s, isBetween: o, highlighted: l } = t(r);
  return {
    ...r,
    active: a,
    disabled: s,
    className: {
      dp__overlay_cell_active: a,
      dp__overlay_cell: !a,
      dp__overlay_cell_disabled: s,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: s && a,
      dp__cell_in_between: o,
      "dp--highlighted": l
    }
  };
})), rr = (e, t, n = !1) => {
  e && t.allowStopPropagation && (n && e.stopImmediatePropagation(), e.stopPropagation());
}, k1 = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function O1(e, t) {
  let n = [...document.querySelectorAll(k1())];
  n = n.filter((a) => !e.contains(a) || a.hasAttribute("data-datepicker-instance"));
  const r = n.indexOf(e);
  if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length))
    return n[r + (t ? -1 : 1)];
}
const P1 = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), Ep = (e, t) => new Intl.NumberFormat(t, { useGrouping: !1, style: "decimal" }).format(e), Vi = (e) => Pn(e, "dd-MM-yyyy"), fl = (e) => Array.isArray(e), ao = (e, t) => t.get(Vi(e)), A1 = (e, t) => e ? t ? t instanceof Map ? !!ao(e, t) : t(le(e)) : !1 : !0, zt = (e, t, n = !1) => {
  if (e.key === st.enter || e.key === st.space)
    return n && e.preventDefault(), t();
}, Pc = (e, t, n, r, a, s) => {
  const o = zl(e, t.slice(0, e.length), /* @__PURE__ */ new Date(), { locale: s });
  return Ba(o) && cp(o) ? r || a ? o : Je(o, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, M1 = (e, t, n, r, a, s) => {
  const o = Array.isArray(n) ? n[0] : n;
  if (typeof t == "string")
    return Pc(e, t, o, r, a, s);
  if (Array.isArray(t)) {
    let l = null;
    for (const i of t)
      if (l = Pc(e, i, o, r, a, s), l)
        break;
    return l;
  }
  return typeof t == "function" ? t(e) : null;
}, le = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), E1 = (e, t, n) => {
  if (t) {
    const a = (e.getMonth() + 1).toString().padStart(2, "0"), s = e.getDate().toString().padStart(2, "0"), o = e.getHours().toString().padStart(2, "0"), l = e.getMinutes().toString().padStart(2, "0"), i = n ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${a}-${s}T${o}:${l}:${i}.000Z`;
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
}, Yt = (e, t) => {
  const n = le(JSON.parse(JSON.stringify(e))), r = Je(n, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  return t ? Tw(r) : r;
}, ar = (e, t, n, r) => {
  let a = e ? le(e) : le();
  return (t || t === 0) && (a = m1(a, +t)), (n || n === 0) && (a = h1(a, +n)), (r || r === 0) && (a = Sp(a, +r)), Tp(a, 0);
}, ut = (e, t) => !e || !t ? !1 : es(Yt(e), Yt(t)), Ie = (e, t) => !e || !t ? !1 : Gr(Yt(e), Yt(t)), pt = (e, t) => !e || !t ? !1 : oa(Yt(e), Yt(t)), Eo = (e, t, n) => e != null && e[0] && e != null && e[1] ? pt(n, e[0]) && ut(n, e[1]) : e != null && e[0] && t ? pt(n, e[0]) && ut(n, t) || ut(n, e[0]) && pt(n, t) : !1, fn = (e) => {
  const t = Je(new Date(e), { date: 1 });
  return Yt(t);
}, pl = (e, t, n) => t && (n || n === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((r) => r === t ? [r, n] : [r, isNaN(+e[r]) ? void 0 : +e[r]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, $r = (e) => ({
  hours: Un(e),
  minutes: dr(e),
  seconds: sa(e)
}), Dp = (e, t) => {
  if (t) {
    const n = Me(le(t));
    if (n > e) return 12;
    if (n === e) return $e(le(t));
  }
}, Rp = (e, t) => {
  if (t) {
    const n = Me(le(t));
    return n < e ? -1 : n === e ? $e(le(t)) : void 0;
  }
}, ua = (e) => {
  if (e) return Me(le(e));
}, Cp = (e, t) => {
  const n = pt(e, t) ? t : e, r = pt(t, e) ? t : e;
  return dp({ start: n, end: r });
}, D1 = (e) => {
  const t = pn(e, 1);
  return { month: $e(t), year: Me(t) };
}, $n = (e, t) => {
  const n = vn(e, { weekStartsOn: +t }), r = pp(e, { weekStartsOn: +t });
  return [n, r];
}, Np = (e, t) => {
  const n = {
    hours: Un(le()),
    minutes: dr(le()),
    seconds: t ? sa(le()) : 0
  };
  return Object.assign(n, e);
}, tr = (e, t, n) => [Je(le(e), { date: 1 }), Je(le(), { month: t, year: n, date: 1 })], Ln = (e, t, n) => {
  let r = e ? le(e) : le();
  return (t || t === 0) && (r = xp(r, t)), n && (r = Sn(r, n)), r;
}, $p = (e, t, n, r, a) => {
  if (!r || a && !t || !a && !n) return !1;
  const s = a ? pn(e, 1) : la(e, 1), o = [$e(s), Me(s)];
  return a ? !C1(...o, t) : !R1(...o, n);
}, R1 = (e, t, n) => ut(...tr(n, e, t)) || Ie(...tr(n, e, t)), C1 = (e, t, n) => pt(...tr(n, e, t)) || Ie(...tr(n, e, t)), Ip = (e, t, n, r, a, s, o) => {
  if (typeof t == "function" && !o) return t(e);
  const l = n ? { locale: n } : void 0;
  return Array.isArray(e) ? `${Pn(e[0], s, l)}${a && !e[1] ? "" : r}${e[1] ? Pn(e[1], s, l) : ""}` : Pn(e, s, l);
}, Kr = (e) => {
  if (e) return null;
  throw new Error(Li.prop("partial-range"));
}, ks = (e, t) => {
  if (t) return e();
  throw new Error(Li.prop("range"));
}, Jl = (e) => Array.isArray(e) ? Ba(e[0]) && (e[1] ? Ba(e[1]) : !0) : e ? Ba(e) : !1, N1 = (e, t) => Je(t ?? le(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), ml = (e, t, n, r) => {
  if (!e) return !0;
  if (r) {
    const a = n === "max" ? es(e, t) : oa(e, t), s = { seconds: 0, milliseconds: 0 };
    return a || Gr(Je(e, s), Je(t, s));
  }
  return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, hl = (e, t, n) => e ? N1(e, t) : le(n ?? t), Ac = (e, t, n, r, a) => {
  if (Array.isArray(r)) {
    const o = hl(e, r[0], t), l = hl(e, r[1], t);
    return ml(r[0], o, n, !!t) && ml(r[1], l, n, !!t) && a;
  }
  const s = hl(e, r, t);
  return ml(r, s, n, !!t) && a;
}, vl = (e) => Je(le(), $r(e)), $1 = (e, t) => e instanceof Map ? Array.from(e.values()).filter((n) => Me(le(n)) === t).map((n) => $e(n)) : [], Fp = (e, t, n) => typeof e == "function" ? e({ month: t, year: n }) : !!e.months.find((r) => r.month === t && r.year === n), Bi = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), Lp = (e) => Pn(e, "yyyy-MM-dd"), Oa = /* @__PURE__ */ qn({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Vp = () => {
  const e = (n) => {
    Oa.menuFocused = n;
  }, t = (n) => {
    Oa.shiftKeyInMenu !== n && (Oa.shiftKeyInMenu = n);
  };
  return {
    control: oe(() => ({ shiftKeyInMenu: Oa.shiftKeyInMenu, menuFocused: Oa.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, Ze = /* @__PURE__ */ qn({
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
}), yl = /* @__PURE__ */ se(null), Os = /* @__PURE__ */ se(!1), gl = /* @__PURE__ */ se(!1), bl = /* @__PURE__ */ se(!1), wl = /* @__PURE__ */ se(!1), Rt = /* @__PURE__ */ se(0), ft = /* @__PURE__ */ se(0), fr = () => {
  const e = oe(() => Os.value ? [...Ze.selectionGrid, Ze.actionRow].filter((d) => d.length) : gl.value ? [
    ...Ze.timePicker[0],
    ...Ze.timePicker[1],
    wl.value ? [] : [yl.value],
    Ze.actionRow
  ].filter((d) => d.length) : bl.value ? [...Ze.monthPicker, Ze.actionRow] : [Ze.monthYear, ...Ze.calendar, Ze.time, Ze.actionRow].filter((d) => d.length)), t = (d) => {
    Rt.value = d ? Rt.value + 1 : Rt.value - 1;
    let p = null;
    e.value[ft.value] && (p = e.value[ft.value][Rt.value]), !p && e.value[ft.value + (d ? 1 : -1)] ? (ft.value = ft.value + (d ? 1 : -1), Rt.value = d ? 0 : e.value[ft.value].length - 1) : p || (Rt.value = d ? Rt.value - 1 : Rt.value + 1);
  }, n = (d) => {
    ft.value === 0 && !d || ft.value === e.value.length && d || (ft.value = d ? ft.value + 1 : ft.value - 1, e.value[ft.value] ? e.value[ft.value] && !e.value[ft.value][Rt.value] && Rt.value !== 0 && (Rt.value = e.value[ft.value].length - 1) : ft.value = d ? ft.value - 1 : ft.value + 1);
  }, r = (d) => {
    let p = null;
    e.value[ft.value] && (p = e.value[ft.value][Rt.value]), p ? p.focus({ preventScroll: !Os.value }) : Rt.value = d ? Rt.value - 1 : Rt.value + 1;
  }, a = () => {
    t(!0), r(!0);
  }, s = () => {
    t(!1), r(!1);
  }, o = () => {
    n(!1), r(!0);
  }, l = () => {
    n(!0), r(!0);
  }, i = (d, p) => {
    Ze[p] = d;
  }, c = (d, p) => {
    Ze[p] = d;
  }, u = () => {
    Rt.value = 0, ft.value = 0;
  };
  return {
    buildMatrix: i,
    buildMultiLevelMatrix: c,
    setTimePickerBackRef: (d) => {
      yl.value = d;
    },
    setSelectionGrid: (d) => {
      Os.value = d, u(), d || (Ze.selectionGrid = []);
    },
    setTimePicker: (d, p = !1) => {
      gl.value = d, wl.value = p, u(), d || (Ze.timePicker[0] = [], Ze.timePicker[1] = []);
    },
    setTimePickerElements: (d, p = 0) => {
      Ze.timePicker[p] = d;
    },
    arrowRight: a,
    arrowLeft: s,
    arrowUp: o,
    arrowDown: l,
    clearArrowNav: () => {
      Ze.monthYear = [], Ze.calendar = [], Ze.time = [], Ze.actionRow = [], Ze.selectionGrid = [], Ze.timePicker[0] = [], Ze.timePicker[1] = [], Os.value = !1, gl.value = !1, wl.value = !1, bl.value = !1, u(), yl.value = null;
    },
    setMonthPicker: (d) => {
      bl.value = d, u();
    },
    refSets: Ze
    // exposed for testing
  };
}, Mc = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), I1 = (e) => ({
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
}), Ec = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, F1 = (e) => {
  const t = typeof e == "object" && e, n = {
    static: !0,
    solo: !1
  };
  if (!e) return { ...n, count: Ec(!1) };
  const r = t ? e : {}, a = t ? r.count ?? !0 : e, s = Ec(a);
  return Object.assign(n, r, { count: s });
}, L1 = (e, t, n) => e || (typeof n == "string" ? n : t), V1 = (e) => typeof e == "boolean" ? e ? Mc({}) : !1 : Mc(e), B1 = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, j1 = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), H1 = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), U1 = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, Y1 = (e) => ({ allowStopPropagation: !0, closeOnScroll: !1, modeHeight: 255, allowPreventDefault: !1, closeOnClearValue: !0, closeOnAutoApply: !0, noSwipe: !1, keepActionRow: !1, onClickOutside: void 0, tabOutClosesMenu: !0, arrowLeft: void 0, keepViewOnOffsetClick: !1, timeArrowHoldThreshold: 0, ...e ?? {} }), q1 = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((n) => le(n)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, W1 = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, z1 = (e, t) => typeof e == "object" ? { enabled: !0, ...{
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
}, K1 = (e, t) => e ? typeof e == "string" ? { timezone: e, exactMatch: !1, dateInTz: void 0, emitTimezone: t, convertModel: !0 } : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: t ?? e.emitTimezone,
  convertModel: e.convertModel ?? !0
} : { timezone: void 0, exactMatch: !1, emitTimezone: t }, _l = (e, t, n) => new Map(
  e.map((r) => {
    const a = Ii(r, t, n);
    return [Vi(a), a];
  })
), J1 = (e, t) => e.length ? new Map(
  e.map((n) => {
    const r = Ii(n.date, t);
    return [Vi(r), n];
  })
) : null, X1 = (e) => {
  var t;
  return {
    minDate: Kl(e.minDate, e.timezone, e.isSpecific),
    maxDate: Kl(e.maxDate, e.timezone, e.isSpecific),
    disabledDates: fl(e.disabledDates) ? _l(e.disabledDates, e.timezone, e.isSpecific) : e.disabledDates,
    allowedDates: fl(e.allowedDates) ? _l(e.allowedDates, e.timezone, e.isSpecific) : null,
    highlight: typeof e.highlight == "object" && fl((t = e.highlight) == null ? void 0 : t.dates) ? _l(e.highlight.dates, e.timezone) : e.highlight,
    markers: J1(e.markers, e.timezone)
  };
}, G1 = (e, t) => typeof e == "boolean" ? { enabled: e, dragSelect: !0, limit: +t } : {
  enabled: !!e,
  limit: e.limit ? +e.limit : null,
  dragSelect: e.dragSelect ?? !0
}, Q1 = (e) => ({
  ...Object.fromEntries(
    Object.keys(e).map((t) => {
      const n = t, r = e[n], a = typeof e[n] == "string" ? { [r]: !0 } : Object.fromEntries(r.map((s) => [s, !0]));
      return [t, a];
    })
  )
}), lt = (e) => {
  const t = () => {
    const Y = e.enableSeconds ? ":ss" : "", E = e.enableMinutes ? ":mm" : "";
    return e.is24 ? `HH${E}${Y}` : `hh${E}${Y} aa`;
  }, n = () => {
    var Y;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((Y = S.value) == null ? void 0 : Y.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, r = (Y) => Np(Y, e.enableSeconds), a = () => b.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [r(e.startTime[0]), r(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? r(e.startTime) : null, s = oe(() => F1(e.multiCalendars)), o = oe(() => a()), l = oe(() => I1(e.ariaLabels)), i = oe(() => j1(e.filters)), c = oe(() => V1(e.transitions)), u = oe(() => H1(e.actionRow)), d = oe(
    () => L1(e.previewFormat, e.format, n())
  ), p = oe(() => B1(e.textInput)), v = oe(() => U1(e.inline)), w = oe(() => Y1(e.config)), m = oe(() => q1(e.highlight)), S = oe(() => W1(e.weekNumbers)), R = oe(() => K1(e.timezone, e.emitTimezone)), k = oe(() => G1(e.multiDates, e.multiDatesLimit)), h = oe(
    () => X1({
      minDate: e.minDate,
      maxDate: e.maxDate,
      disabledDates: e.disabledDates,
      allowedDates: e.allowedDates,
      highlight: m.value,
      markers: e.markers,
      timezone: R.value,
      isSpecific: e.monthPicker || e.yearPicker || e.quarterPicker
    })
  ), b = oe(
    () => z1(e.range, {
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
  ), q = oe(() => Q1(e.ui));
  return {
    defaultedTransitions: c,
    defaultedMultiCalendars: s,
    defaultedStartTime: o,
    defaultedAriaLabels: l,
    defaultedFilters: i,
    defaultedActionRow: u,
    defaultedPreviewFormat: d,
    defaultedTextInput: p,
    defaultedInline: v,
    defaultedConfig: w,
    defaultedHighlight: m,
    defaultedWeekNumbers: S,
    defaultedRange: b,
    propDates: h,
    defaultedTz: R,
    defaultedMultiDates: k,
    defaultedUI: q,
    getDefaultPattern: n,
    getDefaultStartTime: a
  };
}, Z1 = (e, t, n) => {
  const r = /* @__PURE__ */ se(), { defaultedTextInput: a, defaultedRange: s, defaultedTz: o, defaultedMultiDates: l, getDefaultPattern: i } = lt(t), c = /* @__PURE__ */ se(""), u = /* @__PURE__ */ Ya(t, "format"), d = /* @__PURE__ */ Ya(t, "formatLocale");
  ze(
    r,
    () => {
      typeof t.onInternalModelChange == "function" && e("internal-model-change", r.value, fe(!0));
    },
    { deep: !0 }
  ), ze(s, (I, ye) => {
    I.enabled !== ye.enabled && (r.value = null);
  }), ze(u, () => {
    X();
  });
  const p = (I) => o.value.timezone && o.value.convertModel ? Jt(I, o.value.timezone) : I, v = (I) => {
    if (o.value.timezone && o.value.convertModel) {
      const ye = g1(o.value.timezone);
      return vw(I, ye);
    }
    return I;
  }, w = (I, ye, Pe = !1) => Ip(
    I,
    t.format,
    t.formatLocale,
    a.value.rangeSeparator,
    t.modelAuto,
    ye ?? i(),
    Pe
  ), m = (I) => I ? t.modelType ? ve(I) : {
    hours: Un(I),
    minutes: dr(I),
    seconds: t.enableSeconds ? sa(I) : 0
  } : null, S = (I) => t.modelType ? ve(I) : { month: $e(I), year: Me(I) }, R = (I) => Array.isArray(I) ? l.value.enabled ? I.map((ye) => k(ye, Sn(le(), ye))) : ks(
    () => [
      Sn(le(), I[0]),
      I[1] ? Sn(le(), I[1]) : Kr(s.value.partialRange)
    ],
    s.value.enabled
  ) : Sn(le(), +I), k = (I, ye) => (typeof I == "string" || typeof I == "number") && t.modelType ? ie(I) : ye, h = (I) => Array.isArray(I) ? [
    k(
      I[0],
      ar(null, +I[0].hours, +I[0].minutes, I[0].seconds)
    ),
    k(
      I[1],
      ar(null, +I[1].hours, +I[1].minutes, I[1].seconds)
    )
  ] : k(I, ar(null, I.hours, I.minutes, I.seconds)), b = (I) => {
    const ye = Je(le(), { date: 1 });
    return Array.isArray(I) ? l.value.enabled ? I.map((Pe) => k(Pe, Ln(ye, +Pe.month, +Pe.year))) : ks(
      () => [
        k(I[0], Ln(ye, +I[0].month, +I[0].year)),
        k(
          I[1],
          I[1] ? Ln(ye, +I[1].month, +I[1].year) : Kr(s.value.partialRange)
        )
      ],
      s.value.enabled
    ) : k(I, Ln(ye, +I.month, +I.year));
  }, q = (I) => {
    if (Array.isArray(I))
      return I.map((ye) => ie(ye));
    throw new Error(Li.dateArr("multi-dates"));
  }, Y = (I) => {
    if (Array.isArray(I) && s.value.enabled) {
      const ye = I[0], Pe = I[1];
      return [
        le(Array.isArray(ye) ? ye[0] : null),
        le(Array.isArray(Pe) ? Pe[0] : null)
      ];
    }
    return le(I[0]);
  }, E = (I) => t.modelAuto ? Array.isArray(I) ? [ie(I[0]), ie(I[1])] : t.autoApply ? [ie(I)] : [ie(I), null] : Array.isArray(I) ? ks(
    () => I[1] ? [
      ie(I[0]),
      I[1] ? ie(I[1]) : Kr(s.value.partialRange)
    ] : [ie(I[0])],
    s.value.enabled
  ) : ie(I), _ = () => {
    Array.isArray(r.value) && s.value.enabled && r.value.length === 1 && r.value.push(Kr(s.value.partialRange));
  }, M = () => {
    const I = r.value;
    return [
      ve(I[0]),
      I[1] ? ve(I[1]) : Kr(s.value.partialRange)
    ];
  }, C = () => r.value[1] ? M() : ve(Tt(r.value[0])), H = () => (r.value || []).map((I) => ve(I)), F = (I = !1) => (I || _(), t.modelAuto ? C() : l.value.enabled ? H() : Array.isArray(r.value) ? ks(() => M(), s.value.enabled) : ve(Tt(r.value))), Z = (I) => !I || Array.isArray(I) && !I.length ? null : t.timePicker ? h(Tt(I)) : t.monthPicker ? b(Tt(I)) : t.yearPicker ? R(Tt(I)) : l.value.enabled ? q(Tt(I)) : t.weekPicker ? Y(Tt(I)) : E(Tt(I)), j = (I) => {
    const ye = Z(I);
    Jl(Tt(ye)) ? (r.value = Tt(ye), X()) : (r.value = null, c.value = "");
  }, T = () => {
    const I = (ye) => Pn(ye, a.value.format);
    return `${I(r.value[0])} ${a.value.rangeSeparator} ${r.value[1] ? I(r.value[1]) : ""}`;
  }, L = () => n.value && r.value ? Array.isArray(r.value) ? T() : Pn(r.value, a.value.format) : w(r.value), y = () => r.value ? l.value.enabled ? r.value.map((I) => w(I)).join("; ") : a.value.enabled && typeof a.value.format == "string" ? L() : w(r.value) : "", X = () => {
    !t.format || typeof t.format == "string" || a.value.enabled && typeof a.value.format == "string" ? c.value = y() : c.value = t.format(r.value);
  }, ie = (I) => {
    if (t.utc) {
      const ye = new Date(I);
      return t.utc === "preserve" ? new Date(ye.getTime() + ye.getTimezoneOffset() * 6e4) : ye;
    }
    return t.modelType ? b1.includes(t.modelType) ? p(new Date(I)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? p(
      zl(I, i(), /* @__PURE__ */ new Date(), { locale: d.value })
    ) : p(
      zl(I, t.modelType, /* @__PURE__ */ new Date(), { locale: d.value })
    ) : p(new Date(I));
  }, ve = (I) => I ? t.utc ? E1(I, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +v(I) : t.modelType === "iso" ? v(I).toISOString() : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? w(v(I)) : w(v(I), t.modelType, !0) : v(I) : "", _e = (I, ye = !1, Pe = !1) => {
    if (Pe) return I;
    if (e("update:model-value", I), o.value.emitTimezone && ye) {
      const J = Array.isArray(I) ? I.map((g) => Jt(Tt(g), o.value.emitTimezone)) : Jt(Tt(I), o.value.emitTimezone);
      e("update:model-timezone-value", J);
    }
  }, V = (I) => Array.isArray(r.value) ? l.value.enabled ? r.value.map((ye) => I(ye)) : [
    I(r.value[0]),
    r.value[1] ? I(r.value[1]) : Kr(s.value.partialRange)
  ] : I(Tt(r.value)), te = () => {
    if (Array.isArray(r.value)) {
      const I = $n(r.value[0], t.weekStart), ye = r.value[1] ? $n(r.value[1], t.weekStart) : [];
      return [I.map((Pe) => le(Pe)), ye.map((Pe) => le(Pe))];
    }
    return $n(r.value, t.weekStart).map((I) => le(I));
  }, x = (I, ye) => _e(Tt(V(I)), !1, ye), G = (I) => {
    const ye = te();
    return I ? ye : e("update:model-value", te());
  }, fe = (I = !1) => (I || X(), t.monthPicker ? x(S, I) : t.timePicker ? x(m, I) : t.yearPicker ? x(Me, I) : t.weekPicker ? G(I) : _e(F(I), !0, I));
  return {
    inputValue: c,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? s.value.enabled ? s.value.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: j,
    formatInputValue: X,
    emitModelValue: fe
  };
}, ex = (e, t) => {
  const { defaultedFilters: n, propDates: r } = lt(e), { validateMonthYearInRange: a } = pr(e), s = (u, d) => {
    let p = u;
    return n.value.months.includes($e(p)) ? (p = d ? pn(u, 1) : la(u, 1), s(p, d)) : p;
  }, o = (u, d) => {
    let p = u;
    return n.value.years.includes(Me(p)) ? (p = d ? ki(u, 1) : kp(u, 1), o(p, d)) : p;
  }, l = (u, d = !1) => {
    const p = Je(le(), { month: e.month, year: e.year });
    let v = u ? pn(p, 1) : la(p, 1);
    e.disableYearSelect && (v = Sn(v, e.year));
    let w = $e(v), m = Me(v);
    n.value.months.includes(w) && (v = s(v, u), w = $e(v), m = Me(v)), n.value.years.includes(m) && (v = o(v, u), m = Me(v)), a(w, m, u, e.preventMinMaxNavigation) && i(w, m, d);
  }, i = (u, d, p) => {
    t("update-month-year", { month: u, year: d, fromNav: p });
  }, c = oe(() => (u) => $p(
    Je(le(), { month: e.month, year: e.year }),
    r.value.maxDate,
    r.value.minDate,
    e.preventMinMaxNavigation,
    u
  ));
  return { handleMonthYearChange: l, isDisabled: c, updateMonthYear: i };
}, Do = {
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
  dayClass: {
    type: Function,
    default: null
  },
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
  teleport: { type: [Boolean, String, Object], default: null },
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
  multiDates: { type: [Object, Boolean], default: !1 },
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
  loading: { type: Boolean, default: !1 },
  onInternalModelChange: { type: [Function, Object], default: null },
  enableMinutes: { type: Boolean, default: !0 },
  ui: { type: Object, default: () => ({}) }
}, yn = {
  ...Do,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null },
  getInputRect: { type: Function, default: () => ({}) },
  isTextInputDate: { type: Boolean, default: !1 }
}, tx = ["title"], nx = ["disabled"], rx = /* @__PURE__ */ Dt({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...yn
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const n = t, r = e, {
      defaultedActionRow: a,
      defaultedPreviewFormat: s,
      defaultedMultiCalendars: o,
      defaultedTextInput: l,
      defaultedInline: i,
      defaultedRange: c,
      defaultedMultiDates: u,
      getDefaultPattern: d
    } = lt(r), { isTimeValid: p, isMonthValid: v } = pr(r), { buildMatrix: w } = fr(), m = /* @__PURE__ */ se(null), S = /* @__PURE__ */ se(null), R = /* @__PURE__ */ se(!1), k = /* @__PURE__ */ se({}), h = /* @__PURE__ */ se(null), b = /* @__PURE__ */ se(null);
    _t(() => {
      r.arrowNavigation && w([gt(m), gt(S)], "actionRow"), q(), window.addEventListener("resize", q);
    }), ss(() => {
      window.removeEventListener("resize", q);
    });
    const q = () => {
      R.value = !1, setTimeout(() => {
        var T, L;
        const y = (T = h.value) == null ? void 0 : T.getBoundingClientRect(), X = (L = b.value) == null ? void 0 : L.getBoundingClientRect();
        y && X && (k.value.maxWidth = `${X.width - y.width - 20}px`), R.value = !0;
      }, 0);
    }, Y = oe(() => c.value.enabled && !c.value.partialRange && r.internalModelValue ? r.internalModelValue.length === 2 : !0), E = oe(
      () => !p.value(r.internalModelValue) || !v.value(r.internalModelValue) || !Y.value
    ), _ = () => {
      const T = s.value;
      return r.timePicker || r.monthPicker, T(Tt(r.internalModelValue));
    }, M = () => {
      const T = r.internalModelValue;
      return o.value.count > 0 ? `${C(T[0])} - ${C(T[1])}` : [C(T[0]), C(T[1])];
    }, C = (T) => Ip(
      T,
      s.value,
      r.formatLocale,
      l.value.rangeSeparator,
      r.modelAuto,
      d()
    ), H = oe(() => !r.internalModelValue || !r.menuMount ? "" : typeof s.value == "string" ? Array.isArray(r.internalModelValue) ? r.internalModelValue.length === 2 && r.internalModelValue[1] ? M() : u.value.enabled ? r.internalModelValue.map((T) => `${C(T)}`) : r.modelAuto ? `${C(r.internalModelValue[0])}` : `${C(r.internalModelValue[0])} -` : C(r.internalModelValue) : _()), F = () => u.value.enabled ? "; " : " - ", Z = oe(
      () => Array.isArray(H.value) ? H.value.join(F()) : H.value
    ), j = () => {
      p.value(r.internalModelValue) && v.value(r.internalModelValue) && Y.value ? n("select-date") : n("invalid-select");
    };
    return (T, L) => (U(), Q("div", {
      ref_key: "actionRowRef",
      ref: b,
      class: "dp__action_row"
    }, [
      T.$slots["action-row"] ? we(T.$slots, "action-row", St(bt({ key: 0 }, {
        internalModelValue: T.internalModelValue,
        disabled: E.value,
        selectDate: () => T.$emit("select-date"),
        closePicker: () => T.$emit("close-picker")
      }))) : (U(), Q(Te, { key: 1 }, [
        D(a).showPreview ? (U(), Q("div", {
          key: 0,
          class: "dp__selection_preview",
          title: Z.value,
          style: Pt(k.value)
        }, [
          T.$slots["action-preview"] && R.value ? we(T.$slots, "action-preview", {
            key: 0,
            value: T.internalModelValue
          }) : ae("", !0),
          !T.$slots["action-preview"] && R.value ? (U(), Q(Te, { key: 1 }, [
            hn(Fe(Z.value), 1)
          ], 64)) : ae("", !0)
        ], 12, tx)) : ae("", !0),
        Se("div", {
          ref_key: "actionBtnContainer",
          ref: h,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          T.$slots["action-buttons"] ? we(T.$slots, "action-buttons", {
            key: 0,
            value: T.internalModelValue
          }) : ae("", !0),
          T.$slots["action-buttons"] ? ae("", !0) : (U(), Q(Te, { key: 1 }, [
            !D(i).enabled && D(a).showCancel ? (U(), Q("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: m,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: L[0] || (L[0] = (y) => T.$emit("close-picker")),
              onKeydown: L[1] || (L[1] = (y) => D(zt)(y, () => T.$emit("close-picker")))
            }, Fe(T.cancelText), 545)) : ae("", !0),
            D(a).showNow ? (U(), Q("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: L[2] || (L[2] = (y) => T.$emit("select-now")),
              onKeydown: L[3] || (L[3] = (y) => D(zt)(y, () => T.$emit("select-now")))
            }, Fe(T.nowButtonLabel), 33)) : ae("", !0),
            D(a).showSelect ? (U(), Q("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: S,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: E.value,
              "data-test": "select-button",
              onKeydown: L[4] || (L[4] = (y) => D(zt)(y, () => j())),
              onClick: j
            }, Fe(T.selectText), 41, nx)) : ae("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), ax = { class: "dp__selection_grid_header" }, sx = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], ox = ["aria-label"], fs = /* @__PURE__ */ Dt({
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
    const { setSelectionGrid: r, buildMultiLevelMatrix: a, setMonthPicker: s } = fr(), o = n, l = e, { defaultedAriaLabels: i, defaultedTextInput: c, defaultedConfig: u } = lt(
      l
    ), { hideNavigationButtons: d } = No(), p = /* @__PURE__ */ se(!1), v = /* @__PURE__ */ se(null), w = /* @__PURE__ */ se(null), m = /* @__PURE__ */ se([]), S = /* @__PURE__ */ se(), R = /* @__PURE__ */ se(null), k = /* @__PURE__ */ se(0), h = /* @__PURE__ */ se(null);
    Td(() => {
      v.value = null;
    }), _t(() => {
      Et().then(() => H()), l.noOverlayFocus || q(), b(!0);
    }), ss(() => b(!1));
    const b = (V) => {
      var te;
      l.arrowNavigation && ((te = l.headerRefs) != null && te.length ? s(V) : r(V));
    }, q = () => {
      var V;
      const te = gt(w);
      te && (c.value.enabled || (v.value ? (V = v.value) == null || V.focus({ preventScroll: !0 }) : te.focus({ preventScroll: !0 })), p.value = te.clientHeight < te.scrollHeight);
    }, Y = oe(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !l.useRelative,
        "dp--overlay-relative": l.useRelative
      })
    ), E = oe(
      () => l.useRelative ? { height: `${l.height}px`, width: "260px" } : void 0
    ), _ = oe(() => ({
      dp__overlay_col: !0
    })), M = oe(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: p.value,
        dp__button_bottom: l.isLast
      })
    ), C = oe(() => {
      var V, te;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((V = l.items) == null ? void 0 : V.length) <= 6,
        dp__container_block: ((te = l.items) == null ? void 0 : te.length) > 6
      };
    });
    ze(
      () => l.items,
      () => H(!1),
      { deep: !0 }
    );
    const H = (V = !0) => {
      Et().then(() => {
        const te = gt(v), x = gt(w), G = gt(R), fe = gt(h), I = G ? G.getBoundingClientRect().height : 0;
        x && (x.getBoundingClientRect().height ? k.value = x.getBoundingClientRect().height - I : k.value = u.value.modeHeight - I), te && fe && V && (fe.scrollTop = te.offsetTop - fe.offsetTop - (k.value / 2 - te.getBoundingClientRect().height) - I);
      });
    }, F = (V) => {
      V.disabled || o("selected", V.value);
    }, Z = () => {
      o("toggle"), o("reset-flow");
    }, j = () => {
      l.escClose && Z();
    }, T = (V, te, x, G) => {
      V && ((te.active || te.value === l.focusValue) && (v.value = V), l.arrowNavigation && (Array.isArray(m.value[x]) ? m.value[x][G] = V : m.value[x] = [V], L()));
    }, L = () => {
      var V, te;
      const x = (V = l.headerRefs) != null && V.length ? [l.headerRefs].concat(m.value) : m.value.concat([l.skipButtonRef ? [] : [R.value]]);
      a(Tt(x), (te = l.headerRefs) != null && te.length ? "monthPicker" : "selectionGrid");
    }, y = (V) => {
      l.arrowNavigation || rr(V, u.value, !0);
    }, X = (V) => {
      S.value = V, o("hover-value", V);
    }, ie = () => {
      if (Z(), !l.isLast) {
        const V = P1(l.menuWrapRef ?? null, "action-row");
        if (V) {
          const te = Mp(V);
          te == null || te.focus();
        }
      }
    }, ve = (V) => {
      switch (V.key) {
        case st.esc:
          return j();
        case st.arrowLeft:
          return y(V);
        case st.arrowRight:
          return y(V);
        case st.arrowUp:
          return y(V);
        case st.arrowDown:
          return y(V);
        default:
          return;
      }
    }, _e = (V) => {
      if (V.key === st.enter) return Z();
      if (V.key === st.tab) return ie();
    };
    return t({ focusGrid: q }), (V, te) => {
      var x;
      return U(), Q("div", {
        ref_key: "gridWrapRef",
        ref: w,
        class: Re(Y.value),
        style: Pt(E.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: ve,
        onClick: te[0] || (te[0] = ea(() => {
        }, ["prevent"]))
      }, [
        Se("div", {
          ref_key: "containerRef",
          ref: h,
          class: Re(C.value),
          role: "grid",
          style: Pt({ "--dp-overlay-height": `${k.value}px` })
        }, [
          Se("div", ax, [
            we(V.$slots, "header")
          ]),
          V.$slots.overlay ? we(V.$slots, "overlay", { key: 0 }) : (U(!0), Q(Te, { key: 1 }, Ye(V.items, (G, fe) => (U(), Q("div", {
            key: fe,
            class: Re(["dp__overlay_row", { dp__flex_row: V.items.length >= 3 }]),
            role: "row"
          }, [
            (U(!0), Q(Te, null, Ye(G, (I, ye) => (U(), Q("div", {
              key: I.value,
              ref_for: !0,
              ref: (Pe) => T(Pe, I, fe, ye),
              role: "gridcell",
              class: Re(_.value),
              "aria-selected": I.active || void 0,
              "aria-disabled": I.disabled || void 0,
              tabindex: "0",
              "data-test": I.text,
              onClick: ea((Pe) => F(I), ["prevent"]),
              onKeydown: (Pe) => D(zt)(Pe, () => F(I), !0),
              onMouseover: (Pe) => X(I.value)
            }, [
              Se("div", {
                class: Re(I.className)
              }, [
                V.$slots.item ? we(V.$slots, "item", {
                  key: 0,
                  item: I
                }) : ae("", !0),
                V.$slots.item ? ae("", !0) : (U(), Q(Te, { key: 1 }, [
                  hn(Fe(I.text), 1)
                ], 64))
              ], 2)
            ], 42, sx))), 128))
          ], 2))), 128))
        ], 6),
        V.$slots["button-icon"] ? Vn((U(), Q("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: R,
          type: "button",
          "aria-label": (x = D(i)) == null ? void 0 : x.toggleOverlay,
          class: Re(M.value),
          tabindex: "0",
          onClick: Z,
          onKeydown: _e
        }, [
          we(V.$slots, "button-icon")
        ], 42, ox)), [
          [Ms, !D(d)(V.hideNavigation, V.type)]
        ]) : ae("", !0)
      ], 38);
    };
  }
}), Ro = /* @__PURE__ */ Dt({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean }
  },
  setup(e) {
    const t = e, n = oe(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), r = oe(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (a, s) => (U(), Q("div", {
      class: Re({
        dp__menu_inner: !a.stretch,
        "dp--menu--inner-stretched": a.stretch,
        dp__flex_display: a.multiCalendars > 0,
        "dp--flex-display-collapsed": a.collapse
      })
    }, [
      (U(!0), Q(Te, null, Ye(n.value, (o, l) => (U(), Q("div", {
        key: o,
        class: Re(r.value)
      }, [
        we(a.$slots, "default", {
          instance: o,
          index: l
        })
      ], 2))), 128))
    ], 2));
  }
}), lx = ["aria-label", "aria-disabled"], ja = /* @__PURE__ */ Dt({
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
    const n = t, r = /* @__PURE__ */ se(null);
    return _t(() => n("set-ref", r)), (a, s) => (U(), Q("button", {
      ref_key: "elRef",
      ref: r,
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": a.ariaLabel,
      "aria-disabled": a.disabled || void 0,
      onClick: s[0] || (s[0] = (o) => a.$emit("activate")),
      onKeydown: s[1] || (s[1] = (o) => D(zt)(o, () => a.$emit("activate"), !0))
    }, [
      Se("span", {
        class: Re(["dp__inner_nav", { dp__inner_nav_disabled: a.disabled }])
      }, [
        we(a.$slots, "default")
      ], 2)
    ], 40, lx));
  }
}), ix = { class: "dp--year-mode-picker" }, ux = ["aria-label", "data-test"], Bp = /* @__PURE__ */ Dt({
  __name: "YearModePicker",
  props: {
    ...yn,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const n = t, r = e, { showRightIcon: a, showLeftIcon: s } = No(), { defaultedConfig: o, defaultedMultiCalendars: l, defaultedAriaLabels: i, defaultedTransitions: c, defaultedUI: u } = lt(r), { showTransition: d, transitionName: p } = ps(c), v = (S = !1, R) => {
      n("toggle-year-picker", { flow: S, show: R });
    }, w = (S) => {
      n("year-select", S);
    }, m = (S = !1) => {
      n("handle-year", S);
    };
    return (S, R) => {
      var k, h, b, q, Y;
      return U(), Q("div", ix, [
        D(s)(D(l), e.instance) ? (U(), Ee(ja, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": (k = D(i)) == null ? void 0 : k.prevYear,
          disabled: e.isDisabled(!1),
          class: Re((h = D(u)) == null ? void 0 : h.navBtnPrev),
          onActivate: R[0] || (R[0] = (E) => m(!1))
        }, {
          default: Ne(() => [
            S.$slots["arrow-left"] ? we(S.$slots, "arrow-left", { key: 0 }) : ae("", !0),
            S.$slots["arrow-left"] ? ae("", !0) : (U(), Ee(D(Di), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : ae("", !0),
        Se("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (b = D(i)) == null ? void 0 : b.openYearsOverlay,
          "data-test": `year-mode-btn-${e.instance}`,
          onClick: R[1] || (R[1] = () => v(!1)),
          onKeydown: R[2] || (R[2] = rf(() => v(!1), ["enter"]))
        }, [
          S.$slots.year ? we(S.$slots, "year", {
            key: 0,
            year: e.year
          }) : ae("", !0),
          S.$slots.year ? ae("", !0) : (U(), Q(Te, { key: 1 }, [
            hn(Fe(e.year), 1)
          ], 64))
        ], 40, ux),
        D(a)(D(l), e.instance) ? (U(), Ee(ja, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (q = D(i)) == null ? void 0 : q.nextYear,
          disabled: e.isDisabled(!0),
          class: Re((Y = D(u)) == null ? void 0 : Y.navBtnNext),
          onActivate: R[3] || (R[3] = (E) => m(!0))
        }, {
          default: Ne(() => [
            S.$slots["arrow-right"] ? we(S.$slots, "arrow-right", { key: 0 }) : ae("", !0),
            S.$slots["arrow-right"] ? ae("", !0) : (U(), Ee(D(Ri), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled", "class"])) : ae("", !0),
        Ke(ca, {
          name: D(p)(e.showYearPicker),
          css: D(d)
        }, {
          default: Ne(() => [
            e.showYearPicker ? (U(), Ee(fs, {
              key: 0,
              items: e.items,
              "text-input": S.textInput,
              "esc-close": S.escClose,
              config: S.config,
              "is-last": S.autoApply && !D(o).keepActionRow,
              "hide-navigation": S.hideNavigation,
              "aria-labels": S.ariaLabels,
              type: "year",
              onToggle: v,
              onSelected: R[4] || (R[4] = (E) => w(E))
            }, Lt({
              "button-icon": Ne(() => [
                S.$slots["calendar-icon"] ? we(S.$slots, "calendar-icon", { key: 0 }) : ae("", !0),
                S.$slots["calendar-icon"] ? ae("", !0) : (U(), Ee(D(pa), { key: 1 }))
              ]),
              _: 2
            }, [
              S.$slots["year-overlay-value"] ? {
                name: "item",
                fn: Ne(({ item: E }) => [
                  we(S.$slots, "year-overlay-value", {
                    text: E.text,
                    value: E.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels"])) : ae("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), ji = (e, t, n) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((r) => Ie(e, r))) {
      const r = t.value.filter((a) => !Ie(a, e));
      t.value = r.length ? r : null;
    } else (n && +n > t.value.length || !n) && t.value.push(e);
  else
    t.value = [e];
}, Hi = (e, t, n) => {
  let r = e.value ? e.value.slice() : [];
  return r.length === 2 && r[1] !== null && (r = []), r.length ? ut(t, r[0]) ? (r.unshift(t), n("range-start", r[0]), n("range-start", r[1])) : (r[1] = t, n("range-end", t)) : (r = [t], n("range-start", t)), r;
}, Co = (e, t, n, r) => {
  e && (e[0] && e[1] && n && t("auto-apply"), e[0] && !e[1] && r && n && t("auto-apply"));
}, jp = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => Jt(le(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = Jt(le(e.value), e.timezone));
}, Hp = (e, t, n, r) => Array.isArray(t.value) && (t.value.length === 2 || t.value.length === 1 && r.value.partialRange) ? r.value.fixedStart && (pt(e, t.value[0]) || Ie(e, t.value[0])) ? [t.value[0], e] : r.value.fixedEnd && (ut(e, t.value[1]) || Ie(e, t.value[1])) ? [e, t.value[1]] : (n("invalid-fixed-range", e), t.value) : [], Up = ({
  multiCalendars: e,
  range: t,
  highlight: n,
  propDates: r,
  calendars: a,
  modelValue: s,
  props: o,
  filters: l,
  year: i,
  month: c,
  emit: u
}) => {
  const d = oe(() => Fi(o.yearRange, o.locale, o.reverseYears)), p = /* @__PURE__ */ se([!1]), v = oe(() => (C, H) => {
    const F = Je(fn(/* @__PURE__ */ new Date()), {
      month: c.value(C),
      year: i.value(C)
    }), Z = H ? fp(F) : Za(F);
    return $p(
      Z,
      r.value.maxDate,
      r.value.minDate,
      o.preventMinMaxNavigation,
      H
    );
  }), w = () => Array.isArray(s.value) && e.value.solo && s.value[1], m = () => {
    for (let C = 0; C < e.value.count; C++)
      if (C === 0)
        a.value[C] = a.value[0];
      else if (C === e.value.count - 1 && w())
        a.value[C] = {
          month: $e(s.value[1]),
          year: Me(s.value[1])
        };
      else {
        const H = Je(le(), a.value[C - 1]);
        a.value[C] = { month: $e(H), year: Me(ki(H, 1)) };
      }
  }, S = (C) => {
    if (!C) return m();
    const H = Je(le(), a.value[C]);
    return a.value[0].year = Me(kp(H, e.value.count - 1)), m();
  }, R = (C, H) => {
    const F = _w(H, C);
    return t.value.showLastInRange && F > 1 ? H : C;
  }, k = (C) => o.focusStartDate || e.value.solo ? C[0] : C[1] ? R(C[0], C[1]) : C[0], h = () => {
    if (s.value) {
      const C = Array.isArray(s.value) ? k(s.value) : s.value;
      a.value[0] = { month: $e(C), year: Me(C) };
    }
  }, b = () => {
    h(), e.value.count && m();
  };
  ze(s, (C, H) => {
    o.isTextInputDate && JSON.stringify(C ?? {}) !== JSON.stringify(H ?? {}) && b();
  }), _t(() => {
    b();
  });
  const q = (C, H) => {
    a.value[H].year = C, u("update-month-year", { instance: H, year: C, month: a.value[H].month }), e.value.count && !e.value.solo && S(H);
  }, Y = oe(() => (C) => ia(d.value, (H) => {
    var F;
    const Z = i.value(C) === H.value, j = ts(
      H.value,
      ua(r.value.minDate),
      ua(r.value.maxDate)
    ) || ((F = l.value.years) == null ? void 0 : F.includes(i.value(C))), T = Bi(n.value, H.value);
    return { active: Z, disabled: j, highlighted: T };
  })), E = (C, H) => {
    q(C, H), M(H);
  }, _ = (C, H = !1) => {
    if (!v.value(C, H)) {
      const F = H ? i.value(C) + 1 : i.value(C) - 1;
      q(F, C);
    }
  }, M = (C, H = !1, F) => {
    H || u("reset-flow"), F !== void 0 ? p.value[C] = F : p.value[C] = !p.value[C], p.value[C] ? u("overlay-toggle", { open: !0, overlay: Nt.year }) : (u("overlay-closed"), u("overlay-toggle", { open: !1, overlay: Nt.year }));
  };
  return {
    isDisabled: v,
    groupedYears: Y,
    showYearPicker: p,
    selectYear: q,
    toggleYearPicker: M,
    handleYearSelect: E,
    handleYear: _
  };
}, cx = (e, t) => {
  const {
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: a,
    defaultedConfig: s,
    defaultedRange: o,
    defaultedHighlight: l,
    propDates: i,
    defaultedTz: c,
    defaultedFilters: u,
    defaultedMultiDates: d
  } = lt(e), p = () => {
    e.isTextInputDate && b(Me(le(e.startDate)), 0);
  }, { modelValue: v, year: w, month: m, calendars: S } = ms(e, t, p), R = oe(() => Pp(e.formatLocale, e.locale, e.monthNameFormat)), k = /* @__PURE__ */ se(null), { checkMinMaxRange: h } = pr(e), {
    selectYear: b,
    groupedYears: q,
    showYearPicker: Y,
    toggleYearPicker: E,
    handleYearSelect: _,
    handleYear: M,
    isDisabled: C
  } = Up({
    modelValue: v,
    multiCalendars: n,
    range: o,
    highlight: l,
    calendars: S,
    year: w,
    propDates: i,
    month: m,
    filters: u,
    props: e,
    emit: t
  });
  _t(() => {
    e.startDate && (v.value && e.focusStartDate || !v.value) && b(Me(le(e.startDate)), 0);
  });
  const H = (x) => x ? { month: $e(x), year: Me(x) } : { month: null, year: null }, F = () => v.value ? Array.isArray(v.value) ? v.value.map((x) => H(x)) : H(v.value) : H(), Z = (x, G) => {
    const fe = S.value[x], I = F();
    return Array.isArray(I) ? I.some((ye) => ye.year === (fe == null ? void 0 : fe.year) && ye.month === G) : (fe == null ? void 0 : fe.year) === I.year && G === I.month;
  }, j = (x, G, fe) => {
    var I, ye;
    const Pe = F();
    return Array.isArray(Pe) ? w.value(G) === ((I = Pe[fe]) == null ? void 0 : I.year) && x === ((ye = Pe[fe]) == null ? void 0 : ye.month) : !1;
  }, T = (x, G) => {
    if (o.value.enabled) {
      const fe = F();
      if (Array.isArray(v.value) && Array.isArray(fe)) {
        const I = j(x, G, 0) || j(x, G, 1), ye = Ln(fn(le()), x, w.value(G));
        return Eo(v.value, k.value, ye) && !I;
      }
      return !1;
    }
    return !1;
  }, L = oe(() => (x) => ia(R.value, (G) => {
    var fe;
    const I = Z(x, G.value), ye = ts(
      G.value,
      Dp(w.value(x), i.value.minDate),
      Rp(w.value(x), i.value.maxDate)
    ) || $1(i.value.disabledDates, w.value(x)).includes(G.value) || ((fe = u.value.months) == null ? void 0 : fe.includes(G.value)), Pe = T(G.value, x), J = Fp(l.value, G.value, w.value(x));
    return { active: I, disabled: ye, isBetween: Pe, highlighted: J };
  })), y = (x, G) => Ln(fn(le()), x, w.value(G)), X = (x, G) => {
    const fe = v.value ? v.value : fn(/* @__PURE__ */ new Date());
    v.value = Ln(fe, x, w.value(G)), t("auto-apply"), t("update-flow-step");
  }, ie = (x, G) => {
    const fe = y(x, G);
    o.value.fixedEnd || o.value.fixedStart ? v.value = Hp(fe, v, t, o) : v.value ? h(fe, v.value) && (v.value = Hi(v, y(x, G), t)) : v.value = [y(x, G)], Et().then(() => {
      Co(v.value, t, e.autoApply, e.modelAuto);
    });
  }, ve = (x, G) => {
    ji(y(x, G), v, d.value.limit), t("auto-apply", !0);
  }, _e = (x, G) => (S.value[G].month = x, te(G, S.value[G].year, x), d.value.enabled ? ve(x, G) : o.value.enabled ? ie(x, G) : X(x, G)), V = (x, G) => {
    b(x, G), te(G, x, null);
  }, te = (x, G, fe) => {
    let I = fe;
    if (!I && I !== 0) {
      const ye = F();
      I = Array.isArray(ye) ? ye[x].month : ye.month;
    }
    t("update-month-year", { instance: x, year: G, month: I });
  };
  return {
    groupedMonths: L,
    groupedYears: q,
    year: w,
    isDisabled: C,
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: a,
    defaultedConfig: s,
    showYearPicker: Y,
    modelValue: v,
    presetDate: (x, G) => {
      jp({
        value: x,
        modelValue: v,
        range: o.value.enabled,
        timezone: G ? void 0 : c.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (x, G) => {
      k.value = y(x, G);
    },
    selectMonth: _e,
    selectYear: V,
    toggleYearPicker: E,
    handleYearSelect: _,
    handleYear: M,
    getModelMonthYear: F
  };
}, dx = /* @__PURE__ */ Dt({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...yn
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
    "invalid-fixed-range",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = Br(), s = Qt(a, "yearMode"), o = e;
    _t(() => {
      o.shadow || r("mount", null);
    });
    const {
      groupedMonths: l,
      groupedYears: i,
      year: c,
      isDisabled: u,
      defaultedMultiCalendars: d,
      defaultedConfig: p,
      showYearPicker: v,
      modelValue: w,
      presetDate: m,
      setHoverDate: S,
      selectMonth: R,
      selectYear: k,
      toggleYearPicker: h,
      handleYearSelect: b,
      handleYear: q,
      getModelMonthYear: Y
    } = cx(o, r);
    return t({ getSidebarProps: () => ({
      modelValue: w,
      year: c,
      getModelMonthYear: Y,
      selectMonth: R,
      selectYear: k,
      handleYear: q
    }), presetDate: m, toggleYearPicker: (E) => h(0, E) }), (E, _) => (U(), Ee(Ro, {
      "multi-calendars": D(d).count,
      collapse: E.collapse,
      stretch: ""
    }, {
      default: Ne(({ instance: M }) => [
        E.$slots["top-extra"] ? we(E.$slots, "top-extra", {
          key: 0,
          value: E.internalModelValue
        }) : ae("", !0),
        E.$slots["month-year"] ? we(E.$slots, "month-year", St(bt({ key: 1 }, {
          year: D(c),
          months: D(l)(M),
          years: D(i)(M),
          selectMonth: D(R),
          selectYear: D(k),
          instance: M
        }))) : (U(), Ee(fs, {
          key: 2,
          items: D(l)(M),
          "arrow-navigation": E.arrowNavigation,
          "is-last": E.autoApply && !D(p).keepActionRow,
          "esc-close": E.escClose,
          height: D(p).modeHeight,
          config: E.config,
          "no-overlay-focus": !!(E.noOverlayFocus || E.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (C) => D(R)(C, M),
          onHoverValue: (C) => D(S)(C, M)
        }, Lt({
          header: Ne(() => [
            Ke(Bp, bt(E.$props, {
              items: D(i)(M),
              instance: M,
              "show-year-picker": D(v)[M],
              year: D(c)(M),
              "is-disabled": (C) => D(u)(M, C),
              onHandleYear: (C) => D(q)(M, C),
              onYearSelect: (C) => D(b)(C, M),
              onToggleYearPicker: (C) => D(h)(M, C == null ? void 0 : C.flow, C == null ? void 0 : C.show)
            }), Lt({ _: 2 }, [
              Ye(D(s), (C, H) => ({
                name: C,
                fn: Ne((F) => [
                  we(E.$slots, C, St(Ut(F)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, [
          E.$slots["month-overlay-value"] ? {
            name: "item",
            fn: Ne(({ item: C }) => [
              we(E.$slots, "month-overlay-value", {
                text: C.text,
                value: C.value
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), fx = (e, t) => {
  const n = () => {
    e.isTextInputDate && (u.value = Me(le(e.startDate)));
  }, { modelValue: r } = ms(e, t, n), a = /* @__PURE__ */ se(null), { defaultedHighlight: s, defaultedMultiDates: o, defaultedFilters: l, defaultedRange: i, propDates: c } = lt(e), u = /* @__PURE__ */ se();
  _t(() => {
    e.startDate && (r.value && e.focusStartDate || !r.value) && (u.value = Me(le(e.startDate)));
  });
  const d = (m) => Array.isArray(r.value) ? r.value.some((S) => Me(S) === m) : r.value ? Me(r.value) === m : !1, p = (m) => i.value.enabled && Array.isArray(r.value) ? Eo(r.value, a.value, w(m)) : !1, v = oe(() => ia(Fi(e.yearRange, e.locale, e.reverseYears), (m) => {
    const S = d(m.value), R = ts(
      m.value,
      ua(c.value.minDate),
      ua(c.value.maxDate)
    ) || l.value.years.includes(m.value), k = p(m.value) && !S, h = Bi(s.value, m.value);
    return { active: S, disabled: R, isBetween: k, highlighted: h };
  })), w = (m) => Sn(fn(Za(/* @__PURE__ */ new Date())), m);
  return {
    groupedYears: v,
    modelValue: r,
    focusYear: u,
    setHoverValue: (m) => {
      a.value = Sn(fn(/* @__PURE__ */ new Date()), m);
    },
    selectYear: (m) => {
      var S;
      if (t("update-month-year", { instance: 0, year: m }), o.value.enabled)
        return r.value ? Array.isArray(r.value) && (((S = r.value) == null ? void 0 : S.map((R) => Me(R))).includes(m) ? r.value = r.value.filter((R) => Me(R) !== m) : r.value.push(Sn(Yt(le()), m))) : r.value = [Sn(Yt(Za(le())), m)], t("auto-apply", !0);
      i.value.enabled ? (r.value = Hi(r, w(m), t), Et().then(() => {
        Co(r.value, t, e.autoApply, e.modelAuto);
      })) : (r.value = w(m), t("auto-apply"));
    }
  };
}, px = /* @__PURE__ */ Dt({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...yn
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
    const r = n, a = e, { groupedYears: s, modelValue: o, focusYear: l, selectYear: i, setHoverValue: c } = fx(a, r), { defaultedConfig: u } = lt(a);
    return t({ getSidebarProps: () => ({
      modelValue: o,
      selectYear: i
    }) }), (d, p) => (U(), Q("div", null, [
      d.$slots["top-extra"] ? we(d.$slots, "top-extra", {
        key: 0,
        value: d.internalModelValue
      }) : ae("", !0),
      d.$slots["month-year"] ? we(d.$slots, "month-year", St(bt({ key: 1 }, {
        years: D(s),
        selectYear: D(i)
      }))) : (U(), Ee(fs, {
        key: 2,
        items: D(s),
        "is-last": d.autoApply && !D(u).keepActionRow,
        height: D(u).modeHeight,
        config: d.config,
        "no-overlay-focus": !!(d.noOverlayFocus || d.textInput),
        "focus-value": D(l),
        type: "year",
        "use-relative": "",
        onSelected: D(i),
        onHoverValue: D(c)
      }, Lt({ _: 2 }, [
        d.$slots["year-overlay-value"] ? {
          name: "item",
          fn: Ne(({ item: v }) => [
            we(d.$slots, "year-overlay-value", {
              text: v.text,
              value: v.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), mx = {
  key: 0,
  class: "dp__time_input"
}, hx = ["data-test", "aria-label", "onKeydown", "onClick", "onMousedown"], vx = /* @__PURE__ */ Se("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), yx = /* @__PURE__ */ Se("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), gx = ["aria-label", "disabled", "data-test", "onKeydown", "onClick"], bx = ["data-test", "aria-label", "onKeydown", "onClick", "onMousedown"], wx = /* @__PURE__ */ Se("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), _x = /* @__PURE__ */ Se("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), xx = { key: 0 }, Tx = ["aria-label"], Sx = /* @__PURE__ */ Dt({
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
    ...yn
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
    "overlay-opened",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, { setTimePickerElements: s, setTimePickerBackRef: o } = fr(), { defaultedAriaLabels: l, defaultedTransitions: i, defaultedFilters: c, defaultedConfig: u, defaultedRange: d } = lt(a), { transitionName: p, showTransition: v } = ps(i), w = /* @__PURE__ */ qn({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), m = /* @__PURE__ */ se("AM"), S = /* @__PURE__ */ se(null), R = /* @__PURE__ */ se([]), k = /* @__PURE__ */ se();
    _t(() => {
      r("mounted");
    });
    const h = (f) => Je(/* @__PURE__ */ new Date(), {
      hours: f.hours,
      minutes: f.minutes,
      seconds: a.enableSeconds ? f.seconds : 0,
      milliseconds: 0
    }), b = oe(
      () => (f) => L(f, a[f]) || Y(f, a[f])
    ), q = oe(() => ({ hours: a.hours, minutes: a.minutes, seconds: a.seconds })), Y = (f, O) => d.value.enabled && !d.value.disableTimeRangeValidation ? !a.validateTime(f, O) : !1, E = (f, O) => {
      if (d.value.enabled && !d.value.disableTimeRangeValidation) {
        const B = O ? +a[`${f}Increment`] : -+a[`${f}Increment`], $ = a[f] + B;
        return !a.validateTime(f, $);
      }
      return !1;
    }, _ = oe(() => (f) => !_e(+a[f] + +a[`${f}Increment`], f) || E(f, !0)), M = oe(() => (f) => !_e(+a[f] - +a[`${f}Increment`], f) || E(f, !1)), C = (f, O) => sp(Je(le(), f), O), H = (f, O) => v1(Je(le(), f), O), F = oe(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !a.timePickerInline,
        dp__time_col_reg_block: !a.enableSeconds && a.is24 && !a.timePickerInline,
        dp__time_col_reg_inline: !a.enableSeconds && a.is24 && a.timePickerInline,
        dp__time_col_reg_with_button: !a.enableSeconds && !a.is24,
        dp__time_col_sec: a.enableSeconds && a.is24,
        dp__time_col_sec_with_button: a.enableSeconds && !a.is24
      })
    ), Z = oe(() => {
      const f = [{ type: "hours" }];
      return a.enableMinutes && f.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), a.enableSeconds && f.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), f;
    }), j = oe(() => Z.value.filter((f) => !f.separator)), T = oe(() => (f) => {
      if (f === "hours") {
        const O = I(+a.hours);
        return { text: O < 10 ? `0${O}` : `${O}`, value: O };
      }
      return { text: a[f] < 10 ? `0${a[f]}` : `${a[f]}`, value: a[f] };
    }), L = (f, O) => {
      var B;
      if (!a.disabledTimesConfig) return !1;
      const $ = a.disabledTimesConfig(a.order, f === "hours" ? O : void 0);
      return $[f] ? !!((B = $[f]) != null && B.includes(O)) : !0;
    }, y = (f, O) => O !== "hours" || m.value === "AM" ? f : f + 12, X = (f) => {
      const O = a.is24 ? 24 : 12, B = f === "hours" ? O : 60, $ = +a[`${f}GridIncrement`], N = f === "hours" && !a.is24 ? $ : 0, re = [];
      for (let A = N; A < B; A += $)
        re.push({ value: a.is24 ? A : y(A, f), text: A < 10 ? `0${A}` : `${A}` });
      return f === "hours" && !a.is24 && re.unshift({ value: m.value === "PM" ? 12 : 0, text: "12" }), ia(re, (A) => ({ active: !1, disabled: c.value.times[f].includes(A.value) || !_e(A.value, f) || L(f, A.value) || Y(f, A.value) }));
    }, ie = (f) => f >= 0 ? f : 59, ve = (f) => f >= 0 ? f : 23, _e = (f, O) => {
      const B = a.minTime ? h(pl(a.minTime)) : null, $ = a.maxTime ? h(pl(a.maxTime)) : null, N = h(
        pl(
          q.value,
          O,
          O === "minutes" || O === "seconds" ? ie(f) : ve(f)
        )
      );
      return B && $ ? (es(N, $) || Gr(N, $)) && (oa(N, B) || Gr(N, B)) : B ? oa(N, B) || Gr(N, B) : $ ? es(N, $) || Gr(N, $) : !0;
    }, V = (f) => a[`no${f[0].toUpperCase() + f.slice(1)}Overlay`], te = (f) => {
      V(f) || (w[f] = !w[f], w[f] ? r("overlay-opened", f) : r("overlay-closed", f));
    }, x = (f) => f === "hours" ? Un : f === "minutes" ? dr : sa, G = () => {
      k.value && clearTimeout(k.value);
    }, fe = (f, O = !0, B) => {
      const $ = O ? C : H, N = O ? +a[`${f}Increment`] : -+a[`${f}Increment`];
      _e(+a[f] + N, f) && r(
        `update:${f}`,
        x(f)($({ [f]: +a[f] }, { [f]: +a[`${f}Increment`] }))
      ), !(B != null && B.keyboard) && u.value.timeArrowHoldThreshold && (k.value = setTimeout(() => {
        fe(f, O);
      }, u.value.timeArrowHoldThreshold));
    }, I = (f) => a.is24 ? f : (f >= 12 ? m.value = "PM" : m.value = "AM", x1(f)), ye = () => {
      m.value === "PM" ? (m.value = "AM", r("update:hours", a.hours - 12)) : (m.value = "PM", r("update:hours", a.hours + 12)), r("am-pm-change", m.value);
    }, Pe = (f) => {
      w[f] = !0;
    }, J = (f, O, B) => {
      if (f && a.arrowNavigation) {
        Array.isArray(R.value[O]) ? R.value[O][B] = f : R.value[O] = [f];
        const $ = R.value.reduce(
          (N, re) => re.map((A, W) => [...N[W] || [], re[W]]),
          []
        );
        o(a.closeTimePickerBtn), S.value && ($[1] = $[1].concat(S.value)), s($, a.order);
      }
    }, g = (f, O) => (te(f), r(`update:${f}`, O));
    return t({ openChildCmp: Pe }), (f, O) => {
      var B;
      return f.disabled ? ae("", !0) : (U(), Q("div", mx, [
        (U(!0), Q(Te, null, Ye(Z.value, ($, N) => {
          var re, A, W;
          return U(), Q("div", {
            key: N,
            class: Re(F.value)
          }, [
            $.separator ? (U(), Q(Te, { key: 0 }, [
              hn(" : ")
            ], 64)) : (U(), Q(Te, { key: 1 }, [
              Se("button", {
                ref_for: !0,
                ref: (z) => J(z, N, 0),
                type: "button",
                class: Re({
                  dp__btn: !0,
                  dp__inc_dec_button: !f.timePickerInline,
                  dp__inc_dec_button_inline: f.timePickerInline,
                  dp__tp_inline_btn_top: f.timePickerInline,
                  dp__inc_dec_button_disabled: _.value($.type)
                }),
                "data-test": `${$.type}-time-inc-btn-${a.order}`,
                "aria-label": (re = D(l)) == null ? void 0 : re.incrementValue($.type),
                tabindex: "0",
                onKeydown: (z) => D(zt)(z, () => fe($.type, !0, { keyboard: !0 }), !0),
                onClick: (z) => D(u).timeArrowHoldThreshold ? void 0 : fe($.type, !0),
                onMousedown: (z) => D(u).timeArrowHoldThreshold ? fe($.type, !0) : void 0,
                onMouseup: G
              }, [
                a.timePickerInline ? (U(), Q(Te, { key: 1 }, [
                  f.$slots["tp-inline-arrow-up"] ? we(f.$slots, "tp-inline-arrow-up", { key: 0 }) : (U(), Q(Te, { key: 1 }, [
                    vx,
                    yx
                  ], 64))
                ], 64)) : (U(), Q(Te, { key: 0 }, [
                  f.$slots["arrow-up"] ? we(f.$slots, "arrow-up", { key: 0 }) : ae("", !0),
                  f.$slots["arrow-up"] ? ae("", !0) : (U(), Ee(D(Ni), { key: 1 }))
                ], 64))
              ], 42, hx),
              Se("button", {
                ref_for: !0,
                ref: (z) => J(z, N, 1),
                type: "button",
                "aria-label": (A = D(l)) == null ? void 0 : A.openTpOverlay($.type),
                class: Re({
                  dp__time_display: !0,
                  dp__time_display_block: !f.timePickerInline,
                  dp__time_display_inline: f.timePickerInline,
                  "dp--time-invalid": b.value($.type),
                  "dp--time-overlay-btn": !b.value($.type)
                }),
                disabled: V($.type),
                tabindex: "0",
                "data-test": `${$.type}-toggle-overlay-btn-${a.order}`,
                onKeydown: (z) => D(zt)(z, () => te($.type), !0),
                onClick: (z) => te($.type)
              }, [
                f.$slots[$.type] ? we(f.$slots, $.type, {
                  key: 0,
                  text: T.value($.type).text,
                  value: T.value($.type).value
                }) : ae("", !0),
                f.$slots[$.type] ? ae("", !0) : (U(), Q(Te, { key: 1 }, [
                  hn(Fe(T.value($.type).text), 1)
                ], 64))
              ], 42, gx),
              Se("button", {
                ref_for: !0,
                ref: (z) => J(z, N, 2),
                type: "button",
                class: Re({
                  dp__btn: !0,
                  dp__inc_dec_button: !f.timePickerInline,
                  dp__inc_dec_button_inline: f.timePickerInline,
                  dp__tp_inline_btn_bottom: f.timePickerInline,
                  dp__inc_dec_button_disabled: M.value($.type)
                }),
                "data-test": `${$.type}-time-dec-btn-${a.order}`,
                "aria-label": (W = D(l)) == null ? void 0 : W.decrementValue($.type),
                tabindex: "0",
                onKeydown: (z) => D(zt)(z, () => fe($.type, !1, { keyboard: !0 }), !0),
                onClick: (z) => D(u).timeArrowHoldThreshold ? void 0 : fe($.type, !1),
                onMousedown: (z) => D(u).timeArrowHoldThreshold ? fe($.type, !1) : void 0,
                onMouseup: G
              }, [
                a.timePickerInline ? (U(), Q(Te, { key: 1 }, [
                  f.$slots["tp-inline-arrow-down"] ? we(f.$slots, "tp-inline-arrow-down", { key: 0 }) : (U(), Q(Te, { key: 1 }, [
                    wx,
                    _x
                  ], 64))
                ], 64)) : (U(), Q(Te, { key: 0 }, [
                  f.$slots["arrow-down"] ? we(f.$slots, "arrow-down", { key: 0 }) : ae("", !0),
                  f.$slots["arrow-down"] ? ae("", !0) : (U(), Ee(D($i), { key: 1 }))
                ], 64))
              ], 42, bx)
            ], 64))
          ], 2);
        }), 128)),
        f.is24 ? ae("", !0) : (U(), Q("div", xx, [
          f.$slots["am-pm-button"] ? we(f.$slots, "am-pm-button", {
            key: 0,
            toggle: ye,
            value: m.value
          }) : ae("", !0),
          f.$slots["am-pm-button"] ? ae("", !0) : (U(), Q("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: S,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (B = D(l)) == null ? void 0 : B.amPmButton,
            tabindex: "0",
            onClick: ye,
            onKeydown: O[0] || (O[0] = ($) => D(zt)($, () => ye(), !0))
          }, Fe(m.value), 41, Tx))
        ])),
        (U(!0), Q(Te, null, Ye(j.value, ($, N) => (U(), Ee(ca, {
          key: N,
          name: D(p)(w[$.type]),
          css: D(v)
        }, {
          default: Ne(() => [
            w[$.type] ? (U(), Ee(fs, {
              key: 0,
              items: X($.type),
              "is-last": f.autoApply && !D(u).keepActionRow,
              "esc-close": f.escClose,
              type: $.type,
              "text-input": f.textInput,
              config: f.config,
              "arrow-navigation": f.arrowNavigation,
              "aria-labels": f.ariaLabels,
              onSelected: (re) => g($.type, re),
              onToggle: (re) => te($.type),
              onResetFlow: O[1] || (O[1] = (re) => f.$emit("reset-flow"))
            }, Lt({
              "button-icon": Ne(() => [
                f.$slots["clock-icon"] ? we(f.$slots, "clock-icon", { key: 0 }) : ae("", !0),
                f.$slots["clock-icon"] ? ae("", !0) : (U(), Ee(wo(f.timePickerInline ? D(pa) : D(Ci)), { key: 1 }))
              ]),
              _: 2
            }, [
              f.$slots[`${$.type}-overlay-value`] ? {
                name: "item",
                fn: Ne(({ item: re }) => [
                  we(f.$slots, `${$.type}-overlay-value`, {
                    text: re.text,
                    value: re.value
                  })
                ]),
                key: "0"
              } : void 0,
              f.$slots[`${$.type}-overlay-header`] ? {
                name: "header",
                fn: Ne(() => [
                  we(f.$slots, `${$.type}-overlay-header`, {
                    toggle: () => te($.type)
                  })
                ]),
                key: "1"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "onSelected", "onToggle"])) : ae("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), kx = { class: "dp--tp-wrap" }, Ox = ["aria-label", "tabindex"], Px = ["tabindex"], Ax = ["aria-label"], Yp = /* @__PURE__ */ Dt({
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
    ...yn
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
    const r = n, a = e, { buildMatrix: s, setTimePicker: o } = fr(), l = Br(), { defaultedTransitions: i, defaultedAriaLabels: c, defaultedTextInput: u, defaultedConfig: d, defaultedRange: p } = lt(a), { transitionName: v, showTransition: w } = ps(i), { hideNavigationButtons: m } = No(), S = /* @__PURE__ */ se(null), R = /* @__PURE__ */ se(null), k = /* @__PURE__ */ se([]), h = /* @__PURE__ */ se(null);
    _t(() => {
      r("mount"), !a.timePicker && a.arrowNavigation ? s([gt(S.value)], "time") : o(!0, a.timePicker);
    });
    const b = oe(() => p.value.enabled && a.modelAuto ? Ap(a.internalModelValue) : !0), q = /* @__PURE__ */ se(!1), Y = (y) => ({
      hours: Array.isArray(a.hours) ? a.hours[y] : a.hours,
      minutes: Array.isArray(a.minutes) ? a.minutes[y] : a.minutes,
      seconds: Array.isArray(a.seconds) ? a.seconds[y] : a.seconds
    }), E = oe(() => {
      const y = [];
      if (p.value.enabled)
        for (let X = 0; X < 2; X++)
          y.push(Y(X));
      else
        y.push(Y(0));
      return y;
    }), _ = (y, X = !1, ie = "") => {
      X || r("reset-flow"), q.value = y, r(y ? "overlay-opened" : "overlay-closed", Nt.time), a.arrowNavigation && o(y), Et(() => {
        ie !== "" && k.value[0] && k.value[0].openChildCmp(ie);
      });
    }, M = oe(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: a.autoApply && !d.value.keepActionRow
    })), C = Qt(l, "timePicker"), H = (y, X, ie) => p.value.enabled ? X === 0 ? [y, E.value[1][ie]] : [E.value[0][ie], y] : y, F = (y) => {
      r("update:hours", y);
    }, Z = (y) => {
      r("update:minutes", y);
    }, j = (y) => {
      r("update:seconds", y);
    }, T = () => {
      if (h.value && !u.value.enabled && !a.noOverlayFocus) {
        const y = Mp(h.value);
        y && y.focus({ preventScroll: !0 });
      }
    }, L = (y) => {
      r("overlay-closed", y);
    };
    return t({ toggleTimePicker: _ }), (y, X) => {
      var ie;
      return U(), Q("div", kx, [
        !y.timePicker && !y.timePickerInline ? Vn((U(), Q("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: S,
          type: "button",
          class: Re(M.value),
          "aria-label": (ie = D(c)) == null ? void 0 : ie.openTimePicker,
          tabindex: y.noOverlayFocus ? void 0 : 0,
          "data-test": "open-time-picker-btn",
          onKeydown: X[0] || (X[0] = (ve) => D(zt)(ve, () => _(!0))),
          onClick: X[1] || (X[1] = (ve) => _(!0))
        }, [
          y.$slots["clock-icon"] ? we(y.$slots, "clock-icon", { key: 0 }) : ae("", !0),
          y.$slots["clock-icon"] ? ae("", !0) : (U(), Ee(D(Ci), { key: 1 }))
        ], 42, Ox)), [
          [Ms, !D(m)(y.hideNavigation, "time")]
        ]) : ae("", !0),
        Ke(ca, {
          name: D(v)(q.value),
          css: D(w) && !y.timePickerInline
        }, {
          default: Ne(() => {
            var ve;
            return [
              q.value || y.timePicker || y.timePickerInline ? (U(), Q("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: h,
                class: Re({
                  dp__overlay: !y.timePickerInline,
                  "dp--overlay-absolute": !a.timePicker && !y.timePickerInline,
                  "dp--overlay-relative": a.timePicker
                }),
                style: Pt(y.timePicker ? { height: `${D(d).modeHeight}px` } : void 0),
                tabindex: y.timePickerInline ? void 0 : 0
              }, [
                Se("div", {
                  class: Re(
                    y.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  y.$slots["time-picker-overlay"] ? we(y.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: F,
                    setMinutes: Z,
                    setSeconds: j
                  }) : ae("", !0),
                  y.$slots["time-picker-overlay"] ? ae("", !0) : (U(), Q("div", {
                    key: 1,
                    class: Re(y.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (U(!0), Q(Te, null, Ye(E.value, (_e, V) => Vn((U(), Ee(Sx, bt({
                      key: V,
                      ref_for: !0
                    }, {
                      ...y.$props,
                      order: V,
                      hours: _e.hours,
                      minutes: _e.minutes,
                      seconds: _e.seconds,
                      closeTimePickerBtn: R.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: V === 0 ? y.fixedStart : y.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: k,
                      "validate-time": (te, x) => e.validateTime(te, H(x, V, te)),
                      "onUpdate:hours": (te) => F(H(te, V, "hours")),
                      "onUpdate:minutes": (te) => Z(H(te, V, "minutes")),
                      "onUpdate:seconds": (te) => j(H(te, V, "seconds")),
                      onMounted: T,
                      onOverlayClosed: L,
                      onOverlayOpened: X[2] || (X[2] = (te) => y.$emit("overlay-opened", te)),
                      onAmPmChange: X[3] || (X[3] = (te) => y.$emit("am-pm-change", te))
                    }), Lt({ _: 2 }, [
                      Ye(D(C), (te, x) => ({
                        name: te,
                        fn: Ne((G) => [
                          we(y.$slots, te, bt({ ref_for: !0 }, G))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [Ms, V === 0 ? !0 : b.value]
                    ])), 128))
                  ], 2)),
                  !y.timePicker && !y.timePickerInline ? Vn((U(), Q("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: R,
                    type: "button",
                    class: Re(M.value),
                    "aria-label": (ve = D(c)) == null ? void 0 : ve.closeTimePicker,
                    tabindex: "0",
                    onKeydown: X[4] || (X[4] = (_e) => D(zt)(_e, () => _(!1))),
                    onClick: X[5] || (X[5] = (_e) => _(!1))
                  }, [
                    y.$slots["calendar-icon"] ? we(y.$slots, "calendar-icon", { key: 0 }) : ae("", !0),
                    y.$slots["calendar-icon"] ? ae("", !0) : (U(), Ee(D(pa), { key: 1 }))
                  ], 42, Ax)), [
                    [Ms, !D(m)(y.hideNavigation, "time")]
                  ]) : ae("", !0)
                ], 2)
              ], 14, Px)) : ae("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), qp = (e, t, n, r) => {
  const { defaultedRange: a } = lt(e), s = (h, b) => Array.isArray(t[h]) ? t[h][b] : t[h], o = (h) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[h] : t.seconds : 0, l = (h, b) => h ? b !== void 0 ? ar(h, s("hours", b), s("minutes", b), o(b)) : ar(h, t.hours, t.minutes, o()) : Sp(le(), o(b)), i = (h, b) => {
    t[h] = b;
  }, c = oe(() => e.modelAuto && a.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : a.value.enabled), u = (h, b) => {
    const q = Object.fromEntries(
      Object.keys(t).map((Y) => Y === h ? [Y, b] : [Y, t[Y]].slice())
    );
    if (c.value && !a.value.disableTimeRangeValidation) {
      const Y = (_) => n.value ? ar(
        n.value[_],
        q.hours[_],
        q.minutes[_],
        q.seconds[_]
      ) : null, E = (_) => Tp(n.value[_], 0);
      return !(Ie(Y(0), Y(1)) && (oa(Y(0), E(1)) || es(Y(1), E(0))));
    }
    return !0;
  }, d = (h, b) => {
    u(h, b) && (i(h, b), r && r());
  }, p = (h) => {
    d("hours", h);
  }, v = (h) => {
    d("minutes", h);
  }, w = (h) => {
    d("seconds", h);
  }, m = (h, b, q, Y) => {
    b && p(h), !b && !q && v(h), q && w(h), n.value && Y(n.value);
  }, S = (h) => {
    if (h) {
      const b = Array.isArray(h), q = b ? [+h[0].hours, +h[1].hours] : +h.hours, Y = b ? [+h[0].minutes, +h[1].minutes] : +h.minutes, E = b ? [+h[0].seconds, +h[1].seconds] : +h.seconds;
      i("hours", q), i("minutes", Y), e.enableSeconds && i("seconds", E);
    }
  }, R = (h, b) => {
    const q = {
      hours: Array.isArray(t.hours) ? t.hours[h] : t.hours,
      disabledArr: []
    };
    return (b || b === 0) && (q.hours = b), Array.isArray(e.disabledTimes) && (q.disabledArr = a.value.enabled && Array.isArray(e.disabledTimes[h]) ? e.disabledTimes[h] : e.disabledTimes), q;
  }, k = oe(() => (h, b) => {
    var q;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: Y, hours: E } = R(h, b), _ = Y.filter((M) => +M.hours === E);
      return ((q = _[0]) == null ? void 0 : q.minutes) === "*" ? { hours: [E], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (_ == null ? void 0 : _.map((M) => +M.minutes)) ?? [],
        seconds: (_ == null ? void 0 : _.map((M) => M.seconds ? +M.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: i,
    updateHours: p,
    updateMinutes: v,
    updateSeconds: w,
    getSetDateTime: l,
    updateTimeValues: m,
    getSecondsValue: o,
    assignStartTime: S,
    validateTime: u,
    disabledTimesConfig: k
  };
}, Mx = (e, t) => {
  const n = () => {
    e.isTextInputDate && b();
  }, { modelValue: r, time: a } = ms(e, t, n), { defaultedStartTime: s, defaultedRange: o, defaultedTz: l } = lt(e), { updateTimeValues: i, getSetDateTime: c, setTime: u, assignStartTime: d, disabledTimesConfig: p, validateTime: v } = qp(e, a, r, w);
  function w() {
    t("update-flow-step");
  }
  const m = (Y) => {
    const { hours: E, minutes: _, seconds: M } = Y;
    return { hours: +E, minutes: +_, seconds: M ? +M : 0 };
  }, S = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const E = m(e.startTime[0]), _ = m(e.startTime[1]);
        return [Je(le(), E), Je(le(), _)];
      }
      const Y = m(e.startTime);
      return Je(le(), Y);
    }
    return o.value.enabled ? [null, null] : null;
  }, R = () => {
    if (o.value.enabled) {
      const [Y, E] = S();
      r.value = [
        Jt(c(Y, 0), l.value.timezone),
        Jt(c(E, 1), l.value.timezone)
      ];
    } else
      r.value = Jt(c(S()), l.value.timezone);
  }, k = (Y) => Array.isArray(Y) ? [$r(le(Y[0])), $r(le(Y[1]))] : [$r(Y ?? le())], h = (Y, E, _) => {
    u("hours", Y), u("minutes", E), u("seconds", e.enableSeconds ? _ : 0);
  }, b = () => {
    const [Y, E] = k(r.value);
    return o.value.enabled ? h(
      [Y.hours, E.hours],
      [Y.minutes, E.minutes],
      [Y.seconds, E.seconds]
    ) : h(Y.hours, Y.minutes, Y.seconds);
  };
  _t(() => {
    if (!e.shadow)
      return d(s.value), r.value ? b() : R();
  });
  const q = () => {
    Array.isArray(r.value) ? r.value = r.value.map((Y, E) => Y && c(Y, E)) : r.value = c(r.value), t("time-update");
  };
  return {
    modelValue: r,
    time: a,
    disabledTimesConfig: p,
    updateTime: (Y, E = !0, _ = !1) => {
      i(Y, E, _, q);
    },
    validateTime: v
  };
}, Ex = /* @__PURE__ */ Dt({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...yn
  },
  emits: [
    "update:internal-model-value",
    "time-update",
    "am-pm-change",
    "mount",
    "reset-flow",
    "update-flow-step",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, s = Br(), o = Qt(s, "timePicker"), l = /* @__PURE__ */ se(null), { time: i, modelValue: c, disabledTimesConfig: u, updateTime: d, validateTime: p } = Mx(a, r);
    return _t(() => {
      a.shadow || r("mount", null);
    }), t({ getSidebarProps: () => ({
      modelValue: c,
      time: i,
      updateTime: d
    }), toggleTimePicker: (v, w = !1, m = "") => {
      var S;
      (S = l.value) == null || S.toggleTimePicker(v, w, m);
    } }), (v, w) => (U(), Ee(Ro, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: Ne(() => [
        Ke(Yp, bt({
          ref_key: "tpRef",
          ref: l
        }, v.$props, {
          hours: D(i).hours,
          minutes: D(i).minutes,
          seconds: D(i).seconds,
          "internal-model-value": v.internalModelValue,
          "disabled-times-config": D(u),
          "validate-time": D(p),
          "onUpdate:hours": w[0] || (w[0] = (m) => D(d)(m)),
          "onUpdate:minutes": w[1] || (w[1] = (m) => D(d)(m, !1)),
          "onUpdate:seconds": w[2] || (w[2] = (m) => D(d)(m, !1, !0)),
          onAmPmChange: w[3] || (w[3] = (m) => v.$emit("am-pm-change", m)),
          onResetFlow: w[4] || (w[4] = (m) => v.$emit("reset-flow")),
          onOverlayClosed: w[5] || (w[5] = (m) => v.$emit("overlay-toggle", { open: !1, overlay: m })),
          onOverlayOpened: w[6] || (w[6] = (m) => v.$emit("overlay-toggle", { open: !0, overlay: m }))
        }), Lt({ _: 2 }, [
          Ye(D(o), (m, S) => ({
            name: m,
            fn: Ne((R) => [
              we(v.$slots, m, St(Ut(R)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), Dx = { class: "dp--header-wrap" }, Rx = {
  key: 0,
  class: "dp__month_year_wrap"
}, Cx = { key: 0 }, Nx = { class: "dp__month_year_wrap" }, $x = ["aria-label", "data-test", "onClick", "onKeydown"], Ix = /* @__PURE__ */ Dt({
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
    ...yn
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed", "overlay-opened"],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, {
      defaultedTransitions: s,
      defaultedAriaLabels: o,
      defaultedMultiCalendars: l,
      defaultedFilters: i,
      defaultedConfig: c,
      defaultedHighlight: u,
      propDates: d,
      defaultedUI: p
    } = lt(a), { transitionName: v, showTransition: w } = ps(s), { buildMatrix: m } = fr(), { handleMonthYearChange: S, isDisabled: R, updateMonthYear: k } = ex(a, r), { showLeftIcon: h, showRightIcon: b } = No(), q = /* @__PURE__ */ se(!1), Y = /* @__PURE__ */ se(!1), E = /* @__PURE__ */ se([null, null, null, null]);
    _t(() => {
      r("mount");
    });
    const _ = (V) => ({
      get: () => a[V],
      set: (te) => {
        const x = V === un.month ? un.year : un.month;
        r("update-month-year", { [V]: te, [x]: a[x] }), V === un.month ? L(!0) : y(!0);
      }
    }), M = oe(_(un.month)), C = oe(_(un.year)), H = oe(() => (V) => ({
      month: a.month,
      year: a.year,
      items: V === un.month ? a.months : a.years,
      instance: a.instance,
      updateMonthYear: k,
      toggle: V === un.month ? L : y
    })), F = oe(() => a.months.find((te) => te.value === a.month) || { text: "", value: 0 }), Z = oe(() => ia(a.months, (V) => {
      const te = a.month === V.value, x = ts(
        V.value,
        Dp(a.year, d.value.minDate),
        Rp(a.year, d.value.maxDate)
      ) || i.value.months.includes(V.value), G = Fp(u.value, V.value, a.year);
      return { active: te, disabled: x, highlighted: G };
    })), j = oe(() => ia(a.years, (V) => {
      const te = a.year === V.value, x = ts(
        V.value,
        ua(d.value.minDate),
        ua(d.value.maxDate)
      ) || i.value.years.includes(V.value), G = Bi(u.value, V.value);
      return { active: te, disabled: x, highlighted: G };
    })), T = (V, te, x) => {
      x !== void 0 ? V.value = x : V.value = !V.value, V.value ? r("overlay-opened", te) : r("overlay-closed", te);
    }, L = (V = !1, te) => {
      X(V), T(q, Nt.month, te);
    }, y = (V = !1, te) => {
      X(V), T(Y, Nt.year, te);
    }, X = (V) => {
      V || r("reset-flow");
    }, ie = (V, te) => {
      a.arrowNavigation && (E.value[te] = gt(V), m(E.value, "monthYear"));
    }, ve = oe(() => {
      var V, te;
      return [
        {
          type: un.month,
          index: 1,
          toggle: L,
          modelValue: M.value,
          updateModelValue: (x) => M.value = x,
          text: F.value.text,
          showSelectionGrid: q.value,
          items: Z.value,
          ariaLabel: (V = o.value) == null ? void 0 : V.openMonthsOverlay
        },
        {
          type: un.year,
          index: 2,
          toggle: y,
          modelValue: C.value,
          updateModelValue: (x) => C.value = x,
          text: Ep(a.year, a.locale),
          showSelectionGrid: Y.value,
          items: j.value,
          ariaLabel: (te = o.value) == null ? void 0 : te.openYearsOverlay
        }
      ];
    }), _e = oe(() => a.disableYearSelect ? [ve.value[0]] : a.yearFirst ? [...ve.value].reverse() : ve.value);
    return t({
      toggleMonthPicker: L,
      toggleYearPicker: y,
      handleMonthYearChange: S
    }), (V, te) => {
      var x, G, fe, I, ye, Pe;
      return U(), Q("div", Dx, [
        V.$slots["month-year"] ? (U(), Q("div", Rx, [
          we(V.$slots, "month-year", St(Ut({ month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: D(k), handleMonthYearChange: D(S), instance: e.instance })))
        ])) : (U(), Q(Te, { key: 1 }, [
          V.$slots["top-extra"] ? (U(), Q("div", Cx, [
            we(V.$slots, "top-extra", { value: V.internalModelValue })
          ])) : ae("", !0),
          Se("div", Nx, [
            D(h)(D(l), e.instance) && !V.vertical ? (U(), Ee(ja, {
              key: 0,
              "aria-label": (x = D(o)) == null ? void 0 : x.prevMonth,
              disabled: D(R)(!1),
              class: Re((G = D(p)) == null ? void 0 : G.navBtnPrev),
              onActivate: te[0] || (te[0] = (J) => D(S)(!1, !0)),
              onSetRef: te[1] || (te[1] = (J) => ie(J, 0))
            }, {
              default: Ne(() => [
                V.$slots["arrow-left"] ? we(V.$slots, "arrow-left", { key: 0 }) : ae("", !0),
                V.$slots["arrow-left"] ? ae("", !0) : (U(), Ee(D(Di), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : ae("", !0),
            Se("div", {
              class: Re(["dp__month_year_wrap", {
                dp__year_disable_select: V.disableYearSelect
              }])
            }, [
              (U(!0), Q(Te, null, Ye(_e.value, (J, g) => (U(), Q(Te, {
                key: J.type
              }, [
                Se("button", {
                  ref_for: !0,
                  ref: (f) => ie(f, g + 1),
                  type: "button",
                  class: "dp__btn dp__month_year_select",
                  tabindex: "0",
                  "aria-label": J.ariaLabel,
                  "data-test": `${J.type}-toggle-overlay-${e.instance}`,
                  onClick: J.toggle,
                  onKeydown: (f) => D(zt)(f, () => J.toggle(), !0)
                }, [
                  V.$slots[J.type] ? we(V.$slots, J.type, {
                    key: 0,
                    text: J.text,
                    value: a[J.type]
                  }) : ae("", !0),
                  V.$slots[J.type] ? ae("", !0) : (U(), Q(Te, { key: 1 }, [
                    hn(Fe(J.text), 1)
                  ], 64))
                ], 40, $x),
                Ke(ca, {
                  name: D(v)(J.showSelectionGrid),
                  css: D(w)
                }, {
                  default: Ne(() => [
                    J.showSelectionGrid ? (U(), Ee(fs, {
                      key: 0,
                      items: J.items,
                      "arrow-navigation": V.arrowNavigation,
                      "hide-navigation": V.hideNavigation,
                      "is-last": V.autoApply && !D(c).keepActionRow,
                      "skip-button-ref": !1,
                      config: V.config,
                      type: J.type,
                      "header-refs": [],
                      "esc-close": V.escClose,
                      "menu-wrap-ref": V.menuWrapRef,
                      "text-input": V.textInput,
                      "aria-labels": V.ariaLabels,
                      onSelected: J.updateModelValue,
                      onToggle: J.toggle
                    }, Lt({
                      "button-icon": Ne(() => [
                        V.$slots["calendar-icon"] ? we(V.$slots, "calendar-icon", { key: 0 }) : ae("", !0),
                        V.$slots["calendar-icon"] ? ae("", !0) : (U(), Ee(D(pa), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      V.$slots[`${J.type}-overlay-value`] ? {
                        name: "item",
                        fn: Ne(({ item: f }) => [
                          we(V.$slots, `${J.type}-overlay-value`, {
                            text: f.text,
                            value: f.value
                          })
                        ]),
                        key: "0"
                      } : void 0,
                      V.$slots[`${J.type}-overlay`] ? {
                        name: "overlay",
                        fn: Ne(() => [
                          we(V.$slots, `${J.type}-overlay`, bt({ ref_for: !0 }, H.value(J.type)))
                        ]),
                        key: "1"
                      } : void 0,
                      V.$slots[`${J.type}-overlay-header`] ? {
                        name: "header",
                        fn: Ne(() => [
                          we(V.$slots, `${J.type}-overlay-header`, {
                            toggle: J.toggle
                          })
                        ]),
                        key: "2"
                      } : void 0
                    ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "onSelected", "onToggle"])) : ae("", !0)
                  ]),
                  _: 2
                }, 1032, ["name", "css"])
              ], 64))), 128))
            ], 2),
            D(h)(D(l), e.instance) && V.vertical ? (U(), Ee(ja, {
              key: 1,
              "aria-label": (fe = D(o)) == null ? void 0 : fe.prevMonth,
              disabled: D(R)(!1),
              class: Re((I = D(p)) == null ? void 0 : I.navBtnPrev),
              onActivate: te[2] || (te[2] = (J) => D(S)(!1, !0))
            }, {
              default: Ne(() => [
                V.$slots["arrow-up"] ? we(V.$slots, "arrow-up", { key: 0 }) : ae("", !0),
                V.$slots["arrow-up"] ? ae("", !0) : (U(), Ee(D(Ni), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : ae("", !0),
            D(b)(D(l), e.instance) ? (U(), Ee(ja, {
              key: 2,
              ref: "rightIcon",
              disabled: D(R)(!0),
              "aria-label": (ye = D(o)) == null ? void 0 : ye.nextMonth,
              class: Re((Pe = D(p)) == null ? void 0 : Pe.navBtnNext),
              onActivate: te[3] || (te[3] = (J) => D(S)(!0, !0)),
              onSetRef: te[4] || (te[4] = (J) => ie(J, V.disableYearSelect ? 2 : 3))
            }, {
              default: Ne(() => [
                V.$slots[V.vertical ? "arrow-down" : "arrow-right"] ? we(V.$slots, V.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : ae("", !0),
                V.$slots[V.vertical ? "arrow-down" : "arrow-right"] ? ae("", !0) : (U(), Ee(wo(V.vertical ? D($i) : D(Ri)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label", "class"])) : ae("", !0)
          ])
        ], 64))
      ]);
    };
  }
}), Fx = ["aria-label"], Lx = {
  class: "dp__calendar_header",
  role: "row"
}, Vx = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Bx = ["aria-label"], jx = /* @__PURE__ */ Se("div", { class: "dp__calendar_header_separator" }, null, -1), Hx = ["aria-label"], Ux = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, Yx = { class: "dp__cell_inner" }, qx = ["id", "aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], Wx = /* @__PURE__ */ Dt({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...yn
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
    const r = n, a = e, { buildMultiLevelMatrix: s } = fr(), {
      defaultedTransitions: o,
      defaultedConfig: l,
      defaultedAriaLabels: i,
      defaultedMultiCalendars: c,
      defaultedWeekNumbers: u,
      defaultedMultiDates: d,
      defaultedUI: p
    } = lt(a), v = /* @__PURE__ */ se(null), w = /* @__PURE__ */ se({
      bottom: "",
      left: "",
      transform: ""
    }), m = /* @__PURE__ */ se([]), S = /* @__PURE__ */ se(null), R = /* @__PURE__ */ se(!0), k = /* @__PURE__ */ se(""), h = /* @__PURE__ */ se({ startX: 0, endX: 0, startY: 0, endY: 0 }), b = /* @__PURE__ */ se([]), q = /* @__PURE__ */ se({ left: "50%" }), Y = /* @__PURE__ */ se(!1), E = oe(() => a.calendar ? a.calendar(a.mappedDates) : a.mappedDates), _ = oe(() => a.dayNames ? Array.isArray(a.dayNames) ? a.dayNames : a.dayNames(a.locale, +a.weekStart) : _1(a.formatLocale, a.locale, +a.weekStart));
    _t(() => {
      r("mount", { cmp: "calendar", refs: m }), l.value.noSwipe || S.value && (S.value.addEventListener("touchstart", ie, { passive: !1 }), S.value.addEventListener("touchend", ve, { passive: !1 }), S.value.addEventListener("touchmove", _e, { passive: !1 })), a.monthChangeOnScroll && S.value && S.value.addEventListener("wheel", x, { passive: !1 });
    });
    const M = (J) => J ? a.vertical ? "vNext" : "next" : a.vertical ? "vPrevious" : "previous", C = (J, g) => {
      if (a.transitions) {
        const f = Yt(Ln(le(), a.month, a.year));
        k.value = pt(Yt(Ln(le(), J, g)), f) ? o.value[M(!0)] : o.value[M(!1)], R.value = !1, Et(() => {
          R.value = !0;
        });
      }
    }, H = oe(
      () => ({
        [a.calendarClassName]: !!a.calendarClassName,
        ...p.value.calendar ?? {}
      })
    ), F = oe(() => (J) => {
      const g = T1(J);
      return {
        dp__marker_dot: g.type === "dot",
        dp__marker_line: g.type === "line"
      };
    }), Z = oe(() => (J) => Ie(J, v.value)), j = oe(() => ({
      dp__calendar: !0,
      dp__calendar_next: c.value.count > 0 && a.instance !== 0
    })), T = oe(() => (J) => a.hideOffsetDates ? J.current : !0), L = async (J, g, f) => {
      const O = gt(m.value[g][f]);
      if (O) {
        const { width: B, height: $ } = O.getBoundingClientRect();
        v.value = J.value;
        let N = { left: `${B / 2}px` }, re = -50;
        if (await Et(), b.value[0]) {
          const { left: A, width: W } = b.value[0].getBoundingClientRect();
          A < 0 && (N = { left: "0" }, re = 0, q.value.left = `${B / 2}px`), window.innerWidth < A + W && (N = { right: "0" }, re = 0, q.value.left = `${W - B / 2}px`);
        }
        w.value = {
          bottom: `${$}px`,
          ...N,
          transform: `translateX(${re}%)`
        }, r("tooltip-open", J.marker);
      }
    }, y = async (J, g, f) => {
      var O, B;
      if (Y.value && d.value.enabled && d.value.dragSelect)
        return r("select-date", J);
      r("set-hover-date", J), (B = (O = J.marker) == null ? void 0 : O.tooltip) != null && B.length && await L(J, g, f);
    }, X = (J) => {
      v.value && (v.value = null, w.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), r("tooltip-close", J.marker));
    }, ie = (J) => {
      h.value.startX = J.changedTouches[0].screenX, h.value.startY = J.changedTouches[0].screenY;
    }, ve = (J) => {
      h.value.endX = J.changedTouches[0].screenX, h.value.endY = J.changedTouches[0].screenY, V();
    }, _e = (J) => {
      a.vertical && !a.inline && J.preventDefault();
    }, V = () => {
      const J = a.vertical ? "Y" : "X";
      Math.abs(h.value[`start${J}`] - h.value[`end${J}`]) > 10 && r("handle-swipe", h.value[`start${J}`] > h.value[`end${J}`] ? "right" : "left");
    }, te = (J, g, f) => {
      J && (Array.isArray(m.value[g]) ? m.value[g][f] = J : m.value[g] = [J]), a.arrowNavigation && s(m.value, "calendar");
    }, x = (J) => {
      a.monthChangeOnScroll && (J.preventDefault(), r("handle-scroll", J));
    }, G = (J) => u.value.type === "local" ? Ai(J.value, { weekStartsOn: +a.weekStart }) : u.value.type === "iso" ? Oi(J.value) : typeof u.value.type == "function" ? u.value.type(J.value) : "", fe = (J) => {
      const g = J[0];
      return u.value.hideOnOffsetDates ? J.some((f) => f.current) ? G(g) : "" : G(g);
    }, I = (J, g) => {
      d.value.enabled || (rr(J, l.value), r("select-date", g));
    }, ye = (J) => {
      rr(J, l.value);
    }, Pe = (J) => {
      d.value.enabled && d.value.dragSelect ? (Y.value = !0, r("select-date", J)) : d.value.enabled && r("select-date", J);
    };
    return t({ triggerTransition: C }), (J, g) => {
      var f;
      return U(), Q("div", {
        class: Re(j.value)
      }, [
        Se("div", {
          ref_key: "calendarWrapRef",
          ref: S,
          role: "grid",
          class: Re(H.value),
          "aria-label": (f = D(i)) == null ? void 0 : f.calendarWrap
        }, [
          Se("div", Lx, [
            J.weekNumbers ? (U(), Q("div", Vx, Fe(J.weekNumName), 1)) : ae("", !0),
            (U(!0), Q(Te, null, Ye(_.value, (O, B) => {
              var $, N;
              return U(), Q("div", {
                key: B,
                class: "dp__calendar_header_item",
                role: "gridcell",
                "data-test": "calendar-header",
                "aria-label": (N = ($ = D(i)) == null ? void 0 : $.weekDay) == null ? void 0 : N.call($, B)
              }, [
                J.$slots["calendar-header"] ? we(J.$slots, "calendar-header", {
                  key: 0,
                  day: O,
                  index: B
                }) : ae("", !0),
                J.$slots["calendar-header"] ? ae("", !0) : (U(), Q(Te, { key: 1 }, [
                  hn(Fe(O), 1)
                ], 64))
              ], 8, Bx);
            }), 128))
          ]),
          jx,
          Ke(ca, {
            name: k.value,
            css: !!J.transitions
          }, {
            default: Ne(() => {
              var O;
              return [
                R.value ? (U(), Q("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((O = D(i)) == null ? void 0 : O.calendarDays) || void 0,
                  onMouseleave: g[1] || (g[1] = (B) => Y.value = !1)
                }, [
                  (U(!0), Q(Te, null, Ye(E.value, (B, $) => (U(), Q("div", {
                    key: $,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    J.weekNumbers ? (U(), Q("div", Ux, [
                      Se("div", Yx, Fe(fe(B.days)), 1)
                    ])) : ae("", !0),
                    (U(!0), Q(Te, null, Ye(B.days, (N, re) => {
                      var A, W, z;
                      return U(), Q("div", {
                        id: D(Lp)(N.value),
                        ref_for: !0,
                        ref: (ue) => te(ue, $, re),
                        key: re + $,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (N.classData.dp__active_date || N.classData.dp__range_start || N.classData.dp__range_start) ?? void 0,
                        "aria-disabled": N.classData.dp__cell_disabled || void 0,
                        "aria-label": (W = (A = D(i)) == null ? void 0 : A.day) == null ? void 0 : W.call(A, N),
                        tabindex: "0",
                        "data-test": N.value,
                        onClick: ea((ue) => I(ue, N), ["prevent"]),
                        onKeydown: (ue) => D(zt)(ue, () => J.$emit("select-date", N)),
                        onMouseenter: (ue) => y(N, $, re),
                        onMouseleave: (ue) => X(N),
                        onMousedown: (ue) => Pe(N),
                        onMouseup: g[0] || (g[0] = (ue) => Y.value = !1)
                      }, [
                        Se("div", {
                          class: Re(["dp__cell_inner", N.classData])
                        }, [
                          J.$slots.day && T.value(N) ? we(J.$slots, "day", {
                            key: 0,
                            day: +N.text,
                            date: N.value
                          }) : ae("", !0),
                          J.$slots.day ? ae("", !0) : (U(), Q(Te, { key: 1 }, [
                            hn(Fe(N.text), 1)
                          ], 64)),
                          N.marker && T.value(N) ? (U(), Q(Te, { key: 2 }, [
                            J.$slots.marker ? we(J.$slots, "marker", {
                              key: 0,
                              marker: N.marker,
                              day: +N.text,
                              date: N.value
                            }) : (U(), Q("div", {
                              key: 1,
                              class: Re(F.value(N.marker)),
                              style: Pt(N.marker.color ? { backgroundColor: N.marker.color } : {})
                            }, null, 6))
                          ], 64)) : ae("", !0),
                          Z.value(N.value) ? (U(), Q("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: b,
                            class: "dp__marker_tooltip",
                            style: Pt(w.value)
                          }, [
                            (z = N.marker) != null && z.tooltip ? (U(), Q("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: ye
                            }, [
                              (U(!0), Q(Te, null, Ye(N.marker.tooltip, (ue, de) => (U(), Q("div", {
                                key: de,
                                class: "dp__tooltip_text"
                              }, [
                                J.$slots["marker-tooltip"] ? we(J.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: ue,
                                  day: N.value
                                }) : ae("", !0),
                                J.$slots["marker-tooltip"] ? ae("", !0) : (U(), Q(Te, { key: 1 }, [
                                  Se("div", {
                                    class: "dp__tooltip_mark",
                                    style: Pt(ue.color ? { backgroundColor: ue.color } : {})
                                  }, null, 4),
                                  Se("div", null, Fe(ue.text), 1)
                                ], 64))
                              ]))), 128)),
                              Se("div", {
                                class: "dp__arrow_bottom_tp",
                                style: Pt(q.value)
                              }, null, 4)
                            ])) : ae("", !0)
                          ], 4)) : ae("", !0)
                        ], 2)
                      ], 40, qx);
                    }), 128))
                  ]))), 128))
                ], 40, Hx)) : ae("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, Fx)
      ], 2);
    };
  }
}), Dc = (e) => Array.isArray(e), zx = (e, t, n, r) => {
  const a = /* @__PURE__ */ se([]), s = /* @__PURE__ */ se(/* @__PURE__ */ new Date()), o = /* @__PURE__ */ se(), l = () => ve(e.isTextInputDate), { modelValue: i, calendars: c, time: u, today: d } = ms(e, t, l), {
    defaultedMultiCalendars: p,
    defaultedStartTime: v,
    defaultedRange: w,
    defaultedConfig: m,
    defaultedTz: S,
    propDates: R,
    defaultedMultiDates: k
  } = lt(e), { validateMonthYearInRange: h, isDisabled: b, isDateRangeAllowed: q, checkMinMaxRange: Y } = pr(e), { updateTimeValues: E, getSetDateTime: _, setTime: M, assignStartTime: C, validateTime: H, disabledTimesConfig: F } = qp(e, u, i, r), Z = oe(
    () => (K) => c.value[K] ? c.value[K].month : 0
  ), j = oe(
    () => (K) => c.value[K] ? c.value[K].year : 0
  ), T = (K) => !m.value.keepViewOnOffsetClick || K ? !0 : !o.value, L = (K, me, ee, he = !1) => {
    var ge, Vt;
    T(he) && (c.value[K] || (c.value[K] = { month: 0, year: 0 }), c.value[K].month = Oc(me) ? (ge = c.value[K]) == null ? void 0 : ge.month : me, c.value[K].year = Oc(ee) ? (Vt = c.value[K]) == null ? void 0 : Vt.year : ee);
  }, y = () => {
    e.autoApply && t("select-date");
  };
  _t(() => {
    e.shadow || (i.value || (g(), v.value && C(v.value)), ve(!0), e.focusStartDate && e.startDate && g());
  });
  const X = oe(() => {
    var K;
    return (K = e.flow) != null && K.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), ie = () => {
    e.autoApply && X.value && t("auto-apply");
  }, ve = (K = !1) => {
    if (i.value)
      return Array.isArray(i.value) ? (a.value = i.value, I(K)) : te(i.value, K);
    if (p.value.count && K && !e.startDate)
      return V(le(), K);
  }, _e = () => Array.isArray(i.value) && w.value.enabled ? $e(i.value[0]) === $e(i.value[1] ?? i.value[0]) : !1, V = (K = /* @__PURE__ */ new Date(), me = !1) => {
    if ((!p.value.count || !p.value.static || me) && L(0, $e(K), Me(K)), p.value.count && (!p.value.solo || !i.value || _e()))
      for (let ee = 1; ee < p.value.count; ee++) {
        const he = Je(le(), { month: Z.value(ee - 1), year: j.value(ee - 1) }), ge = sp(he, { months: 1 });
        c.value[ee] = { month: $e(ge), year: Me(ge) };
      }
  }, te = (K, me) => {
    V(K), M("hours", Un(K)), M("minutes", dr(K)), M("seconds", sa(K)), p.value.count && me && J();
  }, x = (K) => {
    if (p.value.count) {
      if (p.value.solo) return 0;
      const me = $e(K[0]), ee = $e(K[1]);
      return Math.abs(ee - me) < p.value.count ? 0 : 1;
    }
    return 1;
  }, G = (K, me) => {
    K[1] && w.value.showLastInRange ? V(K[x(K)], me) : V(K[0], me);
    const ee = (he, ge) => [
      he(K[0]),
      K[1] ? he(K[1]) : u[ge][1]
    ];
    M("hours", ee(Un, "hours")), M("minutes", ee(dr, "minutes")), M("seconds", ee(sa, "seconds"));
  }, fe = (K, me) => {
    if ((w.value.enabled || e.weekPicker) && !k.value.enabled)
      return G(K, me);
    if (k.value.enabled && me) {
      const ee = K[K.length - 1];
      return te(ee, me);
    }
  }, I = (K) => {
    const me = i.value;
    fe(me, K), p.value.count && p.value.solo && J();
  }, ye = (K, me) => {
    const ee = Je(le(), { month: Z.value(me), year: j.value(me) }), he = K < 0 ? pn(ee, 1) : la(ee, 1);
    h($e(he), Me(he), K < 0, e.preventMinMaxNavigation) && (L(me, $e(he), Me(he)), t("update-month-year", { instance: me, month: $e(he), year: Me(he) }), p.value.count && !p.value.solo && Pe(me), n());
  }, Pe = (K) => {
    for (let me = K - 1; me >= 0; me--) {
      const ee = la(Je(le(), { month: Z.value(me + 1), year: j.value(me + 1) }), 1);
      L(me, $e(ee), Me(ee));
    }
    for (let me = K + 1; me <= p.value.count - 1; me++) {
      const ee = pn(Je(le(), { month: Z.value(me - 1), year: j.value(me - 1) }), 1);
      L(me, $e(ee), Me(ee));
    }
  }, J = () => {
    if (Array.isArray(i.value) && i.value.length === 2) {
      const K = le(
        le(i.value[1] ? i.value[1] : pn(i.value[0], 1))
      ), [me, ee] = [$e(i.value[0]), Me(i.value[0])], [he, ge] = [$e(i.value[1]), Me(i.value[1])];
      (me !== he || me === he && ee !== ge) && p.value.solo && L(1, $e(K), Me(K));
    } else i.value && !Array.isArray(i.value) && (L(0, $e(i.value), Me(i.value)), V(le()));
  }, g = () => {
    e.startDate && (L(0, $e(le(e.startDate)), Me(le(e.startDate))), p.value.count && Pe(0));
  }, f = (K, me) => {
    if (e.monthChangeOnScroll) {
      const ee = (/* @__PURE__ */ new Date()).getTime() - s.value.getTime(), he = Math.abs(K.deltaY);
      let ge = 500;
      he > 1 && (ge = 100), he > 100 && (ge = 0), ee > ge && (s.value = /* @__PURE__ */ new Date(), ye(e.monthChangeOnScroll !== "inverse" ? -K.deltaY : K.deltaY, me));
    }
  }, O = (K, me, ee = !1) => {
    e.monthChangeOnArrows && e.vertical === ee && B(K, me);
  }, B = (K, me) => {
    ye(K === "right" ? -1 : 1, me);
  }, $ = (K) => {
    if (R.value.markers)
      return ao(K.value, R.value.markers);
  }, N = (K, me) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [K == 0, !0];
      case "fair":
        return [K == 0 || me > K, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, re = (K, me, ee, he) => {
    if (e.sixWeeks && K.length < 6) {
      const ge = 6 - K.length, Vt = (me.getDay() + 7 - he) % 7, nn = 6 - (ee.getDay() + 7 - he) % 7, [mr, hs] = N(Vt, nn);
      for (let ma = 1; ma <= ge; ma++)
        if (hs ? !!(ma % 2) == mr : mr) {
          const zn = K[0].days[0], Io = A(dn(zn.value, -7), $e(me));
          K.unshift({ days: Io });
        } else {
          const zn = K[K.length - 1], Io = zn.days[zn.days.length - 1], Wp = A(dn(Io.value, 1), $e(me));
          K.push({ days: Wp });
        }
    }
    return K;
  }, A = (K, me) => {
    const ee = le(K), he = [];
    for (let ge = 0; ge < 7; ge++) {
      const Vt = dn(ee, ge), nn = $e(Vt) !== me;
      he.push({
        text: e.hideOffsetDates && nn ? "" : Vt.getDate(),
        value: Vt,
        current: !nn,
        classData: {}
      });
    }
    return he;
  }, W = (K, me) => {
    const ee = [], he = new Date(me, K), ge = new Date(me, K + 1, 0), Vt = e.weekStart, nn = vn(he, { weekStartsOn: Vt }), mr = (hs) => {
      const ma = A(hs, K);
      if (ee.push({ days: ma }), !ee[ee.length - 1].days.some(
        (zn) => Ie(Yt(zn.value), Yt(ge))
      )) {
        const zn = dn(hs, 7);
        mr(zn);
      }
    };
    return mr(nn), re(ee, he, ge, Vt);
  }, z = (K) => {
    const me = ar(le(K.value), u.hours, u.minutes, Ae());
    t("date-update", me), k.value.enabled ? ji(me, i, k.value.limit) : i.value = me, r(), Et().then(() => {
      ie();
    });
  }, ue = (K) => w.value.noDisabledRange ? Cp(a.value[0], K).some((me) => b(me)) : !1, de = () => {
    a.value = i.value ? i.value.slice() : [], a.value.length === 2 && !(w.value.fixedStart || w.value.fixedEnd) && (a.value = []);
  }, ne = (K, me) => {
    const ee = [
      le(K.value),
      dn(le(K.value), +w.value.autoRange)
    ];
    q(ee) ? (me && ce(K.value), a.value = ee) : t("invalid-date", K.value);
  }, ce = (K) => {
    const me = $e(le(K)), ee = Me(le(K));
    if (L(0, me, ee), p.value.count > 0)
      for (let he = 1; he < p.value.count; he++) {
        const ge = D1(
          Je(le(K), { year: Z.value(he - 1), month: j.value(he - 1) })
        );
        L(he, ge.month, ge.year);
      }
  }, xe = (K) => {
    if (ue(K.value) || !Y(K.value, i.value, w.value.fixedStart ? 0 : 1))
      return t("invalid-date", K.value);
    a.value = Hp(le(K.value), i, t, w);
  }, Ce = (K, me) => {
    if (de(), w.value.autoRange) return ne(K, me);
    if (w.value.fixedStart || w.value.fixedEnd) return xe(K);
    a.value[0] ? Y(le(K.value), i.value) && !ue(K.value) ? ut(le(K.value), le(a.value[0])) ? (a.value.unshift(le(K.value)), t("range-end", a.value[0])) : (a.value[1] = le(K.value), t("range-end", a.value[1])) : (e.autoApply && t("auto-apply-invalid", K.value), t("invalid-date", K.value)) : (a.value[0] = le(K.value), t("range-start", a.value[0]));
  }, Ae = (K = !0) => e.enableSeconds ? Array.isArray(u.seconds) ? K ? u.seconds[0] : u.seconds[1] : u.seconds : 0, qe = (K) => {
    a.value[K] = ar(
      a.value[K],
      u.hours[K],
      u.minutes[K],
      Ae(K !== 1)
    );
  }, at = () => {
    var K, me;
    a.value[0] && a.value[1] && +((K = a.value) == null ? void 0 : K[0]) > +((me = a.value) == null ? void 0 : me[1]) && (a.value.reverse(), t("range-start", a.value[0]), t("range-end", a.value[1]));
  }, it = () => {
    a.value.length && (a.value[0] && !a.value[1] ? qe(0) : (qe(0), qe(1), r()), at(), i.value = a.value.slice(), Co(a.value, t, e.autoApply, e.modelAuto));
  }, qt = (K, me = !1) => {
    if (b(K.value) || !K.current && e.hideOffsetDates) return t("invalid-date", K.value);
    if (o.value = JSON.parse(JSON.stringify(K)), !w.value.enabled) return z(K);
    Dc(u.hours) && Dc(u.minutes) && !k.value.enabled && (Ce(K, me), it());
  }, Xt = (K, me) => {
    var ee;
    L(K, me.month, me.year, !0), p.value.count && !p.value.solo && Pe(K), t("update-month-year", { instance: K, month: me.month, year: me.year }), n(p.value.solo ? K : void 0);
    const he = (ee = e.flow) != null && ee.length ? e.flow[e.flowStep] : void 0;
    !me.fromNav && (he === Nt.month || he === Nt.year) && r();
  }, Hr = (K, me) => {
    jp({
      value: K,
      modelValue: i,
      range: w.value.enabled,
      timezone: me ? void 0 : S.value.timezone
    }), y(), e.multiCalendars && Et().then(() => ve(!0));
  }, kt = () => {
    const K = Ii(le(), S.value);
    w.value.enabled ? i.value && Array.isArray(i.value) && i.value[0] ? i.value = ut(K, i.value[0]) ? [K, i.value[0]] : [i.value[0], K] : i.value = [K] : i.value = K, y();
  }, Wt = () => {
    if (Array.isArray(i.value))
      if (k.value.enabled) {
        const K = Ur();
        i.value[i.value.length - 1] = _(K);
      } else
        i.value = i.value.map((K, me) => K && _(K, me));
    else
      i.value = _(i.value);
    t("time-update");
  }, Ur = () => Array.isArray(i.value) && i.value.length ? i.value[i.value.length - 1] : null;
  return {
    calendars: c,
    modelValue: i,
    month: Z,
    year: j,
    time: u,
    disabledTimesConfig: F,
    today: d,
    validateTime: H,
    getCalendarDays: W,
    getMarker: $,
    handleScroll: f,
    handleSwipe: B,
    handleArrow: O,
    selectDate: qt,
    updateMonthYear: Xt,
    presetDate: Hr,
    selectCurrentDate: kt,
    updateTime: (K, me = !0, ee = !1) => {
      E(K, me, ee, Wt);
    },
    assignMonthAndYear: V
  };
}, Kx = { key: 0 }, Jx = /* @__PURE__ */ Dt({
  __name: "DatePicker",
  props: {
    ...yn
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
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, {
      calendars: s,
      month: o,
      year: l,
      modelValue: i,
      time: c,
      disabledTimesConfig: u,
      today: d,
      validateTime: p,
      getCalendarDays: v,
      getMarker: w,
      handleArrow: m,
      handleScroll: S,
      handleSwipe: R,
      selectDate: k,
      updateMonthYear: h,
      presetDate: b,
      selectCurrentDate: q,
      updateTime: Y,
      assignMonthAndYear: E
    } = zx(a, r, _e, V), _ = Br(), { setHoverDate: M, getDayClassData: C, clearHoverDate: H } = dT(i, a), { defaultedMultiCalendars: F } = lt(a), Z = /* @__PURE__ */ se([]), j = /* @__PURE__ */ se([]), T = /* @__PURE__ */ se(null), L = Qt(_, "calendar"), y = Qt(_, "monthYear"), X = Qt(_, "timePicker"), ie = (f) => {
      a.shadow || r("mount", f);
    };
    ze(
      s,
      () => {
        a.shadow || setTimeout(() => {
          r("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    ), ze(
      F,
      (f, O) => {
        f.count - O.count > 0 && E();
      },
      { deep: !0 }
    );
    const ve = oe(() => (f) => v(o.value(f), l.value(f)).map((O) => ({
      ...O,
      days: O.days.map((B) => (B.marker = w(B), B.classData = C(B), B))
    })));
    function _e(f) {
      var O;
      f || f === 0 ? (O = j.value[f]) == null || O.triggerTransition(o.value(f), l.value(f)) : j.value.forEach((B, $) => B.triggerTransition(o.value($), l.value($)));
    }
    function V() {
      r("update-flow-step");
    }
    const te = (f, O = !1) => {
      k(f, O), a.spaceConfirm && r("select-date");
    }, x = (f, O, B = 0) => {
      var $;
      ($ = Z.value[B]) == null || $.toggleMonthPicker(f, O);
    }, G = (f, O, B = 0) => {
      var $;
      ($ = Z.value[B]) == null || $.toggleYearPicker(f, O);
    }, fe = (f, O, B) => {
      var $;
      ($ = T.value) == null || $.toggleTimePicker(f, O, B);
    }, I = (f, O) => {
      var B;
      if (!a.range) {
        const $ = i.value ? i.value : d, N = O ? new Date(O) : $, re = f ? vn(N, { weekStartsOn: 1 }) : pp(N, { weekStartsOn: 1 });
        k({
          value: re,
          current: $e(N) === o.value(0),
          text: "",
          classData: {}
        }), (B = document.getElementById(Lp(re))) == null || B.focus();
      }
    }, ye = (f) => {
      var O;
      (O = Z.value[0]) == null || O.handleMonthYearChange(f, !0);
    }, Pe = (f) => {
      h(0, { month: o.value(0), year: l.value(0) + (f ? 1 : -1), fromNav: !0 });
    }, J = (f, O) => {
      f === Nt.time && r(`time-picker-${O ? "open" : "close"}`), r("overlay-toggle", { open: O, overlay: f });
    }, g = (f) => {
      r("overlay-toggle", { open: !1, overlay: f }), r("focus-menu");
    };
    return t({
      clearHoverDate: H,
      presetDate: b,
      selectCurrentDate: q,
      toggleMonthPicker: x,
      toggleYearPicker: G,
      toggleTimePicker: fe,
      handleArrow: m,
      updateMonthYear: h,
      getSidebarProps: () => ({
        modelValue: i,
        month: o,
        year: l,
        time: c,
        updateTime: Y,
        updateMonthYear: h,
        selectDate: k,
        presetDate: b
      }),
      changeMonth: ye,
      changeYear: Pe,
      selectWeekDate: I
    }), (f, O) => (U(), Q(Te, null, [
      Ke(Ro, {
        "multi-calendars": D(F).count,
        collapse: f.collapse
      }, {
        default: Ne(({ instance: B, index: $ }) => [
          f.disableMonthYearSelect ? ae("", !0) : (U(), Ee(Ix, bt({
            key: 0,
            ref: (N) => {
              N && (Z.value[$] = N);
            },
            months: D(Pp)(f.formatLocale, f.locale, f.monthNameFormat),
            years: D(Fi)(f.yearRange, f.locale, f.reverseYears),
            month: D(o)(B),
            year: D(l)(B),
            instance: B
          }, f.$props, {
            onMount: O[0] || (O[0] = (N) => ie(D(Nr).header)),
            onResetFlow: O[1] || (O[1] = (N) => f.$emit("reset-flow")),
            onUpdateMonthYear: (N) => D(h)(B, N),
            onOverlayClosed: g,
            onOverlayOpened: O[2] || (O[2] = (N) => f.$emit("overlay-toggle", { open: !0, overlay: N }))
          }), Lt({ _: 2 }, [
            Ye(D(y), (N, re) => ({
              name: N,
              fn: Ne((A) => [
                we(f.$slots, N, St(Ut(A)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          Ke(Wx, bt({
            ref: (N) => {
              N && (j.value[$] = N);
            },
            "mapped-dates": ve.value(B),
            month: D(o)(B),
            year: D(l)(B),
            instance: B
          }, f.$props, {
            onSelectDate: (N) => D(k)(N, B !== 1),
            onHandleSpace: (N) => te(N, B !== 1),
            onSetHoverDate: O[3] || (O[3] = (N) => D(M)(N)),
            onHandleScroll: (N) => D(S)(N, B),
            onHandleSwipe: (N) => D(R)(N, B),
            onMount: O[4] || (O[4] = (N) => ie(D(Nr).calendar)),
            onResetFlow: O[5] || (O[5] = (N) => f.$emit("reset-flow")),
            onTooltipOpen: O[6] || (O[6] = (N) => f.$emit("tooltip-open", N)),
            onTooltipClose: O[7] || (O[7] = (N) => f.$emit("tooltip-close", N))
          }), Lt({ _: 2 }, [
            Ye(D(L), (N, re) => ({
              name: N,
              fn: Ne((A) => [
                we(f.$slots, N, St(Ut({ ...A })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      f.enableTimePicker ? (U(), Q("div", Kx, [
        f.$slots["time-picker"] ? we(f.$slots, "time-picker", St(bt({ key: 0 }, { time: D(c), updateTime: D(Y) }))) : (U(), Ee(Yp, bt({
          key: 1,
          ref_key: "timePickerRef",
          ref: T
        }, f.$props, {
          hours: D(c).hours,
          minutes: D(c).minutes,
          seconds: D(c).seconds,
          "internal-model-value": f.internalModelValue,
          "disabled-times-config": D(u),
          "validate-time": D(p),
          onMount: O[8] || (O[8] = (B) => ie(D(Nr).timePicker)),
          "onUpdate:hours": O[9] || (O[9] = (B) => D(Y)(B)),
          "onUpdate:minutes": O[10] || (O[10] = (B) => D(Y)(B, !1)),
          "onUpdate:seconds": O[11] || (O[11] = (B) => D(Y)(B, !1, !0)),
          onResetFlow: O[12] || (O[12] = (B) => f.$emit("reset-flow")),
          onOverlayClosed: O[13] || (O[13] = (B) => J(B, !1)),
          onOverlayOpened: O[14] || (O[14] = (B) => J(B, !0)),
          onAmPmChange: O[15] || (O[15] = (B) => f.$emit("am-pm-change", B))
        }), Lt({ _: 2 }, [
          Ye(D(X), (B, $) => ({
            name: B,
            fn: Ne((N) => [
              we(f.$slots, B, St(Ut(N)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : ae("", !0)
    ], 64));
  }
}), Xx = (e, t) => {
  const n = /* @__PURE__ */ se(), {
    defaultedMultiCalendars: r,
    defaultedConfig: a,
    defaultedHighlight: s,
    defaultedRange: o,
    propDates: l,
    defaultedFilters: i,
    defaultedMultiDates: c
  } = lt(e), { modelValue: u, year: d, month: p, calendars: v } = ms(e, t), { isDisabled: w } = pr(e), { selectYear: m, groupedYears: S, showYearPicker: R, isDisabled: k, toggleYearPicker: h, handleYearSelect: b, handleYear: q } = Up({
    modelValue: u,
    multiCalendars: r,
    range: o,
    highlight: s,
    calendars: v,
    propDates: l,
    month: p,
    year: d,
    filters: i,
    props: e,
    emit: t
  }), Y = (T, L) => [T, L].map((y) => Pn(y, "MMMM", { locale: e.formatLocale })).join("-"), E = oe(() => (T) => u.value ? Array.isArray(u.value) ? u.value.some((L) => Tc(T, L)) : Tc(u.value, T) : !1), _ = (T) => {
    if (o.value.enabled) {
      if (Array.isArray(u.value)) {
        const L = Ie(T, u.value[0]) || Ie(T, u.value[1]);
        return Eo(u.value, n.value, T) && !L;
      }
      return !1;
    }
    return !1;
  }, M = (T, L) => T.quarter === yc(L) && T.year === Me(L), C = (T) => typeof s.value == "function" ? s.value({ quarter: yc(T), year: Me(T) }) : !!s.value.quarters.find((L) => M(L, T)), H = oe(() => (T) => {
    const L = Je(/* @__PURE__ */ new Date(), { year: d.value(T) });
    return xw({
      start: Za(L),
      end: fp(L)
    }).map((y) => {
      const X = Ar(y), ie = gc(y), ve = w(y), _e = _(X), V = C(X);
      return {
        text: Y(X, ie),
        value: X,
        active: E.value(X),
        highlighted: V,
        disabled: ve,
        isBetween: _e
      };
    });
  }), F = (T) => {
    ji(T, u, c.value.limit), t("auto-apply", !0);
  }, Z = (T) => {
    u.value = Hi(u, T, t), Co(u.value, t, e.autoApply, e.modelAuto);
  }, j = (T) => {
    u.value = T, t("auto-apply");
  };
  return {
    defaultedConfig: a,
    defaultedMultiCalendars: r,
    groupedYears: S,
    year: d,
    isDisabled: k,
    quarters: H,
    showYearPicker: R,
    modelValue: u,
    setHoverDate: (T) => {
      n.value = T;
    },
    selectYear: m,
    selectQuarter: (T, L, y) => {
      if (!y)
        return v.value[L].month = $e(gc(T)), c.value.enabled ? F(T) : o.value.enabled ? Z(T) : j(T);
    },
    toggleYearPicker: h,
    handleYearSelect: b,
    handleYear: q
  };
}, Gx = { class: "dp--quarter-items" }, Qx = ["data-test", "disabled", "onClick", "onMouseover"], Zx = /* @__PURE__ */ Dt({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...yn
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-end",
    "overlay-toggle",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, s = Br(), o = Qt(s, "yearMode"), {
      defaultedMultiCalendars: l,
      defaultedConfig: i,
      groupedYears: c,
      year: u,
      isDisabled: d,
      quarters: p,
      modelValue: v,
      showYearPicker: w,
      setHoverDate: m,
      selectQuarter: S,
      toggleYearPicker: R,
      handleYearSelect: k,
      handleYear: h
    } = Xx(a, r);
    return t({ getSidebarProps: () => ({
      modelValue: v,
      year: u,
      selectQuarter: S,
      handleYearSelect: k,
      handleYear: h
    }) }), (b, q) => (U(), Ee(Ro, {
      "multi-calendars": D(l).count,
      collapse: b.collapse,
      stretch: ""
    }, {
      default: Ne(({ instance: Y }) => [
        Se("div", {
          class: "dp-quarter-picker-wrap",
          style: Pt({ minHeight: `${D(i).modeHeight}px` })
        }, [
          b.$slots["top-extra"] ? we(b.$slots, "top-extra", {
            key: 0,
            value: b.internalModelValue
          }) : ae("", !0),
          Se("div", null, [
            Ke(Bp, bt(b.$props, {
              items: D(c)(Y),
              instance: Y,
              "show-year-picker": D(w)[Y],
              year: D(u)(Y),
              "is-disabled": (E) => D(d)(Y, E),
              onHandleYear: (E) => D(h)(Y, E),
              onYearSelect: (E) => D(k)(E, Y),
              onToggleYearPicker: (E) => D(R)(Y, E == null ? void 0 : E.flow, E == null ? void 0 : E.show)
            }), Lt({ _: 2 }, [
              Ye(D(o), (E, _) => ({
                name: E,
                fn: Ne((M) => [
                  we(b.$slots, E, St(Ut(M)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          Se("div", Gx, [
            (U(!0), Q(Te, null, Ye(D(p)(Y), (E, _) => (U(), Q("div", { key: _ }, [
              Se("button", {
                type: "button",
                class: Re(["dp--qr-btn", {
                  "dp--qr-btn-active": E.active,
                  "dp--qr-btn-between": E.isBetween,
                  "dp--qr-btn-disabled": E.disabled,
                  "dp--highlighted": E.highlighted
                }]),
                "data-test": E.value,
                disabled: E.disabled,
                onClick: (M) => D(S)(E.value, Y, E.disabled),
                onMouseover: (M) => D(m)(E.value)
              }, [
                b.$slots.quarter ? we(b.$slots, "quarter", {
                  key: 0,
                  value: E.value,
                  text: E.text
                }) : (U(), Q(Te, { key: 1 }, [
                  hn(Fe(E.text), 1)
                ], 64))
              ], 42, Qx)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), eT = ["id", "aria-label"], tT = {
  key: 0,
  class: "dp--menu-load-container"
}, nT = /* @__PURE__ */ Se("span", { class: "dp--menu-loader" }, null, -1), rT = [
  nT
], aT = {
  key: 0,
  class: "dp__sidebar_left"
}, sT = ["data-test", "onClick", "onKeydown"], oT = {
  key: 2,
  class: "dp__sidebar_right"
}, lT = {
  key: 3,
  class: "dp__action_extra"
}, Rc = /* @__PURE__ */ Dt({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...Do,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 },
    getInputRect: { type: Function, default: () => ({}) },
    isTextInputDate: { type: Boolean, default: !1 }
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
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, s = /* @__PURE__ */ se(null), o = oe(() => {
      const { openOnTop: A, ...W } = a;
      return {
        ...W,
        flowStep: M.value,
        collapse: a.collapse,
        noOverlayFocus: a.noOverlayFocus,
        menuWrapRef: s.value
      };
    }), { setMenuFocused: l, setShiftKey: i, control: c } = Vp(), u = Br(), { defaultedTextInput: d, defaultedInline: p, defaultedConfig: v, defaultedUI: w } = lt(a), m = /* @__PURE__ */ se(null), S = /* @__PURE__ */ se(0), R = /* @__PURE__ */ se(null), k = /* @__PURE__ */ se(!1), h = /* @__PURE__ */ se(null);
    _t(() => {
      if (!a.shadow) {
        k.value = !0, b(), window.addEventListener("resize", b);
        const A = gt(s);
        if (A && !d.value.enabled && !p.value.enabled && (l(!0), L()), A) {
          const W = (z) => {
            v.value.allowPreventDefault && z.preventDefault(), rr(z, v.value, !0);
          };
          A.addEventListener("pointerdown", W), A.addEventListener("mousedown", W);
        }
      }
    }), ss(() => {
      window.removeEventListener("resize", b);
    });
    const b = () => {
      const A = gt(R);
      A && (S.value = A.getBoundingClientRect().width);
    }, { arrowRight: q, arrowLeft: Y, arrowDown: E, arrowUp: _ } = fr(), { flowStep: M, updateFlowStep: C, childMount: H, resetFlow: F, handleFlow: Z } = fT(a, r, h), j = oe(() => a.monthPicker ? dx : a.yearPicker ? px : a.timePicker ? Ex : a.quarterPicker ? Zx : Jx), T = oe(() => {
      var A;
      if (v.value.arrowLeft) return v.value.arrowLeft;
      const W = (A = s.value) == null ? void 0 : A.getBoundingClientRect(), z = a.getInputRect();
      return (z == null ? void 0 : z.width) < (S == null ? void 0 : S.value) && (z == null ? void 0 : z.left) <= ((W == null ? void 0 : W.left) ?? 0) ? `${(z == null ? void 0 : z.width) / 2}px` : (z == null ? void 0 : z.right) >= ((W == null ? void 0 : W.right) ?? 0) && (z == null ? void 0 : z.width) < (S == null ? void 0 : S.value) ? `${(S == null ? void 0 : S.value) - (z == null ? void 0 : z.width) / 2}px` : "50%";
    }), L = () => {
      const A = gt(s);
      A && A.focus({ preventScroll: !0 });
    }, y = oe(() => {
      var A;
      return ((A = h.value) == null ? void 0 : A.getSidebarProps()) || {};
    }), X = () => {
      a.openOnTop && r("recalculate-position");
    }, ie = Qt(u, "action"), ve = oe(() => a.monthPicker || a.yearPicker ? Qt(u, "monthYear") : a.timePicker ? Qt(u, "timePicker") : Qt(u, "shared")), _e = oe(() => a.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), V = oe(() => ({
      dp__menu_disabled: a.disabled,
      dp__menu_readonly: a.readonly,
      "dp-menu-loading": a.loading
    })), te = oe(
      () => ({
        dp__menu: !0,
        dp__menu_index: !p.value.enabled,
        dp__relative: p.value.enabled,
        [a.menuClassName]: !!a.menuClassName,
        ...w.value.menu ?? {}
      })
    ), x = (A) => {
      rr(A, v.value, !0);
    }, G = () => {
      a.escClose && r("close-picker");
    }, fe = (A) => {
      if (a.arrowNavigation) {
        if (A === jt.up) return _();
        if (A === jt.down) return E();
        if (A === jt.left) return Y();
        if (A === jt.right) return q();
      } else A === jt.left || A === jt.up ? g("handleArrow", jt.left, 0, A === jt.up) : g("handleArrow", jt.right, 0, A === jt.down);
    }, I = (A) => {
      i(A.shiftKey), !a.disableMonthYearSelect && A.code === st.tab && A.target.classList.contains("dp__menu") && c.value.shiftKeyInMenu && (A.preventDefault(), rr(A, v.value, !0), r("close-picker"));
    }, ye = () => {
      L(), r("time-picker-close");
    }, Pe = (A) => {
      var W, z, ue;
      (W = h.value) == null || W.toggleTimePicker(!1, !1), (z = h.value) == null || z.toggleMonthPicker(!1, !1, A), (ue = h.value) == null || ue.toggleYearPicker(!1, !1, A);
    }, J = (A, W = 0) => {
      var z, ue, de;
      return A === "month" ? (z = h.value) == null ? void 0 : z.toggleMonthPicker(!1, !0, W) : A === "year" ? (ue = h.value) == null ? void 0 : ue.toggleYearPicker(!1, !0, W) : A === "time" ? (de = h.value) == null ? void 0 : de.toggleTimePicker(!0, !1) : Pe(W);
    }, g = (A, ...W) => {
      var z, ue;
      (z = h.value) != null && z[A] && ((ue = h.value) == null || ue[A](...W));
    }, f = () => {
      g("selectCurrentDate");
    }, O = (A, W) => {
      g("presetDate", A, W);
    }, B = () => {
      g("clearHoverDate");
    }, $ = (A, W) => {
      g("updateMonthYear", A, W);
    }, N = (A, W) => {
      A.preventDefault(), fe(W);
    }, re = (A) => {
      var W;
      if (I(A), A.key === st.home || A.key === st.end)
        return g(
          "selectWeekDate",
          A.key === st.home,
          A.target.getAttribute("id")
        );
      switch ((A.key === st.pageUp || A.key === st.pageDown) && (A.shiftKey ? g("changeYear", A.key === st.pageUp) : g("changeMonth", A.key === st.pageUp), A.target.getAttribute("id") && ((W = s.value) == null || W.focus({ preventScroll: !0 }))), A.key) {
        case st.esc:
          return G();
        case st.arrowLeft:
          return N(A, jt.left);
        case st.arrowRight:
          return N(A, jt.right);
        case st.arrowUp:
          return N(A, jt.up);
        case st.arrowDown:
          return N(A, jt.down);
        default:
          return;
      }
    };
    return t({
      updateMonthYear: $,
      switchView: J,
      handleFlow: Z
    }), (A, W) => {
      var z, ue, de;
      return U(), Q("div", {
        id: A.uid ? `dp-menu-${A.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: s,
        tabindex: "0",
        role: "dialog",
        "aria-label": (z = A.ariaLabels) == null ? void 0 : z.menu,
        class: Re(te.value),
        style: Pt({ "--dp-arrow-left": T.value }),
        onMouseleave: B,
        onClick: x,
        onKeydown: re
      }, [
        (A.disabled || A.readonly) && D(p).enabled || A.loading ? (U(), Q("div", {
          key: 0,
          class: Re(V.value)
        }, [
          A.loading ? (U(), Q("div", tT, rT)) : ae("", !0)
        ], 2)) : ae("", !0),
        !D(p).enabled && !A.teleportCenter ? (U(), Q("div", {
          key: 1,
          class: Re(_e.value)
        }, null, 2)) : ae("", !0),
        Se("div", {
          ref_key: "innerMenuRef",
          ref: R,
          class: Re({
            dp__menu_content_wrapper: ((ue = A.presetDates) == null ? void 0 : ue.length) || !!A.$slots["left-sidebar"] || !!A.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && (((de = A.presetDates) == null ? void 0 : de.length) || !!A.$slots["left-sidebar"] || !!A.$slots["right-sidebar"])
          }),
          style: Pt({ "--dp-menu-width": `${S.value}px` })
        }, [
          A.$slots["left-sidebar"] ? (U(), Q("div", aT, [
            we(A.$slots, "left-sidebar", St(Ut(y.value)))
          ])) : ae("", !0),
          A.presetDates.length ? (U(), Q("div", {
            key: 1,
            class: Re({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            (U(!0), Q(Te, null, Ye(A.presetDates, (ne, ce) => (U(), Q(Te, { key: ce }, [
              ne.slot ? we(A.$slots, ne.slot, {
                key: 0,
                presetDate: O,
                label: ne.label,
                value: ne.value
              }) : (U(), Q("button", {
                key: 1,
                type: "button",
                style: Pt(ne.style || {}),
                class: Re(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                "data-test": ne.testId ?? void 0,
                onClick: ea((xe) => O(ne.value, ne.noTz), ["prevent"]),
                onKeydown: (xe) => D(zt)(xe, () => O(ne.value, ne.noTz), !0)
              }, Fe(ne.label), 47, sT))
            ], 64))), 128))
          ], 2)) : ae("", !0),
          Se("div", {
            ref_key: "calendarWrapperRef",
            ref: m,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (U(), Ee(wo(j.value), bt({
              ref_key: "dynCmpRef",
              ref: h
            }, o.value, {
              "flow-step": D(M),
              onMount: D(H),
              onUpdateFlowStep: D(C),
              onResetFlow: D(F),
              onFocusMenu: L,
              onSelectDate: W[0] || (W[0] = (ne) => A.$emit("select-date")),
              onDateUpdate: W[1] || (W[1] = (ne) => A.$emit("date-update", ne)),
              onTooltipOpen: W[2] || (W[2] = (ne) => A.$emit("tooltip-open", ne)),
              onTooltipClose: W[3] || (W[3] = (ne) => A.$emit("tooltip-close", ne)),
              onAutoApply: W[4] || (W[4] = (ne) => A.$emit("auto-apply", ne)),
              onRangeStart: W[5] || (W[5] = (ne) => A.$emit("range-start", ne)),
              onRangeEnd: W[6] || (W[6] = (ne) => A.$emit("range-end", ne)),
              onInvalidFixedRange: W[7] || (W[7] = (ne) => A.$emit("invalid-fixed-range", ne)),
              onTimeUpdate: W[8] || (W[8] = (ne) => A.$emit("time-update")),
              onAmPmChange: W[9] || (W[9] = (ne) => A.$emit("am-pm-change", ne)),
              onTimePickerOpen: W[10] || (W[10] = (ne) => A.$emit("time-picker-open", ne)),
              onTimePickerClose: ye,
              onRecalculatePosition: X,
              onUpdateMonthYear: W[11] || (W[11] = (ne) => A.$emit("update-month-year", ne)),
              onAutoApplyInvalid: W[12] || (W[12] = (ne) => A.$emit("auto-apply-invalid", ne)),
              onInvalidDate: W[13] || (W[13] = (ne) => A.$emit("invalid-date", ne)),
              onOverlayToggle: W[14] || (W[14] = (ne) => A.$emit("overlay-toggle", ne)),
              "onUpdate:internalModelValue": W[15] || (W[15] = (ne) => A.$emit("update:internal-model-value", ne))
            }), Lt({ _: 2 }, [
              Ye(ve.value, (ne, ce) => ({
                name: ne,
                fn: Ne((xe) => [
                  we(A.$slots, ne, St(Ut({ ...xe })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          A.$slots["right-sidebar"] ? (U(), Q("div", oT, [
            we(A.$slots, "right-sidebar", St(Ut(y.value)))
          ])) : ae("", !0),
          A.$slots["action-extra"] ? (U(), Q("div", lT, [
            A.$slots["action-extra"] ? we(A.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: f
            }) : ae("", !0)
          ])) : ae("", !0)
        ], 6),
        !A.autoApply || D(v).keepActionRow ? (U(), Ee(rx, bt({
          key: 2,
          "menu-mount": k.value
        }, o.value, {
          "calendar-width": S.value,
          onClosePicker: W[16] || (W[16] = (ne) => A.$emit("close-picker")),
          onSelectDate: W[17] || (W[17] = (ne) => A.$emit("select-date")),
          onInvalidSelect: W[18] || (W[18] = (ne) => A.$emit("invalid-select")),
          onSelectNow: f
        }), Lt({ _: 2 }, [
          Ye(D(ie), (ne, ce) => ({
            name: ne,
            fn: Ne((xe) => [
              we(A.$slots, ne, St(Ut({ ...xe })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : ae("", !0)
      ], 46, eT);
    };
  }
});
var Xr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Xr || {});
const iT = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: n,
  pickerWrapperRef: r,
  inline: a,
  emit: s,
  props: o,
  slots: l
}) => {
  const i = /* @__PURE__ */ se({}), c = /* @__PURE__ */ se(!1), u = /* @__PURE__ */ se({
    top: "0",
    left: "0"
  }), d = /* @__PURE__ */ se(!1), p = /* @__PURE__ */ Ya(o, "teleportCenter");
  ze(p, () => {
    u.value = JSON.parse(JSON.stringify({})), b();
  });
  const v = (T) => {
    if (o.teleport) {
      const L = T.getBoundingClientRect();
      return {
        left: L.left + window.scrollX,
        top: L.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, w = (T, L) => {
    u.value.left = `${T + L - i.value.width}px`;
  }, m = (T) => {
    u.value.left = `${T}px`;
  }, S = (T, L) => {
    o.position === Xr.left && m(T), o.position === Xr.right && w(T, L), o.position === Xr.center && (u.value.left = `${T + L / 2 - i.value.width / 2}px`);
  }, R = (T) => {
    const { width: L, height: y } = T.getBoundingClientRect(), { top: X, left: ie } = o.altPosition ? o.altPosition(T) : v(T);
    return { top: +X, left: +ie, width: L, height: y };
  }, k = () => {
    u.value.left = "50%", u.value.top = "50%", u.value.transform = "translate(-50%, -50%)", u.value.position = "fixed", delete u.value.opacity;
  }, h = () => {
    const T = gt(n), { top: L, left: y, transform: X } = o.altPosition(T);
    u.value = { top: `${L}px`, left: `${y}px`, transform: X ?? "" };
  }, b = (T = !0) => {
    var L;
    if (!a.value.enabled) {
      if (p.value) return k();
      if (o.altPosition !== null) return h();
      if (T) {
        const y = o.teleport ? (L = t.value) == null ? void 0 : L.$el : e.value;
        y && (i.value = y.getBoundingClientRect()), s("recalculate-position");
      }
      return H();
    }
  }, q = ({ inputEl: T, left: L, width: y }) => {
    window.screen.width > 768 && !c.value && S(L, y), _(T);
  }, Y = (T) => {
    const { top: L, left: y, height: X, width: ie } = R(T);
    u.value.top = `${X + L + +o.offset}px`, d.value = !1, c.value || (u.value.left = `${y + ie / 2 - i.value.width / 2}px`), q({ inputEl: T, left: y, width: ie });
  }, E = (T) => {
    const { top: L, left: y, width: X } = R(T);
    u.value.top = `${L - +o.offset - i.value.height}px`, d.value = !0, q({ inputEl: T, left: y, width: X });
  }, _ = (T) => {
    if (o.autoPosition) {
      const { left: L, width: y } = R(T), { left: X, right: ie } = i.value;
      if (!c.value) {
        if (Math.abs(X) !== Math.abs(ie)) {
          if (X <= 0)
            return c.value = !0, m(L);
          if (ie >= document.documentElement.clientWidth)
            return c.value = !0, w(L, y);
        }
        return S(L, y);
      }
    }
  }, M = () => {
    const T = gt(n);
    if (T) {
      const { height: L } = i.value, { top: y, height: X } = T.getBoundingClientRect(), ie = window.innerHeight - y - X, ve = y;
      return L <= ie ? _r.bottom : L > ie && L <= ve ? _r.top : ie >= ve ? _r.bottom : _r.top;
    }
    return _r.bottom;
  }, C = (T) => M() === _r.bottom ? Y(T) : E(T), H = () => {
    const T = gt(n);
    if (T)
      return o.autoPosition ? C(T) : Y(T);
  }, F = function(T) {
    if (T) {
      const L = T.scrollHeight > T.clientHeight, y = window.getComputedStyle(T).overflowY.indexOf("hidden") !== -1;
      return L && !y;
    }
    return !0;
  }, Z = function(T) {
    return !T || T === document.body || T.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : F(T) ? T : Z(T.assignedSlot ? T.assignedSlot.parentNode : T.parentNode);
  }, j = (T) => {
    if (T)
      switch (o.position) {
        case Xr.left:
          return { left: 0, transform: "translateX(0)" };
        case Xr.right:
          return { left: `${T.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${T.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: d,
    menuStyle: u,
    xCorrect: c,
    setMenuPosition: b,
    getScrollableParent: Z,
    shadowRender: (T, L) => {
      var y, X, ie;
      const ve = document.createElement("div"), _e = (y = gt(n)) == null ? void 0 : y.getBoundingClientRect();
      ve.setAttribute("id", "dp--temp-container");
      const V = (X = r.value) != null && X.clientWidth ? r.value : document.body;
      V.append(ve);
      const te = j(_e), x = Qd(
        T,
        {
          ...L,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...te }
        },
        Object.fromEntries(
          Object.keys(l).filter((G) => ["right-sidebar", "left-sidebar", "top-extra", "action-extra"].includes(G)).map((G) => [G, l[G]])
        )
      );
      Mu(x, ve), i.value = (ie = x.el) == null ? void 0 : ie.getBoundingClientRect(), Mu(null, ve), V.removeChild(ve);
    }
  };
}, Xn = [
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
  { name: "hours-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-header", use: ["calendar", "time", "shared"] },
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
  { name: "quarter", use: ["shared"] },
  { name: "top-extra", use: ["shared", "month-year"] },
  { name: "tp-inline-arrow-up", use: ["shared", "time"] },
  { name: "tp-inline-arrow-down", use: ["shared", "time"] }
], uT = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], cT = {
  all: () => Xn,
  monthYear: () => Xn.filter((e) => e.use.includes("month-year")),
  input: () => uT,
  timePicker: () => Xn.filter((e) => e.use.includes("time")),
  action: () => Xn.filter((e) => e.use.includes("action")),
  calendar: () => Xn.filter((e) => e.use.includes("calendar")),
  menu: () => Xn.filter((e) => e.use.includes("menu")),
  shared: () => Xn.filter((e) => e.use.includes("shared")),
  yearMode: () => Xn.filter((e) => e.use.includes("year-mode"))
}, Qt = (e, t, n) => {
  const r = [];
  return cT[t]().forEach((a) => {
    e[a.name] && r.push(a.name);
  }), n != null && n.length && n.forEach((a) => {
    a.slot && r.push(a.slot);
  }), r;
}, ps = (e) => {
  const t = oe(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), n = oe(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: n };
}, ms = (e, t, n) => {
  const { defaultedRange: r, defaultedTz: a } = lt(e), s = le(Jt(le(), a.value.timezone)), o = /* @__PURE__ */ se([{ month: $e(s), year: Me(s) }]), l = (p) => {
    const v = {
      hours: Un(s),
      minutes: dr(s),
      seconds: 0
    };
    return r.value.enabled ? [v[p], v[p]] : v[p];
  }, i = /* @__PURE__ */ qn({
    hours: l("hours"),
    minutes: l("minutes"),
    seconds: l("seconds")
  });
  ze(
    r,
    (p, v) => {
      p.enabled !== v.enabled && (i.hours = l("hours"), i.minutes = l("minutes"), i.seconds = l("seconds"));
    },
    { deep: !0 }
  );
  const c = oe({
    get: () => e.internalModelValue,
    set: (p) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", p);
    }
  }), u = oe(
    () => (p) => o.value[p] ? o.value[p].month : 0
  ), d = oe(
    () => (p) => o.value[p] ? o.value[p].year : 0
  );
  return ze(
    c,
    (p, v) => {
      n && JSON.stringify(p ?? {}) !== JSON.stringify(v ?? {}) && n();
    },
    { deep: !0 }
  ), {
    calendars: o,
    time: i,
    modelValue: c,
    month: u,
    year: d,
    today: s
  };
}, dT = (e, t) => {
  const {
    defaultedMultiCalendars: n,
    defaultedMultiDates: r,
    defaultedUI: a,
    defaultedHighlight: s,
    defaultedTz: o,
    propDates: l,
    defaultedRange: i
  } = lt(t), { isDisabled: c } = pr(t), u = /* @__PURE__ */ se(null), d = /* @__PURE__ */ se(Jt(/* @__PURE__ */ new Date(), o.value.timezone)), p = (x) => {
    !x.current && t.hideOffsetDates || (u.value = x.value);
  }, v = () => {
    u.value = null;
  }, w = (x) => Array.isArray(e.value) && i.value.enabled && e.value[0] && u.value ? x ? pt(u.value, e.value[0]) : ut(u.value, e.value[0]) : !0, m = (x, G) => {
    const fe = () => e.value ? G ? e.value[0] || null : e.value[1] : null, I = e.value && Array.isArray(e.value) ? fe() : null;
    return Ie(le(x.value), I);
  }, S = (x) => {
    const G = Array.isArray(e.value) ? e.value[0] : null;
    return x ? !ut(u.value ?? null, G) : !0;
  }, R = (x, G = !0) => (i.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !x.current ? !1 : Ie(le(x.value), e.value[G ? 0 : 1]) : i.value.enabled ? m(x, G) && S(G) || Ie(x.value, Array.isArray(e.value) ? e.value[0] : null) && w(G) : !1, k = (x, G) => {
    if (Array.isArray(e.value) && e.value[0] && e.value.length === 1) {
      const fe = Ie(x.value, u.value);
      return G ? pt(e.value[0], x.value) && fe : ut(e.value[0], x.value) && fe;
    }
    return !1;
  }, h = (x) => !e.value || t.hideOffsetDates && !x.current ? !1 : i.value.enabled ? t.modelAuto && Array.isArray(e.value) ? Ie(x.value, e.value[0] ? e.value[0] : d.value) : !1 : r.value.enabled && Array.isArray(e.value) ? e.value.some((G) => Ie(G, x.value)) : Ie(x.value, e.value ? e.value : d.value), b = (x) => {
    if (i.value.autoRange || t.weekPicker) {
      if (u.value) {
        if (t.hideOffsetDates && !x.current) return !1;
        const G = dn(u.value, +i.value.autoRange), fe = $n(le(u.value), t.weekStart);
        return t.weekPicker ? Ie(fe[1], le(x.value)) : Ie(G, le(x.value));
      }
      return !1;
    }
    return !1;
  }, q = (x) => {
    if (i.value.autoRange || t.weekPicker) {
      if (u.value) {
        const G = dn(u.value, +i.value.autoRange);
        if (t.hideOffsetDates && !x.current) return !1;
        const fe = $n(le(u.value), t.weekStart);
        return t.weekPicker ? pt(x.value, fe[0]) && ut(x.value, fe[1]) : pt(x.value, u.value) && ut(x.value, G);
      }
      return !1;
    }
    return !1;
  }, Y = (x) => {
    if (i.value.autoRange || t.weekPicker) {
      if (u.value) {
        if (t.hideOffsetDates && !x.current) return !1;
        const G = $n(le(u.value), t.weekStart);
        return t.weekPicker ? Ie(G[0], x.value) : Ie(u.value, x.value);
      }
      return !1;
    }
    return !1;
  }, E = (x) => Eo(e.value, u.value, x.value), _ = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, M = () => t.modelAuto ? Ap(t.internalModelValue) : !0, C = (x) => {
    if (t.weekPicker) return !1;
    const G = i.value.enabled ? !R(x) && !R(x, !1) : !0;
    return !c(x.value) && !h(x) && !(!x.current && t.hideOffsetDates) && G;
  }, H = (x) => i.value.enabled ? t.modelAuto ? _() && h(x) : !1 : h(x), F = (x) => s.value ? A1(x.value, l.value.highlight) : !1, Z = (x) => {
    const G = c(x.value);
    return G && (typeof s.value == "function" ? !s.value(x.value, G) : !s.value.options.highlightDisabled);
  }, j = (x) => {
    var G;
    return typeof s.value == "function" ? s.value(x.value) : (G = s.value.weekdays) == null ? void 0 : G.includes(x.value.getDay());
  }, T = (x) => (i.value.enabled || t.weekPicker) && (!(n.value.count > 0) || x.current) && M() && !(!x.current && t.hideOffsetDates) && !h(x) ? E(x) : !1, L = (x) => {
    const { isRangeStart: G, isRangeEnd: fe } = ve(x), I = i.value.enabled ? G || fe : !1;
    return {
      dp__cell_offset: !x.current,
      dp__pointer: !t.disabled && !(!x.current && t.hideOffsetDates) && !c(x.value),
      dp__cell_disabled: c(x.value),
      dp__cell_highlight: !Z(x) && (F(x) || j(x)) && !H(x) && !I && !Y(x) && !(T(x) && t.weekPicker) && !fe,
      dp__cell_highlight_active: !Z(x) && (F(x) || j(x)) && H(x),
      dp__today: !t.noToday && Ie(x.value, d.value) && x.current,
      "dp--past": ut(x.value, d.value),
      "dp--future": pt(x.value, d.value)
    };
  }, y = (x) => ({
    dp__active_date: H(x),
    dp__date_hover: C(x)
  }), X = (x) => {
    if (e.value && !Array.isArray(e.value)) {
      const G = $n(e.value, t.weekStart);
      return {
        ...V(x),
        dp__range_start: Ie(G[0], x.value),
        dp__range_end: Ie(G[1], x.value),
        dp__range_between_week: pt(x.value, G[0]) && ut(x.value, G[1])
      };
    }
    return {
      ...V(x)
    };
  }, ie = (x) => {
    if (e.value && Array.isArray(e.value)) {
      const G = $n(e.value[0], t.weekStart), fe = e.value[1] ? $n(e.value[1], t.weekStart) : [];
      return {
        ...V(x),
        dp__range_start: Ie(G[0], x.value) || Ie(fe[0], x.value),
        dp__range_end: Ie(G[1], x.value) || Ie(fe[1], x.value),
        dp__range_between_week: pt(x.value, G[0]) && ut(x.value, G[1]) || pt(x.value, fe[0]) && ut(x.value, fe[1]),
        dp__range_between: pt(x.value, G[1]) && ut(x.value, fe[0])
      };
    }
    return {
      ...V(x)
    };
  }, ve = (x) => {
    const G = n.value.count > 0 ? x.current && R(x) && M() : R(x) && M(), fe = n.value.count > 0 ? x.current && R(x, !1) && M() : R(x, !1) && M();
    return { isRangeStart: G, isRangeEnd: fe };
  }, _e = (x) => {
    const { isRangeStart: G, isRangeEnd: fe } = ve(x);
    return {
      dp__range_start: G,
      dp__range_end: fe,
      dp__range_between: T(x),
      dp__date_hover: Ie(x.value, u.value) && !G && !fe && !t.weekPicker,
      dp__date_hover_start: k(x, !0),
      dp__date_hover_end: k(x, !1)
    };
  }, V = (x) => ({
    ..._e(x),
    dp__cell_auto_range: q(x),
    dp__cell_auto_range_start: Y(x),
    dp__cell_auto_range_end: b(x)
  }), te = (x) => i.value.enabled ? i.value.autoRange ? V(x) : t.modelAuto ? { ...y(x), ..._e(x) } : t.weekPicker ? ie(x) : _e(x) : t.weekPicker ? X(x) : y(x);
  return {
    setHoverDate: p,
    clearHoverDate: v,
    getDayClassData: (x) => t.hideOffsetDates && !x.current ? {} : {
      ...L(x),
      ...te(x),
      [t.dayClass ? t.dayClass(x.value, t.internalModelValue) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName,
      ...a.value.calendarCell ?? {}
    }
  };
}, pr = (e) => {
  const { defaultedFilters: t, defaultedRange: n, propDates: r, defaultedMultiDates: a } = lt(e), s = (j) => r.value.disabledDates ? typeof r.value.disabledDates == "function" ? r.value.disabledDates(le(j)) : !!ao(j, r.value.disabledDates) : !1, o = (j) => r.value.maxDate ? e.yearPicker ? Me(j) > Me(r.value.maxDate) : pt(j, r.value.maxDate) : !1, l = (j) => r.value.minDate ? e.yearPicker ? Me(j) < Me(r.value.minDate) : ut(j, r.value.minDate) : !1, i = (j) => {
    const T = o(j), L = l(j), y = s(j), X = t.value.months.map((te) => +te).includes($e(j)), ie = e.disabledWeekDays.length ? e.disabledWeekDays.some((te) => +te === h_(j)) : !1, ve = v(j), _e = Me(j), V = _e < +e.yearRange[0] || _e > +e.yearRange[1];
    return !(T || L || y || X || V || ie || ve);
  }, c = (j, T) => ut(...tr(r.value.minDate, j, T)) || Ie(...tr(r.value.minDate, j, T)), u = (j, T) => pt(...tr(r.value.maxDate, j, T)) || Ie(...tr(r.value.maxDate, j, T)), d = (j, T, L) => {
    let y = !1;
    return r.value.maxDate && L && u(j, T) && (y = !0), r.value.minDate && !L && c(j, T) && (y = !0), y;
  }, p = (j, T, L, y) => {
    let X = !1;
    return y ? r.value.minDate && r.value.maxDate ? X = d(j, T, L) : (r.value.minDate && c(j, T) || r.value.maxDate && u(j, T)) && (X = !0) : X = !0, X;
  }, v = (j) => Array.isArray(r.value.allowedDates) && !r.value.allowedDates.length ? !0 : r.value.allowedDates ? !ao(j, r.value.allowedDates) : !1, w = (j) => !i(j), m = (j) => n.value.noDisabledRange ? !dp({ start: j[0], end: j[1] }).some((T) => w(T)) : !0, S = (j) => {
    if (j) {
      const T = Me(j);
      return T >= +e.yearRange[0] && T <= e.yearRange[1];
    }
    return !0;
  }, R = (j, T) => !!(Array.isArray(j) && j[T] && (n.value.maxRange || n.value.minRange) && S(j[T])), k = (j, T, L = 0) => {
    if (R(T, L) && S(j)) {
      const y = up(j, T[L]), X = Cp(T[L], j), ie = X.length === 1 ? 0 : X.filter((_e) => w(_e)).length, ve = Math.abs(y) - (n.value.minMaxRawRange ? 0 : ie);
      if (n.value.minRange && n.value.maxRange)
        return ve >= +n.value.minRange && ve <= +n.value.maxRange;
      if (n.value.minRange) return ve >= +n.value.minRange;
      if (n.value.maxRange) return ve <= +n.value.maxRange;
    }
    return !0;
  }, h = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, b = (j) => Array.isArray(j) ? [j[0] ? vl(j[0]) : null, j[1] ? vl(j[1]) : null] : vl(j), q = (j, T, L) => j.find(
    (y) => +y.hours === Un(T) && y.minutes === "*" ? !0 : +y.minutes === dr(T) && +y.hours === Un(T)
  ) && L, Y = (j, T, L) => {
    const [y, X] = j, [ie, ve] = T;
    return !q(y, ie, L) && !q(X, ve, L) && L;
  }, E = (j, T) => {
    const L = Array.isArray(T) ? T : [T];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? Y(e.disabledTimes, L, j) : !L.some((y) => q(e.disabledTimes, y, j)) : j;
  }, _ = (j, T) => {
    const L = Array.isArray(T) ? [$r(T[0]), T[1] ? $r(T[1]) : void 0] : $r(T), y = !e.disabledTimes(L);
    return j && y;
  }, M = (j, T) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? E(T, j) : _(T, j) : T, C = (j) => {
    let T = !0;
    if (!j || h()) return !0;
    const L = !r.value.minDate && !r.value.maxDate ? b(j) : j;
    return (e.maxTime || r.value.maxDate) && (T = Ac(
      e.maxTime,
      r.value.maxDate,
      "max",
      Tt(L),
      T
    )), (e.minTime || r.value.minDate) && (T = Ac(
      e.minTime,
      r.value.minDate,
      "min",
      Tt(L),
      T
    )), M(j, T);
  }, H = (j) => {
    if (!e.monthPicker) return !0;
    let T = !0;
    const L = le(fn(j));
    if (r.value.minDate && r.value.maxDate) {
      const y = le(fn(r.value.minDate)), X = le(fn(r.value.maxDate));
      return pt(L, y) && ut(L, X) || Ie(L, y) || Ie(L, X);
    }
    if (r.value.minDate) {
      const y = le(fn(r.value.minDate));
      T = pt(L, y) || Ie(L, y);
    }
    if (r.value.maxDate) {
      const y = le(fn(r.value.maxDate));
      T = ut(L, y) || Ie(L, y);
    }
    return T;
  }, F = oe(() => (j) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : C(j)), Z = oe(() => (j) => e.monthPicker ? Array.isArray(j) && (n.value.enabled || a.value.enabled) ? !j.filter((T) => !H(T)).length : H(j) : !0);
  return {
    isDisabled: w,
    validateDate: i,
    validateMonthYearInRange: p,
    isDateRangeAllowed: m,
    checkMinMaxRange: k,
    isValidTime: C,
    isTimeValid: F,
    isMonthValid: Z
  };
}, No = () => {
  const e = oe(() => (r, a) => r == null ? void 0 : r.includes(a)), t = oe(() => (r, a) => r.count ? r.solo ? !0 : a === 0 : !0), n = oe(() => (r, a) => r.count ? r.solo ? !0 : a === r.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: n };
}, fT = (e, t, n) => {
  const r = /* @__PURE__ */ se(0), a = /* @__PURE__ */ qn({
    [Nr.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [Nr.calendar]: !1,
    [Nr.header]: !1
  }), s = oe(() => e.monthPicker || e.timePicker), o = (d) => {
    var p;
    if ((p = e.flow) != null && p.length) {
      if (!d && s.value) return u();
      a[d] = !0, Object.keys(a).filter((v) => !a[v]).length || u();
    }
  }, l = () => {
    var d, p;
    (d = e.flow) != null && d.length && r.value !== -1 && (r.value += 1, t("flow-step", r.value), u()), ((p = e.flow) == null ? void 0 : p.length) === r.value && Et().then(() => i());
  }, i = () => {
    r.value = -1;
  }, c = (d, p, ...v) => {
    var w, m;
    e.flow[r.value] === d && n.value && ((m = (w = n.value)[p]) == null || m.call(w, ...v));
  }, u = (d = 0) => {
    d && (r.value += d), c(Nt.month, "toggleMonthPicker", !0), c(Nt.year, "toggleYearPicker", !0), c(Nt.calendar, "toggleTimePicker", !1, !0), c(Nt.time, "toggleTimePicker", !0, !0);
    const p = e.flow[r.value];
    (p === Nt.hours || p === Nt.minutes || p === Nt.seconds) && c(p, "toggleTimePicker", !0, !0, p);
  };
  return { childMount: o, updateFlowStep: l, resetFlow: i, handleFlow: u, flowStep: r };
}, pT = {
  key: 1,
  class: "dp__input_wrap"
}, mT = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], hT = {
  key: 2,
  class: "dp__clear_icon"
}, vT = /* @__PURE__ */ Dt({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Do
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
      defaultedTextInput: s,
      defaultedAriaLabels: o,
      defaultedInline: l,
      defaultedConfig: i,
      defaultedRange: c,
      defaultedMultiDates: u,
      defaultedUI: d,
      getDefaultPattern: p,
      getDefaultStartTime: v
    } = lt(a), { checkMinMaxRange: w } = pr(a), m = /* @__PURE__ */ se(), S = /* @__PURE__ */ se(null), R = /* @__PURE__ */ se(!1), k = /* @__PURE__ */ se(!1), h = oe(
      () => ({
        dp__pointer: !a.disabled && !a.readonly && !s.value.enabled,
        dp__disabled: a.disabled,
        dp__input_readonly: !s.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !a.hideInputIcon,
        dp__input_valid: !!a.state,
        dp__input_invalid: a.state === !1,
        dp__input_focus: R.value || a.isMenuOpen,
        dp__input_reg: !s.value.enabled,
        [a.inputClassName]: !!a.inputClassName,
        ...d.value.input ?? {}
      })
    ), b = () => {
      r("set-input-date", null), a.clearable && a.autoApply && (r("set-empty-date"), m.value = null);
    }, q = (y) => {
      const X = v();
      return M1(
        y,
        s.value.format ?? p(),
        X ?? Np({}, a.enableSeconds),
        a.inputValue,
        k.value,
        a.formatLocale
      );
    }, Y = (y) => {
      const { rangeSeparator: X } = s.value, [ie, ve] = y.split(`${X}`);
      if (ie) {
        const _e = q(ie.trim()), V = ve ? q(ve.trim()) : null;
        if (oa(_e, V)) return;
        const te = _e && V ? [_e, V] : [_e];
        w(V, te, 0) && (m.value = _e ? te : null);
      }
    }, E = () => {
      k.value = !0;
    }, _ = (y) => {
      if (c.value.enabled)
        Y(y);
      else if (u.value.enabled) {
        const X = y.split(";");
        m.value = X.map((ie) => q(ie.trim())).filter((ie) => ie);
      } else
        m.value = q(y);
    }, M = (y) => {
      var X;
      const ie = typeof y == "string" ? y : (X = y.target) == null ? void 0 : X.value;
      ie !== "" ? (s.value.openMenu && !a.isMenuOpen && r("open"), _(ie), r("set-input-date", m.value)) : b(), k.value = !1, r("update:input-value", ie);
    }, C = (y) => {
      s.value.enabled ? (_(y.target.value), s.value.enterSubmit && Jl(m.value) && a.inputValue !== "" ? (r("set-input-date", m.value, !0), m.value = null) : s.value.enterSubmit && a.inputValue === "" && (m.value = null, r("clear"))) : Z(y);
    }, H = (y) => {
      s.value.enabled && s.value.tabSubmit && _(y.target.value), s.value.tabSubmit && Jl(m.value) && a.inputValue !== "" ? (r("set-input-date", m.value, !0, !0), m.value = null) : s.value.tabSubmit && a.inputValue === "" && (m.value = null, r("clear", !0));
    }, F = () => {
      R.value = !0, r("focus"), Et().then(() => {
        var y;
        s.value.enabled && s.value.selectOnFocus && ((y = S.value) == null || y.select());
      });
    }, Z = (y) => {
      y.preventDefault(), rr(y, i.value, !0), s.value.enabled && s.value.openMenu && !l.value.input && !a.isMenuOpen ? r("open") : s.value.enabled || r("toggle");
    }, j = () => {
      r("real-blur"), R.value = !1, (!a.isMenuOpen || l.value.enabled && l.value.input) && r("blur"), a.autoApply && s.value.enabled && m.value && !a.isMenuOpen && (r("set-input-date", m.value), r("select-date"), m.value = null);
    }, T = (y) => {
      rr(y, i.value, !0), r("clear");
    }, L = (y) => {
      if (y.key === "Tab" && H(y), y.key === "Enter" && C(y), !s.value.enabled) {
        if (y.code === "Tab") return;
        y.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        var y;
        (y = S.value) == null || y.focus({ preventScroll: !0 });
      },
      setParsedDate: (y) => {
        m.value = y;
      }
    }), (y, X) => {
      var ie;
      return U(), Q("div", { onClick: Z }, [
        y.$slots.trigger && !y.$slots["dp-input"] && !D(l).enabled ? we(y.$slots, "trigger", { key: 0 }) : ae("", !0),
        !y.$slots.trigger && (!D(l).enabled || D(l).input) ? (U(), Q("div", pT, [
          y.$slots["dp-input"] && !y.$slots.trigger && (!D(l).enabled || D(l).enabled && D(l).input) ? we(y.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: M,
            onEnter: C,
            onTab: H,
            onClear: T,
            onBlur: j,
            onKeypress: L,
            onPaste: E,
            onFocus: F,
            openMenu: () => y.$emit("open"),
            closeMenu: () => y.$emit("close"),
            toggleMenu: () => y.$emit("toggle")
          }) : ae("", !0),
          y.$slots["dp-input"] ? ae("", !0) : (U(), Q("input", {
            key: 1,
            id: y.uid ? `dp-input-${y.uid}` : void 0,
            ref_key: "inputRef",
            ref: S,
            "data-test": "dp-input",
            name: y.name,
            class: Re(h.value),
            inputmode: D(s).enabled ? "text" : "none",
            placeholder: y.placeholder,
            disabled: y.disabled,
            readonly: y.readonly,
            required: y.required,
            value: e.inputValue,
            autocomplete: y.autocomplete,
            "aria-label": (ie = D(o)) == null ? void 0 : ie.input,
            "aria-disabled": y.disabled || void 0,
            "aria-invalid": y.state === !1 ? !0 : void 0,
            onInput: M,
            onBlur: j,
            onFocus: F,
            onKeypress: L,
            onKeydown: L,
            onPaste: E
          }, null, 42, mT)),
          Se("div", {
            onClick: X[2] || (X[2] = (ve) => r("toggle"))
          }, [
            y.$slots["input-icon"] && !y.hideInputIcon ? (U(), Q("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: X[0] || (X[0] = (ve) => r("toggle"))
            }, [
              we(y.$slots, "input-icon")
            ])) : ae("", !0),
            !y.$slots["input-icon"] && !y.hideInputIcon && !y.$slots["dp-input"] ? (U(), Ee(D(pa), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: X[1] || (X[1] = (ve) => r("toggle"))
            })) : ae("", !0)
          ]),
          y.$slots["clear-icon"] && e.inputValue && y.clearable && !y.disabled && !y.readonly ? (U(), Q("span", hT, [
            we(y.$slots, "clear-icon", { clear: T })
          ])) : ae("", !0),
          y.clearable && !y.$slots["clear-icon"] && e.inputValue && !y.disabled && !y.readonly ? (U(), Ee(D(Op), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: X[3] || (X[3] = ea((ve) => T(ve), ["prevent"]))
          })) : ae("", !0)
        ])) : ae("", !0)
      ]);
    };
  }
}), yT = typeof window < "u" ? window : void 0, xl = () => {
}, gT = (e) => Ql() ? (qc(e), !0) : !1, bT = (e, t, n, r) => {
  if (!e) return xl;
  let a = xl;
  const s = ze(
    () => D(e),
    (l) => {
      a(), l && (l.addEventListener(t, n, r), a = () => {
        l.removeEventListener(t, n, r), a = xl;
      });
    },
    { immediate: !0, flush: "post" }
  ), o = () => {
    s(), a();
  };
  return gT(o), o;
}, wT = (e, t, n, r = {}) => {
  const { window: a = yT, event: s = "pointerdown" } = r;
  return a ? bT(a, s, (o) => {
    const l = gt(e), i = gt(t);
    !l || !i || l === o.target || o.composedPath().includes(l) || o.composedPath().includes(i) || n(o);
  }, { passive: !0 }) : void 0;
}, _T = /* @__PURE__ */ Dt({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...Do
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
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = n, a = e, s = Br(), o = /* @__PURE__ */ se(!1), l = /* @__PURE__ */ Ya(a, "modelValue"), i = /* @__PURE__ */ Ya(a, "timezone"), c = /* @__PURE__ */ se(null), u = /* @__PURE__ */ se(null), d = /* @__PURE__ */ se(null), p = /* @__PURE__ */ se(!1), v = /* @__PURE__ */ se(null), w = /* @__PURE__ */ se(!1), m = /* @__PURE__ */ se(!1), S = /* @__PURE__ */ se(!1), R = /* @__PURE__ */ se(!1), { setMenuFocused: k, setShiftKey: h } = Vp(), { clearArrowNav: b } = fr(), { validateDate: q, isValidTime: Y } = pr(a), {
      defaultedTransitions: E,
      defaultedTextInput: _,
      defaultedInline: M,
      defaultedConfig: C,
      defaultedRange: H,
      defaultedMultiDates: F
    } = lt(a), { menuTransition: Z, showTransition: j } = ps(E);
    _t(() => {
      G(a.modelValue), Et().then(() => {
        if (!M.value.enabled) {
          const ee = _e(v.value);
          ee == null || ee.addEventListener("scroll", $), window == null || window.addEventListener("resize", N);
        }
      }), M.value.enabled && (o.value = !0), window == null || window.addEventListener("keyup", re), window == null || window.addEventListener("keydown", A);
    }), ss(() => {
      if (!M.value.enabled) {
        const ee = _e(v.value);
        ee == null || ee.removeEventListener("scroll", $), window == null || window.removeEventListener("resize", N);
      }
      window == null || window.removeEventListener("keyup", re), window == null || window.removeEventListener("keydown", A);
    });
    const T = Qt(s, "all", a.presetDates), L = Qt(s, "input");
    ze(
      [l, i],
      () => {
        G(l.value);
      },
      { deep: !0 }
    );
    const { openOnTop: y, menuStyle: X, xCorrect: ie, setMenuPosition: ve, getScrollableParent: _e, shadowRender: V } = iT({
      menuRef: c,
      menuRefInner: u,
      inputRef: d,
      pickerWrapperRef: v,
      inline: M,
      emit: r,
      props: a,
      slots: s
    }), {
      inputValue: te,
      internalModelValue: x,
      parseExternalModelValue: G,
      emitModelValue: fe,
      formatInputValue: I,
      checkBeforeEmit: ye
    } = Z1(r, a, p), Pe = oe(
      () => ({
        dp__main: !0,
        dp__theme_dark: a.dark,
        dp__theme_light: !a.dark,
        dp__flex_display: M.value.enabled,
        "dp--flex-display-collapsed": S.value,
        dp__flex_display_with_input: M.value.input
      })
    ), J = oe(() => a.dark ? "dp__theme_dark" : "dp__theme_light"), g = oe(() => a.teleport ? {
      to: typeof a.teleport == "boolean" ? "body" : a.teleport,
      disabled: !a.teleport || M.value.enabled
    } : {}), f = oe(() => ({ class: "dp__outer_menu_wrap" })), O = oe(() => M.value.enabled && (a.timePicker || a.monthPicker || a.yearPicker || a.quarterPicker)), B = () => {
      var ee, he;
      return (he = (ee = d.value) == null ? void 0 : ee.$el) == null ? void 0 : he.getBoundingClientRect();
    }, $ = () => {
      o.value && (C.value.closeOnScroll ? Ae() : ve());
    }, N = () => {
      var ee;
      o.value && ve();
      const he = (ee = u.value) == null ? void 0 : ee.$el.getBoundingClientRect().width;
      S.value = document.body.offsetWidth <= he;
    }, re = (ee) => {
      ee.key === "Tab" && !M.value.enabled && !a.teleport && C.value.tabOutClosesMenu && (v.value.contains(document.activeElement) || Ae()), m.value = ee.shiftKey;
    }, A = (ee) => {
      m.value = ee.shiftKey;
    }, W = () => {
      !a.disabled && !a.readonly && (V(Rc, a), ve(!1), o.value = !0, o.value && r("open"), o.value || Ce(), G(a.modelValue));
    }, z = () => {
      var ee;
      te.value = "", Ce(), (ee = d.value) == null || ee.setParsedDate(null), r("update:model-value", null), r("update:model-timezone-value", null), r("cleared"), C.value.closeOnClearValue && Ae();
    }, ue = () => {
      const ee = x.value;
      return !ee || !Array.isArray(ee) && q(ee) ? !0 : Array.isArray(ee) ? F.value.enabled || ee.length === 2 && q(ee[0]) && q(ee[1]) ? !0 : H.value.partialRange && !a.timePicker ? q(ee[0]) : !1 : !1;
    }, de = () => {
      ye() && ue() ? (fe(), Ae()) : r("invalid-select", x.value);
    }, ne = (ee) => {
      ce(), fe(), C.value.closeOnAutoApply && !ee && Ae();
    }, ce = () => {
      d.value && _.value.enabled && d.value.setParsedDate(x.value);
    }, xe = (ee = !1) => {
      a.autoApply && Y(x.value) && ue() && (H.value.enabled && Array.isArray(x.value) ? (H.value.partialRange || x.value.length === 2) && ne(ee) : ne(ee));
    }, Ce = () => {
      _.value.enabled || (x.value = null);
    }, Ae = () => {
      M.value.enabled || (o.value && (o.value = !1, ie.value = !1, k(!1), h(!1), b(), r("closed"), te.value && G(l.value)), Ce(), r("blur"));
    }, qe = (ee, he, ge = !1) => {
      if (!ee) {
        x.value = null;
        return;
      }
      const Vt = Array.isArray(ee) ? !ee.some((mr) => !q(mr)) : q(ee), nn = Y(ee);
      Vt && nn && (R.value = !0, x.value = ee, he && (w.value = ge, de(), r("text-submit")), Et().then(() => {
        R.value = !1;
      }));
    }, at = () => {
      a.autoApply && Y(x.value) && fe(), ce();
    }, it = () => o.value ? Ae() : W(), qt = (ee) => {
      x.value = ee;
    }, Xt = () => {
      _.value.enabled && (p.value = !0, I()), r("focus");
    }, Hr = () => {
      if (_.value.enabled && (p.value = !1, G(a.modelValue), w.value)) {
        const ee = O1(v.value, m.value);
        ee == null || ee.focus();
      }
      r("blur");
    }, kt = (ee) => {
      u.value && u.value.updateMonthYear(0, {
        month: kc(ee.month),
        year: kc(ee.year)
      });
    }, Wt = (ee) => {
      G(ee ?? a.modelValue);
    }, Ur = (ee, he) => {
      var ge;
      (ge = u.value) == null || ge.switchView(ee, he);
    }, K = (ee) => C.value.onClickOutside ? C.value.onClickOutside(ee) : Ae(), me = (ee = 0) => {
      var he;
      (he = u.value) == null || he.handleFlow(ee);
    };
    return wT(c, d, () => K(ue)), t({
      closeMenu: Ae,
      selectDate: de,
      clearValue: z,
      openMenu: W,
      onScroll: $,
      formatInputValue: I,
      // exposed for testing purposes
      updateInternalModelValue: qt,
      // modify internal modelValue
      setMonthYear: kt,
      parseModel: Wt,
      switchView: Ur,
      toggleMenu: it,
      handleFlow: me
    }), (ee, he) => (U(), Q("div", {
      ref_key: "pickerWrapperRef",
      ref: v,
      class: Re(Pe.value),
      "data-datepicker-instance": ""
    }, [
      Ke(vT, bt({
        ref_key: "inputRef",
        ref: d,
        "input-value": D(te),
        "onUpdate:inputValue": he[0] || (he[0] = (ge) => /* @__PURE__ */ nt(te) ? te.value = ge : null),
        "is-menu-open": o.value
      }, ee.$props, {
        onClear: z,
        onOpen: W,
        onSetInputDate: qe,
        onSetEmptyDate: D(fe),
        onSelectDate: de,
        onToggle: it,
        onClose: Ae,
        onFocus: Xt,
        onBlur: Hr,
        onRealBlur: he[1] || (he[1] = (ge) => p.value = !1)
      }), Lt({ _: 2 }, [
        Ye(D(L), (ge, Vt) => ({
          name: ge,
          fn: Ne((nn) => [
            we(ee.$slots, ge, St(Ut(nn)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (U(), Ee(wo(ee.teleport ? vd : "div"), St(Ut(g.value)), {
        default: Ne(() => [
          Ke(ca, {
            name: D(Z)(D(y)),
            css: D(j) && !D(M).enabled
          }, {
            default: Ne(() => [
              o.value ? (U(), Q("div", bt({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: c
              }, f.value, {
                class: { "dp--menu-wrapper": !D(M).enabled },
                style: D(M).enabled ? void 0 : D(X)
              }), [
                Ke(Rc, bt({
                  ref_key: "dpMenuRef",
                  ref: u
                }, ee.$props, {
                  "internal-model-value": D(x),
                  "onUpdate:internalModelValue": he[2] || (he[2] = (ge) => /* @__PURE__ */ nt(x) ? x.value = ge : null),
                  class: { [J.value]: !0, "dp--menu-wrapper": ee.teleport },
                  "open-on-top": D(y),
                  "no-overlay-focus": O.value,
                  collapse: S.value,
                  "get-input-rect": B,
                  "is-text-input-date": R.value,
                  onClosePicker: Ae,
                  onSelectDate: de,
                  onAutoApply: xe,
                  onTimeUpdate: at,
                  onFlowStep: he[3] || (he[3] = (ge) => ee.$emit("flow-step", ge)),
                  onUpdateMonthYear: he[4] || (he[4] = (ge) => ee.$emit("update-month-year", ge)),
                  onInvalidSelect: he[5] || (he[5] = (ge) => ee.$emit("invalid-select", D(x))),
                  onAutoApplyInvalid: he[6] || (he[6] = (ge) => ee.$emit("invalid-select", ge)),
                  onInvalidFixedRange: he[7] || (he[7] = (ge) => ee.$emit("invalid-fixed-range", ge)),
                  onRecalculatePosition: D(ve),
                  onTooltipOpen: he[8] || (he[8] = (ge) => ee.$emit("tooltip-open", ge)),
                  onTooltipClose: he[9] || (he[9] = (ge) => ee.$emit("tooltip-close", ge)),
                  onTimePickerOpen: he[10] || (he[10] = (ge) => ee.$emit("time-picker-open", ge)),
                  onTimePickerClose: he[11] || (he[11] = (ge) => ee.$emit("time-picker-close", ge)),
                  onAmPmChange: he[12] || (he[12] = (ge) => ee.$emit("am-pm-change", ge)),
                  onRangeStart: he[13] || (he[13] = (ge) => ee.$emit("range-start", ge)),
                  onRangeEnd: he[14] || (he[14] = (ge) => ee.$emit("range-end", ge)),
                  onDateUpdate: he[15] || (he[15] = (ge) => ee.$emit("date-update", ge)),
                  onInvalidDate: he[16] || (he[16] = (ge) => ee.$emit("invalid-date", ge)),
                  onOverlayToggle: he[17] || (he[17] = (ge) => ee.$emit("overlay-toggle", ge))
                }), Lt({ _: 2 }, [
                  Ye(D(T), (ge, Vt) => ({
                    name: ge,
                    fn: Ne((nn) => [
                      we(ee.$slots, ge, St(Ut({ ...nn })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "is-text-input-date", "onRecalculatePosition"])
              ], 16)) : ae("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 2));
  }
}), Ui = /* @__PURE__ */ (() => {
  const e = _T;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), xT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ui
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(xT).forEach(([e, t]) => {
  e !== "default" && (Ui[e] = t);
});
const TT = { class: "input" }, ST = ["value"], kT = ["accept"], OT = { key: 5 }, PT = { key: 6 }, AT = {
  __name: "ValueSelector",
  props: /* @__PURE__ */ Hs({
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
    const t = e, n = Ys(e, "selectedValue"), r = Ys(e, "dataValue"), a = /* @__PURE__ */ se(null);
    function s(R, k = d.value) {
      if (R == null || R === "") return !1;
      const h = Number(R);
      return Number.isFinite(h) && h >= k.rangemin && h <= k.rangemax;
    }
    function o() {
      a.value = r.value;
    }
    function l(R) {
      if (R.key !== "ArrowUp" && R.key !== "ArrowDown") return;
      const k = Number(r.value);
      if (!Number.isFinite(k)) return;
      const h = d.value, b = Number(R.currentTarget.step) || 1, q = k + (R.key === "ArrowUp" ? b : -b);
      s(q, h) || R.preventDefault();
    }
    function i(R) {
      var Y, E;
      const k = d.value;
      if (s(r.value, k)) return;
      const h = a.value, b = s(h, k) ? h : Number(k.defaultFloat), q = (E = (Y = R.relatedTarget) == null ? void 0 : Y.closest) == null ? void 0 : E.call(Y, "[data-poris-command]");
      q ? window.confirm(
        "This value is outside the active range. Restore the previous value and continue with the command? Choose Cancel to cancel the command."
      ) || (q.dataset.porisCommandCancelled = "true") : window.alert("This value is outside the active range. The previous value will be restored."), r.value = b;
    }
    const c = /* @__PURE__ */ se(t.mode), u = oe(() => c.value.hasValues ? c.value.valuesNodes : []), d = oe(
      () => n.value || c.value.defaultValue || u.value[0]
    ), p = () => {
      var R;
      return ((R = d.value) == null ? void 0 : R.type) === ta;
    }, v = () => {
      var R;
      return ((R = d.value) == null ? void 0 : R.type) === Rr;
    }, w = () => {
      var R;
      return ((R = d.value) == null ? void 0 : R.type) === ra;
    }, m = () => {
      var R;
      return ((R = d.value) == null ? void 0 : R.type) === na;
    }, S = () => {
      var R;
      return ((R = d.value) == null ? void 0 : R.type) === Zs;
    };
    return ze(
      () => t.mode,
      (R) => {
        console.log("watch.mode", R), c.value = R;
      }
    ), ze(u, (R, k) => {
      console.log(`values mode: ${c.value.id}, changed/oldVal:`, R, k);
    }), (R, k) => (U(), Q("div", TT, [
      u.value.length > 1 ? Vn((U(), Q("select", {
        key: 0,
        "onUpdate:modelValue": k[0] || (k[0] = (h) => n.value = h),
        class: "active-value-selector"
      }, [
        (U(!0), Q(Te, null, Ye(u.value, (h) => (U(), Q("option", {
          key: h.id,
          value: h
        }, Fe(h.name), 9, ST))), 128))
      ], 512)), [
        [nf, n.value]
      ]) : ae("", !0),
      p() ? Vn((U(), Q("input", {
        key: 1,
        "onUpdate:modelValue": k[1] || (k[1] = (h) => r.value = h),
        type: "text"
      }, null, 512)), [
        [$l, r.value]
      ]) : v() ? (U(), Ee(dw, {
        modelValue: r.value,
        "onUpdate:modelValue": k[2] || (k[2] = (h) => r.value = h),
        step: ".01",
        min: d.value.rangemin,
        max: d.value.rangemax,
        label: d.value.name,
        key: d.value.id,
        onFocus: o,
        onKeydown: l,
        onBlur: i
      }, null, 8, ["modelValue", "min", "max", "label"])) : m() ? (U(), Ee(D(Ui), {
        key: 3,
        modelValue: r.value,
        "onUpdate:modelValue": k[3] || (k[3] = (h) => r.value = h),
        min: d.value.datemin,
        max: d.value.datemax,
        "enable-seconds": "",
        "is-24": ""
      }, null, 8, ["modelValue", "min", "max"])) : w() ? (U(), Q("input", {
        key: 4,
        type: "file",
        accept: d.value.fileExtension
      }, null, 8, kT)) : S() && u.value.length === 1 ? (U(), Q("span", OT, Fe(d.value.name), 1)) : d.value ? ae("", !0) : (U(), Q("span", PT, "No values!")),
      k[4] || (k[4] = hn(" " + Fe(" "), -1))
    ]));
  }
}, MT = /* @__PURE__ */ Mo(AT, [["__scopeId", "data-v-a363cf88"]]), ET = { class: "input-mode-panel" }, DT = { class: "title" }, RT = {
  key: 0,
  class: "command-buttons"
}, CT = ["onClick"], NT = { class: "value-selector" }, $T = {
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
    function n(w) {
      return !w.hasSubsystems && !w.hasRealValues && w.hasValues && w.currentMode.hasValues;
    }
    function r(w) {
      return !w.hasRealValues && !w.currentMode.hasValues && !w.currentMode.hasModes;
    }
    function a(w) {
      return !n(w) && !r(w);
    }
    function s(w, m) {
      return m.length > 1 || n(w) || r(w);
    }
    const o = Si(), l = e, i = t;
    function c(w, m) {
      if (m.currentTarget.dataset.porisCommandCancelled === "true") {
        delete m.currentTarget.dataset.porisCommandCancelled;
        return;
      }
      i("command-launched", {
        systemId: l.subsystem.id,
        systemName: l.subsystem.name,
        commandId: w.id,
        commandName: w.name
      });
    }
    const u = /* @__PURE__ */ se(l.mode), d = /* @__PURE__ */ se(null), p = /* @__PURE__ */ se(null);
    function v(w = null) {
      const m = o.getSystemValue(l.subsystem, u.value, w);
      d.value = m.value, p.value = m.data;
    }
    return v(), ze(
      d,
      (w) => {
        if (w) {
          const m = o.getSystemValue(l.subsystem, u.value, w);
          p.value !== m.data && (p.value = m.data);
        }
      },
      { flush: "sync" }
    ), ze(
      p,
      (w) => {
        d.value && o.setSystemValue(l.subsystem, d.value, w);
      },
      { flush: "sync" }
    ), ze(
      () => o.systemValues[`${l.subsystem.id}`],
      (w) => {
        var m, S;
        w && (((m = d.value) == null ? void 0 : m.id) !== ((S = w.value) == null ? void 0 : S.id) && (d.value = w.value), p.value !== w.data && (p.value = w.data));
      },
      { flush: "sync" }
    ), ze(u, (w) => {
      console.log("watch_input: currentMode.set() mode:", w), v();
    }), ze(
      () => l.mode,
      (w) => {
        console.log("new props.mode:", w), u.value = w;
      }
    ), (w, m) => {
      var S, R;
      return U(), Q("div", {
        class: Re(["inputsystem-panel", { "has-commands": (S = e.subsystem.commandsNodes) == null ? void 0 : S.length }])
      }, [
        Se("div", ET, [
          Se("span", DT, Fe(e.subsystem.label || e.subsystem.name), 1),
          (R = e.subsystem.commandsNodes) != null && R.length ? (U(), Q("span", RT, [
            (U(!0), Q(Te, null, Ye(e.subsystem.commandsNodes, (k) => (U(), Q("button", {
              key: k.id,
              type: "button",
              "data-poris-command": "",
              onClick: (h) => c(k, h)
            }, Fe(k.label || k.name), 9, CT))), 128))
          ])) : ae("", !0),
          Se("span", NT, [
            s(e.subsystem, e.modes) ? (U(), Ee(ap, {
              key: 0,
              class: "mode-selector",
              modelValue: u.value,
              "onUpdate:modelValue": m[0] || (m[0] = (k) => u.value = k),
              modes: e.modes
            }, null, 8, ["modelValue", "modes"])) : ae("", !0),
            a(e.subsystem) ? (U(), Ee(MT, {
              key: 1,
              mode: u.value,
              "selected-value": d.value,
              "onUpdate:selectedValue": m[1] || (m[1] = (k) => d.value = k),
              "data-value": p.value,
              "onUpdate:dataValue": m[2] || (m[2] = (k) => p.value = k)
            }, null, 8, ["mode", "selected-value", "data-value"])) : ae("", !0)
          ])
        ])
      ], 2);
    };
  }
}, Cc = /* @__PURE__ */ Mo($T, [["__scopeId", "data-v-f082c68b"]]), IT = {
  key: 0,
  class: "subsystem-panel"
}, FT = { class: "subsystem-heading" }, LT = {
  key: 0,
  class: "title"
}, VT = {
  key: 1,
  class: "command-buttons"
}, BT = ["onClick"], jT = {
  key: 0,
  class: "mode-selector"
}, HT = {
  __name: "SubSystemPanel",
  props: {
    system: {
      type: Object,
      required: !1
    }
  },
  emits: ["command-launched"],
  setup(e, { emit: t }) {
    function n(m) {
      return !m.hasRealValues && m.hasValues && m.currentMode.hasValues;
    }
    function r(m) {
      return !m.hasRealValues && !m.currentMode.hasValues && !m.currentMode.hasModes && !m.hasSubsystems;
    }
    function a(m) {
      return !s(m);
      //!s0.hasRealValues && !(s1.hasRealValues || fakeParam(s1)) && !fakeParamWithNoValue(s0)
    }
    function s(m) {
      var S;
      return m.hasRealValues || n(m) || r(m) || !m.hasSubsystems && ((S = m.currentMode) == null ? void 0 : S.hasValues);
    }
    function o(m) {
      return !m.currentMode.hasValues && !m.currentMode.hasModes || m.getValidModes().length > 1;
    }
    function l(m) {
      return m.getValidModes().length > 0 && !m.hasRealValues;
    }
    const i = Si(), c = e, u = t, p = (/* @__PURE__ */ se(c.system)).value;
    p.candidateMode = p.currentMode;
    const v = oe(() => {
      const m = p.currentMode, S = new Set(((m == null ? void 0 : m.modesNodes) || []).map((R) => R.id));
      return (p.subsystemsNodes || []).filter(
        (R) => (R.modesNodes || []).some((k) => S.has(k.id))
      );
    });
    function w(m, S) {
      if (S.currentTarget.dataset.porisCommandCancelled === "true") {
        delete S.currentTarget.dataset.porisCommandCancelled;
        return;
      }
      u("command-launched", {
        systemId: p.id,
        systemName: p.name,
        commandId: m.id,
        commandName: m.name
      });
    }
    return ze(
      () => p.candidateMode,
      () => {
        var m, S;
        Cn(
          `watch.mode. mode ${(m = p.currentMode) == null ? void 0 : m.name}, newMode :${(S = p.candidateMode) == null ? void 0 : S.name}`
        ), p.candidateMode != null && p.candidateMode != p.currentMode && (i.setValidMode(p, p.candidateMode), Cn(`watch result >> ${p.currentMode.name}`));
      }
    ), (m, S) => {
      var k;
      const R = dh("SubSystemPanel", !0);
      return U(), Q(Te, null, [
        l(D(p)) ? (U(), Q("div", IT, [
          Se("div", FT, [
            D(p).label != "-" ? (U(), Q("h3", LT, Fe(D(p).label || D(p).name), 1)) : ae("", !0),
            (k = D(p).commandsNodes) != null && k.length ? (U(), Q("div", VT, [
              (U(!0), Q(Te, null, Ye(D(p).commandsNodes, (h) => (U(), Q("button", {
                key: h.id,
                type: "button",
                "data-poris-command": "",
                onClick: (b) => w(h, b)
              }, Fe(h.label || h.name), 9, BT))), 128))
            ])) : ae("", !0)
          ]),
          o(D(p)) ? (U(), Q("div", jT, [
            Ke(ap, {
              modelValue: D(p).candidateMode,
              "onUpdate:modelValue": S[0] || (S[0] = (h) => D(p).candidateMode = h),
              modes: D(p).getValidModes()
            }, null, 8, ["modelValue", "modes"])
          ])) : ae("", !0),
          (U(!0), Q(Te, null, Ye(v.value, (h) => (U(), Q(Te, {
            key: h.id
          }, [
            a(h) ? (U(), Ee(R, {
              key: 0,
              system: h,
              onCommandLaunched: S[1] || (S[1] = (b) => u("command-launched", b))
            }, null, 8, ["system"])) : ae("", !0),
            s(h) ? (U(), Ee(Cc, {
              key: 1,
              subsystem: h,
              modes: h.getValidModes(),
              mode: h.currentMode,
              onCommandLaunched: S[2] || (S[2] = (b) => u("command-launched", b))
            }, null, 8, ["subsystem", "modes", "mode"])) : ae("", !0)
          ], 64))), 128))
        ])) : ae("", !0),
        s(D(p)) ? (U(), Ee(Cc, {
          key: 1,
          subsystem: D(p),
          modes: D(p).getValidModes(),
          mode: D(p).currentMode,
          onCommandLaunched: S[3] || (S[3] = (h) => u("command-launched", h))
        }, null, 8, ["subsystem", "modes", "mode"])) : ae("", !0)
      ], 64);
    };
  }
}, $o = "";
function UT() {
  return !!$o;
}
function Nc(e, { url: t, csrfToken: n } = {}) {
  const r = t || `${$o}/api/poris/commit`, a = n ? { "X-CSRF-Token": n } : {};
  return rt.post(r, e, { headers: a }).then((s) => s.data);
}
function YT(e) {
  return rt.post(`${$o}/api/poris/command/${e}`, {}).then((t) => t.data);
}
function qT() {
  return rt.get(`${$o}/api/poris/state`).then((e) => e.data);
}
const WT = {
  key: 0,
  class: "loading"
}, zT = {
  key: 1,
  class: "panel"
}, KT = { class: "title" }, JT = {
  key: 0,
  class: "monitor-capsules"
}, XT = { class: "monitor-name" }, GT = { class: "monitor-value" }, QT = {
  key: 1,
  class: "actions"
}, ZT = ["disabled"], eS = ["disabled"], tS = ["disabled"], nS = {
  key: 2,
  class: "status command-message"
}, rS = {
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
    const n = Si(), r = oe(() => n.isLoading), a = oe(() => n.rootSubsystem), s = /* @__PURE__ */ se(!1), o = /* @__PURE__ */ se(""), l = /* @__PURE__ */ se(""), i = /* @__PURE__ */ se(!1), c = UT(), u = oe(() => !!m.commitUrl || c), d = "", p = /* @__PURE__ */ se([]), v = oe(
      () => p.value.filter((F) => F.visible)
    );
    let w = null;
    const m = e, S = t;
    function R(F) {
      var T, L, y;
      const Z = n.systemValues[`${F.id}`], j = (Z == null ? void 0 : Z.value) || ((T = F.currentMode) == null ? void 0 : T.defaultValue) || ((y = (L = F.currentMode) == null ? void 0 : L.valuesNodes) == null ? void 0 : y[0]);
      return j ? typeof (Z == null ? void 0 : Z.data) == "number" ? {
        number: Z.data,
        name: j.name,
        id: j.id,
        type: j.type
      } : j.type === "ValueString" || j.type === "ValueFilePath" ? { data: (Z == null ? void 0 : Z.data) ?? "", name: j.name, id: j.id, type: j.type } : { name: j.name, id: j.id, type: j.type } : null;
    }
    function k(F) {
      return {
        id: F.id,
        name: F.name,
        mode: F.currentMode ? { id: F.currentMode.id, name: F.currentMode.name } : null,
        value: R(F),
        subsystems: (F.subsystemsNodes || []).map(k)
      };
    }
    function h() {
      return {
        root: k(a.value)
      };
    }
    async function b() {
      if (c)
        try {
          const F = await qT();
          p.value = (F == null ? void 0 : F.monitors) || [];
        } catch {
          p.value = [];
        }
    }
    async function q(F, Z) {
      var j, T;
      s.value = !0, i.value = !1, o.value = "";
      try {
        const L = await F();
        return o.value = Z, L;
      } catch (L) {
        i.value = !0, o.value = ((T = (j = L == null ? void 0 : L.response) == null ? void 0 : j.data) == null ? void 0 : T.error) || L.message || String(L);
      } finally {
        s.value = !1;
      }
    }
    async function Y() {
      const F = await q(
        () => Nc(h(), { url: m.commitUrl, csrfToken: m.csrfToken }),
        "Commit applied to the PORIS runtime"
      );
      F != null && F.state && (n.applyRuntimeState(F.state), S("committed", F));
    }
    function E(F) {
      q(() => YT(F), `${F} executed`);
    }
    async function _({ systemId: F, systemName: Z, commandId: j, commandName: T }) {
      var L;
      if (i.value = !1, m.commitUrl) {
        const y = await q(
          () => Nc(
            {
              ...h(),
              operations: [{ type: "invoke_command", node_id: F, command_id: j }]
            },
            { url: m.commitUrl, csrfToken: m.csrfToken }
          ),
          `Command ${Z}.${T} sent to the PORIS runtime`
        );
        y != null && y.state && (n.applyRuntimeState(y.state), S("committed", y));
        const X = (L = y == null ? void 0 : y.operations) == null ? void 0 : L.find(
          (ie) => ie.type === "invoke_command"
        );
        X != null && X.accepted ? l.value = `We launched ${Z}.${T}` : X && (i.value = !0, o.value = X.reason || "The PORIS command was rejected");
        return;
      }
      l.value = `We launched ${Z}.${T}`;
    }
    function M() {
      l.value = "";
    }
    function C() {
      o.value = "", i.value = !1, H();
    }
    function H() {
      m.modelXml ? n.loadModelXML(m.modelXml) : m.modelPath && n.loadModelURL(m.modelPath);
    }
    return (m.modelXml || m.modelPath) && H(), ze(
      () => n.rootSubsystem,
      (F) => {
        F && m.initialState.length && n.applyRuntimeState(m.initialState);
      },
      { immediate: !0 }
    ), _t(() => {
      b(), c && (w = window.setInterval(b, 1e3));
    }), bo(() => {
      w && window.clearInterval(w);
    }), (F, Z) => (U(), Q("div", {
      class: Re(["poris-main", { compact: m.compact }]),
      onClickCapture: M,
      onKeydownCapture: M
    }, [
      r.value ? (U(), Q("div", WT, [...Z[1] || (Z[1] = [
        Se("span", { class: "spinner" }, null, -1)
      ])])) : a.value ? (U(), Q("div", zT, [
        Se("h2", KT, Fe(a.value.name) + " Panel", 1),
        v.value.length ? (U(), Q("div", JT, [
          (U(!0), Q(Te, null, Ye(v.value, (j) => (U(), Q("div", {
            key: j.id,
            class: "monitor-capsule"
          }, [
            Se("span", XT, Fe(j.label), 1),
            Se("span", GT, Fe(j.value), 1)
          ]))), 128))
        ])) : ae("", !0),
        Ke(HT, {
          system: a.value,
          onCommandLaunched: _
        }, null, 8, ["system"]),
        u.value || D(c) ? (U(), Q("div", QT, [
          u.value ? (U(), Q("button", {
            key: 0,
            type: "button",
            disabled: s.value,
            onClick: Y
          }, Fe(m.commitUrl ? "Commit" : "Commit changes"), 9, ZT)) : ae("", !0),
          D(c) ? (U(), Q("button", {
            key: 1,
            type: "button",
            disabled: s.value,
            onClick: C
          }, " Cancel ", 8, eS)) : ae("", !0),
          D(d) ? (U(), Q("button", {
            key: 2,
            type: "button",
            disabled: s.value,
            onClick: Z[0] || (Z[0] = (j) => E(D(d)))
          }, Fe(D(d)), 9, tS)) : ae("", !0)
        ])) : ae("", !0),
        l.value ? (U(), Q("div", nS, Fe(l.value), 1)) : ae("", !0),
        o.value ? (U(), Q("div", {
          key: 3,
          class: Re(["status", { error: i.value }])
        }, Fe(o.value), 3)) : ae("", !0)
      ])) : ae("", !0)
    ], 34));
  }
}, aS = /* @__PURE__ */ Mo(rS, [["__scopeId", "data-v-589af3a4"]]);
function OS(e, t, n = {}) {
  const {
    debug: r = !1,
    compact: a = !1,
    commitUrl: s = "",
    csrfToken: o = "",
    initialState: l = [],
    modelXml: i = "",
    onCommit: c
  } = n;
  rw(r);
  const d = Pv(aS, {
    modelPath: e,
    modelXml: i,
    compact: a,
    commitUrl: s,
    csrfToken: o,
    initialState: l,
    onCommitted: c
  });
  return d.use(Ev()), d.mount(t), d;
}
export {
  OS as createPorisViewerPanel
};
