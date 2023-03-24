import requests
import re
import json
import os
import urllib.parse


def canshu():
    keys = """
        输入【a】指定页面下载，比如输入5只下载第5页数据
        输入【b】下载相关页数据，比如输入5下载1-5页数据
    """
    print(keys)


def k_reqeust(url):
    headers = {
        "user-agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/94.0.4606.81 Safari/537.36"
        ),
        "cookie": (
            "kg_mid=09fbe19da8563f6fd444a3657c4c71f6; "
            "kg_dfid=0hoWuV15LpJc3XeE0j46EoR1; "
            "Hm_lvt_aedee6983d4cfc62f509129360d6bb3d=1633592836"
        ),
        "referer": "https://www.kugou.com/",
    }
    res = requests.get(url, headers=headers)
    return res


def k_dowaload(items):
    """
    父级地址 解析歌曲
    https://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery&hash=4D6C21507053B174CCCE4A6A5F34AB35&dfid=dfid&mid=mid&platid=4&album_id=555030
    https://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery&hash=4D6C21507053B174CCCE4A6A5F34AB35&dfid=dfid&mid=mid&platid=4&album_id=555030
    music地址
    """
    if isinstance(items, list):
        for it in items:
            """
            FileHash
            AlbumID  bum_id
            """
            hash = it.get("FileHash")
            a_id = it.get("AlbumID")
            """
            https://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery&hash=4D6C21507053B174CCCE4A6A5F34AB35&dfid=dfid&mid=mid

            https://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery&hash=71F78C6D200CDE66C2075FF8D2C42DC7&dfid=dfid&mid=mid
            """
            # https://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery&hash=71F78C6D200CDE66C2075FF8D2C42DC7&dfid=dfid&mid=mid&platid=4
            music_url = ""
            if a_id:
                music_url = f"https://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery&hash={hash}&dfid=dfid&mid=mid&platid=4&album_id={a_id}"
            else:
                music_url = f"https://wwwapi.kugou.com/yy/index.php?r=play/getdata&callback=jQuery&hash={hash}&dfid=dfid&mid=mid"
            m_res = requests.get(
                music_url,
                headers={
                    "user-agent": (
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                        "AppleWebKit/537.36 (KHTML, like Gecko) "
                        "Chrome/94.0.4606.81 Safari/537.36"
                    ),
                    "cookie": (
                        "kg_mid=09fbe19da8563f6fd444a3657c4c71f6; "
                        "kg_dfid=0hoWuV15LpJc3XeE0j46EoR1; "
                        "Hm_lvt_aedee6983d4cfc62f509129360d6bb3d=1633592836"
                    ),
                },
            )
            match_obj = re.search(r"jQuery\((.*?)\);", m_res.text)
            if match_obj:
                content = match_obj.group(1)
            else:
                raise ValueError("Regex error! Cannot find anything ...")
            try:
                con = json.loads(content)
                if con.get("status") == 1:
                    item = con.get("data")
                    m_url = item.get("play_url")
                    title = item.get("song_name")
                    music = requests.get(m_url)
                    if os.path.exists("kugou") is False:
                        os.mkdir("kugou")
                    path = "./kugou/" + title + ".mp3"
                    with open(path, "wb") as f:
                        f.write(music.content)
                        print("正在下载", title)
            except Exception as e:
                print(e, m_res.url, "有毒")
                continue
    else:
        exit()


def KuGou(singer, num):
    key = urllib.parse.quote(singer)
    url = (
        "https://songsearch.kugou.com/"
        + f"song_search_v2?keyword={key}&page={str(num)}"
    )
    try:
        res = k_reqeust(url)
        res_items = res.json().get("data")
        page_size = res_items["pagesize"]
        total = res_items["total"]
        print(singer + f"相关歌曲共{total}首,共{page_size}页")
        canshu()
        num_key = input("请根据需求输入相关下载页面 a or b:")
        page_num = input("请输入下载的页码:")
        if int(page_num) > int(page_size):
            print("页面超过下限，请重新开始")
            exit()
        if not page_num.isdigit():
            print("让你输入数字，你输入啥玩意?")
            exit()
        if num_key == "a":
            a_url = (
                "https://songsearch.kugou.com/song_search_v2"
                + f"?keyword={key}&page={str(page_num)}"
            )
            res1 = k_reqeust(a_url)
            items = res1.json().get("data")["lists"]
            k_dowaload(items)
        elif num_key == "b":
            for page in range(1, int(page_num) + 1):
                b_url = (
                    "https://songsearch.kugou.com/song_search_v2"
                    + f"?keyword={key}&page={page}"
                )
                res2 = k_reqeust(b_url)
                items = res2.json().get("data")["lists"]
                k_dowaload(items)
        else:
            print("输入错误")
            exit()
    except Exception as e:
        print(e)
        exit()


