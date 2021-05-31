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

module.exports.fetchFreeData = function() {
  return request({
    url:"http://lcg.zhengxl.show/api/topspeed?page=1&pagesize=6",  // 接口未给
    method:"GET"
  })
}

// 商品详情
module.exports.fetchGoodDetail = function( goods_id) {
  return request({
    url:"http://lcg.zhengxl.show/api/getGoodsInfo?goods_id",  // 接口未给
    method:"GET",
    data:{
      goods_id
    }
  })
}