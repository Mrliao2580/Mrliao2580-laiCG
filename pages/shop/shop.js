// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history:[],
    goods:[],
    setStore:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.goodsChnage();
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

  textValue(event){
    let data = this.data.history;
    data.push(event.detail)
    // 存入本地存储
    wx.setStorageSync('history', data);
    this.setData({
      history:data,
      setStore:data
    })
    this.goodsChnage();
  },

  goodsChnage(){
     // 取出本地存储 赋值给页面
     let result = wx.getStorageSync('history');
    //  console.log(result)
     this.setData({
       goods:result
     })
  }
})