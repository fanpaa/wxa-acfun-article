//app.js
import timeago from './utils/timeago.min.js'
const timeagoInstance = timeago(null, 'zh_CN')

App({
  timeagoInstance,
  onLaunch:function(){}
})
