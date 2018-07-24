/*
* 将数组块划分为指定大小的较小数组。
*
* // chunk([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]]
*
*
*/


function chunk (arr, size) {
	return Array.from({length: Math.ceil(arr.length / size)}, (v, i) => arr.slice(i * size, i * size + size))
}

export default chunk