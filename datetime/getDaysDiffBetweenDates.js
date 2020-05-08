// 返回两个日期之间的差异 (以天为值)。
// 计算Date对象之间的差异 (以天为)。
// getDaysDiffBetweenDates(new Date("2017-12-13"), new Date("2017-12-22")) => 9

function getDaysDiffBetweenDates(dateInitial, dateFinal) {
	return (dateFinal - dateInitial) / (1000 * 3600 * 24)
}

export default getDaysDiffBetweenDates