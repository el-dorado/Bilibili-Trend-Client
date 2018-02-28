export const BASE_URL = 'https://bird.ioliu.cn/v1?url='

// 下列 URL 具体参数参考 'analysis.md' 文件
export const MEMBER_URL = BASE_URL + 'https://space.bilibili.com/ajax/member/getSubmitVideos?'
// https://search.bilibili.com/api/search?search_type=bili_user&keyword=%E7%8E%8B%E8%80%81%E8%8F%8A&user_type=0&page=1
export const SEARCH_URL = BASE_URL + 'https://search.bilibili.com/api/search?'

// todo: 修正错别字
export const SEARCH_URSE_URL = BASE_URL + 'https://search.bilibili.com/api/search?search_type=bili_user'

export const UPINFO_URL = BASE_URL + 'https://api.bilibili.com/x/web-interface/card?callback=jQuery17203315846063444545_1519535784552&'

// 全站 30 天综合排行
export const MAIN_SITE_RANK_URL = BASE_URL + 'https://www.bilibili.com/index/rank/all-30-0.json'

// 全站排行
export const RANK_URL = BASE_URL + 'https://www.bilibili.com/index/rank/'

export const FULL_TABS = [
  {mark: 0, name: '全站'},
  {mark: 1, name: '动画'},
  {mark: 168, name: '国创相关'},
  {mark: 3, name: '音乐'},
  {mark: 129, name: '舞蹈'},
  {mark: 4, name: '游戏'},
  {mark: 36, name: '科技'},
  {mark: 160, name: '生活'},
  {mark: 119, name: '鬼畜'},
  {mark: 155, name: '时尚'},
  {mark: 5, name: '娱乐'},
  {mark: 181, name: '影视'}
]

export const BANGUMI_TABS = [{mark: 13, name: '番剧'},
  {mark: 167, name: '国产动画'}]

export const CINEMA_TABS = [
  {mark: 177, name: '纪录片'},
  {mark: 23, name: '电影'},
  {mark: 11, name: '电视剧'}
]

export const FULL_RANK = [
  {rname: '三日内', mark: 3},
  {rname: '日排行', mark: 1},
  {rname: '周排行', mark: 7},
  {rname: '月排行', mark: 30}
]
export const BANGUMI_RANK = [
  {rname: '三日内', mark: 3},
  {rname: '周排行', mark: 7}
]
