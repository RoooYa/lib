
// 如果给定值为数字, 则返回true, 否则为false

// 将!isNaN与parseFloat()结合使用, 以检查参数是否为数字。使用isFinite()检查数字是否是有限的。使用Number()检查强制是否保持

function number (n) {
	return !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n
}

export default number