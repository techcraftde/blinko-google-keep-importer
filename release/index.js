(function() {
  var Tt, rt, pe, xt, _e, me, ge, ve, Kt, Vt, Xt, Ct = {}, be = [], yr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Et = Array.isArray;
  function bt(t, r) {
    for (var e in r)
      t[e] = r[e];
    return t;
  }
  function Yt(t) {
    t && t.parentNode && t.parentNode.removeChild(t);
  }
  function qt(t, r, e) {
    var o, l, i, s = {};
    for (i in r)
      i == "key" ? o = r[i] : i == "ref" ? l = r[i] : s[i] = r[i];
    if (arguments.length > 2 && (s.children = arguments.length > 3 ? Tt.call(arguments, 2) : e), typeof t == "function" && t.defaultProps != null)
      for (i in t.defaultProps)
        s[i] === void 0 && (s[i] = t.defaultProps[i]);
    return Bt(t, s, o, l, null);
  }
  function Bt(t, r, e, o, l) {
    var i = { type: t, props: r, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: l ?? ++pe, __i: -1, __u: 0 };
    return l == null && rt.vnode != null && rt.vnode(i), i;
  }
  function St(t) {
    return t.children;
  }
  function yt(t, r) {
    this.props = t, this.context = r;
  }
  function At(t, r) {
    if (r == null)
      return t.__ ? At(t.__, t.__i + 1) : null;
    for (var e; r < t.__k.length; r++)
      if ((e = t.__k[r]) != null && e.__e != null)
        return e.__e;
    return typeof t.type == "function" ? At(t) : null;
  }
  function ye(t) {
    var r, e;
    if ((t = t.__) != null && t.__c != null) {
      for (t.__e = t.__c.base = null, r = 0; r < t.__k.length; r++)
        if ((e = t.__k[r]) != null && e.__e != null) {
          t.__e = t.__c.base = e.__e;
          break;
        }
      return ye(t);
    }
  }
  function we(t) {
    (!t.__d && (t.__d = !0) && xt.push(t) && !Ot.__r++ || _e != rt.debounceRendering) && ((_e = rt.debounceRendering) || me)(Ot);
  }
  function Ot() {
    for (var t, r, e, o, l, i, s, a = 1; xt.length; )
      xt.length > a && xt.sort(ge), t = xt.shift(), a = xt.length, t.__d && (e = void 0, o = void 0, l = (o = (r = t).__v).__e, i = [], s = [], r.__P && ((e = bt({}, o)).__v = o.__v + 1, rt.vnode && rt.vnode(e), Jt(r.__P, e, o, r.__n, r.__P.namespaceURI, 32 & o.__u ? [l] : null, i, l ?? At(o), !!(32 & o.__u), s), e.__v = o.__v, e.__.__k[e.__i] = e, Ce(i, e, s), o.__e = o.__ = null, e.__e != l && ye(e)));
    Ot.__r = 0;
  }
  function ke(t, r, e, o, l, i, s, a, c, p, b) {
    var f, k, h, y, d, m, _, v = o && o.__k || be, A = r.length;
    for (c = wr(e, r, v, c, A), f = 0; f < A; f++)
      (h = e.__k[f]) != null && (k = h.__i == -1 ? Ct : v[h.__i] || Ct, h.__i = f, m = Jt(t, h, k, l, i, s, a, c, p, b), y = h.__e, h.ref && k.ref != h.ref && (k.ref && te(k.ref, null, h), b.push(h.ref, h.__c || y, h)), d == null && y != null && (d = y), (_ = !!(4 & h.__u)) || k.__k === h.__k ? c = xe(h, c, t, _) : typeof h.type == "function" && m !== void 0 ? c = m : y && (c = y.nextSibling), h.__u &= -7);
    return e.__e = d, c;
  }
  function wr(t, r, e, o, l) {
    var i, s, a, c, p, b = e.length, f = b, k = 0;
    for (t.__k = new Array(l), i = 0; i < l; i++)
      (s = r[i]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = t.__k[i] = Bt(null, s, null, null, null) : Et(s) ? s = t.__k[i] = Bt(St, { children: s }, null, null, null) : s.constructor == null && s.__b > 0 ? s = t.__k[i] = Bt(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : t.__k[i] = s, c = i + k, s.__ = t, s.__b = t.__b + 1, a = null, (p = s.__i = kr(s, e, c, f)) != -1 && (f--, (a = e[p]) && (a.__u |= 2)), a == null || a.__v == null ? (p == -1 && (l > b ? k-- : l < b && k++), typeof s.type != "function" && (s.__u |= 4)) : p != c && (p == c - 1 ? k-- : p == c + 1 ? k++ : (p > c ? k-- : k++, s.__u |= 4))) : t.__k[i] = null;
    if (f)
      for (i = 0; i < b; i++)
        (a = e[i]) != null && !(2 & a.__u) && (a.__e == o && (o = At(a)), ze(a, a));
    return o;
  }
  function xe(t, r, e, o) {
    var l, i;
    if (typeof t.type == "function") {
      for (l = t.__k, i = 0; l && i < l.length; i++)
        l[i] && (l[i].__ = t, r = xe(l[i], r, e, o));
      return r;
    }
    t.__e != r && (o && (r && t.type && !r.parentNode && (r = At(t)), e.insertBefore(t.__e, r || null)), r = t.__e);
    do
      r = r && r.nextSibling;
    while (r != null && r.nodeType == 8);
    return r;
  }
  function Dt(t, r) {
    return r = r || [], t == null || typeof t == "boolean" || (Et(t) ? t.some(function(e) {
      Dt(e, r);
    }) : r.push(t)), r;
  }
  function kr(t, r, e, o) {
    var l, i, s, a = t.key, c = t.type, p = r[e], b = p != null && (2 & p.__u) == 0;
    if (p === null && a == null || b && a == p.key && c == p.type)
      return e;
    if (o > (b ? 1 : 0)) {
      for (l = e - 1, i = e + 1; l >= 0 || i < r.length; )
        if ((p = r[s = l >= 0 ? l-- : i++]) != null && !(2 & p.__u) && a == p.key && c == p.type)
          return s;
    }
    return -1;
  }
  function Se(t, r, e) {
    r[0] == "-" ? t.setProperty(r, e ?? "") : t[r] = e == null ? "" : typeof e != "number" || yr.test(r) ? e : e + "px";
  }
  function Rt(t, r, e, o, l) {
    var i, s;
    t:
      if (r == "style")
        if (typeof e == "string")
          t.style.cssText = e;
        else {
          if (typeof o == "string" && (t.style.cssText = o = ""), o)
            for (r in o)
              e && r in e || Se(t.style, r, "");
          if (e)
            for (r in e)
              o && e[r] == o[r] || Se(t.style, r, e[r]);
        }
      else if (r[0] == "o" && r[1] == "n")
        i = r != (r = r.replace(ve, "$1")), s = r.toLowerCase(), r = s in t || r == "onFocusOut" || r == "onFocusIn" ? s.slice(2) : r.slice(2), t.l || (t.l = {}), t.l[r + i] = e, e ? o ? e.u = o.u : (e.u = Kt, t.addEventListener(r, i ? Xt : Vt, i)) : t.removeEventListener(r, i ? Xt : Vt, i);
      else {
        if (l == "http://www.w3.org/2000/svg")
          r = r.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (r != "width" && r != "height" && r != "href" && r != "list" && r != "form" && r != "tabIndex" && r != "download" && r != "rowSpan" && r != "colSpan" && r != "role" && r != "popover" && r in t)
          try {
            t[r] = e ?? "";
            break t;
          } catch {
          }
        typeof e == "function" || (e == null || e === !1 && r[4] != "-" ? t.removeAttribute(r) : t.setAttribute(r, r == "popover" && e == 1 ? "" : e));
      }
  }
  function Ae(t) {
    return function(r) {
      if (this.l) {
        var e = this.l[r.type + t];
        if (r.t == null)
          r.t = Kt++;
        else if (r.t < e.u)
          return;
        return e(rt.event ? rt.event(r) : r);
      }
    };
  }
  function Jt(t, r, e, o, l, i, s, a, c, p) {
    var b, f, k, h, y, d, m, _, v, A, S, E, P, D, Z, B, W, Y = r.type;
    if (r.constructor != null)
      return null;
    128 & e.__u && (c = !!(32 & e.__u), i = [a = r.__e = e.__e]), (b = rt.__b) && b(r);
    t:
      if (typeof Y == "function")
        try {
          if (_ = r.props, v = "prototype" in Y && Y.prototype.render, A = (b = Y.contextType) && o[b.__c], S = b ? A ? A.props.value : b.__ : o, e.__c ? m = (f = r.__c = e.__c).__ = f.__E : (v ? r.__c = f = new Y(_, S) : (r.__c = f = new yt(_, S), f.constructor = Y, f.render = Sr), A && A.sub(f), f.state || (f.state = {}), f.__n = o, k = f.__d = !0, f.__h = [], f._sb = []), v && f.__s == null && (f.__s = f.state), v && Y.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = bt({}, f.__s)), bt(f.__s, Y.getDerivedStateFromProps(_, f.__s))), h = f.props, y = f.state, f.__v = r, k)
            v && Y.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(), v && f.componentDidMount != null && f.__h.push(f.componentDidMount);
          else {
            if (v && Y.getDerivedStateFromProps == null && _ !== h && f.componentWillReceiveProps != null && f.componentWillReceiveProps(_, S), r.__v == e.__v || !f.__e && f.shouldComponentUpdate != null && f.shouldComponentUpdate(_, f.__s, S) === !1) {
              for (r.__v != e.__v && (f.props = _, f.state = f.__s, f.__d = !1), r.__e = e.__e, r.__k = e.__k, r.__k.some(function(x) {
                x && (x.__ = r);
              }), E = 0; E < f._sb.length; E++)
                f.__h.push(f._sb[E]);
              f._sb = [], f.__h.length && s.push(f);
              break t;
            }
            f.componentWillUpdate != null && f.componentWillUpdate(_, f.__s, S), v && f.componentDidUpdate != null && f.__h.push(function() {
              f.componentDidUpdate(h, y, d);
            });
          }
          if (f.context = S, f.props = _, f.__P = t, f.__e = !1, P = rt.__r, D = 0, v) {
            for (f.state = f.__s, f.__d = !1, P && P(r), b = f.render(f.props, f.state, f.context), Z = 0; Z < f._sb.length; Z++)
              f.__h.push(f._sb[Z]);
            f._sb = [];
          } else
            do
              f.__d = !1, P && P(r), b = f.render(f.props, f.state, f.context), f.state = f.__s;
            while (f.__d && ++D < 25);
          f.state = f.__s, f.getChildContext != null && (o = bt(bt({}, o), f.getChildContext())), v && !k && f.getSnapshotBeforeUpdate != null && (d = f.getSnapshotBeforeUpdate(h, y)), B = b, b != null && b.type === St && b.key == null && (B = Ee(b.props.children)), a = ke(t, Et(B) ? B : [B], r, e, o, l, i, s, a, c, p), f.base = r.__e, r.__u &= -161, f.__h.length && s.push(f), m && (f.__E = f.__ = null);
        } catch (x) {
          if (r.__v = null, c || i != null)
            if (x.then) {
              for (r.__u |= c ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; )
                a = a.nextSibling;
              i[i.indexOf(a)] = null, r.__e = a;
            } else {
              for (W = i.length; W--; )
                Yt(i[W]);
              Qt(r);
            }
          else
            r.__e = e.__e, r.__k = e.__k, x.then || Qt(r);
          rt.__e(x, r, e);
        }
      else
        i == null && r.__v == e.__v ? (r.__k = e.__k, r.__e = e.__e) : a = r.__e = xr(e.__e, r, e, o, l, i, s, c, p);
    return (b = rt.diffed) && b(r), 128 & r.__u ? void 0 : a;
  }
  function Qt(t) {
    t && t.__c && (t.__c.__e = !0), t && t.__k && t.__k.forEach(Qt);
  }
  function Ce(t, r, e) {
    for (var o = 0; o < e.length; o++)
      te(e[o], e[++o], e[++o]);
    rt.__c && rt.__c(r, t), t.some(function(l) {
      try {
        t = l.__h, l.__h = [], t.some(function(i) {
          i.call(l);
        });
      } catch (i) {
        rt.__e(i, l.__v);
      }
    });
  }
  function Ee(t) {
    return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : Et(t) ? t.map(Ee) : bt({}, t);
  }
  function xr(t, r, e, o, l, i, s, a, c) {
    var p, b, f, k, h, y, d, m = e.props || Ct, _ = r.props, v = r.type;
    if (v == "svg" ? l = "http://www.w3.org/2000/svg" : v == "math" ? l = "http://www.w3.org/1998/Math/MathML" : l || (l = "http://www.w3.org/1999/xhtml"), i != null) {
      for (p = 0; p < i.length; p++)
        if ((h = i[p]) && "setAttribute" in h == !!v && (v ? h.localName == v : h.nodeType == 3)) {
          t = h, i[p] = null;
          break;
        }
    }
    if (t == null) {
      if (v == null)
        return document.createTextNode(_);
      t = document.createElementNS(l, v, _.is && _), a && (rt.__m && rt.__m(r, i), a = !1), i = null;
    }
    if (v == null)
      m === _ || a && t.data == _ || (t.data = _);
    else {
      if (i = i && Tt.call(t.childNodes), !a && i != null)
        for (m = {}, p = 0; p < t.attributes.length; p++)
          m[(h = t.attributes[p]).name] = h.value;
      for (p in m)
        if (h = m[p], p != "children") {
          if (p == "dangerouslySetInnerHTML")
            f = h;
          else if (!(p in _)) {
            if (p == "value" && "defaultValue" in _ || p == "checked" && "defaultChecked" in _)
              continue;
            Rt(t, p, null, h, l);
          }
        }
      for (p in _)
        h = _[p], p == "children" ? k = h : p == "dangerouslySetInnerHTML" ? b = h : p == "value" ? y = h : p == "checked" ? d = h : a && typeof h != "function" || m[p] === h || Rt(t, p, h, m[p], l);
      if (b)
        a || f && (b.__html == f.__html || b.__html == t.innerHTML) || (t.innerHTML = b.__html), r.__k = [];
      else if (f && (t.innerHTML = ""), ke(r.type == "template" ? t.content : t, Et(k) ? k : [k], r, e, o, v == "foreignObject" ? "http://www.w3.org/1999/xhtml" : l, i, s, i ? i[0] : e.__k && At(e, 0), a, c), i != null)
        for (p = i.length; p--; )
          Yt(i[p]);
      a || (p = "value", v == "progress" && y == null ? t.removeAttribute("value") : y != null && (y !== t[p] || v == "progress" && !y || v == "option" && y != m[p]) && Rt(t, p, y, m[p], l), p = "checked", d != null && d != t[p] && Rt(t, p, d, m[p], l));
    }
    return t;
  }
  function te(t, r, e) {
    try {
      if (typeof t == "function") {
        var o = typeof t.__u == "function";
        o && t.__u(), o && r == null || (t.__u = t(r));
      } else
        t.current = r;
    } catch (l) {
      rt.__e(l, e);
    }
  }
  function ze(t, r, e) {
    var o, l;
    if (rt.unmount && rt.unmount(t), (o = t.ref) && (o.current && o.current != t.__e || te(o, null, r)), (o = t.__c) != null) {
      if (o.componentWillUnmount)
        try {
          o.componentWillUnmount();
        } catch (i) {
          rt.__e(i, r);
        }
      o.base = o.__P = null;
    }
    if (o = t.__k)
      for (l = 0; l < o.length; l++)
        o[l] && ze(o[l], r, e || typeof t.type != "function");
    e || Yt(t.__e), t.__c = t.__ = t.__e = void 0;
  }
  function Sr(t, r, e) {
    return this.constructor(t, e);
  }
  function Ar(t, r, e) {
    var o, l, i, s;
    r == document && (r = document.documentElement), rt.__ && rt.__(t, r), l = (o = typeof e == "function") ? null : e && e.__k || r.__k, i = [], s = [], Jt(r, t = (!o && e || r).__k = qt(St, null, [t]), l || Ct, Ct, r.namespaceURI, !o && e ? [e] : l ? null : r.firstChild ? Tt.call(r.childNodes) : null, i, !o && e ? e : l ? l.__e : r.firstChild, o, s), Ce(i, t, s);
  }
  Tt = be.slice, rt = { __e: function(t, r, e, o) {
    for (var l, i, s; r = r.__; )
      if ((l = r.__c) && !l.__)
        try {
          if ((i = l.constructor) && i.getDerivedStateFromError != null && (l.setState(i.getDerivedStateFromError(t)), s = l.__d), l.componentDidCatch != null && (l.componentDidCatch(t, o || {}), s = l.__d), s)
            return l.__E = l;
        } catch (a) {
          t = a;
        }
    throw t;
  } }, pe = 0, yt.prototype.setState = function(t, r) {
    var e;
    e = this.__s != null && this.__s != this.state ? this.__s : this.__s = bt({}, this.state), typeof t == "function" && (t = t(bt({}, e), this.props)), t && bt(e, t), t != null && this.__v && (r && this._sb.push(r), we(this));
  }, yt.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), we(this));
  }, yt.prototype.render = St, xt = [], me = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ge = function(t, r) {
    return t.__v.__b - r.__v.__b;
  }, Ot.__r = 0, ve = /(PointerCapture)$|Capture$/i, Kt = 0, Vt = Ae(!1), Xt = Ae(!0);
  var Cr = 0;
  function V(t, r, e, o, l, i) {
    r || (r = {});
    var s, a, c = r;
    if ("ref" in c)
      for (a in c = {}, r)
        a == "ref" ? s = r[a] : c[a] = r[a];
    var p = { type: t, props: c, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Cr, __i: -1, __u: 0, __source: l, __self: i };
    if (typeof t == "function" && (s = t.defaultProps))
      for (a in s)
        c[a] === void 0 && (c[a] = s[a]);
    return rt.vnode && rt.vnode(p), p;
  }
  var Pt, ht, ee, Ie, Ft = 0, Ne = [], ft = rt, Te = ft.__b, Be = ft.__r, Oe = ft.diffed, De = ft.__c, Re = ft.unmount, Pe = ft.__;
  function Fe(t, r) {
    ft.__h && ft.__h(ht, t, Ft || r), Ft = 0;
    var e = ht.__H || (ht.__H = { __: [], __h: [] });
    return t >= e.__.length && e.__.push({}), e.__[t];
  }
  function wt(t) {
    return Ft = 1, Er(Ue, t);
  }
  function Er(t, r, e) {
    var o = Fe(Pt++, 2);
    if (o.t = t, !o.__c && (o.__ = [e ? e(r) : Ue(void 0, r), function(a) {
      var c = o.__N ? o.__N[0] : o.__[0], p = o.t(c, a);
      c !== p && (o.__N = [p, o.__[1]], o.__c.setState({}));
    }], o.__c = ht, !ht.__f)) {
      var l = function(a, c, p) {
        if (!o.__c.__H)
          return !0;
        var b = o.__c.__H.__.filter(function(k) {
          return !!k.__c;
        });
        if (b.every(function(k) {
          return !k.__N;
        }))
          return !i || i.call(this, a, c, p);
        var f = o.__c.props !== a;
        return b.forEach(function(k) {
          if (k.__N) {
            var h = k.__[0];
            k.__ = k.__N, k.__N = void 0, h !== k.__[0] && (f = !0);
          }
        }), i && i.call(this, a, c, p) || f;
      };
      ht.__f = !0;
      var i = ht.shouldComponentUpdate, s = ht.componentWillUpdate;
      ht.componentWillUpdate = function(a, c, p) {
        if (this.__e) {
          var b = i;
          i = void 0, l(a, c, p), i = b;
        }
        s && s.call(this, a, c, p);
      }, ht.shouldComponentUpdate = l;
    }
    return o.__N || o.__;
  }
  function zr(t) {
    return Ft = 5, Lt(function() {
      return { current: t };
    }, []);
  }
  function Lt(t, r) {
    var e = Fe(Pt++, 7);
    return Tr(e.__H, r) && (e.__ = t(), e.__H = r, e.__h = t), e.__;
  }
  function Ir() {
    for (var t; t = Ne.shift(); )
      if (t.__P && t.__H)
        try {
          t.__H.__h.forEach(Ut), t.__H.__h.forEach(re), t.__H.__h = [];
        } catch (r) {
          t.__H.__h = [], ft.__e(r, t.__v);
        }
  }
  ft.__b = function(t) {
    ht = null, Te && Te(t);
  }, ft.__ = function(t, r) {
    t && r.__k && r.__k.__m && (t.__m = r.__k.__m), Pe && Pe(t, r);
  }, ft.__r = function(t) {
    Be && Be(t), Pt = 0;
    var r = (ht = t.__c).__H;
    r && (ee === ht ? (r.__h = [], ht.__h = [], r.__.forEach(function(e) {
      e.__N && (e.__ = e.__N), e.u = e.__N = void 0;
    })) : (r.__h.forEach(Ut), r.__h.forEach(re), r.__h = [], Pt = 0)), ee = ht;
  }, ft.diffed = function(t) {
    Oe && Oe(t);
    var r = t.__c;
    r && r.__H && (r.__H.__h.length && (Ne.push(r) !== 1 && Ie === ft.requestAnimationFrame || ((Ie = ft.requestAnimationFrame) || Nr)(Ir)), r.__H.__.forEach(function(e) {
      e.u && (e.__H = e.u), e.u = void 0;
    })), ee = ht = null;
  }, ft.__c = function(t, r) {
    r.some(function(e) {
      try {
        e.__h.forEach(Ut), e.__h = e.__h.filter(function(o) {
          return !o.__ || re(o);
        });
      } catch (o) {
        r.some(function(l) {
          l.__h && (l.__h = []);
        }), r = [], ft.__e(o, e.__v);
      }
    }), De && De(t, r);
  }, ft.unmount = function(t) {
    Re && Re(t);
    var r, e = t.__c;
    e && e.__H && (e.__H.__.forEach(function(o) {
      try {
        Ut(o);
      } catch (l) {
        r = l;
      }
    }), e.__H = void 0, r && ft.__e(r, e.__v));
  };
  var Le = typeof requestAnimationFrame == "function";
  function Nr(t) {
    var r, e = function() {
      clearTimeout(o), Le && cancelAnimationFrame(r), setTimeout(t);
    }, o = setTimeout(e, 35);
    Le && (r = requestAnimationFrame(e));
  }
  function Ut(t) {
    var r = ht, e = t.__c;
    typeof e == "function" && (t.__c = void 0, e()), ht = r;
  }
  function re(t) {
    var r = ht;
    t.__c = t.__(), ht = r;
  }
  function Tr(t, r) {
    return !t || t.length !== r.length || r.some(function(e, o) {
      return e !== t[o];
    });
  }
  function Ue(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function Br(t, r) {
    for (var e in r)
      t[e] = r[e];
    return t;
  }
  function je(t, r) {
    for (var e in t)
      if (e !== "__source" && !(e in r))
        return !0;
    for (var o in r)
      if (o !== "__source" && t[o] !== r[o])
        return !0;
    return !1;
  }
  function Me(t, r) {
    this.props = t, this.context = r;
  }
  (Me.prototype = new yt()).isPureReactComponent = !0, Me.prototype.shouldComponentUpdate = function(t, r) {
    return je(this.props, t) || je(this.state, r);
  };
  var Ze = rt.__b;
  rt.__b = function(t) {
    t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Ze && Ze(t);
  };
  var Or = rt.__e;
  rt.__e = function(t, r, e, o) {
    if (t.then) {
      for (var l, i = r; i = i.__; )
        if ((l = i.__c) && l.__c)
          return r.__e == null && (r.__e = e.__e, r.__k = e.__k), l.__c(t, r);
    }
    Or(t, r, e, o);
  };
  var We = rt.unmount;
  function $e(t, r, e) {
    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(o) {
      typeof o.__c == "function" && o.__c();
    }), t.__c.__H = null), (t = Br({}, t)).__c != null && (t.__c.__P === e && (t.__c.__P = r), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(o) {
      return $e(o, r, e);
    })), t;
  }
  function He(t, r, e) {
    return t && e && (t.__v = null, t.__k = t.__k && t.__k.map(function(o) {
      return He(o, r, e);
    }), t.__c && t.__c.__P === r && (t.__e && e.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = e)), t;
  }
  function ne() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function Ge(t) {
    var r = t.__.__c;
    return r && r.__a && r.__a(t);
  }
  function jt() {
    this.i = null, this.l = null;
  }
  rt.unmount = function(t) {
    var r = t.__c;
    r && r.__R && r.__R(), r && 32 & t.__u && (t.type = null), We && We(t);
  }, (ne.prototype = new yt()).__c = function(t, r) {
    var e = r.__c, o = this;
    o.o == null && (o.o = []), o.o.push(e);
    var l = Ge(o.__v), i = !1, s = function() {
      i || (i = !0, e.__R = null, l ? l(a) : a());
    };
    e.__R = s;
    var a = function() {
      if (!--o.__u) {
        if (o.state.__a) {
          var c = o.state.__a;
          o.__v.__k[0] = He(c, c.__c.__P, c.__c.__O);
        }
        var p;
        for (o.setState({ __a: o.__b = null }); p = o.o.pop(); )
          p.forceUpdate();
      }
    };
    o.__u++ || 32 & r.__u || o.setState({ __a: o.__b = o.__v.__k[0] }), t.then(s, s);
  }, ne.prototype.componentWillUnmount = function() {
    this.o = [];
  }, ne.prototype.render = function(t, r) {
    if (this.__b) {
      if (this.__v.__k) {
        var e = document.createElement("div"), o = this.__v.__k[0].__c;
        this.__v.__k[0] = $e(this.__b, e, o.__O = o.__P);
      }
      this.__b = null;
    }
    var l = r.__a && qt(St, null, t.fallback);
    return l && (l.__u &= -33), [qt(St, null, r.__a ? null : t.children), l];
  };
  var Ke = function(t, r, e) {
    if (++e[1] === e[0] && t.l.delete(r), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size))
      for (e = t.i; e; ) {
        for (; e.length > 3; )
          e.pop()();
        if (e[1] < e[0])
          break;
        t.i = e = e[2];
      }
  };
  (jt.prototype = new yt()).__a = function(t) {
    var r = this, e = Ge(r.__v), o = r.l.get(t);
    return o[0]++, function(l) {
      var i = function() {
        r.props.revealOrder ? (o.push(l), Ke(r, t, o)) : l();
      };
      e ? e(i) : i();
    };
  }, jt.prototype.render = function(t) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var r = Dt(t.children);
    t.revealOrder && t.revealOrder[0] === "b" && r.reverse();
    for (var e = r.length; e--; )
      this.l.set(r[e], this.i = [1, 0, this.i]);
    return t.children;
  }, jt.prototype.componentDidUpdate = jt.prototype.componentDidMount = function() {
    var t = this;
    this.l.forEach(function(r, e) {
      Ke(t, e, r);
    });
  };
  var Dr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Rr = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Pr = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Fr = /[A-Z0-9]/g, Lr = typeof document < "u", Ur = function(t) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
  };
  function Ve(t, r, e) {
    return r.__k == null && (r.textContent = ""), Ar(t, r), typeof e == "function" && e(), t ? t.__c : null;
  }
  yt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
    Object.defineProperty(yt.prototype, t, { configurable: !0, get: function() {
      return this["UNSAFE_" + t];
    }, set: function(r) {
      Object.defineProperty(this, t, { configurable: !0, writable: !0, value: r });
    } });
  });
  var Xe = rt.event;
  function jr() {
  }
  function Mr() {
    return this.cancelBubble;
  }
  function Zr() {
    return this.defaultPrevented;
  }
  rt.event = function(t) {
    return Xe && (t = Xe(t)), t.persist = jr, t.isPropagationStopped = Mr, t.isDefaultPrevented = Zr, t.nativeEvent = t;
  };
  var Wr = { enumerable: !1, configurable: !0, get: function() {
    return this.class;
  } }, Ye = rt.vnode;
  rt.vnode = function(t) {
    typeof t.type == "string" && function(r) {
      var e = r.props, o = r.type, l = {}, i = o.indexOf("-") === -1;
      for (var s in e) {
        var a = e[s];
        if (!(s === "value" && "defaultValue" in e && a == null || Lr && s === "children" && o === "noscript" || s === "class" || s === "className")) {
          var c = s.toLowerCase();
          s === "defaultValue" && "value" in e && e.value == null ? s = "value" : s === "download" && a === !0 ? a = "" : c === "translate" && a === "no" ? a = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? s = "ondblclick" : c !== "onchange" || o !== "input" && o !== "textarea" || Ur(e.type) ? c === "onfocus" ? s = "onfocusin" : c === "onblur" ? s = "onfocusout" : Pr.test(s) && (s = c) : c = s = "oninput" : i && Rr.test(s) ? s = s.replace(Fr, "-$&").toLowerCase() : a === null && (a = void 0), c === "oninput" && l[s = c] && (s = "oninputCapture"), l[s] = a;
        }
      }
      o == "select" && l.multiple && Array.isArray(l.value) && (l.value = Dt(e.children).forEach(function(p) {
        p.props.selected = l.value.indexOf(p.props.value) != -1;
      })), o == "select" && l.defaultValue != null && (l.value = Dt(e.children).forEach(function(p) {
        p.props.selected = l.multiple ? l.defaultValue.indexOf(p.props.value) != -1 : l.defaultValue == p.props.value;
      })), e.class && !e.className ? (l.class = e.class, Object.defineProperty(l, "className", Wr)) : (e.className && !e.class || e.class && e.className) && (l.class = l.className = e.className), r.props = l;
    }(t), t.$$typeof = Dr, Ye && Ye(t);
  };
  var qe = rt.__r;
  rt.__r = function(t) {
    qe && qe(t), t.__c;
  };
  var Je = rt.diffed;
  rt.diffed = function(t) {
    Je && Je(t);
    var r = t.props, e = t.__e;
    e != null && t.type === "textarea" && "value" in r && r.value !== e.value && (e.value = r.value == null ? "" : r.value);
  };
  const Qe = {
    name: "blinko-plugin-google-keep-importer",
    author: "techcraftde",
    url: "https://github.com/techcraftde/blinko-google-keep-importer",
    version: "1.0.0",
    minAppVersion: "0.0.0",
    displayName: {
      default: "Blinko: Google Keep Importer",
      de: "Blinko: Google Keep Importer"
    },
    description: {
      default: "Import Google Keep notes with tags and formatting into Blinko.",
      de: "Importiert Google Keep Notizen inkl. Tags und Formatierung in Blinko."
    },
    readme: {
      default: "README.md"
    }
  }, $r = {
    toolbar: {
      tooltip: "Import Google Keep notes"
    },
    dialog: {
      title: "Google Keep import",
      subtitle: "Upload your Google Takeout ZIP to move notes, labels and attachments straight into Blinko.",
      dropzone: {
        title: "Select Google Takeout ZIP",
        instructions: "Drag your exported file here or click to choose it.",
        cta: "Choose file",
        hint: "Only original ZIP exports from Google Takeout → Keep are supported."
      },
      summary: {
        title: "Analysis",
        notes: "importable notes",
        labels: "labels detected",
        skipped: "Skipped",
        file: "Selected file",
        lastModified: "Last modified",
        analyzedAt: "Analysed"
      },
      status: {
        idle: "Select a ZIP file",
        parsing: "Processing ZIP …",
        ready: "Ready to import",
        importing: "Importing notes …",
        completed: "Import finished",
        error: "Import failed"
      },
      instructions: {
        title: "How the import works",
        export: "Visit takeout.google.com and select Google Keep.",
        zip: "Export as ZIP and include both JSON data and media attachments.",
        import: "Drop the ZIP here or select it with the button to start importing."
      },
      errors: {
        invalidFile: "Please choose a ZIP file exported from Google Keep.",
        noNotes: "No importable notes were found inside this archive.",
        generic: "Something went wrong while parsing the export."
      },
      progress: {
        currentNote: "Current note"
      },
      skipped: {
        title: "Skipped notes",
        reason: {
          trashed: "Note is in the trash",
          empty: "No content available",
          error: "Could not parse this note"
        },
        empty: "No skipped notes",
        more: "more"
      },
      logs: {
        title: "Import log",
        empty: "No import started yet"
      },
      buttons: {
        import: "Import notes",
        reset: "Reset",
        close: "Close"
      },
      toast: {
        importPartial: "Finished with warnings – some notes could not be imported.",
        importSuccess: "All notes were imported successfully."
      },
      security: {
        title: "Privacy",
        description: "Everything stays on your device. Only the final notes are sent to your Blinko workspace."
      }
    }
  }, Hr = {
    toolbar: {
      tooltip: "Google Keep Notizen importieren"
    },
    dialog: {
      title: "Google Keep Import",
      subtitle: "Lade dein Google-Takeout-ZIP hoch und übertrage Notizen, Labels und Anhänge direkt nach Blinko.",
      dropzone: {
        title: "Google Takeout ZIP auswählen",
        instructions: "Ziehe die exportierte Datei hierher oder klicke, um sie auszuwählen.",
        cta: "Datei auswählen",
        hint: "Unterstützt werden unveränderte ZIP-Exporte aus Google Takeout → Keep."
      },
      summary: {
        title: "Analyse",
        notes: "importierbare Notizen",
        labels: "erkannte Labels",
        skipped: "Übersprungen",
        file: "Ausgewählte Datei",
        lastModified: "Geändert",
        analyzedAt: "Analysiert"
      },
      status: {
        idle: "Wähle eine ZIP-Datei aus",
        parsing: "ZIP-Datei wird verarbeitet …",
        ready: "Bereit für den Import",
        importing: "Importiere Notizen …",
        completed: "Import abgeschlossen",
        error: "Import fehlgeschlagen"
      },
      instructions: {
        title: "So funktioniert der Import",
        export: "Rufe takeout.google.com auf und wähle Google Keep.",
        zip: "Exportiere als ZIP und aktiviere JSON-Daten sowie Medien-Dateien.",
        import: "Ziehe das ZIP hierher oder wähle es über den Button, um den Import zu starten."
      },
      errors: {
        invalidFile: "Bitte eine ZIP-Datei aus Google Keep auswählen.",
        noNotes: "In diesem Archiv wurden keine importierbaren Notizen gefunden.",
        generic: "Beim Analysieren ist ein Fehler aufgetreten."
      },
      progress: {
        currentNote: "Aktuelle Notiz"
      },
      skipped: {
        title: "Übersprungene Notizen",
        reason: {
          trashed: "Notiz liegt im Papierkorb",
          empty: "Kein Inhalt vorhanden",
          error: "Notiz konnte nicht gelesen werden"
        },
        empty: "Keine übersprungenen Notizen",
        more: "weitere"
      },
      logs: {
        title: "Import-Protokoll",
        empty: "Noch kein Import gestartet"
      },
      buttons: {
        import: "Notizen importieren",
        reset: "Zurücksetzen",
        close: "Schließen"
      },
      toast: {
        importPartial: "Import abgeschlossen, einige Notizen konnten nicht übernommen werden.",
        importSuccess: "Alle Notizen wurden erfolgreich importiert."
      },
      security: {
        title: "Datenschutz",
        description: "Alle Daten bleiben lokal auf deinem Gerät. Es werden ausschließlich fertige Notizen zu Blinko übertragen."
      }
    }
  };
  var Mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function Gr(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  function Zt(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }
  var tr = { exports: {} };
  /*!
  
  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>
  
  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.
  
  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  */
  (function(t, r) {
    (function(e) {
      t.exports = e();
    })(function() {
      return function e(o, l, i) {
        function s(p, b) {
          if (!l[p]) {
            if (!o[p]) {
              var f = typeof Zt == "function" && Zt;
              if (!b && f)
                return f(p, !0);
              if (a)
                return a(p, !0);
              var k = new Error("Cannot find module '" + p + "'");
              throw k.code = "MODULE_NOT_FOUND", k;
            }
            var h = l[p] = { exports: {} };
            o[p][0].call(h.exports, function(y) {
              var d = o[p][1][y];
              return s(d || y);
            }, h, h.exports, e, o, l, i);
          }
          return l[p].exports;
        }
        for (var a = typeof Zt == "function" && Zt, c = 0; c < i.length; c++)
          s(i[c]);
        return s;
      }({ 1: [function(e, o, l) {
        var i = e("./utils"), s = e("./support"), a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        l.encode = function(c) {
          for (var p, b, f, k, h, y, d, m = [], _ = 0, v = c.length, A = v, S = i.getTypeOf(c) !== "string"; _ < c.length; )
            A = v - _, f = S ? (p = c[_++], b = _ < v ? c[_++] : 0, _ < v ? c[_++] : 0) : (p = c.charCodeAt(_++), b = _ < v ? c.charCodeAt(_++) : 0, _ < v ? c.charCodeAt(_++) : 0), k = p >> 2, h = (3 & p) << 4 | b >> 4, y = 1 < A ? (15 & b) << 2 | f >> 6 : 64, d = 2 < A ? 63 & f : 64, m.push(a.charAt(k) + a.charAt(h) + a.charAt(y) + a.charAt(d));
          return m.join("");
        }, l.decode = function(c) {
          var p, b, f, k, h, y, d = 0, m = 0, _ = "data:";
          if (c.substr(0, _.length) === _)
            throw new Error("Invalid base64 input, it looks like a data url.");
          var v, A = 3 * (c = c.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (c.charAt(c.length - 1) === a.charAt(64) && A--, c.charAt(c.length - 2) === a.charAt(64) && A--, A % 1 != 0)
            throw new Error("Invalid base64 input, bad content length.");
          for (v = s.uint8array ? new Uint8Array(0 | A) : new Array(0 | A); d < c.length; )
            p = a.indexOf(c.charAt(d++)) << 2 | (k = a.indexOf(c.charAt(d++))) >> 4, b = (15 & k) << 4 | (h = a.indexOf(c.charAt(d++))) >> 2, f = (3 & h) << 6 | (y = a.indexOf(c.charAt(d++))), v[m++] = p, h !== 64 && (v[m++] = b), y !== 64 && (v[m++] = f);
          return v;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(e, o, l) {
        var i = e("./external"), s = e("./stream/DataWorker"), a = e("./stream/Crc32Probe"), c = e("./stream/DataLengthProbe");
        function p(b, f, k, h, y) {
          this.compressedSize = b, this.uncompressedSize = f, this.crc32 = k, this.compression = h, this.compressedContent = y;
        }
        p.prototype = { getContentWorker: function() {
          var b = new s(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")), f = this;
          return b.on("end", function() {
            if (this.streamInfo.data_length !== f.uncompressedSize)
              throw new Error("Bug : uncompressed data size mismatch");
          }), b;
        }, getCompressedWorker: function() {
          return new s(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, p.createWorkerFrom = function(b, f, k) {
          return b.pipe(new a()).pipe(new c("uncompressedSize")).pipe(f.compressWorker(k)).pipe(new c("compressedSize")).withStreamInfo("compression", f);
        }, o.exports = p;
      }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, o, l) {
        var i = e("./stream/GenericWorker");
        l.STORE = { magic: "\0\0", compressWorker: function() {
          return new i("STORE compression");
        }, uncompressWorker: function() {
          return new i("STORE decompression");
        } }, l.DEFLATE = e("./flate");
      }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, o, l) {
        var i = e("./utils"), s = function() {
          for (var a, c = [], p = 0; p < 256; p++) {
            a = p;
            for (var b = 0; b < 8; b++)
              a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
            c[p] = a;
          }
          return c;
        }();
        o.exports = function(a, c) {
          return a !== void 0 && a.length ? i.getTypeOf(a) !== "string" ? function(p, b, f, k) {
            var h = s, y = k + f;
            p ^= -1;
            for (var d = k; d < y; d++)
              p = p >>> 8 ^ h[255 & (p ^ b[d])];
            return -1 ^ p;
          }(0 | c, a, a.length, 0) : function(p, b, f, k) {
            var h = s, y = k + f;
            p ^= -1;
            for (var d = k; d < y; d++)
              p = p >>> 8 ^ h[255 & (p ^ b.charCodeAt(d))];
            return -1 ^ p;
          }(0 | c, a, a.length, 0) : 0;
        };
      }, { "./utils": 32 }], 5: [function(e, o, l) {
        l.base64 = !1, l.binary = !1, l.dir = !1, l.createFolders = !0, l.date = null, l.compression = null, l.compressionOptions = null, l.comment = null, l.unixPermissions = null, l.dosPermissions = null;
      }, {}], 6: [function(e, o, l) {
        var i = null;
        i = typeof Promise < "u" ? Promise : e("lie"), o.exports = { Promise: i };
      }, { lie: 37 }], 7: [function(e, o, l) {
        var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = e("pako"), a = e("./utils"), c = e("./stream/GenericWorker"), p = i ? "uint8array" : "array";
        function b(f, k) {
          c.call(this, "FlateWorker/" + f), this._pako = null, this._pakoAction = f, this._pakoOptions = k, this.meta = {};
        }
        l.magic = "\b\0", a.inherits(b, c), b.prototype.processChunk = function(f) {
          this.meta = f.meta, this._pako === null && this._createPako(), this._pako.push(a.transformTo(p, f.data), !1);
        }, b.prototype.flush = function() {
          c.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
        }, b.prototype.cleanUp = function() {
          c.prototype.cleanUp.call(this), this._pako = null;
        }, b.prototype._createPako = function() {
          this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
          var f = this;
          this._pako.onData = function(k) {
            f.push({ data: k, meta: f.meta });
          };
        }, l.compressWorker = function(f) {
          return new b("Deflate", f);
        }, l.uncompressWorker = function() {
          return new b("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, o, l) {
        function i(h, y) {
          var d, m = "";
          for (d = 0; d < y; d++)
            m += String.fromCharCode(255 & h), h >>>= 8;
          return m;
        }
        function s(h, y, d, m, _, v) {
          var A, S, E = h.file, P = h.compression, D = v !== p.utf8encode, Z = a.transformTo("string", v(E.name)), B = a.transformTo("string", p.utf8encode(E.name)), W = E.comment, Y = a.transformTo("string", v(W)), x = a.transformTo("string", p.utf8encode(W)), R = B.length !== E.name.length, u = x.length !== W.length, L = "", et = "", O = "", q = E.dir, j = E.date, J = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          y && !d || (J.crc32 = h.crc32, J.compressedSize = h.compressedSize, J.uncompressedSize = h.uncompressedSize);
          var N = 0;
          y && (N |= 8), D || !R && !u || (N |= 2048);
          var I = 0, Q = 0;
          q && (I |= 16), _ === "UNIX" ? (Q = 798, I |= function(G, st) {
            var lt = G;
            return G || (lt = st ? 16893 : 33204), (65535 & lt) << 16;
          }(E.unixPermissions, q)) : (Q = 20, I |= function(G) {
            return 63 & (G || 0);
          }(E.dosPermissions)), A = j.getUTCHours(), A <<= 6, A |= j.getUTCMinutes(), A <<= 5, A |= j.getUTCSeconds() / 2, S = j.getUTCFullYear() - 1980, S <<= 4, S |= j.getUTCMonth() + 1, S <<= 5, S |= j.getUTCDate(), R && (et = i(1, 1) + i(b(Z), 4) + B, L += "up" + i(et.length, 2) + et), u && (O = i(1, 1) + i(b(Y), 4) + x, L += "uc" + i(O.length, 2) + O);
          var K = "";
          return K += `
\0`, K += i(N, 2), K += P.magic, K += i(A, 2), K += i(S, 2), K += i(J.crc32, 4), K += i(J.compressedSize, 4), K += i(J.uncompressedSize, 4), K += i(Z.length, 2), K += i(L.length, 2), { fileRecord: f.LOCAL_FILE_HEADER + K + Z + L, dirRecord: f.CENTRAL_FILE_HEADER + i(Q, 2) + K + i(Y.length, 2) + "\0\0\0\0" + i(I, 4) + i(m, 4) + Z + L + Y };
        }
        var a = e("../utils"), c = e("../stream/GenericWorker"), p = e("../utf8"), b = e("../crc32"), f = e("../signature");
        function k(h, y, d, m) {
          c.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = y, this.zipPlatform = d, this.encodeFileName = m, this.streamFiles = h, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
        }
        a.inherits(k, c), k.prototype.push = function(h) {
          var y = h.meta.percent || 0, d = this.entriesCount, m = this._sources.length;
          this.accumulate ? this.contentBuffer.push(h) : (this.bytesWritten += h.data.length, c.prototype.push.call(this, { data: h.data, meta: { currentFile: this.currentFile, percent: d ? (y + 100 * (d - m - 1)) / d : 100 } }));
        }, k.prototype.openedSource = function(h) {
          this.currentSourceOffset = this.bytesWritten, this.currentFile = h.file.name;
          var y = this.streamFiles && !h.file.dir;
          if (y) {
            var d = s(h, y, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({ data: d.fileRecord, meta: { percent: 0 } });
          } else
            this.accumulate = !0;
        }, k.prototype.closedSource = function(h) {
          this.accumulate = !1;
          var y = this.streamFiles && !h.file.dir, d = s(h, y, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          if (this.dirRecords.push(d.dirRecord), y)
            this.push({ data: function(m) {
              return f.DATA_DESCRIPTOR + i(m.crc32, 4) + i(m.compressedSize, 4) + i(m.uncompressedSize, 4);
            }(h), meta: { percent: 100 } });
          else
            for (this.push({ data: d.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
              this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, k.prototype.flush = function() {
          for (var h = this.bytesWritten, y = 0; y < this.dirRecords.length; y++)
            this.push({ data: this.dirRecords[y], meta: { percent: 100 } });
          var d = this.bytesWritten - h, m = function(_, v, A, S, E) {
            var P = a.transformTo("string", E(S));
            return f.CENTRAL_DIRECTORY_END + "\0\0\0\0" + i(_, 2) + i(_, 2) + i(v, 4) + i(A, 4) + i(P.length, 2) + P;
          }(this.dirRecords.length, d, h, this.zipComment, this.encodeFileName);
          this.push({ data: m, meta: { percent: 100 } });
        }, k.prototype.prepareNextSource = function() {
          this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
        }, k.prototype.registerPrevious = function(h) {
          this._sources.push(h);
          var y = this;
          return h.on("data", function(d) {
            y.processChunk(d);
          }), h.on("end", function() {
            y.closedSource(y.previous.streamInfo), y._sources.length ? y.prepareNextSource() : y.end();
          }), h.on("error", function(d) {
            y.error(d);
          }), this;
        }, k.prototype.resume = function() {
          return !!c.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
        }, k.prototype.error = function(h) {
          var y = this._sources;
          if (!c.prototype.error.call(this, h))
            return !1;
          for (var d = 0; d < y.length; d++)
            try {
              y[d].error(h);
            } catch {
            }
          return !0;
        }, k.prototype.lock = function() {
          c.prototype.lock.call(this);
          for (var h = this._sources, y = 0; y < h.length; y++)
            h[y].lock();
        }, o.exports = k;
      }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, o, l) {
        var i = e("../compressions"), s = e("./ZipFileWorker");
        l.generateWorker = function(a, c, p) {
          var b = new s(c.streamFiles, p, c.platform, c.encodeFileName), f = 0;
          try {
            a.forEach(function(k, h) {
              f++;
              var y = function(v, A) {
                var S = v || A, E = i[S];
                if (!E)
                  throw new Error(S + " is not a valid compression method !");
                return E;
              }(h.options.compression, c.compression), d = h.options.compressionOptions || c.compressionOptions || {}, m = h.dir, _ = h.date;
              h._compressWorker(y, d).withStreamInfo("file", { name: k, dir: m, date: _, comment: h.comment || "", unixPermissions: h.unixPermissions, dosPermissions: h.dosPermissions }).pipe(b);
            }), b.entriesCount = f;
          } catch (k) {
            b.error(k);
          }
          return b;
        };
      }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, o, l) {
        function i() {
          if (!(this instanceof i))
            return new i();
          if (arguments.length)
            throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
          this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
            var s = new i();
            for (var a in this)
              typeof this[a] != "function" && (s[a] = this[a]);
            return s;
          };
        }
        (i.prototype = e("./object")).loadAsync = e("./load"), i.support = e("./support"), i.defaults = e("./defaults"), i.version = "3.10.1", i.loadAsync = function(s, a) {
          return new i().loadAsync(s, a);
        }, i.external = e("./external"), o.exports = i;
      }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, o, l) {
        var i = e("./utils"), s = e("./external"), a = e("./utf8"), c = e("./zipEntries"), p = e("./stream/Crc32Probe"), b = e("./nodejsUtils");
        function f(k) {
          return new s.Promise(function(h, y) {
            var d = k.decompressed.getContentWorker().pipe(new p());
            d.on("error", function(m) {
              y(m);
            }).on("end", function() {
              d.streamInfo.crc32 !== k.decompressed.crc32 ? y(new Error("Corrupted zip : CRC32 mismatch")) : h();
            }).resume();
          });
        }
        o.exports = function(k, h) {
          var y = this;
          return h = i.extend(h || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: a.utf8decode }), b.isNode && b.isStream(k) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : i.prepareContent("the loaded zip file", k, !0, h.optimizedBinaryString, h.base64).then(function(d) {
            var m = new c(h);
            return m.load(d), m;
          }).then(function(d) {
            var m = [s.Promise.resolve(d)], _ = d.files;
            if (h.checkCRC32)
              for (var v = 0; v < _.length; v++)
                m.push(f(_[v]));
            return s.Promise.all(m);
          }).then(function(d) {
            for (var m = d.shift(), _ = m.files, v = 0; v < _.length; v++) {
              var A = _[v], S = A.fileNameStr, E = i.resolve(A.fileNameStr);
              y.file(E, A.decompressed, { binary: !0, optimizedBinaryString: !0, date: A.date, dir: A.dir, comment: A.fileCommentStr.length ? A.fileCommentStr : null, unixPermissions: A.unixPermissions, dosPermissions: A.dosPermissions, createFolders: h.createFolders }), A.dir || (y.file(E).unsafeOriginalName = S);
            }
            return m.zipComment.length && (y.comment = m.zipComment), y;
          });
        };
      }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, o, l) {
        var i = e("../utils"), s = e("../stream/GenericWorker");
        function a(c, p) {
          s.call(this, "Nodejs stream input adapter for " + c), this._upstreamEnded = !1, this._bindStream(p);
        }
        i.inherits(a, s), a.prototype._bindStream = function(c) {
          var p = this;
          (this._stream = c).pause(), c.on("data", function(b) {
            p.push({ data: b, meta: { percent: 0 } });
          }).on("error", function(b) {
            p.isPaused ? this.generatedError = b : p.error(b);
          }).on("end", function() {
            p.isPaused ? p._upstreamEnded = !0 : p.end();
          });
        }, a.prototype.pause = function() {
          return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
        }, a.prototype.resume = function() {
          return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
        }, o.exports = a;
      }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, o, l) {
        var i = e("readable-stream").Readable;
        function s(a, c, p) {
          i.call(this, c), this._helper = a;
          var b = this;
          a.on("data", function(f, k) {
            b.push(f) || b._helper.pause(), p && p(k);
          }).on("error", function(f) {
            b.emit("error", f);
          }).on("end", function() {
            b.push(null);
          });
        }
        e("../utils").inherits(s, i), s.prototype._read = function() {
          this._helper.resume();
        }, o.exports = s;
      }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, o, l) {
        o.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(i, s) {
          if (Buffer.from && Buffer.from !== Uint8Array.from)
            return Buffer.from(i, s);
          if (typeof i == "number")
            throw new Error('The "data" argument must not be a number');
          return new Buffer(i, s);
        }, allocBuffer: function(i) {
          if (Buffer.alloc)
            return Buffer.alloc(i);
          var s = new Buffer(i);
          return s.fill(0), s;
        }, isBuffer: function(i) {
          return Buffer.isBuffer(i);
        }, isStream: function(i) {
          return i && typeof i.on == "function" && typeof i.pause == "function" && typeof i.resume == "function";
        } };
      }, {}], 15: [function(e, o, l) {
        function i(E, P, D) {
          var Z, B = a.getTypeOf(P), W = a.extend(D || {}, b);
          W.date = W.date || /* @__PURE__ */ new Date(), W.compression !== null && (W.compression = W.compression.toUpperCase()), typeof W.unixPermissions == "string" && (W.unixPermissions = parseInt(W.unixPermissions, 8)), W.unixPermissions && 16384 & W.unixPermissions && (W.dir = !0), W.dosPermissions && 16 & W.dosPermissions && (W.dir = !0), W.dir && (E = _(E)), W.createFolders && (Z = m(E)) && v.call(this, Z, !0);
          var Y = B === "string" && W.binary === !1 && W.base64 === !1;
          D && D.binary !== void 0 || (W.binary = !Y), (P instanceof f && P.uncompressedSize === 0 || W.dir || !P || P.length === 0) && (W.base64 = !1, W.binary = !0, P = "", W.compression = "STORE", B = "string");
          var x = null;
          x = P instanceof f || P instanceof c ? P : y.isNode && y.isStream(P) ? new d(E, P) : a.prepareContent(E, P, W.binary, W.optimizedBinaryString, W.base64);
          var R = new k(E, x, W);
          this.files[E] = R;
        }
        var s = e("./utf8"), a = e("./utils"), c = e("./stream/GenericWorker"), p = e("./stream/StreamHelper"), b = e("./defaults"), f = e("./compressedObject"), k = e("./zipObject"), h = e("./generate"), y = e("./nodejsUtils"), d = e("./nodejs/NodejsStreamInputAdapter"), m = function(E) {
          E.slice(-1) === "/" && (E = E.substring(0, E.length - 1));
          var P = E.lastIndexOf("/");
          return 0 < P ? E.substring(0, P) : "";
        }, _ = function(E) {
          return E.slice(-1) !== "/" && (E += "/"), E;
        }, v = function(E, P) {
          return P = P !== void 0 ? P : b.createFolders, E = _(E), this.files[E] || i.call(this, E, null, { dir: !0, createFolders: P }), this.files[E];
        };
        function A(E) {
          return Object.prototype.toString.call(E) === "[object RegExp]";
        }
        var S = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(E) {
          var P, D, Z;
          for (P in this.files)
            Z = this.files[P], (D = P.slice(this.root.length, P.length)) && P.slice(0, this.root.length) === this.root && E(D, Z);
        }, filter: function(E) {
          var P = [];
          return this.forEach(function(D, Z) {
            E(D, Z) && P.push(Z);
          }), P;
        }, file: function(E, P, D) {
          if (arguments.length !== 1)
            return E = this.root + E, i.call(this, E, P, D), this;
          if (A(E)) {
            var Z = E;
            return this.filter(function(W, Y) {
              return !Y.dir && Z.test(W);
            });
          }
          var B = this.files[this.root + E];
          return B && !B.dir ? B : null;
        }, folder: function(E) {
          if (!E)
            return this;
          if (A(E))
            return this.filter(function(B, W) {
              return W.dir && E.test(B);
            });
          var P = this.root + E, D = v.call(this, P), Z = this.clone();
          return Z.root = D.name, Z;
        }, remove: function(E) {
          E = this.root + E;
          var P = this.files[E];
          if (P || (E.slice(-1) !== "/" && (E += "/"), P = this.files[E]), P && !P.dir)
            delete this.files[E];
          else
            for (var D = this.filter(function(B, W) {
              return W.name.slice(0, E.length) === E;
            }), Z = 0; Z < D.length; Z++)
              delete this.files[D[Z].name];
          return this;
        }, generate: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, generateInternalStream: function(E) {
          var P, D = {};
          try {
            if ((D = a.extend(E || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = D.type.toLowerCase(), D.compression = D.compression.toUpperCase(), D.type === "binarystring" && (D.type = "string"), !D.type)
              throw new Error("No output type specified.");
            a.checkSupport(D.type), D.platform !== "darwin" && D.platform !== "freebsd" && D.platform !== "linux" && D.platform !== "sunos" || (D.platform = "UNIX"), D.platform === "win32" && (D.platform = "DOS");
            var Z = D.comment || this.comment || "";
            P = h.generateWorker(this, D, Z);
          } catch (B) {
            (P = new c("error")).error(B);
          }
          return new p(P, D.type || "string", D.mimeType);
        }, generateAsync: function(E, P) {
          return this.generateInternalStream(E).accumulate(P);
        }, generateNodeStream: function(E, P) {
          return (E = E || {}).type || (E.type = "nodebuffer"), this.generateInternalStream(E).toNodejsStream(P);
        } };
        o.exports = S;
      }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, o, l) {
        o.exports = e("stream");
      }, { stream: void 0 }], 17: [function(e, o, l) {
        var i = e("./DataReader");
        function s(a) {
          i.call(this, a);
          for (var c = 0; c < this.data.length; c++)
            a[c] = 255 & a[c];
        }
        e("../utils").inherits(s, i), s.prototype.byteAt = function(a) {
          return this.data[this.zero + a];
        }, s.prototype.lastIndexOfSignature = function(a) {
          for (var c = a.charCodeAt(0), p = a.charCodeAt(1), b = a.charCodeAt(2), f = a.charCodeAt(3), k = this.length - 4; 0 <= k; --k)
            if (this.data[k] === c && this.data[k + 1] === p && this.data[k + 2] === b && this.data[k + 3] === f)
              return k - this.zero;
          return -1;
        }, s.prototype.readAndCheckSignature = function(a) {
          var c = a.charCodeAt(0), p = a.charCodeAt(1), b = a.charCodeAt(2), f = a.charCodeAt(3), k = this.readData(4);
          return c === k[0] && p === k[1] && b === k[2] && f === k[3];
        }, s.prototype.readData = function(a) {
          if (this.checkOffset(a), a === 0)
            return [];
          var c = this.data.slice(this.zero + this.index, this.zero + this.index + a);
          return this.index += a, c;
        }, o.exports = s;
      }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, o, l) {
        var i = e("../utils");
        function s(a) {
          this.data = a, this.length = a.length, this.index = 0, this.zero = 0;
        }
        s.prototype = { checkOffset: function(a) {
          this.checkIndex(this.index + a);
        }, checkIndex: function(a) {
          if (this.length < this.zero + a || a < 0)
            throw new Error("End of data reached (data length = " + this.length + ", asked index = " + a + "). Corrupted zip ?");
        }, setIndex: function(a) {
          this.checkIndex(a), this.index = a;
        }, skip: function(a) {
          this.setIndex(this.index + a);
        }, byteAt: function() {
        }, readInt: function(a) {
          var c, p = 0;
          for (this.checkOffset(a), c = this.index + a - 1; c >= this.index; c--)
            p = (p << 8) + this.byteAt(c);
          return this.index += a, p;
        }, readString: function(a) {
          return i.transformTo("string", this.readData(a));
        }, readData: function() {
        }, lastIndexOfSignature: function() {
        }, readAndCheckSignature: function() {
        }, readDate: function() {
          var a = this.readInt(4);
          return new Date(Date.UTC(1980 + (a >> 25 & 127), (a >> 21 & 15) - 1, a >> 16 & 31, a >> 11 & 31, a >> 5 & 63, (31 & a) << 1));
        } }, o.exports = s;
      }, { "../utils": 32 }], 19: [function(e, o, l) {
        var i = e("./Uint8ArrayReader");
        function s(a) {
          i.call(this, a);
        }
        e("../utils").inherits(s, i), s.prototype.readData = function(a) {
          this.checkOffset(a);
          var c = this.data.slice(this.zero + this.index, this.zero + this.index + a);
          return this.index += a, c;
        }, o.exports = s;
      }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, o, l) {
        var i = e("./DataReader");
        function s(a) {
          i.call(this, a);
        }
        e("../utils").inherits(s, i), s.prototype.byteAt = function(a) {
          return this.data.charCodeAt(this.zero + a);
        }, s.prototype.lastIndexOfSignature = function(a) {
          return this.data.lastIndexOf(a) - this.zero;
        }, s.prototype.readAndCheckSignature = function(a) {
          return a === this.readData(4);
        }, s.prototype.readData = function(a) {
          this.checkOffset(a);
          var c = this.data.slice(this.zero + this.index, this.zero + this.index + a);
          return this.index += a, c;
        }, o.exports = s;
      }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, o, l) {
        var i = e("./ArrayReader");
        function s(a) {
          i.call(this, a);
        }
        e("../utils").inherits(s, i), s.prototype.readData = function(a) {
          if (this.checkOffset(a), a === 0)
            return new Uint8Array(0);
          var c = this.data.subarray(this.zero + this.index, this.zero + this.index + a);
          return this.index += a, c;
        }, o.exports = s;
      }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, o, l) {
        var i = e("../utils"), s = e("../support"), a = e("./ArrayReader"), c = e("./StringReader"), p = e("./NodeBufferReader"), b = e("./Uint8ArrayReader");
        o.exports = function(f) {
          var k = i.getTypeOf(f);
          return i.checkSupport(k), k !== "string" || s.uint8array ? k === "nodebuffer" ? new p(f) : s.uint8array ? new b(i.transformTo("uint8array", f)) : new a(i.transformTo("array", f)) : new c(f);
        };
      }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, o, l) {
        l.LOCAL_FILE_HEADER = "PK", l.CENTRAL_FILE_HEADER = "PK", l.CENTRAL_DIRECTORY_END = "PK", l.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", l.ZIP64_CENTRAL_DIRECTORY_END = "PK", l.DATA_DESCRIPTOR = "PK\x07\b";
      }, {}], 24: [function(e, o, l) {
        var i = e("./GenericWorker"), s = e("../utils");
        function a(c) {
          i.call(this, "ConvertWorker to " + c), this.destType = c;
        }
        s.inherits(a, i), a.prototype.processChunk = function(c) {
          this.push({ data: s.transformTo(this.destType, c.data), meta: c.meta });
        }, o.exports = a;
      }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, o, l) {
        var i = e("./GenericWorker"), s = e("../crc32");
        function a() {
          i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
        }
        e("../utils").inherits(a, i), a.prototype.processChunk = function(c) {
          this.streamInfo.crc32 = s(c.data, this.streamInfo.crc32 || 0), this.push(c);
        }, o.exports = a;
      }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, o, l) {
        var i = e("../utils"), s = e("./GenericWorker");
        function a(c) {
          s.call(this, "DataLengthProbe for " + c), this.propName = c, this.withStreamInfo(c, 0);
        }
        i.inherits(a, s), a.prototype.processChunk = function(c) {
          if (c) {
            var p = this.streamInfo[this.propName] || 0;
            this.streamInfo[this.propName] = p + c.data.length;
          }
          s.prototype.processChunk.call(this, c);
        }, o.exports = a;
      }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, o, l) {
        var i = e("../utils"), s = e("./GenericWorker");
        function a(c) {
          s.call(this, "DataWorker");
          var p = this;
          this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, c.then(function(b) {
            p.dataIsReady = !0, p.data = b, p.max = b && b.length || 0, p.type = i.getTypeOf(b), p.isPaused || p._tickAndRepeat();
          }, function(b) {
            p.error(b);
          });
        }
        i.inherits(a, s), a.prototype.cleanUp = function() {
          s.prototype.cleanUp.call(this), this.data = null;
        }, a.prototype.resume = function() {
          return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, i.delay(this._tickAndRepeat, [], this)), !0);
        }, a.prototype._tickAndRepeat = function() {
          this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
        }, a.prototype._tick = function() {
          if (this.isPaused || this.isFinished)
            return !1;
          var c = null, p = Math.min(this.max, this.index + 16384);
          if (this.index >= this.max)
            return this.end();
          switch (this.type) {
            case "string":
              c = this.data.substring(this.index, p);
              break;
            case "uint8array":
              c = this.data.subarray(this.index, p);
              break;
            case "array":
            case "nodebuffer":
              c = this.data.slice(this.index, p);
          }
          return this.index = p, this.push({ data: c, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
        }, o.exports = a;
      }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, o, l) {
        function i(s) {
          this.name = s || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
        }
        i.prototype = { push: function(s) {
          this.emit("data", s);
        }, end: function() {
          if (this.isFinished)
            return !1;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = !0;
          } catch (s) {
            this.emit("error", s);
          }
          return !0;
        }, error: function(s) {
          return !this.isFinished && (this.isPaused ? this.generatedError = s : (this.isFinished = !0, this.emit("error", s), this.previous && this.previous.error(s), this.cleanUp()), !0);
        }, on: function(s, a) {
          return this._listeners[s].push(a), this;
        }, cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        }, emit: function(s, a) {
          if (this._listeners[s])
            for (var c = 0; c < this._listeners[s].length; c++)
              this._listeners[s][c].call(this, a);
        }, pipe: function(s) {
          return s.registerPrevious(this);
        }, registerPrevious: function(s) {
          if (this.isLocked)
            throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
          var a = this;
          return s.on("data", function(c) {
            a.processChunk(c);
          }), s.on("end", function() {
            a.end();
          }), s.on("error", function(c) {
            a.error(c);
          }), this;
        }, pause: function() {
          return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
        }, resume: function() {
          if (!this.isPaused || this.isFinished)
            return !1;
          var s = this.isPaused = !1;
          return this.generatedError && (this.error(this.generatedError), s = !0), this.previous && this.previous.resume(), !s;
        }, flush: function() {
        }, processChunk: function(s) {
          this.push(s);
        }, withStreamInfo: function(s, a) {
          return this.extraStreamInfo[s] = a, this.mergeStreamInfo(), this;
        }, mergeStreamInfo: function() {
          for (var s in this.extraStreamInfo)
            Object.prototype.hasOwnProperty.call(this.extraStreamInfo, s) && (this.streamInfo[s] = this.extraStreamInfo[s]);
        }, lock: function() {
          if (this.isLocked)
            throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = !0, this.previous && this.previous.lock();
        }, toString: function() {
          var s = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + s : s;
        } }, o.exports = i;
      }, {}], 29: [function(e, o, l) {
        var i = e("../utils"), s = e("./ConvertWorker"), a = e("./GenericWorker"), c = e("../base64"), p = e("../support"), b = e("../external"), f = null;
        if (p.nodestream)
          try {
            f = e("../nodejs/NodejsStreamOutputAdapter");
          } catch {
          }
        function k(y, d) {
          return new b.Promise(function(m, _) {
            var v = [], A = y._internalType, S = y._outputType, E = y._mimeType;
            y.on("data", function(P, D) {
              v.push(P), d && d(D);
            }).on("error", function(P) {
              v = [], _(P);
            }).on("end", function() {
              try {
                var P = function(D, Z, B) {
                  switch (D) {
                    case "blob":
                      return i.newBlob(i.transformTo("arraybuffer", Z), B);
                    case "base64":
                      return c.encode(Z);
                    default:
                      return i.transformTo(D, Z);
                  }
                }(S, function(D, Z) {
                  var B, W = 0, Y = null, x = 0;
                  for (B = 0; B < Z.length; B++)
                    x += Z[B].length;
                  switch (D) {
                    case "string":
                      return Z.join("");
                    case "array":
                      return Array.prototype.concat.apply([], Z);
                    case "uint8array":
                      for (Y = new Uint8Array(x), B = 0; B < Z.length; B++)
                        Y.set(Z[B], W), W += Z[B].length;
                      return Y;
                    case "nodebuffer":
                      return Buffer.concat(Z);
                    default:
                      throw new Error("concat : unsupported type '" + D + "'");
                  }
                }(A, v), E);
                m(P);
              } catch (D) {
                _(D);
              }
              v = [];
            }).resume();
          });
        }
        function h(y, d, m) {
          var _ = d;
          switch (d) {
            case "blob":
            case "arraybuffer":
              _ = "uint8array";
              break;
            case "base64":
              _ = "string";
          }
          try {
            this._internalType = _, this._outputType = d, this._mimeType = m, i.checkSupport(_), this._worker = y.pipe(new s(_)), y.lock();
          } catch (v) {
            this._worker = new a("error"), this._worker.error(v);
          }
        }
        h.prototype = { accumulate: function(y) {
          return k(this, y);
        }, on: function(y, d) {
          var m = this;
          return y === "data" ? this._worker.on(y, function(_) {
            d.call(m, _.data, _.meta);
          }) : this._worker.on(y, function() {
            i.delay(d, arguments, m);
          }), this;
        }, resume: function() {
          return i.delay(this._worker.resume, [], this._worker), this;
        }, pause: function() {
          return this._worker.pause(), this;
        }, toNodejsStream: function(y) {
          if (i.checkSupport("nodestream"), this._outputType !== "nodebuffer")
            throw new Error(this._outputType + " is not supported by this method");
          return new f(this, { objectMode: this._outputType !== "nodebuffer" }, y);
        } }, o.exports = h;
      }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, o, l) {
        if (l.base64 = !0, l.array = !0, l.string = !0, l.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", l.nodebuffer = typeof Buffer < "u", l.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
          l.blob = !1;
        else {
          var i = new ArrayBuffer(0);
          try {
            l.blob = new Blob([i], { type: "application/zip" }).size === 0;
          } catch {
            try {
              var s = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              s.append(i), l.blob = s.getBlob("application/zip").size === 0;
            } catch {
              l.blob = !1;
            }
          }
        }
        try {
          l.nodestream = !!e("readable-stream").Readable;
        } catch {
          l.nodestream = !1;
        }
      }, { "readable-stream": 16 }], 31: [function(e, o, l) {
        for (var i = e("./utils"), s = e("./support"), a = e("./nodejsUtils"), c = e("./stream/GenericWorker"), p = new Array(256), b = 0; b < 256; b++)
          p[b] = 252 <= b ? 6 : 248 <= b ? 5 : 240 <= b ? 4 : 224 <= b ? 3 : 192 <= b ? 2 : 1;
        p[254] = p[254] = 1;
        function f() {
          c.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function k() {
          c.call(this, "utf-8 encode");
        }
        l.utf8encode = function(h) {
          return s.nodebuffer ? a.newBufferFrom(h, "utf-8") : function(y) {
            var d, m, _, v, A, S = y.length, E = 0;
            for (v = 0; v < S; v++)
              (64512 & (m = y.charCodeAt(v))) == 55296 && v + 1 < S && (64512 & (_ = y.charCodeAt(v + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (_ - 56320), v++), E += m < 128 ? 1 : m < 2048 ? 2 : m < 65536 ? 3 : 4;
            for (d = s.uint8array ? new Uint8Array(E) : new Array(E), v = A = 0; A < E; v++)
              (64512 & (m = y.charCodeAt(v))) == 55296 && v + 1 < S && (64512 & (_ = y.charCodeAt(v + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (_ - 56320), v++), m < 128 ? d[A++] = m : (m < 2048 ? d[A++] = 192 | m >>> 6 : (m < 65536 ? d[A++] = 224 | m >>> 12 : (d[A++] = 240 | m >>> 18, d[A++] = 128 | m >>> 12 & 63), d[A++] = 128 | m >>> 6 & 63), d[A++] = 128 | 63 & m);
            return d;
          }(h);
        }, l.utf8decode = function(h) {
          return s.nodebuffer ? i.transformTo("nodebuffer", h).toString("utf-8") : function(y) {
            var d, m, _, v, A = y.length, S = new Array(2 * A);
            for (d = m = 0; d < A; )
              if ((_ = y[d++]) < 128)
                S[m++] = _;
              else if (4 < (v = p[_]))
                S[m++] = 65533, d += v - 1;
              else {
                for (_ &= v === 2 ? 31 : v === 3 ? 15 : 7; 1 < v && d < A; )
                  _ = _ << 6 | 63 & y[d++], v--;
                1 < v ? S[m++] = 65533 : _ < 65536 ? S[m++] = _ : (_ -= 65536, S[m++] = 55296 | _ >> 10 & 1023, S[m++] = 56320 | 1023 & _);
              }
            return S.length !== m && (S.subarray ? S = S.subarray(0, m) : S.length = m), i.applyFromCharCode(S);
          }(h = i.transformTo(s.uint8array ? "uint8array" : "array", h));
        }, i.inherits(f, c), f.prototype.processChunk = function(h) {
          var y = i.transformTo(s.uint8array ? "uint8array" : "array", h.data);
          if (this.leftOver && this.leftOver.length) {
            if (s.uint8array) {
              var d = y;
              (y = new Uint8Array(d.length + this.leftOver.length)).set(this.leftOver, 0), y.set(d, this.leftOver.length);
            } else
              y = this.leftOver.concat(y);
            this.leftOver = null;
          }
          var m = function(v, A) {
            var S;
            for ((A = A || v.length) > v.length && (A = v.length), S = A - 1; 0 <= S && (192 & v[S]) == 128; )
              S--;
            return S < 0 || S === 0 ? A : S + p[v[S]] > A ? S : A;
          }(y), _ = y;
          m !== y.length && (s.uint8array ? (_ = y.subarray(0, m), this.leftOver = y.subarray(m, y.length)) : (_ = y.slice(0, m), this.leftOver = y.slice(m, y.length))), this.push({ data: l.utf8decode(_), meta: h.meta });
        }, f.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: l.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, l.Utf8DecodeWorker = f, i.inherits(k, c), k.prototype.processChunk = function(h) {
          this.push({ data: l.utf8encode(h.data), meta: h.meta });
        }, l.Utf8EncodeWorker = k;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, o, l) {
        var i = e("./support"), s = e("./base64"), a = e("./nodejsUtils"), c = e("./external");
        function p(d) {
          return d;
        }
        function b(d, m) {
          for (var _ = 0; _ < d.length; ++_)
            m[_] = 255 & d.charCodeAt(_);
          return m;
        }
        e("setimmediate"), l.newBlob = function(d, m) {
          l.checkSupport("blob");
          try {
            return new Blob([d], { type: m });
          } catch {
            try {
              var _ = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              return _.append(d), _.getBlob(m);
            } catch {
              throw new Error("Bug : can't construct the Blob.");
            }
          }
        };
        var f = { stringifyByChunk: function(d, m, _) {
          var v = [], A = 0, S = d.length;
          if (S <= _)
            return String.fromCharCode.apply(null, d);
          for (; A < S; )
            m === "array" || m === "nodebuffer" ? v.push(String.fromCharCode.apply(null, d.slice(A, Math.min(A + _, S)))) : v.push(String.fromCharCode.apply(null, d.subarray(A, Math.min(A + _, S)))), A += _;
          return v.join("");
        }, stringifyByChar: function(d) {
          for (var m = "", _ = 0; _ < d.length; _++)
            m += String.fromCharCode(d[_]);
          return m;
        }, applyCanBeUsed: { uint8array: function() {
          try {
            return i.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
          } catch {
            return !1;
          }
        }(), nodebuffer: function() {
          try {
            return i.nodebuffer && String.fromCharCode.apply(null, a.allocBuffer(1)).length === 1;
          } catch {
            return !1;
          }
        }() } };
        function k(d) {
          var m = 65536, _ = l.getTypeOf(d), v = !0;
          if (_ === "uint8array" ? v = f.applyCanBeUsed.uint8array : _ === "nodebuffer" && (v = f.applyCanBeUsed.nodebuffer), v)
            for (; 1 < m; )
              try {
                return f.stringifyByChunk(d, _, m);
              } catch {
                m = Math.floor(m / 2);
              }
          return f.stringifyByChar(d);
        }
        function h(d, m) {
          for (var _ = 0; _ < d.length; _++)
            m[_] = d[_];
          return m;
        }
        l.applyFromCharCode = k;
        var y = {};
        y.string = { string: p, array: function(d) {
          return b(d, new Array(d.length));
        }, arraybuffer: function(d) {
          return y.string.uint8array(d).buffer;
        }, uint8array: function(d) {
          return b(d, new Uint8Array(d.length));
        }, nodebuffer: function(d) {
          return b(d, a.allocBuffer(d.length));
        } }, y.array = { string: k, array: p, arraybuffer: function(d) {
          return new Uint8Array(d).buffer;
        }, uint8array: function(d) {
          return new Uint8Array(d);
        }, nodebuffer: function(d) {
          return a.newBufferFrom(d);
        } }, y.arraybuffer = { string: function(d) {
          return k(new Uint8Array(d));
        }, array: function(d) {
          return h(new Uint8Array(d), new Array(d.byteLength));
        }, arraybuffer: p, uint8array: function(d) {
          return new Uint8Array(d);
        }, nodebuffer: function(d) {
          return a.newBufferFrom(new Uint8Array(d));
        } }, y.uint8array = { string: k, array: function(d) {
          return h(d, new Array(d.length));
        }, arraybuffer: function(d) {
          return d.buffer;
        }, uint8array: p, nodebuffer: function(d) {
          return a.newBufferFrom(d);
        } }, y.nodebuffer = { string: k, array: function(d) {
          return h(d, new Array(d.length));
        }, arraybuffer: function(d) {
          return y.nodebuffer.uint8array(d).buffer;
        }, uint8array: function(d) {
          return h(d, new Uint8Array(d.length));
        }, nodebuffer: p }, l.transformTo = function(d, m) {
          if (m = m || "", !d)
            return m;
          l.checkSupport(d);
          var _ = l.getTypeOf(m);
          return y[_][d](m);
        }, l.resolve = function(d) {
          for (var m = d.split("/"), _ = [], v = 0; v < m.length; v++) {
            var A = m[v];
            A === "." || A === "" && v !== 0 && v !== m.length - 1 || (A === ".." ? _.pop() : _.push(A));
          }
          return _.join("/");
        }, l.getTypeOf = function(d) {
          return typeof d == "string" ? "string" : Object.prototype.toString.call(d) === "[object Array]" ? "array" : i.nodebuffer && a.isBuffer(d) ? "nodebuffer" : i.uint8array && d instanceof Uint8Array ? "uint8array" : i.arraybuffer && d instanceof ArrayBuffer ? "arraybuffer" : void 0;
        }, l.checkSupport = function(d) {
          if (!i[d.toLowerCase()])
            throw new Error(d + " is not supported by this platform");
        }, l.MAX_VALUE_16BITS = 65535, l.MAX_VALUE_32BITS = -1, l.pretty = function(d) {
          var m, _, v = "";
          for (_ = 0; _ < (d || "").length; _++)
            v += "\\x" + ((m = d.charCodeAt(_)) < 16 ? "0" : "") + m.toString(16).toUpperCase();
          return v;
        }, l.delay = function(d, m, _) {
          setImmediate(function() {
            d.apply(_ || null, m || []);
          });
        }, l.inherits = function(d, m) {
          function _() {
          }
          _.prototype = m.prototype, d.prototype = new _();
        }, l.extend = function() {
          var d, m, _ = {};
          for (d = 0; d < arguments.length; d++)
            for (m in arguments[d])
              Object.prototype.hasOwnProperty.call(arguments[d], m) && _[m] === void 0 && (_[m] = arguments[d][m]);
          return _;
        }, l.prepareContent = function(d, m, _, v, A) {
          return c.Promise.resolve(m).then(function(S) {
            return i.blob && (S instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(S)) !== -1) && typeof FileReader < "u" ? new c.Promise(function(E, P) {
              var D = new FileReader();
              D.onload = function(Z) {
                E(Z.target.result);
              }, D.onerror = function(Z) {
                P(Z.target.error);
              }, D.readAsArrayBuffer(S);
            }) : S;
          }).then(function(S) {
            var E = l.getTypeOf(S);
            return E ? (E === "arraybuffer" ? S = l.transformTo("uint8array", S) : E === "string" && (A ? S = s.decode(S) : _ && v !== !0 && (S = function(P) {
              return b(P, i.uint8array ? new Uint8Array(P.length) : new Array(P.length));
            }(S))), S) : c.Promise.reject(new Error("Can't read the data of '" + d + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, o, l) {
        var i = e("./reader/readerFor"), s = e("./utils"), a = e("./signature"), c = e("./zipEntry"), p = e("./support");
        function b(f) {
          this.files = [], this.loadOptions = f;
        }
        b.prototype = { checkSignature: function(f) {
          if (!this.reader.readAndCheckSignature(f)) {
            this.reader.index -= 4;
            var k = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(k) + ", expected " + s.pretty(f) + ")");
          }
        }, isSignature: function(f, k) {
          var h = this.reader.index;
          this.reader.setIndex(f);
          var y = this.reader.readString(4) === k;
          return this.reader.setIndex(h), y;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var f = this.reader.readData(this.zipCommentLength), k = p.uint8array ? "uint8array" : "array", h = s.transformTo(k, f);
          this.zipComment = this.loadOptions.decodeFileName(h);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var f, k, h, y = this.zip64EndOfCentralSize - 44; 0 < y; )
            f = this.reader.readInt(2), k = this.reader.readInt(4), h = this.reader.readData(k), this.zip64ExtensibleData[f] = { id: f, length: k, value: h };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
            throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var f, k;
          for (f = 0; f < this.files.length; f++)
            k = this.files[f], this.reader.setIndex(k.localHeaderOffset), this.checkSignature(a.LOCAL_FILE_HEADER), k.readLocalPart(this.reader), k.handleUTF8(), k.processAttributes();
        }, readCentralDir: function() {
          var f;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER); )
            (f = new c({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(f);
          if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
            throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var f = this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);
          if (f < 0)
            throw this.isSignature(0, a.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
          this.reader.setIndex(f);
          var k = f;
          if (this.checkSignature(a.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
            if (this.zip64 = !0, (f = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
              throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(f), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, a.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
              throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var h = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (h += 20, h += 12 + this.zip64EndOfCentralSize);
          var y = k - h;
          if (0 < y)
            this.isSignature(k, a.CENTRAL_FILE_HEADER) || (this.reader.zero = y);
          else if (y < 0)
            throw new Error("Corrupted zip: missing " + Math.abs(y) + " bytes.");
        }, prepareReader: function(f) {
          this.reader = i(f);
        }, load: function(f) {
          this.prepareReader(f), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, o.exports = b;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, o, l) {
        var i = e("./reader/readerFor"), s = e("./utils"), a = e("./compressedObject"), c = e("./crc32"), p = e("./utf8"), b = e("./compressions"), f = e("./support");
        function k(h, y) {
          this.options = h, this.loadOptions = y;
        }
        k.prototype = { isEncrypted: function() {
          return (1 & this.bitFlag) == 1;
        }, useUTF8: function() {
          return (2048 & this.bitFlag) == 2048;
        }, readLocalPart: function(h) {
          var y, d;
          if (h.skip(22), this.fileNameLength = h.readInt(2), d = h.readInt(2), this.fileName = h.readData(this.fileNameLength), h.skip(d), this.compressedSize === -1 || this.uncompressedSize === -1)
            throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if ((y = function(m) {
            for (var _ in b)
              if (Object.prototype.hasOwnProperty.call(b, _) && b[_].magic === m)
                return b[_];
            return null;
          }(this.compressionMethod)) === null)
            throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
          this.decompressed = new a(this.compressedSize, this.uncompressedSize, this.crc32, y, h.readData(this.compressedSize));
        }, readCentralPart: function(h) {
          this.versionMadeBy = h.readInt(2), h.skip(2), this.bitFlag = h.readInt(2), this.compressionMethod = h.readString(2), this.date = h.readDate(), this.crc32 = h.readInt(4), this.compressedSize = h.readInt(4), this.uncompressedSize = h.readInt(4);
          var y = h.readInt(2);
          if (this.extraFieldsLength = h.readInt(2), this.fileCommentLength = h.readInt(2), this.diskNumberStart = h.readInt(2), this.internalFileAttributes = h.readInt(2), this.externalFileAttributes = h.readInt(4), this.localHeaderOffset = h.readInt(4), this.isEncrypted())
            throw new Error("Encrypted zip are not supported");
          h.skip(y), this.readExtraFields(h), this.parseZIP64ExtraField(h), this.fileComment = h.readData(this.fileCommentLength);
        }, processAttributes: function() {
          this.unixPermissions = null, this.dosPermissions = null;
          var h = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), h == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), h == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
        }, parseZIP64ExtraField: function() {
          if (this.extraFields[1]) {
            var h = i(this.extraFields[1].value);
            this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = h.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = h.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = h.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = h.readInt(4));
          }
        }, readExtraFields: function(h) {
          var y, d, m, _ = h.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); h.index + 4 < _; )
            y = h.readInt(2), d = h.readInt(2), m = h.readData(d), this.extraFields[y] = { id: y, length: d, value: m };
          h.setIndex(_);
        }, handleUTF8: function() {
          var h = f.uint8array ? "uint8array" : "array";
          if (this.useUTF8())
            this.fileNameStr = p.utf8decode(this.fileName), this.fileCommentStr = p.utf8decode(this.fileComment);
          else {
            var y = this.findExtraFieldUnicodePath();
            if (y !== null)
              this.fileNameStr = y;
            else {
              var d = s.transformTo(h, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(d);
            }
            var m = this.findExtraFieldUnicodeComment();
            if (m !== null)
              this.fileCommentStr = m;
            else {
              var _ = s.transformTo(h, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(_);
            }
          }
        }, findExtraFieldUnicodePath: function() {
          var h = this.extraFields[28789];
          if (h) {
            var y = i(h.value);
            return y.readInt(1) !== 1 || c(this.fileName) !== y.readInt(4) ? null : p.utf8decode(y.readData(h.length - 5));
          }
          return null;
        }, findExtraFieldUnicodeComment: function() {
          var h = this.extraFields[25461];
          if (h) {
            var y = i(h.value);
            return y.readInt(1) !== 1 || c(this.fileComment) !== y.readInt(4) ? null : p.utf8decode(y.readData(h.length - 5));
          }
          return null;
        } }, o.exports = k;
      }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, o, l) {
        function i(y, d, m) {
          this.name = y, this.dir = m.dir, this.date = m.date, this.comment = m.comment, this.unixPermissions = m.unixPermissions, this.dosPermissions = m.dosPermissions, this._data = d, this._dataBinary = m.binary, this.options = { compression: m.compression, compressionOptions: m.compressionOptions };
        }
        var s = e("./stream/StreamHelper"), a = e("./stream/DataWorker"), c = e("./utf8"), p = e("./compressedObject"), b = e("./stream/GenericWorker");
        i.prototype = { internalStream: function(y) {
          var d = null, m = "string";
          try {
            if (!y)
              throw new Error("No output type specified.");
            var _ = (m = y.toLowerCase()) === "string" || m === "text";
            m !== "binarystring" && m !== "text" || (m = "string"), d = this._decompressWorker();
            var v = !this._dataBinary;
            v && !_ && (d = d.pipe(new c.Utf8EncodeWorker())), !v && _ && (d = d.pipe(new c.Utf8DecodeWorker()));
          } catch (A) {
            (d = new b("error")).error(A);
          }
          return new s(d, m, "");
        }, async: function(y, d) {
          return this.internalStream(y).accumulate(d);
        }, nodeStream: function(y, d) {
          return this.internalStream(y || "nodebuffer").toNodejsStream(d);
        }, _compressWorker: function(y, d) {
          if (this._data instanceof p && this._data.compression.magic === y.magic)
            return this._data.getCompressedWorker();
          var m = this._decompressWorker();
          return this._dataBinary || (m = m.pipe(new c.Utf8EncodeWorker())), p.createWorkerFrom(m, y, d);
        }, _decompressWorker: function() {
          return this._data instanceof p ? this._data.getContentWorker() : this._data instanceof b ? this._data : new a(this._data);
        } };
        for (var f = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], k = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, h = 0; h < f.length; h++)
          i.prototype[f[h]] = k;
        o.exports = i;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, o, l) {
        (function(i) {
          var s, a, c = i.MutationObserver || i.WebKitMutationObserver;
          if (c) {
            var p = 0, b = new c(y), f = i.document.createTextNode("");
            b.observe(f, { characterData: !0 }), s = function() {
              f.data = p = ++p % 2;
            };
          } else if (i.setImmediate || i.MessageChannel === void 0)
            s = "document" in i && "onreadystatechange" in i.document.createElement("script") ? function() {
              var d = i.document.createElement("script");
              d.onreadystatechange = function() {
                y(), d.onreadystatechange = null, d.parentNode.removeChild(d), d = null;
              }, i.document.documentElement.appendChild(d);
            } : function() {
              setTimeout(y, 0);
            };
          else {
            var k = new i.MessageChannel();
            k.port1.onmessage = y, s = function() {
              k.port2.postMessage(0);
            };
          }
          var h = [];
          function y() {
            var d, m;
            a = !0;
            for (var _ = h.length; _; ) {
              for (m = h, h = [], d = -1; ++d < _; )
                m[d]();
              _ = h.length;
            }
            a = !1;
          }
          o.exports = function(d) {
            h.push(d) !== 1 || a || s();
          };
        }).call(this, typeof Mt < "u" ? Mt : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 37: [function(e, o, l) {
        var i = e("immediate");
        function s() {
        }
        var a = {}, c = ["REJECTED"], p = ["FULFILLED"], b = ["PENDING"];
        function f(_) {
          if (typeof _ != "function")
            throw new TypeError("resolver must be a function");
          this.state = b, this.queue = [], this.outcome = void 0, _ !== s && d(this, _);
        }
        function k(_, v, A) {
          this.promise = _, typeof v == "function" && (this.onFulfilled = v, this.callFulfilled = this.otherCallFulfilled), typeof A == "function" && (this.onRejected = A, this.callRejected = this.otherCallRejected);
        }
        function h(_, v, A) {
          i(function() {
            var S;
            try {
              S = v(A);
            } catch (E) {
              return a.reject(_, E);
            }
            S === _ ? a.reject(_, new TypeError("Cannot resolve promise with itself")) : a.resolve(_, S);
          });
        }
        function y(_) {
          var v = _ && _.then;
          if (_ && (typeof _ == "object" || typeof _ == "function") && typeof v == "function")
            return function() {
              v.apply(_, arguments);
            };
        }
        function d(_, v) {
          var A = !1;
          function S(D) {
            A || (A = !0, a.reject(_, D));
          }
          function E(D) {
            A || (A = !0, a.resolve(_, D));
          }
          var P = m(function() {
            v(E, S);
          });
          P.status === "error" && S(P.value);
        }
        function m(_, v) {
          var A = {};
          try {
            A.value = _(v), A.status = "success";
          } catch (S) {
            A.status = "error", A.value = S;
          }
          return A;
        }
        (o.exports = f).prototype.finally = function(_) {
          if (typeof _ != "function")
            return this;
          var v = this.constructor;
          return this.then(function(A) {
            return v.resolve(_()).then(function() {
              return A;
            });
          }, function(A) {
            return v.resolve(_()).then(function() {
              throw A;
            });
          });
        }, f.prototype.catch = function(_) {
          return this.then(null, _);
        }, f.prototype.then = function(_, v) {
          if (typeof _ != "function" && this.state === p || typeof v != "function" && this.state === c)
            return this;
          var A = new this.constructor(s);
          return this.state !== b ? h(A, this.state === p ? _ : v, this.outcome) : this.queue.push(new k(A, _, v)), A;
        }, k.prototype.callFulfilled = function(_) {
          a.resolve(this.promise, _);
        }, k.prototype.otherCallFulfilled = function(_) {
          h(this.promise, this.onFulfilled, _);
        }, k.prototype.callRejected = function(_) {
          a.reject(this.promise, _);
        }, k.prototype.otherCallRejected = function(_) {
          h(this.promise, this.onRejected, _);
        }, a.resolve = function(_, v) {
          var A = m(y, v);
          if (A.status === "error")
            return a.reject(_, A.value);
          var S = A.value;
          if (S)
            d(_, S);
          else {
            _.state = p, _.outcome = v;
            for (var E = -1, P = _.queue.length; ++E < P; )
              _.queue[E].callFulfilled(v);
          }
          return _;
        }, a.reject = function(_, v) {
          _.state = c, _.outcome = v;
          for (var A = -1, S = _.queue.length; ++A < S; )
            _.queue[A].callRejected(v);
          return _;
        }, f.resolve = function(_) {
          return _ instanceof this ? _ : a.resolve(new this(s), _);
        }, f.reject = function(_) {
          var v = new this(s);
          return a.reject(v, _);
        }, f.all = function(_) {
          var v = this;
          if (Object.prototype.toString.call(_) !== "[object Array]")
            return this.reject(new TypeError("must be an array"));
          var A = _.length, S = !1;
          if (!A)
            return this.resolve([]);
          for (var E = new Array(A), P = 0, D = -1, Z = new this(s); ++D < A; )
            B(_[D], D);
          return Z;
          function B(W, Y) {
            v.resolve(W).then(function(x) {
              E[Y] = x, ++P !== A || S || (S = !0, a.resolve(Z, E));
            }, function(x) {
              S || (S = !0, a.reject(Z, x));
            });
          }
        }, f.race = function(_) {
          var v = this;
          if (Object.prototype.toString.call(_) !== "[object Array]")
            return this.reject(new TypeError("must be an array"));
          var A = _.length, S = !1;
          if (!A)
            return this.resolve([]);
          for (var E = -1, P = new this(s); ++E < A; )
            D = _[E], v.resolve(D).then(function(Z) {
              S || (S = !0, a.resolve(P, Z));
            }, function(Z) {
              S || (S = !0, a.reject(P, Z));
            });
          var D;
          return P;
        };
      }, { immediate: 36 }], 38: [function(e, o, l) {
        var i = {};
        (0, e("./lib/utils/common").assign)(i, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), o.exports = i;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, o, l) {
        var i = e("./zlib/deflate"), s = e("./utils/common"), a = e("./utils/strings"), c = e("./zlib/messages"), p = e("./zlib/zstream"), b = Object.prototype.toString, f = 0, k = -1, h = 0, y = 8;
        function d(_) {
          if (!(this instanceof d))
            return new d(_);
          this.options = s.assign({ level: k, method: y, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: h, to: "" }, _ || {});
          var v = this.options;
          v.raw && 0 < v.windowBits ? v.windowBits = -v.windowBits : v.gzip && 0 < v.windowBits && v.windowBits < 16 && (v.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new p(), this.strm.avail_out = 0;
          var A = i.deflateInit2(this.strm, v.level, v.method, v.windowBits, v.memLevel, v.strategy);
          if (A !== f)
            throw new Error(c[A]);
          if (v.header && i.deflateSetHeader(this.strm, v.header), v.dictionary) {
            var S;
            if (S = typeof v.dictionary == "string" ? a.string2buf(v.dictionary) : b.call(v.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(v.dictionary) : v.dictionary, (A = i.deflateSetDictionary(this.strm, S)) !== f)
              throw new Error(c[A]);
            this._dict_set = !0;
          }
        }
        function m(_, v) {
          var A = new d(v);
          if (A.push(_, !0), A.err)
            throw A.msg || c[A.err];
          return A.result;
        }
        d.prototype.push = function(_, v) {
          var A, S, E = this.strm, P = this.options.chunkSize;
          if (this.ended)
            return !1;
          S = v === ~~v ? v : v === !0 ? 4 : 0, typeof _ == "string" ? E.input = a.string2buf(_) : b.call(_) === "[object ArrayBuffer]" ? E.input = new Uint8Array(_) : E.input = _, E.next_in = 0, E.avail_in = E.input.length;
          do {
            if (E.avail_out === 0 && (E.output = new s.Buf8(P), E.next_out = 0, E.avail_out = P), (A = i.deflate(E, S)) !== 1 && A !== f)
              return this.onEnd(A), !(this.ended = !0);
            E.avail_out !== 0 && (E.avail_in !== 0 || S !== 4 && S !== 2) || (this.options.to === "string" ? this.onData(a.buf2binstring(s.shrinkBuf(E.output, E.next_out))) : this.onData(s.shrinkBuf(E.output, E.next_out)));
          } while ((0 < E.avail_in || E.avail_out === 0) && A !== 1);
          return S === 4 ? (A = i.deflateEnd(this.strm), this.onEnd(A), this.ended = !0, A === f) : S !== 2 || (this.onEnd(f), !(E.avail_out = 0));
        }, d.prototype.onData = function(_) {
          this.chunks.push(_);
        }, d.prototype.onEnd = function(_) {
          _ === f && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = _, this.msg = this.strm.msg;
        }, l.Deflate = d, l.deflate = m, l.deflateRaw = function(_, v) {
          return (v = v || {}).raw = !0, m(_, v);
        }, l.gzip = function(_, v) {
          return (v = v || {}).gzip = !0, m(_, v);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, o, l) {
        var i = e("./zlib/inflate"), s = e("./utils/common"), a = e("./utils/strings"), c = e("./zlib/constants"), p = e("./zlib/messages"), b = e("./zlib/zstream"), f = e("./zlib/gzheader"), k = Object.prototype.toString;
        function h(d) {
          if (!(this instanceof h))
            return new h(d);
          this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, d || {});
          var m = this.options;
          m.raw && 0 <= m.windowBits && m.windowBits < 16 && (m.windowBits = -m.windowBits, m.windowBits === 0 && (m.windowBits = -15)), !(0 <= m.windowBits && m.windowBits < 16) || d && d.windowBits || (m.windowBits += 32), 15 < m.windowBits && m.windowBits < 48 && !(15 & m.windowBits) && (m.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new b(), this.strm.avail_out = 0;
          var _ = i.inflateInit2(this.strm, m.windowBits);
          if (_ !== c.Z_OK)
            throw new Error(p[_]);
          this.header = new f(), i.inflateGetHeader(this.strm, this.header);
        }
        function y(d, m) {
          var _ = new h(m);
          if (_.push(d, !0), _.err)
            throw _.msg || p[_.err];
          return _.result;
        }
        h.prototype.push = function(d, m) {
          var _, v, A, S, E, P, D = this.strm, Z = this.options.chunkSize, B = this.options.dictionary, W = !1;
          if (this.ended)
            return !1;
          v = m === ~~m ? m : m === !0 ? c.Z_FINISH : c.Z_NO_FLUSH, typeof d == "string" ? D.input = a.binstring2buf(d) : k.call(d) === "[object ArrayBuffer]" ? D.input = new Uint8Array(d) : D.input = d, D.next_in = 0, D.avail_in = D.input.length;
          do {
            if (D.avail_out === 0 && (D.output = new s.Buf8(Z), D.next_out = 0, D.avail_out = Z), (_ = i.inflate(D, c.Z_NO_FLUSH)) === c.Z_NEED_DICT && B && (P = typeof B == "string" ? a.string2buf(B) : k.call(B) === "[object ArrayBuffer]" ? new Uint8Array(B) : B, _ = i.inflateSetDictionary(this.strm, P)), _ === c.Z_BUF_ERROR && W === !0 && (_ = c.Z_OK, W = !1), _ !== c.Z_STREAM_END && _ !== c.Z_OK)
              return this.onEnd(_), !(this.ended = !0);
            D.next_out && (D.avail_out !== 0 && _ !== c.Z_STREAM_END && (D.avail_in !== 0 || v !== c.Z_FINISH && v !== c.Z_SYNC_FLUSH) || (this.options.to === "string" ? (A = a.utf8border(D.output, D.next_out), S = D.next_out - A, E = a.buf2string(D.output, A), D.next_out = S, D.avail_out = Z - S, S && s.arraySet(D.output, D.output, A, S, 0), this.onData(E)) : this.onData(s.shrinkBuf(D.output, D.next_out)))), D.avail_in === 0 && D.avail_out === 0 && (W = !0);
          } while ((0 < D.avail_in || D.avail_out === 0) && _ !== c.Z_STREAM_END);
          return _ === c.Z_STREAM_END && (v = c.Z_FINISH), v === c.Z_FINISH ? (_ = i.inflateEnd(this.strm), this.onEnd(_), this.ended = !0, _ === c.Z_OK) : v !== c.Z_SYNC_FLUSH || (this.onEnd(c.Z_OK), !(D.avail_out = 0));
        }, h.prototype.onData = function(d) {
          this.chunks.push(d);
        }, h.prototype.onEnd = function(d) {
          d === c.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = d, this.msg = this.strm.msg;
        }, l.Inflate = h, l.inflate = y, l.inflateRaw = function(d, m) {
          return (m = m || {}).raw = !0, y(d, m);
        }, l.ungzip = y;
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, o, l) {
        var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
        l.assign = function(c) {
          for (var p = Array.prototype.slice.call(arguments, 1); p.length; ) {
            var b = p.shift();
            if (b) {
              if (typeof b != "object")
                throw new TypeError(b + "must be non-object");
              for (var f in b)
                b.hasOwnProperty(f) && (c[f] = b[f]);
            }
          }
          return c;
        }, l.shrinkBuf = function(c, p) {
          return c.length === p ? c : c.subarray ? c.subarray(0, p) : (c.length = p, c);
        };
        var s = { arraySet: function(c, p, b, f, k) {
          if (p.subarray && c.subarray)
            c.set(p.subarray(b, b + f), k);
          else
            for (var h = 0; h < f; h++)
              c[k + h] = p[b + h];
        }, flattenChunks: function(c) {
          var p, b, f, k, h, y;
          for (p = f = 0, b = c.length; p < b; p++)
            f += c[p].length;
          for (y = new Uint8Array(f), p = k = 0, b = c.length; p < b; p++)
            h = c[p], y.set(h, k), k += h.length;
          return y;
        } }, a = { arraySet: function(c, p, b, f, k) {
          for (var h = 0; h < f; h++)
            c[k + h] = p[b + h];
        }, flattenChunks: function(c) {
          return [].concat.apply([], c);
        } };
        l.setTyped = function(c) {
          c ? (l.Buf8 = Uint8Array, l.Buf16 = Uint16Array, l.Buf32 = Int32Array, l.assign(l, s)) : (l.Buf8 = Array, l.Buf16 = Array, l.Buf32 = Array, l.assign(l, a));
        }, l.setTyped(i);
      }, {}], 42: [function(e, o, l) {
        var i = e("./common"), s = !0, a = !0;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch {
          s = !1;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch {
          a = !1;
        }
        for (var c = new i.Buf8(256), p = 0; p < 256; p++)
          c[p] = 252 <= p ? 6 : 248 <= p ? 5 : 240 <= p ? 4 : 224 <= p ? 3 : 192 <= p ? 2 : 1;
        function b(f, k) {
          if (k < 65537 && (f.subarray && a || !f.subarray && s))
            return String.fromCharCode.apply(null, i.shrinkBuf(f, k));
          for (var h = "", y = 0; y < k; y++)
            h += String.fromCharCode(f[y]);
          return h;
        }
        c[254] = c[254] = 1, l.string2buf = function(f) {
          var k, h, y, d, m, _ = f.length, v = 0;
          for (d = 0; d < _; d++)
            (64512 & (h = f.charCodeAt(d))) == 55296 && d + 1 < _ && (64512 & (y = f.charCodeAt(d + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (y - 56320), d++), v += h < 128 ? 1 : h < 2048 ? 2 : h < 65536 ? 3 : 4;
          for (k = new i.Buf8(v), d = m = 0; m < v; d++)
            (64512 & (h = f.charCodeAt(d))) == 55296 && d + 1 < _ && (64512 & (y = f.charCodeAt(d + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (y - 56320), d++), h < 128 ? k[m++] = h : (h < 2048 ? k[m++] = 192 | h >>> 6 : (h < 65536 ? k[m++] = 224 | h >>> 12 : (k[m++] = 240 | h >>> 18, k[m++] = 128 | h >>> 12 & 63), k[m++] = 128 | h >>> 6 & 63), k[m++] = 128 | 63 & h);
          return k;
        }, l.buf2binstring = function(f) {
          return b(f, f.length);
        }, l.binstring2buf = function(f) {
          for (var k = new i.Buf8(f.length), h = 0, y = k.length; h < y; h++)
            k[h] = f.charCodeAt(h);
          return k;
        }, l.buf2string = function(f, k) {
          var h, y, d, m, _ = k || f.length, v = new Array(2 * _);
          for (h = y = 0; h < _; )
            if ((d = f[h++]) < 128)
              v[y++] = d;
            else if (4 < (m = c[d]))
              v[y++] = 65533, h += m - 1;
            else {
              for (d &= m === 2 ? 31 : m === 3 ? 15 : 7; 1 < m && h < _; )
                d = d << 6 | 63 & f[h++], m--;
              1 < m ? v[y++] = 65533 : d < 65536 ? v[y++] = d : (d -= 65536, v[y++] = 55296 | d >> 10 & 1023, v[y++] = 56320 | 1023 & d);
            }
          return b(v, y);
        }, l.utf8border = function(f, k) {
          var h;
          for ((k = k || f.length) > f.length && (k = f.length), h = k - 1; 0 <= h && (192 & f[h]) == 128; )
            h--;
          return h < 0 || h === 0 ? k : h + c[f[h]] > k ? h : k;
        };
      }, { "./common": 41 }], 43: [function(e, o, l) {
        o.exports = function(i, s, a, c) {
          for (var p = 65535 & i | 0, b = i >>> 16 & 65535 | 0, f = 0; a !== 0; ) {
            for (a -= f = 2e3 < a ? 2e3 : a; b = b + (p = p + s[c++] | 0) | 0, --f; )
              ;
            p %= 65521, b %= 65521;
          }
          return p | b << 16 | 0;
        };
      }, {}], 44: [function(e, o, l) {
        o.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, {}], 45: [function(e, o, l) {
        var i = function() {
          for (var s, a = [], c = 0; c < 256; c++) {
            s = c;
            for (var p = 0; p < 8; p++)
              s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
            a[c] = s;
          }
          return a;
        }();
        o.exports = function(s, a, c, p) {
          var b = i, f = p + c;
          s ^= -1;
          for (var k = p; k < f; k++)
            s = s >>> 8 ^ b[255 & (s ^ a[k])];
          return -1 ^ s;
        };
      }, {}], 46: [function(e, o, l) {
        var i, s = e("../utils/common"), a = e("./trees"), c = e("./adler32"), p = e("./crc32"), b = e("./messages"), f = 0, k = 4, h = 0, y = -2, d = -1, m = 4, _ = 2, v = 8, A = 9, S = 286, E = 30, P = 19, D = 2 * S + 1, Z = 15, B = 3, W = 258, Y = W + B + 1, x = 42, R = 113, u = 1, L = 2, et = 3, O = 4;
        function q(n, F) {
          return n.msg = b[F], F;
        }
        function j(n) {
          return (n << 1) - (4 < n ? 9 : 0);
        }
        function J(n) {
          for (var F = n.length; 0 <= --F; )
            n[F] = 0;
        }
        function N(n) {
          var F = n.state, T = F.pending;
          T > n.avail_out && (T = n.avail_out), T !== 0 && (s.arraySet(n.output, F.pending_buf, F.pending_out, T, n.next_out), n.next_out += T, F.pending_out += T, n.total_out += T, n.avail_out -= T, F.pending -= T, F.pending === 0 && (F.pending_out = 0));
        }
        function I(n, F) {
          a._tr_flush_block(n, 0 <= n.block_start ? n.block_start : -1, n.strstart - n.block_start, F), n.block_start = n.strstart, N(n.strm);
        }
        function Q(n, F) {
          n.pending_buf[n.pending++] = F;
        }
        function K(n, F) {
          n.pending_buf[n.pending++] = F >>> 8 & 255, n.pending_buf[n.pending++] = 255 & F;
        }
        function G(n, F) {
          var T, w, g = n.max_chain_length, C = n.strstart, U = n.prev_length, M = n.nice_match, z = n.strstart > n.w_size - Y ? n.strstart - (n.w_size - Y) : 0, $ = n.window, X = n.w_mask, H = n.prev, tt = n.strstart + W, ot = $[C + U - 1], it = $[C + U];
          n.prev_length >= n.good_match && (g >>= 2), M > n.lookahead && (M = n.lookahead);
          do
            if ($[(T = F) + U] === it && $[T + U - 1] === ot && $[T] === $[C] && $[++T] === $[C + 1]) {
              C += 2, T++;
              do
                ;
              while ($[++C] === $[++T] && $[++C] === $[++T] && $[++C] === $[++T] && $[++C] === $[++T] && $[++C] === $[++T] && $[++C] === $[++T] && $[++C] === $[++T] && $[++C] === $[++T] && C < tt);
              if (w = W - (tt - C), C = tt - W, U < w) {
                if (n.match_start = F, M <= (U = w))
                  break;
                ot = $[C + U - 1], it = $[C + U];
              }
            }
          while ((F = H[F & X]) > z && --g != 0);
          return U <= n.lookahead ? U : n.lookahead;
        }
        function st(n) {
          var F, T, w, g, C, U, M, z, $, X, H = n.w_size;
          do {
            if (g = n.window_size - n.lookahead - n.strstart, n.strstart >= H + (H - Y)) {
              for (s.arraySet(n.window, n.window, H, H, 0), n.match_start -= H, n.strstart -= H, n.block_start -= H, F = T = n.hash_size; w = n.head[--F], n.head[F] = H <= w ? w - H : 0, --T; )
                ;
              for (F = T = H; w = n.prev[--F], n.prev[F] = H <= w ? w - H : 0, --T; )
                ;
              g += H;
            }
            if (n.strm.avail_in === 0)
              break;
            if (U = n.strm, M = n.window, z = n.strstart + n.lookahead, $ = g, X = void 0, X = U.avail_in, $ < X && (X = $), T = X === 0 ? 0 : (U.avail_in -= X, s.arraySet(M, U.input, U.next_in, X, z), U.state.wrap === 1 ? U.adler = c(U.adler, M, X, z) : U.state.wrap === 2 && (U.adler = p(U.adler, M, X, z)), U.next_in += X, U.total_in += X, X), n.lookahead += T, n.lookahead + n.insert >= B)
              for (C = n.strstart - n.insert, n.ins_h = n.window[C], n.ins_h = (n.ins_h << n.hash_shift ^ n.window[C + 1]) & n.hash_mask; n.insert && (n.ins_h = (n.ins_h << n.hash_shift ^ n.window[C + B - 1]) & n.hash_mask, n.prev[C & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = C, C++, n.insert--, !(n.lookahead + n.insert < B)); )
                ;
          } while (n.lookahead < Y && n.strm.avail_in !== 0);
        }
        function lt(n, F) {
          for (var T, w; ; ) {
            if (n.lookahead < Y) {
              if (st(n), n.lookahead < Y && F === f)
                return u;
              if (n.lookahead === 0)
                break;
            }
            if (T = 0, n.lookahead >= B && (n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + B - 1]) & n.hash_mask, T = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart), T !== 0 && n.strstart - T <= n.w_size - Y && (n.match_length = G(n, T)), n.match_length >= B)
              if (w = a._tr_tally(n, n.strstart - n.match_start, n.match_length - B), n.lookahead -= n.match_length, n.match_length <= n.max_lazy_match && n.lookahead >= B) {
                for (n.match_length--; n.strstart++, n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + B - 1]) & n.hash_mask, T = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart, --n.match_length != 0; )
                  ;
                n.strstart++;
              } else
                n.strstart += n.match_length, n.match_length = 0, n.ins_h = n.window[n.strstart], n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + 1]) & n.hash_mask;
            else
              w = a._tr_tally(n, 0, n.window[n.strstart]), n.lookahead--, n.strstart++;
            if (w && (I(n, !1), n.strm.avail_out === 0))
              return u;
          }
          return n.insert = n.strstart < B - 1 ? n.strstart : B - 1, F === k ? (I(n, !0), n.strm.avail_out === 0 ? et : O) : n.last_lit && (I(n, !1), n.strm.avail_out === 0) ? u : L;
        }
        function nt(n, F) {
          for (var T, w, g; ; ) {
            if (n.lookahead < Y) {
              if (st(n), n.lookahead < Y && F === f)
                return u;
              if (n.lookahead === 0)
                break;
            }
            if (T = 0, n.lookahead >= B && (n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + B - 1]) & n.hash_mask, T = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart), n.prev_length = n.match_length, n.prev_match = n.match_start, n.match_length = B - 1, T !== 0 && n.prev_length < n.max_lazy_match && n.strstart - T <= n.w_size - Y && (n.match_length = G(n, T), n.match_length <= 5 && (n.strategy === 1 || n.match_length === B && 4096 < n.strstart - n.match_start) && (n.match_length = B - 1)), n.prev_length >= B && n.match_length <= n.prev_length) {
              for (g = n.strstart + n.lookahead - B, w = a._tr_tally(n, n.strstart - 1 - n.prev_match, n.prev_length - B), n.lookahead -= n.prev_length - 1, n.prev_length -= 2; ++n.strstart <= g && (n.ins_h = (n.ins_h << n.hash_shift ^ n.window[n.strstart + B - 1]) & n.hash_mask, T = n.prev[n.strstart & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = n.strstart), --n.prev_length != 0; )
                ;
              if (n.match_available = 0, n.match_length = B - 1, n.strstart++, w && (I(n, !1), n.strm.avail_out === 0))
                return u;
            } else if (n.match_available) {
              if ((w = a._tr_tally(n, 0, n.window[n.strstart - 1])) && I(n, !1), n.strstart++, n.lookahead--, n.strm.avail_out === 0)
                return u;
            } else
              n.match_available = 1, n.strstart++, n.lookahead--;
          }
          return n.match_available && (w = a._tr_tally(n, 0, n.window[n.strstart - 1]), n.match_available = 0), n.insert = n.strstart < B - 1 ? n.strstart : B - 1, F === k ? (I(n, !0), n.strm.avail_out === 0 ? et : O) : n.last_lit && (I(n, !1), n.strm.avail_out === 0) ? u : L;
        }
        function at(n, F, T, w, g) {
          this.good_length = n, this.max_lazy = F, this.nice_length = T, this.max_chain = w, this.func = g;
        }
        function dt() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * D), this.dyn_dtree = new s.Buf16(2 * (2 * E + 1)), this.bl_tree = new s.Buf16(2 * (2 * P + 1)), J(this.dyn_ltree), J(this.dyn_dtree), J(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(Z + 1), this.heap = new s.Buf16(2 * S + 1), J(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * S + 1), J(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function ut(n) {
          var F;
          return n && n.state ? (n.total_in = n.total_out = 0, n.data_type = _, (F = n.state).pending = 0, F.pending_out = 0, F.wrap < 0 && (F.wrap = -F.wrap), F.status = F.wrap ? x : R, n.adler = F.wrap === 2 ? 0 : 1, F.last_flush = f, a._tr_init(F), h) : q(n, y);
        }
        function gt(n) {
          var F = ut(n);
          return F === h && function(T) {
            T.window_size = 2 * T.w_size, J(T.head), T.max_lazy_match = i[T.level].max_lazy, T.good_match = i[T.level].good_length, T.nice_match = i[T.level].nice_length, T.max_chain_length = i[T.level].max_chain, T.strstart = 0, T.block_start = 0, T.lookahead = 0, T.insert = 0, T.match_length = T.prev_length = B - 1, T.match_available = 0, T.ins_h = 0;
          }(n.state), F;
        }
        function mt(n, F, T, w, g, C) {
          if (!n)
            return y;
          var U = 1;
          if (F === d && (F = 6), w < 0 ? (U = 0, w = -w) : 15 < w && (U = 2, w -= 16), g < 1 || A < g || T !== v || w < 8 || 15 < w || F < 0 || 9 < F || C < 0 || m < C)
            return q(n, y);
          w === 8 && (w = 9);
          var M = new dt();
          return (n.state = M).strm = n, M.wrap = U, M.gzhead = null, M.w_bits = w, M.w_size = 1 << M.w_bits, M.w_mask = M.w_size - 1, M.hash_bits = g + 7, M.hash_size = 1 << M.hash_bits, M.hash_mask = M.hash_size - 1, M.hash_shift = ~~((M.hash_bits + B - 1) / B), M.window = new s.Buf8(2 * M.w_size), M.head = new s.Buf16(M.hash_size), M.prev = new s.Buf16(M.w_size), M.lit_bufsize = 1 << g + 6, M.pending_buf_size = 4 * M.lit_bufsize, M.pending_buf = new s.Buf8(M.pending_buf_size), M.d_buf = 1 * M.lit_bufsize, M.l_buf = 3 * M.lit_bufsize, M.level = F, M.strategy = C, M.method = T, gt(n);
        }
        i = [new at(0, 0, 0, 0, function(n, F) {
          var T = 65535;
          for (T > n.pending_buf_size - 5 && (T = n.pending_buf_size - 5); ; ) {
            if (n.lookahead <= 1) {
              if (st(n), n.lookahead === 0 && F === f)
                return u;
              if (n.lookahead === 0)
                break;
            }
            n.strstart += n.lookahead, n.lookahead = 0;
            var w = n.block_start + T;
            if ((n.strstart === 0 || n.strstart >= w) && (n.lookahead = n.strstart - w, n.strstart = w, I(n, !1), n.strm.avail_out === 0) || n.strstart - n.block_start >= n.w_size - Y && (I(n, !1), n.strm.avail_out === 0))
              return u;
          }
          return n.insert = 0, F === k ? (I(n, !0), n.strm.avail_out === 0 ? et : O) : (n.strstart > n.block_start && (I(n, !1), n.strm.avail_out), u);
        }), new at(4, 4, 8, 4, lt), new at(4, 5, 16, 8, lt), new at(4, 6, 32, 32, lt), new at(4, 4, 16, 16, nt), new at(8, 16, 32, 32, nt), new at(8, 16, 128, 128, nt), new at(8, 32, 128, 256, nt), new at(32, 128, 258, 1024, nt), new at(32, 258, 258, 4096, nt)], l.deflateInit = function(n, F) {
          return mt(n, F, v, 15, 8, 0);
        }, l.deflateInit2 = mt, l.deflateReset = gt, l.deflateResetKeep = ut, l.deflateSetHeader = function(n, F) {
          return n && n.state ? n.state.wrap !== 2 ? y : (n.state.gzhead = F, h) : y;
        }, l.deflate = function(n, F) {
          var T, w, g, C;
          if (!n || !n.state || 5 < F || F < 0)
            return n ? q(n, y) : y;
          if (w = n.state, !n.output || !n.input && n.avail_in !== 0 || w.status === 666 && F !== k)
            return q(n, n.avail_out === 0 ? -5 : y);
          if (w.strm = n, T = w.last_flush, w.last_flush = F, w.status === x)
            if (w.wrap === 2)
              n.adler = 0, Q(w, 31), Q(w, 139), Q(w, 8), w.gzhead ? (Q(w, (w.gzhead.text ? 1 : 0) + (w.gzhead.hcrc ? 2 : 0) + (w.gzhead.extra ? 4 : 0) + (w.gzhead.name ? 8 : 0) + (w.gzhead.comment ? 16 : 0)), Q(w, 255 & w.gzhead.time), Q(w, w.gzhead.time >> 8 & 255), Q(w, w.gzhead.time >> 16 & 255), Q(w, w.gzhead.time >> 24 & 255), Q(w, w.level === 9 ? 2 : 2 <= w.strategy || w.level < 2 ? 4 : 0), Q(w, 255 & w.gzhead.os), w.gzhead.extra && w.gzhead.extra.length && (Q(w, 255 & w.gzhead.extra.length), Q(w, w.gzhead.extra.length >> 8 & 255)), w.gzhead.hcrc && (n.adler = p(n.adler, w.pending_buf, w.pending, 0)), w.gzindex = 0, w.status = 69) : (Q(w, 0), Q(w, 0), Q(w, 0), Q(w, 0), Q(w, 0), Q(w, w.level === 9 ? 2 : 2 <= w.strategy || w.level < 2 ? 4 : 0), Q(w, 3), w.status = R);
            else {
              var U = v + (w.w_bits - 8 << 4) << 8;
              U |= (2 <= w.strategy || w.level < 2 ? 0 : w.level < 6 ? 1 : w.level === 6 ? 2 : 3) << 6, w.strstart !== 0 && (U |= 32), U += 31 - U % 31, w.status = R, K(w, U), w.strstart !== 0 && (K(w, n.adler >>> 16), K(w, 65535 & n.adler)), n.adler = 1;
            }
          if (w.status === 69)
            if (w.gzhead.extra) {
              for (g = w.pending; w.gzindex < (65535 & w.gzhead.extra.length) && (w.pending !== w.pending_buf_size || (w.gzhead.hcrc && w.pending > g && (n.adler = p(n.adler, w.pending_buf, w.pending - g, g)), N(n), g = w.pending, w.pending !== w.pending_buf_size)); )
                Q(w, 255 & w.gzhead.extra[w.gzindex]), w.gzindex++;
              w.gzhead.hcrc && w.pending > g && (n.adler = p(n.adler, w.pending_buf, w.pending - g, g)), w.gzindex === w.gzhead.extra.length && (w.gzindex = 0, w.status = 73);
            } else
              w.status = 73;
          if (w.status === 73)
            if (w.gzhead.name) {
              g = w.pending;
              do {
                if (w.pending === w.pending_buf_size && (w.gzhead.hcrc && w.pending > g && (n.adler = p(n.adler, w.pending_buf, w.pending - g, g)), N(n), g = w.pending, w.pending === w.pending_buf_size)) {
                  C = 1;
                  break;
                }
                C = w.gzindex < w.gzhead.name.length ? 255 & w.gzhead.name.charCodeAt(w.gzindex++) : 0, Q(w, C);
              } while (C !== 0);
              w.gzhead.hcrc && w.pending > g && (n.adler = p(n.adler, w.pending_buf, w.pending - g, g)), C === 0 && (w.gzindex = 0, w.status = 91);
            } else
              w.status = 91;
          if (w.status === 91)
            if (w.gzhead.comment) {
              g = w.pending;
              do {
                if (w.pending === w.pending_buf_size && (w.gzhead.hcrc && w.pending > g && (n.adler = p(n.adler, w.pending_buf, w.pending - g, g)), N(n), g = w.pending, w.pending === w.pending_buf_size)) {
                  C = 1;
                  break;
                }
                C = w.gzindex < w.gzhead.comment.length ? 255 & w.gzhead.comment.charCodeAt(w.gzindex++) : 0, Q(w, C);
              } while (C !== 0);
              w.gzhead.hcrc && w.pending > g && (n.adler = p(n.adler, w.pending_buf, w.pending - g, g)), C === 0 && (w.status = 103);
            } else
              w.status = 103;
          if (w.status === 103 && (w.gzhead.hcrc ? (w.pending + 2 > w.pending_buf_size && N(n), w.pending + 2 <= w.pending_buf_size && (Q(w, 255 & n.adler), Q(w, n.adler >> 8 & 255), n.adler = 0, w.status = R)) : w.status = R), w.pending !== 0) {
            if (N(n), n.avail_out === 0)
              return w.last_flush = -1, h;
          } else if (n.avail_in === 0 && j(F) <= j(T) && F !== k)
            return q(n, -5);
          if (w.status === 666 && n.avail_in !== 0)
            return q(n, -5);
          if (n.avail_in !== 0 || w.lookahead !== 0 || F !== f && w.status !== 666) {
            var M = w.strategy === 2 ? function(z, $) {
              for (var X; ; ) {
                if (z.lookahead === 0 && (st(z), z.lookahead === 0)) {
                  if ($ === f)
                    return u;
                  break;
                }
                if (z.match_length = 0, X = a._tr_tally(z, 0, z.window[z.strstart]), z.lookahead--, z.strstart++, X && (I(z, !1), z.strm.avail_out === 0))
                  return u;
              }
              return z.insert = 0, $ === k ? (I(z, !0), z.strm.avail_out === 0 ? et : O) : z.last_lit && (I(z, !1), z.strm.avail_out === 0) ? u : L;
            }(w, F) : w.strategy === 3 ? function(z, $) {
              for (var X, H, tt, ot, it = z.window; ; ) {
                if (z.lookahead <= W) {
                  if (st(z), z.lookahead <= W && $ === f)
                    return u;
                  if (z.lookahead === 0)
                    break;
                }
                if (z.match_length = 0, z.lookahead >= B && 0 < z.strstart && (H = it[tt = z.strstart - 1]) === it[++tt] && H === it[++tt] && H === it[++tt]) {
                  ot = z.strstart + W;
                  do
                    ;
                  while (H === it[++tt] && H === it[++tt] && H === it[++tt] && H === it[++tt] && H === it[++tt] && H === it[++tt] && H === it[++tt] && H === it[++tt] && tt < ot);
                  z.match_length = W - (ot - tt), z.match_length > z.lookahead && (z.match_length = z.lookahead);
                }
                if (z.match_length >= B ? (X = a._tr_tally(z, 1, z.match_length - B), z.lookahead -= z.match_length, z.strstart += z.match_length, z.match_length = 0) : (X = a._tr_tally(z, 0, z.window[z.strstart]), z.lookahead--, z.strstart++), X && (I(z, !1), z.strm.avail_out === 0))
                  return u;
              }
              return z.insert = 0, $ === k ? (I(z, !0), z.strm.avail_out === 0 ? et : O) : z.last_lit && (I(z, !1), z.strm.avail_out === 0) ? u : L;
            }(w, F) : i[w.level].func(w, F);
            if (M !== et && M !== O || (w.status = 666), M === u || M === et)
              return n.avail_out === 0 && (w.last_flush = -1), h;
            if (M === L && (F === 1 ? a._tr_align(w) : F !== 5 && (a._tr_stored_block(w, 0, 0, !1), F === 3 && (J(w.head), w.lookahead === 0 && (w.strstart = 0, w.block_start = 0, w.insert = 0))), N(n), n.avail_out === 0))
              return w.last_flush = -1, h;
          }
          return F !== k ? h : w.wrap <= 0 ? 1 : (w.wrap === 2 ? (Q(w, 255 & n.adler), Q(w, n.adler >> 8 & 255), Q(w, n.adler >> 16 & 255), Q(w, n.adler >> 24 & 255), Q(w, 255 & n.total_in), Q(w, n.total_in >> 8 & 255), Q(w, n.total_in >> 16 & 255), Q(w, n.total_in >> 24 & 255)) : (K(w, n.adler >>> 16), K(w, 65535 & n.adler)), N(n), 0 < w.wrap && (w.wrap = -w.wrap), w.pending !== 0 ? h : 1);
        }, l.deflateEnd = function(n) {
          var F;
          return n && n.state ? (F = n.state.status) !== x && F !== 69 && F !== 73 && F !== 91 && F !== 103 && F !== R && F !== 666 ? q(n, y) : (n.state = null, F === R ? q(n, -3) : h) : y;
        }, l.deflateSetDictionary = function(n, F) {
          var T, w, g, C, U, M, z, $, X = F.length;
          if (!n || !n.state || (C = (T = n.state).wrap) === 2 || C === 1 && T.status !== x || T.lookahead)
            return y;
          for (C === 1 && (n.adler = c(n.adler, F, X, 0)), T.wrap = 0, X >= T.w_size && (C === 0 && (J(T.head), T.strstart = 0, T.block_start = 0, T.insert = 0), $ = new s.Buf8(T.w_size), s.arraySet($, F, X - T.w_size, T.w_size, 0), F = $, X = T.w_size), U = n.avail_in, M = n.next_in, z = n.input, n.avail_in = X, n.next_in = 0, n.input = F, st(T); T.lookahead >= B; ) {
            for (w = T.strstart, g = T.lookahead - (B - 1); T.ins_h = (T.ins_h << T.hash_shift ^ T.window[w + B - 1]) & T.hash_mask, T.prev[w & T.w_mask] = T.head[T.ins_h], T.head[T.ins_h] = w, w++, --g; )
              ;
            T.strstart = w, T.lookahead = B - 1, st(T);
          }
          return T.strstart += T.lookahead, T.block_start = T.strstart, T.insert = T.lookahead, T.lookahead = 0, T.match_length = T.prev_length = B - 1, T.match_available = 0, n.next_in = M, n.input = z, n.avail_in = U, T.wrap = C, h;
        }, l.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, o, l) {
        o.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
        };
      }, {}], 48: [function(e, o, l) {
        o.exports = function(i, s) {
          var a, c, p, b, f, k, h, y, d, m, _, v, A, S, E, P, D, Z, B, W, Y, x, R, u, L;
          a = i.state, c = i.next_in, u = i.input, p = c + (i.avail_in - 5), b = i.next_out, L = i.output, f = b - (s - i.avail_out), k = b + (i.avail_out - 257), h = a.dmax, y = a.wsize, d = a.whave, m = a.wnext, _ = a.window, v = a.hold, A = a.bits, S = a.lencode, E = a.distcode, P = (1 << a.lenbits) - 1, D = (1 << a.distbits) - 1;
          t:
            do {
              A < 15 && (v += u[c++] << A, A += 8, v += u[c++] << A, A += 8), Z = S[v & P];
              e:
                for (; ; ) {
                  if (v >>>= B = Z >>> 24, A -= B, (B = Z >>> 16 & 255) === 0)
                    L[b++] = 65535 & Z;
                  else {
                    if (!(16 & B)) {
                      if (!(64 & B)) {
                        Z = S[(65535 & Z) + (v & (1 << B) - 1)];
                        continue e;
                      }
                      if (32 & B) {
                        a.mode = 12;
                        break t;
                      }
                      i.msg = "invalid literal/length code", a.mode = 30;
                      break t;
                    }
                    W = 65535 & Z, (B &= 15) && (A < B && (v += u[c++] << A, A += 8), W += v & (1 << B) - 1, v >>>= B, A -= B), A < 15 && (v += u[c++] << A, A += 8, v += u[c++] << A, A += 8), Z = E[v & D];
                    r:
                      for (; ; ) {
                        if (v >>>= B = Z >>> 24, A -= B, !(16 & (B = Z >>> 16 & 255))) {
                          if (!(64 & B)) {
                            Z = E[(65535 & Z) + (v & (1 << B) - 1)];
                            continue r;
                          }
                          i.msg = "invalid distance code", a.mode = 30;
                          break t;
                        }
                        if (Y = 65535 & Z, A < (B &= 15) && (v += u[c++] << A, (A += 8) < B && (v += u[c++] << A, A += 8)), h < (Y += v & (1 << B) - 1)) {
                          i.msg = "invalid distance too far back", a.mode = 30;
                          break t;
                        }
                        if (v >>>= B, A -= B, (B = b - f) < Y) {
                          if (d < (B = Y - B) && a.sane) {
                            i.msg = "invalid distance too far back", a.mode = 30;
                            break t;
                          }
                          if (R = _, (x = 0) === m) {
                            if (x += y - B, B < W) {
                              for (W -= B; L[b++] = _[x++], --B; )
                                ;
                              x = b - Y, R = L;
                            }
                          } else if (m < B) {
                            if (x += y + m - B, (B -= m) < W) {
                              for (W -= B; L[b++] = _[x++], --B; )
                                ;
                              if (x = 0, m < W) {
                                for (W -= B = m; L[b++] = _[x++], --B; )
                                  ;
                                x = b - Y, R = L;
                              }
                            }
                          } else if (x += m - B, B < W) {
                            for (W -= B; L[b++] = _[x++], --B; )
                              ;
                            x = b - Y, R = L;
                          }
                          for (; 2 < W; )
                            L[b++] = R[x++], L[b++] = R[x++], L[b++] = R[x++], W -= 3;
                          W && (L[b++] = R[x++], 1 < W && (L[b++] = R[x++]));
                        } else {
                          for (x = b - Y; L[b++] = L[x++], L[b++] = L[x++], L[b++] = L[x++], 2 < (W -= 3); )
                            ;
                          W && (L[b++] = L[x++], 1 < W && (L[b++] = L[x++]));
                        }
                        break;
                      }
                  }
                  break;
                }
            } while (c < p && b < k);
          c -= W = A >> 3, v &= (1 << (A -= W << 3)) - 1, i.next_in = c, i.next_out = b, i.avail_in = c < p ? p - c + 5 : 5 - (c - p), i.avail_out = b < k ? k - b + 257 : 257 - (b - k), a.hold = v, a.bits = A;
        };
      }, {}], 49: [function(e, o, l) {
        var i = e("../utils/common"), s = e("./adler32"), a = e("./crc32"), c = e("./inffast"), p = e("./inftrees"), b = 1, f = 2, k = 0, h = -2, y = 1, d = 852, m = 592;
        function _(x) {
          return (x >>> 24 & 255) + (x >>> 8 & 65280) + ((65280 & x) << 8) + ((255 & x) << 24);
        }
        function v() {
          this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new i.Buf16(320), this.work = new i.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function A(x) {
          var R;
          return x && x.state ? (R = x.state, x.total_in = x.total_out = R.total = 0, x.msg = "", R.wrap && (x.adler = 1 & R.wrap), R.mode = y, R.last = 0, R.havedict = 0, R.dmax = 32768, R.head = null, R.hold = 0, R.bits = 0, R.lencode = R.lendyn = new i.Buf32(d), R.distcode = R.distdyn = new i.Buf32(m), R.sane = 1, R.back = -1, k) : h;
        }
        function S(x) {
          var R;
          return x && x.state ? ((R = x.state).wsize = 0, R.whave = 0, R.wnext = 0, A(x)) : h;
        }
        function E(x, R) {
          var u, L;
          return x && x.state ? (L = x.state, R < 0 ? (u = 0, R = -R) : (u = 1 + (R >> 4), R < 48 && (R &= 15)), R && (R < 8 || 15 < R) ? h : (L.window !== null && L.wbits !== R && (L.window = null), L.wrap = u, L.wbits = R, S(x))) : h;
        }
        function P(x, R) {
          var u, L;
          return x ? (L = new v(), (x.state = L).window = null, (u = E(x, R)) !== k && (x.state = null), u) : h;
        }
        var D, Z, B = !0;
        function W(x) {
          if (B) {
            var R;
            for (D = new i.Buf32(512), Z = new i.Buf32(32), R = 0; R < 144; )
              x.lens[R++] = 8;
            for (; R < 256; )
              x.lens[R++] = 9;
            for (; R < 280; )
              x.lens[R++] = 7;
            for (; R < 288; )
              x.lens[R++] = 8;
            for (p(b, x.lens, 0, 288, D, 0, x.work, { bits: 9 }), R = 0; R < 32; )
              x.lens[R++] = 5;
            p(f, x.lens, 0, 32, Z, 0, x.work, { bits: 5 }), B = !1;
          }
          x.lencode = D, x.lenbits = 9, x.distcode = Z, x.distbits = 5;
        }
        function Y(x, R, u, L) {
          var et, O = x.state;
          return O.window === null && (O.wsize = 1 << O.wbits, O.wnext = 0, O.whave = 0, O.window = new i.Buf8(O.wsize)), L >= O.wsize ? (i.arraySet(O.window, R, u - O.wsize, O.wsize, 0), O.wnext = 0, O.whave = O.wsize) : (L < (et = O.wsize - O.wnext) && (et = L), i.arraySet(O.window, R, u - L, et, O.wnext), (L -= et) ? (i.arraySet(O.window, R, u - L, L, 0), O.wnext = L, O.whave = O.wsize) : (O.wnext += et, O.wnext === O.wsize && (O.wnext = 0), O.whave < O.wsize && (O.whave += et))), 0;
        }
        l.inflateReset = S, l.inflateReset2 = E, l.inflateResetKeep = A, l.inflateInit = function(x) {
          return P(x, 15);
        }, l.inflateInit2 = P, l.inflate = function(x, R) {
          var u, L, et, O, q, j, J, N, I, Q, K, G, st, lt, nt, at, dt, ut, gt, mt, n, F, T, w, g = 0, C = new i.Buf8(4), U = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!x || !x.state || !x.output || !x.input && x.avail_in !== 0)
            return h;
          (u = x.state).mode === 12 && (u.mode = 13), q = x.next_out, et = x.output, J = x.avail_out, O = x.next_in, L = x.input, j = x.avail_in, N = u.hold, I = u.bits, Q = j, K = J, F = k;
          t:
            for (; ; )
              switch (u.mode) {
                case y:
                  if (u.wrap === 0) {
                    u.mode = 13;
                    break;
                  }
                  for (; I < 16; ) {
                    if (j === 0)
                      break t;
                    j--, N += L[O++] << I, I += 8;
                  }
                  if (2 & u.wrap && N === 35615) {
                    C[u.check = 0] = 255 & N, C[1] = N >>> 8 & 255, u.check = a(u.check, C, 2, 0), I = N = 0, u.mode = 2;
                    break;
                  }
                  if (u.flags = 0, u.head && (u.head.done = !1), !(1 & u.wrap) || (((255 & N) << 8) + (N >> 8)) % 31) {
                    x.msg = "incorrect header check", u.mode = 30;
                    break;
                  }
                  if ((15 & N) != 8) {
                    x.msg = "unknown compression method", u.mode = 30;
                    break;
                  }
                  if (I -= 4, n = 8 + (15 & (N >>>= 4)), u.wbits === 0)
                    u.wbits = n;
                  else if (n > u.wbits) {
                    x.msg = "invalid window size", u.mode = 30;
                    break;
                  }
                  u.dmax = 1 << n, x.adler = u.check = 1, u.mode = 512 & N ? 10 : 12, I = N = 0;
                  break;
                case 2:
                  for (; I < 16; ) {
                    if (j === 0)
                      break t;
                    j--, N += L[O++] << I, I += 8;
                  }
                  if (u.flags = N, (255 & u.flags) != 8) {
                    x.msg = "unknown compression method", u.mode = 30;
                    break;
                  }
                  if (57344 & u.flags) {
                    x.msg = "unknown header flags set", u.mode = 30;
                    break;
                  }
                  u.head && (u.head.text = N >> 8 & 1), 512 & u.flags && (C[0] = 255 & N, C[1] = N >>> 8 & 255, u.check = a(u.check, C, 2, 0)), I = N = 0, u.mode = 3;
                case 3:
                  for (; I < 32; ) {
                    if (j === 0)
                      break t;
                    j--, N += L[O++] << I, I += 8;
                  }
                  u.head && (u.head.time = N), 512 & u.flags && (C[0] = 255 & N, C[1] = N >>> 8 & 255, C[2] = N >>> 16 & 255, C[3] = N >>> 24 & 255, u.check = a(u.check, C, 4, 0)), I = N = 0, u.mode = 4;
                case 4:
                  for (; I < 16; ) {
                    if (j === 0)
                      break t;
                    j--, N += L[O++] << I, I += 8;
                  }
                  u.head && (u.head.xflags = 255 & N, u.head.os = N >> 8), 512 & u.flags && (C[0] = 255 & N, C[1] = N >>> 8 & 255, u.check = a(u.check, C, 2, 0)), I = N = 0, u.mode = 5;
                case 5:
                  if (1024 & u.flags) {
                    for (; I < 16; ) {
                      if (j === 0)
                        break t;
                      j--, N += L[O++] << I, I += 8;
                    }
                    u.length = N, u.head && (u.head.extra_len = N), 512 & u.flags && (C[0] = 255 & N, C[1] = N >>> 8 & 255, u.check = a(u.check, C, 2, 0)), I = N = 0;
                  } else
                    u.head && (u.head.extra = null);
                  u.mode = 6;
                case 6:
                  if (1024 & u.flags && (j < (G = u.length) && (G = j), G && (u.head && (n = u.head.extra_len - u.length, u.head.extra || (u.head.extra = new Array(u.head.extra_len)), i.arraySet(u.head.extra, L, O, G, n)), 512 & u.flags && (u.check = a(u.check, L, G, O)), j -= G, O += G, u.length -= G), u.length))
                    break t;
                  u.length = 0, u.mode = 7;
                case 7:
                  if (2048 & u.flags) {
                    if (j === 0)
                      break t;
                    for (G = 0; n = L[O + G++], u.head && n && u.length < 65536 && (u.head.name += String.fromCharCode(n)), n && G < j; )
                      ;
                    if (512 & u.flags && (u.check = a(u.check, L, G, O)), j -= G, O += G, n)
                      break t;
                  } else
                    u.head && (u.head.name = null);
                  u.length = 0, u.mode = 8;
                case 8:
                  if (4096 & u.flags) {
                    if (j === 0)
                      break t;
                    for (G = 0; n = L[O + G++], u.head && n && u.length < 65536 && (u.head.comment += String.fromCharCode(n)), n && G < j; )
                      ;
                    if (512 & u.flags && (u.check = a(u.check, L, G, O)), j -= G, O += G, n)
                      break t;
                  } else
                    u.head && (u.head.comment = null);
                  u.mode = 9;
                case 9:
                  if (512 & u.flags) {
                    for (; I < 16; ) {
                      if (j === 0)
                        break t;
                      j--, N += L[O++] << I, I += 8;
                    }
                    if (N !== (65535 & u.check)) {
                      x.msg = "header crc mismatch", u.mode = 30;
                      break;
                    }
                    I = N = 0;
                  }
                  u.head && (u.head.hcrc = u.flags >> 9 & 1, u.head.done = !0), x.adler = u.check = 0, u.mode = 12;
                  break;
                case 10:
                  for (; I < 32; ) {
                    if (j === 0)
                      break t;
                    j--, N += L[O++] << I, I += 8;
                  }
                  x.adler = u.check = _(N), I = N = 0, u.mode = 11;
                case 11:
                  if (u.havedict === 0)
                    return x.next_out = q, x.avail_out = J, x.next_in = O, x.avail_in = j, u.hold = N, u.bits = I, 2;
                  x.adler = u.check = 1, u.mode = 12;
                case 12:
                  if (R === 5 || R === 6)
                    break t;
                case 13:
                  if (u.last) {
                    N >>>= 7 & I, I -= 7 & I, u.mode = 27;
                    break;
                  }
                  for (; I < 3; ) {
                    if (j === 0)
                      break t;
                    j--, N += L[O++] << I, I += 8;
                  }
                  switch (u.last = 1 & N, I -= 1, 3 & (N >>>= 1)) {
                    case 0:
                      u.mode = 14;
                      break;
                    case 1:
                      if (W(u), u.mode = 20, R !== 6)
                        break;
                      N >>>= 2, I -= 2;
                      break t;
                    case 2:
                      u.mode = 17;
                      break;
                    case 3:
                      x.msg = "invalid block type", u.mode = 30;
                  }
                  N >>>= 2, I -= 2;
                  break;
                case 14:
                  for (N >>>= 7 & I, I -= 7 & I; I < 32; ) {
                    if (j === 0)
                      break t;
                    j--, N += L[O++] << I, I += 8;
                  }
                  if ((65535 & N) != (N >>> 16 ^ 65535)) {
                    x.msg = "invalid stored block lengths", u.mode = 30;
                    break;
                  }
                  if (u.length = 65535 & N, I = N = 0, u.mode = 15, R === 6)
                    break t;
                case 15:
                  u.mode = 16;
                case 16:
                  if (G = u.length) {
                    if (j < G && (G = j), J < G && (G = J), G === 0)
                      break t;
                    i.arraySet(et, L, O, G, q), j -= G, O += G, J -= G, q += G, u.length -= G;
                    break;
                  }
                  u.mode = 12;
                  break;
                case 17:
                  for (; I < 14; ) {
                    if (j === 0)
                      break t;
                    j--, N += L[O++] << I, I += 8;
                  }
                  if (u.nlen = 257 + (31 & N), N >>>= 5, I -= 5, u.ndist = 1 + (31 & N), N >>>= 5, I -= 5, u.ncode = 4 + (15 & N), N >>>= 4, I -= 4, 286 < u.nlen || 30 < u.ndist) {
                    x.msg = "too many length or distance symbols", u.mode = 30;
                    break;
                  }
                  u.have = 0, u.mode = 18;
                case 18:
                  for (; u.have < u.ncode; ) {
                    for (; I < 3; ) {
                      if (j === 0)
                        break t;
                      j--, N += L[O++] << I, I += 8;
                    }
                    u.lens[U[u.have++]] = 7 & N, N >>>= 3, I -= 3;
                  }
                  for (; u.have < 19; )
                    u.lens[U[u.have++]] = 0;
                  if (u.lencode = u.lendyn, u.lenbits = 7, T = { bits: u.lenbits }, F = p(0, u.lens, 0, 19, u.lencode, 0, u.work, T), u.lenbits = T.bits, F) {
                    x.msg = "invalid code lengths set", u.mode = 30;
                    break;
                  }
                  u.have = 0, u.mode = 19;
                case 19:
                  for (; u.have < u.nlen + u.ndist; ) {
                    for (; at = (g = u.lencode[N & (1 << u.lenbits) - 1]) >>> 16 & 255, dt = 65535 & g, !((nt = g >>> 24) <= I); ) {
                      if (j === 0)
                        break t;
                      j--, N += L[O++] << I, I += 8;
                    }
                    if (dt < 16)
                      N >>>= nt, I -= nt, u.lens[u.have++] = dt;
                    else {
                      if (dt === 16) {
                        for (w = nt + 2; I < w; ) {
                          if (j === 0)
                            break t;
                          j--, N += L[O++] << I, I += 8;
                        }
                        if (N >>>= nt, I -= nt, u.have === 0) {
                          x.msg = "invalid bit length repeat", u.mode = 30;
                          break;
                        }
                        n = u.lens[u.have - 1], G = 3 + (3 & N), N >>>= 2, I -= 2;
                      } else if (dt === 17) {
                        for (w = nt + 3; I < w; ) {
                          if (j === 0)
                            break t;
                          j--, N += L[O++] << I, I += 8;
                        }
                        I -= nt, n = 0, G = 3 + (7 & (N >>>= nt)), N >>>= 3, I -= 3;
                      } else {
                        for (w = nt + 7; I < w; ) {
                          if (j === 0)
                            break t;
                          j--, N += L[O++] << I, I += 8;
                        }
                        I -= nt, n = 0, G = 11 + (127 & (N >>>= nt)), N >>>= 7, I -= 7;
                      }
                      if (u.have + G > u.nlen + u.ndist) {
                        x.msg = "invalid bit length repeat", u.mode = 30;
                        break;
                      }
                      for (; G--; )
                        u.lens[u.have++] = n;
                    }
                  }
                  if (u.mode === 30)
                    break;
                  if (u.lens[256] === 0) {
                    x.msg = "invalid code -- missing end-of-block", u.mode = 30;
                    break;
                  }
                  if (u.lenbits = 9, T = { bits: u.lenbits }, F = p(b, u.lens, 0, u.nlen, u.lencode, 0, u.work, T), u.lenbits = T.bits, F) {
                    x.msg = "invalid literal/lengths set", u.mode = 30;
                    break;
                  }
                  if (u.distbits = 6, u.distcode = u.distdyn, T = { bits: u.distbits }, F = p(f, u.lens, u.nlen, u.ndist, u.distcode, 0, u.work, T), u.distbits = T.bits, F) {
                    x.msg = "invalid distances set", u.mode = 30;
                    break;
                  }
                  if (u.mode = 20, R === 6)
                    break t;
                case 20:
                  u.mode = 21;
                case 21:
                  if (6 <= j && 258 <= J) {
                    x.next_out = q, x.avail_out = J, x.next_in = O, x.avail_in = j, u.hold = N, u.bits = I, c(x, K), q = x.next_out, et = x.output, J = x.avail_out, O = x.next_in, L = x.input, j = x.avail_in, N = u.hold, I = u.bits, u.mode === 12 && (u.back = -1);
                    break;
                  }
                  for (u.back = 0; at = (g = u.lencode[N & (1 << u.lenbits) - 1]) >>> 16 & 255, dt = 65535 & g, !((nt = g >>> 24) <= I); ) {
                    if (j === 0)
                      break t;
                    j--, N += L[O++] << I, I += 8;
                  }
                  if (at && !(240 & at)) {
                    for (ut = nt, gt = at, mt = dt; at = (g = u.lencode[mt + ((N & (1 << ut + gt) - 1) >> ut)]) >>> 16 & 255, dt = 65535 & g, !(ut + (nt = g >>> 24) <= I); ) {
                      if (j === 0)
                        break t;
                      j--, N += L[O++] << I, I += 8;
                    }
                    N >>>= ut, I -= ut, u.back += ut;
                  }
                  if (N >>>= nt, I -= nt, u.back += nt, u.length = dt, at === 0) {
                    u.mode = 26;
                    break;
                  }
                  if (32 & at) {
                    u.back = -1, u.mode = 12;
                    break;
                  }
                  if (64 & at) {
                    x.msg = "invalid literal/length code", u.mode = 30;
                    break;
                  }
                  u.extra = 15 & at, u.mode = 22;
                case 22:
                  if (u.extra) {
                    for (w = u.extra; I < w; ) {
                      if (j === 0)
                        break t;
                      j--, N += L[O++] << I, I += 8;
                    }
                    u.length += N & (1 << u.extra) - 1, N >>>= u.extra, I -= u.extra, u.back += u.extra;
                  }
                  u.was = u.length, u.mode = 23;
                case 23:
                  for (; at = (g = u.distcode[N & (1 << u.distbits) - 1]) >>> 16 & 255, dt = 65535 & g, !((nt = g >>> 24) <= I); ) {
                    if (j === 0)
                      break t;
                    j--, N += L[O++] << I, I += 8;
                  }
                  if (!(240 & at)) {
                    for (ut = nt, gt = at, mt = dt; at = (g = u.distcode[mt + ((N & (1 << ut + gt) - 1) >> ut)]) >>> 16 & 255, dt = 65535 & g, !(ut + (nt = g >>> 24) <= I); ) {
                      if (j === 0)
                        break t;
                      j--, N += L[O++] << I, I += 8;
                    }
                    N >>>= ut, I -= ut, u.back += ut;
                  }
                  if (N >>>= nt, I -= nt, u.back += nt, 64 & at) {
                    x.msg = "invalid distance code", u.mode = 30;
                    break;
                  }
                  u.offset = dt, u.extra = 15 & at, u.mode = 24;
                case 24:
                  if (u.extra) {
                    for (w = u.extra; I < w; ) {
                      if (j === 0)
                        break t;
                      j--, N += L[O++] << I, I += 8;
                    }
                    u.offset += N & (1 << u.extra) - 1, N >>>= u.extra, I -= u.extra, u.back += u.extra;
                  }
                  if (u.offset > u.dmax) {
                    x.msg = "invalid distance too far back", u.mode = 30;
                    break;
                  }
                  u.mode = 25;
                case 25:
                  if (J === 0)
                    break t;
                  if (G = K - J, u.offset > G) {
                    if ((G = u.offset - G) > u.whave && u.sane) {
                      x.msg = "invalid distance too far back", u.mode = 30;
                      break;
                    }
                    st = G > u.wnext ? (G -= u.wnext, u.wsize - G) : u.wnext - G, G > u.length && (G = u.length), lt = u.window;
                  } else
                    lt = et, st = q - u.offset, G = u.length;
                  for (J < G && (G = J), J -= G, u.length -= G; et[q++] = lt[st++], --G; )
                    ;
                  u.length === 0 && (u.mode = 21);
                  break;
                case 26:
                  if (J === 0)
                    break t;
                  et[q++] = u.length, J--, u.mode = 21;
                  break;
                case 27:
                  if (u.wrap) {
                    for (; I < 32; ) {
                      if (j === 0)
                        break t;
                      j--, N |= L[O++] << I, I += 8;
                    }
                    if (K -= J, x.total_out += K, u.total += K, K && (x.adler = u.check = u.flags ? a(u.check, et, K, q - K) : s(u.check, et, K, q - K)), K = J, (u.flags ? N : _(N)) !== u.check) {
                      x.msg = "incorrect data check", u.mode = 30;
                      break;
                    }
                    I = N = 0;
                  }
                  u.mode = 28;
                case 28:
                  if (u.wrap && u.flags) {
                    for (; I < 32; ) {
                      if (j === 0)
                        break t;
                      j--, N += L[O++] << I, I += 8;
                    }
                    if (N !== (4294967295 & u.total)) {
                      x.msg = "incorrect length check", u.mode = 30;
                      break;
                    }
                    I = N = 0;
                  }
                  u.mode = 29;
                case 29:
                  F = 1;
                  break t;
                case 30:
                  F = -3;
                  break t;
                case 31:
                  return -4;
                case 32:
                default:
                  return h;
              }
          return x.next_out = q, x.avail_out = J, x.next_in = O, x.avail_in = j, u.hold = N, u.bits = I, (u.wsize || K !== x.avail_out && u.mode < 30 && (u.mode < 27 || R !== 4)) && Y(x, x.output, x.next_out, K - x.avail_out) ? (u.mode = 31, -4) : (Q -= x.avail_in, K -= x.avail_out, x.total_in += Q, x.total_out += K, u.total += K, u.wrap && K && (x.adler = u.check = u.flags ? a(u.check, et, K, x.next_out - K) : s(u.check, et, K, x.next_out - K)), x.data_type = u.bits + (u.last ? 64 : 0) + (u.mode === 12 ? 128 : 0) + (u.mode === 20 || u.mode === 15 ? 256 : 0), (Q == 0 && K === 0 || R === 4) && F === k && (F = -5), F);
        }, l.inflateEnd = function(x) {
          if (!x || !x.state)
            return h;
          var R = x.state;
          return R.window && (R.window = null), x.state = null, k;
        }, l.inflateGetHeader = function(x, R) {
          var u;
          return x && x.state && 2 & (u = x.state).wrap ? ((u.head = R).done = !1, k) : h;
        }, l.inflateSetDictionary = function(x, R) {
          var u, L = R.length;
          return x && x.state ? (u = x.state).wrap !== 0 && u.mode !== 11 ? h : u.mode === 11 && s(1, R, L, 0) !== u.check ? -3 : Y(x, R, L, L) ? (u.mode = 31, -4) : (u.havedict = 1, k) : h;
        }, l.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, o, l) {
        var i = e("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], a = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], c = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], p = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        o.exports = function(b, f, k, h, y, d, m, _) {
          var v, A, S, E, P, D, Z, B, W, Y = _.bits, x = 0, R = 0, u = 0, L = 0, et = 0, O = 0, q = 0, j = 0, J = 0, N = 0, I = null, Q = 0, K = new i.Buf16(16), G = new i.Buf16(16), st = null, lt = 0;
          for (x = 0; x <= 15; x++)
            K[x] = 0;
          for (R = 0; R < h; R++)
            K[f[k + R]]++;
          for (et = Y, L = 15; 1 <= L && K[L] === 0; L--)
            ;
          if (L < et && (et = L), L === 0)
            return y[d++] = 20971520, y[d++] = 20971520, _.bits = 1, 0;
          for (u = 1; u < L && K[u] === 0; u++)
            ;
          for (et < u && (et = u), x = j = 1; x <= 15; x++)
            if (j <<= 1, (j -= K[x]) < 0)
              return -1;
          if (0 < j && (b === 0 || L !== 1))
            return -1;
          for (G[1] = 0, x = 1; x < 15; x++)
            G[x + 1] = G[x] + K[x];
          for (R = 0; R < h; R++)
            f[k + R] !== 0 && (m[G[f[k + R]]++] = R);
          if (D = b === 0 ? (I = st = m, 19) : b === 1 ? (I = s, Q -= 257, st = a, lt -= 257, 256) : (I = c, st = p, -1), x = u, P = d, q = R = N = 0, S = -1, E = (J = 1 << (O = et)) - 1, b === 1 && 852 < J || b === 2 && 592 < J)
            return 1;
          for (; ; ) {
            for (Z = x - q, W = m[R] < D ? (B = 0, m[R]) : m[R] > D ? (B = st[lt + m[R]], I[Q + m[R]]) : (B = 96, 0), v = 1 << x - q, u = A = 1 << O; y[P + (N >> q) + (A -= v)] = Z << 24 | B << 16 | W | 0, A !== 0; )
              ;
            for (v = 1 << x - 1; N & v; )
              v >>= 1;
            if (v !== 0 ? (N &= v - 1, N += v) : N = 0, R++, --K[x] == 0) {
              if (x === L)
                break;
              x = f[k + m[R]];
            }
            if (et < x && (N & E) !== S) {
              for (q === 0 && (q = et), P += u, j = 1 << (O = x - q); O + q < L && !((j -= K[O + q]) <= 0); )
                O++, j <<= 1;
              if (J += 1 << O, b === 1 && 852 < J || b === 2 && 592 < J)
                return 1;
              y[S = N & E] = et << 24 | O << 16 | P - d | 0;
            }
          }
          return N !== 0 && (y[P + N] = x - q << 24 | 64 << 16 | 0), _.bits = et, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(e, o, l) {
        o.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(e, o, l) {
        var i = e("../utils/common"), s = 0, a = 1;
        function c(g) {
          for (var C = g.length; 0 <= --C; )
            g[C] = 0;
        }
        var p = 0, b = 29, f = 256, k = f + 1 + b, h = 30, y = 19, d = 2 * k + 1, m = 15, _ = 16, v = 7, A = 256, S = 16, E = 17, P = 18, D = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], Z = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], B = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], W = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], Y = new Array(2 * (k + 2));
        c(Y);
        var x = new Array(2 * h);
        c(x);
        var R = new Array(512);
        c(R);
        var u = new Array(256);
        c(u);
        var L = new Array(b);
        c(L);
        var et, O, q, j = new Array(h);
        function J(g, C, U, M, z) {
          this.static_tree = g, this.extra_bits = C, this.extra_base = U, this.elems = M, this.max_length = z, this.has_stree = g && g.length;
        }
        function N(g, C) {
          this.dyn_tree = g, this.max_code = 0, this.stat_desc = C;
        }
        function I(g) {
          return g < 256 ? R[g] : R[256 + (g >>> 7)];
        }
        function Q(g, C) {
          g.pending_buf[g.pending++] = 255 & C, g.pending_buf[g.pending++] = C >>> 8 & 255;
        }
        function K(g, C, U) {
          g.bi_valid > _ - U ? (g.bi_buf |= C << g.bi_valid & 65535, Q(g, g.bi_buf), g.bi_buf = C >> _ - g.bi_valid, g.bi_valid += U - _) : (g.bi_buf |= C << g.bi_valid & 65535, g.bi_valid += U);
        }
        function G(g, C, U) {
          K(g, U[2 * C], U[2 * C + 1]);
        }
        function st(g, C) {
          for (var U = 0; U |= 1 & g, g >>>= 1, U <<= 1, 0 < --C; )
            ;
          return U >>> 1;
        }
        function lt(g, C, U) {
          var M, z, $ = new Array(m + 1), X = 0;
          for (M = 1; M <= m; M++)
            $[M] = X = X + U[M - 1] << 1;
          for (z = 0; z <= C; z++) {
            var H = g[2 * z + 1];
            H !== 0 && (g[2 * z] = st($[H]++, H));
          }
        }
        function nt(g) {
          var C;
          for (C = 0; C < k; C++)
            g.dyn_ltree[2 * C] = 0;
          for (C = 0; C < h; C++)
            g.dyn_dtree[2 * C] = 0;
          for (C = 0; C < y; C++)
            g.bl_tree[2 * C] = 0;
          g.dyn_ltree[2 * A] = 1, g.opt_len = g.static_len = 0, g.last_lit = g.matches = 0;
        }
        function at(g) {
          8 < g.bi_valid ? Q(g, g.bi_buf) : 0 < g.bi_valid && (g.pending_buf[g.pending++] = g.bi_buf), g.bi_buf = 0, g.bi_valid = 0;
        }
        function dt(g, C, U, M) {
          var z = 2 * C, $ = 2 * U;
          return g[z] < g[$] || g[z] === g[$] && M[C] <= M[U];
        }
        function ut(g, C, U) {
          for (var M = g.heap[U], z = U << 1; z <= g.heap_len && (z < g.heap_len && dt(C, g.heap[z + 1], g.heap[z], g.depth) && z++, !dt(C, M, g.heap[z], g.depth)); )
            g.heap[U] = g.heap[z], U = z, z <<= 1;
          g.heap[U] = M;
        }
        function gt(g, C, U) {
          var M, z, $, X, H = 0;
          if (g.last_lit !== 0)
            for (; M = g.pending_buf[g.d_buf + 2 * H] << 8 | g.pending_buf[g.d_buf + 2 * H + 1], z = g.pending_buf[g.l_buf + H], H++, M === 0 ? G(g, z, C) : (G(g, ($ = u[z]) + f + 1, C), (X = D[$]) !== 0 && K(g, z -= L[$], X), G(g, $ = I(--M), U), (X = Z[$]) !== 0 && K(g, M -= j[$], X)), H < g.last_lit; )
              ;
          G(g, A, C);
        }
        function mt(g, C) {
          var U, M, z, $ = C.dyn_tree, X = C.stat_desc.static_tree, H = C.stat_desc.has_stree, tt = C.stat_desc.elems, ot = -1;
          for (g.heap_len = 0, g.heap_max = d, U = 0; U < tt; U++)
            $[2 * U] !== 0 ? (g.heap[++g.heap_len] = ot = U, g.depth[U] = 0) : $[2 * U + 1] = 0;
          for (; g.heap_len < 2; )
            $[2 * (z = g.heap[++g.heap_len] = ot < 2 ? ++ot : 0)] = 1, g.depth[z] = 0, g.opt_len--, H && (g.static_len -= X[2 * z + 1]);
          for (C.max_code = ot, U = g.heap_len >> 1; 1 <= U; U--)
            ut(g, $, U);
          for (z = tt; U = g.heap[1], g.heap[1] = g.heap[g.heap_len--], ut(g, $, 1), M = g.heap[1], g.heap[--g.heap_max] = U, g.heap[--g.heap_max] = M, $[2 * z] = $[2 * U] + $[2 * M], g.depth[z] = (g.depth[U] >= g.depth[M] ? g.depth[U] : g.depth[M]) + 1, $[2 * U + 1] = $[2 * M + 1] = z, g.heap[1] = z++, ut(g, $, 1), 2 <= g.heap_len; )
            ;
          g.heap[--g.heap_max] = g.heap[1], function(it, _t) {
            var zt, vt, It, ct, Ht, de, kt = _t.dyn_tree, vr = _t.max_code, Ln = _t.stat_desc.static_tree, Un = _t.stat_desc.has_stree, jn = _t.stat_desc.extra_bits, br = _t.stat_desc.extra_base, Nt = _t.stat_desc.max_length, Gt = 0;
            for (ct = 0; ct <= m; ct++)
              it.bl_count[ct] = 0;
            for (kt[2 * it.heap[it.heap_max] + 1] = 0, zt = it.heap_max + 1; zt < d; zt++)
              Nt < (ct = kt[2 * kt[2 * (vt = it.heap[zt]) + 1] + 1] + 1) && (ct = Nt, Gt++), kt[2 * vt + 1] = ct, vr < vt || (it.bl_count[ct]++, Ht = 0, br <= vt && (Ht = jn[vt - br]), de = kt[2 * vt], it.opt_len += de * (ct + Ht), Un && (it.static_len += de * (Ln[2 * vt + 1] + Ht)));
            if (Gt !== 0) {
              do {
                for (ct = Nt - 1; it.bl_count[ct] === 0; )
                  ct--;
                it.bl_count[ct]--, it.bl_count[ct + 1] += 2, it.bl_count[Nt]--, Gt -= 2;
              } while (0 < Gt);
              for (ct = Nt; ct !== 0; ct--)
                for (vt = it.bl_count[ct]; vt !== 0; )
                  vr < (It = it.heap[--zt]) || (kt[2 * It + 1] !== ct && (it.opt_len += (ct - kt[2 * It + 1]) * kt[2 * It], kt[2 * It + 1] = ct), vt--);
            }
          }(g, C), lt($, ot, g.bl_count);
        }
        function n(g, C, U) {
          var M, z, $ = -1, X = C[1], H = 0, tt = 7, ot = 4;
          for (X === 0 && (tt = 138, ot = 3), C[2 * (U + 1) + 1] = 65535, M = 0; M <= U; M++)
            z = X, X = C[2 * (M + 1) + 1], ++H < tt && z === X || (H < ot ? g.bl_tree[2 * z] += H : z !== 0 ? (z !== $ && g.bl_tree[2 * z]++, g.bl_tree[2 * S]++) : H <= 10 ? g.bl_tree[2 * E]++ : g.bl_tree[2 * P]++, $ = z, ot = (H = 0) === X ? (tt = 138, 3) : z === X ? (tt = 6, 3) : (tt = 7, 4));
        }
        function F(g, C, U) {
          var M, z, $ = -1, X = C[1], H = 0, tt = 7, ot = 4;
          for (X === 0 && (tt = 138, ot = 3), M = 0; M <= U; M++)
            if (z = X, X = C[2 * (M + 1) + 1], !(++H < tt && z === X)) {
              if (H < ot)
                for (; G(g, z, g.bl_tree), --H != 0; )
                  ;
              else
                z !== 0 ? (z !== $ && (G(g, z, g.bl_tree), H--), G(g, S, g.bl_tree), K(g, H - 3, 2)) : H <= 10 ? (G(g, E, g.bl_tree), K(g, H - 3, 3)) : (G(g, P, g.bl_tree), K(g, H - 11, 7));
              $ = z, ot = (H = 0) === X ? (tt = 138, 3) : z === X ? (tt = 6, 3) : (tt = 7, 4);
            }
        }
        c(j);
        var T = !1;
        function w(g, C, U, M) {
          K(g, (p << 1) + (M ? 1 : 0), 3), function(z, $, X, H) {
            at(z), H && (Q(z, X), Q(z, ~X)), i.arraySet(z.pending_buf, z.window, $, X, z.pending), z.pending += X;
          }(g, C, U, !0);
        }
        l._tr_init = function(g) {
          T || (function() {
            var C, U, M, z, $, X = new Array(m + 1);
            for (z = M = 0; z < b - 1; z++)
              for (L[z] = M, C = 0; C < 1 << D[z]; C++)
                u[M++] = z;
            for (u[M - 1] = z, z = $ = 0; z < 16; z++)
              for (j[z] = $, C = 0; C < 1 << Z[z]; C++)
                R[$++] = z;
            for ($ >>= 7; z < h; z++)
              for (j[z] = $ << 7, C = 0; C < 1 << Z[z] - 7; C++)
                R[256 + $++] = z;
            for (U = 0; U <= m; U++)
              X[U] = 0;
            for (C = 0; C <= 143; )
              Y[2 * C + 1] = 8, C++, X[8]++;
            for (; C <= 255; )
              Y[2 * C + 1] = 9, C++, X[9]++;
            for (; C <= 279; )
              Y[2 * C + 1] = 7, C++, X[7]++;
            for (; C <= 287; )
              Y[2 * C + 1] = 8, C++, X[8]++;
            for (lt(Y, k + 1, X), C = 0; C < h; C++)
              x[2 * C + 1] = 5, x[2 * C] = st(C, 5);
            et = new J(Y, D, f + 1, k, m), O = new J(x, Z, 0, h, m), q = new J(new Array(0), B, 0, y, v);
          }(), T = !0), g.l_desc = new N(g.dyn_ltree, et), g.d_desc = new N(g.dyn_dtree, O), g.bl_desc = new N(g.bl_tree, q), g.bi_buf = 0, g.bi_valid = 0, nt(g);
        }, l._tr_stored_block = w, l._tr_flush_block = function(g, C, U, M) {
          var z, $, X = 0;
          0 < g.level ? (g.strm.data_type === 2 && (g.strm.data_type = function(H) {
            var tt, ot = 4093624447;
            for (tt = 0; tt <= 31; tt++, ot >>>= 1)
              if (1 & ot && H.dyn_ltree[2 * tt] !== 0)
                return s;
            if (H.dyn_ltree[18] !== 0 || H.dyn_ltree[20] !== 0 || H.dyn_ltree[26] !== 0)
              return a;
            for (tt = 32; tt < f; tt++)
              if (H.dyn_ltree[2 * tt] !== 0)
                return a;
            return s;
          }(g)), mt(g, g.l_desc), mt(g, g.d_desc), X = function(H) {
            var tt;
            for (n(H, H.dyn_ltree, H.l_desc.max_code), n(H, H.dyn_dtree, H.d_desc.max_code), mt(H, H.bl_desc), tt = y - 1; 3 <= tt && H.bl_tree[2 * W[tt] + 1] === 0; tt--)
              ;
            return H.opt_len += 3 * (tt + 1) + 5 + 5 + 4, tt;
          }(g), z = g.opt_len + 3 + 7 >>> 3, ($ = g.static_len + 3 + 7 >>> 3) <= z && (z = $)) : z = $ = U + 5, U + 4 <= z && C !== -1 ? w(g, C, U, M) : g.strategy === 4 || $ === z ? (K(g, 2 + (M ? 1 : 0), 3), gt(g, Y, x)) : (K(g, 4 + (M ? 1 : 0), 3), function(H, tt, ot, it) {
            var _t;
            for (K(H, tt - 257, 5), K(H, ot - 1, 5), K(H, it - 4, 4), _t = 0; _t < it; _t++)
              K(H, H.bl_tree[2 * W[_t] + 1], 3);
            F(H, H.dyn_ltree, tt - 1), F(H, H.dyn_dtree, ot - 1);
          }(g, g.l_desc.max_code + 1, g.d_desc.max_code + 1, X + 1), gt(g, g.dyn_ltree, g.dyn_dtree)), nt(g), M && at(g);
        }, l._tr_tally = function(g, C, U) {
          return g.pending_buf[g.d_buf + 2 * g.last_lit] = C >>> 8 & 255, g.pending_buf[g.d_buf + 2 * g.last_lit + 1] = 255 & C, g.pending_buf[g.l_buf + g.last_lit] = 255 & U, g.last_lit++, C === 0 ? g.dyn_ltree[2 * U]++ : (g.matches++, C--, g.dyn_ltree[2 * (u[U] + f + 1)]++, g.dyn_dtree[2 * I(C)]++), g.last_lit === g.lit_bufsize - 1;
        }, l._tr_align = function(g) {
          K(g, 2, 3), G(g, A, Y), function(C) {
            C.bi_valid === 16 ? (Q(C, C.bi_buf), C.bi_buf = 0, C.bi_valid = 0) : 8 <= C.bi_valid && (C.pending_buf[C.pending++] = 255 & C.bi_buf, C.bi_buf >>= 8, C.bi_valid -= 8);
          }(g);
        };
      }, { "../utils/common": 41 }], 53: [function(e, o, l) {
        o.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, {}], 54: [function(e, o, l) {
        (function(i) {
          (function(s, a) {
            if (!s.setImmediate) {
              var c, p, b, f, k = 1, h = {}, y = !1, d = s.document, m = Object.getPrototypeOf && Object.getPrototypeOf(s);
              m = m && m.setTimeout ? m : s, c = {}.toString.call(s.process) === "[object process]" ? function(S) {
                process.nextTick(function() {
                  v(S);
                });
              } : function() {
                if (s.postMessage && !s.importScripts) {
                  var S = !0, E = s.onmessage;
                  return s.onmessage = function() {
                    S = !1;
                  }, s.postMessage("", "*"), s.onmessage = E, S;
                }
              }() ? (f = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", A, !1) : s.attachEvent("onmessage", A), function(S) {
                s.postMessage(f + S, "*");
              }) : s.MessageChannel ? ((b = new MessageChannel()).port1.onmessage = function(S) {
                v(S.data);
              }, function(S) {
                b.port2.postMessage(S);
              }) : d && "onreadystatechange" in d.createElement("script") ? (p = d.documentElement, function(S) {
                var E = d.createElement("script");
                E.onreadystatechange = function() {
                  v(S), E.onreadystatechange = null, p.removeChild(E), E = null;
                }, p.appendChild(E);
              }) : function(S) {
                setTimeout(v, 0, S);
              }, m.setImmediate = function(S) {
                typeof S != "function" && (S = new Function("" + S));
                for (var E = new Array(arguments.length - 1), P = 0; P < E.length; P++)
                  E[P] = arguments[P + 1];
                var D = { callback: S, args: E };
                return h[k] = D, c(k), k++;
              }, m.clearImmediate = _;
            }
            function _(S) {
              delete h[S];
            }
            function v(S) {
              if (y)
                setTimeout(v, 0, S);
              else {
                var E = h[S];
                if (E) {
                  y = !0;
                  try {
                    (function(P) {
                      var D = P.callback, Z = P.args;
                      switch (Z.length) {
                        case 0:
                          D();
                          break;
                        case 1:
                          D(Z[0]);
                          break;
                        case 2:
                          D(Z[0], Z[1]);
                          break;
                        case 3:
                          D(Z[0], Z[1], Z[2]);
                          break;
                        default:
                          D.apply(a, Z);
                      }
                    })(E);
                  } finally {
                    _(S), y = !1;
                  }
                }
              }
            }
            function A(S) {
              S.source === s && typeof S.data == "string" && S.data.indexOf(f) === 0 && v(+S.data.slice(f.length));
            }
          })(typeof self > "u" ? i === void 0 ? this : i : self);
        }).call(this, typeof Mt < "u" ? Mt : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}] }, {}, [10])(10);
    });
  })(tr);
  var Kr = tr.exports;
  const Vr = /* @__PURE__ */ Gr(Kr);
  function Xr(t) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r];
      for (var o in e)
        e.hasOwnProperty(o) && (t[o] = e[o]);
    }
    return t;
  }
  function ie(t, r) {
    return Array(r + 1).join(t);
  }
  function er(t) {
    return t.replace(/^\n*/, "");
  }
  function rr(t) {
    for (var r = t.length; r > 0 && t[r - 1] === `
`; )
      r--;
    return t.substring(0, r);
  }
  function nr(t) {
    return rr(er(t));
  }
  var Yr = [
    "ADDRESS",
    "ARTICLE",
    "ASIDE",
    "AUDIO",
    "BLOCKQUOTE",
    "BODY",
    "CANVAS",
    "CENTER",
    "DD",
    "DIR",
    "DIV",
    "DL",
    "DT",
    "FIELDSET",
    "FIGCAPTION",
    "FIGURE",
    "FOOTER",
    "FORM",
    "FRAMESET",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "HEADER",
    "HGROUP",
    "HR",
    "HTML",
    "ISINDEX",
    "LI",
    "MAIN",
    "MENU",
    "NAV",
    "NOFRAMES",
    "NOSCRIPT",
    "OL",
    "OUTPUT",
    "P",
    "PRE",
    "SECTION",
    "TABLE",
    "TBODY",
    "TD",
    "TFOOT",
    "TH",
    "THEAD",
    "TR",
    "UL"
  ];
  function ae(t) {
    return se(t, Yr);
  }
  var ir = [
    "AREA",
    "BASE",
    "BR",
    "COL",
    "COMMAND",
    "EMBED",
    "HR",
    "IMG",
    "INPUT",
    "KEYGEN",
    "LINK",
    "META",
    "PARAM",
    "SOURCE",
    "TRACK",
    "WBR"
  ];
  function ar(t) {
    return se(t, ir);
  }
  function qr(t) {
    return or(t, ir);
  }
  var sr = [
    "A",
    "TABLE",
    "THEAD",
    "TBODY",
    "TFOOT",
    "TH",
    "TD",
    "IFRAME",
    "SCRIPT",
    "AUDIO",
    "VIDEO"
  ];
  function Jr(t) {
    return se(t, sr);
  }
  function Qr(t) {
    return or(t, sr);
  }
  function se(t, r) {
    return r.indexOf(t.nodeName) >= 0;
  }
  function or(t, r) {
    return t.getElementsByTagName && r.some(function(e) {
      return t.getElementsByTagName(e).length;
    });
  }
  var pt = {};
  pt.paragraph = {
    filter: "p",
    replacement: function(t) {
      return `

` + t + `

`;
    }
  }, pt.lineBreak = {
    filter: "br",
    replacement: function(t, r, e) {
      return e.br + `
`;
    }
  }, pt.heading = {
    filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
    replacement: function(t, r, e) {
      var o = Number(r.nodeName.charAt(1));
      if (e.headingStyle === "setext" && o < 3) {
        var l = ie(o === 1 ? "=" : "-", t.length);
        return `

` + t + `
` + l + `

`;
      } else
        return `

` + ie("#", o) + " " + t + `

`;
    }
  }, pt.blockquote = {
    filter: "blockquote",
    replacement: function(t) {
      return t = nr(t).replace(/^/gm, "> "), `

` + t + `

`;
    }
  }, pt.list = {
    filter: ["ul", "ol"],
    replacement: function(t, r) {
      var e = r.parentNode;
      return e.nodeName === "LI" && e.lastElementChild === r ? `
` + t : `

` + t + `

`;
    }
  }, pt.listItem = {
    filter: "li",
    replacement: function(t, r, e) {
      var o = e.bulletListMarker + "   ", l = r.parentNode;
      if (l.nodeName === "OL") {
        var i = l.getAttribute("start"), s = Array.prototype.indexOf.call(l.children, r);
        o = (i ? Number(i) + s : s + 1) + ".  ";
      }
      var a = /\n$/.test(t);
      return t = nr(t) + (a ? `
` : ""), t = t.replace(/\n/gm, `
` + " ".repeat(o.length)), o + t + (r.nextSibling ? `
` : "");
    }
  }, pt.indentedCodeBlock = {
    filter: function(t, r) {
      return r.codeBlockStyle === "indented" && t.nodeName === "PRE" && t.firstChild && t.firstChild.nodeName === "CODE";
    },
    replacement: function(t, r, e) {
      return `

    ` + r.firstChild.textContent.replace(/\n/g, `
    `) + `

`;
    }
  }, pt.fencedCodeBlock = {
    filter: function(t, r) {
      return r.codeBlockStyle === "fenced" && t.nodeName === "PRE" && t.firstChild && t.firstChild.nodeName === "CODE";
    },
    replacement: function(t, r, e) {
      for (var o = r.firstChild.getAttribute("class") || "", l = (o.match(/language-(\S+)/) || [null, ""])[1], i = r.firstChild.textContent, s = e.fence.charAt(0), a = 3, c = new RegExp("^" + s + "{3,}", "gm"), p; p = c.exec(i); )
        p[0].length >= a && (a = p[0].length + 1);
      var b = ie(s, a);
      return `

` + b + l + `
` + i.replace(/\n$/, "") + `
` + b + `

`;
    }
  }, pt.horizontalRule = {
    filter: "hr",
    replacement: function(t, r, e) {
      return `

` + e.hr + `

`;
    }
  }, pt.inlineLink = {
    filter: function(t, r) {
      return r.linkStyle === "inlined" && t.nodeName === "A" && t.getAttribute("href");
    },
    replacement: function(t, r) {
      var e = r.getAttribute("href");
      e && (e = e.replace(/([()])/g, "\\$1"));
      var o = Wt(r.getAttribute("title"));
      return o && (o = ' "' + o.replace(/"/g, '\\"') + '"'), "[" + t + "](" + e + o + ")";
    }
  }, pt.referenceLink = {
    filter: function(t, r) {
      return r.linkStyle === "referenced" && t.nodeName === "A" && t.getAttribute("href");
    },
    replacement: function(t, r, e) {
      var o = r.getAttribute("href"), l = Wt(r.getAttribute("title"));
      l && (l = ' "' + l + '"');
      var i, s;
      switch (e.linkReferenceStyle) {
        case "collapsed":
          i = "[" + t + "][]", s = "[" + t + "]: " + o + l;
          break;
        case "shortcut":
          i = "[" + t + "]", s = "[" + t + "]: " + o + l;
          break;
        default:
          var a = this.references.length + 1;
          i = "[" + t + "][" + a + "]", s = "[" + a + "]: " + o + l;
      }
      return this.references.push(s), i;
    },
    references: [],
    append: function(t) {
      var r = "";
      return this.references.length && (r = `

` + this.references.join(`
`) + `

`, this.references = []), r;
    }
  }, pt.emphasis = {
    filter: ["em", "i"],
    replacement: function(t, r, e) {
      return t.trim() ? e.emDelimiter + t + e.emDelimiter : "";
    }
  }, pt.strong = {
    filter: ["strong", "b"],
    replacement: function(t, r, e) {
      return t.trim() ? e.strongDelimiter + t + e.strongDelimiter : "";
    }
  }, pt.code = {
    filter: function(t) {
      var r = t.previousSibling || t.nextSibling, e = t.parentNode.nodeName === "PRE" && !r;
      return t.nodeName === "CODE" && !e;
    },
    replacement: function(t) {
      if (!t)
        return "";
      t = t.replace(/\r?\n|\r/g, " ");
      for (var r = /^`|^ .*?[^ ].* $|`$/.test(t) ? " " : "", e = "`", o = t.match(/`+/gm) || []; o.indexOf(e) !== -1; )
        e = e + "`";
      return e + r + t + r + e;
    }
  }, pt.image = {
    filter: "img",
    replacement: function(t, r) {
      var e = Wt(r.getAttribute("alt")), o = r.getAttribute("src") || "", l = Wt(r.getAttribute("title")), i = l ? ' "' + l + '"' : "";
      return o ? "![" + e + "](" + o + i + ")" : "";
    }
  };
  function Wt(t) {
    return t ? t.replace(/(\n+\s*)+/g, `
`) : "";
  }
  function lr(t) {
    this.options = t, this._keep = [], this._remove = [], this.blankRule = {
      replacement: t.blankReplacement
    }, this.keepReplacement = t.keepReplacement, this.defaultRule = {
      replacement: t.defaultReplacement
    }, this.array = [];
    for (var r in t.rules)
      this.array.push(t.rules[r]);
  }
  lr.prototype = {
    add: function(t, r) {
      this.array.unshift(r);
    },
    keep: function(t) {
      this._keep.unshift({
        filter: t,
        replacement: this.keepReplacement
      });
    },
    remove: function(t) {
      this._remove.unshift({
        filter: t,
        replacement: function() {
          return "";
        }
      });
    },
    forNode: function(t) {
      if (t.isBlank)
        return this.blankRule;
      var r;
      return (r = oe(this.array, t, this.options)) || (r = oe(this._keep, t, this.options)) || (r = oe(this._remove, t, this.options)) ? r : this.defaultRule;
    },
    forEach: function(t) {
      for (var r = 0; r < this.array.length; r++)
        t(this.array[r], r);
    }
  };
  function oe(t, r, e) {
    for (var o = 0; o < t.length; o++) {
      var l = t[o];
      if (tn(l, r, e))
        return l;
    }
  }
  function tn(t, r, e) {
    var o = t.filter;
    if (typeof o == "string") {
      if (o === r.nodeName.toLowerCase())
        return !0;
    } else if (Array.isArray(o)) {
      if (o.indexOf(r.nodeName.toLowerCase()) > -1)
        return !0;
    } else if (typeof o == "function") {
      if (o.call(t, r, e))
        return !0;
    } else
      throw new TypeError("`filter` needs to be a string, array, or function");
  }
  function en(t) {
    var r = t.element, e = t.isBlock, o = t.isVoid, l = t.isPre || function(f) {
      return f.nodeName === "PRE";
    };
    if (!(!r.firstChild || l(r))) {
      for (var i = null, s = !1, a = null, c = ur(a, r, l); c !== r; ) {
        if (c.nodeType === 3 || c.nodeType === 4) {
          var p = c.data.replace(/[ \r\n\t]+/g, " ");
          if ((!i || / $/.test(i.data)) && !s && p[0] === " " && (p = p.substr(1)), !p) {
            c = le(c);
            continue;
          }
          c.data = p, i = c;
        } else if (c.nodeType === 1)
          e(c) || c.nodeName === "BR" ? (i && (i.data = i.data.replace(/ $/, "")), i = null, s = !1) : o(c) || l(c) ? (i = null, s = !0) : i && (s = !1);
        else {
          c = le(c);
          continue;
        }
        var b = ur(a, c, l);
        a = c, c = b;
      }
      i && (i.data = i.data.replace(/ $/, ""), i.data || le(i));
    }
  }
  function le(t) {
    var r = t.nextSibling || t.parentNode;
    return t.parentNode.removeChild(t), r;
  }
  function ur(t, r, e) {
    return t && t.parentNode === r || e(r) ? r.nextSibling || r.parentNode : r.firstChild || r.nextSibling || r.parentNode;
  }
  var ue = typeof window < "u" ? window : {};
  function rn() {
    var t = ue.DOMParser, r = !1;
    try {
      new t().parseFromString("", "text/html") && (r = !0);
    } catch {
    }
    return r;
  }
  function nn() {
    var t = function() {
    };
    return an() ? t.prototype.parseFromString = function(r) {
      var e = new window.ActiveXObject("htmlfile");
      return e.designMode = "on", e.open(), e.write(r), e.close(), e;
    } : t.prototype.parseFromString = function(r) {
      var e = document.implementation.createHTMLDocument("");
      return e.open(), e.write(r), e.close(), e;
    }, t;
  }
  function an() {
    var t = !1;
    try {
      document.implementation.createHTMLDocument("").open();
    } catch {
      ue.ActiveXObject && (t = !0);
    }
    return t;
  }
  var sn = rn() ? ue.DOMParser : nn();
  function on(t, r) {
    var e;
    if (typeof t == "string") {
      var o = ln().parseFromString(
        // DOM parsers arrange elements in the <head> and <body>.
        // Wrapping in a custom element ensures elements are reliably arranged in
        // a single element.
        '<x-turndown id="turndown-root">' + t + "</x-turndown>",
        "text/html"
      );
      e = o.getElementById("turndown-root");
    } else
      e = t.cloneNode(!0);
    return en({
      element: e,
      isBlock: ae,
      isVoid: ar,
      isPre: r.preformattedCode ? un : null
    }), e;
  }
  var ce;
  function ln() {
    return ce = ce || new sn(), ce;
  }
  function un(t) {
    return t.nodeName === "PRE" || t.nodeName === "CODE";
  }
  function cn(t, r) {
    return t.isBlock = ae(t), t.isCode = t.nodeName === "CODE" || t.parentNode.isCode, t.isBlank = hn(t), t.flankingWhitespace = fn(t, r), t;
  }
  function hn(t) {
    return !ar(t) && !Jr(t) && /^\s*$/i.test(t.textContent) && !qr(t) && !Qr(t);
  }
  function fn(t, r) {
    if (t.isBlock || r.preformattedCode && t.isCode)
      return { leading: "", trailing: "" };
    var e = dn(t.textContent);
    return e.leadingAscii && cr("left", t, r) && (e.leading = e.leadingNonAscii), e.trailingAscii && cr("right", t, r) && (e.trailing = e.trailingNonAscii), { leading: e.leading, trailing: e.trailing };
  }
  function dn(t) {
    var r = t.match(/^(([ \t\r\n]*)(\s*))(?:(?=\S)[\s\S]*\S)?((\s*?)([ \t\r\n]*))$/);
    return {
      leading: r[1],
      // whole string for whitespace-only strings
      leadingAscii: r[2],
      leadingNonAscii: r[3],
      trailing: r[4],
      // empty for whitespace-only strings
      trailingNonAscii: r[5],
      trailingAscii: r[6]
    };
  }
  function cr(t, r, e) {
    var o, l, i;
    return t === "left" ? (o = r.previousSibling, l = / $/) : (o = r.nextSibling, l = /^ /), o && (o.nodeType === 3 ? i = l.test(o.nodeValue) : e.preformattedCode && o.nodeName === "CODE" ? i = !1 : o.nodeType === 1 && !ae(o) && (i = l.test(o.textContent))), i;
  }
  var pn = Array.prototype.reduce, _n = [
    [/\\/g, "\\\\"],
    [/\*/g, "\\*"],
    [/^-/g, "\\-"],
    [/^\+ /g, "\\+ "],
    [/^(=+)/g, "\\$1"],
    [/^(#{1,6}) /g, "\\$1 "],
    [/`/g, "\\`"],
    [/^~~~/g, "\\~~~"],
    [/\[/g, "\\["],
    [/\]/g, "\\]"],
    [/^>/g, "\\>"],
    [/_/g, "\\_"],
    [/^(\d+)\. /g, "$1\\. "]
  ];
  function $t(t) {
    if (!(this instanceof $t))
      return new $t(t);
    var r = {
      rules: pt,
      headingStyle: "setext",
      hr: "* * *",
      bulletListMarker: "*",
      codeBlockStyle: "indented",
      fence: "```",
      emDelimiter: "_",
      strongDelimiter: "**",
      linkStyle: "inlined",
      linkReferenceStyle: "full",
      br: "  ",
      preformattedCode: !1,
      blankReplacement: function(e, o) {
        return o.isBlock ? `

` : "";
      },
      keepReplacement: function(e, o) {
        return o.isBlock ? `

` + o.outerHTML + `

` : o.outerHTML;
      },
      defaultReplacement: function(e, o) {
        return o.isBlock ? `

` + e + `

` : e;
      }
    };
    this.options = Xr({}, r, t), this.rules = new lr(this.options);
  }
  $t.prototype = {
    /**
     * The entry point for converting a string or DOM node to Markdown
     * @public
     * @param {String|HTMLElement} input The string or DOM node to convert
     * @returns A Markdown representation of the input
     * @type String
     */
    turndown: function(t) {
      if (!vn(t))
        throw new TypeError(
          t + " is not a string, or an element/document/fragment node."
        );
      if (t === "")
        return "";
      var r = hr.call(this, new on(t, this.options));
      return mn.call(this, r);
    },
    /**
     * Add one or more plugins
     * @public
     * @param {Function|Array} plugin The plugin or array of plugins to add
     * @returns The Turndown instance for chaining
     * @type Object
     */
    use: function(t) {
      if (Array.isArray(t))
        for (var r = 0; r < t.length; r++)
          this.use(t[r]);
      else if (typeof t == "function")
        t(this);
      else
        throw new TypeError("plugin must be a Function or an Array of Functions");
      return this;
    },
    /**
     * Adds a rule
     * @public
     * @param {String} key The unique key of the rule
     * @param {Object} rule The rule
     * @returns The Turndown instance for chaining
     * @type Object
     */
    addRule: function(t, r) {
      return this.rules.add(t, r), this;
    },
    /**
     * Keep a node (as HTML) that matches the filter
     * @public
     * @param {String|Array|Function} filter The unique key of the rule
     * @returns The Turndown instance for chaining
     * @type Object
     */
    keep: function(t) {
      return this.rules.keep(t), this;
    },
    /**
     * Remove a node that matches the filter
     * @public
     * @param {String|Array|Function} filter The unique key of the rule
     * @returns The Turndown instance for chaining
     * @type Object
     */
    remove: function(t) {
      return this.rules.remove(t), this;
    },
    /**
     * Escapes Markdown syntax
     * @public
     * @param {String} string The string to escape
     * @returns A string with Markdown syntax escaped
     * @type String
     */
    escape: function(t) {
      return _n.reduce(function(r, e) {
        return r.replace(e[0], e[1]);
      }, t);
    }
  };
  function hr(t) {
    var r = this;
    return pn.call(t.childNodes, function(e, o) {
      o = new cn(o, r.options);
      var l = "";
      return o.nodeType === 3 ? l = o.isCode ? o.nodeValue : r.escape(o.nodeValue) : o.nodeType === 1 && (l = gn.call(r, o)), fr(e, l);
    }, "");
  }
  function mn(t) {
    var r = this;
    return this.rules.forEach(function(e) {
      typeof e.append == "function" && (t = fr(t, e.append(r.options)));
    }), t.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
  }
  function gn(t) {
    var r = this.rules.forNode(t), e = hr.call(this, t), o = t.flankingWhitespace;
    return (o.leading || o.trailing) && (e = e.trim()), o.leading + r.replacement(e, t, this.options) + o.trailing;
  }
  function fr(t, r) {
    var e = rr(t), o = er(r), l = Math.max(t.length - e.length, r.length - o.length), i = `

`.substring(0, l);
    return e + i + o;
  }
  function vn(t) {
    return t != null && (typeof t == "string" || t.nodeType && (t.nodeType === 1 || t.nodeType === 9 || t.nodeType === 11));
  }
  const he = new $t({
    headingStyle: "atx",
    bulletListMarker: "-",
    codeBlockStyle: "fenced",
    emDelimiter: "*"
  });
  he.keep(["span", "div"]), he.addRule("strikethrough", {
    filter: ["s", "del"],
    replacement(t) {
      return `~~${t}~~`;
    }
  });
  async function bn(t, r) {
    if (!t)
      throw new Error("Keine Datei ausgewählt.");
    if (!t.name.toLowerCase().endsWith(".zip"))
      throw new Error("Bitte eine Google Keep ZIP-Datei wählen.");
    const e = await t.arrayBuffer(), o = await Vr.loadAsync(e), l = Object.values(o.files).filter((p) => {
      if (p.dir)
        return !1;
      const b = p.name.toLowerCase();
      return !(!b.endsWith(".json") || b.endsWith("labels.json") || b.includes("metadata"));
    });
    if (!l.length)
      throw new Error("Es wurden keine Google Keep JSON-Dateien gefunden.");
    const i = [], s = [], a = l.length;
    for (let p = 0; p < l.length; p++) {
      const b = l[p];
      try {
        const f = await b.async("string"), k = JSON.parse(f);
        if (k.isTrashed) {
          s.push({ file: b.name, type: "trashed" });
          continue;
        }
        const h = await yn(k, b.name, o);
        if (!h) {
          s.push({ file: b.name, type: "empty" });
          continue;
        }
        i.push({
          ...h,
          sortKey: h.createdAt ? Date.parse(h.createdAt) : Number.MAX_SAFE_INTEGER
        });
      } catch (f) {
        s.push({
          file: b.name,
          type: "error",
          detail: f instanceof Error ? f.message : "Unknown parsing error"
        });
      } finally {
        r == null || r(p + 1, a);
      }
    }
    return { notes: i.sort((p, b) => p.sortKey - b.sortKey).map(({ sortKey: p, ...b }) => b), skipped: s };
  }
  async function yn(t, r, e) {
    const o = [], l = dr(t.textContent);
    l && o.push(l);
    const i = wn(t.listContent);
    i && o.push(i);
    const s = kn(t.annotations);
    s && o.push(s);
    const a = await xn(t.attachments, e);
    if (a && o.push(a), !o.length)
      return null;
    const c = Sn(t, r);
    c.block && o.push(c.block);
    const p = An(t.labels);
    return {
      title: Cn(t, r),
      content: o.join(`

`).trim(),
      tags: p,
      keepLabels: p,
      sourceFile: r,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt
    };
  }
  function dr(t) {
    if (!t)
      return "";
    const r = t.replace(/\u003c/g, "<").trim();
    return r ? /<[^>]+>/.test(r) ? he.turndown(r) : r : "";
  }
  function wn(t) {
    if (!(t != null && t.length))
      return "";
    const r = t.map((e) => {
      var i;
      const o = (i = e.text) == null ? void 0 : i.trim();
      return o ? `- [${e.checked ?? e.isChecked ?? !1 ? "x" : " "}] ${o}` : null;
    }).filter(Boolean);
    return r.length ? `## Checkliste
${r.join(`
`)}` : "";
  }
  function kn(t) {
    if (!(t != null && t.length))
      return "";
    const r = t.map((e) => {
      var o;
      return (o = e.description) == null ? void 0 : o.trim();
    }).filter(Boolean);
    return r.length ? `## Annotationen
${r.map((e) => `- ${e}`).join(`
`)}` : "";
  }
  async function xn(t, r) {
    if (!(t != null && t.length) || !r)
      return "";
    const e = [];
    for (const o of t) {
      const l = zn(r, o);
      if (!l)
        continue;
      const i = typeof o == "string" ? void 0 : o, s = Nn(o, l.name), a = (i == null ? void 0 : i.mimeType) || (i == null ? void 0 : i.mimetype) || Tn(s), c = await l.async("base64"), p = `data:${a};base64,${c}`, b = a.startsWith("image/");
      e.push(b ? `![${s}](${p})` : `[${s}](${p})`);
    }
    return e.length ? `## Anhänge
${e.join(`
`)}` : "";
  }
  function Sn(t, r) {
    const e = _r(
      t.createdTimestampUsec || t.createdTime || t.created
    ), o = _r(
      t.userEditedTimestampUsec || t.updatedTimestampUsec || t.updatedTime || t.updated
    ), l = [];
    return l.push("---"), l.push(`> Imported from Google Keep (${pr(r)})`), e && l.push(`> Created: ${mr(e)}`), o && l.push(`> Updated: ${mr(o)}`), {
      block: l.join(`
`),
      createdAt: e,
      updatedAt: o
    };
  }
  function An(t) {
    return t != null && t.length ? t.map((r) => typeof r == "string" ? r : (r == null ? void 0 : r.name) ?? "").map((r) => r.trim()).filter(Boolean) : [];
  }
  function Cn(t, r) {
    var o;
    if ((o = t.title) != null && o.trim())
      return t.title.trim();
    const e = dr(t.textContent) || "";
    if (e) {
      const l = En(e);
      if (l)
        return l.length > 60 ? `${l.slice(0, 57)}…` : l;
    }
    return `Google Keep Notiz (${pr(r)})`;
  }
  function En(t) {
    return t.replace(/<[^>]+>/g, " ").replace(/[#*_`>-]/g, " ").replace(/\s+/g, " ").trim();
  }
  function pr(t) {
    const r = t.split("/").pop() ?? t;
    return r.replace(/\.json$/i, "") || r;
  }
  function _r(t) {
    if (!t)
      return;
    if (/^\d+$/.test(t)) {
      const e = Number(t);
      if (!Number.isFinite(e))
        return;
      const o = t.length > 13 ? Math.floor(e / 1e3) : e;
      return new Date(o).toISOString();
    }
    const r = new Date(t);
    return Number.isNaN(r.getTime()) ? void 0 : r.toISOString();
  }
  function mr(t) {
    try {
      const r = new Date(t);
      return new Intl.DateTimeFormat(void 0, {
        dateStyle: "medium",
        timeStyle: "short"
      }).format(r);
    } catch {
      return t;
    }
  }
  function zn(t, r) {
    const e = In(
      typeof r == "string" ? r : r.filePath || r.originalFilePath || r.originalFileName || r.fileName
    ), o = /* @__PURE__ */ new Set();
    e && (o.add(e), o.add(`Takeout/${e}`), o.add(`Takeout/Keep/${e}`), o.add(`Keep/${e}`));
    const l = e == null ? void 0 : e.split("/").pop();
    l && (o.add(l), o.add(`Takeout/Keep/${l}`), o.add(`Keep/${l}`));
    for (const i of o) {
      const s = t.file(i);
      if (s)
        return s;
    }
    if (l) {
      const i = Object.values(t.files).find((s) => s.name.endsWith(`/${l}`));
      if (i)
        return i;
    }
    return null;
  }
  function In(t) {
    if (t)
      return t.replace(/^\.\//, "").replace(/\\/g, "/");
  }
  function Nn(t, r) {
    var e;
    return typeof t == "string" ? t.split("/").pop() || t : t.fileName || t.originalFileName || ((e = t.filePath) == null ? void 0 : e.split("/").pop()) || r.split("/").pop() || "attachment";
  }
  function Tn(t) {
    var e;
    switch ((e = t.split(".").pop()) == null ? void 0 : e.toLowerCase()) {
      case "jpg":
      case "jpeg":
        return "image/jpeg";
      case "png":
        return "image/png";
      case "gif":
        return "image/gif";
      case "webp":
        return "image/webp";
      case "svg":
        return "image/svg+xml";
      case "m4a":
        return "audio/mp4";
      case "wav":
        return "audio/wav";
      case "mp3":
        return "audio/mpeg";
      case "pdf":
        return "application/pdf";
      default:
        return "application/octet-stream";
    }
  }
  function Bn({ onClose: t }) {
    const [r, e] = wt(null), [o, l] = wt("idle"), [i, s] = wt(0), [a, c] = wt(null), [p, b] = wt([]), [f, k] = wt(null), [h, y] = wt(null), [d, m] = wt(""), [_, v] = wt(!1), A = zr(null), S = Pn(), E = Lt(() => {
      const O = (a == null ? void 0 : a.notes.length) ?? 0, q = (a == null ? void 0 : a.skipped.length) ?? 0, j = new Set((a == null ? void 0 : a.notes.flatMap((J) => J.tags)) ?? []);
      return { total: O, skipped: q, labels: j.size };
    }, [a]), P = Lt(() => {
      switch (o) {
        case "parsing":
          return S("dialog.status.parsing", "Analysiere ZIP-Datei …");
        case "ready":
          return S("dialog.status.ready", "Bereit für den Import");
        case "importing":
          return S("dialog.status.importing", "Importiere Notizen …");
        case "completed":
          return S("dialog.status.completed", "Import abgeschlossen");
        case "error":
          return S("dialog.status.error", "Fehler beim Import");
        default:
          return S("dialog.status.idle", "Wähle eine ZIP-Datei aus");
      }
    }, [o, S]), D = Lt(
      () => [
        S("dialog.instructions.export", 'Öffne takeout.google.com und wähle "Google Keep" aus.'),
        S("dialog.instructions.zip", 'Wähle beim Export "JSON" + "Medien" und exportiere als ZIP-Datei.'),
        S("dialog.instructions.import", "Ziehe die ZIP-Datei hierher oder wähle sie über den Button aus, um sie zu importieren.")
      ],
      [S]
    ), Z = !!(a != null && a.notes.length) && !["parsing", "importing"].includes(o), B = () => {
      l("idle"), e(null), c(null), s(0), b([]), k(null), y(null), m("");
    }, W = async (O) => {
      if (!O.name.toLowerCase().endsWith(".zip")) {
        k(S("dialog.errors.invalidFile", "Bitte eine ZIP-Datei auswählen.")), l("error");
        return;
      }
      e(O), l("parsing"), s(4), k(null), b([]);
      try {
        const q = await bn(O, (j, J) => {
          const N = J ? j / J : 0;
          s(Math.min(60, Math.max(10, Math.round(N * 60))));
        });
        if (c(q), y(/* @__PURE__ */ new Date()), !q.notes.length) {
          l("error"), k(S("dialog.errors.noNotes", "Keine importierbaren Notizen gefunden."));
          return;
        }
        l("ready"), s(70);
      } catch (q) {
        l("error"), k(q instanceof Error ? q.message : S("dialog.errors.generic", "Analyse fehlgeschlagen."));
      }
    }, Y = async (O) => {
      var j;
      const q = (j = O.currentTarget.files) == null ? void 0 : j[0];
      q && (await W(q), O.currentTarget.value = "");
    }, x = async (O) => {
      var j, J;
      O.preventDefault(), v(!1);
      const q = (J = (j = O.dataTransfer) == null ? void 0 : j.files) == null ? void 0 : J[0];
      q && await W(q);
    }, R = (O) => {
      O.preventDefault(), v(!0);
    }, u = (O) => {
      O.preventDefault(), v(!1);
    }, L = async () => {
      var J, N, I, Q, K, G;
      if (!(a != null && a.notes.length))
        return;
      l("importing"), s(70), k(null), b([]);
      let O = 0, q = 0;
      const j = [];
      for (let st = 0; st < a.notes.length; st++) {
        const lt = a.notes[st];
        m(lt.title);
        try {
          await Rn(lt), O += 1, j.push({ title: lt.title, status: "success" });
        } catch (nt) {
          q += 1;
          const at = nt instanceof Error ? nt.message : S("dialog.errors.generic", "Unbekannter Fehler.");
          j.push({ title: lt.title, status: "error", message: at }), k(at);
        } finally {
          const nt = (st + 1) / a.notes.length;
          s(70 + Math.round(nt * 30)), b([...j]);
        }
      }
      m(""), l("completed"), q ? (I = (N = (J = window.Blinko) == null ? void 0 : J.toast) == null ? void 0 : N.error) == null || I.call(
        N,
        S("dialog.toast.importPartial", "Import abgeschlossen, einige Notizen konnten nicht übernommen werden.")
      ) : (G = (K = (Q = window.Blinko) == null ? void 0 : Q.toast) == null ? void 0 : K.success) == null || G.call(K, S("dialog.toast.importSuccess", "Alle Notizen wurden erfolgreich importiert."));
    }, et = (a == null ? void 0 : a.skipped) ?? [];
    return /* @__PURE__ */ V("div", { class: "max-w-3xl w-full text-sm text-slate-800", children: /* @__PURE__ */ V("div", { class: "space-y-6", children: [
      /* @__PURE__ */ V("header", { class: "space-y-1", children: /* @__PURE__ */ V("p", { class: "text-base text-slate-600", children: S("dialog.subtitle", "Importiere deine Google Keep Notizen in wenigen Minuten in Blinko.") }) }),
      /* @__PURE__ */ V(
        "section",
        {
          class: `rounded-xl border-2 border-dashed p-6 transition-colors ${_ ? "border-blue-500 bg-blue-50" : "border-slate-200 bg-white"}`,
          onDrop: x,
          onDragOver: R,
          onDragLeave: u,
          onClick: () => {
            var O;
            return (O = A.current) == null ? void 0 : O.click();
          },
          children: [
            /* @__PURE__ */ V("p", { class: "text-lg font-semibold mb-2", children: S("dialog.dropzone.title", "Google Takeout ZIP auswählen") }),
            /* @__PURE__ */ V("p", { class: "text-slate-600 mb-4", children: S("dialog.dropzone.instructions", "Ziehe deine exportierte Datei hierher oder klicke, um sie auszuwählen.") }),
            /* @__PURE__ */ V(
              "button",
              {
                type: "button",
                class: "inline-flex items-center gap-2 rounded-full border border-blue-500 px-4 py-2 text-blue-600 hover:bg-blue-50",
                children: S("dialog.dropzone.cta", "Datei auswählen")
              }
            ),
            /* @__PURE__ */ V("p", { class: "mt-3 text-xs text-slate-500", children: S("dialog.dropzone.hint", "Unterstützt werden unveränderte ZIP-Exporte aus Google Takeout → Keep.") }),
            /* @__PURE__ */ V(
              "input",
              {
                type: "file",
                accept: ".zip",
                ref: A,
                onChange: Y,
                class: "hidden"
              }
            )
          ]
        }
      ),
      r && /* @__PURE__ */ V("section", { class: "rounded-xl border border-slate-200 bg-white p-5", children: /* @__PURE__ */ V("div", { class: "flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ V("div", { children: [
          /* @__PURE__ */ V("p", { class: "text-xs uppercase tracking-wide text-slate-500", children: S("dialog.summary.file", "Ausgewählte Datei") }),
          /* @__PURE__ */ V("p", { class: "font-medium text-slate-900", children: r.name }),
          /* @__PURE__ */ V("p", { class: "text-xs text-slate-500", children: [
            Dn(r.size),
            " · ",
            S("dialog.summary.lastModified", "Geändert"),
            ": ",
            gr(new Date(r.lastModified))
          ] })
        ] }),
        /* @__PURE__ */ V(
          "button",
          {
            type: "button",
            class: "text-xs text-blue-600 hover:underline",
            onClick: B,
            children: S("dialog.buttons.reset", "Andere Datei wählen")
          }
        )
      ] }) }),
      /* @__PURE__ */ V("section", { class: "grid gap-4 rounded-xl border border-slate-200 bg-white p-5 md:grid-cols-2", children: [
        /* @__PURE__ */ V("div", { children: [
          /* @__PURE__ */ V("p", { class: "text-xs uppercase tracking-wide text-slate-500", children: S("dialog.summary.title", "Analyse") }),
          /* @__PURE__ */ V("p", { class: "text-2xl font-semibold text-slate-900", children: E.total || "—" }),
          /* @__PURE__ */ V("p", { class: "text-xs text-slate-500", children: S("dialog.summary.notes", "importierbare Notizen") })
        ] }),
        /* @__PURE__ */ V("div", { children: [
          /* @__PURE__ */ V("p", { class: "text-xs uppercase tracking-wide text-slate-500", children: S("dialog.summary.labels", "Labels") }),
          /* @__PURE__ */ V("p", { class: "text-2xl font-semibold text-slate-900", children: E.labels || "—" }),
          /* @__PURE__ */ V("p", { class: "text-xs text-slate-500", children: [
            S("dialog.summary.skipped", "Übersprungen"),
            " · ",
            E.skipped
          ] })
        ] }),
        /* @__PURE__ */ V("div", { class: "md:col-span-2 mt-4", children: [
          /* @__PURE__ */ V("div", { class: "mb-2 flex items-center justify-between text-xs text-slate-500", children: [
            /* @__PURE__ */ V("span", { children: P }),
            /* @__PURE__ */ V("span", { children: [
              i,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ V("div", { class: "h-2 rounded-full bg-slate-200", children: /* @__PURE__ */ V(
            "div",
            {
              class: "h-2 rounded-full bg-blue-500 transition-all",
              style: { width: `${i}%` }
            }
          ) }),
          d && /* @__PURE__ */ V("p", { class: "mt-2 text-xs text-slate-500", children: [
            S("dialog.progress.currentNote", "Aktuelle Notiz"),
            ": ",
            /* @__PURE__ */ V("span", { class: "font-medium text-slate-700", children: d })
          ] }),
          f && /* @__PURE__ */ V("p", { class: "mt-2 rounded-md bg-red-50 px-3 py-2 text-xs text-red-600", children: f })
        ] })
      ] }),
      /* @__PURE__ */ V("section", { class: "rounded-xl border border-slate-200 bg-white p-5", children: [
        /* @__PURE__ */ V("p", { class: "text-sm font-semibold text-slate-900 mb-2", children: S("dialog.instructions.title", "So funktioniert der Import") }),
        /* @__PURE__ */ V("ol", { class: "list-decimal space-y-2 pl-5 text-slate-600", children: D.map((O, q) => /* @__PURE__ */ V("li", { children: O }, `${O}-${q}`)) })
      ] }),
      /* @__PURE__ */ V("section", { class: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ V("div", { class: "rounded-xl border border-slate-200 bg-white p-5", children: [
          /* @__PURE__ */ V("p", { class: "mb-3 text-sm font-semibold text-slate-900", children: S("dialog.skipped.title", "Übersprungene Notizen") }),
          et.length ? /* @__PURE__ */ V("ul", { class: "space-y-2 text-xs text-slate-600", children: [
            et.slice(0, 6).map((O) => /* @__PURE__ */ V("li", { class: "rounded-md border border-slate-100 px-3 py-2", children: [
              /* @__PURE__ */ V("p", { class: "font-medium text-slate-800", children: O.file.split("/").pop() ?? O.file }),
              /* @__PURE__ */ V("p", { class: "text-slate-500", children: On(O, S) }),
              O.detail && O.type === "error" && /* @__PURE__ */ V("p", { class: "text-[11px] text-slate-400", children: O.detail })
            ] }, O.file)),
            et.length > 6 && /* @__PURE__ */ V("li", { class: "text-[11px] text-slate-400", children: [
              "+",
              et.length - 6,
              " ",
              S("dialog.skipped.more", "weitere")
            ] })
          ] }) : /* @__PURE__ */ V("p", { class: "text-xs text-slate-500", children: S("dialog.skipped.empty", "Keine übersprungenen Notizen") })
        ] }),
        /* @__PURE__ */ V("div", { class: "rounded-xl border border-slate-200 bg-white p-5", children: [
          /* @__PURE__ */ V("p", { class: "mb-3 text-sm font-semibold text-slate-900", children: S("dialog.logs.title", "Import-Protokoll") }),
          p.length ? /* @__PURE__ */ V("ul", { class: "space-y-2 text-xs text-slate-600", children: p.slice(-8).map((O, q) => /* @__PURE__ */ V(
            "li",
            {
              class: `rounded-md px-3 py-2 ${O.status === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"}`,
              children: [
                /* @__PURE__ */ V("p", { class: "font-medium", children: O.title }),
                O.status === "error" && O.message && /* @__PURE__ */ V("p", { class: "text-[11px]", children: O.message })
              ]
            },
            `${O.title}-${q}`
          )) }) : /* @__PURE__ */ V("p", { class: "text-xs text-slate-500", children: S("dialog.logs.empty", "Noch kein Import gestartet") })
        ] })
      ] }),
      /* @__PURE__ */ V("section", { class: "rounded-xl border border-blue-100 bg-blue-50 p-5 text-xs text-blue-700", children: [
        /* @__PURE__ */ V("p", { class: "font-semibold", children: S("dialog.security.title", "Datenschutz") }),
        /* @__PURE__ */ V("p", { children: S("dialog.security.description", "Alle Daten bleiben lokal in deinem Browser. Es werden nur Notizen zu deinem Blinko-Konto hinzugefügt – es erfolgt kein Upload zu externen Diensten.") })
      ] }),
      /* @__PURE__ */ V("footer", { class: "flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ V("div", { class: "text-xs text-slate-500", children: h && /* @__PURE__ */ V("span", { children: [
          S("dialog.summary.analyzedAt", "Analysiert"),
          ": ",
          gr(h)
        ] }) }),
        /* @__PURE__ */ V("div", { class: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ V(
            "button",
            {
              type: "button",
              onClick: L,
              disabled: !Z,
              class: `rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm ${Z ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-300 cursor-not-allowed"}`,
              children: S("dialog.buttons.import", "Notizen importieren")
            }
          ),
          /* @__PURE__ */ V(
            "button",
            {
              type: "button",
              class: "rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50",
              onClick: B,
              disabled: !r,
              children: S("dialog.buttons.reset", "Zurücksetzen")
            }
          ),
          /* @__PURE__ */ V(
            "button",
            {
              type: "button",
              class: "rounded-full border border-transparent px-4 py-2 text-sm text-slate-500 hover:text-slate-700",
              onClick: t,
              children: S("dialog.buttons.close", "Schließen")
            }
          )
        ] })
      ] })
    ] }) });
  }
  function On(t, r) {
    switch (t.type) {
      case "trashed":
        return r("dialog.skipped.reason.trashed", "Im Papierkorb markiert");
      case "empty":
        return r("dialog.skipped.reason.empty", "Keine Inhalte gefunden");
      case "error":
      default:
        return t.detail || r("dialog.skipped.reason.error", "Fehler beim Lesen der Datei");
    }
  }
  function Dn(t) {
    if (!Number.isFinite(t) || t <= 0)
      return "0 B";
    const r = ["B", "KB", "MB", "GB"], e = Math.min(r.length - 1, Math.floor(Math.log(t) / Math.log(1024)));
    return `${(t / Math.pow(1024, e)).toFixed(1)} ${r[e]}`;
  }
  function gr(t) {
    return new Intl.DateTimeFormat(void 0, { dateStyle: "medium", timeStyle: "short" }).format(t);
  }
  async function Rn(t) {
    var e, o, l, i, s, a, c, p, b, f;
    const r = {
      title: t.title,
      content: t.content,
      tags: t.tags
    };
    if ((i = (l = (o = (e = window.Blinko) == null ? void 0 : e.api) == null ? void 0 : o.note) == null ? void 0 : l.createNote) != null && i.mutate)
      return window.Blinko.api.note.createNote.mutate(r);
    if ((p = (c = (a = (s = window.Blinko) == null ? void 0 : s.api) == null ? void 0 : a.note) == null ? void 0 : c.create) != null && p.mutate)
      return window.Blinko.api.note.create.mutate(r);
    if ((f = (b = window.Blinko) == null ? void 0 : b.notes) != null && f.create)
      return window.Blinko.notes.create(r);
    throw new Error("Blinko API ist nicht verfügbar.");
  }
  function Pn() {
    return (t, r, e) => {
      var o, l, i;
      return ((i = (l = (o = window.Blinko) == null ? void 0 : o.i18n) == null ? void 0 : l.t) == null ? void 0 : i.call(l, t, e)) ?? r;
    };
  }
  const fe = Qe.name, Fn = `
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 3h12a2 2 0 0 1 2 2v13a1 1 0 0 1-1 1h-3l-3 3-3-3H5a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M12 7v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
  <path d="M9.5 9.5h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
`;
  System.register([], (t) => ({
    execute: () => {
      t("default", class {
        constructor() {
          this.withSettingPanel = !1, this.dialogContainers = /* @__PURE__ */ new Set(), this.openDialog = () => {
            var l;
            const e = () => {
              this.dialogContainers.forEach((i) => Ve(null, i)), this.dialogContainers.clear(), window.Blinko.closeDialog();
            }, o = window.Blinko.showDialog({
              title: ((l = window.Blinko.i18n) == null ? void 0 : l.t("dialog.title")) ?? "Google Keep Import",
              width: 560,
              content: () => {
                const i = document.createElement("div");
                return i.dataset.plugin = fe, this.dialogContainers.add(i), Ve(/* @__PURE__ */ V(Bn, { onClose: e }), i), i;
              }
            });
            this.dialogClose = o != null && o.close ? () => {
              var i;
              (i = o.close) == null || i.call(o), e();
            } : e;
          }, Object.assign(this, Qe);
        }
        init() {
          this.initI18n(), this.registerToolbarIcon();
        }
        registerToolbarIcon() {
          var e;
          window.Blinko.addToolBarIcon({
            name: fe,
            placement: "top",
            tooltip: ((e = window.Blinko.i18n) == null ? void 0 : e.t("toolbar.tooltip")) ?? "Google Keep Import",
            icon: Fn,
            onClick: this.openDialog
          });
        }
        initI18n() {
          var o;
          const e = (o = window.Blinko) == null ? void 0 : o.i18n;
          e && (e.addResourceBundle("en", "translation", $r, !0, !0), e.addResourceBundle("de", "translation", Hr, !0, !0));
        }
        destroy() {
          var e;
          (e = this.dialogClose) == null || e.call(this), window.Blinko.removeToolBarIcon && window.Blinko.removeToolBarIcon(fe);
        }
      });
    }
  }));
})();
