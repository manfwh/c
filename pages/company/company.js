Page({

  /**
   * 页面的初始数据 112.571654,37.82286
   */
  data: {
    latitude: '',
    longitude: '',
    markers:[],
    dashiCommets: [
      {
        name: 'marry.ju',
        content: '精通汽车电路维修,熟悉汽车电路系统',
        avatar: '',
        like: 256,
        star: 357,
      },
      {
        name: 'marry.ju',
        content: '熟悉汽车构造与原理、汽车电器设备、汽车检测设备使用、汽车故障诊断等多方面的汽车基础知识',
        avatar: '',
        like: 256,
        star: 357,
      },
      {
        name: 'marry.ju',
        content: '熟练掌握各种汽车检测设备的使用及整车的检测流程，具备汽车检测专业较高的操作技能和技术指导技师层次，具有一定汽修企业管理的高级知识技能复合型行业金领。 ',
        avatar: '',
        like: 256,
        star: 357,
      }
    ]
  },
  navigateTo(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.getLocation({
      type: 'gcj02',
      success: function ({ latitude, longitude }) {
        self.setData({
          latitude,
          longitude,
          markers: [
            {
              id: "1",
              latitude,
              longitude,
              title: '兜兜汽修服务',
              width: 46,
              height: 52,
              iconPath: '/images/location.png'
            }
          ],
          circles: [
            {
              latitude,
              longitude,
              // color: '#000000AA',
              fillColor: "#2db1df88",
              radius: 300
            },
            {
              latitude,
              longitude,
              // color: '#000000AA',
              fillColor: "#2d3ddf88",
              radius: 400
            }
          ]
        })
      }
    })
  },
  phoneCall: function(e) {
    wx.makePhoneCall({
      phoneNumber: '13111116575' 
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