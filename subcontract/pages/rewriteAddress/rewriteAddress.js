import  {areaList} from '../../../utils/address';
let {depositAddress,fetchuserAddress,changeAddress,deleteAddress} = require("../../../api/goods")
// area-data
// pages/addaddress/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areaList,
    addressData:'',
    isShow:false,
    endAddress:'',
    inputBox:'',
    nameContent:'',
    phoneContent:'',
    proContent:'',
    province:'',  // 省
    city:'', // 市
    ares:'',
    goods_id:1,
    id:0,
    tel:1,
    name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {goods_id,id,index} = options;
    console.log(id,'idiid');
    // console.log(goods_id,id,'options')
    this.setData({
      id,
      goods_id,
      index
    })
    this.rewriteAdd();
    // console.log(this.data.goods_id,'onlund')
  },

  // 获取位置
  getAddress(e){
    let data = e.detail.values;
    let addressData = this.data.addressData;
    addressData = ''
    data = data.map(item => {
      return addressData += item.name +'-'
    })
    this.setData({
      addressData
    })
    let area = e.detail.values;
    this.setData({
      province:area[0].name,
      city:area[1].name,
      ares:area[2].name,
    })
  },

  // 取消按钮
  fixs(e){
    this.setData({
      isShow:false
    })
  },

  // 确认按钮
  cancel(){
    let addressData = this.data.addressData;
    this.setData({
      inputBox:addressData,
      isShow:false
    })
  },

  // 点击显示位置
  showCover(){
    this.setData({
      isShow:true
    })
  },

  // 小程序定位
  location(){
    let _this = this
    wx.chooseLocation({
      success(res){
        res.address = res.address.split('区');
        let data = res.address
        // console.log(data[1])
        _this.setData({
          inputBox:data[0],
          proContent:data[1]
        })
         
        // console.log('设置位置',data)
      },
      fail(err){
        _this.remind()
      }
    })
   
  },

  // 提示用戶开启定位
  remind(){
    let _this = this
    wx.showModal({
      title:'请打开位置权限',
      content: '打开位置权限，获取更好的服务',
      success(res){
        if(res.confirm){
          wx.openSetting({
            success(res){
              res.authSetting ={
                "scope.userLocation":true
              }
              // 判断是否同意
              if(res.authSetting['scope.userLocation']){
                // 用户选择同意
                _this.location()
              } else {
                // 用户拒绝
                _this.location()
              }
            }
          })
        } else if(res.cancel){
          _this.remind()
        }
      } 
    })
  },

  // 收货人内容
  nameContent(e){
    this.setData({
      name:e.detail.value,
      nameContent:e.detail.value
    })
    // console.log('姓名',this.data.nameContent)
  },

  // 手机号码内容
  phoneNumber(e){
    this.setData({
      phoneContent:e.detail.value,
      tel:e.detail.value
    })
    // console.log('号码',this.data.phoneContent)

  },

  // 详细地区
  address(e){
    this.setData({
      proContent:e.detail.value
    })
    // console.log('详情地址',this.data.proContent)
  },

  // 确认按钮 上传地址
  async confirm(){
    // 校验一下输入框是否为空
    let inputBox = this.data.inputBox;
    let nameContent = this.data.nameContent;
    let phoneContent = this.data.phoneContent;
    let proContent = this.data.proContent;
    // let province = this.data.province;
    // let city = this.data.city;
    // let ares = this.data.ares; 
    if(inputBox == '' || nameContent =='' || phoneContent =='' || proContent ==''){
      wx.showToast({
        title: '内容不能为空',
      })
      // return;
    };
    let token = wx.getStorageSync('token');  // token
    let name = this.data.nameContent;  // 收件人姓名
    let tel = this.data.phoneContent; // 手机号码
    let isDefault = 0; // 默认地址标识
    let addressDetail = this.data.proContent; //详情地址
    let addressAll = this.data.addressData; // 省市区
    let {status} = await depositAddress({token,name,tel,isDefault,addressDetail,addressAll});
    if(status == 0){
      wx.showToast({
        title: '添加成功',
      })
      let goods_id = this.data.goods_id;
      // console.log(goods_id,'asdfasdfsadfasdfasdf')
      wx.navigateTo({
        url: `/pages/settlement/settlement?goods_id=${goods_id}`,
      })
    } else if(status ==1){
      wx.showToast({
        title: '服务器繁忙',
      })
    }

  },

  // 一进来就发送请求
  // 点击编辑地址
  async rewriteAdd(){
    let indexs = this.data.id
    let token = wx.getStorageSync('token');
    let result = await fetchuserAddress(token);
    let {name,tel,addressAll,addressDetail} = result[indexs-1];
    this.setData({
      name,
      tel,
      inputBox:addressAll,
      proContent:addressDetail
    })
  },

  // 点击保存地址调取修改接口 (不是调取保存接口)
 async modify(e){
   console.log(e)
   let name = this.data.name;
   let tel = this.data.tel;
   let addressDetail = this.data.inputBox;
   let addressAll = this.data.proContent;
   let token = wx.getStorageSync('token');
   let id = this.data.id;
   console.log(name,tel,addressDetail,addressAll,token,id)
   let {message,status} = await changeAddress({name,tel,addressDetail,addressAll,token,id})
   if(status ==0){
     wx.showToast({
       title: message,
     })
     // 重新获取地址赋值给本地存储渲染、
     let selectAddress = await fetchuserAddress(token);
     wx.setStorageSync('selectAddress', selectAddress);
     wx.navigateTo({
       url: '/pages/settlement/settlement',
     })
   } else{
    wx.showToast({
      title: message,
    })
   }
  },


  // 删除地址
  async deleteAdd(){
    let token = wx.getStorageSync('token');
    let id = this.data.id;
    let {status,message} = await deleteAddress({token,id});
    if(status ==0){
      wx.showToast({
        title: 'message',
      })
      let selectAddress = fetchuserAddress(token);
      wx.setStorageSync('selectAddress', selectAddress);
      wx.navigateTo({
        url: '/subcontract/pages/editAddress/editAddress',
      })
    }else{
      wx.showToast({
        title: '服务器繁忙',
      }) 
    }
  }

  
})