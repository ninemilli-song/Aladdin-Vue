const axios = require('axios');
const { getParameter } = require('../utils/utils');
const code = getParameter(window.location.search, "code");
const date = getParameter(window.location.search, "date");
// let url = "http://v2.dongmibang.com/api/notice";
let url = '';
// 获取公司基本信息
const COMPANYINFO = async () => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${url}/index/basic`,
      method: "POST",
      data: {
        code,
        date
      }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// 业绩总览
const YJZLINFO = async () => {
  return new Promise((resolve, reject) => {
    axios({ url: `${url}/year/overview`, method: "POST", data: { code, date } })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// 业绩总览
const FHPSINFO = async () => {
  return new Promise((resolve, reject) => {
    axios({ url: `${url}/year/bonus`, method: "POST", data: { code, date } })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//主要经营状况
const JYZKINFO = async () => {
  return new Promise((resolve, reject) => {
    axios({ url: `${url}/index/growup`, method: "POST", data: { code, date } })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//主要经营状况单季度
const JYZKDJDINFO = async () => {
  return new Promise((resolve, reject) => {
    axios({ url: `${url}/index/quarter`, method: "POST", data: { code, date } })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//毛利率
const MLLINFO = async () => {
  return new Promise((resolve, reject) => {
    axios({ url: `${url}/index/hair`, method: "POST", data: { code, date } })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//每股收益
const MGSYINFO = async () => {
  return new Promise((resolve, reject) => {
    axios({ url: `${url}/index/pershare`, method: "POST", data: { code, date } })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//费用
const FYINFO = async () => {
  return new Promise((resolve, reject) => {
    axios({ url: `${url}/index/cost`, method: "POST", data: { code, date } })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//经营现金流净额
const JYXJLINFO = async () => {
  return new Promise((resolve, reject) => {
    axios({ url: `${url}/index/cash`, method: "POST", data: { code, date } })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//货币资金
const HBZJINFO = async () => {
  return new Promise((resolve, reject) => {
    axios({ url: `${url}/index/funds`, method: "POST", data: { code, date } })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// 业绩变化情况
const YJBHINFO = async () => {
  return new Promise((resolve, reject) => {
    axios({ url: `${url}/year/change`, method: "POST", data: { code, date } })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//存货||应收账款
const CHYSINFO = async () => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${url}/index/receivable`,
      method: "POST",
      data: { code, date }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// 分季度业绩
const FJDYJINFO = async () => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${url}/year/change_quarter`,
      method: "POST",
      data: { code, date }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// 公司业务情况
const BUSINESSINFO = async () => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${url}/year/business`,
      method: "POST",
      data: { code, date }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// 年报主营构成接口
const COMPOSITION = async () => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${url}/year/composition`,
      method: "POST",
      data: { code, date }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// 主要财务指标
const FINANCE = async () => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${url}/year/finance`,
      method: "POST",
      data: { code, date }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// 同业业绩对比
const CONTRAST = async () => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${url}/year/contrast`,
      method: "POST",
      data: { code, date }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// 发展战略
const STRATEGY = async () => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${url}/year/strategy`,
      method: "POST",
      data: { code, date }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// 经营计划
const MANAGEMENT = async () => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${url}/year/management`,
      method: "POST",
      data: { code, date }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

// 股东
const CIRCULATION = async () => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${url}/year/circulation`,
      method: "POST",
      data: { code, date }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

//业绩报告
const PERFORMANCE = async () => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${url}/year/performance`,
      method: "POST",
      data: { code, date }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export {
  COMPANYINFO,
  JYZKINFO,
  JYZKDJDINFO,
  MLLINFO,
  MGSYINFO,
  FYINFO,
  JYXJLINFO,
  HBZJINFO,
  YJBHINFO,
  CHYSINFO,
  CIRCULATION,
  PIE,
  PERFORMANCE,
  YJZLINFO,
  FHPSINFO,
  FJDYJINFO,
  BUSINESSINFO,
  COMPOSITION,
  FINANCE,
  CONTRAST,
  STRATEGY,
  MANAGEMENT
};
