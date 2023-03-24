const Crypto = require("crypto-js");
const fs = require('fs');

const path = fs.realpathSync((__dirname + "/response.txt"));
const data = fs.readFileSync(path, 'UTF-8');
function h(t) {
    const e = Crypto.enc.Hex.parse(t)
        , n = Crypto.enc.Base64.stringify(e)
        , m = Crypto.enc.Utf8.parse("0123456789ABCDEF")
        , f = Crypto.enc.Utf8.parse("jo8j9wGw%6HbxfFn")
        , a = Crypto.AES.decrypt(n, f, {
            iv: m,
            mode: Crypto.mode.CBC,
            padding: Crypto.pad.Pkcs7
        })
        , r = a.toString(Crypto.enc.Utf8);
    return r.toString()
}
console.log(h(data))
