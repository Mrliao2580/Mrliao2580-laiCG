const TOKEN = 'token';
const gettoken = ()=>{
  return wx.getStorageSync(TOKEN)
}
const settoken = (token)=>{
   wx.setStorageSync(TOKEN,token)
}


// 时间戳转化器
var dateDiff = function getLocalTime(nS) {     
  return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
}

module.exports = {
  gettoken,settoken,dateDiff
}
