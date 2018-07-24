// 将字符串的第一个字母大写

// capitalize('myName') -> 'MyName'
// capitalize('myName', true) -> 'Myname'


function capitalize([first, ...rest], lowerRest = false) {
	first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''))
}

export default capitalize