// 将字符串截断为指定长度。

// 确定字符串的length是否大于num。将截断的字符串返回到所需的长度, 并将...追加到末尾或原始字符串。

// truncateString('boomerang', 7) -> 'boom...'

function truncateString(str, num) {
	str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str
}

export default truncateString