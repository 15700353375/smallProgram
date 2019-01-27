

// const host = 'http://t.yushu.im/v2/movie/';//这个是你们的接口域名
const host = 'http://qsyfw.gnway.cc:12345'
const api = {
  // 获取首页列表信息
  indexListUrl: host + '/wechatMini/getStoreList',
  // 获取验证码
  getCode: host + '/wechatMini/sendSmsVer',
  // 登录
  login: host + '/wechatMini/wxLogin',
  // 检查Session是否失效
  check3rdSession: host + '/wechatMini/check3rdSession',
  // 绑定用户
  bindUser: host + '/wechatMini/bindUserPhone',

}

module.exports = api;