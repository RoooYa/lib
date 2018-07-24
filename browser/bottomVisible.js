// 如果页面的底部可见, 则返回true, 否则为false。

function bottomVisible () {
	return document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight || document.documentElement.clientHeight
}

export default bottomVisible