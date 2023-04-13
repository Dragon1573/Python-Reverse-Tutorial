from json import loads
from time import time
import requests
import execjs
import jsonpath
from os.path import join, dirname
import logging

# 设置日志格式
logging.basicConfig(
    format="%(asctime)s %(levelname)s %(message)s",
    datefmt="%Y/%m/%d %H:%M:%S",
    level=logging.DEBUG,
)


def send(_content: str, _timestamp: int, _sign: str) -> str:
    """向有道翻译 API 发送请求，并获得响应

    API 返回的数据是经过加密的，需要在后续步骤自行解密

    Args:
        _content (str): 需要翻译的原文
        _timestamp (int): 时间戳
        _sign (str): 请求签名

    Returns:
        str: 被加密的响应体，解密后为 JSON 对象
    """
    # 准备数据
    cookies = {
        "OUTFOX_SEARCH_USER_ID": "2059842630@10.112.57.88",
        "OUTFOX_SEARCH_USER_ID_NCOO": "266275969.19080633",
    }
    headers = {
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "Connection": "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded",
        "Origin": "https://fanyi.youdao.com",
        "Referer": "https://fanyi.youdao.com/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/114.0.0.0 Safari/537.36 Edg/114.0.0.0"
        ),
        "sec-ch-ua": '"Not.A/Brand";v="8", "Chromium";v="114", "Microsoft Edge";v="114"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
    }
    data = {
        "i": _content,
        "from": "auto",
        "to": "",
        "domain": "0",
        "dictResult": "true",
        "keyid": "webfanyi",
        "sign": _sign,
        # "sign": "4b668a8d20c136ceb962838d188bcb1d",
        "client": "fanyideskweb",
        "product": "webfanyi",
        "appVersion": "1.0.0",
        "vendor": "web",
        "pointParam": "client,mysticTime,product",
        "mysticTime": str(_timestamp),
        "keyfrom": "fanyi.web",
    }

    # 发送请求
    response = requests.post(
        "https://dict.youdao.com/webtranslate",
        cookies=cookies,
        headers=headers,
        data=data,
    )
    if response.status_code == 200:
        return response.text
    else:
        return ""


def encrypt(_timestamp: int) -> str:
    """
    调用 JavaScript 脚本实现加密签名

    Returns:
        str: 签名值
    """
    with open(join(dirname(__file__), "encrypt.js"), "r", encoding="UTF-8") as file:
        js_code = execjs.compile(file.read(), cwd=dirname(__file__))
    return js_code.call("encrypt", _timestamp)


def decrypt(_response: str) -> str:
    """
    调用 JavaScript 脚本实现响应解密

    Args:
        _response (str): 已被加密的原始响应体

    Returns:
        str: 解密后的译文内容
    """
    with open(join(dirname(__file__), "decrypt.js"), "r", encoding="UTF-8") as file:
        js_code = execjs.compile(file.read(), cwd=dirname(__file__))
    response_obj = loads(js_code.call("decrypt", _response))
    values = jsonpath.jsonpath(response_obj, "$.translateResult[*][*].tgt")
    if values:
        return values[0]
    else:
        return "[错误] 未能正确获取译文！"


if __name__ == "__main__":
    content: str = input("请输入原文：")
    stamp = int(time())
    sign = encrypt(stamp)
    logging.debug(f"签名值：{sign}")
    encrypted_response = send(content, stamp, sign)
    response = decrypt(encrypted_response)
    print(response)
