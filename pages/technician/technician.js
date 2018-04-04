// pages/technician/technician.js
var { windowWidth } = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [0, 1, 2,3,4,5,6,7,8],
    selected: 1,
    scrollLeft: 0,
    technician: [
      {
        name: 'Elienna.Chen',
        star: 4,
        label: '高级工程师;技术组长',
        tag: '技术控;专注;精通',
        introduce: '页上点击鼠选择菜单中查看源文件就可以通过记事网页的实际内容可以网衡量查看源文件就可以通过记事网页的实际内容'
      },
      {
        name: '张三',
        star: 3,
        label: '高级工程师;技术组长',
        tag: '技术控;专注;精通',
        introduce: '页上点击鼠选择菜单中查看源文件就可以通过记事网页的实际内容可以网衡量查看源文件就可以通过记事网页的实际内容'
      },
      {
        name: '李四',
        star: 4,
        label: '高级工程师;技术组长',
        tag: '技术控;专注;精通',
        introduce: '页上点击鼠选择菜单中查看源文件就可以通过记事网页的实际内容可以网衡量查看源文件就可以通过记事网页的实际内容'
      }
    ]
  },
  tab(e) {
    var index = e.currentTarget.dataset.index
    this.setData({
      selected: index,
      scrollLeft: (index - 1) * (windowWidth * 2 / 750   * 128)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function ({technicianId}) {
    if (technicianId != undefined) {
      this.setData({
        selected: technicianId
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