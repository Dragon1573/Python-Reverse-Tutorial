// 引入依赖项
const hacker = require("./snippets");

// 构造解密器
const a = hacker("1c46"),
    c = hacker.n(a),
    e = hacker("b639"),
    f = x => {
        return c.a.createHash("md5").update(x).digest()
    };

// 解密函数
function z(t, o, n) {
    if (!t)
        return null;
    // 对密钥进行编码
    const a = e.Buffer.alloc(16, f(o))
        , i = e.Buffer.alloc(16, f(n))
        // 构造解密器
        , r = c.a.createDecipheriv("aes-128-cbc", a, i);
    // 提交密文，执行解密
    let s = r.update(t, "base64", "utf-8");
    // 执行解码
    return s += r.final("utf-8"),
        s
}

// 用于执行解密的密钥
const decodeKey = "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl",
    decodeIv = "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4";

// 封装解密函数，用于 Python 调用
function decrypt(response) {
    return z(response, decodeKey, decodeIv);
}
