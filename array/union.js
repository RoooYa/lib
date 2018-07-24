/*求两个集合的并集*/
function union(a, b) {
	var newArr = a.concat(b)
	return this.unique(newArr)
}