export class Up {
  /**
   * 姓名
   * @type {string}
   */
  name = ''
  /**
   * 所有投稿
   * @type Video<array>
   */
  submit = []
  /**
   * 按照播放量排序
   * @type Video<array>
   */
  sortByPlayCount = []
  /**
   * 总播放次数
   * @type {number}
   */
  playCount = 0
  /**
   * 创建时间
   * @type {number}
   */
  created = 0
}
