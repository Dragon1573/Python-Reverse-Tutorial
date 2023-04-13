# 有道翻译 JavaScript 逆向实战

- [算法分析](https://www.bilibili.com/video/BV1Lg4y1G7ou/)
- [JavaScript算法处理](https://www.bilibili.com/video/BV1Lg4y1G7ou?p=2)

## 分析过程

1. 在 [有道翻译](https://fanyi.youdao.com/index.html#/) 抓包

2. 需要被翻译的内容以 Ajax 异步请求的形式被发动到特定的 [接口](https://dict.youdao.com/webtranslate) 上，请求方式为 `POST`
   - 原文被封装在表单的 `i` 参数中
   - 请求在表单的 `sign` 参数中包含一段签名
   - 响应也是被加密的内容
   
3. 译文在控制台 Debug 输出了，位于解密后对象的 `$.translateResult[*][*].tgt`

4. 从控制台直接跳转到源代码视图（位于 `textTranslate.*.js` ），可以看到 `console.log` 字样的调试输出

5. 格式化源代码，可以发现下面这样的一段处理响应的回调函数内容。回调函数的参数 `o` 是响应返回的密文，解密得到的 `n` 是一个 JSON 字符串

   ```javascript
    o => {
        nn["a"].cancelLastGpt();
        // 解密方法
        const n = nn["a"].decodeData(o, an["a"].state.text.decodeKey, an["a"].state.text.decodeIv)
            , a = n ? JSON.parse(n) : {};
        console.log("解密后的接口数据：", a),
        0 === a.code ? e.success && t(e.success)(a) : e.fail && t(e.fail)(a)
    }
   ```

6. 在开发工具打开全局搜索，查找关键词 `decodeKey` 和 `decodeIv` ，在 `app.*.js` 里可以找到硬编码的魔法值

   ```javascript
    decodeKey: "ydsecret://query/key/B*RGygVywfNBwpmBaZg*WT7SIOUP2T0C9WHMZN39j^DAdaZhAnxvGcCY6VYFwnHl",
    decodeIv: "ydsecret://query/iv/C@lZe2YzHtZ2CYgaXKSVfsb7Y4QWHjITPPZ0nQp87fBeJ!Iv6v^6fvi2WN@bYpJ4",
   ```

7. 在解密方法处打下断点并暂停，切换至控制台查询 `nn["a"].decodeData` 函数，获得函数本体源代码

   ```javascript
    (t, o, n) => {
        if (!t)
            return null;
        // 对密钥进行编码
        const a = e.alloc(16, f(o))
            , i = e.alloc(16, f(n))
            // 构造解密器
            , r = c.a.createDecipheriv("aes-128-cbc", a, i);
        // 提交密文，执行解密
        let s = r.update(t, "base64", "utf-8");
        // 执行解码
        return s += r.final("utf-8"),
        s
    }
   ```

8. 选中解密器函数 `c.a.createDecipheriv` ，跳转到函数定义点 `chunk-vendors.*.js` ，翻到文件开头有如下片段。可以确定文件是一个封包，后续抠 JavaScript 可以把整个文件整体拿下来

   ```javascript
    (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-vendors"], {...}])
   ```

9. 在 `app.*.js` 中往上翻，可以找到如下片段

   ```javascript
    function(e) {
        var n = o("5724")
            , a = o("1c46")
            , c = o.n(a)
            , i = o("bc3a");
            ...
    }
   ```

   以此确定其中的 `o` 是函数加载器

   ```javascript
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
   ```

10. 使用 [渔滒 / webpack_ast · GitCode](https://gitcode.net/zjq592767809/webpack_ast) 提供的 `webpack_mixer.js` ，将 `app.js` 加载器和 `chunk-vendors.js` 封包合并为单一文件的库 `snippets.js` ，供我们执行调用

11. 在 `main.js` 完善解密逻辑并尝试执行，发现 `snippets.js` 存在空对象引用异常，浏览器调试发现此处代码逻辑被分支控制跳过，可以直接将 `if` 片段注释掉，只保留 `else`

    ```javascript
    "9f9d": function (t, e, n) {
    ˰˰(function (e, n) {
    ˰˰¦˰// var r; 
    ˰˰¦˰// if (e.process && e.process.browser) r = "utf-8";else if (e.process && e.process.version) { 
    ˰˰¦˰//   var i = parseInt(n.version.split(".")[0].slice(1), 10);
    ˰˰¦˰//   r = i >= 6 ? "utf-8" : "binary";
    ˰˰¦˰// } else
    ˰˰¦˰˰˰r = "utf-8";
    ˰˰¦˰t.exports = r;
    ˰˰}).call(this, n("c8ba"), n("4362"));
    },
    ```

12. 再次执行，可以顺利完成响应解密

    ```
    15:28:54 ~/D/P/Youdao_Fanyi 1ms $ yarn node src/main.js | jq                                                                                      main ✱ ◼
    {
      "code": 0,
      "translateResult": [
        [
          {
            "tgt": "Fsih",
            "src": "Fsih",
            "tgtPronounce": "Fsih"
          }
        ]
      ],
      "type": "id2zh-CHS"
    }
    ```

    
