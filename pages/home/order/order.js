var app = getApp();
var util = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: ['接单中','已完成','已取消','全部'],
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
      url: app.globalData.apiUrl +'/system/ppOrder/querylistByPage',
      data: { orderStatus: 'N'},
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

    this.setData({
      curtList: e.currentTarget.dataset.idx
    })

    var orderStatusO = 'N';
    if (e.currentTarget.dataset.idx == 0) {
      orderStatusO = 'N'
    } else if (e.currentTarget.dataset.idx == '1') {
      orderStatusO = 'C'
    } else if (e.currentTarget.dataset.idx == '2') {
      orderStatusO = 'Q'
    } else if (e.currentTarget.dataset.idx == '3') {
      orderStatusO = 'XX'
    }  
    var _this = this
    wx.request({
      url: app.globalData.apiUrl + '/system/ppOrder/querylistByPage',
      data: { orderStatus: orderStatusO },
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
     
  },

  
  /**
 * 订单明细查看
 */
  orderClick: function(e) {
    console.log("订单明细查看")
    console.log(e);
    console.log(e.currentTarget.dataset.id);
   
     wx.navigateTo({ 
       url: "orderdetail/orderdetail?dcPpOrderId=" + JSON.stringify(e.currentTarget.dataset.id), 
      })
  }

 

})