//app.js
var login = require("./utils/common.js")
App({
  onLaunch: function () {
    // 判断是否是登录态  如果不是查看是否微信授权-如果未授权-授权
    // 如果授权了-重新绑定登录

    wx.setStorage({
      key: 'userInfo',
      data: {
        name: '张三',
        desc: '牛逼飞上天'
      },
    })

    login.userLogin()

    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     // 判断是否存在sessionKey 
    //     wx.checkSession({
    //       success: function () {
    //         //存在登陆态      

    //       },
    //       fail: function () {
    //         //不存在登陆态-重新登录
    //         wx.redirectTo({
    //           url: '/pages/login/login'
    //         });
    //       }
    //     })        
    //   }
    // })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        // 已授权 
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将拿到的用户信息存入全局变量
              this.globalData.userInfo = res.userInfo;

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }else{
          // 未授权-到登录页去授权
          wx.redirectTo({
            url: '/pages/login/login'
          });
        }
      }
    })
  },


  // 全局变量
  globalData: {
    userInfo: null,
    host: 'http://qsyfw.gnway.cc:12345',
  },

  // 小程序请求封装
  requestApi(url, data, callback){
    wx.request({
      url: url,
      data: data,
      header: {
        'Content-Type': 'application/json'
      },
      success(res) {
        if(res.statusCode == 200){
          callback(null, res.data);
        }else{
          callback(res);
        }
      },
      fail(e) {
        callback(e);
      }
    })
  }
})