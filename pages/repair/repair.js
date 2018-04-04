// pages/repair/repair.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 0,            // 默认显示第一个tab
    cars: [
      '晋A·00623',
      '晋A·00123',
      '晋B·00123',
    ],
    car: '晋A·00623',
  },
  /**
   * 切换 tab
   */
  tapToggle(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  },
  /**
   * 切换车辆
   */
  selectCar(e) {
    this.setData({
      car: this.data.cars[e.detail.value]
    })
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
  
  }
})