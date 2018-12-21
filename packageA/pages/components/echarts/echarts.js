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
    },

    ec2: {
      onInit: initChart,
    },

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

  }
})
