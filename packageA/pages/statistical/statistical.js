
Page({

  data: {
    classify: [
      {
        id: 0,
        name: '营业数据'
      },
      {
        id: 1,
        name: '房间状态'
      },
      {
        id: 2,
        name: '技师状态'
      }
    ],
    // 窗口高度
    winHeight: "",
    // 预设当前tab
    curTab: 0,
    

  },

  onLoad() {

  },

  swiperChange(e){
    let ind = e.detail.current;
    console.log(ind)
  },
  classifyClick(e) {
    // debugger
    console.log(e.currentTarget.dataset.type)
    this.setData({
      curTab: e.currentTarget.dataset.type
    })
  },
  onReady() {

  }
});
