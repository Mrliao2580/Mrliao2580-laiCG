let {morendizhi} = require('../../api/dizhi')
const {gettoken,settoken} = require('../../utils/utils')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: false,
    morendizhi:[],
    isDefault:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getmoren()
  },
  async getmoren(){
    let isDefault = 0;
    let token = gettoken()
    console.log('aaa',token)
    let data = await morendizhi(token)
    console.log('ccc',data)
    // data.forEach(item=>{
    //   item.isDefault =  (item.isDefault == 0) ? false : true
     
    // })
    
    this.setData({
    morendizhi:data,
    isDefault
    })
  },
  bianji(e){
    wx.navigateTo({
      url: '/subcontract/pages/editAddress/editAddress',
    })
  },
  onChange(event) {
   console.log(event);
   let mr = event.detail
   console.log(mr)
   if(this.data.isDefault == 0){
    checked:false
   }else{
     checked:true
   }
    this.setData({
      checked:event.detail
    })
  },
  tianjia(){
    wx.navigateTo({
      url: '/pages/tianjia/tianjia',
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