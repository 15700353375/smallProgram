
//获取应用实例
const app = getApp()
//引入接口api文件
import API from "../../utils/api.js";
Page({
  data: {
    alllist: [],
  },


  onLoad: function () {

    this.getList();
  },


  getList: function(e) {
    let that = this;

    // 后台登录
    app.requestApi(API.indexListUrl, { sessionId: app.globalData.sessionId }, (res) => {
      console.log(res)
      if (res) {
        that.setData({
        alllist: res.data
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
