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

  //搜索框搜索時触发
  textValue(event){
    let data = this.data.history;
    data.push(event.detail)
    // 存入本地存储
    wx.setStorageSync('history', data);
    this.goodsChnage();
    let searchContent = event.detail;   // 输入框搜索时的内容
    wx.navigateTo({
      url: `/pages/searchResult/searchResutl?searchContent=${searchContent}`,
    })
  },

  goodsChnage(){
     // 取出本地存储 赋值给页面
     let data = wx.getStorageSync('history');
      // console.log(data)
      if(data.length != 0) {
        this.setData({
          goods:data
        })
      }
     let result = wx.getStorageSync('history');
    //  console.log(result)
     this.setData({
       goods:result
     })
  },
  
  backHome(){
    wx.navigateBack({
      success(res){
        // console.log('2342134')
      }
    })
  },


})