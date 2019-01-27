
//获取应用实例
const app = getApp()
Page({

  data: {

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
        app.globalData.userInfo = res.userInfo;
        // 切换状态-到登录
        wx.redirectTo({
          url: '/pages/login/login'
        })
      }
    })
  },

})