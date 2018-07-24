/*删除其中一个元素*/

function remove(array, v) {
	let index = array.indexOf(v)
	if (index > -1) array.splice(index, 1)
	return array
}

export default remove