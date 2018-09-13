import $ from 'jquery';
/**
 * 截取url中的参数
 * @param {*} str
 * @param {*} param
 */
const getParameter = (str, param) => {
    let result = '';
    // let query = "&" + window.location.search.substr(1);
    let query = `&${str.substr(1)}`;
    let chk = query.indexOf(`&${param}=`);
    if (chk >= 0) {
        let start = chk + param.length + 2;
        let end = query.indexOf('&', start);
        result = end < 0 ? query.substring(start) : query.substring(start, end);
    }
    return result;
};

// 展开全部
const eventHandle = (dom1, dom2) => {
    $(dom2).css({
        height: 'auto'
    });
    $(dom1).hide();
};

export { getParameter, eventHandle };
