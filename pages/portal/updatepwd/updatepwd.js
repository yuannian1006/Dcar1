// pages/portal/updatepwd/updatepwd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'dc', value: '我已阅读并同意' }
    ],
    username: "",
    authCode: "",
    password: "",
    password2: "",
    disabled: false, //是否已阅读同意服务条款

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 注册是否阅读的checkbox
   */
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({
      disabled: !this.data.disabled
    })
  },

  /**
   * 点击注册
   */

  regBtnClick: function (e) {
    console.log(e)
    wx.redirectTo({ url: "../login/login" })
  },

  /**
   *接收注册时,传过来的账号密码
   */
  usernameInput: function (event) {

    this.setData({ username: event.detail.value })
  },

  codeInput: function (event) {
    this.setData({ authCode: event.detail.value })
  },

  passwordInput: function (event) {

    this.setData({ password: event.detail.value })
  },

  passwordInput2: function (event) {

    this.setData({ password2: event.detail.value })
  },

  regBtnClick: function (event) {
    var username = this.data.username
    var authCode = this.data.authCode
    var password = this.data.password
    var password2 = this.data.password2
    var disabled = this.data.disabled

    if (username.replace(/\s+/g, '') == "" || username == null) {
      wx.showToast({
        title: '用户名错误',
        icon: 'none',
        duration: 2000//持续的时间
      })
    } else if (authCode.replace(/\s+/g, '') == "" || authCode == null) {
      wx.showToast({
        title: '验证码错误',
        icon: 'none',
        duration: 2000//持续的时间
      })
    } else if (password.replace(/\s+/g, '') == "" || password == null) {
      wx.showToast({
        title: '密码错误',
        icon: 'none',
        duration: 2000//持续的时间
      })
    } else if (password2.replace(/\s+/g, '') == "" || password2 == null || password2 != password) {
      wx.showToast({
        title: '确认的密码错误',
        icon: 'none',
        duration: 2000//持续的时间
      })
    } else if (disabled == false) {
      wx.showToast({
        title: '请同意服务条款后注册',
        icon: 'none',
        duration: 2000//持续的时间
      })
    }


    //下一步请求接口







  },

  setncode: function () {
    console.log("点击发送验证码")
  }

})