# -*- coding: utf-8 -*-
# @Author   : HeLaoshi
# @File     : demo1.py
# @Project  : PythonReversePath
import requests
import execjs

cookies = {
    'btoken': 'DWXNDLCQQT8JQUWSM5RS9EDKZ91H4260',
    'hy_data_2020_id': '1857c836ee362-00bac934c35899-7a575473-2073600-1857c836ee41bbb',
    'hy_data_2020_js_sdk': '%7B%22distinct_id%22%3A%221857c836ee362-00bac934c35899-7a575473-2073600-1857c836ee41bbb%22%2C%22site_id%22%3A211%2C%22user_company%22%3A105%2C%22props%22%3A%7B%7D%2C%22device_id%22%3A%221857c836ee362-00bac934c35899-7a575473-2073600-1857c836ee41bbb%22%7D',
    'Hm_lvt_42317524c1662a500d12d3784dbea0f8': '1678968892,1679318053,1679378341,1679396872',
    'Hm_lpvt_42317524c1662a500d12d3784dbea0f8': '1679396872',
}

headers = {
    'authority': 'www.xiniudata.com',
    'accept': 'application/json',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    # 'cookie': 'btoken=DWXNDLCQQT8JQUWSM5RS9EDKZ91H4260; hy_data_2020_id=1857c836ee362-00bac934c35899-7a575473-2073600-1857c836ee41bbb; hy_data_2020_js_sdk=%7B%22distinct_id%22%3A%221857c836ee362-00bac934c35899-7a575473-2073600-1857c836ee41bbb%22%2C%22site_id%22%3A211%2C%22user_company%22%3A105%2C%22props%22%3A%7B%7D%2C%22device_id%22%3A%221857c836ee362-00bac934c35899-7a575473-2073600-1857c836ee41bbb%22%7D; Hm_lvt_42317524c1662a500d12d3784dbea0f8=1678968892,1679318053,1679378341,1679396872; Hm_lpvt_42317524c1662a500d12d3784dbea0f8=1679396872',
    'origin': 'https://www.xiniudata.com',
    'pragma': 'no-cache',
    'referer': 'https://www.xiniudata.com/industry/newest?from=data',
    'sec-ch-ua': '"Microsoft Edge";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.44',
}

with open('demo1.js', 'r', encoding='utf-8') as f:
    js_code = f.read()

ctx = execjs.compile(js_code)
result = ctx.call('main123', 140)

json_data = {
    'payload': result['payload'],
    'sig': result['sig'],
    'v': 1,
}

response = requests.post(
    'https://www.xiniudata.com/api2/service/x_service/person_industry_list/list_industries_by_sort',  # 服务器数据地址
    cookies=cookies,
    headers=headers,
    json=json_data,
).json()['d']
# print(response)

Decrypt = ctx.call('decryptData', response)  # json  键提取对应的值
print(Decrypt)
