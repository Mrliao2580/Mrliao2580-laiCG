 let {getgoodscar,loadOrder} = require('../../api/goods')
 let {commit} = require('../../api/order')
 let {gettoken} = require('../../utils/util')
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog'
Page({


  /**
   * 页面的初始数据
   */
  data: {
    anxia:false,
    checked:false,
    data:[],
    detail:1,
    jiage:'',
    price:'',
   
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.goodscar()
      this.loadOrder()
  },

 
  async goodscar(){
  let goodsid = wx.getStorageSync('good_id')
  console.log(goodsid)
 let PromiseAll =  goodsid.map(item=>{
  return getgoodscar(item)
  })
  let data = await Promise.all(PromiseAll)
  let res = data.flat()
  res.map(item=>{
    item.detail = 1
    item.checked = false
    item.anxia = false
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
       temp.detail++
     }
   }
   console.info(array)
   res = array
  
  this.setData({
    data:res
  })
},
plus(){
  console
},
 anxia(e){
   let data = this.data.data
   console.info(e)
   data.forEach(item=>{
     if(item.id === e.target.dataset.id){
       item.anxia = !item.anxia
       this.setData({
         data
       })
     }
   })
  },
  // 提交按钮
   async onClickButton(e){
     let token = this.gettoken
     let canshu = { 
       token : token,
       phone_number:123,
       address:'asd',
       number:1,
       tital_price:1,
       name:"tyf",
       goods_id:1
      };
     
     let restro = await loadOrder(canshu);
     let data = this.data.data
     console.log(data)
    let array = []
    // 通过filter过滤掉没有被勾选的数据,将勾选上的数据里面的id和数量(detail)组合成一个对象放到一个数组里
    data.filter(e=>e.checked).map(h => array.push({id:h.id,detail:h.detail}))

    let str = JSON.stringify(array)
    // console.info(str,JSON.parse(str))
    wx.navigateTo({
      url: '/pages/settlement/settlement?data=str',
    })
  },
  shanchu(e){  
    let _this = this
    console.log(e)
    let {index} = e.target.dataset
    console.log(index)
    wx.showModal({
      content: '是否要删除',
      success (res) {
        if (res.confirm) {
         _this.data.data.splice(index,1)
        console.log(_this.data.data)
        
       _this.setData({
              data:_this.data.data
        })
       console.log('删除成功')

        } else if (res.cancel) {
          console.log('返回到原页面')
          wx.switchTab({
            url: '/pages/shop-car/shop-car',
          })
        }
      }
    })
  },

  bujinqi(event){
    console.log(event)
    let dataset = event.currentTarget.dataset
    // 当前下标
    let index = dataset.index
   let data = this.data.data
  //  当前步进器的值
   let detail = event.detail
   console.log('gggg',detail)
  //  价格
   let jiage  =  ((data[index].detail) * 100) * data[index].jumei_price

  let bianliang = data.some((item,index)=>{
      return index == dataset.index ? true :false
   })
      if(bianliang==true){
        if(data[index].checked == true){
          this.setData({
            price :this.data.jiage + jiage
          })
        }
          
   }
   console.log(jiage)
   console.log(detail)
   data[index].detail = event.detail
   this.setData({
     data
   })
  },
  onChange(event) {
    console.log(event)
    let {index} = event.currentTarget.dataset
    console.log('复选框下',index)
    let data = this.data.data;

    console.log(data);

    let checked = this.data.checked;
    data[index].checked = event.detail
    let price = (data[index].jumei_price * 100) * data[index].detail
    let a = parseInt(this.data.price || 0) + parseInt(price);
    let b = parseInt(this.data.price || 0) - parseInt(price);
    console.log(a);
    console.log('price',price);
    console.log(this.data.price);
    if(data[index].checked == true){
      this.setData({
        price:a
      })
    }else{
      this.setData({
        price:b
      })
    }

    data.map(item=>{
      if(item.checked == false){
        checked = false
      }
    })
    this.setData({
      data,
      checked
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  dianji(event){
    let _this = this
    console.log('点击event',event)
    let detail = event.detail
    console.log('detail',detail)
    let data = _this.data.data
    console.log('data',data)
    let totalPrice = 0
    //全选
    if(detail){
      data.map(e=>{
        console.info(  e.detail,e.jumei_price , totalPrice)
        totalPrice = e.detail*(e.jumei_price *100) + totalPrice
      })
      console.info('total '+totalPrice)
      this.setData({
        price: totalPrice
      })
    }else{
      //非全选赋值0
    }
    
    data.map((item,index)=>{
      console.log(item.detail)
      console.log(item.detail)
        item.checked = event.detail
    })
    this.setData({
      checked: event.detail,
      data
    })
  },
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.goodscar()
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