def kuwo_download(items):
    for i in items["list"]:
        rid = i["rid"]
        name = i["name"]
        # https://antiserver.kuwo.cn/anti.s?type=convert_url&format=mp3&response=url&rid=228908
        # https://antiserver.kuwo.cn/anti.s?type=convert_url&format=mp3&response=url&rid=440613
        new_url = "https://antiserver.kuwo.cn/anti.s?type=convert_url&format=mp3&response=url&rid={}".format(
            rid
        )
        # new_url = f"https://kuwo.cn/api/v1/www/music/playUrl?mid={rid}"
        #         + "&type=music&httpsStatus=1&reqId=8b6a0650-36fd-11ec-970b-9d2518c9e2df"
        # 请求新网址
        try:
            res = requests.get(new_url)
            if res.status_code == 200:
                # 下载歌曲  最后一次请求
                r = requests.get(res.text).content
                # 路径
                import os

                if os.path.exists("music") is False:
                    os.mkdir("music")
                path = os.path.join(os.getcwd(), "./music/" + name + ".mp3")
                # 保存 文件操作 以二进制写入
                with open(path, "wb") as f:
                    f.write(r)
                    print("正在下载", name)
            else:
                print("付费资源，请遵纪守法")
                continue
        except Exception as e:
            print(e)
            break


def KuWo(singer, num):
    # 确定目标的网址
    # 目标网址
    url = (
        "https://kuwo.cn/api/www/search/searchMusicBykeyWord"
        f"?key={singer}&pn={num}&rn=20&httpsStatus=1&reqId=f20168c0-1d06-11eb-91ba-83cb90e3e81e"
    )
    # 伪装一下  请求头
    # https://kuwo.cn/api/www/search/searchMusicBykeyWord?key=%E5%91%A8%E6%9D%B0%E4%BC%A6&pn=1&rn=30&httpsStatus=1&reqId=08d77840-36fc-11ec-b30f-d75ca0bd3e75
    headers = {
        # 代理信息  模拟浏览器
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/86.0.4240.111 Safari/537.36"
        ),
        # 令牌  钥匙
        "csrf": "RQW36E2YL2",
        # 打开哪个门
        "Cookie": (
            "_ga=GA1.2.1608470527.1605515874; _gid=GA1.2.978722468.1613715177; "
            "Hm_lvt_cdb524f42f0ce19b169a8071123a4797=1612616832,1612685393,1612786462,1613715177; "
            "Hm_lpvt_cdb524f42f0ce19b169a8071123a4797=1613739771; kw_token=RQW36E2YL2"
        ),
        # 域名
        "Host": "kuwo.cn",
        # 防盗链  从哪里来的
        "Referer": "https://kuwo.cn/search/list?key=%E5%91%A8%E6%9D%B0%E4%BC%A6",
    }
    # 模拟浏览器发送请求
    response = requests.get(url, headers=headers)
    response = response.json()
    data = response["data"]
    total = data["total"]
    import math

    page_size = math.ceil(int(total) / 19)
    print(singer + f"相关歌曲共{total}首,共{page_size}页")
    canshu()
    num_key = input("请根据需求输入相关下载页面 a or b:")
    page_num = input("请输入下载的页码:")
    if int(page_num) > int(page_size):
        print("页面超过下限，请重新开始")
        exit()
    if num_key == "a":
        a_url = (
            "https://kuwo.cn/api/www/search/searchMusicBykeyWord"
            f"?key={singer}&pn={page_num}&rn=20&httpsStatus=1&reqId=f20168c0-1d06-11eb-91ba-83cb90e3e81e"
        )
        res1 = requests.get(a_url, headers=headers).json()
        items = res1.get("data")
        kuwo_download(items)

    elif num_key == "b":
        for i in range(1, int(page_num) + 1):
            b_url = (
                "https://kuwo.cn/api/www/search/searchMusicBykeyWord?"
                f"key={singer}&pn={i}&rn=20&httpsStatus=1&reqId=f20168c0-1d06-11eb-91ba-83cb90e3e81e"
            )
            res2 = requests.get(b_url, headers=headers).json()
            items = res2.get("data")
            kuwo_download(items)

    else:
        print("输入错误")
        exit()


def run():
    a = """
        1. VIP酷狗歌曲破解
        2. VIP酷我歌曲破解
        """
    print(a)
    num = 1
    singer = input("请输入歌星得名字:")
    select = int(input("请选择平台:"))
    if select == 1:
        KuGou(singer, num)
    elif select == 2:
        KuWo(singer, num)
    else:
        print("输入错误")
        exit()


if __name__ == "__main__":
    run()
