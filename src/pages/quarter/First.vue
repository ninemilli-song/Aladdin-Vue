<!-- first_page -->
<template>
  <div class="first_page">
    <div class="banner">
      <div class="cloth" @click="clothHandle"></div>
      <div class="logo flex bounceIn animated"><img :src="logoImg" alt=""></div>
      <div class="logo_name  animated fadeInLeft">{{companyname}}</div>
      <div class="title animated fadeInRight">{{title}}</div>
    </div>
    <section class="floor_first">
      <div class="chart_title flex">
        <span class="flex">业绩总览</span>
        <i></i>
      </div>
      <div class="floor_1">
        <div class="info-descript">
          {{
            yjzl.title || ''
          }}
        </div>
        <ul class="flex info-block">
          <li class="floor_1_main_1">
            <p class="name"></p>
            <div class="number">
              <h5></h5>
              <span>亿</span>
            </div>
            <p class="growth"></p>
          </li>
          <li class="floor_1_main_2">
            <p class="name"></p>
            <div class="number">
              <h5></h5>
              <span>亿</span>
            </div>
            <p class="growth"></p>
          </li>
          <li class="floor_1_main_3">
            <p class="name"></p>
            <div class="number">
              <h5></h5>
              <span>亿</span>
            </div>
            <p class="growth"></p>
          </li>
        </ul>
        <ul class="flex info-block">
          <li class="floor_1_main_4">
            <p class="name"></p>
            <div class="number">
              <h5></h5>
              <span>亿</span>
            </div>
            <p class="growth"></p>
          </li>
          <li class="floor_1_main_5">
            <p class="name"></p>
            <div class="number">
              <h5></h5>
              <span>亿</span>
            </div>
            <p class="growth"></p>
          </li>
          <li class="floor_1_main_6">
            <p class="name"></p>
            <div class="number">
              <h5></h5>
              <span>亿</span>
            </div>
            <p class="growth"></p>
          </li>
        </ul>
        <div class="flex pb-pe">
          <div class="pb">
            <p class="name">每股净资产</p>
            <div class="number">
              <h5>
                {{ yjzl.assets }}
              </h5>
              <span>元/股</span>
            </div>
          </div>
          <div class="pe">
            <p class="name">每股收益</p>
            <div class="number">
              <h5>
                {{ yjzl.pershare }}
              </h5>
              <span>元/股</span>
            </div>
          </div>
        </div>
        <ul class="flex contrast">
          <li v-for="item in yjzl.contrast " :key="item.id" class="contrast-block">
            <div class="rect">
              <p class="describe">
              {{ item.describe }}
              </p>
              <p class="spot" v-if="item.describe === '下降'">
                <span class="number">
                  {{ `${Math.abs(new Number(item.spot).toFixed(2))}` }}
                </span>
                <span>
                  个百分点
                </span>
              </p>
              <p class="spot" v-else>
                <span class="number" v-bind:style="{ color: 'red'}">
                  {{ `${Math.abs(new Number(item.spot).toFixed(2))}` }}
                </span>
                <span>
                  个百分点
                </span>
              </p>
            </div>
            <div class="circle">
              <h5>
              {{ `${item.num}%` }}
              </h5>
              <p class="name">
                {{ item.name }}
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div class="floor_perfomance" v-for="item in performance" :key="item.id">
        <div class="fjdyj-title">
          {{ item.title }}
        </div>
        <ul class="flex discrption">
          <li class="floor_1_main_sr">
            <h5>{{ `${item.profit}万` }}</h5>
            <i></i>
            <p>净利润</p>
          </li>
          <li class="floor_1_main_lr">
            <h5>{{ `${item.year}` }}</h5>
            <i></i>
            <p>同比增长</p>
          </li>
        </ul>
      </div>

    </section>

    <section class="floor_second" v-if="(fhps.bonus_this_year && fhps.bonus_this_year.length > 0) || (fhps.bonus_last_year && fhps.bonus_last_year.length > 0)">
      <div class="chart_title flex">
        <span class="flex">分红配送</span>
        <i></i>
      </div>
      <div class="floor_2 floor_2_2">
        <div class="flex now">
          <div class="bonus" v-for="item in fhps.bonus_this_year" :key="item.id">
            <span v-html="item"></span>
          </div>
        </div>
        <div class="past">
          <p>往年分红送配：</p>
          <p v-for="item in fhps.bonus_last_year" :key="item.id">
            {{ item }}
          </p>
        </div>
      </div>
    </section>

    <section class="floor_third">
      <div class="chart_title flex">
        <span class="flex">业绩变化情况</span>
        <i></i>
      </div>

      <div class="floor_2 floor_2_2_chart">
        <div class="floor_2_main" id="floor2_1_chart"></div>
      </div>

      <div class="fjdyj-title">
        分季度业绩
      </div>
      <div class="floor_2">
        <div class="floor_2_main" id="floor2_2_chart"></div>
      </div>
    </section>

    <section class="floor_forth">
      <div class="chart_title flex">
        <span class="flex">公司业务情况</span>
        <i></i>
      </div>
      <div class="business-info">
      </div>
      <div v-for="(value, key) in composition" :key="key">
        <div v-if="key === 'industry'" class="fjdyj-title">
          分行业
        </div>
        <div v-else-if="key === 'product'" class="fjdyj-title">
          分产品
        </div>
        <div v-else-if="key === 'region'" class="fjdyj-title">
          分地区
        </div>
        <div v-for="(item, index) in value" :key="item.id" class="floor_3 floor_3_1">
          <div class="floor_3_main" :id="'floor3_1_chart_' + key + '_' + index"></div>
        </div>
      </div>
    </section>

    <section class="floor_fifth">
      <div class="chart_title flex">
        <span class="flex">主要账务指标</span>
        <i></i>
      </div>
      <div class="finance-info tabs">
        <ly-tab
          v-model="selectedFinanceTab"
          :items="financeTabs"
          @change="onFinanceChanged"
          :options="tabOptions">
        </ly-tab>
      </div>
      <div class="floor">
        <div class="floor_4_main" id="floor4_1_chart"></div>
      </div>
    </section>

    <section class="floor_sixth">
      <div class="chart_title flex">
        <span class="flex">股东情况</span>
        <i></i>
      </div>
      <div class="finance-info tabs">
        <ly-tab
          v-model="selectedShareholderTab"
          :items="shareholderTabs"
          @change="onShareholderChanged"
          :options="tabOptions">
        </ly-tab>
      </div>
      <div class="floor_3 floor_3_1">
        <ul class="floor_3_table" v-if="floor3_2_table_grid_data">
          <li class="flex">
            <span>股东名称</span>
            <span>占总股 比例(%)</span>
          </li>
          <li v-for="(item, index) in floor3_2_table_grid_data" :key="index" class="flex">
            <span>{{item.stock_name}}</span>
            <span>{{item.shareholder_prop}}</span>
          </li>
        </ul>

      </div>
    </section>

    <section class="floor_contrast">
      <div class="chart_title flex">
        <span class="flex">同业业绩对比</span>
        <i></i>
      </div>
      <div class="contrast-info tabs">
        <ly-tab
          v-model="selectedContrastTab"
          :items="financeTabs"
          @change="onContracstChanged"
          :options="tabOptions">
        </ly-tab>
      </div>
      <div class="floor">
        <div class="floor_5_main" id="floor5_chart"></div>
      </div>
    </section>

    <section class="floor_management" v-if="management">
      <div class="chart_title flex">
        <span class="flex">经营计划</span>
        <i></i>
      </div>
      <div class="floor_text">
        <p>{{ management }}</p>
      </div>
    </section>
    <section class="floor_strategy" v-if="strategy">
      <div class="chart_title flex">
        <span class="flex">发展战略</span>
        <i></i>
      </div>
      <div class="floor_text">
        <p>{{ strategy }}</p>
      </div>
    </section>
    <section class="floor_seventh">
      <img src="../../static/images/img_advertising.png" alt="">
    </section>
  </div>
