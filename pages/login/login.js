// pages/personal/personal.js
//index.js
var login = require("../../utils/common.js")
//获取应用实例
const app = getApp()
Page({

  data: {

    isGoLogin: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },

  // 授权-去到绑定登录页面
  getUserInfo(e) {
    console.log(e)
    wx.getUserInfo({
      success: (res) => {
        console.log(res)
        // 修改全局个人信息变量
        getApp().globalData.userInfo = res.userInfo;
        // 切换状态-到登录
        this.setData({
          isGoLogin: true,
        })
      }
    })
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
  onPullDownRefresh: function () {

  },

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