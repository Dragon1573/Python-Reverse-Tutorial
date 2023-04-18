function get_pack() {
    var t = t || function (t, e) {
        var n = Object.create || function () {
            function t() { }
            return function (e) {
                var n;
                return t.prototype = e,
                    n = new t,
                    t.prototype = null,
                    n
            }
        }()
            , r = {}
            , i = r.lib = {}
            , o = i.Base = {
                extend: function (t) {
                    var e = n(this);
                    return t && e.mixIn(t),
                        e.hasOwnProperty("init") && this.init !== e.init || (e.init = function () {
                            e.$super.init.apply(this, arguments)
                        }
                        ),
                        e.init.prototype = e,
                        e.$super = this,
                        e
                },
                create: function () {
                    var t = this.extend();
                    return t.init.apply(t, arguments),
                        t
                },
                init: function () { },
                mixIn: function (t) {
                    for (var e in t)
                        t.hasOwnProperty(e) && (this[e] = t[e]);
                    t.hasOwnProperty("toString") && (this.toString = t.toString)
                },
                clone: function () {
                    return this.init.prototype.extend(this)
                }
            }
            , a = i.WordArray = o.extend({
                init: function (t, n) {
                    t = this.words = t || [],
                        this.sigBytes = n != e ? n : 4 * t.length
                },
                toString: function (t) {
                    return (t || s).stringify(this)
                },
                concat: function (t) {
                    var e = this.words
                        , n = t.words
                        , r = this.sigBytes
                        , i = t.sigBytes;
                    if (this.clamp(),
                        r % 4)
                        for (var o = 0; o < i; o++) {
                            var a = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            e[r + o >>> 2] |= a << 24 - (r + o) % 4 * 8
                        }
                    else
                        for (o = 0; o < i; o += 4)
                            e[r + o >>> 2] = n[o >>> 2];
                    return this.sigBytes += i,
                        this
                },
                clamp: function () {
                    var e = this.words
                        , n = this.sigBytes;
                    e[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                        e.length = t.ceil(n / 4)
                },
                clone: function () {
                    var t = o.clone.call(this);
                    return t.words = this.words.slice(0),
                        t
                },
                random: function (e) {
                    for (var n, r = [], i = function (e) {
                        var n = 987654321
                            , r = 4294967295;
                        return function () {
                            var i = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & r) & r;
                            return i /= 4294967296,
                                (i += .5) * (t.random() > .5 ? 1 : -1)
                        }
                    }, o = 0; o < e; o += 4) {
                        var c = i(4294967296 * (n || t.random()));
                        n = 987654071 * c(),
                            r.push(4294967296 * c() | 0)
                    }
                    return new a.init(r, e)
                }
            })
            , c = r.enc = {}
            , s = c.Hex = {
                stringify: function (t) {
                    for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                        var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        r.push((o >>> 4).toString(16)),
                            r.push((15 & o).toString(16))
                    }
                    return r.join("")
                },
                parse: function (t) {
                    for (var e = t.length, n = [], r = 0; r < e; r += 2)
                        n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - r % 8 * 4;
                    return new a.init(n, e / 2)
                }
            }
            , u = c.Latin1 = {
                stringify: function (t) {
                    for (var e = t.words, n = t.sigBytes, r = [], i = 0; i < n; i++) {
                        var o = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        r.push(String.fromCharCode(o))
                    }
                    return r.join("")
                },
                parse: function (t) {
                    for (var e = t.length, n = [], r = 0; r < e; r++)
                        n[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                    return new a.init(n, e)
                }
            }
            , l = c.Utf8 = {
                stringify: function (t) {
                    try {
                        return decodeURIComponent(escape(u.stringify(t)))
                    } catch (t) {
                        throw new Error("Malformed UTF-8 data")
                    }
                },
                parse: function (t) {
                    return u.parse(unescape(encodeURIComponent(t)))
                }
            }
            , f = i.BufferedBlockAlgorithm = o.extend({
                reset: function () {
                    this._data = new a.init,
                        this._nDataBytes = 0
                },
                _append: function (t) {
                    "string" == typeof t && (t = l.parse(t)),
                        this._data.concat(t),
                        this._nDataBytes += t.sigBytes
                },
                _process: function (e) {
                    var n = this._data
                        , r = n.words
                        , i = n.sigBytes
                        , o = this.blockSize
                        , c = i / (4 * o)
                        , s = (c = e ? t.ceil(c) : t.max((0 | c) - this._minBufferSize, 0)) * o
                        , u = t.min(4 * s, i);
                    if (s) {
                        for (var l = 0; l < s; l += o)
                            this._doProcessBlock(r, l);
                        var f = r.splice(0, s);
                        n.sigBytes -= u
                    }
                    return new a.init(f, u)
                },
                clone: function () {
                    var t = o.clone.call(this);
                    return t._data = this._data.clone(),
                        t
                },
                _minBufferSize: 0
            })
            , h = (i.Hasher = f.extend({
                cfg: o.extend(),
                init: function (t) {
                    this.cfg = this.cfg.extend(t),
                        this.reset()
                },
                reset: function () {
                    f.reset.call(this),
                        this._doReset()
                },
                update: function (t) {
                    return this._append(t),
                        this._process(),
                        this
                },
                finalize: function (t) {
                    return t && this._append(t),
                        this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function (t) {
                    return function (e, n) {
                        return new t.init(n).finalize(e)
                    }
                },
                _createHmacHelper: function (t) {
                    return function (e, n) {
                        return new h.HMAC.init(t, n).finalize(e)
                    }
                }
            }),
                r.algo = {});
        return r
    }(Math);
    return function (e) {
        var n = t
            , r = n.lib
            , i = r.Base
            , o = r.WordArray
            , a = n.x64 = {};
        a.Word = i.extend({
            init: function (t, e) {
                this.high = t,
                    this.low = e
            }
        }),
            a.WordArray = i.extend({
                init: function (t, n) {
                    t = this.words = t || [],
                        this.sigBytes = n != e ? n : 8 * t.length
                },
                toX32: function () {
                    for (var t = this.words, e = t.length, n = [], r = 0; r < e; r++) {
                        var i = t[r];
                        n.push(i.high),
                            n.push(i.low)
                    }
                    return o.create(n, this.sigBytes)
                },
                clone: function () {
                    for (var t = i.clone.call(this), e = t.words = this.words.slice(0), n = e.length, r = 0; r < n; r++)
                        e[r] = e[r].clone();
                    return t
                }
            })
    }(), function () {
        var e = t
            , n = e.lib.Hasher
            , r = e.x64
            , i = r.Word
            , o = r.WordArray
            , a = e.algo;
        function c() {
            return i.create.apply(i, arguments)
        }
        var s = [c(1116352408, 3609767458), c(1899447441, 602891725), c(3049323471, 3964484399), c(3921009573, 2173295548), c(961987163, 4081628472), c(1508970993, 3053834265), c(2453635748, 2937671579), c(2870763221, 3664609560), c(3624381080, 2734883394), c(310598401, 1164996542), c(607225278, 1323610764), c(1426881987, 3590304994), c(1925078388, 4068182383), c(2162078206, 991336113), c(2614888103, 633803317), c(3248222580, 3479774868), c(3835390401, 2666613458), c(4022224774, 944711139), c(264347078, 2341262773), c(604807628, 2007800933), c(770255983, 1495990901), c(1249150122, 1856431235), c(1555081692, 3175218132), c(1996064986, 2198950837), c(2554220882, 3999719339), c(2821834349, 766784016), c(2952996808, 2566594879), c(3210313671, 3203337956), c(3336571891, 1034457026), c(3584528711, 2466948901), c(113926993, 3758326383), c(338241895, 168717936), c(666307205, 1188179964), c(773529912, 1546045734), c(1294757372, 1522805485), c(1396182291, 2643833823), c(1695183700, 2343527390), c(1986661051, 1014477480), c(2177026350, 1206759142), c(2456956037, 344077627), c(2730485921, 1290863460), c(2820302411, 3158454273), c(3259730800, 3505952657), c(3345764771, 106217008), c(3516065817, 3606008344), c(3600352804, 1432725776), c(4094571909, 1467031594), c(275423344, 851169720), c(430227734, 3100823752), c(506948616, 1363258195), c(659060556, 3750685593), c(883997877, 3785050280), c(958139571, 3318307427), c(1322822218, 3812723403), c(1537002063, 2003034995), c(1747873779, 3602036899), c(1955562222, 1575990012), c(2024104815, 1125592928), c(2227730452, 2716904306), c(2361852424, 442776044), c(2428436474, 593698344), c(2756734187, 3733110249), c(3204031479, 2999351573), c(3329325298, 3815920427), c(3391569614, 3928383900), c(3515267271, 566280711), c(3940187606, 3454069534), c(4118630271, 4000239992), c(116418474, 1914138554), c(174292421, 2731055270), c(289380356, 3203993006), c(460393269, 320620315), c(685471733, 587496836), c(852142971, 1086792851), c(1017036298, 365543100), c(1126000580, 2618297676), c(1288033470, 3409855158), c(1501505948, 4234509866), c(1607167915, 987167468), c(1816402316, 1246189591)]
            , u = [];
        !function () {
            for (var t = 0; t < 80; t++)
                u[t] = c()
        }();
        var l = a.SHA512 = n.extend({
            _doReset: function () {
                this._hash = new o.init([new i.init(1779033703, 4089235720), new i.init(3144134277, 2227873595), new i.init(1013904242, 4271175723), new i.init(2773480762, 1595750129), new i.init(1359893119, 2917565137), new i.init(2600822924, 725511199), new i.init(528734635, 4215389547), new i.init(1541459225, 327033209)])
            },
            _doProcessBlock: function (t, e) {
                for (var n = this._hash.words, r = n[0], i = n[1], o = n[2], a = n[3], c = n[4], l = n[5], f = n[6], h = n[7], p = r.high, d = r.low, v = i.high, y = i.low, g = o.high, m = o.low, b = a.high, _ = a.low, w = c.high, x = c.low, z = l.high, T = l.low, M = f.high, S = f.low, C = h.high, O = h.low, H = p, A = d, E = v, k = y, L = g, V = m, j = b, P = _, R = w, F = x, D = z, N = T, I = M, B = S, $ = C, U = O, W = 0; W < 80; W++) {
                    var q = u[W];
                    if (W < 16)
                        var Y = q.high = 0 | t[e + 2 * W]
                            , X = q.low = 0 | t[e + 2 * W + 1];
                    else {
                        var G = u[W - 15]
                            , K = G.high
                            , J = G.low
                            , Z = (K >>> 1 | J << 31) ^ (K >>> 8 | J << 24) ^ K >>> 7
                            , Q = (J >>> 1 | K << 31) ^ (J >>> 8 | K << 24) ^ (J >>> 7 | K << 25)
                            , tt = u[W - 2]
                            , et = tt.high
                            , nt = tt.low
                            , rt = (et >>> 19 | nt << 13) ^ (et << 3 | nt >>> 29) ^ et >>> 6
                            , it = (nt >>> 19 | et << 13) ^ (nt << 3 | et >>> 29) ^ (nt >>> 6 | et << 26)
                            , ot = u[W - 7]
                            , at = ot.high
                            , ct = ot.low
                            , st = u[W - 16]
                            , ut = st.high
                            , lt = st.low;
                        Y = (Y = (Y = Z + at + ((X = Q + ct) >>> 0 < Q >>> 0 ? 1 : 0)) + rt + ((X += it) >>> 0 < it >>> 0 ? 1 : 0)) + ut + ((X += lt) >>> 0 < lt >>> 0 ? 1 : 0),
                            q.high = Y,
                            q.low = X
                    }
                    var ft, ht = R & D ^ ~R & I, pt = F & N ^ ~F & B, dt = H & E ^ H & L ^ E & L, vt = A & k ^ A & V ^ k & V, yt = (H >>> 28 | A << 4) ^ (H << 30 | A >>> 2) ^ (H << 25 | A >>> 7), gt = (A >>> 28 | H << 4) ^ (A << 30 | H >>> 2) ^ (A << 25 | H >>> 7), mt = (R >>> 14 | F << 18) ^ (R >>> 18 | F << 14) ^ (R << 23 | F >>> 9), bt = (F >>> 14 | R << 18) ^ (F >>> 18 | R << 14) ^ (F << 23 | R >>> 9), _t = s[W], wt = _t.high, xt = _t.low, zt = $ + mt + ((ft = U + bt) >>> 0 < U >>> 0 ? 1 : 0), Tt = gt + vt;
                    $ = I,
                        U = B,
                        I = D,
                        B = N,
                        D = R,
                        N = F,
                        R = j + (zt = (zt = (zt = zt + ht + ((ft += pt) >>> 0 < pt >>> 0 ? 1 : 0)) + wt + ((ft += xt) >>> 0 < xt >>> 0 ? 1 : 0)) + Y + ((ft += X) >>> 0 < X >>> 0 ? 1 : 0)) + ((F = P + ft | 0) >>> 0 < P >>> 0 ? 1 : 0) | 0,
                        j = L,
                        P = V,
                        L = E,
                        V = k,
                        E = H,
                        k = A,
                        H = zt + (yt + dt + (Tt >>> 0 < gt >>> 0 ? 1 : 0)) + ((A = ft + Tt | 0) >>> 0 < ft >>> 0 ? 1 : 0) | 0
                }
                d = r.low = d + A,
                    r.high = p + H + (d >>> 0 < A >>> 0 ? 1 : 0),
                    y = i.low = y + k,
                    i.high = v + E + (y >>> 0 < k >>> 0 ? 1 : 0),
                    m = o.low = m + V,
                    o.high = g + L + (m >>> 0 < V >>> 0 ? 1 : 0),
                    _ = a.low = _ + P,
                    a.high = b + j + (_ >>> 0 < P >>> 0 ? 1 : 0),
                    x = c.low = x + F,
                    c.high = w + R + (x >>> 0 < F >>> 0 ? 1 : 0),
                    T = l.low = T + N,
                    l.high = z + D + (T >>> 0 < N >>> 0 ? 1 : 0),
                    S = f.low = S + B,
                    f.high = M + I + (S >>> 0 < B >>> 0 ? 1 : 0),
                    O = h.low = O + U,
                    h.high = C + $ + (O >>> 0 < U >>> 0 ? 1 : 0)
            },
            _doFinalize: function () {
                var t = this._data
                    , e = t.words
                    , n = 8 * this._nDataBytes
                    , r = 8 * t.sigBytes;
                return e[r >>> 5] |= 128 << 24 - r % 32,
                    e[30 + (r + 128 >>> 10 << 5)] = Math.floor(n / 4294967296),
                    e[31 + (r + 128 >>> 10 << 5)] = n,
                    t.sigBytes = 4 * e.length,
                    this._process(),
                    this._hash.toX32()
            },
            clone: function () {
                var t = n.clone.call(this);
                return t._hash = this._hash.clone(),
                    t
            },
            blockSize: 32
        });
        e.SHA512 = n._createHelper(l),
            e.HmacSHA512 = n._createHmacHelper(l)
    }(), t
};

// 参数 e 是摘要明文，参数 n 是摘要盐，此处的盐是固定的
// 摘要算法不可逆，因此盐必须硬编码写死
function o(e, t) {
    return get_pack().HmacSHA512(e, t).toString();
};

var r_01 = function () {
    const o = {
        "default": {
            "n": 20,
            "codes": {
                "0": "W",
                "1": "l",
                "2": "k",
                "3": "B",
                "4": "Q",
                "5": "g",
                "6": "f",
                "7": "i",
                "8": "i",
                "9": "r",
                "10": "v",
                "11": "6",
                "12": "A",
                "13": "K",
                "14": "N",
                "15": "k",
                "16": "4",
                "17": "L",
                "18": "1",
                "19": "8"
            }
        }
    };
    // 这一部分整体是 API 路径地址
    for (var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/").toLowerCase(),
        t = e + e, n = "", i = 0;
        i < t.length; ++i) {
        // .charCodeAt() 获取字符的 Unicode 编码
        // o.default.n 是密钥长度，此处为 20
        var a = t[i].charCodeAt() % o.default.n;
        // o.default.codes 是一个密钥映射表，用于从中获取密钥字符进行拼接
        // 对象 o 已被硬编码固定
        n += o.default.codes[a];
    }
    return n;
};

var s_01 = function () {
    // arguments 是以数组形式封装的函数参数
    // 此处的 (void 0) 写法会产生一个 undefined
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/").toLowerCase()
        , n = JSON.stringify(e).toLowerCase();
    // 此处涉及2个加密函数
    return o(t + n, r_01(t)).toLowerCase().substr(8, 20);
};

function _default() {
    // var list = ["w", "i", "n", "d", "o", "w", ".", "t", "i", "d"];
    // return eval(list.join(""));

    // 本质是 window.pid 属性值，它来自请求头的 X-Pid 参数
    return "98f045b7cdb9c1fc05bfdd218eccfa6b";
};

var s_02 = function () {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
        , n = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/").toLowerCase()
        , i = JSON.stringify(e).toLowerCase();
    return o(n + "pathString" + i + t, r_01(n))
};

var r_02 = function (e) {
    return JSON.stringify(e)
};

var u = function (e) {
    // 传入的参数 t 是请求的 API 路径，去除开头的协议/域名前缀
    let t = e.url.replace(e.baseURL, "");
    const n = r_02(e.params || {});
    // 此处 undefined 原文是 o.default.options.delimeter
    n && (t += (-1 === t.indexOf("?") ? "?" : undefined || "&") + n),
        t = t.toLowerCase();
    // 原片段涉及运算优先级 (0, a.default) 写法，可以直接简化
    // 此处 undefined 原文是 e.data
    const i = s_01(t, undefined);
    // const l = s_02(t, undefined, _default());

    console.info("加密Key：", i);
    // console.info("加密Value：", l);
};

(function () {
    u({
        url: "https://www.qcc.com/api/datalist/mainmember?keyNo=5dffb644394922f9073544a08f38be9f&nodeName=Employees&pageIndex=1",
        baseURL: "https://www.qcc.com"
    })
})();
