// components/good/good.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsData:{
      type:Object,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    detailPag(res){
      let {goods_id} = res.currentTarget.dataset;
      wx.navigateTo({
        url: `/pages/goodsDetail/goodsDetail?goods_id=${goods_id}`,
      })
    }
  }
})
