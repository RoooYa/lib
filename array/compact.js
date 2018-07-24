/*
* 从数组中移除 falsey 值
*
* 使用Array.filter()筛选出 falsey 值 (false、null、0、""、undefined和NaN).
*	// compact([0, 1, false, 2, '', 3, 'a', 'e'*23, NaN, 's', 34]) -> [ 1, 2, 3, 'a', 's', 34 ]
*
*/


function compact (arr) {
	return arr.filter(Boolean)
} 

export default compact