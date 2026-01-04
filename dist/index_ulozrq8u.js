(function() {
  var H, c, ne, x, re, _e, ie, le, L, W, V, T = {}, se = [], Oe = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, C = Array.isArray;
  function P(e, t) {
    for (var o in t)
      e[o] = t[o];
    return e;
  }
  function j(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function q(e, t, o) {
    var n, r, _, l = {};
    for (_ in t)
      _ == "key" ? n = t[_] : _ == "ref" ? r = t[_] : l[_] = t[_];
    if (arguments.length > 2 && (l.children = arguments.length > 3 ? H.call(arguments, 2) : o), typeof e == "function" && e.defaultProps != null)
      for (_ in e.defaultProps)
        l[_] === void 0 && (l[_] = e.defaultProps[_]);
    return B(e, l, n, r, null);
  }
  function B(e, t, o, n, r) {
    var _ = { type: e, props: t, key: o, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: r ?? ++ne, __i: -1, __u: 0 };
    return r == null && c.vnode != null && c.vnode(_), _;
  }
  function $(e) {
    return e.children;
  }
  function I(e, t) {
    this.props = e, this.context = t;
  }
  function A(e, t) {
    if (t == null)
      return e.__ ? A(e.__, e.__i + 1) : null;
    for (var o; t < e.__k.length; t++)
      if ((o = e.__k[t]) != null && o.__e != null)
        return o.__e;
    return typeof e.type == "function" ? A(e) : null;
  }
  function ae(e) {
    var t, o;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((o = e.__k[t]) != null && o.__e != null) {
          e.__e = e.__c.base = o.__e;
          break;
        }
      return ae(e);
    }
  }
  function ue(e) {
    (!e.__d && (e.__d = !0) && x.push(e) && !U.__r++ || re != c.debounceRendering) && ((re = c.debounceRendering) || _e)(U);
  }
  function U() {
    for (var e, t, o, n, r, _, l, a = 1; x.length; )
      x.length > a && x.sort(ie), e = x.shift(), a = x.length, e.__d && (o = void 0, n = void 0, r = (n = (t = e).__v).__e, _ = [], l = [], t.__P && ((o = P({}, n)).__v = n.__v + 1, c.vnode && c.vnode(o), J(t.__P, o, n, t.__n, t.__P.namespaceURI, 32 & n.__u ? [r] : null, _, r ?? A(n), !!(32 & n.__u), l), o.__v = n.__v, o.__.__k[o.__i] = o, he(_, o, l), n.__e = n.__ = null, o.__e != r && ae(o)));
    U.__r = 0;
  }
  function ce(e, t, o, n, r, _, l, a, u, s, f) {
    var i, m, p, v, k, y, h, d = n && n.__k || se, N = t.length;
    for (u = Ke(o, t, d, u, N), i = 0; i < N; i++)
      (p = o.__k[i]) != null && (m = p.__i == -1 ? T : d[p.__i] || T, p.__i = i, y = J(e, p, m, r, _, l, a, u, s, f), v = p.__e, p.ref && m.ref != p.ref && (m.ref && X(m.ref, null, p), f.push(p.ref, p.__c || v, p)), k == null && v != null && (k = v), (h = !!(4 & p.__u)) || m.__k === p.__k ? u = pe(p, u, e, h) : typeof p.type == "function" && y !== void 0 ? u = y : v && (u = v.nextSibling), p.__u &= -7);
    return o.__e = k, u;
  }
  function Ke(e, t, o, n, r) {
    var _, l, a, u, s, f = o.length, i = f, m = 0;
    for (e.__k = new Array(r), _ = 0; _ < r; _++)
      (l = t[_]) != null && typeof l != "boolean" && typeof l != "function" ? (typeof l == "string" || typeof l == "number" || typeof l == "bigint" || l.constructor == String ? l = e.__k[_] = B(null, l, null, null, null) : C(l) ? l = e.__k[_] = B($, { children: l }, null, null, null) : l.constructor == null && l.__b > 0 ? l = e.__k[_] = B(l.type, l.props, l.key, l.ref ? l.ref : null, l.__v) : e.__k[_] = l, u = _ + m, l.__ = e, l.__b = e.__b + 1, a = null, (s = l.__i = Ze(l, o, u, i)) != -1 && (i--, (a = o[s]) && (a.__u |= 2)), a == null || a.__v == null ? (s == -1 && (r > f ? m-- : r < f && m++), typeof l.type != "function" && (l.__u |= 4)) : s != u && (s == u - 1 ? m-- : s == u + 1 ? m++ : (s > u ? m-- : m++, l.__u |= 4))) : e.__k[_] = null;
    if (i)
      for (_ = 0; _ < f; _++)
        (a = o[_]) != null && !(2 & a.__u) && (a.__e == n && (n = A(a)), ve(a, a));
    return n;
  }
  function pe(e, t, o, n) {
    var r, _;
    if (typeof e.type == "function") {
      for (r = e.__k, _ = 0; r && _ < r.length; _++)
        r[_] && (r[_].__ = e, t = pe(r[_], t, o, n));
      return t;
    }
    e.__e != t && (n && (t && e.type && !t.parentNode && (t = A(e)), o.insertBefore(e.__e, t || null)), t = e.__e);
    do
      t = t && t.nextSibling;
    while (t != null && t.nodeType == 8);
    return t;
  }
  function G(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (C(e) ? e.some(function(o) {
      G(o, t);
    }) : t.push(e)), t;
  }
  function Ze(e, t, o, n) {
    var r, _, l, a = e.key, u = e.type, s = t[o], f = s != null && (2 & s.__u) == 0;
    if (s === null && a == null || f && a == s.key && u == s.type)
      return o;
    if (n > (f ? 1 : 0)) {
      for (r = o - 1, _ = o + 1; r >= 0 || _ < t.length; )
        if ((s = t[l = r >= 0 ? r-- : _++]) != null && !(2 & s.__u) && a == s.key && u == s.type)
          return l;
    }
    return -1;
  }
  function fe(e, t, o) {
    t[0] == "-" ? e.setProperty(t, o ?? "") : e[t] = o == null ? "" : typeof o != "number" || Oe.test(t) ? o : o + "px";
  }
  function M(e, t, o, n, r) {
    var _, l;
    e:
      if (t == "style")
        if (typeof o == "string")
          e.style.cssText = o;
        else {
          if (typeof n == "string" && (e.style.cssText = n = ""), n)
            for (t in n)
              o && t in o || fe(e.style, t, "");
          if (o)
            for (t in o)
              n && o[t] == n[t] || fe(e.style, t, o[t]);
        }
      else if (t[0] == "o" && t[1] == "n")
        _ = t != (t = t.replace(le, "$1")), l = t.toLowerCase(), t = l in e || t == "onFocusOut" || t == "onFocusIn" ? l.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + _] = o, o ? n ? o.u = n.u : (o.u = L, e.addEventListener(t, _ ? V : W, _)) : e.removeEventListener(t, _ ? V : W, _);
      else {
        if (r == "http://www.w3.org/2000/svg")
          t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e)
          try {
            e[t] = o ?? "";
            break e;
          } catch {
          }
        typeof o == "function" || (o == null || o === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && o == 1 ? "" : o));
      }
  }
  function de(e) {
    return function(t) {
      if (this.l) {
        var o = this.l[t.type + e];
        if (t.t == null)
          t.t = L++;
        else if (t.t < o.u)
          return;
        return o(c.event ? c.event(t) : t);
      }
    };
  }
  function J(e, t, o, n, r, _, l, a, u, s) {
    var f, i, m, p, v, k, y, h, d, N, S, F, z, Me, R, D, oe, w = t.type;
    if (t.constructor != null)
      return null;
    128 & o.__u && (u = !!(32 & o.__u), _ = [a = t.__e = o.__e]), (f = c.__b) && f(t);
    e:
      if (typeof w == "function")
        try {
          if (h = t.props, d = "prototype" in w && w.prototype.render, N = (f = w.contextType) && n[f.__c], S = f ? N ? N.props.value : f.__ : n, o.__c ? y = (i = t.__c = o.__c).__ = i.__E : (d ? t.__c = i = new w(h, S) : (t.__c = i = new I(h, S), i.constructor = w, i.render = Re), N && N.sub(i), i.state || (i.state = {}), i.__n = n, m = i.__d = !0, i.__h = [], i._sb = []), d && i.__s == null && (i.__s = i.state), d && w.getDerivedStateFromProps != null && (i.__s == i.state && (i.__s = P({}, i.__s)), P(i.__s, w.getDerivedStateFromProps(h, i.__s))), p = i.props, v = i.state, i.__v = t, m)
            d && w.getDerivedStateFromProps == null && i.componentWillMount != null && i.componentWillMount(), d && i.componentDidMount != null && i.__h.push(i.componentDidMount);
          else {
            if (d && w.getDerivedStateFromProps == null && h !== p && i.componentWillReceiveProps != null && i.componentWillReceiveProps(h, S), t.__v == o.__v || !i.__e && i.shouldComponentUpdate != null && i.shouldComponentUpdate(h, i.__s, S) === !1) {
              for (t.__v != o.__v && (i.props = h, i.state = i.__s, i.__d = !1), t.__e = o.__e, t.__k = o.__k, t.__k.some(function(E) {
                E && (E.__ = t);
              }), F = 0; F < i._sb.length; F++)
                i.__h.push(i._sb[F]);
              i._sb = [], i.__h.length && l.push(i);
              break e;
            }
            i.componentWillUpdate != null && i.componentWillUpdate(h, i.__s, S), d && i.componentDidUpdate != null && i.__h.push(function() {
              i.componentDidUpdate(p, v, k);
            });
          }
          if (i.context = S, i.props = h, i.__P = e, i.__e = !1, z = c.__r, Me = 0, d) {
            for (i.state = i.__s, i.__d = !1, z && z(t), f = i.render(i.props, i.state, i.context), R = 0; R < i._sb.length; R++)
              i.__h.push(i._sb[R]);
            i._sb = [];
          } else
            do
              i.__d = !1, z && z(t), f = i.render(i.props, i.state, i.context), i.state = i.__s;
            while (i.__d && ++Me < 25);
          i.state = i.__s, i.getChildContext != null && (n = P(P({}, n), i.getChildContext())), d && !m && i.getSnapshotBeforeUpdate != null && (k = i.getSnapshotBeforeUpdate(p, v)), D = f, f != null && f.type === $ && f.key == null && (D = me(f.props.children)), a = ce(e, C(D) ? D : [D], t, o, n, r, _, l, a, u, s), i.base = t.__e, t.__u &= -161, i.__h.length && l.push(i), y && (i.__E = i.__ = null);
        } catch (E) {
          if (t.__v = null, u || _ != null)
            if (E.then) {
              for (t.__u |= u ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; )
                a = a.nextSibling;
              _[_.indexOf(a)] = null, t.__e = a;
            } else {
              for (oe = _.length; oe--; )
                j(_[oe]);
              Q(t);
            }
          else
            t.__e = o.__e, t.__k = o.__k, E.then || Q(t);
          c.__e(E, t, o);
        }
      else
        _ == null && t.__v == o.__v ? (t.__k = o.__k, t.__e = o.__e) : a = t.__e = Fe(o.__e, t, o, n, r, _, l, u, s);
    return (f = c.diffed) && f(t), 128 & t.__u ? void 0 : a;
  }
  function Q(e) {
    e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(Q);
  }
  function he(e, t, o) {
    for (var n = 0; n < o.length; n++)
      X(o[n], o[++n], o[++n]);
    c.__c && c.__c(t, e), e.some(function(r) {
      try {
        e = r.__h, r.__h = [], e.some(function(_) {
          _.call(r);
        });
      } catch (_) {
        c.__e(_, r.__v);
      }
    });
  }
  function me(e) {
    return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : C(e) ? e.map(me) : P({}, e);
  }
  function Fe(e, t, o, n, r, _, l, a, u) {
    var s, f, i, m, p, v, k, y = o.props || T, h = t.props, d = t.type;
    if (d == "svg" ? r = "http://www.w3.org/2000/svg" : d == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), _ != null) {
      for (s = 0; s < _.length; s++)
        if ((p = _[s]) && "setAttribute" in p == !!d && (d ? p.localName == d : p.nodeType == 3)) {
          e = p, _[s] = null;
          break;
        }
    }
    if (e == null) {
      if (d == null)
        return document.createTextNode(h);
      e = document.createElementNS(r, d, h.is && h), a && (c.__m && c.__m(t, _), a = !1), _ = null;
    }
    if (d == null)
      y === h || a && e.data == h || (e.data = h);
    else {
      if (_ = _ && H.call(e.childNodes), !a && _ != null)
        for (y = {}, s = 0; s < e.attributes.length; s++)
          y[(p = e.attributes[s]).name] = p.value;
      for (s in y)
        if (p = y[s], s != "children") {
          if (s == "dangerouslySetInnerHTML")
            i = p;
          else if (!(s in h)) {
            if (s == "value" && "defaultValue" in h || s == "checked" && "defaultChecked" in h)
              continue;
            M(e, s, null, p, r);
          }
        }
      for (s in h)
        p = h[s], s == "children" ? m = p : s == "dangerouslySetInnerHTML" ? f = p : s == "value" ? v = p : s == "checked" ? k = p : a && typeof p != "function" || y[s] === p || M(e, s, p, y[s], r);
      if (f)
        a || i && (f.__html == i.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = [];
      else if (i && (e.innerHTML = ""), ce(t.type == "template" ? e.content : e, C(m) ? m : [m], t, o, n, d == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, _, l, _ ? _[0] : o.__k && A(o, 0), a, u), _ != null)
        for (s = _.length; s--; )
          j(_[s]);
      a || (s = "value", d == "progress" && v == null ? e.removeAttribute("value") : v != null && (v !== e[s] || d == "progress" && !v || d == "option" && v != y[s]) && M(e, s, v, y[s], r), s = "checked", k != null && k != e[s] && M(e, s, k, y[s], r));
    }
    return e;
  }
  function X(e, t, o) {
    try {
      if (typeof e == "function") {
        var n = typeof e.__u == "function";
        n && e.__u(), n && t == null || (e.__u = e(t));
      } else
        e.current = t;
    } catch (r) {
      c.__e(r, o);
    }
  }
  function ve(e, t, o) {
    var n, r;
    if (c.unmount && c.unmount(e), (n = e.ref) && (n.current && n.current != e.__e || X(n, null, t)), (n = e.__c) != null) {
      if (n.componentWillUnmount)
        try {
          n.componentWillUnmount();
        } catch (_) {
          c.__e(_, t);
        }
      n.base = n.__P = null;
    }
    if (n = e.__k)
      for (r = 0; r < n.length; r++)
        n[r] && ve(n[r], t, o || typeof e.type != "function");
    o || j(e.__e), e.__c = e.__ = e.__e = void 0;
  }
  function Re(e, t, o) {
    return this.constructor(e, o);
  }
  function Le(e, t, o) {
    var n, r, _, l;
    t == document && (t = document.documentElement), c.__ && c.__(e, t), r = (n = typeof o == "function") ? null : o && o.__k || t.__k, _ = [], l = [], J(t, e = (!n && o || t).__k = q($, null, [e]), r || T, T, t.namespaceURI, !n && o ? [o] : r ? null : t.firstChild ? H.call(t.childNodes) : null, _, !n && o ? o : r ? r.__e : t.firstChild, n, l), he(_, e, l);
  }
  H = se.slice, c = { __e: function(e, t, o, n) {
    for (var r, _, l; t = t.__; )
      if ((r = t.__c) && !r.__)
        try {
          if ((_ = r.constructor) && _.getDerivedStateFromError != null && (r.setState(_.getDerivedStateFromError(e)), l = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, n || {}), l = r.__d), l)
            return r.__E = r;
        } catch (a) {
          e = a;
        }
    throw e;
  } }, ne = 0, I.prototype.setState = function(e, t) {
    var o;
    o = this.__s != null && this.__s != this.state ? this.__s : this.__s = P({}, this.state), typeof e == "function" && (e = e(P({}, o), this.props)), e && P(o, e), e != null && this.__v && (t && this._sb.push(t), ue(this));
  }, I.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), ue(this));
  }, I.prototype.render = $, x = [], _e = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ie = function(e, t) {
    return e.__v.__b - t.__v.__b;
  }, U.__r = 0, le = /(PointerCapture)$|Capture$/i, L = 0, W = de(!1), V = de(!0);
  var We = 0;
  function O(e, t, o, n, r, _) {
    t || (t = {});
    var l, a, u = t;
    if ("ref" in u)
      for (a in u = {}, t)
        a == "ref" ? l = t[a] : u[a] = t[a];
    var s = { type: e, props: u, key: o, ref: l, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --We, __i: -1, __u: 0, __source: r, __self: _ };
    if (typeof e == "function" && (l = e.defaultProps))
      for (a in l)
        u[a] === void 0 && (u[a] = l[a]);
    return c.vnode && c.vnode(s), s;
  }
  var b, Y, ge, ye = [], g = c, ke = g.__b, be = g.__r, we = g.diffed, Pe = g.__c, Ie = g.unmount, Ne = g.__;
  function Ve() {
    for (var e; e = ye.shift(); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(K), e.__H.__h.forEach(ee), e.__H.__h = [];
        } catch (t) {
          e.__H.__h = [], g.__e(t, e.__v);
        }
  }
  g.__b = function(e) {
    b = null, ke && ke(e);
  }, g.__ = function(e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ne && Ne(e, t);
  }, g.__r = function(e) {
    be && be(e);
    var t = (b = e.__c).__H;
    t && (Y === b ? (t.__h = [], b.__h = [], t.__.forEach(function(o) {
      o.__N && (o.__ = o.__N), o.u = o.__N = void 0;
    })) : (t.__h.forEach(K), t.__h.forEach(ee), t.__h = [])), Y = b;
  }, g.diffed = function(e) {
    we && we(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (ye.push(t) !== 1 && ge === g.requestAnimationFrame || ((ge = g.requestAnimationFrame) || je)(Ve)), t.__H.__.forEach(function(o) {
      o.u && (o.__H = o.u), o.u = void 0;
    })), Y = b = null;
  }, g.__c = function(e, t) {
    t.some(function(o) {
      try {
        o.__h.forEach(K), o.__h = o.__h.filter(function(n) {
          return !n.__ || ee(n);
        });
      } catch (n) {
        t.some(function(r) {
          r.__h && (r.__h = []);
        }), t = [], g.__e(n, o.__v);
      }
    }), Pe && Pe(e, t);
  }, g.unmount = function(e) {
    Ie && Ie(e);
    var t, o = e.__c;
    o && o.__H && (o.__H.__.forEach(function(n) {
      try {
        K(n);
      } catch (r) {
        t = r;
      }
    }), o.__H = void 0, t && g.__e(t, o.__v));
  };
  var xe = typeof requestAnimationFrame == "function";
  function je(e) {
    var t, o = function() {
      clearTimeout(n), xe && cancelAnimationFrame(t), setTimeout(e);
    }, n = setTimeout(o, 35);
    xe && (t = requestAnimationFrame(o));
  }
  function K(e) {
    var t = b, o = e.__c;
    typeof o == "function" && (e.__c = void 0, o()), b = t;
  }
  function ee(e) {
    var t = b;
    e.__c = e.__(), b = t;
  }
  function qe(e, t) {
    for (var o in t)
      e[o] = t[o];
    return e;
  }
  function Se(e, t) {
    for (var o in e)
      if (o !== "__source" && !(o in t))
        return !0;
    for (var n in t)
      if (n !== "__source" && e[n] !== t[n])
        return !0;
    return !1;
  }
  function $e(e, t) {
    this.props = e, this.context = t;
  }
  ($e.prototype = new I()).isPureReactComponent = !0, $e.prototype.shouldComponentUpdate = function(e, t) {
    return Se(this.props, e) || Se(this.state, t);
  };
  var Ae = c.__b;
  c.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ae && Ae(e);
  };
  var Je = c.__e;
  c.__e = function(e, t, o, n) {
    if (e.then) {
      for (var r, _ = t; _ = _.__; )
        if ((r = _.__c) && r.__c)
          return t.__e == null && (t.__e = o.__e, t.__k = o.__k), r.__c(e, t);
    }
    Je(e, t, o, n);
  };
  var Ee = c.unmount;
  function Te(e, t, o) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
      typeof n.__c == "function" && n.__c();
    }), e.__c.__H = null), (e = qe({}, e)).__c != null && (e.__c.__P === o && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
      return Te(n, t, o);
    })), e;
  }
  function Ce(e, t, o) {
    return e && o && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
      return Ce(n, t, o);
    }), e.__c && e.__c.__P === t && (e.__e && o.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = o)), e;
  }
  function te() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function ze(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function Z() {
    this.i = null, this.l = null;
  }
  c.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Ee && Ee(e);
  }, (te.prototype = new I()).__c = function(e, t) {
    var o = t.__c, n = this;
    n.o == null && (n.o = []), n.o.push(o);
    var r = ze(n.__v), _ = !1, l = function() {
      _ || (_ = !0, o.__R = null, r ? r(a) : a());
    };
    o.__R = l;
    var a = function() {
      if (!--n.__u) {
        if (n.state.__a) {
          var u = n.state.__a;
          n.__v.__k[0] = Ce(u, u.__c.__P, u.__c.__O);
        }
        var s;
        for (n.setState({ __a: n.__b = null }); s = n.o.pop(); )
          s.forceUpdate();
      }
    };
    n.__u++ || 32 & t.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(l, l);
  }, te.prototype.componentWillUnmount = function() {
    this.o = [];
  }, te.prototype.render = function(e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var o = document.createElement("div"), n = this.__v.__k[0].__c;
        this.__v.__k[0] = Te(this.__b, o, n.__O = n.__P);
      }
      this.__b = null;
    }
    var r = t.__a && q($, null, e.fallback);
    return r && (r.__u &= -33), [q($, null, t.__a ? null : e.children), r];
  };
  var De = function(e, t, o) {
    if (++o[1] === o[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
      for (o = e.i; o; ) {
        for (; o.length > 3; )
          o.pop()();
        if (o[1] < o[0])
          break;
        e.i = o = o[2];
      }
  };
  (Z.prototype = new I()).__a = function(e) {
    var t = this, o = ze(t.__v), n = t.l.get(e);
    return n[0]++, function(r) {
      var _ = function() {
        t.props.revealOrder ? (n.push(r), De(t, e, n)) : r();
      };
      o ? o(_) : _();
    };
  }, Z.prototype.render = function(e) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var t = G(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var o = t.length; o--; )
      this.l.set(t[o], this.i = [1, 0, this.i]);
    return e.children;
  }, Z.prototype.componentDidUpdate = Z.prototype.componentDidMount = function() {
    var e = this;
    this.l.forEach(function(t, o) {
      De(e, o, t);
    });
  };
  var Qe = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Xe = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Ye = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, et = /[A-Z0-9]/g, tt = typeof document < "u", ot = function(e) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
  };
  function nt(e, t, o) {
    return t.__k == null && (t.textContent = ""), Le(e, t), typeof o == "function" && o(), e ? e.__c : null;
  }
  I.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(I.prototype, e, { configurable: !0, get: function() {
      return this["UNSAFE_" + e];
    }, set: function(t) {
      Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
    } });
  });
  var He = c.event;
  function rt() {
  }
  function _t() {
    return this.cancelBubble;
  }
  function it() {
    return this.defaultPrevented;
  }
  c.event = function(e) {
    return He && (e = He(e)), e.persist = rt, e.isPropagationStopped = _t, e.isDefaultPrevented = it, e.nativeEvent = e;
  };
  var lt = { enumerable: !1, configurable: !0, get: function() {
    return this.class;
  } }, Be = c.vnode;
  c.vnode = function(e) {
    typeof e.type == "string" && function(t) {
      var o = t.props, n = t.type, r = {}, _ = n.indexOf("-") === -1;
      for (var l in o) {
        var a = o[l];
        if (!(l === "value" && "defaultValue" in o && a == null || tt && l === "children" && n === "noscript" || l === "class" || l === "className")) {
          var u = l.toLowerCase();
          l === "defaultValue" && "value" in o && o.value == null ? l = "value" : l === "download" && a === !0 ? a = "" : u === "translate" && a === "no" ? a = !1 : u[0] === "o" && u[1] === "n" ? u === "ondoubleclick" ? l = "ondblclick" : u !== "onchange" || n !== "input" && n !== "textarea" || ot(o.type) ? u === "onfocus" ? l = "onfocusin" : u === "onblur" ? l = "onfocusout" : Ye.test(l) && (l = u) : u = l = "oninput" : _ && Xe.test(l) ? l = l.replace(et, "-$&").toLowerCase() : a === null && (a = void 0), u === "oninput" && r[l = u] && (l = "oninputCapture"), r[l] = a;
        }
      }
      n == "select" && r.multiple && Array.isArray(r.value) && (r.value = G(o.children).forEach(function(s) {
        s.props.selected = r.value.indexOf(s.props.value) != -1;
      })), n == "select" && r.defaultValue != null && (r.value = G(o.children).forEach(function(s) {
        s.props.selected = r.multiple ? r.defaultValue.indexOf(s.props.value) != -1 : r.defaultValue == s.props.value;
      })), o.class && !o.className ? (r.class = o.class, Object.defineProperty(r, "className", lt)) : (o.className && !o.class || o.class && o.className) && (r.class = r.className = o.className), t.props = r;
    }(e), e.$$typeof = Qe, Be && Be(e);
  };
  var Ue = c.__r;
  c.__r = function(e) {
    Ue && Ue(e), e.__c;
  };
  var Ge = c.diffed;
  c.diffed = function(e) {
    Ge && Ge(e);
    var t = e.props, o = e.__e;
    o != null && e.type === "textarea" && "value" in t && t.value !== o.value && (o.value = t.value == null ? "" : t.value);
  };
  const st = {
    id: "blinko-google-keep-importer",
    name: "blinko-google-keep-importer",
    version: "0.0.1",
    description: "Import Google Keep notes directly into Blinko with automatic tag conversion",
    author: "pascalhorn98@gmail.com",
    url: "https://github.com/Techcraftde/blinko-google-keep-importer",
    minAppVersion: "0.0.0",
    displayName: {
      default: "Blinko: Google Keep Importer",
      de: "Blinko: Google Keep Importer"
    },
    readme: {
      default: "README.md"
    },
    main: "src/index.tsx",
    homepage: "https://github.com/Techcraftde/blinko-google-keep-importer",
    repository: "https://github.com/Techcraftde/blinko-google-keep-importer",
    license: "MIT",
    type: "importer",
    capabilities: {
      import: !0,
      export: !1,
      sync: !1
    }
  };
  function at() {
    return /* @__PURE__ */ O("div", { children: [
      /* @__PURE__ */ O("h2", { children: "Google Keep Importer" }),
      /* @__PURE__ */ O("p", { children: "This is a placeholder for the Google Keep import UI." })
    ] });
  }
  const ut = {
    toolbar: {
      tooltip: "Import Google Keep Notes"
    },
    dialog: {
      title: "Google Keep Import",
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
  }, ct = {
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
  System.register([], (e) => ({
    execute: () => {
      e("default", class {
        constructor() {
          Object.assign(this, st);
        }
        /**
         * Initialize the plugin
         */
        async init() {
          this.initI18n(), window.Blinko.addToolBarIcon({
            name: "keep-importer",
            icon: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/><polyline points='7 10 12 15 17 10'/><line x1='12' y1='15' x2='12' y2='3'/></svg>",
            placement: "top",
            tooltip: "Import Google Keep Notes",
            content: () => {
              const o = document.createElement("div");
              return o.setAttribute("data-plugin", "keep-importer"), nt(/* @__PURE__ */ O(at, {}), o), o;
            }
          });
        }
        /**
         * Initialize internationalization
         */
        initI18n() {
          window.Blinko.i18n.addResourceBundle("en", "translation", ut), window.Blinko.i18n.addResourceBundle("de", "translation", ct);
        }
        /**
         * Cleanup when plugin is disabled
         */
        destroy() {
          console.log("Google Keep Importer plugin destroyed");
        }
      });
    }
  }));
})();
