// index.js
// 获取应用实例
let {fetchSwipImg,fetchGoodData,fetchFreeData} = require("../../api/goods");

Page({
  data: {
    goodsdata:['首页','急速免税店','母婴','轻奢','名品特卖'],
    goodsShow:[],  // 首页商品数据
    changeStyle:0,
    swipImg:[],
    paths:[
      "/pages/index/index",
      "/pages/dutyFree/dutyFree",
      "/pages/babyMather/babyMather",
      "/pages/luxury/luxury",
      "/pages/plaque/plaque",
      
    ],
    // 极速免锐店
    nvaIamge:[
      'http://mp5.jmstatic.com/mobile/other/detail_page_guarantee/interantion_shipping.png?imageView2/2/w/51/q/70',
      'http://mp5.jmstatic.com/mobile/other/detail_page_guarantee/genuine_guarantee.png?imageView2/2/w/51/q/70',
      'http://mp5.jmstatic.com/mobile/other/detail_page_guarantee/global_delivery.png?imageView2/2/w/51/q/70',
      'http://mp5.jmstatic.com/mobile/other/detail_page_guarantee/return_guarantee_7.png?imageView2/2/w/51/q/70'
    ],
    navTtile:['海外直供','原装正品','极速到货','轻松退货'],
    freeeData:[],
    // 母婴
    motherDu:[
      'http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1593481826.jpeg?imageView2/2/w/160/q/90',
      'http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1612335322.jpeg?imageView2/2/w/160/q/90',
      'http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1595239672.jpeg?imageView2/2/w/160/q/90',
      'http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543566.jpeg?imageView2/2/w/160/q/90',
      'http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1563960647.jpeg?imageView2/2/w/160/q/90',
      'http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1612335336.jpeg?imageView2/2/w/160/q/90',
      'http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1595310899.jpeg?imageView2/2/w/160/q/90',
      'http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1620784189.jpeg?imageView2/2/w/160/q/90'
    ],
    finds:''
  },

  selected(e){
    let index = e.currentTarget.dataset.index;
    this.setData({
      changeStyle:index,
    })
    // console.log(e.currentTarget.dataset.index)
  },

  onLoad(){
    this._fedtchSwipImg();
    this.swipImg();
    this. _fetchFreeData();
    // console.log(this.data.goodsShow)
  },

  // 商品詳情
  async _fedtchSwipImg(){
  let {message} = await fetchGoodData();
  this.setData({
    goodsShow:message
  })
  },

  // 免税店数据
  async _fetchFreeData(){
    let {message} = await fetchFreeData();
    this.setData({
      freeeData:message
    })
    // console.log(this.data.freeeData)
  },

  // 搜索框点击事件
  clickSearch(){
    wx.navigateTo({
      url: '/pages/shop/shop',
    })
  },

  // 轮播图
  async swipImg(){
    let {message} = await fetchSwipImg();
    this.setData({
      swipImg : message
    })
  },

  // 海外直供
  ulClear(e){
    let {index} = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/legend/legend?index=${index}`,
    })
  }
})