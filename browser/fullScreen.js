/*
 *
 *  开启浏览器全屏 or  关闭全屏
 *
 *
 *
 *
 *
 */

function fullScreen() {
	let el = document.documentElement
	let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen

	if (rfs) {

		//typeof rfs != "undefined" && rfs
		rfs.call(el)

	} else if (typeof window.ActiveXObject != "undefined") {

		//for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
		let wscript = new ActiveXObject("WScript.Shell")

		if (wscript != null) wscript.SendKeys("{F11}")

	}
}


function fullScreenOut() {
	let el = document
	let cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen

	//typeof cfs != "undefined" && cfs
	if (cfs) {

		cfs.call(el)

	} else if (typeof window.ActiveXObject != "undefined") {

		//for IE，这里和fullScreen相同，模拟按下F11键退出全屏

		var wscript = new ActiveXObject("WScript.Shell")
		if (wscript != null) wscript.SendKeys("{F11}")
	}
}

