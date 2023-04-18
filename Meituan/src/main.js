const { readFileSync, realpathSync } = require("fs");
const { join } = require("path");

// 全局变量用于导出加载器
let t;

// 人工补环境，此处 Cookie 已登录，涉及重要隐私内容，以外部文件加载形式添加到此文件
const document = JSON.parse(readFileSync(realpathSync(join(__dirname, "document.json")), "utf-8"));

// 这是一个自运行体
!(
    // 这个部分全都是加载器
    function (r) {
        i = {};
        function o(e) {
            var n = i[e];
            if (void 0 !== n)
                return n.exports;
            var t = i[e] = {
                id: e,
                loaded: !1,
                exports: {}
            };
            // 注意此处的 r 来自函数的参数名，必须与参数名称对应
            return r[e].call(t.exports, t, t.exports, o),
                t.loaded = !0,
                t.exports
        }
        o.m = r,
            o.amdO = {},
            e = [],
            o.O = function (n, t, r, i) {
                if (!t) {
                    var a = 1 / 0;
                    for (A = 0; A < e.length; A++) {
                        t = e[A][0],
                            r = e[A][1],
                            i = e[A][2];
                        for (var c = !0, s = 0; s < t.length; s++)
                            (!1 & i || a >= i) && Object.keys(o.O).every((function (e) {
                                return o.O[e](t[s])
                            }
                            )) ? t.splice(s--, 1) : (c = !1,
                                i < a && (a = i));
                        c && (e.splice(A--, 1),
                            n = r())
                    }
                    return n
                }
                i = i || 0;
                for (var A = e.length; A > 0 && e[A - 1][2] > i; A--)
                    e[A] = e[A - 1];
                e[A] = [t, r, i]
            }
            ,
            o.F = {},
            o.E = function (e) {
                Object.keys(o.F).map((function (n) {
                    o.F[n](e)
                }
                ))
            }
            ,
            o.n = function (e) {
                var n = e && e.__esModule ? function () {
                    return e.default
                }
                    : function () {
                        return e
                    }
                    ;
                return o.d(n, {
                    a: n
                }),
                    n
            }
            ,
            o.d = function (e, n) {
                for (var t in n)
                    o.o(n, t) && !o.o(e, t) && Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n[t]
                    })
            }
            ,
            o.f = {},
            o.e = function (e) {
                return Promise.all(Object.keys(o.f).reduce((function (n, t) {
                    return o.f[t](e, n),
                        n
                }
                ), []))
            }
            ,
            o.u = function (e) {
                return e + "_at_" + {
                    "whereami-knb": "d1eb58e98338f",
                    "whereami-weixin": "eb0fbf6b0285c",
                    "node_modules-@dp-owl-lib-index-js": "9dad6890d025a",
                    "node_modules-date-fns-esm-format-index-js": "59e17707443e2",
                    "node_modules-@sfe-montage-dynamic-label-eyjpzci6odc5fq-dist-dynamic-label-umd-js": "30127fc120a0b",
                    "static-home-components-home-page-homepage-school-jsx": "0671c91843077",
                    home: "f870982c98898",
                    evaluate: "7e38e64e2c142",
                    poipicker: "dc93493ae6426",
                    refundorder: "dbe14ade99058",
                    refundprocess: "123234f57108f",
                    mine: "8ca7dbc52a505",
                    "node_modules-@babel-runtime-helpers-esm-applydecorateddescriptor-js": "2bd7e43a4203c",
                    "node_modules-@babel-runtime-helpers-esm-get-js": "a59e39816426c",
                    orderdetail: "2cbc210caa7f2",
                    orderflow: "e2760d712b88c",
                    orderedit: "c8c981d163815",
                    "node_modules-core-js-modules-web-url-js": "0341f8288b32f",
                    orderlist: "450a834dc0729",
                    "node_modules-@better-scroll-core-dist-core-esm-js": "2783cc11e6268",
                    "node_modules-react-scroll-modules-index-js": "1043f620c546f",
                    "node_modules-recompose-dist-recompose-esm-js": "fb2f2315a763f",
                    "node_modules-@wmfe-common_module_mobile-comp-label-index-js": "4930d0b214517",
                    "static-home-components-menu-page-cart-container-jsx": "4e0b54165ced6",
                    menu: "389b0eac2409f",
                    menusearch: "754ce9603136d",
                    "static-home-app-preview-page-style-css": "0dc4eaca15d9b",
                    preview: "77c93136d4fe6",
                    poipickercity: "53697a3881216",
                    geofail: "316511a59bacc",
                    search: "69e588b04284b",
                    searchresult: "f6b94be540abb",
                    addresslist: "dbcf71da060af",
                    addaddress: "2927cbcf2c9d8",
                    poi: "422af2a3e5922",
                    brandlist: "20c75d994b649",
                    couponlist: "f1f73977595d5",
                    myfavorite: "e59b0364cb78a",
                    schoolchannel: "00471abd491de",
                    "static-home-app-edi-page-index-jsx": "3572a13926d30",
                    "static-home-app-privacy-page-privacypage-jsx": "4b20ff72e6b7b",
                    "node_modules-@dp-knb-compiled-common-log-js": "3b775d112a95f",
                    "node_modules-@dp-knb-compiled-dpapp-index-js": "b238dbc0a6ebc",
                    "node_modules-@dp-knb-compiled-mtnb-index-js": "f085116ec05f3",
                    "node_modules-@dp-knb-compiled-hbnb-index-js": "b3136a6429f65",
                    wx: "5903ceabf5e72",
                    titans: "78af583c7c0da",
                    dpzeus: "0b18a8b419cd7"
                }[e] + ".js"
            }
            ,
            o.g = function () {
                if ("object" == typeof globalThis)
                    return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" == typeof window)
                        return window
                }
            }(),
            o.hmd = function (e) {
                return (e = Object.create(e)).children || (e.children = []),
                    Object.defineProperty(e, "exports", {
                        enumerable: !0,
                        set: function () {
                            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
                        }
                    }),
                    e
            }
            ,
            o.o = function (e, n) {
                return Object.prototype.hasOwnProperty.call(e, n)
            }
            ,
            n = {},
            t = "waimai_c_openh5:",
            o.l = function (e, r, i, a) {
                if (n[e])
                    n[e].push(r);
                else {
                    var c, s;
                    if (void 0 !== i)
                        for (var A = document.getElementsByTagName("script"), u = 0; u < A.length; u++) {
                            var l = A[u];
                            if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == t + i) {
                                c = l;
                                break
                            }
                        }
                    if (!c) {
                        if (s = !0,
                            i && "__thunder__" in window && __thunder__ && __thunder__.running) {
                            a = i.slice(6),
                                n[e] = [r];
                            var d = function () {
                                var t = n[e];
                                delete n[e],
                                    t && t.forEach((function (n) {
                                        n({
                                            type: "thunder",
                                            target: {
                                                src: e
                                            }
                                        })
                                    }
                                    ))
                            };
                            return Promise.all([__thunder__.styleLoader(a), __thunder__.bundleLoader(a)]).then(d).catch(d)
                        }
                        (c = document.createElement("script")).charset = "utf-8",
                            c.timeout = 120,
                            o.nc && c.setAttribute("nonce", o.nc),
                            c.setAttribute("data-webpack", t + i),
                            c.src = e
                    }
                    n[e] = [r],
                        d = function (t, r) {
                            c.onerror = c.onload = null,
                                clearTimeout(p);
                            var i = n[e];
                            if (delete n[e],
                                c.parentNode && c.parentNode.removeChild(c),
                                i && i.forEach((function (e) {
                                    return e(r)
                                }
                                )),
                                t)
                                return t(r)
                        }
                        ;
                    var p = setTimeout(d.bind(null, void 0, {
                        type: "timeout",
                        target: c
                    }), 12e4);
                    c.onerror = d.bind(null, c.onerror),
                        c.onload = d.bind(null, c.onload),
                        s && document.head.appendChild(c)
                }
            }
            ,
            o.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            o.nmd = function (e) {
                return e.paths = [],
                    e.children || (e.children = []),
                    e
            }
            ,
            o.j = "index",
            o.p = "//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/",
            function () {
                var e = {
                    index: 0
                };
                o.f.j = function (n, t) {
                    var r = o.o(e, n) ? e[n] : void 0;
                    if (0 !== r)
                        if (r)
                            t.push(r[2]);
                        else {
                            var i = new Promise((function (t, i) {
                                r = e[n] = [t, i]
                            }
                            ));
                            t.push(r[2] = i);
                            var a = o.p + o.u(n)
                                , c = new Error;
                            o.l(a, (function (t) {
                                if (o.o(e, n) && (0 !== (r = e[n]) && (e[n] = void 0),
                                    r)) {
                                    var i = t && ("load" === t.type ? "missing" : t.type)
                                        , a = t && t.target && t.target.src;
                                    c.message = "Loading chunk " + n + " failed.\n(" + i + ": " + a + ")",
                                        c.name = "ChunkLoadError",
                                        c.type = i,
                                        c.request = a,
                                        r[1](c)
                                }
                            }
                            ), "chunk-" + n, n)
                        }
                }
                    ,
                    o.F.j = function (n) {
                        if (!o.o(e, n) || void 0 === e[n]) {
                            e[n] = null;
                            var t = document.createElement("link");
                            o.nc && t.setAttribute("nonce", o.nc),
                                t.rel = "prefetch",
                                t.as = "script",
                                t.href = o.p + o.u(n),
                                document.head.appendChild(t)
                        }
                    }
                    ,
                    o.O.j = function (n) {
                        return 0 === e[n]
                    }
                    ;
                var n = function (n, t) {
                    var r, i, a = t[0], c = t[1], s = t[2], A = 0;
                    for (r in c)
                        o.o(c, r) && (o.m[r] = c[r]);
                    if (s)
                        var u = s(o);
                    for (n && n(t); A < a.length; A++)
                        i = a[A],
                            o.o(e, i) && e[i] && e[i][0](),
                            e[a[A]] = 0;
                    return o.O(u)
                }
                // 这里调用的 self 会出现异常，对其注释以实现逻辑屏蔽
                //     , t = self.webpackChunkwaimai_c_openh5 = self.webpackChunkwaimai_c_openh5 || [];
                // t.forEach(n.bind(null, 0)),
                //     t.push = n.bind(null, t.push.bind(t))
            }(),
            o.O(0, ["index"], (function () {
                ["common", "node_modules-@better-scroll-core-dist-core-esm-js", "node_modules-react-scroll-modules-index-js", "node_modules-recompose-dist-recompose-esm-js", "node_modules-@wmfe-common_module_mobile-comp-label-index-js", "static-home-components-menu-page-cart-container-jsx", "menu"].map(o.E)
            }
            ), 5);

        // 这是片段自带的加载过程
        // var a = o.O(void 0, ["common", "node_modules-@babel-runtime-helpers-esm-classcallcheck-js", "node_modules-@babel-runtime-helpers-esm-getprototypeof-js", "node_modules-@babel-runtime-helpers-esm-slicedtoarray-js", "node_modules-@babel-runtime-helpers-esm-objectwithoutproperties-js", "node_modules-@babel-runtime-helpers-esm-asynctogenerator-js", "node_modules-@dp-wm-component-location-index-js", "static-cortex_modules-@cortex-zepto-dist-zepto-js"], (function () {
        //     return o(88119)
        // }
        // ));
        // a = o.O(a)

        // 把加载器导出
        t = o;
    }(
        // 这个部分是以对象形式存储的模块
        {
            20125: function (e) {
                var n, t, r, i = function (e) {
                    return "[object Function]" == Object.prototype.toString.call(e)
                }, o = function (e) {
                    return Array.prototype.slice.call(arguments, 1).forEach((function (n) {
                        if (n)
                            for (var t in n)
                                e[t] = n[t]
                    }
                    )),
                        e
                }, a = /\+/g;
                function c(e) {
                    return t.raw ? e : encodeURIComponent(e)
                }
                function s(e) {
                    return c(t.json ? JSON.stringify(e) : String(e))
                }
                function A(e, n) {
                    var r = t.raw ? e : function (e) {
                        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                        try {
                            return e = decodeURIComponent(e.replace(a, " ")),
                                t.json ? JSON.parse(e) : e
                        } catch (n) { }
                    }(e);
                    return i(n) ? n(r) : r
                }
                (t = n = function (e, n, r) {
                    if (void 0 !== n && !i(n)) {
                        if ("number" == typeof (r = o({}, t.defaults, r)).expires) {
                            var a = r.expires
                                , u = r.expires = new Date;
                            u.setTime(+u + 864e5 * a)
                        }
                        return document.cookie = [c(e), "=", s(n), r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("")
                    }
                    for (var l, d = e ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], f = 0, m = p.length; f < m; f++) {
                        var g = p[f].split("=")
                            , h = (l = g.shift(),
                                t.raw ? l : decodeURIComponent(l))
                            , b = g.join("=");
                        if (e && e === h) {
                            d = A(b, n);
                            break
                        }
                        e || void 0 === (b = A(b)) || (d[h] = b)
                    }
                    return d
                }
                ).defaults = {},
                    r = function (e, t) {
                        return void 0 !== n(e) && (n(e, "", o({}, t, {
                            expires: -1
                        })),
                            !n(e))
                    }
                    ,
                    n.remove = r,
                    e.exports = n
            }
        }
    )
);

// 主函数逻辑
(function () {
    let p = t(20125), f = t.n(p), o = f()("iuuid") || f()("uuid") || f()("_lxsdk");
    console.info(o);
})();
