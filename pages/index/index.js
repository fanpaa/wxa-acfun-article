import { search } from '../../utils/api'
import { formatTime } from '../../utils/util'

let param = {
  pageNo: 1,
  pageSize: 20,
  sort: 4
}

const app = getApp()

Page({
  data: {
    list: []
  },
  onLoad: function () {
    this.fetchData();
  },
  fetchData(append = false) {
    const self = this;
    wx.request({
      url: `${search}?channelIds=110&pageNo=${param.pageNo}&pageSize=${param.pageSize}&sort=${param.sort}`,
      header: {
        deviceType: 0,
      },
      success: function (res) {

        let _data = res.data.data.list;

        _data.forEach(item => {
          item.releaseDate = app.timeagoInstance.format(item.releaseDate)
        })

        if (append) {
          self.setData({
            list: self.data.list.concat(_data)
          }
          )
        } else {
          self.setData({
            list: _data
          })
        }
      }
    })
  },
  // onPullDownRefresh: function () {
  //   param.pageNo = 1;
  //   this.fetchData();
  // },
  onReachBottom: function () {
    param.pageNo++;
    this.fetchData(true);
  },
})