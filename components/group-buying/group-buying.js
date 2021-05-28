// components/group-buying.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shop:{
      type:Array,
      value:[]
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
    data(){
      console.log(shop)
    }
  }
})
