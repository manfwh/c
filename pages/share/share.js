// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shareSrc: '',
    animationData: '',
    showLoading: false,
    opacity: 0,
    saveImgUrl: ''
  },
  save() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.shareSrc,
      success(res) {
        console.log(res)
      }
    })
  },
  /**
   * 生成海报
   */
  createPic(e) {
    this.setData({
      showLoading: true,
    })
    setTimeout(() => {
      this.setData({
        showLoading: false,
      })
      const ctx = wx.createCanvasContext('share');
      var self = this;
      wx.getImageInfo({
        src: '/images/tmp/share-empty.jpg',
        success: function (res) {
          console.log(ctx)
          ctx.drawImage('/' + res.path, 0, 0, res.width / 2, res.height / 2);
          ctx.drawImage('/images/tmp/sao.png', 146, 345, 79, 79);
          ctx.draw(true, function () {
            wx.canvasToTempFilePath({
              canvasId: 'share',
              success: function (res) {
                self.setData({
                  shareSrc: res.tempFilePath
                })
                console.log(res.tempFilePath)
              }
            })
          });


        }
      })
    }, 3000)

  },
  send() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // setTimeout(()=>{
    //   this.setData({
    //     showLoading: true
    //   })
    // })
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