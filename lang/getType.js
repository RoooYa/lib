/**
 * 获取数据类型
 * 
 * @since 0.1.0
 *
 *
 * @returns {string} Returns the lower cased string.
 * @see array, object, number, date, null, regex, undefined, string, boolean, function, error, arguments
 * @example
 * 
 * getType([])	// => 'array'
 * getType({})	// => 'object'
 * getType(5)	// => 'number'
 * getType(new Date())	// => 'date'
 * getType(null)	// => 'null'
 * getType(/123/)	// => 'regex'
 * getType()	// => 'undefined'
 *
 */


function getType(value) {
	let type = Object.prototype.toString.call(value)
	return type.match(/\[object (.*?)\]/)[1].toLowerCase()
}

export default type