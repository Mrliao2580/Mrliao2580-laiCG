// import Dialog from '@vant/weapp/dist/dialog/dialog';
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dianji:false,
    checked: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  dianji(e){
    this.setData({
      dianji:true
    })
  },
  onClickButton(){
    wx.navigateTo({
      url: '/pages/dingdan/dingdan',
    })
  },
  shanchu(e){  
    wx.showModal({
      content: '是否要删除',
      success (res) {
        if (res.confirm) {
       console.log('删除成功')
        } else if (res.cancel) {
          console.log('返回到原页面')
          wx.switchTab({
            url: '/pages/shop-car/shop-car',
          })
        }
      }
    })
  },
  wancheng(){
    this.setData({
      dianji:false
    })
  },
  onChange(event) {
    this.setData({
      checked: event.detail,
    });
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