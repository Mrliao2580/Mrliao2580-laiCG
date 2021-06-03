let { getlogin } = require("../../api/loginapi");
let { gettoken,dateDiff } = require("../../utils/util");
let { fetchGoodDetail } = require("../../api/goods");
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
    goodData:0,
    goodDetail:[],
    goods_id:0,
    good_id:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {goods_id} = options;
    this.setData({
      goodData:goods_id
    })
    this.isShows();
    this.goodsDetail()
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
    // console.log( this.data.commentIndex)
  },

  // 邮费说明
  postageDire(){
    wx.navigateTo({
      url: '/pages/postage/postage',
    })
  },

  // 加入购物车
  addShopping(){
    let token = wx.getStorageSync('token');
    // console.log(token);
    let Token =  gettoken();
    let getData = wx.getStorageSync('good_id')
    // console.log('Token',Token);
    if(token = Token){
      if(getData.length != 0){
         // 商品id存储到本地存储
        let getGood_id = wx.getStorageSync('good_id')
        this.setData({
          good_id:getGood_id
        })
      }
      let goodId = this.data.good_id; // [] 空数组
      let goods_id = this.data.goods_id;  // 1 number\
      console.log('good',goodId)
      goodId.push(goods_id);
      // console.log(goodId)  // 预想结果[1]，打印结果：1 
      this.setData({
        good_id:goodId
      })
      console.log(this.data.good_id)
      wx.setStorageSync('good_id', this.data.good_id),
      wx.showToast({
        title: '加入购物车成功',
      })
    } else{
      wx.showToast({
        title: '登录失败',
      })
      wx.navigateTo({
        url: '/pages/login/login',
      })
    } 
  },

  // 点击跳转到商品详情页
  async goodsDetail(){
    let goods_id = this.data.goodData;
    let {message} = await fetchGoodDetail(goods_id);
    message[0].end_time = dateDiff(message[0].end_time);
    let img = message[0].description_info.description;
    message[0].description_info.description = img.replace(/<img/g, '<img style="width:100%"');

    this.setData({
      goods_id:message[0].goods_id,
      good_id:[]
    })

    this.setData({
      goodDetail:message[0]
    });
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
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