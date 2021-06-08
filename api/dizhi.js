let request = require("../api/request");

module.exports.getdizhi = function(res){
  return request({
    url:`http://lcg.zhengxl.show/api/addaddress`,
    method:"POST",
    data:res
  })
}
// 全部地址
module.exports.morendizhi = function(token){
  return request({
    url:`http://lcg.zhengxl.show/api/getaddress?token=${token}`,
  })
}