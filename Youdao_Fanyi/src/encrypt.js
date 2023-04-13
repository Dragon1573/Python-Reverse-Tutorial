// 引入依赖项
const hacker = require("./snippets");

// 加密密钥
const l = "fanyideskweb"
    , d = "webfanyi"
    , c = hacker.n(hacker("1c46"))
    , m = "fsdsogkndfokasodnaso";

// 加密函数
function g(e) {
    return c.a.createHash("md5").update(e.toString()).digest("hex");
}

function v(e, t) {
    return g(`client=${l}&mysticTime=${e}&product=${d}&key=${t}`);
}

function encrypt(t) {
    return v(t, m);
}
