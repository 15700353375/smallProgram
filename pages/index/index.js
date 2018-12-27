
var common = require("../../utils/common.js")
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
    // debugger
    // // 检测是否登录
    // common.userLogin()
    



    console.log(indexList)
    this.getList();
  },


  getList: function(e) {
    let that = this;

    // 豆瓣电影
    wx.request({
      url: 'http://t.yushu.im/v2/movie/in_theaters',
      data: {},
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        console.log(res.data.subjects);
        that.setData({
          alllist: res.data.subjects
        })
      },
    });  

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
