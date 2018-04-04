var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {},
    translate: 0,
    selected: 0,          // 当前选择的第几个卡片
    showQr: false,        // 二维码弹窗
    showConfirm: false    // 确认支付弹窗
  },
  change(e) {
    this.setData({
      selected: e.detail.current
    })
  },
  // 确认支付
  pay() {
    wx.showLoading({
      title: '支付中...',
    })
    setTimeout(()=>{
      wx.showToast({
        title: '支付成功',
      })
      wx.hideLoading();
      this.hideConfirm()
    }, 500)
  },
  // 支付弹窗
  payModal() {
    this.showQr();
    setTimeout(()=> {
      this.showConfirm();
    }, 2000)
  },
  // 打开支付二维码
  showQr() {
    this.setData({
      showQr: true
    })
  },
  // 关闭支付二维码
  hideQr() {
    this.setData({
      showQr: false
    })
  },
  // 打开确认支付弹窗
  showConfirm: function () {
    this.setData({
      showQr: false,
      showConfirm: true
    })
  },
  /**
   * 关闭确认支付弹窗
   */
  hideConfirm: function () {
    this.setData({
      showConfirm: false
    });
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userinfo: app.globalData.userInfo
      })
    } else {
      wx.getUserInfo({
        success: res=>{
          this.setData({
            userinfo: res.userInfo
          })
        }
      })
    }
    
    
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
    
  }
})