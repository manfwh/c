// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 0,
    messages: [
      {
        type: 1,
        title: `即日起兜兜好车开启限时秒杀活动，时间截止至2018年6月30日。`,
        warin: '本次活动不可与积分福利同时使用。',
        rules: '活动期间，所有会员用户可以通过微信小程序平台秒杀多种优惠福利。',
        date: new Date(),
        read: false
      }

    ],
    detail: null,
  },
  tapToggle(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  },
  del(e) {
    var self = this;
    wx.showActionSheet({
      itemList: ['删除'],
      success(e) {
        console.log(self)
        self.data.messages.splice(e.tabIndex, 1);
        self.setData({
          messages: self.data.messages
        })
      }
    })
  },
  detail(e) {
    this.setData({
      detail: this.data.messages[e.currentTarget.dataset.index]
    })
  },
  close() {
    this.setData({
      detail: null
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