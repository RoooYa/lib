/**
 * 普通字符转换成html标签字符
 *
 */

function htmlSafer(str) {
	let arrEntities = {
		'lt': '<',
		'gt': '>',
		'nbsp': ' ',
		'amp': '&',
		'quot': '"'
	};
	return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, (all, t) => {
		return arrEntities[t]
	})
}

export default htmlSafer