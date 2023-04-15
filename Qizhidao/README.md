# 企知道响应解密教程

- [交互页面](https://www.qizhidao.com/check?searchKey=%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD&tagNum=1&fromRoutePage=check)
- [接口链接](https://app.qizhidao.com/qzd-bff-enterprise/qzd/v1/enterprise/zhichan/enterpriseListV2)

```bash
# 查看原始响应体
cat ./src/response.json | jq

# 执行解密
yarn node ./src/decrypt.js ./src/response.json | jq
```

## 知识点

- RESTful API 的数据响应格式一般使用 JSON
- 一般需要使用 `JSON.parse()` 方法将 JSON 字符串解析为对象以供调用
- 可以考虑使用 Hook 方法对解析进行外挂调试

## 分析流程

[![BV1Lg4y1G7ou?p=3](https://img.shields.io/badge/Bilibili-BV1Lg4y1G7ou%3Fp%3D3-blue?style=flat&logo=bilibili)](https://www.bilibili.com/video/BV1Lg4y1G7ou?p=3)

1. 刷新交互页面，并导航至翻页栏

2. 使用 [`hook.js`](./src/hook.js) 为页面添加钩子，执行翻页自动进入断点

3. 通过钩子函数传入的 `params` 参数值确认解密逻辑，`JSON.parse` 可能存在大量的调用

4. 其中，响应传入的值格式类似于 [`response.json`](./response.json)

5. 检查调用堆栈，可以确认调用 JSON 解析的逻辑

   > **注意**：视频教程中的所有源代码均经过了 Obfuscator 混淆加密，但本文复现过程中未见混淆加密，仅有如下样式的代码变量名压缩。

   ```javascript
   // 解析 JSON
   J: function(e) {
       if (!e || "string" != typeof e)
           return e;
       var t = null;
       try {
           t = JSON.parse(e);		// <- 这里
       } catch (e) {}
       return t;
   }
   ```

   ```javascript
   // 接受返回值
   var m = i.J(a);
   ```

6. 继续执行，可以发现在2～3次「继续」后，传入解析的 JSON 字符串变成了明文，参考内容如 [`response_02.txt`](./response_02.txt)

7. 检查调用堆栈，可以发现如下用于解密的代码片段

   ```javascript
   fulfilled: async (e, n) => {
       let i = await t.getDependencies();		// <- 存储解密函数的对象在这
       if (!i) return;
       let {aesDecrypt: r} = i			// <- 解密函数从这里获取
       , {config: o} = e
       , a = n.getResponseData(null == o ? void 0 : o.requestRecordId);
       a && a.hasUse && (a.data = JSON.parse(r(a.data1, a.hasUse)),		// <- 在这里
                         n.setResponseData(null == o ? void 0 : o.requestRecordId, a))
   }
   ```

8. 继续检查其中的函数 `r()` ，找到以下代码片段

   ```javascript
   function (e, t) {
       return function (e, t) {
           var n = r.a.enc.Utf8.parse(t || "46cc793c53dc451b")
           , i = r.a.AES.decrypt(e, n, {
               mode: r.a.mode.ECB,
               padding: r.a.pad.Pkcs7
           });
           return r.a.enc.Utf8.stringify(i).toString()
       }(e, o[t]);
   }
   ```

9. 将这一段函数提取出来，补全其中的所有变量依赖即可完成 JavaScript 逆向过程

## 实战流程

[![BV1Lg4y1G7ou?p=4](https://img.shields.io/badge/Bilibili-BV1Lg4y1G7ou%3Fp%3D4-blue?style=flat&logo=bilibili)](https://www.bilibili.com/video/BV1Lg4y1G7ou?p=4)

1. 从上文分析，`r.a` 是一个标准密码学库，我们可以考虑采用 `Crypto-JS` 来取代这里的 `r.a`
2. 上文中有一个变量 `o` ，往前翻可以找到一个密钥对象变量
3. 这里的参数 `t` 是会变化的，当密文 `e` 与密钥索引 `t` 不对应时，在函数 `stringify` 阶段会出现 `Malformed UTF-8 string` 的错误，解码后的内容仍不正确，无法按照 UTF-8 编码被还原为字符串
4. 密文 `e` 和索引 `t` 都可以在解析后的 JSON 响应对象里面找到，其中密文路径为 `$.data1` ，索引 `t` 路径为 `$.hasUse`
5. 脚本 `decrypt.js` 接受一个 JSON 文件路径作为唯一参数，读取文件内容并对其执行解密
6. 可以在浏览器抓取接口后跳转到「网络 ＞ 预览」界面，右键空白处选择「复制 object」，粘贴并保存为 JSON 文件供 `decrypt.js` 读取解密

## 后记

本实战源自 @洛哥 学员的兼职商单，原价 2K 。由于请求体中涉及多个加密参数，后追加 8K 预算完成交付。

请求头/请求体参数加密涉及内容过多，因此视频未涉及。
