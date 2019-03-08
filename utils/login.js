import API from "./api.js";
// const app = getApp()
function userLogin(app) {
  // 判断本地是否存在sessionId
  var sessionId = wx.getStorageSync('SESSIONID')

  // sessionId = '58e6cdd7e4484df5952e2a7aa546346b'
  // console.log("取得 SESSIONID : " + sessionId)
  if (sessionId) {
    app.globalData.sessionId = sessionId
    wx.checkSession({
      success: res => {
        // session_key 未过期，并且在本生命周期一直有效
        //但后台可能过期，也可能没有绑定用户.所以要去后台检查
        app.requestApi(API.check3rdSession, { sessionId: sessionId }, (res) => {
          console.log(res)
          if (res) {
              // console.log("后台没过期")
            if (res.isBindUser === false) {
                console.log("wxLogin:需要绑定用户 need todo去绑定用户手机画面")
                wx.redirectTo({
                  url: '/pages/login/login'
                });
            } else {
              console.log('index')
                // 已绑定
              wx.switchTab({
                  url: '/pages/index/index'
              });              
            }
          }
        })
      },
      fail: res => {
        // session_key 已经失效，需要重新执行授权登录流程
        wx.redirectTo({
          url: '/pages/authorization/authorization'
        });
      }
    })
  } else {
    // 不存在
    doLogin(app)
  }
}

function doLogin(app) {
  // 登录
  wx.login({
    success: res => {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      if (res.code) {
        // 后台登录
        app.requestApi(API.login, { code: res.code}, (res) => {
          console.log(res)
          if(res){
            console.log("登录成功")
            wx.setStorageSync('SESSIONID', res.sessionId)
            app.globalData.sessionId = res.sessionId
            // 未绑定
            if (res.isBindUser === false) {
              console.log("wxLogin:需要绑定用户 need todo去绑定用户手机画面")
              wx.redirectTo({
                url: '/pages/authorization/authorization'
              });
            } else {
              // 已绑定
              wx.switchTab({
                url: '/pages/index/index'
              });
            }
          }
        })

      } else {
        wx.showToast({
          title: '登录失败,请退出重试',
          icon: 'none',
          duration: 2000
        })
      }
    }
  })
}


module.exports = {
  userLogin: userLogin
}