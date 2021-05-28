
import { gettuangou } from '../../api/loginapi'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      tabs:[],
      tuangou:{},
      xiabiao:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const tabs = [
     
      {
        title: '推荐',
       
      },
      {
        title:"美妆",
       
      },
      {
        title:"母婴健康",
       
      },
      {
        title:"下期预告",
     
      }
    ]
    this.setData({ tabs })
    this.gettuan()
  },
  onChange(e){
    let {detail} = e.detail
    let {index} = e.detail
    console.log(index)
    this.setData({
         xiabiao:index
    })
  },
  onTabClick(e){
  },
  async gettuan(){
    let {data} = await gettuangou()
    console.log(data)
    this.setData({
      tuangou:data
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