import getType from './getType.js'

/**
 * 获取数据是否为array类型
 *
 *
 */


function isArray (value) {
 	return getType(value) === 'array'
 		? true 
 		: false
}

export default isArray