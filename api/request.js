module.exports = (options) => {
  return new Promise( (resolve,reject) => {
    let data = {
      ...options,
      success:function(res){
        resolve(res.data)
      },
      fail:function(res){
        reject(res.data)
      },
      complete(res){
        
      }
    }
    wx.request(data)
  } )
}