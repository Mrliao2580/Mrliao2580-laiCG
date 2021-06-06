let request = require("../api/request");

module.exports.fetchGoodData = function() {
  return request({
    url:"http://lcg.zhengxl.show/api/recommend?page=1&pagesize=7",  // 接口未给
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

// 母婴商品详情
module.exports.fetchMotherData  = function( page) {
  return request({
    url:`http://lcg.zhengxl.show/api/mom?page=${page}&pagesize=6`,
    method:"GET",
  })
}

// 轻奢页面数据
module.exports.fetchLuxuryData  = function( ) {
  return request({
    url:`http://lcg.zhengxl.show/api/understatement?page=2&pagesize=10`,
    method:"GET",
  })
}

// 名品页面数据
module.exports.fetchfamousData = function( ) {
  return request({
    url:`http://lcg.zhengxl.show/api/product?page=2&pagesize=10`,
    method:"GET",
  })
}

// 搜索遮盖数据
module.exports.fetchsearchCover = function( ) {
  return request({
    url:`http://lcg.zhengxl.show/api/getClassify`,
    method:"GET",
  })
}

// 搜索框内容搜索的数据
module.exports.fetchSearchData = function(value) {
  return request({
    url:`http://lcg.zhengxl.show/api/search?&page=1&pagesize=3`,
    method:"GET",
    data:{
      value
    }
  })
}

// 存入用户地址接口
module.exports.depositAddress = function({token,name,tel,isDefault,addressDetail,addressAll}) {
  return request({
    url:`http://lcg.zhengxl.show/api/addaddress`,
    method:"post",
    data:{
      token,
      name,
      tel,
      isDefault,
      addressDetail,
      addressAll
    }
  })
}

// 获取用户地址
module.exports.fetchuserAddress = function(token) {
  return request({
    url:`http://lcg.zhengxl.show/api/getaddress`,
    method:"GET",
    data:{
      token
    }
  })
}

module.exports.getgoodscar = function(goods_id){
  return request({
    url:`http://lcg.zhengxl.show/api/goodIdInfo?goods_id=${goods_id}`,
    method:"GET"
  })
} 
module.exports.tijiao = function(){
  return request({
    url:"http://lcg.zhengxl.show/api/commitorder",
    method:"POST"
  })
}
