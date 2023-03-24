// 主函数
function main(A) {
    // 加密算法（本质是MD5）
    function J(r) {
        return require("crypto").createHash("md5").update(r).digest("hex");
    }

    function getparam(A) {
        {
            var i = "?";
            for (var e in A)
                i += e,
                    i += "=",
                    i += A[e],
                    i += "&";
            return i = i.substr(0, i.length - 1)
        }
    }

    const Ji = "6RNRDpjjV6wZ2ssPxqeIBeSoV1ITXDdC";

    let i = (new Date).getTime(), e = "";
    // let i = 1679498607223, e = "";
    A.data.timestamp = i.toString();
    "{}" == JSON.stringify(A.data) ? e = `?key=${Ji}` : (e = getparam(A.data), e = `${e}&key=${Ji}`);
    e = (A.url + e).toLowerCase();
    console.log(e);

    return {
        "x-token": J(e),
        "signature": J(J("7Tv7LrinK2bsNAi9TF2uui3ZIcoxK1WT")),
        "params": A.data,
        "e": e
    }
}

console.log(main({
    data: {
        "flag": "top",
        "page": "1",
        "per_page": "9",
    },
    url: "api/product/getProductSearch"
}))
