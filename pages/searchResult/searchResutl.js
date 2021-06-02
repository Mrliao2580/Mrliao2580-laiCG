let { fetchSearchData} = require("../../api/goods");
// pages/searchResult/searchResutl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchContent:'',
    goodSdata:[],
    isShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {searchContent} = options
    // console.log(searchContent)
    this.setData({
      searchContent:searchContent
    })
    console.log('数据',this.data.searchContent)
    this.searchGoodsData()
  },

  async searchGoodsData(){
    let resutl = await fetchSearchData(this.data.searchContent);
    if(resutl.length >0){
      this.setData({
        isShow:true
      })
    }
    this.setData({
      goodSdata:resutl
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