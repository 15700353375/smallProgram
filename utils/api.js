

const host = 'http://t.yushu.im/v2/movie/';//这个是你们的接口域名
const api = {
  // 获取首页列表信息
  indexListUrl: host + 'in_theaters',
  // 获取验证码
  getCode: host + 'getCode',
  // 登录
  login: host + 'login',

}

module.exports = api;