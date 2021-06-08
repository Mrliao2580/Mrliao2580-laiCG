let {fetchOrder} = require("../../api/goods")
Page({
  
  data: {
    tabs: [],
    activeTab: 0,
    indexa: 1,
    index:''
  },
  onLoad(options) {
     let {indexa} = options
     console.log(indexa)
     this.setData({
      indexa
     })
    const tabs = [
      {
        title: '全部',
        
      },
      {
        title: '待付款',
       
      },
      {
        title: '代发货',
       
      },
      {
        title: '待收货',
       
      },
      {
        title:"待评价",
     
      },
    ]
    this.setData({ tabs })
    this._fetchOrder()
},

  onTabClick(e) {
    let index = e.detail.index
    console.log(index)
    this.setData({
      index
    })
  },

  onChange(e) {
    // const index = e.detail.
    // this.setData({ 
    //   activeTab: this.data.indexa
    // })

  },
  handleClick(e) {
    wx.navigateTo({
      url: './webview',
    })
  },

  // 获取订单消息
  async _fetchOrder(){
    let token = wx.getStorageSync('token');
    let data = await fetchOrder(token);
    console.log(data)
  }
})