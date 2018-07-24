/*
 * 监听自定义事件
 *
 * @参数：{string} type, {Function} fn
 * 
 * 
 * @example 
 * import Event from './event.js'
 * Event.on('test', function (msg) {
 *  console.log(msg)
 * })
 * Event.emit('test', 'hi')
 *
 */
export default {

  _listeners: {},

  _setListeners(type, fn, isOnce = 0) {
    if (!this._listeners[type]) this._listeners[type] = []
    if (this._listeners[type] && typeof fn === "function") this._listeners[type].push({
      fn: fn,
      isOnce: isOnce
    })
  },

  on(type, fn) {
    this._setListeners(type, fn)
  },


  /*
   * 监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器。 
   *
   */
  once(type, fn) {
    this._setListeners(type, fn, 1)
  },

  /*
   * 触发当前实例上的事件。附加参数都会传给监听器回调
   *
   */
  emit(type, ...values) {
    let arrayEvent = this._listeners[type]
    if (!arrayEvent) {
      return console.error(`没有找到 "${type}" 事件监听`)
    }
    arrayEvent.forEach((item, i) => {
      if (typeof item.fn === 'function') item.fn(...values)
      if (item.isOnce) arrayEvent.splice(i, 1)
    })
  },

  /*
   * 移除自定义事件监听器
   * 如果没有提供参数，则移除所有的事件监听器；
   * 如果只提供了事件，则移除该事件所有的监听器；
   * 如果同时提供了事件与回调，则只移除这个回调的监听器。
   *
   */
  off(type, fn) {

    if (!arguments.length) return this._listeners = {}
    let arrayEvent = this._listeners[type]
    if (typeof fn === 'function') {
      for (let i = 0, length = arrayEvent.length; i < length; i++) {
        if (arrayEvent[i].fn === fn) {
          this._listeners[type].splice(i, 1)
          break
        }
      }
    } else {
      delete this._listeners[type]
    }
  }
}