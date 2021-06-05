const request = require('./index.js')

module.exports.commit = function(sun){
  return request({
    url:'http://lcg.zhengxl.show/api/commitorder',
    method:'POST',
    data:sun
  })
}