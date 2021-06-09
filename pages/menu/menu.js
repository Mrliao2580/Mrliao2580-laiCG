let {dindan ,getgoodscar, weixpay,fetchGoodDetail,fetchuserAddress} = require('../../api/goods')
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

async pay(e){
    console.log(e)
    let dingdan = this.data.dingdan
    console.log('sASASasAS',dingdan)
    let item = e.currentTarget.dataset.item
    let goos_id = item.goods_id
    let jumei_price = item.jumei_price
    let shuliang = item.number
  let token = wx.getStorageSync('token');
  let phone_number = '13229670701';  // 电话号码
  let addressAll = '广东省深圳市龙华区';  // 省市区
  let addressDetail = '观澜街道影星科技园'; // 详细地址
  let address = dingdan.address;  // 加起来的地址
  let number = shuliang;
  let total_price = jumei_price; // 价格
  let name = '你好';  // 姓名
  let goods_id = goos_id;
  // console.log(token,phone_number,address,number,tital_price,name,goods_id);
  let data = {
    token,
    phone_number,
    address,
    number,
    total_price,
    name,
    goods_id,
  }
  console.log(data);
  let {result} = await weixpay(data);
  console.log(result);
  let {nonce_str, timeStamp,prepay_id, paySign, mypackage, sign_type} = result.xml;
  wx.requestPayment({
    nonceStr:nonce_str,
    package:mypackage,
    signType:sign_type,
    paySign:paySign,
    timeStamp:timeStamp,
    success:function(res){
      console.log("支付接口调用成功",res);
      wx.navigateTo({
        url: '/pages/menu/menu',
      })
    },
    fail:function(err){
      console.log('支付接口失败',err);
      wx.navigateTo({
        url: '/pages/menu/menu',
      })
    }
  })
},
fail(err){
  console.log(err,'err');
},
 async getdingdan(){
   let token = gettoken()
  let data = await dindan(token)
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
   console.log('dsdsadasds',item)
   res.map((v)=>{
     if(item.id == v.id){
       v.status = item.status;
       v.number = item.number;
     }
   })
 })
 let array = []
   for(let i = 0;i<res.length;i++){
     let temp = array.find(e=>
        e.id == res[i].id
     )
      console.info(temp,i)
     if(!temp){
       array.push(res[i])
     }else{
       console.info(temp)
       temp.number++
     }
   }
   res = array
   console.log('saasasa',array)
  console.log('daasasasa',res)
 this.setData({
  //  已经拿到所有的
   suoyou:res
 })
},
// 点击切换tab
  onTabClick(e) {
    let index = e.detail.index
    let dingdan = this.data.suoyou;
    let a = []
    dingdan.filter(item=>{
      if(item.status == index){
        return a.push(item);
      }else if(index == 0){
        return a.push(item)
      }
    })
    console.log('1',a);
    this.setData({
      suoyou:a
    })
    
    console.log('suoyou',this.data.suoyou);
  },


  onChange(e) {
    console.log(e);
    // console.log(e)
    let index = e.detail.index
    // console.log('xiabiao',index)
    // this.getdingdan();
    let dingdan = this.data.suoyou;
    // console.log('ggg',this.data.suoyou);
    let orderList = []
    dingdan.filter(item=>{
      if(item.status == index){
        // console.log('a',item)
        return orderList.push(item);
      }
      if(index == 0){
        // console.log(item);
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
      url:'q',
    })
  }
})