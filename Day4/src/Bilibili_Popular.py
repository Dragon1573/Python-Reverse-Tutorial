import requests
from jsonpath import jsonpath
import pandas
from os.path import dirname, join

headers = {
    "authority": "api.bilibili.com",
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
    "cache-control": "no-cache",
    # 'cookie': 'buvid3=55854423-9034-6BD2-DC0B-09180006B4B888068infoc; b_nut=1665288388; i-wanna-go-back=-1; _uuid=7E81CFD4-10E1D-8DFF-17F10-8974B2C8E9BC88503infoc; buvid_fp_plain=undefined; DedeUserID=289561900; DedeUserID__ckMd5=72da37ac831215dc; b_ut=5; nostalgia_conf=-1; buvid4=08024425-D10F-888E-BF46-54C8AE744AEB89476-022100912-EvTeQq4ZfK5P%2FzGCMGdoRw%3D%3D; CURRENT_BLACKGAP=0; blackside_state=0; LIVE_BUVID=AUTO4016677482687964; PVID=1; rpdid=0zbfVGoLmM|rDd8bzH7|3L4|3w1OVCea; CURRENT_QUALITY=120; hit-new-style-dyn=0; hit-dyn-v2=1; header_theme_version=CLOSE; home_feed_column=5; buvid_fp=4bba45d5cd278de41af286eb87d4c1f0; fingerprint=76d142db253f9fe787302a57212bcb3e; bp_t_offset_289561900=776111658749657090; CURRENT_FNVAL=16; is-2022-channel=1; innersign=0; b_lsid=7F7FB3E8_18713B1B18D; SESSDATA=39d8e2b2%2C1695214628%2C78f10%2A31; bili_jct=f5ce229ac77a08d375c7295d3d9f8149; sid=ptkr1v7q',
    "origin": "https://www.bilibili.com",
    "pragma": "no-cache",
    "referer": "https://www.bilibili.com/v/popular/all/?spm_id_from=333.1007.0.0",
    "sec-ch-ua": '"Microsoft Edge";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.51",
}

params = {
    "ps": "20",
    "pn": "1",
}

response = requests.get(
    "https://api.bilibili.com/x/web-interface/popular",
    params=params,
    headers=headers,
).json()

dataset = pandas.DataFrame(
    {
        "视频标题": jsonpath(response, "$.data.list[*].title"),
        "视频分类": jsonpath(response, "$.data.list[*].tname"),
        "视频AV号": jsonpath(response, "$.data.list[*].aid"),
        "视频BV号": jsonpath(response, "$.data.list[*].bvid"),
        "视频描述": jsonpath(response, "$.data.list[*].desc"),
        "视频封面": jsonpath(response, "$.data.list[*].pic"),
        "作者名称": jsonpath(response, "$.data.list[*].owner.name"),
        "视频短链接": jsonpath(response, "$.data.list[*].short_link_v2"),
        "投币": jsonpath(response, "$.data.list[*].stat.coin"),
        "收藏": jsonpath(response, "$.data.list[*].stat.favorite"),
        "弹幕": jsonpath(response, "$.data.list[*].stat.danmaku"),
        "点赞": jsonpath(response, "$.data.list[*].stat.like"),
        "播放": jsonpath(response, "$.data.list[*].stat.view"),
        "分享": jsonpath(response, "$.data.list[*].stat.share"),
    }
)
dataset.to_excel(join(dirname(__file__), "./dataset.xlsx"))
