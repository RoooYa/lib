
/**
 * 任意范围的随机数生成函数如下
 * 
 * @since 0.1.0
 *
 *
 *
 */

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}


export default getRandomArbitrary