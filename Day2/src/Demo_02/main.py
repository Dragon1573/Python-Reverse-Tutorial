import json
import execjs
import requests
from os.path import join, dirname

# cookies = {
#     # "other_uid": "Ths_iwencai_Xuangu_24xkryrgnv3n7zyqf5gie2lf3lz3znnq",
#     # "ta_random_userid": "yioc8kuhzb",
#     # "cid": "fff10a2ad2aaade00dccd86e17c09c2a1679580464",
#     # "v": "Ayn7MDi9aUSs-lXwZkuoj2gwON6G9hx5h-lBvMsbp2pPt0cAE0Yt-Bc6UYNY",
# }

with open(join(dirname(__file__), "./main.js"), mode="r", encoding="UTF-8") as file:
    js_code = file.read()

js_obj = execjs.compile(js_code)

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    # 'Cookie': 'other_uid=Ths_iwencai_Xuangu_24xkryrgnv3n7zyqf5gie2lf3lz3znnq; ta_random_userid=yioc8kuhzb; cid=fff10a2ad2aaade00dccd86e17c09c2a1679580464; v=Ayn7MDi9aUSs-lXwZkuoj2gwON6G9hx5h-lBvMsbp2pPt0cAE0Yt-Bc6UYNY',
    "Origin": "http://www.iwencai.com",
    "Pragma": "no-cache",
    "Proxy-Connection": "keep-alive",
    "Referer": "http://www.iwencai.com/unifiedwap/result?w=%E8%85%BE%E8%AE%AF&querytype=stock&addSign=1679580549408",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.44",
    # 固定可用，需要破解加密的值
    "hexin-v": js_obj.call("window.func_O"),
}

json_data = {
    "question": "腾讯",
    "perpage": 50,
    "page": 1,
    "secondary_intent": "stock",
    "log_info": '{"input_type":"typewrite"}',
    "source": "Ths_iwencai_Xuangu",
    "version": "2.0",
    "query_area": "",
    "block_list": "",
    "add_info": '{"urp":{"scene":1,"company":1,"business":1},"contentType":"json","searchInfo":true}',
    "rsh": "Ths_iwencai_Xuangu_24xkryrgnv3n7zyqf5gie2lf3lz3znnq",
}

response = requests.post(
    "http://www.iwencai.com/customized/chart/get-robot-data",
    # cookies=cookies,
    headers=headers,
    json=json_data,
    verify=False,
)

# Note: json_data will not be serialized by requests
# exactly as it was in the original request.
# data = '{"question":"腾讯","perpage":50,"page":1,"secondary_intent":"stock","log_info":"{\\"input_type\\":\\"typewrite\\"}","source":"Ths_iwencai_Xuangu","version":"2.0","query_area":"","block_list":"","add_info":"{\\"urp\\":{\\"scene\\":1,\\"company\\":1,\\"business\\":1},\\"contentType\\":\\"json\\",\\"searchInfo\\":true}","rsh":"Ths_iwencai_Xuangu_24xkryrgnv3n7zyqf5gie2lf3lz3znnq"}'.encode()
# response = requests.post(
#    'http://www.iwencai.com/customized/chart/get-robot-data',
#    cookies=cookies,
#    headers=headers,
#    data=data,
#    verify=False,
# )

print(json.dumps(response.json()))
