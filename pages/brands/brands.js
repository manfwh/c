// pages/brands/brands.js;
var app = getApp();
const request = require('../../utils/request');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    brands: [],
    toView: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.carBrands) {
      this.setData({
        brands: app.globalData.carBrands
      })
      
    } else {
      request('/brands')
        .then(res => {
          app.globalData.carBrands = res.data;
          this.setData({
            brands: res.data
          })
        })
    }

  },
  scroll(e) {
    this.setData({
      toView: e.currentTarget.dataset.group
    })
    wx.showToast({
      title: e.currentTarget.dataset.group,
      icon: 'none'
    })

  },
  backView(e) {
    app.globalData.brand = e.currentTarget.dataset.brand;
    wx.navigateBack({})
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