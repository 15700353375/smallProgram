//logs.js
// const util = require('../../utils/util.js')
var wxCharts = require('../../utils/wxcharts.js');   //引入wxChart文件
var app = getApp();
var lineChart = null;
Page({

  data: {
    // tabs: [],
    // tabs: ['我已报名', '我的发布'],
    // tabs: ['吕布', '赤兔马', '方天画戟'],
    // tabs: ['昨天', '今天', '明天', '后天'],
    tabs: ['全部', '待付款', '待发货', '待收货', '待评价'],
    currentIndex: 0
  },

  touchHandler: function (e) {
    lineChart.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },


  // onLoad: function (options) {
  //   this.mytabview = this.selectComponent('#mytabview')
  //   this.setData({
  //     slotIds: this.mytabview.getSlotIds()
  //   })
  // },

  onLoad: function (e) {
    var windowWidth = '', windowHeight = '';    //定义宽高
    try {
      var res = wx.getSystemInfoSync();    //试图获取屏幕宽高数据
      windowWidth = res.windowWidth / 750 * 690;   //以设计图750为主进行比例算换
      windowHeight = res.windowWidth / 750 * 550    //以设计图750为主进行比例算换
    } catch (e) {
      console.error('getSystemInfoSync failed!');   //如果获取失败
    }
    lineChart = new wxCharts({     //定义一个wxCharts图表实例
      canvasId: 'lineCanvas',     //输入wxml中canvas的id
      type: 'line',       //图标展示的类型有:'line','pie','column','area','ring','radar'
      categories: ['2018-6-13', '2018-6-14', '2018-6-15', '2018-6-16', '2018-6-17', '2018-6-18', '2018-6-19'],    //模拟的x轴横坐标参数
      animation: true,  //是否开启动画
      series: [{   //具体坐标数据
        name: '收缩压',  //名字
        data: [60, 90, 60, 110, 120, 105, 70],  //数据点
        format: function (val, name) {  //点击显示的数据注释
          return val + 'mmHg';
        }
      }, {
        name: '舒张压',
        data: [50, 100, 80, 115, 120, 90, 125],
        format: function (val, name) {
          return val + 'mmHg';
        }
      }, {
        name: '心率',
        data: [60, 70, 90, 105, 120, 130, 95],
        format: function (val, name) {
          return val + '次/分钟';
        }
      }
      ],
      xAxis: {   //是否隐藏x轴分割线
        disableGrid: true,
      },
      yAxis: {      //y轴数据
        title: '数值',  //标题
        format: function (val) {  //返回数值
          return val.toFixed(2);
        },
        min: 30,   //最小值
        max: 180,   //最大值
        gridColor: '#D8D8D8',
      },
      width: windowWidth,  //图表展示内容宽度
      height: windowHeight,  //图表展示内容高度
      dataLabel: false,  //是否在图表上直接显示数据
      dataPointShape: true, //是否在图标上显示数据点标志
      extra: {
        lineStyle: 'curve'  //曲线
      },
    });
  },

  pageChangeEvent: function (e) {
    console.log(e)
  },

  scrolltobottomEvent: function (e) {
    console.log(e)
  }

})
