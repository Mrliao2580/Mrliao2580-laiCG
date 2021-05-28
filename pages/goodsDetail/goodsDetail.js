// pages/goodsDetail/goodsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:false,
    isShowMask:false,
    userComment:['全部','补水效果棒','性比价高','效果不错','快递给力','水嫩'],
    commentIndex:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.isShows()
    // this.getItem()
  },

  isShows(){
    let data = this.data.isShow
    this.setData({
      isShow: !data
    })
  },

  // 遮罩层
  isShowMask(){
    let data = this.data.isShowMask
    this.setData({
      isShowMask: !data
    })
  },

  // 关闭遮罩层
  shutDown(){
    this.setData({
      isShowMask:false
    })
  },

  // 评论分类
  getItem(e){
    let index = e.currentTarget.dataset.index
    this.setData({
      commentIndex:index
    })
    console.log( this.data.commentIndex)
  },

  myDetail(){
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