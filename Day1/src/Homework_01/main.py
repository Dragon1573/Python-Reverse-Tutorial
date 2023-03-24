from json import dumps
from execjs import compile
from os.path import join, dirname
import httpx
import asyncio
from urllib3.util import parse_url

endpoint = "https://api.huancang.art/api/product/getProductSearch"

params = {
    "flag": "top",
    "page": "1",
    "per_page": "9",
}


with open(join(dirname(__file__), "./main.js"), mode="r", encoding="UTF-8") as file:
    js_helper = compile(file.read())

encrypted = js_helper.call(
    "main", {"url": parse_url(endpoint).path[1:], "data": params}
)


async def main():
    headers = {
        "authority": "api.huancang.art",
        "accept": "application/json, text/plain, */*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
        "cache-control": "no-cache",
        "content-type": "application/json;charset=UTF-8",
        "origin": "https://huancang.art",
        "pragma": "no-cache",
        "referer": "https://huancang.art/",
        "sec-ch-ua": '"Microsoft Edge";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        "signature": encrypted["signature"],
        "token": "null",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.44",
        "x-token": encrypted["x-token"],
    }

    async with httpx.AsyncClient() as client:
        response = await client.get(
            endpoint,
            params=encrypted["params"],
            headers=headers,
        )
        print(dumps(response.json(), ensure_ascii=False))


asyncio.run(main())
