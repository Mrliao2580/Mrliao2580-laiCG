let {fetchGoodDetail,fetchuserAddress} = require("../../api/goods");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    columns: ['工作日/双休/节假日均可收货','仅工作日收货','仅双休/节假日收货'],
    indexcolumns:0,
    isShow:false,
    goods_id:0,
    goodDeatail:'',
    isShowAddress:false,
    idDefatul:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options,'options')
    let {goods_id} = options;
  
    // console.log(goods_id,'goods_id');
    // console.log(goods_id,name,addressAll,addressDetail,tel)
    this.setData({
      goods_id,
    })
    this._fetchGoodDetail();
    this._fetchuserAddress(); // 获取用户地址
    // console.log(this.data.idDefatul)
  },
  
  // 配送方式事件
  delivery(){
    this.setData({
      isShow:true
    })
  },
  // 遮盖层事件
  cover(){
   this.setData({
     isShow:false
   })
  },

  // 获取商品详情
  async _fetchGoodDetail(){
    // console.log(this.data.goods_id,'this.data.goods_id')
    let {message} = await fetchGoodDetail(this.data.goods_id);
    this.setData({
      goodDeatail:message[0]
    })
    // console.log(this.data.goodDeatail)
  },

  onChange(event) {
    const { picker, value, index } = event.detail;
    this.setData({
      indexcolumns:index
    })
  },

  // 添加收货地址
  addAddress(){
    let goods_id = this.data.goods_id;
    wx.navigateTo({
      url: `/pages/addaddress/address?goods_id=${goods_id}`
    })
  },

  // 获取用户收货地址
  async _fetchuserAddress(){
    let getStor = wx.getStorageSync('selectAddress');
    if(getStor.length >0){
      let idDefatul = this.data.isDefault
      getStor = getStor.map(item => {
        if(item.isDefault == 1){
          idDefatul = item
        }
        return item;
      })
      this.setData({
        idDefatul
      })
      // console.log(this.data.idDefatul,'默认地址2222')
      return;
    } else {
      let token = wx.getStorageSync('token');
      let data = await fetchuserAddress(token);
      // console.log(data,'data')
      let idDefatul = this.data.isDefault
      data = data.map(item => {
        if(item.isDefault == 1){
          idDefatul = item
        }
        return item;
      })
      this.setData({
        idDefatul
      })
      // console.log(this.data.idDefatul)
    }
    
    if(data.length <= 0){
      this.setData({
        isShowAddress:true
      })
    }
  },

  // 編輯收货地址
  editAddress(){
    let goods_id = this.data.goods_id;
    wx.navigateTo({
      url: `/subcontract/pages/editAddress/editAddress?goods_id=${goods_id}`,
    })
  },

  // 微信支付
  pay(){
    
  }
})