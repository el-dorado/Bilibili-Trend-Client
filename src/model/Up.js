import * as _ from 'lodash'

export class Up {
  /**
   * 姓名
   * @type {string}
   */
  name = ''

  /**
   * 总播放次数
   * @type {number}
   */
  get playCount () {
    let count = 0
    this.rawAllList.map(item => {
      count += item.play
    })
    return count
  }
  /**
   * 总收藏次数
   * @type {number}
   */
  get favoritersCount () {
    let count = 0
    this.rawAllList.map(item => {
      count += item.favorites
    })
    return count
  }

  /**
   * 创建时间
   * @type {number}
   */
  created = 0

  /**
   * 为处理过的原始信息
   * @type {Array}
   */
  rawAllList = []

  /**
   * 升序列表
   * @returns {Array}
   */
  asc (func) {
    const that = this
    return {
      byPlayCount () {
        return _.sortBy(that.rawAllList, function (item) {
          return -item.play
        })
      },
      byFavorite () {
        return _.sortBy(that.rawAllList, function (item) {
          return -item.favorites
        })
      }
    }
  }

  /**
   * 降序列表
   * @returns {Array}
   */
  desc () {
    const that = this
    return {
      byPlayCount () {
        return _.sortBy(that.rawAllList, function (item) {
          return item.play
        })
      },
      byFavorite () {
        return _.sortBy(that.rawAllList, function (item) {
          return item.favorites
        })
      }
    }
  }
}
