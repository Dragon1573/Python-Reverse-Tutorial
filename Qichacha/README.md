# 企查查逆向分析教程

> **【注意】**
>
> 视频教程讲解内容补全，使用 `yarn node` 命令执行 JavaScript 脚本过程中会遇到变量未定义的情况。后续内容已无法复现！

- [入口链接](https://www.qcc.com/firm/5dffb644394922f9073544a08f38be9f.html)
- [接口地址](https://www.qcc.com/api/datalist/mainmember?keyNo=5dffb644394922f9073544a08f38be9f&nodeName=Employees&pageIndex=2)

> 此处抓取的接口与 [视频教程](https://www.bilibili.com/video/BV1Lg4y1G7ou?p=5) 讲解的接口不同（视频那个要登录 VIP 才会实际发送请求），但请求头加密方式是类似的，可以共通。

## 分析过程

1. 访问 **入口链接** ，在快捷导航选项卡中选择 「基本信息 ＞ 主要人员 ＞ 工商登记」

   ![image-20230416222632996](./assets/image-20230416222632996.png)

2. 开启 DevTools 开发人员工具，切换到「网络 ＞ Fetch/XHR」选项卡

3. 点击下方翻页栏，跳转至第2页，抓取到接口请求包

   ![image-20230416222904104](./assets/image-20230416222904104.png)

4. 确认响应为 JSON 明文格式

   ![image-20230416223022769](./assets/image-20230416223022769.png)

5. 检查请求头，需要重点破解一个参数加密

   ![image-20230416223232344](./assets/image-20230416223232344.png)

6. 搜索并定位头部加密的逻辑点

   - 一般的请求头设置逻辑为 `headers[key] = value` 或者 `headers.key = value` 形式
   - 使用 DevTools 全局搜索功能进行定位
   - 搜索关键词根据逻辑可以搜索 `headers[` 或者 `headers.`

   经过检索可以找到下面这个函数变量

   ```javascript
   var u = function(e) {
       var t = e.url.replace(e.baseURL, ""),
           n = o.default.stringify(e.params || {});
       n && (t += (-1 === t.indexOf("?") ? "?" : o.default.options.delimiter || "&") + n),
           t = t.toLowerCase();
       var i = (0, a.default)(t, e.data),
           l = (0, r.default)(t, e.data, (0, s.default)());
       e.headers[i] = l;        // <-- 这里
   };
   ```

7. 下断点、重发请求，成功暂停，检查变量 `l` 的值和长度，可以确认为 SHA-512 摘要

   ![image-20230416224648171](./assets/image-20230416224648171.png)

8. 检查变量 `i` 的长度，与请求头中的键值对匹配

   ![image-20230416224857367](./assets/image-20230416224857367.png)

9. 扒取片段到 [`encrypt.js`](./src/encrypt.js) 的变量 `u` 中备用

10. 在控制台输入 `a.default` ，跳转并扒取代码片段（变量 `s` ）备用

