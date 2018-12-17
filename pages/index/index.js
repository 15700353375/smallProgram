//index.js
//获取应用实例
const app = getApp()
// import indexList from "../../mock/index-list.json"
Page({
  data: {
    list: [
      {
        title: '我是标题'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // console.log(indexList)
    this.getList();
  },
  getList: function(e) {
    wx.request({
      url: '../../mock/index-list.json',
      success: (res)=>{
        debugger
      }
    })
  }
})
