import './less/index.less'
import {numFormat, tpl, tplOneItem} from './utils/utils.js'
import NodeTree from './components/treeDom.js'

class CountUp {
  constructor (dom = null, timestamp = 2000, fontSize = 24) {
    this.num = 0
    this.fpstime = 200
    this.timestamp = timestamp
    this.showNum = 0
    this.intervalNumStr = 0 // 中间值
    this.intervalNum = ''   // 中间num
    this.fontSize = fontSize // 默认的字体大小
    this.nodeTree = new NodeTree(dom, this.fontSize)
    this.timer = null
  }
  render (num = 0) {
    if (this.num === 0) {
      this.intervalNum = Math.floor(num - num / 10)
    }
    this.num = num
    clearInterval(this.timer)
    let i = 0
    this.timer = setInterval(() => {
      const div = this.num - this.intervalNum
      this.intervalNum += Math.ceil(div / 10)
      i ++
      if (this.intervalNum >= this.num) {
        this.intervalNum = this.num
        clearInterval(this.timer)
      }
      this.update()
    }, this.fpstime)
    this.update()
  }
  update () {
    this.intervalNumStr = numFormat(this.intervalNum).split('')
    this.nodeTree.setData(this.intervalNumStr).render()
  }
}

export default CountUp
