/**
 *
 * @class
 */
export class Video {
  /**
   * 评论
   * @type {number}
   */
  comment = 1318

  /**
   * 播放次数
   * @type {number}
   */
  play = 490812

  /**
   * 收藏次数
   * @type {number}
   */
  favorites = 0

  /**
   * 封面
   * @type {string}
   */
  pic = '//i2.hdslb.com/bfs/archive/568ac3bf323356d2bfc53624ae0960a215335c61.jpg'

  /**
   * 描述
   * @type {string}
   */
  description = '自制 大炮疯脸雷锤圣剑就是一个站撸'

  /**
   * 标题
   * @type {string}
   */
  title = '王老菊的血源之旅10：中出宇宙大鱿鱼'

  /**
   * 作者
   * @type {string}
   */
  author = '怕上火暴王老菊'

  init (vlist) {
    this.author = vlist.author
    this.comment = vlist.comment
    this.description = vlist.description
    this.pic = vlist.pic
    this.title = vlist.title
    this.play = vlist.play
    this.created = vlist.created
    this.favorites = vlist.favorites
  }
}
