// pages/jifen/jifen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vouchers: [],
    fraction: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(()=>{
      this.setData({
        fraction: 320,
        vouchers: [
          {
            name: '宝马5系 2014款 525Li 豪华设计套装',
            date: '2018-08-20',
            demand: 200,
            like: 293020,
            star: 63020,
            type: 1
          },
          {
            name: '奥迪A8 2013款 A8L 50 TFSI quattro专享型',
            date: '2018-08-20',
            demand: 400,
            like: 293020,
            star: 63020,
            type: 2
          },
          {
            name: '奥迪A8 2013款 A8L 50 TFSI quattro专享型',
            date: '2018-08-20',
            demand: 200,
            like: 293020,
            star: 63020,
            type: 1
          }
        ]
      })
    }, 100)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  toDetail(e) {
    wx.navigateTo({
      url: '/pages/usedCar/usedCar',
    })
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