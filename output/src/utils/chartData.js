const CHARTDATA = {
  floor1_1_data: {
    grid: {
      x: 60,
      y: 60,
      x2: 20,
      y2: 30
    },
    toolbox: {
      show: true,
      itemSize:18,
      feature: {
        magicType: {
          show: true,
          type: ["line", "bar"],
          iconStyle: {
            borderColor: "#fff"
          }
        }
      }
    },
    legend: {
      show: true,
      data: ["营业收入（万元）", "扣非净利润（万元）"],
      icon: "square",
      itemWidth: 12,
      itemHeight: 12,
      left: "0",
      top: "3",
      textStyle: {
        color: "#fff"
      }
    },
    xAxis: {
      data: [],
      type: "category",
      axisLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      },
      splitLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      }
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      },
      splitLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      }
    },
    series: [
      {
        name: "营业收入（万元）",
        type: "bar",
        barWidth: 20,
        data: [],
        color: "",
        label: {
          normal: {
            show: true,
            position: "top"
          }
        },
        barGap: "80%"
      },
      {
        name: "扣非净利润（万元）",
        type: "bar",
        barWidth: 20,
        data: [],
        color: "",
        label: {
          normal: {
            show: true,
            position: "top"
          }
        }
      }
    ],
    label: {
      normal: {
        show: true,
        textStyle: {
          color: "#ff5b63"
        }
      }
    }
  },
  floor1_2_data: {
    grid: {
      x: 60,
      y: 60,
      x2: 20,
      y2: 30
    },
    toolbox: {
      show: true,
      itemSize: 18,
      feature: {
        magicType: {
          show: true,
          type: ["line", "bar"],
          iconStyle: {
            borderColor: "#fff"
          }
        }
      }
    },
    legend: {
      show: true,
      data: ["单季营业收入 (万元)", "单季扣非净利润 (万元)"],
      icon: "square",
      itemWidth: 12,
      itemHeight: 12,
      left: "0",
      top: "3",
      textStyle: {
        color: "#fff"
      }
    },
    xAxis: {
      // data: ["2016-09-30", "2016-12-30", "2017-03-30", "2017-06-30"],
      data: [],
      type: "category",
      axisLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      },
      splitLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      }
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      },
      splitLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      }
    },
    series: [
      {
        name: "单季营业收入 (万元)",
        type: "bar",
        barWidth: 20,
        // data: [63000, 52000, 63100, 69900],
        data: [],
        color: "",
        label: {
          normal: {
            show: true,
            position: "top"
          }
        }
      },
      {
        name: "单季扣非净利润 (万元)",
        type: "bar",
        barWidth: 20,
        // data: [-3125, -29555, -2454, 2000],
        data: [],
        color: "",
        label: {
          normal: {
            show: true,
            position: "top"
          }
        }
      }
    ],
    label: {
      normal: {
        show: true,
        textStyle: {
          color: ""
        }
      }
    }
  },
  floor1_3_data: {
    grid: {
      x: 60,
      y: 60,
      x2: 35,
      y2: 30
    },
    title: {
      text: "毛利率变化图",
      textStyle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "200"
      }
    },
    toolbox: {
      show: true,
      itemSize: 18,
      feature: {
        magicType: {
          show: true,
          type: ["line", "bar"],
          iconStyle: {
            borderColor: "#fff"
          }
        }
      }
    },
    legend: {
      show: true,
      data: ["单季营业收入 (万元)", "单季扣非净利润 (万元)"],
      icon: "square",
      itemWidth: 12,
      itemHeight: 12,
      left: "0",
      top: "3",
      textStyle: {
        color: "#fff"
      }
    },
    xAxis: {
      // data: ["2015-06-30", "2016-06-30", "2017-06-30"],
      data: [],
      type: "category",
      axisLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      },
      splitLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      }
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      },
      splitLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      },
      // min: 7.54,
      // max: 6.69
      min: null,
      max: null
    },
    series: [
      {
        name: "毛利率",
        type: "line",
        barWidth: 18,
        itemStyle: {
          normal: {
            label: {
              show: true,
              formatter: "{c}%"
            },
            color: ""
          }
        },
        // data: ["6.69", "7.54", "7.41"]
        data: []
      }
    ],
    label: {
      normal: {
        show: true,
        textStyle: {
          color: "#ff5b63"
        }
      }
    }
  },
  floor1_4_data: {
    grid: {
      x: 60,
      y: 60,
      x2: 35,
      y2: 30
    },
    title: {
      text: "每股收益变化图 (元)",
      textStyle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "200"
      }
    },
    toolbox: {
      show: true,
      itemSize: 18,
      feature: {
        magicType: {
          show: true,
          type: ["line", "bar"],
          iconStyle: {
            borderColor: "#fff"
          }
        }
      }
    },
    legend: {
      show: true,
      data: ["单季营业收入 (万元)", "单季扣非净利润 (万元)"],
      icon: "square",
      itemWidth: 12,
      itemHeight: 12,
      left: "0",
      top: "3",
      textStyle: {
        color: "#fff"
      }
    },
    xAxis: {
      // data: ["2015-06-30", "2016-06-30", "2017-06-30"],
      data: [],
      type: "category",
      axisLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      },
      splitLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      }
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      },
      splitLine: {
        lineStyle: {
          color: "#fff",
          opacity: 0.1
        }
      },
      min: -0.1,
      max: 0
    },
    series: [
      {
        name: "毛利率",
        type: "line",
        barWidth: 18,
        itemStyle: {
          normal: {
            label: {
              show: true,
              formatter: "{c}"
            },
            color: ""
          }
        }
        // data: [-0.09, -0.06, -0.02]
      }
    ],
    label: {
      normal: {
        show: true,
        textStyle: {
          color: "#ff5b63"
        }
      }
    }
  },
  floor1_5_data: {
    grid: {
      x: 60,
      y: 60,
      x2: 20,
      y2: 30
    },
    title: {
      text: "费用总计变化图 (万元)",
      textStyle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "200"
      }
    },
    toolbox: {
      show: true,
      itemSize: 18,
      feature: {
        magicType: {
          show: true,
          type: ["line", "bar"],
          iconStyle: {
            borderColor: "#fff"
          }
        }
      }
    },
    legend: {
      show: true,
      data: ["单季营业收入 (万元)", "单季扣非净利润 (万元)"],
      icon: "square",
      itemWidth: 12,
      itemHeight: 12,
      left: "0",
      top: "3",
      textStyle: {
        color: "#fff"
      }
    },
    xAxis: {
      // data: ["2015-06-30", "2016-06-30", "2017-06-30"],
      data: [],
      type: "category",
      axisLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      },
      splitLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      }
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      },
      splitLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      }
    },
    series: [
      {
        name: "",
        type: "bar",
        barWidth: 20,
        // data: [21833, 18699, 14346],
        data: [],
        itemStyle: {
          normal: {
            color: ""
          }
        },
        color: "#05B2D9",
        label: {
          normal: {
            show: true,
            position: "top"
          }
        }
      }
    ],
    label: {
      normal: {
        show: true,
        textStyle: {
          color: "#ff5b63"
        }
      }
    }
  },
  floor1_6_data: {
    grid: {
      x: 60,
      y: 60,
      x2: 20,
      y2: 30
    },
    title: {
      text: "经营性现金流净额变化图 (万元)",
      textStyle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "200"
      }
    },
    toolbox: {
      show: true,
      itemSize: 18,
      feature: {
        magicType: {
          show: true,
          type: ["line", "bar"],
          iconStyle: {
            borderColor: "#fff"
          }
        }
      }
    },
    legend: {
      show: true,
      data: ["单季营业收入 (万元)", "单季扣非净利润 (万元)"],
      icon: "square",
      itemWidth: 12,
      itemHeight: 12,
      left: "0",
      top: "3",
      textStyle: {
        color: "#fff"
      }
    },
    xAxis: {
      // data: ["2015-06-30", "2016-06-30", "2017-06-30"],
      data: [],
      type: "category",
      axisLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      },
      splitLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      }
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      },
      splitLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      }
    },
    series: [
      {
        name: "",
        type: "bar",
        barWidth: 20,
        // data: [-3012, 32.3, 12200],
        data: [],
        label: {
          normal: {
            show: true,
            position: "top"
          }
        },
        itemStyle: {
          normal: {
            color: ""
          }
        }
      }
    ],
    label: {
      normal: {
        show: true,
        textStyle: {
          color: "#ff5b63"
        }
      }
    }
  },
  floor2_1_data: {
    grid: {
      x: 60,
      y: 60,
      x2: 20,
      y2: 30
    },
    legend: {
      show: true,
      data: ["营业收入", "净利润"],
      icon: "square",
      itemWidth: 12,
      itemHeight: 12,
      left: "0",
      top: "3",
      textStyle: {
        color: "#fff"
      }
    },
    xAxis: {
      // data: ["2015-06-30", "2016-06-30", "2017-06-30"],
      data: [],
      type: "category",
      axisLine: {
        lineStyle: {
          color: "#ccc",
          // opacity: 0.1
        }
      },
      axisTick: {
        alignWithLabel: true,
        show: false
      }
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      },
      splitLine: {
        lineStyle: {
          color: "#ccc",
          opacity: 0.1
        }
      },
      show: false
    },
    series: [
      {
        name: "营业收入",
        type: "bar",
        barWidth: 20,
        // data: [60100, 116000, 98400],
        data: [],
        label: {
          normal: {
            show: true,
            position: "top"
          }
        }
      },
      {
        name: "净利润",
        type: "bar",
        barWidth: 20,
        data: [],
        color: "",
        label: {
          normal: {
            show: true,
            position: "top"
          }
        }
      }
    ],
    label: {
      normal: {
        show: true,
        textStyle: {
          color: "#ff5b63"
        }
      }
    }
  },
  floor2_2_data: {
    grid: {
      x: 60,
      y: 60,
      x2: 20,
      y2: 30
    },
    legend: {
      show: true,
      data: ["营业收入", "净利润"],
      icon: "square",
      itemWidth: 12,
      itemHeight: 12,
      left: "0",
      top: "3",
      textStyle: {
        color: "#fff"
      }
    },
    xAxis: {
      // data: ["2015-06-30", "2016-06-30", "2017-06-30"],
      data: [],
      type: "category",
      axisLine: {
        lineStyle: {
          color: "#ccc",
          // opacity: 0.1
        }
      },
      splitLine: {
        lineStyle: {
          color: "#ccc",
          // opacity: 0.1
        }
      },
      axisTick: {
        alignWithLabel: true,
        show: false
      }
    },
    yAxis: {
      type: "value",
      axisLine: {
        lineStyle: {
          color: "#ccc",
          // opacity: 0.1
        },
      },
      splitLine: {
        lineStyle: {
          color: "#ccc",
          // opacity: 0.1
        }
      }
    },
    series: [
      {
        name: "营业收入",
        type: "bar",
        barWidth: 20,
        // data: [32600, 29600, 23500],
        data: [],
        label: {
          normal: {
            show: true,
            position: "top"
          }
        },
        barGap: "80%"
      },
      {
        name: "净利润",
        type: "bar",
        barWidth: 20,
        // data: [31300, 34400, 27700],
        data: [],
        label: {
          normal: {
            show: true,
            position: "top"
          }
        },
        barGap: "80%"
      }
    ],
    label: {
      normal: {
        show: true,
        textStyle: {
          color: "#ff5b63"
        }
      }
    }
  },
  floor3_1_data: {
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c}"
    },
    color: [],
    calculable: true,
    series: [
      {
        name: "",
        type: "pie",
        radius: ["35%", "70%"],
        
        labelLine: {
          normal: {
            lineStyle: {
                color: '#ccc'
            }
          }
        },
        itemStyle: {
          emphasis: {
            label: {
              show: true,
              textStyle: {
                fontSize: "12"
              }
            }
          }
        },
        // data: [
        //   {
        //     value: 47.35,
        //     name: "漯河银鸽实业集团有限公司"
        //   },
        //   {
        //     value: 3,
        //     name: "永城煤电控股集团上海有限公司"
        //   },
        //   {
        //     value: 2.55,
        //     name: "北京兆泓兴源投资管理有限公司兆泓价值"
        //   },
        //   {
        //     value: 1.23,
        //     name: "漯河市发展投资有限责任公司"
        //   },
        //   {
        //     value: 0.67,
        //     name: "黄毅明"
        //   },
        //   {
        //     value: 0.64,
        //     name: "刘赓"
        //   },
        //   {
        //     value: 0.37,
        //     name: "徐阳英"
        //   },
        //   {
        //     value: 0.36,
        //     name: "卓国章"
        //   },
        //   {
        //     value: 0.32,
        //     name: "上海睿桓投资有限 公司"
        //   },
        //   {
        //     value: 0.31,
        //     name: "毛东明"
        //   }
        // ]
        data: []
      }
    ],
    legend: {
      orient: "vertical",
      x: "left",
      icon: "circle",
      data: []
    },
    toolbox: {
      show: true
    },
    calculable: true
  },
  floor4_1_data: {
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      // data: ["2015-06-30", "2016-06-30", "2017-06-30"],
      data: [],
      type: "category",
      axisLine: {
        lineStyle: {
          color: "#ccc",
        }
      },
      axisTick: {
        alignWithLabel: true,
        show: false
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        show: false
      },
      axisLine: {
          show: false
      },
      axisTick: {
          show: false
      },
      splitLine: {
        color: "#ccc",
        show: true
      }
    },
    series: [
      {
        name: "营业收入",
        type: "bar",
        barWidth: 20,
        // data: [32600, 29600, 23500],
        data: [],
        label: {
          normal: {
            show: true,
            position: "top"
          }
        },
        barGap: "80%"
      },
    ],
    label: {
      normal: {
        show: true,
        textStyle: {
          color: "#ff5b63"
        }
      }
    }
  },
  floor5_data: {
    "title": {
      "textStyle": {
          "color": "#bcbfff",
          "fontWeight": "bold",
          "fontSize": 14
      },
      "top": "4%",
      "left": "2.2%"
    },
    grid: {
      "left": "3%",
      "right": "10%",
      "bottom": "3%",
      "top": "0px",
      "containLabel": true
    },
    "xAxis": [{
      "type": "value",
      "axisLine": {
          "show": false
      },
      "axisTick": {
          "show": false
      },
      "axisLabel": {
          "show": false
      },
      "splitLine": {
          "show": false
      }
    }],
    yAxis: {
      data: [],
      type: "category",
      axisLine: {
        "show": false
      },
      "axisTick": {
        "show": false,
        "alignWithLabel": true
      }
    },
    series: [
      {
        type: "bar",
        barWidth: 20,
        // data: [32600, 29600, 23500],
        data: [],
        "barCategoryGap": "55%",
        "label": {
          "normal": {
              "show": true,
              "position": "right",
              "formatter": function(params) {
                  return params.data.name;
              },
              "textStyle": {
                  "color": "#B4B2C5" //color of value
              }
          }
        }
      }
    ]
  }
};

export default CHARTDATA;
