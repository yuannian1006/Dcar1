var app = getApp();
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['协议客户', '临时客户'],
    items: ['单程车', '包车', '接机', '送机'],
    curtTab: 0,
    curtList: 0,
    latitude: 23.099994,
    longitude: 113.324520,
    array: ['5座公务轿车', '7座商务车', '5座豪华车', '19座考斯特', '45座豪华大巴'],
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


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getLocation({

      success: function (res) {
        console.log("************", res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      },

      fail: function (res) {
        console.log(333333);
        console.log(res);
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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
    console.log("主页onUnload事件 被触发")
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

  },

  /**
   * 点击头像跳转至用户中心
   */
  toUsrHome: function () {
    if (app.globalData.no == null) {
      // wx.navigateTo({url:"../login/login"})
      console.log("这是点击头像 但无用户信心 指示用户到登录页面登录")
      // wx.redirectTo({ url: "../login/login" })
      wx.navigateTo({ url: "../portal/login/login" })
    } else {


      console.log("这是点击头像 跳转到用户中心")
      wx.navigateTo({ url: "../home/user/user" })

    }
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

  /**
   * 订单提交,若无登录用户信息,调到登录页面,若用户信息
   * 正常则提交
   */
  subBtnClick: function (e) {
    console.log("订单提交")
    if (app.globalData.userinfo == null) {
      // wx.navigateTo({url:"../login/login"})

      wx.navigateTo({ url: "../portal/login/login" })
    } else {


      wx.redirectTo({ url: "../index/index" })

    }
  },



  /**
   * XXL 页面控制
   */

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },

  /**选择上车地点 */
  getOnLocation: function () {
    console.log("被点击")
    var that = this
    wx.chooseLocation({
      success: function (res) {
        console.log("上车位置", res)
        that.setData({
          startLocation: res.address,
          slatitude: res.latitude, //下车维度
          slongitude: res.longitude //下车经度
        })
      },
    })
  },

  /**选择下车地点 */
  getOffLocation: function () {
    console.log("被点击")
    var that = this
    wx.chooseLocation({
      success: function (res) {
        console.log("上车位置", res)
        that.setData({
          endLocation: res.address,
          elatitude: res.latitude, //下车维度
          elongitude: res.longitude, //下车经度
        })
      },
    })
  },

  /**校验手机号码 */
  getPhoneNo: function (e) {
    console.log("haoma", e)


    var phone = e.detail.value;
    if (!(/^1[34578]\d{9}$/.test(phone))) {
      // this.setData({
      //   ajxtrue: false
      // })
      if (phone.length >= 11) {
        wx.showToast({
          title: '手机号有误',
          icon: 'success',
          duration: 2000
        })
      }
    } else {
      this.setData({
        phoneNo: phone
      })
    }

  }


})