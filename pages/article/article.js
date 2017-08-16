// article.js
import { article } from '../../utils/api'
import { formatTime } from '../../utils/util'
//在使用的View中引入WxParse模块
let WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    description: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.stopPullDownRefresh();
    let self = this;
    if (options.contentId) {
      wx.request({
        url: `${article}/${options.contentId}`,
        header: {
          deviceType: 0,
        },
        success: function (res) {
          let content = res.data.vdata.article.content;
          WxParse.wxParse('content', 'html', content, self, 5);
          self.setData({
            title: res.data.vdata.title,
            description: res.data.vdata.description,
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  // onPullDownRefresh: function () {

  // },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})