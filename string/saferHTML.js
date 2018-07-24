/**
 * 过滤HTML字符串
 * html标签字符转换成普通字符
 *
 */

function saferHTML(templateData) {
	return templateData.replace(/[<>&"]/g, c => {
		return {
			'<': '&lt;',
			'>': '&gt;',
			'&': '&amp;',
			'"': '&quot;'
		}[c]
	})
}

export default saferHTML