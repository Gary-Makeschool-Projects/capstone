/*
 * Copyright 2016 Small Batch, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
! function() {
    function aa(a) { return a.call.apply(a.bind, arguments) }

    function ba(a, b) { if (!a) throw Error(); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function() { var c = Array.prototype.slice.call(arguments); return Array.prototype.unshift.apply(c, d), a.apply(b, c) } } return function() { return a.apply(b, arguments) } }

    function p() { return (p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba).apply(null, arguments) }

    function ca(a, b) { this.a = a, this.m = b || a, this.c = this.m.document }

    function t(a, b, c, d) {
        if (b = a.c.createElement(b), c)
            for (var e in c) c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
        return d && b.appendChild(a.c.createTextNode(d)), b
    }

    function u(a, b, c) {
        (a = a.c.getElementsByTagName(b)[0]) || (a = document.documentElement), a.insertBefore(c, a.lastChild)
    }

    function v(a) { a.parentNode && a.parentNode.removeChild(a) }

    function w(a, b, c) {
        b = b || [], c = c || [];
        for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
            for (var f = !1, g = 0; g < d.length; g += 1)
                if (b[e] === d[g]) { f = !0; break }
            f || d.push(b[e])
        }
        for (b = [], e = 0; e < d.length; e += 1) {
            for (f = !1, g = 0; g < c.length; g += 1)
                if (d[e] === c[g]) { f = !0; break }
            f || b.push(d[e])
        }
        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function y(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b) return !0;
        return !1
    }

    function z(a) { if ("string" == typeof a.f) return a.f; var b = a.m.location.protocol; return "about:" == b && (b = a.a.location.protocol), "https:" == b ? "https:" : "http:" }

    function ea(a) { return a.m.location.hostname || a.a.location.hostname }

    function A(a, b, c) {
        function d() { k && e && f && (k(g), k = null) }
        b = t(a, "link", { rel: "stylesheet", href: b, media: "all" });
        var e = !1,
            f = !0,
            g = null,
            k = c || null;
        da ? (b.onload = function() { e = !0, d() }, b.onerror = function() { e = !0, g = Error("Stylesheet failed to load"), d() }) : setTimeout(function() { e = !0, d() }, 0), u(a, "head", b)
    }

    function B(a, b, c, d) {
        var e = a.c.getElementsByTagName("head")[0];
        if (e) {
            var f = t(a, "script", { src: b }),
                g = !1;
            return f.onload = f.onreadystatechange = function() { g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f)) }, e.appendChild(f), setTimeout(function() { g || (g = !0, c && c(Error("Script load timeout"))) }, d || 5e3), f
        }
        return null
    }

    function C() { this.a = 0, this.c = null }

    function D(a) {
        return a.a++,
            function() { a.a--, E(a) }
    }

    function F(a, b) { a.c = b, E(a) }

    function E(a) { 0 == a.a && a.c && (a.c(), a.c = null) }

    function G(a) { this.a = a || "-" }

    function H(a, b) {
        this.c = a, this.f = 4, this.a = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.a = c[1], this.f = parseInt(c[2], 10))
    }

    function fa(a) { return I(a) + " " + a.f + "00 300px " + J(a.c) }

    function J(a) {
        var b = [];
        a = a.split(/,\s*/);
        for (var c = 0; c < a.length; c++) { var d = a[c].replace(/['"]/g, ""); - 1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d) }
        return b.join(",")
    }

    function K(a) { return a.a + a.f }

    function I(a) { var b = "normal"; return "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic"), b }

    function ga(a) {
        var b = 4,
            c = "n",
            d = null;
        return a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10)))), c + b
    }

    function ha(a, b) { this.c = a, this.f = a.m.document.documentElement, this.h = b, this.a = new G("-"), this.j = !1 !== b.events, this.g = !1 !== b.classes }

    function ia(a) { a.g && w(a.f, [a.a.c("wf", "loading")]), L(a, "loading") }

    function M(a) {
        if (a.g) {
            var b = y(a.f, a.a.c("wf", "active")),
                c = [],
                d = [a.a.c("wf", "loading")];
            b || c.push(a.a.c("wf", "inactive")), w(a.f, c, d)
        }
        L(a, "inactive")
    }

    function L(a, b, c) { a.j && a.h[b] && (c ? a.h[b](c.c, K(c)) : a.h[b]()) }

    function ja() { this.c = {} }

    function ka(a, b, c) {
        var e, d = [];
        for (e in b)
            if (b.hasOwnProperty(e)) {
                var f = a.c[e];
                f && d.push(f(b[e], c))
            }
        return d
    }

    function N(a, b) { this.c = a, this.f = b, this.a = t(this.c, "span", { "aria-hidden": "true" }, this.f) }

    function O(a) { u(a.c, "body", a.a) }

    function P(a) { return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + J(a.c) + ";font-style:" + I(a) + ";font-weight:" + a.f + "00;" }

    function Q(a, b, c, d, e, f) { this.g = a, this.j = b, this.a = d, this.c = c, this.f = e || 3e3, this.h = f || void 0 }

    function R(a, b, c, d, e, f, g) { this.v = a, this.B = b, this.c = c, this.a = d, this.s = g || "BESbswy", this.f = {}, this.w = e || 3e3, this.u = f || null, this.o = this.j = this.h = this.g = null, this.g = new N(this.c, this.s), this.h = new N(this.c, this.s), this.j = new N(this.c, this.s), this.o = new N(this.c, this.s), a = P(a = new H(this.a.c + ",serif", K(this.a))), this.g.a.style.cssText = a, a = P(a = new H(this.a.c + ",sans-serif", K(this.a))), this.h.a.style.cssText = a, a = P(a = new H("serif", K(this.a))), this.j.a.style.cssText = a, a = P(a = new H("sans-serif", K(this.a))), this.o.a.style.cssText = a, O(this.g), O(this.h), O(this.j), O(this.o) }

    function U() {
        if (null === T) {
            var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
            T = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10))
        }
        return T
    }

    function ma(a, b, c) {
        for (var d in S)
            if (S.hasOwnProperty(d) && b === a.f[S[d]] && c === a.f[S[d]]) return !0;
        return !1
    }

    function la(a) {
        var d, b = a.g.a.offsetWidth,
            c = a.h.a.offsetWidth;
        (d = b === a.f.serif && c === a.f["sans-serif"]) || (d = U() && ma(a, b, c)), d ? q() - a.A >= a.w ? U() && ma(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : na(a) : V(a, a.v)
    }

    function na(a) { setTimeout(p(function() { la(this) }, a), 50) }

    function V(a, b) { setTimeout(p(function() { v(this.g.a), v(this.h.a), v(this.j.a), v(this.o.a), b(this.a) }, a), 0) }

    function W(a, b, c) { this.c = a, this.a = b, this.f = 0, this.o = this.j = !1, this.s = c }

    function oa(a) { 0 == --a.f && a.j && (a.o ? ((a = a.a).g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), L(a, "active")) : M(a.a)) }

    function pa(a) { this.j = a, this.a = new ja, this.h = 0, this.f = this.g = !0 }

    function ra(a, b, c, d, e) {
        var f = 0 == --a.h;
        (a.f || a.g) && setTimeout(function() {
            var a = e || null,
                k = d || {};
            if (0 === c.length && f) M(b.a);
            else {
                b.f += c.length, f && (b.j = f);
                var h, m = [];
                for (h = 0; h < c.length; h++) {
                    var l = c[h],
                        n = k[l.c],
                        r = b.a,
                        x = l;
                    r.g && w(r.f, [r.a.c("wf", x.c, K(x).toString(), "loading")]), L(r, "fontloading", x), r = null, null === X && (X = !!window.FontFace && (!(x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) || 42 < parseInt(x[1], 10))), r = X ? new Q(p(b.g, b), p(b.h, b), b.c, l, b.s, n) : new R(p(b.g, b), p(b.h, b), b.c, l, b.s, a, n), m.push(r)
                }
                for (h = 0; h < m.length; h++) m[h].start()
            }
        }, 0)
    }

    function qa(a, b, c) {
        var d = [],
            e = c.timeout;
        ia(b);
        d = ka(a.a, c, a.c);
        var f = new W(a.c, b, e);
        for (a.h = d.length, b = 0, c = d.length; b < c; b++) d[b].load(function(b, d, c) { ra(a, f, b, d, c) })
    }

    function sa(a, b) { this.c = a, this.a = b }

    function ta(a, b, c) { return z(a.c) + "//" + (a = (a.a.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "")) + "/" + b + ".js" + (c ? "?v=" + c : "") }

    function ua(a, b) { this.c = a, this.a = b }

    function va(a, b, c) { this.c = a || b + wa, this.a = [], this.f = [], this.g = c || "" }

    function xa(a, b) {
        for (var c = b.length, d = 0; d < c; d++) {
            var e = b[d].split(":");
            3 == e.length && a.f.push(e.pop());
            var f = "";
            2 == e.length && "" != e[1] && (f = ":"), a.a.push(e.join(f))
        }
    }

    function ya(a) { if (0 == a.a.length) throw Error("No fonts to load!"); if (-1 != a.c.indexOf("kit=")) return a.c; for (var b = a.a.length, c = [], d = 0; d < b; d++) c.push(a.a[d].replace(/ /g, "+")); return b = a.c + "?family=" + c.join("%7C"), 0 < a.f.length && (b += "&subset=" + a.f.join(",")), 0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g)), b }

    function za(a) { this.f = a, this.a = [], this.c = {} }

    function Ea(a) {
        for (var b = a.f.length, c = 0; c < b; c++) {
            var d = a.f[c].split(":"),
                e = d[0].replace(/\+/g, " "),
                f = ["n4"];
            if (2 <= d.length) {
                var g;
                if (g = [], k = d[1])
                    for (var k, h = (k = k.split(",")).length, m = 0; m < h; m++) {
                        var l;
                        if ((l = k[m]).match(/^[\w-]+$/))
                            if (null == (n = Da.exec(l.toLowerCase()))) l = "";
                            else {
                                if (l = null == (l = n[2]) || "" == l ? "n" : Ca[l], null == (n = n[1]) || "" == n) n = "4";
                                else var r = Ba[n],
                                    n = r || (isNaN(n) ? "4" : n.substr(0, 1));
                                l = [l, n].join("")
                            }
                        else l = "";
                        l && g.push(l)
                    }
                0 < g.length && (f = g), 3 == d.length && (g = [], 0 < (d = (d = d[2]) ? d.split(",") : g).length && (d = Aa[d[0]]) && (a.c[e] = d))
            }
            for (a.c[e] || (d = Aa[e]) && (a.c[e] = d), d = 0; d < f.length; d += 1) a.a.push(new H(e, f[d]))
        }
    }

    function Fa(a, b) { this.c = a, this.a = b }

    function Ha(a, b) { this.c = a, this.a = b }

    function Ia(a, b) { this.c = a, this.f = b, this.a = [] }
    var q = Date.now || function() { return +new Date },
        da = !!window.FontFace;
    G.prototype.c = function() { for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase()); return b.join(this.a) }, Q.prototype.start = function() {
        var a = this.c.m.document,
            b = this,
            c = q(),
            d = new Promise(function(d, e) {
                function k() { q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function(a) { 1 <= a.length ? d() : setTimeout(k, 25) }, function() { e() }) }
                k()
            }),
            e = new Promise(function(a, d) { setTimeout(d, b.f) });
        Promise.race([e, d]).then(function() { b.g(b.a) }, function() { b.j(b.a) })
    };
    var S = { D: "serif", C: "sans-serif" },
        T = null;
    R.prototype.start = function() { this.f.serif = this.j.a.offsetWidth, this.f["sans-serif"] = this.o.a.offsetWidth, this.A = q(), la(this) };
    var X = null;
    W.prototype.g = function(a) {
        var b = this.a;
        b.g && w(b.f, [b.a.c("wf", a.c, K(a).toString(), "active")], [b.a.c("wf", a.c, K(a).toString(), "loading"), b.a.c("wf", a.c, K(a).toString(), "inactive")]), L(b, "fontactive", a), this.o = !0, oa(this)
    }, W.prototype.h = function(a) {
        var b = this.a;
        if (b.g) {
            var c = y(b.f, b.a.c("wf", a.c, K(a).toString(), "active")),
                d = [],
                e = [b.a.c("wf", a.c, K(a).toString(), "loading")];
            c || d.push(b.a.c("wf", a.c, K(a).toString(), "inactive")), w(b.f, d, e)
        }
        L(b, "fontinactive", a), oa(this)
    }, pa.prototype.load = function(a) { this.c = new ca(this.j, a.context || this.j), this.g = !1 !== a.events, this.f = !1 !== a.classes, qa(this, new ha(this.c, a), a) }, sa.prototype.load = function(a) {
        function b() {
            if (f["__mti_fntLst" + d]) {
                var h, c = f["__mti_fntLst" + d](),
                    e = [];
                if (c)
                    for (var m = 0; m < c.length; m++) {
                        var l = c[m].fontfamily;
                        null != c[m].fontStyle && null != c[m].fontWeight ? (h = c[m].fontStyle + c[m].fontWeight, e.push(new H(l, h))) : e.push(new H(l))
                    }
                a(e)
            } else setTimeout(function() { b() }, 50)
        }
        var c = this,
            d = c.a.projectId,
            e = c.a.version;
        if (d) {
            var f = c.c.m;
            B(this.c, ta(c, d, e), function(e) { e ? a([]) : (f["__MonotypeConfiguration__" + d] = function() { return c.a }, b()) }).id = "__MonotypeAPIScript__" + d
        } else a([])
    }, ua.prototype.load = function(a) {
        var b, c, d = this.a.urls || [],
            e = this.a.families || [],
            f = this.a.testStrings || {},
            g = new C;
        for (b = 0, c = d.length; b < c; b++) A(this.c, d[b], D(g));
        var k = [];
        for (b = 0, c = e.length; b < c; b++)
            if ((d = e[b].split(":"))[1])
                for (var h = d[1].split(","), m = 0; m < h.length; m += 1) k.push(new H(d[0], h[m]));
            else k.push(new H(d[0]));
        F(g, function() { a(k, f) })
    };
    var wa = "//fonts.googleapis.com/css",
        Aa = { latin: "BESbswy", "latin-ext": "\xe7\xf6\xfc\u011f\u015f", cyrillic: "\u0439\u044f\u0416", greek: "\u03b1\u03b2\u03a3", khmer: "\u1780\u1781\u1782", Hanuman: "\u1780\u1781\u1782" },
        Ba = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" },
        Ca = { i: "i", italic: "i", n: "n", normal: "n" },
        Da = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,
        Ga = { Arimo: !0, Cousine: !0, Tinos: !0 };
    Fa.prototype.load = function(a) {
        var b = new C,
            c = this.c,
            d = new va(this.a.api, z(c), this.a.text),
            e = this.a.families;
        xa(d, e);
        var f = new za(e);
        Ea(f), A(c, ya(d), D(b)), F(b, function() { a(f.a, f.c, Ga) })
    }, Ha.prototype.load = function(a) {
        var b = this.a.id,
            c = this.c.m;
        b ? B(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function(b) {
            if (b) a([]);
            else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
                b = c.Typekit.config.fn;
                for (var e = [], f = 0; f < b.length; f += 2)
                    for (var g = b[f], k = b[f + 1], h = 0; h < k.length; h++) e.push(new H(g, k[h]));
                try { c.Typekit.load({ events: !1, classes: !1, async: !0 }) } catch (m) {}
                a(e)
            }
        }, 2e3) : a([])
    }, Ia.prototype.load = function(a) {
        var b = this.f.id,
            c = this.c.m,
            d = this;
        b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function(b, c) {
            for (var g = 0, k = c.fonts.length; g < k; ++g) {
                var h = c.fonts[g];
                d.a.push(new H(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)))
            }
            a(d.a)
        }, B(this.c, z(this.c) + (this.f.api || "//f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function(b) { b && a([]) })) : a([])
    };
    var Y = new pa(window);
    Y.a.c.custom = function(a, b) { return new ua(b, a) }, Y.a.c.fontdeck = function(a, b) { return new Ia(b, a) }, Y.a.c.monotype = function(a, b) { return new sa(b, a) }, Y.a.c.typekit = function(a, b) { return new Ha(b, a) }, Y.a.c.google = function(a, b) { return new Fa(b, a) };
    var Z = { load: p(Y.load, Y) };
    "function" == typeof define && define.amd ? define(function() { return Z }) : "undefined" != typeof module && module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig))
}();