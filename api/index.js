module.exports = (options)=>{
  return new Promise((resolve,reject)=>{
      wx.showLoading({
    title: '正在加载中',
  })
  wx.request({
    ...options,
      success:function({data}){
              resolve(data)
            },
      fail:reject,
  complete(){
    wx.hideLoading()
  }
  })
  })
}