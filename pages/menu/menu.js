let {dindan ,getgoodscar} = require('../../api/goods')
let {gettoken} = require('../../utils/utils')
Page({
  
  data: {
    tabs: [],
    activeTab: 0,
    indexa: 0,
    index:'',
    dingdan:[],
    suoyou:[],
    orderDetail:[]
  },
  onLoad(options) {
     let {indexa} = options
    //  console.log(indexa)
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
    this.getdingdan();
    // this.quanbu()
},
xiugaidizhi(){
},
 async getdingdan(){
   let token = gettoken()
  let data = await dindan(token)
  console.log('dingdan',data)
  this.setData({
    dingdan:data
  })
  
 let id = data.map(item=>{
   return getgoodscar(item.goods_id)
 })

 let promiseAll = await Promise.all(id)
 let res = promiseAll.flat()
 console.log('res',res)
 data.map((item,index)=>{
   res.map((v)=>{
     console.log('v',v);
     if(item.id == v.id){
       v.status = item.status;
       v.number = item.number;
     }
   })
 })
 this.setData({
  //  已经拿到所有的
   suoyou:res
 })
},
// 点击切换tab
  onTabClick(e) {
  
  },

  onChange(e) {
    console.log(e);
    let index = e.detail.index
    let dingdan = this.data.suoyou;
    let orderList = []
    dingdan.filter(item=>{
      if(item.status == index){
        return orderList.push(item);
      }
      if(index == 0){
        return orderList.push(item)
      }
    })
    console.log('1',orderList);
    this.setData({
      orderDetail:orderList
    })
    
  },
  handleClick(e) {
    wx.navigateTo({
      url:'',
    })
  }
})