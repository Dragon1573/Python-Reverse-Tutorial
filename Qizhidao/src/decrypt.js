const crypto = require("crypto-js");
const fs = require("fs");
const path = require("path");

// 密钥对象
const o = {
    1: "xc46VoB49X3PGYAg",
    2: "KE3pb84wxqLTZEG3",
    3: "18Lw0OEaBBUwHYNT",
    4: "jxxWWIzvkqEQcZrd",
    5: "40w42rjLEXxYhxRn",
    6: "K6hkD03WNW8N1fPM",
    7: "I8V3IwIhrwNbWxqz",
    8: "3JNNbxAP4zi5oSGA",
    9: "7pUuESQl8aRTFFKK",
    10: "KB4GAHN6M5soB3WV"
};

// 解密函数
function decrypt(e, t) {
    return function (e, t) {
        var n = crypto.enc.Utf8.parse(t || "46cc793c53dc451b")
            , i = crypto.AES.decrypt(e, n, {
                mode: crypto.mode.ECB,
                padding: crypto.pad.Pkcs7
            });
        return crypto.enc.Utf8.stringify(i).toString()
    }(e, o[t]);
}

// 密文太长了，我们从保存的文件里面引入
fs.realpath(process.argv[2], (err, path) => {
    if (err) {
        throw err;
    }
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            throw err;
        }
        const obj = JSON.parse(data)
            , response = decrypt(obj.data1, obj.hasUse);
        console.info(response)
    });
});
