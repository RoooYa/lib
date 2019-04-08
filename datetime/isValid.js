
// 判断日期是否合法

export default (date) => {
  return Date.parse(date) > 0
}