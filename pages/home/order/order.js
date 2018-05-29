var app = getApp();
var util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: ['行程中','已完成','已取消','全部'],
    curtTab: 0,
    curtList: 0,
    latitude: 23.099994,
    longitude: 113.324520,
    date: util.formatTime(new Date), //格式化日期
    time: util.formatTime2(new Date),
    index: 0,
    startLocation: "", //上车地点
    endLocation: "", //下车地点
    phoneNo: "",  //获取机上的联系人号码
    slatitude: "", //上车维度   后续定义为一个对象{}
    slongitude: "", //上车经度
    elatitude: "", //下车维度
    elongitude: "", //下车经度
    list: [],

  },
  /**
  * 生命周期函数--监听页面加载
  * 次数用豆瓣电影信息演示
  */
  onLoad: function (options) {
    var _this = this
    wx.request({
      url: 'http://47.96.94.63:8188/xxl-auth/system/ppOrder/querylistByPage',
      data: {},
      method: 'POST',
      header: {
        'content-type': 'application/json',
        'Authorization': app.globalData.token
      },

      success: function (res) {
        console.log(" app.globalData.token", app.globalData.token)
        console.log("res", res)
        console.log("res.data", res.data)
        console.log("res.data.topics", res.data.topics)
        _this.setData({
          list: res.data.results
        })

      }

    })
    console.log("List: ", this.data.list)
  },
 
  /**
   * 点击时把数组的index给curtTab
   */
  navbarTap: function (e) {
    this.setData({
      curtTab: e.currentTarget.dataset.idx
    })
    console.log(e)
  },

  navbarTap1: function (e) {
    console.log("到这里了")
    // console.log(curtList)
    this.setData({
      curtList: e.currentTarget.dataset.idx
    })
    console.log(e)
  },

   

 

})