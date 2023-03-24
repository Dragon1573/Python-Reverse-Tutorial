


// [_0x157208(_0x239f73._0x1b734a) + '\x72\x75\x63\x74\x6f' + '\x72'](_0x157208(0xc4) + '\x67\x67\x65\x72')['\x63\x61\x6c\x6c'](_0x157208(_0x239f73._0x3c20b7) + '\x6e') : function() {
//     return ![];
// }
//
// // 构造器  debugger方法
// constructor.debugger.call(_0x157208(_0x239f73._0x3c20b7) + '\x6e'): function () {
//     return ; // 内存 返回 内存写入东西
// }
//
// var aaa = Function.prototype.constructor
// Function.prototype.constructor = function(x) {
//     // 没有出现debugger 状态
//     if (X != "debugger") {
//         return AAA(x)
//     }
//     // 出现debugger  返回改为空
//     ;return function() {}
//     ;
// }

// open
//
// setcookie
//
// setRequestHeader


// XMLHttpRequest.prototype.setRequestHeader
// XMLHttpRequest.prototype.setRequestHeader = function (x) {
//     if xxx === ('hexin-v'):
//         debugger
// }


(function () {
    // 头部参数 请求对象当中的 设置请求头部参数
    var org = window.XMLHttpRequest.prototype.setRequestHeader;
    window.XMLHttpRequest.prototype.setRequestHeader = function (key, value) {
        //  关键字  在请求当中发现有键是hexin-v  断点
        if (key == 'hexin-v') {
            debugger;
        }
        return org(key, value);
    };
})();


var org = window.XMLHttpRequest.prototype.setRequestHeader;
window.XMLHttpRequest.prototype.setRequestHeader = function (key, value) {
    //  关键字  在请求当中发现有键是hexin-v  断点
    if (key == 'hexin-v') {
        debugger;
    }
    return org(key, value);
}
