(function (e) {
    function t(t) {
        for (var n, a, r = t[0], s = t[1], l = t[2], d = 0, u = []; d < r.length; d++)
            a = r[d],
                Object.prototype.hasOwnProperty.call(c, a) && c[a] && u.push(c[a][0]),
                c[a] = 0;
        for (n in s)
            Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
        m && m(t);
        while (u.length)
            u.shift()();
        return i.push.apply(i, l || []),
            o()
    }
    function o() {
        for (var e, t = 0; t < i.length; t++) {
            for (var o = i[t], n = !0, a = 1; a < o.length; a++) {
                var r = o[a];
                0 !== c[r] && (n = !1)
            }
            n && (i.splice(t--, 1),
                e = s(s.s = o[0]))
        }
        return e
    }
    var n = {}
        , a = {
            app: 0
        }
        , c = {
            app: 0
        }
        , i = [];
    function r(e) {
        return s.p + "js/" + ({
            "DocHistory~termBank": "DocHistory~termBank",
            DocHistory: "DocHistory",
            termBank: "termBank",
            NoLogin: "NoLogin",
            Person: "Person",
            "documentUpload~textTranslate": "documentUpload~textTranslate",
            documentUpload: "documentUpload",
            textTranslate: "textTranslate"
        }[e] || e) + "." + {
            "DocHistory~termBank": "d0a56700",
            DocHistory: "292b54d1",
            termBank: "7a4a9f1f",
            NoLogin: "2da5093d",
            Person: "7701052c",
            "documentUpload~textTranslate": "984ae09f",
            documentUpload: "8db3d93f",
            textTranslate: "b714faed"
        }[e] + ".js"
    }
    function s(t) {
        if (n[t])
            return n[t].exports;
        var o = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(o.exports, o, o.exports, s),
            o.l = !0,
            o.exports
    }
    s.e = function (e) {
        var t = []
            , o = {
                "DocHistory~termBank": 1,
                DocHistory: 1,
                termBank: 1,
                NoLogin: 1,
                Person: 1,
                "documentUpload~textTranslate": 1,
                documentUpload: 1,
                textTranslate: 1
            };
        a[e] ? t.push(a[e]) : 0 !== a[e] && o[e] && t.push(a[e] = new Promise((function (t, o) {
            for (var n = "css/" + ({
                "DocHistory~termBank": "DocHistory~termBank",
                DocHistory: "DocHistory",
                termBank: "termBank",
                NoLogin: "NoLogin",
                Person: "Person",
                "documentUpload~textTranslate": "documentUpload~textTranslate",
                documentUpload: "documentUpload",
                textTranslate: "textTranslate"
            }[e] || e) + "." + {
                "DocHistory~termBank": "fa29fc09",
                DocHistory: "4f1aad07",
                termBank: "c6a579d8",
                NoLogin: "602687cf",
                Person: "5b36ba5e",
                "documentUpload~textTranslate": "ea48e3fc",
                documentUpload: "5dc3c7f0",
                textTranslate: "90afb240"
            }[e] + ".css", c = s.p + n, i = document.getElementsByTagName("link"), r = 0; r < i.length; r++) {
                var l = i[r]
                    , d = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (d === n || d === c))
                    return t()
            }
            var u = document.getElementsByTagName("style");
            for (r = 0; r < u.length; r++) {
                l = u[r],
                    d = l.getAttribute("data-href");
                if (d === n || d === c)
                    return t()
            }
            var m = document.createElement("link");
            m.rel = "stylesheet",
                m.type = "text/css",
                m.onload = t,
                m.onerror = function (t) {
                    var n = t && t.target && t.target.src || c
                        , i = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                    i.code = "CSS_CHUNK_LOAD_FAILED",
                        i.request = n,
                        delete a[e],
                        m.parentNode.removeChild(m),
                        o(i)
                }
                ,
                m.href = c;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(m)
        }
        )).then((function () {
            a[e] = 0
        }
        )));
        var n = c[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var i = new Promise((function (t, o) {
                    n = c[e] = [t, o]
                }
                ));
                t.push(n[2] = i);
                var l, d = document.createElement("script");
                d.charset = "utf-8",
                    d.timeout = 120,
                    s.nc && d.setAttribute("nonce", s.nc),
                    d.src = r(e);
                var u = new Error;
                l = function (t) {
                    d.onerror = d.onload = null,
                        clearTimeout(m);
                    var o = c[e];
                    if (0 !== o) {
                        if (o) {
                            var n = t && ("load" === t.type ? "missing" : t.type)
                                , a = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + n + ": " + a + ")",
                                u.name = "ChunkLoadError",
                                u.type = n,
                                u.request = a,
                                o[1](u)
                        }
                        c[e] = void 0
                    }
                }
                    ;
                var m = setTimeout((function () {
                    l({
                        type: "timeout",
                        target: d
                    })
                }
                ), 12e4);
                d.onerror = d.onload = l,
                    document.head.appendChild(d)
            }
        return Promise.all(t)
    }
        ,
        s.m = e,
        s.c = n,
        s.d = function (e, t, o) {
            s.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }
        ,
        s.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        s.t = function (e, t) {
            if (1 & t && (e = s(e)),
                8 & t)
                return e;
            if (4 & t && "object" === typeof e && e && e.__esModule)
                return e;
            var o = Object.create(null);
            if (s.r(o),
                Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
                for (var n in e)
                    s.d(o, n, function (t) {
                        return e[t]
                    }
                        .bind(null, n));
            return o
        }
        ,
        s.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e["default"]
            }
                : function () {
                    return e
                }
                ;
            return s.d(t, "a", t),
                t
        }
        ,
        s.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        s.p = "",
        s.oe = function (e) {
            throw console.error(e),
            e
        }
        ;
    var l = window["webpackJsonp"] = window["webpackJsonp"] || []
        , d = l.push.bind(l);
    l.push = t,
        l = l.slice();
    for (var u = 0; u < l.length; u++)
        t(l[u]);
    var m = d;
    i.push([0, "chunk-vendors"]),
        o()
}
)({
    0: function (e, t, o) {
        e.exports = o("56d7")
    },
    "00a6": function (e, t, o) { },
    "04b3": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASYSURBVHgB7Zs9a1RBFIbf9Qf40YrC2hrB2ChJ4wqCWikIWhpEaw3ab9Iraq1oLFUE7QIKro1BGxNQscuaiK0hf2A9L3PG3F2ydz73I3ofOJm9y+zuPe/MnDl3ZgJUVFRUVFT8t9QwBDqdTl2KhthRLfcWzNJWWxZbEWvVarU2diri9F6xpthqJ55VsXsq4EDI3gPkZhtSNGFa2rIptij2VWxNy001ywGxg2JHxKbFJvQ9y4LYfO5ekU0AbaV7Yhf0LTr3DMbxJcQxJXZZ7FLhvQVkFCKLAOL8DSnmYMY0HX+otok8sGdQhFt63YYRYQGJJAvAMSrFTb1kS1OMnxgMFIIi2B5xX0SYRQLRAjDISfFObBKmpe/CtPowuCZ2W2w3zKxxSoTYQARRAvQ4vy52FSawDRP2hpcwgTJahFgBPmPL+YsYXJd30SWCCHAMgexCIDrmx8F59NzDpN5bEEE9QH5gRoonMGP+NEbrfBHmDOwJjAmz0hPu+37QuwfoPN/USwa8cXGeMP7c0dfNkMwxZAjQ+TpMcjOsaB/CI7EPMLmI91DwGgKq6KpeHsd4tX4RBsU3MEOBs0LL9QHfHhDa9T+JfUR3Lh/LwcL3uWBQtL2z6VHfLYC2/oxePoM/xSkqlpjvsCl4Q/OVUnx6gE1z6bxv17dTU4oIxc/a6c4H+xBGbroq+whwXsvn8Kc4P8eIsJ3zIXFnUcsrroqlQbAQ/HgTJxBOjCOpzlu+wwTDugTDH/0quXpAQ8vYPD+0J+RynthecKqskkuASS1jFzSIrwg5nSe20SbLKrkEOKrlF6ThEiG382RNy5NllVwC1LVcRzr9RBiE8+SblqVToSsIdvTlfuSj1+Ea8jtPGAAZCDckCO7rV2kUApDeYTCoR+tf/CMC9PUzeD3gX8MlgF1i2o189A6B1IwxiWELsF3Ay5E29/st0i6r5CvAEaTTL9qnps1lv0faZZVcArzv+bKUmymb6gYhwoSWK2WVXAIsa3kY8fjO87lFmNJyuaySS4CWlucQR2iSk1MEO2xbZZVKBdANSBqD4BTCiM3wcogwrZ9puzZRffKAp1qehT+p6W2qCHbv8LWronNRVJeVfsOstByH344v1/BypLe9QvqsSfAzdv3wUHIP0P22FswwuA5/cqS3Md9hW3/B5wyB77J4A2YzdNx2hHoJan3i9Syg6+uvYHqB97bTCLAHKLxan4Q8DPEgAocDI2zIUBgWvCd2/7bYvO+HvAVQRe0XU+kJjA/25AgJOj8U9Disu64PYIbCY4zg6W0b7EzBe3oQem6oOiCBOLjUvIwRPsdj60zA3yMyiCBKAM0NiiK8xXADI38r+XwQyXFMjnHhhl5yT26QhycoNvf+p/WaY965/1dGroOSM9g6QEEoQshmqgubhV7X12zt+ZCjMP3IfVR2Dt0bkhThBczJjRjY0mdgjsvaZTkmZLNjdVS2SB8hOFtwq2pJy3V0b7bQuT0wgY3dnAsw59C9FtmCafUWdgIUgvGhk35cfs7noEMsw/6HCeYO3G+sYytekI2CcR2SkX1n/8NERUVFRUXF+PMHJygcYfKZSDQAAAAASUVORK5CYII="
    },
    1: function (e, t) { },
    10: function (e, t) { },
    11: function (e, t) { },
    12: function (e, t) { },
    13: function (e, t) { },
    14: function (e, t) { },
    "1a68": function (e, t, o) {
        "use strict";
        o.r(t);
        var n = o("8139")
            , a = o("8544")
            , c = o("c34f");
        const i = {
            secretKey: "",
            dictResult: {},
            decodeKey: "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl",
            decodeIv: "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4",
            allowStroke: !1,
            showPjm: !1,
            showRomanPronunciation: !1,
            showWordsNumber: !0
        }
            , r = {
                secretKey: e => e.secretKey,
                dictResult: e => e.dictResult
            }
            , s = {
                fetchTextTranslateSecretKey: ({ commit: e }, t) => {
                    const o = "webfanyi-key-getter"
                        , a = "asdjnjfenknafdfsdfsd";
                    n["a"].getTextTranslateSecretKey({
                        keyid: o
                    }, a).then(t => {
                        0 === t.code && t.data.secretKey && e("UPDATE_SECRET_KEY", t.data.secretKey)
                    }
                    ).catch(e => { }
                    )
                }
                ,
                setDictResult: ({ commit: e }, t) => {
                    e("SET_DICTRESULT", t)
                }
                ,
                initTextTranslateSettingStore: ({ commit: e }, t) => {
                    const o = a["a"].get("allowStroke")
                        , n = a["a"].get("showPjm")
                        , c = a["a"].get("showRomanPronunciation")
                        , i = a["a"].get("showWordsNumber");
                    e("SET_ALLOW_STROKE", null !== o && o),
                        e("SET_SHOW_PJM", null !== n && n),
                        e("SET_SHOW_ROMAN_PRONUNCICATION", null !== c && c),
                        e("SET_SHOW_WORDS_NUMBER", null === i || i)
                }
            }
            , l = {
                UPDATE_SECRET_KEY(e, t) {
                    e.secretKey = t
                },
                SET_DICTRESULT(e, t) {
                    e.dictResult = t
                },
                SET_ALLOW_STROKE(e, t) {
                    e.allowStroke = t,
                        a["a"].set("allowStroke", t),
                        Object(c["b"])(t)
                },
                SET_SHOW_PJM(e, t) {
                    e.showPjm = t,
                        a["a"].set("showPjm", t)
                },
                SET_SHOW_ROMAN_PRONUNCICATION(e, t) {
                    e.showRomanPronunciation = t,
                        a["a"].set("showRomanPronunciation", t)
                },
                SET_SHOW_WORDS_NUMBER(e, t) {
                    e.showWordsNumber = t,
                        a["a"].set("showWordsNumber", t)
                }
            };
        t["default"] = {
            state: i,
            getters: r,
            mutations: l,
            actions: s
        }
    },
    "1bd0": function (e, t, o) { },
    "1dc7": function (e, t, o) {
        "use strict";
        o("69b5")
    },
    2: function (e, t) { },
    2201: function (e, t, o) { },
    "283b": function (e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "2caa": function (e, t, o) {
        "use strict";
        var n = o("7a23");
        const a = {
            key: 0,
            class: "interfaceDialogMask"
        }
            , c = {
                class: "interfaceDialog-body"
            };
        function i(e, t, o, i, r, s) {
            return o.dialogVisible ? (Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", a, [Object(n["createElementVNode"])("div", {
                    class: Object(n["normalizeClass"])(["interfaceDialog", {
                        "interfaceDialog-default-style": o.withDialogStyle
                    }, {
                            isCenter: o.isCenter
                        }]),
                    style: Object(n["normalizeStyle"])({
                        width: s.pxStyle(o.width),
                        height: s.pxStyle(o.height),
                        top: s.pxStyle(o.top),
                        left: s.pxStyle(o.left)
                    }),
                    ref: "interfaceDialog"
                }, [Object(n["createElementVNode"])("div", c, [Object(n["renderSlot"])(e.$slots, "default", {}, void 0, !0)])], 6)])) : Object(n["createCommentVNode"])("", !0)
        }
        var r = {
            name: "InterfaceDialog",
            components: {},
            props: {
                dialogVisible: {
                    type: Boolean,
                    required: !0,
                    default: !1
                },
                width: {
                    type: [Number, String],
                    required: !0,
                    default: "auto"
                },
                height: {
                    type: [Number, String],
                    required: !0,
                    default: "auto"
                },
                top: {
                    type: [Number, String],
                    required: !0,
                    default: 0
                },
                left: {
                    type: [Number, String],
                    required: !0,
                    default: 0
                },
                withDialogStyle: {
                    type: Boolean,
                    default: !0
                },
                isCenter: {
                    type: Boolean,
                    default: !1
                }
            },
            data() {
                return {
                    promiseStatus: {}
                }
            },
            methods: {
                pxStyle(e) {
                    return this.isString(e) ? e : e + "px"
                },
                isString(e) {
                    return "string" === typeof e
                },
                isNumber(e) {
                    return "number" === typeof e
                },
                closeinterfaceDialog() {
                    this.$emit("closeDialog")
                },
                modalClickEventHandler(e) {
                    this.$refs.interfaceDialog && !this.$refs.interfaceDialog.contains(e.target) && this.closeinterfaceDialog()
                }
            },
            watch: {
                dialogVisible: {
                    handler: function (e) {
                        e ? this.$nextTick(() => {
                            setTimeout(() => {
                                document.body.addEventListener("click", this.modalClickEventHandler, !0)
                            }
                                , 10)
                        }
                        ) : document.body.removeEventListener("click", this.modalClickEventHandler, !0)
                    }
                }
            }
        }
            , s = (o("fe14"),
                o("d959"))
            , l = o.n(s);
        const d = l()(r, [["render", i], ["__scopeId", "data-v-3395756a"]]);
        t["a"] = d
    },
    3: function (e, t) { },
    "349e": function (e, t, o) { },
    "396f": function (e, t, o) { },
    "3c48": function (e, t, o) { },
    "3eaa": function (e, t, o) { },
    4: function (e, t) { },
    4260: function (e, t, o) {
        "use strict";
        o.d(t, "b", (function () {
            return c
        }
        ));
        const n = (e, t) => {
            const o = new Date
                , n = new Date(e)
                , a = new Date(t);
            return o >= n && o <= a
        }
            , a = (e, t) => {
                let o;
                return function (...n) {
                    const a = this;
                    clearTimeout(o),
                        o = setTimeout(() => {
                            e.apply(a, n)
                        }
                            , t)
                }
            }
            , c = (e, t) => {
                let o, n = 0;
                return function () {
                    const a = this
                        , c = arguments
                        , i = +Date.now();
                    i - n >= t ? (clearTimeout(o),
                        e.apply(a, c),
                        n = i) : (clearTimeout(o),
                            o = setTimeout(() => {
                                e.apply(a, c)
                            }
                                , t))
                }
            }
            , i = (e, t) => {
                const o = {
                    "M+": t.getMonth() + 1,
                    "d+": t.getDate(),
                    "H+": t.getHours(),
                    "h+": t.getHours(),
                    "m+": t.getMinutes(),
                    "s+": t.getSeconds(),
                    "q+": Math.floor((t.getMonth() + 3) / 3),
                    S: t.getMilliseconds()
                };
                /(y+)/.test(e) && (e = e.replace(RegExp.$1, ("" + t.getFullYear()).substr(4 - RegExp.$1.length)));
                for (const n in o)
                    new RegExp(`(${n})`).test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? o[n] : ("00" + o[n]).substr(("" + o[n]).length)));
                return e
            }
            , r = () => /macintosh|mac os x/i.test(navigator.userAgent)
            , s = (e, t = "") => {
                const o = document.createElement("a");
                o.download = t,
                    o.style.display = "none",
                    o.href = e,
                    document.body.appendChild(o),
                    o.click(),
                    document.body.removeChild(o)
            }
            , l = e => {
                var t = e.split("?")[1]
                    , o = {};
                if (!t)
                    return o;
                t = t.split("&");
                for (var n = 0, a = t.length; n < a; n++) {
                    var c = t[n].split("=");
                    o[c[0]] = decodeURIComponent(c[1])
                }
                return o
            }
            ;
        t["a"] = {
            isDuringDate: n,
            debounce: a,
            throttle: c,
            dateFormat: i,
            isMac: r,
            downloadFile: s,
            getUrlParams: l
        }
    },
    4360: function (e, t, o) {
        "use strict";
        o("13d5");
        var n = o("5502");
        const a = []
            , c = o("c653")
            , i = c.keys().reduce((e, t) => {
                const o = t.replace(/^\.\/(.*)\.\w+$/, "$1");
                a.push(o);
                const n = c(t);
                return e[o] = n.default,
                    e
            }
                , {});
        t["a"] = Object(n["a"])({
            modules: i
        })
    },
    "44ae": function (e, t, o) {
        "use strict";
        o("3c48")
    },
    4601: function (e, t) {
        e.exports = "data:image/png;base64,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"
    },
    "48e8": function (e, t, o) {
        "use strict";
        t["a"] = [{
            str: "0",
            msg: "通用场景"
        }, {
            str: "2",
            msg: "医学"
        }, {
            str: "1",
            msg: "计算机"
        }, {
            str: "3",
            msg: "金融经济"
        }]
    },
    "4c5a": function (e, t, o) {
        "use strict";
        o("cc4a")
    },
    "4ee2": function (e, t, o) { },
    "4ffd": function (e, t, o) {
        e.exports = o.p + "img/logo.6ed1c44b.png"
    },
    5: function (e, t) { },
    "56d7": function (e, t, o) {
        "use strict";
        o.r(t);
        var n = o("2b27")
            , a = o.n(n)
            , c = o("7a23")
            , i = o("8393");
        function r(e, t, o, n, a, i) {
            return Object(c["openBlock"])(),
                Object(c["createBlock"])(c["Transition"], {
                    name: "blankTooltip"
                }, {
                    default: Object(c["withCtx"])(() => [Object(c["createTextVNode"])(Object(c["toDisplayString"])(n.text), 1)]),
                    _: 1
                })
        }
        var s = {
            setup() {
                const e = Object(c["ref"])();
                return {
                    text: e
                }
            }
        }
            , l = (o("cc83"),
                o("d959"))
            , d = o.n(l);
        const u = d()(s, [["render", r], ["__scopeId", "data-v-13c25996"]]);
        var m = u;
        const p = {
            beforeMount: function (e, t) {
                var o, n = "yd-tooltip", a = "", i = null, r = "bottom", s = "blank", l = !1;
                const d = () => {
                    if (t.value && "function" === typeof t.value) {
                        var d = t.value();
                        const { component: e, data: n } = d;
                        o = Object(c["createApp"])(e, n),
                            l = !0,
                            s = "custom"
                    } else
                        !t.value || "string" !== typeof t.value && "number" !== typeof t.value ? e.dataset.tooltip && (a = e.dataset.tooltip) : a = t.value;
                    if (e.dataset["tooltipStyle"] && (s = e.dataset["tooltipStyle"]),
                        (l || "" != a.trim()) && (!l || o)) {
                        Object.keys(t.modifiers)[0] && (r = Object.keys(t.modifiers)[0]),
                            i = document.createElement("div");
                        var u = [n, s];
                        if (i.setAttribute("class", u.join(" ")),
                            i.style.zIndex = 10,
                            l) {
                            var p = document.body.appendChild(i);
                            o.mount(p)
                        } else {
                            p = document.body.appendChild(i);
                            var b = Object(c["createApp"])(m)
                                , f = b.mount(p);
                            f.text = a
                        }
                        var g = e.getBoundingClientRect();
                        Object(c["nextTick"])(() => {
                            var e = 0
                                , t = 0
                                , o = 8
                                , n = 8;
                            switch (r) {
                                case "top":
                                    e = g.left - i.offsetWidth / 2 + g.width / 2,
                                        t = g.top - i.offsetHeight - o;
                                    break;
                                case "left":
                                    e = g.left - i.offsetWidth - n,
                                        t = g.top + g.height / 2 - i.offsetHeight / 2;
                                    break;
                                case "right":
                                    e = g.left + g.width + n,
                                        t = g.top + g.height / 2 - i.offsetHeight / 2;
                                    break;
                                case "bottom":
                                    e = g.left - i.offsetWidth / 2 + g.width / 2,
                                        t = g.top + g.height + o;
                                    break;
                                case "left-bottom":
                                    e = g.left - i.offsetWidth - n,
                                        t = g.bottom - i.offsetHeight;
                                    break;
                                case "left-top":
                                    e = g.left - i.offsetWidth - n,
                                        t = g.top;
                                    break;
                                case "right-top":
                                    e = g.left + g.width + n,
                                        t = g.top;
                                    break;
                                case "right-bottom":
                                    e = g.left + g.width + n,
                                        t = g.bottom - i.offsetHeight;
                                    break;
                                case "top-left":
                                    e = g.left,
                                        t = g.top - i.offsetHeight - o;
                                    break;
                                case "top-right":
                                    e = g.left + g.width - i.offsetWidth,
                                        t = g.top - i.offsetHeight - o;
                                    break;
                                case "bottom-left":
                                    e = g.left,
                                        t = g.bottom + o;
                                    break;
                                case "bottom-right":
                                    e = g.left + g.width - i.offsetWidth,
                                        t = g.bottom + o;
                                    break
                            }
                            var a = 20;
                            e < 0 && (e = 0 + a),
                                e + i.offsetWidth > document.body.offsetWidth && (e = document.body.offsetWidth - i.offsetWidth - a),
                                t < 0 && (t = 0 + a),
                                t + i.offsetHeight > document.body.offsetHeight && (t = document.body.offsetHeight - i.offsetHeight - a),
                                i.style.left = e + "px",
                                i.style.top = t + "px",
                                i.style.visibility = "visible"
                        }
                        )
                    }
                }
                    , u = () => {
                        i && i.parentNode.removeChild(i),
                            o = null,
                            a = "",
                            l = !1,
                            i = null
                    }
                    ;
                e.addEventListener("mouseenter", d),
                    e.addEventListener("mouseleave", u)
            },
            updated(e, { value: t }) {
                e.$value = t
            },
            unmounted(e) {
                e.removeEventListener("mouseenter", e.mouseenterHandler),
                    e.removeEventListener("mouseleave", e.mouseleaveHandler)
            }
        };
        var b = p;
        const f = {
            tooltip: b
        };
        var g = {
            install(e) {
                Object.keys(f).forEach(t => {
                    e.directive(t, f[t])
                }
                )
            }
        }
            , v = g
            , h = o("0c0e")
            , A = o.n(h);
        const O = {
            class: "sticky-sidebar"
        };
        function j(e, t, o, n, a, i) {
            const r = Object(c["resolveComponent"])("router-view");
            return Object(c["openBlock"])(),
                Object(c["createElementBlock"])(c["Fragment"], null, [Object(c["createVNode"])(r, {
                    class: Object(c["normalizeClass"])(["os_" + n.currentOS])
                }, null, 8, ["class"]), Object(c["createElementVNode"])("div", O, [Object(c["createElementVNode"])("div", {
                    class: "feed",
                    onClick: n.goFeed
                }), Object(c["createVNode"])(n["BackToTop"])])], 64)
        }
        function y(e, t, o, n, a, i) {
            return Object(c["openBlock"])(),
                Object(c["createElementBlock"])("div", {
                    class: "backToTopButton",
                    style: Object(c["normalizeStyle"])({
                        visibility: n.showButton ? "visible" : "hidden"
                    }),
                    onClick: n.scrollToTop
                }, null, 4)
        }
        var w = {
            __name: "BackToTop",
            setup(e, { expose: t }) {
                t();
                const o = Object(c["ref"])(!1)
                    , n = window.innerHeight || document.body.clientHeight
                    , a = () => {
                        const e = document.documentElement.scrollTop || document.body.scrollTop;
                        o.value = e >= n
                    }
                    ;
                window.addEventListener("scroll", a),
                    Object(c["onBeforeUnmount"])(() => {
                        window.removeEventListener("scroll", a)
                    }
                    );
                const i = () => {
                    document.documentElement.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }
                    , r = {
                        showButton: o,
                        winHeight: n,
                        srollListener: a,
                        scrollToTop: i
                    };
                return Object.defineProperty(r, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                    r
            }
        };
        o("4c5a");
        const k = d()(w, [["render", y], ["__scopeId", "data-v-d0d8f510"]]);
        var C = k
            , E = o("df52")
            , T = o("5502")
            , S = {
                __name: "App",
                setup(e, { expose: t }) {
                    t();
                    const o = Object(T["b"])()
                        , n = Object(c["getCurrentInstance"])()
                        , a = n.appContext.config.globalProperties
                        , i = Object(c["ref"])("")
                        , r = Object(c["ref"])("")
                        , s = Object(c["ref"])("")
                        , l = Object(c["ref"])("https://ydlunacommon-cdn.nosdn.127.net/e5d302ac10bb57dbb7bace5281d5eb6a.png")
                        , d = Object(c["ref"])("")
                        , u = () => {
                            window.open("https://shared.youdao.com/dict/market/common-feedback/#/")
                        }
                        , m = e => {
                            const t = {
                                userid: e
                            };
                            E["a"].getBatchUrl(t).then(e => {
                                r.value = e.values.nickname,
                                    o.dispatch("login/setNickName", r.value)
                            }
                            )
                        }
                        , p = () => {
                            E["a"].getVipStatus().then(e => {
                                o.dispatch("login/setSvip", e.svip),
                                    o.dispatch("login/setVip", e.vip)
                            }
                            )
                        }
                        , b = () => {
                            E["a"].getAccountInfos().then(e => {
                                const t = e.data;
                                0 === e.code ? (o.dispatch("login/setLogin", !0),
                                    i.value = t.yduserid,
                                    s.value = l.value,
                                    o.dispatch("login/setOptionAvatar", s.value),
                                    m(i.value),
                                    p()) : o.dispatch("login/setLogin", !1)
                            }
                            )
                        }
                        ;
                    b();
                    const f = () => {
                        const e = navigator.userAgent.toLowerCase()
                            , t = /macintosh|mac os x/i.test(e);
                        d.value = t ? "Mac" : "Windows"
                    }
                        ;
                    f();
                    const g = {
                        store: o,
                        internalInstance: n,
                        internalData: a,
                        yduserid: i,
                        nickname: r,
                        optionAvatar: s,
                        avatar: l,
                        currentOS: d,
                        goFeed: u,
                        getBatchData: m,
                        getVipInfo: p,
                        getAccountInfo: b,
                        getOS: f,
                        BackToTop: C,
                        service: E["a"],
                        useStore: T["b"],
                        ref: c["ref"],
                        getCurrentInstance: c["getCurrentInstance"]
                    };
                    return Object.defineProperty(g, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                        g
                }
            };
        o("6fda");
        const x = d()(S, [["render", j]]);
        var N = x
            , B = o("6605");
        const I = {
            id: "inner-box",
            class: "inner-box"
        }
            , D = Object(c["createStaticVNode"])('<div class="click-area" data-v-fb261164><a href="https://fanyi.youdao.com/trans/#/home" target="_blank" data-v-fb261164><p class="text" data-v-fb261164>输入arXiv论文检索地址，一键翻译全文</p><p class="text" data-v-fb261164>点击试试 👉 <span style="font-size:14px;" data-v-fb261164>https://arxiv.org/abs/2203.01927</span></p></a><span class="icon" data-v-fb261164></span></div>', 1)
            , V = {
                class: "never-show"
            };
        var M = {
            __name: "ArxivPopUp",
            setup(e) {
                const t = Object(c["getCurrentInstance"])()
                    , o = t.appContext.config.globalProperties
                    , n = Object(c["ref"])(!1)
                    , a = "fanyiweb-showArxivTip"
                    , i = "arxivShowTip"
                    , r = () => {
                        n.value && (n.value = !1)
                    }
                    , s = () => {
                        n.value = !1,
                            window.localStorage.setItem(a, !0)
                    }
                    , l = () => {
                        const e = document.getElementById("js_fanyi_input_outside_container")
                            , { top: t, left: o } = e.getBoundingClientRect()
                            , n = document.getElementById("inner-box");
                        n.offsetHeight,
                            n.offsetWidth;
                        n.style.top = t - 70 + "px",
                            n.style.left = o + "px"
                    }
                    , d = {
                        mounted() {
                            document.body.style.cssText += "overflow: hidden"
                        },
                        unmounted() {
                            document.body.style.cssText -= "overflow: hidden;"
                        }
                    };
                return Object(c["onMounted"])(() => {
                    const e = localStorage.getItem(a);
                    null !== o.$cookies.get(i) || e ? n.value = !1 : (n.value = !0,
                        window._rlog.push(["_trackCustom", "event", [["show", "pop-up_windows"]]]),
                        o.$cookies.set(i, !0, 86400),
                        Object(c["nextTick"])(() => {
                            l()
                        }
                        ))
                }
                ),
                    (e, t) => n.value ? Object(c["withDirectives"])((Object(c["openBlock"])(),
                        Object(c["createElementBlock"])("div", {
                            key: 0,
                            class: "arxiv-pop-up",
                            onClick: r
                        }, [Object(c["createElementVNode"])("div", I, [Object(c["createElementVNode"])("div", {
                            onClick: t[1] || (t[1] = Object(c["withModifiers"])(() => { }
                                , ["stop"])),
                            class: "inner-content"
                        }, [D, Object(c["createElementVNode"])("div", V, [Object(c["createElementVNode"])("span", {
                            onClick: t[0] || (t[0] = e => s())
                        }, " 不再展示 ")])])])])), [[d]]) : Object(c["createCommentVNode"])("", !0)
            }
        };
        o("bd3a");
        const H = d()(M, [["__scopeId", "data-v-fb261164"]]);
        var P = H
            , U = o("04b3")
            , R = o.n(U);
        const L = ["src"];
        function Q(e, t, o, n, a, i) {
            return Object(c["openBlock"])(),
                Object(c["createBlock"])(n["Overlay"], {
                    visible: n.showAd,
                    modalClosable: !0
                }, {
                    content: Object(c["withCtx"])(() => [Object(c["createElementVNode"])("img", {
                        class: "ad",
                        src: n.picture,
                        onClick: n.goAd
                    }, null, 8, L), Object(c["createElementVNode"])("img", {
                        class: "close",
                        src: R.a,
                        onClick: n.closeAd
                    })]),
                    _: 1
                }, 8, ["visible"])
        }
        var _ = o("d706")
            , J = o("5724");
        const Y = "https://api-overmind.youdao.com/openapi/get/luna/dict/dict-common-config/prod"
            , W = () => Object(J["a"])(Y + "/translateMainPageBanner")
            , F = () => Object(J["a"])(Y + "/translateMainPagePopup");
        var Z = {
            getBannerInfos: W,
            getPopUpInfos: F
        }
            , z = o("4260")
            , G = {
                __name: "AdPopUp",
                setup(e, { expose: t }) {
                    t();
                    const o = Object(c["ref"])(!1)
                        , n = Object(c["ref"])("")
                        , a = Object(c["ref"])("")
                        , i = Object(c["getCurrentInstance"])()
                        , r = i.appContext.config.globalProperties
                        , s = () => {
                            o.value = !1
                        }
                        , l = () => {
                            window.open(n.value, "_self"),
                                window._rlog.push(["_trackCustom", "event", [["action", "pop-up_windows"]]])
                        }
                        ;
                    Object(c["onMounted"])(() => {
                        Z.getPopUpInfos().then(e => {
                            if (0 !== Object.keys(e.data.value).length) {
                                const t = e.data.value;
                                n.value = t.url,
                                    a.value = t.picture,
                                    z["a"].isDuringDate(t.startTime, t.endTime) && null === r.$cookies.get("adcookie") ? (o.value = !0,
                                        window._rlog.push(["_trackCustom", "event", [["show", "pop-up_windows"]]]),
                                        r.$cookies.set("adcookie", !0, 86400)) : o.value = !1
                            }
                        }
                        )
                    }
                    );
                    const d = {
                        showAd: o,
                        url: n,
                        picture: a,
                        internalInstance: i,
                        internalData: r,
                        closeAd: s,
                        goAd: l,
                        ref: c["ref"],
                        onMounted: c["onMounted"],
                        getCurrentInstance: c["getCurrentInstance"],
                        Overlay: _["a"],
                        service: Z,
                        util: z["a"]
                    };
                    return Object.defineProperty(d, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                        d
                }
            };
        o("ffd2");
        const K = d()(G, [["render", Q], ["__scopeId", "data-v-05c25f5a"]]);
        var q = K
            , X = o("c866")
            , $ = o.n(X);
        const ee = ["src"]
            , te = ["onClick"];
        function oe(e, t, o, n, a, i) {
            return n.showBanner ? (Object(c["openBlock"])(),
                Object(c["createElementBlock"])("div", {
                    key: 0,
                    class: "banner",
                    onClick: n.goBanner
                }, [Object(c["createElementVNode"])("img", {
                    class: "banner-img",
                    src: n.picture
                }, null, 8, ee), Object(c["createElementVNode"])("img", {
                    class: "close",
                    src: $.a,
                    onClick: Object(c["withModifiers"])(n.closeBanner, ["stop"])
                }, null, 8, te)])) : Object(c["createCommentVNode"])("", !0)
        }
        var ne = {
            __name: "Banner",
            setup(e, { expose: t }) {
                t();
                const o = Object(c["ref"])("")
                    , n = Object(c["ref"])("")
                    , a = Object(c["ref"])(!0)
                    , i = Object(c["getCurrentInstance"])()
                    , r = i.appContext.config.globalProperties;
                Object(c["onMounted"])(() => {
                    Z.getBannerInfos().then(e => {
                        const t = e.data.value;
                        o.value = t.url,
                            n.value = t.picture,
                            z["a"].isDuringDate(t.startTime, t.endTime) && null === r.$cookies.get("bannercookie") ? a.value = !0 : a.value = !1
                    }
                    )
                }
                );
                const s = () => {
                    r.$cookies.set("bannercookie", !0, 86400),
                        a.value = !1
                }
                    , l = () => {
                        window.open(o.value)
                    }
                    , d = {
                        url: o,
                        picture: n,
                        showBanner: a,
                        internalInstance: i,
                        internalData: r,
                        closeBanner: s,
                        goBanner: l,
                        service: Z,
                        util: z["a"]
                    };
                return Object.defineProperty(d, "__isScriptSetup", {
                    enumerable: !1,
                    value: !0
                }),
                    d
            }
        };
        o("e79d");
        const ae = d()(ne, [["render", oe], ["__scopeId", "data-v-04a83aae"]]);
        var ce = ae
            , ie = o("5894");
        const re = {
            class: "index"
        };
        function se(e, t, o, n, a, i) {
            const r = ie["a"]
                , s = Object(c["resolveComponent"])("TranslateTab")
                , l = ce
                , d = Object(c["resolveComponent"])("vue3WebsiteFooter")
                , u = q
                , m = P;
            return Object(c["openBlock"])(),
                Object(c["createElementBlock"])("div", re, [Object(c["createVNode"])(r), Object(c["createVNode"])(s), Object(c["createVNode"])(l), Object(c["createVNode"])(d), Object(c["createVNode"])(u), Object(c["createVNode"])(m)])
        }
        const le = {
            class: "translate-tab-container"
        }
            , de = {
                class: "tab-body-border-box"
            }
            , ue = {
                class: "tab-body color_bg_3"
            };
        function me(e, t, o, n, a, i) {
            const r = Object(c["resolveComponent"])("router-view");
            return Object(c["openBlock"])(),
                Object(c["createElementBlock"])("div", le, [Object(c["createVNode"])(n["TabHeader"]), Object(c["createElementVNode"])("div", de, [Object(c["createElementVNode"])("div", ue, [Object(c["createVNode"])(r, null, {
                    default: Object(c["withCtx"])(({ Component: e }) => [(Object(c["openBlock"])(),
                        Object(c["createBlock"])(c["KeepAlive"], null, [(Object(c["openBlock"])(),
                            Object(c["createBlock"])(Object(c["resolveDynamicComponent"])(e)))], 1024))]),
                    _: 1
                })])])])
        }
        const pe = e => (Object(c["pushScopeId"])("data-v-3e1f02ad"),
            e = e(),
            Object(c["popScopeId"])(),
            e)
            , be = {
                class: "TextTranslateSetting yd-form-container"
            }
            , fe = {
                class: "checkbox"
            }
            , ge = pe(() => Object(c["createElementVNode"])("span", {
                class: "color_text_1 label-text"
            }, "日语假名（仅译文）", -1))
            , ve = {
                class: "checkbox"
            }
            , he = pe(() => Object(c["createElementVNode"])("span", {
                class: "color_text_1 label-text"
            }, "日语罗马音（仅译文）", -1))
            , Ae = {
                class: "checkbox"
            }
            , Oe = pe(() => Object(c["createElementVNode"])("span", {
                class: "color_text_1 label-text"
            }, "显示原文字数", -1));
        function je(e, t, o, n, a, i) {
            return Object(c["openBlock"])(),
                Object(c["createBlock"])(n["InterfaceDialog"], {
                    dialogVisible: !0,
                    width: "auto",
                    height: "auto",
                    top: 28,
                    left: -162,
                    onCloseDialog: n.closeDialog
                }, {
                    default: Object(c["withCtx"])(() => [Object(c["createElementVNode"])("div", be, [Object(c["createVNode"])(n["StrokeSwitch"]), Object(c["createElementVNode"])("label", fe, [Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
                        class: "g-checkbox",
                        type: "checkbox",
                        "onUpdate:modelValue": t[0] || (t[0] = e => n.showPjm = e)
                    }, null, 512), [[c["vModelCheckbox"], n.showPjm]]), ge]), Object(c["createElementVNode"])("label", ve, [Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
                        class: "g-checkbox",
                        type: "checkbox",
                        "onUpdate:modelValue": t[1] || (t[1] = e => n.showRomanPronunciation = e)
                    }, null, 512), [[c["vModelCheckbox"], n.showRomanPronunciation]]), he]), Object(c["createElementVNode"])("label", Ae, [Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
                        class: "g-checkbox",
                        type: "checkbox",
                        "onUpdate:modelValue": t[2] || (t[2] = e => n.showWordsNumber = e)
                    }, null, 512), [[c["vModelCheckbox"], n.showWordsNumber]]), Oe])])]),
                    _: 1
                })
        }
        var ye = o("a1e9")
            , we = o("5c40")
            , ke = o("2caa");
        const Ce = {
            class: "stroke-switch yd-form-container"
        }
            , Ee = {
                class: "checkbox"
            }
            , Te = Object(c["createElementVNode"])("span", {
                class: "color_text_1 label-text"
            }, "划词（仅中英）", -1);
        function Se(e, t, o, n, a, i) {
            return Object(c["openBlock"])(),
                Object(c["createElementBlock"])("div", Ce, [Object(c["createElementVNode"])("label", Ee, [Object(c["withDirectives"])(Object(c["createElementVNode"])("input", {
                    class: "g-checkbox",
                    type: "checkbox",
                    "onUpdate:modelValue": t[0] || (t[0] = e => n.allowStroke = e)
                }, null, 512), [[c["vModelCheckbox"], n.allowStroke]]), Te])])
        }
        var xe = {
            name: "StrokeSwitch",
            setup(e, t) {
                const o = Object(T["b"])()
                    , n = Object(ye["s"])(o.state.text.allowStroke);
                return Object(we["kc"])(n, (e, t) => {
                    e !== t && o.commit("SET_ALLOW_STROKE", e)
                }
                ),
                {
                    allowStroke: n
                }
            }
        };
        const Ne = d()(xe, [["render", Se]]);
        var Be = Ne
            , Ie = {
                __name: "TextTranslateSetting",
                emits: ["closeDialog"],
                setup(e, { expose: t, emit: o }) {
                    t();
                    const n = Object(T["b"])()
                        , a = Object(ye["s"])(!1)
                        , i = Object(ye["s"])(!1)
                        , r = Object(ye["s"])(!0);
                    Object(c["onBeforeMount"])(() => {
                        n.dispatch("initTextTranslateSettingStore"),
                            a.value = n.state.text.showPjm,
                            i.value = n.state.text.showRomanPronunciation,
                            r.value = n.state.text.showWordsNumber
                    }
                    ),
                        Object(we["kc"])(a, (e, t) => {
                            e !== t && n.commit("SET_SHOW_PJM", e)
                        }
                        ),
                        Object(we["kc"])(i, (e, t) => {
                            e !== t && n.commit("SET_SHOW_ROMAN_PRONUNCICATION", e)
                        }
                        ),
                        Object(we["kc"])(r, (e, t) => {
                            e !== t && n.commit("SET_SHOW_WORDS_NUMBER", e)
                        }
                        );
                    const s = () => {
                        o("closeDialog")
                    }
                        , l = {
                            store: n,
                            emit: o,
                            showPjm: a,
                            showRomanPronunciation: i,
                            showWordsNumber: r,
                            closeDialog: s,
                            computed: we["q"],
                            ref: ye["s"],
                            watch: we["kc"],
                            useStore: T["b"],
                            InterfaceDialog: ke["a"],
                            StrokeSwitch: Be
                        };
                    return Object.defineProperty(l, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                        l
                }
            };
        o("aad4");
        const De = d()(Ie, [["render", je], ["__scopeId", "data-v-3e1f02ad"]]);
        var Ve = De;
        const Me = e => (Object(c["pushScopeId"])("data-v-6e71f92b"),
            e = e(),
            Object(c["popScopeId"])(),
            e)
            , He = {
                class: "tab-header"
            }
            , Pe = {
                class: "tab-left"
            }
            , Ue = ["onClick"]
            , Re = {
                class: "color_text_1"
            }
            , Le = Me(() => Object(c["createElementVNode"])("span", {
                class: "color_text_1"
            }, "人工翻译", -1))
            , Qe = [Le]
            , _e = Me(() => Object(c["createElementVNode"])("i", {
                class: "ic_new_tag"
            }, null, -1))
            , Je = {
                class: "tab-right"
            }
            , Ye = Me(() => Object(c["createElementVNode"])("i", {
                class: "icon ic_text_translate_setting"
            }, null, -1))
            , We = Me(() => Object(c["createElementVNode"])("span", {
                class: "color_text_1"
            }, "设置", -1))
            , Fe = Me(() => Object(c["createElementVNode"])("i", {
                class: "icon ic_leftbar_document_normal"
            }, null, -1))
            , Ze = Me(() => Object(c["createElementVNode"])("span", {
                class: "color_text_1"
            }, "文档翻译记录", -1))
            , ze = [Fe, Ze];
        function Ge(e, t, o, n, a, i) {
            const r = Ve
                , s = Object(c["resolveDirective"])("tooltip");
            return Object(c["openBlock"])(),
                Object(c["createElementBlock"])("div", He, [Object(c["createElementVNode"])("div", Pe, [(Object(c["openBlock"])(!0),
                    Object(c["createElementBlock"])(c["Fragment"], null, Object(c["renderList"])(a.tabList, (e, t) => (Object(c["openBlock"])(),
                        Object(c["createElementBlock"])("div", {
                            class: Object(c["normalizeClass"])(["tab-item", [e.value === a.currentTab ? "active color_text_1" : "color_text_3"]]),
                            key: t,
                            onClick: t => i.tabItemClickHandler(e)
                        }, [Object(c["createElementVNode"])("span", Re, Object(c["toDisplayString"])(e.label), 1)], 10, Ue))), 128)), Object(c["withDirectives"])((Object(c["openBlock"])(),
                            Object(c["createElementBlock"])("div", {
                                class: "tab-item color_text_3",
                                onClick: t[0] || (t[0] = e => i.hunmanTranslateButtonClickHandler())
                            }, Qe)), [[s, i.HumanTranslateHoverTip, void 0, {
                                "bottom-left": !0
                            }]]), _e]), Object(c["createElementVNode"])("div", Je, ["TextTranslate" === i.routeName ? (Object(c["openBlock"])(),
                                Object(c["createElementBlock"])("div", {
                                    key: 0,
                                    class: "tool-button",
                                    onClick: t[1] || (t[1] = (...e) => i.textTranslateSettingButtonClickHander && i.textTranslateSettingButtonClickHander(...e))
                                }, [Ye, We, Object(c["createVNode"])(r, {
                                    dialogVisible: a.textTranslateSettingDialogVisible,
                                    onCloseDialog: i.textTranslateSettingCloseCallbackHandler
                                }, null, 8, ["dialogVisible", "onCloseDialog"])])) : Object(c["createCommentVNode"])("", !0), "DocumentUpload" === i.routeName ? (Object(c["openBlock"])(),
                                    Object(c["createElementBlock"])("div", {
                                        key: 1,
                                        class: "tool-button",
                                        onClick: t[2] || (t[2] = (...e) => i.docHistoryEntryClickHandler && i.docHistoryEntryClickHandler(...e))
                                    }, ze)) : Object(c["createCommentVNode"])("", !0)])])
        }
        const Ke = {
            class: "hunman-translate-hover-tip"
        }
            , qe = Object(c["createStaticVNode"])('<h5 class="tip-title" data-v-bd7d7622><span class="color_main_1_text" data-v-bd7d7622>母语润色</span><span class="color_text_1" data-v-bd7d7622>服务全新上线</span></h5><ul class="tip-list" data-v-bd7d7622><li class="tip-list-item color_text_2" data-v-bd7d7622>专业译员随时待命</li><li class="tip-list-item color_text_2" data-v-bd7d7622>最快1分钟返回精准译文</li></ul>', 2)
            , Xe = [qe];
        function $e(e, t) {
            return Object(c["openBlock"])(),
                Object(c["createElementBlock"])("div", Ke, Xe)
        }
        o("ad58");
        const et = {}
            , tt = d()(et, [["render", $e], ["__scopeId", "data-v-bd7d7622"]]);
        var ot = tt
            , nt = {
                name: "TabHeader",
                data() {
                    return {
                        tabList: [{
                            label: "文本",
                            value: "TextTranslate"
                        }, {
                            label: "文档",
                            value: "DocumentUpload"
                        }],
                        currentTab: "",
                        textTranslateSettingDialogVisible: !1
                    }
                },
                computed: {
                    routeName() {
                        return this.$route.name
                    },
                    isLogin() {
                        return this.$store.state.login.isLogin
                    }
                },
                components: {
                    TextTranslateSetting: Ve
                },
                methods: {
                    HumanTranslateHoverTip() {
                        return {
                            component: ot
                        }
                    },
                    tabItemClickHandler(e) {
                        this.$router.push({
                            name: "" + e.value
                        })
                    },
                    hunmanTranslateButtonClickHandler() {
                        window._rlog.push(["_trackCustom", "event", [["action", "human_translation"]]]),
                            window.open("https://f.youdao.com/?vendor=fanyibanner", "_blank")
                    },
                    textTranslateSettingButtonClickHander() {
                        this.textTranslateSettingDialogVisible = !0
                    },
                    textTranslateSettingCloseCallbackHandler() {
                        this.textTranslateSettingDialogVisible = !1
                    },
                    docHistoryEntryClickHandler() {
                        if (this.isLogin) {
                            const e = this.$router.resolve({
                                path: "/person/docHistory"
                            });
                            window.open(e.href, "_blank")
                        } else {
                            const e = `${window.location.origin}${window.location.pathname}#/person/docHistory`;
                            window.location.href = "https://c.youdao.com/common-login-web/index.html?redirect_url=" + encodeURIComponent(e)
                        }
                    }
                },
                watch: {
                    $route: {
                        handler() {
                            this.currentTab = decodeURIComponent(this.$route.name)
                        },
                        immediate: !0
                    }
                }
            };
        o("6401");
        const at = d()(nt, [["render", Ge], ["__scopeId", "data-v-6e71f92b"]]);
        var ct = at
            , it = o("8139")
            , rt = {
                __name: "index",
                setup(e, { expose: t }) {
                    t();
                    const o = Object(c["getCurrentInstance"])()
                        , n = o.appContext.config.globalProperties
                        , a = Object(T["b"])();
                    Object(c["onBeforeMount"])(() => {
                        a.dispatch("fetchLanguageData"),
                            a.dispatch("fetchDomainData");
                        const e = {
                            keyid: "minor-search-server"
                        }
                            , t = "8XdqRK6tvAQAtRB349Wdmkzxr2A5fqDJ";
                        it["a"].getAigcEntrance(e, t).then(o => {
                            a.commit("SET_ISALLOWAIGC", o.data.isAllow),
                                !o.data.isAllow && a.state.login.isLogin || it["a"].getAigcStyle(e, t).then(e => {
                                    a.commit("SET_AIGCDOMAINMAP", e.data.styleList),
                                        null !== n.$cookies.get("participation-aigc-invitation") && a.dispatch("updateDomainMap")
                                }
                                )
                        }
                        )
                    }
                    );
                    const i = {
                        internalInstance: o,
                        internalData: n,
                        store: a,
                        getCurrentInstance: c["getCurrentInstance"],
                        TabHeader: ct,
                        useStore: T["b"],
                        service: it["a"]
                    };
                    return Object.defineProperty(i, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                        i
                }
            };
        o("c23f");
        const st = d()(rt, [["render", me], ["__scopeId", "data-v-30e6cf08"]]);
        var lt = st
            , dt = {
                name: "Home",
                components: {
                    VHeader: ie["a"],
                    Banner: ce,
                    AdPopUp: q,
                    ArxivPopUp: P,
                    TranslateTab: lt
                }
            };
        o("1dc7");
        const ut = d()(dt, [["render", se], ["__scopeId", "data-v-72e88ab5"]]);
        var mt = ut
            , pt = o("4360");
        const bt = [{
            path: "/",
            name: "Home",
            component: mt,
            children: [{
                path: "",
                name: "TextTranslate",
                component: () => Promise.all([o.e("documentUpload~textTranslate"), o.e("textTranslate")]).then(o.bind(null, "5bac"))
            }, {
                path: "documentUpload",
                name: "DocumentUpload",
                component: () => Promise.all([o.e("documentUpload~textTranslate"), o.e("documentUpload")]).then(o.bind(null, "211a"))
            }]
        }, {
            path: "/person",
            name: "person",
            component: () => o.e("Person").then(o.bind(null, "ce40")),
            beforeEnter(e, t, o) {
                console.log(pt["a"].state.login.isLogin);
                const { isLogin: n } = pt["a"].state.login;
                n ? o() : o({
                    name: "Home"
                })
            },
            children: [{
                path: "docHistory",
                name: "docHistory",
                component: () => Promise.all([o.e("DocHistory~termBank"), o.e("DocHistory")]).then(o.bind(null, "20ce"))
            }, {
                path: "termBank",
                name: "termBank",
                component: () => Promise.all([o.e("DocHistory~termBank"), o.e("termBank")]).then(o.bind(null, "a983"))
            }]
        }, {
            path: "/login/:redirectUrl?",
            name: "NoLogin",
            component: () => o.e("NoLogin").then(o.bind(null, "e0bc"))
        }]
            , ft = Object(B["a"])({
                history: Object(B["b"])(),
                routes: bt
            });
        ft.beforeEach((e, t, o) => {
            document.body.scrollTop = 0,
                document.documentElement.scrollTop = 0,
                o()
        }
        );
        var gt = ft;
        o("4ee2"),
            o("d662"),
            o("5c54"),
            o("d007");
        const vt = Object(c["createApp"])(N);
        vt.config.globalProperties.$cookies = a.a,
            vt.config.globalProperties.$toast = i["a"],
            vt.use(pt["a"]).use(gt).use(a.a).use(v).use(A.a).mount("#app")
    },
    5724: function (e, t, o) {
        "use strict";
        o.d(t, "a", (function () {
            return c
        }
        )),
            o.d(t, "b", (function () {
                return i
            }
            )),
            o.d(t, "c", (function () {
                return r
            }
            )),
            o.d(t, "d", (function () {
                return s
            }
            ));
        var n = o("bc3a")
            , a = (o("7a23"),
                o("8393"));
        function c(e, t, o = {}) {
            return new Promise((a, c) => {
                n["a"].get(e, {
                    params: t,
                    ...o
                }).then(e => {
                    a(e.data)
                }
                ).catch(e => {
                    c(e)
                }
                )
            }
            )
        }
        function i(e, t, o) {
            return new Promise(a => {
                o ? n["a"].post(e, t, {
                    timeout: o
                }).then(e => {
                    a(e.data)
                }
                ).catch(e => {
                    a(e)
                }
                ) : n["a"].post(e, t).then(e => {
                    a(e.data)
                }
                ).catch(e => {
                    a(e)
                }
                )
            }
            )
        }
        function r(e, t) {
            const o = t
                , a = new FormData;
            return Object.keys(o).forEach(e => {
                a.append(e, o[e])
            }
            ),
                new Promise((t, o) => {
                    n["a"].post(e, a).then(e => {
                        t(e.data)
                    }
                    ).catch(e => {
                        o(e)
                    }
                    )
                }
                )
        }
        function s(e, t, o) {
            return new Promise((a, c) => {
                n["a"].post(e, t, o).then(e => {
                    a(e.data)
                }
                ).catch(e => {
                    c(e)
                }
                )
            }
            )
        }
        n["a"].defaults.withCredentials = !0,
            n["a"].interceptors.response.use(e => e, e => (e.code && "ERR_CANCELED" === e.code || Object(a["a"])("网络异常，请检查网络"),
                Promise.reject(e)))
    },
    5894: function (e, t, o) {
        "use strict";
        var n = o("7a23")
            , a = o("4ffd")
            , c = o.n(a)
            , i = o("79e2")
            , r = o.n(i)
            , s = o("283b")
            , l = o.n(s)
            , d = o("4601")
            , u = o.n(d)
            , m = o("e88e")
            , p = o.n(m)
            , b = o("a16c")
            , f = o.n(b);
        const g = e => (Object(n["pushScopeId"])("data-v-39f692d2"),
            e = e(),
            Object(n["popScopeId"])(),
            e)
            , v = {
                class: "top-area"
            }
            , h = {
                class: "nav_list color_text_1"
            }
            , A = {
                class: "nav_item"
            }
            , O = g(() => Object(n["createElementVNode"])("div", {
                class: "active-bottom"
            }, null, -1))
            , j = {
                class: "nav_item"
            }
            , y = g(() => Object(n["createElementVNode"])("div", {
                class: "vip-tip color_text_vip_2"
            }, [Object(n["createElementVNode"])("span", null, "限时免费")], -1))
            , w = {
                class: "nav_item"
            }
            , k = {
                class: "nav_item"
            }
            , C = {
                key: 0,
                class: "vip-tip color_text_vip_2"
            }
            , E = g(() => Object(n["createElementVNode"])("span", null, "首月优惠", -1))
            , T = [E]
            , S = {
                class: "nav_item"
            }
            , x = {
                class: "nav_item"
            }
            , N = {
                class: "nav_item"
            }
            , B = g(() => Object(n["createElementVNode"])("img", {
                class: "icon",
                src: l.a
            }, null, -1))
            , I = g(() => Object(n["createElementVNode"])("span", null, "桌面端下载", -1))
            , D = [B, I]
            , V = g(() => Object(n["createElementVNode"])("div", {
                class: "item"
            }, [Object(n["createElementVNode"])("img", {
                class: "icon",
                src: u.a
            }), Object(n["createElementVNode"])("span", null, "移动端下载"), Object(n["createElementVNode"])("img", {
                class: "qrcode",
                src: p.a
            })], -1))
            , M = {
                class: "account"
            }
            , H = g(() => Object(n["createElementVNode"])("img", {
                class: "user_avatar",
                src: f.a
            }, null, -1))
            , P = g(() => Object(n["createElementVNode"])("div", {
                class: "login-area"
            }, "登录", -1))
            , U = [H, P]
            , R = {
                class: "user-info"
            }
            , L = ["src"]
            , Q = g(() => Object(n["createElementVNode"])("div", {
                class: "icon-nav"
            }, null, -1))
            , _ = {
                class: "user-options_cover"
            }
            , J = {
                class: "user-item"
            };
        function Y(e, t, o, a, i, s) {
            return Object(n["openBlock"])(),
                Object(n["createElementBlock"])("div", {
                    class: Object(n["normalizeClass"])(["top-nav", [a.isTop ? "top" : "not-top"]])
                }, [Object(n["createElementVNode"])("div", v, [Object(n["createElementVNode"])("img", {
                    class: "logo",
                    src: c.a,
                    onClick: a.goHome
                }), Object(n["createElementVNode"])("ul", h, [Object(n["createElementVNode"])("li", A, [Object(n["createElementVNode"])("div", {
                    class: "active",
                    onClick: t[0] || (t[0] = e => a.goNavigation(0))
                }, "在线翻译"), O]), Object(n["createElementVNode"])("li", j, [Object(n["createElementVNode"])("div", {
                    class: "item",
                    onClick: t[1] || (t[1] = e => a.goNavigation(7))
                }, "arXiv论文翻译"), y]), Object(n["createElementVNode"])("li", w, [Object(n["createElementVNode"])("div", {
                    class: "item",
                    onClick: t[2] || (t[2] = e => a.goNavigation(1))
                }, "英文写作")]), Object(n["createElementVNode"])("li", k, [Object(n["createElementVNode"])("div", {
                    class: "item",
                    onClick: t[3] || (t[3] = e => a.goNavigation(2))
                }, "同传翻译")]), Object(n["createElementVNode"])("li", {
                    class: "nav_item",
                    onClick: a.goVip
                }, [Object(n["createElementVNode"])("div", {
                    class: "item",
                    onClick: t[4] || (t[4] = e => a.goNavigation(3))
                }, "超级会员"), a.showFirst ? (Object(n["openBlock"])(),
                    Object(n["createElementBlock"])("div", C, T)) : Object(n["createCommentVNode"])("", !0)]), Object(n["createElementVNode"])("li", S, [Object(n["createElementVNode"])("div", {
                        class: "item",
                        onClick: t[5] || (t[5] = e => a.goNavigation(4))
                    }, "翻译API")]), Object(n["createElementVNode"])("li", x, [Object(n["createElementVNode"])("div", {
                        class: "item rg-item",
                        onClick: t[6] || (t[6] = e => a.goNavigation(5))
                    }, "人工翻译"), Object(n["createElementVNode"])("img", {
                        class: "rg",
                        src: r.a,
                        onClick: a.goFanyi
                    })]), Object(n["createElementVNode"])("li", N, [Object(n["createElementVNode"])("div", {
                        class: "item download-item",
                        onClick: t[7] || (t[7] = e => a.goNavigation(6))
                    }, "客户端"), Object(n["createElementVNode"])("div", {
                        class: "download"
                    }, [Object(n["createElementVNode"])("div", {
                        class: "item",
                        onClick: a.downLoad
                    }, D), V])])]), Object(n["createElementVNode"])("div", M, [Object(n["withDirectives"])(Object(n["createElementVNode"])("div", {
                        class: "login",
                        onClick: a.login
                    }, U, 512), [[n["vShow"], !a.isLogin]]), Object(n["withDirectives"])(Object(n["createElementVNode"])("div", R, [Object(n["createElementVNode"])("img", {
                        class: "user_avatar",
                        src: a.optionAvatar
                    }, null, 8, L), Q, Object(n["createElementVNode"])("div", _, [Object(n["createElementVNode"])("div", J, Object(n["toDisplayString"])(a.nickname), 1), Object(n["createElementVNode"])("div", {
                        class: "user-item person",
                        onClick: a.goPersonCenter
                    }, "个人中心"), Object(n["createElementVNode"])("div", {
                        class: "user-item invoice",
                        onClick: a.goInvoice
                    }, "开具发票"), Object(n["createElementVNode"])("div", {
                        class: "user-item quit",
                        onClick: a.quit
                    }, "退出登录")])], 512), [[n["vShow"], a.isLogin]])]), Object(n["createVNode"])(a["PopUp"], {
                        visible: a.showQuit,
                        text: a.quitText,
                        onConfirm: a.confirm,
                        modalClosable: !0,
                        onClosePop: a.closePop
                    }, null, 8, ["visible", "text"])])], 2)
        }
        var W = o("df52")
            , F = o("5502")
            , Z = o("6605")
            , z = o("c0ee")
            , G = o("e550")
            , K = o("4260")
            , q = {
                __name: "VHeader",
                setup(e, { expose: t }) {
                    t();
                    const o = Object(Z["e"])()
                        , a = Object(F["b"])()
                        , c = Object(n["ref"])(!1)
                        , i = Object(n["ref"])("确定退出当前账号吗？")
                        , r = Object(n["computed"])(() => a.state.login.isLogin)
                        , s = Object(n["computed"])(() => a.state.login.optionAvatar)
                        , l = Object(n["computed"])(() => a.state.login.nickname)
                        , d = Object(n["ref"])(!1)
                        , { protocol: u } = window.location
                        , m = Object(n["ref"])(!0)
                        , p = [{
                            tabIndex: 0,
                            name: "在线翻译",
                            url: "/home"
                        }, {
                            tabIndex: 1,
                            name: "英文写作",
                            url: "https://write.youdao.com/#/homepage?from=fanyi_top"
                        }, {
                            tabIndex: 2,
                            name: "同传翻译",
                            url: "https://tongchuan.youdao.com/?keyfrom=fanyi_web_tab"
                        }, {
                            tabIndex: 3,
                            name: "超级会员",
                            url: "https://cidian.youdao.com/vip.html#/?keyfrom=fanyi_top"
                        }, {
                            tabIndex: 4,
                            name: "翻译API",
                            url: "https://ai.youdao.com/?keyfrom=fanyi-new-nav#/"
                        }, {
                            tabIndex: 5,
                            name: "人工翻译",
                            url: "https://f.youdao.com/?vendor=fanyi-new-nav"
                        }, {
                            tabIndex: 6,
                            name: "客户端",
                            url: ""
                        }, {
                            tabIndex: 7,
                            name: "arxiv论文翻译",
                            url: "https://fanyi.youdao.com/trans/#/home"
                        }]
                        , b = Object(n["computed"])(() => K["a"].isMac() ? "Mac" : "Windows")
                        , f = () => {
                            window.open("https://cidian.youdao.com/?keyfrom=fanyiweb_navigation#/")
                        }
                        , g = () => {
                            "/" === o.currentRoute.value.path ? window.location.reload() : o.replace({
                                path: "/"
                            })
                        }
                        , v = () => {
                            localStorage.setItem("showFirst", !0)
                        }
                        , h = e => {
                            0 === e ? g() : "" !== p[e].url && window.open(p[e].url),
                                3 === e && v(),
                                window._rlog.push(["_trackCustom", "event", [["action", "navigation"], ["type", p[e].name]]])
                        }
                        , A = () => {
                            const e = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
                            if (e) {
                                const e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                                m.value = 0 === e
                            }
                        }
                        ;
                    Object(n["onMounted"])(() => {
                        window.addEventListener("scroll", A),
                            null === localStorage.getItem("showFirst") ? d.value = !0 : d.value = !1
                    }
                    );
                    const O = () => {
                        G["a"].$emit("saveTextTranslateContentToLS");
                        const e = encodeURIComponent(window.location.href);
                        window.location.href = "https://c.youdao.com/common-login-web/index.html?redirect_url=" + e
                    }
                        , j = () => {
                            window.location.href = "https://f.youdao.com/?vendor=fanyi-new-fanyicover"
                        }
                        , y = () => {
                            o.push({
                                path: "/person/docHistory"
                            })
                        }
                        , w = () => {
                            window.open("https://c.youdao.com/dict/vip/invoice.html")
                        }
                        , k = () => {
                            c.value = !1
                        }
                        , C = () => {
                            c.value = !1,
                                G["a"].$emit("saveTextTranslateContentToLS");
                            const e = encodeURIComponent(window.location.href);
                            console.log("router", o.currentRoute.value.path),
                                "/" === o.currentRoute.value.path ? window.location.href = "https://dict.youdao.com/login/acc/se/reset?product=DICT&samesite=true&ru=" + e : window.location.replace("https://dict.youdao.com/login/acc/se/reset?product=DICT&samesite=true&ru=https://c.youdao.com/common-login-web/index.html?redirect_url=" + e)
                        }
                        , E = () => {
                            c.value = !0
                        }
                        , T = {
                            router: o,
                            store: a,
                            showQuit: c,
                            quitText: i,
                            isLogin: r,
                            optionAvatar: s,
                            nickname: l,
                            showFirst: d,
                            protocol: u,
                            isTop: m,
                            navList: p,
                            platform: b,
                            downLoad: f,
                            goHome: g,
                            goVip: v,
                            goNavigation: h,
                            showScroll: A,
                            login: O,
                            goFanyi: j,
                            goPersonCenter: y,
                            goInvoice: w,
                            closePop: k,
                            confirm: C,
                            quit: E,
                            service: W["a"],
                            useStore: F["b"],
                            useRouter: Z["e"],
                            PopUp: z["a"],
                            eventBus: G["a"],
                            util: K["a"]
                        };
                    return Object.defineProperty(T, "__isScriptSetup", {
                        enumerable: !1,
                        value: !0
                    }),
                        T
                }
            }
            , X = (o("9374"),
                o("d959"))
            , $ = o.n(X);
        const ee = $()(q, [["render", Y], ["__scopeId", "data-v-39f692d2"]]);
        t["a"] = ee
    },
    "594a": function (e, t, o) {
        "use strict";
        o("c175")
    },
    "5c54": function (e, t, o) { },
    6: function (e, t) { },
    6401: function (e, t, o) {
        "use strict";
        o("8b47")
    },
    "69b5": function (e, t, o) { },
    "6fda": function (e, t, o) {
        "use strict";
        o("7016")
    },
    7: function (e, t) { },
    7016: function (e, t, o) { },
    "79e2": function (e, t, o) {
        e.exports = o.p + "img/rg.527c9cc6.png"
    },
    8: function (e, t) { },
    8138: function (e, t, o) { },
    8139: function (e, t, o) {
        "use strict";
        (function (e) {
            var n = o("5724")
                , a = o("1c46")
                , c = o.n(a)
                , i = o("bc3a");
            const { CancelToken: r } = i["a"];
            let s;
            const l = "fanyideskweb"
                , d = "webfanyi"
                , u = "client,mysticTime,product"
                , m = "1.0.0"
                , p = "web"
                , b = "fanyi.web";
            function f(e) {
                return c.a.createHash("md5").update(e).digest()
            }
            function g(e) {
                return c.a.createHash("md5").update(e.toString()).digest("hex")
            }
            function v(e, t) {
                return g(`client=${l}&mysticTime=${e}&product=${d}&key=${t}`)
            }
            function h(e) {
                const t = (new Date).getTime();
                return {
                    sign: v(t, e),
                    client: l,
                    product: d,
                    appVersion: m,
                    vendor: p,
                    pointParam: u,
                    mysticTime: t,
                    keyfrom: b
                }
            }
            const A = (e, t) => Object(n["a"])("https://dict.youdao.com/webtranslate/key", {
                ...e,
                ...h(t)
            })
                , O = (e, t) => Object(n["d"])("https://dict.youdao.com/webtranslate", {
                    ...e,
                    ...h(t)
                }, {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                })
                , j = () => {
                    s && s()
                }
                , y = e => Object(n["c"])("https://dict.youdao.com/keyword/key", e)
                , w = (e, t) => Object(n["a"])(" https://dict-subsidiary.youdao.com/aigc/entrance", {
                    ...e,
                    ...h(t)
                })
                , k = (e, t) => Object(n["a"])(" https://dict-subsidiary.youdao.com/aigc/style", {
                    ...e,
                    ...h(t)
                })
                , C = (e, t) => Object(n["a"])(" https://dict-subsidiary.youdao.com/aigc/tran", {
                    ...e,
                    ...h(t)
                }, {
                    cancelToken: new r(e => {
                        s = e
                    }
                    )
                })
                , E = e => Object(n["c"])("https://fanyi.youdao.com/feedback", e)
                , T = (t, o, n) => {
                    if (!t)
                        return null;
                    const a = e.alloc(16, f(o))
                        , i = e.alloc(16, f(n))
                        , r = c.a.createDecipheriv("aes-128-cbc", a, i);
                    let s = r.update(t, "base64", "utf-8");
                    return s += r.final("utf-8"),
                        s
                }
                , S = "https://lunafeedback.youdao.com/feedback"
                , x = e => {
                    const t = "product=deskdict_contentCorrection&client=fanyiweb&appVersion=1.0.0&comments=" + e;
                    return Object(n["b"])(S + "/add", t)
                }
                ;
            t["a"] = {
                getTextTranslateSecretKey: A,
                getTextTranslateResult: O,
                getTextTranslateKeyword: y,
                decodeData: T,
                feedback: x,
                getAigcEntrance: w,
                getAigcStyle: k,
                getAigcTran: C,
                fanyiFeedback: E,
                cancelLastGpt: j
            }
        }
        ).call(this, o("b639").Buffer)
    },
    8393: function (e, t, o) {
        "use strict";
        var n = o("7a23");
        function a(e, t, o, a, c, i) {
            return Object(n["openBlock"])(),
                Object(n["createBlock"])(n["Transition"], {
                    name: "fade"
                }, {
                    default: Object(n["withCtx"])(() => [Object(n["withDirectives"])(Object(n["createElementVNode"])("div", {
                        class: "toasts"
                    }, Object(n["toDisplayString"])(o.text), 513), [[n["vShow"], a.visible]])]),
                    _: 1
                })
        }
        var c = {
            name: "toast",
            props: {
                text: {
                    type: String,
                    default: ""
                }
            },
            setup() {
                const e = Object(n["ref"])(!1);
                return Object(n["onMounted"])(() => {
                    e.value = !0
                }
                ),
                {
                    visible: e
                }
            }
        }
            , i = (o("44ae"),
                o("d959"))
            , r = o.n(i);
        const s = r()(c, [["render", a], ["__scopeId", "data-v-67be4052"]]);
        var l = s;
        const d = document.createElement("div");
        d.setAttribute("class", "toast"),
            document.body.appendChild(d);
        let u = null;
        t["a"] = (e, t = 1500) => {
            const o = Object(n["createVNode"])(l, {
                text: e
            });
            Object(n["render"])(o, d),
                clearTimeout(u),
                u = setTimeout(() => {
                    Object(n["render"])(null, d)
                }
                    , t)
        }
    },
    8544: function (e, t, o) {
        "use strict";
        let n;
        const a = "fanyiweb"
            , c = window.localStorage;
        function i(e) {
            return `${a}-${e}`
        }
        n = "undefined" !== typeof localStorage && null !== localStorage && {
            set: function (e, t) {
                var o = JSON.stringify(t);
                e = i(e);
                try {
                    return c.setItem(e, o)
                } catch (n) {
                    "QuotaExceededError" === n.name && (c.clear(),
                        c.setItem(e, o))
                }
            },
            get: function (e) {
                var t = JSON.parse(c.getItem(i(e)));
                return t
            },
            remove: function (e) {
                c.removeItem(i(e))
            }
        },
            t["a"] = n
    },
    "8b47": function (e, t, o) { },
    9: function (e, t) { },
    9374: function (e, t, o) {
        "use strict";
        o("f9f8")
    },
    "99fe": function (e, t, o) {
        "use strict";
        o("f1e2")
    },
    a16c: function (e, t) {
        e.exports = "data:image/png;base64,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"
    },
    aad4: function (e, t, o) {
        "use strict";
        o("349e")
    },
    ad58: function (e, t, o) {
        "use strict";
        o("3eaa")
    },
    b5ce: function (e, t, o) {
        "use strict";
        o.r(t);
        const n = {
            isLogin: !0,
            isSvip: !1,
            isVip: !1,
            optionAvatar: "",
            nickname: ""
        }
            , a = {
                isLogin: e => e.isLogin,
                optionAvatar: e => e.optionAvatar,
                nickname: e => e.nickname,
                isSvip: e => e.isSvip,
                isVip: e => e.isVip
            }
            , c = {
                setOptionAvatar: ({ commit: e }, t) => {
                    e("SET_OPTIONAVATAR", t)
                }
                ,
                setNickName: ({ commit: e }, t) => {
                    e("SET_NICKNAME", t)
                }
                ,
                setLogin: ({ commit: e }, t) => {
                    e("SET_LOGIN", t)
                }
                ,
                setSvip: ({ commit: e }, t) => {
                    e("SET_SVIP", t)
                }
                ,
                setVip: ({ commit: e }, t) => {
                    e("SET_VIP", t)
                }
            }
            , i = {
                SET_OPTIONAVATAR(e, t) {
                    e.optionAvatar = t
                },
                SET_NICKNAME(e, t) {
                    e.nickname = t
                },
                SET_LOGIN(e, t) {
                    e.isLogin = t
                },
                SET_SVIP(e, t) {
                    e.isSvip = t
                },
                SET_VIP(e, t) {
                    e.isVip = t
                }
            };
        t["default"] = {
            namespaced: !0,
            state: n,
            getters: a,
            mutations: i,
            actions: c
        }
    },
    bd3a: function (e, t, o) {
        "use strict";
        o("8138")
    },
    c083: function (e, t, o) {
        "use strict";
        o.r(t);
        var n = o("5724");
        const a = "UPDATE_LANGUAGE_MAP";
        var c = {
            UPDATE_LANGUAGE_MAP: a
        };
        const i = {
            languageMap: {},
            rtlLanguageList: ["ar"]
        }
            , r = {
                [c.UPDATE_LANGUAGE_MAP](e, t) {
                    e.languageMap = t
                }
            }
            , s = {
                async fetchLanguageData({ commit: e, state: t }, o) {
                    const a = await Object(n["a"])("https://api-overmind.youdao.com/openapi/get/luna/dict/luna-front/prod/langType");
                    a.data.value && e(c.UPDATE_LANGUAGE_MAP, a.data.value)
                }
            }
            , l = {
                termSpecifyData(e) {
                    return e.languageMap.term ? e.languageMap.term.specify : []
                },
                isTermLanguageSupport(e, t, o) {
                    const n = `${o.transInfo.lanFrom}2 ${o.transInfo.lanTo}`;
                    return !!t.termSpecifyData.find(e => e.code === n)
                }
            };
        t["default"] = {
            state: i,
            mutations: r,
            actions: s,
            getters: l
        }
    },
    c0ee: function (e, t, o) {
        "use strict";
        var n = o("7a23");
        const a = {
            class: "inner-content"
        }
            , c = {
                class: "title color_text_1"
            }
            , i = {
                class: "btn-ara"
            };
        function r(e, t, o, r, s, l) {
            const d = Object(n["resolveDirective"])("fixed");
            return Object(n["openBlock"])(),
                Object(n["createBlock"])(n["Teleport"], {
                    to: "body"
                }, [o.visible ? Object(n["withDirectives"])((Object(n["openBlock"])(),
                    Object(n["createElementBlock"])("div", {
                        key: 0,
                        class: "pop-up-comp mask",
                        onClick: t[2] || (t[2] = Object(n["withModifiers"])((...e) => r.close && r.close(...e), ["self"]))
                    }, [Object(n["createElementVNode"])("div", a, [Object(n["createElementVNode"])("div", c, Object(n["toDisplayString"])(o.text), 1), Object(n["createElementVNode"])("div", i, [Object(n["createElementVNode"])("div", {
                        class: "cancel btn color_text_1",
                        onClick: t[0] || (t[0] = (...e) => r.closePop && r.closePop(...e))
                    }, "取消"), Object(n["createElementVNode"])("div", {
                        class: "confirm btn color_text_white",
                        onClick: t[1] || (t[1] = (...e) => r.confirm && r.confirm(...e))
                    }, "确认")])])])), [[d]]) : Object(n["createCommentVNode"])("", !0)])
        }
        var s = {
            name: "PopUp",
            props: {
                text: String,
                visible: Boolean,
                modalClosable: {
                    type: Boolean,
                    default: !0
                }
            },
            setup(e, t) {
                const o = () => {
                    e.modalClosable && t.emit("update:visible", !1)
                }
                    , n = () => {
                        t.emit("closePop")
                    }
                    , a = () => {
                        t.emit("confirm")
                    }
                    ;
                return {
                    close: o,
                    confirm: a,
                    closePop: n
                }
            },
            directives: {
                fixed: {
                    mounted() {
                        document.body.style.cssText += "overflow: hidden"
                    },
                    unmounted() {
                        document.body.style.cssText -= "overflow: hidden;"
                    }
                }
            }
        }
            , l = (o("99fe"),
                o("d959"))
            , d = o.n(l);
        const u = d()(s, [["render", r], ["__scopeId", "data-v-170d148e"]]);
        t["a"] = u
    },
    c175: function (e, t, o) { },
    c23f: function (e, t, o) {
        "use strict";
        o("00a6")
    },
    c34f: function (e, t, o) {
        "use strict";
        o.d(t, "b", (function () {
            return c
        }
        )),
            o.d(t, "a", (function () {
                return i
            }
            ));
        var n = o("8544");
        function a() {
            const e = n["a"].get("allowStroke")
                , t = null !== e && e;
            return t
        }
        function c(e) {
            window.YoudaoSelector && (window.YoudaoSelector.Config.select = e ? "on" : "off")
        }
        function i() {
            const e = document.createElement("script");
            e.type = "text/javascript",
                e.src = "https://shared.ydstatic.com/api/fanyi-web-v1.3/assets/index.min.js",
                document.body.appendChild(e),
                e.onload = e.onreadystatechange = function () {
                    if (!this.readyState || "loaded" === this.readyState || "complete" === this.readyState) {
                        const e = a();
                        c(e)
                    }
                    e.onload = e.onreadystatechange = null
                }
        }
    },
    c614: function (e, t, o) { },
    c653: function (e, t, o) {
        var n = {
            "./domain.js": "d2a7",
            "./language.js": "c083",
            "./login.js": "b5ce",
            "./text.js": "1a68"
        };
        function a(e) {
            var t = c(e);
            return o(t)
        }
        function c(e) {
            if (!o.o(n, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return n[e]
        }
        a.keys = function () {
            return Object.keys(n)
        }
            ,
            a.resolve = c,
            e.exports = a,
            a.id = "c653"
    },
    c866: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABGCAYAAAB8MJLDAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQmSURBVHgB7ZrPSxtBFMdffxwEe1C8BEW7hyKCBT0qHgw00IJgK/ijh2IFqznooR78H4p40GPFg96MCjaC0IKFVAj2GKGCoodFjFg8qKiQQ8HO13VkG8lmZvaHJp0PPLKzmdW87743+2Z2iDQajUaj0Wg0Go3mP+QBBU+ZzeycMMswO6QACUKAEmaNzOqYha7bTnARUsxMsoTxDT8FMJiFrz/dYDL7yWyLfMAPAQzyxvFsEAlz5HGKeCkAQjvMrIn8BdGQICtVXOOVABjQ+uj2wOYXiIYZ8mB8eETuwcD2gdkTCg5EGwZVk9k5ucCtAHC+j/KP7H6A//mc2S65EMGNAAj3dxTsnc/mMVki/CLFMUFVAKiPsA8q552ACEgH1A1/SBJVASLMntH9ATcEQuySJA9JHuS93486FfCbDJJERYC3dH8JkySyAiDX7kPe58IgySiQFUA69Gtqakqi0ejT5uZmYeH4NaRGWKazTCUIBz6SJKlUqqehoaHu+Pj4pK2tbXZ9fd2xeoNQKysr78vLy8t2dnbM2traWZLnEwk+FmUiwCAF2N3EoElwCI45RYLdebRLS0tVC6xG0Y4yAgj/UTv9/f0xfsxFQIhn98M5u/NgeHg4TmrUiXaUESBECiwtLR2Oj4/fOAIHWRr8IwKOcc7uPK7BtaSG8G8VFUBkJScno6OjKbsIlZWVodXV1R7exjHO8fb09PQ3XEPq4LcKDbqig6BB1qTHFfPz8+Gurq5W3k4mk1dOtrS03KTX4uJigvX5Qe6ZIWu26IioAPiBb8gDskWw46Hz4AtZ8wNHVCpBV3R3dycWFhZuOemx88IELgC4vLwUOhcEgQsQi8XCLApupQC7+2GWHq0UMKLTYYzQws/WXExNTTX19va+4O2NjY2ts7Oz84qKiqsRu76+3qiurs4sLy+nyT1YPM27ZhhYBIyNjTUODAy85O2Dg4PD9vb2eCQSieGYn2eF0yv0Jfd4Xgorg4kNe66/5m3MC1jZO7u3t5eB4dguAvoODg4apI7wKzbfBejo6AhNTEzcrCHwSREc5+dw3NnZGcN3/Nzk5GQPriU1hCtI3+uAdDod5VVevhlh9mQIUVFVVfWZ5BGqAYDvEXBxcXF1p0Wmw/gOfXgkHB0dqb74MEU7+v4UiMfj28yR9NDQ0PfNzc286/f7+/uZtbW1bSbC75GRkeTp6ansSq9J1hNAiMBL4QDAC1ThN8l3Ugn6CFJG6jV6sQkwJ9m/qARA3ksvoBSLAAj9BClQDALwvQJKL0cLXQA4jbxX3ihRyALA+RlyuWfoMRUmnm2RKUQBPN0kJSqASXePSZbjJnmI6FwAamOGpjo9dYNJ1uwuQT7sGpVJga/Xn16s1jjBFzNQ0qbIo1DPhco+QUSCQd5zYjONRqPRaDQajUbjL38BFOZkzE3BMTIAAAAASUVORK5CYII="
    },
    cc4a: function (e, t, o) { },
    cc83: function (e, t, o) {
        "use strict";
        o("c614")
    },
    d007: function (e, t, o) { },
    d2a7: function (e, t, o) {
        "use strict";
        o.r(t);
        var n = o("bc3a")
            , a = o("48e8")
            , c = o("8544");
        const i = "DOMAIN"
            , r = "DOMAIN_MAP"
            , s = "TEXTDOMAIN_MAP"
            , l = {
                domainMap: a["a"],
                allowDomainLanguageCombineList: ["en2zh-CHS", "zh-CHS2en"],
                isAllowAigc: !1,
                textTransDomainMap: a["a"],
                aigcDomainMap: []
            }
            , d = {
                [r](e, t) {
                    e.domainMap = t
                },
                [s](e, t) {
                    e.textTransDomainMap = JSON.parse(JSON.stringify(t))
                },
                SET_ISALLOWAIGC(e, t) {
                    e.isAllowAigc = t
                },
                SET_AIGCDOMAINMAP(e, t) {
                    e.aigcDomainMap = t
                }
            }
            , u = {
                initDictDomainFromLS({ commit: e, state: t }, o) {
                    var n = c["a"].get("" + o);
                    e(i, null !== n ? n : "0")
                },
                async fetchDomainData({ commit: e, state: t }, o) {
                    var a = await n["a"].get("https://doctrans-service.youdao.com/common/enums/list?key=domain");
                    a.data.data && (e(r, a.data.data),
                        e(s, a.data.data))
                },
                updateDomainMap({ commit: e, state: t }) {
                    if (0 !== t.aigcDomainMap.length) {
                        const e = t.textTransDomainMap.length;
                        t.aigcDomainMap.forEach((o, n) => {
                            t.textTransDomainMap.push({
                                str: String(e + n),
                                msg: o,
                                from: "aigc"
                            })
                        }
                        )
                    }
                }
            }
            , m = {
                getDomainLabelByValue: e => t => {
                    let o = "";
                    for (var n = 0; n < e.domainMap.length; n += 1)
                        if (t === e.domainMap[n].str) {
                            o = e.domainMap[n].msg;
                            break
                        }
                    return o
                }
                ,
                getTextDomainLabelByValue: e => t => {
                    let o = "";
                    for (var n = 0; n < e.textTransDomainMap.length; n += 1)
                        if (t === e.textTransDomainMap[n].str) {
                            o = e.textTransDomainMap[n].msg;
                            break
                        }
                    return o
                }
            };
        t["default"] = {
            state: l,
            mutations: d,
            actions: u,
            getters: m
        }
    },
    d706: function (e, t, o) {
        "use strict";
        var n = o("7a23");
        const a = {
            class: "inner-content"
        };
        function c(e, t, o, c, i, r) {
            const s = Object(n["resolveDirective"])("fixed");
            return Object(n["openBlock"])(),
                Object(n["createBlock"])(n["Teleport"], {
                    to: "body"
                }, [o.visible ? Object(n["withDirectives"])((Object(n["openBlock"])(),
                    Object(n["createElementBlock"])("div", {
                        key: 0,
                        class: "pop-up-comp mask",
                        onClick: t[0] || (t[0] = Object(n["withModifiers"])((...e) => c.close && c.close(...e), ["self"]))
                    }, [Object(n["createElementVNode"])("div", a, [Object(n["renderSlot"])(e.$slots, "content", {}, void 0, !0)])])), [[s]]) : Object(n["createCommentVNode"])("", !0)])
        }
        var i = {
            name: "PopUp",
            props: {
                visible: Boolean,
                modalClosable: {
                    type: Boolean,
                    default: !0
                }
            },
            setup(e, t) {
                function o() {
                    e.modalClosable && t.emit("update:visible", !1)
                }
                return {
                    close: o
                }
            },
            directives: {
                fixed: {
                    mounted() {
                        const e = document.body.scrollTop || document.documentElement.scrollTop;
                        document.body.style.cssText += `position:fixed;top:-${e}px;width: 100%;`
                    },
                    unmounted() {
                        const { body: e } = document;
                        e.style.position = "static";
                        const { top: t } = e.style;
                        document.body.scrollTop = -parseInt(t, 10),
                            document.documentElement.scrollTop = -parseInt(t, 10),
                            e.style.top = ""
                    }
                }
            }
        }
            , r = (o("594a"),
                o("d959"))
            , s = o.n(r);
        const l = s()(i, [["render", c], ["__scopeId", "data-v-909b0550"]]);
        t["a"] = l
    },
    df52: function (e, t, o) {
        "use strict";
        var n = o("5724");
        const a = "https://dict.youdao.com"
            , c = "https://dict.youdao.com/vip"
            , i = ["option_avatar", "nickname"]
            , r = e => Object(n["b"])(c + "/user/status", e)
            , s = () => Object(n["a"])(a + "/login/acc/query/accountinfo")
            , l = e => Object(n["a"])(`${a}/profile/batch/get?content=${encodeURIComponent(JSON.stringify(i))}`, e);
        t["a"] = {
            getAccountInfos: s,
            getBatchUrl: l,
            getVipStatus: r
        }
    },
    e550: function (e, t, o) {
        "use strict";
        var n = o("1344");
        const a = {}
            , c = Object(n["a"])();
        a.$on = c.on,
            a.$off = c.off,
            a.$emit = c.emit,
            t["a"] = a
    },
    e79d: function (e, t, o) {
        "use strict";
        o("1bd0")
    },
    e88e: function (e, t, o) {
        e.exports = o.p + "img/qrcode.5d5d1c6a.png"
    },
    f1e2: function (e, t, o) { },
    f9f8: function (e, t, o) { },
    fe14: function (e, t, o) {
        "use strict";
        o("396f")
    },
    ffd2: function (e, t, o) {
        "use strict";
        o("2201")
    }
});
