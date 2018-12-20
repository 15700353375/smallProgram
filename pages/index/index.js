// import * as echarts from '../../../ec-canvas/echarts';
//index.js
//获取应用实例
const app = getApp()
// import indexList from "../../mock/index-list.json"
const indexList = require("../../mock/index-list.js")
Page({
  data: {
    alllist: [],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log(indexList)
    this.getList();
  },
  getList: function(e) {
    this.setData({
      alllist: indexList.mtData
    })
    // wx.request({
    //   url: '../../mock/index-list.json',
    //   success: (res)=>{
    //     debugger
    //   }
    // })
  },
  call(e){
    let phone = e.currentTarget.dataset.phone    
    console.log(phone)
    wx.makePhoneCall({
      phoneNumber: phone,
    })
  },
  goStatistical(e){
    wx.navigateTo({
      url: '/packageA/pages/statistical/statistical',
    })
  }
})
