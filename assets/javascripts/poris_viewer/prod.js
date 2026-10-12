var nm = Object.defineProperty;
var rm = (e, t, n) => t in e ? nm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var he = (e, t, n) => rm(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function $n(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const Xe = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, no = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], bt = () => {
}, om = () => !1, aa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ja = (e) => e.startsWith("onUpdate:"), nt = Object.assign, el = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, am = Object.prototype.hasOwnProperty, je = (e, t) => am.call(e, t), ye = Array.isArray, Tr = (e) => sa(e) === "[object Map]", cs = (e) => sa(e) === "[object Set]", au = (e) => sa(e) === "[object Date]", ke = (e) => typeof e == "function", rt = (e) => typeof e == "string", ar = (e) => typeof e == "symbol", We = (e) => e !== null && typeof e == "object", tl = (e) => (We(e) || ke(e)) && ke(e.then) && ke(e.catch), Qc = Object.prototype.toString, sa = (e) => Qc.call(e), nl = (e) => sa(e).slice(8, -1), Xc = (e) => sa(e) === "[object Object]", rl = (e) => rt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $o = /* @__PURE__ */ $n(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), sm = /* @__PURE__ */ $n(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ds = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, im = /-(\w)/g, an = ds((e) => e.replace(im, (t, n) => n ? n.toUpperCase() : "")), lm = /\B([A-Z])/g, En = ds(
  (e) => e.replace(lm, "-$1").toLowerCase()
), Fr = ds((e) => e.charAt(0).toUpperCase() + e.slice(1)), gr = ds((e) => e ? `on${Fr(e)}` : ""), On = (e, t) => !Object.is(e, t), Qr = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Ha = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, qo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, um = (e) => {
  const t = rt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let su;
const ol = () => su || (su = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rt(e) {
  if (ye(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = rt(r) ? pm(r) : Rt(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (rt(e) || We(e))
    return e;
}
const cm = /;(?![^(]*\))/g, dm = /:([^]+)/, fm = /\/\*[^]*?\*\//g;
function pm(e) {
  const t = {};
  return e.replace(fm, "").split(cm).forEach((n) => {
    if (n) {
      const r = n.split(dm);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Fe(e) {
  let t = "";
  if (rt(e))
    t = e;
  else if (ye(e))
    for (let n = 0; n < e.length; n++) {
      const r = Fe(e[n]);
      r && (t += r + " ");
    }
  else if (We(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function wt(e) {
  if (!e)
    return null;
  let { class: t, style: n } = e;
  return t && !rt(t) && (e.class = Fe(t)), n && (e.style = Rt(n)), e;
}
const mm = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", hm = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", vm = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", ym = /* @__PURE__ */ $n(mm), gm = /* @__PURE__ */ $n(hm), bm = /* @__PURE__ */ $n(vm), _m = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", wm = /* @__PURE__ */ $n(_m);
function Jc(e) {
  return !!e || e === "";
}
function Em(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = fs(e[r], t[r]);
  return n;
}
function fs(e, t) {
  if (e === t)
    return !0;
  let n = au(e), r = au(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = ar(e), r = ar(t), n || r)
    return e === t;
  if (n = ye(e), r = ye(t), n || r)
    return n && r ? Em(e, t) : !1;
  if (n = We(e), r = We(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const s in e) {
      const i = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (i && !l || !i && l || !fs(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Om(e, t) {
  return e.findIndex((n) => fs(n, t));
}
const ze = (e) => rt(e) ? e : e == null ? "" : ye(e) || We(e) && (e.toString === Qc || !ke(e.toString)) ? JSON.stringify(e, Zc, 2) : String(e), Zc = (e, t) => t && t.__v_isRef ? Zc(e, t.value) : Tr(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[Ys(r, a) + " =>"] = o, n),
    {}
  )
} : cs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ys(n))
} : ar(t) ? Ys(t) : We(t) && !ye(t) && !Xc(t) ? String(t) : t, Ys = (e, t = "") => {
  var n;
  return ar(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
};
/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Nn(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ht;
class ed {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ht, !t && Ht && (this.index = (Ht.scopes || (Ht.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Ht;
      try {
        return Ht = this, t();
      } finally {
        Ht = n;
      }
    } else process.env.NODE_ENV !== "production" && Nn("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ht = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ht = this.parent;
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
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function td(e) {
  return new ed(e);
}
function Nm(e, t = Ht) {
  t && t.active && t.effects.push(e);
}
function al() {
  return Ht;
}
function nd(e) {
  Ht ? Ht.cleanups.push(e) : process.env.NODE_ENV !== "production" && Nn(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let kr;
class sl {
  constructor(t, n, r, o) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Nm(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Rn();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (xm(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ur();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = vn, n = kr;
    try {
      return vn = !0, kr = this, this._runnings++, iu(this), this.fn();
    } finally {
      lu(this), this._runnings--, kr = n, vn = t;
    }
  }
  stop() {
    var t;
    this.active && (iu(this), lu(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function xm(e) {
  return e.value;
}
function iu(e) {
  e._trackId++, e._depsLength = 0;
}
function lu(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      rd(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function rd(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let vn = !0, gi = 0;
const il = [];
function Rn() {
  il.push(vn), vn = !1;
}
function Dm() {
  il.push(vn), vn = !0;
}
function ur() {
  const e = il.pop();
  vn = e === void 0 ? !0 : e;
}
function ll() {
  gi++;
}
function ul() {
  for (gi--; !gi && bi.length; )
    bi.shift()();
}
function od(e, t, n) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const o = e.deps[e._depsLength];
    o !== t ? (o && rd(o, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((r = e.onTrack) == null || r.call(e, nt({ effect: e }, n)));
  }
}
const bi = [];
function ad(e, t, n) {
  var r;
  ll();
  for (const o of e.keys()) {
    let a;
    o._dirtyLevel < t && (a ?? (a = e.get(o) === o._trackId)) && (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0), o._dirtyLevel = t), o._shouldSchedule && (a ?? (a = e.get(o) === o._trackId)) && (process.env.NODE_ENV !== "production" && ((r = o.onTrigger) == null || r.call(o, nt({ effect: o }, n))), o.trigger(), (!o._runnings || o.allowRecurse) && o._dirtyLevel !== 2 && (o._shouldSchedule = !1, o.scheduler && bi.push(o.scheduler)));
  }
  ul();
}
const sd = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Ya = /* @__PURE__ */ new WeakMap(), Sr = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), _i = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function St(e, t, n) {
  if (vn && kr) {
    let r = Ya.get(e);
    r || Ya.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = sd(() => r.delete(n))), od(
      kr,
      o,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function yn(e, t, n, r, o, a) {
  const s = Ya.get(e);
  if (!s)
    return;
  let i = [];
  if (t === "clear")
    i = [...s.values()];
  else if (n === "length" && ye(e)) {
    const l = Number(r);
    s.forEach((c, d) => {
      (d === "length" || !ar(d) && d >= l) && i.push(c);
    });
  } else
    switch (n !== void 0 && i.push(s.get(n)), t) {
      case "add":
        ye(e) ? rl(n) && i.push(s.get("length")) : (i.push(s.get(Sr)), Tr(e) && i.push(s.get(_i)));
        break;
      case "delete":
        ye(e) || (i.push(s.get(Sr)), Tr(e) && i.push(s.get(_i)));
        break;
      case "set":
        Tr(e) && i.push(s.get(Sr));
        break;
    }
  ll();
  for (const l of i)
    l && ad(
      l,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: r,
        oldValue: o,
        oldTarget: a
      } : void 0
    );
  ul();
}
function Tm(e, t) {
  var n;
  return (n = Ya.get(e)) == null ? void 0 : n.get(t);
}
const km = /* @__PURE__ */ $n("__proto__,__v_isRef,__isVue"), id = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ar)
), uu = /* @__PURE__ */ Sm();
function Sm() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = Se(this);
      for (let a = 0, s = this.length; a < s; a++)
        St(r, "get", a + "");
      const o = r[t](...n);
      return o === -1 || o === !1 ? r[t](...n.map(Se)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Rn(), ll();
      const r = Se(this)[t].apply(this, n);
      return ul(), ur(), r;
    };
  }), e;
}
function Mm(e) {
  const t = Se(this);
  return St(t, "has", e), t.hasOwnProperty(e);
}
class ld {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const o = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return a;
    if (n === "__v_raw")
      return r === (o ? a ? hd : md : a ? pd : fd).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = ye(t);
    if (!o) {
      if (s && je(uu, n))
        return Reflect.get(uu, n, r);
      if (n === "hasOwnProperty")
        return Mm;
    }
    const i = Reflect.get(t, n, r);
    return (ar(n) ? id.has(n) : km(n)) || (o || St(t, "get", n), a) ? i : ot(i) ? s && rl(n) ? i : i.value : We(i) ? o ? vd(i) : In(i) : i;
  }
}
class ud extends ld {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    if (!this._isShallow) {
      const l = sr(a);
      if (!Mr(r) && !sr(r) && (a = Se(a), r = Se(r)), !ye(t) && ot(a) && !ot(r))
        return l ? !1 : (a.value = r, !0);
    }
    const s = ye(t) && rl(n) ? Number(n) < t.length : je(t, n), i = Reflect.set(t, n, r, o);
    return t === Se(o) && (s ? On(r, a) && yn(t, "set", n, r, a) : yn(t, "add", n, r)), i;
  }
  deleteProperty(t, n) {
    const r = je(t, n), o = t[n], a = Reflect.deleteProperty(t, n);
    return a && r && yn(t, "delete", n, void 0, o), a;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ar(n) || !id.has(n)) && St(t, "has", n), r;
  }
  ownKeys(t) {
    return St(
      t,
      "iterate",
      ye(t) ? "length" : Sr
    ), Reflect.ownKeys(t);
  }
}
class cd extends ld {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Nn(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Nn(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Pm = /* @__PURE__ */ new ud(), Cm = /* @__PURE__ */ new cd(), Am = /* @__PURE__ */ new ud(
  !0
), Vm = /* @__PURE__ */ new cd(!0), cl = (e) => e, ps = (e) => Reflect.getPrototypeOf(e);
function ga(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = Se(e), a = Se(t);
  n || (On(t, a) && St(o, "get", t), St(o, "get", a));
  const { has: s } = ps(o), i = r ? cl : n ? dl : Go;
  if (s.call(o, t))
    return i(e.get(t));
  if (s.call(o, a))
    return i(e.get(a));
  e !== o && e.get(t);
}
function ba(e, t = !1) {
  const n = this.__v_raw, r = Se(n), o = Se(e);
  return t || (On(e, o) && St(r, "has", e), St(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function _a(e, t = !1) {
  return e = e.__v_raw, !t && St(Se(e), "iterate", Sr), Reflect.get(e, "size", e);
}
function cu(e) {
  e = Se(e);
  const t = Se(this);
  return ps(t).has.call(t, e) || (t.add(e), yn(t, "add", e, e)), this;
}
function du(e, t) {
  t = Se(t);
  const n = Se(this), { has: r, get: o } = ps(n);
  let a = r.call(n, e);
  a ? process.env.NODE_ENV !== "production" && dd(n, r, e) : (e = Se(e), a = r.call(n, e));
  const s = o.call(n, e);
  return n.set(e, t), a ? On(t, s) && yn(n, "set", e, t, s) : yn(n, "add", e, t), this;
}
function fu(e) {
  const t = Se(this), { has: n, get: r } = ps(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && dd(t, n, e) : (e = Se(e), o = n.call(t, e));
  const a = r ? r.call(t, e) : void 0, s = t.delete(e);
  return o && yn(t, "delete", e, void 0, a), s;
}
function pu() {
  const e = Se(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Tr(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && yn(e, "clear", void 0, void 0, n), r;
}
function wa(e, t) {
  return function(r, o) {
    const a = this, s = a.__v_raw, i = Se(s), l = t ? cl : e ? dl : Go;
    return !e && St(i, "iterate", Sr), s.forEach((c, d) => r.call(o, l(c), l(d), a));
  };
}
function Ea(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = Se(o), s = Tr(a), i = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = o[e](...r), d = n ? cl : t ? dl : Go;
    return !t && St(
      a,
      "iterate",
      l ? _i : Sr
    ), {
      // iterator protocol
      next() {
        const { value: u, done: f } = c.next();
        return f ? { value: u, done: f } : {
          value: i ? [d(u[0]), d(u[1])] : d(u),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Bn(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Nn(
        `${Fr(e)} operation ${n}failed: target is readonly.`,
        Se(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $m() {
  const e = {
    get(a) {
      return ga(this, a);
    },
    get size() {
      return _a(this);
    },
    has: ba,
    add: cu,
    set: du,
    delete: fu,
    clear: pu,
    forEach: wa(!1, !1)
  }, t = {
    get(a) {
      return ga(this, a, !1, !0);
    },
    get size() {
      return _a(this);
    },
    has: ba,
    add: cu,
    set: du,
    delete: fu,
    clear: pu,
    forEach: wa(!1, !0)
  }, n = {
    get(a) {
      return ga(this, a, !0);
    },
    get size() {
      return _a(this, !0);
    },
    has(a) {
      return ba.call(this, a, !0);
    },
    add: Bn("add"),
    set: Bn("set"),
    delete: Bn("delete"),
    clear: Bn("clear"),
    forEach: wa(!0, !1)
  }, r = {
    get(a) {
      return ga(this, a, !0, !0);
    },
    get size() {
      return _a(this, !0);
    },
    has(a) {
      return ba.call(this, a, !0);
    },
    add: Bn("add"),
    set: Bn("set"),
    delete: Bn("delete"),
    clear: Bn("clear"),
    forEach: wa(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
    e[a] = Ea(
      a,
      !1,
      !1
    ), n[a] = Ea(
      a,
      !0,
      !1
    ), t[a] = Ea(
      a,
      !1,
      !0
    ), r[a] = Ea(
      a,
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
  Rm,
  Im,
  Fm,
  Lm
] = /* @__PURE__ */ $m();
function ms(e, t) {
  const n = t ? e ? Lm : Fm : e ? Im : Rm;
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    je(n, o) && o in r ? n : r,
    o,
    a
  );
}
const Bm = {
  get: /* @__PURE__ */ ms(!1, !1)
}, jm = {
  get: /* @__PURE__ */ ms(!1, !0)
}, Hm = {
  get: /* @__PURE__ */ ms(!0, !1)
}, Ym = {
  get: /* @__PURE__ */ ms(!0, !0)
};
function dd(e, t, n) {
  const r = Se(n);
  if (r !== n && t.call(e, r)) {
    const o = nl(e);
    Nn(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const fd = /* @__PURE__ */ new WeakMap(), pd = /* @__PURE__ */ new WeakMap(), md = /* @__PURE__ */ new WeakMap(), hd = /* @__PURE__ */ new WeakMap();
function Um(e) {
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
function Wm(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Um(nl(e));
}
function In(e) {
  return sr(e) ? e : hs(
    e,
    !1,
    Pm,
    Bm,
    fd
  );
}
function qm(e) {
  return hs(
    e,
    !1,
    Am,
    jm,
    pd
  );
}
function vd(e) {
  return hs(
    e,
    !0,
    Cm,
    Hm,
    md
  );
}
function Zr(e) {
  return hs(
    e,
    !0,
    Vm,
    Ym,
    hd
  );
}
function hs(e, t, n, r, o) {
  if (!We(e))
    return process.env.NODE_ENV !== "production" && Nn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = o.get(e);
  if (a)
    return a;
  const s = Wm(e);
  if (s === 0)
    return e;
  const i = new Proxy(
    e,
    s === 2 ? r : n
  );
  return o.set(e, i), i;
}
function gn(e) {
  return sr(e) ? gn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function sr(e) {
  return !!(e && e.__v_isReadonly);
}
function Mr(e) {
  return !!(e && e.__v_isShallow);
}
function Ua(e) {
  return gn(e) || sr(e);
}
function Se(e) {
  const t = e && e.__v_raw;
  return t ? Se(t) : e;
}
function Cn(e) {
  return Object.isExtensible(e) && Ha(e, "__v_skip", !0), e;
}
const Go = (e) => We(e) ? In(e) : e, dl = (e) => We(e) ? vd(e) : e, Gm = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class yd {
  constructor(t, n, r, o) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new sl(
      () => t(this._value),
      () => ro(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const t = Se(this);
    return (!t._cacheable || t.effect.dirty) && On(t._value, t._value = t.effect.run()) && ro(t, 4), fl(t), t.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && Nn(Gm, `

getter: `, this.getter), ro(t, 2)), t._value;
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
function zm(e, t, n = !1) {
  let r, o;
  const a = ke(e);
  a ? (r = e, o = process.env.NODE_ENV !== "production" ? () => {
    Nn("Write operation failed: computed value is readonly");
  } : bt) : (r = e.get, o = e.set);
  const s = new yd(r, o, a || !o, n);
  return process.env.NODE_ENV !== "production" && t && !n && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
function fl(e) {
  var t;
  vn && kr && (e = Se(e), od(
    kr,
    (t = e.dep) != null ? t : e.dep = sd(
      () => e.dep = void 0,
      e instanceof yd ? e : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function ro(e, t = 4, n) {
  e = Se(e);
  const r = e.dep;
  r && ad(
    r,
    t,
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function ot(e) {
  return !!(e && e.__v_isRef === !0);
}
function Z(e) {
  return Km(e, !1);
}
function Km(e, t) {
  return ot(e) ? e : new Qm(e, t);
}
class Qm {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Se(t), this._value = n ? t : Go(t);
  }
  get value() {
    return fl(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Mr(t) || sr(t);
    t = n ? t : Se(t), On(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : Go(t), ro(this, 4, t));
  }
}
function mu(e) {
  ro(e, 4, process.env.NODE_ENV !== "production" ? e.value : void 0);
}
function D(e) {
  return ot(e) ? e.value : e;
}
const Xm = {
  get: (e, t, n) => D(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return ot(o) && !ot(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function gd(e) {
  return gn(e) ? e : new Proxy(e, Xm);
}
class Jm {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: r } = t(
      () => fl(this),
      () => ro(this)
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
function Zm(e) {
  return new Jm(e);
}
function hu(e) {
  process.env.NODE_ENV !== "production" && !Ua(e) && Nn("toRefs() expects a reactive object but received a plain one.");
  const t = ye(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = bd(e, n);
  return t;
}
class eh {
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
    return Tm(Se(this._object), this._key);
  }
}
class th {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function Pr(e, t, n) {
  return ot(e) ? e : ke(e) ? new th(e) : We(e) && arguments.length > 1 ? bd(e, t, n) : Z(e);
}
function bd(e, t, n) {
  const r = e[t];
  return ot(r) ? r : new eh(e, t, n);
}
/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Cr = [];
function Pa(e) {
  Cr.push(e);
}
function Ca() {
  Cr.pop();
}
function ue(e, ...t) {
  Rn();
  const n = Cr.length ? Cr[Cr.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = nh();
  if (r)
    Vn(
      r,
      n,
      11,
      [
        e + t.map((a) => {
          var s, i;
          return (i = (s = a.toString) == null ? void 0 : s.call(a)) != null ? i : JSON.stringify(a);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: a }) => `at <${Ns(n, a.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const a = [`[Vue warn]: ${e}`, ...t];
    o.length && a.push(`
`, ...rh(o)), console.warn(...a);
  }
  ur();
}
function nh() {
  let e = Cr[Cr.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function rh(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...oh(n));
  }), t;
}
function oh({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${Ns(
    e.component,
    e.type,
    r
  )}`, a = ">" + n;
  return e.props ? [o, ...ah(e.props), a] : [o + a];
}
function ah(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(..._d(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function _d(e, t, n) {
  return rt(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ot(t) ? (t = _d(e, Se(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ke(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = Se(t), n ? t : [`${e}=`, t]);
}
function sh(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? ue(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && ue(`${t} is NaN - the duration expression might be incorrect.`));
}
const pl = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Vn(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    ia(o, t, n);
  }
}
function zt(e, t, n, r) {
  if (ke(e)) {
    const a = Vn(e, t, n, r);
    return a && tl(a) && a.catch((s) => {
      ia(s, t, n);
    }), a;
  }
  const o = [];
  for (let a = 0; a < e.length; a++)
    o.push(zt(e[a], t, n, r));
  return o;
}
function ia(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let a = t.parent;
    const s = t.proxy, i = process.env.NODE_ENV !== "production" ? pl[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let d = 0; d < c.length; d++)
          if (c[d](e, s, i) === !1)
            return;
      }
      a = a.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      Vn(
        l,
        null,
        10,
        [e, s, i]
      );
      return;
    }
  }
  ih(e, n, o, r);
}
function ih(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const o = pl[t];
    if (n && Pa(n), ue(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && Ca(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let zo = !1, wi = !1;
const Ct = [];
let fn = 0;
const oo = [];
let Mn = null, qn = 0;
const wd = /* @__PURE__ */ Promise.resolve();
let ml = null;
const lh = 100;
function Kt(e) {
  const t = ml || wd;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function uh(e) {
  let t = fn + 1, n = Ct.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Ct[r], a = Ko(o);
    a < e || a === e && o.pre ? t = r + 1 : n = r;
  }
  return t;
}
function vs(e) {
  (!Ct.length || !Ct.includes(
    e,
    zo && e.allowRecurse ? fn + 1 : fn
  )) && (e.id == null ? Ct.push(e) : Ct.splice(uh(e.id), 0, e), Ed());
}
function Ed() {
  !zo && !wi && (wi = !0, ml = wd.then(xd));
}
function ch(e) {
  const t = Ct.indexOf(e);
  t > fn && Ct.splice(t, 1);
}
function Od(e) {
  ye(e) ? oo.push(...e) : (!Mn || !Mn.includes(
    e,
    e.allowRecurse ? qn + 1 : qn
  )) && oo.push(e), Ed();
}
function vu(e, t, n = zo ? fn + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Ct.length; n++) {
    const r = Ct[n];
    if (r && r.pre) {
      if (e && r.id !== e.uid || process.env.NODE_ENV !== "production" && hl(t, r))
        continue;
      Ct.splice(n, 1), n--, r();
    }
  }
}
function Nd(e) {
  if (oo.length) {
    const t = [...new Set(oo)].sort(
      (n, r) => Ko(n) - Ko(r)
    );
    if (oo.length = 0, Mn) {
      Mn.push(...t);
      return;
    }
    for (Mn = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), qn = 0; qn < Mn.length; qn++)
      process.env.NODE_ENV !== "production" && hl(e, Mn[qn]) || Mn[qn]();
    Mn = null, qn = 0;
  }
}
const Ko = (e) => e.id == null ? 1 / 0 : e.id, dh = (e, t) => {
  const n = Ko(e) - Ko(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function xd(e) {
  wi = !1, zo = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ct.sort(dh);
  const t = process.env.NODE_ENV !== "production" ? (n) => hl(e, n) : bt;
  try {
    for (fn = 0; fn < Ct.length; fn++) {
      const n = Ct[fn];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Vn(n, null, 14);
      }
    }
  } finally {
    fn = 0, Ct.length = 0, Nd(e), zo = !1, ml = null, (Ct.length || oo.length) && xd(e);
  }
}
function hl(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > lh) {
      const r = t.ownerInstance, o = r && xl(r.type);
      return ia(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let er = !1;
const Xr = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (ol().__VUE_HMR_RUNTIME__ = {
  createRecord: Us(Dd),
  rerender: Us(mh),
  reload: Us(hh)
});
const Lr = /* @__PURE__ */ new Map();
function fh(e) {
  const t = e.type.__hmrId;
  let n = Lr.get(t);
  n || (Dd(t, e.type), n = Lr.get(t)), n.instances.add(e);
}
function ph(e) {
  Lr.get(e.type.__hmrId).instances.delete(e);
}
function Dd(e, t) {
  return Lr.has(e) ? !1 : (Lr.set(e, {
    initialDef: Ro(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ro(e) {
  return lf(e) ? e.__vccOpts : e;
}
function mh(e, t) {
  const n = Lr.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Ro(r.type).render = t), r.renderCache = [], er = !0, r.effect.dirty = !0, r.update(), er = !1;
  }));
}
function hh(e, t) {
  const n = Lr.get(e);
  if (!n)
    return;
  t = Ro(t), yu(n.initialDef, t);
  const r = [...n.instances];
  for (const o of r) {
    const a = Ro(o.type);
    Xr.has(a) || (a !== n.initialDef && yu(a, t), Xr.add(a)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (Xr.add(a), o.ceReload(t.styles), Xr.delete(a)) : o.parent ? (o.parent.effect.dirty = !0, vs(o.parent.update)) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Od(() => {
    for (const o of r)
      Xr.delete(
        Ro(o.type)
      );
  });
}
function yu(e, t) {
  nt(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Us(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Zt, Co = [], Ei = !1;
function la(e, ...t) {
  Zt ? Zt.emit(e, ...t) : Ei || Co.push({ event: e, args: t });
}
function vl(e, t) {
  var n, r;
  Zt = e, Zt ? (Zt.enabled = !0, Co.forEach(({ event: o, args: a }) => Zt.emit(o, ...a)), Co = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
    vl(a, t);
  }), setTimeout(() => {
    Zt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ei = !0, Co = []);
  }, 3e3)) : (Ei = !0, Co = []);
}
function vh(e, t) {
  la("app:init", e, t, {
    Fragment: Oe,
    Text: ca,
    Comment: Dt,
    Static: Aa
  });
}
function yh(e) {
  la("app:unmount", e);
}
const gh = /* @__PURE__ */ yl(
  "component:added"
  /* COMPONENT_ADDED */
), Td = /* @__PURE__ */ yl(
  "component:updated"
  /* COMPONENT_UPDATED */
), bh = /* @__PURE__ */ yl(
  "component:removed"
  /* COMPONENT_REMOVED */
), _h = (e) => {
  Zt && typeof Zt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Zt.cleanupBuffer(e) && bh(e);
};
function yl(e) {
  return (t) => {
    la(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const wh = /* @__PURE__ */ kd(
  "perf:start"
  /* PERFORMANCE_START */
), Eh = /* @__PURE__ */ kd(
  "perf:end"
  /* PERFORMANCE_END */
);
function kd(e) {
  return (t, n, r) => {
    la(e, t.appContext.app, t.uid, t, n, r);
  };
}
function Oh(e, t, n) {
  la(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Nh(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const r = e.vnode.props || Xe;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(gr(t) in u)) && ue(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${gr(t)}" prop.`
        );
      else {
        const f = d[t];
        ke(f) && (f(...n) || ue(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const a = t.startsWith("update:"), s = a && t.slice(7);
  if (s && s in r) {
    const d = `${s === "modelValue" ? "model" : s}Modifiers`, { number: u, trim: f } = r[d] || Xe;
    f && (o = n.map((y) => rt(y) ? y.trim() : y)), u && (o = n.map(qo));
  }
  if (process.env.NODE_ENV !== "production" && Oh(e, t, o), process.env.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && r[gr(d)] && ue(
      `Event "${d}" is emitted in component ${Ns(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${En(
        t
      )}" instead of "${t}".`
    );
  }
  let i, l = r[i = gr(t)] || // also try camelCase event handler (#2249)
  r[i = gr(an(t))];
  !l && a && (l = r[i = gr(En(t))]), l && zt(
    l,
    e,
    6,
    o
  );
  const c = r[i + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, zt(
      c,
      e,
      6,
      o
    );
  }
}
function Sd(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let s = {}, i = !1;
  if (!ke(e)) {
    const l = (c) => {
      const d = Sd(c, t, !0);
      d && (i = !0, nt(s, d));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !a && !i ? (We(e) && r.set(e, null), null) : (ye(a) ? a.forEach((l) => s[l] = null) : nt(s, a), We(e) && r.set(e, s), s);
}
function ys(e, t) {
  return !e || !aa(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), je(e, t[0].toLowerCase() + t.slice(1)) || je(e, En(t)) || je(e, t));
}
let pt = null, gs = null;
function Wa(e) {
  const t = pt;
  return pt = e, gs = e && e.type.__scopeId || null, t;
}
function xh(e) {
  gs = e;
}
function Dh() {
  gs = null;
}
function Be(e, t = pt, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Cu(-1);
    const a = Wa(t);
    let s;
    try {
      s = e(...o);
    } finally {
      Wa(a), r._d && Cu(1);
    }
    return process.env.NODE_ENV !== "production" && Td(t), s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let Oi = !1;
function qa() {
  Oi = !0;
}
function Ws(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: a,
    propsOptions: [s],
    slots: i,
    attrs: l,
    emit: c,
    render: d,
    renderCache: u,
    data: f,
    setupState: y,
    ctx: h,
    inheritAttrs: g
  } = e;
  let M, $;
  const A = Wa(e);
  process.env.NODE_ENV !== "production" && (Oi = !1);
  try {
    if (n.shapeFlag & 4) {
      const V = o || r, k = process.env.NODE_ENV !== "production" && y.__isScriptSetup ? new Proxy(V, {
        get(_, T, I) {
          return ue(
            `Property '${String(
              T
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(_, T, I);
        }
      }) : V;
      M = Jt(
        d.call(
          k,
          V,
          u,
          a,
          y,
          f,
          h
        )
      ), $ = l;
    } else {
      const V = t;
      process.env.NODE_ENV !== "production" && l === a && qa(), M = Jt(
        V.length > 1 ? V(
          a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return qa(), l;
            },
            slots: i,
            emit: c
          } : { attrs: l, slots: i, emit: c }
        ) : V(
          a,
          null
          /* we know it doesn't need it */
        )
      ), $ = t.props ? l : Th(l);
    }
  } catch (V) {
    Bo.length = 0, ia(V, e, 1), M = et(Dt);
  }
  let b = M, x;
  if (process.env.NODE_ENV !== "production" && M.patchFlag > 0 && M.patchFlag & 2048 && ([b, x] = Md(M)), $ && g !== !1) {
    const V = Object.keys($), { shapeFlag: k } = b;
    if (V.length) {
      if (k & 7)
        s && V.some(ja) && ($ = kh(
          $,
          s
        )), b = xn(b, $);
      else if (process.env.NODE_ENV !== "production" && !Oi && b.type !== Dt) {
        const _ = Object.keys(l), T = [], I = [];
        for (let R = 0, O = _.length; R < O; R++) {
          const N = _[R];
          aa(N) ? ja(N) || T.push(N[2].toLowerCase() + N.slice(3)) : I.push(N);
        }
        I.length && ue(
          `Extraneous non-props attributes (${I.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), T.length && ue(
          `Extraneous non-emits event listeners (${T.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !gu(b) && ue(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), b = xn(b), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !gu(b) && ue(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), b.transition = n.transition), process.env.NODE_ENV !== "production" && x ? x(b) : M = b, Wa(A), M;
}
const Md = (e) => {
  const t = e.children, n = e.dynamicChildren, r = gl(t, !1);
  if (r) {
    if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return Md(r);
  } else return [e, void 0];
  const o = t.indexOf(r), a = n ? n.indexOf(r) : -1, s = (i) => {
    t[o] = i, n && (a > -1 ? n[a] = i : i.patchFlag > 0 && (e.dynamicChildren = [...n, i]));
  };
  return [Jt(r), s];
};
function gl(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (lo(o)) {
      if (o.type !== Dt || o.children === "v-if") {
        if (n)
          return;
        if (n = o, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return gl(n.children);
      }
    } else
      return;
  }
  return n;
}
const Th = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || aa(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, kh = (e, t) => {
  const n = {};
  for (const r in e)
    (!ja(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, gu = (e) => e.shapeFlag & 7 || e.type === Dt;
function Sh(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: s, children: i, patchFlag: l } = t, c = a.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || i) && er || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? bu(r, s, c) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (s[f] !== r[f] && !ys(c, f))
          return !0;
      }
    }
  } else
    return (o || i) && (!i || !i.$stable) ? !0 : r === s ? !1 : r ? s ? bu(r, s, c) : !0 : !!s;
  return !1;
}
function bu(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (t[a] !== e[a] && !ys(n, a))
      return !0;
  }
  return !1;
}
function Mh({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Pd = "components";
function Ph(e, t) {
  return Ad(Pd, e, !0, t) || e;
}
const Cd = Symbol.for("v-ndc");
function bs(e) {
  return rt(e) ? Ad(Pd, e, !1) || e : e || Cd;
}
function Ad(e, t, n = !0, r = !1) {
  const o = pt || _t;
  if (o) {
    const a = o.type;
    {
      const i = xl(
        a,
        !1
      );
      if (i && (i === t || i === an(t) || i === Fr(an(t))))
        return a;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      _u(o[e] || a[e], t) || // global registration
      _u(o.appContext[e], t)
    );
    return !s && r ? a : (process.env.NODE_ENV !== "production" && n && !s && ue(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), s);
  } else process.env.NODE_ENV !== "production" && ue(
    `resolve${Fr(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function _u(e, t) {
  return e && (e[t] || e[an(t)] || e[Fr(an(t))]);
}
const Ch = (e) => e.__isSuspense;
function Ah(e, t) {
  t && t.pendingBranch ? ye(e) ? t.effects.push(...e) : t.effects.push(e) : Od(e);
}
const Vh = Symbol.for("v-scx"), $h = () => {
  {
    const e = Fo(Vh);
    return e || process.env.NODE_ENV !== "production" && ue(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Rh(e, t) {
  return bl(
    e,
    null,
    process.env.NODE_ENV !== "production" ? nt({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
const Oa = {};
function ft(e, t, n) {
  return process.env.NODE_ENV !== "production" && !ke(t) && ue(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), bl(e, t, n);
}
function bl(e, t, {
  immediate: n,
  deep: r,
  flush: o,
  once: a,
  onTrack: s,
  onTrigger: i
} = Xe) {
  if (t && a) {
    const _ = t;
    t = (...T) => {
      _(...T), k();
    };
  }
  process.env.NODE_ENV !== "production" && r !== void 0 && typeof r == "number" && ue(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && ue(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && ue(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), a !== void 0 && ue(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = (_) => {
    ue(
      "Invalid watch source: ",
      _,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, c = _t, d = (_) => r === !0 ? _ : (
    // for deep: false, only traverse root-level properties
    Nr(_, r === !1 ? 1 : void 0)
  );
  let u, f = !1, y = !1;
  if (ot(e) ? (u = () => e.value, f = Mr(e)) : gn(e) ? (u = () => d(e), f = !0) : ye(e) ? (y = !0, f = e.some((_) => gn(_) || Mr(_)), u = () => e.map((_) => {
    if (ot(_))
      return _.value;
    if (gn(_))
      return d(_);
    if (ke(_))
      return Vn(_, c, 2);
    process.env.NODE_ENV !== "production" && l(_);
  })) : ke(e) ? t ? u = () => Vn(e, c, 2) : u = () => (h && h(), zt(
    e,
    c,
    3,
    [g]
  )) : (u = bt, process.env.NODE_ENV !== "production" && l(e)), t && r) {
    const _ = u;
    u = () => Nr(_());
  }
  let h, g = (_) => {
    h = x.onStop = () => {
      Vn(_, c, 4), h = x.onStop = void 0;
    };
  }, M;
  if (Es)
    if (g = bt, t ? n && zt(t, c, 3, [
      u(),
      y ? [] : void 0,
      g
    ]) : u(), o === "sync") {
      const _ = $h();
      M = _.__watcherHandles || (_.__watcherHandles = []);
    } else
      return bt;
  let $ = y ? new Array(e.length).fill(Oa) : Oa;
  const A = () => {
    if (!(!x.active || !x.dirty))
      if (t) {
        const _ = x.run();
        (r || f || (y ? _.some((T, I) => On(T, $[I])) : On(_, $))) && (h && h(), zt(t, c, 3, [
          _,
          // pass undefined as the old value when it's changed for the first time
          $ === Oa ? void 0 : y && $[0] === Oa ? [] : $,
          g
        ]), $ = _);
      } else
        x.run();
  };
  A.allowRecurse = !!t;
  let b;
  o === "sync" ? b = A : o === "post" ? b = () => Ft(A, c && c.suspense) : (A.pre = !0, c && (A.id = c.uid), b = () => vs(A));
  const x = new sl(u, bt, b), V = al(), k = () => {
    x.stop(), V && el(V.effects, x);
  };
  return process.env.NODE_ENV !== "production" && (x.onTrack = s, x.onTrigger = i), t ? n ? A() : $ = x.run() : o === "post" ? Ft(
    x.run.bind(x),
    c && c.suspense
  ) : x.run(), M && M.push(k), k;
}
function Ih(e, t, n) {
  const r = this.proxy, o = rt(e) ? e.includes(".") ? Vd(r, e) : () => r[e] : e.bind(r, r);
  let a;
  ke(t) ? a = t : (a = t.handler, n = t);
  const s = fa(this), i = bl(o, a.bind(r), n);
  return s(), i;
}
function Vd(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function Nr(e, t, n = 0, r) {
  if (!We(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(e))
    return e;
  if (r.add(e), ot(e))
    Nr(e.value, t, n, r);
  else if (ye(e))
    for (let o = 0; o < e.length; o++)
      Nr(e[o], t, n, r);
  else if (cs(e) || Tr(e))
    e.forEach((o) => {
      Nr(o, t, n, r);
    });
  else if (Xc(e))
    for (const o in e)
      Nr(e[o], t, n, r);
  return e;
}
function $d(e) {
  sm(e) && ue("Do not use built-in directive ids as custom directive id: " + e);
}
function tr(e, t) {
  if (pt === null)
    return process.env.NODE_ENV !== "production" && ue("withDirectives can only be used inside render functions."), e;
  const n = Os(pt) || pt.proxy, r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, s, i, l = Xe] = t[o];
    a && (ke(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && Nr(s), r.push({
      dir: a,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: i,
      modifiers: l
    }));
  }
  return e;
}
function mr(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let s = 0; s < o.length; s++) {
    const i = o[s];
    a && (i.oldValue = a[s].value);
    let l = i.dir[r];
    l && (Rn(), zt(l, n, 8, [
      e.el,
      i,
      e,
      t
    ]), ur());
  }
}
const Gn = Symbol("_leaveCb"), Na = Symbol("_enterCb");
function Fh() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Tt(() => {
    e.isMounted = !0;
  }), _l(() => {
    e.isUnmounting = !0;
  }), e;
}
const qt = [Function, Array], Rd = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: qt,
  onEnter: qt,
  onAfterEnter: qt,
  onEnterCancelled: qt,
  // leave
  onBeforeLeave: qt,
  onLeave: qt,
  onAfterLeave: qt,
  onLeaveCancelled: qt,
  // appear
  onBeforeAppear: qt,
  onAppear: qt,
  onAfterAppear: qt,
  onAppearCancelled: qt
}, Lh = {
  name: "BaseTransition",
  props: Rd,
  setup(e, { slots: t }) {
    const n = da(), r = Fh();
    return () => {
      const o = t.default && Fd(t.default(), !0);
      if (!o || !o.length)
        return;
      let a = o[0];
      if (o.length > 1) {
        let f = !1;
        for (const y of o)
          if (y.type !== Dt) {
            if (process.env.NODE_ENV !== "production" && f) {
              ue(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (a = y, f = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const s = Se(e), { mode: i } = s;
      if (process.env.NODE_ENV !== "production" && i && i !== "in-out" && i !== "out-in" && i !== "default" && ue(`invalid <transition> mode: ${i}`), r.isLeaving)
        return qs(a);
      const l = wu(a);
      if (!l)
        return qs(a);
      const c = Ni(
        l,
        s,
        r,
        n
      );
      xi(l, c);
      const d = n.subTree, u = d && wu(d);
      if (u && u.type !== Dt && !Er(l, u)) {
        const f = Ni(
          u,
          s,
          r,
          n
        );
        if (xi(u, f), i === "out-in")
          return r.isLeaving = !0, f.afterLeave = () => {
            r.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, qs(a);
        i === "in-out" && l.type !== Dt && (f.delayLeave = (y, h, g) => {
          const M = Id(
            r,
            u
          );
          M[String(u.key)] = u, y[Gn] = () => {
            h(), y[Gn] = void 0, delete c.delayedLeave;
          }, c.delayedLeave = g;
        });
      }
      return a;
    };
  }
}, Bh = Lh;
function Id(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Ni(e, t, n, r) {
  const {
    appear: o,
    mode: a,
    persisted: s = !1,
    onBeforeEnter: i,
    onEnter: l,
    onAfterEnter: c,
    onEnterCancelled: d,
    onBeforeLeave: u,
    onLeave: f,
    onAfterLeave: y,
    onLeaveCancelled: h,
    onBeforeAppear: g,
    onAppear: M,
    onAfterAppear: $,
    onAppearCancelled: A
  } = t, b = String(e.key), x = Id(n, e), V = (T, I) => {
    T && zt(
      T,
      r,
      9,
      I
    );
  }, k = (T, I) => {
    const R = I[1];
    V(T, I), ye(T) ? T.every((O) => O.length <= 1) && R() : T.length <= 1 && R();
  }, _ = {
    mode: a,
    persisted: s,
    beforeEnter(T) {
      let I = i;
      if (!n.isMounted)
        if (o)
          I = g || i;
        else
          return;
      T[Gn] && T[Gn](
        !0
        /* cancelled */
      );
      const R = x[b];
      R && Er(e, R) && R.el[Gn] && R.el[Gn](), V(I, [T]);
    },
    enter(T) {
      let I = l, R = c, O = d;
      if (!n.isMounted)
        if (o)
          I = M || l, R = $ || c, O = A || d;
        else
          return;
      let N = !1;
      const j = T[Na] = (U) => {
        N || (N = !0, U ? V(O, [T]) : V(R, [T]), _.delayedLeave && _.delayedLeave(), T[Na] = void 0);
      };
      I ? k(I, [T, j]) : j();
    },
    leave(T, I) {
      const R = String(e.key);
      if (T[Na] && T[Na](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return I();
      V(u, [T]);
      let O = !1;
      const N = T[Gn] = (j) => {
        O || (O = !0, I(), j ? V(h, [T]) : V(y, [T]), T[Gn] = void 0, x[R] === e && delete x[R]);
      };
      x[R] = e, f ? k(f, [T, N]) : N();
    },
    clone(T) {
      return Ni(T, t, n, r);
    }
  };
  return _;
}
function qs(e) {
  if (ua(e))
    return e = xn(e), e.children = null, e;
}
function wu(e) {
  return ua(e) ? (
    // #7121 ensure get the child component subtree in case
    // it's been replaced during HMR
    process.env.NODE_ENV !== "production" && e.component ? e.component.subTree : e.children ? e.children[0] : void 0
  ) : e;
}
function xi(e, t) {
  e.shapeFlag & 6 && e.component ? xi(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Fd(e, t = !1, n) {
  let r = [], o = 0;
  for (let a = 0; a < e.length; a++) {
    let s = e[a];
    const i = n == null ? s.key : String(n) + String(s.key != null ? s.key : a);
    s.type === Oe ? (s.patchFlag & 128 && o++, r = r.concat(
      Fd(s.children, t, i)
    )) : (t || s.type !== Dt) && r.push(i != null ? xn(s, { key: i }) : s);
  }
  if (o > 1)
    for (let a = 0; a < r.length; a++)
      r[a].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Mt(e, t) {
  return ke(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    nt({ name: e.name }, t, { setup: e })
  ) : e;
}
const Io = (e) => !!e.type.__asyncLoader, ua = (e) => e.type.__isKeepAlive;
function jh(e, t) {
  Ld(e, "a", t);
}
function Hh(e, t) {
  Ld(e, "da", t);
}
function Ld(e, t, n = _t) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (_s(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ua(o.parent.vnode) && Yh(r, t, n, o), o = o.parent;
  }
}
function Yh(e, t, n, r) {
  const o = _s(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  go(() => {
    el(r[t], o);
  }, n);
}
function _s(e, t, n = _t, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...s) => {
      if (n.isUnmounted)
        return;
      Rn();
      const i = fa(n), l = zt(t, n, e, s);
      return i(), ur(), l;
    });
    return r ? o.unshift(a) : o.push(a), a;
  } else if (process.env.NODE_ENV !== "production") {
    const o = gr(pl[e].replace(/ hook$/, ""));
    ue(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Fn = (e) => (t, n = _t) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Es || e === "sp") && _s(e, (...r) => t(...r), n)
), Uh = Fn("bm"), Tt = Fn("m"), Bd = Fn("bu"), Wh = Fn("u"), _l = Fn("bum"), go = Fn("um"), qh = Fn("sp"), Gh = Fn(
  "rtg"
), zh = Fn(
  "rtc"
);
function Kh(e, t = _t) {
  _s("ec", e, t);
}
function Ke(e, t, n, r) {
  let o;
  const a = n;
  if (ye(e) || rt(e)) {
    o = new Array(e.length);
    for (let s = 0, i = e.length; s < i; s++)
      o[s] = t(e[s], s, void 0, a);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && ue(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let s = 0; s < e; s++)
      o[s] = t(s + 1, s, void 0, a);
  } else if (We(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (s, i) => t(s, i, void 0, a)
      );
    else {
      const s = Object.keys(e);
      o = new Array(s.length);
      for (let i = 0, l = s.length; i < l; i++) {
        const c = s[i];
        o[i] = t(e[c], c, i, a);
      }
    }
  else
    o = [];
  return o;
}
function It(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (ye(r))
      for (let o = 0; o < r.length; o++)
        e[r[o].name] = r[o].fn;
    else r && (e[r.name] = r.key ? (...o) => {
      const a = r.fn(...o);
      return a && (a.key = r.key), a;
    } : r.fn);
  }
  return e;
}
function ge(e, t, n = {}, r, o) {
  if (pt.isCE || pt.parent && Io(pt.parent) && pt.parent.isCE)
    return t !== "default" && (n.name = t), et("slot", n, r);
  let a = e[t];
  process.env.NODE_ENV !== "production" && a && a.length > 1 && (ue(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), a = () => []), a && a._c && (a._d = !1), L();
  const s = a && jd(a(n)), i = $e(
    Oe,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      s && s.key || `_${t}`
    },
    s || [],
    s && e._ === 1 ? 64 : -2
  );
  return i.scopeId && (i.slotScopeIds = [i.scopeId + "-s"]), a && a._c && (a._d = !0), i;
}
function jd(e) {
  return e.some((t) => lo(t) ? !(t.type === Dt || t.type === Oe && !jd(t.children)) : !0) ? e : null;
}
const Di = (e) => e ? of(e) ? Os(e) || e.proxy : Di(e.parent) : null, Ar = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ nt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Zr(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Zr(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Zr(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Zr(e.refs) : e.refs,
    $parent: (e) => Di(e.parent),
    $root: (e) => Di(e.root),
    $emit: (e) => e.emit,
    $options: (e) => El(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, vs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Kt.bind(e.proxy)),
    $watch: (e) => Ih.bind(e)
  })
), wl = (e) => e === "_" || e === "$", Gs = (e, t) => e !== Xe && !e.__isScriptSetup && je(e, t), Hd = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: o, props: a, accessCache: s, type: i, appContext: l } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let c;
    if (t[0] !== "$") {
      const y = s[t];
      if (y !== void 0)
        switch (y) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return a[t];
        }
      else {
        if (Gs(r, t))
          return s[t] = 1, r[t];
        if (o !== Xe && je(o, t))
          return s[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && je(c, t)
        )
          return s[t] = 3, a[t];
        if (n !== Xe && je(n, t))
          return s[t] = 4, n[t];
        Ti && (s[t] = 0);
      }
    }
    const d = Ar[t];
    let u, f;
    if (d)
      return t === "$attrs" ? (St(e, "get", t), process.env.NODE_ENV !== "production" && qa()) : process.env.NODE_ENV !== "production" && t === "$slots" && St(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = i.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Xe && je(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      f = l.config.globalProperties, je(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && pt && (!rt(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Xe && wl(t[0]) && je(o, t) ? ue(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === pt && ue(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return Gs(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && je(o, t) ? (ue(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== Xe && je(r, t) ? (r[t] = n, !0) : je(e.props, t) ? (process.env.NODE_ENV !== "production" && ue(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && ue(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(a, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: a }
  }, s) {
    let i;
    return !!n[s] || e !== Xe && je(e, s) || Gs(t, s) || (i = a[0]) && je(i, s) || je(r, s) || je(Ar, s) || je(o.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : je(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Hd.ownKeys = (e) => (ue(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Qh(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Ar).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Ar[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: bt
    });
  }), t;
}
function Xh(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: bt
    });
  });
}
function Jh(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(Se(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (wl(r[0])) {
        ue(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: bt
      });
    }
  });
}
function Ur() {
  return Zh().slots;
}
function Zh() {
  const e = da();
  return process.env.NODE_ENV !== "production" && !e && ue("useContext() called without active instance."), e.setupContext || (e.setupContext = sf(e));
}
function Ga(e) {
  return ye(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Yd(e, t) {
  return !e || !t ? e || t : ye(e) && ye(t) ? e.concat(t) : nt({}, Ga(e), Ga(t));
}
function ev() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? ue(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Ti = !0;
function tv(e) {
  const t = El(e), n = e.proxy, r = e.ctx;
  Ti = !1, t.beforeCreate && Eu(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: s,
    watch: i,
    provide: l,
    inject: c,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: f,
    beforeUpdate: y,
    updated: h,
    activated: g,
    deactivated: M,
    beforeDestroy: $,
    beforeUnmount: A,
    destroyed: b,
    unmounted: x,
    render: V,
    renderTracked: k,
    renderTriggered: _,
    errorCaptured: T,
    serverPrefetch: I,
    // public API
    expose: R,
    inheritAttrs: O,
    // assets
    components: N,
    directives: j,
    filters: U
  } = t, E = process.env.NODE_ENV !== "production" ? ev() : null;
  if (process.env.NODE_ENV !== "production") {
    const [q] = e.propsOptions;
    if (q)
      for (const Q in q)
        E("Props", Q);
  }
  if (c && nv(c, r, E), s)
    for (const q in s) {
      const Q = s[q];
      ke(Q) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, q, {
        value: Q.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[q] = Q.bind(n), process.env.NODE_ENV !== "production" && E("Methods", q)) : process.env.NODE_ENV !== "production" && ue(
        `Method "${q}" has type "${typeof Q}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !ke(o) && ue(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const q = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && tl(q) && ue(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !We(q))
      process.env.NODE_ENV !== "production" && ue("data() should return an object.");
    else if (e.data = In(q), process.env.NODE_ENV !== "production")
      for (const Q in q)
        E("Data", Q), wl(Q[0]) || Object.defineProperty(r, Q, {
          configurable: !0,
          enumerable: !0,
          get: () => q[Q],
          set: bt
        });
  }
  if (Ti = !0, a)
    for (const q in a) {
      const Q = a[q], me = ke(Q) ? Q.bind(n, n) : ke(Q.get) ? Q.get.bind(n, n) : bt;
      process.env.NODE_ENV !== "production" && me === bt && ue(`Computed property "${q}" has no getter.`);
      const ae = !ke(Q) && ke(Q.set) ? Q.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        ue(
          `Write operation failed: computed property "${q}" is readonly.`
        );
      } : bt, m = oe({
        get: me,
        set: ae
      });
      Object.defineProperty(r, q, {
        enumerable: !0,
        configurable: !0,
        get: () => m.value,
        set: (p) => m.value = p
      }), process.env.NODE_ENV !== "production" && E("Computed", q);
    }
  if (i)
    for (const q in i)
      Ud(i[q], r, n, q);
  if (l) {
    const q = ke(l) ? l.call(n) : l;
    Reflect.ownKeys(q).forEach((Q) => {
      lv(Q, q[Q]);
    });
  }
  d && Eu(d, e, "c");
  function F(q, Q) {
    ye(Q) ? Q.forEach((me) => q(me.bind(n))) : Q && q(Q.bind(n));
  }
  if (F(Uh, u), F(Tt, f), F(Bd, y), F(Wh, h), F(jh, g), F(Hh, M), F(Kh, T), F(zh, k), F(Gh, _), F(_l, A), F(go, x), F(qh, I), ye(R))
    if (R.length) {
      const q = e.exposed || (e.exposed = {});
      R.forEach((Q) => {
        Object.defineProperty(q, Q, {
          get: () => n[Q],
          set: (me) => n[Q] = me
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === bt && (e.render = V), O != null && (e.inheritAttrs = O), N && (e.components = N), j && (e.directives = j);
}
function nv(e, t, n = bt) {
  ye(e) && (e = ki(e));
  for (const r in e) {
    const o = e[r];
    let a;
    We(o) ? "default" in o ? a = Fo(
      o.from || r,
      o.default,
      !0
    ) : a = Fo(o.from || r) : a = Fo(o), ot(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (s) => a.value = s
    }) : t[r] = a, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Eu(e, t, n) {
  zt(
    ye(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ud(e, t, n, r) {
  const o = r.includes(".") ? Vd(n, r) : () => n[r];
  if (rt(e)) {
    const a = t[e];
    ke(a) ? ft(o, a) : process.env.NODE_ENV !== "production" && ue(`Invalid watch handler specified by key "${e}"`, a);
  } else if (ke(e))
    ft(o, e.bind(n));
  else if (We(e))
    if (ye(e))
      e.forEach((a) => Ud(a, t, n, r));
    else {
      const a = ke(e.handler) ? e.handler.bind(n) : t[e.handler];
      ke(a) ? ft(o, a, e) : process.env.NODE_ENV !== "production" && ue(`Invalid watch handler specified by key "${e.handler}"`, a);
    }
  else process.env.NODE_ENV !== "production" && ue(`Invalid watch option: "${r}"`, e);
}
function El(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: s }
  } = e.appContext, i = a.get(t);
  let l;
  return i ? l = i : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (c) => za(l, c, s, !0)
  ), za(l, t, s)), We(t) && a.set(t, l), l;
}
function za(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && za(e, a, n, !0), o && o.forEach(
    (s) => za(e, s, n, !0)
  );
  for (const s in t)
    if (r && s === "expose")
      process.env.NODE_ENV !== "production" && ue(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const i = rv[s] || n && n[s];
      e[s] = i ? i(e[s], t[s]) : t[s];
    }
  return e;
}
const rv = {
  data: Ou,
  props: Nu,
  emits: Nu,
  // objects
  methods: Ao,
  computed: Ao,
  // lifecycle
  beforeCreate: $t,
  created: $t,
  beforeMount: $t,
  mounted: $t,
  beforeUpdate: $t,
  updated: $t,
  beforeDestroy: $t,
  beforeUnmount: $t,
  destroyed: $t,
  unmounted: $t,
  activated: $t,
  deactivated: $t,
  errorCaptured: $t,
  serverPrefetch: $t,
  // assets
  components: Ao,
  directives: Ao,
  // watch
  watch: av,
  // provide / inject
  provide: Ou,
  inject: ov
};
function Ou(e, t) {
  return t ? e ? function() {
    return nt(
      ke(e) ? e.call(this, this) : e,
      ke(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ov(e, t) {
  return Ao(ki(e), ki(t));
}
function ki(e) {
  if (ye(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function $t(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ao(e, t) {
  return e ? nt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Nu(e, t) {
  return e ? ye(e) && ye(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : nt(
    /* @__PURE__ */ Object.create(null),
    Ga(e),
    Ga(t ?? {})
  ) : t;
}
function av(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = nt(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = $t(e[r], t[r]);
  return n;
}
function Wd() {
  return {
    app: null,
    config: {
      isNativeTag: om,
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
let sv = 0;
function iv(e, t) {
  return function(r, o = null) {
    ke(r) || (r = nt({}, r)), o != null && !We(o) && (process.env.NODE_ENV !== "production" && ue("root props passed to app.mount() must be an object."), o = null);
    const a = Wd(), s = /* @__PURE__ */ new WeakSet();
    let i = !1;
    const l = a.app = {
      _uid: sv++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: Ru,
      get config() {
        return a.config;
      },
      set config(c) {
        process.env.NODE_ENV !== "production" && ue(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(c, ...d) {
        return s.has(c) ? process.env.NODE_ENV !== "production" && ue("Plugin has already been applied to target app.") : c && ke(c.install) ? (s.add(c), c.install(l, ...d)) : ke(c) ? (s.add(c), c(l, ...d)) : process.env.NODE_ENV !== "production" && ue(
          'A plugin must either be a function or an object with an "install" function.'
        ), l;
      },
      mixin(c) {
        return a.mixins.includes(c) ? process.env.NODE_ENV !== "production" && ue(
          "Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")
        ) : a.mixins.push(c), l;
      },
      component(c, d) {
        return process.env.NODE_ENV !== "production" && Vi(c, a.config), d ? (process.env.NODE_ENV !== "production" && a.components[c] && ue(`Component "${c}" has already been registered in target app.`), a.components[c] = d, l) : a.components[c];
      },
      directive(c, d) {
        return process.env.NODE_ENV !== "production" && $d(c), d ? (process.env.NODE_ENV !== "production" && a.directives[c] && ue(`Directive "${c}" has already been registered in target app.`), a.directives[c] = d, l) : a.directives[c];
      },
      mount(c, d, u) {
        if (i)
          process.env.NODE_ENV !== "production" && ue(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && c.__vue_app__ && ue(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const f = et(r, o);
          return f.appContext = a, u === !0 ? u = "svg" : u === !1 && (u = void 0), process.env.NODE_ENV !== "production" && (a.reload = () => {
            e(
              xn(f),
              c,
              u
            );
          }), d && t ? t(f, c) : e(f, c, u), i = !0, l._container = c, c.__vue_app__ = l, process.env.NODE_ENV !== "production" && (l._instance = f.component, vh(l, Ru)), Os(f.component) || f.component.proxy;
        }
      },
      unmount() {
        i ? (e(null, l._container), process.env.NODE_ENV !== "production" && (l._instance = null, yh(l)), delete l._container.__vue_app__) : process.env.NODE_ENV !== "production" && ue("Cannot unmount an app that is not mounted.");
      },
      provide(c, d) {
        return process.env.NODE_ENV !== "production" && c in a.provides && ue(
          `App already provides property with key "${String(c)}". It will be overwritten with the new value.`
        ), a.provides[c] = d, l;
      },
      runWithContext(c) {
        const d = ao;
        ao = l;
        try {
          return c();
        } finally {
          ao = d;
        }
      }
    };
    return l;
  };
}
let ao = null;
function lv(e, t) {
  if (!_t)
    process.env.NODE_ENV !== "production" && ue("provide() can only be used inside setup().");
  else {
    let n = _t.provides;
    const r = _t.parent && _t.parent.provides;
    r === n && (n = _t.provides = Object.create(r)), n[e] = t;
  }
}
function Fo(e, t, n = !1) {
  const r = _t || pt;
  if (r || ao) {
    const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : ao._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ke(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && ue(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && ue("inject() can only be used inside setup() or functional components.");
}
function uv() {
  return !!(_t || pt || ao);
}
function cv(e, t, n, r = !1) {
  const o = {}, a = {};
  Ha(a, ws, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), qd(e, t, o, a);
  for (const s in e.propsOptions[0])
    s in o || (o[s] = void 0);
  process.env.NODE_ENV !== "production" && zd(t || {}, o, e), n ? e.props = r ? o : qm(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function dv(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function fv(e, t, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: s }
  } = e, i = Se(o), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && dv(e)) && (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let f = d[u];
        if (ys(e.emitsOptions, f))
          continue;
        const y = t[f];
        if (l)
          if (je(a, f))
            y !== a[f] && (a[f] = y, c = !0);
          else {
            const h = an(f);
            o[h] = Si(
              l,
              i,
              h,
              y,
              e,
              !1
            );
          }
        else
          y !== a[f] && (a[f] = y, c = !0);
      }
    }
  } else {
    qd(e, t, o, a) && (c = !0);
    let d;
    for (const u in i)
      (!t || // for camelCase
      !je(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = En(u)) === u || !je(t, d))) && (l ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[u] = Si(
        l,
        i,
        u,
        void 0,
        e,
        !0
      )) : delete o[u]);
    if (a !== i)
      for (const u in a)
        (!t || !je(t, u)) && (delete a[u], c = !0);
  }
  c && yn(e, "set", "$attrs"), process.env.NODE_ENV !== "production" && zd(t || {}, o, e);
}
function qd(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let s = !1, i;
  if (t)
    for (let l in t) {
      if ($o(l))
        continue;
      const c = t[l];
      let d;
      o && je(o, d = an(l)) ? !a || !a.includes(d) ? n[d] = c : (i || (i = {}))[d] = c : ys(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, s = !0);
    }
  if (a) {
    const l = Se(n), c = i || Xe;
    for (let d = 0; d < a.length; d++) {
      const u = a[d];
      n[u] = Si(
        o,
        l,
        u,
        c[u],
        e,
        !je(c, u)
      );
    }
  }
  return s;
}
function Si(e, t, n, r, o, a) {
  const s = e[n];
  if (s != null) {
    const i = je(s, "default");
    if (i && r === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && ke(l)) {
        const { propsDefaults: c } = o;
        if (n in c)
          r = c[n];
        else {
          const d = fa(o);
          r = c[n] = l.call(
            null,
            t
          ), d();
        }
      } else
        r = l;
    }
    s[
      0
      /* shouldCast */
    ] && (a && !i ? r = !1 : s[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === En(n)) && (r = !0));
  }
  return r;
}
function Gd(e, t, n = !1) {
  const r = t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, s = {}, i = [];
  let l = !1;
  if (!ke(e)) {
    const d = (u) => {
      l = !0;
      const [f, y] = Gd(u, t, !0);
      nt(s, f), y && i.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!a && !l)
    return We(e) && r.set(e, no), no;
  if (ye(a))
    for (let d = 0; d < a.length; d++) {
      process.env.NODE_ENV !== "production" && !rt(a[d]) && ue("props must be strings when using array syntax.", a[d]);
      const u = an(a[d]);
      xu(u) && (s[u] = Xe);
    }
  else if (a) {
    process.env.NODE_ENV !== "production" && !We(a) && ue("invalid props options", a);
    for (const d in a) {
      const u = an(d);
      if (xu(u)) {
        const f = a[d], y = s[u] = ye(f) || ke(f) ? { type: f } : nt({}, f);
        if (y) {
          const h = Tu(Boolean, y.type), g = Tu(String, y.type);
          y[
            0
            /* shouldCast */
          ] = h > -1, y[
            1
            /* shouldCastTrue */
          ] = g < 0 || h < g, (h > -1 || je(y, "default")) && i.push(u);
        }
      }
    }
  }
  const c = [s, i];
  return We(e) && r.set(e, c), c;
}
function xu(e) {
  return e[0] !== "$" && !$o(e) ? !0 : (process.env.NODE_ENV !== "production" && ue(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Mi(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Du(e, t) {
  return Mi(e) === Mi(t);
}
function Tu(e, t) {
  return ye(t) ? t.findIndex((n) => Du(n, e)) : ke(t) && Du(t, e) ? 0 : -1;
}
function zd(e, t, n) {
  const r = Se(t), o = n.propsOptions[0];
  for (const a in o) {
    let s = o[a];
    s != null && pv(
      a,
      r[a],
      s,
      process.env.NODE_ENV !== "production" ? Zr(r) : r,
      !je(e, a) && !je(e, En(a))
    );
  }
}
function pv(e, t, n, r, o) {
  const { type: a, required: s, validator: i, skipCheck: l } = n;
  if (s && o) {
    ue('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (a != null && a !== !0 && !l) {
      let c = !1;
      const d = ye(a) ? a : [a], u = [];
      for (let f = 0; f < d.length && !c; f++) {
        const { valid: y, expectedType: h } = hv(t, d[f]);
        u.push(h || ""), c = y;
      }
      if (!c) {
        ue(vv(e, t, u));
        return;
      }
    }
    i && !i(t, r) && ue('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const mv = /* @__PURE__ */ $n(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function hv(e, t) {
  let n;
  const r = Mi(t);
  if (mv(r)) {
    const o = typeof e;
    n = o === r.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else r === "Object" ? n = We(e) : r === "Array" ? n = ye(e) : r === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function vv(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Fr).join(" | ")}`;
  const o = n[0], a = nl(t), s = ku(t, o), i = ku(t, a);
  return n.length === 1 && Su(o) && !yv(o, a) && (r += ` with value ${s}`), r += `, got ${a} `, Su(a) && (r += `with value ${i}.`), r;
}
function ku(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Su(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function yv(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Kd = (e) => e[0] === "_" || e === "$stable", Ol = (e) => ye(e) ? e.map(Jt) : [Jt(e)], gv = (e, t, n) => {
  if (t._n)
    return t;
  const r = Be((...o) => (process.env.NODE_ENV !== "production" && _t && (!n || n.root === _t.root) && ue(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ol(t(...o))), n);
  return r._c = !1, r;
}, Qd = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Kd(o))
      continue;
    const a = e[o];
    if (ke(a))
      t[o] = gv(o, a, r);
    else if (a != null) {
      process.env.NODE_ENV !== "production" && ue(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const s = Ol(a);
      t[o] = () => s;
    }
  }
}, Xd = (e, t) => {
  process.env.NODE_ENV !== "production" && !ua(e.vnode) && ue(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Ol(t);
  e.slots.default = () => n;
}, bv = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = Se(t), Ha(t, "_", n)) : Qd(
      t,
      e.slots = {}
    );
  } else
    e.slots = {}, t && Xd(e, t);
  Ha(e.slots, ws, 1);
}, _v = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, s = Xe;
  if (r.shapeFlag & 32) {
    const i = t._;
    i ? process.env.NODE_ENV !== "production" && er ? (nt(o, t), yn(e, "set", "$slots")) : n && i === 1 ? a = !1 : (nt(o, t), !n && i === 1 && delete o._) : (a = !t.$stable, Qd(t, o)), s = t;
  } else t && (Xd(e, t), s = { default: 1 });
  if (a)
    for (const i in o)
      !Kd(i) && s[i] == null && delete o[i];
};
function Pi(e, t, n, r, o = !1) {
  if (ye(e)) {
    e.forEach(
      (f, y) => Pi(
        f,
        t && (ye(t) ? t[y] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Io(r) && !o)
    return;
  const a = r.shapeFlag & 4 ? Os(r.component) || r.component.proxy : r.el, s = o ? null : a, { i, r: l } = e;
  if (process.env.NODE_ENV !== "production" && !i) {
    ue(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const c = t && t.r, d = i.refs === Xe ? i.refs = {} : i.refs, u = i.setupState;
  if (c != null && c !== l && (rt(c) ? (d[c] = null, je(u, c) && (u[c] = null)) : ot(c) && (c.value = null)), ke(l))
    Vn(l, i, 12, [s, d]);
  else {
    const f = rt(l), y = ot(l);
    if (f || y) {
      const h = () => {
        if (e.f) {
          const g = f ? je(u, l) ? u[l] : d[l] : l.value;
          o ? ye(g) && el(g, a) : ye(g) ? g.includes(a) || g.push(a) : f ? (d[l] = [a], je(u, l) && (u[l] = d[l])) : (l.value = [a], e.k && (d[e.k] = l.value));
        } else f ? (d[l] = s, je(u, l) && (u[l] = s)) : y ? (l.value = s, e.k && (d[e.k] = s)) : process.env.NODE_ENV !== "production" && ue("Invalid template ref type:", l, `(${typeof l})`);
      };
      s ? (h.id = -1, Ft(h, n)) : h();
    } else process.env.NODE_ENV !== "production" && ue("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let No, Xn;
function kn(e, t) {
  e.appContext.config.performance && Ka() && Xn.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && wh(e, t, Ka() ? Xn.now() : Date.now());
}
function Sn(e, t) {
  if (e.appContext.config.performance && Ka()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    Xn.mark(r), Xn.measure(
      `<${Ns(e, e.type)}> ${t}`,
      n,
      r
    ), Xn.clearMarks(n), Xn.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && Eh(e, t, Ka() ? Xn.now() : Date.now());
}
function Ka() {
  return No !== void 0 || (typeof window < "u" && window.performance ? (No = !0, Xn = window.performance) : No = !1), No;
}
function wv() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ft = Ah;
function Ev(e) {
  return Ov(e);
}
function Ov(e, t) {
  wv();
  const n = ol();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && vl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: o,
    patchProp: a,
    createElement: s,
    createText: i,
    createComment: l,
    setText: c,
    setElementText: d,
    parentNode: u,
    nextSibling: f,
    setScopeId: y = bt,
    insertStaticContent: h
  } = e, g = (v, w, W, S = null, X = null, re = null, fe = void 0, ie = null, ce = process.env.NODE_ENV !== "production" && er ? !1 : !!w.dynamicChildren) => {
    if (v === w)
      return;
    v && !Er(v, w) && (S = Le(v), P(v, X, re, !0), v = null), w.patchFlag === -2 && (ce = !1, w.dynamicChildren = null);
    const { type: ee, ref: de, shapeFlag: Ee } = w;
    switch (ee) {
      case ca:
        M(v, w, W, S);
        break;
      case Dt:
        $(v, w, W, S);
        break;
      case Aa:
        v == null ? A(w, W, S, fe) : process.env.NODE_ENV !== "production" && b(v, w, W, fe);
        break;
      case Oe:
        j(
          v,
          w,
          W,
          S,
          X,
          re,
          fe,
          ie,
          ce
        );
        break;
      default:
        Ee & 1 ? k(
          v,
          w,
          W,
          S,
          X,
          re,
          fe,
          ie,
          ce
        ) : Ee & 6 ? U(
          v,
          w,
          W,
          S,
          X,
          re,
          fe,
          ie,
          ce
        ) : Ee & 64 || Ee & 128 ? ee.process(
          v,
          w,
          W,
          S,
          X,
          re,
          fe,
          ie,
          ce,
          Pe
        ) : process.env.NODE_ENV !== "production" && ue("Invalid VNode type:", ee, `(${typeof ee})`);
    }
    de != null && X && Pi(de, v && v.ref, re, w || v, !w);
  }, M = (v, w, W, S) => {
    if (v == null)
      r(
        w.el = i(w.children),
        W,
        S
      );
    else {
      const X = w.el = v.el;
      w.children !== v.children && c(X, w.children);
    }
  }, $ = (v, w, W, S) => {
    v == null ? r(
      w.el = l(w.children || ""),
      W,
      S
    ) : w.el = v.el;
  }, A = (v, w, W, S) => {
    [v.el, v.anchor] = h(
      v.children,
      w,
      W,
      S,
      v.el,
      v.anchor
    );
  }, b = (v, w, W, S) => {
    if (w.children !== v.children) {
      const X = f(v.anchor);
      V(v), [w.el, w.anchor] = h(
        w.children,
        W,
        X,
        S
      );
    } else
      w.el = v.el, w.anchor = v.anchor;
  }, x = ({ el: v, anchor: w }, W, S) => {
    let X;
    for (; v && v !== w; )
      X = f(v), r(v, W, S), v = X;
    r(w, W, S);
  }, V = ({ el: v, anchor: w }) => {
    let W;
    for (; v && v !== w; )
      W = f(v), o(v), v = W;
    o(w);
  }, k = (v, w, W, S, X, re, fe, ie, ce) => {
    w.type === "svg" ? fe = "svg" : w.type === "math" && (fe = "mathml"), v == null ? _(
      w,
      W,
      S,
      X,
      re,
      fe,
      ie,
      ce
    ) : R(
      v,
      w,
      X,
      re,
      fe,
      ie,
      ce
    );
  }, _ = (v, w, W, S, X, re, fe, ie) => {
    let ce, ee;
    const { props: de, shapeFlag: Ee, transition: be, dirs: Te } = v;
    if (ce = v.el = s(
      v.type,
      re,
      de && de.is,
      de
    ), Ee & 8 ? d(ce, v.children) : Ee & 16 && I(
      v.children,
      ce,
      null,
      S,
      X,
      zs(v, re),
      fe,
      ie
    ), Te && mr(v, null, S, "created"), T(ce, v, v.scopeId, fe, S), de) {
      for (const Ue in de)
        Ue !== "value" && !$o(Ue) && a(
          ce,
          Ue,
          null,
          de[Ue],
          re,
          v.children,
          S,
          X,
          Me
        );
      "value" in de && a(ce, "value", null, de.value, re), (ee = de.onVnodeBeforeMount) && cn(ee, S, v);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(ce, "__vnode", {
      value: v,
      enumerable: !1
    }), Object.defineProperty(ce, "__vueParentComponent", {
      value: S,
      enumerable: !1
    })), Te && mr(v, null, S, "beforeMount");
    const Re = Nv(X, be);
    Re && be.beforeEnter(ce), r(ce, w, W), ((ee = de && de.onVnodeMounted) || Re || Te) && Ft(() => {
      ee && cn(ee, S, v), Re && be.enter(ce), Te && mr(v, null, S, "mounted");
    }, X);
  }, T = (v, w, W, S, X) => {
    if (W && y(v, W), S)
      for (let re = 0; re < S.length; re++)
        y(v, S[re]);
    if (X) {
      let re = X.subTree;
      if (process.env.NODE_ENV !== "production" && re.patchFlag > 0 && re.patchFlag & 2048 && (re = gl(re.children) || re), w === re) {
        const fe = X.vnode;
        T(
          v,
          fe,
          fe.scopeId,
          fe.slotScopeIds,
          X.parent
        );
      }
    }
  }, I = (v, w, W, S, X, re, fe, ie, ce = 0) => {
    for (let ee = ce; ee < v.length; ee++) {
      const de = v[ee] = ie ? zn(v[ee]) : Jt(v[ee]);
      g(
        null,
        de,
        w,
        W,
        S,
        X,
        re,
        fe,
        ie
      );
    }
  }, R = (v, w, W, S, X, re, fe) => {
    const ie = w.el = v.el;
    let { patchFlag: ce, dynamicChildren: ee, dirs: de } = w;
    ce |= v.patchFlag & 16;
    const Ee = v.props || Xe, be = w.props || Xe;
    let Te;
    if (W && hr(W, !1), (Te = be.onVnodeBeforeUpdate) && cn(Te, W, w, v), de && mr(w, v, W, "beforeUpdate"), W && hr(W, !0), process.env.NODE_ENV !== "production" && er && (ce = 0, fe = !1, ee = null), ee ? (O(
      v.dynamicChildren,
      ee,
      ie,
      W,
      S,
      zs(w, X),
      re
    ), process.env.NODE_ENV !== "production" && Lo(v, w)) : fe || me(
      v,
      w,
      ie,
      null,
      W,
      S,
      zs(w, X),
      re,
      !1
    ), ce > 0) {
      if (ce & 16)
        N(
          ie,
          w,
          Ee,
          be,
          W,
          S,
          X
        );
      else if (ce & 2 && Ee.class !== be.class && a(ie, "class", null, be.class, X), ce & 4 && a(ie, "style", Ee.style, be.style, X), ce & 8) {
        const Re = w.dynamicProps;
        for (let Ue = 0; Ue < Re.length; Ue++) {
          const Je = Re[Ue], B = Ee[Je], se = be[Je];
          (se !== B || Je === "value") && a(
            ie,
            Je,
            B,
            se,
            X,
            v.children,
            W,
            S,
            Me
          );
        }
      }
      ce & 1 && v.children !== w.children && d(ie, w.children);
    } else !fe && ee == null && N(
      ie,
      w,
      Ee,
      be,
      W,
      S,
      X
    );
    ((Te = be.onVnodeUpdated) || de) && Ft(() => {
      Te && cn(Te, W, w, v), de && mr(w, v, W, "updated");
    }, S);
  }, O = (v, w, W, S, X, re, fe) => {
    for (let ie = 0; ie < w.length; ie++) {
      const ce = v[ie], ee = w[ie], de = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ce.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ce.type === Oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Er(ce, ee) || // - In the case of a component, it could contain anything.
        ce.shapeFlag & 70) ? u(ce.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          W
        )
      );
      g(
        ce,
        ee,
        de,
        null,
        S,
        X,
        re,
        fe,
        !0
      );
    }
  }, N = (v, w, W, S, X, re, fe) => {
    if (W !== S) {
      if (W !== Xe)
        for (const ie in W)
          !$o(ie) && !(ie in S) && a(
            v,
            ie,
            W[ie],
            null,
            fe,
            w.children,
            X,
            re,
            Me
          );
      for (const ie in S) {
        if ($o(ie))
          continue;
        const ce = S[ie], ee = W[ie];
        ce !== ee && ie !== "value" && a(
          v,
          ie,
          ee,
          ce,
          fe,
          w.children,
          X,
          re,
          Me
        );
      }
      "value" in S && a(v, "value", W.value, S.value, fe);
    }
  }, j = (v, w, W, S, X, re, fe, ie, ce) => {
    const ee = w.el = v ? v.el : i(""), de = w.anchor = v ? v.anchor : i("");
    let { patchFlag: Ee, dynamicChildren: be, slotScopeIds: Te } = w;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (er || Ee & 2048) && (Ee = 0, ce = !1, be = null), Te && (ie = ie ? ie.concat(Te) : Te), v == null ? (r(ee, W, S), r(de, W, S), I(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      W,
      de,
      X,
      re,
      fe,
      ie,
      ce
    )) : Ee > 0 && Ee & 64 && be && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    v.dynamicChildren ? (O(
      v.dynamicChildren,
      be,
      W,
      X,
      re,
      fe,
      ie
    ), process.env.NODE_ENV !== "production" ? Lo(v, w) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (w.key != null || X && w === X.subTree) && Lo(
        v,
        w,
        !0
        /* shallow */
      )
    )) : me(
      v,
      w,
      W,
      de,
      X,
      re,
      fe,
      ie,
      ce
    );
  }, U = (v, w, W, S, X, re, fe, ie, ce) => {
    w.slotScopeIds = ie, v == null ? w.shapeFlag & 512 ? X.ctx.activate(
      w,
      W,
      S,
      fe,
      ce
    ) : E(
      w,
      W,
      S,
      X,
      re,
      fe,
      ce
    ) : F(v, w, ce);
  }, E = (v, w, W, S, X, re, fe) => {
    const ie = v.component = Vv(
      v,
      S,
      X
    );
    if (process.env.NODE_ENV !== "production" && ie.type.__hmrId && fh(ie), process.env.NODE_ENV !== "production" && (Pa(v), kn(ie, "mount")), ua(v) && (ie.ctx.renderer = Pe), process.env.NODE_ENV !== "production" && kn(ie, "init"), Rv(ie), process.env.NODE_ENV !== "production" && Sn(ie, "init"), ie.asyncDep) {
      if (X && X.registerDep(ie, q), !v.el) {
        const ce = ie.subTree = et(Dt);
        $(null, ce, w, W);
      }
    } else
      q(
        ie,
        v,
        w,
        W,
        X,
        re,
        fe
      );
    process.env.NODE_ENV !== "production" && (Ca(), Sn(ie, "mount"));
  }, F = (v, w, W) => {
    const S = w.component = v.component;
    if (Sh(v, w, W))
      if (S.asyncDep && !S.asyncResolved) {
        process.env.NODE_ENV !== "production" && Pa(w), Q(S, w, W), process.env.NODE_ENV !== "production" && Ca();
        return;
      } else
        S.next = w, ch(S.update), S.effect.dirty = !0, S.update();
    else
      w.el = v.el, S.vnode = w;
  }, q = (v, w, W, S, X, re, fe) => {
    const ie = () => {
      if (v.isMounted) {
        let { next: de, bu: Ee, u: be, parent: Te, vnode: Re } = v;
        {
          const _e = Jd(v);
          if (_e) {
            de && (de.el = Re.el, Q(v, de, fe)), _e.asyncDep.then(() => {
              v.isUnmounted || ie();
            });
            return;
          }
        }
        let Ue = de, Je;
        process.env.NODE_ENV !== "production" && Pa(de || v.vnode), hr(v, !1), de ? (de.el = Re.el, Q(v, de, fe)) : de = Re, Ee && Qr(Ee), (Je = de.props && de.props.onVnodeBeforeUpdate) && cn(Je, Te, de, Re), hr(v, !0), process.env.NODE_ENV !== "production" && kn(v, "render");
        const B = Ws(v);
        process.env.NODE_ENV !== "production" && Sn(v, "render");
        const se = v.subTree;
        v.subTree = B, process.env.NODE_ENV !== "production" && kn(v, "patch"), g(
          se,
          B,
          // parent may have changed if it's in a teleport
          u(se.el),
          // anchor may have changed if it's in a fragment
          Le(se),
          v,
          X,
          re
        ), process.env.NODE_ENV !== "production" && Sn(v, "patch"), de.el = B.el, Ue === null && Mh(v, B.el), be && Ft(be, X), (Je = de.props && de.props.onVnodeUpdated) && Ft(
          () => cn(Je, Te, de, Re),
          X
        ), process.env.NODE_ENV !== "production" && Td(v), process.env.NODE_ENV !== "production" && Ca();
      } else {
        let de;
        const { el: Ee, props: be } = w, { bm: Te, m: Re, parent: Ue } = v, Je = Io(w);
        if (hr(v, !1), Te && Qr(Te), !Je && (de = be && be.onVnodeBeforeMount) && cn(de, Ue, w), hr(v, !0), Ee && le) {
          const B = () => {
            process.env.NODE_ENV !== "production" && kn(v, "render"), v.subTree = Ws(v), process.env.NODE_ENV !== "production" && Sn(v, "render"), process.env.NODE_ENV !== "production" && kn(v, "hydrate"), le(
              Ee,
              v.subTree,
              v,
              X,
              null
            ), process.env.NODE_ENV !== "production" && Sn(v, "hydrate");
          };
          Je ? w.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !v.isUnmounted && B()
          ) : B();
        } else {
          process.env.NODE_ENV !== "production" && kn(v, "render");
          const B = v.subTree = Ws(v);
          process.env.NODE_ENV !== "production" && Sn(v, "render"), process.env.NODE_ENV !== "production" && kn(v, "patch"), g(
            null,
            B,
            W,
            S,
            v,
            X,
            re
          ), process.env.NODE_ENV !== "production" && Sn(v, "patch"), w.el = B.el;
        }
        if (Re && Ft(Re, X), !Je && (de = be && be.onVnodeMounted)) {
          const B = w;
          Ft(
            () => cn(de, Ue, B),
            X
          );
        }
        (w.shapeFlag & 256 || Ue && Io(Ue.vnode) && Ue.vnode.shapeFlag & 256) && v.a && Ft(v.a, X), v.isMounted = !0, process.env.NODE_ENV !== "production" && gh(v), w = W = S = null;
      }
    }, ce = v.effect = new sl(
      ie,
      bt,
      () => vs(ee),
      v.scope
      // track it in component's effect scope
    ), ee = v.update = () => {
      ce.dirty && ce.run();
    };
    ee.id = v.uid, hr(v, !0), process.env.NODE_ENV !== "production" && (ce.onTrack = v.rtc ? (de) => Qr(v.rtc, de) : void 0, ce.onTrigger = v.rtg ? (de) => Qr(v.rtg, de) : void 0, ee.ownerInstance = v), ee();
  }, Q = (v, w, W) => {
    w.component = v;
    const S = v.vnode.props;
    v.vnode = w, v.next = null, fv(v, w.props, S, W), _v(v, w.children, W), Rn(), vu(v), ur();
  }, me = (v, w, W, S, X, re, fe, ie, ce = !1) => {
    const ee = v && v.children, de = v ? v.shapeFlag : 0, Ee = w.children, { patchFlag: be, shapeFlag: Te } = w;
    if (be > 0) {
      if (be & 128) {
        m(
          ee,
          Ee,
          W,
          S,
          X,
          re,
          fe,
          ie,
          ce
        );
        return;
      } else if (be & 256) {
        ae(
          ee,
          Ee,
          W,
          S,
          X,
          re,
          fe,
          ie,
          ce
        );
        return;
      }
    }
    Te & 8 ? (de & 16 && Me(ee, X, re), Ee !== ee && d(W, Ee)) : de & 16 ? Te & 16 ? m(
      ee,
      Ee,
      W,
      S,
      X,
      re,
      fe,
      ie,
      ce
    ) : Me(ee, X, re, !0) : (de & 8 && d(W, ""), Te & 16 && I(
      Ee,
      W,
      S,
      X,
      re,
      fe,
      ie,
      ce
    ));
  }, ae = (v, w, W, S, X, re, fe, ie, ce) => {
    v = v || no, w = w || no;
    const ee = v.length, de = w.length, Ee = Math.min(ee, de);
    let be;
    for (be = 0; be < Ee; be++) {
      const Te = w[be] = ce ? zn(w[be]) : Jt(w[be]);
      g(
        v[be],
        Te,
        W,
        null,
        X,
        re,
        fe,
        ie,
        ce
      );
    }
    ee > de ? Me(
      v,
      X,
      re,
      !0,
      !1,
      Ee
    ) : I(
      w,
      W,
      S,
      X,
      re,
      fe,
      ie,
      ce,
      Ee
    );
  }, m = (v, w, W, S, X, re, fe, ie, ce) => {
    let ee = 0;
    const de = w.length;
    let Ee = v.length - 1, be = de - 1;
    for (; ee <= Ee && ee <= be; ) {
      const Te = v[ee], Re = w[ee] = ce ? zn(w[ee]) : Jt(w[ee]);
      if (Er(Te, Re))
        g(
          Te,
          Re,
          W,
          null,
          X,
          re,
          fe,
          ie,
          ce
        );
      else
        break;
      ee++;
    }
    for (; ee <= Ee && ee <= be; ) {
      const Te = v[Ee], Re = w[be] = ce ? zn(w[be]) : Jt(w[be]);
      if (Er(Te, Re))
        g(
          Te,
          Re,
          W,
          null,
          X,
          re,
          fe,
          ie,
          ce
        );
      else
        break;
      Ee--, be--;
    }
    if (ee > Ee) {
      if (ee <= be) {
        const Te = be + 1, Re = Te < de ? w[Te].el : S;
        for (; ee <= be; )
          g(
            null,
            w[ee] = ce ? zn(w[ee]) : Jt(w[ee]),
            W,
            Re,
            X,
            re,
            fe,
            ie,
            ce
          ), ee++;
      }
    } else if (ee > be)
      for (; ee <= Ee; )
        P(v[ee], X, re, !0), ee++;
    else {
      const Te = ee, Re = ee, Ue = /* @__PURE__ */ new Map();
      for (ee = Re; ee <= be; ee++) {
        const ve = w[ee] = ce ? zn(w[ee]) : Jt(w[ee]);
        ve.key != null && (process.env.NODE_ENV !== "production" && Ue.has(ve.key) && ue(
          "Duplicate keys found during update:",
          JSON.stringify(ve.key),
          "Make sure keys are unique."
        ), Ue.set(ve.key, ee));
      }
      let Je, B = 0;
      const se = be - Re + 1;
      let _e = !1, Ce = 0;
      const te = new Array(se);
      for (ee = 0; ee < se; ee++)
        te[ee] = 0;
      for (ee = Te; ee <= Ee; ee++) {
        const ve = v[ee];
        if (B >= se) {
          P(ve, X, re, !0);
          continue;
        }
        let gt;
        if (ve.key != null)
          gt = Ue.get(ve.key);
        else
          for (Je = Re; Je <= be; Je++)
            if (te[Je - Re] === 0 && Er(ve, w[Je])) {
              gt = Je;
              break;
            }
        gt === void 0 ? P(ve, X, re, !0) : (te[gt - Re] = ee + 1, gt >= Ce ? Ce = gt : _e = !0, g(
          ve,
          w[gt],
          W,
          null,
          X,
          re,
          fe,
          ie,
          ce
        ), B++);
      }
      const xe = _e ? xv(te) : no;
      for (Je = xe.length - 1, ee = se - 1; ee >= 0; ee--) {
        const ve = Re + ee, gt = w[ve], jt = ve + 1 < de ? w[ve + 1].el : S;
        te[ee] === 0 ? g(
          null,
          gt,
          W,
          jt,
          X,
          re,
          fe,
          ie,
          ce
        ) : _e && (Je < 0 || ee !== xe[Je] ? p(gt, W, jt, 2) : Je--);
      }
    }
  }, p = (v, w, W, S, X = null) => {
    const { el: re, type: fe, transition: ie, children: ce, shapeFlag: ee } = v;
    if (ee & 6) {
      p(v.component.subTree, w, W, S);
      return;
    }
    if (ee & 128) {
      v.suspense.move(w, W, S);
      return;
    }
    if (ee & 64) {
      fe.move(v, w, W, Pe);
      return;
    }
    if (fe === Oe) {
      r(re, w, W);
      for (let Ee = 0; Ee < ce.length; Ee++)
        p(ce[Ee], w, W, S);
      r(v.anchor, w, W);
      return;
    }
    if (fe === Aa) {
      x(v, w, W);
      return;
    }
    if (S !== 2 && ee & 1 && ie)
      if (S === 0)
        ie.beforeEnter(re), r(re, w, W), Ft(() => ie.enter(re), X);
      else {
        const { leave: Ee, delayLeave: be, afterLeave: Te } = ie, Re = () => r(re, w, W), Ue = () => {
          Ee(re, () => {
            Re(), Te && Te();
          });
        };
        be ? be(re, Re, Ue) : Ue();
      }
    else
      r(re, w, W);
  }, P = (v, w, W, S = !1, X = !1) => {
    const {
      type: re,
      props: fe,
      ref: ie,
      children: ce,
      dynamicChildren: ee,
      shapeFlag: de,
      patchFlag: Ee,
      dirs: be
    } = v;
    if (ie != null && Pi(ie, null, W, v, !0), de & 256) {
      w.ctx.deactivate(v);
      return;
    }
    const Te = de & 1 && be, Re = !Io(v);
    let Ue;
    if (Re && (Ue = fe && fe.onVnodeBeforeUnmount) && cn(Ue, w, v), de & 6)
      Y(v.component, W, S);
    else {
      if (de & 128) {
        v.suspense.unmount(W, S);
        return;
      }
      Te && mr(v, null, w, "beforeUnmount"), de & 64 ? v.type.remove(
        v,
        w,
        W,
        X,
        Pe,
        S
      ) : ee && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (re !== Oe || Ee > 0 && Ee & 64) ? Me(
        ee,
        w,
        W,
        !1,
        !0
      ) : (re === Oe && Ee & 384 || !X && de & 16) && Me(ce, w, W), S && K(v);
    }
    (Re && (Ue = fe && fe.onVnodeUnmounted) || Te) && Ft(() => {
      Ue && cn(Ue, w, v), Te && mr(v, null, w, "unmounted");
    }, W);
  }, K = (v) => {
    const { type: w, el: W, anchor: S, transition: X } = v;
    if (w === Oe) {
      process.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && X && !X.persisted ? v.children.forEach((fe) => {
        fe.type === Dt ? o(fe.el) : K(fe);
      }) : pe(W, S);
      return;
    }
    if (w === Aa) {
      V(v);
      return;
    }
    const re = () => {
      o(W), X && !X.persisted && X.afterLeave && X.afterLeave();
    };
    if (v.shapeFlag & 1 && X && !X.persisted) {
      const { leave: fe, delayLeave: ie } = X, ce = () => fe(W, re);
      ie ? ie(v.el, re, ce) : ce();
    } else
      re();
  }, pe = (v, w) => {
    let W;
    for (; v !== w; )
      W = f(v), o(v), v = W;
    o(w);
  }, Y = (v, w, W) => {
    process.env.NODE_ENV !== "production" && v.type.__hmrId && ph(v);
    const { bum: S, scope: X, update: re, subTree: fe, um: ie } = v;
    S && Qr(S), X.stop(), re && (re.active = !1, P(fe, v, w, W)), ie && Ft(ie, w), Ft(() => {
      v.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && v.asyncDep && !v.asyncResolved && v.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve()), process.env.NODE_ENV !== "production" && _h(v);
  }, Me = (v, w, W, S = !1, X = !1, re = 0) => {
    for (let fe = re; fe < v.length; fe++)
      P(v[fe], w, W, S, X);
  }, Le = (v) => v.shapeFlag & 6 ? Le(v.component.subTree) : v.shapeFlag & 128 ? v.suspense.next() : f(v.anchor || v.el);
  let H = !1;
  const we = (v, w, W) => {
    v == null ? w._vnode && P(w._vnode, null, null, !0) : g(
      w._vnode || null,
      v,
      w,
      null,
      null,
      null,
      W
    ), H || (H = !0, vu(), Nd(), H = !1), w._vnode = v;
  }, Pe = {
    p: g,
    um: P,
    m: p,
    r: K,
    mt: E,
    mc: I,
    pc: me,
    pbc: O,
    n: Le,
    o: e
  };
  let C, le;
  return {
    render: we,
    hydrate: C,
    createApp: iv(we, C)
  };
}
function zs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function hr({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Nv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Lo(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (ye(r) && ye(o))
    for (let a = 0; a < r.length; a++) {
      const s = r[a];
      let i = o[a];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = o[a] = zn(o[a]), i.el = s.el), n || Lo(s, i)), i.type === ca && (i.el = s.el), process.env.NODE_ENV !== "production" && i.type === Dt && !i.el && (i.el = s.el);
    }
}
function xv(e) {
  const t = e.slice(), n = [0];
  let r, o, a, s, i;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const c = e[r];
    if (c !== 0) {
      if (o = n[n.length - 1], e[o] < c) {
        t[r] = o, n.push(r);
        continue;
      }
      for (a = 0, s = n.length - 1; a < s; )
        i = a + s >> 1, e[n[i]] < c ? a = i + 1 : s = i;
      c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, s = n[a - 1]; a-- > 0; )
    n[a] = s, s = t[s];
  return n;
}
function Jd(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Jd(t);
}
const Dv = (e) => e.__isTeleport, so = (e) => e && (e.disabled || e.disabled === ""), Mu = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Pu = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ci = (e, t) => {
  const n = e && e.to;
  if (rt(n))
    if (t) {
      const r = t(n);
      return r || process.env.NODE_ENV !== "production" && ue(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), r;
    } else
      return process.env.NODE_ENV !== "production" && ue(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return process.env.NODE_ENV !== "production" && !n && !so(e) && ue(`Invalid Teleport target: ${n}`), n;
}, Tv = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, o, a, s, i, l, c) {
    const {
      mc: d,
      pc: u,
      pbc: f,
      o: { insert: y, querySelector: h, createText: g, createComment: M }
    } = c, $ = so(t.props);
    let { shapeFlag: A, children: b, dynamicChildren: x } = t;
    if (process.env.NODE_ENV !== "production" && er && (l = !1, x = null), e == null) {
      const V = t.el = process.env.NODE_ENV !== "production" ? M("teleport start") : g(""), k = t.anchor = process.env.NODE_ENV !== "production" ? M("teleport end") : g("");
      y(V, n, r), y(k, n, r);
      const _ = t.target = Ci(t.props, h), T = t.targetAnchor = g("");
      _ ? (y(T, _), s === "svg" || Mu(_) ? s = "svg" : (s === "mathml" || Pu(_)) && (s = "mathml")) : process.env.NODE_ENV !== "production" && !$ && ue("Invalid Teleport target on mount:", _, `(${typeof _})`);
      const I = (R, O) => {
        A & 16 && d(
          b,
          R,
          O,
          o,
          a,
          s,
          i,
          l
        );
      };
      $ ? I(n, k) : _ && I(_, T);
    } else {
      t.el = e.el;
      const V = t.anchor = e.anchor, k = t.target = e.target, _ = t.targetAnchor = e.targetAnchor, T = so(e.props), I = T ? n : k, R = T ? V : _;
      if (s === "svg" || Mu(k) ? s = "svg" : (s === "mathml" || Pu(k)) && (s = "mathml"), x ? (f(
        e.dynamicChildren,
        x,
        I,
        o,
        a,
        s,
        i
      ), Lo(e, t, !0)) : l || u(
        e,
        t,
        I,
        R,
        o,
        a,
        s,
        i,
        !1
      ), $)
        T ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : xa(
          t,
          n,
          V,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const O = t.target = Ci(
          t.props,
          h
        );
        O ? xa(
          t,
          O,
          null,
          c,
          0
        ) : process.env.NODE_ENV !== "production" && ue(
          "Invalid Teleport target on update:",
          k,
          `(${typeof k})`
        );
      } else T && xa(
        t,
        k,
        _,
        c,
        1
      );
    }
    Zd(t);
  },
  remove(e, t, n, r, { um: o, o: { remove: a } }, s) {
    const { shapeFlag: i, children: l, anchor: c, targetAnchor: d, target: u, props: f } = e;
    if (u && a(d), s && a(c), i & 16) {
      const y = s || !so(f);
      for (let h = 0; h < l.length; h++) {
        const g = l[h];
        o(
          g,
          t,
          n,
          y,
          !!g.dynamicChildren
        );
      }
    }
  },
  move: xa,
  hydrate: kv
};
function xa(e, t, n, { o: { insert: r }, m: o }, a = 2) {
  a === 0 && r(e.targetAnchor, t, n);
  const { el: s, anchor: i, shapeFlag: l, children: c, props: d } = e, u = a === 2;
  if (u && r(s, t, n), (!u || so(d)) && l & 16)
    for (let f = 0; f < c.length; f++)
      o(
        c[f],
        t,
        n,
        2
      );
  u && r(i, t, n);
}
function kv(e, t, n, r, o, a, {
  o: { nextSibling: s, parentNode: i, querySelector: l }
}, c) {
  const d = t.target = Ci(
    t.props,
    l
  );
  if (d) {
    const u = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (so(t.props))
        t.anchor = c(
          s(e),
          t,
          i(e),
          n,
          r,
          o,
          a
        ), t.targetAnchor = u;
      else {
        t.anchor = s(e);
        let f = u;
        for (; f; )
          if (f = s(f), f && f.nodeType === 8 && f.data === "teleport anchor") {
            t.targetAnchor = f, d._lpa = t.targetAnchor && s(t.targetAnchor);
            break;
          }
        c(
          u,
          t,
          d,
          n,
          r,
          o,
          a
        );
      }
    Zd(t);
  }
  return t.anchor && s(t.anchor);
}
const Sv = Tv;
function Zd(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
    t.ut();
  }
}
const Oe = Symbol.for("v-fgt"), ca = Symbol.for("v-txt"), Dt = Symbol.for("v-cmt"), Aa = Symbol.for("v-stc"), Bo = [];
let nn = null;
function L(e = !1) {
  Bo.push(nn = e ? null : []);
}
function Mv() {
  Bo.pop(), nn = Bo[Bo.length - 1] || null;
}
let Qo = 1;
function Cu(e) {
  Qo += e;
}
function ef(e) {
  return e.dynamicChildren = Qo > 0 ? nn || no : null, Mv(), Qo > 0 && nn && nn.push(e), e;
}
function z(e, t, n, r, o, a) {
  return ef(
    Ne(
      e,
      t,
      n,
      r,
      o,
      a,
      !0
    )
  );
}
function $e(e, t, n, r, o) {
  return ef(
    et(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function lo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Er(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && Xr.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Pv = (...e) => nf(
  ...e
), ws = "__vInternal", tf = ({ key: e }) => e ?? null, Va = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? rt(e) || ot(e) || ke(e) ? { i: pt, r: e, k: t, f: !!n } : e : null);
function Ne(e, t = null, n = null, r = 0, o = null, a = e === Oe ? 0 : 1, s = !1, i = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && tf(t),
    ref: t && Va(t),
    scopeId: gs,
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
    shapeFlag: a,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: pt
  };
  return i ? (Nl(l, n), a & 128 && e.normalize(l)) : n && (l.shapeFlag |= rt(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && ue("VNode created with invalid key (NaN). VNode type:", l.type), Qo > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  nn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && nn.push(l), l;
}
const et = process.env.NODE_ENV !== "production" ? Pv : nf;
function nf(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === Cd) && (process.env.NODE_ENV !== "production" && !e && ue(`Invalid vnode type when creating vnode: ${e}.`), e = Dt), lo(e)) {
    const i = xn(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Nl(i, n), Qo > 0 && !a && nn && (i.shapeFlag & 6 ? nn[nn.indexOf(e)] = i : nn.push(i)), i.patchFlag |= -2, i;
  }
  if (lf(e) && (e = e.__vccOpts), t) {
    t = At(t);
    let { class: i, style: l } = t;
    i && !rt(i) && (t.class = Fe(i)), We(l) && (Ua(l) && !ye(l) && (l = nt({}, l)), t.style = Rt(l));
  }
  const s = rt(e) ? 1 : Ch(e) ? 128 : Dv(e) ? 64 : We(e) ? 4 : ke(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && s & 4 && Ua(e) && (e = Se(e), ue(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Ne(
    e,
    t,
    n,
    r,
    o,
    s,
    a,
    !0
  );
}
function At(e) {
  return e ? Ua(e) || ws in e ? nt({}, e) : e : null;
}
function xn(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: a, children: s } = e, i = t ? xt(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: i,
    key: i && tf(i),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? ye(o) ? o.concat(Va(t)) : [o, Va(t)] : Va(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && a === -1 && ye(s) ? s.map(rf) : s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Oe ? a === -1 ? 16 : a | 16 : a,
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
    ssContent: e.ssContent && xn(e.ssContent),
    ssFallback: e.ssFallback && xn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function rf(e) {
  const t = xn(e);
  return ye(e.children) && (t.children = e.children.map(rf)), t;
}
function sn(e = " ", t = 0) {
  return et(ca, null, e, t);
}
function J(e = "", t = !1) {
  return t ? (L(), $e(Dt, null, e)) : et(Dt, null, e);
}
function Jt(e) {
  return e == null || typeof e == "boolean" ? et(Dt) : ye(e) ? et(
    Oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? zn(e) : et(ca, null, String(e));
}
function zn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xn(e);
}
function Nl(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (ye(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Nl(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(ws in t) ? t._ctx = pt : o === 3 && pt && (pt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ke(t) ? (t = { default: t, _ctx: pt }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [sn(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function xt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Fe([t.class, r.class]));
      else if (o === "style")
        t.style = Rt([t.style, r.style]);
      else if (aa(o)) {
        const a = t[o], s = r[o];
        s && a !== s && !(ye(a) && a.includes(s)) && (t[o] = a ? [].concat(a, s) : s);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function cn(e, t, n, r = null) {
  zt(e, t, 7, [
    n,
    r
  ]);
}
const Cv = Wd();
let Av = 0;
function Vv(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Cv, a = {
    uid: Av++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new ed(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Gd(r, o),
    emitsOptions: Sd(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Xe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Xe,
    data: Xe,
    props: Xe,
    attrs: Xe,
    slots: Xe,
    refs: Xe,
    setupState: Xe,
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
  return process.env.NODE_ENV !== "production" ? a.ctx = Qh(a) : a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Nh.bind(null, a), e.ce && e.ce(a), a;
}
let _t = null;
const da = () => _t || pt;
let Qa, Ai;
{
  const e = ol(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((s) => s(a)) : o[0](a);
    };
  };
  Qa = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => _t = n
  ), Ai = t(
    "__VUE_SSR_SETTERS__",
    (n) => Es = n
  );
}
const fa = (e) => {
  const t = _t;
  return Qa(e), e.scope.on(), () => {
    e.scope.off(), Qa(t);
  };
}, Au = () => {
  _t && _t.scope.off(), Qa(null);
}, $v = /* @__PURE__ */ $n("slot,component");
function Vi(e, { isNativeTag: t }) {
  ($v(e) || t(e)) && ue(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function of(e) {
  return e.vnode.shapeFlag & 4;
}
let Es = !1;
function Rv(e, t = !1) {
  t && Ai(t);
  const { props: n, children: r } = e.vnode, o = of(e);
  cv(e, n, o, t), bv(e, r);
  const a = o ? Iv(e, t) : void 0;
  return t && Ai(!1), a;
}
function Iv(e, t) {
  var n;
  const r = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && Vi(r.name, e.appContext.config), r.components) {
      const a = Object.keys(r.components);
      for (let s = 0; s < a.length; s++)
        Vi(a[s], e.appContext.config);
    }
    if (r.directives) {
      const a = Object.keys(r.directives);
      for (let s = 0; s < a.length; s++)
        $d(a[s]);
    }
    r.compilerOptions && Fv() && ue(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Cn(new Proxy(e.ctx, Hd)), process.env.NODE_ENV !== "production" && Xh(e);
  const { setup: o } = r;
  if (o) {
    const a = e.setupContext = o.length > 1 ? sf(e) : null, s = fa(e);
    Rn();
    const i = Vn(
      o,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Zr(e.props) : e.props,
        a
      ]
    );
    if (ur(), s(), tl(i)) {
      if (i.then(Au, Au), t)
        return i.then((l) => {
          Vu(e, l, t);
        }).catch((l) => {
          ia(l, e, 0);
        });
      if (e.asyncDep = i, process.env.NODE_ENV !== "production" && !e.suspense) {
        const l = (n = r.name) != null ? n : "Anonymous";
        ue(
          `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Vu(e, i, t);
  } else
    af(e, t);
}
function Vu(e, t, n) {
  ke(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : We(t) ? (process.env.NODE_ENV !== "production" && lo(t) && ue(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = gd(t), process.env.NODE_ENV !== "production" && Jh(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && ue(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), af(e, n);
}
let $i;
const Fv = () => !$i;
function af(e, t, n) {
  const r = e.type;
  if (!e.render) {
    if (!t && $i && !r.render) {
      const o = r.template || El(e).template;
      if (o) {
        process.env.NODE_ENV !== "production" && kn(e, "compile");
        const { isCustomElement: a, compilerOptions: s } = e.appContext.config, { delimiters: i, compilerOptions: l } = r, c = nt(
          nt(
            {
              isCustomElement: a,
              delimiters: i
            },
            s
          ),
          l
        );
        r.render = $i(o, c), process.env.NODE_ENV !== "production" && Sn(e, "compile");
      }
    }
    e.render = r.render || bt;
  }
  {
    const o = fa(e);
    Rn();
    try {
      tv(e);
    } finally {
      ur(), o();
    }
  }
  process.env.NODE_ENV !== "production" && !r.render && e.render === bt && !t && (r.template ? ue(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : ue("Component is missing template or render function."));
}
function $u(e) {
  return e.attrsProxy || (e.attrsProxy = new Proxy(
    e.attrs,
    process.env.NODE_ENV !== "production" ? {
      get(t, n) {
        return qa(), St(e, "get", "$attrs"), t[n];
      },
      set() {
        return ue("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return ue("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return St(e, "get", "$attrs"), t[n];
      }
    }
  ));
}
function Lv(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return St(e, "get", "$slots"), t[n];
    }
  }));
}
function sf(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && ue("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (ye(n) ? r = "array" : ot(n) && (r = "ref")), r !== "object" && ue(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  return process.env.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return $u(e);
    },
    get slots() {
      return Lv(e);
    },
    get emit() {
      return (n, ...r) => e.emit(n, ...r);
    },
    expose: t
  }) : {
    get attrs() {
      return $u(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Os(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(gd(Cn(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Ar)
          return Ar[n](e);
      },
      has(t, n) {
        return n in t || n in Ar;
      }
    }));
}
const Bv = /(?:^|[-_])(\w)/g, jv = (e) => e.replace(Bv, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function xl(e, t = !0) {
  return ke(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ns(e, t, n = !1) {
  let r = xl(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (a) => {
      for (const s in a)
        if (a[s] === t)
          return s;
    };
    r = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return r ? jv(r) : n ? "App" : "Anonymous";
}
function lf(e) {
  return ke(e) && "__vccOpts" in e;
}
const oe = (e, t) => {
  const n = zm(e, t, Es);
  if (process.env.NODE_ENV !== "production") {
    const r = da();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Ri(e, t, n = Xe) {
  const r = da();
  if (process.env.NODE_ENV !== "production" && !r)
    return ue("useModel() called without active instance."), Z();
  if (process.env.NODE_ENV !== "production" && !r.propsOptions[0][t])
    return ue(`useModel() called with prop "${t}" which is not declared.`), Z();
  const o = an(t), a = En(t), s = Zm((l, c) => {
    let d;
    return Rh(() => {
      const u = e[t];
      On(d, u) && (d = u, c());
    }), {
      get() {
        return l(), n.get ? n.get(d) : d;
      },
      set(u) {
        const f = r.vnode.props;
        !(f && // check if parent has passed v-model
        (t in f || o in f || a in f) && (`onUpdate:${t}` in f || `onUpdate:${o}` in f || `onUpdate:${a}` in f)) && On(u, d) && (d = u, c()), r.emit(`update:${t}`, n.set ? n.set(u) : u);
      }
    };
  }), i = t === "modelValue" ? "modelModifiers" : `${t}Modifiers`;
  return s[Symbol.iterator] = () => {
    let l = 0;
    return {
      next() {
        return l < 2 ? { value: l++ ? e[i] || {} : s, done: !1 } : { done: !0 };
      }
    };
  }, s;
}
function uf(e, t, n) {
  const r = arguments.length;
  return r === 2 ? We(t) && !ye(t) ? lo(t) ? et(e, null, [t]) : et(e, t) : et(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && lo(n) && (n = [n]), et(e, t, n));
}
function Hv() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    header(u) {
      return We(u) ? u.__isVue ? ["div", e, "VueInstance"] : ot(u) ? [
        "div",
        {},
        ["span", e, d(u)],
        "<",
        i(u.value),
        ">"
      ] : gn(u) ? [
        "div",
        {},
        ["span", e, Mr(u) ? "ShallowReactive" : "Reactive"],
        "<",
        i(u),
        `>${sr(u) ? " (readonly)" : ""}`
      ] : sr(u) ? [
        "div",
        {},
        ["span", e, Mr(u) ? "ShallowReadonly" : "Readonly"],
        "<",
        i(u),
        ">"
      ] : null : null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...a(u.$)
        ];
    }
  };
  function a(u) {
    const f = [];
    u.type.props && u.props && f.push(s("props", Se(u.props))), u.setupState !== Xe && f.push(s("setup", u.setupState)), u.data !== Xe && f.push(s("data", Se(u.data)));
    const y = l(u, "computed");
    y && f.push(s("computed", y));
    const h = l(u, "inject");
    return h && f.push(s("injected", h)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), f;
  }
  function s(u, f) {
    return f = nt({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((y) => [
          "div",
          {},
          ["span", r, y + ": "],
          i(f[y], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function i(u, f = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", r, u] : We(u) ? ["object", { object: f ? Se(u) : u }] : ["span", n, String(u)];
  }
  function l(u, f) {
    const y = u.type;
    if (ke(y))
      return;
    const h = {};
    for (const g in u.ctx)
      c(y, g, f) && (h[g] = u.ctx[g]);
    return h;
  }
  function c(u, f, y) {
    const h = u[y];
    if (ye(h) && h.includes(f) || We(h) && f in h || u.extends && c(u.extends, f, y) || u.mixins && u.mixins.some((g) => c(g, f, y)))
      return !0;
  }
  function d(u) {
    return Mr(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Ru = "3.4.21", nr = process.env.NODE_ENV !== "production" ? ue : bt;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Yv = "http://www.w3.org/2000/svg", Uv = "http://www.w3.org/1998/Math/MathML", Kn = typeof document < "u" ? document : null, Iu = Kn && /* @__PURE__ */ Kn.createElement("template"), Wv = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Kn.createElementNS(Yv, e) : t === "mathml" ? Kn.createElementNS(Uv, e) : Kn.createElement(e, n ? { is: n } : void 0);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Kn.createTextNode(e),
  createComment: (e) => Kn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Kn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, a) {
    const s = n ? n.previousSibling : t.lastChild;
    if (o && (o === a || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === a || !(o = o.nextSibling)); )
        ;
    else {
      Iu.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const i = Iu.content;
      if (r === "svg" || r === "mathml") {
        const l = i.firstChild;
        for (; l.firstChild; )
          i.appendChild(l.firstChild);
        i.removeChild(l);
      }
      t.insertBefore(i, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, jn = "transition", xo = "animation", Xo = Symbol("_vtc"), cr = (e, { slots: t }) => uf(Bh, qv(e), t);
cr.displayName = "Transition";
const cf = {
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
cr.props = /* @__PURE__ */ nt(
  {},
  Rd,
  cf
);
const vr = (e, t = []) => {
  ye(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Fu = (e) => e ? ye(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function qv(e) {
  const t = {};
  for (const N in e)
    N in cf || (t[N] = e[N]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: r,
    duration: o,
    enterFromClass: a = `${n}-enter-from`,
    enterActiveClass: s = `${n}-enter-active`,
    enterToClass: i = `${n}-enter-to`,
    appearFromClass: l = a,
    appearActiveClass: c = s,
    appearToClass: d = i,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: f = `${n}-leave-active`,
    leaveToClass: y = `${n}-leave-to`
  } = e, h = Gv(o), g = h && h[0], M = h && h[1], {
    onBeforeEnter: $,
    onEnter: A,
    onEnterCancelled: b,
    onLeave: x,
    onLeaveCancelled: V,
    onBeforeAppear: k = $,
    onAppear: _ = A,
    onAppearCancelled: T = b
  } = t, I = (N, j, U) => {
    yr(N, j ? d : i), yr(N, j ? c : s), U && U();
  }, R = (N, j) => {
    N._isLeaving = !1, yr(N, u), yr(N, y), yr(N, f), j && j();
  }, O = (N) => (j, U) => {
    const E = N ? _ : A, F = () => I(j, N, U);
    vr(E, [j, F]), Lu(() => {
      yr(j, N ? l : a), Hn(j, N ? d : i), Fu(E) || Bu(j, r, g, F);
    });
  };
  return nt(t, {
    onBeforeEnter(N) {
      vr($, [N]), Hn(N, a), Hn(N, s);
    },
    onBeforeAppear(N) {
      vr(k, [N]), Hn(N, l), Hn(N, c);
    },
    onEnter: O(!1),
    onAppear: O(!0),
    onLeave(N, j) {
      N._isLeaving = !0;
      const U = () => R(N, j);
      Hn(N, u), Qv(), Hn(N, f), Lu(() => {
        N._isLeaving && (yr(N, u), Hn(N, y), Fu(x) || Bu(N, r, M, U));
      }), vr(x, [N, U]);
    },
    onEnterCancelled(N) {
      I(N, !1), vr(b, [N]);
    },
    onAppearCancelled(N) {
      I(N, !0), vr(T, [N]);
    },
    onLeaveCancelled(N) {
      R(N), vr(V, [N]);
    }
  });
}
function Gv(e) {
  if (e == null)
    return null;
  if (We(e))
    return [Ks(e.enter), Ks(e.leave)];
  {
    const t = Ks(e);
    return [t, t];
  }
}
function Ks(e) {
  const t = um(e);
  return process.env.NODE_ENV !== "production" && sh(t, "<transition> explicit duration"), t;
}
function Hn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Xo] || (e[Xo] = /* @__PURE__ */ new Set())).add(t);
}
function yr(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
  const n = e[Xo];
  n && (n.delete(t), n.size || (e[Xo] = void 0));
}
function Lu(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let zv = 0;
function Bu(e, t, n, r) {
  const o = e._endId = ++zv, a = () => {
    o === e._endId && r();
  };
  if (n)
    return setTimeout(a, n);
  const { type: s, timeout: i, propCount: l } = Kv(e, t);
  if (!s)
    return r();
  const c = s + "end";
  let d = 0;
  const u = () => {
    e.removeEventListener(c, f), a();
  }, f = (y) => {
    y.target === e && ++d >= l && u();
  };
  setTimeout(() => {
    d < l && u();
  }, i + 1), e.addEventListener(c, f);
}
function Kv(e, t) {
  const n = window.getComputedStyle(e), r = (h) => (n[h] || "").split(", "), o = r(`${jn}Delay`), a = r(`${jn}Duration`), s = ju(o, a), i = r(`${xo}Delay`), l = r(`${xo}Duration`), c = ju(i, l);
  let d = null, u = 0, f = 0;
  t === jn ? s > 0 && (d = jn, u = s, f = a.length) : t === xo ? c > 0 && (d = xo, u = c, f = l.length) : (u = Math.max(s, c), d = u > 0 ? s > c ? jn : xo : null, f = d ? d === jn ? a.length : l.length : 0);
  const y = d === jn && /\b(transform|all)(,|$)/.test(
    r(`${jn}Property`).toString()
  );
  return {
    type: d,
    timeout: u,
    propCount: f,
    hasTransform: y
  };
}
function ju(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, r) => Hu(n) + Hu(e[r])));
}
function Hu(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Qv() {
  return document.body.offsetHeight;
}
function Xv(e, t, n) {
  const r = e[Xo];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Xa = Symbol("_vod"), df = Symbol("_vsh"), jo = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[Xa] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Do(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), Do(e, !0), r.enter(e)) : r.leave(e, () => {
      Do(e, !1);
    }) : Do(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Do(e, t);
  }
};
process.env.NODE_ENV !== "production" && (jo.name = "show");
function Do(e, t) {
  e.style.display = t ? e[Xa] : "none", e[df] = !t;
}
const Jv = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Zv = /(^|;)\s*display\s*:/;
function ey(e, t, n) {
  const r = e.style, o = rt(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (rt(t))
        for (const s of t.split(";")) {
          const i = s.slice(0, s.indexOf(":")).trim();
          n[i] == null && $a(r, i, "");
        }
      else
        for (const s in t)
          n[s] == null && $a(r, s, "");
    for (const s in n)
      s === "display" && (a = !0), $a(r, s, n[s]);
  } else if (o) {
    if (t !== n) {
      const s = r[Jv];
      s && (n += ";" + s), r.cssText = n, a = Zv.test(n);
    }
  } else t && e.removeAttribute("style");
  Xa in e && (e[Xa] = a ? r.display : "", e[df] && (r.display = "none"));
}
const ty = /[^\\];\s*$/, Yu = /\s*!important$/;
function $a(e, t, n) {
  if (ye(n))
    n.forEach((r) => $a(e, t, r));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && ty.test(n) && nr(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = ny(e, t);
    Yu.test(n) ? e.setProperty(
      En(r),
      n.replace(Yu, ""),
      "important"
    ) : e[r] = n;
  }
}
const Uu = ["Webkit", "Moz", "ms"], Qs = {};
function ny(e, t) {
  const n = Qs[t];
  if (n)
    return n;
  let r = an(t);
  if (r !== "filter" && r in e)
    return Qs[t] = r;
  r = Fr(r);
  for (let o = 0; o < Uu.length; o++) {
    const a = Uu[o] + r;
    if (a in e)
      return Qs[t] = a;
  }
  return t;
}
const Wu = "http://www.w3.org/1999/xlink";
function ry(e, t, n, r, o) {
  if (r && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(Wu, t.slice(6, t.length)) : e.setAttributeNS(Wu, t, n);
  else {
    const a = wm(t);
    n == null || a && !Jc(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : n);
  }
}
function oy(e, t, n, r, o, a, s) {
  if (t === "innerHTML" || t === "textContent") {
    r && s(r, o, a), e[t] = n ?? "";
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const c = i === "OPTION" ? e.getAttribute("value") || "" : e.value, d = n ?? "";
    (c !== d || !("_value" in e)) && (e.value = d), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = Jc(n) : n == null && c === "string" ? (n = "", l = !0) : c === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch (c) {
    process.env.NODE_ENV !== "production" && !l && nr(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      c
    );
  }
  l && e.removeAttribute(t);
}
function Or(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function ay(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const qu = Symbol("_vei");
function sy(e, t, n, r, o = null) {
  const a = e[qu] || (e[qu] = {}), s = a[t];
  if (r && s)
    s.value = r;
  else {
    const [i, l] = iy(t);
    if (r) {
      const c = a[t] = cy(r, o);
      Or(e, i, c, l);
    } else s && (ay(e, i, s, l), a[t] = void 0);
  }
}
const Gu = /(?:Once|Passive|Capture)$/;
function iy(e) {
  let t;
  if (Gu.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Gu); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : En(e.slice(2)), t];
}
let Xs = 0;
const ly = /* @__PURE__ */ Promise.resolve(), uy = () => Xs || (ly.then(() => Xs = 0), Xs = Date.now());
function cy(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    zt(
      dy(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = uy(), n;
}
function dy(e, t) {
  if (ye(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((r) => (o) => !o._stopped && r && r(o));
  } else
    return t;
}
const zu = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, fy = (e, t, n, r, o, a, s, i, l) => {
  const c = o === "svg";
  t === "class" ? Xv(e, r, c) : t === "style" ? ey(e, n, r) : aa(t) ? ja(t) || sy(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : py(e, t, r, c)) ? oy(
    e,
    t,
    r,
    a,
    s,
    i,
    l
  ) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ry(e, t, r, c));
};
function py(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && zu(t) && ke(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return zu(t) && rt(n) ? !1 : t in e;
}
const Ja = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return ye(t) ? (n) => Qr(t, n) : t;
};
function my(e) {
  e.target.composing = !0;
}
function Ku(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const io = Symbol("_assign"), Qu = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[io] = Ja(o);
    const a = r || o.props && o.props.type === "number";
    Or(e, t ? "change" : "input", (s) => {
      if (s.target.composing)
        return;
      let i = e.value;
      n && (i = i.trim()), a && (i = qo(i)), e[io](i);
    }), n && Or(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Or(e, "compositionstart", my), Or(e, "compositionend", Ku), Or(e, "change", Ku));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: o } }, a) {
    if (e[io] = Ja(a), e.composing)
      return;
    const s = o || e.type === "number" ? qo(e.value) : e.value, i = t ?? "";
    s !== i && (document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === i) || (e.value = i));
  }
}, ff = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const o = cs(t);
    Or(e, "change", () => {
      const a = Array.prototype.filter.call(e.options, (s) => s.selected).map(
        (s) => n ? qo(Za(s)) : Za(s)
      );
      e[io](
        e.multiple ? o ? new Set(a) : a : a[0]
      ), e._assigning = !0, Kt(() => {
        e._assigning = !1;
      });
    }), e[io] = Ja(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t, modifiers: { number: n } }) {
    Xu(e, t, n);
  },
  beforeUpdate(e, t, n) {
    e[io] = Ja(n);
  },
  updated(e, { value: t, modifiers: { number: n } }) {
    e._assigning || Xu(e, t, n);
  }
};
function Xu(e, t, n) {
  const r = e.multiple, o = ye(t);
  if (r && !o && !cs(t)) {
    process.env.NODE_ENV !== "production" && nr(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let a = 0, s = e.options.length; a < s; a++) {
    const i = e.options[a], l = Za(i);
    if (r)
      if (o) {
        const c = typeof l;
        c === "string" || c === "number" ? i.selected = t.includes(
          n ? qo(l) : l
        ) : i.selected = Om(t, l) > -1;
      } else
        i.selected = t.has(l);
    else if (fs(Za(i), t)) {
      e.selectedIndex !== a && (e.selectedIndex = a);
      return;
    }
  }
  !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Za(e) {
  return "_value" in e ? e._value : e.value;
}
const hy = ["ctrl", "shift", "alt", "meta"], vy = {
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
  exact: (e, t) => hy.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ze = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (o, ...a) => {
    for (let s = 0; s < t.length; s++) {
      const i = vy[t[s]];
      if (i && i(o, t))
        return;
    }
    return e(o, ...a);
  });
}, yy = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ae = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (o) => {
    if (!("key" in o))
      return;
    const a = En(o.key);
    if (t.some((s) => s === a || yy[s] === a))
      return e(o);
  });
}, gy = /* @__PURE__ */ nt({ patchProp: fy }, Wv);
let Ju;
function pf() {
  return Ju || (Ju = Ev(gy));
}
const Zu = (...e) => {
  pf().render(...e);
}, by = (...e) => {
  const t = pf().createApp(...e);
  process.env.NODE_ENV !== "production" && (wy(t), Ey(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = Oy(r);
    if (!o)
      return;
    const a = t._component;
    !ke(a) && !a.render && !a.template && (a.template = o.innerHTML), o.innerHTML = "";
    const s = n(o, !1, _y(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), s;
  }, t;
};
function _y(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function wy(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => ym(t) || gm(t) || bm(t),
    writable: !1
  });
}
function Ey(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        nr(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return nr(r), n;
      },
      set() {
        nr(r);
      }
    });
  }
}
function Oy(e) {
  if (rt(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && nr(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && nr(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ny() {
  Hv();
}
process.env.NODE_ENV !== "production" && Ny();
var mf = !1;
function Da(e, t, n) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
}
function Js(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function xy() {
  return hf().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function hf() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Dy = typeof Proxy == "function", Ty = "devtools-plugin:setup", ky = "plugin:settings:set";
let qr, Ii;
function Sy() {
  var e;
  return qr !== void 0 || (typeof window < "u" && window.performance ? (qr = !0, Ii = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (qr = !0, Ii = globalThis.perf_hooks.performance) : qr = !1), qr;
}
function My() {
  return Sy() ? Ii.now() : Date.now();
}
class Py {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const r = {};
    if (t.settings)
      for (const s in t.settings) {
        const i = t.settings[s];
        r[s] = i.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, r);
    try {
      const s = localStorage.getItem(o), i = JSON.parse(s);
      Object.assign(a, i);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(s) {
        try {
          localStorage.setItem(o, JSON.stringify(s));
        } catch {
        }
        a = s;
      },
      now() {
        return My();
      }
    }, n && n.on(ky, (s, i) => {
      s === this.plugin.id && this.fallbacks.setSettings(i);
    }), this.proxiedOn = new Proxy({}, {
      get: (s, i) => this.target ? this.target.on[i] : (...l) => {
        this.onQueue.push({
          method: i,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (s, i) => this.target ? this.target[i] : i === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(i) ? (...l) => (this.targetQueue.push({
        method: i,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[i](...l)) : (...l) => new Promise((c) => {
        this.targetQueue.push({
          method: i,
          args: l,
          resolve: c
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function vf(e, t) {
  const n = e, r = hf(), o = xy(), a = Dy && n.enableEarlyProxy;
  if (o && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    o.emit(Ty, e, t);
  else {
    const s = a ? new Py(n, o) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: s
    }), s && t(s.proxiedTarget);
  }
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Vo;
const Jo = (e) => Vo = e, yf = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Br(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var bn;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(bn || (bn = {}));
const xs = typeof window < "u", Ho = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && xs, ec = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Cy(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Dl(e, t, n) {
  const r = new XMLHttpRequest();
  r.open("GET", e), r.responseType = "blob", r.onload = function() {
    _f(r.response, t, n);
  }, r.onerror = function() {
    console.error("could not download file");
  }, r.send();
}
function gf(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function Ra(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
  }
}
const Ia = typeof navigator == "object" ? navigator : { userAgent: "" }, bf = /Macintosh/.test(Ia.userAgent) && /AppleWebKit/.test(Ia.userAgent) && !/Safari/.test(Ia.userAgent), _f = xs ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !bf ? Ay : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Ia ? Vy : (
      // Fallback to using FileReader and a popup
      $y
    )
  )
) : () => {
};
function Ay(e, t = "download", n) {
  const r = document.createElement("a");
  r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin !== location.origin ? gf(r.href) ? Dl(e, t, n) : (r.target = "_blank", Ra(r)) : Ra(r)) : (r.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(r.href);
  }, 4e4), setTimeout(function() {
    Ra(r);
  }, 0));
}
function Vy(e, t = "download", n) {
  if (typeof e == "string")
    if (gf(e))
      Dl(e, t, n);
    else {
      const r = document.createElement("a");
      r.href = e, r.target = "_blank", setTimeout(function() {
        Ra(r);
      });
    }
  else
    navigator.msSaveOrOpenBlob(Cy(e, n), t);
}
function $y(e, t, n, r) {
  if (r = r || open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string")
    return Dl(e, t, n);
  const o = e.type === "application/octet-stream", a = /constructor/i.test(String(ec.HTMLElement)) || "safari" in ec, s = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((s || o && a || bf) && typeof FileReader < "u") {
    const i = new FileReader();
    i.onloadend = function() {
      let l = i.result;
      if (typeof l != "string")
        throw r = null, new Error("Wrong reader.result type");
      l = s ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = l : location.assign(l), r = null;
    }, i.readAsDataURL(e);
  } else {
    const i = URL.createObjectURL(e);
    r ? r.location.assign(i) : location.href = i, r = null, setTimeout(function() {
      URL.revokeObjectURL(i);
    }, 4e4);
  }
}
function Nt(e, t) {
  const n = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
}
function Tl(e) {
  return "_a" in e && "install" in e;
}
function wf() {
  if (!("clipboard" in navigator))
    return Nt("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Ef(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (Nt('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function Ry(e) {
  if (!wf())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), Nt("Global state copied to clipboard.");
    } catch (t) {
      if (Ef(t))
        return;
      Nt("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function Iy(e) {
  if (!wf())
    try {
      Of(e, JSON.parse(await navigator.clipboard.readText())), Nt("Global state pasted from clipboard.");
    } catch (t) {
      if (Ef(t))
        return;
      Nt("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function Fy(e) {
  try {
    _f(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    Nt("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Tn;
function Ly() {
  Tn || (Tn = document.createElement("input"), Tn.type = "file", Tn.accept = ".json");
  function e() {
    return new Promise((t, n) => {
      Tn.onchange = async () => {
        const r = Tn.files;
        if (!r)
          return t(null);
        const o = r.item(0);
        return t(o ? { text: await o.text(), file: o } : null);
      }, Tn.oncancel = () => t(null), Tn.onerror = n, Tn.click();
    });
  }
  return e;
}
async function By(e) {
  try {
    const n = await Ly()();
    if (!n)
      return;
    const { text: r, file: o } = n;
    Of(e, JSON.parse(r)), Nt(`Global state imported from "${o.name}".`);
  } catch (t) {
    Nt("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function Of(e, t) {
  for (const n in t) {
    const r = e.state.value[n];
    r ? Object.assign(r, t[n]) : e.state.value[n] = t[n];
  }
}
function Xt(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const Nf = "🍍 Pinia (root)", Fi = "_root";
function jy(e) {
  return Tl(e) ? {
    id: Fi,
    label: Nf
  } : {
    id: e.$id,
    label: e.$id
  };
}
function Hy(e) {
  if (Tl(e)) {
    const n = Array.from(e._s.keys()), r = e._s;
    return {
      state: n.map((a) => ({
        editable: !0,
        key: a,
        value: e.state.value[a]
      })),
      getters: n.filter((a) => r.get(a)._getters).map((a) => {
        const s = r.get(a);
        return {
          editable: !1,
          key: a,
          value: s._getters.reduce((i, l) => (i[l] = s[l], i), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((n) => ({
      editable: !0,
      key: n,
      value: e.$state[n]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
    editable: !1,
    key: n,
    value: e[n]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: e[n]
  }))), t;
}
function Yy(e) {
  return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Xt(e.type),
    key: Xt(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function Uy(e) {
  switch (e) {
    case bn.direct:
      return "mutation";
    case bn.patchFunction:
      return "$patch";
    case bn.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let eo = !0;
const Fa = [], br = "pinia:mutations", Pt = "pinia", { assign: Wy } = Object, es = (e) => "🍍 " + e;
function qy(e, t) {
  vf({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Fa,
    app: e
  }, (n) => {
    typeof n.now != "function" && Nt("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: br,
      label: "Pinia 🍍",
      color: 15064968
    }), n.addInspector({
      id: Pt,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            Ry(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await Iy(t), n.sendInspectorTree(Pt), n.sendInspectorState(Pt);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            Fy(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await By(t), n.sendInspectorTree(Pt), n.sendInspectorState(Pt);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (r) => {
            const o = t._s.get(r);
            o ? typeof o.$reset != "function" ? Nt(`Cannot reset "${r}" store because it doesn't have a "$reset" method implemented.`, "warn") : (o.$reset(), Nt(`Store "${r}" reset.`)) : Nt(`Cannot reset "${r}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((r, o) => {
      const a = r.componentInstance && r.componentInstance.proxy;
      if (a && a._pStores) {
        const s = r.componentInstance.proxy._pStores;
        Object.values(s).forEach((i) => {
          r.instanceData.state.push({
            type: es(i.$id),
            key: "state",
            editable: !0,
            value: i._isOptionsAPI ? {
              _custom: {
                value: Se(i.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => i.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(i.$state).reduce((l, c) => (l[c] = i.$state[c], l), {})
            )
          }), i._getters && i._getters.length && r.instanceData.state.push({
            type: es(i.$id),
            key: "getters",
            editable: !1,
            value: i._getters.reduce((l, c) => {
              try {
                l[c] = i[c];
              } catch (d) {
                l[c] = d;
              }
              return l;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((r) => {
      if (r.app === e && r.inspectorId === Pt) {
        let o = [t];
        o = o.concat(Array.from(t._s.values())), r.rootNodes = (r.filter ? o.filter((a) => "$id" in a ? a.$id.toLowerCase().includes(r.filter.toLowerCase()) : Nf.toLowerCase().includes(r.filter.toLowerCase())) : o).map(jy);
      }
    }), n.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === Pt) {
        const o = r.nodeId === Fi ? t : t._s.get(r.nodeId);
        if (!o)
          return;
        o && (r.state = Hy(o));
      }
    }), n.on.editInspectorState((r, o) => {
      if (r.app === e && r.inspectorId === Pt) {
        const a = r.nodeId === Fi ? t : t._s.get(r.nodeId);
        if (!a)
          return Nt(`store "${r.nodeId}" not found`, "error");
        const { path: s } = r;
        Tl(a) ? s.unshift("state") : (s.length !== 1 || !a._customProperties.has(s[0]) || s[0] in a.$state) && s.unshift("$state"), eo = !1, r.set(a, s, r.state.value), eo = !0;
      }
    }), n.on.editComponentState((r) => {
      if (r.type.startsWith("🍍")) {
        const o = r.type.replace(/^🍍\s*/, ""), a = t._s.get(o);
        if (!a)
          return Nt(`store "${o}" not found`, "error");
        const { path: s } = r;
        if (s[0] !== "state")
          return Nt(`Invalid path for store "${o}":
${s}
Only state can be modified.`);
        s[0] = "$state", eo = !1, r.set(a, s, r.state.value), eo = !0;
      }
    });
  });
}
function Gy(e, t) {
  Fa.includes(es(t.$id)) || Fa.push(es(t.$id)), vf({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Fa,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (n) => {
    const r = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    t.$onAction(({ after: s, onError: i, name: l, args: c }) => {
      const d = xf++;
      n.addTimelineEvent({
        layerId: br,
        event: {
          time: r(),
          title: "🛫 " + l,
          subtitle: "start",
          data: {
            store: Xt(t.$id),
            action: Xt(l),
            args: c
          },
          groupId: d
        }
      }), s((u) => {
        Jn = void 0, n.addTimelineEvent({
          layerId: br,
          event: {
            time: r(),
            title: "🛬 " + l,
            subtitle: "end",
            data: {
              store: Xt(t.$id),
              action: Xt(l),
              args: c,
              result: u
            },
            groupId: d
          }
        });
      }), i((u) => {
        Jn = void 0, n.addTimelineEvent({
          layerId: br,
          event: {
            time: r(),
            logType: "error",
            title: "💥 " + l,
            subtitle: "end",
            data: {
              store: Xt(t.$id),
              action: Xt(l),
              args: c,
              error: u
            },
            groupId: d
          }
        });
      });
    }, !0), t._customProperties.forEach((s) => {
      ft(() => D(t[s]), (i, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(Pt), eo && n.addTimelineEvent({
          layerId: br,
          event: {
            time: r(),
            title: "Change",
            subtitle: s,
            data: {
              newValue: i,
              oldValue: l
            },
            groupId: Jn
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: s, type: i }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(Pt), !eo)
        return;
      const c = {
        time: r(),
        title: Uy(i),
        data: Wy({ store: Xt(t.$id) }, Yy(s)),
        groupId: Jn
      };
      i === bn.patchFunction ? c.subtitle = "⤵️" : i === bn.patchObject ? c.subtitle = "🧩" : s && !Array.isArray(s) && (c.subtitle = s.type), s && (c.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: s
        }
      }), n.addTimelineEvent({
        layerId: br,
        event: c
      });
    }, { detached: !0, flush: "sync" });
    const o = t._hotUpdate;
    t._hotUpdate = Cn((s) => {
      o(s), n.addTimelineEvent({
        layerId: br,
        event: {
          time: r(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: Xt(t.$id),
            info: Xt("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(Pt), n.sendInspectorState(Pt);
    });
    const { $dispose: a } = t;
    t.$dispose = () => {
      a(), n.notifyComponentUpdate(), n.sendInspectorTree(Pt), n.sendInspectorState(Pt), n.getSettings().logStoreChanges && Nt(`Disposed "${t.$id}" store 🗑`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(Pt), n.sendInspectorState(Pt), n.getSettings().logStoreChanges && Nt(`"${t.$id}" store installed 🆕`);
  });
}
let xf = 0, Jn;
function tc(e, t, n) {
  const r = t.reduce((o, a) => (o[a] = Se(e)[a], o), {});
  for (const o in r)
    e[o] = function() {
      const a = xf, s = n ? new Proxy(e, {
        get(...l) {
          return Jn = a, Reflect.get(...l);
        },
        set(...l) {
          return Jn = a, Reflect.set(...l);
        }
      }) : e;
      Jn = a;
      const i = r[o].apply(s, arguments);
      return Jn = void 0, i;
    };
}
function zy({ app: e, store: t, options: n }) {
  if (t.$id.startsWith("__hot:"))
    return;
  t._isOptionsAPI = !!n.state, tc(t, Object.keys(n.actions), t._isOptionsAPI);
  const r = t._hotUpdate;
  Se(t)._hotUpdate = function(o) {
    r.apply(this, arguments), tc(t, Object.keys(o._hmrPayload.actions), !!t._isOptionsAPI);
  }, Gy(
    e,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    t
  );
}
function Ky() {
  const e = td(!0), t = e.run(() => Z({}));
  let n = [], r = [];
  const o = Cn({
    install(a) {
      Jo(o), o._a = a, a.provide(yf, o), a.config.globalProperties.$pinia = o, Ho && qy(a, o), r.forEach((s) => n.push(s)), r = [];
    },
    use(a) {
      return !this._a && !mf ? r.push(a) : n.push(a), this;
    },
    _p: n,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return Ho && typeof Proxy < "u" && o.use(zy), o;
}
function Df(e, t) {
  for (const n in t) {
    const r = t[n];
    if (!(n in e))
      continue;
    const o = e[n];
    Br(o) && Br(r) && !ot(r) && !gn(r) ? e[n] = Df(o, r) : e[n] = r;
  }
  return e;
}
const Tf = () => {
};
function nc(e, t, n, r = Tf) {
  e.push(t);
  const o = () => {
    const a = e.indexOf(t);
    a > -1 && (e.splice(a, 1), r());
  };
  return !n && al() && nd(o), o;
}
function Gr(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
const Qy = (e) => e();
function Li(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n))
      continue;
    const r = t[n], o = e[n];
    Br(o) && Br(r) && e.hasOwnProperty(n) && !ot(r) && !gn(r) ? e[n] = Li(o, r) : e[n] = r;
  }
  return e;
}
const Xy = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Jy(e) {
  return !Br(e) || !e.hasOwnProperty(Xy);
}
const { assign: Gt } = Object;
function rc(e) {
  return !!(ot(e) && e.effect);
}
function oc(e, t, n, r) {
  const { state: o, actions: a, getters: s } = t, i = n.state.value[e];
  let l;
  function c() {
    !i && (process.env.NODE_ENV === "production" || !r) && (n.state.value[e] = o ? o() : {});
    const d = process.env.NODE_ENV !== "production" && r ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      hu(Z(o ? o() : {}).value)
    ) : hu(n.state.value[e]);
    return Gt(d, a, Object.keys(s || {}).reduce((u, f) => (process.env.NODE_ENV !== "production" && f in d && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${f}" in store "${e}".`), u[f] = Cn(oe(() => {
      Jo(n);
      const y = n._s.get(e);
      return s[f].call(y, y);
    })), u), {}));
  }
  return l = Bi(e, c, t, n, r, !0), l;
}
function Bi(e, t, n = {}, r, o, a) {
  let s;
  const i = Gt({ actions: {} }, n);
  if (process.env.NODE_ENV !== "production" && !r._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !mf && (l.onTrigger = (R) => {
    c ? y = R : c == !1 && !_._hotUpdating && (Array.isArray(y) ? y.push(R) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let c, d, u = [], f = [], y;
  const h = r.state.value[e];
  !a && !h && (process.env.NODE_ENV === "production" || !o) && (r.state.value[e] = {});
  const g = Z({});
  let M;
  function $(R) {
    let O;
    c = d = !1, process.env.NODE_ENV !== "production" && (y = []), typeof R == "function" ? (R(r.state.value[e]), O = {
      type: bn.patchFunction,
      storeId: e,
      events: y
    }) : (Li(r.state.value[e], R), O = {
      type: bn.patchObject,
      payload: R,
      storeId: e,
      events: y
    });
    const N = M = Symbol();
    Kt().then(() => {
      M === N && (c = !0);
    }), d = !0, Gr(u, O, r.state.value[e]);
  }
  const A = a ? function() {
    const { state: O } = n, N = O ? O() : {};
    this.$patch((j) => {
      Gt(j, N);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : Tf
  );
  function b() {
    s.stop(), u = [], f = [], r._s.delete(e);
  }
  function x(R, O) {
    return function() {
      Jo(r);
      const N = Array.from(arguments), j = [], U = [];
      function E(Q) {
        j.push(Q);
      }
      function F(Q) {
        U.push(Q);
      }
      Gr(f, {
        args: N,
        name: R,
        store: _,
        after: E,
        onError: F
      });
      let q;
      try {
        q = O.apply(this && this.$id === e ? this : _, N);
      } catch (Q) {
        throw Gr(U, Q), Q;
      }
      return q instanceof Promise ? q.then((Q) => (Gr(j, Q), Q)).catch((Q) => (Gr(U, Q), Promise.reject(Q))) : (Gr(j, q), q);
    };
  }
  const V = /* @__PURE__ */ Cn({
    actions: {},
    getters: {},
    state: [],
    hotState: g
  }), k = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: nc.bind(null, f),
    $patch: $,
    $reset: A,
    $subscribe(R, O = {}) {
      const N = nc(u, R, O.detached, () => j()), j = s.run(() => ft(() => r.state.value[e], (U) => {
        (O.flush === "sync" ? d : c) && R({
          storeId: e,
          type: bn.direct,
          events: y
        }, U);
      }, Gt({}, l, O)));
      return N;
    },
    $dispose: b
  }, _ = In(process.env.NODE_ENV !== "production" || Ho ? Gt(
    {
      _hmrPayload: V,
      _customProperties: Cn(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    k
    // must be added later
    // setupStore
  ) : k);
  r._s.set(e, _);
  const I = (r._a && r._a.runWithContext || Qy)(() => r._e.run(() => (s = td()).run(t)));
  for (const R in I) {
    const O = I[R];
    if (ot(O) && !rc(O) || gn(O))
      process.env.NODE_ENV !== "production" && o ? Da(g.value, R, Pr(I, R)) : a || (h && Jy(O) && (ot(O) ? O.value = h[R] : Li(O, h[R])), r.state.value[e][R] = O), process.env.NODE_ENV !== "production" && V.state.push(R);
    else if (typeof O == "function") {
      const N = process.env.NODE_ENV !== "production" && o ? O : x(R, O);
      I[R] = N, process.env.NODE_ENV !== "production" && (V.actions[R] = O), i.actions[R] = O;
    } else process.env.NODE_ENV !== "production" && rc(O) && (V.getters[R] = a ? (
      // @ts-expect-error
      n.getters[R]
    ) : O, xs && (I._getters || // @ts-expect-error: same
    (I._getters = Cn([]))).push(R));
  }
  if (Gt(_, I), Gt(Se(_), I), Object.defineProperty(_, "$state", {
    get: () => process.env.NODE_ENV !== "production" && o ? g.value : r.state.value[e],
    set: (R) => {
      if (process.env.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      $((O) => {
        Gt(O, R);
      });
    }
  }), process.env.NODE_ENV !== "production" && (_._hotUpdate = Cn((R) => {
    _._hotUpdating = !0, R._hmrPayload.state.forEach((O) => {
      if (O in _.$state) {
        const N = R.$state[O], j = _.$state[O];
        typeof N == "object" && Br(N) && Br(j) ? Df(N, j) : R.$state[O] = j;
      }
      Da(_, O, Pr(R.$state, O));
    }), Object.keys(_.$state).forEach((O) => {
      O in R.$state || Js(_, O);
    }), c = !1, d = !1, r.state.value[e] = Pr(R._hmrPayload, "hotState"), d = !0, Kt().then(() => {
      c = !0;
    });
    for (const O in R._hmrPayload.actions) {
      const N = R[O];
      Da(_, O, x(O, N));
    }
    for (const O in R._hmrPayload.getters) {
      const N = R._hmrPayload.getters[O], j = a ? (
        // special handling of options api
        oe(() => (Jo(r), N.call(_, _)))
      ) : N;
      Da(_, O, j);
    }
    Object.keys(_._hmrPayload.getters).forEach((O) => {
      O in R._hmrPayload.getters || Js(_, O);
    }), Object.keys(_._hmrPayload.actions).forEach((O) => {
      O in R._hmrPayload.actions || Js(_, O);
    }), _._hmrPayload = R._hmrPayload, _._getters = R._getters, _._hotUpdating = !1;
  })), Ho) {
    const R = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((O) => {
      Object.defineProperty(_, O, Gt({ value: _[O] }, R));
    });
  }
  return r._p.forEach((R) => {
    if (Ho) {
      const O = s.run(() => R({
        store: _,
        app: r._a,
        pinia: r,
        options: i
      }));
      Object.keys(O || {}).forEach((N) => _._customProperties.add(N)), Gt(_, O);
    } else
      Gt(_, s.run(() => R({
        store: _,
        app: r._a,
        pinia: r,
        options: i
      })));
  }), process.env.NODE_ENV !== "production" && _.$state && typeof _.$state == "object" && typeof _.$state.constructor == "function" && !_.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${_.$id}".`), h && a && n.hydrate && n.hydrate(_.$state, h), c = !0, d = !0, _;
}
function Zy(e, t, n) {
  let r, o;
  const a = typeof t == "function";
  r = e, o = a ? n : t;
  function s(i, l) {
    const c = uv();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && Vo && Vo._testing ? null : i) || (c ? Fo(yf, null) : null), i && Jo(i), process.env.NODE_ENV !== "production" && !Vo)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = Vo, i._s.has(r) || (a ? Bi(r, t, o, i) : oc(r, o, i), process.env.NODE_ENV !== "production" && (s._pinia = i));
    const d = i._s.get(r);
    if (process.env.NODE_ENV !== "production" && l) {
      const u = "__hot:" + r, f = a ? Bi(u, t, o, i, !0) : oc(u, Gt({}, o), i, !0);
      l._hotUpdate(f), delete i.state.value[u], i._s.delete(u);
    }
    if (process.env.NODE_ENV !== "production" && xs) {
      const u = da();
      if (u && u.proxy && // avoid adding stores that are just built for hot module replacement
      !l) {
        const f = u.proxy, y = "_pStores" in f ? f._pStores : f._pStores = {};
        y[r] = d;
      }
    }
    return d;
  }
  return s.$id = r, s;
}
var kf = typeof global == "object" && global && global.Object === Object && global, eg = typeof self == "object" && self && self.Object === Object && self, Ds = kf || eg || Function("return this")(), ts = Ds.Symbol, Sf = Object.prototype, tg = Sf.hasOwnProperty, ng = Sf.toString, To = ts ? ts.toStringTag : void 0;
function rg(e) {
  var t = tg.call(e, To), n = e[To];
  try {
    e[To] = void 0;
    var r = !0;
  } catch {
  }
  var o = ng.call(e);
  return r && (t ? e[To] = n : delete e[To]), o;
}
var og = Object.prototype, ag = og.toString;
function sg(e) {
  return ag.call(e);
}
var ig = "[object Null]", lg = "[object Undefined]", ac = ts ? ts.toStringTag : void 0;
function kl(e) {
  return e == null ? e === void 0 ? lg : ig : ac && ac in Object(e) ? rg(e) : sg(e);
}
function Ts(e) {
  return e != null && typeof e == "object";
}
function Mf(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Pf = Array.isArray;
function Sl(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Cf(e) {
  return e;
}
var ug = "[object AsyncFunction]", cg = "[object Function]", dg = "[object GeneratorFunction]", fg = "[object Proxy]";
function Af(e) {
  if (!Sl(e))
    return !1;
  var t = kl(e);
  return t == cg || t == dg || t == ug || t == fg;
}
var Zs = Ds["__core-js_shared__"], sc = function() {
  var e = /[^.]+$/.exec(Zs && Zs.keys && Zs.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function pg(e) {
  return !!sc && sc in e;
}
var mg = Function.prototype, hg = mg.toString;
function vg(e) {
  if (e != null) {
    try {
      return hg.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var yg = /[\\^$.*+?()[\]{}|]/g, gg = /^\[object .+?Constructor\]$/, bg = Function.prototype, _g = Object.prototype, wg = bg.toString, Eg = _g.hasOwnProperty, Og = RegExp(
  "^" + wg.call(Eg).replace(yg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ng(e) {
  if (!Sl(e) || pg(e))
    return !1;
  var t = Af(e) ? Og : gg;
  return t.test(vg(e));
}
function xg(e, t) {
  return e == null ? void 0 : e[t];
}
function Ml(e, t) {
  var n = xg(e, t);
  return Ng(n) ? n : void 0;
}
function Dg(e, t, n) {
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
var Tg = 800, kg = 16, Sg = Date.now;
function Mg(e) {
  var t = 0, n = 0;
  return function() {
    var r = Sg(), o = kg - (r - n);
    if (n = r, o > 0) {
      if (++t >= Tg)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Pg(e) {
  return function() {
    return e;
  };
}
var ns = function() {
  try {
    var e = Ml(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Cg = ns ? function(e, t) {
  return ns(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Pg(t),
    writable: !0
  });
} : Cf, Ag = Mg(Cg);
function Vg(e, t, n, r) {
  for (var o = e.length, a = n + -1; ++a < o; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
function $g(e) {
  return e !== e;
}
function Rg(e, t, n) {
  for (var r = n - 1, o = e.length; ++r < o; )
    if (e[r] === t)
      return r;
  return -1;
}
function Ig(e, t, n) {
  return t === t ? Rg(e, t, n) : Vg(e, $g, n);
}
function Fg(e, t) {
  var n = e == null ? 0 : e.length;
  return !!n && Ig(e, t, 0) > -1;
}
var Lg = 9007199254740991, Bg = /^(?:0|[1-9]\d*)$/;
function Vf(e, t) {
  var n = typeof e;
  return t = t ?? Lg, !!t && (n == "number" || n != "symbol" && Bg.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function $f(e, t, n) {
  t == "__proto__" && ns ? ns(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Pl(e, t) {
  return e === t || e !== e && t !== t;
}
var jg = Object.prototype, Hg = jg.hasOwnProperty;
function Rf(e, t, n) {
  var r = e[t];
  (!(Hg.call(e, t) && Pl(r, n)) || n === void 0 && !(t in e)) && $f(e, t, n);
}
function Yg(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var i = t[a], l = void 0;
    l === void 0 && (l = e[i]), o ? $f(n, i, l) : Rf(n, i, l);
  }
  return n;
}
var ic = Math.max;
function Ug(e, t, n) {
  return t = ic(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = ic(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), Dg(e, this, i);
  };
}
function If(e, t) {
  return Ag(Ug(e, t, Cf), e + "");
}
var Wg = 9007199254740991;
function Ff(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Wg;
}
function ks(e) {
  return e != null && Ff(e.length) && !Af(e);
}
function qg(e, t, n) {
  if (!Sl(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? ks(n) && Vf(t, n.length) : r == "string" && t in n) ? Pl(n[t], e) : !1;
}
function Gg(e) {
  return If(function(t, n) {
    var r = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (o--, a) : void 0, s && qg(n[0], n[1], s) && (a = o < 3 ? void 0 : a, o = 1), t = Object(t); ++r < o; ) {
      var i = n[r];
      i && e(t, i, r, a);
    }
    return t;
  });
}
var zg = Object.prototype;
function Lf(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || zg;
  return e === n;
}
function Kg(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Qg = "[object Arguments]";
function lc(e) {
  return Ts(e) && kl(e) == Qg;
}
var Bf = Object.prototype, Xg = Bf.hasOwnProperty, Jg = Bf.propertyIsEnumerable, Zg = lc(/* @__PURE__ */ function() {
  return arguments;
}()) ? lc : function(e) {
  return Ts(e) && Xg.call(e, "callee") && !Jg.call(e, "callee");
};
function e0() {
  return !1;
}
var jf = typeof exports == "object" && exports && !exports.nodeType && exports, uc = jf && typeof module == "object" && module && !module.nodeType && module, t0 = uc && uc.exports === jf, cc = t0 ? Ds.Buffer : void 0, n0 = cc ? cc.isBuffer : void 0, r0 = n0 || e0, o0 = "[object Arguments]", a0 = "[object Array]", s0 = "[object Boolean]", i0 = "[object Date]", l0 = "[object Error]", u0 = "[object Function]", c0 = "[object Map]", d0 = "[object Number]", f0 = "[object Object]", p0 = "[object RegExp]", m0 = "[object Set]", h0 = "[object String]", v0 = "[object WeakMap]", y0 = "[object ArrayBuffer]", g0 = "[object DataView]", b0 = "[object Float32Array]", _0 = "[object Float64Array]", w0 = "[object Int8Array]", E0 = "[object Int16Array]", O0 = "[object Int32Array]", N0 = "[object Uint8Array]", x0 = "[object Uint8ClampedArray]", D0 = "[object Uint16Array]", T0 = "[object Uint32Array]", st = {};
st[b0] = st[_0] = st[w0] = st[E0] = st[O0] = st[N0] = st[x0] = st[D0] = st[T0] = !0;
st[o0] = st[a0] = st[y0] = st[s0] = st[g0] = st[i0] = st[l0] = st[u0] = st[c0] = st[d0] = st[f0] = st[p0] = st[m0] = st[h0] = st[v0] = !1;
function k0(e) {
  return Ts(e) && Ff(e.length) && !!st[kl(e)];
}
function Hf(e) {
  return function(t) {
    return e(t);
  };
}
var Yf = typeof exports == "object" && exports && !exports.nodeType && exports, Yo = Yf && typeof module == "object" && module && !module.nodeType && module, S0 = Yo && Yo.exports === Yf, ei = S0 && kf.process, dc = function() {
  try {
    var e = Yo && Yo.require && Yo.require("util").types;
    return e || ei && ei.binding && ei.binding("util");
  } catch {
  }
}(), fc = dc && dc.isTypedArray, M0 = fc ? Hf(fc) : k0, P0 = Object.prototype, C0 = P0.hasOwnProperty;
function A0(e, t) {
  var n = Pf(e), r = !n && Zg(e), o = !n && !r && r0(e), a = !n && !r && !o && M0(e), s = n || r || o || a, i = s ? Kg(e.length, String) : [], l = i.length;
  for (var c in e)
    C0.call(e, c) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Vf(c, l))) && i.push(c);
  return i;
}
function V0(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var $0 = V0(Object.keys, Object), R0 = Object.prototype, I0 = R0.hasOwnProperty;
function F0(e) {
  if (!Lf(e))
    return $0(e);
  var t = [];
  for (var n in Object(e))
    I0.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function L0(e) {
  return ks(e) ? A0(e) : F0(e);
}
var B0 = Object.prototype, j0 = B0.hasOwnProperty, H0 = Gg(function(e, t) {
  if (Lf(t) || ks(t)) {
    Yg(t, L0(t), e);
    return;
  }
  for (var n in t)
    j0.call(t, n) && Rf(e, n, t[n]);
}), Zo = Ml(Object, "create");
function Y0() {
  this.__data__ = Zo ? Zo(null) : {}, this.size = 0;
}
function U0(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var W0 = "__lodash_hash_undefined__", q0 = Object.prototype, G0 = q0.hasOwnProperty;
function z0(e) {
  var t = this.__data__;
  if (Zo) {
    var n = t[e];
    return n === W0 ? void 0 : n;
  }
  return G0.call(t, e) ? t[e] : void 0;
}
var K0 = Object.prototype, Q0 = K0.hasOwnProperty;
function X0(e) {
  var t = this.__data__;
  return Zo ? t[e] !== void 0 : Q0.call(t, e);
}
var J0 = "__lodash_hash_undefined__";
function Z0(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Zo && t === void 0 ? J0 : t, this;
}
function jr(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
jr.prototype.clear = Y0;
jr.prototype.delete = U0;
jr.prototype.get = z0;
jr.prototype.has = X0;
jr.prototype.set = Z0;
function eb() {
  this.__data__ = [], this.size = 0;
}
function Ss(e, t) {
  for (var n = e.length; n--; )
    if (Pl(e[n][0], t))
      return n;
  return -1;
}
var tb = Array.prototype, nb = tb.splice;
function rb(e) {
  var t = this.__data__, n = Ss(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : nb.call(t, n, 1), --this.size, !0;
}
function ob(e) {
  var t = this.__data__, n = Ss(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ab(e) {
  return Ss(this.__data__, e) > -1;
}
function sb(e, t) {
  var n = this.__data__, r = Ss(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function bo(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
bo.prototype.clear = eb;
bo.prototype.delete = rb;
bo.prototype.get = ob;
bo.prototype.has = ab;
bo.prototype.set = sb;
var ib = Ml(Ds, "Map");
function lb() {
  this.size = 0, this.__data__ = {
    hash: new jr(),
    map: new (ib || bo)(),
    string: new jr()
  };
}
function ub(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ms(e, t) {
  var n = e.__data__;
  return ub(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function cb(e) {
  var t = Ms(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function db(e) {
  return Ms(this, e).get(e);
}
function fb(e) {
  return Ms(this, e).has(e);
}
function pb(e, t) {
  var n = Ms(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function _o(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
_o.prototype.clear = lb;
_o.prototype.delete = cb;
_o.prototype.get = db;
_o.prototype.has = fb;
_o.prototype.set = pb;
var mb = "__lodash_hash_undefined__";
function hb(e) {
  return this.__data__.set(e, mb), this;
}
function vb(e) {
  return this.__data__.has(e);
}
function rs(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new _o(); ++t < n; )
    this.add(e[t]);
}
rs.prototype.add = rs.prototype.push = hb;
rs.prototype.has = vb;
function pc(e, t) {
  return e.has(t);
}
function yb(e) {
  return Ts(e) && ks(e);
}
var gb = Math.min;
function bb(e, t, n) {
  for (var r = Fg, o = e[0].length, a = e.length, s = a, i = Array(a), l = 1 / 0, c = []; s--; ) {
    var d = e[s];
    s && t && (d = Mf(d, Hf(t))), l = gb(d.length, l), i[s] = o >= 120 && d.length >= 120 ? new rs(s && d) : void 0;
  }
  d = e[0];
  var u = -1, f = i[0];
  e:
    for (; ++u < o && c.length < l; ) {
      var y = d[u], h = y;
      if (y = y !== 0 ? y : 0, !(f ? pc(f, h) : r(c, h))) {
        for (s = a; --s; ) {
          var g = i[s];
          if (!(g ? pc(g, h) : r(e[s], h)))
            continue e;
        }
        f && f.push(h), c.push(y);
      }
    }
  return c;
}
function _b(e) {
  return yb(e) ? e : [];
}
var mc = If(function(e) {
  var t = Mf(e, _b);
  return t.length && t[0] === e[0] ? bb(t) : [];
});
const os = "Value", uo = "ValueString", Vr = "ValueFloat", co = "ValueDate", fo = "ValueFilePath", Hr = "Mode", ir = "SubSystem", ea = "Command", ji = [
  os,
  uo,
  Vr,
  co,
  fo
];
class Ta {
  constructor(t) {
    H0(this, t);
  }
  getDestinations(t) {
    const n = Pf(t) ? t : [t];
    return this.destinations.reduce((o, a) => (n.includes(a.type) && o.push(a), o), []);
  }
  getValues() {
    return this.hasValues ? this.getDestinations(ji) : [];
  }
  getModes() {
    return this.hasModes ? this.getDestinations(Hr) : [];
  }
  getSubsystems() {
    return this.getDestinations(ir);
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
function Uf(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: wb } = Object.prototype, { getPrototypeOf: Cl } = Object, Ps = /* @__PURE__ */ ((e) => (t) => {
  const n = wb.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ln = (e) => (e = e.toLowerCase(), (t) => Ps(t) === e), Cs = (e) => (t) => typeof t === e, { isArray: wo } = Array, ta = Cs("undefined");
function Eb(e) {
  return e !== null && !ta(e) && e.constructor !== null && !ta(e.constructor) && Ut(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Wf = ln("ArrayBuffer");
function Ob(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Wf(e.buffer), t;
}
const Nb = Cs("string"), Ut = Cs("function"), qf = Cs("number"), As = (e) => e !== null && typeof e == "object", xb = (e) => e === !0 || e === !1, La = (e) => {
  if (Ps(e) !== "object")
    return !1;
  const t = Cl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Db = ln("Date"), Tb = ln("File"), kb = ln("Blob"), Sb = ln("FileList"), Mb = (e) => As(e) && Ut(e.pipe), Pb = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ut(e.append) && ((t = Ps(e)) === "formdata" || // detect form-data instance
  t === "object" && Ut(e.toString) && e.toString() === "[object FormData]"));
}, Cb = ln("URLSearchParams"), [Ab, Vb, $b, Rb] = ["ReadableStream", "Request", "Response", "Headers"].map(ln), Ib = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function pa(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), wo(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = a.length;
    let i;
    for (r = 0; r < s; r++)
      i = a[r], t.call(null, e[i], i, e);
  }
}
function Gf(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const xr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, zf = (e) => !ta(e) && e !== xr;
function Hi() {
  const { caseless: e } = zf(this) && this || {}, t = {}, n = (r, o) => {
    const a = e && Gf(t, o) || o;
    La(t[a]) && La(r) ? t[a] = Hi(t[a], r) : La(r) ? t[a] = Hi({}, r) : wo(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && pa(arguments[r], n);
  return t;
}
const Fb = (e, t, n, { allOwnKeys: r } = {}) => (pa(t, (o, a) => {
  n && Ut(o) ? e[a] = Uf(o, n) : e[a] = o;
}, { allOwnKeys: r }), e), Lb = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Bb = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, jb = (e, t, n, r) => {
  let o, a, s;
  const i = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), a = o.length; a-- > 0; )
      s = o[a], (!r || r(s, e, t)) && !i[s] && (t[s] = e[s], i[s] = !0);
    e = n !== !1 && Cl(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Hb = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Yb = (e) => {
  if (!e) return null;
  if (wo(e)) return e;
  let t = e.length;
  if (!qf(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ub = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Cl(Uint8Array)), Wb = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const a = o.value;
    t.call(e, a[0], a[1]);
  }
}, qb = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Gb = ln("HTMLFormElement"), zb = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), hc = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Kb = ln("RegExp"), Kf = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  pa(n, (o, a) => {
    let s;
    (s = t(o, a, e)) !== !1 && (r[a] = s || o);
  }), Object.defineProperties(e, r);
}, Qb = (e) => {
  Kf(e, (t, n) => {
    if (Ut(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Ut(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Xb = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((a) => {
      n[a] = !0;
    });
  };
  return wo(e) ? r(e) : r(String(e).split(t)), n;
}, Jb = () => {
}, Zb = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, ti = "abcdefghijklmnopqrstuvwxyz", vc = "0123456789", Qf = {
  DIGIT: vc,
  ALPHA: ti,
  ALPHA_DIGIT: ti + ti.toUpperCase() + vc
}, e_ = (e = 16, t = Qf.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function t_(e) {
  return !!(e && Ut(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const n_ = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (As(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const a = wo(r) ? [] : {};
        return pa(r, (s, i) => {
          const l = n(s, o + 1);
          !ta(l) && (a[i] = l);
        }), t[o] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, r_ = ln("AsyncFunction"), o_ = (e) => e && (As(e) || Ut(e)) && Ut(e.then) && Ut(e.catch), Xf = ((e, t) => e ? setImmediate : t ? ((n, r) => (xr.addEventListener("message", ({ source: o, data: a }) => {
  o === xr && a === n && r.length && r.shift()();
}, !1), (o) => {
  r.push(o), xr.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  Ut(xr.postMessage)
), a_ = typeof queueMicrotask < "u" ? queueMicrotask.bind(xr) : typeof process < "u" && process.nextTick || Xf, G = {
  isArray: wo,
  isArrayBuffer: Wf,
  isBuffer: Eb,
  isFormData: Pb,
  isArrayBufferView: Ob,
  isString: Nb,
  isNumber: qf,
  isBoolean: xb,
  isObject: As,
  isPlainObject: La,
  isReadableStream: Ab,
  isRequest: Vb,
  isResponse: $b,
  isHeaders: Rb,
  isUndefined: ta,
  isDate: Db,
  isFile: Tb,
  isBlob: kb,
  isRegExp: Kb,
  isFunction: Ut,
  isStream: Mb,
  isURLSearchParams: Cb,
  isTypedArray: Ub,
  isFileList: Sb,
  forEach: pa,
  merge: Hi,
  extend: Fb,
  trim: Ib,
  stripBOM: Lb,
  inherits: Bb,
  toFlatObject: jb,
  kindOf: Ps,
  kindOfTest: ln,
  endsWith: Hb,
  toArray: Yb,
  forEachEntry: Wb,
  matchAll: qb,
  isHTMLForm: Gb,
  hasOwnProperty: hc,
  hasOwnProp: hc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Kf,
  freezeMethods: Qb,
  toObjectSet: Xb,
  toCamelCase: zb,
  noop: Jb,
  toFiniteNumber: Zb,
  findKey: Gf,
  global: xr,
  isContextDefined: zf,
  ALPHABET: Qf,
  generateString: e_,
  isSpecCompliantForm: t_,
  toJSONObject: n_,
  isAsyncFn: r_,
  isThenable: o_,
  setImmediate: Xf,
  asap: a_
};
function Ve(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o, this.status = o.status ? o.status : null);
}
G.inherits(Ve, Error, {
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
      config: G.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Jf = Ve.prototype, Zf = {};
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
  Zf[e] = { value: e };
});
Object.defineProperties(Ve, Zf);
Object.defineProperty(Jf, "isAxiosError", { value: !0 });
Ve.from = (e, t, n, r, o, a) => {
  const s = Object.create(Jf);
  return G.toFlatObject(e, s, function(l) {
    return l !== Error.prototype;
  }, (i) => i !== "isAxiosError"), Ve.call(s, e.message, t, n, r, o), s.cause = e, s.name = e.name, a && Object.assign(s, a), s;
};
const s_ = null;
function Yi(e) {
  return G.isPlainObject(e) || G.isArray(e);
}
function ep(e) {
  return G.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function yc(e, t, n) {
  return e ? e.concat(t).map(function(o, a) {
    return o = ep(o), !n && a ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function i_(e) {
  return G.isArray(e) && !e.some(Yi);
}
const l_ = G.toFlatObject(G, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Vs(e, t, n) {
  if (!G.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = G.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, M) {
    return !G.isUndefined(M[g]);
  });
  const r = n.metaTokens, o = n.visitor || d, a = n.dots, s = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && G.isSpecCompliantForm(t);
  if (!G.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(h) {
    if (h === null) return "";
    if (G.isDate(h))
      return h.toISOString();
    if (!l && G.isBlob(h))
      throw new Ve("Blob is not supported. Use a Buffer instead.");
    return G.isArrayBuffer(h) || G.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function d(h, g, M) {
    let $ = h;
    if (h && !M && typeof h == "object") {
      if (G.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), h = JSON.stringify(h);
      else if (G.isArray(h) && i_(h) || (G.isFileList(h) || G.endsWith(g, "[]")) && ($ = G.toArray(h)))
        return g = ep(g), $.forEach(function(b, x) {
          !(G.isUndefined(b) || b === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? yc([g], x, a) : s === null ? g : g + "[]",
            c(b)
          );
        }), !1;
    }
    return Yi(h) ? !0 : (t.append(yc(M, g, a), c(h)), !1);
  }
  const u = [], f = Object.assign(l_, {
    defaultVisitor: d,
    convertValue: c,
    isVisitable: Yi
  });
  function y(h, g) {
    if (!G.isUndefined(h)) {
      if (u.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      u.push(h), G.forEach(h, function($, A) {
        (!(G.isUndefined($) || $ === null) && o.call(
          t,
          $,
          G.isString(A) ? A.trim() : A,
          g,
          f
        )) === !0 && y($, g ? g.concat(A) : [A]);
      }), u.pop();
    }
  }
  if (!G.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function gc(e) {
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
  this._pairs = [], e && Vs(e, this, t);
}
const tp = Al.prototype;
tp.append = function(t, n) {
  this._pairs.push([t, n]);
};
tp.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, gc);
  } : gc;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function u_(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function np(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || u_, o = n && n.serialize;
  let a;
  if (o ? a = o(t, n) : a = G.isURLSearchParams(t) ? t.toString() : new Al(t, n).toString(r), a) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class bc {
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
    G.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const rp = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, c_ = typeof URLSearchParams < "u" ? URLSearchParams : Al, d_ = typeof FormData < "u" ? FormData : null, f_ = typeof Blob < "u" ? Blob : null, p_ = {
  isBrowser: !0,
  classes: {
    URLSearchParams: c_,
    FormData: d_,
    Blob: f_
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Vl = typeof window < "u" && typeof document < "u", Ui = typeof navigator == "object" && navigator || void 0, m_ = Vl && (!Ui || ["ReactNative", "NativeScript", "NS"].indexOf(Ui.product) < 0), h_ = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", v_ = Vl && window.location.href || "http://localhost", y_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Vl,
  hasStandardBrowserEnv: m_,
  hasStandardBrowserWebWorkerEnv: h_,
  navigator: Ui,
  origin: v_
}, Symbol.toStringTag, { value: "Module" })), Lt = {
  ...y_,
  ...p_
};
function g_(e, t) {
  return Vs(e, new Lt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, a) {
      return Lt.isNode && G.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function b_(e) {
  return G.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function __(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let a;
  for (r = 0; r < o; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function op(e) {
  function t(n, r, o, a) {
    let s = n[a++];
    if (s === "__proto__") return !0;
    const i = Number.isFinite(+s), l = a >= n.length;
    return s = !s && G.isArray(o) ? o.length : s, l ? (G.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r, !i) : ((!o[s] || !G.isObject(o[s])) && (o[s] = []), t(n, r, o[s], a) && G.isArray(o[s]) && (o[s] = __(o[s])), !i);
  }
  if (G.isFormData(e) && G.isFunction(e.entries)) {
    const n = {};
    return G.forEachEntry(e, (r, o) => {
      t(b_(r), o, n, 0);
    }), n;
  }
  return null;
}
function w_(e, t, n) {
  if (G.isString(e))
    try {
      return (t || JSON.parse)(e), G.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ma = {
  transitional: rp,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, a = G.isObject(t);
    if (a && G.isHTMLForm(t) && (t = new FormData(t)), G.isFormData(t))
      return o ? JSON.stringify(op(t)) : t;
    if (G.isArrayBuffer(t) || G.isBuffer(t) || G.isStream(t) || G.isFile(t) || G.isBlob(t) || G.isReadableStream(t))
      return t;
    if (G.isArrayBufferView(t))
      return t.buffer;
    if (G.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return g_(t, this.formSerializer).toString();
      if ((i = G.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Vs(
          i ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return a || o ? (n.setContentType("application/json", !1), w_(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ma.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (G.isResponse(t) || G.isReadableStream(t))
      return t;
    if (t && G.isString(t) && (r && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (i) {
        if (s)
          throw i.name === "SyntaxError" ? Ve.from(i, Ve.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: Lt.classes.FormData,
    Blob: Lt.classes.Blob
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
G.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ma.headers[e] = {};
});
const E_ = G.toObjectSet([
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
]), O_ = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), r = s.substring(o + 1).trim(), !(!n || t[n] && E_[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, _c = Symbol("internals");
function ko(e) {
  return e && String(e).trim().toLowerCase();
}
function Ba(e) {
  return e === !1 || e == null ? e : G.isArray(e) ? e.map(Ba) : String(e);
}
function N_(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const x_ = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ni(e, t, n, r, o) {
  if (G.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!G.isString(t)) {
    if (G.isString(r))
      return t.indexOf(r) !== -1;
    if (G.isRegExp(r))
      return r.test(t);
  }
}
function D_(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function T_(e, t) {
  const n = G.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, a, s) {
        return this[r].call(this, t, o, a, s);
      },
      configurable: !0
    });
  });
}
class Bt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function a(i, l, c) {
      const d = ko(l);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const u = G.findKey(o, d);
      (!u || o[u] === void 0 || c === !0 || c === void 0 && o[u] !== !1) && (o[u || l] = Ba(i));
    }
    const s = (i, l) => G.forEach(i, (c, d) => a(c, d, l));
    if (G.isPlainObject(t) || t instanceof this.constructor)
      s(t, n);
    else if (G.isString(t) && (t = t.trim()) && !x_(t))
      s(O_(t), n);
    else if (G.isHeaders(t))
      for (const [i, l] of t.entries())
        a(l, i, r);
    else
      t != null && a(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = ko(t), t) {
      const r = G.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return N_(o);
        if (G.isFunction(n))
          return n.call(this, o, r);
        if (G.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ko(t), t) {
      const r = G.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ni(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function a(s) {
      if (s = ko(s), s) {
        const i = G.findKey(r, s);
        i && (!n || ni(r, r[i], i, n)) && (delete r[i], o = !0);
      }
    }
    return G.isArray(t) ? t.forEach(a) : a(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || ni(this, this[a], a, t, !0)) && (delete this[a], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return G.forEach(this, (o, a) => {
      const s = G.findKey(r, a);
      if (s) {
        n[s] = Ba(o), delete n[a];
        return;
      }
      const i = t ? D_(a) : String(a).trim();
      i !== a && delete n[a], n[i] = Ba(o), r[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return G.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && G.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[_c] = this[_c] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function a(s) {
      const i = ko(s);
      r[i] || (T_(o, s), r[i] = !0);
    }
    return G.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
Bt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
G.reduceDescriptors(Bt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
G.freezeMethods(Bt);
function ri(e, t) {
  const n = this || ma, r = t || n, o = Bt.from(r.headers);
  let a = r.data;
  return G.forEach(e, function(i) {
    a = i.call(n, a, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), a;
}
function ap(e) {
  return !!(e && e.__CANCEL__);
}
function Eo(e, t, n) {
  Ve.call(this, e ?? "canceled", Ve.ERR_CANCELED, t, n), this.name = "CanceledError";
}
G.inherits(Eo, Ve, {
  __CANCEL__: !0
});
function sp(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Ve(
    "Request failed with status code " + n.status,
    [Ve.ERR_BAD_REQUEST, Ve.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function k_(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function S_(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, a = 0, s;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), d = r[a];
    s || (s = c), n[o] = l, r[o] = c;
    let u = a, f = 0;
    for (; u !== o; )
      f += n[u++], u = u % e;
    if (o = (o + 1) % e, o === a && (a = (a + 1) % e), c - s < t)
      return;
    const y = d && c - d;
    return y ? Math.round(f * 1e3 / y) : void 0;
  };
}
function M_(e, t) {
  let n = 0, r = 1e3 / t, o, a;
  const s = (c, d = Date.now()) => {
    n = d, o = null, a && (clearTimeout(a), a = null), e.apply(null, c);
  };
  return [(...c) => {
    const d = Date.now(), u = d - n;
    u >= r ? s(c, d) : (o = c, a || (a = setTimeout(() => {
      a = null, s(o);
    }, r - u)));
  }, () => o && s(o)];
}
const as = (e, t, n = 3) => {
  let r = 0;
  const o = S_(50, 250);
  return M_((a) => {
    const s = a.loaded, i = a.lengthComputable ? a.total : void 0, l = s - r, c = o(l), d = s <= i;
    r = s;
    const u = {
      loaded: s,
      total: i,
      progress: i ? s / i : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && i && d ? (i - s) / c : void 0,
      event: a,
      lengthComputable: i != null,
      [t ? "download" : "upload"]: !0
    };
    e(u);
  }, n);
}, wc = (e, t) => {
  const n = e != null;
  return [(r) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: r
  }), t[1]];
}, Ec = (e) => (...t) => G.asap(() => e(...t)), P_ = Lt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = Lt.navigator && /(msie|trident)/i.test(Lt.navigator.userAgent), n = document.createElement("a");
    let r;
    function o(a) {
      let s = a;
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
    return r = o(window.location.href), function(s) {
      const i = G.isString(s) ? o(s) : s;
      return i.protocol === r.protocol && i.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), C_ = Lt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, a) {
      const s = [e + "=" + encodeURIComponent(t)];
      G.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), G.isString(r) && s.push("path=" + r), G.isString(o) && s.push("domain=" + o), a === !0 && s.push("secure"), document.cookie = s.join("; ");
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
function A_(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function V_(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ip(e, t) {
  return e && !A_(t) ? V_(e, t) : t;
}
const Oc = (e) => e instanceof Bt ? { ...e } : e;
function Yr(e, t) {
  t = t || {};
  const n = {};
  function r(c, d, u) {
    return G.isPlainObject(c) && G.isPlainObject(d) ? G.merge.call({ caseless: u }, c, d) : G.isPlainObject(d) ? G.merge({}, d) : G.isArray(d) ? d.slice() : d;
  }
  function o(c, d, u) {
    if (G.isUndefined(d)) {
      if (!G.isUndefined(c))
        return r(void 0, c, u);
    } else return r(c, d, u);
  }
  function a(c, d) {
    if (!G.isUndefined(d))
      return r(void 0, d);
  }
  function s(c, d) {
    if (G.isUndefined(d)) {
      if (!G.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, d);
  }
  function i(c, d, u) {
    if (u in t)
      return r(c, d);
    if (u in e)
      return r(void 0, c);
  }
  const l = {
    url: a,
    method: a,
    data: a,
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
    validateStatus: i,
    headers: (c, d) => o(Oc(c), Oc(d), !0)
  };
  return G.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const u = l[d] || o, f = u(e[d], t[d], d);
    G.isUndefined(f) && u !== i || (n[d] = f);
  }), n;
}
const lp = (e) => {
  const t = Yr({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: a, headers: s, auth: i } = t;
  t.headers = s = Bt.from(s), t.url = np(ip(t.baseURL, t.url), e.params, e.paramsSerializer), i && s.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  );
  let l;
  if (G.isFormData(n)) {
    if (Lt.hasStandardBrowserEnv || Lt.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((l = s.getContentType()) !== !1) {
      const [c, ...d] = l ? l.split(";").map((u) => u.trim()).filter(Boolean) : [];
      s.setContentType([c || "multipart/form-data", ...d].join("; "));
    }
  }
  if (Lt.hasStandardBrowserEnv && (r && G.isFunction(r) && (r = r(t)), r || r !== !1 && P_(t.url))) {
    const c = o && a && C_.read(a);
    c && s.set(o, c);
  }
  return t;
}, $_ = typeof XMLHttpRequest < "u", R_ = $_ && function(e) {
  return new Promise(function(n, r) {
    const o = lp(e);
    let a = o.data;
    const s = Bt.from(o.headers).normalize();
    let { responseType: i, onUploadProgress: l, onDownloadProgress: c } = o, d, u, f, y, h;
    function g() {
      y && y(), h && h(), o.cancelToken && o.cancelToken.unsubscribe(d), o.signal && o.signal.removeEventListener("abort", d);
    }
    let M = new XMLHttpRequest();
    M.open(o.method.toUpperCase(), o.url, !0), M.timeout = o.timeout;
    function $() {
      if (!M)
        return;
      const b = Bt.from(
        "getAllResponseHeaders" in M && M.getAllResponseHeaders()
      ), V = {
        data: !i || i === "text" || i === "json" ? M.responseText : M.response,
        status: M.status,
        statusText: M.statusText,
        headers: b,
        config: e,
        request: M
      };
      sp(function(_) {
        n(_), g();
      }, function(_) {
        r(_), g();
      }, V), M = null;
    }
    "onloadend" in M ? M.onloadend = $ : M.onreadystatechange = function() {
      !M || M.readyState !== 4 || M.status === 0 && !(M.responseURL && M.responseURL.indexOf("file:") === 0) || setTimeout($);
    }, M.onabort = function() {
      M && (r(new Ve("Request aborted", Ve.ECONNABORTED, e, M)), M = null);
    }, M.onerror = function() {
      r(new Ve("Network Error", Ve.ERR_NETWORK, e, M)), M = null;
    }, M.ontimeout = function() {
      let x = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const V = o.transitional || rp;
      o.timeoutErrorMessage && (x = o.timeoutErrorMessage), r(new Ve(
        x,
        V.clarifyTimeoutError ? Ve.ETIMEDOUT : Ve.ECONNABORTED,
        e,
        M
      )), M = null;
    }, a === void 0 && s.setContentType(null), "setRequestHeader" in M && G.forEach(s.toJSON(), function(x, V) {
      M.setRequestHeader(V, x);
    }), G.isUndefined(o.withCredentials) || (M.withCredentials = !!o.withCredentials), i && i !== "json" && (M.responseType = o.responseType), c && ([f, h] = as(c, !0), M.addEventListener("progress", f)), l && M.upload && ([u, y] = as(l), M.upload.addEventListener("progress", u), M.upload.addEventListener("loadend", y)), (o.cancelToken || o.signal) && (d = (b) => {
      M && (r(!b || b.type ? new Eo(null, e, M) : b), M.abort(), M = null);
    }, o.cancelToken && o.cancelToken.subscribe(d), o.signal && (o.signal.aborted ? d() : o.signal.addEventListener("abort", d)));
    const A = k_(o.url);
    if (A && Lt.protocols.indexOf(A) === -1) {
      r(new Ve("Unsupported protocol " + A + ":", Ve.ERR_BAD_REQUEST, e));
      return;
    }
    M.send(a || null);
  });
}, I_ = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), o;
    const a = function(c) {
      if (!o) {
        o = !0, i();
        const d = c instanceof Error ? c : this.reason;
        r.abort(d instanceof Ve ? d : new Eo(d instanceof Error ? d.message : d));
      }
    };
    let s = t && setTimeout(() => {
      s = null, a(new Ve(`timeout ${t} of ms exceeded`, Ve.ETIMEDOUT));
    }, t);
    const i = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(a) : c.removeEventListener("abort", a);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", a));
    const { signal: l } = r;
    return l.unsubscribe = () => G.asap(i), l;
  }
}, F_ = function* (e, t) {
  let n = e.byteLength;
  if (!t || n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, L_ = async function* (e, t) {
  for await (const n of B_(e))
    yield* F_(n, t);
}, B_ = async function* (e) {
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
}, Nc = (e, t, n, r) => {
  const o = L_(e, t);
  let a = 0, s, i = (l) => {
    s || (s = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: c, value: d } = await o.next();
        if (c) {
          i(), l.close();
          return;
        }
        let u = d.byteLength;
        if (n) {
          let f = a += u;
          n(f);
        }
        l.enqueue(new Uint8Array(d));
      } catch (c) {
        throw i(c), c;
      }
    },
    cancel(l) {
      return i(l), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, $s = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", up = $s && typeof ReadableStream == "function", j_ = $s && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), cp = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, H_ = up && cp(() => {
  let e = !1;
  const t = new Request(Lt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), xc = 64 * 1024, Wi = up && cp(() => G.isReadableStream(new Response("").body)), ss = {
  stream: Wi && ((e) => e.body)
};
$s && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ss[t] && (ss[t] = G.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new Ve(`Response type '${t}' is not supported`, Ve.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Y_ = async (e) => {
  if (e == null)
    return 0;
  if (G.isBlob(e))
    return e.size;
  if (G.isSpecCompliantForm(e))
    return (await new Request(Lt.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (G.isArrayBufferView(e) || G.isArrayBuffer(e))
    return e.byteLength;
  if (G.isURLSearchParams(e) && (e = e + ""), G.isString(e))
    return (await j_(e)).byteLength;
}, U_ = async (e, t) => {
  const n = G.toFiniteNumber(e.getContentLength());
  return n ?? Y_(t);
}, W_ = $s && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: o,
    cancelToken: a,
    timeout: s,
    onDownloadProgress: i,
    onUploadProgress: l,
    responseType: c,
    headers: d,
    withCredentials: u = "same-origin",
    fetchOptions: f
  } = lp(e);
  c = c ? (c + "").toLowerCase() : "text";
  let y = I_([o, a && a.toAbortSignal()], s), h;
  const g = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let M;
  try {
    if (l && H_ && n !== "get" && n !== "head" && (M = await U_(d, r)) !== 0) {
      let V = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), k;
      if (G.isFormData(r) && (k = V.headers.get("content-type")) && d.setContentType(k), V.body) {
        const [_, T] = wc(
          M,
          as(Ec(l))
        );
        r = Nc(V.body, xc, _, T);
      }
    }
    G.isString(u) || (u = u ? "include" : "omit");
    const $ = "credentials" in Request.prototype;
    h = new Request(t, {
      ...f,
      signal: y,
      method: n.toUpperCase(),
      headers: d.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: $ ? u : void 0
    });
    let A = await fetch(h);
    const b = Wi && (c === "stream" || c === "response");
    if (Wi && (i || b && g)) {
      const V = {};
      ["status", "statusText", "headers"].forEach((I) => {
        V[I] = A[I];
      });
      const k = G.toFiniteNumber(A.headers.get("content-length")), [_, T] = i && wc(
        k,
        as(Ec(i), !0)
      ) || [];
      A = new Response(
        Nc(A.body, xc, _, () => {
          T && T(), g && g();
        }),
        V
      );
    }
    c = c || "text";
    let x = await ss[G.findKey(ss, c) || "text"](A, e);
    return !b && g && g(), await new Promise((V, k) => {
      sp(V, k, {
        data: x,
        headers: Bt.from(A.headers),
        status: A.status,
        statusText: A.statusText,
        config: e,
        request: h
      });
    });
  } catch ($) {
    throw g && g(), $ && $.name === "TypeError" && /fetch/i.test($.message) ? Object.assign(
      new Ve("Network Error", Ve.ERR_NETWORK, e, h),
      {
        cause: $.cause || $
      }
    ) : Ve.from($, $ && $.code, e, h);
  }
}), qi = {
  http: s_,
  xhr: R_,
  fetch: W_
};
G.forEach(qi, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Dc = (e) => `- ${e}`, q_ = (e) => G.isFunction(e) || e === null || e === !1, dp = {
  getAdapter: (e) => {
    e = G.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let s;
      if (r = n, !q_(n) && (r = qi[(s = String(n)).toLowerCase()], r === void 0))
        throw new Ve(`Unknown adapter '${s}'`);
      if (r)
        break;
      o[s || "#" + a] = r;
    }
    if (!r) {
      const a = Object.entries(o).map(
        ([i, l]) => `adapter ${i} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? a.length > 1 ? `since :
` + a.map(Dc).join(`
`) : " " + Dc(a[0]) : "as no adapter specified";
      throw new Ve(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: qi
};
function oi(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Eo(null, e);
}
function Tc(e) {
  return oi(e), e.headers = Bt.from(e.headers), e.data = ri.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), dp.getAdapter(e.adapter || ma.adapter)(e).then(function(r) {
    return oi(e), r.data = ri.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Bt.from(r.headers), r;
  }, function(r) {
    return ap(r) || (oi(e), r && r.response && (r.response.data = ri.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Bt.from(r.response.headers))), Promise.reject(r);
  });
}
const fp = "1.7.7", $l = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  $l[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const kc = {};
$l.transitional = function(t, n, r) {
  function o(a, s) {
    return "[Axios v" + fp + "] Transitional option '" + a + "'" + s + (r ? ". " + r : "");
  }
  return (a, s, i) => {
    if (t === !1)
      throw new Ve(
        o(s, " has been removed" + (n ? " in " + n : "")),
        Ve.ERR_DEPRECATED
      );
    return n && !kc[s] && (kc[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, s, i) : !0;
  };
};
function G_(e, t, n) {
  if (typeof e != "object")
    throw new Ve("options must be an object", Ve.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const a = r[o], s = t[a];
    if (s) {
      const i = e[a], l = i === void 0 || s(i, a, e);
      if (l !== !0)
        throw new Ve("option " + a + " must be " + l, Ve.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Ve("Unknown option " + a, Ve.ERR_BAD_OPTION);
  }
}
const Gi = {
  assertOptions: G_,
  validators: $l
}, Yn = Gi.validators;
class $r {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new bc(),
      response: new bc()
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
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const a = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? a && !String(r.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + a) : r.stack = a;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Yr(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: a } = n;
    r !== void 0 && Gi.assertOptions(r, {
      silentJSONParsing: Yn.transitional(Yn.boolean),
      forcedJSONParsing: Yn.transitional(Yn.boolean),
      clarifyTimeoutError: Yn.transitional(Yn.boolean)
    }, !1), o != null && (G.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Gi.assertOptions(o, {
      encode: Yn.function,
      serialize: Yn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = a && G.merge(
      a.common,
      a[n.method]
    );
    a && G.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete a[h];
      }
    ), n.headers = Bt.concat(s, a);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (l = l && g.synchronous, i.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let d, u = 0, f;
    if (!l) {
      const h = [Tc.bind(this), void 0];
      for (h.unshift.apply(h, i), h.push.apply(h, c), f = h.length, d = Promise.resolve(n); u < f; )
        d = d.then(h[u++], h[u++]);
      return d;
    }
    f = i.length;
    let y = n;
    for (u = 0; u < f; ) {
      const h = i[u++], g = i[u++];
      try {
        y = h(y);
      } catch (M) {
        g.call(this, M);
        break;
      }
    }
    try {
      d = Tc.call(this, y);
    } catch (h) {
      return Promise.reject(h);
    }
    for (u = 0, f = c.length; u < f; )
      d = d.then(c[u++], c[u++]);
    return d;
  }
  getUri(t) {
    t = Yr(this.defaults, t);
    const n = ip(t.baseURL, t.url);
    return np(n, t.params, t.paramsSerializer);
  }
}
G.forEach(["delete", "get", "head", "options"], function(t) {
  $r.prototype[t] = function(n, r) {
    return this.request(Yr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
G.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, s, i) {
      return this.request(Yr(i || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  $r.prototype[t] = n(), $r.prototype[t + "Form"] = n(!0);
});
class Rl {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let a;
      const s = new Promise((i) => {
        r.subscribe(i), a = i;
      }).then(o);
      return s.cancel = function() {
        r.unsubscribe(a);
      }, s;
    }, t(function(a, s, i) {
      r.reason || (r.reason = new Eo(a, s, i), n(r.reason));
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
      token: new Rl(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
function z_(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function K_(e) {
  return G.isObject(e) && e.isAxiosError === !0;
}
const zi = {
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
Object.entries(zi).forEach(([e, t]) => {
  zi[t] = e;
});
function pp(e) {
  const t = new $r(e), n = Uf($r.prototype.request, t);
  return G.extend(n, $r.prototype, t, { allOwnKeys: !0 }), G.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return pp(Yr(e, o));
  }, n;
}
const ut = pp(ma);
ut.Axios = $r;
ut.CanceledError = Eo;
ut.CancelToken = Rl;
ut.isCancel = ap;
ut.VERSION = fp;
ut.toFormData = Vs;
ut.AxiosError = Ve;
ut.Cancel = ut.CanceledError;
ut.all = function(t) {
  return Promise.all(t);
};
ut.spread = z_;
ut.isAxiosError = K_;
ut.mergeConfig = Yr;
ut.AxiosHeaders = Bt;
ut.formToJSON = (e) => op(G.isHTMLForm(e) ? new FormData(e) : e);
ut.getAdapter = dp.getAdapter;
ut.HttpStatusCode = zi;
ut.default = ut;
function Sc(e) {
  return ut.get(e).then((t) => t.data);
}
const mp = {
  Value: os,
  ValueString: uo,
  ValueDoubleRange: Vr,
  ValueDateRange: co,
  ValueFilePath: fo,
  Mode: Hr,
  SubSystem: ir,
  Command: ea,
  PORISValue: os,
  PORISValueString: uo,
  PORISValueFloat: Vr,
  PORISValueDoubleRange: Vr,
  PORISValueDate: co,
  PORISValueFilePath: fo,
  PORISMode: Hr,
  PORISNode: ir,
  PORISCmd: ea
}, Q_ = [
  "value",
  "value-string",
  "value-double-range",
  "value-date",
  "value-file-path"
], X_ = "mode", J_ = "sub-system", Z_ = "command";
function it(e, t) {
  const n = e.getElementsByTagName(t);
  if (n.length > 0 && n[0].childNodes.length > 0) {
    const r = n[0].getAttribute("type");
    return r === "integer" ? parseInt(n[0].childNodes[0].nodeValue, 10) : r === "float" ? parseFloat(n[0].childNodes[0].nodeValue) : r === "timestamp" ? Date.parse(n[0].childNodes[0].nodeValue) : n[0].childNodes[0].nodeValue;
  } else
    return null;
}
function ew(e, t) {
  const n = e.getElementsByTagName("destinations"), r = [];
  if (n.length > 0) {
    const o = e.getElementsByTagName("destination");
    if (o.length > 0)
      for (const a of o) {
        const s = mp[a.getAttribute("type")], i = it(a, "id");
        s && s != ea && (s == ir && (t.find((l) => {
        }) || t.push(i)), r.push({ type: s, id: i }));
      }
  }
  return r.length > 0 ? r : null;
}
function tw(e) {
  const t = e.getElementsByTagName("commands");
  return t.length === 0 ? [] : Array.from(t[0].getElementsByTagName("command-ref")).map((n) => ({
    type: ea,
    id: it(n, "id")
  }));
}
function nw(e) {
  const t = e.getElementsByTagName("node-attributes"), n = [];
  if (t.length > 0) {
    const r = e.getElementsByTagName("node-attribute");
    if (r.length > 0)
      for (const o of r) {
        const a = it(o, "content"), s = it(o, "name");
        it(o, "visibility") && n.push({ name: s, content: a });
      }
  }
  return n.length > 0 ? n : null;
}
function rw(e) {
  const t = e.getElementsByTagName("labels"), n = [];
  if (t.length > 0) {
    const r = e.getElementsByTagName("label");
    if (r.length > 0)
      for (const o of r) {
        const a = it(o, "name");
        n.push(a);
      }
  }
  return n.length > 0 ? n[0] : null;
}
function ka(e, t) {
  let n = it(e, "id"), r = it(e, "ident"), o = it(e, "name"), a = it(e, "node-type-id"), s = mp[it(e, "type")], i = ew(e, t), l = tw(e), c = nw(e), d = rw(e), u = !!(i != null && i.find((g) => ji.includes(g.type) && g.id > 0)), f = !!(i != null && i.find((g) => ji.includes(g.type))), y = !!(i != null && i.find((g) => g.type == Hr)), h = !!(i != null && i.find((g) => g.type == ir));
  return {
    id: n,
    ident: r,
    name: o,
    nodeTypeId: a,
    type: s,
    destinations: i,
    commandReferences: l,
    nodeAttributes: c,
    label: d,
    hasValues: f,
    hasRealValues: u,
    hasModes: y,
    hasSubsystems: h
  };
}
function ai(e, t) {
  t.forEach((n) => {
    if (n.destinations) {
      let r = n.destinations.map((o) => e.findNode(o.type, o.id));
      n.valuesNodes = r.filter((o) => o.type != Hr && o.type != ir), n.modesNodes = r.filter((o) => o.type === Hr), n.subsystemsNodes = r.filter((o) => o.type === ir), n.modesNodes.forEach((o) => {
        o.parent = n;
      }), n.subsystemsNodes.forEach((o) => {
        o.parent = n;
      });
    }
  });
}
function Mc(e) {
  e.forEach((t) => {
    let n = null;
    t.modesNodes && t.modesNodes.length > 0 && (t.defaultModeId ? n = t.modesNodes.find((r) => r.id === t.defaultModeId) : n = t.modesNodes[0]), t.defaultMode = n;
  });
}
function ow(e, t) {
  t.forEach((n) => {
    n.commandsNodes = (n.commandReferences || []).map((r) => e.findNode(r.type, r.id)).filter(Boolean);
  });
}
function aw(e) {
  e.forEach((t) => {
    var n, r;
    t.defaultValue = ((n = t.valuesNodes) == null ? void 0 : n.find((o) => o.id === t.defaultValueId)) || ((r = t.valuesNodes) == null ? void 0 : r[0]) || null;
  });
}
function Pc(e, t) {
  const n = {
    values: [],
    modes: [],
    params: [],
    subsystems: [],
    commands: [],
    findNode: function(c, d) {
      let u = null;
      return c == Hr ? u = this.modes : c == ir ? u = this.subsystems : c == ea ? u = this.commands : u = this.values, u.find((f) => f.id === d);
    }
  };
  var r = [];
  const a = new DOMParser().parseFromString(t, "text/xml");
  for (const c of Q_) {
    let d = a.getElementsByTagName(c);
    for (const u of d) {
      const f = ka(u, r);
      f.parent = null;
      let y = it(u, "value-formatter-id");
      f[y] = y;
      const h = f.type;
      if (h == Vr) {
        let g = it(u, "default-float"), M = it(u, "rangemax"), $ = it(u, "rangemin");
        f.defaultFloat = g, f.rangemax = M, f.rangemin = $;
      } else if (h == uo) {
        let g = it(u, "default-string");
        f.defaultString = g;
      } else if (h == co) {
        let g = it(u, "default-date"), M = it(u, "date-max"), $ = it(u, "date-min");
        f.defaultDate = g, f.datemax = M, f.datemin = $;
      } else if (h == fo) {
        let g = it(u, "default-string"), M = it(u, "file-description"), $ = it(u, "file-extension");
        f.defaultString = g, f.fileDescription = M, f.fileExtension = $;
      }
      n.values.push(new Ta(f));
    }
  }
  const s = a.getElementsByTagName(X_);
  for (const c of s) {
    const d = ka(c, r);
    let u = it(c, "default-mode-id"), f = it(c, "default-value-id");
    d.defaultModeId = u, d.defaultValueId = f, n.modes.push(new Ta(d));
  }
  const i = a.getElementsByTagName(Z_);
  for (const c of i) {
    const d = ka(c, r);
    n.commands.push(new Ta(d));
  }
  const l = a.getElementsByTagName(J_);
  for (const c of l) {
    const d = ka(c, r);
    let u = it(c, "default-mode-id");
    d.defaultModeId = u, n.subsystems.push(new Ta(d));
  }
  return n.rootSubsystem = n.subsystems.find((c) => !r.includes(c.id)), ai(n, n.modes), ai(n, n.params), ai(n, n.subsystems), Mc(n.modes), Mc(n.subsystems), aw(n.modes), ow(n, n.subsystems), n;
}
let hp = !1;
function sw(e) {
  hp = e;
}
function Qn(...e) {
  hp && console.log(...e);
}
const Il = Zy("model", () => {
  const e = Z(null), t = Z([]), n = Z([]), r = Z([]), o = Z(), a = Z(!1), s = Z([]), i = Z({});
  function l(k) {
    a.value = !0, Sc(`/models/${k}.xml`).then((T) => {
      e.value = T;
      let I = Pc(this, T);
      t.value = I.values, n.value = I.modes, r.value = I.subsystems, o.value = I.rootSubsystem, s.value = [], i.value = {}, g(I.rootSubsystem);
    }).finally(() => {
      a.value = !1;
    });
  }
  function c(k) {
    a.value = !0, Sc(`${k}`).then((T) => {
      e.value = T;
      let I = Pc(this, T);
      t.value = I.values, n.value = I.modes, r.value = I.subsystems, o.value = I.rootSubsystem, s.value = [], i.value = {}, g(I.rootSubsystem);
    }).finally(() => {
      a.value = !1;
    });
  }
  function d(k) {
    return t.value.find((_) => _.id == k);
  }
  function u(k) {
    return n.value.find((_) => _.id == k);
  }
  function f(k) {
    return r.value.find((_) => _.id == k);
  }
  function y(k, _, T) {
    if (k.validModes = T, T.length > 0) {
      let I = k.currentMode, R = null;
      return T.length > 0 ? _ != null && T.includes(_) ? R = _ : T.includes(k.defaultMode) ? R = k.defaultMode : R = T[0] : R = k.defaultMode, I != R && (k.currentMode = R, k.candidateMode = R, s.value[`${k.id}`] = R), k.hasValues && V(k, R), k.hasSubsystems && k.subsystemsNodes.forEach((O) => {
        M(O, O.currentMode, R);
      }), R;
    } else
      return k.currentMode = null, k.candidateMode = null, null;
  }
  function h(k, _) {
    Qn(`setValidMode_ ${k.name} ${_ == null ? void 0 : _.name}, NOT using supermode`);
    let T = A(k);
    return Qn(`   setValidMode validModes len ${T.length}`, T), y(k, _, T);
  }
  function g(k, _) {
    Rn();
    let T;
    try {
      T = h(k, _);
    } finally {
      Dm();
    }
    return mu(s), mu(i), T;
  }
  function M(k, _, T) {
    let I = mc(k.modesNodes, T.modesNodes);
    return Qn(`   setValidMode validModes  len ${I.length}`, I), y(k, _, I);
  }
  function $(k) {
    const _ = s.value.reduce((T, I) => k.includes(I.id) ? I : T, null);
    return _ || k[0];
  }
  function A(k) {
    return k.parent != null ? (Qn(`parent: ${k.parent.name}`), Qn(`parent mode: ${k.parent.currentMode.name}`), Qn("parent.mode.submodes:", k.parent.currentMode.modesNodes), mc(k.modesNodes, k.parent.currentMode.modesNodes)) : k.modesNodes;
  }
  function b(k) {
    return A(k).length > 0;
  }
  function x(k, _, T) {
    i.value[`${k.id}`] = { value: _, data: T };
  }
  function V(k, _, T = null) {
    const I = i.value[`${k.id}`] || {};
    if (!(_ != null && _.hasValues))
      return x(k, null, null), { value: null, data: null };
    const R = _.valuesNodes || [];
    if (R.length === 0)
      return x(k, null, null), { value: null, data: null };
    const O = R.find((U) => {
      var E;
      return U.id === ((E = _.defaultValue) == null ? void 0 : E.id);
    }) || R[0];
    let N = R.find((U) => {
      var E;
      return U.id === ((E = T || I.value) == null ? void 0 : E.id);
    }) || O, j = I.data;
    return N.type === Vr ? (typeof j != "number" || !Number.isFinite(j) || j < Number(N.rangemin) || j > Number(N.rangemax)) && (j = Number(N.defaultFloat)) : N.type === uo || N.type === fo ? typeof j != "string" && (j = N.defaultString || "") : N.type === co && j == null && (j = N.defaultDate), x(k, N, j), { value: N, data: j };
  }
  return {
    xmlModel: e,
    rootSubsystem: o,
    isLoading: a,
    currentModes: s,
    systemValues: i,
    loadModel: l,
    loadModelURL: c,
    getValue: d,
    getMode: u,
    getSubsystem: f,
    getCurrentMode: $,
    setValidMode: g,
    getValidObjModes: A,
    hasValidObjModes: b,
    getSystemValue: V,
    setSystemValue: x
  };
}), iw = ["disabled"], lw = ["value"], vp = {
  __name: "ModeSelector",
  props: /* @__PURE__ */ Yd({
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
    const t = Ri(e, "modelValue"), n = e, r = Z(n.modes);
    return ft(
      () => n.modes,
      (o, a) => {
        r.value = o;
      }
    ), (o, a) => tr((L(), z("select", {
      "onUpdate:modelValue": a[0] || (a[0] = (s) => t.value = s),
      disabled: r.value.length < 2
    }, [
      (L(!0), z(Oe, null, Ke(r.value, (s) => (L(), z("option", {
        key: s.id,
        value: s
      }, ze(s.label || s.name), 9, lw))), 128))
    ], 8, iw)), [
      [ff, t.value]
    ]);
  }
};
function De(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Ge(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function en(e, t) {
  const n = De(e);
  return isNaN(t) ? Ge(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function rn(e, t) {
  const n = De(e);
  if (isNaN(t)) return Ge(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = Ge(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const a = o.getDate();
  return r >= a ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
function yp(e, t) {
  const {
    years: n = 0,
    months: r = 0,
    weeks: o = 0,
    days: a = 0,
    hours: s = 0,
    minutes: i = 0,
    seconds: l = 0
  } = t, c = De(e), d = r || n ? rn(c, r + n * 12) : c, u = a || o ? en(d, a + o * 7) : d, f = i + s * 60, h = (l + f * 60) * 1e3;
  return Ge(e, u.getTime() + h);
}
const gp = 6048e5, uw = 864e5, cw = 6e4, dw = 36e5, fw = 1e3;
let pw = {};
function Wr() {
  return pw;
}
function Dn(e, t) {
  var i, l, c, d;
  const n = Wr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = De(e), a = o.getDay(), s = (a < r ? 7 : 0) + a - r;
  return o.setDate(o.getDate() - s), o.setHours(0, 0, 0, 0), o;
}
function po(e) {
  return Dn(e, { weekStartsOn: 1 });
}
function bp(e) {
  const t = De(e), n = t.getFullYear(), r = Ge(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = po(r), a = Ge(e, 0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  const s = po(a);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1;
}
function Cc(e) {
  const t = De(e);
  return t.setHours(0, 0, 0, 0), t;
}
function is(e) {
  const t = De(e), n = new Date(
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
function _p(e, t) {
  const n = Cc(e), r = Cc(t), o = +n - is(n), a = +r - is(r);
  return Math.round((o - a) / uw);
}
function mw(e) {
  const t = bp(e), n = Ge(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), po(n);
}
function hw(e, t) {
  const n = t * 3;
  return rn(e, n);
}
function Fl(e, t) {
  return rn(e, t * 12);
}
function wp(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Uo(e) {
  if (!wp(e) && typeof e != "number")
    return !1;
  const t = De(e);
  return !isNaN(Number(t));
}
function Ac(e) {
  const t = De(e);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function Ep(e, t) {
  const n = De(e.start), r = De(e.end);
  let o = +n > +r;
  const a = o ? +n : +r, s = o ? r : n;
  s.setHours(0, 0, 0, 0);
  let i = 1;
  const l = [];
  for (; +s <= a; )
    l.push(De(s)), s.setDate(s.getDate() + i), s.setHours(0, 0, 0, 0);
  return o ? l.reverse() : l;
}
function Dr(e) {
  const t = De(e), n = t.getMonth(), r = n - n % 3;
  return t.setMonth(r, 1), t.setHours(0, 0, 0, 0), t;
}
function vw(e, t) {
  const n = De(e.start), r = De(e.end);
  let o = +n > +r;
  const a = o ? +Dr(n) : +Dr(r);
  let s = Dr(o ? r : n), i = 1;
  const l = [];
  for (; +s <= a; )
    l.push(De(s)), s = hw(s, i);
  return o ? l.reverse() : l;
}
function yw(e) {
  const t = De(e), n = t.getFullYear();
  return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function Op(e) {
  const t = De(e), n = Ge(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function gw(e, t) {
  var i, l, c, d;
  const n = Wr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.weekStartsOn) ?? n.weekStartsOn ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = De(e), a = o.getDay(), s = (a < r ? -7 : 0) + 6 - (a - r);
  return o.setDate(o.getDate() + s), o.setHours(23, 59, 59, 999), o;
}
function Vc(e) {
  const t = De(e), n = t.getMonth(), r = n - n % 3 + 3;
  return t.setMonth(r, 0), t.setHours(23, 59, 59, 999), t;
}
const bw = {
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
}, _w = (e, t, n) => {
  let r;
  const o = bw[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function si(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const ww = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ew = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ow = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Nw = {
  date: si({
    formats: ww,
    defaultWidth: "full"
  }),
  time: si({
    formats: Ew,
    defaultWidth: "full"
  }),
  dateTime: si({
    formats: Ow,
    defaultWidth: "full"
  })
}, xw = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Dw = (e, t, n, r) => xw[e];
function So(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : s;
      o = e.formattingValues[i] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, i = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[i] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[a];
  };
}
const Tw = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, kw = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Sw = {
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
}, Mw = {
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
}, Pw = {
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
}, Cw = {
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
}, Aw = (e, t) => {
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
  ordinalNumber: Aw,
  era: So({
    values: Tw,
    defaultWidth: "wide"
  }),
  quarter: So({
    values: kw,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: So({
    values: Sw,
    defaultWidth: "wide"
  }),
  day: So({
    values: Mw,
    defaultWidth: "wide"
  }),
  dayPeriod: So({
    values: Pw,
    defaultWidth: "wide",
    formattingValues: Cw,
    defaultFormattingWidth: "wide"
  })
};
function Mo(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(o);
    if (!a)
      return null;
    const s = a[0], i = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(i) ? Rw(i, (u) => u.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      $w(i, (u) => u.test(s))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(c)
    ) : c;
    const d = t.slice(s.length);
    return { value: c, rest: d };
  };
}
function $w(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Rw(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Iw(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const i = t.slice(o.length);
    return { value: s, rest: i };
  };
}
const Fw = /^(\d+)(th|st|nd|rd)?/i, Lw = /\d+/i, Bw = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, jw = {
  any: [/^b/i, /^(a|c)/i]
}, Hw = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Yw = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Uw = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ww = {
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
}, qw = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Gw = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, zw = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Kw = {
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
}, Qw = {
  ordinalNumber: Iw({
    matchPattern: Fw,
    parsePattern: Lw,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Mo({
    matchPatterns: Bw,
    defaultMatchWidth: "wide",
    parsePatterns: jw,
    defaultParseWidth: "any"
  }),
  quarter: Mo({
    matchPatterns: Hw,
    defaultMatchWidth: "wide",
    parsePatterns: Yw,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Mo({
    matchPatterns: Uw,
    defaultMatchWidth: "wide",
    parsePatterns: Ww,
    defaultParseWidth: "any"
  }),
  day: Mo({
    matchPatterns: qw,
    defaultMatchWidth: "wide",
    parsePatterns: Gw,
    defaultParseWidth: "any"
  }),
  dayPeriod: Mo({
    matchPatterns: zw,
    defaultMatchWidth: "any",
    parsePatterns: Kw,
    defaultParseWidth: "any"
  })
}, Np = {
  code: "en-US",
  formatDistance: _w,
  formatLong: Nw,
  formatRelative: Dw,
  localize: Vw,
  match: Qw,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function Xw(e) {
  const t = De(e);
  return _p(t, Op(t)) + 1;
}
function Ll(e) {
  const t = De(e), n = +po(t) - +mw(t);
  return Math.round(n / gp) + 1;
}
function Bl(e, t) {
  var d, u, f, y;
  const n = De(e), r = n.getFullYear(), o = Wr(), a = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((u = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((y = (f = o.locale) == null ? void 0 : f.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, s = Ge(e, 0);
  s.setFullYear(r + 1, 0, a), s.setHours(0, 0, 0, 0);
  const i = Dn(s, t), l = Ge(e, 0);
  l.setFullYear(r, 0, a), l.setHours(0, 0, 0, 0);
  const c = Dn(l, t);
  return n.getTime() >= i.getTime() ? r + 1 : n.getTime() >= c.getTime() ? r : r - 1;
}
function Jw(e, t) {
  var i, l, c, d;
  const n = Wr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (i = t == null ? void 0 : t.locale) == null ? void 0 : i.options) == null ? void 0 : l.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (c = n.locale) == null ? void 0 : c.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = Bl(e, t), a = Ge(e, 0);
  return a.setFullYear(o, 0, r), a.setHours(0, 0, 0, 0), Dn(a, t);
}
function jl(e, t) {
  const n = De(e), r = +Dn(n, t) - +Jw(n, t);
  return Math.round(r / gp) + 1;
}
function Qe(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Un = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return Qe(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : Qe(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return Qe(e.getDate(), t.length);
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
    return Qe(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return Qe(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return Qe(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return Qe(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return Qe(o, t.length);
  }
}, zr = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, $c = {
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
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return Un.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = Bl(e, r), a = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const s = a % 100;
      return Qe(s, 2);
    }
    return t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Qe(a, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = bp(e);
    return Qe(n, t.length);
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
    return Qe(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return Qe(r, 2);
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
        return Qe(r, 2);
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
        return Un.M(e, t);
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
        return Qe(r + 1, 2);
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
    const o = jl(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : Qe(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = Ll(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Qe(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Un.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = Xw(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Qe(r, t.length);
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
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(a);
      case "ee":
        return Qe(a, 2);
      case "eo":
        return n.ordinalNumber(a, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), a = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(a);
      case "cc":
        return Qe(a, t.length);
      case "co":
        return n.ordinalNumber(a, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return Qe(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
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
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = zr.noon : r === 0 ? o = zr.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = zr.evening : r >= 12 ? o = zr.afternoon : r >= 4 ? o = zr.morning : o = zr.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
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
    return Un.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Un.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Qe(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Qe(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Un.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Un.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Un.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return Ic(r);
      case "XXXX":
      case "XX":
        return _r(r);
      case "XXXXX":
      case "XXX":
      default:
        return _r(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return Ic(r);
      case "xxxx":
      case "xx":
        return _r(r);
      case "xxxxx":
      case "xxx":
      default:
        return _r(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Rc(r, ":");
      case "OOOO":
      default:
        return "GMT" + _r(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Rc(r, ":");
      case "zzzz":
      default:
        return "GMT" + _r(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return Qe(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return Qe(r, t.length);
  }
};
function Rc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), a = r % 60;
  return a === 0 ? n + String(o) : n + String(o) + t + Qe(a, 2);
}
function Ic(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + Qe(Math.abs(e) / 60, 2) : _r(e, t);
}
function _r(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Qe(Math.trunc(r / 60), 2), a = Qe(r % 60, 2);
  return n + o + t + a;
}
const Fc = (e, t) => {
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
}, xp = (e, t) => {
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
}, Zw = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Fc(e, t);
  let a;
  switch (r) {
    case "P":
      a = t.dateTime({ width: "short" });
      break;
    case "PP":
      a = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      a = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      a = t.dateTime({ width: "full" });
      break;
  }
  return a.replace("{{date}}", Fc(r, t)).replace("{{time}}", xp(o, t));
}, Ki = {
  p: xp,
  P: Zw
}, e1 = /^D+$/, t1 = /^Y+$/, n1 = ["D", "DD", "YY", "YYYY"];
function Dp(e) {
  return e1.test(e);
}
function Tp(e) {
  return t1.test(e);
}
function Qi(e, t, n) {
  const r = r1(e, t, n);
  if (console.warn(r), n1.includes(e)) throw new RangeError(r);
}
function r1(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const o1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, a1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, s1 = /^'([^]*?)'?$/, i1 = /''/g, l1 = /[a-zA-Z]/;
function _n(e, t, n) {
  var d, u, f, y, h, g, M, $;
  const r = Wr(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Np, a = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((u = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : u.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((y = (f = r.locale) == null ? void 0 : f.options) == null ? void 0 : y.firstWeekContainsDate) ?? 1, s = (n == null ? void 0 : n.weekStartsOn) ?? ((g = (h = n == null ? void 0 : n.locale) == null ? void 0 : h.options) == null ? void 0 : g.weekStartsOn) ?? r.weekStartsOn ?? (($ = (M = r.locale) == null ? void 0 : M.options) == null ? void 0 : $.weekStartsOn) ?? 0, i = De(e);
  if (!Uo(i))
    throw new RangeError("Invalid time value");
  let l = t.match(a1).map((A) => {
    const b = A[0];
    if (b === "p" || b === "P") {
      const x = Ki[b];
      return x(A, o.formatLong);
    }
    return A;
  }).join("").match(o1).map((A) => {
    if (A === "''")
      return { isToken: !1, value: "'" };
    const b = A[0];
    if (b === "'")
      return { isToken: !1, value: u1(A) };
    if ($c[b])
      return { isToken: !0, value: A };
    if (b.match(l1))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + b + "`"
      );
    return { isToken: !1, value: A };
  });
  o.localize.preprocessor && (l = o.localize.preprocessor(i, l));
  const c = {
    firstWeekContainsDate: a,
    weekStartsOn: s,
    locale: o
  };
  return l.map((A) => {
    if (!A.isToken) return A.value;
    const b = A.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && Tp(b) || !(n != null && n.useAdditionalDayOfYearTokens) && Dp(b)) && Qi(b, t, String(e));
    const x = $c[b[0]];
    return x(i, b, o.localize, c);
  }).join("");
}
function u1(e) {
  const t = e.match(s1);
  return t ? t[1].replace(i1, "'") : e;
}
function c1(e) {
  return De(e).getDay();
}
function d1(e) {
  const t = De(e), n = t.getFullYear(), r = t.getMonth(), o = Ge(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function f1() {
  return Object.assign({}, Wr());
}
function on(e) {
  return De(e).getHours();
}
function p1(e) {
  let n = De(e).getDay();
  return n === 0 && (n = 7), n;
}
function wn(e) {
  return De(e).getMinutes();
}
function He(e) {
  return De(e).getMonth();
}
function mo(e) {
  return De(e).getSeconds();
}
function Ie(e) {
  return De(e).getFullYear();
}
function na(e, t) {
  const n = De(e), r = De(t);
  return n.getTime() > r.getTime();
}
function ra(e, t) {
  const n = De(e), r = De(t);
  return +n < +r;
}
function to(e, t) {
  const n = De(e), r = De(t);
  return +n == +r;
}
function m1(e, t) {
  const n = t instanceof Date ? Ge(t, 0) : new t(0);
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
const h1 = 10;
class kp {
  constructor() {
    he(this, "subPriority", 0);
  }
  validate(t, n) {
    return !0;
  }
}
class v1 extends kp {
  constructor(t, n, r, o, a) {
    super(), this.value = t, this.validateValue = n, this.setValue = r, this.priority = o, a && (this.subPriority = a);
  }
  validate(t, n) {
    return this.validateValue(t, this.value, n);
  }
  set(t, n, r) {
    return this.setValue(t, n, this.value, r);
  }
}
class y1 extends kp {
  constructor() {
    super(...arguments);
    he(this, "priority", h1);
    he(this, "subPriority", -1);
  }
  set(n, r) {
    return r.timestampIsSet ? n : Ge(n, m1(n, Date));
  }
}
class qe {
  run(t, n, r, o) {
    const a = this.parse(t, n, r, o);
    return a ? {
      setter: new v1(
        a.value,
        this.validate,
        this.set,
        this.priority,
        this.subPriority
      ),
      rest: a.rest
    } : null;
  }
  validate(t, n, r) {
    return !0;
  }
}
class g1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 140);
    he(this, "incompatibleTokens", ["R", "u", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "G":
      case "GG":
      case "GGG":
        return o.era(n, { width: "abbreviated" }) || o.era(n, { width: "narrow" });
      case "GGGGG":
        return o.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return o.era(n, { width: "wide" }) || o.era(n, { width: "abbreviated" }) || o.era(n, { width: "narrow" });
    }
  }
  set(n, r, o) {
    return r.era = o, n.setFullYear(o, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
const vt = {
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
}, pn = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function yt(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function lt(e, t) {
  const n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function mn(e, t) {
  const n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  const r = n[1] === "+" ? 1 : -1, o = n[2] ? parseInt(n[2], 10) : 0, a = n[3] ? parseInt(n[3], 10) : 0, s = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (o * dw + a * cw + s * fw),
    rest: t.slice(n[0].length)
  };
}
function Sp(e) {
  return lt(vt.anyDigitsSigned, e);
}
function mt(e, t) {
  switch (e) {
    case 1:
      return lt(vt.singleDigit, t);
    case 2:
      return lt(vt.twoDigits, t);
    case 3:
      return lt(vt.threeDigits, t);
    case 4:
      return lt(vt.fourDigits, t);
    default:
      return lt(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function ls(e, t) {
  switch (e) {
    case 1:
      return lt(vt.singleDigitSigned, t);
    case 2:
      return lt(vt.twoDigitsSigned, t);
    case 3:
      return lt(vt.threeDigitsSigned, t);
    case 4:
      return lt(vt.fourDigitsSigned, t);
    default:
      return lt(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function Hl(e) {
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
function Mp(e, t) {
  const n = t > 0, r = n ? t : 1 - t;
  let o;
  if (r <= 50)
    o = e || 100;
  else {
    const a = r + 50, s = Math.trunc(a / 100) * 100, i = e >= a % 100;
    o = e + s - (i ? 100 : 0);
  }
  return n ? o : 1 - o;
}
function Pp(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
class b1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 130);
    he(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, r, o) {
    const a = (s) => ({
      year: s,
      isTwoDigitYear: r === "yy"
    });
    switch (r) {
      case "y":
        return yt(mt(4, n), a);
      case "yo":
        return yt(
          o.ordinalNumber(n, {
            unit: "year"
          }),
          a
        );
      default:
        return yt(mt(r.length, n), a);
    }
  }
  validate(n, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(n, r, o) {
    const a = n.getFullYear();
    if (o.isTwoDigitYear) {
      const i = Mp(
        o.year,
        a
      );
      return n.setFullYear(i, 0, 1), n.setHours(0, 0, 0, 0), n;
    }
    const s = !("era" in r) || r.era === 1 ? o.year : 1 - o.year;
    return n.setFullYear(s, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class _1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 130);
    he(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    const a = (s) => ({
      year: s,
      isTwoDigitYear: r === "YY"
    });
    switch (r) {
      case "Y":
        return yt(mt(4, n), a);
      case "Yo":
        return yt(
          o.ordinalNumber(n, {
            unit: "year"
          }),
          a
        );
      default:
        return yt(mt(r.length, n), a);
    }
  }
  validate(n, r) {
    return r.isTwoDigitYear || r.year > 0;
  }
  set(n, r, o, a) {
    const s = Bl(n, a);
    if (o.isTwoDigitYear) {
      const l = Mp(
        o.year,
        s
      );
      return n.setFullYear(
        l,
        0,
        a.firstWeekContainsDate
      ), n.setHours(0, 0, 0, 0), Dn(n, a);
    }
    const i = !("era" in r) || r.era === 1 ? o.year : 1 - o.year;
    return n.setFullYear(i, 0, a.firstWeekContainsDate), n.setHours(0, 0, 0, 0), Dn(n, a);
  }
}
class w1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 130);
    he(this, "incompatibleTokens", [
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
    return ls(r === "R" ? 4 : r.length, n);
  }
  set(n, r, o) {
    const a = Ge(n, 0);
    return a.setFullYear(o, 0, 4), a.setHours(0, 0, 0, 0), po(a);
  }
}
class E1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 130);
    he(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
  }
  parse(n, r) {
    return ls(r === "u" ? 4 : r.length, n);
  }
  set(n, r, o) {
    return n.setFullYear(o, 0, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class O1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 120);
    he(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    switch (r) {
      case "Q":
      case "QQ":
        return mt(r.length, n);
      case "Qo":
        return o.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return o.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQQ":
        return o.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return o.quarter(n, {
          width: "wide",
          context: "formatting"
        }) || o.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 4;
  }
  set(n, r, o) {
    return n.setMonth((o - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class N1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 120);
    he(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    switch (r) {
      case "q":
      case "qq":
        return mt(r.length, n);
      case "qo":
        return o.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return o.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        }) || o.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqqq":
        return o.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return o.quarter(n, {
          width: "wide",
          context: "standalone"
        }) || o.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        }) || o.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 4;
  }
  set(n, r, o) {
    return n.setMonth((o - 1) * 3, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class x1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "incompatibleTokens", [
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
    he(this, "priority", 110);
  }
  parse(n, r, o) {
    const a = (s) => s - 1;
    switch (r) {
      case "M":
        return yt(
          lt(vt.month, n),
          a
        );
      case "MM":
        return yt(mt(2, n), a);
      case "Mo":
        return yt(
          o.ordinalNumber(n, {
            unit: "month"
          }),
          a
        );
      case "MMM":
        return o.month(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.month(n, { width: "narrow", context: "formatting" });
      case "MMMMM":
        return o.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return o.month(n, { width: "wide", context: "formatting" }) || o.month(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.month(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, o) {
    return n.setMonth(o, 1), n.setHours(0, 0, 0, 0), n;
  }
}
class D1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 110);
    he(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    const a = (s) => s - 1;
    switch (r) {
      case "L":
        return yt(
          lt(vt.month, n),
          a
        );
      case "LL":
        return yt(mt(2, n), a);
      case "Lo":
        return yt(
          o.ordinalNumber(n, {
            unit: "month"
          }),
          a
        );
      case "LLL":
        return o.month(n, {
          width: "abbreviated",
          context: "standalone"
        }) || o.month(n, { width: "narrow", context: "standalone" });
      case "LLLLL":
        return o.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return o.month(n, { width: "wide", context: "standalone" }) || o.month(n, {
          width: "abbreviated",
          context: "standalone"
        }) || o.month(n, { width: "narrow", context: "standalone" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, o) {
    return n.setMonth(o, 1), n.setHours(0, 0, 0, 0), n;
  }
}
function T1(e, t, n) {
  const r = De(e), o = jl(r, n) - t;
  return r.setDate(r.getDate() - o * 7), r;
}
class k1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 100);
    he(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    switch (r) {
      case "w":
        return lt(vt.week, n);
      case "wo":
        return o.ordinalNumber(n, { unit: "week" });
      default:
        return mt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 53;
  }
  set(n, r, o, a) {
    return Dn(T1(n, o, a), a);
  }
}
function S1(e, t) {
  const n = De(e), r = Ll(n) - t;
  return n.setDate(n.getDate() - r * 7), n;
}
class M1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 100);
    he(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    switch (r) {
      case "I":
        return lt(vt.week, n);
      case "Io":
        return o.ordinalNumber(n, { unit: "week" });
      default:
        return mt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 53;
  }
  set(n, r, o) {
    return po(S1(n, o));
  }
}
const P1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], C1 = [
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
class A1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 90);
    he(this, "subPriority", 1);
    he(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    switch (r) {
      case "d":
        return lt(vt.date, n);
      case "do":
        return o.ordinalNumber(n, { unit: "date" });
      default:
        return mt(r.length, n);
    }
  }
  validate(n, r) {
    const o = n.getFullYear(), a = Pp(o), s = n.getMonth();
    return a ? r >= 1 && r <= C1[s] : r >= 1 && r <= P1[s];
  }
  set(n, r, o) {
    return n.setDate(o), n.setHours(0, 0, 0, 0), n;
  }
}
class V1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 90);
    he(this, "subpriority", 1);
    he(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    switch (r) {
      case "D":
      case "DD":
        return lt(vt.dayOfYear, n);
      case "Do":
        return o.ordinalNumber(n, { unit: "date" });
      default:
        return mt(r.length, n);
    }
  }
  validate(n, r) {
    const o = n.getFullYear();
    return Pp(o) ? r >= 1 && r <= 366 : r >= 1 && r <= 365;
  }
  set(n, r, o) {
    return n.setMonth(0, o), n.setHours(0, 0, 0, 0), n;
  }
}
function Yl(e, t, n) {
  var u, f, y, h;
  const r = Wr(), o = (n == null ? void 0 : n.weekStartsOn) ?? ((f = (u = n == null ? void 0 : n.locale) == null ? void 0 : u.options) == null ? void 0 : f.weekStartsOn) ?? r.weekStartsOn ?? ((h = (y = r.locale) == null ? void 0 : y.options) == null ? void 0 : h.weekStartsOn) ?? 0, a = De(e), s = a.getDay(), l = (t % 7 + 7) % 7, c = 7 - o, d = t < 0 || t > 6 ? t - (s + c) % 7 : (l + c) % 7 - (s + c) % 7;
  return en(a, d);
}
class $1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 90);
    he(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "E":
      case "EE":
      case "EEE":
        return o.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.day(n, { width: "short", context: "formatting" }) || o.day(n, { width: "narrow", context: "formatting" });
      case "EEEEE":
        return o.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return o.day(n, { width: "short", context: "formatting" }) || o.day(n, { width: "narrow", context: "formatting" });
      case "EEEE":
      default:
        return o.day(n, { width: "wide", context: "formatting" }) || o.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.day(n, { width: "short", context: "formatting" }) || o.day(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, o, a) {
    return n = Yl(n, o, a), n.setHours(0, 0, 0, 0), n;
  }
}
class R1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 90);
    he(this, "incompatibleTokens", [
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
  parse(n, r, o, a) {
    const s = (i) => {
      const l = Math.floor((i - 1) / 7) * 7;
      return (i + a.weekStartsOn + 6) % 7 + l;
    };
    switch (r) {
      case "e":
      case "ee":
        return yt(mt(r.length, n), s);
      case "eo":
        return yt(
          o.ordinalNumber(n, {
            unit: "day"
          }),
          s
        );
      case "eee":
        return o.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.day(n, { width: "short", context: "formatting" }) || o.day(n, { width: "narrow", context: "formatting" });
      case "eeeee":
        return o.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return o.day(n, { width: "short", context: "formatting" }) || o.day(n, { width: "narrow", context: "formatting" });
      case "eeee":
      default:
        return o.day(n, { width: "wide", context: "formatting" }) || o.day(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.day(n, { width: "short", context: "formatting" }) || o.day(n, { width: "narrow", context: "formatting" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, o, a) {
    return n = Yl(n, o, a), n.setHours(0, 0, 0, 0), n;
  }
}
class I1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 90);
    he(this, "incompatibleTokens", [
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
  parse(n, r, o, a) {
    const s = (i) => {
      const l = Math.floor((i - 1) / 7) * 7;
      return (i + a.weekStartsOn + 6) % 7 + l;
    };
    switch (r) {
      case "c":
      case "cc":
        return yt(mt(r.length, n), s);
      case "co":
        return yt(
          o.ordinalNumber(n, {
            unit: "day"
          }),
          s
        );
      case "ccc":
        return o.day(n, {
          width: "abbreviated",
          context: "standalone"
        }) || o.day(n, { width: "short", context: "standalone" }) || o.day(n, { width: "narrow", context: "standalone" });
      case "ccccc":
        return o.day(n, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return o.day(n, { width: "short", context: "standalone" }) || o.day(n, { width: "narrow", context: "standalone" });
      case "cccc":
      default:
        return o.day(n, { width: "wide", context: "standalone" }) || o.day(n, {
          width: "abbreviated",
          context: "standalone"
        }) || o.day(n, { width: "short", context: "standalone" }) || o.day(n, { width: "narrow", context: "standalone" });
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 6;
  }
  set(n, r, o, a) {
    return n = Yl(n, o, a), n.setHours(0, 0, 0, 0), n;
  }
}
function F1(e, t) {
  const n = De(e), r = p1(n), o = t - r;
  return en(n, o);
}
class L1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 90);
    he(this, "incompatibleTokens", [
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
  parse(n, r, o) {
    const a = (s) => s === 0 ? 7 : s;
    switch (r) {
      case "i":
      case "ii":
        return mt(r.length, n);
      case "io":
        return o.ordinalNumber(n, { unit: "day" });
      case "iii":
        return yt(
          o.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(n, {
            width: "short",
            context: "formatting"
          }) || o.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiiii":
        return yt(
          o.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiiiii":
        return yt(
          o.day(n, {
            width: "short",
            context: "formatting"
          }) || o.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
      case "iiii":
      default:
        return yt(
          o.day(n, {
            width: "wide",
            context: "formatting"
          }) || o.day(n, {
            width: "abbreviated",
            context: "formatting"
          }) || o.day(n, {
            width: "short",
            context: "formatting"
          }) || o.day(n, {
            width: "narrow",
            context: "formatting"
          }),
          a
        );
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 7;
  }
  set(n, r, o) {
    return n = F1(n, o), n.setHours(0, 0, 0, 0), n;
  }
}
class B1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 80);
    he(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "a":
      case "aa":
      case "aaa":
        return o.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaaa":
        return o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return o.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, r, o) {
    return n.setHours(Hl(o), 0, 0, 0), n;
  }
}
class j1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 80);
    he(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "b":
      case "bb":
      case "bbb":
        return o.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbbb":
        return o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return o.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, r, o) {
    return n.setHours(Hl(o), 0, 0, 0), n;
  }
}
class H1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 80);
    he(this, "incompatibleTokens", ["a", "b", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "B":
      case "BB":
      case "BBB":
        return o.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBBB":
        return o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return o.dayPeriod(n, {
          width: "wide",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "abbreviated",
          context: "formatting"
        }) || o.dayPeriod(n, {
          width: "narrow",
          context: "formatting"
        });
    }
  }
  set(n, r, o) {
    return n.setHours(Hl(o), 0, 0, 0), n;
  }
}
class Y1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 70);
    he(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "h":
        return lt(vt.hour12h, n);
      case "ho":
        return o.ordinalNumber(n, { unit: "hour" });
      default:
        return mt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 12;
  }
  set(n, r, o) {
    const a = n.getHours() >= 12;
    return a && o < 12 ? n.setHours(o + 12, 0, 0, 0) : !a && o === 12 ? n.setHours(0, 0, 0, 0) : n.setHours(o, 0, 0, 0), n;
  }
}
class U1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 70);
    he(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "H":
        return lt(vt.hour23h, n);
      case "Ho":
        return o.ordinalNumber(n, { unit: "hour" });
      default:
        return mt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 23;
  }
  set(n, r, o) {
    return n.setHours(o, 0, 0, 0), n;
  }
}
class W1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 70);
    he(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "K":
        return lt(vt.hour11h, n);
      case "Ko":
        return o.ordinalNumber(n, { unit: "hour" });
      default:
        return mt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 11;
  }
  set(n, r, o) {
    return n.getHours() >= 12 && o < 12 ? n.setHours(o + 12, 0, 0, 0) : n.setHours(o, 0, 0, 0), n;
  }
}
class q1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 70);
    he(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "k":
        return lt(vt.hour24h, n);
      case "ko":
        return o.ordinalNumber(n, { unit: "hour" });
      default:
        return mt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 1 && r <= 24;
  }
  set(n, r, o) {
    const a = o <= 24 ? o % 24 : o;
    return n.setHours(a, 0, 0, 0), n;
  }
}
class G1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 60);
    he(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "m":
        return lt(vt.minute, n);
      case "mo":
        return o.ordinalNumber(n, { unit: "minute" });
      default:
        return mt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 59;
  }
  set(n, r, o) {
    return n.setMinutes(o, 0, 0), n;
  }
}
class z1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 50);
    he(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r, o) {
    switch (r) {
      case "s":
        return lt(vt.second, n);
      case "so":
        return o.ordinalNumber(n, { unit: "second" });
      default:
        return mt(r.length, n);
    }
  }
  validate(n, r) {
    return r >= 0 && r <= 59;
  }
  set(n, r, o) {
    return n.setSeconds(o, 0), n;
  }
}
class K1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 30);
    he(this, "incompatibleTokens", ["t", "T"]);
  }
  parse(n, r) {
    const o = (a) => Math.trunc(a * Math.pow(10, -r.length + 3));
    return yt(mt(r.length, n), o);
  }
  set(n, r, o) {
    return n.setMilliseconds(o), n;
  }
}
class Q1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 10);
    he(this, "incompatibleTokens", ["t", "T", "x"]);
  }
  parse(n, r) {
    switch (r) {
      case "X":
        return mn(
          pn.basicOptionalMinutes,
          n
        );
      case "XX":
        return mn(pn.basic, n);
      case "XXXX":
        return mn(
          pn.basicOptionalSeconds,
          n
        );
      case "XXXXX":
        return mn(
          pn.extendedOptionalSeconds,
          n
        );
      case "XXX":
      default:
        return mn(pn.extended, n);
    }
  }
  set(n, r, o) {
    return r.timestampIsSet ? n : Ge(
      n,
      n.getTime() - is(n) - o
    );
  }
}
class X1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 10);
    he(this, "incompatibleTokens", ["t", "T", "X"]);
  }
  parse(n, r) {
    switch (r) {
      case "x":
        return mn(
          pn.basicOptionalMinutes,
          n
        );
      case "xx":
        return mn(pn.basic, n);
      case "xxxx":
        return mn(
          pn.basicOptionalSeconds,
          n
        );
      case "xxxxx":
        return mn(
          pn.extendedOptionalSeconds,
          n
        );
      case "xxx":
      default:
        return mn(pn.extended, n);
    }
  }
  set(n, r, o) {
    return r.timestampIsSet ? n : Ge(
      n,
      n.getTime() - is(n) - o
    );
  }
}
class J1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 40);
    he(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return Sp(n);
  }
  set(n, r, o) {
    return [Ge(n, o * 1e3), { timestampIsSet: !0 }];
  }
}
class Z1 extends qe {
  constructor() {
    super(...arguments);
    he(this, "priority", 20);
    he(this, "incompatibleTokens", "*");
  }
  parse(n) {
    return Sp(n);
  }
  set(n, r, o) {
    return [Ge(n, o), { timestampIsSet: !0 }];
  }
}
const eE = {
  G: new g1(),
  y: new b1(),
  Y: new _1(),
  R: new w1(),
  u: new E1(),
  Q: new O1(),
  q: new N1(),
  M: new x1(),
  L: new D1(),
  w: new k1(),
  I: new M1(),
  d: new A1(),
  D: new V1(),
  E: new $1(),
  e: new R1(),
  c: new I1(),
  i: new L1(),
  a: new B1(),
  b: new j1(),
  B: new H1(),
  h: new Y1(),
  H: new U1(),
  K: new W1(),
  k: new q1(),
  m: new G1(),
  s: new z1(),
  S: new K1(),
  X: new Q1(),
  x: new X1(),
  t: new J1(),
  T: new Z1()
}, tE = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, nE = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, rE = /^'([^]*?)'?$/, oE = /''/g, aE = /\S/, sE = /[a-zA-Z]/;
function Xi(e, t, n, r) {
  var g, M, $, A;
  const o = f1(), a = o.locale ?? Np, s = o.firstWeekContainsDate ?? ((M = (g = o.locale) == null ? void 0 : g.options) == null ? void 0 : M.firstWeekContainsDate) ?? 1, i = o.weekStartsOn ?? ((A = ($ = o.locale) == null ? void 0 : $.options) == null ? void 0 : A.weekStartsOn) ?? 0;
  if (t === "")
    return e === "" ? De(n) : Ge(n, NaN);
  const l = {
    firstWeekContainsDate: s,
    weekStartsOn: i,
    locale: a
  }, c = [new y1()], d = t.match(nE).map((b) => {
    const x = b[0];
    if (x in Ki) {
      const V = Ki[x];
      return V(b, a.formatLong);
    }
    return b;
  }).join("").match(tE), u = [];
  for (let b of d) {
    Tp(b) && Qi(b, t, e), Dp(b) && Qi(b, t, e);
    const x = b[0], V = eE[x];
    if (V) {
      const { incompatibleTokens: k } = V;
      if (Array.isArray(k)) {
        const T = u.find(
          (I) => k.includes(I.token) || I.token === x
        );
        if (T)
          throw new RangeError(
            `The format string mustn't contain \`${T.fullToken}\` and \`${b}\` at the same time`
          );
      } else if (V.incompatibleTokens === "*" && u.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${b}\` and any other token at the same time`
        );
      u.push({ token: x, fullToken: b });
      const _ = V.run(
        e,
        b,
        a.match,
        l
      );
      if (!_)
        return Ge(n, NaN);
      c.push(_.setter), e = _.rest;
    } else {
      if (x.match(sE))
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" + x + "`"
        );
      if (b === "''" ? b = "'" : x === "'" && (b = iE(b)), e.indexOf(b) === 0)
        e = e.slice(b.length);
      else
        return Ge(n, NaN);
    }
  }
  if (e.length > 0 && aE.test(e))
    return Ge(n, NaN);
  const f = c.map((b) => b.priority).sort((b, x) => x - b).filter((b, x, V) => V.indexOf(b) === x).map(
    (b) => c.filter((x) => x.priority === b).sort((x, V) => V.subPriority - x.subPriority)
  ).map((b) => b[0]);
  let y = De(n);
  if (isNaN(y.getTime()))
    return Ge(n, NaN);
  const h = {};
  for (const b of f) {
    if (!b.validate(y, l))
      return Ge(n, NaN);
    const x = b.set(y, h, l);
    Array.isArray(x) ? (y = x[0], Object.assign(h, x[1])) : y = x;
  }
  return Ge(n, y);
}
function iE(e) {
  return e.match(rE)[1].replace(oE, "'");
}
function Lc(e, t) {
  const n = Dr(e), r = Dr(t);
  return +n == +r;
}
function lE(e, t) {
  return en(e, -t);
}
function Cp(e, t) {
  const n = De(e), r = n.getFullYear(), o = n.getDate(), a = Ge(e, 0);
  a.setFullYear(r, t, 15), a.setHours(0, 0, 0, 0);
  const s = d1(a);
  return n.setMonth(t, Math.min(o, s)), n;
}
function tt(e, t) {
  let n = De(e);
  return isNaN(+n) ? Ge(e, NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = Cp(n, t.month)), t.date != null && n.setDate(t.date), t.hours != null && n.setHours(t.hours), t.minutes != null && n.setMinutes(t.minutes), t.seconds != null && n.setSeconds(t.seconds), t.milliseconds != null && n.setMilliseconds(t.milliseconds), n);
}
function Ap(e, t) {
  const n = De(e);
  return n.setHours(t), n;
}
function Ul(e, t) {
  const n = De(e);
  return n.setMilliseconds(t), n;
}
function Vp(e, t) {
  const n = De(e);
  return n.setMinutes(t), n;
}
function Wl(e, t) {
  const n = De(e);
  return n.setSeconds(t), n;
}
function hn(e, t) {
  const n = De(e);
  return isNaN(+n) ? Ge(e, NaN) : (n.setFullYear(t), n);
}
function ho(e, t) {
  return rn(e, -t);
}
function uE(e, t) {
  const {
    years: n = 0,
    months: r = 0,
    weeks: o = 0,
    days: a = 0,
    hours: s = 0,
    minutes: i = 0,
    seconds: l = 0
  } = t, c = ho(e, r + n * 12), d = lE(c, a + o * 7), u = i + s * 60, y = (l + u * 60) * 1e3;
  return Ge(e, d.getTime() - y);
}
function $p(e, t) {
  return Fl(e, -t);
}
function Oo() {
  return L(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Ne("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      Ne("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Ne("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      Ne("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Oo.compatConfig = {
  MODE: 3
};
function Rp() {
  return L(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Ne("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      Ne("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Rp.compatConfig = {
  MODE: 3
};
function ql() {
  return L(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Ne("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
ql.compatConfig = {
  MODE: 3
};
function Gl() {
  return L(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Ne("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Gl.compatConfig = {
  MODE: 3
};
function zl() {
  return L(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Ne("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      Ne("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
zl.compatConfig = {
  MODE: 3
};
function Kl() {
  return L(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Ne("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Kl.compatConfig = {
  MODE: 3
};
function Ql() {
  return L(), z(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      Ne("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Ql.compatConfig = {
  MODE: 3
};
function Bc(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function cE(e) {
  return (t) => _n(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const dE = (e, t, n) => {
  const r = [1, 2, 3, 4, 5, 6, 7];
  let o;
  if (e !== null)
    try {
      o = r.map(cE(e));
    } catch {
      o = r.map(Bc(t));
    }
  else
    o = r.map(Bc(t));
  const a = o.slice(0, n), s = o.slice(n + 1, o.length);
  return [o[n]].concat(...s).concat(...a);
}, Xl = (e, t) => {
  const n = [];
  for (let r = +e[0]; r <= +e[1]; r++)
    n.push({ value: +r, text: `${r}` });
  return t ? n.reverse() : n;
}, Ip = (e, t, n) => {
  const r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((a) => {
    const s = a < 10 ? `0${a}` : a;
    return /* @__PURE__ */ new Date(`2017-${s}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const a = n === "long" ? "MMMM" : "MMM";
      return r.map((s, i) => {
        const l = _n(s, a, { locale: e });
        return {
          text: l.charAt(0).toUpperCase() + l.substring(1),
          value: i
        };
      });
    } catch {
    }
  const o = new Intl.DateTimeFormat(t, { month: n, timeZone: "UTC" });
  return r.map((a, s) => {
    const i = o.format(a);
    return {
      text: i.charAt(0).toUpperCase() + i.substring(1),
      value: s
    };
  });
}, fE = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Et = (e) => {
  const t = D(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, pE = (e) => ({ type: "dot", ...e ?? {} }), Fp = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, Jl = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Ot = (e) => e, jc = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, Hc = (e) => e === null, Lp = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, mE = (e) => {
  const t = [], n = (r) => r.filter((o) => o);
  for (let r = 0; r < e.length; r += 3) {
    const o = [e[r], e[r + 1], e[r + 2]];
    t.push(n(o));
  }
  return t;
}, oa = (e, t, n) => {
  const r = n != null, o = t != null;
  if (!r && !o)
    return !1;
  const a = +n, s = +t;
  return r && o ? +e > a || +e < s : r ? +e > a : o ? +e < s : !1;
}, vo = (e, t) => mE(e).map((n) => n.map((r) => {
  const { active: o, disabled: a, isBetween: s, highlighted: i } = t(r);
  return {
    ...r,
    active: o,
    disabled: a,
    className: {
      dp__overlay_cell_active: o,
      dp__overlay_cell: !o,
      dp__overlay_cell_disabled: a,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: a && o,
      dp__cell_in_between: s,
      "dp--highlighted": i
    }
  };
})), rr = (e, t, n = !1) => {
  e && t.allowStopPropagation && (n && e.stopImmediatePropagation(), e.stopPropagation());
}, hE = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function vE(e, t) {
  let n = [...document.querySelectorAll(hE())];
  n = n.filter((o) => !e.contains(o) || o.hasAttribute("data-datepicker-instance"));
  const r = n.indexOf(e);
  if (r >= 0 && (t ? r - 1 >= 0 : r + 1 <= n.length))
    return n[r + (t ? -1 : 1)];
}
const yE = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), Zl = (e) => _n(e, "dd-MM-yyyy"), ii = (e) => Array.isArray(e), us = (e, t) => t.get(Zl(e)), gE = (e, t) => e ? t ? t instanceof Map ? !!us(e, t) : t(ne(e)) : !1 : !0, Yc = (e, t, n, r, o) => {
  const a = Xi(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return Uo(a) && wp(a) ? r || o ? a : tt(a, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, bE = (e, t, n, r, o) => {
  const a = Array.isArray(n) ? n[0] : n;
  if (typeof t == "string")
    return Yc(e, t, a, r, o);
  if (Array.isArray(t)) {
    let s = null;
    for (const i of t)
      if (s = Yc(e, i, a, r, o), s)
        break;
    return s;
  }
  return typeof t == "function" ? t(e) : null;
}, ne = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), _E = (e, t, n) => {
  if (t) {
    const o = (e.getMonth() + 1).toString().padStart(2, "0"), a = e.getDate().toString().padStart(2, "0"), s = e.getHours().toString().padStart(2, "0"), i = e.getMinutes().toString().padStart(2, "0"), l = n ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${o}-${a}T${s}:${i}:${l}.000Z`;
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
}, Wt = (e) => {
  let t = ne(JSON.parse(JSON.stringify(e)));
  return t = Ap(t, 0), t = Vp(t, 0), t = Wl(t, 0), t = Ul(t, 0), t;
}, or = (e, t, n, r) => {
  let o = e ? ne(e) : ne();
  return (t || t === 0) && (o = Ap(o, +t)), (n || n === 0) && (o = Vp(o, +n)), (r || r === 0) && (o = Wl(o, +r)), Ul(o, 0);
}, dt = (e, t) => !e || !t ? !1 : ra(Wt(e), Wt(t)), Ye = (e, t) => !e || !t ? !1 : to(Wt(e), Wt(t)), ht = (e, t) => !e || !t ? !1 : na(Wt(e), Wt(t)), Rs = (e, t, n) => e != null && e[0] && e != null && e[1] ? ht(n, e[0]) && dt(n, e[1]) : e != null && e[0] && t ? ht(n, e[0]) && dt(n, t) || dt(n, e[0]) && ht(n, t) : !1, tn = (e) => {
  const t = tt(new Date(e), { date: 1 });
  return Wt(t);
}, li = (e, t, n) => t && (n || n === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((r) => r === t ? [r, n] : [r, isNaN(+e[r]) ? void 0 : +e[r]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, Rr = (e) => ({
  hours: on(e),
  minutes: wn(e),
  seconds: mo(e)
}), Bp = (e, t) => {
  if (t) {
    const n = Ie(ne(t));
    if (n > e)
      return 12;
    if (n === e)
      return He(ne(t));
  }
}, jp = (e, t) => {
  if (t) {
    const n = Ie(ne(t));
    return n < e ? -1 : n === e ? He(ne(t)) : void 0;
  }
}, yo = (e) => {
  if (e)
    return Ie(ne(e));
}, Hp = (e, t) => {
  const n = ht(e, t) ? t : e, r = ht(t, e) ? t : e;
  return Ep({ start: n, end: r });
}, wE = (e) => {
  const t = rn(e, 1);
  return { month: He(t), year: Ie(t) };
}, Pn = (e, t) => {
  const n = Dn(e, { weekStartsOn: +t }), r = gw(e, { weekStartsOn: +t });
  return [n, r];
}, Yp = (e, t) => {
  const n = {
    hours: on(ne()),
    minutes: wn(ne()),
    seconds: t ? mo(ne()) : 0
  };
  return Object.assign(n, e);
}, Zn = (e, t, n) => [tt(ne(e), { date: 1 }), tt(ne(), { month: t, year: n, date: 1 })], An = (e, t, n) => {
  let r = e ? ne(e) : ne();
  return (t || t === 0) && (r = Cp(r, t)), n && (r = hn(r, n)), r;
}, Up = (e, t, n, r, o) => {
  if (!r || o && !t || !o && !n)
    return !1;
  const a = o ? rn(e, 1) : ho(e, 1), s = [He(a), Ie(a)];
  return o ? !OE(...s, t) : !EE(...s, n);
}, EE = (e, t, n) => dt(...Zn(n, e, t)) || Ye(...Zn(n, e, t)), OE = (e, t, n) => ht(...Zn(n, e, t)) || Ye(...Zn(n, e, t)), Wp = (e, t, n, r, o, a, s) => {
  if (typeof t == "function" && !s)
    return t(e);
  const i = n ? { locale: n } : void 0;
  return Array.isArray(e) ? `${_n(e[0], a, i)}${o && !e[1] ? "" : r}${e[1] ? _n(e[1], a, i) : ""}` : _n(e, a, i);
}, Kr = (e) => {
  if (e)
    return null;
  throw new Error(Jl.prop("partial-range"));
}, Sa = (e, t) => {
  if (t)
    return e();
  throw new Error(Jl.prop("range"));
}, Ji = (e) => Array.isArray(e) ? Uo(e[0]) && (e[1] ? Uo(e[1]) : !0) : e ? Uo(e) : !1, NE = (e, t) => tt(t ?? ne(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), ui = (e, t, n, r) => {
  if (!e)
    return !0;
  if (r) {
    const o = n === "max" ? ra(e, t) : na(e, t), a = { seconds: 0, milliseconds: 0 };
    return o || to(tt(e, a), tt(t, a));
  }
  return n === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, ci = (e, t, n) => e ? NE(e, t) : ne(n ?? t), Uc = (e, t, n, r, o) => {
  if (Array.isArray(r)) {
    const s = ci(e, r[0], t), i = ci(e, r[1], t);
    return ui(r[0], s, n, !!t) && ui(r[1], i, n, !!t) && o;
  }
  const a = ci(e, r, t);
  return ui(r, a, n, !!t) && o;
}, di = (e) => tt(ne(), Rr(e)), xE = (e, t) => e instanceof Map ? Array.from(e.values()).filter((n) => Ie(ne(n)) === t).map((n) => He(n)) : [], qp = (e, t, n) => typeof e == "function" ? e({ month: t, year: n }) : !!e.months.find((r) => r.month === t && r.year === n), eu = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), Po = In({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Gp = () => {
  const e = (n) => {
    Po.menuFocused = n;
  }, t = (n) => {
    Po.shiftKeyInMenu !== n && (Po.shiftKeyInMenu = n);
  };
  return {
    control: oe(() => ({ shiftKeyInMenu: Po.shiftKeyInMenu, menuFocused: Po.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, at = In({
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
}), fi = Z(null), Ma = Z(!1), pi = Z(!1), mi = Z(!1), hi = Z(!1), Vt = Z(0), kt = Z(0), dr = () => {
  const e = oe(() => Ma.value ? [...at.selectionGrid, at.actionRow].filter((u) => u.length) : pi.value ? [
    ...at.timePicker[0],
    ...at.timePicker[1],
    hi.value ? [] : [fi.value],
    at.actionRow
  ].filter((u) => u.length) : mi.value ? [...at.monthPicker, at.actionRow] : [at.monthYear, ...at.calendar, at.time, at.actionRow].filter((u) => u.length)), t = (u) => {
    Vt.value = u ? Vt.value + 1 : Vt.value - 1;
    let f = null;
    e.value[kt.value] && (f = e.value[kt.value][Vt.value]), f || (Vt.value = u ? Vt.value - 1 : Vt.value + 1);
  }, n = (u) => {
    kt.value === 0 && !u || kt.value === e.value.length && u || (kt.value = u ? kt.value + 1 : kt.value - 1, e.value[kt.value] ? e.value[kt.value] && !e.value[kt.value][Vt.value] && Vt.value !== 0 && (Vt.value = e.value[kt.value].length - 1) : kt.value = u ? kt.value - 1 : kt.value + 1);
  }, r = (u) => {
    let f = null;
    e.value[kt.value] && (f = e.value[kt.value][Vt.value]), f ? f.focus({ preventScroll: !Ma.value }) : Vt.value = u ? Vt.value - 1 : Vt.value + 1;
  }, o = () => {
    t(!0), r(!0);
  }, a = () => {
    t(!1), r(!1);
  }, s = () => {
    n(!1), r(!0);
  }, i = () => {
    n(!0), r(!0);
  }, l = (u, f) => {
    at[f] = u;
  }, c = (u, f) => {
    at[f] = u;
  }, d = () => {
    Vt.value = 0, kt.value = 0;
  };
  return {
    buildMatrix: l,
    buildMultiLevelMatrix: c,
    setTimePickerBackRef: (u) => {
      fi.value = u;
    },
    setSelectionGrid: (u) => {
      Ma.value = u, d(), u || (at.selectionGrid = []);
    },
    setTimePicker: (u, f = !1) => {
      pi.value = u, hi.value = f, d(), u || (at.timePicker[0] = [], at.timePicker[1] = []);
    },
    setTimePickerElements: (u, f = 0) => {
      at.timePicker[f] = u;
    },
    arrowRight: o,
    arrowLeft: a,
    arrowUp: s,
    arrowDown: i,
    clearArrowNav: () => {
      at.monthYear = [], at.calendar = [], at.time = [], at.actionRow = [], at.selectionGrid = [], at.timePicker[0] = [], at.timePicker[1] = [], Ma.value = !1, pi.value = !1, hi.value = !1, mi.value = !1, d(), fi.value = null;
    },
    setMonthPicker: (u) => {
      mi.value = u, d();
    },
    refSets: at
    // exposed for testing
  };
}, lr = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), zp = (e, t) => Zi(e, t) || ne(), DE = (e, t) => t.dateInTz ? lr(new Date(e), t.dateInTz) : ne(e), Zi = (e, t) => {
  if (!e)
    return null;
  if (!t)
    return ne(e);
  const n = ne(e);
  return t.exactMatch ? DE(e, t) : lr(n, t.timezone);
}, Wc = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), TE = (e) => ({
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
}), qc = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, kE = (e) => {
  const t = typeof e == "object" && e, n = {
    static: !0,
    solo: !1
  };
  if (!e)
    return { ...n, count: qc(!1) };
  const r = t ? e : {}, o = t ? r.count ?? !0 : e, a = qc(o);
  return Object.assign(n, r, { count: a });
}, SE = (e, t, n) => e || (typeof n == "string" ? n : t), ME = (e) => typeof e == "boolean" ? e ? Wc({}) : !1 : Wc(e), PE = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: !0,
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, CE = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), AE = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), VE = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, $E = (e) => ({ allowStopPropagation: !0, closeOnScroll: !1, modeHeight: 255, allowPreventDefault: !1, closeOnClearValue: !0, closeOnAutoApply: !0, noSwipe: !1, keepActionRow: !1, onClickOutside: void 0, tabOutClosesMenu: !0, ...e ?? {} }), RE = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((n) => ne(n)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, IE = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, FE = (e, t) => typeof e == "object" ? { enabled: !0, ...{
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
}, LE = (e, t) => e ? typeof e == "string" ? { timezone: e, exactMatch: !1, dateInTz: void 0, emitTimezone: t } : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: t ?? e.emitTimezone
} : { timezone: void 0, exactMatch: !1, emitTimezone: t }, vi = (e, t) => new Map(
  e.map((n) => {
    const r = zp(n, t);
    return [Zl(r), r];
  })
), BE = (e, t) => e.length ? new Map(
  e.map((n) => {
    const r = zp(n.date, t);
    return [Zl(r), n];
  })
) : null, jE = (e, t, n, r, o, a, s) => ({
  minDate: Zi(e, s),
  maxDate: Zi(t, s),
  disabledDates: ii(n) ? vi(n, s) : n,
  allowedDates: ii(r) ? vi(r, s) : null,
  highlight: typeof o == "object" && ii(o == null ? void 0 : o.dates) ? vi(o.dates, s) : o,
  markers: BE(a, s)
}), ct = (e) => {
  const t = () => {
    const x = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${x}` : `hh:mm${x} aa`;
  }, n = () => {
    var x;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((x = M.value) == null ? void 0 : x.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, r = (x) => Yp(x, e.enableSeconds), o = () => b.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [r(e.startTime[0]), r(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? r(e.startTime) : null, a = oe(() => kE(e.multiCalendars)), s = oe(() => o()), i = oe(() => TE(e.ariaLabels)), l = oe(() => CE(e.filters)), c = oe(() => ME(e.transitions)), d = oe(() => AE(e.actionRow)), u = oe(
    () => SE(e.previewFormat, e.format, n())
  ), f = oe(() => PE(e.textInput)), y = oe(() => VE(e.inline)), h = oe(() => $E(e.config)), g = oe(() => RE(e.highlight)), M = oe(() => IE(e.weekNumbers)), $ = oe(() => LE(e.timezone, e.emitTimezone)), A = oe(
    () => jE(
      e.minDate,
      e.maxDate,
      e.disabledDates,
      e.allowedDates,
      g.value,
      e.markers,
      $.value
    )
  ), b = oe(
    () => FE(e.range, {
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
    defaultedMultiCalendars: a,
    defaultedStartTime: s,
    defaultedAriaLabels: i,
    defaultedFilters: l,
    defaultedActionRow: d,
    defaultedPreviewFormat: u,
    defaultedTextInput: f,
    defaultedInline: y,
    defaultedConfig: h,
    defaultedHighlight: g,
    defaultedWeekNumbers: M,
    defaultedRange: b,
    propDates: A,
    defaultedTz: $,
    getDefaultPattern: n,
    getDefaultStartTime: o
  };
}, HE = (e, t, n) => {
  const r = Z(), { defaultedTextInput: o, defaultedRange: a, defaultedTz: s, getDefaultPattern: i } = ct(t), l = Z(""), c = Pr(t, "format");
  ft(
    r,
    () => {
      e("internal-model-change", r.value);
    },
    { deep: !0 }
  ), ft(c, () => {
    U();
  });
  const d = (m, p, P = !1) => Wp(
    m,
    t.format,
    t.formatLocale,
    o.value.rangeSeparator,
    t.modelAuto,
    p ?? i(),
    P
  ), u = (m) => m ? t.modelType ? F(m) : {
    hours: on(m),
    minutes: wn(m),
    seconds: t.enableSeconds ? mo(m) : 0
  } : null, f = (m) => t.modelType ? F(m) : { month: He(m), year: Ie(m) }, y = (m) => Array.isArray(m) ? t.multiDates ? m.map((p) => h(p, hn(ne(), p))) : Sa(
    () => [
      hn(ne(), m[0]),
      m[1] ? hn(ne(), m[1]) : Kr(a.value.partialRange)
    ],
    a.value.enabled
  ) : hn(ne(), +m), h = (m, p) => (typeof m == "string" || typeof m == "number") && t.modelType ? E(m) : p, g = (m) => Array.isArray(m) ? [
    h(
      m[0],
      or(null, +m[0].hours, +m[0].minutes, m[0].seconds)
    ),
    h(
      m[1],
      or(null, +m[1].hours, +m[1].minutes, m[1].seconds)
    )
  ] : h(m, or(null, m.hours, m.minutes, m.seconds)), M = (m) => {
    const p = tt(ne(), { date: 1 });
    return Array.isArray(m) ? t.multiDates ? m.map((P) => h(P, An(p, +P.month, +P.year))) : Sa(
      () => [
        h(m[0], An(p, +m[0].month, +m[0].year)),
        h(
          m[1],
          m[1] ? An(p, +m[1].month, +m[1].year) : Kr(a.value.partialRange)
        )
      ],
      a.value.enabled
    ) : h(m, An(p, +m.month, +m.year));
  }, $ = (m) => {
    if (Array.isArray(m))
      return m.map((p) => E(p));
    throw new Error(Jl.dateArr("multi-dates"));
  }, A = (m) => {
    if (Array.isArray(m) && a.value.enabled) {
      const p = m[0], P = m[1];
      return [
        ne(Array.isArray(p) ? p[0] : null),
        ne(Array.isArray(P) ? P[0] : null)
      ];
    }
    return ne(m[0]);
  }, b = (m) => t.modelAuto ? Array.isArray(m) ? [E(m[0]), E(m[1])] : t.autoApply ? [E(m)] : [E(m), null] : Array.isArray(m) ? Sa(
    () => m[1] ? [
      E(m[0]),
      m[1] ? E(m[1]) : Kr(a.value.partialRange)
    ] : [E(m[0])],
    a.value.enabled
  ) : E(m), x = () => {
    Array.isArray(r.value) && a.value.enabled && r.value.length === 1 && r.value.push(Kr(a.value.partialRange));
  }, V = () => {
    const m = r.value;
    return [
      F(m[0]),
      m[1] ? F(m[1]) : Kr(a.value.partialRange)
    ];
  }, k = () => r.value[1] ? V() : F(Ot(r.value[0])), _ = () => (r.value || []).map((m) => F(m)), T = () => (x(), t.modelAuto ? k() : t.multiDates ? _() : Array.isArray(r.value) ? Sa(() => V(), a.value.enabled) : F(Ot(r.value))), I = (m) => !m || Array.isArray(m) && !m.length ? null : t.timePicker ? g(Ot(m)) : t.monthPicker ? M(Ot(m)) : t.yearPicker ? y(Ot(m)) : t.multiDates ? $(Ot(m)) : t.weekPicker ? A(Ot(m)) : b(Ot(m)), R = (m) => {
    const p = I(m);
    Ji(Ot(p)) ? (r.value = Ot(p), U()) : (r.value = null, l.value = "");
  }, O = () => {
    const m = (p) => _n(p, o.value.format);
    return `${m(r.value[0])} ${o.value.rangeSeparator} ${r.value[1] ? m(r.value[1]) : ""}`;
  }, N = () => n.value && r.value ? Array.isArray(r.value) ? O() : _n(r.value, o.value.format) : d(r.value), j = () => r.value ? t.multiDates ? r.value.map((m) => d(m)).join("; ") : o.value.enabled && typeof o.value.format == "string" ? N() : d(r.value) : "", U = () => {
    !t.format || typeof t.format == "string" || o.value.enabled && typeof o.value.format == "string" ? l.value = j() : l.value = t.format(r.value);
  }, E = (m) => {
    if (t.utc) {
      const p = new Date(m);
      return t.utc === "preserve" ? new Date(p.getTime() + p.getTimezoneOffset() * 6e4) : p;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? new Date(m) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? Xi(m, i(), /* @__PURE__ */ new Date()) : Xi(m, t.modelType, /* @__PURE__ */ new Date()) : new Date(m);
  }, F = (m) => m ? t.utc ? _E(m, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +m : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? d(m) : d(m, t.modelType, !0) : m : "", q = (m, p = !1) => {
    if (e("update:model-value", m), s.value.emitTimezone && p) {
      const P = Array.isArray(m) ? m.map((K) => lr(Ot(K), s.value.emitTimezone)) : lr(Ot(m), s.value.emitTimezone);
      e("update:model-timezone-value", P);
    }
  }, Q = (m) => Array.isArray(r.value) ? t.multiDates ? r.value.map((p) => m(p)) : [
    m(r.value[0]),
    r.value[1] ? m(r.value[1]) : Kr(a.value.partialRange)
  ] : m(Ot(r.value)), me = () => {
    if (Array.isArray(r.value)) {
      const m = Pn(r.value[0], t.weekStart), p = r.value[1] ? Pn(r.value[1], t.weekStart) : [];
      return [m.map((P) => ne(P)), p.map((P) => ne(P))];
    }
    return Pn(r.value, t.weekStart).map((m) => ne(m));
  }, ae = (m) => q(Ot(Q(m)));
  return {
    inputValue: l,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? a.value.enabled ? a.value.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: R,
    formatInputValue: U,
    emitModelValue: () => (U(), t.monthPicker ? ae(f) : t.timePicker ? ae(u) : t.yearPicker ? ae(Ie) : t.weekPicker ? e("update:model-value", me()) : q(T(), !0))
  };
}, YE = (e, t) => {
  const { defaultedFilters: n, propDates: r } = ct(e), { validateMonthYearInRange: o } = fr(e), a = (d, u) => {
    let f = d;
    return n.value.months.includes(He(f)) ? (f = u ? rn(d, 1) : ho(d, 1), a(f, u)) : f;
  }, s = (d, u) => {
    let f = d;
    return n.value.years.includes(Ie(f)) ? (f = u ? Fl(d, 1) : $p(d, 1), s(f, u)) : f;
  }, i = (d, u = !1) => {
    const f = tt(ne(), { month: e.month, year: e.year });
    let y = d ? rn(f, 1) : ho(f, 1);
    e.disableYearSelect && (y = hn(y, e.year));
    let h = He(y), g = Ie(y);
    n.value.months.includes(h) && (y = a(y, d), h = He(y), g = Ie(y)), n.value.years.includes(g) && (y = s(y, d), g = Ie(y)), o(h, g, d, e.preventMinMaxNavigation) && l(h, g, u);
  }, l = (d, u, f) => {
    t("update-month-year", { month: d, year: u, fromNav: f });
  }, c = oe(() => (d) => Up(
    tt(ne(), { month: e.month, year: e.year }),
    r.value.maxDate,
    r.value.minDate,
    e.preventMinMaxNavigation,
    d
  ));
  return { handleMonthYearChange: i, isDisabled: c, updateMonthYear: l };
};
var Jr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Jr || {}), Qt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(Qt || {}), wr = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(wr || {}), Ir = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Ir || {}), dn = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(dn || {});
const UE = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: n,
  pickerWrapperRef: r,
  inline: o,
  emit: a,
  props: s,
  slots: i
}) => {
  const l = Z({}), c = Z(!1), d = Z({
    top: "0",
    left: "0"
  }), u = Z(!1), f = Pr(s, "teleportCenter");
  ft(f, () => {
    d.value = JSON.parse(JSON.stringify({})), x();
  });
  const y = (E) => {
    if (s.teleport) {
      const F = E.getBoundingClientRect();
      return {
        left: F.left + window.scrollX,
        top: F.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, h = (E, F) => {
    d.value.left = `${E + F - l.value.width}px`;
  }, g = (E) => {
    d.value.left = `${E}px`;
  }, M = (E, F) => {
    s.position === Jr.left && g(E), s.position === Jr.right && h(E, F), s.position === Jr.center && (d.value.left = `${E + F / 2 - l.value.width / 2}px`);
  }, $ = (E) => {
    const { width: F, height: q } = E.getBoundingClientRect(), { top: Q, left: me } = s.altPosition ? s.altPosition(E) : y(E);
    return { top: +Q, left: +me, width: F, height: q };
  }, A = () => {
    d.value.left = "50%", d.value.top = "50%", d.value.transform = "translate(-50%, -50%)", d.value.position = "fixed", delete d.value.opacity;
  }, b = () => {
    const E = Et(n), { top: F, left: q, transform: Q } = s.altPosition(E);
    d.value = { top: `${F}px`, left: `${q}px`, transform: Q ?? "" };
  }, x = (E = !0) => {
    var F;
    if (!o.value.enabled) {
      if (f.value)
        return A();
      if (s.altPosition !== null)
        return b();
      if (E) {
        const q = s.teleport ? (F = t.value) == null ? void 0 : F.$el : e.value;
        q && (l.value = q.getBoundingClientRect()), a("recalculate-position");
      }
      return O();
    }
  }, V = ({ inputEl: E, left: F, width: q }) => {
    window.screen.width > 768 && !c.value && M(F, q), T(E);
  }, k = (E) => {
    const { top: F, left: q, height: Q, width: me } = $(E);
    d.value.top = `${Q + F + +s.offset}px`, u.value = !1, c.value || (d.value.left = `${q + me / 2 - l.value.width / 2}px`), V({ inputEl: E, left: q, width: me });
  }, _ = (E) => {
    const { top: F, left: q, width: Q } = $(E);
    d.value.top = `${F - +s.offset - l.value.height}px`, u.value = !0, V({ inputEl: E, left: q, width: Q });
  }, T = (E) => {
    if (s.autoPosition) {
      const { left: F, width: q } = $(E), { left: Q, right: me } = l.value;
      if (!c.value) {
        if (Math.abs(Q) !== Math.abs(me)) {
          if (Q <= 0)
            return c.value = !0, g(F);
          if (me >= document.documentElement.clientWidth)
            return c.value = !0, h(F, q);
        }
        return M(F, q);
      }
    }
  }, I = () => {
    const E = Et(n);
    if (E) {
      const { height: F } = l.value, { top: q, height: Q } = E.getBoundingClientRect(), me = window.innerHeight - q - Q, ae = q;
      return F <= me ? wr.bottom : F > me && F <= ae ? wr.top : me >= ae ? wr.bottom : wr.top;
    }
    return wr.bottom;
  }, R = (E) => I() === wr.bottom ? k(E) : _(E), O = () => {
    const E = Et(n);
    if (E)
      return s.autoPosition ? R(E) : k(E);
  }, N = function(E) {
    if (E) {
      const F = E.scrollHeight > E.clientHeight, q = window.getComputedStyle(E).overflowY.indexOf("hidden") !== -1;
      return F && !q;
    }
    return !0;
  }, j = function(E) {
    return !E || E === document.body || E.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : N(E) ? E : j(E.parentNode);
  }, U = (E) => {
    if (E)
      switch (s.position) {
        case Jr.left:
          return { left: 0, transform: "translateX(0)" };
        case Jr.right:
          return { left: `${E.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${E.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: u,
    menuStyle: d,
    xCorrect: c,
    setMenuPosition: x,
    getScrollableParent: j,
    shadowRender: (E, F) => {
      var q, Q, me;
      const ae = document.createElement("div"), m = (q = Et(n)) == null ? void 0 : q.getBoundingClientRect();
      ae.setAttribute("id", "dp--temp-container");
      const p = (Q = r.value) != null && Q.clientWidth ? r.value : document.body;
      p.append(ae);
      const P = U(m), K = uf(
        E,
        {
          ...F,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...P }
        },
        Object.fromEntries(
          Object.keys(i).filter((pe) => ["right-sidebar", "left-sidebar"].includes(pe)).map((pe) => [pe, i[pe]])
        )
      );
      Zu(K, ae), l.value = (me = K.el) == null ? void 0 : me.getBoundingClientRect(), Zu(null, ae), p.removeChild(ae);
    }
  };
}, Wn = [
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
], WE = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], qE = {
  all: () => Wn,
  monthYear: () => Wn.filter((e) => e.use.includes("month-year")),
  input: () => WE,
  timePicker: () => Wn.filter((e) => e.use.includes("time")),
  action: () => Wn.filter((e) => e.use.includes("action")),
  calendar: () => Wn.filter((e) => e.use.includes("calendar")),
  menu: () => Wn.filter((e) => e.use.includes("menu")),
  shared: () => Wn.filter((e) => e.use.includes("shared")),
  yearMode: () => Wn.filter((e) => e.use.includes("year-mode"))
}, Yt = (e, t, n) => {
  const r = [];
  return qE[t]().forEach((o) => {
    e[o.name] && r.push(o.name);
  }), n != null && n.length && n.forEach((o) => {
    o.slot && r.push(o.slot);
  }), r;
}, ha = (e) => {
  const t = oe(() => (r) => e.value ? r ? e.value.open : e.value.close : ""), n = oe(() => (r) => e.value ? r ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: n };
}, va = (e, t) => {
  const { defaultedRange: n, defaultedTz: r } = ct(e), o = ne(lr(ne(), r.value.timezone)), a = Z([{ month: He(o), year: Ie(o) }]), s = In({
    hours: n.value.enabled ? [on(o), on(o)] : on(o),
    minutes: n.value.enabled ? [wn(o), wn(o)] : wn(o),
    seconds: n.value.enabled ? [0, 0] : 0
  }), i = oe({
    get: () => e.internalModelValue,
    set: (d) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", d);
    }
  }), l = oe(
    () => (d) => a.value[d] ? a.value[d].month : 0
  ), c = oe(
    () => (d) => a.value[d] ? a.value[d].year : 0
  );
  return {
    calendars: a,
    time: s,
    modelValue: i,
    month: l,
    year: c
  };
}, GE = (e, t) => {
  const { defaultedMultiCalendars: n, defaultedHighlight: r, defaultedTz: o, propDates: a, defaultedRange: s } = ct(t), { isDisabled: i } = fr(t), l = Z(null), c = Z(lr(/* @__PURE__ */ new Date(), o.value.timezone)), d = (p) => {
    !p.current && t.hideOffsetDates || (l.value = p.value);
  }, u = () => {
    l.value = null;
  }, f = (p) => Array.isArray(e.value) && s.value.enabled && e.value[0] && l.value ? p ? ht(l.value, e.value[0]) : dt(l.value, e.value[0]) : !0, y = (p, P) => {
    const K = () => e.value ? P ? e.value[0] || null : e.value[1] : null, pe = e.value && Array.isArray(e.value) ? K() : null;
    return Ye(ne(p.value), pe);
  }, h = (p) => {
    const P = Array.isArray(e.value) ? e.value[0] : null;
    return p ? !dt(l.value ?? null, P) : !0;
  }, g = (p, P = !0) => (s.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !p.current ? !1 : Ye(ne(p.value), e.value[P ? 0 : 1]) : s.value.enabled ? y(p, P) && h(P) || Ye(p.value, Array.isArray(e.value) ? e.value[0] : null) && f(P) : !1, M = (p, P, K) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? p ? !1 : K ? ht(e.value[0], P.value) : dt(e.value[0], P.value) : !1, $ = (p) => !e.value || t.hideOffsetDates && !p.current ? !1 : s.value.enabled ? t.modelAuto && Array.isArray(e.value) ? Ye(p.value, e.value[0] ? e.value[0] : c.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some((P) => Ye(P, p.value)) : Ye(p.value, e.value ? e.value : c.value), A = (p) => {
    if (s.value.autoRange || t.weekPicker) {
      if (l.value) {
        if (t.hideOffsetDates && !p.current)
          return !1;
        const P = en(l.value, +s.value.autoRange), K = Pn(ne(l.value), t.weekStart);
        return t.weekPicker ? Ye(K[1], ne(p.value)) : Ye(P, ne(p.value));
      }
      return !1;
    }
    return !1;
  }, b = (p) => {
    if (s.value.autoRange || t.weekPicker) {
      if (l.value) {
        const P = en(l.value, +s.value.autoRange);
        if (t.hideOffsetDates && !p.current)
          return !1;
        const K = Pn(ne(l.value), t.weekStart);
        return t.weekPicker ? ht(p.value, K[0]) && dt(p.value, K[1]) : ht(p.value, l.value) && dt(p.value, P);
      }
      return !1;
    }
    return !1;
  }, x = (p) => {
    if (s.value.autoRange || t.weekPicker) {
      if (l.value) {
        if (t.hideOffsetDates && !p.current)
          return !1;
        const P = Pn(ne(l.value), t.weekStart);
        return t.weekPicker ? Ye(P[0], p.value) : Ye(l.value, p.value);
      }
      return !1;
    }
    return !1;
  }, V = (p) => Rs(e.value, l.value, p.value), k = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, _ = () => t.modelAuto ? Fp(t.internalModelValue) : !0, T = (p) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const P = s.value.enabled ? !g(p) && !g(p, !1) : !0;
    return !i(p.value) && !$(p) && !(!p.current && t.hideOffsetDates) && P;
  }, I = (p) => s.value.enabled ? t.modelAuto ? k() && $(p) : !1 : $(p), R = (p) => r.value ? gE(p.value, a.value.highlight) : !1, O = (p) => {
    const P = i(p.value);
    return P && (typeof r.value == "function" ? !r.value(p.value, P) : !r.value.options.highlightDisabled);
  }, N = (p) => {
    var P;
    return typeof r.value == "function" ? r.value(p.value) : (P = r.value.weekdays) == null ? void 0 : P.includes(p.value.getDay());
  }, j = (p) => (s.value.enabled || t.weekPicker) && (!(n.value.count > 0) || p.current) && _() && !(!p.current && t.hideOffsetDates) && !$(p) ? V(p) : !1, U = (p) => {
    const { isRangeStart: P, isRangeEnd: K } = Q(p), pe = s.value.enabled ? P || K : !1;
    return {
      dp__cell_offset: !p.current,
      dp__pointer: !t.disabled && !(!p.current && t.hideOffsetDates) && !i(p.value),
      dp__cell_disabled: i(p.value),
      dp__cell_highlight: !O(p) && (R(p) || N(p)) && !I(p) && !pe && !x(p) && !(j(p) && t.weekPicker) && !K,
      dp__cell_highlight_active: !O(p) && (R(p) || N(p)) && I(p),
      dp__today: !t.noToday && Ye(p.value, c.value) && p.current,
      "dp--past": dt(p.value, c.value),
      "dp--future": ht(p.value, c.value)
    };
  }, E = (p) => ({
    dp__active_date: I(p),
    dp__date_hover: T(p)
  }), F = (p) => {
    if (e.value && !Array.isArray(e.value)) {
      const P = Pn(e.value, t.weekStart);
      return {
        ...ae(p),
        dp__range_start: Ye(P[0], p.value),
        dp__range_end: Ye(P[1], p.value),
        dp__range_between_week: ht(p.value, P[0]) && dt(p.value, P[1])
      };
    }
    return {
      ...ae(p)
    };
  }, q = (p) => {
    if (e.value && Array.isArray(e.value)) {
      const P = Pn(e.value[0], t.weekStart), K = e.value[1] ? Pn(e.value[1], t.weekStart) : [];
      return {
        ...ae(p),
        dp__range_start: Ye(P[0], p.value) || Ye(K[0], p.value),
        dp__range_end: Ye(P[1], p.value) || Ye(K[1], p.value),
        dp__range_between_week: ht(p.value, P[0]) && dt(p.value, P[1]) || ht(p.value, K[0]) && dt(p.value, K[1]),
        dp__range_between: ht(p.value, P[1]) && dt(p.value, K[0])
      };
    }
    return {
      ...ae(p)
    };
  }, Q = (p) => {
    const P = n.value.count > 0 ? p.current && g(p) && _() : g(p) && _(), K = n.value.count > 0 ? p.current && g(p, !1) && _() : g(p, !1) && _();
    return { isRangeStart: P, isRangeEnd: K };
  }, me = (p) => {
    const { isRangeStart: P, isRangeEnd: K } = Q(p);
    return {
      dp__range_start: P,
      dp__range_end: K,
      dp__range_between: j(p),
      dp__date_hover_start: M(T(p), p, !0),
      dp__date_hover_end: M(T(p), p, !1)
    };
  }, ae = (p) => ({
    ...me(p),
    dp__cell_auto_range: b(p),
    dp__cell_auto_range_start: x(p),
    dp__cell_auto_range_end: A(p)
  }), m = (p) => s.value.enabled ? s.value.autoRange ? ae(p) : t.modelAuto ? { ...E(p), ...me(p) } : t.weekPicker ? q(p) : me(p) : t.weekPicker ? F(p) : E(p);
  return {
    setHoverDate: d,
    clearHoverDate: u,
    getDayClassData: (p) => t.hideOffsetDates && !p.current ? {} : {
      ...U(p),
      ...m(p),
      [t.dayClass ? t.dayClass(p.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    }
  };
}, fr = (e) => {
  const { defaultedFilters: t, defaultedRange: n, propDates: r } = ct(e), o = (O) => r.value.disabledDates ? typeof r.value.disabledDates == "function" ? r.value.disabledDates(ne(O)) : !!us(O, r.value.disabledDates) : !1, a = (O) => {
    const N = r.value.maxDate ? ht(O, r.value.maxDate) : !1, j = r.value.minDate ? dt(O, r.value.minDate) : !1, U = o(O), E = t.value.months.map((ae) => +ae).includes(He(O)), F = e.disabledWeekDays.length ? e.disabledWeekDays.some((ae) => +ae === c1(O)) : !1, q = d(O), Q = Ie(O), me = Q < +e.yearRange[0] || Q > +e.yearRange[1];
    return !(N || j || U || E || me || F || q);
  }, s = (O, N) => dt(...Zn(r.value.minDate, O, N)) || Ye(...Zn(r.value.minDate, O, N)), i = (O, N) => ht(...Zn(r.value.maxDate, O, N)) || Ye(...Zn(r.value.maxDate, O, N)), l = (O, N, j) => {
    let U = !1;
    return r.value.maxDate && j && i(O, N) && (U = !0), r.value.minDate && !j && s(O, N) && (U = !0), U;
  }, c = (O, N, j, U) => {
    let E = !1;
    return U ? r.value.minDate && r.value.maxDate ? E = l(O, N, j) : (r.value.minDate && s(O, N) || r.value.maxDate && i(O, N)) && (E = !0) : E = !0, E;
  }, d = (O) => Array.isArray(r.value.allowedDates) && !r.value.allowedDates.length ? !0 : r.value.allowedDates ? !us(O, r.value.allowedDates) : !1, u = (O) => !a(O), f = (O) => n.value.noDisabledRange ? !Ep({ start: O[0], end: O[1] }).some((N) => u(N)) : !0, y = (O) => {
    if (O) {
      const N = Ie(O);
      return N >= +e.yearRange[0] && N <= e.yearRange[1];
    }
    return !0;
  }, h = (O, N) => !!(Array.isArray(O) && O[N] && (n.value.maxRange || n.value.minRange) && y(O[N])), g = (O, N, j = 0) => {
    if (h(N, j) && y(O)) {
      const U = _p(O, N[j]), E = Hp(N[j], O), F = E.length === 1 ? 0 : E.filter((Q) => u(Q)).length, q = Math.abs(U) - (n.value.minMaxRawRange ? 0 : F);
      if (n.value.minRange && n.value.maxRange)
        return q >= +n.value.minRange && q <= +n.value.maxRange;
      if (n.value.minRange)
        return q >= +n.value.minRange;
      if (n.value.maxRange)
        return q <= +n.value.maxRange;
    }
    return !0;
  }, M = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, $ = (O) => Array.isArray(O) ? [O[0] ? di(O[0]) : null, O[1] ? di(O[1]) : null] : di(O), A = (O, N, j) => O.find(
    (U) => +U.hours === on(N) && U.minutes === "*" ? !0 : +U.minutes === wn(N) && +U.hours === on(N)
  ) && j, b = (O, N, j) => {
    const [U, E] = O, [F, q] = N;
    return !A(U, F, j) && !A(E, q, j) && j;
  }, x = (O, N) => {
    const j = Array.isArray(N) ? N : [N];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? b(e.disabledTimes, j, O) : !j.some((U) => A(e.disabledTimes, U, O)) : O;
  }, V = (O, N) => {
    const j = Array.isArray(N) ? [Rr(N[0]), N[1] ? Rr(N[1]) : void 0] : Rr(N), U = !e.disabledTimes(j);
    return O && U;
  }, k = (O, N) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? x(N, O) : V(N, O) : N, _ = (O) => {
    let N = !0;
    if (!O || M())
      return !0;
    const j = !r.value.minDate && !r.value.maxDate ? $(O) : O;
    return (e.maxTime || r.value.maxDate) && (N = Uc(
      e.maxTime,
      r.value.maxDate,
      "max",
      Ot(j),
      N
    )), (e.minTime || r.value.minDate) && (N = Uc(
      e.minTime,
      r.value.minDate,
      "min",
      Ot(j),
      N
    )), k(O, N);
  }, T = (O) => {
    if (!e.monthPicker)
      return !0;
    let N = !0;
    const j = ne(tn(O));
    if (r.value.minDate && r.value.maxDate) {
      const U = ne(tn(r.value.minDate)), E = ne(tn(r.value.maxDate));
      return ht(j, U) && dt(j, E) || Ye(j, U) || Ye(j, E);
    }
    if (r.value.minDate) {
      const U = ne(tn(r.value.minDate));
      N = ht(j, U) || Ye(j, U);
    }
    if (r.value.maxDate) {
      const U = ne(tn(r.value.maxDate));
      N = dt(j, U) || Ye(j, U);
    }
    return N;
  }, I = oe(() => (O) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : _(O)), R = oe(() => (O) => e.monthPicker ? Array.isArray(O) && (n.value.enabled || e.multiDates) ? !O.filter((N) => !T(N)).length : T(O) : !0);
  return {
    isDisabled: u,
    validateDate: a,
    validateMonthYearInRange: c,
    isDateRangeAllowed: f,
    checkMinMaxRange: g,
    isValidTime: _,
    isTimeValid: I,
    isMonthValid: R
  };
}, Is = () => {
  const e = oe(() => (r, o) => r == null ? void 0 : r.includes(o)), t = oe(() => (r, o) => r.count ? r.solo ? !0 : o === 0 : !0), n = oe(() => (r, o) => r.count ? r.solo ? !0 : o === r.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: n };
}, zE = (e, t, n) => {
  const r = Z(0), o = In({
    [Ir.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [Ir.calendar]: !1,
    [Ir.header]: !1
  }), a = oe(() => e.monthPicker), s = (u) => {
    var f;
    if ((f = e.flow) != null && f.length) {
      if (!u && a.value)
        return d();
      o[u] = !0, Object.keys(o).filter((y) => !o[y]).length || d();
    }
  }, i = () => {
    var u;
    (u = e.flow) != null && u.length && r.value !== -1 && (r.value += 1, t("flow-step", r.value), d());
  }, l = () => {
    r.value = -1;
  }, c = (u, f, ...y) => {
    var h, g;
    e.flow[r.value] === u && n.value && ((g = (h = n.value)[f]) == null || g.call(h, ...y));
  }, d = () => {
    c(dn.month, "toggleMonthPicker", !0), c(dn.year, "toggleYearPicker", !0), c(dn.calendar, "toggleTimePicker", !1, !0), c(dn.time, "toggleTimePicker", !0, !0);
    const u = e.flow[r.value];
    (u === dn.hours || u === dn.minutes || u === dn.seconds) && c(u, "toggleTimePicker", !0, !0, u);
  };
  return { childMount: s, updateFlowStep: i, resetFlow: l, flowStep: r };
}, Fs = {
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
}, un = {
  ...Fs,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null }
}, KE = {
  key: 1,
  class: "dp__input_wrap"
}, QE = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], XE = {
  key: 2,
  class: "dp__clear_icon"
}, JE = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Fs
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
    const r = n, o = e, {
      defaultedTextInput: a,
      defaultedAriaLabels: s,
      defaultedInline: i,
      defaultedConfig: l,
      defaultedRange: c,
      getDefaultPattern: d,
      getDefaultStartTime: u
    } = ct(o), { checkMinMaxRange: f } = fr(o), y = Z(), h = Z(null), g = Z(!1), M = Z(!1), $ = oe(
      () => ({
        dp__pointer: !o.disabled && !o.readonly && !a.value.enabled,
        dp__disabled: o.disabled,
        dp__input_readonly: !a.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !o.hideInputIcon,
        dp__input_valid: !!o.state,
        dp__input_invalid: o.state === !1,
        dp__input_focus: g.value || o.isMenuOpen,
        dp__input_reg: !a.value.enabled,
        [o.inputClassName]: !!o.inputClassName
      })
    ), A = () => {
      r("set-input-date", null), o.autoApply && (r("set-empty-date"), y.value = null);
    }, b = (E) => {
      const F = u();
      return bE(
        E,
        a.value.format ?? d(),
        F ?? Yp({}, o.enableSeconds),
        o.inputValue,
        M.value
      );
    }, x = (E) => {
      const { rangeSeparator: F } = a.value, [q, Q] = E.split(`${F}`);
      if (q) {
        const me = b(q.trim()), ae = Q ? b(Q.trim()) : null, m = me && ae ? [me, ae] : [me];
        f(ae, m, 0) && (y.value = me ? m : null);
      }
    }, V = () => {
      M.value = !0;
    }, k = (E) => {
      if (c.value.enabled)
        x(E);
      else if (o.multiDates) {
        const F = E.split(";");
        y.value = F.map((q) => b(q.trim())).filter((q) => q);
      } else
        y.value = b(E);
    }, _ = (E) => {
      var F;
      const q = typeof E == "string" ? E : (F = E.target) == null ? void 0 : F.value;
      q !== "" ? (a.value.openMenu && !o.isMenuOpen && r("open"), k(q), r("set-input-date", y.value)) : A(), M.value = !1, r("update:input-value", q);
    }, T = (E) => {
      a.value.enabled ? (k(E.target.value), a.value.enterSubmit && Ji(y.value) && o.inputValue !== "" ? (r("set-input-date", y.value, !0), y.value = null) : a.value.enterSubmit && o.inputValue === "" && (y.value = null, r("clear"))) : O(E);
    }, I = (E) => {
      a.value.enabled && a.value.tabSubmit && k(E.target.value), a.value.tabSubmit && Ji(y.value) && o.inputValue !== "" ? (r("set-input-date", y.value, !0, !0), y.value = null) : a.value.tabSubmit && o.inputValue === "" && (y.value = null, r("clear", !0));
    }, R = () => {
      var E;
      g.value = !0, r("focus"), a.value.enabled && a.value.selectOnFocus && ((E = h.value) == null || E.select());
    }, O = (E) => {
      E.preventDefault(), rr(E, l.value, !0), a.value.enabled && a.value.openMenu && !i.value.input && !o.isMenuOpen ? r("open") : a.value.enabled || r("toggle");
    }, N = () => {
      r("real-blur"), g.value = !1, (!o.isMenuOpen || i.value.enabled && i.value.input) && r("blur"), o.autoApply && a.value.enabled && y.value && !o.isMenuOpen && (r("set-input-date", y.value), r("select-date"), y.value = null);
    }, j = (E) => {
      rr(E, l.value, !0), r("clear");
    }, U = (E) => {
      if (!a.value.enabled) {
        if (E.code === "Tab")
          return;
        E.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        var E;
        (E = h.value) == null || E.focus({ preventScroll: !0 });
      },
      setParsedDate: (E) => {
        y.value = E;
      }
    }), (E, F) => {
      var q;
      return L(), z("div", { onClick: O }, [
        E.$slots.trigger && !E.$slots["dp-input"] && !D(i).enabled ? ge(E.$slots, "trigger", { key: 0 }) : J("", !0),
        !E.$slots.trigger && (!D(i).enabled || D(i).input) ? (L(), z("div", KE, [
          E.$slots["dp-input"] && !E.$slots.trigger && (!D(i).enabled || D(i).enabled && D(i).input) ? ge(E.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: _,
            onEnter: T,
            onTab: I,
            onClear: j,
            onBlur: N,
            onKeypress: U,
            onPaste: V,
            openMenu: () => E.$emit("open"),
            closeMenu: () => E.$emit("close"),
            toggleMenu: () => E.$emit("toggle")
          }) : J("", !0),
          E.$slots["dp-input"] ? J("", !0) : (L(), z("input", {
            key: 1,
            id: E.uid ? `dp-input-${E.uid}` : void 0,
            ref_key: "inputRef",
            ref: h,
            name: E.name,
            class: Fe($.value),
            inputmode: D(a).enabled ? "text" : "none",
            placeholder: E.placeholder,
            disabled: E.disabled,
            readonly: E.readonly,
            required: E.required,
            value: e.inputValue,
            autocomplete: E.autocomplete,
            "aria-label": (q = D(s)) == null ? void 0 : q.input,
            "aria-disabled": E.disabled || void 0,
            "aria-invalid": E.state === !1 ? !0 : void 0,
            onInput: _,
            onKeydown: [
              Ae(T, ["enter"]),
              Ae(I, ["tab"]),
              U
            ],
            onBlur: N,
            onFocus: R,
            onKeypress: U,
            onPaste: V
          }, null, 42, QE)),
          Ne("div", {
            onClick: F[2] || (F[2] = (Q) => r("toggle"))
          }, [
            E.$slots["input-icon"] && !E.hideInputIcon ? (L(), z("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: F[0] || (F[0] = (Q) => r("toggle"))
            }, [
              ge(E.$slots, "input-icon")
            ])) : J("", !0),
            !E.$slots["input-icon"] && !E.hideInputIcon && !E.$slots["dp-input"] ? (L(), $e(D(Oo), {
              key: 1,
              class: "dp__input_icon dp__input_icons",
              onClick: F[1] || (F[1] = (Q) => r("toggle"))
            })) : J("", !0)
          ]),
          E.$slots["clear-icon"] && e.inputValue && E.clearable && !E.disabled && !E.readonly ? (L(), z("span", XE, [
            ge(E.$slots, "clear-icon", { clear: j })
          ])) : J("", !0),
          E.clearable && !E.$slots["clear-icon"] && e.inputValue && !E.disabled && !E.readonly ? (L(), $e(D(Rp), {
            key: 3,
            class: "dp__clear_icon dp__input_icons",
            onClick: F[3] || (F[3] = Ze((Q) => j(Q), ["prevent"]))
          })) : J("", !0)
        ])) : J("", !0)
      ]);
    };
  }
}), ZE = ["title"], eO = ["disabled"], tO = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...un
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const n = t, r = e, {
      defaultedActionRow: o,
      defaultedPreviewFormat: a,
      defaultedMultiCalendars: s,
      defaultedTextInput: i,
      defaultedInline: l,
      defaultedRange: c,
      getDefaultPattern: d
    } = ct(r), { isTimeValid: u, isMonthValid: f } = fr(r), { buildMatrix: y } = dr(), h = Z(null), g = Z(null), M = Z(!1), $ = Z({}), A = Z(null), b = Z(null);
    Tt(() => {
      r.arrowNavigation && y([Et(h), Et(g)], "actionRow"), x(), window.addEventListener("resize", x);
    }), go(() => {
      window.removeEventListener("resize", x);
    });
    const x = () => {
      M.value = !1, setTimeout(() => {
        var U, E;
        const F = (U = A.value) == null ? void 0 : U.getBoundingClientRect(), q = (E = b.value) == null ? void 0 : E.getBoundingClientRect();
        F && q && ($.value.maxWidth = `${q.width - F.width - 20}px`), M.value = !0;
      }, 0);
    }, V = oe(() => c.value.enabled && !c.value.partialRange && r.internalModelValue ? r.internalModelValue.length === 2 : !0), k = oe(
      () => !u.value(r.internalModelValue) || !f.value(r.internalModelValue) || !V.value
    ), _ = () => {
      const U = a.value;
      return r.timePicker || r.monthPicker, U(Ot(r.internalModelValue));
    }, T = () => {
      const U = r.internalModelValue;
      return s.value.count > 0 ? `${I(U[0])} - ${I(U[1])}` : [I(U[0]), I(U[1])];
    }, I = (U) => Wp(
      U,
      a.value,
      r.formatLocale,
      i.value.rangeSeparator,
      r.modelAuto,
      d()
    ), R = oe(() => !r.internalModelValue || !r.menuMount ? "" : typeof a.value == "string" ? Array.isArray(r.internalModelValue) ? r.internalModelValue.length === 2 && r.internalModelValue[1] ? T() : r.multiDates ? r.internalModelValue.map((U) => `${I(U)}`) : r.modelAuto ? `${I(r.internalModelValue[0])}` : `${I(r.internalModelValue[0])} -` : I(r.internalModelValue) : _()), O = () => r.multiDates ? "; " : " - ", N = oe(
      () => Array.isArray(R.value) ? R.value.join(O()) : R.value
    ), j = () => {
      u.value(r.internalModelValue) && f.value(r.internalModelValue) && V.value ? n("select-date") : n("invalid-select");
    };
    return (U, E) => (L(), z("div", {
      ref_key: "actionRowRef",
      ref: b,
      class: "dp__action_row"
    }, [
      U.$slots["action-row"] ? ge(U.$slots, "action-row", wt(xt({ key: 0 }, {
        internalModelValue: U.internalModelValue,
        disabled: k.value,
        selectDate: () => U.$emit("select-date"),
        closePicker: () => U.$emit("close-picker")
      }))) : (L(), z(Oe, { key: 1 }, [
        D(o).showPreview ? (L(), z("div", {
          key: 0,
          class: "dp__selection_preview",
          title: N.value,
          style: Rt($.value)
        }, [
          U.$slots["action-preview"] && M.value ? ge(U.$slots, "action-preview", {
            key: 0,
            value: U.internalModelValue
          }) : J("", !0),
          !U.$slots["action-preview"] && M.value ? (L(), z(Oe, { key: 1 }, [
            sn(ze(N.value), 1)
          ], 64)) : J("", !0)
        ], 12, ZE)) : J("", !0),
        Ne("div", {
          ref_key: "actionBtnContainer",
          ref: A,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          U.$slots["action-buttons"] ? ge(U.$slots, "action-buttons", {
            key: 0,
            value: U.internalModelValue
          }) : J("", !0),
          U.$slots["action-buttons"] ? J("", !0) : (L(), z(Oe, { key: 1 }, [
            !D(l).enabled && D(o).showCancel ? (L(), z("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: h,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: E[0] || (E[0] = (F) => U.$emit("close-picker")),
              onKeydown: [
                E[1] || (E[1] = Ae((F) => U.$emit("close-picker"), ["enter"])),
                E[2] || (E[2] = Ae((F) => U.$emit("close-picker"), ["space"]))
              ]
            }, ze(U.cancelText), 545)) : J("", !0),
            D(o).showNow ? (L(), z("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: E[3] || (E[3] = (F) => U.$emit("select-now")),
              onKeydown: [
                E[4] || (E[4] = Ae((F) => U.$emit("select-now"), ["enter"])),
                E[5] || (E[5] = Ae((F) => U.$emit("select-now"), ["space"]))
              ]
            }, ze(U.nowButtonLabel), 33)) : J("", !0),
            D(o).showSelect ? (L(), z("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: g,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: k.value,
              onKeydown: [
                Ae(j, ["enter"]),
                Ae(j, ["space"])
              ],
              onClick: j
            }, ze(U.selectText), 41, eO)) : J("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), nO = ["onKeydown"], rO = { class: "dp__selection_grid_header" }, oO = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"], aO = ["aria-label"], ya = /* @__PURE__ */ Mt({
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
    const { setSelectionGrid: r, buildMultiLevelMatrix: o, setMonthPicker: a } = dr(), s = n, i = e, { defaultedAriaLabels: l, defaultedTextInput: c, defaultedConfig: d } = ct(
      i
    ), { hideNavigationButtons: u } = Is(), f = Z(!1), y = Z(null), h = Z(null), g = Z([]), M = Z(), $ = Z(null), A = Z(0), b = Z(null);
    Bd(() => {
      y.value = null;
    }), Tt(() => {
      Kt().then(() => O()), i.noOverlayFocus || V(), x(!0);
    }), go(() => x(!1));
    const x = (ae) => {
      var m;
      i.arrowNavigation && ((m = i.headerRefs) != null && m.length ? a(ae) : r(ae));
    }, V = () => {
      var ae;
      const m = Et(h);
      m && (c.value.enabled || (y.value ? (ae = y.value) == null || ae.focus({ preventScroll: !0 }) : m.focus({ preventScroll: !0 })), f.value = m.clientHeight < m.scrollHeight);
    }, k = oe(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !i.useRelative,
        "dp--overlay-relative": i.useRelative
      })
    ), _ = oe(
      () => i.useRelative ? { height: `${i.height}px`, width: "260px" } : void 0
    ), T = oe(() => ({
      dp__overlay_col: !0
    })), I = oe(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: f.value,
        dp__button_bottom: i.isLast
      })
    ), R = oe(() => {
      var ae, m;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((ae = i.items) == null ? void 0 : ae.length) <= 6,
        dp__container_block: ((m = i.items) == null ? void 0 : m.length) > 6
      };
    });
    ft(
      () => i.items,
      () => O(!1),
      { deep: !0 }
    );
    const O = (ae = !0) => {
      Kt().then(() => {
        const m = Et(y), p = Et(h), P = Et($), K = Et(b), pe = P ? P.getBoundingClientRect().height : 0;
        p && (p.getBoundingClientRect().height ? A.value = p.getBoundingClientRect().height - pe : A.value = d.value.modeHeight - pe), m && K && ae && (K.scrollTop = m.offsetTop - K.offsetTop - (A.value / 2 - m.getBoundingClientRect().height) - pe);
      });
    }, N = (ae) => {
      ae.disabled || s("selected", ae.value);
    }, j = () => {
      s("toggle"), s("reset-flow");
    }, U = () => {
      i.escClose && j();
    }, E = (ae, m, p, P) => {
      ae && ((m.active || m.value === i.focusValue) && (y.value = ae), i.arrowNavigation && (Array.isArray(g.value[p]) ? g.value[p][P] = ae : g.value[p] = [ae], F()));
    }, F = () => {
      var ae, m;
      const p = (ae = i.headerRefs) != null && ae.length ? [i.headerRefs].concat(g.value) : g.value.concat([i.skipButtonRef ? [] : [$.value]]);
      o(Ot(p), (m = i.headerRefs) != null && m.length ? "monthPicker" : "selectionGrid");
    }, q = (ae) => {
      i.arrowNavigation || rr(ae, d.value, !0);
    }, Q = (ae) => {
      M.value = ae, s("hover-value", ae);
    }, me = () => {
      if (j(), !i.isLast) {
        const ae = yE(i.menuWrapRef ?? null, "action-row");
        if (ae) {
          const m = Lp(ae);
          m == null || m.focus();
        }
      }
    };
    return t({ focusGrid: V }), (ae, m) => {
      var p;
      return L(), z("div", {
        ref_key: "gridWrapRef",
        ref: h,
        class: Fe(k.value),
        style: Rt(_.value),
        role: "dialog",
        tabindex: "0",
        onKeydown: [
          Ae(Ze(U, ["prevent"]), ["esc"]),
          m[0] || (m[0] = Ae(Ze((P) => q(P), ["prevent"]), ["left"])),
          m[1] || (m[1] = Ae(Ze((P) => q(P), ["prevent"]), ["up"])),
          m[2] || (m[2] = Ae(Ze((P) => q(P), ["prevent"]), ["down"])),
          m[3] || (m[3] = Ae(Ze((P) => q(P), ["prevent"]), ["right"]))
        ]
      }, [
        Ne("div", {
          ref_key: "containerRef",
          ref: b,
          class: Fe(R.value),
          role: "grid",
          style: Rt({ height: `${A.value}px` })
        }, [
          Ne("div", rO, [
            ge(ae.$slots, "header")
          ]),
          ae.$slots.overlay ? ge(ae.$slots, "overlay", { key: 0 }) : (L(!0), z(Oe, { key: 1 }, Ke(ae.items, (P, K) => (L(), z("div", {
            key: K,
            class: Fe(["dp__overlay_row", { dp__flex_row: ae.items.length >= 3 }]),
            role: "row"
          }, [
            (L(!0), z(Oe, null, Ke(P, (pe, Y) => (L(), z("div", {
              key: pe.value,
              ref_for: !0,
              ref: (Me) => E(Me, pe, K, Y),
              role: "gridcell",
              class: Fe(T.value),
              "aria-selected": pe.active || void 0,
              "aria-disabled": pe.disabled || void 0,
              tabindex: "0",
              onClick: (Me) => N(pe),
              onKeydown: [
                Ae(Ze((Me) => N(pe), ["prevent"]), ["enter"]),
                Ae(Ze((Me) => N(pe), ["prevent"]), ["space"])
              ],
              onMouseover: (Me) => Q(pe.value)
            }, [
              Ne("div", {
                class: Fe(pe.className)
              }, [
                ae.$slots.item ? ge(ae.$slots, "item", {
                  key: 0,
                  item: pe
                }) : J("", !0),
                ae.$slots.item ? J("", !0) : (L(), z(Oe, { key: 1 }, [
                  sn(ze(pe.text), 1)
                ], 64))
              ], 2)
            ], 42, oO))), 128))
          ], 2))), 128))
        ], 6),
        ae.$slots["button-icon"] ? tr((L(), z("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: $,
          type: "button",
          "aria-label": (p = D(l)) == null ? void 0 : p.toggleOverlay,
          class: Fe(I.value),
          tabindex: "0",
          onClick: j,
          onKeydown: [
            Ae(j, ["enter"]),
            Ae(me, ["tab"])
          ]
        }, [
          ge(ae.$slots, "button-icon")
        ], 42, aO)), [
          [jo, !D(u)(ae.hideNavigation, ae.type)]
        ]) : J("", !0)
      ], 46, nO);
    };
  }
}), Ls = /* @__PURE__ */ Mt({
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
    return (o, a) => (L(), z("div", {
      class: Fe({
        dp__menu_inner: !o.stretch,
        "dp--menu--inner-stretched": o.stretch,
        dp__flex_display: o.multiCalendars > 0,
        "dp--flex-display-collapsed": o.collapse
      })
    }, [
      (L(!0), z(Oe, null, Ke(n.value, (s, i) => (L(), z("div", {
        key: s,
        class: Fe(r.value)
      }, [
        ge(o.$slots, "default", {
          instance: s,
          index: i
        })
      ], 2))), 128))
    ], 2));
  }
}), sO = ["aria-label", "aria-disabled"], Wo = /* @__PURE__ */ Mt({
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
    const n = t, r = Z(null);
    return Tt(() => n("set-ref", r)), (o, a) => (L(), z("button", {
      ref_key: "elRef",
      ref: r,
      type: "button",
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": o.ariaLabel,
      "aria-disabled": o.disabled || void 0,
      onClick: a[0] || (a[0] = (s) => o.$emit("activate")),
      onKeydown: [
        a[1] || (a[1] = Ae(Ze((s) => o.$emit("activate"), ["prevent"]), ["enter"])),
        a[2] || (a[2] = Ae(Ze((s) => o.$emit("activate"), ["prevent"]), ["space"]))
      ]
    }, [
      Ne("span", {
        class: Fe(["dp__inner_nav", { dp__inner_nav_disabled: o.disabled }])
      }, [
        ge(o.$slots, "default")
      ], 2)
    ], 40, sO));
  }
}), iO = { class: "dp--year-mode-picker" }, lO = ["aria-label"], Kp = /* @__PURE__ */ Mt({
  __name: "YearModePicker",
  props: {
    ...un,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const n = t, r = e, { showRightIcon: o, showLeftIcon: a } = Is(), { defaultedConfig: s, defaultedMultiCalendars: i, defaultedAriaLabels: l, defaultedTransitions: c } = ct(r), { showTransition: d, transitionName: u } = ha(c), f = (g = !1, M) => {
      n("toggle-year-picker", { flow: g, show: M });
    }, y = (g) => {
      n("year-select", g);
    }, h = (g = !1) => {
      n("handle-year", g);
    };
    return (g, M) => {
      var $, A, b;
      return L(), z("div", iO, [
        D(a)(D(i), e.instance) ? (L(), $e(Wo, {
          key: 0,
          ref: "mpPrevIconRef",
          "aria-label": ($ = D(l)) == null ? void 0 : $.prevYear,
          disabled: e.isDisabled(!1),
          onActivate: M[0] || (M[0] = (x) => h(!1))
        }, {
          default: Be(() => [
            g.$slots["arrow-left"] ? ge(g.$slots, "arrow-left", { key: 0 }) : J("", !0),
            g.$slots["arrow-left"] ? J("", !0) : (L(), $e(D(ql), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : J("", !0),
        Ne("button", {
          ref: "mpYearButtonRef",
          class: "dp__btn dp--year-select",
          type: "button",
          "aria-label": (A = D(l)) == null ? void 0 : A.openYearsOverlay,
          onClick: M[1] || (M[1] = () => f(!1)),
          onKeydown: M[2] || (M[2] = Ae(() => f(!1), ["enter"]))
        }, [
          g.$slots.year ? ge(g.$slots, "year", {
            key: 0,
            year: e.year
          }) : J("", !0),
          g.$slots.year ? J("", !0) : (L(), z(Oe, { key: 1 }, [
            sn(ze(e.year), 1)
          ], 64))
        ], 40, lO),
        D(o)(D(i), e.instance) ? (L(), $e(Wo, {
          key: 1,
          ref: "mpNextIconRef",
          "aria-label": (b = D(l)) == null ? void 0 : b.nextYear,
          disabled: e.isDisabled(!0),
          onActivate: M[3] || (M[3] = (x) => h(!0))
        }, {
          default: Be(() => [
            g.$slots["arrow-right"] ? ge(g.$slots, "arrow-right", { key: 0 }) : J("", !0),
            g.$slots["arrow-right"] ? J("", !0) : (L(), $e(D(Gl), { key: 1 }))
          ]),
          _: 3
        }, 8, ["aria-label", "disabled"])) : J("", !0),
        et(cr, {
          name: D(u)(e.showYearPicker),
          css: D(d)
        }, {
          default: Be(() => [
            e.showYearPicker ? (L(), $e(ya, {
              key: 0,
              items: e.items,
              "text-input": g.textInput,
              "esc-close": g.escClose,
              config: g.config,
              "is-last": g.autoApply && !D(s).keepActionRow,
              "hide-navigation": g.hideNavigation,
              "aria-labels": g.ariaLabels,
              type: "year",
              onToggle: f,
              onSelected: M[4] || (M[4] = (x) => y(x))
            }, It({
              "button-icon": Be(() => [
                g.$slots["calendar-icon"] ? ge(g.$slots, "calendar-icon", { key: 0 }) : J("", !0),
                g.$slots["calendar-icon"] ? J("", !0) : (L(), $e(D(Oo), { key: 1 }))
              ]),
              _: 2
            }, [
              g.$slots["year-overlay-value"] ? {
                name: "item",
                fn: Be(({ item: x }) => [
                  ge(g.$slots, "year-overlay-value", {
                    text: x.text,
                    value: x.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels"])) : J("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), tu = (e, t, n) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((r) => Ye(e, r))) {
      const r = t.value.filter((o) => !Ye(o, e));
      t.value = r.length ? r : null;
    } else
      (n && +n > t.value.length || !n) && t.value.push(e);
  else
    t.value = [e];
}, nu = (e, t, n) => {
  let r = e.value ? e.value.slice() : [];
  return r.length === 2 && r[1] !== null && (r = []), r.length ? dt(t, r[0]) ? (r.unshift(t), n("range-start", r[0]), n("range-start", r[1])) : (r[1] = t, n("range-end", t)) : (r = [t], n("range-start", t)), r;
}, Bs = (e, t, n, r) => {
  e && (e[0] && e[1] && n && t("auto-apply"), e[0] && !e[1] && r && n && t("auto-apply"));
}, Qp = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => lr(ne(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = lr(ne(e.value), e.timezone));
}, Xp = (e, t, n, r) => Array.isArray(t.value) && t.value.length === 2 ? r.value.fixedStart && (ht(e, t.value[0]) || Ye(e, t.value[0])) ? [t.value[0], e] : r.value.fixedEnd && (dt(e, t.value[1]) || Ye(e, t.value[1])) ? [e, t.value[1]] : (n("invalid-fixed-range", e), t.value) : [], Jp = ({
  multiCalendars: e,
  highlight: t,
  propDates: n,
  calendars: r,
  modelValue: o,
  props: a,
  year: s,
  month: i,
  emit: l
}) => {
  const c = oe(() => Xl(a.yearRange, a.reverseYears)), d = Z([!1]), u = oe(() => (V, k) => {
    const _ = tt(tn(/* @__PURE__ */ new Date()), {
      month: i.value(V),
      year: s.value(V)
    });
    return Up(
      _,
      n.value.maxDate,
      n.value.minDate,
      a.preventMinMaxNavigation,
      k
    );
  }), f = () => {
    for (let V = 0; V < e.value.count; V++)
      if (V === 0)
        r.value[V] = r.value[0];
      else {
        const k = tt(ne(), r.value[V - 1]);
        r.value[V] = { month: He(k), year: Ie(Fl(k, 1)) };
      }
  }, y = (V) => {
    if (!V)
      return f();
    const k = tt(ne(), r.value[V]);
    return r.value[0].year = Ie($p(k, e.value.count - 1)), f();
  }, h = (V) => a.focusStartDate ? V[0] : V[1] ? V[1] : V[0], g = () => {
    if (o.value) {
      const V = Array.isArray(o.value) ? h(o.value) : o.value;
      r.value[0] = { month: He(V), year: Ie(V) };
    }
  };
  Tt(() => {
    g(), e.value.count && f();
  });
  const M = (V, k) => {
    r.value[k].year = V, e.value.count && !e.value.solo && y(k);
  }, $ = oe(() => (V) => vo(c.value, (k) => {
    const _ = s.value(V) === k.value, T = oa(
      k.value,
      yo(n.value.minDate),
      yo(n.value.maxDate)
    ), I = eu(t.value, k.value);
    return { active: _, disabled: T, highlighted: I };
  })), A = (V, k) => {
    M(V, k), x(k);
  }, b = (V, k = !1) => {
    if (!u.value(V, k)) {
      const _ = k ? s.value(V) + 1 : s.value(V) - 1;
      M(_, V);
    }
  }, x = (V, k = !1, _) => {
    k || l("reset-flow"), _ !== void 0 ? d.value[V] = _ : d.value[V] = !d.value[V], d.value || l("overlay-closed");
  };
  return {
    isDisabled: u,
    groupedYears: $,
    showYearPicker: d,
    selectYear: M,
    toggleYearPicker: x,
    handleYearSelect: A,
    handleYear: b
  };
}, uO = (e, t) => {
  const {
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: o,
    defaultedConfig: a,
    defaultedRange: s,
    defaultedHighlight: i,
    propDates: l,
    defaultedTz: c
  } = ct(e), { modelValue: d, year: u, month: f, calendars: y } = va(e, t), h = oe(() => Ip(e.formatLocale, e.locale, e.monthNameFormat)), g = Z(null), { checkMinMaxRange: M } = fr(e), {
    selectYear: $,
    groupedYears: A,
    showYearPicker: b,
    toggleYearPicker: x,
    handleYearSelect: V,
    handleYear: k,
    isDisabled: _
  } = Jp({
    modelValue: d,
    multiCalendars: n,
    highlight: i,
    calendars: y,
    year: u,
    propDates: l,
    month: f,
    props: e,
    emit: t
  });
  Tt(() => {
    e.startDate && (d.value && e.focusStartDate || !d.value) && $(Ie(ne(e.startDate)), 0);
  });
  const T = (m) => m ? { month: He(m), year: Ie(m) } : { month: null, year: null }, I = () => d.value ? Array.isArray(d.value) ? d.value.map((m) => T(m)) : T(d.value) : T(), R = (m, p) => {
    const P = y.value[m], K = I();
    return Array.isArray(K) ? K.some((pe) => pe.year === (P == null ? void 0 : P.year) && pe.month === p) : (P == null ? void 0 : P.year) === K.year && p === K.month;
  }, O = (m, p, P) => {
    var K, pe;
    const Y = I();
    return Array.isArray(Y) ? u.value(p) === ((K = Y[P]) == null ? void 0 : K.year) && m === ((pe = Y[P]) == null ? void 0 : pe.month) : !1;
  }, N = (m, p) => {
    if (s.value.enabled) {
      const P = I();
      if (Array.isArray(d.value) && Array.isArray(P)) {
        const K = O(m, p, 0) || O(m, p, 1), pe = An(tn(ne()), m, u.value(p));
        return Rs(d.value, g.value, pe) && !K;
      }
      return !1;
    }
    return !1;
  }, j = oe(() => (m) => vo(h.value, (p) => {
    const P = R(m, p.value), K = oa(
      p.value,
      Bp(u.value(m), l.value.minDate),
      jp(u.value(m), l.value.maxDate)
    ) || xE(l.value.disabledDates, u.value(m)).includes(p.value), pe = N(p.value, m), Y = qp(i.value, p.value, u.value(m));
    return { active: P, disabled: K, isBetween: pe, highlighted: Y };
  })), U = (m, p) => An(tn(ne()), m, u.value(p)), E = (m, p) => {
    const P = d.value ? d.value : tn(/* @__PURE__ */ new Date());
    d.value = An(P, m, u.value(p)), t("auto-apply"), t("update-flow-step");
  }, F = (m, p) => {
    const P = U(m, p);
    s.value.fixedEnd || s.value.fixedStart ? d.value = Xp(P, d, t, s) : d.value ? M(P, d.value) && (d.value = nu(d, U(m, p), t)) : d.value = [U(m, p)], Bs(d.value, t, e.autoApply, e.modelAuto);
  }, q = (m, p) => {
    tu(U(m, p), d, e.multiDatesLimit), t("auto-apply", !0);
  }, Q = (m, p) => (y.value[p].month = m, ae(p, y.value[p].year, m), e.multiDates ? q(m, p) : s.value.enabled ? F(m, p) : E(m, p)), me = (m, p) => {
    $(m, p), ae(p, m, null);
  }, ae = (m, p, P) => {
    let K = P;
    if (!K && K !== 0) {
      const pe = I();
      K = Array.isArray(pe) ? pe[m].month : pe.month;
    }
    t("update-month-year", { instance: m, year: p, month: K });
  };
  return {
    groupedMonths: j,
    groupedYears: A,
    year: u,
    isDisabled: _,
    defaultedMultiCalendars: n,
    defaultedAriaLabels: r,
    defaultedTransitions: o,
    defaultedConfig: a,
    showYearPicker: b,
    modelValue: d,
    presetDate: (m, p) => {
      Qp({
        value: m,
        modelValue: d,
        range: s.value.enabled,
        timezone: p ? void 0 : c.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (m, p) => {
      g.value = U(m, p);
    },
    selectMonth: Q,
    selectYear: me,
    toggleYearPicker: x,
    handleYearSelect: V,
    handleYear: k,
    getModelMonthYear: I
  };
}, cO = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...un
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
    const r = n, o = Ur(), a = Yt(o, "yearMode"), s = e;
    Tt(() => {
      s.shadow || r("mount", null);
    });
    const {
      groupedMonths: i,
      groupedYears: l,
      year: c,
      isDisabled: d,
      defaultedMultiCalendars: u,
      defaultedConfig: f,
      showYearPicker: y,
      modelValue: h,
      presetDate: g,
      setHoverDate: M,
      selectMonth: $,
      selectYear: A,
      toggleYearPicker: b,
      handleYearSelect: x,
      handleYear: V,
      getModelMonthYear: k
    } = uO(s, r);
    return t({ getSidebarProps: () => ({
      modelValue: h,
      year: c,
      getModelMonthYear: k,
      selectMonth: $,
      selectYear: A,
      handleYear: V
    }), presetDate: g, toggleYearPicker: (_) => b(0, _) }), (_, T) => (L(), $e(Ls, {
      "multi-calendars": D(u).count,
      collapse: _.collapse,
      stretch: ""
    }, {
      default: Be(({ instance: I }) => [
        _.$slots["month-year"] ? ge(_.$slots, "month-year", wt(xt({ key: 0 }, {
          year: D(c),
          months: D(i)(I),
          years: D(l)(I),
          selectMonth: D($),
          selectYear: D(A),
          instance: I
        }))) : (L(), $e(ya, {
          key: 1,
          items: D(i)(I),
          "arrow-navigation": _.arrowNavigation,
          "is-last": _.autoApply && !D(f).keepActionRow,
          "esc-close": _.escClose,
          height: D(f).modeHeight,
          config: _.config,
          "no-overlay-focus": !!(_.noOverlayFocus || _.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (R) => D($)(R, I),
          onHoverValue: (R) => D(M)(R, I)
        }, {
          header: Be(() => [
            et(Kp, xt(_.$props, {
              items: D(l)(I),
              instance: I,
              "show-year-picker": D(y)[I],
              year: D(c)(I),
              "is-disabled": (R) => D(d)(I, R),
              onHandleYear: (R) => D(V)(I, R),
              onYearSelect: (R) => D(x)(R, I),
              onToggleYearPicker: (R) => D(b)(I, R == null ? void 0 : R.flow, R == null ? void 0 : R.show)
            }), It({ _: 2 }, [
              Ke(D(a), (R, O) => ({
                name: R,
                fn: Be((N) => [
                  ge(_.$slots, R, wt(At(N)))
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
}), dO = (e, t) => {
  const { modelValue: n } = va(e, t), r = Z(null), { defaultedHighlight: o, defaultedFilters: a, defaultedRange: s, propDates: i } = ct(e), l = Z();
  Tt(() => {
    e.startDate && (n.value && e.focusStartDate || !n.value) && (l.value = Ie(ne(e.startDate)));
  });
  const c = (y) => Array.isArray(n.value) ? n.value.some((h) => Ie(h) === y) : n.value ? Ie(n.value) === y : !1, d = (y) => s.value.enabled && Array.isArray(n.value) ? Rs(n.value, r.value, f(y)) : !1, u = oe(() => vo(Xl(e.yearRange, e.reverseYears), (y) => {
    const h = c(y.value), g = oa(
      y.value,
      yo(i.value.minDate),
      yo(i.value.maxDate)
    ) || a.value.years.includes(y.value), M = d(y.value) && !h, $ = eu(o.value, y.value);
    return { active: h, disabled: g, isBetween: M, highlighted: $ };
  })), f = (y) => hn(tn(/* @__PURE__ */ new Date()), y);
  return {
    groupedYears: u,
    modelValue: n,
    focusYear: l,
    setHoverValue: (y) => {
      r.value = hn(tn(/* @__PURE__ */ new Date()), y);
    },
    selectYear: (y) => {
      var h;
      if (t("update-month-year", { instance: 0, year: y }), e.multiDates)
        return n.value ? Array.isArray(n.value) && (((h = n.value) == null ? void 0 : h.map((g) => Ie(g))).includes(y) ? n.value = n.value.filter((g) => Ie(g) !== y) : n.value.push(hn(Wt(ne()), y))) : n.value = [hn(Wt(ne()), y)], t("auto-apply", !0);
      if (s.value.enabled)
        return n.value = nu(n, f(y), t), Bs(n.value, t, e.autoApply, e.modelAuto);
      n.value = f(y), t("auto-apply");
    }
  };
}, fO = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...un
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
    const r = n, o = e, { groupedYears: a, modelValue: s, focusYear: i, selectYear: l, setHoverValue: c } = dO(o, r), { defaultedConfig: d } = ct(o);
    return t({ getSidebarProps: () => ({
      modelValue: s,
      selectYear: l
    }) }), (u, f) => (L(), z("div", null, [
      u.$slots["month-year"] ? ge(u.$slots, "month-year", wt(xt({ key: 0 }, {
        years: D(a),
        selectYear: D(l)
      }))) : (L(), $e(ya, {
        key: 1,
        items: D(a),
        "is-last": u.autoApply && !D(d).keepActionRow,
        height: D(d).modeHeight,
        config: u.config,
        "no-overlay-focus": !!(u.noOverlayFocus || u.textInput),
        "focus-value": D(i),
        type: "year",
        "use-relative": "",
        onSelected: D(l),
        onHoverValue: D(c)
      }, It({ _: 2 }, [
        u.$slots["year-overlay-value"] ? {
          name: "item",
          fn: Be(({ item: y }) => [
            ge(u.$slots, "year-overlay-value", {
              text: y.text,
              value: y.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), pO = {
  key: 0,
  class: "dp__time_input"
}, mO = ["aria-label", "onKeydown", "onClick"], hO = /* @__PURE__ */ Ne("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), vO = /* @__PURE__ */ Ne("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), yO = ["aria-label", "disabled", "onKeydown", "onClick"], gO = ["aria-label", "onKeydown", "onClick"], bO = /* @__PURE__ */ Ne("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1), _O = /* @__PURE__ */ Ne("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1), wO = { key: 0 }, EO = ["aria-label", "onKeydown"], OO = /* @__PURE__ */ Mt({
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
    ...un
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
    const r = n, o = e, { setTimePickerElements: a, setTimePickerBackRef: s } = dr(), { defaultedAriaLabels: i, defaultedTransitions: l, defaultedFilters: c, defaultedConfig: d, defaultedRange: u } = ct(o), { transitionName: f, showTransition: y } = ha(l), h = In({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), g = Z("AM"), M = Z(null), $ = Z([]);
    Tt(() => {
      r("mounted");
    });
    const A = (H) => tt(/* @__PURE__ */ new Date(), {
      hours: H.hours,
      minutes: H.minutes,
      seconds: o.enableSeconds ? H.seconds : 0,
      milliseconds: 0
    }), b = oe(
      () => (H) => E(H, o[H]) || V(H, o[H])
    ), x = oe(() => ({ hours: o.hours, minutes: o.minutes, seconds: o.seconds })), V = (H, we) => u.value.enabled && !u.value.disableTimeRangeValidation ? !o.validateTime(H, we) : !1, k = (H, we) => {
      if (u.value.enabled && !u.value.disableTimeRangeValidation) {
        const Pe = we ? +o[`${H}Increment`] : -+o[`${H}Increment`], C = o[H] + Pe;
        return !o.validateTime(H, C);
      }
      return !1;
    }, _ = oe(() => (H) => !me(+o[H] + +o[`${H}Increment`], H) || k(H, !0)), T = oe(() => (H) => !me(+o[H] - +o[`${H}Increment`], H) || k(H, !1)), I = (H, we) => yp(tt(ne(), H), we), R = (H, we) => uE(tt(ne(), H), we), O = oe(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !o.timePickerInline,
        dp__time_col_reg_block: !o.enableSeconds && o.is24 && !o.timePickerInline,
        dp__time_col_reg_inline: !o.enableSeconds && o.is24 && o.timePickerInline,
        dp__time_col_reg_with_button: !o.enableSeconds && !o.is24,
        dp__time_col_sec: o.enableSeconds && o.is24,
        dp__time_col_sec_with_button: o.enableSeconds && !o.is24
      })
    ), N = oe(() => {
      const H = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return o.enableSeconds ? H.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : H;
    }), j = oe(() => N.value.filter((H) => !H.separator)), U = oe(() => (H) => {
      if (H === "hours") {
        const we = K(+o.hours);
        return { text: we < 10 ? `0${we}` : `${we}`, value: we };
      }
      return { text: o[H] < 10 ? `0${o[H]}` : `${o[H]}`, value: o[H] };
    }), E = (H, we) => {
      var Pe;
      if (!o.disabledTimesConfig)
        return !1;
      const C = o.disabledTimesConfig(o.order, H === "hours" ? we : void 0);
      return C[H] ? !!((Pe = C[H]) != null && Pe.includes(we)) : !0;
    }, F = (H) => {
      const we = o.is24 ? 24 : 12, Pe = H === "hours" ? we : 60, C = +o[`${H}GridIncrement`], le = H === "hours" && !o.is24 ? C : 0, v = [];
      for (let w = le; w < Pe; w += C)
        v.push({ value: w, text: w < 10 ? `0${w}` : `${w}` });
      return H === "hours" && !o.is24 && v.push({ value: 0, text: "12" }), vo(v, (w) => ({ active: !1, disabled: c.value.times[H].includes(w.value) || !me(w.value, H) || E(H, w.value) || V(H, w.value) }));
    }, q = (H) => H >= 0 ? H : 59, Q = (H) => H >= 0 ? H : 23, me = (H, we) => {
      const Pe = o.minTime ? A(li(o.minTime)) : null, C = o.maxTime ? A(li(o.maxTime)) : null, le = A(
        li(
          x.value,
          we,
          we === "minutes" || we === "seconds" ? q(H) : Q(H)
        )
      );
      return Pe && C ? (ra(le, C) || to(le, C)) && (na(le, Pe) || to(le, Pe)) : Pe ? na(le, Pe) || to(le, Pe) : C ? ra(le, C) || to(le, C) : !0;
    }, ae = (H) => o[`no${H[0].toUpperCase() + H.slice(1)}Overlay`], m = (H) => {
      ae(H) || (h[H] = !h[H], h[H] || r("overlay-closed"));
    }, p = (H) => H === "hours" ? on : H === "minutes" ? wn : mo, P = (H, we = !0) => {
      const Pe = we ? I : R, C = we ? +o[`${H}Increment`] : -+o[`${H}Increment`];
      me(+o[H] + C, H) && r(
        `update:${H}`,
        p(H)(Pe({ [H]: +o[H] }, { [H]: +o[`${H}Increment`] }))
      );
    }, K = (H) => o.is24 ? H : (H >= 12 ? g.value = "PM" : g.value = "AM", fE(H)), pe = () => {
      g.value === "PM" ? (g.value = "AM", r("update:hours", o.hours - 12)) : (g.value = "PM", r("update:hours", o.hours + 12)), r("am-pm-change", g.value);
    }, Y = (H) => {
      h[H] = !0;
    }, Me = (H, we, Pe) => {
      if (H && o.arrowNavigation) {
        Array.isArray($.value[we]) ? $.value[we][Pe] = H : $.value[we] = [H];
        const C = $.value.reduce(
          (le, v) => v.map((w, W) => [...le[W] || [], v[W]]),
          []
        );
        s(o.closeTimePickerBtn), M.value && (C[1] = C[1].concat(M.value)), a(C, o.order);
      }
    }, Le = (H, we) => (m(H), H === "hours" && !o.is24 ? r(`update:${H}`, g.value === "PM" ? we + 12 : we) : r(`update:${H}`, we));
    return t({ openChildCmp: Y }), (H, we) => {
      var Pe;
      return H.disabled ? J("", !0) : (L(), z("div", pO, [
        (L(!0), z(Oe, null, Ke(N.value, (C, le) => {
          var v, w, W;
          return L(), z("div", {
            key: le,
            class: Fe(O.value)
          }, [
            C.separator ? (L(), z(Oe, { key: 0 }, [
              sn(" : ")
            ], 64)) : (L(), z(Oe, { key: 1 }, [
              Ne("button", {
                ref_for: !0,
                ref: (S) => Me(S, le, 0),
                type: "button",
                class: Fe({
                  dp__btn: !0,
                  dp__inc_dec_button: !H.timePickerInline,
                  dp__inc_dec_button_inline: H.timePickerInline,
                  dp__tp_inline_btn_top: H.timePickerInline,
                  dp__inc_dec_button_disabled: _.value(C.type)
                }),
                "aria-label": (v = D(i)) == null ? void 0 : v.incrementValue(C.type),
                tabindex: "0",
                onKeydown: [
                  Ae(Ze((S) => P(C.type), ["prevent"]), ["enter"]),
                  Ae(Ze((S) => P(C.type), ["prevent"]), ["space"])
                ],
                onClick: (S) => P(C.type)
              }, [
                o.timePickerInline ? (L(), z(Oe, { key: 1 }, [
                  hO,
                  vO
                ], 64)) : (L(), z(Oe, { key: 0 }, [
                  H.$slots["arrow-up"] ? ge(H.$slots, "arrow-up", { key: 0 }) : J("", !0),
                  H.$slots["arrow-up"] ? J("", !0) : (L(), $e(D(Kl), { key: 1 }))
                ], 64))
              ], 42, mO),
              Ne("button", {
                ref_for: !0,
                ref: (S) => Me(S, le, 1),
                type: "button",
                "aria-label": (w = D(i)) == null ? void 0 : w.openTpOverlay(C.type),
                class: Fe({
                  dp__time_display: !0,
                  dp__time_display_block: !H.timePickerInline,
                  dp__time_display_inline: H.timePickerInline,
                  "dp--time-invalid": b.value(C.type),
                  "dp--time-overlay-btn": !b.value(C.type)
                }),
                disabled: ae(C.type),
                tabindex: "0",
                onKeydown: [
                  Ae(Ze((S) => m(C.type), ["prevent"]), ["enter"]),
                  Ae(Ze((S) => m(C.type), ["prevent"]), ["space"])
                ],
                onClick: (S) => m(C.type)
              }, [
                H.$slots[C.type] ? ge(H.$slots, C.type, {
                  key: 0,
                  text: U.value(C.type).text,
                  value: U.value(C.type).value
                }) : J("", !0),
                H.$slots[C.type] ? J("", !0) : (L(), z(Oe, { key: 1 }, [
                  sn(ze(U.value(C.type).text), 1)
                ], 64))
              ], 42, yO),
              Ne("button", {
                ref_for: !0,
                ref: (S) => Me(S, le, 2),
                type: "button",
                class: Fe({
                  dp__btn: !0,
                  dp__inc_dec_button: !H.timePickerInline,
                  dp__inc_dec_button_inline: H.timePickerInline,
                  dp__tp_inline_btn_bottom: H.timePickerInline,
                  dp__inc_dec_button_disabled: T.value(C.type)
                }),
                "aria-label": (W = D(i)) == null ? void 0 : W.decrementValue(C.type),
                tabindex: "0",
                onKeydown: [
                  Ae(Ze((S) => P(C.type, !1), ["prevent"]), ["enter"]),
                  Ae(Ze((S) => P(C.type, !1), ["prevent"]), ["space"])
                ],
                onClick: (S) => P(C.type, !1)
              }, [
                o.timePickerInline ? (L(), z(Oe, { key: 1 }, [
                  bO,
                  _O
                ], 64)) : (L(), z(Oe, { key: 0 }, [
                  H.$slots["arrow-down"] ? ge(H.$slots, "arrow-down", { key: 0 }) : J("", !0),
                  H.$slots["arrow-down"] ? J("", !0) : (L(), $e(D(Ql), { key: 1 }))
                ], 64))
              ], 42, gO)
            ], 64))
          ], 2);
        }), 128)),
        H.is24 ? J("", !0) : (L(), z("div", wO, [
          H.$slots["am-pm-button"] ? ge(H.$slots, "am-pm-button", {
            key: 0,
            toggle: pe,
            value: g.value
          }) : J("", !0),
          H.$slots["am-pm-button"] ? J("", !0) : (L(), z("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: M,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (Pe = D(i)) == null ? void 0 : Pe.amPmButton,
            tabindex: "0",
            onClick: pe,
            onKeydown: [
              Ae(Ze(pe, ["prevent"]), ["enter"]),
              Ae(Ze(pe, ["prevent"]), ["space"])
            ]
          }, ze(g.value), 41, EO))
        ])),
        (L(!0), z(Oe, null, Ke(j.value, (C, le) => (L(), $e(cr, {
          key: le,
          name: D(f)(h[C.type]),
          css: D(y)
        }, {
          default: Be(() => [
            h[C.type] ? (L(), $e(ya, {
              key: 0,
              items: F(C.type),
              "is-last": H.autoApply && !D(d).keepActionRow,
              "esc-close": H.escClose,
              type: C.type,
              "text-input": H.textInput,
              config: H.config,
              "arrow-navigation": H.arrowNavigation,
              "aria-labels": H.ariaLabels,
              onSelected: (v) => Le(C.type, v),
              onToggle: (v) => m(C.type),
              onResetFlow: we[0] || (we[0] = (v) => H.$emit("reset-flow"))
            }, It({
              "button-icon": Be(() => [
                H.$slots["clock-icon"] ? ge(H.$slots, "clock-icon", { key: 0 }) : J("", !0),
                H.$slots["clock-icon"] ? J("", !0) : (L(), $e(bs(H.timePickerInline ? D(Oo) : D(zl)), { key: 1 }))
              ]),
              _: 2
            }, [
              H.$slots[`${C.type}-overlay-value`] ? {
                name: "item",
                fn: Be(({ item: v }) => [
                  ge(H.$slots, `${C.type}-overlay-value`, {
                    text: v.text,
                    value: v.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "onSelected", "onToggle"])) : J("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), NO = { class: "dp--tp-wrap" }, xO = ["aria-label", "tabindex"], DO = ["tabindex"], TO = ["aria-label"], Zp = /* @__PURE__ */ Mt({
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
    ...un
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
    const r = n, o = e, { buildMatrix: a, setTimePicker: s } = dr(), i = Ur(), { defaultedTransitions: l, defaultedAriaLabels: c, defaultedTextInput: d, defaultedConfig: u, defaultedRange: f } = ct(o), { transitionName: y, showTransition: h } = ha(l), { hideNavigationButtons: g } = Is(), M = Z(null), $ = Z(null), A = Z([]), b = Z(null);
    Tt(() => {
      r("mount"), !o.timePicker && o.arrowNavigation ? a([Et(M.value)], "time") : s(!0, o.timePicker);
    });
    const x = oe(() => f.value.enabled && o.modelAuto ? Fp(o.internalModelValue) : !0), V = Z(!1), k = (F) => ({
      hours: Array.isArray(o.hours) ? o.hours[F] : o.hours,
      minutes: Array.isArray(o.minutes) ? o.minutes[F] : o.minutes,
      seconds: Array.isArray(o.seconds) ? o.seconds[F] : o.seconds
    }), _ = oe(() => {
      const F = [];
      if (f.value.enabled)
        for (let q = 0; q < 2; q++)
          F.push(k(q));
      else
        F.push(k(0));
      return F;
    }), T = (F, q = !1, Q = "") => {
      q || r("reset-flow"), V.value = F, r(F ? "overlay-opened" : "overlay-closed"), o.arrowNavigation && s(F), Kt(() => {
        Q !== "" && A.value[0] && A.value[0].openChildCmp(Q);
      });
    }, I = oe(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: o.autoApply && !u.value.keepActionRow
    })), R = Yt(i, "timePicker"), O = (F, q, Q) => f.value.enabled ? q === 0 ? [F, _.value[1][Q]] : [_.value[0][Q], F] : F, N = (F) => {
      r("update:hours", F);
    }, j = (F) => {
      r("update:minutes", F);
    }, U = (F) => {
      r("update:seconds", F);
    }, E = () => {
      if (b.value && !d.value.enabled && !o.noOverlayFocus) {
        const F = Lp(b.value);
        F && F.focus({ preventScroll: !0 });
      }
    };
    return t({ toggleTimePicker: T }), (F, q) => {
      var Q;
      return L(), z("div", NO, [
        !F.timePicker && !F.timePickerInline ? tr((L(), z("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: M,
          type: "button",
          class: Fe(I.value),
          "aria-label": (Q = D(c)) == null ? void 0 : Q.openTimePicker,
          tabindex: F.noOverlayFocus ? void 0 : 0,
          onKeydown: [
            q[0] || (q[0] = Ae((me) => T(!0), ["enter"])),
            q[1] || (q[1] = Ae((me) => T(!0), ["space"]))
          ],
          onClick: q[2] || (q[2] = (me) => T(!0))
        }, [
          F.$slots["clock-icon"] ? ge(F.$slots, "clock-icon", { key: 0 }) : J("", !0),
          F.$slots["clock-icon"] ? J("", !0) : (L(), $e(D(zl), { key: 1 }))
        ], 42, xO)), [
          [jo, !D(g)(F.hideNavigation, "time")]
        ]) : J("", !0),
        et(cr, {
          name: D(y)(V.value),
          css: D(h) && !F.timePickerInline
        }, {
          default: Be(() => {
            var me;
            return [
              V.value || F.timePicker || F.timePickerInline ? (L(), z("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: b,
                class: Fe({
                  dp__overlay: !F.timePickerInline,
                  "dp--overlay-absolute": !o.timePicker && !F.timePickerInline,
                  "dp--overlay-relative": o.timePicker
                }),
                style: Rt(F.timePicker ? { height: `${D(u).modeHeight}px` } : void 0),
                tabindex: F.timePickerInline ? void 0 : 0
              }, [
                Ne("div", {
                  class: Fe(
                    F.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  F.$slots["time-picker-overlay"] ? ge(F.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: N,
                    setMinutes: j,
                    setSeconds: U
                  }) : J("", !0),
                  F.$slots["time-picker-overlay"] ? J("", !0) : (L(), z("div", {
                    key: 1,
                    class: Fe(F.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (L(!0), z(Oe, null, Ke(_.value, (ae, m) => tr((L(), $e(OO, xt({ key: m }, {
                      ...F.$props,
                      order: m,
                      hours: ae.hours,
                      minutes: ae.minutes,
                      seconds: ae.seconds,
                      closeTimePickerBtn: $.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: m === 0 ? F.fixedStart : F.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: A,
                      "validate-time": (p, P) => e.validateTime(p, O(P, m, p)),
                      "onUpdate:hours": (p) => N(O(p, m, "hours")),
                      "onUpdate:minutes": (p) => j(O(p, m, "minutes")),
                      "onUpdate:seconds": (p) => U(O(p, m, "seconds")),
                      onMounted: E,
                      onOverlayClosed: E,
                      onAmPmChange: q[3] || (q[3] = (p) => F.$emit("am-pm-change", p))
                    }), It({ _: 2 }, [
                      Ke(D(R), (p, P) => ({
                        name: p,
                        fn: Be((K) => [
                          ge(F.$slots, p, wt(At(K)))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [jo, m === 0 ? !0 : x.value]
                    ])), 128))
                  ], 2)),
                  !F.timePicker && !F.timePickerInline ? tr((L(), z("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: $,
                    type: "button",
                    class: Fe(I.value),
                    "aria-label": (me = D(c)) == null ? void 0 : me.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      q[4] || (q[4] = Ae((ae) => T(!1), ["enter"])),
                      q[5] || (q[5] = Ae((ae) => T(!1), ["space"]))
                    ],
                    onClick: q[6] || (q[6] = (ae) => T(!1))
                  }, [
                    F.$slots["calendar-icon"] ? ge(F.$slots, "calendar-icon", { key: 0 }) : J("", !0),
                    F.$slots["calendar-icon"] ? J("", !0) : (L(), $e(D(Oo), { key: 1 }))
                  ], 42, TO)), [
                    [jo, !D(g)(F.hideNavigation, "time")]
                  ]) : J("", !0)
                ], 2)
              ], 14, DO)) : J("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), em = (e, t, n, r) => {
  const { defaultedRange: o } = ct(e), a = (b, x) => Array.isArray(t[b]) ? t[b][x] : t[b], s = (b) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[b] : t.seconds : 0, i = (b, x) => b ? x !== void 0 ? or(b, a("hours", x), a("minutes", x), s(x)) : or(b, t.hours, t.minutes, s()) : Wl(ne(), s(x)), l = (b, x) => {
    t[b] = x;
  }, c = oe(() => e.modelAuto && o.value.enabled ? Array.isArray(n.value) ? n.value.length > 1 : !1 : o.value.enabled), d = (b, x) => {
    const V = Object.fromEntries(
      Object.keys(t).map((k) => k === b ? [k, x] : [k, t[k]].slice())
    );
    if (c.value && !o.value.disableTimeRangeValidation) {
      const k = (T) => n.value ? or(
        n.value[T],
        V.hours[T],
        V.minutes[T],
        V.seconds[T]
      ) : null, _ = (T) => Ul(n.value[T], 0);
      return !(Ye(k(0), k(1)) && (na(k(0), _(1)) || ra(k(1), _(0))));
    }
    return !0;
  }, u = (b, x) => {
    d(b, x) && (l(b, x), r && r());
  }, f = (b) => {
    u("hours", b);
  }, y = (b) => {
    u("minutes", b);
  }, h = (b) => {
    u("seconds", b);
  }, g = (b, x, V, k) => {
    x && f(b), !x && !V && y(b), V && h(b), n.value && k(n.value);
  }, M = (b) => {
    if (b) {
      const x = Array.isArray(b), V = x ? [+b[0].hours, +b[1].hours] : +b.hours, k = x ? [+b[0].minutes, +b[1].minutes] : +b.minutes, _ = x ? [+b[0].seconds, +b[1].seconds] : +b.seconds;
      l("hours", V), l("minutes", k), e.enableSeconds && l("seconds", _);
    }
  }, $ = (b, x) => {
    const V = {
      hours: Array.isArray(t.hours) ? t.hours[b] : t.hours,
      disabledArr: []
    };
    return (x || x === 0) && (V.hours = x), Array.isArray(e.disabledTimes) && (V.disabledArr = o.value.enabled && Array.isArray(e.disabledTimes[b]) ? e.disabledTimes[b] : e.disabledTimes), V;
  }, A = oe(() => (b, x) => {
    var V;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: k, hours: _ } = $(b, x), T = k.filter((I) => +I.hours === _);
      return ((V = T[0]) == null ? void 0 : V.minutes) === "*" ? { hours: [_], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (T == null ? void 0 : T.map((I) => +I.minutes)) ?? [],
        seconds: (T == null ? void 0 : T.map((I) => I.seconds ? +I.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: l,
    updateHours: f,
    updateMinutes: y,
    updateSeconds: h,
    getSetDateTime: i,
    updateTimeValues: g,
    getSecondsValue: s,
    assignStartTime: M,
    validateTime: d,
    disabledTimesConfig: A
  };
}, kO = (e, t) => {
  const { modelValue: n, time: r } = va(e, t), { defaultedStartTime: o, defaultedRange: a } = ct(e), { updateTimeValues: s, getSetDateTime: i, setTime: l, assignStartTime: c, disabledTimesConfig: d, validateTime: u } = em(e, r, n), f = (b) => {
    const { hours: x, minutes: V, seconds: k } = b;
    return { hours: +x, minutes: +V, seconds: k ? +k : 0 };
  }, y = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const x = f(e.startTime[0]), V = f(e.startTime[1]);
        return [tt(ne(), x), tt(ne(), V)];
      }
      const b = f(e.startTime);
      return tt(ne(), b);
    }
    return a.value.enabled ? [null, null] : null;
  }, h = () => {
    if (a.value.enabled) {
      const [b, x] = y();
      n.value = [i(b, 0), i(x, 1)];
    } else
      n.value = i(y());
  }, g = (b) => Array.isArray(b) ? [Rr(ne(b[0])), Rr(ne(b[1]))] : [Rr(b ?? ne())], M = (b, x, V) => {
    l("hours", b), l("minutes", x), l("seconds", e.enableSeconds ? V : 0);
  }, $ = () => {
    const [b, x] = g(n.value);
    return a.value.enabled ? M(
      [b.hours, x.hours],
      [b.minutes, x.minutes],
      [b.seconds, x.seconds]
    ) : M(b.hours, b.minutes, b.seconds);
  };
  Tt(() => {
    if (!e.shadow)
      return c(o.value), n.value ? $() : h();
  });
  const A = () => {
    Array.isArray(n.value) ? n.value = n.value.map((b, x) => b && i(b, x)) : n.value = i(n.value), t("time-update");
  };
  return {
    modelValue: n,
    time: r,
    disabledTimesConfig: d,
    updateTime: (b, x = !0, V = !1) => {
      s(b, x, V, A);
    },
    validateTime: u
  };
}, SO = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...un
  },
  emits: ["update:internal-model-value", "time-update", "am-pm-change"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = e, a = Ur(), s = Yt(a, "timePicker"), { time: i, modelValue: l, disabledTimesConfig: c, updateTime: d, validateTime: u } = kO(o, r);
    return t({ getSidebarProps: () => ({
      modelValue: l,
      time: i,
      updateTime: d
    }) }), (f, y) => (L(), $e(Ls, {
      "multi-calendars": 0,
      stretch: ""
    }, {
      default: Be(() => [
        et(Zp, xt(f.$props, {
          hours: D(i).hours,
          minutes: D(i).minutes,
          seconds: D(i).seconds,
          "internal-model-value": f.internalModelValue,
          "disabled-times-config": D(c),
          "validate-time": D(u),
          "onUpdate:hours": y[0] || (y[0] = (h) => D(d)(h)),
          "onUpdate:minutes": y[1] || (y[1] = (h) => D(d)(h, !1)),
          "onUpdate:seconds": y[2] || (y[2] = (h) => D(d)(h, !1, !0)),
          onAmPmChange: y[3] || (y[3] = (h) => f.$emit("am-pm-change", h))
        }), It({ _: 2 }, [
          Ke(D(s), (h, g) => ({
            name: h,
            fn: Be((M) => [
              ge(f.$slots, h, wt(At(M)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }));
  }
}), MO = { class: "dp__month_year_row" }, PO = ["aria-label", "onClick", "onKeydown"], CO = /* @__PURE__ */ Mt({
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
    ...un
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = e, {
      defaultedTransitions: a,
      defaultedAriaLabels: s,
      defaultedMultiCalendars: i,
      defaultedFilters: l,
      defaultedConfig: c,
      defaultedHighlight: d,
      propDates: u
    } = ct(o), { transitionName: f, showTransition: y } = ha(a), { buildMatrix: h } = dr(), { handleMonthYearChange: g, isDisabled: M, updateMonthYear: $ } = YE(o, r), { showLeftIcon: A, showRightIcon: b } = Is(), x = Z(!1), V = Z(!1), k = Z([null, null, null, null]);
    Tt(() => {
      r("mount");
    });
    const _ = (m) => ({
      get: () => o[m],
      set: (p) => {
        const P = m === Qt.month ? Qt.year : Qt.month;
        r("update-month-year", { [m]: p, [P]: o[P] }), m === Qt.month ? E(!0) : F(!0);
      }
    }), T = oe(_(Qt.month)), I = oe(_(Qt.year)), R = oe(() => (m) => ({
      month: o.month,
      year: o.year,
      items: m === Qt.month ? o.months : o.years,
      instance: o.instance,
      updateMonthYear: $,
      toggle: m === Qt.month ? E : F
    })), O = oe(() => o.months.find((p) => p.value === o.month) || { text: "", value: 0 }), N = oe(() => vo(o.months, (m) => {
      const p = o.month === m.value, P = oa(
        m.value,
        Bp(o.year, u.value.minDate),
        jp(o.year, u.value.maxDate)
      ) || l.value.months.includes(m.value), K = qp(d.value, m.value, o.year);
      return { active: p, disabled: P, highlighted: K };
    })), j = oe(() => vo(o.years, (m) => {
      const p = o.year === m.value, P = oa(
        m.value,
        yo(u.value.minDate),
        yo(u.value.maxDate)
      ) || l.value.years.includes(m.value), K = eu(d.value, m.value);
      return { active: p, disabled: P, highlighted: K };
    })), U = (m, p) => {
      p !== void 0 ? m.value = p : m.value = !m.value, m.value || r("overlay-closed");
    }, E = (m = !1, p) => {
      q(m), U(x, p);
    }, F = (m = !1, p) => {
      q(m), U(V, p);
    }, q = (m) => {
      m || r("reset-flow");
    }, Q = (m, p) => {
      o.arrowNavigation && (k.value[p] = Et(m), h(k.value, "monthYear"));
    }, me = oe(() => {
      var m, p;
      return [
        {
          type: Qt.month,
          index: 1,
          toggle: E,
          modelValue: T.value,
          updateModelValue: (P) => T.value = P,
          text: O.value.text,
          showSelectionGrid: x.value,
          items: N.value,
          ariaLabel: (m = s.value) == null ? void 0 : m.openMonthsOverlay
        },
        {
          type: Qt.year,
          index: 2,
          toggle: F,
          modelValue: I.value,
          updateModelValue: (P) => I.value = P,
          text: o.year,
          showSelectionGrid: V.value,
          items: j.value,
          ariaLabel: (p = s.value) == null ? void 0 : p.openYearsOverlay
        }
      ];
    }), ae = oe(() => o.disableYearSelect ? [me.value[0]] : o.yearFirst ? [...me.value].reverse() : me.value);
    return t({
      toggleMonthPicker: E,
      toggleYearPicker: F,
      handleMonthYearChange: g
    }), (m, p) => {
      var P, K, pe;
      return L(), z("div", MO, [
        m.$slots["month-year"] ? ge(m.$slots, "month-year", wt(xt({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: D($), handleMonthYearChange: D(g), instance: e.instance }))) : (L(), z(Oe, { key: 1 }, [
          D(A)(D(i), e.instance) && !m.vertical ? (L(), $e(Wo, {
            key: 0,
            "aria-label": (P = D(s)) == null ? void 0 : P.prevMonth,
            disabled: D(M)(!1),
            onActivate: p[0] || (p[0] = (Y) => D(g)(!1, !0)),
            onSetRef: p[1] || (p[1] = (Y) => Q(Y, 0))
          }, {
            default: Be(() => [
              m.$slots["arrow-left"] ? ge(m.$slots, "arrow-left", { key: 0 }) : J("", !0),
              m.$slots["arrow-left"] ? J("", !0) : (L(), $e(D(ql), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : J("", !0),
          Ne("div", {
            class: Fe(["dp__month_year_wrap", {
              dp__year_disable_select: m.disableYearSelect
            }])
          }, [
            (L(!0), z(Oe, null, Ke(ae.value, (Y, Me) => (L(), z(Oe, {
              key: Y.type
            }, [
              Ne("button", {
                ref_for: !0,
                ref: (Le) => Q(Le, Me + 1),
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": Y.ariaLabel,
                onClick: Y.toggle,
                onKeydown: [
                  Ae(Ze(Y.toggle, ["prevent"]), ["enter"]),
                  Ae(Ze(Y.toggle, ["prevent"]), ["space"])
                ]
              }, [
                m.$slots[Y.type] ? ge(m.$slots, Y.type, {
                  key: 0,
                  text: Y.text,
                  value: o[Y.type]
                }) : J("", !0),
                m.$slots[Y.type] ? J("", !0) : (L(), z(Oe, { key: 1 }, [
                  sn(ze(Y.text), 1)
                ], 64))
              ], 40, PO),
              et(cr, {
                name: D(f)(Y.showSelectionGrid),
                css: D(y)
              }, {
                default: Be(() => [
                  Y.showSelectionGrid ? (L(), $e(ya, {
                    key: 0,
                    items: Y.items,
                    "arrow-navigation": m.arrowNavigation,
                    "hide-navigation": m.hideNavigation,
                    "is-last": m.autoApply && !D(c).keepActionRow,
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
                  }, It({
                    "button-icon": Be(() => [
                      m.$slots["calendar-icon"] ? ge(m.$slots, "calendar-icon", { key: 0 }) : J("", !0),
                      m.$slots["calendar-icon"] ? J("", !0) : (L(), $e(D(Oo), { key: 1 }))
                    ]),
                    _: 2
                  }, [
                    m.$slots[`${Y.type}-overlay-value`] ? {
                      name: "item",
                      fn: Be(({ item: Le }) => [
                        ge(m.$slots, `${Y.type}-overlay-value`, {
                          text: Le.text,
                          value: Le.value
                        })
                      ]),
                      key: "0"
                    } : void 0,
                    m.$slots[`${Y.type}-overlay`] ? {
                      name: "overlay",
                      fn: Be(() => [
                        ge(m.$slots, `${Y.type}-overlay`, wt(At(R.value(Y.type))))
                      ]),
                      key: "1"
                    } : void 0,
                    m.$slots[`${Y.type}-overlay-header`] ? {
                      name: "header",
                      fn: Be(() => [
                        ge(m.$slots, `${Y.type}-overlay-header`, {
                          toggle: Y.toggle
                        })
                      ]),
                      key: "2"
                    } : void 0
                  ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "onSelected", "onToggle"])) : J("", !0)
                ]),
                _: 2
              }, 1032, ["name", "css"])
            ], 64))), 128))
          ], 2),
          D(A)(D(i), e.instance) && m.vertical ? (L(), $e(Wo, {
            key: 1,
            "aria-label": (K = D(s)) == null ? void 0 : K.prevMonth,
            disabled: D(M)(!1),
            onActivate: p[2] || (p[2] = (Y) => D(g)(!1, !0))
          }, {
            default: Be(() => [
              m.$slots["arrow-up"] ? ge(m.$slots, "arrow-up", { key: 0 }) : J("", !0),
              m.$slots["arrow-up"] ? J("", !0) : (L(), $e(D(Kl), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled"])) : J("", !0),
          D(b)(D(i), e.instance) ? (L(), $e(Wo, {
            key: 2,
            ref: "rightIcon",
            disabled: D(M)(!0),
            "aria-label": (pe = D(s)) == null ? void 0 : pe.nextMonth,
            onActivate: p[3] || (p[3] = (Y) => D(g)(!0, !0)),
            onSetRef: p[4] || (p[4] = (Y) => Q(Y, m.disableYearSelect ? 2 : 3))
          }, {
            default: Be(() => [
              m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? ge(m.$slots, m.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : J("", !0),
              m.$slots[m.vertical ? "arrow-down" : "arrow-right"] ? J("", !0) : (L(), $e(bs(m.vertical ? D(Ql) : D(Gl)), { key: 1 }))
            ]),
            _: 3
          }, 8, ["disabled", "aria-label"])) : J("", !0)
        ], 64))
      ]);
    };
  }
}), AO = ["aria-label"], VO = {
  class: "dp__calendar_header",
  role: "row"
}, $O = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, RO = ["aria-label"], IO = /* @__PURE__ */ Ne("div", { class: "dp__calendar_header_separator" }, null, -1), FO = ["aria-label"], LO = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, BO = { class: "dp__cell_inner" }, jO = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], HO = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...un
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
    const r = n, o = e, { buildMultiLevelMatrix: a } = dr(), {
      defaultedTransitions: s,
      defaultedConfig: i,
      defaultedAriaLabels: l,
      defaultedMultiCalendars: c,
      defaultedWeekNumbers: d
    } = ct(o), u = Z(null), f = Z({
      bottom: "",
      left: "",
      transform: ""
    }), y = Z([]), h = Z(null), g = Z(!0), M = Z(""), $ = Z({ startX: 0, endX: 0, startY: 0, endY: 0 }), A = Z([]), b = Z({ left: "50%" }), x = oe(() => o.calendar ? o.calendar(o.mappedDates) : o.mappedDates), V = oe(() => o.dayNames ? Array.isArray(o.dayNames) ? o.dayNames : o.dayNames(o.locale, +o.weekStart) : dE(o.formatLocale, o.locale, +o.weekStart));
    Tt(() => {
      r("mount", { cmp: "calendar", refs: y }), i.value.noSwipe || h.value && (h.value.addEventListener("touchstart", F, { passive: !1 }), h.value.addEventListener("touchend", q, { passive: !1 }), h.value.addEventListener("touchmove", Q, { passive: !1 })), o.monthChangeOnScroll && h.value && h.value.addEventListener("wheel", m, { passive: !1 });
    });
    const k = (Y) => Y ? o.vertical ? "vNext" : "next" : o.vertical ? "vPrevious" : "previous", _ = (Y, Me) => {
      if (o.transitions) {
        const Le = Wt(An(ne(), o.month, o.year));
        M.value = ht(Wt(An(ne(), Y, Me)), Le) ? s.value[k(!0)] : s.value[k(!1)], g.value = !1, Kt(() => {
          g.value = !0;
        });
      }
    }, T = oe(
      () => ({
        [o.calendarClassName]: !!o.calendarClassName
      })
    ), I = oe(() => (Y) => {
      const Me = pE(Y);
      return {
        dp__marker_dot: Me.type === "dot",
        dp__marker_line: Me.type === "line"
      };
    }), R = oe(() => (Y) => Ye(Y, u.value)), O = oe(() => ({
      dp__calendar: !0,
      dp__calendar_next: c.value.count > 0 && o.instance !== 0
    })), N = oe(() => (Y) => o.hideOffsetDates ? Y.current : !0), j = (Y) => _n(Y, "yyyy-MM-dd"), U = async (Y, Me, Le) => {
      var H, we;
      if (r("set-hover-date", Y), (we = (H = Y.marker) == null ? void 0 : H.tooltip) != null && we.length) {
        const Pe = Et(y.value[Me][Le]);
        if (Pe) {
          const { width: C, height: le } = Pe.getBoundingClientRect();
          u.value = Y.value;
          let v = { left: `${C / 2}px` }, w = -50;
          if (await Kt(), A.value[0]) {
            const { left: W, width: S } = A.value[0].getBoundingClientRect();
            W < 0 && (v = { left: "0" }, w = 0, b.value.left = `${C / 2}px`), window.innerWidth < W + S && (v = { right: "0" }, w = 0, b.value.left = `${S - C / 2}px`);
          }
          f.value = {
            bottom: `${le}px`,
            ...v,
            transform: `translateX(${w}%)`
          }, r("tooltip-open", Y.marker);
        }
      }
    }, E = (Y) => {
      u.value && (u.value = null, f.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), r("tooltip-close", Y.marker));
    }, F = (Y) => {
      $.value.startX = Y.changedTouches[0].screenX, $.value.startY = Y.changedTouches[0].screenY;
    }, q = (Y) => {
      $.value.endX = Y.changedTouches[0].screenX, $.value.endY = Y.changedTouches[0].screenY, me();
    }, Q = (Y) => {
      o.vertical && !o.inline && Y.preventDefault();
    }, me = () => {
      const Y = o.vertical ? "Y" : "X";
      Math.abs($.value[`start${Y}`] - $.value[`end${Y}`]) > 10 && r("handle-swipe", $.value[`start${Y}`] > $.value[`end${Y}`] ? "right" : "left");
    }, ae = (Y, Me, Le) => {
      Y && (Array.isArray(y.value[Me]) ? y.value[Me][Le] = Y : y.value[Me] = [Y]), o.arrowNavigation && a(y.value, "calendar");
    }, m = (Y) => {
      o.monthChangeOnScroll && (Y.preventDefault(), r("handle-scroll", Y));
    }, p = (Y) => d.value.type === "local" ? jl(Y.value, { weekStartsOn: +o.weekStart }) : d.value.type === "iso" ? Ll(Y.value) : typeof d.value.type == "function" ? d.value.type(Y.value) : "", P = (Y) => {
      const Me = Y[0];
      return d.value.hideOnOffsetDates ? Y.some((Le) => Le.current) ? p(Me) : "" : p(Me);
    }, K = (Y, Me) => {
      rr(Y, i.value), r("select-date", Me);
    }, pe = (Y) => {
      rr(Y, i.value);
    };
    return t({ triggerTransition: _ }), (Y, Me) => {
      var Le;
      return L(), z("div", {
        class: Fe(O.value)
      }, [
        Ne("div", {
          ref_key: "calendarWrapRef",
          ref: h,
          role: "grid",
          class: Fe(T.value),
          "aria-label": (Le = D(l)) == null ? void 0 : Le.calendarWrap
        }, [
          Ne("div", VO, [
            Y.weekNumbers ? (L(), z("div", $O, ze(Y.weekNumName), 1)) : J("", !0),
            (L(!0), z(Oe, null, Ke(V.value, (H, we) => {
              var Pe, C;
              return L(), z("div", {
                key: we,
                class: "dp__calendar_header_item",
                role: "gridcell",
                "aria-label": (C = (Pe = D(l)) == null ? void 0 : Pe.weekDay) == null ? void 0 : C.call(Pe, we)
              }, [
                Y.$slots["calendar-header"] ? ge(Y.$slots, "calendar-header", {
                  key: 0,
                  day: H,
                  index: we
                }) : J("", !0),
                Y.$slots["calendar-header"] ? J("", !0) : (L(), z(Oe, { key: 1 }, [
                  sn(ze(H), 1)
                ], 64))
              ], 8, RO);
            }), 128))
          ]),
          IO,
          et(cr, {
            name: M.value,
            css: !!Y.transitions
          }, {
            default: Be(() => {
              var H;
              return [
                g.value ? (L(), z("div", {
                  key: 0,
                  class: "dp__calendar",
                  role: "rowgroup",
                  "aria-label": ((H = D(l)) == null ? void 0 : H.calendarDays) || void 0
                }, [
                  (L(!0), z(Oe, null, Ke(x.value, (we, Pe) => (L(), z("div", {
                    key: Pe,
                    class: "dp__calendar_row",
                    role: "row"
                  }, [
                    Y.weekNumbers ? (L(), z("div", LO, [
                      Ne("div", BO, ze(P(we.days)), 1)
                    ])) : J("", !0),
                    (L(!0), z(Oe, null, Ke(we.days, (C, le) => {
                      var v, w, W;
                      return L(), z("div", {
                        id: j(C.value),
                        ref_for: !0,
                        ref: (S) => ae(S, Pe, le),
                        key: le + Pe,
                        role: "gridcell",
                        class: "dp__calendar_item",
                        "aria-selected": (C.classData.dp__active_date || C.classData.dp__range_start || C.classData.dp__range_start) ?? void 0,
                        "aria-disabled": C.classData.dp__cell_disabled || void 0,
                        "aria-label": (w = (v = D(l)) == null ? void 0 : v.day) == null ? void 0 : w.call(v, C),
                        tabindex: "0",
                        onClick: Ze((S) => K(S, C), ["prevent"]),
                        onKeydown: [
                          Ae((S) => Y.$emit("select-date", C), ["enter"]),
                          Ae((S) => Y.$emit("handle-space", C), ["space"])
                        ],
                        onMouseenter: (S) => U(C, Pe, le),
                        onMouseleave: (S) => E(C)
                      }, [
                        Ne("div", {
                          class: Fe(["dp__cell_inner", C.classData])
                        }, [
                          Y.$slots.day && N.value(C) ? ge(Y.$slots, "day", {
                            key: 0,
                            day: +C.text,
                            date: C.value
                          }) : J("", !0),
                          Y.$slots.day ? J("", !0) : (L(), z(Oe, { key: 1 }, [
                            sn(ze(C.text), 1)
                          ], 64)),
                          C.marker && N.value(C) ? (L(), z(Oe, { key: 2 }, [
                            Y.$slots.marker ? ge(Y.$slots, "marker", {
                              key: 0,
                              marker: C.marker,
                              day: +C.text,
                              date: C.value
                            }) : (L(), z("div", {
                              key: 1,
                              class: Fe(I.value(C.marker)),
                              style: Rt(C.marker.color ? { backgroundColor: C.marker.color } : {})
                            }, null, 6))
                          ], 64)) : J("", !0),
                          R.value(C.value) ? (L(), z("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: A,
                            class: "dp__marker_tooltip",
                            style: Rt(f.value)
                          }, [
                            (W = C.marker) != null && W.tooltip ? (L(), z("div", {
                              key: 0,
                              class: "dp__tooltip_content",
                              onClick: pe
                            }, [
                              (L(!0), z(Oe, null, Ke(C.marker.tooltip, (S, X) => (L(), z("div", {
                                key: X,
                                class: "dp__tooltip_text"
                              }, [
                                Y.$slots["marker-tooltip"] ? ge(Y.$slots, "marker-tooltip", {
                                  key: 0,
                                  tooltip: S,
                                  day: C.value
                                }) : J("", !0),
                                Y.$slots["marker-tooltip"] ? J("", !0) : (L(), z(Oe, { key: 1 }, [
                                  Ne("div", {
                                    class: "dp__tooltip_mark",
                                    style: Rt(S.color ? { backgroundColor: S.color } : {})
                                  }, null, 4),
                                  Ne("div", null, ze(S.text), 1)
                                ], 64))
                              ]))), 128)),
                              Ne("div", {
                                class: "dp__arrow_bottom_tp",
                                style: Rt(b.value)
                              }, null, 4)
                            ])) : J("", !0)
                          ], 4)) : J("", !0)
                        ], 2)
                      ], 40, jO);
                    }), 128))
                  ]))), 128))
                ], 8, FO)) : J("", !0)
              ];
            }),
            _: 3
          }, 8, ["name", "css"])
        ], 10, AO)
      ], 2);
    };
  }
}), Gc = (e) => Array.isArray(e), YO = (e, t, n, r) => {
  const o = Z([]), a = Z(/* @__PURE__ */ new Date()), { modelValue: s, calendars: i, time: l } = va(e, t), { defaultedMultiCalendars: c, defaultedStartTime: d, defaultedRange: u, defaultedTz: f, propDates: y } = ct(e), { validateMonthYearInRange: h, isDisabled: g, isDateRangeAllowed: M, checkMinMaxRange: $ } = fr(e), { updateTimeValues: A, getSetDateTime: b, setTime: x, assignStartTime: V, validateTime: k, disabledTimesConfig: _ } = em(e, l, s, r), T = oe(
    () => (B) => i.value[B] ? i.value[B].month : 0
  ), I = oe(
    () => (B) => i.value[B] ? i.value[B].year : 0
  ), R = (B, se, _e) => {
    var Ce, te;
    i.value[B] || (i.value[B] = { month: 0, year: 0 }), i.value[B].month = Hc(se) ? (Ce = i.value[B]) == null ? void 0 : Ce.month : se, i.value[B].year = Hc(_e) ? (te = i.value[B]) == null ? void 0 : te.year : _e;
  }, O = () => {
    e.autoApply && t("select-date");
  };
  ft(
    s,
    (B, se) => {
      JSON.stringify(B) !== JSON.stringify(se) && U();
    },
    { deep: !0 }
  ), Tt(() => {
    e.shadow || (s.value || (pe(), d.value && V(d.value)), U(!0), e.focusStartDate && e.startDate && pe());
  });
  const N = oe(() => {
    var B;
    return (B = e.flow) != null && B.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), j = () => {
    e.autoApply && N.value && t("auto-apply");
  }, U = (B = !1) => {
    if (s.value)
      return Array.isArray(s.value) ? (o.value = s.value, m(B)) : q(s.value, B);
    if (c.value.count && B && !e.startDate)
      return F(ne(), B);
  }, E = () => Array.isArray(s.value) && u.value.enabled ? He(s.value[0]) === He(s.value[1] ?? s.value[0]) : !1, F = (B, se = !1) => {
    if ((!c.value.count || !c.value.static || se) && R(0, He(B), Ie(B)), c.value.count && (!c.value.solo || !s.value || E()))
      for (let _e = 1; _e < c.value.count; _e++) {
        const Ce = tt(ne(), { month: T.value(_e - 1), year: I.value(_e - 1) }), te = yp(Ce, { months: 1 });
        i.value[_e] = { month: He(te), year: Ie(te) };
      }
  }, q = (B, se) => {
    F(B), x("hours", on(B)), x("minutes", wn(B)), x("seconds", mo(B)), c.value.count && se && K();
  }, Q = (B) => {
    if (c.value.count) {
      if (c.value.solo)
        return 0;
      const se = He(B[0]), _e = He(B[1]);
      return Math.abs(_e - se) < c.value.count ? 0 : 1;
    }
    return 1;
  }, me = (B, se) => {
    B[1] && u.value.showLastInRange ? F(B[Q(B)], se) : F(B[0], se);
    const _e = (Ce, te) => [
      Ce(B[0]),
      B[1] ? Ce(B[1]) : l[te][1]
    ];
    x("hours", _e(on, "hours")), x("minutes", _e(wn, "minutes")), x("seconds", _e(mo, "seconds"));
  }, ae = (B, se) => {
    if ((u.value.enabled || e.weekPicker) && !e.multiDates)
      return me(B, se);
    if (e.multiDates && se) {
      const _e = B[B.length - 1];
      return q(_e, se);
    }
  }, m = (B) => {
    const se = s.value;
    ae(se, B), c.value.count && c.value.solo && K();
  }, p = (B, se) => {
    const _e = tt(ne(), { month: T.value(se), year: I.value(se) }), Ce = B < 0 ? rn(_e, 1) : ho(_e, 1);
    h(He(Ce), Ie(Ce), B < 0, e.preventMinMaxNavigation) && (R(se, He(Ce), Ie(Ce)), t("update-month-year", { instance: se, month: He(Ce), year: Ie(Ce) }), c.value.count && !c.value.solo && P(se), n());
  }, P = (B) => {
    for (let se = B - 1; se >= 0; se--) {
      const _e = ho(tt(ne(), { month: T.value(se + 1), year: I.value(se + 1) }), 1);
      R(se, He(_e), Ie(_e));
    }
    for (let se = B + 1; se <= c.value.count - 1; se++) {
      const _e = rn(tt(ne(), { month: T.value(se - 1), year: I.value(se - 1) }), 1);
      R(se, He(_e), Ie(_e));
    }
  }, K = () => {
    if (Array.isArray(s.value) && s.value.length === 2) {
      const B = ne(
        ne(s.value[1] ? s.value[1] : rn(s.value[0], 1))
      ), [se, _e] = [He(s.value[0]), Ie(s.value[0])], [Ce, te] = [He(s.value[1]), Ie(s.value[1])];
      (se !== Ce || se === Ce && _e !== te) && c.value.solo && R(1, He(B), Ie(B));
    } else
      s.value && !Array.isArray(s.value) && (R(0, He(s.value), Ie(s.value)), F(ne()));
  }, pe = () => {
    e.startDate && (R(0, He(ne(e.startDate)), Ie(ne(e.startDate))), c.value.count && P(0));
  }, Y = (B, se) => {
    if (e.monthChangeOnScroll) {
      const _e = (/* @__PURE__ */ new Date()).getTime() - a.value.getTime(), Ce = Math.abs(B.deltaY);
      let te = 500;
      Ce > 1 && (te = 100), Ce > 100 && (te = 0), _e > te && (a.value = /* @__PURE__ */ new Date(), p(e.monthChangeOnScroll !== "inverse" ? -B.deltaY : B.deltaY, se));
    }
  }, Me = (B, se, _e = !1) => {
    e.monthChangeOnArrows && e.vertical === _e && Le(B, se);
  }, Le = (B, se) => {
    p(B === "right" ? -1 : 1, se);
  }, H = (B) => {
    if (y.value.markers)
      return us(B.value, y.value.markers);
  }, we = (B, se) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [B == 0, !0];
      case "fair":
        return [B == 0 || se > B, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, Pe = (B, se, _e, Ce) => {
    if (e.sixWeeks && B.length < 6) {
      const te = 6 - B.length, xe = (se.getDay() + 7 - Ce) % 7, ve = 6 - (_e.getDay() + 7 - Ce) % 7, [gt, jt] = we(xe, ve);
      for (let pr = 1; pr <= te; pr++)
        if (jt ? !!(pr % 2) == gt : gt) {
          const Ln = B[0].days[0], Hs = C(en(Ln.value, -7), He(se));
          B.unshift({ days: Hs });
        } else {
          const Ln = B[B.length - 1], Hs = Ln.days[Ln.days.length - 1], tm = C(en(Hs.value, 1), He(se));
          B.push({ days: tm });
        }
    }
    return B;
  }, C = (B, se) => {
    const _e = ne(B), Ce = [];
    for (let te = 0; te < 7; te++) {
      const xe = en(_e, te), ve = He(xe) !== se;
      Ce.push({
        text: e.hideOffsetDates && ve ? "" : xe.getDate(),
        value: xe,
        current: !ve,
        classData: {}
      });
    }
    return Ce;
  }, le = (B, se) => {
    const _e = [], Ce = new Date(se, B), te = new Date(se, B + 1, 0), xe = e.weekStart, ve = Dn(Ce, { weekStartsOn: xe }), gt = (jt) => {
      const pr = C(jt, B);
      if (_e.push({ days: pr }), !_e[_e.length - 1].days.some(
        (Ln) => Ye(Wt(Ln.value), Wt(te))
      )) {
        const Ln = en(jt, 7);
        gt(Ln);
      }
    };
    return gt(ve), Pe(_e, Ce, te, xe);
  }, v = (B) => {
    const se = or(ne(B.value), l.hours, l.minutes, ie());
    t("date-update", se), e.multiDates ? tu(se, s, e.multiDatesLimit) : s.value = se, r(), Kt().then(() => {
      j();
    });
  }, w = (B) => u.value.noDisabledRange ? Hp(o.value[0], B).some((se) => g(se)) : !1, W = () => {
    o.value = s.value ? s.value.slice() : [], o.value.length === 2 && !(u.value.fixedStart || u.value.fixedEnd) && (o.value = []);
  }, S = (B, se) => {
    const _e = [
      ne(B.value),
      en(ne(B.value), +u.value.autoRange)
    ];
    M(_e) ? (se && X(B.value), o.value = _e) : t("invalid-date", B.value);
  }, X = (B) => {
    const se = He(ne(B)), _e = Ie(ne(B));
    if (R(0, se, _e), c.value.count > 0)
      for (let Ce = 1; Ce < c.value.count; Ce++) {
        const te = wE(
          tt(ne(B), { year: T.value(Ce - 1), month: I.value(Ce - 1) })
        );
        R(Ce, te.month, te.year);
      }
  }, re = (B) => {
    if (w(B.value) || !$(B.value, s.value, u.value.fixedStart ? 0 : 1))
      return t("invalid-date", B.value);
    o.value = Xp(ne(B.value), s, t, u);
  }, fe = (B, se) => {
    if (W(), u.value.autoRange)
      return S(B, se);
    if (u.value.fixedStart || u.value.fixedEnd)
      return re(B);
    o.value[0] ? $(ne(B.value), s.value) && !w(B.value) ? dt(ne(B.value), ne(o.value[0])) ? (o.value.unshift(ne(B.value)), t("range-end", o.value[0])) : (o.value[1] = ne(B.value), t("range-end", o.value[1])) : (e.autoApply && t("auto-apply-invalid", B.value), t("invalid-date", B.value)) : (o.value[0] = ne(B.value), t("range-start", o.value[0]));
  }, ie = (B = !0) => e.enableSeconds ? Array.isArray(l.seconds) ? B ? l.seconds[0] : l.seconds[1] : l.seconds : 0, ce = (B) => {
    o.value[B] = or(
      o.value[B],
      l.hours[B],
      l.minutes[B],
      ie(B !== 1)
    );
  }, ee = () => {
    var B, se;
    o.value[0] && o.value[1] && +((B = o.value) == null ? void 0 : B[0]) > +((se = o.value) == null ? void 0 : se[1]) && (o.value.reverse(), t("range-start", o.value[0]), t("range-end", o.value[1]));
  }, de = () => {
    o.value.length && (o.value[0] && !o.value[1] ? ce(0) : (ce(0), ce(1), r()), ee(), s.value = o.value.slice(), Bs(o.value, t, e.autoApply, e.modelAuto));
  }, Ee = (B, se = !1) => {
    if (g(B.value) || !B.current && e.hideOffsetDates)
      return t("invalid-date", B.value);
    if (!u.value.enabled)
      return v(B);
    Gc(l.hours) && Gc(l.minutes) && !e.multiDates && (fe(B, se), de());
  }, be = (B, se) => {
    var _e;
    R(B, se.month, se.year), c.value.count && !c.value.solo && P(B), t("update-month-year", { instance: B, month: se.month, year: se.year }), n(c.value.solo ? B : void 0);
    const Ce = (_e = e.flow) != null && _e.length ? e.flow[e.flowStep] : void 0;
    !se.fromNav && (Ce === dn.month || Ce === dn.year) && r();
  }, Te = (B, se) => {
    Qp({
      value: B,
      modelValue: s,
      range: u.value.enabled,
      timezone: se ? void 0 : f.value.timezone
    }), O(), e.multiCalendars && Kt().then(() => U(!0));
  }, Re = () => {
    u.value.enabled ? s.value && Array.isArray(s.value) && s.value[0] ? s.value = dt(ne(), s.value[0]) ? [ne(), s.value[0]] : [s.value[0], ne()] : s.value = [ne()] : s.value = ne(), O();
  }, Ue = () => {
    if (Array.isArray(s.value))
      if (e.multiDates) {
        const B = Je();
        s.value[s.value.length - 1] = b(B);
      } else
        s.value = s.value.map((B, se) => B && b(B, se));
    else
      s.value = b(s.value);
    t("time-update");
  }, Je = () => Array.isArray(s.value) && s.value.length ? s.value[s.value.length - 1] : null;
  return {
    calendars: i,
    modelValue: s,
    month: T,
    year: I,
    time: l,
    disabledTimesConfig: _,
    validateTime: k,
    getCalendarDays: le,
    getMarker: H,
    handleScroll: Y,
    handleSwipe: Le,
    handleArrow: Me,
    selectDate: Ee,
    updateMonthYear: be,
    presetDate: Te,
    selectCurrentDate: Re,
    updateTime: (B, se = !0, _e = !1) => {
      A(B, se, _e, Ue);
    }
  };
}, UO = { key: 0 }, WO = /* @__PURE__ */ Mt({
  __name: "DatePicker",
  props: {
    ...un
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
    const r = n, o = e, {
      calendars: a,
      month: s,
      year: i,
      modelValue: l,
      time: c,
      disabledTimesConfig: d,
      validateTime: u,
      getCalendarDays: f,
      getMarker: y,
      handleArrow: h,
      handleScroll: g,
      handleSwipe: M,
      selectDate: $,
      updateMonthYear: A,
      presetDate: b,
      selectCurrentDate: x,
      updateTime: V
    } = YO(o, r, me, ae), k = Ur(), { setHoverDate: _, getDayClassData: T, clearHoverDate: I } = GE(l, o), { defaultedMultiCalendars: R } = ct(o), O = Z([]), N = Z([]), j = Z(null), U = Yt(k, "calendar"), E = Yt(k, "monthYear"), F = Yt(k, "timePicker"), q = (p) => {
      o.shadow || r("mount", p);
    };
    ft(
      a,
      () => {
        o.shadow || setTimeout(() => {
          r("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const Q = oe(() => (p) => f(s.value(p), i.value(p)).map((P) => ({
      ...P,
      days: P.days.map((K) => (K.marker = y(K), K.classData = T(K), K))
    })));
    function me(p) {
      var P;
      p || p === 0 ? (P = N.value[p]) == null || P.triggerTransition(s.value(p), i.value(p)) : N.value.forEach((K, pe) => K.triggerTransition(s.value(pe), i.value(pe)));
    }
    function ae() {
      r("update-flow-step");
    }
    const m = (p, P = !1) => {
      $(p, P), o.spaceConfirm && r("select-date");
    };
    return t({
      clearHoverDate: I,
      presetDate: b,
      selectCurrentDate: x,
      toggleMonthPicker: (p, P, K = 0) => {
        var pe;
        (pe = O.value[K]) == null || pe.toggleMonthPicker(p, P);
      },
      toggleYearPicker: (p, P, K = 0) => {
        var pe;
        (pe = O.value[K]) == null || pe.toggleYearPicker(p, P);
      },
      toggleTimePicker: (p, P, K) => {
        var pe;
        (pe = j.value) == null || pe.toggleTimePicker(p, P, K);
      },
      handleArrow: h,
      updateMonthYear: A,
      getSidebarProps: () => ({
        modelValue: l,
        month: s,
        year: i,
        time: c,
        updateTime: V,
        updateMonthYear: A,
        selectDate: $,
        presetDate: b
      })
    }), (p, P) => (L(), z(Oe, null, [
      et(Ls, {
        "multi-calendars": D(R).count,
        collapse: p.collapse
      }, {
        default: Be(({ instance: K, index: pe }) => [
          p.disableMonthYearSelect ? J("", !0) : (L(), $e(CO, xt({
            key: 0,
            ref: (Y) => {
              Y && (O.value[pe] = Y);
            },
            months: D(Ip)(p.formatLocale, p.locale, p.monthNameFormat),
            years: D(Xl)(p.yearRange, p.reverseYears),
            month: D(s)(K),
            year: D(i)(K),
            instance: K
          }, p.$props, {
            onMount: P[0] || (P[0] = (Y) => q(D(Ir).header)),
            onResetFlow: P[1] || (P[1] = (Y) => p.$emit("reset-flow")),
            onUpdateMonthYear: (Y) => D(A)(K, Y),
            onOverlayClosed: P[2] || (P[2] = (Y) => p.$emit("focus-menu"))
          }), It({ _: 2 }, [
            Ke(D(E), (Y, Me) => ({
              name: Y,
              fn: Be((Le) => [
                ge(p.$slots, Y, wt(At(Le)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          et(HO, xt({
            ref: (Y) => {
              Y && (N.value[pe] = Y);
            },
            "mapped-dates": Q.value(K),
            month: D(s)(K),
            year: D(i)(K),
            instance: K
          }, p.$props, {
            onSelectDate: (Y) => D($)(Y, K !== 1),
            onHandleSpace: (Y) => m(Y, K !== 1),
            onSetHoverDate: P[3] || (P[3] = (Y) => D(_)(Y)),
            onHandleScroll: (Y) => D(g)(Y, K),
            onHandleSwipe: (Y) => D(M)(Y, K),
            onMount: P[4] || (P[4] = (Y) => q(D(Ir).calendar)),
            onResetFlow: P[5] || (P[5] = (Y) => p.$emit("reset-flow")),
            onTooltipOpen: P[6] || (P[6] = (Y) => p.$emit("tooltip-open", Y)),
            onTooltipClose: P[7] || (P[7] = (Y) => p.$emit("tooltip-close", Y))
          }), It({ _: 2 }, [
            Ke(D(U), (Y, Me) => ({
              name: Y,
              fn: Be((Le) => [
                ge(p.$slots, Y, wt(At({ ...Le })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse"]),
      p.enableTimePicker ? (L(), z("div", UO, [
        p.$slots["time-picker"] ? ge(p.$slots, "time-picker", wt(xt({ key: 0 }, { time: D(c), updateTime: D(V) }))) : (L(), $e(Zp, xt({
          key: 1,
          ref_key: "timePickerRef",
          ref: j
        }, p.$props, {
          hours: D(c).hours,
          minutes: D(c).minutes,
          seconds: D(c).seconds,
          "internal-model-value": p.internalModelValue,
          "disabled-times-config": D(d),
          "validate-time": D(u),
          onMount: P[8] || (P[8] = (K) => q(D(Ir).timePicker)),
          "onUpdate:hours": P[9] || (P[9] = (K) => D(V)(K)),
          "onUpdate:minutes": P[10] || (P[10] = (K) => D(V)(K, !1)),
          "onUpdate:seconds": P[11] || (P[11] = (K) => D(V)(K, !1, !0)),
          onResetFlow: P[12] || (P[12] = (K) => p.$emit("reset-flow")),
          onOverlayClosed: P[13] || (P[13] = (K) => p.$emit("time-picker-close")),
          onOverlayOpened: P[14] || (P[14] = (K) => p.$emit("time-picker-open", K)),
          onAmPmChange: P[15] || (P[15] = (K) => p.$emit("am-pm-change", K))
        }), It({ _: 2 }, [
          Ke(D(F), (K, pe) => ({
            name: K,
            fn: Be((Y) => [
              ge(p.$slots, K, wt(At(Y)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : J("", !0)
    ], 64));
  }
}), qO = (e, t) => {
  const n = Z(), { defaultedMultiCalendars: r, defaultedConfig: o, defaultedHighlight: a, defaultedRange: s, propDates: i } = ct(e), { modelValue: l, year: c, month: d, calendars: u } = va(e, t), { isDisabled: f } = fr(e), { selectYear: y, groupedYears: h, showYearPicker: g, isDisabled: M, toggleYearPicker: $, handleYearSelect: A, handleYear: b } = Jp({
    modelValue: l,
    multiCalendars: r,
    highlight: a,
    calendars: u,
    propDates: i,
    month: d,
    year: c,
    props: e,
    emit: t
  }), x = (j, U) => [j, U].map((E) => _n(E, "MMMM", { locale: e.formatLocale })).join("-"), V = oe(() => (j) => l.value ? Array.isArray(l.value) ? l.value.some((U) => Lc(j, U)) : Lc(l.value, j) : !1), k = (j) => {
    if (s.value.enabled) {
      if (Array.isArray(l.value)) {
        const U = Ye(j, l.value[0]) || Ye(j, l.value[1]);
        return Rs(l.value, n.value, j) && !U;
      }
      return !1;
    }
    return !1;
  }, _ = (j, U) => j.quarter === Ac(U) && j.year === Ie(U), T = (j) => typeof a.value == "function" ? a.value({ quarter: Ac(j), year: Ie(j) }) : !!a.value.quarters.find((U) => _(U, j)), I = oe(() => (j) => {
    const U = tt(/* @__PURE__ */ new Date(), { year: c.value(j) });
    return vw({
      start: Op(U),
      end: yw(U)
    }).map((E) => {
      const F = Dr(E), q = Vc(E), Q = f(E), me = k(F), ae = T(F);
      return {
        text: x(F, q),
        value: F,
        active: V.value(F),
        highlighted: ae,
        disabled: Q,
        isBetween: me
      };
    });
  }), R = (j) => {
    tu(j, l, e.multiDatesLimit), t("auto-apply", !0);
  }, O = (j) => {
    l.value = nu(l, j, t), Bs(l.value, t, e.autoApply, e.modelAuto);
  }, N = (j) => {
    l.value = j, t("auto-apply");
  };
  return {
    defaultedConfig: o,
    defaultedMultiCalendars: r,
    groupedYears: h,
    year: c,
    isDisabled: M,
    quarters: I,
    showYearPicker: g,
    modelValue: l,
    setHoverDate: (j) => {
      n.value = j;
    },
    selectYear: y,
    selectQuarter: (j, U, E) => {
      if (!E)
        return u.value[U].month = He(Vc(j)), e.multiDates ? R(j) : s.value.enabled ? O(j) : N(j);
    },
    toggleYearPicker: $,
    handleYearSelect: A,
    handleYear: b
  };
}, GO = { class: "dp--quarter-items" }, zO = ["disabled", "onClick", "onMouseover"], KO = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...un
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
    const r = n, o = e, a = Ur(), s = Yt(a, "yearMode"), {
      defaultedMultiCalendars: i,
      defaultedConfig: l,
      groupedYears: c,
      year: d,
      isDisabled: u,
      quarters: f,
      modelValue: y,
      showYearPicker: h,
      setHoverDate: g,
      selectQuarter: M,
      toggleYearPicker: $,
      handleYearSelect: A,
      handleYear: b
    } = qO(o, r);
    return t({ getSidebarProps: () => ({
      modelValue: y,
      year: d,
      selectQuarter: M,
      handleYearSelect: A,
      handleYear: b
    }) }), (x, V) => (L(), $e(Ls, {
      "multi-calendars": D(i).count,
      collapse: x.collapse,
      stretch: ""
    }, {
      default: Be(({ instance: k }) => [
        Ne("div", {
          class: "dp-quarter-picker-wrap",
          style: Rt({ minHeight: `${D(l).modeHeight}px` })
        }, [
          Ne("div", null, [
            et(Kp, xt(x.$props, {
              items: D(c)(k),
              instance: k,
              "show-year-picker": D(h)[k],
              year: D(d)(k),
              "is-disabled": (_) => D(u)(k, _),
              onHandleYear: (_) => D(b)(k, _),
              onYearSelect: (_) => D(A)(_, k),
              onToggleYearPicker: (_) => D($)(k, _ == null ? void 0 : _.flow, _ == null ? void 0 : _.show)
            }), It({ _: 2 }, [
              Ke(D(s), (_, T) => ({
                name: _,
                fn: Be((I) => [
                  ge(x.$slots, _, wt(At(I)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          Ne("div", GO, [
            (L(!0), z(Oe, null, Ke(D(f)(k), (_, T) => (L(), z("div", { key: T }, [
              Ne("button", {
                type: "button",
                class: Fe(["dp--qr-btn", {
                  "dp--qr-btn-active": _.active,
                  "dp--qr-btn-between": _.isBetween,
                  "dp--qr-btn-disabled": _.disabled,
                  "dp--highlighted": _.highlighted
                }]),
                disabled: _.disabled,
                onClick: (I) => D(M)(_.value, k, _.disabled),
                onMouseover: (I) => D(g)(_.value)
              }, [
                x.$slots.quarter ? ge(x.$slots, "quarter", {
                  key: 0,
                  value: _.value,
                  text: _.text
                }) : (L(), z(Oe, { key: 1 }, [
                  sn(ze(_.text), 1)
                ], 64))
              ], 42, zO)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse"]));
  }
}), QO = ["id", "aria-label"], XO = {
  key: 0,
  class: "dp--menu-load-container"
}, JO = /* @__PURE__ */ Ne("span", { class: "dp--menu-loader" }, null, -1), ZO = [
  JO
], eN = {
  key: 0,
  class: "dp__sidebar_left"
}, tN = ["onClick", "onKeydown"], nN = {
  key: 2,
  class: "dp__sidebar_right"
}, rN = {
  key: 3,
  class: "dp__action_extra"
}, zc = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...Fs,
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
    const r = n, o = e, a = Z(null), s = oe(() => {
      const { openOnTop: C, ...le } = o;
      return {
        ...le,
        flowStep: T.value,
        collapse: o.collapse,
        noOverlayFocus: o.noOverlayFocus,
        menuWrapRef: a.value
      };
    }), { setMenuFocused: i, setShiftKey: l, control: c } = Gp(), d = Ur(), { defaultedTextInput: u, defaultedInline: f, defaultedConfig: y } = ct(o), h = Z(null), g = Z(0), M = Z(null), $ = Z(!1), A = Z(null);
    Tt(() => {
      if (!o.shadow) {
        $.value = !0, b(), window.addEventListener("resize", b);
        const C = Et(a);
        if (C && !u.value.enabled && !f.value.enabled && (i(!0), j()), C) {
          const le = (v) => {
            y.value.allowPreventDefault && v.preventDefault(), rr(v, y.value, !0);
          };
          C.addEventListener("pointerdown", le), C.addEventListener("mousedown", le);
        }
      }
    }), go(() => {
      window.removeEventListener("resize", b);
    });
    const b = () => {
      const C = Et(M);
      C && (g.value = C.getBoundingClientRect().width);
    }, { arrowRight: x, arrowLeft: V, arrowDown: k, arrowUp: _ } = dr(), { flowStep: T, updateFlowStep: I, childMount: R, resetFlow: O } = zE(o, r, A), N = oe(() => o.monthPicker ? cO : o.yearPicker ? fO : o.timePicker ? SO : o.quarterPicker ? KO : WO), j = () => {
      const C = Et(a);
      C && C.focus({ preventScroll: !0 });
    }, U = oe(() => {
      var C;
      return ((C = A.value) == null ? void 0 : C.getSidebarProps()) || {};
    }), E = () => {
      o.openOnTop && r("recalculate-position");
    }, F = Yt(d, "action"), q = oe(() => o.monthPicker || o.yearPicker ? Yt(d, "monthYear") : o.timePicker ? Yt(d, "timePicker") : Yt(d, "shared")), Q = oe(() => o.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), me = oe(() => ({
      dp__menu_disabled: o.disabled,
      dp__menu_readonly: o.readonly,
      "dp-menu-loading": o.loading
    })), ae = oe(
      () => ({
        dp__menu: !0,
        dp__menu_index: !f.value.enabled,
        dp__relative: f.value.enabled,
        [o.menuClassName]: !!o.menuClassName
      })
    ), m = (C) => {
      rr(C, y.value, !0);
    }, p = () => {
      o.escClose && r("close-picker");
    }, P = (C) => {
      if (o.arrowNavigation) {
        if (C === "up")
          return _();
        if (C === "down")
          return k();
        if (C === "left")
          return V();
        if (C === "right")
          return x();
      } else
        C === "left" || C === "up" ? Le("handleArrow", "left", 0, C === "up") : Le("handleArrow", "right", 0, C === "down");
    }, K = (C) => {
      l(C.shiftKey), !o.disableMonthYearSelect && C.code === "Tab" && C.target.classList.contains("dp__menu") && c.value.shiftKeyInMenu && (C.preventDefault(), rr(C, y.value, !0), r("close-picker"));
    }, pe = () => {
      j(), r("time-picker-close");
    }, Y = (C) => {
      var le, v, w;
      (le = A.value) == null || le.toggleTimePicker(!1, !1), (v = A.value) == null || v.toggleMonthPicker(!1, !1, C), (w = A.value) == null || w.toggleYearPicker(!1, !1, C);
    }, Me = (C, le = 0) => {
      var v, w, W;
      return C === "month" ? (v = A.value) == null ? void 0 : v.toggleMonthPicker(!1, !0, le) : C === "year" ? (w = A.value) == null ? void 0 : w.toggleYearPicker(!1, !0, le) : C === "time" ? (W = A.value) == null ? void 0 : W.toggleTimePicker(!0, !1) : Y(le);
    }, Le = (C, ...le) => {
      var v, w;
      (v = A.value) != null && v[C] && ((w = A.value) == null || w[C](...le));
    }, H = () => {
      Le("selectCurrentDate");
    }, we = (C, le) => {
      Le("presetDate", C, le);
    }, Pe = () => {
      Le("clearHoverDate");
    };
    return t({
      updateMonthYear: (C, le) => {
        Le("updateMonthYear", C, le);
      },
      switchView: Me
    }), (C, le) => {
      var v, w, W;
      return L(), z("div", {
        id: C.uid ? `dp-menu-${C.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: a,
        tabindex: "0",
        role: "dialog",
        "aria-label": (v = C.ariaLabels) == null ? void 0 : v.menu,
        class: Fe(ae.value),
        onMouseleave: Pe,
        onClick: m,
        onKeydown: [
          Ae(p, ["esc"]),
          le[18] || (le[18] = Ae(Ze((S) => P("left"), ["prevent"]), ["left"])),
          le[19] || (le[19] = Ae(Ze((S) => P("up"), ["prevent"]), ["up"])),
          le[20] || (le[20] = Ae(Ze((S) => P("down"), ["prevent"]), ["down"])),
          le[21] || (le[21] = Ae(Ze((S) => P("right"), ["prevent"]), ["right"])),
          K
        ]
      }, [
        (C.disabled || C.readonly) && D(f).enabled || C.loading ? (L(), z("div", {
          key: 0,
          class: Fe(me.value)
        }, [
          C.loading ? (L(), z("div", XO, ZO)) : J("", !0)
        ], 2)) : J("", !0),
        !D(f).enabled && !C.teleportCenter ? (L(), z("div", {
          key: 1,
          class: Fe(Q.value)
        }, null, 2)) : J("", !0),
        Ne("div", {
          ref_key: "innerMenuRef",
          ref: M,
          class: Fe({
            dp__menu_content_wrapper: ((w = C.presetDates) == null ? void 0 : w.length) || !!C.$slots["left-sidebar"] || !!C.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && ((W = C.presetDates) == null ? void 0 : W.length) || !!C.$slots["left-sidebar"] || !!C.$slots["right-sidebar"]
          }),
          style: Rt({ "--dp-menu-width": `${g.value}px` })
        }, [
          C.$slots["left-sidebar"] ? (L(), z("div", eN, [
            ge(C.$slots, "left-sidebar", wt(At(U.value)))
          ])) : J("", !0),
          C.presetDates.length ? (L(), z("div", {
            key: 1,
            class: Fe({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 })
          }, [
            (L(!0), z(Oe, null, Ke(C.presetDates, (S, X) => (L(), z(Oe, { key: X }, [
              S.slot ? ge(C.$slots, S.slot, {
                key: 0,
                presetDate: we,
                label: S.label,
                value: S.value
              }) : (L(), z("button", {
                key: 1,
                type: "button",
                style: Rt(S.style || {}),
                class: Fe(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                onClick: Ze((re) => we(S.value, S.noTz), ["prevent"]),
                onKeydown: [
                  Ae(Ze((re) => we(S.value, S.noTz), ["prevent"]), ["enter"]),
                  Ae(Ze((re) => we(S.value, S.noTz), ["prevent"]), ["space"])
                ]
              }, ze(S.label), 47, tN))
            ], 64))), 128))
          ], 2)) : J("", !0),
          Ne("div", {
            ref_key: "calendarWrapperRef",
            ref: h,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (L(), $e(bs(N.value), xt({
              ref_key: "dynCmpRef",
              ref: A
            }, s.value, {
              "flow-step": D(T),
              onMount: D(R),
              onUpdateFlowStep: D(I),
              onResetFlow: D(O),
              onFocusMenu: j,
              onSelectDate: le[0] || (le[0] = (S) => C.$emit("select-date")),
              onDateUpdate: le[1] || (le[1] = (S) => C.$emit("date-update", S)),
              onTooltipOpen: le[2] || (le[2] = (S) => C.$emit("tooltip-open", S)),
              onTooltipClose: le[3] || (le[3] = (S) => C.$emit("tooltip-close", S)),
              onAutoApply: le[4] || (le[4] = (S) => C.$emit("auto-apply", S)),
              onRangeStart: le[5] || (le[5] = (S) => C.$emit("range-start", S)),
              onRangeEnd: le[6] || (le[6] = (S) => C.$emit("range-end", S)),
              onInvalidFixedRange: le[7] || (le[7] = (S) => C.$emit("invalid-fixed-range", S)),
              onTimeUpdate: le[8] || (le[8] = (S) => C.$emit("time-update")),
              onAmPmChange: le[9] || (le[9] = (S) => C.$emit("am-pm-change", S)),
              onTimePickerOpen: le[10] || (le[10] = (S) => C.$emit("time-picker-open", S)),
              onTimePickerClose: pe,
              onRecalculatePosition: E,
              onUpdateMonthYear: le[11] || (le[11] = (S) => C.$emit("update-month-year", S)),
              onAutoApplyInvalid: le[12] || (le[12] = (S) => C.$emit("auto-apply-invalid", S)),
              onInvalidDate: le[13] || (le[13] = (S) => C.$emit("invalid-date", S)),
              "onUpdate:internalModelValue": le[14] || (le[14] = (S) => C.$emit("update:internal-model-value", S))
            }), It({ _: 2 }, [
              Ke(q.value, (S, X) => ({
                name: S,
                fn: Be((re) => [
                  ge(C.$slots, S, wt(At({ ...re })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          C.$slots["right-sidebar"] ? (L(), z("div", nN, [
            ge(C.$slots, "right-sidebar", wt(At(U.value)))
          ])) : J("", !0),
          C.$slots["action-extra"] ? (L(), z("div", rN, [
            C.$slots["action-extra"] ? ge(C.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: H
            }) : J("", !0)
          ])) : J("", !0)
        ], 6),
        !C.autoApply || D(y).keepActionRow ? (L(), $e(tO, xt({
          key: 2,
          "menu-mount": $.value
        }, s.value, {
          "calendar-width": g.value,
          onClosePicker: le[15] || (le[15] = (S) => C.$emit("close-picker")),
          onSelectDate: le[16] || (le[16] = (S) => C.$emit("select-date")),
          onInvalidSelect: le[17] || (le[17] = (S) => C.$emit("invalid-select")),
          onSelectNow: H
        }), It({ _: 2 }, [
          Ke(D(F), (S, X) => ({
            name: S,
            fn: Be((re) => [
              ge(C.$slots, S, wt(At({ ...re })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : J("", !0)
      ], 42, QO);
    };
  }
}), oN = typeof window < "u" ? window : void 0, yi = () => {
}, aN = (e) => al() ? (nd(e), !0) : !1, sN = (e, t, n, r) => {
  if (!e)
    return yi;
  let o = yi;
  const a = ft(
    () => D(e),
    (i) => {
      o(), i && (i.addEventListener(t, n, r), o = () => {
        i.removeEventListener(t, n, r), o = yi;
      });
    },
    { immediate: !0, flush: "post" }
  ), s = () => {
    a(), o();
  };
  return aN(s), s;
}, iN = (e, t, n, r = {}) => {
  const { window: o = oN, event: a = "pointerdown" } = r;
  return o ? sN(o, a, (s) => {
    const i = Et(e), l = Et(t);
    !i || !l || i === s.target || s.composedPath().includes(i) || s.composedPath().includes(l) || n(s);
  }, { passive: !0 }) : void 0;
}, lN = /* @__PURE__ */ Mt({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...Fs
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
    const r = n, o = e, a = Ur(), s = Z(!1), i = Pr(o, "modelValue"), l = Pr(o, "timezone"), c = Z(null), d = Z(null), u = Z(null), f = Z(!1), y = Z(null), h = Z(!1), g = Z(!1), M = Z(!1), { setMenuFocused: $, setShiftKey: A } = Gp(), { clearArrowNav: b } = dr(), { validateDate: x, isValidTime: V } = fr(o), { defaultedTransitions: k, defaultedTextInput: _, defaultedInline: T, defaultedConfig: I, defaultedRange: R } = ct(o), { menuTransition: O, showTransition: N } = ha(k);
    Tt(() => {
      P(o.modelValue), Kt().then(() => {
        if (!T.value.enabled) {
          const te = me(y.value);
          te == null || te.addEventListener("scroll", C), window == null || window.addEventListener("resize", le);
        }
      }), T.value.enabled && (s.value = !0), window == null || window.addEventListener("keyup", v), window == null || window.addEventListener("keydown", w);
    }), go(() => {
      if (!T.value.enabled) {
        const te = me(y.value);
        te == null || te.removeEventListener("scroll", C), window == null || window.removeEventListener("resize", le);
      }
      window == null || window.removeEventListener("keyup", v), window == null || window.removeEventListener("keydown", w);
    });
    const j = Yt(a, "all", o.presetDates), U = Yt(a, "input");
    ft(
      [i, l],
      () => {
        P(i.value);
      },
      { deep: !0 }
    );
    const { openOnTop: E, menuStyle: F, xCorrect: q, setMenuPosition: Q, getScrollableParent: me, shadowRender: ae } = UE({
      menuRef: c,
      menuRefInner: d,
      inputRef: u,
      pickerWrapperRef: y,
      inline: T,
      emit: r,
      props: o,
      slots: a
    }), {
      inputValue: m,
      internalModelValue: p,
      parseExternalModelValue: P,
      emitModelValue: K,
      formatInputValue: pe,
      checkBeforeEmit: Y
    } = HE(r, o, f), Me = oe(
      () => ({
        dp__main: !0,
        dp__theme_dark: o.dark,
        dp__theme_light: !o.dark,
        dp__flex_display: T.value.enabled,
        "dp--flex-display-collapsed": M.value,
        dp__flex_display_with_input: T.value.input
      })
    ), Le = oe(() => o.dark ? "dp__theme_dark" : "dp__theme_light"), H = oe(() => ({
      to: typeof o.teleport == "boolean" ? "body" : o.teleport,
      disabled: !o.teleport || T.value.enabled
    })), we = oe(() => ({ class: "dp__outer_menu_wrap" })), Pe = oe(() => T.value.enabled && (o.timePicker || o.monthPicker || o.yearPicker || o.quarterPicker)), C = () => {
      s.value && (I.value.closeOnScroll ? de() : Q());
    }, le = () => {
      var te;
      s.value && Q();
      const xe = (te = d.value) == null ? void 0 : te.$el.getBoundingClientRect().width;
      M.value = document.body.offsetWidth <= xe;
    }, v = (te) => {
      te.key === "Tab" && !T.value.enabled && !o.teleport && I.value.tabOutClosesMenu && (y.value.contains(document.activeElement) || de()), g.value = te.shiftKey;
    }, w = (te) => {
      g.value = te.shiftKey;
    }, W = () => {
      !o.disabled && !o.readonly && (ae(zc, o), Q(!1), s.value = !0, s.value && r("open"), s.value || ee(), P(o.modelValue));
    }, S = () => {
      var te;
      m.value = "", ee(), (te = u.value) == null || te.setParsedDate(null), r("update:model-value", null), r("update:model-timezone-value", null), r("cleared"), I.value.closeOnClearValue && de();
    }, X = () => {
      const te = p.value;
      return !te || !Array.isArray(te) && x(te) ? !0 : Array.isArray(te) ? o.multiDates || te.length === 2 && x(te[0]) && x(te[1]) ? !0 : R.value.partialRange && !o.timePicker ? x(te[0]) : !1 : !1;
    }, re = () => {
      Y() && X() ? (K(), de()) : r("invalid-select", p.value);
    }, fe = (te) => {
      ie(), K(), I.value.closeOnAutoApply && !te && de();
    }, ie = () => {
      u.value && _.value.enabled && u.value.setParsedDate(p.value);
    }, ce = (te = !1) => {
      o.autoApply && V(p.value) && X() && (R.value.enabled && Array.isArray(p.value) ? (R.value.partialRange || p.value.length === 2) && fe(te) : fe(te));
    }, ee = () => {
      _.value.enabled || (p.value = null);
    }, de = () => {
      T.value.enabled || (s.value && (s.value = !1, q.value = !1, $(!1), A(!1), b(), r("closed"), m.value && P(i.value)), ee(), r("blur"));
    }, Ee = (te, xe, ve = !1) => {
      if (!te) {
        p.value = null;
        return;
      }
      const gt = Array.isArray(te) ? !te.some((pr) => !x(pr)) : x(te), jt = V(te);
      gt && jt && (p.value = te, xe && (h.value = ve, re(), r("text-submit")));
    }, be = () => {
      o.autoApply && V(p.value) && K(), ie();
    }, Te = () => s.value ? de() : W(), Re = (te) => {
      p.value = te;
    }, Ue = () => {
      _.value.enabled && (f.value = !0, pe()), r("focus");
    }, Je = () => {
      if (_.value.enabled && (f.value = !1, P(o.modelValue), h.value)) {
        const te = vE(y.value, g.value);
        te == null || te.focus();
      }
      r("blur");
    }, B = (te) => {
      d.value && d.value.updateMonthYear(0, {
        month: jc(te.month),
        year: jc(te.year)
      });
    }, se = (te) => {
      P(te ?? o.modelValue);
    }, _e = (te, xe) => {
      var ve;
      (ve = d.value) == null || ve.switchView(te, xe);
    }, Ce = (te) => I.value.onClickOutside ? I.value.onClickOutside(te) : de();
    return iN(c, u, () => Ce(X)), t({
      closeMenu: de,
      selectDate: re,
      clearValue: S,
      openMenu: W,
      onScroll: C,
      formatInputValue: pe,
      // exposed for testing purposes
      updateInternalModelValue: Re,
      // modify internal modelValue
      setMonthYear: B,
      parseModel: se,
      switchView: _e,
      toggleMenu: Te
    }), (te, xe) => (L(), z("div", {
      ref_key: "pickerWrapperRef",
      ref: y,
      class: Fe(Me.value),
      "data-datepicker-instance": ""
    }, [
      et(JE, xt({
        ref_key: "inputRef",
        ref: u,
        "input-value": D(m),
        "onUpdate:inputValue": xe[0] || (xe[0] = (ve) => ot(m) ? m.value = ve : null),
        "is-menu-open": s.value
      }, te.$props, {
        onClear: S,
        onOpen: W,
        onSetInputDate: Ee,
        onSetEmptyDate: D(K),
        onSelectDate: re,
        onToggle: Te,
        onClose: de,
        onFocus: Ue,
        onBlur: Je,
        onRealBlur: xe[1] || (xe[1] = (ve) => f.value = !1)
      }), It({ _: 2 }, [
        Ke(D(U), (ve, gt) => ({
          name: ve,
          fn: Be((jt) => [
            ge(te.$slots, ve, wt(At(jt)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (L(), $e(bs(te.teleport ? Sv : "div"), wt(At(H.value)), {
        default: Be(() => [
          et(cr, {
            name: D(O)(D(E)),
            css: D(N) && !D(T).enabled
          }, {
            default: Be(() => [
              s.value ? (L(), z("div", xt({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: c
              }, we.value, {
                class: { "dp--menu-wrapper": !D(T).enabled },
                style: D(T).enabled ? void 0 : D(F)
              }), [
                et(zc, xt({
                  ref_key: "dpMenuRef",
                  ref: d
                }, te.$props, {
                  "internal-model-value": D(p),
                  "onUpdate:internalModelValue": xe[2] || (xe[2] = (ve) => ot(p) ? p.value = ve : null),
                  class: { [Le.value]: !0, "dp--menu-wrapper": te.teleport },
                  "open-on-top": D(E),
                  "no-overlay-focus": Pe.value,
                  collapse: M.value,
                  onClosePicker: de,
                  onSelectDate: re,
                  onAutoApply: ce,
                  onTimeUpdate: be,
                  onFlowStep: xe[3] || (xe[3] = (ve) => te.$emit("flow-step", ve)),
                  onUpdateMonthYear: xe[4] || (xe[4] = (ve) => te.$emit("update-month-year", ve)),
                  onInvalidSelect: xe[5] || (xe[5] = (ve) => te.$emit("invalid-select", D(p))),
                  onAutoApplyInvalid: xe[6] || (xe[6] = (ve) => te.$emit("invalid-select", ve)),
                  onInvalidFixedRange: xe[7] || (xe[7] = (ve) => te.$emit("invalid-fixed-range", ve)),
                  onRecalculatePosition: D(Q),
                  onTooltipOpen: xe[8] || (xe[8] = (ve) => te.$emit("tooltip-open", ve)),
                  onTooltipClose: xe[9] || (xe[9] = (ve) => te.$emit("tooltip-close", ve)),
                  onTimePickerOpen: xe[10] || (xe[10] = (ve) => te.$emit("time-picker-open", ve)),
                  onTimePickerClose: xe[11] || (xe[11] = (ve) => te.$emit("time-picker-close", ve)),
                  onAmPmChange: xe[12] || (xe[12] = (ve) => te.$emit("am-pm-change", ve)),
                  onRangeStart: xe[13] || (xe[13] = (ve) => te.$emit("range-start", ve)),
                  onRangeEnd: xe[14] || (xe[14] = (ve) => te.$emit("range-end", ve)),
                  onDateUpdate: xe[15] || (xe[15] = (ve) => te.$emit("date-update", ve)),
                  onInvalidDate: xe[16] || (xe[16] = (ve) => te.$emit("invalid-date", ve))
                }), It({ _: 2 }, [
                  Ke(D(j), (ve, gt) => ({
                    name: ve,
                    fn: Be((jt) => [
                      ge(te.$slots, ve, wt(At({ ...jt })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "onRecalculatePosition"])
              ], 16)) : J("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 2));
  }
}), ru = /* @__PURE__ */ (() => {
  const e = lN;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), uN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ru
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(uN).forEach(([e, t]) => {
  e !== "default" && (ru[e] = t);
});
const ou = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, cN = { class: "input" }, dN = ["value"], fN = ["min", "max"], pN = ["accept"], mN = { key: 5 }, hN = { key: 6 }, vN = {
  __name: "ValueSelector",
  props: /* @__PURE__ */ Yd({
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
    const t = e, n = Ri(e, "selectedValue"), r = Ri(e, "dataValue"), o = Z(null);
    function a($, A = u.value) {
      if ($ == null || $ === "") return !1;
      const b = Number($);
      return Number.isFinite(b) && b >= A.rangemin && b <= A.rangemax;
    }
    function s() {
      o.value = r.value;
    }
    function i($) {
      if ($.key !== "ArrowUp" && $.key !== "ArrowDown") return;
      const A = Number(r.value);
      if (!Number.isFinite(A)) return;
      const b = u.value, x = Number($.currentTarget.step) || 1, V = A + ($.key === "ArrowUp" ? x : -x);
      a(V, b) || $.preventDefault();
    }
    function l($) {
      var k, _;
      const A = u.value;
      if (a(r.value, A)) return;
      const b = o.value, x = a(b, A) ? b : Number(A.defaultFloat), V = (_ = (k = $.relatedTarget) == null ? void 0 : k.closest) == null ? void 0 : _.call(k, "[data-poris-command]");
      V ? window.confirm(
        "This value is outside the active range. Restore the previous value and continue with the command? Choose Cancel to cancel the command."
      ) || (V.dataset.porisCommandCancelled = "true") : window.alert("This value is outside the active range. The previous value will be restored."), r.value = x;
    }
    const c = Z(t.mode), d = oe(() => c.value.hasValues ? c.value.valuesNodes : []), u = oe(() => n.value || c.value.defaultValue || d.value[0]), f = () => {
      var $;
      return (($ = u.value) == null ? void 0 : $.type) === uo;
    }, y = () => {
      var $;
      return (($ = u.value) == null ? void 0 : $.type) === Vr;
    }, h = () => {
      var $;
      return (($ = u.value) == null ? void 0 : $.type) === fo;
    }, g = () => {
      var $;
      return (($ = u.value) == null ? void 0 : $.type) === co;
    }, M = () => {
      var $;
      return (($ = u.value) == null ? void 0 : $.type) === os;
    };
    return ft(
      () => t.mode,
      ($) => {
        console.log("watch.mode", $), c.value = $;
      }
    ), ft(d, ($, A) => {
      console.log(`values mode: ${c.value.id}, changed/oldVal:`, $, A);
    }), ($, A) => (L(), z("div", cN, [
      d.value.length > 1 ? tr((L(), z("select", {
        key: 0,
        "onUpdate:modelValue": A[0] || (A[0] = (b) => n.value = b),
        class: "active-value-selector"
      }, [
        (L(!0), z(Oe, null, Ke(d.value, (b) => (L(), z("option", {
          key: b.id,
          value: b
        }, ze(b.name), 9, dN))), 128))
      ], 512)), [
        [ff, n.value]
      ]) : J("", !0),
      f() ? tr((L(), z("input", {
        key: 1,
        "onUpdate:modelValue": A[1] || (A[1] = (b) => r.value = b),
        type: "text"
      }, null, 512)), [
        [Qu, r.value]
      ]) : y() ? tr((L(), z("input", {
        key: 2,
        class: "numberPicker",
        "onUpdate:modelValue": A[2] || (A[2] = (b) => r.value = b),
        type: "number",
        step: ".01",
        min: u.value.rangemin,
        max: u.value.rangemax,
        onFocus: s,
        onKeydown: i,
        onBlur: l
      }, null, 40, fN)), [
        [
          Qu,
          r.value,
          void 0,
          { number: !0 }
        ]
      ]) : g() ? (L(), $e(D(ru), {
        key: 3,
        modelValue: r.value,
        "onUpdate:modelValue": A[3] || (A[3] = (b) => r.value = b),
        min: u.value.datemin,
        max: u.value.datemax,
        "enable-seconds": "",
        "is-24": ""
      }, null, 8, ["modelValue", "min", "max"])) : h() ? (L(), z("input", {
        key: 4,
        type: "file",
        accept: u.value.fileExtension
      }, null, 8, pN)) : M() && d.value.length === 1 ? (L(), z("span", mN, ze(u.value.name), 1)) : u.value ? J("", !0) : (L(), z("span", hN, "No values!")),
      sn(" " + ze(" "))
    ]));
  }
}, yN = /* @__PURE__ */ ou(vN, [["__scopeId", "data-v-f7e30fcc"]]), gN = { class: "input-mode-panel" }, bN = { class: "title" }, _N = {
  key: 0,
  class: "command-buttons"
}, wN = ["onClick"], EN = { class: "value-selector" }, ON = {
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
    function n(h) {
      return !h.hasSubsystems && !h.hasRealValues && h.hasValues && h.currentMode.hasValues;
    }
    function r(h) {
      return !h.hasRealValues && !h.currentMode.hasValues && !h.currentMode.hasModes;
    }
    function o(h) {
      return !n(h) && !r(h);
    }
    function a(h, g) {
      return g.length > 1 || n(h) || r(h);
    }
    const s = Il(), i = e, l = t;
    function c(h, g) {
      if (g.currentTarget.dataset.porisCommandCancelled === "true") {
        delete g.currentTarget.dataset.porisCommandCancelled;
        return;
      }
      l("command-launched", { systemName: i.subsystem.name, commandName: h.name });
    }
    const d = Z(i.mode), u = Z(null), f = Z(null);
    function y(h = null) {
      const g = s.getSystemValue(i.subsystem, d.value, h);
      u.value = g.value, f.value = g.data;
    }
    return y(), ft(u, (h) => {
      if (h) {
        const g = s.getSystemValue(i.subsystem, d.value, h);
        f.value !== g.data && (f.value = g.data);
      }
    }, { flush: "sync" }), ft(f, (h) => {
      u.value && s.setSystemValue(i.subsystem, u.value, h);
    }, { flush: "sync" }), ft(
      () => s.systemValues[`${i.subsystem.id}`],
      (h) => {
        var g, M;
        h && (((g = u.value) == null ? void 0 : g.id) !== ((M = h.value) == null ? void 0 : M.id) && (u.value = h.value), f.value !== h.data && (f.value = h.data));
      },
      { flush: "sync" }
    ), ft(d, (h) => {
      console.log("watch_input: currentMode.set() mode:", h), y();
    }), ft(
      () => i.mode,
      (h) => {
        console.log("new props.mode:", h), d.value = h;
      }
    ), (h, g) => {
      var M, $;
      return L(), z("div", {
        class: Fe(["inputsystem-panel", { "has-commands": (M = e.subsystem.commandsNodes) == null ? void 0 : M.length }])
      }, [
        Ne("div", gN, [
          Ne("span", bN, ze(e.subsystem.label || e.subsystem.name), 1),
          ($ = e.subsystem.commandsNodes) != null && $.length ? (L(), z("span", _N, [
            (L(!0), z(Oe, null, Ke(e.subsystem.commandsNodes, (A) => (L(), z("button", {
              key: A.id,
              type: "button",
              "data-poris-command": "",
              onClick: (b) => c(A, b)
            }, ze(A.label || A.name), 9, wN))), 128))
          ])) : J("", !0),
          Ne("span", EN, [
            a(e.subsystem, e.modes) ? (L(), $e(vp, {
              key: 0,
              class: "mode-selector",
              modelValue: d.value,
              "onUpdate:modelValue": g[0] || (g[0] = (A) => d.value = A),
              modes: e.modes
            }, null, 8, ["modelValue", "modes"])) : J("", !0),
            o(e.subsystem) ? (L(), $e(yN, {
              key: 1,
              mode: d.value,
              "selected-value": u.value,
              "onUpdate:selectedValue": g[1] || (g[1] = (A) => u.value = A),
              "data-value": f.value,
              "onUpdate:dataValue": g[2] || (g[2] = (A) => f.value = A)
            }, null, 8, ["mode", "selected-value", "data-value"])) : J("", !0)
          ])
        ])
      ], 2);
    };
  }
}, Kc = /* @__PURE__ */ ou(ON, [["__scopeId", "data-v-94f24dc3"]]), NN = {
  key: 0,
  class: "subsystem-panel"
}, xN = { class: "subsystem-heading" }, DN = {
  key: 0,
  class: "title"
}, TN = {
  key: 1,
  class: "command-buttons"
}, kN = ["onClick"], SN = {
  key: 0,
  class: "mode-selector"
}, MN = {
  __name: "SubSystemPanel",
  props: {
    system: {
      type: Object,
      required: !1
    }
  },
  emits: ["command-launched"],
  setup(e, { emit: t }) {
    function n(h) {
      return !h.hasRealValues && h.hasValues && h.currentMode.hasValues;
    }
    function r(h) {
      return !h.hasRealValues && !h.currentMode.hasValues && !h.currentMode.hasModes && !h.hasSubsystems;
    }
    function o(h) {
      return !a(h);
      //!s0.hasRealValues && !(s1.hasRealValues || fakeParam(s1)) && !fakeParamWithNoValue(s0)
    }
    function a(h) {
      return h.hasRealValues || n(h) || r(h);
    }
    function s(h) {
      return !h.currentMode.hasValues && !h.currentMode.hasModes || h.getValidModes().length > 1;
    }
    function i(h) {
      return h.getValidModes().length > 0 && !h.hasRealValues;
    }
    const l = Il(), c = e, d = t, f = Z(c.system).value;
    f.candidateMode = f.currentMode;
    function y(h, g) {
      if (g.currentTarget.dataset.porisCommandCancelled === "true") {
        delete g.currentTarget.dataset.porisCommandCancelled;
        return;
      }
      d("command-launched", { systemName: f.name, commandName: h.name });
    }
    return ft(f.candidateMode, () => {
      var h, g;
      Qn(
        `watch.mode. mode ${(h = f.currentMode) == null ? void 0 : h.name}, newMode :${(g = f.candidateMode) == null ? void 0 : g.name}`
      ), f.candidateMode != null && f.candidateMode != f.currentMode && (l.setValidMode(f, f.candidateMode), Qn(`watch result >> ${f.currentMode.name}`));
    }), (h, g) => {
      var $;
      const M = Ph("SubSystemPanel", !0);
      return L(), z(Oe, null, [
        i(D(f)) ? (L(), z("div", NN, [
          Ne("div", xN, [
            D(f).label != "-" ? (L(), z("h3", DN, ze(D(f).label || D(f).name), 1)) : J("", !0),
            ($ = D(f).commandsNodes) != null && $.length ? (L(), z("div", TN, [
              (L(!0), z(Oe, null, Ke(D(f).commandsNodes, (A) => (L(), z("button", {
                key: A.id,
                type: "button",
                "data-poris-command": "",
                onClick: (b) => y(A, b)
              }, ze(A.label || A.name), 9, kN))), 128))
            ])) : J("", !0)
          ]),
          s(D(f)) ? (L(), z("div", SN, [
            et(vp, {
              modelValue: D(f).candidateMode,
              "onUpdate:modelValue": g[0] || (g[0] = (A) => D(f).candidateMode = A),
              modes: D(f).getValidModes()
            }, null, 8, ["modelValue", "modes"])
          ])) : J("", !0),
          (L(!0), z(Oe, null, Ke(D(f).getActiveSubnodes(), (A) => (L(), z(Oe, {
            key: A.id
          }, [
            o(A) ? (L(), $e(M, {
              key: 0,
              system: A,
              onCommandLaunched: g[1] || (g[1] = (b) => d("command-launched", b))
            }, null, 8, ["system"])) : J("", !0),
            a(A) ? (L(), $e(Kc, {
              key: 1,
              subsystem: A,
              modes: A.getValidModes(),
              mode: A.currentMode,
              onCommandLaunched: g[2] || (g[2] = (b) => d("command-launched", b))
            }, null, 8, ["subsystem", "modes", "mode"])) : J("", !0)
          ], 64))), 128))
        ])) : J("", !0),
        a(D(f)) ? (L(), $e(Kc, {
          key: 1,
          subsystem: D(f),
          modes: D(f).getValidModes(),
          mode: D(f).currentMode,
          onCommandLaunched: g[3] || (g[3] = (A) => d("command-launched", A))
        }, null, 8, ["subsystem", "modes", "mode"])) : J("", !0)
      ], 64);
    };
  }
}, js = "";
function PN() {
  return !!js;
}
function CN(e) {
  return ut.post(`${js}/api/poris/commit`, e).then((t) => t.data);
}
function AN(e) {
  return ut.post(`${js}/api/poris/command/${e}`, {}).then((t) => t.data);
}
function VN() {
  return ut.get(`${js}/api/poris/state`).then((e) => e.data);
}
const $N = (e) => (xh("data-v-cacd4121"), e = e(), Dh(), e), RN = {
  key: 0,
  class: "loading"
}, IN = /* @__PURE__ */ $N(() => /* @__PURE__ */ Ne("span", { class: "spinner" }, null, -1)), FN = [
  IN
], LN = {
  key: 1,
  class: "panel"
}, BN = { class: "title" }, jN = {
  key: 0,
  class: "monitor-capsules"
}, HN = { class: "monitor-name" }, YN = { class: "monitor-value" }, UN = {
  key: 1,
  class: "actions"
}, WN = ["disabled"], qN = ["disabled"], GN = ["disabled"], zN = {
  key: 2,
  class: "status command-message"
}, KN = {
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
    const t = Il(), n = oe(() => t.isLoading), r = oe(() => t.rootSubsystem), o = Z(!1), a = Z(""), s = Z(""), i = Z(!1), l = PN(), c = "", d = Z([]), u = oe(() => d.value.filter((T) => T.visible));
    let f = null;
    const y = e;
    function h(T) {
      var O, N, j;
      const I = t.systemValues[`${T.id}`], R = (I == null ? void 0 : I.value) || ((O = T.currentMode) == null ? void 0 : O.defaultValue) || ((j = (N = T.currentMode) == null ? void 0 : N.valuesNodes) == null ? void 0 : j[0]);
      return R ? typeof (I == null ? void 0 : I.data) == "number" ? {
        number: I.data,
        name: R.name,
        id: R.id,
        type: R.type
      } : R.type === "ValueString" || R.type === "ValueFilePath" ? { data: (I == null ? void 0 : I.data) ?? "", name: R.name, id: R.id, type: R.type } : { name: R.name, id: R.id, type: R.type } : null;
    }
    function g(T) {
      return {
        id: T.id,
        name: T.name,
        mode: T.currentMode ? { id: T.currentMode.id, name: T.currentMode.name } : null,
        value: h(T),
        subsystems: (T.subsystemsNodes || []).map(g)
      };
    }
    function M() {
      return {
        root: g(r.value)
      };
    }
    async function $() {
      if (l)
        try {
          const T = await VN();
          d.value = (T == null ? void 0 : T.monitors) || [];
        } catch {
          d.value = [];
        }
    }
    async function A(T, I) {
      var R, O;
      o.value = !0, i.value = !1, a.value = "";
      try {
        await T(), a.value = I;
      } catch (N) {
        i.value = !0, a.value = ((O = (R = N == null ? void 0 : N.response) == null ? void 0 : R.data) == null ? void 0 : O.error) || N.message || String(N);
      } finally {
        o.value = !1;
      }
    }
    function b() {
      A(() => CN(M()), "Changes committed");
    }
    function x(T) {
      A(() => AN(T), `${T} executed`);
    }
    function V({ systemName: T, commandName: I }) {
      i.value = !1, s.value = `We launched ${T}.${I}`;
    }
    function k() {
      s.value = "";
    }
    function _() {
      a.value = "", i.value = !1, y.modelPath && t.loadModelURL(y.modelPath);
    }
    return y.modelPath && t.loadModelURL(y.modelPath), Tt(() => {
      $(), l && (f = window.setInterval($, 1e3));
    }), _l(() => {
      f && window.clearInterval(f);
    }), (T, I) => (L(), z("div", {
      class: Fe(["poris-main", { compact: y.compact }]),
      onClickCapture: k,
      onKeydownCapture: k
    }, [
      n.value ? (L(), z("div", RN, FN)) : r.value ? (L(), z("div", LN, [
        Ne("h2", BN, ze(r.value.name) + " Panel", 1),
        u.value.length ? (L(), z("div", jN, [
          (L(!0), z(Oe, null, Ke(u.value, (R) => (L(), z("div", {
            key: R.id,
            class: "monitor-capsule"
          }, [
            Ne("span", HN, ze(R.label), 1),
            Ne("span", YN, ze(R.value), 1)
          ]))), 128))
        ])) : J("", !0),
        et(MN, {
          system: r.value,
          onCommandLaunched: V
        }, null, 8, ["system"]),
        D(l) ? (L(), z("div", UN, [
          Ne("button", {
            type: "button",
            disabled: o.value,
            onClick: b
          }, "Commit changes", 8, WN),
          Ne("button", {
            type: "button",
            disabled: o.value,
            onClick: _
          }, "Cancel", 8, qN),
          D(c) ? (L(), z("button", {
            key: 0,
            type: "button",
            disabled: o.value,
            onClick: I[0] || (I[0] = (R) => x(D(c)))
          }, ze(D(c)), 9, GN)) : J("", !0)
        ])) : J("", !0),
        s.value ? (L(), z("div", zN, ze(s.value), 1)) : J("", !0),
        a.value ? (L(), z("div", {
          key: 3,
          class: Fe(["status", { error: i.value }])
        }, ze(a.value), 3)) : J("", !0)
      ])) : J("", !0)
    ], 34));
  }
}, QN = /* @__PURE__ */ ou(KN, [["__scopeId", "data-v-cacd4121"]]);
function JN(e, t, n = {}) {
  const { debug: r = !1, compact: o = !1 } = n;
  sw(r);
  const s = by(QN, { modelPath: e, compact: o });
  return s.use(Ky()), s.mount(t), s;
}
export {
  JN as createPorisViewerPanel
};
