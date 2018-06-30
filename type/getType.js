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
 * isType([])	// => 'array'
 * isType({})	// => 'object'
 * isType(5)	// => 'number'
 * isType(new Date())	// => 'date'
 * isType(null)	// => 'null'
 * isType(/123/)	// => 'regex'
 * isType()	// => 'undefined'
 *
 */


function isType(value) {
	let type = Object.prototype.toString.call(o)
	return type.match(/\[object (.*?)\]/)[1].toLowerCase()
}

export default isType