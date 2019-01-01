// pages/components/login/login.js

//获取应用实例
const app = getApp()
//引入接口api文件
import API from "../../../utils/api.js";
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isRightPhone: true,
    phone: '',
    countdown: 60,
    isGetCode: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 电话号码验证
    phoneBlur(e){
      let phone = e.detail.value;
      this.setData({
        phone: phone
      })
      let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (reg.test(phone)){
        this.setData({
          isRightPhone: false
        })
      }else{
        this.setData({
          isRightPhone: true
        })
      }
    },

    // 获取验证码
    getCode(e){
      let phone = this.data.phone;
      
      app.requestApi(API.getCode, {}, (err, data) => {
        if(err){
          wx.showToast({
            title: '获取验证码失败',
            icon: 'none',
            duration: 2000
          })
          return;
        }else{
          // 成功-倒计时
          this.setData({
            isGetCode: true,
            isRightPhone: true,
          })
          let countdown = this.data.countdown;
          let timer = setInterval(()=>{
            countdown--;
            this.setData({
              countdown: countdown
            })
            // 可以充下电获取验证码
            if(countdown <= 0){
              clearInterval(timer);
              this.setData({
                isRightPhone: false,
                isGetCode: false,
                countdown: 60
              })
            }
          },1000)
        }        
      })
    },

    formSubmit(e){
      let reg_code = /^[0-9]{4}$/;
      let reg_phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      let phone = e.detail.value.phone
      let code = e.detail.value.code
      if (!reg_phone.test(phone)) {
        wx.showToast({
          title: '输入正确的手机号',
          icon: 'none',
          duration: 2000
        })
        return;
      } else if (!reg_code.test(code)){
        wx.showToast({
          title: '输入正确的验证码',
          icon: 'none',
          duration: 2000
        })
        return;
      }
      this.login(phone,code);      
    },


    login(phone,code){
      app.requestApi(API.login, {}, (err, data) => {
        if(err){
          wx.showToast({
            title: '登录失败',
            icon: 'none',
            duration: 2000
          })
          return;
        }else{
          // 登录成功-拉取个人信息存在本地
          wx.setStorage({
            key: 'userInfo',
            data: {
              name: '张三',
              desc: '牛逼飞上天'
            },
          })
          wx.switchTab({
            url: '/pages/index/index'
          })
        }
      });

      
    }

  }
})
