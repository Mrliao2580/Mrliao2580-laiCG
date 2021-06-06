let request = require("../api/request");

module.exports.getdizhi = function(res){
  return request({
    url:`http://lcg.zhengxl.show/api/addaddress`,
    method:"POST",
    data:res
  })
}
// 全部地址
module.exports.morendizhi = function(){
  return request({
    url:`http://lcg.zhengxl.show/api/getaddress?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJvMDFyMDVIX2pDNWpFeUptRUNIelRPT2stejFnIiwiaWF0IjoxNjIyNzczMjY1LCJleHAiOjE2MjMzNzgwNjV9.oLi5bsTgNv-nVfDaG6-7EAtB5AZGaVlTWPSJqVrs1LM`
  })
}