function createElement(name, attr, txt) {
  let dom = document.createElement(name)
  for (var i in attr) {
    dom.setAttribute(i, attr[i])
  }
  if (txt) {
    const text = document.createTextNode(txt)
    dom.appendChild(text)
  }
  return dom
}

class Node {
  constructor (val, h) {
    this.render()
    this.setNum(val, h)
  }
  render () {
    const dom = this.dom = createElement('div', {'class': 'countup-num'})
    const num = '0123456789,'
      num.split('')
      .map(d => createElement('div', {'class': 'countup-num__item'}, d))
      .forEach(d => {
        dom.appendChild(d)
      })
  }
  setNum (d, h) {
    if (d === ',') {
      d = 10
    }
    this.dom.style.transform = `translateY(-${d * h}px)`
  }
}

export default class NodeTree {
  constructor (domWrap, h) {
    this.dom = createElement('div', {'class': 'countup-container'})
    this.domWrap = domWrap
    this.array = []
    this.child = []
    this.h = h
    this.domWrap.appendChild(this.dom)
    this.dom.style.height = `${h}px`
    this.dom.style.lineHeight = `${h}px`
    this.dom.style.fontSize = `${h}px`
  }
  setData(array) {
    this.newArray = array
    if (this.array.length === 0) {
      this.array = this.newArray
    }
    return this
  }
  render () {
    const len = this.child.length
    const nlen = this.newArray.length
    for (var i = 0; i < nlen; i++) {
      if (i <= len - 1) {
        this.child[i].setNum(this.newArray[i], this.h)
      }
      if (i > len - 1) {
        this.appendChild(new Node(this.newArray[i], this.h))
      }
    }
    while (len > i) {
      this.removeChild(this.child[this.child.length - 1])
      i ++
    }
    this.array = this.newArray // 设置值的变化
  }
  appendChild (node) {
    this.child.push(node)
    this.dom.appendChild(node.dom)
  }
  removeChild (node) {
    const index = this.child.indexOf(node)
    node.dom.parentNode.removeChild(node.dom)
    this.child.splice(index, i)
  }
}
