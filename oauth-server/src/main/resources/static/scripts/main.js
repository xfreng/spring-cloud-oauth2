function setAllRead() {
    $.ajax({
        type: "POST", url: ctx + "/notification/setAllRead", dataType: "json", beforeSend: function (request) {
            request.setRequestHeader(header, token);
        }, success: function (a, b, c) {
            $("#notificationCount").hasClass("hide") || $("#notificationCount").addClass("hide"), $("#notificationCount2").hasClass("hide") || $("#notificationCount2").addClass("hide")
        }, error: function (a, b, c) {
        }
    })
}

if (!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    function c(a) {
        var b = a.length, c = ea.type(a);
        return "function" === c || ea.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (ea.isFunction(b)) return ea.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return ea.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ma.test(b)) return ea.filter(b, a, c);
            b = ea.filter(b, a)
        }
        return ea.grep(a, function (a) {
            return ea.inArray(a, b) >= 0 !== c
        })
    }

    function e(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function f(a) {
        var b = ua[a] = {};
        return ea.each(a.match(ta) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
    }

    function h() {
        (oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(), ea.ready())
    }

    function i(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(za, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ya.test(c) ? ea.parseJSON(c) : c
                } catch (e) {
                }
                ea.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function j(a) {
        var b;
        for (b in a) if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function k(a, b, c, d) {
        if (ea.acceptData(a)) {
            var e, f, g = ea.expando, h = a.nodeType, i = h ? ea.cache : a, j = h ? a[g] : a[g] && g;
            if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = W.pop() || ea.guid++ : g), i[j] || (i[j] = h ? {} : {toJSON: ea.noop}), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = ea.extend(i[j], b) : i[j].data = ea.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[ea.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[ea.camelCase(b)])) : e = f, e
        }
    }

    function l(a, b, c) {
        if (ea.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? ea.cache : a, h = f ? a[ea.expando] : ea.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    ea.isArray(b) ? b = b.concat(ea.map(b, ea.camelCase)) : b in d ? b = [b] : (b = ea.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    for (; e--;) delete d[b[e]];
                    if (c ? !j(d) : !ea.isEmptyObject(d)) return
                }
                (c || (delete g[h].data, j(g[h]))) && (f ? ea.cleanData([a], !0) : ca.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }

    function m() {
        return !0
    }

    function n() {
        return !1
    }

    function o() {
        try {
            return oa.activeElement
        } catch (a) {
        }
    }

    function p(a) {
        var b = Ka.split("|"), c = a.createDocumentFragment();
        if (c.createElement) for (; b.length;) c.createElement(b.pop());
        return c
    }

    function q(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== xa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xa ? a.querySelectorAll(b || "*") : void 0;
        if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
        return void 0 === b || b && ea.nodeName(a, b) ? ea.merge([a], f) : f
    }

    function r(a) {
        Ea.test(a.type) && (a.defaultChecked = a.checked)
    }

    function s(a, b) {
        return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function t(a) {
        return a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type, a
    }

    function u(a) {
        var b = Va.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function v(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval"))
    }

    function w(a, b) {
        if (1 === b.nodeType && ea.hasData(a)) {
            var c, d, e, f = ea._data(a), g = ea._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) ea.event.add(b, c, h[c][d])
            }
            g.data && (g.data = ea.extend({}, g.data))
        }
    }

    function x(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !ca.noCloneEvent && b[ea.expando]) {
                e = ea._data(b);
                for (d in e.events) ea.removeEvent(b, d, e.handle);
                b.removeAttribute(ea.expando)
            }
            "script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Ea.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    function y(b, c) {
        var d, e = ea(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
        return e.detach(), f
    }

    function z(a) {
        var b = oa, c = _a[a];
        return c || (c = y(a, b), "none" !== c && c || ($a = ($a || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = ($a[0].contentWindow || $a[0].contentDocument).document, b.write(), b.close(), c = y(a, b), $a.detach()), _a[a] = c), c
    }

    function A(a, b) {
        return {
            get: function () {
                var c = a();
                return null != c ? c ? void delete this.get : (this.get = b).apply(this, arguments) : void 0
            }
        }
    }

    function B(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mb.length; e--;) if (b = mb[e] + c, b in a) return b;
        return d
    }

    function C(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ea._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ca(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName)))) : (e = Ca(d), (c && "none" !== c || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function D(a, b, c) {
        var d = ib.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function E(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ea.css(a, c + Ba[f], !0, e)), d ? ("content" === c && (g -= ea.css(a, "padding" + Ba[f], !0, e)), "margin" !== c && (g -= ea.css(a, "border" + Ba[f] + "Width", !0, e))) : (g += ea.css(a, "padding" + Ba[f], !0, e), "padding" !== c && (g += ea.css(a, "border" + Ba[f] + "Width", !0, e)));
        return g
    }

    function F(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = ab(a),
            g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = bb(a, b, f), (0 > e || null == e) && (e = a.style[b]), db.test(e)) return e;
            d = g && (ca.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function G(a, b, c, d, e) {
        return new G.prototype.init(a, b, c, d, e)
    }

    function H() {
        return setTimeout(function () {
            nb = void 0
        }), nb = ea.now()
    }

    function I(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Ba[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function J(a, b, c) {
        for (var d, e = (tb[b] || []).concat(tb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }

    function K(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, n = a.style, o = a.nodeType && Ca(a), p = ea._data(a, "fxshow");
        c.queue || (h = ea._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, ea.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = ea.css(a, "display"), k = "none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", ca.shrinkWrapBlocks() || l.always(function () {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], pb.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                if ("show" !== e || !p || void 0 === p[d]) continue;
                o = !0
            }
            m[d] = p && p[d] || ea.style(a, d)
        } else j = void 0;
        if (ea.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j); else {
            p ? "hidden" in p && (o = p.hidden) : p = ea._data(a, "fxshow", {}), f && (p.hidden = !o), o ? ea(a).show() : l.done(function () {
                ea(a).hide()
            }), l.done(function () {
                var b;
                ea._removeData(a, "fxshow");
                for (b in m) ea.style(a, b, m[b])
            });
            for (d in m) g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function L(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = ea.camelCase(c), e = b[d], f = a[c], ea.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ea.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function M(a, b, c) {
        var d, e, f = 0, g = sb.length, h = ea.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e) return !1;
            for (var b = nb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: ea.extend({}, b),
            opts: ea.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: nb || H(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (L(k, j.opts.specialEasing); g > f; f++) if (d = sb[f].call(j, a, k, j.opts)) return d;
        return ea.map(k, J, j), ea.isFunction(j.opts.start) && j.opts.start.call(a, j), ea.fx.timer(ea.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function N(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(ta) || [];
            if (ea.isFunction(c)) for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function O(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, ea.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }

        var f = {}, g = a === Rb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function P(a, b) {
        var c, d, e = ea.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && ea.extend(!0, a, c), a
    }

    function Q(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e) for (g in h) if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function R(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    function S(a, b, c, d) {
        var e;
        if (ea.isArray(b)) ea.each(b, function (b, e) {
            c || Vb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== ea.type(b)) d(a, b); else for (e in b) S(a + "[" + e + "]", b[e], c, d)
    }

    function T() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function U() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function V(a) {
        return ea.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    var W = [], X = W.slice, Y = W.concat, Z = W.push, $ = W.indexOf, _ = {}, aa = _.toString, ba = _.hasOwnProperty,
        ca = {}, da = "1.11.2", ea = function (a, b) {
            return new ea.fn.init(a, b)
        }, fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ga = /^-ms-/, ha = /-([\da-z])/gi, ia = function (a, b) {
            return b.toUpperCase()
        };
    ea.fn = ea.prototype = {
        jquery: da, constructor: ea, selector: "", length: 0, toArray: function () {
            return X.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
        }, pushStack: function (a) {
            var b = ea.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return ea.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(ea.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(X.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: Z, sort: W.sort, splice: W.splice
    }, ea.extend = ea.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ea.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c && (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c))) ? (b ? (b = !1, f = a && ea.isArray(a) ? a : []) : f = a && ea.isPlainObject(a) ? a : {}, g[d] = ea.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, ea.extend({
        expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === ea.type(a)
        }, isArray: Array.isArray || function (a) {
            return "array" === ea.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            return !ea.isArray(a) && a - parseFloat(a) + 1 >= 0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        }, isPlainObject: function (a) {
            var b;
            if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a)) return !1;
            try {
                if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (ca.ownLast) for (b in a) return ba.call(a, b);
            for (b in a) ;
            return void 0 === b || ba.call(a, b)
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
        }, globalEval: function (b) {
            b && ea.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(ga, "ms-").replace(ha, ia)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h) for (; g > f && (e = b.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = b.apply(a[f], d), e === !1) break
            } else if (h) for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = b.call(a[f], f, a[f]), e === !1) break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(fa, "")
        }, makeArray: function (a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if ($) return $.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c
            }
            return -1
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
            if (c !== c) for (; void 0 !== b[d];) a[e++] = b[d++];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h) for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e); else for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return Y.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, d, e;
            return "string" == typeof b && (e = a[b], b = a, a = e), ea.isFunction(a) ? (c = X.call(arguments, 2), d = function () {
                return a.apply(b || this, c.concat(X.call(arguments)))
            }, d.guid = a.guid = a.guid || ea.guid++, d) : void 0
        }, now: function () {
            return +new Date
        }, support: ca
    }), ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        _["[object " + b + "]"] = b.toLowerCase()
    });
    var ja = function (a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a))) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                } else {
                    if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c
                    } catch (q) {
                    } finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }

            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c) for (; c = c.nextSibling;) if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function (b) {
                return b = +b, d(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {
        }

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];) if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];) if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else for (; b = b[d];) if (1 === b.nodeType || e) {
                    if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0
                }
            }
        }

        function o(a) {
            return a.length > 1 ? function (b, c, d) {
                for (var e = a.length; e--;) if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i), t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e) for (j = q(t, n), e(j, [], h, i), k = j.length; k--;) (l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;) (l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;) (l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
                return a === b
            }, g, !0), j = n(function (a) {
                return aa(b, a) > -1
            }, g, !0), k = [function (a, c, d) {
                var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                return b = null, e
            }]; e > h; h++) if (c = w.relative[a[h].type]) k = [n(o(k), c)]; else {
                if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !w.relative[a[d].type]; d++) ;
                    return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({value: " " === a[h - 2].type ? "*" : ""})).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                }
                k.push(c)
            }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0, f = a.length > 0, g = function (d, g, h, i, j) {
                var k, l, m, n = 0, o = "0", p = d && [], r = [], s = C, t = d || f && w.find.TAG("*", j),
                    u = P += null == s ? 1 : Math.random() || .1, v = t.length;
                for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                    if (f && k) {
                        for (l = 0; m = a[l++];) if (m(k, g, h)) {
                            i.push(k);
                            break
                        }
                        j && (P = u)
                    }
                    e && ((k = !m && k) && n--, d && p.push(k))
                }
                if (n += o, e && o !== n) {
                    for (l = 0; m = c[l++];) m(p, r, g, h);
                    if (d) {
                        if (n > 0) for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                        r = q(r)
                    }
                    $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                }
                return j && (P = u, C = s), p
            };
            return e ? d(g) : g
        }

        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date, O = a.document, P = 0,
            Q = 0, R = c(), S = c(), T = c(), U = function (a, b) {
                return a === b && (E = !0), 0
            }, V = 1 << 31, W = {}.hasOwnProperty, X = [], Y = X.pop, Z = X.push, $ = X.push, _ = X.slice,
            aa = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]", da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ea = da.replace("w", "w#"),
            fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
            ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
            ha = new RegExp(ca + "+", "g"), ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ja = new RegExp("^" + ca + "*," + ca + "*"), ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"), ma = new RegExp(ga),
            na = new RegExp("^" + ea + "$"), oa = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fa),
                PSEUDO: new RegExp("^" + ga),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            }, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /^[^{]+\{\s*\[native \w/,
            sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ta = /[+~]/, ua = /'|\\/g,
            va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"), wa = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, xa = function () {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (ya) {
            $ = {
                apply: X.length ? function (a, b) {
                    Z.apply(a, _.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];) ;
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function (a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function (a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function (a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function (a) {
                var b = a.replace(va, wa);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function (a) {
                var b = a.replace(va, wa);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function (a, b) {
                return I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function (a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function (a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b) for (; b = b.parentNode;) if (b === a) return !0;
                return !1
            }, U = b ? function (a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function (a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0, f = a.parentNode, h = b.parentNode, i = [a], j = [b];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode;) i.unshift(c);
                for (c = b; c = c.parentNode;) j.unshift(c);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function (a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function (a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {
            }
            return b(c, G, null, [a]).length > 0
        }, b.contains = function (a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function (a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function (a) {
            var b, c = [], d = 0, e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function (a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                }, ATTR: function (a, c, d) {
                    return function (e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [P, n, m];
                                    break
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1]; else for (; (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b));) ;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function (a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function (a) {
                    var b = [], c = [], e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function (a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;) (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }), has: d(function (a) {
                    return function (c) {
                        return b(a, c).length > 0
                    }
                }), contains: d(function (a) {
                    return a = a.replace(va, wa), function (b) {
                        return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                    }
                }), lang: d(function (a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(), function (b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === H
                }, focus: function (a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0
                }, parent: function (a) {
                    return !w.pseudos.empty(a)
                }, header: function (a) {
                    return qa.test(a.nodeName)
                }, input: function (a) {
                    return pa.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: j(function () {
                    return [0]
                }), last: j(function (a, b) {
                    return [b - 1]
                }), eq: j(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: j(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }), odd: j(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }), lt: j(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }), gt: j(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) w.pseudos[u] = h(u);
        for (u in{submit: !0, reset: !0}) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function (a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function (a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function (a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a, l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);) if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                    if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                    break
                }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function (a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function (a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    ea.find = ja, ea.expr = ja.selectors, ea.expr[":"] = ea.expr.pseudos, ea.unique = ja.uniqueSort, ea.text = ja.getText, ea.isXMLDoc = ja.isXML, ea.contains = ja.contains;
    var ka = ea.expr.match.needsContext, la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ma = /^.[^:#\[\.,]*$/;
    ea.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ea.find.matchesSelector(d, a) ? [d] : [] : ea.find.matches(a, ea.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, ea.fn.extend({
        find: function (a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) return this.pushStack(ea(a).filter(function () {
                for (b = 0; e > b; b++) if (ea.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) ea.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? ea.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        }, filter: function (a) {
            return this.pushStack(d(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(d(this, a || [], !0))
        }, is: function (a) {
            return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length
        }
    });
    var na, oa = a.document, pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, qa = ea.fn.init = function (a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pa.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof ea ? b[0] : b, ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)), la.test(c[1]) && ea.isPlainObject(b)) for (c in b) ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = oa.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2]) return na.find(a);
                this.length = 1, this[0] = d
            }
            return this.context = oa, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ea.isFunction(a) ? "undefined" != typeof na.ready ? na.ready(a) : a(ea) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), ea.makeArray(a, this))
    };
    qa.prototype = ea.fn, na = ea(oa);
    var ra = /^(?:parents|prev(?:Until|All))/, sa = {children: !0, contents: !0, next: !0, prev: !0};
    ea.extend({
        dir: function (a, b, c) {
            for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c));) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), ea.fn.extend({
        has: function (a) {
            var b, c = ea(a, this), d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++) if (ea.contains(this, c[b])) return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? ea.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), ea.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return ea.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return ea.dir(a, "parentNode", c)
        }, next: function (a) {
            return e(a, "nextSibling")
        }, prev: function (a) {
            return e(a, "previousSibling")
        }, nextAll: function (a) {
            return ea.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return ea.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return ea.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return ea.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return ea.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return ea.sibling(a.firstChild)
        }, contents: function (a) {
            return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes)
        }
    }, function (a, b) {
        ea.fn[a] = function (c, d) {
            var e = ea.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ea.filter(d, e)), this.length > 1 && (sa[a] || (e = ea.unique(e)), ra.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var ta = /\S+/g, ua = {};
    ea.Callbacks = function (a) {
        a = "string" == typeof a ? ua[a] || f(a) : ea.extend({}, a);
        var b, c, d, e, g, h, i = [], j = !a.once && [], k = function (f) {
            for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++) if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break
            }
            b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
        }, l = {
            add: function () {
                if (i) {
                    var d = i.length;
                    !function f(b) {
                        ea.each(b, function (b, c) {
                            var d = ea.type(c);
                            "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments), b ? e = i.length : c && (h = d, k(c))
                }
                return this
            }, remove: function () {
                return i && ea.each(arguments, function (a, c) {
                    for (var d; (d = ea.inArray(c, i, d)) > -1;) i.splice(d, 1), b && (e >= d && e--, g >= d && g--)
                }), this
            }, has: function (a) {
                return a ? ea.inArray(a, i) > -1 : !(!i || !i.length)
            }, empty: function () {
                return i = [], e = 0, this
            }, disable: function () {
                return i = j = c = void 0, this
            }, disabled: function () {
                return !i
            }, lock: function () {
                return j = void 0, c || l.disable(), this
            }, locked: function () {
                return !j
            }, fireWith: function (a, c) {
                return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!d
            }
        };
        return l
    }, ea.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", ea.Callbacks("once memory"), "resolved"], ["reject", "fail", ea.Callbacks("once memory"), "rejected"], ["notify", "progress", ea.Callbacks("memory")]],
                c = "pending", d = {
                    state: function () {
                        return c
                    }, always: function () {
                        return e.done(arguments).fail(arguments), this
                    }, then: function () {
                        var a = arguments;
                        return ea.Deferred(function (c) {
                            ea.each(b, function (b, f) {
                                var g = ea.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    }, promise: function (a) {
                        return null != a ? ea.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, ea.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b, c, d, e = 0, f = X.call(arguments), g = f.length,
                h = 1 !== g || a && ea.isFunction(a.promise) ? g : 0, i = 1 === h ? a : ea.Deferred(),
                j = function (a, c, d) {
                    return function (e) {
                        c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1) for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var va;
    ea.fn.ready = function (a) {
        return ea.ready.promise().done(a), this
    }, ea.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? ea.readyWait++ : ea.ready(!0)
        }, ready: function (a) {
            if (a === !0 ? !--ea.readyWait : !ea.isReady) {
                if (!oa.body) return setTimeout(ea.ready);
                ea.isReady = !0, a !== !0 && --ea.readyWait > 0 || (va.resolveWith(oa, [ea]), ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"), ea(oa).off("ready")))
            }
        }
    }), ea.ready.promise = function (b) {
        if (!va) if (va = ea.Deferred(), "complete" === oa.readyState) setTimeout(ea.ready); else if (oa.addEventListener) oa.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1); else {
            oa.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
            var c = !1;
            try {
                c = null == a.frameElement && oa.documentElement
            } catch (d) {
            }
            c && c.doScroll && !function e() {
                if (!ea.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    g(), ea.ready()
                }
            }()
        }
        return va.promise(b)
    };
    var wa, xa = "undefined";
    for (wa in ea(ca)) break;
    ca.ownLast = "0" !== wa, ca.inlineBlockNeedsLayout = !1, ea(function () {
        var a, b, c, d;
        c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
    }), function () {
        var a = oa.createElement("div");
        if (null == ca.deleteExpando) {
            ca.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                ca.deleteExpando = !1
            }
        }
        a = null
    }(), ea.acceptData = function (a) {
        var b = ea.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    };
    var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, za = /([A-Z])/g;
    ea.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (a) {
            return a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando], !!a && !j(a)
        },
        data: function (a, b, c) {
            return k(a, b, c)
        },
        removeData: function (a, b) {
            return l(a, b)
        },
        _data: function (a, b, c) {
            return k(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return l(a, b, !0)
        }
    }), ea.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = ea.data(f), 1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = ea.camelCase(d.slice(5)), i(f, d, e[d])));
                    ea._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                ea.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                ea.data(this, a, b)
            }) : f ? i(f, a, ea.data(f, a)) : void 0
        }, removeData: function (a) {
            return this.each(function () {
                ea.removeData(this, a)
            })
        }
    }), ea.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ea._data(a, b), c && (!d || ea.isArray(c) ? d = ea._data(a, b, ea.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = ea.queue(a, b), d = c.length, e = c.shift(), f = ea._queueHooks(a, b), g = function () {
                ea.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return ea._data(a, c) || ea._data(a, c, {
                empty: ea.Callbacks("once memory").add(function () {
                    ea._removeData(a, b + "queue"), ea._removeData(a, c)
                })
            })
        }
    }), ea.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ea.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = ea.queue(this, a, b);
                ea._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                ea.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = ea.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ea._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ba = ["Top", "Right", "Bottom", "Left"],
        Ca = function (a, b) {
            return a = b || a, "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a)
        }, Da = ea.access = function (a, b, c, d, e, f, g) {
            var h = 0, i = a.length, j = null == c;
            if ("object" === ea.type(c)) {
                e = !0;
                for (h in c) ea.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, ea.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(ea(a), c)
            })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        }, Ea = /^(?:checkbox|radio)$/i;
    !function () {
        var a = oa.createElement("input"), b = oa.createElement("div"), c = oa.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ca.leadingWhitespace = 3 === b.firstChild.nodeType, ca.tbody = !b.getElementsByTagName("tbody").length, ca.htmlSerialize = !!b.getElementsByTagName("link").length, ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), ca.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", ca.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, ca.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
            ca.noCloneEvent = !1
        }), b.cloneNode(!0).click()), null == ca.deleteExpando) {
            ca.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                ca.deleteExpando = !1
            }
        }
    }(), function () {
        var b, c, d = oa.createElement("div");
        for (b in{
            submit: !0,
            change: !0,
            focusin: !0
        }) c = "on" + b, (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), ca[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var Fa = /^(?:input|select|textarea)$/i, Ga = /^key/, Ha = /^(?:mouse|pointer|contextmenu)|click/,
        Ia = /^(?:focusinfocus|focusoutblur)$/, Ja = /^([^.]*)(?:\.(.+)|)$/;
    ea.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ea._data(a);
            if (q) {
                for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = ea.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function (a) {
                    return typeof ea === xa || a && ea.event.triggered === a.type ? void 0 : ea.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(ta) || [""], h = b.length; h--;) f = Ja.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = ea.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = ea.event.special[n] || {}, l = ea.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && ea.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), ea.event.global[n] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ea.hasData(a) && ea._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(ta) || [""], j = b.length; j--;) if (h = Ja.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = ea.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ea.removeEvent(a, n, q.handle), delete k[n])
                } else for (n in k) ea.event.remove(a, n + b[j], c, d, !0);
                ea.isEmptyObject(k) && (delete q.handle, ea._removeData(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || oa], n = ba.call(b, "type") ? b.type : b,
                o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = k = d = d || oa, 3 !== d.nodeType && 8 !== d.nodeType && !Ia.test(n + ea.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[ea.expando] ? b : new ea.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : ea.makeArray(c, [b]), j = ea.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                if (!e && !j.noBubble && !ea.isWindow(d)) {
                    for (i = j.delegateType || n, Ia.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
                    k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a)
                }
                for (l = 0; (h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && ea.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d)) {
                    k = d[g], k && (d[g] = null), ea.event.triggered = n;
                    try {
                        d[n]()
                    } catch (p) {
                    }
                    ea.event.triggered = void 0, k && (d[g] = k)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = ea.event.fix(a);
            var b, c, d, e, f, g = [], h = X.call(arguments), i = (ea._data(this, "events") || {})[a.type] || [],
                j = ea.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = ea.event.handlers.call(this, a, i), b = 0; (e = g[b++]) && !a.isPropagationStopped();) for (a.currentTarget = e.elem, f = 0; (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();) (!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [i]).length), e[c] && e.push(d);
                e.length && g.push({elem: i, handlers: e})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        fix: function (a) {
            if (a[ea.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ha.test(e) ? this.mouseHooks : Ga.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ea.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || oa), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || oa, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== o() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === o() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return ea.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return ea.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = ea.extend(new ea.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, ea.removeEvent = oa.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === xa && (a[d] = null), a.detachEvent(d, c))
    }, ea.Event = function (a, b) {
        return this instanceof ea.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m : n) : this.type = a, b && ea.extend(this, b), this.timeStamp = a && a.timeStamp || ea.now(), void(this[ea.expando] = !0)) : new ea.Event(a, b)
    }, ea.Event.prototype = {
        isDefaultPrevented: n,
        isPropagationStopped: n,
        isImmediatePropagationStopped: n,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = m, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ea.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        ea.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !ea.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), ca.submitBubbles || (ea.event.special.submit = {
        setup: function () {
            return ea.nodeName(this, "form") ? !1 : void ea.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target, c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
                c && !ea._data(c, "submitBubbles") && (ea.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), ea._data(c, "submitBubbles", !0))
            })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            return ea.nodeName(this, "form") ? !1 : void ea.event.remove(this, "._submit")
        }
    }), ca.changeBubbles || (ea.event.special.change = {
        setup: function () {
            return Fa.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ea.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), ea.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), ea.event.simulate("change", this, a, !0)
            })), !1) : void ea.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                Fa.test(b.nodeName) && !ea._data(b, "changeBubbles") && (ea.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0)
                }), ea._data(b, "changeBubbles", !0))
            })
        }, handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return ea.event.remove(this, "._change"), !Fa.test(this.nodeName)
        }
    }), ca.focusinBubbles || ea.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            ea.event.simulate(b, a.target, ea.event.fix(a), !0)
        };
        ea.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = ea._data(d, b);
                e || d.addEventListener(a, c, !0), ea._data(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = ea._data(d, b) - 1;
                e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0), ea._removeData(d, b))
            }
        }
    }), ea.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = n; else if (!d) return this;
            return 1 === e && (g = d, d = function (a) {
                return ea().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = ea.guid++)), this.each(function () {
                ea.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), this.each(function () {
                ea.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                ea.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? ea.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        La = / jQuery\d+="(?:null|\d+)"/g, Ma = new RegExp("<(?:" + Ka + ")[\\s/>]", "i"), Na = /^\s+/,
        Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Pa = /<([\w:]+)/,
        Qa = /<tbody/i, Ra = /<|&#?\w+;/, Sa = /<(?:script|style|link)/i, Ta = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ua = /^$|\/(?:java|ecma)script/i, Va = /^true\/(.*)/, Wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Xa = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ca.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, Ya = p(oa), Za = Ya.appendChild(oa.createElement("div"));
    Xa.optgroup = Xa.option, Xa.tbody = Xa.tfoot = Xa.colgroup = Xa.caption = Xa.thead, Xa.th = Xa.td, ea.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = ea.contains(a.ownerDocument, a);
            if (ca.html5Clone || ea.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML, Za.removeChild(f = Za.firstChild)), !(ca.noCloneEvent && ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ea.isXMLDoc(a))) for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
            if (b) if (c) for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]); else w(a, f);
            return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++) if (f = a[o], f || 0 === f) if ("object" === ea.type(f)) ea.merge(n, f.nodeType ? [f] : f); else if (Ra.test(f)) {
                for (h = h || m.appendChild(b.createElement("div")), i = (Pa.exec(f) || ["", ""])[1].toLowerCase(), k = Xa[i] || Xa._default, h.innerHTML = k[1] + f.replace(Oa, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                if (!ca.leadingWhitespace && Na.test(f) && n.push(b.createTextNode(Na.exec(f)[0])), !ca.tbody) for (f = "table" !== i || Qa.test(f) ? "<table>" !== k[1] || Qa.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ea.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (ea.merge(n, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = m.lastChild
            } else n.push(b.createTextNode(f));
            for (h && m.removeChild(h), ca.appendChecked || ea.grep(q(n, "input"), r), o = 0; f = n[o++];) if ((!d || -1 === ea.inArray(f, d)) && (g = ea.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c)) for (e = 0; f = h[e++];) Ua.test(f.type || "") && c.push(f);
            return h = null, m
        }, cleanData: function (a, b) {
            for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++) if ((b || ea.acceptData(c)) && (e = c[h], f = e && i[e])) {
                if (f.events) for (d in f.events) k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
                i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== xa ? c.removeAttribute(h) : c[h] = null, W.push(e))
            }
        }
    }), ea.fn.extend({
        text: function (a) {
            return Da(this, function (a) {
                return void 0 === a ? ea.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oa).createTextNode(a))
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = s(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = s(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ea.cleanData(q(c)), c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                a.options && ea.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return ea.clone(this, a, b)
            })
        }, html: function (a) {
            return Da(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(La, "") : void 0;
                if (!("string" != typeof a || Sa.test(a) || !ca.htmlSerialize && Ma.test(a) || !ca.leadingWhitespace && Na.test(a) || Xa[(Pa.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Oa, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (ea.cleanData(q(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, ea.cleanData(q(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = Y.apply([], a);
            var c, d, e, f, g, h, i = 0, j = this.length, k = this, l = j - 1, m = a[0], n = ea.isFunction(m);
            if (n || j > 1 && "string" == typeof m && !ca.checkClone && Ta.test(m)) return this.each(function (c) {
                var d = k.eq(c);
                n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (h = ea.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
                for (f = ea.map(q(h, "script"), t), e = f.length; j > i; i++) d = h, i !== l && (d = ea.clone(d, !0, !0), e && ea.merge(f, q(d, "script"))), b.call(this[i], d, i);
                if (e) for (g = f[f.length - 1].ownerDocument, ea.map(f, u), i = 0; e > i; i++) d = f[i], Ua.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wa, "")));
                h = c = null
            }
            return this
        }
    }), ea.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        ea.fn[a] = function (a) {
            for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ea(f[d])[b](c), Z.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var $a, _a = {};
    !function () {
        var a;
        ca.shrinkWrapBlocks = function () {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = oa.getElementsByTagName("body")[0], c && c.style ? (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(oa.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var ab, bb, cb = /^margin/, db = new RegExp("^(" + Aa + ")(?!px)[a-z%]+$", "i"), eb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (ab = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }, bb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || ab(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)), db.test(g) && cb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : oa.documentElement.currentStyle && (ab = function (a) {
        return a.currentStyle
    }, bb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || ab(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), db.test(g) && !eb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    }), !function () {
        function b() {
            var b, c, d, e;
            c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f = g = !1, i = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top, g = "4px" === (a.getComputedStyle(b, null) || {width: "4px"}).width, e = b.appendChild(oa.createElement("div")), e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", b.style.width = "1px", i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(e)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = b.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", h = 0 === e[0].offsetHeight, h && (e[0].style.display = "", e[1].style.display = "none", h = 0 === e[0].offsetHeight), c.removeChild(d))
        }

        var c, d, e, f, g, h, i;
        c = oa.createElement("div"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = c.getElementsByTagName("a")[0], (d = e && e.style) && (d.cssText = "float:left;opacity:.5", ca.opacity = "0.5" === d.opacity, ca.cssFloat = !!d.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ca.clearCloneStyle = "content-box" === c.style.backgroundClip, ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing, ea.extend(ca, {
            reliableHiddenOffsets: function () {
                return null == h && b(), h
            }, boxSizingReliable: function () {
                return null == g && b(), g
            }, pixelPosition: function () {
                return null == f && b(), f
            }, reliableMarginRight: function () {
                return null == i && b(), i
            }
        }))
    }(), ea.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var fb = /alpha\([^)]*\)/i, gb = /opacity\s*=\s*([^)]*)/, hb = /^(none|table(?!-c[ea]).+)/,
        ib = new RegExp("^(" + Aa + ")(.*)$", "i"), jb = new RegExp("^([+-])=(" + Aa + ")", "i"),
        kb = {position: "absolute", visibility: "hidden", display: "block"},
        lb = {letterSpacing: "0", fontWeight: "400"}, mb = ["Webkit", "O", "Moz", "ms"];
    ea.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = bb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": ca.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = ea.camelCase(b), i = a.style;
                if (b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h)), g = ea.cssHooks[b] || ea.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = jb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"), ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {
                }
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = ea.camelCase(b);
            return b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h)), g = ea.cssHooks[b] || ea.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = bb(a, b, d)), "normal" === f && b in lb && (f = lb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || ea.isNumeric(e) ? e || 0 : f) : f
        }
    }), ea.each(["height", "width"], function (a, b) {
        ea.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? hb.test(ea.css(a, "display")) && 0 === a.offsetWidth ? ea.swap(a, kb, function () {
                    return F(a, b, d)
                }) : F(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && ab(a);
                return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), ca.opacity || (ea.cssHooks.opacity = {
        get: function (a, b) {
            return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === ea.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
        }
    }), ea.cssHooks.marginRight = A(ca.reliableMarginRight, function (a, b) {
        return b ? ea.swap(a, {display: "inline-block"}, bb, [a, "marginRight"]) : void 0
    }), ea.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        ea.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, cb.test(a) || (ea.cssHooks[a + b].set = D)
    }), ea.fn.extend({
        css: function (a, b) {
            return Da(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (ea.isArray(b)) {
                    for (d = ab(a), e = b.length; e > g; g++) f[b[g]] = ea.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return C(this, !0)
        }, hide: function () {
            return C(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                Ca(this) ? ea(this).show() : ea(this).hide()
            })
        }
    }), ea.Tween = G, G.prototype = {
        constructor: G, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ea.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = G.propHooks[this.prop];
            return a && a.get ? a.get(this) : G.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = G.propHooks[this.prop];
            return this.pos = b = this.options.duration ? ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this
        }
    }, G.prototype.init.prototype = G.prototype, G.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ea.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, ea.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, ea.fx = G.prototype.init, ea.fx.step = {};
    var nb, ob, pb = /^(?:toggle|show|hide)$/, qb = new RegExp("^(?:([+-])=|)(" + Aa + ")([a-z%]*)$", "i"),
        rb = /queueHooks$/, sb = [K], tb = {
            "*": [function (a, b) {
                var c = this.createTween(a, b), d = c.cur(), e = qb.exec(b), f = e && e[3] || (ea.cssNumber[a] ? "" : "px"),
                    g = (ea.cssNumber[a] || "px" !== f && +d) && qb.exec(ea.css(c.elem, a)), h = 1, i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, ea.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    ea.Animation = ea.extend(M, {
        tweener: function (a, b) {
            ea.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], tb[c] = tb[c] || [], tb[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? sb.unshift(a) : sb.push(a)
        }
    }), ea.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? ea.extend({}, a) : {
            complete: c || !c && b || ea.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !ea.isFunction(b) && b
        };
        return d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            ea.isFunction(d.old) && d.old.call(this), d.queue && ea.dequeue(this, d.queue)
        }, d
    }, ea.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(Ca).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = ea.isEmptyObject(a), f = ea.speed(b, c, d), g = function () {
                var b = M(this, ea.extend({}, a), f);
                (e || ea._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = ea.timers, g = ea._data(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && rb.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && ea.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = ea._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = ea.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, ea.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), ea.each(["toggle", "show", "hide"], function (a, b) {
        var c = ea.fn[b];
        ea.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
        }
    }), ea.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        ea.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), ea.timers = [], ea.fx.tick = function () {
        var a, b = ea.timers, c = 0;
        for (nb = ea.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || ea.fx.stop(), nb = void 0
    }, ea.fx.timer = function (a) {
        ea.timers.push(a), a() ? ea.fx.start() : ea.timers.pop()
    }, ea.fx.interval = 13, ea.fx.start = function () {
        ob || (ob = setInterval(ea.fx.tick, ea.fx.interval))
    }, ea.fx.stop = function () {
        clearInterval(ob), ob = null
    }, ea.fx.speeds = {slow: 600, fast: 200, _default: 400}, ea.fn.delay = function (a, b) {
        return a = ea.fx ? ea.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a, b, c, d, e;
        b = oa.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = oa.createElement("select"), e = c.appendChild(oa.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", ca.getSetAttribute = "t" !== b.className, ca.style = /top/.test(d.getAttribute("style")), ca.hrefNormalized = "/a" === d.getAttribute("href"), ca.checkOn = !!a.value, ca.optSelected = e.selected, ca.enctype = !!oa.createElement("form").enctype, c.disabled = !0, ca.optDisabled = !e.disabled, a = oa.createElement("input"), a.setAttribute("value", ""), ca.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), ca.radioValue = "t" === a.value
    }();
    var ub = /\r/g;
    ea.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = ea.isFunction(a), this.each(function (c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, ea(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ea.isArray(e) && (e = ea.map(e, function (a) {
                    return null == a ? "" : a + ""
                })), b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)) : void 0
        }
    }), ea.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = ea.find.attr(a, "value");
                    return null != b ? b : ea.trim(ea.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], !(!c.selected && i !== e || (ca.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ea.nodeName(c.parentNode, "optgroup"))) {
                        if (b = ea(c).val(), f) return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--;) if (d = e[g], ea.inArray(ea.valHooks.option.get(d), f) >= 0) try {
                        d.selected = c = !0
                    } catch (h) {
                        d.scrollHeight
                    } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), ea.each(["radio", "checkbox"], function () {
        ea.valHooks[this] = {
            set: function (a, b) {
                return ea.isArray(b) ? a.checked = ea.inArray(ea(a).val(), b) >= 0 : void 0
            }
        }, ca.checkOn || (ea.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var vb, wb, xb = ea.expr.attrHandle, yb = /^(?:checked|selected)$/i, zb = ca.getSetAttribute, Ab = ca.input;
    ea.fn.extend({
        attr: function (a, b) {
            return Da(this, ea.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                ea.removeAttr(this, a)
            })
        }
    }), ea.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === xa ? ea.prop(a, b, c) : (1 === f && ea.isXMLDoc(a) || (b = b.toLowerCase(), d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? wb : vb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = ea.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void ea.removeAttr(a, b)) : void 0
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(ta);
            if (f && 1 === a.nodeType) for (; c = f[e++];) d = ea.propFix[c] || c, ea.expr.match.bool.test(c) ? Ab && zb || !yb.test(c) ? a[d] = !1 : a[ea.camelCase("default-" + c)] = a[d] = !1 : ea.attr(a, c, ""), a.removeAttribute(zb ? c : d)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), wb = {
        set: function (a, b, c) {
            return b === !1 ? ea.removeAttr(a, c) : Ab && zb || !yb.test(c) ? a.setAttribute(!zb && ea.propFix[c] || c, c) : a[ea.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, ea.each(ea.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = xb[b] || ea.find.attr;
        xb[b] = Ab && zb || !yb.test(b) ? function (a, b, d) {
            var e, f;
            return d || (f = xb[b], xb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, xb[b] = f), e
        } : function (a, b, c) {
            return c ? void 0 : a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), Ab && zb || (ea.attrHooks.value = {
        set: function (a, b, c) {
            return ea.nodeName(a, "input") ? void(a.defaultValue = b) : vb && vb.set(a, b, c)
        }
    }), zb || (vb = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, xb.id = xb.name = xb.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, ea.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        }, set: vb.set
    }, ea.attrHooks.contenteditable = {
        set: function (a, b, c) {
            vb.set(a, "" === b ? !1 : b, c)
        }
    }, ea.each(["width", "height"], function (a, b) {
        ea.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), ca.style || (ea.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        }, set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Bb = /^(?:input|select|textarea|button|object)$/i, Cb = /^(?:a|area)$/i;
    ea.fn.extend({
        prop: function (a, b) {
            return Da(this, ea.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return a = ea.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {
                }
            })
        }
    }), ea.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !ea.isXMLDoc(a), f && (b = ea.propFix[b] || b, e = ea.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = ea.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Bb.test(a.nodeName) || Cb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), ca.hrefNormalized || ea.each(["href", "src"], function (a, b) {
        ea.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), ca.optSelected || (ea.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), ea.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ea.propFix[this.toLowerCase()] = this
    }), ca.enctype || (ea.propFix.enctype = "encoding");
    var Db = /[\t\r\n\f]/g;
    ea.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (ea.isFunction(a)) return this.each(function (b) {
                ea(this).addClass(a.call(this, b, this.className))
            });
            if (j) for (b = (a || "").match(ta) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")) {
                for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = ea.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (ea.isFunction(a)) return this.each(function (b) {
                ea(this).removeClass(a.call(this, b, this.className))
            });
            if (j) for (b = (a || "").match(ta) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")) {
                for (f = 0; e = b[f++];) for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                g = a ? ea.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(ea.isFunction(a) ? function (c) {
                ea(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) for (var b, d = 0, e = ea(this), f = a.match(ta) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === xa || "boolean" === c) && (this.className && ea._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        ea.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), ea.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Eb = ea.now(), Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ea.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null, e = ea.trim(b + "");
        return e && !ea.trim(e.replace(Gb, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : ea.error("Invalid JSON: " + b)
    }, ea.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b), c
    };
    var Hb, Ib, Jb = /#.*$/, Kb = /([?&])_=[^&]*/, Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nb = /^(?:GET|HEAD)$/, Ob = /^\/\//,
        Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Qb = {}, Rb = {}, Sb = "*/".concat("*");
    try {
        Ib = location.href
    } catch (Tb) {
        Ib = oa.createElement("a"), Ib.href = "", Ib = Ib.href
    }
    Hb = Pb.exec(Ib.toLowerCase()) || [], ea.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ib,
            type: "GET",
            isLocal: Mb.test(Hb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": ea.parseJSON, "text xml": ea.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a)
        },
        ajaxPrefilter: N(Qb),
        ajaxTransport: N(Rb),
        ajax: function (a, b) {
            function c(a, b, c, d) {
                var e, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (ea.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (ea.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --ea.active || ea.event.trigger("ajaxStop")))
            }

            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b), m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event, o = ea.Deferred(),
                p = ea.Callbacks("once memory"), q = l.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0, getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!k) for (k = {}; b = Lb.exec(g);) k[b[1].toLowerCase()] = b[2];
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    }, getAllResponseHeaders: function () {
                        return 2 === t ? g : null
                    }, setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    }, overrideMimeType: function (a) {
                        return t || (l.mimeType = a), this
                    }, statusCode: function (a) {
                        var b;
                        if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                        return this
                    }, abort: function (a) {
                        var b = a || u;
                        return j && j.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(ta) || [""], null == l.crossDomain && (d = Pb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)), O(Qb, l, b, v), 2 === t) return v;
            i = ea.event && l.global, i && 0 === ea.active++ && ea.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Nb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]), ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (e in{success: 1, error: 1, complete: 1}) v[e](l[e]);
            if (j = O(Rb, l, b, v)) {
                v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, j.send(r, c)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function (a, b, c) {
            return ea.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return ea.get(a, void 0, b, "script")
        }
    }), ea.each(["get", "post"], function (a, b) {
        ea[b] = function (a, c, d, e) {
            return ea.isFunction(c) && (e = e || d, d = c, c = void 0), ea.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), ea._evalUrl = function (a) {
        return ea.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, ea.fn.extend({
        wrapAll: function (a) {
            if (ea.isFunction(a)) return this.each(function (b) {
                ea(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return this.each(ea.isFunction(a) ? function (b) {
                ea(this).wrapInner(a.call(this, b))
            } : function () {
                var b = ea(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = ea.isFunction(a);
            return this.each(function (c) {
                ea(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ea.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display"))
    }, ea.expr.filters.visible = function (a) {
        return !ea.expr.filters.hidden(a)
    };
    var Ub = /%20/g, Vb = /\[\]$/, Wb = /\r?\n/g, Xb = /^(?:submit|button|image|reset|file)$/i,
        Yb = /^(?:input|select|textarea|keygen)/i;
    ea.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = ea.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional), ea.isArray(a) || a.jquery && !ea.isPlainObject(a)) ea.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a) S(c, a[c], b, e);
        return d.join("&").replace(Ub, "+")
    }, ea.fn.extend({
        serialize: function () {
            return ea.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = ea.prop(this, "elements");
                return a ? ea.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !ea(this).is(":disabled") && Yb.test(this.nodeName) && !Xb.test(a) && (this.checked || !Ea.test(a))
            }).map(function (a, b) {
                var c = ea(this).val();
                return null == c ? null : ea.isArray(c) ? ea.map(c, function (a) {
                    return {name: b.name, value: a.replace(Wb, "\r\n")}
                }) : {name: b.name, value: c.replace(Wb, "\r\n")}
            }).get()
        }
    }), ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
    } : T;
    var Zb = 0, $b = {}, _b = ea.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in $b) $b[a](void 0, !0)
    }), ca.cors = !!_b && "withCredentials" in _b, _b = ca.ajax = !!_b, _b && ea.ajaxTransport(function (a) {
        if (!a.crossDomain || ca.cors) {
            var b;
            return {
                send: function (c, d) {
                    var e, f = a.xhr(), g = ++Zb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState)) if (delete $b[g], b = void 0, f.onreadystatechange = ea.noop, e) 4 !== f.readyState && f.abort(); else {
                            j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                            try {
                                i = f.statusText
                            } catch (k) {
                                i = ""
                            }
                            h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                        }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = $b[g] = b : b()
                }, abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    }), ea.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return ea.globalEval(a), a
            }
        }
    }), ea.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), ea.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = oa.head || ea("head")[0] || oa.documentElement;
            return {
                send: function (d, e) {
                    b = oa.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                }, abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var ac = [], bc = /(=)\?(?=&|$)|\?\?/;
    ea.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = ac.pop() || ea.expando + "_" + Eb++;
            return this[a] = !0, a
        }
    }), ea.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g,
            h = b.jsonp !== !1 && (bc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || ea.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ac.push(e)), g && ea.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), ea.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || oa;
        var d = la.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = ea.buildFragment([a], b, e), e && e.length && ea(e).remove(), ea.merge([], d.childNodes))
    };
    var cc = ea.fn.load;
    ea.fn.load = function (a, b, c) {
        if ("string" != typeof a && cc) return cc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = ea.trim(a.slice(h, a.length)), a = a.slice(0, h)), ea.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && ea.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function (a) {
            e = arguments, g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        ea.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), ea.expr.filters.animated = function (a) {
        return ea.grep(ea.timers, function (b) {
            return a === b.elem
        }).length
    };
    var dc = a.document.documentElement;
    ea.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = ea.css(a, "position"), l = ea(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = ea.css(a, "top"), i = ea.css(a, "left"),
                j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ea.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, ea.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                ea.offset.setOffset(this, a, b)
            });
            var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
            return f ? (b = f.documentElement, ea.contains(b, e) ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()), c = V(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d) : void 0
        }, position: function () {
            if (this[0]) {
                var a, b, c = {top: 0, left: 0}, d = this[0];
                return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ea.nodeName(a[0], "html") || (c = a.offset()), c.top += ea.css(a[0], "borderTopWidth", !0), c.left += ea.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - ea.css(d, "marginTop", !0),
                    left: b.left - c.left - ea.css(d, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || dc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position");) a = a.offsetParent;
                return a || dc
            })
        }
    }), ea.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = /Y/.test(b);
        ea.fn[a] = function (d) {
            return Da(this, function (a, d, e) {
                var f = V(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), ea.each(["top", "left"], function (a, b) {
        ea.cssHooks[b] = A(ca.pixelPosition, function (a, c) {
            return c ? (c = bb(a, b), db.test(c) ? ea(a).position()[b] + "px" : c) : void 0
        })
    }), ea.each({Height: "height", Width: "width"}, function (a, b) {
        ea.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            ea.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Da(this, function (b, c, d) {
                    var e;
                    return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), ea.fn.size = function () {
        return this.length
    }, ea.fn.andSelf = ea.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ea
    });
    var ec = a.jQuery, fc = a.$;
    return ea.noConflict = function (b) {
        return a.$ === ea && (a.$ = fc), b && a.jQuery === ea && (a.jQuery = ec), ea
    }, typeof b === xa && (a.jQuery = a.$ = ea), ea
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    },
    easeInQuad: function (a, b, c, d, e) {
        return d * (b /= e) * b + c
    },
    easeOutQuad: function (a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c
    },
    easeInOutQuad: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function (a, b, c, d, e) {
        return d * (b /= e) * b * b + c
    },
    easeOutCubic: function (a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function (a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
    },
    easeOutQuart: function (a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function (a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
    },
    easeOutQuint: function (a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function (a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function (a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function (a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExpo: function (a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function (a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    },
    easeInOutExpo: function (a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function (a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    },
    easeOutCirc: function (a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function (a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c
    },
    easeOutElastic: function (a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c
    },
    easeInOutElastic: function (a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b) return c;
        if (2 == (b /= e / 2)) return c + d;
        if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return 1 > b ? -.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c
    },
    easeInBack: function (a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
    },
    easeOutBack: function (a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function (a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * (b * b * (((f *= 1.525) + 1) * b - f)) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function (a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function (a, b, c, d, e) {
        return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    },
    easeInOutBounce: function (a, b, c, d, e) {
        return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
    }
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), +function (a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {end: b[c]};
        return !1
    }

    a.fn.emulateTransitionEnd = function (b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }

    var c = '[data-dismiss="alert"]', d = function (b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }

        var e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }

    var c = function (b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.7", c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function (b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
        }, this), 0)
    }, c.prototype.toggle = function () {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target).closest(".btn");
        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }

    var c = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function (a) {
        var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval,
            h = "next" == b ? "left" : "right", i = this;
        if (f.hasClass("active")) return this.sliding = !1;
        var j = f[0], k = a.Event("slide.bs.carousel", {relatedTarget: j, direction: h});
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {relatedTarget: j, direction: h});
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this
    };
    var e = function (c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }

    var d = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {toggle: !0}, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition) return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function () {
            var d = a(this), e = b(d), f = {relatedTarget: this};
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function () {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }

    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e), g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {relatedTarget: this};
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function (c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d), g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a", i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), +function (a) {
    "use strict";

    function b(b, d) {
        return this.each(function () {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }

    var c = function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function (b) {
        var d = this, e = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {relatedTarget: b});
            e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function (b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function () {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function () {
        for (var a in this.inState) if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this, f = this.tip(), g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i, j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
            if (j) {
                var n = h, o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function () {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function (a) {
                d.css({top: Math.round(a.top), left: Math.round(a.left)})
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }

        var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {width: e.right - e.left, height: e.bottom - e.top}));
        var f = window.SVGElement && c instanceof window.SVGElement, g = d ? {top: 0, left: 0} : f ? null : b.offset(),
            h = {scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()},
            i = d ? {width: a(window).width(), height: a(window).height()} : null;
        return a.extend({}, e, h, i, g)
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {top: b.top + b.height / 2 - d / 2, left: b.left - c} : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {top: 0, left: 0};
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function () {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function () {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this
    }
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
            !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function () {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this
    }
}(jQuery), +function (a) {
    "use strict";

    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }

    b.VERSION = "3.3.7", b.DEFAULTS = {offset: 10}, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function () {
        var b = this, c = "offset", d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var b = a(this), e = b.data("target") || b.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return this.activeTarget = null, this.clear();
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {relatedTarget: b[0]}),
                g = a.Event("show.bs.tab", {relatedTarget: e[0]});
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({type: "hidden.bs.tab", relatedTarget: b[0]}), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }

        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this
    };
    var e = function (c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), +function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e && "top";
        if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(a - d >= e + g) && "bottom";
        var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d && "bottom"
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({top: g - b - f})
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery), function () {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K,
        L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice, Y = {}.hasOwnProperty, Z = function (a, b) {
            function c() {
                this.constructor = a
            }

            for (var d in b) Y.call(b, d) && (a[d] = b[d]);
            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
        }, $ = [].indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
            return -1
        };
    for (u = {
        catchupTime: 100,
        initialRate: .03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: {checkInterval: 100, selectors: ["body"]},
        eventLag: {minSamples: 10, sampleCount: 3, lagThreshold: 3},
        ajax: {trackMethods: ["GET"], trackWebSockets: !0, ignoreURLs: []}
    }, C = function () {
        var a;
        return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date
    }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function (a) {
        return setTimeout(a, 50)
    }, t = function (a) {
        return clearTimeout(a)
    }), G = function (a) {
        var b, c;
        return b = C(), (c = function () {
            var d;
            return d = C() - b, d >= 33 ? (b = C(), a(d, function () {
                return E(c)
            })) : setTimeout(c, 33 - d)
        })()
    }, F = function () {
        var a, b, c;
        return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
    }, v = function () {
        var a, b, c, d, e, f, g;
        for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++) if (c = d[f]) for (a in c) Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
        return b
    }, q = function (a) {
        var b, c, d, e, f;
        for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
        return c / b
    }, x = function (a, b) {
        var c, d, e;
        if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
            if (c = e.getAttribute("data-pace-" + a), !b) return c;
            try {
                return JSON.parse(c)
            } catch (f) {
                return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0
            }
        }
    }, g = function () {
        function a() {
        }

        return a.prototype.on = function (a, b, c, d) {
            var e;
            return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
                handler: b,
                ctx: c,
                once: d
            })
        }, a.prototype.once = function (a, b, c) {
            return this.on(a, b, c, !0)
        }, a.prototype.off = function (a, b) {
            var c, d, e;
            if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                if (null == b) return delete this.bindings[a];
                for (c = 0, e = []; c < this.bindings[a].length;) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
                return e
            }
        }, a.prototype.trigger = function () {
            var a, b, c, d, e, f, g, h, i;
            if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
                for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
                return i
            }
        }, a
    }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) K = U[Q], D[K] === !0 && (D[K] = u[K]);
    i = function (a) {
        function b() {
            return V = b.__super__.constructor.apply(this, arguments)
        }

        return Z(b, a), b
    }(Error), b = function () {
        function a() {
            this.progress = 0
        }

        return a.prototype.getElement = function () {
            var a;
            if (null == this.el) {
                if (a = document.querySelector(D.target), !a) throw new i;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el)
            }
            return this.el
        }, a.prototype.finish = function () {
            var a;
            return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
        }, a.prototype.update = function (a) {
            return this.progress = a, this.render()
        }, a.prototype.destroy = function () {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (a) {
                i = a
            }
            return this.el = void 0
        }, a.prototype.render = function () {
            var a, b, c, d, e, f, g;
            if (null == document.querySelector(D.target)) return !1;
            for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) b = g[e], a.children[0].style[b] = d;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress
        }, a.prototype.done = function () {
            return this.progress >= 100
        }, a
    }(), h = function () {
        function a() {
            this.bindings = {}
        }

        return a.prototype.trigger = function (a, b) {
            var c, d, e, f, g;
            if (null != this.bindings[a]) {
                for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
                return g
            }
        }, a.prototype.on = function (a, b) {
            var c;
            return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b)
        }, a
    }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function (a, b) {
        var c, d, e, f;
        f = [];
        for (d in b.prototype) try {
            e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0)
        } catch (g) {
            c = g
        }
        return f
    }, A = [], j.ignore = function () {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c
    }, j.track = function () {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c
    }, J = function (a) {
        var b;
        if (null == a && (a = "GET"), "track" === A[0]) return "force";
        if (!A.length && D.ajax) {
            if ("socket" === a && D.ajax.trackWebSockets) return !0;
            if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0
        }
        return !1
    }, k = function (a) {
        function b() {
            var a, c = this;
            b.__super__.constructor.apply(this, arguments), a = function (a) {
                var b;
                return b = a.open, a.open = function (d, e) {
                    return J(d) && c.trigger("request", {type: d, url: e, request: a}), b.apply(a, arguments)
                }
            }, window.XMLHttpRequest = function (b) {
                var c;
                return c = new P(b), a(c), c
            };
            try {
                w(window.XMLHttpRequest, P)
            } catch (d) {
            }
            if (null != O) {
                window.XDomainRequest = function () {
                    var b;
                    return b = new O, a(b), b
                };
                try {
                    w(window.XDomainRequest, O)
                } catch (d) {
                }
            }
            if (null != N && D.ajax.trackWebSockets) {
                window.WebSocket = function (a, b) {
                    var d;
                    return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
                        type: "socket",
                        url: a,
                        protocols: b,
                        request: d
                    }), d
                };
                try {
                    w(window.WebSocket, N)
                } catch (d) {
                }
            }
        }

        return Z(b, a), b
    }(h), R = null, y = function () {
        return null == R && (R = new k), R
    }, I = function (a) {
        var b, c, d, e;
        for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++) if (b = e[c], "string" == typeof b) {
            if (-1 !== a.indexOf(b)) return !0
        } else if (b.test(a)) return !0;
        return !1
    }, y().on("request", function (b) {
        var c, d, e, f, g;
        return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () {
            var b, c, g, h, i, k;
            if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
                for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
                    if (K = i[c], K instanceof a) {
                        K.watch.apply(K, d);
                        break
                    }
                    k.push(void 0)
                }
                return k
            }
        }, c))
    }), a = function () {
        function a() {
            var a = this;
            this.elements = [], y().on("request", function () {
                return a.watch.apply(a, arguments)
            })
        }

        return a.prototype.watch = function (a) {
            var b, c, d, e;
            return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c))
        }, a
    }(), o = function () {
        function a(a) {
            var b, c, d, e, f, g, h = this;
            if (this.progress = 0, null != window.ProgressEvent) for (c = null, a.addEventListener("progress", function (a) {
                return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2
            }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function () {
                return h.progress = 100
            }, !1); else f = a.onreadystatechange, a.onreadystatechange = function () {
                var b;
                return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0
            }
        }

        return a
    }(), n = function () {
        function a(a) {
            var b, c, d, e, f = this;
            for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function () {
                return f.progress = 100
            }, !1)
        }

        return a
    }(), d = function () {
        function a(a) {
            var b, c, d, f;
            for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b))
        }

        return a
    }(), e = function () {
        function a(a) {
            this.selector = a, this.progress = 0, this.check()
        }

        return a.prototype.check = function () {
            var a = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
                return a.check()
            }, D.elements.checkInterval)
        }, a.prototype.done = function () {
            return this.progress = 100
        }, a
    }(), c = function () {
        function a() {
            var a, b, c = this;
            this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
                return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0
            }
        }

        return a.prototype.states = {loading: 0, interactive: 50, complete: 100}, a
    }(), f = function () {
        function a() {
            var a, b, c, d, e, f = this;
            this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function () {
                var g;
                return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3))
            }, 50)
        }

        return a
    }(), m = function () {
        function a(a) {
            this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"))
        }

        return a.prototype.tick = function (a, b) {
            var c;
            return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, a
    }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function () {
        return D.restartOnPushState ? j.restart() : void 0
    }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function () {
        return z(), T.apply(window.history, arguments)
    }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function () {
        return z(), W.apply(window.history, arguments)
    }), l = {ajax: a, elements: d, document: c, eventLag: f}, (B = function () {
        var a, c, d, e, f, g, h, i;
        for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
        for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) K = i[d], L.push(new K(D));
        return j.bar = r = new b, H = [], M = new m
    })(), j.stop = function () {
        return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B()
    }, j.restart = function () {
        return j.trigger("restart"), j.stop(), j.start()
    }, j.go = function () {
        var a;
        return j.running = !0, r.render(), a = C(), s = !1, p = G(function (b, c) {
            var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
            for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q) for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
            return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function () {
                return r.finish(), j.running = !1, j.trigger("hide")
            }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c()
        })
    }, j.start = function (a) {
        v(D, a), j.running = !0;
        try {
            r.render()
        } catch (b) {
            i = b
        }
        return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50)
    }, "function" == typeof define && define.amd ? define(function () {
        return j
    }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start()
}.call(this), function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
    "use strict";

    function b(a) {
        return "string" == typeof a ? parseInt(a, 10) : ~~a
    }

    var c = {
        wheelSpeed: 1,
        wheelPropagation: !1,
        swipePropagation: !0,
        minScrollbarLength: null,
        maxScrollbarLength: null,
        useBothWheelAxes: !1,
        useKeyboard: !0,
        suppressScrollX: !1,
        suppressScrollY: !1,
        scrollXMarginOffset: 0,
        scrollYMarginOffset: 0,
        includePadding: !1
    }, d = 0, e = function () {
        var a = d++;
        return function (b) {
            var c = ".perfect-scrollbar-" + a;
            return void 0 === b ? c : b + c
        }
    }, f = "WebkitAppearance" in document.documentElement.style;
    a.fn.perfectScrollbar = function (d, g) {
        return this.each(function () {
            function h(a, c) {
                var d = a + c, e = C - K;
                L = 0 > d ? 0 : d > e ? e : d;
                var f = b(L * (E - C) / (C - K));
                z.scrollTop(f)
            }

            function i(a, c) {
                var d = a + c, e = B - G;
                H = 0 > d ? 0 : d > e ? e : d;
                var f = b(H * (D - B) / (B - G));
                z.scrollLeft(f)
            }

            function j(a) {
                return y.minScrollbarLength && (a = Math.max(a, y.minScrollbarLength)), y.maxScrollbarLength && (a = Math.min(a, y.maxScrollbarLength)), a
            }

            function k() {
                var a = {width: I};
                a.left = N ? z.scrollLeft() + B - D : z.scrollLeft(), T ? a.bottom = S - z.scrollTop() : a.top = U + z.scrollTop(), Q.css(a);
                var b = {top: z.scrollTop(), height: M};
                $ ? b.right = N ? D - z.scrollLeft() - Z - Y.outerWidth() : Z - z.scrollLeft() : b.left = N ? z.scrollLeft() + 2 * B - D - _ - Y.outerWidth() : _ + z.scrollLeft(), X.css(b), R.css({
                    left: H,
                    width: G - V
                }), Y.css({top: L, height: K - aa})
            }

            function l() {
                z.removeClass("ps-active-x"), z.removeClass("ps-active-y"), B = y.includePadding ? z.innerWidth() : z.width(), C = y.includePadding ? z.innerHeight() : z.height(), D = z.prop("scrollWidth"), E = z.prop("scrollHeight"), !y.suppressScrollX && D > B + y.scrollXMarginOffset ? (F = !0, I = B - W, G = j(b(I * B / D)), H = b(z.scrollLeft() * (I - G) / (D - B))) : (F = !1, G = 0, H = 0, z.scrollLeft(0)), !y.suppressScrollY && E > C + y.scrollYMarginOffset ? (J = !0, M = C - ba, K = j(b(M * C / E)), L = b(z.scrollTop() * (M - K) / (E - C))) : (J = !1, K = 0, L = 0, z.scrollTop(0)), H >= I - G && (H = I - G), L >= M - K && (L = M - K), k(), F && z.addClass("ps-active-x"), J && z.addClass("ps-active-y")
            }

            function m() {
                var b, c, d = function (a) {
                    i(b, a.pageX - c), l(), a.stopPropagation(), a.preventDefault()
                }, e = function () {
                    Q.removeClass("in-scrolling"), a(P).unbind(O("mousemove"), d)
                };
                R.bind(O("mousedown"), function (f) {
                    c = f.pageX, b = R.position().left, Q.addClass("in-scrolling"), a(P).bind(O("mousemove"), d), a(P).one(O("mouseup"), e), f.stopPropagation(), f.preventDefault()
                }), b = c = null
            }

            function n() {
                var b, c, d = function (a) {
                    h(b, a.pageY - c), l(), a.stopPropagation(), a.preventDefault()
                }, e = function () {
                    X.removeClass("in-scrolling"), a(P).unbind(O("mousemove"), d)
                };
                Y.bind(O("mousedown"), function (f) {
                    c = f.pageY, b = Y.position().top, X.addClass("in-scrolling"), a(P).bind(O("mousemove"), d), a(P).one(O("mouseup"), e), f.stopPropagation(), f.preventDefault()
                }), b = c = null
            }

            function o(a, b) {
                var c = z.scrollTop();
                if (0 === a) {
                    if (!J) return !1;
                    if (0 === c && b > 0 || c >= E - C && 0 > b) return !y.wheelPropagation
                }
                var d = z.scrollLeft();
                if (0 === b) {
                    if (!F) return !1;
                    if (0 === d && 0 > a || d >= D - B && a > 0) return !y.wheelPropagation
                }
                return !0
            }

            function p(a, b) {
                var c = z.scrollTop(), d = z.scrollLeft(), e = Math.abs(a), f = Math.abs(b);
                if (f > e) {
                    if (0 > b && c === E - C || b > 0 && 0 === c) return !y.swipePropagation
                } else if (e > f && (0 > a && d === D - B || a > 0 && 0 === d)) return !y.swipePropagation;
                return !0
            }

            function q() {
                function a(a) {
                    var b = a.originalEvent.deltaX, c = -1 * a.originalEvent.deltaY;
                    return (void 0 === b || void 0 === c) && (b = -1 * a.originalEvent.wheelDeltaX / 6, c = a.originalEvent.wheelDeltaY / 6), a.originalEvent.deltaMode && 1 === a.originalEvent.deltaMode && (b *= 10, c *= 10), b !== b && c !== c && (b = 0, c = a.originalEvent.wheelDelta), [b, c]
                }

                function b(b) {
                    if (f || !(z.find("select:focus").length > 0)) {
                        var d = a(b), e = d[0], g = d[1];
                        c = !1, y.useBothWheelAxes ? J && !F ? (g ? z.scrollTop(z.scrollTop() - g * y.wheelSpeed) : z.scrollTop(z.scrollTop() + e * y.wheelSpeed), c = !0) : F && !J && (e ? z.scrollLeft(z.scrollLeft() + e * y.wheelSpeed) : z.scrollLeft(z.scrollLeft() - g * y.wheelSpeed), c = !0) : (z.scrollTop(z.scrollTop() - g * y.wheelSpeed), z.scrollLeft(z.scrollLeft() + e * y.wheelSpeed)), l(), c = c || o(e, g), c && (b.stopPropagation(), b.preventDefault())
                    }
                }

                var c = !1;
                void 0 !== window.onwheel ? z.bind(O("wheel"), b) : void 0 !== window.onmousewheel && z.bind(O("mousewheel"), b)
            }

            function r() {
                var b = !1;
                z.bind(O("mouseenter"), function () {
                    b = !0
                }), z.bind(O("mouseleave"), function () {
                    b = !1
                });
                var c = !1;
                a(P).bind(O("keydown"), function (d) {
                    if ((!d.isDefaultPrevented || !d.isDefaultPrevented()) && b) {
                        for (var e = document.activeElement ? document.activeElement : P.activeElement; e.shadowRoot;) e = e.shadowRoot.activeElement;
                        if (!a(e).is(":input,[contenteditable]")) {
                            var f = 0, g = 0;
                            switch (d.which) {
                                case 37:
                                    f = -30;
                                    break;
                                case 38:
                                    g = 30;
                                    break;
                                case 39:
                                    f = 30;
                                    break;
                                case 40:
                                    g = -30;
                                    break;
                                case 33:
                                    g = 90;
                                    break;
                                case 32:
                                case 34:
                                    g = -90;
                                    break;
                                case 35:
                                    g = d.ctrlKey ? -E : -C;
                                    break;
                                case 36:
                                    g = d.ctrlKey ? z.scrollTop() : C;
                                    break;
                                default:
                                    return
                            }
                            z.scrollTop(z.scrollTop() - g), z.scrollLeft(z.scrollLeft() + f), c = o(f, g), c && d.preventDefault()
                        }
                    }
                })
            }

            function s() {
                function a(a) {
                    a.stopPropagation()
                }

                Y.bind(O("click"), a), X.bind(O("click"), function (a) {
                    var c = b(K / 2), d = a.pageY - X.offset().top - c, e = C - K, f = d / e;
                    0 > f ? f = 0 : f > 1 && (f = 1), z.scrollTop((E - C) * f)
                }), R.bind(O("click"), a), Q.bind(O("click"), function (a) {
                    var c = b(G / 2), d = a.pageX - Q.offset().left - c, e = B - G, f = d / e;
                    0 > f ? f = 0 : f > 1 && (f = 1), z.scrollLeft((D - B) * f)
                })
            }

            function t() {
                function b() {
                    var a = window.getSelection ? window.getSelection() : document.getSlection ? document.getSlection() : {rangeCount: 0};
                    return 0 === a.rangeCount ? null : a.getRangeAt(0).commonAncestorContainer
                }

                function c() {
                    e || (e = setInterval(function () {
                        return A() ? (z.scrollTop(z.scrollTop() + f.top), z.scrollLeft(z.scrollLeft() + f.left), void l()) : void clearInterval(e)
                    }, 50))
                }

                function d() {
                    e && (clearInterval(e), e = null), Q.removeClass("in-scrolling"), X.removeClass("in-scrolling")
                }

                var e = null, f = {top: 0, left: 0}, g = !1;
                a(P).bind(O("selectionchange"), function () {
                    a.contains(z[0], b()) ? g = !0 : (g = !1, d())
                }), a(window).bind(O("mouseup"), function () {
                    g && (g = !1, d())
                }), a(window).bind(O("mousemove"), function (a) {
                    if (g) {
                        var b = {x: a.pageX, y: a.pageY}, e = z.offset(), h = {
                            left: e.left,
                            right: e.left + z.outerWidth(),
                            top: e.top,
                            bottom: e.top + z.outerHeight()
                        };
                        b.x < h.left + 3 ? (f.left = -5, Q.addClass("in-scrolling")) : b.x > h.right - 3 ? (f.left = 5, Q.addClass("in-scrolling")) : f.left = 0, b.y < h.top + 3 ? (f.top = 5 > h.top + 3 - b.y ? -5 : -20, X.addClass("in-scrolling")) : b.y > h.bottom - 3 ? (f.top = 5 > b.y - h.bottom + 3 ? 5 : 20, X.addClass("in-scrolling")) : f.top = 0, 0 === f.top && 0 === f.left ? d() : c()
                    }
                })
            }

            function u(b, c) {
                function d(a, b) {
                    z.scrollTop(z.scrollTop() - b), z.scrollLeft(z.scrollLeft() - a), l()
                }

                function e() {
                    r = !0
                }

                function f() {
                    r = !1
                }

                function g(a) {
                    return a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0] : a.originalEvent
                }

                function h(a) {
                    var b = a.originalEvent;
                    return b.targetTouches && 1 === b.targetTouches.length ? !0 : b.pointerType && "mouse" !== b.pointerType && b.pointerType !== b.MSPOINTER_TYPE_MOUSE ? !0 : !1
                }

                function i(a) {
                    if (h(a)) {
                        s = !0;
                        var b = g(a);
                        m.pageX = b.pageX, m.pageY = b.pageY, n = (new Date).getTime(), null !== q && clearInterval(q), a.stopPropagation()
                    }
                }

                function j(a) {
                    if (!r && s && h(a)) {
                        var b = g(a), c = {pageX: b.pageX, pageY: b.pageY}, e = c.pageX - m.pageX,
                            f = c.pageY - m.pageY;
                        d(e, f), m = c;
                        var i = (new Date).getTime(), j = i - n;
                        j > 0 && (o.x = e / j, o.y = f / j, n = i), p(e, f) && (a.stopPropagation(), a.preventDefault())
                    }
                }

                function k() {
                    !r && s && (s = !1, clearInterval(q), q = setInterval(function () {
                        return A() ? .01 > Math.abs(o.x) && .01 > Math.abs(o.y) ? void clearInterval(q) : (d(30 * o.x, 30 * o.y), o.x *= .8, void(o.y *= .8)) : void clearInterval(q)
                    }, 10))
                }

                var m = {}, n = 0, o = {}, q = null, r = !1, s = !1;
                b && (a(window).bind(O("touchstart"), e), a(window).bind(O("touchend"), f), z.bind(O("touchstart"), i), z.bind(O("touchmove"), j), z.bind(O("touchend"), k)), c && (window.PointerEvent ? (a(window).bind(O("pointerdown"), e), a(window).bind(O("pointerup"), f), z.bind(O("pointerdown"), i), z.bind(O("pointermove"), j), z.bind(O("pointerup"), k)) : window.MSPointerEvent && (a(window).bind(O("MSPointerDown"), e), a(window).bind(O("MSPointerUp"), f), z.bind(O("MSPointerDown"), i), z.bind(O("MSPointerMove"), j), z.bind(O("MSPointerUp"), k)))
            }

            function v() {
                z.bind(O("scroll"), function () {
                    l()
                })
            }

            function w() {
                z.unbind(O()), a(window).unbind(O()), a(P).unbind(O()), z.data("perfect-scrollbar", null), z.data("perfect-scrollbar-update", null), z.data("perfect-scrollbar-destroy", null), R.remove(), Y.remove(), Q.remove(), X.remove(), z = Q = X = R = Y = F = J = B = C = D = E = G = H = S = T = U = K = L = Z = $ = _ = N = O = null
            }

            function x() {
                l(), v(), m(), n(), s(), t(), q(), (ca || da) && u(ca, da), y.useKeyboard && r(), z.data("perfect-scrollbar", z), z.data("perfect-scrollbar-update", l), z.data("perfect-scrollbar-destroy", w)
            }

            var y = a.extend(!0, {}, c), z = a(this), A = function () {
                return !!z
            };
            if ("object" == typeof d ? a.extend(!0, y, d) : g = d, "update" === g) return z.data("perfect-scrollbar-update") && z.data("perfect-scrollbar-update")(), z;
            if ("destroy" === g) return z.data("perfect-scrollbar-destroy") && z.data("perfect-scrollbar-destroy")(), z;
            if (z.data("perfect-scrollbar")) return z.data("perfect-scrollbar");
            z.addClass("ps-container");
            var B, C, D, E, F, G, H, I, J, K, L, M, N = "rtl" === z.css("direction"), O = e(),
                P = this.ownerDocument || document, Q = a("<div class='ps-scrollbar-x-rail'>").appendTo(z),
                R = a("<div class='ps-scrollbar-x'>").appendTo(Q), S = b(Q.css("bottom")), T = S === S,
                U = T ? null : b(Q.css("top")), V = b(Q.css("borderLeftWidth")) + b(Q.css("borderRightWidth")),
                W = b(Q.css("marginLeft")) + b(Q.css("marginRight")),
                X = a("<div class='ps-scrollbar-y-rail'>").appendTo(z),
                Y = a("<div class='ps-scrollbar-y'>").appendTo(X), Z = b(X.css("right")), $ = Z === Z,
                _ = $ ? null : b(X.css("left")), aa = b(X.css("borderTopWidth")) + b(X.css("borderBottomWidth")),
                ba = b(X.css("marginTop")) + b(X.css("marginBottom")),
                ca = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                da = null !== window.navigator.msMaxTouchPoints;
            return x(), z
        })
    }
}), function (a) {
    a.fn.viewportChecker = function (b) {
        var c = {
            classToAdd: "visible",
            classToRemove: "invisible",
            offset: 100,
            repeat: !1,
            invertBottomOffset: !0,
            callbackFunction: function (a, b) {
            },
            scrollHorizontal: !1
        };
        a.extend(c, b);
        var d = this, e = {height: a(window).height(), width: a(window).width()},
            f = -1 != navigator.userAgent.toLowerCase().indexOf("webkit") || -1 != navigator.userAgent.toLowerCase().indexOf("windows phone") ? "body" : "html";
        return this.checkElements = function () {
            var b, g;
            c.scrollHorizontal ? (b = a(f).scrollLeft(), g = b + e.width) : (b = a(f).scrollTop(), g = b + e.height), d.each(function () {
                var d = a(this), f = {}, h = {};
                if (d.data("vp-add-class") && (h.classToAdd = d.data("vp-add-class")), d.data("vp-remove-class") && (h.classToRemove = d.data("vp-remove-class")), d.data("vp-offset") && (h.offset = d.data("vp-offset")), d.data("vp-repeat") && (h.repeat = d.data("vp-repeat")), d.data("vp-scrollHorizontal") && (h.scrollHorizontal = d.data("vp-scrollHorizontal")), d.data("vp-invertBottomOffset") && (h.scrollHorizontal = d.data("vp-invertBottomOffset")), a.extend(f, c), a.extend(f, h), !d.hasClass(f.classToAdd) || f.repeat) {
                    String(f.offset).indexOf("%") > 0 && (f.offset = parseInt(f.offset) / 100 * e.height);
                    var i = f.scrollHorizontal ? Math.round(d.offset().left) + f.offset : Math.round(d.offset().top) + f.offset,
                        j = f.scrollHorizontal ? i + d.width() : i + d.height();
                    f.invertBottomOffset && (j -= 2 * f.offset), g > i && j > b ? (d.removeClass(f.classToRemove), d.addClass(f.classToAdd), f.callbackFunction(d, "add")) : d.hasClass(f.classToAdd) && f.repeat && (d.removeClass(f.classToAdd), f.callbackFunction(d, "remove"))
                }
            })
        }, "ontouchstart" in window ? a(document).bind("touchmove MSPointerMove pointermove", this.checkElements) : a(window).bind("scroll", this.checkElements), a(window).bind("load", this.checkElements), a(window).resize(function (b) {
            e = {height: a(window).height(), width: a(window).width()}, d.checkElements()
        }), this.checkElements(), this
    }
}(jQuery), function (a) {
    a.fn.extend({
        slimScroll: function (b) {
            var c = a.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, b);
            return this.each(function () {
                function d(b) {
                    if (j) {
                        b = b || window.event;
                        var d = 0;
                        b.wheelDelta && (d = -b.wheelDelta / 120), b.detail && (d = b.detail / 3), a(b.target || b.srcTarget || b.srcElement).closest("." + c.wrapperClass).is(s.parent()) && e(d, !0), b.preventDefault && !r && b.preventDefault(), r || (b.returnValue = !1)
                    }
                }

                function e(a, b, d) {
                    r = !1;
                    var e = a, f = s.outerHeight() - v.outerHeight();
                    b && (e = parseInt(v.css("top")) + a * parseInt(c.wheelStep) / 100 * v.outerHeight(), e = Math.min(Math.max(e, 0), f), e = a > 0 ? Math.ceil(e) : Math.floor(e), v.css({top: e + "px"})), p = parseInt(v.css("top")) / (s.outerHeight() - v.outerHeight()), e = p * (s[0].scrollHeight - s.outerHeight()), d && (e = a, a = e / s[0].scrollHeight * s.outerHeight(), a = Math.min(Math.max(a, 0), f), v.css({top: a + "px"})), s.scrollTop(e), s.trigger("slimscrolling", ~~e), h(), i()
                }

                function f() {
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", d, !1), this.addEventListener("mousewheel", d, !1)) : document.attachEvent("onmousewheel", d)
                }

                function g() {
                    o = Math.max(s.outerHeight() / s[0].scrollHeight * s.outerHeight(), 30), v.css({height: o + "px"});
                    var a = o == s.outerHeight() ? "none" : "block";
                    v.css({display: a})
                }

                function h() {
                    g(), clearTimeout(m), p == ~~p ? (r = c.allowPageScroll, q != p && s.trigger("slimscroll", 0 == ~~p ? "top" : "bottom")) : r = !1, q = p, o >= s.outerHeight() ? r = !0 : (v.stop(!0, !0).fadeIn("fast"), c.railVisible && w.stop(!0, !0).fadeIn("fast"))
                }

                function i() {
                    c.alwaysVisible || (m = setTimeout(function () {
                        c.disableFadeOut && j || k || l || (v.fadeOut("slow"), w.fadeOut("slow"))
                    }, 1e3))
                }

                var j, k, l, m, n, o, p, q, r = !1, s = a(this);
                if (s.parent().hasClass(c.wrapperClass)) {
                    var u = s.scrollTop(), v = s.parent().find("." + c.barClass),
                        w = s.parent().find("." + c.railClass);
                    if (g(), a.isPlainObject(b)) {
                        if ("height" in b && "auto" == b.height) {
                            s.parent().css("height", "auto"), s.css("height", "auto");
                            var x = s.parent().parent().height();
                            s.parent().css("height", x), s.css("height", x)
                        }
                        if ("scrollTo" in b) u = parseInt(c.scrollTo); else if ("scrollBy" in b) u += parseInt(c.scrollBy); else if ("destroy" in b) return v.remove(), w.remove(), void s.unwrap();
                        e(u, !1, !0)
                    }
                } else if (!(a.isPlainObject(b) && "destroy" in b)) {
                    c.height = "auto" == c.height ? s.parent().height() : c.height, u = a("<div></div>").addClass(c.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: c.width,
                        height: c.height
                    }), s.css({overflow: "hidden", width: c.width, height: c.height});
                    var w = a("<div></div>").addClass(c.railClass).css({
                        width: c.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: c.alwaysVisible && c.railVisible ? "block" : "none",
                        "border-radius": c.railBorderRadius,
                        background: c.railColor,
                        opacity: c.railOpacity,
                        zIndex: 90
                    }), v = a("<div></div>").addClass(c.barClass).css({
                        background: c.color,
                        width: c.size,
                        position: "absolute",
                        top: 0,
                        opacity: c.opacity,
                        display: c.alwaysVisible ? "block" : "none",
                        "border-radius": c.borderRadius,
                        BorderRadius: c.borderRadius,
                        MozBorderRadius: c.borderRadius,
                        WebkitBorderRadius: c.borderRadius,
                        zIndex: 99
                    }), x = "right" == c.position ? {right: c.distance} : {left: c.distance};
                    w.css(x), v.css(x), s.wrap(u), s.parent().append(v), s.parent().append(w), c.railDraggable && v.bind("mousedown", function (b) {
                        var c = a(document);
                        return l = !0, t = parseFloat(v.css("top")), pageY = b.pageY, c.bind("mousemove.slimscroll", function (a) {
                            currTop = t + a.pageY - pageY, v.css("top", currTop), e(0, v.position().top, !1)
                        }), c.bind("mouseup.slimscroll", function (a) {
                            l = !1, i(), c.unbind(".slimscroll")
                        }), !1
                    }).bind("selectstart.slimscroll", function (a) {
                        return a.stopPropagation(), a.preventDefault(), !1
                    }), w.hover(function () {
                        h()
                    }, function () {
                        i()
                    }), v.hover(function () {
                        k = !0
                    }, function () {
                        k = !1
                    }), s.hover(function () {
                        j = !0, h(), i()
                    }, function () {
                        j = !1, i()
                    }), s.bind("touchstart", function (a, b) {
                        a.originalEvent.touches.length && (n = a.originalEvent.touches[0].pageY)
                    }), s.bind("touchmove", function (a) {
                        r || a.originalEvent.preventDefault(), a.originalEvent.touches.length && (e((n - a.originalEvent.touches[0].pageY) / c.touchScrollStep, !0), n = a.originalEvent.touches[0].pageY)
                    }), g(), "bottom" === c.start ? (v.css({top: s.outerHeight() - v.outerHeight()}), e(0, !0)) : "top" !== c.start && (e(a(c.start).position().top, null, !0), c.alwaysVisible || v.hide()), f()
                }
            }), this
        }
    }), a.fn.extend({slimscroll: a.fn.slimScroll})
}(jQuery), jQuery(function (a) {
    "use strict";

    function b(a, b, c) {
        var d = new Date, e = d.getHours(), f = d.getMinutes();
        return "<div class='chatmsg msg_" + b + "'><span class='name'>" + c + "</span><span class='text'>" + a + "</span><span class='ts'>" + e + ":" + f + "</span></div>"
    }

    function c(a, b, c) {
        return "undefined" != typeof a.data(b) ? a.data(b) : c
    }

    var d = window.CMPLTADMIN_SETTINGS || {};
    d.windowBasedLayout = function () {
        var b = window.innerWidth;
        a("body").hasClass("chat-open") || a("body").hasClass("sidebar-collapse") ? d.mainmenuCollapsed() : 767 > b ? (a(".page-topbar").addClass("sidebar_shift").removeClass("chat_shift"), a(".page-sidebar").addClass("collapseit").removeClass("expandit"), a("#main-content").addClass("sidebar_shift").removeClass("chat_shift"), a(".page-chatapi").removeClass("showit").addClass("hideit"), a(".chatapi-windows").removeClass("showit").addClass("hideit"), d.mainmenuCollapsed()) : (a(".page-topbar").removeClass("sidebar_shift chat_shift"), a(".page-sidebar").removeClass("collapseit chat_shift"), a("#main-content").removeClass("sidebar_shift chat_shift"), d.mainmenuScroll())
    }, d.onLoadTopBar = function () {
        a(".page-topbar .message-toggle-wrapper").addClass("showopacity"), a(".page-topbar .notify-toggle-wrapper").addClass("showopacity"), a(".page-topbar .searchform").addClass("showopacity"), a(".page-topbar li.profile").addClass("showopacity")
    }, d.chatAPI = function () {
        a(".page-topbar .toggle_chat").on("click", function () {
            var b = a(".page-chatapi"), c = a(".chatapi-windows"), e = a(".page-topbar"), f = a("#main-content"),
                g = a(".page-sidebar");
            b.hasClass("hideit") ? (b.addClass("showit").removeClass("hideit"), c.addClass("showit").removeClass("hideit"), e.addClass("chat_shift"), f.addClass("chat_shift"), g.addClass("chat_shift"), d.mainmenuCollapsed()) : (b.addClass("hideit").removeClass("showit"), c.addClass("hideit").removeClass("showit"), e.removeClass("chat_shift"), f.removeClass("chat_shift"), g.removeClass("chat_shift"), d.windowBasedLayout())
        }), a(".page-topbar .sidebar_toggle").on("click", function () {
            var b = a(".page-chatapi"), c = a(".chatapi-windows"), e = a(".page-topbar"), f = a("#main-content"),
                g = a(".page-sidebar");
            g.hasClass("collapseit") || g.hasClass("chat_shift") ? (g.addClass("expandit").removeClass("collapseit").removeClass("chat_shift"), e.removeClass("sidebar_shift").removeClass("chat_shift"), f.removeClass("sidebar_shift").removeClass("chat_shift"), b.addClass("hideit").removeClass("showit"), c.addClass("hideit").removeClass("showit"), d.mainmenuScroll()) : (g.addClass("collapseit").removeClass("expandit").removeClass("chat_shift"), e.addClass("sidebar_shift").removeClass("chat_shift"), f.addClass("sidebar_shift").removeClass("chat_shift"), d.mainmenuCollapsed())
        })
    }, d.chatApiScroll = function () {
        var b = a(".page-chatapi .search-bar").height(), c = window.innerHeight - b;
        a(".chat-wrapper").height(c).perfectScrollbar({suppressScrollX: !0})
    }, d.chatApiWindow = function () {
        a(".page-chatapi");
        a(".page-chatapi .user-row").on("click", function () {
            var c = a(this).find(".user-info h4 a").html(), d = a(this).find(".user-img a img").attr("src"),
                e = a(this).attr("data-user-id"), f = a(this).find(".user-info .status").attr("data-status");
            if (a(this).hasClass("active")) a(this).toggleClass("active"), a(".chatapi-windows #user-window" + e).hide(); else if (a(this).toggleClass("active"), a(".chatapi-windows #user-window" + e).length) a(".chatapi-windows #user-window" + e).removeClass("minimizeit").show(); else {
                var g = b("Wow! What a Beautiful theme!", "receive", c);
                g += b("Yes! Complete Admin Theme ;)", "sent", "You");
                var h = "<div class='user-window' id='user-window" + e + "' data-user-id='" + e + "'>";
                h += "<div class='controlbar'><img src='" + d + "' data-user-id='" + e + "' rel='tooltip' data-animate='animated fadeIn' data-toggle='tooltip' data-original-title='" + c + "' data-placement='top' data-color-class='primary'><span class='status " + f + "'><i class='fa fa-circle'></i></span><span class='name'>" + c + "</span><span class='opts'><i class='fa fa-times closeit' data-user-id='" + e + "'></i><i class='fa fa-minus minimizeit' data-user-id='" + e + "'></i></span></div>", h += "<div class='chatarea'>" + g + "</div>", h += "<div class='typearea'><input type='text' data-user-id='" + e + "' placeholder='Type & Enter' class='form-control'></div>", h += "</div>", a(".chatapi-windows").append(h)
            }
        }), a(document).on("click", ".chatapi-windows .user-window .controlbar .closeit", function (b) {
            var c = a(this).attr("data-user-id");
            a(".chatapi-windows #user-window" + c).hide(), a(".page-chatapi .user-row#chat_user_" + c).removeClass("active")
        }), a(document).on("click", ".chatapi-windows .user-window .controlbar img, .chatapi-windows .user-window .controlbar .minimizeit", function (b) {
            var c = a(this).attr("data-user-id");
            a(".chatapi-windows #user-window" + c).hasClass("minimizeit") ? a(".chatapi-windows #user-window" + c).removeClass("minimizeit") : (a(".chatapi-windows #user-window" + c).addClass("minimizeit"), d.tooltipsPopovers())
        }), a(document).on("keypress", ".chatapi-windows .user-window .typearea input", function (c) {
            if (13 == c.keyCode) {
                var d = a(this).attr("data-user-id"), e = a(this).val();
                e = b(e, "sent", "You"), a(".chatapi-windows #user-window" + d + " .chatarea").append(e), a(this).val(""), a(this).focus()
            }
            a(".chatapi-windows #user-window" + d + " .chatarea").perfectScrollbar({suppressScrollX: !0})
        })
    }, d.loginPage = function () {
        var b = window.innerHeight, c = a("#login").height(), d = (b - c) / 2;
        if (a("#login").css("margin-top", +d + "px"), a("#login #user_login").length) {
            var e = document.getElementById("user_login");
            e.focus()
        }
    }, d.searchPage = function () {
        a(".search_data .tab-pane").perfectScrollbar({suppressScrollX: !0});
        var b = a(".search-page-input");
        b.length && b.focus()
    }, d.viewportElement = function () {
        function b(b) {
            var c = a(this);
            b = a.extend({}, b || {}, c.data("countToOptions") || {}), c.countTo(b).addClass("counted")
        }

        a.isFunction(a.fn.viewportChecker) && (a(".inviewport").viewportChecker({
            callbackFunction: function (a, b) {
            }
        }), a(".number_counter").viewportChecker({
            classToAdd: "start_timer",
            offset: 10,
            callbackFunction: function (c) {
                a(".start_timer:not(.counted)").each(b)
            }
        }))
    }, d.draggablePanels = function () {
        a.isFunction(a.fn.sortable) && a(".sort_panel").sortable({
            connectWith: ".sort_panel",
            handle: "header.panel_header",
            cancel: ".panel_actions",
            placeholder: "portlet-placeholder"
        })
    }, d.breadcrumbAutoHidden = function () {
        a(".breadcrumb.auto-hidden a").on("mouseover", function () {
            a(this).removeClass("collapsed")
        }), a(".breadcrumb.auto-hidden a").on("mouseout", function () {
            a(this).addClass("collapsed")
        })
    }, d.sectionBoxActions = function () {
        a("section.box .actions .box_toggle").on("click", function () {
            var b = a(this).parent().parent().parent().find(".content-body");
            b.hasClass("collapsed") ? (b.removeClass("collapsed").slideDown(500), a(this).removeClass("fa-chevron-up").addClass("fa-chevron-down")) : (b.addClass("collapsed").slideUp(500), a(this).removeClass("fa-chevron-down").addClass("fa-chevron-up"))
        }), a("section.box .actions .box_close").on("click", function () {
            content = a(this).parent().parent().parent().remove()
        })
    }, d.mainmenuScroll = function () {
        var b = a(".page-topbar").height(), c = a(".project-info").innerHeight(), d = window.innerHeight - b - c;
        a(".fixedscroll #main-menu-wrapper").height(d).perfectScrollbar({suppressScrollX: !0}), a("#main-menu-wrapper .wraplist").height("auto"), a("li.open > .sub-menu").attr("style", "display:block;")
    }, d.mainmenuCollapsed = function () {
        if (a(".page-sidebar.chat_shift #main-menu-wrapper").length > 0 || a(".page-sidebar.collapseit #main-menu-wrapper").length > 0) {
            var b = a(".page-topbar").height(), c = window.innerHeight, d = c - b,
                e = a(".page-container #main-content .wrapper").height(), f = e;
            d > e && (f = d), a(".fixedscroll #main-menu-wrapper").perfectScrollbar("destroy"), a(".page-sidebar.chat_shift #main-menu-wrapper .wraplist, .page-sidebar.collapseit #main-menu-wrapper .wraplist").height(f), a("li.open .sub-menu").attr("style", "")
        }
    }, d.mainMenu = function () {
        a("#main-menu-wrapper li a").click(function (b) {
            if (a(this).next().hasClass("sub-menu") !== !1) {
                var c = a(this).parent().parent(), d = a(this).next();
                c.children("li.open").children(".sub-menu").slideUp(200), c.children("li.open").children("a").children(".arrow").removeClass("open"), c.children("li").removeClass("open"), d.is(":visible") ? (a(this).find(".arrow").removeClass("open"), d.slideUp(200)) : (a(this).parent().addClass("open"), a(this).find(".arrow").addClass("open"), d.slideDown(200))
            }
        }), a("body").click(function (b) {
            a(".page-sidebar.collapseit .wraplist li.open .sub-menu").attr("style", ""), a(".page-sidebar.collapseit .wraplist li.open").removeClass("open"), a(".page-sidebar.chat_shift .wraplist li.open .sub-menu").attr("style", ""), a(".page-sidebar.chat_shift .wraplist li.open").removeClass("open")
        })
    }, d.mailboxInbox = function () {
        a(".mail_list table .star i").click(function (b) {
            a(this).toggleClass("fa-star fa-star-o")
        }), a(".mail_list .open-view").click(function (a) {
            window.location = "mail-view.html"
        }), a(".mail_view_info .labels .cc").click(function (b) {
            var c = a(".mail_compose_cc");
            c.is(":visible") ? c.hide() : c.show()
        }), a(".mail_view_info .labels .bcc").click(function (b) {
            var c = a(".mail_compose_bcc");
            c.is(":visible") ? c.hide() : c.show()
        })
    }, d.pageTopBar = function () {
        a(".page-topbar li.searchform .input-group-addon").click(function (b) {
            a(this).parent().parent().parent().toggleClass("focus"), a(this).parent().parent().find("input").focus()
        }), a(".page-topbar li .dropdown-menu .list").perfectScrollbar({suppressScrollX: !0})
    }, d.extraFormSettings = function () {
        a(".input-group .form-control").focus(function (b) {
            a(this).parent().find(".input-group-addon").addClass("input-focus"), a(this).parent().find(".input-group-btn").addClass("input-focus")
        }), a(".input-group .form-control").blur(function (b) {
            a(this).parent().find(".input-group-addon").removeClass("input-focus"), a(this).parent().find(".input-group-btn").removeClass("input-focus")
        })
    }, d.jsTreeINIT = function () {
        a.isFunction(a.fn.jstree) && a(function () {
            var b = !1;
            a("#treedata_q").keyup(function () {
                b && clearTimeout(b), b = setTimeout(function () {
                    var b = a("#treedata_q").val();
                    a("#jstree_treedata").jstree(!0).search(b)
                }, 250)
            }), a("#jstree_treedata").jstree({
                core: {
                    animation: 0,
                    check_callback: !0,
                    themes: {stripes: !0},
                    data: {
                        url: function (a) {
                            return "#" === a.id ? "data/ajax_demo_roots_jstree.json" : "data/ajax_demo_children_jstree.json"
                        }, data: function (a) {
                            return {id: a.id}
                        }
                    }
                },
                types: {
                    "#": {max_children: 1, max_depth: 4, valid_children: ["root"]},
                    root: {icon: "assets/plugins/jstree/images/tree_icon.png", valid_children: ["default"]},
                    "default": {valid_children: ["default", "file"]},
                    file: {icon: "fa fa-file", valid_children: []}
                },
                checkbox: {keep_selected_style: !1},
                plugins: ["checkbox", "contextmenu", "dnd", "search", "sort", "state", "types", "unique", "wholerow"]
            })
        })
    }, d.jvectorMaps = function () {
        if (a.isFunction(a.fn.vectorMap)) {
            a("#world-map-markers").length && a(function () {
                a("#world-map-markers").vectorMap({
                    map: "world_mill_en",
                    scaleColors: ["#3F51B5", "#3F51B5"],
                    normalizeFunction: "polynomial",
                    hoverOpacity: .7,
                    hoverColor: !1,
                    regionsSelectable: !0,
                    markersSelectable: !0,
                    markersSelectableOne: !0,
                    onRegionOver: function (a, b) {
                    },
                    onRegionOut: function (a, b) {
                    },
                    onRegionClick: function (a, b) {
                    },
                    onRegionSelected: function (a, b, c, d) {
                        window.localStorage && window.localStorage.setItem("jvectormap-selected-regions", JSON.stringify(d))
                    },
                    panOnDrag: !0,
                    focusOn: {x: 1.5, y: 1.5, scale: 1, animate: !0},
                    regionStyle: {
                        initial: {
                            fill: "#cccccc",
                            "fill-opacity": 1,
                            stroke: "none",
                            "stroke-width": 0,
                            "stroke-opacity": 1
                        },
                        hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                        selected: {fill: "#E91E63"},
                        selectedHover: {}
                    },
                    markerStyle: {
                        initial: {fill: "#673AB7", stroke: "#ffffff", "stroke-width": 2, r: 10},
                        hover: {stroke: "#FFC107", "stroke-width": 2, cursor: "pointer"},
                        selected: {fill: "#FFC107", "stroke-width": 0}
                    },
                    backgroundColor: "#ffffff",
                    markers: [{latLng: [41.9, 12.45], name: "Vatican City"}, {
                        latLng: [43.73, 7.41],
                        name: "Monaco"
                    }, {latLng: [-.52, 166.93], name: "Nauru"}, {
                        latLng: [-8.51, 179.21],
                        name: "Tuvalu"
                    }, {latLng: [43.93, 12.46], name: "San Marino"}, {
                        latLng: [47.14, 9.52],
                        name: "Liechtenstein"
                    }, {latLng: [7.11, 171.06], name: "Marshall Islands"}, {
                        latLng: [17.3, -62.73],
                        name: "Saint Kitts and Nevis"
                    }, {latLng: [3.2, 73.22], name: "Maldives"}, {
                        latLng: [35.88, 14.5],
                        name: "Malta"
                    }, {latLng: [12.05, -61.75], name: "Grenada"}, {
                        latLng: [13.16, -61.23],
                        name: "Saint Vincent and the Grenadines"
                    }, {latLng: [13.16, -59.55], name: "Barbados"}, {
                        latLng: [17.11, -61.85],
                        name: "Antigua and Barbuda"
                    }, {latLng: [-4.61, 55.45], name: "Seychelles"}, {
                        latLng: [7.35, 134.46],
                        name: "Palau"
                    }, {latLng: [42.5, 1.51], name: "Andorra"}, {
                        latLng: [14.01, -60.98],
                        name: "Saint Lucia"
                    }, {latLng: [6.91, 158.18], name: "Federated States of Micronesia"}, {
                        latLng: [1.3, 103.8],
                        name: "Singapore"
                    }, {latLng: [1.46, 173.03], name: "Kiribati"}, {
                        latLng: [-21.13, -175.2],
                        name: "Tonga"
                    }, {latLng: [15.3, -61.38], name: "Dominica"}, {
                        latLng: [-20.2, 57.5],
                        name: "Mauritius"
                    }, {latLng: [26.02, 50.55], name: "Bahrain"}, {latLng: [.33, 6.73], name: "São Tomé and Príncipe"}]
                })
            });
            var b = "";
            b = a("#europe_mill_en-map"), b.length && b.vectorMap({
                map: "europe_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 1, animate: !0}
            }), b = a("#in_mill_en-map"), b.length && b.vectorMap({
                map: "in_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#us_aea_en-map"), b.length && b.vectorMap({
                map: "us_aea_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#pt_mill_en-map"), b.length && b.vectorMap({
                map: "pt_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#cn_mill_en-map"), b.length && b.vectorMap({
                map: "cn_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#nz_mill_en-map"), b.length && b.vectorMap({
                map: "nz_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#no_mill_en-map"), b.length && b.vectorMap({
                map: "no_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#es_mill_en-map"), b.length && b.vectorMap({
                map: "es_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#au_mill_en-map"), b.length && b.vectorMap({
                map: "au_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#fr_regions_mill_en-map"), b.length && b.vectorMap({
                map: "fr_regions_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#th_mill_en-map"), b.length && b.vectorMap({
                map: "th_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#co_mill_en-map"), b.length && b.vectorMap({
                map: "co_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#be_mill_en-map"), b.length && b.vectorMap({
                map: "be_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#ar_mill_en-map"), b.length && b.vectorMap({
                map: "ar_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#ve_mill_en-map"), b.length && b.vectorMap({
                map: "ve_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#it_mill_en-map"), b.length && b.vectorMap({
                map: "it_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#dk_mill_en-map"), b.length && b.vectorMap({
                map: "dk_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#at_mill_en-map"), b.length && b.vectorMap({
                map: "at_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#ca_lcc_en-map"), b.length && b.vectorMap({
                map: "ca_lcc_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#nl_mill_en-map"), b.length && b.vectorMap({
                map: "nl_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#se_mill_en-map"), b.length && b.vectorMap({
                map: "se_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#pl_mill_en-map"), b.length && b.vectorMap({
                map: "pl_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#de_mill_en-map"), b.length && b.vectorMap({
                map: "de_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#fr_mill_en-map"), b.length && b.vectorMap({
                map: "fr_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#za_mill_en-map"), b.length && b.vectorMap({
                map: "za_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#ch_mill_en-map"), b.length && b.vectorMap({
                map: "ch_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#us-ny-newyork_mill_en-map"), b.length && b.vectorMap({
                map: "us-ny-newyork_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            }), b = a("#us-il-chicago_mill_en-map"), b.length && b.vectorMap({
                map: "us-il-chicago_mill_en",
                regionsSelectable: !0,
                backgroundColor: "#3F51B5",
                regionStyle: {
                    initial: {fill: "white", stroke: "none"},
                    hover: {fill: "#E91E63", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#E91E63"}
                },
                focusOn: {x: 0, y: 0, scale: 5, animate: !0}
            })
        }
    }, d.dataTablesInit = function () {
        a.isFunction(a.fn.dataTable) && (a("#example-1").dataTable({
            responsive: !0,
            aLengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]]
        }), a("#example-4").dataTable(), a.extend(!0, a.fn.dataTable.defaults, {
            sDom: "<'row'<'col-md-6'l><'col-md-6'f>r>t<'row'<'col-md-12'p i>>",
            sPaginationType: "bootstrap",
            oLanguage: {sLengthMenu: "_MENU_"}
        }), a.extend(a.fn.dataTableExt.oStdClasses, {sWrapper: "dataTables_wrapper form-inline"}), a.fn.dataTableExt.oApi.fnPagingInfo = function (a) {
            return {
                iStart: a._iDisplayStart,
                iEnd: a.fnDisplayEnd(),
                iLength: a._iDisplayLength,
                iTotal: a.fnRecordsTotal(),
                iFilteredTotal: a.fnRecordsDisplay(),
                iPage: -1 === a._iDisplayLength ? 0 : Math.ceil(a._iDisplayStart / a._iDisplayLength),
                iTotalPages: -1 === a._iDisplayLength ? 0 : Math.ceil(a.fnRecordsDisplay() / a._iDisplayLength)
            }
        }, a.extend(a.fn.dataTableExt.oPagination, {
            bootstrap: {
                fnInit: function (b, c, d) {
                    var e = (b.oLanguage.oPaginate, function (a) {
                        a.preventDefault(), b.oApi._fnPageChange(b, a.data.action) && d(b)
                    });
                    a(c).addClass("").append('<ul class="pagination pull-right"><li class="prev disabled"><a href="#"><i class="fa fa-angle-double-left"></i></a></li><li class="next disabled"><a href="#"><i class="fa fa-angle-double-right"></i></a></li></ul>');
                    var f = a("a", c);
                    a(f[0]).bind("click.DT", {action: "previous"}, e), a(f[1]).bind("click.DT", {action: "next"}, e)
                }, fnUpdate: function (b, c) {
                    var d, e, f, g, h, i, j = 5, k = b.oInstance.fnPagingInfo(), l = b.aanFeatures.p,
                        m = Math.floor(j / 2);
                    for (k.iTotalPages < j ? (h = 1, i = k.iTotalPages) : k.iPage <= m ? (h = 1, i = j) : k.iPage >= k.iTotalPages - m ? (h = k.iTotalPages - j + 1, i = k.iTotalPages) : (h = k.iPage - m + 1, i = h + j - 1), d = 0, e = l.length; e > d; d++) {
                        for (a("li:gt(0)", l[d]).filter(":not(:last)").remove(), f = h; i >= f; f++) g = f == k.iPage + 1 ? 'class="active"' : "", a("<li " + g + '><a href="#">' + f + "</a></li>").insertBefore(a("li:last", l[d])[0]).bind("click", function (d) {
                            d.preventDefault(), b._iDisplayStart = (parseInt(a("a", this).text(), 10) - 1) * k.iLength, c(b)
                        });
                        0 === k.iPage ? a("li:first", l[d]).addClass("disabled") : a("li:first", l[d]).removeClass("disabled"), k.iPage === k.iTotalPages - 1 || 0 === k.iTotalPages ? a("li:last", l[d]).addClass("disabled") : a("li:last", l[d]).removeClass("disabled")
                    }
                }
            }
        }), a.extend(!0, a.fn.DataTable.TableTools.classes, {
            container: "DTTT ",
            buttons: {normal: "btn btn-white", disabled: "disabled"},
            collection: {container: "DTTT_dropdown dropdown-menu", buttons: {normal: "", disabled: "disabled"}},
            print: {info: "DTTT_print_info modal"},
            select: {row: "active"}
        }), a.extend(!0, a.fn.DataTable.TableTools.DEFAULTS.oTags, {
            collection: {
                container: "ul",
                button: "li",
                liner: "a"
            }
        }), a(document).ready(function () {
            var b = a("#example");
            b.dataTable({
                sDom: "<'row'<'col-md-6'l T><'col-md-6'f>r>t<'row'<'col-md-12'p i>>",
                oTableTools: {
                    aButtons: [{
                        sExtends: "collection",
                        sButtonText: "<i class='fa fa-cloud-download'></i>",
                        aButtons: ["csv", "xls", "pdf", "copy"]
                    }]
                },
                sPaginationType: "bootstrap",
                aoColumnDefs: [{bSortable: !1, aTargets: [0]}],
                aaSorting: [[1, "asc"]],
                oLanguage: {sLengthMenu: "_MENU_ ", sInfo: "Showing _START_ to _END_ of _TOTAL_ entries"},
                bAutoWidth: !1,
                fnPreDrawCallback: function () {
                },
                fnRowCallback: function (a) {
                },
                fnDrawCallback: function (a) {
                }
            }), a("#example_wrapper .dataTables_filter input").addClass("input-medium "), a("#example_wrapper .dataTables_length select").addClass("select2-wrapper"), a("#example input").click(function () {
                a(this).parent().parent().parent().toggleClass("row_selected")
            });
            var c = document.createElement("th"), d = document.createElement("td");
            d.innerHTML = '<i class="fa fa-plus-circle"></i>', d.className = "center", a("#example2 thead tr").each(function () {
                this.insertBefore(c, this.childNodes[0])
            }), a("#example2 tbody tr").each(function () {
                this.insertBefore(d.cloneNode(!0), this.childNodes[0])
            });
            var e = a("#example2").dataTable({
                sDom: "<'row'<'col-md-6'l><'col-md-6'f>r>t<'row'<'col-md-12'p i>>",
                aaSorting: [],
                oLanguage: {sLengthMenu: "_MENU_ ", sInfo: "Showing _START_ to _END_ of _TOTAL_ entries"}
            });
            a("div.toolbar").html('<div class="table-tools-actions"><button class="btn btn-primary" style="margin-left:12px" id="test2">Add</button></div>'), a("#example2_wrapper .dataTables_filter input").addClass("input-medium "), a("#example2_wrapper .dataTables_length select").addClass("select2-wrapper"), a("#example2 tbody td i").on("click", function () {
                function b(a, b) {
                    var c = a.fnGetData(b),
                        d = '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="inner-table">';
                    return d += "<tr><td>Rendering engine:</td><td>" + c[1] + " " + c[4] + "</td></tr>", d += "<tr><td>Link to source:</td><td>Could provide a link here</td></tr>", d += "<tr><td>Extra info:</td><td>And any further details here (images etc)</td></tr>", d += "</table>"
                }

                var c = a(this).parents("tr")[0];
                e.fnIsOpen(c) ? (this.removeClass = "fa fa-plus-circle", this.addClass = "fa fa-minus-circle", e.fnClose(c)) : (this.removeClass = "fa fa-minus-circle", this.addClass = "fa fa-plus-circle", e.fnOpen(c, b(e, c), "details"))
            })
        }))
    }, d.loadPrettyPhoto = function () {
        a.isFunction(a.fn.prettyPhoto) && a("a[rel^='prettyPhoto']").prettyPhoto({social_tools: !1})
    }, d.isotopeGallery = function () {
        if (a.isFunction(a.fn.isotope)) {
            var b = a(".portfolio-filter >li>a"), c = a(".portfolio-items");
            c.isotope({itemSelector: ".portfolio-item", layoutMode: "sloppyMasonry"}), b.on("click", function () {
                b.removeClass("active"), a(this).addClass("active");
                var d = a(this).attr("data-filter");
                return c.isotope({filter: d}), !1
            })
        }
    }, d.tocifyScrollMenu = function () {
        if (a.isFunction(a.fn.tocify)) {
            a("#toc").tocify({selectors: "h2,h3,h4,h5", context: ".tocify-content", extendPage: !1}).data("toc-tocify")
        }
    }, d.uiCalendar = function () {
        if (a.isFunction(a.fn.fullCalendar)) {
            a("#external-events .fc-event").each(function () {
                var b = {title: a.trim(a(this).text())};
                a(this).data("eventObject", b), a(this).draggable({zIndex: 999, revert: !0, revertDuration: 0})
            });
            var b = new Date, c = b.getDate(), d = b.getMonth(), e = b.getFullYear();
            a("#calendar").fullCalendar({
                header: {
                    left: "prev,next today",
                    center: "title",
                    right: "month,basicWeek,basicDay"
                },
                editable: !0,
                eventLimit: !0,
                droppable: !0,
                drop: function (b, c) {
                    var d = a(this).data("eventObject"), e = a.extend({}, d);
                    e.start = b, e.allDay = c, a("#calendar").fullCalendar("renderEvent", e, !0), a("#drop-remove").is(":checked") && a(this).remove()
                },
                events: [{title: "All Day Event", start: new Date(e, d, 1)}, {
                    title: "Long Event",
                    start: new Date(e, d, c - 5),
                    end: new Date(e, d, c - 2)
                }, {id: 999, title: "Repeating Event", start: new Date(e, d, c - 3, 16, 0), allDay: !1}, {
                    id: 999,
                    title: "Repeating Event",
                    start: new Date(e, d, c + 4, 16, 0),
                    allDay: !1
                }, {title: "Meeting", start: new Date(e, d, c, 10, 30), allDay: !1}, {
                    title: "Lunch",
                    start: new Date(e, d, c, 12, 0),
                    end: new Date(e, d, c, 14, 0),
                    allDay: !1
                }, {
                    title: "Conference",
                    start: new Date(e, d, c + 1, 19, 0),
                    end: new Date(e, d, c + 1, 22, 30),
                    allDay: !1
                }, {
                    title: "Staff Meeting",
                    start: new Date(e, d, 28),
                    end: new Date(e, d, 29),
                    url: "http://google.com/"
                }]
            }), a("#add_event_form").on("submit", function (b) {
                b.preventDefault();
                var c = a(this).find(".new-event-form"), d = c.val();
                if (d.length >= 3) {
                    var e = "new" + Math.random().toString(36).substring(7);
                    a("#external-events").append('<div id="' + e + '" class="fc-event bg-accent">' + d + "</div>");
                    var f = {title: a.trim(a("#" + e).text())};
                    a("#" + e).data("eventObject", f), a("#" + e).draggable({
                        revert: !0,
                        revertDuration: 0,
                        zIndex: 999
                    }), c.val("").focus()
                } else c.focus()
            })
        }
    }, d.nestableList = function () {
        function b(a, d) {
            var e = "";
            return d || (d = 0), jQuery.each(a, function (a, f) {
                e += "[ID: " + f.itemId + "]	" + c("—", d + 1) + " " + f.item, e += "\n", f.children && (e += b(f.children, d + 1))
            }), e
        }

        function c(a, b) {
            for (var c = []; c.length < b;) c.push(a);
            return c.join("")
        }

        a("#nestableList-1").on("stop.uk.nestable", function (c) {
            var d = a(this).data("nestable").serialize(), e = "";
            e = b(d, 0), a("#nestableList-1-ev").val(e)
        })
    }, d.tooltipsPopovers = function () {
        a('[rel="tooltip"]').each(function () {
            var b = a(this).attr("data-animate"), c = a(this).attr("data-color-class");
            a(this).tooltip({template: '<div class="tooltip ' + b + " " + c + '"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'})
        }), a('[rel="popover"]').each(function () {
            var b = a(this).attr("data-animate"), c = a(this).attr("data-color-class");
            a(this).popover({template: '<div class="popover ' + b + " " + c + '"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
        })
    }, d.iCheck = function () {
        if (a.isFunction(a.fn.iCheck)) {
            a('input[type="checkbox"].iCheck').iCheck({
                checkboxClass: "icheckbox_minimal",
                radioClass: "iradio_minimal",
                increaseArea: "20%"
            });
            var b,
                c = ["-green", "-red", "-yellow", "-blue", "-aero", "-orange", "-grey", "-pink", "-purple", "-white"];
            for (b = 0; b < c.length; b++) 0 == b && (a("input.icheck-minimal").iCheck({
                checkboxClass: "icheckbox_minimal" + c[b],
                radioClass: "iradio_minimal" + c[b],
                increaseArea: "20%"
            }), a("input.skin-square").iCheck({
                checkboxClass: "icheckbox_square" + c[b],
                radioClass: "iradio_square" + c[b],
                increaseArea: "20%"
            }), a("input.skin-flat").iCheck({
                checkboxClass: "icheckbox_flat" + c[b],
                radioClass: "iradio_flat" + c[b]
            }), a("input.skin-line").each(function () {
                var d = a(this), e = d.next(), f = e.text();
                e.remove(), d.iCheck({
                    checkboxClass: "icheckbox_line" + c[b],
                    radioClass: "iradio_line" + c[b],
                    insert: '<div class="icheck_line-icon"></div>' + f
                })
            })), a("input.icheck-minimal" + c[b]).iCheck({
                checkboxClass: "icheckbox_minimal" + c[b],
                radioClass: "iradio_minimal" + c[b],
                increaseArea: "20%"
            }), a("input.skin-square" + c[b]).iCheck({
                checkboxClass: "icheckbox_square" + c[b],
                radioClass: "iradio_square" + c[b],
                increaseArea: "20%"
            }), a("input.skin-flat" + c[b]).iCheck({
                checkboxClass: "icheckbox_flat" + c[b],
                radioClass: "iradio_flat" + c[b]
            }), a("input.skin-line" + c[b]).each(function () {
                var d = a(this), e = d.next(), f = e.text();
                e.remove(), d.iCheck({
                    checkboxClass: "icheckbox_line" + c[b],
                    radioClass: "iradio_line" + c[b],
                    insert: '<div class="icheck_line-icon"></div>' + f
                })
            })
        }
    }, d.formEditors = function () {
        a.isFunction(a.fn.wysihtml5) && (a(".bootstrap-wysihtml5-textarea").wysihtml5({
            toolbar: {
                "font-styles": !0,
                emphasis: !0,
                lists: !0,
                html: !0,
                link: !0,
                image: !0,
                color: !0,
                blockquote: !0,
                size: "none"
            }
        }), a(".mail-compose-editor").wysihtml5({
            toolbar: {
                "font-styles": !0,
                emphasis: !0,
                lists: !1,
                html: !0,
                link: !0,
                image: !0,
                color: !0,
                blockquote: !1,
                size: "none"
            }
        })), a.isFunction(a.fn.CKEDITOR) && CKEDITOR.on("instanceCreated", function (a) {
            var b = a.editor, c = b.element;
            (c.is("h1", "h2", "h3") || "taglist" == c.getAttribute("id")) && b.on("configLoaded", function () {
                b.config.removePlugins = "colorbutton,find,flash,font,forms,iframe,image,newpage,removeformat,smiley,specialchar,stylescombo,templates", b.config.toolbarGroups = [{
                    name: "editing",
                    groups: ["basicstyles", "links"]
                }, {name: "undo"}, {name: "clipboard", groups: ["selection", "clipboard"]}, {name: "about"}]
            })
        })
    }, d.customDropZone = function () {
        if (a.isFunction(a.fn.dropzone)) {
            var b = 1, c = a("#custom-droptable");
            a("#customDZ").dropzone({
                url: "data/upload-file.php", addedfile: function (d) {
                    1 == b && c.find("tbody").html("");
                    var e = parseInt(d.size / 1024, 10);
                    e = 1024 > e ? e + " KB" : parseInt(e / 1024, 10) + " MB";
                    var f = a('<tr>                                                    <td class="text-center">' + b++ + "</td>                                                    <td>" + d.name + '</td>                                                    <td><div class="progress"><div class="progress-bar progress-bar-warning"></div></div></td>                                                    <td>' + e + "</td>                                                </tr>");
                    c.find("tbody").append(f), d.fileEntryTd = f, d.progressBar = f.find(".progress-bar")
                }, uploadprogress: function (b, c, d) {
                    b.progressBar.width(c + "%"), a(".custom-dropzone .drop-table").perfectScrollbar({suppressScrollX: !0})
                }, success: function (a) {
                    a.progressBar.removeClass("progress-bar-warning").addClass("progress-bar-success")
                }, error: function (a) {
                    a.progressBar.removeClass("progress-bar-warning").addClass("progress-bar-red")
                }
            })
        }
    }, d.otherScripts = function () {
        function b(b, c, d) {
            var e = [b.toString(16), c.toString(16), d.toString(16)];
            return a.each(e, function (a, b) {
                1 === b.length && (e[a] = "0" + b)
            }), e.join("").toUpperCase()
        }

        function d() {
            var c = a("#slider-red").slider("value"), d = a("#slider-green").slider("value"),
                e = a("#slider-blue").slider("value"), f = b(c, d, e);
            a("#slider-swatch").css("background-color", "#" + f)
        }

        function e(a) {
            for (var b = a.length - 1; b > 0; b--) {
                var c = Math.floor(Math.random() * (b + 1)), d = a[b];
                a[b] = a[c], a[c] = d
            }
            return a
        }

        if (a.isFunction(a.fn.autosize) && a(".autogrow").autosize(), a.isFunction(a.fn.inputmask) && a("[data-mask]").each(function (b, d) {
            var e = a(d), f = e.data("mask").toString(), g = {
                numericInput: c(e, "numeric", !1),
                radixPoint: c(e, "radixPoint", ""),
                rightAlign: "right" == c(e, "numericAlign", "left")
            }, h = c(e, "placeholder", ""), i = c(e, "isRegex", "");
            if (h.length && (g[h] = h), "phone" == f.toLowerCase() && (f = "(999) 999-9999"), "email" == f.toLowerCase() && (f = "Regex", g.regex = "[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+\\.[a-zA-Z]{2,4}"), "fdecimal" == f.toLowerCase() && (f = "decimal", a.extend(g, {
                autoGroup: !0,
                groupSize: 3,
                radixPoint: c(e, "rad", "."),
                groupSeparator: c(e, "dec", ",")
            })), "currency" == f.toLowerCase() || "rcurrency" == f.toLowerCase()) {
                var j = c(e, "sign", "$");
                f = "999,999,999.99", "rcurrency" == f.toLowerCase() ? f += " " + j : f = j + " " + f, g.numericInput = !0, g.rightAlignNumerics = !1, g.radixPoint = "."
            }
            i && (g.regex = f, f = "Regex"), e.inputmask(f, g)
        }), a.isFunction(a.fn.autoNumeric) && a(".autoNumeric").autoNumeric("init"), a.isFunction(a.fn.slider) && a(".slider").each(function (b, d) {
            var e = a(d), f = a('<span class="ui-label"></span>'), g = f.clone(),
                h = 0 != c(e, "vertical", 0) ? "vertical" : "horizontal", i = c(e, "prefix", ""),
                j = c(e, "postfix", ""), k = c(e, "fill", ""), l = a(k), m = c(e, "step", 1), n = c(e, "value", 5),
                o = c(e, "min", 0), p = c(e, "max", 100), q = c(e, "min-val", 10), r = c(e, "max-val", 90),
                s = e.is("[data-min-val]") || e.is("[data-max-val]"), t = 0;
            if (s) {
                e.slider({
                    range: !0, orientation: h, min: o, max: p, values: [q, r], step: m, slide: function (a, b) {
                        var c = (i ? i : "") + b.values[0] + (j ? j : ""),
                            d = (i ? i : "") + b.values[1] + (j ? j : "");
                        f.html(c), g.html(d), k && l.val(c + "," + d), t++
                    }, change: function (a, b) {
                        if (1 == t) {
                            var c = (i ? i : "") + b.values[0] + (j ? j : ""),
                                d = (i ? i : "") + b.values[1] + (j ? j : "");
                            f.html(c), g.html(d), k && l.val(c + "," + d)
                        }
                        t = 0
                    }
                });
                var u = e.find(".ui-slider-handle");
                f.html((i ? i : "") + q + (j ? j : "")), u.first().append(f), g.html((i ? i : "") + r + (j ? j : "")), u.last().append(g)
            } else {
                e.slider({
                    range: c(e, "basic", 0) ? !1 : "min",
                    orientation: h,
                    min: o,
                    max: p,
                    value: n,
                    step: m,
                    slide: function (a, b) {
                        var c = (i ? i : "") + b.value + (j ? j : "");
                        f.html(c), k && l.val(c), t++
                    },
                    change: function (a, b) {
                        if (1 == t) {
                            var c = (i ? i : "") + b.value + (j ? j : "");
                            f.html(c), k && l.val(c)
                        }
                        t = 0
                    }
                });
                var u = e.find(".ui-slider-handle");
                f.html((i ? i : "") + n + (j ? j : "")), u.html(f)
            }
        }), a.isFunction(a.fn.slider) && a(function () {
            a("#slider-red, #slider-green, #slider-blue").slider({
                orientation: "horizontal",
                range: "min",
                max: 255,
                value: 127,
                slide: d,
                change: d
            }), a("#slider-red").slider("value", 235), a("#slider-green").slider("value", 70), a("#slider-blue").slider("value", 60)
        }), a.isFunction(a.fn.spinner) && (a("#spinner").spinner(), a("#spinner2").spinner({
            min: 5,
            max: 2500,
            step: 25,
            start: 1e3,
            numberFormat: "C"
        }), a("#spinner3").spinner({
            spin: function (b, c) {
                return c.value > 10 ? (a(this).spinner("value", -10), !1) : c.value < -10 ? (a(this).spinner("value", 10), !1) : void 0
            }
        })), a.isFunction(a.fn.tagsinput)) {
            var f = -1, g = ["primary", "info", "warning", "success"];
            g = e(g), a("#tagsinput-2").tagsinput({
                tagClass: function () {
                    return f++, "label label-" + g[f % g.length]
                }
            }), a(".mail_compose_to").tagsinput({
                tagClass: function () {
                    return f++, "label label-" + g[f % g.length]
                }
            })
        }
        if (a.isFunction(a.fn.datepicker) && a(".datepicker").each(function (b, d) {
            var e = a(d), f = {
                minViewMode: c(e, "minViewMode", 0),
                format: c(e, "format", "mm/dd/yyyy"),
                startDate: c(e, "startDate", ""),
                endDate: c(e, "endDate", ""),
                daysOfWeekDisabled: c(e, "disabledDays", ""),
                startView: c(e, "startView", 0)
            }, g = e.next(), h = e.prev();
            e.datepicker(f), g.is(".input-group-addon") && g.has("a") && g.on("click", function (a) {
                a.preventDefault(), e.datepicker("show")
            }), h.is(".input-group-addon") && h.has("a") && h.on("click", function (a) {
                a.preventDefault(), e.datepicker("show")
            })
        }), a.isFunction(a.fn.daterangepicker) && a(".daterange").each(function (b, d) {
            var e = {
                Today: [moment(), moment()],
                Yesterday: [moment().subtract("days", 1), moment().subtract("days", 1)],
                "Last 7 Days": [moment().subtract("days", 6), moment()],
                "Last 30 Days": [moment().subtract("days", 29), moment()],
                "This Month": [moment().startOf("month"), moment().endOf("month")],
                "Last Month": [moment().subtract("month", 1).startOf("month"), moment().subtract("month", 1).endOf("month")]
            }, f = a(d), g = {
                format: c(f, "format", "MM/DD/YYYY"),
                timePicker: c(f, "timePicker", !1),
                timePickerIncrement: c(f, "timePickerIncrement", !1),
                separator: c(f, "separator", " - ")
            }, h = c(f, "minDate", ""), i = c(f, "maxDate", ""), j = c(f, "startDate", ""), k = c(f, "endDate", "");
            f.hasClass("add-date-ranges") && (g.ranges = e), h.length && (g.minDate = h), i.length && (g.maxDate = i), j.length && (g.startDate = j), k.length && (g.endDate = k), f.daterangepicker(g, function (a, b) {
                f.data("daterangepicker");
                f.hasClass("daterange-text") && f.find("span").html(a.format("MMMM D, YYYY") + " - " + b.format("MMMM D, YYYY"))
            }), "object" == typeof g.ranges && f.data("daterangepicker").container.removeClass("show-calendar")
        }), a.isFunction(a.fn.timepicker) && a(".timepicker").each(function (b, d) {
            var e = a(d), f = {
                template: c(e, "template", !1),
                showSeconds: c(e, "showSeconds", !1),
                defaultTime: c(e, "defaultTime", "current"),
                showMeridian: c(e, "showMeridian", !0),
                minuteStep: c(e, "minuteStep", 15),
                secondStep: c(e, "secondStep", 15)
            }, g = e.next(), h = e.prev();
            e.timepicker(f), g.is(".input-group-addon") && g.has("a") && g.on("click", function (a) {
                a.preventDefault(), e.timepicker("showWidget")
            }), h.is(".input-group-addon") && h.has("a") && h.on("click", function (a) {
                a.preventDefault(), e.timepicker("showWidget")
            })
        }), a.isFunction(a.fn.datetimepicker) && (a(".form_datetime").datetimepicker({
            format: "yyyy-mm-dd hh:ii",
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 0
        }), a(".form_datetime_meridian").datetimepicker({
            format: "dd MM yyyy - hh:ii",
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 1
        }), a(".form_datetime_lang").datetimepicker({
            language: "fr",
            format: "yyyy-mm-dd hh:ii",
            weekStart: 1,
            todayBtn: 1,
            autoclose: 1,
            todayHighlight: 1,
            startView: 2,
            forceParse: 0,
            showMeridian: 0
        })), a.isFunction(a.fn.colorpicker) && a(".colorpicker").each(function (b, c) {
            var d = a(c), e = {}, f = d.next(), g = d.prev(), h = d.siblings(".input-group-addon").find(".sel-color");
            d.colorpicker(e), f.is(".input-group-addon") && f.has("a") && f.on("click", function (a) {
                a.preventDefault(), d.colorpicker("show")
            }), g.is(".input-group-addon") && g.has("a") && g.on("click", function (a) {
                a.preventDefault(), d.colorpicker("show")
            }), h.length && (d.on("changeColor", function (a) {
                h.css("background-color", a.color.toHex())
            }), d.val().length && h.css("background-color", d.val()))
        }), a.isFunction(a.fn.select2) && (a("#s2example-1").select2({
            placeholder: "Select your country...",
            allowClear: !0
        }).on("select2-open", function () {
            a(this).data("select2").results.addClass("overflow-hidden").perfectScrollbar()
        }), a("#s2example-2").select2({
            placeholder: "Choose your favorite US Countries",
            allowClear: !0
        }).on("select2-open", function () {
            a(this).data("select2").results.addClass("overflow-hidden").perfectScrollbar()
        }), a("#s2example-4").select2({
            minimumInputLength: 1,
            placeholder: "Search",
            ajax: {
                url: "data/select2-com.fui.cloud.remote-data.php",
                dataType: "json",
                quietMillis: 100,
                data: function (a, b) {
                    return {limit: -1, q: a}
                },
                results: function (a, b) {
                    return {results: a}
                }
            },
            formatResult: function (a) {
                return "<div class='select2-user-result'>" + a.name + "</div>"
            },
            formatSelection: function (a) {
                return a.name
            }
        })), a.isFunction(a.fn.multiSelect) && (a("#my_multi_select1").multiSelect(), a("#my_multi_select2").multiSelect({selectableOptgroup: !0}), a("#my_multi_select3").multiSelect({
            selectableHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
            selectionHeader: "<input type='text' class='form-control search-input' autocomplete='off' placeholder='search...'>",
            afterInit: function (a) {
                var b = this, c = b.$selectableUl.prev(), d = b.$selectionUl.prev(),
                    e = "#" + b.$container.attr("id") + " .ms-elem-selectable:not(.ms-selected)",
                    f = "#" + b.$container.attr("id") + " .ms-elem-selection.ms-selected";
                b.qs1 = c.quicksearch(e).on("keydown", function (a) {
                    return 40 === a.which ? (b.$selectableUl.focus(), !1) : void 0
                }), b.qs2 = d.quicksearch(f).on("keydown", function (a) {
                    return 40 == a.which ? (b.$selectionUl.focus(), !1) : void 0
                })
            },
            afterSelect: function () {
                this.qs1.cache(), this.qs2.cache()
            },
            afterDeselect: function () {
                this.qs1.cache(), this.qs2.cache()
            }
        })), a.isFunction(a.fn.typeahead)) {
            var h = function (b) {
                    return function (c, d) {
                        var e, f;
                        e = [], f = new RegExp(c, "i"), a.each(b, function (a, b) {
                            f.test(b) && e.push({value: b})
                        }), d(e)
                    }
                },
                i = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
            a("#typeahead-1").typeahead({hint: !0, highlight: !0, minLength: 1}, {
                name: "states",
                displayKey: "value",
                source: h(i)
            });
            var j = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace("name"),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                limit: 10,
                prefetch: {
                    url: "data/names.json", filter: function (b) {
                        return a.map(b, function (a) {
                            return {name: a}
                        })
                    }
                }
            });
            j.initialize(), a("#typeahead-2").typeahead(null, {
                name: "names",
                displayKey: "name",
                source: j.ttAdapter()
            });
            var k = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace("value"),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: "data/typeahead-generate.php?q=%QUERY"
            });
            k.initialize(), a("#typeahead-3").typeahead({hint: !0, highlight: !0}, {
                name: "string-randomizer",
                displayKey: "value",
                source: k.ttAdapter()
            });
            var l = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace("name"),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: "data/typeahead-hp-movies.php?q=%QUERY"
            });
            l.initialize(), a("#typeahead-4").typeahead(null, {
                name: "oscar-movies",
                displayKey: "value",
                source: l.ttAdapter(),
                templates: {
                    empty: ['<div class="empty-message">', "We cannot find this movie title", "</div>"].join("\n"),
                    suggestion: Handlebars.compile('<div class="clearfix" style="width:100%;display:inline-block;min-height:60px;height:auto;"><img src="data/{{cover}}" class="img-responsive pull-left" width="30" style="margin-right:10px;" /><strong>{{value}}</strong> &mdash; {{year}}<br /><span style="display:inline-block; height: 22px; overflow: hidden; white-space:nowrap; text-overflow:ellipsis; max-width: 400px;"></span></div>')
                }
            }).bind("typeahead:opened", function () {
                a(this).data("ttTypeahead").dropdown.$menu.addClass("overflow-hidden").perfectScrollbar()
            }).on("keyup", function () {
                a(this).data("ttTypeahead").dropdown.$menu.perfectScrollbar("update")
            })
        }
    }, d.cmpltadminWidgets = function () {
        var b = a(".notification-widget").height();
        a(".notification-widget").height(b).perfectScrollbar({suppressScrollX: !0})
    }, d.cmpltadminWidgetWeather = function () {
        a(".wid-weather .weekdays ul").perfectScrollbar({suppressScrollX: !0})
    }, d.cmpltadminToDoWidget = function () {
        a(".icheck-minimal-white.todo-task").on("ifChecked", function (b) {
            a(this).parent().parent().addClass("checked")
        }), a(".icheck-minimal-white.todo-task").on("ifUnchecked", function (b) {
            a(this).parent().parent().removeClass("checked")
        }), a(".wid-all-tasks ul").perfectScrollbar({suppressScrollX: !0})
    }, d.cmpltadminToDoAddTaskWidget = function () {
        a(".wid-add-task input").on("keypress", function (b) {
            if (13 == b.keyCode) {
                var c = Math.random().toString(36).substring(7), e = a(this).val(),
                    e = '<li><input type="checkbox" id="task-' + c + '" class="icheck-minimal-white todo-task"><label class="icheck-label form-label" for="task-' + c + '">' + e + "</label></li>";
                a(this).parent().parent().find(".wid-all-tasks ul").append(e), a(this).val(""), a(this).focus(), d.iCheck(), d.cmpltadminToDoWidget(), a(this).parent().parent().find(".wid-all-tasks ul").perfectScrollbar("update")
            }
        })
    }, d.dbjvectorMap = function () {
        a.isFunction(a.fn.vectorMap) && a(function () {
            a("#db-world-map-markers").vectorMap({
                map: "world_mill_en",
                scaleColors: ["#3F51B5", "#3F51B5"],
                normalizeFunction: "polynomial",
                hoverOpacity: .7,
                hoverColor: !1,
                regionsSelectable: !0,
                markersSelectable: !0,
                markersSelectableOne: !0,
                updateSize: !0,
                onRegionOver: function (a, b) {
                },
                onRegionOut: function (a, b) {
                },
                onRegionClick: function (a, b) {
                },
                onRegionSelected: function (a, b, c, d) {
                    window.localStorage && window.localStorage.setItem("jvectormap-selected-regions", JSON.stringify(d))
                },
                panOnDrag: !0,
                focusOn: {x: .5, y: .5, scale: 1.2, animate: !0},
                regionStyle: {
                    initial: {
                        fill: "#aaaaaa",
                        "fill-opacity": 1,
                        stroke: "false",
                        "stroke-width": 0,
                        "stroke-opacity": 1
                    },
                    hover: {fill: "#3F51B5", "fill-opacity": 1, cursor: "pointer"},
                    selected: {fill: "#3F51B5"},
                    selectedHover: {}
                },
                markerStyle: {
                    initial: {fill: "#E91E63", stroke: "#ffffff", r: 5},
                    hover: {stroke: "#FFC107", "stroke-width": 2, cursor: "pointer"},
                    selected: {fill: "#FFC107", "stroke-width": 0}
                },
                backgroundColor: "#ffffff",
                markers: [{latLng: [41.9, 12.45], name: "Vatican City"}, {
                    latLng: [43.73, 7.41],
                    name: "Monaco"
                }, {latLng: [-.52, 166.93], name: "Nauru"}, {
                    latLng: [-8.51, 179.21],
                    name: "Tuvalu"
                }, {latLng: [43.93, 12.46], name: "San Marino"}, {
                    latLng: [47.14, 9.52],
                    name: "Liechtenstein"
                }, {latLng: [7.11, 171.06], name: "Marshall Islands"}, {
                    latLng: [17.3, -62.73],
                    name: "Saint Kitts and Nevis"
                }, {latLng: [3.2, 73.22], name: "Maldives"}, {
                    latLng: [35.88, 14.5],
                    name: "Malta"
                }, {latLng: [12.05, -61.75], name: "Grenada"}, {
                    latLng: [13.16, -61.23],
                    name: "Saint Vincent and the Grenadines"
                }, {latLng: [13.16, -59.55], name: "Barbados"}, {
                    latLng: [17.11, -61.85],
                    name: "Antigua and Barbuda"
                }, {latLng: [-4.61, 55.45], name: "Seychelles"}, {
                    latLng: [7.35, 134.46],
                    name: "Palau"
                }, {latLng: [42.5, 1.51], name: "Andorra"}, {
                    latLng: [14.01, -60.98],
                    name: "Saint Lucia"
                }, {latLng: [6.91, 158.18], name: "Federated States of Micronesia"}, {
                    latLng: [1.3, 103.8],
                    name: "Singapore"
                }, {latLng: [1.46, 173.03], name: "Kiribati"}, {
                    latLng: [-21.13, -175.2],
                    name: "Tonga"
                }, {latLng: [15.3, -61.38], name: "Dominica"}, {
                    latLng: [-20.2, 57.5],
                    name: "Mauritius"
                }, {latLng: [26.02, 50.55], name: "Bahrain"}, {latLng: [.33, 6.73], name: "São Tomé and Príncipe"}]
            })
        })
    }, d.ios7Switchery = function () {
        if (a(".js-switch").length > 0) {
            var b = Array.prototype.slice.call(document.querySelectorAll(".js-switch")), c = 0,
                d = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b", "#000000"];
            b.forEach(function (a) {
                c += 1;
                var b = "default", e = d[c];
                if (c > 20) var b = "large", e = d[c - 20];
                if (c > 40) var b = "small", e = d[c - 40];
                var f = {
                    color: e,
                    secondaryColor: "#dfdfdf",
                    jackColor: "#fff",
                    jackSecondaryColor: null,
                    className: "switchery",
                    disabled: !1,
                    disabledOpacity: .5,
                    speed: "0.5s",
                    size: b
                };
                new Switchery(a, f)
            })
        }
    }, d.widgetSparklineChart = function () {
        a.isFunction(a.fn.sparkline) && (a(".wid_dynamicbar").sparkline([8.4, 9, 8.8, 8, 9.5, 9.2, 9.9, 9, 9, 8, 7, 8, 9, 8, 7, 9, 9, 9.5, 8, 9.5, 9.8], {
            type: "bar",
            barColor: "#f5f5f5",
            height: "60",
            barWidth: "12",
            barSpacing: 1
        }), a(".wid_linesparkline").sparkline([2e3, 3454, 5454, 2323, 3432, 4656, 2897, 3545, 4232, 4656, 2897, 3545, 4232, 5434, 4656, 3567, 4878, 3676, 3787], {
            type: "line",
            width: "100%",
            height: "60",
            lineWidth: 2,
            lineColor: "#f5f5f5",
            fillColor: "rgba(255,255,255,0.2)",
            highlightSpotColor: "#ffffff",
            highlightLineColor: "#ffffff",
            spotRadius: 3
        }), a(".wid_compositebar").sparkline([4, 6, 7, 7, 4, 3, 2, 4, 6, 7, 7, 8, 8, 4, 4, 3, 1, 4, 6, 5, 9], {
            type: "bar",
            barColor: "#f5f5f5",
            height: "60",
            barWidth: "12",
            barSpacing: 1
        }), a(".wid_compositebar").sparkline([4, 1, 5, 7, 9, 9, 8, 8, 4, 7, 8, 4, 7, 9, 9, 8, 8, 4, 2, 5, 6, 7], {
            composite: !0,
            fillColor: "rgba(103,58,183,0)",
            type: "line",
            width: "100%",
            height: "40",
            lineWidth: 2,
            lineColor: "#673AB7",
            highlightSpotColor: "#E91E63",
            highlightLineColor: "#673AB7",
            spotRadius: 3
        }))
    }, a(document).ready(function () {
        d.windowBasedLayout(), d.mainmenuScroll(), d.mainMenu(), d.mainmenuCollapsed(), d.pageTopBar(), d.otherScripts(), d.iCheck(), d.customDropZone(), d.formEditors(), d.extraFormSettings(), d.tooltipsPopovers(), d.nestableList(), d.uiCalendar(), d.tocifyScrollMenu(), d.loadPrettyPhoto(), d.jvectorMaps(), d.dataTablesInit(), d.jsTreeINIT(), d.breadcrumbAutoHidden(), d.chatAPI(), d.chatApiScroll(), d.chatApiWindow(), d.mailboxInbox(), d.cmpltadminWidgets(), d.sectionBoxActions(), d.draggablePanels(), d.viewportElement(), d.searchPage(), d.cmpltadminToDoAddTaskWidget(), d.cmpltadminToDoWidget(), d.dbjvectorMap(), d.widgetSparklineChart(), d.cmpltadminWidgetWeather(), d.onLoadTopBar(), d.ios7Switchery()
    }), a(window).resize(function () {
        d.windowBasedLayout(), d.isotopeGallery(), d.loginPage(), d.widgetSparklineChart()
    }), a(window).load(function () {
        d.isotopeGallery(), d.loginPage()
    })
}), $("#dropAppMenu").on("click", function () {
    "block" == $("#app-menu").css("display") ? ($("body").css({
        overflow: "scroll",
        position: "relative"
    }), $(".page-topbar").css({"z-index": 100})) : ($("#mobile-shade").removeClass("hidden"), $("#app-menu").show("slide", {direction: "right"}, 350), $("#otherAppList").addClass("hidden"), $("body").css({
        overflow: "hidden",
        position: "fixed"
    }), $(".page-topbar").css({"z-index": 2e3}))
}), jQuery(".popovers").popover(), jQuery(".popovers-show").popover("show"), jQuery(".popovers-hide").popover("hide"), jQuery(".popovers-toggle").popover("toggle"), jQuery(".popovers-destroy").popover("destroy");
var currentType = "";
jQuery(document).ready(function () {
    $("dropdown").data("open", !1), $("dropdown_dash").data("open", !1), $("#dropdown-button").click(function () {
        $("#dropdown").data("open") ? $("#dropdown").data("open", !1) : $("#dropdown").data("open", !0), setAllRead()
    }), $("#dropdown-button2").click(function () {
        $("#dropdown2").data("open") ? $("#dropdown2").data("open", !1) : $("#dropdown2").data("open", !0), setAllRead()
    }), $(".notification-list").slimScroll({height: 350}), userKey && $.ajax({
        type: "POST",
        url: ctx + "/notification/getNotifications",
        dataType: "json",
        beforeSend: function (request) {
            request.setRequestHeader(header, token);
        },
        success: function (a, b, c) {
            $("#notificationCount").html(a.count), $("#notificationCount2").html(a.count);
            var d = "";
            a.list.length > 0 ? ($("#notificationCount").removeClass("hide"), $("#notificationCount2").removeClass("hide"), $.each(a.list, function (a, b) {
                d += '<div class="notification">', d += 1 == b.nc_type ? '<span class="notification-icon"><i class="fa fa-envelope text-primary"></i></span>' : 2 == b.nc_type ? '<span class="notification-icon"><i class="fa fa-quote-right text-primary"></i></span>' : '<span class="notification-icon"><i class="fa fa-envelope text-primary"></i></span>', d += '<span class="notification-description">' + b.nc_content + "</span>", d += '<span class="notification-time">' + b.nc_created + "</span>", d += "</div> <!-- / .notification -->"
            })) : (d += '<div style="text-align:center;margin-top:120px;">', d += '<h4 class="notification-empty-title">' + noNotificationTitle + "</h4>", d += '<p class="notification-empty-text">' + noNotificationDescription + "</p>", d += "</div>"), $("#notifyContent").html(d), $("#notifyContent2").html(d)
        },
        error: function (a, b, c) {
        }
    })
}), function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
    a.ui = a.ui || {}, a.ui.version = "1.12.1";
    var b = "ui-effects-", c = "ui-effects-style", d = "ui-effects-animated", e = a;
    a.effects = {effect: {}}, function (a, b) {
        function c(a, b, c) {
            var d = l[b.type] || {};
            return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : a > d.max ? d.max : a)
        }

        function d(c) {
            var d = j(), e = d._rgba = [];
            return c = c.toLowerCase(), o(i, function (a, f) {
                var g, h = f.re.exec(c), i = h && f.parse(h), j = f.space || "rgba";
                return i ? (g = d[j](i), d[k[j].cache] = g[k[j].cache], e = d._rgba = g._rgba, !1) : b
            }), e.length ? ("0,0,0,0" === e.join() && a.extend(e, f.transparent), d) : f[c]
        }

        function e(a, b, c) {
            return c = (c + 1) % 1, 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
        }

        var f,
            g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            h = /^([\-+])=\s*(\d+\.?\d*)/, i = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (a) {
                    return [a[1], a[2], a[3], a[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (a) {
                    return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (a) {
                    return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (a) {
                    return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (a) {
                    return [a[1], a[2] / 100, a[3] / 100, a[4]]
                }
            }], j = a.Color = function (b, c, d, e) {
                return new a.Color.fn.parse(b, c, d, e)
            }, k = {
                rgba: {
                    props: {
                        red: {idx: 0, type: "byte"},
                        green: {idx: 1, type: "byte"},
                        blue: {idx: 2, type: "byte"}
                    }
                },
                hsla: {
                    props: {
                        hue: {idx: 0, type: "degrees"},
                        saturation: {idx: 1, type: "percent"},
                        lightness: {idx: 2, type: "percent"}
                    }
                }
            }, l = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, m = j.support = {},
            n = a("<p>")[0], o = a.each;
        n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, o(k, function (a, b) {
            b.cache = "_" + a, b.props.alpha = {idx: 3, type: "percent", def: 1}
        }), j.fn = a.extend(j.prototype, {
            parse: function (e, g, h, i) {
                if (e === b) return this._rgba = [null, null, null, null], this;
                (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
                var l = this, m = a.type(e), n = this._rgba = [];
                return g !== b && (e = [e, g, h, i], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function (a, b) {
                    n[b.idx] = c(e[b.idx], b)
                }), this) : "object" === m ? (e instanceof j ? o(k, function (a, b) {
                    e[b.cache] && (l[b.cache] = e[b.cache].slice())
                }) : o(k, function (b, d) {
                    var f = d.cache;
                    o(d.props, function (a, b) {
                        if (!l[f] && d.to) {
                            if ("alpha" === a || null == e[a]) return;
                            l[f] = d.to(l._rgba)
                        }
                        l[f][b.idx] = c(e[a], b, !0)
                    }), l[f] && 0 > a.inArray(null, l[f].slice(0, 3)) && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])))
                }), this) : b
            }, is: function (a) {
                var c = j(a), d = !0, e = this;
                return o(k, function (a, f) {
                    var g, h = c[f.cache];
                    return h && (g = e[f.cache] || f.to && f.to(e._rgba) || [], o(f.props, function (a, c) {
                        return null != h[c.idx] ? d = h[c.idx] === g[c.idx] : b
                    })), d
                }), d
            }, _space: function () {
                var a = [], b = this;
                return o(k, function (c, d) {
                    b[d.cache] && a.push(c)
                }), a.pop()
            }, transition: function (a, b) {
                var d = j(a), e = d._space(), f = k[e], g = 0 === this.alpha() ? j("transparent") : this,
                    h = g[f.cache] || f.to(g._rgba), i = h.slice();
                return d = d[f.cache], o(f.props, function (a, e) {
                    var f = e.idx, g = h[f], j = d[f], k = l[e.type] || {};
                    null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = c((j - g) * b + g, e)))
                }), this[e](i)
            }, blend: function (b) {
                if (1 === this._rgba[3]) return this;
                var c = this._rgba.slice(), d = c.pop(), e = j(b)._rgba;
                return j(a.map(c, function (a, b) {
                    return (1 - d) * e[b] + d * a
                }))
            }, toRgbaString: function () {
                var b = "rgba(", c = a.map(this._rgba, function (a, b) {
                    return null == a ? b > 2 ? 1 : 0 : a
                });
                return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")"
            }, toHslaString: function () {
                var b = "hsla(", c = a.map(this.hsla(), function (a, b) {
                    return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a
                });
                return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")"
            }, toHexString: function (b) {
                var c = this._rgba.slice(), d = c.pop();
                return b && c.push(~~(255 * d)), "#" + a.map(c, function (a) {
                    return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), j.fn.parse.prototype = j.fn, k.hsla.to = function (a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
            var b, c, d = a[0] / 255, e = a[1] / 255, f = a[2] / 255, g = a[3], h = Math.max(d, e, f),
                i = Math.min(d, e, f), j = h - i, k = h + i, l = .5 * k;
            return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === j ? 0 : .5 >= l ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
        }, k.hsla.from = function (a) {
            if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
            var b = a[0] / 360, c = a[1], d = a[2], f = a[3], g = .5 >= d ? d * (1 + c) : d + c - d * c, h = 2 * d - g;
            return [Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f]
        }, o(k, function (d, e) {
            var f = e.props, g = e.cache, i = e.to, k = e.from;
            j.fn[d] = function (d) {
                if (i && !this[g] && (this[g] = i(this._rgba)), d === b) return this[g].slice();
                var e, h = a.type(d), l = "array" === h || "object" === h ? d : arguments, m = this[g].slice();
                return o(f, function (a, b) {
                    var d = l["object" === h ? a : b.idx];
                    null == d && (d = m[b.idx]), m[b.idx] = c(d, b)
                }), k ? (e = j(k(m)), e[g] = m, e) : j(m)
            }, o(f, function (b, c) {
                j.fn[b] || (j.fn[b] = function (e) {
                    var f, g = a.type(e), i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d, j = this[i](),
                        k = j[c.idx];
                    return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), null == e && c.empty ? this : ("string" === g && (f = h.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[c.idx] = e, this[i](j)))
                })
            })
        }), j.hook = function (b) {
            var c = b.split(" ");
            o(c, function (b, c) {
                a.cssHooks[c] = {
                    set: function (b, e) {
                        var f, g, h = "";
                        if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
                            if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) {
                                for (g = "backgroundColor" === c ? b.parentNode : b; ("" === h || "transparent" === h) && g && g.style;) try {
                                    h = a.css(g, "backgroundColor"), g = g.parentNode;
                                } catch (i) {
                                }
                                e = e.blend(h && "transparent" !== h ? h : "_default")
                            }
                            e = e.toRgbaString()
                        }
                        try {
                            b.style[c] = e
                        } catch (i) {
                        }
                    }
                }, a.fx.step[c] = function (b) {
                    b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
                }
            })
        }, j.hook(g), a.cssHooks.borderColor = {
            expand: function (a) {
                var b = {};
                return o(["Top", "Right", "Bottom", "Left"], function (c, d) {
                    b["border" + d + "Color"] = a
                }), b
            }
        }, f = a.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(e), function () {
        function b(b) {
            var c, d,
                e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle,
                f = {};
            if (e && e.length && e[0] && e[e[0]]) for (d = e.length; d--;) c = e[d], "string" == typeof e[c] && (f[a.camelCase(c)] = e[c]); else for (c in e) "string" == typeof e[c] && (f[c] = e[c]);
            return f
        }

        function c(b, c) {
            var d, e, g = {};
            for (d in c) e = c[d], b[d] !== e && (f[d] || (a.fx.step[d] || !isNaN(parseFloat(e))) && (g[d] = e));
            return g
        }

        var d = ["add", "remove", "toggle"], f = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (b, c) {
            a.fx.step[c] = function (a) {
                ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (e.style(a.elem, c, a.end), a.setAttr = !0)
            }
        }), a.fn.addBack || (a.fn.addBack = function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }), a.effects.animateClass = function (e, f, g, h) {
            var i = a.speed(f, g, h);
            return this.queue(function () {
                var f, g = a(this), h = g.attr("class") || "", j = i.children ? g.find("*").addBack() : g;
                j = j.map(function () {
                    var c = a(this);
                    return {el: c, start: b(this)}
                }), f = function () {
                    a.each(d, function (a, b) {
                        e[b] && g[b + "Class"](e[b])
                    })
                }, f(), j = j.map(function () {
                    return this.end = b(this.el[0]), this.diff = c(this.start, this.end), this
                }), g.attr("class", h), j = j.map(function () {
                    var b = this, c = a.Deferred(), d = a.extend({}, i, {
                        queue: !1, complete: function () {
                            c.resolve(b)
                        }
                    });
                    return this.el.animate(this.diff, d), c.promise()
                }), a.when.apply(a, j.get()).done(function () {
                    f(), a.each(arguments, function () {
                        var b = this.el;
                        a.each(this.diff, function (a) {
                            b.css(a, "")
                        })
                    }), i.complete.call(g[0])
                })
            })
        }, a.fn.extend({
            addClass: function (b) {
                return function (c, d, e, f) {
                    return d ? a.effects.animateClass.call(this, {add: c}, d, e, f) : b.apply(this, arguments)
                }
            }(a.fn.addClass), removeClass: function (b) {
                return function (c, d, e, f) {
                    return arguments.length > 1 ? a.effects.animateClass.call(this, {remove: c}, d, e, f) : b.apply(this, arguments)
                }
            }(a.fn.removeClass), toggleClass: function (b) {
                return function (c, d, e, f, g) {
                    return "boolean" == typeof d || void 0 === d ? e ? a.effects.animateClass.call(this, d ? {add: c} : {remove: c}, e, f, g) : b.apply(this, arguments) : a.effects.animateClass.call(this, {toggle: c}, d, e, f)
                }
            }(a.fn.toggleClass), switchClass: function (b, c, d, e, f) {
                return a.effects.animateClass.call(this, {add: c, remove: b}, d, e, f)
            }
        })
    }(), function () {
        function e(b, c, d, e) {
            return a.isPlainObject(b) && (c = b, b = b.effect), b = {effect: b}, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
        }

        function f(b) {
            return !b || "number" == typeof b || a.fx.speeds[b] ? !0 : "string" != typeof b || a.effects.effect[b] ? a.isFunction(b) ? !0 : "object" != typeof b || b.effect ? !1 : !0 : !0
        }

        function g(a, b) {
            var c = b.outerWidth(), d = b.outerHeight(),
                e = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                f = e.exec(a) || ["", 0, c, d, 0];
            return {
                top: parseFloat(f[1]) || 0,
                right: "auto" === f[2] ? c : parseFloat(f[2]),
                bottom: "auto" === f[3] ? d : parseFloat(f[3]),
                left: parseFloat(f[4]) || 0
            }
        }

        a.expr && a.expr.filters && a.expr.filters.animated && (a.expr.filters.animated = function (b) {
            return function (c) {
                return !!a(c).data(d) || b(c)
            }
        }(a.expr.filters.animated)), a.uiBackCompat !== !1 && a.extend(a.effects, {
            save: function (a, c) {
                for (var d = 0, e = c.length; e > d; d++) null !== c[d] && a.data(b + c[d], a[0].style[c[d]])
            }, restore: function (a, c) {
                for (var d, e = 0, f = c.length; f > e; e++) null !== c[e] && (d = a.data(b + c[e]), a.css(c[e], d))
            }, setMode: function (a, b) {
                return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
            }, createWrapper: function (b) {
                if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                var c = {width: b.outerWidth(!0), height: b.outerHeight(!0), "float": b.css("float")},
                    d = a("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), e = {width: b.width(), height: b.height()}, f = document.activeElement;
                try {
                    f.id
                } catch (g) {
                    f = document.body
                }
                return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).trigger("focus"), d = b.parent(), "static" === b.css("position") ? (d.css({position: "relative"}), b.css({position: "relative"})) : (a.extend(c, {
                    position: b.css("position"),
                    zIndex: b.css("z-index")
                }), a.each(["top", "left", "bottom", "right"], function (a, d) {
                    c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                }), b.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), b.css(e), d.css(c).show()
            }, removeWrapper: function (b) {
                var c = document.activeElement;
                return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).trigger("focus")), b
            }
        }), a.extend(a.effects, {
            version: "1.12.1", define: function (b, c, d) {
                return d || (d = c, c = "effect"), a.effects.effect[b] = d, a.effects.effect[b].mode = c, d
            }, scaledDimensions: function (a, b, c) {
                if (0 === b) return {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
                var d = "horizontal" !== c ? (b || 100) / 100 : 1, e = "vertical" !== c ? (b || 100) / 100 : 1;
                return {
                    height: a.height() * e,
                    width: a.width() * d,
                    outerHeight: a.outerHeight() * e,
                    outerWidth: a.outerWidth() * d
                }
            }, clipToBox: function (a) {
                return {
                    width: a.clip.right - a.clip.left,
                    height: a.clip.bottom - a.clip.top,
                    left: a.clip.left,
                    top: a.clip.top
                }
            }, unshift: function (a, b, c) {
                var d = a.queue();
                b > 1 && d.splice.apply(d, [1, 0].concat(d.splice(b, c))), a.dequeue()
            }, saveStyle: function (a) {
                a.data(c, a[0].style.cssText)
            }, restoreStyle: function (a) {
                a[0].style.cssText = a.data(c) || "", a.removeData(c)
            }, mode: function (a, b) {
                var c = a.is(":hidden");
                return "toggle" === b && (b = c ? "show" : "hide"), (c ? "hide" === b : "show" === b) && (b = "none"), b
            }, getBaseline: function (a, b) {
                var c, d;
                switch (a[0]) {
                    case"top":
                        c = 0;
                        break;
                    case"middle":
                        c = .5;
                        break;
                    case"bottom":
                        c = 1;
                        break;
                    default:
                        c = a[0] / b.height
                }
                switch (a[1]) {
                    case"left":
                        d = 0;
                        break;
                    case"center":
                        d = .5;
                        break;
                    case"right":
                        d = 1;
                        break;
                    default:
                        d = a[1] / b.width
                }
                return {x: d, y: c}
            }, createPlaceholder: function (c) {
                var d, e = c.css("position"), f = c.position();
                return c.css({
                    marginTop: c.css("marginTop"),
                    marginBottom: c.css("marginBottom"),
                    marginLeft: c.css("marginLeft"),
                    marginRight: c.css("marginRight")
                }).outerWidth(c.outerWidth()).outerHeight(c.outerHeight()), /^(static|relative)/.test(e) && (e = "absolute", d = a("<" + c[0].nodeName + ">").insertAfter(c).css({
                    display: /^(inline|ruby)/.test(c.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: c.css("marginTop"),
                    marginBottom: c.css("marginBottom"),
                    marginLeft: c.css("marginLeft"),
                    marginRight: c.css("marginRight"),
                    "float": c.css("float")
                }).outerWidth(c.outerWidth()).outerHeight(c.outerHeight()).addClass("ui-effects-placeholder"), c.data(b + "placeholder", d)), c.css({
                    position: e,
                    left: f.left,
                    top: f.top
                }), d
            }, removePlaceholder: function (a) {
                var c = b + "placeholder", d = a.data(c);
                d && (d.remove(), a.removeData(c))
            }, cleanUp: function (b) {
                a.effects.restoreStyle(b), a.effects.removePlaceholder(b)
            }, setTransition: function (b, c, d, e) {
                return e = e || {}, a.each(c, function (a, c) {
                    var f = b.cssUnit(c);
                    f[0] > 0 && (e[c] = f[0] * d + f[1])
                }), e
            }
        }), a.fn.extend({
            effect: function () {
                function b(b) {
                    function e() {
                        i.removeData(d), a.effects.cleanUp(i), "hide" === c.mode && i.hide(), h()
                    }

                    function h() {
                        a.isFunction(j) && j.call(i[0]), a.isFunction(b) && b()
                    }

                    var i = a(this);
                    c.mode = l.shift(), a.uiBackCompat === !1 || g ? "none" === c.mode ? (i[k](), h()) : f.call(i[0], c, e) : (i.is(":hidden") ? "hide" === k : "show" === k) ? (i[k](), h()) : f.call(i[0], c, h)
                }

                var c = e.apply(this, arguments), f = a.effects.effect[c.effect], g = f.mode, h = c.queue,
                    i = h || "fx", j = c.complete, k = c.mode, l = [], m = function (b) {
                        var c = a(this), e = a.effects.mode(c, k) || g;
                        c.data(d, !0), l.push(e), g && ("show" === e || e === g && "hide" === e) && c.show(), g && "none" === e || a.effects.saveStyle(c), a.isFunction(b) && b()
                    };
                return a.fx.off || !f ? k ? this[k](c.duration, j) : this.each(function () {
                    j && j.call(this)
                }) : h === !1 ? this.each(m).each(b) : this.queue(i, m).queue(i, b)
            }, show: function (a) {
                return function (b) {
                    if (f(b)) return a.apply(this, arguments);
                    var c = e.apply(this, arguments);
                    return c.mode = "show", this.effect.call(this, c)
                }
            }(a.fn.show), hide: function (a) {
                return function (b) {
                    if (f(b)) return a.apply(this, arguments);
                    var c = e.apply(this, arguments);
                    return c.mode = "hide", this.effect.call(this, c)
                }
            }(a.fn.hide), toggle: function (a) {
                return function (b) {
                    if (f(b) || "boolean" == typeof b) return a.apply(this, arguments);
                    var c = e.apply(this, arguments);
                    return c.mode = "toggle", this.effect.call(this, c)
                }
            }(a.fn.toggle), cssUnit: function (b) {
                var c = this.css(b), d = [];
                return a.each(["em", "px", "%", "pt"], function (a, b) {
                    c.indexOf(b) > 0 && (d = [parseFloat(c), b])
                }), d
            }, cssClip: function (a) {
                return a ? this.css("clip", "rect(" + a.top + "px " + a.right + "px " + a.bottom + "px " + a.left + "px)") : g(this.css("clip"), this)
            }, transfer: function (b, c) {
                var d = a(this), e = a(b.to), f = "fixed" === e.css("position"), g = a("body"),
                    h = f ? g.scrollTop() : 0, i = f ? g.scrollLeft() : 0, j = e.offset(),
                    k = {top: j.top - h, left: j.left - i, height: e.innerHeight(), width: e.innerWidth()},
                    l = d.offset(),
                    m = a("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(b.className).css({
                        top: l.top - h,
                        left: l.left - i,
                        height: d.innerHeight(),
                        width: d.innerWidth(),
                        position: f ? "fixed" : "absolute"
                    }).animate(k, b.duration, b.easing, function () {
                        m.remove(), a.isFunction(c) && c()
                    })
            }
        }), a.fx.step.clip = function (b) {
            b.clipInit || (b.start = a(b.elem).cssClip(), "string" == typeof b.end && (b.end = g(b.end, b.elem)), b.clipInit = !0), a(b.elem).cssClip({
                top: b.pos * (b.end.top - b.start.top) + b.start.top,
                right: b.pos * (b.end.right - b.start.right) + b.start.right,
                bottom: b.pos * (b.end.bottom - b.start.bottom) + b.start.bottom,
                left: b.pos * (b.end.left - b.start.left) + b.start.left
            })
        }
    }(), function () {
        var b = {};
        a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (a, c) {
            b[c] = function (b) {
                return Math.pow(b, a + 2)
            }
        }), a.extend(b, {
            Sine: function (a) {
                return 1 - Math.cos(a * Math.PI / 2)
            }, Circ: function (a) {
                return 1 - Math.sqrt(1 - a * a)
            }, Elastic: function (a) {
                return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
            }, Back: function (a) {
                return a * a * (3 * a - 2)
            }, Bounce: function (a) {
                for (var b, c = 4; ((b = Math.pow(2, --c)) - 1) / 11 > a;) ;
                return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
            }
        }), a.each(b, function (b, c) {
            a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function (a) {
                return 1 - c(1 - a)
            }, a.easing["easeInOut" + b] = function (a) {
                return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
            }
        })
    }(), a.effects, a.effects.define("slide", "show", function (b, c) {
        var d, e, f = a(this),
            g = {up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"]},
            h = b.mode, i = b.direction || "left", j = "up" === i || "down" === i ? "top" : "left",
            k = "up" === i || "left" === i, l = b.distance || f["top" === j ? "outerHeight" : "outerWidth"](!0), m = {};
        a.effects.createPlaceholder(f), d = f.cssClip(), e = f.position()[j], m[j] = (k ? -1 : 1) * l + e, m.clip = f.cssClip(), m.clip[g[i][1]] = m.clip[g[i][0]], "show" === h && (f.cssClip(m.clip), f.css(j, m[j]), m.clip = d, m[j] = e), f.animate(m, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: c
        })
    })
}), function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function (b) {
                c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0)
            }), this.submit(function (b) {
                function d() {
                    var d;
                    return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1) : !0
                }

                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        }, valid: function () {
            if (a(this[0]).is("form")) return this.validate().form();
            var b = !0, c = a(this[0].form).validate();
            return this.each(function () {
                b &= c.element(this)
            }), b
        }, removeAttrs: function (b) {
            var c = {}, d = this;
            return a.each(b.split(/\s/), function (a, b) {
                c[b] = d.attr(b), d.removeAttr(b)
            }), c
        }, rules: function (b, c) {
            var d = this[0];
            if (b) {
                var e = a.data(d.form, "validator").settings, f = e.rules, g = a.validator.staticRules(d);
                switch (b) {
                    case"add":
                        a.extend(g, a.validator.normalizeRule(c)), f[d.name] = g, c.messages && (e.messages[d.name] = a.extend(e.messages[d.name], c.messages));
                        break;
                    case"remove":
                        if (!c) return delete f[d.name], g;
                        var h = {};
                        return a.each(c.split(/\s/), function (a, b) {
                            h[b] = g[b], delete g[b]
                        }), h
                }
            }
            var i = a.validator.normalizeRules(a.extend({}, a.validator.classRules(d), a.validator.attributeRules(d), a.validator.dataRules(d), a.validator.staticRules(d)), d);
            if (i.required) {
                var j = i.required;
                delete i.required, i = a.extend({required: j}, i)
            }
            return i
        }
    }), a.extend(a.expr[":"], {
        blank: function (b) {
            return !a.trim("" + b.value)
        }, filled: function (b) {
            return !!a.trim("" + b.value)
        }, unchecked: function (a) {
            return !a.checked
        }
    }), a.validator = function (b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function (b, c) {
        return 1 === arguments.length ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "invalid",
            validClass: "valid",
            errorElement: "em",
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (a, b) {
                this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
            },
            onfocusout: function (a, b) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function (a, b) {
                (9 !== b.which || "" !== this.elementValue(a)) && (a.name in this.submitted || a === this.lastElement) && this.element(a)
            },
            onclick: function (a, b) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d).parent().addClass("state-error").removeClass("state-success") : a(b).addClass(c).removeClass(d).parent().addClass("state-error").removeClass("state-success")
            },
            unhighlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d).parent().addClass("state-success").removeClass("state-error") : a(b).removeClass(c).addClass(d).parent().addClass("state-success").removeClass("state-error")
            }
        },
        setDefaults: function (b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required",
            remote: "Please fix this field",
            email: "Please enter a valid email address",
            url: "Please enter a valid URL",
            date: "Please enter a valid date",
            dateISO: "Please enter a valid date (ISO)",
            number: "Please enter a valid number",
            digits: "Please enter only digits",
            creditcard: "Please enter a valid credit card number",
            equalTo: "Please enter the same value again",
            maxlength: a.validator.format("Please enter no more than {0} characters"),
            minlength: a.validator.format("Please enter at least {0} characters"),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long"),
            range: a.validator.format("Please enter a value between {0} and {1}"),
            max: a.validator.format("Please enter a value less than or equal to {0}"),
            min: a.validator.format("Please enter a value greater than or equal to {0}")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function b(b) {
                    var c = a.data(this[0].form, "validator"), d = "on" + b.type.replace(/^validate/, "");
                    c.settings[d] && c.settings[d].call(c, this[0], b)
                }

                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c = this.groups = {};
                a.each(this.settings.groups, function (b, d) {
                    "string" == typeof d && (d = d.split(/\s/)), a.each(d, function (a, d) {
                        c[d] = b
                    })
                });
                var d = this.settings.rules;
                a.each(d, function (b, c) {
                    d[b] = a.validator.normalizeRule(c)
                }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            }, form: function () {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            }, element: function (b) {
                b = this.validationTargetFor(this.clean(b)), this.lastElement = b, this.prepareElement(b), this.currentElements = a(b);
                var c = this.check(b) !== !1;
                return c ? delete this.invalid[b.name] : this.invalid[b.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), c
            }, showErrors: function (b) {
                if (b) {
                    a.extend(this.errorMap, b), this.errorList = [];
                    for (var c in b) this.errorList.push({message: b[c], element: this.findByName(c)[0]});
                    this.successList = a.grep(this.successList, function (a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (a) {
                var b = 0;
                for (var c in a) b++;
                return b
            }, hideErrors: function () {
                this.addWrapper(this.toHide).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {
                }
            }, findLastActive: function () {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function (a) {
                    return a.element.name === b.name
                }).length && b
            }, elements: function () {
                var b = this, c = {};
                return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
                })
            }, clean: function (b) {
                return a(b)[0]
            }, errors: function () {
                var b = this.settings.errorClass.replace(" ", ".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            }, reset: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
            }, prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (a) {
                this.reset(), this.toHide = this.errorsFor(a)
            }, elementValue: function (b) {
                var c = a(b).attr("type"), d = a(b).val();
                return "radio" === c || "checkbox" === c ? a("input[name='" + a(b).attr("name") + "']:checked").val() : "string" == typeof d ? d.replace(/\r/g, "") : d
            }, check: function (b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d = a(b).rules(), e = !1, f = this.elementValue(b);
                for (var g in d) {
                    var h = {method: g, parameters: d[g]};
                    try {
                        if (c = a.validator.methods[g].call(this, f, b, h.parameters), "dependency-mismatch" === c) {
                            e = !0;
                            continue
                        }
                        if (e = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, h), !1
                    } catch (i) {
                        throw this.settings.debug && window.console && console.log("Exception occured when checking element " + b.id + ", check the '" + h.method + "' method.", i), i
                    }
                }
                return e ? void 0 : (this.objectLength(d) && this.successList.push(b), !0)
            }, customDataMessage: function (b, c) {
                return a(b).data("msg-" + c.toLowerCase()) || b.attributes && a(b).attr("data-msg-" + c.toLowerCase())
            }, customMessage: function (a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            }, findDefined: function () {
                for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
                return void 0
            }, defaultMessage: function (b, c) {
                return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
            }, formatAndAdd: function (b, c) {
                var d = this.defaultMessage(b, c.method), e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
                    message: d,
                    element: b
                }), this.errorMap[b.name] = d, this.submitted[b.name] = d
            }, addWrapper: function (a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            }, defaultShowErrors: function () {
                var a, b;
                for (a = 0; this.errorList[a]; a++) {
                    var c = this.errorList[a];
                    this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (b, c) {
                var d = this.errorsFor(b);
                d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.html(c)) : (d = a("<" + this.settings.errorElement + ">").attr("for", this.idOrName(b)).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))), !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, b)), this.toShow = this.toShow.add(d)
            }, errorsFor: function (b) {
                var c = this.idOrName(b);
                return this.errors().filter(function () {
                    return a(this).attr("for") === c
                })
            }, idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            }, validationTargetFor: function (a) {
                return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
            }, checkable: function (a) {
                return /radio|checkbox/i.test(a.type)
            }, findByName: function (b) {
                return a(this.currentForm).find("[name='" + b + "']")
            }, getLength: function (b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case"select":
                        return a("option:selected", c).length;
                    case"input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            }, depend: function (a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            }, dependTypes: {
                "boolean": function (a, b) {
                    return a
                }, string: function (b, c) {
                    return !!a(b, c.form).length
                }, "function": function (a, b) {
                    return a(b)
                }
            }, optional: function (b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            }, startRequest: function (a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            }, stopRequest: function (b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (b) {
                return a.data(b, "previousValue") || a.data(b, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(b, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function (b) {
            var c = {}, d = a(b).attr("class");
            return d && a.each(d.split(" "), function () {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        attributeRules: function (b) {
            var c = {}, d = a(b);
            for (var e in a.validator.methods) {
                var f;
                "required" === e ? (f = d.get(0).getAttribute(e), "" === f && (f = !0), f = !!f) : f = d.attr(e), f ? c[e] = f : d[0].getAttribute("type") === e && (c[e] = !0)
            }
            return c.maxlength && /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength, c
        },
        dataRules: function (b) {
            var c, d, e = {}, f = a(b);
            for (c in a.validator.methods) d = f.data("rule-" + c.toLowerCase()), void 0 !== d && (e[c] = d);
            return e
        },
        staticRules: function (b) {
            var c = {}, d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function (b, c) {
            return a.each(b, function (d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case"string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case"function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                }
            }), a.each(b, function (d, e) {
                b[d] = a.isFunction(e) ? e(c) : e
            }), a.each(["minlength", "maxlength"], function () {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength"], function () {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function (b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function () {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function (b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function (b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
            }, remote: function (b, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var e = this.previousValue(c);
                if (this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), e.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = e.message, d = "string" == typeof d && {url: d} || d, e.old === b) return e.valid;
                e.old = b;
                var f = this;
                this.startRequest(c);
                var g = {};
                return g[c.name] = b, a.ajax(a.extend(!0, {
                    url: d,
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    success: function (d) {
                        f.settings.messages[c.name].remote = e.originalMessage;
                        var g = d === !0 || "true" === d;
                        if (g) {
                            var h = f.formSubmitted;
                            f.prepareElement(c), f.formSubmitted = h, f.successList.push(c), delete f.invalid[c.name], f.showErrors()
                        } else {
                            var i = {}, j = d || f.defaultMessage(c, "remote");
                            i[c.name] = e.message = a.isFunction(j) ? j(b) : j, f.invalid[c.name] = !0, f.showErrors(i)
                        }
                        e.valid = g, f.stopRequest(c, g)
                    }
                }, d)), "pending"
            }, minlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d
            }, maxlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || d >= e
            }, rangelength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            }, min: function (a, b, c) {
                return this.optional(b) || a >= c
            }, max: function (a, b, c) {
                return this.optional(b) || c >= a
            }, range: function (a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            }, email: function (a, b) {
                return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)
            }, url: function (a, b) {
                return this.optional(b) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
            }, date: function (a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            }, dateISO: function (a, b) {
                return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
            }, number: function (a, b) {
                return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            }, digits: function (a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            }, creditcard: function (a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a)) return !1;
                var c = 0, d = 0, e = !1;
                a = a.replace(/\D/g, "");
                for (var f = a.length - 1; f >= 0; f--) {
                    var g = a.charAt(f);
                    d = parseInt(g, 10), e && (d *= 2) > 9 && (d -= 9), c += d, e = !e
                }
                return c % 10 === 0
            }, equalTo: function (b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    a(c).valid()
                }), b === e.val()
            }
        }
    }), a.format = a.validator.format
}(jQuery), function (a) {
    var b = {};
    if (a.ajaxPrefilter) a.ajaxPrefilter(function (a, c, d) {
        var e = a.port;
        "abort" === a.mode && (b[e] && b[e].abort(), b[e] = d)
    }); else {
        var c = a.ajax;
        a.ajax = function (d) {
            var e = ("mode" in d ? d : a.ajaxSettings).mode, f = ("port" in d ? d : a.ajaxSettings).port;
            return "abort" === e ? (b[f] && b[f].abort(),
                b[f] = c.apply(this, arguments)) : c.apply(this, arguments)
        }
    }
}(jQuery), function (a) {
    a.extend(a.fn, {
        validateDelegate: function (b, c, d) {
            return this.bind(c, function (c) {
                var e = a(c.target);
                return e.is(b) ? d.apply(e, arguments) : void 0
            })
        }
    })
}(jQuery);
//# sourceMappingURL=userCenter.min.js.map