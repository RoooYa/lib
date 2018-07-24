
// 计算数组中值的出现次数。

// 使用Array.reduce()在每次遇到数组中的特定值时递增计数器。

// countOccurrences([1,1,2,1,2,3], 1) -> 3

function countOccurrences (arr, value) {
	return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0)
}

export default countOccurrences