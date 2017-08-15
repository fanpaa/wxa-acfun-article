import { search } from '../../utils/api'

let param = {
  pageNo: 1,
  pageSize: 20,
  sort: 4
}

Page({
  data: {
    list:[]
  },
  onLoad: function () {
    const self = this
    wx.request({
      url: `${search}?channelIds=110&pageNo=${param.pageNo}&pageSize=${param.pageSize}&sort=${param.sort}`,
      header: {
        deviceType: 0,
      },
      success: function (res) {
        self.setData({
          list:res.data.data.list
        })
      }
    })
  }
})