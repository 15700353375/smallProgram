//app.js
var login = require("./utils/login.js")
App({
  onLaunch: function () {
    // 判断是否是登录态  如果不是查看是否微信授权-如果未授权-授权
    // 如果授权了-重新绑定登录

    login.userLogin(this)

    // 测试
    // wx.request({
    //   url: 'http://api.huixuebang.com/user-api/mlogin',
    //   data:{
    //     password: "ch12345",
    //     username: "changh"
    //   },
    //   header: {
    //     'Content-Type': 'application/json'
    //   },
    //   success(res) {

    //   },
    //   fail(e){

    //   }
    // })

    

    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     // 已授权 
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将拿到的用户信息存入全局变量
    //           this.globalData.userInfo = res.userInfo;

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }else{
    //       // 未授权-到登录页去授权
    //       wx.redirectTo({
    //         url: '/pages/login/login'
    //       });
    //     }
    //   }
    // })

  },


  // 全局变量
  globalData: {
    userInfo: null,
    host: 'http://qsyfw.gnway.cc:12345',
    sessionId: null,
  },

  // 小程序请求封装
  requestApi(url, data, callback){
    wx.request({
      url: url,
      data: data,
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      success(res) {

        if (res.statusCode == 200){
          if(res.data.code == 1){
            callback(res.data.data || true);
          } else if (res.data.code === -1) {
            // 已过期
            wx.clearStorageSync()
            login.userLogin(this)
            // wx.redirectTo({
            //   url: '/pages/login/login'
            // });
          }else{
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 2000
            })
          }
        }else{
          // callback(res);
          wx.showToast({ 
            title: '请求失败,请稍后重试',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail(e) {
        // callback(e);
        wx.showToast({
          title: '请求失败,请稍后重试2',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }
})