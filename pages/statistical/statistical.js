// pages/statistical/statistical.js
//获取应用实例
const app = getApp()
//引入接口api文件
import API from "../../utils/api.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.current)
    // this.setData({
    //   url: `http://192.168.0.98:8003/#/?current=${options.current}#wechat_redirect`
    // })

    let params = JSON.parse(options.current)

    let data = {
      holderId: params.holderId,
      holderType: Number(params.holderType),
      holdrGroup: params.holdGroup,
      sessionId: app.globalData.sessionId
    }
  debugger
    app.requestApi(API.getBillInfoWithoutFree, data, (res) => {
      console.log(res)
      if (res) {
        debugger
      }
    })
  },

  bindGetMsg(e){
    debugger
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