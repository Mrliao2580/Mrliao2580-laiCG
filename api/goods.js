let request = require("../api/request");

module.exports.fetchGoodData = function() {
  return request({
    url:"http://lcg.zhengxl.show/api/recommend?limit=20",  // 接口未给
    method:"GET"
  })
}

module.exports.fetchSwipImg = function() {
  return request({
    url:"http://lcg.zhengxl.show/api/getlunbo",  // 接口未给
    method:"GET"
  })
}