</template>

<script>
import echarts from "echarts";
import {
    COMPANYINFO,
    YJZLINFO,
    FHPSINFO,
  JYZKINFO,
  JYZKDJDINFO,
  MLLINFO,
  MGSYINFO,
  FYINFO,
  JYXJLINFO,
  YJBHINFO,
  FJDYJINFO,
  PIE,
  YJYGINFO,
  CGGSINFO,
  GGBDINFO,
  BUSINESSINFO,
  COMPOSITION,
  FINANCE,
  CONTRAST,
  STRATEGY,
  MANAGEMENT,
  CIRCULATION,
  PERFORMANCE
} from "../../api/quarter";
import $ from "jquery";
import CHARTDATA from "../../utils/chartData.js";
import { eventHandle } from "../../utils/utils.js";
export default {
  data() {
    return {
      logoImg: "",
      companyname: "",
      title: "",
      floor3_2_table: {},
      floor3_2_table_grid_data: [],
      yjzl: {}, // 业绩总览
      fhps: {}, // 分红配送
      businessInfo: "", // 公司业务情况
      composition: {}, // 主营构成
      finance: {}, // 主要财务指标
      contrast: {}, // 同业业绩对比
      strategy: "", // 发展战略
      management: "", // 经营计划
      financeTabs: [
        {
          label: "销售毛利率",
          value: "rate"
        },
        {
          label: "净资产收益率",
          value: "profit"
        },
        {
          value: "mgjzc",
          label: "每股净资产"
        },
        {
          value: "jbmgsy",
          label: "每股收益"
        },
        {
          value: "mgjyxjl",
          label: "每股经营性现金流"
        },
        {
          value: "total_assets",
          label: "总资产"
        },
        {
          value: "total_equity",
          label: "净资产"
        },
        {
          value: "monetary_resources",
          label: "货币资金"
        },
        {
          value: "goods_in_stock",
          label: "存货"
        },
        {
          value: "totalcost",
          label: "费用总计"
        }
      ],
      selectedFinanceTab: 0,
      tabOptions: {
        activeColor: "#fff",
        lineWidth: 0
      },
      shareholderTabs: [
        {
          label: "新进股东",
          value: "increase"
        },
        {
          label: "增持股东",
          value: "progress"
        },
        {
          value: "reduce",
          label: "减持股东"
        },
        {
          value: "exit",
          label: "退出股东"
        }
      ],
      selectedShareholderTab: 0,
      selectedContrastTab: 0,
      performance: []
    };
  },
  components: {},
  computed: {},
  mounted() {
    this.getCompanyInfo();
    // this.floor1_3_chart();
    this.floor2_1_chart();
    this.floor2_2_chart();
    this.floor3_1_chart();
    this.getYjzlInfo();
    this.getFhpsInfo();
    this.getBusinessInfo();
    this.getComposition();
    this.getFinance();
    this.getContrast();
    this.getStrategy();
    this.getManagement();
    this.getProformance();
  },
  updated() {
    this.renderComposition();
  },
  methods: {
    cgHandle() {
      eventHandle(".cg_btn", ".cg_text");
    },
    ggHandle() {
      eventHandle(".gg_btn", ".gg_text");
    },
    //公司信息
    async getCompanyInfo() {
      let COMPANYINFORES = await COMPANYINFO();
      // console.log(COMPANYINFORES);
      if (COMPANYINFORES.code == 1) {
        this.logoImg = COMPANYINFORES.result.img;
        this.companyname = COMPANYINFORES.result.name;
        this.title = COMPANYINFORES.result.title;
      }
    },

    //换肤
    clothHandle() {
      this.$router.push({ name: "Second" });
    },

    /**
     * 业绩总览 数据
     */
    async getYjzlInfo() {
      const result = await YJZLINFO();
      if (result.code === 1) {
        console.log("yjzl data: ", result.result);
        this.yjzl = result.result;
        const data = result.result;

        data.list.forEach((item, index) => {
          $(`.floor_1_main_${index + 1} .name`).html(item.name);
          $(`.floor_1_main_${index + 1} .number h5`).html(item.number);

          if (item.growth > 0) {
            $(`.floor_1_main_${index + 1} .growth`).html(
              item.growth ? "+" + item.growth + "%" : "-"
            );
            $(`.floor_1_main_${index + 1} .growth`).css("color", "red");
          } else {
            $(`.floor_1_main_${index + 1} .growth`).html(
              item.growth ? item.growth + "%" : "-"
            );
          }
        });
      }
    },

    /**
     * 分红配送 数据
     */
    async getFhpsInfo() {
      const result = await FHPSINFO();
      if (result.code === 1) {
        console.log("fhps data: ", result.result);
        this.fhps = result.result;
      }
    },

    async getBusinessInfo() {
      const result = await BUSINESSINFO();
      if (result.code === 1) {
        console.log("fhps data: ", result.result);
        // this.businessInfo = result.result;
        const businessInfo = result.result;

        $(`.business-info`).html(businessInfo);
        // $(`.business-info`).html('a<br/>b');
      }
    },

    async getComposition() {
      const result = await COMPOSITION();
      if (result.code === 1) {
        console.log("getComposition data: ", result.result);

        this.composition = result.result;
      }
    },

    async getFinance() {
      const result = await FINANCE();
      if (result.code === 1) {
        console.log("getFinance data: ", result.result);

        this.finance = result.result;

        this.renderFinanceChart();
      }
    },

    onFinanceChanged(item, index) {
      console.log("onFinanceChanged data: ", item);
      this.renderFinanceChart(item.value);
    },

    renderFinanceChart(key = "rate") {
      // 画图 floor4_1_chart
      const data = this.finance[key];
      // console.log(CHYSINFORES)
      let date = [];
      let number = [];
      $.each(data, (i, item) => {
        date.push(item[0]);
        number.push(item[1]);
      });

      var myChart = echarts.init(document.getElementById("floor4_1_chart"));
      myChart.setOption(CHARTDATA.floor4_1_data);
      myChart.setOption({
        xAxis: {
          data: date
        },
        series: [
          {
            data: number,
            itemStyle: {
              normal: {
                color: "#05B2D9"
              }
            }
          }
        ]
      });
    },

    onContracstChanged(item, index) {
      console.log("onContracstChanged data: ", item);
      this.renderContracstChart(item.value);
    },

    /**
     * 同业业绩对比图表
     */
    renderContracstChart(key = "rate") {
      // 画图 floor4_1_chart
      const data = this.contrast[key].reverse();
      console.log("renderContracstChart data: ", this.contrast);
      let category = [];
      let number = [];
      $.each(data, (i, item) => {
        category.push(item.name);
        number.push(item.num);
      });

      var myChart = echarts.init(document.getElementById("floor5_chart"));
      myChart.setOption(CHARTDATA.floor5_data);
      myChart.setOption({
        yAxis: {
          axisLabel: {
            textStyle: {
              color: "#ccc"
            },
            formatter: function(value, index) {
              var num = data[index];
              if (num.rank == 0) {
                return value;
              } else {
                return num.rank + " " + value;
              }
            }
          },
          data: category
        },
        series: [
          {
            data: number,
            itemStyle: {
              normal: {
                color: function(params) {
                  if (params.dataIndex == 0) {
                    return "#f08833";
                  } else if (params.dataIndex == data.length - 1) {
                    return "#efbc02";
                  } else {
                    return "#05B2D9";
                  }
                }
              }
            }
          }
        ]
      });
    },

    /**
     * 同业业绩对比
     */
    async getContrast() {
      const result = await CONTRAST();
      if (result.code === 1) {
        console.log("getContrast data: ", result.result);

        this.contrast = result.result;

        this.renderContracstChart();
      }
    },

    /**
     * 发展战略
     */
    async getStrategy() {
      const result = await STRATEGY();
      if (result.code === 1) {
        console.log("getStrategy data: ", result.result);

        this.strategy = result.result;
      }
    },

    /**
     * 经营计划
     */
    async getManagement() {
      const result = await MANAGEMENT();
      if (result.code === 1) {
        console.log("getManagement data: ", result.result);

        this.management = result.result;
      }
    },

    async getProformance() {
      const result = await PERFORMANCE();
      if (result.code === 1) {
        console.log("getProformance data: ", result.result);

        this.performance = result.result;
      }
    },

    // 业绩变化
    async floor2_1_chart() {
      let HBZJINFORES = await YJBHINFO();

      let date = [];
      let yyzsr = [];
      let gsjlr = [];
      $.each(HBZJINFORES.result, (i, item) => {
        date.push(item.date);
        yyzsr.push(item.yyzsr);
        gsjlr.push(item.gsjlr);
      });

      let myChart = echarts.init(document.getElementById("floor2_1_chart"));
      myChart.setOption(CHARTDATA.floor2_1_data);
      myChart.setOption({
        title: {
          text: "单位（亿元）",
          right: "0",
          textStyle: {
            color: "#fff",
            fontSize: 14
          }
        },
        xAxis: {
          data: date
        },
        series: [
          {
            data: yyzsr,
            itemStyle: {
              normal: {
                color: "#05B2D9"
              }
            }
          },
          {
            data: gsjlr,
            itemStyle: {
              normal: {
                color: "#F08833"
              }
            }
          }
        ]
      });
    },

    // 分季度业绩
    async floor2_2_chart() {
      let CHYSINFORES = await FJDYJINFO();
      // console.log(CHYSINFORES)
      let date = ["一季度", "二季度", "三季度", "四季度"];
      let yyzsr = [];
      let gsjlr = [];
      $.each(CHYSINFORES.result, (i, item) => {
        // date.push(item.date);
        yyzsr.push(item.yyzsr);
        gsjlr.push(item.gsjlr);
      });
      var myChart = echarts.init(document.getElementById("floor2_2_chart"));
      myChart.setOption(CHARTDATA.floor2_2_data);
      myChart.setOption({
        title: {
          text: "单位（亿元）",
          right: "0",
          textStyle: {
            color: "#fff",
            fontSize: 14
          }
        },
        xAxis: {
          data: date
        },
        series: [
          {
            data: yyzsr,
            itemStyle: {
              normal: {
                color: "#05B2D9"
              }
            }
          },
          {
            data: gsjlr,
            itemStyle: {
              normal: {
                color: "#F08833"
              }
            }
          }
        ]
      });
    },

    // 股东
    async floor3_1_chart() {
      let result = await CIRCULATION();

      if (result.code === 1) {
        console.log("floor3_1_chart data: ", result.result);

        this.floor3_2_table = result.result;

        const key = this.shareholderTabs[this.selectedShareholderTab].value;

        this.floor3_2_table_grid_data = this.floor3_2_table[key];
      }
    },

    onShareholderChanged(item, index) {
      const key = item.value;

      this.floor3_2_table_grid_data = this.floor3_2_table[key];
    },

    /**
     * 渲染年报主营构成
     */
    renderComposition() {
      console.log("renderComposition data: ", this.composition);

      const colorOpts = ["#0c91d1", "#05b2d9", "#f08833", "#00d9be", "#efbc02"];

      Object.keys(this.composition).forEach(key => {
        console.log(this.composition[key]);

        const compositions = this.composition[key];
        compositions.forEach((com, index) => {
          const data = [];
          let date = "";
          const legendData = [];
          $.each(com, (i, item) => {
            let tempObj = {};
            tempObj.name = item.major_composition;
            tempObj.value = item.major_income_Proportion;
            data.push(tempObj);

            date = item.date;

            legendData.push(item.major_composition);
          });

          const myChart = echarts.init(
            document.getElementById("floor3_1_chart_" + key + "_" + index)
          );
          myChart.setOption(CHARTDATA.floor3_1_data);
          myChart.setOption({
            color: colorOpts,
            title: {
              text: date,
              textStyle: {
                color: "#fff"
              },
              left: "center",
              top: "center",
              right: "center",
              bottom: "center"
            },
            series: [
              {
                data,
                label: {
                  normal: {
                    textStyle: {
                      color: "#ccc"
                    },
                    formatter: function(params, ticket, callback) {
                      var total = 0;
                      var percent = 0;
                      data.forEach(function(value, index, array) {
                        total += value.value;
                      });
                      percent = (params.value / total * 100).toFixed(1);
                      return percent + "%";
                    }
                    // padding: [0, -15]
                  }
                }
              }
            ],
            legend: {
              // type: 'scroll',
              orient: "horizontal",
              bottom: 0,
              left: "left",
              textStyle: {
                color: "#fff"
              },
              pageTextStyle: {
                color: "#fff"
              },
              data: legendData
            }
          });
        });
      });
    }
  }
};
</script>
<style lang='scss' scoped>
@import "../../styles/pages/quarter/first.scss";
</style>
