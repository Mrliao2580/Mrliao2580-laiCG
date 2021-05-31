const TOKEN = 'token';
const gettoken = ()=>{
  return wx.getStorageSync(TOKEN)
}
const settoken = (token)=>{
   wx.setStorageSync(TOKEN,token)
}


// 时间戳转化器




module.exports = {
  gettoken,settoken
}
