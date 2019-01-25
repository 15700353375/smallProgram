//用户登陆
function userLogin() {
  wx.checkSession({
    success: function () {
      //存在登陆态   
      onLogin()   
    },
    fail: function () {
      //不存在登陆态
      onLogin()
    }
  })
}

function onLogin() {
  wx.login({
    success: function (res) {
      if (res.code) {
        //发起网络请求
        wx.request({
          url: 'http://qsyfw.gnway.cc:12345/wechatMini/wxLogin',
          method: 'POST',
          data: {
            code: res.code
          },
          success: function (res) {
            debugger
            // { "code": 1, "msg": "成功", "data": { "isBindUser": true, "sessionId": "58e6cdd7e4484df5952e2a7aa546346b" }, "sysNowMilliseconds": 0 }
            const self = this
            if (res.code == 1) {
              //获取到用户凭证 存儲 3rd_session   后续进入小程序就先从storage里面读取。读取成功-进入小程序-请求后台判断是否过期 - 过期 - 重新绑定
              // if (res.data.isBindUser === false) {
              //   console.log("check3rdSession:需要绑定用户 need todo去绑定用户手机画面")
              //   bindUser(curApp, '12345678901', '588')
              // } else {
              //   getStoreList(curApp)
              // }
              // return
              // var json = JSON.parse(res.data)
              // wx.setStorage({
              //   key: "third_Session",
              //   data: json.sessionId
              // })
              // getUserInfo()
            }
            else {

            }
          },
          fail: function (res) {

          }
        })
      }
    },
    fail: function (res) {

    }
  })
}

function getUserInfo() {
  wx.getUserInfo({
    success: function (res) {
      var userInfo = res.userInfo
      userInfoSetInSQL(userInfo)
    },
    fail: function () {
      userAccess()
    }
  })
}

function userInfoSetInSQL(userInfo) {
  wx.getStorage({
    key: 'third_Session',
    success: function (res) {
      wx.request({
        url: 'Our Server ApiUrl',
        data: {
          third_Session: res.data,
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl,
          gender: userInfo.gender,
          province: userInfo.province,
          city: userInfo.city,
          country: userInfo.country
        },
        success: function (res) {
          if (逻辑成功) {
            //SQL更新用户数据成功
          }
          else {
            //SQL更新用户数据失败
          }
        }
      })
    }
  })
}


module.exports = {
  userLogin: userLogin
}
