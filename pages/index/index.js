
var common = require("../../utils/common.js")
//获取应用实例
const app = getApp()
//引入接口api文件
import API from "../../utils/api.js";
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
    // debugger
    // // 检测是否登录
    // common.userLogin()
    



    this.getList();
  },


  getList: function(e) {
    let that = this;

    app.requestApi(API.indexListUrl, {}, (err, data) => {
      console.log(data)
      console.log(data.subjects);
      that.setData({
        alllist: data.subjects
      })
    })

    // 豆瓣电影
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
      url: '/pages/statistical/statistical',
    })
  }
})
