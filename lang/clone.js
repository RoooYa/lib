/**
 * 浅拷贝对象
 * 
 * @since 0.1.0
 *
 *
 * 
 * 
 * 
 * 
 * 
 * 
 *
 */

 import getType from './getType.js'

 function clone(value) {
 	let type = getType(value)

 	if (type === 'object') return {...value}

 	if (type === 'array') return [...value]
 	
 	return value
 }

 export default clone