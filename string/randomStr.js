/**
 * 返回指定位数随机字符
 * 
 *
 */

function randomStr(length) {
	let ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	ALPHABET += 'abcdefghijklmnopqrstuvwxyz';
	ALPHABET += '0123456789-_';
	let str = '';

	for (let i = 0; i < length; ++i) {
		let rand = Math.floor(Math.random() * ALPHABET.length)
		str += ALPHABET.substring(rand, rand + 1)
	}
	return str
}

export default randomStr