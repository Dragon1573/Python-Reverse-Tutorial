// 钩子函数，在 JSON 解析时外挂调试器
var raw_parse = JSON.parse;

JSON.parse = function (params) {
    debugger;
    console.info("Data to be parsed:", params);
    return raw_parse(params);
}
