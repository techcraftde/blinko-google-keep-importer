(function() {
  var Nt, rt, _e, xt, me, ge, ve, be, Vt, Yt, Xt, Ct = {}, ye = [], yr = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Et = Array.isArray;
  function bt(t, r) {
    for (var e in r)
      t[e] = r[e];
    return t;
  }
  function qt(t) {
    t && t.parentNode && t.parentNode.removeChild(t);
  }
  function Jt(t, r, e) {
    var s, l, n, a = {};
    for (n in r)
      n == "key" ? s = r[n] : n == "ref" ? l = r[n] : a[n] = r[n];
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? Nt.call(arguments, 2) : e), typeof t == "function" && t.defaultProps != null)
      for (n in t.defaultProps)
        a[n] === void 0 && (a[n] = t.defaultProps[n]);
    return Bt(t, a, s, l, null);
  }
  function Bt(t, r, e, s, l) {
    var n = { type: t, props: r, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: l ?? ++_e, __i: -1, __u: 0 };
    return l == null && rt.vnode != null && rt.vnode(n), n;
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
  function we(t) {
    var r, e;
    if ((t = t.__) != null && t.__c != null) {
      for (t.__e = t.__c.base = null, r = 0; r < t.__k.length; r++)
        if ((e = t.__k[r]) != null && e.__e != null) {
          t.__e = t.__c.base = e.__e;
          break;
        }
      return we(t);
    }
  }
  function ke(t) {
    (!t.__d && (t.__d = !0) && xt.push(t) && !Ot.__r++ || me != rt.debounceRendering) && ((me = rt.debounceRendering) || ge)(Ot);
  }
  function Ot() {
    for (var t, r, e, s, l, n, a, o = 1; xt.length; )
      xt.length > o && xt.sort(ve), t = xt.shift(), o = xt.length, t.__d && (e = void 0, s = void 0, l = (s = (r = t).__v).__e, n = [], a = [], r.__P && ((e = bt({}, s)).__v = s.__v + 1, rt.vnode && rt.vnode(e), Qt(r.__P, e, s, r.__n, r.__P.namespaceURI, 32 & s.__u ? [l] : null, n, l ?? At(s), !!(32 & s.__u), a), e.__v = s.__v, e.__.__k[e.__i] = e, Ee(n, e, a), s.__e = s.__ = null, e.__e != l && we(e)));
    Ot.__r = 0;
  }
  function xe(t, r, e, s, l, n, a, o, c, p, b) {
    var d, k, h, y, f, m, _, v = s && s.__k || ye, A = r.length;
    for (c = wr(e, r, v, c, A), d = 0; d < A; d++)
      (h = e.__k[d]) != null && (k = h.__i == -1 ? Ct : v[h.__i] || Ct, h.__i = d, m = Qt(t, h, k, l, n, a, o, c, p, b), y = h.__e, h.ref && k.ref != h.ref && (k.ref && ee(k.ref, null, h), b.push(h.ref, h.__c || y, h)), f == null && y != null && (f = y), (_ = !!(4 & h.__u)) || k.__k === h.__k ? c = Se(h, c, t, _) : typeof h.type == "function" && m !== void 0 ? c = m : y && (c = y.nextSibling), h.__u &= -7);
    return e.__e = f, c;
  }
  function wr(t, r, e, s, l) {
    var n, a, o, c, p, b = e.length, d = b, k = 0;
    for (t.__k = new Array(l), n = 0; n < l; n++)
      (a = r[n]) != null && typeof a != "boolean" && typeof a != "function" ? (typeof a == "string" || typeof a == "number" || typeof a == "bigint" || a.constructor == String ? a = t.__k[n] = Bt(null, a, null, null, null) : Et(a) ? a = t.__k[n] = Bt(St, { children: a }, null, null, null) : a.constructor == null && a.__b > 0 ? a = t.__k[n] = Bt(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : t.__k[n] = a, c = n + k, a.__ = t, a.__b = t.__b + 1, o = null, (p = a.__i = kr(a, e, c, d)) != -1 && (d--, (o = e[p]) && (o.__u |= 2)), o == null || o.__v == null ? (p == -1 && (l > b ? k-- : l < b && k++), typeof a.type != "function" && (a.__u |= 4)) : p != c && (p == c - 1 ? k-- : p == c + 1 ? k++ : (p > c ? k-- : k++, a.__u |= 4))) : t.__k[n] = null;
    if (d)
      for (n = 0; n < b; n++)
        (o = e[n]) != null && !(2 & o.__u) && (o.__e == s && (s = At(o)), Ie(o, o));
    return s;
  }
  function Se(t, r, e, s) {
    var l, n;
    if (typeof t.type == "function") {
      for (l = t.__k, n = 0; l && n < l.length; n++)
        l[n] && (l[n].__ = t, r = Se(l[n], r, e, s));
      return r;
    }
    t.__e != r && (s && (r && t.type && !r.parentNode && (r = At(t)), e.insertBefore(t.__e, r || null)), r = t.__e);
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
  function kr(t, r, e, s) {
    var l, n, a, o = t.key, c = t.type, p = r[e], b = p != null && (2 & p.__u) == 0;
    if (p === null && o == null || b && o == p.key && c == p.type)
      return e;
    if (s > (b ? 1 : 0)) {
      for (l = e - 1, n = e + 1; l >= 0 || n < r.length; )
        if ((p = r[a = l >= 0 ? l-- : n++]) != null && !(2 & p.__u) && o == p.key && c == p.type)
          return a;
    }
    return -1;
  }
  function Ae(t, r, e) {
    r[0] == "-" ? t.setProperty(r, e ?? "") : t[r] = e == null ? "" : typeof e != "number" || yr.test(r) ? e : e + "px";
  }
  function Pt(t, r, e, s, l) {
    var n, a;
    t:
      if (r == "style")
        if (typeof e == "string")
          t.style.cssText = e;
        else {
          if (typeof s == "string" && (t.style.cssText = s = ""), s)
            for (r in s)
              e && r in e || Ae(t.style, r, "");
          if (e)
            for (r in e)
              s && e[r] == s[r] || Ae(t.style, r, e[r]);
        }
      else if (r[0] == "o" && r[1] == "n")
        n = r != (r = r.replace(be, "$1")), a = r.toLowerCase(), r = a in t || r == "onFocusOut" || r == "onFocusIn" ? a.slice(2) : r.slice(2), t.l || (t.l = {}), t.l[r + n] = e, e ? s ? e.u = s.u : (e.u = Vt, t.addEventListener(r, n ? Xt : Yt, n)) : t.removeEventListener(r, n ? Xt : Yt, n);
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
  function Ce(t) {
    return function(r) {
      if (this.l) {
        var e = this.l[r.type + t];
        if (r.t == null)
          r.t = Vt++;
        else if (r.t < e.u)
          return;
        return e(rt.event ? rt.event(r) : r);
      }
    };
  }
  function Qt(t, r, e, s, l, n, a, o, c, p) {
    var b, d, k, h, y, f, m, _, v, A, S, E, R, D, Z, B, W, X = r.type;
    if (r.constructor != null)
      return null;
    128 & e.__u && (c = !!(32 & e.__u), n = [o = r.__e = e.__e]), (b = rt.__b) && b(r);
    t:
      if (typeof X == "function")
        try {
          if (_ = r.props, v = "prototype" in X && X.prototype.render, A = (b = X.contextType) && s[b.__c], S = b ? A ? A.props.value : b.__ : s, e.__c ? m = (d = r.__c = e.__c).__ = d.__E : (v ? r.__c = d = new X(_, S) : (r.__c = d = new yt(_, S), d.constructor = X, d.render = Sr), A && A.sub(d), d.state || (d.state = {}), d.__n = s, k = d.__d = !0, d.__h = [], d._sb = []), v && d.__s == null && (d.__s = d.state), v && X.getDerivedStateFromProps != null && (d.__s == d.state && (d.__s = bt({}, d.__s)), bt(d.__s, X.getDerivedStateFromProps(_, d.__s))), h = d.props, y = d.state, d.__v = r, k)
            v && X.getDerivedStateFromProps == null && d.componentWillMount != null && d.componentWillMount(), v && d.componentDidMount != null && d.__h.push(d.componentDidMount);
          else {
            if (v && X.getDerivedStateFromProps == null && _ !== h && d.componentWillReceiveProps != null && d.componentWillReceiveProps(_, S), r.__v == e.__v || !d.__e && d.shouldComponentUpdate != null && d.shouldComponentUpdate(_, d.__s, S) === !1) {
              for (r.__v != e.__v && (d.props = _, d.state = d.__s, d.__d = !1), r.__e = e.__e, r.__k = e.__k, r.__k.some(function(x) {
                x && (x.__ = r);
              }), E = 0; E < d._sb.length; E++)
                d.__h.push(d._sb[E]);
              d._sb = [], d.__h.length && a.push(d);
              break t;
            }
            d.componentWillUpdate != null && d.componentWillUpdate(_, d.__s, S), v && d.componentDidUpdate != null && d.__h.push(function() {
              d.componentDidUpdate(h, y, f);
            });
          }
          if (d.context = S, d.props = _, d.__P = t, d.__e = !1, R = rt.__r, D = 0, v) {
            for (d.state = d.__s, d.__d = !1, R && R(r), b = d.render(d.props, d.state, d.context), Z = 0; Z < d._sb.length; Z++)
              d.__h.push(d._sb[Z]);
            d._sb = [];
          } else
            do
              d.__d = !1, R && R(r), b = d.render(d.props, d.state, d.context), d.state = d.__s;
            while (d.__d && ++D < 25);
          d.state = d.__s, d.getChildContext != null && (s = bt(bt({}, s), d.getChildContext())), v && !k && d.getSnapshotBeforeUpdate != null && (f = d.getSnapshotBeforeUpdate(h, y)), B = b, b != null && b.type === St && b.key == null && (B = ze(b.props.children)), o = xe(t, Et(B) ? B : [B], r, e, s, l, n, a, o, c, p), d.base = r.__e, r.__u &= -161, d.__h.length && a.push(d), m && (d.__E = d.__ = null);
        } catch (x) {
          if (r.__v = null, c || n != null)
            if (x.then) {
              for (r.__u |= c ? 160 : 128; o && o.nodeType == 8 && o.nextSibling; )
                o = o.nextSibling;
              n[n.indexOf(o)] = null, r.__e = o;
            } else {
              for (W = n.length; W--; )
                qt(n[W]);
              te(r);
            }
          else
            r.__e = e.__e, r.__k = e.__k, x.then || te(r);
          rt.__e(x, r, e);
        }
      else
        n == null && r.__v == e.__v ? (r.__k = e.__k, r.__e = e.__e) : o = r.__e = xr(e.__e, r, e, s, l, n, a, c, p);
    return (b = rt.diffed) && b(r), 128 & r.__u ? void 0 : o;
  }
  function te(t) {
    t && t.__c && (t.__c.__e = !0), t && t.__k && t.__k.forEach(te);
  }
  function Ee(t, r, e) {
    for (var s = 0; s < e.length; s++)
      ee(e[s], e[++s], e[++s]);
    rt.__c && rt.__c(r, t), t.some(function(l) {
      try {
        t = l.__h, l.__h = [], t.some(function(n) {
          n.call(l);
        });
      } catch (n) {
        rt.__e(n, l.__v);
      }
    });
  }
  function ze(t) {
    return typeof t != "object" || t == null || t.__b && t.__b > 0 ? t : Et(t) ? t.map(ze) : bt({}, t);
  }
  function xr(t, r, e, s, l, n, a, o, c) {
    var p, b, d, k, h, y, f, m = e.props || Ct, _ = r.props, v = r.type;
    if (v == "svg" ? l = "http://www.w3.org/2000/svg" : v == "math" ? l = "http://www.w3.org/1998/Math/MathML" : l || (l = "http://www.w3.org/1999/xhtml"), n != null) {
      for (p = 0; p < n.length; p++)
        if ((h = n[p]) && "setAttribute" in h == !!v && (v ? h.localName == v : h.nodeType == 3)) {
          t = h, n[p] = null;
          break;
        }
    }
    if (t == null) {
      if (v == null)
        return document.createTextNode(_);
      t = document.createElementNS(l, v, _.is && _), o && (rt.__m && rt.__m(r, n), o = !1), n = null;
    }
    if (v == null)
      m === _ || o && t.data == _ || (t.data = _);
    else {
      if (n = n && Nt.call(t.childNodes), !o && n != null)
        for (m = {}, p = 0; p < t.attributes.length; p++)
          m[(h = t.attributes[p]).name] = h.value;
      for (p in m)
        if (h = m[p], p != "children") {
          if (p == "dangerouslySetInnerHTML")
            d = h;
          else if (!(p in _)) {
            if (p == "value" && "defaultValue" in _ || p == "checked" && "defaultChecked" in _)
              continue;
            Pt(t, p, null, h, l);
          }
        }
      for (p in _)
        h = _[p], p == "children" ? k = h : p == "dangerouslySetInnerHTML" ? b = h : p == "value" ? y = h : p == "checked" ? f = h : o && typeof h != "function" || m[p] === h || Pt(t, p, h, m[p], l);
      if (b)
        o || d && (b.__html == d.__html || b.__html == t.innerHTML) || (t.innerHTML = b.__html), r.__k = [];
      else if (d && (t.innerHTML = ""), xe(r.type == "template" ? t.content : t, Et(k) ? k : [k], r, e, s, v == "foreignObject" ? "http://www.w3.org/1999/xhtml" : l, n, a, n ? n[0] : e.__k && At(e, 0), o, c), n != null)
        for (p = n.length; p--; )
          qt(n[p]);
      o || (p = "value", v == "progress" && y == null ? t.removeAttribute("value") : y != null && (y !== t[p] || v == "progress" && !y || v == "option" && y != m[p]) && Pt(t, p, y, m[p], l), p = "checked", f != null && f != t[p] && Pt(t, p, f, m[p], l));
    }
    return t;
  }
  function ee(t, r, e) {
    try {
      if (typeof t == "function") {
        var s = typeof t.__u == "function";
        s && t.__u(), s && r == null || (t.__u = t(r));
      } else
        t.current = r;
    } catch (l) {
      rt.__e(l, e);
    }
  }
  function Ie(t, r, e) {
    var s, l;
    if (rt.unmount && rt.unmount(t), (s = t.ref) && (s.current && s.current != t.__e || ee(s, null, r)), (s = t.__c) != null) {
      if (s.componentWillUnmount)
        try {
          s.componentWillUnmount();
        } catch (n) {
          rt.__e(n, r);
        }
      s.base = s.__P = null;
    }
    if (s = t.__k)
      for (l = 0; l < s.length; l++)
        s[l] && Ie(s[l], r, e || typeof t.type != "function");
    e || qt(t.__e), t.__c = t.__ = t.__e = void 0;
  }
  function Sr(t, r, e) {
    return this.constructor(t, e);
  }
  function Ar(t, r, e) {
    var s, l, n, a;
    r == document && (r = document.documentElement), rt.__ && rt.__(t, r), l = (s = typeof e == "function") ? null : e && e.__k || r.__k, n = [], a = [], Qt(r, t = (!s && e || r).__k = Jt(St, null, [t]), l || Ct, Ct, r.namespaceURI, !s && e ? [e] : l ? null : r.firstChild ? Nt.call(r.childNodes) : null, n, !s && e ? e : l ? l.__e : r.firstChild, s, a), Ee(n, t, a);
  }
  Nt = ye.slice, rt = { __e: function(t, r, e, s) {
    for (var l, n, a; r = r.__; )
      if ((l = r.__c) && !l.__)
        try {
          if ((n = l.constructor) && n.getDerivedStateFromError != null && (l.setState(n.getDerivedStateFromError(t)), a = l.__d), l.componentDidCatch != null && (l.componentDidCatch(t, s || {}), a = l.__d), a)
            return l.__E = l;
        } catch (o) {
          t = o;
        }
    throw t;
  } }, _e = 0, yt.prototype.setState = function(t, r) {
    var e;
    e = this.__s != null && this.__s != this.state ? this.__s : this.__s = bt({}, this.state), typeof t == "function" && (t = t(bt({}, e), this.props)), t && bt(e, t), t != null && this.__v && (r && this._sb.push(r), ke(this));
  }, yt.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = !0, t && this.__h.push(t), ke(this));
  }, yt.prototype.render = St, xt = [], ge = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ve = function(t, r) {
    return t.__v.__b - r.__v.__b;
  }, Ot.__r = 0, be = /(PointerCapture)$|Capture$/i, Vt = 0, Yt = Ce(!1), Xt = Ce(!0);
  var Cr = 0;
  function K(t, r, e, s, l, n) {
    r || (r = {});
    var a, o, c = r;
    if ("ref" in c)
      for (o in c = {}, r)
        o == "ref" ? a = r[o] : c[o] = r[o];
    var p = { type: t, props: c, key: e, ref: a, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Cr, __i: -1, __u: 0, __source: l, __self: n };
    if (typeof t == "function" && (a = t.defaultProps))
      for (o in a)
        c[o] === void 0 && (c[o] = a[o]);
    return rt.vnode && rt.vnode(p), p;
  }
  var Rt, ht, re, Te, Ft = 0, Ne = [], dt = rt, Be = dt.__b, Oe = dt.__r, De = dt.diffed, Pe = dt.__c, Re = dt.unmount, Fe = dt.__;
  function Le(t, r) {
    dt.__h && dt.__h(ht, t, Ft || r), Ft = 0;
    var e = ht.__H || (ht.__H = { __: [], __h: [] });
    return t >= e.__.length && e.__.push({}), e.__[t];
  }
  function wt(t) {
    return Ft = 1, Er(je, t);
  }
  function Er(t, r, e) {
    var s = Le(Rt++, 2);
    if (s.t = t, !s.__c && (s.__ = [e ? e(r) : je(void 0, r), function(o) {
      var c = s.__N ? s.__N[0] : s.__[0], p = s.t(c, o);
      c !== p && (s.__N = [p, s.__[1]], s.__c.setState({}));
    }], s.__c = ht, !ht.__f)) {
      var l = function(o, c, p) {
        if (!s.__c.__H)
          return !0;
        var b = s.__c.__H.__.filter(function(k) {
          return !!k.__c;
        });
        if (b.every(function(k) {
          return !k.__N;
        }))
          return !n || n.call(this, o, c, p);
        var d = s.__c.props !== o;
        return b.forEach(function(k) {
          if (k.__N) {
            var h = k.__[0];
            k.__ = k.__N, k.__N = void 0, h !== k.__[0] && (d = !0);
          }
        }), n && n.call(this, o, c, p) || d;
      };
      ht.__f = !0;
      var n = ht.shouldComponentUpdate, a = ht.componentWillUpdate;
      ht.componentWillUpdate = function(o, c, p) {
        if (this.__e) {
          var b = n;
          n = void 0, l(o, c, p), n = b;
        }
        a && a.call(this, o, c, p);
      }, ht.shouldComponentUpdate = l;
    }
    return s.__N || s.__;
  }
  function zr(t) {
    return Ft = 5, Lt(function() {
      return { current: t };
    }, []);
  }
  function Lt(t, r) {
    var e = Le(Rt++, 7);
    return Nr(e.__H, r) && (e.__ = t(), e.__H = r, e.__h = t), e.__;
  }
  function Ir() {
    for (var t; t = Ne.shift(); )
      if (t.__P && t.__H)
        try {
          t.__H.__h.forEach(Ut), t.__H.__h.forEach(ne), t.__H.__h = [];
        } catch (r) {
          t.__H.__h = [], dt.__e(r, t.__v);
        }
  }
  dt.__b = function(t) {
    ht = null, Be && Be(t);
  }, dt.__ = function(t, r) {
    t && r.__k && r.__k.__m && (t.__m = r.__k.__m), Fe && Fe(t, r);
  }, dt.__r = function(t) {
    Oe && Oe(t), Rt = 0;
    var r = (ht = t.__c).__H;
    r && (re === ht ? (r.__h = [], ht.__h = [], r.__.forEach(function(e) {
      e.__N && (e.__ = e.__N), e.u = e.__N = void 0;
    })) : (r.__h.forEach(Ut), r.__h.forEach(ne), r.__h = [], Rt = 0)), re = ht;
  }, dt.diffed = function(t) {
    De && De(t);
    var r = t.__c;
    r && r.__H && (r.__H.__h.length && (Ne.push(r) !== 1 && Te === dt.requestAnimationFrame || ((Te = dt.requestAnimationFrame) || Tr)(Ir)), r.__H.__.forEach(function(e) {
      e.u && (e.__H = e.u), e.u = void 0;
    })), re = ht = null;
  }, dt.__c = function(t, r) {
    r.some(function(e) {
      try {
        e.__h.forEach(Ut), e.__h = e.__h.filter(function(s) {
          return !s.__ || ne(s);
        });
      } catch (s) {
        r.some(function(l) {
          l.__h && (l.__h = []);
        }), r = [], dt.__e(s, e.__v);
      }
    }), Pe && Pe(t, r);
  }, dt.unmount = function(t) {
    Re && Re(t);
    var r, e = t.__c;
    e && e.__H && (e.__H.__.forEach(function(s) {
      try {
        Ut(s);
      } catch (l) {
        r = l;
      }
    }), e.__H = void 0, r && dt.__e(r, e.__v));
  };
  var Ue = typeof requestAnimationFrame == "function";
  function Tr(t) {
    var r, e = function() {
      clearTimeout(s), Ue && cancelAnimationFrame(r), setTimeout(t);
    }, s = setTimeout(e, 35);
    Ue && (r = requestAnimationFrame(e));
  }
  function Ut(t) {
    var r = ht, e = t.__c;
    typeof e == "function" && (t.__c = void 0, e()), ht = r;
  }
  function ne(t) {
    var r = ht;
    t.__c = t.__(), ht = r;
  }
  function Nr(t, r) {
    return !t || t.length !== r.length || r.some(function(e, s) {
      return e !== t[s];
    });
  }
  function je(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function Br(t, r) {
    for (var e in r)
      t[e] = r[e];
    return t;
  }
  function Me(t, r) {
    for (var e in t)
      if (e !== "__source" && !(e in r))
        return !0;
    for (var s in r)
      if (s !== "__source" && t[s] !== r[s])
        return !0;
    return !1;
  }
  function Ze(t, r) {
    this.props = t, this.context = r;
  }
  (Ze.prototype = new yt()).isPureReactComponent = !0, Ze.prototype.shouldComponentUpdate = function(t, r) {
    return Me(this.props, t) || Me(this.state, r);
  };
  var We = rt.__b;
  rt.__b = function(t) {
    t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), We && We(t);
  };
  var Or = rt.__e;
  rt.__e = function(t, r, e, s) {
    if (t.then) {
      for (var l, n = r; n = n.__; )
        if ((l = n.__c) && l.__c)
          return r.__e == null && (r.__e = e.__e, r.__k = e.__k), l.__c(t, r);
    }
    Or(t, r, e, s);
  };
  var $e = rt.unmount;
  function He(t, r, e) {
    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(s) {
      typeof s.__c == "function" && s.__c();
    }), t.__c.__H = null), (t = Br({}, t)).__c != null && (t.__c.__P === e && (t.__c.__P = r), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(s) {
      return He(s, r, e);
    })), t;
  }
  function Ge(t, r, e) {
    return t && e && (t.__v = null, t.__k = t.__k && t.__k.map(function(s) {
      return Ge(s, r, e);
    }), t.__c && t.__c.__P === r && (t.__e && e.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = e)), t;
  }
  function ie() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function Ke(t) {
    var r = t.__.__c;
    return r && r.__a && r.__a(t);
  }
  function jt() {
    this.i = null, this.l = null;
  }
  rt.unmount = function(t) {
    var r = t.__c;
    r && r.__R && r.__R(), r && 32 & t.__u && (t.type = null), $e && $e(t);
  }, (ie.prototype = new yt()).__c = function(t, r) {
    var e = r.__c, s = this;
    s.o == null && (s.o = []), s.o.push(e);
    var l = Ke(s.__v), n = !1, a = function() {
      n || (n = !0, e.__R = null, l ? l(o) : o());
    };
    e.__R = a;
    var o = function() {
      if (!--s.__u) {
        if (s.state.__a) {
          var c = s.state.__a;
          s.__v.__k[0] = Ge(c, c.__c.__P, c.__c.__O);
        }
        var p;
        for (s.setState({ __a: s.__b = null }); p = s.o.pop(); )
          p.forceUpdate();
      }
    };
    s.__u++ || 32 & r.__u || s.setState({ __a: s.__b = s.__v.__k[0] }), t.then(a, a);
  }, ie.prototype.componentWillUnmount = function() {
    this.o = [];
  }, ie.prototype.render = function(t, r) {
    if (this.__b) {
      if (this.__v.__k) {
        var e = document.createElement("div"), s = this.__v.__k[0].__c;
        this.__v.__k[0] = He(this.__b, e, s.__O = s.__P);
      }
      this.__b = null;
    }
    var l = r.__a && Jt(St, null, t.fallback);
    return l && (l.__u &= -33), [Jt(St, null, r.__a ? null : t.children), l];
  };
  var Ve = function(t, r, e) {
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
    var r = this, e = Ke(r.__v), s = r.l.get(t);
    return s[0]++, function(l) {
      var n = function() {
        r.props.revealOrder ? (s.push(l), Ve(r, t, s)) : l();
      };
      e ? e(n) : n();
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
      Ve(t, e, r);
    });
  };
  var Dr = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Pr = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Rr = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Fr = /[A-Z0-9]/g, Lr = typeof document < "u", Ur = function(t) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
  };
  function oe(t, r, e) {
    return r.__k == null && (r.textContent = ""), Ar(t, r), typeof e == "function" && e(), t ? t.__c : null;
  }
  yt.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
    Object.defineProperty(yt.prototype, t, { configurable: !0, get: function() {
      return this["UNSAFE_" + t];
    }, set: function(r) {
      Object.defineProperty(this, t, { configurable: !0, writable: !0, value: r });
    } });
  });
  var Ye = rt.event;
  function jr() {
  }
  function Mr() {
    return this.cancelBubble;
  }
  function Zr() {
    return this.defaultPrevented;
  }
  rt.event = function(t) {
    return Ye && (t = Ye(t)), t.persist = jr, t.isPropagationStopped = Mr, t.isDefaultPrevented = Zr, t.nativeEvent = t;
  };
  var Wr = { enumerable: !1, configurable: !0, get: function() {
    return this.class;
  } }, Xe = rt.vnode;
  rt.vnode = function(t) {
    typeof t.type == "string" && function(r) {
      var e = r.props, s = r.type, l = {}, n = s.indexOf("-") === -1;
      for (var a in e) {
        var o = e[a];
        if (!(a === "value" && "defaultValue" in e && o == null || Lr && a === "children" && s === "noscript" || a === "class" || a === "className")) {
          var c = a.toLowerCase();
          a === "defaultValue" && "value" in e && e.value == null ? a = "value" : a === "download" && o === !0 ? o = "" : c === "translate" && o === "no" ? o = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? a = "ondblclick" : c !== "onchange" || s !== "input" && s !== "textarea" || Ur(e.type) ? c === "onfocus" ? a = "onfocusin" : c === "onblur" ? a = "onfocusout" : Rr.test(a) && (a = c) : c = a = "oninput" : n && Pr.test(a) ? a = a.replace(Fr, "-$&").toLowerCase() : o === null && (o = void 0), c === "oninput" && l[a = c] && (a = "oninputCapture"), l[a] = o;
        }
      }
      s == "select" && l.multiple && Array.isArray(l.value) && (l.value = Dt(e.children).forEach(function(p) {
        p.props.selected = l.value.indexOf(p.props.value) != -1;
      })), s == "select" && l.defaultValue != null && (l.value = Dt(e.children).forEach(function(p) {
        p.props.selected = l.multiple ? l.defaultValue.indexOf(p.props.value) != -1 : l.defaultValue == p.props.value;
      })), e.class && !e.className ? (l.class = e.class, Object.defineProperty(l, "className", Wr)) : (e.className && !e.class || e.class && e.className) && (l.class = l.className = e.className), r.props = l;
    }(t), t.$$typeof = Dr, Xe && Xe(t);
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
    version: "1.0.1",
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
    },
    settings: {
      import: {
        sectionLabel: "Import",
        title: "Import Google Keep notes",
        description: "Launch the importer from the settings to move notes, labels and attachments from your Google Takeout ZIP.",
        button: "Start Google Keep import",
        hint: "The same importer is also available via the toolbar icon at the top of Blinko."
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
    },
    settings: {
      import: {
        sectionLabel: "Import",
        title: "Google Keep Notizen importieren",
        description: "Starte den Import direkt aus den Einstellungen, um Notizen, Labels und Anhänge aus deinem Google-Takeout-ZIP zu übertragen.",
        button: "Google Keep Import starten",
        hint: "Du findest den Importer alternativ über das Toolbar-Symbol oben in Blinko."
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
      return function e(s, l, n) {
        function a(p, b) {
          if (!l[p]) {
            if (!s[p]) {
              var d = typeof Zt == "function" && Zt;
              if (!b && d)
                return d(p, !0);
              if (o)
                return o(p, !0);
              var k = new Error("Cannot find module '" + p + "'");
              throw k.code = "MODULE_NOT_FOUND", k;
            }
            var h = l[p] = { exports: {} };
            s[p][0].call(h.exports, function(y) {
              var f = s[p][1][y];
              return a(f || y);
            }, h, h.exports, e, s, l, n);
          }
          return l[p].exports;
        }
        for (var o = typeof Zt == "function" && Zt, c = 0; c < n.length; c++)
          a(n[c]);
        return a;
      }({ 1: [function(e, s, l) {
        var n = e("./utils"), a = e("./support"), o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        l.encode = function(c) {
          for (var p, b, d, k, h, y, f, m = [], _ = 0, v = c.length, A = v, S = n.getTypeOf(c) !== "string"; _ < c.length; )
            A = v - _, d = S ? (p = c[_++], b = _ < v ? c[_++] : 0, _ < v ? c[_++] : 0) : (p = c.charCodeAt(_++), b = _ < v ? c.charCodeAt(_++) : 0, _ < v ? c.charCodeAt(_++) : 0), k = p >> 2, h = (3 & p) << 4 | b >> 4, y = 1 < A ? (15 & b) << 2 | d >> 6 : 64, f = 2 < A ? 63 & d : 64, m.push(o.charAt(k) + o.charAt(h) + o.charAt(y) + o.charAt(f));
          return m.join("");
        }, l.decode = function(c) {
          var p, b, d, k, h, y, f = 0, m = 0, _ = "data:";
          if (c.substr(0, _.length) === _)
            throw new Error("Invalid base64 input, it looks like a data url.");
          var v, A = 3 * (c = c.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
          if (c.charAt(c.length - 1) === o.charAt(64) && A--, c.charAt(c.length - 2) === o.charAt(64) && A--, A % 1 != 0)
            throw new Error("Invalid base64 input, bad content length.");
          for (v = a.uint8array ? new Uint8Array(0 | A) : new Array(0 | A); f < c.length; )
            p = o.indexOf(c.charAt(f++)) << 2 | (k = o.indexOf(c.charAt(f++))) >> 4, b = (15 & k) << 4 | (h = o.indexOf(c.charAt(f++))) >> 2, d = (3 & h) << 6 | (y = o.indexOf(c.charAt(f++))), v[m++] = p, h !== 64 && (v[m++] = b), y !== 64 && (v[m++] = d);
          return v;
        };
      }, { "./support": 30, "./utils": 32 }], 2: [function(e, s, l) {
        var n = e("./external"), a = e("./stream/DataWorker"), o = e("./stream/Crc32Probe"), c = e("./stream/DataLengthProbe");
        function p(b, d, k, h, y) {
          this.compressedSize = b, this.uncompressedSize = d, this.crc32 = k, this.compression = h, this.compressedContent = y;
        }
        p.prototype = { getContentWorker: function() {
          var b = new a(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")), d = this;
          return b.on("end", function() {
            if (this.streamInfo.data_length !== d.uncompressedSize)
              throw new Error("Bug : uncompressed data size mismatch");
          }), b;
        }, getCompressedWorker: function() {
          return new a(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        } }, p.createWorkerFrom = function(b, d, k) {
          return b.pipe(new o()).pipe(new c("uncompressedSize")).pipe(d.compressWorker(k)).pipe(new c("compressedSize")).withStreamInfo("compression", d);
        }, s.exports = p;
      }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, s, l) {
        var n = e("./stream/GenericWorker");
        l.STORE = { magic: "\0\0", compressWorker: function() {
          return new n("STORE compression");
        }, uncompressWorker: function() {
          return new n("STORE decompression");
        } }, l.DEFLATE = e("./flate");
      }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, s, l) {
        var n = e("./utils"), a = function() {
          for (var o, c = [], p = 0; p < 256; p++) {
            o = p;
            for (var b = 0; b < 8; b++)
              o = 1 & o ? 3988292384 ^ o >>> 1 : o >>> 1;
            c[p] = o;
          }
          return c;
        }();
        s.exports = function(o, c) {
          return o !== void 0 && o.length ? n.getTypeOf(o) !== "string" ? function(p, b, d, k) {
            var h = a, y = k + d;
            p ^= -1;
            for (var f = k; f < y; f++)
              p = p >>> 8 ^ h[255 & (p ^ b[f])];
            return -1 ^ p;
          }(0 | c, o, o.length, 0) : function(p, b, d, k) {
            var h = a, y = k + d;
            p ^= -1;
            for (var f = k; f < y; f++)
              p = p >>> 8 ^ h[255 & (p ^ b.charCodeAt(f))];
            return -1 ^ p;
          }(0 | c, o, o.length, 0) : 0;
        };
      }, { "./utils": 32 }], 5: [function(e, s, l) {
        l.base64 = !1, l.binary = !1, l.dir = !1, l.createFolders = !0, l.date = null, l.compression = null, l.compressionOptions = null, l.comment = null, l.unixPermissions = null, l.dosPermissions = null;
      }, {}], 6: [function(e, s, l) {
        var n = null;
        n = typeof Promise < "u" ? Promise : e("lie"), s.exports = { Promise: n };
      }, { lie: 37 }], 7: [function(e, s, l) {
        var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", a = e("pako"), o = e("./utils"), c = e("./stream/GenericWorker"), p = n ? "uint8array" : "array";
        function b(d, k) {
          c.call(this, "FlateWorker/" + d), this._pako = null, this._pakoAction = d, this._pakoOptions = k, this.meta = {};
        }
        l.magic = "\b\0", o.inherits(b, c), b.prototype.processChunk = function(d) {
          this.meta = d.meta, this._pako === null && this._createPako(), this._pako.push(o.transformTo(p, d.data), !1);
        }, b.prototype.flush = function() {
          c.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
        }, b.prototype.cleanUp = function() {
          c.prototype.cleanUp.call(this), this._pako = null;
        }, b.prototype._createPako = function() {
          this._pako = new a[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
          var d = this;
          this._pako.onData = function(k) {
            d.push({ data: k, meta: d.meta });
          };
        }, l.compressWorker = function(d) {
          return new b("Deflate", d);
        }, l.uncompressWorker = function() {
          return new b("Inflate", {});
        };
      }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, s, l) {
        function n(h, y) {
          var f, m = "";
          for (f = 0; f < y; f++)
            m += String.fromCharCode(255 & h), h >>>= 8;
          return m;
        }
        function a(h, y, f, m, _, v) {
          var A, S, E = h.file, R = h.compression, D = v !== p.utf8encode, Z = o.transformTo("string", v(E.name)), B = o.transformTo("string", p.utf8encode(E.name)), W = E.comment, X = o.transformTo("string", v(W)), x = o.transformTo("string", p.utf8encode(W)), P = B.length !== E.name.length, u = x.length !== W.length, L = "", et = "", O = "", q = E.dir, j = E.date, J = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
          y && !f || (J.crc32 = h.crc32, J.compressedSize = h.compressedSize, J.uncompressedSize = h.uncompressedSize);
          var T = 0;
          y && (T |= 8), D || !P && !u || (T |= 2048);
          var I = 0, Q = 0;
          q && (I |= 16), _ === "UNIX" ? (Q = 798, I |= function(G, at) {
            var lt = G;
            return G || (lt = at ? 16893 : 33204), (65535 & lt) << 16;
          }(E.unixPermissions, q)) : (Q = 20, I |= function(G) {
            return 63 & (G || 0);
          }(E.dosPermissions)), A = j.getUTCHours(), A <<= 6, A |= j.getUTCMinutes(), A <<= 5, A |= j.getUTCSeconds() / 2, S = j.getUTCFullYear() - 1980, S <<= 4, S |= j.getUTCMonth() + 1, S <<= 5, S |= j.getUTCDate(), P && (et = n(1, 1) + n(b(Z), 4) + B, L += "up" + n(et.length, 2) + et), u && (O = n(1, 1) + n(b(X), 4) + x, L += "uc" + n(O.length, 2) + O);
          var V = "";
          return V += `
\0`, V += n(T, 2), V += R.magic, V += n(A, 2), V += n(S, 2), V += n(J.crc32, 4), V += n(J.compressedSize, 4), V += n(J.uncompressedSize, 4), V += n(Z.length, 2), V += n(L.length, 2), { fileRecord: d.LOCAL_FILE_HEADER + V + Z + L, dirRecord: d.CENTRAL_FILE_HEADER + n(Q, 2) + V + n(X.length, 2) + "\0\0\0\0" + n(I, 4) + n(m, 4) + Z + L + X };
        }
        var o = e("../utils"), c = e("../stream/GenericWorker"), p = e("../utf8"), b = e("../crc32"), d = e("../signature");
        function k(h, y, f, m) {
          c.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = y, this.zipPlatform = f, this.encodeFileName = m, this.streamFiles = h, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
        }
        o.inherits(k, c), k.prototype.push = function(h) {
          var y = h.meta.percent || 0, f = this.entriesCount, m = this._sources.length;
          this.accumulate ? this.contentBuffer.push(h) : (this.bytesWritten += h.data.length, c.prototype.push.call(this, { data: h.data, meta: { currentFile: this.currentFile, percent: f ? (y + 100 * (f - m - 1)) / f : 100 } }));
        }, k.prototype.openedSource = function(h) {
          this.currentSourceOffset = this.bytesWritten, this.currentFile = h.file.name;
          var y = this.streamFiles && !h.file.dir;
          if (y) {
            var f = a(h, y, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            this.push({ data: f.fileRecord, meta: { percent: 0 } });
          } else
            this.accumulate = !0;
        }, k.prototype.closedSource = function(h) {
          this.accumulate = !1;
          var y = this.streamFiles && !h.file.dir, f = a(h, y, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          if (this.dirRecords.push(f.dirRecord), y)
            this.push({ data: function(m) {
              return d.DATA_DESCRIPTOR + n(m.crc32, 4) + n(m.compressedSize, 4) + n(m.uncompressedSize, 4);
            }(h), meta: { percent: 100 } });
          else
            for (this.push({ data: f.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
              this.push(this.contentBuffer.shift());
          this.currentFile = null;
        }, k.prototype.flush = function() {
          for (var h = this.bytesWritten, y = 0; y < this.dirRecords.length; y++)
            this.push({ data: this.dirRecords[y], meta: { percent: 100 } });
          var f = this.bytesWritten - h, m = function(_, v, A, S, E) {
            var R = o.transformTo("string", E(S));
            return d.CENTRAL_DIRECTORY_END + "\0\0\0\0" + n(_, 2) + n(_, 2) + n(v, 4) + n(A, 4) + n(R.length, 2) + R;
          }(this.dirRecords.length, f, h, this.zipComment, this.encodeFileName);
          this.push({ data: m, meta: { percent: 100 } });
        }, k.prototype.prepareNextSource = function() {
          this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
        }, k.prototype.registerPrevious = function(h) {
          this._sources.push(h);
          var y = this;
          return h.on("data", function(f) {
            y.processChunk(f);
          }), h.on("end", function() {
            y.closedSource(y.previous.streamInfo), y._sources.length ? y.prepareNextSource() : y.end();
          }), h.on("error", function(f) {
            y.error(f);
          }), this;
        }, k.prototype.resume = function() {
          return !!c.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
        }, k.prototype.error = function(h) {
          var y = this._sources;
          if (!c.prototype.error.call(this, h))
            return !1;
          for (var f = 0; f < y.length; f++)
            try {
              y[f].error(h);
            } catch {
            }
          return !0;
        }, k.prototype.lock = function() {
          c.prototype.lock.call(this);
          for (var h = this._sources, y = 0; y < h.length; y++)
            h[y].lock();
        }, s.exports = k;
      }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, s, l) {
        var n = e("../compressions"), a = e("./ZipFileWorker");
        l.generateWorker = function(o, c, p) {
          var b = new a(c.streamFiles, p, c.platform, c.encodeFileName), d = 0;
          try {
            o.forEach(function(k, h) {
              d++;
              var y = function(v, A) {
                var S = v || A, E = n[S];
                if (!E)
                  throw new Error(S + " is not a valid compression method !");
                return E;
              }(h.options.compression, c.compression), f = h.options.compressionOptions || c.compressionOptions || {}, m = h.dir, _ = h.date;
              h._compressWorker(y, f).withStreamInfo("file", { name: k, dir: m, date: _, comment: h.comment || "", unixPermissions: h.unixPermissions, dosPermissions: h.dosPermissions }).pipe(b);
            }), b.entriesCount = d;
          } catch (k) {
            b.error(k);
          }
          return b;
        };
      }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, s, l) {
        function n() {
          if (!(this instanceof n))
            return new n();
          if (arguments.length)
            throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
          this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
            var a = new n();
            for (var o in this)
              typeof this[o] != "function" && (a[o] = this[o]);
            return a;
          };
        }
        (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.1", n.loadAsync = function(a, o) {
          return new n().loadAsync(a, o);
        }, n.external = e("./external"), s.exports = n;
      }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, s, l) {
        var n = e("./utils"), a = e("./external"), o = e("./utf8"), c = e("./zipEntries"), p = e("./stream/Crc32Probe"), b = e("./nodejsUtils");
        function d(k) {
          return new a.Promise(function(h, y) {
            var f = k.decompressed.getContentWorker().pipe(new p());
            f.on("error", function(m) {
              y(m);
            }).on("end", function() {
              f.streamInfo.crc32 !== k.decompressed.crc32 ? y(new Error("Corrupted zip : CRC32 mismatch")) : h();
            }).resume();
          });
        }
        s.exports = function(k, h) {
          var y = this;
          return h = n.extend(h || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: o.utf8decode }), b.isNode && b.isStream(k) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : n.prepareContent("the loaded zip file", k, !0, h.optimizedBinaryString, h.base64).then(function(f) {
            var m = new c(h);
            return m.load(f), m;
          }).then(function(f) {
            var m = [a.Promise.resolve(f)], _ = f.files;
            if (h.checkCRC32)
              for (var v = 0; v < _.length; v++)
                m.push(d(_[v]));
            return a.Promise.all(m);
          }).then(function(f) {
            for (var m = f.shift(), _ = m.files, v = 0; v < _.length; v++) {
              var A = _[v], S = A.fileNameStr, E = n.resolve(A.fileNameStr);
              y.file(E, A.decompressed, { binary: !0, optimizedBinaryString: !0, date: A.date, dir: A.dir, comment: A.fileCommentStr.length ? A.fileCommentStr : null, unixPermissions: A.unixPermissions, dosPermissions: A.dosPermissions, createFolders: h.createFolders }), A.dir || (y.file(E).unsafeOriginalName = S);
            }
            return m.zipComment.length && (y.comment = m.zipComment), y;
          });
        };
      }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, s, l) {
        var n = e("../utils"), a = e("../stream/GenericWorker");
        function o(c, p) {
          a.call(this, "Nodejs stream input adapter for " + c), this._upstreamEnded = !1, this._bindStream(p);
        }
        n.inherits(o, a), o.prototype._bindStream = function(c) {
          var p = this;
          (this._stream = c).pause(), c.on("data", function(b) {
            p.push({ data: b, meta: { percent: 0 } });
          }).on("error", function(b) {
            p.isPaused ? this.generatedError = b : p.error(b);
          }).on("end", function() {
            p.isPaused ? p._upstreamEnded = !0 : p.end();
          });
        }, o.prototype.pause = function() {
          return !!a.prototype.pause.call(this) && (this._stream.pause(), !0);
        }, o.prototype.resume = function() {
          return !!a.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
        }, s.exports = o;
      }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, s, l) {
        var n = e("readable-stream").Readable;
        function a(o, c, p) {
          n.call(this, c), this._helper = o;
          var b = this;
          o.on("data", function(d, k) {
            b.push(d) || b._helper.pause(), p && p(k);
          }).on("error", function(d) {
            b.emit("error", d);
          }).on("end", function() {
            b.push(null);
          });
        }
        e("../utils").inherits(a, n), a.prototype._read = function() {
          this._helper.resume();
        }, s.exports = a;
      }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, s, l) {
        s.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(n, a) {
          if (Buffer.from && Buffer.from !== Uint8Array.from)
            return Buffer.from(n, a);
          if (typeof n == "number")
            throw new Error('The "data" argument must not be a number');
          return new Buffer(n, a);
        }, allocBuffer: function(n) {
          if (Buffer.alloc)
            return Buffer.alloc(n);
          var a = new Buffer(n);
          return a.fill(0), a;
        }, isBuffer: function(n) {
          return Buffer.isBuffer(n);
        }, isStream: function(n) {
          return n && typeof n.on == "function" && typeof n.pause == "function" && typeof n.resume == "function";
        } };
      }, {}], 15: [function(e, s, l) {
        function n(E, R, D) {
          var Z, B = o.getTypeOf(R), W = o.extend(D || {}, b);
          W.date = W.date || /* @__PURE__ */ new Date(), W.compression !== null && (W.compression = W.compression.toUpperCase()), typeof W.unixPermissions == "string" && (W.unixPermissions = parseInt(W.unixPermissions, 8)), W.unixPermissions && 16384 & W.unixPermissions && (W.dir = !0), W.dosPermissions && 16 & W.dosPermissions && (W.dir = !0), W.dir && (E = _(E)), W.createFolders && (Z = m(E)) && v.call(this, Z, !0);
          var X = B === "string" && W.binary === !1 && W.base64 === !1;
          D && D.binary !== void 0 || (W.binary = !X), (R instanceof d && R.uncompressedSize === 0 || W.dir || !R || R.length === 0) && (W.base64 = !1, W.binary = !0, R = "", W.compression = "STORE", B = "string");
          var x = null;
          x = R instanceof d || R instanceof c ? R : y.isNode && y.isStream(R) ? new f(E, R) : o.prepareContent(E, R, W.binary, W.optimizedBinaryString, W.base64);
          var P = new k(E, x, W);
          this.files[E] = P;
        }
        var a = e("./utf8"), o = e("./utils"), c = e("./stream/GenericWorker"), p = e("./stream/StreamHelper"), b = e("./defaults"), d = e("./compressedObject"), k = e("./zipObject"), h = e("./generate"), y = e("./nodejsUtils"), f = e("./nodejs/NodejsStreamInputAdapter"), m = function(E) {
          E.slice(-1) === "/" && (E = E.substring(0, E.length - 1));
          var R = E.lastIndexOf("/");
          return 0 < R ? E.substring(0, R) : "";
        }, _ = function(E) {
          return E.slice(-1) !== "/" && (E += "/"), E;
        }, v = function(E, R) {
          return R = R !== void 0 ? R : b.createFolders, E = _(E), this.files[E] || n.call(this, E, null, { dir: !0, createFolders: R }), this.files[E];
        };
        function A(E) {
          return Object.prototype.toString.call(E) === "[object RegExp]";
        }
        var S = { load: function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, forEach: function(E) {
          var R, D, Z;
          for (R in this.files)
            Z = this.files[R], (D = R.slice(this.root.length, R.length)) && R.slice(0, this.root.length) === this.root && E(D, Z);
        }, filter: function(E) {
          var R = [];
          return this.forEach(function(D, Z) {
            E(D, Z) && R.push(Z);
          }), R;
        }, file: function(E, R, D) {
          if (arguments.length !== 1)
            return E = this.root + E, n.call(this, E, R, D), this;
          if (A(E)) {
            var Z = E;
            return this.filter(function(W, X) {
              return !X.dir && Z.test(W);
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
          var R = this.root + E, D = v.call(this, R), Z = this.clone();
          return Z.root = D.name, Z;
        }, remove: function(E) {
          E = this.root + E;
          var R = this.files[E];
          if (R || (E.slice(-1) !== "/" && (E += "/"), R = this.files[E]), R && !R.dir)
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
          var R, D = {};
          try {
            if ((D = o.extend(E || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = D.type.toLowerCase(), D.compression = D.compression.toUpperCase(), D.type === "binarystring" && (D.type = "string"), !D.type)
              throw new Error("No output type specified.");
            o.checkSupport(D.type), D.platform !== "darwin" && D.platform !== "freebsd" && D.platform !== "linux" && D.platform !== "sunos" || (D.platform = "UNIX"), D.platform === "win32" && (D.platform = "DOS");
            var Z = D.comment || this.comment || "";
            R = h.generateWorker(this, D, Z);
          } catch (B) {
            (R = new c("error")).error(B);
          }
          return new p(R, D.type || "string", D.mimeType);
        }, generateAsync: function(E, R) {
          return this.generateInternalStream(E).accumulate(R);
        }, generateNodeStream: function(E, R) {
          return (E = E || {}).type || (E.type = "nodebuffer"), this.generateInternalStream(E).toNodejsStream(R);
        } };
        s.exports = S;
      }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, s, l) {
        s.exports = e("stream");
      }, { stream: void 0 }], 17: [function(e, s, l) {
        var n = e("./DataReader");
        function a(o) {
          n.call(this, o);
          for (var c = 0; c < this.data.length; c++)
            o[c] = 255 & o[c];
        }
        e("../utils").inherits(a, n), a.prototype.byteAt = function(o) {
          return this.data[this.zero + o];
        }, a.prototype.lastIndexOfSignature = function(o) {
          for (var c = o.charCodeAt(0), p = o.charCodeAt(1), b = o.charCodeAt(2), d = o.charCodeAt(3), k = this.length - 4; 0 <= k; --k)
            if (this.data[k] === c && this.data[k + 1] === p && this.data[k + 2] === b && this.data[k + 3] === d)
              return k - this.zero;
          return -1;
        }, a.prototype.readAndCheckSignature = function(o) {
          var c = o.charCodeAt(0), p = o.charCodeAt(1), b = o.charCodeAt(2), d = o.charCodeAt(3), k = this.readData(4);
          return c === k[0] && p === k[1] && b === k[2] && d === k[3];
        }, a.prototype.readData = function(o) {
          if (this.checkOffset(o), o === 0)
            return [];
          var c = this.data.slice(this.zero + this.index, this.zero + this.index + o);
          return this.index += o, c;
        }, s.exports = a;
      }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, s, l) {
        var n = e("../utils");
        function a(o) {
          this.data = o, this.length = o.length, this.index = 0, this.zero = 0;
        }
        a.prototype = { checkOffset: function(o) {
          this.checkIndex(this.index + o);
        }, checkIndex: function(o) {
          if (this.length < this.zero + o || o < 0)
            throw new Error("End of data reached (data length = " + this.length + ", asked index = " + o + "). Corrupted zip ?");
        }, setIndex: function(o) {
          this.checkIndex(o), this.index = o;
        }, skip: function(o) {
          this.setIndex(this.index + o);
        }, byteAt: function() {
        }, readInt: function(o) {
          var c, p = 0;
          for (this.checkOffset(o), c = this.index + o - 1; c >= this.index; c--)
            p = (p << 8) + this.byteAt(c);
          return this.index += o, p;
        }, readString: function(o) {
          return n.transformTo("string", this.readData(o));
        }, readData: function() {
        }, lastIndexOfSignature: function() {
        }, readAndCheckSignature: function() {
        }, readDate: function() {
          var o = this.readInt(4);
          return new Date(Date.UTC(1980 + (o >> 25 & 127), (o >> 21 & 15) - 1, o >> 16 & 31, o >> 11 & 31, o >> 5 & 63, (31 & o) << 1));
        } }, s.exports = a;
      }, { "../utils": 32 }], 19: [function(e, s, l) {
        var n = e("./Uint8ArrayReader");
        function a(o) {
          n.call(this, o);
        }
        e("../utils").inherits(a, n), a.prototype.readData = function(o) {
          this.checkOffset(o);
          var c = this.data.slice(this.zero + this.index, this.zero + this.index + o);
          return this.index += o, c;
        }, s.exports = a;
      }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, s, l) {
        var n = e("./DataReader");
        function a(o) {
          n.call(this, o);
        }
        e("../utils").inherits(a, n), a.prototype.byteAt = function(o) {
          return this.data.charCodeAt(this.zero + o);
        }, a.prototype.lastIndexOfSignature = function(o) {
          return this.data.lastIndexOf(o) - this.zero;
        }, a.prototype.readAndCheckSignature = function(o) {
          return o === this.readData(4);
        }, a.prototype.readData = function(o) {
          this.checkOffset(o);
          var c = this.data.slice(this.zero + this.index, this.zero + this.index + o);
          return this.index += o, c;
        }, s.exports = a;
      }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, s, l) {
        var n = e("./ArrayReader");
        function a(o) {
          n.call(this, o);
        }
        e("../utils").inherits(a, n), a.prototype.readData = function(o) {
          if (this.checkOffset(o), o === 0)
            return new Uint8Array(0);
          var c = this.data.subarray(this.zero + this.index, this.zero + this.index + o);
          return this.index += o, c;
        }, s.exports = a;
      }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, s, l) {
        var n = e("../utils"), a = e("../support"), o = e("./ArrayReader"), c = e("./StringReader"), p = e("./NodeBufferReader"), b = e("./Uint8ArrayReader");
        s.exports = function(d) {
          var k = n.getTypeOf(d);
          return n.checkSupport(k), k !== "string" || a.uint8array ? k === "nodebuffer" ? new p(d) : a.uint8array ? new b(n.transformTo("uint8array", d)) : new o(n.transformTo("array", d)) : new c(d);
        };
      }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, s, l) {
        l.LOCAL_FILE_HEADER = "PK", l.CENTRAL_FILE_HEADER = "PK", l.CENTRAL_DIRECTORY_END = "PK", l.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", l.ZIP64_CENTRAL_DIRECTORY_END = "PK", l.DATA_DESCRIPTOR = "PK\x07\b";
      }, {}], 24: [function(e, s, l) {
        var n = e("./GenericWorker"), a = e("../utils");
        function o(c) {
          n.call(this, "ConvertWorker to " + c), this.destType = c;
        }
        a.inherits(o, n), o.prototype.processChunk = function(c) {
          this.push({ data: a.transformTo(this.destType, c.data), meta: c.meta });
        }, s.exports = o;
      }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, s, l) {
        var n = e("./GenericWorker"), a = e("../crc32");
        function o() {
          n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
        }
        e("../utils").inherits(o, n), o.prototype.processChunk = function(c) {
          this.streamInfo.crc32 = a(c.data, this.streamInfo.crc32 || 0), this.push(c);
        }, s.exports = o;
      }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, s, l) {
        var n = e("../utils"), a = e("./GenericWorker");
        function o(c) {
          a.call(this, "DataLengthProbe for " + c), this.propName = c, this.withStreamInfo(c, 0);
        }
        n.inherits(o, a), o.prototype.processChunk = function(c) {
          if (c) {
            var p = this.streamInfo[this.propName] || 0;
            this.streamInfo[this.propName] = p + c.data.length;
          }
          a.prototype.processChunk.call(this, c);
        }, s.exports = o;
      }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, s, l) {
        var n = e("../utils"), a = e("./GenericWorker");
        function o(c) {
          a.call(this, "DataWorker");
          var p = this;
          this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, c.then(function(b) {
            p.dataIsReady = !0, p.data = b, p.max = b && b.length || 0, p.type = n.getTypeOf(b), p.isPaused || p._tickAndRepeat();
          }, function(b) {
            p.error(b);
          });
        }
        n.inherits(o, a), o.prototype.cleanUp = function() {
          a.prototype.cleanUp.call(this), this.data = null;
        }, o.prototype.resume = function() {
          return !!a.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, n.delay(this._tickAndRepeat, [], this)), !0);
        }, o.prototype._tickAndRepeat = function() {
          this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
        }, o.prototype._tick = function() {
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
        }, s.exports = o;
      }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, s, l) {
        function n(a) {
          this.name = a || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
        }
        n.prototype = { push: function(a) {
          this.emit("data", a);
        }, end: function() {
          if (this.isFinished)
            return !1;
          this.flush();
          try {
            this.emit("end"), this.cleanUp(), this.isFinished = !0;
          } catch (a) {
            this.emit("error", a);
          }
          return !0;
        }, error: function(a) {
          return !this.isFinished && (this.isPaused ? this.generatedError = a : (this.isFinished = !0, this.emit("error", a), this.previous && this.previous.error(a), this.cleanUp()), !0);
        }, on: function(a, o) {
          return this._listeners[a].push(o), this;
        }, cleanUp: function() {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        }, emit: function(a, o) {
          if (this._listeners[a])
            for (var c = 0; c < this._listeners[a].length; c++)
              this._listeners[a][c].call(this, o);
        }, pipe: function(a) {
          return a.registerPrevious(this);
        }, registerPrevious: function(a) {
          if (this.isLocked)
            throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = a.streamInfo, this.mergeStreamInfo(), this.previous = a;
          var o = this;
          return a.on("data", function(c) {
            o.processChunk(c);
          }), a.on("end", function() {
            o.end();
          }), a.on("error", function(c) {
            o.error(c);
          }), this;
        }, pause: function() {
          return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
        }, resume: function() {
          if (!this.isPaused || this.isFinished)
            return !1;
          var a = this.isPaused = !1;
          return this.generatedError && (this.error(this.generatedError), a = !0), this.previous && this.previous.resume(), !a;
        }, flush: function() {
        }, processChunk: function(a) {
          this.push(a);
        }, withStreamInfo: function(a, o) {
          return this.extraStreamInfo[a] = o, this.mergeStreamInfo(), this;
        }, mergeStreamInfo: function() {
          for (var a in this.extraStreamInfo)
            Object.prototype.hasOwnProperty.call(this.extraStreamInfo, a) && (this.streamInfo[a] = this.extraStreamInfo[a]);
        }, lock: function() {
          if (this.isLocked)
            throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = !0, this.previous && this.previous.lock();
        }, toString: function() {
          var a = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + a : a;
        } }, s.exports = n;
      }, {}], 29: [function(e, s, l) {
        var n = e("../utils"), a = e("./ConvertWorker"), o = e("./GenericWorker"), c = e("../base64"), p = e("../support"), b = e("../external"), d = null;
        if (p.nodestream)
          try {
            d = e("../nodejs/NodejsStreamOutputAdapter");
          } catch {
          }
        function k(y, f) {
          return new b.Promise(function(m, _) {
            var v = [], A = y._internalType, S = y._outputType, E = y._mimeType;
            y.on("data", function(R, D) {
              v.push(R), f && f(D);
            }).on("error", function(R) {
              v = [], _(R);
            }).on("end", function() {
              try {
                var R = function(D, Z, B) {
                  switch (D) {
                    case "blob":
                      return n.newBlob(n.transformTo("arraybuffer", Z), B);
                    case "base64":
                      return c.encode(Z);
                    default:
                      return n.transformTo(D, Z);
                  }
                }(S, function(D, Z) {
                  var B, W = 0, X = null, x = 0;
                  for (B = 0; B < Z.length; B++)
                    x += Z[B].length;
                  switch (D) {
                    case "string":
                      return Z.join("");
                    case "array":
                      return Array.prototype.concat.apply([], Z);
                    case "uint8array":
                      for (X = new Uint8Array(x), B = 0; B < Z.length; B++)
                        X.set(Z[B], W), W += Z[B].length;
                      return X;
                    case "nodebuffer":
                      return Buffer.concat(Z);
                    default:
                      throw new Error("concat : unsupported type '" + D + "'");
                  }
                }(A, v), E);
                m(R);
              } catch (D) {
                _(D);
              }
              v = [];
            }).resume();
          });
        }
        function h(y, f, m) {
          var _ = f;
          switch (f) {
            case "blob":
            case "arraybuffer":
              _ = "uint8array";
              break;
            case "base64":
              _ = "string";
          }
          try {
            this._internalType = _, this._outputType = f, this._mimeType = m, n.checkSupport(_), this._worker = y.pipe(new a(_)), y.lock();
          } catch (v) {
            this._worker = new o("error"), this._worker.error(v);
          }
        }
        h.prototype = { accumulate: function(y) {
          return k(this, y);
        }, on: function(y, f) {
          var m = this;
          return y === "data" ? this._worker.on(y, function(_) {
            f.call(m, _.data, _.meta);
          }) : this._worker.on(y, function() {
            n.delay(f, arguments, m);
          }), this;
        }, resume: function() {
          return n.delay(this._worker.resume, [], this._worker), this;
        }, pause: function() {
          return this._worker.pause(), this;
        }, toNodejsStream: function(y) {
          if (n.checkSupport("nodestream"), this._outputType !== "nodebuffer")
            throw new Error(this._outputType + " is not supported by this method");
          return new d(this, { objectMode: this._outputType !== "nodebuffer" }, y);
        } }, s.exports = h;
      }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, s, l) {
        if (l.base64 = !0, l.array = !0, l.string = !0, l.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", l.nodebuffer = typeof Buffer < "u", l.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
          l.blob = !1;
        else {
          var n = new ArrayBuffer(0);
          try {
            l.blob = new Blob([n], { type: "application/zip" }).size === 0;
          } catch {
            try {
              var a = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              a.append(n), l.blob = a.getBlob("application/zip").size === 0;
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
      }, { "readable-stream": 16 }], 31: [function(e, s, l) {
        for (var n = e("./utils"), a = e("./support"), o = e("./nodejsUtils"), c = e("./stream/GenericWorker"), p = new Array(256), b = 0; b < 256; b++)
          p[b] = 252 <= b ? 6 : 248 <= b ? 5 : 240 <= b ? 4 : 224 <= b ? 3 : 192 <= b ? 2 : 1;
        p[254] = p[254] = 1;
        function d() {
          c.call(this, "utf-8 decode"), this.leftOver = null;
        }
        function k() {
          c.call(this, "utf-8 encode");
        }
        l.utf8encode = function(h) {
          return a.nodebuffer ? o.newBufferFrom(h, "utf-8") : function(y) {
            var f, m, _, v, A, S = y.length, E = 0;
            for (v = 0; v < S; v++)
              (64512 & (m = y.charCodeAt(v))) == 55296 && v + 1 < S && (64512 & (_ = y.charCodeAt(v + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (_ - 56320), v++), E += m < 128 ? 1 : m < 2048 ? 2 : m < 65536 ? 3 : 4;
            for (f = a.uint8array ? new Uint8Array(E) : new Array(E), v = A = 0; A < E; v++)
              (64512 & (m = y.charCodeAt(v))) == 55296 && v + 1 < S && (64512 & (_ = y.charCodeAt(v + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (_ - 56320), v++), m < 128 ? f[A++] = m : (m < 2048 ? f[A++] = 192 | m >>> 6 : (m < 65536 ? f[A++] = 224 | m >>> 12 : (f[A++] = 240 | m >>> 18, f[A++] = 128 | m >>> 12 & 63), f[A++] = 128 | m >>> 6 & 63), f[A++] = 128 | 63 & m);
            return f;
          }(h);
        }, l.utf8decode = function(h) {
          return a.nodebuffer ? n.transformTo("nodebuffer", h).toString("utf-8") : function(y) {
            var f, m, _, v, A = y.length, S = new Array(2 * A);
            for (f = m = 0; f < A; )
              if ((_ = y[f++]) < 128)
                S[m++] = _;
              else if (4 < (v = p[_]))
                S[m++] = 65533, f += v - 1;
              else {
                for (_ &= v === 2 ? 31 : v === 3 ? 15 : 7; 1 < v && f < A; )
                  _ = _ << 6 | 63 & y[f++], v--;
                1 < v ? S[m++] = 65533 : _ < 65536 ? S[m++] = _ : (_ -= 65536, S[m++] = 55296 | _ >> 10 & 1023, S[m++] = 56320 | 1023 & _);
              }
            return S.length !== m && (S.subarray ? S = S.subarray(0, m) : S.length = m), n.applyFromCharCode(S);
          }(h = n.transformTo(a.uint8array ? "uint8array" : "array", h));
        }, n.inherits(d, c), d.prototype.processChunk = function(h) {
          var y = n.transformTo(a.uint8array ? "uint8array" : "array", h.data);
          if (this.leftOver && this.leftOver.length) {
            if (a.uint8array) {
              var f = y;
              (y = new Uint8Array(f.length + this.leftOver.length)).set(this.leftOver, 0), y.set(f, this.leftOver.length);
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
          m !== y.length && (a.uint8array ? (_ = y.subarray(0, m), this.leftOver = y.subarray(m, y.length)) : (_ = y.slice(0, m), this.leftOver = y.slice(m, y.length))), this.push({ data: l.utf8decode(_), meta: h.meta });
        }, d.prototype.flush = function() {
          this.leftOver && this.leftOver.length && (this.push({ data: l.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
        }, l.Utf8DecodeWorker = d, n.inherits(k, c), k.prototype.processChunk = function(h) {
          this.push({ data: l.utf8encode(h.data), meta: h.meta });
        }, l.Utf8EncodeWorker = k;
      }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, s, l) {
        var n = e("./support"), a = e("./base64"), o = e("./nodejsUtils"), c = e("./external");
        function p(f) {
          return f;
        }
        function b(f, m) {
          for (var _ = 0; _ < f.length; ++_)
            m[_] = 255 & f.charCodeAt(_);
          return m;
        }
        e("setimmediate"), l.newBlob = function(f, m) {
          l.checkSupport("blob");
          try {
            return new Blob([f], { type: m });
          } catch {
            try {
              var _ = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
              return _.append(f), _.getBlob(m);
            } catch {
              throw new Error("Bug : can't construct the Blob.");
            }
          }
        };
        var d = { stringifyByChunk: function(f, m, _) {
          var v = [], A = 0, S = f.length;
          if (S <= _)
            return String.fromCharCode.apply(null, f);
          for (; A < S; )
            m === "array" || m === "nodebuffer" ? v.push(String.fromCharCode.apply(null, f.slice(A, Math.min(A + _, S)))) : v.push(String.fromCharCode.apply(null, f.subarray(A, Math.min(A + _, S)))), A += _;
          return v.join("");
        }, stringifyByChar: function(f) {
          for (var m = "", _ = 0; _ < f.length; _++)
            m += String.fromCharCode(f[_]);
          return m;
        }, applyCanBeUsed: { uint8array: function() {
          try {
            return n.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
          } catch {
            return !1;
          }
        }(), nodebuffer: function() {
          try {
            return n.nodebuffer && String.fromCharCode.apply(null, o.allocBuffer(1)).length === 1;
          } catch {
            return !1;
          }
        }() } };
        function k(f) {
          var m = 65536, _ = l.getTypeOf(f), v = !0;
          if (_ === "uint8array" ? v = d.applyCanBeUsed.uint8array : _ === "nodebuffer" && (v = d.applyCanBeUsed.nodebuffer), v)
            for (; 1 < m; )
              try {
                return d.stringifyByChunk(f, _, m);
              } catch {
                m = Math.floor(m / 2);
              }
          return d.stringifyByChar(f);
        }
        function h(f, m) {
          for (var _ = 0; _ < f.length; _++)
            m[_] = f[_];
          return m;
        }
        l.applyFromCharCode = k;
        var y = {};
        y.string = { string: p, array: function(f) {
          return b(f, new Array(f.length));
        }, arraybuffer: function(f) {
          return y.string.uint8array(f).buffer;
        }, uint8array: function(f) {
          return b(f, new Uint8Array(f.length));
        }, nodebuffer: function(f) {
          return b(f, o.allocBuffer(f.length));
        } }, y.array = { string: k, array: p, arraybuffer: function(f) {
          return new Uint8Array(f).buffer;
        }, uint8array: function(f) {
          return new Uint8Array(f);
        }, nodebuffer: function(f) {
          return o.newBufferFrom(f);
        } }, y.arraybuffer = { string: function(f) {
          return k(new Uint8Array(f));
        }, array: function(f) {
          return h(new Uint8Array(f), new Array(f.byteLength));
        }, arraybuffer: p, uint8array: function(f) {
          return new Uint8Array(f);
        }, nodebuffer: function(f) {
          return o.newBufferFrom(new Uint8Array(f));
        } }, y.uint8array = { string: k, array: function(f) {
          return h(f, new Array(f.length));
        }, arraybuffer: function(f) {
          return f.buffer;
        }, uint8array: p, nodebuffer: function(f) {
          return o.newBufferFrom(f);
        } }, y.nodebuffer = { string: k, array: function(f) {
          return h(f, new Array(f.length));
        }, arraybuffer: function(f) {
          return y.nodebuffer.uint8array(f).buffer;
        }, uint8array: function(f) {
          return h(f, new Uint8Array(f.length));
        }, nodebuffer: p }, l.transformTo = function(f, m) {
          if (m = m || "", !f)
            return m;
          l.checkSupport(f);
          var _ = l.getTypeOf(m);
          return y[_][f](m);
        }, l.resolve = function(f) {
          for (var m = f.split("/"), _ = [], v = 0; v < m.length; v++) {
            var A = m[v];
            A === "." || A === "" && v !== 0 && v !== m.length - 1 || (A === ".." ? _.pop() : _.push(A));
          }
          return _.join("/");
        }, l.getTypeOf = function(f) {
          return typeof f == "string" ? "string" : Object.prototype.toString.call(f) === "[object Array]" ? "array" : n.nodebuffer && o.isBuffer(f) ? "nodebuffer" : n.uint8array && f instanceof Uint8Array ? "uint8array" : n.arraybuffer && f instanceof ArrayBuffer ? "arraybuffer" : void 0;
        }, l.checkSupport = function(f) {
          if (!n[f.toLowerCase()])
            throw new Error(f + " is not supported by this platform");
        }, l.MAX_VALUE_16BITS = 65535, l.MAX_VALUE_32BITS = -1, l.pretty = function(f) {
          var m, _, v = "";
          for (_ = 0; _ < (f || "").length; _++)
            v += "\\x" + ((m = f.charCodeAt(_)) < 16 ? "0" : "") + m.toString(16).toUpperCase();
          return v;
        }, l.delay = function(f, m, _) {
          setImmediate(function() {
            f.apply(_ || null, m || []);
          });
        }, l.inherits = function(f, m) {
          function _() {
          }
          _.prototype = m.prototype, f.prototype = new _();
        }, l.extend = function() {
          var f, m, _ = {};
          for (f = 0; f < arguments.length; f++)
            for (m in arguments[f])
              Object.prototype.hasOwnProperty.call(arguments[f], m) && _[m] === void 0 && (_[m] = arguments[f][m]);
          return _;
        }, l.prepareContent = function(f, m, _, v, A) {
          return c.Promise.resolve(m).then(function(S) {
            return n.blob && (S instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(S)) !== -1) && typeof FileReader < "u" ? new c.Promise(function(E, R) {
              var D = new FileReader();
              D.onload = function(Z) {
                E(Z.target.result);
              }, D.onerror = function(Z) {
                R(Z.target.error);
              }, D.readAsArrayBuffer(S);
            }) : S;
          }).then(function(S) {
            var E = l.getTypeOf(S);
            return E ? (E === "arraybuffer" ? S = l.transformTo("uint8array", S) : E === "string" && (A ? S = a.decode(S) : _ && v !== !0 && (S = function(R) {
              return b(R, n.uint8array ? new Uint8Array(R.length) : new Array(R.length));
            }(S))), S) : c.Promise.reject(new Error("Can't read the data of '" + f + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
          });
        };
      }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, s, l) {
        var n = e("./reader/readerFor"), a = e("./utils"), o = e("./signature"), c = e("./zipEntry"), p = e("./support");
        function b(d) {
          this.files = [], this.loadOptions = d;
        }
        b.prototype = { checkSignature: function(d) {
          if (!this.reader.readAndCheckSignature(d)) {
            this.reader.index -= 4;
            var k = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(k) + ", expected " + a.pretty(d) + ")");
          }
        }, isSignature: function(d, k) {
          var h = this.reader.index;
          this.reader.setIndex(d);
          var y = this.reader.readString(4) === k;
          return this.reader.setIndex(h), y;
        }, readBlockEndOfCentral: function() {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var d = this.reader.readData(this.zipCommentLength), k = p.uint8array ? "uint8array" : "array", h = a.transformTo(k, d);
          this.zipComment = this.loadOptions.decodeFileName(h);
        }, readBlockZip64EndOfCentral: function() {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
          for (var d, k, h, y = this.zip64EndOfCentralSize - 44; 0 < y; )
            d = this.reader.readInt(2), k = this.reader.readInt(4), h = this.reader.readData(k), this.zip64ExtensibleData[d] = { id: d, length: k, value: h };
        }, readBlockZip64EndOfCentralLocator: function() {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
            throw new Error("Multi-volumes zip are not supported");
        }, readLocalFiles: function() {
          var d, k;
          for (d = 0; d < this.files.length; d++)
            k = this.files[d], this.reader.setIndex(k.localHeaderOffset), this.checkSignature(o.LOCAL_FILE_HEADER), k.readLocalPart(this.reader), k.handleUTF8(), k.processAttributes();
        }, readCentralDir: function() {
          var d;
          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER); )
            (d = new c({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(d);
          if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
            throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        }, readEndOfCentral: function() {
          var d = this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);
          if (d < 0)
            throw this.isSignature(0, o.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
          this.reader.setIndex(d);
          var k = d;
          if (this.checkSignature(o.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
            if (this.zip64 = !0, (d = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
              throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(d), this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, o.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
              throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }
          var h = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (h += 20, h += 12 + this.zip64EndOfCentralSize);
          var y = k - h;
          if (0 < y)
            this.isSignature(k, o.CENTRAL_FILE_HEADER) || (this.reader.zero = y);
          else if (y < 0)
            throw new Error("Corrupted zip: missing " + Math.abs(y) + " bytes.");
        }, prepareReader: function(d) {
          this.reader = n(d);
        }, load: function(d) {
          this.prepareReader(d), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        } }, s.exports = b;
      }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, s, l) {
        var n = e("./reader/readerFor"), a = e("./utils"), o = e("./compressedObject"), c = e("./crc32"), p = e("./utf8"), b = e("./compressions"), d = e("./support");
        function k(h, y) {
          this.options = h, this.loadOptions = y;
        }
        k.prototype = { isEncrypted: function() {
          return (1 & this.bitFlag) == 1;
        }, useUTF8: function() {
          return (2048 & this.bitFlag) == 2048;
        }, readLocalPart: function(h) {
          var y, f;
          if (h.skip(22), this.fileNameLength = h.readInt(2), f = h.readInt(2), this.fileName = h.readData(this.fileNameLength), h.skip(f), this.compressedSize === -1 || this.uncompressedSize === -1)
            throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if ((y = function(m) {
            for (var _ in b)
              if (Object.prototype.hasOwnProperty.call(b, _) && b[_].magic === m)
                return b[_];
            return null;
          }(this.compressionMethod)) === null)
            throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
          this.decompressed = new o(this.compressedSize, this.uncompressedSize, this.crc32, y, h.readData(this.compressedSize));
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
            var h = n(this.extraFields[1].value);
            this.uncompressedSize === a.MAX_VALUE_32BITS && (this.uncompressedSize = h.readInt(8)), this.compressedSize === a.MAX_VALUE_32BITS && (this.compressedSize = h.readInt(8)), this.localHeaderOffset === a.MAX_VALUE_32BITS && (this.localHeaderOffset = h.readInt(8)), this.diskNumberStart === a.MAX_VALUE_32BITS && (this.diskNumberStart = h.readInt(4));
          }
        }, readExtraFields: function(h) {
          var y, f, m, _ = h.index + this.extraFieldsLength;
          for (this.extraFields || (this.extraFields = {}); h.index + 4 < _; )
            y = h.readInt(2), f = h.readInt(2), m = h.readData(f), this.extraFields[y] = { id: y, length: f, value: m };
          h.setIndex(_);
        }, handleUTF8: function() {
          var h = d.uint8array ? "uint8array" : "array";
          if (this.useUTF8())
            this.fileNameStr = p.utf8decode(this.fileName), this.fileCommentStr = p.utf8decode(this.fileComment);
          else {
            var y = this.findExtraFieldUnicodePath();
            if (y !== null)
              this.fileNameStr = y;
            else {
              var f = a.transformTo(h, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(f);
            }
            var m = this.findExtraFieldUnicodeComment();
            if (m !== null)
              this.fileCommentStr = m;
            else {
              var _ = a.transformTo(h, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(_);
            }
          }
        }, findExtraFieldUnicodePath: function() {
          var h = this.extraFields[28789];
          if (h) {
            var y = n(h.value);
            return y.readInt(1) !== 1 || c(this.fileName) !== y.readInt(4) ? null : p.utf8decode(y.readData(h.length - 5));
          }
          return null;
        }, findExtraFieldUnicodeComment: function() {
          var h = this.extraFields[25461];
          if (h) {
            var y = n(h.value);
            return y.readInt(1) !== 1 || c(this.fileComment) !== y.readInt(4) ? null : p.utf8decode(y.readData(h.length - 5));
          }
          return null;
        } }, s.exports = k;
      }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, s, l) {
        function n(y, f, m) {
          this.name = y, this.dir = m.dir, this.date = m.date, this.comment = m.comment, this.unixPermissions = m.unixPermissions, this.dosPermissions = m.dosPermissions, this._data = f, this._dataBinary = m.binary, this.options = { compression: m.compression, compressionOptions: m.compressionOptions };
        }
        var a = e("./stream/StreamHelper"), o = e("./stream/DataWorker"), c = e("./utf8"), p = e("./compressedObject"), b = e("./stream/GenericWorker");
        n.prototype = { internalStream: function(y) {
          var f = null, m = "string";
          try {
            if (!y)
              throw new Error("No output type specified.");
            var _ = (m = y.toLowerCase()) === "string" || m === "text";
            m !== "binarystring" && m !== "text" || (m = "string"), f = this._decompressWorker();
            var v = !this._dataBinary;
            v && !_ && (f = f.pipe(new c.Utf8EncodeWorker())), !v && _ && (f = f.pipe(new c.Utf8DecodeWorker()));
          } catch (A) {
            (f = new b("error")).error(A);
          }
          return new a(f, m, "");
        }, async: function(y, f) {
          return this.internalStream(y).accumulate(f);
        }, nodeStream: function(y, f) {
          return this.internalStream(y || "nodebuffer").toNodejsStream(f);
        }, _compressWorker: function(y, f) {
          if (this._data instanceof p && this._data.compression.magic === y.magic)
            return this._data.getCompressedWorker();
          var m = this._decompressWorker();
          return this._dataBinary || (m = m.pipe(new c.Utf8EncodeWorker())), p.createWorkerFrom(m, y, f);
        }, _decompressWorker: function() {
          return this._data instanceof p ? this._data.getContentWorker() : this._data instanceof b ? this._data : new o(this._data);
        } };
        for (var d = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], k = function() {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        }, h = 0; h < d.length; h++)
          n.prototype[d[h]] = k;
        s.exports = n;
      }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, s, l) {
        (function(n) {
          var a, o, c = n.MutationObserver || n.WebKitMutationObserver;
          if (c) {
            var p = 0, b = new c(y), d = n.document.createTextNode("");
            b.observe(d, { characterData: !0 }), a = function() {
              d.data = p = ++p % 2;
            };
          } else if (n.setImmediate || n.MessageChannel === void 0)
            a = "document" in n && "onreadystatechange" in n.document.createElement("script") ? function() {
              var f = n.document.createElement("script");
              f.onreadystatechange = function() {
                y(), f.onreadystatechange = null, f.parentNode.removeChild(f), f = null;
              }, n.document.documentElement.appendChild(f);
            } : function() {
              setTimeout(y, 0);
            };
          else {
            var k = new n.MessageChannel();
            k.port1.onmessage = y, a = function() {
              k.port2.postMessage(0);
            };
          }
          var h = [];
          function y() {
            var f, m;
            o = !0;
            for (var _ = h.length; _; ) {
              for (m = h, h = [], f = -1; ++f < _; )
                m[f]();
              _ = h.length;
            }
            o = !1;
          }
          s.exports = function(f) {
            h.push(f) !== 1 || o || a();
          };
        }).call(this, typeof Mt < "u" ? Mt : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}], 37: [function(e, s, l) {
        var n = e("immediate");
        function a() {
        }
        var o = {}, c = ["REJECTED"], p = ["FULFILLED"], b = ["PENDING"];
        function d(_) {
          if (typeof _ != "function")
            throw new TypeError("resolver must be a function");
          this.state = b, this.queue = [], this.outcome = void 0, _ !== a && f(this, _);
        }
        function k(_, v, A) {
          this.promise = _, typeof v == "function" && (this.onFulfilled = v, this.callFulfilled = this.otherCallFulfilled), typeof A == "function" && (this.onRejected = A, this.callRejected = this.otherCallRejected);
        }
        function h(_, v, A) {
          n(function() {
            var S;
            try {
              S = v(A);
            } catch (E) {
              return o.reject(_, E);
            }
            S === _ ? o.reject(_, new TypeError("Cannot resolve promise with itself")) : o.resolve(_, S);
          });
        }
        function y(_) {
          var v = _ && _.then;
          if (_ && (typeof _ == "object" || typeof _ == "function") && typeof v == "function")
            return function() {
              v.apply(_, arguments);
            };
        }
        function f(_, v) {
          var A = !1;
          function S(D) {
            A || (A = !0, o.reject(_, D));
          }
          function E(D) {
            A || (A = !0, o.resolve(_, D));
          }
          var R = m(function() {
            v(E, S);
          });
          R.status === "error" && S(R.value);
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
        (s.exports = d).prototype.finally = function(_) {
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
        }, d.prototype.catch = function(_) {
          return this.then(null, _);
        }, d.prototype.then = function(_, v) {
          if (typeof _ != "function" && this.state === p || typeof v != "function" && this.state === c)
            return this;
          var A = new this.constructor(a);
          return this.state !== b ? h(A, this.state === p ? _ : v, this.outcome) : this.queue.push(new k(A, _, v)), A;
        }, k.prototype.callFulfilled = function(_) {
          o.resolve(this.promise, _);
        }, k.prototype.otherCallFulfilled = function(_) {
          h(this.promise, this.onFulfilled, _);
        }, k.prototype.callRejected = function(_) {
          o.reject(this.promise, _);
        }, k.prototype.otherCallRejected = function(_) {
          h(this.promise, this.onRejected, _);
        }, o.resolve = function(_, v) {
          var A = m(y, v);
          if (A.status === "error")
            return o.reject(_, A.value);
          var S = A.value;
          if (S)
            f(_, S);
          else {
            _.state = p, _.outcome = v;
            for (var E = -1, R = _.queue.length; ++E < R; )
              _.queue[E].callFulfilled(v);
          }
          return _;
        }, o.reject = function(_, v) {
          _.state = c, _.outcome = v;
          for (var A = -1, S = _.queue.length; ++A < S; )
            _.queue[A].callRejected(v);
          return _;
        }, d.resolve = function(_) {
          return _ instanceof this ? _ : o.resolve(new this(a), _);
        }, d.reject = function(_) {
          var v = new this(a);
          return o.reject(v, _);
        }, d.all = function(_) {
          var v = this;
          if (Object.prototype.toString.call(_) !== "[object Array]")
            return this.reject(new TypeError("must be an array"));
          var A = _.length, S = !1;
          if (!A)
            return this.resolve([]);
          for (var E = new Array(A), R = 0, D = -1, Z = new this(a); ++D < A; )
            B(_[D], D);
          return Z;
          function B(W, X) {
            v.resolve(W).then(function(x) {
              E[X] = x, ++R !== A || S || (S = !0, o.resolve(Z, E));
            }, function(x) {
              S || (S = !0, o.reject(Z, x));
            });
          }
        }, d.race = function(_) {
          var v = this;
          if (Object.prototype.toString.call(_) !== "[object Array]")
            return this.reject(new TypeError("must be an array"));
          var A = _.length, S = !1;
          if (!A)
            return this.resolve([]);
          for (var E = -1, R = new this(a); ++E < A; )
            D = _[E], v.resolve(D).then(function(Z) {
              S || (S = !0, o.resolve(R, Z));
            }, function(Z) {
              S || (S = !0, o.reject(R, Z));
            });
          var D;
          return R;
        };
      }, { immediate: 36 }], 38: [function(e, s, l) {
        var n = {};
        (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), s.exports = n;
      }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, s, l) {
        var n = e("./zlib/deflate"), a = e("./utils/common"), o = e("./utils/strings"), c = e("./zlib/messages"), p = e("./zlib/zstream"), b = Object.prototype.toString, d = 0, k = -1, h = 0, y = 8;
        function f(_) {
          if (!(this instanceof f))
            return new f(_);
          this.options = a.assign({ level: k, method: y, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: h, to: "" }, _ || {});
          var v = this.options;
          v.raw && 0 < v.windowBits ? v.windowBits = -v.windowBits : v.gzip && 0 < v.windowBits && v.windowBits < 16 && (v.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new p(), this.strm.avail_out = 0;
          var A = n.deflateInit2(this.strm, v.level, v.method, v.windowBits, v.memLevel, v.strategy);
          if (A !== d)
            throw new Error(c[A]);
          if (v.header && n.deflateSetHeader(this.strm, v.header), v.dictionary) {
            var S;
            if (S = typeof v.dictionary == "string" ? o.string2buf(v.dictionary) : b.call(v.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(v.dictionary) : v.dictionary, (A = n.deflateSetDictionary(this.strm, S)) !== d)
              throw new Error(c[A]);
            this._dict_set = !0;
          }
        }
        function m(_, v) {
          var A = new f(v);
          if (A.push(_, !0), A.err)
            throw A.msg || c[A.err];
          return A.result;
        }
        f.prototype.push = function(_, v) {
          var A, S, E = this.strm, R = this.options.chunkSize;
          if (this.ended)
            return !1;
          S = v === ~~v ? v : v === !0 ? 4 : 0, typeof _ == "string" ? E.input = o.string2buf(_) : b.call(_) === "[object ArrayBuffer]" ? E.input = new Uint8Array(_) : E.input = _, E.next_in = 0, E.avail_in = E.input.length;
          do {
            if (E.avail_out === 0 && (E.output = new a.Buf8(R), E.next_out = 0, E.avail_out = R), (A = n.deflate(E, S)) !== 1 && A !== d)
              return this.onEnd(A), !(this.ended = !0);
            E.avail_out !== 0 && (E.avail_in !== 0 || S !== 4 && S !== 2) || (this.options.to === "string" ? this.onData(o.buf2binstring(a.shrinkBuf(E.output, E.next_out))) : this.onData(a.shrinkBuf(E.output, E.next_out)));
          } while ((0 < E.avail_in || E.avail_out === 0) && A !== 1);
          return S === 4 ? (A = n.deflateEnd(this.strm), this.onEnd(A), this.ended = !0, A === d) : S !== 2 || (this.onEnd(d), !(E.avail_out = 0));
        }, f.prototype.onData = function(_) {
          this.chunks.push(_);
        }, f.prototype.onEnd = function(_) {
          _ === d && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = _, this.msg = this.strm.msg;
        }, l.Deflate = f, l.deflate = m, l.deflateRaw = function(_, v) {
          return (v = v || {}).raw = !0, m(_, v);
        }, l.gzip = function(_, v) {
          return (v = v || {}).gzip = !0, m(_, v);
        };
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, s, l) {
        var n = e("./zlib/inflate"), a = e("./utils/common"), o = e("./utils/strings"), c = e("./zlib/constants"), p = e("./zlib/messages"), b = e("./zlib/zstream"), d = e("./zlib/gzheader"), k = Object.prototype.toString;
        function h(f) {
          if (!(this instanceof h))
            return new h(f);
          this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, f || {});
          var m = this.options;
          m.raw && 0 <= m.windowBits && m.windowBits < 16 && (m.windowBits = -m.windowBits, m.windowBits === 0 && (m.windowBits = -15)), !(0 <= m.windowBits && m.windowBits < 16) || f && f.windowBits || (m.windowBits += 32), 15 < m.windowBits && m.windowBits < 48 && !(15 & m.windowBits) && (m.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new b(), this.strm.avail_out = 0;
          var _ = n.inflateInit2(this.strm, m.windowBits);
          if (_ !== c.Z_OK)
            throw new Error(p[_]);
          this.header = new d(), n.inflateGetHeader(this.strm, this.header);
        }
        function y(f, m) {
          var _ = new h(m);
          if (_.push(f, !0), _.err)
            throw _.msg || p[_.err];
          return _.result;
        }
        h.prototype.push = function(f, m) {
          var _, v, A, S, E, R, D = this.strm, Z = this.options.chunkSize, B = this.options.dictionary, W = !1;
          if (this.ended)
            return !1;
          v = m === ~~m ? m : m === !0 ? c.Z_FINISH : c.Z_NO_FLUSH, typeof f == "string" ? D.input = o.binstring2buf(f) : k.call(f) === "[object ArrayBuffer]" ? D.input = new Uint8Array(f) : D.input = f, D.next_in = 0, D.avail_in = D.input.length;
          do {
            if (D.avail_out === 0 && (D.output = new a.Buf8(Z), D.next_out = 0, D.avail_out = Z), (_ = n.inflate(D, c.Z_NO_FLUSH)) === c.Z_NEED_DICT && B && (R = typeof B == "string" ? o.string2buf(B) : k.call(B) === "[object ArrayBuffer]" ? new Uint8Array(B) : B, _ = n.inflateSetDictionary(this.strm, R)), _ === c.Z_BUF_ERROR && W === !0 && (_ = c.Z_OK, W = !1), _ !== c.Z_STREAM_END && _ !== c.Z_OK)
              return this.onEnd(_), !(this.ended = !0);
            D.next_out && (D.avail_out !== 0 && _ !== c.Z_STREAM_END && (D.avail_in !== 0 || v !== c.Z_FINISH && v !== c.Z_SYNC_FLUSH) || (this.options.to === "string" ? (A = o.utf8border(D.output, D.next_out), S = D.next_out - A, E = o.buf2string(D.output, A), D.next_out = S, D.avail_out = Z - S, S && a.arraySet(D.output, D.output, A, S, 0), this.onData(E)) : this.onData(a.shrinkBuf(D.output, D.next_out)))), D.avail_in === 0 && D.avail_out === 0 && (W = !0);
          } while ((0 < D.avail_in || D.avail_out === 0) && _ !== c.Z_STREAM_END);
          return _ === c.Z_STREAM_END && (v = c.Z_FINISH), v === c.Z_FINISH ? (_ = n.inflateEnd(this.strm), this.onEnd(_), this.ended = !0, _ === c.Z_OK) : v !== c.Z_SYNC_FLUSH || (this.onEnd(c.Z_OK), !(D.avail_out = 0));
        }, h.prototype.onData = function(f) {
          this.chunks.push(f);
        }, h.prototype.onEnd = function(f) {
          f === c.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = f, this.msg = this.strm.msg;
        }, l.Inflate = h, l.inflate = y, l.inflateRaw = function(f, m) {
          return (m = m || {}).raw = !0, y(f, m);
        }, l.ungzip = y;
      }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, s, l) {
        var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
        l.assign = function(c) {
          for (var p = Array.prototype.slice.call(arguments, 1); p.length; ) {
            var b = p.shift();
            if (b) {
              if (typeof b != "object")
                throw new TypeError(b + "must be non-object");
              for (var d in b)
                b.hasOwnProperty(d) && (c[d] = b[d]);
            }
          }
          return c;
        }, l.shrinkBuf = function(c, p) {
          return c.length === p ? c : c.subarray ? c.subarray(0, p) : (c.length = p, c);
        };
        var a = { arraySet: function(c, p, b, d, k) {
          if (p.subarray && c.subarray)
            c.set(p.subarray(b, b + d), k);
          else
            for (var h = 0; h < d; h++)
              c[k + h] = p[b + h];
        }, flattenChunks: function(c) {
          var p, b, d, k, h, y;
          for (p = d = 0, b = c.length; p < b; p++)
            d += c[p].length;
          for (y = new Uint8Array(d), p = k = 0, b = c.length; p < b; p++)
            h = c[p], y.set(h, k), k += h.length;
          return y;
        } }, o = { arraySet: function(c, p, b, d, k) {
          for (var h = 0; h < d; h++)
            c[k + h] = p[b + h];
        }, flattenChunks: function(c) {
          return [].concat.apply([], c);
        } };
        l.setTyped = function(c) {
          c ? (l.Buf8 = Uint8Array, l.Buf16 = Uint16Array, l.Buf32 = Int32Array, l.assign(l, a)) : (l.Buf8 = Array, l.Buf16 = Array, l.Buf32 = Array, l.assign(l, o));
        }, l.setTyped(n);
      }, {}], 42: [function(e, s, l) {
        var n = e("./common"), a = !0, o = !0;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch {
          a = !1;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch {
          o = !1;
        }
        for (var c = new n.Buf8(256), p = 0; p < 256; p++)
          c[p] = 252 <= p ? 6 : 248 <= p ? 5 : 240 <= p ? 4 : 224 <= p ? 3 : 192 <= p ? 2 : 1;
        function b(d, k) {
          if (k < 65537 && (d.subarray && o || !d.subarray && a))
            return String.fromCharCode.apply(null, n.shrinkBuf(d, k));
          for (var h = "", y = 0; y < k; y++)
            h += String.fromCharCode(d[y]);
          return h;
        }
        c[254] = c[254] = 1, l.string2buf = function(d) {
          var k, h, y, f, m, _ = d.length, v = 0;
          for (f = 0; f < _; f++)
            (64512 & (h = d.charCodeAt(f))) == 55296 && f + 1 < _ && (64512 & (y = d.charCodeAt(f + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (y - 56320), f++), v += h < 128 ? 1 : h < 2048 ? 2 : h < 65536 ? 3 : 4;
          for (k = new n.Buf8(v), f = m = 0; m < v; f++)
            (64512 & (h = d.charCodeAt(f))) == 55296 && f + 1 < _ && (64512 & (y = d.charCodeAt(f + 1))) == 56320 && (h = 65536 + (h - 55296 << 10) + (y - 56320), f++), h < 128 ? k[m++] = h : (h < 2048 ? k[m++] = 192 | h >>> 6 : (h < 65536 ? k[m++] = 224 | h >>> 12 : (k[m++] = 240 | h >>> 18, k[m++] = 128 | h >>> 12 & 63), k[m++] = 128 | h >>> 6 & 63), k[m++] = 128 | 63 & h);
          return k;
        }, l.buf2binstring = function(d) {
          return b(d, d.length);
        }, l.binstring2buf = function(d) {
          for (var k = new n.Buf8(d.length), h = 0, y = k.length; h < y; h++)
            k[h] = d.charCodeAt(h);
          return k;
        }, l.buf2string = function(d, k) {
          var h, y, f, m, _ = k || d.length, v = new Array(2 * _);
          for (h = y = 0; h < _; )
            if ((f = d[h++]) < 128)
              v[y++] = f;
            else if (4 < (m = c[f]))
              v[y++] = 65533, h += m - 1;
            else {
              for (f &= m === 2 ? 31 : m === 3 ? 15 : 7; 1 < m && h < _; )
                f = f << 6 | 63 & d[h++], m--;
              1 < m ? v[y++] = 65533 : f < 65536 ? v[y++] = f : (f -= 65536, v[y++] = 55296 | f >> 10 & 1023, v[y++] = 56320 | 1023 & f);
            }
          return b(v, y);
        }, l.utf8border = function(d, k) {
          var h;
          for ((k = k || d.length) > d.length && (k = d.length), h = k - 1; 0 <= h && (192 & d[h]) == 128; )
            h--;
          return h < 0 || h === 0 ? k : h + c[d[h]] > k ? h : k;
        };
      }, { "./common": 41 }], 43: [function(e, s, l) {
        s.exports = function(n, a, o, c) {
          for (var p = 65535 & n | 0, b = n >>> 16 & 65535 | 0, d = 0; o !== 0; ) {
            for (o -= d = 2e3 < o ? 2e3 : o; b = b + (p = p + a[c++] | 0) | 0, --d; )
              ;
            p %= 65521, b %= 65521;
          }
          return p | b << 16 | 0;
        };
      }, {}], 44: [function(e, s, l) {
        s.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, {}], 45: [function(e, s, l) {
        var n = function() {
          for (var a, o = [], c = 0; c < 256; c++) {
            a = c;
            for (var p = 0; p < 8; p++)
              a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
            o[c] = a;
          }
          return o;
        }();
        s.exports = function(a, o, c, p) {
          var b = n, d = p + c;
          a ^= -1;
          for (var k = p; k < d; k++)
            a = a >>> 8 ^ b[255 & (a ^ o[k])];
          return -1 ^ a;
        };
      }, {}], 46: [function(e, s, l) {
        var n, a = e("../utils/common"), o = e("./trees"), c = e("./adler32"), p = e("./crc32"), b = e("./messages"), d = 0, k = 4, h = 0, y = -2, f = -1, m = 4, _ = 2, v = 8, A = 9, S = 286, E = 30, R = 19, D = 2 * S + 1, Z = 15, B = 3, W = 258, X = W + B + 1, x = 42, P = 113, u = 1, L = 2, et = 3, O = 4;
        function q(i, F) {
          return i.msg = b[F], F;
        }
        function j(i) {
          return (i << 1) - (4 < i ? 9 : 0);
        }
        function J(i) {
          for (var F = i.length; 0 <= --F; )
            i[F] = 0;
        }
        function T(i) {
          var F = i.state, N = F.pending;
          N > i.avail_out && (N = i.avail_out), N !== 0 && (a.arraySet(i.output, F.pending_buf, F.pending_out, N, i.next_out), i.next_out += N, F.pending_out += N, i.total_out += N, i.avail_out -= N, F.pending -= N, F.pending === 0 && (F.pending_out = 0));
        }
        function I(i, F) {
          o._tr_flush_block(i, 0 <= i.block_start ? i.block_start : -1, i.strstart - i.block_start, F), i.block_start = i.strstart, T(i.strm);
        }
        function Q(i, F) {
          i.pending_buf[i.pending++] = F;
        }
        function V(i, F) {
          i.pending_buf[i.pending++] = F >>> 8 & 255, i.pending_buf[i.pending++] = 255 & F;
        }
        function G(i, F) {
          var N, w, g = i.max_chain_length, C = i.strstart, U = i.prev_length, M = i.nice_match, z = i.strstart > i.w_size - X ? i.strstart - (i.w_size - X) : 0, $ = i.window, Y = i.w_mask, H = i.prev, tt = i.strstart + W, st = $[C + U - 1], it = $[C + U];
          i.prev_length >= i.good_match && (g >>= 2), M > i.lookahead && (M = i.lookahead);
          do
            if ($[(N = F) + U] === it && $[N + U - 1] === st && $[N] === $[C] && $[++N] === $[C + 1]) {
              C += 2, N++;
              do
                ;
              while ($[++C] === $[++N] && $[++C] === $[++N] && $[++C] === $[++N] && $[++C] === $[++N] && $[++C] === $[++N] && $[++C] === $[++N] && $[++C] === $[++N] && $[++C] === $[++N] && C < tt);
              if (w = W - (tt - C), C = tt - W, U < w) {
                if (i.match_start = F, M <= (U = w))
                  break;
                st = $[C + U - 1], it = $[C + U];
              }
            }
          while ((F = H[F & Y]) > z && --g != 0);
          return U <= i.lookahead ? U : i.lookahead;
        }
        function at(i) {
          var F, N, w, g, C, U, M, z, $, Y, H = i.w_size;
          do {
            if (g = i.window_size - i.lookahead - i.strstart, i.strstart >= H + (H - X)) {
              for (a.arraySet(i.window, i.window, H, H, 0), i.match_start -= H, i.strstart -= H, i.block_start -= H, F = N = i.hash_size; w = i.head[--F], i.head[F] = H <= w ? w - H : 0, --N; )
                ;
              for (F = N = H; w = i.prev[--F], i.prev[F] = H <= w ? w - H : 0, --N; )
                ;
              g += H;
            }
            if (i.strm.avail_in === 0)
              break;
            if (U = i.strm, M = i.window, z = i.strstart + i.lookahead, $ = g, Y = void 0, Y = U.avail_in, $ < Y && (Y = $), N = Y === 0 ? 0 : (U.avail_in -= Y, a.arraySet(M, U.input, U.next_in, Y, z), U.state.wrap === 1 ? U.adler = c(U.adler, M, Y, z) : U.state.wrap === 2 && (U.adler = p(U.adler, M, Y, z)), U.next_in += Y, U.total_in += Y, Y), i.lookahead += N, i.lookahead + i.insert >= B)
              for (C = i.strstart - i.insert, i.ins_h = i.window[C], i.ins_h = (i.ins_h << i.hash_shift ^ i.window[C + 1]) & i.hash_mask; i.insert && (i.ins_h = (i.ins_h << i.hash_shift ^ i.window[C + B - 1]) & i.hash_mask, i.prev[C & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = C, C++, i.insert--, !(i.lookahead + i.insert < B)); )
                ;
          } while (i.lookahead < X && i.strm.avail_in !== 0);
        }
        function lt(i, F) {
          for (var N, w; ; ) {
            if (i.lookahead < X) {
              if (at(i), i.lookahead < X && F === d)
                return u;
              if (i.lookahead === 0)
                break;
            }
            if (N = 0, i.lookahead >= B && (i.ins_h = (i.ins_h << i.hash_shift ^ i.window[i.strstart + B - 1]) & i.hash_mask, N = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart), N !== 0 && i.strstart - N <= i.w_size - X && (i.match_length = G(i, N)), i.match_length >= B)
              if (w = o._tr_tally(i, i.strstart - i.match_start, i.match_length - B), i.lookahead -= i.match_length, i.match_length <= i.max_lazy_match && i.lookahead >= B) {
                for (i.match_length--; i.strstart++, i.ins_h = (i.ins_h << i.hash_shift ^ i.window[i.strstart + B - 1]) & i.hash_mask, N = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart, --i.match_length != 0; )
                  ;
                i.strstart++;
              } else
                i.strstart += i.match_length, i.match_length = 0, i.ins_h = i.window[i.strstart], i.ins_h = (i.ins_h << i.hash_shift ^ i.window[i.strstart + 1]) & i.hash_mask;
            else
              w = o._tr_tally(i, 0, i.window[i.strstart]), i.lookahead--, i.strstart++;
            if (w && (I(i, !1), i.strm.avail_out === 0))
              return u;
          }
          return i.insert = i.strstart < B - 1 ? i.strstart : B - 1, F === k ? (I(i, !0), i.strm.avail_out === 0 ? et : O) : i.last_lit && (I(i, !1), i.strm.avail_out === 0) ? u : L;
        }
        function nt(i, F) {
          for (var N, w, g; ; ) {
            if (i.lookahead < X) {
              if (at(i), i.lookahead < X && F === d)
                return u;
              if (i.lookahead === 0)
                break;
            }
            if (N = 0, i.lookahead >= B && (i.ins_h = (i.ins_h << i.hash_shift ^ i.window[i.strstart + B - 1]) & i.hash_mask, N = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart), i.prev_length = i.match_length, i.prev_match = i.match_start, i.match_length = B - 1, N !== 0 && i.prev_length < i.max_lazy_match && i.strstart - N <= i.w_size - X && (i.match_length = G(i, N), i.match_length <= 5 && (i.strategy === 1 || i.match_length === B && 4096 < i.strstart - i.match_start) && (i.match_length = B - 1)), i.prev_length >= B && i.match_length <= i.prev_length) {
              for (g = i.strstart + i.lookahead - B, w = o._tr_tally(i, i.strstart - 1 - i.prev_match, i.prev_length - B), i.lookahead -= i.prev_length - 1, i.prev_length -= 2; ++i.strstart <= g && (i.ins_h = (i.ins_h << i.hash_shift ^ i.window[i.strstart + B - 1]) & i.hash_mask, N = i.prev[i.strstart & i.w_mask] = i.head[i.ins_h], i.head[i.ins_h] = i.strstart), --i.prev_length != 0; )
                ;
              if (i.match_available = 0, i.match_length = B - 1, i.strstart++, w && (I(i, !1), i.strm.avail_out === 0))
                return u;
            } else if (i.match_available) {
              if ((w = o._tr_tally(i, 0, i.window[i.strstart - 1])) && I(i, !1), i.strstart++, i.lookahead--, i.strm.avail_out === 0)
                return u;
            } else
              i.match_available = 1, i.strstart++, i.lookahead--;
          }
          return i.match_available && (w = o._tr_tally(i, 0, i.window[i.strstart - 1]), i.match_available = 0), i.insert = i.strstart < B - 1 ? i.strstart : B - 1, F === k ? (I(i, !0), i.strm.avail_out === 0 ? et : O) : i.last_lit && (I(i, !1), i.strm.avail_out === 0) ? u : L;
        }
        function ot(i, F, N, w, g) {
          this.good_length = i, this.max_lazy = F, this.nice_length = N, this.max_chain = w, this.func = g;
        }
        function ft() {
          this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * D), this.dyn_dtree = new a.Buf16(2 * (2 * E + 1)), this.bl_tree = new a.Buf16(2 * (2 * R + 1)), J(this.dyn_ltree), J(this.dyn_dtree), J(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(Z + 1), this.heap = new a.Buf16(2 * S + 1), J(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * S + 1), J(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
        }
        function ut(i) {
          var F;
          return i && i.state ? (i.total_in = i.total_out = 0, i.data_type = _, (F = i.state).pending = 0, F.pending_out = 0, F.wrap < 0 && (F.wrap = -F.wrap), F.status = F.wrap ? x : P, i.adler = F.wrap === 2 ? 0 : 1, F.last_flush = d, o._tr_init(F), h) : q(i, y);
        }
        function gt(i) {
          var F = ut(i);
          return F === h && function(N) {
            N.window_size = 2 * N.w_size, J(N.head), N.max_lazy_match = n[N.level].max_lazy, N.good_match = n[N.level].good_length, N.nice_match = n[N.level].nice_length, N.max_chain_length = n[N.level].max_chain, N.strstart = 0, N.block_start = 0, N.lookahead = 0, N.insert = 0, N.match_length = N.prev_length = B - 1, N.match_available = 0, N.ins_h = 0;
          }(i.state), F;
        }
        function mt(i, F, N, w, g, C) {
          if (!i)
            return y;
          var U = 1;
          if (F === f && (F = 6), w < 0 ? (U = 0, w = -w) : 15 < w && (U = 2, w -= 16), g < 1 || A < g || N !== v || w < 8 || 15 < w || F < 0 || 9 < F || C < 0 || m < C)
            return q(i, y);
          w === 8 && (w = 9);
          var M = new ft();
          return (i.state = M).strm = i, M.wrap = U, M.gzhead = null, M.w_bits = w, M.w_size = 1 << M.w_bits, M.w_mask = M.w_size - 1, M.hash_bits = g + 7, M.hash_size = 1 << M.hash_bits, M.hash_mask = M.hash_size - 1, M.hash_shift = ~~((M.hash_bits + B - 1) / B), M.window = new a.Buf8(2 * M.w_size), M.head = new a.Buf16(M.hash_size), M.prev = new a.Buf16(M.w_size), M.lit_bufsize = 1 << g + 6, M.pending_buf_size = 4 * M.lit_bufsize, M.pending_buf = new a.Buf8(M.pending_buf_size), M.d_buf = 1 * M.lit_bufsize, M.l_buf = 3 * M.lit_bufsize, M.level = F, M.strategy = C, M.method = N, gt(i);
        }
        n = [new ot(0, 0, 0, 0, function(i, F) {
          var N = 65535;
          for (N > i.pending_buf_size - 5 && (N = i.pending_buf_size - 5); ; ) {
            if (i.lookahead <= 1) {
              if (at(i), i.lookahead === 0 && F === d)
                return u;
              if (i.lookahead === 0)
                break;
            }
            i.strstart += i.lookahead, i.lookahead = 0;
            var w = i.block_start + N;
            if ((i.strstart === 0 || i.strstart >= w) && (i.lookahead = i.strstart - w, i.strstart = w, I(i, !1), i.strm.avail_out === 0) || i.strstart - i.block_start >= i.w_size - X && (I(i, !1), i.strm.avail_out === 0))
              return u;
          }
          return i.insert = 0, F === k ? (I(i, !0), i.strm.avail_out === 0 ? et : O) : (i.strstart > i.block_start && (I(i, !1), i.strm.avail_out), u);
        }), new ot(4, 4, 8, 4, lt), new ot(4, 5, 16, 8, lt), new ot(4, 6, 32, 32, lt), new ot(4, 4, 16, 16, nt), new ot(8, 16, 32, 32, nt), new ot(8, 16, 128, 128, nt), new ot(8, 32, 128, 256, nt), new ot(32, 128, 258, 1024, nt), new ot(32, 258, 258, 4096, nt)], l.deflateInit = function(i, F) {
          return mt(i, F, v, 15, 8, 0);
        }, l.deflateInit2 = mt, l.deflateReset = gt, l.deflateResetKeep = ut, l.deflateSetHeader = function(i, F) {
          return i && i.state ? i.state.wrap !== 2 ? y : (i.state.gzhead = F, h) : y;
        }, l.deflate = function(i, F) {
          var N, w, g, C;
          if (!i || !i.state || 5 < F || F < 0)
            return i ? q(i, y) : y;
          if (w = i.state, !i.output || !i.input && i.avail_in !== 0 || w.status === 666 && F !== k)
            return q(i, i.avail_out === 0 ? -5 : y);
          if (w.strm = i, N = w.last_flush, w.last_flush = F, w.status === x)
            if (w.wrap === 2)
              i.adler = 0, Q(w, 31), Q(w, 139), Q(w, 8), w.gzhead ? (Q(w, (w.gzhead.text ? 1 : 0) + (w.gzhead.hcrc ? 2 : 0) + (w.gzhead.extra ? 4 : 0) + (w.gzhead.name ? 8 : 0) + (w.gzhead.comment ? 16 : 0)), Q(w, 255 & w.gzhead.time), Q(w, w.gzhead.time >> 8 & 255), Q(w, w.gzhead.time >> 16 & 255), Q(w, w.gzhead.time >> 24 & 255), Q(w, w.level === 9 ? 2 : 2 <= w.strategy || w.level < 2 ? 4 : 0), Q(w, 255 & w.gzhead.os), w.gzhead.extra && w.gzhead.extra.length && (Q(w, 255 & w.gzhead.extra.length), Q(w, w.gzhead.extra.length >> 8 & 255)), w.gzhead.hcrc && (i.adler = p(i.adler, w.pending_buf, w.pending, 0)), w.gzindex = 0, w.status = 69) : (Q(w, 0), Q(w, 0), Q(w, 0), Q(w, 0), Q(w, 0), Q(w, w.level === 9 ? 2 : 2 <= w.strategy || w.level < 2 ? 4 : 0), Q(w, 3), w.status = P);
            else {
              var U = v + (w.w_bits - 8 << 4) << 8;
              U |= (2 <= w.strategy || w.level < 2 ? 0 : w.level < 6 ? 1 : w.level === 6 ? 2 : 3) << 6, w.strstart !== 0 && (U |= 32), U += 31 - U % 31, w.status = P, V(w, U), w.strstart !== 0 && (V(w, i.adler >>> 16), V(w, 65535 & i.adler)), i.adler = 1;
            }
          if (w.status === 69)
            if (w.gzhead.extra) {
              for (g = w.pending; w.gzindex < (65535 & w.gzhead.extra.length) && (w.pending !== w.pending_buf_size || (w.gzhead.hcrc && w.pending > g && (i.adler = p(i.adler, w.pending_buf, w.pending - g, g)), T(i), g = w.pending, w.pending !== w.pending_buf_size)); )
                Q(w, 255 & w.gzhead.extra[w.gzindex]), w.gzindex++;
              w.gzhead.hcrc && w.pending > g && (i.adler = p(i.adler, w.pending_buf, w.pending - g, g)), w.gzindex === w.gzhead.extra.length && (w.gzindex = 0, w.status = 73);
            } else
              w.status = 73;
          if (w.status === 73)
            if (w.gzhead.name) {
              g = w.pending;
              do {
                if (w.pending === w.pending_buf_size && (w.gzhead.hcrc && w.pending > g && (i.adler = p(i.adler, w.pending_buf, w.pending - g, g)), T(i), g = w.pending, w.pending === w.pending_buf_size)) {
                  C = 1;
                  break;
                }
                C = w.gzindex < w.gzhead.name.length ? 255 & w.gzhead.name.charCodeAt(w.gzindex++) : 0, Q(w, C);
              } while (C !== 0);
              w.gzhead.hcrc && w.pending > g && (i.adler = p(i.adler, w.pending_buf, w.pending - g, g)), C === 0 && (w.gzindex = 0, w.status = 91);
            } else
              w.status = 91;
          if (w.status === 91)
            if (w.gzhead.comment) {
              g = w.pending;
              do {
                if (w.pending === w.pending_buf_size && (w.gzhead.hcrc && w.pending > g && (i.adler = p(i.adler, w.pending_buf, w.pending - g, g)), T(i), g = w.pending, w.pending === w.pending_buf_size)) {
                  C = 1;
                  break;
                }
                C = w.gzindex < w.gzhead.comment.length ? 255 & w.gzhead.comment.charCodeAt(w.gzindex++) : 0, Q(w, C);
              } while (C !== 0);
              w.gzhead.hcrc && w.pending > g && (i.adler = p(i.adler, w.pending_buf, w.pending - g, g)), C === 0 && (w.status = 103);
            } else
              w.status = 103;
          if (w.status === 103 && (w.gzhead.hcrc ? (w.pending + 2 > w.pending_buf_size && T(i), w.pending + 2 <= w.pending_buf_size && (Q(w, 255 & i.adler), Q(w, i.adler >> 8 & 255), i.adler = 0, w.status = P)) : w.status = P), w.pending !== 0) {
            if (T(i), i.avail_out === 0)
              return w.last_flush = -1, h;
          } else if (i.avail_in === 0 && j(F) <= j(N) && F !== k)
            return q(i, -5);
          if (w.status === 666 && i.avail_in !== 0)
            return q(i, -5);
          if (i.avail_in !== 0 || w.lookahead !== 0 || F !== d && w.status !== 666) {
            var M = w.strategy === 2 ? function(z, $) {
              for (var Y; ; ) {
                if (z.lookahead === 0 && (at(z), z.lookahead === 0)) {
                  if ($ === d)
                    return u;
                  break;
                }
                if (z.match_length = 0, Y = o._tr_tally(z, 0, z.window[z.strstart]), z.lookahead--, z.strstart++, Y && (I(z, !1), z.strm.avail_out === 0))
                  return u;
              }
              return z.insert = 0, $ === k ? (I(z, !0), z.strm.avail_out === 0 ? et : O) : z.last_lit && (I(z, !1), z.strm.avail_out === 0) ? u : L;
            }(w, F) : w.strategy === 3 ? function(z, $) {
              for (var Y, H, tt, st, it = z.window; ; ) {
                if (z.lookahead <= W) {
                  if (at(z), z.lookahead <= W && $ === d)
                    return u;
                  if (z.lookahead === 0)
                    break;
                }
                if (z.match_length = 0, z.lookahead >= B && 0 < z.strstart && (H = it[tt = z.strstart - 1]) === it[++tt] && H === it[++tt] && H === it[++tt]) {
                  st = z.strstart + W;
                  do
                    ;
                  while (H === it[++tt] && H === it[++tt] && H === it[++tt] && H === it[++tt] && H === it[++tt] && H === it[++tt] && H === it[++tt] && H === it[++tt] && tt < st);
                  z.match_length = W - (st - tt), z.match_length > z.lookahead && (z.match_length = z.lookahead);
                }
                if (z.match_length >= B ? (Y = o._tr_tally(z, 1, z.match_length - B), z.lookahead -= z.match_length, z.strstart += z.match_length, z.match_length = 0) : (Y = o._tr_tally(z, 0, z.window[z.strstart]), z.lookahead--, z.strstart++), Y && (I(z, !1), z.strm.avail_out === 0))
                  return u;
              }
              return z.insert = 0, $ === k ? (I(z, !0), z.strm.avail_out === 0 ? et : O) : z.last_lit && (I(z, !1), z.strm.avail_out === 0) ? u : L;
            }(w, F) : n[w.level].func(w, F);
            if (M !== et && M !== O || (w.status = 666), M === u || M === et)
              return i.avail_out === 0 && (w.last_flush = -1), h;
            if (M === L && (F === 1 ? o._tr_align(w) : F !== 5 && (o._tr_stored_block(w, 0, 0, !1), F === 3 && (J(w.head), w.lookahead === 0 && (w.strstart = 0, w.block_start = 0, w.insert = 0))), T(i), i.avail_out === 0))
              return w.last_flush = -1, h;
          }
          return F !== k ? h : w.wrap <= 0 ? 1 : (w.wrap === 2 ? (Q(w, 255 & i.adler), Q(w, i.adler >> 8 & 255), Q(w, i.adler >> 16 & 255), Q(w, i.adler >> 24 & 255), Q(w, 255 & i.total_in), Q(w, i.total_in >> 8 & 255), Q(w, i.total_in >> 16 & 255), Q(w, i.total_in >> 24 & 255)) : (V(w, i.adler >>> 16), V(w, 65535 & i.adler)), T(i), 0 < w.wrap && (w.wrap = -w.wrap), w.pending !== 0 ? h : 1);
        }, l.deflateEnd = function(i) {
          var F;
          return i && i.state ? (F = i.state.status) !== x && F !== 69 && F !== 73 && F !== 91 && F !== 103 && F !== P && F !== 666 ? q(i, y) : (i.state = null, F === P ? q(i, -3) : h) : y;
        }, l.deflateSetDictionary = function(i, F) {
          var N, w, g, C, U, M, z, $, Y = F.length;
          if (!i || !i.state || (C = (N = i.state).wrap) === 2 || C === 1 && N.status !== x || N.lookahead)
            return y;
          for (C === 1 && (i.adler = c(i.adler, F, Y, 0)), N.wrap = 0, Y >= N.w_size && (C === 0 && (J(N.head), N.strstart = 0, N.block_start = 0, N.insert = 0), $ = new a.Buf8(N.w_size), a.arraySet($, F, Y - N.w_size, N.w_size, 0), F = $, Y = N.w_size), U = i.avail_in, M = i.next_in, z = i.input, i.avail_in = Y, i.next_in = 0, i.input = F, at(N); N.lookahead >= B; ) {
            for (w = N.strstart, g = N.lookahead - (B - 1); N.ins_h = (N.ins_h << N.hash_shift ^ N.window[w + B - 1]) & N.hash_mask, N.prev[w & N.w_mask] = N.head[N.ins_h], N.head[N.ins_h] = w, w++, --g; )
              ;
            N.strstart = w, N.lookahead = B - 1, at(N);
          }
          return N.strstart += N.lookahead, N.block_start = N.strstart, N.insert = N.lookahead, N.lookahead = 0, N.match_length = N.prev_length = B - 1, N.match_available = 0, i.next_in = M, i.input = z, i.avail_in = U, N.wrap = C, h;
        }, l.deflateInfo = "pako deflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, s, l) {
        s.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
        };
      }, {}], 48: [function(e, s, l) {
        s.exports = function(n, a) {
          var o, c, p, b, d, k, h, y, f, m, _, v, A, S, E, R, D, Z, B, W, X, x, P, u, L;
          o = n.state, c = n.next_in, u = n.input, p = c + (n.avail_in - 5), b = n.next_out, L = n.output, d = b - (a - n.avail_out), k = b + (n.avail_out - 257), h = o.dmax, y = o.wsize, f = o.whave, m = o.wnext, _ = o.window, v = o.hold, A = o.bits, S = o.lencode, E = o.distcode, R = (1 << o.lenbits) - 1, D = (1 << o.distbits) - 1;
          t:
            do {
              A < 15 && (v += u[c++] << A, A += 8, v += u[c++] << A, A += 8), Z = S[v & R];
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
                        o.mode = 12;
                        break t;
                      }
                      n.msg = "invalid literal/length code", o.mode = 30;
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
                          n.msg = "invalid distance code", o.mode = 30;
                          break t;
                        }
                        if (X = 65535 & Z, A < (B &= 15) && (v += u[c++] << A, (A += 8) < B && (v += u[c++] << A, A += 8)), h < (X += v & (1 << B) - 1)) {
                          n.msg = "invalid distance too far back", o.mode = 30;
                          break t;
                        }
                        if (v >>>= B, A -= B, (B = b - d) < X) {
                          if (f < (B = X - B) && o.sane) {
                            n.msg = "invalid distance too far back", o.mode = 30;
                            break t;
                          }
                          if (P = _, (x = 0) === m) {
                            if (x += y - B, B < W) {
                              for (W -= B; L[b++] = _[x++], --B; )
                                ;
                              x = b - X, P = L;
                            }
                          } else if (m < B) {
                            if (x += y + m - B, (B -= m) < W) {
                              for (W -= B; L[b++] = _[x++], --B; )
                                ;
                              if (x = 0, m < W) {
                                for (W -= B = m; L[b++] = _[x++], --B; )
                                  ;
                                x = b - X, P = L;
                              }
                            }
                          } else if (x += m - B, B < W) {
                            for (W -= B; L[b++] = _[x++], --B; )
                              ;
                            x = b - X, P = L;
                          }
                          for (; 2 < W; )
                            L[b++] = P[x++], L[b++] = P[x++], L[b++] = P[x++], W -= 3;
                          W && (L[b++] = P[x++], 1 < W && (L[b++] = P[x++]));
                        } else {
                          for (x = b - X; L[b++] = L[x++], L[b++] = L[x++], L[b++] = L[x++], 2 < (W -= 3); )
                            ;
                          W && (L[b++] = L[x++], 1 < W && (L[b++] = L[x++]));
                        }
                        break;
                      }
                  }
                  break;
                }
            } while (c < p && b < k);
          c -= W = A >> 3, v &= (1 << (A -= W << 3)) - 1, n.next_in = c, n.next_out = b, n.avail_in = c < p ? p - c + 5 : 5 - (c - p), n.avail_out = b < k ? k - b + 257 : 257 - (b - k), o.hold = v, o.bits = A;
        };
      }, {}], 49: [function(e, s, l) {
        var n = e("../utils/common"), a = e("./adler32"), o = e("./crc32"), c = e("./inffast"), p = e("./inftrees"), b = 1, d = 2, k = 0, h = -2, y = 1, f = 852, m = 592;
        function _(x) {
          return (x >>> 24 & 255) + (x >>> 8 & 65280) + ((65280 & x) << 8) + ((255 & x) << 24);
        }
        function v() {
          this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new n.Buf16(320), this.work = new n.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function A(x) {
          var P;
          return x && x.state ? (P = x.state, x.total_in = x.total_out = P.total = 0, x.msg = "", P.wrap && (x.adler = 1 & P.wrap), P.mode = y, P.last = 0, P.havedict = 0, P.dmax = 32768, P.head = null, P.hold = 0, P.bits = 0, P.lencode = P.lendyn = new n.Buf32(f), P.distcode = P.distdyn = new n.Buf32(m), P.sane = 1, P.back = -1, k) : h;
        }
        function S(x) {
          var P;
          return x && x.state ? ((P = x.state).wsize = 0, P.whave = 0, P.wnext = 0, A(x)) : h;
        }
        function E(x, P) {
          var u, L;
          return x && x.state ? (L = x.state, P < 0 ? (u = 0, P = -P) : (u = 1 + (P >> 4), P < 48 && (P &= 15)), P && (P < 8 || 15 < P) ? h : (L.window !== null && L.wbits !== P && (L.window = null), L.wrap = u, L.wbits = P, S(x))) : h;
        }
        function R(x, P) {
          var u, L;
          return x ? (L = new v(), (x.state = L).window = null, (u = E(x, P)) !== k && (x.state = null), u) : h;
        }
        var D, Z, B = !0;
        function W(x) {
          if (B) {
            var P;
            for (D = new n.Buf32(512), Z = new n.Buf32(32), P = 0; P < 144; )
              x.lens[P++] = 8;
            for (; P < 256; )
              x.lens[P++] = 9;
            for (; P < 280; )
              x.lens[P++] = 7;
            for (; P < 288; )
              x.lens[P++] = 8;
            for (p(b, x.lens, 0, 288, D, 0, x.work, { bits: 9 }), P = 0; P < 32; )
              x.lens[P++] = 5;
            p(d, x.lens, 0, 32, Z, 0, x.work, { bits: 5 }), B = !1;
          }
          x.lencode = D, x.lenbits = 9, x.distcode = Z, x.distbits = 5;
        }
        function X(x, P, u, L) {
          var et, O = x.state;
          return O.window === null && (O.wsize = 1 << O.wbits, O.wnext = 0, O.whave = 0, O.window = new n.Buf8(O.wsize)), L >= O.wsize ? (n.arraySet(O.window, P, u - O.wsize, O.wsize, 0), O.wnext = 0, O.whave = O.wsize) : (L < (et = O.wsize - O.wnext) && (et = L), n.arraySet(O.window, P, u - L, et, O.wnext), (L -= et) ? (n.arraySet(O.window, P, u - L, L, 0), O.wnext = L, O.whave = O.wsize) : (O.wnext += et, O.wnext === O.wsize && (O.wnext = 0), O.whave < O.wsize && (O.whave += et))), 0;
        }
        l.inflateReset = S, l.inflateReset2 = E, l.inflateResetKeep = A, l.inflateInit = function(x) {
          return R(x, 15);
        }, l.inflateInit2 = R, l.inflate = function(x, P) {
          var u, L, et, O, q, j, J, T, I, Q, V, G, at, lt, nt, ot, ft, ut, gt, mt, i, F, N, w, g = 0, C = new n.Buf8(4), U = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!x || !x.state || !x.output || !x.input && x.avail_in !== 0)
            return h;
          (u = x.state).mode === 12 && (u.mode = 13), q = x.next_out, et = x.output, J = x.avail_out, O = x.next_in, L = x.input, j = x.avail_in, T = u.hold, I = u.bits, Q = j, V = J, F = k;
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
                    j--, T += L[O++] << I, I += 8;
                  }
                  if (2 & u.wrap && T === 35615) {
                    C[u.check = 0] = 255 & T, C[1] = T >>> 8 & 255, u.check = o(u.check, C, 2, 0), I = T = 0, u.mode = 2;
                    break;
                  }
                  if (u.flags = 0, u.head && (u.head.done = !1), !(1 & u.wrap) || (((255 & T) << 8) + (T >> 8)) % 31) {
                    x.msg = "incorrect header check", u.mode = 30;
                    break;
                  }
                  if ((15 & T) != 8) {
                    x.msg = "unknown compression method", u.mode = 30;
                    break;
                  }
                  if (I -= 4, i = 8 + (15 & (T >>>= 4)), u.wbits === 0)
                    u.wbits = i;
                  else if (i > u.wbits) {
                    x.msg = "invalid window size", u.mode = 30;
                    break;
                  }
                  u.dmax = 1 << i, x.adler = u.check = 1, u.mode = 512 & T ? 10 : 12, I = T = 0;
                  break;
                case 2:
                  for (; I < 16; ) {
                    if (j === 0)
                      break t;
                    j--, T += L[O++] << I, I += 8;
                  }
                  if (u.flags = T, (255 & u.flags) != 8) {
                    x.msg = "unknown compression method", u.mode = 30;
                    break;
                  }
                  if (57344 & u.flags) {
                    x.msg = "unknown header flags set", u.mode = 30;
                    break;
                  }
                  u.head && (u.head.text = T >> 8 & 1), 512 & u.flags && (C[0] = 255 & T, C[1] = T >>> 8 & 255, u.check = o(u.check, C, 2, 0)), I = T = 0, u.mode = 3;
                case 3:
                  for (; I < 32; ) {
                    if (j === 0)
                      break t;
                    j--, T += L[O++] << I, I += 8;
                  }
                  u.head && (u.head.time = T), 512 & u.flags && (C[0] = 255 & T, C[1] = T >>> 8 & 255, C[2] = T >>> 16 & 255, C[3] = T >>> 24 & 255, u.check = o(u.check, C, 4, 0)), I = T = 0, u.mode = 4;
                case 4:
                  for (; I < 16; ) {
                    if (j === 0)
                      break t;
                    j--, T += L[O++] << I, I += 8;
                  }
                  u.head && (u.head.xflags = 255 & T, u.head.os = T >> 8), 512 & u.flags && (C[0] = 255 & T, C[1] = T >>> 8 & 255, u.check = o(u.check, C, 2, 0)), I = T = 0, u.mode = 5;
                case 5:
                  if (1024 & u.flags) {
                    for (; I < 16; ) {
                      if (j === 0)
                        break t;
                      j--, T += L[O++] << I, I += 8;
                    }
                    u.length = T, u.head && (u.head.extra_len = T), 512 & u.flags && (C[0] = 255 & T, C[1] = T >>> 8 & 255, u.check = o(u.check, C, 2, 0)), I = T = 0;
                  } else
                    u.head && (u.head.extra = null);
                  u.mode = 6;
                case 6:
                  if (1024 & u.flags && (j < (G = u.length) && (G = j), G && (u.head && (i = u.head.extra_len - u.length, u.head.extra || (u.head.extra = new Array(u.head.extra_len)), n.arraySet(u.head.extra, L, O, G, i)), 512 & u.flags && (u.check = o(u.check, L, G, O)), j -= G, O += G, u.length -= G), u.length))
                    break t;
                  u.length = 0, u.mode = 7;
                case 7:
                  if (2048 & u.flags) {
                    if (j === 0)
                      break t;
                    for (G = 0; i = L[O + G++], u.head && i && u.length < 65536 && (u.head.name += String.fromCharCode(i)), i && G < j; )
                      ;
                    if (512 & u.flags && (u.check = o(u.check, L, G, O)), j -= G, O += G, i)
                      break t;
                  } else
                    u.head && (u.head.name = null);
                  u.length = 0, u.mode = 8;
                case 8:
                  if (4096 & u.flags) {
                    if (j === 0)
                      break t;
                    for (G = 0; i = L[O + G++], u.head && i && u.length < 65536 && (u.head.comment += String.fromCharCode(i)), i && G < j; )
                      ;
                    if (512 & u.flags && (u.check = o(u.check, L, G, O)), j -= G, O += G, i)
                      break t;
                  } else
                    u.head && (u.head.comment = null);
                  u.mode = 9;
                case 9:
                  if (512 & u.flags) {
                    for (; I < 16; ) {
                      if (j === 0)
                        break t;
                      j--, T += L[O++] << I, I += 8;
                    }
                    if (T !== (65535 & u.check)) {
                      x.msg = "header crc mismatch", u.mode = 30;
                      break;
                    }
                    I = T = 0;
                  }
                  u.head && (u.head.hcrc = u.flags >> 9 & 1, u.head.done = !0), x.adler = u.check = 0, u.mode = 12;
                  break;
                case 10:
                  for (; I < 32; ) {
                    if (j === 0)
                      break t;
                    j--, T += L[O++] << I, I += 8;
                  }
                  x.adler = u.check = _(T), I = T = 0, u.mode = 11;
                case 11:
                  if (u.havedict === 0)
                    return x.next_out = q, x.avail_out = J, x.next_in = O, x.avail_in = j, u.hold = T, u.bits = I, 2;
                  x.adler = u.check = 1, u.mode = 12;
                case 12:
                  if (P === 5 || P === 6)
                    break t;
                case 13:
                  if (u.last) {
                    T >>>= 7 & I, I -= 7 & I, u.mode = 27;
                    break;
                  }
                  for (; I < 3; ) {
                    if (j === 0)
                      break t;
                    j--, T += L[O++] << I, I += 8;
                  }
                  switch (u.last = 1 & T, I -= 1, 3 & (T >>>= 1)) {
                    case 0:
                      u.mode = 14;
                      break;
                    case 1:
                      if (W(u), u.mode = 20, P !== 6)
                        break;
                      T >>>= 2, I -= 2;
                      break t;
                    case 2:
                      u.mode = 17;
                      break;
                    case 3:
                      x.msg = "invalid block type", u.mode = 30;
                  }
                  T >>>= 2, I -= 2;
                  break;
                case 14:
                  for (T >>>= 7 & I, I -= 7 & I; I < 32; ) {
                    if (j === 0)
                      break t;
                    j--, T += L[O++] << I, I += 8;
                  }
                  if ((65535 & T) != (T >>> 16 ^ 65535)) {
                    x.msg = "invalid stored block lengths", u.mode = 30;
                    break;
                  }
                  if (u.length = 65535 & T, I = T = 0, u.mode = 15, P === 6)
                    break t;
                case 15:
                  u.mode = 16;
                case 16:
                  if (G = u.length) {
                    if (j < G && (G = j), J < G && (G = J), G === 0)
                      break t;
                    n.arraySet(et, L, O, G, q), j -= G, O += G, J -= G, q += G, u.length -= G;
                    break;
                  }
                  u.mode = 12;
                  break;
                case 17:
                  for (; I < 14; ) {
                    if (j === 0)
                      break t;
                    j--, T += L[O++] << I, I += 8;
                  }
                  if (u.nlen = 257 + (31 & T), T >>>= 5, I -= 5, u.ndist = 1 + (31 & T), T >>>= 5, I -= 5, u.ncode = 4 + (15 & T), T >>>= 4, I -= 4, 286 < u.nlen || 30 < u.ndist) {
                    x.msg = "too many length or distance symbols", u.mode = 30;
                    break;
                  }
                  u.have = 0, u.mode = 18;
                case 18:
                  for (; u.have < u.ncode; ) {
                    for (; I < 3; ) {
                      if (j === 0)
                        break t;
                      j--, T += L[O++] << I, I += 8;
                    }
                    u.lens[U[u.have++]] = 7 & T, T >>>= 3, I -= 3;
                  }
                  for (; u.have < 19; )
                    u.lens[U[u.have++]] = 0;
                  if (u.lencode = u.lendyn, u.lenbits = 7, N = { bits: u.lenbits }, F = p(0, u.lens, 0, 19, u.lencode, 0, u.work, N), u.lenbits = N.bits, F) {
                    x.msg = "invalid code lengths set", u.mode = 30;
                    break;
                  }
                  u.have = 0, u.mode = 19;
                case 19:
                  for (; u.have < u.nlen + u.ndist; ) {
                    for (; ot = (g = u.lencode[T & (1 << u.lenbits) - 1]) >>> 16 & 255, ft = 65535 & g, !((nt = g >>> 24) <= I); ) {
                      if (j === 0)
                        break t;
                      j--, T += L[O++] << I, I += 8;
                    }
                    if (ft < 16)
                      T >>>= nt, I -= nt, u.lens[u.have++] = ft;
                    else {
                      if (ft === 16) {
                        for (w = nt + 2; I < w; ) {
                          if (j === 0)
                            break t;
                          j--, T += L[O++] << I, I += 8;
                        }
                        if (T >>>= nt, I -= nt, u.have === 0) {
                          x.msg = "invalid bit length repeat", u.mode = 30;
                          break;
                        }
                        i = u.lens[u.have - 1], G = 3 + (3 & T), T >>>= 2, I -= 2;
                      } else if (ft === 17) {
                        for (w = nt + 3; I < w; ) {
                          if (j === 0)
                            break t;
                          j--, T += L[O++] << I, I += 8;
                        }
                        I -= nt, i = 0, G = 3 + (7 & (T >>>= nt)), T >>>= 3, I -= 3;
                      } else {
                        for (w = nt + 7; I < w; ) {
                          if (j === 0)
                            break t;
                          j--, T += L[O++] << I, I += 8;
                        }
                        I -= nt, i = 0, G = 11 + (127 & (T >>>= nt)), T >>>= 7, I -= 7;
                      }
                      if (u.have + G > u.nlen + u.ndist) {
                        x.msg = "invalid bit length repeat", u.mode = 30;
                        break;
                      }
                      for (; G--; )
                        u.lens[u.have++] = i;
                    }
                  }
                  if (u.mode === 30)
                    break;
                  if (u.lens[256] === 0) {
                    x.msg = "invalid code -- missing end-of-block", u.mode = 30;
                    break;
                  }
                  if (u.lenbits = 9, N = { bits: u.lenbits }, F = p(b, u.lens, 0, u.nlen, u.lencode, 0, u.work, N), u.lenbits = N.bits, F) {
                    x.msg = "invalid literal/lengths set", u.mode = 30;
                    break;
                  }
                  if (u.distbits = 6, u.distcode = u.distdyn, N = { bits: u.distbits }, F = p(d, u.lens, u.nlen, u.ndist, u.distcode, 0, u.work, N), u.distbits = N.bits, F) {
                    x.msg = "invalid distances set", u.mode = 30;
                    break;
                  }
                  if (u.mode = 20, P === 6)
                    break t;
                case 20:
                  u.mode = 21;
                case 21:
                  if (6 <= j && 258 <= J) {
                    x.next_out = q, x.avail_out = J, x.next_in = O, x.avail_in = j, u.hold = T, u.bits = I, c(x, V), q = x.next_out, et = x.output, J = x.avail_out, O = x.next_in, L = x.input, j = x.avail_in, T = u.hold, I = u.bits, u.mode === 12 && (u.back = -1);
                    break;
                  }
                  for (u.back = 0; ot = (g = u.lencode[T & (1 << u.lenbits) - 1]) >>> 16 & 255, ft = 65535 & g, !((nt = g >>> 24) <= I); ) {
                    if (j === 0)
                      break t;
                    j--, T += L[O++] << I, I += 8;
                  }
                  if (ot && !(240 & ot)) {
                    for (ut = nt, gt = ot, mt = ft; ot = (g = u.lencode[mt + ((T & (1 << ut + gt) - 1) >> ut)]) >>> 16 & 255, ft = 65535 & g, !(ut + (nt = g >>> 24) <= I); ) {
                      if (j === 0)
                        break t;
                      j--, T += L[O++] << I, I += 8;
                    }
                    T >>>= ut, I -= ut, u.back += ut;
                  }
                  if (T >>>= nt, I -= nt, u.back += nt, u.length = ft, ot === 0) {
                    u.mode = 26;
                    break;
                  }
                  if (32 & ot) {
                    u.back = -1, u.mode = 12;
                    break;
                  }
                  if (64 & ot) {
                    x.msg = "invalid literal/length code", u.mode = 30;
                    break;
                  }
                  u.extra = 15 & ot, u.mode = 22;
                case 22:
                  if (u.extra) {
                    for (w = u.extra; I < w; ) {
                      if (j === 0)
                        break t;
                      j--, T += L[O++] << I, I += 8;
                    }
                    u.length += T & (1 << u.extra) - 1, T >>>= u.extra, I -= u.extra, u.back += u.extra;
                  }
                  u.was = u.length, u.mode = 23;
                case 23:
                  for (; ot = (g = u.distcode[T & (1 << u.distbits) - 1]) >>> 16 & 255, ft = 65535 & g, !((nt = g >>> 24) <= I); ) {
                    if (j === 0)
                      break t;
                    j--, T += L[O++] << I, I += 8;
                  }
                  if (!(240 & ot)) {
                    for (ut = nt, gt = ot, mt = ft; ot = (g = u.distcode[mt + ((T & (1 << ut + gt) - 1) >> ut)]) >>> 16 & 255, ft = 65535 & g, !(ut + (nt = g >>> 24) <= I); ) {
                      if (j === 0)
                        break t;
                      j--, T += L[O++] << I, I += 8;
                    }
                    T >>>= ut, I -= ut, u.back += ut;
                  }
                  if (T >>>= nt, I -= nt, u.back += nt, 64 & ot) {
                    x.msg = "invalid distance code", u.mode = 30;
                    break;
                  }
                  u.offset = ft, u.extra = 15 & ot, u.mode = 24;
                case 24:
                  if (u.extra) {
                    for (w = u.extra; I < w; ) {
                      if (j === 0)
                        break t;
                      j--, T += L[O++] << I, I += 8;
                    }
                    u.offset += T & (1 << u.extra) - 1, T >>>= u.extra, I -= u.extra, u.back += u.extra;
                  }
                  if (u.offset > u.dmax) {
                    x.msg = "invalid distance too far back", u.mode = 30;
                    break;
                  }
                  u.mode = 25;
                case 25:
                  if (J === 0)
                    break t;
                  if (G = V - J, u.offset > G) {
                    if ((G = u.offset - G) > u.whave && u.sane) {
                      x.msg = "invalid distance too far back", u.mode = 30;
                      break;
                    }
                    at = G > u.wnext ? (G -= u.wnext, u.wsize - G) : u.wnext - G, G > u.length && (G = u.length), lt = u.window;
                  } else
                    lt = et, at = q - u.offset, G = u.length;
                  for (J < G && (G = J), J -= G, u.length -= G; et[q++] = lt[at++], --G; )
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
                      j--, T |= L[O++] << I, I += 8;
                    }
                    if (V -= J, x.total_out += V, u.total += V, V && (x.adler = u.check = u.flags ? o(u.check, et, V, q - V) : a(u.check, et, V, q - V)), V = J, (u.flags ? T : _(T)) !== u.check) {
                      x.msg = "incorrect data check", u.mode = 30;
                      break;
                    }
                    I = T = 0;
                  }
                  u.mode = 28;
                case 28:
                  if (u.wrap && u.flags) {
                    for (; I < 32; ) {
                      if (j === 0)
                        break t;
                      j--, T += L[O++] << I, I += 8;
                    }
                    if (T !== (4294967295 & u.total)) {
                      x.msg = "incorrect length check", u.mode = 30;
                      break;
                    }
                    I = T = 0;
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
          return x.next_out = q, x.avail_out = J, x.next_in = O, x.avail_in = j, u.hold = T, u.bits = I, (u.wsize || V !== x.avail_out && u.mode < 30 && (u.mode < 27 || P !== 4)) && X(x, x.output, x.next_out, V - x.avail_out) ? (u.mode = 31, -4) : (Q -= x.avail_in, V -= x.avail_out, x.total_in += Q, x.total_out += V, u.total += V, u.wrap && V && (x.adler = u.check = u.flags ? o(u.check, et, V, x.next_out - V) : a(u.check, et, V, x.next_out - V)), x.data_type = u.bits + (u.last ? 64 : 0) + (u.mode === 12 ? 128 : 0) + (u.mode === 20 || u.mode === 15 ? 256 : 0), (Q == 0 && V === 0 || P === 4) && F === k && (F = -5), F);
        }, l.inflateEnd = function(x) {
          if (!x || !x.state)
            return h;
          var P = x.state;
          return P.window && (P.window = null), x.state = null, k;
        }, l.inflateGetHeader = function(x, P) {
          var u;
          return x && x.state && 2 & (u = x.state).wrap ? ((u.head = P).done = !1, k) : h;
        }, l.inflateSetDictionary = function(x, P) {
          var u, L = P.length;
          return x && x.state ? (u = x.state).wrap !== 0 && u.mode !== 11 ? h : u.mode === 11 && a(1, P, L, 0) !== u.check ? -3 : X(x, P, L, L) ? (u.mode = 31, -4) : (u.havedict = 1, k) : h;
        }, l.inflateInfo = "pako inflate (from Nodeca project)";
      }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, s, l) {
        var n = e("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], o = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], c = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], p = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        s.exports = function(b, d, k, h, y, f, m, _) {
          var v, A, S, E, R, D, Z, B, W, X = _.bits, x = 0, P = 0, u = 0, L = 0, et = 0, O = 0, q = 0, j = 0, J = 0, T = 0, I = null, Q = 0, V = new n.Buf16(16), G = new n.Buf16(16), at = null, lt = 0;
          for (x = 0; x <= 15; x++)
            V[x] = 0;
          for (P = 0; P < h; P++)
            V[d[k + P]]++;
          for (et = X, L = 15; 1 <= L && V[L] === 0; L--)
            ;
          if (L < et && (et = L), L === 0)
            return y[f++] = 20971520, y[f++] = 20971520, _.bits = 1, 0;
          for (u = 1; u < L && V[u] === 0; u++)
            ;
          for (et < u && (et = u), x = j = 1; x <= 15; x++)
            if (j <<= 1, (j -= V[x]) < 0)
              return -1;
          if (0 < j && (b === 0 || L !== 1))
            return -1;
          for (G[1] = 0, x = 1; x < 15; x++)
            G[x + 1] = G[x] + V[x];
          for (P = 0; P < h; P++)
            d[k + P] !== 0 && (m[G[d[k + P]]++] = P);
          if (D = b === 0 ? (I = at = m, 19) : b === 1 ? (I = a, Q -= 257, at = o, lt -= 257, 256) : (I = c, at = p, -1), x = u, R = f, q = P = T = 0, S = -1, E = (J = 1 << (O = et)) - 1, b === 1 && 852 < J || b === 2 && 592 < J)
            return 1;
          for (; ; ) {
            for (Z = x - q, W = m[P] < D ? (B = 0, m[P]) : m[P] > D ? (B = at[lt + m[P]], I[Q + m[P]]) : (B = 96, 0), v = 1 << x - q, u = A = 1 << O; y[R + (T >> q) + (A -= v)] = Z << 24 | B << 16 | W | 0, A !== 0; )
              ;
            for (v = 1 << x - 1; T & v; )
              v >>= 1;
            if (v !== 0 ? (T &= v - 1, T += v) : T = 0, P++, --V[x] == 0) {
              if (x === L)
                break;
              x = d[k + m[P]];
            }
            if (et < x && (T & E) !== S) {
              for (q === 0 && (q = et), R += u, j = 1 << (O = x - q); O + q < L && !((j -= V[O + q]) <= 0); )
                O++, j <<= 1;
              if (J += 1 << O, b === 1 && 852 < J || b === 2 && 592 < J)
                return 1;
              y[S = T & E] = et << 24 | O << 16 | R - f | 0;
            }
          }
          return T !== 0 && (y[R + T] = x - q << 24 | 64 << 16 | 0), _.bits = et, 0;
        };
      }, { "../utils/common": 41 }], 51: [function(e, s, l) {
        s.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, {}], 52: [function(e, s, l) {
        var n = e("../utils/common"), a = 0, o = 1;
        function c(g) {
          for (var C = g.length; 0 <= --C; )
            g[C] = 0;
        }
        var p = 0, b = 29, d = 256, k = d + 1 + b, h = 30, y = 19, f = 2 * k + 1, m = 15, _ = 16, v = 7, A = 256, S = 16, E = 17, R = 18, D = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], Z = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], B = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], W = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], X = new Array(2 * (k + 2));
        c(X);
        var x = new Array(2 * h);
        c(x);
        var P = new Array(512);
        c(P);
        var u = new Array(256);
        c(u);
        var L = new Array(b);
        c(L);
        var et, O, q, j = new Array(h);
        function J(g, C, U, M, z) {
          this.static_tree = g, this.extra_bits = C, this.extra_base = U, this.elems = M, this.max_length = z, this.has_stree = g && g.length;
        }
        function T(g, C) {
          this.dyn_tree = g, this.max_code = 0, this.stat_desc = C;
        }
        function I(g) {
          return g < 256 ? P[g] : P[256 + (g >>> 7)];
        }
        function Q(g, C) {
          g.pending_buf[g.pending++] = 255 & C, g.pending_buf[g.pending++] = C >>> 8 & 255;
        }
        function V(g, C, U) {
          g.bi_valid > _ - U ? (g.bi_buf |= C << g.bi_valid & 65535, Q(g, g.bi_buf), g.bi_buf = C >> _ - g.bi_valid, g.bi_valid += U - _) : (g.bi_buf |= C << g.bi_valid & 65535, g.bi_valid += U);
        }
        function G(g, C, U) {
          V(g, U[2 * C], U[2 * C + 1]);
        }
        function at(g, C) {
          for (var U = 0; U |= 1 & g, g >>>= 1, U <<= 1, 0 < --C; )
            ;
          return U >>> 1;
        }
        function lt(g, C, U) {
          var M, z, $ = new Array(m + 1), Y = 0;
          for (M = 1; M <= m; M++)
            $[M] = Y = Y + U[M - 1] << 1;
          for (z = 0; z <= C; z++) {
            var H = g[2 * z + 1];
            H !== 0 && (g[2 * z] = at($[H]++, H));
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
        function ot(g) {
          8 < g.bi_valid ? Q(g, g.bi_buf) : 0 < g.bi_valid && (g.pending_buf[g.pending++] = g.bi_buf), g.bi_buf = 0, g.bi_valid = 0;
        }
        function ft(g, C, U, M) {
          var z = 2 * C, $ = 2 * U;
          return g[z] < g[$] || g[z] === g[$] && M[C] <= M[U];
        }
        function ut(g, C, U) {
          for (var M = g.heap[U], z = U << 1; z <= g.heap_len && (z < g.heap_len && ft(C, g.heap[z + 1], g.heap[z], g.depth) && z++, !ft(C, M, g.heap[z], g.depth)); )
            g.heap[U] = g.heap[z], U = z, z <<= 1;
          g.heap[U] = M;
        }
        function gt(g, C, U) {
          var M, z, $, Y, H = 0;
          if (g.last_lit !== 0)
            for (; M = g.pending_buf[g.d_buf + 2 * H] << 8 | g.pending_buf[g.d_buf + 2 * H + 1], z = g.pending_buf[g.l_buf + H], H++, M === 0 ? G(g, z, C) : (G(g, ($ = u[z]) + d + 1, C), (Y = D[$]) !== 0 && V(g, z -= L[$], Y), G(g, $ = I(--M), U), (Y = Z[$]) !== 0 && V(g, M -= j[$], Y)), H < g.last_lit; )
              ;
          G(g, A, C);
        }
        function mt(g, C) {
          var U, M, z, $ = C.dyn_tree, Y = C.stat_desc.static_tree, H = C.stat_desc.has_stree, tt = C.stat_desc.elems, st = -1;
          for (g.heap_len = 0, g.heap_max = f, U = 0; U < tt; U++)
            $[2 * U] !== 0 ? (g.heap[++g.heap_len] = st = U, g.depth[U] = 0) : $[2 * U + 1] = 0;
          for (; g.heap_len < 2; )
            $[2 * (z = g.heap[++g.heap_len] = st < 2 ? ++st : 0)] = 1, g.depth[z] = 0, g.opt_len--, H && (g.static_len -= Y[2 * z + 1]);
          for (C.max_code = st, U = g.heap_len >> 1; 1 <= U; U--)
            ut(g, $, U);
          for (z = tt; U = g.heap[1], g.heap[1] = g.heap[g.heap_len--], ut(g, $, 1), M = g.heap[1], g.heap[--g.heap_max] = U, g.heap[--g.heap_max] = M, $[2 * z] = $[2 * U] + $[2 * M], g.depth[z] = (g.depth[U] >= g.depth[M] ? g.depth[U] : g.depth[M]) + 1, $[2 * U + 1] = $[2 * M + 1] = z, g.heap[1] = z++, ut(g, $, 1), 2 <= g.heap_len; )
            ;
          g.heap[--g.heap_max] = g.heap[1], function(it, _t) {
            var zt, vt, It, ct, Gt, pe, kt = _t.dyn_tree, vr = _t.max_code, jn = _t.stat_desc.static_tree, Mn = _t.stat_desc.has_stree, Zn = _t.stat_desc.extra_bits, br = _t.stat_desc.extra_base, Tt = _t.stat_desc.max_length, Kt = 0;
            for (ct = 0; ct <= m; ct++)
              it.bl_count[ct] = 0;
            for (kt[2 * it.heap[it.heap_max] + 1] = 0, zt = it.heap_max + 1; zt < f; zt++)
              Tt < (ct = kt[2 * kt[2 * (vt = it.heap[zt]) + 1] + 1] + 1) && (ct = Tt, Kt++), kt[2 * vt + 1] = ct, vr < vt || (it.bl_count[ct]++, Gt = 0, br <= vt && (Gt = Zn[vt - br]), pe = kt[2 * vt], it.opt_len += pe * (ct + Gt), Mn && (it.static_len += pe * (jn[2 * vt + 1] + Gt)));
            if (Kt !== 0) {
              do {
                for (ct = Tt - 1; it.bl_count[ct] === 0; )
                  ct--;
                it.bl_count[ct]--, it.bl_count[ct + 1] += 2, it.bl_count[Tt]--, Kt -= 2;
              } while (0 < Kt);
              for (ct = Tt; ct !== 0; ct--)
                for (vt = it.bl_count[ct]; vt !== 0; )
                  vr < (It = it.heap[--zt]) || (kt[2 * It + 1] !== ct && (it.opt_len += (ct - kt[2 * It + 1]) * kt[2 * It], kt[2 * It + 1] = ct), vt--);
            }
          }(g, C), lt($, st, g.bl_count);
        }
        function i(g, C, U) {
          var M, z, $ = -1, Y = C[1], H = 0, tt = 7, st = 4;
          for (Y === 0 && (tt = 138, st = 3), C[2 * (U + 1) + 1] = 65535, M = 0; M <= U; M++)
            z = Y, Y = C[2 * (M + 1) + 1], ++H < tt && z === Y || (H < st ? g.bl_tree[2 * z] += H : z !== 0 ? (z !== $ && g.bl_tree[2 * z]++, g.bl_tree[2 * S]++) : H <= 10 ? g.bl_tree[2 * E]++ : g.bl_tree[2 * R]++, $ = z, st = (H = 0) === Y ? (tt = 138, 3) : z === Y ? (tt = 6, 3) : (tt = 7, 4));
        }
        function F(g, C, U) {
          var M, z, $ = -1, Y = C[1], H = 0, tt = 7, st = 4;
          for (Y === 0 && (tt = 138, st = 3), M = 0; M <= U; M++)
            if (z = Y, Y = C[2 * (M + 1) + 1], !(++H < tt && z === Y)) {
              if (H < st)
                for (; G(g, z, g.bl_tree), --H != 0; )
                  ;
              else
                z !== 0 ? (z !== $ && (G(g, z, g.bl_tree), H--), G(g, S, g.bl_tree), V(g, H - 3, 2)) : H <= 10 ? (G(g, E, g.bl_tree), V(g, H - 3, 3)) : (G(g, R, g.bl_tree), V(g, H - 11, 7));
              $ = z, st = (H = 0) === Y ? (tt = 138, 3) : z === Y ? (tt = 6, 3) : (tt = 7, 4);
            }
        }
        c(j);
        var N = !1;
        function w(g, C, U, M) {
          V(g, (p << 1) + (M ? 1 : 0), 3), function(z, $, Y, H) {
            ot(z), H && (Q(z, Y), Q(z, ~Y)), n.arraySet(z.pending_buf, z.window, $, Y, z.pending), z.pending += Y;
          }(g, C, U, !0);
        }
        l._tr_init = function(g) {
          N || (function() {
            var C, U, M, z, $, Y = new Array(m + 1);
            for (z = M = 0; z < b - 1; z++)
              for (L[z] = M, C = 0; C < 1 << D[z]; C++)
                u[M++] = z;
            for (u[M - 1] = z, z = $ = 0; z < 16; z++)
              for (j[z] = $, C = 0; C < 1 << Z[z]; C++)
                P[$++] = z;
            for ($ >>= 7; z < h; z++)
              for (j[z] = $ << 7, C = 0; C < 1 << Z[z] - 7; C++)
                P[256 + $++] = z;
            for (U = 0; U <= m; U++)
              Y[U] = 0;
            for (C = 0; C <= 143; )
              X[2 * C + 1] = 8, C++, Y[8]++;
            for (; C <= 255; )
              X[2 * C + 1] = 9, C++, Y[9]++;
            for (; C <= 279; )
              X[2 * C + 1] = 7, C++, Y[7]++;
            for (; C <= 287; )
              X[2 * C + 1] = 8, C++, Y[8]++;
            for (lt(X, k + 1, Y), C = 0; C < h; C++)
              x[2 * C + 1] = 5, x[2 * C] = at(C, 5);
            et = new J(X, D, d + 1, k, m), O = new J(x, Z, 0, h, m), q = new J(new Array(0), B, 0, y, v);
          }(), N = !0), g.l_desc = new T(g.dyn_ltree, et), g.d_desc = new T(g.dyn_dtree, O), g.bl_desc = new T(g.bl_tree, q), g.bi_buf = 0, g.bi_valid = 0, nt(g);
        }, l._tr_stored_block = w, l._tr_flush_block = function(g, C, U, M) {
          var z, $, Y = 0;
          0 < g.level ? (g.strm.data_type === 2 && (g.strm.data_type = function(H) {
            var tt, st = 4093624447;
            for (tt = 0; tt <= 31; tt++, st >>>= 1)
              if (1 & st && H.dyn_ltree[2 * tt] !== 0)
                return a;
            if (H.dyn_ltree[18] !== 0 || H.dyn_ltree[20] !== 0 || H.dyn_ltree[26] !== 0)
              return o;
            for (tt = 32; tt < d; tt++)
              if (H.dyn_ltree[2 * tt] !== 0)
                return o;
            return a;
          }(g)), mt(g, g.l_desc), mt(g, g.d_desc), Y = function(H) {
            var tt;
            for (i(H, H.dyn_ltree, H.l_desc.max_code), i(H, H.dyn_dtree, H.d_desc.max_code), mt(H, H.bl_desc), tt = y - 1; 3 <= tt && H.bl_tree[2 * W[tt] + 1] === 0; tt--)
              ;
            return H.opt_len += 3 * (tt + 1) + 5 + 5 + 4, tt;
          }(g), z = g.opt_len + 3 + 7 >>> 3, ($ = g.static_len + 3 + 7 >>> 3) <= z && (z = $)) : z = $ = U + 5, U + 4 <= z && C !== -1 ? w(g, C, U, M) : g.strategy === 4 || $ === z ? (V(g, 2 + (M ? 1 : 0), 3), gt(g, X, x)) : (V(g, 4 + (M ? 1 : 0), 3), function(H, tt, st, it) {
            var _t;
            for (V(H, tt - 257, 5), V(H, st - 1, 5), V(H, it - 4, 4), _t = 0; _t < it; _t++)
              V(H, H.bl_tree[2 * W[_t] + 1], 3);
            F(H, H.dyn_ltree, tt - 1), F(H, H.dyn_dtree, st - 1);
          }(g, g.l_desc.max_code + 1, g.d_desc.max_code + 1, Y + 1), gt(g, g.dyn_ltree, g.dyn_dtree)), nt(g), M && ot(g);
        }, l._tr_tally = function(g, C, U) {
          return g.pending_buf[g.d_buf + 2 * g.last_lit] = C >>> 8 & 255, g.pending_buf[g.d_buf + 2 * g.last_lit + 1] = 255 & C, g.pending_buf[g.l_buf + g.last_lit] = 255 & U, g.last_lit++, C === 0 ? g.dyn_ltree[2 * U]++ : (g.matches++, C--, g.dyn_ltree[2 * (u[U] + d + 1)]++, g.dyn_dtree[2 * I(C)]++), g.last_lit === g.lit_bufsize - 1;
        }, l._tr_align = function(g) {
          V(g, 2, 3), G(g, A, X), function(C) {
            C.bi_valid === 16 ? (Q(C, C.bi_buf), C.bi_buf = 0, C.bi_valid = 0) : 8 <= C.bi_valid && (C.pending_buf[C.pending++] = 255 & C.bi_buf, C.bi_buf >>= 8, C.bi_valid -= 8);
          }(g);
        };
      }, { "../utils/common": 41 }], 53: [function(e, s, l) {
        s.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, {}], 54: [function(e, s, l) {
        (function(n) {
          (function(a, o) {
            if (!a.setImmediate) {
              var c, p, b, d, k = 1, h = {}, y = !1, f = a.document, m = Object.getPrototypeOf && Object.getPrototypeOf(a);
              m = m && m.setTimeout ? m : a, c = {}.toString.call(a.process) === "[object process]" ? function(S) {
                process.nextTick(function() {
                  v(S);
                });
              } : function() {
                if (a.postMessage && !a.importScripts) {
                  var S = !0, E = a.onmessage;
                  return a.onmessage = function() {
                    S = !1;
                  }, a.postMessage("", "*"), a.onmessage = E, S;
                }
              }() ? (d = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", A, !1) : a.attachEvent("onmessage", A), function(S) {
                a.postMessage(d + S, "*");
              }) : a.MessageChannel ? ((b = new MessageChannel()).port1.onmessage = function(S) {
                v(S.data);
              }, function(S) {
                b.port2.postMessage(S);
              }) : f && "onreadystatechange" in f.createElement("script") ? (p = f.documentElement, function(S) {
                var E = f.createElement("script");
                E.onreadystatechange = function() {
                  v(S), E.onreadystatechange = null, p.removeChild(E), E = null;
                }, p.appendChild(E);
              }) : function(S) {
                setTimeout(v, 0, S);
              }, m.setImmediate = function(S) {
                typeof S != "function" && (S = new Function("" + S));
                for (var E = new Array(arguments.length - 1), R = 0; R < E.length; R++)
                  E[R] = arguments[R + 1];
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
                    (function(R) {
                      var D = R.callback, Z = R.args;
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
                          D.apply(o, Z);
                      }
                    })(E);
                  } finally {
                    _(S), y = !1;
                  }
                }
              }
            }
            function A(S) {
              S.source === a && typeof S.data == "string" && S.data.indexOf(d) === 0 && v(+S.data.slice(d.length));
            }
          })(typeof self > "u" ? n === void 0 ? this : n : self);
        }).call(this, typeof Mt < "u" ? Mt : typeof self < "u" ? self : typeof window < "u" ? window : {});
      }, {}] }, {}, [10])(10);
    });
  })(tr);
  var Kr = tr.exports;
  const Vr = /* @__PURE__ */ Gr(Kr);
  function Yr(t) {
    for (var r = 1; r < arguments.length; r++) {
      var e = arguments[r];
      for (var s in e)
        e.hasOwnProperty(s) && (t[s] = e[s]);
    }
    return t;
  }
  function ae(t, r) {
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
  var Xr = [
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
  function se(t) {
    return le(t, Xr);
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
  function or(t) {
    return le(t, ir);
  }
  function qr(t) {
    return sr(t, ir);
  }
  var ar = [
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
    return le(t, ar);
  }
  function Qr(t) {
    return sr(t, ar);
  }
  function le(t, r) {
    return r.indexOf(t.nodeName) >= 0;
  }
  function sr(t, r) {
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
      var s = Number(r.nodeName.charAt(1));
      if (e.headingStyle === "setext" && s < 3) {
        var l = ae(s === 1 ? "=" : "-", t.length);
        return `

` + t + `
` + l + `

`;
      } else
        return `

` + ae("#", s) + " " + t + `

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
      var s = e.bulletListMarker + "   ", l = r.parentNode;
      if (l.nodeName === "OL") {
        var n = l.getAttribute("start"), a = Array.prototype.indexOf.call(l.children, r);
        s = (n ? Number(n) + a : a + 1) + ".  ";
      }
      var o = /\n$/.test(t);
      return t = nr(t) + (o ? `
` : ""), t = t.replace(/\n/gm, `
` + " ".repeat(s.length)), s + t + (r.nextSibling ? `
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
      for (var s = r.firstChild.getAttribute("class") || "", l = (s.match(/language-(\S+)/) || [null, ""])[1], n = r.firstChild.textContent, a = e.fence.charAt(0), o = 3, c = new RegExp("^" + a + "{3,}", "gm"), p; p = c.exec(n); )
        p[0].length >= o && (o = p[0].length + 1);
      var b = ae(a, o);
      return `

` + b + l + `
` + n.replace(/\n$/, "") + `
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
      var s = Wt(r.getAttribute("title"));
      return s && (s = ' "' + s.replace(/"/g, '\\"') + '"'), "[" + t + "](" + e + s + ")";
    }
  }, pt.referenceLink = {
    filter: function(t, r) {
      return r.linkStyle === "referenced" && t.nodeName === "A" && t.getAttribute("href");
    },
    replacement: function(t, r, e) {
      var s = r.getAttribute("href"), l = Wt(r.getAttribute("title"));
      l && (l = ' "' + l + '"');
      var n, a;
      switch (e.linkReferenceStyle) {
        case "collapsed":
          n = "[" + t + "][]", a = "[" + t + "]: " + s + l;
          break;
        case "shortcut":
          n = "[" + t + "]", a = "[" + t + "]: " + s + l;
          break;
        default:
          var o = this.references.length + 1;
          n = "[" + t + "][" + o + "]", a = "[" + o + "]: " + s + l;
      }
      return this.references.push(a), n;
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
      for (var r = /^`|^ .*?[^ ].* $|`$/.test(t) ? " " : "", e = "`", s = t.match(/`+/gm) || []; s.indexOf(e) !== -1; )
        e = e + "`";
      return e + r + t + r + e;
    }
  }, pt.image = {
    filter: "img",
    replacement: function(t, r) {
      var e = Wt(r.getAttribute("alt")), s = r.getAttribute("src") || "", l = Wt(r.getAttribute("title")), n = l ? ' "' + l + '"' : "";
      return s ? "![" + e + "](" + s + n + ")" : "";
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
      return (r = ue(this.array, t, this.options)) || (r = ue(this._keep, t, this.options)) || (r = ue(this._remove, t, this.options)) ? r : this.defaultRule;
    },
    forEach: function(t) {
      for (var r = 0; r < this.array.length; r++)
        t(this.array[r], r);
    }
  };
  function ue(t, r, e) {
    for (var s = 0; s < t.length; s++) {
      var l = t[s];
      if (tn(l, r, e))
        return l;
    }
  }
  function tn(t, r, e) {
    var s = t.filter;
    if (typeof s == "string") {
      if (s === r.nodeName.toLowerCase())
        return !0;
    } else if (Array.isArray(s)) {
      if (s.indexOf(r.nodeName.toLowerCase()) > -1)
        return !0;
    } else if (typeof s == "function") {
      if (s.call(t, r, e))
        return !0;
    } else
      throw new TypeError("`filter` needs to be a string, array, or function");
  }
  function en(t) {
    var r = t.element, e = t.isBlock, s = t.isVoid, l = t.isPre || function(d) {
      return d.nodeName === "PRE";
    };
    if (!(!r.firstChild || l(r))) {
      for (var n = null, a = !1, o = null, c = ur(o, r, l); c !== r; ) {
        if (c.nodeType === 3 || c.nodeType === 4) {
          var p = c.data.replace(/[ \r\n\t]+/g, " ");
          if ((!n || / $/.test(n.data)) && !a && p[0] === " " && (p = p.substr(1)), !p) {
            c = ce(c);
            continue;
          }
          c.data = p, n = c;
        } else if (c.nodeType === 1)
          e(c) || c.nodeName === "BR" ? (n && (n.data = n.data.replace(/ $/, "")), n = null, a = !1) : s(c) || l(c) ? (n = null, a = !0) : n && (a = !1);
        else {
          c = ce(c);
          continue;
        }
        var b = ur(o, c, l);
        o = c, c = b;
      }
      n && (n.data = n.data.replace(/ $/, ""), n.data || ce(n));
    }
  }
  function ce(t) {
    var r = t.nextSibling || t.parentNode;
    return t.parentNode.removeChild(t), r;
  }
  function ur(t, r, e) {
    return t && t.parentNode === r || e(r) ? r.nextSibling || r.parentNode : r.firstChild || r.nextSibling || r.parentNode;
  }
  var he = typeof window < "u" ? window : {};
  function rn() {
    var t = he.DOMParser, r = !1;
    try {
      new t().parseFromString("", "text/html") && (r = !0);
    } catch {
    }
    return r;
  }
  function nn() {
    var t = function() {
    };
    return on() ? t.prototype.parseFromString = function(r) {
      var e = new window.ActiveXObject("htmlfile");
      return e.designMode = "on", e.open(), e.write(r), e.close(), e;
    } : t.prototype.parseFromString = function(r) {
      var e = document.implementation.createHTMLDocument("");
      return e.open(), e.write(r), e.close(), e;
    }, t;
  }
  function on() {
    var t = !1;
    try {
      document.implementation.createHTMLDocument("").open();
    } catch {
      he.ActiveXObject && (t = !0);
    }
    return t;
  }
  var an = rn() ? he.DOMParser : nn();
  function sn(t, r) {
    var e;
    if (typeof t == "string") {
      var s = ln().parseFromString(
        // DOM parsers arrange elements in the <head> and <body>.
        // Wrapping in a custom element ensures elements are reliably arranged in
        // a single element.
        '<x-turndown id="turndown-root">' + t + "</x-turndown>",
        "text/html"
      );
      e = s.getElementById("turndown-root");
    } else
      e = t.cloneNode(!0);
    return en({
      element: e,
      isBlock: se,
      isVoid: or,
      isPre: r.preformattedCode ? un : null
    }), e;
  }
  var de;
  function ln() {
    return de = de || new an(), de;
  }
  function un(t) {
    return t.nodeName === "PRE" || t.nodeName === "CODE";
  }
  function cn(t, r) {
    return t.isBlock = se(t), t.isCode = t.nodeName === "CODE" || t.parentNode.isCode, t.isBlank = hn(t), t.flankingWhitespace = dn(t, r), t;
  }
  function hn(t) {
    return !or(t) && !Jr(t) && /^\s*$/i.test(t.textContent) && !qr(t) && !Qr(t);
  }
  function dn(t, r) {
    if (t.isBlock || r.preformattedCode && t.isCode)
      return { leading: "", trailing: "" };
    var e = fn(t.textContent);
    return e.leadingAscii && cr("left", t, r) && (e.leading = e.leadingNonAscii), e.trailingAscii && cr("right", t, r) && (e.trailing = e.trailingNonAscii), { leading: e.leading, trailing: e.trailing };
  }
  function fn(t) {
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
    var s, l, n;
    return t === "left" ? (s = r.previousSibling, l = / $/) : (s = r.nextSibling, l = /^ /), s && (s.nodeType === 3 ? n = l.test(s.nodeValue) : e.preformattedCode && s.nodeName === "CODE" ? n = !1 : s.nodeType === 1 && !se(s) && (n = l.test(s.textContent))), n;
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
      blankReplacement: function(e, s) {
        return s.isBlock ? `

` : "";
      },
      keepReplacement: function(e, s) {
        return s.isBlock ? `

` + s.outerHTML + `

` : s.outerHTML;
      },
      defaultReplacement: function(e, s) {
        return s.isBlock ? `

` + e + `

` : e;
      }
    };
    this.options = Yr({}, r, t), this.rules = new lr(this.options);
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
      var r = hr.call(this, new sn(t, this.options));
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
    return pn.call(t.childNodes, function(e, s) {
      s = new cn(s, r.options);
      var l = "";
      return s.nodeType === 3 ? l = s.isCode ? s.nodeValue : r.escape(s.nodeValue) : s.nodeType === 1 && (l = gn.call(r, s)), dr(e, l);
    }, "");
  }
  function mn(t) {
    var r = this;
    return this.rules.forEach(function(e) {
      typeof e.append == "function" && (t = dr(t, e.append(r.options)));
    }), t.replace(/^[\t\r\n]+/, "").replace(/[\t\r\n\s]+$/, "");
  }
  function gn(t) {
    var r = this.rules.forNode(t), e = hr.call(this, t), s = t.flankingWhitespace;
    return (s.leading || s.trailing) && (e = e.trim()), s.leading + r.replacement(e, t, this.options) + s.trailing;
  }
  function dr(t, r) {
    var e = rr(t), s = er(r), l = Math.max(t.length - e.length, r.length - s.length), n = `

`.substring(0, l);
    return e + n + s;
  }
  function vn(t) {
    return t != null && (typeof t == "string" || t.nodeType && (t.nodeType === 1 || t.nodeType === 9 || t.nodeType === 11));
  }
  const fe = new $t({
    headingStyle: "atx",
    bulletListMarker: "-",
    codeBlockStyle: "fenced",
    emDelimiter: "*"
  });
  fe.keep(["span", "div"]), fe.addRule("strikethrough", {
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
    const e = await t.arrayBuffer(), s = await Vr.loadAsync(e), l = Object.values(s.files).filter((p) => {
      if (p.dir)
        return !1;
      const b = p.name.toLowerCase();
      return !(!b.endsWith(".json") || b.endsWith("labels.json") || b.includes("metadata"));
    });
    if (!l.length)
      throw new Error("Es wurden keine Google Keep JSON-Dateien gefunden.");
    const n = [], a = [], o = l.length;
    for (let p = 0; p < l.length; p++) {
      const b = l[p];
      try {
        const d = await b.async("string"), k = JSON.parse(d);
        if (k.isTrashed) {
          a.push({ file: b.name, type: "trashed" });
          continue;
        }
        const h = await yn(k, b.name, s);
        if (!h) {
          a.push({ file: b.name, type: "empty" });
          continue;
        }
        n.push({
          ...h,
          sortKey: h.createdAt ? Date.parse(h.createdAt) : Number.MAX_SAFE_INTEGER
        });
      } catch (d) {
        a.push({
          file: b.name,
          type: "error",
          detail: d instanceof Error ? d.message : "Unknown parsing error"
        });
      } finally {
        r == null || r(p + 1, o);
      }
    }
    return { notes: n.sort((p, b) => p.sortKey - b.sortKey).map(({ sortKey: p, ...b }) => b), skipped: a };
  }
  async function yn(t, r, e) {
    const s = [], l = fr(t.textContent);
    l && s.push(l);
    const n = wn(t.listContent);
    n && s.push(n);
    const a = kn(t.annotations);
    a && s.push(a);
    const o = await xn(t.attachments, e);
    if (o && s.push(o), !s.length)
      return null;
    const c = Sn(t, r);
    c.block && s.push(c.block);
    const p = An(t.labels);
    return {
      title: Cn(t, r),
      content: s.join(`

`).trim(),
      tags: p,
      keepLabels: p,
      sourceFile: r,
      createdAt: c.createdAt,
      updatedAt: c.updatedAt
    };
  }
  function fr(t) {
    if (!t)
      return "";
    const r = t.replace(/\u003c/g, "<").trim();
    return r ? /<[^>]+>/.test(r) ? fe.turndown(r) : r : "";
  }
  function wn(t) {
    if (!(t != null && t.length))
      return "";
    const r = t.map((e) => {
      var n;
      const s = (n = e.text) == null ? void 0 : n.trim();
      return s ? `- [${e.checked ?? e.isChecked ?? !1 ? "x" : " "}] ${s}` : null;
    }).filter(Boolean);
    return r.length ? `## Checkliste
${r.join(`
`)}` : "";
  }
  function kn(t) {
    if (!(t != null && t.length))
      return "";
    const r = t.map((e) => {
      var s;
      return (s = e.description) == null ? void 0 : s.trim();
    }).filter(Boolean);
    return r.length ? `## Annotationen
${r.map((e) => `- ${e}`).join(`
`)}` : "";
  }
  async function xn(t, r) {
    if (!(t != null && t.length) || !r)
      return "";
    const e = [];
    for (const s of t) {
      const l = zn(r, s);
      if (!l)
        continue;
      const n = typeof s == "string" ? void 0 : s, a = Tn(s, l.name), o = (n == null ? void 0 : n.mimeType) || (n == null ? void 0 : n.mimetype) || Nn(a), c = await l.async("base64"), p = `data:${o};base64,${c}`, b = o.startsWith("image/");
      e.push(b ? `![${a}](${p})` : `[${a}](${p})`);
    }
    return e.length ? `## Anhänge
${e.join(`
`)}` : "";
  }
  function Sn(t, r) {
    const e = _r(
      t.createdTimestampUsec || t.createdTime || t.created
    ), s = _r(
      t.userEditedTimestampUsec || t.updatedTimestampUsec || t.updatedTime || t.updated
    ), l = [];
    return l.push("---"), l.push(`> Imported from Google Keep (${pr(r)})`), e && l.push(`> Created: ${mr(e)}`), s && l.push(`> Updated: ${mr(s)}`), {
      block: l.join(`
`),
      createdAt: e,
      updatedAt: s
    };
  }
  function An(t) {
    return t != null && t.length ? t.map((r) => typeof r == "string" ? r : (r == null ? void 0 : r.name) ?? "").map((r) => r.trim()).filter(Boolean) : [];
  }
  function Cn(t, r) {
    var s;
    if ((s = t.title) != null && s.trim())
      return t.title.trim();
    const e = fr(t.textContent) || "";
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
      const s = t.length > 13 ? Math.floor(e / 1e3) : e;
      return new Date(s).toISOString();
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
    ), s = /* @__PURE__ */ new Set();
    e && (s.add(e), s.add(`Takeout/${e}`), s.add(`Takeout/Keep/${e}`), s.add(`Keep/${e}`));
    const l = e == null ? void 0 : e.split("/").pop();
    l && (s.add(l), s.add(`Takeout/Keep/${l}`), s.add(`Keep/${l}`));
    for (const n of s) {
      const a = t.file(n);
      if (a)
        return a;
    }
    if (l) {
      const n = Object.values(t.files).find((a) => a.name.endsWith(`/${l}`));
      if (n)
        return n;
    }
    return null;
  }
  function In(t) {
    if (t)
      return t.replace(/^\.\//, "").replace(/\\/g, "/");
  }
  function Tn(t, r) {
    var e;
    return typeof t == "string" ? t.split("/").pop() || t : t.fileName || t.originalFileName || ((e = t.filePath) == null ? void 0 : e.split("/").pop()) || r.split("/").pop() || "attachment";
  }
  function Nn(t) {
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
    const [r, e] = wt(null), [s, l] = wt("idle"), [n, a] = wt(0), [o, c] = wt(null), [p, b] = wt([]), [d, k] = wt(null), [h, y] = wt(null), [f, m] = wt(""), [_, v] = wt(!1), A = zr(null), S = Rn(), E = Lt(() => {
      const O = (o == null ? void 0 : o.notes.length) ?? 0, q = (o == null ? void 0 : o.skipped.length) ?? 0, j = new Set((o == null ? void 0 : o.notes.flatMap((J) => J.tags)) ?? []);
      return { total: O, skipped: q, labels: j.size };
    }, [o]), R = Lt(() => {
      switch (s) {
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
    }, [s, S]), D = Lt(
      () => [
        S("dialog.instructions.export", 'Öffne takeout.google.com und wähle "Google Keep" aus.'),
        S("dialog.instructions.zip", 'Wähle beim Export "JSON" + "Medien" und exportiere als ZIP-Datei.'),
        S("dialog.instructions.import", "Ziehe die ZIP-Datei hierher oder wähle sie über den Button aus, um sie zu importieren.")
      ],
      [S]
    ), Z = !!(o != null && o.notes.length) && !["parsing", "importing"].includes(s), B = () => {
      l("idle"), e(null), c(null), a(0), b([]), k(null), y(null), m("");
    }, W = async (O) => {
      if (!O.name.toLowerCase().endsWith(".zip")) {
        k(S("dialog.errors.invalidFile", "Bitte eine ZIP-Datei auswählen.")), l("error");
        return;
      }
      e(O), l("parsing"), a(4), k(null), b([]);
      try {
        const q = await bn(O, (j, J) => {
          const T = J ? j / J : 0;
          a(Math.min(60, Math.max(10, Math.round(T * 60))));
        });
        if (c(q), y(/* @__PURE__ */ new Date()), !q.notes.length) {
          l("error"), k(S("dialog.errors.noNotes", "Keine importierbaren Notizen gefunden."));
          return;
        }
        l("ready"), a(70);
      } catch (q) {
        l("error"), k(q instanceof Error ? q.message : S("dialog.errors.generic", "Analyse fehlgeschlagen."));
      }
    }, X = async (O) => {
      var j;
      const q = (j = O.currentTarget.files) == null ? void 0 : j[0];
      q && (await W(q), O.currentTarget.value = "");
    }, x = async (O) => {
      var j, J;
      O.preventDefault(), v(!1);
      const q = (J = (j = O.dataTransfer) == null ? void 0 : j.files) == null ? void 0 : J[0];
      q && await W(q);
    }, P = (O) => {
      O.preventDefault(), v(!0);
    }, u = (O) => {
      O.preventDefault(), v(!1);
    }, L = async () => {
      var J, T, I, Q, V, G;
      if (!(o != null && o.notes.length))
        return;
      l("importing"), a(70), k(null), b([]);
      let O = 0, q = 0;
      const j = [];
      for (let at = 0; at < o.notes.length; at++) {
        const lt = o.notes[at];
        m(lt.title);
        try {
          await Pn(lt), O += 1, j.push({ title: lt.title, status: "success" });
        } catch (nt) {
          q += 1;
          const ot = nt instanceof Error ? nt.message : S("dialog.errors.generic", "Unbekannter Fehler.");
          j.push({ title: lt.title, status: "error", message: ot }), k(ot);
        } finally {
          const nt = (at + 1) / o.notes.length;
          a(70 + Math.round(nt * 30)), b([...j]);
        }
      }
      m(""), l("completed"), q ? (I = (T = (J = window.Blinko) == null ? void 0 : J.toast) == null ? void 0 : T.error) == null || I.call(
        T,
        S("dialog.toast.importPartial", "Import abgeschlossen, einige Notizen konnten nicht übernommen werden.")
      ) : (G = (V = (Q = window.Blinko) == null ? void 0 : Q.toast) == null ? void 0 : V.success) == null || G.call(V, S("dialog.toast.importSuccess", "Alle Notizen wurden erfolgreich importiert."));
    }, et = (o == null ? void 0 : o.skipped) ?? [];
    return /* @__PURE__ */ K("div", { class: "max-w-3xl w-full text-sm text-slate-800", children: /* @__PURE__ */ K("div", { class: "space-y-6", children: [
      /* @__PURE__ */ K("header", { class: "space-y-1", children: /* @__PURE__ */ K("p", { class: "text-base text-slate-600", children: S("dialog.subtitle", "Importiere deine Google Keep Notizen in wenigen Minuten in Blinko.") }) }),
      /* @__PURE__ */ K(
        "section",
        {
          class: `rounded-xl border-2 border-dashed p-6 transition-colors ${_ ? "border-blue-500 bg-blue-50" : "border-slate-200 bg-white"}`,
          onDrop: x,
          onDragOver: P,
          onDragLeave: u,
          onClick: () => {
            var O;
            return (O = A.current) == null ? void 0 : O.click();
          },
          children: [
            /* @__PURE__ */ K("p", { class: "text-lg font-semibold mb-2", children: S("dialog.dropzone.title", "Google Takeout ZIP auswählen") }),
            /* @__PURE__ */ K("p", { class: "text-slate-600 mb-4", children: S("dialog.dropzone.instructions", "Ziehe deine exportierte Datei hierher oder klicke, um sie auszuwählen.") }),
            /* @__PURE__ */ K(
              "button",
              {
                type: "button",
                class: "inline-flex items-center gap-2 rounded-full border border-blue-500 px-4 py-2 text-blue-600 hover:bg-blue-50",
                children: S("dialog.dropzone.cta", "Datei auswählen")
              }
            ),
            /* @__PURE__ */ K("p", { class: "mt-3 text-xs text-slate-500", children: S("dialog.dropzone.hint", "Unterstützt werden unveränderte ZIP-Exporte aus Google Takeout → Keep.") }),
            /* @__PURE__ */ K(
              "input",
              {
                type: "file",
                accept: ".zip",
                ref: A,
                onChange: X,
                class: "hidden"
              }
            )
          ]
        }
      ),
      r && /* @__PURE__ */ K("section", { class: "rounded-xl border border-slate-200 bg-white p-5", children: /* @__PURE__ */ K("div", { class: "flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ K("div", { children: [
          /* @__PURE__ */ K("p", { class: "text-xs uppercase tracking-wide text-slate-500", children: S("dialog.summary.file", "Ausgewählte Datei") }),
          /* @__PURE__ */ K("p", { class: "font-medium text-slate-900", children: r.name }),
          /* @__PURE__ */ K("p", { class: "text-xs text-slate-500", children: [
            Dn(r.size),
            " · ",
            S("dialog.summary.lastModified", "Geändert"),
            ": ",
            gr(new Date(r.lastModified))
          ] })
        ] }),
        /* @__PURE__ */ K(
          "button",
          {
            type: "button",
            class: "text-xs text-blue-600 hover:underline",
            onClick: B,
            children: S("dialog.buttons.reset", "Andere Datei wählen")
          }
        )
      ] }) }),
      /* @__PURE__ */ K("section", { class: "grid gap-4 rounded-xl border border-slate-200 bg-white p-5 md:grid-cols-2", children: [
        /* @__PURE__ */ K("div", { children: [
          /* @__PURE__ */ K("p", { class: "text-xs uppercase tracking-wide text-slate-500", children: S("dialog.summary.title", "Analyse") }),
          /* @__PURE__ */ K("p", { class: "text-2xl font-semibold text-slate-900", children: E.total || "—" }),
          /* @__PURE__ */ K("p", { class: "text-xs text-slate-500", children: S("dialog.summary.notes", "importierbare Notizen") })
        ] }),
        /* @__PURE__ */ K("div", { children: [
          /* @__PURE__ */ K("p", { class: "text-xs uppercase tracking-wide text-slate-500", children: S("dialog.summary.labels", "Labels") }),
          /* @__PURE__ */ K("p", { class: "text-2xl font-semibold text-slate-900", children: E.labels || "—" }),
          /* @__PURE__ */ K("p", { class: "text-xs text-slate-500", children: [
            S("dialog.summary.skipped", "Übersprungen"),
            " · ",
            E.skipped
          ] })
        ] }),
        /* @__PURE__ */ K("div", { class: "md:col-span-2 mt-4", children: [
          /* @__PURE__ */ K("div", { class: "mb-2 flex items-center justify-between text-xs text-slate-500", children: [
            /* @__PURE__ */ K("span", { children: R }),
            /* @__PURE__ */ K("span", { children: [
              n,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ K("div", { class: "h-2 rounded-full bg-slate-200", children: /* @__PURE__ */ K(
            "div",
            {
              class: "h-2 rounded-full bg-blue-500 transition-all",
              style: { width: `${n}%` }
            }
          ) }),
          f && /* @__PURE__ */ K("p", { class: "mt-2 text-xs text-slate-500", children: [
            S("dialog.progress.currentNote", "Aktuelle Notiz"),
            ": ",
            /* @__PURE__ */ K("span", { class: "font-medium text-slate-700", children: f })
          ] }),
          d && /* @__PURE__ */ K("p", { class: "mt-2 rounded-md bg-red-50 px-3 py-2 text-xs text-red-600", children: d })
        ] })
      ] }),
      /* @__PURE__ */ K("section", { class: "rounded-xl border border-slate-200 bg-white p-5", children: [
        /* @__PURE__ */ K("p", { class: "text-sm font-semibold text-slate-900 mb-2", children: S("dialog.instructions.title", "So funktioniert der Import") }),
        /* @__PURE__ */ K("ol", { class: "list-decimal space-y-2 pl-5 text-slate-600", children: D.map((O, q) => /* @__PURE__ */ K("li", { children: O }, `${O}-${q}`)) })
      ] }),
      /* @__PURE__ */ K("section", { class: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ K("div", { class: "rounded-xl border border-slate-200 bg-white p-5", children: [
          /* @__PURE__ */ K("p", { class: "mb-3 text-sm font-semibold text-slate-900", children: S("dialog.skipped.title", "Übersprungene Notizen") }),
          et.length ? /* @__PURE__ */ K("ul", { class: "space-y-2 text-xs text-slate-600", children: [
            et.slice(0, 6).map((O) => /* @__PURE__ */ K("li", { class: "rounded-md border border-slate-100 px-3 py-2", children: [
              /* @__PURE__ */ K("p", { class: "font-medium text-slate-800", children: O.file.split("/").pop() ?? O.file }),
              /* @__PURE__ */ K("p", { class: "text-slate-500", children: On(O, S) }),
              O.detail && O.type === "error" && /* @__PURE__ */ K("p", { class: "text-[11px] text-slate-400", children: O.detail })
            ] }, O.file)),
            et.length > 6 && /* @__PURE__ */ K("li", { class: "text-[11px] text-slate-400", children: [
              "+",
              et.length - 6,
              " ",
              S("dialog.skipped.more", "weitere")
            ] })
          ] }) : /* @__PURE__ */ K("p", { class: "text-xs text-slate-500", children: S("dialog.skipped.empty", "Keine übersprungenen Notizen") })
        ] }),
        /* @__PURE__ */ K("div", { class: "rounded-xl border border-slate-200 bg-white p-5", children: [
          /* @__PURE__ */ K("p", { class: "mb-3 text-sm font-semibold text-slate-900", children: S("dialog.logs.title", "Import-Protokoll") }),
          p.length ? /* @__PURE__ */ K("ul", { class: "space-y-2 text-xs text-slate-600", children: p.slice(-8).map((O, q) => /* @__PURE__ */ K(
            "li",
            {
              class: `rounded-md px-3 py-2 ${O.status === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-600"}`,
              children: [
                /* @__PURE__ */ K("p", { class: "font-medium", children: O.title }),
                O.status === "error" && O.message && /* @__PURE__ */ K("p", { class: "text-[11px]", children: O.message })
              ]
            },
            `${O.title}-${q}`
          )) }) : /* @__PURE__ */ K("p", { class: "text-xs text-slate-500", children: S("dialog.logs.empty", "Noch kein Import gestartet") })
        ] })
      ] }),
      /* @__PURE__ */ K("section", { class: "rounded-xl border border-blue-100 bg-blue-50 p-5 text-xs text-blue-700", children: [
        /* @__PURE__ */ K("p", { class: "font-semibold", children: S("dialog.security.title", "Datenschutz") }),
        /* @__PURE__ */ K("p", { children: S("dialog.security.description", "Alle Daten bleiben lokal in deinem Browser. Es werden nur Notizen zu deinem Blinko-Konto hinzugefügt – es erfolgt kein Upload zu externen Diensten.") })
      ] }),
      /* @__PURE__ */ K("footer", { class: "flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ K("div", { class: "text-xs text-slate-500", children: h && /* @__PURE__ */ K("span", { children: [
          S("dialog.summary.analyzedAt", "Analysiert"),
          ": ",
          gr(h)
        ] }) }),
        /* @__PURE__ */ K("div", { class: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ K(
            "button",
            {
              type: "button",
              onClick: L,
              disabled: !Z,
              class: `rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm ${Z ? "bg-blue-600 hover:bg-blue-700" : "bg-slate-300 cursor-not-allowed"}`,
              children: S("dialog.buttons.import", "Notizen importieren")
            }
          ),
          /* @__PURE__ */ K(
            "button",
            {
              type: "button",
              class: "rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50",
              onClick: B,
              disabled: !r,
              children: S("dialog.buttons.reset", "Zurücksetzen")
            }
          ),
          /* @__PURE__ */ K(
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
  async function Pn(t) {
    var e, s, l, n, a, o, c, p, b, d;
    const r = {
      title: t.title,
      content: t.content,
      tags: t.tags
    };
    if ((n = (l = (s = (e = window.Blinko) == null ? void 0 : e.api) == null ? void 0 : s.note) == null ? void 0 : l.createNote) != null && n.mutate)
      return window.Blinko.api.note.createNote.mutate(r);
    if ((p = (c = (o = (a = window.Blinko) == null ? void 0 : a.api) == null ? void 0 : o.note) == null ? void 0 : c.create) != null && p.mutate)
      return window.Blinko.api.note.create.mutate(r);
    if ((d = (b = window.Blinko) == null ? void 0 : b.notes) != null && d.create)
      return window.Blinko.notes.create(r);
    throw new Error("Blinko API ist nicht verfügbar.");
  }
  function Rn() {
    return (t, r, e) => {
      var s, l, n;
      return ((n = (l = (s = window.Blinko) == null ? void 0 : s.i18n) == null ? void 0 : l.t) == null ? void 0 : n.call(l, t, e)) ?? r;
    };
  }
  function Fn({ onOpenImporter: t }) {
    const r = Ln();
    return /* @__PURE__ */ K("div", { class: "max-w-3xl w-full text-sm text-slate-800", children: /* @__PURE__ */ K("section", { class: "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm", children: [
      /* @__PURE__ */ K("p", { class: "text-xs font-semibold uppercase tracking-wide text-slate-500", children: r("settings.import.sectionLabel", "Import") }),
      /* @__PURE__ */ K("div", { class: "mt-3 space-y-2", children: [
        /* @__PURE__ */ K("h2", { class: "text-xl font-semibold text-slate-900", children: r("settings.import.title", "Import Google Keep notes") }),
        /* @__PURE__ */ K("p", { class: "text-sm text-slate-600", children: r(
          "settings.import.description",
          "Launch the importer directly from the settings to migrate notes, labels and attachments from your Google Takeout ZIP."
        ) })
      ] }),
      /* @__PURE__ */ K("div", { class: "mt-6 flex flex-col gap-4 sm:flex-row sm:items-center", children: [
        /* @__PURE__ */ K(
          "button",
          {
            type: "button",
            class: "inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2",
            onClick: t,
            children: r("settings.import.button", "Start Google Keep import")
          }
        ),
        /* @__PURE__ */ K("p", { class: "text-xs text-slate-500", children: r("settings.import.hint", "You can also start the importer via the toolbar icon at the top of Blinko.") })
      ] })
    ] }) });
  }
  function Ln() {
    return (t, r, e) => {
      var s, l, n;
      return ((n = (l = (s = window.Blinko) == null ? void 0 : s.i18n) == null ? void 0 : l.t) == null ? void 0 : n.call(l, t, e)) ?? r;
    };
  }
  const Ht = Qe.name, Un = `
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
          this.withSettingPanel = !0, this.dialogContainers = /* @__PURE__ */ new Set(), this.renderSettingPanel = () => {
            const e = document.createElement("div");
            return e.dataset.plugin = Ht, oe(/* @__PURE__ */ K(Fn, { onOpenImporter: this.openDialog }), e), e;
          }, this.openDialog = () => {
            var l;
            const e = () => {
              this.dialogContainers.forEach((n) => oe(null, n)), this.dialogContainers.clear(), window.Blinko.closeDialog();
            }, s = window.Blinko.showDialog({
              title: ((l = window.Blinko.i18n) == null ? void 0 : l.t("dialog.title")) ?? "Google Keep Import",
              width: 560,
              content: () => {
                const n = document.createElement("div");
                return n.dataset.plugin = Ht, this.dialogContainers.add(n), oe(/* @__PURE__ */ K(Bn, { onClose: e }), n), n;
              }
            });
            this.dialogClose = s != null && s.close ? () => {
              var n;
              (n = s.close) == null || n.call(s), e();
            } : e;
          }, Object.assign(this, Qe);
        }
        init() {
          this.initI18n(), this.registerToolbarIcon();
        }
        registerToolbarIcon() {
          var e;
          window.Blinko.addToolBarIcon({
            name: Ht,
            placement: "top",
            tooltip: ((e = window.Blinko.i18n) == null ? void 0 : e.t("toolbar.tooltip")) ?? "Google Keep Import",
            icon: Un,
            onClick: this.openDialog
          });
        }
        initI18n() {
          var s;
          const e = (s = window.Blinko) == null ? void 0 : s.i18n;
          e && (e.addResourceBundle("en", "translation", $r, !0, !0), e.addResourceBundle("de", "translation", Hr, !0, !0));
        }
        destroy() {
          var e;
          (e = this.dialogClose) == null || e.call(this), window.Blinko.removeToolBarIcon && window.Blinko.removeToolBarIcon(Ht);
        }
      });
    }
  }));
})();
