// packageA/pages/components/room/room.js
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
    selectArray: [{
      "id": "1",
      "text": "全部"
    }, {
      "id": "2",
      "text": "足疗"
      }, {
        "id": "3",
        "text": "SPA"
      },
    ],
    selectArray2: [
      {
        "id": "1",
        "text": "全部"
      }, {
        "id": "2",
        "text": "空闲"
      }, {
        "id": "3",
        "text": "忙碌"
      }, {
        "id": "4",
        "text": "未打扫"
      }, {
        "id": "5",
        "text": "已预约"
      }, {
        "id": "6",
        "text": "已买单未离开"
      },
    ],

    listData: [
      {
        id: 1,
        status: 1,
        money: 556,
        timer: 117,
        no: '036',
        restTimer: '4m',
        roomNo: 'A05',
        satusText: '空闲'
      },
      {
        id: 2,
        status: 2,
        money: 556,
        timer: 117,
        no: '036',
        restTimer: '4m',
        roomNo: 'A05',
        satusText: '已开房'
      },
      {
        id: 3,
        status: 3,
        money: 556,
        timer: 117,
        no: '036',
        restTimer: '4m',
        roomNo: 'A05',
        satusText: '已开房'
      },
      {
        id: 4,
        status: 4,
        money: 556,
        timer: 117,
        no: '036',
        restTimer: '4m',
        roomNo: 'A05',
        satusText: '已开房'
      },
      {
        id: 5,
        status: 5,
        money: 556,
        timer: 117,
        no: '036',
        restTimer: '4m',
        roomNo: 'A05',
        satusText: '已开房'
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
