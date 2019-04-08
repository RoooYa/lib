
// 如果给定值为数字(负数、小数、正数), 则返回true, 否则为false

function number (n) {
	return /^(-|\+)?\d+(\.\d+)?$/.test(n)
}

export default number