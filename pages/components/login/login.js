// pages/components/login/login.js
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
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 电话号码验证
    phoneBlur(e){
      console.log(e.detail.value)
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
      console.log(e)
      // let reg_phone = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      let phone = this.data.phone;
      // if (!reg_phone.test(phone)) {
      //   wx.showToast({
      //     title: '输入正确的手机号',
      //     icon: 'none',
      //     duration: 2000
      //   })
      //   return;
      // }

      // wx.request({
      //   url: '',
      // })
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
      // wx.request({
      //   url: '',
      // })
      wx.switchTab({
        url: '/pages/index/index'
      })
    }

  }
})
