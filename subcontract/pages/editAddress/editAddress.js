// subcontract/pages/editAddress/editAddress.js
let {fetchuserAddress} = require("../../../api/goods")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: '1',
    detailIndex:2,
    addressArr:[],  // 用户所有地址
    selectAddress:[],
    goods_id:1
  },

  onChange(event) {
    let _this = this
    this.setData({
      radio: event.detail,
    });
    let addIndex = this.data.radio;
    let addressArr = this.data.addressArr;
    // console.log(addressArr,'addressArr')
    addressArr = addressArr.map((item,index)=>{
      if(index == addIndex){
        addressArr[index].isDefault = 1
      } else {
        addressArr[index].isDefault = 0
      }
      return item
    })
    this.setData({
      selectAddress:addressArr
    })
    let selectAddress = this.data.selectAddress
    wx.setStorageSync('selectAddress', selectAddress);
    let goods_id = this.data.goods_id;
    // console.log(goods_id,'dsfklsdjlfk')
    wx.navigateTo({
      url: `/pages/settlement/settlement?goods_id=${goods_id}`,
    })
  },

  // 获取用户地址
  async _fetchuserAddress(){
    let token = wx.getStorageSync('token')
    let selectAddress= await fetchuserAddress(token);
    wx.setStorageSync('selectAddress', selectAddress)
   let _this = this
   let addressData = wx.getStorageSync('selectAddress');
  //  console.log(addressData,'selectAddress')
   if(addressData.length > 0){
    addressData = addressData.map((item,index) => {
      if(item.isDefault == 1){
        // console.log('index',index)
        _this.setData({
          radio:index
        })
        // console.log(_this.data.radio,'radio')
      }
      item.isDefault = 0;
      return item;
    })
    _this.setData({
      addressArr:addressData
    })
   } else {
    let token = wx.getStorageSync('token')
    let data = await fetchuserAddress(token);
    // console.log('data',data);
    // return;
    if(data.errcode  == 40003){
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
    // console.log(this.data.addressArr)
    data = data.map((item,index) => {
      if(item.isDefault == 1){
        _this.setData({
          radio:index
        })
        // console.log(_this.data.radio,'2radio')
      }
      item.isDefault = 0;
      return item;
    })
    _this.setData({
      addressArr:data
    })
    // console.log(this.data.detailIndex)
   }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {goods_id} = options;
    this.setData({
      goods_id
    })
    this._fetchuserAddress();
  },

  // 新增地址
  addAddress(){
    let goods_id = this.data.goods_id;
    wx.navigateTo({
      url: `/pages/addaddress/address?goods_id=${goods_id}`,
    })
  },

  // 改写地址
  rewriteAddress(e){
    let goods_id = this.data.goods_id;
    // console.log(goods_id,'goods_id')
    let {id,index} = e.currentTarget.dataset;
    index = index + 1
    wx.navigateTo({
      url: `/subcontract/pages/rewriteAddress/rewriteAddress?goods_id=${goods_id}&id=${id}&index=${index}`,
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