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

},

  onTabClick(e) {
    console.log(e)
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
  }
})