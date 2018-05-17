function isNum (v) {
  return typeof v === 'number'
}
/**
 * 格式化数字
 * @param  {[type]} num [description]
 * @return {[type]}     [description]
 */
export function numFormat (num) {
  if (!(+num)) {
    return '0' // 如果是空串返回错误信息
  }
  if (isNum(num)) {
    num = num.toString()
  }
  const nums = num.split('').reverse()
  const len = nums.length
  const outNums = []
  for (let i = 0; i < len; i++) {
    if (i !== 0 && i % 3 === 0) {
      outNums.push(',')
    }
    outNums.push(nums[i])
  }
  return outNums.reverse().join('')
}
