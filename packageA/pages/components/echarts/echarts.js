// packageA/pages/components/echarts/echarts.js
import * as echarts from '../../../ec-canvas/echarts';

let chart = null;

function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      show: true,
      text: '今日大盘',
      top: '40%',
      left: 'center',
      textStyle: {
        color: '#8392A7',
        fontWeight: 'lighter',
        fontSize: 14,
      },
      itemGap: 10,
      subtext: '￥5856545',
      subtextStyle: {
        color: '#5ab7fd',
        fontWeight: 'bold',
        fontSize: 16,
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: "{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: 'right',
      data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '其他']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['30%', '40%'],
        labelLine: {
          show: true,
          length: 10,
          length2: 8,

        },
        label: {
          normal: {
            formatter: '{b}: {per|{d}%}  ',
            rich: {
              b: {
                fontSize: 16,
                lineHeight: 33
              },
              per: {
                color: '#eee',
                backgroundColor: '#334455',
                padding: [2, 2],
                borderRadius: 2
              }
            }
          }
        },
        data: [
          { value: 335, name: '直达' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 102, name: '其他' }
        ]
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

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
    ec1: {
      lazyLoad: true  /*对比拆线图*/
      // onInit: initChart,
    },

    ec2: {
      onInit: initChart,
    },

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
    // 预设当前tab
    curTab: 0,

    buyList: [
      {
        label: '免单',
        value: 3455
      },
      {
        label: '支付宝',
        value: 8954
      },
      {
        label: '微信',
        value: 6754
      },
      {
        label: '现金',
        value: 347
      },
      {
        label: '抹零',
        value: 47
      },
      {
        label: '银行卡',
        value: 347
      },
    ]
  },

  ready() {

    this.echartsComponnet = this.selectComponent('#mychart-dom-bar1');
    this.getData(); //获取数据

    this.setData({
      ec1: {
        onInit: initChart,
      }
    })

    let num = this.data.buyList.length % 4;
    if (num) {
      let list = this.data.buyList;
      for (var i = 0; i < num; i++) {
        list.push({
          label: '',
          value: ''
        })
      }
      this.setData({
        buyList: list
      })

    }
    console.log(num)

  },

  /**
   * 组件的方法列表
   */
  methods: {

    getData: function () {

      this.init_echarts();//初始化图表
      
      /**
       * 此处的操作：
       * 获取数据json
       */
      // wx.request({
      //   url: url, //仅为示例，并非真实的接口地址
      //   data: data,
      //   method: 'POST',
      //   header: { 'content-type': 'application/x-www-form-urlencoded' },
      //   success: (res) => {
      //     dataList = res.data;
      //     this.init_echarts();//初始化图表
      //   }
      // });
    },

    init_echarts: function () {
      this.echartsComponnet.init((canvas, width, height) => {
        
        chart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(chart);

        var option = {
          title: {
            show: true,
            text: '今日大盘',
            top: '40%',
            left: 'center',
            textStyle: {
              color: '#8392A7',
              fontWeight: 'lighter',
              fontSize: 14,
            },
            itemGap: 10,
            subtext: '￥5856545',
            subtextStyle: {
              color: '#5ab7fd',
              fontWeight: 'bold',
              fontSize: 16,
            },
          },
          tooltip: {
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            x: 'right',
            data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '其他']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['30%', '40%'],
              labelLine: {
                show: true,
                length: 10,
                length2: 8,

              },
              label: {
                normal: {
                  formatter: '{b}: {per|{d}%}  ',
                  rich: {
                    b: {
                      fontSize: 16,
                      lineHeight: 33
                    },
                    per: {
                      color: '#eee',
                      backgroundColor: '#334455',
                      padding: [2, 2],
                      borderRadius: 2
                    }
                  }
                }
              },
              data: [
                { value: 335, name: '直达' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 102, name: '其他' }
              ]
            }
          ]
        };

        chart.setOption(option);
        return chart;


        // // 初始化图表
        // const Chart = echarts.init(canvas, null, {
        //   width: width,
        //   height: height
        // });
        // Chart.setOption(this.getOption());
        // // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        // return Chart;
      });
    },

    classifyClick(e) {
      this.setData({
        curTab: e.currentTarget.dataset.type
      })

      var myEventDetail = { curTab: this.data.curTab } // detail对象，提供给事件监听函数
      this.triggerEvent('myevent', myEventDetail) //myevent自定义名称事件，父组件中使用
    },

  }
})
