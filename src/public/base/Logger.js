/* eslint-disable */
import WebSDK from '@/public/api/websdk'

class Logger {
  static log (value, type = 'javascript', showInConsole = true) {
    if (value === undefined) return

    var date = new Date()
    var d = date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate() + ' '
    var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds()
    var log = '[' + d + ' ' + time + ']' + value.toString()
    if (showInConsole) console.log(log)
    WebSDK('common.print', type, value)
  }
}

export const LoggerPlugin = {
  install (Vue) {
    Vue.prototype.$Logger = Logger
  }
}

export { Logger as default }
