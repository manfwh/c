var request = require('../../utils/request');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    users: {},
  },
  hideDialog(e) {
    this.setData({
      showDialog: false
    })
  },
  show() {
    this.setData({
      showDialog: true
    })
  },
  change(e) {
    console.log(e)
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
    request('/user', {
    })
      .then(res =>{
        this.setData({
          users: res.data
        })
      })
  },
  del(e) {
    request('/user/' + e.currentTarget.dataset.id, {
      method: 'DELETE'
    })
      .then(res =>{
        if(res.statusCode == 200) {
          wx.showToast({
            title: '删除成功',
          })
        } else {
          wx.showToast({
            title: '删除失败',
            icon: 'none'
          })
        }
      })

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