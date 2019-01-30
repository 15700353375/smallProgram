
//获取应用实例
const app = getApp()
//引入接口api文件
import API from "../../utils/api.js";
Page({
  data: {
    alllist: [],
  },


  onLoad: function () {
    // if (app.globalData.sessionId){
      this.getList();
    // }
  },


  getList: function(e) {
    let that = this;

    // 后台登录
    app.requestApi(API.indexListUrl, { sessionId: app.globalData.sessionId }, (res) => {
      console.log(res)
      if (res) {
        that.setData({
        alllist: res
      })
      }
    })

    // app.requestApi(API.indexListUrl, {}, (err, data) => {
    //   console.log(data)
    //   console.log(data.subjects);
    //   that.setData({
    //     alllist: data.subjects
    //   })
    // })

    // 豆瓣电影
    // wx.request({
    //   url: 'https://api.douban.com/v2/movie/in_theaters',
    //   method: 'GET',
    //   header: { 'content-type': 'application/xml' },
    //   success: (res)=>{
    //     debugger
    //   //     console.log(data)
    //   // console.log(data.subjects);
    //   // that.setData({
    //   //   alllist: data.subjects
    //   // })
      
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
    let current = e.currentTarget.dataset.current
    current['sessionId'] = app.globalData.sessionId;
    wx.navigateTo({
      url: '/pages/statistical/statistical?current=' + JSON.stringify(current),
    })
  }
})
