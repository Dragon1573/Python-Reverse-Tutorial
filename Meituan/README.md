# 美团外卖逆向分析教程

- 视频教程： [![BV1Lg4y1G7ou?p=7](https://img.shields.io/badge/Bilibili-BV1Lg4y1G7ou%3Fp%3D7-blue?style=social&logo=bilibili)](https://www.bilibili.com/video/BV1Lg4y1G7ou?p=7) [![BV1Lg4y1G7ou?p=8](https://img.shields.io/badge/Bilibili-BV1Lg4y1G7ou%3Fp%3D8-blue?style=social&logo=bilibili)](https://www.bilibili.com/video/BV1Lg4y1G7ou?p=8)
- [页面入口](https://h5.waimai.meituan.com/waimai/mindex/home)

## 分析流程

### 抓包 ＋ 接口定位

1. 启动 DevTools 开发人员工具，刷新页面执行抓包

   ![image-20230418111119921](./assets/image-20230418111119921.png)

2. 搜索页面元素文本内容，快速确定 [接口地址](https://i.waimai.meituan.com/tsp/open/openh5/home/shopList)

   ![image-20230418111633327](./assets/image-20230418111633327.png)

3. 进一步过滤接口地址，重点关注 XHR 形式的数据包

   ![image-20230418112038046](./assets/image-20230418112038046.png)

4. 切换到「负载」界面，其中的 `openh5_uuid` 和 `uuid` 为反爬虫参数，需要对其执行逆向破解

   ![image-20230418112342266](./assets/image-20230418112342266.png)

### 逻辑点定位

1. 尝试全局搜索，在 `common_at_000846c581cf1.js` 中确认数据写入点

   ![image-20230418112738849](./assets/image-20230418112738849.png)

2. 注意到如下片段，两个加密参数的值完全相同

   ```javascript
   e.data.openh5_uuid = o;
   e.data.uuid = o;
   ```

3. 在以上片段第1行添加断点，刷新页面能够正常触发断点

4. 检查变量 `o` 的值，确认其结果是否匹配

   ![image-20230418122319127](./assets/image-20230418122319127.png)
   
5. 可以发现变量 `o` 来自于上方的逻辑或运算

   ```javascript
   o = f()("iuuid") || f()("uuid") || f()("_lxsdk")
   ```

6. 依次检查函数运算的值，确认数据来源

   ![image-20230418125929592](./assets/image-20230418125929592.png)

7. 借助控制台确认函数 `f()` 的逻辑，可以得到以下代码片段

   ```javascript
   function (e, n, r) {
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
   ```

   ![image-20230418130259497](./assets/image-20230418130259497.png)

8. 注意到以上片段需要使用 `document.cookie` ，而且代码片段较长，对此片段执行逆向破解难度较高，可以向上浏览源代码人工定位变量 `f`

9. 在上面较远距离有下面这个片段

   ```javascript
   26029: function(n, e, t) {
       "use strict";
       // 中间部分省略
       var o = t(50107)
       // 中间部分省略
       , p = t(20125)
       , f = t.n(p)        // <-- 变量声明点在这里
       , // 后面部分省略
   ```

   片段中出现的 `26029` `50107` 和 `20125` 猜测是加载器编号

10. 回到第7步的片段向上检索，可以确认此片段来自加载器 `20125`

    ```javascript
    20125: function (e) {
        var n, t, r,
            i = function (e) {...},
            o = function (e) {...},
            a = /\+/g;
       function c(e) {...}
       function s(e) {...}
       function A(e, n) {...}
       // 就是下面这行的 function
       (t = n = function (e, n, r) {...}).defaults = {},
       r = function (e, t) {...},
       n.remove = r,
       e.exports = n
    }
    ```

11. 以上两个步骤可以确认 JavaScript 代码使用了 Webpack 打包技术，同时导航到 `index_at_370c2b59ad46e.js` 文件顶端并折叠源代码，可以看到开头有一个庞大的函数定义

    ```javascript
    function () {...},
        17739: function(e, n, t) {...},
        50755: function(e, n, t) {...},
        // 后续是一大堆的加载器编号及其函数实现
    ```

12. 在步骤9代码片段的第6行添加断点，刷新页面重新启动调试，可以找到加载器的具体代码片段

    ```javascript
    function o(e) {
        var n = i[e];
        if (void 0 !== n)
            return n.exports;
        var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return r[e].call(t.exports, t, t.exports, o),
            t.loaded = !0,
            t.exports;
    }
    ```

## JavaScript 代码片段提取

1. 改造加载器，参考附录内容封装一个加载器

2. 在上一章最后小节的第10步，确定使用的模块编号为 `20125` ，将它整体取出放置于模块区域

3. 同样定义自调用匿名函数作为主函数使用，完善加密逻辑，尝试执行会遇到找不到 `document` 变量的问题

   ![image-20230418143722340](./assets/image-20230418143722340.png)

4. `document` 环境变量来自浏览器自动暴露，加密过程中需要 `document.cookie` 获取用户浏览器的 Cookies 信息，需要逆向开发者自己补环境变量

5. 在浏览器控制台使用 `document.cookie` 获取 Cookie 值，保存到 `document` 对象中

   ```javascript
   const document = {
       // 把浏览器控制台输出的超长 Cookie 贴进来
       "cookie": "message=5LiN5Lya5ZCn77yM5LiN5Lya5ZCn77yB5LiN5Lya5pyJ5Lq65Lul5Li66L+Z5piv55yf5a6e55qEIENvb2tpZSDlhoXlrrnlkKfvvJ8="
   };
   ```

6. 再次执行脚本，获得加密内容，并确认是否与浏览器请求计算的密文匹配

   ![image-20230418145332640](./assets/image-20230418145332640.png)

   ![image-20230418145408736](./assets/image-20230418145408736.png)

## 附录

### Webpack 源代码结构特征

Webpack 打包后的源代码有以下近似特征

```javascript
// 定义一个全局变量用于对需要的特定模块进行导出
let my_export;

(
    function (t) {
        // 这个部分被称为加载器
        var e = {};
        function i(n) {
            // 加载器的实际加载逻辑基本上都长这个样子
            if (e[n]) {
                return e[n].exports;
            }
            var s = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            // 注意此处的变量 t 来自参数
            // 在扒取加载器源代码执行逻辑拼合的过程中
            // 要注意自己封装的加载器函数参数名与此处对应
            return t[n].call(s.exports, s, s.exports, i),
                s.l = !0,
                s.exports
        }
        my_export = i;
    }(
        {
            // 这个部分被称为模块
            "module_id": function (/* 不一定需要参数 */) {
                // 具体的模块代码
            }
        }
    )
);

// 这样就可以在外部取出需要的模块
console.log(my_export("module_id"));
```

