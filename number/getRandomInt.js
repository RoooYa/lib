
/**
 * 任意范围的随机整数生成函数
 * 
 * @since 0.1.0
 *
 *
 *
 */

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}


export default getRandomInt