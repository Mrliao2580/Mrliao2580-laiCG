const {getuser,getlogin,getphone} = require('../../api/loginapi')
const {gettoken,settoken} = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginCode:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
login(){
  wx.login({
    async success(res){
      console.log(res)
      console.log(res.code)
          let data = await getlogin(res.code)
          let token = data.token
          console.log('data',data)
      if(res.code){
        if(token){
          settoken(data.token)
          
          console.log('data.token',data.token)
          wx.showToast({
            title: '登录成功',

          })

          wx.switchTab({
            url: '../../pages/index/index',
          })

         
        }else{
          wx.showToast({
            title: '登录失败',
          })
          wx.switchTab({
            url: '/pages/login/login',
          })
        }
      }
    }
   })
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})