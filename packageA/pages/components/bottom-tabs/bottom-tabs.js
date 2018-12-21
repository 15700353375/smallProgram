// packageA/pages/components/bottom-tabs/bottom-tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    currentName: {
      type: String,
      value: 'statistical',
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

    currentType: ''

  },

  ready(){
    this.setData({
      currentType: this.properties.currentName
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

    goPages(e){
      // console.log(this.currentName);
      // debugger
      let types = e.currentTarget.dataset.type;
      let name = this.properties.currentName

      if(types == name){
        return;
      }else{
        switch(types){
          case 'statistical': return wx.navigateTo({ url: '/packageA/pages/statistical/statistical', });
          case 'report': return wx.navigateTo({ url: '/packageA/pages/report/report', });
          case 'manager': return wx.navigateTo({ url: '/packageA/pages/manager/manager', });
          case 'myself': return wx.navigateTo({ url: '/packageA/pages/myself/myself',});
        }
        
      }
    }

  }
})
